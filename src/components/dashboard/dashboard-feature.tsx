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
    "211yGuVGcqLhHi1tmetuBq1cn21RGCN3c6nZMnUyQ9g88YNaCh3pJRyCgXfMKu1LQZXeSsr7JhBkRNoLDM9jxiQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "psrNRXBTvuDJncUsioBZVCxSufZ1dt4dLHyaWtYmBZzEvh4Mk5ruSZry2kACLXF6aATspN27FFTgCJgLGxWBYgd",
  "key1": "3irkv8Kc2zuCCGKiZsJFJXqEwnTG2AHiFrgPvv2AXEzZpHat6GnAJRw8hG4jzjWPjffPGeyit9FGrrqwk848UK7W",
  "key2": "3TVpfg32D3pdgn3cFbmp85t4DygE3Gch72t6GcuLMb37zJLzwiAJntzkcwDiUr3LpFcoPyar4KkzxHi822zSLpVW",
  "key3": "gozncZYEQtcuZq4zashptPSK8EZRWzuQkUAPo1z6whwkgadciige9WokjwYKrgarUsoayeQXeUUzxX8kM28qeF6",
  "key4": "5newQBHAJFfo7pnTs7zuomj5zqtQdiBE2ZyvusVv2thH3Q5kwo59thig683jGSYyKfbssF9MwdjUnjn8dYCPaBbR",
  "key5": "3iPvYLjohJwv6P89Lfj1mseQsysYagXvfCy9rHhCNmfxBgTdrKs2NxU7fVEB6JFK2nwwQnZBWy8FVX9DFsMnF2wL",
  "key6": "4ueSt9hA9UmvZ5zLnALGoNRHf1Ky1CwJCvePStgGc2PmpH4mkuzwWUQrArTn4bNkLnPUX2we9ud2Pw1QMwVmoy89",
  "key7": "3H4858SuPkMqFcWSorXFD6nJjPhQNwQ4TGQKcHVZkF7JmBASepJ7YNv2MnLYLg5QsXdWZHnMh79umADpkJsVHccT",
  "key8": "57FjCuJcdju6W7FEommo7yAey8ic5rv648RZWoEdxSBZFV4stYbuxLzybEnmMfNmE9nyG7ZUkWZE2gmKD92voVQ4",
  "key9": "3bFfHgUiBKJgHHiPB3h1bsuiDfRU51ByssbX4PMcb8KKVw5ERFstGn36qKr71Su6dKLKSzMYg3Rje2zuFDjjejTs",
  "key10": "2Q7hdDsSNoQUu9GpBy315KaLc2rTxQXDkrSMRHV96tJKWr8hbnAm2rHYryQN2Sqbfm4MG3psa9Pwhc1X3WV36opD",
  "key11": "5cEhigJgcJSXnZiYwkQMNa2FeSjazmVC7sCfA4b2vxNBEAhvA1hng8T35NP5413K1Hc4voTUhhRE1aUvuxTEc7zV",
  "key12": "4fNkpAHnAFW7s3mg3TE7oSaEZMkYn2g2BZzfxYX1AfbL5b8KrCfVf7P2eDKe8vEXH4m7bCZsLnoprJZixJWk2twg",
  "key13": "2QmeEbMqNTnMc5ckJB7Jv9ymLBowWSKK3mBViKWWx9bXm1jnCUg5JVAPa4g4tWT8NvfJQLoVu5h3i3gfkry7sF9d",
  "key14": "57GMASx4JVDjrFm59rkB3odVGQ8g52tX1zYsN2UE1cMdtLeJA1gSGi8e6w6bWCdhsTnv6MN5hH8P6rkFgoy1nX2G",
  "key15": "3xB13mHbtyNuaesTg2f9d83P8SZWexo1dmTgTZDPSST7NbKRqhzncRBeYPafG4r3gZLuA8NEbEw9iFmaFdSmErtD",
  "key16": "5T59oJeYe1VgGuJP2LSte8mapdGswsXFNkNYhHQz9vCd896mXS3m7UoWT8qnxHREz7aj7uCahbMygMfqEsZeYKCV",
  "key17": "3o9QdJWHWeFK9xCu5CTBagpuqDGgcErRUsMXA3uqPV5j4ySAQT9w9Ay3csoWx7BxoftKMUTTzFkK4Vb2yjD5kQwa",
  "key18": "4JkVyAyunDkmDQKPbVDqxdm5ZaTqrzzyqtxHPpiH36BbW4819UqPTqy5h6jDY9uaBBPwCFDXgYnCqXCUpPeAsPZV",
  "key19": "47ccHR1oXfhcyYSmao4wiW6MiBD3NUEusQDNL6VYauRUCKq2iynCiRj3WRoxMasRGH4b3iU6aq5rPBteXAMzkgpD",
  "key20": "RwTyLcErK71Ypr1HUEQRiPDLzN4QGEAmhg43AFvDSyzn8iUprvcScff275izF6Wg7mGKnNaG5byKPznNckhgSrj",
  "key21": "29tDDc8cSiVxpyeLEbT58VLZSjTMB8CwfMePPxjjvwwqdjZ4SGCQaSQoyJxDBT42uDXno99gz3HW5UtQssiHr7UP",
  "key22": "4p5vv95yeJciQhR35rm9qxXUtyULiLcj42v8Pygv1Rx2naLHanTgH5UGqDSwc89QTNkxdja1fJFpHR7J845DUJ16",
  "key23": "4oadRFt8SBDHac9cq7XCRYeWsuCabKBURqYPpyKJqpYFAdCZM6rFZjT5Dq8tEbedKQQfvTdw4ke43fwT43SkZFmx",
  "key24": "56Mskb7cFuYVZ33TSizxbwuRZyM336z4WcQjy7o41YSSmxyvZprSGppUhamiiktQpMtJU5tJTfZChHtKAioEQ35v",
  "key25": "45MuADVXaqiSAHSmjKxJB2YxuSG8wfmEhEFwf4w4mW8LdDCfRG8VivZ8jKCm1zMFkuFYfJWNnbAY21vGEdR5GMPd",
  "key26": "31V86n9g1yLubwDW2pwYEouPSsdWxJ4Mn3dj5cjjxgqPBsNbMz992vMLZe7EeQmNRBNFDhTEb3L5uZq4NKAuXf4Y",
  "key27": "66p9gbqjumgekSorwchjqgCGLzy8Dg5T3SgUGuMqFLTSU7KMCTT28sZxq3e4up6N9Jkq9kbEW9TVV1GMNk8zudzv",
  "key28": "3kbzec41J1hBXokBxyBzAhXSdXqAJx9x5F4oHtKgytdHbaoupPyoKVCYVZo6cvbT6fX4ZGTakDfT31igeQy7vEWh",
  "key29": "43XFDKdDbTKjmGeHGwAFs2YoAnWafFrEVLqnxjHoyiJ8iJX9VGS8MtWJMRfjqrpfGeW3NpoWjXeyqG416hVBcQbf",
  "key30": "cZwLWaM9qqMLG8NhXyqPbesdqYZ5B9mMcGg1aviMmsef1bMV2SHTTJKxZDqg3NSi55bvzgp6RJasB84KbWP9wFT",
  "key31": "7dZXoQR3uTuL7jH5xfdmt2xLBxVpEPWep8cusC7eAy13D4VzEFSBWvsjfGJQx8C2tBjxqYcCxnugP1MgnGWAiQR",
  "key32": "afMZsEJ3dLjGDAg9sNQJrNNSEwvrWv4p9mcDMNppcHuthpYQ5fqhouwsiYm5VWUb8BVa5nscezMtYGeoN79nTdU",
  "key33": "46FwgJ87Jk8CBBuYnN6fnbVZv7wksBuZ3u2zcMYJHDedqF7RoWcShqYHCh5LLzCFUeZ2SUoMA6t3y8qdUaHp8nXP",
  "key34": "4BLkhcjD1JTZrzcXsZag8MJWK7SQo4qiop26Lmu8V131UtEKpeADkYBhzQX5JzjfsAGToXd1i9wJuktf44BME3TX",
  "key35": "39WQvS2UznkkaK8UKJYeJq5jpFTF1UUa3Rru75hzXEPMGY2Wc1JjaXpwiEFsLtqfx1fuSvdqYkaHfyjvUWUccfPh",
  "key36": "34sdj6162CjhB6JuiwAvCKwjf3qU4eo8o1EWJnwbbFziyNd9zhzTeVhmoJfLaKB49wW3TN35CaprMV3Uy8acoGjK",
  "key37": "8eaGXEeBC7ksy3bLN53tocPuuxvcmnTVyp1Jzg7JJnajz5ViLpDhz25WXbrD6wmHuC1aGDZ961YK5mDpyD6TDE2",
  "key38": "2qowtA694MaruqmhyujyJMrayqBniLaw45H9iYPoQHthQUiKXY5JC2A7UK6j4io72aFkN9Ume73SSKyUg7KizUdr",
  "key39": "4GQzCM6nLTyZtmzvmHJ8PrtVyJ8fHSezzaZKG5fmFkNhymGEV8gmZTVA5eDbdgnyYR7opXNMHcoof5QoAAd68WVw",
  "key40": "56wNCxobxWFVn8kAyw7CZ1tfirnfZAZEEnshiJ7uGx1sjTaAzifDe49CJZkbjV2vDpn3X3AnkDjpJUZ2e7t8oADJ",
  "key41": "2N9h5rCBzxpYb58goSQbU23gVdQUvyEZvaF3TuCkYqwaLmdzhj7itovvojQbCsLqzBymWm12DFC4mCzTFQsCqdT2",
  "key42": "jV3hSEkUryMGG5dcNijYVUB3qsxDMPgL5mQMRmq8dk36tRLUvipiWQiE7VTqyUT42tzAYFdd6Dt9EUgW11hYKyA",
  "key43": "4peAL8pHzTt9qKDZHsWRMiEiAw9vMFTzoiYXWAinaJgYgQDBzXudDpSVysADjC7W9tkF8CqFByeegnjC1XHiHT5X",
  "key44": "5YM62kq3Gpj2czAZUcpqbXQNAYeMdw9KrTMvYVJ69BmKNpeJzqmrdJqQKKyzWX89yrpgYop7LMt7Uhvtmzyfgf65",
  "key45": "5yKVBRjKPVspP8mB6GB8ADL1eUUoodtDqe8w7rCrwrdiZjcUqEoLK8YqvcRPfbipeSNWKB9mjR8Kym1NDsSUmih4",
  "key46": "3XMH16aGuogh99KsoHKcs6tgrQUUYsD3dyKf8fAyEqZwyG4JEMRX2TZJD6BCehVU5kvc3FjAkyhSzHPzmYBCpxvA"
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
