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
    "64owfc9CiVsr91zpnP3shkPMqrwn1eSL819p7dZHL8RRFfHBaTidQJ4VxvnAsrFP3RNWpx3gsWrzoorToBgVwtLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cNvoSxTWHTCnv1ruViRZzNVKU6rFXGtL5NtnkvEZLSUpoP3LUxhiqCmvZwLyUcEgxS7cVdtCzE1CPBhTYMfYKkH",
  "key1": "4KMwYyseUqAfsEqTE5o9GAzLfykW5pCNX3dCqTeNfnr8c5ofWgh3PeK2M9zekPwy913fWeXRYuoGfUvL1ZRY9Ti5",
  "key2": "3GFgBqrYtBXRk48W3Zm4GjtyWZEFbxcTobWyBDF52R3bgjckpMLF3TUeyUvK9zbJswv8HPNbX9WaqcLiwJyXzcKz",
  "key3": "XX1TVqw6sobiH79ALuDsgCHfEeHaamAGYimzWwgaWSsrZoYF2aMSWVu9RCZt7yrWqTNQ49kztZq8mPBWRaN532f",
  "key4": "5gH2STRYFQySAkKfverGkoqP82hQ5q3uV6oRgQHLfwQ9BDzmVar92iXgvajFAep5VdLGrBUcXnfS4gsBq8yS6nW1",
  "key5": "3SBErS5U7HNWWR6ffW1rGv3CVbi3pQ9VsmVBS43sQ3q49HxgpjwBpndxbsPvirbc7CD18XZEXsPmLB9F2HBH7sCz",
  "key6": "4y88vLn6uHqMQ3yHPdsvwtQC4dxHrQgegB9qRK1i5EojrrtguBuLeBRYrWtCNW617q9mdnuyksVTgxb5gA7XnoE1",
  "key7": "676XPYGfRLH4z9eFLTCaU4CS2m9fG9utHS6E1XmsXN4BpGrVX6cLrqEpRwS7dUV2bJ5CpA5m5MpFbjTo2bYpTfy8",
  "key8": "54cfij534Ea35aUCSXMvu5txFJkcFPAQ9pWYXynJGvf9Xn6MNQ5LR6eh6URsquzdksfkMjpYSBjHHnG9SLLkJqd9",
  "key9": "8BSevETBcyiZDgAt7smReDujbSjdDQueWHeCELvRoQ82FE2xcEBTGJ63jAyaqAEqEHLwKGC4kbLpc4J3MGJMnQ4",
  "key10": "2R9o9Lx3xWVhuH3QLTvGSKFY436QAezwfEcT4geH6Eh62f6fNbujTJ9Ujaukh6utXjkcxVDtUVt3ocggWifujqSK",
  "key11": "32LHeTvUmF8L3BAYxyqKDn79itAFRpPSbaaKrBx2VVdhXaRDaeCLQGd9auqzdjENX6rcsrZhaNtYeRWsCmPEcm4V",
  "key12": "2W6e1UWnEN7UyFhoU9ny1r1sfKWA9qNHRMVdQZkbz4oQQo2xyRBw58RNLgH9q4ggbU62uB6hHgQgeA5QKeuyMCCK",
  "key13": "3ES9wv4zT725TiMe7xnH6gKnKoQRMMq7gwLb9XLMbhrN9US8TNAgJJshLuWez9dN8e9ug6kN5GasEWGsBCApMJLB",
  "key14": "3ka3tLzBXPoV9gL1wnGxWrcnNvqesukjzQaT3kGiyWmvj6nn4RzesJANNWpCK2wSY5uwsZah9ztvatH31B3RXn9T",
  "key15": "5Xktbvu65dmwnQjYWF3g5JEofVysvj8DVnTvV3pmytnuhrM2FStQw8Sqx5UwgG9wyDomth6Tgr6Ezt1N3UAGXMUs",
  "key16": "3oantugcLiGkBtn1DCM364xRJkpo3pP4JjRrbcAxg1P7PER5ve92bHje3NPnudjzcPRVztLLbtYpaaugYVKxA2Cz",
  "key17": "Ct5idaYD19iucYKyNJDY3kdaByhibadAwhgVZznayLUbE8KbJJ6ZJMqPoSSjQwXNA2H43SgK2qvNdy6ep2vXUh2",
  "key18": "5ADyzhjNBn2bDwj7zhq4poCwmJk3E3zMZqjpZqvWvtT1PTKF9su7pUEsQMQG7VqwTpyMG16jQAN1SrcYKjq75n8Y",
  "key19": "3mTMLs7dugfiF5dJieEMsW5yZeedE2s8aLWdSvVu945USgBc3m6qw5g88PsqLwCJ9fWRXdMEJgegw2foosTCjhS1",
  "key20": "4ut7EXcLJ2HYVQygAvjMm7wN2Eehvw1egXdfcFto7R8hG9ZYHN6WGN8Fvvx34LzDJCA4GiVyPpNwQj4YJDk9tueM",
  "key21": "44jx3b78M2dttuCSSNVkvv5eMoCXY9aXWKGkAr7nPg3zstZxxSKW6K6cK7yCX77bv17HBwpK3Cb17Y5vE6eHBbwR",
  "key22": "FnDC776cTopfX6npE8FHdDxVdM1zhEqzbJqYkeBf3zvhrv1Rvg4Pzbsvpo2rvkKNfMGp68UWkFTxxQu8sX9LnbH",
  "key23": "5h3cwvxkam87KPTTWPFkgAYydADBN4vSYmPv5cuDgRgyeWwXDzHN3C3DJNtheu4RMNJ8ZczX9q1koPki4gS2fQHt",
  "key24": "3hLydRWXoSfVvcsstDgrrvvETAeVr3Ny65eA293Q9Qa3NtGy7wEPYLypMBHJEk19mKKRvNytVsfzJqeUGiNxXy85",
  "key25": "4nP4zw6sf7oX6nKsw16ytEBcTj47gDKqRNTWSgRFbkbxP63pagBUJb8Qz5Nm6z8JBrkze92r6ynSHbfWVNzPeBJD",
  "key26": "65oifm3NBjz1wLKWqo5dUHFHZnn5A7p3jVF2mkx6RxnVtZxLLwVJC9pCHwEkBYFykSX7jk9WEr1rac9UbzC9FJAn",
  "key27": "34VDXh8qxZj9JdTJ14J4fy6UKEV6U2PwRAQYTp5g4nWDoQC1sBXas4HUtkCwKowxXEBVZWeYNMBFSpJYuRWWcEzn",
  "key28": "3j8jLT7ByrrkZR9p5ohMdM74dwshYJUYjYZSKdvFtbPfhHorDqo98a4p4tG5orhLGFgQbcGLzoEh8daUDAXwQ9aB",
  "key29": "52xNTKYBT8rfjEM67T7y2cDqEdbEM6vTTVaCbSour5gMnB8XGqkPCZwkaNtZ6WkgVXzDMTB2rphgzLKq1aY1iAnL",
  "key30": "4kHPS5GBGqZFqCnt7XpaovU5mXeaAVywQWkWPC3TT2suJ7k2scGxCtc9ASmBsE6ZaDNdudJSARLfPp5sjfgyX3S1",
  "key31": "5BErqYJ8DTC3aNnDhM7vMHw2jpscawV2TqBGUuirFxb5rHhugzhnoTo5gV9AzaYopaVa7SLBcVUDYJGakJizE6Z7",
  "key32": "WjwXDVQAeyFaGWpqXq4r2D9oZss7uR457xck874mg3LGqUjYUWM6dJAZyEp3Fqx59rDd2cw63tkUnrWFevqaEfb",
  "key33": "5FKudyMd1MtbmAMD4EZrNFcKzfTjE85Xwyqz7YUJ9sUtpxbj24PFCJzR5rrckkNCkMxpUXKxT5GEvji92r7BVmGh",
  "key34": "3r8fLLPRdJKLCsNLDnn814KcMBSj4ghky3SaZHkMuQvcQuX6uKh4sg6jrX6KKTtyAd7CjDfg7tbBpxQWGVcBVKZU",
  "key35": "nv5jN6V3P26S6t9QhLDZo9xyBT1hLpjxMVEKrECqzwM1wk3wXavHZbWCYUUKLhfMspDBtQxmrrAJxxwwWUNnPBQ",
  "key36": "5BQoag3SVvoVqkfLw334mrtknWJo4p6hRPdmQJ7YNTEf2orepyCDFtZdjRPHVcWFSNLUPQ1NKqUdbyY2okJUNQFM",
  "key37": "2vh4wRmAt2hmGDjUPbDDTvRSftGogoGnDG4AdAMZVAfVUJDQkHLyFwdSprfgPKvKb3uxWPJ1G38Zdvv4iBw8cF73",
  "key38": "2FYpEM1WeYvYyumQWpzQwUG5GnLZFskwuPzaXfA5TdxAyBFQLv6ShAhNyeguvcGiWm7jRy463kw37JxKHf6GfGUU"
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
