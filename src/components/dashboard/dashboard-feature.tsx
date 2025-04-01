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
    "4pMr7MCtKErcgxa4EHWpoQP4W2r5uFG7FL9X6UHK2QNBXczyv7CV1miNm3xs74L5Wn6zd1Zmkoqk5mFiqinP4XqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RnRCUPmd1Xdn6tMBBbqHB84VzfLu3gAKBDUkf6VJrteu6xwHZ7vsYZCNfFUfx1qT1VtkcUgfgaKXNqS9tDnQ18F",
  "key1": "2aGJFUPxCWBT3xZqZ4Q8PFBkxUUTdBWQwQm2EgvzBWTshU1UnsHo6iKEVWT24KdLkTZCwZhyZtxejiBwL4kWC8sD",
  "key2": "Xw58uaRJoFtRkmgJM7e97UC2PfcDiUDG29ZE1B6oALivpF7Uvmr1KhVqfL43E2qTTVMUckgjgWzFgB3AbGgwvMK",
  "key3": "5zebGYquSTGHn3KoWHqbcKsjx9hjdeYcA7QRptDSqF4rNdoeoSi6DMW8EuQ1BKnMnCoU1QLuNLwoZQvGSRNo9DYP",
  "key4": "2cozYoCsezpFbknHCvAGKd9Pf13ZbkzQLYawMRAFp96mQ21E7uSy35r2zHc59cXCWThaCAhKKLm4YBTsfCJMsLG4",
  "key5": "3Bfge82Ck31P1aaJPbLeetttEkEYg8RvA7JAmN5wzjxFMmADA1gMBVuC413mTe8t5SgvNu4FAtbsM2pFtAT9BU6C",
  "key6": "4PgdGC9LDWDzDYsAfDXM28Auwws5ispZn142i2BvSjz2R19rKejMaxkexmVeqwFqjUwbfMmCsFuJ9pEud5nF29yv",
  "key7": "2sWZaa47BeEZtrrKQ2D7AZTmS1Jdo5e3fR3BHcU3Br5fxntExNPQmtfXcTJfRDbse1vGrtSWWRUeWdzDNzzeXRJp",
  "key8": "23VhsJjwpwJnwMjbyAwpeT589vvB1zQU6YQV37NiAck75WBxtmkfjjaRj4jrFBnWpLshVqw8sLxMe2xov5Lqq1tL",
  "key9": "5z4WMjayiYKjsfWy9YWWpcFNRugPAGfmcH9xuboAr7YkjvUKWo3bdfviQoVhrtJDGagDE6MBEZjm257A1pRyh29X",
  "key10": "3BY88CKixpZWgCPjcamNSt6bzXmGAjWpRQdrGu9J8xyccYofEtbL3YhZiMSxVHgmPFuE7A8hedZo14JFem5t28zo",
  "key11": "EyPHPBB7eVPmHg3BLH8hzTs4B1hVfuaoQU2maH7wVb6ex6AwKXPTBEdgttjvU8onfDT9JVz9nCesYhoVSr66VTu",
  "key12": "4AzGeh8h8av5mDVZBAUiQwQuHPbskPSvb31Yusj13wLywLzMVi7ojoTUahaPUFWmTpJY9qhaQtfTVdjhee7Bi5NF",
  "key13": "2avcd4Cv13mpjBXKwEHvqC5Sp6sDQWHD1KMXX2TX6Qu7oDBtZPBBhVoHhGwFeNkZrEKTWRLhGTTGWTvUfQHtrPWp",
  "key14": "2C7sBJCGX4nG8U8aGsXfsEVNbMV5g6aJ71MvaCBYexij5uG7SMHZLbuUPFYQvuwh51sqGECdSRfQbjUaEJNvHhHz",
  "key15": "41f7piTgT5zKuUr4XF7sCwvHNgbTEpR2PkdNa92XcE6fWLZW5mVCvXC5kpdxeKGBqyHvnYTWmvz9X5dMUtrCPSty",
  "key16": "duxHuMacWdd8q1Af3tmACScd3WUdkRoyg2JQhwbYMVcfshrYCLXg3WaRC9ucUxJ6t4bPdiYvUPXhv6TVSm4URu4",
  "key17": "3W9PDXJk38QKRxHWQXxKh1D9Bh5wpN9EPHtUyQVF8iTfvH36gvySfS7AHpqtM3ALicnorkEyL2Y83LbNQG6CKzVK",
  "key18": "2c7dAHkbvGYtLMQ7uVe4dTp5dM1ZRcvWvZHLMp8VKYsrbPJrpBcM9GMNGUir9nFsBZMqMhsozySde249AQpUA8UL",
  "key19": "3TxeDe7i6pNRLPm6tqnmPK9KqPrzgpWq3bWw5Rq3TJPxFRv6xKwA5RWLq8tKoRDrcnxPrEPEfxgtL4RJjRTEVLen",
  "key20": "5e6wzZFzTHaELpruGUTyr83omfZfrMGkzRsrdTHSRsqg3EqSu8goyysNFWqugR6a4juLVNrFjigbRhXxZB1bovYV",
  "key21": "KzkPDaCUhe9giYyrEKnV1R4ukg2c1mH2gvMfzW6w3qi3q2iKoQ2moeG9VjtoDvKuwXRQuy7ALfewF8CrQ242yPT",
  "key22": "4i1AmRinkwB7WbRyL5kf2y8bKnynbVshq7sU8FLjMFq9uB2pqgLzTQG85w7d6pxy5jo1dM9gTfBxirBPpp2jyRDs",
  "key23": "3iaCaaAbz1A2uTaCY8of1wxtavjS2cCdAQbZ45pEJ2gAUJKnFNNC1zJhC9CaVCUrFT2WEzx3jrbUR4g7YFwB8gCs",
  "key24": "2NfpK7gkxriEp3amHaqnV2AYNt4bUTe3meRFVBrZV6zpXQ2HZRo7yas4DnUDx4djzJivHsGtuuczgCW5fJbehbwV",
  "key25": "JZyQxehgrNmhpwRewmDFqjRKNuMR3rvQuzKzqka6ATXSG3RbFHdsxpcXNLL5xZbg6TLhycVNqn1BUNVAG4meuiP",
  "key26": "3efZcy6dEMkssAhZDibsgQag7ccfow377p9w3whEuEXybewShyTJamUiAwugw5MNzeR4QL843JQTw1iRA9KcBFkL",
  "key27": "Kx9coSd5rgLyCFhLc7ehTCDGzZbJhUWxu6VSPqQqB9GcAh1pbRjvRkLNcQLd27z9eiiPDdpKZTuu3Xjpso7CpqN",
  "key28": "2W4cWT2pbuN565yM2WGVDL9uGKXPkBqYdw5EmJbtwfm4MdMKQAb4QeMV94WADxAznutsg9TN8449HNvXKj7UMDYW",
  "key29": "3F5g2ccWmXjqLKFVDWgSaN2Zgtx319ytQBj8dqpa7hLSYPKequiw4StBZNcTw8uBqE23hC2kGZ4LtqTKFn7x4cg3",
  "key30": "5XVKCxHHjHuzoh8yaqLrQtQjf7BSnbH1FCyDTEonJuQDfvqued2pG8fAT8JTZ4dndeEDBsjym6VCh2tdvQs3fBGP",
  "key31": "4t4H9gie1pth3F8nkd6SNt1jAmNWoyfk8AASXd3dLuEjZx81k6GzaAgXgqgEGMra7SuvjV5MSm1Aq9r2ajypSMdo",
  "key32": "NWU3hbtVWLiP1CFndfNKMfSegKoLeMADqK8A65y63B4cECwGs81rHYrTpbF5DHgBzGgXp7jo2voERvoAaCjC83n",
  "key33": "2qyQ6SvZ9geiur4yvX6y6d4AUajqmjKskDr6PZ4JuLHsuhw5Zdy3dYUsaCNADeV5tnPMTvvwWFt1v58TPs6LxsxD",
  "key34": "57NhJXX8ERZvgJGiRwFR2fYZJwUm2Uv3SRH6EMWFVetsifcoRqdaeVQuxH2qMNGpXSbYGmxZGgb2MNgrAZdRcnLU",
  "key35": "47wGpP2KBg3EdPe4U1KSL869AsRWb53B3nE1wLhwvemgxFj2ejqWaCxeTwRyEt85cbsxVTKXYr6gDWaTdxvZBXFb",
  "key36": "3znaQt9mPnVRZkR2DzS9gN2kfuTmcHf83udKpR1y6bM35hoTMycHpAA3PW5WDsXowq4H3BqgGuV21bCFXz5sTF2y",
  "key37": "4EH1ma8yGztbQ1PGBrbyLrUazJfrWpgDh1TrMs31BsTTXRDntV8zoJyK2geT2ohvSAwb6TsUBtjJW4YiMJPp9suG",
  "key38": "4pUtnTgFA9ynRoN1awMbfhPqR2f5LrgrAsqWXTCh4qGqa2fte59KY2AyzsmSNLsrbZaqMVWM6272sRqVVSJoRqT7",
  "key39": "2zdGW76YUHLGCiDijTHqpktSiMkc1qqkuKzuS1RyLcKYahD31kCHm9kSP7x64G3x2E4qxpfyp1ZUuAKkp4HTwfMT",
  "key40": "3wpLKgdLEwuCjMyCDKgrejtz7cJ3cib5yfarwUFKCsP6rvuxUKhW649NA8LqjeSrLR8LwY5T1mN1wt9GBs4JK3Gr",
  "key41": "3EgTqLdjAaHtukWNAnZHUYB4TdRi5kyqYspEKe5omBHTXyBUWiLo2ZhbC94jf4aK538JwcMJpPHmcLP4vQia8LBx",
  "key42": "5yarkPnEFEx5RWYUAqmWMFow64SND1GNAc9JihsxuX7Vz4YNmHMXb5BCBr8KxHhDjQqnS8CqR7cdEqYcwG2qpCEt",
  "key43": "5MtKytrdBvBdsA3r6sNKY93BbDq81Apmn1zWkyYWgTwYxes4uWUhCd386PnJSrpMVndtGuV6Wy28RYA4VcxTEYBP",
  "key44": "VcVrxRAU3TGrHaHR5r4p2vAjumnxrRT9QLSyYtCmHffr2cMzzS2Xo3xdZYoCb7PRN3JWwWR7NpfE7wWCVVqTpbM",
  "key45": "mGZZLko62PaVSpGfnHp3idN4xcFGK5R1YsHrD7YtQFyBs7KfUKY1aS2bnxqRMF1nUmGeRC3MYurAzc9XKhe5SKr",
  "key46": "3UkFGt3zfw5NVAVYWTRRKNiYinB1dat3r861yXxNS8purCGWhjZcDsjhGfVFi1aWzba3X6xyS95u3z35m1YLp3Mp",
  "key47": "4DJmEFhcPUybAcibNYfZrfU8mMJjm5pXZdCFaemFdZ91woX2uXZdccjgck2GquyPEr3yYPWw2L2qNYD3XNpXSCSg",
  "key48": "2FN9ZmTopb853UQUHpXxJUwyzt4ajWaSFTJs3NgzqGKiBUYrwiAotFovStoveCeFDNSddW2qkD9KwHtLp6vFUGzv",
  "key49": "4w8qR7ox8S22gNTMGdXVM9YAPwzdqnKPtchqLruXRCWqpN1PafaDV9WEgAitW9PnHFQYGdTSYjV579tbFyueL1th"
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
