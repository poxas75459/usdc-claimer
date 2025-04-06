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
    "3BoqQ4WDMyXaBLQ4oe4iiYcMypDbAqHXEnKyZQk9bgg5fwXrRAEKrz48gNj66W9hZaWfPnRcNAEdqvC23L7YWTZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q1K4Anyx5ojhHu2YMs6Ds8tw7MFYoFikYvhUjGfAw2fqN1RYEKFuVdMCfcmNLivbhFTfDWFXYiGE9ELduHZZWM4",
  "key1": "4zLm2Ld2FCxA1Fjn2CqmJWARU2tyV5MeHybrThDwz6W7Q7KQyC4PUvt4hjU4mJzsM61cA8gNFZkb4iXySRyTv4Za",
  "key2": "3EH1v1rErZCtmnAdyrLGJBcAHDtReYxuvHa1R8PisX9CqZPDBikLAGjtKF3dGFQ9ZhzDNjNmn9CWwwvQzLCPNykv",
  "key3": "gtrnMmaa9dwWGn96jdMx4QdAcbR46VGhDiBgJJHSdPptGwmstEWuVZ6RujTrh5pdZf8h7eVyspJLCSCKsBZHKyx",
  "key4": "3uf68qHgDsqyxbyaqRjTTBjs7v8G932sQTryCFdFepdMMChnkm3Q4xibDKq18bGyZmyxbk82Krot6w48gcedpyRb",
  "key5": "36bT2Q1YthMdSnaGZRxVp7J7QfrcLiWHckvYB5mtjP9dzEcbYCQhLv1NiyMRfswX7EpDRcVyZTA3ucduGvEGSLRt",
  "key6": "2NdjeQh1HdLrrMdu69G9sRwxdpwuyBZ86CyuG5sZVJap2FbKpQhmRdtCTDj2rJ1FzPXvRLRNTZYsqUFwrfEzvpqn",
  "key7": "XJTjKMRj3ZME5NMHQK9tvuPeB7L9FSoYjewK8cy3NbtfyvjgrJxkZzVtLbNTp6n54cxM6Xg8x5YREbMyhL1pbU1",
  "key8": "4bzDmN8bpYcU9ojcVV1x7WF9jN5x7iSZAiMoJKRXjwtkrzFDeDJSgGsU3JyJpCN5pyTW2tG6Z7XG1BDeYTE7dZeb",
  "key9": "5wYBA7CbAFXycoTxr6wHGWsJ2Kguhuq5jpfLX8F6G2Bk3QqYrxpLepWQ3q7yYMrAYECUiNFCCr5d1hYKfLKgAEAj",
  "key10": "5J7AjcpPXe45kRKaBSpQyJ38Xp6iuvoKmqPXcEvmdeTQetB8aji21mXu4DgKd45WDSijvgXRq9pfRbfdEXL936zh",
  "key11": "2sJuWx8jdCx85KcU9weodqwoWe2ZBFzWpJVB2r5TGmeeVPuCefQMAe1kLYnMa6Qbdtz8FVvbaRNMhtUGgpnLuvhu",
  "key12": "5NDdQJQk3E7frttSEt7sceTeqjhgB9EEfSWxkMg84a6k18GqgRDdvkBNLk5Cccjq6rX1CQum8sVjVbrt8eVxJGK5",
  "key13": "5bGTKUFCqDdpLsPhSbN1RzbEZBGvLUY3pevQmUQhd3KipDC7twNYYWh4qGJHNs7fXQgTAbM8sKwZKHhRL1DdctZR",
  "key14": "5MEWLVF2ZwWjJfPgeS26CqszD3osfMUAKkHMR4ddeuydUuxv7nBrs4FMXJy6gouk7CTuWQ1nBqvdJrytyX1zejRX",
  "key15": "2VgSHAq4gAAdjp8wCohkPnnXSo7Ru98Csycix6WL8rR1LYGKy3GWpq2AWEvW5cce9MpyqAWbnLN6ARa5WVXqocPg",
  "key16": "3su4tWAK2kCR1cQba1RkHJW6J2uda4gt6sPCkFENC1sLEDe7urYaJD7r42kP4htwzDzAkGsSkrwgXFut6h6FYKQQ",
  "key17": "26bkSqW2uZ75xfwNyJAeT9mYWeVtoeyXzG5PZ1b3agA3bGgoPWF81aRc3doustt1A7SPKWKrdQuAHMfd9bY3wYVj",
  "key18": "3YdSJx8VFBjcH4ys5bXjYkgwtVdGh5ZVNy9obD359U12rngAEXhoydw9Cr9YiCocm4YcKX6SnSfaPBATbjbWcT1X",
  "key19": "4DKXNbEeCi7cgW6rGR87C87S41HwXHrrifxKPc4wz7dAuE7m4GA66TNeUY2oKHX4FFzkJMPg2EUpWT8QDuYnrBML",
  "key20": "3wzMNPDzjYHZU7j4r7eHCHCZqY9btTmmjC7igUTyf6P4vXewNpH5sTbkUUYrGC6BUq7oPYEAqcb9JozS8wpRZWRD",
  "key21": "2GEd4JDRcvV37Wyj5P9UaFjYV4foWc42rnaykMZrYFRnyjxLiZxmpU6uqRZT3Ho5LPowDMb8GovW64QNymM46agL",
  "key22": "YTBYrv8qCW32Jf4CsXEd2ScnTewPC4BfdiZsxKH1STfgBAk2fRJKrKTnCiv8U4C8cqPNgApUAnbHLrchdJgdjfg",
  "key23": "5JQmWtVcC5zaBjoDxXHRi5UXeCHCtFbgfZnnxMsBbRyMew2zESXQkju9PjaDHSKBms2LeUx9cYrTmZYxEeUr2Np7",
  "key24": "4hiYV1MjJ1UFGNxxZTQ6i9NGETDRroLpgNgshC9qyAmmNKuQvFo9ywzVtkuqzBY5gvP9XpmtTNB27bBhh3b2k3ws",
  "key25": "27QesS4ZDQ6DZgui7m5HdU6i2bcuz21zWokhS739qSEKaVrkZ1JHhCFbt9GdZvPcyivxVyA8uFc7gRtAcmwqxDCh",
  "key26": "3vc8KMHzQayuvoiSbPDmAyrbNbHqzWemCqSc9ywdjEW5QoKvfos5VUfFWcWHnmc9JWpRBhGGyFzBF6bSmd7whL84",
  "key27": "3KXTwKKDE59ujWFUU5qJPvDuotbBQg3Uzpks4gGwp3wLphmYJa6kL1DahvsC1mRSjwKYdqFFVrTCdwZFUV9ddQE1",
  "key28": "4nAddbfwnzv2kBKzUhqWfLFykxmHmC4Rpb2pWLAJdpSDi5yA8uQfctwr7qdVH6WTL5iJyDKQwWj1tikC3a95xLD7",
  "key29": "2CrA18tetMQuR5x57tq4GPRaUu87tEoYZoMVGxnWznHirkGcRwPiMXy25KE6Gfx87qmRYowFpfnAr83GGkaN4kjb",
  "key30": "4UuAL1MEwZkGTzoUTEYphkJTT4L3smxJbjvvVhPpFL72NPEMJnXvzRuqNm769vbbXGSvgRttJGBmQTDpFjDGzByr",
  "key31": "5MY1Jt1RAwpMqPYT1LSDSLjfAeWuDt9fLyiSoscBvYcoPwqh9ctPVZRtPYaeSmag6K37rVDRLn9RQQ3EYQ6938PH",
  "key32": "66qgTCWX3BL8vcfEwibPwfNGbU2chZe4nPvRQM1y2a9M1XMERDRGceoEwj8cQFYKs8V2gZJhvzWRp1w3WGsCcfXL",
  "key33": "5T9DY6HKNynRUSzVQuVqA4X4MDGFBf1wHtUxYvEDHfCCJp4CkzxVBQCM5HhrvEWq5RREyqULZQsu1xATGcfJuhdr",
  "key34": "3GuBhWB1cSK9t5vkAbTf9T7ByNMnUQdMuYRRrVJz6q8DZYomuUcEGiRAKkPNXwZaCE8MuFSefYi1qgKAXssaTzLS",
  "key35": "5JnC4XpHsruv6eBJvUtitie61Fr7LjGgiFRFBEjQXDBBkZA75ZgCyHMv8gsH8nBvWTh13YDyk1rQYtsK5QkLNCkH",
  "key36": "2BChBvddCFDwAgd6GTpJCrYDeZ2GCDP5NgMHjKS14YK46SqLG2sqsvro6takD3g993JCZJEiwukXvv8NqYopFbag",
  "key37": "4ydEJYc6r4mcbVyrUuRsH3gqMxbmBYjqd4SFQX6w9UbTu8GEjDN5dDan6eK61kYgWVePs4cr1b22sJgo13xFFNDF",
  "key38": "3dGexudcm95oUyC2tfWgA2jMUXPfra7xqgpaXTtdi4xTWdLAeQB92oVBKmhqd8u7B1WrVWhT53AAtb8eJoouUTjn",
  "key39": "4ckc36LRsDw9DE4dKJCzbY5zSi76184odTGtit1TKEvjWSGMHVt8K8TZgDKVBi6z6oaft9buSiAHEGFZ4xy3rRvr",
  "key40": "2WDZJ8zxN5GSNeDgG7G6hBXv78aGy5TNen9ej7CZfCh3BAcdSr1LioLjPiPprZbDBupbTu5Gd17KjUdn4FE9fJ3h",
  "key41": "5HSeBbbb4XAWNxCGbgrqz1ohgY6h6Fqt4iiPC11dxQhFBJUxg8BcUFt1oDhrVNiQBPQRarCDoouyUN9esDwrULjv",
  "key42": "26SkrN1GFkv9bvkDr1jdry9rm5fmLZ1TKyVA1it4pFu9HwGHzi3xDVaTUZrcew5SnbNwBvU4tjGFw1b7yEC7H5NM",
  "key43": "3FsP1Wp3SXGRqEaq7Q6B719hHHo1tMJkQkcMc2g5U15APjHtFsu9Sq7t8skdzxjoW4NWk4LLwqcXpQFrQM8PpBYe"
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
