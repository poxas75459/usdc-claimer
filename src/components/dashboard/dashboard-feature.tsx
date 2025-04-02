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
    "4uG5KifhKY5b54tcRXFpW3Z6cH1uP7btXwuZQyQWXPikZBKf6ygRNLdBLsdJFQR21ydxFsuNQzCCURyF72Nk4t1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ntcgEowAoP8DbqaHE632pDtuVb7o4p3A1fKa1uC2Q2EwQwiNVGDiYyhTqXnyqZTLBdfyeWLyAXr1xmHCeEtZqq",
  "key1": "4u4yiXM7YgQKgKw5jgpS2QtjGSJjHtbRsyvkTWViDNX9M6yZTLmwiBrTVgbMuvFyWGfyUF7WEzcpPeL1wbXYvTu2",
  "key2": "2PUDySC95ogMEyLicAHcBkBPTf6F3RgLgxnFi9KLYGSXcKBGbcfnNKSpXhHi9aZzMYtvRo15s6SDsEq6T36fNPf7",
  "key3": "2mKibKo2EBJSAgwxsbkwLzRYMWxbkFuEudijCSmhgJg3NJSKswH4np2rcUizta8w2XeY6XQXFtezo5BFXJ4SEgwR",
  "key4": "2FJ6iHV9txDRMWCaF977Dcpj4uU877q9iaK742MQyNYu1MYyZSfCQ2zU1CGr2VYemK9itkrexzx4LY7wo6RqR5b1",
  "key5": "Ni9kdn63nzEcYHkeoVbexu62ie7ng81HizWtX9Yzwm6E7PSADzqokqPafEfaYruUh7nNZfFDfRLENbf34dAS4SJ",
  "key6": "65VAq4RmmL1zJSJVtQQg5pNbas7m1ojE13EmfciPzZcowrrKRKjvZF5YnMuP9yocfaAWTAk4j5i5rTovdeJzsuSQ",
  "key7": "5vWZRUf1rdECSgwLpHq1qRN1ieEW3cMJoFhkAiTkT7uedNZbH6QhTKCLkHVusXd3cMWu7oQxJaqbgpU73yqQMuaB",
  "key8": "3BaLnsYVH6uUmXjZAwqKrVmrcUMAnzbB1ndkenXvxfN4r9DMAk5eV23co7P6WmcJg6kFRrCVpNrtNn6S2MGmRSEt",
  "key9": "D9JbUZjZ4ACSCfNrMvHEoTorouZF4vLQUxn2BgAxdrEVvAffHLjkkbDT9cBsbzDLMBAcg79PLh3EQP1X1nk8GkS",
  "key10": "43Ufs3Wp33tUCe8qa8JECGgwkFecQKJJ3CUYVdgh2qtHKgqLKSudsdRGLB4ja68fUVFREPuFuZNW5PQqQpfHYxzZ",
  "key11": "5jUFeGgyecbePa65E4B4N9ubyjh8jmEqp9e2k5de2waeX6ByYPWxxNooiuNHDT6dm2q37TxMAwmxhjDw8YneBcaU",
  "key12": "5vNX5Wv8RNgBtk4BfDGM593EqJYUQe77b85r4oe6szHDWvz1LTkHtxNDdwxoTdh4CMFJqCfHDVF5kY5bbrFk6qpM",
  "key13": "EzcFdJNQzhXQEQdumECLDHS5nq8G1D4F56wro95Z5FvEzemzWiRbwymgDDHmAXJGynyr8WvxpheMjJDa82DNiXs",
  "key14": "3YtYcuQAU1vzFocBmzxdnMyCThuzMtokyV1TuCbAxtGi38m5Wq31XTzu857rvHn3ke1y4JT93ZNrf3jZ8YVbEGMw",
  "key15": "3Ws74k1Sv2j7DUHFguyTLN6M1U5pbJGrrDKUiubL15caqJ4tohBBGgEkfw5n86u7wqaVT2YDPSCr4Ebj3fqSLqzk",
  "key16": "5JX2XzUGcgpjJ5imUb6F9hRFcPTKRq4PEs74pewKUaQKF5UAFX93vGLrEGwxqcYpvYcSD2K8X6Rd8iCoqZzcHKZW",
  "key17": "a5n2bazi6yrRPuCuzF4mrBGo3fSFhY6rN19YXGZ1T9FXGQox5SGvZmgVArqsxaGxnHFq8VTsr5sPQf5HTWE9abb",
  "key18": "bvkn8BLjKswbcRTJVYinqMzVQ15CvrNXX1A2qL1DzRrzFqGdN9sxx8EAFU1kWrWja7uEZm3tJiA7ALu1tAC6t7L",
  "key19": "5ScnZfAGXK6rCBawMXpEiQSDSH5o4buVW1CPowCukAfBKaVaj7E2zoPCM9j58E32JBcTWCuSsv7vhAoSwfhfio8r",
  "key20": "2jqSwWVfc4i16k1XVLzCMm4cfuh14S3hHdYoCFerWzdmZpM5fhJesGHXF6irc5adQujJoUFeSiPpam2kWhwjEGo",
  "key21": "5RNiKpZJSKR5uMDAQRj5959yUDFdRV4tS3QnFKoE3hys368xAdgtK68BZwR2VEzUwX1SS5CGsNKnqEEpk9KHpuWn",
  "key22": "4ZwN3hHvMRyrKA1ZphKYZERHfqd8EGnGeBq8up28qQUvja99WmkikwEt2EUGDamTwg7fGP7fSatVVQV3tiBhugXj",
  "key23": "4JNFR1EWFUDJa1tfZscytPbPpqKkqWnd5E8FK68yRGDzX5bhUVyUE236QvS72fuubrvBGXwBV7xNvNkwQmdGPrLN",
  "key24": "58bYQ6JQyPnVLVyPZ5oaoYBc1pcc5beqLGCNytTkm321ZYEPNeNVd3sKnoGPYsqv7eUUMjWpkbfQMQM7FFmxKq9i",
  "key25": "5EtrQ8tDAkriLWoYMHd9xYxwoBTVd7C1sE6UpnW38WJHFjLpzcinjq1pGUCMTAuUvGN6LuDZDZMf7kEoWn1k6BsQ",
  "key26": "4PjFHLtaa7a2xffKtdVkMBZwLKZrra34XM2Hwgj5aWX9f7LcUnBbtdsEwN3wW71BZsYdWFiticr6ZfNtya7kxSFn",
  "key27": "FA6sLVBUJhW1HRgEvrewA2Jc91rvCLbknNXoge9FWMsBpFt3P4Xs3iyFwG4LKt7Z8a7D2vxWeYtrNkuLo6d6eya",
  "key28": "5jtLxqU9dRwYrPkzKjNzqjkAAyoKnFq7xevFidnhL6i3WaAqyJSdsWirm2pBbKxXFS87pgbGrazFFGaqxn9Ji6V6",
  "key29": "313rL91ESD44y7dwLgx4a9SbC5hAzqbBdNocGXgUnf2osAE6NwkvhGzSrMCJKXmPZy8Ah28BRL7epc78MRpH3Ssj",
  "key30": "2oE778augRhXsPU1NtDr2NaSK8U72FW5KC642iWjhepUdGGDPTFgowrVoxnYojHuHhk9wvsZXymCdZcaFjgGDcu7",
  "key31": "5WvjUcKmsj4dj3B4cD8rTTEvPzWdvVeTn28C9XYm1xD4BHA7zHjNbA9X5VzJMpDmgwTASeWRMJa7Rwobob19qVEr"
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
