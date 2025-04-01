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
    "4s99ifPpqCFhHuXMNmecDcZL81rfKvaNzTxAxWUzkqAWPu14qnyx7hpXr74yw4dy1VioPncW6m3ekTYF4mB1LFLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Zjy8Rwy218VGG9jBxopVNKk6m3MHMvKd3J2HYonpHgwRLJ3xDqnRx1zAw9KKu8BpcojxJkJ7JCpnjDh7gjESHJ",
  "key1": "5Dz2KvBqfXtvEWHAhU7tQzBUtJT481JfmkYCLEJGPrHaKWizb4fYuPZ5P95mZ2BozYyRVPogP3mjqByho1hhcoaG",
  "key2": "3ofHKsjCYdjxEcNpZVNUGrYT1Gqb4CRh2J8dNjikC3x5zaz3Yn1uQxNLQJkhXQ8V1tcanrtrbzoJptasaVKidVW5",
  "key3": "5Nmh8FSmWhLMJh3vkT6DK8J1cMMG4BggPNoWUysQHVqkWEXV83nCv2ZapCGguYjy2GbHPaK8o48nUbyQHad2wyQS",
  "key4": "PgiouXJA2xTxx2ThBGThJqZQX4Z2xCznL5HMpvHGgb4tri7YyQXHzKYBwgNEDYiARAkUJvpcw9EoVJUTCcRJ7Uu",
  "key5": "dg9rW1jSySrM9WhSMwiZaWfg8awDvf8BFEQpR23UVD8wHWy3NpWxSwxbck8X6LYkeoQPL6ygatUadKAZyCX9k6s",
  "key6": "5kNFLGk4p4UokiL9FLqYdGEnv8h74J994DUaaP3r8i3H45jWKF16Sp9DBYRMDZf2g4gpkiSFW9V6VGqdzrMpq4Yw",
  "key7": "413nfrAPATwLpuoNy9MkinXupYCYVt3xzsJSa72PrAtJh2R71JjfSPnWmVZdTqTFBAksPriztUmzkv97doMJP6mJ",
  "key8": "5bKH9QqD2UgRZ1dpFkQwaPL9FTRXRtML3YrNQSjkkx37v6y7BfEz5ePJ2Fb67JUqKhu1EFonvek3deaceyvnREH7",
  "key9": "3jSaYayBYqNBbvEtGcE7bSgPNhep3AunwFPmxsPjoeoLrVSLbaKpQFZDdTDwQKq1FLM9JrMTGmddGnGMNTkW68Z",
  "key10": "2jpLUBoqFtmCVibLjphbhFgZBn3VG4AyQTpa1KPZrVjnhoNem88ubrwUWnxJS42Hx6n58ZE6NPTaQuzWNniH4LY8",
  "key11": "3inK82yw5MoVfJzHwkQQYUYfQucDq4ieHNXgjScXhWejwHUgXp3cDYW1ZS54bvheW7cvRyY2pZaJJR4AWxn6UwXf",
  "key12": "7ykPzRmLWgUCYkCfhmmgmFeuG1jfHMLheiysnARgsSAs6bCdcudBevwdkqJ1k7qeTNNMQHmzXQkdd9hVudgKk3E",
  "key13": "4pzxzdSqAju1tJpRmtAm9JJmaUFbU6zYvtMGZcZJTM586d4jmf3p2cVrhh2Q6t59krLrPLFoFwNzf2SvouJnb3cM",
  "key14": "3ShExhG6JkTKJNZLbqHsP4Efzr9Q7TBiAaTWhcirMozsgRzHkzrxH1aBsvX6ExK2nCddqsY5WbgjnS7jBAnx8nUm",
  "key15": "dHW4CDEkiMpZBY1smDq5s9URp8eR4zDGYiaCYWc3kdw8D5umhFf5SnHDtNzCxzr1MZwYNCrtoAeGrRiGWattH3X",
  "key16": "2fbP7jzBLMVG8XgEjpwkQJxn4VusLmAAaLw8ViRYerZDqbwwEn5wLnq7ABtwjguuHTrWhoMM3GHs5YPHHE1dtAwR",
  "key17": "545QuapTyq55h43AKejrFF7Xy6UZUXFwHVn4jYcxkWHyvy1m4B1vK7f5fUqZknFpwraTTF6LyfcAvgwYzQ4XvtVT",
  "key18": "5DShbugNynoGkPijEHSrA4NH4fNHPtKLU7JZgMr9UdPdkVCKCVforCCCeq2JscF2zowBxycBYVcenYaBvD7aDu9T",
  "key19": "YXFKaoZLhL6XWVDdJmyRgsYWBakgBNBtqhCrAf4HKptfq8fZr8ULKjqRzGKcPU2DJ66q7pH1VX62u6MSKc8TStT",
  "key20": "337iQLDJBPKkpUU5MTM1TNHWyontsjnr3kHptSZd1qrsi9GmJ8hcAowFdtBr7FqTEJHky3aorrosp9SgpPDEU33B",
  "key21": "4Gj2s1fkiTfRJDhxTHD6J6DmWETQFAw22r7WqmMrccN8Mi5sRkoCTM2c59CesbUmJEiwetFwJbbqpJm86AXBoGPA",
  "key22": "2KeN6rYHtMfKPTWkh3dFx1MU7SakTMbCbMpaF3q2w2bHvxws7tKTTzty5tbB1bGKNeur2Gfv4Pk1Y4nRfLf1bHYX",
  "key23": "3G9AtXZhabSh3JRffovmQtYCtgvHterwbVLTP7e3SM3Rqf7DXYMaes3f2H7QeZuuhu3SLyMHDMGBExVvz76cPxpB",
  "key24": "26k8K5BgNfXMnjFY4FobBAtHm8ooJVsftB77hb8BHoKA4g19P3TeQELaNMYDgwFHAMGDjC2o9xxhiz8S9iGCYL4Q",
  "key25": "hifF6g687DrBFv3yQJfMbZDPoh1dG7vjUtKaxUWYjC7sn59UzWvP2cBmNkGVnx69z5fmyc5fShzypNxpVEpwqUH",
  "key26": "2zV1dg5mYsR3jTtFrhhACm8n4CTs9aAXfTTcq9RA5GL9zTBVrsrJUToXs2bjzwvywENPesFuAY5BK2a1ignDRKZ3",
  "key27": "59xbfj3Dm8WiZxZ2wpAEsiwysSwt9A9Xs9Kgm3FspktGuLAEhvgAEKUN3KAv2tEByLXYPW8PEmq3EQXej8e8aVgc",
  "key28": "3iE6ds4ZyvgGmm344a9kmAye6YToqgn2cMg16NUUp7wTVJQxSxvMVtHffxWt8AuCcG3Q3Wo2WBAYKAu7PURcyMxv",
  "key29": "123nwisuFtpF6aq4VWy7VijeUezX5YhvQfJNcz9dayr1G21wHiA63NuGJYP19V5MdyhysXBJ7pESF7gtsaeFsCAU",
  "key30": "328feZJn4uaFnptyVmwhBNhvG8P7TKrD8AsFbiakf1uMpNHkUyfB7o3KDyZXLCDbTtbR9rfvguEd6zr5qQk8MgBC",
  "key31": "51u56pNBtZtAnvMHeg5CbbfeQmtxCTSHGN53UWsbuCxZ7Lw9nYYpaMceJNgn7EaJkUw9zxqpiDRxmpPbwXk6bUUJ",
  "key32": "3ZX9r4yP8KVhEUTd824JtBGdhWqUXGdzvWCouym7swm84qkpGtpiBCeLq2MPt5Ptb1a274sWx61aqbzRekezH4wx",
  "key33": "3XrjsFhj1v8cjSPGnvNP35eawk5QnhXhcKNSVdxvfr4pbJyHLPueN6wnsCqqjtEnAic7RuEJ6ddY2QZgb87xBpJ1",
  "key34": "FJ9yQfsFiqeMVZ7ZWCEePi9HZw58Wrs2qABato5psaEUmS3z3LbU7TnkwWPcK7s62S1Sd1qC6xT5KXrAWGRMgGR",
  "key35": "3h5umuBSxGEb5FcVvAync9njsFkD5Zu4otk1WmLgmTL1EuKXQkYkoyXnYN3nNKyL5SG8jMJG5T3s9egUpbX7nuCg",
  "key36": "5bCpfENggrEMiA3hdEqdvLYpgNWx8EYhXs4YLZPWL6uJ4CP7sbAdenpLMrgaji8ThuquEyKJxqHBjsR98qdEFsJS",
  "key37": "U1VTHxVaAzCXEBAwbCbkMYnQu18u4cZ2b9KmWhW24rZDfPStaWc58H9x466RqMJwqRxu8DkJT3aoXW2qtdzHmQh",
  "key38": "Pp1VozLr7GQt2NHPcG2X6PFNRndT9jLmvdJBczgBxpF1BhBaZmPG8Nj7HMTD73G9adPqP2ctS4SEPFfBKeztwDi",
  "key39": "xs6LpNyqD83BJZ2bcrio6G2mwQ31AkEQw1jK21twnRiufvqAJCPYTL7cjjiTN4GoVbsvmQC4x3zNDQNNpKL14qA",
  "key40": "vovePUEGKbLuHtSgWs7y3NX3Nvmeo171sSpWuebDHnHsteptnkH5t4mrTy72jx8FvfgMUJDXzydcFFG9ESEbQX2",
  "key41": "2zdfjTMUUULEHgAWvaZGJnv7E72PG4PwX9R8m2AYheLu1mu6Hd1XKqjE8CX8EFs9MxWZYoSJgEDfiVVz4s1Ry1nn",
  "key42": "3CQSsDZKGzdj1pJCTLsxxQTWPcf48LPSGvSZQg4dr5grBfswKS9GwbSjfBmeTPoxVuDJ1p7Nocs9U7HpZFyRaewc",
  "key43": "4ZWJiVxs36WXHWBRL5po46aU9hdodimfKrNiaujKr5hiUTcjQ7Cd2FHkASLExP3gY8i3sFpfHqRnQdaeRzBodkEW"
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
