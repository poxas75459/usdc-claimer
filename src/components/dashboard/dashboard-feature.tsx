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
    "2qTxdu12dvLjC2V8fN1VBPsGMYoNB195YKKcmiMGsTQ3JyAv2BwGoMf6SWX8dYpRyjjuisvbTCViJrSYTJ72ZAEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EBSWkf1zWfe6UuRaQA8jhpKpRjuh9uxPqxx296ojrp4mQQembbkBQiNXnxCLM8LWRG4vkVdNL1QxYTwPQUkAQp",
  "key1": "2gSZmysNRes9GgSFen37CsYRUP4ovygCMuqrdM1sgmeNq8YQHpcu1Q3eTw7mMHutckSQu3KNM2LMJ3yGutu9kEEs",
  "key2": "4K4P5J2pj3HHG9S22iQeWSsvn2KnbUCQx4QuVynKBxjbAvju6DK5H5RNTMNpANTTJUZwX1FzFA6LT8a2wgcC7pPb",
  "key3": "3ZGL6X6Kr8RZQej3si6RW3T2BsnQzHC5zH685oMpZTyHV6fNjn7gRt2TjD1A7saHrGfLuhcg7iBinH2gKF5UYXYa",
  "key4": "25GDKkCWJxK6sCqkKnA8LZftoCCww8RwjnYfrKFi5XhyjCRzETX25Nka6Sn9378maG4xnrXgzL148SBY4b4Chzvb",
  "key5": "2TWTHzFj5NXDG2a677AeKUVLBeAM6j9NG8teqvcBBEyZpVpaviVRXv6yGoxGdivAxKPSGAPbR3Ccx8iGMpzTes66",
  "key6": "KXpy8U5BF5orogNCqJMBTmLm6dV7Ckvrf8NYXxpVHZe9ivp2SjHE8em2nvsd1hJJqCmNPKDSS7bWQugNBgtMHzk",
  "key7": "3zNFMVLzVkwvpUbxQoKoGYMn2HuapdQi8DvYovFotqjKCrdtRY3tgEqgfCF8H94drnKgKvi1v46t2MT214qcA6uL",
  "key8": "LTnZSAp5Cjx2JNAiVQferCXBQk56kotyCiRqs4bWviFTDmbBMZwjz726zqE3ARAybWysqnSeYtNpfcZfKtMR1pw",
  "key9": "4KAcChvjBReRhmaMxDtUaAGX4ost3GJZ4JHzFi8aPqAXYmgugkLDcAFrpqSiD56h9WnDbW9gVLX9cGWCi1gkEGHL",
  "key10": "KbHGn8Fw1mEWYyxcz5ZTTnr6FFfHNpCQa6ZM6WvuszWbiqKhLpk5arKFsWkE5MXX6cGr6LP5V3bQLyUXBBjRqeL",
  "key11": "48bwhy26cp85cWqHhtQNNJbktZW6wnWkgH7LexykLrYPFsYDZcwubDrgFycJJ2ZzHRjZ6TFGN6QBN7STbgrr1rY1",
  "key12": "3Xfu43woDUqQHoYXyJsSTH5uHcCjW3h5MrMznbFhRnw22oBwYTyZPAiN6z7adivrLkaivLh3FAe2sQJhhEL2ChJ5",
  "key13": "4nboe5zAfemBfnNFcGmDTL2F1adxTC7QRnSVoJHdPDSDm8dtCXJ5aioQ7RWxb3NdXCzCyguKcXTcMnA3ywiURhJH",
  "key14": "9bkG3Fh6wbYgYMUMLJLss9uEa1BTPQ5ZKPJuFS9bTddexK3CaujKRmcPJbwoxDip6PXZY2S2fFWWXDGtS9S5Lsk",
  "key15": "2mPUNyg2rFicTj2NfURXGyBLoYhL76xRpMYY1fzukU9XEFsrCtXgu6g35bA7hubEDtPYFwEu5F3JZ7RS4VCSfouc",
  "key16": "MYqutDUN8RYCxkWqY6DEaVodKFLfdKpN6Amf8Rxuz43eZYjvbKZfFp6rDLFLkf6UB3HGGdvzMWysi4XWFGBa8R4",
  "key17": "5vP2cu2TtGuw5jXWZLx7eDh6SYoHBYoFQC9ZJ5pJyybxVXdX2huQtjALL5r2kTry5LR7ZTCFv6Zbzbu236tnZzZS",
  "key18": "3T7Qd7sVdnTKPoz2shww4zsz1Upyq4PxfSXU967ErmPS6JveLpEmzQSfHCWHjpvfkPSzhGagibPPyYBbeULH1ecG",
  "key19": "2VhaK7cZkVYsgTnp9oYpZLPz3saamxXpAmAVtxxCcGp4D9dnRAPdeV1TtbEFDrBo4i4eSRV1QeDamdW5oWsULdEQ",
  "key20": "3Q93A3et4BvK3yq1527csLbpSwTPEv1SxvGQXXJRbrGxa2Qxn7NzGBb5DFCvKKcjbm4thLt3Ucf8hqoKxPDaDcXd",
  "key21": "2NfnUiqNs752a6KoQhacQD91xFXDFFfm2otFhM34bbvky8ZD7pnVDwoN3E7e25y4iKZ11UwDyUERsjF2Y2h76i6r",
  "key22": "K4andhNDBgV1477RQe9j2jB4P4FLZiagwj2Pcr5t6DtfMuTeA5ZFmfuRn1Y2hTsoXjnwaEVye8ZS8tpFePYwCEA",
  "key23": "2i2uTMxfaokab2eS9GMgcLQyFU2wWw8FHLE2iLFGeQ3XqVYEbRqMUGLXJVXqB3mKum6SyqvmFhThEvk7iKKWR3jH",
  "key24": "G7QeeHEmgpkLYCS5bfNxvpTRguntaC5UyUL33TFqRJBxEaCY8cx9apwXZrTp36rS2wddNgF6XRSYWDQqQXFHfSC",
  "key25": "23LGpSRRi82tvnRjKsNVA63UW23eJijy87YZQ6Yybx2J6oFueQUPn2wiQTDmPbmxFjsCWmuRPBbu4MzwJYs31PGG",
  "key26": "bHHU59xkjGvbuu27R7BD4c77Qab426oxhjgF7s6z1cXL5nnNo9ATiHfKvi3bHsSNhqfsqgx2xPAFxggFstMNZUT",
  "key27": "4GqNaYMdzFs3jmHDA66GeHLL8mJkFZ8pZqRrBSvjbBQ6jC1u39fNtm8QicdUNo2hXh4qKLz7UXY7PVXApL7Zon3W",
  "key28": "31usqvKM7HhLT61cY1sdY8yqbq3QGeCyPNaajH6dkZmjuwLzRRyAuNELT36fzzP2YyoKmjLS4hxvbUk9agPLe5Qb",
  "key29": "2LPMNHj8kssyKL4z56dkuVFLs8MCpTSHFrbpCRHsdJwzdue4u92yAXheNPJ1AnsBjH6VnWnBgHZgfa52rupWuKLD",
  "key30": "29XEfLTmPJJWxT63AsKW3ZRTgL4npnC9jdREvYNFiTKQ7FVnrjRLUHR5RnZHFmydZCCP8MXAx7tzGfC8GAUpfDm2",
  "key31": "5eJebu6eUAiZC9AFPjh61ATVkdLANKajZLmKGsnobrzoaqBLYKRcrMMt6ELGVo6BniadygsCJdny2kfRqVQMHL6g",
  "key32": "5jTDPcPsD8ymxNttZfTYv9UGMHS23xGJiqwmUrwhbtHnGJSV93jv4TfLWLD55GgCwwQ54ETFcGoFBKZ29JVjQ7A4",
  "key33": "4KkdMLifK8f8tbBkR1rZ6JNt1daQNjzeAjVsgBh8VFn3vv9qB9tdnTCtAybyhJ8KFwhDhfw4eQtYBpkXDz8QsHZc",
  "key34": "3csw53qaj86ZRuqXKfvkPaj24LNXrGX9eEskaf8a8AnG5jW1pmwndu9Whe9x8xcqPqSjPMSioSVSF2qB9QNtJFsB",
  "key35": "2wWtjtPtwozJqLaFP27xZ4nyUZyxbeks8KGMiudSDigopyUcgRn1Agy5viQM9AfoWL7hAxT17YHKvEGy27eghNgq",
  "key36": "2PoKCX6fApsCYWnzU1HNs6kx1UhdTCzksUP7t4xobTwV6x1aaCxfqkmZCNziC37tEh8eq49GtssUackJiT4hpgKF",
  "key37": "2xwE8cAschSxmsv5Y237ob69VP8pTPyatTyS955WN24DsRpXpLyRUXzDxLNPRfF4chCwaK7wRtTqThEsYZx9eCyA",
  "key38": "WsWchXiV3CHDm5bmA4E4Rofji1NZK3mqYfyrzV2SkBtLEveWpYMtf8EZR1UJ935YQELsjtQeTuNYtaVyuJmWQC5",
  "key39": "2wBMjtDUyXPFgMmUZ6zZcHSY3MG4i5mF5Ekw9mPriCUaxsyurrikBL1kG24qAU3fUWPg86ArzbkiuWrxbUMyMfbA",
  "key40": "3GHg5DpbYhXGNnC5bfC8BwmsNEp8K1CVuNba5o7jYbkxwiJHQXm1XfHYFKcnxFxepVmb39H74xrSGoMkmift6T6J",
  "key41": "3N8aodxteFvDqvjGopi7o95Lct2P1p4SDJ4WeDYZejpoC79GWrjh5xZ3EBNPGuwWroPER2tgdzEEsnQe2pyUM3Wm",
  "key42": "4zP2mj5Zin7kX5Eegp1Xsa2HZjQnkcTXp5FpaLRKCKqjxCZPhTSfXyBaVTEWL82bHQTTcWucjXkdNXvo6N2GNf7n",
  "key43": "4yoeca6BcP5xFJLYXb6gU1qMmCXJHy8EE6WcXuBaooAVVmWu4Nfwu6aAm22qdpfQm6QaiEPGPerJiHuHXgG2Ct1c"
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
