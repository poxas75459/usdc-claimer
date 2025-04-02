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
    "2CMUNE4VKsEQ3zkwwMakdQavk9FDizBcubK9EBxcmdmUyNMQb73GgXm1UZn37AaRPXkorfd8CGiGxrt8RqDTtegf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dqi812da6sgSu1JtdBtR1tGaxQz2a5QqbNyzoc1LNfRJYb9ZfFvh4Q6g9QQbSJdBsT34zyvc6TQ7a8xU9WcXAcJ",
  "key1": "3xp616ftqfrNr9HgK4S4CnNVfsMQkTzrcGUUa7MNpeat1x1w5Z4PoK3qBsi26b4Jf714wZz7iw5VQ4KJwdvwoVoX",
  "key2": "61XT13uGyLUnhufEqvY3aSVkPnoFTsop4BGYroVGgGApmDkm91QqwGfKv1gfNsEmzg8cvJ1FW8gJFoRFmuyPymzd",
  "key3": "2DDdhwNqKe1HB3FBVh23nuRwDf79cXua7N4CEzCi99dHupf8qDPtqsPnfhhPTykBkevYP8XTtdQuJt7zRFCSEJ97",
  "key4": "21r5EjoNJ3VqPgrUdvtQe96aXBDV11ns3RPmQSLRpNkSywpvwVPSZTvDZ8GeyVyXSJEYfi6jr3ebGfZ2rxRHJqc7",
  "key5": "4iY2n19qqDjd1hjrThWzxNURyU6KLveaDhKjrqkfrYuYmT9YAu8kWLh9kdSeFLae7Y9jRhLygCEffYH5bD1jEnPe",
  "key6": "3h8JaUkENfYCEq7zKb8CRo2vidNig4XqJJMWNCmJW5g7wX16ByWojACFbYXza8Znoby7QjpLSroBixkJexwBF25F",
  "key7": "3RZVpR89o1rcQ4E6uKZTine7vgGjUSdJjNFzGxZmwiwuKiEuH6mtLfNfH9eS2BWnZirT2urQm5kNhAguz3rjzDZU",
  "key8": "4WFE1xKs6kNSj7fxqP3cwbnYirHX3YyxHYSGjfNiR9K5RpgYpPeCeVE1PABMxNMus16di88tsUoXaCRRvS5jCnhb",
  "key9": "LJi8HmCpQqEMC8TogXDP9aft5cX9b9SoTvSqMP377sJrikYM5L1Z7Vte6QrtQeqm8zyL8oDZaLyZbY6YXUdvKF1",
  "key10": "55ai5bMyVjbvLyupubmNTN5DDhET8MLqxgmCXAJLdwkXWWPWj1S4pgFGhtCoLRaCbTVSLRC1AWUKyz2EUMpc39yQ",
  "key11": "4RFCKcy1uWpiq338K4MwikXiEWAWKs7jwPebxQ7BCjAeGTv3SyvjcojDXSKEjZzZkRYFGp1skimLAg33XpDQBsjQ",
  "key12": "hribG161FmVphemH5j4L2bb4oFHojUDXnRCewEuCTzHj9eETR8UW4HcmPhaESr4ZrJz8f6sLTbthRqjiQd2MKkn",
  "key13": "5NcEkUhgG7NFtScXpaHdTvJaM3j8tcMtBYRyd7Mr4UyB1TmDJkWmqs2Smy4x5d3r9SpUUPWme7473zp9womFNUGp",
  "key14": "RTtUBXwERzvcG3udjJDGDQ5c7nWb1KicCYoP9tWzZCXkVWibynLkLJLjNhSF4AvQv1FokcnpZdrHAGcoowGMQcQ",
  "key15": "4BudBdEDGivFQZPzsj4jX7gjBT7NFMEAN58U5BHpmU4YrcPXMSLRsWL3WAi61z7g7KE8iYMEKVWd4MmrxnanyirB",
  "key16": "5rNu5cE15X8BnUwr8Wv5EWxe9xfiDpbP6eWWpuH8jvbZpS68zwYLP83GDVq2GGT1pA8w5DPaUnkx8G6BwVZeXKCA",
  "key17": "2b8xvd1pMkZcTbhVy69LZBBrqu8MPs7X5jpGk4YPd3xBFms5D2eAb2HHfaXxRC8GSjoLhqqxEvkNn7eQhNh1BiNn",
  "key18": "5tmz31f4vxts3b9qcEZ4hujhHXXdCYxwbTxigQX1SwySoCgCqkg3LWzsgSQu4NpKPUMfNQoSCqNL3TiRY7RxN3tV",
  "key19": "64Zg2X3snHhiapSChEsWAL1GHjSdeSssGLsqEioEE5RDNH2jQm5jrJCY7QpEeMaos4s75piwsdY9AQ167puy4zWm",
  "key20": "5bZKauZ2CDvM56XWfGzw8kZY1HkWLPhStsqNDrtrwxabeyW9UC93WhPFDc5WfuahhLb9Bb91Zv3XirnXASwq9Qf6",
  "key21": "5mwp8dqeqeFH8jZmzAVyMR5QQswrGgXBNpHGr1poMNiiUdqY8tY5K85WHKHtLxzbkE1HR1EgmsZCwpjP8rNTqMgM",
  "key22": "3GRPBea5vhmiYKUotTLFMErcJhefeMxmMhxfPNeUZLvtt7qUcM3FBMnXjUJUUnas6TGEDGdvzVyFFfy2DH1BdDcR",
  "key23": "4euUoxiki6sSakLn4CqXyiCRsseXEB73DA2mXAoVPNpas31UGpZG5Df7cBGr1BFGg99Zrvdn8tX81oLJVgVb4493",
  "key24": "5aYnKDUm3rtHth2fF5UekQwUzwAyn3wuB7mBoNSGKB94Z1An2uG59GSERQjYAVGShCC9aFu4snKV9hbuLFj9Na2p",
  "key25": "4XFzEKhRw5VwMPDGWSTj8UPD2qd27HKznizAt7jH5V9q7yGAVhoXkYM6j8XvUyDTCqDbu4s2oPyg6PcVY64sfZ9V",
  "key26": "5VwZ9cn5VuRQHJhPxAYNkgvNhdH2s4Xx8gRVgbxvUpBYQKT6es3ZBvNsXEJR7BTrzqQB6SjZNV3G5gj7Zb2RUJBp",
  "key27": "4zDwQwoCm8DiKJhTXDgnw7jqDYWqJXnUF9h4tbSg5RXkE98eeDfJuFqVDcTcHW9b1DxYR2eaPTLE5Vk8Pq4moWcG",
  "key28": "43sLrv8fBAPCL84aK5wTLr9AkxcK2jJPTj92cnoY7UiKwsWxFjrVox4UyuEdhRcGGGcaWZP957ouD4spxCvZGCKC",
  "key29": "2dAvTte7aV43i8TZGWd4hWX7izoJftGaSeAbxDkWwrZtbg9ThS2Zw8u8t6dpUj49c446Xty84FfNzcvQ32e4icKr",
  "key30": "2bdxj1dpP8aKjTjFCTvhudV6GuLgSjuHwoNRHYtqCrfupac66CTy6Bs2XEvgFNQWowbosh5SVUCYfHajYBkHc51",
  "key31": "5116EynkutBx1Jnp6nmEgNHzib7XW3DWqk84zfteXTrghucsJWgsu4RFH4XmmDxtT5piPBewPfyw3cBcNGqYZ1MN"
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
