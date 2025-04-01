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
    "vRPL3uRrp8ddJy24yhKinEkHEqR5brQ5HbZj4JCSAxxrG329Dh4tnxRfA6FMvGBYDuR9rUTwEVQReZPkEZDDEog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxjHa2Trro3hBp9FMrupGeKa3ptog9SMHypn1W5pZDFdEFARRG5e72vhFkS1z6YhRpTWiFBxrLSJf22w4jbPr2J",
  "key1": "3V4RmL89oy9Lay4gFboTuQKhYJKQifBsahLfGaesNS96Sqw9MYDjsvSEaikbiYSvwSAhnzNVit2WL4JedDv3YCra",
  "key2": "2SxLjYmqYGESYeErWGxV3P1DZPWSKE9DdYZ8CrzpBnKMPCPwyNDbAAjHv5cXpUpeu4Y5PcAX7piUKPxB2X25urfr",
  "key3": "M8PVJHM7rNk9GEWt7EXT6VfS1VjQUGczU7hJvRR6bVLQA6ZGet7iY2PYvbyKv8N7RPRTnHTqCraBWgAF1SKAb1w",
  "key4": "3jcchAGcGKFujHvNkQMF5Kjo2g7SSnVAMWEoWUhPjFvdCvVgMtFmi96VLbYDs98PKAPwwbr6gtReLeo9MwiSuXpz",
  "key5": "5nsoctFcwbiwZip4UPBom2QTgtbn6cXd6hc9P1LHzQhYNdEde5TfyWVSMDvv9M5GaHz6Fpq6a3RXN6fMDd21jGKo",
  "key6": "4soKAei8YCRC7GqRksV1TpsgN6Wmt6Cz4orPLqC99sPrM46CxSuVwFV6RRNVHKxFVxsLuNerWjs6gZyQaZTzw3Ed",
  "key7": "2ZyjChnGtp5BkLXSfVggB99QtwWq9iZbGMKobErvXcfCF1HZCS8g2gdtyzThZJ74NcMSUtDQqJqnPqfcFDBEjpfy",
  "key8": "3f5EZNg377GFhNJ3ogmqghhRajWYmEPJ43FaEaAs8d6atfNvMVZmMLn6KM8hYVbYjzfkKLCLrFSEyvzrLJczJdTT",
  "key9": "4S8rCGQep1GqJAd7TBn3KqPgXsjf3sYXJ3R3G4h6Cj4wmWzF4Cvex2NzMZVcbjyb5Mo6AUmJRfm9y89cSd7hPAbf",
  "key10": "apBUcsNvMcvUEU6NK6vi2cfYHuSTtGveiG9pSe8b997ZAugNXrAqn8eBVn3dZH5zQJyarF4sAummH8CnrDCwEXH",
  "key11": "3ZCNFo1Fsinfes3bG5Z36iGUWJYYMdYvWhxDF4kEHC89EAqH5VosG4DDa218jRYYHXkY71oYYX9TzXcMtxxqD3t",
  "key12": "22tnc3QZx2uyYcUxNNCYmXc4cZ9JNf9eZXiwLqj6aSrFKuZUyh5sJBNaEijFxLUXVoJP3MsEL6C9qDc57opCrYVn",
  "key13": "32kEPaCG7hD1ytSk5nJCKMhGUcRX7CKLFxzVQKSYQxUf3D9kd69i29trk8bbS49eqTgCpnwmtPq13aJvmcJGFj4d",
  "key14": "5ecT4M5d2DSyPRua1SihAhHHmETB52zvYZC341D5TG16CPM98itq7ZZMqxKt9bShLutNNefJL65vbgCuxMhssGYJ",
  "key15": "5DraqWaqyd1tmPt7a7A7n9NAJg1sJhRXtEixhkZHV4yEijuWQDYvXUYw7p8onTf9gM3YgUWEUx7r82UbWFnfGrg5",
  "key16": "4L5yXEHcKS7k6XsiW9Q3J1N6mmi2AqC8ZU5Yn8hqKL2W7wgj9dw4Y9inPULzLiMEC9pa8afnycGni6Mz6TwnALx2",
  "key17": "4LjmrHdZV4yhse5PyZEbGqKwf2bRBX7JiocUqYGvaKHbNoDbps1GY6ECFmGr54YzgQCyYMna7x3hgHjAXo1AvfM",
  "key18": "5xwqxAZ4EWLPh2ZAyrmCMN7mEy92Y3E9XxGowohDZwMEStgu9DRFuGtqj4qRrwKUSaKCwFSS4VThQdwMiZ8Qkud8",
  "key19": "2jDsyu2BNv7fJWVQwGD1noFsPevNyBLdV1w5fDHcGaoxs76E4D8s27obPi4JmvrtfSDGaAhnqWPqP7UKFF1WrVX4",
  "key20": "5gp4x1UHZFqq8GsbECbMsDcn1yiDJKB89cF5RmhDbACpzqtdY5sXWrHBxhPmkKb5ie6xLyuMJYKdiDq2vUvv87vr",
  "key21": "3pbkSXj3HBkhgzwBGoiRVTPqpEqPwtfn7YwR492JwHCoQaCznfdzpVv7YDR5WCZif5HAbqb6X6kkPc8vjq1fGYFz",
  "key22": "2k6wnvdXPWLKEU1u7RdthVbig8udwK4BAdtPwgFpHWPMDhMybE9PqZzpxjv53Qtjy8cd8yiVd9syMf6Dif2HznYA",
  "key23": "4wCkbphGcKq9VSrbn8VWa89tXJ6qrSXBS33WVyaPdmq9Xt3KWAjjk5EBKNGooYKPWPFFmeNGHmdxa8Zb4VVJqWXN",
  "key24": "3MyfacmCufnrRpjFiWJwmrd4uoR9AhCjFnPBAwxW1GRNKCh5mqstfk8gAiAEWfBo688QWQemLprUpUSjAahDCokQ",
  "key25": "5HFNAJ74irf3YgacypAor6Zk9wvVbFHZ7E96QwUQyHpvJxmmeds8d4kdm3iJb7dPL18RFTV9kxsY1H33GYPDqtPY",
  "key26": "3bZciEVuPpfJ226GbP7SRt8pjjf8FexBLqdUXckXzGxDgMBzqpyddGwZnAFqopyfPHK8MnfGDeT6UhAgGwKPdmud",
  "key27": "5UF6Bd4rZfb4UFvdYXbKiYmhqw5c5Ctd161uMPQCiSX5j1CJigZP8RdgUEvc86wjGxsnWH2oZa2JGDiwnKpDLSjf",
  "key28": "4rkfkFuPidms9gu9XRZnGBryBFUwh94PeiqQtUegZC1XqbQTt1xJ18hRJCRPaGyu1Wsgqg73g5V8KVAi6Ub1c8kz",
  "key29": "4BkRV2aaS3MwCoRsz2H2us5BPZCL3gNcDmJaT7Vbb3F4LcDNhUFzAw2rGPHHHAaA4zuDf8jh2rreArVayyvqAXwJ",
  "key30": "5rHypwox5e2ZMXjgpdoFRf9xnBk5AnFSCPCggEL5ETpMcDKXKW5hw3DyFXC8Y2F5AX31cS5NgGuVs8GnFAyPySUx",
  "key31": "4dt4JLsFFA389igMi6aXfHbDYw6GGsamjssk9CXgwdZANDuCeDxd5HRT967EZq7VvmRHNwBixUeM4msSRM2wDmNy",
  "key32": "64acnAdBuvWHDcsJKGnwJbVWKMaaj8VJP82rVtg4PsUZ2cdLvte4Sq3wqCeVhTtTSMVvk67KJYhZYijtZWBiKHTR",
  "key33": "62GJCbHtJoHbfwwQ28E6SXrBThEf1A4ueJiuEQh1wenbfb8WWU2a3891qzixzX2oBrKHQN9QwgbxfqAH17FxK6NC",
  "key34": "5mZU3VXqoRHH5Xp3yMAsob2MMvZs4WeSCeBPtUg4RyQoPJsvCobf95sCTpYywwNUkH8r1HSfHwMBLfZk2j9S84Wt",
  "key35": "5afTnuqBBFMh4rLAUE8xK2wBJi4T79fa2rHyY1uFEK2NBHHwp7Dmbs6dtPdcxiPkk4owjpiDeEFFzdquN1PUoJQ3",
  "key36": "2ypsjeEQUeFQsQiKo5ESW8pEnGD3eyPwqVVmhVMmg6Y97ziq4eYGxrzwF4FN7Gmrd4dSNe5ia3Y3LdWbVdyaKE4y",
  "key37": "2bMd8iQCZe7DiVKdd6EPsELq3aBY7stajpqnHMxk3s27xcXdJLqz25SwytTk1u4rhgJpSPJgzjFsMQYoRL6UAtvE",
  "key38": "55HfKbn4Y9sWMuDFucZFVtefUs7hLFJJqzSSEHMeFjHKrnXKALhESm3VKCr1gF5NCAuK5k5PbdQs7CDiyVkfkQQW",
  "key39": "3qHqowWZRPyVeSe1UPuL97r4r5sPcbYgtzm93PkNWo2T6EUkPmvhdogZpuuCJ9TSGxEp1F9SWAk4yZuMJ1waDFPA",
  "key40": "4wuqBWG18rHVLA26RKNpgwkNUJBkW9AYuXyuCLVYvt1J3RHUWV6AYRpoTFZgQ4Zt3tbHs92S3VxSoXx5s49ddJoN",
  "key41": "4ZSQiEmEcquGXP4muyg1ChcL7nqVjCLrwTU1PWs3mWw5EzuJaMpfThD2kK8PQFKChjr8i9K36qL9EM8dnx8ap98V",
  "key42": "4K4wndUPSkzgk2HP8tgXKuCERe8QQQJgnHYmSy7RYHtpRmtpYK6KnYRaQ5Sc5d6CJPJra4sZf2q52M2nqTTTKmJM",
  "key43": "5k7ThtBoSsC6QH5i2XEbGY27GSE9tkjj1ui6eztBy37yr87vbeHvXFBY7Gq36zBzRkgcmoq15NuGJN8e6mrfKUst",
  "key44": "3N57CLrsyzMnRizmA8CtTQAundkBRVLRDz9tLMQ6obkyfpLmMPJbJ2BowUDinxHYsc83yi16KSdthrBSxWuzQGJ1",
  "key45": "4om23kCNdeTnRo2oxjrzFfQSariyBWVVe9ouJpDgPramQWfbbSFpCzXfGyanGKsz73bruqYvg8qausoUfBu5SRym"
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
