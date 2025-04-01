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
    "3DwQ9ArRwhmhaefcjCsj7guzh3CgmbpXX28Jshwym5my7vu4cj5XM4g4nr2CHssNw5tsJHvuSmZPwgBJNp3wrMwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gEwTCav5NMa3ZWb8GJTFvCr99jaWN9Usv4cJgPVUhW65ekpGm3bEQVP5U1DozsrVAXkSpHVGbrYuAbaVKbE7yR6",
  "key1": "2263919RbQqanaC9SrfNzELM4iRQoFbJsL7VxQESPpCU7AAKmcn9EwuTXGgtwp3wpj8D3DEzZdcgZnEJj2ZjWvjC",
  "key2": "23PiWjFin5uegBrBSR4TX3ku5WYLoQnys6J1zqtUFLdavfkYCPD5dqs9BBQdoYuTMPgx1zFGt8wYJXsmDVYsCMJR",
  "key3": "5hgj9zkZnnmSEpqtyLnQBDaFSM31BpTBgZ4pJhdmRs6eeJHGtXu3um2ZwKwhCSUEodLYEcHm5vkseWrL51RRYbDU",
  "key4": "46zdzW8JgUun6Q2fJqEZ57T1kgNFeibXAT5ApoHS2E4NWxPw2TYqAjgYe8oLZLcaYfzgBR8w6ALnQgDo6nBwwzPg",
  "key5": "3DCCK6UR2CETDDDmyUhFxaE2CXfV2fhoHiE3WRCDGNq6m6suvzw9cJT8UTJotbb3HrKgseeA4ZwRHNuYUxoLGD9M",
  "key6": "2MuteuLCiCjkxcxLPnJZJi4GTa9Z8wQKXmR915Uv5GYMWdyxpDGTgDxoEFPYU1bsr9mpCAk2UGUr61cV35C747tE",
  "key7": "4fTYe22ry8mQJTw1UqwpXxjomisJWtt3jFFMkv2HZmT3QAUVnrmtZhfDBKwrLDMimFdnz8bU63kQtmJYDJmqHqX9",
  "key8": "t1hPxek8QNwbdb88AeAGAnu4nUF9siqEdWi1wA7jSgc3Ge8bd63whoq7imEjxG6fxfCDVCECp1XvA632bKxmJyn",
  "key9": "if1cbdgfFRHkgeqpDQZW1CtyLzvdeoVgZaif676ML8d7WsCP7YQQ6AK94tdBojsJWcPaqPRJYSKvdNezqaW6php",
  "key10": "gHMt38K5t2dnXYWraaGgpCBJt1QHpePbRBx31TXJdgn3r2Q9qRpaPQVnXQrEKMravAqfMBf1MccVryFX3f3hM8r",
  "key11": "3pGYUvEy8MhCJcAKP8TYebGvGHbXzvKQV94icbmKkbjTiUsXUBcNEygNwVUq4g6mMzhiqxYCwG8tST9USJt24CeC",
  "key12": "83DWw9zmoGXb1XsyXzNZKwh5KS4u1oZrbvj3Nq257KHf11rfj6C3kjyagrV8qMFVHS6MKDubzYTnqoicdYqfpj2",
  "key13": "4qvuzfK5o3ph2rWdkBseqXHjp75VgSCtZBp5mUnprtnkTK72YuKeasQiDWHNgJQoNo4ekDn5b1Dwo7HBTwMCaKfa",
  "key14": "5dtSAWwrW8cmFBR5woggKR6FKYenHW1UHSe9NudoaJXmQYrkC9zwGPU8UV6A5YCrA4srLQTMb8TtGUuccBvw3VMr",
  "key15": "3YcYMdNpmTEuLQPpC2mEsGmnSLACA4MChRHc21JMZ9fucgKVk27owRGyhThAhWgvRUrzxrtxLvsaf2t4Sg63RQgw",
  "key16": "3AgR14yhvr1GHj2bit1vRhm8iCnV3RPb2mHkfjjHHpqU7Gwr1hsj7QTRTo6JSPMQER918hKBgRLpAZpWxthUCrkb",
  "key17": "5zTBSx9Q4YEtYPh85rdE7ggTjgewgmCE2EMZyKQcY9cFCVxESpbFvGsZPNHHsGDWTaVenjDEizm3ZAd4XBDZSBnV",
  "key18": "3r53cfomXkpbiCiz6ae8bsXZbKdnkvaY3mFab43BV5XzGf1a7XCFjJtYUCWoZXZNDjiiMGDPEAHhDb3JjTvWgKHi",
  "key19": "3mZiWRZ6e5S3nrMGXCLdbmtAW2nQHK4fc5qdVQ3ke8e9bpUQcrupBhGxNTRSSN2LBb4pC9Sp9q9QKZPfGQSdc3DY",
  "key20": "1wryoZ5ivnZos1sFnhbYFqaffJ864dgtqvNCBTTKG5HfMVug6SaEMYqAoTXeBC1bpVPmNP5t6gwy4LUbL2cQjqa",
  "key21": "4TjBQnxsWhindfuE6Zja3YcDmhW2Y3XqkZJYKTgDF7vfaP7pXyqnqPg9ZL442xLdzmCLtFpfK4fHgmL2fLwdvN28",
  "key22": "2XsXReC1Az7QYRrR4vAucBLKc1tMHE61pDvJxCeRb8qygZQvpgf5RJwqKG9Rz1ShP13f2B53WWN9J5yAiGERVjYh",
  "key23": "46ZbHu45uDQg3uWEJyEBgxZZRUyMHAfQMzxUvyfyzNj4Mqi6s3Ltm8m7fvGif4TpT1HyHWyUM46DESsvn3Pucq1f",
  "key24": "625DrZL6jpm8EwWpBEKaxe79qjScjuHnNr88vfa6h2yvRR3ViRvbZEtmqZZuKZwq8951rE1N8Lr89v2DVDRsUQMJ",
  "key25": "2cMZmdzsmZochcwdg4EQPUPvKWseenETNhD7gBfX4qKd6UYx9qFApzHZrtdgnohTYNnteRgDMxV5ikFuxhEeyQtu",
  "key26": "3144W7TTSbyQvKZ1mQJesgQm9iiQHpg5TZf67X1svvyFmX6MQ76yWpR5dyyYB8m5o9Xjy86Y52QhMLtkaGA1q4rk",
  "key27": "5EUvizDm11CipoejHpnhRyGbpTG2MGHRAjDiCyRoYuGPpM9rqCFPDidpLuPtaLy4A3k1JGvucRiJJderjT4da1Bp",
  "key28": "wpdVi4kpCdiB9XGFBXwXH73fkKHhSHHLiu964UXMuSR3LF5TdLzhBnMAJPKperbYkZNGE1vQegor5peYdW6AXMv",
  "key29": "GcMN2XhNwSgXQgR9dH2o2NFcMMRQLUFm5xLbYWjw8MofbjfvZaXhydupksvHSZb9ixuqy7sMYvuTMYKt2fiajEg",
  "key30": "oygVW2MNGz4ZefMoXBRSV6GFkocDHJSpw451qRHxj9kXYxiVZZLi9yNhvuY3XZQGK2QD1y6KM1r1odoR3N1rsMG",
  "key31": "3ankC5kG7sQ33yJp6Vq1F7iG2qSH7VCJEV5MBFPDdGuQ1qhhY3o1YRp9dA5NrdCGgtTwhwceEjQrcwqgySgPzYTz",
  "key32": "PynYEKUW3N9yvwR95gKqceYuXNhfndc4RGeSh4Vjq3n8t5cxfUiSBjt39ZtsE9bGEhWZiFQ7UG2XqotJ9YktmZ5",
  "key33": "LT71jeFrBJuGcb2vuvW4atjRgw7u2rEK89wmE83Duxggn1sLYcMK7TzyyYnhoWiTu8tipfDUWonQEjzPf42pEWd",
  "key34": "23hWs7NEacSg2ukWeaLRFsijWVzndrpw38bTknXDjr3NcmZTobGhsokooJ14jE6ZxHT5c7H2VDDxFhRsN8Zo2kd8",
  "key35": "3PbMJBnR9ey2WQzFU9pexPPLoHsh4NvU5hCR6JNytjCTj8XH4fQdDSDZkMs6seL3AQHzYXWETZG4oKG8GaNo1K45",
  "key36": "B5BFh1Wh5zZZzap4qi1DSZaJBjaUpkmatZtGUw3z1aRGXYGMbRvNb4Q9YU3kccQX9rPAPE3gTpNceycFW2hKMyn",
  "key37": "3CWGiTeFEWkisVfrb4CA77uB78d3yEt3435XzyeCHtjQuK9vgWzmsedCmc32G4cRk43iNnwgbipKSFRPy7uCsFKV",
  "key38": "3FgpKV8Xqk4uchm7784vUHsMYyTozNg3R1vrdY3WsQL5ebiEFh1Vrxr5bYFs1x2XSEHy4gW1Fr2q7gffiXzcAi23",
  "key39": "3TwuP3Uhvc1K3pL3ut2zDTjcxPXPWQctkgirEGL3zsqNprtH4n5K2Jq89MFP3Gtk942K7MhpeBtUAv8gRS2zSJtn",
  "key40": "4qEdA8mLwyUY51ATCjff8MDhJwh2WMtnFQrrqhLXx6J5YiSxhrRKbsxuNnNxkX6WUZhqTy5Wn9NBvDgRb9vgFq7v",
  "key41": "4CPRRsf6gw4BE6RH4gANqRX6YDpwTcXxYXpkQ5DY93Q1VdCxM9gRxU2QLjwu4e3gC41zh7PxwrBxEYzcShUupw56",
  "key42": "2q8oeL3HZh8MRVB5HfrtqRtRspuAafvGyTXsGwb6X8tKf4aPMPJsNHV92JfaYv5GcYFLTSyVCWCd7WJhp3QcH21r",
  "key43": "5GyqDBWy4pArHnpEQNSXfkfoAhYjJFgubhG72sLNFW13sz7B4UqXcMz2wdmzKksjzJzw6tCUfd2Djjkh3Kvt2vRn"
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
