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
    "3rDRmjkXYp6ou1SMeUkoKyQbiWfi2dx1At2LKTpGpbPFHByjfqhEpDZSa4J89QiVALZskPmD4zVADhF5Y565uGrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Din9J1BN2Lcu681LXi8WraS3W1R7fLBo9RUbdpuPoB54P2wor4Ndhi3GABxfQBURprwFGwwtcfdnrawt549nSPX",
  "key1": "58mbAr7BWk9XxmK7eVBGXxuJpqE9KmyA9gSfGsvjm8hXEeqEeeyTW1g6Uq86VF8ZkbsqGwsykZ7An6zMBf7aCfY4",
  "key2": "5eZBdf9NxUYya4oQJzXX9HyEGFTcwrvSYDCSBmi4KZJoxw275Tg8PirUpBj64LGFx5sRLq9TjpSQpbBddBHhJwK6",
  "key3": "5RBc69XKgjZtfoJV14EvcSjFyEyGaLJLpLSmHtFCNSkBLGQzJAZ3kCr9kqtBHnh4UY9aZntdXaxACZukob8knq5F",
  "key4": "26m1FR7uTsxeDV32sRYsa2rP3MD1zsrrh6X5cZumfZQaTNZAjVwH5PzbUZHaWf4c2retHz61QQVVj4ps5Tib2BVU",
  "key5": "3kjtQxTaaz66VdqzD5Hbh7xRFkyQPfg294sht5EEJPQyeosLzYbEqqEdxpTcKJmmULQyPa7BDPZPTtoBPiwn7f2v",
  "key6": "2vS6fvdCSFkNj1sdoSZGUZ8kzyUo7qW4Rn9ZSbR1f5bANuUiodHiha2b87Xr5dmfLcGY2gLRcnP2geYqAkx8zjiC",
  "key7": "qKnVt4ZQ52HHKvvwBNjjFQJjTNLmrwirphVuAiWfPgEvhSyQx8tSiV5DCzern3km9uv9cKwEfV1utexkwDgsh6b",
  "key8": "3B65ezzNVgms2T7tWaS8SqNpmVUBHKnHShwgA8WS2ks9HFnbjnEwPRGG986U2KXEwkeW2AYDMfY1L7m4WQen31rE",
  "key9": "51Tn1dCNzbCzPjZXYvVqdLsGFxBGBppFXiBazCbuKyMDGF4nMSG9p4vX8fKAPYRM39vHFBLshMHeE9MNCahHFS8U",
  "key10": "2agLuwnWb51xG7WcqFSXP1FPfgDi99FkbzEL8a1UvAJvHH4zx3p4ErXKp27FC2VYoyEem6yoUbD9716LK9ZyYkWe",
  "key11": "2hfQw8Rc1KdonxxxaZ83jvXD764KXnLY2r3ppPPba5cm65MBGRcXdzJ72u6ezmtmp7F73wY5BwbbEmFFk2VrPHwN",
  "key12": "32esDJdu7sTe3BtEyhR5uvrgrrqtRvLQY9g5Xbgww7j1p3NGL5sqLnhzdTMLkVyg8Rx5HEfP51zargjxTQqUJAWC",
  "key13": "KnCpJxu3ncmoZpugTukbrRG5TqkUr9nwMUdGtJ4aWaFTgdPGjRCPm9mW4a1DQFd7kCAgfxWYEJxTfLGqNreNEKK",
  "key14": "5RgnEvgSV4JVpuKxAvjKRH6eYvrBg7a9WRoNeJx7LpkDniUQ9X7hPK56kbbNe8W3WF73MZy4d4DgXkddxnPZDYiN",
  "key15": "3kC6CGZRuKDBbosdQPvyuzDzvNYm66GdE36hDfveWQpttbyZQJrHyFdLrEmuGoCfRJizNW9JzPNmyBKD17mXuXqd",
  "key16": "2yvcXyzyT3JjRU2TA9QRTjr3kRTwDs2szH8ZMZ81JbA1qCgM1Q4H8K9b3hf1psP2V7LqigwQC8e7x38AHNopJazm",
  "key17": "3nWPzEkAEWNu8MMRxcjZMprr12RhGVGBbNjPzqaYNQ7VoRBEEpDJKxjEdyE15PHA3PSvEFaLnVpFAHiHJRkkDse5",
  "key18": "66awmep4k96vqaiiTqR576CwCo1Trn2WVc1ZfbApnCS8eTYmGvPuK8woBoTqZ27YW8uD1feUCVWRZDdX4ChFCwFh",
  "key19": "vj2QnA7sjAywGgF8MVZ8td68i9yWduCvzVSGPZAQh24oWjV9aUDA9ByDMtMq52PSu6SAeN44hmtXfB7TswA9wHY",
  "key20": "3DXqG1S4669yeXNGcheYZnPY75oeZthJqtPKAcswaSR1C8otirbHae3tYQwpsMDDu1FLbE7QfCNg8yrh1ee6zYky",
  "key21": "5PPA13eSCZh1SkSeFYZhYtSgsbDBWoULFhcBE1YvbGDGMafTCkT7fotzXw1bSAWANoK4ohLaMxHEX7mNW2bL3nE8",
  "key22": "1pPudozwzn6RikXnmNmWERtCshJA1trMkxoQAaUnN9P3TDJkQ7nGtHzGd6Yg7T7f4vJyMjbV6t5htgY4kfu7KGw",
  "key23": "46jPMG8SEAutkADiSexoEbFm97QDY2t6Z4MijS4PEEg5HcfYkwMWYzy2NFNWdsCv3Q9mCnmy1jHZdd5hh1Bhy5v4",
  "key24": "2mPt9uu1FAt52xDCnjorUrqt2A5r7BPVJ7r3zp3K8fDjYNU4fBuN3JVJJAnjnd7Rct7feWEp5ninnHnbAFVZetkq",
  "key25": "44DiDAoLnNvsBXUtBTYvkhd2iUYqAzR1oH4phD1hACDcFWggJaivMxp23rcS7fCFEqTKV3u63V15z5TX8pqzq5D1",
  "key26": "27uaXBZvjh2CQrw4UxCPUb18w4rUWVc6dTeUSApPmYZCPXJs64Gjb7LGZN5YD4avscKW6FkbQxJ2aexMmL2DXKgP",
  "key27": "4rti734qgSiCNQmev5E23Xeo3eTLfddBeJGFJkTCgPPy7NDvWyE2xd65w4DaczrYLbGtpwu35sWUXFS1vAV1P8CK",
  "key28": "4B2qV3VHr5b9LUKz1EDm6LqD37ysWLivRWmEZCpeV3bbLjcVaDofi1PrhGJ64BbbthTWJCmbFJcu7wtrDnKbPbg7",
  "key29": "61jpvEzZZxWHe9MNzzgxQ6ytHHZAfF6aVpAmts9o35ns3bsB2QCfpzqZEfGDKPVspEYE8Zr9A1KT4ceDXupgznEX",
  "key30": "4fGwdaaDF7HYDiZj6dR4QEu2XyThKToV3wUrGF5wuFuK9oz4gzwySbsd39iSFKWUoeGNA7WMXGCopUM8mFvc4ux2",
  "key31": "5N6f2yi8HP1UWzrTDAxQ78Tc3R5MAe83yKapJXnzHN3HQ9d9mQBxgHvFSLqEL6hZArpDk4zfCCADbD28AeYwmzY5",
  "key32": "bXBr3kzUowZbLGbtKAK75RpYghpG98Jnu5fjtckF5S6JMJMQw9AAx7ZSiu4CehjvzYQdjJq3sa3j9axVLPtjEUs",
  "key33": "q5Va5bSd8Pwc98Hf9ysz9d2T2mAB3E87nVVea68nk6ZvmPp61veSGLhVZGYvofmSBTVoJUT7jH2MWSfeywN9t8E",
  "key34": "3djb1bt5o1yv5uV67ACMuvbDoKuoeh2b686xmgnauRutdqgvm6eAnqnJtVXbkBoufxXMz9aHVfYXQW32iAreJSy2",
  "key35": "2Hd1Pmt4kRH1trcnmUjfR9g7gNAx51DVvVisVSmDJt6YxJoK24oMzbYFwcSvuvreDSQDzxHWUPTqq5KEiDs6bayr",
  "key36": "3fwv6DytWEDpSV4aE3QMeZeBe7XvBuasq56N32pniTTt3rfU3fyh4rJMbeE23xPbmFdhSqiCkyfauTnHv39DkPd7",
  "key37": "4ReGSiWvQYqpnupjmeYAUvkreiG2iceSxeiZhX5D5Cz3ParGryHRYqo2cHNWUCFaKbVvC42zYzPwTJJZqvLUGZMU",
  "key38": "K5ip1eyTnbbQXhMdCdBtBNeeEny4bshPzAUiVWnRMwoMD4yAEdxgDeqKtwyL7wGg2qMSgnLE9HfEjobJVtfbWjJ",
  "key39": "3Fs5V7DUgMhq8TPC3SwNTsuJ83crPui6a1KJC2yLwgieDxQqtDhDH71ouopD9bqZAXGURGHj5zpQNRSANKvcorNe",
  "key40": "3oq3v7npTe2JAsb2uhZche4ssUoGCewqVDBph4iP52jAB5LuznPew4CTBwTiV1LZFTJ9H8sD7cwB9mq5cE69XLtX",
  "key41": "5ye5kKVotvUfz9fCWoxa9tk7uuF9H9mBPLVZebELBEQtd9uYiFh7vucop6PcLgsprXAboBL6hqkwNZ3C372TcmLJ",
  "key42": "4fptra9Cbd8hcJFmCdPCVQHUHkEbrfaNYcrgpEL8PKNcMPX46NLmcLVCzS6Kgd2Ko4heBC77VQbnJNRCqMA55tqW"
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
