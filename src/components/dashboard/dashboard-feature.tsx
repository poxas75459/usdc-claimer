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
    "41NszCW3KD8BrDHTzPnp9WNG4s8kcCFn1vNJZZeKKufAFCLrr8BBb8z6qGTefbW6MydbVe8bJUpAm3eto33YEGmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jXp6pCER95J4pnmVphzirYjmCNz1RV9axN1ShnNiPMwQqYbxoPpn5qd4Q1mWxMJ2759mLFfqooUhhmTJvUmdqSd",
  "key1": "2DLcQ5zzD4ntMv3Kv7wPkjmYduPFZh2yh5KJ48JHN4t7EnULXa1qdC8zKgFdjXNquk4cD3qxz1R1ajzN8tXizo4u",
  "key2": "2wFY8iLKmwux4Z1SG8GSuC5Vvs2MrAZ5t4jghEiszwdM2XKwaqEQTh2kSTnZG5wKhMNRR3Bvn2tzxQtK3MBunz9m",
  "key3": "62eBArt6jRCVhMdZYdqauTgw6EDb1qx2Ek4NBrTGATdJxsr4E6kew3mLrN6P9yNWhnQun4Rszozv9w46UDES4shx",
  "key4": "2oWNkfATwbcQhZuwLQPXmERk4mqZjr2DPa2d8wJdSeCh47x3st4LAbDi6xAsYf8ANMAkuMUV2MMXeQGeryqwjKFM",
  "key5": "2Ex5xynz6KH3MCYC4QG6EoUBKK61y8BNoHJSFS9T3m3NT5pMsMwYqNjvx1AdksqAZBdMH64c3T4XaW6h6hnqGF5U",
  "key6": "5iGrBxvKfAmgvkZGKjYrYz7CkC9umUzJCJjKWeVE5NxbzsWUXNxcsNqwXdW6WxsJT4zHykWmLUpECn8qVQUJnsfa",
  "key7": "VjcvMgsFi1SBnmvJZHsFPjQwTfuTQDLRyX3AiTBgTpprHcm6FWMKh3mQAq9C4neXWQZUqwpv1SYYSHMde8uqMZG",
  "key8": "43A37eZkbr2VnK7SpAQCKd9PovtQ1ici4TZUsMHDtTSUWg8ZdMT6pq1TczPmnUhdi5DoYknhfruyXwmZMDCHKiwU",
  "key9": "2VLPoP256jwzWmGUJEoKcwH1hbt9PYPDSjGt32RWCJYtjZYesmA4zwxK2HhAv6TtUNy5juzHAAZ73N1Y2cnSSn4X",
  "key10": "5zij8tcXcHErWZAMqVBA31uwCNELfz59uMofHPZbnWFz5wPbqzmq9fH1DyyJikEBh9wJPkFyvyKCKmF4n23QAGF1",
  "key11": "2dRZANLtBaiicMdi41agzDr9EcFhTVVygF17mpCoX1hmnNj4SGjB3C65JyiuNgFCU65QsvriofChFt7j8T1t2oWN",
  "key12": "2DWJi6bsZfgLSmJJir7fj1QeEu4bzS5HE9bJfdiKrM8k65QRmci1rkZWkXFTDaxnQeqjdJLUx9gD2uyLEDe3Rcts",
  "key13": "5fkSVf7xrj9BHuPG6Wjf6vjGL23hvjquY9k3rkUU4WHY9wZYPaW4bQqcGJAeXGUQnFtMxFxMMbHuekfyiDSzwLN1",
  "key14": "4pVjTbYQf4wYsGEUtunMNCdz5ZHXTNNFHZKhTwHeBzzvZjXp4JNaSHV8BJTrMaexxyeVX9KBEpNbKFte3rWzZFj1",
  "key15": "4qqqMv6wc9mzAhh9QsWpxZCAA4vxBtRBNtuWEsujXFqqE7TdcUnPTD1iCZagqwY4aNMzHNZ4zbjRu6FCx3pqTY6S",
  "key16": "3FbXMpq4vXawZKivj5MVrdAZe9EwLdxyupLwHjhm7dihgpKbk4mythveNFcDhREwfamysMamcsE6JCvgLap2995c",
  "key17": "35GCtHwxHRCW7udtu6FWvUBe9tRrKzAbsu7mvL7ewxXEvTkVRfB1qdVqsSEKF3zouFZo26g4J3ctNd6zjtaYFfeU",
  "key18": "5HUi5qm1yDW59cHBXvfu3f1BSSjBPJ2DpZwZUTy4nAT5eKtLuZQ4pc9DuyDKXqUSUQUckGbJSsDftCunPk8BDhM6",
  "key19": "61auqBXEEEDdMdMv1ppwCiLCcURkfSMiGko2UGi9eq1eYRtbCtvNrZ3wQ5Mjkj5inQtpZqtLbK4acbUTcVZy8Ggk",
  "key20": "57KHudkzjPGmKhAB69FVRK6YPo669yfsjRaKeAiQPJJFZW7eFSHtnsKdcd6RuYsc1CqdmHRZth1X4cnNMgRmu26p",
  "key21": "5wNmqHon4o4XSAHnMzYEAta9bJwZw1PQZSeojLPVzCJHuMApZmEfhKx2fdQ3KSEqfLwC5tooQk4st99yw7nSnHo6",
  "key22": "3XRMqT8oD7i2KRUabYgcriWeMEdUXQXDgoTGj8DJ9UkbcZdoRRQRNXV3H9hgehum3KDWxDxiXP1tBVpMQecCb63Y",
  "key23": "43BziTmcXec9yZzy5YYTL3NoGTM47ZthMeTyzqgLKtrfgG1ZEhmqD98eaTgbBYT3moZHDwp96pfGzjTmLaBt3ASV",
  "key24": "2L511XH4QKzHxFYbxrhLVAWGWgopmk2MhnNwDbjQpnak8uZn4os6HcQqUdyHRBLBeNNCH4hi4udNG5ruTVfqynGw",
  "key25": "3wzvYXCCRxsFfdmtuvyVpkDXDJS4UqcMZXUqGkUn32TtyTeq1mbTw373SpSMtKH6XzKJwAQ44aDBFy9LbkpizX2B",
  "key26": "5v4iTKEihXSeu4noLtxL9tD5ksq9roXzUU6kR24eRQGqPaT492bYsmEGfX2UEXRfRKRSg1VPyAzv62zJiaectJ71",
  "key27": "5HvmS9AiNJjWzNwXMzHZrn3CpM2NodWeA6fEwAzWqtGnhsBPuUMDSZrELh9FNkTQYhhJCGKT8awFsMAHXvojmEw6",
  "key28": "FEAKhyC981hsLyrfdYw5QkuqGhJ3PywYFMDGmuX5vMtS1w4pBVETkcJVRdFLw1DdzypvB13QhwG4mAp3U9wMBxy",
  "key29": "3u4ujEPqFSKNqPPzZNKL5jh7FhzWTzT2LSxjNYVbpogv65BBoG1P4dbr5QvxdJkV8SZMkYcTdZGgvvcNH5btBHYZ",
  "key30": "47h11TGrbHev1WNvDgWYp4HnxYmeFfH9wyxebXTQX1ViPXvUoPwbRbHL5Wfi6C929jcrF2Ncano8kHaKRv8cyck7",
  "key31": "4KzEq9aUA3DG3j523jxEM9SPVVHfa2BXCzYeJ9DeodmYDABqtnV7kzYdGRV22Dg846kSFR46iCSE7i31J5DUrkSW",
  "key32": "q9hP985Yqm8vi8LxU4Ae62BZCZKruQeMhPnNi61Y1xtfxAFgCbz47gweN6VwxzPYciWkF2X2sJb1xwbmc8XGXUy",
  "key33": "3VYhEyC5gSrpfZa6ZYYYcHbeH8prXPnB4mJJhLMh5vYRbZSVfjBjREkzMhe6b4A6om65uRaAyp82DjETfkHgU4cY"
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
