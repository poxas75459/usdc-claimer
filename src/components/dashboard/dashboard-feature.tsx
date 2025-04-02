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
    "3noommdGc8EPZppcTiLXsW8UgvrPT6SN13Ek2bf1ppVUikh4hrJfNGFyPJBbsjkEXxf6yiz4ysmVvVTCEMEHi5bS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RVHPnYhNTh9DFaunNXie4QdYjCTjniNFYLomuAaqkWwhsHZXwjPbSgB8PJ2mCVswZKYNoguoGUjot2efW7AbHUd",
  "key1": "4k7FbqyCdqWJcYo6XVBfsVzxkBHwmqMtf27c1wYKy6MRUM12Uqo9oXJLf4HLtt3eUhUFvfuf2Hu7ax3ao1PgYVUo",
  "key2": "J7R1zwJFnNmQXPSUQyRmCpHqYR8WziUruR4H2vxgYUTbUMiFqUdibFYDm6vQykEh2ckrQUwR1QTPBvyooVBH8QA",
  "key3": "33mLZZQYa4PhZaT6PpLUyj6YwAwdNwTwMNXhbDKQHt9KRWTLK4UtaZbjhq36mMMTXTfaepTabfKi9cFrpyL7xdPD",
  "key4": "2u7BBQwtebVdPrJGpBJ2sDAVwHj4Wpj8aVKARan48D39xSFfLHJkhcf6d4kFdAneniu7WrEciLXMHfWuRVGoyErN",
  "key5": "3Sk725iHRLtmEbT16jLsjo8jkoytojiBsvhYXfsSin8Qb6j22wGZyfDSTxT98t6UFEitnCYzG2NGtQug88qmjntM",
  "key6": "124ALPLUt1JExfRWnrbhnJk3FMskc86vaWz8yepyjfGnZRTXSsDACtAwd5ZrfZoiBdx6sXYMd5va4B7m53k6uLJM",
  "key7": "3emLAfv9iYzEvcohiiP61Sz9NytTg7JrKxFqcn1nWxqd3UisxXXB3AYXYxJPQfi1xsMo4WQdyMV2rXZjdBusv3xr",
  "key8": "5stnTcqQKBdR4F34XMCDGkHTYGDAqcZUno6j8eUSpT4KQ5SmHWGPie3xg9Fj64mC1U1dE66AG4Ybi3yg3s1d86ZG",
  "key9": "32QrfbD7VaevpYE1HWFGmqUn5prFuLfbxzMe1kaxeVfrFnnNqwyGkqGdBd2cb9berWP14PQGMHue8HQvHP17CxEz",
  "key10": "3ibqY3ENggPnNnJG7HjqkXeVFQ2ZxwpfvjS3oWrd6BVeivXio3chna5YRCXDhVncMimwwwtpT5DfS9ZQnnh4vpK2",
  "key11": "29gD1CQjojkrFgoES9cwdzPaRH3jLPbGMVn6PrTaPpm9z4k44dGVaB1n9AcmQh1faXZPXV6iJzeqRVKc8Qdbc4JM",
  "key12": "5oYQik1eAEvUQaTsT8Sa9UFU1jtHbUmuRSR4yHiJBCGMd66uVX1JFp6yGHH1YqRKt4rKyXJQA1K8TyCAoyKeS8gB",
  "key13": "5V4QL2hKVzqZJ3RFoNhMEFcVaRN1BdH5mt1hkxG5jASCchP48H3TfNS69A6SnLH7mwouEobP6Lcci2rCgkwcgQkM",
  "key14": "2SKjroZbbvepUgSCuCvMJnDYwH4xjkJVVj6fMn5dYA6rB2f9v93YnZHjmnCy4MioNQMvJSs4RXpbV2PYuG1S9LNF",
  "key15": "2kjM2YFTaZHed8BL88GBPXRg29HF6edcSDWrqUA1Ym7eSEPDJ4whUNbYEExwFKSxd2N24hGLjow8wQHwYycE1SbN",
  "key16": "4qRQfFrFxxzaNH72ReCLdC4Zta2CTRkx54jWQEK5dv52HreKKW4ZcGTQRuM9NMxwXrGmPMi98LMqLyXUQUcESohK",
  "key17": "4iFWEnELeGsLPAF9aB3DkbLJWDW38Xat8wNhPw1rcr6xz7eWZevVNfHBxQzu5BtBpgEAJgxEYmDes7rF3mN9mMVr",
  "key18": "2t9CRs5TGcv5nwWQPLgcbfmJd4Q4kpzPnpJnjJsTCQnh2x4bvjKhDQEZHgrmoVHrnt9r7MEg26YHgdaKzgrAuEUJ",
  "key19": "5KE9aGCXCmxqiEo95F1X9sXTFNKtU9VZKJSbsTi7ERwc23cRs4N6GDvANgK1uaw8Yz2ULDRW7c4RvUdbDQD6QX8x",
  "key20": "7B6UY2qQYrxvCi1XmpSSz2XEZXF7aQSMQVZeCBd85tTUNeWp2b17vsc8madVaLV4TsvJD8DF4A75J7Vppk6UJeD",
  "key21": "Nt6hvJ9ffbekGZ1z5u7B8kZHuiKGoZ7T5EU6wAhbPmkhqvRR8ox9e1aVbq1dBiREjnY5bMqcZvQ9NBjwkWDDxrL",
  "key22": "5gSiVmTzJSopcGmGNGGotoWMjQz561mrvjFQi1tBokrd8gt3AvB9TwuD6wBL43Vj4w2avSnsFLjrkBsnKW448uq3",
  "key23": "5amUPq2KjkFAjxQ14zLfy6hPGUgsQataHCaifwhQ33EDgBiCEV3H68f9jXQyZVgA4EzHd8y3zYQvP841JF9sBYEN",
  "key24": "3b9BW35SDyewfZiWDZj9BHXJ2Zsoayv2NetzNRT7Wy1CwQcTGvxeXKcFqxBX3am5cXm4Da1XDh2bmoMBKJBUdLBd",
  "key25": "F6BzQvqbhRb9C2aS9A1FBdH1PiEQd6DsCCrk34NC7ZtDK4Jk8qmVRsjxoLoJX2rhUkxW9kkUVsT64BPBzP5shjZ",
  "key26": "59LuP6E4Ns5S78d47g588UZGL6fKdc8EEUqYz9AHpPjrcsWybWrgGjfXUkUw98JP2Q9fcJZhSiWZhFs74zsNvyYM",
  "key27": "5RWt3rsK2VbQfzQxDxU58yYxEC31rR35YGPFXMT8Ychxn7krquTfFaiy34Mk8ncsoiumvHkDwr7PB2yEkvizjf3",
  "key28": "4j8z16P6VeHCQudZ3PFiVoRW7ogRqs7iV1eQew2v81DkxmYqSAJE5xnfUbBNbaNr5CNwSv1g7njmKbtXhXgrNqQ2",
  "key29": "25fCFtvXJNoqSKWdMyQywRh4rBGzV3TXApuvo2ny7DsH5GnK6r2p9t2Kdo5PXDCD27vJN52UNyZCrVtkNh1CwFuE",
  "key30": "3aas5PQX5wVhN3LhYFhxfGZXMvbknY5nTpbRcV8p6CNCVyEwjRf3rXwqq4wjZVtJcEpV89EzuRArvgpFbcaCZreG",
  "key31": "AUFjnSnNARpLFxM8ymPgKvDTsERtV4uKiojjhfDVTbLQn5P2SFes3traxkSD1swzvzrBy8wtwwHAf98NUBAjWh3",
  "key32": "5cFi8dDZkeVTMCPkee2Sud5FJ93HTvKpxE3M5YJuLqexgiHdA2PgsDSagaQ1s4UtsT5jKtBradiiVJ6gYnP3GcV9",
  "key33": "4Sexm24wmSuWiGbg8RArEcmCW3emR99Ns6cL8PUhFSUnGAHW1yhkXoYK5kawcuLDsXEAkV2KMPTyfD5sW52ZsfUd",
  "key34": "4yvNrLPYjpwZctzbp6BxCgXm5bgEaNU8ZMKtdQXdqpKqSupAia8anYP4PuCg6819X2AkPXKSsjwtWQ6AB27oUw3Z",
  "key35": "5oLeVsquHBibqtib5yyyHfnH8zVnwy2pKyoNobBBfNQsrcLztuHfX4S8fzwLYqnB4LH37o58174grsxcyAKLHCof",
  "key36": "EnWWEAGn5Q3oPaHZJ8aFLhXGMZpvKU8hQRPHE5JwUAeF5gFY65Q6veDWj34kei4gpfzEkPqDxnPcWzXyJByM1MV",
  "key37": "4RwBVW7JjnkNvvR26pUbhrKeyJntyzijsBQJShoUBNYhJtQLKXJ4ZfodqdBmKujV9rgZq32Nee4cs5Ro2wBGbzFX",
  "key38": "3DYQUp2RJnXSpbgFviMTp1yH9Dq676wyuirvdecJ1LCawrmmmH3BiRNVCZZvhXZszMW3QDY9VAqTwdVSzQZHvsrz",
  "key39": "577z4RRpu4c4cDDyLUh9swspDxNVy18gbKwjpKeE9bFe8jSjqMm5SGRXbsjLh35ovGzi2tJ3xfx3yTzgpbbgWyQt",
  "key40": "2d9PZjV9onqdBaqQtrKVeRyegqPhdHUxkpkSE8YTr9jWLxkFGyTe7kG2jZVDtxuX9ycoqFDiPgbxorohDKHjRGuo",
  "key41": "hw7fASG1RtMZb9NgAyakdPbCjsBgHYGa6DsZTXPMSiDDYCDHMEZPX61BBCWmFVMALxVjptkHkCqjvn7PFJKdPjS",
  "key42": "2d3Eusazv5NNzMoxqR29uhnMXh2CcVNUuuY9XiQNwDJYM2JZUkguG6xdqWPncnkQqpef51xpti7TrRv3k5HKxqfc",
  "key43": "39Z6c8WNzSRqywTC11zLtFdMYaeY7WKNC7zmw9rA1zSLfRL7MCKEXZ7Ek6ryvRPQvyPh9xFL5RmLCJuYbkGnwBvt",
  "key44": "3GMG6xHbw1tUCNUyoqLJUXDsEBrpRDhMgbKUfPGEMoCfY4iPczRTH1egAaodmiAFE9TxBzT1o7bX32FGK3cWJGM3",
  "key45": "6hEhNpaXG1xG3cQ7sd4Qg95HptqeAShT4SVp3LaeiDr332BSagfWEvFF1S1xMHMCata9CzQDSiTP5eX8Jefcj1H",
  "key46": "2gn7RMChRCMsRnmHs2r6UxMAff7Qxx9eWrdTpRMwdaFdQmx2hfRrUkXMHrFT1tYo1sRVY8ffnAURES2kP6hEbNwf"
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
