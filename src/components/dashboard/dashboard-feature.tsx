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
    "3EWByGBsWox5U2g4auRLfyP2j8z39ZMD9tgVAu9TZu9PqHBoX6br99vDYGLHMj54oXgoYVPXwrb8Z5UoEjBYRsif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Stfc6uHFXg55DAirh93MgBeCjbeAEv44CjAzCAUXFFuxmxLN1X8N5BsNVs4w2nU8WCMCpAuEypcFXwHGuV2w2Ug",
  "key1": "2xbzDCbtASpBProALWsrtjCYht53UWFgFmZQV6nDnCE5qLxAeM7xkE4gUqy7WasRW6yFWawX62memNsVewynbxaG",
  "key2": "4XZbi16nA6QemQKSbJXouLS4tVNxNsL5TwZ92p68SC4iBGS1Gpndx2n637qRmWwNr3WFrd3NzmgjfjrCQbdhavGA",
  "key3": "5jtwRdyAvvH53T5ADJJrg7MsLjNHzHzxoTb3X6KM8pQ2GNyXEvSt5sPppFvWy8pPmebpYBxnwD6kdZ4yVX7PmAtS",
  "key4": "3kkr5LjJUfHf7v5J3ZRSgL6jjoprXVqLSfxkLeKYfL5aYSHxUfi1xBT8heBD7SFjZJNL8HY8SZNnVh7eb1LixF48",
  "key5": "2qSPVWTZUjKbpmUtVDWjMJNtDfXTutXQLqCk9A46fJ3tuPsEy4Ya4HEBnFms2kbACZYphSsvPVEDP3xkScT3J5J6",
  "key6": "55yGpK5FFzu1y2Ttbbv7q277zjobqe5i9wRk7ewZ34inDjB8Aqx691zwrKdVW26HCotd1vSkU1VvxHrZrpWaSzqo",
  "key7": "4FrP4yaV59hx1qq6DUrk7pjFLuj1CfDCo5Rv53ksHJZKfhmToCYnMi2yXaUzWDh5YrYsSYj1h6DrxE9qbyg2Tw9X",
  "key8": "2MmtkwYqBF9AfxuN5j31hvahbBqtoh98SVxSKmv6a9JwVXTQv7DVJSY3AP6P2Vxu75Bd7c523ggZUCYCAEXM2pSD",
  "key9": "4Qmidhd4CSM46gvryGRvKt7bgFK4h58FFsX5HsjBL4tiwubNjUEKcD8cMdKcPq3YqSVgXzc3usfx2FNXEJJvBnum",
  "key10": "22DSdYSDBrLWcUoSt8Y7CfYqBJwVdghGWi7VA9PrpfAd3kMAHm6nT4jRRFtcYWWpRr9AKZdc93xrmP5zeCtHCiSe",
  "key11": "3tpVbhE8Aadh4NhPrw4MemD6GfZNeXuP4KKAC7HDZKSGqjw5vmtMKmiMHRVh5khScxSKBb1TLxT7ugWVhYSjQ7LW",
  "key12": "2YkqZJsuLJmfijdm7sWXgMjto1CScDPkZTdwNxRe6sN92FZMhU7pEzmuG59BcajXvVRJFgtfsBAT28r9N7HHFMiu",
  "key13": "5G2iboW2yetpEgkptT2Q5KdbGmtbe2b7zpHkrbmqDFnegRvu4tyHH3pUAbqbMj9eMsZZuupTy1S5cqtcHcUXof88",
  "key14": "31skfirwqargQKgkc6Kr9tgK1Vo2LJNxrSji7nrSXTg7W35Sf9SSxbA4tnFFz7iC1b4hbnqQA34DEnjr5mqhH7h2",
  "key15": "y6FSEFCqtvuT1cSBdtKeAcRAsutJLeCKeSeBELHTnC29cqFcALPUbodsey71SYKHyyF3XjaZeKNxPJ5e98YLaAz",
  "key16": "4VMt1JrP7ci99btxS5eBcEeDuGrDGbNeuAdeJBLZELASmqLpqvQs8F5ExG2kZ34FYpun7LGEDyPw6UWMC4iV5gz7",
  "key17": "2uUT14E2kWvjVdi1pff1w5eLiYFbXYvR5EqxLTqRwpt1VZz77UrCrSmKJKxgDmpsCawQYRyukQnniFiVNJDKz1v3",
  "key18": "4JrLWCdBJQBdAdWH72jvrJYLcvgPu6TKphHH6eeaaoxdQVhokCks14d2X4dk8sA3VjLiMLH85Fyt9usAe3RH5MKo",
  "key19": "4BfX6dUGdSFkNkvSwnMNQLiXs7MxDuGuorvs1LdnS513ppzhYUibaM9RbfUbjjFUbKFjgjeN4DpAMSug7wKTWstn",
  "key20": "4SMUR5UCUZ9xRSVaxRJMYyEdcLwZRnhk3FpG9geJV449EEeztzpMKuYx7KaPddnSwmREAaNrNrEkusohr6vfPg8D",
  "key21": "2wUr1Lcxa38xgHR24HAN6BY73GqY515pqyoxHNY6bPzRjZZRsH3BoZpQQEAAzR4WRppJS9bkdtY21fh9Y52Z7tFN",
  "key22": "3Ra3indbs46p1kre4AsecEzSszMx9T5hnVtf3XNDpDnwU8jrqS4djoJdV8P6rxPTfYArE6J5urAFj9PsHauPKGXH",
  "key23": "5YK1rQfPobA8uYVaQyitqqzHwpvDXpoGXZYp5AxdsuZsZjXXXk6mErMDJrCBytbTjKyMtmj34fQtUED8uuEQEsWa",
  "key24": "3ZezkhScrtY9F1PvmazAG6oyrai2nqQb7RLUCmZGhTNjTp3Jm28B8MSDHB2kmaE1JBaa615mZDmaxS894y6CCU32",
  "key25": "2UwZxoVphbFcJhJwyTMkxXgYs9r21BP8xXCWADoSqhuxku4bSU1XFihwLBM92HJKQQakK5pCcetBUHT2HsQZuBgo",
  "key26": "3wezffDsB51atJauLwRRGie3jTwGXbuTZwn8HcygYXBBbAt3neHtj1LqbTHQ9Yr24R5uWRP3iBFicmEu7GDZkwtH",
  "key27": "37p1Roq39Vn8NT2PGUSCAk1yjdT6seVEjrp3qwWiXvYmZ63KYU2LErK7bR17w66wgSngSJQmjFQP7rsV4eqnsfcf",
  "key28": "WA46debMh3qygewHVZQvvZ2FypzWQyJywW1RRNy3kZxunH9QuvvhAFsegyC28admor5pcBb2WzoZqpdmv7bK73N",
  "key29": "hhCW3J5LDLwbLqTiottD9xkdPPrFmG3HHyyW67EyxPbC6rvDfBZeDifBPbdz4k72oradVE1F4JFPz2gQzGM9oPw",
  "key30": "4ShXXNzRgK1qNpfhWqb6dG3cguTEZKn5Lx5tGsh7feHjaN5aEsAxgh8A5qoDvr15n81LLdNzeDAvAhhaXCYL2c9t",
  "key31": "We7cREoEM4PL3DirV45gFkEsTofTqqtnBGSoKzWFPdoayfGzqwFeMsr3mNiux1mh67g4xvj9UCsFav34vV7YQNR",
  "key32": "2c8s4DxFodtwzicZ6spFnMGLbVDsUxyumG1NBoLzjfaMKpWLC54kDBM7JHZcZdkK5pNmaKDQsoWLehTNa93qymk5",
  "key33": "ATg2x9mhFy36sxmb2ws1pPbhJaGxxiDvDeSH49YsAMJD2eFXwdcTenYohzZKm5fki4BMwbj5Q7RKr4mDhkkFfdY",
  "key34": "4bf3gfXhUiGTA9nxZDRJZc3kfAsGFJiadEAHMbVvMLB9ATPdPq4e67sabzoRdmyK7ouQPLYLn8CJFV6K8qApLgF4",
  "key35": "XMbvvUMPQ4Lz81A6qRwLmmUk9CyK95UDuZdFrDeQo3HGGU1bWfcvZ9WZ7buQnFhEt7huispd6TdLV1Gocoy1obW",
  "key36": "2UzLjxH2JDQxi6JNHyfH6NB9Lzq1R5J2TdYU56QErgVr9fywHV9mSKFSHEUaEU1eSbVyShLyXcyigEBiBwSDAg9K"
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
