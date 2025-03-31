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
    "3RzPHpFuutatV7sWiaeHe3dyDC9dsj3Pmj68mKbU66mMh8njoqh7ykqpD7B8FmntwND39FK2tZTGLCEJLFGhwyr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dV2AW3B8LVvxPpvh87CGG1z7mL4Us3oeUgUT7hHGJuChhnB5FeTmRjAxVWsCYvVcjRr3riapGq5GxCo52nPWaN2",
  "key1": "2iByy7g6PCzFWskfcK33fPAETYoSsG1qSBZN5KbRpiFBdvY6t3sXTjE7Mg5Vr6nLNpu6ziotwfHfjmvTc1SpNQRH",
  "key2": "2LzWqHW56SVVL7HyQcmHbXjsemXH5KWtSQmEgcPBrfAhpvBSfusBng2uzmwkZSpMzjGBQQuuPFSWS3y55f85TFjH",
  "key3": "2Zh5cnsJsyyMaK6NT2wWht2EJojM9WCgMentmpFTyeYT3WHA18jrCjmBZZZSWRz9Ci4pPfHWPDS9ponLRm4hGfar",
  "key4": "2KvTijnkazPEKt1JZ6GVCDBRf1ECnNBw61zGT5cbcVunrmCzUSCLEzjQNZ8H56GVdSvVhtNCjvToADZd1u31Hxw2",
  "key5": "4mujzVESb8PnhsARTis4PGxAKfsN5av3ftMfKuDxwCZF23jB8mbLi6zfkewmG5uYnLCsmGNs7NFJq2KudEjHsK9G",
  "key6": "5aD4izJYebfnN1sBVspkVrR6vjPPNjFr7Xv9TupBfzTE4ex1dS3wSRqX4hwh9sDVjDc6yWw9WX3bJLNcrnKm2nCa",
  "key7": "2fEZBQdBGWcCtiF9vNo2LPRe13WAjPsxaodLiEeDGdg16vLLV42W4MFB7vmLKfDUqb2hmDaofrjPPhYinT8j5G2E",
  "key8": "5xQnxKqamr4uCKCKpML5xd3oWUANxMXeixXpoUAq2FbiLNLUpwkG2m5pKZvchvvfYnXPwWV8YEkisG3ADdNBhNAt",
  "key9": "zQF5eVC659NgrWAWLnPpWMq1iK8WVcLbfaetRiBcqYAHh8CvLGpCK7epxZkeikEmv6L8R7WyXBFMwJ93UK9f67t",
  "key10": "4MDPBYGS1c58sZZZcjJ5KBBSTWgAuH2JZYhzM9PtZJBUgKuPCSo8E3cVqAJHMtFLPnaemBtMncvBY82Ao11hZp1d",
  "key11": "5bn1Krr5DvJm7iYsnzVtsVFbrWandrNQjtfan5nwWZKLVsUF75AemUDgGZzvjXdoCXw421FqWiZYWNF2uXz1hXQn",
  "key12": "4n2qm9oCTJsQWEmzXZSyQLkje2h7zXXYEz1af61oyxLTZuoVA8uFi4ieK1r6EDZKF15tciLh23huLXYzcQevEWwP",
  "key13": "3BM9Q97C5xFDxigyTjjPPre44kfkwVs6tMQWZhvc3Jo431H2xQhSQVkesys6QvzD4BYawfSmec9pwgPP2nMSGD3V",
  "key14": "3fDtMwbqpFM3um42aQu8uj8NP7Ucde6qrnrohkJqB5pq4rT5wDnuwj69Hgfoq6P6tXjBDJokQoKM4QqKJSMovUvb",
  "key15": "4WXfCXBQvFbwrs2UaEVPuUXYdoPoAatqW8f49STaE6tahNxN24DXRmAthW6BZKVMkoR5ibpX9xWV6nso2eJycyZo",
  "key16": "3UZViEjbRhH7CDXhtV6GV5b5gJM8ieenntAoYEWa3QujW8rfZ9W4DXCwNhT7zhjctXqRXjKwMTrfdudHR7k8wFCz",
  "key17": "2kzAxr6JqfmdbdoKyVk2Hc38MxUeMCFwAeN4XvYvJCy2don4sZpMiyoPcHeYJ1DZDiV7GV9jndyyLSJdf7AfKxBs",
  "key18": "4FfCJc3SfKN4hHiELEqtuSyheXc1hX5SV3msQAXfYmwKeGnvWh6XDnWJ9HgdWYfHEG4upwEqfvNJUw5QLWSBgqqg",
  "key19": "3MZkXKbseSAw8x2mybZ1Z91SExr1hcAT5mMTZ1srzjt3DRgkdLix8CTiGejaHh8vyMckZK6SF9Vpq2fyZmnKuyCG",
  "key20": "4wMQfP41yWKNQMcpvMpWxDUYMb2HfACs8Ax4oX4gB5rePgxJHM8Eh5UeZ5K9QVf1dUSVjvHqikkWi4WvAjCheNx6",
  "key21": "5gey4iGSgfqhCPwEraa52EtYMW85bf4iqRLqMDwtNyQv7SLDFDLptNjj5QXV4cSMrPkZJccu7ssdinufZ1zdiqDg",
  "key22": "2g6aJBVVMMCf5hhcAWWnkiRA2vcMPoyfV6SjCtYnWRo1D5n9gUHmQAcVS4irvE35cmUQgGL1uDzAbTdp5XDhFeDq",
  "key23": "2pVWnYtwAjUMG3GGvFZH9ygvtjeCffcquBNoxkb9PCM3ebY93pEPj1HZDJuBve7fAGh4J4mpmad9jBbuADRKCSD6",
  "key24": "GdUoKUMEWfvamUuKkMHdJ6dox2ozUCotNqQXGxjHKarhgdPyxrSAajojge8Eao1DWJBVGUUFe6vXnNsj6s2KggM",
  "key25": "4byA1a6Yhr4nyRzENeNbzWZYKiY16H9UJDW8qXV1djViaqwcmFqjf1esXuhbt6hL3zPgG6ZPvnha4M9oApFWzN9Q",
  "key26": "4Mfeyy3o8iQXCcrEVw4WbF1QdGj8pDBqVGdFfaAJEuRXEcVDv311UwZqwgjE9NacNCwLtb3hd5mUX9mWyDbzGKzT",
  "key27": "3ZEnXMwKhiy6wMDjQApiUdY6TQKCyosqcptrS5LAm6nrY1BnqjUcb2gpHfx1fCGQ4FT9VMWQH3EMNs5EtPeiAdJh",
  "key28": "2hd8UT4t6qFJdzKnfpHL22VHriQ7u2HuCw94JRzGV6CqpmJKxpJWi7Quvz54p18sdCUbg786c8vsRokBXTykCjW9",
  "key29": "2o6bBa1nmZR6nXVNRiynQE2Mz8171tpjaJdZqS1ARPKcjhYW6bMWr44cxayTJb4eo4sdYLtajgaMmtCUNCCeZBH",
  "key30": "5iWKWZvoRUhyqEZnRV3wuCRFm3ESodsSLENRhtP5goCrBnX3obdnBWnJsV6B16f4qgNoRjg6q1q3P3ZY3UVFkqkG",
  "key31": "4HFHQfMcuUy1RbENQpn7tqzNuXLMMZWRKBAhQ1UNuRckttUyRTNrySj9kcDrh9MttzZrMm1yoZL96nSfJDuVpr6p",
  "key32": "2UMe22RjLrTxSXKQr2F2MKNumCZJRbBBRELJgnib2DTj9jKuBDumqrfWcsT9H5iA7YNM9dkZxiph4XCRSUUWkNoK",
  "key33": "5HPtykZDVdom7bZMFTxnacHA2urdzBQjzkiniSB8rL5RyFGmBT5NRGhvGvK8irNkGH82x7zwxxsM3bPJ55AScaxz",
  "key34": "4vQ5aX9AjbVSC2S8tZXpeLqaaACPtDh3dAoL6ReAR4suyZrZuK7RCudyXmBqvutR5hLpxVyAFAB4sh6TYUfhqxUn",
  "key35": "1xB5P3m781pQuyEe5KZmNXrrjsbBpYZsb8T8Sj5PeZu6JbJKjv2q3LHQsHEZMKWfmG2HvGwxjSzeT9npb56VsJE",
  "key36": "49ZEtHSfVRFeAQ1mbXufArRNiYp7GSfMpM4zZBAACx8ttj9T9P6a4hnj3zKb6EkFgnwQtFhyWivZ7F4HNYtnmCfv",
  "key37": "ygMGxEbaF1B6UJ3J4rSBzzDrQLqpBptuELGDnqJ1JiAncsHdvvE4ZkhWvbB1q2nsrKLSrn2G9hsW3giDDaY5HmC",
  "key38": "5QCoZQc2PSjtAQNq6yN6CP6UjRGJYkoK5ydoi2hreNW9QJftFpmHviG3ffvBm8JXmELKuCwBJHnrEU2JofNqK3Em",
  "key39": "2NsLtpndQ71Eiwd91hr7KAXHfzDxVHKrfEKr7r7FnuDWtE7cPkcsBPcScphBdWShUEsfX7n9jwqwccHCB9JV1kGP",
  "key40": "4mTMPbxpn2U8BNb3xDBkEHfk683co8HPFACPcRLAmbst2Sk4NGhc2w3pQiZ2NGfhtmoskMnMkPLjzaL4tU3Tncr3",
  "key41": "stATKU7kdYnqyyByyLj6djqyiQp9fsnSu5365CMkFdrvvDuvbgk4eHqppaWYfNJqBZfXKxSxYdhqahzxPyLrLwH"
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
