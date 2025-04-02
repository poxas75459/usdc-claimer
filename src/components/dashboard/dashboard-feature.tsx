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
    "5FP2hF4bcXqj6RB25EmGUGLYfqCCv1h7XyKVzcHp3vs5GnhJUgRZT5EHB29vCWhYJATiDXfW4Qd1Pdibkjf7U9CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gijuMS8FRxSWerEPAM9CHYjvoQfE6d6CNRjyyExbzXiCNRkbhahHkKVu7Cfa3fmaYUBKHuGgyFf4hJ5aVLtGuqL",
  "key1": "3xTPr6rMSyAtvBsQvmsnU1xDYPSazjovxu5x5TVGsK2YPr5s6XL7WtNcSwCDTNd4e6Mgf7VjZspryHwApqcXDoZh",
  "key2": "22L3fW4WMj4xhLKYwCF4ZciQywyuSveJW3RnKfBrPa46J3EUPNja5bVX17eRX119jgaKTdcDp1LZVFo5i8aFjCoV",
  "key3": "2PoHMc6W76V1bz9BVoQR98NUeCN1M73ybzxXzPUddBDeuPCu4zmtV2NzX91HNM13gBQJJivhKrPu9iJx3m4bt2ex",
  "key4": "38u13n6Xs2GFMg3pJzBJ6NMsQD7ST43efAvfUShwakR4VdgtzKAVaAVts3WsqzeHBMSVCnS8FP18ntaaj4yEzj4m",
  "key5": "3xzMLQjVdyxYbWVBe3dw3Qy82BVXMNXumvdZ2tSLTQFeRQ3XrqdF3XQ6EAQDLucVcca1MbLYsUgzjKgq2ZS4XWWf",
  "key6": "5NFhtbB3keMEZC9UCW9kuiJGnESiJyYoipSQ4ToAhJi4HVXD8m4ZKc3EJy1wpy85FcNX4oErAAW4sRqdfTbJTo5D",
  "key7": "5KofEDyDMfeV9kA8a6t46WdsmKpcNAaWrqydupeLS8Mk4dhrMbUP9pxdZbR3LCjDvHB61BauMQGHZTcHf2C2Xr5n",
  "key8": "59aKi7rHLSRfCeiidYHuNJWfVptoopWvqnsKh5nuEitEJKyKzZDM7JTjUQ5iuwmrijw36JyphuSoghhsBtte65Hg",
  "key9": "F3ZDFnxXWEgQuTMuxxsCEV1BKJ5KoUV56EpLxTKL75NCbmCJnDUCBBZVEG1D6nvupjSWdhPyPbc64vCryLMBZjT",
  "key10": "4GBfYaaq1Sg2FrEy8e99UmdjHSEDFQgMS3WNrL8DdL3jgC5bptRQAvfLXFoKqggrwBukXxDmJFy1XTMYH65uq3Wb",
  "key11": "3fHFs9DrtdBka7zgswjf4aM46QHv7mm34b9ez9kcMJHFSncxwL3XhXkSZBVkmRTp718XT6Tzj9N72Mu6eg7Qd7Cv",
  "key12": "616J5T6VWaxff6WCzzXJn7tGjXaxG8BfiQmXSsebs7kqGaXjFe8ABoFMfPmUiGi7AUTpdFiUdswssK7L1VfmBTRt",
  "key13": "4Wm8WhE4QEoCxqN9yEZBdSvHSRCMosGotemeLsq1mUiCvxU6PjhRdGXDo2JHhhc3r4RU3wY4pi3s6wUWeUiWjbDb",
  "key14": "3C2YbvhFKGgGGUgeEqNwJ2hmyNGtqg4KUi2AG73ec9wD3ALzwM2bftizo4AtFnjoaJskYHv8HbS83RZR21GeEbqT",
  "key15": "SQsGdeELYB5kuodRwQhrgXGwpuryiaYWJg8ybgrpvDDmqUc5S89zjWbNK5n4Zsj5vGa7i2HzppYZgSnGahgBE5A",
  "key16": "3ppNrudS4gGzMF3b8964ACvooLNpTL3DEAAGN87d1vpS5JuxVy2cZR4SrVBTweTtzaacqHwFw2cLHFqiKuNCvK5o",
  "key17": "4571iAv5ntSVKdCUpUWp6TJAzxgwsAmnv9tLbw4XBRvq1EFDRKG1GPnrMCBrQSmfDwCf9ZHbKe4P1LZViiYCzHa6",
  "key18": "5x7uymZTmn3NbEE56bM88onFZMj9VFkWdvF5QjJTC3VpcV3QhwKQDbji5iXNjkfmcqDPhWXUdRNDky7x84Z7c3rg",
  "key19": "5EBPLh7WYLoS2bkUyKVTFkLspjQKxzewPc63JqqGP71Z8d6PDNh6i6fLbV2BKpTz4657GMFpmEW5ipwnDjgypZQf",
  "key20": "NJfP1Yu1tMv2xcpHdK7vfX8ZQ5YSctghFzFecu59pWzsj8unsWVFuwU3doquqi8MA8iR4tGTKepygsoGiH2Core",
  "key21": "5xtjyDGs1RgGJU2wXqeGrQjZsuiAbADjrP32mhs8haQSL4K4rN6peMfdDkjujVQs5qqtVF4BPxRGHPqzLttoaYHo",
  "key22": "62DmHjVzQLBCoCDkqyS2RnozB5XTq6vHZtJXD6rC5pVbzbjfJLxHejtmtKr6RsYyxRex2qBm2BqubUos9X4FKMDe",
  "key23": "38fYYfZikEdeBw5zkPuyLVCNiZZH8hK7bYWtJRK5Xnjmsf93gjSex48fYuiTCLxRUHTKwmuhcTDx14yNrQZYNbmD",
  "key24": "2WWh5jvfyErWut7LfRnMbtCy2sqFGRdXZfRjkQudWvvXW1puvoRhQhUtGSUogmW4pQgYkcW8mkWJckFBSHR69M2h",
  "key25": "5Qag3W8g8sw9Tpw9JPAHQNMuCBcBtx2r3SKJha5mKwXdqbFh9t3aeNcJiyvq3ovXANikDeqxXKAfXe2WGodkzGCR",
  "key26": "CU2fY7WfQpk31CKEgjR86AUbzVUzqu7vpk9nExqxwX5UnbTNdAkHHNXnYHvS16dcPUmHbjkkdXhh2Dnh1JyHRDH",
  "key27": "VMf2Fqx6pRP6x22GXjPBixtGQijGk1h1dsoDwCHkvpPgxUHzCWgWfy8rjBaoBMbyQFbksgVHZApHrF6sYM1MkYk",
  "key28": "2dfxYTv85C8s2dgsK7F5GHXoEqiWa4imS9FTRv7TSzRwX6VqqFkzJkiaKFXpHxZ9kjJgRgpzDpavnQ3nw1Mz6BPJ",
  "key29": "5uZH8TUCoda3b44hNVU6RjNXT2WfbrBmzWPQvdUPrWMfULeLBfHgaUEUzse6XmPgcKXmg5crC2UHjbkGC8MaWYKA",
  "key30": "5TZTP9CAFuVi5hM4iXdo5XwCd1Y4VG3cRZAXEvCWwf9SKhHwa4EhBoPHYAmR2UesAtJDCv2BeraUmkTxmaFdDENk",
  "key31": "4icYDm3dn1qTAQu8LX677jPESBKknHPTf2omG1heGB5k2AKJJdixZQ7qjgHpyjyxz9SGq4nJhuW6G8W37r5wgMXz",
  "key32": "7eeuHaqvQz4jJTuvvB63e7Uk1mRTYksGDH6KaSkouBFiLsV4ctXvUsV196QReadbT9M23fhCb6PZoPwpchKLjeR"
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
