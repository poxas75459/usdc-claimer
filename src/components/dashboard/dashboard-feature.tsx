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
    "2JKU84XhHdnGkjVL81hmiVh92WD9gspGybiKy2rt4NLrztY2UTbeqtdqkXSs4xVohm9rmSzdv1F7yn3vPfZprkSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s2RUHAEwMPuXD9tb7paZt6wSXDPT5ix3qgguMqXDRaP7Nx8Qx95HLokPgWXMxf9t3AEo9RgbVsfk6aeGMqChRaw",
  "key1": "32gXs5fPyqZxSZvSgB5FatYEyxZKhGghzr1YvFNYf9iVpEsMvpmLWFyM2Y1cqVbhSfVwJpZXknon95CtCE72oofC",
  "key2": "4E3xWrBBjdmtAG9quyBgtA9VPAzVAFn1ErKqpLrH8CrzAYFT4HjsQt3yN9FNtGNoJbmYdkLtqGXUECqFkfeRSEgb",
  "key3": "5kSXsXHLScj7V1YXsjvaviPvMF8E1K4tcemqLUBYMbQaYWBNFbJWn2WNZYoweHGL5YsLQJnjCiCdebbKPvQNWRQ6",
  "key4": "4a99q6tpTEf46aXbhUQq1aRy9upAfXj69xspe2AbA8fc9CPP9jmisQwrcZ5TvxkgSGXDvCK3iuaSKY7TXZhg1bih",
  "key5": "3TeAqHwNLzJMtpH5uTMC1gGnz91iZvWmKVdA7SAjxdVHzWqujPQ2H3fLXrVSwsn9cMFo2bbvpPHtaTTYocu4yuM4",
  "key6": "22b1jUFFR9oroAeqNhehHuQNuaxb9Nk8xMpCaSpCaLfWYR1B5DzZ3eYTAGizcWhnoQAXcEaRKviSuN9gZKXLMsCS",
  "key7": "5sGunbKXhCFSFE6h5TWGMn8sSZZ4t1L3joCQdFpu7HRFxpevzuHwWVaMeArQAcxranUJBEc8pPiwLprPSvi5CTmV",
  "key8": "5SwyHmbfM9Hj4FwnBks4usDaQ6Ax3VKVUXTnQ6JraXydrKtS2gy2hGtSLpcKVramw8Rf6srs3oZqHT3xfp3cRwn",
  "key9": "3tbcNY6wNmu8xoyQH1QfzDW6qtwBNZ2VLUrT5U2kWUP6DTTgk5AX1rpjCtSJGKQa66kwFCPkuAxpV6CfHMb2pfv",
  "key10": "41hsDYJQTjbA39muRde1zQNv42fUUKjHXttv47fCa4r6c7PVTZqqCBNjYRQb4bWk2nhubCuSouGEotdJvo8nE9Bz",
  "key11": "2rLNrBW1aDJsWRxPdvFkiQDWAnD2szgdsoWM4VtCJXDSrSkvimDhK6pgT34MmwjELefeiiDieK4WLk8ubx1tn6PN",
  "key12": "5QSeDvDXmjDYFuDM3EZZZ8xopP9ktaL9S1jvE9DAiqhZdHWp1arzDppaDKQJ5eF9BjYRpqeVE12tpBBUs816u44W",
  "key13": "2AsW81xawU43nSnE7UyNgwYmKk9upkApUDdfRAhVT5UijV5n7bgTdidk38TRtiVMj7AKtSgZpjNfsKDwCoSTezVy",
  "key14": "2dHB6KdrnhpEzM27PUdiCu9c4Ljo5vRrzddTZYHfNmcs1wkfwRD8H3qPgvnCkWui8bgMrgSzRRJ41FvstZNcU8Mx",
  "key15": "5nP83VqqofB7hKM66Tujf4q9MxWhJRb8di6esWTSYMeJMzN2WQZLvXvJrePNyyRQNGUEYubsd4iidRr3h3hvbtPV",
  "key16": "5fwkXr9YXXGfLsqy2SNLK6t6Muz95GNih6k9y7zCzMdTkmFZ1Nagx9PdhBY7AtCQTnRJmcNVyCtVmCDsZdTPUhDY",
  "key17": "5WVzsVsxCysGWfHoBYH6Ru5ghMv2vwZ6HX9K2FFDQEfENKZcGYTpSqrcPrFBhSKQzwZo7zaujEkd2bwiKgdBMRQQ",
  "key18": "3aNmA1HeP9MnZvpbnYqbkCMHVcUJGPGHhAHWe4nKuPndaDmsGtvzGZQ9Q8oFgz2Q7VfpTtE4aU2fuE2qM6s39Bb",
  "key19": "4jrZtqSrnCfbGa61M9ku8UCLqezqVrExJUVQb47ouZ4cwgx7CR6zSQ7NHbWSgwZiLiKZXL3YfK8gJd2wXwWj6LyS",
  "key20": "55kEPPUtAontxoWUWNLijRnNqJthbouDxeRZyYXYym9eCNKXpsrrNCtmiBC5D9nRBc2kzH4xSa6p8s52Lo5KXKGn",
  "key21": "58QLdVeo7yZxzFEYuvprowdpeyQg44AhpxsRgKAYjkChUNshFphbrHuSXYy6ieJFTs83oUj9pAuTmmBifWqGvzNp",
  "key22": "5ehDFNqfiQWY6V4Ea9x5BdYAxSSsvYHWPS9fDVPRwiqtBqZdykJFjrdVhD49UnKJdhKfCGjQPpVf4DhdPD2SQUtz",
  "key23": "36Urx4NCx8gi9XtdymYniLpnAizdJ6DJUfxuPfWdv4HiZvyPYnyRHC1gHmnME7Bwr7YbrrvBGZQ92qzfs1jLc6mX",
  "key24": "27bmZf1sFvmZ4mo3tgF7FkSfx2YADA53XYNFPhnjqtAsuJdeWrZytPkPeBuXYjkirvsceXVq6oBnL2tXebJVEUs7",
  "key25": "4gHb9Z8sMtWVR7NtTzSXaCGP7GFu4JfFc8TmqnHeJRVzYzGsVeAc17nv7mABzv1NgWD5Pnk4tt26RWCa3jsN8bMW",
  "key26": "4pvKy71s5VTve3atP4PwzaXmsatPqEAXpMv7HtAVHoYXvpwi7BB6y8bFrt1daNTcuFoMLzeZ5Byx16YFizBp4XbJ",
  "key27": "oDQF8smtAYjGKne8ZJDy5nbvhkA5HfkjSVnniR4aesLLdHmJ1GgFT18aM71uRkiYcK4YicZTjuGbj4yWq7WExV5",
  "key28": "2j6rrzWsPkzo9FEzxftpTjKoxWH61Ntgib3RhHhhYt4zon2qmcfgbG9Y1LNisQ2nJxfwde7LL7xgtetMWwjjEejD",
  "key29": "28vQfDPDe9tkmq21EPWKoB2RHGXqvgXsLygzpj9aR9WDoyLzgKVAvEex4pqMAjSkhKDS2f4viWP4niaCiNKd3fDT",
  "key30": "4ytKmRNfxavY2Tg4cWqrBmrurCmBMNYeCUqnrunkwGNJ7pPrcGqSctpdRt3tMWFN87MiZgFbTtqh3EEXTLcFyFBq",
  "key31": "bRnGJ1PjTVUvZSzHwvNbuc21cxFq4HfArY4p1vwp2hz6dMAS1np7SkSAFc4nU9V4bWYCfauPA8qPJewFxCMfuyb",
  "key32": "3q5K5L2C7R9Gt2Fjh37rx9DkWsZC86Z64VPP1H5tWWBmYZaTRBihta92oBzJDVUXSSPGJ6iYadoZEkyQKYMwwUzk"
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
