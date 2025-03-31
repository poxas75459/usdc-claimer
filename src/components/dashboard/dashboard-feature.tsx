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
    "3o1J8xNSrMi1jswm98XnWx8FigPbb1kPhk35gya62FckZ7gyEWbGk6NKFKakfKLAzyLhof5edJK9rvaT9ZF2kokv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pLVenpRTGAEy2duzTusDuKWFS9X1WsrCrYXNXAz5bYxWoRupgorYxrzSRPXHk6e9E8gBoGpG1MkeGNgkmdZ2sgW",
  "key1": "4CShpftwhCXJ9uhfvxNj5aq5EzAUasTREYdJwLTJdcJHnZDE9K1tjC7ECf9ywRShWzQz8246ogGzpuG3j3JgrurK",
  "key2": "3DHSyPRGa4eh5gbzN5PodxSxizCAjbNJuFdBo29zYnCUCvNGwdtqZBpgucJvPyckX2eoW8ams7Tfc1jpjBcgJxoB",
  "key3": "2qEwfkHoodT79arvsMH8iosgh6EVQY8kN2jdnL9hdbLnp3Jxznv4AmYzHT3jHHMULjqKnrryeA53vyaK5svYmmvH",
  "key4": "6YEwvvoRKdLLpL3YLVeS9Xmmxmz8zsipGP5VLkx8YyvwbPzaDwTjpKmG2RmAniMPB1kSt4i8Wwi2e2a76LeNunK",
  "key5": "bdnPo1XmMSwD33jHXVaXG2xL1z3wyUHrjfXT1vf1aKhbseMpDkT4suRSqhb7D2uxk15ri5hqRmyY4VYtKWAbcAS",
  "key6": "37gNgzHNfkk5get9F4H4K8TDoyFDMJK3QMcTQBUXGMuGjC8vpBvf8SCxQjsd2v6Agjr9fvMeEmtatcVhLvfqf2NW",
  "key7": "65BSRYnYuFgVQcjwPux8BdBFXLhEeFxhTi3QXVGmZdP3CPff4QYEhfhTVjKHjvmphUZXbeG8QLrnDUaCCT8WQJfr",
  "key8": "4a56ScEZ2b3pHSDNKvoub7ZMqprJqvnofHrW1TuzJgqgjnhUPXiD2fNKrYBwcLWM8y4ifcvrLqSwfuzKQ3VTUA86",
  "key9": "3RC6XpnnJ4ZzhHJV2uHvEfURcyjkEovJ3B4VdURYCvUFP61yEmbQMpvJLr98n5eWxrWeDRKh2BifSHvVdgrH5JQZ",
  "key10": "Yz51VSxSfT5QY7TCQSUi4UaBymBUh1hissHosV3DWiWma8QfMzrqj6HmiQLGRdTrxiWXoyVx5mgZNaVosovhxQP",
  "key11": "3TBB2iShnQknsjQMEhrXY4E9VQFdCDeenauPSvJc9TNWVxwjXEAxUPgh4KTkKEc9PgTukncRwrVkPGakyLSXLM6x",
  "key12": "2k7sqiAu3Pd1u9MdhFa6ePUNYBVBaQNvycDGsbNj1LEQENzWapx3tcZKG5iwnHcB4UcozgDYpmyKyqdcKvX4rnQJ",
  "key13": "2aJaW3FbSncJFzWisK9BRMmzhMjrKdavw45AvkgHVX2W4cdzMKhN5piuzXJDhtXRzAtrSWNZqLsUYfLNtuPpbmZZ",
  "key14": "2GheE7kwVvgoofDUQfJvYrMGNdq37n7QukKfH3gzcop71N7xCctzBZgQkx8dDRZSPeoooxx3bsjEcM5K7563u1MJ",
  "key15": "Zv91icZPFH8Zu5x9A5FeBhjt9NobEcqTiptX9a6uAWVqdSgDjNiogX1arjV9qykTczXBZyGSBUfu1WtURpWXvto",
  "key16": "62oAKKtELMwPqGYRxKU9CmLkbPjm1SufsmPKPLjQjvM6HoiybqfWB6Hj7zs715qKf8jN2SBpWdtc5LVBnKX5CQwj",
  "key17": "5xq41HeynwqeYex5sLfAcevTgbCZ3KsyK6STcXkrCFLQD7MPZewUExthPQmxb3M6c4PapCiQ51bXVRK3RTNig21g",
  "key18": "59MBPTtrqftpxADpySqiJoWUMU4SmMdXENXQKuBUpyrWCvaHWF55uK1DFyAvawvvipGHZ9afCxesBcCDDbcazDR4",
  "key19": "P9iRU3LhTrAcHhgsTxFSGhkNfwkU3VHeHnatGBjDYQLLJuWznwTQWW2PhJmbwkWUMtFimgUqrzrSVLMUbWRSpu1",
  "key20": "2DGSmo83vkvQpFAby3rAtQqWd3tDxCVP1HLBiN3rrTLqr3rrp4XY6EUfEqj63Z13an9XumviQM3MY1Vj1nAxjmKD",
  "key21": "3tMAKd391ia9Cs8YiyMtrcATCys4tQnTub66rnehYVK9aMnsx2eWRSdwjqkFCh1b2Kig6oKWwRd5WEP8vqzP5SLo",
  "key22": "51hWAiB3np4Ve4EjnsjPQ3s3gePnT19fpY2ZMuY7Nt9Zy22whBiFtYbXCJPWkyQvqpvvB2TdkQA81Ei1pYEeSMXu",
  "key23": "5Ge4chCHde6MntdHtPVZ4Hb6X8tyBnTW9yqZEW4tXxX5t74q4KnyBfGWmap9tznnnhpphyZsBgj5mbRwkc7QXXRV",
  "key24": "4RwBPV9BmFqkDxagvLwVNXzmfX4izQyqzYt1LcyuQ9H7SAAaFJviFWbisjNRrbN9fc1W279UDDqRvSN84b5mYJQz",
  "key25": "mpgVRR3j5jBHdb8dhveTv2vsKtLL7Z2kYozFovfdb6v5mgfGx3nmsopY2StxZYDWDzD6hFABfhuga6goJVyGCDz",
  "key26": "4wzVymYB5xG6EtF5PQrjuuR8t5DwN8PgYAw1yWkepV5rH1DYdKqcBgMDyhGfcessvQpCNRb7YagJZQQ6WFz4oAse",
  "key27": "34HBnEoSPrDzRbtTgd1G2nzKj9ko1ks5JrSrseAbzxLmyBBYTZPuiLrqTuYikyV7GDBjRMddgPqvUT2XxGjsrRe2",
  "key28": "EGQzgGhHZZYUjHFUHoYVXypcHEcKgqbJZCCYtUWzZf2BbPF3KTg1uyvv9MHc318vBw6GYvusWP2vsnDeMSsQT8S",
  "key29": "3nzqKA5Yzzr8Gnptc5TUspgS8QijNravdbyGykDtWDE6ZHbTaGip7sobEp72n29dRc94Au3DxwfcX34AAaPN8Z8n",
  "key30": "5Rhjg6ng4KqzaEEF7o5Bu9rbxbgoV3rcHvPn6DtKcBCR9yiHduSjQTbpx3dyds9emhQ5bZ4X2G5JkxxwMqU7waL7",
  "key31": "2AiZpEKD2fmpgdqch4NmMPpCbcNvsQPXH7KigTzEe4VYQ2ZtfMxQStqMEZDV3VQmsWwSfMuYekWaGWAM4jqCsvDJ",
  "key32": "4KeCTuJcjrdkuQsXgo169PM9fjHFZdRgy2xBEf1QfGLhS8Z3DWhqMBDSERCED5iu4ZLYRy9dNVdGjt6J33UMtujW",
  "key33": "46xH1ddtNvdhU1MPSBvzMqdaFj7v9qApD2oNuovkRWcAMwoX8GQEhHbm3zNzcSj5fNey5HyuTLGZSEhB1K1NWg6K",
  "key34": "2RE5Csc2mmP6kHawaofhAK4EGGJTvV2UXiutzEY2jZvjB2ajMQwin9sSqB3jqTZPjEMxv3mWKmbgpysjVimWDpwj",
  "key35": "BjRpcRRkenHUcVKgyYp436X1Vqxwi1esWk5coFm3kZVcNnb8zjgVhaKWzFYBhMBSGwm158T4dA8wpbuFL8gXbXV",
  "key36": "3XRK7Ro8BfvtF58dJ5t1Y9JX6Rkpw6vy3u5vnNgGiusHbLpm8saL76JEHRdFYLJBrGXWwQJAUQQiWWifBk1VasQq",
  "key37": "3AZt4bcfdL6LZwU3s8JNttRU7XDh7M8gmXZL8JJ813Zocj7umGpqJkTxUDbTiFMD482nvErYBVRorpQZxGBrZEAB",
  "key38": "2UwkoKhVubhkvwdhYVNY6RvY1WwEEjP9BjmS7tN2D5Q2W71yzSUtmwEaWScJzuYPqkRqVAPDWSCmSxpxZWjwKWqU"
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
