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
    "4uvMu6vpFcHRXNAzvv9fo5PgbhXarvCUzUjoheXJKejddQ28n313ww378yjWM2ZViyZfMmaK4DJJewn1Rj3Xi7Y1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k78AEnbKGTrnCAgH9rnU96dtEQNdeEjxoojBehmRaa88ESpCbf26D8A3Gt8c7pbupSzihf5MQHQxwTdmDt85nwr",
  "key1": "5dNTr948kuTeGV3RBv1kohjNETJBRwcpJp26qVe37PFTcksQcbYYMaXDyNViPnsRPBo4fXowArfoSZvDqD8k1WUz",
  "key2": "34UZVa7aTmbu3cErAT3w2m8sgE2gouZBXeQ7P1j5JjMxx8R6CC188R3nXzpN1gN5UaszTZTKkZ246tjENKinPH6V",
  "key3": "3pjqy1Az1KqDYq9fGPv92YbB8jiYRRBQUdMkGeqFdwBxdCWAZt1a2WymLtowUbDjP3CsmTUi8HaHyn3ob9T54gfn",
  "key4": "4jVmkGPPTnY5YR3S71PPFnJsJQiMM2C1Ciw4whK5uczUqtKNEkAT82MscQZWhqWK1NFRCuZ5vqF7AQHRAwHdM6gE",
  "key5": "3qFdcyEWqJXNrz54ba7n5SWAuj8268re6xrqiXFsbHj9jMqxoNqNJBv9FssmX17eaMMk3XpU974SuaeYMhJ7nr4L",
  "key6": "3RxRqedJ8EkWt9Jf1gP4cvkMC8ixnzj7N4BQVUrEYcBXBhe3aJCH6BATA11QUgUwZ4yCDNdcqukWyq6mit5dhHny",
  "key7": "5JEpRBVWRDDRZ1cjwjNDrQuY4rwka2gJzqpSUu7YunmvCQm93oLzyKXXZ18Jx5r1JZEF8BJgk5snRdsVe9TzCMEm",
  "key8": "4Vf37nU2nVo1UuGcQVEDfC75MwWv7p2viBoE1tGnbn1VSVFELdpbZg7AZ54e7p3iGe5krrReZV7ZL6Ls2BAYmexR",
  "key9": "3gKDEK8EYUCVnp4PHFdq8TPnjFfQ8CESq9Fs3GVQwFNPQ5dX6KH5WHc1XW2fMkYrZGBy9V2xxRXh3JQ5auMznUeM",
  "key10": "5bYTdL31neZbFfav7QQTMUEjPaYT2YBRjKo1ZQudLEzJdxXS8dPG4tZgLFSXWsRGYKNo7VfVPxsyc8JRyK9Aosgj",
  "key11": "2VhpTsgZw1c416pSx3TyhoSycxSSLwHRdwDLmeqkW3Z1JpiBEn2r6eFWGxvp6gyzFxJ3Y7B6qifyb8GsfzZmSkPf",
  "key12": "2RmdeYnh5Ank1AioZFQvdMYYx9wUVUuAfkbztYj1gG4R2m8A3ttbM4tCUuvtZALTxdVDuuTSP4CPaHGsi65sUCuA",
  "key13": "iTCXnafTcGEioGcugDYhnTsaGXdjidX9yYRrR4zW3uzeqeY5xSYPSqEEjh5Gn9PYns4mkg9sMbjFwdWxpsNEfxw",
  "key14": "1Ppg1vzdpyh9DShc7A4AkXDLt6W2hdDf2KBkLRVLxn2aujE4dkUYMJ2ZDdUvcQymww7K18uPNkr4tdPrP7UUbt8",
  "key15": "3iA9GNENXsoGS8dtLyWRpCacpYA8Q4myga75m8c719q321DW7rSJNkGrigtZzugGchVK9zSNdGjjASbLRx4bdPcV",
  "key16": "nar792R4VZwXYRPHndqtK8hSoSQzYjsTP6YqHeC8hzTHSsmHczq4Ep3bFTx2d6c8ggDSGcV7UCVKiXUSBPQxb9i",
  "key17": "2Z5LDBLNNS96TRnXCWzWJgPGmJdoPXgWtz5qtZQ9kCHoHk143vR16KtoN2vatuLzfoSALDUQz2U1nXqSTzKg5eHA",
  "key18": "449xBAUqpxGasL9fiRDquJWPYnZbVtUPQsyZwQ5D4goYZacoE68hCnyY6eCEVURCpLyju5ekfZjhJcR9RCmdEwSw",
  "key19": "4qDDuHiTdBkoAMNZT7gtzjSFkEEtqyoSAPpFJNTZsHEfCPigwwWwRFfG3rkANaZd68VtUYm1e4Zt9WNgJXikiMTz",
  "key20": "2sbe61u7qMnh1vXgwcR21saW29cCUTeWbaxFTrSFv5p9dsDMqPBmgmFtoYc48g4qVC9kqL5RzvyDq1uuTtMBHT5v",
  "key21": "33LFHLB2fuK3KSNjUjfMHmtMvo9sXpqRK8Vd2ZFiV8GYyXhpHRPg1KHDUfcYxNCfoP8pHLZd8XfjiGN3DzTEJncY",
  "key22": "4QJy1NCxi3RKTxSd17qKfa9AvHNuWJwRWYn7ar5VuervYAWoZnA5zBuvTLGgr7J9xH4DXp1hurrwoh33vZp6fbKy",
  "key23": "27Yhesuu7LbPM7wDgMsXDqA6rTbwsZ1qSUYmKmYN2SYfZMAcwCfY1xL8CtJnw2TRXcL8vgeaEp1KWAZnq8VfvRHh",
  "key24": "3FyC5sxYZDPhu8axKgJAPQ32SZsfboeqKWyHUG6x8SMd84oW3XLWeAhoyeQBd4DH5cifYRnYpgmQYHatg4LxV2Yi",
  "key25": "taFjqH8z9xn8HKEku2tWemmfRtKX3ua1whDq1HwoTW7Yp93K7upHyiyHo8dyCrcLCzBXkegqxBK1K5QhWXTsk1r",
  "key26": "5kbcrSd3EdTaabrusfCcjZ6fWoKQXjcPRSEX5Wj2paMVcFfyjTyszSnTYMsy6ZPZ6r1adHC7MVabuN8zmDvvsJA9",
  "key27": "4scogrjvXcz4r7Y9a24NB8L7nCwixpQ9LtQ65cFSV9eQosyKh6Vs4yVK71NzNYtm5E7ZLtUwvrSLtargPGXLEMCQ",
  "key28": "24KTfjshtiaEUdQzf28ieFgyVf22x8cv2NAVb2o5pSeYXVYpZvWBj57aH8xKfTMV1RCEhCLrHE5DfBsuLpYx4guQ",
  "key29": "5iD3jn2uaC4XKCtzZ1w4ZCJVKRJPYxJ1ZVipX814CopFG8Urtsf2H3LwW9xgXQYSUmM4nRL5MFu578WsFhSS4Yp6",
  "key30": "5D6mwCBpoBAY9Mns36FnprH4k13BkLZXsEPb5kEZPLcFY4RjCtjU8Gn3akHJRoU9skhq8Ev9mJpoHGgGSGNMynTP",
  "key31": "47fZxYojWjxSeVesQZGvjsEBUMF32PBN2tpvvp8Abo54ma62bqyz9UyRsR5RNKqqkjUaHpKhW4kNngC8LrfsVULu",
  "key32": "5wWy9QH9sYnmG7Z52LQgUA2z89imHr1cKsBi6nyNrNRvCpqEzBiNLHidR4dbWNcfb2H2s4sX4UzSv6mo8LfaMtLg",
  "key33": "3bHvN4yVh6bGjoDEfPMm8j9J1mVyoMF57QKwXr6wJJxB2ZWoeSWcBrpuBGmBbgJhmv9fCQasCULZXSxdzf9K9SVY",
  "key34": "43bkFqXZ9o7WVBrnrdhc3H6HFp1dsfcMWjZ34x9sMiGapJTNsuQhWtqutTCFaKfohXvqQ3oUGhPfsv7GbqZnQP7J",
  "key35": "vXZVDUBQBnt53cZ1YPQU4T5DriTDAza4MNtFdgyLmLfh5w6rAaoovhyTVHRo1SJNDjCbGs7mttGmHyWh2RPA18L"
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
