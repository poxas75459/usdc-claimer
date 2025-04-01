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
    "3Uf8NNeLKTcZ1hDboHLy5sBnWR1GPHdZLioRRwpZNtb9dCW8PMrLjBw1ijShumqiPbiH8MQy9buUQm9Fkaz36yhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A8nidfWJaNcN89guqgUDnyshcciG4GmfzgDYY7ZdgxmtK2GtGYGbqwPcQiG1uRxQLqhnSYaRB7PECnQAwjAWdWb",
  "key1": "2abGxqajXhGQgGfpGd6q4ubZSGpQXnaYK9Rqd5NQNJZhoC1i8ioz5KnKHMKvACpNWS7QrBXv6WeLV2ribAk7TFeT",
  "key2": "24AHj1LXhQ18HKqzHvqVWrvJvExhPKcCLtGGkrbXpfTjdbKXNKxmYnzyBabP9Q7wWzdiR9ztJK43ZP9YyUqg9VY5",
  "key3": "225YFfLKUk5QQpuN3erDWaneK1KUB2mRVcGpigySQGWXWGvCAnLuwC6qSsLecYdnwEis2gC3G6b2ZzdexZH7gcZX",
  "key4": "4XZv5thhhccjV6EkHXB8qRUna9jHK8Mn1t1Jk8Tp6LVTPgxHXn9tkb3Tk5PXrDmaFtgBdUmy8xZPAnPRuWBDUhaA",
  "key5": "3V6zYZ1rcupawFSNAgsfcwPz3k4iSGbQnEuARF412Veyg5zuQGUbYuEq7FWxy19ccAHQErUcpSdEwwRcDDADz5rL",
  "key6": "4aVsRhqCmrbQrKRYzqvpuUwSkbZNxyrg4dLbgCjFQduucYYTaj93zSMbtn83DwDA1gBom7g8MtCTXf2Jyzx2pcXG",
  "key7": "2C6Ghr5kiEM8Ug8zMWBXYuCpjL3qs7naPCCBCK4YJ4ba3rPf379x8M1Y7T8S9enQFLxQhmjsDG1oHk1ydCp7jYcK",
  "key8": "Gbq36wTxypTKQL1AP2emaJSpch9XFM4ezbjMtntN8kJrQbRPGG6cykaY2595xv5Rq47cAoX2j8PgdnUY2hpnZZS",
  "key9": "3StBiTVzWXbw7UXwjGJZxfw9f9iy2VKrsmVv72rTe7cVnoR78MCGinVGcKh45eqL4ViQekPGDRD14ydTLm8naBhF",
  "key10": "3Wqugmm8JnNywhRVVwPqdnKXaN8cWCwv3nX27DAG6z5dBn6jC5xmUm2H8k29qrQf2DMuW3Tf75AVV3hfBEiDZx7c",
  "key11": "mURUSXZx3sWaChmCAbLFDX3DF3hT8R4xZhushR2jYJXDhsUv5RQGP7fsTA7Y81pQuQzmeEZWY2kR4Dxd4K6v1Qw",
  "key12": "ui5FQWKkAUD3eB5xHc2sa4fNgAhDSc43xgnZ98XF9mpFVYvVqNaV4ZgjCV2hK4NnEGvASuwyHUVFGzrCPAXj3Mk",
  "key13": "3W1uwAzU5wQPqjVAULpGnjYYpc7yx2ByBoXNwpCZ7L3GiNQc7wMYTGiVeT95BMp8juCRxMutoP7MXLA9g8qWAXnU",
  "key14": "Et1LF91WupeBePG13kdZgLjxjQm1icJEM546nb5uoxHnSoi9U6U631zRRMBNpcgnvjsKvCBgpKaB1AcfkhRQVqo",
  "key15": "2dJnWtCLQ7NGaqbuw7Ds57h155iFj1DL2YUXVb3aWnpy3JXMcWwirhJv1jzrkRteTb6TT5bN1Gc3B2TXsnaKWsKT",
  "key16": "yUV4dbxC2rC7MdbM2LqnE6nCELuh4aXNgAXGxWQ8bgza3FPnJwR8ifZAKdFb7SMU9r89F7KgwWbMJ9WqmNC2G3Q",
  "key17": "PxrAuFbQpy7n3HX3pX6sdaJ717BgbPFCKvfQP4Dv5aeyVydhS2LDefoTHMzXa6yjwptp9CQafdyYZxko8iPAya7",
  "key18": "5PGszhHpy3vFvfZyzCisAG5tC5fH5TpwvxtviejXN1KWDbTkjq5ASd8S7e6eWGYKDSWudcdjLQRCsDCCujzhyfoX",
  "key19": "47ggKKEwG5zjU7gYooWaeMzPzcWJYNf9J23XxVJsKgxT16KiaJJcsoHPFvFUkjybYd9XreZqNJu5KxJ5rbBobQdM",
  "key20": "43pGjKhxFaRGKEfie2vfzu1bjt9hNp6Dby2gtbmRZppAGzWPzMJiPhpRDWKVHQbt29TZ4mqH5EJe2DNuXMe2SKvR",
  "key21": "4s6d7yuhodDFnh5LcFYM1b8L54MWcaXadudBdDsAgLD8hZNccrDPfa2nzCQoXqRPndbsAQhand363B6BunWhPqSe",
  "key22": "5wKoPgr5ov3TpdsaDDHouRNjqaAuK62VYxvhtpwzF59HofkDmrR291g6FGCnD37UVsAa4Qrgf5RcyhzemkNxFoM9",
  "key23": "jTK9FCDKRWaqKwJXVV44dxjkwKeYkFaT3H7bH3DH89DM22LLm4GoJ5yzf8wsAkrimc7u3GBk8BibhwpLm6tHC21",
  "key24": "4NbK49xHFeQ6QELzF3kbmGD3gaoSaE75Az4tJe2zsQEes3wazxJPLUxzJ879CxSJ97esBEX5DxvdmoAYFBeYVBLc",
  "key25": "BszEzrbSQBZFY5AFU5p9xXZFa1D1aRAqJSZtDouSa1CFaVWGyeTxKC9XJGT27PUpHjcaKBLXZZAWCmvxZoGqh1D",
  "key26": "35mJbL8JU9SdCcfTeMPfb3F7gH1JGEz3jYfBLEqX6AJPvsghuqRb3aAMMWcCTyJDQbZFi2eXP9nemYZVGJWXgz5d",
  "key27": "SHi8x7F3httCeEtE3p8do9bn3iHY126LYs27waxH8Fi2onpqiMWW5quTJEzctpHfD8WbLxEoRpAbH1WvimNiCGU",
  "key28": "5HHhchnvAECLvvhy6eo62g6BqX6Zr2HBtSysLk54DUc2qN3ukfXNsGEW7Pu63fRkygda85FNc5T4NCHP8GX3ZLf2",
  "key29": "WnNwMC1rS5Atb2zvFfF5kuJ6xqe41k7iSqY7dPD1ncUjW1oELUf3ecq4isYGtuEsu1KGC6j4CdKh4ztYDv36cYv",
  "key30": "4n7Z55gGck5Y4f1swvievU8bzJdefrEchs3MMYFNzE16VERNMzBUB4ZFmydrBPitwbPaHTs3sx8jy6B82mdKAnbh",
  "key31": "oWsTJd5xYVfdvVeCzxdfaktDHqtZoUQBz2MXCxbDE3qbVVwiPKHXRFLvgKNG9YoVuB9zf7ZSNwTnnoHbMDwz8U2",
  "key32": "2JNgLorCH4EeqCrWAgCsRVVguhzXJrLnpa1qCGi2hxerTAWiNKGWGBAcop2tBVf6Lnbd4WirVaUNgG8PZk5nG5ax",
  "key33": "2CviSV48mAy8dxkpyNgVf7CnTQo8sYtPCcgL3r6r6FhmNyYuzvssFSEbeAFMvpUhKqMBCVAeDj4S75GY3bjhu1CD",
  "key34": "4zaWmxJZRjcbyueQfuT1qkFzFtaVTzCKRLXS2ZP8aRvx47ToUqmNM4k8JaX6qUPUGm5WBdtpfmJYFqpMfr9AwHkV",
  "key35": "63AGd7dfVDpRP5ZhFUmfBSYgNdSthAoJNh88Zy2t1494xMAaMPfZvi4DUjwRgP7SHXZzzk3fnFhGxcYTrzkFwYRL",
  "key36": "3B67vq73kHbr99ni4jnqXCDP2nygsU5eS4vBBTysHGiQAq4iVQiVdFhi3KH1d9ZLPicSiNLcYwDeHTQ1KiiGk4Jz",
  "key37": "4fweqdrw7BcCV96hVAV3rhEYDH49eKfEJAfVKwP6VEkkPX5fkfsDijiiH6Jqj3FZvDLRYEC3DPUhU7GU9GupuLza",
  "key38": "2Mq96UMVRaDTzBR583JZjwpZUU6LEcRH8JLku9U79qu4MnVvnUNiFNwALff4zfExUizeA1Z5xiAX35Nb9iWgz7uZ",
  "key39": "4jXysmSe63P5cEmXiAdgq9C7ocdRpGeB8prahgk3kVqH9QvJzhtB8PzrrCMH72XwNHsVHD3oEJvh1fzvhLEHnmdM",
  "key40": "694tKeG5dpUW1nyKNcsHPSR4XmukvWwBcBFEdXKvtAUUEVwc2Mk3TUdzvwBuNq3nt1kqB2SMETpaQj2xiEZU9S6"
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
