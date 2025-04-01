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
    "2LvCCHngsajXU2KoDeUMAKHKsdzfZNtDXU9BJxgx7YxwS8qjfZgs6U1po3wXVAb4yr17ThdredxJQZpBiTfSFsqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FfGLgEGhgzbKiYpu25QSGEtDzBi72jSrZv9fSx1AXMUvWes6sa9Pkycj4ro2et9FfMLUFCK9hrB2NjTzkpMV8TG",
  "key1": "4ZsU6fJ8jhrTUsSxT6fcXghKyQcBNWDf2Mq87HLDUdsWMo1oxreGDEuckpRzhRuKnQchWgvnqiGGuiKndX9ULjTJ",
  "key2": "3tLKRR69K3ra8Acw4N2v49SfRpPn4xUqhofGXpRnKzKMoxRdde1k4vJvmVekxgxL76sg92hVGKgmCzZE6pnjxusi",
  "key3": "3KxLMxP6L8V7jZpbEbfTzqVMpH8KbTwPvTMBPdR9SGA9eh8WhBGo8qpvXQNKJaK54fxmeRvty1RXTmfsXh9ZLcen",
  "key4": "2CLuk41eKqk5ioWCxjk8FQ6fHjSLJaPTa4LoHhmRpadSzjBHqbxsjCkSrWFPv1vcwn7gAPgu2sg7NkE8eMW7dw9A",
  "key5": "2zPmivzsiPmq9pA8w5Wy3LWd1eNPi6e3HvCy6SeeGazna7YenoVHs1ZgPDf8K15hFfq9aFTUUGEvUY3HsSzzyaBg",
  "key6": "7Z1xKuJ6A4dRnQ7g93oFVdgeRoUA8oi5LmX7nUyWcfkYtCC49M3r5YjoCTmvE42e8hk4c4QdEvkJsYx5ZUdp2zF",
  "key7": "RGowzdELXJuJTsqx1fjj15dCuswvqArbDHQY22p5pYH7VaTGDDwzSFimPKzRZCrpr8n1Uozn43Vp4TcGxMj88X6",
  "key8": "RfrF5YsUNEPLiibv47wa5pCjFYrvCmVcpUHeNqyJuyKjjfUMwejyUEAU7u69PdgDBFvJBh4CxPrPYM2AEmjswr5",
  "key9": "2fcR7vb58TbCD2onkXVF7mUcELebiD1TLeFVZViNGsUcLNvfbTPVWi2QjjXMyU6T5sLJcSm2Zq2Vio93jKC65ZFU",
  "key10": "3FjcYXjREwEs8xhdZ8Uo2tuB9ZVHpBccUF3hq5rQVfbBz2nMETRBZT7Q7y5tktDG9nYVDiNaLwoChTQwJp4FFEDc",
  "key11": "3nvbfKJhxhWrNsdZULBs1k9V8epz2YULZ5RqpXfK3av8q7bD7uD1Nekd2DxWLVqoGZQKfJoe9G3LiBH2YWv9MTz7",
  "key12": "3mCfW1XLrEEswC7PcTFQwemMcC9F3ycdT2nQ6KoN6jAiLtpvDUApYsWptWe9xkkzyNbmUKoPuJMjbwkXSqsx65KR",
  "key13": "3NrkLuowv1j8JbRZsvNJx5vQGsnt2g1JzV1q4r4kPbqEUNxuDFnVk3j1R3yfZpTpKaHQuUoeutehBSHvjPJxaReG",
  "key14": "KbKfNjtUk67JfB5wk5FzWxAm51muupiocSCNdVA5sDpqWEhx91cat9Atjpf3HE5XUZwifzLd6zTJJNTZoHsDcMz",
  "key15": "3yrnxqicS5yiNQs3DGKtdMcs1zpqJqd7QsezqfjFfEBmyaiXYuivg58r54cVNKwruFQwVRYfeQYDvBZxeR8986nu",
  "key16": "2SjYEfc3NMHFAHfNgNBDHsAda4B9qvQf5LpPYpBsVXHuNpDHmjy7Gb8SEZGwWZrJcyyJeyDqwdBtxxrjvqc9GCKL",
  "key17": "5sQdVoQTHRXUwcgPr74ZuUqm1QF49zZcQqLGzbC9AHUtiCUhHJziM9RX4C5BevuQUqfhk4U8AmFiQY5MhYwytv2a",
  "key18": "3AT5wdTtS1xXRZqMBi1ovymopREfQ1HTyCBK4nL7mRr6v1KGQbWiPUABG1CMp6GywskhNwumsf6TdWWG8G2CuQq",
  "key19": "NUDRcr8RE5z4vs2HvVbfxEgG84CM2ix6GuEXZBfgxuD9BcrH7U1XtVX23rLngyo6QNGiBdsHuPeJU3Sj73qwxav",
  "key20": "59TtGHis3UCf4hE2xMop2D8J161fJymJ58twpEKgPmmD3DJaBUsy41qVL2zMKoZL4Jis3XH422JRmQJLHWk9qKUo",
  "key21": "Rkmwsr34FRcFyM1Z6hw3DjfB3ojejPxWXXmoJCzKFXm3Wf2aHSJWmdrwdLoCsZUq5RHeorft3CdhA1YTdED3pNV",
  "key22": "2HV617K8orAM9bpfsm6xEw12nd9BxaYNFP3SnxS3qdLGZjUuSQh2Gg7btiwEZ43tNmugAaZN1kG6HYcH4HEJkPsK",
  "key23": "34F73re5yMxBgr7zyaVJi3cCoVDNmqXo3NweKmAyXWsppYogNrZt721g1AFNvG8C4mLGwEwMLDAfC4jidK7ZAVJV",
  "key24": "39JymafXE8qYSZAU8da7YLhT9DcrCXhVv3vgMKuvxRAQd6nEDYtTETG4SLQMd9KrxnUz1qyifD4YNoktsTYfZxfP",
  "key25": "3YaPpgzvoeXS2MMUNbjfdGnKNjaLd6dxiviqfSPWkc6HvTVMmGJ89q2RwdwuQsLfuNwmpWCrKDAFhZSp681FEGbZ",
  "key26": "32WwyvxikxLgHPrZPEmdh7pux7Xbz9CagEroBNkALtxGoFqMDdZHaHcVxwbKWLTWGrFLTJfjT7P26qSqMrXhoVQH",
  "key27": "5VmydJm8f47hgrhN91GD32vFQxmogNnVj3h2wehoepaQjmkhktu3NadaJxRFKXk3miNGdxQdKDgXvT59ghpBo6ye",
  "key28": "5FrFfPpG1tYz5YAoN1JNpBq8BQfSZVrZgwkpSHweZhVDYc5DHcxR6SAmebGdwGQEGCne3yUa6oT4Vuqe1Vp817a1",
  "key29": "34cc7AVgZf9cbanViNJdNofVzzxRzKvv2kDCJ4up3BuA56oP4id67J7fKQ1w4zA7iTNHiSmnAgju9t4XvqybM9EF",
  "key30": "5tRUtrXmZwdGweUg71HmMmvaadh4CV2cVXtg399fgAJhg8Kdbt83qrom7a78RhQ1aqGm6L8fShsEyHqX2DKYv3of",
  "key31": "2oNYxVDFkSPn3jNiiUCJT2NN64Y7E6bBJmr1G3nGfKLPRPih2uzP2tGePHvW7MzDSzyzdJa4BR1vk4YVY5qgAf1E",
  "key32": "5XUeveH3ej2XEBZ3yRFaFPC5g1eCBMBiy7dL47DGEmTDoYVH514ifz73a2jycnGQbZaqJLDMKHfHKquf9T9X8mSq",
  "key33": "3irYKfKwU6w9tWr93tbjZL7my7kYT7kcp19xtpJAz2vaNxCirnPTpNoYeaCKCd3n9z8CwN5FgjtrrkbDZApkswXP",
  "key34": "4TwB7ydpgZVnMa4QdnKTTHsWFxLQ8V8frM2fdaEnQ4HhJoMEkT6oNEd7gGsqmbcqEqB2sZrmsE9zmgywVhHB4auW",
  "key35": "5TTMZrXEBtE2veqBeEQj41BtxG84HZPLjkz7u32cX28LGNxcWicMWkgEFtFZzjfqRv7SU28t5TdKLxsDEP9fZ9MX",
  "key36": "5SSCPmGRipmP5GPjLzZpXBacd2zfHvVJg7tsrMuxsPabkZwGE2L6joCyDXu5KXmCFZNevWQNsYnM8xiPZ32DKRnM",
  "key37": "dPN37DGbLYbcT6URnTTUbLnphggMn4xTNmLLHLa2BEM4ZY54mWfLyenfPvjuLBjw5QPRAgf62Ve4QyPXd1jjKJT",
  "key38": "4iJJQfuRG7hscEhPUFqgVS4Nw4opX4Jr52uTFTp5D6twmwE87EYnBABdYPRdP8XZdzS6AtxPgUg8MqAsYWHCofER",
  "key39": "4EzKVd4z8FqUDFvzvihvfWBkyYErH4PP6kZegBTMAZBDWtQBmDjWaLYEVE9r3SAn3uBp6Nv6fT3zEsUE7iem4FMT",
  "key40": "2zs1SudjeCneVYyw8xrYKmfMFbrBgehiyi9z4Rna9FRxtKrsmC3gXTTjrmZxmuaVTy4N2Qn3t8cTbueCh1wYjZGy",
  "key41": "5AmoEJCPM7nSATXBerZqnpFThAEnXFpXuMvQEqgiAxuEV2VZYLJYKMzN2DHF3qdDjfu3MTENgXVMacwUz9MdDSTr"
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
