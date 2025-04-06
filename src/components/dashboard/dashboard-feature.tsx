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
    "4usZrGkqucMTzpnhicwH13Ey35nsE7C7Ytq4szmivs2r231EzXNkvo4maWkNFX647DE4ygTpKwu1GT5WKhv65tEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gCMSFwu1uDyL1qCAyAS3j6TXX6cKwGZESqSKiEZsAnDcjCjCqmxzgpmnbBNJmE5jCh8cytwW3cHRUsbZeEq9zQi",
  "key1": "4C5nwXKWryb5usgym8SfMEt4yubUeXxaw381LYA7KTMgpcuMfefGPkv9Xgz8veia43LVCuBibgQsr7KjbFueFhMj",
  "key2": "5H9kZqXfp3AeZVv24hw3FZLj6tQrPnAm2hMJrWkWZPsJ1UhcJU5zrLerJvYFetbuUxyXfXn6EqUqsPZECAQG4nGc",
  "key3": "4oaac4gi6ZQuS3JbrZbo4G1VRhmSdsZWybw2eqaa7iQoVHungzDWAF2CsRCq2AGjQCzpjAqkEpikJSS42NEVugR",
  "key4": "Yxg8dMtpJ4YkxKGqujGY2mUm6YuopHrqXuVxpacHe3VHDLg3SsqFq8EaHxWVTRLZpf7ThYQKmoCRznPUNZK1eB3",
  "key5": "5jFaqpweqFt5U5kKKzdyaQxmsSpe3nwynpFpncp6iPemWjGmprv48rCWFRcnAsmoekovzkj5ifzyoMRDZd9KFFH",
  "key6": "FbJE4rwJ6j7HDkH1qewFwNWaee2dyTzQaqzZnzret2DEdzbcdq4Nm3cnMwAEcjoYgYXG7rmM8tF8CxEzw1vmKig",
  "key7": "447WpfoGyrdew5cUcv3M5n5dSAZABMf93g9aifCTKHE2an9ddfgWBCpwLEBhMgfcChvt2t1ktyxqJayjAn6cqfi3",
  "key8": "XhuvcrPcnABiTQ5TQwN2zrhu2kWPnyDw2y7DpEYyz6sQXhEemr5fWmBwvo4STCW4ZbF5i3nDo3WMt3ycnEmQaSX",
  "key9": "2ZwqDGRqDZ6TVPu4U2crSPvnrNmymKbcTdDfckoTSRoDxCsSqckd6RGksH5T8jG39tsBWkqqYkNicsinx7ANDPHW",
  "key10": "21utaABuD6QY2Y4EQ3EXKuveGASD61mMpSUJtCtsDyRgrFziZWWZTKBbCrmo5rQNaUQpJ9ouvS6d6c77Wt5o9S5d",
  "key11": "nY85MDb9gwy9u17aKLavx6i1B52CvNyHNEu5UMpjvc5SCQWyyvH4HAxUnB1gc9af5n9viAiAUxMoNYJVpByufWZ",
  "key12": "qnPFPSNTtL4XQr1JEk6cqXCPSsvNPr5erg5BDGEPweat3sY8bYVcTSma9d3zEhkjCmG4SxHTxbTobBqVo914s4L",
  "key13": "4UCv2BvdKKjVKxSFZG96m4EVVR1sytrjmKBDvXNi5pSGvmMJp43aGh3CX3PZnbFJNDpqpZbGf1r7CcQXU28FwWjw",
  "key14": "2PmUXpYUhgT8KpWiNiBjaG6mSb8De8UJ7sPTciyiC1BqEmwZj16WEuWMB9V7BvdJWgxQZXLvGBpfYtKRvj7sMHtJ",
  "key15": "56fDpUaF7PhuzA2pERY5YrgMnb5ijm51RFGepPqcsSAtH1KGsYpT5Cf3zwzXnxtCVfMyE4m9ScNXizhix5NZKwAP",
  "key16": "5oT1FPMrfGVbZj75S3XG6CnG1j9fdvrnm9RiVccbgbSE3emuZndp7AGKiLuSFmo91CvGz17egFt4xYnwNRWeZ6pK",
  "key17": "4g4uFZ2VB52WETvCs5RsSwnGmSLm4f9KkYPLXDrCqPD5zLDxStwYdpkLVK6ADBis4NiovwNBqaRCM929hY9U1CpJ",
  "key18": "62iGCniL86WWTVB5abee3SdExvuEVu2aWhtuuPuPjhZcBJQu8XWcqrLJ9X1iCgyFB4CqWiFj8fP4yxWCV25F3Agg",
  "key19": "2cSR2w7Pysdh1n1D4ZbZqCL2gZNSipn5R6VXXR1GWtSunzDkP4VTGbgbsuVVceP2ZxFUt1M6R4GhNLaVSRbJKAtY",
  "key20": "FwQNrgqAs9DcZ4DCH63Cc2nycRDoCaZb1WpzdAf2qsTuAHqqJwaW7H2hcoUenaDwFr1SfNFen4MSK95GkuwBXme",
  "key21": "4k6nu3ea7JPEDZ3Wsi9ATcawoNQHQ925cha5Kny6dqxU2QjbBj2Tj8P3ngAWsugJktumLobgCJaCuXh5VqAd9Ngd",
  "key22": "5zVbCqSoXrbfQqf6PaLZU44P3diB8QXocPjPiRqeB8mautFHo1AVFpiHyPXszv5JvKsKWf7mqaBr26PuZ1eHjS4z",
  "key23": "YphWqKZmhYnTNVbj4PNG1gtaPW5YT758k2AGuMihBAs8gcmUyuECzFJ3t7NLpaxBYE9d5KSy6niK1a8AGTnGfiG",
  "key24": "4xEeDqhSKvP1cfY9fEPWPXeayTcpiayRxarYwpXW7aSn34F1q4PUr6RhBKofeqAQ6NutERWjGSJjvaAGV4z8RorC",
  "key25": "46VMBunyX8Y96vYyJagj9QssDnhorTBJsjusSNBUv5mg2dTGT134TTSn7o1j7fZrk8tq6rDFKyYp5EUjsdZG3fyr",
  "key26": "5UAjkeQdtHaRrDPBWD6kkY5nwEgTEnNyBgHbJnsjZ2RF3gpsftSmWVEzTwVuev9rbVXJr3gJmEZxp2qGHF2CZ7oh"
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
