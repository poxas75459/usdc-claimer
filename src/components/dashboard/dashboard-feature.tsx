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
    "4xE1Zr57PrjPqq2kdpJsgiL4mHuviP35R72x4erg2s1Pj9sfCJRv51KssmDNGbp168E52yUcrYxBZHoWajLGpZNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WtTBHhsuwBBB12cZ88ncpJBcS4JHEKXm1ZLgvpRLhUUETaxUhbeeEHEq3ftDv2zSFDgAdsNJoBNszytdnZiANSP",
  "key1": "56ahV34GLt8w6JCXppMqVXnBBvzLbWXTVJpjFzW9H4vCuVFNK5qMnCv5nazW1MGwdSRFmjiMm57RF6UxapHiFS6",
  "key2": "2f6xZG7oS8dj29wRNruGtFArDAdPZ2mmJ7gSdUJryMABiRye1gWyEkp3WAqJxRqVpqqNmBWjqNrYsm1kfRejKpSu",
  "key3": "4BRMAbJZwoqSPFqyhjk6b73yzuauD5e2APDyqqerbBc5GpsVYWJfirj4XwsNdzZPUcA7pbyqNyDmgh8SPBMH6wQw",
  "key4": "21MpNE4p2vrEKrD4wCo5KG3VpDvfW3RFxpVS5uVc5X9bA9MZDfg88cfhuY2x4WgUtY8kt4Q3LxeesVPUZoYdHtFV",
  "key5": "5T83Aw17EHwTUCZUoM44EWu4XiA4HrUcjSR4zr4AHDgqCcBSSUFL863sBeBbyk13vamSFNH6V3CtFMEpgMzbix6H",
  "key6": "4hnuewuYtonhcgtBzB4c76AShW2rum336UC3L2hLFcQUew8tLbMYJ9kzU6GDqpdcsbwY7LrWBXYc2NaJ8QcL3gBj",
  "key7": "2TS3QLsG5xusvjn9viTgwi3cm4GsCAhd1Pq2i1JnaePycAMSkS45oMT83h5D9dZ5SoWbUP1tzgUFQtLZB9HKC8qf",
  "key8": "49zARLKjX1XccNagYiVY7bP345djbrF4bnEUUtMhotuNoCNQwQCG1yJbKvF2gmCcvNDSY3sJKKqyfSAu9zCY2BbP",
  "key9": "4uy4E7CqkrWi4PYzLFS1hBesjJpBaVhpkaf5zDsTzBTBzu2cP7svyrcCv6g229sk5QmRT7NktbXxR3tyazFdCHP9",
  "key10": "PQa6iSF1i1VDsyBAy9Fx5EW7QuGF9HnGddpwqpCSAEDuBPZqsQJnauqV2ZJ9tU7LXXSAZbZfxAzquYq7L8fSUCF",
  "key11": "3fr9Hw3ovMxegMGmnYHzEYKfFxamNRYqg4P1KX3bi3NZyWwvhp3bLwm1XinuP8wv38QcqEsmT9jrE1jaMdymTkn9",
  "key12": "4x6HH3yLo8eWEWozoZEJ3oJn7DE8ZccmWmJzi2qw8sNFfgpyvvJhAaoGJxZqiSB8wLRFCm2ZefEawXR7oLeaPoiS",
  "key13": "4SAWVDPUKvjx8hA2VTSWuuqHwfncCQWWo9vbTwv7AHwexwCB6stiajvQqyvQ5HwZJc3764jh7zTWjH2K1d8ACsNz",
  "key14": "38sSrhFeDDreDrE21ht6TNEo1gdpXS19brKSVtPcUCCcEu8UqdBkGETs24xniubSe7W5TD7qJ8B7qAJYJkZFXpZk",
  "key15": "4XENdLwHWx3bERoBRSQMwxquCvTutN1BC9e2tKPtKjB9VLnzM2DGbwFKD3impvhQbinrFmYD3pdRKGN3DnESPnrV",
  "key16": "2w9hKwSHJmLhZTTjygk9zy2pEUkSBZ56tai1mohX93DLBbBhfv2GJSbLXE34QnUVrpfN2zUtoSpkii1jxQ7Ba89T",
  "key17": "uKbr12WxK29as7Krb7MAnnxoCo5zu6aw7Y4WMp7Ky7chqdmc6Pr5Ggjn73tfvnw3L4mcG8e6JV2kDFazRkZAgHN",
  "key18": "2jaLDNrsycVqrkAJPxz2gzUgXjG2sFQZZkF3KudNYab6SbxtJoh8vxtwrbyBZiyNCwHuwUAAKALagjzTUEFLtWqP",
  "key19": "4WBbL6LAwcXyVGoyTn8Ljk6Nv61a7JWfFeiX1JDe1NmBDqiEm5E14pjuPmSfynHiJrDgKpNdJyKZWuhi88ZS3vwh",
  "key20": "2MimdrsENfBHdZsHu5h5s1phAHsumwWrvZ68cajWc69MnRRRrQ1kPSXJjXpjjdnohsHNo8jqNCNc8NzypZs2YsAC",
  "key21": "2B2paZ1k8K9EWqenji64bCfwxvhhxF5cJ2h7ux39hhTVaauJGmYcEtQnUe1HYeXWfC5mxRYEJTX9hwENZUXbKvcA",
  "key22": "5tyojTWRH2oKfcwhfhpKE5aiBHAT29MoRUzycPcSnPrwTg9g4y6gJSAXrxLjHwvF1hQ4ZWQ8xxLoFe8n5QvQ8Ju8",
  "key23": "4d1GJnTqBLZUwP1VTSnTHC7Hvbhjuuu9xEEBVWmnYDvJZvPLTyEj9gsNqUKPbZtByLSB1ADeJWpbQLnC9TkdFd9f",
  "key24": "5w4MhmdTMGXwqxkUUWAQ5SUz9ykSHqCXv3ooqBS2VAMjxhnrV7hf2eMXejw3gv1An6ogkeES4p11xopmxCvVcChp",
  "key25": "2Wuo8TuP1sZVTdJa239ytnUgrT4DnaAndC1NBVeMYuQ3tcZFP5Utpn3Xo6Czup9ZzFoAXdwCvcEydoafN2UHJb2c",
  "key26": "Dgi3B357YmQ162LQeLDKXDNjCXkcDhBqPexVySHunpgSoFfAVbJhf2kgRPC64TR5LRFhKkq223HSQ6fLMKijHGN",
  "key27": "5CNYZfscLLUs53qksF9iW4WXK2LSeJmLxwW1R9kEkWcoBCb6mgNdDWwvRD3aZ2YbGTJiuBdoELhi6vC2jREWTAVd",
  "key28": "36fNWZnYVz3xjbZzGzcXpogtr9GbSbYjyP2eTsBREK24YTqGqpjADDkxt66XZo5Hri8pRndTcRARZ62mGk69PS1",
  "key29": "5x2sDrvgEjXH2mGf5xBcZT5jcDpwuXe4SJbtKTp1W2fUQkRMKDYgNTyTy9jT3xg2TjWioWXd95R9oRVosSpeCzUS",
  "key30": "2gxg3X8np9w7C6Y8rwtjg81v9FfT2emh1Q7Q8HqE557BAcHXW5wJr5ed8mLhUbYexGJK32TKSW7FL2yyPXWtkpvN",
  "key31": "3duadwM7TSFu8xmNn5yfsHcMYdLtZmvf5ySkN7RniD9DD7M1HbtMutZpoquCRyrsDP6Cd3YbgYiizAmY4gJeb54i",
  "key32": "3j255Xshu9WbqkqPizEsX7wDCiHzMCAkXnMgofM2ikkbxwpm7Uf4CdwosHvXqtW7Mkupwk1zxY2Jdccs2YwzFQoc",
  "key33": "4wTp85ciWKUuX4vAtLmQSN5m2v6CGXW8pK5kvpHozCX4AW8ZMAwQ2uYYtzMY845WWoEHpkn9T5BC58NK76mVP2xK",
  "key34": "4sHPH5aWhgQ3V9GSvxKpLJkXwszzCrc1tGfUQmH2PuBfzg4jX1hJjiPGXk619RCPe54nGkJDokSKTYckMSp1cs3n",
  "key35": "43qz7usL2hjwXizTqhBCH3c4MC1283TgEFW4kWBBq7LknMeHteqr69nFCSpeAcwckkCf2sMyjM8h9tDbRWrN8KW7",
  "key36": "23AUhsuzE2ymVfzAKdkbM6CbTJ5JjW7PLyCzXWWGutyCvVqU835ayFHsWBWKKoLVCLDytziLWXov98bqdPFifgwX",
  "key37": "54Bye4fLs5iaYyDXN441bv6F1hfSLVHhF9nyRiU3aMR2DHMyQieFecbDU2FeqafDLQdCUiJR4jtqobn8G9NB1sNT",
  "key38": "uKwnvad3PeC53A6i2KHbfzuBqjWw55yovB2VcDkEE8jUDF59BPjBU3Ma51i5nX4Ln8v4b8Gq8uZ2UCfrxi51tQi",
  "key39": "YKqosiNtERanyaJGdcQZ2Aw36RAvQwQSePqDkMqq8Mct8stEA1RLu3ACmx6jwbdDcMB1GtrzXew8Yau73j4Mtui",
  "key40": "5PFtiD72gJemnDvcQVsVeQXPK7pdBVb7i5Xr8dwoDCMzLB82KkUUDUgdD6x97xBXPzzcAdiAptkUQ8fwM5jrvyTh",
  "key41": "2WSEgBchZSdUhnggjnuXQAjsyi5F2B8g6qzTDxtZRxfxkXkBHMGxjrWDcsafoZkxkfw3EbE8CDeJyH16c5W9R6aY",
  "key42": "2WPMsBAJHxSNU6569MsyaUvCLvzkfmrxZxvkBXysCPANqKPZmyfNR9NsMCaazDEj7XHSn4x8X4S1bHxwn11V18s7",
  "key43": "62UZwukTx2hRw1Q7iZHiWhALBY4VsDJ4guRp8UMveo1ZFU5WcpGHTf2nfJbyUkwGdiC3cdJx7RrKwM7c1qeDXSie",
  "key44": "2ThCwGkAZhQhz7RdP5WMyBpx5FEtj168iFn9GyveeWV6GaHDBpySXCu7YJq8EHiw3k9j5ujFYafgQNXYAcaSZxnK"
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
