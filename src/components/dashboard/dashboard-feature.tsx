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
    "48ikRuJsSmCcbet66c4wWtXbDcWPMvC52bEmKidvYVSN9fo875ewfzSDcvGBVZVjGmPAYQjT465gRRFgzSAjwiq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KRAkzrQzteg9D34yA1QVafhBm5QfaQmGrBEovTa9yVQFiAAqweGZzEpjegQrM5yKq3xfGnQaky98Wq2Ad9eekg",
  "key1": "4f81hMo6kYsBU9VLpLzaPkJ3PjkidjG2mw6JbnzEfjikHUieWTdQh2vyWSw1zGCVeCSKxFZzouJ3yNtH2uktNtaj",
  "key2": "5vYeJVfB4ePfJ4jJCN9rZTQ3ECrLxx42P9znBFfznXX4UD6xLdgEK2Jp3KXJRw5WhSqxZvfT8zAdg68geJNbUWb9",
  "key3": "Fc673MNhbjRMg957aV9vHXSFduFt4j852oyWpf3iL1hhbxtdmjW6fhcKosoFVLzTi71y8RYLqAtcYJwDt3fGKQE",
  "key4": "4J5bdQJcV7CKnkg6DWKqdSXh3Jph1JqTDRYUyQ1TSxQUCbh6CdR9Lzm8nQbiPYvLDWae5xCoDEpwXfativJMSW4u",
  "key5": "4qHuZ63QoW8dsi5C4XkJCm14sBZpRTBqz86CvpmhDK9ytFBhLzNR69msW4tLRkCigA6ZSP755i4thUiFcPnx7yGW",
  "key6": "5GWzMz4QKiakzVa1Xz73WWkk8F9Zah8fhm9uwRhkKCrKVJ3CacnADrjRtgCmwKbNoUF7Vs7pMCFsvFP4uXn1Kraz",
  "key7": "581BvH2hw8dG8gW79LV4mnZqpxFxo7Ju8xekqsz8jRAAdnJ6y4BkpvABrdgJhvv9nnDyNG597wfpWCRu9nPZe5Vv",
  "key8": "2SzhBEFLdpD6GNfPT8A6XUmzfxcBf9AQ8tBtcBzF6YjcS3oaJr9vC1vThFhAs4skBoXgXQ7GQ4eX8KjW5Y1CCxS2",
  "key9": "3VTsNE3JSTwkieEWNuURKBEL8WexFrKakMwfEq7SzS7y1TKSroJeXsNqCjX8tFteLkLodfKJ41uu36GG8NfS9BJT",
  "key10": "3kprBKkSFPBzuyYdZ1swc3cwJpj5VSRQma5HyQUHJxopnXRtYkkQpYGYiJqnUGdGdzXBnvvJqC2DCB5oxCFfKMbj",
  "key11": "3jMS3dVZmM3UVLWY5tf3MPjgGn3vHAWQxgxmEQB1Krrzzx4CeogUMQvGnVVuuBzJHNuasjWktA8etEj7Sh6E6mxb",
  "key12": "2kdfvnKPhcgC2ZaXg9vwHtUD3RHNDG9gQ2sRhtoJqJb9hntqCiWxWq5bL2ReisYaXeh2DdN9nQejoJHnEeajFr6F",
  "key13": "2mQqTkZBTJdJSLQr7MoMsTG9zCkmDMsYn9BsbbJeB99kcjR4w92FuaNx2VmGqtnBpQcYwDDUfVfr1P3quuymKeCW",
  "key14": "5Rfwcwdry1YwMGYjdjoc7owY2RYBsBuAJrytQZcp3FFGckbjKVs18A5GavPWSeMxwvQv7QJd8v1M8refhVLCdCFQ",
  "key15": "YCmshbaMDnxqEpgDcmMX8wpFh59u1AYzPVhsRri4CixHEgQaftB5VanZKvK9ggpRqmUnGhTr6Zw3zQ2q6JDZBbH",
  "key16": "NukRrsyHKXoPPunxZTscae4TA92PjJenesVPzLushFzAYKUnejesEiSvxjAbEXwCs1ZwCYCU32tMNgAHanQTaX9",
  "key17": "53wjpZizTEdqwh7wEg35bJXT1okcM9cgRcqxQZ6tyesdqiQnF6ydb2BVJueKaPfGiPKK2i43nUStTkw93iK8Rhmr",
  "key18": "3VG2xjLg2EwPrjqQJ5mCMUBoj4x43nggBAFr1qGeAQRKeawggnq7YbZvWd1fNCocjoNqtdit3ZbekXRPJosFsDLP",
  "key19": "3qi83HSzQdCjYXvcTLmrgb5aq6QfpopAmRSDCzkFcop4tK73B5WuYMR4sXBfx4KRKkKtnGADfUkvGynfrEKZxXer",
  "key20": "2Zt269dVYaEwj8Wc5tVyKihBqYsXbjT56ytwRRvgHoB7KbkosALDN6vFe4X8euxbyTFAm894S9HHqShNJF4MhYv9",
  "key21": "5cno275pDFBBFZ3nFrqkMVxhgCeEM7LoPCq4GkEL3DKvTmhKJH342Wv2XCR2Ky4MVqzNaFdUffFhWXpxLgmBVCzC",
  "key22": "5j5jiQ6E1ebp2cABRFLiS2yY6wE62YVMwScAogSLCSzEkxKW9cvfiekJ5S7EHdahLZWcFv6YreEFnApijQqFr3o4",
  "key23": "3DXVigNqVxmL1MztVbpVhNbi7Tb5gpWx8Qxaxh2SDV419HaqqrVJDhKx7sKpJb5Qj9zCP1cj31SruEd6CQpSWKzg",
  "key24": "YBD4TFh4GDyXtqBG2EA5vPjWyavi5brpm5cd5xEfxXVZz2kbc6oQnbTbiQC3SsSAgTjPZ1QwuesydDV45rvgZyu",
  "key25": "2ULWukEHMdvLf69XMH1PmAHpR2nwGR6hLZCVqarGYsjF25JzLNq6MPtk2bDijk5vZZWmAYYjc5Z5Dc2HHSiKwzTk",
  "key26": "67aBmuvr4GLUvSUzvhb9STPYRLWvxi671PmAdBy1V6wtc6NzfWDHpNgVj5MfWd5cBXJ6VhWXXR3pX7Br6LPUecvu",
  "key27": "762qPcWsk2ofzX83g3Hucmyk3JorkfBM3hnLHFGg1b913GtdJYdv9xcmpXNTYuTfuXZx55JA1yeyAA6irrRaciu",
  "key28": "5wazSo1X2mqsZ9tVncsfLawi1r5sfdhW2zNSVkJrD2vMdPgQLQS7KKoDqmjFNYiBZULQFQa6NAdwd9BuJ7DEb4mx",
  "key29": "4kZ4S4MvpKjJX87wv3Ko99TWgY4MsHjogNbQUzyHCtmtvbGCYo4mSFp5raf4aCK9HVDyFZUMVS4sSKp6v1mXh4sR",
  "key30": "2VqnEeYxafwAPuHXV2nJAkmoABFXyxr7AJUTBw6j8UoewGmw1jHuShq8fErzyWUqn76RMJjVqxNNDSMtp638iLKA",
  "key31": "5yxd7kUcyQUvovfLxrq9G7HZZvw72bae3xvfFkbrYSfUtY97FpK29sqFz8drvM7nRfi3ZdJJAAmeHGtqFmJW3VKB",
  "key32": "DrBRVX7XwXNWETyenpRnPC8tSxmz1jQYEKSwfLeoS4qAQo32nkMeLKaqbfctkCfBaEdJmBLNf8DGaDTd7e3ix2z",
  "key33": "2N6LK4cB28i42kWHDFWf8MqHyb5sbPE2ui1uF6izEWMA6kFiCiCrdY9m6njLuhEcLXqiKx5v7WrMi45EcDH2bcoh",
  "key34": "2CJBz3jW73fnfegrAFx9yrVg2W9JnEjZ3Ey4c61uVvtUoEqT3raeVKJy6qh1VD6BsVhU2LX6ou4gHZ4WeXk9akAX",
  "key35": "5NSBre4STkiXtFEdtdgDT35TdaPEUtF1BqREtRtsz4E331afw5L6hFa37Pms26KPZ6nG4u7r5BJ6s8r4m4PQtp2i",
  "key36": "4AXx9nLp1ex2TuznQrYq3C5bFr8Lwvbzg2suxe9Kcz48gj8svBWpbUoBuaqsSwfmEkTArHDhEiocDBU78xriu8r6",
  "key37": "sbhhYJxgG8Jkc31oqrTsMGiHF64eJkvhm4KsAERWbE5aLu722oLyAuEEUgAVyUgStDY6GijyfqNT8g6Qcbdkm3U",
  "key38": "3zUjnKQZZjPtTUP79ctEzruw6d713S2ZShQMFa7tWRPsfa8vucRVnFJE4m58xeaZHBZJRsUJXoqrgkRidHS5kwGV",
  "key39": "2VvipTDXM6HhzbAa1K17cZEsHASmTXcjmWJAg748MC6RxLh7C4nLUTyiaLQAtjVWN6egFTCoqQ8S8GTbamsvks8h",
  "key40": "273M4Yitwednck98JLFMya5W1LqyWPkEjNHgE1RGDsjTeFyqpdhD6QwGezmoSucFf4p1yTHGnbPKkvvfT1Y1VC78",
  "key41": "fHf9CP4Yz6qLYFWrXQ44biNvxSwK2GrRuTK5ajQAXRjmY7snGjN3DaPrCXUvcXKFYioFU15KtMmErMSn28Dn5Ug",
  "key42": "G4kNpkwE5N62J3GCd2U54VnbiXY3gdaYrLJ69xv9nQx7F13LerdsdMCUJPZkebYBtbhsECaSpxboMtdRo1YtLd2",
  "key43": "5jgfwm8L4JqSj3GV3FWUHAP7Smf47nxtjZf4XSE5JWY9B1LnYoStpGvuDZ5S1knaRb59ARKKSyGn5WGGE7eyskPc",
  "key44": "fWckPce1be9E2Um5rCb5XvqfjGmjNRzWoKEbg39YoXMQZir1tskWkdA3ZiPQMftepM9AiuEtUbXamMVj3XMhZjK",
  "key45": "5mGy3wxJxa3SBn8ExpbdT49jsiYK8qsqvzAfTBg5vqCywSp84HduKGA1buJmiLy5gR6d6yLjbnaLXheUQXS2zxns"
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
