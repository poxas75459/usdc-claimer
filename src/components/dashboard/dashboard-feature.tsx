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
    "5T75YcXzvbUA6PnH4EKuxYFiWmqFc4q7FvGMgzGitvdip1iX4kki4mRnp3cRR8eiUueLQfgnLfewLqWuffkRZNKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XP2hanz7hzjYMCQn4ueQxLvi2mb9c3Jvwz6BbmmFRZ4rLBaHcBPZ3D6eiewpKAmk4oFUSFWsijH6GnF6WzyU23J",
  "key1": "3rpdjnSRiBzDgBktgHm1uGcxFLi51gSzUTJMKCYenrcroKs56CyRrqy3n4bE2FWjEr2DMYLkqFg4jqjMWXLexc4W",
  "key2": "5abgJqpPA2TWBRC3LGjkaDitbd1fYgMsDFDsGJZiTCLHZ2GikgyDcTtwiHg4fQCckARCetPzeUMZVEusVHgL76Uf",
  "key3": "32VdjsTk7Nx95DJTXBRCTdVJgx6QdDrQaDrHnYhGEUrWmckWmmxegTGeupgLaB8123bqB4x4KJn27pnQVxLfkFWT",
  "key4": "3HeHqa3TfpD3YYC6SFNK3oFNR6EUorYH4TVeEr4YcfyUV1xWUPy9sHA1CYYYacpi2YfCF3DzDcMqRzaio7MjuQJf",
  "key5": "5ToXzrkFNu8Rs4hkasVCH1YgoB6MB4Y56zB3H5dpF84XkTYU6BNUrmXkfyZ6DbEoQ8ksMZxNYUJWEz5ycNAMsSi2",
  "key6": "3jQ3BEdcnRgzNd2ddQ8HwiatgHQX1EhvDixQ4nkfHnybKkyMmLsw3NHNCyv1jNLvqBB8Uhq7M1avsYxpeyuZ6iQU",
  "key7": "3acrDtKznbtD2Z4C8DHZ1MZzSjSPS1o6raQtHmBZkGWt57oFJuatZfqkiSeXJKmjLVr822GeWGjdWyD9wfE9sJjS",
  "key8": "52gehwmsemQGCZuVFVt3HmzHxadHFrzG5HsfwVDrAyHzYVA6MK85TraoJQgfEGbQ5YLaZs8iJNrsjyFmgEkcRojy",
  "key9": "NB815wdDWA3QfgvE8kPRDR1PXRmqscRPa1iC6k3obFNBUScph5A9J5rX7K3TFtGjfd6khi5ABXPrbVF3DnZ44i9",
  "key10": "4pQdGLviCLUBRvmwbu7JaeSHX4V6Ha8WuhF4Lnsev1BnBVL1cLneuRLvSRE5RTaSr8FYKoPEzGTLXpfvb9pfxMwP",
  "key11": "3VwM1pzP4nd8QhU9pJe1wGtuFLDavkunZe1WyY2QSZ5Lim8WRPs7nZirUSdnL9yR2z2Lv94otLUW7exX7VkG2BhV",
  "key12": "2jNSxd3gGDRgzUAbggfMzcdc3EHvjmgqZXQJtkQ8zsEDKrv5yVjdDW77GLoHuGXRQpN1LuGRY6dzWgKpXzpjfxJc",
  "key13": "4CyFL8YMsA9ysdDNTwcuxTf4NLMCGG21S1AspAwpRs6YNirbUZ6drH2UJxb2u6tr3SRT4PZaVEn65ksAnrtMJrbQ",
  "key14": "CNp6LhNb7ytyLdEoPWgNJyfq17PxBEU5QBe65wV6Fmu26PNwfiAkMESAEYJsCXjchmcjgEZ9gnbf2Spkn1cEWdB",
  "key15": "2ymDUui4F5ZZ5Na71LKs1PPfqCYb12wZYgjvqXuXxoMF9To8k2P8j84KTzMyKCsp8E25Z2kjbRDTf3F5pSPDEyx3",
  "key16": "2ARFscaZmfBzQGkx8ncEFMAUHSnnAk5DSQvBP2y4idRqVTnRF8jhg8mWQWQMouCJF9CppcczGdVuZeNDUYs3t1tV",
  "key17": "3TYqLVRr6L4gnqE3WgzbEWSjTqogkRm9QahQu2T1LaJtQqeTJXLhoQLj64XYJg7zvViErrPYu6Gjq3NKLV6gjqft",
  "key18": "3TfTcgMbTsyyE8ZQzbtSr8vmkbMgoUKwFqtjkNVYcJSFQWeTF96kSpyor533RocMqyT7DKbsTb6y4KmEV4SP8mcK",
  "key19": "qjymzmtbyCNtAwkfeVFCTLWZqicz1fqhGbHshoN8m1wuCAFc3Xb4b5KutA3Tpuph3SdJGRATkq5rh9n6AZ2RM6P",
  "key20": "3YwGsQNppRSEzmfvwErcNcptq8ifnWcb1wFaoZyPgbp7cLzh3du6XPg6zkGZf8dPzh6x31eN2rTQ1tGrWCXLVTcm",
  "key21": "s4tPxvQtLW3c1mzZWc5tfhS9VGXErjEk2ZAgLkGKXByTkTq9kQsyyEVjdGLxXWoV7EYcW8GAf3bScP7xxbNGQgW",
  "key22": "2PXTB1Yrn8mazHBXqzPFumLuH21xsDhUc6pmua24P5V5wVXAmbTT5VF9sm1LV5UvqZRoivJ8DRum7iMqKwqn55D",
  "key23": "5p5pQ5mJDAC7BmYozVr2rR7fAdSFYtnqseYSsh1W156F4dFB5WtRVHcs8on87Wo8CLv9hPj44kV4S9PX9FAnUiWz",
  "key24": "4PnFkJefphrbmWXidA3W4sRmE5xh5SZ4qSkWgoLsqxS4LL9Eck3mJeUoFFdm8GC6Mo7EVXSz5ETSr4LfsCQAfbEj",
  "key25": "zBzNrfSEAAY6USbRHuwuaMcPJfKaJ4R85F3aBFw6fY56WUrMizJE96aZDQz6USrnzGZfWvyyFB3MT5iyEojJe6U",
  "key26": "3RgNNMJ2mZQPEtqGMdutEjaZnWnWjQdU31GVb8RkyMvCv6aAerafNFP5PBYzeSLo82YWwCqKKcrG8JZ8SPMA2xLk",
  "key27": "5ysZJPU896YYnAQU5BaTG6Lq3LCHSPP8thXpxtbeD1P7s47RgfAJHKcBvdFCWemPEACZT5i1QmtsTB2Bsh7Ju8JW",
  "key28": "5uv31BSYULFAqaHhjJZQvzz17o3zckYS9qrPWgYxJWiQDLZZuZKAHVhYoaZ6fMgMFzgzBFnyUQr2H9poFeUV5hoZ",
  "key29": "3EwLiNQqs5fvnFWELNxov2ntZBCRgJjduFVjEqtDH4zUpRjocEdfgQNc4Af5WCZq3peWyGNpbKBKzGgvW7Zosi1u",
  "key30": "3dfhtP9D73zFbuuhJF9rnxtk5zc9SDq97hPzhSGqEy1tvsohAoivk2k2B34F4NpfJgqTibLmU9QzN68HmTRWgeZ3",
  "key31": "37FpRGogUx9HXVjHwPvKnm67f4T9LvpFGCnQyzqbp6dRLjzzQQggoxkH5pQVaeBEmr62MsfhqRXvFgXVb6CLo6AV",
  "key32": "2XKiEnNfkg3pNxxfvaCn8j3MCiRRxGfHQFgL8ZkL9MCTyMyDgERQMeTfiKwLin4n9RX71HKUVHUkCK4fZPcWsDNL",
  "key33": "5JCctHaftQHpXXf9RxiPuyj8waePuFzomUq93Q8K1xVD9kE7ihXnVD4JcmivfamCM8bHUcPwGNHiFmLSDuWRncfR",
  "key34": "2Bat1SrT3GHFzsJVrwUqRtdYrzJAxyh2JJKxUuGCvSizs2mnGWHXrXBHWM77D6UeQvzKiruB2BbG4kF4kEfbM5QV",
  "key35": "3nHumtaHwVSM7AAAkaCmtm5DkDxsYvbndBW7PMvvM9F4Tf8fsa1CzWai3kBHiQ77MKHcHqoqqV3hdfyCadkbTvGM",
  "key36": "3dgytEQmVnQVgYxGPriKPoFrjbbvqbhcgDKFyZyph1JGpn29pfWqiscAC6hxzAFyaw7jK4VdEy1PkqZbGM8GtoL1",
  "key37": "4vDozq8poc3C3EMsdSHBJySr6VXX2aoufABTBzvsttJDaMmKL8JMC8wUrCqhBh7ioj6rSiCuumYNdrznHmczuVza",
  "key38": "3d77TATHMMnbKjib8uskFE1H4qGSV7eEFFLyN8eGnMsYd8dFU1DfV8hHdNyqZzutgRBfoQRvtgjD7joX7tbygPX5",
  "key39": "5caMmRzFSDEaDqfFaWXwMYvtL7HhFovdDp2PZkE3bDjsZoVmBUfxwcgW1S6YmKUzQo4Uxo6CjLG58Ef57porxEZR",
  "key40": "4Npdrm3nDLM8qgWxckx4FEorPhGuywXJjNMn1j7HHqHeD94dndSpfNwZ9B46u1hTMugNMCzDHxzT1ZQBFSmqDXer",
  "key41": "4xfrxya9xKA5yV1WbfxjzHaMRCTcTzp7yFJ7h2ETJtnsNgJ4StAwCV22bNtd3vXrjLogfueyVhpMY3X5drWRvz8z",
  "key42": "3uiL49wqk2YQTV9F6UbRe1MxYPeUroT15AEv2NPnAg6JKcDWgi8gKPgXv8RLcNfiX8edXY6HbNkbBwn1rfUkkP1n",
  "key43": "4FYykfiwDhUfZPiNv9m9MUCxaBKAWuYCXHXpy8fyVPaaSP3bUGrgMig85oyA679sdBa3TkgCR1ANk9gUZgry3ez",
  "key44": "WgQtTeMxRAXDTqmw9ADSzmiPRyWDEx5w73wq8EYqpQsSx8wVNjn1xWFoY8gdowGKBLBqZ5ME3BfLJuHDNdQ3B8E",
  "key45": "5BgWcVMvYbKdx4dpSHUtUovLaETCLZNe8bNaBjnC2Wu6UDtGZ8cfJzw2xYBgA34iLC9fQSyeYCw1TCCaRxzfx74b",
  "key46": "64up224jHSyY2RLV67Tg9mkXpvVa7XgqR63QFkcNnBz68iLenfZZNtixFyC59BWoD54JaAJouASEDsFNP9PF4aUR",
  "key47": "5ow1MmoyjGBCywJAyqsBtnbQ2yc8JNHdrsTzgdFXVFnEWZaDrsiRZtM7vbMTt5tSdp41rMDY3tRehnRhx7TKkMXY",
  "key48": "3DJyUYv6HqX5yE3KPx8nxNG5wCknJShMCZ2Up5LaEMSNHHxYFKN4X1UwDoXy87JiwahYxFmdwEy3nPfrnHgPGPa6",
  "key49": "2whnAjwuirbXE6R4t9RdDn5QUEuNChyt1Y8CwfducVvqSBqaGCv8UkZdnUtJ9LpnrM4FWEXs9B1FLQW5oDDyGohY"
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
