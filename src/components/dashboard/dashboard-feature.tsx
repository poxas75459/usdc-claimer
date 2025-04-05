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
    "oD4uhtjTvFrQvpFcKK1fbqkEBSzffH3LuoaUS8t2Bmoxptr8aiaHhTgcSySv38ZannpnS5F3vzsSfykYtttAVuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uhsYrmkgh1SQP7qdpE6K3AiFN31tJa3HNEU2pPMoqG2A5rffiQsz7UaKuj1qpWRKw7rLx6JGwpQrxEzd6Yv14Yd",
  "key1": "5N5YyWQv5EivyHgb5JSA19LW6g9N8gzi7d8v6619xVVdxkaY9hh3CUveLsJYH5nmBGReKiLorQpuhewsUhpR5bto",
  "key2": "5FP8pRw46oKKjWJJbR8YfNYDc9xv1f1xW8xfEDsREzNWxu66kms3ssz9HczaNcXhczS8iMRZMnD3YtpAnLpQXTmW",
  "key3": "47pzJ75SbtZLaMWgMgmKCcb3L8MGB9FiHovL8MvFQdoJiP6pDhq1UG1aCFvXCJWHXL41F22mV9PhFUKtNzgUjBi8",
  "key4": "55Bd6LWFhJxSdQowKn9GYMfQV6unchSN1imFzUXhRqS8PzY4Dh1aQHGBFF2UNFLzSL57R1eqxNCMpYmivJHsGHzd",
  "key5": "3DzBKtxyLytSijNFgBqtbkar5Y2mCh1dXP12uQg8gMcnEh3g2TZAxSJaKXhJCAR296JRMAWwY1W4Y947r6BLSTmk",
  "key6": "4eo1PChGmDnSgjLDYfsVaG5wJtntXbP4ePCe6RDgpR4BYtjy49tsyhzJMvAEq4CRJqwfLVajxV4cbJu9BLVyg1K2",
  "key7": "43pwWncrQVBCVp1efNrYsUrFqUT5bEMf7GdSaznVF8BTj7pHgFnFDnTuxg1hj1U87CkqMtwyGmHJmcBqvipRhhQ6",
  "key8": "31qX988LZvZWxU4YZLnjKsPWgTuV96MS59F4ukzCpxRYfyN81GHfvmyd5hyNW3FhfRtrDVYfwXGwMZCcTTJNNqzt",
  "key9": "2gK7eufna2pnKgvwZZTJmXsAfp8CbWYN3hH1TgnXEDwNKRv7WKJSw55yfmakUQFKxBfit6DsxaJ7UDrRwNmyUAnv",
  "key10": "2DTFaw1TCndSqWZiqaCtu6QcG9bPS8QCzmRvAJ8GPA9QShV8gmjJe3PtR8ZAp1N5qyVbpXdSQXfMi3tNCFPrpi8X",
  "key11": "2HxyhdrxniaD9wSdWrbeLuGe7visdzisS55RBWVPWL1ce5XRYLXT3ggfdWmTMJ7Fxag8DZRtWS48qyYVDJabxJEN",
  "key12": "wJB4rV5edRCWjvDMFcXtgC4PK1JMyxq5uvVwMgxnXJ1qZneKuCv41qNerJyNFUt45JZ63nPFzFdYFFXjkjVZegL",
  "key13": "2fGEUGem1gDck8eFkahEZwjmpGn4DczeH25H3Cvmj5KvqUdhD9KQxzrPVMJwMH3ZFhPH58tbKbecvFzKp2nDxGnq",
  "key14": "3fuKCiH2mo6WPJnburzpc8FFH351pTKc5B1nPWmjMug3vKysPiJAB15swdmtSwNAmDn6YBEVUrqyyBSCHWHoGxdo",
  "key15": "2FUSbVM7gLPizYosiTBLtdEEmuTdQj7DJppRKfzQibh7G1tYWL1HD6Ta4tbeXvfry8FRE8LJ8uQDWgPwZ5gxCGfD",
  "key16": "5KK7zU8tZJZ4H6hJKCCa8EycaH7G6NqtT6rnETHbQWWmqCqeQSf6g8vsG37Bfxpk6TUGe7uFNvw59Pbnca1qxvEW",
  "key17": "39ntQxuDg5TNz5FhZL28TyEE9hYSs5CLqcwpMmxQLQLySmYmGkS2pPp3dwdz3wENGRBpU9nqdKuJzGveHCan5VHz",
  "key18": "5Fk2FXZXHRJWs66F5aMmcv5rgt193Kh7tNrrAkUnSPnj5VpiaH2Nq7i5bLH5qx8CcFVjKXpRdqP9k24xHjacdcbK",
  "key19": "5jVv5qRawcXD2bBGvJDqxiekWgZzuN5K8CbCnJRyZNZeLdwn4RJvcsJddqgng8gJHrZGg6knchJ5z3HLXj9DXUKh",
  "key20": "3C1ECoryU8q8DXdzqjLGNXyGz2H5eSJtEgT6nZb1aX62D937pjMkbi27UUhakL4xJywKjTaTJbqMjexa3pdfHd5d",
  "key21": "2CjzUad9RxRpcgCVpuFYpyhd3SmyiAqxCz8CrJWjGzyv4tZb3G5T7qafRLiLKUHNV11g6nAhcoDZMCbusLxjgbXC",
  "key22": "LSzuZGzFqwkutyjiQ5v89ozHo78KGeYNZFEXxAzvizD9GpJjV4Ad6GGMjXbPERxxTqaTkShSxmszwS8CX6MaN8T",
  "key23": "5fFjYoxxUoGYhEgmXXWv8QcmutZijtTocBahoQnpWcyR8VK7AC2SDUg1PHHpL5PN2cdYwTiDv7kqRsLaKFPMG8wA",
  "key24": "3CSU21DjMNtDApbj91o5Jbdsm2xxvbZc6iu8nt9za8X8qsYDpn4gN9aSKYeqYoSH2KTzVoy19sxvMFEVms5MEGjR",
  "key25": "xkZU1jQEbNkQ5xkNKuHz7Jtku1gTEZCUm7vfCM38g8XqQjfdJmwWmiEQdRzxYRNQZkMWsMNqe64V4jbjepzs7K7",
  "key26": "23s6GwBFVUdSWtms4Lotc4jCGU88xYfMWRH24oCDqXwM5tzaG9jE83Au58YQPkRwmnanM3vaQZA6pNg4cWjTA5xv",
  "key27": "5J4rrj6NRqtqo91Cy1d2ZL1e5KuuMV7JL7sqQAEAryt1Erv7DCgf1v6bmRqRstPGDekJCFv61f78kkz72nqKj76q",
  "key28": "4vfQYZPVTueZctUh9YVaPXii5a4uvSYe9xchW5uVgd71RccXP3kpWFbq9HwUtWU7C7XR6fBk96iFsnNLQ97i5Nqm",
  "key29": "5e6C84R3ENkGLeE6XEPDFekvoxnXF8mYtF7SY7qLMSUC9s4Pt5bUmvnrDgK2aMYKQBQkcR6q2J6kWbQSVpk3jQNG",
  "key30": "2UHqtPsPVnCWqXYfrjJEcnGhH5WXoU2mPbmTLeAKvjbTu3weRzvrM7xwNzWJwpTWmdsa5xLswczXZNHuobquCEq2",
  "key31": "2coWzjEL9bn5y83Xjr6xDHn7qizngPdxVPeq7xCYUwJL8jJSPVmYx7nsQPRBtGWVah4soSCZPY3DkZpJzWiamxv2",
  "key32": "CKer8vjZua43Y1jJ1gX7uNRzJGrG25Uw5RtuW1C692u48hKRmTBRSqPRpc44oziqfFnfafMp24TKFgEcHPTBKiE",
  "key33": "oEZxQ9NxA58nFg5J9okWPJ7KMvR3hoqy8CfkTm6HhxPQWpMck3ZhMJQq9DgZ6ZbdyVLv7ajJynSPQJzM9hopoAA",
  "key34": "4oLXVG2XL8bbdb3vWTEgBqGGapRK29XrqUSSDu6V6WQv9kEDKybH5ktHx6KeFXYmf8LgXT3ypPW7kjMwkZSosqfZ",
  "key35": "tFd7dYPNM8aSyECUCFqQ6qfGwhBf6UhjRk24ZnTN8de8avMesWpocXVQ8ZaTk33w4ykTXSMk4QfThdW2JuiS8cQ",
  "key36": "3nhDpD4MNV8LdVyvMu7W1rceZKsXQDic2oTJyKW9NksAaeEXjp6ijiCeHb2ZAWHKtPKe7jPifs5ScoQ2tAAwy6Hj",
  "key37": "irgyHYrRtjp6BfA2GoCeMjyrnqDLURUGXN2d8hTLyHEpBKwrWs53KVikrR1zD7hQg7KBV29QB4N5EpXmEHi3Z79",
  "key38": "2GjrPBsQuAsPPiSiUzGsCL9xeRgzwKKNqSMYFHMPRPXoEUdReFPvULy6bcyx7QrifqohTjzdRDdBn88aDP8NVmvS",
  "key39": "jyV4yCsffFJaryT5JQjTj6BzqFEz5PSFAebVf9hcf4SrvvbmbbuZyUCWj7REB1eD7Dp2Zy1T8iej5VYXEZVcgYt",
  "key40": "3nZ17TWZ1uULXxi4jreBsaHG4AwTLyxfeg7Xq4bdKJAbK9SuXiT1ajZpSH4BgvDW42EEFDrMmCM48jvvkWuHkrMz",
  "key41": "2u7TaMchB5FWXMaok3f4kpcA6p4UvHj9Z2YvRpML2DTe7WVwQPGevpD5HBfGBoVLQ1u1fqSYzfhgQEvtAwmiyoJa",
  "key42": "3xF4VRkitETRqKdGT76RU5oJfaFxW5wh9AHzUbTEcqtbEnu35jPPFxQzh9iXASUqxHm8JCcTgz2FWvibXdV7GZzF",
  "key43": "5JjGZncsrhXaT4Swo73BfLujxUdP9XC3STvHLfM2nxfEX2yidxbZzXqJwEXTGgHSzteTja8ZUEm1zeZ2a5VUNRCK",
  "key44": "4ywjiN4NKw7wPNMr4WrnogiCG3uL9tQKYtRjSZQ68L1r5YjmKBtzmrgzEQmy4eJQ6onUntKhJBA7MdPsJHmLnTTg",
  "key45": "67EgkbWa6e7wUyz4qCrTjtUNiWnqNcWMVq6pcUy3TdwCu17Sd4YrVgdDR91gV1U1BeQ8S9q2nVP5YQhSt9DBTqqn",
  "key46": "2hcaTVdrGm2s5AxWjcxpKF2wUzmvS3sLtE5FHgxjCpxPSDVvUSoXPmsWe6Erb9FaLa4GeqTtPHrNUFu6SNZFGZ77"
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
