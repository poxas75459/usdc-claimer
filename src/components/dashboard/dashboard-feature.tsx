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
    "3QcHwJH7919jhtsNcH6t88ptyWBk2rzAhN88nDPah4xFPLv5SKDvLc8C7TXYLhPiEukYC6Pn1U3M3UB3Txxk4vEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xhFxQ9B3JZxce4kC7JsyvRjXMmVY8qYbQFTp9iGiaCJMvbSgNbp5iffkcXQwqqVCgcaVDA2XCL1TU4WTCnEAKhE",
  "key1": "5v1SApWvFcEjR8YES7YbhepSCKSun2XJYFsU6fcBSrK1mnLqM3E5HxKyEBXcXFnaGRyq6gdWgmfx4uyeKY84LYxE",
  "key2": "2CZTDuNYKGoDWx2D7ArNMdNWZKJxuuFhrK7ptUz9VRpSh5WzLBu62HT6qAybJ5u2C96EW9W8bQw6PK1wL6GrVEDE",
  "key3": "3EymYuZsPq66XzHz922arooLMqpF17szYYB8NUu7ohfkKCn5T2998FqPuEynWrJ4wfbbW4Ykr2aZnsVVAhPyu6gn",
  "key4": "61qMdGaXyrwMY3bX3vLPpg5dWuKeiEAqgWgmemrtAuaCHnkxXiqELztJmirBm1yLAHwT5QbKvzu9VDvjBxvGWMFS",
  "key5": "3kCnLftAHiokjjrcktrCfScAauHHqaHQQ58HydUNd6x4nvsaLM8RN2v1TYUz6dukcNGceph1j185dfzb3Jv34cJu",
  "key6": "a78G1Ac1psRZkStwQ9K7fc38mV6oUid2yQ7RpbvXbtiyET195gW4FiQi2DtvBbjcpzYWSo3j5iTBGmAXZfMb3Tk",
  "key7": "3vchG9F3BEJKGMRX63QL5mqjhk3PYyTv2ShZ7j1EmtPyfgXU1V2gdUBrN8Lqp9JVso2hkew6EqmPosssXqMD9mgg",
  "key8": "5X4pgAdPj9bxi5BR9KMB83mKQd1qiP1AC52Z2NFVLv3TjxeU7FBcNNfj9UQqybG3hPbxTmMmcrfo89NTwt1HE84S",
  "key9": "4f4RUKkiTbN2QuvXxdBczrdxPnr6X7riWsqgYcmCE4BhGZYA4jdhvrdbLCLY2VGR8dyzRNt11AdUA3XJz1KHTV5U",
  "key10": "32hisjWGXbTkqo8fu9A1ZAv4SqsZV7NDybWi66AoPnSkmL8PZTEfv54rUyB8HZtGwtPMuyqbinknfVTFSUymC4bB",
  "key11": "21G7Ea7xRMaUpP1tDJaMK1AuTxY4svirSMZYmMJsf5jT594Wgo5vdqvCpBsUNRtwM3TxffXCvzhAvAnYFQy6kqNk",
  "key12": "4UKSeLSqr1xNqe44cvRC4NtKCqiYqbKoSKqKp2srzRZdMX8q9DmLVtrikNeRw4DZUD9QeWjF5zwA2xoT4nrUnRTn",
  "key13": "5ZgfcjHxsFUPEMmdMwSM6AMrvaiwfNy1r7dQf4DMFxV5m9dMX3xz9cU2RDMknypBt5pEfN5yxrhfNryfEEUTpgcP",
  "key14": "Fj3EL37qzehgRk3ZwcCFoNYo7PC5DHcaU5gvtD1X5BXYsrRq1wSbKysxXgoLjY2WtyWKzuJJmf6Q5tihc7JsAdJ",
  "key15": "G3R7oeKWD2T2Q7LVX9CWWec8VZmLERHLN7HQrkHTbdnkxThpS8p5jGQPT1XKQcMVSgGLSxmxZ4AdBo5h5pVf4Px",
  "key16": "VChfjsVZhpAy9J8hDap9YokzCbxqDKZtkgazXPZJr6UtyJG4XzjT77V4SkBm8ya9gyK61iLXR4622b974LyWXjE",
  "key17": "e1X37PVLKb2prL6DanZPJExPSvGo4RB3KGYgH5m41omLW9T22dRN9dscVLTL625c59Lkcmx33sbqtfbYYZLUCpK",
  "key18": "2rhyhVyTNAFEihwTU75JPTmCn8ysfRuTPznRrkJqqqnskQURLHRery6q4VraWJgpqcFU1b9b15E35w1271SuzNAQ",
  "key19": "4skS3ANyYV2n1SKLXrExAJC6esZLwD3vjf2fgeVravySjztEZWmBcpp9zXL51zoTha6MMb2m1AVjNn23HdkAM2gp",
  "key20": "63TEPUSdBz2WJBEnt3wMiAFRCpmTuDv73Urt756ugRjDhay18SC4XK7kwhK7dSgoaPDHWFNge5AdBBzJsFs8HU9r",
  "key21": "47gdxGdv6WAotCKy6qGq9HYjqymWoc5qn6qUdRt9YNTwWWk7FRh64yPPJTGPBLCmSBpoBvUaZK8wvxvBArE84mUB",
  "key22": "frJT6Xfr1xeaKsr346o8D4kwSTjGB3uccXgC2H99PiaN7FFmGpHrAFe5Gib5m5b5Aa3EBoyyJf2utp5sjqmy3Sx",
  "key23": "5EgsYCkV8Ynhs8Lt35fYeadt9rdcLefJfsV9MFJDjzuwjY5BgZu8jNpHKbeZbFsDKuL65wtQzS4QSdRjEHVKDn12",
  "key24": "4fsiH69qgaxZteTwKCChfDBjdHCmA4dg121h4q2Z7KvfkqGkArRduvaaV2NwoczmYtkYefXrogJfkz622AzFr7VZ",
  "key25": "299aMzeErX91QTnVSkWYA8kLeSq3PjMa4vvCFJMXsqrtkiZ5gsuvXZuRn9mMvuWPmeYytiNStDbgRRbuMLL7SrP4",
  "key26": "4tACo6qzAUK2tvVe5ukQAqSMh8pQ6dQV38pWyYQvgwPs9uVv7tEHD36hV9x5NRbqKewvoPs7pP8PGGZAdEQDy6Zx",
  "key27": "sJGAUZFB4RNJg4xG6HWsp7JJFTrUZ34kA8UBi25nKdfL3ziTcvaQbS4eRehrrqNmVcaR8eqHP1DJ2HPxdbjAag6",
  "key28": "nfnskqUvbnESc3fD5YSMDVC97i48Csys47De1iMAdjf4NHh6ELfd3vfeGTApRAvp3wYPLPSbpuKmKaUyW11phYX",
  "key29": "61KKMZqk9BSgsrPFYtmPwsMqgKnriRLuLviVzQxDhvvHVEfgixKGZAyt3wwf64vvhvABJoYnxkV7heehc7hgzNhP",
  "key30": "5foEecWqWhmnmVH9P5TrPpNEqcweGX7NnBNPYYtx45aft83Z5XuYoDgDpfc5T35BCqi9gwuNCibChhr4Uxp4D2Jn",
  "key31": "4CUFeTQwHtk8U1TYiWSZDsE236QWzWuHp76gvTG3VYtzs5Yj4ssKrNkq3bEkUVWmjv5VRX5CHcmYKfDcT4o8UPyW",
  "key32": "5FXQ7FgKEaGXgQH4WXpQ4wLQWaZmy1DojEnuJ4ZR15w6ovY4EXPkSyioWznuwwW1hRdS1HxEXDyRdq6PXuhNWj7x",
  "key33": "4DFnLdaVpQc9AMzheJHiDheFzhTtoasJVqEv8RCfRvdEEXXv9rqUQmFqsfMqxLj67VsFcMhuxdHaP4Cntek7Sk3X",
  "key34": "4iC1mRyqzxozyjJwbTWRVJ4mtg8HvaomNak3Jc4S9WkhvJrTsg4dm1eeCfVdNqvKZraTg985zo7YCccAkYx33rM3",
  "key35": "Fr1mhvJoVFTHQcimR2KcjfiMbV4YcYwctfrXpo3WY8RNWE5gXpDAgmi4DTWYBfan1xLce7wusBj3CVw7ELWQRAi",
  "key36": "3PU6cNEPugTGTa5tdRPnHg4UYmjpCzGi6c4wdGKg3bSVVyctxeWQJA9b7raLPdPF19hnskWnTHrVyPrN3M6Eekse",
  "key37": "HsosKNf7nVeB9MApFBrZ162AURwgMPjmo1yerhzJYp3Y9KR6Z2QB2PLpFSo714ez5FqZJz2UdRpRyqR9bqmV7EA",
  "key38": "2ZtFFMCmnYcSf9T8VmYgm5zZ8g4TVaEY7mD2RdwP4kxiZjZpgSkoJiJq1A2ZeBSAgPAUtVPvGwHCVJ1JjERszcmA",
  "key39": "2UBVrh7vjiryVPc2BgqNndxbVddNkpsr3BoMhqZXpa6Hzj5pBPChxB9dc55h71rvqsBQGBaoyKJQMKKaScok5vM9",
  "key40": "3uWxsKV4XmVX2nhdeZBnxPHn99R4qvWJEY7Y4dynKegdRSghBr6hDbqezWbfUEvkFunS9cyF9dNfLSjpZG8UPgy",
  "key41": "3LdpKuTVHHr1itC3N4yuTeAvvZBueNVy3NKLAn6RD5f3dHD9HYkBNP8Zv1R7oiRwGfopPFoY1A6LPuGg2we9j6Ty",
  "key42": "23DGqGk38cHe3mPmeH8t4W3N1uHbWwdoygRKmgg5WrPMT4BQPeHpUHcpDL113zUXnjJV38fgJ2qr5CYCrFYViCKq",
  "key43": "3wMSN7PbBkxDFeP1MPiPVNfb9NWuFRsYAKjFektuCAcyjTN5TQ25Q28QMfWGbU6zjpXCEeEYBiQF4VcsPQjrYcbG",
  "key44": "615McgkoRGoFZ9YHfZtLs2DKQgfmMuWt8R1BVeKVhmrpocNRypjvRQaHx5YRAJLRe9VRhMXTgMaXrCExwJrbaKFu",
  "key45": "3KQmGWr7Z2TbN8Ue3eAGVDH9QpxFDY3jvf6tP8vWimaMg4bqeWdCvrrJkQWuxtcVZWb4sZubivZxBB71oAspqesK",
  "key46": "WB27QC18VSuYyP7hM8uf7JwecXHF8rzxL3hnQcTwK3aGqeYCwavcm8rM6pjMNGjJuckdiiMHjL6MM2oFgbkkq11",
  "key47": "3KDWgavHtBGuTjKhyrsGnJH8erhD2hmsjMfuPXGwZdGSK3ecb6XeqTZchuYruewDfrdn5J9SK87byCabd1m75LXw",
  "key48": "65quzKn9EnY4FvxYZLniZg5S6gtmwaDfRtsBW3iM6uF4k2m9KSgBgVuExWDTZ5PxtEuj6L7K4UwRDaU6iEHhEReC"
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
