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
    "49gqVKFtWoofXL6AWkDTuscHrkiSyv4n8vKhSXAHQf7gTH9WscgoMF56VyoT1xW9nQFckd341J6ozSySFPc6KXDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ytxuLctJD2f1A4Y7s9DKJYSrW1sHNRSYnG9Yog5jpyEbJwJemNAAhuKLpwwVJduZsw2t7MLjSesdKgoM6woeo7L",
  "key1": "4yoUct2YcYryAsRefwTfGwnVeRbMzsGZUPvCD7wXxnEj4tDhEm3eu5rWjkwGY9R8GaBwuS3n3QXF2k37o8uyedY3",
  "key2": "59qckZDtHP8KBQP2DfpN3UtEprks6tR6zPyWG85xbpywGtLrLZnp8N7V55auEjgjietfdYDn5k1xQo1wNkiM58hg",
  "key3": "5ZJoSS5Y7zUoegtNNdbEMnJY6TgeNYyMJwanU3Qgi1UkH1dyRWu5Wzn8fgiVfHbGd9X3kaqzbb8ao7XD3rRKvdJd",
  "key4": "4MLCEzmfU4SA7y3F7FiXhu2xsUYJp1LEL17iYuNSC6YUMXy2q4vkBdJS41uWtb7yzx7qEpDL5ZDh5deY8r8q5u7N",
  "key5": "bUN5hdGzuMKEzwvfTQAx5YmS5V7Bujh9d63J4PsqhmP9S45V13YJLyWioeTEuApfrzrwk75BNYL6uLVXJhrvHET",
  "key6": "3F65HQbTSygrbUf9NWm9ELCD2X945t5wXEAPGHyNb5dvx9EAcPYn9sCqjt6GpW5JCH1UnxQbVeJcDEF2Xho6muwu",
  "key7": "KMVuWzc7g1CtQhxVRySqpxQfFqd5Bmq2Fjh7HU2Z5AER3Q2pFoRCPMSrNMjT9uxV8NNWUjMbSMXt4sRBE4ry8oo",
  "key8": "4StAiJ5T1bp67HNuRnQTkN833K6crDjMVWKMifDFHnB7VBU4kZFhGuZNkyhaaoYSB3nMe4TDAUjXhKc9tnfkTJvb",
  "key9": "4KQ7qvdMUUozcue1jSGv2nCQ4sXzRrdfBrA9Wq2eU5GUziWy4WgQKnBRSssmXyczqt67aCAKxWtVa4aWfZVL8uLW",
  "key10": "4sCPtq48W8paeunyjcTK2xay8QKT9GKm3a3fDUm1waPy1JtrFe24udADndmkyPyfzw5hoJNQAmK61VPmUUTuqkny",
  "key11": "5nYjGzLtLj1eFWQXyorbjfh77xQgdL2prhdCWK7Yc9tjzWacwWF51RAJsFUxyxtN6hypb1vy12QaTViDkQsNLy39",
  "key12": "8hRHbySDwdPrnjtaSqN1bDCUD71EvXgxfx5B3iQPeNGBbABHa1qqCUvDupu36QXGfwr7sSNm6yAUEs5LjTqcUMv",
  "key13": "2wcG6qXnyqfEsyH13aVKT4GzseP8MBq6Unpi1EKa3EhQTJNjyJMpeqxDfvrMdfSUWp7J7kQLxG8LEckPfskmUkTn",
  "key14": "RDqCMVweJwPC5ZTteyegAgELtJ2NDQ6pWcDMcJcanXWMzG2dHCQt2yYSWFvzjNBJ1hZrMHFQtUbUCpvtjGNpsjK",
  "key15": "4yojmHR2UY9SoTHZRzEqH6cpkg9W3ULRA5xL1gVbfgkZq1PPwm7qVZSmoqWmR3WPmL55fz4ejWnjsn8txtWehJ2k",
  "key16": "5FVnvuUJYUAiJb2TfNw5wYRyVCean3DbhRA346byHikP8ReqdmgShPz9VwJAo6KQH1cq2LWJQgYKJBFTw47Edgq5",
  "key17": "VnxHRREcrnVHo1FUwVWPwdvzD4RSZg9iUsE2ueA8p3QHPUsDZq7QXezVBF8sKFYZW9yxx6HZgP62HpPfrVoaRL2",
  "key18": "5K9MJAka3h1sg5TVcKCpnhK3Gj2XNE82akEiZ6ramQfF79HHBMNdADfTHoZAJp5FPhDrYX1VSWuQSehUTX2unB6s",
  "key19": "5bfNpZySRXUXZuZ2uFkxS1fRTWCEQdA1DmPrM2ayj4vE9Lg9rUpbmZkzVg29R7mEnn1B7jEjwhhTfbWQ3bmAQVtp",
  "key20": "5MX6BVeDBVD5XwZHN7Bg4WK4Mk7dYwvA4fdyt792mnqurjY9W3yo4EP661CqKRT7PKMf12Gah5tKQMg3rD6s4aBf",
  "key21": "4WvgfVkM1843YQEkxarqsyLVtZpY4mK6UDHLuuSd9ttBVcMsQUq72VdqK9a3e7xS6hXmn5pD9DxWCPap63Qkssrp",
  "key22": "4YyHGF9PD5qSxWtffub1MjGaGr3YzSbsUNbKJyPiBuTLLhTnzZGswHRmqmJg6EQ8U3QM6j6rSuZcR6up6c7BURe1",
  "key23": "5RfPNFKJdLahpUYJEetM17kbuwtgpcJqCzSn6xY39jY8fKBNDhDvNx2GDQJuEemhSP9pTswXNgeqAK7Xuy514hjF",
  "key24": "3wkqKxAR8SncfGBicWcRQ1XTWNYpxTradue8nBxT8yZq29MtfZZh83yDLhm9VMu4P7ao2RKHKUQ5mthgZxitxG5J",
  "key25": "wRZeuXKY9AUbhnqcBMePCQapnkacUCrxQhCYF4bB3B7wLgzo7VBo4tjDSkUMF1JXVAZBMvAsK3ZFhSf9Pn2EtNT",
  "key26": "5TMABfLFd7rsxGVrF914xcMeDsU9R3NSLPw5omw5JDVD8X5CJjJVMLcfk8BQQRzxvCsV9Tz6c9tZoeRvMyeAffKE",
  "key27": "wuGkQQPVdqpmwUp42URRUEbTo3ByoePJQS89QNsxUzn1mpJeHdfU66cnjxyTsfsjGpe4mitjJxAYusFhv2KPQ5H",
  "key28": "3gGxhU4gai1AWy1zaYGWiiLuLnmmpCU7V9wss193hBcBuufekYZjNTyBApJa5nsLQ3hykResgrHT43QVgmxCmheJ",
  "key29": "4MviwerdioJKvbP1Lv6XsKd1BZjk7UNzHE2uh5rCVwVXU7wTzRaZWEKjN6bXpVCbpQ9pFgywbZZPC2tJJFFy5mhi",
  "key30": "Gi7QMLGUFSDP34p9EJug43TNAfCYtcbKsPxDKT3vEQy7RN1bmgPfsRw8P2VpGnwpEFPj5cD9aT8EVLwyJgbaLLB",
  "key31": "32nuPG8iX3YeF67UAhZGSfHaGFCTSp3E5XWvzU4CYUjwrDqj3tbZU5WXGqN3oorVqfAK9A3AkfGFbud19KGRD7RW"
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
