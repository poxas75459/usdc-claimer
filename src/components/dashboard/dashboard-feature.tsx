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
    "xv2ftmPUxCSuzUySnF6Rjc8turSRisz5Kb4T4zD3eVctYHFkubrAkU2mKU7gQTRpJMDFTi9BPoNGBPGEov39RPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JfDZDZ2eQiNJ5Aq1Bx34uyRA3hX9VtfJSWZXLVQe6Cu5A7unV7E1MULytNGeuHNtmRvLSmNqRBrJS9Wny24LRAH",
  "key1": "3Vbvx8vjXtBi7JvC5DXZTnoamsFqB4NE3QWQLfsEnh7QWMvSj9Ev6V2sR8a9sN17hyezKJtr9SDraLdEEEwr3ECW",
  "key2": "2To2djmNrewYBLgsjkBNtARj9k4YBJvx5hcjePv6NNnCgXCGgMpqJXbhDnZN8YjyLWCnZNWnf3tP4yyni8LaQKT5",
  "key3": "4ETf376RfwZVLVkL2cMFxvMVRGzgcsAvzkR4HuQ97cyWRWVpko1GrFR5kbudAFrqZqpr3VPy9GG4zoJAhCn5i2yw",
  "key4": "23sjV5zp8ML17fFyguLnEt8HqMjaSbvM6qSC1wkeyVVQywzkugjpZAqvWqB2J9L1tzE5AtLVLNxVResob96ZffHo",
  "key5": "sq56E28PjLcrV4B6Bn2BQWgDHq79SdXmApTjcFTrkSMjcbSZj9uv2GgkES6b8DYmBMs5RaLj2mmKbdQX8C6mA7n",
  "key6": "56cVNFbsqE9ZBEnyWthSnzsHj9GE5bDtZQo2fp6tnH19q6UQqF1uQMB9DsLZb9fwBaLaaBcZnwxeyAzN5zq9AGdp",
  "key7": "2oWrktGWL87i2CsxvBzjpokFK82kP6e6eLuqNZ1UVddgCXppgQbiEx3XZzJ5w1jamHBwbSnUQSCSunZ8YWrWWD4C",
  "key8": "4q1uPnn3WX5WA49HNyjNS2JDKAicvMJjgrZT3H9eEXMnMnVcN7DgwpjGmvX1PNbLR68SiWnBuqzPLWo5A7WRtkpB",
  "key9": "64TtLLJFE2XJ3t2gRqVphasHVDQ4mBAWKjLqobyCXfrtJ42UMh4HKU9dXXovW7bV3dhQSatzKx5EcPwruALgTJrW",
  "key10": "8eLeRUhDqvJLMVZA9xCotBmhcRZgeQuGo2eGfUu5PFbLxB9NNfnsmngpoNKktgPJngZijhw9srjkUxywY5c1mX4",
  "key11": "5FVxCMpJnbzpNwq5hRAfmPWmkTqnN3XsrQzdbNVEV9D67FxbvQN5bhsRg8jFdmvFzPWjTUbKXbQfeUaZFNb4yo8x",
  "key12": "3jrgpBVwwDo5ego2Q4cfe39x65UEKXxcFvbgMFzMk3iXK57xrcDLdFd5pYF4meEa6MJ48UaokboqRsJr8hn7uExP",
  "key13": "2MW1KZeBvpLYkj7TbmgiYa32RYKK5drxP3YkVLSyhxy8N28tzoJ3Eomq7mUGps779T9DTk7GGGeiFEhgNBaeg3eS",
  "key14": "39ZzED6ksgSbRzFMEa36vn2Qf1KQAWZJWJS17L6xWFimmyMf25BorUjj8edSAV6R43auDKdfRDUxpHX563zkZrVX",
  "key15": "Sh49VYs7szruqf8UMp6K6q7DZBKMndFakwzP3GoqzCBGL3EcxNh9E25oRu8qhF8avzt922mh2LfuyfmTgoioTyR",
  "key16": "a568TbhBe4vaGd2TGhMYL5hkDT7S2FBhVLXhdBuBKE56FtfmmWhnbfXLeDw1RQjmXFmEdJwDr1Vr11P1dVHZrgV",
  "key17": "2Fde2YmFzzvgZVQgjFwvgQCRHGwdsjxwh2HFWqnBmHCvHGrisFaqQbfL4ZcUKE8PWXF4UURd2bmHf7qD1868jSJf",
  "key18": "36kG6ntA3aFq81p3RhsmL4jZhgoY17rKhuMejm7z8aWF67cEKsmdL3cqHMC6Czim86Nv9WkPuAvBHXZbsotHWb5Q",
  "key19": "3Jbp4UCBQjPDHxSzUNDHxmyioNW83MABa7fitg9EAVxkJKMFxEsSUhFqVcHZHdsY6H4deyTHz5cp6ut49KWGSzkQ",
  "key20": "5X5MAhV2QaTMAfL6qEANo6ttavjspZdaq7b1obzewvywfekiYQEGiKRrJHzJ1uQdJ2WiMPLf65FH9hst4JhtsYNe",
  "key21": "upwdPjVHAq84DdmfZbggdnsAAuEo8MJGXe4gPyy7Gb6DZd75BW6bXRbrSDZuubzB4pgGEMaYajebw7TwASrKwFA",
  "key22": "4V2LuKdAxL7Dmh8wHWuS294tqCsPGESTsQkP8hKnbhfrYFh6NVKGwB14N73dYs7LgyRkQMDPEyAcHPXh51pMCTb5",
  "key23": "2brQf8eKS5Jm5x5AHDARwDuVva23jDRXQ2ww6REeVhSPXQuS414qJ8Dfs5BvajWjK1MsyVhxp4sNmQcoL3DevRmQ",
  "key24": "3L2ocMs5QpkDe7GnvMn3V8fdtBhCwvdntjNKZDBNPhKivtyDoq9SpopqrZGm7KQfhSd1cTZoQiMDnkQrFcW1T3hJ",
  "key25": "48LaJHdn67eHuGm32zDNf24xSygSymM9KYo9MqQUpcHkhztbcrUmeYvkksmLL56WAnRPDU1BKvmMQF4gKMUCJG6T",
  "key26": "1hXvtvbubm1QzzppZPnSdQJzQ4m9NyQ8xGHD2cwxnD8DzMEZoKEaXgnFGtJq592GAiXtJJjLpJS77mcQmSz2qd1",
  "key27": "3jztDbFK4Urgf83A84tyhniLNsfYf4jUvwjKyL5cytKMqCFmhBSWR1zdteaHifeyY7nhYvDyaAHYUkNXxi1Bon3K",
  "key28": "39TLL7bmCSZG9iHYgikaj4DJtTCdDyAUQawdjPyMHQj7cXtHxMEjk6m8Ufo3q91jt5cs5fAqXm5FoWfpFmtcGgaR",
  "key29": "2zK7rCx4HZiffhtYDFjsEBUnfbmT7RH4TgHwtJDsxWE54zJ2qXfUUMJgyCMDdhYSdVc35KBgYeLT6d13v9472uXX",
  "key30": "3WFconB1voN1NDfhMGpY2fzWvTwP9TUPj8XPGALjojf9chaUZ48yFD7Gp1CefqPRjVnztWkBweNkU8gWcUuJ35e1",
  "key31": "5kgZnQ6Rk7PcCrjpEjMNcZyxYG3MjsrRwFYua9nSaPpmFjGUD8VAJKNZpbHSMYuGiiacEFSieGVfy7AF4NtpyAbA",
  "key32": "5jXB7rDrxARrh1YCsivsEE8sijqHW5pohvCF1yBik1krY5rrkyyinZKfP4Chrnfoh5uYi8RffTmBYFNReVGGyEoy",
  "key33": "5jczZnn66mfQX1mjuEH6jSKnH7tUQssVTYePyAU6tFjxmWzPDXaiMeoxE6gVbhuPkGTqfu4gWpDpdqQjtuKedG6b",
  "key34": "bHmKEu58NnVBdqAAZLZn3uf2bFkC1woj8LJzyWjbAd2JRSquxM8xQ9oz8RF78BxUtRK1fC9NHmStp451Ube7YMs",
  "key35": "3yd5c4UWbRaTmSbg4GTNenZNmNk6gnYZLETgWEGBTZKM11uJcFo3DYRhGUo4h7Qf5cvzCo4X9jtRohnZaY2U7Hw1",
  "key36": "3aLQgaFxpAf956cP4ck1oyaNsRL6VMYMY29YAupEKHxmrwUVxQbGaSyk1MuZfDtgg7joPzJdbZeE8EkfjpAUH7Sm",
  "key37": "2djVHDwpudwKvDFdf4QnBorFM4S8w3Jz4epkfau1SQAQQdamSFmWSS7nYxsSWHtLn9B7SAo4ob8nX3KW2TcRdjVn",
  "key38": "4EzqDr2cEY7D9e2UcM2CD3wB3vbPUTk2mWPgzKiUN7XdN7hBEL8AtqaqgDaoytPCJL8XMAFdK6CZedsxykKNtnpz",
  "key39": "2smKuqyeRmHwqN6t7FDWXM58nFDYVjPiovZ1sX1dtZQNyTxZyV3ERxyECimSUm1Eg1Axi2xuYBjoGdxcDvy5GXrk",
  "key40": "2Cv7hLW3kSiiWLeBykPWxgACFRCyrTtwq4SCQqNgo2JMqM9oRiDdGJ1L6wqdvvuxFkbR495fLDXmy1gjSSWoD5oJ",
  "key41": "4szph3Dbn6td94fiSaKTY52diW5BQngGqsHM2GtDWkU5wbjG2YPYx7sAWUDT1qqFLRYo2xeZYFRD8LhWCzGnJw9C",
  "key42": "4Lj9akevJRR9Tit1rETgicsSY6pn5qG8YXjF3q7eLkwNFjoS4rwU5YqtZH8PtezLwZ5YHaHRSR5YPp9K75u2e2fC"
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
