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
    "67nwrPSVu6Nz6cA2b53U64kX7fuxziFATEVGpwGXt2An51JpXKZBhdCGDcLzE1H3ytUVe1vM823K6B6U6m1NYJoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RC82ZXZmrEP8isPdPXBwy9BYXSysL9JgAmM13FKonjNetaDMGqEo5ASRj5JXLR7vHqEsu3QGN1nJWUaxmg5icdJ",
  "key1": "65RTvEqhCKXN1hxv4wGJxF7JsoKdxyQTyEvvmvUNq9ao4tgZy2KCeom2ZfDToeFMpKfYyRdeWYjs7B8xEBqLiBoo",
  "key2": "U3EBX92ctZWYVj9U6cKV3R6YBS14d8GdRA1SF1PTjGbpjjgGcM43uVEjWB23kxRYhFKcxkFhxKoEBSWBxzKmGrW",
  "key3": "4d1KaqbU9LAVY4pG78h3SMC1rg6whpMMQc8dVRRTJk5Db7KwQbpTDMPM9wrpDCcF95JWNFp6QcYs7CyRqdnSJV7T",
  "key4": "MbGuiXVsGqCAt5smV1Gwcs37u5H2B45EefaQpJSoH5AHWRf7SyJ3WvWmmKXMLzVwdibm6voabQvLyZYcdCmm9bk",
  "key5": "64bKAKxBDVBsPhjNdEf5bC6ALhraDtEUHctf5e67e26YFgFP9ZEQfhLV3wCo5Mu8PidLHZVoRu6Jj35iwiLXiXrE",
  "key6": "52b5EteqJSPAcWVWWvZBDcwppGL5Y23G2fTn6z54N3z3mh2ewVE8hcNXPQ55cfmMDwbYyyoUc8ej7Ai47BEJ1xY",
  "key7": "VXiLyf5Psut76JQN3mgaEkrB6mWY6pqzyoUrHVWH6fgqseuYzZx31PSyrVYEpZAFnSf4HFNtHmRy2wqkmp1S3zj",
  "key8": "5ZZ2cNRf6n6TBd9ttR5oFGYK1aCVkLr5zPjaAvs9csGBGHbdTZBMEfWmHdDeHK4UBqr3FK7FBcBwVKTjCjCTbg8A",
  "key9": "2QYXFrNhJqiHfp5wL84GWS198pKi7dHyPXjoKMemSntP3NgsBDrGW9dSPBWmoqTQcj6CKuqN3nLn7AnDfQa9erfS",
  "key10": "2p8U4tdMGxw7v3swfqU7zjgihgCFXU8s3BMzuUtvrtMdj4CriKMZiCyLLTiMgz9mmSHn3CNyUryoAEAhJhBpzqdW",
  "key11": "5xzgrkaaLLtDraofQPYsm3R6Zh3G4VDww4A8GwpZwKjShMGYhEJRPGQ3sSjbULvLNBUDuNti2ULPchhyKPE4oxow",
  "key12": "2ZENboNMKhmZwZkDBZynudsQZ1oGKMfQJnTDAEaYst63jW2MNYQu9R5eo7cHLGKyZvenKc8T1E8ZW1hYnL2fvnNo",
  "key13": "d2tiHFLErJHch7xBx1MWmFiZ6tKgnhbSG2eB4KzXx2ivU7WSsB962in4fmRRLNTgGbjkBvLv7dALCEAP9N9R195",
  "key14": "2H91eN9K7rpFbj7kQ4ZxikKXstmCWCUrXQRJ3TW1Jx83oXqyBWNgq8UViCBWk86n9gH6AXcRUueHaNFodDA8U8UC",
  "key15": "3e5sJNXXQQgdgApmLhEnzhtyJLpfzdZVf4JD9V1zsnkWvyrBjk3WkL3Hmszwqq5Ub3rtHA5wBRrkJXtCPjpTUFLy",
  "key16": "4KqQPoSjw2kXB5c8iYxMhzpU6ghebDZtbYig5XUxaij3RdUiFihDGa47FMppEasbKu23rLYcLG3Wf9v8hgN9dWKk",
  "key17": "24bCgmmVEBtG5toWCkqwijewga2uG5L799zUjTci194MR1gRb9jfZvjHn1TBg1zh2AL8apnomdubRRxXedE6moJD",
  "key18": "3Y6ZbhToTGmPMXNwswDMVnirMf8LQvosqyy5z3PvmRjJZzaL1a51Ggwpk23bAuv2SLBLYEga5Qz8wxUdqhnveWQD",
  "key19": "48fRN5DpGRNQabs5jAk7QGmVmCKTw5XZWQvxzYY5NXn8tSnArKqs6CeCQkKguzwTmRQCxTC2vzQQC8trPiF3rULT",
  "key20": "2cVBikJCF5oNnAMc4y3PjsK1FEx8rmed7reeMTxXgfEnP278GRchaeTnUwHhkfnKq33PptXTuPTcdF9kReKtDXcM",
  "key21": "cfwDkqZmibC3BBqVaNArgNisqc2S7pkmE38ZY5h2Ro4JrU1DmpNrVC3VR1nvtSq8WYDcgfCtnCmnZuFAoyvhsyD",
  "key22": "4Bhuwu1mdyd1NkvNMMJR76Gqf5xAF6gBveStawKYEYahgJv4K3e61ZK8XnwbdoCgfkPvVCeobAPhVb8H28UY4S9Z",
  "key23": "35HTp7hvmUn7UGB57rKRU7qU1soJwBfu1dAuFkkP8NdBbmNp1aWyEhKembf787ZDJg1PfDUdwSU1WjKb5o5n1nym",
  "key24": "5dHYErqHwGD9j8LV8NwMq6HZtTFJ3yMZzyd14qcUGwgsop4o9KrmSqtBSJzBN6CvZeUKs8Pz2ZzdSyxmbW8HQBUp",
  "key25": "5oXy3ycXuFEpMK91veswmSQ5Eot1hjARxNrNZegPVWvGDnqffZKUXsFG8rTAf9H9zSPpwbF7zZeMvaf4ySwwR8fH",
  "key26": "mzUcasDNyxNN6bnJEgEzP7Di752N7C9LBWD3MVWQ5fxgyM8raWddBBs81CbMavALYbM1B7bmLFcJBL3egGLFDGw",
  "key27": "A1mGPf7ifioTPnMkAPDcS72ueauoX1ns7nyjxbXE85pMVeHxCzpWdwTK9xBqNsCeN3X4Mxv39p4CqDGHjFCBKFQ",
  "key28": "62S8yzMCJSK9nkrSCEsLjdCWWETXuyAWQYCpqGrwskRmC9HMcWAkP7EvxRWjNthXHcpvLDMvSJ6HV9zUp87Nkiw3",
  "key29": "3A4GdVgTDRxCQLmzxHj3WaoyPjtZPd492eAi1Go1L5EZGvzkYcdn2pYoLfdCBa8fU9F8tjsUqEpSmzZoJZZRrSs7",
  "key30": "4E6jCcSKvf3DgW543xbaajKdpjgDV4Qbrd86tN4YdA3eqZ5NwC1xfdC2ZxgWbzLZKzZ9ntPUk2R5pQxpi9WPBGK4",
  "key31": "2y5xYxZ2t3Y1g1Jp3Cp4ruSUZ7YM5BtSNJFVdz5EKRxgwbTfQArnyoB9zZ16ZP6m6AcrqNUtcpHmKjq793xEdK5J",
  "key32": "fgkg1JUgKZP4KtaL9s4WaGEvYoujjQSZBaq7VtazqCHyyMYhgtoZ7WK3N1Cge9xnYuXgeYDF16nRyTFsyD2MskV",
  "key33": "59qxZJPicjEFVC4Gm1n7DytXZ28TcN9aLK3pD5fRp3AQR92Ud9scEP1WKyvyDnDNjXA7iWnnWt3gVvRJbWYGD2ox"
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
