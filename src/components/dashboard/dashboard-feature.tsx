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
    "2fx35XtshYCpcvy4UdamLPtCbhgFTnBumMdkbc9BC9ePkm3T7Up4cxi36qAS5AHPskZvmASVVa5FNtLZNDJYKhP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UXvzxAx7HN6CMLhNyhaXYj4SunXCW4Zs3Qz4jMo1rLL2Sj2mTWSDR5iRy7HKrnQDfrTdCLPR5JuNWTpFCeSDkck",
  "key1": "4yAXBSjZ2DvV9nTXtextzU1tmNR2GrzakLyPdAz4CExeGPup2EgaXjgkZEcy7J4xvaHP2aFZUstiPH3ncwn328XD",
  "key2": "3DHW1bFV1sR2nqWPRiweCwJDUFQcj99jHmkJoijCHrSnC3SKmi2tNZ6juJFEB3hB8V6WNq8APvqLci5QFd5XvUuA",
  "key3": "N58tmqHSCgcqYFAX7LMpXNTUWkGq8pTzRn7U2B5jbK27uyQ1JXkk4zWejWefPeZkKHzr2LeJGRDA7jpjk5vLrZ1",
  "key4": "2W8GM2vxMSqoUAWhn71DUp3dVMymYSJ5tn2DowytKVtTKcsxdP12ximZiyZp1DWafUJgnVZG3g62WzBA2aJ5qNhP",
  "key5": "4bdgSYuMGXd8cEuCxWi2EjKbEB4HpJSoG9UsojFNm5DwPfHAzvL341uaQS9Q3toRPkFftnLWyrRiiADHZSjFvSuP",
  "key6": "2XAdsR7f5CrK74tWLqEkthcPCYaiEZQseH7dQ38nD73d7ABVZ3gXBMcHCVeP4D3B6zfuwTUHhyA9CnsiVAk8Hwr5",
  "key7": "4yxBqA8LuA4WVdtAmaA9wVGBnWmDPX3Pm4HThNaiaBNNNUivYuDB6ht6x7r5SQeynpNNUiGcT4qH9gNFDxFAZ9Lg",
  "key8": "WgxFa34gNBgHsdc1CLDhnv9FpfM9h7m2AfyXsUxFNH4eCfyog9aizUyBAKD7mxXGwhgQfonpyRnbmBh8YtYrzfc",
  "key9": "2mqrw5DFBr5yf4wA27DpPzK3Gk4yRtiCqxL6nhuB5eiVdaWK4kTUDkLEFZWPqWKTWP1EPas7ThsTxLqFSAZNZhyY",
  "key10": "5ZXDBhTeJ3zp2hJ72WC9cgpnpqphLNgN5MLf1zNyd7UNphEWzMR9tegZrYcxRaFY4wA3Ln3PFHLPLXtC6wVSAPNq",
  "key11": "33CVe9FT7bv8vEQ1GtVsPJHuhvrn5oJpWTmnhqzreMKeo5GzsoHCFas2qAF9dpuKG79z1cD3rChRT3mLqDYFwima",
  "key12": "5CaR8fLncwgc1bJwSVmhKgwbgECvLNuwD3nehoiaJNLxHcvLcp5i2cdK3zRNhuVsxF8ieJAYNUuMBVoMjEewMzsp",
  "key13": "5WRsb3ebqBB1VAcu1gLyHs1QM5QmkxYdbBNAZFA4mxjq8cfpzywwhrxocqvPjZrquyoeEaFtfdWvp2BP9iRdSvML",
  "key14": "rZBSqfBwGwAazjSnZDk4wfG5YR8isuFr1f9apAzMBQqpN56fcH59kdhYZb1QaWxvqsa19CPursAC2tvcR8cmQFT",
  "key15": "5XzTig6NZ9CkLKnXu1K3zwCHuGCLtBpSRKgGVHmZFEKcdPbwnMWkijj6nUfAZ2zFrC2cVDoMEy7u3fkHENY7RdFs",
  "key16": "3op1ieNEH9WJDivhiTqLWsA4vAzzzCWfvCus2FMY2YNEj7g5cs26xz2h4tJKDAV3rvbH4vKNd8yzTZGD61X663mJ",
  "key17": "3TfzRcK4863gHFA65n4XN64JH9YtqmCbzduvjUjt31XV9xuFftn6u6ymt7T7kzakEn6m6NP2NCbMkd2L5gxLpC6G",
  "key18": "2aFyVcBzYhDGAqSjGCCzVTWNs5VX3Ne8tbNb92PY96CNXCx2SfR5j8osHYUdx8iSfDpm5cjRm9DcBJYcAqx6tmuo",
  "key19": "2ic191zBdsbXGWrDYZjVyeU5LqAH6QKeP6P4cGY3xtQ4uZB6cA2SYJBYfs7FkM56g1hLBMGmVw2yXcd1tTCsyJfg",
  "key20": "VYFmUdbToNt2o2z6aQ7PEYxyZXSbxHYb3MF6SwwNtffhSJvoD1Z7Z6yYgo354qfUJFED89T3XcMPAhvrFwfvphP",
  "key21": "2fBnpDcK12gbUeg9QbneS9F1rUjYAJnopFeCmoTiGYbHDUNeTvUoqgwoWDCY2L9nVXGsuujGz5Aag1GUdtg4mDRA",
  "key22": "5QYdeb4vAqjNoYM9PNTsWUhVitPfh3i9ZLRPTmdFosNcautW4snULKYtYMdqi26fFRNWaVVis6BqAhkpURPurExP",
  "key23": "3ra8AqQ7rEz2yKzPEQBoVpjLojgcF5aPGdHYYAVQmsJgy7TwUF1vQKhCmt4wH8t6PqKFZo81AtJZTSfBkAwMHEEa",
  "key24": "24fEw7uE38s6TGDoLG8muF2wDoKip3GYckVSk16YaxjRHVsxtZKNWkJx5xt6PvHYH7RF3YNKkgEYM6DhAJMnCNWd",
  "key25": "dMbisaSThFMrVDTX5RG7NNgUJpo88DkTjQ9daJBRF6y1BA3PLGGeP48cXW1SwC3irpiMXScfjYi884eGE8doFcF",
  "key26": "2J354ipVQTMtwGaevFsUTRyizx63vdRqcBKuRLA3uAq5GPFiohk11SHLDH4eLhcJmKnp2wx4tuMoD9CBAt26mekT",
  "key27": "5Cx1wK9fRM7u4g4qCrDUxax9pwdHpRirdYvd9BbUryd8WatfS8LiFn2kZZuFovVjKUUGNwSJvDJceWQM5qFN5HCy",
  "key28": "4C6bsf1so5RnbiAGMjQXSJY2sEaefGac4UM2h5RbknXzoMFjk9h9UK6YgvJzViYTjP1JPZWwtsHYe6HRRMxY3CBb",
  "key29": "44aMfqzYTN4UJKt1RFRendF83ASWNBSwvguDzGXRaN3hPRPHLJ6jWJPADFWvghwPnYvTrgBuUVN6KctXy4Xom5Vy",
  "key30": "2DStegenuYUBA6Jpoe9kbfY4FbTcmYa9p8xdGmxLiVgM51ncqq7aJptEnoNHGB6ALi4hLR5ZBqwgDnQCHpYNupks",
  "key31": "2BbPXMRCPedHKjjT33pXDmeUXyQxSDMAohjShyg4m8ZTE3kjj35nZmksfTZJZ4t2WwgYYSt8anKDkPSPaMediqVQ",
  "key32": "5sujdBQaJH3NGsSopUEiVvSKTwGC1dvzDbRHKqaHpjgRNaysdhokJuLphV7fxGyqgPyzBHRPbfUof7xvZ79nM7Uc"
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
