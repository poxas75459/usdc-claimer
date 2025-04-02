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
    "3TWfU1xyTvuYaxVxKWuNkY5S71aWMGNBjboD5LGqtdAfUtZ53tTHZHPqBhjdgGaV1npAY7U1ktAKPPEZezFj9Crj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GswdUn8nU4kLTAy87Tsdt7kivF8F4QNzQPA5LPqukJ6tgdzdTAsP5cpF6Q47ZgSWZbAhZe7wPYR5MtMTy8EGDzV",
  "key1": "56qMaAjd8ysZrgRqHk2b7hEVmVMd8XfYDiDczNCVJrUTsvg562QaQFkwBjdDx7Habz8C69yzLJ9nFyL6NBq7XJAT",
  "key2": "ETjgUnXvgTn73toqWdbUdZ44RtuvfZouqWzYAp1Y2YxKaB1nwoiioz6sZckHk7S6oSfp4LhXe63jhEwZuABsWzQ",
  "key3": "25QqTGySTc7kp2bMbTLJUBDLHynD1SHwyXuEhjnWBdJwE8JLxf1VgUvFtUeJtGwbrVu9Ct5uxz93SmkzVtRRyTKY",
  "key4": "3m7NxbWLAu3B93HEi76XZousaWDSu7jGJ7RrzJiCp56TrNptV7LdDbePWNE1wSDwGdmo7KVZugcKcJa4XW4UrXc",
  "key5": "GFnozEp5UMGbJCL9i1aB2ocpgV8Bsk9quPYNt1W4xt2vmFCDhRUh5iCCNPUSGmFD1kvaYkx6qE997aRXNJQUQoW",
  "key6": "67K7NyCQQs16xHPp8c1ZGWzVsa7mHrBKEfCBXrpc9U29PBegBfjiF4HYUAjahDoiepy4ntEZKoctvDio4EAsMCrw",
  "key7": "b4ooR29HwsVZvEapjeUXvLdP7Ntut6ZKfFChRrNHVw9azdKT3swTHBPMs321nssCirM17419HGUyCCkdxAnFQb3",
  "key8": "2QhbagwdWWdKarnJZrEuoUgqg5HuPrRj96PBr6kvPaEBJpmEL53yyTjoVevJWwTig7cfCiTftc7jHMi6jqzwBZV6",
  "key9": "4fsjC9cRt8jG4adCbLXvYsrL4NjcTvTpmE1mHzKgaXEVc98FZWqpz1Q1AS2oRpu6g3UYKXWWHSyfByFwWmhBw1GA",
  "key10": "3FZod3vBqG94az9kzbEZqBfY1C6byhmwv7yz3NgyksJtpgsgEFqHFYWDnacpbbMcAwtuhHoWEpSe3ju6dLAK8PeN",
  "key11": "3K3kzmxzJmuiWmchTxbNNGAjmwwWS6qyJhhDHjNRdkMswczCyUEY4bCbGgKeNuciBLxNps1QJjhp4d8hdPzhmTDC",
  "key12": "3awabawGPazetkv7mbSJ3SG1N3EGMQadLEtQNAXQV6uBTMa1qqUQGMD3spSm5PCu2FcHeKm1oVCddJyeZn482U8q",
  "key13": "5foNunrwxab5wwsrgeZsZ87VnMwn3yAuW3ULvtuKaFi6ToRXaDC14kwuN1ZuzvnSXJdshwtqSRjBhTcJwEvyRF4L",
  "key14": "fLPkXBzScD6p7Dt7hwC74yrhng19hRmAYn1XUSxV65kroJaDJBaitzYzgzPDcS4LKE5jjrmrr4b5EeKBRekxKAk",
  "key15": "2vczSD76UjPw9PtsNUpSjT3Mc2sTS1SaAV5xWVh8svTgPRgoBpaH5qYc76piK75FLjQ758nu97Q8qUWXxSbVPkgn",
  "key16": "1rBPFb72N9JGpSnPefMEoaQHwi7n9KzsiVnoebeZarwJWMJF7k86b9UcLtHghKaNSrPEvHxfq5fYc7szdshFXMo",
  "key17": "mxuWj5DqAHZdUqsv35G4AMGywG3VQU2Wqv1k2tAgP23yiAFY5RxRNfJmJa5SNu7LQDLAa1RhFGa4Rj4zEWovb58",
  "key18": "4KuTghkrpoDoa5JmXm66Q4w9UjC4T9iCXTebDApknczYoXj7QUmvaCgH962sLPNNCZN11baTsPxoyG8JnRneUA9D",
  "key19": "JSWdLYRaHoM35nHroc2gRnH68Mt8qCx7uMnG3kMNFdgwg9BjRxKDbXeLvSSm3iyqSVhpAfQ1hJxT5fXb1sLrWWz",
  "key20": "4kgXC8p32uFxYyYyXw5wG9JoMCXmjxWqxZNEjNUpWj5fsWfW2uCfnfzWvw3FBfF6HFkdvAnNfqnH7GZKtWFJ6ifA",
  "key21": "5DXfKRNY2fQGd3ZDHQwYThvgZ7pri4Tb7Jz8a2iHqUF7DoQQ8wShj75Q9KzrDfcHHCXcnFSPhNcny7h1n3uVywyv",
  "key22": "5SQwtVgLwMfqgDB64SuRXMjspArhyBdN3rK2CevQ9axZt8kbzLRm8cY2iELwCdPNx7Nbf7UkAAukgCWVg8MAac5N",
  "key23": "5mrGfDcyTYkgdLMEGUKkum6eToTBxbJHJ7gEQLbsfJtHuQqH6JkHd45HsRsXRjWDPuxzmvhu1z2gBGPhXCRhEjqS",
  "key24": "2E4kUpV7CAGZhdzAT7t8WSvHCP7G7mkWk2diCVaBfq7vodKQ3jaEtRmjLCVETGYys25Ay6gZaGMNfz69GzTkyV4a",
  "key25": "3RGcyo4diGCZiPaat2VeQyw2c92JhhgUE3Zu4g9EEG6rPSyYTVHbLLmzJMMhBg2CVgT5QCCtrJKdsdakmZ6ckMZN",
  "key26": "5Qr5ZXksXhPowJzti1pN9ktntdrkyJyns3wDiKDvA729DQ3bjmoBcDLZ1JSb8uftfV5rAjt4288kTL6BLr4LdVjT",
  "key27": "5MjggiKzRd3YQg4QTvKt9CSZV2n7Hh1gcxJLwwW39QxDDGTy2iJPmy3hYeBwxipFL4vCfuUmTAEesSkbTsEzpciJ",
  "key28": "4gF7RZEzc45Jb13QXvGHcCtbiv6XncyBnh5bYJVXF5hVWQDWRBCiNmbcGoCJW7ADyUofFXmSSUQ1yzdkHzkZRh7v",
  "key29": "3AP4rpVy8BPUQ9gG24R9A5x9qXwBE8KuPUnFeSq57hF6enUekuurtfmCdUqPFbWKZhHRxLNgdFdihy3TPagpJbKd",
  "key30": "2Y7SKx4rAxp28GLGoZbViKAQQqLqnG8nxDGzavmqSyHLqdubUV68wHksFJy9yTSDeWSGv54gE13n9dyrvgAmou7N",
  "key31": "ZG2tHJc4Krvm7mSNDBPNLEXpAvUoA8zXM8RhY7pbRne65EZXCG9UzMLhYRiNzT7Q3wxb7gEYLto5gqQSSRJqTGD",
  "key32": "3HD1tkD6dD39BchDWcm1G4tEXB6uLBmgtzAN6K27kqqKTPPmpybyUUL37ktpgsjWqUyBVP7vLGDLH7S5TNZihdUt"
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
