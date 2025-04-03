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
    "3gtw75S2QAV2JhH8eVPAUJPUk3NwH2twR63wajkqUX9Y4cKKQtEULPsoacdVX1r3DX2eoiJPzR8239Ssp5An1i3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vALeE7gvSmHLAKTbGvkM88wdwfGypxqXYpMQXwSjThJBjUiDTsDvPo6ibN8QmVihBLFEsNdA3WgtJbXLFkfUuFF",
  "key1": "5bGxtPydvsm3U8LTtFJ1ixFLVwa5fMaT9K4owjHHjoPsqXArxVKDE6CJ9er9Dr4SZQSjKUPRxieDmoVauFZsaW3x",
  "key2": "3YRXLg1zV5skNitCShK6wUbUBzudhCdovTbyZPgyMpXor7Bm7ot3oYmHSJJ9DSViQNgaKtbJniNteQ2tDRGNeJ6G",
  "key3": "ab2QYXDgDjU7yPEV3F7Z946RgLjMpVybzFrptURJSdhheHpwLT7QXPpS6Kn3y3zg8Nb9Fr33cdR7RQFHF6KGcti",
  "key4": "5UCmcjjR5i52xVoxsRwkZ9dHehaE1Dwqgyz53nBHk3VdfDm9a8Szmx2f5iRs8F8xqCU5iG3sQYLwDpjqxvhZzFED",
  "key5": "S9tYzwS3515ZfHLujU9dJibZUEgVL5tZDp8NMKsUKahoqbgV2hA2XcnEjcaPjav6SXVXCCZNEzJKCXTHhoB3GVK",
  "key6": "fPyYhqohyZuv2Hgk6AAjumtmuiEnMdJbSU4QtfQoEY1CqPaiLvN4VEibnfyr7cmHLoCxbB5ra7kUKSEfcWRKCzc",
  "key7": "3p2eMTA9G3HoJ8MFLsxnW7dGFV8V4vRghWFEibqC9B9Sez1tP8SpZsdDQYJmjsgVVKjZXcBXM6pv5acM7MvX7M8R",
  "key8": "J9hWCmgEPQePH3U46VGy39CtSs2WHy7kjDxyALeut2dTYteKsCx8vtGzSQVoCDxcbmUasgiSBKpYvxQaHZBd7b2",
  "key9": "2wzZhJVoV6FjY9bVN9MDjjk2AYsGztr6Vqfqx7YErF3EiT5bjz3B36raiAktNBiWNcvsyQgozyNw7GGagJLFEzoh",
  "key10": "5Cpg4gUHPHusRpvBUPjQzvs2tptHoBgHHTC4hUxfxDsxw3fU3uSKXZ7j7Rd5ZtxW2dy9DgHZ6Qb87wFy5xsYJrG6",
  "key11": "4Ef3GJSYEnwrwFUYwtQg37LdkAGsy4jAU2eaUjbk7UpPRYvMUdEd4EQf6atuGeXVuduSPkvANBHxWTt7DpJ2vjPf",
  "key12": "4BDviYfizthGwkVcsJJKDJTQcDQwXuZMLL2MQK5cEptDRpBq9DLLFQEnPjaSp7D2JxRMmTzXSwzQSRn29KGNVQQy",
  "key13": "656JwAwJXWhpJQh6zMzCQLJkDb363SnpUzpEW6NrwBEPAbwqcCbsXT6zVntm4j2fKE4KkbmQZB87nb4qhmeBynrK",
  "key14": "56ZqNFan5rPAPiVXoAr5xeSsZtJ1JKWCvU7pKkKKB4UKAEuncLXorC1P2ZVLP7LRsr33eMMTfqrSxeG8q9qmddjK",
  "key15": "5y8hkD9FXdp2g9CUjuZgKYXgvTzHE6g2UvMj5YNtWNa7HV7hSChAtztFa4GAmBAg5tMAzz5d9UktX1V19wcknKqK",
  "key16": "5Aip9qGMWS4vCVxBPXYU2b1UrZsaZguHMyVThkYiZTaHdFTEjhHUVBtaeGrvMXZxMngdLrYobrkjqnW76KNEpkKu",
  "key17": "2eomj43pAf5jnZ4bmeYAhFo7naSLhAdiyU7uW1X3zeiswuCBPwPC6nmCJZ2dGwyoJPWA7qs4119bSdfn4dfZcJ3o",
  "key18": "3KbSaEfqMPsWRHCUtqJK5J8FhoeCuTFXFJtpKtU2RYHNe1abesKRbgMszEhsQ9hatmeptDnMxJtyv4yuSpsaSQ1P",
  "key19": "z1kdL9gJTdcat6b7PreorCH6nRdHtuetLfw6pY1bBgZ7aKCrrqGQcjhnAjmmbQLKY89XQzer2wTHdiHvT2mgE4u",
  "key20": "XtneqqyzPQqAV3L5JCkHfCrbKqpG2pP5uRSWo2uSLPpk5Jjdiig2aLS5SA6QDu2mgvg54diuGraHekUp8arNmq8",
  "key21": "5PVyVRkhszQMvJeDFRbf1Udks2V9xGW4Qx93yjyhed7Knv5ooVMgThNGoj2nR8xSPFzcBXjSNyobRX4YRgUAbqwX",
  "key22": "5hq6jMT3wJWvgGEedcPXtLgQBbKf4RrCNJ2Yy1ZoMqTy3Qz1tdE9BuxiKEu5Wa5zmthddLzxumZEGzcf5Jzrr7n3",
  "key23": "58aEtrWTynGFnAEuJhAmjxiJzq1dSWxL2oYAhDKkJbi4f1ey62nyqBd26L7YHNx9DYS6CTJgjsVnzgi36Cxrz18X",
  "key24": "2jM7XkMSCmuCpwQV4Y15BiHuzQ82dokBZEHMqUcBxkX33x4MvXKgZEchZzb6ggRoqMtQ46KLtkpf67ouDU9t7Xmb",
  "key25": "3Sjvi4QDjKq6LyDDM96SLdR8w6818XATvj68CrvSKXDbeZpSxqaamjw6azc4LeJcWJHb7Ajq4orGxyvdtfk1vdEd",
  "key26": "nQJS222tjuPH4Emm6DpuSEx6niBwMdx2HUMRhtTTUG2pBmKgH1bRh1cqwP4mWBcufT1Av9dcARQg5ftJ2adDXr5",
  "key27": "53F3TcZUYkQHVa6RxXA2fntsGwmELtg43YqL6AHztvTsAG46MkXfQhGpCEvMQ5XEhmxiD9oh8xd126dLiRgEEKm2",
  "key28": "4AV2oVmaHFKPiLYXUXyucLPhwDzhUzdPJ2qEXrNsLhW5KxmeRMxc8RBfEJeCV74DRJYvcm7u8tcHqSzHwb3ZeAe1",
  "key29": "5iCwTnf4nS1mZrj9thvn8N9PpNhqGwYt2PrJjaYBFCNAgkGjPTwq8w23mFbxpwy9oFxZWxKtFy2Zba4pd3WgAtTi",
  "key30": "5TyVjFb322Cw7HsPZHArGrzaJAwJ1WP3QuP79rdTtGqPdUQrJ1VgqSNLDxhuJgRCnGN9RFvQRpGpHh3EPE4kAFNs",
  "key31": "aRiZZx61HQQY4EUzG6tbV2y4ihVNW6WEh2vDWfjpJ2eo3enW28SvPvqoz3qEafcBPpBWAJCef1fs7CU28PUKSoh",
  "key32": "2hqxpAQxhvDNVneLVyo2LFtKi1bumHDRoGUFDfBcP3cBafxtLPhk58hu5zjoXzVQVYAiwJhVwstinfqUVoSSSXke",
  "key33": "2LuLGFXtURjTzkoUUvmnu6gtfY2SA9Dr1YRAsWTL6FuaMz5Y5pP56HdyEeWRYefavLcVGYs6BJagFqM64Lv2QhFv",
  "key34": "D5sxBb8GeBhqBP3YghdhXdwAxAhFG2nH6htJCE5b9QfBMxy8D6eAiLpzLdD1ptp59ipm48JrQ3WAoquvJsZuGMs",
  "key35": "5kB53C9HwJwBqQUNUrrvnSA3W87Y63vTzSf8wJTEwy6uePQuWHq1fVHmNdMzVLkR7yP1NNV69LREr6gifsB5jqzj",
  "key36": "62QFRvtqVyqiDiYr1JG1zEajhwNn6PJsLtz4aZQM7daAfB6XuqaDMZvJP1gYsR1sQoFThCqn8UDbRn2zMVpss2Nu",
  "key37": "4Hh934KHHk9PHXADf9759qyPULD8W1znHYzDh7BBeWsweEnnWANquyDqoGG51trBFFCSGej4e7futeQokpjRMAFJ",
  "key38": "2YdFmFLd4egd6MVpCWmT6VQu1XCpyncjgVZFjCdxngpGoTwcfEvz67ivTxN8srs2MuXyiiLEwTuSW8Y3CRtVpH5j",
  "key39": "mq2DSz8FAoibqzjjLQJtwmdhbzaQNKWRP4U3Wb212rAjB5buHSYe8oCGd1Qys15GsMAbxYu4VyquhfrYjjsK8Gp",
  "key40": "5zpcmX8cLmcT2EzULY3V9gHVYF971agtoK6hbUnATqEebLxy5NL94GSTQ8eFHwiKKqSWYogrPZdkqynkTQ9d8qrR",
  "key41": "2PqRDn9AgWQSDdwJ5rav3UW3RphE3xm82SKYG75dACsGHLvgCzJJNVS728XJWcH66x17pFaL73KfNcW2UncLKi3B",
  "key42": "5ydsfz9bJYR8pco8vbCkNG46RQpCTnpFUk9PcBVMKPNpTxwpsJWm1gH3AJNaH7XiqX77GpfrZ7NFqg94aYrcXa3u",
  "key43": "4QyDF7NKr3bNuMT5xj28b1w5N9SJFhQE37D2mvwdMtxiCHS4emdGG4GbEc2iWnKUnCBjTkpNXiVViiMVZXabZnNB",
  "key44": "32JpxKc9sTZqD1eMcBMpV2a6SYg54pygDrxcrJbgDy6GGs3FG9wzEoYS7mPCyKR4zVyuFgUwK1XUrkMzAAp7rsGp"
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
