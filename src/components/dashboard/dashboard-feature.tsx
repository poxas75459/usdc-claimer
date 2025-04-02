/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3DGN1wrARA9t2unJsfBsBofUhPwcEUNK9JkPM6tgHDW4JWRfu7BSK63pHw1pGEJq4GZW6VKcVEXtKqoQaAHvdjsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KuvZuuJKEUq1J8y89J3MCF3kFz5ExKjzDvh7yiNkqg46irJgVtqyjrTrpUm3qAMnbejFkqJq1abp4miu5LgUrLS",
  "key1": "5m55GrnznoJvycWP9S6s8QiocYZNcSKQe41mpUpFiiSckwzDLHTG8ssDA46fdaPqfnWRpkSBENRvPxPZzJo8YwuX",
  "key2": "2BuQkj9KVYf5YEjxAqAjW4HsqH6qtqKwUAd5xASWAENWTGrBsD4pwzyjMVAySEB5RUtiHHKwkQeNLCbgRc6j8G7j",
  "key3": "4vwH1em9uPfHvrueqXywtuLvPMtwdPbmRaMXbNe3Nfd85dYGzumEc4c7b2VZL5pRkjXDrhy9WMEyTU2AxV1rjqVQ",
  "key4": "5RTcDA4FHtELrvj4VTj5CC5pZ8vrMq4zCkixuTshmZniY9VziuQo8j81uA4nmP4cP8RRoWYQyBhE4o2q3W8qngYV",
  "key5": "2oZC97ryBT9QYXK8QcdwAafLvAJmVw9G64jAbucbtGFxkKkT4WZgF3qTqbjzxizpATZJ8qgXFhgPntueyimGikA3",
  "key6": "5iPaMF6ng6sKyHRgsTzaxgiUMXdTdENRx15kgNF3PZgFbNhxGNQ4D511mzAmU4pbxt8fyxVXX4PYAHvH1JjBX9Kj",
  "key7": "484s187epTP5dvGxMpFFrNjHRwvH26G689ocbx9T5KZRSe78FeruMxc6baoXDZe5kpjzCowWhK7iAcLkCdNcWmRX",
  "key8": "XunNmYEwf6xCe2PboFnxsRY7693Fw6hYyjzBSfvJpQ8KTKbQB3KpnYFCHD9E7jdvq5ibf8hmcbPrawJZa95WmAk",
  "key9": "FcJhw6RTCea6Xmke7hyS6w9Q9YdYdccXZYbDHtAwkC5zfmT66Ry4Apm8HncQuu9cV41zXb1pAePpvPURKCGZ8Zj",
  "key10": "2cindy91khCxryPEDcVb84HB2J53RQDb7T34mP4nKANMXnNsPTRD693rDVnbtCLmskSGEhVhiDxynv4LCPkvAC5i",
  "key11": "56D8H4MQKWtSTtvTjWREm7AqsiTttHHf4VgAQC1qDaA63AbNebzJpRyumetW6yZrgWrSFsUDKZHma17Lymbj2Vus",
  "key12": "b8KNYnaYTty8CS9jEJkJ3rQBptqKvqNe2pbjCyVfSgAidbZLzy3gitUzKFjmW8eVvahbG1VdihXvTL1ziBpQP5z",
  "key13": "xzKY7hxpVEvhi2KqniAoBZdLVCv9VKT9LUGLzvY4FPGUhGXRyUYSbgHoq96UReDbfr1siubEQuaJYdyYpFMGw3w",
  "key14": "5tr43SNMgx7ARkegNeyxqFgix7ZfFCsrE5JLpvzhef8jP55qePcAgNjsNtNhTwuEGAJ7zwqmpPXSSvnoSzNntcmK",
  "key15": "5gcjF7Aw8g7DchJE4GiVnm5vRxhph6bWFpCDjEtkwRc4dWFGcfi3w9fU4tm8hky4LiXh8DWxfC5mqYNLSR36mcsQ",
  "key16": "3YiPNFmzWLFmURx9fSujzgxWXKt3zBSJE8wj1TosTo3WMECxa52DZezkpex4792Bp5jTk6jtiuUaAW2WdXBJ5wo4",
  "key17": "5LvisbbzjtxjwKynVCdsrirkNQqNacGsVtMfwEyxBYXijwzFvgvCz8SjmmmGs6z5PP85HLNH629KoNXhd1XNqbrU",
  "key18": "UvPeZPsSHmMK6nZN1XAPmRU8s4ScGkkjkdwWXy39nNHeXMT5zR8795Wefa62W1DNx7Ua3UpTApfXmpk8HAQ66U6",
  "key19": "3J5KY5ytBfCtEi5oUtJi2TSf6tpQohH54rY7oM2YFvac12i6oTe2YL6LRuvo42mEm5K7ErinJ8MHwg2tk93DR3Gf",
  "key20": "34RbW7xVujW2WYA2S61Qy3UY3ZfCBAp94GGgeLBzY3Ld4FiLdiv1NoW4uWWMTu57ZYyhTVJfeZAgx8XvQeWp89hf",
  "key21": "5E3j2U7ZiBt163qExwW3yGkrZPDetD3fsE61UVwsKMxzuUAf7Kzx9bAhL3Fz5SZhGsU6VSi7f1VjG68HMy3FEXgp",
  "key22": "2iAoKn6tybLjN9zsp6gso1x4fLGTz7tARSRMrrjLmEWM6oMtPrWZtKX7sVUyJhDH9VENcrjHSvChcNbYmVqY4Eo3",
  "key23": "53UbLCB9CWTpUYtYsZnTWgPgVp1SwsvzfMcBDGvC5qmk117MRdqB3dvQNSihSfiJXC1rPPwPhet63M4cM4FP4hFa",
  "key24": "2MErVC4jyNMo9yB7ndGLhkMLfFGEjXpEjKHMdCKvGsg74qgzP7zhTp6ufy6eZKnLtBa7dWAQeytsFiPZxiAdT2dt",
  "key25": "KfFKoNXxjhTMpA3mVWQFpdngXjM8PQEHEWGJTkn2JH2TGnK4FfDsHD2LZ6yVoCWd4C7TH1VggKceiw6RKDPeyFK",
  "key26": "51hp8T1SmhTfv9HswfaSX1NDzKQRWbmrptr3USs6JWFsYwpQeHQWzByo5k2A4CteJVuTjmsYuiEGnq2siCYXMnSw",
  "key27": "3hFHur8jzVUuHoNb7pjuDNSbz4dLRCRqBVKWLj3eZZ8PbwwFQXgxuEvraaD9V39agDnB97WHsqdPbtfZqTE8fyDj",
  "key28": "4aWCp1d2KsZceLnsk2UdNYDr58CUG1DY9LUTEFQY3j1GfSDwgLxf87wZpVjhQciBiKZVzHRKP2cVLinS2UzrRCq5",
  "key29": "26XwEXXDU7CKAM9rQrp2iEDHk7ePJwqXqfPtQPrHCBV6AkRonABCCBRKhtBhfeLoygBAKS94AjYGvM9dUv47RzrX",
  "key30": "2dVSVgWPpfbxHgrwBYUtJwr3WKGy5GskUSKjbkMvwDEnhj6fx8QhtAFPqLCXtxzNCQxq9kaNqhXcDpCqBZFYYKnP",
  "key31": "4ccCiV2amUkUS7EBvpbdGsa7EfPnYoVYu1jY66iueJqY6mgzAkv5zSMiKwp1QuLQ8ZkmQS6Z2tEUGaqM1uFyet33",
  "key32": "3ahJeMNy1YAdXvtn7kbQ3QtSApd7jeAtApQdmxYenmztWHeqqHs25Di2smaE9brM1UArzBa4v1smBRXHeJ53c3rb",
  "key33": "66831YHyfp5wiSKPduhbS5ssqfz7XfnGyWgM7n8rp9r1mAQ8MBsCMQ4MA8zK3hnxnCGJYNH7fMu3VSmytHJbrJD6",
  "key34": "2KxMLrsteGVniYHPphYB9ncUMuZx4ESyDXnbFBwP9iTZg8x2nDYeXypjrD3ipMWHRrjWbPTgEfzzehm351RPW9NG",
  "key35": "4DN7vFbzQ6TEXbeVkvjXKPt95RpuWSRVaJTxoPwT2DaSXn6Ce1XDvxDnKgvsJ4YrZno8TtMpHbkTrzx1itUZuba7",
  "key36": "33jsfdAMgsJVB9xrZds2BQMSGEJcw797gk6LjPaA8XTMnQ8WYJLAQZSWAPXwhw3x9TojsCL6wXsDTmv9vCy21AjQ",
  "key37": "3XLRR3RX2Y8v2xxtTHPgbigTKqQcLdQuLoDWJK9QRYmdest861KHe2bfidEb9uTgMXgX8roRiJLdsZX9aafApKTu",
  "key38": "4xhLsRqdqM8v6Lr6rorNocRyJsUETMKy9RnU4mDgDuWwyQvSkkak58PLRqn1EmHdFF2zARw9TPP8ag5hA34Xaeca",
  "key39": "5njssSVknQqgEVhyfpuJDhAMqoz7vrJnc18cZU4FXSt2DvonAfUqNJZXtLvQLej5iXwBQ2nYChenjtRgDeyXkQTJ",
  "key40": "3Az6AcxkrHvW3dUqEjnVWt4VCLPBmJWgKLVXH5eBhgtjURkYB3cSXAebYYrPCsnedqpGkYugKLrJRynMNJQ9is6Y",
  "key41": "RVq4fLSPgiq9Q8tZz6mqXeWMhtzgc995j7A47t3Th4eASX9vpNnDSXWuSxAgouoe3L1hpFFPQwG7qxneV8Zymaw",
  "key42": "2sDtKsusvXETP7Y9nKr1boEFLxS4m6BGL3N1o9T4vFMRqt4TULTNyiJ1N3Acqw17tnzCsTuPjfxmE29QRgEwjHhA",
  "key43": "4h3hy9kYFQEj3uuGLEvfHPzWs5csaCVkrqsepZPAPTFjYYAC7vdADDpB8gg3pfdieBvVLgskENcCENKRtiC4Xp7h",
  "key44": "3RGhLVf9tacP2enTD7esqfMvuCJwH2gWSiJPEhuu4BY23VBePg7XTNvJuqD3RUZFzhJ657ZhTuvvMVrLifXetVcm",
  "key45": "nGwg571FLtJSaj3gpjUo9FHmGuuzDx5pX39shu8kxcLMKtaD9CeDG37R7Qex9zVGthaE9JFnV9zzxPs6mAoY5fR",
  "key46": "rMXDFk4mhKpPNHpECN3N3fPhtHLPN5KUPC3jXiiv8DA5TfXBfvgvVM8EEe6QBUP16s8jV24pLoBV4Vrf9Pxzp65",
  "key47": "3wsfyXUimqVhamc6SaLdxeAuHm6xPHCmrNT9uqtKjkfNcmsFu6gouAYnwd7s7SXmAEfNzjc3m6jJtZhcTkSAnPN1",
  "key48": "FLwg6BW4jA3KNGXFhTSmBxC1rTcd6EVzKYtLdcQC4U2UZBCQ3Y2oXkeVwKiE3T2ZSYh1BrqvK4mPnCzNYQFAH1Y",
  "key49": "2xma93UjkqCfwJxyd4xmWwmvoRt7mGSbyKaXof4mBVLxWfSpGiR7NncPrykebD3pRNVKqiLCjVkEQdvZjLw4vzjc"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
