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
    "22pt4nNHh12PMP8oNGBZkXRLjyLe8RxyxcWUCUNWhTNaqvXhkhEnep8L32akfenFx4Jtn1CBkzyac8Er8rW5ps7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "skxPE88BkA1iLzh7RnME6iQuWcg2C36CDC9Hx54mmqy7E7jyaGuqepTyczGUVu3QyAFJ36q6FDabFte2qPcZaAJ",
  "key1": "3G7uAGeX5UN3VeZ9Qajq1u2evBTPn2WUr9svTvVfTAoAqJK4ybaSD9tRujMSXi5YhPSgBDYYJFAp3UytbRDm34GD",
  "key2": "cdR6sw91Ej9mFEM79V7X5JTjVuXm3Z1zm6UWv69hNRfAzbgGZiomBjqxrYDj2mUiJjZpKtNK6JKBeq6P9xxLoS5",
  "key3": "3v6Gb6GtQm2PciTxdTBbU2baVnGPiJZVc6ibQpvkZL9FoBEwgTS4Wh2bTTRzxFsba6xkhaWyam3wWyvP6hyWdY5Z",
  "key4": "28RwwhGmQ5rAatGp63YMtxRpFpd99LWAKi5NscSL1fQkBq65c5gRKEqrTCHiQodB829owqhmmHD1pzKsJACtepa5",
  "key5": "yrHYvFkCyT2c4GvnMuFFfuwJdiBBmEXnhnn4eimFri67V3MMr1xY8sb8G3ikBp6riEq3oRYFrt4KtLGdddYqvpE",
  "key6": "3kkTPMgea4KvMpXodaVd6Xn4fpdwiytxyx2aRpemv8LVi3qiqFgiS3HdudVhT51ALZPUQevywZ7C3bjg5hXGPbyQ",
  "key7": "5AuKpPQjizjSQgkvUDysz9Gr2GsYvapZc4d4GpLvpZ3dttaQo5kjiWzabzpep5E6HEgqk4gpnCE4Mj7qyv8Bt6B3",
  "key8": "f5xH8boLvYHAa6Y2BR4BK1yTZcyGvsYcPzLrZmNeit35cvBcDssSFxQ77UULeobCKjJU34sAHuqxkSMVLWY6hmo",
  "key9": "4tenHfpESWMoEY5W9e1K4P8qvAKMonc5XmJ8eHkbJnCjTLudPiUXvMJ7fpNF1GVq4jgq7ySVpmWymnmDdprPaVFo",
  "key10": "2i9mEXzYFz2qjUyZoQdkh4YsGWjPoTRffSFA2g7m7g2Z8tMGAA4HWZsrB2SgRLGvjQWTfveirYxi9XtKe5ijCJJy",
  "key11": "5eXjHTUjG5wxMu7gzknxALYL2k8kqJLmwDZJvtidxbBtdd5H1h8qMfdri37jgK7MCxfeNwUfmhrpyweHLETsNDJH",
  "key12": "28Crt6pnrP99Pa1Fsw5GwnftzLVaiwuSekkBay9aHMhhJZMANVq86K2Ugy8Yyjz8sSUJRb2e9p6twBAhRL28nh6C",
  "key13": "62LCtHMhuFzrnuUEe1gU8JmApjpVjbWjP9htPjHDGtpJCysrhM3kd4ZPDEpoWzhdCoNenPJfA4eU3UZWwN1NKmob",
  "key14": "3yxBWQbLCTVkwTfaF9b5bYAMA4drNeE1KZcu9rdwLe8LkSe1BJVLgkTADvY483dE5Mc4bTPko8aFZSWShDUDTUsm",
  "key15": "1VAfzeWAokseFqg62489QfnExMKySLeebsMBZcNPHGZzwNvLzUCaUhLA9g8ARt2or4RxEua5WQuP4G19obtjcV3",
  "key16": "2d3Y6VGwXQm47Dgxp6TCeAnmqR2jZDLRkrp4vsYkE5YFtgwUFPcUZVzSrVDSCc8HZwCoBcJtsZHz9WvswQWMwysx",
  "key17": "2mD2fwFbSUHRio23vWycmapYtJb6cwyR9QCiknAeBiun4mkgbmdqUopyqkBeybqFk1zAKZNEzNpwAvm4veLqpJsd",
  "key18": "2mMMcHN3k3bb54Bu4pTcgUwsEafFceo6MnaT23VZDtJFKDN5mjR4D6BoQgvhQsEXLsNwaPbPS4iMtFSWjuxJu8G9",
  "key19": "3SA4w9fkJWDg1AZkfRjwACS29dMGNf1wSTt7Xk7S5HCSDv2ADB4hVbtQBwbsdyxhE1qmfczuRe65G8PHWboTRVix",
  "key20": "3VbXjWPAUUEeccnd154C4Aq1uRkdxUiZjALdEGtKx2ph7A6rkPPK11WUMoCy8vz9DJB7a7Sj8dCbeTBvShKuyhSr",
  "key21": "25ojjaioCJQUSw5J1XAdrC215782Jo3unHGeziCx91HdcvdvBEx4MdaQDVCBPLYnrH3VM57LHszNQARZ5wEPREej",
  "key22": "4FMww92aDahkvjQwwtuHkVCiJLWora3za8NHJMdmX2YyEHS1TjLhxXegBLuwWbfn3qMMsguAbQgcH6P2eZ6ZJd5K",
  "key23": "3y1gz9NVEgA69xkGEhvtEPpi9SG2hyMAUBtziKxL8YLfUwhyw1PyxcW7X4vzzNbeyhUCS5vSqHw7hCxD6YFFounp",
  "key24": "LxJkNpWQc8FjAr6r2gdBUb2JsUbV9M5JqE5NY7GA85f6L3ewvMNnFBYS8Yf6S8UW8g8JWwKgR57JUDBwYMrMqNM"
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
