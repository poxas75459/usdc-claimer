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
    "5C9QsW1FymsU2YdkdrCgwedMue9fqwwbGHkbFcofHkqHcChpZ8K8jUowgnFgQBPBnJf6uYNEJ7cQ731p9U7nG1tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xs8Ankg3nht4py84TCTwfMXNm1Xugn9GPDpfkCdd9vdRNKmoJF3qDyNPuENMEr7o3zjog8Co6KBq5Jd51ySGQFC",
  "key1": "4xkdV4iBPD65wEcKc27uAXTRahCRmgrCcdGVwwrkbtpiRXBXzdE6V6YhfYJQkgQbhzV24uDkARquk8fyimGG1zvm",
  "key2": "4rUcTxnJJo6fWbQeVCmjHiPnJA1rrp5m5GB6quMU9BJ654X1PDDpfx6negEB2X9kowBSQSK8HmdEpNjJwY4xaNgM",
  "key3": "4SWKNm3zy5CrL1hk1rh48o4J5Qw4Jc1areH1uviuiguU8SbHAgSDFyQebcXfiqfvzCPEJnB7igdjUD8hpuDtUgrf",
  "key4": "y8keqj4BbiYGQTdqvPw84ri6D7hkWejtFdbALDAJQX3ik6TTP4sh4FdgF72ZCn1HfSyUVMMN4wUJDHy5dnKKJFB",
  "key5": "UGvWFfEvU7G2WRCaHKpGC9HkJjCxtfc7LY68CjjViKDsK4AoQF13NHrthKe4XRkV1JVrcAoFcqDAr6HDgenmn1e",
  "key6": "39WL3cxitz4bAEXy5s2Je6uuR7PWZ69fNLSia5npmzHXyJkJMzk1tzMXwrjiEPrSRnEjV7YACgrUQF9J4sAmAJXU",
  "key7": "3be4RexTKND7wTgmZ5xQArP726k5W1cUaseCrM4en9RHaVLvD2NgyKBb3Nm1R8sNRK7UP7jc1pMzA22VP2XGwjUA",
  "key8": "5rgzsvMQLMx1Uyse3snsnhDDgJPuRVgXmgtiU7gTvG6cgjXJHkSTPiLVG527iQ4XMDHoMqPmvF4HNCUnWyugbJYv",
  "key9": "2LPnUczesB6C2VF4MT5AFdHqMEYjo8wmpxK2ZbBvzBiyqGNkLpKcduY7DUXEjavKbA1ujA87PFu46xfkM8nHGne6",
  "key10": "5LaSYQk6FJ87yDoEotH8JLbrZFKnBsbf8euKRYv4pTgjQrB1ptK8V75dHPJdYBbg6MuP8Lewt79ihcMtmTekYHu8",
  "key11": "3PjoERTos3HAeTRRUWdjJKh8QmaZ8DCAK14Y6bBfHwwgjerM38VGocMwgndzGfkKx9BfPM5QX23Ub2eneNT75kDq",
  "key12": "5Lbd7C5bRQkAEynRq6HWDYmXux9tf4JswJr5zCBr4SBMZDHes5tLchZ3kVnZH8cfHNShWH1ZhS1vnSiHTK67fE6D",
  "key13": "5g4pZtwoUDYtmj2D3a8MXVQoRReXo2ubRZKHYvcFVPParGmP3KCZoaexDoZVX5DZtBoJmzbfnwBnMjCrAY8WL9V7",
  "key14": "2p34HSB2ZiCNeZQ1YHcNhHdjQqgGUzvfHgJUMZJiA6agW66KLpQPnUxLB3D1cVnry3uGVdRSqcwqNKrt1Bgh1mSS",
  "key15": "3S4NZfWV2QLVKHSMdFYppyRDtrfEy9xT8Ych7R68wWVoAiY18MBznUWBbvqgUuLTmgikbHZHMdD4whFV21Uc4tWg",
  "key16": "4hk17KvqBRz5A7sacWbgki8DUZfLReY1238HtpyreN64gUppUp7GpT5Esrv1wvKUqYmbrkRweomrJpFKpaedFP6Q",
  "key17": "4uvrrj3TFHRsx2w2z4igEs3fzb9Lm2rByD4btc9iLsmGEztxXCbXk3LYvYUoiciaA13wGH8Lk6QNtLY9vcZsRpSB",
  "key18": "5D8kGACoHwoSsjwQzHyDEKSFgfW7MrbXRMP9EgSmzWbS4fLtJmVqgo5Vmwqx97W7QxZEBAKwB4P33RtT5tf27eoQ",
  "key19": "gK7LRyfQKZcNkaPBSTVgcBMVJoqHTTFRKPC6V3MfFKRvJCZWYBSkhmrt7MB5vjSWTb1jVMGQs8pc3kHdraNkNjT",
  "key20": "2KJ78DJwp37Ukvdw1k1dx1P3q7faw9WRvueoSUVSAaqt9Bdc5QWS8p8fYhmy82Y2K23TeEei5N9GVHxzvsCcW2Jz",
  "key21": "4kMveq2gK77tyGEAgxktgHNuNY5Gc4N5wbdMFc8tURvYwnuY4fAH7N9Hp3ygBbu2TPu7sgKaeZ9Q7KsEJuaHfZKB",
  "key22": "3MffAAioN16vQz1Ls1mJAq88ZJN6mJwNjnwFiTApT4w4WV51uzdrAjSQC8qJP6LiAcYk6DBAuuzVhCpj83RDp4Ar",
  "key23": "3EV2mTkQX1BW1Xus5vBqzDaDutYmXd3GZk6JtLb44qxcX3pzqxVwtDTdzhuXF5zvsbfsPs5bE8aq76TryauAwBb8",
  "key24": "XiAN9eKkxHi9o4koZTH9nxhDKijpdTQve73jT5LdNTkPBT18Vzxkfa5h1xfi2a9qBLgWC5BkzirmUAqtpziViQR",
  "key25": "53V7QaXSd7kAbEbwVpWEmKC4d5u2R4cyiQHsVuDvGNMpBK2BewpCUHfhKKV6b93YeTwLnRA7JNMK3dPgYYibs4T8"
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
