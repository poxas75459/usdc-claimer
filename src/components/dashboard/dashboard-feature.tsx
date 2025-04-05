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
    "2ybAT85AfkRAksDxytcQfv1xpDcBiLCfhLVaqpuafUBZxWUQfLkMRiSHEyVPxL88cBcSTi79c287JiDmeNh7CEdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v7Cyc3T6teouxWJV6uZKP7pt419tfhhY7DcmxckmKupGTD53g9SytiuHM8Zr2zfErmQQSFwTgRzTnaZ6DRNwr7h",
  "key1": "5W3QvabJ9xAgG9XjUT9DKTPp1XscngPHqKt4cWS5R1yfQrKQe2SzzwAZK61pQdcuuUGRqKD3L9kfo5AJpSRJB1Sd",
  "key2": "mukbKAT3JWSJUEfCkW1uXuBWRZrr3G3AJLfpZHXPWPhRsd7DvsoPLkq3voFFxAiPwZ763o7NXxUWCfKxEwSL4c7",
  "key3": "4hTkDXdwTF2PhmFfPPEUHcWLFavUyPkTbknW1JMujGWnfwFmsd45ucPfmNfYFaFKJiLAGXAXvUrCfkcQt84hJoNV",
  "key4": "4ciW5w7NQKuSbZZTjTj5hUrWMxscLKSMsEofa4yumWwUVqhDUfUkM8LtTcxMzrjhFpgMvPLULo19phHAcFoXTUi8",
  "key5": "358RDm9e7VTKDMc77UUPFJWeVs8uMeNB223vBiPq85dtTveCjUP7r79E4UvFaQ2TT1TFT4o5NFwLjaJeaefrQPoD",
  "key6": "3mxZh4rFv5mYBWa6Ak4V41Cpp1EcQsxKtqwJapvFHYGu4ErATybFHrWCeMudcs6n4crEUjytq6N9Nzzb3U7RPx5f",
  "key7": "3k2BPV4t1z1keF3aSKKXcQS2p2AvLg9iCkMNZ5P6MQzeSXoFaVHqzQb1smGEFnDSck13z9mMT2EHLA6dnGpXQKnq",
  "key8": "47cKZzBdmnaJoMsDUCfEKne3fqUm8mUF1h9KndEUxaVC4P9gioX6TEhxeWrfwD1WpTVDr5Rzye6cyvbX2ongnGvp",
  "key9": "5btUFfFBTdpKvR1zLCdQByegNsqntGGwQdyjBAk9BcbkXyz7veyp4efmmqhocPnXEPqppd6wQcHs8KCawvq2FCJf",
  "key10": "2FWJWnayBRm2CjXmbyuGH3JwJsw3sBq1fGZHBKT6KdUDfVKshjgcGLFDx8mYTKzZD8z5iDpui27uVPxgX5EjQAqX",
  "key11": "4MixfyorxxGmEyGujXAYUoZ1QZ2ULoqQHEXHbsmyiodP7cfQFYTAKuSPPNEeiKH2KHkvPLAa7ZSCgom2DKsg45CA",
  "key12": "tatvZghw4eJPuchqp7K8LjPhyA47N7ZJDWaWo23dJDRYSXnXd5uph1BtWrUtNZaLeRE9UVYfgTY4ozTff1MFLim",
  "key13": "586u2gqZ6xRJdUjpEevu8juEJXMjo6hEa3nBKEsYi5JAj6KYpEwWEeJfoep68bGVgFX3nV13vCXi8xxG8J1pp8Bw",
  "key14": "3BCmWbaTswoK5SPRm5aWsAjGPHtdbXgLyF6cKzbbs14F4r2PhrEViCH27Yxd8jMX48sEEDcj3QnySxdAUamzbAW2",
  "key15": "313Vm63UjpKsfqyMBYX7oJhDH5pPCarFVpr5ijBvJLG1FpWFjWCMiu7ozpABf12JZ1Z7T9NSWxPQDeckTzEWkTxf",
  "key16": "2JANyoKZzjqDjeFkJo7PSFX1BGt9gr3i85qFuDTrxpgFqAQ16iM8DizmiqEK8sbcFjpa66GaNbMJEJPXwqcjae8t",
  "key17": "4wbjmnEK6XdvbXpbTZzbffVVqo8kRBT7xw3UwKtjfcSPQvkodpMEwU1MqC4pYsLtfWf2tYfSWnmhsGjzsNX2hbpt",
  "key18": "P5XnH3qmkUM7m2oWb2r1wtHQKjsbGteydygxjWQxnfcZg3ZyXaXCf2PxPUK8FGwWAwpHf3MUoAR9KWAqhhCvWrb",
  "key19": "4sPCvi4B5U8k9WdEwBU1rjK9oDZHECx9NW3UD5dFSuRPCVPjhxKQaF7RpmLN2XBsJxUtCbG4eCmnAu5SA3VUjoXF",
  "key20": "5dF6SwWCMrEKGkzv3fK2bryJWk1BBuA8e3cSxuWWLF4WTPMzgE3nXXopYSYHECSusCMUzAByhBgyALKyeetofjPy",
  "key21": "xSeDZL5LNJxRkhk2yya1rSDkcKcrSurjifrPo4oxUog1XZH3H5iX6UpC4og1JExEUmcE2ojrB1DVbKreZKVzae3",
  "key22": "5jRduykcxa2rUngQwsiGBFfwoqKHk9wA2oeoMHsmEfSrbgmSiZKkxmynBQK9pGZAwZdKkW645ub94zESqKM4M3zo",
  "key23": "64m5TkgGW8RgJPLfBiefKz9k4zvt29Pu912tKUZi9WVo9amsz7U76MiNftT9w7HuLgvqJPrKnZeqwhEsYgqEjSQr",
  "key24": "1P5Bupxpg6i6AtLncF6fJH9yDum8yU67mb3LDgG8WnVUnDDVUBcBDF8f1n5fQJZ2aCb9QhyAdaefCdiWFpfkF7t",
  "key25": "tXGt8SKC776PBertgHDfUM6r8dvKgrtoWL4wsEu6Zn3rsbyBVXvoVDrQjvt1xxQ8D8UEYafx2s1fmYbdX7DDy6J",
  "key26": "3dqhJoq9ZBMMNUNnkD1UgFnAZt1VBGHWPGUYNskiYhe6nXVsDdEKuRJAiRnWuc5Y3rddKpmGrVZ3k5maoQupMA5x",
  "key27": "4fSujqaMEAU4g5edv42Faf3GjSUAe3LQoCAc4q3CDr3xRmzs7ebFNKr8yjDontKkdzYQ3xenhXUnGwFvaD19No4F",
  "key28": "3StjimYTem8U1hhrG1n58fTpWnJuzmKFrnkrtxufoMZQHDKtu4Y1iEpXWLL8pnHarKnDuf1AGUH8rn7qR9g3q1yQ"
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
