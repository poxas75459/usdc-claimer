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
    "3i2DPPgs3oDArgci52rn61JbUxjnHvQ9fRtX2EqEkbuS7wTXdBVTXYgbQaG1NRP6syQWKUCwHndkS9sYZbKo6rn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KAjd19X1nMu6h4eRFr2k2NmMiW1onFb15TvgkfxSn8u6AHx2m7FSCM4tetbctJSgfs1FERS47breWEK7Nr5JvYp",
  "key1": "3AyP754QDK319xiTbD5QnB2mwh6VJmjwo4bHkSpEvc3aZ9v63H549Txmb72R71BoRkyatHbWvkYR1cZswhD8FakV",
  "key2": "7fvV1YqbopayAZbqkqLmsycXoB7UbmUyh4LjqCwxBGfdvEbDzq7ALPEFc7N5EXMbuAzv7cUJAV39KBrsTxejEJX",
  "key3": "2whgVWRwYhHoUv69HXPa77Y6uuYrcUq4cakxxuDuZGLEHxpTxuePfwrmSuMP4kMxSYnMeNRM8vBxd2N17F4vQUjg",
  "key4": "nhVfsgHKW2hr2Sbw3RGF5GDdiLT3S1MkjvNcV8pvoFZdMdEUw4Kj7ihruxAg2BZA5R85Fy9N47UWyZry1i52pq9",
  "key5": "xNwZkHNEeP6KK4RevvADPxiCgh9XP3o7rYUvPuA8eKHTc489X3aTufsG8eVxhvv34kQXmvoSoUGtzPTCo5wkpCg",
  "key6": "3K5F7noMxAvBqXbrhFeNgoMSMQ7AWcsTDQC2nUPeURqi3KRSi5CibUaRK6BR9MQBhudhqsMuLkApT7cnUDT8YUFY",
  "key7": "25xBfGoEiDKoHKbg9qpMVkPLDSrezUN5e1M9Mj9yYThAC5Hrm7hNPiu9jHBDuB8zrPhzQ1VdkR9sZSgB31pLMdom",
  "key8": "3TuBd7fHZ36gvRWP85BgBzhAQXje7XvF7USv46kaRFQzGfDU9U2yY53Sxmq1WxnqmTCLVVNrD247NQQH3y3DGqoG",
  "key9": "5LmgB2cgZmUcVqhzHDGsAUa6Y5WPxhtCvkmQtbRUGxWgdwAx8dkbVgRTjx8UDEodoRAcrgUPPivAdoHu4YXtez3B",
  "key10": "32YPw72i7qUJ8BH5g2ByfQtV8soPQSbSrkJzcw5owySz7JCE3cZuqMkSu3KxoucEjT7BFyDgNffREZKLiakNBVzq",
  "key11": "2PVoDGCv9UKCgoKJ2UvvkBpLapB596PKZGJWytD2epU4s2AiFMoUsxB71Y9a6dJzZKqgtGSM2zmc6JNFTiJLxFPX",
  "key12": "3PEuW4JeMujtczRySiY4DGMvVJFnBHsrKjG7R18yypSVt9E36gwotks47VDVjUZ6bkEw238ZfvkeZH6EBuNxYvau",
  "key13": "kSrZRCbciZM9Xe9V6aTkTSC2KJTfH4dy4Szo26UQhsyDqz1GMCQ8fSTWWYiLyCnzPwGBbA86yaxFs9fMEP1u4hz",
  "key14": "2nKo3QJavifZUFdVSAA1GFjTBoJ3iMvvozFw6WRheME8KyPEygQfEw6oc1bUSTXxQ6aTppayLnkU7zffx6oWKbc8",
  "key15": "tyNbt5NEZaFthRz7VPe71EyxwYfzrfgamxsS5R93V6RAhCW9G5jykU6sVvBkvwohYBUAqdQ71d5ZiHGuQPDRgqB",
  "key16": "2KxSopjbzo2V8CUZQ7RUkmxgjAV2NpwcN2x8vk97d1Yuyb1fk3mC47QxN5L7Lvqg3VnWKbotErkQ9uaM7qxdoSWZ",
  "key17": "yU3D43kyUNY1cXzq7tnD8AvCT25QwkT7oyr6z4a3ypHCsMnnmCTfgShSqs5AUZBFZhmXHG78aT4QUmvtUvzUnGe",
  "key18": "4HHVjbwSRBdD5gvSZjTTzXcerjFkbzYUgAFi67BsrSbBM5X9ew4a7MGQt97U8skmjobzaghwAQJZxUB6PTCc3RRY",
  "key19": "3N78vwcDxqy6hqc7dJgy3oVCRd6Ary873fK2wR4XKsRWGmRY8inemVeCZCafBP7C13YZV8WxNyNCdXfRCoDATRfC",
  "key20": "23XMz2zSyuMhffhD8XyemqxKveZrbCvTMs1xL2u6X8MA16R1JHdtYHZofS5HstDUUtTtZzmnDJ6gTRgevsR7DTMK",
  "key21": "Uu3Dh9MC8d9LVKtToV6wLVCCFg5EnE7jWcPzVGnnyUYVV8BbwdcSxWcqhiAHkTDi3tD9o4fZ9WuJTyFY2KxvyZq",
  "key22": "3zFHeXWjMRadStjNGQTpAVQ8AuTa3YZNRiVZ5MAzN4u1gEJkZbjbdRuidX3KAXFaYsVCNsKV55SLMjYUxeq8n5zf",
  "key23": "3jyt2jT2vHg3LjE1neC5cKRnkxiTYjp6TSjRXojSfJd6sVupfoyopd11eWYmBykL2ctJSiA6J1qefGxqqppw4kFE",
  "key24": "2brrnRAtGoDurvHojLf93oGyztodA2oGAgHKz5pojaoitstVTduwqMT3jPWzYWfnyh7ZyDbabCttmG7PL1f6RmgG",
  "key25": "2cw9oBJniFgPHfqSQLhuCryC6Di1conwRnZ1dcrRDMFv5Ftpex976REApMcSDatkGqt1wdVzQqrDKuhmaNdQWNi5",
  "key26": "41EmVr5eXWUoXodaxE7zV8VsmqE6DRdLvXxpAkTC2bgetPH4NvrWZCd45W63Q7gSE3tmbQ81QNy47Vhqpi2gBZEu",
  "key27": "5sYwaR2hTScz1VQySqiiaGSWkqAVGVm9fkRB7nnfFRJPJMiJPJVtY8iSosu2LSwrAeECwzVSRFn4hNAVse4G7xzS",
  "key28": "3LoYL1FChvB7nRvjB79bzG5UVLwKM16mEmuKnj7MZpraWe9MmUf8kKnHUXYKDyacvbojrcV2zW3GUgvTgDCWjChC",
  "key29": "2CukhFSDexiSy9v5optaiwMmKJke8yRC6hwsE2UnRA8gCKbhbDuATaxtyUKe3Yicmbkd7TNb4oKfkX73XzNkJgTG",
  "key30": "57QW1Bh8T7FuGUQpX8t3F5vQheZRhRhv8YY5Ap8iGT7nJNWN5oFiHQmp9ten3m7JDBQw1Tk6M3M4qjqKJGvCsWQp",
  "key31": "2H5KcK2AgKA9BFgR1BvFovT6ZYJt93EBxDnds5iGD7NL8WoJydLsjrMGYpPW8uA3zbGJ7Gsua5Fcd3gX9wt84eHd",
  "key32": "3LZTgKddfktvseFMmVMB6mdzAKYHuMJd9XsQSkSmVh5FtXnwK96rxaFGpMEgQ2EJPjsPAnHkW9DmiwHNF4sdseED",
  "key33": "25GfWuhWSiGSLhzvACQUeGpbBBiczBWJq3sPbWKxM2aroHYoDmWJ5UcdfkssZ2PBSkNgrkFSiBky6tNUBpqXXpeD",
  "key34": "4vbLWcxLeE3HQqCCoEVD4dLz4qSU3jxtUCq83Mh7RGRJudseiSKezkzyWeKeWLokXyTkpH36zVmKxoaFp7a92vnP",
  "key35": "ZrkM1afVGgjGEFAUACk2yQ4WcVrb4eb7p7hy4UGHJ4ERArfmiSHEmfHXs4BxAdtpryN8sRJjDYoJBFgf993PedU",
  "key36": "3WEJeavvMFKkRHzYvwohcuRu2QS1k4VJZcDPfg6Gp76JfhW9gf2YmMjp9Y1jh6cLhkfViUkMgDy8WhBooYjp2SWq",
  "key37": "3zHcUemFgoPUo1JF9dqu4mKY4U3Vxp9h5QNX6hZnQ56CNdyr1kP9k3DF3snqxYhK6EJQYfazEuyjuKEQyGjCBngz"
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
