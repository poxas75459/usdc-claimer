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
    "4itfEwnKWEyLeLzyebfLchNQ24EXrpcBTguprfTFBat7VD8wWD4W2roKNTUp5UAiraL5sJX2WcXZ6VFuMJAs1BME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28nTAfodjojNRF2cF591ZeCy5mnwsdUUdEsVAkhHZEheeccmpGFCAKDtZ2v1QU8GrBeoqapmArXQA8Ti1H4BNese",
  "key1": "2fsQRNoRVEHYVPNPhGTT5JmSmbfVvpreiQpbmntEaicEkAWMmrhwxD2EEQc2XzB4YpnMNKbWTx7NiU75jMkovJAx",
  "key2": "Cn4Kj3rCNLt8d8JBUmvosZjR1gXSUrXxQToa1v5S3vEafa9qKcDwpFx1f8xtmpoSHBkPag62eEJq1MyS6EW76Ak",
  "key3": "2ujbLzmjHADPTs3MjC1Q4n5w3dQBHceDcb2fqtbU6qmn4G5BpobX15BR8LkLxpFqozEZcLctNp46iMiK1QCcpPjt",
  "key4": "5yLFYjH1oXEjjWGCVcTgV8MbJS5Hdn2nPyqWxev8TdRcTdWezFMJf3e3mgQowjqknERFTBnjEXNGJd5xyFJWS8uY",
  "key5": "2jn3sF7f4xqra4mnFvd9LFkNjeSZ4AsABLLnps8bA129zakDtKDw3Fwam3f8MRcog2zWTZgXSy1MsosHCjqvNTAT",
  "key6": "5HHCkqfFWsiXKRjR5oez7oHDmfnpRJyLFvr3VqvQwwkZiVinAUY4S2QdjNfU3AqabRvdVWTqwksxMzFPt1mNziyW",
  "key7": "4cZjZycc9aQ5mgycaV4Z6LUAZWy9N1DqwgmDtL497Ayvh1XRatyGdWZMXkckbt9TUZKSrESSvVyB5Zqq1RrZ1Ch4",
  "key8": "3XMMJFYnM6uza9zP8k8R8JMwHA9Dwqz2pMeL72J1JA3VGqzduJmPGNXvYb6o22YMixcgV6HkcqNsB6ihekPL16w9",
  "key9": "4tVdkKqr4EMYGc2jGGe9oYwDeeMx3TvsfEhQ7dYpiBNgjVBbpwTXD5oZYd6R1hzdgBaJZ82NXKaoKZiPGecFLhYB",
  "key10": "4L7zBxTnREp5wSCvRfwNv1nptDDgP8AUodjM9JnHV1rmoD1WwY3WXiAxqikX1QCuxe4R8gMq6VUXAt8GAwsxBx28",
  "key11": "2rVwhXtKKdTE8Egwe2YhYUf9JhqWCRG2fj1FgJPb544WzBzuKfCPoyBSZyQUPgagxmsoi7pRWaWxEvLyDTytRtPQ",
  "key12": "4w58tvS2b1et5reD8asFb2fjYsjeqaChZLUinXsgTWyoujfeJGLmUDaood25y6QBGEuBtsJFNSbk8kXQmnjd2gJN",
  "key13": "3vAckZNEcJJfMzWnJ8tcDN5pJQuPsdZ17r9uCpFhrwPRPFxxCucBnwAtmEdkg9J8qbnRY7UPKo6Hcnbm4HyyPTfx",
  "key14": "55htudP6TvZKT8QVtHVvRMa4B7sPBPDthJjH6xeaWF8n9LgrqGdaHLxF1JYyXPSch7mSmUM93uohyvA1ThSjeac8",
  "key15": "4TerfMM7A1UoWGQ3itV9bdHkA3kx7fdvmVFVvBsviXYBsjH5jxnqGt2tpMCQMwfkaUg6BdP1skUQNhgbPogudCB8",
  "key16": "2FZBVSn6mUN99HTvMJRad3LBuXvXZGmCt3dNASDPyWWPdFfpPwFXZHeyCv1KLTa5haGcWggLfzgKy5TQNFx1YSHR",
  "key17": "4XTcrFpMkwXbq9nphSE1j8SZouNwvfKt8RxVtgTBjmyqfwNUog8W2iEShGzYojY6iMoREL1acTMXaa6CmtBZ6A6r",
  "key18": "27vDZnwMX3kKP4NbbxTCp9nDVtTStjozLh9jdTVa69kzEDyJEengxaLSkiFJhQHanPR3UJTBApdhQGVRm9Xux6kz",
  "key19": "K8BcMEXVwZmUhYFVvTyRRYiXR7x4jQukjsMG7Ur6dkdTda5eV7UH9kAoi6RmbPStXQv1QLbo3e8e5FV1mwkSHct",
  "key20": "5wQqPsEMBGyxnPE9Poe3X9k2CE9S6dPTbZ3xtTGLDF4YiyBZsuHvfzyDsX4sAu5TU7PPEipxAG4t1Hv221fT8q5P",
  "key21": "61b1yfHqsuu2VjEMDPGzHpku7XBTyAK8q9cpDmtKbNBD8BcjQQyt4hzCmZ8u8ewgJD8F2Xae8ACm5Mrchbr6p6Tq",
  "key22": "2K2budmYXyt5F6Yf6bbDzSme2ZwGMBcy21wM7d2PhhRXAXkTDqTrRjc4m7YB2YwMgZMs2kxQeS3jnuAQaQVe4C8s",
  "key23": "3E9FvKLxVxFMoh6Bdf8Vfy6FLDbcujAwGB9iD5szbnQDTyLvhMoLXNvU1WPrbGWrHXzoJDpnc5yoWjDLSzCVcgJ5",
  "key24": "35dChioStmY8rp2NZ9DcyA3Risz52J7SDpWGNNNguzo5EKHZL2Aw3fN2Fxm8kFC4AcYQzaV5DzqaVr39Kj4pi5kH",
  "key25": "21A7Tm8BkDdEReX8vPcjbv31eWAQK2obVXYxwdgJcUnHQGft8F34VKrvtWWN1hWw5T7KjxGGqT2kd87ouLr1dKZK",
  "key26": "5gtNHae74AUKypq6RUho2syti8e5RqJNM5yfAktqg82yDCA9RiYckxy9cByPm3wkfCAp29AcncBQv8HAaC76fWTp",
  "key27": "8zK7KGZ1ArCjvpquve3ytamXZ98iJuE6MsAr67Fh5i9MCfxGQ32obwahrsAjzCRNn4MnAXyvxXGFEKUPMtyx56U",
  "key28": "4LxrDg9xbsXUtTqBvKfRDCJ74MNwNPaycC9uBa2qiUschthkKEgq2KDpxp1zVdHgXC8SVv5D4rgm9rvvX38J3tVU",
  "key29": "14EwvvG2o5tuMMLRWrL6W2BVhPLXPprWo5zCVtcnVntwi5Bn9rYE7pE8NpvFhqiRRbDJgC84JxwBcT1NKr8XtUn"
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
