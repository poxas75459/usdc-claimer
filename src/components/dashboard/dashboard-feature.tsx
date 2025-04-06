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
    "5rkmNZTqDed9YN8QVHLyboTGL2mgaSRfozDCCrMzKv7xfwbYnCC3KuQGRkYFiyKDgnALrUghdkb6uBSHpbNzN26e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vuTFGSTJ5bGzknynv13RjdvT13fYuG1vm8ZkhRhUXXS3A9EKTyszEgXmK4EHRZtpuQguULeX7RJgfgobqcuNWTx",
  "key1": "3UWtSH2kAnBGmwcFVchxb9jiUPB3aSB8e2UZ34hnE2RJvJdGZ7JuYZdKATDx86r5spi2iEzaZGtWTmXwcUhWkDvX",
  "key2": "HrRmieaywc8dPHQRUKYAKueWycFdj7QsHX85MbixzZPa44DyrmsUSYfte6hU5VgwfxtaYmpPaX3VE2NZSMntMnV",
  "key3": "3civzmGDLof6DBPXPQLXTsiAuANiAv2tgCLHqkzTaPbQtLLbGqXuzrpkndiSFuSc5DTjDftDuM2xGuj6dBzj4Xj2",
  "key4": "5qJgsVmEiQ4KBFtbYFVYZ98st767PbLi8Z1zhVTRYcU326bvzKHFu1HkbHyKcMhZqiscnzmFnEVtiy64EAL1aPyn",
  "key5": "64fFvNpBViqzAGWveVcrve3VN9xwnXq3DmeL3cp8M7EgMvbkswAsaNo8oQyiZkSb9h5cJZabyNx6X6JiPx25T9oY",
  "key6": "4XqiNg27GcfM3LrQ9G6iQE44vFLbqkWNVm1BMem5Qgd5QAX5K6RrY1Bw1DzYAsBTYCQ1FieUKHq7JwJCvkvJqcUu",
  "key7": "4CneC18epw7ZwoZ5BKBZBsQ4NRCoGvkmJB7SBhfahBKyAxw18JdXtLYW9QptB3ReKtRCTjFV9CnTo4Gohai4D8vS",
  "key8": "4eZo1VDh4CQDD7oWEPCd5zgwYZgu4EfgZjjsKf9psSnm5ckeocHjeZSY4BhktXxEYoSgDNGSz1FpM7SeZAedXqN8",
  "key9": "62ZBeMSi6ZzyUgUQHkJPBqyEVmUsSMYaL9p5mLfnTrEzcZk8tdsy4RhwjkQ53nR96AYfrbGVaCvECoiqDQP6GvwG",
  "key10": "2Ff9c4qTxd4VNtjwSVEzDQT4PhKFvcDwx71fVc5QhLWJQVR5pWJ1pkprnX3zcmy5HtdHwmXLNGraivA4RYZ3yqDq",
  "key11": "3JttskTNPR2RgRHeJ8AZcatyigK6TGCqxazmXNJ6rwMaJKMeEL6pAiywhNoamPDXrmh2rvCHM2EXmBRhJ6kwTL63",
  "key12": "2peZXeLhYht6nKyYcpejmmK2Kg5iN5QeGVb3D5UsLZvAa4uPTTTwx3vckcm7etkCTix3zpwvV3hxAmZVrk2BLW6n",
  "key13": "5kfJh6H7C1LFuiu2LMnmg4rsaMWALrWnGv8vLs6jkyAZ3R7SnssAgtSwFkJQZ5eUVmfz6ZdVUsV1yTsp3fS9y2ab",
  "key14": "4ADVuGKt1hEJjDvgmPbDTAetaXiMbLcjZwhR16Y2Fu4tpeeeg778Zx6anknSCVS7otqKBmDLtEu3Q8xHQ3PeVN5g",
  "key15": "4FpMup9e18ADkQ6Q2WUJ5VvptbYTYEiQvJFRVDPQjbyNdfwHUqzeDaGCDz7679u8HKfkEF7NiLvaiy7KiQ8DD4gM",
  "key16": "64KWGJwU1MVPmTQBTSKTUsd1PBpTVRB4Rw6vwcw2ZfKqqACimFCAiLqETGtH7i3gBWnxcpvFnGJayhQxVtrXt4Zp",
  "key17": "jaDL183KATHEpkoHDxm2kBQPiRGNzwYWQCKRuGj3cNRt1M8DcjkQCnzfaJVyTtGU1fjeCkEErP2ydWyPCZBYwRS",
  "key18": "57TzorvTCXqXz4MKtL7ZpqJEcXtRdrQ5DTUqrdbA7Qnfc8MgNfxUWjFXSqgXvTkZvM8Cm1ftNZctAT5byQn3tYFk",
  "key19": "5STeK34kU8vt1ATJNCzhdWYAQPsL9s9nHTFq2vLy2sDEyU48nQNiCQC4tQNdS1H9o8ZXh3Pd4A6eCxvRMfHjr8T9",
  "key20": "2VxZ3kJGVhgM7zLcNT4XDqoPCebSko2VKutTR2Q8qeW4mNuLk1EhsjbRBJvjaiXYGTBYcZdUTAvtbHLFPzxvCx6D",
  "key21": "2kJDtxDtQeqLW5dH2VcNpcJHUwejgBCGpmuxQJSK1cToe3tHT4qbnpseoPrtg7SW92FW75weXgh2F7fdGZwongG",
  "key22": "5GdXBqH2CZpcFMnHq3tmC7Zs2VGwCS7ehDLEbQiGHs8SaATXrzKLyNKgbPhyDXKPymzFQPwgrZiQ5qdBwb6VSQD4",
  "key23": "si8rpxDhg1Q7rLRgiwoiVMNQpUXK3J5Nj9ZbVJ4i6QLCBCjtjEwmFbRHXzJ4cnRH3Javx4A3S7MrGkkX68Fmr2s",
  "key24": "48m9Rqqodjj7zYWz6P3PVXQXvffQWpPuLacDeLP7YXVyS3gdAJNvWApbW3nNEU38epbowTpCgknQvzj6fhNkV88Q",
  "key25": "NpcZ74bst1grJBzN67GdAcMHQffdigCoos9LwTaibmjWZZrjJSDkVUswCzDfFBr8YgTkyRvzYNFa5kgGG6ygFjY",
  "key26": "65rDiK7D1WbsGuehx7om677WQq1aJkmsQbVp5scX2EbcbxYFREEwVQZpMvQwT3kmftyVxYQCznsjyYaKwDq52hLs"
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
