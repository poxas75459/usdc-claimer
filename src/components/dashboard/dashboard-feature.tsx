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
    "3eVkN1VepaTwnVR9JP6F8yGorKJeDtMjHMpzPrQrdSusZhwXD2zqxffpVHk8Frs1RbrtU69uFha68yNeuwwTUdoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RKh4uXnmHbCHzgDBVVYbbNZ35VNy9W2GSztwY6BKQNpBTu6ME7TwZafzEdbpYWZR1nQDnW4zdouHGn9S3vCRwd4",
  "key1": "3yv2RDej6opF8MmrsP4ZkoKoVR3KotsE6rvMJ9MECMUCfm6EirSmJjoz7o23tCJHNZkiwB2mWCAcfoPFks8dA3Xy",
  "key2": "5KH31UTD3Y4U4aKGUfntfCbUKDaydxQmQXKqqM23UoPxhDpSjjPaxhbhisyYsDmiueVXY2GHEraFzWK9zefpQTDB",
  "key3": "3YEBgFQURMYBg8vpHPwsXLk5wWoEERESZsySWicrFrHiZJ2CzX2uYkdfWygukhGuvS1D7WW93mGEC1f3cMsU7pU1",
  "key4": "3Akvz4THsZpEm4xcfugQ3E5dSPXx5RXNYNFpe8FxuDs5y35e4ziz9shX4XmcMcJtpSSuHtwwcrXyR3MsiELW9U1a",
  "key5": "6HGFf2iUVvazpD54ujZurRrYVM3QsTy7d7CYWQ2drvBSwD1ZD52fUbXcnChv6gi2XHJKSEiKzX9nUFhZdm7rN9W",
  "key6": "5fcCGSgrCDubK9XJADYpNW9cgnXUsDxBf5CTPDXvMEikZxVbonXY4nCTZEr5keEBFoN2kvPEQSkKRS9d5gjhCptv",
  "key7": "3xdDc1oyTTcXi5YRARiZHb9FrEKfUy4e3MLEojorh8xNkZ8TRoqcJSGXUiB2Cx5DTtneCceT3vyRs5zjizZ9bd8h",
  "key8": "42BWdMyAsarVGqwHkVu2rTVPdsJoCWLCFY7pJndJarqW8bEKWSRMysmXkJfbVWTq1MsBWKbEQhkxxvcGmSiPNaUd",
  "key9": "3fGMMj2nbSJmYmdwyxQAPAaRRK1eqCPumk68XQQNxKVX1pWGeTMxdbFvMCPk4zki1jvXPCVAHkHPP5YSQeTNpqKN",
  "key10": "3uLJfZWCm1i1ShfpA8R52LZNWSiic78g67CShqS22A3RKKjVcYatiUi6QTudKnLJ42zXrPQqAkiW6UpU9oXWQKSY",
  "key11": "4Y3DpJ2XrgGwxg3UAWXA8sCbyMaYPtYcYB8vbZAHZhjqD12tuHwjVbkoHobVP3KAjUyxcdbTaaA8XqwnwRwwYNxh",
  "key12": "4V6rt19rJsg9cZVnwsE9o862yVt4TG3zcZxrRTH4omwRucqooFESbs7GotPN9KivnnAwt1TFNDYPjvD5HyyjaMFy",
  "key13": "2aRse2x8GsyBmCREE5m4D1WDs2Mq4kAcfZ947jHaWnpvYqSsfyjh6YbDcfiz3BMgekj63JPKgoydWaZS4wezPcur",
  "key14": "2zy9cuBTd6NJaGqnr3DGDi6d2j72Yu1WYwL4h8S4HNvMndNsDtTqdxoP9juJ5qLMFBBzZPydmnsqssWVvvNZmtfQ",
  "key15": "5MizsMedtC541vJ1ZtFi5P1dhNuPbaztyPHwSDiwNR29EVfN426W7wwrMRVUVa6RT4M1odpbgC8PhUzhmZ1haYQo",
  "key16": "61B9WyLr27T8AAUQewDZuaJgap2srENg5whJksCB5k7FHMevZdM3yRmXiJ4k8GjDnLYNLj1rq8CjazJCJiY3DNWy",
  "key17": "4pxkzeZXezAAxj5B7A35bzCjUB2mhWHZXrZTb4detsjDwrMm22pzAW5vj2ZbHC614i8ssYjbSWoUbRPDwsNPjmxb",
  "key18": "eXRT2Rg89bnaEpF737TYRjYn9NNhesv1xcinRHML8XDb8fCsdLs9Duake3LVKuAMyna17nL7ExFCUB6C21mKSvu",
  "key19": "5j3NfY9F8YJNZT78RngnZgcbBMTNwhRKwULQ8XP4zLtkR4UpQat7pB7iA2QpvL179EGdEC8QkFThPGmCZYn7bwn",
  "key20": "4YZgsSVsa5kcqP9a5fivzqR4xpWyzBb36himqFynYfu5uu4eooL1KRGDfZyokejuoS9Ykg8fxqStvQbrQntMS9oA",
  "key21": "4U2NVih4eLAhMED7T6PURVGGPKhUWP1ZTJjEZdkoeA1FAotHFuyzD9GnFmTVau8UwA56R2b2qR1PnE8Tb9nCTYbA",
  "key22": "4ZAa6rxZ7zaXiV9exQDTuQ1eJJEVzMNjr5sz9db5z57xdTvaKwzhEC7TnWxwcQkQxBy9gZFhFGAVFDmWJR2jLY48",
  "key23": "MiogYWNRJ76aRghFrjjhPZ95168Qav8c6r5DqBXC8t7F7fiDPrdLrJh6y9wiGs9CiYDPg2JStjBRZLc9wrGizvD",
  "key24": "3nJueKAmLfeykUbd2LDSt3JPpdeTfc88NzPLNbChZJLCZnBy3oRZfu6pzxVhzmZ2dTo4Do6V4UDGLmcnYPaNfYTg",
  "key25": "3CqLWGaRjFNoLoGyE37rqASYAFmJgtUWSCCD3eyUe7wsA2o5za4eKBRjLX6MurtBVmP3s6WDvvW1JWAu5jnbM3o5",
  "key26": "5FhaN7g5LMNRQFXqXdaBK817h5soiohqR68nzpmTuPLjA6Zx3RSTF83xpkKzGZMNRd9arvhwMCQuu51C2sgw8tkT",
  "key27": "63zp59RkacVrEJS2Fq2fdkxNbsrjQt5K9QQKfXKJSfHSWNAsEt7tsqHA68AafbFzWfYVZicyBUn8HmRGgaaVKqCC",
  "key28": "qME52T6q9UFrNaWPFsbXDRjD3XSqdhvdD9ZLJBkA8WpwMKqDGGMXXYGEWuuAbSY8sf8Vr1p6dDT983URwKVhxww",
  "key29": "3axYmL3cYGFRrybB6Cron5X672snrLCkH6fkU3J5Mvwza9Nk1Mjrmnqyato6PEwP5kuyfBYfzWfwQLd5i3g3sNCF",
  "key30": "3iuxZEtJWy3cmBHyDDFowajg5a1j7zZEgXzrdzHHVgS7R29ec4Zfb8JzKhM5QaQaxp1p3GDjzPbij6oRPTPQZyC8",
  "key31": "4h29AcX7RvHe63GaUBpNf2G7iwK4MaLV77837jwFgxjPDqJyc58WncpqZDsigvnQM9HCq1dsjuCj1gCcZpqmPKwh",
  "key32": "5GiAo69syrYDRtKdHvX4x5zUJSZT2mQBkh78qMxKQt6hUAyxjrdAJqXF5UetnR7M1L68MmLvNLP5JbcfEfVT6Zpd",
  "key33": "2PjNzyyWwCUzTpYKfgzdAHK9Peoaq57DAEP3ptWEiuSLzjRwnhyvfGLYPHBoBc4wBMiBp2wvkzKfYo8J3ryLiVA3",
  "key34": "2N5HGUNUTegR9Fu7wqvQ1CVVr1aT4ynycZAn2oeBP484i88EZqBZThGSikbrRya3sE6rBBKyJj5VBRKf3KnseDt9",
  "key35": "34xtsNnnaszZXnDJSdmXhtvw9My9hyhPLmBhz1KouoHucBjXbVMxRU1EeDE6utyKFqSgusmU39pTNCxmsRPND3uX",
  "key36": "2dM3zADjazWEGXGY9vdpbu8wc1WWa4xRkPPonVmAi9NMW6qMayQ9JSoVKW9WYSs3HbsoBJkZQq4uGnSNeJ4DSt8c"
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
