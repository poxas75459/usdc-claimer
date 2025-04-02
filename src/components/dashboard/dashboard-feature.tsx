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
    "4QQDSXGmFov35Fo3TawJJgRztsoo9JiZdFj39ujHVqXg5GhTVaacppsfFjhhyQ3h8tq2Disy5kAHmWKo8jMwZQAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vxixDGGU3f1VtGTHykYrhkdXfBYdW6uCbxdaVwfLgeSsro3h7SeCV1QUs2RJJxjZwsAHB4yLN5JA7i83gW1KUhm",
  "key1": "95suzwvE7TE8z2wj2BGN2rTXTp29cyazJVPSyMP22EDSis5z4PRScEGQn4fQycFqLicsx9YTM3jfajg1YnCDfuw",
  "key2": "47rtBzMABbiiZ21YPCY3u1rENUXviSKjwY7Ffnhcf6xXDepyQSfLW2XcmD4nJwts5iinTVgg9UWJszR9mRfXP6Je",
  "key3": "2ngxrLaBAWesdhfH6DPB1b1f1JAE6kFeUSyQ66Fmft2J3xy85x8e2JnMKiSqnCgEodfu9CK1AWUQxLeQ3BACEAcw",
  "key4": "4Xbxioz5rjYUVciHaQfV9wuNdk6V8QXgDMcL4WdwT4damqY6HE59jBN4ZhpDnV9t5YQqPfAZHesAuMmdpsL5yeRz",
  "key5": "5rc6RBKxrbF4W1aVTaqj2kVcmXzYyTmtEPPy9Ef5U1SezxrsFqy5AnC8GYGg6p6MhCFZjcARxsiwjUdDXxMqN9L3",
  "key6": "31u35fd7AsfrM6pnE7642B1JRXrAyYZPErzyCxbWpAeVyAch6TtCCt192ZcHiN58UMeTfgXEEZ4cFo45BEvoygPW",
  "key7": "5aFcGGQynbTUyjLEVeYqNqjjupq3pPshJ9QheTVJSnhBo56mCN51zGmbmvQ6dZd3CmbAtg7ASHQzV8K3ofytRxMq",
  "key8": "4EH2B4T5bNSRKLNCwrfeXtyX5zuWajXGBBNoG2e4AyvSCn8zqkWdZ4Pyku84gXQXsiqtK7Wfwese7Boo4Fr1LpBp",
  "key9": "2j2AbZSxuTiAZLKzKWau3G4uZqxqwVB4WBwPdA9qai6NAF4UsxDrmM2x1RWn4tse2BNJKGS9xNV3zJNDVudo3aBa",
  "key10": "5g4BXzMkmhtJ9gsJ86B1nJpzGieT8PTBEQWCVrcbSUihFqLHQjMHC579rgLDqjmiq2twZF95keky7aMKgrr9qzEg",
  "key11": "4bR933J2DgpsAkvPQDCkweDQq8bePepgMyc7QYpv7TqyBakbYcsb5yWcqbWhJBsTZYoGndRZAKpvfFgrrCjfRkYH",
  "key12": "QPdyLPu5kUuTDrYYZa4j5VjAKv74uuF6pB8UP8Kn1cJcLxwmb7RDk7vZQ8XDPVjg5jLEHbTTA56iotwEa4mYCQ8",
  "key13": "kntKqP2XkPQuqF54q8M3KmTj7S7Livv5fGEg5m4XzxZ6SGyqsiyc6o1cMMoQdzk4TrMwYorS8VvVZWkcCFk13cM",
  "key14": "4zu4urrR4UPcoHMVu9pLrrECHJxDhLo1bU6Pg76fB9xgXV1Gp4GWqeaHYjV5SQvuo27FAsy2jLHdsFmQPVWFRfuN",
  "key15": "6ehmRBqBYd6j9LcRyuC22xN44TL13bPJm1WWnoLqThXGue3Z9kZAjkMmzVK8YArPsn2kHbdqBE9H1CCGnKKm1V9",
  "key16": "4LBKGXAT1NT3n6b41KoUF9s8GPSbmP4GoWuS6UZXeBRqeTtL1vDULxNYGNSfnQgEwWJY6WagShvVpMWpWMi2N5Z",
  "key17": "3386dGc52k7TMXoxLurzkfHgrLSuKVKhx9sBATcNfNwxTnDz8oZiR4s8pSxyoDWhkHzNVfMYrjAks9u3dYDDPVLf",
  "key18": "49XJG4xGAFZdV1ZVubGzevdAFCdJY9sq3i8rcXwevRPgrdpdKTxVPiwbCqKzvijQW9pqi3owAv7KBDemq5jcEo1X",
  "key19": "27aLMve8SR21Fhm7mJMUvHMxoE313qpUviv9Zbicoc8PiwfLeVWT9frR4f8dWgoZVgd5hVP4e4EmN3BNE8HYp2z1",
  "key20": "5Fhr1kJtZErH1gM5gZfV4XP752cVRgtUZXu912kv2iFn8QM9mDi3FnNCRwQWBqyfDHAh7wcUdRu3GbmmZgMvgy5F",
  "key21": "3Tfcm1c2UH8DurpVDYSU5VdRNbcFq4qyS3qRk2PGf84sRo6DL3bih2NGSUtPQ7v2MJ8RhBjjL3cXD6QgJi7eF1W3",
  "key22": "5fVxoAKhY4oYJCZtSBsErAbq4YxVoW9owHGLGnVu5wTfg1WAN27NDCRdTWGraoeX1fSG2ogRFxdpobNqRKYBBNfg",
  "key23": "3Ya4Ms9qr3ncw2L2rbMneRdhp9XMQussKg44UnVvZ91aGnrWjT1EwTATW8otFQ6oZZ7cgAuGLy6cgoai1871zZa6",
  "key24": "2YPxnh8wPW354BACx7TC7j11J4eKYLewhaaRGqsvGuw1VHUqnmetjuarRAarJa9PWuLDyUGwohYQmBg57azaPBH6",
  "key25": "Po7UXsYu26T9QFVrxNsQtxoGDaQdB2Y9e3HnB1qvJGtoshERGKkUqnhFHK5Led4BMw1N4nN1XLpbYaPvQgu7wfh",
  "key26": "ktjEqEwf1rpEaaxGjM9en26j9tXfYXxXcyCxs8NUwwhdyRTyZve6CptkYoXYF4wby7AAoujJbjdCnJTTwXK6Fuo",
  "key27": "5pFk5eXwtDxrtSCeChjpgmJ2KUfKNkXhcUXsZJC49RNnqdfMTEajkmUqDysi7r9HQabtnzg7Yubi8yf6qfSXyr5o",
  "key28": "32FXAzENntnsKxaLtyWiGtwC2N7dJX2K9ryBnGDdpQNhZW5dFjYP1r4yf2b6rQ4zYqhqtCxGEpyma74WFCz6wbH6",
  "key29": "62R8J8HvJjiq72rXFKNFXDCU6Nrw93KRtLcLhGva93Fqnan1DwH6Pf1vBeZeGazyhyqKhHEb2uVM6gdXhH3SJmyB",
  "key30": "5aFh7X7nrAXmHTP9fuJMcmxtDftUFWf2NSgagM3fzsQ4VSt3ezPpLYHZLaWccVKDw9UEeJJt55MNrbHFsDAFM32Z",
  "key31": "4shjwQV5x4ecd6FSLZA1aY9Z7sRkqL7KZN7ecvM6bXfdt4auCYAjUVCaaC9JXeCHwrZMWSc9K9zxs451YqisReaa",
  "key32": "RC2P7CSs2DJReW77nMBzaGXtSpg6ymf9RN3PkQMf2yYpL7kX3mJqqgLwFDU39jRKNNBpAx6SoHDkEz7aquD4rQN",
  "key33": "YvCn1m7Y93HXMhYSHadAcrJBuEYGuEpSSVuNSQrMptfqA6juZ5ReTMTvgWvopdhtWxxYLiWAGo7UmGfNbwLHpSv",
  "key34": "43SmLMZzHozTgW3rv9pKQexBsQVutK8uzB4aG2iWCYRsjvy8quNSie6xLGw54zEt162ZDt8hUjdXVYwEBbJEKRTY",
  "key35": "5BAPdKQdgLHzuSuuchmEc3K5Y3UhyVeNrop2o7ntgBhqT5V3Jju4k5nYroW7SaDkrpUrCDffamuycuejp7BuEZRn",
  "key36": "32Guk6yWV5YUEAVCTjjE8qnTqFDT1zLJ5FnBSHL7zAv9XX2wdTVssc2cZzuHnFYfj5fQLWsZcDbRRSBQBLJsWvVn",
  "key37": "uyWcZMZwM6optsqAuBAGc6oF5UFEgXawktMVuw2wL4TkqjANaEwP7Rgkix19ehbtYW1PwznuySRd6BRjgtpGDjr",
  "key38": "57iYvzy5qT22UVVMjd68t7ygW2Ja8TUYcpSdC74k3SBYjwcCajT24zCJnagbLYStcLVPvoD5RT1b293fih5mC8oM",
  "key39": "5h3M4NZXL1E3nE3XC8gCajW7xedAyyyLUBZEqaDoRkjbcUcSzKVYeSLBPzHM193X5WpPNM3ADtANLdv6GyAF9Fc",
  "key40": "4uGiRgBKJSffCcKDcXKRZvszp1dF4UduYEQUifBoeYk5jb9ZtPZ6CV6Guf7qPwLRbSpSdyrQ7ekG8PcdrdJ9jNQp",
  "key41": "26mdNX4d51qXBbcH5v7TEcqRrDqSkRDaNQJeJgwbCv2YLfZtwjwjLESGkbTSW4JTr1tWKm9hGziCxVmnGa2bgJXi"
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
