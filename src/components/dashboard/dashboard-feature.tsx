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
    "49kFcygMJAjVzwVp3UK8HZTYpgV7F4JoLfefAHfy58LaTX4fNqoCuTknUM25dYeapMq77egBpktsqcYKT7ouSxWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XkzCBu8c4VtDsFeXsjKaKsrGscuAKbKJXFUBPLY7ziGrzf3MVgPNtunobPVLda4kpLkp1dEsXvfwT7mnHMxQcx",
  "key1": "kjitP27LDPGcE14FyBm2dymdFBDSj6NjfpjGjr2Zrs5duALgbJJM4jCaBWScg3Bhirjii6ewb2nxfGuHDAsKaQc",
  "key2": "3ngo6LZic85Z9igkUtZnLBwrJseE6PMwU58MPTNsuMYYsYN9WCvfLMVNVdWZV4mUMPDudbTKaFsGSroCxEsesbTF",
  "key3": "4YYU4YMtKd5zs29h36BKiSD3tGD1YKiwjVV9QUoU9HDUhXrsX7SnE78ziR8UEXpWo5Bc9Jb2ehxSJz18ny8sviv1",
  "key4": "4QwAg5cDDwUM4jVBhyiGt9WcbujWehGdp2mCvfLDpcmjuQ28SUbiJHcg6g7PjT22UFEEQBZrSkJadwZv1aBDtZpA",
  "key5": "3jTRLdBVqiH1b1nAJkH1Qx7dEPUdJrFWWaiZ5Qng3qqapLwsUWMRWUnaHCNLcoDmR4C5L7EywUKTgsgSjaSqxn25",
  "key6": "5k7j1bjbNCEMVZAUixMgERzHAdsbLcXZSwouVuer9w9kzAqFdMc7bBdaJSBgddwRzhwnpGarfCu2fYQ9fRiq77GH",
  "key7": "4sjjnp1SoJvtRH5Dq89JFunUd9tLWPgz6VySmARd8RF6QXSFK7a4h57DDAtKJncWJ5cY31TuAa1Q1Hbpgx2Przoz",
  "key8": "26SdGzoXsVWg66i4GWtRfLFEuvB2c284QoTVQxSa1EiWeVvW5DA9ugD5FpwtXzDiHiPuZdMoNdc5pHArtU2t9cPY",
  "key9": "2soQzTSDkoQhTVVtiTUzdtK7AkiRrx3ZTVJpei3gDEC7VzYSitacKbBXXmfGVTQJMicuzL8NGxhomF9j67EKFEBa",
  "key10": "62DaGu87DgsCb5xhQt7W41M1XaGjrbyrWiMbgJJc3uATxQ2pKPXPQ2vkbxYboFucdFQhhX9J1bXhC2otL2E4e6EQ",
  "key11": "3xu6kEVBzgGKDyZQt81KhWbUyTKgVC4Yo3DfAS6pQrdoT8qm9QdSh5USc5rgnY4oBfvcL7HdSopeQyTBzxvW86DX",
  "key12": "5CcWdpGyLGh6Q1ZXn1VvwCzqgrwcQt7na5QqVeUQ3YCE99JT3verqERjmpxmuAhK6N3qh8ufDUqLuLDE6a5N5Ja",
  "key13": "ZiZzwGoQNmcmGthrWCHvbztKkeJwU94gTzg9uGmbks4ySeDx1kP2RNTHbSGxdyCMHLDTatvwP9BiZh1SGaXH9Yu",
  "key14": "64iDWQrpngqx3uo68AYuU4cnzmnkTjiwyfYLRfnnzUzP3o3bBGEDz26sDxZM3QtZU4GMoYLaiChW4fpevh6aV63z",
  "key15": "45ZtuZSaWyGJJzp4WHVAzJB4PDQeWBjJRWinRHHAxLLGAAzjWrRpW2EmYKvncgBuv5BVWkqWcJwHX6wjKpmHRtCd",
  "key16": "3B8LJosJj8Q6WSXXtYAU7fmsxbD64oezogQoisL9KoXRmYXwmo1H4MErcA8JLiAAMZ93BPSq3tDHYHKyjuRhnzWJ",
  "key17": "3iK4GExXMS8LxkRyNWmR7bEqfb3xRp8aE5Z4wuSp66Q64B6m8Z9KCGvBRi78Yqo1pzAqfQyBYmJu87t4gnumnXa2",
  "key18": "daLg55sqYGSTXqXW9f9cLYSJB4RrDGrQcAYtFLGA4hX72eevyK2ttNCdJkMuu7HNzJybFEsEwa2FR1ByL75Mbat",
  "key19": "753HYGSETaBg698Q7wSNNw9bQm4xcCP4Nt4DUCtGHRU8xzkf3hboDSPXeDtWjGDSpdPC8rq1UxTwHurwBb6VxLv",
  "key20": "3S6odSnmgBhPSHcHdYsFbHsbSVTJjngnREyCAB53CEHiVJ266kghCNyTjspcyadRvSVCjRiwsgPbZSvqmiv9o9zi",
  "key21": "4ixfSqLNQGyjsRT3CAMcFT9bUGw3N9bQPtE22S7v968AsKkujKHLTkPBd6oshfzE524THEwixQuRm25R63EcyBKK",
  "key22": "4SuY2jk4fdz37DcbrkaKqRhbBVEL9ZdU8fNbCdXkobELQxE915gJkb5WuAdyzGwVbJdTBac4RELTfEZMrj2yWdPp",
  "key23": "TR7zNrZ4WiY1bWwJMaR4jPo5DRYPmHss2JmsyZ6bypDfdu1G16V31tegrm8PY8oXgQVwpwk8DepjMKCDMNoZiu8",
  "key24": "21G2nreRU1cnir35eyf3hNknWowF3ZQBkGH7ieNWxRDurWxZpa9NFfhBVq2iG1ALXj2b8psgxvBEiFS29ESmEJKf",
  "key25": "4NqSFzr6THt1xTmPzPHTsAajymTEahJvbgzr341B2PoBrcL186rHXa1DSprrMKDWChixSto1Dq8inBhMboYxWjQv",
  "key26": "45EYu8HoDmnac7Edj53Mw5P6s6t3UqwTmHiT1NSm9PmJ1nQJYfhqxo6UqXGV4veoSqqUUkG9So9MBNfsNvKoVNv7",
  "key27": "4L5xXAut1SktgBbi6ihtCjbbFCFS4roziG9KcE7tirrErZ3hyg8ouRae1rU8fUe7aWfkP2DqU3hCyXQndNzk8QGT",
  "key28": "2ayZbgYFcQNi9GNGDj799i8SAT1pqpVBa1zcg1VC8UQi6fg6tkSvh89uRQZER55iNJyAeQtk3RLbQThgM4mmLtGj",
  "key29": "2tMqubw6znpEfL8W1fQ24URJFHr2S64a5LNVYXAss8zKxLbdHYy98yi5xpC6mqgZ77wpGQ3J3ympehMq4eGZajDC",
  "key30": "5YfDFQZN2fpx4tJRp7Y2MJ1cz6crG2Hito4rFY14mghWmad27bjEDzma2NWNNcEJ8preu7RHEdYDx6m5jwJLpPZR"
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
