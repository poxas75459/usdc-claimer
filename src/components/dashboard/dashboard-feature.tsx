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
    "2hHAaz7MA9Si2vQVGpAz3BqD2rvBcmb29vgfLZq7vUdsWFRjjTYww8VVVDqNXqcKFziwd57pLDvcBZzqrKhubkbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36fC71s4aUskv1zEQn9mZ7UedqcUeP1U5q1PqYyn6TiUT4nWEFoUAd1GD9oeyLieUTwUNpbPTUJtckU6s4hWYVnC",
  "key1": "64gQhqReqhZF5ADc5PVxdLHipHomWXshSNGZ7KvxP3xBiw3GK4VREPsz2T2jKfZeCQSiiKpW4JDDruGrxskPfvmH",
  "key2": "5Jr9Qxf1n1ByCL16MNPLeaoCCnGqiT5bQsDovdr9xm25Nuu7AUvndkVJY5r4hdYeoLHSFVRFqNjYNVT6dEGS66ju",
  "key3": "22VedTpj2Wt457eZHNtcVjQVJ5utTEDhpJqfdabKr1jwbbrSpyhqT8F5gBKtaQtVmkqYGbJUx2i8R2msvksr5ZDE",
  "key4": "532Je1UAQFCJPhP2jZh7Yyoq8cAyMRF71FDptRcK4HBqxnwPGrhTUebHsedP9xianpmbd4xheHfkmGDbo1hZVovE",
  "key5": "2EBoBjA2yDobeTx5BQ7bNNx4MaQs5E94NyJsgUQaGiqtKWnD6SCqdovhZ6TMqLYGsjsSXkDNya3XN1BRL5caHzK4",
  "key6": "qTiRUNnZwu7zQscqGMaecrcL1croeWEcQjWV7CJKz5pXSZ9cqeHJGopwXy1kZyvhhK6dkC8AoLbCPuS3V7urLtn",
  "key7": "cCdnHSgyfZgW7oy2KhfuRAbcEXeeMzkZAizaXoY6FHBZwmfbjFa2drxBupqJHu7ooSyoYQmEtSUFN7pG8TugKMp",
  "key8": "2JKZoW79HEse2Twj63QKoVtLsyqfFVxut3EwZDvQUmGKL5NruAAytmNyn2BWueu3hjPhLZjn9jko6QQGuLPYdd94",
  "key9": "3iBZDuqrDVF7iXNdkADpjLpvpZKgDesSREYs38vSvSvpjQhNS3ZprMRP5sWs2uSCh3BSwHPpUd8ptwnPFSvXny7o",
  "key10": "eYjZ3uetgLxG2yPdgExQHaQAAEJrFYEtvuGtnKQLBKMHi4CcdTCrFo3vfVD7fSCyygdzJceDQU2dm7e3QL7tWbc",
  "key11": "4gz8muBgQtJzbxnajmvwQYpX8FDVRRqeoSHbSjmrNxB67tpF78vm5KpzPYx4Ssn57eRe9v1XBd1ZpBzMg3CXutxL",
  "key12": "3ZHLnLGTQJ2hAiWzEdLmUjqgpsy6tZKAZzEna73qEfaVaU2r6DLAZyhnp3PKf9kYGxNDaYZMeChdxyPT2NrFrFdp",
  "key13": "37ccccAjhj2zrumyXgprVUDcCcJqDMDuWfHpKpbf6DpAv18jjiW2XGX154VLP8eQKy24EygFqVe8Q8qaUVhDriHF",
  "key14": "3nfKW2LPR1iJxbxWhcyABP8P61wFcSYszpT3ESKyzY2ReeF5bwHUydg4hvTVvLSCkyFWPnM1eaj9RRDpgBa2kbQr",
  "key15": "5Wm41i7Bc1oRpAeeDhDv3fsBmEvrjv8LDGh4KmF79Tj1Q3znQhc9KiDdqenHjybrJi46fcjinaxPzMLo8hL2x1cr",
  "key16": "RuZzcv5LFrVoEGan6ZwcPaEQ21CGEzxBHVHzwi6vdr4bhXzMnCPvo5Ysepg6YJfZLvNHyefJUWTXwmtfqJFbJX7",
  "key17": "4nVaPW5edqPRqm2B7M7tTyV8uCe7gXDKziUh4D6WoAF4SJv8yCttbziLwfZLL1JEvyK9NRTv4P6q4c7XhEh94Qdu",
  "key18": "b4aKYXkjqRUnCZExjeKRUjkJxJD8i4o7DK4Ws2yo9TU9sm7KtDXFdUCzpWR4jX1Zejb7f4RJnkv8Uhg1SrD1mxL",
  "key19": "2s7DaibTxeb494CcdEJy6GHVyG9c1dpNxYjyRxt2HXWx9TZxvRrr5smt6ZfhiBSvmZxSzhfTg8LgBDKoYTQXRK1H",
  "key20": "W9RvM64ceaTqug54842G1jSYaiZZsyyPFXQyAd7xLvnVVCWEjctNqqbdVFECz1aPdPLKZE7AaorndYnAzZaHTHj",
  "key21": "5jNZFt1VR1FA868g1YJGjGfFDQjz2dgTTZvMyTDJBhKVNmkATijhvR8EeF79aC1n83Brqhf1GHovEmVRsANeQ9TA",
  "key22": "5wdfTryv25EWJswqCnk1iH87ibBuEcTgaLJwPeXamrEwoGt9dajVss2tqLFghxVSoDtvRjVcJNwYyEuRvBDSu45y",
  "key23": "3USFjsi5wkfGEm51mGV7Rsxj92wq5pqJKWXy4D8tndPabKpbVJK6GihqdhHScdbcg3zXMbeysunnK76HugsWF1B1",
  "key24": "3PTWogavTtptrHrRYyZgYXx8vebGztkc89sYHNvd9zvJ4jQqfiZDYtz5uAKSNgh8GgB7LP8WmYap9J2beZ5w6bQ",
  "key25": "49W3A9ECidTcswuZJgQH4hKi4ZqEtzqrACjkYyT7cAeNjxpN8CSRXh1cTFHd3RojgtgeTBwxqo7UPvXbPdoCdUM4",
  "key26": "geGpSzZ122LXw1eSc1oyGL7aXeeVDWnmJSWFrHi5KrJbrugMqe2q9hTj9dg4coHkwuv3AE3AwgyfpxBMmTirRgm",
  "key27": "4ay1tdpP9kdd2S6o6JMiSjNtbmV3bpdphTpzqR4t6KvUzGsf4g7FiZzCmyZD5PRoxUWHu1gT9ixKYNSTtSEf47UH",
  "key28": "2BYaBFGK5NtDwWhqpwGTAH4RiTcJ5gNrcDLHoJJNRz4GThJ6Neob8pjKG3T2TvE12Pkm8zS4xCpr5hNXaAArJ8w2",
  "key29": "4K7K7Z1aZbadLYqAwnYgt5MWK1kfRp6hvqf2wKhNPYAGpCVuBdTPgM35p5CSG8kpyiEc4959j8ihuh2YovdcRFcL",
  "key30": "6rtaU6pe9WL8ktWNjZkwy7gvNJGu6D9DyNUzZNK9nnRuZP49yQRT7hRBSucB2TgVt1oy8rgL8zA7sW1qyyxK5Zg",
  "key31": "3tnLqQ6w99vBXCqvGsf9HHfecjjQ8svVAoDo1uZW9ovw1WDiLT4M8NWmZKdPoVedAg2gEzi2speNxySJ7ky3TNnv",
  "key32": "WzMoh2x4xGQGf1zwuGXkCHhaML1nCbW77eKCuPoQkeP2puErq1eqefPYpNhib6VtjDn6KKXxNboEsmMCqkY841f",
  "key33": "ywCU2zYKg1qAPT8hjyDpCoJh6DHNRnQ8EjoTmaReaoT1EwZz8p3vfA1reW3zhuREzaVeAVgdnxyae7t7QEN2qPd",
  "key34": "XetAv4vvSkWeGoGgYG3G6x19sFFgeV2xEDi39sRS9h8V98qCtjC2uHueRt2SiA8rZ5evgLJ5Sp4Y4nHSgMCjvb7",
  "key35": "4D1d3cPifp4dSa8qAvsdeQbpfNBuuS8BswvRzR67AcED8Q2B9LrdnyTeybKTL36KCR7wzHxTUiTz3QGw8fhTRSiA",
  "key36": "4GCH1hB4BUj8SnYpwGDj3s7pmsd1RWiTGusQgVdYEHE6xrdHHjeztLPA6qqZK9evnXCWqdA3QdcTwy41rH7GywFU",
  "key37": "4x8StAHDUAdYuuGn67QzoHqyDsGgiTGxH9nBiPDucUVCgjxRDciTpEoYtGn3qfn2MYRVgPYSWcMhe25qwL37vojj",
  "key38": "xmdJ5iC7cT3bRf5sAZ2bzjViLeoGZ7yLhUo7tKRa1WL9H5pmN5oQYRLKfuXmsrwzZWFCUg1bYTRifuME9UAHYRM",
  "key39": "35vWYMgi3ZE4dUw1fB67rDW7dxQAEnLWfYHQVMPZUhzsr1M8j9k1iGrd9xhHWRGBejwMNLd6DBQPLFFpRKfnPNY2",
  "key40": "2M1uYp9fWJcPm82hXGnYX3gn3xxHkbkpkCQmwjf3sQUA7nzUYa3Gmh4E2Horrgd5J9dbZzZwEuQPedBoBXyX28BY",
  "key41": "39DePu3rA3QC94UpDsoeoupdiPeG5cR9T9wTCvxbLcpTgXGkN82NUuvAUJYWLcHT9R12nUuioaa5Lwo558urdGAV",
  "key42": "5Ezpa8k62WE2NJ7UJKktM6pGsVPkaRyvF7nspiTCU5rUSm3m46JWCXvEUSPAYC8VLncYYZCiRQeFave2BzaZVGH2"
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
