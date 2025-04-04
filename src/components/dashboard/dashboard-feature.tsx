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
    "4P4UJVztGQ56J9Wg3t6gXQqcr57GVWi2sg7mM8rFGWZ1jgWpmzn6mqNknQ8184PxML7EVcWxXCDm7oSF3LPuDU8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23t4YNA4fkAvj8CsUxiP91cdq3fWLEP3hJXUJ9TkpmLgL2AT6fDs4am7SRYWXfkaXYgicf3B3XGUVEXyPkUmqTVx",
  "key1": "C9wTqGQCdRoT5Zua4CKRFU17peWCVueHYuEU1tRT7J9uHhbgka5HhAumrWaQPHTZfMMd17pBtZQ4hVc9S8j34kk",
  "key2": "3HayNY3hXA9M4S3YgyXpbDuTzo2iqpvhd2FwEFfJab5DSfkciEUn78LuTJdnKfLm4cqv9EtKBiEGyLt6JfoQRMEY",
  "key3": "4HGXsox9rUvRdaGYPfYRW5em1EVSoLW5yg5EH4jqkCofqZ7Yx4NGoYn2TuEHuuxzW6oNb8jM5q5XdnzFcUVyzo73",
  "key4": "4jGeZqiua6ogrXSYcEvsvVeLs8juLa8RYiCeLW37Jh4MKRaTLf6xm6KnjFfCbYqhDTBfhfjBnC366edWNeG52MAx",
  "key5": "2S2bYuTvWEBxjuboA4LxdgDfike83Kepun8a6n149hufmpwyV9EHXJhMHjfAskBZXh5mFin6bDRTrxE6wc5ETJs1",
  "key6": "2FDXLFnAZNmSZr3apMc19bkxDh4JDhkJMSuDHE6qwR4zRWMZDLMZxDQ3mg6neVRxpcU2YFhE2yqF3eKyk7Zk1aXK",
  "key7": "5wjExLsG2gKhUQ3wYF5f6BKWHrV17m168AZ4GRWUUXWMaT6jziQZ9FnBizDWLYsaG4eAd92fDsh42egx2hPZrycT",
  "key8": "33DHtF6Kx3XT379Yq5upDG3RPkDYC5JY2Bkp2ErUpuC7AERwKz78tHJh65fMxEkcRVeezDegwQbA7h42dNgNMk3j",
  "key9": "3en7EgZMDNctFwccxjJgpsFVzYdTcynAiaGzEhcsRvTFeo9VuLpQt4ZRyQy7uSFscp8wZy2jxUTXVRMTmgASHRGv",
  "key10": "5cEoC2zVPKqyxSEbvsMvRJEkJ1i6i6dxKLuBV6h9rB3befiCrq6cKTFLzikLBmQbXMaEPeRWqDmb82nZHrkyY5gk",
  "key11": "3tQuU6s94BQcpy45QSk9fN5MNzaPwxsGxGJhKAppRV7u8ocYc79xLDEmi9HiCKLAudJVVgfpEz2sPQyKjT2RySQJ",
  "key12": "5HrpM2knNDTtNDu5wjFUwiQi1C14P3GTin8VFNxNwsynfJ9s1gKENxDoaw4tRbFMiRDX5XPUVBinwtZxtbVgAg5X",
  "key13": "qrdvFU9jYTvH7cSYp8B3PPXvQ14LR15sgbC4BLfVpocTsEJrQ5pf4mJ3SKg23Krw8eKkGfUNX5pDbTZHLxtB4fM",
  "key14": "3q3WPeY9JARWfzfRk1mrX2yUsFxzY1KvABo4rE7LELiAuKH6y126TdKXdHAVUGi5YCPVxCkNg1w8oE6HDeGEGjEF",
  "key15": "2cHQxgjWFzgjmxjNvcFnXMvRtDwke5PxzSTwmfX9JwEX2jAiYZJF52fPXHySHWzPdjcs5SSTzqEiP9W7Sm3XXtRN",
  "key16": "3UrmiaqwDFgamVB2m2j7akL8aD5tgR1FjaMjA6mNND6177AtxjBbDjGc1HJiaibbRTgGpp31Dc56VrzyRzUt4RqX",
  "key17": "23T1mmPRdkHLTuhuSAmeBuKFMGwpz9Utjn7MbMa6ZysV8YSXuf7jmz2vP1DRXuWyDnLP1kTS6aktS1BmG7RDSQYT",
  "key18": "SFXVEvUPbiuDZ4NPo1aMzvTv6Qbg8bm7y3qJysUrMnxsya1mPLDW7edUV2iWS9HtYLSnqyjXbQpoxNYUk89K5Lk",
  "key19": "5DK8iZwV42seq4zN8Xq1hJQur9LXz8rvWmzCvMPtjoVWop8ZPNhASx5vDDz7YwuAcREMK3ykT9tTc4M4QaJMZVTk",
  "key20": "3pZ6YEKLq1toXk6z9KubdxYWSuGgt8DZP4MVpAWoPS9oknD7Lm7FwLK4JKdqAVHHkh8KW8EM9QoPXcByaPFfU9dx",
  "key21": "2hFRjyXRCiR9yPKPGPU52bZ5CFkKLN3qVLwPKKrZhF3uYQwXpvGnV9qYrCWLPDD19rduuXWbHoNLZKHZjAYfkoDe",
  "key22": "2KzFYQfEwgouNtN3TMJUh4ozKhxaJj4YMx2MntajiKeBj3Urtf1W5QRtZqmU577sX1KuJwAUgqzbtUHxgx4baPED",
  "key23": "tBqkwE2jaEQgeYTkEywcUrBZX8oELnPKB7NGH9cN2VC4VRzE5beEDWa26GfFaFQCQrKQc6txtDEHApqhTqLHVZd",
  "key24": "2QksA14tfazoXqG4UWZ4VE3mMqnnmncGVaaQN69a8w1kkgKXG3jQftzFrebTpdqzyRMgdbaKETPPPtNkbABijPud",
  "key25": "39S9UUg3Xi5oHAbFqsDFYbKez8VfCC4ExSS3bRaUAjG511JcJ66n284EcZNxGDCcZk5P1ECYiu6EPG7aUVFEiwSx",
  "key26": "5Jh2nL844WEXpsieV7T1HAxLkvgFCUDuBWjrZkjyZzczeUUYuPxuP6KVSsAwfru1PojCZrg43PLCiJedEPMjFSb7",
  "key27": "3zaUDEdjF8pcUN1j1GtfmQFz2ar8p3NceuoibybiH8AvsiqwaLoec9qAQuX7E9z9LkvUwkfK8RopsXEXX8sGqKcG",
  "key28": "32oEjReEEr9jkA1UeEXB4ThHbFBF2LvdKpVBFhRUZXFv2WsUL2sLfxEKoiBzLf6eWPNWJ48M7nrKuNHBqHqAMLTE",
  "key29": "Dk4VYBj2gJN568uUr9rzWz1EKQbdMRmTFtTmtCpZPaoYFYhBfq5bUXdd2iAugL7rukKuZtM6CRFwrwQFuheqMpE",
  "key30": "42uDQ9E51RqAGNDfYGp3Hh3MkMWV2bb2Ak6e7w8qJfq3CKmLmTk1boY46mDN5Y7HPMVYXvUGJWg4WYkmUpywy6U",
  "key31": "2RXoSkB6dR5UWpms7WGzpjhVcqfA3FKKiVP8UzLPHzV2xofrJSXxGTB8nGvn3cZCKDaSF47MBXmNarkAeJMmiWqd",
  "key32": "51J8a2wS9N3M8PfvL9Yr9tgcWdmT3kZYxNffwiSNGZ2dkpzwMK2d2X5JzpiboWQJ3uHMrhc9AxYnMsvKfEKRT342",
  "key33": "5z7E9Qhwrb9huSMnN111UwM7EksWzLnVHBefHGJx767r3CGMwJYw2JreCXuzSJCpAvZHNcccaR1p7ptiu8av4xKX",
  "key34": "rKUMSoEEziVsAzoor6QWTdPKAZXAYyX7fcx4y2MXQZHZPfCiMYxtDjJSbsLrLGxVEe3wg3Bpz61n4YzeeiG9U67",
  "key35": "2gz67NTsH7qS6PvyTeWMyD5y8HdijKj5DqtuDJHcT2sAaAvERchsWHWoeXkhzVzGTBipc5kF5ANHPFJvkgKHLW2s",
  "key36": "3Px8FKDuF66nSx9scWXvu2kKPMP96xqMGKrPm12fp3z45rb6Cqf1rUn6w2apcshZR6mvMsfxqxzxdRgfXRz2QqhC",
  "key37": "3woHBAdBdnnSuqArk5agEP6SPweJGcZEqA3W4vrmTf5GKBRiJsFkzjhSfWvNS7v3dtieyXLdWZVAXQp4q2BPTrsD",
  "key38": "5Xpz77gEoDoQoDN5h1TfX7UdZJwAvMseBjE6GuRskC5r6BKCtSNLJjqPB2mvroz7Zttrj4k5nUxDbMxfniEafgyp",
  "key39": "oxQ11h5QPDMP2o1ebCeJ9kGCZ5EmWKK1mnkuehcFRFbETRxXrfQ4HaCyeFZ6B6mYMM21iXLjooqxysZ1V4Fz1G3",
  "key40": "5Km35KxSiLUNBnb1JSdcKVU6fZ1g4oXd7mEL6U76jLWCn6pJida65aM34LTc1KHGsSgQoH9zdgbkeCmtzs19Faah",
  "key41": "32H2qBuSgpfgVXQL1ghnxe5meKYckeHWbH3totdA3mwnCqkcyajmVKNyVeyp9Gz4eg7Cz9qyfJGk4imAZmBPkiam",
  "key42": "PzjuAHhQFDTwcDqB8LvkK3uTCoi3uHdeJe1df2gt4q4obEutgTdwTxYVJx4aA9VoKJ85ZyRW7HEWobkdqvCQSys",
  "key43": "2BV42LhomC6rVL8wtRgBceEfvtvUBqNsZVHMcFe1Q3SRiatqCPizrquaxXXUhk1HTzE6Uy5ef7tNnLSUDsLir48A",
  "key44": "285yc6ZXSNpGeCrCz3WeFgnMZyXQeB9eXJgXWrnz6SGazQWpMaUoLs8owreV4LkkQCh7H4iKh1UNdHxgUJDCUdFK"
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
