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
    "3gH1XpWkVuUS7rVJidD9R9r1Uh59nXaw9FqW1aUmy5dqydkvsRt29kb2MHnvqp5e2X73oPxnaH715qNtjHPStL9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pM96dV1vLtnsBfmsfahuBYrnTAJS1kMebYfWdQquT7qFigMbxBD7gvW8u58VyApmTawHARYXGHtS3Fs1j3Ht8uB",
  "key1": "49CaPzEb8iVk4V94aH5jXUpsHKKT1Fm7iyvDF17ZSpQM8yCuD9Ww1v7aema6RJvyYscdSQs7QdaQPaT4SzcFejKq",
  "key2": "3yi7hohQkNp2TSP21uDF8vrpgkj8QnYrMULwEVzKTNFFcFu2z5m4p5eqFMH2rPQtNeijYvXoas9wrB6qY37zDGH9",
  "key3": "v5RyQTpKiqago1FdQkBPEwXFZctSusaHAiMEKL4pD54YhotVYMptKTexhnAZZ7GgEgFGiDUFSehFoY3nWHrwQ3b",
  "key4": "4VvWW9fSry1nc4YT6Q98b3xJ4Ti2p8oPdqNb8V1mf22LhTxwkowuzhALczEKT1Y9QdXxdd4rcXYt4uZs3vihYDvH",
  "key5": "2zYmvygTXLqhpoW3vLH7cBDvbQHEW6C58qATypFr1LdZqUs9MezYur7f3H5zAVxvU5KYbgcojWmcp44Qai3dFQ32",
  "key6": "42jnEaL18LfL27bS3HgmSFuodmGND5aZNNuRFLmyFRn4AzCyqeM5yZzc3GkYYtAPoWvmdvYvuvoncP54fYGwEzJK",
  "key7": "5VxtiXGCpJbxQNLPtrwT8mK7CXrMkUpix1pkuxkzbBoyLRoXUwF6wqNRPAwZ2uw1xyxnpKvwnuZQCTC5JBQsap5d",
  "key8": "2CRc2df2xdExsG1NdtN9HCbUjz8KPo8oRP7fKKJyNVFSnz7GoSbXG71ay2BVAui9xNHX1BmyiG2yk2iEv9eXjrFY",
  "key9": "5JnQ28zM7Cv5XYeByMxZgQT8w5nNva4NsZbacfyoCDJ6xHWRpdRiwv2wKn9xxuWPBL7RmK5gxrqH75xRwxYDcyVr",
  "key10": "2ddB4fBbAF9ZWMfRXLd9UNmZRcLFSBTF3qVSgzsc3TKo86eBvsRsumdFRiCJ71F31aXnLMuRh4jy5MhEfpDogXSg",
  "key11": "3wA5teNtnWdbtUbUs8CXNHEbTLKG6Bcu5UbEwFVSZtRTVap5efgv5KodTbTP1bhSCtRpDbmheyDTDYgESYgs5eS9",
  "key12": "WuW8Mzy9AjZeHR5yBiwECgMSE1QpyzVQGYGBgWDZiYKtA3YhiAETTQrcvhTmMGhM4iPwAz939x5q2hKFGmwCMcz",
  "key13": "55Ad5GLR7nkEkLpBG8ka6ufKafDLGX1vLT5xdQRQ43VQFuwH8fPzdKzVpVGX7jyTcAmPGbFHDPZuDGd7b8L5WG5S",
  "key14": "2LeaZ9cJguDZxLgRAvw8EVawF5CwPv7vMXentvL2AYDpW11zsvQbn5s5W8E4BPGiLqvHshNCnQMAAeDSdkzGzo27",
  "key15": "3mTQgcncgAFzFdaqZFpt3BjRheoLChNtMNSXQHxkb8NadVNFxhPRfqz8beLyYhcwTwgZRETee6rGQ1KbkD6N78uF",
  "key16": "5FJ11SG1Fi4AfLXuAnDnbNyiDxXYXvy1d4AxWutcxaVjfY8T2MgTw2sx8h7XSjtue8gzUbUUFwCrFQV8ccfDBwEd",
  "key17": "2mjxY79DXhtTyLvgjYq9Fyau2e2kmmR19nmpZYAbVErSUcgn1XyXEn6Hf7GwqJLbdSkuFXvaaPfYgAPkyVzzCmK1",
  "key18": "5ZGX7XV78P5gyuUPL9RmU12qCy5RTYJvtuNxQ2KVfQWmsFGGTPLxembv6h5rcnxYDsaXGDbrUff1PMC8sSZrTAvj",
  "key19": "ENSm1As2xfcLab5FYkvW1nZhPK9v748EodjcEyv4dDBorXGVpGKv3EvMkEbjMjXD2KBkzCBh5sXq4pd7ytHLmgs",
  "key20": "cDyTCYyZHP7tqWNZn9kwqBt1BGeBbYR9ZMcRvq53KU31Y3dwk89fauNMqSDSFhCnXjUG5aEBfPYQpu6p9fzgmpC",
  "key21": "4Tm6BNW1vKumpeZq4rZdc5ULj6syMQuNKQ4XMN4Xmz3aJoVnYNpYytbiQZwGDaDf4Q8i8Rkobs2gCgjE4DH7rSSQ",
  "key22": "CQd3zwrJDpnPHrEkA1AP6tsyTKVgNHgrMui6o3zVJKyqJccjAQUfmvxW1Q8axDy2Rv7jsCBgTzhNJkxR63iqK89",
  "key23": "yh5DBbcP2sc53jrcGWwan2EwyZ2V1b2GngUrNMgXrCmTWdQwY4VW87r4eeHcy85KxFfNLj7kBFNpSdDEErKDJG3",
  "key24": "jYnyibuFToxLVb9G4ppixmM8G3J1yM37rQC9xLpd5QgD5MMapshBNpStyYXqKQa91aAL6ZKNJvA7UPUYX7azddt",
  "key25": "55xNBcgJnu9ztdwDtVaiANwCTmADpjUnEF8zkw1RzCfw41cfrqxog1pJbrzw1Wb4X2Xabbn2n7JHPH7tvJfToRLh",
  "key26": "38djs4EkEK6vDc4mcR9xGC1xCbUMHxiMegKnriHet9nAgzGJw35KekbHj5UZe4zoEjhR2gNg9tDsvdBLC1aRUr3z",
  "key27": "KsQ8LbrgKjBsLjtLWum38m9RFEVW8JpXX1FpjzKvNYcr3hpYAsTGxnWAykNqMSYiQffZfMahMCAKZ1bSGG9ESd9",
  "key28": "2bBHssMC1RnzRsYVkeo6zerSE6Cw6vHsSeWFLpxsFxxUT5v86G9QLhiMuH8jqBcSANxosikQ8WWEL8Zq2Qyj2xLi",
  "key29": "24XmERVkTqcep834UwojdxTBGt4niLJr2o1cqZdJtjX4LaPobHFBMobWUopAhcWUKnB2gctikaRA72aCMDdNEybV",
  "key30": "5HFN5m8f6tQ43yuykDWzPDGqzWiXRww14fHHeE2AiPQ4FDTv5YX9jL51GNbAXkWsTjjiYgJgpKMjfxnaZYKozueB",
  "key31": "4VK8pCweMt7fxLTKGYVS6m1qWTmGsnZqeDadHQ4QP4T7qMW5MVABhCkMu6srqW6HcEGLu2Xq8yp7LXJpWgV1N9Ko",
  "key32": "5pCQyr2vfiZtzzNWfw4VxsDP7oJ12TyW2TXa4cBKHuUG1xsZ9RNh53g77AGhAFaTo3he6YidvVBeGsDznBsWVj7n",
  "key33": "Bpr36vnRowD2xeDZiaZd4g3qpTcQHbT1emYsaUDQB8BMhS2d5sNF1XCDC8BpM3MHgfx6vCykCtMuqTJa34J9PJ9",
  "key34": "WvWQWCLe3Qfd8sBAwd68BcbYwWYzM5uzxRTvW7nMXnNWMTGhxRaq18XSecm5sqaLXCWMGfMddjx4QR5AVTVKBvc",
  "key35": "5hqAw3WGJ2rYEAnEDNdmc25tJTkTyYRJniBHpwAgFX4vYNyMZiUhRBuU7hwNYKR2x5e4qcWwmioAz4L87bt4A7nw",
  "key36": "3hCHEt5c3V1WPjCwPQBJ9K4votZMKukx4BAXKRNhM8SRDgxcFV7riaEhvi1SEnGxpchmZEZirQbpmuqVW85tux7T",
  "key37": "28XwWDSXxH4Fr4uh7PPrYRyKE9ae2ezRQCgFfj8dVvUp4cgZdVdY1VuYraDJvnSJSorSmtPRePjwnNHiUc2HjNXK",
  "key38": "2S5maJWvtLNygeF9FRHeGcKd2G3jiJGwZ7kyBSuHrCXVhZjWT5r6Vs2Qc4ySue5NhV6PZZ2tN3EkXtjzA6kxR5rW"
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
