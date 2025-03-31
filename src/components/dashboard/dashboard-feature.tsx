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
    "49bhi9XJEsvmSyN5m6pTJJpzcpynAw4YYMDCEFSsJg66eiAFNLwsL41obFBVS8nREhfMzBbvthLxNdNi5TqzPKWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5auUHMY5kizjRKqpwrzpsH2675xrQyJiarqHJprYEdhTCRDtQNkR8wAQSKzHdPxKFrGEyj4soEWyJJjaWx7f1uFu",
  "key1": "5zzkLBJbGZ982KZ3j9TkkvHYhFNQmy9Rkd4ciJ92Wj4BsHHazFPjtdToiqwHYqawo8TpnXSQgizntZGgkhwSTE19",
  "key2": "4jitXQgf8FXB4K1scJgDohAFv8tS4zbz1Hi8TJFdSPiqK2rhcSbwgUt8dop1KvBCqCRSuTYvf3MbxJHL1v4JKDRy",
  "key3": "3oAfHKbGpe9DiotRMewUcHMMNfXVrxGwmBEGyHMkLA7FtYHQ7vWSTw3LENGvc2ym9JspUuRy1yzuBWRi9f8bWmfX",
  "key4": "4gNocw5Ld2NjdkcP8GPtyXYL5ucBLf6w6Tb5CHTfK44wKQ8YUbWAfsQ4pyXXUmn57fawkb1PtsYocfiEcirL3KZ",
  "key5": "5Mba2XiDHoLoSffa2HTTy8ZdoKLdtFqUy5GAfqBBLCTgPKPn7L5kjvw3PKnXnNNj1qCY6arFkRnjE9RtoBXza8GL",
  "key6": "3KCMGXHAoMmEKNvcF68AnRzZWUfDtjSRRa7pJRxkfuwXBukkpCYSXDZH1QnTNdDK9po4PKiyEidtm7npwsocBMWQ",
  "key7": "b78mqoVtAFJgtYMVksKNtuNZ37Wyy7Z4Ao7TqvUaKW9bNjKQUbwoqRPLLnhNrPJ4Q7rCv5kqgfXXCKuRREW1eQC",
  "key8": "2N8T2WBmZ7Et8X2JBPGCPSx2obEtty1ZCwUT15iiGfd7Yq6uP849K2JVHb888gcuijQnpK5sGfKXwMye4aibYUGe",
  "key9": "5s2Qu4X5mHdjuKhFe5xr2yXZwhW3UN9maJcNe79SCg6CkQJrUGQzbQSDkoz49Ze3UsJ7Z7j1Y1Q5XvsXPXBDYciT",
  "key10": "4K8XZBCURUeMncWT8ARmrVV4oadqBYo8iy7zL37m5AsjmXHZxFqMXpPpSLYVJg4Kmg3pPdrZMdUyRxXcGtnjLuoA",
  "key11": "29XXij7R1x1uVQHgRoegxfKxADiLHMQEjxfYgTw38vhrVGA4HzzFbKRjMCEnqPefMLS2j2LVGeyGt1fo6xBtFoTm",
  "key12": "5iNxFu5gVu1GHBgXEKutqmP6vgfG8vEpuLm5HB6mtL3CuXN5RCrRv6DHuy12ySQyQ4dazqTserH5f2Tp7cw48xoc",
  "key13": "gXi5Yb6E2GdSiWRWHfnq5fZfT35BMUvJwKmC7w7ryT9MAD39ptW5SusTDszKAnQp2e1Mp22DDPq7b9mMH2KmsjE",
  "key14": "5V2K8y8eWVJvWnQRxos6nBibzw48JumcmmCkgzdCFLZvWWFypKKvCjw1H8Y9hZYQvDumBEE4n9dk9fpHNzktYCSE",
  "key15": "4tmhESQfgZLheisKngmVXEqXJJT5VfjbkLKswPZZAaHJYJG44gAn22oaAnZpceU4BjfduBkwriFiDoH2Kfn534nT",
  "key16": "5E24x2APbkXXgm37S3onFhPnhG83GgGuREUVAiSrgEAqrqrivUVBuggAFxQZgigTUQEmdF7B33VYjbrmt1NV4BUq",
  "key17": "3HYKcaDpyJVunGXJGkYz7KD4VrZwuPunjsihpRVmb38hi6EzMGvZeHnmnx6s7UXtQ6XfZ25AkQCFiUv6Jpy4X1Vd",
  "key18": "3VRTtjCMQ4UnWK7ueueDSLrZCoMsZ9967m5epEgYBGCYNDzPNXKURo1jxK2D7seDKSKBikN2iqnzExXGxhXYDf7A",
  "key19": "3pLrDpbFVYC23mkKJ5PWoJ8ivpuESpLKxdX9E5nA87CaFMHzsih9inQFZ8Sq8ZdTMaoMKdfCZUG11VBcdatSPP9d",
  "key20": "3FcD8tQmKd7qfMtL4BgTGE1BomkDdgZcSmpVuqBQVgKMGjtWfifVR6jCJ3q1ZZcc5kpkwpE8NGSD3qT6QtV9yukr",
  "key21": "3wC1kWZv3kW4gTiit3vcsbRJVDWCvPCVK9rtJ5hwuhv1AHCBmPsATTdGr3zbSNe4waufUreWFgthGvdwk529vG3Y",
  "key22": "3KgrSu2iqRg2EZpJcFofLjh1iCjU326Qq3MqHJ2hy8r8yZrfdYZy4TkF88GfkpQA3hbrgB6ejUNAvuPMAZUzJUdv",
  "key23": "wMTqecZiCaCKoHcwHxQdC294gUj1HEjGvryWed5mrjWrH7rBWXB8aCDaTsTQXnK4kPe8azxNjeHG4TjDtLPY3tQ",
  "key24": "GThSDKeTT7TzWzHje4NhWrWAro9fGBD9KKXJqW7BZhLiiW5s4kS5xWMeFX11UgreMaR3F5Wfwj9M7e8nAJH4C4d",
  "key25": "2W61MyqHiFcXUoWz6fzrUcon46V6dMNH4Jz5iGfph2B3zbg1Xr4dCqbQQec9MkdpGKdqxA7azQkUijLS2TLcBu2T",
  "key26": "2wvxR6BLpFKiD5QLjbYno7ibRP6qyx28NnYHPt7pQEaNWHHJ672JqRNc5Jyo6FyAnZz7xzgfGXyeowprAFiHqC5j",
  "key27": "H4ywU5FzLepmWMxW8w6TukiskLVghKKk1VM6oVDK79Tk4QQVGxqZQPY9H4cXrJrwYVfDxWkkVYc2ZHFjXR3ogb9",
  "key28": "27Yb6ySFafSaKKvMMAzF1wtYmUt71qQxC8C6JKqWarn6Mz9EAZBPvjX9PRHAtccqGnyaD8DmZEY2psbnoxEUhpca",
  "key29": "54RxEnoohgM6CeLtqQyGkpkb7MPAtHAQzCjRqjDvXE9dYegrZT9tB5XWwf84ban4TPcaGVUu2wgiRiMrJbWtTPK2",
  "key30": "3bsm7rLjdELqY182P6zvykKVi6zebZ52de4ZyH34NYXosUAr1x8xuGn6MVqDGwWvkxMhSWALdNBy6dQEWmzFdQaC",
  "key31": "2Zg2wBPaprx6XoMD2T2QTbrD5E8V6nSs1b4VMQnbF1gTA4sc7761w73X1je8JeGL77v5x474yeekQjpJtLQXh9uG",
  "key32": "QmA8FT2mT2wmSvUL5HamVw6DM1JuoAPSipYPd4w157mcrBaeJXX7ygA876LeZBuNAt5BhKuPjTmCkW7KYvYed66",
  "key33": "33FvxMWvXVVUfMUwrsiVwfhoXJ7PiPfdmPxn5F9ytfZeFShzQnipfqjay13Z1NnokR8771CeAhX4FkmFuAsQNEJf",
  "key34": "yoaPUstTGChUWt3L37642LgQdBP1D1cvqXZQGtuezBVtB4284J9ZKWHn2xQbrxnDfYHSGKBm7ipBP2ymrzMqS18",
  "key35": "63MDnoAQK6L316TEAmM137DrT2b4Q5fdxnqaBX4Xr9LxV3p6LtRLHjJ6p1Z61VrunGHBZoPZuTAcw8Pe2ZHhDdHK",
  "key36": "2VQT7kj8gLnK7uhgQZVrabdRfSC3X6QCp4AwVwuxkNfKxrrfta5HEvggBJMueX2kAYmPong7jfEhKR3CBxU1tdd2",
  "key37": "RKHTXrJWNcBzhwiqfHaKATjihNtjgHgKstaSobBZy3QPGhZa1Pj2Ch8rLEnbpiszorkvFTJHkrhxX5WQVc1J8Hu",
  "key38": "2Lbapynhq8VSGTLZDbsPgnzme762vWG3wSHUT1VCHSRxvSbCayDwkckCcHU5zAHGQpbCcEkmeMC2Qo57Ui5ETVNv",
  "key39": "2QMxFa5XgmYiWGJo3pUqQ11auaoG8ReMg5aHdNUPMqRWZURFc6zYWyo7pj4bx4PMgsQLKtEgTcCeg5nZcRUQTRf4",
  "key40": "47nR78dcuKBtNU2by5uf5xodsukYMKrWuusoJLZmYErSKqEmqD6tusCYrYHxkDtLZhTbp8yr9uAazFwiQmYP7oQ6",
  "key41": "33dDGzw7BbU6kBfLmzTsfVFWC8jtgaFELsRoi69AScGWBEGt318RwsJciBcJkxkRxu6ty9PFqVZ7AJicM1csS7sB",
  "key42": "5gG369K9a8m5oW6BmaKNXZU4VoCak8or4RCGZKiWEVHx4kBnNgQCMJzUDWXEbamKCcBmSMEi2pmwXZc8xKAfKJJK",
  "key43": "2123GGDDeB3XSszcrwAXuctpkQwog4rcXWpdyrgm67DNm1erM6UqXBgDeffQ2TU3JwELcunKrqZ8o1Ep1MWGFmE1",
  "key44": "3dswRqE2yArW6SyiUkffNS7PJo95Gkh63rGXTFdMYbkhrQazWxWq18nQSHgMPXf7NNEUwzHvMqYmxpkE9Jzff8Zz",
  "key45": "23Cs7iZbEB5xXqKdHq3njmhzngDXHxahrCXJkyhQCxEJGRwc9LMnb83DzDoDtWQR1ZxjhKyajyGkFoMNSx9uzGPY",
  "key46": "5RDuXWrCSPDJcXFnUouuF6QL2okVFK9mF9NuqZn1aEdsb7D25C1c15qpWaw3Qt12unq9uPBKDzYve1zZCkbG5gon",
  "key47": "4Cp2MckeuxWHuvbxBbEVmidqAMcK7Rfc1rjtXN71f3rWBhHi3NgCazQHDMz22p5t3mEu2wLf9T6o54fKfrFEoRfW",
  "key48": "5qEq9wzZuNCqzjVcHvLwd38tNBXkfspxrrrMgE69cvXoeaV7GTe9MrQzSdEPuc4YfwsN8fPcJT8DeLjq9hfHRWT7"
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
