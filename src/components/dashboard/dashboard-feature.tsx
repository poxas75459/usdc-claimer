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
    "5hUH8TfJpxAbtnLJEVsQ3tpzHyDrVpY7kY5fdmcETph3D6dohLrkXsQrzJE34FtqPxFBdz5ZUPLkMFTQW7FDr8Tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gobQLC5n7XoNv2zWU1sLr93yqY8JBKc5Kor8m3cjseTSreSRfYsyDc7mZtuQboWYTbjFJuKqvrcnFudJgDcTPXf",
  "key1": "2CdGGLoDFeZhnQFrQUNB5iCtHVQ54gpv5hY8477jvqdZveeeGxnUS8k3m6dcQmcAkgDgwsWYibHhyDkiFrLNX5Zz",
  "key2": "PUgQ66aZN1k6qdV3xf79AJa2eDGnucH1dusdv3RGRJJWm5YW5RTub7misW25vwKwr89wCVHDPHV9eAShE3QxRuj",
  "key3": "4o4PqnhwFh3dC6cZ1PVf2gU1ZJ7jug66Ak9pAwQTDYzTKJm4CRu3H6R3gn9RNLP3qxsKU956YWy6V14c7zigDHs6",
  "key4": "62m4rA5bE341D2B9wgaXo8cEDkaJDwchKoYJnxyxzGvDB2AkU3iK7MVQRbRtep52T6ZFkpcoZ9fMtZRvq4iN56Xb",
  "key5": "CHTcJ741X5o4JqNBuPJGXVZYkC65G4umNaHEmLj116qGyz881w1GNvqfjXWtgfy8aDtefaoxTaQxZpaRXe1b9UC",
  "key6": "qMGmwnt9mQvm5mVQQANWWWsiF3nNq3PqcLap7nH95vnDuzJXPQ4wBMnzJ3WMPKS83bbkGbvEhQ7du3bEjv6n7yT",
  "key7": "4Le4GS5qM9c8e538quowELBE2TgSDvAuqkFeLHj5GVFDuPyBU9JJNPp44Vt7uu1hJaUuN4rbzrvKvL9xTYDbtMce",
  "key8": "62SGj6WNdpv6v4LU3eJToiSh7TFEQLSHDcofuLHZ6416QXHB6gki6XngSynwL2z5j6HsWroynN2y7uwcy1Dg3XyW",
  "key9": "39uhN2npX97q8txf5hjZhAo9AKn2NpRvmTrcQFzPocc1Yt6Pdv6KtHpN256Z3eiK1D2rW2ixCBGcNTNxtSQ8nQuH",
  "key10": "2bRWwLgTU6CpAxhG6FcuD6FTTr4qXXrVFnuVJhLV51ATH4GchaW6Quc79CS5xKUaaEj2uHTEBJutgdmHQixeiDhq",
  "key11": "3g6K9vEmQ5eSc739YY6NCBU4nQtSVbAQneAsfFS8N2MFsYsTnjLQePZuwNUpDdKW6VeqdqVkq3a3e8ddk4uXXd1p",
  "key12": "5SatYYvkmQPjzpMaDu8T1EgEBNx9RcPCxjz5x7HcykeHZ27KBNRdsVqpyavrv9bE1ZXPhUfAG3CfffEgrJkq9tQ1",
  "key13": "5ZKFGAufCZsNiNfs4PLsrDV7MBBrqSQ8AqwX94Gjry1ekcLhtvqpQ7caUPZzeQNKkZvapjmJRhkWDj7EKMH8BR4y",
  "key14": "5ATWyEgiRJQ6RUbcvEUJ4mFPuwUDRbPR1fkHJkz6Lgsevcw21iZL2nHge8upxxestdRxMAduVnfd3mLhTrMSyVPx",
  "key15": "4FXo5ePwcDArhn96G21kJgWkQruhCwfL5DvHrr9LQfNT5BtzHgUBpvGJmWifyirK47Sh9434NE4dpsjKg8Wp2Rke",
  "key16": "HrV8V22bWzgGE4cMU1xUGEysx4SuN3cWvqtSAfAMeH23C4EHyFt2pDFveV4XiKju2Na7AuDf2aXoV3gpRoMq17o",
  "key17": "5iGKWrbEJ5gyQ4KhnrodfcFsiWXuutwWwgx4yo4Tp6Axpt1pDoT4RHKntDJMyjXiNosNqcbzAekmEVivawR2PjbH",
  "key18": "23Eh2KRYG1wiN9W13WYJUWuPJWxkgT7L2AgpTpPkfavGSWfgFZTC2FDZdpKoRMzz8oR9f2RtbkcypGbhQpCUomL4",
  "key19": "5s8g8aYjbd5S3SwxeWHyMKdwJ8h2KthSST4kSUwtKgcmkgoqaes1XQY3pYAmQRiRoGUsFkpf6Em73eXFX7C9JSjg",
  "key20": "3LRqkY5mpcbnQ1c3mRWFGuzSz9Yx795aRzRt6q8zg36RW5b3Xw5npJqxJJNQRSMjVCTjrWP4uUpLJgzJNYxtKBuu",
  "key21": "2jKqCfHxhXtuo4gSBsUmo3qn8xHqEouJMxrRkhX38DmzSv4UT8Nk5J2smRkJA1ERhJSyuG5dYEt6q7RikfjrRYSG",
  "key22": "2fZiDaZ69bvFEGzrx2aKr3smYaR6wEz6Pxz6gM29cHRYBaEpE9aG6uHdzAX4nWqu1nQQcmL5fTtA89LVJSWituQP",
  "key23": "25S1K1VGKgt39ncTmZTmpTy9txcjuestGpqryaswuCCN2k8eRYH4BBs8xKXjANeEbR2gV2s2wFReoXarjL1dUL2y",
  "key24": "51gsYYPvdhZB5u92qbqYyGTThHHNHvUBRYunbTD4i3SQCw26WfactFghZKQEc7YVMA4DTkUt2cFK6QZSUkEiEeP3",
  "key25": "2zk4DLwnbQrL8xkDThCyNNKoVnJTerSmJgqNKzVHVWGjDHwb9Z3butMavdceZhjwXUcWqFX13ykqsAJK3hcaUrTZ",
  "key26": "21iTmZTCZxxv66ALsaHZS9c6J4kXyTkNhdE38cC2zsw7kmr1nrVDT1pn3sGfC7B5DpmRZCkAv64ET6N33p8TVriB"
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
