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
    "pneaSE8vE5totj5FuTQcjMVMhxon32ib3gTwcMXtdmPHaEUKMXno7W3C2aFhoBfwWBEkxtgbzkkduoUYySaypfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HAk23q3WgcgwdSkS1oWmdkaYG6azLY3dnvaKmefamFhn5uDmjXexM8aPUfhug6ibmkXUaekWjxJJYjoPHLcYrqX",
  "key1": "5WvpdyafoHAhxjR9MpTXNcwCbSyuT6eh5hp9dLpSq9g9zogr832Z64F4V8ZyG2Xum9jkKURXtnZAjEayeP3aW4gs",
  "key2": "2Dzw1Wr5he2b6cQyCaaDdK2pic8LSUo1e4UgGQeLVJHAcSoQBFHCv2SUgAcMdsVNM7FmGpgszMecdnm5PBqv9rqp",
  "key3": "5wtiz24PtihxiVe1eLwZLAmR1bvXDn4Q9e85cauoScvpTkw4jW3WS6F2jDM2nzsrCJnSad2UmhXjCQQSJJeXjMcV",
  "key4": "64HkpmWFgCKBBAcdAAPxHHVMLEx5BG4HCCmTUc94Q27fynqJWJP5ZxRQSdFTV3fJ7LkqQHY26NsfwKo1D5AapYTE",
  "key5": "4HFQW35isqHsJUEs5ebYtwXFg46mq2cDtHYvo2vT2ooNJYZG7e5XcrcMxGhMxkDir21rogtrzXYPnXzWm5Sd5k76",
  "key6": "67o9Mxn5RVuBujyH9DemL8cYtKYqCj1ckuKWegPg6CdebR4nYRNhRyvegQqZnWCNUn1Km4D1aVc2ogDQbtGRX2UE",
  "key7": "2kzjL4b6Q2WTUJpqgu2WNT1MrgJP9Ntn6Cm3DCbyhhdDmC6r8Bgrv2GKZnvgdHiHDi9i1eCnwTkAKyFN7KejGuwn",
  "key8": "45VJ3hSG5cnBWuFViqWFZeyV6FHZxCNWGuuaY5qhohkFDFDgEiGD35YeojaDRiUNg6zptqq4jj7Twty5bv9NtTA3",
  "key9": "3sGq4cXvsA7yYnLfNDkXPcbV7VsjGS8RryQMf1kTCQ7UaHSiszUZ1JAadN2F52U9AYnn1gQty392gcXAzV96GN5E",
  "key10": "2Dy7Q2H8pYyevBkuDgeLuVTYTXcEbNRX5oieGWnHBSi3Gt5EzDZCWHXdYJ9TjjE9k16tjTy7aWbNA9EydSMcN1Y6",
  "key11": "5uXtjepgJbN38k4tZwHZr19JvuCKipZNgwYU72RBFEKqAojT9igBY4rTTsqHJgjfNW3ZsMDE8o6awFBFLXR7PaXt",
  "key12": "56ACFPnGxjSMxCuPtNNy65mZYHgTZPXNbADc8vo92DhaAYpgqC62aA27fSsKTTZum3LWCMbpxcsm2bcimTAKJSJG",
  "key13": "4QqPBtMSLttcnW6yBxSPnfuwxcFjvcijaywHwaFfJ3f1Aur7iVogdvaZ2i86HEqzNqA3jY4nQwu5L5fNsL2vqGdg",
  "key14": "pxqFgQyvq19QREqSmePJBYnKLUX8429tA4jTi1Pm2nrZ3AApw63Ws8RL1WSBD7LGdQewXyu3HnHnyWau51yuzFS",
  "key15": "4XzT49JL2PJiUwgcXrGJMfc2NDBcZzwXnzBVMiiCaLU1pRgN93jMbYDG6Z9bvqHgiXtnxLPB6fQzn1bKxysksQbd",
  "key16": "NHZ6QnTmY2Lzc4TCBVrRgPQ7U3C5R52ubQ9UxbSS7kNCENPH49GPkoNXsmLsb8Vw2LLMWo8bTJcssB2dYDpvmCj",
  "key17": "5r9cx8a2NNkEnErRgb1T33gNSajUwcudtPVqJjxCrA4KHg1Dkcq9mNPkPVU6BakRj4MLTe34Dnd4Jws2ejRdaXTS",
  "key18": "2ZpgRAPfXi8yazLEViES849Zjs7kGtCJxepmNzjUtcqXwTCVFj3gSTaA5sKjmE1T3W9NzgJ1nXEPUZAqADyox3Cu",
  "key19": "3za8aA68GqbobLkTq1chS5dRmtAr7DKzGgvRZ9pkGG2auTuRkFYidnFXu3KxQT97WYbBVYHJrTyrGbeUfP8GhzoL",
  "key20": "2C4W3wAwnq1H6DwBibDgFvGCsd4rsNM13VVrHSznhqzoJyBY61UEPn888pYUcxdh48SJHdjWFRpeqbG7mghJGARQ",
  "key21": "nbooFFqYg2ZiPoebCRfibxf1FGNDDGieiFgyGAGAnksrLDL3MSiEeuw5osZkj8Gj79RopZFSUhcEBHrLNu49WTU",
  "key22": "5CmUfsnQvRreGksHBLxepvvwQ9ZvVyaKYKxoME3JcAcHFMSV3GMZXSygYRHDSaWothuBcXrEh4Ez5a4SMvifokiw",
  "key23": "35dsysQmtrfWRiqyMaoQ8WmV4HJaukqtviM5n5AdB69Wtbbpq2mKMaxLs5BuZiihb4xQ2tU5kHTgrZLrU9cvUiWC",
  "key24": "2NK7q4BkVkiauZ5rJEGy8PWwyudFp3JsNAkMt7Wzp8FttrMQkn6UURcjYUV3A84wMWrtvgRzkKTbTVHXUrMDcdzv",
  "key25": "5WeTQ6fZbbUztwdERvsYD1gzHrRtCHR4bK8u22iNXu8LhpLr7kBUYoFtLzWASvWLc7XaPQnAyYrdFNR9nEmPCnDQ",
  "key26": "5e4JDopLWc99tRUqSZwm3AeyknYuQLZ7XsL6v9uoo2qzF2xVWrccVEibGRkN8dzvLhLuhGJLyZ3E4oUMMfP5b17f",
  "key27": "2CgN9UdzBaT8UhTycrai2Wr2PKTkDMtFpY1JerLyCNqAZRHKg2Wihc3T4mssXDaZ6oJoyP3sxmsbs19efvixptxc",
  "key28": "5t3tfSwHfje9ujx9VuMhCST4QHAHuXf6ZrrBjeddfS1qQBQ6aKjBs38q7VivtcSwyBeutgdwMZEZuauByzZmBCHM",
  "key29": "2WpTdrSXcwbJe5GkHqbvqca8GweczkzAST4YXF7Pfj75JRH6m68ks2DBMMBprS5urVdcyWqEtKz6212VC93674z9",
  "key30": "51UAtD4r9XwbgVkMZX9AJ2gDa8FjuQYiVLZMJ3SJkZhcZKED4rHicZMt4Up4mrRyuEkD56DBEMaj93g8YNom82WT",
  "key31": "3zDKjsJVgt5PsUW9kdRKo21roehMBgMq5rHNmh5kU4BXwUJ3dumQtgY19foLUZZYk5zKNoi34KNd6YZsMa7wKBgV",
  "key32": "3iDd1aiS3XFhkKyuZBmxa2ywe2eWWgLQDWuq282jJ8hHaBA2KKKAg1yLmCrC83Qw6bQhkP9CfH9491mLGQHXLKKQ",
  "key33": "4cYSzogo6wNnhgQgvZ97ANLVGzVqMLUUh5jvkwxWdpwdAwbH564ZYMbz78sh1visiHDK1vwXsrWu7TePSgT75tnp",
  "key34": "5Z4F1aSv7DMeqEz1aQ2CopkThoKoEmzrzv32H1p2P6HVvyxMjbPeJ6QrmmTDZVwSKH6GangLVLbfERDvKrr3NSKF",
  "key35": "RTNRPo1gbnBuonVevMhp7NZkXtpuYD3nz4CRWLdrMg9rRbRMy17LsZLcpiobLKxju9T3hQ31Akjnpyijp8wTZbf",
  "key36": "5sHVzJoh34rkMzEcy4GosQNb2wboyonPTwJnbtN4JVeS6cg24AV2v7FEMWeXimbo16hQ11w3pa9mrYobd6FXkeJL",
  "key37": "2xtAqvUxkQzyhQqL8EV4gNWS78Wy6Zez2w8vJiD3TbHCBcL6Am5JoHFWgf6BD4zjp49d1yst4MjM4R7cqAcXVFpy",
  "key38": "4cJLEDzRy5872xFqGbAzXXHyS7a8xbzfeJycWxRBk4Z7eovEKLzmX6mrwF4UU81N3BbrM23JYAm4C2bW5iMeNtjW",
  "key39": "31zDRDfofmoFbJc2amGVbJeTkQsFBKFgPr1bqEMQh4EvPwSNZo34HcuGe9WxmDHCuuGs7QgXD2LxqdT7onS3gpdX",
  "key40": "SLsyD6UqnR95hU1qYoos9GCPefuCMCjEzuaa8esEFxrHd4y1a8ZFrPQdee1WEvyHXxWR1yS4c8zfjJQ8SMK6tyz",
  "key41": "4MfkucJkpBeUnfZDGegPneYQzpJKgZghtj5PKyeepcbgV2KonL1Z7UJaG229N3tx7hARC8Ugg9MC4W3DzvVpN9XZ",
  "key42": "32Fg8cuLSeWGAeM2kYRTg34SMcQkgP7oJxGim8UKUEDPGJSLJDAXqPTf6mNgF9oGgRRU9ES8ocRX3pKCaQicPcUh",
  "key43": "5RTJ5NpuGQXi9C6HpWg5qfoHa1DVdeZXU6m3KtmssUsFvTgEP3iavbpVYhLYe25mT9s2RH92gTUhddJZLhvnvQ2q",
  "key44": "2o6MUJMtLEkEN6taZpoy7ywNh1apFg7KVjmbAJHyE8My7vf8xsN1H4caduH9r3SuGa8zNkGsyGGAxvmHY5BjGtth",
  "key45": "fK1mpj2bHQCfTeAyMnXazaqXu2azSBuJAAfq5xk85Rsmkb9Wf4jT2vkjMrceuYaoCteLoerCeSbqVNq7qczXvAc",
  "key46": "3bu4qbCFi6MhzEvWTbhPbxjvZiYk7HEgMKBBvjaqMMNFKaHVESJjeb3Wr7xuppuGGYoqkhvx8sKtaULUNJYzY3Si"
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
