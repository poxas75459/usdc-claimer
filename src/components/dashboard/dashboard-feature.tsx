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
    "3kLQV6eYFnVaRUiWUVFt3NmnmJvPuQAcWP6gjXzAyoympfsnCc5wumEa52yYzNLjYVRVnSnQge3pAQ4Y2YhAbP8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WkwxvbdenrhxfzooB6RsDcoPLkbmqwpFnERe2RT8V8N23QczSCMKUAmLznKSPLmiN8EKMLuYi6C5b8D6arurtvr",
  "key1": "2WXzDMKi7wT4uC6eavi5JqGmGXHvpFf3h6Yec3VpDrTsDhZ2i1dcUA2ozzdXUYPowDLgcWNZ5LbKTtpbr8XXD3tY",
  "key2": "2qicNw9zr9hGjJLiJqd51wxCcUToexpFSzxTncz3rMFHfQTc7vi5axeqQq2bHLq9Vhk1cRRn5HmnLaa5Chmzn3yP",
  "key3": "eCi5R18jxYZAGQ2nwCFeycTgZJkvr7dXQCkziCw67ZDzN2dcZZGCTEzr1rvstTvnB7UwTPuQqDHiSpEarSZcqua",
  "key4": "58sMKz3CAz7RcnoQBLarrpX4vXgGwLwtoYegqtXW7tRQhPtc7Sxs5hVVQmqmE2w3TjhNddWtWbGp9AAvXxDAFc1A",
  "key5": "2PhMyASMBuRy2bnxcn1DwyMK6Ma7FS9XaWxExVHNEDsrC5u29fFJZhnT2EEw9qUcUdeL9dPVp67Chg3FmD6aoDbg",
  "key6": "mtCQ6mQ8hLTjvpvp3ZTD47BY2UpJqAXDk4HBPQkes4YrpuhWCFm6uKcoCcC2ozNXkg4LPgCbvd2cGUGcHdxYtFs",
  "key7": "2A7XmGfuiPk9BUYsQ9unkZWRymYpiYPTHQZGfqg2H7SBn5L44z5woJf4s2ycgKBwhi4pWAEX2YMXSgwm8iF1g1yB",
  "key8": "tcXhUMMoRGjnVw4P8A8kN7peYoRRUXNaCeAHF54Kq6vbDqd7KDQPH35L8chpY8M1g5LqEoFSUHEQdyYt8ADFcHG",
  "key9": "49WRDYX2RABAmpUL3AhVRMeumiisqBCfeD335cNS8BZFCqgGBPsZK56ubj8YQiE4R4XXcPmdf7AqXgXS7V4kGGBy",
  "key10": "4jfsKwRHYZqoPjun6ckWLaLtD5B7fa9E9rf7WxnrELdYhfmSdEMbAYrW46kFk7ypKsMqXAC7PhT2aBeS4zaqcuwS",
  "key11": "3JdYZNDHn8HaPwc8EEXiX7Ytmo2JV6QQN5vnUMJdCSs2uezpbSx5zQEvrNaFXgZhd79agnZMaeURb8Pjyd9hvwih",
  "key12": "3cSf2KiPihNxPLS538rFN8Bb4yeYqQgmum1pDCFwsz3KqJm4M9nJ7cZMwmNkGGn9gFaZRPKgnh2HRUsAwPGKF7wP",
  "key13": "5jh1qGQUSrd2voSgC4oyQuQy5FGrN8tv1Uhud33SDzYap5XcPvDUr1FneNStrFbocYv58xF68vfTa75CtJdzFe3h",
  "key14": "31dpcrYXj8FS7ixoWJpY8BnduQKUchw9cZn4JBMv8yGw5b2RqZb2MPCFjjzAno7NxgkGSNUzPRkUUATEVku6Tfjj",
  "key15": "55vSmuKsLrjKNcTfHwxEo4ryzWi5jm5xUjZwKteej94Cb2cNyZazsiHvebXAkRwnufKBEYfWubpqfKpyc7eJPFjz",
  "key16": "4mphUiWtBAxWTrjPFq5MUGuxbs8yJLNDW5e2bVLEVuLwarervQ6ZJThtJcnw4of4cNiWz3fAgGDCafMTy4qksV77",
  "key17": "3xG6CX5rtCecZC3oyc2fz2CeJwQF7smrtvDRi79hbqQ3RgujzmjrDu2TUF71xKwC8Pt7FqFyt9DTXhdsq9BmzyfV",
  "key18": "QqRqHfykNrn66s5vgxiHDLoQ9VHFjSxs8b2chduEkWdiutTFsocRZaEnUkP4m72GA7bkSGUhenViNwKKB1sWdse",
  "key19": "mAViXsD5jRJFRNy69d93S9NfQ5vrV2WntMPknhbQ37Lm9W4Pmzmof67RqfkiQT5SwsSZTqphpbM87PWMbq4oPjN",
  "key20": "4jekVS6itvLjd4q5gn6aoK8SFuKJQ1VD2qvJiLm5qjJX459ZbQe3hqyGYxjtutq9wsFoKbzZxzFJJpkWFdi6EqGc",
  "key21": "3JZPJu3VBghRefkKqTZkNoXKWaQbcbjwSfb7gAxLpT346GDXWLnp2i8kWamm6LnWkXLawxhXxZ2Evy4Y5iRvmyaY",
  "key22": "5MrqD8sdCBcUNXJqZStQP1N4xBwtdAo8TUPqXCqEw9bHs9uBfVebQstpcht5Yp511bttwAxLL31jNbyPukZyTpeG",
  "key23": "2tchQYREXmRMp1aiGvFroJab1C21g4KgSgefnDmQayVdBAQtXvzGfDsSewShj9AvjZ9hDjx6fiEtW7rf7o3xXg2X",
  "key24": "2TWC5FLYpFVWxd9XHdRKmDP33e6rak4nm83rzKoYQM3YviPSXQa3ENH7PMqsJiLBe69X6XwrjqRfQ6G1r4iq8XEX",
  "key25": "24owoTrxojkVhBmhc12sLrrsSJrg1vK3hb3aux7HneTHdZn7a8pN1XwGiEiXRgA3YsGCu8WeUH1vfXPtDQfjBir2",
  "key26": "3EHxee1yZiX5MicgzVKsPGaa4isAdhXiqpwXsUGDic4o6oNU96QqnUcortnExuYK1nn47ty6w1HrXA3UPsNv23S9",
  "key27": "2LXvzogk6tWpiAtyNuXUeJ4BWTUT3Js29xWNT2ycDGvFzHLQu6pbbDAPaHsZc3byg9GsDibNV8XMu81JS66a3jzw"
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
