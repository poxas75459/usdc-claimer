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
    "9o8jfd6wzo8YprZywBMz82gYrhWcUGSuRTsjNtuhdpPmTzuj2w17taDB5qv4f3SaTdKQ3e9H8kwTw2xSRC7B3E6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BfNtNdeDLLcNYPNcCgWcFwPQhUhntakNk311MSR11uYhA23FeqieRUfdjT1jtr1UEtniZEoS3rM3Ac2XfB8nhdt",
  "key1": "4XG8BwEJ6SEKFRP7fZYKDGimg5eAFZVF1ZYavVL1wjxatjKB8QdMZAheDe1e7kZwPyaZW9Ni2Xu71WfFSJ44GY9t",
  "key2": "2CJTSS5DjddrCwo5hKa13zGo9PSYSNh7AvqD95wRRkTiJnLcrChNb2Vt6zPEm3ut5iHrUF7gFfPMDoByrmykD3r",
  "key3": "4KJhWWdPnmYn2um21CyZKWpefE1Zx6qhQDjeo54jJjGNMBEhQfAdcbsvHeHZvFRwGRRTdtMU5eDcehhNupcRELnY",
  "key4": "P3qz27PdeTff6sK5tkLDdWZsUpKZipog2njV6jCWkPugzHeJVUke6zgVu9HxEybbTFaqHq7os3JzApXFnRCLLDU",
  "key5": "KomApJSZBNXz985stGFjFfE8RZyRQ7rcMHVEjkF7cnQvdUzLXNJGQRprNkFwtFnz13784QR8WBurQ4rapRphCo8",
  "key6": "4gVg2xrVt9kASbCQHfrJeiiB7XGkzz9Mb5taxi6QS8fnuum9v9B8sNBUaVX7Yi2ujNTBa7H7D8pmeqKFjyv91q6W",
  "key7": "5E1h23dZz5sMnPaK2U8J8YD5AorbdGp7M8wN1AEkdGgf2sRTWeLxV9evShSMPDy1d8BR3aA2r6k1F323b48yD3ha",
  "key8": "7AnhezXErPkdvkrdUorHcW1LvrViT75joXa9VjskPBEZCp1CLqewzE2HAjtUBRds3FD68iM3jssU6qD7fFP6Wty",
  "key9": "ym1tYiYfBWRwzvuF2vd5aaShtqnHdbCQrVm3TJ18YPweaamZGJWYjfqRFpGtABXs1HyQZmWiJGtshDYQBTWvHRh",
  "key10": "4hcZqa9yhaQt2HV8WE271qvrjFJxCwzVT4kUwrDe6bDJyFba23a2dFtbDj7kjAed3QMpXeDVs7UsBdLRpuoka8S8",
  "key11": "47FHAogsxLMDuCjpU2wwpzD6BAdjapfRXwEry1EwX7w668f4t1eda5iy3ddjVR2XMDi2UzcUoZ9thvtmex5touDj",
  "key12": "3GCP667Fj3qA6bnyQYMhE5dozkbMt3VFuF8afDgxkiLk9Cud5aYSDES8np8ppqEbAeh5aEgJodsG4CzKSnqYFb2B",
  "key13": "NiKmZNUf5wg77c5nnwBcGRt9D2SAt13HnJwDVuWWXCnUxwiV9vEngfjomYZFUoeXK9vr21qSWDE3AfeFDHnJ6so",
  "key14": "9cJCYeoZqtENbdDoMp6DNoW6hR1Dm6pPDqUrvdbNoktmTGWKABmNwjFLbR1ftH3DrPGTiZQacnKN7C5GN23TaA1",
  "key15": "kHsDDtqKzhbjZzjjH83v3Y3EAZd43xBbZyjv6yGVQoVh71i8mCQggqmVR3QU8zQZ34uokECiM28MsxtmtbB5yiw",
  "key16": "5SauNcD2ggxwRxQLRjvpc38S2MKCe6BYNu4T6xVuQcYsEdiPw7EgskyywGr9MHzS6gE2dst2evuTQRxN3LstNKV4",
  "key17": "5gRpzFeDq2QWcztpeRAje1XvoDCMHjbsMY7d3s6YJeXAArr4uGqnnZsVwmkcywdpsEwxyRDEnhMUaAPvAJcTwNuT",
  "key18": "fubGaqWbzUTmNidV3KkPNuSJ2RhwNCjsL6xfmRQxneDwHwCnfNvnMehmLqeLAze2SbGxPtf3jbntgTMLwnexeF2",
  "key19": "2ZDEve8KTYFNboNhKKbA5garrvgowkL99tdhPLVtLVvPs4sFKMi9Ydr2cjCWe2Q7rdENBNwBuxZVpEyRNH3DnugW",
  "key20": "2qE7sXSv4Rygnd3dBmRadBJaw29hMDixMWhBXyBCYJ6QJFHkwZq5tkYaVX3iSrnQQzNaJLK8t3nsufbAapghwos",
  "key21": "KS8jercGs1PKSZhi7P3Au247H5JeHmDYvWQNBkiDpHeR3zJG433ZgkZq2ahYpgqFA8MhAycSSyXZP6Rrrj9rKmm",
  "key22": "T8HateuUGGBLs1AvX4Dt7wBHQf8kyLPNUdLa9N7tzLdfNhCjijZnbTKmFQGeV4hSa42NWHfTA7aQwAyDqLY9i93",
  "key23": "gtVfy6Cc58BEvPnpcQ5qiY1KtMA7CYm79eUnTmauMu2cTMYKkrcHnieFYhCU48FDr4ujKtpTuPJiktsJBFydEQh",
  "key24": "5zmWKgXZ3Qbqmwhg8EVD6hyuVwaqVHxRqXnNL1NUKmeGX3yQnS6R4FTgrj64oCKCzJfeNi2BG2kDKtKxCm1pFijC",
  "key25": "EaABxpVQdZjwerF5nyvdFTKkHP95LYqUJh5qX2CR6dgiGJ4UMYfARJoTSDecaGiBKHXoYV6LmestghMSHBSzBZA",
  "key26": "2mLLQGnvcmVZgqzRxLPT32UEkBj5n1KeK24sJAvwHkV7qcSnA7mF2Rd4jsMbnPiV3HHuykmECB3MZBUk6TEdb9We",
  "key27": "5ktfgbbDZfRCnrvcXdBwbEudssvLuAKyRYXsn4qSSuz65owsiGopdbDkMxenA9dtLTyRQu7HPHKQsgtvzhaM6Zdv",
  "key28": "DDyJFiJHGKSG3X8bgJrNPP5ZyBc5y4GdWpjpRMLaPeVM9k2kiR7xddsej9mQfJLqFZ5KXMFhb5wPCWaqin7Tyny",
  "key29": "5azsGz32CEHRLzoTpWwvyWfrvvPEtfKZoGnhLsbrCiNC5xbbAfB9zfmkTQFctE4qGJfGDgBgwxmEzAxaPwYcvEMf",
  "key30": "4Ct7et9ZV9fa8yi1uogG9PUmffX96nKCqYjxSgY6fJe8GdDbS5g3jqn893paazAbv3XfJTZe8w57aiP7GLYW3YXH",
  "key31": "QsRAKZCFmGUGjdzm7caroF1Ux1TUxQjxbtGQKsWCW34vjFEtu338fm6C4WwX23UQEyAvLmYnTdHTQ8Gpu2Sr4sZ",
  "key32": "34F1bW9RuDC3nJZi8vCQkPpYMXG8TvCXWDL8UhjP6kZYnDnyrCEVVt7ud5LkxFpWEJZP1BcQs4wa12NegqjBG4mr",
  "key33": "1ZB9xTxYWdz1KDaSQD8V6vQHRNXw6jTm1BRNxLW19dZR9EUrjeGiEaJo5ATx4pyh6MFaf35AChjTDeEgSJRyGh8",
  "key34": "3XCZp6PTndDEQr59N8DaXSGgVKzWLnHBnovhLdhgRPBNL6vKFLKZgbDxoXz2cc3ibm4gyhrnBB3Max9yg3KQvn11",
  "key35": "RgodqNjb3diEVnoiH7EeaaLWDfWkyT6HyHLDXmzCijvqupQb4ec5H7wY3p1oum9EPSzQFhvLkKXg9JJ1xqKZnmr",
  "key36": "272KV453qgaVXe7cUET8bCZgWMuaq7PEJDraBAtW9uqmJaEbyB4ThTjRNJ4oUS6rNtSpLE4MyqzmNYpDSUQFDEJJ",
  "key37": "2Pm7q8KTBw7a47reoxdN2rJESWSKEy6v86kv1YVbEfq6GAGe7ywCXhuEBGQZbuoyPN3jNCLCtevGFUfaS5RNHioh",
  "key38": "2VYnS9tszqNTBxu1NFpEXtBj4REKrZGqJfvbZc4tuFFtoJvzoGqsNo3uj1URh3vQfGJqMo7UFcp6DC4ux5MwaNhA",
  "key39": "3zqjTQnQVUJLxW76GMYxaa9SPEEKMzHUrPQhWzhH5CbCJTCmLNcAwLRhqcgc1emtwGUfNm3ezvyAnPnogXoiUX5R",
  "key40": "erMFiZRAMjPwiSSDvjWAk54QE86jieQ5SxC5jjDLaNJiAXU38eGaeU1ex7w13uZQpfzddwX2aopH5MLh4HkDuzs",
  "key41": "4RYqYNzDnZeWCfwLqcvNVZoya16VpbKiZitUb5Y4g61sDonnpEr1PKMm5Sbt8QmdutFTXQnLpJ8JzNhhrXSuDPmq",
  "key42": "2RGj8hAgRzaG945TwSyJgnX3b5zpKx8xaJ4b2td3Cu4vnpAzKdQTYxFzTCBdyE5yZCx4UFzupw5yTT8hti8WYR4t",
  "key43": "2NuXmDtyTR4XXouky3ah19VVfQayK6X9kdFY3Z8QVKSR8ThUn2attk1fV5nKMLwVhKwFS7fD1rG6m1QYBMArd4Kq",
  "key44": "5gfuQvc7T5kwhWWxv69s7DSr6UVYV2kSjKtqMYwZrqSiRPUhAUdc4UdWyT4X7EvD9Ewsjdu2aYpfiW5iFvJjsXVP",
  "key45": "zvV5FKax3trMqVM28B5VESyAf2R66WSTngKHnGjsu7f5asmJjMyeJgcayw5WGoHDgw67drqPNB4z2NEYNQWoNVk"
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
