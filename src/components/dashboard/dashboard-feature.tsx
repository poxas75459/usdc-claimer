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
    "5k2CgUiX2UbBxk5cmLN6oCBbBmsLyooSK35Anwq8gKn3Zxh2jxsfk229EzDidmaAqs8M9ozVU5oUbjZk2QWf4oJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v6kD3fG9CCHKSfzMv17UxFmeKdqctM9DCuQcWp9w28tw1VKth59R3EHMgA7BbxSUStQFWGuxb6tnLutcvumZ3Tb",
  "key1": "5sZd9N4DYmp8uyz2TBCxqj9aN4sCJEwEpGteCHv5ymH24qpbuSAbvt5QwER9gLUeoHe9xoshT1BQKWvGvtjbWuFG",
  "key2": "4YyWc2tFqvit3gmkA4vCdxPCBuEnPBRhBhYTr9mH21RVrYECS4nEq22XnLhJZXQ43xCc9UQh3Au9YNXqF46iA2jc",
  "key3": "66ENXpCBDiUJHtmrdqS8gBanHHtW2DHbA3f7kbCFepH4nTwMo4ATwbyVjoyv6M5EThCJBQEU33tU1yTo2yBZgM3t",
  "key4": "4W3DH4QMe8x2eyvfQpqD6S3Vmvi9fC3wwocAm41BS3Gq93L3BfiPnDL2KipWzyzZbVQ9uACpFGdG6K3RX3Sq3QTQ",
  "key5": "2mXxcREmDp8mt3JUcHZfZrNrusLKuv1HEHmuBkpt5mEL48YogEGaFfrAjfdcFuXM6b4CmYgJKb93aaVbbfdzBLTH",
  "key6": "5miLKcgU9juXENz7D9uDvfmtMuaiKvgvGSXHn9ZGcUX7Ai3tdzFAxnbnbpoo3tftiwMMkaAa2JKNADr24GodRJNK",
  "key7": "2hNkzLnroL2Nz66Z2sDwHrCTRdumg4wiB7M3sibADDN3ouLUoXmgKrKEsTQEKTLru2VNjgnssxtgEC4YLYwhXdiT",
  "key8": "5AwgPBGAoiE89iz7dnykCJ3Kf4rMQLJGWVAaX4qrjcvE2GWoYRqomsiEsRAMFrF6ZvygSvdzxnzfZhGRSS1HaWxb",
  "key9": "3UQWx4BNnwc96nBfynSWGkL1tntmFJfu8GvHCf5Ywyw9kSvyKDq21ogMgwjd2dYwDGR7BdmrbrYKhKXqsK19N5YZ",
  "key10": "2BWYnbi241sqhfZxew8xe24oDgJqn8JzBFe4u7fL39mtiwrPVoSBH3TCQtGNQPQuTjyFSUBR8zxL7Hm9U98SVHG7",
  "key11": "2J1WCgb8fXQPYwQMtpCmjAXvSNf9nynoq3AUTkwb6BbFgm9EmgtR4f2SAzXSe8ocgurggDBNVQ5EQfN5dji7nYH8",
  "key12": "PCVaXYh3odXUF3VdFadTLLHxig3FxGgS5zz5u2rDyjugfZNCowzRUJ6cyi41NWYWaRU8iKz13JmEmNhWM1o6aMf",
  "key13": "3jEwpQgqhwhAzqgKnP8J1YgwogTgG8hCKnpDkSNPGJt5HxYgY8JBKSKu7GxHkgJkrgs4d8bq5frghDz3ETzbZktd",
  "key14": "5ChgyDwzxMYQr5CAB76B9BNNvjGjpieoCXvzMEVrvUSVKDaqJURRNJsxaAMUm2MDAU5NhX6N4SFyE9iiihCQvjEF",
  "key15": "B8SCwvkH5L3pr2XHiH5UhbTfgc6dz3fGCMbEaSyCCiUMi25Gx9rDMsimvwDV6kVxUsiF8kf2B81tNEU2UxUfxxe",
  "key16": "59mTRcBZpRmmqfnFd43u4WxVjdVCELr6EzLc3knG4z1zBsYRoWXSGbRr3dPUqDxvr7Zy3nanfAhavk1jjU2Pch4s",
  "key17": "3hHjU3Z6JtPm2CoA6JfP41Wg8u5p2atBQ9Ew8HhaJyJCy8wXdCJW7x9XfosTjVXHPDfZa2PXLctX4tSpkLkQDcr1",
  "key18": "5h8jHavoeG58y4LPhyqrBHGNZrFMMbWVG4AoZPJ3k6K5dSS528Rbf3vngAm6wtPHfbxfMcL1k3yDPXtpAbcMcJVW",
  "key19": "5hxfUjov5hFoJx9C6YTYhcXNHMUmpzYTRAas8NCR1TVLKmmWPv6FpoEJPS9uCukGd4RvF3AMMM93poEYy9p4wfWz",
  "key20": "25sTzWgqytdUubLknHn8bPV1GE7qequeCkM2TcSijdZPBrcdArsxg6obtkCkBYDgaq89Ay3jKpaSR82WWfibeosN",
  "key21": "a4qPeoN4ytmsSG5bKNvEFbXVxebJTNnb63zQJw3aD7149tXUVNsNpnoz6pwksuF1niRvUF6P14bmxQtfB5BiAjw",
  "key22": "5b1msiyA6pQExjPGozVw4HGtQ8B36Ku3BtEivxENvZDiTdEyZkFrAzX5MFjj8UjnNUP9Jh8Sw8pk7cBav7LJsStN",
  "key23": "2KCfWU2w7QAmw4D8y2pQDhkRUMSTTd7hSGKiLvpHuVGk7JRXqoS3TXdbcS9V6dr6Lv9LSPCbdfb15ipGN6KA7UB7",
  "key24": "CNi6SEs1Tpj88LGhfcPt6KF8kggdFQamaVwkvigMwSjGKuKGic1ZvP4rptjcd64N3ZGxyNPbQUP29prQSvSPyAB",
  "key25": "61CG1cqm27QAcw3Po29dMY2GabdfQGe4zTqysAd9zKL6Lgazc4cVfMTvPsSDADn2etHQm7HbWQnLukyH3mQKE5Cb",
  "key26": "5G9ABRPGCToMh2aNMkBc8qTwGVkoeFExv2vywrAKTLUQJKY68T1tBMNUPRJ8WjDbdG2MmHE5L8Lgcy41CqzyAzPz",
  "key27": "7hReqyKG3zKnzrbexkYg1grFMeaNxVpJoVq9YDJdtz65xD67r9Ha5WBuQzooWVNfdko5wJu6TMnaX8PtWztqHwM",
  "key28": "61zfAtBqcT1ioqtJDgZNdSmdYfnpufQMVe9VWCVj3Z44wVHr9JkWykGfAHJzDKiUEaiRsjz5CcBkeWpgFoh3cGCG",
  "key29": "5ftvnYnCfhBZKTALwuM4wsXY4KZ1MLzisg4Kng3ZmBvSQ6GAEm7E6ieQpVuWcm63FUorWq6icgAgoMCG466Q5Lz8",
  "key30": "6cuvVWK4hvqe33RSTE8wJHTprjeL1oWYNVexZmzaQwrGptpg5qezu7Jb4YVJ8LoCNtiaGUHrQfrahWFL69Xahju"
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
