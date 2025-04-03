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
    "58b6rAfFuP1dczPbqPsj2rE6yeMoKnMJGehuEwLapJQTdNEK8EfFEgKJMPm6MDbtFWgWiVDVyQsj7Ms2h8uKbvuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ej2sg7cCemH3kg68KqR3zAhxjYWYwRrmb1bz1uNgX2UnxEkrQ4xGKgHEfxwTkzSPTBj9ZMxCejmtavE5CJqP68v",
  "key1": "2JpCeBjS1jMcpK9TYfSdrBTe277dhite3Bx6uUxV1pzw9KaUffSK3P9Ef9mnrFn7ThXUDkrwVtpnUmkS4scgXcH9",
  "key2": "62eV2q73911gze3XZM4U6uiKDn3nDDGoW5Gg3UiMbpHoiuuUZmo1EXc4fwwXSMqGZFZx22fPYyiPk5izNTTUrstf",
  "key3": "1HbQpiw326kG3FDr9JMoWfBz59tH3mbphhHTS8rBC94AAAc673oPPbcDnCKikRJSbGHLQjhwVjRChhJdWcVG9sU",
  "key4": "5SGRADX8pB38UND9KHgN95mWQndkoifD6a68cndtye1U6j1MwxZsjaZBzEqRRBkH5uCXiXGJ8SvmmytJdJAmy7An",
  "key5": "4tbpkxZtsoKmekv7NdtdKeC23xjep3xfT8po8rdUJYYbBuakXVB3eLUSyJ7oT757rWNBbZfFAJwYQs2aMoHVWGjh",
  "key6": "46mmeLr3bmxiXqLNSa5PUQHAYtjHFFaDNiLBM5KJ23gCzw7dZjokEMqf4LZHtpic57ahcRQLfdnyDs5HgMXwRRZD",
  "key7": "3Wszw1iAvThG5P33jDnLwCnEoesRozS8aY1M7civq51TrSkDJ5epehLkDjimj9Zq1MsuEx69MbSzuNbznmxXPE6X",
  "key8": "3GybkrtoLcZSQPWgE6rQAC1G8BDaYEnhYNrJPQUeg9kMZmmRgmuZAsiWBjsqL4dd18a1hcKAxu8qnqf2kXGAeH8K",
  "key9": "4hEetaZ56VjFEhJv7Wx8tsfiu413TdmbUQN9jLK2rKgGqhmcindkKjjnopwLk89MRGgSCxH51irjFAZDkSodukM1",
  "key10": "2N1fGRvtgVqeRSd3CX7FZAEEP4hqS7GpibVLTy5uPDhg5meJ1k4kGqTqSVLhBzh3uKkDabV6p5LUs3uQXU3w2WH1",
  "key11": "5eiwLZth2uvHHe5c9Vcm1wgRyEo32tDe7SNuFURp8j7NtNnNNRWQhsvs1e2kWypVKjnBZvtfqjyXbKiZyCUeoFNN",
  "key12": "3sp6x19nfF6TrxGebGsKDJuS17q9Sd1oA5gJcpQ4HMG8Rkda4JcCZwQwvLS2ruDA5RhxWACRr3S675XWKat67voS",
  "key13": "29PUb1ma5hNn4HFfCeTYyoY8wYP8Vrq9ykB5UvFK39XTiES4JZV7h2JqRPfMALct4KdvtsLRiCrP4cGQnPWDduQj",
  "key14": "3DPg8o93X8WYGQcwoxYJu6jRGE733EAjhLkEZFk554oh18NqtJ475QPzMXsHRmvn3dC18egTp5wuLRPYhdarSGAj",
  "key15": "5uxzf6AL7dKzWVTXnTNNA3Tz6JVpDf7Xfjr2GJCmbB1kbho3s2gFo25bQWkuXmB95z3PDppqqnmoHAZwmZEgSR2U",
  "key16": "3i3d7XstkbBdXnPqthRjHuhrdLkYtFrTo94W7cpXrKFmSit1Zkre2pFpK9HKdRxUv72FAghnMNWTLkMBkkooiPzQ",
  "key17": "37ERjfaKqJAeiNxkGb8oxotKjap1ujnhrMwmzG9oBRStjtZHM7yefEJ1UKBFjfdPZeazyb64nUQiauwhEyeg4P5n",
  "key18": "XXtzWLrYqfKXn7ojy7uhY9DqSDKr8sXm5ppg36Dbre23Gpv4frH7dpEcbg2EGBUFUB2ivYqQKR8rHos9XzgCCi2",
  "key19": "3TSNJopvd8Ezso4VyV8yoMxTrkMfBpYB9C1ewYsrwZ1kwLBz3rGPSJiuejAE2TxEakfzMDLkobV6QPWM9MF2ibJZ",
  "key20": "4xMNgpjpVYrhpQtTRT7UCXBTPJxcsCYfZDKwdvTytEqYKTQi9w2WTQSFzBjXT6AqdBg2Tc7oKAyxhcHJFWxnongu",
  "key21": "2zqiag3Utyyi35EQYRqGjb61GydeTVYAA4BYVXN2BbmCbnzZcxNVPed5FeyXhmTbCbhUB4EkKTmHYRDpAy3zk45J",
  "key22": "22MpQxcMsmsZVfya34LXmVZRGpFpS1Xo5PWWTTroiEvzi3waqeBMdXVkDJh4JrKQtdtHoA3E4BYhmYWCT4oj975j",
  "key23": "3D9keCJaR9HzAn3TLwxQwArhPDhLMcY53iwZtd2Sy5dxCwcV7xLBNK8SwZ7fV9Px2Ey1rBPMJzaAYp3PRK19kyEj",
  "key24": "3KMk6Dj4aHaqMj58eJwvBDaMr2SnczywcWSzPvLmREXseELPg1Zms2A7hAjCem8LFzSc1vYJ9Pn9eWoHCH5jCxeS",
  "key25": "28XKSXuvbpZmotb11MhHhR5kiL85VXj3FgynFh7Q91DmaztJWWLyciAGBaXeH8o11TE5N7FipCNqD1aPU3L9mzcL",
  "key26": "35g1sy6F33orQKX7zZfZxzkaraEe3ZFsP4t7PMFMH4VPJV5yroeNfi1j3GT99DQtz3AQcTB2muynqCG586ogoce1",
  "key27": "3eETfWLqZ1FUSYyBhfgUPoJSsDoyNQTdcomVqWcGaSGm83jMdGhhFGGMVULa8p1DX5kbvQ8gu2q56cRt8w7jetKm",
  "key28": "61rHPXUduThmm8novVxb1vyoPJ5UzJ7CGG2fM36PCK2NWsoC7jMWGr7iD5aeVQ23EVehWXXJ4tWeB3DpaQfzKk4V",
  "key29": "2toQ5LfB9U5tL6YAMgpTGpHsGa3AUyLWfoPb8eKhAJ6DGMJeeXqhSjUbHXhUVX4Q1rQ9i8iV6Lexoo1DqzJSjDRu",
  "key30": "z4ArYUNSN2BZ53bEY4KAxb5PhtRrQJGphxz3xH2diwq2G83xkxMACLDUMKpyVxSV1xRQgQRisHa13tFuVFHV4MU",
  "key31": "43sDDLrCYhjco4p6ZoKH7CgzEWzfe7t9cZLaXNZ55yFWfSg8XpJWjneNe7aSfFTe4dyUHAESNxkxxX2bkb45PmCc",
  "key32": "4SqLMsM4WyBwc3D8VhZh6hVmnXSfgypKHTPwtNFSEdVRKUmYG4H8nWHV7edroVkz9UhMde3iZDiZqmMifMXxFRtf",
  "key33": "4QfCxaoAZevd1Q1k416UhHXu2d2wfzttV1hpphPhWWHheoXX368Xtaaiu3ztEPWdvJxBgpMdnRgghFtgsEgFfbHB",
  "key34": "44wH8fjyaL6uiduHx2nE6iA9kCWjprsxk6dVT1j862FfPiVMRRiZJPfTJhDFx2FXe9DNHSAvgkVXWuSfrJ5EGqN7",
  "key35": "2n9wLnXS5r3SkqSqzvHh3pXiFrPoj42c2b5vtMFy88r24Dt3kYZitkep2KovWwBXTznMfMwqfwfySESmD2RbHQMg",
  "key36": "46jrP1Txz7Vhbxo8f9UEDHLE4Fuz5fWZBtxGZ5Prc3UjSTgF1nnGuRubTcqqWEq8fWvf8aqwDVfy7AvTLkFpxRdd",
  "key37": "4rY76yJZ1SgjyK31P2e7NEJMcKLUQ9Hmd9KU5mMRBy8SjxPLCLh7PCyvPLBNrx3dHYDJ4aENzkS8Un62JRYn1kZi",
  "key38": "39uc2Fo9Uws3RBs2cVp6pF4JdzqpPwPf3xcGPCNk4gh1tcnmFBgdzpVB6Vk8NLfWKwXwXTF9kMWx1FvrCWnAdLWG",
  "key39": "2QzRx4QaN8Uc27qqZiQq82otMgGHrqc8N4dpfhfuv7HUmnrnjqbewSQPPhj2H4q9wHwWkK7HwV36Nii5chHVTMRb",
  "key40": "66aZfG7pV7rrnMWYXpBEuFVBkCDWQ64R58RTX4QcCzWAJRQtwFQHJrMzr6GSxJ8UFfxGVycZtsxoMYBbiURogcii",
  "key41": "K46K4Z5X9NJV5sWFG9K1S3J58m1RtrtMzn8vKovhYabbxg2sbC1x96xqwjtMtciNguazcm4wDAXAJM2kC9yVaLk",
  "key42": "4UMM216eJpo6Kui1y9N5vLztJbnhqDgMPgVZTxwaNcHUQCDtsqkYTC8LH2jSfc7zP3a8w9KEcKwTbnKkws91tz4F",
  "key43": "3K1r9dtqYpNhdQQfjwNkRaUd4bHm4XcwP33TNBvZBQmKpMTqctcYpFnRSkk9zjXTPmDF5V8yk9fyUfCXHMLtoMPc",
  "key44": "5ctAhaspKr2Q5LwtQq7Fb62wbiuajXQTQkuNPfB1dZZQ1amg7L2cWW6m63sjwZikKZZzmcsp15NfoXvnJDn4dVco"
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
