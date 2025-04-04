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
    "48Nd3W8TQGiQSLqKW9xic4wEZ42Cpg6tbP4nkiP46hNgX9EXViXmeb1PidDrcdzRpV5jkknReQo5aPSgLAZRwwvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wy8mTcqLW7k8FWDPVAjeKgDUYdcB71Y2Mi5Nxvi1gue5u42VvikSu8XuiUrsbvmh71fbMYSgPVnAHbYfnFB6rnw",
  "key1": "44VAFaCw1nb7BjCmQs9zg95LW7Riv3yFCDVzzSKxovNTnYqzzBMa9ujW3YZDKsap5NJuUCPu7pKh9h6CkWhkiFCR",
  "key2": "5hb1vMTr7s45VVqmKFyP5H6fxwdwxDeB2NjeCARR4CYVTiWEDb5cGbJrirVdd3ku3Nyg5yVJGLBjBBVXFA4YsNWc",
  "key3": "5Ubjh6dHtWbVVHAtQ5fpzZXgbhZjEton6sC8QQCL8jP95iqCPEVNMxvRuiFK72PKqY354R4tNwFhPVKRFvb3sz2",
  "key4": "2U37G5F66VoxCHKdiQGJotLKiuhFjKhwQ7UjCfjMWiFhxRDWW5D1ihBL4w6Astcg5i8P3JRSkumUzjf9RjrWYvuT",
  "key5": "2t5TPdBpwFtvGLCKNWGKSjYigWQmarNxo2ECq3N8cC4L2q2dFPU8wxabw3wGcKp9NDvZh6V2z3zQKnWiF3bGTe3o",
  "key6": "2bBaCuqHoNquuEtqBHwRjsgtJtSQSMvFcD4cvU4YRQf2rYBrdyZ1V3gf4rF8twzP914dXf8216u223vJoNEc7fgn",
  "key7": "EKsP7fSBjzi7jqBa1yRMbTEEJeqgWcF25wUyRK3cPTYSs3WssDz8cMZcVUa4D3LHp7WJazcVpuJjkmpRKuxCcdn",
  "key8": "2q8UFznMVgAi22TdpiDrn4qooMxJS6x3ACcs4WUgzAWUMZKRDFfJDzPvR4AGta5HKcJ3jAM8W5gLECmLsy8gFt5r",
  "key9": "2qUiR4dhrw1n7pL94uCA6KgkdVsNMzDpqnvwnE4YHYwo37sNpiRqrKWizHH3fSwpXjs7hEx1Tvmht7hzJ9WnvEtb",
  "key10": "4DNSHFQVjZicWTFiqGWqNCBsXGec53b7tVsPV8KvNmNtcEPstEd8mVZLBoiPndF1okTnj8iLawLcN5JP8FyMzkED",
  "key11": "4z7tkY5xSruhEfGRsnBbFsVmaa1FqQ9DDNkSzH8pU1R9tkATqY9RgS9M2TehCffuZPCM1dRJ2wyBBoTK7ZjYEMZe",
  "key12": "23xWUHttNw6UwwpvF61PQC5n3VTMjnD7FPjUNNoccnMrB4VEbgkJbAEGHcsT53eAES9iu4VCc3c38s2BJ4cihGLg",
  "key13": "5Za3339t9fw7mKphD2x1gZQpjZbuiV8EPSAd3QtXKwiZH8u6hFjxPbbY7qLkS1M7nFafxmSG81NFrJB1kGEroTgn",
  "key14": "3zAki4LHFuK32w7CMa2DcFLqb4tS1KXuz1r1CbRmfcCVtvz5AecsGXv19aQffLB4otpqPrcc81rmHDJFmYBUW1z",
  "key15": "5hou6rWTMSgLc8e4XMQpWEwSLHxKiHyoui7mLeH3N5wYfLxu991g7T2uWVtH2QVPAVMNti6Tf6BnYXKz14EM1Kzj",
  "key16": "4o8DautQrL5gRjkz4WaF8HwfUfSpbUN8aN78Z9uztSzECGSp3QVKo6DFc2SdReFEg7u9nMYQxsB13W4ySZYGRS88",
  "key17": "KKdbAGQroEJqNj3FX8UrzdAJAopwnTtDYjCvTrc9LJVnJNACjF31ovPs7csnbbezWRT2CVoXf5EExAnQ1NJYj7M",
  "key18": "3wvBcw8R6RKGWHsA62cdkJu673nXN3x2vXCPBvoEMJL9sDpYNns7jehY9sNFvn7CmxMYrpLWQKLPDEjv7ywLtZjm",
  "key19": "2D87BU3VQ7YTFpBwoShQ6JugoyNKPRvAmH9hyuTFXaVntFxWKBiLWCv4zAdWGagqVjhgzH7PCwPEpMyFQeTHX2sh",
  "key20": "54n66nGoNCm6PJNkMjNyjHbdF1eNqV4JzkWzqJ77Jbic46rpEsLEgwi7zMNaiVVouuHK1chDSwtL9QrBio7Z5FNc",
  "key21": "2zT2LwyNRjn8kb4AoYTLzZuRQzmvcebLVE9zFfuDioFxdHhrCcPYNFoT3nApJDXFxaSBVRQcXt7xFxxTS18X828x",
  "key22": "PcDfD1ZE3VA4EhrGhGuZjUami2DVRySgXA3h8tfmNxf1yU8W2Up3wg3zCCzxcmuxH4T8DVfdaDFtfhxU1GopJEM",
  "key23": "5n8RUdSzLghqkuHiVzMUTTB8Ph8hNUDVHTPMNzmNWWo8f4otqdhKoPkUKtih4tyNY7BpXRcFELMuauJqffCtqdHL",
  "key24": "gxzVp1iU1tc3bXcQScpNvgpLk1EFJiw3BEgyGe95dL1k2pYDU5e9yo9hGVcwuFttnZd3rXP3YJzqPJZY1ytwpSx",
  "key25": "4QGYvtcV1zCB9ofKD3Bb2MTNtd7hL7CcLkQ3UMEvShweSuviibE9NYxyBzUPzp97TfuGuMPWf7fgo2kyGXfZANMs",
  "key26": "48XopUpSWTpoDNi5totiAoDfnNE1pdF79asYSRUSXUC8VAUjFHMP4wzWmDVGDxP4skzNb6j7Z8QRbLcosBxoYGrL",
  "key27": "3JjrEuU7vEgh1EtKxF7LF1rUYE9SuSLNhsPXPSEVJQB7ec7p63cSi28eBwr3rRcaizxVT89fPbdUCYksY9G1dZ2s",
  "key28": "5QuGfrH3MvEgUFb7GkFw29gPWEARuLYRBAXt71XQGdbNnmQEz6DC1mBaBHGQ5nhjZ7cK34y3eV5fCeYrnX4KKmpe",
  "key29": "4n7WSYS5QLnyAZx8tByRj9QApK6WaQ87QB3eLnS1Dtr1TjJxHdzgg6mdM4R2M9E8zA6fk4x4Q1MdpxwAKR3PEpWP",
  "key30": "4AKyc27rDkt2jXsVUFMem8ciDknb1GN1EYtQCBV9jAnPLwr3NTbbNFaUkS8ZxgCiL2Vj25Q2EcRg6RXXDRYfE2rD",
  "key31": "56brw7rYXYFsKxJatF34SLmekg9KVKwcpNin9MnCoPi3M7Np184LLiFJVpB5o55Mfyb8ig2YvMR9QiGT9Ytehbsv",
  "key32": "4F4z4PwUUcxuhCaynk8ho6GWWbzmCCTKVHwTvv9qaQPxUPSEwNjyqrXQA2zAtxAT6YFv8ocEzDZJvedVwn3nPLav",
  "key33": "5LScVpmRDR5Qn3vssjzqXgk6faXT2RGURHCLKeuWZbNsnQEtbNMfVXagJETtyVStf7X9ZbpZrSwUADJjXCLh7Kp7",
  "key34": "4vQRUMhSxZ5121kqHpDqSr6B6GDnFQS84yxAwfGkkmCp58shphQu4yk9R3PX4195m9zqvyWPed8AoqE2QHK4zHpk",
  "key35": "5kHf5KuWbJE8mVL9zUYgWYxjVTcMjk5RhMWAAiS8oLpHYF6WvHVFyfATNCV2Muv2Qbd1Cchg1kPQQg54WNH9m3Lz"
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
