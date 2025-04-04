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
    "34uQ8cZ72155teExwWSU6cqSWEi9ms4WpErT3k5F48rrUDgFU3c3Nu9nu2K1iwG5fZoZ312Usrj4eE7i6miAAGGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56iJqAFPCbSw7p6bASTAhMG9fAnqKb5bfFwA25NvrXsVrkpRDCVpRE5mXFGf96iHMfvCnmqCZv9Zd638Ln8Ugy5Q",
  "key1": "4kthNcU8SNHC6TcHtCABW4icgdMU6nv8datsx1jNZyk3gCDmCKsJW8gjzKdn2uRKFqUsYBA6iSN4WJf8ah5UsA9V",
  "key2": "4dyqb9Do27zLyDGxYpqAtubnnbAiwj6s7dcRWi12pWjjyqNh3YMZySs4aMVeSP9nNXj84XVPBN43TJDP6dW67vp8",
  "key3": "2DRakWqvq32h7MBeZzt8gmrFSZcDBkcNjFqRCUdaw19PoyGSuRRTc7ZeYSZdYBF6N8JiVpf3Vre968tQSs7PxhnH",
  "key4": "xTnz7bYmTcr65MmBT34f3cFCwujdsNPedi52YQyoXUDk9LL5j7g88brqSrYZnWgXdxAxnyEayvf2gb9QwGp1diV",
  "key5": "4jvxX1R4DqVB793UZQt6SbweedaskDhuzYj2w8VCA1G41PxqiTBhHD7RHFWY73QYawwZe1DEcruAbUqKJXxGr2Lj",
  "key6": "3tCxKxi5Gt9e7th22t5UJ2MV21zKXuYZMDkwqAzF9bCc1pZKk3haYfihfBvZJqLGU32h6FMU5zcNF2hCQTez6nF3",
  "key7": "5Gnk8jNB9eP3v4vZiV92CzBfFJ8tJ7rm2VvdpVysdS5FAtoyAi7N8JbbUeLVbbdpL3NXuXjviU8XLetLVQakHzY2",
  "key8": "4x9WHtZ3eTH2H5N3iC6ZtRn5CmdzHcHziD1x4Vy2LhN4yDy4qgjZDJfwaQAEFCLyZqn8nZthmZfmRaQ51WFcCkYz",
  "key9": "41WRdZxkJUqRyUWkcjXpc66uKa7syH636LQZ6r2UScDrBcF7i7FuyJjgsLy3qc88PDsxTP8spQuTN2AYdcB1FnJJ",
  "key10": "2gxqNieofabqD4ZNbP1Bi1HZVaUuQd6dPDoKUMzn7BnTyV5dMaFDMYVt5S1R8yje3Xmkfae3QG77V4KHNUmQ7tdu",
  "key11": "H5JQpmPouvgbRGf3Vju5kvshRLpQagqq9XXAMHo2ngE2LThgDsRhxdpa8wJFcsacMiDKKW3Fq9J78KfiQiKqu6f",
  "key12": "37Two9Fw3iu9RcqJenbDnk9VxQ2bzQWJ2dMQWiaFLxTvEJo6umHnKNKEBJVP2k9FoRxGPvXbuPCJw4dthBy9Pjdx",
  "key13": "56CA7ZT6nYG5h5P2yjxH77XxZuNgnoYQPwvANf1fBZZAnQPv3nckYj4M8bGZ8F58MXTsLHwPCDXJPLugis4BnyjN",
  "key14": "3FpQDUAuWA98B3qRQAC1woaLS8hFVBrMih7ivjem4jhmGBVqZpEJqbm84ECviKzrtcmY5ttd6FXAjLfM5SH76KPE",
  "key15": "3s9ee4FgKWq8J683s5uyMTZHqCwxtuisxUpDAAmPdGtkfU93Y52STunTPvpAtWhaozNnyMWrwqE7YrXyiKDRH38L",
  "key16": "4kYDdXDm4rdSzg9Y1dd35ztRZ2Cjb9TN4qBF3QHieNXyw23WzgTQPfLBRcg28RsF6wsET1RFHmLQuTPCPBcPK6RH",
  "key17": "2BK1sQDUHC99wYunpbhbffawrDUT3HSiNJJEZQzaQBRUnAT3vLrxwFdqECgxN2CC6ZrQAJWVLKXWmrdxD3cy1Bf7",
  "key18": "3XzhZGNumbCpXXWd6F5tiibqPmisHMX1poeyUie1eKLkA5nvS8FjaABHqPwCUQU2pzNhinVcPEqUMv79nn1DetAS",
  "key19": "2pCpizuqFYqPGdo6o4yieCeNw9TqSj1TdFnybiX5dxwbtFrwEhPAU74nUA87uQWoDRUSXQUxErtCd1vZHn5sGu5Q",
  "key20": "4YycKDHkcN1zsWk17nExaYCxUc1wcLKDUkYqWkqD7e2VDriWnwJpDrggpwoGn3sxDjNLA6oGL42us7xg9ZixXYLE",
  "key21": "63HT1Kcb82qxEdzrb7dBxM9otgWooTgfHtZR4RtCXSxANmQbes91hhihvijfX8FbzTz4rNfrpJTt5Zuv1LY2betM",
  "key22": "2unpzpFkR4hDeqmMTubEHPwtHhQ94oAVWNyq4NtzB7LGZR2v36sR6MKevhmfuGH6uvQyFgBp2xnzPcdqKhEwDMgB",
  "key23": "3ZPpAt9s9nwvpafXRtkJSvC3AMR1NtgTPyD1kdur29xRp3yUXGBzMKRQMWox2vuYyHr5Qa1nfvySBoxsp9ejCvQG",
  "key24": "5gN1oHLBa1TWk7GRVvHHCrRQ3UXDbjkaK9vhjFAJzNXa1WdcrFAXoxfLfZDKC1Dsc73pMXUrNBYcN49MdmRzdFCu",
  "key25": "2a2hxn5e99A9FVnxHpBMRUekkYTuETWtqg9oWrNJsvq8Kp35vKekn8bqJPZfPDyDXwh9CL9oWxNhSxcZ5HBvhMFe",
  "key26": "4Z4MXNX93376qSRjtEUuUf2hAJWsyAsK6kf4WwzKfuruoLgNtVdXfkrU9dgJwRxpyToQHQSRJ8k4oNc7gyK9TiKf",
  "key27": "2vMWKwwnwN7pBRQc3gPHY7vQmGu4Q3yHZjnA6wrseCNe7axWPKpKPULvZ8dEjTYg16wXH4DCGjbL3YVLtESuCwwA",
  "key28": "4hQZs4upH9FPW8V3VkJNwpFuwEKMhEzLJXSCRRKoPuvYNAkNo8fSQW4qV3PdJvZAAccFAjoorDX8K3zxh1Beu479",
  "key29": "Xu3yC46HdudeaycuzCJnPt6WPpmofd6q5pRUKtg44TbSReb997aoD7wC6dWYMfLdN8GGpCaDev6xBa14ThTZSZa",
  "key30": "5qJ74x452RsYhztW3ow3m9uc6zm1Z2xHWqeHUqvPzSqVRzPAyxrRaCZ8Q8Q21WuHbeq3hqDLDncEFCGg2ayaUWke",
  "key31": "E1ZmcH9Y7yGUaVVFBqzktopEDEZpHVuAbWNRyqKnS3jctavHiw1SEcqc7UE9AiADMg6kumgcftcPBgur9B4EEew"
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
