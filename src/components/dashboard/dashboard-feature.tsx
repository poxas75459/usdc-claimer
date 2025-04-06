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
    "3JRWwEBF8BH6KTUU3MjQBKfHK3rf1f829S5XJ9cULhBiVsQLZHFHZjFtE4XiVJvqZJkUsLkUa8iYCibWEkswuY8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hruUfbiEuVbXhNwE37bo1yWXurXPY7BZiZPqxoGGk39e84kj5KNVkRxbhiR4CuoH1GM2axL7KWrkqXw97aE34AL",
  "key1": "5epVPdg8giTPJ3v7ykQpCY1Sv3J3u62NrzQjtvdxbuzgDZJwQD6mTrVJcYyu6Dw664sjFHe5Axrz3bFB5RoCQ789",
  "key2": "2QLsQQEaNjweupCeDCy8SDLHzwMFwCdRhPE3eFgyidLSAqEAbMo52CRN5D4TMseEjvniiQUBFzFd9gZ8Ut69ZaPw",
  "key3": "632FExpW2g3hTUzZ44oYsciUcRuZ227MGyGCVNEtLKUemNqaoXErUU2WLeNrtvw9WqzRN3nqgmUxeuHLrPw5vh9o",
  "key4": "2bpk4yKNTKU3Ts87cRfnXwn2To6TvJzbiwC1Rn1Lk2a5f4sFRsP8p9cNa1hCoQBnpEY4dS9PnhfHVs7qPEwuhCUE",
  "key5": "4MksRn2bAYt5iQRyvada9qeqcDw1WGQcp1GzexaBy4rgxPWJyXPv6zw6GqzGcfFgUzQ6rRqe4R2KgG91BpHebgSi",
  "key6": "3ENsT3vcrnphfUMMhWRjYzVoe8Xrdtn78EeYvZVwGTXCHCEZtvLBfpPMJGtSt5vLqkvbq2VVR6iCkvKJQteHPTcs",
  "key7": "4UN8QE94tNzmbqaikCwAKwcSF5vPxx7ypyoUvgh8bY1oChAAYk2oK32a6ogBsAsLb87Fo6mqx8NGPc5QkS6L51s9",
  "key8": "y4fzx7S52EecTRaLmyQykyS48ViVqfzHLKL5zFWTu28jqbQDeowYtXUmXww1TU9ozkSc1dzPrTzA9t1ShkUJBvY",
  "key9": "UGapaxo74BbHy28qxibgHnhKXu3uMubd6ba6SNTiGNQTKZU2WPMLfuGc6uC9K7fCQKzpsYY9nDedNeHtY1F91xt",
  "key10": "2pchjU5Z5NRKSBYH22GG9ZPqjScu7jjVNikmqMo32V1QdgHjojjqKEGLrvbf1UBFWhbRsUkyiVhg98czGXeuE4mo",
  "key11": "4Sur2QP2x84YfsLAEQaUqNCZ3rv7k376sVeKQJ6PpZgacsGQGgvfXwvaFL469UesrMip9VKomdov5gXYgWkVfT3c",
  "key12": "FVQkTmHo26jVhaFg9QhtZ9H3kvSUKvxap1EoTijhDHMhtYAE61gLSzt87zjacjRjyndNootcsiayTFsCYeqAcx4",
  "key13": "233LxJ9sALW2K5WjMBcLaEYrZvyPi6EDnkscKdYLWcDn1wBYz66AR7yKaoxk912YokfTX68GAiXgiCr6zvcggDoR",
  "key14": "5yuEyesc5vLB1617FiEhsNQJ29h9CJUZVJyuQuVZ4QjJWg229tDtcGg1wFFYDhP7RpWJ2r6T9EuDfjsYQTXuShXU",
  "key15": "2Tbg2iKmA694EqGWPwqGT9btwyFe93p5TLM8VfigBMszksdLyMvwrS8PnHxpy6Lj5NWkZnGgf3T7xRwvY6PiyVa1",
  "key16": "2bsH1WfDdxDF364DQofndFwdeC5FXTgQyvH6Vfifz9TzZrAk8Cy43acfSTvBsAH9mSNFpJEedES7X6x5qqYSzYzu",
  "key17": "ZCZoy4YsWvAxLPAwkAoYGMXWQCgafY7s7KDgCogxkJvMXkeGRF7ZXyvwTRhFg4fhe8jqzwpp3KVFpxDAtkqWd1t",
  "key18": "L95vie5wD9nFWsG7VpVdcL3Yck59EgVqMVc5A7K9q2GrwadyMxpiVuhijn61TwsF5cwbET92rvMsjeCEnXNX1da",
  "key19": "3os5UDM3MyUeJkwvCsN3UTdBENxQjtcSfZpcDeoRmjibY9F4ojUyWSrqAiJmAq2fpYtGtPk76sKdTof3XhihjyVQ",
  "key20": "5eeeCsJZvHgCBTtfXjU6X95Zat8GnfPPZoKBT2wLFoUKt8MjodziCwETtKTxa7dY5Zt5N1yrDLiupFnBSuUqH9n6",
  "key21": "5p2HsoGeWKXFPGbTiNjwLeDbA9WEKxpyuaCPinkPgZyhQsbABC8urtbgXmekixeUAdXXkVm3sirdgSvJBA8D2xMm",
  "key22": "5hSfRXimGFAtRF1eHyxPVRmCTEj6CvYi5shAeZZVo9gqS61u8ANi5AybGT5RYMk34cLLyyhCUeX3o49fuPUakkZx",
  "key23": "2ko9SeFZx35ha5dDJjtmyacKyGM3iVgEtz3W4Pq41xWZAePqhRKJYcn8fT2SWQmPsA9PFoDXegh4GxSeaHCcWHBt",
  "key24": "2ADCs19iD4dzjEontJEmRSmXNc2NHZyJvErH7EbwFeSV1Cce8Vm2MqCMKSX6r58Nz1QcMWCjW9VXS2xyVtQzBueB",
  "key25": "3rPPQDWba9GKGZ5A8tMX8T1tSPcDQ4vzX8JRc89cHF5L2UrrHnq98TWcAXEVGTntm1JsmYrq1J5s1UFsyTfsMyeE",
  "key26": "3DJm5QdgejbbKoW5g8YyBMbtMtShmCTVbRoDgnLz39cEH9ZeLEdDNpEedmNWBtm7ZTuJELnfmgNZjrDbUBn3VDFU",
  "key27": "5vKGUgGpf98fMrxs4sq1mRzWff2UGaF9bLxsQK15nKy58trNGJHb26EUKrs8nEDBzfG5R4nchw1jNxHfb6wkmWSK",
  "key28": "451NtKjpjLUmSjkx6QcDwPFNjHAbLZhEdXP9azdt1M3Jgm76h3DeJEUoD3TzMsQox6b4yjNvj3iz1LXdUx1gc7FT",
  "key29": "3MvXS9gnTSYork62Fs5fgDATJFokSrZhxLap2FSw9YVPxg9yFhPQ81oFg5mTtnZ6vPQuAMN1eDC2vTLSr5LddShp",
  "key30": "2og1joqdBaEtPaivTi1uGx5hC3TiRYDhYtL18cXy8qfZk79GBj6P4qRbknUkNwZdotRo9RtHQTsidq499axHhi4M",
  "key31": "3nTakqxNaMdcAPkUGo9VjfnhLTPiHXDL7Zc4uKUTp6YZLCH6sWJYpHT6wvTkTMjBQdkMzTmaMdAoR7YWPB5WygaE",
  "key32": "Q7pTexxtVpoUr6mf8iLr93As8c3wrtTtYhjMHWVqjcbUHs6FscVjCmcM3NA8bAUa8L8wWPPRnX8Grknnvw5t8Sy",
  "key33": "4Z6KLhQpGSfYSpmMqSt1bEB7m2SJzDCDxmuESDK9bY9KwqEYvnfV4HHbpGHYUuypxF8yicnVME9GQhkiNCsXzXM",
  "key34": "4s8X2MoJxmz4KDeWYhepPbdAuvK2d1NUh6pJVVUbyEVdPpcWzwH6fyiJLPRtoSHFZnub3rBiGPySQtjh5t2Jk2k6",
  "key35": "4FzmDgjE1KxpLpGUqoiXWf11hVWcvVDjxcoL1ANc35hzPvPhVvSXdj4LpVuouGNjzyAXNmTWTbtYKYwouP82jkbQ",
  "key36": "2xucXKD3wtVZQfo3LTuqyfQqH3zKsjaLdCWMzRuwx5W62ePQ11xJch7CjpQfbPs6Y1YbeBJwv4FkjnwuESuCraYZ",
  "key37": "2DXGAqNVEiYxbQtz5AAxf86Y9RJMa6jieR53cXtpQxVZikpVNSrczyfkqRhTS3Mu5TYC94QJmXhakFQnpkC7rfyg"
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
