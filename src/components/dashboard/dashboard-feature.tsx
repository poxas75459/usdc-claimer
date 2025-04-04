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
    "2cdfWcJpJwij6SxzTPjD2x3HCLh8AUBgkSRuPW3jBuEzKvkFcXTzC1Vbnqi4YfoCit2wQv226tua8KPsJmR2qsSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZFiAhXoWnfCTNSjMESVn6Tp2J6VBAwso3AHAi7nosyqxVAkJ5ZExTNskvEjxuPTh5UGgxcnpwa44Ys8qNbmx97R",
  "key1": "5y9rvvPCgJu4osuy1UNwHMQwpPGgEbsrF8mLTePDaPJxJRMUmdDaGARHLTqnb9uP83X36W9hYuRZPjWVqepduQun",
  "key2": "2uAKC7hsArGVzQGUceH1nd1rMxprafYds76Re3MgL8x5VVwLkytdpneFDU7qyf7Dm58EkLb17ELDDfwNvEuxx8Yo",
  "key3": "2syHfSW3q2ksUdTkPgXD4vRVMh88DUqZLtd7tvRrjy68qk3Mwjfis1eRpbrMzTcuPdTyMpgsioUftoR6TgsEkpoX",
  "key4": "5hz9Y4eNQVrV9SaDbjmz65WRXeRUsF6V98cVoyMdvDF5YTXSLFLdg8eFxJY91xYTjYwYXm27Nw8edUMxBPYTmWGH",
  "key5": "h3SUj4Pj7ooqDZKwuJgg2rS5wsRFeZtyermtykrHYi8s6qywj8EoqWDE6v1EjpoywLEW7zgcewHCjnTFVmBnXAQ",
  "key6": "5vjzejX1YsDNamKSLPA3SYbuPixe1teisYPmeN5jWxZgqHx25eX2KYuzV48AjR97zDht8PVD5AWYuKJuG2NwMHG8",
  "key7": "64eRXHfB4SdPN32MvMRXjTweMFcKRLiz3qAwTHj2NChs62MDyUm5iByaUADGotcXtaaBh7D91qXN7cRC7sqmmT9e",
  "key8": "2ohkb9HB84ufRBShxpSDVUGt1n96DLSofPE3gDCGLwzoxKJMRh8qePxZX6XhhGPcNuhdd4rmDGSPrqocUzvY9qE9",
  "key9": "3Erc99VK8UWUsx2sMKnzZ9TiT9dza14PgT29VHad5wHwioQantbNB84rtP3kZFWnUEsXkyZ1FTgcWEqtdbnL1BDX",
  "key10": "5hj5fDdvQKsNv65UeCj4jpddBEAwoeVke3vWFtGuEN1i9eug38pQgmQu7qRbghyPcnotHQ9wsThkt5SvkR9iGZ4s",
  "key11": "5zd9ziFLwobsH1tW1gLbjrsXSokKDDw7v3fPuJXwKLJb7UqhA1M3Q3CSmBJy41xjUyKqcyMFaCCPxb5ngP6pKsTG",
  "key12": "3XLHZtr5KXT5fo1MfHRrfFqTCvnLvgWdn6pc26hkyxs5y2nCh9BrKZHCM9CnFvi6gbAFtjWxBj5wra68zKHeHCmR",
  "key13": "4uCHjqfKL1bXUkLiytkNCK72CDTJj12V33nrenft7gmMHocaYW8pNjDMeWKFhYeWzqCneXA2neCCT5LFuGR6JTxX",
  "key14": "3q3kYanAsjja2dJ5u5qQqfHPpDSo3yKhQ4iHmMi486eQmsgJ8Ks8Nqxo6JFAnreNWcd4xWFfPJYCr527yZRkVr7s",
  "key15": "27ieGhnmnjbRHNtxEzcnwuGGEXwicvVUK5sukvhPDgmG1ita6ioutM37SjpD4KqAyrtLEUoKLMwQdUGhsTxx4bio",
  "key16": "27mbx7jTxDmNUiaKS66LRSpzhNMGi93YiVLdsmtn8DwPw8WKZ5FDTcN6xuWBHV8wbKxW2MFknNSU33tdYKSTqjt3",
  "key17": "5SBN1n6VxqwUBTvrySusYzVuYfxjqPQ8cWKhZZ6MQ6xsjd28reLwWTjCv4SrsWbpBA17oF2cSn9RKcvRF9mZMEYt",
  "key18": "3rPVqDHoVkXabJ5cRVF3dVFbUnjNyhDKydzdgzRTjAMrhQ9D12c1vxadDMuqQpfLTCWsyhD2h3EiQNwpHnzvJDm",
  "key19": "5yJnLhGpTS5AokSSzbEFk7NjBHVWgU5eE3jjQnbUdExwpFZscpWF7QMhEzq8M9drsUE16kHphvh3Neu6VjNMJ81H",
  "key20": "2UopLA1iL5PUf8dU8cdHMJNV9RBoFTRP2uXuJzvPLAAcvteYpLPj9tkWgiDVTTE4ndaDE4BPdCmhKGadMUfxaSU1",
  "key21": "3TcGASayBZJwpNN4spCPUGXL3mA8qskYLmuzKif3eBvLD1kfT9J6wcfjvQG7DSGnNL6AMUmSZt99jLNv7hDEMXoj",
  "key22": "5X8wPUS3DMfKepVtwCNSS4bcaMbGEQqBtutcDoygCNvmaSxk1XrrXZNBQKwj2pPytcBF559tPSiXDaBmdthx6REh",
  "key23": "5vQqzquc8tSP3wdnd53p6jA1yWZHS1KjwXxmiE5TvGZfkkgsNT7Q3zP6DTzw7o11CBC8FGDhmTJ1qfb5sHegnf4Q",
  "key24": "AZXAkDtH4SBAL3drDWFHXb5h8tAuDRbfNzHpdbfaaatJZgMTGHAAZdKnn89yKZAgsMTSFMTnTYmVc6Xou3eJnzs",
  "key25": "54MDdGGF6QWeDC2dEgYzhwVHzo5tJqgxL6RH4bVwFDLEU8CaEWNfVf9CrXVwtsKhyYYQbj9ePVTrXepFRFSqgKuf",
  "key26": "3XfiPQBQwGhvoUD5ETtMxZRHPgsnLTQZqUYpNatKJDXbBPDCAMZzDjKwycqd9hW9GqyAkV6s39s2MDzP5K9F2Apr",
  "key27": "4FF47XDHrQ9mRg4R9R36D17dKcgsyjLGHjWpzUW7neyU3m4RU4pnULacK6f3z2ad532AU2VYDisMsmQDZDA4hxV8"
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
