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
    "ZPQp9qSyH4MJkF67JqaMMg8v8pmbrmUnPn9enXL7pHsiJeFawPqSEoM2QERQX3W6YCXaU6UTZqxbZ96Y6fRSutS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o2JNUqBF8joR41GyUes8KPrHV87GBHGhXEMeNHSstRPPGuaNL6k9iqNDq9Zw2RXJiqo6v7BMYgGX7Tuw7Va9Uuw",
  "key1": "4EywF1GjM3e8bs5iv3ivFvNcUnkh4Xnmz2VcnYZYC8awSPEbKgznuc3fKgeb9sJcSi5mGKfaQvjGUAPGmV35JX3C",
  "key2": "5eDTUycHj5HvwwXyGV3Z5kBJzTCp6sDGGFsqfi9UsVtgPafKxzYiu8YkatVC1iYQJj2mGExPQxSmZzMFj7tVSWD9",
  "key3": "5WA8z4ykKezAsLdydKBFicNDgzVph3KPLsiKBfPPNEm5bHAb3yUHB9NWfdpwr3fZw2PXLFatJzP92MkeHJfAkRMF",
  "key4": "2TiL9XySaCZm3i8mSyWzFqzG59JKb87dPq1zxxgfZ4yiEk4n696taZDzjsRhbibr6pwCHfs9FQeNTR9jDA5o8bar",
  "key5": "5FpHnVK3nxBxST84W7B4KBFfhDjipzmqMqfpCPkC5gtVZWDQKueHJm3wnyan5ahAeUM1S3x8oHLnQXdnkfTXgJpQ",
  "key6": "qorVhstBcje4w45paPbg7A5Fbc4uBTQEpcvWpQYEQRBEDhWqmXaEfRh9qQ21X5UKBbgi2Mn3CASrkPkPm9Hdtfx",
  "key7": "5BgaKdw9oHV8njbRcwBGQiFGnUQKGcmbtt5G7xhJB5NN5uCbcXhNTddJNGrAckhngi9XWkc5Yq4e74Ua4xY7idgQ",
  "key8": "28uk6u4uecr75oJng5KRqAnCeK76ZMBqA9FkmSuLjoizxzXKuVAkyXFcoQwC88PY1DVm9uhiHthdHJuBBbn2pNRE",
  "key9": "3484Gks9j3xh3saLS6MQ7rNsvYYcufiCXijx7UbxMCs5xYjHKY5BExEkM2Q8uouJXfnXnEgWJBkHcxrVoCT7AyvM",
  "key10": "5LCPBgVxoowDXPXDfHkUVqRkoiP9hidhQ76ZWxZK5SHBgJcHkN5YCfN8MeFAnEYc1kGRDdoNFJTqCRu5gzYigUfs",
  "key11": "5ZufjCBMDYfGX69ueitJChqgGykPCtHWSGNxvrPk6m8WDsJGtZ6XHmRGAXA1KBTrmj1uBXqfM1sGV5Bz3WdiRvY2",
  "key12": "4cmxErrJc7hKJKTtHm7HTGPDhPds4bo1XTc7YFnWEnar6aFSyVDXcvLXbJux5Nf17AHJ8faBSBBMoP6QfYw42pHB",
  "key13": "3aWiw7FaufD8tpFQzfuc6ZNjbXdxhF98FiZtHHsciqD5Cp86ihfaKAPZLsgVmXZKPaMLBUxPss8D2XAGJ8nRtK4C",
  "key14": "3rvKHQTgvuerUZ6itqta56DzPQr4LW9XeHkz3TPMK8kBEJXP9DpVc7p9CCPXHJdA618Ksu5pBfrydGE5inJpPuzQ",
  "key15": "5yGcgu5m56EgsDXnE8vxpZWyEqRSSAEj8EB1XkBeJyofgyqZkUpis7RhQSKUeSzpv7LrvcgaLvb4sNhFTJwbiSPp",
  "key16": "52TJ3HQe9Pq1dzjLG1wM86W9ppFQBVQY9eUecei7wWc4pPt6h1zbhtTVeGaTkKLH8AGeoskhk5LF1ebgzAmp4SQ4",
  "key17": "yxE1QujiHyRF54kwSV6kvNMa5LwWymqc192LTEbATGmBGWwunf19bMhAsEpDfynMjez7Grq7AtKiDi7ttZHqTCL",
  "key18": "X4ZBD48ZPCSKhGiYMqNYSihj8pUFtpXBYTpmvLgaRPabcNkuSRV6m1rNksPcBNUNZym9gSLcChUsNna4emhsUSy",
  "key19": "4xkGRj9c5nyfwQnXNgZAQbTAV5PFgXQZBLxGhaxn4Jue55dQ7c3aZQANfcxbTcruLNGpsfdEDuf9CWMBza36puRH",
  "key20": "3ssNMMXYW9UAEh4NLwbRuqZuD85y7nopE4eDmsxsbdYn64sbCzwbXeH7wQsaNFQSLDx6954eKcjCN32miSaAiske",
  "key21": "HhixWkL588LarArjeLduna5kfkzbtrwM8CikLLKWFWZvaxMCuzGK3xg9FS9bftRoxMTLrtY5jParWLcbUvF9oXF",
  "key22": "tJJt3RztjKqxjxW2bvM7NheKQ4pnbMXegucVAUqTdtKsHez4vHsg2ZQVEFbdkksaaqJfPKxCpACr3nJwbUw3VBu",
  "key23": "3UqWoys5Ak3F5Fa6zyKxroaFMAw65BrQdjq25pqaAUEG8bcJ9YKR8W1gZ8upMZLchL5K3ii7cT3HCEFiivsS23u9",
  "key24": "53mzotgyMju1vQPBCAZADJyxeDgf3UzX2H6WBPxq3S4KHou9hKkF334y6gJFrJBVjkEa4CaQMNrQFJJ94ocBTawf",
  "key25": "2izn5HXpAjgFPZZUje2qZZ8tSbJDXZEDVaYofGCNDUD7eHWMa9cPhG6ckEB5Z9EXgeqgpAWDGTyfBPpzprTNtkrm",
  "key26": "YEYgjpbLQ4Bxy4uMkuYm6poc2fTsGrujRQVjgMyJJa5UzcetGSHiyjAMmB4aJisfvwJ2V4U4wyPyaYMnRygkiSd",
  "key27": "2MVkoiH5XvXQx3PbRGe1gDcDMk4DMx9aHHFC2TRjrjWC9qGYtUYXwHKBi4HR7gM7SXe4uoL23PSX1v49smfgQSMd",
  "key28": "4fzbErRUPNLkcsUF9KJjY1mBfmZNNiUdetE4BxkYqgnBSYQ4QqaNRM5tEkwWaZd6as23UBJbsUoCZZRyY6QHDgZU",
  "key29": "2595LB7V7G5K67ooELsPeYghW6uFmFe1KgtSg1VbWjvVADGQRhSTJECS2fi9QtQwvbitFC832WZLV1eWcwMxTrsz",
  "key30": "53DTWRDbzk4FmN7ZEEArxEyv77ZDC7B2socG7ULGfBL8jdGXM67CrLvxUyE3NdPx7KVP9xsncfngTb5uR8kABNqG",
  "key31": "3o5V8t2DZcqAvnCpMLK7VZ9dVjpmxzJ1GX7fSDv9BU1XaQbcRKGBd2JWCXQksqk69FRnYmfmaCzTnqce83Zsg42A",
  "key32": "vFdv4y22HGs6XqMKzD1d9mfDUn9LNzY3375Gd2thDFLGe81DtBTFrCj7mj8BBdkofYHkKDJZuG2GWAnRmwf1wiM",
  "key33": "5TFDJhxZxiFtRUy1RC4CFvHcv7DsSGwynnA55GckJu4yAn8hJwjG82ARASd2UEShRZhfpnCMFJquPKUZ7Vh6pVXK",
  "key34": "5PNRCHu7PnbQ2UH4zFZhbW4nazSqXJHTX2EeNgYWxsLfgkET5wTbuhsudf1Ar8QRAvB5hD2BBzCucQLHaNumSJ9K",
  "key35": "3FVmjYY7wn6YtwyYSYtzm56RsoKFN3wPvbrmq674JCdpMxNkbm4ABLh5TSFiYTPUQvjtBADMaqXo4R4s8brPatKc",
  "key36": "2wMoFrQbwHVt8JNf4FF7EdtiwHbQyQHhin7B7xaN9X36Hht6gGEU47iDVBtbVHPjo9rqW8m22xx8QUrzZrpv5ZBQ",
  "key37": "3pbYKxiPLcMpNMWDGb7S4biW8Hi1TBPAfZ4rwJRkMqVycoJuPEZvh9J4yLCsN1MYnGdg3yr9q1fie4AeBzyacMnE",
  "key38": "51zQuNHqJRQBVtkqmUmd5YRDjvwtGA12QSk2ps4AFmNjKd9DVQCxwKHxsoWB93fAL8F3rGhM3UruMMSEXtLsXyK6",
  "key39": "57ZdKxZnjU76UB8zRimdHS7mqWFecPp9ceqfLgzd9Eq77tWU4UPjMYNSSfmmLp6MA4mzky3AARGZJqDvwANohftE"
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
