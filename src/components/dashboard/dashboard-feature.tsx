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
    "5AeSEhrF2TH9BPrmH5QgKqmh1V3HNL2QKXBxr9bRE6UQqJ65RChk2AWhu2BnYTXJrcY2bigfMBgdcUMBUeULjamG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CKor5oy5g7uixzPVPL9Evzo3xXD84Yqcrzj55FfwMHZg7KCi8JML3LRHDttirCfHTEa7ZDBLYu3eT2EwaK1RXwn",
  "key1": "2CuNiwDw91PA6j8b4ekfg5gKdMV5x7hGK7vBnDHxzDWSYxaZiVB49N9xpWcpkAXNHsEUaUXmjN6r5YmJSMA9GwAS",
  "key2": "35FxFsMUf5wu6avWwayVt6htQmxDxJuCjVvBVW2EdAwJTwAb2F58Cke84UkvC6vWnr1CkKnwqTvY7o7GJSsY4vsv",
  "key3": "3pZuwaSbqR4dU8vCJrbCC5hXBYBSZF3LygKS3pLkLB8rTLkKSqaSk34hFjA3vm9SvzuKGbcVNewaSUUS2ZRie3Nc",
  "key4": "3MKMPBhgNspirEigAzg13pR8kTWurQZgNPUV3oAG6YtxjDL9ZXvjrwZE4R3rv417dCxHKa4tLouwMa6jS2ERhY3E",
  "key5": "4UpJKeQTBieznDMVUN8o8fRA8QYvCkZjWLiMjC6gtk73XA9XYCuSWnuiChVz56VMk2eP2yyfk6hFaetgTH5ibn5j",
  "key6": "3cfKKZk2Hmr8JM9iAAmafEaid4kFYPRxhGKGWNvbMKPtPKR2GxBdqBQmfftaLFCS44xjUMnJp2sWRdxYcnHh7NP4",
  "key7": "2Gah8VTVtxHPt7ZPknFX6oc6pp9zSBn1sWaP2zADYfBnXm8MCAZwnNjj1Q1C2UEW9oKTCymp548ei2yZztdTbzTV",
  "key8": "bJHxjPu6s57XmXcEXz2eHzWvCRPLJVVKX7pZ5MVepPX6jhWE7hFF2SCYGVnJYGdefjFN3fkWpUgcPVZcLzgMg6y",
  "key9": "URmoFvwhqswj713NoSKMnyVcc8LWP8iK1cXpxT7sBb3N93shteHAD6unQtqTjwCZs4pSLxQsvxrieb5KJUkgjc7",
  "key10": "367nrQDNYAWeyCDuUa5AvcAQP6UoP5N96bpjXgPjQmcwrafwswhDgqURwoBu5toULpCCQ4x9Gr14C7kTASgxgsRH",
  "key11": "egpEwMENJg59u3SiuyjmBsbUGq3ckiCDrsehQRbcsSJipM3yKEBJ3UKwz6VkVtYw3KA8ZxJdQPC5q9AUM863M5A",
  "key12": "4gM8WoRCyxtVKJ9QwmJTZdUW3Jfm5AGFxe2GagCkm6buWks7oaH4p2RgwthCbBE4omxpkabYW4WNYPEJ5mqSp6fK",
  "key13": "2Mn1h4tTYpqMUuLF5HB3Urs7MUZgXkB9CaksMxL2ZLrVBXH1HaGS6zjpm9riR9JgpiX6tVdHY5NjQqBYW3X2r2TB",
  "key14": "5VEZhDTRq2q4Wi6E1STTGAUUYe6wEuPiZqAEJ8N6J6ig6LZFEzbzmdAe4oHWF2XyTHKsqc4qH38zHzb9Pad4yQnY",
  "key15": "4ZCg8mb9ru3CN8yucAoN544hmN37je18NzSiQ4YnSPL9Bt5RRbCbSes8oJ74M9dDYqAB6zVNwG2WWGuMsxNWLEnw",
  "key16": "hZt6FDH7xdYh4GzJsa4cfFuTGFCV3EoeGdFNPkMDmVL3zvCcLXKtvjbBzBMzZZm5Zcf69t9QhdDBpkrpMW6sgLB",
  "key17": "3fjT5uhFKsdZ9uk8fUgEqtYNhXRNzxxgKnjdhBGTUQWzcwHGiU8SPGFZ3tWJm6iKqhLkXtnvdeGmLWuU7XdJRFpf",
  "key18": "4nr3REpfk44HdySMRzdJo1t7pTQ5KF22F5W2G4XFwtNwpoikRNCM1hwAZLL59G42ihqF2d5B81ARTr3nPq1USYfQ",
  "key19": "46GGf65HD8xhLLN8DdJbtsc5HQYHXTXHuFHGYfJFxhcSF9HX7bMjx9XVihYzaJZvY96vwTKpfpfxZG6izHyk6Lyf",
  "key20": "2gaownYQFY5ED5rEkwEcNPgoXVyynjYcyToM6VioCYdTdgmNwkbMnnr41Ea7jYdnwi3576hpJDHmnnd4sqwBKE7F",
  "key21": "3Pbe2PHru6qBF8P5yBnn6JKwvkrD4YrnfFV6jo8yHc3iiu6BCxHHYK42XVwQQ1She7N8JD5jjHoNwEYXbwtyWAZw",
  "key22": "2iyQ3M1dYHm7m4Q8SRfeWUA7wEoJn8MVnvFTdNFcwzhvUn1CiFjaMsdvazFwY6ihxzUaH26Lu4ezhPThBQ6mxDKY",
  "key23": "yJTFRUjvtXy9wQyudFqL94RpPnZMMWy5vBgZT26zxT7uYNyZmQTYh9jQCyG34ir2P5NLx6Z8XxYAu4y2SrGpJKd",
  "key24": "5suJA6XRM8JeBjhRHRae6mHtpZmJLc4DnFrgneatmL2ftVR4JovJXi1dRASZYVs8YJ3f4HT7krXewL8ELbEtYuCA"
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
