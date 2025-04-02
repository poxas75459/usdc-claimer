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
    "36NMieA2FS97W6X23pwfWTLvonzBtgmt7RTZChLijxpn3W7Lnvr4kjhcifzPg3A5jfQHpHA7BZH6jdVSKh1pqJzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RCajqFNFia2ESYFfnTHATz6HqDBvSE3n8jtDCxc1XZXPrAiAH7KYmLpnTSUXztLgdTp9SEwCPBmXXxY2vSpwtYg",
  "key1": "2WmJjzfTpPUqJsiR5gk1N8mJFQMVdWwxd1w1t33NZPC18ygAMyWwnwH6LNK5Mu5FooP8HkP98KtM61yNe4bAFs2t",
  "key2": "3aAKYkwW49N5siqbWMwemWrL1L5emz3e4U9dimM5969m5sNcDsamEtkJJumT9tiVcrV8Ut2FxX4CowFP6BK9Xw49",
  "key3": "2stN6PciL1u1kqtV2ihV9g9BL76Z77VZs9cQbt4HKxNqtJLYAHcjDCrzNsQcZBqrPLC7R3P1nz6eZeWQ7WBQTMrM",
  "key4": "2R2wLUaCN4DG2jzhZBm9d2iUALHPJNRiY1Q4VpSKJZ2tF99QkhxJsEjEho9DvcWDEeQZEU2xsNCoWn1ps5vUUa4S",
  "key5": "3Y64ANKE9cAMfxNw1eAcFU4vMCwwjCGmgkXxDxm9MjjtaAedK178dxXSubJpKSFjVn57sJaKgbUBURcDtJqNXtWD",
  "key6": "67Rr9mvT4MxjbbWHRdGMNqUE1WFMH4NhtgH7hbC3Esqu2UAaCRUNwx4XAndyKzrWUHr2sK6eHBAYdWcxcntxGdoa",
  "key7": "61wVmMvMFd6XNZgweLm6NP1vZB6XGKRP4ChWeX5nWVqZdbLFszUCJnZ3CXxvffC72GiaRKU3JWaoHRWDPodnmES9",
  "key8": "3WjY2wQhxgpXaJr7rYgTXDAzMseJqxC97Nws9SzAiLVuaJvKCBhsMgjqBRxfuTBv3zqmadvfNUeqxJZyksA1W3A5",
  "key9": "4quvoKRtYobK9rFhyV3bN6y9EmAqbqP776uHifGXvK3WUA6WjFKoDB1GDVeC8Wv3pryyNASkvyg1fACcLynwvu2T",
  "key10": "yZg1jd8HxVjn1yGaySaxrBoHocafg7eAhVTunxv9Rw7yqbd8GuAH1prycGsykhy4KrD8NEddR7MpGD8tqA6hkbM",
  "key11": "3gmW7vp5hceC9qAb6f7zRRK9UprWowHFkYxpNvJp5yHfBMBRJPbxEYyeH1FXW7PpsocZB2zfcjkEW6CBsZS2QWrX",
  "key12": "3iHUqb7Fq5s4h3rD5RcvH1qHS9CBXxTVPxMYtgrd95fTox9rDDqfUdFjn4TP6jJCDfG4VoLn7SQVwmY5xhgRpGhT",
  "key13": "3YxKXuvMtDdJpRKFhe7fhwQXXf7DLVYqNzhUJFPkVhwhYMoPJXeHr7AJZ1NcV3QpZBsaHFyZWLWNRMhjQ4LWwFeT",
  "key14": "5SpH8mtKo5A9PhwwYLF1LigDNESpVRSMCCmijTXwRkHPBd2W6xCa6edJEKFrwbJ6s4NGQyW1G4TMT5GaFLAAmYKt",
  "key15": "H84bio2EZjRMNJkXtwFtuvTz5e6zAjAHBCFSwZSqj1ZsWDSRQyqyMMpARQy6b47Upx1rfEwaqwTw4y2cvJECzPL",
  "key16": "3mAYPdTo3m8sa6ceaNQw5rRj66nfUBE93UKoA4FM3Fuk7Jg4C5XgWpZjmc569dJbuoUJfaKAqXo9GeGz2u5WJQJ4",
  "key17": "qy6dDam4M2PTsc6tLoRrycrEe2stMZzr1ChGrKXrFfxmhCPt3s7N6PSGstGofh1GMhJ15XhD8ZXTDUkSXYKG9F4",
  "key18": "2b6Xk7yGkNsxdewzM1EyFDihoG99xDxwSV22bLa2RHpYyLrtRqn71DBpFLJNk5Sxkz8CwUXWy9y1vLYKvfMTHndz",
  "key19": "2sAb5AuucJdUrM1fnYfXUtXA1xSVWvd4W5zLq71Gb2vYk58k7TEVJ6E3fWJ8vyQgAGM4Uxtv5k8Yyd42J4wpLJ9Z",
  "key20": "A7pJYYZ6QiAGVUmdJvdQrfEmZeZQQbmmoDxEWp5qyFcQNq8pw7mBzouiyxQFc8ZQUd9Wc5uBveKzt6Mx7C7URdw",
  "key21": "2Z6ffzUyj5U1SoKARmBvJVdBU6BnjuGJVGZSGciy8SCJJV6BjEjJPVhj9f2ZCLpwUR1RbTjFPZBZUS2xJHrV7Nfe",
  "key22": "5pYQzyYdSCQJsZTAF2mbZDv3UoR7pdZtQKugRKCmTFqtaZavZ58MPRHYWnqYvi8Ux2oN614yEeqVzLzjEoXYdnV4",
  "key23": "2xH2YxYeHErLmh7oC2X8cZqeAKUNaeUkuWhzzcJ3yfZRfXggQSN14V8yNtQkzNGgyg5EcUimZs2kgWZSoyg17f8E",
  "key24": "UDcQN6pfQaRCKQmGa2vPKLddgJnz9B9Goc9ziyQvmoKef67m2G1891S2tMGrYE5PWkFjNL4pxSTe9eiqCKreV3e",
  "key25": "4Kbk4Sj2tggxBoW2wTmWoK9QHXndstPxbKUWtujzMxPsrGvaqKHWvASynXp5xiicBkbxi9jAiwwN1Gt6SQhe5aQq",
  "key26": "2vs9q4VjFw7Ht98THGr8CRSEkWkZWwj98vUBsdTL6SZdZ77Cm3ecaWt83m8fv7ywVjcQn94ra5YUkYngPmRnTFpS",
  "key27": "3rfHMzMAztU5jPdAEdJuGjuGa8dZKTqWBwHBFLb5ZU7TfGYU9H3f1u9t732Xwgmtfc6EqbTAnjvtkGM3CHvvyLfQ",
  "key28": "5K67q7G3ox5iZ3GYkrNijEjJCcd6XvUzaw36qnG7zyMdne7uYNw3BuUoY4dwYYYNjyR7oauinmEu7Sir1drvwfxM",
  "key29": "v4WoQdAQdhxfXknu3VPFd3zimGe65tTEP3TKA1qJScqKkqvUQRBxUdhBKNtx4AYK3WrTTY3BuKRGfXTAnnLLvh8",
  "key30": "4ZBBF9yTWMuwePZRoY3iCrW9EHEtiK1vAsbzyguiDteYCGPLJvq8pRFzkM5ihBFE6fUcHTBN9dhN8rtUKg2h6EJY",
  "key31": "5vUo9iMS3ZcCHSii5CAYmZ8reZy38eBpBecZDA2tLznNTrXzCwoFSvpCNPxWp3gmLdsmAepVnVCm4NHjFP9Wkz4S",
  "key32": "TJ17TvoxgyMhVnVugAZhXUevYiYaZ17fMZhud5af4vAcDCfsijjnCmuu6MBWenZsZ3ViVm7NuCVjG1xjpFUhF5A",
  "key33": "5uGHFs6hYfp4pCQ9BuAuFtVDyYB6QP1PwbEagZvgTnNifKnwk3GnsAuHKidDPQmUr2uyxYtsdJ7KjX1XMCXY8rZk",
  "key34": "2TVmZVUYXPpNDruRvVkce6sH2AcFZLHJ8PSf3CNzdUquASCgz7FFhphYbQNgy94VGcG75WaYz3RiKM3k876xiesK",
  "key35": "18a58D87VbAzG4pqBgNo1sb2RgB5jSpRFpo57KPUGzPdvaS5cWDK2Ts7xzzK28iXweRtMoPdbipU9SHcqH6qYLQ",
  "key36": "4og6kaW5JdHNE4NrhtaHPAQrm7xQjKvvr8dMnE2okYrAnTmknZxVn6Py4QPCzoBfVTAtHty7JhBDTjni6BSJmnv8",
  "key37": "3VydVj8GqvTpRd9HpAvA5R5TFjbo6m4Y4epH7vSFtsSMkJZUQaiN83TkX1FEpvkGezBqemszQoN1XyKA1pxjcEVk",
  "key38": "5YZw6e5SoPKbC2PwYHj9iogh1gefg47h1LeL65NF73sPfKdtyHKYTc7vMFPhSstYJV14qHp8EnSWUfCfmAULVXZR",
  "key39": "4BdufduGnkRGPPTF9fQd1aoFjZKBhibQQjiTKopEZ5XEFqQtrbdfoWMCgWoxiw1utMa8QhUZUanaNcrfk3Hzscvd",
  "key40": "3KUayPLhgK6LiNWyJ9ZhQo6ZpQHXqaFSyUv6QLLxeUWYydtUGVNGJQrb6tK4oBUk5LjmPFS2XyKY6Vq8gmCkdKqD",
  "key41": "2qJWvUaZ1FqJii6HBwcoGRhXe5Sr3FcvCTpLPEDGeRF82GScCXtP7MmzHMfbapFzxgY65aeWNHBnEFLyG8GZAHqc",
  "key42": "3wwrw7hVrNdQrJMBky7Zhsb32LrNV9JbJZyo5EsNLCtkxfs4zun9zML9ShoEoQ3njyo3DRWDGg5pxZVyidTEcqat",
  "key43": "61JijiUiCXUv3HoQdfA9sJU1xudxDWpNdSSRozQtSSJYrQWoGCrgBfrEwz6UV5irqcxePbkddXUgcBW62diY6sCH",
  "key44": "2Qo4UCfQeiSe8Z2dH464ihhfjUSdpKsLnhBnZL1x3bcubRftguvB6wE9WtoNxAAjqw8Ro6TZVfPeRVbdDcvqAfve",
  "key45": "R2G3sNaFYfTbCjKSUusyt95wGs8AGk1SbPCCjsB4DMySMpdkMGxKtSauyaYAD27GYCb4kwTg9T1MegEfdwUvsXH"
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
