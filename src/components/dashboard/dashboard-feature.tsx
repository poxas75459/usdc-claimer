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
    "2wgKTZSCu7yBUJx3f6ygiAvk85Uk2Y4KSMaV3LeAoXtBcoy6rkBZjqNhGnocDeftEWGNn3qpyXnfQca1bMVHHK6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zHfRnK67xhea9WFmyHcRXyJdjEQEXmHGmGJqhJoyEkgpKtSrytq16k2AeQVoXpd2T2yTAMPCbDrCBM9m5VJu3pS",
  "key1": "5nA4U1aenukMrBw8VrfSDR3k7FbrnmQdBmxLv7okd2z9NM3nNRb1zUipSsvCBw6k3SfoaU2mmTwtK1Ae8MX4TWWC",
  "key2": "3a29iRw33qwRdgNfZusy9iWD2bKQsKVYRf72oK2ajQsQXNyQwkHCTbu4obLwsJG385fLevN6nrjQ8WaZC7K9AFtT",
  "key3": "3RnhneupraHzs3FBHYJQMovMeznvPQkw5qhUzpBDSoYajg2s2uQZXtBH1eAUk42BAL5AFzQQ2SH8phCF3mPajsmZ",
  "key4": "KEGfmQgZZLbAtH6q3EmsQ1AYtvqdyf94y2AUpZfJYnqVsYUv8r6TumHcBgVFXfZLVcQX7pfw29BRsWoQbcVVJdG",
  "key5": "2hXpq2m9PMuJkjHCJmDQtn7f5ZKfA31qP2JbkyGtZh9ixhhnjm7BDG3ZFYsUCJq2Z2QR2B9KJ5sxUhti6RRnqLRE",
  "key6": "JVbox6GpdjB3YLfTjed3QMMUC2EUPgjsr4wwTt5cLhf7NTs6oExALdB8V6zXCw2hubBU1txNPyDQyJdkaWgZTWx",
  "key7": "47qdVcr43S3XMy34fKWLEf5ErBTx2RbYAYfk4SDsYDGxggnWrtVLmcDUG3qC7runwzQkHXVDhQcgCtFpAoS9CHvA",
  "key8": "3rDuDh9oiqJH3eeADBpimGbww51imRN8jC64mLqYaXpiLTAHqvNMJQJJdYPyHvS7YXruafqipQnvA4GEPKpXTANQ",
  "key9": "3trCQiJEGY7oLRmzVWrisNaLLokhYZ3WW3VYJEzdpg1trnj5P2XNKxB5gMBfgxLAnVdme8arAWVbUF6pGSEeGqmX",
  "key10": "8B3Ggs2EKvTbfkGQTdDUmJQiuBZr2DEWRvRyH88kw8W4m6NqQTpyhZHsh6XjQjeTPSM8g437mveZGynhTA7Zect",
  "key11": "2wYSBSuU9g8oDbXcufbJEuawH8kUTGLbkNp7p6XruxgfPbdqRzpvKqAhhke4U7Jcbqk3oa28YtBfQx9YXWUVZ84M",
  "key12": "3uGmBkV7ZqNsH43boKfdnhhSECZYppCW3Z1BG4TghnFgWqoxnM7pKzqmeE1bGdPBbMuburwcVknZpPH96nyDqWA6",
  "key13": "3pXwt2e8N37e8tEDcCPwjRbRUeC7rmebJMaWva6uvDbdsR6EPNPjNr1ijAUNVCbHDeeQ1nqnZJhVVhhdojQWN25V",
  "key14": "BuhpzAhES3SHEpYf43RmsJ1yv6f5iWyQ6ySBpkce1Q1XvhRFX5GHp32zavvNeiKRWEBqgT2ZjRFeJxZjumqwbkk",
  "key15": "539XY8Drw6FhcZ6M1E6D7z5MPokp18epeT2gweXpeCHHacH19usewHVWNsr5KKuD3H32ZABbPt6CFD3d7E7LGesX",
  "key16": "3fLWDZcJW4y7ZZD4nvSsK3DWNhWw44WK5igsyRCvyiVVYLCTzMvnXagkeCwAfbVpt5CrLL1uug5by3ZoJtNbyU6d",
  "key17": "2JsToUBJAiGp9HXbtyQmF9ZLoda2MqSMaYBoyfFEaCfHU8EcKQJUr2txoGNRH5Wwm264sJYNftYprXr97k3sDui2",
  "key18": "edH5zvpwR2qcSdM5oh9MruWXUL8SimwrJbBNtfzmnjtK1sMzknU7bCyo7x66zQyGmc5VAUXkM9UV4NrXW7e7s1j",
  "key19": "65Q9i7VTeguGhxCUs8BBzDfsvPQU7WPr1fhtuWvc79JpK6WzQ9Ncy2EofNFsDGGBtEUvx5dSbNFiggu7ukxNdrdX",
  "key20": "5LPjLnAFr6c5KhoEwrM3vriYMReziKNS5WoUp8raxsERqjHLWYNpvJiUNE86AuTEfvg94M1TPSQr27hxfeDYqQrH",
  "key21": "3RoJfpdSdMqGgU2LXNCpLhCmeNWefgoq5u28gj9HTXx8BHXydkjSEGRjsbhYU5A1XtUZuazNsXaK8hDs8WkD9dVN",
  "key22": "2bNKsDHbcL6GxNPXd7V3Y4npkgEQXMtZAmSSGW94Wq4dFF5YWTTC4DVkgwZej358QeaYnHGyeVk5j2hdhwgGGyce",
  "key23": "5UGAoJaeAWmMRozkAV4aitaErFBi6m2jUaHGLeiTBR39EDU6Do2QaaHzVHRQptuwd1EPseqaaTFJ3eTdE7pUanyq",
  "key24": "3xxp4Bb7tUxnddcSa8tR7fApFUato2o8s3QnLF82GhTEi4GYjKucZ3ETzvyYVMvVAfKD7ShTCdMfemgkUmphffg9",
  "key25": "3JrUuDPP1JgeBrkRdpYKQbAqdwsyVNtsiuwGp1A7wKeYEAtZwsYW7gkqrCJudsgnxEHWo9iRXXVPRGdQoRP8XXM8",
  "key26": "5ocVvykUjCgfG5CRhh5BqpVQ3BDjY4oyDA48naJixmsoVi7SYDz61baJbxkBJzEB9XvVbeP9vM4yZj4uMHMAsBqa",
  "key27": "s2SwNSSdtztGx6KCHEncPhQLoXYY4HHZMV3LniVZKwihH9Vy4mmEMkHtEgYHpDAiD7QDBvjx2xwGcJdVP27kWF2",
  "key28": "67PhPc3qSrRJq2Wfcxz8prhRhmxscGKHtQtN4UDEU7GSXbZS9m2FqZFjyT86JPLRLyyu4CgSmFhkgjrZ6HjLKMFR",
  "key29": "2eVqFBJ7tzXgK5K9yeDvXbTq8YeX7grhCFCkStB9kbwW3avvbop6A74R4QAR5cyZt5RTdgiMELWyb9H3eiZMrE37",
  "key30": "HmGWtykeLzK68WQwQM2ZXTfJcVXd5HJMYfkDjARkCFhrc633oVJFUHZuySCJJwfmYGLwYyCMyicGstgaufofRXZ",
  "key31": "2o7gJdRJSAbrZE4dV5WodKkTCny1NpJ1mY2KnCwmr6zmhbwAwm5mkK9Efc4sG63SUCf8uwYVJ1SwQYnZeU3H85PT",
  "key32": "bfe5j2D1ALeU8NLdyzVuTMjDwHbtDVpjP1jAdRCDRqFeLqPjPaYMw8JLJ6FQJzza7Dg7Ratj4c4Vayy7s5qwJTx",
  "key33": "ZYx8HUVxhhAJdc8mAZbFxourvy3Dc7x4a9emxoAmugkim6fazdoyhJky2p9BypbTfPyU6sxAPV8jGomRLr7oAy1",
  "key34": "2A7h8APnwgFtAo2qAHgkFBYoVCuaBBR3GmQdK5ggBYCqrk8BuwNb2rjViTGqW8JCwSJGrrrgaCZkFUHCPn2MCaRs",
  "key35": "5Vc6aCsav3XyMkE5YWJcVnfUQtcMHFD2Cvi3M3xr62i7CuGGkiAVMyesbSLN3ZRQoamoQJRvBjNVuqKgQRETzJh9",
  "key36": "5XTYbBLTc9V5kQ6YvJke8YWYy6soWsc4Q568ApN7hZ42YzpKiV4JyEkm7DbfvAdvFRzGrLFNwLXxozm3ravFw1eB",
  "key37": "5HzNj7KMe86yAJiwEzoofHmy7Nwo5c2xiCAppfeyCmT8JTZHHvrA6i8wm7kboZNMnKDrVhVV1vN23YJELmmvJ1yd",
  "key38": "s25LSHfn4nL1JA34TAtzMPj37bh7G6NAdMMJBrGE7sFhA92Cyvizaf5yGFfR2D5zpYRTUtSzEfuPajLVSZ5Ndz2",
  "key39": "3ef5CVyYjoRgocuV7emrWns8EAYbDUvtzd1mCokULevvPtRzxZyJtFYZoDP2xjxYwLxSJYaFPpMedVuwfcbi1gcj",
  "key40": "3umYs3rVgWeX2gP22LNY33pCjQ5N6J2tnKaTDu8rQEe6cJ58yTJiGdCTm8CcjBQTGGBqguUV4dJbLXaKHEraKTTF",
  "key41": "4Aco4fJq21FY2RScZrLTuojpb7qQQUFM8QPSkWK2zgK8pLkp9eZcdejA55WcSfbfgcsxJCzaYrw3KJ8fYXiohqnp",
  "key42": "2rHNXUjKYSzamfa7qZiDrd4h9y9rRvFu978tCL8u2RdoW2oUekBBnfdYbX73DJG1UGkMVAju2u8xRa1cZmTiXpHE",
  "key43": "4zUGiKFJC6A8ChGp3hH4g9MqukBchu6R2V6PqLuwQZSxBe1rhbVC19yGJhx24obFYt4ESeaQsEEXWYqf3CgywipB",
  "key44": "2H5sanoQ16cfQt6BF5zM7ooNCPnC9NweiFgCXBY1WwMiNwHFKHJ2uHFKrUX7vuQ7kNnd72mVFLHAFr7KA4sBNpkb",
  "key45": "5XcSSAsStHLQLqLKmq1aaB2tEccHkcGHN7DvNcpQdBENUUwAhUTLjzXhjfpe9hdQAtweaRKvZh9GY2QYnXCPn2dr",
  "key46": "49bzdJZ8ZrBNCdtoBwD7LfkgXp4fwbjS5QQ6b2zeCMUY9X5LqnDeiWaLsqJoknk3JvfW7ZAp5Hks5e1x5EECmfTr",
  "key47": "maw8uP8i4hopWX9xGvXCuky4fZc6yoFamCp4PLjH5gRNZ6jZ1vRW3DnGGScFyeawjvitGaLYcfNg2nLHhaDkcGU",
  "key48": "21T1HGMM9FrMenhvhJi9kcVqU8aGj3Ckbd1M99aMxDu7XJcp1o9BSJiDb8vmK4ZbJjaFKZr6V4htX58eiR92yieT",
  "key49": "4gPrFYnYpEk4bcLVgFEShnTENNHqTJE8YjBDCGGvQmHdkbqfRLDesL6rQJiZLhAGqeLuAw1nDWjQ5DycPsUi96uj"
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
