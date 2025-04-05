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
    "rQXgkYZwrjiiLcEh5QS1BFBkAy5PjJjXiHgTzxdc2q75UHoZNEVeoMV6FoSDoNPmAutBW7psUtYTBLkMsHiAGa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xU2q1pRUHwfmtZ5K2puAoHV5Kn8m97kesqnBtfND2m9Yy1jdkRf9FwfWiCvQiwrELVhf5MMND5jsSLA5Ae6oNx",
  "key1": "3JY6BGcQVrahaNJb6WdS84MGvAushWBUu1yrsq6BCWr475aqWM2URyLK4Cg52KLdtHbvbs9m6jKNRgPn9gs4RSyh",
  "key2": "36AGadwJff6XUF9AB56Fdhh7m8TaH9r6uQnHtxA8ddVuMnHLmkKRN7XFyyT6bgEA3nU4G7F7KT33dPMYty3fw5SS",
  "key3": "21k11TkxbEaxMyctoMJCmkhWZxNefmCJKfi4FBEgDxGiYokip5yFvB7Nz2CZbrEHffj44mcCjFUUWqFZXzxvUqhV",
  "key4": "2yBTTqdB64qrBxrzhorzTRSBfn9jdkvLvCHyZQVW2focpy7re7u6qJ97RvqzJCsLEBCR5PipPYE7hXJfmiKEHN5S",
  "key5": "23cEw4RtnNYLnFcHKwN8aiFKbBV3BZFMzcsAyd25qA2qBGrbjDFiQW6cvq6ynPnvbbD4RPBpmh5ubYHq2Y3TedKj",
  "key6": "Jikt4jTQ6YoT3P67aBH8srtFysUVbyKrWBHG1duCkLQ37SUEBHb5LHuRfwzJCuFf5nH4H4jaocMbWbJTg6JnYrU",
  "key7": "674HkK8jXf9PcABBmaUnp2HgTYscpCEwbKWFqfGBSWZswdhHKRJdvXkehxJMX3Wopfdjg9hDd9GiaLcao4a2spq3",
  "key8": "2QEevWtSiYRj74MuvmJSMQtFQYrFuzAcyA4xdUVZ4VfNkKCJS8XWnS6J8sAb8VFYnGhDDgxJVZkCud4FTnLgdtCR",
  "key9": "4An5CFnhq3BetAs9GJvUZ2tj5gTMKbS2vNnto6BZYvduGvUpFUAaAdsUQjAsTaj8DaNBt5BaDqc3cCCmdHeLs5xT",
  "key10": "4rfzngejgezz6MKKqznY7dCKdRn4VegLyXArBDJZ2HkA9PBatLCRRviTLD79ATdJQzzfTbv5mxaLMCwLcPcCT3J2",
  "key11": "juvDYHJp5TmRAr5hMLUb5N5Mm5asxi9MDJqiPwZYV8kuu1woZprMidYZ1rQmwHCPr5QkhL5eGpZ8wtKYS6kxhcR",
  "key12": "4z7frWzg9pe6tvq7fC1rsqafBkxJdwdho7W673HBbSJ1ryuQpNB9Fc946BTrXKpFH3gX2PWf826eRgLFoWnhZ5zJ",
  "key13": "4NpBqHuB3k8GWpjqDPa3nZx2uuq7K9ja3kNQ5EjP7ui7zVttYGFBHRBZ9HW4KqUjqLV4BphjY8LrXDzc1YZaB6z1",
  "key14": "4obiaeo85xJVNrr1AyGTruo7shMMN9UBH4MPjRep8dRoDUYGMYoqdwcGeWjDjMZPHvtFcq8be4rcmPEHp8H6RwUR",
  "key15": "266ZmSohoMcTvhw3TWTAdoSMrC8uzUkXXj7kndLiWEFbAL8iy4AtygXAun9Sa6jwH9uzPzaP91qcr9phyR1A63Ad",
  "key16": "4dGffawezeKdRs2gz1eg4NBEsKeMbWGhHwYyP7hB9BKp9oJK1JrPSknGs7rDTRvGQ3YfgktsM7rEEcY8jPtQJqzD",
  "key17": "4reqjbsUierVwbHfSv3chRgpUZ9DzT82zhUghP2zuYkLbCKyoeeFG9qBv9ADRms1RsfYrwxRHoBrXBVUspHSn7ax",
  "key18": "4YTKCtLzvbaYHm9HQQCpYfSbT5zLGSxuAozRpsoVYURcCACTnL6TLWVRY7U6nLPNRVQUWKeXgMxK2rQ5HEkP6RYx",
  "key19": "sY9utgTysuGvuh5ExturgXUhKn3us3LqwdfETusMA4y9GAxLxnc5J62Vc8FeXoiAAvyVeEKnbKyTpsDhMHmv4wq",
  "key20": "5DHxgKc99jPkpkyeTxiyWcM383aYsyotQq9NYErgTRLUfKP2rAGUVRpkvpWh9mZgB7rCPV6fMFHxEmWkeoiAbgdB",
  "key21": "4YDdcH6RXSiuhdRGWHdbcLv669Qv812WXe8ecMB8VG6LbtUy9Y5hfVD6cNG5R55Lq9F4eVYu2U2DDB4eGWfNbMgu",
  "key22": "2cpzp2Uhg3WNKg8yhqD7SRaFmaS6kNH4TQK9SM21Pv54uK5xEYz4zQAgbe72Xpkbb12Z7JzYBRKGMrvGLPXJraxH",
  "key23": "5BMLcAtf2WcQCyTdHGojw8zNhFztWPFF199e7vgNaExpQhbgVw1aGZgTW4FpdAUvZmaSXxC5sQtcAUkdaJwL4KAA",
  "key24": "3dPdJ6V57HucC5j6jk8hwLBLokkYdhV93VxAmHNfNRzEVHPDXWUkbnjG9mPwHYhsZBvUuqUvuiHB87LqmLTmfDhk",
  "key25": "2uS49rokQufDYgrkMdMzKqcAaGTu5eEuJHCDjYyuLZjp1NnP4KhKSRN5fPuE8of4zf2izXncZ9kLxutUF6fhg9Sr",
  "key26": "CEE7nr3a71FLL5ZfttQE1GP58v91ZrxagyZm1u4Bqf7ngQYtLeUwq2rGbR6zE8p4mUFQgKMV7rPEhGiVrFmYzKE",
  "key27": "39x2KEgELRXL6n9ScCNM4PHoa1GpdBHiCfGw9SxuJw7oi7D7Umr7FxD1hUZoDSmFcMNtufJuHva6if9uBmnNaGjU",
  "key28": "4atF5NbhuLH8y8AdraZmFhrpq6VtktnwyZrvKu9cB5oRwP2BTopgtMnoLrSAnrT9HmAnw9PgtCRS7gkz3mu3Pfew",
  "key29": "n538BuTthrqM4WFQHG75BJCCC6Q8MnUMYHMDXXHTu9cTLHm2NkFMCHFW3Zpf6qSGs9fitWFwbt2czf5SehzxTGS",
  "key30": "5WGJLoT96YSKxKBv5g7GJoo7aTkQH8THfkfdYnJBs6zZyjBQQKfd1ZMdnQh7mj3Tv3s1M22PQjwf8bAVVVC8znoS",
  "key31": "5UmryavV8qZcafBQGBg6BPs2AqoaK5VTFaxC9JGV6ku62KkaYBQ1xvpLsbCEkZRDMikCrJMo8731AG84cKQ8aykD",
  "key32": "49h4yGMwK7BHiGyJnmJZBz2p2pWb5C7ztHGHurYvyC1NrZ9sevfTNNAjasLMaUksDg79wTDVWenagSfghwizeSYr",
  "key33": "2WPaLS2ewUbLpRnDbmMjfshjQXVje9TAeX65oVxSEtEferVpXD5QPsmFnsbwGnoLgQoNHvwHq46uue1SwzSS3woy",
  "key34": "3gRuiES6Pm9Ht7ahiCq4a1Bs5zEpxKP6h7XzB9xnb84qdWUAzKRu9TMdLNSk8NNEJJoXft3qPquZk993T8R8X5vG",
  "key35": "2SrekPMymhNDBt7TWy8bns6mq4rQouK8EwpaK3VCTSeC5eYWqE1kDwntkmPLrQNusa2AMHiyywYqgx5NTtt94Tev",
  "key36": "5sFSNHzFNbYYs9dLgkjtYRqcAM9QStEVRfGp2BjzbDq2BfRUAAdu2TS9GxNnfCRXugHTfRm4ECP2TpBpNgaZJEzg",
  "key37": "4qq1t9mwxVoFPiofedz77PVeFhzRnCagB7Dxy4HfPjQNhzsUxjBXsySTiksV1BSgxwSdQNV62mZDwpFpXUeo8rZH",
  "key38": "DEuGha8rPhTJKuwf3a9A5pjKWr4LoSARL4rHvjRDJs1LQCYwh2o9b8x4Jejmo2na1Q5jDgZ6A1D4WHqKxGSGmNH",
  "key39": "5fi32uW8MbrAvdcCFUiY2GGyBdAL8vvG8Hjmdj3BtpvLiu9iY7uHr8ektgtgWyrYnPt91SJL5EH4zZ8daXaHUinu"
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
