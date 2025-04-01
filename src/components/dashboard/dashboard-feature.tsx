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
    "3EuiyWBQEu9CHp1PG8Hxk37k47WoaDY3iEheuFycfjSU6Jvyp2zLKMh78f4RfkE8YHCZaSSmEa719d5bMQ4FSr5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "621w65iQ4dihmmq6McW3tCf2unJPC4LmVqRPNsufiaLRMDMb8As4zswYMLKuVBbRf7oEw8ZyG1oNfrsU61ZY2ZiJ",
  "key1": "4y3qabpvDyuNaBJxWSiLnGXHAozQTRBytSLci6LksYiov6MB3RSzDxDosGAbPm6hHXSkNJJXDrmLrzi1zwAajgsC",
  "key2": "5sVQmLhujpyRnt9BLjTih6MYt6giPzF9UUsEBmFwRQSQWfntkhhXTuy9VQ4maW42iHXQdwzbCQkGw1G6zWUCv2a3",
  "key3": "5iPkvQ1R3damDgnH2YU4bctcz3EZDnWrgTqi4Fs3R4j2w5cQgVKt616K7nyEjW8mFd1CGcdTwWZbvGMdtDk1GGoB",
  "key4": "4uYjibZe8EkNytzQdnqqXHHuziGZTWjDzYvkrrQTSdhqYxxrFrHcdwc3XiwPwFRydKwBgxa7FtZyVerSURZXp7Nu",
  "key5": "5i2TJAvnPTGpihgmXER6NFurMwMcU8UBUcHUNB8VDj1auhah6HNQgW659wYAV4CKEMxTjFbSP24gKuLCf23bkZWd",
  "key6": "6SaCsxdxbekWzoWuc2gokWQzV9tQLe2G4LqV7QspkQFbKhyVHTWebj9AnqjHyq2LtTZ4Dcr4dEvUBcG5jCZcbFk",
  "key7": "3rewrris3ZUrk6EDBqa9F3XhdKgiSHQFHND71aAyxyqnDKJ71FZeTDCvfUieiZWGS8AG8ogXH7WDCRkPWmfuaEZG",
  "key8": "4opRSF8Hcx2JRn5R9Ak1zbFttpxjdK8K8xoVkfMRMc2JHVPyg1XcsStdhe7GC9gnb7wPaTLsduZRUY7kNtH9RMxS",
  "key9": "38qXynPAdmPPhAwnJwve6xQvypZicrtMrzM1xDvXtARcvHCd6fD22eGWweAtpjWWMjeLvDWEfyxEHokSFJrZqyjX",
  "key10": "2ZooQcLUkNa9WEMfKh15fGydMnPWxCzsnt3uer7CHZCABeHosy6KZJd393CMiZXQuTTdFHwKmJfoFMg8bxXrShfR",
  "key11": "5mYtFWaUZLnynunfeGzB6R5B5XERiFpkasTrNEnhwXMqQRPyCWAZTWzFr2schWDaKkj9JExWHDQQvEtYThE5aAH9",
  "key12": "5GZBQuzj9XPBiqc5yv3cWHvxQ3sdKyN6q2ZiqtoVkVJ7sZx2yKCGpKUhLXsFYqzvvpuSsaDA9dqzBWecU5sUxuap",
  "key13": "38QKKV7pg6gQo18tkrj4SEsJAGGRvfw3pPWNzAhKF2r9DLfu2K1BX8QUuA7VU384PANfaJjYp9YGqw18oyLVbu8t",
  "key14": "5X4k2tB6PPWe45ZQbK2xZRVvDgNPijwKYYhkAwpCv8XnpgNtPLd3RSqFp2mSdXeDr8u3EAKXWu95ismNVbGzcdzN",
  "key15": "3QnE5SVBZ9oTUbGrmzPhSJbQMTHtshaG8uCEXVLumQ8VFtSb7PDZNSevYREAku5qtD3i3d55Yy2oeWTzR8hCijWh",
  "key16": "2kWaH6m58CuWPNgqbpB5hAVTHtaUXXKMvU6aqfMPwTFES6HARu5HvA3UmmssWmzTpzk45UCDBDRxiiVfRihSMYkC",
  "key17": "3t4LdUfbgNPiZ62zXKetM82hQ9qYGyirTMyUgVEvwA3APaDatXJiaczToKjv5eq2MuCfyhCesd9FKR4guyket5Bx",
  "key18": "2x7m9gVWo8Gmw5UaNr5dcnjpnhejBMa2gauDZRGy4i1XhaBumuCb8gfk5KXRAPG2r3acDrhN2VitqFV1FQ9L8hn5",
  "key19": "5zv5C7RgoXVr7MuZAtJBSvffqHW31FBj6MyBPtUNV5mkCTbzKgZTqePPs9qgCDT4zLrcr9TDKvFEeD4QJTAG1nqD",
  "key20": "UjKpRNXxuwHJcQCnXK7LiFWXHjojFMVXq8jwRH6gSajVi2tDxkMzQGoWu8agd49tZSSRLezxgHSCnU15SKigs6N",
  "key21": "4yDyXMPp4gvHrN2JyycsYpGhDnNZWskvS1fVMTyCpzutKnR3m6HsczQzKb5kYCBXq77ERRgZFvLk3QnquAM3J2nK",
  "key22": "4ASbLwHrVbQGu78xWEUe5hG9FYGQM21rpQKY91aXj2Dgq6DcmbFhGaMZAkvBdZXLZqDxnwR4cFXVx9SmzGfechJw",
  "key23": "4AtPNpjT5ebgKTrkTHsme9iGnquEEBa3tjzHyNNm762vaXE15HzoLwXXJuG4HAQc7CMP4mS6ZTeqg5nKHyodvVrV",
  "key24": "3pWK7bo6rDuh53Hr4CgheLkMXnerZeBwBER6y5pPcmxDtaK7ATtEkyMy29JokcAHBdBU4DTnCQLf8N2vTjwjTfNK",
  "key25": "5pRijoSPRHCWzdn6cRuc86J372T8f97RkXyuvRv1s3tpfu8dcksmYTL1CqCeegjA6cRW6HWSXCZN3BeqaZA5UMeC",
  "key26": "3FRXDgq6gTGnVH9D5ioZWom7Zv68gVmY7kqPxyy6d82YjN8HxmPWZDDDZaycbJ7wUWL4FcerE2CvhVzF1eeKCqnH",
  "key27": "2wk45fDNWc7rqRNs1VBG6nBtRt8Vmhdf8sEmsbKiKy66iQfybJFZ5841MuJonVP7LWm3bnhY1YQKtVCSKhwujg21",
  "key28": "24UGtMNoLaLbwmPESx5ef1DJ4i5JFbxRRdTHo6HWqv8V4i5tdMbFjzeDfNkwVEMQiPgZbbDbTAmJZvHc7Cggim4q",
  "key29": "2UriuZaxeLnE64oK1yJGtxSTDUwUwmc6mDRieTsHR8kytULU9MaaeC73KY9PTqQa5smuecXZ5vQ3yhBsUyaFypjc",
  "key30": "3fh3MLoFNiwhV4L6tKmLVjLCKBiXz9UidocqpDKECBDfQ2tqRCPi32t6x4CrVpiF1w61FW8bfodjFprSTXDkQqRq",
  "key31": "3emV7cfuzmRLTRpj9yF1cYW2xnaYq2KcmL1BjYyLQDmu4ziXzuMya5faURhGa1TrDAdfstWVAJT3qDqo8i8vcz6Z",
  "key32": "J7NFNzrL1HuQjHwWAa8uyQB3FLMZ7vTTjkc7eWo17CrPz2BDArJqDPVFPjQCDAU9jwgbcvwNccGV4oTTJ1iyi53",
  "key33": "2U6AHWQNd5f9Xmnft8oPxRRzArDBeTdiX3zELiXKP7kPYpoWqgAxPYCjkeAL5SxnKUCrJDbwHtLCzpY2q3W64bHq"
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
