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
    "pEsYjN2bh641YhqdDTpfrmFMi1YS1zBpPhfNdXgVF5Mm5ocTmLSYWNbHop6WpVEdxNrSxjTawM628xZpTeduvnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EXJZD33D26HJLYjYVSBjVdhysVShkct42521whMVnjG378gfUBuvF96y9RUNUiUFH2uBwXa9y6vVcnwCVkH19Wb",
  "key1": "3SQXhMG1TbmLQaS5GGxCX5KPrVaaUdMdNQdJNgNwXUHZ7HGCYCTDeJoeUKuMCgqvKLNbjCG26uQ5N5QwUxyY6C5U",
  "key2": "4DPm9zwKDtDs33p2sYp7wZpDGTQMKoPnWMsYRYEWwfibGvLSNHD6Ty8tWr8hPvRqCAhrVrxwwgQa4DeHuRH3r83Y",
  "key3": "3jbyvWtUmqMCF9fMHU1ddjQWhuXin7DnYmnzPwUeK5TrEnXYuk7LM7Cw2rRKMWiMu9b5yQrR4BzoFfAMRaRU3XQE",
  "key4": "5aNYgzQZZU6NLtsYKiiRvB8TuPbT3HKzTUggfN6Mbjkx7UJTt9ERTcztKVTbPpw6T6y8KZcb5V332Ap7tNydvq16",
  "key5": "29bVvVRQRP6vidNzY7MWccFyWK9gXdzWVokFYyyt1GLctVTwuYxuvTDtvhfHyZoWmsjZVGGBL78eN5daxMwuxaSX",
  "key6": "2PQNcwjB4XDK4n6hY72Cmt98pCQPeZsbL69pEHXZ17bfcPhp6zRZzW2CWX3dCWPLDsMiDcq6WN69GNDKC9EpcGWE",
  "key7": "5XQfT1fgtJherG4V4n2huXcNo5zcqvgjAA5efztEpm6u1t2a2bjfcdcdksGL8f88RfWqYuUCmpQUrzcSLMVPkyz5",
  "key8": "4uAf4hAQPp6yKqHRPe8eXbrdaYxxQHncvzhEP5adCS78BD5wDYGK1jdW1GV5iX6KR7hUoCh9xr4GmCJ1o4jPUwQj",
  "key9": "4uhTFgjKiJeHJyQiPSzLABag1weExcjQM6uSVGAFPuW6y3gmPJe2tDpFNDDBjaAPx4TFUwRKuRWLMW6SDwRd3zeJ",
  "key10": "2sqhwxE3i6fbUVFwa3VsV26KsyJM4XfrE4gF51bF5WbYeqQBhEYeciUg7b6TKDCzr2KxPHWW7VCvmrLfspjZgGaC",
  "key11": "28qRjQVepMj6Jco3fd95B6KzXiiHS64wGxL1MKad2u9v3KFFxBuKpFPJm5cc4N8mGG29vm6FF1nE7kBkZen8L2HE",
  "key12": "5PBoX6YtbjzD7TzwSSXXM43ohYtP1bmaPrTbQsnfKVxiro7TouP1topthjSEFuCjzCKh75dj9QS7vvfCVEV7kyAr",
  "key13": "4UNFyQDHqDSzCqoYtB6EuZu5hgWy3aUwmVhGBBzgCzFVtdovEwd4PzELZkQ3qmneeJ88XyBDHPEEmz6sXBquUjpB",
  "key14": "3dwMKWRDNcL28RZGaDhAmFN6EosCrCnFAdGTMhnH2WGoN8D2QSreStFrcvXa8WkaLoCcMwSft1uikkaL8S2mWc7E",
  "key15": "3fhLN1h24gXXUXp3LCcbyuPiF2ffEAB6jZsj4tk4tg3YQrfG3aaFzaR6wFZPXRit7CHjXtAgAa5Supqofhw1tPGh",
  "key16": "4fZoPBJpcJUvAdkg1oS6pVQz2ZKUH7qiJhibT5kZq8JhnxZDP5RMp9siw3T7HLKx2kRHGg2f88z1HZpC93UBQ6mf",
  "key17": "4QBDgbRZKWNF8Te7Zsp26aYiLjh79SYeN5tGxxJvRme6DFSmmBeUcT8LYKzAYaofABtBbZ9q6uDELL3hGuNAFQ1h",
  "key18": "31rBhKNBG6x3iY4visV3oPkS3QGf8tmuqFJLZGWCzbogj3Znq2E3XiG7bR4e7xhJHtxMkPBqFEsx8RDGZyMeUre1",
  "key19": "5ZHFu5wGAvLWKFBojqQgHiBiPGUqXDgd4q6ntV8BAfvjmZKK19yr1QECzo9BrQY5eyLMF7y9a2tFibztroHFQALF",
  "key20": "2UhKUhsvFVZwUumDMTjAqWhiyAWXNUBSjvTehJffTMRVHgLQYDA488DTCN7teQToWqMn3u6nNQvhGUqDyRpo1JM",
  "key21": "2RpfU5bjwqWmqWfhjA4YP4fyLBiew9Y6YXwuZdB3EyNsUjY4RV1Dy4u9vzJ9uiQpomUR8nD3EwRaAoqUzYpbPUiD",
  "key22": "3V4L7KhaZh3eG54dAcXLus7W5Vi66nWdkZBD4tzSspQifUjwuGWTfMoZ3LPJKKBpSQpxo3bC2Bvs7m43gwgt349G",
  "key23": "V8s8coZfK8i68aesX1gofj2JX8xHWpBMjZ78UWN75CuDrCdgzdsDjUNGVc8ieEvshVfiArzS7xgUqarqPBoiK9C",
  "key24": "61S2GdKJN7VmJHsxLCXkoJ8qQfLWERhR6kfgSgzoXsqqPufZyYttU2p75dPFfHbZmNTBgL5crTgryjgC4NEgMChK",
  "key25": "4ieVuqzUpchbGCmoRbzRuLfqa5HbmTjXzQAqPX8AtofEGd7HCPN1zh2X3nH573iWVuDpGjQNJXArLJd1zi4bMmad",
  "key26": "2vHVDr8HPaaGRA2aLAqxnsc9j1jM9TUdmEGAiZj1pJ6FkHVRmkCm6aYQtnu2K6LEJkRRFdaTfSeHeR1Hy9pJNwQ4"
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
