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
    "Y8YUqPwkj8UbQovi15YFzoVgDktXXewoB5cu6MLFkjW6rExp7Aqfki9akKpvNnoLTngrgcThh5MnTia5uLw2UnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wgz5hN8Pj86nA3AznYHLVCJe3CXriiVwQMtVZ7KvwVPHDdtDWhhqV8YoMeLX9y4VoPKzdH7t5pX31mgDNxKfpgx",
  "key1": "3Cy7eVLwHC87g19vknMTJPjvrK8rAhKVvPPD2n6SGUMFPVpa23tFyZEwjuCLPFWdM7ABKhgwMh2evztuzQjdXLD2",
  "key2": "2Jt1ztAD4NP24pmt3RNQUNHazUJjkAnxE7jjdK9N2wrpH6waLXxkNTJN2oWQtp63kbmALUBXREHczgt2w1H64v3y",
  "key3": "5jTMpUGVjcX36P3GHox6EbJvEsgjky66X15bf9pTYRGHVdAdnX55bNo8Mu4EFewVTiAQv7VuEgfVXFiovRLNrX51",
  "key4": "4dNTmbSzycjkSfsYZyXhzujjfdzp7JnsS4kytMFft3fZVLp122rPfBUzBLnR5mxZ3Nf798pGkNF4E3qquzMH1JaA",
  "key5": "3x51pATbJhXy2gCuCsL4d8Z9Tt354r76o6DuQ9Xk7jd3XguXMuY87dALVPJFjo2tpH2vFuHuu39XczH6orTAas31",
  "key6": "5YjTTt5tCSTHi72TyR2EvhukWEZq64LTfgmQv67nphgEk12r2PY9YbNAnhnFA3UPnypoWLqEUsWC8PqBTg3cnpXt",
  "key7": "2R5CdiFr86zWE6KYZcGsv7yZAWmaDSLKZHXjNcuH3CKCEuwvKUmNpLmCFkMq3pbMpwaynfZqpPBZVUGcnGBZEyGq",
  "key8": "35qiwJZg7CDbnuG5N1zj9pubHh74VEvJaQgbhrDcbXRLUnx3ZDc3Vp5i5hdCkH4YrQBDLnXooDJAq3UawG7XfJsU",
  "key9": "eAQacYRZSLfWUDvZLJ9mtbReZ2knoLqKurke7ZEBoikdKBKTDngPqKtCae9q6jk6Y1HBc3yrTT3ArfXU61GG8hc",
  "key10": "67VujC8cxuvLj234cRK5qRVNmA7cxTiwoBgrkr7AgscbsQQxuHajog3echsrBxWfWN3uNtxJZC6u5ta7qL93TuAt",
  "key11": "32h8nbNaSf12fquR6yB6oxEbK7LzygXHigkZRJAYJN9Afqcexo4y1jw2nrKzaKSBc9D1g3aLdWVKzH4q7ULxuek1",
  "key12": "5x4J4rtGooF4BKbhu66i6esc8NQnGf9zVcNzipiAjLmsoYEVTqEzL1r7gLm8nLNbYDNh18jAWKNFR3tvgJh9tE6u",
  "key13": "4fqcw94bJoiZXBNpCLumV6rywJGiae4aTWF9Atbbs3mh4CzHvR2kKsSXy77bQTxsBrauzx9JYYptDAbL52P8xrtQ",
  "key14": "4bw4myQosV3tFyxB2B4mtknayGL48V6aNGv7BBuokwup2889uQUB3SkQyQMTCJksFfJBoHqshRzdnnfNx3FB5aHn",
  "key15": "4Rz6aVE7b27HnLV4YhRC6EUyLkTVeoajkjHvTWPe2yaG7MMjWWo6mHm23s6UskRXjp9Y6zkZewZ7bJ2RoFLyHU92",
  "key16": "5kysYY2d7eD29ARhiBa4K5LiVt4RPXJWY6qyFLqHkmjmx9YcVCh73NvmUWC9K8yAZYGBFNmLgxoomopxK4huwxR8",
  "key17": "2mMTgiPqiNYa6pSAd1BWxWiFRnVzd8Sd2pMmxWgAyk2cN3RCWpL6LL2qrvYDb1SXjWSVsi63d54ZR8KEuKHM7f7Z",
  "key18": "4icajbXCKEPRNrWtkajxiW763fBEmdKBfHub5hesU54cETBzhBVbjfF5zT5MxYxhtahpnvPMdPgLzZqq2ZsuZNp1",
  "key19": "8inNoMC7cZGK7rDUBPdEAxGMi3eymFywyt8FHcgLwDcxABQwbSB3LJCPiV2ZiMCHMCSSS2RtJtVRs7YvRPWajiY",
  "key20": "3xpTeZ85fqjFD7E83kpYkZX6MJNqf38SimwfN72oNEm7qFYwENTiB1LQ7kv9DJjMnfrV8wS2SbdSAHNwA66sMBub",
  "key21": "2zHaqr3zTv2rMS6MrWkVHjFXTV7m4HvR2vyekDm6R1pLBVq27q3g5CXGXiEE8GA9raxqqbsToTnCinqptNw4gpS8",
  "key22": "Eys5VnWu5LFBB715xFcDtHvyv1eKyGZDMAurqq4KtKYq5UomgXdSUNioeNjQHekRSNxWn7fF1Q4BSNwfj2w7W74",
  "key23": "5abkKunxz6ENsGBKdihCed5Sa5BPxDo5w3qn6E5dQGrr7W5KNGUrTTA3kzM4aA3Ryea1YaM2dC76eoYbQbG6qWE5",
  "key24": "2xfpSpASjNcp3aC8bjs3Kg32EDqjjsW3u8XPPEAKSTugQhw717UGdGrvzuE9eLAwLf9MhML6jLf1pj2omkkapf6u",
  "key25": "4yPtK6RT4RLkPxXMEgZVqpc87hMMtitx9DpPXrUedoyfH7ziUT4Ge4ybQxcVyeTaN4ziRDMjBLuJtHcVQ5EFCh8g",
  "key26": "2QdPJxVQsKYrmE9kNB6Zs7P45noPD2dDcE85aH2KQHsUdj86VTkGMTAGwgApo4zJhAkuEhGtaShqBtF5NP7F8R6C"
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
