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
    "5kymMxxp4xj5XbySjP7BFaHguxZNFWaYZqnMjz1XM2Kc8trAFyyKZntRyHHCfPLLPa3uEs9UM5VSmuq48dD2PsAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EsVLr9HaAxEh736q9iPomePYWY5pRQqUyJcrm6WttaJMKkBvqZAgVENyhuFQPWtAjabtX1E86W5A1mEuLgRGiw9",
  "key1": "3wqLrXhQLTJ9smk3CA263ywGeWUCo6Q51X72XLtLGevctQQMQA6MBqyVJ3impJc8xnTtao74u8tVmTy4m1DwfYNr",
  "key2": "XD9STZ8wMgF1cdjRttP8oFd8DmeBEdjrB7MherQXD1fXByaG6qdnAxacSQKrwdaqTTZWBWdfKvif8JySazJbsv4",
  "key3": "3LA9HNxD9iedekWihHu6LomkTGaRUbAb7TmB8Cp5yb8zjM36H6FD5FFQaZntD1EDSuqGBurzqJUSN24bouXFxJmv",
  "key4": "8Ex6SXNNSdVmvmtGJYux5D634pf1AD2S9KXFPTKbVSHF14vrSri1GpNfEPdcTCWwfmfXNWNAk943Njbpq72A9Xm",
  "key5": "583hPSQxHUT3a3fHYxvGSFfrHNfBSVBMcVh5HhEyW3tKCCbVYHeNwp1FTdYs9gjvR5GVm6HBepQWpwtz3pYpD66z",
  "key6": "2dDMJCFbU6ZVUj6DVpizL2C4VGt4ohDV9xDZ7xkPbNjR3uuJJAVVXsxy2es3se8KZJMxFLo3QDqp9Qn9gixzESr7",
  "key7": "9HjUtmP8LmW9oZSLnmYQEb4aKVwJngyz2yR6WtATqzMy8JLh9ETBogkH3geL4a4wWeQv51ycAS5JwXBsZCBDTyY",
  "key8": "2N8fhH6zdBTU4s8NaM1AaH9nfcHEn6t1mcnrmXJoSxarbKBCVEWZhA9RR15c8XdnRGpzbgDUrbQvFLq1q5xjEG7D",
  "key9": "5rpdJhp8UdzB8gMjMaf5USmz4UTQtvm6SjwzisMKkeUvmW7fFyPyyZHn7acAKSU2MAE283K2QX7Hnd43n5NXWxzT",
  "key10": "4fCtN41Xcj7QNqnPUqpUaAU9bau1LSVfYgrUazqjwpzXY68ktMuPCJbrqzDpj1deTtc1op8uTKEvMoiU9ceKo53H",
  "key11": "3q57V39Ws3r7u7Spi4KqR17cS9Zyqe4gcTBeXm6GmUJLHqxC9B5vZokEkBe4ppKNEPZoszRtVPEvJbofieyue8eS",
  "key12": "25nFkQAhjTkwS11ar7q4BV2xgzRXEnvYHkdaYmgjaFaKcScpCeQy7wnxg1FoqoL2vnwiK8ofpnCC41CWmfxFt1Ap",
  "key13": "8zVCfbCVywo6iy6EtYoMBK3fknWzV6ydEYAr9EmgWPP2co5TMAPwq14Fumc4iuL5nsfbEDbVBMfZv87N6okgqQy",
  "key14": "4U99PUZ3CihuzrjMmzKfC83g9fJScahEzCZpaXg9vedPwcAMpAVjh7FPmzbdpnkuy8AWFcgDxitiMHrgykHK1cx1",
  "key15": "3XaKhPRrsKEiad5dTTcjxmVgs93PUhi7DKnAYTwKKwYtUucKfM7U56Fabrr6R4XSRwrdowvJmRvJQKbGx4fDeoBL",
  "key16": "58FZRmdEhuccLhF89C18AbmFoREEhE7oY52c2pwneTKGNy17H2QQMFPXRxAyZrF4vw1iVmoYuwjp5CzGwDdSKhxa",
  "key17": "3uWMcuAVX3cARxNLUucwXwwt6iSFFj4wYguk1YECXmVd757WsZLqffN4fUgpGk9491HM5Suk4BNx3rYTUcxkiFid",
  "key18": "5xsg4yKj2ucwXtmp5yeQdexajFPDa4gYw6DqvPZxvs8F7HLgEBsWeHBPCAFq32HUV9f5jUEMnXJsP1dpVcFG7nk",
  "key19": "niytA5uQt6uD4hEmKXQ2Q9nMkQVCvXvSGYhA3Fni7wJWJQ5k8WfDqBNtCWrRK6huV7YxNWiDhNjFZZvybhc2uPk",
  "key20": "gta3AGGARHHMBGxHjZyp6HfjJmAWUTJYityPPysGEFvx5HQaeAFaT4NtkzNEaHPKF4YeMgBx7prYXNsNY98RWgf",
  "key21": "4addcvhM5KqjsyPPttkYFJSdqLwG3dueRPDM3cRoFu7LJWmsdA6DWTfZYsTQMuDCMHHKWvDoJHujXwVT8SWVL67b",
  "key22": "33WthW394mPDrvNAGSQBVQUgoRymBabTTdn1JpzwxNC2pygZzrRXQbD8q9koJXXvrWYTEzXdrR7zgieJ1qrKS9Vn",
  "key23": "oqCUf97rBVH1zPpBJ1gn912kx4QB2vfCXB6Wpx9ZdAobSwBWBFJsSN2YQ3m3E4PhYWAhBhcDLFm1mhkYUmQtJGD",
  "key24": "A3nLrEZ6Eu5q9iwSzLJYBwvADoMh5uXmAm2qC51RYcsz9urKmQCrPEs88NWD6FfAKydFrWzfk83WPsDvYfQ3WRQ",
  "key25": "4ow7Vmv8MaHyWaM2bBNirNMD1mtPb7ViW8geQBZv95YMaYVybZ2wGzL1dFSutWa4nSnL6VGAqawZ82z2YKqs7Nqy",
  "key26": "2K7cKsw7rURac92AiccDE4BTmDSh1YXggENkcEwn6GKosLW8Ad79VYiFcY5pZYoyekEteNGQLeMGnRZzoP8HPGzK",
  "key27": "3WpquXu5EPhfTiT7GE2aoEMFo69Ztbk5UPhY3wRGZg3t4YaiJtnxPK6H1L17LLxfVGM6NJzSLByH5b366AvwgbXy",
  "key28": "4sJPEkiDXUWRjGseLHhPBGMm4uKNG1HnykDjyLp1MJYojRuVWaznhuKwQp3VjRwc3NNaHCjDoGjeDkdSdpQhjAwZ",
  "key29": "3g5bz8jWcEYLr9KazqFWSiAcpuBmrJ2iNdCksuAahEUT3c8wxpXLEc2yv35RgNVjStnX47vh7HuTm5UrGXADG4xW",
  "key30": "2iRCDhqadumBwBSJsr7tNcebEDfstQG7KxyxpbfH8Bqgvupsbn7JRbgfLdpRCE24snKJm4UbK7bwPrrhPC8JnjmL",
  "key31": "62FZvkbM5L7FdUeabL9MY2ic5hp7HWXBdKEhL6uZHPGytkveNe8QAqdKWJnsKfUNtBdRCDZS5yQJ6RRyTq39LJFh",
  "key32": "3rLxNW1HbwxoobEjuaaUJLytn6e6MCvGT4pfwck68MaRbSnwXMxfxYivNMpJKVmdQCxNNRjLGutgZoXvfWHGkxbj",
  "key33": "2XjNuSoJGE7CdEBHFYW26tU49uRoJJ2y21TjcjniFiRvch3YyDQZkNqJFWBNfoDE78ru8Ai93mBxKigqH6QVkyPL",
  "key34": "5tFMwXL1S5FMmLeMsW4McMZPnD8gPE4KnJhK4y2AKwvXFXhhNTPVAU1WFUGm7qZp5tjqk7Bi6S2UuWmEJJabe3vh",
  "key35": "2v8q5M8STwhWb6HLtzu95LM65R9q9gV8hwxFYfSfu4F3jaGXHkis4aU7T8wcimLWK1NZR9dRyTy4rz3UgJnfpBgy",
  "key36": "nUXZnMmTM9TPhFyYTVGLEkDa1PMtnsKqbJB4AEChRCKbs35dpXgmBWD5bdDpkM2xhJnDMwCGAq9PvN2m8Pq6gen"
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
