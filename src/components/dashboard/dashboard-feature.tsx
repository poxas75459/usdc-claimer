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
    "PdjUcwJiNKhsT8YCdJ2HrccbMBM8LFMtKYkuErXaXiFK21FqonCggVVZi1ro5d6RteFY4Nc1hAnPMskXu1TSkgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cYKBnVrXkUwqDwJmsmpfNVBBT2LhPNkGmMEC5wA9JKgQBxeFKTJyABKvn2e3NkXeJ8jhqAw4wci879HJaX7bX2h",
  "key1": "57BsX63Y26XwrMbcmPyg8Qs64WSmA1mmdD3TENyGpECK1fk6XMpSwf9PNgySH6sHcF7UMtcKZRhXXFgxwaWf1i8T",
  "key2": "gBjupmKxSyvSo91pPBhQY1vTmENnCLQtYdjJ8Z7a2pbawaGL1qGgTtxKMfY1ZjYTXPENsTrgseH6Cy6fx8UB1kF",
  "key3": "3JZNAZdkXtKUSqCQLgQxTXqFvjjZaEdgNdWHAR4XBASwLLMgSKgSehpZisdRf6Him5WLfw9QCLd72BpsVCDFuZtY",
  "key4": "33yTm571UT1Gd6ZAndphGFS699nJzeoTZFobLS9PMUKjaWUhF38zUvvs5pHyuLuSceb5tJgmyzLbwHki2Crb15vM",
  "key5": "62cy7egihUfRSxM489VtiC6Mx3TN5dEnCYPf3Np5GKScNHQ5S9CqPwmJvTN38MmX2KnCj1o47rf5QBjmkdxdEitY",
  "key6": "2d2e7ckkvXYRjeqtUdWoVkh5EzcNPyPqEK9wopDMFwwaGYfbhjkgXgspLfCdqZcvGXDcHQbv6ZHGyVvEHCsAVwRj",
  "key7": "257nMA7xubzVgwuBe2vexBs9KbiJLkdSnZr8gds3vRBARKCXsSwRZgauPkXLqFsz41EM2HshNqdu5Q5MMJA4H4Hh",
  "key8": "5AgaQPZkXgHSxHTFFdL3yLDdp34EpH4tZzEVzDGf9FvYBveU2emwj4gWSmHemsxr19B561H4ZaEzs7UJgvAyBXjE",
  "key9": "3ArRLFmjAnsaSTVNjJbBUfsHu5fi5bfDnJS5NHXpxWQLSviNsi4aj54TqA4j4Mk6aZVCwRktvNqEUjKRFYecDzs5",
  "key10": "d4cE2mHUjtp6sQaeM2uhLbho7BmRqeLoKwVwmJvgdeM1qh9rxJLTkJ8zwhGQ5iWdA6KazLkR5rZBKgg18x6NwqK",
  "key11": "4WgwqnmSVxW5XZM54eJrYQccEK4vMjriUXVGLx4cdW2hxkhpSgTwAbokmJvhxnnSSNCgbzNxvPYKZNu4GDaQHwJ4",
  "key12": "3NXFgRcjDgrxKFJqS78jwvDphFPjJ2AP4VNdxnYmwGAdQ5RHr1xu8rU1HYQvmgvnC1jewuW978Brdoitnj9vbZMP",
  "key13": "uSyuPDQg6J57RaG6H7H3KRnuhRmVZANeCzyLQutPHKbqbVdtG8okywcg2hxDDXTe2AtUx3QLZY34TBPFcSKs54d",
  "key14": "35mEmLYtLTkLDQgHHCTJ9iAr2tucUarTVJMd5a95A15fzjSmhmRnAaSEDnStoCVSdeiRrQGEUaNueZHnxuYVmYkb",
  "key15": "3mYGBFCWSjYhzUmT2bk9rC3cJjoyCL1o7LTkpNchZtc8zDJq5yAYopzfWzSFagoEKP4GETgRNYK4Z19jiuyEVjHp",
  "key16": "3VHroPRWaggSV8yQB9FsCX7g7zTBDwpMsVQAPPH5bFxsTpWboDbJxhaNcJZsSJzzGMztxEWtz1LBgKnvabs4Novj",
  "key17": "5prca5JzPBxhhh8sZKK7KZ4VpYcrRGL2AsWcp1WqpQWaEQs3YkzEMzyLEzVrcmcVA244ExFC9k4EGdukdSdv468a",
  "key18": "4Bwt9GzREYxPmbQ1wDRQWnNyUuiYLRQAeAuPmGwoeYfctEeoLvG2YLeX81wSoJg1LWnBcdmTiF6Fu2ad5EhLQe8z",
  "key19": "3zwDvhCF91eW3LqyBVELVWMVodp58zgjdUbCDFPo7hGD14oBEwS84RFZzZLoeiFPjCHaZXPfsib3FkcLb3NRmtT2",
  "key20": "ocSRYZKL5xXmLrwMoh6fmCn4FpBwzmvgaShgcopxw43qqicytrrFxuLqjvjyXPxQTqrh7mGkPVvLazVrzmENL6G",
  "key21": "4HYtUjQvGMbJNsgx48FKWqeWTMKMD5M61SMqWAuFxQePvuwdJAmpApjvW1XqVqKG7YiPFeibECTUPBKBnyBwGF5P",
  "key22": "efAZdxbeCxNA3NkYbpe7Q8U6bwJTimCp4tKD991sg15tGMJeyFkHzxPwTokwmxGMMCFNCsWuFsYdym1UsmYmfY4",
  "key23": "3F15beSkAQrk71LYbQis8SVdYouAQzP1qJPfuAV2t6HHpWWmjkzNJnF5j2LQDpQESCkD7xXHGqfSHLCA7sGyU2Uh",
  "key24": "6KZJZLo5iatyrfkw3KMsFH4ARNvFh88xaXoxTVvFMobczXABf8V6ohAzVdH4CCioTsA258wH6mjQYFtWX2VjGDU",
  "key25": "5jbbcMvZLpRDscb6GqRcqWvBvLnSmbxTeaKr9uCi56mCgLXhp283hAX4PbTGPTdG6SRGkQFwS18JFjtJ39MFvt9D",
  "key26": "3NaQZfEArMWjeiTUzajMwbfXgm6S3673HZhfqicvGaydRGjqFWQJyezEXi9hKjq7CdXSfm6b1BrPRfV2Y9V3yhmA",
  "key27": "5fXmp3DKBpBmU26eG2wjmLxqh7dikZVCT19gdz8hXYhs81fFEEYC5DRws3FZ9WbMzvQwvZd2218S1W7Q7Kis3jvJ",
  "key28": "3T56fckmyb5uY1cUcVpohtVNdigu7P9CUwAJcPXf5MCcsj2pktd1Sp36VjmFHQ7c7dPC7be4tBFY9fD6Q6yHDCS7",
  "key29": "3vzrDbZHfPwMCzuALdjcU2P2C9a4gkxMsh8P68Cr9WKHKwdvMr6mYTTtf992dF4U8vSTb4mzF3DehSztNSz6x45E"
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
