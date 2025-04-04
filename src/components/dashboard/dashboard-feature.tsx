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
    "27NmPvzusTNsxQzJFsnerZY3HAgFXwawzZcVDzG5c9p8diLydfQ9BZeiJqmVRRGwteBGMwQf1pCqervgwCy2JgCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LbnVxQn4v1p7fBptRLTA2psrVxiLqorSkNsDVa15JYvjMw3Y8asH1J96cvMPjcTPo8TiruUdXhvjuhJLotrqtMQ",
  "key1": "5UdxjqR6zRc7mdBiaSrbriEUREQZVn1KBhp4kQ1HBTor4DdWzBHrtBXjTsCWGDHsCRpvzW81DEyLFbtWkCKACuKz",
  "key2": "3b3S2SXdcbYVmf2CbFWs7oYZqVUJuhQGZSjdA9zHeKHiuSg3ftRHeGcVuR7XMqVmuQFV3BYWPc34vJLc8SHcvG4C",
  "key3": "3zXavf652CR3xCankGcxmDsKswvPob6LRYzmd6oC6b1xCHEDeTGmTbKuogfjTDHgubrUAYNDV3zKmfwgLPYqZeki",
  "key4": "QeqVuo8EhP1FRxKX2ciV6sKxauZ6dmjQLxuxaPkiohPZCUAuR4udF7PgxFdei5653GQLRLbHaS2H783SFByRamp",
  "key5": "5bf33JpVYNj6pF3nHCHxiAKtEfRbVP4DpPVUSSkoBZoFXgdp7zQn1tyeYHXcC37oDJ3P3BtKVf3WXmFrAgSzKGBm",
  "key6": "4EwFiTGcraHxj2mwVGoYwEnRen5byCiVPkMbtnTtqhiC1CFWShLSUEToFmj15s7GCz4UVep3JqEJHPWGASkhTqty",
  "key7": "5TRXf7PbhFfnRjasPJy8HrbXc6pGgSdFyboYHd8B3Y43ie51KeK3AviqzurSajch8DrwJqeyehKGRVp6v8ebxGrt",
  "key8": "3vdoEfdqiD2EcAQxS7MZvu3y2w38QZKa9s7Wbqw4RRfeiXxBwRUYxmz2EqvvZKM2mPXAosNBKeuPXkHHY7rg9tu",
  "key9": "5gNArGvgdAngxJAybJoX9uoavHdhpypw2j9xYZzozf2gbbZQ99pn2KJjEQZfS8fij174QazevF4j6aN1dXTRL7Dt",
  "key10": "2Moy8ycx3jeYVHuUftKgCXHe4P4Y8iWDoF8nUMdDZsvn13UBdKpNrVfBeh4m7FqQBAAyRzzMfKaNYCoo1SBBjBqt",
  "key11": "3bXspyBYUH9Q5KEyonnqCfQvw4qM65YRwBefHAcBV1gvyx3B73xKo1dv2FJpobv6VSRt7xj3z3ZMpacw5qP7kiYL",
  "key12": "2REBQYmEGxmQMEpDZpUDmS2ZarYGFm4LvsSmKR5U3vUCos629Ys4skH8f6h6VHB1JY59FggyJdvsap8LVr7BF2xP",
  "key13": "DRmGRP9yvaC8qKKDfeq9JiWqqR15csHx5ihjJGZcnsZr9dJ28KGRPonCofXKfdKAwUD8h8XqjC69uvuudAoZDpv",
  "key14": "2jMFLZ5Qfenr4CbGntAegXfxBnrG9bKvrKwfRzfkJwqCSPPcyKw9BqMU3twcwuyNLR2vjqd2XzQT1MHzjw4fkRvU",
  "key15": "Bj6ddBwD3ZvqxWzWfoWTCnYEwSzjVj2B7oZQE1ksswx9Zj5gkQE5JdK6u2SXnTUn6JBaGLdxKphTeSAVsVZDE9x",
  "key16": "Q4nz1Bw5xoXkYD5yNpw3M7owYxYTVPE2L66XZAw9UE34Q1kP7b3MoyHHTKfggGCrpmniGhammwNrTen2oc2Uhmg",
  "key17": "4NzsnnSu2FssDqJdyfDBoefBzWNaGhRpgMsFQoosubzqqFNJ46Q6WUHrL3ZqcAP5Q8BbZDJuTFAjPJWe2Bbubsce",
  "key18": "58vvhqj2p8UxSQ1io8UGdgZNHdfQzhbdt3gsrPHbiVm1DaZD3TsmR6Hky2PV13HK8rcDDJ69RoDgjBCENC9cFryX",
  "key19": "S9mfDeYheEqjgiVxkR1owHz5usxZAnAFXqEiGfLvhpx1py5kJqR586ALY9AUKdQUPbKhBZHN7uEA9RaU42189iY",
  "key20": "47EtTfESokSsnnvMgtFSKVqxuWAgyiE1zM4Er5gbhaFt2KxvkiuQmhmHSurq2FYRe6mSkTAmPHeJpcR5G3YsXa1T",
  "key21": "RYi8TzTccLC2Z1rui4Po9obdtAPh4LncmLxDNdvhYx9QZceeKnXp8cVApnoUEfonczcyoo1UUtKH7X1Ehssk1D7",
  "key22": "4CJaBLyxoL3yxyXrgigPLJSHNiC6S9NSbGMTgxKypRLQxVy6WZ8Eoe8ZHPAEFrNZ36W9grFctKqfdGoRdHWdVRTz",
  "key23": "4yechZakR4Vx51y2oAcVfQhP72CoweXqTKh8oJ6MSmLRnVaJnKiAtjMEbmw5QtgtpWt7sz13tRBq5NCrJeExxWPy",
  "key24": "CUXP9zC171m9f8SXd94Ygjp1gC2PjMFMsPZRYrCEC4pYMJmyx5XGuuqgK2wgJ949Ap42VCjyc53eWm95dgvnair",
  "key25": "2FHBEXKeoxwiWYJF8BV9yF4JbP3U8PAzTRB3SMDoEL11MVivmhRvespmJdNKjXME6Sm8fvg8E2wJMwwJQYpEvMDh",
  "key26": "uouCGHPARyGEPGK1jrkZmLEyg7UW4Prk9NxihRiK9QpcSUYhk9KmkdsS9aTH3BW8w6SHSZYPaNKVBE3y5zw2fyE",
  "key27": "28y9VrLcD3L4494S3jqNdozQwt9EwCzLbwyAMLnmrKBE9Z199wBJ88bee2NNsNT4ELYHSi8LG6XR8VpdmJkfu7kf",
  "key28": "5UbG6SNZMr5r4J7ASNiuZhPkKeGvRRzSwgWhRvLePnnCny9k9NS4FcCgLWQ9haVeSWCMUyhT9CjQ9r4EN34JDpF"
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
