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
    "2L3ARgwkZLb7pocig6Sgv4YpARmn2ZmRNPsFRUY1B3Xju8pekQNXgEq8TwByVvHW9vA623kPYPr5nYgrbQrQoXmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63VRJS9thnGULKahZaFRDTtt61wUuihxjeydbbnWSyNmTRi7C1CTH73Y4pxHNiEn5cGK3XFA8DroE78qLGNBtU9S",
  "key1": "CrrxNg5n3RKg5mNrrpiLM5uN6RyfDPqt4CxzhZAnMM3rRNU2SeUZypdDDuv6L6tVPjav8rYVYq7b5hQFYDj5sKS",
  "key2": "3Knn2nfLqsVX9EigZudKsmXNDqf71op9Grbiwd37MfA1v1cAHXfxRBR1g2fFkXs6GfSK5HDk6ZTtQ7iZ7CwkrnmN",
  "key3": "R1qatjR2i5YcjXyXgN4GMjnxPsPYXWMLaBQr143LwkpngJiUGwgwzZC2RPmj72k6eh9FBhuMJr6DvCThoKqD7Pf",
  "key4": "2CreVE4AZ7Dsh8w6vetZ57m95dwBCcEi66jiiY8HRRJLZpLeVkk3cVX7WHBcgNHB1VDXyKr6QCYQeorzcrya6Vsd",
  "key5": "2estix9CCN9EeS6VEXMDCzD72ikDGZqHpnGJT3t4sgGuqRs2SkFv2U1jGRsqNT6BZwfNzSXac9KyWAENUp7WFfo9",
  "key6": "2ZfKmK39DvzvoG82XPVE8AV8jXijcVaBsHi6WHHxrJMgrpPDrSUjRK1W3M4aD6csEZ5jCTLryDLPLpAEYpBnDDNW",
  "key7": "639Erex1KUBzL9XWSMtQVKzd8YJrzPBJ9EQyJAv7s8pHBtUVEjjZJQzkbvfiWqkgu8sKhEXLzSEZSrsuKLrkrDhL",
  "key8": "4mVCgZGSJvt2LCq3XxchC2HwtiJKEWsgbfHmGfj36tVezgMFrNhHQ2MbM3GDrTNcvnTiFBvLeUQSfq3fYKvgxZQg",
  "key9": "4sqQaDLGdWMfdHEvHeQLFSEf1XXQbtCADu6j3JbkRqcYcgnqNwx2Xdk2Xjn6aHoV34hSkAL7TrayWvt2MiYEcmSK",
  "key10": "5wrXGJLRxFtD9fwc4G7EuLyQh8h5udmeu1sqHKVsFKkaNp7rFkXuCG48HwAK68a7bKoLWndt9NqQdLtc2nbwcvek",
  "key11": "2QvM7u9tVnpHK57K1H99sjTT88sWf51AQPA8x6MhLC87LkM2z83VbK1wPzTJr8Ne1rcnoPRmc2oeb6hpuBff7BfQ",
  "key12": "2U1MyUsqAKpMpFpbYKMFATdaohwenhRRkgKiwcT5S865tNg3ZruBgyTLJaeNVM2jp2uNzefjdCTBor6WY293ZZ6C",
  "key13": "2dX9unrmmwRMxSwc34yQS2ATuE7iYYbCUW16NQmz5bzG4qRBrrKSMwDGAL8jWme3X2U54dTnreTg3mVec2wZSpow",
  "key14": "LdFZpk77uZNsz3jD3QMkjatRs9RYhaSPjx2tebsCWy6XcSeAWj2a19rCrYuwDD5YQ1SUU4LmyYEqNSrYJuHie4D",
  "key15": "5RVzpBSS7i1NpyLawvjVSAbgCw2z8d7AmChNzr641LpkcmCTKwoYx6HkFuHuc1o2UVYxvyWfAXNx84AFrTz2BDtT",
  "key16": "4EuupqjgRWfTGFsXmdQhdguLewGJZ27Y4vT1gftFfuosyonTKtFQLfrr5r5Wvq3MYkYK8Z1NAyg425QpmC1vTuqy",
  "key17": "557yAxieueuzFGaFb9EmFvkNdLpAeNutrMfdMpL8mGktZPwTeyHKP9KgvdZe15CjdPMpPRVx8hDLV5e5Zvaa8zHq",
  "key18": "2D2fiCu9X7CHKX8vdHYkv4TzxsmY4KKevMxNfRR6gQYFE7F8wZKxm66nw2tARZHFZii3hajiWWFGY6nLBcqEKzrg",
  "key19": "4TtJ8uM9pzz3cGV6X1djoD4Za2D9Lb3Fbfkk12BJajXVWt9m4tutRWxdWtcM8963Ew4mHa5JDAGrJLmKHA9K2SPr",
  "key20": "5H1aVGH3v57MUkGp4PprDNQh6jFQsT7NyDT6c5Jue2TmMRU1a8RNTwKPUKq4Ud7GCNjcxgpVESwExPcqEWpsgnSw",
  "key21": "5Zpx1DejLbXYXNZRAeJe65eD7VKBZ2B5qFxWnnQpn9Jhkj6Fr83GbZiVu2SFBCoyZ5zwGoLuuMoJX4J2d1CXPNau",
  "key22": "3JqGrRwMYQmxDz76oqRwV7vX2kjXXQAwJATXRbFygBxWs8sHdaDHBQMe1BF3LtPsqrVGuWM9EatfrrxSyZqw9gUY",
  "key23": "2Jkyta24TyDA8h6fxJUHiF89jHsX7j4VDT78krbi7Xz2gWJS9P9udC2uFLHKVaRNVrTuszLdiHg8YwHkeLecSLfG",
  "key24": "2fNkUUeVFiZkuX7xmf4yWCS98181ZLxZ4YG2tQpKj256oLrsYABzM3s5PxPK7zwMkWceyM3ZNipotE8VKLiSDrPd",
  "key25": "2ibu3HZozaKRZQBks6RQqCypiSTHu3gnJzzYTR7FFpXnnuGWTAo1EsPk8dCy1tsfUPHt71wYSNK2aBkmJcrgLDBb",
  "key26": "4jJNjYd1XgS6yKka7b769FwCdrURxTmn5VqYsF7vuZiquDQkrgLkxtigCVgGT1v29vgwUP3a2KD72qPeQAqhaidf",
  "key27": "2VP7MaPv5RWEzeGNXy7WQFXaYse57rKiGoQQN9XqESYJSn92ziMEkt8wL7o7Z3jVPaKD1xZeJPoxqgHxCdyAeLoi",
  "key28": "7y6in1wTgWYo1hsTRqtShvp6U7aLmXpUWbymTUTcVVbn8BfYN9JcTuupDpByJ8Zx28Sw6e6Lzp62BW6YLvpnSUd",
  "key29": "3CmuVhtQXVw29ZkgEw7Ko3KNqxC6XeTibj2CearbifFVBmkWP2C2YhQTrGu6iRDjdXcRRKtUib2q8DfeoqFz2b7g",
  "key30": "3Eo2UXMj4ZuCeqeTS2KXGSKJiQz8HF5vHXs2918fxjA5od6sHGBvSTcAQS8auMWsucmJqYtjT15ZkC4D4PtTczTx",
  "key31": "7u9zh8p5DDozKe9Hhc27bpchdo12S6zRmswUidd6pmfiZsicPxq52ZvyxZ8qrbhA4kGtmzZQpxBUpeyJrGdsF92",
  "key32": "4QCtx5Y5uuY9eNsv9besfAcC1DtS9a6Z3xUorjGnEzsfEAWkjPAAZhg8ViaNsis3JHkoHy8qGoNSfEBsViB12Q6B"
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
