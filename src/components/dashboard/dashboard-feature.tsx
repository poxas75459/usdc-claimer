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
    "Fw6d69yrQXBMT6fJ3rXRmZB6dE2oi8b7xevU9fpdU9A5V3mPFf6ym5UyfX59SyLATzJJZbAvjCfjnoiXjzHifpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z98SShBJJMrM89LppofC99gecDrCTnRmydURdhX6fhw4nfVJVgFFgF7JojQCHsLbAzgs69rH4aynHWwUKoejMtK",
  "key1": "2Pdkd4mx58DjYACM1zZSqGoz4Ym2WyHn7M27mHGJPJ8kGrFYswhM2t4okwep3Mu9m3QJA3vESqHpcPTrQ1MufmxE",
  "key2": "57UKdq7phMdfziRwT5qRBNNt8JYCWccK5ikLte83SkcBcvCkS3qJtqHAnbBWThQx329pZLEsUqb9MD6FzkHA4o5V",
  "key3": "61zsmELTP6VhomkRDQBWBnsdeoqvhmYFH7iuUnCN5mEsQv1etwDKFbgh1bPwc3mXMeyM3yZNTjajfx8UTwGWABCS",
  "key4": "34R6zs9ZwyYVnHTLL4QLwyG7WcnEpWQPYrqLWToqie1BQx6LNhP9RAC6kRVfEqVVmkX5BPdFhPokp4gNioKAbLtc",
  "key5": "5u98QXfUbeCpkNDy5By1ZJENZeiA94ffb3jiG4oQ8EAq6ANm5LqL1AWTCu8WyqZKfRoMwjTDPocNwfxXiBuHtCi8",
  "key6": "5T1C8UHafnFTf1Ctgai8n3Go2u4hBV9KyfZaUEBj5eDzSuVdU6S42yGNfgUXWEKM9JbeNc4GeduHrWFTAnm6sKUN",
  "key7": "C1RwxVH8Cve1kKbe5knegmP2QWjkmXgL7KzDzJp5ot4qySd6uRMkuFABNTdP7RS1prC8BEgoyX32FZMotPnB8N7",
  "key8": "25pXg6Fsbj5KgAt86se24Zdw5TuaXEzAVG68sZPAm6CzRtHninJ6KYhXJRzNtZb3WKYpKLHbb8NbqmzaMw7S9TZN",
  "key9": "4tuYqrRFMfC9toWcVuEJ3Bbjsxgz3rW4qzTc7BWbvBLuTRSyrSE4YDpyqDbFN654C8a6sJX2USdeCHbiRZM6obSw",
  "key10": "39PYi9UM6NaVzcMsUCsPKosVcs5ctTTJozcWyPVPiV5uaunKpmnDAGhb8axCG142C4vnEMMfbP6dHnNBrVraU5B3",
  "key11": "5YgaPJPUaszLiSuYTxTUYzv9WTEgiffrDFeAFAJgsiuPJ1ngsWNT3J4krRr9C88vdbfWVwbi5b8DfKvMSnwYNpbq",
  "key12": "FB7MEhQJHuqUE1ws9ZuUC6Y62rh3e78LP5Q2TycZqAXrGbh4WyUJAEqVcAArkFEW1cxjRa1oNLYuEvpN8DzDfUj",
  "key13": "jTptk4b4vQn1RYwucqKdMSra3kNWWmppKoYEruLP7LSDqWKY6A9mBBFh9uGuS8REJgo4QHmRY1PnVnase4TWt1w",
  "key14": "5S7Uf55VEA1EnTbL7CjhKPDTp35s1Ncjioc5Gdh6kijA49Wm3QLm95Lo7CLUF53Cy7mPCJhuhyZvhH6ML3k6HWFb",
  "key15": "5eTg93ZQebzvtB6dXheBVzd2cKaRf5v3yL6wXtoiF4yb6RDFD7EicvisXzAAtopkGNLwRp7KsxBczPRx6vG1WZrU",
  "key16": "kpnTx7CBjkKej1EyCwpqC4QLjPtRDPVGBFAMJWTidJBjWSpVfst9DQRFS52mTGkiZpndSXggo8zN3nCQkb6VaUt",
  "key17": "y6JLLzobRz8wfWDGKBHAzMeHnnAeeF8z5Hkb9N53qRRoDs8PFUCfKr1GxywP8HQGYyVPHXGZ7ztoMPFyWqmjthi",
  "key18": "5gd5dpBrzgjre2ugYMWyc6mxP4LwznkL1EzkBSJ5vCdjgkvDfYNWQkTsgXkzX7KqKLazkC2VdF8CSGi2CuXAHdhi",
  "key19": "3ZWvt1KtqWsvZQWzkosYe8zDzQUTK6zy9Zw4wHFu5RXiz9G2rG5KNh2N44mR9ASJkxAnncdTjZ94YUYY8qqRxeU",
  "key20": "2EAACautSyKbtCg3KfY34PnD9XAZS7akhMH8PAj9AZZBaVERvsfXDbt7n8hMa7ZkardAXZkJVGEhDEb4SrYvcRka",
  "key21": "66RKTULhN1EKcsNNetb866U7tvDfh7qpVbZg92vgWbURjELt2xt9B17HNMXiwuMEQdZrWWxk71p6DApvNsSR9MT7",
  "key22": "Te2aVmNEx79wDqmbxLvdhC7xRVNvYoUh323WLtMS6AmjrKBtrrbccPLueWDeyGXB2PUfcJvRMbv2Qh7tjsJncyT",
  "key23": "rPTM6HZnnh288U5oScPBZCBy87DmZyLiMHnaHXHuPPEurHRszTpujquBNbmvxQHw6hYc3jPLcnSy4LoEETCAynG",
  "key24": "45JRotgDiaRZ1omJ8N99y6RFm2wHtnhTjh1XBKE2db1fCXk5xXCFHqc4ZgYQUV6fBX3hzd7fUAFjU4qmuT5prfcT",
  "key25": "4bs6acSfRkisVCoZoiFYigZLezS6stH5jp8SAnZqZ3Cz2jtkUZAVz7BY4Ds3o87STBVZys9hPy67Mo447pEMH2PL",
  "key26": "35Aak6XcoXR3yq44JbPayNGFxnHBj8VSohKjAL9ZKMgnc9yUioVWta3wS6ecxudTgfTZbbS4yhX49DMLcXCcq4vR",
  "key27": "95aTLd31MnaTrHpMLhoX111zkJZXwnb44msNLWLnNSnja9wp9JVWqJVNKBxHKsJLBh8swgpscP45rxQiZofGnPJ",
  "key28": "37x4fFM95Qnuus1iB7fg8X596PyFGSXdXSoQLHLvDviVKfa1s6bLhqMncRw9CSnBdNp5Kr33KbEh3bxfCQXqQYyb",
  "key29": "5AvpvCVx4VU4sA54PiRRhBuMz9kXC8ms91Sd24sYpwhpydd8a8KvnyRaQEAEkVZU6JFhGjbG4iQcnBtYwBmfhcyK",
  "key30": "5hEk2Hi9erviB7QMMvQdcaWQoUeD5RGpGxxLSaTc6HU3eaW99EJCuuHNTUFUXuQLUTQKCrGbAn8jioHkgfrR33yR",
  "key31": "5cdzzJtrZTLsNMMK5ztEXdq6oVsrmHnB92UJiAn9aqZHhSMN2rURfVvkfyNhkACkj9cro2TB3V17SHkXwfVViWmp",
  "key32": "2nirP4XH2iWefGrgfHpzRkHA5HQAKSniJFDfRUqc7zRY6oxAWSVVtimCJKCXXD2ir3J1KM5b17Kh195ARt9cpcxM",
  "key33": "5eSve5vkAvVXgWcXbWBMwdWmBSvQxsnQV9W5PxNvi8mMzXckt83RzCSM8vuMMMkor8MZryVwFqF8puAHGTPSZn8t",
  "key34": "2YTMYdSkXtqPCcdcKNJpiW8wimPqN5qsXusNqGYBnQZzUWHAZzQFwF2jivUknrUNGsqdwmzx5Fdv5vwxbePkWHNF",
  "key35": "5DFGvA9ToqmnSeJvPH95zVYcgV1bqMouo6KPaVxQPgKKBmYqKZXHKLbBhWxuuv95ZrxJDsaQkgjMnm3GtjSheRQQ",
  "key36": "4DKNbG3CZ2dsosuM9WZhgzrCCcN95AKNq2dZ5ZGBQ5866PeNKsxigxsr5jtJTRoFEazoJXYbzuoUW6mMMxVk7Bk3",
  "key37": "47XEkp9H14Vhui5oKrSuzzxtzKeUVHMXNrwiKbfdiuczkGjwN6gMyohXUzgLJbve9eABK6Leb8ohrA1Bs2hLmBLr",
  "key38": "2vEkke651WcsQZeifVN1yWhZvAEkEP4SV5VSUBJ3qEHZt9HAFPq1xdCniFp26CwiHP1TMhAZXEvoT72wpYpw5Srj",
  "key39": "iaQR9Mcdofwmpp3ypgjFmP6mFLsMYdU3HiGF8aRsD6AbyPJ9Fbx8UihvA5Nbfzekbpx6C8Sp1SP49LTx3P3VWC1",
  "key40": "2MEzptwpuXtNquPuRwHkLbS1zEJJcDKvjpzx4cPYjN5xwxoUoCKDuZPzqiHbVJgqbSkgUceapcG4jG7aNJkXyF14",
  "key41": "4pKaCnufAjJoidrb34tzp1A9TMMq2ucJntTwyAKr19BdUNvHf1Yt3h64MGHx4cPz3dkg9zMnmDPdG1acGJu5eMfW",
  "key42": "5UKSPsCfyDhMEUYVFdYUkydwAQQQKT6jhqG13CVqWgLHcc6c8TJZgvftPk7UGVzziHVJnbwNqCKuxDRXSRE1cGLy",
  "key43": "5xmmfuNrZPDLrkfZP4M68TwtfYMy3vAuiexrzGvyJVyXY9FW1vUbc7dprcP2CniyWMrdtSx1vyzPeQYHoJ5JRFPh"
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
