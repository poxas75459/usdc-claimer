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
    "3FWDArZCDG8ZZEJK9CWhoCDzY3fhotdeZtH4u23VYtXLiP5C6TEAE46LVFLYsDdGnL2mCJqUMe5ftASrA85GBsfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mdsBY1cHat5nG7j51ZimMsUp9ibugmqXyrNgGShb4etSuefrBmq8giQfTkJLM7qQy2m2A1BNopfCfFY74CLgHMj",
  "key1": "2DFrMAwxRTVDu6p8M6UUiSUusPwyCdkATEJea65LsVxcshV6YGnq8vxeoF85djcYrN3wPCEBdu12C1xZX69tp7mP",
  "key2": "2WV4Ba1JEHRhhWsR8kBmNmmrmqJ4xkV88TLDocVo2PsbUppQ4AuV8AEp8q5qckyvdJoXJM2WrKZFB1B4jqRwqS5D",
  "key3": "LeM6QbiwNHzdR2oGmMwXitagqYeXLJPLtMz72mkLPU4BtDyH6mb43oKuumw9wfmU97xNK95n5348Q8YFnBm2ZaL",
  "key4": "2VVbW2GBJep2rHkQisevtY39kY6WFd1RAQ9z7d6cCXCA5tGuY5o8cLF45f2dEeciNSCjew9Q7nzGLXxDFxdYDzDs",
  "key5": "4D3FgyRPc7NKeoThrVThpBN6HnFw5C9ALV527ims878cMGvJas2SngPzvQ9h1TvAX19k7b8sXofKCSLduiqY8wM7",
  "key6": "2AGz4qMQwRz2qXERJhXcfhPQd4kZ37a4Dcvy91e9gsVfDy6ym7mns8Ne8WCmq2ibymgnNhNPJDaoVjjDxUjn7XDY",
  "key7": "2kSuufTzoxd8jviaCBrt2KN1JSa6255LGcrtjeoiUnU4BNwSAQcVUX1Dse5hg6MwHfcofvGUd6hjTRBuviiHi8js",
  "key8": "5d2gKykdP2zQhjkhtPcBfiqqcB9T8dSR6MciQBuqvjCVraT7bD7fejNovdQLif5FNLFr17E2h7AJ5BnD3fpiQBoG",
  "key9": "3GZUyLW5JRWjaT1tTGMgPsrnXiUpf7fppP3LNZxQgvgsdjAMniYVKbMkpi1BNnnVfETbv5FptJiZkfdxMXnVdtig",
  "key10": "5feWdY3mQWrhCkFphWHZMVfhCw7Mfr75GmSpqjaqP6127SUVb76i2C6VLxGmnRiMonhg44SJc3CXkMXpQ4wjK2Q",
  "key11": "4h6UhQ78oFJ2sUCiV6C7nGiCM7si4uHy5dXwcf8NRJhz25RP3YHDpeBcKPU6uYxPVj7Z8SvtwHCnByuZJ6VjUyi",
  "key12": "3JitMEn4doCVS72F2CERhE2aw5qsj6udTkuE7czLgmz6QkJ8wwaWp9TDvWzuVwiYriNNtAK8epT9VJJWn4XV7NLK",
  "key13": "2YCaCnY47P6rustMW6JbCXXDiQQYhgGzTfawP9CqYokdjj2aAENLnSKgrFqAPG413JxQpPbnF77SgxNcU94U8GT2",
  "key14": "5o3PazfCz7BBfvL1PEysorMvZb1gearPYJBAuuGTXFoT9n4nMTkSXThrc2FK1XupXeLcHrEwkB9MLk447naHxC2W",
  "key15": "2kjy9MnPgTgWem5T8H9TTfzdbMeum6m31o6ku9TUAPx943fyPMhqvVEKpHheegNsjDwd272HtAzJQ9HzFXvWy4rt",
  "key16": "P1FptZPYW5boP8RjHLSWCojMEc69aTXwyXQbY9DEi7CqeM3DVsQryWeh2EcDAA5k1H27GDj5VJ3G7ivv14ZZG4R",
  "key17": "3bF9pzBH14TbZdM5mAkKvrox4A8xBypwZnH7jEbUavTKCJHkQ6BfHu856UdM4Gf1cMMd5QBnQKr9wABbLMifby7W",
  "key18": "Su8cwGZSuu9N3dykMhAYNGWjwTmdUmP3DuuebXTe5wyFUYvGMCfpUHf6VurSELhA2Mgs71YJvQTiY4fwCeQvyrs",
  "key19": "41qwMcFqohoARZR2v7F15Qywe9tE1LQnAs8xBd3wVbMdd3JdL5XbSFJpq6aGx7GVsUh9w97Dw5rFcx8GFtYM4iXi",
  "key20": "4AFT5jvRJ83bVYmxuUzEttzzmm1HZyzQEXRAx6F8brrhBhHGaYTaxbPxEaXbuJvMBNXpLEBSad1VvboaDCy2SuZd",
  "key21": "32qUvTvaodpv8TATcXg12CrRfg7avUiDuA4KUSr4qkCuHV2fWUjNvzHXPmXMZ2Q7rcMTjTVButoNwvfysTt97F1B",
  "key22": "3q2UEgYtB62gvr7GU54PMV7XfaojD9vEqgwJvodNqRoZ86RJxW6jZ2jq4ijWZT4QGCHyXcHKQVy7Te419smXd6mx",
  "key23": "5esW7sxTcjyMFmeUQ4kKYxhToZ5WjeS69W1doeZY4sZZxTG4vsSFbVm74yLvELZjURyMi92CwMpPiER1GtQSj5Rc",
  "key24": "5MCcwaZVeVJms5RDq8JLPP8i2rLfd8F7ANLmwi8tjpNvaJg4og6uUUECjaMhZn1aTDt87449u51SHK6DqbqwX6NZ",
  "key25": "22cb5wfReTN2TZCRzPFZ62VcLvBeNqqZLBZ8TXH3ueW5818csF8QyyooXgg1APARzJxQX8UoLCw9mRFy42kCWuQ9",
  "key26": "5vSuDTjVTpUA9pA93vdYm4YvCVxTk3Cvp94QVKTg84YNTmBmxvYCceCSg73uP4Hjp73US4AjBGsTtyMSVaBedNNk",
  "key27": "4G17opyQZ5z59TDWfjNGKzsbNSBC56BtpY293UpaZY8CP28SuFgWqfnZrRAWC7issj5GM9HoTMyb4GQwNkmmFi8n",
  "key28": "2LNmncsM42Xv7BWsizVr9dNaDh4GqGgzpz5JhHS5LCyAoyEha2Bc7e5BomQCFFXSXx2oi8CxnMjfENRuAFC7hB1U",
  "key29": "26boPnBY2Gm7Zb5bxiZBKjihTSPQaEBLH7Nvg5atHoWDxxiHpQXYFRH9Tub2ECPjDDQebFgRhVpACNZBLukumNr8",
  "key30": "5mfyuXwoi3zPmCE5UawzNjVJWwVqqJ6dBt1wQY6BQFRXr1hSL97zEgJHrVkJu4jctbuXkJq6nLFtjf1PCMsa6i7a",
  "key31": "2CnpPCauKiWHbXD6ygj7oQFC7gdcppttQB8bRKY8NuVsGP6CGiaUCne5VrE93QgRyt9UcEGqwTQ38cxP9k2FH8ve",
  "key32": "2VqDWHSEwBiivxyKwRNp3F38Swe3nVdaQdFQZ88WNkvSszfUF4wdejdBR4UFzyYo6PiYw4TUCrkJyZzqqD6aBRD1",
  "key33": "3gnWGQ3ka6MM7qzcCAJiGyx9rYj8J5byK5KwLKCPVG2siQNPAGTau74zm6X6EuSdEpcs6NHzqaZ6xB5cGTsNuyFd",
  "key34": "3x4YsG59cnCmFR2SrAKNDvC7Sbo8zYBfG8U5WjUJLpCKJcKRqBdNdWe42L1u47USqzaFh4N6Wqr6Vr2tnyLmiEVQ",
  "key35": "4hiC8LXCYDNctto6RbV5LiTVsXvfmpHm4c9S8NXLjYWikdhfiuRL1nqbuxoAE1E63GWgmmD3Hep6yDfkN3KN8hQr",
  "key36": "HmfrXJpJCZ9QdjfHPq69oJks5V7PyEkmcRvi3emuvdGDMNbkBqyfYPV2c6rG4seGQFAFtJjzPLvu71XJB9GG9ov",
  "key37": "5ntBDbjsNMgMnpozYqNx568eFQyQje2H6XmoS1MGJ81NqJbdHb8Xr14FG16Buarbk8uF8UaXDxhMahcTvtUUQm5q",
  "key38": "reSvgnjHr4MDae7DcTJPf7J2bDrmkvRqrQTU4KPECZfwjSQXe1v7J7gybAxqqCuo52BXEJsBWPcVbcZKchjd3EE",
  "key39": "269QPr1JhDuhphEQfWYdCnDhktN3hw6PsogUEiThAeXi6C89ZA2qFQGJghoVH7VNqDZLQPCatx4xJH99t5CMwLAM",
  "key40": "5dD5r5avuLbUcFaJVU7aixuZJgkVxZ3TXV2G6wjdPmD42oP9YYge9rsLsiZo28iobmiR6Lc8QMvvkVPYG3W9J2kc",
  "key41": "5XeBFtw69qgwc8wzEZ3F2usABKmsvtC4w8deHBhJxPwqzURmSRW9hFexcogAVtoMXmdTSsnkjc2M96FM4Uh5V5hC",
  "key42": "2yWJS9osYzshTpRonecbjfNcjNeQ14YV5T3PKxrQScRfXu7Jpa3tnJVScfG4hUNSNWsXNqdBqvxPbRa6k4C1LXxX",
  "key43": "2FCNpUbyKR9WnAUwsSyKwduBu1Y8EUp1zyHbSjK4qLB5Ujei8XPWzwjRxYVYt3QPQ7QiQZ9d6SSJGN6Xw9pDfywb",
  "key44": "oNteFqL1jNcSo8fbG8yBMLhAsfj9aRC1ygqtmhwdPsYUWHTRmLvdBpontGnTxKMLGTHyiKqrTMa5BcfJ1S98ibJ"
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
