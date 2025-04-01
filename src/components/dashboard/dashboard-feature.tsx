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
    "4tZzpS1UCAaRFsGCd3seM39NweevJPCy1MyfTnKpBeNvNdezM5ZBqddYiVLrK91xp2XEQREhFTHeQxCsEjkC1Arw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hx8zYAibad8pi37Bo7N4AF3GGzrQj3s1jLuNFLUr27eauUFn56trKZtpUsWEbZVd7onyJUdbeZcddD2BKYKwU7G",
  "key1": "2sKc86bfw1mY4uZYNKQ4f6UnRsPW3zYjFgcy3iWKirPURNHJUTCeWrYs6d5fzk3nqeF5bLD3emjzTopeb56VKQbp",
  "key2": "4kc9AvrRbqXJq5thh89QK343DCUAXXq76SsJLP6UZUNCpMZUotp3C1guZY5nFJESpWJ6Q87PRESHT3r2mfqzRqkE",
  "key3": "5zZ5ugoHgemtNJt7TBBSx86Bv2XJqhiDvw7ofro8rjQR3MQ9N2GaC2ZpXHVpgncxxuLdCWm8F6Zbbp3Teu1hRRDQ",
  "key4": "5FQ6xub2ijjfHRuuTW1UByGR8CHP8x51X8cMjYwTuJmwAqZkJ1CJ2wwjsPqjDVzKPUubExkrmW1av9MRXQqZaneC",
  "key5": "4KNDDpzkmtQX8Nqhc2fb187aYiLQ4AdgNpYxmgcHRHYyzvNwftC7m6btHG7DbirAUSmHd9ixru214g2LKbZ6uQEa",
  "key6": "eEkFQHHxjy1YdF8nFPMPaD1NUB1hE4S3hTU31NhA9Brsh9Dy8pyQB5fErE4dkH2Yjqr5vbG5WkJhfKJSSfxu5Kz",
  "key7": "ko9R6fYxNXPDyWcSyC4PjrPAtEz5Q5eCxKw49Z8itME6SkAEt3imYetn6KyedgCiPzGEFBPNKRnhRgi5ruZBcTo",
  "key8": "479sh3S4wtnW5aHjn6jhfxzaLa8Qf4iPCprDBb94SzzYtoKGSaeagzzfkWwcJ3q4xdpToBHY9CM8TCHFAwTfnXow",
  "key9": "8Dpw98o2aERQyFuzUaLybHsfhPocFW5G4H9W3rrdsH8z4YH33w48LyU5m75J4m3VjJcXfmuu2A8UrgQp32wRStJ",
  "key10": "5sP4WJ7iAKvc65QRWGiH2sHdYomRoMVXrw1VEJXMq56kC48Fj2zdk6J75H2yJq6FJMXfTK9bTxiVyHEFFvtVsbSy",
  "key11": "4aRN7vQbMnXTmUykVBJ7CzXFCUDb6D2ijUPw6FtwrSC43AeeC9MsQnKiq3aCvfVwBZwcHvrP2PCeYP5HcJ52HZFq",
  "key12": "3fjC11FbQoQ1bYzeVjiqiJogRH6phRZQPbbQWC4jzWgsLNWkzWxyAyy5cQ4rKnAGLLqpDTx9ytrGHpKsHgaszsa1",
  "key13": "52JWoPbgpcpkSe1uxRexByKc2nA5J7KrH1JZy86xerTYzRyJUfTfK8SmGg8H7yVfUghtBUwARbqPAixkqqjvWzHJ",
  "key14": "iAoGAfRD9f7J6XAQ3Bmib8Tr12Dz3yvk7qVSnrnugEBfgKgsEBLKKT9N5A3j4983GUzG7vQ4rAgSQZrZgNupg8T",
  "key15": "5zWt31TmQWenNSoumBReeqpFuMbmaA7ZBVNHPLnecHxhxALJxHPhBXQJ1JdhEG5kgsohyHGFtAR9ndTJGzwfeYso",
  "key16": "c1NTKftVy8o7T8jRvFSVDAdjFDp1L2UxkUyC7bkCzfsygDyrjwcrKqu2FWFQfzxhMjHnVoCeMC4rwb2bUpHuZUa",
  "key17": "8YH5en3d5RcEKhDCupUv1DbwSpEma87tT5Fq93aZTD28VvMnwXobga8inZa4wvNNGxz9pT4wsBvoh5LWB9e3UfR",
  "key18": "zriEyYZQcR26VfoVjXo4QoyHZuxGAyZfK1WkFLcsC46bYd8R52yRoUYN3Uzqyd4MtHf8zdzm7GWjQx9kFNPJnSP",
  "key19": "46sTgh3bNvCPFDfqtgJ8McjLm1NYaZuY3MEaNso8zQmEscHY1PndaqrymJqmvGJ6suPEZRrA12WtDCyPVTrgs8Be",
  "key20": "3iugtCBzrcuat3L6AvmzigT8ApxAWLf6mCGy4GGpGtmcthHeJm8txm8teieSXT2ppVPnKEzBYyiLKSy6D8PyGFiF",
  "key21": "DsoACoz7vTk2McUxBRBjWroUFq5RoVvSzdx8tgJ8czmKvEj2drE8hyrAtLR2h14P6EdyLoA9Ucp4w9KsVKsnAm4",
  "key22": "3codivtdoxBTp1vNNNyprwbWravBgr7dp7oQDrFtXUybkDayEMyC3GQ7ZQ2yvc8iZCEkUvKraBjye2AqEXBHJCLe",
  "key23": "4TF7iy6sEFWDCxavbMktB59SwbmDfVrQo8FWAhLVG5kes6qrFeQQXpwRE6Cq8tPZPA3C4RSURMTMAwVhbWPvVcgC",
  "key24": "2FeuZAc7vVchJX4PT99X14oN2tqXL4ZtFCNUyjHWbUJNxdPqgyPUtRJbBR8T369iKhuupUQXJzYokqZcavQUmhLt",
  "key25": "4R8BscryiMJ5pLATs8h4La2zAHx5wVUmH2xETs1QWLfxcxMZ6WLxEtpceZenJn184j81nKGFGSVhoLrzAgzFpbkf",
  "key26": "2d1gGgkNM2cCz1pBgnnCmMZUcWk3c5vYqT9jRpBhZ6fHLV2zPgFyuDJFGDfrkUoNgHFcZJiPTJxmCe5QZEJjbRhu",
  "key27": "4crkuYYhfwNJyKuoTUp7u5SuRkv7htNJLaE9NNZuRCEXAH6hx79Xo7o8SZYuxFtJfkEyTjcG7LKqicKJfz4a6n6x",
  "key28": "2C4pdzFQzeooFyDijFDCYs72M7KZbpXFt51noLhb87fyjdfkQtrsLfe5vyrEDtUh7QVy6TSbCFSz3uBncM94Vasq",
  "key29": "3SG6kLUZGjiDwxrmVDDhMQFLd1htB3HF5LNYM6D2BsDfmH5uPpq7NQFtY5Dc3dxBMfKuvt5WcbU5dD3oRFAbfvTe",
  "key30": "2Bfd7v6KSsyJGhqf5UYwLJnveph98mPZdsSbvgFFGR5yzpCAnDf4ruNCJSNPEbnFvUedjaR1vzDDzak2N6AGJ1CP",
  "key31": "5N3YdxfNSBxLcFzhxn23h6RxR3twkUj4XrgjbkUZWVFvC7yXM7VG73MYNNPrkUnfRX1eEWApJFTwgmMeZNWdrWBx",
  "key32": "67ov4NTk98sxDc5Ref2jwfbf4KUViK9aTDkXdA87ZEK3Jf7SzQudQcPLpPupsz9RDmmMzJ3UJ9m9QQb35exUHxZC",
  "key33": "2fHDnP5DhXBh1jSmASxYv13WMoNvFKhx9yXKhAAJWPnHKEMT74j77hBHiPvCF4b4oZFEMs3uJEydwToTrFXC2iRd",
  "key34": "3jyt1JDZ6Jm5h49hq6pxr4guwTphDbBGEu2Q295usUhQkbjS83abuykuHaGySC8guj8Bk95Sm6L1QGX629XohQmF",
  "key35": "6iPVt1b17d2U4ixUm4gDfLe5CBWtz7FzDHU9kMas4XkKSVZ5kCrFDGjYc9F5SUVXe6Zo5WxfVFnyhKdorHJQjhx",
  "key36": "4cLvnagen6Hv77M7WSmACihxrzXE2563FyJZLyPFNRRtsBj4CopAzpUH4DoDvN2sygwTBGzL1AjQ5uPE52TbVbZY",
  "key37": "5uzNKt3fnXdxi2XKdgLDhrxoDBU4x57XiPFwfWz5f8NqaBw9miMw5wLxmprfpbMpQm6baC6fnTvGERTEuFAVjTSN",
  "key38": "2grdjZPVhReThfp6Zob7twXAXoiLXDYx895KS1FGxLiLhBZVGDrvbqzJ421DVx7BajF8tdRoJnyDGvYmQsG1bym9",
  "key39": "5Lo8WjbCTJ67RaA6apd7B9ZUmrfVC4pvJ6tuJWU6aDrnux8a42fJiFPFW58w3gThcPwNXzqAEocHbZBZNEhVdqVy",
  "key40": "2KNMXBCccLxLpW9SAP4jzC6qG4hEqo2RtyfqbD6jPspYJCc7MkFg8JBDuvmoyaav5KxyKk1YY4KGhu4ZUjcZP1kE",
  "key41": "2QWrZCm9FnwfzEsmDcPAZxiiA2c6EAWZz2S4U1L59FtqprHFPQkmvEwrhj1tFGh6h2fkP3tfvovq7zTGbARzpDqB",
  "key42": "39muecAjuFpmYUgJDFL8hr697hECKRMpYbx5zrbDfkm2HaiCG9CVJsVs2VHFa6oAjgJhLK7UxMfwnaStoqHeh9od",
  "key43": "39PSs9ZRptmkdHHAN9YX5U4MHUp5LfChQa7bXo9B8UaUAVLKkqJdkaarXKvqWZfLcN4P1QSuWjCayEorr7vJXKEu",
  "key44": "2kqVRFFBfqRww2BmLvAfGBPy1RXbgHfD1shthrKdMsN79FYmU8yypUc7WxvaxsSNz7suss7eCzsjMor4eMsWTYda",
  "key45": "5WRqqmw7hbybmzoXRjChRvPooLd7GT1yU3cupj14jfwExkTuVYVFdc8ddmUdewsJKTBEdkKc9Hev6j8wb7HneR17",
  "key46": "5qViwokBquSip28k9fk4x68bxw425LmNzLzCuDHjcbbZtMyWwCjbSEcc6Hroq55EPxd4uZSowJDjogf34nGgacea",
  "key47": "GjTxpUbXCGYFH1qNdfJGhpMcH5CGgMY73GsQeKRpFhigmJcLnZoEMhfJ6sV32BrG4QBG7Uqd8eoSEVDhjJeaHoB"
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
