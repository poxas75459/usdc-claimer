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
    "2Yd6AoHu3s3DZ6QaN1tDJoFwgu2Qcic1nTd1GZncFjjNjGHFdFLCxhPWDQd4oU2H84eK4yVKx4WQNPeb2pYGFeYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KQR9ZLTo3NhNDVYeUpRsyktJbeHWHEiCcjJATfbjoncLLidARkoR8dwtHAuoh7fpH1bxvKQgcHvFfTBxzjkZJa",
  "key1": "3r4hwvC8o3wHDJymwa5DGneDXze1SEGHvLNwHWJfX8rj2VtB6xCADEE49wnkEkemtT2WCshBPYDGRRmyvsp7HjVP",
  "key2": "2roTDAoxxa3WA9Z2yRbc6TUMLxpiriqjJcGDUUon1cRedb2JBtJMSsRGHHXHiGHW1y3pqcgXkTPbJFNeQ4TXoyTt",
  "key3": "3Y1xDGb9QtopX3QBUfEdec5unTr6C2NVqH6obcfYJBKiMBKqvX5WrrSKbbR9vtT5HQAC72rN3TzwaL4iUGnx4pYC",
  "key4": "3Umu8Y2otjPJBK3TTELRCCMbMtWDyoiXUBHsrb7yiLzKq7j2VDiCFgH6qsrvu7eLdEpqzbYsAyfLkForVzqXkxU3",
  "key5": "2fdyT5J7jgc6rvAKd8Z3ZMJMCGZuVfizMj1ZEYfYN2rx6y8mbMRQF7PyEprLUs8YfiPNz3p7Qz3h41N1k2GWnv5P",
  "key6": "3MdP74mytZKkpVCFwAPMF7njyE2XsaNFaoK92WbqzjV573NdPNbe5nenBKEuFoKHa1uLnSCJ5qpuf4Qy4x96iZQG",
  "key7": "3CiTWHFSq5gop9Zq7RGt59LkYzazWKQMVa2DFVXMZ3FxrFKVHbmzqEp2KDNSKv7J5oYDL1ZL9cz2Qh4Kn3hKphoz",
  "key8": "23z94i71QrWD5LSzmAAx2qhpzU41rUsf2FwY2GM5rnh3anPMRWwXHzPGSExqPudjpj4owvqiL9Sn8esdUqWYG71r",
  "key9": "4WRbjfYp9SYkUoahqh8bySFBAz5tfRk1vJ563uceJv4A5QogaAUmoqsn32kUc3GXuFDqJbHhWYhQyJ2dRvJMKEg3",
  "key10": "5WH2mTLNQ84Tb57QmUt8XtXdKESnKbFzkd2vzeyabCbVqrU7rwZPQFFXBQvS9CDpxkk5G1iRJ8YmzwHRNPY91jpY",
  "key11": "QnZzJM3QiLYKmQLtbDk8M9MWkFdh1MQ2epeWyVbq5yLDg89zE5mMgUyRsNCeVi3FcuDgjBY9NLZkAbfB9KuiRWK",
  "key12": "2T2ELC91cQirhkJdmezwNXzWx1JLVBfgYagN9x8W4gUKLWvKpcudArmvDkAQv5TV9WrzjyswY7GYB2RsDETHhfc1",
  "key13": "2A5XhAELVN4mP9FM6XVWn3fZz1eSH3Kb3p6FJNEhRBuByjSBCmsNPPH7vytuWJUx5ampG1f4KUSiUjN5QPsx6mLs",
  "key14": "fBhN3ccy85i97EdQh3mWVWpdxDFLSjGP9ZHcVGQcDcfvbdXHrcwyYEFFWNnjDTcGwQg5DDrva7fYFnTzca2mhtT",
  "key15": "3CqY7oh6TFwZsoHN9fZ4R6Ph2nZjUpxeY5sW8ra919GqHWPwMdPyu7u1EXmfT7awWFjVpJwHAzg5xwFRUU7CPYAJ",
  "key16": "yRHcanWvN165PCRe5jXkghX9cxNPpCy57LVZGMeBwB36e3Mfjk8etmRc35qf127D6qbHMMR15m2w81tj5PDWnFA",
  "key17": "3Vqf3SN1RQWXKrCu2eRiGNWgWcqnwgmhUpgxnREZiwbiXz6nPTEWYhgsKBytxdsKXueN76ZHhTt7CUUgFghTbTTY",
  "key18": "5qeYjtDQRuazM4wa244nAFGZfjxNH9L8gyFQcdYfoj5htdUHu5eDLy5CU1H21F4GS6fhRnhBFdJzrvHHM1w6MBMg",
  "key19": "hgasfkukkkVkScGP48v9D7X4ScGBnUjTEShfoyBr4s7PW7XcNTWdoUYfwkzT6GyTq7uynbeXCs28NBpqSurw7DX",
  "key20": "2G3epoAt1Wgw4Uc1SEmU5Q6wbEiFkdpJsfyGnhVDCUCCq849fU5t3BgvXHDQWN1PjLUd8ME6deEcoLEV58TqPYZW",
  "key21": "2cRMz7YNPpgf8wSz95EfUAmNJAiC3CfFzTn3ZKNjs7XWuUwqcLbh5bWGdzJywJsdcuHxfnDwSX3E3kfX8JKmGdYD",
  "key22": "5DBXZkDp3x9fTNmyP9eWXYbK67qyHmFgrKcQj98xMMhL4JkeG3L34eguAQ7EJBiEi41KDTSKLZUUDMpY91Y6b8Gu",
  "key23": "2njw6e1fdbY4nrwdzs4Y5W2YSJaNUtEfu5zhV9HFPHL5BVeGViVxAnRdvuQUi6bycf4gfjTtyGvgwH7CwwvhckbF",
  "key24": "4hGSm7BXaQE4Hc1c2gG99EawnEP7Nnb42E49wz75r6SmRyUUrcx7Xove4XnMfdbfQjLEkKetFc2yK9sxGrx75XSj",
  "key25": "m7rfVExevBjArK2EoLPjHYoDHkn83SQPNL39X7wtub6BvEKc6rk8ofTNgSgL3S4rtk1YCnzCp5UK7KA2CBhga36",
  "key26": "9vFBMp996mnVQLNzD8RSbbrpsRgj6U8KqtG9M6UzvGxYo9ipPmWWbDTb76sTrGPKxAWfZj1UwV76EPXqXY7YQVM"
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
