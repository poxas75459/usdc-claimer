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
    "aC5UzGuzaRmLgfmEBThkfxSagR1W6PpaNbFJZYFC3gskTXeerHHXCnn7ccka6Po3VJyd4GVKegvUZKJbvpZVAQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23jtNcsAc5YTkecaDi9FP5ciw1zphtQ1ZQBYnLVfHSecy6xxDKTptKMfzpkxf6ko6uj2jNLLEXpDNVAhsiiJGxpt",
  "key1": "Z862PzKz8ENE1CZv8TdJwh86wRMLm9mccS7JuHr8vmBGeAYEWVZrDT6bnZxRjWiWf8cf8BeGhyXjioNL1BLkGas",
  "key2": "3BUVdwPX31KrSMTXhSqqpkvPeXZnrsD4tgcGpjfriXZtvcm8b3CvS5n7ADiCVxhdbTcnbFvmmJpHMviBRx86VfQ",
  "key3": "3GHF7g8p79ARsnU4VwCkr8DvxKdTD6AQZ6CeQjVKR5Mnx8C79CHckVp3Duvqt12T5gxN4CFA9Lkwoo83omP8VEMb",
  "key4": "3hvh5EMt4g5mv497JTmbzfM9Pem4xrCMfY27334qeWtoEdfMSihgG4F2WxdgDMJGLypFHGwehMefg72yj8B7fPuU",
  "key5": "3mW7z34Sm36ySdVZLpX9mkygLU61W2CyLibrwNt9PyXFffgDqTCmfaCS8x1PgqUYs79SyBxQ2UZ9H8eNhCGMK7Ee",
  "key6": "4ZnSSd9nDvw7i3kdktL1UadgnQyb8JrDfjha9GzocSeo5KDhtnQDZ3DVtTGqJixwLTaowphDtqrVLmLD1bmFn53c",
  "key7": "26N9A4o69Kn4Mwt1z9AErUZFofTkVdokGJLCsUtWTCSwQcqx9tTzNM5BJX9rbnYvMg8ghDPNCCduzaXJW8q9fz7L",
  "key8": "22eqXDJugBHovX5P6cJ7ir4TRrTRMouShTpcxfDrvyZcRd4SVW7ELGbDEPpbRnCg1N75QGFyj5wWAqvxzei2cVQn",
  "key9": "2hvDuGrytadRejwk5uHxjxbbD6byrbd4VXja7TibxGGjt4gSwPMYHT7adqP448SdsHpAaoqdpizaDigxQsDDFeda",
  "key10": "5tx51hrxU8RdtKSiqk6GUx3xxihH3Q61KMVXp5cizFgPUitgQ7752pTsHgQWvh1QKuTVDxxnYGiUP5njtc44N1fU",
  "key11": "Ks2Nyc2BfEcm39RkefPhPCn439rRWNHDtn8dt4X2V2BPR3FaVVYo8GnJtMW1iWPhYaNXYEoDHZRPmrLGApG3Um2",
  "key12": "3fDU42bFUaCvDpXSfKXvrEJ6F8iKJmUJGzSJdomFZxJBosZ2pDU9wAr5SrZYVpyTv3tHSbYa38q3HyFX5amQw8Hv",
  "key13": "4buLvmbmQUXT1vEiagCpbkbyCNx9kLBXrFY9yejnq6VKXkykjNnkWrihBuNsAXfLN9y4JPKLTVPc6uWxaaGjS7K4",
  "key14": "4yPLKzWbPxX3r2fR5N6W3P7ABzwkmfJ3zFyBCvtoBeJRYYwBAYU8X9A3gWLJBZnqn67rusPcRNSjZZxuJ6EpBPhD",
  "key15": "7aBuEmtn43T1YzmVR1dx72xG3LkfqeitW4XsDCo9ZLPKXcSSserJb6FndMCMKnD272tJnvm8Nrtraw2DwzrBznq",
  "key16": "2gJhXYt352eg5bwVRKoJWLt3fU9dh3iTbG4pzwDcxR8PrHyDdcr3BKsCXe2GPdYuvpPWo2DutZ7cwuSKDkgQnncK",
  "key17": "uVH3J6RZ5se5hau4cZ96U1C1cGteVqadXiqZrqSe6MPPWv5qy8gY8MDVMbF5wLGpC2QtjDkhe3DcHYRaqXU4GSJ",
  "key18": "t3xdo2uYm6EFgnXoqySZmQBLmMxFSymhWCu1r6qxn3ST3rTxkdaCeTdqzqgoRj9fMnSvDBe9cQrQLSu9g3tRbeN",
  "key19": "2tTdNK3c7gCWWyH6niWubWTmepS2hSExo1ex1GDaFZmKBo9Dh2QATwdaY2WJc96pRWr8ULAXDerLmGEDUEqaedkq",
  "key20": "224GNRCR8i4mDHDzDexKXKB4VjyTHmDBRX77D9Zex9mPokY5ETQBbogvxg8c6mXfqC8AYc7YR1KdPbKPQCQuH1iJ",
  "key21": "66cv3ZrKApzJwMdccPLEfahsEuHciujgtTHkLtWuJh7mcEw5hG4m941YdXL76mQpCak28q5iL2246pQ2xdYZvdkd",
  "key22": "4yMWieXcdtgoUzD7yeeDidbHe8J4T28PHeceKJ1TLS8upJuKimKMczE5nhkxod7aReSuEwxQmNXM1gLYJpFzkvTk",
  "key23": "4vXs2tzsL39A2UxstJ8goL8Xii7bqUyGSeWJ7WpQB5v5tTQhQnJLj8N13rGY8jw7RMKEhAfKuBjCvSt2UbaBhmxE",
  "key24": "5CXPUSmpRYpVVP36XqNxQyJXZwehjJ9cYDTvHMeYwtLMdhFAqWSiuByXvPU6MqiqLerLjCvT3R4TPwKpY5fQyqDz",
  "key25": "22bVTU9XT6vtTrcYHuqQt1TUzkSiGJ33SgEWDCKvfV4SQh7mTogji4BmnG4xfgbF9e2EwhCwYbAqGP9dsDACz8z5",
  "key26": "5tSC2V8qjidDwXGDGRUQo3tSyx4cnK6zRrhy7GtJda1qZkaiBtiNqHzdiYHe5jXd2hUXxKdcwNEu9BHH2WPWmDKN",
  "key27": "4JVHCKhSnKJD1EJSMXaaYh5qeD2Q8p4ZDiGwVgTWqnDvQWKV5ShzwbXY2CX2JWQ9RWYAXYRqkjPx2VgkaPjPNn2B",
  "key28": "2GS5753Jf3ZD4ueQ6VAsjNsnEtgHbU34AFnfJQyq4wuRmVaZG5a6Mn8v2XizgKaHTkNDZwsNUVVFJn5jHo8RstqC",
  "key29": "4a8VNH1SzVnsMV9VLRWc9CaE77Moad7wb1Z29LB9CVWWqTXb2Cc8WpaerhG7hrghc2bKgnMpHoNZ8nN4uYzbdCd2",
  "key30": "4UjvJEWgCBfdyEpYrCrhHtFAxNLi9eWr7iXVfiiL6g6177m3dY431Nt2CP8TZ9RVQxTjATyKnSoGsv7gBK1JxJPp",
  "key31": "3MMbZocEUfKjTWdu1mZe7ckSh3qK3gFKVDZEL5zrP79Z99NSKk7YU7bZZgnknPvLjna1jGEfjhrTWg5EQv4JC32D",
  "key32": "5K6eP1tDWmmvd1Kcx6U27aqKkLKH441g8vuZqrWipYAHMeAHe4PSGEAGeUCPQvL9Xsa6vzDomHaq8yjjwFRwm9uN",
  "key33": "36ck2q8QtmTho37Fei35fCsH8Ra97rgB1cAs2SZxvs9YvJFpuuX2Cii8rfjUaewXhdnyYinGXSKNpjR7XpQaeUHw",
  "key34": "VYHn2uB1RDTkxnsQ6oKYahfJBGr2uCP94K5nCdZiYXegzRveAJNMFh9Tt9cMEm9Qu8sdXGGAGZYeTnXGkqwMwWf",
  "key35": "5C5Qw6YBcypqkECDu1pjGmvowwucmY13bQ3qDCkdfXiyd5n7L3x8Z8TL99KfwVofAgJpRmfRVZs47JUthmy9VMjR",
  "key36": "5ZXUBD22N8gR6a4GUR9Q4gZDff6wSLo2ePDScimWWwWfTnsBgYF49BtG8bKKhnsjyU4kkeUp6bsrh9ANi28U37n9",
  "key37": "5WqdUu4AGFq5sEiLKBRMtKy83TuBishEWufWi2uu7YbqhGyCvarYxVX6uNp4b32v2zD9FxEDyw2vGg4q9KmBmn6N",
  "key38": "4ruSuG5vePsgDde9ct33KUWCtuiSH6fA91AZRCwmK6h1xAeNK781KvCzbnQRMdb7rzh2qb7jMFmugYGjj2dozQ65",
  "key39": "4TkJaf1vhJTHFJtaYeqCus65RUy7mx2JTRLXpwqLZpevJwMCjNpj5tN7mi7MJQqcuJbUWBsnWzt9GJr8FyrGKUc3",
  "key40": "5Pviz6M9C1iYFPsn5cqEAUXmGXBMD7mbd4A9UkdWSGaDdXy1j4XzFhGGvEA77FcaxgtVLZBjyS8LWwzGWTugZaMf",
  "key41": "53NWnEHqZzH5JR1AQZUHDF17dXZHX71Vw7QGwjhgAJwgvrtm9cSURsiHYUh5JWmN8zivS1gz7PDx2PvdyjzBejUp"
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
