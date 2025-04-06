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
    "5cGdbhywjxuyHTdtTb4sXuAb3UWwUgM6m9Y691n6SPAJRLxFe5ySWMiUDNPk6jrM9jE1eanRxxjL65A9JxPW2SJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUuBNneSwk3e1zhKxNRHBD4tYSjBN6S7DFynHgCR9Vp8tEbvvELpyAHVdSb4mjPtZzdzShZUPbHZQhQPiVQDFdt",
  "key1": "25BPgSjPeUyi4LSba5ANvmrEwAF5mksazWc8AatA1gRp3keVmJEqZDnw8YLo8NAzDfHK1m9SY9tEXpBgusxbsoES",
  "key2": "5cN2cFXebkkNNVe9xarUg8cWNbnHHchP5yJR9qQdPgiCpE7mQaKSxLHeix5gxsZ1YpVqe5nr27NB6YaKkc6wKbtE",
  "key3": "53Baf1d9V2BqUPoSJUCYfRjBZZDN7iyuACSuq7anxSzeu4EeMCWUtZ7WzxF7HpntehsUjfabiiqbfwdNfF7Yc1W",
  "key4": "bAjTHbEzv5rrrV9pPnaJ49zHJdF8jUZQ9aFh3cFbh9iQv6jcMUg7d7JavX4K8FF1N4fs39aywG8teoQVia3mB6m",
  "key5": "36m5azEwF1XmHkoAYWqaksr3Uh3s49Rkdv3sFF9XBKEAY8DSrur6pQc5CJArRQKKsLRoXCyCu6rKt3GHRqk4UHbK",
  "key6": "3Rpnkrwn3tASXRnLVddDU5HAJND42sL1UbuhiCYZVujzEqjbcRmBPqzR4DRoJdXetNhV3iMNPtGXLAGQsNPcpLrC",
  "key7": "4SgtskmbVgcWbfUkXgRWzkB33vvThPWYT48vbVDRQiHUbumpcpLYQQTX2WwrkLuPwh9cYzPBEiipiCQ8cZ6MsW8H",
  "key8": "4AezMQwnJHvox5a5FpoxUG1sn4Dn7XCJV34veLJU6P72Bg6sFbD6wy4FYSZRBhUvozWdaQR4YuisTHHkmXvuXZad",
  "key9": "zdD37aZGJC8Kt57LqJX6HHa2R7nXQF2qCQHRm2DiWdHRUhzDyz8kiyFpcbmrApEo88uaJQ2nkhSUZRZgEGaQzLK",
  "key10": "3w8rWc6qSvdkNapdWvPSX4dPvsLVMPzTmJ7nD9KYkDF6et4KnwyZnWbpQKMzvF2iRLGqiLEvLRSBam4pi1W2vrXr",
  "key11": "5S33P4ReAsyhCSockjkYVN1ZHMXPK9jFimancUKF43vWiKLckaK5ADhnjr7irnG3HiNMeAEJh3kYSPkwGjzao5iE",
  "key12": "2DqmatrQF2ghvpDZ6JZoLkAZ47ErQWjEEoRLrPPbBznhLWQq2iZZ7gzCcNPijsufu124HocJyLzpJvwtu58LJJgT",
  "key13": "53vBoJmpZRDDDHZPEXVDmKCvcMLhYv8web5NA5F1cTCiHcJEe2KULVURdSZ7c9EW9H93q5HXm6myY7Q5i4EeNB1Y",
  "key14": "3CUo8b5siy4C63r15DjGDDND7DdwKAQuPzcU82xVSh8wAApAwvuC1PbG1XR7jWA65H1gABqZSYvUh2PeozV9JARa",
  "key15": "3iz7N8gFwX8zszCtDA1B7nqo7RSGJL9DCWHceEMWsUKqFqFarqZGLg8DSJN6YNmywAXNibTv5JaQotGvSJudub81",
  "key16": "3qZv3z2tMYQNZp8x2HhNrg8EAPLqzPAR4ceMyfXNMj4kBfq4h2C1mcvBYzGqDv2yV4thxE4vCCrRJyJCHnnHpgs1",
  "key17": "kbqRxg237cfqaMy75N14TSWsjPB6DDDNQs6VX94ZJze6zbs8njbvbs5E5TzM4Qzg3wGotRkVdEW1GbsdrTcS6RT",
  "key18": "4Wyti59NxJinDBwhH3cXPrsz4PL64k64Ui4ABrXiMMtxtWDMU43u9BtGSsf16bSqqgnBgqf8vPggzLqrrowTdPdd",
  "key19": "SbN9ZVGBxvuMQ1RwtTKJ4Hsre1iUZ4tMu1o9haJYrkxCUcav4BNRQ4p2Yo7H2RB9VdLL1CYk4QiGkNEpQrxMKfm",
  "key20": "3ojd5fkGfvbBcohD4BJQEsi1QJrYqZQ7X8o457v5sKiYxU7QNXcJaPUqKN64bKVbNHfPqqGUR8YdGUfmupvWjWig",
  "key21": "66i5j7Yhs3XcQ41C3v6oCA4fcZVCGWqKRrucJtqh1xwu58SstVhqo35wJkydSDNvCDfZ6qDSTKrTJcp8NaAUj1P1",
  "key22": "5xpmrBFWMyHmnT1EV2LPUNVTB5uHMQAgZiu7BeF7ehghtc9EPYZpofmese7VHuxEvPBv6zxeT6uvGRk6ASkJt74A",
  "key23": "58BkwrgUDYE2uVxsXs3yRPxkT7KRW4sbLAXkeXN4mt1eyoKJwQSURnPqTPb7GBVAUWXx7vKTCe6RpyFctytVqZ2T",
  "key24": "66BMMwqxWKA2gEmjwtkXfwzTAMh3wTZzuwWQ1i9VpEmg9d7QQsBsp3hwR5y7wErYEs9PUsnyvqAGiGonLXaHMXpT",
  "key25": "2NLoQwW4EGXsNNrh1FBTDXkntrv4rJxAAsBrJvBp6MmZhzMQFyx6j2eHuqT7SK8f5R85crtN11oicEQb8c3koYqG",
  "key26": "s871g6sPoHkb1W4pGsPpoUCTftQBqMYf8S4dT3DMSLtMGYKRQ8W3yoh2WG4pYFEFr3EnStyRMQZqBPdxvAHsQz9",
  "key27": "2ipAK6cxkDv8jUnp3MuFfPb27J1nAHzGPQQnhadUgCDqFNx9tr1KG3iMLjv6xagKtm8LN7vTFe7ducv8TW6MCtu6",
  "key28": "29QwGuPF8BTuaN66x7YNPPPdmYzcyxkkH7WF9VmhZoboHvS9hpaJ2eiBg4RsoSkwFaXjMiQx7oy3X82i5GdUv3KG",
  "key29": "7gWo6YUtdwmhVZymM9MNtRzYJwrP9W6JcqBrmKXSpGSmp2hcFjCe7UcNfsEwvG6D3PHWYb8g7sta2rSd4BQjHZ4",
  "key30": "4BK4qx77cQDPVpBrXBuyF7xLSmHSv4Ew38F4V3oc1yS5pvaCrwZ6sgZ51V233Z4pRsMYcynfocmJNr5rid81FPoU",
  "key31": "2aKTE7fsNT4p6kTB2JrEhkjqJBNauzLRzW2Hi6Ci6RdaqygYLN92ibc971iRfxZt99K1bH8Hnhc7Bj3wk8JB9DnV",
  "key32": "4E384W2TdMmApL3ahxHkcbXHXAuJHTjR1hayyCo6swxCDhm6bYGDUGJ8i25PYq3Qer1y8U7wSvdRzLEc4oijzYK6",
  "key33": "2wMFC4qwTCUAnnHt18KZYphyHjqwvaJchGjJy4QK6JiNJPJCWXGACpP4hw7tZa4cGZjKTv8NCaiH6JYJ4i2XdXpt",
  "key34": "2c6fM1F4UgE52e8bhCV6rWE4HF9QJbsWcziRBpCF9JWXP1FUWMje9qmqfusFTAiRZbPDPcNf5c51s54A9BkGeAd3",
  "key35": "5p1k1pYAyaNSLRpe5jADxKfZMXcxJTcZzFuZZsfzhBxofAeJNChjmZUKmMuKXGFVMApX934FgUBPuLzrKr5Y5tr",
  "key36": "zDtb9eU1mbpb9PePxWcgytt6M81jAgeRQKKFjokskZy2AxjsgAH5eYnFhuJJdmgNtPWC8D4o5KHuyiFbS5MQW5A",
  "key37": "2unMjScWiDC6M2fryyPNNSXiVRkJ6TjZcTRMHX5PxhsyfVjp9GjQsBJMcc1Lg2XYCqR1XfTNYAt4RpfNH9K7tQnz",
  "key38": "3vJNRhbCcJEBaY5a3jjZTkUp8p38yeyh8sAdDRCNZbHdWzqymQmETMyPbhejHPcqps6FcZ5Ntn8XB47EFptrnVGR",
  "key39": "5QSREzXn2wb1xNaD1NnMkDGpys82FKqocuzz9ahvHdPjyvA3FH2ZZKZcjg4ZycQdVbbBJ7FhjTMpUBCjc6dxLjmH",
  "key40": "5XL3HTQBE5W3UbXUjR4QMU4vJCewTaFZuCA9P1F2S7hpiG6bZVo9sTaWVgkJZfP6UriL6K3TpcJmvPrpnr584eF7",
  "key41": "62XufS43yhrvTZiU1TwcZVDErSiqUncuFQojKBB7VgWzDMmpEqSwZvR9o53uHDzkNSCCcAjbSZDMN9QL7Z4iuQ4o",
  "key42": "DRCyDpZz99iUq7XZpNxTzvpEHwMMeenFMdYWZXoFZbA3KP5WyXkgjMMW94P63nFLau43VzynckNeAWkNLTqpxbF",
  "key43": "2DY96mvT55znCv2G2ZdHu71bvS1CNY2TcSF1eokFA18M4uVcX8QqHibEJAunypEXPeBdA1eSQYM2Ms9DY9sxieGY",
  "key44": "3s2P4RgTheSJf8bcvZcXGJN3PRnHnvAS6YCfKDaeVQ81FtyvMYSopZHQMxe3SS7CtAJ5kvGopKahzNbSJKAzLbgH",
  "key45": "23bhrhM2yLvUzKUy2YkCjhQGQZwL95d92EeHu8wW7cHWcwGEUWfqGmeucZ2FHVvV81NQKSo5ec8eZwdgPTX4Ejkz"
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
