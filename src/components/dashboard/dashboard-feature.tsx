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
    "23FrKRxhFNSAp7GHWqoqgqrHQCY6BxJbfvoePbJ8Pwj9pg1YQ5YrzdPupYg7Wdf4nj37wtJGLoL6qkHPjkDe2hue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XV9K3hgw1dzWDAfLSWG1ZRQjcdNSDUxTBofRACi9kK7cwvRbbNgYK28TR9ybdAMzoo7ceLTTYTTurtvufBvk8mQ",
  "key1": "5fB8c26UtMZNtP3WAt6ckFSquywmbReAVj1nRKwZcwVFSpwsTQRjEcG2nkWvANWRBcUbkZP4ThQrTBAqMEqey6nK",
  "key2": "4kiG18xKJ8VXuuY6yDABj6daFQeWNEzBsbeHs4RBtKNrWuV11zPyqK6GxKqGKK5z1cYWJCdZY7ZkEJqWCjGQpFo4",
  "key3": "3VJMjaLSdEaFaF6bxNHckjXHK1cPGk2KPWjcRMJDSXT2ew4HXFDYwkjyjEEBbRMKf66FxiojeHBMkh3g1ond3njS",
  "key4": "5HWZv2omLJEDUNdk3G4YQLFiXBKGhMo3sFM4zz3c1WdtW8UtSzAGq8goGPUkfiVz6DewHbE4GBrczS3SQhzFBo8w",
  "key5": "3fBB2cvmf9gz2Mo8UNwJwuShweo1fhvP12yiDKXv6BvdWPsEQ3wJ7iyaYxfhj61sXzzQDamVzxpKEgG322ggHSCP",
  "key6": "5DJ6SRBgbTy83tP9UkbNBU9jwdN6LPwJYfBoutdhcmNFZmGWPTpUC8ZSM9F1nmbWddWEKypHFKDfRiQc6Dsv6k3Z",
  "key7": "3A2j5XAcgvX9jCtfJV5FNxBc3UXudCi46P7Wqptk91g4gceGE2yqk88uqxrKyp11UxLyqxqyjqEfwtK74Fyj19b3",
  "key8": "2sUHNmY5QHo5SCdjv7q9Yr1BvzgwpXMxjHEZSQ7vXtDWqUYZWpu6r67RMiwnwQPzXAzcVkWycdrSSp3CQ6z6m9tr",
  "key9": "5czkUVjYNmFzLapENFytHsRYpS9pJvabs8sFymXvBQ768RzwyGzANdTp1kaNRb24GgCrtCQTbiizQCtFPyEzZmgi",
  "key10": "DhUw8MkKadMkkGBLDyx78Hm7GMw4oZaLYFAxc2u6YQ9zgnxW9wfKw94q6UaF5f674BebC984xYWR2xrJssRMkRj",
  "key11": "yR3u7eSC59XYhLhvnWBHuM3hrtFkVTmvrVbsHwYxPrSvWvm96NWDY3TpU1oNHisCRQiJ6yT9Ur39rRY3WBQMRyW",
  "key12": "3TRwhRkG3DbqhxAww1QC3mmYuSw6U7coPuRxQHf8NQ4qCgyVPmEtWZzDKNkPHrYo9jmC1Tt27QmqpseJvpov1SX",
  "key13": "M1mqDLJjrR1JTNc7hDp9auQ914M1JcUosiAn92KkPJs56BT37odz9i7TDAXikNziSEbYU8o4ii7TuSk3MwTKT17",
  "key14": "5UvWkGW6Rg9whcUHABXJ3LZE6iBHHuTqj9s99EXqdYHA37wFVu5hm46zrdxxAGSFc9azoookdn5nQp9GqkDbDkDo",
  "key15": "2GENB84myVHQ8vBgq4hNgnfZW6STEB48192iL4q4dMzTTo12gRSbehw7ntoQATb4h7v56P91unkbPsJV6XACnV1f",
  "key16": "4efpnGZUcJp8kNZVio5WDcDzacVXkSLLsAwepUqwXHEkaCVrp4fWoxt3NsiAmFLQjjzswtaSyPMvhcfT6999SU6f",
  "key17": "2VEoffJ5ays8siGWSJTR4CB2CmADRxy6qgvJYPNjMTKH5R64CcgSMymXsneKCSLTkXZJpHHDV6WAyjQCkFWQopGw",
  "key18": "55sHmfRyvQor6cMvyZsp1hvrmLPE86dhwpQyqWZSjue4qSFEwK4YQuYLskPXmF98v2BHuzctgdsHXx9BJRwbFCEW",
  "key19": "2rp5hAqhh3mAsCqkbTu9Zb6wr4ut5ZtX2ct61FEb9rvJrrT25KpByveuxzNnz18axmAVFsLhFuLDxggqSDhYjH7Z",
  "key20": "2AHHLpB3D5uyFPwoWcqTnrfHikwB69P2XG5zQG12Exx4QzzvchSC39MD11ftjAujAjJ6DXreCbijY1FaDPcPT7mg",
  "key21": "5jRYNVCU284mArBGzN4sebsoGCiHXTbv4cF4NemxAaaGoyQw1BTvjuYZWNiJBN5jXHwwobyoDqhoGmdJxskEhh2m",
  "key22": "4mnrDh8vCbgoR3W5RWGZLh9hurGr3VuW8zzo2LxBG9cDDmCfQbbGGx4opxLxPhJbUmirA6dQmtNxbMTU79YaDoo5",
  "key23": "c3RK7jP3riaEHrSXMPBZuwgBXQ9nh1skCwiLsbxrGMn5An8MFJpcPmHupMpaBLLUw5urmzkQ66juWKvnbqwiyGc",
  "key24": "3pVQiMEwdvpTjwyE5fwNVYW6MfbGf7LxDDkAQx2hnP6K9CoGg91obuBfhSQWu2Bhmw7zLD7uauw4zokGaBNMTHZE",
  "key25": "2o4mm6ZgPsGPXJy4bRjTDPVdTcX4EoPsSYX6qyngE2HSVNt22YJ7orsit5UgArJCE5eBFQjCyjDzwJLX5ws9DDWR",
  "key26": "4bHQki3xVzsXSUSkWj4WySVakNw5DaysUGNFUJ5uiY51QkxHYiKYrR8V548aMcv5MNQJbgjYSbXo7jUN6y3Usrq1",
  "key27": "43GRUTWNoFWUB9XM17yPxkoRT9UUNnu9JURXE2Mnpp4nLw8RYow5Bd8y2BMf1U9xvG1YNnRzNnLFzLKW516n8rBC",
  "key28": "4KVPY95DeNRCvbe7496wRYHsFpqU5JqZMUHBD6QhPFiWhqPQUu7j4qHHCRuDwTtbbeoZ23QYBcWDCuxJfKJPNc5S",
  "key29": "4vtqQkCmbSrzezfnEAGcCpztxVYym27TZ2DUFkBRciM1SPqpJoEQW7g1VSTmPKuSatYLoMUqJ7nnzZmz54vMXGQe",
  "key30": "3aAQUH192SYYs1CDGACA2bUJgjRFxvp5R1pn3MxjtvNf1EcGNQerq5zxwh3EWA2zUqgQ5mKcUM28RyEgKdp8b1Yh",
  "key31": "4tXkSdUSVUQqN7t9gfWQgrgXYoHE6ANDpg6Bp5rsP6rud6HBCHEbNUXd1QLrzF5v2RyoVk7YNyiChFd2Xop1HJkT",
  "key32": "3GZiosyTuurReqCm9Fw3k1oeDFZTHGY9ysXvraHVXeGZH6AmPAvFQoJmfGYRL5PvMW82PdgWQSm7Kgr3tncrbcpR",
  "key33": "5JRWFP6ireTGzoySBfgzG7VokJYDiA4rybrKujW3LCFMBy2G3Jwehez7e13H5qXf2emwvHCLYsVJwRCYLeCqyje5"
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
