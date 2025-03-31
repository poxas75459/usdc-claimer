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
    "4a6ZRA88gWQ8fGEcCbHfvMU6xRmFkRB2XuMKHmtY93BzCrSfe1z4cA6gGmmFtWhCMiHtW8J9Q3e1zTQ7K3z8khms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6kzEVXUPhy1HieGmcaVQYTXvB9tWDGb55SMdxC4mt2LQWYK1yqxDzArd4iU1AagnU1pyePq19aiXR6sSgw34f2A",
  "key1": "5MnUHSvmsbiFEBa8pmxHyUat7w5ztj7Y28aCKQw6Tb5KKYhekM5QUJcqAPneBfhyambVuJAeAeTzdhQT4AwdUarU",
  "key2": "4LWMBU2j5XgdWmHWEXXo3fYRbYcmj3PAFdvigfd58GhPgTp6zNvkiWXnrj7KngKLhqHhVRgbh5EaDVTtn8b6PTYE",
  "key3": "557U5MZ877Ji87VdxRBNewbb6xEYMedXVGuYipAaCnzMP64GiL1sSFBdpt6FSUgRcuGuLN8R74xMkhKzMg8RPsRG",
  "key4": "2ZTt8rc9JGQWHRUx8ePyWQjLLNZvvmebjDTKQp3q41bvd2Foa1nuPzV1di5tsnwN9MBmrAVMHxoqkXBNBH2drjGk",
  "key5": "42X4kX1dxYmRtFkoQnVmV9PwaxuwMwtaeV8fKEFyDPH3AybmSaLJAgZJkFmsV3i8YVEcKFYYcpuSz68asCCMaNK1",
  "key6": "26xGvq6fnK6B1FLdc52RTo4QQcaHTt6VqbHGUUH23FjJpaXRiQeLYN5mjjkdnrtAH6Jcomprac5WgmwiGxBCUpbC",
  "key7": "LoM4K2NLH8u5sGEM6AsxcUZ1DNYh14ueJjy2qdMXMFgSSaJTPMrGYKHHjMFXcZRGaxSJrcDxG9BVWD7mQzu4sYR",
  "key8": "47n2s6eamsTGZ2hxpvkuWqka9gE5GnyKnvB2Tf4iUKHq9RVM9ZvunczAVNQ9UQT9vswd4hmWZ9jE9cbEpGM5QCrc",
  "key9": "3upiFDhx79sNqFJwAwt9u5kAvDTKXRMZht9aqGSL98pgxugCpuH9o38aakkTxwPck6nqqoKfP5TdGmvMXFZjMBdx",
  "key10": "4c9u1p1WBBhbokgRyoLCMY36UCPXX5aZTZNjhosZNKz9eEsVzvUVHKp1TZAfmwpHnvKjMCwiLYV56HgNFe95G8rV",
  "key11": "4jJ9PVSkoz749E318LbsP4Lvh7eUJeu6FUhtdyHmBNUy9F6XuygZuhFDddDnAQJzvQ8x6R1LNcC1VLRksGrdsaeJ",
  "key12": "47EQvCkpvEyFi8rTqWbMHfSUHWZH68gK3euVL2hgYDEZkwTgTp3GYjBH5utZEAm2J4ok1SrPKRq18P7D8t9y2LLz",
  "key13": "5jdzDx4yUMVPWxzFFru3ooR9HCmBsWWqmPgrWJr8EQ3ucQTHbdFBAMfEbYjGFdeoDbY9GvG8FkWM2i77vJsFqTgQ",
  "key14": "31fFdQLgsSU2yWrmR1MXihRxkEVawuMK1SD1dSDnnei3W5kR6N8WD6JMCYedqWz72B9BgmWtSmxyv2tZ8DZQxtkb",
  "key15": "21JbMc7ZimZVngPsfqMizodsHYhQXp3xWbfh3zMyUrPonckfaYcg2BSxyGi62CCr3HoRcxVDuStJnFuHnp74RtEX",
  "key16": "bG32PvdPLUoyXz1TpgwZ6hyQTnaKUmS9z64UYpkjTPEgKzx1fJgAxGCqi1BSuKd1d6ZESWtyvSg1uZ6uYN3SUP7",
  "key17": "38jbLjoggXVq51w8dBqckCtW3R2FW4wCFajHQVk7PdhDyQdaPd91Jf5tSKuPFxJ3KzZqbNmfqRLaHvzewbAgzpkx",
  "key18": "3x5pqYtBNueBLW4qhgicyuRCo3dBHEs9phdL33nRAXXozwLZ3mW54YxFKmSFm2wWZnKzKUnMnWFRWsBEHqxrufu8",
  "key19": "5ejDQKj11SYKhb8FDhtYHJJGUUA3k5Fxc8ntVECpAjiAsWV4Nf83pV8vH2gqJxNX1qhkJT4nc7W4xw9Wc8RmqHpD",
  "key20": "5KtYRBKg2ETn3f4Lj9yaYYiXvKcyHuKKtmKYRrdNFeLZcfDkBbNuXxP6jUHFw3qCa4x16U6CKzzjQ8LB62Njq9yq",
  "key21": "3cGPSnLke52NGkqPUiUetFi2DESR3RZUGRiEkF9dU8AcAgGDKyNK8i1Ee2QaTdzMQZ8GtjyRuyfoX1qy8gWQJZst",
  "key22": "5aB5DoVjEucLQEYyYL5TTH3iP2Y3qYGG2dLiE8LZNZadwMjKPYQpacnnDSmWfiG3SzwDToavMJQkFgwX5z76zmUj",
  "key23": "4kCG1Vsyj62Fq89mZs6sHr5GukjnZW1m3Sp5WsEuYzn7Fyd26bTtiPaJ5daeFqerKYVjNAMWjoggzWMMgM2V1L9q",
  "key24": "3D1DmPQH5p3AtvtaUHEw6ndopngJBfQjjqkwidMZ5XPsrtUnG6H48hAa3X9jkfrnZMJduAozWuU2gJ19TpGb22PG",
  "key25": "3GZ2yqGHRXpxNdfMoVVoW81tt2phUkn3DMiTfxhDDXUKZr5Si7WwoU4bR9z887kWkejpNkKMNtuppzeEStsvRr2L",
  "key26": "3vPchaY7jvy7ekWcYnKrqHsY6sDoPhySbP2X1JCWqvnyjuK65SwkAem62nDANa51cypVbgYd1f9CaFQAwNq4hC22",
  "key27": "2YYyE1cDqLuufdxxhovRRzu79jLmxHHJHnXZHH8DuhJ9dAEeKWhU2iprEj1g2ascXcxhbLgSEdEL4RXHrDKUkceF",
  "key28": "4LyWbPF83kHXrjqxMo8kQZaCRaQKffmtgwrkkZ99Hvahx7g6iuFXTwdAyhYnbCTgwZ6wYXKVGhaXad7aKdR5SYGV",
  "key29": "vKa524f6eTgb7dRQrEauJeSnYcpix6RMpR2nj4cyisqFrmnjvbWqm2ftLcZQzuDCzFjC8j9uibRGccABhufifoD",
  "key30": "5wrf25ZMmMt55SY6Rj4ecm3TeqQtQgDP2a3yq3Gtov39UpG2MhyhkXjTn87h8xrGs4YZFs3u9fNxhc7fAj65pPUg",
  "key31": "4jHxxsynRpbJVR5QX4pYPNZFY6VWEeFhuXf8iJ2ksvqXauMZHFy7FpHPAyd3gmjPyuFNe2XvJkoKrgWvd5rZy89e",
  "key32": "4cQTc8Mnq5ef21cChQTdBD9czsmhtsneurtsZSU5tqYmrsvKWjYtJysD3qYiZ9vSfg4opuhVghAT4qgCdzPMmCkt",
  "key33": "1FtiPJW8CQdN67u33ZNe6KVhs3pBkwQT6PrjFG8BQ8utRz4RqYn9Apc9Dr1aqhSf5gcm2LhTy3gvx6Yt4FwXKHp",
  "key34": "3vUsd1RVU1wBrRpw6gWktALcM7dDH8fJqWBSnYP9S35rQhppxRjja4wwWPXNivmjD6o8rauaLsyQdsvfNEoB7ppt",
  "key35": "2ssJC4t9sD1Z7e5PgC8WXYeEAj9azUcMweb11EpHNHGUhC48Fie6A2127nQHDGdjU3wWfvVEhYgBgbqNzbHBXvgE"
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
