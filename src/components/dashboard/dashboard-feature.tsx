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
    "3v1t5FRWv4akUNeytW2C2jqcM8jcqVnrMeWtzLmcUNKPzTBNn4cnLuHmLYVLKcdqBAddLja84gA5PyZP4Lexa1QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sKmfTtBpxgCKoUbPULczhgUuiUko5R9PSpRQfSX5PptRUo73SKuFR3iKmXVpXBdwTVwWVe9BiKNwV9hbARMR3iA",
  "key1": "bjGJVANxsgkgxQDaHYfxDz6hoBNsRMKYh8ivLPKD27uFTURWPphssSdCzbvdwchduqpuYyDPrgjYRdMBPPvXMY5",
  "key2": "4HpJxD2hxLBveb2QY36VCMNnDfcmDe5BLwMWRw4g4VNFNKgJYbjsXHSmYzGWa8ShAYTvfJaxU6p8JqGUptvspfVT",
  "key3": "4fwUv7J7F7vt6ANFc5V9Z9kRcwLBWHDzom44x5WShyx9Gfb5aj24qTWN8RHbHzjyuqcqj1pTdkYCfgVBYCudEbzN",
  "key4": "5Cj5qJj6RT1p9Fc9nRnQ9hyXk3WJF5wwSzz1ba5UYwjYEvhE6xewKdXsd38j9YpFku8ve5XLQ36ZAaMuEhEZ5Jfd",
  "key5": "4HtTjcbTwCEeyRHJcG3S8sMk9chm5bG9zicfemcKMdcftpHxqJNgXReXqJbwm9pRgTiYEScQds1cMmTAKUHAaP9Q",
  "key6": "3SQNkno2EDBF7dqBgfL4mSM3aCyWpZq2UqaTsz72fEZnM5fhGBdS3gdJ9AM7rosAu29bwb5iwDAmbRe24cwEW4PB",
  "key7": "3HPw1mS8RYshmLt38ys2PwXU6pBkV75eXKRvbhJgR6WGie3acBVaRnP28C8bXiPGGwrMmXZLtAtGzVe7geTeCe99",
  "key8": "4FPe5tDWTFUkYsrLGp8tHhrsN4AGvnLZZ8ZUAEqE6ggSfSRF1HFcadmZj8LmJ1gnRhfcrjV6uT2ZxXUNWbkU9g6J",
  "key9": "3YV2bnmr3PanQSoakEdNGZrbRW7UvvUGGLVJBHwVXyYLJDGLYQDZZqD167WGn8fYnFiKNLEaN6wghdajMAi6jJtG",
  "key10": "4xH5uZq7yviyWV2PQioJp6xSHcWExKLKcoTfxWdnatkNefLaYTkxqoUFwZ4AdpFcbCmCJhWhHRBZ4G6o5D6wawob",
  "key11": "Kc6S9JcE6ufV8KWEmqtQ1jhz8tppPWsVz1ap4c2V9KryBkXez7ohh6NEok8fAfTQqKDzYBKJGpbNY7a8RTy2Pwq",
  "key12": "XPbqo16qvQja3bcy9KiWdV3sp2QFrAJoXZzJka4iZhgzWvKPuCyZqSYpCFfoLGwKfbikrTrCStDBXXgtct4YGpG",
  "key13": "3DUirYJwXLWVBjkNWUxuRkc1QaC5asQvShpx7o2ANaisE2pgLFe9WLfP2yYBHj18BWFn3jDn9KoEbZJs8sMhruVH",
  "key14": "4thXFhVZdusjnZ9UQrL1JqeepqUhWojKMwHU5NKyTzqVC5d8Pe8Wm8V1B4tvFycsgzXUbb9svYEDXMeJGccuR2G8",
  "key15": "5ovANQSmPjmfnMSHf7TYJsB7ruodLodMFDRnRGJ2Lp86RtGFJjvmX7uZXsmB9Hssr3iSgwp2f6fxgacvN7ZqtWPo",
  "key16": "48crqh3pKsFgiEKwVgyCFGNnowpBBEuhuY7Jk4qywCAis589oXrAvng3Tw7F9AnFmxh5SPkPAnvFb1Vwjy5WpjN8",
  "key17": "45QDgpbG4CM56LijH1A1TfZpYqtq3i7pNVrNXCrLG7zYmgRp2p2FBpHCo4JShpE1eMirApVqBoqtewStZ7eDWcya",
  "key18": "5PumWKhUzaTqjMAYFhsMxAHtghZqb2tbrU2HL4ddqqHqqPPWGrC1mxvyaKBMDGALUaPodtP3mtnsicTfD4Q4LUkM",
  "key19": "5QSn7EA5URro7zrbZ5A5hHgtQUqJnSYyE99QP7LJdVq6akqxpXyVaqq3ErTH8TfhrDtvk11ZneDhPmv75yoyLn4d",
  "key20": "64xwVtHajAqWWYPRoPhVW8ByfeLrh7pSpcYQLxu9kdmNomsCQgfqTx1MgyK7RbtFzXsnM5yJycZR4JfGUpcuRp13",
  "key21": "56xVWvF9iQ2vs53Y6sTC6fS32r4mEdv93p3uNLvtYag3AKZhQgzhTWM4wd87424zTftgBAF6V3LdCQFbHvgiFDva",
  "key22": "4DiFugbiEdndwb2G4cyzdGfLbH8bhEGx8ntoG5MquyhooGAJAvGsLyKtHoccea2e8mv3s6Qu6FQEeEWyuysDAPtG",
  "key23": "3sZmjgn5TxKAznMaQdqQSkVV3eF3NAbrzunahoUVXA2i8vRZmpQmUWUXXg5eSQrcu4ZWNYviTJ8BSeLiZryifTsF",
  "key24": "49icVdg6688M1jDbUfFthPPpBuPmYJ6rw6H1RRdKx44jLtrrhch7LpXHm5yoy6VVjMMcFyVzGbvewKi3pHKjF9tw",
  "key25": "qnnU8wjHDqU52MUk9222otPRKU3oJ2nmYD5Ybh5k8Kpxk1L57coSB7putua9WLnKB9USziWhhyT4x8KaJf51sRE",
  "key26": "4aBAGfVtA5Rf9nbngcT9GvsmxMmAPaXNMVgicA2sqKmNeGemP39uGW5LagRd6GQjAtwLsFUYW27w9ZV3EnFDApcC",
  "key27": "51fGRWAXLn1c2QoAHC1WiMb4MxZFy3NRqiVLKZodCWyeMwjNNXjMQNVA14exKzfpUisrPVkes8vUeBfKVJWthbGv",
  "key28": "3TN8E5kSYNWMqiBuJzYubDcFQtvf8jucS2KQyXw4kCrEYFQVeDP7HsVzwLnsARKCk2UA4HjcS7jsKLqGpH1HBCnY",
  "key29": "21CVnYWmBrkmWyAnVrzPKHjybWeUP5JnDAexXN1cf9qB77m4X2p1qTYrgGiEpUtrhBsBAyTD9RxQHgWc4nXAXh9X",
  "key30": "4gW6Zs4GnKGDpZfaNYJyMWbDW59gri5nyzowcbo1K4t6pZTCqfdfm74hfGXj6szqm65g1GT2mreuDDJgkBiqYpng",
  "key31": "5b99u825ym62gPArJfiDLy1rSGEN6pXuUmU7XeX1vtvxDE6vx2jCe833jnb2JfNgG6mXshSevryWK57XWJEbtQG5",
  "key32": "2RKqbSPwtqZsX7tC2iJfT8WK9mKNvXd8DnptVtYvErZumBb5cFJP4KVaBMpUNqfMugYpGfGCAuQnFtGdf7s4FKP1",
  "key33": "5eEnfhig2NaNtLzNYZzopggqtVow4hNuCAwBTQuNYBcWV544fu59hXWCmgn86jiJCTzrVdEaiUYPj297hGU29MsH",
  "key34": "5xnULSYsYCxz1TgFMfRFvK9AK9WBPog97gSP6XmQS2F5q3YijJz5kJtwv7Y53UgZ97r7WXjjC14jRB45gJJe9Qh7",
  "key35": "tzviozLjkvQGkHCf79T9A2uLtk6vPxrtR8d6Tp7wAuMB9cQbhQnXJYPpcsxxDkQKK8onUBWEukqLDCiNHpmW1GK",
  "key36": "65vARhXTvSo79ZW6vMKR48mrJGXQ5jwRDd1LGq4n2v8EhPs3JzF2fTF1AuAKeoFvhL7GHBQGJA3FYGn9j4xYbyv7",
  "key37": "37L3ovzwFEvUnCizPb16QDDk6Xs7dChzbFSkBET7CGEGDcEUP6nC4GpXRUpremBVwm2853N7js953rmZBQuQie16",
  "key38": "65GDhM2wfrBJdQSuVbPwaSDLuvJnVgvNLxUhZeA8kCoUwB9ZX42xUutxbdBmd4pEDViK5uQCnSsxJ96j9KNhxxa2",
  "key39": "2ckEfEerRuYefi5sRXmMWwQNdGn8eWXRHXUKv3KKgnBHgEG7RaKhVjLjkoqGEjHXpikBEzwybZBAyhgWzQFT1NGj",
  "key40": "5XC6HUobru8xMe5vmVwspvThJFETssHfgDdmjfs7qddzMhVpiWUkk9ZCyVx5riakXgrHNxfH2pmJr2hoMdVq525j",
  "key41": "2P8aLibnw9rKF1Xc6GThbb3dczYVmBHKRz3mE8u8VTToiw3NwXTsvow3uHa4WuNfFBYnDknjhsPw1iXtptq1QPtQ",
  "key42": "4kLdttgNbaqGToxerMgFqnBfpWSVeRbpQ9aTzBnGd6hn7myyhq5rwC2NHuUqeGAuEkjrtqPUnCMY7FV9Y7K4iAjw",
  "key43": "5vRyCYBFd5GqamTkxz7oy55yW8ANtYD5X1g72dakmHKUW4QGmdDLwrzzVFj1Yfas5Zn4UaooDRS9sbVmz5tRUxJo",
  "key44": "4yJAP6P53UpbRTKG2gcHx2YLJrpEESSgZGea3J6NGDvRij9bvwF5TUAiTcdwvyghC77EyZLQc2neAuZPvgvVdDvA"
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
