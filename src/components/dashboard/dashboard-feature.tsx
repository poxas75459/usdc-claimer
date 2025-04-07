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
    "5hzt8xunKY8QfS21xx4646R3XpE7tEvriAUGKHpzsHwaed7BLpPVuyHDzdcxwNpK253R1apy775VNxY35yDQsEzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zgAQivKmPzVcB5mAKkvBsUM3enVbYN1fEoCXJ6YRJTeNFmo5EPZyd5d2qgpDsNt2aLJnskQLtEPxjKMHiAdiMMg",
  "key1": "5VuXVKvuDT6MXXgTe6GuKnc4RcSvb5cF7wxNWqMDhHor1Vw8HQmYRnhDwLDJsbmvchWyW1hpaTqCgq8oWviKs9M7",
  "key2": "4qL4zxUmpyMqqjdFoB7aQcwanQ2yKZtzbDk3tTKtPN45CkRsxqhjtFVdV593jd79AyKq1WcRsWXZRk4HKCzHTyrn",
  "key3": "m2pPxrr86eGdzen9UL3BfW2wuVTiF7RyHbdtUNaNCMazH1tiVKuagUKyEFzivSkFJmKSbJH5mHpXxi3AR7yX19E",
  "key4": "3Pu4Kfcbj8qvXCHZjKWph4vPp399CP36oaoH7QjRKYBttAqw3YXdBhtu4yeRwD9HR8zV43BvVbWEc8p27cFJkNCa",
  "key5": "44fLWALKSpKF87DMqCw9Lrg4W2Zjjfekb2YUTV5J5E2iVw3gTepGEt7Bfn1n4sVf4Z63gU3kWnUu2SXpT1ihRDmu",
  "key6": "5REH8U1ffRaabHNMQsgEeyJxKmoUHdVwMe1pBGYwbodzxoxhd5pzn4BHykUQrYKcNUGuwr6Sjav4v7JEznWifMiJ",
  "key7": "2QoAZ4zhTWRkKnVmTWecFV4RC22bT64NDMBWXrma1pge5bqiSuvEpL4rkddMP4e2KqgKdPraWwZ9PD8gZ1McySan",
  "key8": "4sSSuwgmRaTQGNCxAxGm5t5H2ZLdaXrUT9k6vHUiVKq2tNUidQfa8tPMzagvEDxNzESdVPuD7hwmEhqe3151cqqN",
  "key9": "5XsGQEa6deS23GaijM5ZnRSB3LEo5YMQSgpaGBvVGcPtiDyJjkpCLnt1Kf94yJDqPF2WRxMu5iMQPQNq7b4atkBz",
  "key10": "2dJ7gJcVjRTNYja3yGz5efAy1ukug61eHqtzXbyx45h81BVpF3inbnMfxWZ2vNBBhSGtko6s2M8VRdzW6iEfthk3",
  "key11": "3R4zE6wtxttpZaU9HE6gNHs6fj9y2YsbsuRRqmJ4ix5aYiwPuGfvh3GXCun4Mcw2mkXQ2K8YwQacxp61ebjweBLF",
  "key12": "53Nn6fLc68ycAFkJQ9rjocrcxK3RBuT4psSHyncKLU7gpw8PFBVKTbiCpWJ2KdQP8aGMx7GbsqrCYUXBdkc7jTD4",
  "key13": "4VZbJQeskRuKXysTKX3aiidnrqU3oXCjyz8Tjr1bjyscUUj3zNvj8KTEE6KpKfkMpWuQeuBMZcqG5gQckrfyRF2A",
  "key14": "4YP4Kg4MDu7H5cEAGJBUwMGFCJ9iAyok4hHFYeqcP4HhiY55jxJGUvqmFP9ALttvjaHdMSD2SsL5W7QYA5wELGuf",
  "key15": "3G9FuuvQELcLwuSrGNXSsT6ZJz4mmiPdanWtYDcyq3cB8Seiunqq8MUqP9CVueQ82XuNzMk41ujLUyLymcJzFx9",
  "key16": "2LF9RN5mdPbgrMkTCcoPc36CeDbKHErCb3sXaBH2zgwLjLyh55ZxZRUVrKtX5E8xQtQAKMwigfaVNwHiD9UHXQ8S",
  "key17": "cNTjHWPrMEJAcHUi6Zg7oEDkzPhX29eHTeaTusMYKhe2LFHxBFWPgHVg2aCj3RoFWyv5Qgz7WL375zFv5j8VyvC",
  "key18": "4ZrJKejmqE4iRWVe2BRL4S9o1ZxYgxkmPhWaqreoCacR8dUwv9exke5rizSuDBEjnbreHTAjFCtgANfkfpLaZNj7",
  "key19": "3JBoiEc7hyrgLYejUBnjkJjVgm5RQN13Qe7GfcsreBGBFFYXgYFVGfFtoyFmuEVdNAu3f75AeX753gGfHAKp8Rpj",
  "key20": "Cnwz8MgYCeT9kFnx3rZ6EqzFQScdKwg3J2NN8xA3vpyNNfn253bqG5jq7JeZLdoKV3Sz8VjGDGmmmJwS7tQdpib",
  "key21": "5FKAN31JVu7kaJeo41eJBAHqQYkJJqaqymasgeRgE1z5NsttQpKqsDCK87BUFkkmEpWfQE6mkySZKQkpS4XAVt46",
  "key22": "2S3aGs4YSWFcPP1ZZZuCabDjc6n9q2EVztfoQhNfE4vesMD5uWYftDvk6NHyjWxsA6Vj5nvvGKpXcfEbzxnBrVwB",
  "key23": "2WPh4gaDHasYKk9t7L4GJ4RRaxfJpEkUeQTCra7FQqAhGFWZFL3pAx1WBMYLH5DVSe9sR1RyTSkCJ4sdirWaswbH",
  "key24": "3Jx1vuBoRmQMJ1YnZ75spWPwaoKLw16kP176mdWNwjipgV2mxwkGCQ1sPRHQTJrjdFbKZyw1cm79bLkwLDf4rKes",
  "key25": "5JLdPUneGNHsGUZd9JoURLVann4Vnw9Rhty5BvdRNKQg9MTN9LS1x4z7qFEMuixHx8Md3xAuicdv7euLr5A6hg4E",
  "key26": "3HBsPnkqmAEdUgfE6xHXe8RnEcJfEao3KXfxLpExnHd5zCchTwuXm9CPFErT9u8VBcuZarTgxi6ZU9SK1SanYqmL",
  "key27": "65Pg3fQ99pjWG72ystnRJbFZ4tuWVbPoTunJHYhgEMkqqB8RaCXZxt9j91CqbSGzfPyWjaL6PNyuyoJERuuwtY7Q",
  "key28": "4QbKwwm87aiHCCmyCVxLTdw7iLGShKyWVJcW8exj8D7w5QFrx4xK3Jr63jn1PwFDmG2cPBEfgWUrAAjp1Gapgkws",
  "key29": "5YenJwb194Vu29zPNwTBBy8SaJNudY39YMCKBCAe2dz6HfpPyWDBhMLthXH63b6QgmZAfWMN7F2DsqjxpKwAEzGy",
  "key30": "2hTfzwYmD44b83Gxp5VvCeWqbwk3o78UCNHegujFRJcJo5ingJjDFn5z3JfTznjRQkKRszxUE8QoehzQTeLya5ry",
  "key31": "3stjr7qcioUCGkXJjpZtQ9bWhJsyyVbK4eJrnowqkhpjuS8BXyFGwMAA4XjpvRU2JPwhRc4NPCQnCLkb6FrKXV3e",
  "key32": "43fcdhdHvsTBgodpGYX9hWrtxqVYeHGMqB5XnBVTgbKkcSP7Ru6Js6szzzCppmzt3Va2x55wCVouD4w2JLU4ZUrr",
  "key33": "5rkGB39YHfDCXpwtrywq4REV7UAefC7WjcTxdWWwwXRV6TucCpXeALuBCEdou4nLVLbwpsbPXTAshntRh2TbfbF",
  "key34": "47cMuCqQoemFxdGmxmp1Nt2Q6x6HXSVLQibkFu9WxS45aaHzvzgT9KbhZbrpbXcyBNAvoC9ajq6oWAQBXzaaxUwv",
  "key35": "sQtGkvetQL5ZZQF7KfCTYkq8eJQZB73E4P2EFMcyuxVNPNkm3qCpMRkeZUUkJcWQQgH2NoajRmHHcmMnVHesqha",
  "key36": "4HJHNkEG7q8Fb6NfG62XH2W1iCghWEWdPF3Nc8HgV7AG1925cnX94qJwgVQtQtwrvVxsiZ1UhG1JPySvxhxi2Aht",
  "key37": "3ADvQxyDNDuxE8mUXyArJawFxTxLMrT56NLyDMzzzE53dWSN9tewLtdtHgDc3zDFnuREt6dGpETLADbvB72xubYe",
  "key38": "3YSfuDwogux4NmRfEr2ojhHC2sVtSb1J186uxWYQatyaRWds6y3C91WMy67RevSyvtsb79hxTLfHfPjGUvjhoGV5",
  "key39": "2ywjyEQystMC2scDQkrRLzCnWb7gX7tXAKiQTXJkn5kZ3q3hEgeB7Dd4Q87aCEbJbnF6FHzqiNqtMUFvLpvumfUW",
  "key40": "xPMQhVKywmbKvPHzpiqKmx3n1sAJxMi5iQViyF1eJGWYgiTQ6DdSXK9yZUzcKnP84BpSrSqkAXjsotz5rNgvLn9",
  "key41": "4JEsteAFchYWj5BuEJ6RaMnfqNtbaC3m5VfAaiQNcuJQ6kkd8hagE4zr5juGFUfCW9ErmwXQjSZCuX71sDqeMFMe",
  "key42": "VWVu5aD7mDLCooFT71rxFcTUb4PWVGoG9e9VYwAbgdMkrBE7EzGgKptZfdH1gjUmW5AVRVP2yib5DtjKTytD36G",
  "key43": "38oFxSaRB9SXtTaZn8UFRxVzLPUHm8tb3CjZzvR4goSB3HGj2RZwzxXc6orMVGX2sTN9b876mwEX4YbarwaUa8F6",
  "key44": "4FwLUfwhPoSTnRTkMjPJH3azXQs6X18SGp6ZKUoPBeWvw3uF5efN5tR1ZciBsxRVbCz3xYg12xzXPXA7r6owhnFi",
  "key45": "3ZkwmpkNJuPssmeQKeGfuFYdG7cghfri14XqLpW5WRXNYygs7trY6tLJWj1NhtZtJyruYH2LFUBNiF4Vabex1v7H",
  "key46": "53GL55qowFZQhMhrYh6sVhyQj67T337L9ApnhgcC7HshcbyXNGcaJ3ucmv4LFRqZbHP3mqYmfj3TtD87HwHnDN8U",
  "key47": "4QncByf2oUphAJPsUbyAsq5JXbaitCBNKwKxBALfUSgLZPqt15mBtjNcF3ce5ukusuXGDTFWugq73tSWKnymE3LK",
  "key48": "5Fcr4451vbRufZmAkUm5MKhmc2ev2Ra39JWBPB9dP38LTyBFrUNKRmd8cg3ow3wunXqSKPmfgsRrPj44SYrB8LK9"
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
