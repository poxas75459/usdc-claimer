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
    "3nWk9hAj5AoM7GKUXWa8AdCSTWtF8wn8Qeo34HcrykeRWZ6ZeM9N1oiNkU9xc1brz6D8d7ewzhsB1CCvrE4PsyFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EFMAP9kakuoGTB91uNBA3sG7jTN52Mppt1QoUyp7r7bZmqPxk8kcTNTZj4L1XRccKpVc3493TrD1GkR2hDmH4wB",
  "key1": "3WwgpfkuyUpBSvYqNDDGizKftc9AgA9yRCwEp1H86SS1MPgZrnAojzviTzZpJfVBHcyFbyaYJ4xgSqbPgxtb3vBc",
  "key2": "54wFGEpdAd6GcisxK5pvbMhXEWYr6fUpppiK9x5yvg31BBFfzCS9PgNnZXE91wh4LEbvFAeXNd6S62KZmemRQCJP",
  "key3": "3mPH4Etgszqoc2TLhCrwJvK6fNrPfPghcou82RJsTDdUNiKjkpKobUQt4Y6afJHGqAfRtYTkUus8VteZ1gndPAz8",
  "key4": "3ES9AXacqxHHoUToCsfLnQJnWGBxYDvgowv8aydHPsqv6tPXkfwzdqo49BkjKqAFVigKJR5kVgzjSSW52rqNfQmN",
  "key5": "4EBrccXbNmPaeiMSyuFdnAZ4ciEz8PJbFHmeXKNaYsxW9kCHybCE8HFkNXLT8sBHejgZiDqj542bCvYm4r886zsh",
  "key6": "4KykfvMc7u51aYg1FKWFYk6nJgdKV6pAgu9QCkMoX1uUyLjmz7AFaq62wYzVtQQtNtXpkvFbv9iNQy7f4XEFwKqn",
  "key7": "2UrEDkLvgqpXybdbDeP8yVeXCdTdoeCEWHhTpHaQmrZt16wEhZfX22CZmADFFrfgicCEayGRhgWcsS9dSaM9zKTu",
  "key8": "rWDWB34nwXrY1vp1ZUfU9GuoZKYTsT8GJQWUt3wsVwv45E5v2Ky4Ue3f1hNWTae7Lz5QAdNAegPNmCoFBPjspac",
  "key9": "4wNYvkRQawTe7VR1xc1PWfWTzQFnd5WznmjVX9ykG3ykgvFBbYbHXoj8wK4UHARQN9yD1HjQiF8MBTka5vw52d65",
  "key10": "4PzrGdQEagf4Tuvajo9wB8SB9vwttYX9FK2V1pcvvtC2HAH2WQb3yUFE9cKcvMxnwA4CdcWqnBfN3wWokN3fr3a3",
  "key11": "3Z4vCzX5tqJF12fnexwdU27wczN6UwCk93AA2qux38cnBtn3fXzWR7JSiENuvAHWm4AUhVDzHMjAPxJUY4wWJ56g",
  "key12": "um4jbUsccopDzwS5hPztmP7S2ym9RrSGGkwq5rxnJ2Nzex7bb7RAstFgadmFYsegXNHja35wJfyApJwjz6uzUoC",
  "key13": "4YiucNKsMzCZVcuy22FWrefg6eNR6TiD9sk2q5iqRidQbKQNcNXsNMoSAbZP1SwEPC71aos1w6xnRXUmLZxH3MxQ",
  "key14": "2MqT2d6rYFqpqf2EpHmsmwwXbHwgtDZdzGSuSvPPGug2qkEkZMj3CaDaLDZqGyxUwEU5o4W8BVQW9rmfETHq8tCA",
  "key15": "2qk4sq4gvGLSHKoNoK6L553BdXKoW2tuK8H51PLDjHpRPz1V9DT9HXyDG2vSJZJHHxQyYmgr6dBS3jj4qUEtepsw",
  "key16": "4LhcXDegNRzdHDdCKCrhMgzZxgvU4PmYAS2UvEX8aF8zpsxm7L5ARsxTXMZgHyvzum6f8ycVLvPEcBiuUxu2kZmD",
  "key17": "PW6acqFsAzwbMysE7zXRWNy9VpVzSjg5jpSUR15bxLY33tXy7smHHBqEPKxaDsPdHYbzcTzWoyDzFtiHfMWccMi",
  "key18": "2TSFaFkYRTx8F8tNB2kMqXCdmq6m9NHk2NxDTBMASotxvZTTKmCKNNwroewRxnMAZ1QUxjKsxgeiN85F414GDwKX",
  "key19": "2DpFhLGTPi5WoQAu3CY7onexnzdNFLpiV3aGLqpSjrZBNEW5SJtgDLWG5K2MyDj3oJ7gvX9HFo8W79fN1kxh57DF",
  "key20": "5zpbLYzaosvDMTc9TtCiBu9ysyczpPNUh1HArGDWb5HFTatyD7emaXtPza1epLYAex13mjt6rPKCC4kM52Fuwy7P",
  "key21": "42QcYzFWNAvjidQUqWcakgeraNYzaGS6Mutm3kas3w6rhroCyyVv8fZ4DgYPhUqkqCayxMiHjTvVrTbsicSdHYi9",
  "key22": "XchF5SXzTrn4n7g5uRhbvrQQxGaF3DDFvHHs55XuKTnsCY3zNN7Ewe9bJmX4WZvLqKHSVRJNnpMYGidyWcqQCCx",
  "key23": "VCxjdQvfaC3mACqQDt6tGxH3MV7CAAek2pnvv4rkPDj69ymBerdEwfsTm2rFPDvSWLzd5NBGNzNhTbG16PMmbGv",
  "key24": "4W8F7Gakb7WUaKMD9tBiiwsMVhhCx1BEHZTdDmqKwBHcvgf1dZ42eiJ4ttG21BJUmSjakFE5PdHPM4YwjN8vPNXz",
  "key25": "3UsAzi5KFyZukQRuZrcivdUWsSCdU6nmnXpQ8DrqcV9zRe4eYGmuU6Zxs8WjyixsKgtzzNRR7gy9etCAGgEaSynN",
  "key26": "3m2ubsQM87iGSS6RTE844BCGiCe7KvJdaV8wWVpA5ojefgcLtE8Y3KA19mZ4cRE611ojsQ3Qh81rLP2s28jv3N39",
  "key27": "34fum4Qu2kHDC7aZKqJ44UtjLe4K9Mx9x6QfUAiXWyvY2VqNck7y76qfZ2LcX99bVP6zdtZqyXDCU5wxxVR8CRde"
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
