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
    "4qLr8XJtjS6YBK7uyBNmyJRyYpGgjNVzVcrZ9FnFWnQb45rpuHZzxzbN6gunGG4szyfciVv8a3bZUBrRSF8eWJcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zy6Nii6k29T4hosvW5Gm475FZqTyKS9kaoeGSnS8HiZPdvES6GMVHQu4pipWDA3nXfQjwMFjwQ1VbfzmvKg2xku",
  "key1": "4ZbJrPzLmqW64ENg1jMjQBFLBALDMfaHL8nZzCqdBT1xPRnqLbB6TT4TpuUZd1Wk5YpFtXgmvMvazjtd2wxADC4v",
  "key2": "4fjazLFgmcye9KNCvXu8vbbgeo5qnSQMUfuyZ4iu9BatvUFdXuJ3wPwaAdk6VNqLCxWpb8nseEwpfegBxrMLrEnH",
  "key3": "2ZhtX9Gh7AnJxhCDDc29PhBg5yZad1cofvazH2WFvnKXWMcDSWT95vAZaCHPnfUcFkjstvZpbSc6b3s7CJCra2RG",
  "key4": "5GXkBignFhBrMoYv8gqTsDoesXzumjvGRTNsy2UwP4A7FzSEqZLFj2ktijJsubnU9mrNoYw8xP8CbqP7PDbf3qVu",
  "key5": "2aqKD9cQ9CWJMG5ft3zb5YLSHPnZ5Xo8CAay3EkYFW2D1d7EG5DF94R7cTySoMiqPhCbg1GT8HddponEXdmMdmyq",
  "key6": "2YxdvGjACv6njiReCVJFXbtfaiKVGwgD1diMn37SWmSLHXe55kgcB5vK8ikyDZ79pGv5AygAb3T9XP6dzMEQVEhA",
  "key7": "2evD1rLQULrmBA8qroebN8ZZbH34x5fDDeB41zZB8qcwB1r2d1dXbMz3avYR6WjvhcsDGvJpUzVphQbWARwNmPb3",
  "key8": "3HaqztbeMt8wTfweFF6T9mCvz5W1JP8wCw7ZyqpMDVFpwhytKYGFVDQRBtik3PLEBQt8uZkJFWjirmReWbvM4PM1",
  "key9": "57Ah8MTaHYha8ho3vjbHmu4fY8fWWuGLaSNtdyspKzKcjQQhFhwPJoAGaUPmj5aUehW4xC5iphHjiwKpxrtRgTVZ",
  "key10": "t6E5vaYjefz3sC4SV7dFJb6qbGwvYARYnuozCQxbkkybf18CAceRNzCZ3BmU28cR8wAqvFyR7QBZvTMYnJJfVxx",
  "key11": "2h8rd9rXo473bgyZv3KxTdW2K92znKExkq5vMJENBa5nFwXazLjnmGggw3tQR6x2gWcCYNNE4rjjuoksdmHEoeN4",
  "key12": "5naKu6qhF8Tu1wkGFBsVAyhpXZv3fnm5nCkFyJ1RF8nitodzQzQUwAUiyQuh9GazSN8uXTK2ZKBFQFtm4rfgNpqB",
  "key13": "4oRt7UiFyCw9rVtuUNCg9GQkKX5XyUwxF5heLnFztx14CCYB2QEUJ2g4A7T89MvJUd1rGaBshNETp8y7qbSL3aZY",
  "key14": "3SKTCvmtiF7NUxQHdCncsjV7je1RokDAz1oAcUmr9GnGGgia3W22EY4gRrh5rr9rCe35miJPfA3LwMw7FtRYBSVR",
  "key15": "5cnddz2GAwAHpAY1zZqosQjeyDgt1JqJJodMgzSnVrzoJUm5HZrcM9WuYKnQLTimv3i73h1GXMG3fBz8wifuFy3m",
  "key16": "25rw3qgTuM9MNvQRUnRx2VrEqkmP2JRo3Fhgdn8cgqXRoQAYofFdSu53FJgGds1pYj2EbbSEHrMSsvMy1rniqEWf",
  "key17": "MVow1LFrrrQDkMzCP4nezSkamFhZMW32vRP2GD7DrMJRrB4euxVEjGHmBuvvFYbhaVptVi33ma6XiDH776JSX8X",
  "key18": "5Msqr1PQRpdcEhr67JuyafqCqzrEGWTcCp7S9ryArTgJwFee2thPLgHZRTi9NBfoZHGsuX1U8hagjnbEsKYJ2azx",
  "key19": "5CSCyxgtajXcZWLdjgE5E4DKaso3hqHji8VHqUTJVfvNCZVvUEkETNqR6gtzhb8rHx1DGhwcp8eT34RhoiV78EQZ",
  "key20": "3TwTdRmXEb3FXYPGerCwmbSS8rdRbKjhdgdFqToxb7sTSfmpEbb5YPMsKxfK1dG3yeTSK9ufF6Yw31Y6GjWgLQ1L",
  "key21": "5CGF7FchFugmN3m6SJYJU8VsMUcbrdJixm4FcbHXZe5epBwkDXQLBWbvdF5YvzhskLDs9emcFW8SVUCpbZtojv17",
  "key22": "3g1stFPH9a6avo8RFYECANXfH6n338NW6HZyKzFSiSRPJaMjc927ii7zbhUyMsu7zQvYVaqvgY12dDxrNqgFAuXH",
  "key23": "3tfBSEgYDRhSdt1PGjdejdaPwXhZa9HvQiGxKuBa88ZZM1PMrATEzVbRfZy14upHGBH4ovxqX7waX8oTDHuK9jJ6",
  "key24": "24JcJqSF81VVYSGmvS4NArw25eMNfyx149vmig6sUZAZsb7w1wqjM7RaueEgYPtom2W18KrP5r9i9d6cgn8BLpPi",
  "key25": "3ZnxX5z4pik7W1yi3VMnw7wjc7BVdzbEup853XzvmA1RgvKHADo4Wqaz7KESAwGiooKEyWYsG54gkdTfikuUDUac",
  "key26": "5GKWc6u4wENuPjxaKqa3EvjYAm9hscsaLdN8WyUUJmH6VdCbhMV1ADiFsV3N82KymND5W183dUHiVZ6oYfnQSGMM",
  "key27": "4t2ttHLLdRZufP9WuFBfX2povugqgUkMaXvSjnGC9ExVpZBafYimQA3hmQm3LF2vWXdDUHbmwkLXLTrdkCB5suSq",
  "key28": "3qn1JCjWB4yuhWCNcEKU4Ebd9s9ZvnKrhPxSAjMwwCsDRUCd69buVHJwUP39CBoonD23ybTE48jZBPWNxdAT6bu6",
  "key29": "4NXHESxLrdyCHHomJBGJqaM9EHhKx8NpLhF1zASH3LEd6pT4AU1eFkwbYVMFJH4eCUFvweXJkUiN2FZRQqEJ6uiB",
  "key30": "HCb9xkrEs5C2yzRvZiQW5sot9FPdb6MzzUoZYsmqY2gv85HufzeP3CE1MezrzGGYzmMYYKxHMKpo36YVPNSBS7u",
  "key31": "5ommjwJox4Rdtp4QHQauTVdfuf5dyiSfuHqZYGWe2jTejCUVdtBP884qawACuQ1Xbkbvr7CNUai5pDifcEbme9V8",
  "key32": "3AzPTeHrfxAWHW6yHvYqpiNf9qnCNhPhRc5bG6gsPFwdsFvRnhPyYbFC6hRQGV3wofoccoFnb3gBFi2riWyUFHgh",
  "key33": "59EyRa9nwXcXsLGztrMgjxzxkWKHS48NygxHFqswSo7zbooUJVFFDHBrpcrrg1yGXDsP2WABssYvrMRv6N6zsNxo",
  "key34": "4ePfQHtKK1uNUKj6aGRA3KhvnNyQp3LnX2t9ecs6YckkbbqQXeXHEGUdUqB9N249QaXPKmi16bagNoN6vXYpWyRa",
  "key35": "2HpXTvvaGmfiyw2xMbPEn2UxkcHRL16hpD68NrDa29Lo8VYmw3qh84m94SnkCuQCW9bvZCQGFwAwFZwysaDJYnha",
  "key36": "38LNt9tLtbcjXSP1BMQeMY1xakTZKEXTdZGijj9mTfs6HEaHByXrCydbcr4dpN4K1K74QdLXkrD8GJDev6XZAkbK",
  "key37": "5J8k3xchvXzd3DmuyceQTy5BCmNXKDTaVUDJRTfYeK7LB7jhvTQG4txD3ancmFGHtz51MhRRuQZ9mRHqerpLBLMV",
  "key38": "3tSSfhcxsVn1AenFcBK6j8HfAaLDRrGjpND223J3o1tn4GafiKDXRifnTAdJvTvByGYjzh2Y6MKrZgVugsSRNgNQ",
  "key39": "32pGRxooxDEdsXEfcdhrCktvrLFP9MDxRqcF7Tg2T6VYfzpevRApSR4tgmtz8RgaV1eLuFEZKVsJmd67cU2usr8r",
  "key40": "5N7Nmtxh7kFHUhUg9QBJekk9xYEiMVWXCNGHyh9YjLQvFfeEsy9U2DpSVVRwiNyDhN5yMP7kn8Uh3ZLKowmxvJUq",
  "key41": "2TgSfaKrv5PcPpYsPoQJAPB1Nvr4wRKeexwb4hRnt73E39YvVfMm2LkghS4XM3mYuGHHCT28ypRubDCpEhAhZUJ7",
  "key42": "4ERJWGDNPYBVfDt3v2uMxG2V1Arzcx2uWyvZa5yuSsVvunStvBMTb79KxKyDwxuGSgeoTXhAtdamVSY8H1cj3dPU",
  "key43": "3Hvc4xPkgBaLLufYrVFYh2pdae5aGVNtHUzgYnfzbuonUARD9eowm7EBPfeDPubRzobNNGtkDw8P28V9w4THfch1",
  "key44": "3yb8UuzRPQSskzRfcz49gxw9Uv8eQ6fo3g6HPNHdZbZyBVR5QumT7WimVF7ngxC48VhDGJhc9stffvvVBBdkBVXv",
  "key45": "2muR4KV9dgCFQB8hHkmGFz5XWAecATcngrTow3m2Tdv3BVyYoncnFCzEax3BAk7L4iGsioxheMoXCM635qdXCsWP",
  "key46": "3gsdX3RyESYiz8Th69o16BvettbSwNgoTcFCUVov3mCvoJSCb8z9yXzxhG5DFpnJETPBC9Qqr9PzQm8HgmL85PFZ"
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
