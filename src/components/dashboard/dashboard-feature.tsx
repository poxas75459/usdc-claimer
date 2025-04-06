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
    "4qSSNgsXa8ijop1eAr881x3DtGxbE19eS1HDLFkxPLauv6uJWg5ECmbwXbaWY1DASCbJM3ZgGpHHqZsau6NzX9oy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46AtCWN6wHCLdKz6KPBoma9Qo6MTj2JzWxpv9aCLRkQ6FD9c2YVBXEz5Y9gzqXKDMjyza2AYMX3k7Z96Vb77tK1u",
  "key1": "5nZiYEkrr9amwYvKDnGpAhLQRhJUcam7eWa8fTZWkL8yyvZzxUEjhPHiu9kAdZwzTnLrwnQdpzxZ2ATR4XvABC4h",
  "key2": "3P3FC8vdxGADZyqoTc5sB5A5KRcRBzj2YJvxEPAgfq6XP1dXimt7yiQabQXbtYpD1FdYPhfsBfXiYSu7ast6ubLT",
  "key3": "5gj1i79s5HWbeyNaJgdvynu4AHFL7WSy4g7iiqigHFgW4RoLvqnyjMhgSJvHC8yQGeDVFRCf2nnh7NzTXvjrjubg",
  "key4": "RttcVNPv63pGHwEFjRoDLNmbLBXqVod87dMYgzXPbHyp7LJhH5CdnhmA6S3fSzPuxNN3Mo6zaZhZwmp8VyFiEa8",
  "key5": "2kQjHLmV4XMkCguiFTbXHTbSkqzxFCaMD8nZ3DZPut4pQQVZRzC2fnR2yWoQcWQcDmxPkCFAnQDzTqbMdvKdbiFx",
  "key6": "yf3CbKdcL3iAfrhMUgh47xECppsKM1jDnsQaGZjcR5LNMeB3UFdQs2xCwvLztggaYWWVNHocHvxwZPPsgQeiAAZ",
  "key7": "4eZKanJhqamcunMr5tJ7GTa6v6dhDB4eyi9z86Z53QNsgQdqWwBroKntqQX24BjSCxg6E5EpUb6NqU33kYbdXjzg",
  "key8": "2Jtu7PxFfW3EBrdrUTVJJeVNkGeQKvdpySmEh5xWj1aSPrhfVfCJthAMA4rTqfJV6HPNEShU2Z4nKEvrWyKcU8mk",
  "key9": "5XyvnguJ4vKmy6QpJ85i88sxNm8beCPhcKbRYN6uspLBbDRyNfg5tV7Mdmu58TUXptVLtwbP6noxF3yaHDndMoco",
  "key10": "2ygg9n3qFwFMtbD7in49pgKRo43H6qaFivA9jqHD2HDpXNfFQuaRoqhnYyM8ByJxCczKMfTDnfjPanTJykv3QCYG",
  "key11": "3z1eUTtTyVic8XzWSwgxqhmp33ADQ3pDt1ygp7PrniD7yVHpRVNT6zfbs4K6udaSoksk8MFAYQeyP9dGjyWJxngV",
  "key12": "5Q2is6mXhVQpVuMRvXjzer1UzKiAhV1MTYGQQCQx8scATwy5EsUeGdkezBmsLSE5zqPjm7MbGF67YvvB1aaXkwBK",
  "key13": "54GB6X9cx1SFu7Wv42188CBDnRt1ouickdomuKSRNftX9C5ULfipnnEyA91uyLu6NerrgHEZxce9wsXmTJxnhY27",
  "key14": "HvHQzt4DkxWidT1DuPjNi6WzczdqqmVdWsjejK4jnYyivBhZujcjeJtNC9E9T7Hs8PNhTs7vCAbTwxYDGnguGBV",
  "key15": "5pLyBHAs9EvoRo1437ysZdJWQsCqfe4AtBtacDhnEPvdvk2ZGNbnXkoo4gJ4LsF9YEamsme4eNE2nktS6whzccNY",
  "key16": "2aFU53yvR7JAUaDdBz5UJCYNb9mqYbozh3r2CDJ8RcNPjBaAQ9QrQaRTLRvaWSuNR1LmEUaz2V6AhjfWrDbDMWEC",
  "key17": "5aDrdhRFBMEBxyKTHWpFEiqWmvK9LHrUoLU5tg91geGpxNcgyFWFmcjRKd3ym5knFyqyjAf6p85L9Xm5Hx1eQmdw",
  "key18": "5HoSGbaWNxSTf9xSHfNhkV45FVxEbRDtMx3s3d7bs1JW4YH9N6dBL8FcUWwMTCNwEa86aMTU9Cya3jzbGZAq1961",
  "key19": "36anXGgxe9XQawufouMMoKFRN8FHa9NMYyXFz6BHZjQx291DKrCZwrRaYmGE4tBFUJLgyPXBdgHuQMSTfygMTnCR",
  "key20": "RFU49xhydTDrPw6Jc8BjMUok5VuzZGNsbQf3cVBdBjoEYi74hDoBGvo8FF48MvCp8bx4qynEWtrjr2pPhLETZSV",
  "key21": "2JrHMrynehx21rccamxu8b3DWUWXCoZzoBfLnJv8UnZwHBC7RXufNspwsR1hj1RkdhRE112fyfdRvGDUkkhqijmJ",
  "key22": "2vFdfW43rpExEjY4JVU7spoUeSFKgG33ZnRbuFDhr3ofLoUk9PfCGRTUu6tu4XhUDf6Z3TFVY7BiZAADG2CYuWTz",
  "key23": "4LyMZjcoahmEWdesuMKL4RGLUZ3XuUtnMoxSe2RsKymBRbHLXqojFDozmtdgDxDLRG7wZffq14ee1NBnqqYHYhTY",
  "key24": "2PbSbEaPLzcFqHUAFq8BBR7emBZwk6EdaWmtnGbVLHyrLWc5UHZvdv6tkkPdZjZHdRaksVczyNKTCUPEZLob6KCi",
  "key25": "5BVemMZP3QQwfiJExukgNCc4VzXxTXLSxTw9bX6ADj8mJejhoEvuthFQuiXnLEtrwoQEAH5Lf8JAQUMV5jFTGSLz",
  "key26": "4JkL6szSiefcwa6KuDNuu9n6ZQY2eWV3AyK8Cqr27BQ3jUJX5p7GUBN8n7vixHP399Rw1w6ZcD8SJCLj5R37Qkkt",
  "key27": "5n66MRwByYnk7LMxoKsKC7oGMD8zJwFMeaBwgcHCLXk9RfxBbizL7XDSgTvoWYSnjSxeaXHDu7ePfCrbXjHnizVa",
  "key28": "2F2Mc77ozaXHggzYpnNVuUkMciM6zCfz6du1ipJDNmanipK54cRuMjPffcZMcPyxjeDfNymgnVcWpvYBNrwb5Xx4",
  "key29": "4GCXmX8pYQ9wqDhsckvXYzzCSAC8Eypt8G19iS7Q9zPzax5HqzMvTUe4pfXQuFVEhhVvCCgs41ginQyLkTDgWLjS",
  "key30": "3xjPyqaukZfAeWJ2HLc2gYeELuj1U5DHBA8G7CjhKBSFvYnaK1uvjiNi88NEjKX1tbiqwpM6quaUEFrnxbWuvnBr",
  "key31": "3x4dU6915ePd2hrMd1XcYLAEB4Lxi9kXkvCLHnnDkskaES79im8uC2en1BWmyn1Kjf8tY5fC69J9L19PQH8X3vdY",
  "key32": "41f7CeV1JpKHUJURAascRAAvkLgdyMj3nn9rZaFR3WcEb6ta2FMXiAeUhSoZgcfzT2v7riVkqiMDxjoddVG6w1ZY",
  "key33": "2UCGEbZW7ZDV9dankrHKVa2tUnXp1efHBHERMgDwpjgZkoNTmrKxZNLN8Uf6JnTgxx66r4e5QwpgiBxsK1eKgJgN",
  "key34": "4MLbcQV6RuES8ApxYGZrEC6RQ84c91g6uWGqoT4i4S9yrx8NYkE5tU94xod9YySiWQ8rA4cRf9S2PfLFbDy4c57P",
  "key35": "3KQ9De1v7iEMMGRLdi6zgfswZ5WetoLUxYRjuKfAUtPKS15tBJrCfc1CmRYZ7vqw25A4zKQF6CSZYNNwxicqUdnB",
  "key36": "4mVN355HWsusYWRzBWxaP9gUzkx4GaHjE9x3h3gJaB7LFSZAs23bLaNmTZmzAzaK33spJ8mdux4JKEzGrnRpPm1R",
  "key37": "4xnSRyVrhbTstVEa8Yg1Uc2E9pNbhM2Q22EC5ebSyhz5RoNWrouUqU4hWbR5iiboPYHPwcZn378V23Dj91futymT",
  "key38": "KArfZjAw4e1ikyymMCyqn9vbBKHSSkjKCs9CXX5cjFzZGuyuCAnpZKyeWaZCBg9odhDq4LMh8B2wutNVFvCJza9",
  "key39": "58NfZeJmTWD2u3TPesTnP9ACfXZEVRdu2kzo6KH94T3Rt4DnkRR9eKxgU8XmrEWuai3ZGz55uYnK7nmFCEQDZCcK",
  "key40": "4o6zJyMpGiYYdCrejbmF4XHKxrjKVmPCqYTPbcHNUcSUBUtD3mS5uhLCpRygfV9fM1iSCPxgCfWxYzE3FtKL6oE1",
  "key41": "2bMCkMYRvGnACmRRDPN3nSAgT4Dxt1v7TYXniiwXzJS6HRaUXe9yiXmMiUzdPDLMBkdqmVvPaJneQiQ5sNSzierE"
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
