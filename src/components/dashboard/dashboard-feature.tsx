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
    "23oA36d7TutxRz4JFuv2ESiEkC7DGAvaVhNqxmVzdkHwCT4pHh1CPqsFmHfToj3scFsCtGDc9Tq5HZ6Kb9gXC9iQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SyZKJgpRSc44n4aS37zNviLss2e3ALGJfGiwWK3DPpJtxX4ufbVRCsiJCgyHnaNnEVjT2NdeRacYPtv5o6dYjwu",
  "key1": "4dBfLbtWjsW4cPtgUVx718vLZzmW2Rw9jUigNsBPmnKRsxQ3A7HBMvrtdP8LH61oqFUaovxwSvZRntt2Jzt32Xmq",
  "key2": "3uHXarttLYoY6AAza8UZULkGRhftRLebDURqvzYRoFxFGjaXsePey7c1vPhTz2gpZBp8d9boYazHFKjCo5tUpZrt",
  "key3": "VFMd48x8GvnzeT73DZ96XoUzm7KGWfq4miZLg9ry5ercJ59m33SLiLGjHsKPBYE88cDTR4tzLY8cWpjEGwuv1GM",
  "key4": "vsg3yWzj4UxaGWj5Fp782sS8VaPybxFAvbBGBbpCEKaag1WhCSHpQXnv5TVJKG3SR4orMQTyEpLrMhMSzUEPKuN",
  "key5": "36zwB3nK91piTTT2gnqqMfoaTX6pAxvhLLGh8JAfy6fPcJ2Wu5x415SsFDNZj2rcZLmQJgaob4NsUjz6zWnUWWvG",
  "key6": "28r9BJa1XkDg2UonLuFqsF7pXiJ1sQ1F9ceTFXDmBbLhBMEvawKfoCcUFddLhLC2fSYpTSP8R2jRQYzTaoDKf2hw",
  "key7": "2LzwyBXNtziEBRdf8mYP6CJSSaTXkimCeG2235CjWp17Kq8LT6ehwovJjc4FjawGjEuzqXJvKWWSXdgcRXRJJvud",
  "key8": "4VbpeEYb9V9sJGpgThm1gkpaG8yhYGBwiQ75X5A1pEKuoP16FSC7TjxwqD7aRyg2kuHAq5LwBCahWN9pxKEnoZNM",
  "key9": "5mw669u62LZVzXziZxi8jhJpJGkco2XzF2jSZNo92Me1GyFax2mvkEuK2odpm9FpYzFeBx4cgyYtNuJtufM5fGog",
  "key10": "y5Pwy8yPcJw5hjHnB6umuTQ6L7n65ek67agZ5rZS4j1SHpBvQpvNTPEfCppTTdhNCsFf3gCNzM1X2R5XVipRXkj",
  "key11": "3D3NDTWaQ4MQf4jFBeaKAFE9oGLphVovHimMpRMDvM1gv26X6GwMSEJ7orAfvfhaS799xLDyp7VZaSY8jkTtYMPq",
  "key12": "44mKXywGwkBHYFkuk4gbHYAmmBofaKrUHBuKfZxdNe6uAHwYNHDKNR6URoBWP8Kcetg55zx9FEcaUnH4quur3ha5",
  "key13": "5TV9L1SeWK9WT8PZyZL49eJBmJy9ANJpF41pWg8VFhyhK5pfCSUBL6MmnsnwmD5tKQ9UnRzJfe7eN5Hkm2XNVdXe",
  "key14": "29drAvRCtSchvVhkgrnf3rprZPEFquc9RdLHALbfGuH83BGchzooZLhM4vA9MCGtPKVus8G7Vndees9HzGC3rWzN",
  "key15": "66PtAGargV2zP9HgkmrisnLYC5E8taKNQvkHmqrPp6hL3DxFbpuXdUTGyVwC5dzicUuXwsPtMLjENKnq9wsb78vs",
  "key16": "334T1mZitTzrckahSZaF4QSBha8orVhcJKLNhALC7p8G674riasC4Hcrcf4yxtEGocfqxJLnGqbsNLh3oBaRdz78",
  "key17": "2Tt4GhbA4yQwsspXPDABk41TzFF2rnw77EK9NjTfGnSWUYMoJNE3RSaidygfhmH4p7FeNAZGQzGUy3YNFQGXJuRX",
  "key18": "5ypHFQURZkMEyj4YLRbGXoxBsUQG2bdwjYDpdNyeRQyMtLHGXv8TNuMqPUcAo5WJ97w4FuXBYk8fRm1EiTtNfdh9",
  "key19": "41oCajFqHsHH9mWxJVhxV4yQimzhaJL1aAZB3YGhCfq7ED4iaup6xUU99uHtFQw4C5a4bRba6R1apiYF5nPSbRLr",
  "key20": "21JEBhV7ywGuu38dq33qCxgnk4T26JWbF9VnYad9fDWus8PwYXko4GuznTF79uVecNL6e5jncLxL9ij1BKqZPq2D",
  "key21": "5abv2pUSSLvqqfT7niKiyjNr3ea7L5p3a9ACrN6d81sbSeKVXzo6MxVX2WEsjL66TqCfMqxhsV1xp9Qken8kvzwe",
  "key22": "5nmGmw8JmsYmunCQPWa7u86MoMCgtZQWzS4WTtKWXUe1KGUw5ABTYYgGP2jK29BX3KwkQrDweE68DvWznYSLRhyQ",
  "key23": "rXfZdXSLeKBA1DP5eCLZg6PsV6NwDcsTZCH8QuULgARGEQQA6jVmtE5HMUJ4a4PpL9HtJ7QRohG3F6kLB7or47x",
  "key24": "3auoJgwQiuduZTBvj97Y7TUicMQniVvcfza2nPqgmyt95mM68ptc4aqc22g3bv7YtZdEJDgo84uXPPwxU15eFgZJ",
  "key25": "45J56yq4LwPP9x26uUKpxEHrNuvd6pgg4AZY6dbnYKzrGd11Y67SGPAcvkgAzTHtmDSdy4iKaXdtDJcSpuocJoAV",
  "key26": "2g9SPVqahTUy7umN2VpjSRWhZrmJk2hqsJwpgfVuFYDT9eaXzZa9kLb6iTATwdT4VS6W8VQjGkVgkNhLfMmzAeWk",
  "key27": "3GRYmK7ppcsvgcEtDAc93ugRyEF9sF7tbNPckXejzo65yTQxGti2aUveYVyi4NZRniEWSudpQANV3kAVEp1CLKaU",
  "key28": "wHBtH8AruAp97qs8m6hofRc3ZULdDcmaDJhhZHz4NYdp2BrRnpk9VxjsT5mm1RzGroZJJq1C3jFZbN2NCyDP4Re",
  "key29": "NBoQ8NSiWk6Fcv12LcDkFF1MxzD553iaJ3KWFkxMDs6rBj5jGfBZJAcUBPkuaXKvP96mpvXq58RxuTudK3DC6gR",
  "key30": "3RfXUyfFwHATsMsB4GPmeBnK34LfheiWN6h6Zg8dZM34bvmk6PfuBqF9y3Qh3V7QZw5cX4dJrWRQ5SRecHjHv7St",
  "key31": "2wPUkc6oAJDcUboSJUBPGhY6JQVMjsNGPnps9mJyVj2PzxaykTrBdDsrxgtBcY8BBRUHuSRNpWntF2z3sBhPPaSF",
  "key32": "9bNEHg5BMwuDkKBawrTjEHrBueYqZvS5gP7Uy9NEfBQLv3VrPNcK7k1k8mWihNxzizxbqkQxZdsn59Uu6ub41EN",
  "key33": "2r44TieBhqKL7zJShoGsTT3kuvzbujmnXmtvztUPrPdwcnLe4vXgdaGAo7c7rSb7rpgN8ja4nUoSz96aWe8CPrQZ",
  "key34": "5KtaSt3Etnjm9L9d6tNfKFjkAsrn6e62KAXpa73YNeMvfp3ts2C7i7ZRQu1ncVuqzZKEnx6S12ZRq6PXSCEXFP8c",
  "key35": "TurbPKcis4p68dHF66EZqK9z1TvdAn1BcTA1Egp6V6L2b8eXoWZquWZBxEsASba8Y8R59UUuoqkUbMfpHRLEgzg",
  "key36": "2GhRJZ9TydA6eyFrCBBsiUtBcciwryNCEnNeYzF8WKYbe1Y2gKCkrZM6CSGozYrhNBwzFqN3xkK67CUwwSkptqfK",
  "key37": "4fHXahG4gzNLmKjDxYZPFnHMM2kZMQ6G1DSjWrbRqoLcyynQNwsbYVdohGcwNcHikuEukoDkS9ZvD3cLworErEig",
  "key38": "Ka2vh7m9SDPwXUjqTMPje9HwQuADK2XVbc66zKc2LjSs8Hw7N4xLtsa6E5HJVkWyMfUfmbgpHNy3m3MW6wMzry4",
  "key39": "3KaVur7zRXN1ssC9tydQqMKmpXpnb5BmtvSqZQ84PERm3CAmZLLz1RmuXmZtVVeytq2Zm2Jyypt18YE3XksziVQ",
  "key40": "4ngmnMa1UCr4ukmFgLt8mtuf8RxKNrR7PGqBACsfg9EAjgCaTP5d7nJ6wCBRJrRBvd2ojGm7864LoPFYY6xH33yg",
  "key41": "4SQFU3o15PxR6mfUeow3rqG9xgERh6batpmaaiUK2c65aYcL51hbez4hdLMY45vWKZsyxxNfBxnDVMQxSQQXvxn7",
  "key42": "2aBCXUDrHiEUXEBoQWdFveLHjSm4gn4ufjZxaLtdtRD9QgH5KmNgUee9x6heuiUXSBK29qzyhUHBGosoAUcAkEST",
  "key43": "qyyBm8LxZozWJ72LpVE4z7w1mtJtr2YxUajEXPYjjaDkGAG9Y5HzfVEAFo7DB8XL84FYHjags1nG8b2HxqLV9Si",
  "key44": "2NqRuuDuzVsT1QUEVfNmWA7AWtA8NZNiBeHN3pbTm7euUFy6ZMs7ZSR5gaSnuzMCpk4JJ8MqrHBaFD6SbTNR7rru",
  "key45": "53exDpYa2nHQTfBWqZsLPnxn3N7szfswL4zVGvVfvJakBJraiaGiHdQMoEBcTETCMY1diBXNzaVEuSQ6mRf2ciwg",
  "key46": "2BDBWFw4VcJDcuuFAkDBgebs3AiqEtPF1iWShZojc5BSnPaSZNMYLrKDGmXGdNbwcUKeC51ZyQ1cq8mhM5bgokNE",
  "key47": "3imQVcuehuVv1uwGi4RqDRKTz8H4de3N4dDdFFH8FXePm7bJf7S2Qd3fnHNhkzSky89xpMqvTzXuNKkSpNQtR42G",
  "key48": "3GeooCaLuczRdDdspgswGK6ecCotLCNhsj76Tu459PPosjzAHDMhUhhLAoHrnND6Uq5E65RHtKckkEP7y7Tzxyaf",
  "key49": "4ah1Zue5Tgjwm454DXox9JU5AkGH4Q6EhuoycLzwrfFaxmj6GLA5Y5MwQkNqEJsrqWB22UkpmwVJ71qLrKFsMcAS"
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
