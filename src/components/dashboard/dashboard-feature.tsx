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
    "486gJLt2LGfAa7iK1ipXhuTh5d3nyHPZEdykxng6kQ3h1yhwWjzJdpvvAr1A9gz1NPPTSMc2CkU2PNm4v2AWjwGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZGvhMub9gLbtv6FdGjVEJKqZmPjufqVTWzs3ibDyBr3PFyUea62FrYwnddUjLN5LLLSMRxHS6XyG499Eg5ygPXY",
  "key1": "2X5TQKuMPpBEWFRFnxia15UT57uJBoC9qQxrksorNx7MnvxjZAhusZdepak1jJkvR324nYd9nk7tgsVDMUgZci4F",
  "key2": "3MRDJ5EmNwBD9XNBjVVYQHsFeJ91AkD1AkdYb7v5GSV5Fjch3uiKkSubfLCvLRgbd8rnKn2cPwCnrP5WRtBdhjiE",
  "key3": "SqsRfFZk7eZ9gcD1iaJ3FX6miaWUYbQrvEqRUN1eAKo9pjLYA3yvJQkAxDdtivuYqrU4s6j58Cf7junqaFPbhCu",
  "key4": "5QEfSzNRmrd3VH7E86MWxo8uzfCjqUwRDgR6dhLQ69gkUgp9MN3RTnzBp6wWnwP5qPUnWUdf7GfWnSUJrJ5ge9TB",
  "key5": "4nyh6Aeyy97E6soQKvrTBqmrA7XPA2y6nBYfviSGU4iBNxcx432nF73tt3GKajoBE8QX9tahNTDcykr5mVEgYf71",
  "key6": "u9tZerG5bFMHqeFmqfuhcRwfYMchMe9Dy9dtx56Grtr5vBPT6ocpe5jdALAbd2uoAEGrJ6m5isPXzrT5gKmXgZz",
  "key7": "5zGkGcgYxDfaJAh6Yvu8wEz7YhLHgJHqXUyCbvuQVKSYqW3B7RKksBQw56JbiEqNgyeFcENMH58qVMosT16wYAkP",
  "key8": "2GVZWCFrB6TUXiGbo1oxjirQpk18orVMD3EipR7BbjJiZYBEzwWfn1P3oWxXSNqGqvRc4ue2xaejypJPGEP4qaWV",
  "key9": "445ZUAkzYBvhsjT4FCvQGyDqjrngCivKvCNJVCfMsrCpYe7MaCBM3vL6nrgwN4NN5DyHFvYsUKLw9ScHvxtQYFci",
  "key10": "4UYCvcywcNbzUK5MSku22BudkqvfbL3vcnX4LbttuHfvstWgcvPy53WeJmfvDqqy4XdD5fjV67rqeERggMKQCvEZ",
  "key11": "2U6X2UG1AAHhkfy1tssKXuzDZvkkAh3sMfSuEsJ3RcUR2fR8J6XAnem7NiSUUeyPKTcmjhxXeuNgmoPfUqyA6uHj",
  "key12": "48Nsx5fgDoYCNT1CYBqS77WpJ5jTnGEMueHXkgYZqSGMZskZVEvEb1bThhS14y72hsWNgdKudS2hZ9YGX8eYJqbL",
  "key13": "2s8CkJk8cxAAnCdHJqmtud4exABtFeZfDfz4TYCMP8FG76noNjAEio2jfhjoMaFU2KsntpnQuRk7B1RKtpF721b1",
  "key14": "3qXVf5whgzW38NThiD8ZVzswRM8FxzaFkptje3dTMaeJ1KPrfGUyNqLhDTT5JxXLLSytYV18aQ12Hx9yiUeTjszy",
  "key15": "3j8eekqaTRBATKh8LP2va9u9YiKpGkv57Bi28K3sUkgQypYmawuBCh4rw73xjrKaaXvPftw1P87nVVb7fmdrZUTJ",
  "key16": "5G7jfthBS2Z65ugH1q3WpgEoj1FKZH1TxryxLo4mhjhsyvYcJLJoguZtZymeZ1ZSmmvJWxhhDnCE7Cv632zCvxLj",
  "key17": "gCmNNqWqmaKcTvwdcesze2QemVT8QMArZMLCM5QqwfFUHHmCEqiBvrJcPpNGEN81XSB62jkRhw19AEhSatsKV5s",
  "key18": "3XeD7YVm62T8oT5yRN5gpJwha67ziykvRxHVJXE7c6eZE2U48iYzikVJk4euNRTBmT8q9xjzu2fZVhcZsxDFTCzA",
  "key19": "4ew3XpbrxFBLrnUGkCKZQq2wSqGjNMxrbNtoRdejJwfsv1kWKeYrr9krreEz3DwQLB4squzkpBAK5FuQeZaHxgzn",
  "key20": "5ydqxCiVGT5C43s8aVtE6A4zxvKhfjeuKaAo5qjgJcoBHpSGaDQvpCjvJ6SNs4ciRqfXgi5KfNDW3aQ3fDavf1GU",
  "key21": "56PCBUxacPhyv9hiJid2VH7YF5fT6S4YGC92VSF6ZWzyFTAX3L8o6UwbKWPyXZtEofHQt2GM9GvyLEUKRfF1uGBj",
  "key22": "studdx2utbSN4FDFDoGuZzK5fScLTrYqjPQjeXGX3h4nhWdDSK3yFy6RLWr7gF4jd2jxud6oTi1yCszxYmKPuSy",
  "key23": "4tt1gvQdZBShX2NT3DMm6zyA6hhCu62ft9A3rDyLZRPv9bfC5mAU4Lfrw5jpvde63x891mqQWEyB4b6ebvPVuzz7",
  "key24": "67HZ9ZzdUC87ZaMLrVbrfE6vywzEDZnUahNG3aE8griUJVzDbeHtxd23S2jkf4MWjreU8R5BcXEDtHHsuoSXqCdM",
  "key25": "5tSKrUQGiTWqRpCQRZ1Ndf3gUsK3hPnore8mxhgZVsyCqPPdzhqNhhGwpPKLk6qnawa2HLAduzgGNBR5kWkyZ3BL",
  "key26": "ZTrYzqKY17NextucEHHgKjuffpNjfMqx4RKWCQe2YaxJcN4E3myGjXJHxy9tD86sQjgDbMeMSNgWbYpFXKoJtpx",
  "key27": "2LxLDFdWoQf81NKWVpabP1R2QTtMUS9FiE5FGjGWAXBC778aKKJAGbsB7Lvq3q47LXankSGeJvyHyJQQX2gW5sf2",
  "key28": "5f22ZDzHRRdfULZyUyk9vJmZgv6vugbwDgeX5eyv2KTnf97ovE6eCspU65cMFfAncXQrfHtLJRhnBjyXseESRfgS",
  "key29": "5P6disL5MgiqLRtrSv5vvhsnXspktVhimRZDjUmn8qnUReRtWRPv3YPtM1vXPCKseVuM7DMHr7oTMiVr9bCn5ceA",
  "key30": "49x34oSM9nnKyPiR34pkqoDWfwaViNzPVXz6ThGhBxKm2taozKLwcfRnrJ5QZTCGycXPrA9V58AUThh5W2B9uZBt",
  "key31": "TPvjScX7PemiPJiJraecbMnphhdHtHTwYtUKb78Bhtcu9UASXc3kskg6ZTFn5vS2kEMEJL1jVTmvVd3U62TEWQN",
  "key32": "4qGHf4abVvxwkzfeuDpXnDHnMaVmgUhCGW2oJngnzLgtGvUT71Mxrrc7LXmq4tW8q6PP9ZqawnUEo2scctg8n7LB",
  "key33": "5h9iv6pj4isWnEfo3GmQG89oL7KddoUAipJMM2gvo3VZqx6MtH5SNeB9iC2PC1y7jqnEgWmujffFESTBVNLWRsq9",
  "key34": "2wUhScTFhFfoKcpfqJemWRbsAP78JR8mDCs2s5d81UeFrLuiYmwNpxQUQcBbKiCjYdVENVA6r8KAXKtJy31YX6Fc",
  "key35": "4N2NEaGbLf7Ng9D3RzfbS7fncVzscUXLLQ74PN4gbibtmYumuMLrYLAvM9eUzM1hJuNkuinqBtwFCaGsnSs1AvZt",
  "key36": "59Pf4tUhvTFGVK1iYVfHpHMwHLd24tszeu2G5SHUzYxqAJaq4AjLfuXPwGG6immRPgpTBVkqYEbxaZ8Nwue5MrWe",
  "key37": "7nWhktjeMxNVShLBG2XWbQdQHMuf5L3MYhWCnzRuynz7ZryN67TX8zHnYgaFyx3cBYLCPUWE8tPeRDBYWeJ5gng",
  "key38": "25adzkTJewGrUYioggD5CfRe86QyvzDcaviE34kBixDLjDgtZN6uWQnGt6qoUpLkvaqbJFMrRiY6ouw9AB9Z5Quj",
  "key39": "3yX7LgqUaLbE4mGDdiJeAi2NCF4j1HWv2G441rxug5L57u2p2BAkQDeXQ11PYiJg3s8iEjy8Ju72VR9UeAbCDASm",
  "key40": "2zfBNwrii3n7mFibUxCsJ3DJyLZwDypApv2PYY57s3KLJSiSCEZRBYPW1iEc6NyVa8G87sgjRbkJEB9LQVJ78XHM",
  "key41": "3dAE6V8vGuCPcqzC3xBiRBoX1HfffUSyFVJU5vVgNDfxfKwVFnuKAjA7ZAjogVvTPAjtJtNS3enuXR7DtXKhFHiY",
  "key42": "3Jf3RBALpyC4ckpL4xQoxh1pZ5xvfSUi3TFkfAEvyhpnDskZmmjMfLfVwC1fTSL7WawaoNbnEND8Pw9A9SE3CRRo",
  "key43": "PDvPahKXWrL18HxBnkbSS8jKPpNrxxYwmgSMPJtPzRdFMebTVjdbyczJFe9QmQpmqe2SYks32YSB8yJsp5gdubp",
  "key44": "3cP2e2Dexf8cTAyZzLbi6Yt6PkYUJXh4sxCHEMvDXmmL6G35uX7f6WPK4NMk4sG3Me7paKSGhees5nQ2oM5GCENY",
  "key45": "4hpNSb9xXKqWyyGyNK5FtYmXdUVKEPL3heHhmtQBSiAxePVbE57TwgU3BKyrjgL9MqyfjLioj4JCVaJd7wefeGWo",
  "key46": "5nt4ss6Uf7aYtA7i2Lhuz4qtE61b36MFm6RwfwV4dKerovWkTt7P515c8SvXUpFUg5zF8tRy3HGVbyHnWLNHVnv5"
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
