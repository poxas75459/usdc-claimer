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
    "4K6x5u83TgHgnEuXCsJrvUAE3a2LUKUPo6Efjn8DxuzL3XKf86bhaDxs3WmaSkp9A4doVFoBKmWdqP6RF5hD2LTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kVcD67hAPLaDF6dNmqAzjNUBoYvko6PdmEafwVCqKC5vtriTaPzCWuSySKriCt2AVH2QdzNV4MkGzG9kiUgcaqA",
  "key1": "5hkdQBGmWqWgkXvm4TRUthRt7yKwMebdTvRTu5LVnqRTD6SkUkDtG4w6BBCVJxXoPbZkXTAX1CceT61HAMT94jYH",
  "key2": "UeFoDtkqfXUrDN1DHt5xm8UACt9rKVEs4RfEJ72Zygz6sWoSn5YJikrBd5Du1658Aku9XxvQ7iTGdjCyRXWmiv3",
  "key3": "3t4WY5day9Lu1G1PYB8jWoTtc76soU5oPWx1UxqLGpVpdpY9MBgRXNqScSCUXJAk89S2Ngd2hF7kJmKev8Ee6ZZM",
  "key4": "5nYUJdmDQkAQ77PrvcJyvkdccBfTKfPUWhhQ6vZR83xZHnzVRdwEqNWddbMdpiHMYWFwiPGNnFBMDrrTitpJVjTw",
  "key5": "4tpKzjnTs2XKCHMrkpvwy4uPX3wVYs5hYC9oGYHyAdP9rGwL5huP95uuM4w3bRcdAYNvHLcfbYoTxH4EhVBdd1U7",
  "key6": "2kfh8CJJqdhSVkrEh7rJicAEBeqdtXbxRCVJoaQmyeNoSNeG4ga81ATENXPBzEncgTEbD9isFKvo29GAd3H8Gbed",
  "key7": "4YD1LHyCE3X7N3gmhwhjARH9PAeYCxC8bRnvyTBuHzuRgX5hM3Bz9jNFodNxW4nMHdsnYaj3MGiHmaBFMfA5xZTc",
  "key8": "2C4kQVR2qrXpbgJ7deyiibKdXi2v1Mni9rfdL6tePdbnwusfDcP4SiRWjBmvmP5N1YcWe6WN7G2qBrhN9YZ6PFyQ",
  "key9": "5Dvjta1ksuPF9cnznBKyoe1eggfbaESwuiB3wLPtAmkfPUHszkEdGd8TnNofM5iRTPfUZgfArhmKdrvi69QrgVc",
  "key10": "2HHgqF31bexmfDWDdmVP4zok5T5zWSFjrSSbaFVtMVdTA8xve4i52gxQXVjJNCmX23gmedyrLhu8iSrGvjFN2U6h",
  "key11": "oawGKtgy1ihJcHvTJCpt9KT5EUPFFtuwwGadQ2nNYHv9HTvrCMqRVhT7HYhE4Bn72Mw82QZBJA8kt6fNZiqtJcy",
  "key12": "RsJjAjBcGjQhgtNYqbYLwMXoCbo9qkaksaLDYYTbQxqLA64wjfkwMVaLEgjQvZHYs5e2yveQ5H2HGb989RNPhGP",
  "key13": "2qc3XcNHqiWzsoBdZRLN1M4tw7hB3JQ4muS9iTvWx3B1qU386vALdthe9D8htUuWCCJgGQrjcvMKW5BjejufAbAj",
  "key14": "5wV9Yeutx24Zca1sgzedC4YuYanPKxRiE8oeADgLpJefi9rkPBcnAiX4cYyqkZZUbhvrD1X8Cep9TGh6rHMVcrT1",
  "key15": "3U7sGAL7Dzu1Ajr77VGdfceiRZZ3JaVuGvfyCNyHyASewhrhVsGcAcbS7jXxQDgXUNWgSSe1nWcBnXk9YQemNTXr",
  "key16": "2Mmv9caRcDUUvwizNDAR7Byo3XFnwHu9mvsUAGpihn6oYq8qeHZk6GfbQxZyo5JguAUYC32L21w2Yeag8gmk5v56",
  "key17": "4KsAfpP1yyz8rnkFxX7jp3EScgVu4AmnwZZThtk6kAGKiLz8j2rdxZSsZJt7EeWJSF9QdAzLuqFuzVHuwzYMKfYY",
  "key18": "w8wSb8QZVYhDAraiT2mVMk8Bfy37sEW99WfjNbL3nTbBmgcuTQRjBJgvfffBGmdMJzkRr3LeBWw2TPbJSWNmhqs",
  "key19": "NSX8ruen8dnE1iAfwmbCV3M1tKPRKgnNMruvvXRPguELMHV6jNg52KgwEqMmjwJqDu4GELdBdVDNgBmewJLhQQa",
  "key20": "67m5QcQAo6z8PycqXMK3UkRXpcZHuYRQVLqps9mApe3UVydk3BYGtiHRcyH9ozH7gDNFruhJdmyFCAVZnh8WQksh",
  "key21": "3y6Lom6sCLCCUq34cHi2hrDmqk2ipofcQGhkNktWWFecMf9wCjdg6encGC5xFUHDxkbPBJw9E6GPUPSZzytsBdA8",
  "key22": "2Hd4s9ibxarQvbvHEnBpLGrrBsrLu5QfHKtz3ZQ7xZhZPoYkRNy6USGp1CUmJFoBv55jXveXfEmyRLdLdacv1Dxb",
  "key23": "tW5ZyHVGRDUGAVnCrLSMe18E2VWHsdGu9AbLRyjfwgYdEvvXTDmhuwzzWdCXVo3i8xFjPPZCXHw7pvj4kWsSFsM",
  "key24": "4tFLSUeZdACFmvsHczZiiH2BhsyCkRKvexRpwuUfC4R53jRtCRWjMUX4AyHpbCtaEy8fMFEbUzyh1QAespqSswBW",
  "key25": "2y2NjeYFWwfGKMBsFKuyH88A3Pr7KB9czj8Jprj6p4Rr2raAVs9CgQtcqVLvhxhAfEGirCmVtZgXgNrmNmeQBWwD",
  "key26": "4v6HXT2wtocupy33WdUgn433CWgt7twybAEdxv1aoJsnd9i5WPva8j4RaKQUkbepWMRUvv5aDD7eXB6xCn6m1uR7",
  "key27": "2zLo8k2cJyBgR6jDowUs4FNyrGpj3JxjBw9Ubr8xMTXrmwaAz8fMtNovStBqf3FuRddVsrkfqTbK2C56xxWcQmYM",
  "key28": "44HPVW4TfdAV2EAwAAA4AD3PhRZT2vuvkUSevqDiW2nwA2tan2hJr7ubanrd77MPJSduAoDFnBBTYv4uBjyQ5W2H",
  "key29": "3FtkWTFd1e7NnxnbwvoQA2TMX2LLrmTmU4gydbKc3d8U6DbH9RHssdJC7pgGXoSAhyZrQnKx99E7Hwn6y27VeF4w"
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
