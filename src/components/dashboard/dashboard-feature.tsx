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
    "5h2ujH9tFPcXHtbe2m2AnKrarNFV4Qw1czzbKvuDfTPJMQWtuBv8Zch9hSLoqxgit7ycmh4GqKQJivXu9bd4qwUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sfu31YTyYEgL45VSg8nvKR3keZLmgG7nC4rrJsVvv1LYUvGeMn2pnimwWPwMGiT2q1RC1ze3dVfKvHHbQS6pY3N",
  "key1": "5D5Uk1zryfyahwUi3aAF4SUrri8uJPkQ4c8DHdBQnznptUzjGWEH4T1zsHnVoaHaLPHobjemppKEyQ8sQVp6cUAh",
  "key2": "5neL3HA9rgcmnx7VJhm3SdseAcTZKorUFy3nNRxtbbkKuGVfudnhsT9tZfXxmimz4K4eFQWCrQvAot2SKCxG8aHA",
  "key3": "XDPEM7iK7LxRQQsbFeN6dzHMwcGGaRBmoC1G4E6GJP84FtAowLTkv1HMSZan6t4wRwkMGYWZ7Sc8f95EJdnJGz9",
  "key4": "znST9EtfpVc8JR1ZNKnBXhWhzjPhiAfaY1v7MA4rKyS23pUAaaLFvLBCXtkQdchu1VNYanitRdLd1ymenf59bpP",
  "key5": "38EhJk2Frz1XiPhiM65ZrKV9VRSzdLk2gQ9nU3eT3sE3y1CVDSNZeHgvEXee3QQzApFPwD7RmK5FE8UFkyvt35BM",
  "key6": "2hR8wcFVh3G8NxoGNPAMMfaLTeaEfAjcdz8Zj2dnp91RinKtXJYqYGYU35bVmPdLBfbU7eKzAgsjdbH9pC3NC5J8",
  "key7": "3912HkXYjkMPohyqqMaYYwsw1UtNu7kgVG6MBJq3oK8Wo2gALaSip5nwA7CX6r6codvMjNPj4amURy3eCaSg4ftb",
  "key8": "4LP1pv8mMDzPzjFdxfQjy8fN1soJYhtYPhSD5bHYhmsayCfD63Fx9TdEozW6Shr6TAriUZVUhRYjGgC94BHxPSSH",
  "key9": "5t6yt8qiri6SwTH9uSTyDKSZMJKz8FqWqGYPttq9FizSz5GeoNNnfSmqCLxeLT6XarcWPAKQAuLGN1JqHtEc6B4M",
  "key10": "4NnWJ1euRjxFuLYiJE4oHZNR3hdQbHN8Ua3Kz41kHRyRmQEUx9mzaY3R2PK9v3wUmmuWNFJC8Sg2yaoc7gGqwdpo",
  "key11": "1G9s2Kkbu3xAYwbbXStW9BNeMoPWuNYKuDY7R5K84GZSvCLZzuYFsrCP5bQcQq9q9YtHNJtYRb7fMj1RS24pg6G",
  "key12": "4r5B9dFweyddHExKmBsvpLkGJFJVmatts4mEq3UbQ4m4CUqq3CvgB6gpWXQxuCvFvqzunmLVJCdzpvV1aL4vVp4Y",
  "key13": "5b2y4n8JDpisf6AvPJLqLrrFQbwbVh8Kw98dqZzXZKBeTpfGw86Y4whB6LhVGisENC1sCyMC5yxWkquLD9xockUB",
  "key14": "mv7HGhKEiSc2GN9xyf7wZMMhJp3J4vVgBwttAsMhQjdCrg3apr4QEPp9W4LAZP7VQRjw7VAg7cE9VVThd1CTUkx",
  "key15": "49guCSUpdToG5YYYoPbxNujyXBC9AVBcJdhu5txEeMwqeBdbyDkfcanQKrk8oDhMC2z2RqMSKetStELMBWu3n1S9",
  "key16": "3eMis73LpAjHRuJN7sEA9LecxgHxkPEFPvSCUpU1H7GdEFTrBC8DJK3tgHxNQu3bk9p9oQWQ86EX2QoXCEDoWH2z",
  "key17": "4inRxJ5G8X5j9edTP7LVhBJmwkLxX4HkmBNMgEUZDCQi95pbpivnYEmN4eiWNaSWM91VrSVWwoqyc8TA3EfYQMdz",
  "key18": "5uMtFt68pnJWNr8XpKJp1e4WDpmxRg2rqGCEHQ72qn9VaTMLrHX8gJKNGDLegvgtYcR43nbKLLJS45uoTvRx1tg9",
  "key19": "4p1TB8LQn3vQWrWaByEgEXvgqGjJAkqyUVZjC4spPAo4x4VkRhW7BoEX6Cq7YXTXabvSj7vMFi3A7v6LrDX9sKcG",
  "key20": "4kJj1R38ZhGhry1vqArPnqDkJDk91no4f5wWhNwdgveGHEo2giTMFNESaLiR8iqxraDRL34PKF2V4UwUBsigqZfT",
  "key21": "ogJefWBkpHf5bKfrfhA8uAT2VMC1NvPmqFzxcWwpG41h4NhSpkiYEVEHCAvVdmm1CM8JLK44ZJPVZQEJTZjZPWT",
  "key22": "67qibVHGMovfoh7cK3Hag9TiQZ3afJi7J6R5EG5JX94tmqT5AeA1RAE23zvnj3J4kGNjdQiMghQee33nroWHHzom",
  "key23": "hu9Cpfzk9YoKcMC19MBGLEaCs9fYxMt9KT1c2KX95yWcvm1HGXLtZwcoDUS55Tp7qfkRiwX3GAXdH27zinRndwF",
  "key24": "48v744Ht5SECnBsgZfn96YLoHredqd82QYHKSArzhxLd83AesjdwUEMkpahbcSAvppJPJJsUFviP2FimMcTmUARj",
  "key25": "2Y4J41XaZHJjjKJ8fepLSbaBEW3UFDsUs5dsguWLRXf8n5ouHSStRDLkwQqn6RH4f4rBZZczqfG9PJ3E6AoyHuUM",
  "key26": "5uQrK3Pd1ivvBruF7acizxLFxLAWkfK2C9UEP882nmkvgXGwutjrXgiTYckbRQtJEYcemA9wTe6FMdvw6tiQeUoV",
  "key27": "BWZNj8CBddyxRgnDe5mMRBUEWtdCPpQgpec64bqwrSAaZ2NrmZxzPACGtMBs25LeuA7mMVyXmo8aH1egAkfMzDd",
  "key28": "5hCwr918G1haiP8s84UALekZVz3pYD2t6rT71i9vryMTgp9fCQYpVXzZZkVAsTKBcBSpDsX1Nj822Akr8f2bcjMf",
  "key29": "4FAP9XMcMxvjB4pZ1rTdP6VrUXRzDVWuPw46Zmqsp4Wtsis99oaivhDsovetMSAu7DxRpWtn8tXEXgTPYWMQCppX",
  "key30": "E6tgzxuXE5hrJDjswK2NNKQqyVzJiFQvJiYYmHyFKZnDPK4mKN1rhKWHAJkXycCqUAXZzsczavkzmedyDGX2U7u",
  "key31": "3dx2vifuiDpyP1fZoXj3CzBwrqinhntEiipHBLW29FTmEvMgq628mEKmHCjiG7xoiuuv6Jp7dy3WA9EabRF59MQE",
  "key32": "49zmPnjbpwJPMYfh5GQL5cY39cyQnpg6mN8w7Av9WWYgS5WmKPe8pUXzJLBDfvx82tr2FVcZE1jRF5c1ZbaMA1Zj",
  "key33": "4YTPxncukhfngTceW5vDrGLUB1cN1phFruoFWq7JvyJHCvZH8Tdryd1nyTD9M5pj4r8N3T4TdWsswZwogsLLPi9a",
  "key34": "2G5ThVLmHAZxKhw5ebF6hmVDaxKQqr7PXuitZyQpxF4BD9h3Sep5UMGe9i3HzUwuXrRRkrRTgmaRg7eTGGSpVFmA",
  "key35": "46YWBSRkj7GRAHwZmPJDqnrtvvUdeLUT93D3WGArfeDprf8S8D21GAVX7dTW8eDRTzZTYtXUF9ysZ1oU8hTpiBq7",
  "key36": "S5sbC4TRvpBqMMtG4v59fbPwQhMKse7Eft5rTzfELv4zhaiHUUYrfFLhrnawW2948qpNrYkNcsbdbh12C2RW6SN",
  "key37": "AjaeBPnYLJjhSohuY7ct7SsTk8euXwk7pPff8k4qWd8u8YyhcWhY91cdTyr2E3zarzQBcd2CvjYeX5JJMy4qbJP",
  "key38": "4N4E8HPDSyK964yvdBC7DprbLHr9qYLxxFJcgHxeef6th1CHk3UPCTYWBCMxyvCjpohpY5mdJbdpXAqH5QgFovRv",
  "key39": "3BP2chACXqMT41LYdEeTdFWpS3mNHXKGmq4TZgtVaY73npvPuRK2PFizHRUdN2oWjcTs1HLXK7P66P271vybJ9Np",
  "key40": "4twSXyqU8J7icnZuzYnxTzo1Jiyw7uhbdXW8wHxmUoEom8WvMb15SMftQkvFvW6ZZXBHNhuotXQqmE1YLJFfndWe",
  "key41": "oB56y8EMp1fV9vuC4GmEcWGnq6pV3p9dCgfjEmshUHayhSmkMoYdY2dE1Shb9Yi6kZj54q6pPKvCSrFTTVMtUcG",
  "key42": "5LhUGYfo17C6aGaHTcAWQEonHUQKUiN1N7jPF4gb3BijcRGaWJxN4LKPin1SyzjNkwbHPrsCsjbGP9Fhq4X8WPRs"
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
