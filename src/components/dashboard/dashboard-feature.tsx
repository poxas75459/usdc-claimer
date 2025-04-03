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
    "2CpCiHkjUe2b7DRX5WzQentArpj7KoC5utkWKQx5y8B2FZHSYvpAJPtDX16uHhj7qCYUMSb8eo84uGjSHiuRoARz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zumz1Y2hrjmo4XHSsmWtHoRoFmu1SyTApT6Ti7TFD9VE43C6NCBhegJBbBQvgtpmsC3dxrNPKhM1t6pve8Wruvq",
  "key1": "4m9d4qxHvSxkHnQ1eZMcurdy14eBenrhq6yjp578uxDiZ6uB4HHbUy7emoBBNaAg7CZrvdYTbD536yEZ79f49ZYJ",
  "key2": "4VYxR3p8eum1hTPggTHyhqK6TNBzKq3RNGbHXKUDau31E3up9huXeognjW4Vn3Z8ZbqktPrKThRYatWcJbTcW5Eh",
  "key3": "5DPG9ERjFrV344C9Q6uGTX4gpySyWQkP4qeum8RFJMBCkCRtNrqed8e44D7NgBqaQ2Jhs2HrbULXrTX4xNDMkuHW",
  "key4": "2F157KRbu92511LMCPDgbjtJywpT7w5SQMPktwVsiwXG7zvjMKJ59DcJ8MjaWNCbNGzamfyTMYeYUcVd6H6YzKND",
  "key5": "5Abo2xoqcPxt7GgKSjiQzHbwsaBQj8tcXTy7MCfnkSV4bAHyc4kNGYfG8UMaBEdxqyS2hge3NC3ms6ThAsuM9LYx",
  "key6": "4SpMfpZBr1anVGjFFuQj2E6GEeBfMzDX88KQPnGq2skmGHascbiuZPoJGGjhqZ8LM1deJf1SGgwP7SVBeVuQh4ds",
  "key7": "5nuiJVXcvtCFeqaMimkJz2f5yD4u8duFekePhwq1ezsKMU1HtMdxefFGx8j5RtR7nEfYWEmtTBMhTG8QeLWCTGCM",
  "key8": "3mPKnxQpTALSRuZF5Z5sUxWMXgTg4dDvZxgU7TyUjHwjgkAQejUamUPGQQKpc7Uu4aZZ8B6v96AWuigAKRWRxKcr",
  "key9": "5PgPr2UzzGr8DgcQpMYTumeKHeF9STFbTkv16C9itNcvcRkwmEdMWXQtqJxHj3KgJg1CdE5b1fp1ZPYCAWc9ueJN",
  "key10": "5wXK93vmReqAiZM84LiZg5qPLHuWjy9hN33C5xmkQKBDTmHwTvsvNw95VhrVZKLPmBtZJqmgFQESgva18ws11wB9",
  "key11": "4u7YHnrRRhoAgGQ4S1JfQMDR1JvvFbTN7LKcmipvtCcjQFPXk9bDmg2LTs6RWW3YchLDBohwCu76Kf1kMV6DcSLw",
  "key12": "4vrVWaW1rtAeCfCCC4gWB1DjZn35wSGw1sqLcCzkcnMx6ego9fMieCdtrEabjU53ot48wVKHL2R981hSEmurvD9t",
  "key13": "4gE3z6K2iKhLpmXWamjBJgwv9S9imqQNpJp9BvCzFLD71ttfw4SgKRaYqbUgft29fEDcWhPGUSm2ofFaARvssUaZ",
  "key14": "4tJXJtUSKYvwfkg7sxsojRsm6147QyEcMjfWRYL4BcpPND2KJQa2Sa2Tz19seUm9BvMBhzLnErLsrb9UhiqGtPpp",
  "key15": "588xFibK8fi8Up6dQhETa1NLtT1MymzoFfGFxLCQCdoJoj4e5Cw3r3Jj21bDEfNzBMCL3mwRSAe2yRvr9rNBpq9h",
  "key16": "41H8JSAshaqRq5uvHHM2C4Y5xHXj8QphGYpkpLBVg9yqAW6YrmHUuF9rsbHo9dkYCbeLfi1UdRqYt12LGmG6g7Uc",
  "key17": "4TDb1qmBtfD7LB81J8mrCn5aQWhg5ahLQk9adaLXnU4SQLiUyhBpRsZxTWKDYNW2Vc7vCNUf96a92KK5RJfEhTAf",
  "key18": "2ELo728BAXbZPGdie4zTCirNHxoUHwgaU7uWXMP1uDh6aP8XLwEjoNnsCQgA7LvkPtBFN3RWjw2Ecri2HmfqKG3R",
  "key19": "5GrMUXdZuLmp98ZpPd2FYPq5RbEERWVsdohwoccoz9GjDP6wL4wbWiVvRFghasofDuptZD7sLByZ4Ct7VJmLMtWb",
  "key20": "2C7k5ErF92sUKcSbwnbNamBzwTsYSGGCqEfAgfLVZT4rEzQi5NBT1t3LGNUpe9nPX7XiHgfc5EEduzx9YARXcWgf",
  "key21": "PsEwDMmcHtB4GA5FPdesHqvFWm3JFRQgj7bu6qVY5h12WBAEDPwzhuqasLZD2d7XMfBn6LpTbz2itxuRu36hZTA",
  "key22": "3pBEe1vsjrsDHXH1wFzw4Lvy1hV7kb3jcLepfFMLmUhPMq7gHGwoNtcWyXe5XA8wnQ2GzLEccXJjA9eaGariQ4UE",
  "key23": "3ERGaaC69tPgtCU5uyKEpbdCuGfxWSkPTx3QoL57cno5S9HgjffJMog8NEcGHXUtZaJUFzL6NtwQseesuN2WqHPW",
  "key24": "3sGekGuAURTpMZALgALYG5wEoxt5p12KLbFpJf2Dyfe2ebxRc96imWHP2dqaGmKyRSS99bbRsd3fZGn8iei67Enk",
  "key25": "3w7aDQrGwSgtfKEAmUQ1eLehmo6jjXaYc9WvT5oSyav9wzXF6AGHE9T334Gg444qv4UbvbPEfGYK39DpWHeaYHin",
  "key26": "5tkcHYJ2UjY1izuvwRX3FErEgiwb9zCUxFSaJApKb4g4NAL4DSdQgEwY3WF6CAjvpUFRkLXppYowz7zUYokoWdQK",
  "key27": "2uLcwSQbUJnYXC6g2aVaX8kLjDPcp6LUNoVsqAFF3P7kxTvrLxXuiEQuKQXem3vf3JCTHNJwWsks5tLpRBAWCDg4"
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
