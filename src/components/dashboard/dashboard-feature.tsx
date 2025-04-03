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
    "4wWN3mAJvEF2b7yEwpNPDSeFcod6pngsrjZzvtDGYMbXn4CE8yNbM6CbPkBPReukAouYkXkReJ7KmEumJCJbswVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rfawPybzpV92xcqESj3bD5WJGDyUJuPTAFK1vrSuXvp4uDnKmTGhkdibUd3TPve62Ki8ger2zgY3bdEVfbh36G7",
  "key1": "5LJdHzFf41dCoevQFUzTPR4Ezvs97A9KgePKjnazKFNQWjwaiyAiijZCF24r2bcbWzhcWup8ycE39vLikWppY4mX",
  "key2": "5ovAM1P759LNTff2zyq9fDdqY6UXaBNwyaZiufti529uV5NqKeo9iG8S9CfY7vPAFVGmi2iqopSw6ZVfi2WKkJxi",
  "key3": "3mzpzvd3x7f3wR6iMa8k8p3nhCdVtdGFdBo7uXC6YzyvS1TJ9BrLBSow5FsN1hGTeJfDJcWvVfPoCkWLxqb2HxG9",
  "key4": "5CpUsWEgiFYYPzCTG5vEnufg2X1Rk1SLheUe8VBZwR6ubxG4zVXxPfBFyc1jC1UNAcME8a1tn41PjKBLZLWLkGzw",
  "key5": "3b6QnLywJpk9tbNzsZadiWDWNDQY28WvKU8xzKy3wgy888TLTDKt4BaRBhMtXqhUqmGzf7okb5FTr44goYWgd4iW",
  "key6": "5ACdPiSuAngj68ywRWkPLiPeUq27eQcXtDABv9jE1kB3Um29bKBtFSRMQmvPLfsxCdF8JsSFrp4hH1ZPoviEUFo7",
  "key7": "2Q6Yn7oRSSWtghE4jMacbYfsXyhTLuE37WFftNMtmFAxDdCbQdXHnoDAk3b3Q29s4azfshxh4XcW1sm2595SKK8L",
  "key8": "4NJeSA3kQgsnjU1kc1ntyHdMada9jn4qojxpZyHMAy6XrF4q49g2j7h5ET6QfcUodVvct5x61VDJpei7A1wizNss",
  "key9": "2bc899KVEuoJNZiBCzhomupNLkSc1Q2CbEdBorUFo67chxiKQ4DaktB94z7HUt248RYx7oyFj6hVCUdrQPQXC9vL",
  "key10": "3Awg4VnDpkxJfHctSFAFWg4RiBTxMDNnd82QnR92YJtsKmMsTt94Fbgtr7VFRs6167YG8M3KMq7VGew7fpgi2sQ8",
  "key11": "34jRVgv7Uy5BfWMTpNS6EvGVWJ1Xnpfp89UHnVKpgZUHqXKvQKP1TMnNJbUEAv7bX69KQvVfp9VE8jVuSMGfVmWb",
  "key12": "22n9Z33uT3eKLkbpEjaXcMUSMMe5rksaPCu1WeMaNquu3FF9mss2eeurFJMjSeSYT1rmydwjNjX87FH8ATbxfFx5",
  "key13": "57sGcrooeUVpwDmV7aMDUmzV5c4cCd9kguKmMoZRCmzWgk5wexhCtSu3E97j4G2NSzKRmo89urmqbaWAcJPpEsnK",
  "key14": "2BPU5ZtbdUvhHwMQtsiG6xmLLxhHSxdCKyZ7GrN24cMVhArHWWongMmQhNtfQ7AigTy8imzeYtN4RHjfk2x7rPCT",
  "key15": "5f739ozHCkvRDAHu5LGmLeVSM19X5zfd3AitpHLaBYbtX31QT12d838LRjYe8v1TAWB7wcsJfNmhRFqntcPduy7N",
  "key16": "yhdeGKEAZJxF5zBzBRUuh92kVGWuWWyhTn6JgQKPbsibiytbfHvJCgLNe2bMcMp913kgSoSh7631dAfXEB3fW7q",
  "key17": "28k6iH1dUgPVatJodpmRWLNirEQ6vpqaNet2knvL9Lc56PEiZANznWb1RPgwzkNtq4EKk1eW2SvVPErAUpFUsac3",
  "key18": "4Pc4bj4VbitrRQY6VRtZHMrzHbS5T8AnfenKDoKCQqfg6rsYWKVnEuJKiqdk1iQua2a7bKqBzb8vvGgsR683YZcx",
  "key19": "Tj4sdrFMtzWKY9Zb8iHcHuiWb6ZLM1DLXexfNLDQEyg8kvJBT6Viy5kGCq2eFm7bnKpo1rwtAzAvpsGQ51px9KH",
  "key20": "2acUsb1Z64o5bjYHvgLdC7BkiHa6xxxkTSyYt31rDEif8pLHdw2VrdaE5YazFcPZTR76rct7R7qbRLHQVmdibzjS",
  "key21": "5VfuYGa4oKCfWZUvKW8MRk8vbkNLRYfsjLNyh9VoaPRvQ33YFKR9nCkCb9DKmANXE7HoekR5aoxSKatmK47GT6pa",
  "key22": "mgs1dtPWRoXNWAybtfwti4a3dReVnCjsJTBkDhmyNHTy7mePYTJBZv4FX4UWPoqnfCwLvdyv2z4qfSfZGc862fz",
  "key23": "2yXjA9DtruFK2xEn7WEnq6dBbq3Aeo5DmJNm6DKQ9oWPKsC7c9vdAdTFGHRsGNqYDC9sx6Viz7WQnnhHBj3jVLbm",
  "key24": "3dfT8CdVBFzE755ZT5xP4ibCg5QutDsa4FZbogkd1t4TebWZFyD71HBwSf9YxivHpYnfSSyBBT7M1veScTi8uQyH",
  "key25": "414mPMcZJzRBtztQbXJpqe4xmaiqij3R7WjSaANkeUjC3b1f1FLdhFmpn7NeFYzzGQ5zx3i9Dy1s75XTo3oH9nvq",
  "key26": "49hd93avRL8qw2sTByKDkp7uVBLzGJ69PMxZmsduM6q9zGGZDLnZ2VGdvtN5FjkfCP1HV8pbuhM4u9Z97CNvLhNd",
  "key27": "1GJ8PGqmsqxKtRU4uFsrpB7D84K6Eb8Qnn6cUPvUJKiKjeUuJPQgNUaoRBmk9Je9aUWCTgGxhURhftc5tw4ZEae",
  "key28": "SLuzizHCcN1FgqnKaRxKbpdK3wLA6YjirjDYQ2mLLPvHXvucixfoChW3HBRVXhvBLAWjQyHFit2TssxBXcVyMg7",
  "key29": "2Fk3n35MYjWn29ykJhJxundmRVZEUTtfKnggQYAfri7KWWBTUVVoSGnGXHmpRWs2ySMbv4yHyJgztyGQpSUtFxTx",
  "key30": "5uaLR1mJRUaNALL2eV231aGwHa6NAEZFdE7X7ACQKLi124NuAPHZTUQAB1jbKbFcc6yz8mqKHFcDyGpGaa6R5sgD",
  "key31": "TTJaG7XKVTjMDK6fRVg5R5u3A5o8LePq7NL36mzbZgMLVjK1PpTHRiGZABP1aa2g8zVZsJgZ6egJriyjNydpLQM",
  "key32": "56CeeRbzokybvnvougf36igPwr2VrrpQdr4pcbptF616igu8Ljo1rMAqcxPwhPctTjUdnkv45nmKkYJVCzVTHF7G",
  "key33": "2UkkoS3LYJcjRU2TMiLz6oHUYwk7Mdht4WNwNYov7D9Dkfn7diVWHpP8v1W3jViFV9am6dvdEHfGhBZXzMSXDtB4",
  "key34": "52RkUDabS1ATcxS5ec654sjU2HZJ9kdiqhpTywwywsEhs6yfDVPAvYeCLjzDRfM5349yu1bGpuepMuoqJDxbc9EY",
  "key35": "455iVGJW9yuC6kK7FjALSonVpAS3rJiAFAmTNQmwYtqMu5mFj1wGkUzaBLW6kVBsWgDdWxy72sf4APhWe3ccvaFi",
  "key36": "5ypa4TNBGekotuWVAjutCuLQfTLfke6kKcBnK4whZmELcJ4k39VdzUR4pMp3tCdxPgCWepgH8vuYnDB6ZKcpb3BY",
  "key37": "v9x8jPrwX4EBjnXNwyuWsQZiYC2o9m9cJDNXzfe5qYdU3kcWEyBa5Nj3PVp5fqBs1cmQtN9bH28Lh6vVPQp7SJy",
  "key38": "5X8JVBjztZdu7pX6VEbeufHBX8222FiiouwrXvwgmQHL92Da2qRxUVMSd17GFGthdtqU82nmR1m6etskNinTrfQX",
  "key39": "3eVaeGeMs9uSs3WGj8jRSrnvzzz1A5wL9ek5wmAMLwYfxBsHJ3fz7XjKieRf8CH1sfGhj7Rvx8hYrDjV9ix5YnbD",
  "key40": "51SQjKSemjhgcRFm9ca7raiLYnxz27unK1fSHaGY6ynjFox7xWND4HYAoJpNSW4EWC1aMV3nJVteKVAnJZdGSYBo",
  "key41": "36zkdhczTeWeJCvYCzCZ2uogCZbHffTha4FeLZDxmJfbkA5g17Hjh1KuFc5ZajZ3wgFkTwRCVdEZWkLuDtcJS5jQ",
  "key42": "5adrPJR3ueNLkHyYWGGRgNW4WTc5TRzELwf2bixSUBkQf2bjebec4KXymvSQxF59An7f7Nu31hHN5xjaNFGyzsSv",
  "key43": "4RzWgNyJfSriERwoRakeu3sKnneVGST2721pRnqZhRmjzJJdTsGEEVg7tTBHqdhAMAiDCnSRga6BqW9pdAzTC3ck",
  "key44": "uTxg9HB9iPduVEbJafpgUcmt72cXn4YcqDFSHrPqaDBVd6E8qrPNwwSNkqsqS4W21FXRqr9tWVhAXQV8zutaou7",
  "key45": "3jMQ1K2MvLRzuB7YGyAihkVa4HQTjZ3pyxhLPNvaREe7nZghUp9UpaGV39t5vp6KE3eVCs3nNpffVSwhBQoJ1JmR"
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
