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
    "3t4DdpQKEyyQRGg86mKt7BdG8BjkAZqUFynpaZizMgLmsUVugwNYs5PL2K9GjauRo4AZgnmcGeRY4FjiJY7agmJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P1pE8vFdLJAuRjHSTYHWUJRis8KuBDgDyHeiCFtFA3iKSK3UvL8cMGwGw2M8byjX3nwuxwHiB8kQHWEvaFYfbym",
  "key1": "553X1xeXEzS9XNaXX7pM6pgvcYKsBg3FTDRtbiWEKzSrcWQLpivtCNboGjbNAsEFW2VxSXQ27WAs8e6PUMv45Xpg",
  "key2": "4XvTqCY56eGWGreNTTe558474wgttEHZ3Eftz3eAqhBc3fc1N8SLNncLvtveNjmt6i3Z2woMvLfCVHuo4qz4xtsf",
  "key3": "2bva3Fpwt9p1NbwwMfmqugE1jurva8bYRUfCSvjM2oz8De65FCFnMhTXi5G2bShaPFWYw4fd2QZuMv2RFnp1PDP4",
  "key4": "2417Xcs8nedcmvoLsTTviDASN6mzTsWVGPE3RCTPPNhWMGRDaGWnA9s5kuok7JLG6tUuXnLpEkEu11KrzcBBen8z",
  "key5": "32cB9NMVjp61HDGV92XM4HaFs3iyjii1dgruacQPtNjvLDhs6RaAFdPBSPgEgW7b4Gd7dwnLmwX4CMH63si2FNFD",
  "key6": "DkpWwD1Xf6v8GZZNWiwkAdjq18ZHc444vdNX6PMKpiDpnUGUTYSj1CZuYZGKKiHH2RjuvKQ3sX2D5wKxdJNTuWm",
  "key7": "2dutVBQVTs8yaFeCcvNjnSiLpwHZ86LdrSxzyjt5fw7oABjFMgpnDmL4SzUFqhre12bDx8Y5W1RrEXX3vvVHGwwN",
  "key8": "5sGq3Kb1PaxrjiUV8hYgGABAtzqF8KkozoQt2sf66URfEVyFMDVi1y3p71p5gANChvWZY3m1R94EMLuBfTziaqhP",
  "key9": "4a4Kn2p2T91gv84Q6cxpSs7a3rz7JJA5c1Qf99FBKZQfktH9GMJNGQ57G61m4iVvoUdQ3K8pgYjkj4DVnShttweL",
  "key10": "4fUjQbnXhUJWLx18rcQ2zu4nu7wjsX98cckdEGUJWHXsaon5PirSccqHkgqgoZJyo49zc36NzQ7F58PJDJNtw6GF",
  "key11": "a7X3g22BXe6JURo9ZipkHfkP3TRYCQpAHDxCheZhFB4BiT37XyFqsCE1441Gc4zE4RgxEercdwuLKhVTFutQG2Z",
  "key12": "4ti5XhkEWZJQ57xA1sjDnL9CKfPJGozvETM9P5QAPxFMNBGUc6wCPua3XFq78kh8to1XdQFYzUcyBg7abdiKhHJX",
  "key13": "46hDxwKevGUJ2Y5rCPsnf4jM2pzoJUJrFfhnLjkZ2cKpPkXwkA1wPmDMpqsmHw48LJyzXSABP3upchyGtkX87TB8",
  "key14": "2tb8Tfw3YY7shR86YWbQMGEhCAG8gL2B81PkrLLkg9Nzw3RJSzmYnmWELZ7r2nWqiYR2sJRkoujBAZhSqpxgiiAB",
  "key15": "5y3MWpWgMk39WPV9Fg1Fc9N9g95cG5J6dsKEn58bxZvX83bbuMvzRznh9mwA3MvkktJxjhc52fh4WJ4saS4EWdkC",
  "key16": "5wjwBdPMK4s2zcXC1C1iWpaAkYvRaArHnQS95fU5qRzWKQCAQ63EYv24rtP6JKk3WY6EpX43tdZDjcUWEcx4siMG",
  "key17": "3KYxYMvjbo8dk6PGpirEypv39n2UwuKV5p2F5SxC52uuof7hhqd2yVsQFNeHvtrm7rXQ9ExhrTrcctyrNTPxLeng",
  "key18": "2wAU9xWpyBR1E3kcqGcBMBF6Ex4tucyN8ATP5uVG9ZUZdGwTRdrHng1ztnH4ShMfmhHuy4axiYEAhVtFSotnhnTs",
  "key19": "5WbLDAppKKCCSgSFRcBnaW2zyFgxB5ePLw5iJLVMHNuRDWoaDdFqhxEJEDYncW6LrCQBoSMKWi36y487EAFJxF2R",
  "key20": "2HsDydwvbjDaT6NvDcsoRLxXPo2zNHSrKH3QxB7mm4CbJPaT2gEB3DUTDcmjbVUK5FpdBV94HX41DQN8fAGXo3c4",
  "key21": "2oEckG7mjS8oPh1iegZsLXQCqHAvERZprjpFeaqwwS1f5fNY6ZGtMvMxoeuAF7RbfsCwBXjsYkarSUdw18XExNb3",
  "key22": "4Yt7oeSp9Yi34nVt8WexgPzNb2FZkdbNm8fBzpGMM4NwnAZM97yvRtxDH4KiDvN1M8E3jUccQxmAfo1LmihnzSDS",
  "key23": "53BcJz1J8bjZcAaMtXxGGcPd46XKvpCqUaLRZxWssPvmMVDEzfEH2vEf5yfWq9i3hKiXRgsayh1xGNYHfJmWdTMq",
  "key24": "4Eg1MimvTB6serptmjXSw6czktqrvjsMDpsYQK1Vr8WR7xm1fJNm7k4nZgnZAUTTZsnqHLKiuWK7oWqUxrnwviVS",
  "key25": "5GkBkv5XU41xEfoUDJmWtySFjnyScofxwd3XYjSYcTyjUSkRtxvgrRcoxsbqr62rdnDVLdTVb7osPLh3zSPYYuEp",
  "key26": "37EHAWcnwGBVTypTPxDdas4r6SSNBmc78Kg9F1C4JBXEi5XM62dsXHkcEGK15UCyzxkPt1EmQbncCvu1w99dDLPo",
  "key27": "5ATHcbXRcrkVw18XXLHcCYYrWaosU3H84pWn91AgeM5nyaHRgYLbDBp5t3f6QBgG78ffGqaU2N4Ycu6Qbcc5SL9C",
  "key28": "4D3MM1eu7fJfu52FLtARfxipNFQ9WFLTD3yanpbmeqyh87Rv1ozoiXCMGgr1SnYV8rnvNPLRkPeeBEH6qc7UHfxf",
  "key29": "3AHa2w2xHbHWZJbajhQSmfjCn8FUrExy3jcXMnt6opGcmrJSu3CD4ZG4yG6h2ZLL2viWr6gAxhkeLzafb8LkFC25",
  "key30": "3zaSHUYgoMK4W4xGDsAWCg3AT4ifH4CQZW1SidNvnwRmPgQywyqod69WtDGJRc9apywX3nZwFotkRKSs6qHTVxV",
  "key31": "5ofwexBz9iJqDuVk4Dv8YKoHdeYr3VsjEyaewqkJhsgWsoigcWSBLWJvoUgyAsSTDUv5j8jJeGMxw1XnJW4bHC36",
  "key32": "4We2YpsZseeUmNrXF4zFqGeyoi56YxkPaU4RJggmJqDWnNWZosvX9yTTycc3QH5BLs8vDSNaS3Upp1qDHxyjBZsB",
  "key33": "wZvPwNjsLj71ynHEjFEJNhoK6vPVtjLa15aEvNBTd3a7RPsiQshEtd8n4o7m9E7bRHAQnMGqKL34VeXnZBsctjt",
  "key34": "4zc5mMuhYPtytncx6vo9kbxYrQBSWH7SwExhZZNwFDZX6f7CCsE8o53XGSwKvNqSUFU9MJ1mjPGHMBt9ZSqcAuY3",
  "key35": "5ukXP42sSPfo7MBTt88NzpDbnUQLfzyz6MiHnFJmkVfMT48R4HW8FZBH2cJBpsKk9s6rR7bMU6vvxqefFm3yPf5F",
  "key36": "EzFsNqTtVvRcj2j7cQn1JTbTZ9F8tKEP1Jj7HQ38rNBrxnUVeq6ZgZwmSLxDL1QkNv9KYFGnKWCnLtm9KRnR5Xn",
  "key37": "EE58qD2oB9TUtUQpsKtBjcAomCzDXU1N2gcSngaJa3ew6h4oeF6Zn9S7y5Q6fxwmWJG5pfoiSHvkYGFkah82b9T",
  "key38": "2hhXLP1X1an3Zhe6QT3L1z7bqeZmS5dijZjrr5b2fxkNA9LfBBiAbKPKv63Eqtw58phNrawrNkVrkETybbUUtgC8",
  "key39": "63DXxK9JPma7APAwbCh8cZwLd1WpTQ5iBFad8jq2hAEzeeMrU2SgvsZRvkT4cyQS21REuzWVrxSCfmc1JLmKx7c3",
  "key40": "38BoNwW8uGVTdi3W84cbpgyXvmhscSiiADMJGVPUYpatqbLJTfVZqyDaTAwLaXTd5pDSnShUvyBBx7uthtjAsvM",
  "key41": "5JxLuw4Udx8ujKNGZQaBBHUPrdh9z8pfmvbWVZvtk5W4mVYHxvLnYttSPVk8AWKHmpqK5jzis8kAZAGsq1Apd92Z",
  "key42": "45zwwEMxgD9YRtT5n8PqA6oRjwD5etU2CfHbNqTwiC7QJ5ujxQbnDq8fUGBLENGKg52b6TgeeF8eDTJseNcmyaUp"
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
