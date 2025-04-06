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
    "4pdy138RnudA7H1Qi9cXbB5nBYsuq5FoUQ5QRQUydzmG44XBDUtnHtezrENrU3BwXzYzzVqzVJH8DLi3GRk3WXvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UCbWBzDBY7Ei5zhW13zdqhsp3fFk6bQTVTq8Sz8UYdsVL5RyDHhpuejsA8dM7Bu5xkfTZyBPTKDYhHcLZghDFeo",
  "key1": "2dEuwM2KxX5w7jDZpBdnZGBvv4E4A2NRBNRQUvUU6XMcveMMkNHPCh46YqxZQ9x8EcbtgunueARr88HK59JDjYDL",
  "key2": "iq52vqE1kj2YA3QQSU7hnmrAyNuLXL9WJt98AnzVi2VzkzrBX9oMSjNVtnaby2qLQWryha54PKwwe621vqFY7CZ",
  "key3": "4aPvYC8Rh55yw7DQhKLCYTp712DBdZbiPu4eWKR2wdMTawfk9zJPWdGxGws8G37xrsZ6wZC6aYGvafM5JMZkCH54",
  "key4": "5TokmoWVQTPCknUDo6JK6Gtxnw8oSmiDvuQGZZXpdKC8GcrBWtwVXZEQ7RaXSPBWroML6koSmDThFKgN5xz34Wgg",
  "key5": "2FBRj6mNM8EzZj3VYHD1Lz1zfLVZq6FbAjtx9yVHUSr8v96oNXfGwvmrZNe2CdPEwR7C2wvKnUNpanZDxWfNJXtR",
  "key6": "5C6fBmzaGJhUB4gd7gnyP7t2FNMkk7Qbggu2jFWefp9F8GFD7uvk8QpfKPAUFSsUGuKMpkVe1V7rVUSkta1famov",
  "key7": "4TsmXPqT8jxVbMTdMFVKJGfScPDktRnMMiZEUyt2Y1XYiobgKxhN4JgKmF7USP6uWrArZ8go94mczkZmSkFC3RCr",
  "key8": "43QAd24hgYZfh9JQBmpQqDHVybeByvJgD75qMWb1SgkDSbQxvHooKpij4EKuD7Lij9yYsX4SM6hLPVxgW4EqNpat",
  "key9": "4uotsKd5rB9EdBCK3Q2ZnbN3d3PqyR4TJSBEiucm6EiBFMaQnhAuzowKWCtoMFwcTk2QH1DZacJfW39bsWYfuBf8",
  "key10": "3uMRJSjM7nr6LxokwP4GyVvzVjqfuffSX611qCLtmcNVyKEtZjg4zmQUKWZuHhQbqSCbZSr7dn6jA4ft4naRFSvF",
  "key11": "2iFiEcvW1JyyUessqy1R2yVgv1YH27j2kvZSBdJLE1o2kB2W4udQNATnyAw1ZohvJ9vWWH4foJbVASaUAiwGZR52",
  "key12": "NKAkxjCLXX9dvHGiQGPYUPQTgNqPffp58D1YdnMxmAqqCJhLcAXvRrhqntraQYGwAv69bCNU8ELESbsXqgYVKCc",
  "key13": "4uLiispXxumQgMZJ7VJiJDGbXnyxjwd3bbC4KyrP9MbjLd7WFvRkAJGjxWZaFFexySsQpHF3FArph96iWxicrsyS",
  "key14": "5Aiz2gXmcmd8hd4jS1mzce8ajV9Brj3Zt8QvgH4DhiRCEL6RzSyBGryubdCwTRwt4uXUnh9x9HMvrFrDJgfNYbSF",
  "key15": "y9NXYVHmDXYbkqtxzMustL4s1CB6qWhhVEknhtEKnJozvcWSvVb49CJB2tnN5ZTxZXtUXs6YEDf79mmZpRYZKUt",
  "key16": "4pJiL7m8xJox9U2s2a6xP5Cu9T5QbU8Jy7UtBWrrcW45tzvtce1or5YjFf6Uw67VQJ3wNcKBXtjiAxVZoV5EnHzi",
  "key17": "2DH6h7Ah1MR136SKRbfBzcDvaFRfroDxEb6YSYk6LPLuZayyWXFgkJJVjxJx228DvCuyE1vdkSsyoLduSHNrkzFU",
  "key18": "5p9g29x8MuAzgFHMW7nZW3py5tnxpnS3qmCahXggbdSE6AQngcmRrDpnqqP9cVBYA2uKce5KEH2MsfXvuaALfpbP",
  "key19": "3TgQyoMw8t4EsRcYXQK8QLDUJBEPkN5HprFLXDELLxdyafCzP11MQybFXjQsFvNCYo2vMm2ybAEV3SYP8u4cm6J7",
  "key20": "5p1vxjsxjgn6jbbgSgKVwWKSHawwHAVL7Taj1CgUzUXhr5UzzN89uZXYx1dwZPpR6ZmkpDR1sCqTgmyMv8SdXyMo",
  "key21": "2zzWZjJnzJANqt2Ubys4ggW33VwCy263ZASjkKbt74b2cfvEENsJ9ER5zMtkGznYPfwhVrTPMmdxSASAvEjDWA5k",
  "key22": "4AktZ3QdXGX2wF7CZYj3DCWbunTymmR22sJhrc1worEUmWub1GRzm2UVjtJtqsHdVvZbAG7zMek7CjSiP58C9Xrs",
  "key23": "5t1hF1H4vQSNv36ke7JGzHf1U57ainKu27HGaDxJq4mVwcKcvSPg8uZAMigurLkLit3zH8TsukXxmvB1ySN46KEW",
  "key24": "4RWVJLhLJ7y12DDo1zps6q9CvocqVLGUqjzdF69SX3bzp2ZG2gAgpM5AmevJPGUo5SbJgeBN2hq7YoPzxmLf9xiN",
  "key25": "3iRfav5RLetnNm5z5vPt5871eUsrfS9x6Ain2f9Vm29AEHtucb87ZUea4Txg6uEc56AMXxmBvic35neDTcJszev8",
  "key26": "5tqcXRFmQDpBzeY9uYGQdq2JEMHUUzMS2B7vfEXaVoyymfsPYFgGBCyv6gy5Udt8Ep2Fjaf5MS4PT3f41r4YjX8Y",
  "key27": "5zX9mgB7GfNfhEt6C7E4Umd63g3dvuo74bH2V71qBsqVgWmcT81waMqkpKA4Q54UsoCmQ7zdFd9GD3Gw57DdgdFM",
  "key28": "5rnoj92VjfPmCVUuZv1KB5nsfviM6fVA8E7hLnimyHeoZSZcMUax9tVQGDhCdVXWrnbrFJ1pwUDAZiy1JJaijcxF",
  "key29": "3sZ8jnV74ZnUd5UKiCj5Ac11Dr4Zz8WpWAUiLuAAE2Ff7uXM3SFkuzj4GXQw8LgGJwDxo6SbCQfvqM6P9UYfJUWh",
  "key30": "3Ax8yCmbdhXx8pSxLnPNKCaAj9Y9eExVejLiNzQBqsh55EyhB7uKxPyecJvFBbn4wVJ29WF1gcJm7HR7pXGibQdR",
  "key31": "3ShsJ5vbasg8VX214NiR8uy3Czq1CJrZBe6v8qpPsFgDk6Ynf3VdD3Bx6Zp1RUXajLzSL3jch71vhiGWPe8o21AH"
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
