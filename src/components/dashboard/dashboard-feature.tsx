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
    "5sahPHnLqyiTXN4N8Hghcy4AfVnjHgtnuw6FF6b7Ahsq7aiHn4ZyLZdahX8cJr1RG9nkPNdTi6B6H59rHkfSLpMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YN9kHQmQTbTZ67fgg4cHiweT49GBr8Ts71EEZC2ZmSpqpmx2pjiTptGg8ivxYmpkz9MfZHf82s9xa8QEwKyGr7q",
  "key1": "4bnBJ6U9UqAKaKqjrc2y1vQ4fEFbn2kDV3MQtGYqQhVeWVUDbrXtEgMvpDP4XmJeNysaZ12AAa4MvyYvprQdshmH",
  "key2": "FvT6AvbxFPgjWaDSG5BH5MQ8MtGXzkBuWS39dLwzMyRumCv4s3fk2LARugQVngN9JPcnNeTB3ZjNtdSsZhfbL3x",
  "key3": "2FRGnzX9cLo7tDr2XnJWiwVLAvp8Ckz4zJUQmJct9Mp8FkKXMaBkPWH91J6kH9WodToChdESN1NVauLVHG4mKW8c",
  "key4": "2Hj3yjXSYg5qJSpAbbwMqhyXHguiGg2cWPXuuW5w7hccCrcShNrNYpMckKYbPoecMeyccPSPhCkZVEmUShopNzCM",
  "key5": "3N4vvCUDhbhCWhwjKH366wWxxxFSnwNatLy3RXmvXvpwgHfS79VcimYyuTQNg7BhDz4bFdBzBgv3mYijJ3pB5cR8",
  "key6": "3RDXk1Gkeq9XqquqrJFE8AGPzxwAEJy6ttY94oKBL6i7H3JhxYQZuvgHpcHxH7UpPRj184KdvDiLxZ5H8NjGosXv",
  "key7": "2pBFizkSjXDD5gRKoyai2sy6VFQp6xN3d6pgScZTue8mWrXMQGT54UK9A6eRnTEhp3nuvrDMNN8e4rrPopXMeZmR",
  "key8": "4vXK8cLPVTX6YUVhz5ciptFMqSZiSNAnt84X1mPNk14N4sJ9pCofeFMKwpSACUwH2qMFMBBKdtucQrfWZ697xEex",
  "key9": "4TMb5JgXiwADucRXFum4Go4UnFZYty8hB7AeoRkNB4N3wxJ2QF76oUWCsFryfLbgemqN4qZ66cCckYbtPpNMKPWD",
  "key10": "39g1xV2qAgeKiJcAqXtwwgy2cVoxEFXGkWZwuh4Wmc9whKU822ZpUqCWMrscL9PGUG2NjdXkuQc7f17pDsew2fmp",
  "key11": "4fgHh5SRAm4BwQUFC8LvCgJ79Ki2tUbcmtsW8KX5dTy8YQiWT6EgsPX9dRKnRnv4PxKV3Fg5kBPTWJLoUBJFjNdP",
  "key12": "2Y7azku7FDKUQQLVjor8cAX5goBW9w9ThxBD9Nd1SMoecCrPc1RQ58MLpcmKKykMdmQBcGV2wFzm41JXjg4peetA",
  "key13": "2JxmDMpAr6PE4Sjq3nk15LfG7PntjRZJAebDhWTGNqQgAuTCpMNfY5iKiuETy5dTVMHvvHmahEGzL89XApV2uqe8",
  "key14": "5bSnQzd9pLgueqdYayfhZMqVMGBh1zS5g86SSbXj1MxK21kjLHUkZ29e7ZyUCbkTLKMKQCP7bP5MVk6qb8qi7yqp",
  "key15": "56Nsy5e9QnjEPGf8XrPRV6hLaepRKxPcqitHahQZx5oNXNqXDDXpTfZNGCbvBrDiGXAmsjXZVdZtDqBLhv6xziVc",
  "key16": "5eKs9T6bUxtyvMoEJr2hyjbuKLFLXAnjb6KuJKeTa88zhvM12mtoGqqs4tmZb34Qj5cYBVyEhSjEidkYRWh9Zcnr",
  "key17": "3TvNCkbjPZXnMvoruYVsANhpr4rGC8HDRWAhsCxCgw4Rj58q1bjryJ3XyG5xapTq2eiJnt6fuZWnTbWmwGpNoYuq",
  "key18": "4Xjt9hvRnUDomJGGYAPWkqDv1P1B6NBNDsLfy5Ago9FCtAbYxmVVgpimNigfXtsXQq746ymFSwjas3yX1xeP6K7h",
  "key19": "66KcGrSs77jbcoc55eotRkXdKw5hzpWwsy8Lfy4REHWaQJm61ey7YL3bTWcXF8MzuSajKEtzB8ZD4N1afkDoMRA",
  "key20": "3R414Z42Bd1CUxapWbfzhnq8k93fwSh1hWSagwsS94Z3wMHsnZJdBaddHyRiv4Sw9dpoAWdcAzapVnJCGbf2JckT",
  "key21": "MPHYpEAQ7yrGhbRLQGxYAcbxNykFmPoXS87ZCDbeAeZMpQKDoxHevSbjYv2jTkivSLghW2X74fBwMCf7A7rdWuU",
  "key22": "4b7kTuiL7tMooCaAvu4Wxgk98AfdbZHcWcJaCrM4BkwN5yDGm5aZbvDjqRJm6wTPHHLE7faZzBFSoVTrvqKdDE5V",
  "key23": "21PsCVoDe7foBL1wBFfY65Sy4rAunvPQtHjuNi1P3PthYEsXATbLRknUzbRGv82BiKVfCJNG6248XZ58Y59ikd8p",
  "key24": "mus2JcXRzeT3SD5s6c5Hap9sEKMdYb5S6MJ7vjLobsYB2Gj5Koazvkoo4WC9PUzLmcejd8KzALYSzJ6oKiBdzKm",
  "key25": "5pJk9FeXuYsHwYzN3iurw4MLTEJhW7S51iiwEzpCP73fhSNJnmHTpARjGVeTnWyvnMGBbcK3jYP6gVDKniLA7aTY",
  "key26": "26xivazan2aEwGtjVfKk2NurVFeQf47p6ZyvHVTCXa3ar4T2wiui3nGq5S9YMoq1nJrHEKnc9iKsxuMHS6jN9QYf",
  "key27": "ifvziPhSYfXYMCLRyrqhNECgkeyu4ZTVqJgyKvhdZWD19cqBkJi44SdoTLBH8iG89T1ZjmyKG38z1TgxC8F94mk",
  "key28": "5usJXS65QBA6ZKyuX3fU4v8FtcdAV9SgkU3nqk6dWas8axYEoXn5KtGaAi1rPn3akhK3htw8L1C2RHbyVbYKt9DR",
  "key29": "Wz94HRcSmodhZ5bHNdePxTxttrukdWHnws1gR2GRV3Gwnt2wrYRsTqj12arrHEyP1JFAmXWeCia4aNpGVorwuiA"
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
