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
    "27fdhqeD4yPjLJgJBCacLLmPfSJnb179CS5SQqweeVsFBRuQom4TcPxq6U4oAzq5U35aKxopkd8WSnoyTXK5YM5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DMzpK8YckN9JdvX9stnv93mKc9kMqkGu56Sm2kjxiCYfd7e8sF17ZHYsH6UGdGLckkry8T45MVJuwWghF8mCFHS",
  "key1": "3gTewZd3Tt4xZow2cv7s4MeSExWzAXyuFMz2a5q8HTu8hs5w9DEzBaU3h76w5DBb12h8P6dGZrCLVnvAYVS38yw7",
  "key2": "213VeK7guWcgFM8GzWdXjETVFe6bYKqKS1z99HfnTGbeCcbeqyKscvYRE3UY2PUmtinN8Bj2VkxE8UWyhdbauaJB",
  "key3": "5hf5z8Lxc25Br8KmxQw4X3BZnzMWKmHHdi74ZJaHoxvXX46wtGKatsqfLsVQCBT2DPigrtqXan7pcQu57THL5mtG",
  "key4": "5KcQXRHz5gNdNpJZXUKKizNAfwuzEMsBM1FPMLES67CsERiWoppRmr6WEz8wiz8uXJcqz1XnQ3moZzp1FN5K2jpv",
  "key5": "dYCrsCJF6C1dS1k5cTmeghGy3XZbg9LHjQ4ArHDJbw4JHV1Rh62FrNNnKH9n93xsfyjk7BSgJwFBEF5WKDpg71r",
  "key6": "2zhh7zHvpoySgwSFpGZbyq2sndm5jBLQzDSCQx4rjBCBV2aCEELhUqxX8tjDQc3tuiJTXmMB11gjVtC6f1ic9qXX",
  "key7": "3o139uLHTTVgBz1K8qPY7U3pFPufdjdLm9CwydXwBNt1tDY9bNEy6htRfG3xQUVAqbouhWSizXMDr5Ex6vJNFFnf",
  "key8": "3KKKQwpkt19dSTZiY3hQE4DCwZWDJ8uEy4cCkfsqqnZ83iDBbNUZo9pnEUAqKPpvLMmGpyTnXMADrpybaVpXyurS",
  "key9": "obnC6z9xs1KXiaE5pTrhLyndguSFd23PbjdhT2J1ouzr2WVGusoAdfRmZFqdB56eqYwVK5pZKLQxmpGaLJErqSF",
  "key10": "2fSRYfZVHFatbyQtJamjWMkTJ6Xry8s12VC6mAjsrfDz3GGVGssBoZGxTCMeqFkn3xN7y6gQiRbUVFqTLv9nQkgr",
  "key11": "5WLxkknoZJBUzfDh1G9DSr4FYtt3qH8V5mPcTHY1eaeG9aMJTiV4YgxPdncEjsSX35QcSd37ymwUHwRqfpwyEVBC",
  "key12": "AF4b4u22RvdrfGgMyGF55uYs32cKr2fd8MUZPmLajk7mCJ7eHpk34f4TaKucPrcsSKA2Gop2J2r7izQcmibXS7R",
  "key13": "3Y6PmweQ3seCqrS1YSxf5R2eYspXKpK7jqDuLu2BaABZrb2icrVG6DM9P8haoR5BNhPJ2KEuTPpYHDh15pdRxHR5",
  "key14": "3X3rtx3k8A9MYyjXoWrJEUiebdzRhXhpfYKZud8TZP93V27xm7BHms8Hag4AX45i8ysAJaxpj3NfVvgMf7wLaHwo",
  "key15": "3LHVXGnERkjTmjRvHo6jMeUBUQRP7yLp57dQwviFyavpMw5nsPeSRYkapnDn3BHBqhbsLygaTnYTFB9QEHpDKVeY",
  "key16": "4ghB73hqpmgbdw7rccCtr4Yzp1TPJ2BdvFeU5pEh5UypzTms4BmNipgebMLgTiiwd4rc5cUtUKQfoYZuWXCJL59N",
  "key17": "5SygxDiyw2mRtGX6eWXsvmxNJyyg8ixo2yvwZTL8MfUGTHyEryJ9kGkAxEg59ix9p7NtP8Gg9TBV6Q1RNy73U5A3",
  "key18": "2aYtRzxzcAmsDJujukvh2vxtQH6up9McFq2UYn7n5zETHLtQdhwDrDaFyCa28JDjQx4tqquxy4TmNZeiMmAuNCE",
  "key19": "426tj6fKUNLSHqkLUxmzFwdQRvDb64hq16K1VbRMgFtgLJrFD6XrQxP6C89oZkf8wQ9Y4CPEq9otEuMCV4NHMshb",
  "key20": "zpKFrGxk2ixtBUKX1CW9R6TNZHin9NhEcz2mWMZwYTpxWRuxWNgfnAagrYxdmjKFo7P3jjf2anPpDCUagYRuWzm",
  "key21": "3TyrtTAMfgza3KHTPjTMYYwsGZWpHRjXQ2VoEGwa1ErBUTnEK5nWK6gjg65GgkqThFk38FP31BtL9Yv9zSivccGS",
  "key22": "3QRLq64FirnZaGabAMECnWLc4E6SvGh6K64eaiGWDoXPeXrDh8j5HJ5urWxxwz7tfEhCUDtDnepmZnZ4TSGKfYmf",
  "key23": "5pE8KLfqjLwznevdEoQMoPsPwym4i56Q2CWMfqiB86gLpG2sE4Zgm1NeZ7Y8UXksPjW7nqtsuAcEhgsxD2XK2yTa",
  "key24": "iJHcb2BBQUnN8LddrYhgkzn6hfJfYGGfJrTC8qmxdhpHRjKGwcksywi4ERyYVFHxvHMG2Vr1r9bfE19xLzrZuq1",
  "key25": "5AMRHt24JvY66JhkfZA2DWWciugFDYGWwBt8XDQjnzF93PAzzXtMgPhPBn5yMQrr6AUcGHQeypG4XvfSs7shH9JU",
  "key26": "4vHu4tR68Aj1kM22EKhYVb1XLqnT6nnuRmCS8YSUvc3uAyZJrCeh9YZxu2pc2gSAYPq1gkDFqVHvY5iuoavYHUen",
  "key27": "5asRcSSyqAZhsoN1t69DEadQuCTJ4UcWWbS7vXL4UNHfuQ4vT66VFgAAtBvVtc5EigKYKPAS25DTbgyZNiSY5mCN",
  "key28": "MWCsCX5DFgDc9MqJvt9ARNPswgWWpYmeckzBRk4B1eRJp4RV2CJinp7Y82N1c1Ta1vvN5wGyK6DChZG9g8GGHBn",
  "key29": "5b4wSa9f13iZVNBwKsDpjXYAHvLZ1cYB7XTt6N5vVEKYNQf6PHU7ry7EzLntVKwux9yripVBVmK5D4QXzPbAw74y",
  "key30": "4N77XqvsaLAR1RCrmoYdsPKXg3WHDcgs6p9zEim1y4bpU1GKcD6WvTtmSZGZvb2aUUP256teJuzcV9McvdY28q8A",
  "key31": "83bwT9x65zRYwE5XKzbUG9kBmJ85sLxb1XLBdpS61wHbDt4ZhLmtBNoEsARf62hSv7KGeqdxfAVaiqEtU3yJmnR",
  "key32": "2jtPoH3Mew4mF2UuzHhoEh1h8aSS4QRtuN9qLmAjjfhqQCdkzVMuXARTfU943BFziSkvNiZwDCctm5esDvBcDfKq",
  "key33": "5KJ3VT2E12ZhRdRvDpGuzUkK2KmhsZ9aBmptYK54BoYmL2XvZaBfTBohP3Ki3VXpKBEBK95ewavaDzkTRb8EndKE",
  "key34": "2C3gtiWZxnY4SxdzJhdGYKCpyjRSXenGJyXoapAK8YvrTPQTXDrdsS5V9na6dm9uXmHWWDERy9GQxHDsjwrgtu9n",
  "key35": "CYdLZygefdYM8LL3WhMp6CZAbgKW2m1DsnjyzgnjqatzcbXwzkonSzWofBqNdPo4qbR6Uri5Eab8gaQWPbr18H7",
  "key36": "3jViyDnuVmYyq9nwm21YAQmHvwPZ3tNHsyYUe5DLFPzmMtSYzpJ8T3s2Pyd6v5NokUFy4Ry7yAVcCmveyTnqMgjP"
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
