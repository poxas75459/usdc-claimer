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
    "yisUaU3oqzuz4XZ7ktBQd2a1qyjiejQ4uSMsRvZAJKPs7UR5MJULazevLS47qwAdbNHvtGNfJAzuhikVPtJdseH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AErVEKsRZbT2BHRN1ZppcVcKsJShb3Tozg3m9V9xSrQD11Gx1d9GLD9tnDexTeuaBXCLn3oeyPNvecaEg1vR2Ze",
  "key1": "4EfvfzwuCmNKFAUD4zXkDTAMzy5Cg7jqu8i9X6eVjg39Qvy5ka93pAMw6Hh5ru3SmygdWhuRBvCVD31Mmb3zQZso",
  "key2": "2HXBXB7Es9JhwEYqMtrNvAK4ixjpf3co11xvLgyyNvgozgmka7Z4KMog6DsaqFmDz47sAUmcbUHKRR6p4fuHG5oM",
  "key3": "28S4eZLrQ3DvNdCS8rxTGbgkydmcEGVc5cGS1MuakcpP5fLhAxZmmEUVRfQEZxVmniFrpqbUNA9d1n9Jy8hRsryv",
  "key4": "YUXAL2bVQXMQ9L7SLcNVQJ5NBSA33qzqg7K1TWh1M7AdMEAQwuZzbwZ2ztwVnir6zH2t6Qo9nzts89KyQgmJ1p5",
  "key5": "4nvxneUAAwYGXeqGpfest29yo5Se4fbwcLsKMh7ahRv2cZRaJyUyXJAkY4Cm1cc36CYu9TiHq5sgjRbGkT6KxAUP",
  "key6": "oZjnFLeHJHKnXr79huh141fWS5pBSWRFrQnXjSKGaPpN8XNiwwJ7JmLqAPhtRnxUKXcQxupdYq7q56US7puemyJ",
  "key7": "3JHkjCta9dxa7ompTFPKtnFRqaZJ5fuYstqVFNn8m3UqUQoV1bPu7cED77de5qkjkaMued3J6VwBb5gvrfaXcBf4",
  "key8": "fKoREnNxJqG5Rd2jDEE4SrXa6rgHiGMWXQjk3qSgC7yTebBrvTzpVBVPSyj9bqrFmXvhZ8y9heQF6oLea6ToiqN",
  "key9": "5T7a4UDLt2dUYwvBwNvPjeistLWEaK5nLJgR6vqqxgQmvL3ytjxHrx4YHN68278F395NUm1qebvsUDriGKSCzfar",
  "key10": "29DGj6A4sm7SyNipMUrYsN9MHVkaW7SVAA8v1fgNUhkNEXFNvDiwuiJL7PS7ybUivL9hzpLwJWNojHH6SVYTFjrS",
  "key11": "3txruJojrjvNaZCi54ecgvz4ifB44YMDjQ9bkpehdSHUazgK37wHvcmRKjbkMKt3Ld9LALiLXcnpvT3kz8bYM1YH",
  "key12": "3MaZxCGKh87qrho2VdEVz63BhVUYg2M1QEkPmM3D2hbb3AnQLwtsTYfJM9A2wtd4Pk4oo7Db2FQFFQsHcvzCKcX7",
  "key13": "3B7FHzajxRsBiCDmsdgEDvo2XV3qe32zASpy9kfibXwnGrP8uREuM7HmeqU6WSxHZTRSaRyk2zNhs1DgU1yo9jje",
  "key14": "RdVh1HH6jphMa5Y6csgPevj8n7LsHBkTmfdZ8LaeiX1Afg5gAdTuTTzAk9kzN9E9NA3vfCHczBQTN9GYTSfx6Aa",
  "key15": "5D2q8AJeb19fwT2bksvsiJin4b9EJyJMvVCgV51S4Rb7PtNZgbwjssRWhv8qwxu7koKK5TLkuEokfhLP73jfteGZ",
  "key16": "5kq6c1N9hvnMeku9rXLgxhatgJ39X9DCiGtw1ypGaXDwr3PndMGEyzirNCnu31gZzYodToqdVW46FQU7exmff757",
  "key17": "2fEjApXjGsRynsc9FA1PBJtVgp2xUgGH4z4rBktv72c7S2whvWDFRr3oKWEiwQLZtJg8m45KNbLPcVN43dJjz8mM",
  "key18": "3RwQpjLKsRbj5FKJFQauyYGew1dX8uBk99H4Dw1hHyq65j9F5WTW1hFJuvUA7yXKHavgiFMbeUHF1opHLMEVD611",
  "key19": "4bP3s83Z7LpGcJ8V8VTTNqZRQeF1egxJgSBZLLPRaK411xexgkwGguekPiZ7BZfxZF5Cm7kU3xsDefiFGeYqyoBC",
  "key20": "HxDtHfy3AH6479BAVyBBR3P8cuUHfw355qEigHLJWhzpYGXqWvmckWi4uT6P1rDaDDU1Ai4rfdKFsephMGBsYmb",
  "key21": "G3DBveD4cDT2Y3UcoDLuc2pivnu277TpmsYukEBnfub2WSbJD5wPssJQNT3NHcKwe23qSFBCGfhFN6bxNrhR5P3",
  "key22": "tUaH8XhHzvfc9byt7LNyUiQ5Qc9ADu6sSZyWC1oFwNHWRzLfrbuNpjtY8mpNpwgZueoyfyJcWFruAQhygTMz8Ld",
  "key23": "2tn4rD1qTQxDzHRkTjY6vRa2zd3SfJh2dKKFLXhvwmiu99ptHbsoXMDueGKHR7fzv8HSPz7jV5EDTV3Ff6LNRriq",
  "key24": "4UxWTZXwsRfFAhShR2XjzPqKtxY7HNYdzHYwKKUoAW2p8AfLp6y1gsqLxJmSrddquM9XHLmEnh91EcVQD637gFGx",
  "key25": "4iTB5Zc38TGjVZ2ivfD5CWgHPkiW9wDrs9DACoaVLTF1qLft7W9VhSdMSmxNaWmVnFULBHHNLB5ynHuYFYBepJ6Y",
  "key26": "2gyi2qqo1Vn6zEJgXzunY7xun2HXDAKoz6BWnnPytMEBDtSyPQtcW4rqjyvm77N2jBbbLQDXjg3U7Gphj3Jhb1cS",
  "key27": "2vQa8oTvriCfpaHskgHTAvv3TVNfZmL37es287RdfXNpfS6gWqXtzmH9Kfktt8jeS1FEPo82VztdQ2pwWcaCpoou",
  "key28": "5JEVwHr8LVXa6psiJzVKDsFiZP8yyeNaQoy2ijWLhJzEDmaCH45nKbUT6Wcj6R5WirSDfBbvKnnCgGYi57hwpXJd",
  "key29": "59eL8e8yfbJR4xU8sYZ88hEEeNWyArmn55EaRecJ5YRZ8HizgCYJonknRSSt8CYoqL2BFP5UTUbuuB4TKabHPAxB",
  "key30": "35GFfv5VtvRnQGxBTBMSJ29dSZYftKuNoWH2oDkqTv7714iA3qS34zkoCzZRpzRk5ZRqze3AP1SGP85B3TM7h8Az",
  "key31": "CspVp7xDrWpDxSJakUR2yEJDfMt6bpC1qUZxBVxX2D4KhWsUrhNaV6wQgECkACP1YuePPQypMC3mcG34KZYQebv",
  "key32": "4QMb2cPDKQCEhhqtrBKZJRwpBSxfBmR3XEDA3KTcRuMfSuFHCfRs7q858VMpzfrtyvzAAtMm7QkKYhxyjHr18KtK",
  "key33": "2YqjogyS5rAUVZKkJBDDvpWTN2e3MKFNEPu84chr9LU2XMHHMHUpCEDBGSBGdXqvsVzrGmzYup7S6sfF3KmCqNRK",
  "key34": "4qCCa2bzxsnjpDkDr7YpqWw3jf32hCAfiqigcmQ723a4wcgZrc28yhSw7x5CZuvwwHrrbWDyv47uhCLJ4J5frMJ6",
  "key35": "5unheoy4mFQtkcnfRzxrZdTcHCxpZhuLSJXqNM44tn8SA2TVcMaLPYRyJ5hstt8NrBBQCRFnxpokcEtHeft4y11m",
  "key36": "2riURqkK7zzQf48nwpHf7M25tLzpqQ6zRNpvJM9a6kfvZqX3aDDfQyy7HsevcJ5zDE59w8yFw2AHTHVDiKuPYLbc",
  "key37": "5uqUQHbyZTMBYJxpae1d4DZCZBDwb4krcHSkwtoz6Wsp274rbtfz9XAJW69DorhYNoKuKSgsKmHSs2qk2rmK8cFa",
  "key38": "2fwmuaf2wSMtvDVprWb5YDEBb7XPaofGNHyqqk22M2qnvTZnRMHh7qrxJyMgqoRMh8eT2g5mPnX4GrE7PTPELYpd",
  "key39": "2mFjvBCrFqUir4tbEvuwwnsUXLwVF6HWayxiL9iP5fCgLqJxBHGAQQTeZFX68QBP2CFNLo6Vu7t1HjgrbutCggvu",
  "key40": "4tjDnh2v2XF5Lw6NJmoLzXfcCcX2P1M4FMdPVkpKmVjwAdUPwEfiHndBck1HBb1af9JkHtWW7PsVDnFbNKvMyVED",
  "key41": "1294RSt6rjNeAKunHHa4c7cZLoFbJ755z6dNyEJ571t5x7TMdmuwGZqaz8j3S3CFWt8YDKi1FoCw3hbgCxn8A2i8",
  "key42": "3nDTPfNWGaWvqaGeDrZ8qip66aChSvQoKzkSENvynRmof434DAmDykZuadSR4qra82SQCMNj9SrKGYsszshF4GQ4",
  "key43": "4BCy5Bt6YLX13w4sCLhDAnfseaVm1TcmtT2iQ5rU5WiwHYN5xvhhyhctn25uiBdtL8Xza9T66nCA1sKng5jTTpUp",
  "key44": "2apHAyG73jyDkqbJvJPXbRDNZAQznkjrN4PPgZEDmsv6broisJwF19wEt9UGn6yVFpdqyGn85yDjPKFwMsid42zE",
  "key45": "34YCgTqMrBzqWg3ZEQbAYethTcYqCYw5NFbsyTawExNwvkdP2g9GZb5TcdcCtEBEkrxwjNYW3vCd61ZpVG87cVR6",
  "key46": "3hCgoqyAGNhvyJKnGdDGPHaLdhmU95Y8YLo2633EvqKbq8j82Mi352nv2o4ScoqxQpPaebzFsag1EDrW2xPXozrw",
  "key47": "3V8VYMxrmBLkt33dqN3BapHAjHx2v7t1ygTZsrLG4pNxTNSskszhG8KgdRdLceXS5JUq2p7bYLaajdSXxMbTV44o"
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
