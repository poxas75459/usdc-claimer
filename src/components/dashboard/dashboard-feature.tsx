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
    "2EVBPsN7SJNn6q74ogMGNkcL6hVetL7W63jRDpGSciTdXJqSYthfSFMj2bVQ1gdcVrYiB8H7dYRHepcFUYN9nU9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BAPrcmxSkefr7fduxPpuXnKdHoiG8DRgwhjcSCGASwGuNp9ozr7y61Skxhx4Jpru75wZqQMpi3L6bQHjEx1QrPo",
  "key1": "3jH1fuRL669gdv4LVQyXq45BBEroTxysEbFfEe299TicFhjaERWJvXWuHEat2MKHciHRMievPLfcutxwgkjpGqhv",
  "key2": "46DPSFBPnDdJcdvPUaHzq1hXxzqjyLF5UVGvKSW1z3ULsQ7TTaqv3VkbQFYocMWXGDdLwehr63D3DSbqW6kDorMe",
  "key3": "5hWjzxA8pNcKuscGXEjou7EvJoZtQfc7iCbfcuWa4sL81YT1Z1UUoq6qdmZzgTDBoqHeQwvdadM2J8jVgv6JSLy6",
  "key4": "5cCAqRYU7rQCqEntfPwFKZvxUAfyrfLwwT2jwd13Tuwxqu7jMyZpy4RoUkPkF5WK2P1DAyvkVh3q8iWafuX1MKB1",
  "key5": "4GHVfCTUfyve3swVySZc5TDNqcHEjWYkiNZVySLnbWG5m9t7hNMakvq1rhwHJozD8vLnPub7tE3qkghA3NE6hFDu",
  "key6": "2qFi8wSdM6DRzg92UVXW1ZqUJ948cKUZZ35gTcoGizhFt2AGH9BnzhQ5h9XVt8LCzwXUDAY4yvmV7CpFCAEwuEJx",
  "key7": "2t9aJsgDK2xKnX1ycF4UUpPDMVJFGeuioRZ5hytzYpCPPgeAsEaWDYiayAr3nxqTJJ1nUMMx5pZJRdFqbZhj8c7W",
  "key8": "3otU7SgZbuspWAM6DzM5DpbSmX8GEzpvCX51BCdMujpousjVph4Wx1goZRqzuZQZyK94gM68CnKQPDLRxNWhSZrq",
  "key9": "2awyNi148Msy85n5yotAKXT3xVKg5mveGMjq5THWoEcNJ7TReGZaMt4St66LRM66zy5DxB31T25PLaXuCGy53xEj",
  "key10": "3nCRuJ9gGmGAPydg88p77bEJbqF99xskTTxR279qaPAjHFoQLqFkpjwdsArnwAfTBhLhhorm9h8VbYEncGxvxTss",
  "key11": "3zLZTsdzEzhWT4yqwCP3pD5VVugAL83wwVScKVyd6P2EjGBNiyP8xgLsMHa4FXEDtSKrhzbBDUHTsFirYdfsPLii",
  "key12": "2ULeF4Wno8XptUinjWphTb4PHrCt5aXiN1b6vRaKvh5bLFJVJeG1Ld5W8oec7xBAFwXdfuoAeCMui5MyaUn5WPv6",
  "key13": "5QAEwnT8D1h8xh7jNGLHLaNXR1fUmTWFctMxr8hR5yWJBuYLKHip3udGStJMxsb5Gwo5Jc1r1j5qNnq5MUhJr5bC",
  "key14": "56TBbdn6xj2MdFv2L5ceMxXqxa2EHtBTY6J3UAznYuNHM6Lc4Y5X9Z7ByUS9pJwhge9XeFYqAZUnqbGdiFHSUqoy",
  "key15": "5Go84Rrqkn1LU8Gm3TZwPyBaPgX6GWr4yieCzT3TigtxbfJo88Bsyy1Hc8j3MCun5jguQ9xuNeiAg1P5aSie248V",
  "key16": "BjusvsUsG7CvfqXnc9icBQu2XsWsNsdCTpjeb3Fmn14d37JB3K2q6vDZyr9ytVj3P8fvvsiZnq5kpZ9p5rAztTr",
  "key17": "5kJK5HAzS8ea3wQDRad1PPZsVgvhWnechuzim1ovtBhErWVeVXJ3BPyX6kwH395YZ82Ewa16K5F5hgJuAky7rZFs",
  "key18": "42L1A24PzUkjktSQVkmG82KDNpjUBxEXN3wWjvDeL5xQN99Lmm2cBidSWPuoZv4pieCC8CwvauffhtyeL31gYChR",
  "key19": "2EGSRJmgjfYyniTK3YSunh5BHeg9kMHDmz3TA4LLZYbXzxExrsaBXVPAGEyEFUPaBcnm9sGVodFMEj3joGhTgAWU",
  "key20": "23khAPYaWoKV5sjkckVKkDVSU8WczS3dV7M4Yc7DDTucGaBEQcY6vU759J9zwC7Da6RUWMh2s1NyxTdBDJcAf1YV",
  "key21": "3avs9pMiuzud8QJFXEX6hmrABXHfEo7eom48ju8ViZMbKCA2HvkNBFCaifBX5doigUFJHfctVMCU44hSJ1uxFt5Q",
  "key22": "3ikM6GLJvRf9L3cxwHggSqzXEj11xdTcWT4mKBPiNJ7nDxbDpDxsAw96BKLjmoCzuC1Bd69NbiGjWRTEb6T6UVX4",
  "key23": "4eVBZ6AGtEGhfresy7QxRXzuCur6UCTqmjp9cqvY8DV5Qd1jdQXVciKSqQWG9NY4MtfRsetTHodoM9VfHWzBQyFK",
  "key24": "4Pbc9Q2yDVMPtyC5MZF8DtVcPRGE4JdE4zpri2PsJGyKsndNCDSYWwa3Xp6oHS2XyihU2ZjQsyQiD2YoKMXtFFZX",
  "key25": "2DyJjaCCHzXLP56Nb8JUYat6eyW7Vvb4GpwjnxYa8sXeUJLyfAyL6pTvD5qNdEwYpWXLrhLwezz54Fs9b8P9crRs",
  "key26": "53wSFBejooXrvPJKR5sMNjAgBqzFBqogDzPbBqnrnznKDx4aK3S5BaCJvCAihNogkK5jcN99yfDgJSsXhGLC7WLK",
  "key27": "33JPr8WcZBPYUcuujiAaTwN2YEhpbAp5ci75RPRoJCCUcYyYZW3N2zQhdvMgn3WFn8cVQfLvDp1CHzH4FKu1UHsC",
  "key28": "C98wro1MA3xCp67CihNPCgj7cqbAnXT3J6J5wpRzsPrd1bVZ9DECcG7VhzQiR7DZkKEAeooFDSVbHpntUcR5Nm3",
  "key29": "rXtJ7GMvHhygURQ3rSMdJZRxkVesSXoTNNokSPuMBTKs4Zvk3BTjMg6YPDTnEjFgGA7nUE9QwgqpDJFSdux8aHJ",
  "key30": "55C5Cj434zPmVBPnnagupe5fBdrXhZBCUwfG8shYzdPpMSi73A3fAZPCDKw3WP6Kb1RRrBCGscAKUSMs3eTayiF8",
  "key31": "jJ8YRDdPRVwmCypbKafxGGMwEMMfuEciqZfJ1BUe4ThKrkAXtMtc4qsikD7inxFHcau7QTTc2CjAKLmQ2Qvp6FT",
  "key32": "3cS2NYMtXVnYVFDGkSZ6JyugscV9nAi5e4QX3vtyH3fKMdqveLGTA4a9EeQrqUiHU12i7X7VBVrZkGJHNKWyfE3H",
  "key33": "3KUkq8DBVvAhErQC5rKMMXCeeoKp856Lnf5N87VDixNd9XNWnfodRjfW9ibSxh34quV23mEng4A6TprZPQGxi65P",
  "key34": "4HNc1AaR4rH3G7UkYKN5akssTwJ4YsMwMRkEV1jG3Yha2f2UneevZAxm3m69r5djWz2H8XfmAD3hKMyHJnGfBCja",
  "key35": "3DMd57JTxzwsGVYxqBxWxadfSbrnQdnTshqHeuSAPA6uECYuLhvHbTY3EErzke3rJ2DYegSyJy5Wqhd5V3UwP2Bf",
  "key36": "31HF6QKZ6znhgr7XTxJGk9JASmvVs6phErNh3EWyXZFxSmc3KhaqZqVf9npCVfq14q5PRmuVBNgZaNjMwFZBgGZs",
  "key37": "2psdL6QszwMjYLcKnU1m1suU28SQNQ5h4Lsr446yit3ymRpKs4AmYehcNcqaH36iU2ngKAfhaoForN9BQsFpXZYL",
  "key38": "2gQxeVJLZxkJK8Veh1FWSWv568LUFETrvxNZSq6snmfjs7upx9mtcxYLVupHsDGgLkpDQAUfuEzEWsqth9Vh95Mm",
  "key39": "4cWHzNquABnuD31tCGpLgWwXVoPnMxfYChK5UjoJ1LK1qT9af9TnUsHrCniZBg6juRQgz9Vb4PaLRwYuGHA9fLs1",
  "key40": "nfNqH8jpcoZGigD3dz5ZHPBo5KcQEQHHh1fTHpGkyJPn3Gu8Dm5pnTek1T2xpf4bb3Yt3ZruAiJGXomzm5D8YrR",
  "key41": "63uCgnuQxGmNEi389SPwows4NQuZ8rSGMgRVV8NG5LkhSWH8DkjiijvgLHfvRaW6ujRrFPgWSYFquhhQ6kPdBMvk"
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
