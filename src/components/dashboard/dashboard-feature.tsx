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
    "5XyTVL5hse8EUTcQv14L2aMG4kFkN9THpxr7Bnqxmih7tZ6ToUdTC3PkvCCnUwFKU74i6Z4sAhcwbMeXAbxY3TTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qRMR9AjT4F3EGQtsojATSYXpAMGSrorieMNT3AM8uL9xSBET97HiTd16Ax9bHG7pvBLH6rkAkLJbDq9d43XB4Xp",
  "key1": "4gtA7LjKfsT9NWLHXAnSoc68qZr6ctd3fi4vxVEvhyQhLRmHHXW4SmNyZe85weNfYY68wGYeP4gVZTjpCoq5tvTv",
  "key2": "5BAtVKRGL9RKTmfwHJ6dn6WHnELKuuf5xP87xq3dKXumwNoiR1fZd9DQSywi3fJ24KfAYaouma9XhukwRyiRMBh2",
  "key3": "38n8QQRzkpctfGLyeZZVjX1EwZyzakZRpXCRKpcGqaU9wTi9XLjNzpSPLZ5JBYe61voxzWy4BJJzb4s9sJHBmdv4",
  "key4": "jR39hHkWL86Lu26CHj8jP4hNHvmGimpmm4cK9muDBWjLiJTmvG25KctbAcbquQHXsLb7bVMNTVMuTK7ijCczcMN",
  "key5": "2Qt7sW1ctnAydwegRip8ej1v2oA5jpA5vSBvAaJy3bGMZnffG425KKgdGUi1f84kys8heqUCqKYQFwvYbBNNEKmC",
  "key6": "4JsMyJeo1aHJA75TsiuV1MHaZSLUwXPigEib19wc1vr8FA5zPCtpwAPkYqyAZTSkGCbDPsp2DSzjSywMdzYzB3hG",
  "key7": "3aSi5DhRrM6uqyuvY85kFv5bcLXsVQPME7M4kvB6Jf6JkkAjYcGxv5n7SCrZzhS9k3S2wMhuUW7wEudFfEk8y84z",
  "key8": "5jX1rdX5cCPGL23oTrsbmkc5YyjbcmTcCRgFwBfQ5E5Qre2Qve8aeVztgFnKXB9991P8rpKprkVuoeXsDwDcvyVD",
  "key9": "2c6Bsdci2is3Ld3ac6YSvEJW9a8SoMEZ4Lz7QRarHFLQcGeLB2RoqCF5Sr6VHFpS7GHFDG3sPorDZxHWgMf6HnBr",
  "key10": "3cr2ZhLwqAZAjJsR3aviELUVKcEgtHEfSeuZaSYYtxhzd7rJhpEstaPSuxA9rCwZ6eBa3zNUdiWxXDq1BQ6QdgY4",
  "key11": "4Q7Ld1bQFbB1owTZJXeZUBpkKtEnc7aYrtSi6itjcwpeb6vLHs65tcMbQkNbbStyaAybHnpE96VphNBfWQXhbGTD",
  "key12": "3NwBoQ9RbfmFXdr9ew4uBnv6cxGa7T3X7edniYz9iv735scHq4FdBp7gJAA5F6Gz5EBPeEFCCT4XRFogeA5iyTY",
  "key13": "5QVpAxBJTX9ha68pCadauAZoVkovtHjatG7gnmWpF7hyjeHqD5bgkZqwqt8mcygFtkHbuxUiVGzSZLviZ3NFEJQu",
  "key14": "3n2RPfztgg7cDd9yKu2YzceMoABvCgWLTn2L7RynnGLMrjWtkUX4aYoRY5GeRpz9sZxnxkRzmPoHxvVsCyWTPMtr",
  "key15": "3VXcov758T98CUTeQVTrna47ZyqkaLG4mJrVwpyeJNQDAGULXK8S4j9WqcheE9g9VybkZmSnvNEosx4jW1rfHJAc",
  "key16": "3aHxb9tZqQw74UDRmff7x1Nfpehdm4FsK7wJT5KvM6PErrRWoP26cZUAdCpBYUjdaL4414CFkDboo3Q5uXUVMemx",
  "key17": "ypCjrtC1y6naKic4GFMa6kkepnnbKxBBiogDrQv8QyiihazMMBeDevmUUZjj1bNaJapkJhqxcgwiBT7ea3U28we",
  "key18": "3rUsUTHWQySx2WRshvLNAekbxR2YsLrnzCkHKvLjdvKiHn3EFRoS9JxEqsBbw76zF8oko4iNS29LHnNEF4FCfYsx",
  "key19": "3NxuJk5oVmWdK9jTzbqBVTxwSYGB2CFUaMg52dHixmbtUzhLBReGB46rTg7EFPacbbPrcrLycXthQ9uJTPdCx1LA",
  "key20": "3kJXBLD2EjsTqPk9LByiLyR8fvEcPqjUjz3kbWDi3AostqvqHa3gHFKUesJN7GKwqNNf4G3SqKfurQCZCEXMichN",
  "key21": "XcUK6jxpx2XDYJtdyVwF4EVTxYfgwPBxDjTV37orqCq68DYFpKCCYFRx5xfecHC8EJDzs98qrUYPYyuvriaKmna",
  "key22": "5vjuNaLiQBWeFmAQw8qGA9oxNtDwVm113ruEvoX2c6DWoEvD7CoxxPpXwwig8YeAd3nrSULA4v88SubHmDBW2gPX",
  "key23": "4L9s4CDCHDmUupDSRCT1Rmx44TRPBaoA2tbyYfzyGsagy92VQgHRiRtmNFRrxafG8YJr73KzobVwfhSo8bf2kxXX",
  "key24": "52xxWqeJVDbPrdxzQ7y6pHaUCnvbE1RZxoA38xNyKXZ9ytyWfvoa1NqdtSDRHhLHZbaU55rCu9tSqrWgsmK1y7aT",
  "key25": "5d23RjPRqbUPeUwaasycNJMAf6AHWUdVNG1FNJZxz1rdZt96KXBhFeGGNzWwj6SDbHbUyujjbSheeT2VbJ9h5rK7",
  "key26": "39dcJ2BgZviE829CBXtzq5vAjE9GJ3aNCyXubMLboHFBxt9Qwx1CZGhxVsPcURoribjSAaEBJz1o2D15cqhK6tbf",
  "key27": "5JWKg2JPUM2UNKQTR1B9bAWL5uYT7DSCaxWJsKXL5yXmaXxoY87JrFHweGdETXc4moyjktv1pTYVdS5K7WAWziKo",
  "key28": "wDYFqAKQ9j54vsCwyP6wSkwFahAmeQzGmUnxhfRDCQSHEFEKWPPRLzqpgxPNrEgzh2ivLoxS357dXynJCvoeEEX",
  "key29": "3qBD9ez55VFBLJvZCWYwsxs93s8vHR49g7ybe3KFctQxyM242qAnUBxF4Dg7Bsz3g7aeRUaFg9U6zLs43H1zRzDM"
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
