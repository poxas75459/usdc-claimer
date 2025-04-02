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
    "Z9BB43otnikXmqWw6TrnLERPuaTNHs9mnQJ7PsjY56qP2yTZ1MLxDdAkXmdxm6UDpZAe39T35mAmMoLW5kjZw3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oUDQhZ7HDKpniasKQ3wmxXwLHk1vbCaF1vPJsb7pV9miSyHMLGHtf1Ec7qcBMURwdgKNihiBk1cD8EEz4kA1dcQ",
  "key1": "5hx82fxsYCp8Ec8fernGtBq19RJzPnajYkTKggKbJyJwjVX5aoUwAUm8nUjcAPWNvLC1DtWphL29i3UGw5Xg9zAv",
  "key2": "4obDKVKi1fGjbnaJn6KREW3NrWJEhNH4zQEcqWLt7iPASvRJTaMwwEveYyQQrpuHzUD2SipVTwxcUQPHi5eTkSmE",
  "key3": "2SZZ3csoNzcFpikp6XWWvTwQ5NxJk81MgxVz3sWHhMU7E1y1sc76d6wX2wuAECXYPwchKZkSuwyLSVjY7hSSodGZ",
  "key4": "53AtVTw6ev87aBeF6Wgrsxd9zU6fTbhdX2ojA6U3mWjq5S64SDNCqBvZYeHtaHuFtJZYSwvPycNUqwgydJkBqSDt",
  "key5": "3WFwRsTrQAkWqTbFGrB8Yx4rfr9Kd63gZvS83w4padLCmyhkwFMe2uzXD6PYCu5RtG2FH8Nr7J4nmSinmxoh7tq5",
  "key6": "5WqpBzcC59U2jHWVeKwpsQpYLppRPt7UTeeRqT7qFEJ2j3XEfjvYcr1ZKmUiaHShXxhgTCZQAkXmdeFG6FHthVCa",
  "key7": "YC8StLF24Qvwi5xdMnicfMbwbtbfwXdfxEYBUnGktxZ7YTfvWraijh7BxQyycruUBUJFrXUbEEE7AB8jo995yDf",
  "key8": "5EWvq8aPKywqcakEp6KfqyWcK7v851Cmz79wJ3mvEd1mjtX8gNXsdtM8smpF3TJd95Pjm6mxxE5GsUvs4tsLVfQp",
  "key9": "45LGoG4zuY5WG5ed4qB3mk5KFhjBWzSVCtRu2FgyfZzSSURAEkzW4Yh1GQHhc7HmPPGCeonBFhw3jPpUERZYcvB6",
  "key10": "GLnDAa8GgWCndFYW6MaYP6gYiirVZFyp5eFkRpsbDrZZFCBsM5kUpFXH76V7Eo4tnCJJy62VA8KByvQNGMhFGW1",
  "key11": "4QH4kSGrBhQHUVK2qQNuL16h1tgBWndfUcLdoa1qq3g2r4iniTgVdrzJ6ayHNK18s7tU9y2bZ2eEcmV1zZJgyoKb",
  "key12": "3Z7UuJE6gE1heS8tvLRNDxRjjZ5dmEg47zFdE7opeT2K3eDynELpCPaZiPqYcqgLT4dqrQsvXmyh4XZifwRbfg46",
  "key13": "4cyYn75eNeJD6AmL4yHvhCJUF6pKS4nRouhJ9cH69Jr81TBK2hoLZ4V2zmbx8YwgrNCczoruu23QDGh3YfLdM18k",
  "key14": "tv6Dumif4C1oxM4NHdkrqqMPDZN9MiSQ7hygyM4rQgeN6Vxg8dyyxb2rYDZe4e581r7HiNdPjs89c3MVMgpYYmf",
  "key15": "rCkFLhumWoxS4JXqUP3f9XeSw1Nfz3oVuioFzCfZzxtbt78byMDsnm4LN4quUCegPCyBYMp9F8LnuvJ8yEBKNCv",
  "key16": "3pcTHThu6YMSKgSmeJaE9ZujjU7qoUJH75RGAsU3sEH4ijxmhhsxLTA9pVC6AnRFWt2J1FY91rDyAfkc14vCASq1",
  "key17": "5xxyABxLCnXRT3Upi7DzyVFx6ZqqkTUBBmuDgNyUFbzcF1E12hqaG1xMexWFNUWP5HqsewYXuuGLNsMsWgGuV6UV",
  "key18": "H1fry2aezcQSMW5M1Q1cRjkiKnF6ktHU43ve45dmKkL6yooQHA3RxQBc6QgHrWdD3Zu2DtJzGtb39BfirvFST5B",
  "key19": "2t1pt3n6xgUTsr4ruzURaavHLEJE78Lhms7PcFWfnRDNGCRyv4BX5KMojb9fXFPARrHySaJLEU9edWDNc6jUPnuT",
  "key20": "5D6VrYWZXyisDLWkZLUBhEbPvNH33hjK1FPP9mZszUXSQt1AdhyTeLiRxt1MwWunqsYMFxWCrY2kLNq6HzyQngcc",
  "key21": "5Fq87rYAatpDxzqFH2dHo3UUBUhpBjMjHg96kRcGNK8Pzt9ga9oMd8bXai1X44vWhGHRT9cy1TMPih8UZgTPpw8K",
  "key22": "5hqHZQNJd8rvtEszyCs76bAjU8upTBet1CoQ5i2Da9f9XeQKsfiEVcxpAaPMQATXKo438NLmqpXdoMuCB6bxQpRD",
  "key23": "H1W6jB2hNo3wBQhZQW9Bb1YLeEmvcsAAjNoqq8zHHMFY8gsRsufQsaTkXdpn1H7DQDCb4i2egFet66Uckq1yRYx",
  "key24": "3ryo89EyPq9LEW1Fu1T54KxpvEKCqSgGEFvyN6d7G2PeD9nDK2kJYQ1ymgRwDpd7g7bxL2FcAiQLqwnWnkckePbQ"
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
