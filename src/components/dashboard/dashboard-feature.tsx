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
    "4EcbMkXjAoV8u8Kus8rGwRmZpWHKe74139NocmtyunvM7SAGLcNiktiEmN5m4zF44gbJLmQwTtKn9k2PXRJUgRe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQrexPKGfyTyfZcve8vuPcBNXPmAXNiZDYP5cCQX7ySKn4Krt6GN61oGVSyvp2JMSRQ3nY8Wcc6EAzPDWGeFFCG",
  "key1": "3ZA3YhL97oS6admTK5f5HJhhnVwVxZwwxmrVHaE4Wpn3HnJHD54KY9zvo5gouNvsd95MtZ82ttjFb45fhxkbvUHi",
  "key2": "3Tvo3yjRwgQCj7BqBcgXg2wCfXwRqcEm33zW4eaBuK9YNGXcJpKafFdyp9czA3jvNPV7J4oU5ibt1jejKjn7g6UD",
  "key3": "5iYGyu55wM2Q4pkbeAoVsRHmNGv31fRwfgjDCRiuy5i3eNp1QKK3K8DyUPmVu6aeGLGCZYCDCRCCQUm6zeUtkz4u",
  "key4": "bpaakrE96hsH8PtF7cL2fQ9jjT3Ruo29xb1X5NHbQahFq25vfsjMtrVN1E3KyFNTs4htAxBeVGkoE18hyFrc9ij",
  "key5": "3Sh8yxoJZ3kqKXik2bocZZkWUXzjPM1XTcuByvVkoKnxxFMtSCv7YVVKDHgQeuzQmH3MxTYd8m7yTRaMTvf5rSLD",
  "key6": "4ctF8T8APjEtiJ7YSVz4RHGS4QTjprfCp6tcbiTEgQmA7twHu6oYTmDhihKt5xPa9ieuGiBZdeS5c94fub6x7cQv",
  "key7": "2NRtdZUGoGeQzSkcq8HaZKYAbPwBRMRsvC6Rz74spxv8USYTHK9XynvCjsriqmobnHdp2ubdmK6SMmeJu6r6doo5",
  "key8": "2HQNY4yBYKmh5B5u4LxYaMmWfjCpWXRCtZv4JAr7kH7i7kevsfardviRZE2ZNp7Fo7NHxwbtoPH59q4iTDnL5HHQ",
  "key9": "2CnJdJ3H2rsGaxmfVCwCUP28yKsfS39E1DhGecyiZPn6G3GFdQ7rUQEwRkYvD58ocR1x6naMSM1KRUJ1WJ3hihqG",
  "key10": "4njkgFfVK6nJpgJNdWcTqp3Gy1As5V4wxj7KFtEks4a6bVbvcFevYNzz3qoR2aDB9hpsZqiDLr9tj5LvPAdSqhKd",
  "key11": "2wXwWiE5tWSLG5swD5eL3pKVWCyScijTmnLR37gqx7z9Ksj2qEiEqLoLHkj9rRgb8NuKQbCKV6V3sXgyESWtYBqu",
  "key12": "3m9Tz4qPj6hPo2NooT3FmQtbYUa7KhrA8eqojx5ABiGzs77whbZL9CuQMemHp1iXLEhEHetGcQ8F5FUwx9bA7zXd",
  "key13": "2md9RcANm3p5Cvuv9SUxcYnQjUVyaQMQBmav6VBxpeC7irERt4kntzn7ojaSXzqyBMXzsnAYFmFRQK2ThyqXRKVc",
  "key14": "2oWK5toPK8i3taJxY1q6yKiMCwZirbuC35jYQYvh5CZYQcp3k42HrWc6zzYTF5cFdN8wZSdDBiF5cD21L9aZCDcW",
  "key15": "3ELbkR3nV8CGWmwZyE86C1ayc7ZTDx7vXH6rkLXxDPGA23FdWLjQ2jLpQZvPjNLyc2ESbDFXPDm6G4dLFKosNMNz",
  "key16": "KgfXKZGRXViFPNyNPHuuQEMc8TxRRTHTmfZtfzt5UWREozx1VHZzAY2C3YNPfdqTzvUvLbcMupvLuuBcETkziNK",
  "key17": "4Ndm5kxDdp9o7MG2nQ5zzvJfx5yntEsEN8Na9n2RhyZRpgqrR6FTz9FXeQVfCWhAev3DanT1BYULdLHoUGndevqr",
  "key18": "2G8WSSX8Tub7MWpMmTRYE56NAUYQFpUWJq3XNGq8hwaBRnM22mzZ8H7xFB71iKcLBTuuUgAnmHYxtdoD3vHxZ8T3",
  "key19": "2RX4WLYQXPbVcaP5AK8BBBhc5b3QxTtDLmTze9KWWoE6ftoZsjiMJTFn1TPu3BhWLqG5rpFedNNyDDtNG5K3uk1H",
  "key20": "2XoKk4QPyGVPZZdhS6nPcAqNrdNpSXyboEXBeae3U9AvqLK9yqsythZHzY5bFEuCMhSfcBqUXWd4fseQNAWLQXCs",
  "key21": "4EbX8cT7irtrsg3ME9tLJVHR3RLnz3RDDuz6Hitft3SkjViwuR5tHoXso4kcoP3natCA7Ge7otpMkhoqmaktf8Xs",
  "key22": "47WQ9ngnipGrm61mGAZfeZELgiRZgGQE3nr6RoQjkxF7mx2Qy7ynr6ZyaDjQgK5sC7tHTmpa5t6tNosk3sia5zcy",
  "key23": "3VmoKYDUqkJwmQhFTbLGspCJvSujNDjYboq5x5zM95wzTKz2u4pm5eSZkPTx3EzDUhTwTvxKDC8LvBCnsLgVf2vx",
  "key24": "4o9E4Tpuxm9rtQsNhJmfFG7mttj7jAqNmVRx7XHh3WZHAAm1kBE9M95LJX1MphgsJ265GfYUXbfS9K17PLMs7q9A",
  "key25": "4RySnMrz7B4sLy8CxoEt7rx89ZBqF4oYzNq5YUka7JYB7S2Qt9VzoaMKiQHdYfhg7EgBxWkdJPJ9BWsmzYC2zkcV",
  "key26": "4RnYWi3agwuniTeHigwZLcPjL1sGs3gSemQLbmLNfrtoGMpjVKiG3xk6gavDdLNDW4eWcn839A4uAivfy9K5YtsB",
  "key27": "3UDtNTm5TzG9UosCa6QZ1wsEAEQk58foNqYfSAr5vLv2oX8Q5AjQqLaiyyTnWMyVh6DC2Ugsk9aNKbrEC6JvxFxh",
  "key28": "4M7cDaj91MqCX6YJFmi9knCx7u3k9RhqZdbnxXMoPUTMc3JEgSx76M5TFU3vbC9vZuk6oKpVSdsLEx52BW65XmaP",
  "key29": "2gZ2V5DJfwq2zQfeFSwsZhBAPuYUh6Hv87Jqmy5VvVunr7YmVautP5co6DNFsKK3EAS4o89AGTDKadF4qx6FEQiE",
  "key30": "3vFHPbF1KfQqKbt5hyPA4c3PtUsCiyc7UsTXuNEteUAe5Vbb4kmNMeUzMwrixKtzXKXjhVyu32Rb6CbW5JTnXTeL",
  "key31": "5igEgNo2yxLQTY9c4uf5GuM3owbS5irj51u1ms3iMKvBC2dRtnm9zXhyjBtKv5UHY6t6MsByY2ySPDaF4HYjpZZF",
  "key32": "3eEqYCMr3TeoQscRE3zsEcsAoQUJpPWcrn8NcgTUPJeoVqCFUYKUyWaAQ3p4NLzBamAhvFmk2YBA5iSuYN8DF1fr",
  "key33": "EejBALcwXibv3ufXyEfVSJgdfk9oKCm5ZByiFq4rZ8RPXQAXbFXfpoEK38GxZCE2Yu9jvnv9Hr2jVwUWXqHq2ZE",
  "key34": "2xNxHT6PKY8Ytp9aNs93BtLwWWd4RyVSBGd559TLw7ftLfB6KwhbFD2ZZ6cNL755cWGUVotTJ5zadFgVwPtarP1g",
  "key35": "5GVDPVhi8tLwKss7pNxwa4E2j5NDYgENzVJ2ScAxd81H2P1Z8WMvEUrNbPtug6P3gnUNDurPPqq8DKxeJeECU2wU",
  "key36": "S1Buqq2N2dg6u7pmThcJdruDahok7sCRgy1AXcH2J66RoXMMCu4Qw1BhVHZHfViohjF6P6YS3VdragAdmCBbR6F",
  "key37": "4W8nve1r39ZQzwnqbYX2ydRmqvZhECJRMeLB34FRJvtAkKNbLgbePAiWi1ufZJzfsoX1bEwvGg7jJtcpGBBDGeEu",
  "key38": "3rWe7c9eX2omvahT5WNZpZ87FqhbThdpFFV36WNpGKnMAhyAeRwrH42P1EmgADSzXcHGvnm1ARbpdxXwD5NvjVkp",
  "key39": "3nR3mS1xB6RyjmjFfcejQjM5Qfb29JbX3zbRdPwdCpTPKC8Mwg7r9DommCfFtQwr3gR8rab78kc1fX1BnWvaEHsF",
  "key40": "2PArQ8SLjYu7XwUYwR4eYqKHQTFVbN94AtwnuRXHEjx3aeGuycxZFVRPtsPzpVotNxiYaUebnC8niViguwMpM1mg",
  "key41": "34vNKeiZF6HbtAnwCoQAY3or7k6e5enAtypi3v2n7HHFmQCwsyTCGFM7W6vmFbYRYAWuXSZbe9BvPFLSxiHwMQSc",
  "key42": "5j6b97ponJm1Xz9voo8U4rFFtFdhFFvVR779Qu58LVNLsyUAikG1fAJussfw7bzPrBDhsAWn6hqusP25v6aJvcGC",
  "key43": "4dYtrDW51FqsZq8bN8GVFD1eobHSnms2js33vbn6qi1JWbKnW8pqBDEx1mawhC4N7T1KGeXzTpvEreWhkKoFcFuD",
  "key44": "28iSD5EVpwB2k7d8o51Qeewi2KghATzegH8TggMpUkN6oBzHrad6qW2XJ2QKvvKVahJRr8Ju5c4ETGfYQ2WYXtVy",
  "key45": "3LpGNTeYWwsUsPoa6RvBLh17gx4XKwkC5qfNxFc5rpxR5a7apN9izud1Lv3eXofjaMTzvtniYW3GHERpgUTpgUtX",
  "key46": "4Yf9f2datqQWKfVvqTW2gYJgcsnxNcXddc48ZkTZvYBq4tSfzpW7hgGcnznN9BXAq6gndmRNurPa1PbHnCNiBubJ"
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
