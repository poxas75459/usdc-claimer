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
    "2rBDcBtq2ijf11F7njZciFrodJGxW7CR7CebMD4v7WRsNRNE2wpN49im5oGqxnh4gtTwfXvcveHAGe7cNoE3LFmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46JiFwzWqJxv6T1wQt7DHfAotGjEhkRu1kJZNLqG1TqdphSbEDsuT235pLQEuPd1SE7ucSVFtVaoNPGeBbG7dyzX",
  "key1": "2p7AnsrNKvvADNHan5cJj5NBbns2PBcKEuM8Bwx1y3Lrf3TkSFeocfvQp7HGJnX7dgL6gzTZKfNtfopW3rNHNssW",
  "key2": "2dvU2rmMFwCSxNs2kJW4wHQtx4zacvwNY7f4FWQdxKC1PG32BgTRzAG24ifhcEyz7brcwMmwRQUUZmi8frba4ukD",
  "key3": "hmeh6WHVk4w6sYeCjkpTqoQt5hc743eshCygqMCheoxzgFpBY1FfoKV97KXLpsBFSwtZdVLgrZzr7M4w9JTaxXN",
  "key4": "5ZPjLCPCv1PyMB5D35vswmTh7pwzFSKURsC3erH1vXQX9t2URvkxEHdRm1WuhyQmQezP1srSPmkfYCUipb1hgD36",
  "key5": "3ErxrnrimytpX9dFutnnh71DnEKVNZ9JuDi9jVAFjMNEQo6kgiQjv2aRichpjR5VL2gieM2VZHMJhf58qLEsKswG",
  "key6": "26HMmwy8k5Lex24Udtex99Tccz3ERvca7hRvhwsnWBhsTkuG77b6dGPaDNFcWZJhhWCG6igY9VWXgoL2bz1LJqfE",
  "key7": "5F23sSwFk91HP97ZuN4EastDCYCM8YmdF9zckY3juHAAoBQW7Pdgvb6ygNYcRLgW9R61PWVvtY7FVy5TxHYXeZBf",
  "key8": "3dk5JxqpFLGAvwTfeA1ncb7nciFFVfAYmr3kXV1GZ6J7zRVvYPNvsnwXbCAUxGLJfrdKhcScbWjFAm5G8Qsb9Uri",
  "key9": "26QY5rkakPHUoeXVhcdTqtteMe29yxTN3ybZuc9v7v9fTQMe1zUUKUwPNf77BWZ84otMoomXZUtCpMWPJTcxt2Py",
  "key10": "vZZ7zYdRMBbmK7WrzJ6XuckJRiNM6cuMHEqeshpQRuvzXNeRuSmmjLstbTupNYa29MxdRVbXzc8WfwqyrUsckJJ",
  "key11": "5QMLVL1a2ABxRNWttVC9j3ztvwNKrqjGYjTt63N5CiiGHGzTj7QVzUsZ1c5rK4c1EFdZyhhtqrjZzkCDDmm2BTjR",
  "key12": "QUE8aRaaM8X21YDgk6QqNHYQRgsfH3Vat8JsTkWSCJTQzqaHQAkyhFtkW5Ebie572YAn5MK4DSKH4QoxKTfbDA7",
  "key13": "24Pu4gpZb4Foz3zFdxbR6Lxi2KYUays8VdfMnx9utekEXWKRpsYcDyJBRZhWQkqZUZdVGG3UwVrHAsjSusBqD7r7",
  "key14": "RJ1cATcivc4PixbP9wkn2k8XcqdSHjoRVJ4JYNcuNUzL86AuwzukumDYUT2ah5bZpoeF7C1fzCSfJ7rWXguir9C",
  "key15": "3j2n3jDFaybnS9VVXczueNZKgQKwKtn6vvDZVp1dnN4STYQWBY8c6XXXmhtr8GorxiPjvJg2a77Gx9WPHBo1g9Ws",
  "key16": "3Lxsd2vwUFfHJzLSz9wZAuU2hHQcgRhtqZkFuTaEWjiHei5EvydUXXvReWG5yp3oFeqYj4FaaGwG6PFDYd2iBfF8",
  "key17": "2ZXJsYqQcrHQBEbCRzm78WVnb2ZnbYokxFA8GW9kfLNTuShWS6XM8Qq5x2QBM993UkBCFJUSd3BddMUMFW4sZ5J8",
  "key18": "5uwbiGLu14bVMqygsBk1vvVYWCiiHrBqYG9AfmKtnSivha1LDDAnDKe4dtQnGtKhTSdwLdcW1tdz1vqdtnUN6R8w",
  "key19": "65FhgkAX1bcrezSq39xHEPmLB2PvuSPh91pwvieA9yhkKnGYjQmNzoBsjTKnaBdLsQpA3KA7W9kJq35eSFvaFFcq",
  "key20": "1QHNxs28HVaBDurbRoFe63Akkt18QvkJbRQHVK3SBq3AGCfpcgWihwi4k8tkqm4937EQa3aezt6eAGQmXG8xDCx",
  "key21": "5mrDGCoNSDejKe6k3fNAy6eNyo4MK1izGK9R7qKQjagWkSWeDrbvtd7omdGXaQXfpNPdJjKnJNEmagyaMYbXYSuP",
  "key22": "J5APbnFBDzp7wzVEvrjYBgsJ1Q7XwJyVfe7P7mPKBL3ktDShxWRgHZDdiwoxfKSZw7iDiHU4zQjAn1XjfAL5npu",
  "key23": "4ZYnMKeDhMsfxjK9WojLH2Qmvbe1cm6YrxS9tGMYFNjxZjFtD3vJLpLaJzTCH3ejr1NXcayKpR1fmc57LkPvyhdd",
  "key24": "4fTGNUawtBWVMhgbopmHdCLTbF1mNXM8dvZ4yKzGUrdtJCZEYtQ9UhWsTq46DcVfEWwtqPjbGFE6T4y5gNY1NZjR",
  "key25": "UafCLnDyMSbLxqNb3VTgCbHvmP2PQdvN6UV9t1ivGcvKgECXPrXHoHhpRM26NUz71Xr3GJ5Xy6SdjY8QUo9pgeK",
  "key26": "4Fuvrkhy86jUE83BZUhicxhSCK3kVcCqS6XzJzgzG6as8pdY9JhTWpUHyzsqRdYgumbwqYDe1CUJHPMu9BxMFSVW",
  "key27": "4Zfei9Aez1VnNGvqXPjSvJ6ExLwtgpLxoLkRwq4natXq61k1bKGo1jNDkPtGohh6GmaPv8QqkyEPEbd442uA1qvv",
  "key28": "4NsRDeKAPuM1JxFgLsUggDSsfzQVeymZW5jtwBcsvpmMhER4amLLk24GNgrXA9w9BA8Fvorqucqtg27Vo7zyHyUC",
  "key29": "3woEDvVYbGPTXf4XrTRh6dBwe61HqRsmyUhNMvHgyojdRGjoa7ipkd6V9NT486MwgnTvpeNH2pWF4ePMs33dp5Xt",
  "key30": "y2u6Gc4NgaXKLMAmqUY3gd34ZfRgCa6jxCaVrN5MyDtf3DgemJPfKzEc9v7a6DM2hfjcug5AGoUpLbNqfxqzm5z",
  "key31": "4T87QoxiFAv9XXYhxvSgBARvLCxSucCSXrgi5NQ6QMAR4tTbig4DxrzDZe9BG689iwuJYcWxqEo8k1km48rXJjEF",
  "key32": "3oftm84vfr7zdtpH9mq59tVNA9B4hRbVLiCxXfrPK22ZbbbC3qagsAq3KQ59QxAiuQyptbnxdYuW4Ka3e9zcfdu3",
  "key33": "61bozzc9hqHWPATTCPqMdSXsTAqvgzWuwbDSFwo9eDT3opF8PPi5DtujH5wMov1qz5R8CAgyF1dCivSjcTs45syY",
  "key34": "4eBjzABwxFEvqZZN7644fyBhHK4aUQUof5iw5kNH24hQtn72TyYzVvp2QXJMJ2uPpX2TGGvC8dMZKANDj1AhGwSe",
  "key35": "x9fMzNejzRLuKjhjsBEyxcDND5jesvbXfWx7PZdsE2woyWPi6wHHsVkAzaG2CKjkmJhsorEuPp1MhQ3KrqsRuqK",
  "key36": "2XxWwQuL9hwNoA6KTUb9Ezdx5oULnBvgPjcHYzgYQsvstmvjWe4apnRzpNDErbCp23yyV6XQxV9fGxiruntULcjB",
  "key37": "5aB8gQAH97JrF6u4spy3YXv63jvEYgBzhB1aLkuCpXFtBW8KWHcWUpiPb3AApPdHWwnQPeNj6xVHFUs52nncFYtz"
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
