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
    "3v5tec3Suqxn5nGCDe2VdHFn7CmUiqjntf2T7pMx7R3FjbzuupQae2zh34t6Wk5Fh48itrmTEwyfV71o6461hU9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29u8VtSEsrpi3mKmT4cdp7oK3xfKfFgTnkuSy8s1WnohmNae2Fq5ZwwFrdpNCp54cNiSWFqcm38iFhgDEtmZZqgY",
  "key1": "5Rh53H2uZsMS5FrrM6NCh98zqoLbqsAYwBTbkGX9bkZHaU1dzsXKbwHUBBkoEcmogWdbT7bcd4skMBtWjN3SgAC7",
  "key2": "4hzM439GmLyrSgmwxmmjz86vdVEiUooQJMwHVvjjAierztroPsjHwYYYa7FEE1eWquR7Swpwc3mgj2YbGhAgsati",
  "key3": "4VEHqPTMoDA7YCZtS39dQo3MRVgAVwFHp36WDBgFxXN2aqpb2hARc3nwKQu5k5gk6GJ9nDcfBZza88h1XfFvbHZe",
  "key4": "2JWykRc8RzdxZ5qH5ZamhF2eYLqPJpjUQDjCGS2gCajkY8jq2QfHgSyW7itB8by6mFXiSzhponvsnKu9yaiVkfdG",
  "key5": "GgiVP2mxaZqetMxBP4bVjzDjy4djvissNop4ogSZjWZKCeiFhkAJDgx67va4a5wHtqGqhfXYkKwRHsQubS3YSry",
  "key6": "51P7rShg4dYrqMRR6oJPtdFhVJy6462cxT1jHSYBJn6dMPJfSM7g7hJRsowAKZ8VCu8V5in35AVg7w752cAifGso",
  "key7": "23BWwYPXrn28RxGt2ma3Quf2pEXVAwHDjz2Fa2EeNaW2ecmkjaE8Wcz28rmfb7iLAXaDM9rWWaEqr1ysu6cdBNQq",
  "key8": "5BPKuzdDvNotead47trb8CGcwyVnAxaUZVVxy1fK3D4Sqt9nx3Hq2asp1B9BFAvtXkaYSGw2opkHgE33L1pgFJxb",
  "key9": "2cY26MgYzjybZkPWayjUQtXc5LgcMByvdCge5FHALVn9c4YoeojckdjbkXQ4ZM5kcES8e2mRDGTH3zEZK7ECYNKe",
  "key10": "dTLpM3dcuBUdpsEofSUUsFcsbCcb3LJ1XksctENxRzMXKwMqjX1EzbFujZDk3XX98wTMDBZ1G5pwjZsBfsambwY",
  "key11": "5af7svG6tr3WuGZGhe3AtZU3hrrbUfyjmjbbEBA91TK7rrTba3QBddeCeBLRF1qtXa5g2TTtfbWxu1MidzeoLaQB",
  "key12": "2LCNKGAfS3M35QEbqeuCMhv3mzqvedqHN8mBXXNumeBVdV6K58THEe65Y3SuFbJoMdwjkSwG4motREWPJ761WiTm",
  "key13": "TyfS249qYj7A4i29JxRhzinM3daU1r6osYrm1ogEXnss6GVnnTGCvYppVDHPdJ3Em1CK34Ttu8mys3aJfAejGzo",
  "key14": "4CG7Nh3Q9QVeFpEqw7kgEuZDRgeTKyXRMKoXW8N61191S28jyEP32mC3y2SLt5VAeSAhqdLmKmzWLyP9zEfStpiz",
  "key15": "3csi2XyFXSRewFSjC5Hfdp1TRMSWtP4xMFFyaizNrgvtbzGkXMXoJBjn7Wv5ifbDB5nZ6pbEoAz1r8dxELfbUdip",
  "key16": "2aYNdW3mgp9FnXQP99wVoi6JTBDT6fL9TMLwjC2itgCx34MfQDRsXrT6zKULrSRC7Tbj8cLdUp2TbF84SEzncNsF",
  "key17": "4gxYhTwqjAdWeLm3fJiett5b2vCJ3fGsLjPm9QqdNPtgwh2SBvmeLBK3L9YHSJriHL16LwzNaUb6QFmBtEf5M2HN",
  "key18": "28r2FfvbMmKisbHSxSGJ6PqcTUgP55XdT1P2DVKgVBLZdDXGfGGBzRFoaRf8LPB3eSATrWvCXRLLoYyWeb3f3fhp",
  "key19": "2gvqzEnGcq7PzyGcDj2vdma2LgSK72u48Xucaq2woVYXGe3gDjYtHEyRhsjPpKwFufxgpDiKAz1KYH7qK6BSxenY",
  "key20": "tKakyHdFFD4K55nW2ep6hs93R1XvBgJq8f3nyxSb2wjG4jja14pxmaYnFBkzwbGrLvDZ9aVitXU3yB6wVA4b6oz",
  "key21": "3ma52D58fXibQwqraAXiNu4E9gimrdX3PJfumvyKPHRpoU7N9DkUmbLWx7o3HxA6B6Th49YhUks2y2yLkssADaRX",
  "key22": "4cTKZFXjmzE4BV5LtyWwc8AcmJL5bcksuz4Tp6wPqd9A5z4T3hLNo6iyJJ42cRwSkEsYwG7UoGBRz8JqfFsSTD9L",
  "key23": "4HzXMubLmHHF4xyAPDXX1oNirrhc8SpvKi4NuVfsrCwNjwvsjS957mVDYqTFp8bxMpqTLWJqLKFgmRdPhCtpf3Ht",
  "key24": "29oyHpSB4NQTTQLnnkTsvbNVk3CCmSP7p2pwJnMs1N2xzUD8RpcHbPfRfWAYuDN4yqefHpudD2U4FuFWJikucno5",
  "key25": "2xJajAEuE7MnTki4KhYKBsB652CDgkKA9G3TwzFfYSrsFv3pMzgQ7duqDVzjjWLzpyVq3azFhZAMjwoqD8VX6oqv",
  "key26": "3xoJ9ZgXiSsEk9Doo4asAwHGj8CAxFz36AXUvq76EUJt6cXhJzF7fopr2SQLnnPfJ3BA9iQ7DWjt2x49TT35WMMN",
  "key27": "2fPhU95cyYHgrhZUyBfDiopMtXAU4FkvsF7M2CoZCjaMHenNNXgjLYomgYXYmouWmBJEbAxBcci4XEeqNrnvLs8",
  "key28": "537sQnJmR4KHxuaZgUdTDh2SyceoopiWLmS5ucWmPkjqzE4ZH7bD4mZNYiTBkNr5fbDGPSbnejGdHQMo8trLcX6J"
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
