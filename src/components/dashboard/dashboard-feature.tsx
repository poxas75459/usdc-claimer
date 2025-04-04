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
    "PPf8WAvSNN9ymuUQV6yPPZHKFc81SsmYZCN6AzUSkPPLcexS2c9F3RMBa1gfxPZhfUcUjb8avqRXuYQX2DCqUgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gve5FXKKrRMsD8uzstn6AXSeZALpjgvDZWumJr6r5xvNDNPUg14Rhe1qhLrx8tXugM9Lce3JQoJNLRW3Ai42svY",
  "key1": "WUpMBPfrba523iGx7Th2AZALuRjNtnYFCSzRipq2a8JCTKfzjqBPvYfUZjwWiwyc6DayGPFKPruMnCL1jbHn44H",
  "key2": "4f8zjEvuhYacExFK1onev5rUKsdFHfi6nPwa6pg7T8ATrEbX2qTKUQw9moDWxP1Nubk6yKgVaw7vA8HQD5F7YDUu",
  "key3": "5MB8w4ttMFTYCTUDFRSUNJhNF3WeymDusc7Jik7qwezWK85obuJoNV1RFjj8eSrjW4TE6o1dDxNvkVLA3mjVdqz1",
  "key4": "61rMW848jHg9Vm5wYkvNCDfbkDqD44xv6Fwki9nEZmKH24WzRWZfpXajaVGd8mEm6t2q5mZ5MjpKmAWmukyc8tv4",
  "key5": "3Z7r8eKEkt4djn8nb9CrSXa9Wkp1GbPqhZRy9SNWBFrsLJ2rvWPpufRgcVv1BMDjXeg617QXpyDaukNwxbikUN8q",
  "key6": "2JDbwXgbT7EHwkmDvSS1VZFiMZGHoSGpKKJ5rSmouQHWbp7azRBjTSvw6bwaj3B8xaYzm7pyA3yo68pbzDbs69ea",
  "key7": "4kcrCMYoiJe5tnqWWTG7wW3bYD6XzJEYQ4eAYGCCp5aXVbSjqMTpMhsLDryvZxMUPimJvV574mzcLBFsquWZLDBK",
  "key8": "5j3Bpv7Vt1MksJbpY5SQfmmHePivCeB9cgXyUcYkZ1pMf3fJwZgbX3TtU26vzYMkkSz24ufPV5Nrw4cJccGw1dfc",
  "key9": "3mn9Ev1gvBwsMNfmceL7CNAVvuBXspN8qTKYSo7GdqWb8WCv79XezQ2CUZu7NqXZ1hiDFSjwC5a1hHQCZqx8KvRM",
  "key10": "c5B2JddshwGC8MwZNHDqioe1yCPHMMLUVVvr7gXCnp6L5fEPaZNWBCjCLMhr1wqzLgmx1ZqWUdnAj2gHLicmca9",
  "key11": "2HoNfQrTcL9d9LBZekdrw4LakwC55vucYhdrB4qfN3eUU5MhhwTUEtFqx8HRFzzY2A6DARkDtwnqW77spwhunbfp",
  "key12": "2veEvxte67HnKbf9Q9xtY5TTWy8AQACLYwgkamF24deDF26B4o2yH8xb2VHJFFyRab42kHkrPoaFhFL7WyiR1ggx",
  "key13": "5S1cd3M7NdMMadCDnfRHmZc35DZ1G89q3WfzYwYMXrAEtk34ovEXQh9q7EryQCjpsG8rRJ2yJAWwSwA32GEkqsrv",
  "key14": "4fj6HypL6He4MF7DwZgGRRaAcs9v3fc96DaYNA5DVm3pG62yfmcbBwzFy6FcjofQvFH52JLiiqCAcQzCAQYU1UAm",
  "key15": "62NWy5zr7ANjRzSnKxUZYfUJJBgA2XQe217sHcpHHuUEN9A9gHMqArdXBoWS2XvNobrBc6jMc3iUby2z3324REE7",
  "key16": "CHSqZtwJxbWFeTcHGWmxi4T7a7DqSkF599TxqZjXWW3UVMyDEegApWEiHnFCvzHQGmkzm8tuJaRdwiGu6ofK599",
  "key17": "3jyYXQd42WDYTtZ5pGjnH2aLQugmgg9K2Wdkza56PJSS5ioQbUkKwWy5Kdg5ZpKTnJmYutCHMLdndfQB1o4kkVX6",
  "key18": "4HoUBWSBY1brXYPMhBFjPEYhj4eAEsNXKMVwAwboRJ4HxbaBJLJVUJC3GFuzYuTuK9NAkioRJozu328Qx34ptmaF",
  "key19": "K6vyr7Jt7AYbGoNqkffqhqJdbpB19W4K9DLQbcsk4cKCXbhTeBv6F5ejdAbzWuT5QxDxKCDHtmgdSETppUJgrx4",
  "key20": "5hThtm1kPwxHf4JCQUpNtb3psPoP3pecfuaJvYwWMHS4Ez86cGuQX2b23MauMu4pPRkAnkdWtQTv5RFpruknTn2V",
  "key21": "22FNxGGiAbF4u3eMxD62pvoqXh43gmhrmdtmaaBDaXu8V8A7NE771bXLQkzMD1eteRvxPPpL4Mn5iCtoCD1HJ6pi",
  "key22": "kXqusSsDwm9vKS8zpx2VTTd21ikjGzcP6dbUQL7PR2DG8zQVniCcWWJXtVJPA7asz6Rm7z4awdKWTXd3D9rpNg7",
  "key23": "Z1kLkN5RhqM8g3ZZUn3G21THQS6U8H4RjAMgdXougMGjB3CiSZi8wz9mwMVFK5yGdMxfr1PqCZvhnbcHGFQTstq",
  "key24": "4cGiCwBC39zUhHWXfv312NwCc23RMasa1gzai1F5koU7mir4KQ1LTdUVjLtMPePVnGnoVmwVSeoNLyvKj1DJp3mP",
  "key25": "5z7MZhAQZ4JR7P8KBM1zuaLdGbFxzbePa1fEH9rKdjXH4tHhnbNhkuorBb9FYtLkd4vcwNcaiDU3rii78BedRNK1",
  "key26": "668jyMKDoUCEUbhTD55YZ54TG7b3oxEm6CjutSb79RuHdRQkrVdqBAGeYZucxrbqut35vXN48vFgWDuceoqRfh7X",
  "key27": "53BSya8mZiSZfL6ED5Z4PYVdzRq31oknDJvvNqBr5FDQBTmnAGoxvtUQU4RZRZ8MVrFHqXk6ByC7L2YDdkg9Lb83",
  "key28": "5h1R8FDT7KjrQNQHMLtU8DatXVpajpyu1cZVkcdFASPun5rCRZf5yWEpejov9TWrJMaRub8HppgKHoJCkmYB98r3",
  "key29": "49L1DPepNcDp21JaiX2g7KJ1bMxBoiCb2Mbs1SD592agkUL1yY7hrmHXn1oAwYeFwNmwihHRhw6Ecu4BckYvzaaW",
  "key30": "2Vcjf26DgBL9i1yAK6sPHaQPzNR9G6t8x2wVC5VB9ivCkJdWTnig3Zc4QbFCmpgeomstvedwqz1cvLDsMPPyCatC",
  "key31": "5opLPpjjafwf9zDB458sX4RMRPT5fm1VvckyxRQiziMziGTdVSuqA1Tv3T2cvRVYJ5Su1VBxBCg9LcrYaNvS2Mqd",
  "key32": "Ub8Eogk2Ur1RU1yqGP6rkq5haLiascps47jSFx4vUcG4HxFVSribT74K1VRT7WRKsuvf8tv4tuamdaHJ1739g3n",
  "key33": "3bnkK8z1A997QSyRtUhWWTcgEJ6RStHubfroki6roCqb7r531BLqxXLNhcQPqN6itPTX9u4c4wBgSma1Ldbk121R",
  "key34": "4iqE5NqQRk9zVMA6tmZC4zoKLE3N4Gi31ugwmZvQuMVcWwzQDadfJ9TGTTeUUrWJ4t5XuahHo9Ch8JzzTQnnQbN8",
  "key35": "3KxT2RtwaxJSJL7TCHGCAbkETt5rtw3xfHmSQVm23hbEu68PaQhDXKJpmjkZYvKHSAHEZZNp7XLoT7RXBtHSjyGc",
  "key36": "3rThmVA1Ze91GrVMbhYyEffRzgrVXK8erf8zho8DmBmqqRb9ihRdVDeq1zHbsLYFNuY8mKRcG1jeq3ccFCKaVPC6",
  "key37": "3ntxy5a8APBPTF8DSiw6jEUrmX6XsaRyBREFiV9vQxdCfhNgEd8btXUoJS2My1WmfsaSZ6i1bk7jMX1dKZb3sX6i",
  "key38": "2BNbKWV6AjJmkSars9DpuUuTujuydm988AacFAKCFKwhx1iV1fcF1EcqBvcNJPThcrM8NrpCru6D6GDykZjJ2BhH",
  "key39": "yTf49gmfzaN96GmE2H8KiTCg1tBXqQ3yq2udhrY42LWwtA7bATKoabevdnPbinK4W4QqT97YnNfRFnHcMTSD1Pk",
  "key40": "hKyGP4pnMrmZJuCTpASA7h4AKAtyiivNcbRqQC4AMFoPBiqX3ciSrjS8TNzn3TnEX52nbFtrhYmbRGg5YxMZokE",
  "key41": "4cjt6JXCRtuJvgWC6oGaVHHdCn1rhCEC4kPCiSmhDqjoAPL4H4mUZGy4Ek1XsT6pViaKCMhQaaDH6VifKWv9xJFV",
  "key42": "3v8dAs5vvzLE6vBEU3j8J2AJjPMygTtjpT2P31jzLbXCZrxwiKagwqjBAoHXHbmRbG64aEKpHF9J8dPeW5gCczTv",
  "key43": "Z1d6TArPNk6mcSPrkr7nFTsZnLRWJMXRJdFSzYKJEqJjyMWbTVKji5zhompjrGxaQPB38kZHeuHzAVx6rqqn1x4"
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
