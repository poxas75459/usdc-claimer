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
    "4uxn2VXWzXGu3UBozM9PqTKED4DP8G9Gfaau3J7Yn8gaF15PS5dQ6H2gLQjkqJJzZtbnj71Vj5E5p964jqPxn6Vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xY2idStc4qbHJ6QV2m82FjkS7MnPrLLmS42f43qGQ3pcYphGuUDn1Cp2kJsWEU75c3uPAM9WPP4QWxPe8xr6tP7",
  "key1": "52us9BDWZc4bZ5mWqgy6uwzfDikRNMDKWdJigKpjVD71ayukQhoKXYp4zMrPFNU8AKvxV2uTvtKAS2BzpN7nYtGo",
  "key2": "35UKrn32nihwbG2syEm34NfV4x4XRwV2mnndnA27myxyEEAscLFEzSPT2YKRkge1H5gQ4KKZ3H3EYWU9zfjbZqur",
  "key3": "5nGYTT8QDp5RB3RpxPhJCNJWTASgAgRT6JGaWpfD6nCi8btRfzZ6Mp2JdqNWhQMWbfLZXXRZBNN98rKFwD2Anip8",
  "key4": "2CdCS8WJcfV7WYYUEUSbfqLZSWkb7d1oZywcx5Dm2GWc6xYNqKybr46UvvbBVtseFMpq3XG6CDKpyXvntTpys5kP",
  "key5": "3L53onGUBosX9MEpvofMP1R45riWt19FD7K6aqRLNnZaWBb8V6wA7bCmY3EpRUDpbzn9cVGfhV8thznGBo7cGXHQ",
  "key6": "5z1yD8TdB9sPy5MowUqghry2yRchTK5Sbq9qB5gisiHSRpZrBkUHE9Q4J186BKRChVguGUMLYsgwA39YhgKtuBTx",
  "key7": "4r4cJG9oUYbYctea2SvpKhfDDsUMrtVrLniRyTKdj3M2Cw8re9RtBmNQpXEQnfsmYrMgjKkxfWeNbWAreTx33rjb",
  "key8": "zAwPd9JPQQZc7ZAMXvbk72LNRLD7Dii7oyHgG9s1fCyfLYjSzYLksHVV7GKVZATN5d7Qyr7H1x6egxnuCinkx6b",
  "key9": "2sqGWT3W6caQqfUJSEAAdbAJUKHMTXGMBLiXaLrCSF6x588fJheXkwjKq9WUkB6cHXmuKu6eJSYXvgSVcoi2FTS4",
  "key10": "LDUnNQ3SLQxFFY1GpTLmjxNdHejcywJLmkoG5CV1EUM8LiLcTqN8BUwtGSpLt7Rx6Zxxf2j8J1FiahaY9QeRFmU",
  "key11": "shQw3Ps6AV8a3hrzcmmy4dcBRLWLhrJaVkEyKtFK1jkhaumTbxg1MotQ6Wm261c4Q5AEWnCYbUKDhpjSvexYAzx",
  "key12": "5ikf3moKYTb7Bkm4i2BfZh67BSuZfDQNLALYQyFVqCDqwevJ7UikDdZxJUnDiD4esq2yfLePRPuLb57GcGHvqngk",
  "key13": "4bV4GCdCjRcUYGLxgUW8EPyuvH87MxFMsiXdtDzMaHqrWo2NXuDXd7AME7FXySM2APuuvST3ud3f7uJie9BiwtSH",
  "key14": "5kRAWpve4RUm5YswdYMX63xpjU4bLVB8NmmERoZbDgJLEo7NPuNfCnd1fD4CjdN6JYYJ6hDscTHMk58PmkZF1oN4",
  "key15": "5mp9weyUWcjXRrUzXzPT153fFJ4Eb3YyRiunJWnJUmwDU9efYnb2yXX5669gKFi8rambzBnrnnp4Fw3xcEUh6Cdf",
  "key16": "5VzT5pK8oXXUgmnMsBB5mBMPJThoXDL8fjmurzg6T4WwEPzabatJC385bVb9YUBcmsrWRm8cwsytmFb2E4KiURtv",
  "key17": "3JwVWmcxRwfvPg32YZDPAawF8WhjBMpzt7oNPFdL3dbQ2iiDtFqWRB6FnHxH5kGAmQhzsLYniNM8Qrwub7QTSWeL",
  "key18": "5QtzFxCcxZDEJzdZnM9GKKemoHkbyorjeb6HRAKWrhiyhPbjsAhpgZh143Vd9TQ24e9JpdiCQqN4WMWRjEweLBcG",
  "key19": "fWnByhzNqVc3xFebHCR2Jwxmp2nsExZsyaStSKeGaJ1mhQDfZaCp71mxQRQee5kYDrB2wQKKFToHpvx4URTVR1b",
  "key20": "3DiJDGtsAp73veHrMp1J3QyVKP7NJGkT3R6xKZoiLZqHAWRWKZqd92bLi8dFRuxpccTkwbge1M21g1UJVmjvBuu4",
  "key21": "4vRLzVFQWAGZP2Yszpkbzxr1UHqTV5ygA7FxQLeiTdZXEwJTzJwd6hpEjyeNVbomYW3zbrHuZMaxQazkBdDJkh5S",
  "key22": "2xNadf8AQkELDbMHpcixepKQWCXCNoDqfJ1VBfLigwUxEopKgFiCmZBUCxDLPXtzsbCh4a1zqpgsFuWNsaX38KCx",
  "key23": "D9z9FFYvvSFGvLpwcx8EjgfYKZUFHrt5HyBAi5EpnRvYKTkuZBtuUg6PU6qBK14HhxPGGuuRySEYZ15A2xBm1J2",
  "key24": "4XtevFnfjqMvya58L26QDSdqEzpF3hKaKxKUVphCbMhaEUWCPs2v9QtWhuvYyWGF5Gegc3p38sq2E5S43ee5Eivj",
  "key25": "4ZgBv8u4mnBcv48EAi7uvrxHfpMg98oZYDLvp2PbomoawnBFKjueeU6wNGJH35okFAudCFmYGZcpDnwJcQS4aFir",
  "key26": "4qWhK3SVgrFU8vwX2jNXvoNXUdEYNNLx4w5fg1WXnH3k1q6seKHBwRgW9o35iJ7UbfgjkUHd1nRqy7SV5pkXm75j",
  "key27": "ATWry54bDoof5dkxrUV6kyp8JrUbPtQ9iqubUioCyst24mRqHC8sqwRhLpotq2eRqJ1tuZLD5rEdfnyWBkHSQiE",
  "key28": "4ERuNGT8r2KLrmvTtjD6dm7vrh9BY8YXr5TNbiaMm3mW9MVdUtsbkPPfbPShM4vP9p6BGj1HwBKcqxUjTAugCQe7",
  "key29": "SGYGPdETKKC1Up5j7CiZxVLJgcArYED4bAcESRnbnn8gKLuWN3bcvHmnMFhLnnjwwn1vaE9TBvFboc2PxYVnK3r",
  "key30": "5ohV9BvFpH7B2kGKJL35S83dvobVSw2zvtGFo2dKPh7PV3KYnotDxjpTpSrNMaoWt3zXLaCueqPj2AzHrMFb5sW1",
  "key31": "3QSCbZPxBN5ch5zqUD9DmvWrWyr7WW7awp1SusJs6kYb29kQKWMdaGSjNjsWA2z2rw82zmnVdK7LLtkk7R635j2u",
  "key32": "3opavRiDcv9mEwxVLENKSeWwuTVJ8PKQEYEx5vTFVAFr2i4xeBvAhLCHu7VpoKEFK1osV9nsNc4bCe1VNDZ3aqDN",
  "key33": "3DUV45nWUP19fwSsTJknQa3wqwFfJMKtrjWHKbh8DStUUFUH7BTphm3C6k5J2ywyJQ1fDh1fBxxrCuPWHQGF6JZz",
  "key34": "JUAV8Yxzoc1ieEgjWXUP1BuRnui2GT8WZgPCWu9ZaFEZNLeitvtGaoKRBqSTvEzUG4vuaqx3DdASidsCkq4hH8w",
  "key35": "3X1QU3wJm55QSoQtkUxpSfg2sqpMzJnhGMnjizShH64GTT81JYgD1nB3arbWzi3XEhyg4GwjeAwReUJsx55zLsf5",
  "key36": "5b9FLBre2o6hpepCwoR9Mmt8SHkj9ESWvgjT3n7ngqzc7NvHZLPrLgECciyLuR6zTmDnXMyQMxnSbq7CyVZ2h1QW",
  "key37": "2eckdZZsZzWyZMJsvNCFw2apRvtCJx8nRohpuyRypTXtkoKrhbGiBuvCoYNShavZcf1TLVg4Lkm4Qz611SQXTsrt",
  "key38": "5kk5SxoAzZUSF41WNY9DwgoUW1VURugr6xr4KAHYgykb8t8JsLEaAcVPxpT1Kjjis7TBeocdiN2uEephpq1c2X7C",
  "key39": "3JqYioDBfGvikpbhLTkqmVCRJSd5sBp8qtvcjmyh5eJv4fMEDQd3xx9qoK8LS4uaZXtrTjQgwhDDhgJ847rpqfu6",
  "key40": "2CYmGwcYdkvo9pzfEFBRpQvDHpDednfUGxSfY7ZnVhGxM8ceRyEbFboFnpoR9itWw9Zcf2sQrij656fEB3JodoUQ",
  "key41": "Pth77Hp74Y9dMkidGw6hn3fniYQTWMas63gcL85fPWgBXuGBreqEVGcF45gHhUveAPjX3ZwZzhgh8Fv7gF7bALe"
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
