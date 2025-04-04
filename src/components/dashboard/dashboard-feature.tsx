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
    "2hGgKexCWQLbgumTrbgXtxYJ2ZtdQ7C2pEwziqDdbtfyreps3fsCBn6p1BKS64jzzoNMbZyQax7Jy3hZ3uCePnpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N4rEbsbtM8XmWkipsHpVsP9XWfhrbSQ6vviJXQPXyJPPx2RZwEsatSMt5PW4KaLnyWe3GrtxmRamBR8PuDCLaqD",
  "key1": "3DRZUVqnphodD1jFXoqyKtc3R81jE8GCGFxu3YcZWsvz2uhYSSM27CmdU5gw4uUm37HKWeHhFRz5yQnhc2JstGRF",
  "key2": "2QK3xeUDgGRBbg2VV39vvUqbQKCDzTXbzo5nAvTWdUtiTTt7ksVgE4VjHN8Y3CQPpR4BeiFsd1RwPx3aC9EZHTgu",
  "key3": "4awaUGsHMhnZHBDrp8AMy36HjYP2RxqoU3By6JHmv4CZJyQ5t1VowVecgFngLw1qXKVUQDfb99XYSwU214UkLMr",
  "key4": "31oiRrsRLRm73w9rmxZxSz13FyohAtvkEJc2pmXFw1LiY5kNnvGiAS24AJbCkovDCrhkvrcFpwEv3rwLVX8x7PrZ",
  "key5": "55ZXMVcQBLawcLEf23rpMtSRw5Z82eNW1dS5mTW1rqf21UaZYQyJbcpxan64bxpwjXsn5SMijpUfEuSMrFdiuhKU",
  "key6": "AxJPzHPKM2BzCp9sfQ47nc4Gg7fDmqwRmkBmeKpkFyZKrfEnaLaVXi2bFEYsUGAkcZNZdB4b2F9yYaN4qs7gvND",
  "key7": "59Vreg8dGZwTKjDhnhKDNJtRs4ei5vSaejuAamBZtXPdw2CcLJFUET54TwNgpHLRFQ2FVpN2Xgf1V94VmSkTXqEB",
  "key8": "4wjsH7ba8f7DG872fSo6CDC2wWzxZAk94CmkjZEPhGk4NWUCTsgyKcERsMPvPjNQkuHtoHtZP99JXb1P79QZGnw7",
  "key9": "4s6poHAuPEAjdkwBnR5dhpDNBsbQjDwtUKKV5sUMspBqX5gcmfJ1q8s7Y9TopG66fFWSMrNfhEVwei2Nzg66c9mU",
  "key10": "3QfWsRc5HFiRHUQ75ggvuKgbztFa1WL1ThAZca8rHvKz44UgwqGi4DDML3NStpKZBq1eBtsJVWfGhXr1JHWg4Q4S",
  "key11": "3F6xJa7v8HDpyKFN7FotEtpR9aAGtsEEgwoMzH32pEh1YTJSm4Gk1pHujosR6PJpQDeKrbVbxeB3BpmqkHvf8kx4",
  "key12": "2ynpGt62EPD1SAb4yLocWbaV43bQZMrSTLVtpNhhGCAYZakd71yQCgXFu6gjzruxXKinyvqiMcPiTut7mso1cE9f",
  "key13": "5vHGUebEiZDpGxu2MkE4BuveHJYhu53zCGJY1yq5fRgF1vQ4ymhcTXXZR9eANPWm9GMWYJVWD54MdLkBeiAVmHL8",
  "key14": "3qrwtgf29MV3pXSFKyoz9ciAVdBCrRCyPr92fTv25zodxTPfzVcbqKSMXPamsGsFJvVG9V4E8DoNgBQcTsfy3FfM",
  "key15": "5c7sD6XcFv6mSm7KnrwFFNmie4JFFZqmdD9ruFeKgzXCBqUDCJJKfYKvzMbsiAJzXRAeW1qzgcbnDMK8BKdMpbWM",
  "key16": "2VGquqwFp2WmJoCcP94rThS6Cc3GvvZCXuStWDpjWeaVj9Me4nAePA3kdCzyXKM75rQgoBonGar6g1HZYSHvmpej",
  "key17": "61A9NNJesXsJGrGULXTmjjJDkRYkHRbpSM6wNnnAqZXwBMZbxVF8DQsVbXyDZpmWQaP1us6HpBSHXWRkPtMTkSGf",
  "key18": "j5XZaiUKAsK2DT2LniUxb13rau34219zic5Fc2HhJqS6Pju55knmhxLfqvmvFSDNNw7vTS3ZwLbBs3xbjWhFBS3",
  "key19": "39UG4oXxnheFXLzuRbMCPNMWL5jrBuseKqh1r7zG5Zr1f97k2rvyR6cTzFj3H4uTM6iYeoPJV2eBL2iQwwPSSCec",
  "key20": "57zHSnrz7MgRNsjeYwK7De8dACSkiTDrhRGC9vuUhE9KMCCyib8QKQCGGM8ktHSQg6FinXVAkLKdGJogQuhbRjb1",
  "key21": "5P32FLCFf8CstNwDGSAvPV4LKg3HmpqNKomKs6f5wbRTteLQv1DLvxsT79QebRpkJ5k3xZC9BKvoSYs9rewxrwqv",
  "key22": "3fTf74H2HssNGG38eaxJSy6H4v98Cft5w7TKUmxoSPiAfqqTSv999t8p7294eguJ99VV7ND6y19j2H6Tx6wdsAmZ",
  "key23": "1EFemyF3UC61AiWSLNcMQBcwuYzgS4CgJPdQBUAjVyYBNSQssqs8jUVvjczwzEoyiyGiH3eieTZ4hDZozgSSh5V",
  "key24": "7fawF6HbiPbXYynkBURxhVBTbNurejDKHD6wkoC4LXfkauFTGxSCpEJQHL9X4Tnw5TQsXXHhY8yntD7upfTZyzr",
  "key25": "7ZFXL71r75hLRrp2c7VZL7KjpAqzwuB2LayZTDjRJxJeEn8mz2UJ9FZnBxjAqcGwD6V1MvGVafriqV5skz9nnza",
  "key26": "4KkWrsWpr9RVqPdk21kLV3AB2tEShZ3UyxXj5kPxNeqMxJHJvEobRqKk616g4YbwHYpXgUJQXZpdyLReGfFihURW",
  "key27": "2xoLjmhZhhWqxDCosNHYvZbwvdEEfL3cYG3BaBksZZ3F3Y1wzKdSobDdreJ438vLqU68C9wEopnL9NmWGk14QQzj",
  "key28": "66v3fMNNkY9tfrqcN7xd2tPetWDnHdLAFXZVLdiLgycpZtdCkCJpVDpXPGbHFq9nGQmVFUX6eq7htja3jmQdm347",
  "key29": "ytqrv8b2E5mmxy4qUApcv7dTBFxTJqyomMzLrraZaQaTotRvBQiaoyazxnt7cE9ZtWKmxdGmZvn1nW4JRJcwpNY",
  "key30": "4wVyZLXbMGvaTWpVYvn9ZXrD1YenAuPgWjkc8X1656Qr1uD8ot4oTnK7nCryXsZokYXN7stijp3R6pFS2ufTiJqr",
  "key31": "N3K4rw6mwX4Rk168Rta8rqfxoG61iVPsTqB3vmgJJRMchSdX78GRo8eBToBjs2cGRAPqfKSS91KssB7r1enHRUy",
  "key32": "83UcqJJ3kuceFNWY9Dek1b91uH5JQvLGKfvZgVoDGesRV5V8XpDsUvRuTUd7zJkesk7B2vELAcitVsFbU7Zg84R",
  "key33": "2JdpUxbWB1ELpg8gwytcAttczfs5zy9RSX1agfKggRLDmow2DXZdo2ZQameBEt5nVsjCxsNUH8r625phfPUsrXig",
  "key34": "2rqCKkGSa5i2E7uJf5Zvq725oH2UKqFzUqYkBHPTdt49894Xq9Ep4zAwCEN4w3XcDLXy3cTUsA9E4YXh5hawk9P2",
  "key35": "3D9Tu4zPZs39QrYvU6JoG2NzUAzoRzBG3MZCPQCyXmS8tQ6zSD79RTFKQLEsdhfweHWaxtUvpMq7AQQBQFrUnnF2",
  "key36": "oU5tfj6fSytHs1kAjZGWsxFyhvXyFnRVquDcsU3xbdGqZakGHi5GuFndNQdMNMo19HSBXU1PGuDhTjB5qYQifw9",
  "key37": "5kbpuwbzBrGbcvkkToS4Mf6tcV3YWE9rcBEbhu4MK4u9z5JTkZbDTno3gDXNcWNWVRHBJddEiDkDbZnyoFFPFtHC",
  "key38": "3CT3KHNehjfe77ipeF9TH2qCuq139RwpKxAPnRSHGZg8q2HyFP4JxTp4kXbNvcJKktA5xjxtDk42x3rzniYdKGCf",
  "key39": "hZY391L7SMSKLdB7YRxexvA7eggy86VDH8swAUKaNzvz2be2juuWhiMohsVRfMK5r6rNyLiMHp9fSYWEYzm3g9t",
  "key40": "4GaEsJuhURc9ttP4HSdDCWp8qYBptGjYi6Sh2h7Jrgi85aSr63WPVCtd9FDcWFApv3wsy3is1PREyS67EY3EzGET",
  "key41": "3bNt835No9rHVPiS23ztoZCBjQbvwKLQ27SDcjrzwCcW3KQU9ntMSDRteDCoNEvgfvtsDwDq5wjS8hBVzUZi2paP",
  "key42": "4xfCUUQPobQMYQqKopDQD9imvpXjDwBjvu9vCtUn6UgaT4LQydb34nSe6owA9es6nL5iWog8pbp8XnzyQfQ5AkJM",
  "key43": "qsFxtu9niPwbEaSYGQrPNyy3EEEEbJmHWWm3fJsTaduNLrzz39hH39QJcQHzcMa8UQdUUyJ1YAaWuDFt4mFXGAA",
  "key44": "3jp9QD15D2qt6Trkh5QViDo6fWzfkoJ6Di9UNZS6xstgemxGg1ykU6kveUCmZjMQC7671xGZFZJ7Zva3A6JLyWZc",
  "key45": "A9nEkoBSPLBYnhqV4bPEFa41MNCDtVfTYdhBW3GxTPEf2QGGRwqHF1YyzsoURpBw68MYrGRLd2vcYdJwTVz1Dwk",
  "key46": "45jrqcUvqS2eeXocWqVyTuZfrxtHSFXF4hUsJBpKGB71qTwkpuY9jX5cTcuGnyTfLBmyXiuMy6tUJxovwMySGMxS",
  "key47": "4w9KjEvmRKrPGPVftg6RCG8edWBEodpkpEAtFjcsebGozsqwSqSUawEgMKLrQg2vAMBVxn6pTmttXQ1tMDs4Dgbd",
  "key48": "5skKThYGTLu9wB5RwC52shEb1BdVLxqgChmM1URSCxw46MnLBKaiYRDC9wYeSeRjxAtkXmU64AeyjEHJWEMnSR7S",
  "key49": "33cBbPtCRF1Xj9ta61JvJjZg5nSx6JKbfz1NDPKgWUeDiyFmdFCkmznhwGWGJP2PVLXQHii7xd2PQ2wXneSmGhs7"
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
