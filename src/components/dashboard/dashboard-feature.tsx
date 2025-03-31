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
    "3h5ZVHa53UM7GCQJEbBbQTXa5Cys43hRPr5qbLin9uYHXW118dXFWCPaB75K3UKjSvkWHJxoUoGTVeju9ofXaxvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iCvqneV7rCcn3rf83LLNfq9PKxYwkHzzKxib5XcciknQ2mcARwVeUwd7s7zAwWtvUaLdeLPVWSFQs15KtPo9NVK",
  "key1": "5NMkR96qUqvz7jUQpnYryhXKKzsQeziQE8AejGk4tf7ngjcLJke6D4ELMkjQ81bevRZvv2T8r37dG8sw7eUZTJqa",
  "key2": "5t1BwTXxoNTNNq2mkDa7dUc83RWxaFMJFcbPs4ycRsSmhki4GNMbZveFfib7Ee9RM6xsQixSCSZnbfekdX84qm2b",
  "key3": "4saZQkXXdGiLnXSzEGzEJviPrHQYk1WpC3aDnWj5fjD23WEHuXFuYdG8REUV9WzHj3nSWvNXtuZauUK7DBsEKMEd",
  "key4": "n4mg2KpwovQLdZQsf68nuCEzfRZcLB1DGf5j4fB4hfNNJT8HTC4TkK1k51frMBFzxBS3FZizULVsW4GiTBh2NYz",
  "key5": "3tpTtsLzTvbn31GAq8oekEyTdsLnoCCnX4UcEBf89ySVczYLQdQT3Nt6tSL7FiMjzVsdovYEabmRcPkd7XPwQqfz",
  "key6": "Bmdu1CXBtv1L8u51kb3i4MvhcA9f3QFLJfVY7gDc3G1fCb1wrAfU4RD7FJ4CtMzbWsdp2pij2JUZYCi15CjWQNf",
  "key7": "2B1sL8q1QiGrZpcs9qoXsrNpYuqWtGkHRgTP1sbAeaJoDYtNfbmCVvM6fp2iuVkkN2maH7FzMVAxXKEGEmeysa5",
  "key8": "4h4Axf4chCForX2aWPzrZvRjD2HC4KDLZPGRZRWHSYhCDL8MyYtUDpDXjzmxZDu7a8adtvPzsMc8cq3qNqY1sx24",
  "key9": "3y5aUTJd5ovs3DyjkjiG6VNiLvCQnS6wvvAWhFYkNuaEY2eKqZb4bB89woKe53xax5CYE3v5g4r8scHj9qrjDDkL",
  "key10": "2LFJrrMKzowXHa3LpEJ3y9c96sVBRUi1n2uwZmWUjBFuqQKFbv6ZGgnsMVYRjCuhakMXScZprAPuS2tA23jpz5r6",
  "key11": "3Sxo4efFyYVrHjFaMc1S95exTWZNKugnFZAgX2BdDN3AFLM3S99zfqWWMQKG5W94pF6W8xfgLuzP4nvS9x6EowUz",
  "key12": "4HfuDAChXKP56YTeky7YdDmLNqgQsraU98ho4dD6XPsTVnpNUxiw5ojGgbLLAjd7z9S66tQqVEAnNbUu7JxkimQR",
  "key13": "KGc7inu2ZeoChbypk8EJiuiFXkB6LLxPGjFQJnVVoGZuJd92tiuurN34SFt5eyXkqYWWo3gpExEbho8ghi9yfLC",
  "key14": "3KHporms8LfCEk9VXCcd62BfWniz5kXq21LBqCRdJeXYbY9AYddKhVJBzqNGAAKFjZdp4EwKEgdVJjcwiSPBBB8s",
  "key15": "57scH3ANshgaVhyk9mrHAdBxS2Qu2TXNk9PRfUWT5QDQtKTw8vFvcdJ5EEaMonN39wfe86jJB5BbPSN9bS39fthp",
  "key16": "39VeB9CinWKrNW4BCwGwGq56zZib2q6tNTBpmqiYndJ3Coow5RugscXcMLhubAarYk7XnApqzFoK3TjHyWgGGhb3",
  "key17": "4gQsAKbZtjP4m444JSinoopDScCV1gfGGyzwd4TaenTgS4bCw5VBFb3cY5tXxrsstQge3ikxy7yqrQcXTqdPi8JK",
  "key18": "4kdiBp3RbffedTUaLVmmdXg6VbBe4kvnNPYBazqxmvtsucUZQf5zxY4YGMfP6q3p3oWDNVdGrtEnNDtsK2RMkWFH",
  "key19": "4aKnXz9d2k2wqpbuW8iG3YwkRbANmxDwtKpFCDEG79cz7s8TBo532v34Bsg4TPLcgRSxdxWMYi2ivyfWdURYY9sh",
  "key20": "1iECGzcCkFTqD9chCzqanFG3LemxHBi79xJpPaWh5xDd9QXVT4ufsNo8EiHYYtrLbJ2gDVjXAuhR1uA3RhdpMi7",
  "key21": "3arYwx2ko68PrwedvDY7yKum64EQ7xGtUdWYKoj5jRgk3YvFfmakezTJ4BzJjZkKnczUt3ZajKuW6YUYuiyEDxgH",
  "key22": "oUiTrp6TqRC5k5ZvZVVGJhDPNSwYsDQFXC9Gt5USpYiWBRkgUPK3N4sLVUbLSXsEX5CTb6bfZbTdYfDTcnuqwYN",
  "key23": "4oUgXbrGJUyr76xhXxULukYkcu7hXwGHjBBDMojFeszLiPxiRfaGE7pittt4uU7UgQ5odQ3rBXbfWUJGFERXCyAG",
  "key24": "2bDHkeJAEh9oHxETYFwfGVWr5dd4xcpdyieM4rBsRVbq48kGsNVMryMDoHE5ftuAEmLs1PEjjVQeytQ4bu39uk2B",
  "key25": "5p2zRw4pU5MzFoXYqaRaSaA6trHF1bYVNjTBZa6SY7B6NxgX8FrrxVTdnundUduWGM624gdmuCQ2ymgYUeWtV2q8",
  "key26": "4L7eWXAteeQeeQUZbrC33UAu1SC2K8j7PJE2tRyTffUG1asQJ648eEY8ojFzRg3pu4ipJ6jtRMEceVudjhBn61Kg",
  "key27": "5ThuksWHwj3sMhE8mtvPtPK7G6g2a5BBZfH8QNMvcNWqd2xMyPNZ9i21KJ4jogUym5oryV3Gkjffn6k7jcgr4Wb3",
  "key28": "ASCTSNaZ8DM4q6nnJXahYCkGkHe8DncRg1a4g7u1zy8Re1vbvVL24LxmyiDGKvz53CfrnwHJXShcb4EnJMvJL1q",
  "key29": "3eZbupTDd2UK1kXwVkurwVcfDe2fQNXbT6kY5Y7DphxTdHEGcxskJZ53imjhwhyUEFFBungWHkWvxssy2uRoTQ5U",
  "key30": "5TwcmoUYXmsCxK34rNuYR7FbVYEzH5mAqLyQACCBQfJ8SQunoRUrXSnyJatkwmZTwzNbHRKz1trqRemZRJAjwg9h",
  "key31": "5CPSLoeAaeweTBctAQLd7e6cSZZeDgerbrjRdkn44N28m7h995a8EWUgtgRPTf4paKewDYd4XQTaHFWVuB6AAfs4",
  "key32": "7aNsehc8CwxCRzy48VWeHicGouEX53emRrcfkTXhCRNcn5wnKGV8XbCyTUPjcvuccVYn5q3Rjf9zbvK6u8Zbk11",
  "key33": "39BRnXYRxuBXg9BG7MPWSm2gmdEcFZ71u7p4MT1eZpAAcDxh71iV6rPzMNzVsQfYjU9ZNQjBh3XZZHo97cPSEgoc",
  "key34": "3Zh9RA5bkifZG1tCkMDHaSp2Qq6Xy4F2FpUxkkvLADU5bjdqGrwt6rQNZyUUpUK3FvZsdH4FryEndJKVo9ArxSbd",
  "key35": "2c9G7pDYmBiY6Qy8zjeAD38QKqPviunqJsQELDSnxwC7cPtvwudF4tLrdGWVrBwkFQJmf19ooxTsaXGH5SMCjMhL",
  "key36": "5AU85wwzvKmzqgRkpfDcXZF37s72AVmdhEEzviGHzh6tvhPSEXUQrYbqqr69uxjsxjhzeGUr7oapAzKXkmEStAqu",
  "key37": "2ZJeAN8UXCcU1o82AqTRFnTPdXDLpkgHa1bKu3v2Foru6BxomjstfFyfqvpmGzDiyxpNdyGE8Tdq6LVM2tsgQAAW"
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
