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
    "538RnRcDtj3EVUfmXyRPYfAQ91ugWfWEZtPk6aPxtiXDSiaxH46sHKDvcA4zgo3Bsdvv6QCnXFaoFx16W3jSKKW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oF3YCaRW2PFbKg7RUDLvDbeDkuXyfWjJN3QJZhMDxbyLTeY26cSNfiSvuGVaB2KwbZR8Hub4VpeMzdV8xnrceN3",
  "key1": "3oV9Zp6ruW6NPqM3LRg377JddsHgyrjMj9fmWcpKRjn5jdLgLZQfVSZ5HaLwfefBNMQSAM49X7cGcYvgf8DnAeee",
  "key2": "5EPKZqGkPxo2xT9XukDuPHZo4XsX5LctJZ4kpKHZ5FWLRHxT77XvbyMyAZbKg9NLPw1VKQhi5W1LS2WyeEceciqY",
  "key3": "21Mk4EdEYYijZofBRcQXPyoU8BUd2sk8QjE5CP12Ke3NjdopNnCG8n2Vk2ZR43ycyDJsygYKkTNFxUQE8xbFx1tb",
  "key4": "3gWxBFM76rzkbSEAKTNSuZQy8Y3aTsNW2smSNePhLjy54V2GeXUvhwDMZfHQqHvnVW8wTnh5m141nVkSdG5JCtxW",
  "key5": "5rNzrSkKmmHrqaHUrsBedKe64MXX5MAi1wHLyFh6u2tJF6WX1sPayA1A2nKJ8TRPFpwmHUfZ3194i4sSJb4tV6at",
  "key6": "XukUkva3z9yDzSgZac21Yd88d5DeapgZxVDqF2yhJmub3X43GzQxfuayhYcmoMmDHpaLZPSmbgzqVi34cwbu1bT",
  "key7": "28PNStyhxwtDMwNt7t7W9SLysCFSbCr7rDPN6cZ7VUHdV8zCrtPeGt5Ys7V9b9B2zfYzo2h5Co13e1zHChDAPrpE",
  "key8": "4TzQkfB9FdbjbVbBmVkur5mccMCh78tKu3E3j5TkdXjbcd3zzAXciRqPxbLu2FJvhehVowKmgYJfg64M8k2rtKzo",
  "key9": "cERTRcLCRUB5npBsF3aKdMcgM4nqDbdYJ71xppveuaXTgaTREAToa9jWp9SwWdAaQnwFGeFn6C35xjZhYAMQPrQ",
  "key10": "3vCWuoG1bt5z9DM5hbxsXRiYQ47C94RHvwftYvRpMou6yWapbjr3ZSbjuFCx5gHhyhv8Kw7rHrbrZG3ZqpQ33m7F",
  "key11": "5TTJAsMX4AxyUx6oF46n9eyDd7FwAbtjqoDRZBSwuhJDqx4YZhRnMeqZESVRvwRDnWcQ3bYs6FWgQdXzmCRnK2Cr",
  "key12": "GaNMJ92mtcikT51pdyerb8YUFL2PnG6PT6LcQbrbrZCguX2ghGNAn6eKcUhuC7cegZQfL7GYkacsA79dvb3UcRe",
  "key13": "XPFs8dv2gLY2jBauqwL4ym9m6suJ7AWW53qjqKJ6feZFqjJfYf4zopKmrxkd9JXNjuiysGiPVJgCS7k3tWhE1oL",
  "key14": "4kZGBP8TzLWDafnKkmSnzXa7eHWWq2P3Hfnuxt6atRracoDQTP6W2424QeUECXdNHYbnqfCsK8qnfSCMLHyKd3EE",
  "key15": "4nvLiB13KhjEREYE8qYWJqQwuMTeoDw8aTs2hCwzx6fNJoynJwQcakFwtsc4zPgZv3gcBKwypsBvu2dY8traF8AC",
  "key16": "5Ss5osCSHpkBEBzyTeVfFe45BABFr2LVptyNvk3gR21An48FPpDj8wzrCNKupTgDJDXfYQxtsEXoHGhqUsMdZsdL",
  "key17": "5VURz7s2sr86kMmEcuj9ViVJxVth3BeAgv5qKBC6JKQ23Vhrz2UmPCDVP7ex3P3HBwjstLG34AEGU47a8b1z5BqW",
  "key18": "5QzH3R3bxBdVxLmoG1QR2YvuAzeQdHf9w9vQK3ZRcDyTfNETCfE5cKwwDwYJJnSmMQasL3UxTt96JcAtXNx9JnRM",
  "key19": "22k1tVzXwnPgGvRVM6vmpue8CMDZCxvwHsiM1KGR14ZUT3nqaHuJCwmKSm49RGPH6boxDJkGkWP24aeKrsqsSZYr",
  "key20": "2rD6xqc6P7VuQcDwvZPBwV2HroHoBuwWchP4yMg5QADrFnwYjfS97uanU7vzUzfTqE7aNgVGkq3WWRrosGQxvqtq",
  "key21": "2iRhnoBCU2bn1oKG6F2rtszi86dvg8bzYGojNkKJRegfNFFAewThiDH4RatZZ7rXSTghsPqm5vzNuDnkMEb2bzjC",
  "key22": "4AbnEvg73RyoxCVnwLcsTwfwTVv31Mgm3GeXMUQZjXfcoUdSbyi1jvSUbvnJ9RMrEvTG1KsnwCS8osDkfyo5jPrc",
  "key23": "3RDxCUR3Q5eEmjm6zHPZpSR3phw7qW64NfoWe79nWWFWb2Me8A56g1vYBsVpP3ymioysPCd8fqt3Fvri5KkxKiyi",
  "key24": "2uLrtx622Eb9zBfuqonKZp6LvrM63Bzftbe44NqdcRje12ZaoraC4xQcZJrZtgDe2Q11DjHHELkC8tp4hbAdjuNT",
  "key25": "5287wqYz44sx9FcQEK1Dg1y2HGN8rjDfZiANZSunvrW4GZhJu5fNh3egwubq7nmVPUzTtkEefE1w7ndUg2uHDmPx",
  "key26": "2PZ6GGmhHfzVGHTrNJsYSstyZ2HEX5PcpGYyxvHepBJNQTgotTqE3xHSJcypEYL6D55RK43ZBcN33PXWFidyyPFe",
  "key27": "5Bvj69sS1waaDXxLVU6gbXHPGDKQmjT1BhxC8ssjhB3vkvFFhShAMseqTmfryATYnecfUyLxf5i1BWRYr1wAC3zD",
  "key28": "XxrVa4giPf3SRSY94F5F2mXGwrpQbSAMJTw9mLqoXZ9zF7wUn8Z5iJ6h3Doi8b1kskL2Cj3dr7dqjR7ajDCcmFK",
  "key29": "4Tf7Tcfho6iCY3hVEaCRaeUMm4vEDaARapFKDur6psZ4sQYJuG3QWMendLmQwrPihJehkwkjLaJ4aj7i72LE7hQg",
  "key30": "uVoYyRXZBcDn7Xaw5vBeLLh1QqydqxArdkvdnha9BobE7jcGqjreu9oQDRZmki4R8YC8TgTg2u55GuXw1xLCLxS",
  "key31": "44LuU1qeWDm4zNeEXGkD15ccQg9EaJAqfDEin6ShS7HikBYzVjHttLuu2XymJGbgq2YSmskbFhmnwKq5xG9Z5MtG",
  "key32": "49KLthB9jpgBNJpWVUyc1hyELWb4WLaXBRowegZ4A6CheTr7jqJ3DbfX4Z1r2sMePLp2jqY8DbMxk8iq3bzsDvUc",
  "key33": "4JfpotGoiXkjyeBUTuBd5CPwWM8zgEK9qw9HuWibQowkYVFY6M5QiDCGLKmEyAn3dFYSg7PzVHqfSgAtJLvhF6hL",
  "key34": "3WbLZ2uCHSLFfDTNQ4yjirZeUbuq4UJguf7qapB3Ni6nuh8fpUyzb8bTxGdngPgtWtFuc3JE6tEEExuVsxC8PJgr",
  "key35": "3HvCei1hdbksJD8MfPQrcPSfqY9F2ASquqH8EJnb1YoHeJaHFoNJGun1xxQVC38Q8yUZWF3ptwZNjY4irxuN29oc",
  "key36": "3qE8gC3bCffCZ81CGBjrWCvfX272kgKR8uMDH8GQaPYTYCQJfBrvCs8jUxoiriVnLfzEhzweFmhdQe7hxetf1r6p",
  "key37": "4FY6uqJcD8CKX56h2LQ1yksDzZyc4LPK6Xh1keqU1Pnq9f2QFN53YmXKCrnBzs57aa8yuNQGXungSZwbLvPQX62i",
  "key38": "2j468Y6WRPZWrHSUV3wDWkgiN7aL6UQLDBuuzVyXmVs4jZ9u6xmvDVdT1TekvgCh46DikLnD4yBZGpMiLFgGPihQ",
  "key39": "J2ijJj1c4yhDE3uL9v7ipA11HhsEotx3WiZwL3gNAAcdnHUfcj5B5u382Uqt4aLsAJ2htSBn52matCdd1mxuV13",
  "key40": "5fLk4nFwxEs9NYq4o2JMgp8zLHbYCnEHouPuzCZbkaz4FyngNxvmtFGNpRkZ3r7D6ZHRJRCBAgXxZsekZ2MKxwC2",
  "key41": "3ZqZ47aAiTd1sW4YSuTgtknSFVBtn7WHhecFgPxrTmqr2yca5ByzwvQjAkAsmqKSj5pYV9JzJJAmqGQczwZhruKE",
  "key42": "32y2uxnXGN2vHL3oQZNqa6yVygwpgSLekeEKcLftBmkxATdQQNXiFBZuQfmpFYoAmHxfXU2HCgNHt3AvKmyJVBSc",
  "key43": "uhDZtGQDM7dJ6uWkBEBDXYL8X2XKM2ScM1MEJuWZ5vjSF7icPMGnX6BZU3cKTuuJz1p4p8mDRLQJE6bMg7bGAHx"
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
