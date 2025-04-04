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
    "2F6H6t2YFnirQ2KtYocRiN2SpCeiqBfWh1NmPAyK18C8ARvToxiwME97xMnBhwWVad5iPCRFLUCnq6pyWhhxxx6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CzVMiSbXR5CSNiAgTQfUWkV6aexqwfWTWeX7ZKaZ9jyG1RKSCgEr3j8pw58NPfQaKBv4BGEHhqgEvvmpNyt18x1",
  "key1": "2rYPt9sqjetkijaTqBEzUCfL9QyAf1xhX6uWqHLLyUya6uoLcdfhNAZyAHiLddivbPjACFzoSozD5SwP4gDKuKDg",
  "key2": "rzWwfF1UqpiCbtz9NkQug5ugJyWtuMx6dMQrtnL7xj75vfjr5NfWrZgb46USy6LFefTA5Z2fd6sqGNWPYafyqov",
  "key3": "5t2KwSgkaABmULdFe8YRPK1VMfjgwJf4aqH3NYS476Hdj7gpkiCnnd78WxYvL6CB4zMftNSvw2KerotGYz55St99",
  "key4": "43HA4pEZSYe2jc96p2XfUjNVc93pcALzeEGukHpJ7ovUPKvdwyjCu1U4euMPJC9ex3zoPx4bktq19aAnUs9auPWb",
  "key5": "2WWRs7cZrweksKodAZzt1t5vMFY33BMjmeFaWdPpc5WkL8xfTs3K7rb753odL983wdwdenbu2c2yFr395mkpXHM2",
  "key6": "5g25epnyeQ49F8p42ioR26b3ebpGYs6yCoCqAc6ZqMdSnNAsg94rvQXowkw4Lu9SR4sbT5fzenB9cJuSSc4TdYZA",
  "key7": "58ECjQP1rMP1QdoZNhtjGQ8b6daekfRj3qSUtK7tPSjvay9ax3uxa8N8ctisZ78CcY7otqjR8AcPBxuojrV65bWx",
  "key8": "4v4y9yd6H9qGXGZxhQTSHcDGJgyepUuzcRjt24iKrKZetAZj3zJzfQs55qrvYHxpn3btWQCPmQXhJCifbryYvJTJ",
  "key9": "zybE7SPtYeBq7t8xmXv6qEaJcfcvP77McHZZ6E9bxp7ya8xzLRCKWp74KUf1cZQy2GvNEXP2EVp4c3fVqpC5DRN",
  "key10": "4CTZGomdZN9ic5Ce8umWYeKMiP2QMbaeXvmoKLUQ2P5oRr2qesTqp1nSnk2PzHfKKsMjyUEfvqqoNw6gqHN2dxJA",
  "key11": "5qSN5LrUeB1PbrM3WL2iCAh6XP4GKentKH8jaD2ckVUsoveDVct5fArk34d3s9gUVW1SiHC1P2nRzbKwu1Csw91D",
  "key12": "EHZ25e7F5tZNzjUysbejXnsi9NHutnQqRyK9QsDYmKPRhuTW78Vhdox1w5XfASxcaQE6cUmL7MLsjgD57xzyRYR",
  "key13": "5gstAC3ap2CrWeZXtdyS4WXJ152PbBadgcGq5wfVPFofNeh42b5QNasWmepA1vuYwxuVnu9moNYdws48ZutUM1gn",
  "key14": "3Uq8SKuGMMx49M4VkxkYyfXBuHfA6AiMdRRu3yfGnSWrV5veucW1BGhWSYAdA7sssGcuEYSVxfeaSbhb7Xe8XJry",
  "key15": "4Xbjsn7F1vPg2En4aZWhkbSiPS75amA6MdH1KHjHfZVHFaXYj6J3QKBPGJvEoYkWdxkZXJozXMxSQMyass1BUaT3",
  "key16": "k6ZSyyi9VyMUW6DsWhiEJnYL4VL8NWRVAvt2ARGghaHf1tmqvzqihuiQf6u13u2eY45hPLveqbZaggMJn5RYKht",
  "key17": "2diBuDt2CuoHCK8giLHUj9nBUrLfZNVnoDN5AQ8UqpgVGPzdMJ6FhAQJuo3kxJ4zHfgnyPXh5nrgr8U16VnmruDM",
  "key18": "3vA1G3QTLioLfzRD5anpgL5zEcbVLQMwP1RhuacxnB31EEM4wFXemPe2N4f6hJAp4vim31cwngMNwdYHhdAsfYoP",
  "key19": "3kSUD3GVDfPaJXjNNVPtkFpdH8nRZ2Qq3KyncQ3Ljz1jWhXjjjGv8wWVwWSLED3sDZdrW92woPz4sNFJ98zmaNrZ",
  "key20": "4ExH1Z9CQ8H4cKB5e8BcMnEHzhBaGnr5yfiUSoKVTzePVkXrpGK88dHhVtuG7newn8xgeq3NP5jrkDkZVmob3ECg",
  "key21": "2GcDuBE2rfJqhjDWdVFH8gkTUNSiAPX9TKjK2LLMyD4E2YELLPx8jyjV8XHiSATwvAb8pgTY4Hgnbnbt4yFKkr6Q",
  "key22": "39P9VqNXXy9ohoZW37rT4x28hDsdAwYgCZARrJuLiHD7X7R65QKYEFrThdBY9pyAWsYWxr9NtNfZBbe1FUHezuhD",
  "key23": "4b2D4TXsMZc1E3UnsmjHt3V2ocSEPgcnzeKSFk47vqwsHeQJ6BH2KS89FY4qJPov4LAb1AgAV6iaQwBdKk6YmyLf",
  "key24": "w2rpqn6wmvveRS3VVLsXmfPbGJvKyyEtYTEG1QcqnWuaBZAVgQKiBP52QTPD1nbye9X9eK1k2QiEEHPv9hHr6Aw",
  "key25": "3wfJhAXzeNZH9msj5SYTzX7x4rFz3HVHvvgeCFkgErC63WHQ3wYwCsH9pEeqX7M4KDWvsQMfwWgdHVS3kxqUaMuo",
  "key26": "nJnKkB55i8wmGtxqLgxFSwi8fKs5Bh6kerEhXKCE75VJMXRYarRFVjyWA6r2yKY97feDwcBBxhkRjrwygc4XAHa",
  "key27": "3oJVihJU2G4NhMVAQmLZs7UYwTvwSvzs7MssYEqaHdeiGPdhYGio46iBFWpUtJdeM6yz5ZvyMRVUBNt3Ypp161bP"
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
