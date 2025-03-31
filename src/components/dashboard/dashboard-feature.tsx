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
    "5K1pmkKKYUCSXT17NsRQFD5E8zjrPa15rmTNhH1gawjZ6euT4wmW26Ue7Rhf9WUFetmNf86J5GBUHzwVdGNzF1GK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vhMhk4qvA23nVL8KkSKASSdtz8MHo8mGAT9zqZTAAPut5bQkE4yZWPd7C2PqyctQj4p2TQLgnnH5PJxr15gBidE",
  "key1": "3seug5rj4oNZbA2gSuskuUnLRWYyq3zLxTBaTPwYpi6yWaoNqV9d5ELpW5vapqA1S1UiH2iTsnDPnnR7qy4iSpJo",
  "key2": "2ZMGQQY9VoS4Z4xWsdmfab2taSG1rYvcdmyVGDj7t2LDaC3eHGq2wurYyphhXiHykyKTMtmA8MdxG6KtkhDGNGQp",
  "key3": "5GLvDCAR7weCW3Jy3nwh2FZstQs1BqY5vbRxCZqfiotg4R3zLSWiJu5oJmoZmSZ2iukPJNoguHnjubWTZX9ojrLZ",
  "key4": "4qsRDkNHbWXs7j1Nt2f8HGrRE4Jj719RkSpUesbCPwAqpYev3uLp1DnEnbNnfqTqJN9TyotJwc8DPFmjGShydWXC",
  "key5": "36EVyJF5fzzPeL8AX9VaPtyTrK4bShwBYbkxo4DS7JxbLdSzqgkMKHQ7QXwVBo2v1CUHqE2AAckZ2nVyBCBCrJ9o",
  "key6": "zWEFF6H48kcft6XjhiJXLTY3xMLGr5ZpHs9B6iztFLuSZp51tM8Py4Qmnwah6XkRGsmrWmXiYXTEbNR3Qci9ycu",
  "key7": "3sUFdjAYzMDC5q7oGv38CaeQWVUpctdf1asuu6XSDHkogaC7idcnvAd3tsgKQfqPK37kGxe4p326Zhv49FGZHUm3",
  "key8": "43SvdLH8Bm7EmitF4G7BDCCaNbm2viJChf5isBR53UjGj63WtMuZLUvCaf7SXfT3qqY3mMMMbth1qKb1SNuUnD9W",
  "key9": "3u4WvqEJP8S6utTt5fqFkRpS2654fLPz1QSiCiTigmTdWtaJKwtznYv6QdWLgyNnKNqFoSE8ujLmL4tU41PC7iGg",
  "key10": "3EVY7ipnUVZwBAKwyJnRTmLPYwHTCYGM2M14sE2iaBJtUmx8WBfUcJy4kum3LGXwTe869BHw8TTcLwVYTsvJTq2j",
  "key11": "3y81LgHaZVPqZecN5CYgbodXahrAhG75dgdLpFy7Qumf1WBS3osASc23oxpXs2yqB5yJKMbTLpfWAa6U21yw8E8J",
  "key12": "5rNfd4s9AVmAsrLS3eUw5LzvoTemrMMfNX8omEnVQNq1bhR8EUd9q6uEd58bUypSuy1NLyoK5HvPAfVFPXsXqdTW",
  "key13": "5FCoFoTDTAkYsxCyXHahNNzJUJRhnpypGGpnukwPYxk1QCxF9jdWe4A99avV7gWURXzS2C1gsgGXq3R2MEFdtdTo",
  "key14": "3yhFEWV8KeqvHH7KrJqu3KbSdg7rz7rWYCdac6vNtoUqv2i62YhdjeBc5AJfiRo4bSG8pxsWAnmGPHma3K7FL1XP",
  "key15": "4rK7KAJbzV3RYLVmvaZ87BFc2ChUDfzNKc3ori9REuF18Nf4cfhWuUE4X3DH6u3AgDYogkC8rbMRicKhrSfVD6Rb",
  "key16": "2azyQFpHaPFrPh7Y4SjbHxUFdoNuXjH958mM3UMturZp7rPKBp3zA7P69qPVhaLHXXaVC8zd91DFuKybAykTANfs",
  "key17": "2aavu2qu7VmJ5y2x2Wfjf62ToGkUVXS81uNvSho3bu8jJRufWSrhQAH7KHaiNWaRHMvHLvTeuRiMWUckw4GVzs9y",
  "key18": "2vicKKeVn48uZi21vqPCZWxcgUBVhqjKXffDYDzM56Xtgkra2juvXEisxhmjMMS5yiESrrWuPW5TBjwak9ojG5ek",
  "key19": "2gd5MYyMoMRFX7zyQhCqz2cBmG4GDtaBye1RzHpni586GmXPmJw5A8f7M5eJ62RktnvzYxrSmYr3RZ9rDGyAkK1T",
  "key20": "4gbKcyhKXnEAya4i4Gq2jLXQmcMNudKeiLzzj4oQQk3zWTZ51sE7K5qk7iSsfjy4oXF3FoV6ecTCqmmMMwF845qn",
  "key21": "5bWppsLWFH5W3vhruTRzVZJSgvgqnp7mcwytis4iivrrw7LaSwQg2U8e3rFGCYX8EKHzXGsjqfygt4FHo9Crac4J",
  "key22": "3VWvH6BEcZvL83ePPjA4vUBCfZo3sYi2o1aFQjmXJUGFsJN9PxVgZAdm2Dui1Jj6vQm8rhJyGvKsWJMgyLcgfBW6",
  "key23": "3DzjfF7LarpnaGFgw4nm7ViyTuDZEAnajLy81ySGeM7DaixCQFjW1m7y58CmNMRHmGJE1biw7ULH1cYQK2WNkFgn",
  "key24": "538rxoHdDs5iY9Y6o5SpLw2nwdfeQKDXJGAo62SLyXQpdb6VJKCQk6uwKq5wdkbYVeRLHKp4bJaYea1jvvNe4X6r",
  "key25": "23GMezRiGcxekeFifFgfhEV4h2h7JE3H2SCRPKcEqzrCMDx7fm7j6f5d6ESFtirMz8QscMkdbY8zPoRkMthNxbpj",
  "key26": "4qAMbVtPP5A3wVHaSLi2jVyf62irXXc4Vny7sGefBCcGL3xcVbZhuyapFTGJG6CfruZARetFJuUkUgtKPUSbJaJr",
  "key27": "iSMZwyvB2ejxgazFW2WFW19ZgkXBJ7mSAr1PesEhMkU8wEi1sa4rDzwpsEuSHgTukMJ9H1wiCHkLxZaSbFiEAPL",
  "key28": "2L1XdW49UUEmzo28XBcS2pbfJqLc7JdGiA3izJR2gViidox4aXVE25y5RuRLDB6usBPqEa8MVahUXD8vdKTUQCun",
  "key29": "2cndCSmTGUu26rr9pD2xR5FadtEKsU9Fd4PHJoi4XcLW8DNiXpwXnLqbp5oZCm4dqE44NfxXDbot1QuyWR6kQ3SU",
  "key30": "dgZ7GG5K5UVA6xQu5BdnJz57EH2ahg3ySGyPRbkwrhB87FC9AkNvNArMfsZuh8rtw9mYVnTeAd53m38XDZsLXGv",
  "key31": "kvmezbNZLv5Nvw4JV6GnrgkdFGA8nUrHMYkQ3FhmNMWTMeurEDsCeLfgy1hk7tpnB4wzSV578vAZQvUYbG6oztW",
  "key32": "26VcZJZheZQkYGseMKPrbeQ4tEAAMqXo8ZPKCrTFqM4J3Ca6sMHSSU96LGSeWNXEiD7dQ3Gmjgtr1iQzEyE8rV8P",
  "key33": "2D5dyKR5Pu4Nis8nkhR9aeicCccWcq7UR2eNJLrdMnwNGsfTuMEbkyxtLUR2wZwtueUA5WiAMn6fEPpvDKbvZ86Z",
  "key34": "LNTNV5GZTUSZKW8at7r5cuiSRpFjrQ1x8fxX4PvjB5rEh2zuusLgNfgfTPmTP646rju4rewJ4Ry2wo9JGca94PG",
  "key35": "FAcZq9kuVShar8gfQLdxfvvfUTDZD3teLFd2mHmJQgYWmynJk7iJ9ztFeLGxhpowmsdEKzDrQ1eac78CJzRV5SR",
  "key36": "35ks8gZrpgjoHWdEfwwwR4mxYZqiiTfstdRjKDTgwxBWEbQP1DE75FkHWsQK7mqz3uSZVFY77itNV3iHM9dGzt1k",
  "key37": "34po6MnAsbZn1xVh9nYWTb1bBxKH8tP5kx6Jvuct4mSM3Wo42LDRaPs6tC5oKMeWZbLyK2tGxEqAf3QZJkxT52Po",
  "key38": "3r8RehQWnpERv1FLBG8r6qfK6UmXqifU1VsM6JRhGcNPRPecBpBX8AMMQkjeUEmtas8tncWQRWdKZwsLgxyvuE9k",
  "key39": "ei6Ndj1EnALEfjqeJ9Y8owDGHrj42dSHJyA7Bh5THPpLJrSXGcJKKTSppfUXjr2h6NDTwMinohqWhcVSDqNxzh3",
  "key40": "3ucVib7Bp3HHWmjw3Ui9rvxEzbT6Y2hknRpbaYo9Ss22d9H1YTJCgVdDC3TwjvfvqZvWkvhrYCx9V1WB761pJbDH",
  "key41": "5SykveN9xWKZnt2CySHCCoVgac2AmYFRyUY6stBWtT8uU3mcVtLYJo5bG2B3yYyDGpf3oKFcS2D5zeToHc2Thuk",
  "key42": "2tC1cuixBgJFeo73csnK1X6H9CwHYqVvhNqo2nm47MJ3i2cE4k6x8wHEcaqQpRm6Wk66dxaN73y442RHM3PE55kU",
  "key43": "2YD9KoaYxSWsYijVTA3D8avSwNpWCDRENR8qCT2pxfGGgNwtsJv8bkU6iR3UVU4EEoFGiEjTfDBkEkkRqu6h23JW",
  "key44": "3Hmka9VbEzu31V1JEGvgTReqDuWieHhvabLWLQZqxcZmAeTyqwmkrH666yNySWCP3HQRotWZHkc7YNSZZYVHcGay",
  "key45": "4YeqZWTKPTfatcXXSgefBd4ktQhC4mRRF7dyh3T2e2m7xuDfb8n64d1f1jwAYdopoBfNW7bUJpnjLXwMjuh9XuSr",
  "key46": "5P9PVmZWU3QaGXPm2B8MdS5u16QL1FrM7VLofkxacygpaAk4tGikD9uKuTsYkwdU3E4R74NZ2eqE3VjuNkM6fH6Q",
  "key47": "24cA9BVABy5wD7TWmxzkD19UNCfuKfHicvvRghEMcwJDbvKuvX4a4AA35LUqtE631Ct49AFPVRQyNKrG6kTcLT4P",
  "key48": "4yH3UyCTkRCpQHHfYwLtiiXktxnrYhHrVHptdrLPp9MM8xzduCUhV6o5gzDsv3GC1kCeXvhiejpPCdnFdwXidHUc",
  "key49": "NhmWAjU2yAYksP7twzehuUTdtZjgNdverjtCrtGT9WrwqBeDZRsiyLmhNdUgnv3MzkexhMae2V3cPJpWjeSCBZ9"
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
