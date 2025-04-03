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
    "3cTctj71R3uWXvTvSVtgPhAGzEpoKa8zZ9bvGoLXX8x1nV19CH7j1ngYVPGZuiet4ZQ3DtCaxpsUPqNArFrXmgGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mSpovwkYz3UA2xtWqqQWXv7ah1nXWMvFm14SRswHuU1PxVR3duvWXx13Hc7iPGJRFRQZKk89F8AbF2jSbfQD3VB",
  "key1": "56AMV1qGuFm1p5rbK8g3YUZtJGMWa3QTjjfQmUvnG1kdndmzbm1SQQxPE8by12mgD9KXvoJ5Snv9pa5shktutK5F",
  "key2": "4rMe4yyvasGUhNrA7eQbN4yqHqZ8LmK8AdaiKKLGHK3N9eDw6BdPthPUSFRKEVXM3Q6rpabsSzoBMuKZw6uWu2SJ",
  "key3": "66kWC59ntTdv5mfHSJB8oKKCmiDBucMTH5VdiYVRHJAiXGocL4gb6Kt8GvSeC9diGFiJSwHBTQGo5ABAXSsqshFW",
  "key4": "Lk4Cenq3ZFDNzWzq1W9DmoaVABUjvHKUPPNwQ7uTVCBAGvK9YPmwUuiBYZzDqnzKb4DKA3WYooBGvFEW9eGrBk4",
  "key5": "4wwn2o3WaUPLJbPoDP8BW5sq1QhnFqHViMo2Pn75ztT8xEx3QGbFTkv9YH9jQnBNfusw6XeN1PP7QoJdggc9C3Lh",
  "key6": "Ecdr81Lm1E5qK8u286gENf7KUrHuBKbGuK4MwEDrQVH8kvNVMQo5fmwfsLFxbbKMn65FNzSGu7CPciM1uLXurem",
  "key7": "34d6zDJZ7Zjx1turqvv5KMDerGWn4C7hp3of5PWs9gDEe3a1RtFn1zS3qYCRUGia9yTiBXFkYqzqq6LUEMu14Tbt",
  "key8": "NFYbnfiSWjpAagPEH9zN6qLkJGDKURdidbWhFc4zNGeobhovNpiEmpXq34Zb8DFcM4cDtPeLCQRGs32tAmyvKoq",
  "key9": "2U9eSJyvHvZy4HfLkP5XtF8wfpSHLV6VQZUiJU2TPbrv4ePtT9ncji6RVyUL9yG9BBektLt4G1jWX2pdLDYmF4MH",
  "key10": "2iubypBmHxTEWS7GqpzzyeaHAKHwgNaWcTYoRdLQw339Ni1fo6on9ivsnnfJzMWWoZZEQTBcGXxJLRMPtUKovaJd",
  "key11": "tVs9gNUXBqH4MK6MP8odmG2VTPkBGMLo585LktpsEzkFEWgcgyuqQLsL8X4znA63WsGYGqVFppkBNYGLhhT3Gpn",
  "key12": "eskc9wG9nxvgePBJqavgbNDL2GgtjfRrayP7JGWeTNR7RL52XbPp1LU6bnZYCCqHtDJHV5cXaBASivqTiambAL9",
  "key13": "QdG4hdhNswdyXTfwZKr39Zidsf6buFPFF5yk7MGe2DK22qRaCLPL8W2ohhMg6euvLzgy73pFS3vg1idA7jUa7B6",
  "key14": "YKWtmrD9sdNXg6uYgcZn71FNmJmNSANYQssHoG8nZMuhXReJiLRdN1kF43Ji7XYTLiq98Uz5m9dVnM14oC1Tauk",
  "key15": "4GLktesyz5uBjzhYwTV3iF6w17pe8AYju15E5B2H6yNYsCMTm6tEPv8k9LmYMQgCzGzFVfkFzA7o4bsSucFXmvQr",
  "key16": "58ZrsoRyRsfGJNb9i2XBko5VMX9RR7ujnAkbTcf3iXGPAmcwS4pr7nzYCHxJrmoQ4pxeEwhS9BhEXghCCj9QGvV1",
  "key17": "NP2s5nSwxiHwMtvX3kZnY3TEQ5uzxPE8y3pV6AZW4rRobHS2XJU4ar6zAxVQFit3M34TYFZwNTn9QD7BN4ur9ys",
  "key18": "3f72MjQxqNL317fv86RczKkyayHjZy2qJwuvyUsFvzHPgw8gjJZusa6kTs6JECEj8FKiGT4aWx4yehedztwJch9e",
  "key19": "3viu8yehezawGpUs6vkHmVGAbnEkUmamGSohhtEhz9We8KPYKmc2Zceoi5K6KZZ8QBip9cjy3Nja3mM5aiwskHCQ",
  "key20": "5QWtvwtHgLjdpAc9r2c1W5wMNK2yP3PE8ND7r1WeJZ2viXBnwZti4Go6hYAd4yQvdTAZnBK3CWGWCjgNAv56ff1q",
  "key21": "3E6zkcgBPVoMZ4n67pD47qW1SS6eon2DugNUHA3YFouqVScRrQMNVQgc6bVBzuNnwvfhb56CYo1DHvZDVP1cNKAM",
  "key22": "5FbEchyVWdKTtrnCqRtJ6noqzNsM3aB3a9asq6cJHKqpQaKQ6dfKRS48qHkhVKV4Pe9FAAoHwEGy3rcANxiAZNzM",
  "key23": "3P7Qs4fmCXHYHqBtvZE8psZk1iNT1zEy9HixynfguYYa3VoWZMvgZRfmJxDAMhr85awrWQ2LpR5PkhDyAwb6U5Yg",
  "key24": "3yazuqdQdjVviHSu99ujPdLX7RbbuXpo6qBvfk61A18FPtotdYkzkCc4cvdxcKV5u85pcvB3SfJqQ7um6DVvrVwf",
  "key25": "2HsLxwq7h5MQsn6kB16bncjsymZJTFy3pXJq6Gs4bc8YdvFuGe3MwqMeUF9JdwaWb1dTLef48imxFdPzXFG2QN1C",
  "key26": "5h5kZHVMuiwtai7vZEPpawgP8y5q99CCYkCjgbA155L7GK4f76KQqeGCQE815xNXToDnmffbpwz3nixrp8nH4oes",
  "key27": "fDVNkX1DgFSe6wCe2q4NC4oN2adDsvTv7Yb6bcizphEYwSaBm7FsiagcWQEA1TzBMEXWp1ukuxPYh2G6GvMskMY",
  "key28": "2TSQiuF8BKXz8N2XgxTg85TtGBgnUpA8xRMnbn2572LkwZS9LQZ57ACR12kVeps3ET5o3DaeHZx6j5JhdfrFMgmj",
  "key29": "4NNFziKFu1GL3zyXm6gAv7fBGn8PQ2wSs58HaS1xYVySBk3vHW3sVn7yt6xcxTr9VSMZecBazL7Skg2tMg5dgxLe",
  "key30": "2r9kJNu1hVVmKCGM1pKee5NWU3VspFCCLsP6HWeHTQULsNy8waERFPdnAMAJu9erpSPHhFFsuF6RcE3m7qeMUjjM",
  "key31": "43BXYmonG3jJVeEkkEEtRP2VwSkd8giWPyFjSGUqdb2eiD5qVaPwNEeqbgWao6B4mKfFE8FtDuquzVGmWjQqbYPG",
  "key32": "5KbjshZKDGVj9nK2fhSCE4vJTKpUbZH9tZkmAeq7i4EDC8Q32dZbPggmgySDkiFTQh8hxPpbeMKaXek7MS9R7V4S",
  "key33": "2cQmmH2MppoDN1tc66JgpB5xvdmrBsJhSsLzkmRKtEDZiTGAJcX4Lkph7zSuNimZn5DPGZFc3CE8Gt2YM2tXvU46",
  "key34": "4ForUgK39LKZffzZv9xjSjFstqdSmcuMJ8huUw2LcREwX3GQnwP5zR9HPxyD9Jj82TJtgJ4Vhdq9PbqvFQ3LRyWr",
  "key35": "4RZDFcMNtuB7aX9P4rhVkfB8MigU3ZiFCYDN8gHUGtStiXhnZmULaa7bnT3fYx2GMcbRNKnzahLP8jfhVJnxxK7z",
  "key36": "4CFLWqNqbpaoWo8aqYJ4isxXm8k5FdvAmnXne9eZVcKBtNwo7MvxEyTDW9u9Zds4kHBwCTgdYpUynf9gASKxdGYR",
  "key37": "4gUR6ExeSRxGFuquTqhYGysWA3gxLv6tvQgRMpLMH9NeJ2455WU1GuFRvX2obi9j2FYeeT4Bezg9nsdW1fWLFimc",
  "key38": "4Y73eAv7s9Y1aNj5Lw4pHr41fXoxQz3itH6kZk3Bf6HLn8pTpYmPuyGhovDpwJnNRy4PGpbSaqqMSeAW6XJ4ULcA",
  "key39": "5eL9vfW3Juxmeojd2MBx5ASfm31f481iJjrbtzxasMYW3YqzZrgvSGr3YtJpHtNRozq1xBUD5zZGPXbs46nzCiYr",
  "key40": "2YjipGMaysHUg9RnyUxdca78VRYp2rBquMD367L91fvPKrZuHuAccYMCWfp45zjkGBrBojy8CkNF9ZvTfm7kR3pi",
  "key41": "5CYPXK2iL3VV1uNg7A9bCyUWnerBByWPkjxie98eBPARDoHcRBbAsS8m1GFj9AZbHcPbgHrmCVshXjNfi5qJPujG",
  "key42": "2HyM7P4vcscCQkk6Qy2U9nnfUHjLK7NhMXzNLT9mXbNq5ns2AvLA9xpeXwVKyNwusqse94wRBFSS6fi4B3C6vHK8"
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
