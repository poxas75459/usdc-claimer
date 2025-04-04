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
    "4c11Z5F9CiZCCVJtEtmW1MAt1NJ8YKBvHJLorFt59uXRvJyCpfzaEQiBHhgFPLQoB1Uqq65xEsHaB1FECEPbdYwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMfM6J5Hex5FkcDbDt7EZDrmDjnJZCV9X5FHxCSVAWsa18Wk3xMzjgcNu9JhYD5ac3SzfJMuDExxTCo5TPhaMX4",
  "key1": "4yUVR7xiB6gFjAA3zteLEptWEY75FxjW3Et7Uo9P2iRbskjMwwxT2Z84aBQMNeo9fvukqhGG8nqggRwyqzLs2A5X",
  "key2": "3xa1D4PagNaBfUeyVchTLpWDUDbhX2eRpCEp7hAaeCr8R3QKmUhUPj3V92uD6UeEN6zyrsYuS4X3KWKKYp5jzrya",
  "key3": "2x2TSgPn5y7qau8LmC8o7aJjrp2SzNbRgdCXmnXZ7ipyn8h8T8icAxhuPy8t73VhhuvM66XYXWmKCKYLmWC8W1yq",
  "key4": "3LgE8MWZk9xYz8rUaQZPxV5dr3tuprJa2Xynx4bZZoDNxrawM9tQfNeJqUCoAKSxdn8yQ86Nv8zRg6Z9EUG7NXGJ",
  "key5": "9YUyyHQxSLZEDoNz6DoVAtqAbfXurmgNkA8RHAeXpCpBjz9NCd6ajwzyR12UgCxZBjHrgGKUaFpP3MgaXcwpwq6",
  "key6": "CmYVEfcWS6kR3T9ySDCwdZKvtUdpD8WJLz8Zk4jaVqMqePEqkaQrotFAFFcAurB838v5jFQ4jFd21uKsWA6KJW8",
  "key7": "3H9oGQtbxBPNPyHrXpgnpJ6SX8iLedM6rCjN5aUMEvH7kyvGZ8ASupfC7PjzUsyqQpCCGJNeuzAahW1kQ7pwNQ4k",
  "key8": "39GAMVSK1Zfmu3ANHkYMymRcaJyNa43pK8CwjEetQLGdRMjUdbM3hAifRH2JgDpBB5HzCBJa8WgQHq1GhEVipCbN",
  "key9": "2TjFHZX36omvtnkcFZKnkbWeP6HWQcqB6EN8ZxUPjAp6aGRKFT3iP1EcezjfsMXKEbZMhKZHjWf1b4NDo6Cs57KR",
  "key10": "nn532m1M1umjCC6GTorE3CK2q8DFMDufhHU1nHxSZwxgX5x76RekPAWHdfFm6gGKXJuQd5ovxzvGkGFefo798b6",
  "key11": "2vfhhE7sEC44Viey49Fdv3pBS7wQMbQCgQkLfiDBYd2Fuf5cbtp6FQNvJE2wUoaidgvJ5ejFQkjNpvhSCmABqzX",
  "key12": "4zPqekNRF2cma8QCUCTka42kQpbWXD27pqtZRxx753igNTeUwswHWAHi6howTgBRjE3Kzo2BPU4yfeR2H62aHgSe",
  "key13": "2oT11NfpTEvWCkxfhS4xxMFDqTYC81DDn7MWZdAgyrHsSLyp57fQZX4y3oFQRmYgiwbdgYHCTfzJkJrWmfvdzo2Z",
  "key14": "zDgndxmJHAzhNHUVost6SHJSLTgiMK3tkphzzRR3aCT1SutuS7sH1a516LRM6oMLaVDkMnD6abTCYBWtZQqbxv7",
  "key15": "5uxhTvMeVFSfc8UAEYd7kDbqamWSkML8qfeh3dXrtp9PEheEtsvh6cywC2zHMtFDeQdZeDjyDPLAhLUdx9s6WJct",
  "key16": "8iL1nMQ7yZjrcbVBKSUS7pj5ykDmisEUHvRqUNBwtwBMYoxDqTZtq3HSqoZxPVKWEQcPy2gD44QXEFNYQbkyrAS",
  "key17": "5JBfzX9vVmfEc4YT1EPkD66eiF3PsdkTMTecT1FbaZegC6ijNHjAgsdiD7Ba8ar8ev4EpEPnCVj7ezgGKvKV1vjz",
  "key18": "T8tN9rywc5nhWz2XPNfhyR7JJvMMBwo1AdHdsDXfTsuDW7rdYLVbyejK2yNhCEo29W1pqGi8qW7Td8rJyJ2bEoU",
  "key19": "1MUWM5T2vcyW5s9hbT8rNzoLm4VeZviA1xbPW5BuLMB3hXGaut4BK7QPhD63ZRXNEo3fYShbYSwXToDMioKb8ug",
  "key20": "2bxakuiEm3AGwbCGd2KpTi61dZC4tYFuAHVn82Tu21UoNYMLYsCUFxgU8RMxLmGxdTqxLsZ59kKWDUSsG7BuU7cE",
  "key21": "5fW55tbWufZFC1soNPxZT6k9eLnxdcvhwvccMuvAzodEgDvyWiKofydZYAqSgzFThQJymAvzGHDMyMHhtrGa6D6s",
  "key22": "3EsQdizGm7e7cekSQra4LdpCqNSCVsm7Frg6qX5TDWVFmRjgBL6Xh3QZfMxe6v5jTfbnjixaXxe3dM88b7xudnKb",
  "key23": "4dcKvwc3mn46KcC1Wu8vsBpdyyaLJqnt3x1MWGN3k657HhUnxg8kcENkcz8qijbnn8zBkNwJa4VZZHUiuRTEJV38",
  "key24": "5wYQ3xCyhH9QYTd4YeNTGzE7CgriJU5oXvBTbCB6EVxdaFsEXaUSMiNKcvQAZxjTkcehxJmQ3FUFgw4HAYSWsXgK",
  "key25": "5Ps4EqeDD1XGxN8U4SUM2MWVJGov1WZACyFGMDzw5W8REGgr8TTJm9mfkREQ2fczVMdR3ni7NigHy4C2PpUdyNzJ",
  "key26": "LaMWLKcfyHBx7wZ5v4hVmGhLQBU1NBX6LEFAgxEdtJtfzpb1A8Nj6zFWJ681pBd9xN6SE95RzBvKoE3TVnL9zGB",
  "key27": "25xSPF7hSyhk84muPHtJaT8bfwibuP4Jr7JXfpJEsV87sEL1BtuP74qGTfHcrTVKGW8rf9AB1cyuMuN1PTbbWhCm",
  "key28": "5HLNdyWwHr4TCoPJbTY9pbR2XAmcMYrKJ8wJwyJMvu5pmogRCScHQLBMSzxgvyNVkHWhYXeD1mMTMjhhywqoqD3k",
  "key29": "2eGLLdgAGsy8yCm4LVbPoUhacyDQJJQqEPX1WjpE2vrvDXFdcYobFLdzjqE4Kd7CMGmxrn4ptPpYaVUoxiuTva6D",
  "key30": "3gjCJK2KDu781zM9FjarwnbrAUiNiMR2QkaoLiipm9mRCM4N6EU4MUCVdWPGxASCJg5XfutrN3KcEVLDQRmLJiix",
  "key31": "5gQT1AnB2tUs3TvLRXiuSE6shYqpNq1c9Q1GMzPmp3cVmUiggWyY4gpw8HukAJdqq1SKPphZyYYyTWsXkK1N7n9V",
  "key32": "66dX43EDmvY9WHtop9jWDc37BEA1qaeUgW1mUWVDsYeJY1Avy442vYBcoUgSgVa5c9Li2VeHtqb3VN7ujiDMAnfV",
  "key33": "3FG3fboGsecW2EzyPwBgwFSYjP5yPQNWyU2snDonNkTzNap1pVpDPuATwE3gHz4i1vCeefo3B9gJn6fGZjHMb81i",
  "key34": "5VRT4P7LSFnb41erAypYUSp5XJdpoXC34VuKtE4cvqJviUmsMJtSp1JqouTeTZudDYddDQpufKu8GJbxFFpFtiKC",
  "key35": "276mcTZfoxNfqTcMcH5YL5WdqeErMosXmsfWBzJiYYoA5G3xZMTC8qBrmDatsmFARA5F8nZP9LVbn9A5KPtjm39T",
  "key36": "3btEsPCLyYZNVicv1dAjv9whTUyeuQtgH2BVbyCnuBJZQHoV17mG9H8Ha3KvLFAfyTZVkW29FMRnUzWwuUKoj7pt",
  "key37": "4p6SsdSVpVGWnsFMqv4XLZhPbRvsWSAjWdMXenKaawG3m3dwr4TvotDH3NP1u7PJzrLRDSkfRQQY2JAPDjvDoM5W",
  "key38": "2YsLiRA6jZi6U7BBV7cHQiNq2T57gJ7Dh6V1XWvmBPpLuDyKduqPdyks4zxMzxr5uo8ds9KRkDyGXHkfKuJS4EZC",
  "key39": "3t3rQKZ8o9Wuz4cVv5ARfeeApuTBfPPUmmkZHL8QKy5VXJQZHNnsbCwVQ5V3KAhDoCVTTcWegrWe7EkCbNJANquT",
  "key40": "5rJqw9tDn33TmRP59HEUeWw7uN476dinNafiEeUnTBxNwgbm6VHsjfq5xdJqrKWFiz7AmNkC6jB7RijM6Da3dkEe",
  "key41": "33CyzXXrGRfB7Qg9oqetYWpTeAK7SpA57V6VEGQWKnfsZWXwp5RbFWLRVyeJoH1y27peZmP1z8dqnwXFgg12NcQS",
  "key42": "2eBLt242gxSsRyYAMpMS8MmtvCoYuEG9YYuVUCPeaX5N2VGeSm6KtdNQE3iksJCHbAf2DRK1zcxkCTiZx6LxxnY9",
  "key43": "4HbEM7A1RCXvUfdTTNddWhs5E3fHD6MsQFiW4AyLpanuK5cVEpqUwMVcfjqLwXdks9vj66KWR48pmkUk42CpTT5i"
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
