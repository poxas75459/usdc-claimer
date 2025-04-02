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
    "5TEpDpZrjTFWJxQ982FKsr4LcNFZKF5qVSGqxs27ZWPDqDzBk8sm54jdEDWuPoZTyWYRFHV7251o1cHCtwgDujju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bzETDksBNL1geXVZ4mEV2uoUAQNyaGt9uNodfjA3CJF2wnMbT6SHJZvbMnvD3ur17ypVosqgEtnjMB8jiNCZTnT",
  "key1": "4wApsWUoM2tHuW7ckgouWmDJ1VKoom2nd1poa89cn6kR1TPZmsCdVTbnH5NUFXurwCNonZzUjoeoa9QZ2QrLKiZX",
  "key2": "4qVyWNvHacAEeFibzVY6Zo1SjSPDFGqzj8tZqhrSpjj4Q2KsFKxQxt2SYLXRSMYWwMhvh8Y1W3F6ha2pfpRRoshU",
  "key3": "4EYWcCfs92X6rWdoi1ewBbXvf3qApzTgiomXYsGsqsxp4vRxyqJCJr1EGjmZ2pUGJsMKhjaH7A7Dj5DLpJFuDJLs",
  "key4": "gBuANbnGPrzgsfbNHZDUY8SkEXwBf6yiHu2sHYMaNKMpzYDnszTj2GrKisxMJKgJTMs6YHKD6HtsNQa62ZRabMD",
  "key5": "4s9EceVqVY871e8B9wGvG7fwqvFAgceGieDcTzfrpNXQWQZvou4FdfuwUjKnGAEz4dLTGbvMDwaHtdM9qfAT7Pa",
  "key6": "4tgrRVxqHFdcSbduqbvu1zppVJwpGJabDS4YYwtmh2pAPKrnabX9TtGXXXQnfTuhJkFqYN4WgGJwNtTdSZs1a8KA",
  "key7": "4H29DfTJVffmLyBByMQ5XdFpZP4yvff1uQN23VavRT4PcYAS36nUy288guLJRrrNiw3Kkn4yKEB1oNXr2A4fsStr",
  "key8": "mjoiVRHfvY2T4cX7XPdgAEqiRkAp2LppDNiWHq85mRiB4iLMTBfct9BV5zBpLcFcz4WioEDAMzrcFMb7zo7xRgN",
  "key9": "4WQYyjSFymJG96eE8Ae861QtYy21CucrD99SycwNF6St9Y4jN6QifonKAq5yXNrn4REizau1hcgrLk4NpppCswJA",
  "key10": "5V5gHiaHhFPLyHMWxa98A2Ybq4rE9YTJ1SPpUMCt2MymL1nSk4SyqXha17V3hjRU7kRy6eDGUHcfZRJJze99TqPs",
  "key11": "3SugrQUnCpdqhRW1a65ryiLDkttf3KqmKiojFG4pmaTL3CSP3C7nQ9yvWAgPqknFJgxUFzRw2g5TJJesqNQqyVQq",
  "key12": "FsyszvJAW2rDJmR3e2gjcphhnb5NrFgTv4juETUKGJzwkxzmRg2nKauaxzZN6Fu76jrX3GcvSsHoqEBgMF7bcty",
  "key13": "5NbaLw83kgkiDqPEe8FbMDawt8DvGSp7zoEkMsd7HQntXTw1sHTHnxEmoY3eg6LySfsJmJSdTpYjJZBT2euB1fns",
  "key14": "5NJ2ca3nu7V71HoU49z7uXtmgZMCqZENpUzA7Pwf8R4t29hvD6zypVW9CDWmKHdKQwEEPfN41uhovX2nE7J13yBJ",
  "key15": "4rAU9HF2VUGCEy8W2dUi8kbhytnTQRTYBdKTiAKrUghZ2aiYEH68TVkmMvGwTKJJrbgdTWiK8NPd7T6xJPVyXW2M",
  "key16": "2jd5fLvgDzBAfNrr1ApZvn1Amh1daZcmY1wvUA95jYK48U2jEhCXdvKh3cCQembseMMTcrCHdtcJjGM2fa38ae2k",
  "key17": "63NBoH8CH5aYA6duaanhdRwdT2qaQNM67CZiF8CcH9phZ8Dbe7FZ7f1NTujGx47dSd9CLkQAxD2B5xiiinsoyYDt",
  "key18": "3e6JeH6JKzQpuNjjGWhzX3jkpofY3xshtxEvw4jHGFYkhbxnsWYpencbMRyxzV2J1b1TERB9b8HcKvWgzr3hcQJU",
  "key19": "65xwMpVPL1oLvLNR9dEDwMgwgyc3kogmucHcDZmabbdxQUiV4yfsy3NKYBPyUQsJb7bZ3mQZhJ47Np6cqabKTxhx",
  "key20": "2rAPYbXR39DZTQmiS8wVrkjoukS9ETiCNfH1Z9RgHetHtytkttzrPfsEMiM8aNJk9C2fpLuU8SVk2fHJRCkN1RAe",
  "key21": "38WAbg3HR1KRijwbiG2RX2fp832CoPjqEhfoatM458zVhDV7AXaYSLS5gTo9EYpgTwrgU2f6a8pAroNz96PvrRnj",
  "key22": "VxG93Fic7bXwnXsG5LpvHzRgNrQpsLf7HsNRbs4NsPphCWvDF2HvRqc7PxYRi8ysaEY6ytiQ3BXTuZ3fwiP5CWE",
  "key23": "4rxAr2QX2wnSknNCxATbQXyUAVFhJcHbdxBeCfjkSygSLFbrP59Y7AQft82ysvgnD2dd54GCazrSY7ef6VMj1EVR",
  "key24": "uQBjWHhMLN4yg1SMQym1yQi5ADdQckLCBVwZPEX6Yxt2sLh5epn6eHUnwaMA7a3VaoCxrEo6esRnaonz71k5Zge",
  "key25": "4wmiqVnQ9x7U4YndvxWaaKwYXTr94efwTuRi3QabXpvMrwdZaw5PWn6zGAwLB8bTaG9cQCn8kzUssDL7ULUwfQ7k",
  "key26": "wdE7KBqHLR2kvEUsiR2fPXBSwbcG75Crf46R3TZBXbgfDanMQVYtqfshTz1rfsueWaCmWRhBt75XGy1HaNXtjJU",
  "key27": "XmgbdcS6CK6Dwb5j56vj6jqaHxMg6CEzbw9BMwfevKCL71MA6HWxEULXY4r8euyntjzAv28M54DGExzjSy2nvjA",
  "key28": "NWWGnHjic8RoV4HXqNNk4PWuBwgXx2nWZfeLR8PSSnsgG1GjmY31Td3GRTeSn5xXM9jiASrNntqMg5748Nq66C3",
  "key29": "2CJDNVtR1XBEAL4BNcNjoDQSLTKCZem5NyH4SX6YUYmGPEP66SqWRFmXVzQtatYG6M4e4uAXtmf8RtoJS7ezrPs6",
  "key30": "3GyjUMpgEYoXNcAwqVEC9ytSuxv7qqDe9kiVqMGkbvG5CCuZ5bTYvpjsdrzwt1mLVwTNkrpzmyCuNWUup3KL7fAf",
  "key31": "67LJigiQFtHEkgUv6BnYGA3GEENKiQpqxMQKvLMHKZwfvASyNXh3m3uQZ9gLtaeM3wGgSvD2oBAQuNKojmnmgDmh"
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
