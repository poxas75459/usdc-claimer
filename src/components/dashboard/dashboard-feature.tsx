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
    "v9Pmgf4742WP35A3WxovmGMfx7sQGq5g1SDaZNbuc21cX4pdGodNQ64LudVKxJGTXbwgedgf9S7BwVWhBFuVWyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcPPtuXuSwoFV41GhqzexCNBcqdCeo284M36EjQ1PSMeomtEf9CZs53JJBdTTxhoMFMVqcMiCZwnL4JL2Bsw2ym",
  "key1": "3HCiDyMY5JnuYAiQNPy2pjPTNYvPkodmkZiPSLFJ9iFtPcj5qSLMppiS4NNwyQpJD3wmSWXFSCaewNsgyk1SYdah",
  "key2": "5HjWLX7s8UarutM1ZLJBZqAnBNn6TyemnPF5JevTXEcnw5wSFHJBtkgfkwUw3BHhxF1n3pUU7YtH4R9AnnmcRFWP",
  "key3": "gp4tGBmEh9UdQkB9e7gjTYZNXSM6FQQrexFicRYvDkZjTC22KoFtp54EMq2z5EGdBppHYCQFZeyrcDnhcE6hW9B",
  "key4": "4tCZGA4ByuDxAe4RZfAsbLqYoPUqg6ZvAhiwyChtQV6584SJAxHcjZiuV22LZa5SXuswehBnwoN4s4C8yFwbVEdJ",
  "key5": "2dJ5usZm7kTc2HUEXEd6B5aSBxGD8hKFeZj6GfaGYeHa2P14sx89joZrKzT65G8R4HD2GXmJnmH76mdwEYMSx4bx",
  "key6": "4AqQgdYwPfnEiGiQgcxN6eCwA4MczMh3ziAZGZTZo6EmLA3vbb6zNKZm6z5CmcyVxXzwCVWaUvNGUcK1TPiXbc9e",
  "key7": "q8bHsxTsbgoHs7GXehBgsWKmfVegA6Cp8FWKuc8phMV1dywZbLxVvdpbNoH2gANQP87KEN3JtBvFSKeoLnp9qQf",
  "key8": "4LQCByVciaxXow7D7iJMe2qVd5ASxcjRUxn7dnHhAr1Z7DrWVJ1xn2BT5QTi9rDkbqc59USm5noDRauKBcX7XULf",
  "key9": "5ifHMMDqFU9T5wt3aiLPG4UugjHmQFCeERyZ6tXwen9WsHQHkgcwCphPRqyRoVpN26yDU6ofsm2NSYja7Q9ATY59",
  "key10": "5hMumVP9zoRxjUTb71UEUbE7A3vP2vyx42gNJETwJWhXEivnu9D5ri8Hhg1QdFGDHRutgE6AFtsxKmW9NG4m8Bsk",
  "key11": "5BJMz41XfNTghLsBQaNZEf1v3PE12GyT5ycYV7dr54rbYerfrTpBTVnCY1bZ4ojAz2RxKQTQQbRwMAe6T6czmeWb",
  "key12": "51Pyma7UBmVHA11RxaTXrq77Uy1eszGvZGLjVbKHjcbPiSVBNMaWKvCuRBRhJRLEFMqdKaRgV4fznMcW9V3J8aff",
  "key13": "5h9c1cWp9WsUMYxfn1fjmvmwXZAesAX2e3ZmqfnsxowAP5xVbR4tsSRWv7B9sDDbWckehz98HfLbmmqC1J4h2z2V",
  "key14": "3oi5YAGmbMxpeDzRAVBceAJkPUqLhnk15hYcXiKvgr3t4LWwiXEJU55DgwwLGpiLjE2r5SqZQ3AQUma1AprwCB1E",
  "key15": "5RN8AHV9fhW6LuBJgXX49SDKcjskmZ6kZWx1hsAq1Z3otMtZMeaALngKC1V42asMWWcJLE7jaX4Rc8z9GBZgV5QG",
  "key16": "Ny2k3pmRihXASHGatY8jNuWthW38Fn8ff5SHJzAfAS7FLs4E4miFKmYLQD3QCuXyBfuay6P9zhvN8BB1WDmLHzS",
  "key17": "4wQG9xbqre9Eg3JkKoTTBvgc1u7Lg4NCyrJgyVjp85F8NGfnsGrb3rcR54jA7b3FnrYWn4R8NSe5j42yvPAZSiEU",
  "key18": "4Sc9Tjs5wMxGRUaSGbQYSibZsgVnKC8D9H5ABMQP75f4rNWYjP74VgATP2yToDcyN5Q2yN8vAXKnF98A1EUJPm3o",
  "key19": "WGpsddRJ9g2vfPQktfuRrGtjnB136BSK3HKuXM7Dr2PZQXPn73Sn8hbQ3CHqeyqTFTJ78dycvL5W2JRr98xENzL",
  "key20": "39Az52J6Q8ytQ9RG8yFMPjh2RLMJdTEgHRaEk5JrHrWWY42GfVyLsSmxJvnyqfnA1xGD4uMGVsEV7p4mJPTf4HtE",
  "key21": "g5623EUeBCWdZKSEvLgabGwzB1dWFAppnG1W5gpEmdC3L8KjXtV2q3g2cNTLGLoyKquRyaFJ9u2wTp6b2TQjm7V",
  "key22": "MMK4JpCnt857U4kB6FJXoSkuZJYewP36xcZ8N6U8bA6cLf1K12htwg4XqxSGtNmBguVHhwJYbZ5jUYTZNL1T6KK",
  "key23": "4crhtd9ZRssEGuvUXi3wWX4rFmxZvxvFLWUsMzBEvKYyx4ojSu6Zd9b3Q7dmF2tTjddtTFoNpviQoT7xyTQNz2Gu",
  "key24": "4GS7R1eMDm2KorHFWqio8PMRCjW1CJUhX6hyca9hP5925BuUPn47JaYGhyVcXhaBw8pCHoMAELbsbwGkhzSYbuj2",
  "key25": "5L22LGnykNB7yJFeCGG3E4aiFZ3vwF2DMLcBaY9R7hnftRLjembtAC4aM3BiuqAzNLbifBmWn5axkZoyE3RS8BXn",
  "key26": "3sRHwHFHVc4Lk4Neq9L6PzDUEU7tL2tpJbYeKEmnzjyoNqbJFCt7LdGDehAug4D9wUbMdmMH9yH4reXBNhK1YT95",
  "key27": "2qtSZFwaaqVt3sz441zmmg9Em5zNTSPGJyFSvRZfLivFszudHxZuf424mxjS6Mxc7xCmceCqbV4mjdhQMhrYS9gj",
  "key28": "4reHDEej85SjwRpLP9abFmcnfwaejY5KQbk9ZG1D4iAFjv1mixosbBaD8jbf8yjxxBDY8kGZCzSK16wdciM81Ktj",
  "key29": "SVkiRgpNX9pUh4azEKynGXPEbYGnmFDZaKSzTLWHgmRuWdY1TZtZa3yYdd4Dytws7aduiSzd3DuRLDTTb1bRYQY",
  "key30": "3sSJr8uNoSNLqD478g2kWawQ7tDvB1giykrt2S9wuaXiQHFKMR1UfmUufPdLpsVkoxEQkPsXLgSdGyAxC1KG3hXA"
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
