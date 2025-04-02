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
    "5nDYFq2jPCPxgui4a9pCT3B9sECdXtZxCPpU6AzMo8NuSsehuQ2VSXBic7WB1DBB2VPYSounRKwnLHBykQWZqEDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yMjutYgBZLyZVUnzS6ADJSBAKH7akxK14F35NiDPHxhcdaYSKmMfj5z16YQN8AEZzr3XFCBMpuL4dwaKff67ipQ",
  "key1": "4465XeyPdVgx9TyuYn8hCdbHK86ABPgRLQQB38QWSLBkQKg4vsAo53aWGJ9ZK2R9YC8RPueMQHuYXBucgpfK98vB",
  "key2": "3ebeGVtwx5xnwjvdZqdpfxSHP7AKEkhUMhjfpXzK53ABN8gYz6w9u3GU4Za9rd5bQDV1xK7nEWU7cRHoFjYqnEj9",
  "key3": "38Uawj4kSpn6cAuqcmDyYJDSKj7FxozKbifKZxUP7f7tUPXXacDLEowzoUg6AnAj9m3JGhxT1cKa515P6QzxbWYV",
  "key4": "4PMdDStSp7eWHcMm6VF5ZXuBWByB1daW6puhcXvrDhCLxs2MMPjPcQNPbHqm6SczaiSrHXHFWz3mKDJT2whKXivV",
  "key5": "2Z14MTAJJUDwkNPb5ezuCBowvNqGCdNDKG1Cwzt8PKmhCXHi6AZsBHviA4gXx5fd9YoLVRpqVfyDqxXhPihkWRVD",
  "key6": "3dQQAa6rLaJqsxcKDeHYTYFxd1LEzLrh6D2692zAzqKLuFY51ztRP5X3EYrba5jvF3Rb9158sdkyN6eAqdFHnTUx",
  "key7": "w2fAGWJP5F6FWfeMx6E7FJnkYSNLMZWsHVoqsrNcdmFbsR57tJ9HVWUa3nndWurxkwQMDgFfhiRQ4pfdSABc1cV",
  "key8": "3jzUzJgbW38C2svDnwikLt1uoi18F8rsr2wUPPvw8Th6vRSDaG6B975TNrbQSruEgWLXkj2b6Cy2MAdHMCW3Eqsd",
  "key9": "2eKeUhEU179NG2eKJwxemXJC74tKCSdP4rot8SVBvwW5kzZh1eohurk4VEkKQgLMuiUnRGiQpwto9KMCvkcu4mch",
  "key10": "56ycWTkVZTh3YEP9YRaz9MGZvcFcpWK8Gnj6S16nADqPDsps29q6r3L6eLEjwZk9KhQuyDapxnyhiGnVNUsp5UK5",
  "key11": "4YXfaF7YRbcfpKb1myQkRG5bpahZs9D5FxSx7f4kTAhBe2iZAqcRD8nPGDYcxWGvxGaE5z6HLocdagj6vhemvaFT",
  "key12": "2UaJAGRXCqXng6CKX8FpdkwVqbb51XGkWPBCd18NmLcCZBq1pMoJMzJJpAT3wVR5rseXwhFpDdM1VWKwd4Edkmzs",
  "key13": "5Gg3kUPxCntkcaZXUm9JDGWMHuPyDeFWRoHnmuxT9bSFVgbyDxsf4qfHfWQCgA7UU44UZu6S3KgWv5SUaUCjYB7X",
  "key14": "35jMz9JeZSURArirp87LCWZj66eD3NjGh6TjYr4ago8WQ7vjbjESV2bs3Dfu1wT47wKbpneFFZCvQgoW7JWJYgSC",
  "key15": "5mQMLFqkxqiwCdr6T22yZrvdboczXgiRegR2pp4JdKB43nB2x4Y6b6MqTPswk6LkCt2gPkGSCmgQyRgqeL2XQuWW",
  "key16": "3iMeHTbiWNiQiM3NCcuP5sRdGSqDBot9PHXj7ifesjHg27iGEwA3G5BZaaPzm1m425NaEiFzaVR3vduR8ReYPxWx",
  "key17": "2R2VZxYx3C3A6cNMPJfSGuvzNKSRbEe4N9RuS2bVyDLtwmvwCDc14HBh1M7QP1WPWfVpQgixRmwHQESoyHfwMrmo",
  "key18": "4ThKaq7ptY8GwWUydSe8WtE5jjCM7DoB9RsHafhm4dz3YaVTsgf31F11m14wGLom52AaNTNyfYyZkQJDgdYCQNGP",
  "key19": "4HM7RUdvgBFernyzfNeu22KMHvkK9bo9crQVjinqHnjGwc37iX7g4kjBkqhuFvn4PucCofGnC2JsT5x5NsjSQt9B",
  "key20": "3kH9auf2CQAGX6EoaDc1usFs4PvK5CGrWxxFLQVb1BF28uwbJ5zupzW22Hhs79b8ZJTFvrcVsDgezxMnuKtkfK8u",
  "key21": "4LnJMASS3UnrSXKELE5ZuF5oK5aNsmp1Mup68emGWhqpW6UkwG8Xi6kjcvBTusY18mUk4UdJempYgEuo6em1oJH9",
  "key22": "5TtxYESiy8z991BHQNHPBd9LzSaS3Gdvc1BvimX5EzEpjDpwydxtvaD9XvNkbsmUv3aYNu9PVTvsM4hxxHubrdHT",
  "key23": "3iC2ibkT3iHVSjMNQgGxNh9CTyfoewHjSEZYfW1sYTEnVRepnyoUojDTUXF1CNfZtzMcsaaJPgtYkh8Hpj8n5HWP",
  "key24": "5YkyfFDAUghz6PJHbHNQUDAWY1iFFeF6WP4LDC9NvjQheqHL4WWLfLorwZm7G77srFyNbucrgsUMyeRD7BFFW2w7",
  "key25": "5HNiAS82aS5LJTD98jpXoeoS3qT7GDoUGXWRpJAQtJSgx1iuDXQhGkfMKGR249rZdRdSgPoPwCGuMVtY5j3wAMG5",
  "key26": "WDCZxr8WohmvysgQrXSj4JRsACcxTniNmBe26qgPAC2kxdgGaKsWik34vJKrYpzYNXJwpB6xugRK8LGmNH6vArZ",
  "key27": "3ymgkRATGTut5ndtqz2hCkyyC8NgwcBXwbNcjDCiYSMH12WjYC9Fdm1upKRUPrpUALm6A988axYfcgrxww7C81MW",
  "key28": "AGB6zGjQn8x5Nr4po7krLBYHHSFhAaMYxwDfXQv1EGyQ3ajihR6QEZyXvFyWK2YLyMuRs2qNBmEbVHSkDjAeSfa",
  "key29": "cmZw5e28fhwVpuuPjt5d4QFfhYP5TERUuJLDVFz7jDzKFXt7AkqjxWRjdkev2irwtQdDxAHtz7PjBVv4yHBSCig",
  "key30": "3e5jE5txcs9xbGTn7oKuTSiJeeBgsZ4xuCWEPwsFRxgGkxX1yzjqbp36oazYqxwW9iLk6rwR1eX5MqJqK7PACvqg",
  "key31": "4bgPwBUshXHVF4HeuqdXMzG7WH2djHAWm72LYD8UzxAKzJKJYvcCz55V9Uvhtst4qUuJ6t2YLVWwsj8Kc9muvXxv",
  "key32": "3MRcV8S3c4uqmr3ic3FUMJf9XUG2HBphM7WEhnBdz7gtJpF71xdXsNwdL1jrVfgQgBGsu7jp9mtUah7vX7e2TLCc",
  "key33": "3VdFLLySK599vtJwoYqcGU5guGi1pRkUUd5cwEURsEvvjS3pQXEmssyxhSdLqYRRoLNKkrYWaYKLQDkitUP6tQMV",
  "key34": "66fmjQ9TaxwacLnVZ674uva15amCq6NjcvJbUTLsfJZSwPK6E4Y98PzZtQ4yfePYY7wrACbJYxofeRnxKnwpMo93",
  "key35": "2PxJWQA2XUMn8PHLh5Ekc5FCU5pdUZet2dvxu2xwexZoLFDtWtUo4mCLm3dv8ivLMkNwPEoR365i8ugN9SKyqVAE",
  "key36": "2Uz9jmZWggPkvkciSKSqTkw79iKDAEtWNUc67etEvkJQc7Kx3buA8rPSbGuapJnooQ56zuYC4PyEJkRDCfWWJP7U",
  "key37": "3q4qTbX7tKGbtCEQQJyR97KaA7PAfUaSoCMYaLUQzEjYpPpxuGGuSbbjXUBwBjFz4imn9FcQeXgjR26J5Z1QEBMS"
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
