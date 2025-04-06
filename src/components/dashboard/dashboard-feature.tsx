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
    "46mYpx6mHqibncyPvPSgvbSM87ExjND9e6izB6LHoY8kHdaXEvtQUbozPGr85zxa8VJVZRG1Nt5XNUmcFJV9PpEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3obNb5dRjideUmcBNztAKq67gJfUbhtSJkxYAxvt9KPURzEVJ7fLJQsxST2LZZ2QGrGw77dqG8ciJffPBoigv2t6",
  "key1": "4McN6U3PfRX2QcvXtmrERVw5RuJsJFb5VjnfwwWxT1V9d9MHCTN8KcEbnfRBcuJDqKHRwp9M9z5M93vu2rhKd4eR",
  "key2": "3XUZLDJXG8QRnHr8orWFEMNstDsEUfvgbJoZih15TNbbNsiiSaX1jd5Ape1Lyu7ea5Tw7KyGaDXERYB3N5EogihT",
  "key3": "4GYaxewnfrL2yEzn9h23fcrht6PJkiPpHS251sMgZLiDv1FnjtNESgPuB1NXoTfjKy5itkmi7oGGCM1KwZPedGJU",
  "key4": "43bi5ibmbENUHLhRsEfE9UFCtemZXRJ5J5kJNtZa7VK1GXAHnxe6NA56157GbZzYtxynup9tQjwWNSqg5Rascwrm",
  "key5": "2DXkMTB8EGr4x2LbPVCDiyU5xQbkKYQCgCyFcAiRuHjFuiiLtdTe7pjpVZ7V5PKsKiJBoHm7RC4cV54m52B7vcdL",
  "key6": "55Wxdja3RCP4MLMLYzscstZwvv62X1dREdi8hTFzPBEZ2XvwRDqGGHPMT9cXpTd3hFk8Jjfj31fDsPfBxMS62bZQ",
  "key7": "Sy8r5npeu8MTNJcZmmDD8g1TG3NR1bq1Mj9twtz8Hm2XBTvssM7o3MQLbm5rb2vQp6pSsDySSHhVFDRRbRYfWam",
  "key8": "49XPLwtcztjz4NpEwUZGLVfFDmXceBi2btCvNGJttbMkFX4So53RD9jnZFRgP3EX8eRRinetjptowDRCS954ky1v",
  "key9": "2vC8gMtmw7Gzy1XyJTWv2xvpgvwtU5ATaiMdt41KV9BeYHcsbAKxV9winjWhTZ5LtBWrV3N1r6HEnKgPWjPneb41",
  "key10": "43gE7xd6RH92j79tCt5AbfTtsJSkVjJMYBxsPAzeF2aioWQ1a271C7hFVPMdAXNxWZttXaqsn13Awh4P6zMwjZrr",
  "key11": "3yNQT9jxh82WZd2jXGnXnMUrdZp3UVN9TDP6j1x5azRw9VYKBx5JyvBxczJ59QuHQoKeXUeU8Z7TSb3kLEVtdszj",
  "key12": "5qnSuJ5EwBc5qKKKWLS9zCxDdyXPwYk3JjRw3TrLJ1bxA4Woc6xaqxUbY7FRaGm27dcUWmjYuYt9Ur9GcrxBwy2y",
  "key13": "4D2PHPhMVoVsK7k2gYnX3k9ckShYCPZYbGvFxXvpzFd2DKsCQvy7jrAWmMdMSy9EZXmdSnsu84L26of8EpHM3a1e",
  "key14": "4KZSYrEaKsdFMnMw6UYwy4CwsBoKFFnHoGWqALqd4Sv18jC32wrXE3LQUQmKRYqVsVDf9gHJxWLCuEZw1EVTbhvh",
  "key15": "35dzpTBAvtYYbfYwH1ecsjGNQMQTpLcjLFVAqUGU73o9jpXKNB8bXd3EWvLSMLtpY83bdUQDQwxWBAWpWqGq969S",
  "key16": "3AtxQNNsNm37ujh69BhdKpyoTN1dyykMLM79Hpn1qeGHpHN7NtngpBryVcEoSCw6bexyogxHRZoTLddo7zw8Beii",
  "key17": "3LU6kFwhaoUbFCgzAVNAUsjYc1gkVFnjieGFXzR8dfh65THf46tqDt9vRUzszu5HtCKNRwTmxSFKabom4dCpHce2",
  "key18": "4XJzbk76MVfb7L8V31FE3EEFKURmv9MPMRJq5bKz2PqKtADns44hqoxMUSD3U2GCHFTR1DNV9YcbkR5QUnHDsZfp",
  "key19": "3YBDDrNS5WqE9AcD46XYqHmu641hUhVtSPmhwiju13eQA8JBVSCj8saHV7ki89SCcQxiYgBBP3ainXdsQLMunAjK",
  "key20": "2MPtVs9a3bGyYdVk6fSmrTxSswbW9Snn3TZ42AdELDPXahRNZMztoLMPMgaNDJW2LQ4HgosVDGUCAKxikeiK2vfo",
  "key21": "293a1MCp9Ga3DcFgdDFqNiU1HAzP8rwgqiiV3boxtcwhB54Vij1jkLzPby6UBBmQU6stwGUxxetkbcZMUXrcwXTJ",
  "key22": "3Y5jwKNbAYXTEsfbmscFZhpxFBF8WwHAjMeMMoMeBdcgu4PWCfPdKBg9pJtD7jLeCk2HXcWygfdYbyqpgR5cLEJe",
  "key23": "38u4oHRH3pNTZjGgRWga3P67benG1GUugYfy8VuLodyRtgczwybLe4wVpBe89txXBqWr8P6uqmyt38RUmEebkPbi",
  "key24": "3BtMMt7mDw1YiejTCPvDALGFmwDecgDBBpfB7QAZ1jCtZ1DDiwa5EU2jcoG64oUhqWoDcZvVwUrNguXCHZnHAspY",
  "key25": "4QxjyrtVHnBgfCX8sSCZ9nbFYRZxcVPdAvgyBFd4SQvWh11kG9SpJiXWxPWoFu8B2UScThTCa9xFGTBX4SQ9cGAN",
  "key26": "5eFYtFKBnqnMBCpLu8JTTg3TkMXG2hPyfLP6ps9g3ks4Bqb9nUjLrJZoLCkbeRDyvCkXhxfP3npNv5hpR36kaanh",
  "key27": "R3LNJRY9cjDGH8MHu6cXy2EL33vWd1ScugLdhW1YZrZhzezkiUJc9YFsVf3BSjRAM7BwQLhXhiDAcc1ZRzGRv5Q",
  "key28": "3tMWC2Qg95AsYjXEPjfiHy3sULfURnLouyNZhgvinMPvfeT6Sc64dH3YrxYVK8Drj4JAezNL4w5ikj4gQWr4st6x",
  "key29": "5E5MHsf4LCGJnvGZJyiwRqTuvfnk3mcYrd4W5QdbR12KUofUxqhEyodM1CeB328JN3ZaV5u48ZeYPYAvsPJc3xPB",
  "key30": "2TdoYadUf4ubNUh8SP412yRMyuPfSyEqiPWxgd5g8bGvmz3byDMwvbh18GeoBd9FncejxYjVupRK5VJokgeS6iDW",
  "key31": "4kSZ4Ap84F4QCrfRA4n2skpqopW8npyWqUMtzPVY99HJtYUDGMYsPf6q872mvoeBrfNRQPy91X4BuouEhijupxc8",
  "key32": "5opjXW1ADWsvMHA7uzuwXacybFJZp8d5C7PqBsXJZnAYArg81RMh3PvXd7h9hKdPgLfnMKFfP7vFMMuSY7YUg8vZ",
  "key33": "58uR926Et3y1XAgMfRQgpU9WD7XvuGLN7FHZhM8rKQ2mkxkWd6Z6wpMJvYF1PbuBCDh1vaNGoKfCvFQRFuE9GLtJ",
  "key34": "4jdBH9idLaQnoMJE8kqgSYWp1ZfRMTY6op3RkNLTdcodiFaL5Cy9fYwXyknHSWACDBg1sd2uXAxoPYsNHFaGMa2i",
  "key35": "3Y4fYmSpVmdue4sGeCpm3ZJMEPJDn6qLbDUXVaHsoMBsCrbQqvoosXoUcTcq4QSBCeb276m22kXRxr6Yw1uUo37Z",
  "key36": "4mGeXe1KjZA7JmtyKx3Cqu1DCiKr34EtKZdiUzy1FeC32iTBYwDqabHf7Ss549N4Z6xzBEJnX2eZQJajKT3udamx",
  "key37": "5PF2MBLHi4BJhyrx4HWdsPvzqYG4gN984cjxYMEUYV4XoVBQKkZSTSm97FqPBpDCdetrAH54bifVSDnhP5mzU2WC",
  "key38": "3rExAXiNWmCtax7vyg4VKLsHERrEayn4LDAN42jsVcWQJeqZypg3oj2sskmmw9qHobFc8C5fCWs7qAhn8DQF9PiW"
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
