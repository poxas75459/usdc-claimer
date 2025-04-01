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
    "LjEZMhqTacYpoQtejRLYmYm9X6UJe7wTpCsg1oY3uonJHL9miKWhGJyVw5hZMuCuHUZNDp6PGDxrB6qMMHoxCjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LfXbCSHV4sWaR6WiwF6ymwY5btJCENQZKi1YXF4ufFR78VJeaaJ9WzEHmWj6P9tcTPky6bxmdRHYtQRvGXzXmWA",
  "key1": "3DQQM6VWWtQ7p74V2Mpr4RtnXgSsxAP2YNvyRNuFXV86REj6W5p2Dz9XYMCvQPDKX3x82jD3m5Y2T4NQLDpxJtCU",
  "key2": "57gkC2j7gtmHNFj9Wm7f8MsZoW7LHJ3Yzd3dDGPC1uXKoEYt6pCf4EPNR1YJ1g89KB2bagLvV5PCtKrzaPCEEQus",
  "key3": "42TQnmHZaSYLQdV7F1szK7Jp5yHdpjF8bt7Av9y82DcYi8uN3j2smFBTWZzHgAZmKrBRmPurjxkNRgCjYYfCWdCj",
  "key4": "GCQwsgsCws2o3d2FK8orC7d4kMxQWJMcAwuWN833ZZ6BEbd6H13HAkDQoezdSwvbDtHkwgMU1K6cRe3EJVkuJvX",
  "key5": "nVA5ofqdw8qoPkAMwNomaHBCo2gdPysTPb62UgFHcbQ2mYTox8wr9XeBcxbJ4WWo2SkzNEMURzp7CGXin6Tt4G9",
  "key6": "57qH6QhcWmRpvfogLwbmo6wpgPuknVB57mC3eMAWwgdxbU1ykpm3mbR2B1gXSEKGP34SwWQE8bNdUnoh37gq8hm7",
  "key7": "5ttusJUPVAnKf995HnbDpGfBRU4GHE51yKHGL1wxgbqtUq61XQb5v6CqWfG1VcS8NRUJujSdNNkYyWAp1ViNj53M",
  "key8": "2qoSXCCy9WiUaPEDmPiv9BHbcMCDq5uD3KeeggVqruAcLr9jCv65MAM7uXoYby9XVTxoV9ZnfowcsFers4evfzy7",
  "key9": "5hie3vUi5ksZgRPh7esDVEsv6jnk5wmryPqyRwY5gx9qwbiBEMMjLHjJrT1cAvQmr4UqHAJi3fYBNg5jVXXQ4wr5",
  "key10": "oW4mi9RYZUse1sv8DUwXg8JvAu5JUqCCG7PhRVJLJ5c1FwDVwmTPhdfYAcjSV4hsLV2yy8E4nGezAS1CQWeW8Ty",
  "key11": "38s8iDy3xsH7AzeBNXWTquW4yjE5sbSbChLEvTM1MYuU3bHWkbpaaNJJgkEeyZnV5XcxQQyhurS3f192vNCJnRY6",
  "key12": "wKLVUQYw688zKqP9j27T6hWZJriyXtW6PLTtbm2E8v6A36kW2tE7XSKeWUQ6AGTpoQf26VN2m3y1VoraKxf1XW6",
  "key13": "4kVzXgxYSCu466RBgBgbKJVna2DFuc5KdqJsQ7YTaCFf8caxWcUthiwrRVBnTQReEcKBNLQytd297eKE63EJepcA",
  "key14": "4kjFQBeqqqLQUjsDcFC81XoAa4hMaUP3FKvdnViMUCg5RMf1J55huF5Ee1yDn3911cEcKS1dQVetMQJA5X5CUfUs",
  "key15": "4cDrJMTRjrnmoQqxCxk6sfgQ47xjapRedBwiSTd2gnZmQYfr8hxGzXuQuwugwbTiUDj7v2KZqqmAAVi9SpBLLALK",
  "key16": "TvHRnBy5NXpEZRceP9DumXfiZpKdHjtBD9v4dY8aDjSmurvQt25ZSoyDJdkSNtLVhFfx4WVtmPJLw5AzSSwQcK5",
  "key17": "5P1t6XTiQY1TpygeSmpHQPPpVqenUuqLDPjbev36MTE8svJmTSPRqYVQvLsj7ge9SYzLDQewwT9fc79vE7qD2xaz",
  "key18": "Lnq1bwP7sP3qaX9rxTbSTgPFgc7778npBWsCbxJi8XJzwHoJkHoUXjFsDBZpv9s8gUXTGqE5qkr4z5giu4g6veW",
  "key19": "3sAQtbyyZSSVwjgh1tpRVDhwkQPeDSAnWyJmburqvxd84aiZ1b3jLnPEzWWeCfEokmhCiCj9zVe69HTNCD4ykkm6",
  "key20": "37RSQYCeGZxDEPDtX29mX3fvn7r6veiw4PacKtZZgJ6qk7FARC1JtFx6hYaummZFyQXARLLobeS1brP3k8PEGVaS",
  "key21": "4YRFYuQBMFmpWKtphzv3eC5AeJAFk7fBfzZNPXod8nQ1UfLrW5SMjeX2YJuiY7wSyk7AirKY98PVatHKva6pHRij",
  "key22": "2B7WhheNkQnNZ1SXvPQ77M9zbg4P1V9EGfid2EKXZbcjZHMSF8LE2nQ6MHBRXEY2XBtsg9bvtSjeyHzkH4iQp2Cc",
  "key23": "ZddnyVCW2Jvd7WFyLHbY2tHNTDfMRAauHQsy5macHVyejVKbdekiEUFohZS73UM6u7SU2ijY6eTjP83iTYJeedT",
  "key24": "5P5REdHK94ssoMazszoemvzDbmZfAynnDEAbw8k6KUorszj6C5UVKRsLK6ooAz7okrmxhrTRcPhMTUtHP3r7p35w",
  "key25": "43a1s2QPfgButftgarJ4ERaHRWud6Vcb9dBMmb32A29gdjRM5MUWFp1yeAZjqK6EMgySa7zJq3XfxJF2wHndHkee",
  "key26": "2hm9ji3tooqZJBvUgUaM56he9aZdxkqfEkaqP3mvSw9bhDNQWESr523ezjY1ZLArVo37AdeDAiPMZEYEP4RjfKPs",
  "key27": "4SmV2y3Fpoqv62zMP6Z1ix9cVECxrgpa59fjH9okw4suUfabAeFCZxDTA9c3gCkHWq8rvgoUeaDTZRS4acSzaG69",
  "key28": "41tqQHvjdXVAX4nW8HP9qUcQrcJWKfbWb7jaMy1yVAM6zQd11chEQpR13ZVVCnvkqmeFCrcwxN6yPoo6kKRdwEb3",
  "key29": "2YRF41BNjrHsEBK8FrwzaMPnvXhodDBbA7J5iLE3z4XR7cYXDfPsBHQuPty2Urcg8p4ojr6ihfMCk5oBcAojuuXz",
  "key30": "2vuHn21ZnDwv95mnFDhLpXCmSKGzi1xeEwwbcJk6aCkLianRxNmjoyHdAtV4buXhhAdfgV8D3sJN62nLGLNH6QMT",
  "key31": "31dUGe18rgSsu1mLEw67bnqyU47b6w17zN5C78A2B2C31APFipY29rwnrZmHd2GwPMdWV2Usf34X8vb5rrUWYkys",
  "key32": "5zSSBby8T5VwRrHYdHcfbd3CBeqTwyu6FouhtvFbgta7Exmx7H82awA3EU5YSJebNq9ztGF58ANzAWWuWXte3YLN",
  "key33": "42mxfXZSAwxtMrcVk36sRyA2RRZCx5PZEeaQh62ZpEfSGGDnSEhsV53qJXxCpzZQ7nVjRhQRa2Npo5e1Wn2wCpVn",
  "key34": "2VVpL4ArwbhaNNR15nh43LYbvY84y9x5SiwQii6JVqurjtdLqXaY7WADHvTsWYZ1YbdE1bxMpnfV3sPgxpGbiBzn",
  "key35": "2waQh4N4HGxsaRPUYDcnjjhdoyyKnbp6p8kcQReuU8kjuMSxfgqWS59MHJzyqqfUQW9GUywEzKmb4quZ9SMftdAg",
  "key36": "WJRtdyERzuQsQPqK1RKJLZ74cSNRf5P2k16q8UfHxjgHR2o1uFfNzLFGqHmFih2xGTuRtBkEnQfDrJbMs2RgJL9",
  "key37": "2H4ankZQnTJXsyXoHB514pNCyxNQbtKBqDfW7h4w7QrhFXY1SzN6A4SAxDHXwF2bAFPDAn9fTNTRG5ArFYpZaz6G",
  "key38": "5qzc63eu3QQmZAaHyKD9YBisT2Y4SqftxfKxNFHnTuYhCLvde2dsUQw6ZEuXVoRjrzUs4DRmRsK5JKyGeQJGMh7d",
  "key39": "5EasiUh3Rz2Sai2ipiE6jLhoJd5XscU4wUZ3yThBUSWiZr2bvbWFvkZ6ytfUE9FeUWPQ7MYX4js3x2eq4mXhT5h6",
  "key40": "5uhVKjbXzsQpoZXirxpLjXK3ZUcoaxXMq3ZVsGTeeXDNzKyJYshKiEsJWKkuDpbf2R8fiKB4cxxF6r6cbKcXSG5T",
  "key41": "3w4s5TLKW631gdwcVVn6i78BpoCJa4DrdshEXc1WsyiCA1N1jaCWZpyRxBQ6FG3YxTHBLqvD9zxfLQLLb7SABUBg",
  "key42": "4QofKW6KJgUXoa918STJjRkwpaLVR8HrAhDZzTsUSye6crCoGXCxrRXaPmeX5kzAZ6ca8DdcKEUoYvHN23nCJAjY",
  "key43": "5T86pXbmLf7UitMAAbzeTx7vmyjDoAt5qghrqeE4Ve5fSNxBFhpS3Gi8wpAd2ZgQzMYp31wctKk11yCkxZBPXMau",
  "key44": "4e6BMhWPKbHbXKRGzoP7qdiMKVHxzoNEbAvaKDr9JyGcqXdnNRgrsGuae53K7ez5KCJoFgtLKLP16SefKzkeq4Sj",
  "key45": "3h7PU7bLZxZbVbfRRofL49JX7JkFpMK2HquufueC1WgYdpqj8L4bGyA7VBvhm7mAHvC9CHRfov3WrRLhEwKTwb5D",
  "key46": "2ej8doJ9x6zbRtNA5k8QwmkU9AR6GHDibakZk8iHE98NanJAtoxYrLDQSvz86S9AwGYeXdT1hYyyTaveCGfrqC1b",
  "key47": "2oXVchGgJiUp919HbXMAUxYyoJbBejN8tJLpAyBYhGhoU3TVtia8TUj1cRGPRT2xo5Xo3si9Mh8uBwo7c2wNiLRV",
  "key48": "5chR7kw6Pxr3zkuHqkLXdJKvhos7ykJUaGDNCsz66DJVAPiLQoaZessN5FSb1qVtfXsWc74Gd3Rbs35RSC5G7Gf4"
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
