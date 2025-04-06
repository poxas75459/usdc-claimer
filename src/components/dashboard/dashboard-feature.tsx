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
    "5DFjfQSdxPS9ifkoXAZjeypXjEV4s9jtT488RDQhH1C7n8QTC1ZtJikkr5L1qS1JuNuiKfLqwFsRUwEQXuTM8ro7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B1EKXXJjxSPtYa7wocgNcRwd7fGJxdbMELu6qQZ8HXdpWT82m1EV2GHBXfvcsXmjEmiNR1rXZEiMifaNpPfTt4c",
  "key1": "4acsDkxdXZL6P5a47K6nbNjVBhWFP73WFh4Tnx2RL9bBeVNvmeSQXtrxQvoCM7yefEqVny3z98x9DNqPkjabYKZe",
  "key2": "4KkWN8DpaPLK9W1KCZarUqYqU3tcNY4sga9bkMcSaubiEe32DLzGKmiaqTBQZnnD49STKozgKyxUk2yVubovNHdH",
  "key3": "2cdVtzXSynRR2UTGsja4TMt6NUhkMErUa4jiUFRDiATnie8iABZmS8iBNYsBZwPz7t5JRB2MPV2dPpJDpnrUV81t",
  "key4": "5sGfBbQtsEGZq1KYXZV6fvnsmcePwXdMtouY6txzv2jRgWtj7Ay5QQaqxtCZuxB48mnrs6daM3BxhmtdBkR4ZYfH",
  "key5": "2tDjug2cJakkpMruNSwWQonrgXvGRUGCqdYbHT37jBYSPNPA875dXtC5uNTcgnLUkDDDkuqRTn7q35G1Uuj8kxTh",
  "key6": "5qTpcniBcd3iTvbXkdEEnQdDF7ELHGZAXaXPyn1P99QWabjhbEE1diGWtT8CTSgXVNJCF7xUzgeZuxeCtpW5tmAf",
  "key7": "TS7E8rZFWKEyJb1qP1yeXgXFwcMBLz1gANLKgjt1yrD2R5cKy1o7rJXRwSnKs5WTsHrJECmsd6SUqKjUEA3tN88",
  "key8": "4NU6hkTG6erANRrzaSSTb7oXJvuYwLGaeCcDMWnTe56oyvcjkhAB4HsNWHUQdQgor2gkvdsdF7DQiuhCguviCWT",
  "key9": "3qnk1fnyqZqnSsz38DRpVByv28XkWSoGJ69GAYKanF45shSmWsbYRXnj6wfTYJ9qMUvfnt7wxDbWNrshAGqLajpn",
  "key10": "2krzCR3gWSwmky5GLuTLoQbY9vY89YPDHnLruTxGueNCzHzmAdcLJM1okrmHXEcdk7Ge7VyQLsEPGeZXx61FwUgx",
  "key11": "5MDqNeFmLUPUyeM39twcRCfXuXVBZKAB2R38r7NzmJQYhwCxinMhsDXUvzoHte5GyYjCPgv1bNGYT6mpXkTmakTT",
  "key12": "2QQs1fHqhZhfifqghW8GQXt3L2fG8GajJuG8k3bMPNhkg6PqutkdD8BcFfixpdnUEznDuMeYFrBho1AjHfkc6qCh",
  "key13": "2wgHek5sYBvF8JWcwn8PpPV3No3ehJGuifRBycrU5u4PRZ9KhPAYGktywzuYhLLwrRnFGRCVR1igxof1qyNH19uL",
  "key14": "56E63GYEWoVzZYGnq31Mr6UJuc6jG74LDPZm43SFRQPvmXJ5WXMYrJk8imkTcQTaduu2b7p2JQ14eXz6t6XQgypT",
  "key15": "tEy9KexWv6nxmvv4i4Xk36ori4cyXwaQxj8EGxPPaxiSGokfnkkkLBK9Na39jMpHA2oKVmzDWaNPphkkfYq85Ev",
  "key16": "4dRWdsfguuirShg9nPs5dnpAuGExaKEZUe5J2hvjQV2HwWrDaY3m3eEC5FSqAPYPcckdGfQRdqxb5Jt1QRFixPAQ",
  "key17": "3SuszPCGnjhwmjMUbNcakUdSWUqo6QXkqjXGaEUpjxrM5DdxmmDux5AyPbdqcFbywFkXUQojEWTVQ9L89ZwhwLCW",
  "key18": "VTmA8bGVP7aERPACS6aCY9SQiZuuizwvJgca8RJWACtBk7vHhNzMeMmWFnLg28NbZ5z4kDw2svxr8iTQjtXBzKJ",
  "key19": "2ykCsoUosSBPrxECUWCKErPHfc12e2cAZZCYqT1EohcM8mBZ3D4JbvpsEEAKztEgpwesSy2h4jPqny314TX5JmSL",
  "key20": "5Lw4GbX3wAEAxzFqNo7bZztwmjpabUDu9X4hzYh9wY71T6TPsvxzJwYwxD7Uc3evCYqiQCxwmQfED51S9bANheqJ",
  "key21": "bunm7QTRvHPdpoJGpJ2zg1pFvkM229fX2cttDcSKfyAWi7vQGi9QFxnZcQVKVHAnxzvuoJ4qgeSk96KN8vt2kkr",
  "key22": "5Sqhuz8XXrYZFz3VzWZX5RU2eZK8QrVMJJuJp2rjpArQrcjGvM1KREBRwEVX1XA7LoCGaj38Lc1Z31akadjokXhQ",
  "key23": "31HBWRhiXUDtGAPYx7VVS5E7J2wXX1nErXuytzke8f6k8Qr4viKmNBGytxsb3pUh6hSrRjCtt9tcdJ2wzAPjX21h",
  "key24": "mrqbqGZywSDLoUPo4xYE7YEtu1um64UsxQXStrRnJN38PbFuP2S9cn8JcKtXJK2LUxW3ex6WZX5UtzVdGLRaoZX",
  "key25": "2UoyKxqxSkyEsCk6L2VRcs6NXCBvJHQ9FGdFPBJJPRwASrXfCzpRkbaUFn1bt2nEnbgC232aY56A7ueuwUmXTJCt",
  "key26": "TDScMQ4EPUTSM2SDZkiVr3c9AvYKdWeHu6JBV4uexyikjD3mE3BpxSnHTC2QKcFeXU3UaGaoA6wLWm2eupG4aKZ",
  "key27": "4vfmJfUovZkneNd6RV4fkaQnXC4hiAXr6eMm2WMhTSstFTWF3rpgEPU94tZgHvXiWprZYKbJTjZumZ5qfaa6AMGF"
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
