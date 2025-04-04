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
    "5inBqTUQ6PHRVwe1xgQA6SkdXqbbdLdsTURVHMQXPtjh8YX3NL57vk4rgUxzf6Loy5V2UGoB1qy3jhQjHx1q5pRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5afX9YahfAdg6FXwrwCPjnJh9Q58nucnn8MPehimEbSDVL4qpkahQ9TQQU33iRs1XX4k3gBtCJ2x6x2PE5vYDD",
  "key1": "5XnvR5ZjzZV5VadpKhyQXK4WzqWRrsLtDGJ8piNQkDBvypjzBmgDwrLbc2ZQaqQ3155VvHZx7uzzi3kgsr84GznS",
  "key2": "ThggNVgwJR91MAMPoQruuAubFrSDKKjL6z4RPW9R6xwHjcnX6j5vAQ3nAFLpfXjxqtPtKBpyjiUVL8dxM2ZMZ2D",
  "key3": "5Npgk2iAfNa155QbfPucH8sVKD4Xe8Ttztgkk2iFcFbBahBtfBuyZE2QHNWwiDAGoA8ATYfdEm7jTuUTt7FZWNbD",
  "key4": "fvy7LLqJ3xJYaFaH8khnUXvf7tFpmwS8HXnmXT6pcXKULKCnJcu3YrBuG16YB3cjZc1Rg8NhiJsmWg2bZByHm4B",
  "key5": "5tApmGcoSog4EyrvYtLAd5cdhjg9AT3iziy15jPM8DXjXKpQ7UEWoQdpDtvYAyDWjAkDBjuaVo1X9YWAkNHDvnun",
  "key6": "4vTqEpnFPKz59LfHEhC5ZsBaYX12na5HosmmD1qbeZbBirg17awehBbDgAv7n4XqitMXQiuGwTsscUwWFNJYrFV4",
  "key7": "2ZiF2rjFKuzKLb1CD465YMdpcjd5gYuN4WVnBg52xzkALZFVJ2WpMRGDiG3BTEPhWhpPcDy2Red6QR2Fk9LddED4",
  "key8": "4oZaALd951Y7pNJXXsxsmKG6tA21dytaqZA8ExFZXcD82EBSqk9rEgFvPMuAVEzCaAAR5oQZvzgVmapiH78t1kFr",
  "key9": "3CgPMrZ2LWvbiZVipw5r41VnW3u8h5EowQt7iTqhhTKQdgypoUozZX8qwS4LWQXQnVNpkKN3nznoRY913C2i1Eio",
  "key10": "TWNa31xDjXr4tWjYceyd2erC4vjZewMrjNbMoEgH1wnwSLNoVrkbuCqZCBHU3pRpr8ZzssxbVtxP79dYC88gscJ",
  "key11": "3vfgYeRQe5dDJ61BsUqj7drTTGLPByrQfmK2fH7x6qCGYdWPaUK1BdosQkk9SutnA9sdCQ3wzAjjYnAZWxJixhrg",
  "key12": "J2cyWteDXM6gKDTm6NUKGFNESfP8VjuXkBnQxxv7Bp8MRUjVyR1SEuXW28uV7eAnLpbJtK6U7kEmixWvHv7TQq8",
  "key13": "2Sov234h6wfRRRGAribHu5fYv4KPxHXkFADkeUojTg95E3rrkKTYLpKU9wZVepNqdXhPCY2KtbMwzJ77uUP2ENm8",
  "key14": "124FvSE1e67uV7jWBokkYw28cjeYRAWAKjkN9dCPV9eZfDUjUzdpeLqxY8GZxJAD4ifREsaktT8R7bjFBvLxTiYp",
  "key15": "4yDXd8eAeZnJ8TWs8vtcqwjJ19mBGgjQJVYg1UArmLzRaYk3gqWU1FnhzA2yGNQz9oGmt7exQ4SSfRV4zvLv8jn7",
  "key16": "3TvdocFH8QzPyBPB2MzrDwwXxQWpqstmqyVdkuvSedQFsvJes5xrirW3kTZrxehnhvRnftziWzjzos4a1riNuAKj",
  "key17": "5J5uuo9q2T46rRvk9jYg1Ju5rJoT2uG9MVTXBFTFZ5BYYkwEH5ayFJioTDYASLwGcPHAGH9KERxqc8HPiWXkm3JL",
  "key18": "3kkLMiSdSZfgtbYGZrsrLwUtgabEgFxhP4o5Mtz6f2HC5ztRXHDjzqrMHUwBBhkXdpy48xjhM4xbAKB3v2QSzU8t",
  "key19": "uqQ2MLucmwmXPZryXx7E5WGMtRtPXqtnXuD5g5ivuRuuzGhkzCnLmgYy9KkRpXnADY5aYV9aYLBBTKhy1Juog6K",
  "key20": "4HNeaZj3tpWD9xkhmFQbM4ETUqQoz1gGPGqhioetR7vDQqtXTj5nnmW7sdSLS4Hb7v4kGkMXtmy472SNV5nisYPn",
  "key21": "XAv9pQnrqv5V25jbSBScJbK6dn46en9oyMUTyF6F9yuEPMiwXvdmMXE87JGQhVAApRC1G4zMNTn68xMMhfjGHbF",
  "key22": "3o65pKCFEU997SneG5SYPPSpLEnLPDby5ugY1zxgVnG2jPdpCKAyTXhYYj18eUZzJEGuCjWRFeELqS8MD9UdwFim",
  "key23": "54AuuxASTwhu3iKah7PSuRWTFZCW96apT56EQbBN3pAgeLrQ2JWY83zYeu9m16kEKhgsPW7WsjtS8KXdUMUh4nJp",
  "key24": "5KVP96GKQLAtZGa84RE4ra4rzrX2f7JeaTWHHABkbtDaG9UtH5gq5JcwDC8NhHjJswKB2Pa6w6kBvp8XYPGA6mx1",
  "key25": "3XXVwDSxmbvVNCNdBsQ5qh67GLc4qTsv4xckZdp9faLf8BxXcJPS9jpyppmiorQMpSi8LqnQgqJKFyZuKC6HjAoX",
  "key26": "5waFbhpSzcTB2zQhzkdjQpvwyBEVwYjNrhV2rEf7Zpv6T1hYVQ6TDMJMYbaBzvnJhAh6uZMHxvTaVQatjmfjgEW7",
  "key27": "4MEf23mHnSHMMMNW1qnFPpBD7vdrQRnMKNhfjsRooNvwUgTbZoKi3teHf7hpGwxcK2jHFLGCgtziKwBfm2Z7pDCW",
  "key28": "2kr6m2Gw3FPFhELoQxidWLAeKWiF8QKJ4eA8BNm8yRVreTSuBVt1jzuSXpLZCyDx7T3Di4F7jW71aAeRN729VzCY",
  "key29": "5LHdcEQHko9g7iYbD9LWPZ38fnkE6uzwCHrrpfcRRv6cdVTiweGVncrbNM45Fgoiujn4eYvAHZ36PF2VVGppYoKY",
  "key30": "bPvQzGWUvuAQHAmMJ5KsGgkMsUWwsTeZFt16JsE2kkJA9ESN16MeaWNUMe4UU2PsxP3ZNRFyXxcN5a689jL9dGu",
  "key31": "5FxehTf25PSjtYCbN4wfNF8WJ13sDvYG7RBKPeV3mrY3fDEW1FS7ncr7X1LUdq5BDpPGGPH6CPvdp1zJE6ZaJc9N",
  "key32": "4JpLkVMFYiNBEEsofS8z7xa5jenqFg2ACmfvFoWcdmRf9YjTWRG9p54G5aeKspqNEzyv9JT3FjZGAce98Ud3n878"
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
