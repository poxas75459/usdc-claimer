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
    "5cJdbhQ9GPyEKWJnccA9tftJbTZTQexeDAk6n2Skq6wqXZTy31QW7d8nPrjYRVxSV3b9XSkFSiaR1Jcrg3cmYXve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KLuHaPidrgwC71paRRrRQyPjYKWE1KaT21RDNUJGm7WSkrqMyBqorxUhv3tVGsf9w3wHSqFTzDpBvpJJQv8S4UF",
  "key1": "SepLguPPiL4VmPHFQGwYuUSJKc1ZXr6gsCpgw3GSP31sr9zWWxvBgUG93qdDxGHKLZMda1Jt4fjZYib7BtvhrDm",
  "key2": "4PQQAHHvidNGBMUHbGrprsRm77HoT9Cv4gX6fkDJodbWe2w3nrqddVn56PsweXDiBftLVgTF1A5MDNbvURufMmCz",
  "key3": "56ZW7pz1DCMZ8Kd2SvosF38jcdL7NGSd8TPCEENWc33cLWsPwMLo9gNDtr6Naaiyec9WyUCmegY8onSxU4Z71euz",
  "key4": "65VU6Vg4kYk24dTUZa6qVpFaCQ8xVD5TLeAekxF9G2GYBbShHSt8izH8WrRdbkBUuqS1FnaHYAgPjqqHYwJrju6i",
  "key5": "5PViVPxZz4Vo7y6Tnm7pz6efrUhyb7ujewDxLHqwzWEpP3kUSUWebMpgecT7uWA8w45xXiQcAoSr4VCZLcX1jmsi",
  "key6": "1h7as4G2xeLu72vbCqjRLfNN9anicyqABKsAoFRNbhkxpNDJfWhXdUeTCW6tS7NBsCYZU8Uuf9bnnpdSUaLk1zH",
  "key7": "5hgAoD4SbJzASayAUDJSwLqxWDpd7r1EXVfThBxBYKL6CP3mgUbqTvetZbjUkmUBVQKVAFFdHtXdBFHifYi7bbXy",
  "key8": "NzLWMtCNcEcAmsM1ZFVsQem4x8dx5SuaV8c54GQKuRoGUwo2q6zYgFP75399F7mrwAFcXaRJT9N3oriv9veWEed",
  "key9": "d3sLofC54v824btUdECbqKWWULSBZ8cWwTQuUSExAJphKfYii8aNSTeNtyM6UH6gwo8U7WsAAr5ki7GoGgx3sZh",
  "key10": "43M4TCnEem7SJanKVhz4v7TZ4LgNqX6jrbRfA12yWVghQtduA9wL4uBKFbVsBsrQ5HLu2CVgkrUp7tMP6pYRJnPU",
  "key11": "2DZkJoyhdUp7STA6SPnhAcwMdVVqMu9HL99s4sdYGnmyjeZnJnEi58gsx8At6qF6DHjFshK2fdY7wu2WkKTAFj2g",
  "key12": "42z4uoC5ZxF13n3VM29eHv5L2WPWueg4cdLfm4JikSYisPgYWAoGbZiAjBTzwwiGyyurtPD8eBp9RfUWQUr4VHHF",
  "key13": "4xoTJ7zNkVqwVrADjYDbJK3xDfuW28T49B1EwUa9RTL6twUhwxw7zJFuk8wNzDBg6Aen9VN1YhwYnNeMKNwjvt87",
  "key14": "z7k5EJNMUouEbQY1QGzHCqu39zMoLuogySYympny9XeimX4Xa4tMJXNH2FM14ywrE1RpDV65bvgw5NTQdCU5X2S",
  "key15": "2dpiagdPUk8xz26k8RWkWsUd7P7yEjvJJHGDgUqGU6AifogCrBYkWwiMYDouAJhN7SFKKWBqKdBiWuBnfhtkMWsd",
  "key16": "2UKuoWrNBiTEpVVmC4ipz52EZaAztfkYdKkYHUr7tEawKZqDBdx8Ggu2trGHTgCMhhv42DHfbX3CPuurPuMsHGm",
  "key17": "aJzrZsNDa4ENSR4tc4LNy238XKynVTPHnYHAseBACigCeLXPunLRRPJT4caq2u86JCS15pmYrnMWVVdBvitY1Rj",
  "key18": "23muPz9RYyEkE2jVhTB6NuMbTsqZGtVyjhEbUvERdjVRexTRxcyWJw5uZVWoZLJgoYjyMvEQLoeMqEhvdsguTjHL",
  "key19": "66TZp9PKcBQeZzckMWuyq6ocmjRbBd93va6AKpGNfWufPaG2PFwbHuRnuy4sDThGhTgQJK731BBrG1pX7QAKbz5h",
  "key20": "4nTzvUg6EDX6yzE18AZUsYRQmdS2riitatXEaS6efgjv5FKRb3BqtAkKBhsei1a6EKHCbgiaAtsRmjpzj43EKgWu",
  "key21": "2L5hab2bWQdLif48mh3gtCZNM3nTTJ6DVt8AtX96ovGqtiCJiVX2bA43gCk4iHu4bkbaa4hVmMasZ4BGz2G26xWa",
  "key22": "4f71Vro1yBmyuWkh1RLpxiwSPtSQ9m5sPuAfWGdnrPiLt2taeKXBmvLLC5KyD1JfuUvGxmHo5bqTcUDPE3g5cuEo",
  "key23": "4U3VnKyba1iovDF5yY1XJXmMpcid7VarVt8wSjahdKcfVWoTB9mQD7KU5BsD4CKdz6oCM1MH6JvQJfvJThRp6fvT",
  "key24": "4ngHzAFynACBU5ry5G3eMfwDfHbmENa51NiNQb4ibPqDC2E6zyN9Bow8nqpKRb1rQcEKyNJND8ci9JVYjpzhtko2",
  "key25": "6416tWBaYpjz6Np3apyZNVWdJ8Xh4sCdaWoGZuSDu8otBh3KhpiV3KU1iq24MsZjMaN5Tb6wfjvt4h2JgtSTKEQV",
  "key26": "4zHbyJqyfa6zEAdo7wg8uTHERLMLCdQncbBPhTb396j5g6uFELx46M7xMdx29Sw4kH6ZzSvs22DSuEcWA85ohhdj",
  "key27": "PT5WMPrKCQ7v4btE5C4JXDQWfVjnzzXwjtrWZPLJMwL2MKuuXjvUL5FypBXbBUFUbHW6bRJBKTj8nDNrqPE2itb",
  "key28": "5V1wWogPetcK7X78763su5qSeRgiYY3vqCJqYgs45BPkJq1KvdBZBWKJdp5CbNrwz8wkGDcHE2f5FBeFkUZp3Jdc",
  "key29": "wcxGUPxzGjmFduAeqmUsTqkXcPLZCGAgojTDQcq8SWt8JXWw8K1gCZcMbpfGT1aoct1PaAtTWGa2eBNpdYuxggM",
  "key30": "o3ZVxA7WMZxP7UcuyhTnC8a4YrzFPhRsLKsG3nwhqQ9QfUaKvAq7cHgw3Y9sChHbEFFHjVjmUF9KMimcnebp9wn",
  "key31": "2UCEHL9pLSANCQfyo99kwLEuEjwZ2ikpv1HF9qcNQFs4oZH3kPLQUwJKauxYHSG68Vf9yYbkxpfwopwg1PFnvR3o",
  "key32": "5cKt7Rqbeqzybdk9AECh4A8LqUUtB32io2M9YsfTpLGgBoiK7fDQn8EDkM2omDyQgq81VFj532nD8HpwQthgSqfe",
  "key33": "3Jko5feXA1ysCdp9TthTWA3248ofdVDSPoUtbagSe66oVnJPXNDYjXM7LZBai3Na3NRQNL3dbQCGfHoifYudSAJ1",
  "key34": "4whu53WiVHcRwkwSAQqSWvsh5q4zw7xU6jq8ZeG1XVuWgBfNQuuWWC2Gpo7bxS25Yb6N9fZBSXiTEigYvJkPnSHj",
  "key35": "ztMsDYhB7t1q61AXaBvAnSQqsUNYePunck3BvyA1sScwuwMNQTgh6FDahRHdaYNurQrosajVjN7pmMGipCUUfGF",
  "key36": "41zrry3e2URdQNo4fMmzqfcKiAqbmiMf5WSVvncWvyYmSufEfVskzH1SPMhiReZeGHgFELphdULZzc3ZD8u9ECu9"
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
