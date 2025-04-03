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
    "37cvDdwuSWy5xqZyyu3VjG85sayKZd3h9KdvPtJpydBS6ej9akWsYCiC4yNQLVwaeQ6PM3qT761ke11kbUNfcJaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XjP3dE3QMUAMLGDoDAQDfrMAynkdU3ZHFBKy7LgkYb3MFYFsjnxZpBmqDXt27ut4GXwDAMkoafax7RsZX8ui2F8",
  "key1": "2ZhPKGaHgHXNHDbMXoVMaXnKWvuaQjtcAYkAjFp2xRmbjb5iXj8DsYv7wopUnwgowDxnTMawCRqNvjodK4FrkJ1M",
  "key2": "E8KPQesNfqu1gUftKz6PcBsehwf38YU2rXktQ2acAKpht13yZnMkZo88usCMK3obFD9KUUD1t6Y1uhxR67TscGT",
  "key3": "48PFCmpYHQdAFq7jxdToyr6j6YyyhmYc7bdursro1ArgjDzHsF9sQoe38BBXMqheMNpb8xhaRVjXUGFkrkP99ojL",
  "key4": "21Wk9Wnwuax17cmRY2AaianvBKuEK2rr4tdVtm8ByrrEtGguyhXMGayYrNbcrqPDBCcbmsHsPSxtb2Ty4NWts1Gt",
  "key5": "5ZKSdoejUecZ873NnAqntYAiKdcGb3KFfS8Fmnwr1txw44bMGuns46NnnU5MSGnSob2ABFsknMXszB6QRfy4dDz1",
  "key6": "4nzxsdEnDCtbwZ2jrRSabyRXMk5a6TsLrbcNEchMposimE2kBV9Waw8ZahhuCZf3c1SQmgKWzSctCWqPXkk7HJJ8",
  "key7": "2DYQgktjTCAcCdLDAQW1nzonvNGKf84JtQm5Vhs6s172NT5Bu31Q6QrXiBvqDGuk4jbrDqMNwmft1L7wgMEMuVb8",
  "key8": "AhLyfPbpAsx3pj6TwBcpaTehT2JjK1qryko9FJ8Q3YeiDBDXZy39ymZg8PfTmmbhU3gGskEdwgn4FSSskkTgMot",
  "key9": "hWAdMnaqaMZXTeo4tHzFj4tKh2PeoBqQHPxcxszankrhmawszNT6DfdjdDY9mEWEutHWnSyARV8z4zPGJoHk9rP",
  "key10": "3DRWj7swVwiZhxRjrWeAYzrdXGmn6DpEJcsaDsDVrkz53V1UEM815JcQdttBGLw2m1rY1f4A4C8pp4TVazvPA28T",
  "key11": "bwkJh9fYxeie8pis5ZgZ8fye14Hv2a9Gs1ZJtxgVsiFXyTSAkMZDhdWFTnFYkv2wmYgJKY7XUzn5VnpZu52Y9zn",
  "key12": "586o3Y2Pnpiond2VzADpFgKhp9HbM1c7dDvX5jwhWCqQ2Y5vqJuur9UwAbJ3MMvVARfBCnfPTs4HsRQLxqv9ebvN",
  "key13": "671E7tt6KU8irFSBviT2HjiTC7x72m83heeL3w2zKL8UZuvvdjwnZUDwExpZg2pYhCJT36P8dMjvr7oN56Wnahyo",
  "key14": "61TwqLHmniczXYcvzuyZAUaMPo8TeTRy4Rx6ep8eCSXdqpkJMkwGHgLd2dbureRhqLSQWwgSFZJ8NXwuNdQQSVBr",
  "key15": "3bgwkFMdA62amcJu8n13qzVak2U6xxF9SRhmU2mgzVWzWCva2CzpzZWw4M7wVFYFAyzcSSQHRXE6aRqQTUxXf5iZ",
  "key16": "5viWKhEoraAgsTsGjp7Xx6AQjD2SSUmnYqdwkmbp9Ft5ezphWjSy5nyfL7KzyQhypQWBFbBLyCuwmBAeL8Jbc8F1",
  "key17": "3KoTV7u3SJwSKTZ2BUhSCRTw6J2T1tJR3Hhy3QtGnP4xTaGzuyJHEXciHR8VQ1kRXFLaPNNFcUVYV4yCPCLobANj",
  "key18": "5d4zrVWvXsVGjQAb4nGdMMvsYjcv8FfHVCUWHASXWC7Xs2qbfAykuoe891crb1WiH6KWvtwsFVVmqfy7PGcgqw4o",
  "key19": "5RZngBSZiw8WWvXNW7s4xucAK5qt4dyzsS6QSjaSuYMMWPJQQgj6n7Ari7kQ8SNEHfMurnxwtJEDVCLCohw8BEH",
  "key20": "o1C6xAyodMaG7dzTQ4BrxCssEnH7gahcJH66ekudyYt3UvByG5mqs5jKzqV3bsocZQsYsL1Ar9R1gCbgE8LFE6J",
  "key21": "5aCyNtBQbxvU1pTYYHDRryMUXN4tRjBcjsWzM7VE3wHP7jctb3yHLeLJcQ2gD9wseXSU6BUDZWosQzA3fgK9fBDv",
  "key22": "3YRmMXPJUjR1DARAge5BGJe5ZCLMZi3DZsrKKA3geYhbgUmDkhW3izBdZB7h3e79DkzP8pXniwmEqYW1JDjkVdB",
  "key23": "3VqEdPZBNRcrqzYvFCHTcgjGVftwwfZaoPsq9F3HaUVarPkR3VbbrWoEbmCEyZRaD7rzAExZtbvTqhB9foRgYVt3",
  "key24": "2BaDjpokeSmAG1WMYNQbrhGMrW9w3XfR2HqdR2ssqjkhAD3KW5zxpCeTe3fKuWm1cLWnVxCKyKbBdB99Vh56k9nH",
  "key25": "63X2fxkY864YNEbZKcssnDXwAfeG2TUS8THrn2Hr4r5rS7ZaGhxoY4mV8S5VkdvnCTe18jwBep7RNYzGBSBahwaW",
  "key26": "41yeQrNzWBgdVB9JUqR3nEHnQ3Lur6mT1qbgarjTgyzr1Yue4AJeTcWMs6misQYpG5qdGZQA3RBN3D1CaqZhZuge",
  "key27": "4Faiy9GV6UZgpzc5XpvP7Wuo6PGu37itnfmA8XqcjEoQAqLBGQkF45mqGfS7cuJ54SaqpHmigHTdTTm49xzUQ79q",
  "key28": "48PHMzjrkuVg6mhSj1J1cQyQGRpQBozu9iifDUT8tesz9ymHJFnzHuJYen3Au6unTfni1kVBfBHTMVKbWfJF1RmT",
  "key29": "3KELUD8MHkUtbfVY1BDGdEoPVN7E1uGaBpAL2FP6FAfNtDzZCVAEjxpYUSsHyjhmWXiMWXD45WqeBo3PZCw3PEpE",
  "key30": "4EFZQkff3BDKDRotk1fbP4s3rD6LEmEr1eHYfGqQ2tRapyJmdz4noHtqkMvajamK1WCh1KHAsiNuSNmawSP8v2Et",
  "key31": "R4oevvjt4W1UVcA8jrmXwQmPS8XGir2Rqi8pknDLKYGiaF7ZNszJT2w99hkWZMhzqGp8bEGDbELNUES3PYy64pX",
  "key32": "5feUbbihCAkTz4GtH3edMDW8D1d4bwaRnhGP472fHTgGcmrkGz35jrn9qTTMZnzMkDMXSwgiCcN5YE7HDgxp6mgr",
  "key33": "42jnPcW8YFkjhZD2PLEQ19ypUm2wz36GEkzsAL1j6vdnK7R9JW4prAhvmM57cVYkttJi54bGHGAkPzus6bXkkUYg",
  "key34": "59JQ91Ecmrcs7ntgsn31Vk3K5HAkchPMAzVAm45Ziqu86kyzfo6BUR75YXcL7mJn3ZhzghxfG6q1jbyt4sMJNuZ6",
  "key35": "3b8B37eKNBdoA3WgoWkrn2iaCCQiBMgttbAS1btaqpGB1CT4Lktcni6XgnBaMvgsEyy9BB37gu5GhKM1JPmyE5Bt",
  "key36": "3p38qH5jnRNxBBafca3ryM1MTZNZNSXXg95GmUVg4K9nvMMNfdsr626mKmPByo4GbJrtxkXxii5o8cFnb7pNsEZq",
  "key37": "6QW6U7dYFQNp56LqChtcq86iuJRQoD5K7qQ96CFLAhi5VcTrhko1QzXBSy1ZCkjwDTndJ9SjpMWDqRp25CV3HNo",
  "key38": "3o6imyiarQuQaJ2Yo9LX9xDgneWudWXBcS4sjcQNv5pcXj5y7zjw9roL8XwqK6zyikfLcseKbVB7uTPGTkd6aNvY",
  "key39": "487rjNo9qGEzqqsoMFDYPP5UMuimZTPehU1NrCwfRddKAfadMfS2Da2sFfauZpDvTG8MwNqWZ2Csp5hqoE6rsBWX",
  "key40": "4TvAVC6Qgx7KhyD6dSfnDJo31ymeLPp35D7yt67Sw2V54weNPuHotQEsL1nFgYYbU7TpUNjEnqn8q9NsK9uWjWZr",
  "key41": "2Hjy7SNz5hPkkZ1oEiUxvwSMomG6KEAfzVqQnFZPy4d1FZxQiicbxDB8UeCgQdck9hEwNeng8sXVMNz4Q4Ds6THF"
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
