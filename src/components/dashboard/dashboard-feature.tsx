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
    "2tzcnJCxQtAhmBXpzZ8yCmWoYPaxe8PefmqMY9mGyTiGhHFtGTVYburDEdBRWxGLmRbYLQTe9yFyKXWrnwUjVPDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53conCNidjjLiNrAjpYPfMcxoCuoj4GUZTfU2DqNFky2szWfkZRWVMPPE76y1GCqBCR5TuGt5CajBBfhjNvbr9Xr",
  "key1": "3fkSGswvYAdZ52YN718azFXC8KybaFh4m3N1vGQ4bYjpB72vCaqmYasPD56z5JhWpuXTJ7pc2GyQh1obpAuXhGP2",
  "key2": "2hehSMt3Sp7GsWQ2huZxT5upYN2BMNM3fL5FSTZMhvvbxEpP4K1P2JkCXTe64Kb1EzwS9rbXYu8uPHSDv6YQ8faz",
  "key3": "c4DPs9MwYBQWedmGaCsJ99GTYQH7cS4tPodC6YVE29s7kQwoSo6vUcVYkTa4nhQc31tEMPf48V1JNCHb9TGp7Jq",
  "key4": "3aWkTVspqEwVvdefZLzTSGyHVrRs5RhYpENSAgUdhg4vNphptZaw84cEeRcsJ9w3tVCRVZAdn5fK264uWrrUp8HM",
  "key5": "AVGcMLrpm1BgVMdeYnkDbcZuQahjtE1WfSpTMiSodhNbj35227WdwkYWf9nniNTHhKseYrdVJLggam7vZb9kgXf",
  "key6": "42Z6Mp8FQFg5sbQJNJ4uA1e245VwmavVVaQabrWLmi4uT91N5LjoFEgNbx9KtA2dmtKQdtHtwHLz7WPpvZByNNd3",
  "key7": "CTH1yDSt3945spZvaiGfiduP3waGs7PzFJ2Qf871HxpBUKDHpRaFoYMKmowuUVCCd78MZv9RnfDsQ1bRrv4hDbY",
  "key8": "4aNH9cGKbhnPspBjzULA82NovrXLJQeJJJhGxmP5iG8CYCqEzVzfpR5fFmPNuDD4yjknZthXGKDsj2ksaHj1zSRN",
  "key9": "23NFATCLXTYeU3AgJ54A3gxztsXHdptryntUrx9RXY1z5AYbU5XHUMcTKy2DZg4fxzV2ehucMRZCFDFqL4SybFwL",
  "key10": "4taWipaGpGcRYALaDieQVEQtXazEFx5SL3mWDCjESEteYNSE66CnV9qeQbr1PAa1bAcQJgMFUsUwyA2YDESWtuek",
  "key11": "2BEoL4TYajxwWoxykZLE4cfckVxevfANxP46igkXqunGffmARB6drdkA9rbyQbR7PMvYFwTdcqfxXu6z86Y8vfDW",
  "key12": "4626gNPDcQZebi4TznPvUiSCUn4XHjqFofmrdbzZceyNGBCbH5qBJqq8xUC1b2D3c9D5VSQZhjJzsrYPnZyiCPfQ",
  "key13": "3KpkoVb93qLJzPvQo4XgfWzibz6t6vmr6krvTzLob6kPCEZZvXqCEh1r1rHaZd3VwKGMHwRynNcJ5kd4CBce2xag",
  "key14": "5fUzG6FFP5StspKoaEhx1L6eKBMfR9fiZTTt5xZ448uTaUAR8zWSiC3YMKNVBzDGPbAfUCgRfvoAqaXC64odSas3",
  "key15": "B7k7cAnRmkSQo3uLdeV81rZZEcu16wrnhzcRfMYbbvZGmWSx8vimWpC42xkDjHQjKazxktRVtT5Lj1xzrkRjzze",
  "key16": "4s4unjkYq3N9ijiQtaXqUj4xSXiYccNP7dbctqDM3z2jH89ndz4XDAvqRDMfX1JSEwbcb89WKj3XPQqQbqCHYuVL",
  "key17": "3WBnYcE6TDMzXA6Qiyzy7pcNHckTNPSRH7YHC9nhzRKCwaDVnLQsWcKNoJSP4anMptkYbapygBakmba8NnwcZDJM",
  "key18": "3qqd8V4GRj2AfJfcM7S1CT7HUR2voyVayeGa8S9ssdMT4EdhWk5aCkuQJyiTc969zBiw5icu2NxPWFxjnhz8Q33A",
  "key19": "FzZGo7yNPeSM8CdX6Bs6zmpkAUTLqTTBLEXt4wJp8E9aS7hCDQ5FKBvXodtpUCszptzbzQAFVNi6HyvV43suqYv",
  "key20": "4WJq4zzmSVPsEVhsru4xKGVznjzQJ92pL9C6t1NthkwNxuxmU8Y2TdpwAUhkRSwiG4Nky7ZhuMQ3W4CfSktDkZDQ",
  "key21": "5rrU3Co4c5Eb5CgVKcxU4K2oicsVBBw4A2YhwwJu9buLkPkLHu1vHyDAQmoumP6i83Ki5EzJr5urGPAg2WJirkXq",
  "key22": "3AnSUNV79R6dwsoEnNLZW7V6bRX2BFk6f3ytWoKbCD6HbHJTr6L3F1749Ygf3wWpXTe2ecnVfMPSAzECx8gfwyUg",
  "key23": "ztMv6Jf4dESZJ9gzvbUA6tmvgjs8jPHYh9zWuNaKcB27LAMVtC8jLs5pJiANxMGYXikxnewn448xMcWFEqzvKks",
  "key24": "1JQ3oRdygGs1nHePnCbnNp4sokxgbk6niemy3Wr9xz4L39QVhMZ9xDyKJowg8ZwqgmiGQoccVkPAQEu4CZYzhux",
  "key25": "3AxLwb4ntL9GHSnitPaCMc53USwhKhDLpmaTZHjtkCM53npdBz7Uv6C9tNhFMhiniBCpSgvr3rzUPeRXRDWhSmUa",
  "key26": "4h25AgUMDmUcNsneu9a5ZqmPNRKVzVyjdeJ2TTKC6FSZR45okhPjYwJRp5ByUW4RK2eSv3bUoiXtCRHFp8LMGnto",
  "key27": "5w1V9N1eQTHjYcKNMseG8SxM3yBkkmFiHcTKhEcnzoSPWLp7nzQkTVrNzokPafTV38purpwhUTtXL1FpCw46ZsZx",
  "key28": "2k3DDkkwT4fDyB3x65LUjVDeXKXA8BdP5xKaAVJtdEXZLghTUUQWJuYJkEyDe2D9d1QYsgYLptKcBcJRoZZezo3h",
  "key29": "4m1DYeFjbw1zpJQ1sdWyejUy9ELL7yXk4V8RLfizLZeUvwnHcby6DZDUBXHsXcrFtaUdiTEBFEyxo2KXgx525BG4",
  "key30": "47ZcZ5odTwH3RgQiisT1hpW7UMdUDAi8c1axkLbBJRiAB3ZzqX9pFVBnmYztH1zXYsteHDffDa1HRTYjvQsuuTWH",
  "key31": "4iTWARUT3wGCXjtJE8d1K7aRYx1XcS9mr9e4QFNfRyHfpBd9mR9u2JCNz2g9X1NaHM4cRj8MoDaMXRAojNRjbBWN"
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
