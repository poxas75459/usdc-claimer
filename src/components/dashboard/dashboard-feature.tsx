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
    "3URBFo75ehQbJeJeG47qNiUuruiRe77uoQzmhUgyWZrGp9ac9mtAG7sLTaYR8jsECVsHH8GL2WmZKoRHXYtjvjao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WrcpRLx35u6zF4PJm14U7FbFgsxGhjabj6QxwNjmVqpccq7pLbv1HHepyFnUuA7FEVcnF3YiAhpQDh6RQPc7Yon",
  "key1": "2hvuUxTPEZVZkSfWBYgxMETNtE2y8f7wG7k9skUeWmatdEV6vBQBLgYJA9shzEi8MceEMTGy68xyA4Wvc42xHKH4",
  "key2": "ggw8We1YVJTisoMGDJU7o8FfTqeWJiVxTYGbaScrMBzgTqvrX28rwywX4BSeXz9CQNRhpdjdLu1yQuJbJt5cZWe",
  "key3": "U2AzokuJnLrBzPhGGLeXkWWtt2MkHszRAiYfDo4ANN5G9DBEcWqs2sPrAmfCGjVAkb2TQidXjRT1gZj2qEGzVew",
  "key4": "4m7ETqFGTrW7fSssTxCJKbjBZYzZPDP3GHq7ZyqboCesrKKtLV8YZwSFTfN4VSbtkr8Lovm3xQQ2S2bFut5hDDFk",
  "key5": "2BydGoi9TNCEqERyP9jxWvz4GtkgUAbVGwV3rvyS3hfVKo7ZYLCw3sFXGa5uZcHeP6mtGDHv2oC8BpyeTFkzAhE7",
  "key6": "2JcytuXa8XyJwGtfFrqn4myQM1L7MHwEuMMFdo6RGZE1VUCCzaWDULLSaDjjrX8X9obQC5YeBZd2Xmh5okJ2K2ZR",
  "key7": "2nyzZucMLpG8rb8QYL9in3KCTb5M9thN1v9eNVA57V5KTGJrWPJUsta1JjGEdY89TH8Kmta8jpNDaidancAvtVhX",
  "key8": "3FvyXx5oeLHbi9tyZnkqpkR83Dz1Wd1cHJjfR7tCVmc4sktuxi9tBqWJyy62C5dRqKrGJizfyf6MNV2J4sb9DU7T",
  "key9": "4g282MCaSsDNbXTkeCSdsq8mYYQsrRSKwnvEMehnhiQvSVyFvV1GdQCXMbd8mxKLT7vuHHBNRRcAwQxRupmUY2vm",
  "key10": "49jsLNZL7AwRkXpUtWTEEvMyqEb5gRmGcg1jVD88scTkZhUKyK3TkgEjA9ufkF4kEPWd3Rpnn8dhPLSe3G8PPGPk",
  "key11": "3aFtKyJ8rRhhD487mnTJSrWBrrYnDxrViQiTmqzriR6ph31QxT4sernBa82NZ7kWQp7WZH9GktXsVFDyp4cj8nyg",
  "key12": "3HWycMFRvqf5BH3WVciXEmzencnkkvCMN8V5bDAZexTYsbEsnB61PegUZ9BSANXM1RtyxyvXREQ3kxKts7nP1TbT",
  "key13": "BQVy8F2S6KqVeXno1GYsRbde6jXzpMT4eLHJwUHEvAjeJSFLS56Xss1ViY8JE9SykETbhgmYsPXQLWHht9qQYA6",
  "key14": "24qcgwDWrj61CoLmG4nE19s76cMTt62ohrbkHF1D9XnAwd1N4pVoe2j3gXmhgoTAFnhTUrvnZcfe7h2vA7jNxc1C",
  "key15": "4fYq2KiPMWUUALtyCpWtwALouB2umLHSDmN2jojBEDNt1JSFVXi1LYckKMZuP7B4rP6983ePjP1ZzMSv734WRtEp",
  "key16": "2SoDJQymMrBmNHQbxrejAWv6pdyPX4RniPpxTqhUwns2ym49oR3Z3oWhhN8eouWt7cdDafBurKTLXmmQvedDjvmd",
  "key17": "2cmkh4nqe8jxfWX4XVAjngMrQtECwSnFmz6WN8JHv3KFUJhxF1JMjzeZLsJwDL3yB2KTxZZLMLqBPDPzRvNpaMdo",
  "key18": "3JJTYq8qfZXdRAuKybq4pdqcCCamdM8ErtqQUPMqgR7kX4vZCqS3QSjeDTBWhJBUQF5kdGuCHefNJmFjE3gcddaz",
  "key19": "2oTxrpTCAMe73YsdKWEuLYUGXFx4ai5MzjgVsCS8vhCtTkYbNK9xXj446pZWctPhWmRx8uJpp83XNSbgEeBXQJgs",
  "key20": "3CLrL8ePhD4LowSCFavrrpWzLgVPLw33zTk7NE9j74q4oazNtdQk36whVapfghDASj24CNHtL5YKS1R9ZZssoFpU",
  "key21": "2SexWygUqqbkwgFxxb8X8Jk8DAHV3ALnXyb6FvkTCEyxu8wveJhsti3pv7Vz7r3Qci45opxB7cYthQXpMwdPe6L",
  "key22": "Wp4yrwwtBzQf2pFhbMceJVcS9dTTQHVzSa3uZpDyraqNULgSPSzNsMbHWLJ3wDMzpUZS4cxFZ53VMC6b5vPACPU",
  "key23": "58FL4Jg2jnM3QbcE7pjcodJtSiK2dE3fR8euXovkG2CtcgZLEGnj2D8EFNk5TvLRHwsiMFngFmF1ztxdaAgv3o7k",
  "key24": "4dPehzotn7DxX5QgqC2LvfdumpXot23HGQYCThYmNLuAaRZqHB8CYubogwrugYacS2RZ4emS2j9wpB6ix5HBh4Nu",
  "key25": "58o4LUruFVuEKqCBXQWra2VjDUZgs42zqFVUTgGWy6oXwAgQhiMtKpJ6xz74CcUh6XjpJacYgXaoFxomwGi1RSei",
  "key26": "39VigaG267PtiW5KBWFGPVRnbvAktDxB4BuTMJf8VDZHAmGZa2fX5uNYWgcAnRU91u6tGKM4BcaAXrniZJRe2wqk",
  "key27": "3wWgXytzCsRSvpgdRSeAPXKn8o3ZfWgnyV8T75xbtfDuhmEAfc17P8tG4QK1CnmUaVUYBAewnqT6mcu9aRZ5s835",
  "key28": "2GXeE5dQcrdMNreFswPNzddFZAvEXdRbDB5JA1ZDZQCXHGJ1PcuHiAU2bX5oWxNvKxqD7DZPHHhK2t67ckPnjujz",
  "key29": "qBsRJH1deGDxRgg4SnpqxCByh1aD1XuHFYFfmvDPKPu61ZNZqrArKi4gmD8LPg4LgYPPdbLiWUYaBKNhF2C2qKS",
  "key30": "39k6mLiWvmcBp14mRZeoCCQM7B3Jc4TTiBYWwWu99FTvko8wowzpkRZJBTEf917a8zFJEWMmu1sBiHzbK2z8mc1D",
  "key31": "5P9wGxbErzi7yVyPTt33mfRceEQPps8BjyJuC5EDsswe3GvnVDwACNKEnJ8YNBEhmTAAo1135P3THBRVpKbBsAqi",
  "key32": "5XmYuD2YNAegf1juu2VWnkdCBY9moTK5rziofgGuWs5evc3r5RFWzpUaGjGgaH5uu9BDZaxWB259ETusG85Dj35Y"
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
