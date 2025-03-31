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
    "3kXuD9Vd93Ws9prW5dakQYRrv8iFdZf7XDqYFzbZZaHg8ysCtpa3QDAXr1rATXNm8kpd3UTkfMz94pQnPscwwE3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g9VvnmDKehpAj7gSx8iKWzh3wobL9RvYUPkqeJEzG1bkS6FumvpwjnLG3z2cxvjsFGHcL88EKeh2UbGDvuYbwjz",
  "key1": "Gjc1PeXJYw2FTUbi7pKAbovm5nuc8437Sqy8LGgENoYH4vPea5w9iUVPfnekYRYgsv4C2foEJtVPoNBYz2ZXwUg",
  "key2": "4MSaoidVG2r6ZrtcaCQd8YoA6BJkAd7wNziEC1Z3RZouud74aYbZ9mQEEs2VvUhCSf4rQYB2GCnVH12U1hm3we9G",
  "key3": "3ysT6JR41ViDBpk33r7LbU3YJSzLM216gVkqaHmhMEbwDZbdc43ynGeX6fkAa6LSxKNmVwEqXSfk6MpTVg9n8Efm",
  "key4": "52vi3S3JmzLe6hqDgphnwbbXT5KEVU5unmNW4N9qv4RAenYh4VvUxD8qyGQB3GcHqjKXA8yWM1gyKki673RNPdW3",
  "key5": "q7yCirpyRVUPZNSZy5yHMZJVJucUM7o1dg4QmCokgiWEi7x6kiZ9hdavGHpndDdUzDFXJrmseRxivkKJDjrAFue",
  "key6": "2rmsN2f4hYvngQy7BmaHzEt2icwtfpEiFeC7oSFm7KxXdLaHGrGWphvHeWjVT24gdcDAynXqyFM4QgBt4aewrJdR",
  "key7": "5JMm2NSmNt1f4pU3xj4Z2DfY2rAPA1DGaV4F2i81Noe1zB7fXQ9ZfJuatqfUfUM2iw9DDbzHTfgi3V19jwCy7TJK",
  "key8": "4kCnW1ecJGPZ4Dkzq2DUoxPkoZhp4gvKaT2co1D3GfkdjzQBhp7HvYsYbD2ztC4yJPV2pXJir5DSDboSR4VXpc6T",
  "key9": "5c15A3BZoNpg26omPg9Pt6kx8CZDAJYiQApAd2QdcnGiQ1mvaCQLAwXDskUxRRPC91AFGJ3yKWyUE8bsvcwUPUra",
  "key10": "2NPxvtPXKjS2k9Y65zW6KcocAbSQyQUN1xDTgGKCL7zqfwh43Z6ewYXGeaEVd6Pmzu4u9rmY34jzNfbpcsBoHtu3",
  "key11": "5vG7RXhD8VPnEzUJKseB1aYs9zgn5zNbfm3woWWzAraEco6u4jpPsEKUDKMZfMvnfY8gSyUWJApGED5MwjSTyfdH",
  "key12": "5GXSRPXTj4vRZFqipuLKpUG3ewM7g8BAzGCHGd84r9qNCQEottHxJ6AWsiazPuKEQFXjM5QCSDpeLRjUsno5QVCT",
  "key13": "4RpiFEZuVKqc251siAjaKoomtNPJwCNDWgcY5GUHx8fmsVP8zJMci9n38Tbwjg7A1DA7uJL6RvTjRtnDHrdKTsaD",
  "key14": "4pJTnnbySgL38fYq49PToCFu4k2m5iRMX5XkMEVwg7waaoyXAWDopRLJftW9XXEW8KKUTHjTP93ZBw5YvijJvvGn",
  "key15": "2P7uxLdGRvcYCff3kERCSVYERHzPdPPas2XtGaXRciTYLEsF4cwt3zrykxJ6xnJR2USwE3Jo4A5Zri818LjZyenM",
  "key16": "5ozkSR4Dm2DyUTEozJT8w772qh2ZF9396dGD8wbTDoYYmzya9E5AQA1Aziq54JxMrhenhqetq28SGMF3TbXbXnSc",
  "key17": "6qhAYfDv4MjMC55MVKT79uYQErpHmfzhzSSQJT1ksiLBttYKCgaBr7YSV9GvECsNZfYDp7TjYZkwp2XmRUyPoc9",
  "key18": "28GHedzyv3KU2R4FFqKuLiUB4FHzHpQFvHPCFPdKc4Poe3vDGjpq9cXGjChVc3Q2bHm73THChkqcQYwAmB2R9UAu",
  "key19": "FLM6FgKvM99eq5k9R9ufBRuy2p6C5iy5L1rqS8ksGpUqkpkFJPzexoFrULbmqaWWZ9Xaarty4z1wY4SEyr89jX7",
  "key20": "3Jt1a8yDQ4tyu8JJL9BxLc8uHpExY2jzPEGK7Z7wpHQYQvM3vNJo8PMhS3D3sKb9fDVWFzQgY3JzU6n4SAKvWnkR",
  "key21": "5RuNxoSndZ9nDqfpsWmzvS2cF9BPwdkFzRZCvgXpAJMTmsg2rbtoKrWwSUNYKycdtpnGj2Cx6b7Kqc4drovc6HEo",
  "key22": "5YzMG7KEdoWVuhfQNcC9AVASTvkmhEcmPyVZPZ9i8VAfnnNvKbMt1ctYYzTQA2pcrFih9Vc1qwDCr5miiNV8Zrqk",
  "key23": "5ySQPztJ6QkoJQDQeNd5DZ1ZampWfadb6Dhnwn3moXCD8LNa3DDxYbnzxFi3Br9mPshJ6k1g26iKA6aDziQoeV1W",
  "key24": "39rAnpAuAVdG9Z49wp3t863cwEDNCJFdXfiM3Px1cEZLJR6RYbfxy9xUemAPp85PfBgGjo4ma3rATSf3Ycy9SA8B",
  "key25": "x9f16DrCfVFHVgFB2y2ccnjuFgrYPtdrfKaEDyhsexFA8FEsCwXuWpP7o96N61zmSAzBr7CDq4AUNHfjWBT7gRL",
  "key26": "3GsLzufbsR2mshvvhz9Y4XVnRadfcNuRUmzHmn4bqyLTjJxxzMUkfg9cS7vyKqQSxWuFWdAWymZBeHqEchuw1iRp",
  "key27": "3mVmUwvVWLLEUBQPG7gsAMtbZfNA5zTHDuGz23BxYgJN3yqa3APtFBQgJhpuSVkHJTcoZodRNCZz82avjqHpU3gY"
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
