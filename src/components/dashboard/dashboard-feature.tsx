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
    "3te4A5sNY9ayznEZK45j9Dfwx34bwMdp8s43s5CmDFLoHqzvSFHgB8V3HXe5eJAfUd2YFiskmTCZYfUzvDH1Q2Vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3btrGMY7egynViJXVvqcoZ2fNFQxauNDnPWMcqbBAmNxUDUCEqstjMe2s7FxCByv8dTyH3TUQfvv5VFdJ21MM7bM",
  "key1": "cNviZ3UEW396WYLtvGaiQtZigJVbxharcYJxYyBHH1HCSHadF1srSmwKgXaoBhy2kZTCwGVREoADTBjrfUcSH2w",
  "key2": "5MQQ4exV9QCSFabzVdE2PZkLWRZyqengHvHMKnNFLjZ5WJKDKsqcCrMqoFNb4rjJQyqk9xihj2ZPtjrXyBRUc9VQ",
  "key3": "4HAWcwxoACYarvtSztUtihwuHh2QGNkALUQ8LBVBg3WJDrsMouFPsFkApChGNE8yFWYEqZ1QgosnwceAbMGt8n9p",
  "key4": "5Fn3NmmriV7reWQVMG7f1DDPhW82QodrsuydqS2Va6aZ2CWUgf4MLZghkNjLyTCFxBeSp3ekRSLATf26We7X9Nnz",
  "key5": "29RNdLU1stTqCMLfS4z8cB3urPhJ3XiCCSKqbn2ekuMv1kYC6qHCixkhfvfB5cQa3sYMNbJYoFK41rSUZWpmNYCc",
  "key6": "64wior7YPLVqyimDwqpjih8eGJDde4iJDMCSFT6hK3pAga1pD2e1ewgXgrqF71DkbULuEo3VFbZUkxGFKEm8sdq6",
  "key7": "3vqCD7KDrPVnPiE2hArFzvfYE5xh2ZViCjNDxzvyypy5AP1ZMr8xjzd6QggM6EBYQu4ppf2AxKv5Mxf9DNSiFtU4",
  "key8": "396vLSn46KkBze3LebbvwNfvrJSkz8iT4XepDbkjKzzSgZuCnA5UowfzL8vTk263RadupvFaH5pFdP4s1KiCBHM7",
  "key9": "vfFdf6u14XFKqqSvQEu6ZvXcLfisMudHhARmUZYXQZ6VzzcKGqUXEbXUj7JA1LT6b8iSksXaHv5huY9D8DQuWHU",
  "key10": "hNBFy8xRrVeG22EkCFhfeqfQPUaxVPJJr2gjrjXNcR7KSuKUFKMLd3V76Fhmy9oV7UEJayuAk2iiSHnscA6XQPP",
  "key11": "kA9bKfLp1kemw6STdtEQchoyxg5hQsAZBKEVM1rTbFE8DLie3rCAqBpPmz8tmA1oR5dKe3eFjahwSEYAunpP78t",
  "key12": "5a4ioyPg4Ubb4DJjwdLBbwgidkQ3z39x4wwLm3WKGVnT8gsVwbYPncs2zNJtSZXxUhrjqRVVyHa3MFUz9fsxGTRK",
  "key13": "4txCaLYUwn2467QbTg4qFetRk2Mv7oR2xNyQNBX8WCZAfpL1HF9Z61c8Z39k5Tpn523DRN7SskC3MwodahJJHFin",
  "key14": "5UiLuuKZcq1CgemVUJX7bDWED4Hd2TvveRpbTR2aS3gXfb2qSuF4nTjq4u5JPg7R166Q9c7BYPiUTCSfhpyidVpJ",
  "key15": "36GTpgz1nBzEG8sZ6Tg2nj4JXUjK9Ho2y3aSHg3F9SoNExT1CgSa263WWy7jdXJpJ3No2LH4uE9pWsYZxHQfDqLi",
  "key16": "5YHeppo5gaH52vbKctGir3sJUpup2noQ346m51HAccfRqsdPNN2fheLfzF9ryeDPhT4BaKU5Btu8ZQg7CCw8xhQn",
  "key17": "3kwqAypBBpfPUS2ozsENbdAY4H5wdbmuKEvnvHdQpqhhYh9mfY8DCvKmvgUXo69XYqqhVmhif6ntfpzCY2yrPJt4",
  "key18": "5UPXohEW3czVcx1SopwbZJLHYaMrQfZTiugdXt1An5G7gqevMdqgzpxia1tnFRY3SA6cS4wDVujHWWc1H7EKrULb",
  "key19": "4NuWntY4zEjKiRyTiQo6phjRCGuZ47jk3x5VHJ7bFhuFY2Gavsd4nhtKt62F5FKRaSc58dvqbwRXMFtxBiqjCfQL",
  "key20": "44UvCxkFedXWw79xDvSJggiseDHe1NBLVfAU62wvX5X8CsqdstnjN5bdhfuTzjZkFaiekfA7QmoEPS9WPCVw8TRP",
  "key21": "5hUJztUezhm8mEHC7Lx3VEjyKCwjTcgDZWdofebJVEBZ1p9WDtuE2DxMbMsAHWzX5qimoE6gq4kgsocRe6va2D4U",
  "key22": "5EQDUJrbQHmzLwqaLmS4akwzN19SfV88EwL6AMpSzQLVKBBvghg4xzGw8h7YScdgx4L71uVRMowQgHeVr3DxrfrH",
  "key23": "2nEY41AzpPZHV5ehHMcxR1kR8tPQ3h46KB1JMo9CUMh5ko3CokG5eVhT7eS5iNUuUgnvbFJxWMrPQee7D239Wrys",
  "key24": "26sD7PhAETyuU5jjEpiJXqs4yobfBLTxKzViXV19qM6P5DCSjca3yQxBFcarxFkovRM8ByMbgxiGaFrcmDNwA9wj",
  "key25": "2qgu2FLrMATUMLsxgBUyh3eSMPQ2WiyXWSDkJGoFfxrJTeb7tEVXkL6DFrxnZG9ZxcGKFBC7z5sCxixCD9VQAdpB",
  "key26": "3RXiHFdsQQEmFsuEthCwHNFqz1Qt64mWFnjkah4JW4wPaip7RmDKBA3XDsFVvrx4Xmxxr4SRWQSN7rajFf4pCy2S",
  "key27": "gZtLbVyZ96JuDViVBdpLKqD77EbowwRaKEtGbwTYKkTyavBJQKmC6bZbuTdokPUyNRYBjn1LW6wystyauQYojHX",
  "key28": "498nXvPNtY4CWvVLnCSDGCoBoonRwctfVJfJuokoCwJumWGYhN42P9gyKxUJN4sEugiE1tE6jgruHrvedjkDY6V8",
  "key29": "P4HfMmGxfQt1TTyZL1CS88JosPYby6LrtzQSMfEfLF5k7mtqH44RyTcaaTE2iFna5AcTKjGRZpLKKHdPAQxZryo",
  "key30": "2bZQCG44Ukr92cYL2yxJTx3sge4rDcfsVTH6Datwdc96uG1h4uoEgnJaEFypCMDANLhrLRYnPUWtifqdSJc2Cuov",
  "key31": "3DYRvk383L6zFZv4sEurwD6imtweFHydJJx5FiQKHWZRuYR5Vyuy5PJyWwPu7pG5MsTFWw59oz7hh6vbQo6Y6bFH",
  "key32": "2V1h3so7D9JnjioosX5tSyiehU8rKwUGamBKM4s6v3dm1onpCMu2AFNu4xmMQ5KpjukDxfD2pW6bfFphk195rdxW",
  "key33": "2GLzPUmVqtTMZdUZZa8xzkfKMKFURdA4djMugfT1mJ8P54vmUAQ7dAtFVrWHt8Ee8YLLh14JRaKRz5bNisrFtUCw",
  "key34": "2THuubZW5MX6kcsWsJFnSLeKupy5bVtHQR6qmJeFhGKyra63wctNz2MiVqRFoD2d6xrybQ6B6JBnx2dxBFZpDi15",
  "key35": "4EeJvf5MdDJJ5r4oqN3HLmGZAshsB1exragvLApeHygoXLVcpukgLuhWJF4LnH2d8nkJL8xHxPVJyjh7mdedop9y",
  "key36": "4AYzrmfwA39dxfsffbVcTes2pKGs8gSYyEV6rJEue9K63MCj3V4ARUHXTFcG1z74M4up2z814XcD4SwBX9YDsfhx",
  "key37": "2GtodTbkY2vKqUJWUDKfXNSJ1tonEauZWzTrHsgF2Y4hYWhApKEJGTZNtkeYwJNEVA19cwzxn6iJfH9McxKnkx5u",
  "key38": "3qGZEnxoyXHaNWR7xoHN1ra34iv8vLLrgeHHBHdH9KqizejVXXR5HjgthKdT5AMUGejJJJXdJKuY5ubH725rusqq",
  "key39": "33mRNry9PxxeuueyTaqh4TnQmMMoWRkpg5QCPikFJPfzvhK7jdxyruRte7YiGUpGctbMTsAarQzZQacQNPQA5qZj",
  "key40": "9e2csj5tsb3rt6zxVsH9EQNzMKxyaF9vyQ4wZsNhsQnf2pdEme1MGu1hBZuMSg8VpCpkHe7SmQgvgTjKWpdX2wV",
  "key41": "2XW67vRScDWMyiTmho3j3PAX6WcUMnh2GdwfwVDmRBzTRm6gxLUoD3FQXtGSSWBNw72CxXpc7JY9A9grw1Y5pHor",
  "key42": "2VmsWxYnqUTuF6NGBZDBMPbSYwkKuFUYSKzzBhPYYVLAmxXcCMFKtE7LHBE5uCgiZBWkPagEZzrin6b214vBTFYe",
  "key43": "3LbJY8xESXvpD5zRQhGPMmteLiJJiH9kqi1z8h1fXGKHirffkxWvbztX1ciunnCWwj6xGqgm4HMRTCbrcTSevLdA"
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
