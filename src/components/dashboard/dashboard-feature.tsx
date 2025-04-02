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
    "4kbQxxYHtWPwVo1xUvXenZxvu1hC1h6RFF2ir12tqEf114VX6TDnGyFN1QFJV9wZvUVx6p4kuijmwMwa3oJpAu1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GiFXuBeW9UTNaE13kihywneoS3mWCFgzt3tr66M712JFeCWa2ACP3jYSz4ijU5CVKeBM6w1JjheNNGTpL5W3tvv",
  "key1": "5mDnm6jW7d1RGpRvtif72dzsxNg28VMixzsrX8QQqtFUTF2wirH23tLSwkqUYnhNTgvsFc9Cw8cTgQSnPn7SeE6W",
  "key2": "5SsExeDoM1Ycwp1PcwsVLv4hSiWAB8CYke3geDAqhE59QcMv9zAs3RAAoVNYkcMa2sRcHwc5KUUgHwf12HCpZQh6",
  "key3": "tgEBQyDvmd4a178FDAwsXUbf85Y1ZMKxGZZsKEcacxBsS448pYvAP9BBFeevyvLuH7RY6s1r5HoVoPXRU7M2ucC",
  "key4": "26dSD8cmrJp7gUYEC4w4FA5K5vtnzrvTnEgWJj55osRmuEr9A1kQMUi1zT1xHtpdwKPQ5QftXtvo3goCQTuKNG6s",
  "key5": "57DiCSfsoV9UctRHTa8x9sSeQA6rm1J91Xr3m2v9KqZosV9Qnre82pfhyPLhywspsCpsHy46jromsvkvjXHDx2qi",
  "key6": "5GxE47mhobueuyRowp6zNhxHpDes3yCG1D5wduP73SCrX6qB5DhJo5YC679kxe1n61wrxThH3WvouxKd1fDAZXgS",
  "key7": "5gT3VVXVdTEc2h4hgFjtCxcRivgzu4UKYZSBYWgrDEKyw1oyLxwhRZ88f1T6RPugLKriXdJBtqQwzDN6U87ikZkQ",
  "key8": "5ni3YhohGGZptUZP5vgNK2ggEng1dH12MVLHTphFxin1wSi5pQVzuAPtfZz2FaYAai2Si1Y6ZxcYQ3CEf4Jp3rB7",
  "key9": "2FwZrYHDv6zw8iyxnAog3ZrS2qTBRf5R3pHDjrNh82nwozcZFzvMSFKQxVfXGrZrbGaWT2Th3a8iiQeiV3nLcQj1",
  "key10": "4wWp75PuVGAuRMRDcxZ1n2ULRZE4uzrPN3xockUQRRVqKcTD887h95JTrTTzdbTc5JQc7NoutPYniL61u1iTrgED",
  "key11": "5ctxGGi6ob5YvNzJs2m5obNbQhzu84ydeV5saQSoaVxQLZC25WrfiwPooJXu1Ps2CDJ8yZ7Q9ogEgDcoi7bsW1MQ",
  "key12": "2Pm88Zu5d2jpV5cSmR3NJ7vC3nEDZKFq6n5mVtpNhdLkQ4R5jAMBErFsZ15SM2BHr8PSC8Q3B5bn81dqSy6Hbw6N",
  "key13": "2ZonD4EKRq8RQV5mZudo7RXd7APwDLY23XRoMuLbeHPVLXZoM1fGjAyR6xfsM4oSQU87ZWSd8afLXYsfuarie1zE",
  "key14": "27zBWEy6gJAjHzP2CPf9CkWi3Vxvrn8pdF12rYDuWMPn79uZdY6HpUJurwSAY9gRoGgtHBSjbYevecug1iMVqrE1",
  "key15": "3CSBuRXHGw8Tzp3dEuvyww3mmpNjSyCBG8mxWwjzdMuEnxZXzJB67hyAwh4c7a621iwjGeXdUcpjeLUSo7Wviw8q",
  "key16": "3ozVg2pGTK1c2dEooKDtfhDYk3EZTqYjEzypsdPbZdGPTd5bSh93nTTqproPJNSe53bJiNmCg4d2fKMopGo8BdnZ",
  "key17": "2uNb5TgMr5dGFjQuVxDrxdGSuFKwg96eWyKYaGRdgBG9EvqBqaH9TMzuL28sdya5huHwDyaapPPcT2ezVkX7ftVG",
  "key18": "2WzuZhzGsrsP9n9LSxFeWYXapZ2vjUvqCPiTPQULBHPUERPm7KNRYJMA7ZPTiQfNmWu27MQoD1vXf9kCpjpPNMMC",
  "key19": "3UL3q5CwSHPBwvD95jdoJkERCtvPyknjhkbtNbSPMSBKDhbhm99YS456v4ZVhnEbX1CRoabi44rp1BvWzzSiKNVV",
  "key20": "5FXaRoWGfjwpsuaan3sVqBwbjDH84ydtHZ9gJQmwN9HjYE7z62mM7PXWydq79Xs4gvewfCRnXcqmztwBmf3hfu18",
  "key21": "3NLLNFLR1HXrQ2UPrzqXuEzQA9EaF9bt5TwVTehfiQihcK7purguF5jU9ThmLtFwdGHvFxQuU3UJoYxDfKT196Lq",
  "key22": "47rSVBvY5oA4NvrPua5L8Sg1DnXkXdeAkqV8kvNZNJtfVsh743yqdUoffLs1UmejVS6grnN5SwfJQee4dQRia3aL",
  "key23": "4aCzF6PTTL3GM7eCpbLQUGgqreuhNAntg2iV42jBvh4LmV6JqaQAuNiCou33zaDU8EwBhAZnik8Q1DryDq868Cyy",
  "key24": "5EUGg6CDApxKnYb71iXoiuCSxyb5bTkmfcw634pgb6vJCaU62mh842kH1MRKvhKoTLbWNGP4yJKxQH6rVmHgpmUc",
  "key25": "roiL6whPepCoUVCafCXnKCQhxmLji5JatsHfC2t8drdAa3LJRxi5H48cGdaoFNxbCwjYBLBVC4CtKLRpcXD3yrz",
  "key26": "3eiKTogFdsMViEwnp7QhMyjXWRrcDUpsCUns8Y1BNqfVhQuA5sggjNM9qeJmjY97TE1X9oQkgwkUFioTRnxQwWrn",
  "key27": "56AzSxZLC8XYXrKjDxUPEJMgpmENm4PYRzaMmP2YtGCWTQ62jp5YmKiHqPEfL3k12ENtUW5nwdbZverQJtsGCPwt",
  "key28": "4TKryKX4QFoMTNqiy8PSCArS5QBnyCWTUDs2qkJrLsB1Chp8DVcM9XmP1t93pLWjxkQ5u4ycD2gnxsP7RPqVTHVt",
  "key29": "4S82bHeFUBhE1KKey4SVxXuZZyFgYnYckrYrj5eLyYXZJZdn2oXSZf47QRmVok6Ke9VgZtjxZ6dvncgJayHoAyLo",
  "key30": "4NvNnhQcMHrCBXAKiQsX7hXR7pLEEMTmwTethPp53gXKLjofazFCuZp5K8pcaTmQfji7sbddUkbfv5g3Ptd34yeL",
  "key31": "2KitmfgfgrtwgwS18AgBYozHfEWGmcoMnf5pjZJE4BZHj6fuJb5QSKUJYNfw1BuB5p2PiJDwpbezv1TEJNQ59f5h",
  "key32": "PdbVzPc1SzB5Db4uwW9ahBtRgp81JJdfJiqNuHcyc7ja6raVuh9GGJkFN318DJoRnAiK1VqfhYBxqLNeJtK5Jwf",
  "key33": "61Gpx5YnTeibEexvpbwzsoQXWKbYefqBMhdVLp63atmp55s76yUbfEkncBHoySbR8GUCWd9NemL31qVETdkt41ed",
  "key34": "4rGjMk4vJ6LKTbNNbYKVAHriG9cdg3GWKRJYD1eSy3ScPDicrLtjANEmhTfXzvJUVP8TDaxftP4rFxSBEA1M6Jtm",
  "key35": "3BQACVbPX7i4WNauwvtsCNHWPMgWFVmc7YQYtPqTDbNNY6x16kT5JCRdsZhYt73MjvW4R7kcmCteb22rUZHmLrhd",
  "key36": "53mVeeDfCuA5nNL6a2w834P9CB9hZ6cb5Ukroc4zZziTd7hmz52FuRR7iXKg51WiRjpPVTJieqbuHYZhfafGetez",
  "key37": "66exG4kW17EfbBdFWNixE7KSAFERDvcxHtd5hMeUb6mE5gyYoUPJaCGAAeCeW3dknwsE9vgGH3pQGdoNS4dNixV5",
  "key38": "2rFPpde2Eijbxjtc5dbLYQgZjuAaMzAVjnwsGUdMDVi2T2Mtu6t6wFyX8ZHUbx3iNPcu3WdZpGYGRJxhi1Xbriy",
  "key39": "3PdDLXbL46nqN5LqkJ6wAPzqdSTWVeYsrCs6yUjURw9PMW8oi5GmFjHGemAnQdoGdjkukerG2NuDyBTKy4nCn3gq",
  "key40": "2HD6Phi69q1fPjKDZCXLJZWdktbfVJrnwFRtKkeV2FfD4xuREXwRdRmLguP36zcrW6kVwbEFAcWkYamcpq1XNA8V",
  "key41": "5WURjYjcEhkXxPhH83HkwHswU2t8NW8KjmiHpb2dSbkXWaJ7Vvq5N8W1TiApGDZXjQRCbRTT6Uo7HCoAVurGMBSc"
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
