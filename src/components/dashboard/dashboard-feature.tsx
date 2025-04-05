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
    "UTbWvXfWZhvJzYYYKNMckZ7Xrw36mTeUaRhV1XkP5kxYGY5gDduzQ4NAMh1fMBQwbBrXhyFwhL6uVPSVbTcXrgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5boSUGS9RjGsvPXh7eYAreYzeZVV31EHceRR84jEBqVZMxXyW14JwpmpVxsbEbUFRFaDj6Nvg41FUiQMvTinev6H",
  "key1": "54zUnwsQow4upz7L8p3MZQfaPn8ZxovXvb5MZHV7YHjtSPFJ6G8DEpjgRr7NB3Un7wBeZBq4M6QFcsDWdgoaXdXx",
  "key2": "3wraixoVLhAALWPGBiCDun8reKP8i2RqLxYycDs2jHi38t2pxHjTNDj4BjC2wBXAvDJ7fdM3oA3WSjodJ3Jhx4FJ",
  "key3": "5Yaq3CMJRTigsr5GJ2XoP2njWQ6o6tJrL1DYKXWTg9SLEHt9KsuPLNkxG1p6dY4godnZ297gER6P5mTLwCr3oAyq",
  "key4": "3RsGHeHFRLM5v5YoFuxhqVXe26FKtk8gVWCJc8CR9SsMPf5KW8VTop5oBxFWEQEEUDtpnsEU1eCfLmkj5n1Kf6Vj",
  "key5": "4Qx7RSP3iLsFeMqHt6sJs6h9YysRDDvcb8gJvjeqGCqd1gU2KzTm6dqVvzkZFxFcgvVXiumbuukTddH8hj6UWvjF",
  "key6": "4HCtFHXkQqXQoXTWN7HhWxAFe3g88jknQHt4FZ2zBkDWV21jRZzJGVSTbdpFZBntuFin4b5Dj8R9wzWN6XgSzHV2",
  "key7": "53yDBTsGCtrLsoxrqL3DVxHh2Nh8WN4DckJLk93aMwVFkQqRNmhmZnZyk47nxvRUQoct1b9tRnXipcL3jpCHgGuT",
  "key8": "4F2TaDrLYDg3BjgBrgycLt8sPNGxiUjqzVdoy5JrCqoPvEbMqtmExg9jqcC1KH3tZdBhGKBkcBvMSkJnbTVgthf8",
  "key9": "2DVQuZ4J4Kq59vLDok8MdTj9QvfRuiHWjRYVigkCDr3tJ8oyRwyxmeMdTDV6Q8U3MHNUxab1MaX7Lb1aye6wqh88",
  "key10": "2fBk7ZXzdL3ExumYi3HQkZsLc2pf21LGCMiawDZyaZbSTTFwxNruwAyyRW4LD65cGTX2uPAs4cb4n7HoHfkBc5TQ",
  "key11": "2dpmdbLFpX18WVBQscENV15LBNXaP8qa9FTwDxds8bFTkY8vQgP89azzheu7ZNG8FKg1PcFTUdPAvT5RTv1w1Xod",
  "key12": "5oJp2qoBXARPV68oMVKM1gvT73E6diuHQnPASNd1wEyyPEZJrXMhSf26UZjw7ESKFbXB7gf3pXHgvdRsmJqA4HVU",
  "key13": "2xfEmsaZ8KZR3zEN9Y8TiVX82HjCUWkQFGut2GSSMCQLqGV3ujG5Gt3umQS5PSZfnedg3tc8pgXzsZpXurDKn6dk",
  "key14": "b3VmLaeC73znXpn489jEyE9ZrxXAoSxQt18u1VoN8GVwtq8rXKimTC9Uwq9VEfsRQPMqzq1Vw9KQhtyYaUuLh4H",
  "key15": "2aLAt6Fsq6wGfaRvVX14rvfdwzEqyBQVPDpXp7Wi8g1cjm2NGkKAwk4Az93dk2rUvsKe1NJZQ5NzCTqGaFk6Zsaq",
  "key16": "4jrnPH1xdt3HvCb6MogFkEfkgHCi1FWSn1L2DCTQiQwAN96u8aL1tFeneBMK5qSEKLDnnwDjEkveSg4YobRiKY4V",
  "key17": "2b87Xn2bJAQ3gYFYDZAh6Q7L3CKA9m8zydDwkbz9LfEUsX3NcRLR8NrUfA3QP25Yrt8wDdLEeftiemGAwVhUr94Y",
  "key18": "qS45vQkyz7tvvDYCCFNdjZpAtnkXvqbm5CfLVTTNt9qthfKsfNX3wx8uRinB3UYJsU82k7C5Va7Ve42m7M8pJMt",
  "key19": "4A7ZMT4VKgNB4Sqp3ZubFcQKDQUpfSkY5eZbNyXvQ4y9XDf6JUX1N6p3GRNEfSZ3eJYZFsgwxk5JzUHD5JUAMMcK",
  "key20": "2gcBnBoPiLJ3kENmhCeJLfGndqiMBfny5KAHGgTH7UXcikqE8azkdHyxf1mk5pUTmN75NSXdNdHUzY5RVpcTjVDC",
  "key21": "39UjQWGQYsctZA4SMwfyzJGZ6HyZ7dgk8BWaCD6CNsMgZp185Jq73CWaP8uWAWPRwLYxwyJZL2h9i4drTaA1FCnX",
  "key22": "2pbWt4s21Y6JtdMy38DY6yajd1uAP2qiDXxc84zSrgcp5MBxpF33LpJaxjdiajDAq6vRLE72Jb9F1nK1Q6N1B7mF",
  "key23": "4KqABZBxMEjSb5GeRAjRN3rvf6E3gq3tbCPezLZtsV3kgvGCuFM7XXeaSp4536Pbw768qrmmYifYAsnrVGMy3MzZ",
  "key24": "2brxCbWzhFw6Dz5RNPFTWYStChvuuB84Px8CSBU3bfXRkAofVoMA9Rn9hFkxF11Y6S87n3rzAFF1bPVaCkLpN7i4",
  "key25": "3wBNTHbUHDx9Ce7TiJAoRyjX9jvgBizcFr2gokYC7EMVQWbfz8tako1mMc8WRMrKk6cdyfExoLSTURxcqzRDTXfe",
  "key26": "NXTeNY69hrdFhHq7oyXFMaZYy5gjUFkBX6Be28kcCy5oxWaSiiRLMZRcvXUMmbb7txQiHKNcmnUj1WfDpFhUZgR",
  "key27": "3XLVFKT8tZMQYCjNdnUXy7r38veBmdmfytLKrMwJrEDXrHxyzDPmnvF7gb4bCeePxKfYa5AmnfwhUFcX4z6xvNwX",
  "key28": "5irVnzP2w9tmVcV1FBc26UAwjGQQai5ULHhgDVrrd1fR3BqpueiE6SHCNAq8fz2bmGQZhUw1RrA6u6MLEpcxw8Kn",
  "key29": "3iFVRqDHZUk9btkeYQz4oMyugJUWUJfPU3ygAft3cGW1v1UAiw24BA6op2CTV7HzBnXp42masR3apEP9JXKfz9uA",
  "key30": "5jGwZY985X1CP6gePry69RqiFkMKGEHA4SXZfmFxjiHx9UshvMtrfzaJ2aGwdQ6MG1pk4dt6vjVq13dQXAHa7wJg",
  "key31": "5FYikaE1nqQbdWnUzqWGx8t7rYv1fMjW8ifFvBtsbAJkkT9VjdzLMjpYpk6EnoEEdqNZkbB3ngUhM2dcZjMnxFqk",
  "key32": "2Ht9NUwjXrgq7TMPHtT8uvvN1d8hdeHE5zVb1SYu8CUoW3aBZCLEhgMYrKewmc3chE9VUJBjuzC4mLRBrt8sGKeB",
  "key33": "5ezea7dBuoFJFh3HyV55x5W8MszZqYy8Veq6gpg5qDAEQTpLoDF2uwmBFk5hWyZxN3ip9ApwNwrUWDdnxY9JzdR5",
  "key34": "45QEjCEndJA46HmqTJijQr3xAooaMNFPDYt64p5zWa45CG3Xm7sd8MNdNeDfTDtz9S9wpCM71eRjTbbhYoAcs9qy",
  "key35": "ZDwpteqWT3CNEy3dRA5hVa6eAowqn4Lqx8i6kuMEs8quDJKuea5bq6vhFms1PT9e9UKeVpydQ3WpU535aha1e1d",
  "key36": "2RPbuekLR9aEEpjK7zpgjr7LMtTjkKXg5WqbEhePAckc27XLW2bP94bN4fu6YDJ2oZ65GmyoJ3z8RE6byWt344Sf",
  "key37": "4EPGekW86yxRkraw1RRR36gviY3x5YLxc7sALSKkqEwibaSQ62yvcZfBGit2t7Lo1m4LYgsFjusHwbzY3VabNp1k",
  "key38": "2S6Y7qLoMX3fPzA9RtPJZzX7vJMAJNDVvEuEXwVpzY4YDZt49MsN3QBBvJHRNabC85XNuvD3s2yaT4ABs3Gyz7X6",
  "key39": "34oPsHwsooWnSKC2CwNeWpSxmK6ocY88NZGy3dQyU2bReq4GMUAf5Ws3k6FAKgGwYJqLSgvVKrQ3EbWoK4SJ9YnC",
  "key40": "4jRNiXMS7CxjeyXsgfA2gHrLFep9trcf8yuHAGDsGH5CnhE6CgRSEsn6XrAQdraXDradjWkg1XtkjoxetLQ9vPmo",
  "key41": "KtoJWnrk3wTjhGY3c4YdwMREPUXByJjf6U61ud2njN9s3gU5AfT5yxY1xyKoGQwcnrS2H1unLP42H3gpZh1Ga6w",
  "key42": "3PQm9rAdKyntgFQFtB1Vctmm8Ygm5yiQmwhPLKyeyqJYSS6cjM7GfAccr1MQayYAuRsYr5v6HARruo3W3GFtM1z",
  "key43": "2jcpB1NBCdrzi9ysTMibeHzL9qD7tDPBXxNRyQgNJTvnseusTnp7poxkJz26o93rJzagU64iy9Ejeigjr9dHMzuB",
  "key44": "4mUbKgc1Y9cpKid4kLav3rnN1McLVVXbjq75Ycy8ARVBkZQjroz35E6j1aLh1QVyKhdkUkVAeDdCw4qnLQCRcCUd"
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
