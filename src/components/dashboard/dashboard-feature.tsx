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
    "7T6abVcg2cJC968sdxnJPoyEZznpe2zKTVjQBGHmo6hSbvDPaCwBrndknRhetNtybKLz4jV1cQkRKWQYUqVycCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bBT8doQPfiMgnsn3z5PcreVcqtXFg4NMEKCat5z6iFbue8cQjFCfMtuWj66rTCaG2x6Z89tS7qJEQfX18LRRygj",
  "key1": "2CbHqD6sE84a42mUKRuxVNGk7chrvJFB668oYMn1rTNMgCcxssp3gVEsMba5GjyAFUCVAz7izPxN7cyMZrepZDU7",
  "key2": "zMft49UK8GUR24hxCohzTZGNxKnrtRZ5Aq7wmJ2aEEcKeiLnpSePdpbLXzss75kLWNiYwVB5LH352zCRLui1hpR",
  "key3": "4ErzKxAvx1HoRkdBraBUUyV2XE9FY9GrwG2NFpRVxoNHyDGbheGCrSfdQRKUYcxDGmyV27jZEaBpL3hCo4x3KFVH",
  "key4": "tYMt9V5CS8SaBGSyyxRG5edbYMDbiusabm1k3P6qBKuyaST3hHB6Si2jkFLCdr2sHnAPMuC5Wt2qKhmHycbzJkz",
  "key5": "3xQdWwKnsPWbUa3fKg2Qnp52P1M4tVnDmE6JAPQvPqC6rkKvkq72PrPapQ4r62yDZLC783DRxCDGebeXYiYVgTDL",
  "key6": "5o45hgpie4SkN4maovfRQMg1AyFSJtwc4tGQ39Kd4QxRjRPBZ3CcNWuufCFYK33eZpQ6bzQLHEkToetS79Yryj2P",
  "key7": "4BoezDHf8yYtcwNTYn4GUs8AkF3VtYXJXSDqnsTPB45t5ihzcCSVjAEprxU6AU5jvPBdz4o7p3MNxYEujBybtZQQ",
  "key8": "64RDJSguUFWebdi2Nmpxyba7YXWw3KdQFBLG7f8aLVsCGyCn5SYazj48hYMymVuCDx2wHcG7iU9QZuSGvsKKLuqW",
  "key9": "3bUCoZkEGpkjo3NqqnNK5Z7CVTvfebEDu7GsFZ2rLYDAjjfCmXKYAA8r56iRFVPnGpnv2Ujv88pbxmfhuyv6M9H5",
  "key10": "3vS3SnqUjzbCAnNF8LZHwc4rpM73oYBbFi5ZkD49BM5r46DcEjwtVMWvyXxdznGfXVqDjLA4h9BTujgjcU9LTN6i",
  "key11": "66Q8cYEQarCCCunJ4PJMgcEjzMr2crcBN7pg3eV1xekHemAtbtJJGnbSbse9Jh2DpeNyAkzy6wPq4hmW4geaeyy9",
  "key12": "65i2AFi6hkQFBRy2eptd4b6kHAjunicLG6Bp32b8zddZSiBakioTYMc1GVCUMwu79pnGQ8vNe8wkQ3tLNve9anea",
  "key13": "5pFddmAtgWTnRvru7PB7KVdjkWsATNGMBK3LcVwgmLKjHXfEEBVa5CZZt72d3XCW1R9ezpWAQ2MRDSJjPQim9Rd4",
  "key14": "29ssoV7hcivXKzNK6J1qK3uMiHmUTAeLFB5GWWjixXLFPNuugmj7SSQSRAb3kEUDR8QdUddmxsCq2TeZh4wMQCrM",
  "key15": "Urg35RZbYsfDm1JUH5B1WHkbxcQyEMz5KA4AFgErdRTokr5U7aYLZcg56MS3K7Fdmza3KpCaVFM3kCLBnv295Tp",
  "key16": "3oK4BoD6asYW1ajyKamJn2qQQxLzMGNEih4C152z3M7UzYoCND4L3nR4tLDKMNMd17e5uxTCwD6CL138tLjJGaBy",
  "key17": "GwYjzk3WBN6yM3LHAqheYPtjB4VMMHgfwNY45VA5uj7RWRqSdZVFyftAByowVMhHNpc9dRxRvunf5H3yvnhq2Pz",
  "key18": "5Vpxhzsu1HiFHQjLJ5ydCo831oDUa4cv8A3yBHSJ6W6vri61DYjLRx83Vg6u22T7Yn751bmTqrm7gz9thnUx9B5z",
  "key19": "5JqK2gB6v1LcDnrigaPz34cDGRhWyX8aQsfNdzkvpMvg1JcCA2F74HLsGw1cJu8nUn2C9GRG9eCg9sqRbjLiy16R",
  "key20": "4BmJMLtHEScYPtSnTJLx2TY6hanF1NpGyVdscJScyjnMa4AvRfqKqsG9hmhVYvKtpcxUNYKr6xeB4YJj57e6VsdJ",
  "key21": "4ZyjXFzsLJZQDonmiojZ6YwBXz5nDdA32QQnhEXCHoLwBpqteNZBEb2qWd3Wzo8RWvcznBZG7PTz1uuAPtdBDWoz",
  "key22": "4EZJEgJyi9dqQJortF8XBYAfGFVxYbW84eVQFDftTk1QMQX1sN8Cf31KiWa2n2eHeDX4MPJ5XR1ojvbFdVcaBHuR",
  "key23": "3qMCWBN2ZkWA8bqTGvGibfJ3ijDqtXSYv7zLpoJByRcFQPgxPTz5gQXo1QMCUezsVTpoN62547AJzzxbEV2EdZMs",
  "key24": "2t9y6LuxZk6sssmChT1b19Xaoak8pYiJBGEwT7zFoseYKewLRfNh27gAbkdQW5jQ8ZZN4j4pvbKWahm5a5JyMHmi",
  "key25": "35KPRYFD7wvuXYPDxavwyNq6CDNQRat6MLuXo1wujYzjNSjzwjS98gsiBD5LXA8XDrmgsnoxu1HVhLQzYjKAe4WN",
  "key26": "63SSZcirQJSUh3BgpLh96kq6wQTNr9EN5utpbpj5xhTSZyT22UQ88hQNNgrbvRLmsCt5bLDty9e4SNXAE9n3aKhq",
  "key27": "JSp5QZSyKW4SCQZS9Dt2QFkE5HnMihe6BCd9J5rCTeB8bXh3Y65MmSqTYkehbkJyPfMVumW8SfqiNo1gYXRGy33",
  "key28": "4QqDkXg4ys5BaLyAoWeYLYU3TVacYHm7NHPyWNAyYnLF22sByD69ZJpFSnJ5Db2rvUmonbc13DmAKLMgwGmwqM2W",
  "key29": "3bLqdnHAPL6JHcBiDyyeUJTpAtZ1CsPSgYvpxkMec7FnfSieANaHYMj6wmSDkFCbaL7FuMW7fjHeUfweteBXVkRi",
  "key30": "5pqzAK6tGCgRPb5Zx4eFpVPeZjnyCgQAfXqjq6hgbgZ2CZYmM7vsSyZSYJuZabwVKU7PQeKonhZMqP5sW2UCkaKP",
  "key31": "5eBosxsNjxXQnrzVCPBTVwJw7VQk7UnxMDfG3QcHfiwE5rVfkittLrfkkv4fa1tu7yfTMBdeD3G6s3uiLQtmnjgU",
  "key32": "4gEnB237trXbQw44euLM8A4n4AYrC1jkUuCnTZTUvCwdfP1Y7Dgab2cFY846NpfG8Gq93qZKV9aJrKiJ7QKefcQa",
  "key33": "2H6YX6p4KNAsANZPg6Xa8fdGQoZ377iRsBy6gbzJcA45GznUEZJSjETt65oqfGNuLKntframh7H6hSfDWJ1Fr951",
  "key34": "QFfZogkAMfxXPTdBCXiNKz9WUybBhQCJVFhNAjCmKnL4ANeiNP84wUfS4jvNR6MMCJ9b8rgaW4qxdVPS8crbYPe",
  "key35": "3Sf4UyMmoavBqUFQNCD3mPsRGg4DTkVLZdg4USPUhfEBX4c4VGbbMjdGPs26fpGuo75XUK6rJ41U3jydhZmVjMbd",
  "key36": "dsFZMaPCpwEHmhM555fyeud2bnVJXD6Co53wafjNF9wwQ8jmYiiTA5VcKve6jUXtM1gFpLQPPmjg7ayDkbyRkhC"
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
