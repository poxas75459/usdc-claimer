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
    "5sZXsRSWmwMqqPs4TmKcvak9F5hNEihSEurii2PF8Pu1umveffhSVALCofd1zSbgRR1Mu1dCmMpsY1HLtZKtbMak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PGjusN6ybSHYc9YD8uamahqfW3pAL1a9QHw4b11JqGddjsu8eFn8JgMv8fAQ9juUy8qPuuijwAQs4BCvKMg7vhK",
  "key1": "2eP9EYp5qUdqRQMVdRTjV7WpSa2TZBo3rFBgFBA9LXLvuPLjezkJXWojL1WG6KSmw1dPPvA8JzUjM6vjY91XHZMs",
  "key2": "4wWeB334kP7hq8Husx6SQXQqR3aXRRwJq2i4in4dPGrJcFM4VRxBAHm6XxQUpK8jdWuxg3ifc25K9HbwguSWcbRj",
  "key3": "2h8WLntwdjqLAkXEAN6xEkAHzhcbMhZucZuxTyQtXFZfRzwod6zeF3gFtg5cpbbmDpG5YLgfCaA5STk3HqyjoREP",
  "key4": "2UuwKQc8tSbBeM4vcdmmRWQD9HnFf6KmTLw4pfB3bMwPdJByfyKRDht1EQsQLikp3XGW2jBPnhJQEVcpNPQaSUHW",
  "key5": "5u2mQ9GjFa38UHs4eKBw3CMun8vhmbhskbtUHMHG1tT14UFekappRDhahJgf9w39J3pnxFFgC3BTGZXJoum9H2gL",
  "key6": "D3bu9ZH2zy1o58hqbLBvb7Hn4FFnHkvV4CwokQVKdFGeC45ppKrzq8TaxnYGJDXuUvawM5RQwh4GvFSXo6STbub",
  "key7": "6EUv7gnEj8wP9CP7JPzYnTC4ukZZTHoDem5umUHuT7ZUNEQJ5LBBEiUC4ZJAibtyD4mSsdz4V61fhHZsqBzkchj",
  "key8": "5axKnv1REGgVmXufevbkPtrSLKZhWJUtnF1UejJqfTUFWs7eNBEjDNtVCoQSVU86FEY3aLpCH15ssbDXym8SWkZF",
  "key9": "29gQh5zSEVXanwcgeDfvLeXm87iQpECF1RJm4VqUxS5KJdNE2mzUwrM3r5f8dBLDW4mgDs3t3DUryDZmEy9berQT",
  "key10": "2LuxoVPJPwRXHK2gd2EkzRya6g1sqzefwkKMM4TL2kbZm8wagNtW8C3ijS5nRJh5CcrezqdEi5g5QBW345y2jRnD",
  "key11": "4oPnDDT9dcs6pCAhNougCJ4Vb9G8RYkKiDFaAUvJSKTXPrEUFJAK1yr51iyHbhAYczjvh3Rptn8xYSiXa46dKaBh",
  "key12": "53vswQzyZ1hkZRau9EwxSvmzmnkeBKUd7neGwUQThLKWjXtCE1qvXyoD9yXZP8yMoGNSrgyqU4nQ8diTgPDv6qE8",
  "key13": "2MVcQZUtv8BkHzhwSteeLd6JHNThgUiCdtjj3F45miNnNNemAWNsZCTyTXUbjCqJ4GAPUVsXDrmEjEjyH3j2Hknr",
  "key14": "4bJrMgwucw8oKodpUYJSPcc8hEiCsNvvVLGYmfogvAcLHtFn7ifn4Jh8oaZRZwQbpiZCzL29Fzfaiy84pgDPQKiv",
  "key15": "yR34uL3333A4pnQm7a88WaU3eyZ28SYkb8pxZqwqAMk3xWCE9wiUB4YqnniLnWB29Lup88YtfdyGFoZhsZmYfHQ",
  "key16": "3MJkFdEfdPuCBd9ujet6Epu4F3a8Tyisdq4XuNWXGbAXJ8QXpUFfWLJJh8ZJaGfjhGimjT9ewUGeaKqnDKcxkG85",
  "key17": "4CMwNJpBFdQbRA3BaxZrtcHUQR8tATPJKiWDMrq6VLcC5Kj2Xs6w5jvQRaw95AkoP7p8c8R2g6Jb19BQgEEMoxU6",
  "key18": "9BL55u5sNrx87YGgD4yJqvn1XZ3yAWVCWUevg9bRWWg3X7KE3jRmSF3BYN7pJHaDidEEtaRxbCot5yYNkHhNA5T",
  "key19": "3Gm3cqKiVjKzwKxR9pecEnoP8aHLXfxEF4gMFm7wcayW6gpZX7Qm7eGfZQADY1BsHkS2kn8q4yj87Te7tbQN6boB",
  "key20": "52rGQxKYPhevSv639jmMU4Ve1g1jMfxHsYq5ST919jpXKfmBP92jjnq9y6pDM6EMwdwMCCuQBJWZ7ReVT4LVasLw",
  "key21": "5Ms532WEcUhRL5kWavtJG4aMPGUD9aZPCry81iiMpdtAXzZUDe7k76cdbUZ477E7yiBwPKNUsrAruFDos5VZoDce",
  "key22": "jU8rqR8KMH8BD2qAMKY3XVyHvXZroCjXjMaNHs1F2AsVZYQe1BLD1NAD2V8nR8WYP9pd2CrF8b6dR5TgLvvKbXH",
  "key23": "3kLTqwF8SDJBZiCNxDUT75GV8HhARGpuuUsJhK3BQA26p49596xqxxqRRFZ43CWihuWtsZeehC8nsng1JLiYnW2G",
  "key24": "3ytKzZSE27dHxkbEgQPedKqK2NQrWSxRUwh4ZE9Rs7F8m9h1wWNdeaTWKhJv2NPph1QoqF28GcBfnCrFb64Q26GN",
  "key25": "dfroQDT4jkA1KR1rr3gbwka5KQRvjcXa1PbdNwfa9ZQfyoNeRhwzK35T4ZPenbchcoa3W6CxvnHf7SdpixCkp4q",
  "key26": "2RKgCQfysmyaVyx9oTESwXNUDyMTojtiWcPJC6hcYAAsg3rffYxS6yGhodpxBceJLd9JFwEQT1UEhJRPNdc2YaFM",
  "key27": "ho4DNqCkjANxD5qbS77i5nHeg3abtCze4GdvtXfqLy8yrzngnxbXWkPtWLruXnfzfTghFFr6Sm7GxjaUKhN4X5e",
  "key28": "3ifvP2cH6XmbhsUA5zmiT2Ru7dDF8Kcwv1JiEFFDtxwSVouGcGhPkjT2VUNXfWnY4LLvt3BRLmnBZuaWEHneAKQi",
  "key29": "F9riJGeLiDLzYRYHDxMoeC7PhSimEGL9biWnfauCHuo9Uk9ZvCSo8pYRKRNtZcGfzJizqSGxH6dkSCvy9fjgK8J",
  "key30": "37rQkugaJbnJpJoQxtMRxKeFJsvaaXRNjB1K2BUTTD37XEQa7fk5H6rgeEaSzH6AC67qjiRxpoGmYFtw7Zejxf5Y",
  "key31": "47EmRBwAioArTyu937K7aZCHEnMjxWsBi9RbtG68Ywo6VnfFW4AHq7D9vWYarbn9yeRJ1TR3TM7BbAvvyeW1qXET",
  "key32": "4VLzho1RM8opiKvA25qT5i8rJGuiTrkxEwCdDpA5WHa2ThtEXcfZXN5eNCAi3MTbcUbYwSwXyRotKENivU67qV8s",
  "key33": "2KEqhm8BCCxshTVZRqqNYxzEopPBSnQExCPVhEzUaBZa1VB2f6y9xps6EXHCTh1S78Aix8rJqKb3uSZfK4ucruYX",
  "key34": "4iCxehhh2qp2kpth9zAz2c4vgiNpPACJSWDcwc9A9eA5ygbJmyLnKFMiQock5pmEJ5Shrnoeu5b3DB5magPLNH6r",
  "key35": "5aLZckVQ1m15RfXw9wm1QpXFdaXYxwUnvfChXVaf472SdSK4jo6K4a3tx3xP6mn4NF82fUJiH5R3mp2NknFPLmup",
  "key36": "BGibTNiG5599gUP9ZKKVcsgZLJk5heJXMBkMQBfLYpqibbZ788Q3KBncCAthwzAvAVnWezij4QbAtWYCqVJp7BC",
  "key37": "5cSTHdneDvN1LewT3a7E4F7dq5mSMWbWDwKsWy5vF3k1fR8HW3GyR2AGPBHhJH3qBkkZEktrFrxv2pER6whrx8sm",
  "key38": "4353h4odN5zL8BrbrMK9Uivj7QKxZuCn3q94cGCMsfaCTEw3wWv9ih4xDh6jcTE9AP5ay2sys4jd9FNfLVhz5ogy",
  "key39": "3SQjh6pDBPMgCCbvRTPMgyvVWqXn3mJSafVU9CGccranjdHHnphRaGpMvS72F9gxsMWzE1X9dTzLJCtqCXNXuRXs"
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
