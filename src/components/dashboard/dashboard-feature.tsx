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
    "4LgPbenZhyHfsstoqGVQkT2sj8xh2o3EasrFanUg9tLCQZNHEjyWd8jjdBMpwYhJbbnXqMSdcaLidiubkBzJrvSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QM1AcENE3hVFPCj5YJuNDwDYmdoT76tJm1ZsBAGLZE7B5dRY38vKKEHfa6w1g979vXr5cxhhpx473wf5721PRef",
  "key1": "3CN3KmgDw4m35TmK9zXcJkXx3Cvjp5WDcbw5u74syoCxphuGohrWZ1VvBm47RjuBhbnqPa7W7pwnndMTAjZtHGnM",
  "key2": "2dCDqUqSrkzwh2AAgQp44PewAa2J9HWRnYKesvnw4sfmNAUw7hHpmNF3AtWBC1nTrCBjKQXS9HrwPDMbMudCM5Pm",
  "key3": "5oX7dTe22qVYeJ1jWGj6Q7ZH4mvgCDMRn8CKuCpRwh9NaTHBn59NHVkvwTvnwem628ME1Xo4SJ1R5opRuusLKi5Y",
  "key4": "3QLwExaNij2DHmCkzG1rYkfZZ26QvCvw3TZdX6qkXYBvvqdUhcyDQWhkqP9iCWTcQv2AoQEmyswue95NPw3ocmcB",
  "key5": "3KecRo8dF7rL5eCUPibWjM611uR4cqdCLavzWHaa5YLjP6YJS5NmCtnui1WDWUVkb7S4hjunsjxKLJutk4TTLszP",
  "key6": "3Eovos6EWwgKJ81bixggBbPn8d9FQdQqXaBhU7pjEqvEBLSCjkKs5oCz9AMPTVUa8gXD3xMSA1TRUyrhLePFxgeX",
  "key7": "37haAzAf4JdNgUjXpCAKAFHC9wAUGWx2nnUv7TPrrWwRexwLadSNGWXSbXBWPQEwGQ8jmYc5eN8sdscXmYanCny9",
  "key8": "2QgcavDHgrpqmF3RS6axrQKSLKU1UXmGF6kfAs9Tqh87E8XfZNYEtKnPMYWw4cDFbxzZe5eYPRkRFDpKzKTWH3h9",
  "key9": "64vUcdadmxp2iGgWUyCqyvHhi4BM47LQSRueKJWf9U8GwPunim6dAvZcRF6FKuGfQttyhTuLwxwBu3wy3yrirTW4",
  "key10": "2pxfCtoER9jAXcgAxtTcGA7tcSs6BH4VVEoZqQBvmX7pFt8ndQRQBQEHPA3vU8xisjV6Bmtt3JyCeaZDzkvcYKb2",
  "key11": "3LKnVDKMpLbTxQ62APwucWBMBmGQnWs3PK5ADPD9LA7bYHVnHJeMNBUCCagRDvxQtLBdgBU81shuuWbQLTt5oi4i",
  "key12": "4RcBPYm8SNFL96TePmdxuibnCAz3CTARk86aFdEXDpVTJewYkCSZu7aABRf8HJJgUeNnKUvs2wiKD6VeT2mD9mhz",
  "key13": "2yHSFnCc3syZvXLRxAzuZBsDKmVHKTW5hMwPhuaJ71xekiMwpY7asp2GeK9XBYFf1GNxePhxyHSTszKBp7E2ofmW",
  "key14": "3m8MDFczoNkNPJ4V1PK24aFTLgy7wx5dgnkVCTuXbZUKJxgXLdiMa4x1vMSKxVBqwS7mjWMPMocvEeyeaZEf68Dh",
  "key15": "5uCiPq9H4r6zAtmWfRLWVP5DnxxFr4UJDMuMtLUSij83Gpxedb7E6zPr4SB9xCBmN7G4oNYHmgxoKWNsZadMKrzZ",
  "key16": "f2aCJBktfVXqSaHm7sVC3XvwnyKkxUTwk82jWU9UK2BGN8fu2Ny9cf3FNNUFWKEY16LQVjQTnJYKjqcd3LCfaxc",
  "key17": "7tzwU3j8bHY559N4Jog4MHkSTaz8i9UDkH98GXT6JoQYnjugV2ZFGvt4Bf7EG6bLpWsSDkBZwC7LszMUSZqyusg",
  "key18": "66fVoEoNMf9TRav3E3f7WQJA5P1RAJnAVYbzGaVGtDWUW57vErE2zRhyS83RGqxbG4PSsEGtCuf3qSn4j9EAYx7f",
  "key19": "3t8adk7Lbrt3W9SboFvDj4K5eKWLrRBvFg7CWMzhacDA9y3FphwHkYMRztpa5yiUYqapF7CDyKjL2Nw23X616kNP",
  "key20": "3jvA5Quk4LVRNQW82kq4H5KGnnS7gvQSojP9m3frp1fJEMzbPb9nFnvEujSVipsqUqCgYLKATUPrKKAtoS89dJs2",
  "key21": "12aTESFUht4BcGt1XnTWqS45B2vC36KiHzpHgjwXoXaA8BpkCeyPJqZxBbmwX2XMaHr278zJURcACxs95xiXBRb",
  "key22": "4ugNogApFppTMTpg4na6AbfEVm5xFAXs5TYF9xEgrgw3WL9ZMzkF4Dc5hjLR2TYFrsrvtMpPyuHToBPRJDomayX",
  "key23": "31415hewaZhx637tDdJVKABeJGNcA55tfdK6mNEasQWqpm7kP69i4rDic5ndurSMkpzkBzcbRF7s9zEeNeZMvdnt",
  "key24": "4XMjpVzwTrckrem5ckU52JjscJ3fCCYCDXM6MNyMyKPchFuFYCLa1t3AVdQSw7nxxrv5UX89KVNRtmeo8nD5jGok",
  "key25": "2G7CCRD9snDivdxUBm4K6ii7fAGypEyXyC5sSrmvoerAdVafc9LjZX4UMDNe8fjQSsZoZ8mhnbgee2YhYb5g9fmM",
  "key26": "4xZMy94xUkdGkUoteE3Dw7FNHq38p4HC23z6TWD1bw6fwZtAdts2kbwVaQhWcdPPnveUic1DFw4vFsPXWFaKJzmi",
  "key27": "vo1iteRVkwTimn1cGFTVSceiC6QgHQ5wT8pvc512CWJMXnUEe2LFySzgA56JKBbqN6Yt1hfcoRxmjoTTWHHK6Gv",
  "key28": "2dbqWLudYQCKGRM9AgBS1861AntMdqQsEBiTF7KzSGgxCM5jbi2tyyDNhwtGV5gAN8LuKYSc7KGU8hghUqi22UZi",
  "key29": "45qARMrb3kf6Zi6tL7CTka9YvaCPQ6TXBMTcz3kmQBrDPTjMMrRcWVqUoBBFVf1upve3aDScdKyd5BxqKQtz3bp6",
  "key30": "2MqFmHJyEBgTHCYTJaH9Dcg6mtFdzTXvYk6b7FvrUtkCG9Zv6hiKSiXkqneNwP8RofgB7McCyyzgUWBLpF2smrQB",
  "key31": "LfXE98XtyWH9vTJ3Ld2weew3teTECgkCYGWhfVb1DxuwXAZscBjbcfkmyiueXz5BSSteRMamyDETgitwno9juuT",
  "key32": "4NsTK3VApokyu8rfE6D9nR6v4Gku9pwXD3L2EQVtG2oYGyfZC6TQhAi5jh3bbsaceswAvaQ4nishyjoNPAwgkTzb",
  "key33": "5HiMS43xt3ts6UvCKrHshZgKiirghGQ8LaELZDSxsm3qeSeiz2Kz94mGLZWwActGJyTyw3HtrwJ3nqqvRjZMFnyT",
  "key34": "3DiD2HEEAgtipo1ruJzJ8gngubt9VKvCaKtvmS7ctCf1S834KHFCH4iVQeBieANXqaKgZnkiUBbCbnkKuJTTETxx",
  "key35": "2vZysB3ABYjkAAgycPctH177Q4gdD66rjGjz8ZipM9FHLCTDMwpvwPAsjj1C7GygUPM7cj8os3fVDfXYUkeQw3hQ",
  "key36": "5TrXnefT1szCjyKMeH4NVfHZPVvUX7QuBsDvUDYkXtAHtS9KqVsPxxToujf5qCFWHtLatJx6ATw1anxiKAeYTVcR",
  "key37": "pQmoeBrXeLRjvtgUpbYr7uWjMiTDKFj8x4J1Kc1pFtxUQwG2k7KDnTWqtxEWxdSRQCcrnY77ZwcjNgLj8eMgBKE",
  "key38": "51oY2iQFsdDv7rAy1kzB5idCVwazorS7p7hqYMxFLuNJAGiQ6CK5eX4rz8KhfnYNFHgDbHgEQGymquGAoVPbQ9TQ",
  "key39": "63wMp2RMXQQ9EPZcTZPLEzjSs8Zfx9KvJVKWgZJbunTXNoGMGD7GyEX7dr8pm5hvYko2FYDMpyeSwsPiVQbef9UM",
  "key40": "44Tfn6YsBRhPQAXJ2RFD2z9RMuqAovU8TfB4a1r6ipAypVvuz96iXvJYofeQcHKNNEBfzKzMBQ2UXqbVZXsf4e8V",
  "key41": "5oqcHBhmZK64WCfPFpsdAYTQdWmeQ4otidDb3piLS3iTq8YRdk3DVkf3s4NjBZzAatP1bSb8rm2Kze3EXGzpEfTc"
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
