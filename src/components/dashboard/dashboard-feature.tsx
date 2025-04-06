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
    "92Qzo9JHpNyJNj8s6433JJrxzmX8rEgpHUcndebHom1KmfTRQFjTe1rMrqaTSyJ4xv2XCQG6j3nGiZR3tZBdqzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgpjTukz3RgbcE256xKucEwy5Zx1UYqUxnK66YzsFzuccdNj669josNVFu2qMGtiErBaaQEcXEXSPTYNDGzhusN",
  "key1": "35fEETKzCKq7a2WweCZ1D5EcbrsVzTiTw9kmoAjKdzVqkvD81w5GM4RSm74RRBi4JhszAeX2Kb4cuEtJojoaPSYz",
  "key2": "2QAWCk5MS7XcnbCcZ95g9kP3E58ALUYwJagjY9X7NASqoWQvQfRA7SdmhGkNt9VbkdYbzD9RnZTThik25EbU5TyB",
  "key3": "4jFtwAzqZnGLk4SnNdXkFJ4jNifwGzSK5XWf1BJLkJyXJXibe1Q3TGaKXXGXh6xEzbYWR6EJmbEF4oQvKvtYLksK",
  "key4": "4kcSSio9dHYYmkcFzt5MHqbZZ2Lf8Qu2CLj2hVCqNfF9ykHtuvGLU2hwNGMfXtsg8wcsBeq7iwqPrTnwJezSqxF6",
  "key5": "4ZsyNs1zqfwX1R3WB2PVvqEgdY4QZB6jvJLvZEYeRx1fEnVDWpqX6r8UTFz6FQV4FtqSWoF9XoiKbMS4qSFjUWyc",
  "key6": "93U5sFVi4KG5kxZK5xKwyhnUC6RHwKV2ecLmB4jS7uY3bd9dUAZJRY69MKkEqZF99AuY1h3yV4HBBUMPGdd4eNE",
  "key7": "4XCPqFZecjgoEmCnJzJWab3qtDajf5PwducbMSK1PBZfgnJ5XywCvuiYvXyYC5vvPkcwstwAuqTAu6Fv7ttASZtS",
  "key8": "2L1RzDX46NQsk3Knuw5ESt8hcBJ6ioinWRXVnkyru1THu95FDqWgRZTwLnqyiXdNype95z8gk7qvQoRTtq7rw3Kz",
  "key9": "2eZskV2sQPaKtPHpEA6Fy7GCJHbif3zdcg4SbQBSr9qjkKnufWfB2qscp2JZrwQWGEJWAkoHfPb2j14PmtbJvyU2",
  "key10": "2UrAjiXwh7Y7gShE8rdvehGKCdo4sWHpPrnkA7qeADSrBcCi9TZvVjr2HHPgZcdxwyHiNdXdH2AqgaFb49NNRS1r",
  "key11": "2NmDRNYNeCNesr5kTrcEdsZ2zE5Nw62dV4PTbCnMnkbKuAvKtk3o93GdEYWR8FDSfu1LsAkazJYpm5vYVYnnVUha",
  "key12": "41MqE4pEbK3FsTp9Wz38HWcz7M7wGJ5Yr7P7NeLijP3HWJBMzUTUkKAeGYjwNzi3VtM8kBwWfqFQFAzuUrC3v8kr",
  "key13": "4KAuKJXEmLbEaLePFxBv7esoh6sVV4VYnZQfk6Fce7vCJ4xH3BvCWffWQBrhK9wntfW9AtPSLHr722hoSZb7eKTj",
  "key14": "47J842ARtK6Zmp47QgDweD2XTWhE7BgPBaeQFWFugE2chxjrPDuK5cvu9r3iebYrLxstHmBdr9hfZkiNVTyh23Wi",
  "key15": "24uVMJQM5xJG37TDzkUCYtPr1DeZvVQyhVZDqkRfeAMakZtsZbvKG4GxhaACkA7EzwBgDDMYf6DmudUZJqmAqQnJ",
  "key16": "f2pVaQKoCXS1b2C5sQmjP7tJFA1RRdk3p3zCEKwEfNab2wNmyFD2nV9dmuGwGv29EAACdjuP45CKvsk2xC4BDFE",
  "key17": "zmGQqZ5xAwXAc1V2pSuXpsaeJgsySs5koKbgMH6RcFHDo87Y7YtG3kBM6iDy6BZQxFUqmNLMUdH5kgic9HTXx2e",
  "key18": "tcYMZbUVWEzEupY2HebsjXfnUhV2TTYftXZfQScDdtMbk7bg6qYHwFbwtT11niCaEkn4RTZNHNmGeBQAWhzChuk",
  "key19": "3pnWS9HnRd1ZdRpzs2vjB4jLh8KBGGNUpRQESHTwPwAH46jhMnagsWHvn2ZTaUs9ovbFM2ySgMyw7R8AxLVvSETe",
  "key20": "PMqwmRgqUzgDHFqkkittWh9miX9uQwYTTvhkCbLpV66bAEYbE5udBBfx5UQG4vYUkrqeUVAaBEtBrYxD7bzEvbk",
  "key21": "JJ8r5RCLki5Jej8icX3DEatmGE2ThisNpvB7qB7zu3nU7w9Ta8NA66vk3pWgACRCQSRMN1noYGSk3Kg5twRGGn4",
  "key22": "645MADXipEfgkP6M6zzEK8wWGXQgTBFUfnm3t5po36YDJDrBh6xNVrjuBPVQ4wbRazYpBVdzn22J7FFxcHW9HphJ",
  "key23": "58fQCkfPMtauyvcZrZhNZmpGaa6eowhQFua3nH4w8wgzsidUKo1qscCuGEKxGfn4QLfkGjFn9jNHuWY6WTZm75z6",
  "key24": "45uavPSFe7htnSunw6j5q8VQj4bhvBqv2SmaR8rc12t2WFSTkJQNTBQpyYkqdWh5MCrtQJqZRmJ6vKCtDZAU1BKS",
  "key25": "2WLwj1aEzfPhcHL1nmuG4v8uuRgmiE3Sb76XwbNexQF2ykMcqhee5BB2zvQMGpynzbXrSfahaLnrGSJbS2EikBd",
  "key26": "3ZikWVay49Bj2KFtaqQFh2cG3RZV4z8ALREF6dTnrjs7J17kdEwaJPLbREuRU1o9Ahfz1WiWmjUXf6oiCyVzZz7f",
  "key27": "4RN21wYERTJYvhR4FDBr1w7uWTMSuL5hJmLGMhqeZUVYTEbPKK2LvkCgwwosMjFJ7ECtmEMVcxXxmpbivhydEbu5",
  "key28": "4dZzx3VMwHmyJHKGHkzZK9SDufFsmxJi8QXiK5uQWcGu86hX79Qg8Spst36MdJRX6BqqC5QYuLjUpT8J5buCxH1v",
  "key29": "5HmEUa1wYZVxHfMuHB9xN2R65BB3Z9sjRpM2jv2iaEeJK6oJyASdJSi4vG8rHrjg9ST9eJS9WzCq6uttRTMp1oV1",
  "key30": "2Sz8QZMjWajPXbahGkdGbz2gqY2AZWFwKdDH67n2X1Yz6MbnEsy2hewobhtWpBA8rcbzyWJoTodyT5MSadTiP1UF",
  "key31": "2cMGTfGX5wdbEK1kGoTkTjpKYa5Ldav8BJVUCxfjTTQHXdXHQpw9bczr7tu3HEQTWqzE2dCJms4L6jjNkkZR9W9h",
  "key32": "66JjxRZGwnM73UPc6J9n6qPh1BNgugSZi4mRxZQTCoDWKbHHutgmHw3wsBkeAy1mhiRfuAH5MEFqM8tkLGDN8XHU",
  "key33": "51U6mPDhxsH9KqZmhf6erFDnP6RRDfQYTvXFLUtTTv2mpzVpC7s2Hqh6Eh4UBubVkmWvDoFUkvSLSYD6u2M11tF",
  "key34": "3hFz2r2ExAJj8GKo6eUWjxKRgiZDP5rkb87eBwv2Kuta1CutXSgzTUTfyMbFgPLxfyiJ5iEvJboxCzygbo66e6sv",
  "key35": "ioHGGvE1N5ukSjRLscTj7riQ1ZgermHdusiBhTWaawzW4GDzxF7s4cG17WZznKeye2mM2imSDoGwNUPoTiw2QZ3",
  "key36": "4NyvaCxpqH8wtPSugu1TrJvbu8rfpP35uWAHxy3pr49xMMKiGXx6BiqanVJ18ieejtBx2VfVsMjFYg62Z2eoXe1c",
  "key37": "C7ed8D3eWu15uhW7mTP6oRXVpYpMeRGWmJW4o39a59BVybR4gnjKWFUigzDgg17TLyk1fXyTrt2NNocVuNVtFXJ",
  "key38": "5GkV2S4rQcy3Jhio7GPa4voLCbv9YwKHw9PyhmrwuxNCH4XSV9cutF19e7HjmHX6NxPXPHGvwxsmpXsoihtyHwpC",
  "key39": "3oLxbcVVrLAY9bFsWrnr5Z5B3Bo6AMoEp5DNMkCYUqia5VCVB7wdumKo2iKTm2RWGLg2pgJZrir6dwEV8ueC1fXT",
  "key40": "5r71LrEknkGsbzoRpbWd7rbjnwHsYtWj26ULMGYg6yshD66kMTssxaPqSzFSJBmrpaDNLJtwHpVhmKErU65Tv8Sk",
  "key41": "4jcgebmJe1efw6JKRDCz5LDbwcAmjtcmffQCvYAMstTMJptUxSBJU4hUuuGvcdts1MznSBsVL8n58hHvfoncgisV",
  "key42": "4CELM8qB6sSZDf5wmoUEY7W5MdMzbFyhNS62FXRCWB6oeEkPkyBL79E2LDWYakcjHYEe98CswRMGsSRMSAWxXQLr",
  "key43": "5jLB5dxdXAm2MBJUUMniHfgwAnwJnHbMri556mvcG2NuNczGCZT2C3mpAHbQ7YSgeEqSBUWu6nUy7h2Gtd3cvA5",
  "key44": "4jR7utAN3JMDT5LMTxWJWk8bBtNdgYtUTg8TajZYXzFG8jtJz5Xo2Lu8izxAd4iDA15obSA6FG2dwuWVubUtCo9X",
  "key45": "2WDV16wUouW2nwArQxFDoGeRvG6Vh322dteQsfnNw6k49jsa5jehqSinasbbFF4Qa2PTzLfSBea2vCE6q67rKEUT",
  "key46": "66MNY8Ma25X4zBXB9SRnAgKEoNPg1MaH5MsGPcJeXSCgoCbn5GvqpkFAdWitDkQFDC7ExLV6LNoaonpwgEgoGtuM"
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
