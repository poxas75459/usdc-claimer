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
    "uruYM87SBuUJkH7nNLv6greV8wgHpT8fBS1XJBDZmBzBH3J2a3ZYbXj3uqZF1dDFsAqSzbZ7fyiHSRpSG78p8ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sjTETeCFGamigS1WHkiMuUEa8MnK4JCQV9D3ze5Lb3oD14iQUWqDEzV7MSCS2NDpH2s5iue3HQJz6r2UUTBaXDT",
  "key1": "5rhNB725ztPoavqkVevGGuUNSyXfZtgLsjRiwE6KkQPPH9kuQriZAhWauFE6LXrho81jtbVPgf748FYmp8TNaiuA",
  "key2": "mrmn7kD8b79L95YsPpZbE9HWpH6htRbeG1TcmDP9z8t2DqsYBW7h1SS3LAkVYeBxXquDW2eVDTGkXiJpr8HS8i2",
  "key3": "4eFcSqL6vKY9W8yo9rZ7d8Ze6PuARw5o6t8JKaDKuRYSg15zzXMGDK7g66Pf7fQTbEEAaDX9s3uLGD4ZPLnLC2Wo",
  "key4": "2f5zmH6u9Houn3dMKVTPPPC3P7Raa5w5wwbL9sWwpHfkkEjHVskvAxEvnKntZ9kTQgH88jz7BG4dRbyJqofZmeMv",
  "key5": "4v7diBq2DS3RQwKdTBU6P99mC1CY2TmeuLCZBHjLsTngVtGxsmsNAKz2jqwCYgyKJWzhTYnwveFwXuQ76fHrQd1M",
  "key6": "4d8wYdx6u9sHzYy15ZpPvna7mYVEf8frCXT2upwgtdoYDrGhqsbxeW4e98VyGhwcKPngpZgXvTNCqf7qZQ3g6p9t",
  "key7": "5M3Fm51EJWrq7z7DrVrS1cPavK9y2YFxYqn2S48EynjgMX1jLk1RP29cDCzoPHdZwS8C2GgtuAzuCzfckAPUJn9M",
  "key8": "62VNZHLADs8Gmx6E8vHMJWsGck7GsgoL8ADJtybFa2iMAuLZ9UT9kGTmsVVDXtBiw4SMaukYW93tBbA3aAuG7bb5",
  "key9": "3JszBcAtV2fujJPjzBbhKfYte2MFH3H4THkCJqcQCkrVC2n7k1Nh5kEVHgiQNFcu7TLKeomkNNcSTXfhTt1yP2uT",
  "key10": "3XmkgSYbK9KNMvYw5iR6u9yVZrqhxme4LKG9zrVh5QHSX9rU5dVSbma1sLZsjTYuiYm5SqCDFNPtX9mxJyj623f8",
  "key11": "4dAssGrtqnHSHv4VfrjJPpUmPStr3Ei1Um4ssWRyU994tJEDKSgK1QUwpBQh4erNQ2SRj7PeHQcXnt99faRSneHn",
  "key12": "2gVnziKZKGL8Li6gt6sa2gDQ13u4mcFpp9JmwrUVcBr2Pg28kUyzcJLBCUducWd2SSHwobzShsPE9qbZYyDB3sny",
  "key13": "5UyWBztky8VTQbuRq1c54jiVmZRJTGgFYtgomeSJgcj2qmD2QUUvht7V94Z9PMzyvSpTn8bqTnR46tgkS6G8fBtw",
  "key14": "5pEf5x4vgstsApFxqYyPoSXjiwtQkLLYKaKKwsgdeEkL9FTCfrJUUqawwhgzHYXWHGc4zwJLdVs9YwHvRxd8Tuia",
  "key15": "3sgE4M3RyPywpV4bhsiSGc693oqBZtoTkTVkpxxkHGcqPwhnsXAXphBRKDBA5QSojp2h92pxNbUdwQHZErq8Hwdf",
  "key16": "38VKxtUsywYfQCqxZzb7JFsQ7Pk86bt9Po9Y9nzk5fjN1KrpWbjnY92X8A5LiVwEvY6er9gYkobaZusHLdArXRzu",
  "key17": "3yTTM89q6qGFKmCtV8XX8CdTBNSWFU7wcK4kak6nBvDrDHFVTyd9aoD3ewe47ADYKXf4q5Rwduy5pqw8RQ8zdTuY",
  "key18": "5PN8fNV2aXNeHB4hmedFcJqYpkznmLNtWKjiJyChe79p3umCeQXZdC9yJqxzAPkFeipBSdy1Yn4T7CG2Hyf61UTH",
  "key19": "4WAJ2qBmEZuMU3wgfJeyhLHQbTXK9pzNbaC6KeiErvrqMHrK7KgN9L6v7UfbQLBq9XNN5jvQUDYJQB3XyGy6YUcz",
  "key20": "4VLrF4kNEeHuwGwepqRUZaXizM6G3Gt2tRPYGyWsSXLM2239dRJJTSLgQH55bzqWyHKTBZygZ6YAJjFjoHnDuB1p",
  "key21": "qWoLq7wEaYP1GEJgyuUQ1p3eidPk2ayiEk8NAFor5U5hZMV4KK99rTohUMoLnNxeqNgJMMvSvjcBb5tmy1FsjtC",
  "key22": "3w1b3ifDwFTG5ZLd4PnouL9fttZa69LCtphd1gjwY9Y6HckLySKrx127GCsHmPL76ij9RUPw4g6zzrXkD9FK6EF7",
  "key23": "4g7AVFNueLLfA7gca1KHZZZ7SeiT4NrdGGK1crV4VAzxB9p3onytEyC3wmyJ1rveKKcn4udcxrniUH2AquRnyguq",
  "key24": "jRJ7wSar1RQ1NHBq11fSXsPcnbsLh71AHg8AvCFd7C6z3Bfrz4yVYt9YKVqVt8reoP1dKR5MjHShwbFgMoSAL3c",
  "key25": "5WywRy4PiQYpRkoQ23y16Aysx11wFXVPSeSaLQFsnQ9Wkz1EL22RnUvCfa5hmvzbqPE4NZK1jdBDbNswy12rqYDP",
  "key26": "K5vWo5ELN1RuoCTRVeQxUNzdLngTQHYcvG8rXdCmhkKUHz3csfMhbJQa3R3iT3h6bN2Q7XXVN33xrhHoYiJdoKw",
  "key27": "wDbUCtjkrQS5Rq23TU791UUKjyahPYbxLNFuNZCBTm57DRmgDXNaaR3wyxLxucxuvG14ho4Xpmp1tEsw2Prax3S",
  "key28": "2GSCskR1JBnEzS6iGGBZTj4sJ9aYThHNpGjjNw2DGNpyPeY2M5eMCbC3deg5XZ1EEpHKMjLurJXDeeSjjWY428s2",
  "key29": "5nF3hcuUJBAjseeGEbkaCgvzHVFQyt8qapWrDNkfpDWomgpvVxfDVdcA8TtCJEWGG2d3LgeV66yCwcJJ2p9LShTY",
  "key30": "4UqcfJAktQdQusnvRp8f25JZkWGNH9ecuYWiz7mzsnny3wq2SttkhYVFoFk8DS6NMz13KzvjBSvZH51K7V9wkGJw",
  "key31": "2g2N9bn9MBpMmoCvRQTztZ5LUbZCNMpEgrs9zWALU71gAKUrioJS7stmmd7xwwGK4mWfy4MWA6X9Hkxm9ac1nPir",
  "key32": "64S1ZctvmhbxiRxD7xkfbXXM9HdxMkqFZJoGdP8rcCkWZQMzMYec9ug6tHJfJp9AgwA4gE2UfQh9WNb3bN1cBLob",
  "key33": "5jzinELpgHcixc53khnFe4NAJANNRYjPGd5S6kYuEuos2UmEF9S6tsh9EuXndgyrrNAC9H2wjbQ2YSj4wpUqRXDu",
  "key34": "4DK4MhreQrSCzDxBZUgzgCGphbmRHxsFCwrAH1xLgwnkUM8nypkXcHKAbMTJaHFLfmU4THvARKfs7L9JpkAotvPQ",
  "key35": "56TL5G5DYtBfUDnyUBJ8Ds4qAivQ2wy6F8MDi6SK2cLZhAN5WPZ8Js39w76zYHmETDTaBEiufyjhgQL6dQhbKPLk",
  "key36": "4AFimNr34prZmiaN3KuJ8L313KkgXhepdwtJQvWdPUPTgMu2dyXVDTZZ8PC3Mm1LgCowEYm11EbbDuaJQ2sggT1R",
  "key37": "3W35jotoU99UoTnMzN4GQWg6CHG37rZYkJ1fWnXdZahDbTnbtSorn9vAJvoYemhr3yyyKXHDiCpRFHc7hum7FVjB",
  "key38": "LgZ3e1z6FdEwQTKZ6AVCyhUYnvH4Ekz8E3eoQHF2v1RRufYn6wQCPbBGYp5dDfcdaPDJuLu8XYWdhYWvF2HQvEw",
  "key39": "2dyCckQs6eU22iLUNtLcq9qDPhqrjHcWpiy1ZqspMpL6ShugFzGX3HNJE4xCvECMTQrmXHsZySGPpz9RDktPdvY7",
  "key40": "3k8a5da23kGJ2kmEm3j4AZEG6nwP4UzqmnhyYJRiPsyJ7kD6aHsWunDSrSyBS7PJVZE2HsU8JFae63g59bwKaDqU",
  "key41": "4Nm1hrnWyHk6y3721kG38PfWcVCzthEMBHW3NkqBK5547KgAnNytcyLMmAx3Q4KhP2EjmN7RetcfeNT9zh6yFyKU",
  "key42": "cdZcMMiMg8f9zsQQKPDM2bVD8RtVCGVSQKVmYiPCqZk8PbEsaoTyXTpExz13M8xB7rsPsHx1jKCg99VHXxRkCwh",
  "key43": "5JuU4ShNjPHXG1NDvrwiAJZWFV7AV2zjEWJHBjCA3dQBMGNn9gSnXWhTFDDowrqvEhcnvUmqG7taFLExnaTdK4Sp",
  "key44": "3XkVMWEnF48g8txpPdoM5mkjTTTBEd5dKXeUTXHQRdg6RVxwpeUFAd9ripZMcFx3fKE8gEdL1pVE8EBYYwn1HFbx",
  "key45": "58PhhRmefRo9iuUufr2V1RbUd3dSVVEAcWDFreXLyUxxf7K6nLgRPn9sH7NffcDGGVeskqk65i8WRMHYhJyey8L",
  "key46": "3rKLFJuE8RVhUiT54xXgJHdWRo9c2269p3ZYtDPAVJT4345HvTDKoXkGDNiTfWY34srz9hAnbEDtXZRFPwAo13sk",
  "key47": "2m6c992fmYCpb7G3VubybrZnoSoB8xYjyCLZkJfRRUYeCBagLESNkA9HNPTijxkkCGMASSkgbWVXa7c1rhs8WU6a",
  "key48": "4GHzjTAM1EkvcSqapGrHkpY5XtrMBptBSp2z3ai4MfqibjANJD6UVdhwAmafvVYfqfGWwBgXGAY8dM4NjYnVgjsm",
  "key49": "4bVavp48haRRkp8LipiGdpSYius3rTvWuQHWzHNuU5fsVqtMfEM5DciPY66qCvN2tAdnLjV19YbXFZvLB4ee8r9g"
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
