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
    "5bDNZ8uqj8V98GpQ4Ng2CXpdYs5TqH9qE1AF5H5sJEY8ACuYBqoTiFVbRjNNeTXPQraTx3oCV3MtKrStRok8MMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a5JEoSemDFoZEMsEjzScXcvvsq25EH1dXSpCFYGpngcqBVzNLgewoV1UZUAFpZ22wXt3rCVcc2wchWpi2UoX7U3",
  "key1": "3EhT6xdLCjwfCSks1AzveEjf8kVoGvw4vF6F8qtjC9WhZhk2RZPgn8JmPTdAPqBZzmsQwZbUD6wQ4RVPHuQ9t1PX",
  "key2": "k7kUaeSLgVzkZBYSokWgxSFm8NsfSXF5jNMoJyTfqnSDYhbKtWjXcZ2xRJeFGfeGrLTZboqKSfNLY8GhMHn4LP1",
  "key3": "2mqrMnCtTwCrLc9UZq6yevyZXCEkFESGda1KR3j5esa564NefAJ31NzWQuBMKREUJ3NgzY4522x9nrcAYH6L3iek",
  "key4": "4FhWcKeHwWfzuhzWRFMJXppQHG22t9fziwRc454crnT8Vb7rFkD4dmeLcBjDFDshroEz3ES6iu3MuWhSGtVT8ng9",
  "key5": "Y39fkQ8tJHnimqyUoxLVJATpr5chCj184wvuS5arhQrrR3dsiee6CMdvc1iZwQfsX5WSUPc5ModextSZJrqL5N3",
  "key6": "PAF2339rabrJJWu3dd5Tn19WLrDBpWVHRtAVyFkQuaMeJhS8ajrd5bysfozmhum8seZkbcNGNkFd828UwTnPmRZ",
  "key7": "4tF2NonDfyHcyfZpS3SPyUVT55d8TfwsxFqXFRnEUggw7uhqLJvXXfMjH11xZM4ptppZ5dhwnmZTEv3oNS9bTM37",
  "key8": "263ANRcqyaiTaus4LsDca93e4R4yYe6zw4RrUc4ReCcWh6LMUYuXLnMAGYmHLhBetC3e5zngWumLcU3i3N5oJhDF",
  "key9": "3tvyC2SXsWDpQ44nfdFWg9bHULRzz6SxkSyu5j37Vc2n4kqYmn8gRYXZjSFrVSSEmyr9AEjzhmB677nAfGMSp2i3",
  "key10": "5v7k68qePtqG8h78JqW4YCEJ76bf3URKiLSPDqYoMBmbefFuFfrBcf1cACoWpediePpHvUtt6u9kWjrd5a6vjjke",
  "key11": "5o81YWB7rBHuYGRw2ExpTfzbNnAV6g3sdyrxhPmukcHi5yL3L9aFZ5V3L1XJj8cBPCHtTTF5uRRNdcFFfCupZWdC",
  "key12": "3CferY22EuWbmBXfgZprx4SYQEpPk16mJ6UqYShbW5XBxySb4b1d6ocsvU7N1zf8BGLYv9nUkp5qN8zHCu17MYbx",
  "key13": "5BLN4LUvgMG35b3GFbUD9c3ZpsHziJYDAAYw9yisiFhvuqc6ej6MBf6TzL6X7jNQGKurZoRohJB6ZthLWERpaV3S",
  "key14": "3m9xKjVgG1S4rVV9mRDakqZ1J2SjXJo3frdCmchhapFPtZLN9znk2G7YdAqZznoCV51uu5msd88N3GXcya7HAmoN",
  "key15": "3UgFxHDGd2EkGDLU2naJeMRWQNyDnvpqk1dwHDQXFAZY7Rtx3KX7pUHJii5ikqSBVpLvg3NuCi7xB447nzXgroNa",
  "key16": "3RJeP42kB9mTwUorBM1gJNYwX1BQz1C82eCRvbBNPWhW7iX5dS52ydAr6DpsX3stanCgsiqqFTKKNa7fMH4jzNnL",
  "key17": "2e8eGwk2ysCv2pomBnCPsfuYKGfJPuWj3Xz6skEHeFh9D3Bsj7sCMwzPZ4dBwcQskTqDdT1Ve7XmoPXDTjueW9dN",
  "key18": "5rkkBBK14hTyAwGkXqgs2y5cdjM3tX7xZ4PEY8F4ChAxCqDreE5Sjas4Vp3ZxtzWw2fUx36h7JFE1UVNDkHUaYYv",
  "key19": "39uz6yJzCgdSKMmmn4MK7L8aPy6xwo2eqHJeFUyugG5SWM51L4NiCqVdQEsu2B3E5gQfxRdidyNwrj87Ayr6EbbH",
  "key20": "2QxvhEN9yQtkRx2HTnw6Sc8yhvBrSKXKHeqZnuHJdxE7swSZExSe9dHzbQNuQdtMUQY7W122xvqSJvk71ggPXRyW",
  "key21": "2wLjjyjWR6i9iY1kxTsLFoTbPGYCD51wppxUAtYcLcpewUzNrC6FSFJeexmMqM9iB4Yzz4acPmbQfLxnVCMBcGzD",
  "key22": "4VqoFyDcH1i4jueeW73ESZ59VFarc7gZ44Xnn4JhMtoHHcryLK3aJdLpYjgBzyY51s6pLnSKV3Za9rUEzdKAT1km",
  "key23": "TYFvverBzrmb1qhuMD7eoKgbt7nM51cM91vX5eRmiJmqyFLtUYLAtDhKSPk4QL6jpo9HuYaVPUfwsWAsqQcNDiQ",
  "key24": "twjFw5AFMuxVsBvd3RF5XjKD2MWzbAHRsrzxmooj9NxjgC5PXedzZ2MR7vUzHbVD6f1ySSA3NVxNpapLdKEtaPZ",
  "key25": "bCUER4khKRxNfCGRoY6LD5KF2Y7kX5ER37UmURWERGP85dFpkoPc3YBL4KJAbSVzFmpWqSZnn3bscW6TAtHPNP8",
  "key26": "4ggyPBWWMDD6M59VXc6nrtudjcFoFfjezewaVjm1svANW9QgCHu2C4qpiej5xtB1e9mqxJPPMy5T5fjunPzpq8cd",
  "key27": "4Aeq4B2dapYkTJfgyJ8xkyEPC8BKzvrdgAAipGWe53Hz8ZPL9Dxh33pPpGC1AmA295iETuWuKUMfib5AU9ckx9K6",
  "key28": "3uKaN6EB7zHHshN6Xk6Y6PboHjrmqRQEXFGJczegbFnVZrKxXnQYwou9gxQJTm1EkFEyruL7AuhJMDWKbwY6EqET",
  "key29": "2yXyp1SCeybtwFyGDJc6o3ubFVtqVGVnVEEjGjStAhqSm7CEys4i1fzfVdQfVppG6gXGfxnnVRtktevTx4BFeAuz",
  "key30": "4bgqvkjUUUsiKNVLKqhpwHHeZoM6QsFrYxoM3XyjD6mWT38qUkmR3ReR2W8h3Drx6WUSwCHiYnuGkAN5yuURhBs8",
  "key31": "2uVLj7eoLijZpbPadT34SFEryyVpJdeay6L3kDLMTxjoK2xC9Jyt2XFMA9KvPhDw6Yq2Mq2Bi9BxvD2BptAq3d5V",
  "key32": "2zwNqygVeFBv5T2evGU9Pd8pWUCAqQLAogFWzGPKym8rR9u1Kx72XYRXiWhcBmVBHfmBJrUDGzyrfcsyQbzAYstL",
  "key33": "58zbZP4Nkfa81bog4k1GorGfqFPDMMNhTSekbeRKAJBdconHUcKjTFUtweM3PmP6cAhVudqmLjkW9W5tiZRrdiTN",
  "key34": "38avCLPnzenvxFTY8Bnwpzmnw15Cx6uMcdfYZTFEAJ8HTfGkeAjg3bbcZqY8VXg4kzJVVDWAGqnwtMAMCfN68rC5",
  "key35": "3xiMjbLdG8QEtHSB3Faf1H2LNJo5CmoFAzsr4AoSZfCkBr99m2US5tZwAXv1vHaaxwMNauUZKAMzhGL2nsuFexAw",
  "key36": "2NQJQEmCV5BwNeGjB1Z3P98DL7YEQ4FiCDCdS7ZunZEE88zYtauUqJzfnEifjM9Fck6vzTCbVSvpAVPjdU3TKurs",
  "key37": "2EbagRmZvikDm9S3KarU4JEa7zdnNLPeSYCmu5WC2wrgGZ6hb32w8r9QLWkpGkEGDR4kxvvkjs7qbdwUPwL251MH",
  "key38": "553CZA18dLMKXz7QKstZES42FfjVSLPBknizy3CdkfqEMPNEtmWht5MpvJn15rnzcMBZsGoNgzEpq6zDfPgot1RU",
  "key39": "63Vzy6PUdhKfvZitXtA197xSpXK1CA1d9CoKuXmp97A8S4AYAwkHhys675EJ6SkLR6KgWGzyqNF5aTiYwYALoNmR",
  "key40": "N4MNmCBfQAE619YRTs5n363CCJVv2PKwycRfiy6cvBBGqNFpWdXtaVnMQvEujNNrZGCyxfPvCsRPjntnygEKhir",
  "key41": "5LcSNALUkmmHfnMEWZqsgCe17FbZmFrLn2vJWXy4WiKZrvPUYJi6Da9n5ptX4Z7NiD69AQhGDwuLSkZ4NwZJZ54U"
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
