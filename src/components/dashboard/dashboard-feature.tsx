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
    "4oAtHkTA4yy69UNjv7ixx2Sknmh4rM2jj5S6aadWzdZ8J1k6YCQWXwnjK75pbxj32mWTBmmpGDnXx5juwQrgK4ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wkVMwrAkaaDYVRQ7dgQXtjP8RFDyscZuduRsbSDMtQwrKKQPUvXUWcu6hcZ2yAaDbEDMM1r4QMdbCkYQJLTh9Ej",
  "key1": "4K7QAGQCJrkashS6br3TeZMyrjiAD477xWNsv9F6VPbgc74G5aoJrJtuBkC3QaAify8fXDZrotWdd5ytPUCYrFtU",
  "key2": "3mxn7DfmLVGFFegysRn2mSAdEP6bmJhuFVwdj1G4snefJecnd7dYGhwvP8BBp4L5PyQmiKpsmDgrpSYReCQqXNDS",
  "key3": "3cXDJ1Ep55LTKpcAvrmcYFKSYX1nihLd9wusrt3BnS1Ka51WeenS3m3onvUC9t9uQLkwn1a55icLSUQ7rGDqWzad",
  "key4": "5mqBB9iWm1LpjRsUHxnkks54i5s9fKmLaxNBXbNyic4opQjjdGh342FchFt6fPS9M3qpdtKKrbQULN4RpAbxcaz7",
  "key5": "4owofJ1ygbb4RCeh7p2XF2JuygNGA1MiSJ7WNLPk6eCtfVgW9NZC31GDydpGmeifMU8BLYbGfzbP18JQu6Cb1yom",
  "key6": "2AZzbof77WAP2skMcwTopYaAihPgzqC1pkSFuJhFNCiSFB4n5XDqm1yFufKKgaRQUvpNUYHGBNanfedMbhjaUdi",
  "key7": "5UHkwhFCoJQVpdyFwvZpLTgK2bUhrEU1oXxSf2XRkcTU9UrUJ4B9pKWuC3xLogVLxfEaNAUApX6vabwfq16rqqPN",
  "key8": "LkB8CfbBW9G362uoDtTt6fsbBaom9ewcEHawY87zbAGRPSA1TEaKkP7nusamRigY2o8umnsqWwnanuqK3ZV92qW",
  "key9": "3bWkn1SCwoyQQRKCteDQFpRbpzFkhDwKBDk55nQoM6WweceLcqnwdhMDRuQqrDsepZzppoUgsWHs4VWinDYANcYH",
  "key10": "bfPxCJxXH2Mx2n49w41bNStPpnmGAc2UvCWPCXuJqkacdb1gQM5cCUPW5AfBxpCF1U1yT6MStd2xmXtcn2QA4BC",
  "key11": "3zxT2qwtquMGFhn7Uceh7CUFcaP9N8KRNthQX9tpjZsqY2USayRhvmzNtW9sYhdSEUpP9nHSVeG5W1u5HCHrV5XR",
  "key12": "4C9ea7GcgP8X5D2TSJ3jU6ZfZpYabUYJLkYHFPTpnGSn7k5AAJYgi6gsXjk1ujKdw5cef5QogGfocmKC8HmgbhgM",
  "key13": "47KaxY4kmgNmxwiyMGqv1Sz95wNu7mfgQWeFiMtdqoeWASmYvi6u6Vatwf7iXxpg78LjdGaGfSfBwbPr4bghmC6G",
  "key14": "5rAkrmDrTZbcdN4RGy5Q4PLXfMytAyQTWFSZa2uDB8FjLUM6aN4hA9iMYwt8X1tDW4su3tR18W3PtWauZRXnmNz8",
  "key15": "2oNotPVcVbgMrjBud6d9gpB3fjnqxeNupNTnbfcTbTnZHenh3V2hpPtSdnv6riDPZYJiDAB4CS2wPkddnzBY128m",
  "key16": "2LYvVWfo7GnNP2AB56SBTCcFCwRz7j6xzdS9v1oJaqFPF7A3b7dWhtS1LvxFuPtHzbiS9eVS7JydT1Kj5t9JcgFf",
  "key17": "4P5tXnpKUaSFtweWjr3HwizGiJCpQBy3ak4RzAB96dXetaKAE1TJj6UWb6YabjSoQVTgHhcNAmbEt12hdD2hxw6f",
  "key18": "28dJyETUogwKKL144YQp2CsAhrczAtJmuHygxqnv748jUu44QLJd8ASxtzbr6aQWVynFsKoMwBD11BJXTwR5s9oA",
  "key19": "5mJQ1FTHqvGV3JSgRYkBzh8g8irxvonn8c1yKn3kTVNsMwm5ScP5MoCY7AjEAzWHUEuxkWkRqtGxEDo4YPuVw12h",
  "key20": "ChjKFC9HZFmQMfNuqH3usMGq1mKBAPGtU3jKMRJnGJrW8pRYGrrKJDCpqAwkUAziktapUsxYczxw5qV37YH2sdv",
  "key21": "4vzRur9BHWbeDUCpxCfrr6mUNZ7CvtzuMavhz5pZ12nFx51JtUbfHnzVPE7m24sVB61fucN8r7XEshGc38qGupYX",
  "key22": "4mLoRjGimq9bPxdXLpLP31KoPbBnvQsJzTpVSrLpoF4Mi37E7cmbADKx2uxCEHpvZB6enURDZ4BVrkPQ4PRxc15D",
  "key23": "5TS8XCt9bmnLs2sWQ9x26GJf36Chqa4GzFz6yL7kbcWpSw4dec3NDddLrfZXun2618PcnMEZDsyn68DNvxxMMTKM",
  "key24": "29VEAdatEz8eQurdwG7pcLB1NQVKyt8Vxo155aAYb8acu2ee1HLcMtWXeSRT79aAw2sNGKojkJH7yrgZVExxDgg7",
  "key25": "4e8nnKmD4om3xoSjxziqGJr1rPRHRj8yjhRy7QEvWGG21AnydgXVsDQTumQ81jd5Lqhc4TbSEWdvDqf7zsDdBdBr",
  "key26": "ayE6Ryo7cbvvNTQs5D3cXc4fWW7HmEgFcL7hx4r2sjj5RwYg7ECLvgT7oidFHSk2Ju4MHkGBKCYggvsq6bcw4RX",
  "key27": "SDWRXBd9qrcndixbj48sF31MxabaBVcQRKrndJ62ahr14pR7VXX1yGrZD8Zo8UAdCXgAQzadttPc5DpYvU78dGT",
  "key28": "3jBBbncJYSnrjxximx6LfbK6s5vRNnMBxGo3cVCoftdi63svNe8QmxSVoz62t39AciY8EJwVYLpWKSrbZgowhLxW",
  "key29": "oX7QsQg5HYq23VfKUrMdaHr1KkadHzPnHKEYiwyA94p5D1wyya8eZUQeo5QBCEi7gLL4DuVR1rwWE5Xi7RXRnfz",
  "key30": "2gfFE9nZeDSBVSsGqFRXZHm6wnDaEkKz951d2H9ShQXvGUG9uQSBDrmuuUk8SWNDnkwS3Qt5GsnmLe8rQHw4PRTW",
  "key31": "3EUJrgyYJzWnYJdemAvhj1Hfezhxa9Cn5wCQMYT8Qoa8gtyvcoZ7GbesBeg4bpiX69jqUFA5GxBWdLoPcQXhgMph",
  "key32": "3k9PdKwWzWkKsm3RzUEPDah2JLc9hNPWQSantTQw91w14D5PfY66e9isjigLoNK2iiiaMMawRLzzsWZAKunRq5Xh",
  "key33": "3rv7k7nGjuLi4Kwf2eAnShvCXaYAqwDSNUz64WmG5cprVM2BtTy6NS7cNdBHgGisrm3z1iEgqmyR9VETQW3Eeoko",
  "key34": "3Dr6xRf9JG7Fot4Es1JhKzCdNQvMHrqVxsf8ecSJxtUgZGHzk4J4EMWYBtxEucD2JLRwZbdrfbiRW1XvXBM9G2Tx",
  "key35": "3MEBEvRb1NBGKNDDidipd58ZgsmHkZ7uWcGtQMq6djw81Zzrb6A3XnjtSf2gt9YGLZkcmyWiCRzEzCNv2PE61Tse",
  "key36": "bZ2XQiiPkjRofXmpxY1gcsp7bSUGuq6jYs4Rnj5WdAdi5qjV2JQRYyBEomwkvMiXTuP68TbKs8Qs8j46XE9osSG",
  "key37": "26KQn54jc1pd9mNPoFJXVP5Mm83AdkMh5qJpjLJpCVT1BT39nFFveNDPB2LzNaED5EWeWur6HBxfvTXzPc5DqnVM",
  "key38": "uFfPZ8fMoHoDkHss4ZfGAHLZ1s3CieR9H3NYJ23mZkXpbqMfFL43FtiRDiLoBTbBc3WVzHYgMpu6zFBiE9dv5Ec",
  "key39": "2mrT2UNBNdVCxzTwgqrg1xeQxfi1BKNUDARpn6GsvFmx1f8jrZsup86fn7EZQm27YKDYnu589ExzuPxhSQ71iX6v"
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
