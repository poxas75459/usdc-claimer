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
    "VN2BTdzdBMkNMdmX6tNtJkHdbzqbwS7cacxFU1KqKMahs1tMSuPAjjDeqkympvkHsrf4RxdsY9mrJB1ynvpzFd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7NuTc9Xu6ptmwaX8XeP4CTRpypS8wLHBwiaQZ7Rw2GczeLohijTMEZzcMCoCwpR13M6L82kLzPqF6RHDUmDShs",
  "key1": "41WWJRVG2Avx5hmmFHptEfERwzu6Rc2BUEb6yyCHbAx743CqwzNfWL62ughBZimKqbH2m7Dq1i1gncVjrBuPxw35",
  "key2": "5DDtTn3MydWZSQAGYHg8PNpveUBtNtGcbNcTrUhcxS5EM7zf2X1aiBCNS3gfBJH66Y1QXpgEBDEcGkYD87BspGbF",
  "key3": "3rVveFsWbssewq3974SsGRdyRYSdbaUMReyJqhT9tVRx4mVR6RgQYnWRHYo7r92HGJ28YEHoVrxLziAAsyfQYWt5",
  "key4": "4qzPjtAS44g2tiuBwNxnnoYQYQaugqiH5Wc2DsEfA6zAtDyD6cHgexYyJW7fvcxiqvVafsLrWSzYMwNUcxoJY2md",
  "key5": "2uU8QUFSPLVuZSkLEH4VhfyMQemBPeWnwZxoMvbSYFQhCoLzHjbNignr6ZAACRwcj3B9tP47HQjTomi2rBo4YtaD",
  "key6": "28Cesr39kuRjbkixZ74dtCdB4ENdKnvhidKTmBQcbp516VppNxnzbQZ7MPwz8aCp4j6M4PitDHcteRF8MCG1C8qB",
  "key7": "3WFYvzQMYe9jTXpFbVrvaL9dJ5s2314tW9wWr9AXsq4t9SGjyMwojPRAouWqrZVdWRoLGgUZou6t9d3jYDRyuZZc",
  "key8": "5CnN6rLnCQLzQTi4MDrKY3DFto8w7Bas2g6y33PHdk7RV5WMDTYS8o15ESEgeYazckYeKj1mQiYzvLCPZxLyyQ1h",
  "key9": "5W88bRDMjYWH72DWK4zk5bcHUg6ZDEpQUviQabWwTkdrusaHEecxEASF8dCHwkdKUahVKuEy7JMhXrnK6DZtiSzu",
  "key10": "55WcFBkazPBhUsZ84Ke6Lr3sthvjkhX2pfJt1SisGLGdWrNBFVMtX9SiNpJXoUfuGAjVDBYfr8nnasxwzVG8LNcw",
  "key11": "2HdKVJAR66qshQ8N6JpJgREyFP9UDePk9R9vWsBUwwwoZ8bMQ8VsCyQgQ6UjVooBUAXXN8yDv1HSqAHZWzpDWnQS",
  "key12": "3SwhHhes1Fj3X9M1vK5QgswmZ7SAdd5sm86gddg1KcSBjYvwtXuzdL8mSGTSBwD63xbJTur3kSmTUFvxUPKtT7jG",
  "key13": "45b2qge7ak7EAao43Q28xytCPyCKV2pM5FFemGDNxwWkCwrL7KKkTj3isokBGso5yGYHuA1n1Xd8Xbqi5hneYmoX",
  "key14": "5AV3aezqhuE16d52NZhuE7Y3b8V6HqTaeTYRfuVS4j8yCppkHzGbvUN7Af6tpeXFApsVPbhYUJVHUbz3U8gBchNE",
  "key15": "3xvcENjYood4RGqFZoYJREjGTFeDEb7eiPZ2CLVHkweTu54KwvyJo8MRy1rFVcxhavbSNLEzu9HQZ689AEBMxp5a",
  "key16": "27rmApDr8SumDr9AXZ5p3qmE8bsSgE8D9tNh9dwrLF1dmJFrhu6s7pJH34rFp1wnUCctRdpKMCWw21ZLTqZ5JHE1",
  "key17": "2BwwZFxfRWBxXDPpdEJn2Mm6EHPqKAHGmG8HVSKMMMjCov6SHDjGd2bJ1yG9eZvQHgts9caaHvtxftRMvDFAhNQa",
  "key18": "2JRdtHQYrPVAHnmNmGZPoTB9yNGjFCDZmKE6DjuYb6sNPdYCnF1VQLSWMYZuNdXabtpoyCwvn3j6AAL8WfrC9dJ5",
  "key19": "4psDjHqBD72P6vW6D6tyqyfmbb5ZrtNX2zGKpsoGnNA2nyNhgNnmjF3Tk2WzKUaKQA5E949msH8KzRhE5z37bRcu",
  "key20": "2PWQp6TM9UFxiPexUHWHDzpPPeGhGDuApsg9c2a56jHwdeTWNYUCzPNXUbQq9N6eXDyVerQ6oUUpvqAVDmQwiWXW",
  "key21": "4YnA86HhQo5gyjrzechCJ9LF2oe8Bgre1DiBVtENdiToQF4yZfjRKhpegJaTzgb3td8y6mzi9mh45QzfsGHD1MVQ",
  "key22": "3L4e92eCM8yXX2neXmJ7qxq12dc57kV9D6UkrziebKXYEhMFdQ39gniDWodpkh4Etz8CLREjByJwSMScPcsn8iZS",
  "key23": "27odKz4tYPYYEN5QojVNvJSyZwHcTrzBgRZvvYpUpKhKqc8od3MbRPC3Rszp2fW36g7do4sJrecFB7dKDHg2yBxZ",
  "key24": "4bxh9qjeUyyBr1K4uMGBS5W7mTXNfEqX7pDRV9yP2i6Y8fyECZ6cg5iggcLQvgV1ZviALXJN7GSWBkrQDVFwrRET",
  "key25": "4BaZzUYP8V91dA9CbQtfvCtCk3Ucjq6tsGJjdEXzM8ovjSHjzrpgivXhZA5GjNaCf4qQkpaYqE4q36xQHhRBoUKB",
  "key26": "4X1H4K9yPNXj6Cqc8w1WrmEs1foK5vMiHdh9MVMhLSAJvM1upps8n1h6ZL1rM7XRZi8jYRN1DRaXEjA9xkTw41r4",
  "key27": "EjboT4rTPUfTac1xW55RDEzWg5KioWY81JD2t7XscrgrZ8FZuWuFUPHt4nNxDCrvoPWfZuNNQX6vLX7wffkHtaa"
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
