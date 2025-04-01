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
    "57ud8HMQXXZU3HJoACP78M9DThRiz1LLj1sb6XiP3GRjnBHjNHvTitW4tp4c1VqZhz6Fp7zF6LxWib66CvpzV4Hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jGhnj9Df27bNkiVWcAL4TTmmDENkzQJP2rssVcGnvMFGgc5pHbAoHBvrqsdSwS9hwgAQrBCka1WXEocSUMU9dfx",
  "key1": "T86753jbWpyCu8h1yzxMhSnxw7RL2pDXFmQRs6xQ49DuDfnN9uFMrQDcsUycJMMGvQ69ZULeMgCidAUFLJgAv3g",
  "key2": "4BT9VmLUzABuEhdhwYtFCaf7vSNy936tPiGLydVBtSmTUBgzJq1ixhiL9bi7npgoTaBebwGZCWZBfJCMFwUQLces",
  "key3": "2hwhPgMmh2VwV8y3neWjuTwu7b97twhp5TtnGRi56bSez1ubsiWKLBZehk83DTkJ9RxArjKiQK2Kts8zMe4vi6Ts",
  "key4": "3HpRK7SkFbRkm6PeNR3Mtp1HBNhg7cRYT8GBxwzsAbdBAb9DMR3uvsND5Du65XyfVMVWrNyHgVgTKBBGdjAmiStV",
  "key5": "2QES2WpACBg5oMLHGuKvHc1LmicK6YHjeB5SFwH4UgSJLEd7CwVtenqanL6KUPBHiuobaJpNcYktgL63ackX4tGA",
  "key6": "iZ3Ch5M9hUoQjWHEYAk1n8bg7FTP6sfbpYzfkyELHVpeS1s2RZFp5cxfgWAnmJew5RU1BTstDbrXwWwXFteM4ps",
  "key7": "2bwLDZRAPbPMNZYDiytSs7cVqtJ9YQ6xtKm4woepDm47asVeGRLq6t4TXsWWm2hSs3GTjLj1UL2taQLy1dJqqvxY",
  "key8": "4FiWm2qDu65ssUBXfezc2B7KUXuMTzELtAbmhB2pYd5GSRZ1ToX12zpWJVgrjcDgLyw4YM8bnB33yizUknYp1CXQ",
  "key9": "3EzGuEGjn2wiHp6DTw2QAFDfSoNWKSz3uj8QuUtVfLBMYjURBJtzEqozusP5AxovfpfYAdfr4v9wx4vqsGrvt7Pn",
  "key10": "5RK3yoirqY7jpu7qkwKS6ubBP6nzNxyETS4hmwVnNe62j2eAMGgzz98mtxkd49qXuLUenKQy6HnCW7t7HnCKparc",
  "key11": "4e6mZkEAjWGd4q4iHzLsgMYJKM7e7PN22L55AQcFqnM1iKbvnjLNoH1CyWjT9x6hZ76YrJ3PPnhLqS7By874aUon",
  "key12": "67Ps31yxX8tYoQZR8QC5skgoDUV5edCZWxzq27rkCx8zCiUbHvPZGktZ1jVgp9r2XGww7auJYWbcwHdVGjMVuEua",
  "key13": "2tnCMt6SaDNaxHut6znKvvEmHHybfN1zpCE5uSTpByrkto3fjwe4tUo7j69ebPVPzrJcNUrcc7QJZUSfhmwe4xNJ",
  "key14": "4NFc2i3wgs6vg3VyzaLDAdPM4FcPCvbeRXfVgKjeT4hau5PfaMzsXKvGTKrRL8wxS1nwtARQhpdyVbrDYMJksoJe",
  "key15": "384CpnRmbuPw653L2JJNzBQu2XZgLLzKjmM4s6HQF3vGxbjNQUg2mz26tRtqR9r6QZCk2tnLN4iuQTX7kTW373qk",
  "key16": "4tYPVEMb3a48YDPma4kim7anQs9JFNpoFNewUiegj4Wz739yP2gxW4MwrhQkhfqjZ1mu9oWLKZduRELVbru9tErn",
  "key17": "2P4mGVp6gsoG6gFm9L1J5b7fLv6uYN86WiGzjNx3QMv4ScCe4MrVUf4QEUPZ1HfBLYAH8NtdpNe2Qtne7pa7TLUw",
  "key18": "8P8Vqd6pFWkxrXsqPCCyq1UKbQ2onEGD4q7ER6Z3CSamR15RuQk5MafJc31ZmUyjg4z1A79r4oXXsAQESNkDMmT",
  "key19": "2MGcmXSrsYEtRJ9Vs9j1LqfudD2xnPSDG1UpmEotnfJiZM8zoRBtvxM79ByjpE2dVGiszYMHD3yysExc8ndWZhzT",
  "key20": "5Xs9AEsWLDmQDstcwpUg9RZ3kuBcfPYcW2AQgFWhu3Tb2nV6XDFyUghb6fHT8qd82RHDK8exGcYfCACh3Gb6dMFp",
  "key21": "5fhxkKuevyHWkFM24i6nsxifUBy55V4aL1LHEAKFrThidUVrCL1AQAEPWQHt4Mn5zjNKZC1egP27MSDHFfBEiNwZ",
  "key22": "2pm1mpPVYicAxPHMDVv6rNQGaqmm9GH3TFyeAQNuArroCqajZriRygCDFntzSPJzuTYoAvxDin4WAVDx5pAamX3i",
  "key23": "4d9a3huY4FgRedmVmrfcwsfcawicUz8moVpF7pvjcZWioWH5dGGPyGNWhWHvRX6Eh22L2y2XPFXJ6MHu5HTroRCG",
  "key24": "4j7xRUdCzbQVGzL7Gqi91MQ1ixoBRVj2sQL1AMnVfp7t9RTp28TdUHYDpK8ofx4iCwuXkAPC8y6EQ93kmb6FXWhW",
  "key25": "2JKmiZ6jiCFB2AfAPKFVEq395gmfeBwRT7MWm4rt1VomDSNa1wCPzQboLT9BgjAM8bUG57znMgjKzFV3crga9Uut",
  "key26": "4qYKNmws5yEvkH8fcVbUtyuHVdcnhrwJQtCT1bz5vemtmmoQxz7GcgeB5uF5UomDzfwnTEmhv1je2G45YVgtTDge",
  "key27": "3FESuE1bGNDbKkGQRMcJ2wSUgQLYZakjAPrAgZiXXgry8gsDSc4xed1onJVhXP7wD1BqiBg5FRZpQqDYcR4aiQ88",
  "key28": "4tydvGBdhQH8vAEqmwQCS25LbMdVMY61r4uqKYFzG6NidFuZutzzRWGcqjQnVnrg79ztDrmv9KHg1VHRcHmBsWtZ",
  "key29": "449irLAE8r8Sb5K8siwtEZ46K3bebVk7HRCu3rt1g8icjhxUVAYd9wLRxrQ7hHqrhZZQohXP5T7zfDagadYtdwnq",
  "key30": "4CBwjryVjxT1kVbREi2XAxoRmFgfcEVsLvdRzDRQVk4XWQRbdEid9MFikRmg6FP5ynPbQxyzdtK911rpJNXg86Rf",
  "key31": "3TCAxM8zpajjTH1LJuAFye5aN9otXZJcGbHNNUaidWg41gvrADBURR6m4hBraJ8aebKnUysLvyuhYHRS5m9nZQNF",
  "key32": "482eZSoUrf1ZdACkZdEkDjtN7JFKhq128gf8vgTCuUh6V1PvFSFWzcZtdJN8MRxMm6v6w4WAMuGFGKbUQydVmzz4",
  "key33": "41NbWkMhenhWuKUB6k2ghqUMF4c39d6bme6YCSN7X526tYybK5yPuDihvwHEUw7XJq48zvTpMTRvH7hyBhyoUpFQ",
  "key34": "59HqWUHWHkzouqBgLmATkCXiv1ctFs5K4CU8evvPuwqJZLBecGfrLyE4c3AkwrbhtFCRaHVBxNgbhqBwafyqtGWx",
  "key35": "4Qc5VL2m3DAmrF6mZds2zXXnHB9WApruYEykGkE9ZqMsqG268hi6mV1jovK1iLS7izUji1NuKcvv3siAGz9zo1Nw"
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
