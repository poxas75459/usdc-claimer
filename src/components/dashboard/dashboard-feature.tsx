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
    "2Kjoayix3vCKUWpD4AGzmcCXfDYNkjbZNVqEAWN36Q8yFZjpKTwVCT35xTPTCtDtUMCgji1k2G4HbLGqkhurFyq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DTuS8FJwghaiVpPdpekD915TTH9TiyVnW8RbrQxxeL6j4zvpzSupVVVHaPaW7gVxpRNKegBey5gF44H58N1aS94",
  "key1": "2sTeVH9Re7mwNYg3qVdPxBgx5KF4xrNbE5hghqrcjmVYqNugvdjQJdjWjHg2sAJW93mwKZVSBYJCEaRXN4unYiWv",
  "key2": "32YzpdSgMv4hTi82Kabuu1v2umYxLzaohFAywJaw46XXboKvzf3YYHX3p8NnGHuprCWJKyrk9vGAqcAJknRDEvKC",
  "key3": "5EwXQTWKdwZ4iknX1GWpeYhDczatYGt8j8dVCv2afHKNj9ZWa4Zr1AeWdxbGbFWeUue5hz9koHMAmSrVyiR8ETQi",
  "key4": "5YwaV1t31rXprXatdXKDbgcCtgiRGSmtXqT4JuMUe188u1Yk4GKgvvEK2pKHMsLWjXoQHQoZoKojoWd99HUGZJVm",
  "key5": "5FfV6Mf5SBAhyzRHffTHuEvLaXX5wR1dwStCdwTdBw4ZaZFNsmgjYE5h8xoavN6xzSSWGDRFQDzobkWCVvoZdfUe",
  "key6": "3dSqbsMcEtRf1WtSiQBY3qzSzbLg463xLEkp49uChxo2G2y34HSPcLbzGeETJHXLjCGw4Gfes3T93SDXzhgmQNFJ",
  "key7": "2iD3hW2wwwqGiD1vb2BhT5Yc9PiYjZ2VR2mBkL5iejwcuSTNvytmkSxvkYFsZSncEUYTKjJ9B9synVDV3X4zGvyM",
  "key8": "QchqtHxY3WxrGakf8ftaYJDCR9k1FoZkBjY5WLE4AGh6EBmsnMLwdmwxjNJi8uyGSAmuuBTkiqycJbKdDaojqZ8",
  "key9": "5pLv66GurP9sqV7RnK86wrKzvVzUDDm6qM1ta5eqMgQ1yyUnF6AiBy3UAjFFczanzrYLYBJ8nADPrqHpMMgYL9Bm",
  "key10": "cPDGp9TrMyaUVCq9VTvW2quhgvXFcisY8N5oqKat9SCMuwKbf2c2bkTehBcn4SDCKL4iMUFBfEdtmj6fiu1ADeV",
  "key11": "3mKjuWeaFswcCtoYau8XonhaLTtkm6kAhAV1UB3JXMi5gdSLobEt3bGdkFZNqbLxnzkNxP6AK6PDnVMbvPNrMFTr",
  "key12": "6QHXGXESUZRCiskKNpp4sqNsLHj5qpztoK4ihdgs1BzusCHBZseie7ksuxnGFTexCdEsHKaZUQBHHxfVhTqguLu",
  "key13": "NYaR6jdf8JF2WZp9TUSRvLQnj9fTVqrTxN7mk5jhveqfeecFTWND2ctv4b6GWQnU715A4rr1wxbqLTATNdf8oGV",
  "key14": "3pLZRMs9qVomy9CxERqcq9L6QjZ5QSoLxbxQSyhd7TaVcTHWzyc38RF1g6YUzMiGgYweBCXiLEPZK77dkAJgDKRw",
  "key15": "3cb53ntpbK1ZH7puj4NHu668LCKjbeo3VRd1urL3sJVd5YE5hYMw6GY4UG8rSAa254BnxtUnPn9U1PgaSUAzyHmG",
  "key16": "2VL6ZhKkxPFVUpwADmYerzf7oD4ogUd1q38vesfwr1LtV6VkVwMUfRzr6SHaWaXzH99X3DuUQDjBMDxKkGQ2Kefy",
  "key17": "5gJxRftdJXNaLoFdcMUVVHhNygBPAVETxcRX21CXoRsJ9AZ9fHTQmhKnNKXG37ugcTMiEqWRZvGKJDFF9QRV5m2",
  "key18": "5QHi1HMsddShE1fU4Cz4sHpRofQwhJJ4R9NYgJ3P7kV1TqghKpKLLvMKGi1GHMrCmviQqBHMpJb7X4nzsBwbF7w",
  "key19": "2ruPFhgkzHjAKLsr4BZaXVV8MD6rmNCMd4kQN92RPMMMihsfmSSEFZb38bGWJwt6dV1H16TZaD24jAvoF2SU2FRe",
  "key20": "fKcsVshhy3AFLFz73giV6u3W9AiDviepExym1xa3p35Lx7CsEa6pZwQpYNmY93UswBC7AZBvHTp8fYbtYT75WqL",
  "key21": "5H3TdTV16z2k7FwparnH5vTE9MNcfkKcyjpUMV9xpYF8wcs4NKHpmXRveN8VGpnALHFcfFUzQdRPcjuRVt5or8fn",
  "key22": "3dAuGQzj8b9soxndZKNDMxoQFZgk8vXwVmbkmjDmJT12gDBZT8FMZJk6rt469BFqjBztRkBAvKo2tYy7qLgG15VM",
  "key23": "5AuF2XD5VMdibCF7JArU4ZUpWQ41hwc4DmB7TVdBaiUZJP4x7fa9apGaLdknTVkr5ngNGH9yzbVxjUCyJacfDU9z",
  "key24": "TAEe7uVDVvywmKD7jt4ZR3mNwnZ8E8XhzBTsgHyNtyifYR2P1Go73dCeyWNo1umMCkn3juZLzwnXbSDufgrQtBu",
  "key25": "5ffAbZFGjnyVo6EEAU49AhcLa9n7xMht7Ky7GWu5htuErs16xtZZgM7VBf9bZkoA1mecywWL19PPsid7q7LhLxCp",
  "key26": "5c91bMh3mnxnoJPmrKHx5vj6HJvXEWD5VbAT7Wpo1yZshBGSWDmE5uVwEA53roa9JcUyVQdSZ8sTGCDuvRdMcAZN",
  "key27": "2n67vch55XffmhN9mo42qenmvaBiyrUdoXfTBT84H9mVHRC5EZPJ5dzesudnwf2sBYREbikXNtC6WfdBadx5vVQG",
  "key28": "4fSr7Vhe9JcshQp21xih2XuAME5UaCyBwSSsicnPgC7dbitPR1pracFQ4rgSNwCJvGCMUniWjzPSYDTKeHFF9urF",
  "key29": "3UNBgyJdk3Hjeig6LRG9ohHAKiE5KYZ3PC1Sm6qyPx4tcFmF2YCiiqM5B4uL17iWgu7MyUvxjap5rxugutdMw1Jp",
  "key30": "34MJCRpFb4pLfU1qYhYzrUSZsWD9XHAZiaKyXSjAFhJUu7WUfkm5gSS9wfvi8ZuCpBxrtC6BGXXR2xdpTRMP4ARC",
  "key31": "5bF8oqXYMA9LS4LxxjzcExtbjPJcFhpyBNzhTKxGp65xQgY3y9Nte974VrAPeYYqGsYSUCTgWoCeCh3A1L54Btty",
  "key32": "JRjdxVbUo4nWGHy9nbEamWtbVHvbEUujtVgXwVQzz7Ls5K9w97vuTYAzDEqMrfYpNFSjQ3tUMEBrkEBkf4Nv27z",
  "key33": "4sAWUddmXYcm2dF9Rr2Pq1upCPoZw2EkXStFP6D2izy6LXKXah9KgRaLoZFMctMt1PtCD4pGZWPvAkd7HVxNrC3v",
  "key34": "3T38HGSE3Cq37ZYMfRLrwHaBey8FXQcZWq58GqpcQ1xTzEZbATMKpxoj6r3dX4ntUc7BBNGQ5JSyRgVsSJeH4WkF",
  "key35": "4pAEQ4ap5CoC4hMninwzADWmLid7ysvshtRwtNNXbYirFjzogCdFnB386W9VRo8e3pdCaxFABHicBLTEyUNLXTq5",
  "key36": "qdaw2iXHFSv1YJ2fTyo9aLtCLJZXrWXby9ECJEVbmH4WQATQr9hmUebD7CN3BRzEZkQSR7A4bj3iLa1rKnHSyXD",
  "key37": "26fMQ5GoUpfkW2BGBAz4ou9QxqdsehMXoQAUCa6KpCXtzZszunAc9gH8YrF5qeUNmbxf3rcbNrEnLvrYKrhTEZHL",
  "key38": "2oDYiY8xdt6ex6JkR77RTomwcdahbekvqPkNp9BEBWNNZCYXXtEB3hRVwz9uSe4DUgA5ahXCAucZdm88an9z1mJi",
  "key39": "5brWbi3dMkKbu3MSoh8JLNK6TWgdxoPhbwEoRVpiSmrTCDrNehCgjBNJcXhyHbugFRcnuanMAYgVx8ZvqyvYgPYR",
  "key40": "2NSBWHWoBJP8dKLVfmnpuyj6Kp7HpjYtAsNL6xx1o7jMxZg8ECR6RiJSftA15rqwbVCshHmf2m82qQCNS55rmbDc",
  "key41": "4PvoeeTRxRRaMtQmEPuA6LKjQ6gDXcc26TrnwYqPeiV9sio7RGo7p2JhHhbq4apjGnnJ9EVKNZNMkUdgfzZy88mV",
  "key42": "3jcNfPKwK4VmXfzCVw4mbZvbVVscWk8DiWN5tJtGpmTzHzgwaxP6vidPC2qiPmLe6ykM1k1jp7LcyuTQHbV5xo77",
  "key43": "6S2aBJAU3iramB2rjeMS5ooWbbVoTLKPXnbk7kkSe7QN1adX7916NZgEdHAP88EzvH2LY63JgQHvvkBcu2oD5Kb",
  "key44": "LfDXsdu22XzsArjbgXrULmiGR1VLyKSfFY7p1G9tqQKK786JzXz7CjvMJzjugnmWNJZChA95eUqkxGJmPSUBHre",
  "key45": "5qaK3R9SDbpKDqcQ3RumTFzZoM6eCgC5zjmmYoZfFD3WxsyMf7PEnTQnZKVfQx5FKHJVY9fhbd2bsRtbN5HGVGPn",
  "key46": "2DQym3R1DMrmqB8je5g6r3u49Pn1k4pCNLBcVGXt7ua92JMXkrYCkYDQKBVFdWVoN7aEtPxRxLvhFHfikW7fhKPM",
  "key47": "67N8rc4bHxc4CkAKwjkVxH4wkm4uBMsSZaJz8Qqv6471BoouxdqRX6HHK64snwD3SDLCap96bGKaUJirhhSLpfjh",
  "key48": "4VGK35kYrXCaGaAVFRe1z76uA3DhZmf66ytu5RjCM6KJ89QD4X7CM4mVJ5UjgUXJqWQbQYQxaN9minvpF63Sbivj",
  "key49": "3LmTUfyyTf42j54v4Pf9R2cddAiupo8QdQt6yBZf9JUHpntZHZDz2zwPiJ1Vp5o9kqDjmzNpmYsKB75n334YvMGj"
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
