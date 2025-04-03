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
    "3g8aKJTcR8iaSgtJHbmaDEEhWg7n648U8uEASv6Gvvj2tN6zw76a7eiHoycBNm9P1Bw6ewYW26j1Xz41reSfppxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V79hYGAE9K2Y86R3Jq3uiapmCeSq4BX8q6XYvmqHGiirtPgML5CA8Hhhqywt1RCYo1P5gMfEEBCu31ZsZUxa1Sw",
  "key1": "M7NUYexCP66DcTvxwFyfnTCdkgSNPYgSgrYBekF9pmYySHUqkZRsH4q4XsemEWy2wctbkgRU6J9WcMMTdRHoQUX",
  "key2": "3eN8A8V7HgeDEUkTsaNZoWUsjaRVksGtPy5LJXWPg2gX53BPQ3hXsQJLNP7LPkwkxobMgxiEsV71firoYCChKrLV",
  "key3": "1KYsnMExLKLLfnLKve3W4318rEvXHWshG9MDCUGLgdUBeHp7F7ZkiKznVwgix9MaaaGBCanPEK4eVQNtwJ7zhkR",
  "key4": "5aH4QPaVQFpYRxwbHAT6f5m83EXD6NGbwEBsxTPtd1rEFidEuLqdQNz7WnoBf5s3hvvy9uZKY8jsSrVPJJHoZUHn",
  "key5": "5ug1Sxs6MWN1YGx7X3MYEFPEM5Ef2X8XH8Cc1MiVWhdq3f4Jscidy4ihEycbc2gggNxPJu2TY4UFkeLB7XCZ7tEZ",
  "key6": "3gLCrCehm4PT8aMhoEL7mqJ3vfYG834XgvVBAfiJzfcGjmPFEB8uwoyn6qinn4YXKJwpZFDST42j5x3GNqnQPFNN",
  "key7": "25HoJSKH3fY3FhYJCcWDWKEGBn9yHbqoG8vQbcEQ56UKsFBA3fpyTuPZbnuESnx1ymACF85BktNuMrpdLgvkC41x",
  "key8": "4T87aDYihEGy53351ePRzdaVmg5uxcKxMYWkdt7ZEPXYUnjgpyfrEkt5zo7vFT8zUULuwHWx1kbRFLXvR8LwUUs6",
  "key9": "3uZC1oG9ZZ4rFcHUxBxaRMtmqhRoXzZp1cETZiAP797CpecEMgWCB771gyKGVrixqvDtZdQ1nPDrbvUJPMYydRSx",
  "key10": "5HncV9CNWEvK4oaW7joeyREJfuA1eTWb9JG5HSLJWTsC7wbBRAHFsz9cb8dZ4L76W8jtuAa5xBoDAeLoGqtG4bG4",
  "key11": "4xNyUTpzfYtrU5tf8zfXardVNFfs88xSjU3srnWUQ3P91KzQRUanSoTLbKGdDYnz1oBPCjFB2W7zy5LpyGAH8nVz",
  "key12": "5LuZmLrXLPkcUJeob8nqYH2pdBxXNUaigpBsq7csmxtf1DFRzNrmH3vVEodn7pYmUFdHwFCcLRSgKhfbYSjABd3T",
  "key13": "5VnYvpSiXFvMhd9kwNguVhmL2hxifbMa9iBj99TQam6tpxe5Ap8rr3r69QkLwdHQFWt4S7VWk535KjhsfjHbn3vy",
  "key14": "4vcbDNwXKvTFyoSNpsfhRc1sMKnd82Amx26dwbFj5yzTS753CHgwRV3iV8TtoTReTdedU7szStDUb6rKVbKqu2JR",
  "key15": "5AwqrVrt9fkcmNtTduEXKpDSUwarUCZJhx92VMfUAGogCYE3XeD8jBHuyp4zfJTdPcYAah7i2iuScomxcqrjukWQ",
  "key16": "cLmHjKSK92ujgSiBsW1AUdxErxKpzpKXrjpXXNdUMuDKnzgEY4rexi5h6HgrjKHQonnHX4vDuLdYT9cMNKyqYWm",
  "key17": "2144Pxxj68LztWDhRxr5svg2Tg74WydwR4Hv6AdSwFyfAMUtvA1SJhJaMNwKWMNs19dy4YVgAf8BjxWzPxxB8ChJ",
  "key18": "4xq83AxHAzfU9zEVAB8eHqK2GvNjaacat26i66uvQU6Ftwi6ntgYeAxWTnnWpLfFFCWsDCSLvusmGoqpdxzwVbYh",
  "key19": "F478hiWKvnaBaiwSXwBkFuDGy5iMuSdipHdAknNTPXvA7V6fQycDpLvDSqpAngRCZrY4679SeqeAeMYa5Yb5c8e",
  "key20": "5DAPfFYVPAjKWUH8p1ryJpKFmSRrSQkhYK1tTbAHWsr1PASRKakz9VviH37RE9tCwj43Ni4baXp2L6GUh35xJGJr",
  "key21": "6793fK6U2Eq7mnKqkaHMHaR7n6tG6QxykDiesN89fXqvjH6FSC4WbSw2JS2h2XjG3bB91XnPRDaV8GsuBPuP8M5x",
  "key22": "2LWG5L6JJoBs3XKa9h5HPWDosUziQv4B4eLYHzA2m3bxkByf5SyLtTfy3ha5JyTv4B4cnB3KWKcWhdnRq67kNKec",
  "key23": "3oyxM7iq3aCYhTaYNaXgsSZ6MdvY43zJXsq3KS5Gu3SBzTP4joHpQ6sqVMajAznwJ3JLACz2Ed1VKpPFDyFeQumh",
  "key24": "3h9v8hQUBgUZ8iKzBcjyvbdoCGAv9Wksiq6QNWGB7YuHK1gGPEEFvLJTufavi346wSQ4kMQzkjkzPmDbXmW9M7An",
  "key25": "JktQzB8jb1a2UV7ApRsxxmNRb4WcuMkjDBoXxsgg93J6d9qMqhxAwcfAMuDaqFw1y3MYjohYvREzpHNDQVVJXrT",
  "key26": "5jRfiN7vNz6rdTLvYRn4oVdSwmwahSp5uTuwzx87KJdwYQgJixwvwo87n6k7XTj93JsiY4TkXz1FUwJSVZceDDFZ",
  "key27": "MUpL6xmWUkn7Tdw8tn2ykeYsh59YvxGZqfrMvXgui3PxGQa9tX2vVNsJiveh4UUk8u4suRPuppuPQiSCTbhoM6j",
  "key28": "2p1wCbMP8f5ZBWaU41uK6ATnqm9rDqDYZJaoJceWCKKsq7XcxEmVScRodpCJB9fcv3RMXAz7BUdPiYeM4hgKRxuY",
  "key29": "63hVDnHfYrBBRcHi7AMkbwqfkERaPtZUiUwJaXeP1Z1Ao8W8EtFW9JGJJbEPjqXS81gy15ffidSTd9inyz2A4KNi",
  "key30": "3Jv93kfZgaW2LF9XzrWPi4Y4xWdinuon9kVNhfuXCmyKGRoZ1CWnZncUAz41kVJbTnjLjkYmWoof6KZ5rp672Lyd",
  "key31": "5hw9aAf5FSzwkLNHQ9BprAMmavSnRcXcJYft7i4iWTcR1vw6nRmebVVdm8oV2BV2de6QGmnyN87ipyfHZBoUjSBS",
  "key32": "2GrkUnzA7WCnyyjPcB2xtPTgi1ViqVMXXMvaqxLjkVeQeLbSdNvJyExRnMt2Qhb3NXzUwQP1SJ6Cpy9AraDuEfv9",
  "key33": "2KuPUdoPkwumbjXhr2Fdj6H71P8Pkig7zr2Fzb7BBxDHyZMPUkV9VCpY8JozmcEsKoLExoJkq6R3C2jPhK6paWth",
  "key34": "4UijM6Ub2T51whwP5mSyjk1BbEMvsm5R8GpU3Q7ckH2LM1PM5sfY2pCYACbwzTAkSUKVLRGGK1wM1ACQsVfauSGi",
  "key35": "4cwLLuoQCZKe8zcvjo9vBd2XxjCCZLDckYaB9gES8zcSz71TdmvD2QTGpjzMPpBisHfV82x4onsWqn7W9WNTYwSQ",
  "key36": "45r96rwsLP2dfmEqrujwT6TjEKbREH4t873eWFKJt9jLAW6sztE3azh2Ter4WJeEt3eci1EL8ojrSjfxeA7Brbwt",
  "key37": "5QQc7v1wJMpmCB2QzZWnA3p5M7tbjVrnGrCx7xDnd8h4buRhd2KBPYrHAojz8WxCnXL27Ac7WBfjcGrjtrNezY48",
  "key38": "3sr8ff1zJ5FdsGYiyrzBgt6MM3vEcBrVfwDaTiR6snE11S7RbCpjH8ZiVm3x5Nr2GBfi9iENSbZjmbYxCbComhwe",
  "key39": "2xkWHJaW2JLY8sdaf8qTgwZuVj2toG9DDWeDC2VPvFqAEWhGGmqNjWxfcrfjVczRDaevHFgSLMBuYEp3QuV7n5TB",
  "key40": "5VHtVCpyZVUyV5vWv7DDPfjLAhUgY79kn1CLfMXDjcaNYrpFabCuF3aeJK71NiCeAnUrcn8g2sZ5Z8PWqMeqcw6F"
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
