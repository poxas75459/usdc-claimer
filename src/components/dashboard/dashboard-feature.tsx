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
    "41vkq7tEqCTuTaXLRKfD8i76dUbkChUXQiMcJMCEFJ4fnRrRYzrdfjUYrND59yWLhtmsKWjXJZBCbsAHfaVWF2tR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zaUQ2jbdPrsV2p442ua9kGPZfvRKNoWPPhQbhiACjrTuu5DvR67dpAv2wMmwkCkRyBm7fvk5esET6QkSJY4SHwc",
  "key1": "4TqNP3F6jxoUWnMqy1vxYWpiiBfFMrauQGPAR6ELABiwqZrTQQJST4J1HEbwXNQeTgvx9aBFQ4AchyWo9oUzB3sj",
  "key2": "5fBUmTBGwornahoDKJ3XCQ3TEBdrguomDvgrYMdg2d3emvZsxqLdFdTqMdCVszkuUb1jZQkhHYo5mqZX3LsCz9Pn",
  "key3": "2MsZCZYCgbenvkFnKusEZ7wCTKp7ujU8rwbBSof1qDXqGBDCxEZc4jAgZyQUrC2JSzPfTsmCxgaBns57Dj9fCkSf",
  "key4": "3ds4AL9ZCpMaXrs6375Sthg1LXjbL7cjkQjdRN1kfwtvYM6EVtB2QT6hWSFpeoHL46eH8qBxbmeRvPBjgW4R2Dp4",
  "key5": "4HabkuL4tkruwpme8M37KTvJGq3vMHNLKmtvQGBSie3xVF2UdWLZ3Y5cwue5cCfQCd3HTZm1CvDEShiSd4JU3oS3",
  "key6": "2vZnG3p28yW7sa9DvDKBsocxD4HqbsyrojLxngNwg7HgtoWYNNMvfvYCQ2Fquj14TPcfswo3aBS89KKe2xceF6uF",
  "key7": "5RPJ1i7iusHua19m9NNb7mmkChqHfLG1Gpp4LQGixa2HDiZtvkn2Cbfofn51rpfkhB2xhmPCBSL3fPRCFxzH7nrg",
  "key8": "2XRUqx35XX6KQgiCJfuu2jL9nVyfG1ccteqdrfesE1NboroLQzQMpXJ553NzENbG3MyJVXfqUUy7V5dtKrB4it3n",
  "key9": "3P63cgpkbNHxPR4cetqfDEk7CKqdojQc7SFG6tqDz8mDTBhRuxr4DVrct5UfSXAUu1TA2CPFyFcm7Z8QKhQzhPuc",
  "key10": "4QNwbu5XSfyQXBX6mtDvBWFVf6pNbMALumCg3A3u17SLvHhKaCxm7NYW4ugFghfHEu6NnhMdE2ct5Hp7FGW4iHEu",
  "key11": "5VyX1cb79RM1oG9yF4GmCG2L9Qy8mBdcCZFjk8ZUqgLVxNUg7t2FChRmG34fzSk8TXTHR68QU5Kj75igWYCzNXCF",
  "key12": "Z9bXsqhwfz3LBCkmxkmUDXusZ76Qki2aayurVaaKiJW6qFmrapDJj4Su7BZkASP1hrTK1izi7VyaZPuYd1uSxSM",
  "key13": "xgmCWGPkKVJR4Lw999FmoxBCkqSawaqrC6Nyrp4KwF7KpmvjohFjf7xPKdYqYVVaQhxPYrdjJh2S9P819Nsywc6",
  "key14": "5tbqSCcM1sNRevuw24SkUuYMVU1tPHgN8Wrqud81n2pSriHqJ47ZR3bfw5dnTrwtWQSJdjQEuQzCCJthYgePybpT",
  "key15": "3NJqcQiGW4oa8SrkwW8DUHXsU6nHVJJsMj5HWZSj2Kgtn6yvdBmCrgs3HUy6v9SmriLqBeymvk7y1kA4A4jvN31k",
  "key16": "57HjPcNYmpHaPScza6vE1WoXsoPVro8LbWHATkSBwMYUDgAyTeupRnPoJAvCTN9XGwttWLwJWLMk8XXxqmo8LENq",
  "key17": "22MMBwgbuECVcsBTGutVxUAhfL7q2prcK7gUBozqkKTCDvdwbwE91qMFpXjnLhmReRWHfFRp8D5hDQXRh7jJy6Xa",
  "key18": "4HA4oz9ineYRcDMrMoUM1LSojNB1Y1osUrXwNJ6vZe7JUhLnDuSXhsAMvzeJASFaRVuwgJdeZtjoknLLrtXUKGoj",
  "key19": "3iA7DAKvF3iXCcEb8yn1yR7bPG95vsUcLRfPwbQiy43fvEGTp3RhLHygo8o2zcddTmkfWH4Yf8GAN3cwsQ3gX4Yb",
  "key20": "5Yhn7UDwoh4DuS5tuKVY9gvhtHjgdBeZxWRnnh7kTnLCw5hRqBc9UEZqXc4Af5jRL8dKaYEiZMA6RiXrpZsa7JNY",
  "key21": "5XdJziQKipjSdF9oQV4vgnwBmXQfBJpyCfkBmPJRQ6ZuLfG9iFjxpMDpbWPviQrfYjYpviE73i2B1xGawy5cE368",
  "key22": "2272uGP7YThSZNymC9BqdFAqoB6PGe6wfrWDhMB2VDf5BEJhjV9BJhG23jMhh1oy1yFDz9bXKayUvhQEJDouQu8P",
  "key23": "5TU6VsWBdLcAWNTFHBAnJzwGwf4Y3yQBk67AqU8Kege7PmXqL5172MpTPN6NRFM7Emu8nJp4wXk5afFpFtZE5EK4",
  "key24": "4bgjgbkmaV1s8D5YaYCRC9XbJ2GMoE9iKbUSXBRxVZbyxLJgMfbk6K7joHvCMDcyHWS7hKkk2UxSZvwkq8G6GtMr",
  "key25": "5bs3dkykuAvNmkxjpvztEyfC2iZdt1AM7X8EvXjuL6gQ3omPCPm7KrS2oj9Kx7PWeeAcNnDRy3weMPwf7vhz845W",
  "key26": "3RWnyMaCAQ2XRCVL9zYfAE2VVuifAxo6sL6XqukLhFcBB55pyU9nrWdfAFP6W4tmvkvAFGmuD3UoK1eLFLBzN83a",
  "key27": "46renC4kgdxoEN3i8XrKheJTVtFdmAYgETgiMZV8XAtq1D5tvvswFACaHBocuCeyrhwecB4UcrQXVftmpmsyupCp",
  "key28": "2bAJymvLqK6bhxjKZuPA6kA3jnPqzDASr9zEy4QkjH8DdwfSfms6o5bwKi3DAHRMPvCpqvRW4g5vUjQkgV7v7AHm",
  "key29": "iQaZ2jhYeLWdirK2wgUADjDNxJ6dSeKD9KyTB3PKjBhofwcaTQq4cKeY7fnzoeeupcsxWLKGJ1Ged5d9bNkrp8t"
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
