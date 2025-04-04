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
    "64eXhmj2FMzSorsUVLZGWSwwx3GD5Wv7qNeLqtqrn1ZxypZrZs8ThA1p6GMJeauQTj9HVh8xvKesrBP42JCDp1VL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yqfG7sSpSy2oQCRfG1gAzXoHQoYHfcK2pmJbdF86dYvor24NPL5JsLjeqFrqwRJoGLjv5F1tzDbdrxpsPnb1nB",
  "key1": "5AtXgeyiTZA9USsWQhoR7U4BzeDudehFM5PjGr62BjadGRB3Msf5qYBaYx88vZZRBTmc3gGw2tcYDLALCStou53Y",
  "key2": "5aMjsBPNPAvr6KvzkeLYCh3SHAtttUmPRbnC1F4vNTsDGuzqeKRccavcLpKjToeFmy3SrtQnUoBYWJ5wb6sqotUu",
  "key3": "59CeKcJNDvPY5cv1ZvLkBdyMCQCFEViCCtJ1cV5XVLseXbJvdfTfV3JeVrocK5R7HfiTuSZST4FSXzDW9pGraDoQ",
  "key4": "2AKcoWzcmbkfGH988d26suxw4t2rFDbmjcBii1V91QK61AuwG7ysZBoy1JKtSBsWZyR9Rgk5wpHpBPq4eFJzJrPK",
  "key5": "2VFXqoPZmvvp5ZR547uB76ZbSU47Z8c9sboL9St9bisNpZJTR3Cvtrfr4qkQobcnKPDJ3gyk2GMYRPc3S8bdqpkp",
  "key6": "5Prv4FG5zvJ87H7N7cgLiaVqCECPqdkf9Zti8tbaRM4CnfBbXjyF4AcGcywCCG9QobBhu1gqweVRceupqvwtymm3",
  "key7": "3zvHiDMf9m3w3fnsPqMMRowNgVkK35tjFwt931Ttm8CSj3GYq6KwBdsx7o1g3Lxkoc3fXiARtwZJGA4JD7BRthMp",
  "key8": "5igr9YxnasrpsUMG2VAr7tkkAhe2LCWuGzhsoLi5DaGpfuwigAQY2dJh6gnu2S186pPtU1njH8qp4x6mMMLjX2VW",
  "key9": "4N1p3qezrNV25JYdWjZnmzs77SSt2Vaf4UH7rEEtbvN5VADswU247mEn8deiEjCK1WEsbE8cMfZL4nsRNvzrW7Xs",
  "key10": "5uyFQHzcndhZB86GGErshoe5GJmGyHivDi1NGDR8JcMysoPYBKWWWNU9q66HayNsN9x56AQdcrRR2bgajjHrch6k",
  "key11": "5fL8Ug5P4NVDG7zc1MvuQ2sZurWTs4v9Z7WoeXC6Vy8ivn2ZgVhxMnH4k16kgvgG5rJCdtW8YXn1eNZP1xs6KNb",
  "key12": "28rYsKV4mx5uNhaEFWs6W8Cp7hmxLQ4Mrrp9vHuexRagtLvqr4URyQVNKZy9iVTRjFCQGdquYmnydJamqaaRFDr9",
  "key13": "4SNfGymqaobEnGmt7XRx4YmdNS7x7GnWFFoR6EfrSFPCoiVY4bW7tSJtnoCQLfyRNEQvJ1iiPRAwuXqBZcvyAHve",
  "key14": "2uYiUoDC4ifyQa13HQZpvU4p6o1A7iexoXALWBfFS7LaMtG3xqL8BPQpdfLxJWNPXL9JZ1YTNKzuz6qFKf5DSqnN",
  "key15": "3YMq8b3TmNf9jHB1dMPkHEUHbhnbvUAnGtRCvQpK3ejswjBToa9G5zNtSGy4UYXrvBRtvA2WCkiv27M1EHimWHXh",
  "key16": "2eAu7uzTVvJeQ1UKQvgf6FR2cmXf3UPuX61HLzAHAZvfDnQ1h1A7VAagbsvd1MSz2oTJ21aAdeziqju26p8x3Bnf",
  "key17": "4RLUyPmAMkRLfUzhNmgS1L61Mc1GQbKf15RJs2fLAUJgrZWPz4S4hstxwcQ3kND16NSqgovzHH8GigewqFWC9SQG",
  "key18": "5WbVQMWWqsPfHGL2GZfTVyjrXuThFkh4QFkFo4CEdtPa3XWfX9cpdEj8SNBLDxmijWNgx9MLeE7KoFbzPUYTF8FL",
  "key19": "3RQUihQ4tahMKK1VXQGcVKrTrD1E1WCtJL7ujoHFVPEr46SWw5EmNsfE4gAM55nqiFPstnFCEaLZ4LooVDoL8eJG",
  "key20": "2Az6VHxYQG5txXYz5oqZYhrwtSF9HtHqejr6L2kQmKPE9ucaU9PgJqRHxGz9bKFWNEeaiuRYmTZ6oqQNJzwXSGdC",
  "key21": "34SGnrad6eSUTVc7yQ7xYyNhLg7N5wanrS7hDDy87GVVYz3rn9gpzkKxtzAzkvfkBFfyF5XM85hbGftxRJtdmYYV",
  "key22": "4fhTxgeB21iV8PLbvoHqDq9qHWa727U498Tfbe2m7FW175ccQjv3PyV6D6A1syp96DXNcsCcJwA6fdC85XKn8ryT",
  "key23": "49LR9VrNicS1DMUSy44Xu6j3YUfuo3uzdVKZTFjPRuhu8fTGU8ZjZHgqsqym8GJstQhM6tR36V9Mi17jJGLyKdAd",
  "key24": "5Syh4iohRjhkNnURkyqxbwP6q11vic7Ys7CzDxorQwwgixwHguUcYt1dBW6kGrHcPhe1vvuAYDSjdWTJzJgChbQi",
  "key25": "5QU37CzFsUQ9oH1t6QUBvf51vvVLFcCNKE7i3sEfvFUFxHUZo6QLE99NGnK8MjDxiccSauLZUSZh6bMLRynLLLow",
  "key26": "2tBYP1qsdr2NQ7oTFiHjkoYNZ8m92eqB9dVGta9Q7Ed6uJjeVNATvdSu1VxM9QFBCSMcnYww6XWDpogYyXuzkmUX",
  "key27": "2RDtnFT66C1ap2ydUV8kho3fgge6wtYfCorWxHYpfKrM4koVyCYUSSjXy1r7jS6QPBwYKwMUAGD5DrNLtXDRM7ds",
  "key28": "3oM9hv7fpkgumXzMd6EfgWihPwRmxw2tKtMe3z95BkJwPw69hcH5QuUNcys2uGjjz1vbXUUYCHbaNaWbbvJWpTeA",
  "key29": "5aC55a3xzo213hkDmQwDkZBt2EWZftoghLu8brfXnrFSZ5Bt9jCin6BoZ3zSFR7De4ziRBr3ywRajp9jauemcDXE",
  "key30": "mHysYemTn9j6MPitzEvasJcuUd8aQS3RDVEjsLwEHUv1fd1RnZssiX2hVdQ3MAS4neQ7ozdQaH9fEXiv9egt6sE",
  "key31": "5ArTEDSBdF9mSZVsJRKJ3fmnpZpAGPMEz5m5XQgYZ8Z8YG3aPj99TxZcrAo2LEyHicAhPQTaPaVAXabZ6MUK5cGS",
  "key32": "2vX3e88PTEg8cKDcL9bFTZXvzejPCedwPfg5uPRTPZZUJa6vv85JkxWAw2V6Fv6QGsNeimjRWPbxrj6ZZuzhV8ur",
  "key33": "Vp8b1GooeV7oKMmiqZHT1wWVW33qDBixT7jAhsSiMwQGvKistcFcujdnUQ9ew32AwQ2gzHdKUfKjcWYHPnei3K1",
  "key34": "wQNZhBuW6ZEswodxdScuVX1ZgxFTkTS9t8XPeboiEPKg4T7vrKXXjt76j7Rigu2Wu19JPwfdqK3A2dy4Mw8RMw5",
  "key35": "3NwPWuXdvagxdptiAjDdc2xReM5ZF2HfLd7HYy6Ddt7LfWorjWJxdD89HA2YBqfLvgJxSTbXkZY2a74SMKyMEVKS",
  "key36": "4kk3WYovpZdomZvToUrPN2uWiq7EqdQTuxbuG4R9NRceWaYwkG6mzsb5xkd6PvqRacWNwAJaoe15WgfUZAKHC5TW",
  "key37": "2svkCaS33XfecQYQ1ismt8HrjSMkk26vuJtPwiwfVFvkYRpZs3BypcSUzqLbfDnMuBa6A3FuieJ5TzdrWochN2Yk",
  "key38": "52WxJcVYruczfUm9uoLk7CTV44PNp3LDdip2me8rmPuhJxp55hPZABdKDUsUVo5hyruZJ4af5jmAMw52jEsXibu5",
  "key39": "2m38LgbDe7WGdXFY5rc6JcboPKiJYCxbzW1TobHnQ7pDzkkuDvfeMUvzkmpCRib5gDyFA7pAqRSRnXNki7zrYdSU",
  "key40": "5vftn4gxifuRAqYJa8TxziEmUPve14tgtAQj1eQfQnUJb7yGJtkLKuwQfqsTbt1EqDKMp9eTAVCHPkXFCio3tLCE"
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
