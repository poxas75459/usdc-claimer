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
    "3VX7LLGKqkGrQ3wmRBqTUcGsHCcPthe6mdSpd8HNAvX2fQaw6aGdihxcT5UagqPuFoWuTcbgphTepKQrJozSWV8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KxVpL7rLZgVFemvNNFi36MMXFYaiNL35jwdSpYJCof7Rpp1cr72odiTSYdb1xYkLWjnkMAD58og5Z6ajbkzeAcU",
  "key1": "w3Npaj5cpgTicvrG5vUvDTx86YVVrKWBSDjkxJXbJKnE3B4V4PLygsnnvQA1tPYAtLNVd75e3FzBA79tGjXQSeX",
  "key2": "51G2quMDK665hKfYkg6pE1VxCWG9KvYNFkZjDHeGoVqAZ2wzqXSzjgLM2JrV6rMZMte5ECvta6tnXhyf8YYCEtCw",
  "key3": "5GriMjfod3GFq84MUrEog5DveCxNy73od6tEmiXXLneQ6Za1w2F62kRcLeNHzVu8fJ6piQdAdCXHTuA4r2orwGmo",
  "key4": "bxvDSaYc6Ykpi61CFSX1Qwy5Y7U2aoZZ7gX8AF3QkugNt8NaGVv1q5wbEtSnBcHF8eWgWfGtQyemrB5gcpJmWAC",
  "key5": "4xy3P7hzmVeDYLpmjnXJVtBWbDNMZStiYyi3fb5sdH5sAPcyHQDctGfx6VTpdCq6KnSrND7SkAsH9Rhx6cv95hBQ",
  "key6": "5pHDhPyr4ZhdVZb8TsNhr41EtGzUhv2Cco5b5tqUYKabuQjLeWFfg5iwG4g76fnccruXRhxP8s6V9dMhykBShHz7",
  "key7": "2dG353WEbsdMiGF5AZY6d3GM7K95L8rzwJYBquFCjua5GgbTsKwU8jZvGoy6jfyT5mhPNHdxNG5qzWS1T9FZYgHg",
  "key8": "2gaa4p4LAyxb3JLBd6xQP7Nn2mfttCZtfizPUsM7KoEG4UmsG4Z3Kk63ZRvhVjZTvYewR3ji21aGpP4aLcDmdgXV",
  "key9": "3o9TmuCgAZ3mFGGBBQzuycSQkubZPEjPdLieLHFkP9MpV9GHpgUiHq41zHpVUYoHsrW8TBKvcaf7P7GhzyoDw8AA",
  "key10": "VC1odzAihSZxoLxPqzTnLF23AoDbzh4fVV7ratu9u7f2m6p1tDf1n7vcy1jXqFAFxfWcu8XrExpWSff9uv81Zdb",
  "key11": "4DeVzakwGL4FZcnCfqgT7WeWxULKPUs4tEgWoLtu89LB8QBPpTj6nHsnMgawvaF6deDyHsTyZbtKFppG1hniYG9n",
  "key12": "4YduiQ3ftfJYidyPGgJEAQ2BGS5jDoh2azEubNSayGnp82ofRifuvkXgR9T4L7pLSzayYdk1m8fgnkakizDv12CK",
  "key13": "3cYh4QhekH4Ld8iKrdTRWFVkeqb5mHtXTGXTxhdYmP5RWpgCUFnKmNXZA5E5eZ9Q29GB4p32TAvRSXeC8XJc4bDJ",
  "key14": "3QCLFG16UxGWBdLDHkguQ4t3G67ZAJFNyGEh3TrxSHiRW8G4Dnxu7gumou7cUTV8oQsGTJDQeDZ168ghFxoh5JzC",
  "key15": "46boNz4LZb8UhBj2KJ2QmH4d7DwEWRh5k67YcRpbkXvKdmkrFtwy5c7JSKTBbKJVh177brEZMpMRKj7edWZDu5Zi",
  "key16": "2ANsUgbiKa83UQnmkEpurVaBdSRUQ1o2Lg6vMATAMfUuUGY8JUhPZreBUSC2P2eex8eS24J94p2Bx7Kf3o6WZUao",
  "key17": "5EdtbYTu7cSUMCNj41h4L8KUrz3FsX5KhFKSVV1SGopKuRGuoWkyH8G4bm8pqM7QDj44VSSzsJuB4X9MJuyhXiK5",
  "key18": "Ueeh5HzpPhofPo9VFusszxHvDheEUzxPJGqr3P4tHBDVLBE2QSQRJJstdB68w4rrZ75RMXQNV9WC4Dkpg4A3i33",
  "key19": "52dyvBGnzt3SWZ7Dan2fbBNoMdiN4xq4HG44wiAv7HKjwFYFidRTERT8kqUe9v8EzrQuUFYDmY5xyN3hEyGEAWBY",
  "key20": "4pMTYxZaTLzwzjcqCChXcp42EEqChi2wrwGyJvwMFcCMatta8zfmo47rhBeqTSWdBKu4vSbwKgJ6pUDkrkDpSJXo",
  "key21": "4wco2ynjbsHkGS1GyWe7hVavsV4JmvR5Mht2P1VhmSXkXyVLKBfbesLuRsUw4u169EbCbCFPWSYbCC7e1Wcw4ULu",
  "key22": "4anAhtmV8nYsmrBzLp1vcLFVoZFukF5FL7htZg3bo6EUq1oEZxkvnWhqmT42ESgaXKiwxf4Hh1XSUXSBsN5YGXVa",
  "key23": "6296odqCxmEBnASWZQskZNjCK15SfDRvHo7eLqkneWGv1C6rJivmyaosiuiwYqjBHLRtu9NhwRochgcPA9Wu8e3M",
  "key24": "4UfMUNqq8AFemVyNV5WQ3yeUXyS3ELVahQuMVkQXQJuK5EHSRiwJyif1UxqhgpARLVv3HpSVFEoiLq1rq9Pxt36d",
  "key25": "3982bTMoTYCHD4uWBoxtt7hnqCdGVeKpkNrrAJTEReJ5YDLte2NiELQTsxufMiemrWCpFPNxY1TDuXAf181ibw83",
  "key26": "52D1ji3F7odnEx8Yv67FXjRLXe8MjpsJKQQFcUd9a8QgFbb1LZgzCyBstmaoBGwxnSBrsJUZWeHpCTBjShdvZ822",
  "key27": "yfFGnVpj4oSLKBaCdTaqsQTtdbBUdQ7TqorPggnUaY92kK3QBvQVCkPTDJxwPwAx6VY3vT2G9aoox8fddBa58wS",
  "key28": "rut876E9kaMhEp5R7GdUnAkxfaXzwUZbwBvUnnfwZFnjeFiX83zDJytLSDxCjbBYNuW6R24ryH5QTWwZULK3BML",
  "key29": "54w9CJooj6VfQh89et33sDYKoi9g4PL3CSn7YB1uLSeFNpimvco9gr9Lx5nyXmF6sat5cy9Zy9p5huZFPKtXHFHS"
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
