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
    "4sD1BH21V65E1KrG2C3687fCgujV5xwUaXXyeEuv8tzWb9Wvzec39kWYXFe2XKAuTytNwrTVeJ1YSgmcw4TZyddo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56yz9a44AbUToWn6R8TvNDqiqmo7KV8ww5XEu7t4dg83iQwLe6WRdPTKNyttt2wpZ5FSrb8j3K9eXPuTh5EpEqx4",
  "key1": "2AarQH2yzwfts4mMYiZYMmJhR6UbxvzfjQ3VrduteyxS7qmTfiYe9VAmPPJdD9mJVdBUt77wmd3f2fBHxbZsWnBR",
  "key2": "45mNTQdFCEtTVgh44KXKCH8ULDaP1BjDc26MiAdFCcKtmGXtcyXTDY5sXdpRiamJan38WVdsjReUE5DHnrhPXqpC",
  "key3": "4dMCY919DXWiuknzktr5zpKZxZUSgZ9bSSihpteXrHh9W4yHsTqD35Cn1Revhk8Xf7JDThRFH7JYxZuvavrmQ5Dq",
  "key4": "2ZZHLn4NXyCeuzNqMf2H3Pw2jaZxS6waba69MXfXJPLorkKmeWxK6KLfQwM33rYFs4p7hNVvqHy429ZzLUGBacjg",
  "key5": "278rcp2qb33ZZnkG28f27xE8tiLtiLBegoKsNtkYykaJDa9LE2rNrshviEMZx5q3Cp7bojbqMy3iCRbtDBGueuCx",
  "key6": "5bAk34bP8Eps1umeJ8Bf7XbyUqdaJi4HracCRrmMUWctVPc4v5LUbxQ6xJ26jWbusV1zvvkcaaUfBSZf9ym5J415",
  "key7": "kAHkPu5nUeBHLMjb269t39n9uBUUiCcrj6BooKGNDPHAtE7xVt4mGWvVKnEGHZh38yW1oQ3XCPzuLpbEP5HMxWu",
  "key8": "4atA4PQZttVR1EUYbNj4RydkfBpU1obvEfTWpFQYBivDUGbR6T6R8LsFDLAGX1trxaf9eq8YNZaftQGZm8jdYcEf",
  "key9": "fq1VrBgwLs1bPCqQRZYmMWjNkfTVKw3REKxKn71dahVDxxPX7J6pocLceqJix2antirJ8yhxioQN7WCap4zCzNR",
  "key10": "3U7XEwF7MjjWWyYy3tFkYPB7ZYDhBx2fknLhdvjsn4FXdpnHstjsjBGbdYVQPRVHbS4EoJGYojgsai3bavY518uq",
  "key11": "5fFrc5kL23gmeaCcf7YRA5k4Y9fTnpJagqBsHDhuCcHHBTbwmqYfjdxeQRop55UvNQy9BFYXt1CBEUFfThZxKrZw",
  "key12": "22TyLFsJEESr7R61XECctuBGRRVzDNPWndsfSR5Xi1wzmtzQiAakXvz11DLawhg7hZm5JxHYPirPbBH2tN6Byie7",
  "key13": "S2ZEeComhSZaV4poEAQArEsq6tFDYjxHyLLheRpyzfYAmSNDTBFCr858XUsRtz3AmZk4vpgXaTZnCwCnsNykWKP",
  "key14": "4ni2aHC3ZGEbvjb4XZFjeBit8T2Ent7yuhvEGWzTK6FNDETM59g2rBSwPb8NzCQspX4zc2nLPZXGDHuMsSYoiJj",
  "key15": "2AgXNMq8Ep2vLiBJbNZhajCfXhkPe1FbfvsYv62ZFctKoMYTGv3UgQZggUeNAQgz2KRodk6nEkUkLmXh3WLHP1Fi",
  "key16": "3MwbndsDHxZ1eHxEBrayFURoNhNgsXsGvxCxwb99T266pZ9DTR7wminYcqDwmMmYwb2VGhBV12ZHuxoT9ZjtWQ63",
  "key17": "2ChwMPzGZSRCtp2jxa5jLG7CdtfMvmE9B94mCfdFYDPBG9Gfp6U682M7BmwvX99beeGUFvpwYCt1k9vUWiaex8V1",
  "key18": "5RAPNXVAYpSLWnFozysRea6XM5eGSG8G3At9en6eYBXiAHBM2VdhDerskJ5P3kjqRiMgZp9M37XbTzJm8srzKs5Z",
  "key19": "EmrNeGcvhngeBYZbFuoRrQXjWWAuY1r7QJPzrAeGukekFae7LDwuixSpfT8hwTd2u9fiA8UbKCcjimzHLWks6nG",
  "key20": "4VPXSngRJMax1Q1G3wnUp5RNKekwPF7SUkTomd7ni2z6PoGNAf5HravAPqfYHKMYjQVnLyz9G66sCVb1gDLxDtAA",
  "key21": "RxEsMjsJm3SmbDuFCjvvNJB4fk8wW1gbSUwyEyRrFCztSfUHMTJ9azwVd6qUZYGzVSKSyysgjPCG1VoE7LiWeLq",
  "key22": "v6XWjFxxwZ3xLssBUjFFFUPZJU3SvTyLxMnRAT4GCmyAv9hyfrdAzwphZqdaT3BDpen49UmRzoLwFCHWT7uvG9P",
  "key23": "UjeHzthf28AUX4cdgG64JVDsQT5iaCyZEZR7CXKf5DnsFaH6W2z1BokzrdsV5hy3tDbtdMjEAf1QeVdwnF6wYpM",
  "key24": "mCAPTXVm6hEDLj54NCi7DcV6EFERrxvD7YZgvb29rcVLH4NqKNN9CuZrQ8bouRQjB7YsijmXSwGpML8JfffcDup",
  "key25": "4RLAFFuWQLrZkBiQFsrpaae4vVRUcsX9wasnZnKiZwLe2GxvWTQ87AwLBsEzJiam5Uuc6U3fqXGmDdybeFTqNiYu"
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
