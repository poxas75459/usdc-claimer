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
    "3eRcDzXenB8ECVEHSA2gemviENgPNGa2hCNgKF3YC4Ew3ZqvbfWVZtiQXJCDVXuZQR4wpJ4YD6en9HeHG9Dp9Gmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64GugcpYAg8x7xzRqwdUuX5oL3opBqfWnFEHAfeZRFfZeqRYxxFruLBGZogZUb1wzrzCW5wQXYWxqjcJxwi5F88j",
  "key1": "3UhTpKb5zFT8rH5AKqLRhNcwqG1AYyv6FxQWxFapHbgidKMgRvemvcmDjSHVork8jYwyxVTjW2bjAPia8bCWacHA",
  "key2": "3fRxpz2E2LNyWTvAo7m3FERT5BUY235TfaULwRvmphqmZGHqR2XRFSX6qNiGoWoTo5XFccuSNfy2CLav1wYov5SX",
  "key3": "4guE6wL6oVcLg4gFD45tpyD7ACDvzyQcNx2xQG8py6zhPxakgqs3ymzEbghTYascsZYu3vsZgNwiihTtJrkupEng",
  "key4": "5JgJ7iFeyhVUjrBe7SLzXJBNfHjgDndPH6pvHP1aH7JZ1NSUVom7E67ntSTvwaLcdy53QhLcYkiHxUhKSgq16yvi",
  "key5": "3bVThT2YxbhvF1bTqf4xX7kGNin9fxiAzzDUmJprxXUcaqMkFpg6yWnWxU8BWdUGrxxWUQX4DsPxQCzpSkipUBun",
  "key6": "onDGouAZYqJwZ4TNMURHorfBNKWMLph6dV9M39SVMAdtdLGLuQt5ebBBVtBLX6xWBqFBc39a1TZwjFVS8jcdJz6",
  "key7": "iuc8KDJRMHJx8x92TamAZS6fDEM561SeSdAZV8f2CPWPqa6xFj3Wr6epYkpkW74j6PR1X4dzgzHTUemN9kPpr5a",
  "key8": "5DJY1GJSu4dgY4BU6f5EbcUxrWNijwwKMaDKKaiLWgg7KKMmvkP1Y9aeg2M7WopUaZy5gLfQ2tWzCtGnKC1Cbxuf",
  "key9": "123qLiugL1GNRxrJQ8uuPBzcy6dSGHQeLP1xVtkbcrkTpvzQyjhwvQvuZKgCC38NzhMw3qFnKKi4UiJgeTQ2njq4",
  "key10": "4kzkgjDTVfhbJn2yxFGMHQrcAyi3eL4vThukKqXDL5xXjvejxptdHaq85XpNzptAeBwFLLfyXr2y4ftz9vEshonw",
  "key11": "4Sh29RL4QvKVkNhbpCjp3xawd2Cd6x3oQ1qFKBfTLn5PqCUWPZxxpvWmTBSPEceu91xtrFj9oGi1F13oVyhEGSSU",
  "key12": "276t7RPdemA5BZ6gck52uAyHvA3Gyj285MLdevRdptuBZo5zznu1RQpt55wAthJUTEqfVYC8a9Kw52PWFLYyErJV",
  "key13": "3EuA9tKhw3WUq3KGwPjXYGBYUVHTmaMPy8wi4rvRGTyEDAqcuN7VKGtU3a8vEoAZh7JZrUE63U3bx7T3psUrfXrx",
  "key14": "3wjBq4BDJzbYDPuqsnrifZvqSkiECLfKNsXGT8rT1gTmTDQt4LQDFJZnam9au8rFGinZz3PyjutQT6UaSjgn6RwU",
  "key15": "5X6X8em5Zov6Eb68zRCndK5ySfyogpe7kDkuSo6mPta6BqNXjj3gFb2eqBUoCiX9KB1v62RhELNVYtchEuA7xjbY",
  "key16": "hWXtnTeXuXZzBFKjS61i4knFh4d7YGhZXybGi3mjNudeJBaZQUaNGdWbFLkJSDnMipLsbkqLUCDs1wbMMr8yRgw",
  "key17": "4PZHfZivS4GmxjnwuMtSwhwLxg2BeoBe4xqo4m1vGwT3kaNNkSb69jq1AWchFpeY7xuKbz69edcrPFVhoWjjBSwV",
  "key18": "3NncgC85JDuxi3gHwj8AzwxAtD8fN3TgppWNdvQfYXEHjxWAtEGzo7JthLvnuSXefRMu2rtHMVeX6nqfAVHtfTXE",
  "key19": "4QYL4naJRUU78ohGDT9J1fUXH8UNubm2HX5RNXbWN2EdPoHCmuBn5VUS373ZuxJHK1xEXD5dbJRpqdMo6CvPN3e7",
  "key20": "5f1ikTwEcmathda2qZsAGqwvBjQoQ5Ni9h7UNozF36HyQgGFRPxzXAr85LR82iaMMfWyhoyEJST83wvL7XVhM5w6",
  "key21": "4AGZoxXn6JdcViXaCLpXTPit5pmipHTX4AfrKNYcySVHgCz2NN4EPnsMMkrhH8heqJuEf77F9VSEenPDm1mB69UP",
  "key22": "M9LgW6ruUDazqre3ByBA79MKmhbi16BrkCfj15kHHCWBomct7KF2yaEhwvb74hG8Qe687dvPYpzbz9akvo51Bqf",
  "key23": "4yJTJrvTtRaBncmTWtoFGpEAAE2Lf215uu3ADE7c7ec6jNaazVDscwjUZnW57134JJdYWe4NyehY3KL9v8ToV2MJ",
  "key24": "2VPyKGGSN43rxDU41M1o8uHvXiWgAyrs9es59HV4hcFugR4WeE1yz5MCiskrT3JVqagCgaUFtfHAqnjXQZiDPcjm",
  "key25": "4rz8BgxGXKKMEtC6S9H5Ca1pHrCpfPmi67geDpSSRTUL5pmmjDAHXvCAMThmxPGo2JNTwD5wbjpntZNKdyXmU1jm",
  "key26": "2wuZVQ6pjQVk12FVTuLmPeNxDhDkocii6L3A6XDe5uzshCesCjrwAQSK72a454LBDBoACuBHp4yGKiK26JGfRgtU"
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
