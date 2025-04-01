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
    "3g64HVhDDUbLHeMvTzV1RweQWUjWVKLc9X3SL2HgdeMyAttRHZv41b3VeMGb9HPuRyU8rQ6qKwyUkTHSoSFy8ewG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k8Xq91RRfUAtjoGMuQsggMvJNeho5Bu5xqAqNFjgt7DrbWAv9BLcPEcWWPLWwewYRRsSnwHmLuXXvF9RwfEE2dA",
  "key1": "39zZTGGPkY2j9hNuF9tXLa2mhgh23jCwoXFPYwPoaZEZ4efQRXBJhWGuThUA9jNcM2AWEiSonYDhbEkPRJcpGj3L",
  "key2": "3iVmZbX3KpmFiqHhctJdRvgkP3ijMZAczbxdUvSyWACrSobGuiudKTBKbR7tjETswm8N8Bxdbjho6gyCLNCYULMV",
  "key3": "32v72Lwi4Zk2BhavmK8eBHXoVSc48gQizzAQoop42ikeDKq3zeWGBm535abkZPKUfzH9vkpAWnUCpVEPsgMsRNDT",
  "key4": "2DqBvj3Y3tvb2N4VGUfdGhUoGoRaVqDqNPNjDMhkpHx9hhtRMcuXFAaJDPBmdxLJ4JZ6LNZajxLZSJZqC6NAHQts",
  "key5": "3Br8HQyftW9CU7uG41ZHgpkz1HDpTS4J92jeWSiuYtgAmrF3cL3v5fkEqSrybLFaKf7XfGup1qxcq2sdRQPr7LxY",
  "key6": "24t4qzZvQ6Cf81TDQzuhzEYKhFN2ZUZSumzAs3xYDJBWsKLLNonpqpqUY2ZiaU2WVBXgxYG5gkdXiF9SgZervoxC",
  "key7": "5qdKPDUaF2gGGUWpGQgUXRky775akBKBmLWxZo4Lenpe5He77VM4pjWVDAZEfB4wYgyQcVjyLgEeHC11kM14LVfC",
  "key8": "2KHjAAFq6383wCd6YQFoq5JbWmazxfh9JPLfUjkvNyX9nbUZynxgyJL9viS7KjHTTjrfzQWGQXGBbjhtXutQ2o1G",
  "key9": "3HmPGnAfEha2gBcTXWPpWsq4hKkTvsS3jokJ7qgzUnPKWFShpR56c2DCiESoxemzMeng5yAmkHMBcUYhX2bUQdUW",
  "key10": "2R6jimP6jgFTWYzvhpJoDtxPA2Ju8rD9nUzuZAVD8UiCR3mzE4YEgUngbYwTx5tN3iiL8FPaBkRiM4yiky9fZAFv",
  "key11": "1FsG24nKEXRaUzggU5VR4z7ABaVXYyhEDYGcHFoqThkEWEpJ3iwo4x4ReskFx5UZuaFPhvZhFoCpcmTUsgDpLy8",
  "key12": "34bMjrSsKGhdtNA2AZ9Qg63d97Nxhthh3TDiAkkroamc1Uiv3T9U2Xo9rNZpwez1oabofa2136mPLBAuE7gQpGUP",
  "key13": "5G4Cb47xYuMw7ueUn1UGwcgTUwMk7Y8ZLSC3wknKQuGHMU6jWozU4uUXofZVPBpqs8hcfgm6VVJEwdYVzpJV4kYD",
  "key14": "2RZRnB6gMxNUKqLLsSRfAUPTcmbGdCEVyitEfqZiMNZQ3danwHY9hLiqZSo1WQ6VocHbbL8xYchASEfodtAyvSVk",
  "key15": "3hhUN6kKrBjZcAgZ517jyGKshPqHNj4Nmd9by2WXyoGQpE5gXtpv82tPg89MHBELQ4ZGvFNtAnc3Xo3rsbhYmMtv",
  "key16": "5WZtiwXGzYdVUrPGqY4rSeccNCgu7mbKDPzdn9zWoAmyiPMRGHhTkRepoQTqq9hZLMxPRyovEQTCQJgMURwY1GHB",
  "key17": "42ZLKRefzZ888RpkHp8NPtC4cC6gD9bqQvpafE6QdaS9nRGaU4KCpzTCzanxUtfPpoicNnAV6axS1FypiB2BFZTg",
  "key18": "48uRfX8JCWch8DS2Bu1RCUhuy33SqF6wu7dtN8eup3qENPfqQta3izKAkWPdQtsresdSKtMv2VUDHE6YvzvFWB9m",
  "key19": "2fqmwfAQyjxC9NzjNhjyXea9ufquEPKM7yo6xneCiPDRjeM9LZsbyf4QrW3QXps7GEGBaGb45VhL6XLJPu9w2GLQ",
  "key20": "4xp9tZShjgBDWjzubyLCEUHiQwbcdXJQYxhKDaoyRBEXUC8GJYikFLgsf9aQVTSwZ9E1zr71a4LbCd3dwdETdgSE",
  "key21": "2dVGUb8PWHJvPtasRDbhmCVXyuQZVZXfSbUz3abNy8ZF5qu1k5vCa7VarLzzkrAm5ksgYeNhUcrDDUjWc8h2so5i",
  "key22": "5xQSFz4gHV4p5q1RbrCEDz3TCB3N2uEiuvF6ieLr6rs8sYzLpbwCJArsqrwkujPYVjru4UaNM3ebcbqVoq7kmu8T",
  "key23": "3k3GBCR62C35zQQaxoiAys6ghTy6Y5Bo66qbiegYpygCXfNdRoxLtwEiigbhQUGGtYj2jJSiSwFuA43PKRWLgL3u",
  "key24": "4VTPHELjwFfGaUpc9rfDh3SPR51mwHrFe8KrmYzJRWhmKh6JG3LFcM6W3EgC5k8mrWrQkUJH46K6CpHoJsWtgVeC",
  "key25": "3R8xTAjG1fp6o9VGrugFHZhs5DAL2S5PJEC1U4bwjQb4jvF2RF961477Pohs6Qs1t9d8wHUgRseJGuijaSEUeMNV",
  "key26": "5mgH1o3bqcRqWgMtsBmP5Jx9ybhbNQmM2rZEw8BUHbDq5duTvbfakGUdbgYdgFU4jFuGJmiy136vGordfNZtQxNf",
  "key27": "hKMcPzdZXySRkMHCK25gNQFQjL3wF6Q2CM7Pz2DnZUuHvaPxagtByRhsGSS6XLAmD5LmpEBThYp4A3J7mDLM43a",
  "key28": "57fS2imLEX2MpGNtXCJfLcUCCuYSot4iuA5GYrhrRwrzweRcrJ6euiZQUwigftLmVxMPHi9vMkwQoRG6dvz2gR9e",
  "key29": "2rgR5pGUEjNVzNUC1GHFWYVGs4u73ESuwjZGj2FPhqCFvKtKroAQ6ZPfK28cPsdprcehiYHMi4WXmNfB6FcXwwHX",
  "key30": "4ntrdPxb2WovR6EN9MFmvCU7dDHJ2MpFTWM1ScEacMaGaQ3reTaFkABHzgvtu6FdLz5zwPJ2iFRaaqfG5bzo66m7"
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
