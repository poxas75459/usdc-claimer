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
    "4tjos3QoorHPUS3sJVM4XNTH1o3MD6rq1mbzx3Kn9V2FoTJZm57LyVjVnoVTBbkJGe472toXFSqZ7cMT54di1Yzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FHNdPSLyp4mSc233zUG5VB8QV1Vu9M2XX1SKwbmqxTE7MD1H9eXKb4Hm6ruF7rLk1zFtxrN8fdBHYTSA5kFCwo2",
  "key1": "vU3qfbxpHnkrLZ2wAiRfZP6NBrNU7tfTqjKb5F3BrEj8DL9cT52az5aDZXMcuvN2C35BFtya3X4Y5r8P3wM2LnY",
  "key2": "2UBtdQmDecY6mkDdsFXAjuBjCzmnTfaJ6nVsD1y675JXAfvhysfJf44qRyJ2AfgRjr3ge88Btgg2KEymVy5taEMn",
  "key3": "3R2meL5nQzh5cYqyuESySVkSEuPpQP98AJWSouLgvGcos3k3muvNEcXpU1irEFqyCmphG34hCw5FE7VAm3auXFhe",
  "key4": "2DaQ1yNyHhLX43ZaDL9RLYrvdMYnZBvYEa9M4CaPEdadu9quVWVB1oNLv7uA86SQYovzDVSnLLNffMX948qQZt9D",
  "key5": "yRXoyPanMa9yxK9R5i8WmaQV2j4WPAr4s5NL6EHQWvHGcty5F2XSDNufyeURVH6ETbRRVRXxNyTGxFtrHyQ9Roy",
  "key6": "4YGvHpW95B9oECaEsyFWgeUWYRScrJ4BH1U1RyKR8LLBMFGnhXTVKTKkVnsDGsdxMvzKyehnK88XuJYzhaSnxMqL",
  "key7": "4e5p5EkgfmZaNgJ477Nc3dhGX5PGBRx4CUqm8CuLRoD2oE3igStjE54jM63XtMbjCrZ5KKVwfR1u6v33gdQ8duWs",
  "key8": "4AS4osMVgaTjp4GAxREu6dPmEXxkjsr6zSppRYWqGshYbngU9doBdqrVbQD8vLV3SphQw8P8A2tPBRf7aQ43wWfq",
  "key9": "2KuWpU4uMPBvCfFyZV7gmdLPC1nq94KN2zMCsdCyJmJmXZu2jz9pQiVBXWcTMk14gPkddRgDg6e97tPG2RZTuH4q",
  "key10": "3BZXjeXdvcxifNkvRPWAbc8ZTHoUeY3VPw3NJyTgPnSad9neADvq18nv7Psp3T885o3wR9vHQJAwx2qYnAy4KJYt",
  "key11": "5hijJrF3fNeQnoaUVRxLyPrbUyZ76Vm5hMeuAh7UUaYjVKoSLTxyq7pFf7AiyL7wmUkKpdfD1VFBPRr9GdifL4Dk",
  "key12": "2oA1KTmohnmkyHFaqjD88tyjeLDNu6xwF8SEnrtnZvXMixVWxhXCYeQsknE7rCLNQJZJfQX7Jt5EPq4kdVyFaLBj",
  "key13": "vgzvownSwNChampLzwCyaN5x7CZBymmkXouTy5iNDqFoXJ9u1voTzWiiNdDv5gGYnj7ikeDyKcoZ2MGqgyQBCEi",
  "key14": "4pit1vys9EHH5DUerKcoxyQDTmH2iS3LNhp1txLYbP7akwsS5bFJ6yXrkfj4uLGtB17VXUcEu7SS6LozdHmsQBgv",
  "key15": "4c67vy6qfQacWs7MoS8mfQAxSHSGF7GYbr9SpMX9PnjLk6VP1SFktXPVtEFUKBLssgy2hKctUaG4z1UAD4HKpQRu",
  "key16": "2XomBZwBgXGkE7j8UtamZGepW6NqfbDKfmuTE7RshVjn2PmcJ8EU4eyruqekUa22LNJgS3iznb9j4qh6AbPQnY5e",
  "key17": "65n6KKGAJc1BTHricuQcDrkAx4aa4krwwgA93MWQwA2PM4yUnR32rYusmeELHp5Qm5MWVR9gpqiE5uLyPuabFdmA",
  "key18": "4UmC8yV3uKKFciyYbJxc7TZEuNSb9q3iJiggofp6JJSEn8cQbCWkNkYmpDBLG3Y36SujK3JD9gfcm6mmViKYfsjK",
  "key19": "4Ph52Jvo3DN1eRDMmuUxHq5Qd56RAi7wvz92qufXz8NurTzgrbeKfJc26gCqUJCKMi9WUNW6Hs4cg971gWLdqLtX",
  "key20": "JuVXEs8khB8kSKXk4P2P1y9crVctcuW6TDHXhy5huG8PgYPhkms92TAQZVcKnsoWLVywyaCSE5hMmYKSMBS6b5r",
  "key21": "34TBJiu8JD7LHkgPxkEtNRZkVsGMd5iLyYKLyG9DEXArnEBy1J4BQjSkatud7hGiPVyPVaDSksLxYhAEpkstBVFp",
  "key22": "4bHdYjxLPGmDiTmrfgBBrt5WhUZy44LCD54AgrmVt1mpeu3C8NRo4KvS9gb8Nw8ncNhegX8wK73pe3vaqiQ231nQ",
  "key23": "5PMBEZwBikiJQShAL6hNt5sdEAxBU7Et3qbfXQTCdRgM2azQEg9tctau8QPeFcLeUiDUrAZ4afqrUbNkqnUK9gSN",
  "key24": "LsauKPVsWsFTN4ZpuBKKTBmx9wMKMGKEkQonUsiPEcQRasmUauTU36jCAv54EtRquZ2A7fgZn7ickRYcYmBDy4x",
  "key25": "mwZZUqZJy2HFWEhigt8xBU6hS14RCJSxkU113djEx7izS6tA6SYVfeCZm29s3nmSJQANGu4yBGNDtfTJq3baeWZ",
  "key26": "3JHmAk1VznRLJtoznFCANdtsf5NRHqFohFjJUrLVbxLjbHVVhWoT6Q9euP4NqXWDsYrBmqx2aZYwfTyGZk4j1eV",
  "key27": "5wTmomPLKWuGD3Q4JHDB9PRJskEcz8FmK2sshHPxxF8rVHce7EACJB2TpRVdC3pxyCPQPgyCR44WMwfn66xgYSsS",
  "key28": "5MdQM1DZCVhPP2Kd7jd1Dd6j88Fptwy6An3bZLoJKJ6hdPkyWC8BYMiYw1Yndn2EoQsHgV46J46Ahf4moUjmzPQ4",
  "key29": "5RQRX5qrTjZ23Ry6AMYi5iK3Sdc515yU34c5fHs3K8dN39JLAK6DkD7Q6NXUaV4VT7N23AktuiQunCMtkT8YfpsX",
  "key30": "4gR1mqguHCFco8AfSrmz3N51udE398QXtoDkAfrr2wTRiumBguVv4WmVsoAF1ANxt9KtMqv6zTtQ1Zz1uwtRQz5H",
  "key31": "4x5h5V8VUV5MK2ZaYu7PvQc3pv1cubEH6XDQvDBMPeaLK4nkzysZ8vqAFhRajDC7idi6ea9kb3fjmSGoAe43jv1D",
  "key32": "YDcNJ4RG5u122X1po6HDaD1Hd5JAh61ktDvKjA5CbcKsSVxMrCmM4xdeMBk1LRfCQcG4J65Sp5K7QBSUAdkXQfn",
  "key33": "4EchbiKgK9g5byYjZkA8eEou4AL7YywpsGueNvJRzXm8qPXmkcX4YCuz7wwpbtmpWm9c5gTx1mJgY9JSUF8B9H9y",
  "key34": "5QMPTbubi6iUNacwrSrnETJPtYWwvKZ4AZYBzZvk7e191G1fV5nZuT45483WdPd8jNiX3PQugx5dQWpHLgUF9sn1",
  "key35": "zXmfCynfDmfF4GRoRJnRq9dZt5X4mEWDmGQUqkKWc3yqMFqn1CCWkyJe55KiRqWBqCin6UoVRy1pbhZg84hpqf3",
  "key36": "3yHXQPdZ4FhbAkzjcLCGAAwWj7uujYuyHm9c9Y7G5PGgX5ubbYkdCPrNTRfrNvf6DN4mvurBDt1XkoV54DWoykG2",
  "key37": "557F3HA9LUJT5jk1SEZ7dvVuhVHEz8VWiA8GT4arfzz2yCZsyhocmaduEa5TSwEgfwbEyMioM3yNWTynR54u6qWY"
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
