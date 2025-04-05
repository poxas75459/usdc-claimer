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
    "5sHhFJtf5MtQRUg2oC2h3NbkKdZ5LDuyp21wPuQewZAwjkTpJ7PSeCmxrusP8qwrcb6zJ27ggyDrTTFa3svPUHCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eoBDHcyDDMXeEb6Eekr2DHZs8mKz9b7VuoitpktKk8UrwewB4scL29bGF8GzKYAvWVDuZfsRwJQRJTSCPAApdTu",
  "key1": "3CYUCXS8mH25588iYC3Q9Juim6rp2RABuPx14WwjoUTG7s3R5B2tBxu5tAWBVyQTEUH94P3Cujxy4Dh9YUVoRiVd",
  "key2": "LKi5mkncVyfvqkDFfYLve8aJrg3j8Nsd1qqCK9mD5WF2FZsGfLJgLQRuYMRF5ZMzrXRQAP6J3gch2QQv98SXozs",
  "key3": "4B8xahWrFXoBRfi1nhYeN5kay7WefPvXeay9ywEbjwdedthj5YQW1ebXr6BmvY9i17qvQKbSGuhHY27UYA6wy1vv",
  "key4": "3uuPUSFtjPQycyASpAryjinvqVzxRXtTYv4og8xEpzbjEjhtGXpXXHG8zgghGnhCPURYT7MDd3ADFzY9CwMAhmSB",
  "key5": "zLaKcRdi3w9yUYqnPiQhGQNni9kUD6M2CydjxELkDeEjCh7K6kRJLLXLytznfbvxRwP8eVeuWY3VonoewtYZwYd",
  "key6": "5U82CPWKLDx3i1p9bYYDasCu3HSnFjFwQLqgaAdJMoLnVxQNVvVuzUHrfMUQJbJJZNJdg14amEkCJbUSKDhzPnbm",
  "key7": "4MvwEaGqgGwJjZGxQWbZ6J2n7HAE8NkMTLFktJLbj7wQEaVe9tQBYLtWyCdmfVfE9jSbRsbVxBaxXp6b1vED6k8R",
  "key8": "5YfE6GyQuzD4B8dfMNNRxrzWP5FTVrDSfWoXLBArkmwFsT8DvBxBazb4w88ALWiZP8gxz5HfXS2D9zJUL48SSqQV",
  "key9": "2n61MWLDLjP8f3GP8EyaAJobLfJVGxJ45Pwq7EGKm6cyewVfZ5RsebjfQDBXmjk9ArNk98S4H6tktE28xGRezsqp",
  "key10": "5gxKJWEhvn3U1a3iBkTCj22MJkSVqzQBhznekFYt88oh5jGAVsQqZneMCXvCcQfoYJJroHoRreWa3QMc9zqnBs2r",
  "key11": "Hyx6PtjFPWCA3ckiSZQ1F3e7rP35wwcuzkiogL5EfbNgGUxKWwuWhMw1XsHPnYaF54kay6gTJsqoXw7RD5vxQfk",
  "key12": "NtzAKxHwW56AfbDm9DPPjtBY6zbEfWkS9gQ8hV8AxrBnfwVSHpZ47Z2ewKkKxTbxBq3qfKTfRS17LsPxC6DyhKn",
  "key13": "5d3RZUXVb5Jr331wPTSGJG3Dx3cvXri25wReEDurVouYZmhthvDs52waURfgshLV1kQuNH7XF2j6gy9jkpacVFgU",
  "key14": "39yGshZQzUQkDca77Cu1ALYyYN5zdTiZCU8AxsH7cf9B7njPCVduYvVZ5qVWYm8siqxPdsFHpN8t9wCKcMEVrJR3",
  "key15": "4svU8CiYdumMRBWovyyigS2CoVosrDKNoka33EH8ut9uh5qiVBL7iHtpEbVa1ZjD4rspagWzJXBDEpoMSU9QU48A",
  "key16": "2t6iJirjyi7HqybdfvNJoZMdnzJZrEUSFS3ZiJSvoLv6Eyab7XmLFmPnM3JadbCJSkDukVJMUXXTZJW79Q3Ms4uh",
  "key17": "2FZeKW3s7ZoS3jE4UrYu4xP687ihzxDHZTsvqpyuWpGAbixspkhev4sYBMiinPGxT4MV6KSjpXE3dJojQ2Wrn5fe",
  "key18": "BHVauGfDawzv9bjBsmoYZVVgVTaNXaFPAYjAyyQD1pwk5KhRsWtiSYwZEyqBERurog4MvpVyvhCuEuYDzDpC7gR",
  "key19": "311TYZ7wkXHqhvS13kycTJRcFSTo7eo2eG8MnntjvKQhn1SponWs6Z9Hubp3LDnsgurVz7QAzU1Uq3pZD8g48wR8",
  "key20": "3JE5zGVrrnatuuvmEDLvncKb8GX98pXvU3YPz8Zqrj9hSoKEPsHLd6oeSqvb4fmtbzcYpVARnsferg1zpMqNH7dw",
  "key21": "3J1dFdAqty2AJBC1wHz1p5eJf1BUoVFsYVihRVHE592fDW8JVciDXqcGe8XjemWpVQVHLTUmKJ857TkqtfetoXqr",
  "key22": "2dFbSXMjmz1rFyYbGHz6JNg23WLohqxyaKgH5WHsAMNsneELU2q73ASsSXagZtDmwhoTywpNa6JazhYxQ4acfha3",
  "key23": "292eYunPyMbtZjYXUxJgB3xr4gEegT9mroteYGhmsiJtMuLrW1cvFvarL2VUj3jiubxby7JcTL5UvbW1UZvefyG8",
  "key24": "cfEY5aEbnagTx7Aw5KQdr6h1zHhM9M3eDMKrR3kzUmrGukxzWRD89oBYNUDLDoMUvvAabp4oi6ERJ8PAWsCqnY6",
  "key25": "iqdKwV4Pgf646EAH6LaJ9X7SiYmgXm43C6gBVwUDWiMPqYrryY1kwyxNbdH5v5YCAwMi2ApsPyx2rxACTb7rfVQ",
  "key26": "2acTn1Q56LdczFUcwR47kMwVMgW4Kvr3uc9fYXDoih1s3TLbFfj9YuNcPpZv5SZtx6UNFLAgKMxXT5NbS6AjYgnf",
  "key27": "3T7Lmbc3U8zYUo6YviaZ6u25tfaZdZ6mEowrbB78r8kDqfTBtot5MuzuFdhQSqu5YUV5d99aywGFk8XGmCMTRKus",
  "key28": "JA43uxFTHZqQ7745JHtJUsgLe7aB9D68EUUPNm2MjTba2JWCL5cvBDHhFvcic9rvFvqFa4iv7R3K2EXkqLJ6Gr3",
  "key29": "4aCDfkBmzgToKxWK29uFb8FSg4KpnjH2rpzetvazRfVkQ6Rppk2Sw5c2HqwJMPAngdzj7tzXfVvRK7y4zM7XnV9f",
  "key30": "59eH8awsj7xie6HAXCPbNtDSbaMCXTsbotfueKogyFBffRn5S4FTBWSV8e9FHozCTCVtVf9yXy3fNv9DtxK5jrVL",
  "key31": "6741YLf5KPDWfAFDNq9uf9vmLpwKBmnERiJNBDAbeA8oxqx62sBovmbmY3JrK4Qk4G73qvgGWVbeGKFKHKKM3PbN",
  "key32": "5iedPRaJSE8rSbvPSmLVX1P1fTFiQSco3fZcTS8NZAC915rMrqBhRuYpPpuSc9yTHBHNdByNnJkYGE6DBV7MQxM2",
  "key33": "4AZugfBLWJy5dwKt5jFY6ET5ywpouFGQHRQCo4r8zAig55jpHesPgpYy5RhGd4rBVPNfnemyM7Rq27gBWUsUCmVN",
  "key34": "3Jwt2WogRKf3CUaDQhh5HaMNodedJHiGwzvELyzHD3k41147REmx67Xy72bzBA9M1WqB6Z8gmeiJJDkUMuP76qu9",
  "key35": "qsQeN1evKrggxVmBnBuhrhkBhGN4bB22Xv2aKv53DanHGbPhkB2zeGcj8GV9xvAznqdrbVfh8LHYVAMGTvTbPhd",
  "key36": "5YEHZLFWEnoBVPwcoF5FNbKguW3Pwez9x33fcTPF4T4dZ86mnct8ayqL3pEHREmVs5bTDSjh4PxAANS3o7hga7d9",
  "key37": "3NJw2ZDfjDtuivb8QmxpV9D2oSEGSUpWupbMqh9hM55ZJNC4qD2JwT7ZFJ2ni1T8WrDz6gkXTmYdCWTdsEDyJN4w"
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
