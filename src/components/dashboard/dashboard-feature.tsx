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
    "4RYdsFondacQCaFobrzFFXg9pz2e9HgYKZoHtYWvDrzpUkccX1sZfUup1ar5Jx9hPfr1Ps2EmDTSzjcnaQm5NnwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4omWDMHdut4nYMKcAYtFrrK6NG7sZBb8F3BGAD47mBGyXBVwsh29MM9hdbNSsE86vBWNCtqihxNVhBgr8czTg3AN",
  "key1": "41EdKyz8Ducezr8HRCMD6akbBApvTxuo5F9di1dwV7Zj3SJZqT9p1SkYZLvHGiwidW9oDN2R1ot9wPt2M7GSuWeM",
  "key2": "4vg1BqcdRsHaiLEHttryxitp4kngVVAzJQhxukMmk2E7xbuK8Y6WHuqzNQRRQfwVCsPVT4p6GFDRkDP829N6BVi5",
  "key3": "2RzziZ9Z8B9yaLXdvjifGsMe8F8teeessNRCstRBLYU4ZnkbtF7mozXCCMAFRH7qf5dG8ucUjG7PrKRmRsSBxagh",
  "key4": "2dwLUE254kYg2CckusA7ishRxcnQhXoDGiobBEwhh2sF7q8fFaS8DR49cBFpWTjU23QkoQZxmZSur21DEMTXVu5i",
  "key5": "43hADjKPhEwMtPAt9CA8oiHNtMaCY7LfoQ4CmpDdcy6KjK2oVXJD4oP9fT8s2xvrhqs8AvUjhJNRgVy6kbvifyMh",
  "key6": "3z3wmNTed85XXjzoP2aMezjienT6yaqYw4LfebdYMeaN4pMR1De9xvB4Svnmm8GyGV4R9mpS5xDRUc31TVnUcW2T",
  "key7": "5LWUKPLeNjgGtGAhwew71NdipDvA79DBCpH6oWSvCPQ4x6HratER4un3VLt3eMfRwntvvyxzBRZJtyw7QjvZ6dsv",
  "key8": "26ufvpejkhp2Dv1JV6PdfvEGmFuQDjb93gon5fwFHAiouDHsDvjnFirHzpATK6PGueMGYu1VcwSLgXLVc73syJTm",
  "key9": "2zr3ZnFu9VtSi3hxmfJCkVPFBmXG4vb7utdHcfXjTCWddZAAaUQC9sxbyyVmEMFzfi4xH89WNjPoBRx7cNCiWCMn",
  "key10": "41tFSA7odjWdfMUH7qobDSffDL4shovZykTiwU6tw7qWjucxMzpFbAbjqAKUYuqFpgn1pBjszQBBennoxGH5bMrX",
  "key11": "33uqozEXeT9hzQXDWHTyfWBc14HwMTShz1APBWL6DbVgkck5aE2As46mtNBH3qTNQfSp8vvWAtm54jdPqbshHB9E",
  "key12": "3Hy8EirVLKTwyaszLRWGortL88xvyiwnYuwdyEfrMA2RN4TEfzgHZ6bWs3PtshxDYUy3Pqrqp6SBHpHTNeygbCXJ",
  "key13": "4HD7mdxdyE5FmGUQzdRAxB9QSWDq48pC177j5MNZhzGimj81KBcMsBBx9tt9uZPYMayNGGeFzUFfbbRQTC1g5USi",
  "key14": "3stP8t86JTXrVbzCGqjWpAvSucr8PQMJGqfBcbR5LHcxsXsgdRc9PozHUPf372NF1LEExTaJ4k51UNesg6Dfz7db",
  "key15": "SZctmfYa9wXRNxzQPETtXALDo2akePcx4SGrbo4prpJqyPGLUe1DL9KGGYJEL2toFG4b8LzZ8h39Zr1a5nUVk7g",
  "key16": "54oCfRWDrpKcJWM6NisyyqQUCidUBCRmRZSi2U2av9HXk7op6qWYdxiWtofGQB7mXA6adDxC55aMsfmD5PitCex8",
  "key17": "2FCbETUnxt1V3ZAq3agFbctrc2V4GNKVUHxhbw9Wkke2UR2mDXVNeQB5xNRWgkCBDwXMBh9kxKC4pptmLhwPx8Xm",
  "key18": "5F6JiEmNojC1XmxZq7X1hZE419CSgnjEDbT73hYC4WGGiPRdRnVWEPgJ6xZHhPJShUSHWsDXzGeyGeGZan7bToHW",
  "key19": "312ruLsWopJaPWnwoTsKTbwRvRZcUAyVFaVg1Ghwzfv7djaP1z4xq6sYR6nAeHVxqZLAwtBhexT333DnqBLh14qa",
  "key20": "4i9aF9uv9nxn57693vfH6qAERvnoodsQoErn6dRxG2WsGrXQYcGdpQy6T2o8Noowds3G2U6VfNai8qQCFEAGwRoQ",
  "key21": "4uor3moUsxC8Kb7T3xE9kJCAY3crVaGbH5XMm9FR4o2p4R6gBX8oWe9Zupa64SWMW8s2GNMvpzjob3tFKWMiDxtP",
  "key22": "3uBoDHL1Qz67oPpSYzKKUkr1RWDGAj58acwLjDxyfopuZbWaSY6aRUyxvPprsuJHBGFsefZpwkAGxajW1TyWgfEX",
  "key23": "XepkjsH24kgkPNKKtXd86casqKg8PXaMbMgEkLGB4CR74vvKVcZyyFd41AgDxMSxWVdPB9VCS8jBgB4iaWnmK8n",
  "key24": "2WMk6XhiLh8vnvHw4gS9Dh66K2Ux9g6VZBzm42qibiRH8H1n9BDCiGvWyfjYvEfwjoxb52yqWqA11rcjuxepLxQd"
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
