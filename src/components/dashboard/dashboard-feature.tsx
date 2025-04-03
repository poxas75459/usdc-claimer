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
    "39wUGdiAbBqxa4Ad7r4pjDmnzMQFkd7eAQnaidcD51VaCbgzu6ts9EEG7snTBpRtw7nN3UZ6CjhuTca7j3cMnZej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nPo3KjfbqYufAV4Ew6eogi4EKzQdToAAFVaeRKn5715Dfq73D7cEUnNpx8VYSDkT7j6p5girVsneAsnLLRtCgpg",
  "key1": "5jAXpfFhnza5gkLrGCK3mcVPq8rkVA91UcFdTC5PcrT149oAF8eo5gWSK4HZUjGxfqWrAyFfuprqmdg3nWHA2Dtt",
  "key2": "2gCVCzaAeLi3nkWp69LT2RU2roWqxi8kSDTErunVkV5sMBX3yggeLf6TFYhukDHBSw9VPN9zCDUoGAU3eAGkbCug",
  "key3": "vwWmU2BGzRf2jWMNAGPDbhY57gnMxmFLjhaCa3dgxg22uMAjcbfn5pGdue5ZvHZFL2mNJ4yt6XQCTpkpfu36qQf",
  "key4": "3sjwS2xfY9GJstzu1dfXH9SmAqgUFcreSefyGWxme8cZH8uYbFGRDJZr2BTZJnXW6ztTQ4rMyyZk5tMMnm5C1E3K",
  "key5": "4TSgit7oHPED5hFTs6AbLFGu87bgdtkF1W7e6sQXcxWpbShD4nETmDchV1nTy125RRcUQmcLwdD495cwLEZAS46E",
  "key6": "3GDuXnVq3KrGaUu3bPifA8rcxHrqjwYDNrzBbKxcqmWFq8yCw8eWFoyGeAVmaFHBgQJZBhbF1DHBPnpqeYihvmyH",
  "key7": "44pn4FHvR16y9UwLBBSkyUPfj7k25bT78nrqWMaPNMhsDZ5NLGM9bKCBfJmL2aV1iFZH3YspyTPezfr4663Jv5iD",
  "key8": "4PropSzKxaaLfx7MayjU6xhidbmZWY5Fz1Dfup7HgN62ZcPB2x43c84qyNP1MfJxrtdCpdmgUWPGctKMkEcXPmW",
  "key9": "2fBt8GXwYDyukxC8ExsUjPvpEMvhqE7tzUDBT1zrAWkZhWMXKCyR1CtT71ExGjJ25Q7u6iR3nywDox1Qafk4rzza",
  "key10": "2SyKKK5JnpqBYz6Hz9VUmxzrbaj3NnCcGckCvJgRQGuZnoCE9Jq8pQRJqZFzvwiyHRrMqyBy6BRP1BH7Ltw5Ec3r",
  "key11": "46xcepwibjsrUWXKGMu9BmnWvSpkNgahTnJghV6mfFEWXuZdVwJ6Z9PrAwah349t9gMdB2ZnSfc7LRwy1SCNW7aM",
  "key12": "UcVnDrzpA8rjJjdv26BKbnPunMJ9Ta6DvFgaTU6VjWMCTbEVG6sQaPCWxfxaHsxK7DzWMPWnrsK671UFqChtsWx",
  "key13": "2nQtiYMHChuxHnq8sBp2W7gHUc89TJU23TChBBTScYk9nCuMz7wmCJHRpeqJKoSc7KZoowWWdZzBGXsHdedBV9n2",
  "key14": "dtZdaWyMYhqPD1UCRaFv9F9MR9KbJRM7mhauhekYT73gD7oqA4aFUZGcNR3KEi8uqoSBFyqdd5JY9jdtCCHW1De",
  "key15": "4inMNDMLGHWW8TmYzZSuWoKpnbdWX4Y2kFzV95WChAqMiphxBbMsRPQhNfYpzQtDtu9o1j3XErLfdKdYzxF2mNBT",
  "key16": "39S8pK6yuasK3fMiwnK1JKwwRdcwLpaRixvLLZT82FUbb5DmkJp7UZ1Nus8eHR8Gi2Zq5HHkAGXJynJH9rnmFkFk",
  "key17": "Vb4sd8NAf3Z8NMNSsNaUPKpVoyRDwhQceZ7d21yZmNa7kHZoLYQMEu1GB2sz5eUaVuMd3Phu4HAngKQuCEEg77u",
  "key18": "jJyKkfncMKcXAtDYh8LmJxEdu9dS7yH2StMVp6DbeQPzm5jDysJDfxFdEHV5t2H3LR2EuY4e1AawANabhdGYG3y",
  "key19": "2EDrxZusQxBK8Tt566b3M5X7n8eZ1r6pwG4nFAxnPnLBVPRz41XP6b3U3othkUCn6h3hD3inKA22K4vxnwVJGTqK",
  "key20": "4UgYQs3xj9dRL9mC2BsgXQcSYYggivLdr92VV6TK8ygFceZsNhGXLeUtnGSEgpKCQ2JbVy1MFjWSAXfDJLpMuufU",
  "key21": "4rkdKMZQqNf7sbBrxq3DGARXS1GJwcueMGXhNcscAB4vsdxVN7QA9LonJjB6WJ13jQu8uqXLALDX4mxXeL74vBEu",
  "key22": "BJ5QfKDuGZV8XkpcGnBQwuJbcaK79dqWERXDoGywwZa8mZYqGNRioXEE9WKsbc6WgS6UxYdE2WxFF81JGrm576v",
  "key23": "sZqZq27SX9PwNDo9miT5iMsx4SuTSiL4XJxjRmegxLrx6aq6KNKcevtT2fxwVqmKDAdq41VXbTYyfukJvSfkiU6",
  "key24": "3tvP6JmmLnMyGPA7dopKcbQPFcbQWwQuY7Q5c8SnbP7ojScbZz95Yguimz9vsh9cz4spz1xrvnAKyah57rR9Xssj",
  "key25": "38LNfeAdvA1nj1KKvM9r6UCkDPfd7CVoFpZCv3nqDRNww5XKrppYBEfkowjNXCxVidogWqXSdiNPpfUz8qYFF6Xz",
  "key26": "4qUoAmMTNWEVTPQG32LNMqjvxeURe5X1Xs5xNMfVa5MQ7eFpLdHMN6DawB3RRJDMpetWgLfZJ2ZU1CasAf5pAhu7",
  "key27": "44JxTVmExracFVPzp3eePfPAMMJ2q7NVzzjqYNqbt2qxg3Zj2YUMKVn4FCgKLA926koT9uBRGKAUq5c98iuJxSj5",
  "key28": "5dGfiBwxWzg3cXd9hwwewUHiQdEeGfzkhGXJGxMHXrf429GLsUdwDVf8abUqJCb2jF6RnqybxNgsGJK6RPY8SiCL",
  "key29": "mjq1tVMU9YDeu3ZfCgchJMaAW2tWXtrQTybSKRXn1zKX6sukTjTuyucnXwPbh5mAccwsPNSyfoELq37fw7JZTbK",
  "key30": "3dMnNskTYiweqYWFBjUGLyUYioseskT2VWdAJrRCoTKJVcn5TiKbM6WECdatMnUBgFsBpvREu8w5f9kf2QPMaaCp",
  "key31": "2pYzMuMeMzqDbdBqArmAZJAkiG3egSmMrEwZY6HVQjLffbw7itunck6bLqtJBYAPQXcpDdV1D6zNL2GYQR8og6jM",
  "key32": "pXmAYLr4SKzXRzPZATk91YTDdZx1QrZuVVQ1zNsxPCm6upPZVxgtctxHgqJJVzMmnpEiyix5BTz8AsSHrzqUvMZ",
  "key33": "24u8vEhgeZvq31cXyz4qQa5H4GMFqTNHBAxT22cB9SUhYyy67UiqsBbs2YtL8EydLN4D7bBJPxE5z4FCA7N6ioXa",
  "key34": "4jADDNRN1RVWBcr18BqsaCxt5ybe9KM1B56D8yA65Xiqs1tzUxWRXdvfJ2vYFPpQ6UF1L1LWYZm5zS19VXhNyUGp",
  "key35": "4c9sYxWs7xjkgACthsnLuPm8sHzbXAPMieKojT6B7q5tTTmYij8Gkd8dcbiuxM9ntb1XxZEZ9hV2FmD1S7rs7UQi",
  "key36": "3g79nzUCbsUubr84vUWhkT53JDowp6meaHKG3fWGr7Rznq55AB76s7SkmcaVDXw4uupaMtcnQ79qtgxZUmrZLHPa",
  "key37": "39aVKHWRppDpzE6VUdQd2ZyeiNi6RCV7FGuwFvH2Vaqtvdm94GJqPk8uXNUU2rBSvAYGcZV8UPwHYpKHWcWVYzwx",
  "key38": "oZFt4C4JGdEdCAaqJn15ugraD1h6QjVhTrY4gDfKULaLLEGQ35pGChQXGXo8fZrzpX8qCb3WYQaChhoj1nCaxvN",
  "key39": "5ZE2hUb6TCQEc1W5iu7isp4Jgh8pe8Pjdg9C3BcccN6TArSkCu2mYX79qH5pnXkcS7ucR1LZbUHqoz8hAECtrVVT",
  "key40": "3TPKh2nXdnFRW9cJnRRhj4HggZMEvswfDjN7UD9HwG6sKJjJPGAoHL3PRpiCgecK1w4Y4S1j9KqNPahcx6J5fKhe"
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
