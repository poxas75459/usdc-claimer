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
    "B2tQbmrCQp9ry1UytsDvGQA1j4YgKyYkcdx2B3uC522RknHdKSLJ6oaHYPovpCfzaftQKR6jPEPDtgT8bGMa7KQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UukaBgr67N4zUA8Eh2jSjAPfNKz6Khm6bfhVwojrfdTqarwMu5ZajswNzbXpiQXPsiTNviGKg4fpsPysN2eHcA7",
  "key1": "4aNua1eD57SkojjdmAtegTckQLcebGcv2iXDQfBXs71Xp26HGfh6kWY7kcCF1tcKCDa9BK1THdEAFXoMBeY82a1r",
  "key2": "659JgjYKf97WsJZhB1GCKaZrgk4epSZFwyYivQCd9LGrn2PkjWY2KD3EQzAyavTKSWbGBPyzw41TPauhaTTVbqg4",
  "key3": "k9sgUaz2cpudAZWvdJuiSMhmv6vTUZjYz3D385CiwpHZGB9JiUCfURAY8uyQM1YkrygsgHDsaKUy1QGLeVdSwzf",
  "key4": "3h6Ya6WyEV4hpyW7CVkGugjSTWWotGpg2mpAbPKiPheQ2gFGybrHtm6XDEJRDNYhypa4rM4UDdkWkW8Eyff1wuYp",
  "key5": "3ZQEvGCKGJM5EVsL921rcwMZzzYFdjPRfiZzoHhJH5ovT1Th2Uhx26fLUJkTHPUp6EfLsdn7Pjbk3EZaVDvPH3tX",
  "key6": "3D7fFZnANUuRZvc8jmzZRwN987dHH3cdd5AznMUhVoYx41toDXiLQ6wMg7En3ZMtr7VxxGNecSwtwky4guhpYSUA",
  "key7": "37cD24NC8rQPsbsKcGc89MUbFwrXx3AvCSc7BND2UJtuQ6inekcs7PPCAyeptUoyTGRM3LD52T9Yx3BwztaBEZUw",
  "key8": "M8AJLW49WnPoRpBBBNMrayMeDnjPx9ctMCnp2Z7Zsar9BdBS4r9u4VVMf8cfEib52iQ4d6LtYFNwfLPCv5NibDg",
  "key9": "57q2qzrVbZC7ztqCAgYZHfU8of48khnVjS4AhmSPsFTmY6rQsr9ia6sRkrZcwYAcqJxbXvKY7r9rRNKkVqVJzhJg",
  "key10": "4r4ciRN1neyDtF7Zd6Q3Dfbvui9Bq38VAvMm9ez4b3XDm86pyzhL3YoLEhaKsBheDTD6pKu2TTNy4gyj1onRvjMk",
  "key11": "5i4ruNRYqEcn7pFU5injpaCtyVEviMaBQFxVWj2iyhiHHDD3gdfeWytMwxUedpQ8asCysWK6SdxLrvxSLgUHDHs8",
  "key12": "49qPffBvXUeBRTUxTQfam7Y2V5kTcqNLJL9kfaKioCMsCL868WPva2XN46fsw5wJifGLgHzhex6xCXSEvg74XotR",
  "key13": "5cP1EFdjWtaYgEKDeyiA8F9NoWHBcN1Yo9w7qXyWcFe7jBGs8n3nQVmeQYyAnbpyTh3RnDcwKnxrgzxuQJmpWpJS",
  "key14": "462eQyFHJ49xzHhkhzeY4uC95jewX9jEURxqDTxQUYFh3pVngvR8ERQVJ5bBqtosMPdbCQc2kRbRa2cWBzUgPL1a",
  "key15": "4Ky4YpXtq423jnwMNDgnuzs9VjHDTjENWjMMWWL7no2mnf8GaABWcv42x4dY44ZMttkGyGDwkQtiFHJz5AJQY3ZA",
  "key16": "2JirqcFRM7eMPzrXHbUghk7VZ77Njsg8Lafag29mztDyiJrpitHx8JKtWsXoL7gMT3LFnSdq499qTC63XGo9VFz6",
  "key17": "3uDhgxtQVAmBti4Nwhdk6mm1HSSEnVzqKMxXHJyGWa9o7KBewotBtKGZ9RWb8Ui3VYm9N5XpquvxaGFgy6hqoJXE",
  "key18": "2jGjzuaNDXRpnV1FT4VPuFk6YLMjk8HnQq4zC6b9AGsncuLYKb1nxvxB7jK5uxVKb43o6qBy7DFj2cQMHpJyq7v3",
  "key19": "5iqWVTmNwGkonZ5ut8Ek2JEyBgHFywVzAV5bvzrLptBxtm4Rrqu1vaBiGhYrHax6BWuD2u8rbbjd6vTZGdFdvEsg",
  "key20": "57Z994pUfKha39bFhPJHCcsPm7WCmprqCeRQQaFCoBqgKiGoJMVAH6ejnCvT7mAS2EihYYkPanGpDUdn5jQMU9zf",
  "key21": "5bGtcqqdWR9F8CuBaGDjPTWVtH78c3QUk18gwA1F33LKYLn8UHnjLTDyrhjFoqEtN3fBsdhZcR1QLXxKRWNH9Bne",
  "key22": "vwX4rrfFnDFhgbSZurzf8Qh2pcxrV2ruEshJXATi1SxevtPDtEkKjfn17rfv9HuQY1t8jW8JwjXDdVXZhTtCHWq",
  "key23": "yA4cVVnMwt2GqEXAMpq9cWotaRcB4f9GWvHzsid8haJZJWF9FjDH6RDUDNFabSoL1vPxRovj99ZnuzhTNnfgiaA",
  "key24": "3QMAxxpDykrj5bMLBDhyuQ5zcz4S3DCNC7QAsLRoY9z86gotK1rjPKVKYty9zCNFaiyRWTfZdZStAAsQBQnQVift",
  "key25": "3sMeD7fjFcHYEbbMuK1ghXPQ7nsqkBXk3DrboLwLUFcvhbThEz1YFuspccrfG4eWikzxQGbYTqXvu3uEzrTEDRiM",
  "key26": "63GmU3fRjj18ET5Dinq6g84G6APVVvaFr4geueWKfif4JmiWr9vvxe56VySw5V1hYzSEvy4rDhCEASCZtr2LasR8",
  "key27": "4djM6dQbDDE3HPSqUQgaRqLfWghYP2JBidzd9nLKVBnagDp556ZT9xrz2cBuVKBcUYS2jqZhA8NdeH3UwyDtgRa8",
  "key28": "5QSnDDPbLbD3jYKNJYXtW4jiegxaiox5QLtwgmiozMsz6qxXKV5amGr8isEFV2rnnkiK1m3LsKNzimHW9PRdTJzR",
  "key29": "4NrTqfLXUBz4PStpD3p7EUyqb9PWw2S2Uum26AxL979Gjx3hemAcnmSkWhuN39aaT1dVRQfSzESjbQvUoChyvtYK",
  "key30": "oCpxz5qiCXY1daKdLZRtmLH72buXM9GbnXuRq8dwkkmm4oyzn8rHyw5CHzvwxGXHeBpqTsPAczjfsH3FAppfyLL",
  "key31": "2u9GbngqHRYobMMq4bMuMEViAhaGsNDLDgomV7XUF3HWzfgWpBgsQa6EJnBXq5VV1ncgDaynAQav2bEQXQfJDrnz",
  "key32": "3xkJwf19ubszpYA5iLkdef45dR9c7u1B4aMjJpmGxUngKhEh6pmJnpJNzsCwm3vqQok2StrdXWxkw4d8VKjQNjhC"
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
