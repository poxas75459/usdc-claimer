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
    "31tKBkNbwSBzzkynVhdCvBBSM1pTUb2BLj9vYYCrjjGzFQBWLgN3dSWpZxoTgJsU2uZkPbdx3GqufBa2M3T8jcAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mhf7YgBwv8Y7Ta6sY57DX2xas7d6oYu3pDsFMN7zB31FUjaNxXyHpNvbuprGgi2eePJmYjJvhUBPrFk1u2QMzyq",
  "key1": "3tx686CwVs9fqHBDtq1NYBSWSL11433nAxA2x6nweVD2L8MX8aFTNDi25vyf2Ed1gs2v11wXJqm9PzzVwzPHmA82",
  "key2": "4qoCjPEqNWN5tmwXskYD6LQtHgJwfjEzixjd71ngpkK1df3fZt4g7f1X3NNtumgKp8v5q2vQhBwVzvNfaDwKmzwq",
  "key3": "3sk7LUbyboB4jNXUjEPaGrZcRUcwMs39aPUVbnmZ28PFTZtbLvHxQKhL2gufhKs7mYrDvBEBigJYG5NSTTPR888p",
  "key4": "5EhbmRFfsTsq3piFvGuUqisz6gDBT3DauxdFEKaCLv4FvGCyRZhGup9ZAp28nsLyx8csr6WQhfWib5mSXXr8T8ai",
  "key5": "3LZDdj7H1Q7PwBTvGqYd6NFSWd9ht1oUtxGAdbuBJXNwAum4KDcbqSeAr1CfEsi6A7Kjqow3sKBMqCCFk11zuncu",
  "key6": "5nspJnDFWKyobVmGqKT7kRq4hvuo5scPjXwZm1ZaWwhCVWcj1Fxv9UAnCzTiuWqnNnpVLggXw2XNe6aqiMkdRPgi",
  "key7": "P17djSBzhDSU1ANpLEqCBGBzDMHnsyX5cehFjFdyBpzvRRzUdTMgeA9YHcmEvWCLt1mfnLdV9a3XTJHqm3yhCBS",
  "key8": "5YQhxrN3AeTXnCLKMsULde6YoQ8ghuCydk8v6ba7A2uPsYYbW6onpjeq2ZhTWFPFX3fFzKtFuqRDQKkofXS4DXx8",
  "key9": "BJSZrmbZFwPHvZDpdXk8oPX3kUH2gTv7cvryn8GQujwtNXPYhptsGLnpmx5keG5zNxU1gW6EtpzSnoVKxeU65d8",
  "key10": "4j9LCPQZfjX36zfxAgoXdjyw8sxNpajCdVT584umj3jBuT1WAP3ABeEk2YCtdH63FKp2W6x3RP6EfuW4Suf2Gegb",
  "key11": "2EZtKo6Mzu2cakW62khHmgu2BuwHN3jtMLkxGwFmkm1MVCTHVz2E4SQeqHkovkcRJWFsbJ1NcKN1yKnr4EsMUiGK",
  "key12": "2VkyhWiiFQYiEQyqGygFWHSNtRq8fPwz5Dcq5WybPVxwhhywPaX2LTZc78TQApZXvXQuyGS2D1UE9bk6aEDrqso",
  "key13": "Hvyo83j6HukrpTWZCK4PBXhZkm2wyh154ZhGTMDM31ZoJjSWRTLXoMv5NDQUjCYcJe3uzJaAHUpyiJS6MMi5a8U",
  "key14": "5vVrH4do5N3WftK5Pog4aFLTwfN5uG9S7aBw82T2nEE6Jh7CerhGqMPZ8sxTAXXxnSrGM6dHVyqhUrFUcskLuAZE",
  "key15": "2HV6CDkgEx134ZCtBLcRBmvpajXvfz8cwUui95eaUePuE3fuoU35Gaa5QTC73hGER3yGkfFBM92mvtVG11VEndTe",
  "key16": "2Tq7hoUoRu4eCxq8TXu32aFBpMQvSDrmwacqCgagPWUmgdzHT592of2BbeT8xG9bmNEQgZ56fdB3y6oubikJQKLT",
  "key17": "2ZUrZZ91N2MyB5WzqozxifPuqCuw1PCuVUpQ4hqD9Nk6ohFTntVdo1MLigL38FUUzj1AQttQbyy7WMFzeP4Yx6ey",
  "key18": "K9jbh7PFuDPAcqCPaLsjk1C1ykNwnQr8jtToon8PS18gFxjw62hfGpxeYUAJ99vYeuGG2i7nzDXMKR5W8BuEbzT",
  "key19": "huhb5S1ntbqv7RcAU9KF64i5B8uixZNupakvcjB9uY6hNfafguG7hDVCKq65N2722xmHBCP3X3dztsBGBnnUMNo",
  "key20": "4YKRtpzDjPRFticeR5EKprFGqkDgzo8CaSMADSnfRWtKt7bJWg9GqnJyrmnKhjWJKSFhUTdwf3E7zUW7k5xoMFmk",
  "key21": "7CrH8Eo7g7iASGaCgWJ9LfSLRFPhvtZwSQgJwyBHo4bzcHdV1vZMyibfRDA3LNWnxd9v1eyGhLpV9259GKiFfGC",
  "key22": "47kWp5rxVBayyRjXd4wkLo6C6Vxw5mGmqfTijhpo5Qtict2eaQfYP2SjvjRH1ZhGiCqU2zn36fUY19ZjtYAeiEzf",
  "key23": "4Va9Z4qMfxxpqxACu5GHVGLjhatve2Tz55kbJHrhrVj59F4KiM8r5SthhZTqtc5NTL4bcmydxguAyhXychb8ZowF",
  "key24": "4awUYJcNodJtC91eiRYK1CjyAX5yHuCEFo8CXQipE7bCsaGHEYhm3DkWBxbRpJA5bwLtLZMsPDGGYTrRpzmtUmJK",
  "key25": "QXVQXHT1fNgCCr5pX46uszJwSSzerksDmb8wHNv6VAuouaqHKjXakSUD6NwfYXtYXYF2x6ppb8hs1U8HpCosDFF",
  "key26": "388G6rpgd2tXAhw6mEfhLbBr7RccK7gEErG8XxtNYd4THbAbn4LR5opHtUwcghgaVmgeSNArqeMpXZH6kQk26kkc",
  "key27": "8fv4mUyuyRPDiyk5KhcuBNDpYuUSizoH5MwAaA1Qbv16w7m8ZfksgnNCYnmWAUfrNwhhyowsmq8sPWRy2D6TLhE",
  "key28": "4CZq1XzJLcmrJxqA7pPFBqESj8F6tCsJXrrzhjjC3qBZuKezJ6QjupjXeckVRWJu8zW5mrPfeNTuX4qsV6MZgimL",
  "key29": "3mWCPr77jJJeDPtzug4bJN8V1mitnrMsgPBLnXUzqfRpCmino7QPfkUm966PRxgru5G5vvKuVe4U2q1dJ9QrgBvc",
  "key30": "3Qk7ubQWNNSNDrmUGUkN6rLUXZEKAUVQFUpbuzribDxLhx4iBG6SL34SWJwcSXSdXYzL3WnJWA67nWjL864VXByy",
  "key31": "5Q9as6d2XmzLz8XmDB1H5ADVdrmfzZneZdeGgdZBjCTeNzUCfo3Vh4BYzbq48DyL7rAebBHohVJua2cvtCVKyWSS",
  "key32": "5vFptrUsXoTHAGpZ3Fsn8y6pSdwSnikN2MkA8CS6gFfB54qYhVm8mGj63wmbmqnboR48U6Sz3UBAGRDzGWk3L1gN",
  "key33": "5GGtea5UKffofkLynTP94ME8g4QaSKbDgieuvyhPXQ62udcX3uvuxkjwwPZNfn4iGSr5LQu7tA8iyJD1xGb3kQqM",
  "key34": "3G2P43mU4bYvPt5MDBDCafVW4yZ4K1zgBAgg6qQ3ugeXcQBzVqkwBYR7AFyPGuHT91D7vs9JhQm9ZHXh3mFzp7h1",
  "key35": "2B3LCd7Kcxt6NBKfCrPP7W3JCCd6pTmdPUTAnkoWNpcpGYosf2jscX1dEosXyinaqrTkDw9jxxAiA3nqCJoKSYu5",
  "key36": "5nTktUgwkGtUvVav8knbt4vWjyLtJ9tTEgqdeMyyq4e6rXnMNZUHGcAwa9tgF9wUu8roZYRHxVLxpc66WtzoZnyu"
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
