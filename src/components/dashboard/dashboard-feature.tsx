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
    "5hbrebpeFNQr8NJwxzCXqCV4aychzDmVPZ3CKruTGruCcgPGaEJ5QqMpgEhNKuHVkMSqWP7KfWuKbRbgR4eMjt6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hgxeRs7mz4sajmN8W8y1deL8fushJuFxMtCJoLgeTF8yrRxHc2oQkKi8r58AfUY6x1oLSAufEoaApwemDw3EBGy",
  "key1": "5jXP3jpweXKxBrMJKsC5NcG64yMr5xSsdfgsQhwTu3d3Qw4MD65Dz8wMKstMrq8rrWJ7MA7XGxnr1HDGPrZwMfSr",
  "key2": "4ZcBXsLqEo6Vs9x4D21ZujFbLy19me6ZtoYjPrJaPGMic7P6SKDyeKYWm3SWRiHqKfipe1CYVL1SDtvGkDQc3c9Y",
  "key3": "46vyxpNFCWBG4f3qZhGNpksFDGLipdwu5rDdy8tgTiueMwn9wMb6aZtZSNTArLMEiiEQ1T1yuM5nXmoHt9vnKijN",
  "key4": "3nP3DaLDqkiCK6Pxxz7XmH7ZPyEJS6NFQFP8qjy5DugCM2oz2YCpoKGGGxp2qAmBDvSE9vmFgU3Ftib9zrMDvecG",
  "key5": "2XoJPQQ8Cxt7DFZjd6HfqJLr5rvaoh7hKA1ghWhHbCh4uRCC6KhSDzf2vHLTaUW9GCu7Z4xJgycxShy2TG8oXn2X",
  "key6": "4xDS17jJ7fcMzSGtufWaRuqyYoUmxnm25Evq2cM56X6Kj8L8kpKUr6WiWk4EV1AaGunBsC6rbuHRpohzUjwiFMzc",
  "key7": "JFcU3FnrW2DFAgP7p7144uhN9k6x5Si4M1YgubHYuYK19NvtKYetGjrPk321Qih2v6u7r7jCiKz2ZrhWFJ5krKy",
  "key8": "5Go4TebPy3AyQ4sgdQugUUPQGJZtF1K8Eib7pzzjocXYta4HTgD9w3sndS1qHov418dk437He9nWSdyjUaqnAduK",
  "key9": "4RYPUrQQ3R5qVdkuzhaud91uMDyXCbr6DN2Y1iZXBgcwkjd8qA68gBk4tZzpQGSr4kauv8hKFxfvXW6rJRmPsZxE",
  "key10": "4umULwacDs7fUuixqCH2sDqWbQXMLtpZA7CBkXHCH3BN4UUMuJjEqvXfu3BqH7jqA9eebrtpwNxuNDdGVz5U277h",
  "key11": "5fAXjHDGV3qCqXpfPa59xxfPF8y6Ttz5AM6GR7Bkd9aqJFu2CZMcqTsGhLAV3Djyo1Vh6rXKhmrxJKF1i8Gw6RLh",
  "key12": "2VJDWk3gkR5bLxmYVH1bbF3c3PuMZ2ADBPsN5eJnwnqycP8Q39zHuK7HqHFBqPVweMMjfGs7NCh3NhFH3qEbo4z4",
  "key13": "3RNgiTjHGwT69DiUXYGSHCNY4EfXT47Wq2nyC2X5JNtaXDFxA2uDp3QCsYEREtNKXc92vqtdhYPFSLtHWUHgqY5w",
  "key14": "PWvcA7BYSPiMoD5D6L3Gk2gZvD93Sb2NnPTt2AHw1Hv4ogwrVB275XEAGAaArrFA5sw2SJQa4LGoZzXmr9GhVfT",
  "key15": "5F1qK6ENeNy18Xv9d51ZCixHU9tRiUB48zNfKbDWtGxAhWB8a8x7vr7BkvqCfyBmUv3Maw67GyW75GcAJH9PgKdK",
  "key16": "3vMZwXRJDx3D3rnqfQNtfNGaEwDqgUSiG13azpySrBABadEjzcGDvRcJT1XJoWhYtBjz6LcEa3K8jFVzBRg2ZKE9",
  "key17": "BB4KTYJLjDh7kfxjBZtfvM4cica7cLs5oFBwMaZuDPJ9YPUEQdc9E6cRNuYwLfpiuq26Pz8zSpwQANrFPgWgbsP",
  "key18": "3mFdBSGgS8DYEDqFhdX2XmsKagmemumq6nMn1FK29wnoqVCoecGGott1nqZkdzTNcfHEH7rC2wn85F86tnmUaen5",
  "key19": "3McBhCmLETrMgCW7Bdo8ZzCqqNvsg5gHK4etW5rx4fmnHx2sKZf2XoUf126F82ZTLzj6sKXpbxkgURrP8ktp1MDT",
  "key20": "2juSAgqtmVriMb7LoFoHZUc21urw7SfUkGH3WhX2mYynps2vmp4bbWq6d8wKHneZD65AzvirFCkY4V4rXapUnvyi",
  "key21": "5pYAmGcU8Ss1wongUeCdBxnHfTVq1EwuDuRjxsbgi9GVf61NsMthK7KbEXDyn9pmxx6vn9hsaJkBpX6duZqowTJZ",
  "key22": "4d6EMuVSnKhojyArPjidCXWJXpEahZJZTwyb3C4XP2Ycz8dGaDenYcQFLM9GGyAzv7SiUTng1d9aUqzAzAvdS1Lq",
  "key23": "4veQrHF652UEaeA7SCm8T16N5EaWp7JuJXkv3Ufrfe51cwFT6JRkR5ixgFD4GCJFAGGMUYhwtF34nuTiKvW2L2ts",
  "key24": "5KTyCmcdVdHYRTf3UABXqByMnAqi1oWhhbEfFH1jvswRiR4xjhLRzm7jPew1Ejy56bqhwQSFNhMWNCWw9aVup1Fu",
  "key25": "4K2smG6kFVMDfbdabrcwsYYQN4bEUDJG5DTNHGT29cy4nhLwbp2LjeuDrVHVQrjp5JnhMpkKwya4iftHcPrSDP2S",
  "key26": "2hWqRrvfavbnXb6WTTtEPACzzcu87bmzrFQN7Xm7wr5z8jnve5JcUBTU12JUterbPxWT8sqnHbbcaX1mE9n9U66q",
  "key27": "3J21EhkkJY1iRLS7zr8XytWRVvQB3hjsBnqVrrx8kwt4aLQoUt5YjaUYKJiJBhc5aGmQCdVCuK83Q6p22zDXkec3",
  "key28": "3S4A2eKZdjb4YM49wqcZRSmdtuLgKmVgZyinwUMHL2eTPty7mMci24Qt8VAUs8viq3yK4zpEkQuuAArd5UxoooAY",
  "key29": "nRdjQUFgTQHc9f465Kh4438jqT6acW3eScK9kNd5UDPhPabCb6GTP1gW9YrS4Cv4Mp9bpeNk8M2mWL43nThCptv",
  "key30": "8woXn13nbS4iZrzAqLwM9WLGUU1QHExZNirjkyg6i7GGABDeGf4JzB2jYNEeip16Mz1edZNYpcRw3EnsdZwzDvR",
  "key31": "4ryWSYzEnpvGNcGoJmadGmxpAjdEEsuBZcJXUDKfTZEQg633tjADdABkj56mvnoxpbi7yCkYdGttLP7sx39FjhZR",
  "key32": "5MgSMeCqFL8PvCfhgmpdbd4ztUMVDpVNzFejHKZyKdLmQM7SsSFGSuLpSXFdCrcHiM36V8TkF4Gk1gZ4KBbPK5PW",
  "key33": "pCMr76Ra8dLBG3k3CzxgEAPFLZfSRBnUub7Zh9CSnvsu2EoVfKGaMZC6kWhzqPqtNFfh2aEejqBwa7ed9hhhejn",
  "key34": "2Wu7XmRa4KZmxAzSwUxh15D5xPQXDrJcS4X4K8SJvQUPNwvdru93TKkggCUrp3LZMruYPH5XARLuBEon8Zo7q3bM",
  "key35": "4WeNrmmEbmbfEsTgXkPtfh2k4anMXu8S4jwbH4SmHcno2FhuENTdyp3S9W4zdQQkqg5iLryqBux5zc5zAtoP5Mkt",
  "key36": "2GYXYbiy9upRKd4cZJugP3ZqsYyu8r79JRcShHpdYBMd6PbBJCweF1mRmgt5booT426HB3NEdqGAq6EqMJt78Fqe",
  "key37": "5hrKSBrTV42FyHYw9vdV5Mx54DedAMsnXEYR3ZRUdJdYz4EQbPFRgdsHF2NJtrwyVHfmFuaMaC2WjvboTt8ZXmMo",
  "key38": "2CTnggKHmR6nVkqYY2HtdKWCsRcF8be5sCAxbnb8PLbYt2k29Kr7ziZsRKASg3z3c2UbUX6urJKThnA7iqF5D8aB",
  "key39": "3DdcbiVmwv5L672qq7A5hcaMhPQLWEnQYR3eo4Gv9w5azojHGy85jxPzBCPLcDSP4hUakHdkfRjE9mY5NLV3HRkM",
  "key40": "38ZomobdUvfeFg2VxJdx1XDEEXVZi9rVUp8UgVno2DMAMMtUz4L1TTbPUSLQaZPGurgdkKpRiMcMrJAUqQunq8Hk",
  "key41": "3c7CTwDW6kemQFDPuXaQaAZShPBd2pHzdTuywRvFbKEUqbGyU4niQ39tNBJNR53nrSQJtb8oD66Xa1fh9KcXHQxh",
  "key42": "52bwvd4n5QmfFuL6vJDgN3fkm6uQBWC2zvUXrbMZn65nXWZ1dQwAgZQYvenMnZhFtwqerZCkqtSKMvZsTVvAJEmv",
  "key43": "7GjmQnTDbGdHbRxd5959RVyjECWjHfncro8EPwf2USjjnDEMRRSEHWY23fvumVmxiywUcqGGnV4bJLpNgGNUNzr",
  "key44": "26GWRZmYswWFZoAwJnuEPUeeZ36p3YBSQmPBsKHfYadL7uvuUkaMG6Ktd1vjkruDu7ir2H5MF7m8qzzKrzywkSm5",
  "key45": "2EXVV33BpaEhCG5eZ4v1FcpoEeYCQhaPfLVmcxibRy8rmjryV2wwAyimzq3KDT2DtH6QMEZ5mXsW7UFEzFo4mj6s",
  "key46": "3ugjoPF6esLTdV1bsNbRLspUJGA4gz7YJqryhxGtE697pGx4dwYusCtGXVwMbSpnzHpRMtFc2SkWX6fREebEwjAo",
  "key47": "28UYnsZKMNhdw3d1772gjc6gzPgEm9apmZzkVZKYW1jt7GvHCYJyaQGjFnCs7ckRA9rid21dwjchedCRhNb9K14J",
  "key48": "s3EJ5ffysDGym6eH954yGJTNoDaFRJi9BZNh5kUFevCWAhyMNJBc9an58zYnQ6BNSBtgE6yywp9TBFmn7F1isTz"
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
