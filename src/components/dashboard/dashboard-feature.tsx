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
    "4koxK6pmkhzcSpVCMmfMKDtY72SigyVDg77tqp5GLbEHNqgz4d4jgqwGLJTkDm2gqkz1EXApAV7bNcau5uwGsNn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35wjSPfLtdqeKXZTm4ndjqMpbysR6yE7L3kucuQYJpqaqDBxvrxzzKAMQ4XE94eu1SbWwuqTMeJvRp4SyMtFbWW9",
  "key1": "4ws8RrtEo6BtpbriR5MdoKiE2ZyzySLtemo1qpp12faVJQUziuC27tCdwjRDFgrBvwCShBk9cx7JFEbr9cVYfp3Q",
  "key2": "bNRWpqGYjdEd2DB7Qn6ejnwYYS7c1VxLGsjwb9bHHaYto5mZHPkYpVgMvfzJr7BzXh5z6nSvKoggrso65kc1s2F",
  "key3": "4ZndJ2tStwWD1qH9H1pZ3mLJqCGch6Q66qbTFWjsLQ2pVekneSJZUrQkxycno9m4KfuuF5oK5U3vYEoTGgV8t6Vt",
  "key4": "4KY2DwZAbST7drQf2QuAceEopK3y6aPH4WuU3vjj1S2XADZATWhQkDTiadHHnhD7TSajk51T5iU5XGF2U2xQJFLv",
  "key5": "qhYzrFCS18SuctUSwbak3sy4TaR5dCiHkwGFWxjUnG8dkEosnruhMyYMKwrUUCFZJHstas7hNhH5mTfJg8RHLyg",
  "key6": "vdDCF1FvVVn7SxakcionQjsuDosGabRVHbCay63szMLSFwhfz1gJpm6P6BqmemyJypXahydkwdmGVsss1obgaAk",
  "key7": "5cegzeNpKn8dRrYNZ3yACjEiKWoVFeaczfJFoGPUCZb7TJjjhqXpG6HJTBKCYeRmP1gCSjkt8ceCB2dwHSRyn23R",
  "key8": "312GVfm2w2P5t1DDJ9skMu9Gz9cjPAnU7FrS3TBUrzbopNXLReE6aHkw3wmVTtjW7kYbfE7UMATv4K4wydga3Y6J",
  "key9": "3XEWhJTMCuRAFu9kPtoEjZygrmQrxgZ27mHcQStiPxtTJejmXCq6s9wbFGjZXs1Tg9D4wqeZWsGoauX4NRUBYSDt",
  "key10": "4342wLxLvcpGb3oCbgCnJzpezD8FX1Bohvnnkt1Ld11fL69KomY3JWt472a3L3bKxs5FTW6318K1DGcBXJrkpEoN",
  "key11": "5vShmWu4hwuWkN2htMSAaEKEjsCxeNXtyPRTAQWXwvrxNC89ygUcTJbDEEromHsndA7ysDFjH9CevqBoipjt9csb",
  "key12": "2yyoXHTw5EWypAFy9aH5hQBjsJKtonuQVoa7ADcoiyqCqoAVUrCMWLa7mYNYGo2MUkCwJZH6dj9spbBLBB79JPvF",
  "key13": "3xwiNCfQapm3uP88Eh8n5eRSNMcwBycN1jSXY9jdBEHvZ8hMNyDgpumGoRUZNLrU7DiFNMe5wBwNKfa3XYntdUf8",
  "key14": "2vQkoDd3hEYCRvUGfXtpqxBLA1Q4Rgpci3k6ywmdiwzDwHyu7ckXfmrvKLGKaTV5pQyTAER67Qk7dA3Yi1qScumf",
  "key15": "3Sy8z8iDyGBxfE54aimeihNZLwv1ZNe7Xv1qBJ7zE6NfxQGJ4VVypoahHj2RaLg9WRPLWRQvepu5bVjXR8K3Zevj",
  "key16": "3FTwHkx7qRESNiAsAp5cBX3p1XEraxnoxbfX74YJNx5uERZtFvSpF84zHnuDmT3jfb83etgzrRC52P5DyJApqyiw",
  "key17": "4g1rKsHjme7NFeCoHkhx7P1zBN3xe43PX1QRFNUBDGXGg6BJXeZCnaA2nH2GaoCFptzqoyur6QhzgFBXcK5xD1Lx",
  "key18": "3dngtri82qfoX8btyuura8LpXsGfxFQt9evtmBtGKejx3XtDfjCtGMvmrAqfiJMjh55q3Reo28jomMCHWrW7bn2L",
  "key19": "4VMxLhyKco8yd3gYRqDB13PFTETwRFGhnaW1oqRwdJtJqALWkoaocEnYJcXhTUXs1h5gknAkhSg1jCVfLgW73cr9",
  "key20": "5mU2nWu1FSB85EYJyYw3ZRZhgZDxgYR5EJUpy6PGuBnffb4EhVw8ZhCZn6mwgHiwkuvFdbKNoz1aJtw9eBcsnnVw",
  "key21": "2EzgyECTCkmnR85oZYLVf66A4bwCcS8HLXZ1p84Aey4DQecFrvtHEsoWnBygD3Lty5WAb8UBWxRyyejUCK6DvX9z",
  "key22": "uL7pyPqKhpcXa5dahEcgdQRrsb2je9Lqweua4X5iwdM7W1CpqJHQ9ihAWMtKUXiaLgSri1to36hozxgZywsTwsH",
  "key23": "51zq1fxuhYQFYrV7CDdwmyNaeQWnQRMzuSsQ9UkZ8ma9MxmCSEVMraDfca51VD738w3AooA8kxvgKVuQSE8fAHP6",
  "key24": "62SkaPgtyjTj5E1HQFvVunaQpzaBHZ3oA9yuwDkA73SwvCk9xHsr6anfuvp4jsf3dc3L3FZbR7DbVFaoM94xbUUg",
  "key25": "2Mh67ui3QmWusV52eKamqbyx64cRixiWESTQApoEW6o7RafoDmJuJm2HX2eQfWJXo5Jukf4sUC6iStU5oJYdx3Hb",
  "key26": "3wvAeuw2JBqFiseyVr3vvVFLDjNUoKcrB9JQ8418JH6WdeFL4rj38RXGEeNRjxfnyU8P9zsYq5Zs9N5gVX6imz3Z",
  "key27": "PD3cECcJ5NwpELppDYdSQ3sPp1HzxEGXzbXbKM7oGJPaiCMNRnvzzfFL5A9whzRVRnosDQ8t87kg7thHhHJSdHk",
  "key28": "5pDWUgBk5BhzSCd1P9aRKcRvwv3RZY3LfP7kM1GZ3CxYmUhwC5mQVwYTrzVieUwtRzQ7Q94rGCKsoRFtYiA1rCSa",
  "key29": "23amtX6vXPbpviugQcfZWirW5pF67UJs23uw7Et1szhEUwThcHVU5EZaxeJnAkRqULv4Pm7sheSjqnGWBP3oDpGR",
  "key30": "2qBXHk7AcJg66HnQGZhe6VS8FVN4itLa3isDFk4iqcrzP3NkwqCDggTbBz6D6Y4CdZihuyAQJayCBaJxQ2Jagm47",
  "key31": "5jwZ9RggiLaKchTVxuD9wQWFHyMi6L7UKAmSurWecLfZxcrgUYbGxiJ7E6KuprfA9CVyrjgEifW7PS5NCPDGqdZr",
  "key32": "5eFypHsGeYhXtZwGvsVkBsEqhGZRALLiCwubGz3evqPHMWbwrtHRUZ9RzHcTjBkxUZjRjsQLfpbmjDQ5BMYcYrHN",
  "key33": "SMPCiRhBEw9SQC3EZQ2W2T6LtNJ53ES1RUE6fiBw51HuvkDXzs2LZsixBGx5HD23Xxex4yVAiwXZWMiayTjzmUE",
  "key34": "5WpvzjKSDw5kUa68Wj76zj5LzxhZEA2LLizJiG1E7oyUFLN58WGVi1L7VTUBohpJpLptZjqhZcMMeSM3T6NaRn8J",
  "key35": "JSFG1kq4n9sN6gbXXq4A4MhpV7cTZWGNXJEshQhcGfw47F3AncpbZHKj8EL2Bxnkkt8GoGzYGn8JGbz6R15hk5i",
  "key36": "2UayFDe7wzcCdhnVJstsqUHqYvPUmMioy9Rk5Kz7TE6VWngYhqn1ShuzFRWtALnfBxmzm9kUi1ysecDeTGKmkNBd",
  "key37": "3MK2rfstECZNF7Qx2KqAgeKZ4CxHR9KJbX4dS3yPL7Vw1WweALyp5DVm7tkvud3jaWzFmCEn9cRgrXk4Xzmzy9hg",
  "key38": "kvKjr1VCaHtrQvcHJW456mJuMtFY8zEpocvimUneYX3WtBfbLh8MecCTujMx9zmYwXPfaf6VAPuigHWyT2wsyda",
  "key39": "3MyqrpNcX99iWYKEQEqr2TLWYV3NfksiJ2i5G5dCKY5w6XfrF3Q6wZzPiaJsm7aJUodeu51ujN1neTbFEHRChGUq",
  "key40": "2cWnVTqZtJcTiv3U6oj6i2iENnqX42kPxEYK2AiegRf54yVJJsvj5TbnQLDwajreX7F7tANyxh2duCBf5GtUWoMH",
  "key41": "2CvexTFYJWsuucBPsxd17JQx1wfghfMB8RumqGnEfNgZRHfgVwkABvSRcPUz8YZ2FUmsXYBxP83Q1W4Eh36vuVok",
  "key42": "43ndJfRc1v4KfM2JvWmcgWxTUvqB12aNx7wg8WGgp2VfJKrmT8fNHVVJAL8LJR4cnaNpsB82cy9eycqCYswokD7s",
  "key43": "2HqaTJXaymNDPjJD1zvQApHMLTtifHEKDZaJ1H4Xwr2TLYMBXEiAvqFUcr1RjSdJBfMrNqYN5imsHmoyxbr5gcBH",
  "key44": "23ZaSWGVnVMQ2aNiYFSgBrJKv8m2JcWn1E3dHvxFw51gPmej6gEX9tg3z6L5PAhxcwyqkXQJFv2mM2KTEX43DAiZ",
  "key45": "2gHyVt6ypY3sT7cfgJftTPb3HVdq3TmFm6n3eUQZBSsdouFdW6KXdB7bQi6DCGcKtBm2fAgaAGX4hAfWeN76YYxV"
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
