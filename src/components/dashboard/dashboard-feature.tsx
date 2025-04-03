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
    "idjn7jCCu7X4TwWQ2uuESSFVPThpGS9TgSwEkT9tRzEGeWn7jL77id3nVpne3xGy5Qmdau6mp2AkwakC7RaLjEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fQBVh6y9VXfQdf7BaVHvEvLNyFXWiaq9YWeYj6uGviCb3sNpH2zALBi5xesQzSkRF2S1DBrE2ZEARz26whsjF79",
  "key1": "36bXH4w65pKqf95WsRTcSHmMjav8nrgQzkQmgY81FkF1WcQzbP32xgcht463uyBnE7c8QdpmEfcxAYmpAoWQcgkP",
  "key2": "4W5M22U6kw97rozYx9Lw6iB2P8iC81o2vNgaTR5L6o7oNxb8j6nj4Ce6WfLmYvKNxNUKKBpppJNMjTcW8ihScgK6",
  "key3": "Wtr6y8wcrhBXnmsF6XTcQBWpBhEyhStuuxTqhfQjxH3iKZBkbPZzZQuHtsThFve5pkNYTNbQYbYAzhTEwapz4my",
  "key4": "3sTDoKLHUJcHtBBafZpxTstXJ8xp21Zrfwcah3CWdnhECs2P326D59w9mpB2iTdfDjQfZE2wNDD6sEpR8QLGTaB4",
  "key5": "4hqhwMnLBNPBLhzpyBwZ5cpyjBVAc7NHEnPJJWEbt5qaaSNoQ9HawUbgxqDunhwTgiBSPryBK92NExopUAKoLxKB",
  "key6": "3r6Hji1rVbfn1e6FwYPLMAv4t8r1xzxqm7R2WRUnnBBDN67ecYu9pUpP6YNK1hJVEwGp4rvhWGFAdcdoC15wVMfP",
  "key7": "3p25yrPKs6WkLs8vZkfK47whFXTUZqD6UJDG5eozno5vhRpjEWLLLBwyK8soZ1kqUBbbKpZcSvy2YhPE59tBN9LV",
  "key8": "5yzNgz1jaa4PuoVReRY36Ej6VVBeQ8D2GyCe35ho5aovnAge2KUkhzhsZNw2LVcCMKsN5RhkZy9jPP86aXthBEwF",
  "key9": "4UEDdgWQTintiqTyMtnwnjbniDBFvTGjoNmUzBnRzVJNjRPh1Un6PDABo3FRjBGywNpUQoGNzDMT2H9LimSJCuhg",
  "key10": "3K6QN2dzq5up5aY4SGVSzmbJFetUr4TiwCZHzjp6rRXk8D26AZM7L6bW3Fg6t8mohw4BVVi3G4xiWuLaEQd5fPbi",
  "key11": "4mNd2h6qD6dcScc91dLA93yMQaYC9UJFy5gQUsKr92TxuZJcb3ereMvtq6hjDGaW6WteJeEuz3cEV77QY2XeiiE8",
  "key12": "LjB9boxzzuJzisadFxY1FuFEoiPP5CAwx9bC5wzSy7z5LRA5L7LHuChvV6cmCdqyDsybj2ppXxcEm179KT3tWxf",
  "key13": "2v6mmJRr3VJQrfRuDBL4DAKH3QEMEtZKL1dZ4wdurn2LheRrc3idrFZbyL9QYypKNLPZ37j1uSKdCeY7Tqe28An3",
  "key14": "5aMMYzKCUkvLp2vV2qHqY8voq3PyEGUngyBpXimvgoNndMryz44Nw6sz4r9QEQ2a3MzjRCwKmFfrbnCykhPDhwFR",
  "key15": "4Y8P7KxG3YJXqMTDpwWvecr9eYWrGBHMrdvK1owpddB9y7PUovmrf1uh9XqdztwUFcgn2UHFg61cmihGxPMMoUu5",
  "key16": "4hZav3iiXQjbEQegBJKHD81DxLQtTG2Rjkk1zursfbJJEaZv9iWKp5piPLJ8fyw4Nithg877hSAHiSBRVN6R76AJ",
  "key17": "4oYCDZrmtZCdK4bu2DroMnmrgWwxu2gmtFHE2viqgWYMMTSZHaR9NfbX6KsxBM6CxGPe2bTidiEbeskZUgMqQRjh",
  "key18": "31Msjbfk8PemuGaTD6RYJnRUxhbhwGuDjHP1VtEpe7CB5B8khPp2a2raHPaHick9BoXpynmhpiZYTdjBY8S9HQaW",
  "key19": "WCdvfcQXnqv1fdEVzdFBzQCuBSuZQVxS2wMvWnsX7kkNK7mNWVcg7eZ4wjBvVAu2FV9FQzYSbooe8aMBbh2eU5S",
  "key20": "4SLDgDD1EBnNt6o5n5JafX2Q2DQ6piifr2UBFvEZvxSyfbejBweTcNz3pzJToCvqhmJ3mx9vAcMmFPzfdyn8i1UT",
  "key21": "5pe3x2W9okg5ZWC5GivNJU3oKQTBw14Hvmu9TBiFajjRvefSKd4t5ZAtWMBeTw4bg3PcDGhwCkMsTAR8RcPax6wm",
  "key22": "aAuRt43FY8zMixgyhwWNfDL2SA4DgCq3N5nQJddaequrDsrwPPkFTafCMC7kEWUJ27wKnqLHZ1BjTPnipBGJ1Zg",
  "key23": "R1ELfACZPpdYTYBSDma1HRJFZPoDmq7DkSbjrnXnuiNauhsRr3gxXXoYAorq6RgXjjobrfupcQMPn3kpEvdZheX",
  "key24": "fbAHdVvCwnLsmtYJPR7foiKXmzXWetLR5WPPbHBfhGM6ZXFKXiNLowqRdpkswVWM4fZJZENDiWk35GjkRDfXpfS",
  "key25": "4uda7i9fyAuWrwBqj5hAj6BQUonFTXefD7Yd8zhB1aauTPnd98MrM7hJVdugRJRCsiXDoSc4eFSLchKEr7mxRGfD",
  "key26": "2pUSP8QGSuXBGRGVSvrsSTadEJLV9nfCt1DWF9kMTNFNB6NfRbmiiN144MERpDvsT3vaRJf5EWHmPfjRMB2p5mnp",
  "key27": "5tr6GwnHjbjBwdnp3EGzoBGmkvsLUQo4GhyD47ry5aj3T9Vf9ABFy3Ay8hSsonZNhTxtvziSHZ4ZDiVc58pyZ28e",
  "key28": "2vSpih1dG29EhfXHJPx4RdnjBbPy62WKFUHycJq3DRw7rPh6RmNYYar33wZbveGrrBWfVt3xxNSu7SSqkx8qb53r",
  "key29": "5zaxS8zTnFG4wzdx24T4tybn29qhm1cDxFKJrsS6GrHfG3vq7setZhMvSJXgfuEZWCZf2UY5wSb3nUm5Z9vFC2Fp",
  "key30": "4vbu1cXsy1EscHnZihA3CwW4L2rkTG4g8WLYbBEhPx13rdVJTM7sfds7h3uPcmF3ZHVANwabSx1DMtJ2enSEPdRU"
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
