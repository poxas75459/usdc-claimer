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
    "2cBRvBhCy8CRSU7WmKQqWtkFEBX3VqJTZ3UqDwjjGUXRyESPNpeX2v1AB1qaoZuHTsMkqo4ghy9or2Zx5GsfeTHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S81J2vUuQFsiiwBWi6Ncn1YWLZvNN2HM5yosQktiKHBYdQcnEMjXbr1aaVcaAiQ6rj9tHuqi4mSRdWYUX1R6xez",
  "key1": "4L4rBRgxb6gAKT52VDnvhUFA1GzYMrNUVLh8t8zi78jaPW3wBCNzQryQ1KYMYNX9QRxggvM8pCAxDrzd7qJeNib",
  "key2": "26voh8soQWru5XJ3v5fKr8m8iHM29oQsUgipsNi1tCEzMYUcLJE8X2WAW8mAdSsAJ3emNsE6BMR5V5UHFfBTDu8S",
  "key3": "M2Y4C2MxF5pq2efac9oCKXxvPVnQgfjJw81tkrY9VKFFWBbu9rvPGFmLKtX2q1CZdtLT2tQEBCeABFCTPcGp4jG",
  "key4": "T1czcdxBzyevE5KRqevE6kmTsrEE6isAxVqwhvw3d9Cx5qR6jC9T2eAmQymLLc8CAn697FR1GuWPCwaaUjmTVeM",
  "key5": "3umgnXxXHH1JkcrXPK2CV5gDvwTcK9kpNVa6bATPFA8atX62XTTHaYcmaVWN1zyZ3Cm1x8an5AnAwGyftJqtkhQG",
  "key6": "3D8xYrEg2Xt5itLT3w7daN4bfWjUDCzisoSNqCQ6Fi1Rm7uCm3tcCEBF2MMM8s6a96Lpzk3LXjRFSLu9nPiu391f",
  "key7": "3JNDp3ow2QfKTMr85119UcQiAEXqByuLCzCokiMasTqPJenmsFDUTfPgUSfUWL7yDFeNGgBuvYMo9exV2viWhFot",
  "key8": "PSWwe5chHra6ra5YQ1MwP9JDrct9Je66ftHiZXNr5VY5HQ45hcfuwGG6xUntb5WYRoDvgEfeAHsSDQrvWCMuqKP",
  "key9": "22ikMHUdmXo8RE7tFNjZWucuK31yiZS2xGeMLN1ZP6GyfeU6Mgs4CJ5ySpdA4CUp1MAEhYS6cL3Gjp69p7HETumH",
  "key10": "5mdQ4V9CGmnnpkEeMrT3o98pL9NLfs6BarHBd5B76euQ3oXwgyD5HuUXvGkJ5bUqm8dYGUx6xB1wGGU2S3Csnsnx",
  "key11": "4xD7okg6b6SRDjDXw7DPhEkQYMk8aarUoerttvQQ9i5kQMZwqQgFPAWgpsZ7okmKmAcd8NC7HepUf1CU4HazJedL",
  "key12": "2Ly1MXMroUzvMhcocG5vab4qytrCBPtsBKEQyCyqB8QdBuaQuUpcyzjbWRgin6CPjPmuS522zpfdvJJ54bKXMiFL",
  "key13": "59R3LDSHSKFyQuhwrMpKMmwhnBMBzRhhTNiBtrySr1GLHhDqVtUJUizKkQPWw4ZpugMFRmtG61RrZinoVL46Q3St",
  "key14": "5C4oVjtDbwx8iLKsydVStjVCUPVgk9nwjEW4EXiG83S8hhTcVkwLmpyFEPQoWAHB7eDKTHadPTyPzKVjdxSC92DJ",
  "key15": "29RF7rD8AckSaYF3CNG5pp6892Dd1Pq7Sh5AtyGNXPpkEZGyzFARquzgWniEaaijPtFuoo3qdHqsazvKK3Kxu38a",
  "key16": "3dJW8dWU8R21PzbV6FDftewigREryRGBhx7sBh73ekrqP833fZ4Gk85D3RQA9sE1ssRe8tM2CK7d2BQFAAsdD6SJ",
  "key17": "UiuhZiDj9o6X14maDr1nyC3HuRHAWForgQu4p9JjsZ7t9Sw13Y6MLK2qTeryhJaDtq8xkwxR1SuHNumY2JqaSzB",
  "key18": "344AjRYXC5hm8R8pcuy3cRxAxeH5qSAxmuTWjAHU1hQWV88CK8GmHAEgDcoA2h6zzwmuL8Xfnt7jb7k5jGXLrjAT",
  "key19": "5xZ35XxASy1eXwy8xDWSB6WXs4UsTLnRBPvC7m8QtxbZq1shoKLMPdTfNYHmxss2WGwXqvfqgMpymFRSKwdakbPj",
  "key20": "2Xiyt4pvHujqKrxvmid638etisQtVUtHnHVMNTb3SJX5jebHBL9kuan6TYfZSTcbynLLFBUJMsbREbToKpFmHqTd",
  "key21": "5Y99PzvqiQ2RSa3VMGhJCWeFTDeiSDPESyReHvCi1CsTUcJburCNVnHW4AX4BY7zXLCPYo67hTz7QDoRDBgcp2au",
  "key22": "2thA3q1wcwCE7edFBis9Y5KvVN11RdqL6HGZjjYnrCFpJ9JUfKhXK1sQhCb1CLFvex5NL4td2ZCnpj2iiWFogZ9u",
  "key23": "5CnC8Nkpnj1E3X55kkeMgdFskXZo3SBCTfh7LjZB1YzjvJiZNd7LKPiZdF4u4ajR7fJbwiA29DjqT6g6Xyu1sreS",
  "key24": "3UeXrCtKRths3GtXnrpYmsaJkmjYgeNBaD2dRTELF9aVXFuqKqsmEZp9o9o4cSE59DjgebDuhR34DQJWcY76QipB",
  "key25": "2Tj11kcwYrkkvXtgZYx1K7sD1zEqF3s8F6oPpTAXc2VCv7RUnrpRaiXfuKEt1BLQFLN5NXxCJvsihD5GYD1MsqRj",
  "key26": "5CmCMiaaFwrCAyspJWLQTH6syYTkBEU9x3HkAW1dTJADErRjy9RWuSoTvPocDT1LsYWsJ1z9oJ9EW35qo97ccPYz",
  "key27": "3bRRXcoYbBM1RsbUHvZJ5LQgTr8zcmQmuCB2xW2x6Qputup6Zz7Ax4tzaRHK1GnEXJEUAsAQXZK55wYT4DTfZ31W",
  "key28": "3Me41mCNva3QUUSEzbP5dHJT9q3nebR4qQmQr6VuRN3F733ZnBMTXkPsamaRB3AaJX8J2qjgf3JnbDMPs4DTFUNa",
  "key29": "4NsqqHvcJxSm1kmC34uMP43588S83j4n5pTNwz4w7LtHeaK9M9zp1gDcaGMq5fzXf77sy4pzNdwUsh4C7Qe91NkK",
  "key30": "611MYDWvvojmN1Gju8KgVnTm5ZkKHyuBrGMuEuhXCJ6medNZhLbAjG9YhegjM8G1ktP1dingM6RkH6RzVGaBpKtM"
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
