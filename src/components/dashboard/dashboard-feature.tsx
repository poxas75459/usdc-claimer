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
    "5CSZc8EpmhjysbajdbRtUbC2rFbFnxqnkRu8QbhtjYt2bSVxfo8GQj5om7bmAQBKLmbPCy7rHnfKrE29GqgTS5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ugWhq1YKRhusQkv9sWbMWX7nqE1P5uX8Ggeou31qTPTZFKWoga7EFMB98E6Eay9AZ7xiNdvMK41Vx6pF3pnM57r",
  "key1": "63pQcd3KA5m15DQodarLHrfMbupPmX86JLXyGRaufoVRzvFpEyMAxLCj1jx9ywyYfm4btZsnsX7ncpZvQpRTA2Qd",
  "key2": "4LJUztvJdQ3nNnMDyCxcD1Txv59TkEP41KcNzpaUpyhXBDPQTPqU6doPoXuzhvfYxZKJJ4Z4Z3FhscRAk4wzEKZA",
  "key3": "4e9aq1hUgap9KX1h4vS7pW5FHgmGo98XXk2qGPSgiPGNNKhgorW8WErGJ51dHwhfxyWCHAbRYRVRkwaSNfEjVLT4",
  "key4": "381NxVvCchWWp1PcMWDyRcoYpDvFUMaDhcgFw8bz1HD1nNVJhdkJH8ymzoSnYEADysd9nMyDmR15nWhtPGxNREs1",
  "key5": "2ZH6h5HcHhVbFA8oyvLhD358ygmEnuQtTpaJLtJyLAD28b3Qs53HUtrPw8yFbt9gyQDkPK8yxd4a1p3992Ez89Bb",
  "key6": "4qMYyxDMHfBjpHGUA2RSXqArM1SQ6VNHrGbomSoCCh9Fd4v1RsDe3pQLrARRNTwnbZx9REuY3TNhsotp1VNBsEHs",
  "key7": "3p1h3mqCEXfaQRSFixcngKXUNVN5aypSYqxvS5UkiY8ziX5V7PP76EnzveqUPwpRw1KTib3m7G1hTtvyFXwFSnz5",
  "key8": "2Dka8LdemDGqfHLKMGwdJe4Zgbrw3dCLuApeJxeBtEBfFiANzZwfsyatR8KvgRwGChyGZrUXPVKSMACLfY7dpqBh",
  "key9": "2qbNM1aVJuXTf5S52W8xW2uJz7PKPc5ZtxbVRSQfuKU6MBLwN3KytGKLRRzjNrPGajhkCdN4xzUQ3vFNTW3eodLH",
  "key10": "3HWtQK1mzZuz2L1RqxiDLhyJ8hH1AQfZSNmM8ALCAhQwTvHbas7jhvyLdB4WFg8rhEVcQUruTxwzhCysLUpvj9KN",
  "key11": "4v7Qi73TvgqcSu6w9CKs3c669EZRC92LgJW5ZWCPj2fjm4uLB8ys5yHoZNtAjj7UrBGabWC4TdjYCRaZExUGcJkt",
  "key12": "XEmmZZRLcxanjr4XyXKuSwX4zWdnUBZNiXpTiXqLogiPmUbmbncTDXw9ndVUrZvs1H85zunYFQ4kRnTdo35ThqN",
  "key13": "R7jFxfq4BAeyKgZfi7cQq24wLqGQphBd8s5CXUpZxbZJhAudrevnwBsuxJtBrzRB6zPQwB1pDbJUoZ5jGvQCJce",
  "key14": "4y8qX8hxMmJmZFmHgrExWbXSLBg2N96P2v4ywbNzVz8fs9z6bQuHDpDv3fwQHYR35A1r9x47viP4vhoPf6pY5RZ8",
  "key15": "4CX9bumfc7LBm9ycaeVKRRYWAMGDJydatbQpiBJa94zS6zhm6XyHJCdCMRkLPeMVs1vcWU6q7V46PUtdS3wMxTjS",
  "key16": "3yWHbJ6Yq7eUvdeVPbz7Z9BsP9uF79CzS4jauCu1yCNTNRvJvPLMJEb498iM4qS3G3g4UNqdeL5FEzPD4WNvh4oX",
  "key17": "5FaqFFijv6KzRwTMwkwGGxBDKh8ySkQ3bKe2aFcaoyYmyF4byq9iPzUR3HdUQamqk8xkxyNwbVxQurXioaafSPBN",
  "key18": "5pV9UDkRcCnXje5WRXcvGxyVeXjubjb7qdC8faHQcyHoPe8diuycZhzPHxzAhMtjbXu7AKXczubM2frKwj66sUKr",
  "key19": "4YoqM3wHsF8h2GKVoYsP3NycUMFKDryw5Nx6q2QXUHzdi5ZRK3Mp1oAW4BYfZUzEUS86GRbdcyTFrcNYpzwkggiM",
  "key20": "aQ9YRBybSgy54dP5hmr9rywLQq8TDttDDaLQCtP62HiQAQfDLd4T6ZXiZ4N6xRhnTd9pFETeqJdkyhqtMYjU55Z",
  "key21": "sK1jLXZcCgQZUaWCwZXijevqmwqJEY2hsfdbn6nh4XPnsf1QbeodzkP8J7ui7tAz9LGqBLfx1qHdbxUBZUzxJRS",
  "key22": "2qQugCE7d1rnyur3BkSJ4Vb8XH5pjM95VBmnUa4S45NHGATh2d3EFAroqbNFaMiPj4MqE2EJjUXGVQEQo9gmXjwZ",
  "key23": "3F3uhZmSmdiDhLjLYBtePK5oF2fLc4GT8NdKCndWtswVjdu7j72G77yPuoeQcxc9WD5TxXWwhz2VCE39M1WpKv5Y",
  "key24": "33cQRdLz7WSjcqU9dfcF1xu3Q9cNF59oigCZbvtj1Cs5JY1WaDg2QRUA9Mno4xroKZBUuqK4UARrAncA9pDGiPB4",
  "key25": "gj6UBAcXh5PLoRYd6Rhe5Z31TByAr7WUg3swTxtqkSw3dJz8P7ubCWWVfvKqmA5i43uwawJAFqSMW4VGDYn5zT7",
  "key26": "4QkkL4iPE6Xve7LK9up8u9gM2a7ynnrZfCUsUQsKWQvv2PLeLU1kkdm7xtEmQqnc54YpDmzsWQPCjx1Zjij3XWMs",
  "key27": "3cCTAHbrb5okL1TcBBBSBwkbG4WfrmSdtt9yGuHtxA9KhmwwNTPVwLd1GGkPnBT9ywV3QfFgiM4BjoFCk1AoHPtP",
  "key28": "5VoKGzrkReTcmjr4SvdZC2NXajn6xaGmvZBfXNF6gqJyjGmFZuzAoGr1peQStHuLUUBd6hhkiaPHMfg7MyAttVNX",
  "key29": "QjgTzZgVYn1xkNGj2U3zgxsZXUUCv31RdwdSWWwE1xwUu8kTdEQC7sqAUPdfLdpwhxvYXsHBZiRmsZ2qS36nNsj",
  "key30": "5TzS1J8sQte35KPEDHoH9EDxdrvNhBHQrfqWX6K7sZfYRSkx8Pgth1n2CXvMRR8iMN68p2zeEXtcUz3ZGAj1XTio",
  "key31": "5JFrhy6AjWdSr8HkboUAP9aqAXAVvWuDYqpqN2h9hdeARJu6CvHfXc1UMayfHhoRZ8Z1eFumhkC7tkZ2bqz6em9e",
  "key32": "5Y5Qdbjxjq7CMadTHaxMKxSryN9Liwn9nauDEmrh2pw6VyYBe14d4onUEiQxCcsi5RHQRh6FjJNmnSN3vgG3u952",
  "key33": "5fqxeGFmdw7iL1BR84nFCoXMwQVZcTfKrBcRJj4SXvgRaK5tHgGyRfPKHbnCCt1tySPU4FT36zeVUShB7ytBmgDf",
  "key34": "2YmA5GF5HqJpb8ScLtGksE9pVVXwLpNUXf68CMNhVvDMSXDmPYkPKarbDYK97xXMzyhsUVSXrbH8iv86v94WUTXb",
  "key35": "4eFWcbaP4kKraWLYAxbtAESABiZzAoAZRUUT7jcpY1HRtaG8w6LTemR68NGLTpHwgcaRLgrVwXqgevqgsc9dUZ42",
  "key36": "3jKVYi3vKT3UafhqQ3mE1Ue2P5ci2fjzVrDbQyMsAaUcQwKib1bNym5DY4ZMCPvrkPQ612F619dnT1vCYWqX3Ayh",
  "key37": "59S7pNbkLPoHGj1MVnzqA8u6vWPTZV7rJvxhmj29sJDzjcWibwK1HXfMnzAhj6eWzGziuMpeecq7TGFcpCnnRtoG",
  "key38": "235WXk8KCWzb3B4pAkwFTK5VMqSsRGZxKMdQ2J8hWVcpZ6FihVDC1VcYS16TCTGv3LohDV2zPu3iiZCNvTduprh1",
  "key39": "VQoeoRoSZj7d9e5fGoUGLnzZrmEPsYDTuzmxEEZaT8YdSnTWVvGvZXWSgQbM6CNUVcAzwirxhxP6wkgYsXzasmS",
  "key40": "2YGupwDbUFML11f4euVkBmnGG8NWaqnPQWPnYhWngr77T1SQnZ1k4i2mAupuzRNBHLepJFPkFeqcqaEgKmXsdUvz",
  "key41": "5ufWJjVWN7Lce3fEB3R6criRy9AjaMztzurtRVvhg8v4tJYfDocGenNUUw5xr6Gxh95tc8Qvra7wmBoHg7PAg25K",
  "key42": "wKKDLkxKR7CqSutuaqr16rAZWbNQxhGYuTSygq4EeHipirG2PFvqRDLRbp5yqorQBwDWiciibj7hRoG1duLf5cq",
  "key43": "VKR7TKDB1t4yYEcAJVatS6N7zr76RLnBKQVUnGc1ugdBeXT3BMnnMTwvwXRdC2MwUknd1FEkykKhYcpK9LqyQmt",
  "key44": "56k7EojZ7KwknPzKjEZsqY4e4Vh4YctMrDC8mBor628wakMJaHUSbeoyuLLZDdJny3s44bu4ChkJ6kw9GNwctK4Z",
  "key45": "4B3JkhEfguvmTFUyu4AqheWHkSqyVPDMz7iLepK1j1AiGHaBi9Zbh5DhDMkvzswiWy8dKk5LhSai953hSLoMemSq",
  "key46": "2vEuB35Z5tyTv7EjCq2HBTqUmsJvjVTgVf8qAWMT7hyVn59ZhMypJUHPF2pdkEkThdXdFpuVzLS23dehz6fnNsVi",
  "key47": "2PAU7U4TUQsucVejeobnJpVXYBXFUwegnvtnyLUHdHZziMqonTrQTgPdMNYjwWsFNUrRLP6CNiR18g9kzztxZGzt",
  "key48": "4hCVzouW6njHZBboNnyWMiqatw8nDrKbS9KbLzau8bsSybCY5rBPaxnLSQUfwi4tutonuorod2DYuV5T8btfYV7q"
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
