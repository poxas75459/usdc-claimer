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
    "5i1LZ6kUAd38Cvv4iBg8AjefWbWQgQsXTcUZtfGdAb7AZAeCppBJDDNRAtzGdAWrSs2sxYzz6pZ6F62tESnrY5YG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ak4ZXW5MbyuqfKZhuNkMASpjQc74D2EzCyR9b6eQQbsaXU2pu7mVabBaRhi5im3qujHNfXChiTMgZa1GV3my1op",
  "key1": "bxPoL9Fy5zygjG4uHxM8dm1qwya3W6KRrAgwdYf6V9pE13iH58mn2uoXvP4VNVrZc5uK479G6QMErAFUPXjHkcP",
  "key2": "5TzrQw6iTCFViefk3wiVqjmGZLyVWRxCjrBWXjv86MBnW59872GHsBx9gFr3Kq1GQgFWammPTjpdE8rtgTfQDEJU",
  "key3": "26NSho39cjCRLDa6JAD15U1nEMdT27uzwugbUwssjNRxdfJk36KLusEwf7SZsf7igpSycUQH4SDQoNvpMpiSHYcZ",
  "key4": "2UtS73qMxJZaVxGjNZMhKSfPA1tbFzaKaqKUMMLFueEjgJtBeMcS4oNbVBLvtaaZu3Ni6W7TbZSZNYQTJMW8Epgz",
  "key5": "BcL94eLf8s6r2ywmCyF6SsKgxtURsPjqvYfCPBqvgvoi9L5FnBRKkWJCeuaioqAkvPPjMX6bEwSa7TtK8tFU4bB",
  "key6": "bb4RfNpqBqq8hHMHdtUZ4oqiF9La3VFMPXrHsAGKg58mrqBTvwrFxUDATdc239kExyZ6eXDS9yKBqsFSMfPNc3J",
  "key7": "3iK5MXj6VPR3hHk44QwAohMgSQXqJHcTkahgFwLfqETS6BZXHfEey2kVhAhfxQwEDudjhspyviH1Wr4YqsJLwCVQ",
  "key8": "3HQ23CVgxw6a8cCt8oLjfp8YYDAFGtRaSwJjW5drLHAnV1NzCGd5ogAVNAcr3qf3peWZLJYYXnSgt7qMtyJZt6xQ",
  "key9": "38XjGB9cndPSCHVZwxc3Nqg1DXSibUfyN1QUuCtioJrpDNbHdh6FrgPhfqnDRoRvM6bZ1MEkLsKorU5Vd8eBxr6C",
  "key10": "jfpYaoXp5muTEZbX5nNS4B7bCSSq2DY4GZvpFmFUN21r7soa1PNwVoJhkQhMzvcD2UMPn9vD2dssmbRmDLvko5F",
  "key11": "53jQnUYbAEGtdgtYWBMSJCk7TiSYCX3axp9zGbsuzT4uDzcua6Nyh3YFjZ32CG9Wey9s7L4P1ZuGcjtonYvfMiRP",
  "key12": "3c4qtuq8n9k3f7awdY6N6xvEuSjZSkvtPWLm5w3XJSfao5GLZ82QqmUWo8p67pHTSsyrHsMEA29WJZhEZRxr12RY",
  "key13": "RuGFAtBrg5NPyWT4eFhgeniCvaR8qXYYXzpT8xmWmwWDiBK6gPwZ6iPtazu8ADHjmJvtnRtsQuVnBBredtd22WT",
  "key14": "5wBDaXN8gNnZqu5h66ogbPT8oRP8qWRLnYR75wnfw2MsboDncEAVqQPEQsbuSesUizH6z11yM2QoUYN1a9ZgQXNU",
  "key15": "EHcNhnoTicDvjRPQ57z27BdrYagMq31KA5qcoae1CAJy2x5uthwSiB9AbnbevEhg7SkAKowtEtHBmZVUDYwjYtB",
  "key16": "erZ7VwmCHC8YZ5Te3rLFM9HmKumXgTtY4Sk9qJKNXvJcnmGScehHLQVaRVfML8oWbRk63YzuDpPrtwyybCkBo8D",
  "key17": "2CCQDxGUzqLYBKpX7viebS3D2ovXveMPWBXKyZpmd1ZGHfbG1U7u4efCRHWUAPpsku9z82rAkpPMjJjWUkNGWntz",
  "key18": "2aNiDu6wrim4JoERGwee6m5MrhRbLbtH7BWCeDCus33P1nCg7dXonY8mZ6dwdcXgpX2crszwERhdM6jWWCF2Q7ie",
  "key19": "5NkaBznXNJKTs7gztWaz6BSRfhiX4RavwwYcGMZiASAfQFe6D2eXBphALYufUraQArLczaHqxU51XyiwmF6hxnBK",
  "key20": "5KaxrEqMuYrPuT3aptiryN6Fr2z8YXY1Q7x56EJWT8vK8zyAknHVujeavCZWnAVrTwrjPd1tHRhnKGFQUftMZ9T9",
  "key21": "2azD1ozJadQLhWHgn1PdYq6Y9aV6TCqVWK9qurfJ5TQUm94R3eoHTksCirLaLAerP5pw4V2UpMfYuLjQAv3ZvyEt",
  "key22": "3Vpet6tCUVyAv7yapwnNngQzMaYmjyL5eFCN8FqYVbg5JQUqHewi59TWzNaBopwvUUZnKaWK7ZXX6FianG3VQuYb",
  "key23": "5zKuewVXw9KttEvPoCUWRXF13M7buiJJaDjtWGa4nmQ2LbKbhyeDUDEEZw68NJ7VmmtdNbncWNafDgCN17W4vGGh",
  "key24": "Vya6cm8LsKACbBiLu9jdfa2GvxbRBUWeDYMNowP2EVigtZqDtd2DKBNFj2hsYngDr7c9pPdk5ndLsujWmWzBYp2",
  "key25": "3dvsHqL5kcFukdNvNY5z9hwmjm27HHVBf26Hye7sHpR5orBQ4VLaRqJLZfLgJTjG2ivAFsHLHKTJ5GFURtrnR3cN",
  "key26": "3FoC5Ne7sAgXw5B5RRKkRVM1pJ7qjnegLZqcotcDtnqRi8MAPahFofhe4Jwm9mbYGgtxVpSnLneaeWkZqstdYFKf"
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
