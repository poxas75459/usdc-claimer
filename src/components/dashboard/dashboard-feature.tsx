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
    "3cp2z12ENPBJWr4wda5Wic39pV9hmNhdPoC119v2uqhzSUk48thFXAMoSd2SkwQmSScbvBFoEVxmjdx1SYhUHfYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SUAoxz4XGh6CVN1KvjfJHsP3WAhsdGQ5YM5VSkHaWzL9V5VUbQfRN7FUoPcy4tJiQfRX7cQS6KJmSEMXR5zvs18",
  "key1": "3qaXgFmni4jPnmb12opQUjGdmPCkgCefJHXPFznpSdas6LmVuDSZRoEwjpPP1aZxkeTSJHNuBCdvxST4jKMRG16i",
  "key2": "4URhgqWYH998TK3xyy1AwAS7VxEy6c9e7EH1qEHrGWkXoaDkcsNbCbGyNba737JDqVA1ydk7VXDy6rsMffgWU3DP",
  "key3": "43WpVJiFCyMh9nKf7u26vBSf71Kz5cUqjz3obFutmxZDh5ST5dsmTx4uaGWNf4X1fehz59mU9nF7cyZzD65xTFLu",
  "key4": "2iJSH1RpqDEckoPwxh9tCZbCoQTfayGbXYRURTDToF82gvP79s4pDNwTSQc5WarBohsKkM5TdNjaKTtmKYzRvjHe",
  "key5": "2Gr8jUm5NH2CfbPiSJChS7ak9xp4E6jKpGKCV4F5hw5r65d4wSpiV7Abvg2WDFZC4XJ6zKaHykxZZce1UU47FxiW",
  "key6": "4PRLjkxsEFRP5QDdjddKuTFpubmhfAVoC1cdo3fEvU64uZkziLosRZbcqpAmqXDfkBbzriFCWB5KSPRKWPCVJCCF",
  "key7": "55bxBBdGLZAt9RFvaTPhZ2vQUYGmQtyLrGAhHMwXEXYsHRG8ZS26JkBRF7JmWgWxJofKF2JRqwgSNM7EW9ff3U4z",
  "key8": "5e4mQHTqymkcFbjmraqwxqzHBSso7njZCr4f81rsADkDbZGLPsMN7jaKHd8fQsx9MmHfnira4LBYarUVrBKUnwpS",
  "key9": "5GTaw313Ka1bukyLkV8Uj9uN9Vx2SWQG742sK2uDCw8bCKhH2n5qneayHFk1gETUtN2QcxCd2RTq78Jq5mXMQ9eb",
  "key10": "4guDKiGhQixSD19kEumRih9ixxogSfpuakBFzkGJJTyPNLP8eDZQFKKDqRs686Qf5GRKa5CZsnFMkpXHnD3b84QN",
  "key11": "5rJLE8EL1GzqdCoeDKpdQxJhL89VuKPPyktX8bUu7zWcS8sChUmBhFS2XxiEHN2aa1mcpYJT6zLJuTDn1jx2g1Ak",
  "key12": "mXnJFjW7Mzq4rzBKp6L99kZYheFi2qyPdPLG9TRs17QuTmBkVqY8vXMyxQVGA88DLEHjdHC3azibLiqadKwfvzc",
  "key13": "38SZ5vvrwTw9PvydBQNX8oHRgaBWWLbCqYUbFjFqRXigrVkbksNh1jQrHmXYcW16xJbgkiU9EayP4u2U2ZUKsBn7",
  "key14": "2VJ6ku7jg5rdLfge86syLg8K1XTFBymRAtPWHNtsoAkH5KtUQXFJnhwFQgaSYZeP49H8CXMjbjpjgAs3JeBQxxF1",
  "key15": "4Cibq5w3LJ2z8V5ecdapo4sTyWx1e71iVN2jY43btk7UNtWDijteMve9K547916Kk4oRZm6uzASQvbs3qkKht5Vd",
  "key16": "SZ5r4WDRSxE3PwCWDaTBpubnjYv8cSAH3rUJdgBAa4b3uasqzzHU24MXiWTauGxUTRuJzeJTFxcfpaHWAAJNwUd",
  "key17": "4kRCqdSW7afgqwZe2rEyWjdW6LQkXQwYs5ehjZa3SVA2SCmsh97bJ8dpYih1jrZUAD2bfyhaYNMUnFHMY3N7acVD",
  "key18": "5e7w4fjHvXXEhdBBo2eFfqTZB2vh3jKjkEaE23wUu7kMVRgtx78LVaDjGJsoXakJz8ena4Xz97czPPXHd9X3f4B6",
  "key19": "3DmWQCoyZt1KSMQ4MtyvMQhAYveGHctwrypHdHKV54cSVykxfSNfKKwHA7mP6vLwUic1UnWhKqohHiboHGfAD1rc",
  "key20": "3Nb6nFdfz1RqEmGtFjzHxwQaYuLAdsPHCjyNZWiRV8rqkTsSGnDPNqz3BvmCPWzeMbgkgb64vheHKaX8x5HiHXx5",
  "key21": "fiajeNc385SGt5zpSSFsEtQRizbVsYwGqSFCQUKBXm1GtoKUSxBVxFMnpHAWP9oWon1RnB5Vm2S3nQNvJkAWqaB",
  "key22": "5pirRdVVTo33a7qihidhxL8rmrvwdoEsMvqZ7krYHnVa21R1Z9ynVe4Rvbz283YYcAxZ2Pr3ha5qgfbSdiud943K",
  "key23": "3VqN8ji2zHAfZe65NXqLUV1vaXGMj7NBB1E4vjiVbb4LxnXDCHws5Nqxk4UQqKjuqDjzr4zfT89shWro9U1rSM2d",
  "key24": "558Zn5VxRE9xatZHMtZV8gJpuoqVvgz6rHGuxgtuz9xTrqi4GXtrHhZy4t2Zi3NCjwU45h2UPmB3xECr36tgHnwm",
  "key25": "3AxKNGj3hACXCU3m7Tx5dvNT7znh9fM6wR9izpdsoCNnN1pPfMm5KqgB8tbgxcPwtoJB21wkx6ns7nD4FHMKxJc",
  "key26": "57ZMVChUVeC6kdYYWJuhFwZJiAVXNwb9XLaZzH9xtEfuXvxPtWs9K9TRAcGTsMSSNZsLfYkUZxJmPyUW9Kzsct5k",
  "key27": "4KH55UtAmxaYEkDYKqxYtjsYEvPSnydcuM7upEV6keQYGoZZwPitni1ujjeyth1NBsNBWeozm46CLXeq7c6CYhSE",
  "key28": "2Yc4JJWR53mi4AjR3nZAXMwRRcqx6Fw4wPVAQ7wq4sEGJ5d4aoGaBGU6QufSzGsvghUeSCf3xtfUZ36v3kRKJKzz",
  "key29": "2FCrTjpZVtCCxJo2RHkaDihj6cqbdxXuRRS1HJp78Lm8KMz8T85fQfqLMzFjpLj4vHFSPZ32oMLot8Bi2K16boaH",
  "key30": "67ktyd59PTrwrqtSqcGVAUVt1XEqoJ5GJ8dMKiXm9Bz8UREzS1sfGi618qjdWq1cVsALgeoDh9q9DjyGkG6u1Ddk",
  "key31": "51jwsnELzNemLTX6xUviKWn1JAxtQTyyXYPbpBVpu6udjGBzLFqXAoRSUm11r35YWZt9dAkbn9JUJctqmXrKQAVk",
  "key32": "5ehtrtJ75E47Uq9VEAmfNzEUN7TX4KpEX6WXbWPeBQMJhLe2bFsS1XmW8jpTGQQQpnhgpM3eqFd7rjbTC1ewf4K6",
  "key33": "3iAunwzfJAbH95U2ne1MkD22MPcBRcxTRzwsXS295ac93TwXKJWgNsLD8AL4mLwb211hzw6jd6VZ4roDogMjaxQF",
  "key34": "2CmM6qwbzborpj91DetBLN76QaYbaitYxZYATfjfKdmpigRs9CX8sEEAnktyheL3TngZUjJjnn3EFHba6u9q1Buc",
  "key35": "454oZLNVxJSVbTfxWoGZr889oknEhgPyviYY6k8r8yaCW2k3GGedYPvHLKvFdsVBTvBPCvwK9oe7MrFBixAcPs6T",
  "key36": "3QW3ERkLEmcmM2szfGsiUrs6xjHbh1gRfpwKTHotJXx4VgHzGpvppBaqT3sFaF2xnCQJjLF5CJWMTGA5p6X1Zgj1",
  "key37": "5wcoHDVjv43chBMZXQdiN1H7AJACywxg9RTdnynKmcEzRnHmaPhbNCAmTWY25V6BLyRJG5X7bPY9J41w1aC5wW5k",
  "key38": "3cf96QR6oD57kk2PCUyCWTXHHoQmZe8xwgAsT6MhDnDrTkbf3FVJWRuBdFEyv8y8iSaFbQZehLk3wydU25xQg3YF",
  "key39": "38H8MVTp2yCsKXS9TENent1DaNccdiKeff8pvuDF3duP2J21ZUtWZMCvxKXHDKb8eJZCUvo4cfCcjxvHHKA8HtsK",
  "key40": "3YxkSjzShBWe9rBE1uZCF4SaeE2uuQJW9gwME8p692AnnQxqJhWtTuCtRcFWAeFEZpGtL4Hq1FXCQEbsACWUjmE2",
  "key41": "3E1vWNuPNeFTteNX9j2vwDgNepUXKmpPeHvFrt7JhgVEsmAWe2V1eZSFkB8C92GeEeJ2nsyyUSMjxAkAMhP5xmge",
  "key42": "484cLiLBhAas6s9PNYGBhkGJU34gsXcCWae6p1eKYQdFuQ8P1LBqRmvoPMQWCkXWFcSm1vCRHEDxuef6TqEBYAfN",
  "key43": "3bAaaiWdXZk9DYAdZPakAByxtkFSwbQukjAoeZBQQS9qDmbyfJT51LLFZjmfyrgtSKrNjPrv63YRmBpZa8Hs5qfZ",
  "key44": "3BK2BPtfYd6Nq1sEgKYpBQKgFAyaFuWXcJpvwYSnQdKvw9pgPSiTa793CpCmJeP4r54H5QrPYSZhCXoUurqaHP66",
  "key45": "521yz1KUKoZyLtUN9ywFZD4cvPwwr2Ey7PfjLsNSDo6sAXpmCo9qmfdukkZNtx8XwcdgvPFZhqGWboH7NUiX7kdG",
  "key46": "w8ceqFwTPFnJjkeyxXho8ceuqYKt8b19JxxoMAjGvPG9XGXrDH4HutcruqLUjE4n9yWStSmBwx52kdoGJe3FASZ"
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
