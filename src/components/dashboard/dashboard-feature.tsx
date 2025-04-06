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
    "2cCqUvLzEYvoELzbvM8N9Ujxt46M2zELC2mxWkQ92oz719E4ojp2vfuNN3h9cP6SvG5wUv9gkJXjYKLLYU9wXxuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44MV2GxikrJ84wZZ99zEAXdjwoYZ6EA9wt86Fs4nt2PBSTWXTkBbqZjiUPJVLAYxQU9PeGnr73ASNoqHd3rC7C9k",
  "key1": "3JWim7rcvUoG7kRHCXBKbytHsNYtYyQLbybP3sVYMnBbEMWC8zHSJcqkbf731dKgAWkHUtWidspYTjjssFDZQNap",
  "key2": "3xzStd5tPZLkjPphTHxehLviSwsDKyGGeyyg485kanzfe5auAwS9CYixcxNx1CmQHGYyBWzgGJ2JJcyd88tfVPiA",
  "key3": "4Rn3BXHMYnqFu9DKi2dEBDmbKdCh49fUSLKQE2BB3f38jfPtNQXHHM6BH9YLxePjcuvF83MU1t6cWrGiV3tdTCQm",
  "key4": "4VAvbZ1zgxM34UYGTGFzpnrx84pL7DynuoQL6PEKS9GEh8S4qpUQkZrXtf65n4Nfg93tEYdYb4cVnWkxpS5dN83G",
  "key5": "2kAqnAs6vndLULWJr9oyqojRe31BdhydggzizEwkR4uvinLF7o2vMJc8AZnW2FJgyvDAPxHNrJJHmWM9PWsgRwin",
  "key6": "5BJRnjqsbBcS3zpM3oN2DSj8UN2ymk7j1VXobbwwpBtG1dkTnBERN6bXy1oxouq5JgSqSjfjmhz9tvKt8Mq4uP68",
  "key7": "AAHPtUXYjczTRhh4Du41LiYRoyELiXS78guZfeU1DpxB5mbBpaxW9oyVcEZ4gwiZqvkq58XZzobnHkBFgV8oX9g",
  "key8": "5WLBg31iMR92u6e1bS2YEdXqgY8Me7JUKjTkZnaWk4pJYD1z9LQChZfjHU9C1UpQYBxG383RfLoRLuejEhYGGjps",
  "key9": "4nK5Y9M434mjXcJwrgJosL27sVXesX5xqsAbVWNy74HZkZ7dJGYmccdc3JwRds16bBuWtr5Wu74Td2Kat4yXYJwW",
  "key10": "3CzrqA84JEGWgkd3PGLCzDtV1sRLDQrYHv8iwhQiTd6u6pxTLkUaWLXXj5rYU79VnT6SvESfrxEByFfUdGfgQJxn",
  "key11": "41v9TLwSGQAwVqTseMdkpkAvNNxWTfhFqRMGuiB1kSKMPjk4jTaYXyc15Zus9rPEj8aHcDwiAaRso46xtq8RQEFo",
  "key12": "u9X24WL3SpXS6nZRuV4nKEpj39z74TGkPGWrohMWhq2qkXoe8Mrad1rFH5oqvicfZcDKtusB63V5DX4gfkd21j2",
  "key13": "4w6ZeJtwBm9rt9fy1R8ePy9pJcdzSwSw9N1xhQXgs3FxGHMcaCyz22t2pafsDKZ8cfgkPLeVggwNRUffS5hKi8sq",
  "key14": "2LQwSybxhzftLZ6Z4jXuJsnmGp8TavQSAJ6KJHX97ibfJDPWGBw33iurtqAnZCAsEQwxDxtjcuQyVB3rNtzzc7Ti",
  "key15": "2x6PSsN4SBvsuGfBbppA1Wg1kTkwa3PS9Jx6CZVsvRD5AxsGwGzibsn9cLarb9XJocBnxm2krXFpJHUC2eiTaztt",
  "key16": "332Z3myXJTMykEqd68wSDXz1w5xkd2nJnVCdQXt88Kn1KzAAgXSqHZw7jXTZwu4c3ph6NEj1zq1HMd7XnrEYZsGa",
  "key17": "2e6RRedhy5LmwZLPwweWibcrnGkubdpxPFRmLczXoiNcCbsH8fsNULrxboVH67WZ1z494crBLdv3XTyJkH1Z7f3h",
  "key18": "ftrQUUU2XxvY7AKgS7XsTf3rfjs7wpV5ELyyufiXzPAEp652SuHqYMxugBSekapYK71ppWxh9WJqzm6jXnK12rh",
  "key19": "4JPqFXw4NCweiiaXXQ6F3uzZCccVf9DVxxwzAHV7JtnBcpvqwV2cQ179MpzJQ4ECsgCay8uJsSoXX6uGkWuGbjmo",
  "key20": "4pjyP8uAAFUPGYencFFZm8AjwE47hxYV3XAcA7m3oDdcXCSU4s7zJKxrQ8nboGZJh519tvdfRrgr6nyajs6aJ6db",
  "key21": "2FVbpRLRNRT5oBHgxMZ7bGJgWuKPpY5JiNdAbix4shhvsHmbBS8StJNWTAo9QQmtowxWwLg5VQZFowmoHyUeCTJL",
  "key22": "4hsmGskQFB4trtZ2Fkj8U2F7mJV5Sa8gEoddXiVnfhSEypFXaEimkMvVmkAsMmPgdRoFGcx2PZw3EmNESJLaPXFs",
  "key23": "W5mxivvLgf1wu42rsPsEFZ859MG3neP7ZjhWBcbugVZuJ4EArPdDcq7fRTNYP3oxyMQ8bTcQ662qMk29sn2bB8u",
  "key24": "5T9Ss5Bsa15zR8bD6uME1HaycwMZ58s5jU7zzHk6TNmFrjvYh7fvN81UxJybrKBVpmhcQgYVLoZsChbSo6d2KCbb",
  "key25": "361jPbW4avf393vEqsJjnhmNEUp1sKqkZsRzY5ftoQDVh6k3Rvufz2pXCadoL6p2xkbBuyPfgsZ7w7c6giqk2n9h",
  "key26": "2eVdUSiYokDQCbpBBg74zupeqKiSrubjzdbt1NBL5LCbLEDxynF35XJmRPUbgEeEWpjqYJroerLToajNhazEWgwy",
  "key27": "2XAXMUbHxkwoD2innaoTcPjP8EafbxWDVYQHHCCCdvHCK1qPg6GfDbaDgxJZ5Wuf44omcSKdoUjH4EBVp5xGCJFs",
  "key28": "4g5XMLkEeQKhXqVNeueVXH4aAdDj4XMXQitqx5hZ1WFGfMWgsmgz3obDJo7wMbAr6Ssk98EdEcwusciEtrtsk3LY"
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
