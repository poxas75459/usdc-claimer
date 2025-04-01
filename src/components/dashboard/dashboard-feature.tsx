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
    "4n2cb2c2FGuS9eQaS3spxw4Nho56VGt2cuVnL67qoqdQ49zVc2pw7K6C9PkPZp8Fr1GRgBMej14Pt31g9Sq3XvRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xiFjASWWgYHEWBdvFQtvdv9y42GKEknfM4aDVR8tq4cVueWarCNc2jGk44U3EtrLgeS67TyXwFPfzfiGGG89HXt",
  "key1": "4Qb4vs4ncrqkaE2NztE9bhERcHJME6C7u6518kWEFgiUWMHCwxQfQkpHXuGL7UQUQu4hBKemHTxywoH5EpVQhpqa",
  "key2": "2m3r4No77dHH4PB6C5roBCEdyjpxnEkJcfhBc24yKHqYLLhMkRtBfEtD54a3WJymN26G42w2AbxcgkhX15o8VUXE",
  "key3": "4qbNzP1q3JBDxQe58a23mJWrvvSrAV7zXDMWSgEyTR8NfnmtK7ggFvrGqMcdtthS8SHrUZzpWBfB8BJ62kjzJvU",
  "key4": "5mSpCcfqAj37JeNyfyNYCpA5Jn6v62aUT9Yk7eLERMY3u9SmJ43iShSYGWL5cJf6QHZP1mcPgJ7F5342BP68iMM2",
  "key5": "2ca7qTJ4q8VYvY9MsUZdQa3TA44tkvu73Tyhkz1TnmR5NwKCiztKbTiDtFucUuzXYUBimZF2JEJJvC6h82RSXphP",
  "key6": "3RgEnxrLAEwpJnsYiAVT2C6sroATgUCGtmEfnnBaVzmJjopNKsQdgYHDsVmY1MiSjRCRjer13fmyz8SHgUYdSgF9",
  "key7": "5Maaahch4xqhmQxVVyEhDtdFrkK6C9GMsKr3be97rbk2Jm3iF1SsAt5KzgU6hQAabwkxrzWnk9d5i3s8vD9kiop7",
  "key8": "28cKVfEkH3TVgUvmW5jFJS9gU75dxEwTLZnjsZJaUWfMXzAE8NfPkygnZFjduKuAVTqNJa28qaCoLzkqqtjfFG6n",
  "key9": "3yPL7eeEkS9sufb9ogwH8ghD7S4WrDeRGhygHE7k4NrwwTWtsPzwdKL16959fovdAjizpfKMZAp3UhGgHomHKfLw",
  "key10": "4Ava54CiwDiYwmj77AbxmRtRd3AP6hFiMNEvtj2NTTj12ViQrLcxa5hUBP6zYhkuBTZcptrsW7qsX7HTie1DoB2C",
  "key11": "5t1TsGviuvpg1Wzxj5HQ1tJ6bMsUFcZMsHPuhp2cLJgiBSzokPAwdr7nXhLzE5oyQ6FXVRWQrnq7XdHyDz6tPusR",
  "key12": "5yzQuo54ZSrzrDCa7JGBwQk3kAN6HajapzQsVzuHUWs3tSg4vu7zBrAknSQRdNgS9LZKumTiuYnHCjXpELe3AzA2",
  "key13": "5DFmk3wKMvCPX4TZskwfU2nDU5F6vMZdYxQiNaneahh5zYiEfGg7crPEH3VE8U8CmjBJTHTGg4FAsgRobVvvH7x1",
  "key14": "3axSbBSv7k7iDkQ82Ud95gcoVyXb7oWPC633GmSyS9FcV4cR6YqzyEbxE8G1cmfaUishdepGgdKCLAhUUZxKL77f",
  "key15": "ruhAPPQm7szHURPKcpsL2JUbJjpFjSL8H5Kj9eMTh2bWtyNSncsmC28nBtRqrqUPNH7P8Nku6dftVXWmWwN8tH9",
  "key16": "2KRkeHB7UDSwFz7CHWeymQkySpwKNniddRNFsjGxJbycGjeV2f7fKVkJNmRMzLrEgDes9DWruKp3DuGngmzbq4B2",
  "key17": "2Qo6MyLxpwz9VxbjbkeUiPZCuLgkmAwXeiY4cMHq9ww6Na53dWe3TFCZaM4tFDQA82rpAMsez22Lw3zhogdfgZ3p",
  "key18": "3ADcerVcakMCvHEP3TztqW1in7YXqv8QexszT1yoQbbxXpY2Nzw5JEirsQ89ihmHbcTs2i7a6btcGFbTbL4jCBmk",
  "key19": "3tVduRmDUvbzBuap1n1Fd5FMQgvohjhkq8uRZv36ynN12qq7PPuvvwTxge1rV6VyhP8SMKuHoaneGvrmU2PKp4gZ",
  "key20": "5M4FDbXAjDboBo4CVAd8VQwLd7ouJK1AJ6YpUKs4pCCTUpLCuS5VFkeswYye4tYhBjCZks5V2qZKJtdX16u7m1Ln",
  "key21": "3a7h25ByEuBbs99K8iQRSg5ctCjx4GuBRMXnBoTvJxorWbzG7J2VMndR4Scp9Zd69WMe4ZkjL8PmsUX4VkmrYvxs",
  "key22": "4UyJ5JqK1otxC72T5uWPSMYveBvWJcnhcujzFjyKWK1ZB5SBeoHjwTPCZhX8vfyBRaDR9WKh1Y41iNXYnzrqBHHF",
  "key23": "673GioerMiT5PckiHabDTJkTXB1TYUoTPhRsGRcqFTK4KAcxehnyyyF98gxTdMz5rEQZDcnuwVkhxqz7TfMHpxC7",
  "key24": "HpkPp3BqxnqMjSHxxfqPpNPc5kp476YZp7jbMaHQDTvVweJJq7eUgJyqcPZ6wn5NxYXqPmPUd6FnwhuML29HotX",
  "key25": "4AZrLGf5sviJjsYFej34CRCi5R1szwe2aHoYB5ge8qBvRwnNmVZTiFX7gaGBt86WY4QH5RJA9SurJiscThDNF4G1",
  "key26": "3EpEmLVLPzHyyk9dZGdaHNdjEfZwttAv6D6wu9TchTxiqkqW8b6jWWts7pXxFY3aVvCcDcHow8P799u53gHHYhrc",
  "key27": "3HFwsozvMQShnS7xMpY1gNn9Nhqh4iXZbcCF2adyrCB6LA5cDH4dXWJFCa2XxASxuSB2YDzvxE3MxVVyYbSqD4TC",
  "key28": "4iJa1H5WXjTjYVhk8sVuspsDX2RspC99k1yU96sMcHPmhEkfhrD9784uUpoDMjU4CmXsdJT2Pp2hPeBQ7tbJJAeS",
  "key29": "5xDrmtq6ooeYHFWq8GutE6A9vGyK8DG1de3eKxoDUBzWNdqEXCdKkkFJjH4vHabxMJKyvzm9NM8sP8twFK2PB6JN",
  "key30": "5urUZheZkt2zgqbZNxh6SCyxp3CXYoeSZtidQEbXQxJmKu78JqC1T7pawx2xWnsZCDJKvRU9aTqtTvBYzgACWYHZ",
  "key31": "RjmrjPrtdnPU8wze4HUFCe38DCVvv6bc54t6icSiG2TchDxeWfP7eF2JYVJ7s78k2VximhJtZb4TQjEuz8bxhem",
  "key32": "5AJNCkjSw77jVbbGDjZg3Rewze3ooGxnqmxwnMwRERDVyVPvkN4pjfUsrMrfKFsZk6VT6UsxYVoSgStuzwFmp8L",
  "key33": "3HmA9nqGowsJGyuuHeKmK1xJFgD4UTthSMmTue6sVmNvVysgvyYy8MML5qpo8qasiZDT2nbsfogEqerpfdFYLKvS"
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
