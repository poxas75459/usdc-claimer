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
    "3XeTtjY54Xz7c9TH5BscCayAbEya2rRseTgRapJYwkZRt5Z5sTmbSJycGMw588wx1MaP7iwD2Zeky9rcpx5c4a9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JHfFLetdpMiBR51yoQhiFTUHypZuYjLchGVhF39SThRPjgZW4VjaMQKkNvxumoc2uLCr7Zy1dvNkTuunX1p25Pg",
  "key1": "3zu7b2zP68C7XxwWd22B7gUn4RWuoFFHM75xZhb2m4LL15GTZM5Ero9TaL2sBrT64uES3iUKbZGNH5242fJ5eiWj",
  "key2": "5ecQSJ3uke3FP22BS1jQRTpUjT3xVfbqoS1gYUdZ1xrD9kSpkzoRfEGt8HhfX6rJg39BLSVivUsZCashqinPZPK3",
  "key3": "2ehSze7z9yGvT9Ts9g8mqpzuQepmrqcSTkpDGTyJmmJXtcwCC1L9Ze5QRp9UPkHBrjNrFS7Lm26oq2KgPLV5aBgB",
  "key4": "2kgz7FqNNGUkCBV4gJoBj9FfjQSq44vvTRP2TybTtTeeUFLNp8XzdXZtb6xMbYaEeoazcwWjAHQVEchPSRn6rVaw",
  "key5": "3U3cNwojQ2jzjCQsoZ3swYWcNgPKbLVaiCTCsRJpGqJcs1ogdRu8GfaroUPJ1zyaodbxg7K58WW4xKqpExRuYunD",
  "key6": "4n3wtcwk76UHXgjKw8uV591zk25TqH2CLg3oXsxd3pfHNrerp4SrYjYLKCwHqiRdjvw74FS4ajBCp1SzU4AmvjiF",
  "key7": "58QfAkEvSHA5WdA2PtXmXifJ37J3Dedfud5h7FCh1iWyeeaerDPecxyDiqe7V9Nb92msZYA3mMqfqDw3sd9W2iQK",
  "key8": "5pFftigGq9dntm3MYRFPn933eejWcz7iuF7JqQ3ABS7F8eKeLMw8j1kD4URhUNw2V8umkTfxRv843WKynPKMvSUL",
  "key9": "4exm3T4v2567t3vX8w6dUrigeBcTMvG64NAdPRhYUyrz5eFCXhXPSFAQRcYG8VbMMZgBLA5vhKTM1bewTu9EfqVj",
  "key10": "4QBfsk3tJkEJVyM8XJdsLY4SeqwF83N6xFezPZHMZLskZirymsxeKD9GjVaQuRi6iUW6TH1ykEoQm8s18tBgkZFA",
  "key11": "4QQcoDbeN5ntXie7rGEzAGRDCJ1zhKwrThCPYxsXoB84kU1RXrWSP4sYM3h6bTHuV8xVQqjZav7BBBZMmihzRDNj",
  "key12": "YH1ATniusyyyi5qkDbBqJV6KGpJx4NisKHtWZ7YMcn7mKDcYp4mn85uXL11JsoMuMREY76bd2QoWmTNn3x99Vyc",
  "key13": "2VAh5G2z64FFFhHw3Ua8WZcJ7D69d7QvcmKnbf93erVARPTHn8mwdBxppcdXGt81iB7vMu7hw8VabQ1JsGaDKT2d",
  "key14": "4xRei7ES9g6gPqNL8k9xGD8qPZ95ToLDXomD5gNBiUyWLbaXVw2WgqRSmMJzuxB9tjnMmfLpqbvTSJusBdJLvXkT",
  "key15": "3S8WLZNCwsNN7rifGCftYLrbGtdVH1mrubEQ93M9huivTU1TctKEecmNZt2mLTyCV7B9JMQ7dNZqHFCwnxmeiqGR",
  "key16": "5nXJTk1cpyUAt6z9tEiqjEfbSNva53yxs69mDWy2NCtF4JtpiKg9rcwn2ovAnjzKPmCn8S5qdFGfDp1rTsw3RWrr",
  "key17": "2jQNgsKaA5rbQCnQv2rbZunu7wWzjsc7aqsLHQ1Yp7LP8rSemJ8hiivF1UCiu9wwujZdCLaLTsi9SRVtp81qDLvH",
  "key18": "2Uw72vN8xGqU95rvqwoaAaTanhsJMrKRSnemqxabpMYT7qtdfNnjeb4SHHCWgdVUMUiz4fTBcVCFGiJJBRHWK4nv",
  "key19": "4r8sih5q5wLeo1SmMTWCtDwkZL9T1pPuvmD6XHspXSJ6upJb7dq4gD9g4CDwUGUZCRxSVhSdfZB5PqTvuYXDD2ro",
  "key20": "2nX2zrviJ1wpC9X3jYLu114w4rfdXBVAX5iESibjf9Ay2ATokyFBt2Kd4EqbWuMPCCEdCNioht2XWGTQGGHk6iEV",
  "key21": "4QSZakY9wymSdPjxcvNFYZDCrq9JbtXUArsvc5kEsF7hmcfWfs9BjD1FtQdBGTrfgERqTt5bWTZYTeoKuPbC3dgw",
  "key22": "3c561yJzw2CUBpq5PueyuUUP74rxMfcYKTkSXfojNSen6LodGz8wz3rL8F287ikNJD2CZVJgGjG2Yxs8159rTJMU",
  "key23": "5pZQciuc5BS6S1vVBAe9GC8QJtp1oXjfTF17rmei8bZZ9cgEk89vEw1exsfuo1TCmrYBRqyeewJUKTSTRWGGeKxa",
  "key24": "7K2fANHL1yq6TjXcKnYstcS76fckZ8yT6dcRUSdaZcMYK3585ifTNyv7ttQGc8Z8GBTgUpB7H7229G2rGFkm2Y5",
  "key25": "61Z2HRKzdaD87RgnEPSRvkqpB66NyxC8X7c6UfBx6BfBbmnn6CMYboLcKwozwNa16qa6TFFWyPiASLpRwo4usNUn",
  "key26": "WC9GcAUnE49St6ProFpu8Gm27AnyRkcpzAmqjQPH8B7KKrK5m3nyd67GPdmHjy9xdPGFUAj5DF76G4NgjMyuFnF",
  "key27": "2xnbNzbQxg8p6kKBKBHM3KUBXpyZWgWBdeVhGRxzeMkNi9BZpwGmNAQW41VNi5nWgTpTeSCPpQn7QRsqN6DBVdhW",
  "key28": "5arXaJGqzHthQPaRLVgVVk1t4FEvp4edG9oUyCvAzbmBUL6HeeMkhU56U5869977NHULz2oxsExXmdv7LAbCP2de",
  "key29": "5WGRCHRuCADyqjWUs4FbiWQJEDJwykk5PorLbLn9vA3vAk3eZNMsuPPcy6BZgfSq9iGi1xWcC8DEJraoJpih3XRF",
  "key30": "5wyPTbaBkqEdpGBin1R3suWKQ3vFHEdVyiNxJPtBNFics9Qa4GbPuPgU4vAM46aDWk2A6qBwGwaRT2Kf8iaCi4hH",
  "key31": "347bq4i6gP4oaoVx2XNntL46VbU25QuYhaL72NGpM6jMZpQTBkt8CEjodRQhY2XdZAtcNYNCtA6hhbGAxiSMohyK",
  "key32": "3XF9GbCphERHNqWVenMvfH4YekWPLHcZxZp8Db6CaM8GaYW4urdzK95kFFY7jdqXWWzB7jQnnaMiKDaRkWACtbPB",
  "key33": "wYG6ULJvjbGGGHy1TNoj9K6rUG63SUnssqk48hPfnT7YcA6gUBt3YALx9UA2Sdun4NWG8AAPbfqUmxoMeMbCiaU",
  "key34": "gX7sAEcV2fVatYG79N2gi9EYANzSg4eBc19vs7ck6ZcB56RnHMLZA1Lrk5bvqd6ktWRHtnrd1FfYP9XrgJ1UCBg",
  "key35": "2rpo8px7PSXydBQWiYCB7X3GNsEMXv2qQeHYq3o1mSTiGFuciedDv4u17gEHDZmtSpMZTHNVMxcXBJkxeZ38mhZ",
  "key36": "4R1pygNC8SBWh6V8ndr3Eys8b6sJcvwRwgMuwTxtmnS3JBDq2R7oVw7NwhwyZ5WFDYnk98kxpWsEhin8UXnD2cYB"
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
