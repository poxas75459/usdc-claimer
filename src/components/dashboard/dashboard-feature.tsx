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
    "4ZcunXt3i4SmU76j4K7Bm2opwX9G5Ww6RjBiK8c4XwArEoCLnvYmat6ss6kAHu9sLJhcsGdEJSRsJjbWWUoq6bJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aGzs3nM4Eak6vwPNSW4zMynsL9JuLoD4goYwcDXLMazm96KWGw3NdvFoYjdf417HEQYHVz8371jebuS8qaURCiK",
  "key1": "3MRkHH3AkFS4knBeSaDpqhhwZPA1kZZr1e3hqvPDyJzWhBEBXQWkjhni3y4SnpCstXGzmdBjaTuTGNeSBu2Q1m5o",
  "key2": "4P3anE8RuNYPPxH8NWQHnDPW8v8xiPPEy1eYALcp3RvLx6hJ885y268h1XK9H2arYe2qdwnwjUFQ7GX2GQrEzBww",
  "key3": "5Yok5h9y5cMKoJe1Arjum9qh4aZcfVbkraWmDnQubRUo1EEdsU7E5h9Yy16j1XkdG2853xupHV5wrdZ6WBiBXFqn",
  "key4": "ZAF2pENMehQNWvuNsCFEfdYzatbgyNhG7BLLhDbb3SwN6gFwwgV8i6paiRY7UnPrwfDkiAQNcUqFqfrYYmzEDwp",
  "key5": "5DPpDz71fmr639z8uvy3dfKyyQUtWyF7j7SpRkgsuZEd2V6z5yBpbgnHBz9MEYdGzHKEmppfMJojtdUxXcTXG2iZ",
  "key6": "645W12srvpxc1HxmpVVA4R4qZDyhkVLMDaVv5cQkUTczmq3p2DQchf8pWpyuBQ1p7mfjMJBBVSbxmf1JoJF7AwwM",
  "key7": "3vnmNFuYyk35qTw4eNACQjT5cP7DUb6mwakctfEnNnJ2Fst3aNGtAEVni7g1zNMbxofUHapMXkCLheT4Pd8AxfYZ",
  "key8": "2no4UC7mTy1E2DTNcmgawsZgDmwcZZUrvKydqH7iZtxP54E66p2cQtNBGTa7JWYD7YotP4wnD8LNHEQzEhDuN2jS",
  "key9": "2C8xYcKecYa87s9XnfAspPvBzE9miN5VPphzobiGugWXWFLoUnBJoAtKiuhJL2yQ7P5ZDaGrdas8zszk8LutQtd5",
  "key10": "5xJZZMU7Cpv95qaEo4vKwPTym9N6zDjK45iomWeEF91KHDdC61ppyWN222a4Vs5iZNqbS31vjhH5b7Qu8n54YbkL",
  "key11": "3CqRejxMnFKep4bsY9Yst8uuHrC1mFwhr3ibcTgdGSgvqVdSHCGubMYvp6jA3quaxVvhhkvLCDkvVArQUoGQ1yUD",
  "key12": "216w53UaZGR41rmEb9dnc84MM4DkS8SdyakV3SMeZ7xmGiUYwkVCE1PvQRVGcmPEqEM3gEj4LdkLHF6uP7YDZomL",
  "key13": "598gfpNivgYUVQcs1Eevt5zxZFcytiwza36Xwq48FQ4UG4CKrKekBaWuPTbZ2147R9kKjyU3kBe1peZHALknpGJe",
  "key14": "259tPwtZ9s5AXdEZogtpq2BJC9JCfexgFs3yubz25eP5eAQY36iYDweW11Knzbn4xsF7kCPP26tU2qvvH5Sgdf23",
  "key15": "2b9QGEsdf5C5axwDgqRpVwCXQ5kWthhVXjBum7JrMqZxwnnxwzxLMhcnLictAHf28eBjhBg22oo85WyFYSPy795h",
  "key16": "W1uaTjkJzeNacYB7fq2LafA5YRVs6g7jqrYgvghpgUts8VwTYwADeofc7DK2tS2e3isa3bMU74ciU69JmpyJsTS",
  "key17": "3faaea3zdmzpoAg2ZKttB9cuFAJ3X1xaKq1szp7YxjYmvdetbvTsFS6oD5zk8B8B2Qrqm9iw5HXiqPtugwZ7McYF",
  "key18": "XKzxWyBGa5kcjkZC42insYCRmtcDmvhnTxAWreV6yxKKCJMxr3eC2ZEY8MYV6VdmiYAXinK7VtHkZao5kjHYAug",
  "key19": "5bsRJuZJuXrXunS5xWMPaY4XrYqWyzMi5APPhoWRLQVVANKYBBdf4gC4aG4NpWPRq2gZM5pUjNvVmZcFFz14jr91",
  "key20": "4xscov6RziNbxUfGDztjHyH5XqMMoPUArjsz9z8RhLrnJVU75f8J2fQm6vgwNRTiCsCJCaQg92QWM7qvvYwFi5UJ",
  "key21": "7BdGhWErvBV1KCbSMGRB9bdAfV24eWxHQ1Wy5Gh27tKmCyATT6CQwAnjkPSvrpoDhhp69oeGErprRuqcFfqchfZ",
  "key22": "5X7RJijEst4ja4UZFdUFCbRRE1xxbVNFU7z8nQiMSWeCzF73uLudiupnSZvQAWgbjtuZH65CKmK7xB9ean6jbzb9",
  "key23": "4Lwtr8t9DiqRVUN7B7tC7juGKNAWCYYiwEQrPF9YhrvwMTbMQPdmfT9sXqcVsE7rmnTdsjTqAQM3c2EN4VA3kJ4",
  "key24": "67SEjNYFyWD9GdE7gDgQDoDym2p1MJruXSgtRPc7ZPLPfbaadPN56XSpw96SdbhY7y9Qcb7dB6gkwS7wzg7Wbpw",
  "key25": "QwN5mG55by74JHyGeGbp2JB75evfLcM3VVNAiBLjt6fAwzfB1HRiYBSDJrECtTB5fdxqrZB9KGZ2LhJtugBzXZp",
  "key26": "1kh1TTwVkCbcqfdpzvcqLeG1QAQ4xmBhfjzxfQYyxyCHLw5Zsg5LyTk4EzheKH9C2VDs4vk4onED1ATBYwjAiHT",
  "key27": "3xAXsQ1DqBfntBEaryPnmT6YjMhdfFDkWNi9PhBnDgzcvXgSY5eVieuesk43gfjvWajxjz4uA9yyAkemz16Lh5Ax",
  "key28": "Q4ksfZ82kkZNBFZZGHNo1xSKZ8USgCeMDNmuSt3GKFyzH5keWysdA9yU2FPrb1czUsUZNgedgh6pZ79CP83HMeH",
  "key29": "2qNGMYU4pkYnL9XoxZrmigJrkj1ir7aLcTBU4KxaFiziCNdDjc2LJdstaj6VWdfTZpM6AE627Wy61p1TPDZDQumy",
  "key30": "mUtSRU5mwMnUoffPoN8Az5kD9jqJ27zJJtpQ2jdV3FT4fhtjCmrKGU7XuLmFWd4iAqWA1DMH6vfXCZiBfMMeVRs",
  "key31": "QdvToC7AiSpvykH5PzoLwuwpuPexKKF4TvcrzWRb1BnTDEVSmvn8oyqjdNbVthmncLDCcQWG57boeAoibCR3Jsy",
  "key32": "bG5hKiU1T7dydxPKsMYff861vhNnMohYt9GcTB8kJtxNgxftqYdRG9mJ5KoTfEnjfz7EnWK68D1cKtPj3RSozak",
  "key33": "4raF2KvXEwHAY24r2WcjEdJTNm78y6SM3pP7hubDfAW76G5BLq4sSgF3gkcicxZ9veDSCi6YFcHezpiQN9nz8Eyz",
  "key34": "31w8nCDpeH1dFZqyGXpPPJpenJcY4TgdPSSmBzrdLpWNFsgLdzkLL9SzXwYzRqih2pRPatSCxFp4qTo1NDoZDriW",
  "key35": "Pf9eWsMTJn3msuaTqSWY7antxgwFhq54nCxRsjUMHZ4m7JSPQ8DgQoMEyWpNSXVtQGa7cew6QWTiL3bFfN7CQLq",
  "key36": "4aZL5jJEBGxocsbJS51zQWz61hT6kBB6FVckpy4yWkZ31dZaz8HKkpqKPgQ886Pdg8mueJeuz47KXLDr9eeZCser"
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
