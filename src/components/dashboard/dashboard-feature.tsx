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
    "5LUiBJYGRiN2tWfQcXmbC531nagKYHT11a6vuQ52wZBXz8p8MAokfDwcnaqQRPwRMNLwKtxg5J1ShwcQxg9LL7ZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23N48unLKfLFJo8Rp47mRneuicm63hse1hZrmWuUGZnda4TBnDKZUo5wxCzu3JVh6hkMdexPfhenobaYdKmk91Ye",
  "key1": "tdwQ4LWFkhu81oL6xmrWYUSNT37ouDHoNuaCAbz8sNLmy7naiFUwnmueunikoLp8HuefCCWVM8ikN9VjdMkMNTz",
  "key2": "W5BbxnsyZK3Fbwf5dVKudUGBMwjquGo9A2baxuQSvFYXedPzQUEreRCa4xvQHLUu84y1osPud6F23aoHwb9Menr",
  "key3": "ndVc1VV1246MLiHCZDbD7TS9d9HZPirApVhn5mHnJCn26HgLMxYDUHemrZC64G1uzWMKzhWcvMivQ4deZkjeRoX",
  "key4": "4hzteGn6dMGN2EDVviprMNY5jVvcevbre7qVE9PToi26wP1F17djbhFzqdc23sUE1jML6Lmk3k2gBgrqrpXUg2LP",
  "key5": "27Bc93pRPgRrBJMVWYKPgn9SZ7wEfwhzXLZVwBYhZw9dJdUdZ1kjrGJhS56CG2sC3LUHid6JRxuA6NE7zd2zfAUm",
  "key6": "4tXH6qj9GniU3n8jqgFKVpCxvmRzDhvNJDaA2tyWir2yz9QVPnosqFY1AP6z7LrWnhEvo39wuPvi5Xz5TPMfknWa",
  "key7": "5K91mgoZSJoFsiuSwBHTGBZL33vbmb41Ngp2gx3rPux25jGgQSb9JcFJFs3PG15FGgJuuh9CWRET8Q9dmeDVgaVt",
  "key8": "JrtHP2Go4fE4gj8zV5pw1oUVKjKpa8mZUB4SizXg8o7KDfHcBx8T4BSGwrQzApr9Q2gUL79zDZ6SmzCh1qyXx65",
  "key9": "65oXf4WeAsZuajrb2H1GZr9V8sm6yFq2WB32P3DJ6zkjm9XMFHyh56Yh2yUBruKzGDxZuXqrYi3Gf3RWXKEkTWT6",
  "key10": "2kinwXziy5mZdNxAHdWqTC2exxjoSSdSwqw1aEigTQrk8iBfEiv5XzmZaHfaMkVY7GT3qRKKof17vZiRyrPBSk4t",
  "key11": "43NXLxsxPWT3RayeqZbSwhQrErCS9nWmrNiaajHXEN1KdDy1VTVEGX5Q9wsHj1PJsC5WbrB6FSP3DdsbG9AC3hxT",
  "key12": "4a8iU7VnfVVvrVJjPNsoWh5ub2dsPB8anLH3mUa35Axos8GTDTsutKedKChNgsu3SfBaCs8fx6DbGDAGkLCsC5DC",
  "key13": "4taudw2VJz6RpZ5PEChuMRUiaonYv8LvAMuDhhXUgmbDqWRVfjRNkNJEHtyvd4rn2Xxx2siz3BfTDzBMQHnTQ8BG",
  "key14": "3RF8k9CVsiDqSUZGqYrwPUrtF7dD1meGRFpSbzwDvzpqSA9csCcK8oXPiJGmnoerxfWycUK5tQTpMxhpnB6ceWBm",
  "key15": "2AM1yiCKW9gJVerr8WP8s2Br116YwVRt1TbmSMAeaFdBwWiNVnEyvwjheJmJs4Tes6QfxYHw5LRa6p15oR6xTwfP",
  "key16": "4nayRSwJuyLmbE1a4MSUN27gJZqdgicAwrP5ry1vkVrYW3VEoTApbQs16RMm1P5edaBrPrG4SmxiT81y6YJmotYj",
  "key17": "3TQi2YBZN9Esbnj6RwDDXNLdaU39oEGewc3TjKfQJDfGXRwUWVYVF8Jjv9BJAD83ppBtbENYb5xa1vgaJdZCERa2",
  "key18": "5QpYLr4SiZ39FkCY375Ug17VqSHTStzQGbQ1oqyLiPmgQhtfQa2oHHDCBit7NxLo7iSWho8Mk6RfG8YWFzhrVjzB",
  "key19": "593mgTeXkgRrx8BqYzmN8uKnTdytCPMiBE3NpKcxgikgVv4LBVQLyvbUqDQ53n8VtbC3o9dsTCDRnJF9xxQFrqgf",
  "key20": "3HWeV4AudADE6bc9H4wgGjPGZZSbxfiGxJU71LDhK5XZHeTPuYriiDQBAMRCJfnFcCjRVyDqUEdCzL5gfMr9ypRW",
  "key21": "2NovzVQ6D1c58DbjgyABt1YLscN4MWEHJMQ84RvtamJkRWnYAaZTjkPbvKUjt7TCeHn1mBJyAmFuVa3zReNpp2RQ",
  "key22": "2owhf316vx5HsVz4isAHre8adKHDjZkdZAFPqW8hiVKY8YhQZC2tt19gyXFxfRkzxk9mQWxE1RLCYxUyS5qD8zke",
  "key23": "5MLTjCcmFLbb5SJhR8o88kHow5iHvwgcvQDzvoE7MyijsEgrAyJzKDjneEDSSrqTwAvXSnEgDqa5dALpesa8CiZZ",
  "key24": "4mQD8vNJ8RLyUzrQT9uRGwwCFEP6vDw4KhVKJT1ET1GqB5fxrzSG1nveLszKVDWrPg3pV2E4s24F8g8HCwHZXMFp",
  "key25": "3RefrfRoRWfwpsRCUBr3WLi5gskCTCW5ZhUCCUfE3oGw3SrmriiqTRpGUsQW7Yen6vLh83E6i6iLfxGY9hCcSzxW",
  "key26": "5TKYxcdtfjxFxVEWcQzppX1uj2TuMRCLtncAL2Wjj3MGngbugdRnQJS6TwuSzc2K329vPfF1uKGT8izL51SvcoYT",
  "key27": "5jWBak8Th2kdPGLVzeoEJEeU3ieM3DR5JqxQECsXwhRRWFKzGb5eHKDXJKXd9bsP6AGamULxRFKSh4R5Bo1pWXZC",
  "key28": "5zBNLuDcQh3hD1NvT8fPojLyJm3tp7YQCRCQEMXMTYV4JACKJTbjSfUpHY6bZiFy4wyxtHgUNnBKBQEwGR3z9Pec",
  "key29": "2G68P3ewQUmPq8mgu6e8emu8K7PPHJK3tZWsaKsYFwaD4eYko8WBPQdUg2LyhsVSndtfBEkfDCTHvTf29ATv57jH",
  "key30": "49hjt5RccyCGhN9oab55pQiFHSmPicV9z13yjVZWPq4j1KjyY9sUJRrWK6juDmQK3bKC5EooaVtt391jwiDVRMjJ",
  "key31": "5LsLosbX5gBtMYe4cAk4idhfdru2EKzZgaX5tTfH9JpneTZx83JrBjnh4fozzFNCdgAZ3D1BrV1mrQN5mvy4g2DC",
  "key32": "3gFxXf6mnnQrUoEfT9joJsHmudnuXavw3FabAmj45qUPdpAiZZxs2Hqa53NPHTdtqB66TdNU5QQh5kwAkXPNrHYB",
  "key33": "3FVVn2Sc1NUKW6hsijk7Fy1ozKMPjewtmo5jrwob2jGFAT67kTCpuzYkkyvJRJjkjMdRwFntcepKQ1z47yExyrMr",
  "key34": "5ZJWaqza4CbwVa2pN4Qf4o4CgaVHfRcENTWZtwecBvDzATriJkH6smX9WDMT8eKLA45Hen8mwJ6zJ5T2UVvSA9J6",
  "key35": "qVMhvjSv34KbRh6jdY3TabSbKK8ZXFXPM6vKe3ZCFna5Hz51U6Kj3FdFqd1xGVXKFd5exAJCG8RnbBcshQ4uTgn",
  "key36": "25v7kPJtzMQa6NTpws36BFLkRdHPXebwmzEk7KdEjB6xWHmvoTjnrD3A5iErt9dyLVLcGNLyuSiD2ifyMQiGEuua",
  "key37": "3kT8qzeZkCuRgLTtuyDw8B7fuSLgoq1WzNnziVfYb4xqKww9sfizvT2Heb1TjPUoq4LKuKbtJR8aX7xTNAaNmCkC"
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
