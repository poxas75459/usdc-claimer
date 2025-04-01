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
    "25T38UVPdEAupx7WVKW9DeBgNYg2SJLuwWuSwuNhpbcqoFTkN6T5UgArc4PUB2fNxY2KSJGuVQPcHEupqYkV2DiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gfDNWAzpDaGZ9hZzMyCoR6QUHuQMXpPcvsgow1j3zbrreGUnFG7QwNa4hTEhwzwvSgYJJWopzqTeiraaHzGFVdm",
  "key1": "5PD6Ji9bKtU4n3kTTiN2sVJ6zUFBRy1SSzcJN6QHTQw8LrdYWjEX6tcAFYhbWVrJmrrDgXoqgdFBcrFcKMfetCZq",
  "key2": "a4X8Wp6jh8SD6LvY4zVTvFyABHt6aDPZDHdisPgiJKUHKpFs2j3dKGd4vEyNBNU9TUUQLYg7vtVN213sPSHBFfX",
  "key3": "51FX3wdkiqaYKaayvidgRv4d8cBwSKJ6z83Vo3u6uyAr41c4qETb4vJkz9ERMqXjiXgjCYQKEgbkLPV2o4wEqrMK",
  "key4": "t22VLcRR1mbJkbPEbV3iQh3KztcTFJ1UQAX3RACuTuY8Mh1hAkxYp6SYJ1t9oQzPohAP64GY58ksU6ZLibTM3k6",
  "key5": "4uMummhc5vtXW4KuWAELgLcYkDeyPR97eaJUxXUFPoZLQvzHFgHqf368PhAN6oNNhSRL5tvfkvL3Y93tsdHbJfzX",
  "key6": "hLLiGEwmXaRfNGsJDcJzbjqZNthpME9myVt8MMCBd3DDYWYZ8CZ8VwffqsY2Kv5DAyR8ajmonud9DsLPdXnZ13v",
  "key7": "4FFTpdT3M3svekpjGcb6bPq5UwrnK5R1Ew6eeBjke2nRZQKUojApJhmaGQpPdug26pZcq5Vhhqfvx9sM9Dznrrr7",
  "key8": "5McZifzfnnNi3UFebMC8qE49WhAtMJyTym1Xiw8hS4YBBtL1FYhihiPEbP95qStBALrp4rhmW9JmoFnW3cv9cqt8",
  "key9": "58V13xjpaeCvVRTeuoynWNDJbsVE1zAdXJ2NJon85sbFuKmWjsh9TiRNK5oKMm765AsoyYJk7J5NXDTTjUZfdXQe",
  "key10": "4TK2x7vsm7jCngB7rwWeP9wYc5m2EXsYWk1inFex7BtMNbbfioon1EzhRZeEJSKTsY5pk4MVSNZdjnH3EwRk25Ck",
  "key11": "3jUN5r9kk7jG2EcNZammijPPzUBnJEYQeLn7tyqeQqgkZDSNozx7RfGdekRZbptCDoiiVA5QmN4bFFgFmutYrzPU",
  "key12": "2xVbJ3YLr1kLywebpAiLeydb5pJP8FEyocRtNTtF91dguxsaa1JUr1d9mo2eQs6eywhuyCrBSoVNSEHLpcisoVgf",
  "key13": "5oiG4FTBj8C2qCa1sfhhsZNG9rcoMHmD7CDqHJYQG6Mc6qWfFuQ9wMo1HVcihVbyAAwVU8364MaLeDuVg8CnX4dS",
  "key14": "4JE5SqTHuUq9RuJR3bg2oBULvSTjSEBfdVFMqtGQShxe6GGhFnBu4eP8EYKmrRjQ36wVJwrrsGnspH7U5frTihyy",
  "key15": "2uQigttoG2DQhYfpj33RPD7rVSXBQMRHtzDSuZHnBRjjCU1Efd9y2AHYREDVAxbopkMbLmjzSukYGtPy7ma3DnQD",
  "key16": "4MHUZzzj1SGRruyZUF2MK11sKnkfnCvm1PBM7RwkzwWpXC1D5yNHdf8ecJR8GYQGn3Yr65AMEP1RXJhDUoouLh5X",
  "key17": "2yUPXjwKCYAfcAb9eRrsDUGVCUHfCJDoscsfJRsmEYJKky5Szth9LVk6z9jLBehKcFLbPsieNrGPW3wDLtvRbKL",
  "key18": "4FU46iTBKhm8j4puJwDXyPNMi7x3L5BMF9GgUSvm6gBHs3jGvja79Eui2uhL9moTbt971CyBqHSrVFFxkcp2Pj4V",
  "key19": "2r2L5egW6ixQ8FzNMJCAV4pY2wnj8V1vsAUrMy1hjRmBo4gHj2DnJ89o7uQCPXWS22xBHtjNAWg5FCUM8qjbshjU",
  "key20": "3S1gTR5b3tWLEN5NZ16kCfDSR3U9KaecqC2iowv8UGniuUYxFFAiu1Ta5SpDtv8Wi6RxsVG7wQ9jHFJxJkXq8TaT",
  "key21": "22MjjG2NZu4z6CJH5TqTvzEZuvyohEoCuAJvvMywGm9tuaqUKW5B3J4MxktVgyYaQaygwQm4G4CLBg2zzvdaWv8R",
  "key22": "5MoNKcnuQ72pLjiqzWHTATjJKY1SoT27irX7kdXbvcbUE3yQctt9Zk8esf4QPDTew6ExzSu5SybrjC4X5VZokxT5",
  "key23": "2mWgcwXiprFvma2kY7DghKFqaFC9G6RxeTNU5thws8iLx5V1sTSomobZHwcgvQ3K6fs9WUwr5za7xG3BxzqUvorb",
  "key24": "5tGp3bb7yY9FqBdVE8hbr3ss71eqQVGMFyR6ePq1FuMwCqescsbvpYMNmbGNz3jr3oCDSgEvtDXgjVnpZVdMzZTi",
  "key25": "4XJyEST65sr6BkpjYwrrDFtsmh5cpqftVNYg9nLi2n8i626bANFkQqVM5rVEG4wTb2M4cmJ8FF3Q8RvRPkygFrYn",
  "key26": "5L33boaR34VzyEC5E9pGRHJ3cZyvgWNKCoPYgNpZ2swXfcbyr8sXEzBnoWd4W21cMLFyfyNb6M8ZPSuNYfJkeZkj",
  "key27": "59EQv1ATs8ZRfJnArTKXV51GABLxJZeWoQ55WvEKhoE6GFqx5p8Xj8X4kYvVVyvURGhM8iFxi7stnRhRFGmX9AS2",
  "key28": "3XTJtsr7DNakwvdGiEbPvZbyhQm96khHzR9FAoy4ZXN4So6yY8aK1QrLVGreYUwQYNVoQTUWb44gKC6sQGsCaYdV",
  "key29": "5XZehHLfcQHj2WHB7yu5pxCWCbCV4EDyzUV1XpCsLBSZLU3GPuWUoTCiGZRdfZ4TuFiWu6AkaWv7U6nMTgQgNSCC",
  "key30": "Aeaa3bq56h4bRezVhhkCYcer2Bju8gmLBjU3kPEdKdct2PfoYzJMZd2nWGunUPDXt92BTz1Tc1z5qirFSxeU1QY",
  "key31": "3ePATsJsjN1trxjPoqzFaZKbYPhkqhzEEP1Y4hfysDMxyKMg5nLVPFMuYYKxbcbQ3SpELBoVmKrTWLUgngaiBM4J",
  "key32": "YKYDnPZrypupKitBJZT47n1eQzvSTUqLThgifqr6qErwKaTHbzzXn1TPxMS2CUUKDRH8q2AncxfbbXbUfQjtseq",
  "key33": "Rbnsxt6jTBUewEjs6zdXsXVfUH4o4PnY9k3bsy6nXjBWgF9TJKszwbh6YekRBNbU4a1XciGUvxWuuYGBZhUocZY",
  "key34": "Wekpj4W82Wtec11aRrBVNT8uF8Z5nAi1SmM18rAmUsjg1RYDPALVXjqAY77xQKYeE14AQB3cwjUpUTTHyiFU13g",
  "key35": "5qvYLewfYYzELBopWScvupAaECjsZ8j4Ruia9DELGcu5n9yox5dGhAaFLHpdXA4KXfut4UW3wa9rPqZjg8MPZfUg",
  "key36": "5BGqogkrwviHH6v1cMcXXRQh4icbEHP1nxJhW7cP8i4AvZMm9CZhi4aZEZqZmT22gQc8NWNVY38peeYp3bDPgZE3",
  "key37": "3BmWEN8AiQLjecS1JmQH9LkZUragGC5Ux34oDjGUd4qWBfuXPGWtDyfxsFWeq9KyxfyF8zfJxycGF7f9wFuW8Hgm",
  "key38": "BD5KBduktgisrkgVHuGhN9weMyML2kjZk2kcDsf1RydiWqy6PiSx9Rvqe2VQt9a74JbETukjRYy8f8Hi4nkk7Di",
  "key39": "2yxyw1Sb1ymMUMKRgKj9XH7mCsZzbmTayai6kecZ1qwHaE4jUCuqxanug3CczeTBRrAJuVcRhHcyTtdsUDEhHJ7B",
  "key40": "5TgFgojiMjtBtzeSqveEdRyLUVkb1MUNtDcEMWfSYZNxQ73wnKKtvR2PfYQhDc56PNnWyUAnk4dcXRp8oUqsKcPp"
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
