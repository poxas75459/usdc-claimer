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
    "54RLGx5pNHhN5tWjn1Tz8YaaSLMmHWuK93hC6bLzsAF5w96atYdYPvVXeB6PanMyzz4YEmjGqqXaLo77362nQm3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ek4ZMYHTekX5kQVjuMab9FeNt7KNxJ7SB4fAMhkZxvbvfbNk7yeLfuu6kjQewfv8ZNcWsiSk1p3ZSMJKqasprNU",
  "key1": "3ZUrfRLRhU6jRJeRybzycmLTVwsqNcrHSxrfp5QDiNGkdoi8fXG94NLY4WaRri3q2d7tiJkkM75pKJExK6yeLJeF",
  "key2": "5u5wLYJkXMkHMY3gPpANjCrnUE7wQsvK8ntiaYMpk2HrZVFtb9morT7sF6ZZZVNyRxGK1549RuciLjZ5KEBuYisx",
  "key3": "3u8ZoeXVojrAMXTctSzVF2MWSeWYumfYvW72Q5dJyCw86AvbA8ZyTLL2iRk3XhEeEZQEg7K3NUrHj3WcCpS9bTeC",
  "key4": "5RhgS8omhSEP3Y76iLaks3B9AHKn32GP2PtRVw99NGyfRo53A8v1R5SjUS68ckapfNZryw8VLLBJ69uJhD66MNhc",
  "key5": "4SU5mwB2KdomJKtVc5mUMw38thTVwEHM3vFmkyV4B7YuR973dcFtbHw6aiSoPNMNbBG1f6osc2N2T39BJtPYnQWB",
  "key6": "2WVzQKLBu773PPvGDFgPcDLUaPSBGpdxoTQmSocrNgp29mUn5zw7QhykHoDkChsB4efDP6RzXoceVdinXsoCFKof",
  "key7": "3hVnYa5xfLicPCrCwhhYLnHuFPsEA9t8R8qpVgMMyhTEZS4PxBsCUve7ho57gMSh3Lc4vVjreWYoomGawoUSHc3B",
  "key8": "2dj7trXKjGy2yTMCvuEgdvaeCTairjqahnTtYETWpZo6YGTNsqxFxizCrZfmR1rwydTZ9u9hEGdyXSEJTMQga1BF",
  "key9": "2iHHwDj3UTC8E42Kvinvy9Wojkzsbdaq4WjjiFRyvQok1HH1WM3xCoEnaakYJousXUZWNzDe7KzPoxM7UVWtv2Yi",
  "key10": "3Pe28uMvnViHtp7P22BryP5vo4rZjpvaBfft499hHQDQtVBpaLo6BD4YdgjqdE7z55RV9rNvhPMEo1qx7A2qbByn",
  "key11": "2R2biyhtffVQmDp9NX9pRidYQudMueUFsydLZxLKt9UEqFxxyhWtBgkFWv9WgumwDPULZgddQKunQpzxpZDEx8nA",
  "key12": "59RbPLE6Z4NdFhBVNcW8QFk4x852XBad5GeYSW49xpG7FEGdKBAiNGAqkeqfft3vNMeiQU63ZHfLXoig4HbFiRqi",
  "key13": "4b1U5HZgVNsPYNBZkjx6HdKFbftd5aYmsg6FJVfgAqZFiDJMTPCCoN5AMYQAX2V8T9PX6b46nrN3fmGQQqJhdHdb",
  "key14": "4hFyrbeBTQQnDU2HMHxXVtmuN34WZufwgm9pqfeeKtsr5aWSB7xFiBKDBqA5fcPsnMrYsakAxeYXwXbX7KBUexxy",
  "key15": "5WW568BFRG7bXo7v8xjWfTjDQepmL4L38KwVZ5XyAPqBnXoLfcSVBHCNRyc4PqU4NPimgJV3di7j3RT2ZMxpWUS8",
  "key16": "562araCRjVqaWR8NuvQyFjcVY8Fa44XUzJUDZA5iKuW89C7uiuCqUPSt8C1X9g8mhYQPAtDpSUAFU9nCPrf7J5fC",
  "key17": "3ust2H63QWSQ1CLEQwob6EBWVvH69SwdC7zPGGGRRM2EmW2YtLoJLBvBTWUCnUs5SApv98GbDvTcxce3o4tPczmV",
  "key18": "3HEm6XbuVdF9zTbHqscxJpQFG5TiZq9BBsrm4xmZsBdEL571YsHGBg2jnhg3LVJt8joaFeTroZFPMX2UnwW2EdvK",
  "key19": "53dshtySBdkPtLNtqJhynnDdgw61kZjBCqbF6GQ8PzoQP4njSyUsposxHdUfEFszsEBtRfQ6pzySyKttAg8XZuLk",
  "key20": "ibbAZbA9gCi98czgQA8J1LDgmLnsAgPUQqbQtwZWdjBnbn5piqJ5foAUE718H1xS5xSW5vYAYybqsVyR2Ni6bGw",
  "key21": "TPXzGJ1xMmQD7FuEwkVpJXLhJF589GsWzhZRd6z4oYmP8uWBeeJ9JZCxvsamLc2p7LE33BfCCAioiPkZinMzE9a",
  "key22": "2cgoBf9fx9q7NRfmJi1Tn3QPZg6uaBK8Z5gE4NChrrwXSRg7CyDUi2CL8xdYmfrg6aBDbdE6Aavcp7qSzWR7vHhb",
  "key23": "3LK39eLy8pZuyGusX9UNs6Nii1X5EHzt881wHKCSftehrBTLgB6MbwxEoMVGT1rE9WY3XF3MW2sXdBrBtYAcHgk9",
  "key24": "2MGGtwFkoYzhXqnxSktAJQUBSwq31S1XJ1ZCgibSAACRN7EC2EiMp9VFTwci4mrJwArsVp9HFAPM7KV3BChXCAY",
  "key25": "4F126V4P78Jt4C8EsG5uuUEieHtBDZYj5YTvPN9LqWt4T8iCSaU6Uka57ZpLiopG1ht6g74MSLshZqRugyxq2A42",
  "key26": "2zm7R5XxZkTuSen5JeRH6vphm6SuwPvRgLknP1HssGkNNDSPM12NNLGUNDQh76Tiy7Mf6wCm45ZUHAV3ieyLd7Cy",
  "key27": "5fZcKZrmp4ELiopc8hEC4kX8KYrFiWHcy2YjHSCcBEnTHj86FswUNicazyTFcptbS6iW2UoiT8F7vgnA2XYfb34F",
  "key28": "2L2ewi5DpRDJwDP8jaKh2ACYMznPmAk8EK6zS5Y6aPeW6weKZaMRCuZ7H36jMdS4s5EQr9inuVienmKxfTcVy5sx",
  "key29": "4Rwc9CFTLxVkBhicc3RMvZsgZXo7SLhWKP91sqP6q5XicX71s2MWp51nhmHKDiD1c9xubRdLsoenED8Ew7URxmgZ",
  "key30": "4AikNL9iqgCNGiwtU6Jf8rSTgkTe9obvz6XNWD74W2aoVg1b6JKKF5hrAe9ZM4gu6CzatSSJLEm1T7NwciB9hohg",
  "key31": "4ijJDmoy9AAAnGm3A4oVZEVDKEfzeMTC2cWFL8YWkHAqwFre1M4xPNxXkVU38M373nqG21hEo2Dg2B9enU8Zm1Q8",
  "key32": "5siYq28gooZwuteUYNyGULsCT4aRXpetPTZknYmKPFdHPkMkE8etPzDZn2tKjkd4U3EqTVEML3gqZ9LP9iNGPceS",
  "key33": "2xY7q9guEi6uMASrYECD7UJKYBCJxnm9MCTW7VfswzpgUQypaGheFV5JY3HDorfMtc9hzbkjrtiBuZqPcuJaHkps",
  "key34": "53iViQLUBLqVK9bSriPhbMNm194vLs8V5d5wAjWaAm8HvsVm64b3pdMKJZ4cx6hrx2gpmtwuCgmRQfEd8jPWGesJ",
  "key35": "5HQWd7jgzDuqihaGy88V8UgXNJ5Z6ncpANXmjsu4ySQy3JTyiKuSZuJ2tqS3piknvwaa3oESTw45uMybxFwZxpAW",
  "key36": "45CvLXEkmsXCn4MgXq6fCkBT7vpeYjYmUNK79a44aH55zvrULufVsoGd3vxj4GSRs5tkcjN1ckqDicZW8kKMt9TN",
  "key37": "4ryy7G7UkSAo7a6X5kPWrAqNTfuYRN21tY8uKWa2LoqPys11kRA7TDcd1KYx7545EA9Eg2HXmH8ZLoCuyNpuSuuM",
  "key38": "2NMvG4pyfw6Gp2fzC2iqYCeG2gsgutSYUyPLRcZMKjdadWrK96PQwDNtFNQ5ivnBfuGo6hM9eZn9ZsKJa1UTqQr4",
  "key39": "4fBGyX8xUrsCuBMJCcSTACBt1hfA3SVpahvEmn86LHKWvVyY9SZvP3L8LXADpZVmVfLdL3Hx2dTySrUmMPTSDAFS"
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
