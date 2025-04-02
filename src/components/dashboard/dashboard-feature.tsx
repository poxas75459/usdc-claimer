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
    "2NWsP9FDi9xMGDtBFX1AomgrtjPtDuAF5yx8eMUyhTA4EAUeiCPg22GUmbjjKsdmDTdD8BGiu43tB3qk4YsSJcMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GpuY6szBNDF3T3g5GsXgxjQzRbz4DciDndcRFygFcF56GpHwNwJAY3Dhb7a7TteL6TPBvG4YHME367zNHv7pqtp",
  "key1": "4KjUEYNHpNexh6LeT6uYoWCGsQLGDxKWK5EpC9pemciBgM6HgjAcWPXB15FLpiQmsdxK23wkPggJPoLMSbFNMnbw",
  "key2": "4EYKA5UEyHK7JStBoXAAU4MTmKMFbPqbkjSNMeGGPSjr2X4pTBUJmVPMzLpquPKaZaLAvpzzcMPZZAQDrCokYfb7",
  "key3": "jkj9aAEXhpgjTJPmFURUvbEfL7eWJ7ML8vHpBm7VEF8rAiAbasii817ZsiTo4EKLpKsCmPVRicDfZUpzTfKctrr",
  "key4": "5qvpTBXtMc6E8ZxaL1fnp6zUyU7JBkerK1N7EqRTNhpzDjJDZwgDccQuzUafJS1xWh1HmuwCKGwgLSaQaXUhwZCB",
  "key5": "q89hMKPWaMWTzjv44jvKqiJps6SUUgQQzVvJTeQLYtuA3EuzjHBbv3oifWitJXazzzxyxQSixH8aQoSTrDYNwGr",
  "key6": "36tftqxFVci82AfNgvQ5q6knqb3rAXygrVryiC1cNQbbSLEMdM3VuVfW4YsqkhS2DjDwYyu3aUH6ToaPT9BhqnC6",
  "key7": "389CktKwQGYJWJvW8n1asYahLPvdMB3fZZ955v9kCvVaoRGYN2CpEWV4ywPEPK9CqWThSDr5U2XQzAucHrZ19Kzu",
  "key8": "3mDoJD9TuEkX1wm3pjWfMJZgUunPQX641R5LCLG4Tk5TEe2jsQ8rBfrfjchWWTQUYQ6QHLvonPCeAGWUJ8QirfPo",
  "key9": "5WVJjJqMVAEZapR6zhHbAHTDgb3cfimmrJqpnsMK1oQR7qq8VSzxvGUdY86c4BQEzXmLVXuRQ1T4Z9MJraLdtN9U",
  "key10": "4bcL9KHDbWbAAZtbJiF196js8cXa7nUeqZ1beaCVZvUjwxvsXw6RsjMgtLajJPjfrDvCr1Jyaut6CW7avdnorGJP",
  "key11": "5j1etjTyvZVgXsMNtPgXZqoHkgXG6bgc1GziMqDQFWVx1btyikQwqpRX2TXkgm4cpHqzj3VfR2G1tDj6giLi5DR1",
  "key12": "UdqKxjd2ijQwUPrUWkwfewRsWkTj1YxvvVScmrXUyWS7zKvFHZpBjJm6hq2g8A9PHWNFoaXNQuULfFdGF1kxcod",
  "key13": "4kGCtbjmn1DzDAjLD3qvG8W1zjPyG4jfiqcKp1drrVLobYUsLpZaiPa8DswReiSpdS6BrBGaZqs82o2Nvxda1nPp",
  "key14": "o3ASwDxDYXMziVBJjCQowQBofKjMgmzCS862pUu3mcKugjFUVSsY4wLEzEgxTxrHEUHborPZBpuBzN418XgnFCX",
  "key15": "5XmM31qwjtGhf34nuenSoxS8J8NsaLe9kGmJYnxYGYgnM6V18DdYsgCNKeTvEiB4C53EMHvSAVcXnbF4erADCKXA",
  "key16": "raXUchTZb334L4nqBGezX9WJXzA4Qq5EbX9ErHSiwAiHcqTrH4GGiEYcFpcaUNfGeyzCnGYcQJdp6hnVpKS3xEz",
  "key17": "dLFfwew6spzSjDsUyfdUV7SHEMNbnXU1TMkZ1i9e7rtGdqTEvZES3K46mnDBgLyaQaZ95Z4xygKYm2fF2KQcGjf",
  "key18": "4Q3CQmJMkPW2puCY3NhFVU8e7PMQigLBBgUm941WxfzcYVusLmeEJ6fHRAfHbWUUSzu8DPHNRZYykFKEbxE3it3i",
  "key19": "4LWRgAQyfkMEjdHksYsGTj4GgkrbX8D8Q4PEL5chcbpxhj9JJEjMByPiL5yfyzVdpjjyJ1RwD47Ebq8uSh8YKBw8",
  "key20": "2jFsBK1BucTELgNRcNAcfNkE1iUtiLgge3ffuMYbnNej8jpWqmjBNvcvCwi75c5TmxFk1D7DhuDQqV31UwBjsdbH",
  "key21": "4WkGjGiTNd94n1U7TK7EjConpzkWi44JQ65j2Tg7MeMJ5uiMCS5hAHD1JBmTF6EtNuykdMQatUsmF975stjd8nDq",
  "key22": "bUseyoe7HNFTKNKZ4V99mnkQznB54Btdh2xV1pwzCQNAxH6PRDVkhnAEo4v5nFZUwnuEKgpibcmuguyc5JTQofy",
  "key23": "3V61cYHcrcfLmkqxpFU36fhKrvdzLvtHiSah2eiZQfZBwHgVWXCmAsqp8VkJqmfbpEGoMXiG4XkErgZXXiPk7cNN",
  "key24": "287QE5Qsrc4iuezsJ9KRHixgPtbKU3Fb6AzJwZSJQ8P1f1mXZd73v4eygDn8TY4f6QiYXL4zURKZEjNGzYvx2jKG",
  "key25": "nbcTwM2UypFZxHuoQmiWdFVfaA8pUhMJk1orXJZUsKZRDDxVWeE24ut2XEzx5pr16xEtQadVSVPXcYdjDTax8y5",
  "key26": "F3rWE5HLJUomyt3KF42VhWymwf3MpuDKbBCvDWqbwfrJNJsLUWREoZhj8qReZL7sTTjcvTnJGM9YeA2sZy1cMSg",
  "key27": "5ajTBSbLVbjwku43w2s2ijwiQSzD1ix1PQnNnZ8Bg3LCWJsANQwYYmwg6wVhuv4TeuL3GZc7h659mHc4ymYJ8KjQ",
  "key28": "4PwASTui4iAUY14ee86feYZVeMeXyD1imd92zsGFfJXWsvo38brM64TsNWYb37ZZj6EtGcZFP22WYNHz351T11fG",
  "key29": "4AeXkHqJcJk7C5tYRXcVw9XyWFKVBigEEki4GbvuBu3hbzawnd585TBjkBADFnDfXd2gyt32Pvyiyb641W7VpQb6",
  "key30": "5AucrmAroH4CwDtQaZ6FXKQgiQsXMZKrUHv8kwW5BJAELuzzCZp3Zrn1eyxcSB8pDoh8RMBRBf9wqj7ExASsptcE",
  "key31": "3yCQ2eX7qPtnHLz2xQ4CwzXJ5sXNL8zfAYP2ofpJg92ZY8aRWrYbiWuhPqMHXdrAerMKuma4EZyrtN6HHajJXwmY",
  "key32": "4w2xftUeH6ajdUDA3ybQR8VYvF2X22dENyof6rqpKziQE985UfDq22tAc8XdU85euPsq8zGofd4XFnQwSeVHrzcp",
  "key33": "22KYuGqxNsQBCDkEUC7NTiSrj1sAYVZJfVFfH87pgnQscNYTkMk3Mc8C1zRAwBQaUZCG2WSEgXyhDQSAFQ6QeVvw",
  "key34": "56yqmLqtUedTiWUvfg4LPyPSAdLVVqYhX5gvq3uMvxAq983aLn4S97mw66TB4PB7cRVEZ6SAwhqjwCTL4mjM9pB1",
  "key35": "4Wez3YH8iz5YFBD54nnjGX5ehpxPPVkKP2foYCGDBAzrPbDGH7ct3cr2pcDWD2q1JqVvEukxZS9c8eLQxmtjQnt4",
  "key36": "5uD4EP6aLvwdYWWxHQEduMimDsv1hZXVDyUjuGd8D1biNjGQwHZkKfYAKy4m2M36PKMkF1cpdniQ3FDGBgbDSbk1"
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
