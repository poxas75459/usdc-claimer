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
    "qdj46Zaj4ZL6EyoWrnu5zUBHneQcZdVXqoSAtfCrMzR9pfG1NBbD2P79Pc8FjSgEZns6DnJJRw9qwJRjraHEFQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62u3RRBonvLfSRTT3ApwriWKA9HbadKznHzRREDpij2CRYsd4fhVkHrmiJxktMQ4A973w9dCUs8U87MWMCexkiSU",
  "key1": "2gd6nEV19BQh1JVU3KGrEg8TkJNbAU5uKiTPmGscX9f76KAMohbjFSE5GFPA6ZB3VFmPi6EQNqs8RLTWQyjgsge4",
  "key2": "yKmXW9KDFDWAudFYNQa5sNwnveFMH6w5JJKpsX7fZt9KZVwR64oB4kjhH8B5ERqYQmcsJUaSKcDBiMevoBC15gL",
  "key3": "hjhQ7xHMvJmZB5PLeQ2Gh8PizmqzwS1d6t5vkqWcp7VtAgGQnFis6YV7Uu6sQyCpFGFEqKfaoYH3tFT7rzYn34F",
  "key4": "3RjKQN9gDgdQpgMPBoYMkvKD2j9pyfuW2CYabcwEtsr1f8zGPJZQCVKZVRrUNN71z4ikDihgYBFo4GjeTpH48BY5",
  "key5": "3iqSyqsP3dWpRF63nEmi93LbgDmm3Pv1qN7tNkgVgarHGAPXxnZi15a847RFBeRhqi7gugsSA9sJViuDHRj36iUf",
  "key6": "42tHXCr2uynkQTYHhNJsPQV9fgqmYodGRdNPAwwFcwhTnCUod1qK3EDdu7FKGkDg6B1Z5g1uRnyGxtkB5ixMBkL8",
  "key7": "XaFyEoMgA7U7gfp1Pt7vBhMteQYxAhjiR1AN5rE5YWnmsNQyzJmx61rs1FWpKq71H6xJMYUMQTWePshBc1XPqp7",
  "key8": "33YpBP6NpatPrYzcLTUW1WQpVaowbHEmp9YDrseCGK33o9UTf63LAwvQyLHhq1n4svT6AZX4WEX2MZrhju6K4EXR",
  "key9": "5Z41AGdR7gaotNCXVieyPWAMozd2bxh34HMVAoBimb6BqFBf3QQuEdhcXyTWMUG8bgyDUdAwf5LoZdyc3miZeGgi",
  "key10": "2KVJ2omxi2REZNmrkRNXvb6hk19ibp5KawGteWjbGcd75rBUHV3FcHYGCY3PsXcVEs73DntVwUC6bZo1QMb9UU8Z",
  "key11": "2t8woDoWJLgA6gvS6SRGniuuSauGkPtF9BPPw6C5GDcB6hdKkAy2vrbBrKmgmFygxEuj5QDcejb93zDYyX4QEBwn",
  "key12": "3PFEA1Nk8RiiqudVd8MYHgKWmzKkuExi1qGQNhQaJhodyGp2cvp8XfMcea1GA3Kkq4yQcpMPqQzT9CKhxTxhyUJD",
  "key13": "4AfhNLjbukNUMR837vk5WYxcr9stuuh9GLPfqyY2FtoTao2zrpWUKBwZ6xo3TetWWazRMJypyaYVfgVZfum9zhwU",
  "key14": "5aHDkmcs5up4M77SzR4SDfGiwocfCth392dCMQQ7cRH3Kgu8b8zXtu8MH1BVGrhs3Ww3L7SE4Yr3L9iTgZn7eM7t",
  "key15": "PN8s5LVpYy7HQorn1JwuwwLXineZaiTMsMx77EJDFCMBAovMX1eLKiUtR1bjk3i1End9Ne7pDtVoM4vGAbgpZTP",
  "key16": "ysRto9hqNtWMaR5RiGvxBLf8fJ2a9kwDnM7hxUCxK5guSMYFbCaC67p6YeG2hon7DywQB5TPXy1JeTvCrBUxQtm",
  "key17": "3V1W1DiFfzyAVMqeevJonQUVJyaUnAHwUjZFGGPEQT5NyTuozuS3SGLJbJpaoQoECZzihJufVXd2493iv3R2Hiah",
  "key18": "3pnNCioeowVvVWa3y2tP9Fh9WorEWacFE9qbBE6a1xDhm82j1GgtFyeq9NjwkYtxi2s8BHLtut4Z4rA2QUXCdWdY",
  "key19": "rE6X4EZYt2ogSQtVwMrcnqBFTrA7FLehaZE9njF5ZzaT1fmq4Du4vi6DZBZmX3Nnr5U1NggRVEJuoRVBM6HHDRc",
  "key20": "5moJQ1MNuVSEwrWb9AiZRTh4sCLrPCdhwPFZmA3AFD3q5yFoXvVt3vV6CVRe4Yb1LfCxJ7bPD8JQG7vnAgTHQxpp",
  "key21": "34sEXrQjLzpxBhbB1mMrmzc3BXYnQvCQMha89Yv835gmbQjnNkoMx9mqXh7mMZdhGWjDwS1Yywzu3CX5zuitkK16",
  "key22": "33mKwyPhUm5CMvrgj86jtDFTbBYrqC98wtZLViN3fTxPYuQ8BfhJdCc8K3Dk6CAhAjgutMtdEiSXkXD8orcfJLYy",
  "key23": "55Sd5rJtkY2D2jqmNGBu1LgpJTMHkdGZ4awi4vYVJibAgL7m5JqykCfx3vCZNiQViZtWopwmynXrAieX9YQNPtGp",
  "key24": "5Uw4E4agSQCarzxNX785dAkPSyas3uAdEdHZ4ojV7Nho7zkEwvroXRkAg51ZFAaSMGct5cYMGcgbZGfZdVz1Arat",
  "key25": "bHefvnZN1memXdm1qrsU7XVWGqPeUZzoUTkZsjGtHt5EYg6LpGduESUtiMaJmg8NV2axiqzmNyBu59e9zzS176q",
  "key26": "5fn1Kzi7NeFFSqF6ephDCquhTp1ucjwD4BmK2uN3zQvoWrGchd3S4oRejAAXbYPHKGCfFRNLpiEuS1UYSebAmwQF",
  "key27": "2FBftG6T9NBweRH8zqfudp2c25GScWZztZ6BAZiHBhWFtjvHp8EgY5HUksnnK5ZanSoaDatUULu9vJH1SUChWQub",
  "key28": "52xeMKuvSBZMQ93LC4beCiUfj3jUXZjGa4YEXGCXkDeQU8eWw43a9924zpiYRFoSgCTdp6ZvSa2Tdrw219Cwgdhg",
  "key29": "44SqKSzqRkT3u31czStB9jLsCA938Qb6rH4Tw5dfsYzSfVMhm6XPqZxUBZhQBbZ1jw3kU35WpZWyzat2VwTDkcT8",
  "key30": "XMZjN59XSaxPwvBSpTdNHkBMe5M4t2BMYub3kjDzwNYtJUrbagYh8WaHNQo1h2W52trf4i6zf7gvtD3rKuFX5u1",
  "key31": "43wja6qoV57VGMp8jpassUrnonfdgvod7dRQ7UW3nXchNdGjZELnBNHCXpwffJ9Pie7MGiEx6z6D4Y7Rs2P6yr7E",
  "key32": "3c467m39nXs5au2UQBQRwpibDtpw2it7ypZfBYAFydcZuhcGUqF6w32HU8goEoqAAkNKNk366hmSukEiAm63aRoo",
  "key33": "45sHASzHVCv8G1dusEvLQbPQrDMrMbVbtekVc1Tv1nkm9VMCTWGZhPTaRjS12c4NBHCug7WqbCJA3y82DjLp5M5k",
  "key34": "mfJwKWcCAb8cQf2CoYv8RNRrp2yHBJE9ff59mHmzbgW4vviw2SBjub9vsHRbLLZUiMCdLQq45UtiutdPtQydby6",
  "key35": "4uuMFiv2uXeC4jPaFChSKPUdkV28QCtNDLpN8AsSGhk7m2vXjK9FNbiNRPUd89ujJrXhfuCAmwMmC4MhN1X4Jyeh",
  "key36": "5c7vNrNc9ZA4r6tXv5xxrh1s2kxRuMBpNcpGNEtVD9A31UpDwSscFJCGGKB1RcAHh7zq1pxAa84br8d2M2ubeZ67",
  "key37": "29WkrdLcZs5KAUfU9yKhDVQQrYChJ27aTuC21XYdMAQD2gY9Jeqesu5oZ5xmsWsr9FSnM8eL1Spy7Js7iwojZkqT",
  "key38": "TrdBENmQ14nCnd7TUd6KvuvaX3uGo9CJCQPJS5XbCHFmJ9NF3yMxKX7S422MtEYXizsNpA5rg2x1ncWGK2bPqwu",
  "key39": "5b5ZZqczSWP4KiXDaDBiGnvK39XDFpzZhJYL2JqDEWkcCRAzgWiHvyk1VB7aHunKGv6sFUtBMnkLGX4EsJYQEYYD",
  "key40": "4q1f3111YMwVfjfBC51pEMDxAzUC4pu5YUowpn5L1ER2iKXxJ5gyUssaGHSx5EZVhbeXVLD7GcFA4uoCymLBTivB",
  "key41": "66hcBnVQFqToBBPLvtiJMyde8M13np6ZkG76wXsFAMBhL6mKtKaCiNbXJKLYpmQFY9LcMDUtuK9tKMhP8JxLSmgD",
  "key42": "32Ph9BXc3BWekzUyhAv2HKiqYRp9TSm7ntXw2iVK6tQvAyLmszQ9d1zaRpqvXc77twJYNetpmsXVxBjj1V4LXxCP",
  "key43": "3YVZDB8yh3jtnGVbNZSXrR2qBbvR19WQNMxZSD1EY6thRGnRj5GEDbBxaWE6ACy5Hg6i3jjb94HQWNBvQh8c334g"
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
