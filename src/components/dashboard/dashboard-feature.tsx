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
    "jQArM3HGaxku4apDHLsqFdN4EX6VYniGVt8AXVafhRuLxWYnUMDsSjsrN41cBSMSEZZ4ZVQRTm9QwkHaHAiYymU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fEi6sMijYSP2x1BKYHywrLjkmTqxst3dJ5JpcKZa9puYkg46u3MzgQ6Pj5ZDbB22CWn3tE91PtS3eXrT4iM7RDq",
  "key1": "2Ezwk8y4SP71etw9AizE6q4tW4qZmxqhqKbQcTdiJKG3jfbj2b5CXvdoNJDQ2jS8EsxixwxaUSGWnYe9umYU6TBX",
  "key2": "47Qd6Y2H3vWLQeEm7fViDBFcstNzAouJhLo8FSb96eS4Q4d4GFPrZ7rhFTvdnB9Xc1fVrbHJdsaCvhwBWBa1xP7C",
  "key3": "5VN8EgAa8tfeuR1Wcfn7H1eEzB7cfWQr7iCrxauzwaRAKKKt8WWFwPaVWWZJv59HLsLpRzjTURFThbxA996RV6Kn",
  "key4": "C7ndAaAY7qudEuXEpbS6Nedfou1PkZbkZ1wDNQYZnoDVem7L28waiykWwaYXcVnigZ2qguavr3EaGLkUufkJ8pb",
  "key5": "2EftaZxvVJZ3pqj4wVg7fi6a2kwawha9e16KmPoXHoKddWyRuUbZJWX4KvTgpuX2NJFmt5pFfojTnfoeTKUKNrix",
  "key6": "3hLEYmxYhAnWKy3yKc9SCJCL5SR8ShyHL48Nxye2mpwAQBYHv3hvww865Nzy1wUBJJYvrm3fhYADDS9tG8j5osGF",
  "key7": "3hFACN5eDdKSAWtQ3A2MjVNjUtm8qMWSWByWzFTCL2bgUJRiGeFpy5v69MN7qrqqFdi9GVkDLEP96B5UD7PK1du5",
  "key8": "67Ax956rJrkRA2oYw2HTxRhYzJjztWzXrXF65ZTc8BCQ5VzVqGCCdZXcy6En5myREt2fw2Mqxj7kAdTKWfcbvjuy",
  "key9": "4x3sU72TNSfHV2ZiUcwUXW1KDpAfHnN2oV4KBc6WUSsx9Za3TkesFwU4pHc2F59KPR6KQfuAhbw5bLBeqBb7v3F4",
  "key10": "2aMwFpYmRRBG88A6jBq9NmaseFrh6QBpJ4azK3PGopKR2Lbuc2nae2uATvGXhDiJLqSgvBjZEP1CDsnNUiCpUm3p",
  "key11": "6gH2BCJafyxx9KBAKffmpBMpEVWg1F7Zjs1SJXQ7XKZodXtRTnF4rjG2va114dMJJJa4uJX14anWBYwCFBYFfuU",
  "key12": "4a8gtgUoX5j2Pyvmo7FiefnjHUhwzYyeofoKeTFLifVLwaja5qd38Qk1hYZkK4TZFWy2jSmrdWvLJSKP865tKXjN",
  "key13": "5jT9bUSQsxg5RR6Ag9F3227ejX2Tf7rSw2xqZ4J5b6xpMbbu5wFDKpngZwNvQSfmK6KR6gmkYpvqtnPohKiSPNhc",
  "key14": "5s1CfGbgsUr8gm5Wut59QWhcnD8Wy8JvYqu6qZWYYk3AT9b4JzJWvDhSdQqDZBAdK4VsJmyGTjHwjC1Vda2TbUpv",
  "key15": "CvNtV8gSQppiZtZ5GPniM699ps83TV3xnPux58rH7hXqL4zBQb8wpBfoB3FA3qhzFtY7tKEWVJ7pB4DGdDyjfGs",
  "key16": "4dAENyJrK2xQJdYZxy88sZCoon78uEZsaFi21ThuWhPB2xApg2FBDMiVchJcpjK3RD5hBK7hE5dedBosmMaFUQ14",
  "key17": "2FjcD2sA9vvX5NZB1HeyCnHWSgLaJzcxK38BAH18hubKY2wDdAGx1j9wos9RPcmxV7LxmYZua37PxSMKoUycVmFs",
  "key18": "4paQZKe7WpTmHBFPPnwxZ37TLEvUYJvYvcQeNK6RpXs9q3pvz1a4rjYqGafTNE2tB97qXHrZGh8c4Aka614n8to8",
  "key19": "5512vCTJhA533JSERYinKWoMPP9uBrSMssVbEp5PQ23E4UDYLyB7XsgRu5a6qp17475LMWbdEABi9RDkMiMhpaSQ",
  "key20": "2Wf7BW7LvefcWCw8rWpDy3RDumnd1xMkZoEwNDz1iXgu9BJue82Cq7NyLHAKQsso1N7mdHQGwvi3Qwdso2EtziN2",
  "key21": "5kha8kBLKBgEL5JCrAZhQ5cPCg81b3wwZ9oMpHX57XsfGszcUMtkq1eHBCUnFcwF89oJEaTVBdiPuYU9FRycUgZN",
  "key22": "2kEQkafpscSG11dK4eFHmxi1CTTkxhRN6PBg5BRRCg6b7VSucofyoWcJSeN7SoVRMzJMBwr9iTF9KW9F2LzTiwhD",
  "key23": "2TrNbTLZLgeJAN4EJ42kvETYeDcEWqkM5VmPBaCELAqeqjCy4aaew1sE6XJhLhArEYY1EhunVWNF1BoLYMozmiQy",
  "key24": "2rWZwx7AqEASmi9krxd81szGqxBs9rYRnyUzZuVwDoFa4xqqoivx98QsgE7guJgXSiquzZVQdLXWFsPHwvVdh4eq",
  "key25": "2n5BZLDTEYohVWj6TyoBXjxHcqMYixAW6tvgpciqbaBVsmJxCBz7NE1s2UfAQeCYzhRrWHaw4m4bCb2gWCfZ6WmY",
  "key26": "4cUFspKvunrnuYxVrNj2unv3BDvCp8tuZij4FTbJQyJVa6m647CQSrTQRqdsN19wDgThNUvGcFQNMLuiySAyR3T1",
  "key27": "qp6q1affRsqS42XVyxHFMByWPgoHDuEjTEzKZ8dWk33c54bUrDTiRbPwuvjqxGMtrqQNdW85pbBi6qKaz2ZRzZF",
  "key28": "493j9ks7H3Xfs6z8SVCoDirJTt9V9iDFmLxfzJoSocMTQCrXTFe6EEEvSyK9SzqBeyAcdLoEy6GootCRxtVCTyz9",
  "key29": "2W72w2XihCGjtbxKzaE5S1s6tPvbTYsUCoAdggxqHJrtEjRS4BqqjLd5c74rs47FRQXbhpJibMaaRXBA6bzMUonT",
  "key30": "5qF6w44QpcPbwQgAekLYVJmds2bQjQbYzkXUPKCnY8MsqcUzAeQb6F1dadoJAHsFsZhU5Vba9VgYA79Ce9AeNbYr",
  "key31": "2rWbQyadSFzm7FV6EVre5ieDhrZ7zZaZWjLQvbk3ybQ5wjmbve5QsLirtw6DsqcSJSknVFuhdZ2uT85dXMZcgK4k",
  "key32": "4m7yFuiHUEdxD89Q5mjwziqsgZxzncEUmmy7YW8b6q9oSZ2Rqg1T4JQAgicYNuK6pVtbFntX1GidxUqdGeuGRsiw",
  "key33": "45VkbnG3vyuVsX33VaYFiLDesg6CmCETmQgaLonvL99p2aeXWNJ1CUnyE2QJznRZ6sa5Ak89YFECqJE4AAwZncQF",
  "key34": "3Spx9QhxbLCnUKZcVVyNa6pDv7ydGNKxX2aT1mpbwqCbkotChSkUZynteE5vKNbkm9QttSWnB1w8Diwf8pWc6GMj",
  "key35": "5gz8bnqN2caFLbkuxPZ5cnHFnERPUcn9xr2pYoyZW9my6pT72aURGpGrbJdX2QX1aaX7ksmtjnNkrdMd6KGRbgLY",
  "key36": "SGATHuAAiA3nXSCLrTFPYL9MJck1B9JENNWn24UACS4f3mrMidwkFr2zXznAn4ynUbN2omFbshQR7qfXXNC1WRs",
  "key37": "4dGFXjhPrvwFPiBRKT2sPKgkEbH2ihEkgWcCGX3grUVXSDgEcELoRD8K5zh993N6rEv8kF9oudTUabrffS5vqgq8",
  "key38": "XtJgGuXzm7pG4rvEZdRhipizYyyeWVzyPpDt8C3rVKeHULf49mBz8LgfLk8XfjB3is6nnaRVeJcAe3Lb6GHckBx",
  "key39": "3PxWekSSX67YgtcavC8i7CrqjTW4sEDvoHnp2T7kmVWU5zZxDPUPemCVYobcDJpRXADfpDyT8LexktnwFKz5Gjm4",
  "key40": "4ZKfHGp1wWR6q5xppPcnaAuMQVtz1QFD3NXvmfqqkjQsFiXkCaVMUsyRgBj9WPj7aQrgiWTgiNk86LfgRCx7x9aw",
  "key41": "5YG8H1CnuSzH4aHPR8WeJM8E294X2V3NsjqVSha8hvED54j3rnfgqCKeiH9H14mNCYdrE4KA5LhD998kR8ZUTT1u",
  "key42": "ssQJtakpZ4aT1QncLePc5XuL4VxzZZbC51gKrPcmtubcU6ptcPbvD4u1J1vE3Vu1fQLPQTHDjytVzrB6qQLkVUs",
  "key43": "5dRaPpRd7sYZe1QYRbQ3mQwRQ5xZcwfioNMzbjTAZtvdySAZcH3QDTShAsWAUnXG8M3hrxnD4nDe3nsutjCnNVG7",
  "key44": "5Uae8GDkPVxQ1NXuxkabDgZZ8cs2nfUB574Tduz8P62gYKKmZ25gBdjPD5qe5rNf1Z5fcih6DCGGNU1Ce7PJ5rKT",
  "key45": "5DPST6z2BftCXhBUatbdVBYWV71N87pSWZJy1gAR5wDFW1mqxWaWKTxp4nK1o8AKHxVdH9LDNWvx46sqSUN22nhy"
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
