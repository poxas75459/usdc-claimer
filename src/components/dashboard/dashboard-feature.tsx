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
    "275kjDhbPZ1JPjT8RBY275gPi7YUxPpSjdVLQmkUSMFu44hQKxNNuk48RW9t92FmRJsmobz9dooBq4DSnCKvBMVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x4jK5tMfofDjxMpeLFQM17ButehTejgoEqGgBvKjJNMEDm9YMVnTBSouWPGBBKE4Y9TE7HjC37udD6swC4WvgY2",
  "key1": "3EwfXn88XfADj1rykGR3cU5pCQ4bfWh1LDPNcuZspDULWr4BWKocMv9W58E2iZB1q34CFp7rwgPn8FnyUuHwXLtT",
  "key2": "5VBkPA9T843WqBcDU7QWsV27bKGmPhJhch62Q4QGV5xPqBdRwQWnUA9c836cLvEkPhVMKtwCLmXwSyMwmuuR1VfK",
  "key3": "3AS8uJ1wryDw7nHNzxBdfX1fp1g3vAym6vZBREG32xo4dixXtBRUBjnLqQFpugMWvnsrxxFa4GkKnVkdvPN613up",
  "key4": "5qkCGbZ5WZRXd7y9htyoJ4EQx9wG9XATHjhETHkqoTn5cMnwWNy2LjhgRdyTZYoGo2CnogbGFN8Yax2FbQzxHqvz",
  "key5": "3PUqSAhmk7AZnMFk7BasGkDnMinWdeqRfhCLjqgbUTtFEzkh7PzEPKieBfo8MaAD8dNShCbXKdUZDMA9uTUV53UX",
  "key6": "658JnHGy6i3xqbagm8A9NKeZ5DbosgxYDu2YpywSfBSJkY9wKrgATC2DZD53MxuhwYLZto7wzCBvecdzqZowiMxU",
  "key7": "viXFitXrxKhyoLTDY6qKaiYQaqszsWWWnyPYbbPFZeWoX9tym8gjDARkiqeDfVbasVz5meg96iWvTJyGmGuP6L8",
  "key8": "66XF495BYC91KCADsguoCUBzMzf41VMEyqrXGdTtVkVeL4EaooQwaT5UPP98d9HpVq7Y4xQKXpumUPXurUG7gosV",
  "key9": "5H4XzSPXG1B4z9JsExzjBjvvLYtW9iCntE8aKRnuCSuTfHxWFYmiHAHsxrZ7pnVTtfnevfmW5Lf1fWV66kdbrh9g",
  "key10": "pUae5eCjdgzEhKnyrEVMzSRJ68zYMzqK9xmnJPrKsdebqhQ7usafQL9TM75JDqa1kmDLjf1v9dJQsxfjxWPwuUg",
  "key11": "4SrSoQ2YnE8MvGeLCb3U7UzL2WFTF5nvsRYdTYpPFunDNxEuBhoxkJcvQjFj99q5GaVBVaFVc1YqUCioPmJ1NMnx",
  "key12": "24VQXuZVZG4iiAutK5UMULZ3ED7fvDyuhgdEMiAZjW1QMjrAw5KWk26bxP7GzuCdWndUPpV3Y89H8HCfWaAo5Qys",
  "key13": "4uaAkN7xftWQUmqackvBfZkYomi8h8vUMSJdxHDmXiCt4Qw552Jgf3PjJC78Kmg8cZdcn6uSnUjiys6x9MXmzAde",
  "key14": "2VU1gAqpgrqRgLX9CHaNr1miE6Eiy3DptjjRBYydaGYXcD7qBdMcjGJ1PqsVqXzZhQkciyZWa648tUv3wiA41ZNU",
  "key15": "3rPnBGRKfh2TzZsaEUnteHjEMcEp4MhjSWzFZZYSL1EJgcBe1npPNUbzzVaNGBs4nTMmHwnV6pAogU53WTK2cf4H",
  "key16": "2Pqn2kAhjK92gwdijhyFvYNheaqZGmKEW8Cs1s7P9iYYzKwhF8hpuJ6V83Kx3cE8y5xJaHNbmwVZZFmFDmBbnHNo",
  "key17": "5kH1rATfet1xW8iHKsyNGHNMxtUbrxkbXo1NRarf8yKGu9JTToeFSjb1mZYdNNqk28QgkV6QWJAPqcq88y8GuxqE",
  "key18": "bQ4yZoCfK2e39sLgAFnCDaHtLuHJmRGUefWacBhmCF81t5su2EDcTcZ4SPtJWxPdcnrF6Y8rq7B5U5wsLPkfWkt",
  "key19": "4PnMyYGEUPdW9KKVpC5StYgGqJKj9jS42hoXeqq3HppE92SSRdfnspmVhaP7mY1XFmtWJ7q7fStCsbpPfxZVjxU9",
  "key20": "KrfNv6AoL7ubGryMyDRaZdiFGJgyRYhfNgeMT8hpjanf7MARWqizri9qar5qhhZr9ThHT67kB3MyPAfNHtnvNg8",
  "key21": "3psoM2RhSopc1PfrqzwzEPRBSCFQ39vBJq3UmgwpRoaUj1x9HfNMjdHGHr2yakH8P5qET6ZjaXJmqit6RxeejGFt",
  "key22": "5ha5YdkRMHNaGtXc2m42UtMXU1aWzNgreJ2ZuPzQvzxGmXx8NBujrbVnVAPJVgtXJKtzPJGo7AhM5QVZ2ZXo7UL5",
  "key23": "3Eg5w6cRYUjcBQNu7M1BvD9t3KHAJt2uvUQ6TE73TmVoEEsxnrTVaXhaHtHXDycuawLR1nCznypSsHoRnnUUA6ZE",
  "key24": "2iZ9BvV6KghTxvBnAoG2aEXZQ6ghhw1mDCQLTixkTaz2RifgGq9jJeT9y1PDJGxnyf2iWSUv3G4awcq9HymkexF6",
  "key25": "2qxrAVQYtdwTA3WWuXdR5BQDMnJEMX6GWBVGZ4NpAmiaifbXfcBNpC9VQampc5DPQ8Yj34UUvhtJKFDrWczArhzb",
  "key26": "a3Vhe5VYtQ5wc21Bv4vXrVwgo4NCpV7dEtfEvyqK3rV83D9RkKnZUpC9y6qWE85Rv74xoj4R9xXpLALoWep9RoD",
  "key27": "5vvibHTH9y215KwNmUsZ4uj1D5CSt8ctyBXStnVesQW1xEk9Moi63QicUUtkSAru4Bw5wCATYjokKqtzWEksvZtg",
  "key28": "2shh9EsuzP9qWhG7EmZMAJpZjjA5WPpcKCeFkTUpvk6soURJ6CpxZSXVosxmeVhqogxSNzKoBR7GX6m7h85Rse6B",
  "key29": "n1BP9Pinq7Tx1bRsGnMRMWpdBQtz2wkiQuP6hDKi2bVN1UsGtWDxNKi9zbFrkJFCzdLWzF4zhEq6eXgBGGi1JH3",
  "key30": "3s7FxQ9zXgYNiRjgzN1gBBixGPSgpL3kAMdz8yG4qUwpBu5p4AfBEzpYXDZKLv9X7P1hCrDVKWxqgKNRXFBi5vYn",
  "key31": "4AqremqPSNYMuKq3Pg2oSXBvhLepzBeNBrucx9VEuvZZ4TeTo6yrSA6UbEFajmWK27S1izLDeLHggvwegu9b4fDx",
  "key32": "4PUHBdinqtzioq5TSRUayPjs5Jfr29aSf63Z26b8xMudfsg2bnwYWBD6ZCc5RJNPZ1Zg3NEpgBsNnsDNevP9TNXq",
  "key33": "4XQHFi5oMUUW8CzrPNKdbPCPCDNsnLXN1rAb7NexcTw6MQLuyjdWkpmeLpRTBDZEFpxiSdjnxtowohTAB3umemYc",
  "key34": "2KnMmCggnaNUMhY27xLMTyoiMHjxSRxuMKaS7a8b1N54Z73Y5vdekpp1xEMVWMgxYzGbRfDfouvDeb8fk7tYt5hd",
  "key35": "3CedPnr5uUfvprom77dwcAbCDStmgULXYa6QMNEX8GiT7K3AkJHLjxR2XSjzKaqHeugdTQ4redRjCEPGtmB7SMjV",
  "key36": "3jCSEX9c3SQd3Yt2CaNqDBBAbmAPUYy9qn45uyHacdaD3vBhWjFU8te4McU1zDr1knS1DBmHiuUwNKb4NNQ8SqmR"
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
