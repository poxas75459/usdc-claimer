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
    "4KytEphLi9ZEa3ZDcDzYdtDxmkKCwVJqJJCKddmG3dM1hvfBBtMFTbQCD7SWgPe81yQPdmJnh95G7GwXrdWAjVze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48iFwRkuv5Po4DcMd2EQMQ3zAPp8c7ihv7oUg8XAz6r5M5ZMjMgju4SmRYRKrE1RUNvzVyEbDzFb5PQNmtz68gVW",
  "key1": "5KuRTu3m2SpkwxR6JcJFHz3HSAZ2E2M2s7VuenVJVyGJBrAfkiLnyWdtGYQdYpp6p4ZeDJYuQwMJHtjEmXBupv6N",
  "key2": "TB4vjTEzMry7BELaSBEpuHZXys1XnyHJEMkNi37iaSFvBquFZBZriWf3ghCcawy7gFXvKnXvxLQNawXkNc75uZF",
  "key3": "2kvfDUt571R51Vfyxk3Q3QFBZ5gKhX5HQqVLiUzKZT7yu6f5K3TkxCNEyLs3DujbxXX4mp35oiA5JujrQ8DqswzK",
  "key4": "2eho1YZj5DdZM8AVHT3oit2Q3yozSmJr5a8kjisMSpKkTdk9qydMd7s74gJhiCSAkEnZnPr9utCRWWGVPQdCzjij",
  "key5": "28hF4NqsAghLibYJABh1N74bJRYraxzNyMsE8WNUqPNxUfUC1bvcpH3MxuBiqdhnNHc4dKqqZf6d9iPiWsdEaTNi",
  "key6": "4N1aodx9A8v4PrgpFad8ZD6MWWd8cBCuH48w5YiZJp7nh2YaEVVKy6Ngn2UpNtfdb5UyheTsK5U39yrKS1uzW7Si",
  "key7": "3yyCwAzwaNJSPjwqPnw9rtWUJ5UCq1kzv76HC1yVtRgSYDWq4P6Mym1GviLJQizfE4kRJ9bugk3LxQ2YoDn4t1DF",
  "key8": "36QgpJT4X4JBzYbqCV4gr15Vc3AsHWmKfx2RDHdrtqbUJVPrEoNQe4rW4wyfKSCLPGaV1xeDmjcoJJhQ2UkoNAce",
  "key9": "4gTsSApwJ52AiTs2ij5WqQmLLaqJJYR8b1CarE4UDQNWdW4dpqqR8k6iXaAUL7H5XWp2bGXSCR1RarjdD8Qr6qvv",
  "key10": "4A8LvHhbwtaYpD2i9rrDL88qiYP8SpYxGV6T6BMQotWmgxFQYoiRGLkYma83eghos73tD9eZ8pMeguiSNY9aJ842",
  "key11": "4UGuHAH9jBgMb1JjVeRjhJyPLU7KYvqeNLKNz2uHunWKSURMUL6yALTk2VrnFgMmPxj9zwgewPqpb3iXY7dMytCr",
  "key12": "5YwCpQf16VHDY7pmX1bQaaPZ3zBMq8KRFmo9an3XyDXyDYZuPNFa6hh7DSKfT2mdVpq8Y7vApv4VjSmmZVAWWZYV",
  "key13": "3pVhSCVX73E7Q8ADtW8tLdNyJoDsWBa63kPDeRLDBPZnkdagdvb8mbQtVmX2ZTFBPezH53tfGcPKBC7FiS7BrnEW",
  "key14": "2Zrput3Cpf4fXsGEmNA6udcefyLtuxos3RmjNdLU4vjpWHuPfsG7SYbgBrfLpxwnoYiap9pr8dU3KwPFpHkJ9t4R",
  "key15": "41dkfP6DhFahBsMvKqHyZVuegy6ZGToEqDfFY7BbXAoFpTjb21Tc9Yiw9XszhQdZ4ZPnJKnUHdNGjQbcqC3MMftL",
  "key16": "38Xo9aDyqXQkjQ66kKgYsGUMhnwP7gBquwUVBZTn6ZdcpdorwVQeDVrRyAoMLv9i7qc1j8VLDL3BpqfeczV6wdH4",
  "key17": "3LZuTTnedz4AcRa9YpidLr18ww4xTKazvgVQRvHXss28V9tcabqUUaePfhrraKmsv9wnYQ73Mfw6ADPXrZFbuVQq",
  "key18": "4Pv3sVCLZbGTyggudYGnAEQsw3MPKbeL57VFR1nmtSvepvyckEE3PtKuHwk35MAxQ1KCPVzdUdscKjAMev2G4zNG",
  "key19": "5x7KZAg853bGXP9mmZNJGhcd5wC4dNk4PkGumMQ3pghg6cnDr6t62JANrcss7qxxJC8BQo9C7fufSiTMu8R428u7",
  "key20": "4V6ChTqjdukZ1dwUbLeM9KWoRitJ6WgNjGA5pLf2ubfnF4vJ9Wp4iN4EAsUfdWFsE47Cvps7Bcgqdi8isCtguRKz",
  "key21": "5xijLDi8ksJTYaHWk6LtQbgsWDBpMH3HNiZ6ARLJYJWWcRBFC7jyWE8rfNyLwPfrXsythC5qQ7mj3Dh5diYTK7cL",
  "key22": "5oDbFfRAAhMrLqG6en7ncgrxBcJ4HZPsLtZFr1wUBu9W5XpRsgEQv58PTrb2PrbdjTzEMM4c7bBm1JDCtA3antJM",
  "key23": "5B3gZMFYMvEv1q8A6P7o7KNV7XeZsioVMAF89icKL2Bx4tbkukMdhiiwiSqra9xQhEXnkYdZeNm6FWY93fzFCH3t",
  "key24": "5e6JZozp8dxzriyyTKSBSZzFyDetC9Pydirnqmv2U8kpNwUbRSX6cD8Gh4Eq4KRxAQZceCTWsE8rbQPdGJdXBpZH",
  "key25": "f2R9VsbMZh2uK1nMnkM6HXSo4TMSnmSQUPTWkd8HJiA5U9V6RA68oXWDUPfCVkmRTpvmYS6db6sMUJZEtU9fDYM",
  "key26": "5fWbV1fTfLJ16Lz8nFCLDiKaQ7dcSNtcgTspzAYMTcwCtHA6F5TVbBJmtpKtt4p9wiF6njcE8ngGy4DWG5eV77qX",
  "key27": "2TV4nFAZNfpfN2VSv6duM9hQ2v4fhYQfBs73Zd6kgBsV72aMDi8jJNdfJDGRbhCuZ6EY3XewcWTGgssWev3vHS7d",
  "key28": "5GreWDfWtXwHBpBWiHWL2ur6wJZgbcKJeBspZJbSNyoZsfx59nLwi3mjqwZD2nVJd9fukbDVDB5hqgB3Zt8XoCV1",
  "key29": "4GTmBEKWnviKE9CwCGJrm1T8hxuTWbrxfrM1tYagXg826ik7hbH6Xez8xUzUp6daQJL4gRbAACv1Wr4EEKfZKkkY",
  "key30": "35rY77hwNce9Ld3BVXP8tD5CsXPMA9HftzLuyPKEyQu8SfwWMcQrJaQAEagBCESkM3tQBBXXAthCrYi1XQuDLGVX",
  "key31": "2hAqjrtk3swzTFqravP3dpx3tdggzVP7jSPWQjmbrw6itQhCJ1FvpRt52j3i5BzDBHscXnn2svgjUkhwHBYmNBpc",
  "key32": "5Ja9umJw8Mrdv8RKBtTovNFtGMexyrreMUniy3Z8p9Qbrv8mPijvKDc1fNURrQMFpCAwVomo2SBWMMJptriCBJQK",
  "key33": "48unJc2tT5SXJ9a6uL1YsZwtVY4UDbaQrwBbM77wPkWje289MMWPwg5pkDhttM63nK77qYT6TMocfj5ey45wT7jP",
  "key34": "3j86ii8dVCWCHYUxbVuhLz4uJ8ZGxZPr3FC7pAQZ3usXRVSV7jN4NpBMxRd6JPp6zpnTPh5C4fRwbeEjVduVQwHR",
  "key35": "cnrsscbtrkjRmS1WipbsFoBNQB4FCiz19FdGymknzwpp2Rhwqz6hZuuHZJNoYDLNH69Z45jTaLxCksC242HX1GJ",
  "key36": "B2tTNUHnACC4kvdmJ1Tur7bUPcJ93ffQdVTqnN4QYoB9gBqwpZLrQQfj4twQzcQgtP4CoJ3GWKhDo94JEsYZpNc",
  "key37": "6YB9Mvv3xo2dSzNFZiqbE2g9P3uAJ9PU2biJMKFRKWSwbXkkH5EouYfv8uy87Lg55XA2NjFk5ZYYQ4Msj2PKa2o",
  "key38": "596ftAEo1SAEVBLUystubNZGanZXeefpBsrsQfL9anS13Nt5HnYGh9PFBDM4rtyzupFYgW4bQ4GVWgSQ6zJ6m19m",
  "key39": "S7rqvc6d6NgsEJW4oinr5Rwc7zQmoGyzr4cJavxNzLLvdUG4RZssMiu78L8t9EQxWbmHZrwA7GMGnj5GVrTBirg",
  "key40": "5TeN2uEzkk1SjCNJbWDtGp4aUsYjLw3qNTxDVJ1QaYsyR15gb788KtUbuQzF6bq7WGGcj5GFjuiNRTSbANhxCdGG",
  "key41": "53Wd1Dqof4E3DBnmTHyvd6YyJg5wDhiaDxTvERde7sbNwy53aevbGciHAVeTQ5kS4dqsXk8Sz46bXp494RshA6ca",
  "key42": "3RBdhy6fZEoxif9G238EMijnPcvFKMf9zhvca87QXJazefJVTEvMpNHJ4csq76ud6WBkk2D3tjQuggWLVBgrJJBa",
  "key43": "4QNh8avpL39itysQoMp3fd77QcwFQ3jphn2m4kLkxUZY1TQqxFTSeh2wY9CjfRASCh61HFHLSzWw6ZM7eEZHjrS8",
  "key44": "EvUfV9B9aPvURrFnGuY8EFURBFKpRBKYREjHZRtmYkwLVTCCCfJNBLcjwwrQvj9zBkSTSCMmsrnZgGiqGBhaLjo",
  "key45": "4d5P9KPzyxci72sU8TiJx4cLa3r4sp8e5zdBeqZH71RZHNnsunKRmPHXCDKHvEJe2jwmN2ta3D5W5LVSPg51wBzB"
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
