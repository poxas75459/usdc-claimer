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
    "37KnUtdQXRt58FtTpXuZn5RsGTvGsYAVQq6Sb6coxPSbe9MJFex3QyQdg4bcJtJWV1UDTj2ECUSSkSK6MpGwDT5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z6VdKgJbHE3nt1Ui6gYWCsezRYBa7NwHTPpGC4HPXFnHBtmR97ke8uvdc88gweTpSxqkrq9XG9EvsfBA2hABY23",
  "key1": "eWTzjpqQmh92VBC3kG41QLjU2HoYcCzYd5k6tT9gUXw5oAE18sBHZYfCiYBYHrUnMQZNQTaHYDyok8hh129hTPd",
  "key2": "58tcoSZaRwAR9sZs1SJFf8kAeBCqUv12j35z6MUgiAnT1WCpmu1fqmjExi6uyiAKv6cFLX98RXQuJZaYPbF3P3B4",
  "key3": "4nM1YKExP4A8eYmzhqU4X5sVCg7Y9TWNoRo5xK12fQTrrp6KtzjYkVN6tRMmx4HjtsePqWx5THFzm9e4tLsF6786",
  "key4": "5vBBxYqkdr66rwBXerHvsXPGsDYyDMvtsNHySXgyrPAF68c6YBvhCLDPCSJ2EoEvhpP8S1oWko9RP4BME3kM6xYZ",
  "key5": "5w7ua1azbBgi3m4AbZ7Hns87bbgQwS9yik5Y2a6sbTNp2JsFonh1fDcsmJb5xkdAGBQnTk8bJXJn6scj2RZdbcWR",
  "key6": "5dmazn2A8wtjamFL1R3pKizY2Bsn1YiQdLqNNPQNoJVEFNtgK3N2QcQZSEVxfk6UPdqMng83nXbXtKYor7G6poZs",
  "key7": "29bepyt6QJi4fiEZYRpYC6VG4TmUVYQTtmWNihX8G7c3aJM4zV3td9BCkCU2X5tPoTgsXNwvQN7ruW5rpQa3iqjw",
  "key8": "2pLb4CPFwsNaprT2M91juLC5UDcY6f222nMhrgoQg2dgT6Hn5vLUstdzJwaLDLMHbMgZVKF279EXKZ5Jbpn1SEkY",
  "key9": "34axHDy8FNwphvTxjcCPcnMjcKYjNVzeHy1bKcom3zfxeGXVxTgMzoLfBZcnHuGP8yXdofNwkjQs3oLteuWzPZ9f",
  "key10": "4eyJ3szdk9VTEaxbU1A8CRT42sVCUGP1rHsGNeCRoyKicK4FhV2ErULK3GzENNUjHyzZChGZY6Mszz3EHKZoJqdm",
  "key11": "VsyxZnrwHz3J4yBqLR4C8RMxVrqWxRze7eUtBrEPxJWDeNQrXaXHkaQNmLpRz6LQe7vtPyhQV4LTu4a4zj15NB5",
  "key12": "3bSvhi14vmSUj2dmKNG52s31eso2acjt8kmZWcb62j3BJP3N4B1XnRXvrZnXqCPAfpgVJdoFr4yCzwfSuPCR3kWF",
  "key13": "4nxXr8JmecG39UkNcxPCcLWAu3rxReMFc3TZpxs14FYEsRQLGknSYh8DVAMAMHMi2GSDToUKdMaR4NRcKa83zLVQ",
  "key14": "3a9YGMo8kvjnc4BoEFSPcu2PuTsX2cQZZRQWyeaAVeSQtsu9mQSJjfzhFn2K7DKMX67CyUxdZ5KZ8adLDCVS6KTK",
  "key15": "Rt6r42DbJ8fGR2znbWJwfcyZRsuLD87K2HrwYjsxAPxEnPAqNNxgT5a6sKZLmry7tnUu2dvmp7cvhoMqQNovb8Y",
  "key16": "4GoXH5CEeryPDWiZbitUtpz3PM8WwbqAXvgMjR74rWBk6hD8N2KVeRak1wf6XaeRSX1UwiRhEnarWg2LYcxPzUg1",
  "key17": "54Y3QdAsQmX8GZ6A148hBVSy5kp6gYhT7rqWcTn5WNPxj1Ri2kV4Ye1Jcna7F5dapaLQkBAF4b6SHhvzLeFiKyRN",
  "key18": "2gEPfaPDb544gcrGaLrGvEdG9HiQdq9kAy249LSyXM7njLq6tF7Pcb24FT5ec5rTUsAZMFDUmZS83ACinqfDcHZU",
  "key19": "5utQ2jNVr4FssyqiY83gtzP2HhQVcmdQD58uLdLAvF1ZkmW8B4RcMpSZmxqyMW4bvyp5KV3nKkbzVfPTYCwnyv7b",
  "key20": "v79zhzEsWmooJB3aCNuoJ3c7rHKKEkwyBnxvB1NS8j5joPHvaJ22vmHHRHm1LFM5KHvhBKysEhMqzSB37g68BLU",
  "key21": "4MGTkZFkRhcg9c5zRtSdPkYLnPYXCjXDQxRD1TjznVmjfkbygiUWUfkaKDa52JZbToxB4WmdXdLWUDK2mv4aigTc",
  "key22": "3yp8sQhcTZzeKoBvM5EhbYy9SbqdcPC8xJLp7uSRHsebtXiQm7kBYKWg12QG9mfj8Jog1NZ31wR8txgGzmPbuiuo",
  "key23": "3KuPUHdjrxyrk6gnc4YVvsYDpdsw2QKBF87JRhGrMwBFBxNDVs3oCtsVTzrkNRnagwQNzjAjR4HgQwpE1Krkdk97",
  "key24": "3SowpmHBwGvcwFcmK1F4xt3BFqZwHg2eUgdpKPQc3hSDh6NGF9hNvgfj6BvktS39neadXPCspRrzHqzaJ9bazn3J"
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
