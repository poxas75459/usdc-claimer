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
    "fmq6nksbM2uEDpNHibuogCiTESarY7jADRoA8htpZenZevJKB5x1zKe1iQbY5vSyx9U6noKmxMbPjGwWvr7eqb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QjLUDAut5rqy4q2A3Csjbn5KgkF5KahWDwF8DYWPNJsNA9dajN9Xg24W9MHeHZ5bKn9BpkeBAjkQ3FHkGfLU979",
  "key1": "3XSp9BVLbBmiw638LXz4cMK4MxYGfGp9VxisVKBAAjvFz37Quy1iiLfHRdXDkyj1rqTDWHP97CWUi4oMsFpxQthn",
  "key2": "2KF27X9AMrKQbERwMkbd1njdoeBgPqo92ZjCq5ApiLhJrkYdoN8KMBjzoEPYTt8EZ7nZdz3mct84ttvxb1xNEVj5",
  "key3": "aqPVUmRe5txg7ktWKQRCZmBqGz5BW4dMKZ1YJuv3siMqSsAv65spGEyfS8t17WQJwvEgfHDYAc2ZwwCpMvdpRT4",
  "key4": "2D71h7of2MLwhj4zARkPeC2W7ETmSRWd3YFKCgDLY1vXQ2Ma4TCP1niQP8VGCWpUSH3KRUPx8ZxSG5j3QxFjGPxy",
  "key5": "5Y8a1mid5ZYunaoCG19ZRpPMRzgFYoHXF9NEEbuTQBmzuFshXVXbkC7dZewgsxcRns9yKg96q6nBwuu1tbSn8GpS",
  "key6": "53xMT9Fg4oZ4cgdmEfQbnbgv41t7FJuyWU4gcCpwbF4mJgik6Q2ecMMM7FzztWirJZttMwFrkzfaia7wMDkTXTY4",
  "key7": "4w3dd9TJ2RGb5ydM6EBAypjZvP74wMi87KzfeRu6hydJxVRXtmkTBcwdpifMvMA8V2UqTZPunQsmVeRoR8Frjokm",
  "key8": "34xZhUGpKWhVhkKV42jYzZFCvAF2959VEvpota99cJWuaxgoGxyhLsNHvapfDiya2SSsf2mf7mJpiXpSvY4LxxF5",
  "key9": "4Qciwrb4EQzSPkYGMF6PtbepetXYr7g1J74jRT6m93w37C1qF8vpH8ZXxb6uSo4BsDbrR7VqQMfXFn8WXymVyrfS",
  "key10": "dwgJ2NMHwZUWr3hcSNb26BmG19LbdvQjabRG3Zwr16ZD3LmFyzwcjSnxNgvLDgys2ufuYg5hpwXWiP1nUJWsg6t",
  "key11": "3WRDggK6HkQ6qhVLcDsHHJJE4ySXVBn1CnztSXrKAcw42uyTAARbPFW3GZ2wBvVQY2LPhqcA8FwaKzu2axasdLeN",
  "key12": "d8WhdHBjPk9Kp37fSVp9VdhK15E3emWetbbmUdWFtuiEwEZASevHRwWQfhu4Yg9uv3rJRyqx8kCU8xKyFZotMfe",
  "key13": "4swZnTMd3gehm5xiCBckH9y3rnh3KeUwZ75MqurafGtf3nLL6QrdUjum2SKed4HvRTPiZqzLgqYxxTHHcZSHLfPt",
  "key14": "67Nh4dPMu2S1VzBixJdZcuwQU4HqU15HBnTyx6PMcMaTqMKSw75cEryoFavvPCfw17XhC61og9ZeSNTEQP9nmsqC",
  "key15": "5NZx4iB3XEYEARe2QLk7XdNZbQVQZ2UwpWKGvLoQ4dbDmG6qAXVwLgGcTFUrUqjEtchHdXxSmHaxGRSUaeUxjGAi",
  "key16": "XNuf9iJMSstpwYEgrTRBrETnrQjoFS8qmpV79GAcx1oEbQcjBiyofmriE5Tpfh2Bb5LSwxR9jKeS9LDFfb827NS",
  "key17": "rrVsga1SEgjFwzFqsLxt1McyuTwDCQG8BLDMPigDVgfQtH2qbzGPz2ajNSH1AyQiKDmEXWj9XCnFTNLTNAyp2JZ",
  "key18": "FHSENHUcwxXENP4Px697xeydYxwsGh2Y9MDwbXmMUm1c1Y4LFArK7pzCLeiwnS81a4hU36Ey26vEDHPcnT8UxK9",
  "key19": "xZv6Bef2w9jNAhdHfr1Q6266vbYaakRihxVgfD5JATUxAm7PMtjzMXdbk4unBa2ih4dLHVzZfRvFGrFUDW6v8DW",
  "key20": "3iNrpocyFCcjXHEVoG81WCWjw3Cw3xsGUiwoREywKtp2eiTMBcxgCFj5M9Bd5T5fn4YFZBKwGW9oQqjNtm2xGMj1",
  "key21": "xALBMJpzMifwz4sjhVkLi7DACFJ27T9vjn13NHnGQTuWnR3R91dUV6hVZiKDJVvFhHj23MSjBMDdFYQfN1AHjkY",
  "key22": "2LDpsakJqhJ1F55YuSmMHAB2h1iS4Bh7st3g9C3zbyydmMbPZUKADqmXzuAx7H93daFmxGJXoy9cDiwuV59QckDt",
  "key23": "4Csk7XTHNWcRKLpVEvPajF4bfUrZHhwWMLgWaGydVvXmUwW4BQFbcWTMkuEMKHLLRPDn4PsvRAnmf3HNkv6TWoEw",
  "key24": "bauEmrqFKaSbBDks98YiBmsD2q9QPB9zKow5J8WsyLiovekQPXwJ7fkiHuWtrqTnQP6e6KsSYNfDVeX49ptqyxT",
  "key25": "5s8CwAG9mwbHYswDS95XeMj8qQ4ysSmFG7FbizHxaobTg5bYc7gipmZYcmPXVAkqo3FJbKHcQYTH2m2wLpmmrjTD",
  "key26": "52cK8atwTRRw2QcqFHQkZMdU4DiXco1NVX9iGZUudv7nS4d4tUyMfwdfdYLvUQGXHfDxuTmSpNRpN91s4b6X3jqU",
  "key27": "4KR6k4T5LEasrnghba2ay1TnkifXsb64dQJC7CW2L5jJTyj4pMTptopkzwc17K9h1bTZEbRTjXiwoUshceNCw1fV",
  "key28": "fbrYNWFZGdN9RYF1DreVuKNZMY64BKyQPjNgir5ETRq56mGFv6k3BxAPuAjPnSV2rMLJfYbcBNJMoU3qfuemKWh"
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
