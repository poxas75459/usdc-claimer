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
    "2ejmKLP28q8BWYBPRPNrofTkQWcV7wW2HwBb5E379r6R2fKDYsVZqfHuKNmXePz55ocZTZVkS1C2tVXnWHA5PeN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46HtSs2VPy23qS6uGpGS8p3Cm8USY2jqAGz64rNhNCPTcRmDhcn4qSfY6dtLhuohS8zjFtRPXpHF713QKe9oTJoc",
  "key1": "3uiibUjbFR6tooAbUympFxzmdsZdySCzqqmaLD6BNRMsP4JJK9uxyTtf3iL2duBwdzo4ExASgwZ8SRWrUVSiAUQH",
  "key2": "5hjZpMcNL6snQvVHVddo3fCbbLRDMfst3EmmjgtB5HsK2nTWeo2717oeheVJusi8ozNSfqqKb4vA6F2aQaWNqQi6",
  "key3": "5gMToTFVo32orDJdsB9NLHNXrjJV3xobPehJogjGd6msAYm1mJJPxWJYkET3Xw74NYPqkHT9fQ9BkD8VDEAnHLiH",
  "key4": "ym526wJdG6XNb9PFPsA9y74PYFWHPmqbEMWWBS3HMibAVzzvVBDPA66NsKNyoDESrxUKzhYH4FLZoWxX1Wmi8mU",
  "key5": "26ZhNF4Lytnm32t4YxdTYiZ3ZYLrQkKR4cVe4WuaQotNWCbiHW7w9r7fffrbCaWXQPBFzfKNE6gBTNJSFD6Wc3Va",
  "key6": "4iWgMkfUxABrmpuUavySpFrsUa16ceHvK1QbxDyPNdQZeYXB1K2VqiBKvTBKzUfcpjiKYww9rPBQP5LygwTjdZ9o",
  "key7": "2Ckkb6m2cnBQMFiYsNuvJNCwsXT7mpBWRE3CLvwtG5V28MNX8MWLqXmwHt7We3o9xSEFmHrmCWQKoKkqMn1hg7q6",
  "key8": "2HJfmT8trwR2fnvhXNBqk18wqYVqk2EF2iWvKFe9cYYzjwp41pwV54ifYLxYJz2ybo1b8djUCqhwwkePijqrrQHs",
  "key9": "32mG1MGmVhCw22qh41TyWAoiGTN2PnkjM4CkFiVLs9w3sK8tAGd8qLSSzszXtwvheSV4zA8FviQnvv4GomwG71BF",
  "key10": "3dTstx745vBFYyJc2TxVoBfdbqYxremc4M6mcmWvHQXLGXBpkuUYM2bVmjiMg1QTCzczFvM5ZuTw1ZoFizGpHdqF",
  "key11": "3ocBwcsyaPN5LFbdnYKG6d9e71hFX2pkriwZb6tmJcZrZyUpr3sWTv4HimkwCvR7yALZRRmd4tMadhZs9mMVa6ok",
  "key12": "2exvNng8mtM5LnVho9kGUnoRFgqK6cEbPbPKFowyouDnXuQfxVoBYBjG24GJ1HRNAncdgLdF9JjcvhtqRb886swF",
  "key13": "2oSJwDsjjFM9wtWNpuTSpoXYrMd1AuC11Jw3LLF35SGabEMrr475qccErTQwxwvbsy3gSKYjJaGeWXu6PpwuhWFD",
  "key14": "AKNUvqwMZvE9gh6eQh1aU8iR6Riw92q4P3eJaPDH3sLXtw19zqKpoSugZipJGSVrGp2PuEWquR2X54FX8YQskiC",
  "key15": "2HtWEQsUsFZ5VV6PcrRAmUSAtFDxCf1bS6h36cHL7mVzBBi6HuvpLcgTuRfyeNrKH4BnWnUhe66rSbdBLwTQwBhu",
  "key16": "3hE64Fhw4VJphUE7gvzhXw2vUAT1b7nb4F7TChfvcZnsLqJkxGyVdWTsavHPsEkCg3PDPiowuq6rNshWC1PxTp1W",
  "key17": "raEGJ2DEBZUweLVZRXqzkAj1DYcyELP4x7ZjJHPp7J1iBBeCT4aLQE25YWQRThtXKxo9TZe5q78hwNMYpGu9Hfg",
  "key18": "3Fvg3K8qZMj1hfNYT15FAh9j9Q2zCrRmJTmWpvEYutb9xq28RSZ6HjNML1YVTn4rverVWMPv7GHj1bqgSeCLUqKe",
  "key19": "2LiLnWWySEtNaNhRHqcThMgJVrWuuje94qcMHgyZ2mizB8hXrhNku6ZFoU2a72rG1yS4MQWpgLJ1yGJyyHCCKgvC",
  "key20": "5ofxB88Hs3gf8wrNbcqrunBNrswsjdGsTYG1yBZF6F9EeqzfPV2H8F4MRegX5sBrPKut8hu1893WBLC6kaRJdJ4i",
  "key21": "bjTrma6V64j2LEP7daCKgfLmsiZFznxQUbuRMADWUUFh4MQRdVTDrwDuJSeKcyYtjvPZ1EM27cR7SGbXZLHdevN",
  "key22": "3p5t9JD7ryucE6EYSVtVhvzXdsgdZpFLFavU5b4EwDukrv1Z3tcZeWm8giXZEGFDiEd6c1ARGgkbD24sidg7QVep",
  "key23": "2B6A4tdTkU5Zkhxcjf1SMi6sQmzkvAxgVenQPghV3KtKjBTRGkCdZLrvWmEFtn6cGkXjA7YhxXjVjaVA7R9J33Q4",
  "key24": "63SpLbB28tnj2z9qthDzGCha3e2vmhu9owKedw6kQX4mZcPr5kRGgM8YKAo6G8J9ct3TXzgUasK7V8nFLJNUJoq3",
  "key25": "4SJyU5T2MbFu6rNiTmwKsd8Tzo74kfj2wF4T2L9aCyCKAruoJ4DN3pNv3iMHNcQYuHP988QGDSyfk6QMN6bHv772",
  "key26": "4ZhJx2rGvDRkdCzM4zyb9ws3XJ6FR8i18CQjtWbMM8qmx4NbMCLkj1yAUyYJprweCHzjbdFBFwj8F6c9ByTE8id7",
  "key27": "3T2ZXmJM3ZnwJLnCyNrfp48y5Eer6Te9zFdmzdqg546XgMQbhnS3Dz5z487GgdaeFGMpvkPM3QYLQBarnC7M7J51",
  "key28": "4G7dxvg8m6aLv5m9EyyTvgELhPE1DtZWpLkevuHZERBy9dBqFwFZePrQvj7oe2Cc1n5YGNTtXycvXVviPaJAUTBk",
  "key29": "4dw62WMrRpkR2N3FqiGy2ouy1Y8tDVEyRLYVNiNHb8ywUQ5f53d6FF5McaVuKkqth1SLEcBmNQn89vUdMbC45bFK",
  "key30": "2JwfWtUQXjQdri9WkJwDTTwFm1K8K6Fu1sRvfDhTYBrD6CsoWDzmSnBovHZinbirX9zQY6G1n3rRhM5kNp7ouirK",
  "key31": "67Egh12Eu5aj8gRR7hcUF9mL6XdwHuZ7WNxoD1GXQLXAMNkmB8bmiTGYRzh1Nkm6RkqVb43LTLpDR4nrTdKdx1a9",
  "key32": "3i9NqX8hBA5xKU2RSFTzjtrMhU7bu4UWPXRj97GS4tNBE4uEJ4HnfoVyX4acpGb3ykLF9XmFbqdKhm8YAci4151m",
  "key33": "4QSmNDjLtw8Mf35zmRsHmWh8wH9TXXUFtXnZbJhgk7MzspWNan4fmuoKzGubwT8jfFvuYJCrUGyAjekBX5hmM9E5",
  "key34": "3EofH2k5jAwPCpLkrywGQWGgNWyHqxb9cp23Uhu9TRk3FzxFUuFyxuxqRUeS4Nq9XVj6itUXxVfDrRyjE571KeQV"
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
