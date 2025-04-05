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
    "mRUWucBozua77aLvz3yTnJVX9TjQUAq65GRL9XHJy7t8iaSwbbS9maPDr15YUS2uRtooSYFmBraSdStwjKcrSYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YQevmtv1FmhBrXwBhPfXpmnBxr3V8x32dydsUgjKeTVK7YFoJAU8xorPGFgQsfpSM9prcDmm6QTr6PtJafeK9Kg",
  "key1": "4nXyD5qpdPa2bZg5JbMDhPUDY7ksu5dAprgGrYkqKVzj6bMxazxeigcRM9a2DNzJY4pD6NmNcfqKeXnn9yXhBE82",
  "key2": "4FzxEXoe49sFYLVfr4G3oGxJwgwTPYhTAodR7Jagwj7azeyZXwETE93DmJea9w4hN6Bgs6mVg6Es4zcXYkGGyV6V",
  "key3": "4MvvLqxZ43JXywYfHoWUxBarzCoWxmCnZKUwHbhJWtmJXS5djiPdYHZ2yZdYKxSWKXqPnJrjLHSuy99hMMXMXafJ",
  "key4": "AHKQH759PKvrqBtjoGetihdR7EceqSyoDKSwCGoufy9vtuyRsshKLw3txVK838Fh8WQRVME7SYDdkAGcLHsUnUj",
  "key5": "3U4S5ozKrUmy6T2RKgTKxhibRofgFRgZ2vJznsL7PyzbDqfb3Jf3bNkizDCR65JPMVn5LKM4738ktAtqRpJBkHY8",
  "key6": "1brPzK2QKLjY9maLhbEiLV8q2QuQTAU5c6STy6vs74xC8sgTAgRQooka1Z2mN4UQmQXQueenLjuJwVyuAcV7W6f",
  "key7": "fqMvSyAHt7yfQv2taudzp1sXz4VUbjX1b5itjoe9c669N1GjchwrL1tXQBafZdnTdxbWF7SGrUtPyncUPQx5hmK",
  "key8": "fLC3yRQDj4xpdZisdedhfW811sGQciMsoEjvkLhfjAM1BMAQdVSUs92CuzqKpjyzh1V13iFkUSWnUy3pfTGSVh4",
  "key9": "2t8xtqa619mwmAgLMDCpCjqNGUJYBoV9VYXTh7g6BN1u9eSVL6VGx4mdeQPttyNCbrVEeGZ88GBv88pW4pFwPqhL",
  "key10": "3iTXPpodxRVQsivTHj9GVy1QFshfMEx7m4g4LT9aBMEhxFM8TeEBVFR2Pqa91jAhpuT7gow7RYNiN7pNZNCtJZiz",
  "key11": "5T3z7dSFf8VUTdk6tqooE61iJJbr1yrQB4k78unSCVZVRoXTQ5NZMYaPS7HvHrt9mufaCD1UUPGEyBotGH1DxgNN",
  "key12": "5h4qMY21guNnnpZXtDFGxsQFEHn9VLxRYKyJWy5cPCPE2WyWdqc1yBBLrcFZktdZozJVzuSJ95mk8Dji5PhrJciG",
  "key13": "27wSjFVqPTgE1nsBJxkjqLqK3oTn9QG1PGAzSSQQSkaJ8vRScwnD3jp34Zyh4eptkUcN7m5AXdyWFbX7XWzVcvCi",
  "key14": "Pt8tYAUcWZ9frKgops7ibmrmEXx5BzdEaNTvonMyLuWr6tCofg13MMW3DfcRjb8vC1X7NKBgwAQv5MpNR2LXSbe",
  "key15": "2TSk9c6VYzmmXbwW9onG4tsMmoeJjatwacsjKeLVvnkJwJgxXwmobBUUZkSyS7LAtuh5kquYx3GF6ADBSvAraq44",
  "key16": "4d67svNL9KxP7tQRS4mLwburgZb8sLgvzgfPYxC8VvLA6pCQL3QxdXR7EYP839xvX3wdmD3Vd3ByFU7xWxuHGudm",
  "key17": "4ProTiR8feQzJ4ntdrXrC2hvzg71N7VvsmvCAQYCUMCVM3jhcMMA5wU88XqjY1PRCp2AU319TyPqRX9my385dDxF",
  "key18": "2BdUcgmDW4MqHpBfe7ZAr4duS1huAN1CuVUDCAfWAm8PLE1tcpd88fLxkrkPHYuRfLvTKK7VCegXrhyuZDNzBHLw",
  "key19": "2vaCL4oEM6RXAgPKw4HoskFidL3S3aNjqa21MdqnPv47r8WHmHzwmsGStmQghB1E3AnaCn2SQ6CQ7KDq2bih8iMA",
  "key20": "4PPY4u4oVHQo3f3FowXijVnkB9YkF45NKQkCvaPSaMiQ9DoPbMAZiS1PBnfw54Jb3bKvPmXbVTeWhD8C2jnWVrAJ",
  "key21": "f66gTYAiswUK4ecqFv5kPSWyYTyXd6moQPhzfj3xxPkt5HcBeUoBwAiryF52UdzjUzNPjWinqXFr1b2p4mh7p4W",
  "key22": "4EMJEcieacatEuUKTb8zAcjvGxFavvp2uJhBcC51A7QwbNmckH7kS4Gs31tugtUeNf74gvfhKy4nVCq1UTh6LeaC",
  "key23": "5x9jfVLTU8VBarKkPZF9BFAagvnTWSigm5PHgtBPrN3RbHZfjTW2E7gzQ8qPdaVHUXpidLnMkbRdD8wibsB3XaY6",
  "key24": "3eX4afWkrFTJijrXWKz6tXJHiuXgLwNd1BxVCd1sQW1j1TMxvDJneXp4nLrxwA13SX3wX8r8fGtqPw7sjUvyunUC",
  "key25": "2pkcHsgGDQ2apYjaYGPfA8XtwPFWpoGU4ATcC42hqACr9GF976BK1fVehjMwRukBD7b3yr1pJn3i2Gr13zwv9PEv",
  "key26": "vfzBofFq5zi99NhrLDtjkh8VgFMx2CDrYo7EWZarJVbZLSREoJhuqpNPngH9pZeh1c9TDsAn8y6muJRdAd5KHax",
  "key27": "5pCtQdJJhyijCgKwfYDL72jsrnr5ihuR8Y3ePVDP7zP8TmwNdDNLxDKjFEFvz3R4fwJi2wzi3GHtY4JQzow4CZan",
  "key28": "36vsSfodzvvzCTPkYdSjHW7pQNbTV4WGbkbWNyWXFqAMfZKDJ5JtCHLefgmHGWamjJFDhD3uo4iA2fT8y9oiJc1D",
  "key29": "2G2BYQNifXjVPJqMJMi8GreXWmT37MLeASqskvPGrnPQNAWd7cKdLJXtVx9Wn8Bu5kcePupxaNtb1SKk6nVNw1yo",
  "key30": "3BnmTpLRTyzrE1utntaLFqnqJWbpRehGHLe9QbbDdCSTYbk4P6PaEKBUKbcMrm1AMPeNp7htDRcXAvVNnREQunDR",
  "key31": "59BeqhBHT3TUdGu43x6aL2bkDL2eU4V1JFcFcapqigpkXRBbgsSS9YjH3WQGFiSdSTz7az7GxHgk2tbMFr517xHV"
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
