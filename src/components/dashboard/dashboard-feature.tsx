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
    "5LL5wRPDWunfnZzv4UwgodsGTXvxYRSYvNRQjDkcgZBaDX1k81wNa4R1eYu3S4xUmVLoQfW7DKoDHVwAwkURFFfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ofstU3ufCrZ5y9FnxpZPi48PszV3DRi3vqwPmfbJtwzEJzHjAdSai1G5CWZ2SAdvgodgQRcczsBQh98ytefmLS7",
  "key1": "42MxWfFX3Tp3y36W7o3KBkkadUAC4mQm9AqAZZybhLKv2gRmq8zAEDAMTgiPArPq5Spk3V2ckxr782VddMHjfxAc",
  "key2": "5f9BQbPU9pyzdiamjS3KRiSPZm5HvREmpqBmtBbqJAfksDh5Ag8XTXR8wUEiHT3uMfsDVU8UywEcqRV3NMQD2FMe",
  "key3": "5fDpuEVS8aEdrc2qbdzS2ZpGD1m7MXPf7QBuhwFLCXXYdjb8fdH1u4CH9QpLvssvY2nmtK9dBekmqbFodzjWzuy7",
  "key4": "34Uc66fkpZTaVdYu9N9b9ATV2f84Ytjwtd9Rx1AsrQJeCfoYBKy6M35YtbnchTmELUi4BVRPaihJxUNeRS9Ei7JX",
  "key5": "Yo7SF4D2csWKGjTuwUm8fL9U59rmHXAaS2shTJx7gfvHVzVsozbjn7AnVfWSMMZL5w2QZEJ8ogpjfwTjYrDKaYP",
  "key6": "31vQtuge9VSPiPwq2PGEKSGE4o37xkkBSaTBSEFhrVjTU7r9zWCAaWvhV9Mqyku1D2jawqRvFciwEGMoBjBKL3o8",
  "key7": "5mGUQQcbwdkqaMw9397mZdRWZoo2jQSGiSsXvnRGtWWj4ymWiDpnpVQrt9e58hozb95cmJ8WRc6kKdnh9xMmbk5j",
  "key8": "43nFGv6BDTqwbjJmyZoLSK5FWLi1EjTF3uSyTN84P1Nn11JdBSwWdRTiwZKNZkrKfXxKUTMZvb73ZtXVh4Ak63uq",
  "key9": "6656V7E9B2MbN7g9KHpqzr7Guuv2B2vkPyHVJKhJvEJwjzqa8VxNYdNjPNLYgmRCrs7YhoDbDzxaZ2FJKQcd5DSk",
  "key10": "599C8vFWbrTvMC7XQzuqbEo5qNZdPwuZsTGLXPe3fCyruuZDyPGHrMf4Xi1BuASiqSueFM57KE4nsTZhzoUa44Jb",
  "key11": "4E3acegkM5A2utpgdmZ9JZprbQMmNufV9tc5YepLkN9BFnybsNh7eVanQDBoXUj3Xpzwr8wB81mtKXZRDzJrEHxz",
  "key12": "5DXCV1rFNZnhV4Fde2SfWzLQHfQ6f9wUyExXzDbwegpM4XSwQpb155yczabSpHKVx3fCztUL3C7EMa9yoEHBztM6",
  "key13": "euzhAYwiuJcLv4KJuFSE54WxbAbE2MeKEmU1JHFjuyynNMA8p9ghr7A1HRbTe6Z1BhTJiTPsbZwHT99j9nZHLso",
  "key14": "5xi25DVXyXA7dcQY1rbDof9QvuheFrALDn4Um6utiT82kVbVPx8ZecPUGTLxjFr29iHPf3JWhL1bTb3w6wqWVf4J",
  "key15": "2E2k1kXpPxKcPrAtC25swzWuTD18v7FqGqG1zh1uTVW6v2LsMKzT5KGqLzs4aiWreo7FG221qE9xwvi27pEsH6Y8",
  "key16": "4L17HCUymW6k3SxztpKm8CHRfDaCUgGhUausi3L6WTnraRFMXqEJazmaaCTR4cqoZ3Ed5B7mft4TdokxzGahCkvc",
  "key17": "4wvBHWgzQoFe8kXjZG19V3zEH8npQnTVyr8cz4fWcxeZP6BkQJ3hd6MnKYj2iVGA61SaVRtumc5fY1UhyjAPL3Tp",
  "key18": "2hv9cDJBaAw8qT9uMhhu5PqXfYRhX61SGsckW8WFs2PYAgYkCTQf2GQFtQhuatLsv5NGTb4osQrbumDeYjtVaLtu",
  "key19": "3CiYasmYj2x2kVxaMrS6ATpTxwrWBnu6YzfnLCxBFCTYHyusWrgPocU3Pc1LNP9SHukij8RDaQq2KLWcc5WRfum8",
  "key20": "5PiEZwYvURgDZA4YKiSGWw563xZhJRDAsXfjhNk2RGzqxWRtnW4rySeoaRY49P3NgU4Cbh3yzs1KBnPgLN48uANP",
  "key21": "PEY8163kM7H3nsitcX6E1x12KbRiJPUG62J4fFFXqg9Q2gzwWUyiqa8hWaiWzcaqbyopVLwrRkmmbAa2ZdLiskz",
  "key22": "UrgZBJHig7Cz17RGmmLopFvhWqQxjV54LNfLUyGPd79M4mRJjo2WWzKp4kBGmw3sfJ2wVQVsobEjvVZENEDFh4G",
  "key23": "4tKCBvfRwqoKEw5YXDZdNnWJ3UeFWKCsycZH89f2i94JGbiq4L3BGmAGS7XKhaJbp29qSGy2vmsKtEgNezdjbFVY",
  "key24": "64B5377wBUttTtFW9gAqNH56u7HD4WoTnoFZ6LvVkhFvq5Uzx8ceR5GFrAxPYvUDRy9dsmCdnbnV9m3EyB1EECib",
  "key25": "9nbzCLdG7dt7ELidNK7SyhMfMBCiAwV4bWeYowWVPSzeNGHeGEYeBVgohZhWbQKfRbn9kKvG4QEx2QCU8EyxSYy",
  "key26": "hCogwBZjpHsiXrcfDXWgqhzx4Rb49tnYNH4boDWzfmTzuQwVtU1W7g9iuroyTAfZFZtjZ5bHMoP3aSFmWRpayYY",
  "key27": "4irAZuTyDyraD4LciwkWDUHBxaLN7gA3UB84g6ssXCtdMhguVeJbXq5tbGhKGZP2VbYq9anJpqQS6NViuRjcHvhr",
  "key28": "4TEMbQZtqgNwixPxut2jZvz4KR26KWDs7tssxmSSNQh4Hqrqdh6tYNVBc4LyWg5w1TLjtXxYAoSHWDFdfKKvK3Us",
  "key29": "a9LPtebpFYeDTauijYxzcaPdjoqjDqbEe9TA2Sh93BGBgRqLg5q5bbSTWcK3teaUrTHeWVCWaMJB4eWBTJfvfir",
  "key30": "63KS2Pjo1UPokU5B5FXrXWCW7wnMLmTy6PvkfBBh4kiBNGsdEvpW5LQA4J4BVwsXDUWQ3x7qDiMySvrqPJXzFnYW",
  "key31": "2RjhaffuruBuUhCLv9NJjq33YJ2WtCVubWDtHVmDAyYkw3Yu6Tqr9J9XTHg3GtQVvhvxZuBGiZiSdZmQdbaXoE5z",
  "key32": "5eVPcdYuwAjf8458zUauozTss29C58UeyTqQj6wLP5WvxWs6MWmbSF3rj3zGxpBHm47aSWZ7Exb7vm7uLyjdvywJ",
  "key33": "3qDJz3PcjYRfS954k5Squ9safBbszYP5gZc8YAaTo9YbWmUQnw7aZGKyifewDF7mWjf78krBJoXBQS1DSR78HwqL",
  "key34": "5PYUbpgkPcsakBkAFapHvwSFxtRcHHALfpSwd3yZtuaATntdFWj3hYvRiCMyuJcx33XJE2rmKumSogJw8yVo4sxE",
  "key35": "2pZAUQ7hAwXYx8y1LMivZ5JfU8skBZ4tifYzkBJrhMNrJBqcv3MHhzFukrFgCsdBnS2qA8h5xvRaUYNK75DFM36w",
  "key36": "2WCQYuwvvryRxM77QN3xZ6aX8rF3gKp4NGPCNYDvKyr9e86D4tpAQd3jMbbvX6BXV1XxLkbspCaAaPqNFQoJwn7q",
  "key37": "EZxwg3Rcmc8grKSK8UF7VZvU3D5KhazkGE4CdkWJWZd4aNj7hUHNMsErfG9HkP3ah8kGiCeZETrdUfZ2hkCjJK9",
  "key38": "2PjokQM2mtxGJbUUSCpB6UEQjt5Smmd7caMtUpjU1MuTUWsnqh39HtnBewLMFQfX12m7HkNFCJvsGUyiUAtDKzyw",
  "key39": "3ryWFkxeFWYSVNsyxpa4w6rQrWxwf19QgV6qyXfbYu3jPaDrNVcy7mTAVnxcTUG2js2Ar1ZrGrED4wrDNDNesWkK",
  "key40": "4SyhqW4xBkG8Waufjz24pwXvzw8o2riiwSHZKr9dbRpqFiugsrdSTz3DHTLe5h2Gamx9fa8BT7p39GvrMSrizRS5",
  "key41": "ZrD6trBMC32u8RQanStQcQzpQ14RVVDZdTo1QqrTegxcvrLVh8nvsWbENtGkFcY4VZfQdP6pqvK6D1Ks9ho2Neu",
  "key42": "2HHyf25gAnuMjzLMGkJQQfssS1hMY5mpQyNEuoeDUxw9dxAben8VLq4mcsHnQS9gZBJ7jzBFq3Lv7NUKT4RTDXEq",
  "key43": "ACtNfptjn5wmZMcoyk3EBEcZj58866t2AUR5wLQsGTxaYcrVkRVk8jt8JR5yuXPCAd7Zb6zgt49RG5yaszYhWZu",
  "key44": "46QF5H5FzZUZZ4FiAVnZd5QQHAqR91ipfmJWT7SkejvLjJLCa4FU8DBKxMUXeefRf3bkZKnsg96gfLnxC4bMjmfa"
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
