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
    "4gzYRdVgmKj4ByUP5w7YZBJFKQxBdBxTAZeud4kTpjxkki3WKybkvxywKkASpTuXuQ1FhFUqMFVckAJUYar6huRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41CjYBnEH7wosqLoMLUvRNSTzGGiD5xpMeJxNzdsRrH2tVjQPSLVLAR2zkMy5XZYz4rM1Rwn41hdub4MpSVxvLzY",
  "key1": "3HGye95aUfrozMUjLR4iZ43HTzgPhuvovHxnpQ2ZnS8XTk4RUABgBVQGaPG3JkdY3bVujBKF3KJokLQn6FbjV57U",
  "key2": "3JvfzkMnSWy1ukD3AGJ1f32uu8hutGYv2NrebTrYkoY75QHf3xmKe8FAhmtCYZ8XbtzF3FFTJznEXGkbuhh8DdGV",
  "key3": "4rihSe5WkVAYKW8L5DDUJcExzy1s6T3aFsHMoW8kEkNRULW54qyCWJvfQCrFmVX2xGK3Qm2EtrLPhCZ9MgfJuPva",
  "key4": "4jDKB1MTvbMt3jCss7YFeAjvsPfUHBxHEsvsxEXquSEonb7tcT38Ro3s4G1iN7x8FiUgWza7ARammnoF1H4Fwd6p",
  "key5": "2VvFJKUXFANV9fn7DrSJERigRs9PvbMsbiQzfrjWKE6qSwy8VDJJFaQE6U1nLd3Dj9PcfDTtFWT1bXuyjZo1CWZj",
  "key6": "5siwFiqUUnUoKiYZwyN4hAJjC5dgYFFd48P3F8BDNvjNtiTXZJjnLEdrkqUhjY7diYU3YpxkGQcHHpbzNUF8VRLA",
  "key7": "2unq31SNxb7zySmCdVhxKbwkajEv6rVH1r2dsyqfEa12X7gkZQfz15gSaq6pU2e6yCFACscBCWpWkUFz7KPbCZCD",
  "key8": "5JrcdD1UAkv8bxdtGmTdpMnero8GQY6a9qqvdBehytrSQjWRwe6Arc1KC6tdjZhsQ9Wn43Esv5vRwGgcHhBy3oVZ",
  "key9": "bei3CuyLd68g5fEohco6YqDGhyBqAVdphZ8MHPGViNkKQqdjMGKkGdvcQBCtrVgrz6SLpcoc82p7GXLxAbdFEcV",
  "key10": "y9DinEkqryeq5hPoQn5XKh9D7Ay5ZggKAZMciCEUVkV4NtRtWZGbEi5YZSEJRmAm5kT2T6thLxxG2GSWt5Lau5p",
  "key11": "2Mnr1Js68Uz2VoYpTUma5MqXXL4t2gt2ZNNjARbBtu58t4ox6tKrmNKTtpxdp16fQbQfREHhJSoZM1EPeF6BtD54",
  "key12": "4CijGBhFwEBcB2oRDDiFqfVspLrjAQrTgR3gW8ZbXo84RS3RAgLDWADnugHNzMVyLCeTcYYdneaDpajvutdkN93z",
  "key13": "36bjUUkY8i1pLH87BpnudVwXSFEnFTZmF9gHoHdEwyLXutWa6gCjdTpUVdQtfx1S2xVTWQZDKnZtKnGzySmGfALH",
  "key14": "5vWitWi2jPyyLPCQrpqixhK7yAwggCf4g3s3PNTuDcAdQrU6FXUdvJ1vQgPz7ZuGYcMkeSyqmxt9BeiVuRw9eYj3",
  "key15": "5DtNw5s98LRfz13KWhKcQBJkLq8E1CtQGZ7qmGjyFnSFknG57Zi52Fbe5AK1YTJFmvHZjD5PUUntrkPhGM1H4F5g",
  "key16": "pCr3dCzDE4UfFXLCuL4Lm7zPYBytR4vcruUpQ2HbwpDP9Y2tn3m6Ui5D7fv83JHgWviX5xTsSyvyHgofmQCTWZc",
  "key17": "2fvYncZAc9LrwaipaaW3sCnQiFM5fJBgiArAu1HnYqNP4vTngGon4G22y1gMEZADAz4gsMz9YMnyHjdWc8djgH61",
  "key18": "4nG3vzVTH4Z9D4fJZkt47GYU1J6bJ2MLhQPgu11TRk51yFqphamQrgxsm5uTiC3vgd2FGeVu2qfjiN1Jr7yXFBQE",
  "key19": "4A52RR98T7BgLp2nDjRqe3JeANHv1dmezgiPeANdNXUAijnLy9hGR7B6dKug49qaG4f1EbcdJBqagNvXF2xviiwY",
  "key20": "2otwxLzKuUoDxmgYzHrHkv1FTJbXj7niwGLpLpGgjduw5NFLZKXFxszVtQnjHp75S3s1zRhvuBtxP8oVTW8Cox1n",
  "key21": "d2rbjVeJ7tWZCPJgL7ZCz115zVPh1MT3dvdFaQGsxTFwhTVXphzrPaKsY6K1TEM6eMZQjPLduEXSCTZLRAfSJGj",
  "key22": "61JTFv71wgkLjutnXo4R8DFrFVSngAgEQnWC2vc1DgT5njVHTPVwK96VbARqiKXwWW2Ubxb4f3zoLzoqwtbk84Jf",
  "key23": "5fMiNuKdVmFjKE2cufASUhEo7YxG1bNesgfijvMGtyDcLxLNPwTQ7m7uR4dddpG4jQQS2skQUcQbtWNNcsrCiun1",
  "key24": "BiRzivhKLg8fav2WRqhw9Va5XKSrbtcok38FcGjuP46q8w9F7tahtaVjFF11kqLeqPMUxCW2MrCU5j7gczf31Pj",
  "key25": "DKiatRqJ78pXW8hrRpxJevd8fuifodNJX5wZ4sr15CGeUTn9zpoGtB6iuS3jaxWou2Rkg41zA3wy42viwCSVPYJ",
  "key26": "3pDnra6rq6UQtSZhb8anDv6ZnQ7WviHhuhyt6SQ5jXUkw18qBLFGJFgqVz7YGxxvLWswaAE3TWHJeAfjtH9q6LXE",
  "key27": "5JekNfLygsC3j3SQjAM1ZqSN97uPxUJnvUF8Cxd1HxaPeFU5wEA21V1jLFbeH9vMXiv5vu3nmtVfffQLMjkFrBHQ",
  "key28": "2M4kUmzZEHB4qBJd52pg4xe8qY1HU9Fqhgp2BqPAy1hAGgEEi6o2iHS3ZQi9vnE49pzaA9dN4uY1mvvMtyrc2mu2",
  "key29": "2EGNxZR7NkywRqsNB8LiNbivur5axYB1GMRdnF7tyWBrZYXyQJxfJJHJmGsh8eyrMJeDj5vjqko5r4ByzRhvnNcJ",
  "key30": "uRqXsgdJZTSs6ToPWtodfyBC7z2nsAEY3bEP5KmEVQZDxtxinvJ75kshLzi1EXT3MmjATkgBntYFjbnTioCJFdC",
  "key31": "5Rri9pG1V96tGabt1VKzSiTANTP6QreR2HAVAhYawa9aQp9FRoSspyfD5r7LuMGYwAYuXhexjLAgK82bjmWneRDh"
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
