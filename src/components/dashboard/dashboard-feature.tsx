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
    "255QmxMATKaV2MUzKN3qzewRbwWdbXGDLh8xLKraj4egjr8ynPfuxau2P25MswVHt8oEAFTk3ksNjwXTHnrSw6zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhAgPWpEUHbJ3zJcfFRhdQFCCbjPgPtbbrTbcapvkQAezWWr1h9hzJBSChJJqycQGQZVs4cz1QCxfNuC3Wpar7s",
  "key1": "3XrPNM5ySQXGh7x67Uak2NtnNgZZc9E9JE9Fq1tbt9modwEvTzN4FoXGPKfJFrNwP5VMsehPQYzPckEea3NfoTiJ",
  "key2": "2fQ8uqFtuC9cN7NSX6tJgYbUc36y9mQjpDurgB1Fq6c56yeNbLrepwHnxDVY85PR5PjowaesaeNCCwdvMFXPNiwM",
  "key3": "538ihTH7hBAyEmjiGYpGV4scG7Qk1nsznNHhKx5VCRd5jBwwMZUFJ7Eg19csPDabHzLoArmrZ8rnJHPHLScxgFBb",
  "key4": "5YJSunShVo7vXpEhTua8eWrCFafqiFMXa1fCrbniuk6hRjqRXECNqUj5CLggbsw2NE2x92r4uoziWQZu29ZXy9bg",
  "key5": "5KPPp9auhMzWo6FZ7UK1i2Rwx2YyxkZH7nV7y1D5SeuUtrwrPY1aCv8wDyrxgULB7Xj9s95yetTmT7949w2TyvtL",
  "key6": "4HPqGUzWnkmshvkLQVcDPP3mbiarRT9Rfi2pUhe4KNsFeg7UA8UUcWkNTVUgQ6rwy9rAsM22ANM6kbQQmj4PmFW6",
  "key7": "63hT6n42mvb5V5tVefShtstydfkw4DeVoQvKnt7FVMyHvFVvEKG4hyHVpdARZoRuksjGgcVq6GdLRJ6ayBMe9M7h",
  "key8": "2rijJugf4z9YzuPArYfnqcSaaJuSGSiuDABte93nNURDXK1m6LZ2j2eHrEkDYqjo8KhNoStM62jrjVwCQd2dPiE",
  "key9": "2gN6ZC2Ec1wvthCd9CsazNUtNQjkmXh6UBaQw7ChJ2tP53R2qdxnBMb2MaugEXFQ8XCoYS93cF6uBDEidcUQe8Vq",
  "key10": "2KwdKYBXKX6NCWxHXzzFLCQeCoSCiLJnu6EZfDECc7xbfxBZ8yS89rXxDs4YVBzAjgG2VrBQWYpPWnFFWjFHJ5RB",
  "key11": "1NcpKp7M1LpeQfUyyotLzFSHzq8t6AHKvgxLRKxeaD4ekboafb6tD5FcsJ6McCVKuBQzPT5nExHNvDzNeHrEZQ3",
  "key12": "2WNGSZozF3GQ9EssvoepbVuSvqtqCmZPoek95Eqt5ArwPBrtfBaRVv5sYqX3hhnV8V4KoUUgs5xMvpopb6YtEsXF",
  "key13": "3VRPwnbzvruXYBvZXJC6RfctaHYZ2Led14ffgnBcHnaB6A2tmyg4RrpXVJLUap8o2AZQvSTNvD6hVncwWG7czWeP",
  "key14": "4D5ZAeQ8o21DSYA9vexaWHyqHbxX5kbU6pxUpNUX3oKzFftBgiH9p1tuPpfZLJhA13VSNHPwBGTg4ueCpKxZbFcY",
  "key15": "43AsbP25DSi9tNuQUVyShcrKD3moFuACAn9KacgFg9Dfc88oFTM1xbnw39fbYxjf5PQndXKqgh7z5ZZdADAfH6PL",
  "key16": "5iw3Z5tDTa16g6noFqVPGoXcimhvhpTJB6J2gx4TFhB17MFR9DeCeNdmzHJ6zRH5DhKeRUzA2XdUij7mdbsp8qvm",
  "key17": "2ZpKDFDnB6teoiqP7Sevs9f4FR6kX22VP4NpsggPm4hTxAbJwFRxZLMWte7Mt9hCkWA1WYjF3e2Ry7qDXU7Jy6eN",
  "key18": "3FNcVsjsPWAWrrE3K1ZgY8XqSwiSyfpZUeyTzfxANQZrjJu9wpRo3m2Ma2TT1iT2Mgex28KNtsaEtBtRvDq817hk",
  "key19": "4dNKkY1XP4bRWnYvPnS3By9NEhAzZR9nZiKjJNvDS4ZoGReR1WvVgbxTRmpZ6YcKJCvDbfGgGrFwbKb9GAzyp6Z1",
  "key20": "2aG15RZ42Rr8BXsJMMTwg7oD7miBUkMCXv4j8eu69cLyWYgYQaMFhd1wP5pjRgHh1KwCazU63RQyBAL4JLmCukTu",
  "key21": "2g8xy39U5Cb7btGYcrtUz5WWTSQwxhLfamdTXnSQFJjfPmEwnQxemxFJUhSW8dUG3JhghNtfepKDz6PUsSNqzjJ8",
  "key22": "4JWdtaotf1QqHgmjPAeMDXXtZ7D8tCqLJQHccWC2zvrsQDjoQBFjo6UwKHnxPbLR8eTMnBCNhwAdjWF8Pd8wjTHZ",
  "key23": "5dhNvsKNw8FqRP9boLb4EmDe6gy9dzsaVxC7izmYzmG1SxcQDJ2RxtLsHnywsevWPqBTtCJbiVVfD3zJ4Jt9yZgc",
  "key24": "3b59yBVHdF3hoxAg8YroHPSwpr6comB9h8r9bEgtcmkDTvfvWrXNHBCMRBvQcJEBnnAnr5t444pCewa5Y48rPovJ",
  "key25": "5X2cSDTZe7mpHAJXycWP9dukDXpaVypuzRmtYK6utitha21WSKv8K9BujLPH41Fi7Vgp35DtvhvMcqLAry3HesC6",
  "key26": "3SAvRHAGPJBNDHhCb1SN35SVbtiWmkVRYXLGvM8KxsPPQXsWktrTAzesRzyq4jkFmWQ2U3MJEhyr5YUcj8kTid45",
  "key27": "4zuARnE5NJnV59tegahob47DvoCxit6qgeNuvCuTJzkNMLBxvW5TxRs7fqP83FEfuobmb7vc3WUzK8WE7JGko7pg",
  "key28": "4b8BfDEgWCYhh5awKXWY9P4QcudYb158xcskUkHjZ9cd6p2BCXFP3PB9xwEkEWHGS248kkrMuTBQVjJxe7tnS3HF",
  "key29": "5suz6wzWa2nWVpXFEAGFydpAZ8pwWXmjmTTi9QWqsk56RGgLMCwDsnen14g78L1tWBZB5n9rQY7imcC2f9j3SiNs",
  "key30": "3jwFk93FHJCxzkVGoJCyZTtiTcFZUtmgjj3ZB1BucCfwS4xNbH7KfNq7jewxtgyDyR56eMsBL4MKpaAJTxHgny4d",
  "key31": "5PEgkdB1BnJMsY2v3cAaXwptpGFEsEbRLfuTC4YBEuHDdNAj6rf1m8hF9EQdhwFkmv5mWEAtuGbPzQFrS6fTDxYT",
  "key32": "2qYjSNXcEfu9zdAKauC4zTWy5fBDJH4zLWiHiThwvsSLuBwV4txZnXuK7Wu5NU9fBrwccqqUVrfMMWHiH1SwJ6AA",
  "key33": "3LmpxYbqWne4b8KszAvsZCepcdMSfAb1erGLr5JkHb9CE5HKuruBxmAyCTYeeWbq4SL8d5gL3LnnGBxNbbQaY85W",
  "key34": "27kYwqWxyb6Dk84vizCTtXMefWPhzVuLJJzUmDMtngaVqyNY3SY69EAR3qJEWF8XpevjbhjTSqTcrqYMGcmKMQmb",
  "key35": "siPXx4STsVrJbnDLQtDrx9UuvyoMzdj5AE5EThUaAJmD3TxJCuvbXsnsRY8BCVY1Y5YhEvXkoWkbLbLBZnLMVAb",
  "key36": "612ixvSnnq9GBFMwhht7HNFHRbABwsy6eAqv6LoK3evzx34MqkRrimNjMQLJu9GRCRKH2DF1FmYVjovbKWMbj3G7",
  "key37": "XXmfkYpBCmmVmLk4JMsksMjofAjxA6HHifxjgNgUjqsK9vjedtAsWZPndgfWNJzP9SbM2ChDezfdsRTJNZEQ3KV",
  "key38": "4xU71Yw29di24SDkzpEHCpU4EYGrEpXRF8m3xX9BXShKHDM651jKAwy6628ewbhUovsW4gPbxUaeaGbizYToi3mS",
  "key39": "zzvmieMkNUrTBR8WiTmPUVGL3DE5FfeiA8QxYKbNwyEcPCUntiNEK68TR5Wcdd8fBGCEaL73fxqbshrZqUqVrNZ",
  "key40": "Uawyxqz1XjgMDMBbyATUBnv8p4pdvbHohKzXJh3RJR2KvE9KKQjGiHWyGW2PPh2mc76wuhCmYU3ueov3nFzht7f",
  "key41": "3cFGTE1Dvrnq9ojo4otoLLuoJSbaNQigqWMRm55V3hjaKLxp6h6fKfUa26rvdjbkPb7is7h9JKasLYLSstcqRTBW",
  "key42": "3Se8qL5NppBq4qqfzcg7Zx2Gaiu6X1qSN4mGmNsnW3M2GAyRaGz6fHyx9HqBhKpSvM2B2RfMAhywVbFhY8Ehp5JT",
  "key43": "2cb3Mp1jQ8X3RMiF5mu68xEoYkN3PWS8Rc3oNwSEkwXZQtfYkXKKbcifJpa2jHXqdkiPiWEF3gySB12F2iXCa2ct"
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
