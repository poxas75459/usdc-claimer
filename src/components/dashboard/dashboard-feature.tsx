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
    "bPkQP9onzpQSLWyxBRqCqsRovx4qoGnr766A3uVWBFcoBS2R87ExBmt27ukc4Fh4o16oqfmNTKxnjLtVnR6DkuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NtEiKcVsHKzJXWq8KFrstfJRbtzaMeE1RoV9gP16yjP6MN8TnL6FfuEXXBwzQgJJieMwHbf3ooSrJFnNqL18LFT",
  "key1": "37N4CjAnc1MShcCB6o8ApxVzPQDqyLU7LSSNkLuPstKdyEELoh8cERG15SfsNiWNDYJRLhZ8tUn3a93prQ9H2u9F",
  "key2": "2rnPiZ1HoSHC8QadCFybDCzAMobQPpWsn1JJrHDvWRrCyLkeLT1scgfAK2NZ67599xHZPDETvM8DbcdcFPoaty1j",
  "key3": "UMPLmqsYWtVJADKCawqe9jBWb7ssf9GHLLfeyiH76Bji3A8mxek3QXSh5aWjWM7PwLrNhb4hBREMZBSeyvAxeH2",
  "key4": "3ecp8iVeMkyy7iTNinEuRsspC87cV36bZjidtsUgPzmSDC3AUWyeGzKq386hqtER99WBPYJYD18CLZoBV4yoYQXH",
  "key5": "24DwwvdjYdFCnGPfJf8KWLypTy7W4bAHvdhw8N7hzaEYuQs1CpHyqtjGtiiYYMfPbma5whdmsTDgHjLZtdAszA55",
  "key6": "39r4idUvQT8Ebhvsogc9koNS7cuo4rkAy2o4c6XVkbH4Vd8hTSrrYLoojeKWUHFLmT8PLcCTzKa5EZAqKpeaLpTQ",
  "key7": "4pdsoVhXBmCU8Knd5EVQAhhqok4eScM9rKPzt9dqJAMdrv5BCGXWyoqUTpoweSF8WGARHcdJaYvzgQCF2sKR5rQa",
  "key8": "5eACSEDwPd1Ahvjh5nTvQsq3TC1NeBdtFEqugcTYBVkvkF8RCF97Z6xzxLVpLLEQJuA2Q7qH5mV8rWCUymb8FptQ",
  "key9": "ikkYXq344VUa5CYae1Z1FMEK9tAhjNjJ3iQ9mxUNVjrUZoA2UzgyZz28MFLNmGXCQokzMyjqYTedrmVeeRzWg5x",
  "key10": "5xLH9CiywJMfpvZgzrd3UXezADuHqGm7fxXBLxBHBMLmzKvvzLT8owsB55qLEdtBLo5EZ9Rie4cqhDN1dA67xTVc",
  "key11": "4khwfBoivpiuqWr4rhRgHvwMLxx8ugjRZxxZmbUt2LnVCiQuDXG8wTo3jo5s3iE4MGY1oyqtBVTg7GguKiuNKenJ",
  "key12": "3RDqnBthbvgpF4Fcqq7rV6QV2LwYna5DxvUFvwnNtsGVsmZ5PkcmKh6PHmF37aapsMxSACjvxDKSMfSimng9oPGB",
  "key13": "KbnERoYhwic36pdCvTWv2uzC3r2YuPj6LTdibf4x1yRsW2CVHqg5HaEGGAZogdMBKM4Bk3eFFxW2j7vDocBPCh6",
  "key14": "5Drm68DYwsfG4mCWdq4P3w9CTh5pkWPLonuyXCnwYN9PsWJCbBWQazjaog3KzQzYjNgn4fgjKS9qpWTunojeKyLq",
  "key15": "32YSYKqGEHNrAV1jDSLZ8nfEti4DVyqrcGA49PoTnTuB4qMZi8KqBqpovt2JHbsr1iu7usgNgwJo3RVDZJ2mybL1",
  "key16": "4GyRRfJ1qbYAwP8pFzUMFyerAdeofU4LEL6cF9JNbMBAvqP3WDVdiwWPoFiKBVqYQn6pJWbzS2vLGs7T2w2uNex6",
  "key17": "4xDf3UfYNkQbmddfzYewgKhD1omXStKJir24AhfBn3GX6eF1ESWZauY9w1VEJ73m7NXJNTxFmE3VAMoULERdRxeK",
  "key18": "4aMnW1btJo7ZTVvrRMrgDLi27sKS7QWsLWxvNDi9GdmBbtQTZXooUWJdoudv72htvaGVnaXATqD74GqT4nUuXHam",
  "key19": "5VUi95Jafe2f3HaJAYq9dkbCWbCQcFRnWCSeP9i3NSuiAu1U163wY54nnAwU2qkgxdwZpxact7xMWSWDFnpFipBD",
  "key20": "446cXeHqAerzeaFt3fuQvmHrF7GaBpRyjQiCuqW8a3nvWC65fFo5SPuExySbkwTafQL9dMpSi7uSmGEZgGiExRbR",
  "key21": "44CAcuDgjzXxJTduw7abFWe4W5kCxnDghv7irBf12N9iv777m1GdgBpx2S1QNXPzRjxxraod4dt49oG9ggXcDsBR",
  "key22": "2RJjEeuzYsWS6RJNPEPTgqxXSP5CqLRmDjhyxnPYyV3KihiGZpBESGrgsoAWHaY7jv8WzB687MPLH271xPwDH63B",
  "key23": "3JMZv78jhMde8UqFuKhav4aUo2zdRfnKGPrDB5sENeEnAbm6vchEFnKQ5eznsSBFhgQGXSoX15EPDU3jpJhfTzu",
  "key24": "4uSeq3aZzfNPHYdiam7vCBo9S16sQPr4BCCBb3FArBgKrmJLuhXg76ZxnwgybfA2kyTceum2ccavYJxCrtGodgXa",
  "key25": "27LTrrXojURpQmkZnTTfoxi73MiVDga6ikYPebUuJdrT5R5BGof7ZDdY37GxTJoxkHrBK5NWPF9KeBbyKr4gw9F5",
  "key26": "CRpx5AjVyQPETqjhgX2bB3Y2nLpPyibkVeE2Wpgsn56UTd7D86PDPp5aow3Dry6Z2NKsXbKTwPqhbBHknzYHF9P",
  "key27": "MvULnrMig3azL9HBpWwb7EK5J8i2UfPWc2jQAoXwhBtSMhjvb9Nwwn82fdBiMim9yT9bGRkcH6h85Kj46mLTngP",
  "key28": "2BtSwtfP4uunLUBj98x6bbU7d2Ytu8tk3mpyjwhXyLzo2EDNhJB1f3M4tyEVP9fpv4pxFHHQ3FeEMBFaATqVmRy9",
  "key29": "5ePFhXvSs1JvfmnK5GLjZkCUabz7xku9FtyV7BUX8qNJJ8ChmyS3hqQXSBiz7EuAa68eKMJELcv4G9oXevcp15A7",
  "key30": "25DAYYeUfqFiyJ35HEvsZw68c26YnmizyV8BGAVNYdTKiwTE8Qt4Buv14uE7sta1uuyvUa1z6hbfpePP27DRJ5Cx",
  "key31": "4RkdMTpxd2kWauqud8x2EpDBWkMVsmPMYYYyobdMmtUpRwSVFHkiQ2Xp2CsH57ooEnkWSUFtJmQnj8MSGznT6BPo",
  "key32": "3pRf77acY3vzHW8SKcjQeWazs9MddY4Wj8YXzdCRVMtyZMrFLTHx5dLRutY5H3mewHMmJj8qPt2xxj3jLxXdc1kF",
  "key33": "zdjgqumtyQZvWeKDfceMsUw2jdEUvPEziw1KNdN4KfuJFpZhmkiDs5uDyGt2oMJYorkDdiM1H2Y421QsTLfYQVY",
  "key34": "EPJQtiGmhxna14XQWovM9JWsDTUxHbAgTwGXh7d6i1Fa3QizbREi1E9DjnYoqvrt7ez52mTJob5RkfF7g578gmf",
  "key35": "Lgt3ejXfQ4iAgsSTN62o9UdTEfwVZrciP6hbU8tykF1gQAbKW8yBWzjiaEHgoy3F5UwhnQjGRT4iRLPorm2B8EP",
  "key36": "4GD8EgoRBu2Z9T81dLFMUrcupU3uaQM4BLz8c1172ims7VFM9t5MsdL5TqJ5tcXJcWLvaurFoJN65eYsnjheVJAJ",
  "key37": "4stw8rVM93WyMj3fFRT7LVmXfY6qBribkUeEMvQhhAod6Kh7AV1AeQnnMRVroYi3UfTj9aMvsLYbgUi6NsB94HXV",
  "key38": "2MBNLmLjPme3BDezPk2cxFhCBUV1gzSZR3DdYx4QoxTgiAus6MSH9Wjjey7bf5sRnZacBSXBTKxpS7KT83HEgDXu",
  "key39": "4ZiGdZyKxyNsnTKWbefKvWynt6vsPCy5JCww8m1ju8tt36wNHejtSLTk72NgVXpaF9EzKoQ9SwZuYhzw2duw8Z7z",
  "key40": "5xoWTGnxkLKFD81iBVa3rP3w1Pg5xvgTkRfZhUc4mNtLWAgovTXvdhSXwWtAXXFrYZQDjarRs9rJAZPHjFLRYqkT",
  "key41": "ak7r83Ku9UuvWMZNu6bnbzzghkqKxq16TRrpZUCQTbn35dViMZuGsQtW8bDkqwQfTMkE4LPPvAe1rGMCCtkVDV6",
  "key42": "5zEAYg4JHBaAe6ZGkZGyaYWAQejpAyRmE6kCiX83qTEvGhrLeYo9NRX3AhQiThRyKwQwX5Rabk1GKxrc4urQyAyz",
  "key43": "To3DK7GVrGE9LYgmyPPXyq8zodP2k7bgDY6PdSMj3vxwdGGE58SfTavF2VKo8RFHjQhAc691te7DiNwEbgGUXrL"
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
