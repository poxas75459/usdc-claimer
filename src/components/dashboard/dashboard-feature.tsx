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
    "3Gk2UpqdpBZStFJZu7ToSnVj35ZvqWBjBn7GWHJvNBX9eyyeEbExnugpBLSex4uyqSrxt6zFyHU91ddiWgwJuFgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pT3xtwmL9dqPprjyR8PWunjU4bzUiN8dcy4Uz3rWPFobCo18QqufdH4goPHsx3FcDXxxin45v7kES62271jK3Nd",
  "key1": "37YtPtCjusZGDbzc9DTSLJVToNmbjXxep1XuPdu9wKmsz6zaBjhpudz4sZggvwsiN9he11dBCsjhzxGqoWt6Zr8Q",
  "key2": "4Bs8WAgoK33upTMPZh33BnVRFqoG7wsqHhqcg9LSFd1EvKXtVpogo95wrGNDncRg6dzWmycCrpFw3oFHGfy4Nmfy",
  "key3": "5HSv7sJhYk6bksYquMSzYvEABLrGp1VaFridvQUNzReGLe2Kk6A9sUspwgJfT7KjW5ZFg63VFsoE2WngQX4VzTQx",
  "key4": "2hw8QeqvZeBLttRcw1GnYR6TJwYbxS51vDzPH1LueKkRwAhfVgfvNwhs6DhLvqXdrspNfxsXv2sLoJnMQtBAxuXZ",
  "key5": "GwbbWzDMtoHtHvvBy2GQ9czTn3HugfHTeaFxGBjXYXXBFy3XtdKoNpZmtUj9ZS4bgmixpUpQSwcCWuVo5YraQaR",
  "key6": "4dzJAjt5R5UHqDR8WbwbZecZzVsUjHT2kkkHyae9zgVzPzxnprG5TVWQNp6AUHuKT4gftxvUFEKrayxsdvs3CEKR",
  "key7": "3fzFcT4P748ThMXRWXQ2dPuSSHrjikrZo1T8a9GCPrghE5MUpBd5mbwLT4bhnadcNm8CcW5aK1vch2kHEwctKnGL",
  "key8": "2tcqxDZCDYyWbvfYt85P5nrQSmynrPs19xwbJT5h3k2RUsbw7Sxn5BSZKYxeAfZB985pH88e9seP5YeJ4fpEWcDM",
  "key9": "2msxMD9PtuVLkZrJrZKTyZLgTyLUiHXhj2KYQ7WiYDnjyKAgri99g3nVbDpPGGxQsyYw7f4GJxkeWJdpY9o4s5nN",
  "key10": "2AYAnABTVkZnYaKLqFo82KcBsEHFSzAqJ7tTeAvByabWpBmfFJ6LcaY9GunbsVYXs9YLxt55Um4fDZuBNrXQeuif",
  "key11": "XzYVZNnMepU8QkF6uegfhRubRYqqNbPnQ4hokSy3sP2sbCg1CYpgZKLvjrxZ86FpiVwoR1PaNA2cwjsXtHZM9r6",
  "key12": "3Xn2MLGWLQkgyxTEFuAMkV8r6B4XfyLjD83P95d4RrDMiyWcX6QWwCLoEksGPoJpaW8EuWL1mMNJA54EKzcvAJNA",
  "key13": "8X52G7cvFrBkHLZxd4isFRaChhxmW2DBcFRZFkJT1NVnerhVCA1YP9AEPHXzS2swQQteNK65M7REmZ5JNNMZZEa",
  "key14": "2wZCBjMdwgcZvyRSSRkJZmSjuWcCbqBDfPt6kWtwbuXKo6DXxde5iKSQaC7BevaMD6fqx9d1jQgtyUXKKyyvRtfz",
  "key15": "5SJ5JK4RPb2Gvuw2sZsjCNHPhV6hqFZhVvnSFKu8DczsBqCvS8QnpL9P1WZwPeeY83D9yPb5kJ7RKRjv3zbw1F6j",
  "key16": "5E7Ci7LcxB94WVa8dGtwwVpZgJC4yPGdDQkNJADVjFDwU33fhSq3PxqjjdDS7kEs2f4HYvzmtCq5a2SgiL34mmgV",
  "key17": "5GBaBFF4pLwbaSMu5Ny9k3PmaaCpNBNVz617MJsj78bjyp87AwY7Q7NXoibZw9fVXbaM9k476M6pcuYZ33xaEZAJ",
  "key18": "7t4JPBm2YGAapQBzidb5g1ZmHXqc1VuVcPtmkJPuYsoHpbDBHLoqqwA5giPkD8CrS9A9MUGVrvoM94sLBEZY468",
  "key19": "afcpk7CPcUxSaKR3PanMqwFU154RBJmJX2o2eHH9avcZdSkt7TrWJMB1tt4AW4vS6cjvrNs37wawhBg5rUdPJCf",
  "key20": "3DkV3VH1z5qniywT4sxpGDkUs7B6qsQ5DnmsHFUqZNzLs4HF9nvoZj75YFwzPeFTB6QL2Sju3iC7eEof14CkoAM2",
  "key21": "236JiQur6xt3rxr4XBRhc1cTDe3WmX4ax9YMeWNgWTFqiJR2YZ1sTfhyg7TNAAtG2VMGmnGrKCsYCqKjSkdNnNUr",
  "key22": "2EFmix9ZqkyU7bmmxWduZ7XutdcH1dGLi7wbpMi22uZrEsU9869XP46PeFxTprc47czcQf6h6BGLUumPoJBTpwD2",
  "key23": "56hZY8wkjD1WQAxqCpCeMBjiSPfYVQ17fSAMjgkMGxXsFRmJnDMvzXtHzyZsiec5rEA5mG99sN9R692PCdGZDAoZ",
  "key24": "2Ehm42bVnLaSiLkURwetwgiJFQvvd7aEj7DczM3qTbXdvXJrR47hdwqaU43jEbhVuMkv2TfcBrKaTDewWCc8cofn",
  "key25": "4JMpNihUqSuwi78vYDAZNcsEFKZqno7dWTX1UXKBEtFPVoWwDVKY4TPiis2t5vvKHYis8wYT3BafPcfX3y9rRMNc",
  "key26": "2FXEJbfusNiscc55hw9AddJs2Mm1EEmk2NC73Z3WM1UdXpTLurAEdhKzWDpzHozbfgX4SRf9Zs76mRfYW8s1yvfL",
  "key27": "5oMJSQFsDsajp4P1qaZzRTfkACYBMNLneHvEdwXSHoKsRUjVq21KBGv1s5qgNAgiboUt3a6jMcMtQ4jyESCW4AgE"
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
