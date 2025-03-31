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
    "4qhWuoxPq8ydGwS8aZA1cdTyFQ1CGw2SZ3fgRuhfMG1Ye1RscaSm2yTmrfQJ6S4ETPwbp9J1Rcr9Sqgv2rLW2t1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b4EHJC2wxzzeNjeubybmMJxiLQXLvfasog4pwXdtsEP1bYhLyZdv4eDKhqxq25nWNN3rk6qQkSsKqrnPq49TaVi",
  "key1": "3TeprkGh5kUWjw1C6ap8ZCgMBLtLB3xB7PuX1foNdBU1VrR91F3p4v6YYD8JMxQvNbLV3xTkDjxRhboCoBNqZRKs",
  "key2": "5afhFpYsrKWWjWF2dTmDapT93kcBd1RafRKiL1vE7BuUzGWv6tY1rPqiQR5dJetNZRnKcNARCuQv4838baTzhyQp",
  "key3": "4XkhW5sXjC54tmQ3U2p98RytmJYmup4syuPf6FKDvrgtKPyEyRukoETRpXfvbA6TYnHS2uc4rpjh6pPMfTzgVJy1",
  "key4": "3gDX8wtovAPqEuXUd4JMikaufaduqfBP2CFNoMz5mZpSHUrtraPrtrqMHXe5w1KMYbg51zc67sDpTKMDQfo95qxQ",
  "key5": "UcDB1quAtLiZ8yjr3FMG5abGP8egc5mcyvZZXhBo3YBKXzHKSxwsYBZJpeHAnhnnDzHreV8XiUvXNjDyuiYTUim",
  "key6": "67H5Qq9f6DbpE3cnt6xexhaj9eXAA8uNRBSFkZNfmfLQsbca4siYesjaFdvTJF2fxbm1sEu6KenY224P3Mp6A84J",
  "key7": "3ps8KwyZmLJBLUmE3M3EX6yiRZjcZGjAPMt9kKwYjPcUVqvVTP3vMYd8RwTZbwUtrY2UXPVuaXWk2LV988jjr1fX",
  "key8": "3SwTnw19N9TcswLBatVeBro9NVib69NZ9i4fTrX9YZnjCcRH6LPtZ9MwpPm9hmTgkYyj3iWUhMJ7zfPAKkd7CU2g",
  "key9": "41KWsATEXPE5Yty2CFGjUKJe5aLrva4gVvJ8kCRfdjNdJmojSRW2GQmPUqgYm7wm2RWK5K3d9TvhB11tVWivv5YJ",
  "key10": "63VbgGRKxKqvdR28iWnyPS4fib4pnfk2WYKYAFogFLLk85xK1GJPRVJmApQpY291X9Zr1yJ3H8mmJpvVsyfuAQU",
  "key11": "21kFNcHEx2S947MidCkn1GiZDFoPziVzKr937Fmg9jgQR2ahKDjoC9aJXYbaXCawbh2rVQkjwVxn77eRVtbLd4mn",
  "key12": "4hskLa8NePR3R9nbKRyo9de7zsdaae2i1VnzZW1HGqFLvNmtqM1SXPy9mjXSPj2Sp3JnEfsjhCvdoz4S2uBvsc62",
  "key13": "38n2QDZJyfBAbMHKgcrLkHzqvN59dcs2hdQasSXvohCubBdH7t71cpuh2tq2Qi2iFfNp5bTTB7W2CZgEpV4CRS3H",
  "key14": "2HFv33ATUfnse8rsx7pGFZFixq1ZHSjTVKgVGXZLQPJxZWKAGFYYRoun2JmroA4qbPPX2F1mfdfLbMTeqG3cpx9E",
  "key15": "2Esa4KF11pTp33JZeEPouKhYtuyAh6YNJmCMXceQ5Pix9xeW68Cfsvz5AriULejKh5hDwrRRJkfXNhhUVTzndwiM",
  "key16": "4NDZr3MQkMtGk6YusQQuTB9nC4sQBWfsoCQi1mcmdKtBQ9fsFNcBJaib6hCv8XvVCunhEbEy1MYT6xfMXNyWPekS",
  "key17": "WY8yD63SfuyEktvtn54jedm4MJUKByGQNUPLFScy24qXFkvyW5yYjtpVKN1Q9dtRZrwwDRuwt2tGheQ3UqB63QP",
  "key18": "2yhDKp7QczjAtwKJWKthYDvAA9KzEzzB7nBQvma31jgAggwdYA9r5ULtnG1KDL6ecECxSc4HQtDooyMTwLNADxTw",
  "key19": "3kRFMHjaBgPYEHdLujVqw52ex4oq89GohP5UTU7fqSQRxDgkMUv9ZGtCerL7XrryzeVSDzSCmmq4tedBhizNLsZ8",
  "key20": "3Y58gXYeVRfYaJgCoZ9cvKjAbb7eXg5cvSG2EFxZf9GQf2sWcxCzmdpH6wNe5soYJBcAAhT6A7MzQqyCLTYZpivR",
  "key21": "m4Lty3RXAc569AAPZTbddRhvTRUMSKcYm8wyx2tcAEGWM6shzSTrPGuYtxDzHsVTLVeyQ2wyNM52rm1nGi7MvsR",
  "key22": "42q3w2voZCoJGgVzNMhkbrVECov6JUJZ66nh4qpYhDdMGjq2BDPnp7g8gHWp4m8KSNAwJLUxaw2i4Y9qfMHYEEdq",
  "key23": "uJyM35njMhhajyw65mKcGWwMn8QLNZfaTYPoQtJRnyNZf8dX53DbgGratzv25zTyuHr5d8pJ9cbkuZBa74TQ3Pa",
  "key24": "5yF4wh5cq7eW59VAJSmFrgF9R2v15npS7W4b3TuB31sX7xn5ZJYNULRtR3tRK5dSdN5pYJCEMUfVS6SZjrFGmB3",
  "key25": "uhHJRRgtiWW8gacbQqTVaLq2yKVB5QNuhxKFnsKRw9mnGQLJmPp7aTqgYHznsqbbEatnLEADdi7R3znHL4Bn2Lo",
  "key26": "5MLrPouHaiKqZaxXTigaUvC2fDB6AqpssUy4NXxLCJ9h69WPXiFVL4ySwt5zSnGSnVmER8fxYZ23RSw1sJ3Y5zDc",
  "key27": "4FRuW7w4YFSFZKMB96CijR4fQ4RoZNSWsKuS8aQYe6a4qZCwpegcFTcFKFD9HwuyEXfQyj3hdtHpH5VAjicktxro",
  "key28": "2kp6DTDqqVxAJ4NoMZpWtQe9K3e4Jez2DnpXmR1mzCe5FaRDQtad7YRiJBfeVMuUEfAREpkk7SRivFaJoejNxGta",
  "key29": "48mTxH2EML2oWxbE4xjGi8f4PKX1NK3ru3egTcG1ZgvgVrDEFgATL8Snb25R6h5LhipCZGYw9mx1iY44gxBmdaik",
  "key30": "4yrCrMuswurYfdHtrY3HV2xZ4GeBa6vySeka4Kh7YXqXeoYazQ3pMb61ku6XUSpid8Rho1x4eRM7rxnXZ4VNq6h8",
  "key31": "JRY2zqwG2aiRrkcjVnHLa5KgF6PCrEHWFazk4KkpHJ7H68XSBsGYpQExzwMyJrSWNcbPUp87KRyE5VS5j9QaUj7",
  "key32": "5iD8fkGomMLSuUwrMJKcv6LA2zU2BJTgoof9wVU6fkL3xwgwQkCdXaX76W8PZPQgeGsD5KcDS5LmAuYeJAPjdWn7",
  "key33": "52CoFWLvdGfEJTX6LTBvZz891F6JCyZdFxd4wMnqtS1m5zD1wii6F8Mx9CuZUkVQziwuFLCWMERdV8JYUuHVAM9n",
  "key34": "5qRCjgH7jwbmFzTccwvJCBohSgMbbj2FcJvqtd6XtXMwEHoafBDtSkmeB2S3ZxpyhqHGdPTJNAwVh1mCkLBKixQd",
  "key35": "3XSThTx1SL9gGGdYFLMeoiU2i3kMJr68FghhSBHW5G86haXFEBwkS4XvkzX65UQjEu6xjbH8UoNsbLeDrPzQPdeL",
  "key36": "2DNkLLZAgmJZpEC3zq9kmMZopcm1tX4EjCD32bsH18CPSFYKvbhyFKmeAHfNE2RVeegAAL1LdyTXJdxnMJMghmXJ",
  "key37": "5NE3DB1ty6UYhzC6aR6fD4GAqVdpYfckJmVUmhPZ3K2gXgC2XQMi58yg9UJWP6CeoKS8Lz5xQ4gcoRZp9JL2Ediw",
  "key38": "2t83zBwwCWKaHMpWCLR2GaZP3p2MiyTiFUm8gW7yP35Fkpp99DRs3WuRKtpaKbk19nLj1FtsGWnnR1VBPCaXxGi1",
  "key39": "5c2ot2kSu5EsxiTjjrxeZDjfr3Kfjxcn6pzWYMbAay39aNktQ6jorRHiBupQ7rVwbA15crU7cf6hi56bJkPbsTCu",
  "key40": "37fuSdJ2eR1hHrsf7HtTmcTgQr4HMtDQwb8ATqiPixjtycDctpicd3TZd2GYdW9wFvJrtPmCyJSmTQeiSeo1YkEs",
  "key41": "67CbwqJ4b5t1A5CQyYun7qXvxjdU1jgdXPkepjQeDKpK5KTr2ZKkwFxSvaBBREjBzNMS1zzQnkuyBJWdqJoQXGNP",
  "key42": "4kekUfghDFsbNe97uW6BaP2HXoUAers8h9xjw9aaM8mRrq6mH8dxkgavd1wbSb7G1dHpLDToommL6LNU7g4JJDv5",
  "key43": "xs9oQJC2Sbi9CtKu9wVY8Md9jwCvDCMWCCyRacwz11BDw1TwYnNoWL3j2L2gfThJkcLG5wVr9qPYJWEsr1xa8HD",
  "key44": "3dhH8YoHjibUQLXMLFXyW5dmeFRGdNCx4AFDVy4kAZsf6WFXBLCTEdTwckGWVyDJaH69oJNMDGNSLAgzJ7bsV8tC",
  "key45": "2hzcsPBqyHkYNbAdhsoRC7xbxpob8LafAXe8sx9ENekePfkmLd2x8NppwdqBzev19whySTg8j6bxJiLVZnu2M3mK",
  "key46": "4aGuyn4zxsdQmbXSktkE4G1CvkDZ77ohXQXmChD1iDaLbCp2xngYtmNuVaWXMTPRQk4KKgnTZu1PU3iUHhVubjfR",
  "key47": "JnP3WmgJxXFdT1DUu1L6gZXnCFWfPMTsEq3tw8yASDvXAKJA38V4oZUphqL3PPoqo1XeZtiqayKbzRtsA5Kx9q5"
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
