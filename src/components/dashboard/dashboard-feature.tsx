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
    "43sgX9SPGqFiiGF5Xfir2ZWokyngrtucY8FgzFkq8eUZrvYEAGwgvacY7C941qQqEGRPZXDvZvMvTW6W3cKHNs59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MZ35S7nYgUcSWsXS9JCJ45v41cZuWn7dtx75yMBmBiESwZQH7bkj6HDXNMWR1TnjgoXhtouS5WhrDYHuc2SKUD",
  "key1": "2mPi4fC3vzst45dgTUgPeewF8WKm2h5KAifet1qFst2w1GnGSnCXhotQG74diEJjrMHyxMXuM9qgGcGbJuUHQ6uc",
  "key2": "5ui3AWPcgw3wuMN3YBh6tMkRvPeDkiPERhrbxvkD5pEcLzkghKdiFJsPhGAzHBRYGGsmC6th3eZjAeP63y5XRx65",
  "key3": "3uJ8ArsB3eg3AzgpCbBrQrsm7qEkpNAinns71tJaEHeoqdZGoQh6CtwoHhp286LuSB8kTxcstiU48j15WMMFDdRg",
  "key4": "61zrxdRAZTa1Va7Ui2rEgqmTmNmHoUZFoGZUrTNMY6DaciUgz4MLCXgSEjSSiQzXq4BW1MA8z9t2RVdQfGn4hry7",
  "key5": "5dVzhmkUEdQ3k5oNHFPYbSdWK1TYWQpXHDcPKDNtNB1FUYPDdAFbZHcqAMw4Ht6z4KyVpT1ww693Ltfb6E4cGRLg",
  "key6": "4gdG71y7nR6kDyGhZEjaj6z6LueFo6gTh2qr4CHBdpzAXCKauYmxinsygxG7rD8yDoigu3L1nqm8zaoNsewrrrpN",
  "key7": "5wUmQAteoikHJCg88bKk2iM8L6dbi8KyYiTAhbctfYnibAKLQSw5Hdv6rVVrfw5myEQAMcznDrSAsQR8dh1T58qd",
  "key8": "3C9486DBUGY9t2D5h7DkLUGAvm94MJya3rFyqfb7nAHWKU6ZmxvYzpxfrWwbHEJCB61Yw5Zpq1aSQbtE5FYPiphc",
  "key9": "2wuMbMetpzzXqNxghfRb3jpuykkVdHk2ghC9meoNtw7CMHy7FARvk82cVpSK2ynzNpVUewrM4rCiPetR2DLFriuJ",
  "key10": "UcULoKs6x4Crsi1Bzjr1j3qed44A67NBUtoZrYpB6WYXL7aW5E4evXacK4sMBnrtKqKuGLEKEQaZu34uVypK86n",
  "key11": "44LbKje4mPoSqYu4mARzW3g9RRYZwGmDpkDR3zfNevbsavLJBTSNixNv3hAADvDVAzNJrZR36WH7qKUyi1zttrbK",
  "key12": "jxXEzHMJrRsFLU1edxkG5GM7hugPYhSAZtoQyHw4BrRHUfvusUEfUhTFSxjrQiNoL2thUhJefUfXGfRQnbDEjaj",
  "key13": "3W1Ha9ZwCiGVfLViSiQqkgJ6G4tXKSQBCB8xf4xqapDyrpiWftcNZQ8mpCqWYAxJkRVf1gsjuJmeczQ8ovr9Fhuo",
  "key14": "4Pmw8vaJz7kz7uQtdmpt4fAimMNxZiT6vzSJWZ9GoJwEK4UjhgipJSgS1jTxzEe1VV3LjQqh18ap1fUrQvdyMUiS",
  "key15": "2eMN5o46eNtNJCwTjihUvi53p12bpcbXQ6paKWn6RMGJ3HwWp1SbHWze7zjK2zoot4kDpCJ72smRFragUmemRs4s",
  "key16": "JtBj1FzfAQfgZ2LoVbGTg9yw2kGJAjhkDZxznqLqUfYJSMCNf6QQUQatvRFgvGnrSRtkws3HJXH28X7G7JwJ5zm",
  "key17": "2xPyjqCnBhpMkHgMggzo7dwd55a6E1ZThkekopqmzVCMwb821FALoXqWwfUDq9J6fgNMNMNofJ9UTkR3SthLFo9z",
  "key18": "4GBu51A8TF2ihL7XCxTbYBB2tKQvsdRgxK7sBVGEFzr1PcDsHwN7LksATnu4MrENyP3s94zH3FHAf1DW4Vepn175",
  "key19": "6J1fasuvGjU4msR2NBKr7iwkx6xkLT7K8kLUmEr8k8xqNf23zFWmJUA9XUYBbTcp7BtuCspk9m1fCsPuL6yYSQE",
  "key20": "4BugXSQE7GkESpaqHqeSujFmUESDB6uedNYGeJivgnGned7ZXJZg2jKxg525grBKEChTUS95Peo1M5PdLzH3CAhj",
  "key21": "5A1wYT3ESbHqZJHALJoj26G3YNUR5vHKdEsf8es8uajvji1qWwkGsYUeiDFkjYfk8wCteMpmRPwZJ1NjEevJYYqx",
  "key22": "5rRjD22VBLiS6jU1pnpVNgaPkXxEmEALmjWL9jqHZnWeT9jENADBPuqYDikko8NftXB2fKgMUTraFgTB21229SV8",
  "key23": "2X4mQuK9y653WjJ6fz3NT2sHcfLG58vkPRVy9jjPDGpKzoveEyP7EcYcUJm7cPQUxRnijMXVhGZ1jj8kMBFTaFLd",
  "key24": "3R2Q9RMMU8yUDGKYr4pJbRRo6ioSaZXmkGXnRnxRbdJcmj1o3vjZznkwPqxn34Vtm59Y5JLqu75KHGTJsKwjbYnF",
  "key25": "53H8iuiMGaNBBeHdKizF919vjPZ1dhCnq5E1NwaN3ShHbf4XoaZT1Btnbd1psEizF5LXMjVMYq6j9Cz9XnimQs9A",
  "key26": "ypuoRBL9Yo7U793Cc4szcUe2AiuUxJCBJwUXyceXwcGmVVmrWQ4vHk2x4nvo3arrKe1zFRWGri2EHpsjuqZr971",
  "key27": "2aCrt8hAtqfDdy34vrEhome9mTx1WHzeVPCT4s6nZf8W8RtchbWmbzhBhLcyp7G9pgCfxx9HFFHVYcegEUmfGtRF",
  "key28": "3Wn1G8CkQgFYXrfp8fETrRCuNUHzqwUnw3T14HMfmm1VYQBrZTNWky1DChvmcYsV1MesZ7Ms5Rdgew86WcpYbiXS",
  "key29": "2dSvWXQxHbmNgYj9WRYAqC8XkMXynjwD1b5bVJg8pkkbx4Gwf26xogUKoKAfFWT8qe8mwv9XwYuzq6KgW4yApUAm",
  "key30": "2e4dnD3zYf3k8RLykz353PBGxumGcaXPDQ2csuZNT7kdKtKJNDerrDrDXNw57k8mET3awf2NddDe1keWTjjA3zpE",
  "key31": "2qbX2MjwS7f5hgcZG5QY1TJbQsqT4KtyXAXthQ98kvm5Lf8tu7wj7fprXC8Ye6KQsF2Tut1XTkKi4Z2FYHFo9Dzf",
  "key32": "5PG3ontK4GnFxqTX9HHQLt9vbNxbyu4BqfGSMD9Z3m7BH4xcu1V8V7uhWoPSeGS6jUWWK5xa5JWDdNPEyPhuuirF",
  "key33": "5xpFG6wXW4e9cyGyvzrLKSsommGiHjtp1TBasZ1ukHpZ9GQdZD2wGPg2DLiQA44kMzSapLMCagDZDHz7UmgsXXR4",
  "key34": "3f5jfFp9VpinDHmFFTGZy7Xy6xa5JTQSvYYkFhWe2WDSzEt9ui2rBJLX6p59uRrdUsHZeNo5FkG239TPuERceL5z",
  "key35": "oLDUDJKvhsazjBGtr9fptPwjH5todcMNUCnFZRQKCpm1ViekZAbVhKkSbCPPa1NmPyKdiGrc5j8GkMUvVhJXyzj",
  "key36": "JBDRpL59CXjgCeyWrErSF7SdZRXA5dJxE66qGBHXvWR2GT5cNGzo3bbHYrqDWwAjqKkY1scNULSUVUBZGz35Bbx",
  "key37": "2yc6FBzpf6Aen4UbovESn9MUZvZhK3NZFYdfrTrLWXB9SVDn2qUKUAKj4CutszSXiP6MXNHwJFFGtS2cg8HcpzSA",
  "key38": "5ta5D5EgnD4b6j4KF8m6KtUTLRpqL69DSPpFfUppTvNGT5dzHYkrKdf5FCtY3if7rbcBtCbYH5Ejr3YSJSznUS2X",
  "key39": "3aGCAHK9E3aJFtmeD8LjxNprsqomQVtgA4ftDSMpv4jLfaEywf6dTMXFBWzxYrniHP6fuaRgU1ZUeDp9qQG1EYBp"
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
