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
    "3btfx1bpcq152n3zsKngw8Z5MHiw4SbYv6RN9vQJERsKiDtCn18F4gLqmvNuLMHWEa27BEyYLhYSCVNPqBsxsSHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uKC4PQree94NnHnprNoxJoNLCCNrWAh5QRDAWediSD6G7TA21U3ZZXMz17ZeWUqVpYLfqDq3g1FxFxvjUbfVEGt",
  "key1": "5jRNHCqf9SD8KfAWxz2xYMZ7YYR3FKzzSKPpUikRDFnQDJjDv7baporsks7wcfPjS4NQSwfyNdPCUx2d5upedFMJ",
  "key2": "4hcHFR2giTjtS1WrnQiQTsE3mvNLdjUUVkY2i9LUybZAaTGD5aT5nHc15Zqr3o7TjHPZmLQ8pito6yqoQncfdoX6",
  "key3": "4mE1pLnn8M3g1Po2xDeZLesg7j2nnbnTXX4hQU86DJrGdYuuYBUbXi2PX46JQbYbanQRafag7fxdkns3u2gyXHFZ",
  "key4": "3iXpRjoDUbjfSB24C7J8Pp6k9fPCgAA3Re2yYhFqaAcgEbMqY9FTpPYSPh9nXQbAKCRk8fiDHDGNXHJXKdKZajCe",
  "key5": "2y3uxL9w7jewKBeBy3FmhZYZX8QwJUE3Bp3LDvHn4qDK9nv59aXCscFJMxURDT81MLu6TkF2dwtGcdGfX6Km1UKy",
  "key6": "4yVQaQknz8uowMyuUTTMMr9Ly5ikH2qUrNobf5thmj6jKTjbGz4VSHurqZo4VUjMFRzi7tgyYxKU2XhrDe1DXmey",
  "key7": "3nwvSjFt8Jho3Txt8kneDbbjq5s7n5ry27ZPG8ejwZMk5Cr1ngTWQQ3QBv7Acz8eqMMbfG7w5NPM7CvxPS4PKYNs",
  "key8": "rmRmshFokpMaJN3KdYhgMkeLjsv1RyqpkiHTFYpg9x2d2YYFx9zB1GsuMz5t7cJ5SgZv4EAs9SLJqKjLtkNftCm",
  "key9": "3PDLbr8ZShYBbovsF9JpVqX2Lt4q518TBqcKzPo7RNFwPzp8ucw8ioHyeNW2zC453ZV31MgkGS89DSpvGUghR6im",
  "key10": "39qeabsui4FWYAGQJKAJQPu63hQkHW9oR5XucrjJYDYDeukon42QbUHTSPAvRmr7NBtB5vJVU9dE6JMmGqZYxtjz",
  "key11": "3DhYowJtZRDM4MQ3YgEMr3C6WS1N2ftVW7YRj7KnWEQxuQXsc6eTSLgv5JFLqexpHXVkoYYHSYEtmo63de1hsZG",
  "key12": "4weBLJzuYiMFHMBuNLq73NN1GJkFcwsqEYch9JxDrVng3E5yFWUUuDGmTqYaWvabSSsMDqPmtWAgyW7vHbC8VKyH",
  "key13": "5aR4gFtukWqcZ4ckqdk351uPeMyaanYCPoNkhLygRrFHoYxB5FgETgc9vz5XCr6HmWVybVdaFGj5MLRMhUpjZRTo",
  "key14": "3WcHfVXqvDR2BybXun86J1gx2f25ACVjQ3nFh6p5fhkzLRoYd71CniB3JdRmXczE9pAdzMUkBAhtK7DEwmoSRKfQ",
  "key15": "4rFH8jYsGip9awunG8kszVpG7eBUhxGemNSLbGfnMArSSwHsXMQrL2RKxFZUTiq8modZR6nPpuUBuaLjszJ7amgJ",
  "key16": "4oLwvGegPFh7Uqp2cYWCNrsxucEkYDjvcERD2ehnhnq7n4fd23anxZfBuS3Ba32UGacXYDWqc9kqqbxouGyHbkXw",
  "key17": "5CTT3ooCCDZqzry1ontR6XoomAZSJYGcw4cW8D3emBYYBrNKvxKCq16mnuMPyBVUJ2RLixj8D8vRrNTT5oMNq2kW",
  "key18": "5qjUrtMf3LYrzT4Nk1CGp5PRVqywUbm71tpEHcASUyfQism3T8DMxK8wk4dKRuyhNu1mVg9kBW4AdurmmF4E7yxk",
  "key19": "3wA95nJK4r6yo2atSmfQX8utY7MPcidPceMTy68AaXTtqk41SWxEScLKNGCxTtN9XvJQGCqpta2XLzNvVFdrvDjC",
  "key20": "23be4yw5SNAWG6nRbYAfD1Ncd2Db9kjv97GowdDpjjDZxuLuwxPa51PodHKPLvGAB7R5e6aiiZgW9wQeziHGQVuw",
  "key21": "PNmeHYDxVSDpVxpd4jii62z41pRhCAwEnFEEJCrq3HF4xqM4Cdzt9kmN7DjkEhXAsEaP7Le5JMCj3wNXoWrsvMv",
  "key22": "2SAfNhspcMnwcf3VkMQPFzycqCLK2vxwk14YRgjbcvBdXZG2nAZTeY1bK5ZMuX1QXJXiNZY6GkxLjzh3ADYyFWr2",
  "key23": "25dqras7EMmW5AuSz3JZRhaeRWaLJjwdmJXLjSBVci717A83Kx8KaqWabjiUFJamSANaVAQsJsYySg9hHZJWwV23",
  "key24": "2AE4Fo3dV8JsoH4JvG6WZPiphmYSP2t2JW3hdexzEG5e4MowkCgkvfgUUYbeaEGZedf4kwkyDNa4Dtq49HL9Y5ey",
  "key25": "ChseYrrjotvtgRJLpNXxJM7J8FWSvhKU5vXqdq8UUnz7nzgTZFuqaJUMGAL6MCDBpdDBvjNPMNaD7HgqKFS7fxf",
  "key26": "46V5nMXzvBZY4GdSy9xXeA84mkJTbFyvYUviF5YtU3iaGSdfxW3sv5oqwmhnhuj4obU9vmDNcM4qEKEnzQCwyuRW",
  "key27": "271Hyi3pN4NPV3kfw82xyKvGdQKcg6iQkx3TLBYdDgB7SGC157GZZKzrqXhLRSccANXqDce6B8ydq4vvagJkG9ji",
  "key28": "4io26so4ZrU75pURenfXW38botAGzEgiDNK66QPtHfAVyhuUuJVWn3Q5zprbJ4vqMGDgGyyc9PhraQQ6U3M6QQH2",
  "key29": "HPQp4zau3WPvUsBsamWcvhrg9TdJ3T9XKiABqntoWQ6esf8HyKR4HXYXkie3ZngceweBTmG9DEK4qZgByCyh9uw",
  "key30": "5VhtyoBfFTETUQ3AQrSXDRz9mUu5ivvfKtBJeWQfcHYNnjYgdfeTMyrbZSBg1oybZ92Ct6U2wBbtAYpsXJPisMrZ",
  "key31": "3BYhoX13PG8spRp77pM2C63VDE4uGUeH9Aud1PoTEcFJrKKnnQLcivj8QH7kzg5aJNjiChRd4Rw9gqijz7G3A6xk",
  "key32": "3MbTyKg89zLYkkmPTWadXskYj4Wr4izEFSLo8ei5cL1ju6PaxRidBtZ9L2fNzYiPFh7gvXUxC9NLqZZCtSeFHMB",
  "key33": "xrZ5cq7hEZK5eCz6JNPMpZbUSd5EMN2EwTJynGBCeWSqDpk3hDtStqrkthwrbJsfWvaiiw8JTsso9Gtx1VGdhCN",
  "key34": "4j3WWGkDHUiX8oZ9oX9dDgAANG2hUsUX4K1sNzKdvB1F7CNW7ocfL3EMdC5xgXKdEYycEXaMwzSSDQqPnf8B4pSW",
  "key35": "iz5WWErmige1FPgacqstLfatAVD4P3cwNbCnntYHFxck2GTk5QSC66NVBvwMACzyGg5C4xFkio8LVzGXhNuceKZ",
  "key36": "MXh2JsDFf3i6ft6RxHHXw8ygw4GDyrbbUEfWB7ovtiA8xHNFcKLEq3Wevmf3zMqqdMCZhWkrnGnAQynSj4Hn5xh",
  "key37": "3ApJSEyGku99G6sVrSncrMMcVhPj9V8NAv4UsLL8Sz3ZhdeGhwpW46T5R1okPADhTGjibRviajMpnX1fxbXuR2aD",
  "key38": "5GiCvctnL71xB1YLxJoEhWgxrGsrPizGmJ7q1ceuraYSJ41yezx5Hmc1DDRdoBSR2b6GfrR3DPpdhfY7N5FRoUg",
  "key39": "33zARKDULhdkDHRw3CorDYVvycSeJbKFcCjCfnjdSThPVKCCukfwfyhtMQ8uTboeYyv4NW64cxKziux1xDFU9sVm",
  "key40": "3wA96prH1Vz9TVoTWdsEJJZ6kUE3gMrnjebawhcipAmf2VynertPAuhgSPp9WsVCLGJPAaLPh2MF9F1StGdMBggx",
  "key41": "3cBmfzhz4ntR4iNdFv3RzvciAgawt2FxWJAdzUMuWKhUvvfYFQHNycKvjfmeJFAgQV9HbTJrcEAhi4jeBcMp4GD",
  "key42": "h7hnWpuCSckh8KRGTAF6Dpb94ZyL8cwiYpEpncXgmuh7MgyNtchuh6xqqLLRrNXqffibM4FwKjDFLqNBP8PNjEJ",
  "key43": "3ZWoHDebBMvSBX7b22xNwxry54KpD9Z56dFHMJBfMY5aERFYd37zVbXFezeG7Rhs42Uuc3FdK4hLHeC2EpHomQyA"
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
