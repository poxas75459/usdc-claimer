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
    "5hTybfmZLMowRzcZXaa18MdAvyizQA5SnTRptxKiK1V6zjnqhjcDCukm3humwuNrGJjHntiGrRTNdvbDSHd4DWZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UbLX61H5yCCcjPdy3NhDkjUkQpaRw51p6byBBba2Aqb3AyVWDH3ZoSbc9EQqT9Q4t7jGWXJfWQ3uj7Vm29fRg9Q",
  "key1": "3HSjUNgC96z41Ga5VTYQ9KiiZTLBGHxPseYbDWYSrtfz2At53huPstR4PhrVri9zQX7HfUKzHYHMbkr4EijW52Y2",
  "key2": "64eEs3ZA7hiweh2pV2UNrStK2nrQ3JHvivVtQehcoAnWCkzGm7HVd9aSfPmkcodvQSGowVu2FcWQPLCaCLUvucPh",
  "key3": "nzZDNPyM84SkpXPEPL75FGjdSfxFmJ15aj9teZyfrXGSv2ubX3zfR9n8W9e51jN4wmwQkpY274wrH1tctHTcYLu",
  "key4": "4gpEbfYXsMTMiNUWGqUMysVwyhxCpVbNLm6V7aDV9EXBg5nn36bieq3EEG5oBn1wSbQoU71uiLNFBZw2yHhD9Pvc",
  "key5": "NcgpmyeyjdYYraExfLv8BhxYQ29GdpppA8DcVLWHHEYQ9PgeQMnUbh5a4DTXWDH34Z8rxGzmUWfdPU3vDKF6EYH",
  "key6": "59rWGQAg8W1uJuRXpQT6phN7dLxV4XjLuN8F2ufemVaSYtV2ipAYPYEwUD5eXUKoanKv4D1j5mGMKU2tBQvVg9H5",
  "key7": "49DiUNcRbx1gZQsdAcgub2QHaegrJTvpa16FnfBGwfbfHiw6U25XEmcbaNS5EqqwsN1r6XDs5vH1Sgnx5PYXskFT",
  "key8": "3vwtRHnjKoiB83vgJdd9bkAGgYUkDW4Ysh6MQGhTZyjY5TLhTTj31fYVqRxF59fxzWVneJw4fuDyAPis1TdyxuvD",
  "key9": "4kiL1RLdc5bKx38VdAupx9q71nNNxQ1tUHMKA4hgkv44ooCJG9DqafybPwV62c6FP9xcdpNHp2yxxdWsdYpbUd9L",
  "key10": "5vhv9xQkv32HeGQR7Pq4CGBGkNMnZPtJPAvWGrtngEryvXXt8SvCHB3EJvgMxbUn3EYa3qfVNnJTTuPCtoBKavEm",
  "key11": "5bG6HVuhBUiUUG6CVmGbAAt9feUKFmZtDibpyHT4gRTN8jcpwj3Xn2MXWWsuhQ2nZMkBvaF2wNwDktGqwVYWfGcF",
  "key12": "22c2QCTksjH3GaGukaQvPigzWbUozibiDdbdnzevfgqQcEQZEyxFJTqkMqUhQey42sGKqyLPXFFDFoUmHPMgxmb4",
  "key13": "dDKPoWxU8hQQUGiSE7s4yggm38RZnimZTpzcr5sxW62dqmXtouoq2a9ZRayWCRyTpAoFyAjW3w8c8W9n8o1MQkH",
  "key14": "QHyXbwFG8sVCzXu9qtwFUz419VkubGJVGtm1WAwbMxiK7WyK2zNGCPoW4vm8XkJ8zNzLLZ3xJLFMxPoTVCDpkKe",
  "key15": "pp5isYcngtmrJjzkmx9S5y1hTjRsybRrQHFtJVVqxf3bdHf3L3zrxSQNwsqVdXUCiABHBuHQwApPsf1HpVXehW3",
  "key16": "2ZSRBv3fdgDGKMvdwprCN3LMEaH6EMrUi5pjrcqWK8XwwZY39ZYwy4dDRZobVHXVb4uAydZfwLmyk9S6PH3LJzUE",
  "key17": "vuBySArFsbBh6sK84cnF5xRbrYX6pMiUEDoqdBvYVHA2iC77Jpd7YTqR4tqS5ynxMvazN2XbxMbVCqoDTjpPgu9",
  "key18": "44sSFitGE1QVYtRtpLwPhBsVmF3Zj8w8BAMk4hCMEKSgnJ5mvv66ZKd2Rv8pnMt6wMo9s2vH8SxeHkwGxdFu1pbJ",
  "key19": "4WfFqado72x5Zv2qU2mAzWb71BnTu1AuccGz2jfUqhaES57YNLPEWiDhicNsh84au5LJgjHgQPw66CdZFMjdN9sA",
  "key20": "33ve81sRW18go9zTFpXRhpBrvJNWsBnPRFAMk6PMK4eMJ71xuZjRmFo82L3y159PGydFxyG6KmXpSkwEWpMwgsX4",
  "key21": "4epobobG29Jux6JScu8xZ3TSkLyz2qmqGHEgzA5j4bKB7evmfDBq5ysLbRvFQrrWsHwyy53bEhqnN6SbNNPTm3Jr",
  "key22": "5pQ3TCxjhv7Nr6hA61ZBkfPprmHeNL9oETDeYytf3vWRLPUknWn2dQ2ymVQPfkM6VeYLVH58GVX7doeAogm8Rwmb",
  "key23": "5jphCbvJmb8JRZyXhBFGprE3fGRyRrCPi5GYqJu67ihPNWMy5LAM9V4hcqXwEwA8V5p1XAteLcVJuNDdWLBjcQE9",
  "key24": "2rrzrssRbooAn4CZEbvqLd862LBtKwCK3YvxcHuSEMirbpuny7peHQbNBuvtGBtwZ5xHeq2XiXf4XXH8sbYiXgHU"
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
