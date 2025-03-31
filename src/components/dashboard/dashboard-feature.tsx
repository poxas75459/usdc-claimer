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
    "2sU2whJX6inHTgXEiGcpPc5eXgsn41uk3NEKLgQx7e1rZouGdtJns4ttietyKe55A6zRbaWRaQGjRJrDsqWPt6jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LY391WF5nZtKTsq7wQdGdgx5EjxVVgMbxdAAMT8WYqgfFnTcSntcoKaCGYQECDWYjcsXsY2xqfgyxvxQMiNvRdC",
  "key1": "oWdMVxUob59ZWNCdnqsQw48gU5hJDjPpKwMBQEUsJb1wXXpcAy8S7XA8UedeQLiSfyKMig1DJjjhnHhfsnr6jdD",
  "key2": "i255GmYUGH8jwULB3SAHfrHeFN7EEkF7taX2tTDYH2UPmWQYeSpdjRTfd4Lu5wp66u1FQWtLVRVpt6VWQyVGK1D",
  "key3": "26fZMaPynHqV2ov9G1os4VkfWorJ7amdLExBrbKceUtWpFKnhk3TuZ2KJgz4TdnyaT9MCYNirFWhHLLuKBHMeBdq",
  "key4": "3hu141XGrgiz2M591MgC3FHug2vZEmQQpQUz2fVhbRAQ6sXdYE3ksvoRpSJtpx4Aa56SMbFHJDVYE5gB5o6APTir",
  "key5": "54dQCpXqBcDhzsN6bPdTTTZYie9CJ24PJV2shWsZecvxwJ7rVaYvn16FkJxhER9u4roJTmi8mjquTKsEBhzMScyo",
  "key6": "4qmK99VBoUfmQeScHeU2x5q8cCwrb6wvCD1oshqYqed9aTCXjms8Cyd8xRmWdGAKCJyu3UMGMGPpYhVYjZe1syGq",
  "key7": "4i3UpNtRSv8M4Eq22wb7TXEDcMbJqVSWv8mNpFSY5YzWNWi71vDRBgMQ9w2waLXAErp9AbinbVkjYru539giwFhS",
  "key8": "Pw3FiiSDiqtENYxDEYvUTz4J64vUgus3aPt62XdpUzVMBuMDw1V737kYxqUXb5bLeno25NLWmDKQeAQnKkG7jGj",
  "key9": "2zwcJEsbrcoWQj3nBP8KC9uiqyQVvhhjTKFjtrT6Z5eSCxnqFBYdRcWtJtQMUZacmy5zxFTpZy56b4hirUejS7Fh",
  "key10": "4ZK82af2yfbRQsHvxM9u14Yud8NbTQVnq3wfzfnts9a7wD879NpaYdJP5jMXftCHMqEi7LYnbTabDNPvbQ9bMDCS",
  "key11": "37HeU5FiSUo7M1PxhWDtkhCFUzz1YCocVpjnzw43NEU3GGkb1DQgrwCrscFp2fvFYqK6wekJbWEH7xRPaYGXXVaK",
  "key12": "2Scyxx9b9E9fRSsjouYtVXGanJDz4rSyT7e9JZbo6Eo54m2uV83mBcxKPN4rBr8JEgRW5DafgbGrax9LUNxBU98P",
  "key13": "3iYHFjabp7CVP9emrmddFJ5f24x7ybQHqHZyMVNGxrQCdHndmiEqiH6SjiMevAqeQy4heFoM18RCVgqQcKnGaKLD",
  "key14": "2JVazFs4QBU8ceHaknf2kWYb9b9yNieCi8KWssKQok25RbswUrtaW8rRnT4QUoehxJQdfa9CQpyRGwtbWYpH9B7L",
  "key15": "r5KD1H1UQyMja8HA35yZ1BRKfb5qLbSnHJ1oHfS1LKDJU5U3PS2U1ERsqgThT4Ezsx5pKARAp168yCJpLqmrLdR",
  "key16": "3LZJvGcLNfnnjcZswZPBkpfAqUGwYphj8Mvy8a9H77hWiiznBfdTNcAMmXqmdQdG41hf2BAC7d2bB2KC64DBtSsm",
  "key17": "3fT1U2KNQtQ3ebNRqTJNZg4LuHZy2z335LPjfnUKRRtwZPvrikJTLuXFMkiA6htVCLn6gWqzyaVjhDmunWxchVbq",
  "key18": "xqFoYQbEtwfpjHM188CwWBNcNmggBzUZgfEGSR74oXrDv2mUnjRsVWxYjn4NBjWZ6titkp1XkT4b8BbTEoSfVqP",
  "key19": "4wqFJTx7FUmgaanjZKFynHo9QRoTfBoq78JvQA6fWMuD6v5LB5YkxgPSmm6fAvBLZYem67oWvS4UHThdVPUwBEky",
  "key20": "3gVHeoczHuWyixKrmReotKbohsXVt29UagVg1ZRgcwGKWNzghYWBudTABsdUbpHeNeRGFt8qM2SeG4QPbej81K4D",
  "key21": "4wf8SSECeuwMRxA354z2b4dkSByyapE6oRAUqJgq8rB6xDim5PFyyCV85CEkxTQuz9mXKfSGyGng9dbRBp6fcFW9",
  "key22": "2mGcNoHjkhj9M36fv1fgiiZWuou67nEzEvFetY1etyT22ZwJji6sXmpdwPHZJ2bXvv43y6PKFjtM3Ypa32CWQNjK",
  "key23": "2muTVKbuTnRNJEdaAjUk43L2AXAbaJauCwWS19UeQo6ir6vME2NebZeLugj4Lb3z5idwCAerokFvAMfbbpwcaAid",
  "key24": "WFTSGXgedtCLgwjVmNxGHW345uHCXHhsmyUXdTnG8mDVrAzYmAeihT5YDdSNHo9kZWFDV87AHJmgqx9wyHyFVLL",
  "key25": "5ADEzTwNHLwxodxqyiNkr3Sd6d5wDgUN59z1GUJkyDd3fyv2pdP9VH7KeBecyE4MFE6zWGizpNBFvn4qJ8NZSFA2",
  "key26": "28o8KEWgSckTU3Ck231B7MgNXhxSw9CT2rYARw7TYuEb5dtPm7bqsR2NtDxxBxCVc8rKd66AGcQGKtQcFJcj1CVt",
  "key27": "2LrBdzRdpyCnckSTwwYiC5ChnZ69GbJvcYuLCaLkvULcws1uXw5J2TuNY9cy56Yqfxn4vMF5gewd4J85H9RhtrD5",
  "key28": "5BSQHTpZg3NXayJDnDYaVv3N4T2T2MWSP9dALX78dE6PfwfRgZMgTca3PQ94T65j4cGG7WmUZaQPLZhNQ7B9xWtd",
  "key29": "56JqsTosQA5kJQkdrRTVsYi2TGepeaxtkpZYiQskoosQhrfN8hXSgEsTZSH5pLgigyRAvAB4H4g9AvhW44jeGkEo",
  "key30": "RN9WJcwErmAW8Fvz5URdz22juWvC6xUmPwU9LycbKPK3Rq6ci4BhFbkZETSVX7GD598GbTahQLrjaaA9DxkAH2h",
  "key31": "44ogBjVwKMWeKWRjgb2meti4UXYSsXPt7r6upoyphNNykDbZbiZSjBYr1esswJZKMorhN2Tb88FXooHULrEbGaW5",
  "key32": "AdHdxBvMM2SubYfvQkFbws4DDDgoL8g1CeuAthrLsiEHURvvcK7hY22H48fPjr3cr72sDVai16HTy6eF7bqHafR"
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
