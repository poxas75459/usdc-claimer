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
    "35H2Cnhx73XKebDhrumWr9s3xx7D9nPoDUweUjMQS5cmnCHZtJChG33bHpHBx61Yt1oeH2Vq4iA41oJq3xex3pvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kpqX6eu2YbPp8H9m2dy6KmAzrHvL3UxQHer1j3tCDWUWmXCU1XmxgeGfqwfUTNuRZLW5ucFb5tpDvvKxfyvEH5k",
  "key1": "3MNvMUUUXGdeeD1emR64pmswhtQumJaEDertzz8Ppx9NHHnzQR8QkH4hidcgxTKq3dUEuHLy6rjeAzN5pGbuyWLd",
  "key2": "67qv7ggTNiiuyw4rumkbW4yUsVEX5UCbvujsbs7ChueXvwvNaFBhKgKgcNbpzCyQFxT8qmaheFg4Pk4N2i5cR6KB",
  "key3": "3MGgxAhE5MBpS56ZRGvgS7grLhs3aBzCXViSd7LQ64wNQFAdKeFwBmQ3p7hc4YdyGCe4ytiSELvGBqfe9NVCNWNM",
  "key4": "3c6UVRPrP5nqsxcHgL3DmBUGmW4hm4twjF4gaTDQ6XCLohULz5gRotXABt1nxToi49CueawpvaqqSBsjVRuwQbz8",
  "key5": "51SoYkrovtybBxDw18iX1CnMQXkQqrBe6zzE3WaqiwxZYwG3G9g1AFyYbciJnjUVPCy1pgBfNby4DCwiHpC9ywJZ",
  "key6": "25XohdiGe3RdNYXvnjcRThSpnnc8WGBNdMSLMDSZGSQ33kHbpTsRYQBYg7byvX3xnXgEgUk2Zoytredzp5jysJie",
  "key7": "2FtpKsJgkGsdt4BbjXsXcM9Tzbag34aia1sJEHb2293pmx8TTMBxyLUuyQaRtRQBShmUXwK4PaP4t3XJJiyX4teX",
  "key8": "5ToRsDCR9zPEkndp9Cc8TMqo7iqV4jRv2LFs69Mw5MTNWjY6gmzV8nj9nKVMDUk1Gsc6wJ8T9Z45ErEs9gNbW9aZ",
  "key9": "5d2nogDEuBswHwA1ER9dWERkKRW1LnymjMadjEraquRpDb3NhtD49nrCgsaRocfx3T7jDjC8pzrdsZ8gYHuUxVgM",
  "key10": "ppRc1pD1GEessUVRW7LqJcgYevN72hVEXjVySPiqcpAmzdLCAMBc8nsKVdghCp4KtDBKzcBtBp6RwXVU8rWffcm",
  "key11": "3vQPNBBcJxUoUcMY3YQTCodEYXWwbrFDF4MCH4jn6y9Crf4NjkYeMEAeGSZMeaDoZj1tPMkrWtBZVz1oziN4zxm1",
  "key12": "3z8r3vGrPyfBZ7pJ7n1EpeLbAj6YFnnaY18ybEK8TQs5eLce3GFEjGWekrtZqMET5PGt9mi8rbXzyUgb1W53Q7rR",
  "key13": "26kx5aExRArMQaUu9QojTA6i6XCJWLJXvmsGex6JUBxHBwxkvHCkLExVqG4JhSSi2Jftsfr1EMvcZcFVJWkwUxAx",
  "key14": "1irnEVpZm3J84kfRXiWc3Skd5DEd5RmDWGvEGshNDdxHmzf479sshwvm7cyPNnE86VMfxKLAaGVo9rH4s17NYq2",
  "key15": "5X2Z1ssvCX5GhhkJwaGfGE4ejADdveKZKTqo7RyiLypY6PcdZPZebR7SzpBigJiGyJ2ixZhRofGpH7rr7U77YNZb",
  "key16": "2Ydfs7k2Gd15GdAhCh63H1WRw2so6Kt8eRWQYfhXo8kNrVJUmeavvZqRGsMy71xTYtetSV6vBktStE6kQmPUpWjs",
  "key17": "4i5vdL5S3xDXWbcBSddbh9BvJgZRErf5KfeCwgySqxKBzNs91XvNRGDQReAmqxaHij4P52zrCUsfKSc2nn1n2KS3",
  "key18": "51x3GQTi3KzNE88QQGnoR6Uimuv7pzUCctJpxfFpStLu3K8zLAYufYFpCp5fCFCX996aGG76dVyp4ALtkPQ7jyjs",
  "key19": "4afyoVCqVM84P6AfXxGBb8iGpdwCQP1FechG1iYtGwSABDyB8njnp9D5HkLx5f3r5FiRsUnsk1CB7yp3HLbRMUPt",
  "key20": "xpMYWr1n2H3M1bCCxQSnecwDBCtWbGeHfXEwC815YTDxDZXbm678GP8r796Bz7Fipih129ed3jNMPK8K6wYZFGL",
  "key21": "4STVxUMDqSYJqsG9zxmGPNMmEZaRtxRqmvwZ69tDUHRHyNFfrNbKgirCwmHZvma1XqHj32jugKRYSSk344UTV8wP",
  "key22": "3EucqcZJFmMDBWLnKpLCUqsjwsfg2YeNFMVPkTybFS7oADAPCMue61tdaAX7wbDs9Mc36UTHVdVMaWgTuTwFknLB",
  "key23": "2nYEibFUqu3adSubcg2iLiFJq2GiUuFbht6uMRyzR7Q17xuQ5zrEqCb44DeCAypr6yauMF37X9HXEc8HsLwpyG4r",
  "key24": "C1TmtkB1GaQAPwehDmuCVT2wjGXhZbP7ESybM6N88q5SzMtchXbTGG5vuQs8XehrGMfQxTK9p8FiadAbokaU9Dk",
  "key25": "2cKA7NGcB3FAPNm9CpY6d3sVDSq7mDEaB7XJoSqcYVo5dtLFwKsYBhyTdenodyexn4mQSV3gYgAPxygPWFi7QbdP",
  "key26": "58phWdj7o5LWDeHhNhastce1G8geFcoQk4qWaZxrkVRFXtMyfct2yzGb28gNQhxFfFDV1JoAHdDfaHJwuYSrrgxB",
  "key27": "5AaUgdeAKmdYepKj6AYVkGy4p3hCPDZJqhNPnToVUKuFwqD1GQ58EYNsej45N2qfHTiKma6qcpHYz5JNUeSk6NnD",
  "key28": "HFjLXb1pqztPJEzkftyDyme5JkqLnzxGWCntZZbU2Jg2gb9V6dJKoi4qrSrDzmyJfq3hiegGVa6JHnnrGaXUASq",
  "key29": "5dYJGacV2Ax8iahq2fZQ3Zj666wQd2jd3Qsw2U8qC2iJigNU84TGzfUAWyWcgp5c7LogFLpSwNPSBvhH15DNEcW",
  "key30": "3sFfFmzyFxWRCaJLzj4hUZqLey2YouYJ4UEDDoYF3afWsaz8iPqppFbazzaym7GXmckknEVBZMVBGXtUC13PFG3f",
  "key31": "2RyfDBndEZk6JgFMU6qMCSBmezjM7QMPLukCwLknZshVibAvjsN4o3vWaE4jkUEGNTw3e8p2X7aJ9zvVbjNAG5Qi",
  "key32": "2A7aTSqaKUJeZzK1QJg8Ka7L3jiJJVEvF5UvkPKuRUyRayzJFxz61LdNZswrfTuH5uWmjs8P4NCRb8zVYRZWTuHn"
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
