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
    "64The8Z5kLKVjXdbcMaVvqRxsRvi9NAasbJf6UhyvbM9np6r2ezNtsHcTewrXaKiVhKgRsvYPzxSHq79TPrivURX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gwdWAWg6YYMPU6YhXXmTSN89EfkoJvMoXqZoWVHDyPCGyqeVPiViYn7vFJPwdWXLopCcRDk9oU6NtAGCJRkQDCp",
  "key1": "4QC8fez8vq9WizyA9oNJQ8XvKZ1527fDZYY7wrwD4vN8dzGXqaAv5nkzJF8LRDdfEbvM1by91aX74dqf5Aoni72w",
  "key2": "2LGeBWauPTC2EjnhXymVeBQzVJDWcboMzEFv1fYPTHPpDygAN9Q9ALFjEhVae4tkAkARA9nR6i6PmJws9EFuGJ59",
  "key3": "5k76u6JWKKZzoD1Fxp9BANUS3UuKa9zR7UMnfUAH55osY9XdwNPdTPXa8wt9GNonJgBNWti3VAzWkbnP9iJpeGtp",
  "key4": "36aVxvxyRoBgyXuDhYcx6msjnc7GjuN7EXmZFdXALZRte5RJ9P7kwF29rVD1X6UC3WMGPEDvC4v2PjzXxnz1xx3U",
  "key5": "4UiSaof1ci7Ya7afcbTd4im5nNqJFRxjzWDQh6Zb2DVkSi9PV7VYVSdc8YaXo2kJBF1kzowYb3enYK1NQU5PkmWr",
  "key6": "4X5bNQkG1vfKJYok3YGs4uhqv1Df9mdDHvq9aanznNCRHQ1FWiytA97tn8BQfUUsviMGyz1KZkmxL46ADMQQUkkJ",
  "key7": "5vLmTqWxn9dKFiSf2cgHtAH997Y8KvWddUjNFAoN8vjD53hZRE6SwwGA3TumpSV3UruM3DzuZQFNt6c9HWhGYunn",
  "key8": "CnvPidHjATrMqesELah7z9G8qbScsV9au89pTc6vzhCZFnTCw3SnZSL7fmFPPRFrxrVFARTZme4CHeuoihZip92",
  "key9": "2iDrUjTcvpRWsJFNBqcaEzPqBbiB7Gma7Aaam3C8KBL81AZW92v4sZsQ9k6e1aT3vHjFTUzLmypnaRBwVbrXvaYi",
  "key10": "63aKKmh5ubcbyyXSMrcpbnb5PVYctqTggeLe12icVV54sHQJVi1RS1nDaLXpL8gQkRg1Dk68JGMAiAE89uP998GK",
  "key11": "BCC82AFnFcwBgqtjkx27GQqiN8jpNUqPabLNtDjUZ2ctG2AGn11hKGH66xE3E8qF7qNJ1S3FgwaXKbqTZj9eamr",
  "key12": "2DLB1iaadVPq6A5fVVmNEWTGy8JwCYBNkngGaN8pEuwsNXZZ3Hhnw8w5wTTbgFqjXK6djkoGCfHRQKfwqUoWQcRL",
  "key13": "4rAAW5zRCpXp3jma1BQwJG5XB5BUsb4jRmTYm9BGhRn2nvBB8c1XJNRK2CaP9QKaQrKagJWa1zZJvrjDoNFW8Ue",
  "key14": "2eYmY5qHPPg4mhEgMuYevWeeeUPabejKL4toVyQWjyQPkMmVdesTZSoP6dWQssxiPSrNV1LEJTgbkW5iFJZXEdRh",
  "key15": "2TNsyVcq6sLh2zMS5GW2n5MLv8Mm1ug2WcvFZR8Tm38Doi3dJ3Xm5GtTGsRabiJh8TkNgEP2HZJpzRMUisxouTqN",
  "key16": "61u8MrnYgq2UTY1ZvMUv5DCRp1r3JmcazZNYVKf7A1bYt9zK2tcWbxQPA4kCnWexUyTu7BvZ1qeU5ttHXSKi3cZZ",
  "key17": "5d6Aqzh5XPd3M9aev6YfJMMeDBGBYUZ49fpaDbPGa2UUs37WWeYdV1Q2aNCTfgoGLBj4ZFLG45tjNds7h7CpxvhE",
  "key18": "4xXaoxSMxk7ovhnD4fv4HP6RsnZ68WkW6acwuHeSw2dDoUGVTvSJ7sMuHz3cAUTYscLpwfhC6BCjNbzLELRWni5B",
  "key19": "62w8rpDumsr4votuq4aeG3fj5s77Fyqg3jVqs3iyc4xusb1b7z6ZQQGaWSApaY3m2qVfPiCQDovvvawZnHA5gd68",
  "key20": "BZyig5htWxN4jgZ9LNiPeHp6aCb2vRYyrCYVd9dQgYvJkV4r9jrmhieWBwoEWshJyLLMzhA6JvYpfz76fZXkH98",
  "key21": "5GVjnXLBuJqMMzQy31gNSUmuTf9uCe3b5e2ekbL1zD2N8NU8R5Sn5n8QvEMoB5hzRqEWJGbjQptRCCkSp4YhUDHR",
  "key22": "4YFXxH54A45sAW7bdd1TDWkZMja7dzqfywgdVB5qB5x15RG3gD8tvhrcSnnyFJsyLoEE8crf9wRx7ZvtfzCq9br4",
  "key23": "5yYGW4B6GSRm5uUpxoqy5PdKnxqiwsoT3MBRWLVG4FkQge3exfy2uw4hcbBvTHRebJ7Jsi9Nxw7inzB9MJPaQ3XB",
  "key24": "3uQ6xnUFALTK4P66j3HSNia8c1K5bEi3WE3arPYWkFc1Pi3uQXuhXEHdtWW3NMU268ukBQBq4XmhbxToumBU1u3X",
  "key25": "647cE3ikcmCz8JGqggp5DZaW5ueZb6Hi6Y97SXX13Cw3JHxAko227NMZmFiauKzPk86T7oBedqtMiaqyZoQqu4xb",
  "key26": "RvAgm2fuvEkehBmn8AJRjub66S8Ze2DsRjCEXqh56vz8xK275DjkccYzGLxaJa3BkHkgTVptM125ZUfASsq7Y1k",
  "key27": "33gbMUGBPDmypNZ4NMCcyeigirFsf44Ccobc8z7TBP8Gg9dJv1y4Q2423y1C5GwKDGG8hx6Yk4URbdfVYAShcFab",
  "key28": "qs7c4rD4QYcmZECKyM6pXuxY9QpRd2oj9PJx5xcfQTyC71izwDYdGyq6ChqqNDstfS7StQcckvGomqaM3WU1bgn",
  "key29": "NwsewEPGbLPZLnNG8ra9LPvxRMvCmHhce5fQs9sUvVonoDWQzjBgmNERuykKRk6wozjyQjbUkMrmW7d5LY7EgQr",
  "key30": "PwKsx4cMQr2wZQnk3oCWhhbgkxZ38Lk77ZmBxypXrexsd54ZBU3k9rfDtNvpHik1d18WDpv8yfT7nEjBnRU99q1",
  "key31": "3hVqUWmck414ZA4haFxEGDfNWLTNVbpVH2t3uzC5JEn9dxJ8ziSnHTjXhPBvrKQNkwfXUT7u8thgbzq92kEJHtu1",
  "key32": "4xokpSUrzUGGd1gcW7RC4nPQnYKFryzLXUzrtx6w21GR9Jo61sjugEMPnoAZp38XwPg1Nk2QNFYnVroebEynFUHy",
  "key33": "5XxpErwCfUMDzTwqQo9w6mzMzdf26Q8Dxz62uJN2nkarQcsP3dM4ekDD2e8LUiVcbvnvqqhvXybmUpvWYD47abfd",
  "key34": "2LdMiyS2yZ9e2rwPzvzq6fWykFPqa7km7jqzNUqdZpD1SixBxRvJzCPqcAYw1CUH9YJwxno8tsQG8BiPLpj2oNBu",
  "key35": "5VPLWZCBtJ9WoMaPDcpzKi2n9f36aMs7KjYm9WvDeRVTvSiMc5hHXFxLJNz4RBhZokxS85EjUHVaDXdbWs24dfpN",
  "key36": "23sSFNdMs55ZrquyDGNcfR7wm1V6STX72L6qNVPN9rZo42DpYKQStyiJsV4DMy13isWUNz3QJmPHJNLak2fHpDbq",
  "key37": "25bmab2eBeJH8CWeE1MvZ3N4vqDB7V43cC4Yx9kXY6hJWD8YLmHWeqzbshaRNfQvuwL5RBfEqpaLA4TqgRHMbCbr",
  "key38": "2hic12AQC35uYYGjJbe5kuUFhh8zWiHTYqJthTc46mjiKCGnPFTX2ZDPpyxAtmYRFjj7JxxWgJiwNncjshDnSsWq",
  "key39": "2MXJGcRGXzKTsHSWj8CFnXZjZH3QXfjZiPzkXDJZCBGoudWN7ZM52d31zrtQQUkDJz9t1GZEdghvdhswg6tAYc5q",
  "key40": "3MFspLRQy3AhDbQG12mbGXSLm5yVexXzxVHwPpVZXU3Qffy95Z342N854aJGoboPis2czSs2DVQEs61BPiwugMYK",
  "key41": "uCznc5ytXFzjkMvLjA2JqaMgX1ejCEWFxQDLC5HTjQeAdffajtDZA1xxrfLiAUxNhdubC7U9zLPCQWeXu8gBKsR",
  "key42": "31fFim6W4QzEtr9P2yFwmn8wHsJGXm6CXDrZ9pYtm2gaRxbDpkBRY6X2SyMp6cLhwnkjLoHkC65Tf96yVbw5hBs7"
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
