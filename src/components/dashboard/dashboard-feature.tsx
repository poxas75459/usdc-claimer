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
    "24Mrvb7cwStUjM4r2nqfgDvjMG6mUj8bqwBtTfRnWY2wayogcMJtaLy7rdyFahojYHzsLRfWLsymmCxLSDPcJGSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PtPwgektMsjjNVYzcg5DC8T3UeqbM5YmP249fcjUiUmLe7WDsFcY2n15Rpu5vzxEoYUKtHTDwUDgmYtu5Roq1Rw",
  "key1": "4CCNLQGCeM1muiDr7mK9h5pTDZJ37XzaG51Ewcx389f3SNiPqiHKqWzPsHabm7bww2xnk8VP4nWMKksKC6KfVhJf",
  "key2": "2d24YFEeBCKJupr3PEXir5jA5yWhbyVnGUa2YcUW425UVL3CeaECVcA5eK4ExF431TBDpNMvbKmFLjU2WTEGwKkg",
  "key3": "5EojCBUjGRMX9W1emkwssLurxENdNvUHrkwRBge4dPTVUs93APUE62kmAYKDUarknoJmTSXt56AbJC5ydtQ82r4u",
  "key4": "4XYNL82iAZq3MZQNz3QgpfWXscP3pp7nGKPvKnhYTFsV9Qdj7s4oSP5wdwqCCeSFFNxeXXuWTVBhsX5AfKEZjDNN",
  "key5": "4xRQrAP31vMV5DQAbVGfF5y5NmzrBRp9jRUU91XF3SbrZtEQPPxz9ZJickJBi5ySby2MrG2NxqWt3xhRzmBnBkfm",
  "key6": "3czfCkYypWKmm2GpRP63pKZpZUeqnY1vk9XZemSz6eVt61ct6taKGsrubXug1AVS8MxzA2jqsD5Vim2qcrUNCPw6",
  "key7": "2U5JjhMDJjN3ougMsQKEcbSWqzADvySe6h9yiBBqqJwsDd1n2n5GC8F3hN8k5ugkMndGJnaGWf3zNBCGTwEbk2zf",
  "key8": "rX9RCx2EjovjzwGEDVGw4Ehe8T2JRGgmGTbjx8usmXGeZ1rcZj7nKfiwN7bfrUXJyADYeas8BVRh7xrkr97rKLz",
  "key9": "FwV2VzfmpMUAQALJPD4yJrpUcfwFDFFqKXRqKJMSybtHovf7LhRgKJEQxqNhEUoPE6QsmKgbKTY7SdsRzh2YWyF",
  "key10": "2jQkvZnf3yHzJ3fntTcZyjoehki8fui6BL4Rv2B7q3upxjfxDC2UjsriJmtbQSBZmcDJK3AUsXyxJfd9njDnkBL5",
  "key11": "418iyfSNdGAWcNhkgmBgGZc5WbmCQAuBS5yV7AqomGXPrEUZY5t3w1jw21GHjxu1V4wd7ZhiCx7sq94hfjdTi5Wx",
  "key12": "9ATBMfZKgmYUbo2V1N3az5xUruat3MFdszdJLTxuMLjfPeaBg1gPfFQff22oUdT5pUySgthAwf2uwzYCKjvQH4k",
  "key13": "4m3DjrWgPhQzKzdxCd2wykhMx6goH3Fv3c6KfJc5Ho4dAKy9hdsM8NwySWZfsi6oXNuEoy49SDt5p1HGqLhYUv2k",
  "key14": "3fxFxDxfg611DBQu2gA8S4n9qFtMdwDdxESM74YhTeTM5brhHuzEinzGtA1RhgppLEJjn35PSReg9yzcLQ9HGruF",
  "key15": "4TLSCsR7dkejG4dgDt4fRE16qPXhRJfxVJnzRBNC5Gqs5MDaXHpbqs2gSAUnSGKpWEfALTVwvV6LLAJfEg5BiqBR",
  "key16": "BbFz6q1yqjrKgcdgW65ppuSMKvFM6fLbyCknhqv2vLFRuDoTzXRadUFcDJmVzRPdf8SXoizv8dNQCCrcTJ3GvJV",
  "key17": "4GJcDbnyPjdjE1gifX4qdMdPXYNRZmF46Z3ujXCFq28LUZjM7ydfevcVLQDGE8MDvroKsqWwgnkyu27iErQebJ35",
  "key18": "5dzMVWt5wuuvFxmGjMqnKMc4LmUKPfpDMCKNUKCXuqGy1M2kyDJBAZcwt7sQzYNSVv25E28E3ViMrBb2o6frAUGq",
  "key19": "4QxiZ4jt8hjWUdMERF7WpDrE1uNFQ1UddiJUnBSWYzGS43phCJKs5DpJkZVXS1eV55qxsv76nhdNkTn5FdrbtAFL",
  "key20": "2cAuJMm34G5YNzDBdDnCT9JYFbeaYhac2eRfU9KM2Tre8GXiNRfBCcsAcsbDU9c7voyQM8Eh5EsweFFHRNVyatJx",
  "key21": "4rVPAimnivTjR4fDFJq3iuiCdX52Uo3piWnNiX4MgyYemBdFSFveFXrK6yojwaC2KW8rTBwrUaViU3P2zZ1Vv3Nm",
  "key22": "5KWXR9194CfnrDKu1MSDJxdRNQRuJpzdt2rcV3CgbYhpQMBpPkUrBf1KfwFZ5b31kTGDn23L32nni6Fi6q7dLt4n",
  "key23": "2KWviKRPytfMwWZ5fekkSDo8P43Gvyz41exLAmRVrZFMCJjJvepmVUM3to9yVXuPTC1A1bD9BYrMRY5hzUeUMdMJ",
  "key24": "2gTUemx5BMDrNquBxzA3aSwN9YrrEFqddtozkYMjM9tUXHkKz2p1BBEwmTg1aKaoDrknsGXbco396D8TrxvodqiP"
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
