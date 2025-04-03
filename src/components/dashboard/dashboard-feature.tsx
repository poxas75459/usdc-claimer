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
    "3fTMjzBP65xM4kCr3468Wd5VeWVKPMjQRcEv5iKQ9VkEDKaujsseSMGKJEhMXweByh2tgNZBHmpGY59wNfAHkY4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g5m7rAekTi6FT1DdZiZu1sQq4NCuUo6GXZMpLbwRg1NhUVdFPUUBDGaw12j63vrkNe6woJkTav7GhNLRNAkHXAP",
  "key1": "2shkZWwegvjnWJUcYmWQ2DReyHJbAK8AMLjz3LfJHinyXcWt2vdNMGCkEr6GW4ZrcQehWsnuTWCZ6CJd5XBxvdRR",
  "key2": "3s51yL61iLBQvmqzaCvwCGEBFYEE8LpmUBnAsdeopYLgyAfapEFz2xYqEhGqPZS3q5xZzjweYPTR4tuh8Rjey6UT",
  "key3": "kHwYDGEdvrjmBosuDQBgLUt1ayw8hCyZbBSRVHEMeAumZF4vyfDbdn9uKVKvYfwiGdNdAsT4f9tERHHMyrjyEd3",
  "key4": "zRrQPaeXL37Tt1mKnXkuUY5zTq6UUryV6a114UXD9RsvUMDRqz9i9qqRQTFvkeaju6MjRxwLi8sXWPLhtuZQf9p",
  "key5": "QA7Df988X7QEnSmHzLpYDi4Thfv9TL57vu3PZUJscJZzDB5WVmvzFQ2DMN3Wp9PUkhqGrydMbdTABCKXz6an7kC",
  "key6": "5mMkV1buCoAyv5ecjstynBMQMnCKkdsm6UH9K65D7G4GXSK8HjCeq4jBskBi5Kv2zaYSPKYvrVkPVTbhracqwBvj",
  "key7": "3y8TkPAKvGPijoU7Exnf8Vi4GFZgaVdUbqsCFy6QdhYZmurj5QsWBpHyHy6dkszBmbC6SqjVrqSnbL7mHBUUf4hK",
  "key8": "3Qd3sZrGRJ9sDbQd14NXZYqmGZKe1AVLBpbyVGzn1pnSaVkifvZJVzvd3k5yTqVHziL99esjFk3JYyRnWkFMio6Y",
  "key9": "5J6tVpyfYHLYWDWiymgqLsdLsNmL2f8orU8V1smnEhtVuJ7DjS8SdFHCi9tqAxeXLfv2KwY8ppyFPLdP3fzqd1Ra",
  "key10": "2YGEtoDHrW5sMzNb7zpjKGEVJf7DBrMaMgYns8e5NzLsVu9FxAyxCyYx1h1z48cFEn85zNzEYWw6hodsCHXUVeHx",
  "key11": "3hURmZ7z59Ra9iezSHduusW5zJAZTamhKa5KRJh4vZoEP7J44S3MGpzV4ckKxHejZeDcbR1R4JoWoQfAyKb4VDj6",
  "key12": "5QhGZmJJrPTxZ5R5NGeiJ9jX17PxVxg6s7HSjxaFCmr9N71kkTNDRA8Xdz18YgySP9NEEVW3ehGFMfMNFVtvmANU",
  "key13": "3rwpxVm2XNFn9Yr54Kxz9o3jw94ScTon4jKvmVjMqfhvA7hGB5Wc76kxACbnXx812yLGwLLcvBbqduFb6g2847g7",
  "key14": "558NiPje4q8GBsmtUNoJ35H5KnxPdaxzFLjPt8WaS4meA5HaeYvac3duXZiGZRNbqC4hTzU77sd2mmz5bPEQoYx1",
  "key15": "4t23x2ykVkktkVy31wkyRpN3AUAHRMW9WBGPGbrLtoQDNVV7RbvZmCoajJZZMhQaYTNAJUoqgwZGN7mjMuuJyydQ",
  "key16": "VzyJCUaJtggzyb6WMxZTkQJYDB6hs3mM7BxP8x9567AM2qxqQgopJUhXppTkAyprtMiDJX5DcC6zuzJKW8wL3sh",
  "key17": "yjs2UUQtJC7WaKMjB2acoaWRCNeJDSyFuqDtE24ddXysHpseWvLdhqMSjBhGmAfdD49oYamUgeJXeqPzxptXN7n",
  "key18": "4NvBWGzNucL6Hy9FNGtmXheCZqKie4fjWBA4p9TdokNMJaYRcSN6jHwbgSxcyMHU1RneDqgHBcdAKTso6D5fDgtB",
  "key19": "5E4YSur1gFSLZiAcrC8P22WQzwY6sYwMEt12GpbiWabBm8ZRHRFvGfgArP7Vd9e2AAwrDJEYPaGovawJQz8ECENE",
  "key20": "4kCfyYaMoVuug9d8wZ85bMzDZZGTytv7cASsF6dBZ1GzZEdTLRqPd2xbfyWFsjahpF2PYhitoLxQ9DDuhRS7UjzZ",
  "key21": "XvVPssXex5FPkQoEr2uys5EQnNSLmT72wWcYA8mFEcFX12GhiPQFH5jqXmni5mhBKYdExWDi5dFnghL3rQs6N4n",
  "key22": "HYoVcduf9f8oU8mDjWH3mvKNFR3gAjLdAvG79ApCGNsLHg9AVesUzZmnpckjPTA87jv7MV27j6cygB9TFrhhWZu",
  "key23": "2iztH23ySLFMh7cL3MM7Y8D2Nq2oCxFrfVbtLVptGgr8JGJu7SFCeJCNdHj42mCZiQNzfRmRnp2spbc8ZwHddHP4",
  "key24": "5eB1SD8CNFu5qXKRSJ9uqqsHNqEQKH2N9GFdNLnSfyfZhRKWL5ZpDjDmP5ouGEnEpn4VDSEP7ejb2jByj7KFUJ3o",
  "key25": "4VXwwFbHybUnywPUyjj6W9oV59ijUKx3DvoQDbfqwJJVUDtm3LyeyQL5RFVoekZpVcSD4j1JCxsb7AEPk1Nf2sn6",
  "key26": "3mQ197QUkrRtA4KxZqf9f9JFq6MGivxvj9jN6gGiTDSw3SpWUnZKgXDZPMxaYt8aDDj6oLn4iaHH8EfL3MirgKbD",
  "key27": "565p3A3kwpYWZswJ58PGiuuUc5fLJsXSnDLJAo59fi4NDRSoTZSTMfH12DdbbfdJhKkz8TvDqH2iNTvMtSnqdY4u"
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
