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
    "4avYo1bE7XWMsDLj8sjECjFyw1wPwHxYqDeji48Au8mvqC7gCPxtaKHi1jjGTxJWDwJ9SqVwUgLCmHK5Afua8fWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N8XSXQP2iVD85WHk2zGCkrC2uVLFoWWkDPpezLqV3CwLJK49X9wEyQPK1FApdXdGtYuJdRHZhqdC5PL7PQmYaSm",
  "key1": "3FmUsTC73nHrQudBbxbzGF4Wr7m7XZkpQStgoRcVZDq8hDk49cYJUAs7bvn4Xat1ddwbEgvFNBJEjd8ZHNyYYDP4",
  "key2": "5hJwccY2hB1iVWYqoQZeYwYjhDRCYbT5NKGdNSg7haSvp3Cb8QYwoJ5fx2yVemtZVEa48h5E5xGfy7KTMsxMVt9J",
  "key3": "62BXL7PWb3W2jFKFdmbM6WZ3upAFKWcGVeUdXFbCphDF9KRCuNDQrYan8daKdCeM5WjDXXjeLeC2z5eVZVnYVabV",
  "key4": "51hwPBLh1ppj7FJfMcg4MQHVLrRZubgNpwwrdf15pzR36xwNK2k7Z2EpfsqaCRde9sqpdBXTDaBjBZBUyY6kF4pj",
  "key5": "2LzqtLfPFQPT6YZwfDhCJwZRZrqsqkh9wVDrX3sGLRUviWvTBFRPDcZSqtkmrkgvFhHGzThcWEhh7mYzBuZhA6am",
  "key6": "3GGzjJsZDVSJFiDLxmSE6uWjjZk2FLGjrEMC98vapFMB7VVtvWLM2t48zfv237uYXqWoresd5Re4eKDqkwnCsVBL",
  "key7": "2ovbDdMn2ums9swFtPyyTFGQ53AqciKc8tTWEhdxHGDHahHs35qiSkmGhKThzTD2CQr3gMKyHxJH1ERHU7nBgTs7",
  "key8": "2PjNi5TindBAaKiHdnYP3QNPh9zmnG8g2eF27FdQuBUGqXjhAZBKPWtGWjJTFTE8ufn7EBj162LLLkNj8HUdW4hv",
  "key9": "hk4CArHVp9Ay2f2DcEVd8B546mxpTDrQYN2HtbTRJt5tCZnXLNvcHL3Vu5EBcfQEWGYcwA14CXF6jS1NfyA3Bo9",
  "key10": "3ZHWw4wnFPnqMoVsV8YZLdA2bNE3rQEm4i2vMq8j95xPwGGjLLBcQLCTvzjuU83EfR8263BwEwWSDKYvq9c1RKcv",
  "key11": "23JMpDW3k8jpQsp4pWFYPZPrUkHV9KEy7327FJEy4pZVNKfUfPMoSEnhRiin2QPazpQJMx1syzS5kv6VATLbshQb",
  "key12": "4nfcffq2oCuHhumUVTxWzGtowHAP1wweQZh6hJYLrQUFdra13ZyWJM1A4L6LjH1e82b7Ay8rHmWp5H9JwGmr8BdP",
  "key13": "2tUuRHhtpyV91VX61dRinGw8KpUnu6tktKkDBY3mY1NzQsdJqqzTATNGycoGifRgEGV6tAAEvACuTCG2ikv45CkP",
  "key14": "2bjkpHz3EiJsLfyFFhZxZvefAnuExFXSempeZYehjk3TGMdBQqj3QPfPkfY7mt8S5pqdC1wfz9H4UHACMR7N7a4C",
  "key15": "3y74zAC5iMHtpSCEid9FZi66jyzFEFBn9Zy3aTcpgitYytmUVJYrXmtoNRdAvSDnEUd2ojwcg7LHm58LA5eLqVj8",
  "key16": "3HawF2Q2RMjw53cPWwGb8uCk88M2CSp6NjxnY9z9ZCPRoqu9gCm5uYfaLPgEuQ7Ko3c5dYrdqcPDjt5sXi5T12oT",
  "key17": "5pi48F1tbRm8SoJkZiuXNUiZzGpFw8Q4FXpeURsHcgKdCs8eJfw7GLThv7n8boPTnjbHBYLSR3mD73vjBTkFrf4C",
  "key18": "4416R9WE7gjtiKEjkYaPzqD1shrtqmJFVaoB4S1ASxLS2oqNisUa3beqKnD13XAeweN4MyG8A8VGxNYTeEEEYxbK",
  "key19": "49L9ce4LKtrA4eBFHZtue5gfa89PZmY3xiRHDaGYMDCnLvVqGG8VRd3PZY9Ccpcv5e4cq7ZrKc7ybwjhjdZfwbKg",
  "key20": "2k4m7iHi7cn7bZrt7WPipH2dJJjmXcRMD3vGUYoxLokCH4LxVPxuEjWkNUuQiDJRjNkpYevnmM7k6zNMUCjd7S8K",
  "key21": "Xth2NSC8JYQ3isp8CisY19CKuPW9uTpW1ERVMZeTKFjatZkstHA3ANpnohnUnF81FoSLp9ipDmRrGyjrCNkZ9pw",
  "key22": "3u2FkZ59wkhcwzwMKC1tna6PG6swHAiJwUcxUVM6Awa9ZopgSHhLsxymNzKr94wpEQcrxpsR8zkbivwSwa7UuLCo",
  "key23": "3N8E95qnPMrimEtUJJBJ4Qz9gMxtbvg2EYE6ctEvX9jSfKWy6WJzoaUobXjsgYYkUywkeQwsUTXvuioz8w9gLZyN",
  "key24": "3bmRrBjuajVRqaLzmRqF559gAyjruUPAfhLZwu5rouE2fZqekRTvJAx1h8zPamF8eHmgtTLSW3nvaNcwEihVYoT7",
  "key25": "49B6Viq1cNgtsp9L9vCbSiqDikuHp3u1StnZw13VW1Zj35Rc59jjmentq3GuY7siZ6ySHYJ1KMKZdF7ztwjGEvgY",
  "key26": "2moNizTfxpKbatgjE63VPnT75zKANjbAMnVVDbS65EoJTrEc34bDb6T8wX78JJo9dh2L3xtQq2BJiyKVVD7KAhgk",
  "key27": "2XocnGi43LXDrBe4XrreNsZ8Hx9kwjwxu8wmRouLCJC2nfytcg12TwcQpqcWgVsDrbXBQZyWjWDyoR4xB5AF2gAS",
  "key28": "UcV1yqZb9pR2opVpUNnu1MAJRSD5YePBTjwEkVeswfYAYZVYjDZctNTHx2RxmvFpHnJtBQU2eULi5P1hBhhxbWz",
  "key29": "2bKTszNV1eEnTev5c4xCj8yEURU5kEZR1pRDyZb4GACeTEw9dpVXdfzQKap7Hj8nBGatmyb8i7wWXG91Efc2Fpne",
  "key30": "2RLA43h5t4TKb2W7ASpn5bcwxK4NJ6PxNHfMVmP2wpcp2TqCrV7kMSXeCT39HFLwbLL7GNAgwCKCa7pGtxaGkQW2",
  "key31": "3S56zCC1ci88dcEPRhoHtn8ovaEz178fRNrxAg6eLM9uReVECDha4BUkiDezgtjXzoyU5LwVeUddBPm8zDDxbuDw",
  "key32": "4zDPdgioP4w5wMiQEZdYqph7kQP9qossRXyqVLFFjn8KPFxY83EqwxWeF5RiT1i2sESNiSDjaVv2rvPUG7VmFYPj",
  "key33": "4GyC97NtWz5Z94wqiRk9tCAnLg77RhxNxk6xDrgyC5NvBXZDyEi8xYD5De2PFS4e6miVGSobjjTzDaTBWX3bRGbm",
  "key34": "2FXZsM5VkVxFMSb1saNEWzCqpGQ6K8FRFaP9Q4WycicGHHVuboKrAMKH2hEZFxJbhWGoHj8tUBr6YbUnHPZqT6as",
  "key35": "4cKD8yxg17MMkSz1kmbSbFvuvK8uvTonbx3AoRED2pFYhzv3jf8xuLyfD7WDRuAnSgfSfVJh6iM57s5qacyeTBjo",
  "key36": "2vQvmDD7c4CQDg6CyjezWtwJJucPJ4SDBetxxuPnf18NSLVXhufMrBVNkKBJLwyGVZ2RiV8jvko5zQkiFhv4bfg5",
  "key37": "2bD5YeBQo7uErUsqrUUXYGPSS53Cw1YiwLZ97p9mRRGWgVFrJhqf8oe3EUqUnXnKUMB3JWXKAn9kAquH4iumjAP3",
  "key38": "5cRPnsZ8rAzXX7V22pPcCWR1qjpkfuyY2LKpCoaSV4zkghx4pBnDLSpiNDpmMWQ1JXUrj4ewTBzhEogtr2F1ETSA",
  "key39": "55dTXC2TSsoiuSkyXSGphDHA7D21vt3sATECu2nGF1pFJwmdS57yFC9qZcSaXDCN4nk4Et8NVs7UFQxJSgv4vnJg",
  "key40": "5HdTEPbCL7V5MkFeFtzF5fnFcxGwhnJtNfP1dsuuEEVK1Hba2j3ENSb5XY7WemxqMxTTjgiCscAGPymY8m1iwYix",
  "key41": "219ERt34mPyLonuGpqB2wnhK8sShuzBDs9LEZnsyK73EM5vb5tbMSw5Paek4HktoXHVSKGG9zESSu861LDRciJyy",
  "key42": "5wpeLHensvfdzZzic25FapHWrWoYzHw71wZtZaneKSxBzqunzEE3rsg189wMVVJx82ZZGgukoRo6X2gDZMmQnGjn",
  "key43": "SWkHAL91ZzF35ccsbcLnJdnX9TaopSaeqZMtK2G4775KNEz5wuMtx9y28o36h5fsGY9WWg3vp4ggiNRAuNiJvMf",
  "key44": "3CLZ74jtzD3a6R8VzC225Fb6tEKpS57YkdC1GSEw3YmaMNsXhznLpsv4PHVbGSHWGBHbzezLmDpWKjAFrb8X8HiE",
  "key45": "2mg5GsCy6sfx84BH4FydUFkxk4sTAM7mAgTUdH22wPPC2VNFfccAHwHaExyE4CKnfHruJPunUoJn6wjn4kZreBDS"
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
