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
    "21dwCfQbhh4egzkpHxcaPZhbUi3CqNxTMHSeoWKkcMHnvN81tSje94BRGM3UKg6LoVtCKSFQfbVNdvVoABXCxrSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "293bcuqv895pdjKga4fRkaS7cQBphkHKjxnYZ9hR4fp2NokWCDyPwHiAmQPSBmKDzio6DvGGb9ihBpUcMnhvjKJx",
  "key1": "4NMaVPnL6D5LyR6T8UVusag92M8uCyG1LbbKkvnCJ9B3axnRCoYNEwpjHbyn9szjjsfsHD2mbNBdhZWFWTqXvxQm",
  "key2": "2cipgUFFKMGy8Up9RtXCQf73fDFfQx4Lyus59rLgRuQ5Rmzwqg1f1EuK1ygpAh7dYm4cWUZP4qsG7csnhHy9Cbwm",
  "key3": "45fVbLTRjT9o5jCATbDQXF7ie6C2GDDnB1MSojRGF7kZkySLLA4aDnrCXJ457FVrWYmCy3BeUYnbpGTizVdHZiVo",
  "key4": "55wkD13ecXPL8oUFtoCNGUCQCFVwqUNdH1dpLABLg66SChEAUETK8UbHfaNNYkCtRgMR5gWcCEKiuWyiB3zgYUvj",
  "key5": "3vkcZJmeVbZ51QUs4H5NDjtpXFSNNYcMyVW9tqjr7ogkgX8aYCmv1pznF3C33TgEexRkh9ijoFCSoQc3DvD3JqhJ",
  "key6": "5Kj431mKXLgJ97hrobGB8vuV9EooC5HGmhBkwa7Bk2Bsv1YYhL7hhwX4LT7YW2rF8M6Jy4RcDZ6ZGe1boexaf2UF",
  "key7": "5QQ1ejoRHcskQfWooXbsxmA3UkYaFhNjceG7oR678pAh2jGiwJeZnBjjegFbCCErvpaWAsxQWBnfjC5QkDKhUgZ3",
  "key8": "5y1XHU5R2PkodvyBjEVBHs5YXyUn8JtHTcBedYagP3VRN169DqDVDhCn8dnwBmMSRxjWSPayYZzLHiauXRDGML88",
  "key9": "kKCsYH44a3ybSCM4591uy1dF3Rb3frHEcFCEN21yMHFr1FUMjtsSnJMf1ugoQb4xgt89yXR5Gsk6YtVbUkuMyLz",
  "key10": "4TSRPGYHLX2XQ2iBAC59d9LNDkixFMvyjce9bKG4YYhERLmLSNTecw2b15njvnWoLbHzdjb3UgKkLNdHQAdU6MBR",
  "key11": "54J8s2z2fgwRtGTNFoWv5b5HXiZ7bMthHdKetrcF2LgYeJzHtFTFemvqwxVcmGWaFFdYgoTHzaTMDBV5K4Dna3WF",
  "key12": "3Y2pcu3WhkcEREkA4cdATpSoBge18uMJpZ66JjovL3hzq5imDY8o3VCR9wXLEfpS8Sc54zHqzw7pCdUP8onAs7Wr",
  "key13": "4uptbiHwsmc5Ava68WpC7eJxJy9bsm6o5WywYjvpiWsd2ycC1XvGaba2FpysUhEKS6SwmpUSspziq1WQzDkRs3jP",
  "key14": "5H9DRWvoHSHnmNbxCdnPYziRTcAg831y71aEX8VmgUuhMKm3LwaH8UzcKuB5cqPfZc7cYHwRXe7gqwE2pYwrSFY8",
  "key15": "3ijj8bTCidYgLE3UG1Hgy8q6ssYdf5Mme6aRkKC7pfQSMcf8odkgaUBqHrXTydRmrzk9a2g1Hzw5pHpuhkxEJuFp",
  "key16": "4N2HJ8uKeK8sTdQ6WfNbU4uGHDYDjGcFsSXv4gzrGPkWLFLzzzqhwdSywaTFm8s7gSBges2MRwGDy2hUXYLMNXE8",
  "key17": "4A9BYu5Nd7qAfpQTjqw3oDx9ZB5otcHFiCqu1TtedC6dp6CNw92uEHT6TAAy4gqhiyAQz3R5ZG6fcEbwqiDGAfgN",
  "key18": "2Cd13XYobQ5g3cgaB6CdsetY2izr4suBo59XfSpoxKtdLhA6jU7m3cXuN283vnZBJnL6xGp4KEjoH4vucHEfF586",
  "key19": "34XYSGU5khBJ7WxreSBVkPVgtF7dGB84fNEqfmU6uqy9y76s5qzTNbiFbPNZtRcg4YF2vEKkn2kUQDoXYGH2PYwr",
  "key20": "2jfuMTCWb33nwzRGxeMgChsDLL7Uknfbu8r9w5uGwhm4WXgWzuC5NXAvgcKLXYi4ZgYKExkCradPx9ByCtZeukrZ",
  "key21": "2HkqnzF3bgg17DDBLbcA16HBgLULXDYcKf69e2VypWa9ZvoMoXogFY1SMDZNBuhyTTYKPvGhFrKCPnatB19iUfit",
  "key22": "5csRhv1i7TLZS96MSy8VZtuerzTKBGVAvud6sETpM5WXDV9W38Q8jsWcJNf7QLEdEmzwXQXUmyjdqGu3mpA9SMSE",
  "key23": "3gmZ97sN9q5F4p6SeedbSGJ2851s8gcFRP8DPd1BWBBFZ6xjB43ZnAzKNWprtDFkM5ELYNNgndFr4MZnN1amdLjj",
  "key24": "4XiVWJn9i7xGUbd1RYQJd2GzZE9c9JRQkK9RZ4eherpfvxSRJN2nyk3QaVyVpZC3Jwqx7fXXPa6Tcyas37MKF314",
  "key25": "3Y3dnCk47WZ3zQTa9chGZNnV2pJe4gvtqhZzGr5oQUEmJZDyUHG1djM5WCXVZPBfAXZsNfXzCdi8w2wCWf4rbLp",
  "key26": "3vrPmFMFSDmibAQH4fjHfWphxywYfWLzW4SbsSyU2LZWBxdMWx7eP4nXcKU4jVH3VEchkqsx5pJZbgD5feofbCks",
  "key27": "5aEuUv7biLKzysscMbgU8WnBK5svdzrCftoU5LxVauwHcVMicvURhWWeo2b3J2BWg2mPtj7yucB2nkZE3UTGV9yG"
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
