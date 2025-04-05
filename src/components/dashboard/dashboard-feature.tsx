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
    "2DM2zEQqT8UTJxj6qBK4aD5eYVoJTpPmHDSaVaPgGyxktRdvNXPpH2aF511Ts2MVwe8c5xAkxrkHWeJjBnCrX4qJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JrjGJb26gpqpXdrjqU8jXXqcr1EgySfiFbKPYq79x2RctL7ZiF5ewDqGMfbar6NNGPHfZTSHCpM2J9e8javshrr",
  "key1": "4MewgiZY1C59PShHjm7zuL3pSQRfsyTpmnDueW5tYrSTKMvCPpk4TEP5kyPDmbPLAYLo74Rc2iSwsLCZGaWJG1bc",
  "key2": "G3eMQPHK5EFN5ZLBgX6fgtyWcvXG1pECNd3xt2Cgoebv6QvBRzzjhWa3uSa6LyjrYEzsPFGLT5u7PYqPgsaVWEK",
  "key3": "nB87YMU6MkFGevqKKsxdiJSktb9jwwsKzFBoxGC9YZaZipKcAEX2YqMrhGCYuq5U12nK8NXEZjmdqSi61MTc94j",
  "key4": "2Aah6PFdgc2GuxdANnbciBrsSEkc6HoHNGn9iXs9oQZhn1pvzuokuAWr13bQe5XBiXvzfQ6YwuLDA8PPTTzW1eQy",
  "key5": "3wR7EunZvYmvEGeoTkjPQqPRmKD1q5HL7qz4LwfiUtmUfkopq9s9ptucUMeKuYBmS8s35kfnhuWEdvRnXq2pBGjz",
  "key6": "2Hy3E62mggqFgEjwKkCCD3zyrH3BvXkHeBnaPwgTT9spVo6gUaiqLigMZGJcWMPpTUd561GwMQZNtaBmDoqRM6YJ",
  "key7": "NUWuh3NpmWdgbYbZrM9yv4F8x7W4W5ZYWSMDruAxXoNWuEFL6sRQq8Uawqn6ATHsXHimDyq3M1HcgzcvsWsYsco",
  "key8": "2xZeckkFiqZXgyxW1uFdeGa5mtNnFRm7gZf8LggdosvegtpWbwgASQupjmrcwg5C8idkiEHzjGvWnsZEW2pJci7Z",
  "key9": "2PNGjzDqXvr6T68uN72QQh8dggj5N7SeTr8cFnecSZ9sZDD51jbJwyUnbKbMWhQXEzhs5AedwuVwzSQxmDP8mW19",
  "key10": "4An3u2N2FMzoaeFLRXFjoTFxpEYQvMg8kicoXnCUxXRsPFfzjnPrX4b9UhQ48ts96Urxp2XeMtUuNhfZwjStnu3M",
  "key11": "3HmPBMRPKXejW51n18QgETWe7vrDDknVTVXJZmCA3muiZDNwfitie9WnDm3kXuidEJa529eG4GiHvyE163KyXJpo",
  "key12": "65NFx5m921eRsW15RHXS8bw5s1UMoVhs5z9mw7Zmi6iQYeh4WFb1UW4KcFUkHNe7LxRKtDs3m7j9SAPdrej3zihc",
  "key13": "27N4EqBDwhKNX2fB6PXS8HbtXJXu39zSRcHF63c5ZTXRddv4zpsRo7TJW3mdJ8fV3AyJi6EQnJqF4f1H5XgZAJ3i",
  "key14": "3VhvuD3fcbMvcfcg7DhEHfJtrwi4WW3DLQYqkD65VQJrS7JnM93bmsZ4YsqXgJb7qMrwPZhKh7DedN3oB9x5u97M",
  "key15": "3Rdxps5GoiSwWqWEmf7Wdb8QMsCDbgPdKkou4tWPLcSNkdsn9AwqD9766t6Jrb24tjuqjB2wZcxPu8jQHV3TUPSZ",
  "key16": "5XC1gBtLx4aBM4TiW4pNDLfLmuvUn6GZpnFbABfmK5WRyXemTY4TRe6YG5vqBh9rxcefQgxKB9dpv82kYMCL7bPY",
  "key17": "59zqWu2P2dLJwyjQy3vbZsGxzu3hUjs5cTVMUUndtuTixzHfS1Vtd382JiP4MNodXuyhAkR6bS8x8cfDQL7iLhkN",
  "key18": "2S6XdJuzNLMQ4KkZfmHfrSdSz8GkZLNQ1kHrSTuBJtDkT7ZDZytWSNJrC18wjVv6AX5AfYPnCks9rkDbjLu8AagB",
  "key19": "9BcPsSZ8LKKYqznKm4Sg8veNQoAizSg9uLDkNyr8MpKBnLonQ69v4LJ4iyCH2Z69hTRddYY4w9X2gB5x5odGCo4",
  "key20": "3hXqfAq1tnntHzYeKeRezAMwSVBn5muvYGPf68qVm56V93vsCmb1ZgCD3h6YGm283DXtXxb7YrPqu3q4RTgq9Ph4",
  "key21": "5HrQvUxK9cL3rARMNJbYzw1BZ8e5fmWLqYDjRoYwKKVQGg7LSWmarFF1tXBdfjrJjvZ1cMtPuo2he9k7EMH8SS8e",
  "key22": "kmhfbuUGXZxJk9rrvCfns9gxxGdUQqNgJstURQgxLokKnr8SfTz3RVNyPX6SqHCKyTYDxyuKvancqE4y8Tg5jHC",
  "key23": "3qb9sm7mUSSzzLCnXwcpJjBYb495bR4ENgux9Wp3efh7vbZ1wcWwHgTheMSF4NbC6aW7o7LomiXUAbEaA4m59SKb",
  "key24": "222J9QDx7HDdde5gFtNQkELYSXNmG9AQkiZpnQdEUFWspZcXooaFeRnT26aomoLZx3MG1thbUz3BRVobCaEkwJsz",
  "key25": "2Ny6kENyEmvegwugNHMsP5oPC1DnJ9qr74J484J7x37o9cUZ5DjbzSZw9sN6s3rvY5TCyvwdWjr6rpCxisvrVgkh",
  "key26": "KrTEXkQPodx7KwuxzqzcpzMpqYyc2DDLweyYohYCbW1nymvgFjyar996sgtFhzcy27kUQvPfqdEUyZzRMnokX5v",
  "key27": "MGbDwfSo5QUjbDTY3cHKSWgKNbGLnCgQJGXStXW65BH6QygR54NDrZuLPQ1wGBFZ8RMqaXred9p22omj3t94Bgj",
  "key28": "3tk3BX4tANJPyu4ohDszVtA8iFjnvy9Kw9gLGToZNxTAjJht2yj3YfPetopP6UMoGyjEsSVTiz1E17gFq1Sd9Uct",
  "key29": "63qVeF4fuLSH2BKNpvt8dCxyu6j3BQ9EhtrYvQG5As1kHshmJWrueCDcETME4Pe2AyMLWvh3msya87kxvzsJSARw",
  "key30": "4G6fGTTgaYQPYPHrouCbjzo298iHSbvEBpgt3pxT2fstAuPUVEkvSXn5ALESGtz8XkY9KbZaD61PSTQ4nsDi2Rxt",
  "key31": "2N1istFbMfFHL81nDeVb8xrhnBACqamNd9tqrMyzpvXRbXBkoMsk6XNsMiarXEPfDerPLrUTWL7Xx8Ac7pytkGqY",
  "key32": "2swBddqWHXV5uB92m5tWBUoKHZHr36McHN56VMvcsUwdnqifC2jB3UTFK4NoFuozVyQjYM2bcbhqq71Kehz8bDsA"
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
