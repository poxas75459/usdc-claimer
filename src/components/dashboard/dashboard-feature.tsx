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
    "2XvyzLmufCyHkyoy7e1VYoEseYPWZ6it9x5Lqo9hhWagWeRfUidz17xvniMgTPtT9rJCSoEJSGZBvC5s1pnh9zsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D3W6LiZYBMrE5cwDpoQiBUb91JQVmg2ZgzJPbvnqx2QCJvrFD4CidDxYGxhQJLpNjgFAGCJH8ke3GxzZFYpii5s",
  "key1": "5y8S95cmGKCXQmd8an7m2ERhDTgpzFfHKrTWBquCuqLKqQGTWDFxorxHYk9KKYkvQmLLKCRZNZHcYSngUERUQW2j",
  "key2": "5hUfV81P8Fm85HpLEUALu7prbQownAPAVwNQzLkuc6dgRYLL1L3zHn7WUxpgRCe2LBZVwXAKEJEC3gNxiF835aEP",
  "key3": "3tF2JBm8UbjyZQSFjnLzLnPVkKw4TAZ8f4gENTejVXoZURR3XbqWxWYcSPe4C42vbX1WZu1nyDY8Eg5jATKB4ucw",
  "key4": "66MzRPoESsYPkJvwY2Er7Q2gJc1xST9t4A18WRPm4ycs2Vtv4ttqTWNi5tnCn2d1JBPcoBm22HR4HsBsuNCs5L3M",
  "key5": "2hYTTQxok4T4MtVG57ZbbUGAGXaJY39Savi51oytyrs1Uo9ZTo7AJYf1MVav8ueokp3VvLgwkzTAmUwndT1TGwuw",
  "key6": "2iSxhjZmYymz97ZkwPQxM5AqmEuCdCvGX7twK8s72LeuqPsprFFkdaC9DMVmHY7w44Pi43CtavxEvf4JGQy7HvRP",
  "key7": "2pYyWzvYsRryE1rYjnMXf3jzbJWLPKZCftadBUyRqUMQRPErPbBg15rp8Hq4ECiSotCrvwDBerZ9S3vjYdjZPxia",
  "key8": "5Z2Unc9quvVKpiJnhLT9u5zwwRNEBjuXKcEnfLPub4wmdzvyQnHF8zuGYhvnM9M8DEa9nphgrjEu6U4aGmyLJsYY",
  "key9": "4tjuBNkBRE1SegLGQokUAaRWpxrV2TiU6gjNgD2Se5hspHzsaEQPfeno4cbfBLXo3EZc8qeocwEPMXW5a5Xe4FmU",
  "key10": "BjXqfPxWvcwTVYpr7MTirdNzUEWrE5UNtrM6gjMKvR1nHiGieiU8ytdmDhiKbASZX3YHVY391Pxs2rAp8zD1GJa",
  "key11": "Pp1FCf9DS3Bryt5ht2336vCwR19NzDL7u6VdnxuiKmBeJgXFDeNExsKt4uakvBuohhRLmx86gLgGAjFpJuDYHs8",
  "key12": "2L6hf2kqv3hY796QYrSHFau1bcyY66XXypbT9xFWs8AGAMUTWe7sdzdTUqszxndQDXaPZ9B7bsvx2RvbKBjNyFug",
  "key13": "5sV7NsNq6vCjiTBLWQPHzFrwdgBRGU8pvfyLLbk1yopwZzXPcnp6yroDb7kSFgdxUJB8GEZ1bHag8JP1wyFdwt37",
  "key14": "52Xv69A5VhHSQaUP2Ax3NRQJKiMSyA9UkFVALQDGRwzFE6JtCvfkFU4XektrWkRETx7toJ32vUupLCJ35zGpen7A",
  "key15": "5LCdLEcFEm2UvDPQN5CbH44XJirPgpJusjnFc39HfQwFf1jMon5xnx8bE5aYhw8Yxo51krnDJfUge9sRBNwYUZBr",
  "key16": "38nd8K6aVVVLSSLhbaCELDygWdpWeoYgbouNRJ3Z5qBbbWGe79f8KjbiZ1Rx994S5ZyimYSAjDYAR5yycax1hPB1",
  "key17": "4MBCmgc5uRZEkE6YCwjU4XCH2UN3kB4TUeQp8uE6hGQDbCgDgK3GhW67ZhNqqPQfWQANPN99BvmXvKA69UH1p9T8",
  "key18": "2saSCtgo3fMRkYpFA3gVoheu1Mpbo6kwWYCyFBrNhfBM2xLohom1izkp9sEwRaDNZxMSx8Yt5vk62qnUzKgHvPxX",
  "key19": "5zo7SqLdR4CQa1g3odqjh3Jny8Lp7VzyUMyaNvS9E57yeMJUERcyfsWRVp1kkc7uir2BcyjtAU5115FQMsj8shJA",
  "key20": "WJvUkFWjg8brSXX8sJRopNbHKYKTDSYJB8zsXVJGBLK3LeBf9vqDtFFPVEj5Bp9d8dbkLRMWHJWPgnZzUHfitvP",
  "key21": "2W68ZP5KocWoKmrhj5WNVtoA5e5N1cgwMe17FnZzMNUjQXA8wNsKGTTedzUEpoTN513qZqew9hrh2PoFWzeq6wpg",
  "key22": "46WEYxVSFE5t6ic6W2ez6pqXMfosezwaW95dCXbrBRgoqz2BqcdfMnkJpmpkb98SwqcsgSi87MNj6rUHotk2QWqA",
  "key23": "YdPCEYkMzJ5kLe1hMzLm1RWa7AHdzXfckidqTJ52xeMihttnJRpyVdEbASQr6yRNWW6FKUeeae74Dqw59H7eGFU",
  "key24": "nd2aWyCiX8ReSWHk9QeF2eFc74zEySEqUVpqYaW39FxxrCVC2wBfUYLqRJnWrj6J3U1EJM653c2PXTEwWTDmtWz",
  "key25": "3SoPcTMJFeah8JVEk5A6QgjghUyNtSUPy1GBWgJZUsFzBVpGocH3Ky9y1msuoNLi6LtMJy2QSv2nt4XHH15X5D3L",
  "key26": "3xoxdCWqtiqUhsL6MXGAeytoJvBRqzyo6Gezg2dEFNjtrYydTGFgtdFeBwi13XrtR6hwgQPJHumue1g2gagF7BJo",
  "key27": "4zY4i3acuvq94z1LuHPK35A4QVJLS1VjQkHHmmZK5UZNbfxcvEV3qk8zSh17Tyd3VVzW3bCwRLxSTyo2Dv8MTuE9",
  "key28": "2iWDcqT6Sf7etRQsriRVRiEnswVu1vmPDKDQwYvjFzKMvJ414qz96tqA1C4FXkXeRDwFkCqqjEUrL4W3hneK5JdY",
  "key29": "3r4LiNas2evpzzmWm9dA9WmZ7zDQiUWdSwcjxSXYm6Qbq3fQV1dHBZXczr4v47AXa3oqidkVau7MF46xjZLox1iG",
  "key30": "5ijEmMaikCQjj34VwgZRD2jrtM3dCSxaFmrXMGNsbGuhDPW53Yqj7DZACoWnmBDnzQFmqZ4iimyDUfUYssGSeZVP",
  "key31": "2KR3ZFdJvSMTAW4CKWtVSMZnM4SasvC5SJ3cxEBdVX7m7fpAKwrZ8NbtxWoBcu3B128eQRi1FXEZfnANV5BMotQ7",
  "key32": "4y8gDruFpdH3BkatwXGWd68xAXTD7YSMB9m5gRjWyhV66LJxVdArV2sEPy9PwEEzvyzdmAFtt23v66dEJ7aC4xbT",
  "key33": "PRzn9eqJ5b5Xy1chZfykRcS4kM2U7wuzNgJ27T7HFNWjT94KeygX5YvJqmQNsjPFfE6NwjF9j5P3674E9XKcu7p",
  "key34": "2KboLn12yH56DUbxGUtX6F3JEFNbTfwUke9eLCSUP15fLxpjCFPjsp9W9whJv4SKSQnmqv45Kpijs6hExpPMKKPB"
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
