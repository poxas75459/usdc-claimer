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
    "33qWG9XGY92mcYU7xsDhCaLRvQxdqFxwxbjQZX2F6xYYEDYzZN5FB9EUTF1W3Wziars31v1a4UAp29Zbwn5gxBXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "399Z4qa3MmVmufW9jDHcyKjKCBPTZZfmFfF2rLkg8dK2TXVbogr9hqiA8s3v9cPZAr8HV9jAxwybJcFn3FRAMb6j",
  "key1": "2XuT5jgiVz7c3pQRVBqSafJvmRUSZiqnw3xuNNYtJSa7fdVsPzxoXBFtSxV8KFVaeGzeEGbyNY4cqqkvKvc9WdAq",
  "key2": "2Ftdvkz2NpUprYM4TrnZDmd2jPfRfwq1GefUmdmBfRFDHfrwFbxC39CpiPL5dKdCbeD4gMzqvwvzc7sMT2ZT8cYw",
  "key3": "4SrhkbC1hUPh1LzDtMH7MovT7dnK1z5LJjfFHizrJnS2h6gSc5keiuVnRj3fxAWaYbJsrwoT9MLVmAiatMwRm6km",
  "key4": "3DzR7sLgkJyoSebcDD4emgeHoSXJmku9HVQV8fDeDHEaZzLqrQNi4Y7XcwnJtBDmxMe6oXo5xc5VTKuFuHb2cxDJ",
  "key5": "286e7gmhq7QgNX9wKoXYjtgF7ika9K4R8FUqxnHvW8zwMadVw3e9xvC9ud4x8KBRB5BTWKn7YD9Hk1TFw7H8SMNd",
  "key6": "54NCmzorBbjSDSDACqsXaNibvXhABisVWHs9wUsbZRYGYx5SpPLWxZjcxr2jBiQbTW4d8EXqiLAc2QbNYDaJXqdS",
  "key7": "3ucrTYtmvU39NH18Z3mRyAH7isfih2C2JV97gmyptQiqj6L243uYcP2p2p3kdyVynPKPdxmefVfPu3Y9FdZoXBMP",
  "key8": "2sUkzqWzm1QX3J5sLgWLeBUWzGZYkx6rEvA9MTQUWbJoRQELR81pFPnTAMt8u2N6ZHWQRP2DTJVkZMKPBHNC5jKE",
  "key9": "3EVMYb3M3NrXuY4djng7ZHgLSppu9D6X3G8gTJBJcNME8HW6QTxaM4amQ8hLjKkQ8uEk7xhAAhMfunvBTA3LQrXD",
  "key10": "2TaJibX3BGq8Vo66LfTMSHj8Yv2i3UrFYtTC8FsK3agX8hoyjFezmgjfe2Cm6W6n9HXehh4U6aAyk4vwJWQ6KHrj",
  "key11": "WkYE1NFGuuLDvMdrY4qSnJ53gGJpswuUXD6w8wc1xJ76KY9pPgoeaBPHADBDq68MaRiQWxtqn8dWLTNAr6vPFGw",
  "key12": "U13vq3US1Qa54CANW6FkoCwZNd9tvn7ADZj9XdLNW5ctpPfmAdFFf2a2qrE11KBbWYRDtir5vDUW1S27zQF1MTW",
  "key13": "5n9oVU1Ezu16Lpxs75Mmr5ZQD3Vb2VPFJaaAALEXQx3wF5QW8Q2LUsSK9bqStDdA4Hrub8SyMcaJysFV3Lm72n7T",
  "key14": "4PqoDmNPLyFGbLLUy7ER4hpk2ySwEfU5xigV29qiKjLjYLrFHzfKyKDMJuT2apdo99XS4Jhxa7mzNKy9ME6C5aCG",
  "key15": "ietKnpdz8mrGEnSzN1Z87GmMQxqui6yciv9hR6sx3k8zMQJsUeK9N6FgxKH3G7sgGiQ1fAXX2Xy53oPdhcAkMCt",
  "key16": "3QPjC8NWF7Ex5AubWtaRziyMiNZHTcB5kiWpWBr6VY32qLb4x288qb3nqH9NGD5somjs4uXRTPAPKbMxzeTYZ5nt",
  "key17": "3eCQhsDhokEmuwxnajfTB9ujxv8h4RmyCpSZk9ctGMc4C28Q4iLdWW1diim596SwHYfeJQVzP5ggd3PJcKCJgeyw",
  "key18": "4zDPCyywVufUC3SAmuy5U8BoRoPZYk6sy7Zi9rS7f3Jd1934droWxFaWgufiMAtyvZLfhCGvmCotSMss638Eyz23",
  "key19": "2zUeHReMzsDVWScZC5YcRwoSiD7iZieCnZJn4sAySjNWwUrf2FSSXiEgXS8Rv9EnWa78gJwdWLuboZzVqheUDrZi",
  "key20": "5p8cqdfxAeE5NSKWk8emyvwgVV9aN7U6vjm6ZoLKuXe196NJTEC8K94idoZzFb6sc9mXNfxr7iWQQ8CSa2dsEKVd",
  "key21": "2Nt2KGo1ND3eH9wEYck1M12bpuVQUUYgF4mQkWLHxKp4tqrBr6njVV3hu5eW4z9VGLvdycxJeiyY8w4y13GmRwnX",
  "key22": "2BcGbQauNnYDaMnenq8K74uUeMaYReBVFDTFiipLzDW4rFTvDxMJMnBKGJJ2EaR5mpawyrHk24K4oo5sAEpU6j12",
  "key23": "2xbttWtJcywrGyVKovkUeD116HamMHJLQ67FFMMDMNXMJgXns45nmvH9Vq6ygBRGEQsjeK2HhzwRwDH3eaHZn4gr",
  "key24": "r8g1Lvdyaw7g6PxXEgVGbr2g2oHBqrhRNXL9u2zf1ewQLzBRJqcqU3zxoS4w3fU4S4LrBCELPW8L9GkwB6cHmjB",
  "key25": "3sATakcZ1w4LxRZTneDnby8m1Emwv5UyGGWJJqWqLyDZfAiawZ3Axd6TB8pA72udZNuegCbso5RdDogNMtTRFHH4",
  "key26": "XyM1d7o4pELNkrNmKVmHFJfvVXw7o6vJRc7XFhSuLsehLxPffwesY87g9WAtct4gJqnWUpH8BcpgbcG82Sv4pbW",
  "key27": "2v8xo7S65tn17tX2pGa7asCvrirHBhwrbwi15e4MK7w1TEa82EPP83vEF9V5BvzbKjcp1HjbR2MJfqWD6nbjHKCC",
  "key28": "62iNsHjVA8HL8xweZSn7nWbQ3TAABdV7wbXLU2dNWXZEbNSTaizFWBfKB8ojeYXi5eBh6DwGvQfAgpAzTqN14tDW",
  "key29": "4MiPDK9CfsDp5DbtPtWZvB1ujsCyBo4gUxCJWsbypDo6VYUVAPd6ypSNb1fV6WZoQtFVqBd9CFNaZ8q8eUejU777",
  "key30": "5TdyEemPeQNjaHeiJGH936APKbgM9gENZEsKXCn9626991kWzze2NRtgJJprm2oagWkRpwcjZRgYNEJw7E51eg7C",
  "key31": "4ijqMFMkCBdoT5aLxjJMLBHPqCX8NBmVByeupnqy1zqRpXg7hp21zGQwZ4neUurFYkpsLXZCawZoS8Mdnje4bjPB",
  "key32": "3TL5JwbJUJxyeVcrgijestuF4mMtbe6gYcNxrSvhGLymapyz4ZGhQZDAcyt1ux1xihZ5H6KBgssXVukaKgK5jsrR",
  "key33": "a22Az1Zvbg6bD74NCqhyBx9gQEdkBbF13mjTDmznyEAS22hsGAtumDQFtV5orCWYGkDh1JWgoDWKXcPrSUBjDre",
  "key34": "2Ktf5ELEPpfrUunCp1p42WteJCdr6sosZ7zcoedhA5zTmJohwSNuzrRJqq1WJ4QM7ZrPdwTkCeseJMVPFNnZKVqY",
  "key35": "4ZUKfn5GxiSWVsbt9k6RqzAC7pcxMyGG2xhDpmi5pcZzE4iCKUPGoPf2NsUrPwmA36VpBwDZVTCVZAYfL9P2VdT1",
  "key36": "2UY1xLzMqb69hvPXUvrnR5ehH91kMCEBRzmicmAxD8ae4g1Y9sfpSSkoN52MWDBmXFrdZxHYjidjtehJgYNdDH3U",
  "key37": "5puRUKR2rnZyTkxcYbUAksBPwAbN7Wrvm5du6JXGyVSVEsRKvtnSCbB7wYqaUFYpWEe4oCad232d1yG3Bz6c415U"
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
