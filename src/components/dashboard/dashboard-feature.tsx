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
    "5LFcQ4LqwbPAFLAXQiBjF9Tm47rwkN7pp546a4xc686YpywxucXrKKEUob4eUkRMHQ6MbgxDgh8Fd5R3P3WULC5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uKF1m15iqmtEQ3QuWp1wtg9EurH1nZ5vBUhEY4BnjkJzPqzBToJcDahs9GdixNCbkxMkvrvUp68ngA8cNZqfKJm",
  "key1": "4K3G3GyQMci9GvYDBs9VvFGYc1u7DxbosYNobZKCiWEQmJQkZcZFH6YPUYMwnFQBZBuSJdAvKpQVYT3SvBESn8xr",
  "key2": "2mUmii9maBy4FoaKAFSfjif1FYg8zxQCZWuJtFcH5x7kZHJv9LYQY9qVWx9qy1ExrfUFPASM6jytHnrwe37fmK51",
  "key3": "5MrXH44qKsRMxBeHfLpFBxpvkKBPgCAtLnSJ9qjrnPWWze4hjasri9rEN1mrPSZrJuNG3wyQqVNTbKPo8DgktdD6",
  "key4": "4dUEKpoK5VfkdBWVf6iBkB9U1gYZ6d3ynu3VrpuUHT8u3hvrKEYk4Jc6zgafeq7PKvtb1xhuDFVC2eh6fhWvkL5w",
  "key5": "2TXBX2FJhW6EoLJzQYCLN91uxQC4UrzXToG7sfJ6PU3qbNLQrtJ8cfCY8ZsTikVjdpJgoaAJaVyGzovR1bAgiiim",
  "key6": "4titGDVT5RtdUu4BJR2LLd7Wc6Fh4es7XdDU9PtXQLcENfssCy2EQqdxtcE4eh7gvuP2jGV5HxsEVHHFBT8YHMwm",
  "key7": "3VTrXkkBUZEkHNTz91sTcHcSREiDWCmYgnBd5iDPTwjwv9CTqyxn2XWZ2wXdJX35GCApx3yMEMF2yz9FsMCVvWR2",
  "key8": "2VKuez4dBbqpdvBhfiz8UPB2ywWj8drNDACV7NZYcKpd1JqYQuoNZrEPCb8mpNctWRUCikf8BVubipSgA8UhJyfV",
  "key9": "2qQLiQcaABbzs8pp4587TAfLjQp69SaXVxqpT2qmEFDuzZAzBxbYTpbQGSbgvw3jjkii458xLn5JqXz1FQ3qz1AU",
  "key10": "sKGNpXaRqZh7AHcVsB6EkyW2j9bQx3xd38iCF46TvfNmqufjBvcrDPyZ3FRAWUNbc8CMhMsdt25NAqW44pkmLV7",
  "key11": "3JrVzfiMeGEANnkU2frbEBfeVzxp7Zo8HPJYbeBL4Dviz5LyFbmYV2beZcrrFpi6rR7Y2rf9ZHKhzHbQVhmrPEdw",
  "key12": "5RFrs6dhQGCExdDTwMrR8UYcSiHNVZTFxVLJgnLmKQAxqcnKrhSd4kEKBN6v7wZBPKQgzXSEjLZugEbGkDMai5fX",
  "key13": "4nbbf22Ye69xXFzRrMMvDV8rsjVULnrjkVdoLxhG1Nchy3Zw2KFi8qLySpiuMNH8PqhJDHwLSVqaaCSr2D39BN6w",
  "key14": "23Nr3PP7s8F64LXGApgDs1aHPoVr1BAPvDAzpUmtkdFf6cYqJrvSZvjtxsw5jrtytbGc4kmWgpfB4kF1R774rTK2",
  "key15": "5cviyGaEHDw82d4kaGhG4nyamNpLwch1pPaxYdyUsdo35qjy5q9ugXmr2pgM2qicueGn6mzjdHfGCxF4WiEBx6v9",
  "key16": "5M4yKiYZnzjD8iDyQU58DEaazK3ozyPiN4zExSCVNjrVhzWbY7yyVEYTitk9ofEG9MLZVVStwWUsmHXEtx5ctsfg",
  "key17": "2FSnmJc2T1WqciDZAYLbrZbTDtP13gRkyAjMVmY1s8GASxw4e58ux8w2nspqBCmFX7gr1DXJVwiky3TFMEwbpApA",
  "key18": "ZgUkbh45hSfDCiLp1kuxaCXznrFqgZdAcvkdP5TSmdRPc6B5WKL66oKFFJkeSzgat4XAA5eJG9DKqd12Xw7t8zL",
  "key19": "3stWBSUrqrTc2DdHbXcY2vhDnjRS2gx8x14b1g7nonQnbfvDQu8Kpa9QhNC11zrW9cXoLpjeCB28HdtWggBRqH3",
  "key20": "44VRxsmXZB1FbjAkL4zE9kFEdGmi4wV8g5FcYskLBwu8ybVJ9oskwgLR2v3bix55Xf6GB8nCY4WwV82ysYBroi7b",
  "key21": "5hDXHCmjXXXYEfghavR7iPeMzAfnNx5T31N9kNaGampfnptG7EGqbawkZjYEFERnq1s5PH6kE39MCJmwapx9oTXH",
  "key22": "4XPwcubUzhE4DBar6tFnHMk1yMhGegv44j6UrQLMkHV2PFoV5NHUXUavWNeRoLfucEgLGmmFLcAj6jerzHHidfYg",
  "key23": "4Zpu9CsppVzSCsPELSEzkBB5SGvVEU95DExrGNxgHZHxShAvG1NiHhaBtKmvRS8r3ig8fUo2sMY4EjuHC8uXuLnM",
  "key24": "2kd8oegkVeenAqui6yuQsyiaeD675Tqcxa5ktNZLTTmAEwCqG1VshpjxKGnZcFrE6wdzXWcyMULzvHMRsemHAPSk",
  "key25": "5g6hqPnVLfRdoSgcMMqFGueXu9YQo1H2ydfGDjhqPoJPjQxYZVTquERxBVvGii89pqeriNfSy7km5UpMTzqLyQSz",
  "key26": "zwqJwzBkm7fquMWhseXr6aVv63s2M4LQy3zPzWg76QBrp3QZkpAM92WVHUwreZiV9tCyESBvbZ7XS9eig9v9wZF",
  "key27": "4ckWWVKFhnqR9T3xsvP4sTNi768SB8jvrRM5HuZFT4NWRJS5VBXJg33UQKJcwThBbqpH6VfWfD4B8ct3XxBgiKqV",
  "key28": "5zENMyamrMVZz9PrTBGY6b59q21i5thdXZScHbFQiEtdCxXov3CaVWC9B1LJdTy3YLWQkwESE4h169Awm4ZjE824",
  "key29": "47iLwj6AmseAq46pD8xHqPi4fGSfvGC6nwibEJxTf6kdAVeXtZR7VWaaoJUsTiAeoPp96QjkW9V8YZabfqQeQYir",
  "key30": "eEyq1F9hXD7ukW6BnnGF9BNP4q92FJXRAYbU4jGwctBJkTVdBMkh9BzD11qfQaDWM7rKe5PM5LJuyyAoKJ667uj",
  "key31": "4ExGQYrEFPQvPsnSCtdwJjibtSzaSgX9dJd9fdc883rqoTHydmHS3NWyrwgSytBAB4nBhpbnhVeDSsVE583nhwvN",
  "key32": "65FqrGcSfeny57qh8humLECT2PpTL5frNdrgt9DcEkpWeSdaSdciREaRBygHzsED8kRj6oN4dRkVRN4pHrDuga5H",
  "key33": "6CTwZpByvSQMKTMo5u1UVehLABjThGwcgXukZYxNtqGPyfwMJt3UdbzcL75ityAbnZ3gSgzPfUTTgwiKCv6CVJP",
  "key34": "4uCHQxVhqs7jiBe5NWbYTYQMi1ftZgQPPuK5kDxvMLchLjDiZrdHL8DeFLWUXWsYwLLRvVx4npPn3N3A4Md36fpq",
  "key35": "2MymMZkmrx6PK5dNKCkodRUCecFdpHdti4zteCVApvQ9sAk26SPp8XsmstCRbb6pHZoC5QYwbqSgmLZn7yVovHbZ",
  "key36": "5H3nKZWWhmZpF7id5i8MWrkji76iAhcJk5cBSGuVDVn9cWxdweMq72DxCKdV7ZfwWd4w37BP1kPe6WytKYQFAwHv",
  "key37": "EhGs2h4p2z7pwwp9UfScpvd8qqntyxwG7QZGJmx5jZc8JFJFRbqyrfr5nvvERoTTFpNReVDQ2sr9YbM1HMxaRb3",
  "key38": "5S5tUtTWoNpeYX9wRzzuAhutjpmejG5Ld7kja9zw9hjU7sJNk4maVN1z1u19DDXQ6gL73jma97rb6HPxkk5rg5do",
  "key39": "4dquPzpsM7dGHkFag82HNisy29JReGQKZeUgMkwGPs32vSzp3FTVowDq9bvHXT1HJuqyuoHusSmPL3PJaAyB2NJD",
  "key40": "36LDTvavoXZvbM54PWKttKbXfQ1Pm12j2tNQeYft9AjuVUYSJHUBoCEaSL4FwqsmttGTzHaU1dWNCw5swYqNJRAw",
  "key41": "s4i9q1tBDjxEt7PqdjeiKNY59RQUFWZUM56VvJyzV4MDfa6tfdEi4Ciww1P3rZRd8suStYGfhosmZVRxTH4hmVo",
  "key42": "3naAH4gz5ExPzdyuRC29iHCwrY7tH1cGLJS495DHzFVUw1CEtyCQEduvHirW2ABBuMNJA9c4oZ6oceGwkjS6rUG",
  "key43": "5S5qtUZYL6suYkSiMimK3xvwztusZLZXz3vxk9sMNGYtkKsMMRnEwdS5MuGCZLZAnqHSaBi4nWuoZvXgvcaQV9ro",
  "key44": "Qz4EJtLZwTEgV1eK1u8ttQk17zH4j3wMRQpWWDH72Ppn9Zkw2tqoME2dcsGS5AzXar4itkW6hd6fxouAVGaWD5S",
  "key45": "2UhwxNCF12oikSQ6r2AziZFnMkatYs6vLSd4waZaYaj2P2FziYEkvuKiXZk83LFzKaCvepwXNSj86yahjgMiAGgi"
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
