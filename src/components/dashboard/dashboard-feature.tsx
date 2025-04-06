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
    "3W74JZnFa7yjjJWadMXPTBHxd4F2qPacSTaeRuCwrYRXXPsiyqzajAPAwmuNpcPPWnC8smvQvwgFa7NVsNNNFeYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XA6yHt96vksbMoPGX9C1HkF6JsGbNsG2A8F8BJZNH8wTEXw7MgMMLT9PTheeBN8KuFSRjnwN6JKgmg6hKuiCR2Y",
  "key1": "3Jz2E1rjn1HQprD7RufYeQf9fabHxqFzQ1okBxWmgDYW5XBcoHudt8LGsDR64CFVvp4YqgS4QPsLg8vg2ZBaRfrs",
  "key2": "41p65scXRbASqsXivVhtyzyo5kbMxPzjV4SnXXqCqRc5sVfaWquPsrUEMGTL4L3V8k9ji46GAZCTqTWfR8CctoVy",
  "key3": "cUsXAgzHwsS8VLKd5igvLPCsE3hJJEVK8sXiLgDg2UWLfXdUhobCkcRcGBv1uVeDSxHxFzDtbT8unPfpSFaCab3",
  "key4": "AReK3wW5KACwWeAJjcjLUufVaHWARAfNk5stzWvsS9yHFMQ84Pf1EXczMB2dkJnu7yNWC2jvEnhmGsV62GNWvrr",
  "key5": "2SGCNcy1nKKM4GqYtFDHpkvQek51oVxCua39cgTdmzxXr68RsC4VNbeDvHHU2S3KswfGm938nx4T4nLZgxd9ki9J",
  "key6": "3CD5NuijVykhf9SCapgu8quQ95Jo28ewMahLUbr8S8MfjEnLNmwSDSZ1gVY6QwUhqnLJWe7toxLqwP4B1fVrAdw",
  "key7": "3PkLLg5iTgSAb6XAHL7ibednEotZFLix8RbQRV6oiv6rDEbk6s7byhp6haR6xdFsoTYZDhg9Z3ekmV2EnVw217jA",
  "key8": "3D9EqDwQFULwMofdxcUEKHrWsN8ecCZR7GNawJpdErueAV6qqfo5Fu4QD6gLWvUby9G1kg6CAUWZSuzkM332gFDh",
  "key9": "sxMZqgaC6FDW2W3588zBUiG84KYDUHbLQHnzncQQSLsrjeUajqkDCqj4soo6Rp52RimZB3qzbWDK7uzMJcsTqpx",
  "key10": "BKppvXbfWemkh4tRnWk2H6JRFK57fBgb57SS18r6Wu7bDyjxninebyUMxaMLQbJGwVm3gefbQEqx1GgAPDuBprX",
  "key11": "4TCn3vQXnRt3M1yyfTDcwJip74B3cDrworVsmwHCecZuxkHd5UWwdkRrDftT5kE35Cf2RSWHzrt8vhNofz3GaqqE",
  "key12": "3USd9wpdhKPkDBwyHfSKc7VrLvAhU3JpcAGPfVLaz6d99LiDztUUHaqLo817r5qtYML9ayDxjwmfmiF1mM4cUvZz",
  "key13": "vP9DF7NY7QqpDG8sJCGTu49K1XCvd3muyoxfXdjSiDiQB6M5pvfLzW7jF21iCs5cLj35P51WdVKgbuhwG9zWULc",
  "key14": "2vBfu1aB98XiT6WRfZGuTnriPV38gN2WEGm1Q11f8jttiKYV92eofwwzTvu39ykREcVTBwNNbkTyTasFFA7bbcYq",
  "key15": "2jd59SYyjngfi6eRtCa64kgTiaH1JDRWQKk2sGMDBxsRsrCAD1h4rZhYqUQGWAMhb3Viz9SSpmGuJW5TjLEVT4AD",
  "key16": "3ctMmrNg9yzizSbowWKvz3LzUcrAPd2gqTFxhBtw4i59E1dyyRywz6M8LXHBQNpY2buL3fA4zsBL6MgNV3d8GRLF",
  "key17": "3pqNHGAhDSvWRHHx1QeBNbSGY2z7bkHtKMPQajmna5xwNimb5DyrLk8qP6uiTMJGdTMGRdk72sqf2LaGGsdSxbBR",
  "key18": "5JwFFZScLCqUvaBy8eHK58L9kjuucMUFbsP9dXfbpb3c4uHgCs83pp948HwHdWEdnmgemWtFoawvr3djsNmMJjvh",
  "key19": "xtB3vA3uedGn919rmGQBKmkRAnNP7RERVdqwDJuvZPPukeRNvQ4S1ZNCAY4iZJVvsCpo9sWJ8YUbD1K9g6VhNUB",
  "key20": "48FQfhezn6NwKQ21orZ3iceVubALTeYBpGZcGrx6NSqq9CuDUKgiBLBxwiHgc5QiZa6Y2aTrNVah5L2wbzUgZTrM",
  "key21": "5xiaJA6cJqYof21ffvznYxJDmYb3iv5thFm6uh3SxCHrSCY7iNqGKRzhtC4yZ75JXFKpCTjxecycM2rU9suPRjXc",
  "key22": "5qqqq5rUZKC7DDuV4sQcCjJk6x1TxUYZVRiJ2ChkBjWAHgM6gPq4LLg2PpGkEmKuWPwkSoWniE7hhdZTYAo22PMA",
  "key23": "31pguQQE7stiUWCBdbDdP69RPArGoaen2e87XmYfkmxM3RwZsjbTSiEpxyfHk3bYBanA7evcUqcpVJQiQV2Xkwn9",
  "key24": "8DAVvo3rHqYczhtooDKyA3t1KMbFVRoVad7C5mVuyfdiVUZDVkbd7vBnVFHp8gkyjpHhKWh5GQH2SHciJGUP5ei",
  "key25": "2FY19UTLGQdJBVJFDfPBcu1ktspfykGAVTUxLkX1f5vQ88Poe5SeYkc582XeaLJDS7foe1EPoNHkUZPr8xKzGLxc",
  "key26": "yXXNe7A5h8SipsSjh62b74jpcyg6PEhiTDEfQCkB98KczrDf8q92uyZTuHdnWWrg24JvQCkPqhjgFBpNwrbEBnq",
  "key27": "4CSz8y7fXiakRSypthPQdA4jwrdKRG1k5gW1GABHQKvHsp7z9a7hJ2bMbAbg9a3TXiVLE6usdT3kT2zeSdZaU9mp",
  "key28": "kQg6xUFUatVMZudQsJjMQSRdPwGfdYrNDJJ1sS94sPQ1DwstYACwrmrDHUnP8Xe8nYTVwgnvGUzrQsjW9oSjiZs",
  "key29": "5acTmpvPM6oqgQWHLxT1dDuXyAqxJipmN12XCHc74y24NcMfBZKBsdhGCYUzVVZmmiDe71AvvgowYSkzGSqo2SRc",
  "key30": "2x8ZWsJUUYvaj7AvDPyHzBYUXXK2CbkZYjuntgZ2j81HxBXj7HXb8VDgn32rNKGZ3Jy96SGKawH6fUdrTEJw6Uei",
  "key31": "3ZBzr2QaQUj6M5fvLzKHifCaxopjZHJ15GMXXMpasWjbXa2WkCQCwFY76tq6nSK9YogyHh5TgaExkfbJWUchoEaB",
  "key32": "2jyWxJhvLCcM4SyMttsLY3ZWj5b3ogN9ZpBGqBL4cR3RR71FrE3QZCg2G1JqJsHbcDFRy4x7aKfDXLScxE6jNtZB",
  "key33": "5H7KDCmr3fziQkntDjgrYQ1HHytQPa31wDRRC3C4aZC17FQq36U4Xad3hgYP13mq7LmSe1QQic1Nfpmhq99RysAK",
  "key34": "3LbDEn2dJgqd9GdcsdU7j9dnj5u2dzfsCMybEP9WJP5ySkpdbFw57ZSS39BskSgCUxasNQGLvYfti5v9fMH55kyM",
  "key35": "3YzLoLXNmL9vSDZ24meTuQTQgZNLf591K1gnFovRTQzS6SMV1MPos4SNNs1XXB5BmL75CvYcqTEzzyGyiMvdt1pW"
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
