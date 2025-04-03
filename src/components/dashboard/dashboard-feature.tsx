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
    "4ytzwLAJiywr3hm5Spa2FpsyXCgbBmVYt5c8yMxZpopuoy7eVhjrknbtb3NmrdPVY4jZyu4nGb7MADDZy4XEYQwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UPEzBuvBb3mPJ1W161HJhv6gbvzmvXAJdyKvkmP9SWqm9n9pKqpayVVYf5mzq1c5rjozQnG5YvrjjDGBwACusZM",
  "key1": "47aPfnhnJxTmxHo64dHBHN2ZLtcXfRJzCDNWjuQqJqkFRKDFgYVxbgoFAm3QBY91FCEhbpgLtnVT5YnwiNJV9px3",
  "key2": "CuWbCCfYV6LTNtmepusAS2QyWF6neRuGP6dSQs2RsTYFipC8ZrCVpx4MRj9Avu5EDGSbD2ybSjpjCeMw29ZfGp4",
  "key3": "2fwfyhnSdFjgdeL7RJwECQJtaC5doiHq7rEcuUtMaP3kfTYm4HHSX5meF5rfSaBsgsUTrVtGUdhXQXBQDvSh97L5",
  "key4": "4xCADsrRfVF8jobi5ZNP3TKfz6UcGEict9eFY4QhkSMj3QY9SU5gKWU8R7HPP7Y4WCtfW347aiNhWPFQjw6kf3XP",
  "key5": "ugKQbjv16YZjVSKphTPDAVtafP4iAqaMVnBMwt2y4ztJhRjCesXAmFuPxACuuHPb4dtRP6qha16NKEXkmSZqLZ5",
  "key6": "3dEpkUsYPyLaKxwnKH2XDMHMxxKQxBgxLXs6JXC3fcjZzoc2aTtFGNw2WNMdY26L3eEiKzz8m3DGCiTH3TzCbJ4w",
  "key7": "529a2oixKVgM6MedeAg3cRHnNomhcnm4qdCTXfpqhLDmryDQBxL2G8UMLiXBwM2EddvW3MXbh34Lz15gTZb5dsRG",
  "key8": "27PSeFAJZm958xTbehGqS8hSA7Rjfgexc1eiwC1kUoet6a6vtwsWPgF8vLtBQ12FEzzaUwCAXpJQg3JBhYjbmXcs",
  "key9": "hZN87ymzUNeGiCi2TFGzQZz7m1yRSiYfGyshZ8KVj2MHwK6ABfiiZ57iTVPWYsgiPnNsbjBHdwkYoecZV4QjjwL",
  "key10": "1zxKJwL5qHt2vn2V5c5oKU4jys1urE3n3bmRRHj8QDaZmM7FEH2jFxfrrD1ZrFSie5afdLEjsPNN2HBbQSXu3bh",
  "key11": "55HcH28NyaitL8nsVR8jMwC9V2ier4uh7fRSoza6Ga62VaDdd8mMvZ78fWseG6StgB13ZgcXsxudm2jHwGSRjSFp",
  "key12": "3oe2jVZ3AEwYGKaE6ezXNafhb1fYcAoUgJMNSvtzKVsDkigTdgfDDJ62jjeQQRuHcjUHjTWP28xg5AbhfLUYV4jt",
  "key13": "2wTnynrMHuBnAmNetVFecrfzAYQY1ijKZ9ABaoRSkDaBW44uKB1n2gG9d1ZLLL8ZkVDmohasZTzWXam8w2vmV36u",
  "key14": "4zNgw13Wx2qHJXdbk5vb672BBui8KWsfV5Xa6gNURrmSXK7QmosRoJCW4jSAPTh7CvjCx71uvURjnEHq4umB7xtb",
  "key15": "CHxmggd6KWzg79ugqYtZcFAyUYmZWtuRx5cdEFwuJaS9HNm4UBhhu1qvAuTA7bWJ3eokLS8f9XzCKiyb3u4V41R",
  "key16": "2ZiRnrkTyCPE7jgULiZ3pb1827bjpuxPFkmPnqWcrjUCdxWwLooj6CohGQnnpotBbbFXJ4yAJepixyPm26CAwkeo",
  "key17": "5ZgKRUqtXE9VjXZNF4MaxPqz6rVGNyU7PczQJ3kLeiUXpDMANsNdB6nNFT6axHkSXFuma3vT18f8qpYYq488vdDP",
  "key18": "3PoHSeMaoBsxaCaTiDH2LZUUmqQsfKVCtXoVgYEoU3ZaYPfkGLaYj38WtFEaCRDP8g7yQSE2Q9uUpBK8KkWKyhMK",
  "key19": "CLNTgp7zKKjAAdaEktCuCWqeGngMcW6twLwHVFxBey1VSDW6wurwXoZuHj1oyvQjDRju2wx1AfSucL31VnRYNnX",
  "key20": "4FFEWxjLTiLznNAifsGgrmtvAaDEZWhpeEGw5VXnNuJR1oNL3xiELtdCYuqMJbWQ8DGPt4pYirCY5iWkk7wUxH7K",
  "key21": "PD5CMQhYS7KDby9EyvreWicgNAdGdrDctAV2rRDmaPLEtoi73ynD3vtiUP1kGD4rKytW2rs86UREaF8Jygtvw4R",
  "key22": "3R9M4Ngp9VE9hRSre4oxDDr2oRTRuwUXAoLFoiizxv3Bc15gMTkuwn4UKDBjFpZfqA1QaYkT34aFzw7PpxvGfupV",
  "key23": "29ap8YsbfJfSmh5oZrqUo8eWJPkRuG4SLwYV6pfhAGN7NwSFX2SnhXKoTcu2tC4Nu1VUWcfgGmX23hwV316uwaLi",
  "key24": "LTTmTUUMfkapgvA1xuZ3UvDrmqAtKD4MJrSNC61YLARhEWLb8E1FtMiEA3dKtWSkVssMkx4KpApBDiujLwczn1E",
  "key25": "3a4BtMdt1od3hFcv82J618GrZWTKupkthVnWLKxbhj2ynLUWpewgYyw9ZechTqZiEY9Uh6YtRoheRGsHqi6VHDfx",
  "key26": "GchkVDEjZ2ndVz1WjQ7p8cuLcBu9JJ6KHP9e446uqNpWL2xiYtMR6FcjJypAfukAXit8ParN59GjpybFN8DFZ8Y",
  "key27": "2kQgjSzdPqSkPCVE1FwbCBMiUPtkPFc6qZeixfK6QgFEckFvkYV5CzsH2UJDfXwmDheAbiG1PiD7aMP625oaDtAE",
  "key28": "5NhTwFTmixMHuxdBJSzCtSnd6DBm8NpzkuMoNGYiZ1Fs1v9YHLnwp4tdyDcpGakwmzMo7se8c9GrbsLCxhtAR1U9",
  "key29": "FdxpZi24SWtDGvN2SPjtfMc4RN5urE8RBJ3L7EqKBfJJtfDjRhQVkTX4XubdVaZJTGwzv5C8tnYfVJi781VZKv5",
  "key30": "5nB8YUshhh4ER5KeNgKWAVgzTqBo4ZkuoC55TnTV918oWDDDKzXMfFd6vKUnNBFVKLGcvZw9CFfqN6wC69bSnrQJ",
  "key31": "XB6str3ft9oiyvP1CeccnuuJbHJYzi5opyB9iBMd9TGWtBkF1c9ngnYF2mZqm49b1LeSgN5L5irs994ku1TuTdj",
  "key32": "5DHSC2u15P3ByDbqW2KjLuigqPB4EiAYJLjMftrKjyjDDLxVxhHAGcSMs8yYT67EDfCvi7aSCbAgYn7a7nnJLUor",
  "key33": "3mQLpoNxkoKeyrGJUtEKEuHLqXmYCFe4fjCuuRtvbTnwhk51t1o37sKFxqzukovtxQ1qczqF48Zqvg87rRwBf8GH",
  "key34": "2JKXTNiTcNuBTuUQBjXTw39vmMMNZNiuHMVcwnKUiLhMjvcpnZLCF9qkr1qvyfr4hxAs1JYJAhWiHzwSqksNbqS8",
  "key35": "tCj9JSkzSyvbCZfRJGztoqUiEr7Lc7GKMQkfLrFasqiJbj94WoFqN673FCvYu93UYsNdsGinfhM51sVwjUtkYXb",
  "key36": "5QaSb4SgH4NWKt8fti5iqbVmSDzFhpxnXbwx6gVVsVZ4CMM9543USGS3w51dTmoDF2NY3yBncw8yNYDoJFTTWBfz",
  "key37": "4avcAFbYPE1jqqs6NRpycTt3FF7xTHLEYAgPR5n6FJ9eKSLQko96ar3Ma43UxVojMUVAz7XtZqKiFzrjAtmthHfu",
  "key38": "31avxPhiiLncXvDzZKcaisgSCi21VvwQcmtxQczyhxjmbWsgTtmUEVaeErjS7MzedGAjF4vWYUGNqstiPevUBFCQ",
  "key39": "2Rw9hM5nTExwF62nzsuoTKJWkp6JqhShgrbSaf8x9bLxoDtBYSPbuZLaHHgWYHQu1qbsciYeyb4ZnGgtnWgtdsur",
  "key40": "2nhu73BJ6NF36RtG3GFiZemwER8YEiSYdg7AD4cKAqt7hTLFHgS9DPN8dFkranB2whoWUr9x9XmGXkvkSk6dLH59",
  "key41": "495gehvePppuyrXzyVxPhs78Wvt5AGkr63z5nv9jxWLNXpoyRCTrzXT9JZcU77PhN32Bd5AAH4LrM3bjU1BiPVsF",
  "key42": "35iSE7YAyc4SstZkoNYtmR21uhYvDtyjakuFWVXkDzrbmRAcqSW1FwAkCPTajPTmKeMqv7n3MXDWCvHg2ytPYMiS",
  "key43": "4CNQpzT6wuky7Num2zWcPvCaMpn7Cs1DHr9LkzK4zN1tzHeaZGXhPiVkRTyJJamLZsaYaDz9qDnfDX3dqGhBRpbW",
  "key44": "2r4xD6PxcrnKEg7znDCqcf5nxhc78a4aUGzeGuTDj24c4EJQa2XnmLRZiZETFE9JXix9MH4y3QN4JHKUKbNADPQk",
  "key45": "4CETNV9fa2r3aFZzUh2o6yhAJmADXaQqcPmUu2YjPt6gwKT5dcSrj3Y92kChupbs5dpK1EfssEoFtAegQj5UoztB",
  "key46": "5P4zknT1oAJptepwTJEooCfyvPM5cBYQiY8r48XkZELPz9Cm9ZtbU5Ed6wt9VfMxP3qGgDmTF4PEx99eYmEzwiRW",
  "key47": "3Psk588jBK9fWJ2W3cBLmewdSTQypaBkuLXSKucMerjsJ1cHZZ6tLCvWn1cFM5fk8T8CyfZtwzKfmypHsBFuzZRA",
  "key48": "539Vjfov4sAdHbKQp4Zc27LP4ALJQgrzgfV8zhGWPF5Wfs5G8quboLR1uqjtcf4Liue5psJ47r82R2c8s5rasv1A"
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
