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
    "WTfiRkCzocRvzvrV5MhDvKn3mH1TcjXw13oQ7mgGVAWgJgAmW7yuBmTsnGfVKNhSxyDYmDpSUy4MYB4JNNhBjbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TzyADYZRTg7juzFQ6x52CRj3scqKP963o3GHkdtzbU33U8tLXCh7zQiCMxkL2XoSB2wPk93eR4cCdmV3ydXbbVa",
  "key1": "2PnKcfmicAVojaUnm6L7KGhuTmdc2gN7dWaLJhKJyA2eFm8bgZrMQD3EXUbkx4noqWpUJyJgm47ha5oAsydx4Q6V",
  "key2": "2DoZDkQComnJSNeuHr4kyQbWcW1Cpx3XLJwBm6b6Lzdfw2MqvvuyZjaRZ2fwAVzjD3HKKy47d7ZfRGStPNFQ13gc",
  "key3": "4nU5M6qrkV95fhSKzsaae8bHTb71tiuwpdbWNb3VgWchDRQzwsL9pRVmR8LeR5Q25s9mJLYmx2q1aw734KVZFqT8",
  "key4": "cVWQ5vuDU6HxFH34iwaWi2KtsAVtsSgLnZzepzdSpQG1WtNcK8Y9WDkcTZujBD14FPvNCYwQahiikjYSXTpn9Tp",
  "key5": "5K9epxGfEbopGxdUdeSHXwtoc9SAA2dk7pDQiA6r9Pc8dpvpzuvBSFkuwAww1GFgnFVCgXJdfAq6aPCKbZbz9hzX",
  "key6": "31ZxzLog6JYyUcogHBexshYVRwcFvVH3R5KqEfv2AExsh6PV1z6T2v2A1ifvUFLpM19kZMEP744ZAK1vR2fKp1Ea",
  "key7": "23PxdV7oG65LjEbdLFfqBZHtAmNZwB6bv13weUQWuWezpbKySnSJUyfBzxEcP65TyBusjifkwZnwiMbn5xZ8gpUf",
  "key8": "3cmXMPWnyePeuogsMNoSbKXrmhYkjFT4UvBfxZjGzmxDz9JEmVkLAFXfaJrbcabif5g1WYSSPVJdowSFS1oBJEa2",
  "key9": "3RBHvhZ4CWizWbeHZLbYsvt53T7c2TPThZ4Z5xUkrfEekK6k3pm3PXtemh7QXKt6eH7ovkzMd8RQKWsiWt7CrynX",
  "key10": "42HS8WyeUE3Zoz2sG3Qz4dR7znoN8cPaeEuvM1caMBDXMRwvrd1guoGBuicaZXfKKjsk9yVFNzz8qAcrbnKuPfJS",
  "key11": "3wwC1FKPCm2TBHxjE4UnnK65inyr9CgEKGwUXtLzSvjYXdi1kfZBdJAv5wtAXC8PumHHV9SrJBvD7AWJntWC35iz",
  "key12": "J9KGStfG2TDLtnCe8uN969dFzqJdg6xMeEZ6sm7Un8QPD3A45tXR8pE1q63X7SDDunKJzPa5yoyPLvFEXUkcMMk",
  "key13": "4UCPRPJojz92bZLNK4X9XBwpvzrU4VmX47psMDWGZ75A2yMaby2sLsvczMXwzGRWgmJ8X2kT5LGuHRx8DvCzaxLt",
  "key14": "392CoeCcQz2royck9y64ovFKhYhjKX6Xyki9jM34iBn9FepsRu78xceM6zXq6foPfn2eqyTvQTgTfS6A45mGh8j7",
  "key15": "3pK6Mt5mxtoQYxfHVqPqLNxBbL4Wg31rriJPKgsVh4Y9AqHKhUQWXQaHzMLzP8ZXsUEAK6dqMAFbPTNT5K8Q1jXy",
  "key16": "DnUX4CY2AqwTchn6XvgbjhqcoXrZFbFKX4exZRnUmT8Tkgsug6VQGTexFzKN4iKAx9c5GBSzeAan9pdQMBKoxEv",
  "key17": "2at9Rhv5RSsQAqtYv5mhyWmtxbWmppjrSpsEqkmLeHfAYMP37UDuAkJstR17cZfQmEztujXz2sx9iakpchskABTk",
  "key18": "4w2Aydsw4ktfuiiEStEHKpGNznCECXThqxE29Su4HkgNhE7oZksuUzFowiXPrhhcjLvwdZybjsNHhPSdczcqGgz1",
  "key19": "543RxpqgeDTekRkopwvoUjRJRS8KMWsNhZeFSHCh6ZJZEVs5M97XsPxGrTUBn6mzr7GUXSvpzDGwYcDZrv9WV7S9",
  "key20": "2vqfQ1pMbiEJXhwz6RnQebbJz7H81eFwETSPfAWvf6ewSRTj8jSjRjkjBB1T6oUu9LnrJ4FbraqtxYzReHygqzpW",
  "key21": "2PdyfgBwWsyJurAGzzjEhQoA1cdLNRbrLsQFXUX4xQJJeZABZTnE5pDug6MpWTg1ZPGd4YMgkjcGFRkZd7AycB9B",
  "key22": "4Lvy7uixbQNqfCYaZyeoHYwiP5SbaP32hS27wuKppoFL4wD4YDW7k5CX1fo52oxwbWHrZtGzxPYCc5s2VEpuzouM",
  "key23": "5g4U3fKr8pRQ75BFxteYYKtWGbdA222wpDxjfCghniLc8TnAhxi5NhB2hscSAmu1xPsWhjmWPfU2KHH4QJ1oCVyU",
  "key24": "2X9LcRKUERDpXmBu7rBPnVbVBeGrmyrLAn6gVg948ZYzppzZcLS8WPTYxRZxELKbXfjM53Wp4UHXSxeLaCLMWhuD",
  "key25": "4YudckzeMnXNWX1PrvXJgZFkEs3aMM8x1mrgAnd2avMqEAEYxCbv7aGgQVJaebW9WNqsiAW8W2Jb7e1F4KtU3g9Q",
  "key26": "5q2DMLYqbKV78L4GeeY47dZqUHm7KzNrKYFZBrTdmuZ2cJSd5N5PVjTtym8fRNZc9XaSty5L2j6tGEEbZptjfmGF",
  "key27": "xkaxhoYJvp9W7xwVUGwiuRvWhfjVzn6CVgRB1vsiduBfTr357cwzVRF2HTCAbPBpckfT2kYoByiZNVTAA3oYUMa",
  "key28": "4J4CCMXwUT8qg2cCRxdBhe4CHa3sXt66PBZmPLX8ir9dJUiGGDceystYAwgL1Txs5UWp7sH5Ln8VTK8A552t4q69",
  "key29": "5MKLUrwEiEPu95HASgcDqUoxQbkJLTxVxhFAmU1JjVEHzSbqumpTVRgdHoRR8ymDW2KwakFfnNHc8JNf9RMDKoMW",
  "key30": "5JaHLFHrG9pccsgRLktNkG2RR2abKLxjsjqYrdDohGVnuLjn9CwADHtb8X9MRzHX8nkX74uzxBMTaQHeBRvJGd4H",
  "key31": "2o6LJTcQ2fZyHnapgTdFn94Nch9FVfsZEkyzmMJLEKY6RfJBpwxmXNf7WBaLbZkksTnStMVTz6dq2RtHwHSrja9k",
  "key32": "5jAetWxWUrWRnxvFqonuRdoRfU6HJsT63uw5YtSfpjfCsAzToGEmotNCcv67ZXCRJDNUvmAPTfzXgZJKZf4w1ttG",
  "key33": "jbpJRty7teesN7T7gp7KGioZzZiFqMFSosV6YcLowJgatwUVxnMt9tQNoaF9AtiDmkbUBHmisA8hUHCWpGBYkiy",
  "key34": "Wz52DVzXqRLuaoFWbaDrB1a3pd61YNSKp1DR8wFvrP9s2tEZ9GoNA9hLRVrVFe4YKKCUkqNedzKKEHHL5PmWBGW",
  "key35": "2r6gqdM6XtHUx9e9D3KVf4G97apWMaKA7P4dEgG5FKt5PLxKeYVMvM6FeBeTj671RDaWeRsnw1uz93HyuKW3KuE3",
  "key36": "3zZze2y9noNCNNbzDjYWj4xFu1VWyiKDkrRzNVX3vTj4DRpeq73Euk3jhXXDu6tzyVsEfoX7WaQtwJye7jmBgxYV",
  "key37": "29f9s2DqPyQgsoc5ibcLbNiqmpUqWwn7BjaQnENieYpevAGsEVbLDciC6hnrU9kkEhexPQ2Rx2LEFqH62wDofRzL"
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
