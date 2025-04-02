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
    "3wuKKnjKkX2rCQqztXoioCv47B24eWPCWdA8Jy1mLGypDmx8fLdvUSR858SjW89VJw5EuGNmB4Pn49W5zwsiGEWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dkJ2vzXHhCTDL5vN7B8GhnPtoJtwbZGboHLCYs6PGe3hjVqKuQ91QoehPtjYwUYSnmNnrdQCWqh7oB98Zrp8kjk",
  "key1": "36oZ4UdNWAA3UM1kiVhVToU5LEzzvCud9Ccbjzbx7pg7hz8AG2RrET6TWWiKnA9jAYmeDTJ5NuXEvaFzmkrooZ7a",
  "key2": "298ApW97dLa67HH7RkQLrHt1d85aDbMZCSBdSF3CXpZ4DzjyHhLUTBbW9SoTNViQ9nHwnL7o2Xd9BcEzc89sffkK",
  "key3": "3sf6MLvYqkHsgKGkqYQknnMZjYjHKN3FhWuNsKtqSKxH1tUPNxhTXS3wHAH5MHko5kn5bVUzXAgJkvAvLWxRxKgb",
  "key4": "4uT6JVQSrDqzJiDRscZBo1mhXcNSpfBHxdwxwKPqadtoCPWs9e7kbaMoiEquKWdrmss41vS5r3toUwA16hceXiyU",
  "key5": "52yUnfKc6vcsajFQYLBwXEMU2XYhxFRJbFGrvtK12Lbhh88MU9vyxZLXHyCJD5DeuhsuDV1zwdn8eV77Ccq9vUuE",
  "key6": "2Tgbw8qdccLGFWyiHnY6mp7syYqp3HL6s8c6mJgrZfSmXSNEBhQyUAqddUSPLKukQKDJmffRfJjGGTqC2A2ebCNg",
  "key7": "2byapiF3MG7GfE2U5i1KBUhvUndeAHkozR3377vKm9Ssi5nuXooFo63GrQBdBscFUMBvgcAZas9mtz2sUYoHDanM",
  "key8": "3bWLRx5hoLtzyZnnUbiPuT9uk5KHWx9o67qCVry4PqNnwAjGqmiYmroRqCXexkT4BxHaFqdjPBjjuqKN1kygfKL7",
  "key9": "5t4QXir8rVtaBj2gjWWAKoJaYhY5exX3AgPjBCHNSUakYUThePSaZ9YGDXMZkK36A55EScbwsvM2T8n1NX39fxBC",
  "key10": "4npWuMGPVHUKnGmMPDMQqVcDnW7MjgQBaczniuL4dufCCGohKequp7vE18KJEwL8GC1X6sttC3C3TVmLc4sqoUN5",
  "key11": "4sD611BpqA4FQ9Ae5sWHBePp8WVMTHYCV1GEhSPuQMbAnkLu8ZEiLhdgwnNoH3CJDoybZtxRxZWhYWREvkYDjrLF",
  "key12": "22M3wPoN96e4Y1DxcDPn7T8xogwNWtua5xYY5zB788vHyem6zciWnigjf8SyjhRuuuQ1arVAu28skZDy1S8mCSFX",
  "key13": "3jDZpfHE7N3qRSWLkLM3R9cuQz8zS5jgi1wSmpYmdwvtmgQjiFidWne8UakvmyHyYCU1hNBEPytWJbpWzp5nUF1q",
  "key14": "m7ha7ptBDQAeNb4bHTmfWEJa2sWb1NREJG1MqDMjYnnHCGptVxyPcFhYfysPunkeiPpw6LPk1sSnX1zNWAoAmgC",
  "key15": "EXfWDsq361Z72jgdDLi61yo6rYgiUv1d3mq4tCeDbBhswPvkkJj5wqaAzBwKfBaLETbMDk4gSnGKeyMJGQq3eSn",
  "key16": "32nujxF5wz97or5AbGvTBbrDqLyeWrnvzdeRB5wZZTkkbBt7BDPBJQnGp1VdvV6wmi7UdZFB9QXQF22eSxFntdSg",
  "key17": "3Mc4rsfzNqNRUc4U89bPuRHv4fiabpGNMU4YA4kB9LRJPyUvAP7ikJhQ1UzuoNR8dmeA727dPLog2aWWP7yHKy1n",
  "key18": "1igYQnmkGBpk5YzPLNQK7LDpNPE8jAEBCeVeLyQ8XGuP4vs2XEGv8MP1nAHhhvL2zbu27Pbb17ntdP3pUZtoJ5B",
  "key19": "3GDzxcbdkUMytxkN9P6kF5ZaqMHZHjTM89uYYzBNnyD23p95tyHmL9Zc23p7UgjaQaCKttsBzxttx1mUZ64NFq4H",
  "key20": "5kEfuc7N1dDSAKt7BknCpFhJEHusR8HB2edMT22uizhmTFsHAqYxPZtctng8BEmG9wBfqYFgryF1chwKgG4oBfdY",
  "key21": "5AHCtp32GCL4yYsS2rF19zSMF5NnQL1H2aNPMKXzZuf5NkGZrbfff3mPB97akRkijWQk7L41yB3SPNts3ztKnpwW",
  "key22": "27r6RdZTHXqZNfD4oLpqwGtxYzVVD8XjeMKmSTqKmDiHFWrDWFHScxhR59ERvhbqzCscQ2p9PX8iX5q4VBN8zgqJ",
  "key23": "2rDJZtaCvuQFp2ci8A82vQThtLEMxRZiRjL4HbcSrekrVahwgnhntbNBR1JYZ6fao6XgLNHUPvUZbUnZPi6csBng",
  "key24": "65i32dqVMFkwg5FiJehVX3oKW7b3BkctyYVy3RWaV4X1FYqS2K7rMomEW6PFvtNYsmN6FRzNFTZrT4qUqXVmsTp2"
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
