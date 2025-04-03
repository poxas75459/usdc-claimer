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
    "5axLTqzp9VVhfQdr3gLnZaBDMQBRpHWCJT8bECPB8eoJBTwDcu2n2JKF3sKdMRU12TKo6Ut1kHnxLd8PbeJM6iwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SpwzyB4xXFBca21kZ5p3ra3KFaAggKeaeGRjiPtpBsCH2zPSyjLbFE942ARhAQUFF7WvjEhhsA3CySEQsD2aUf6",
  "key1": "2dzuDJKsPBYXFi41QfpgyT7MyA6Px5Cq2HXQZLjy27TeXHArG4L2XyRX2Psj2oQehPB7CCehCiPpp34eXMVXYbYw",
  "key2": "mES8wQXZyyg9YgFyXgZTEa4LHimCuzihnD9r7mNmRTm5W1nJYsDnnCLLi2xFd7J6BPUj1QBnH8cw65AwA2qWZvv",
  "key3": "3q7DzUdi2pn2aSZVA1hFjPxauw4NFdxt8ZbRC2MiFsKwjEfmNVCSpxGLCJ24bB4KWePUMdbxckc74gbHdPWDLBRk",
  "key4": "hWpNT91vQN2gSNMPwcSt1RUruXaF2H4BKGY6niwQzz3i8ZSHFHG1eGkEk4ymJxy1QamQXSedNETDnwxjewQPcaq",
  "key5": "oeAstbuN883yvfULmMwGp1oja9c3Dj6ELnSDdeM6XgzQcgqqhGcbgzdiyKLKjDNSHA9KAZRJGr8DSiuMiBfHKcM",
  "key6": "2DRn1fLpTe8wqvajUriFkaLVFrCtxpekbXYtYm3uM1asUkimkRTpdnvdv2MADAAQRx1GWRy3KmH2GyxiFGUM64WJ",
  "key7": "4GfcwuAz6EY7Pyno3UGJbwpxcse5AhXmeEeBh3EpzukaATN7pJirQwrmgbi3KerapeyqtwkAjhSdtZRkDWGyutg3",
  "key8": "3FD6boVsnej2B7Cm4QaCnDYDvhJ9rkzZ7zMJfRa4H3nqyYrjPUTfQA5hzKvLjCsu1dpYBk1HqbtZyfHzEv7hU73J",
  "key9": "4EqZXCvaVpH35QmbwTDuMq3ZYt8CqTyTqcv1GDWynrGttMbohhRxmsV9UybikgM7BnazKFFVLyuyCoB4G7Zr88gT",
  "key10": "51A5Tk96nVuUG7kXi755ScPadN1F6DbWum1MciC9hMpRdYtEZ8u1QKJwxds4TrPdgZ6ADNzcREkZKYvxi687f7pU",
  "key11": "3db5ncSsu32s7QpV96Z1aU2GwC8V6SbASZS3SeUq8BhejfiXvwoCBs6NYLf3nijcQTx8u3qSqpQNJDMLXr8BeFXG",
  "key12": "5NdWkTyu7WTCemVPEcQXZKesVmzxfVESC1QC3hzpHzdu4GgU3M5Ek4hKTXHN3JaXaeSmMChbghvpvWgtE1NXxn1q",
  "key13": "4srqm4XM2Mkzn4PRASgnD2aGQURmiVk2KwSrhTRc1gcgfdcRgvujryFGgWQ9ieeeuuDNg9PWxQkZweozwtCANoFS",
  "key14": "2pFE3cN3yc6Dt1VrnfXjbzsq1E5mpn1tJbiHRDiktTaxQeoTyaDfyYtUwqGXSku7aUiYLGRT7eeWyTBAYb6Pe4tK",
  "key15": "5CAVKg3J6Z5S9CbEVVE8Vpy2y1QbJzSEQRivw9mND2xHCg4RxRA3AuqLpS9dfkCR6cWcYkA6gWSk4FTgXwJgtYyz",
  "key16": "5J2Hzih7MNWWLpPN8JLg28wnrJtVXE6LCYbe3ZeEd69MJrfcke9FRF7kPZJ1LAUK2DQVEpJAxiV8M5sq4KwvUpQi",
  "key17": "5oADo6ooN2AR98h4RTom7E6VECHtVXTgTcCYqKbfbgULMwpPugs14xzPMtWi2TbF1nt136iVWg3mXpcGPJrSeWTn",
  "key18": "63dYHcBrwE5jmBbWn7Vc1iYpiDhU71M5brwDeytxdLqEC3MMWSZScTzQ7EidmN77o1HrXZKYkSTn7LJWTRh2ZQ8v",
  "key19": "4ggkG5S5MkTEbEB7z5kHtY6ABHxvW1b4xz6Cv9NAXLcZ7LAcU3uaHhh8Jhq9v87GBtw9V5CK3kX5Hc57MnS8B5iv",
  "key20": "5f9qs3DsuP2BrQVJYAuH6WZQ6EsFXDesdAASYxZqJ3aKV32ENPLLFLSUFZYhd1m5KvSfqqUdzdyQ99BNjT7Yp1Z8",
  "key21": "2cC1eHy1kENcEGCM8MphjEzdE9KYwy2cmXf1HC8DhcsGJW9tHJW17xmDfvc5apouBGPK2cTSy1S264sKHFBgw7t4",
  "key22": "FokfYMhZWqN1GbMt4cC7LaSgLzyAmHi2we3GCPkPAfxbUdFb8D1uhm86UCbfxMGSxnpdSwSxzJtTyguzPHxE8oT",
  "key23": "ugZPcb96hCbHBLgetnwnLCTjuhBi8DSm3beKGAqjEwPnMi8G487QMuTqn9qJbqaP91AwUaECT6QUSZ2PiZnRgfG",
  "key24": "43YJvXbR83GvwkKfaCb6AeEdE3JnYweUGFwLsf7ZjemMc7LM2WbzMjka4Ca42BkBkSo4BkF77kvbj2dMkfwjG9qc",
  "key25": "4emzKQwLXwYX6P1CS3fB99niHMmkkzXn5u4byU8267ehHnSt9y2zvwoEru9PTGfaprp72k5mCJdi5UaJxty7ZVJe",
  "key26": "3Xt8eB5psaoTFivcVVs9LTCNLVnJD9iFtAVP6PkRz7dNaYcL8r6BZ6ncoaDAiLFQvDXkhPJ8cYHmPyXVj5ordyP7"
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
