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
    "5J8sN6EqSowpGt8d6WfxMdq3vohUb9GwjKQLrUnTBvVtaLZmUKxjLN6XaZHYmrfEFvfQevDqPhNMrRpAWdPUWDGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YWjePvbP2B9XL7FvU433BzwoWF2V6CQ1b7fFGXc7uzFKn1kkyiP8xkZwPVYCpnTT8BnWdxZbXjvNpSqhHgJ4L67",
  "key1": "3KhKMddFsxUg4iwkDFVK8mwkLgnaWrkQXJh6YEQUf4gJJBoSwnDErukbjsWosBdLhPzKYBdvWhroTrEtzaaJagGf",
  "key2": "63S4Sbx8X2mNrpp1npYfiG1bcexJk5UNQQ9zqZ6cNSzErqiRo2EeBh6dFsQGMf2du95uYFhiAvxCocn5KkzjNqvL",
  "key3": "5Bz9n8DfjYcYTJmS58VFaL52zQRTA3uThwgt4tcMMcbod67wqPtqGLRw3aXzp6q2bJXikmjQ1CVzD6f9dH4EK5Vn",
  "key4": "3qmYCWyokpd494fbi4VDDwMTiTqb29KJJbjAwvDSoar3U4xZNtdkn22yrKH211jtx6NMVMdP5FdtQo2bYrdYxyL2",
  "key5": "3eE4ezqJ4NrVcFi33uvmmwjKZ7G9gvaSJaw5XGaSkHrXamFJNJx5UXarZyWq9MVgSyzAVzo2jd229LKqZrFvALiG",
  "key6": "3gqEamqw5xjsXXLjeXK8gS5cyBV5FgkzczuUd8wmLvzNRzMMe1AkMdFMDPyHvHCu1ymYa6x4CrmoMF77yXhBiyb5",
  "key7": "qX2uo49AixV1wptdd3ZgkzYocThzr1J3qg7tPU2T72iprbH5JX6AkbVSNqgfTTPxw2HoBZLE1ZhM6gokXE3rcb3",
  "key8": "58o3XrPBQQWp1zmJBNmdvauJzxYKQ5QAEaq3NjUtwNnSTAMR68xm4uW8GSyWbDsW3GDaQGYMqB3JfYQiRfk8fYoF",
  "key9": "5jn98Tz9P4cMjupQK8MtjakKkayjs5P1DhHr7dr2VKCTCU6ZGriJVhJFvaoJEARTG9C4EZxdZ154zJkcVVAf4LE7",
  "key10": "4jEK6GRrfovHgUnMYwPZbCNXFtE77A22iP7gforvHAwS673MtqsrvtkW3QBQn239VfqSoSBbMMVGugQUcPRUjY9G",
  "key11": "2gP57LbtLgShQuLAPukVL6ojtjyhFWvg6RZVJcp4gms9mbLrfJspp4Xfbqu8XbaR4d3yzc61ssu1DytHjB76ZUBU",
  "key12": "2JqMHeFRNyLBuwwvLfcFfrLXSWj7irVuHj2DhokVefQJ79TCgJNp1Q1rNWqp3HiBKcT2Tx7YAzB6UDFUGaTfAoac",
  "key13": "5Uq21veehwPWRJvK77QoUBPH6mUXXaAVAFTmtjNkgVS21vPF5DrTyX8CfhgGHjotpZj27iH7To9LjxQmMgqX8Qv8",
  "key14": "2DwsZ8M6RGsi5kaNwoiCb8QCZPQkfsQQu9pFCdUSqWHZgpnVsvr11uWWG7g8iDPsDxLMVsTTKng8SfM1pUUczjUs",
  "key15": "4EmWuCwfGj9UFNME5CbRcerM8McX1Q34NC9h5psWcoSHNLY1CnkyNaGNJRJ5k9Wyqg9yUT4TCjiTVMZzoihYS2jJ",
  "key16": "jakq4ZcZFoEik16tRwfTi5psrLQk2s42QHxDqwPVCHdnnznuSneHYfbnHFNcqPBPvhWWA29CDLuRo2igGuP4ipM",
  "key17": "21iS1CD6ASF7p7UWfyGCvfXcSVFH1RAzWhYypvpGwoQ97EHcZh3UUvJmignD2ZTxLQx3CCdjtXrzpRyPzJPWuk25",
  "key18": "2P1SscW7zRNAvH75FP8kEh1ScXWx8CfeAWHbEsYaQyYPSWcwX6rUhsRJojgqZX8NwpLGh4ucKYnWKT4SUHPe8i6R",
  "key19": "3gMHnRbJHhhzxXRya3u5ZossKRBXdoSePmJS7Qaazfw66R3Y7Ep2UikLHfafhXRty2D9UfHHDSYFGKopfaHDnAxq",
  "key20": "3QrH9Rdg4WSc1UiLP8e1KZFoTKHFxaB96zodZnxg75C8gSjqmUNb1NFeBdVzTDqfUqyb4VZPVqaCyFkNMWW87n7n",
  "key21": "5vD9dTpL8YzKXNyVRLFn1cf8BV4b6txmgzsjiVW9HxtjB2xRvjmLiembcLdDJ7cGz9zvkjLsy1NCLqNVXCEQzRTj",
  "key22": "52w4sJZyVVNPnAPXjZFDJbKFQH4Er5pwGQeU1UkUu4tpXtcfzK7uhpQvQGRwidNq7S5959mV2PpPoyFLy5CJ11st",
  "key23": "5PVdk2vRJdn4CM7KQrEYiMKUcuZJxGVXUUaN7yN7ySh5LiFZ9BSxJBYjQq8RWxNF9P7t4RLA2NPgjR3JAQDGWefi",
  "key24": "34FJsBmYbh4cuWxj6Ep4guWZoWktBjXSbhpmoxiAjk9UaddPGqwTn2kEkHzA7mdAsNLkbjhf8NWQZKxjnumjgUnn",
  "key25": "3tfwAqSaqGmfNVJKvuXLrPCA9uFhDkDPJfcwbmka9vDE7KZrWpHfZi1wjtqHhVAWK4SWcEebHwiE9TTDJp9VhmGk",
  "key26": "246yx6ayrP2A1nV3dsSZ4owHp73pXoKjeJ7uu3hw4r5X1Agy68KJTiYoFF7zrsdT41EY8ZPmiCjA43Nn71L3EzeG",
  "key27": "5uLbto63YPggAtussHno2TZy21hFGEhiS6vw2WzgLiJPMN2aQ6gw2nQ7LLX6ccebfjLj6VjYtnbcjNZiHWfN18sk",
  "key28": "4uoiGP82n3q5xFKKKY9w6oCTCQdmLj92w2P2RwhyjqAzGmVt7KMsxw9Z1qn9BG5rDaGGhADN3JLcBvrJy1E5eHTj",
  "key29": "2r7W4SngYH7e9VxudAwv9QbCA9xxvQvDHANJvjU6sLubnG2L3DSFCx7EHDHbQfafoGbfouPPFS9DgKsQd2gGxJZo",
  "key30": "5LFjiGdYNW3YCrpLoroQGTqZWum9DCeFRTrXrLEfLSMunqshbC5aviFZiKKxp5Svuc8ww2M3FLZQoWMDPQcpQKRM",
  "key31": "5GXAi5HX9wLtcL2acaE4MYi9vatTy7G3oqrrx7DR9Z4h6AtNqeoxSu1acUq3uvadz238UbxAbekHkGSQA6uymDxM",
  "key32": "5QRVBVrbgQJvjB8isMohqcnq6Th7SpqtLXFN1czpkUBcooFaX48FDSTyKiZMcxMiWBatvL2WDu6U6rp6pB3w4wdC",
  "key33": "49cbRQtTBs6ymjj93AnqkAanfv5y226Fkjdje3G518Zwhtmw4WtVo3Dtcp3pmgYsYVUWRqWQ9rTZ1Zu7g3yUnm1K",
  "key34": "4tJfUNEfjn1vddebtTH23oRpY16soPHiY5Q9nxtArHCZXtogvhB6q3AxmRWSVfqG1FPAnoB4gX3p117dtyUHgfcF",
  "key35": "2nPAPjViQmP5TVW8PiN8zAspJLvnfvRRLa1wp7jXZXWognMdpjE1M7ZWuswLzoGHTZq4pBeYycp1M6HCwzLWaKWY"
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
