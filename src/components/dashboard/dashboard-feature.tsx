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
    "GbJeCZVrLFFrqhRSaSYMqvJQJKoyhNp1Lfv6oYjFMwXzi4h4BXrtuBaFgmfDQzEnsFSqHvcxVXJtGawJfSkxbhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n1mdP2dkHZGYZD9qPn8Pc3YvFoaf4vu1rPhL27LzTbkXHg4FEia2gDxej2aYzAwA4CZBWyQ7YdgFQTbdwxQ1rMq",
  "key1": "vxRH95GvTX4eKvjYc4EPZXn4qCpXR3nVyR2nN5SvoLeJ4QtXxhXVAh2xsqZmkRtWbLxfb4wdTGkUsC5QxxJNpKv",
  "key2": "4S4DKRKYPSfxfxN1zQvpdgEowU4iwRNvSrEN3XSgYEz87djvDSNBRLrGqdcKJBf49z5SQsfW6fyJn2m4JcAj2WpC",
  "key3": "5A1aKQDnQav32yDhxp1YW2ugEJRwt3HDbCTcEo5sjV7ihXQVd4ToVFi9P2T5zi3TptLG7LzWrDtQqHZFRmX262L1",
  "key4": "5mXKjUDR3MkFJ9DUXxMELCieCn9JHHqHnqNRJAb3rDp4apJ4MtPzvjVaPWT73k6buYJzBCpS3GZbgouAe7ocFHWC",
  "key5": "4RfB438A447YNHiZMVtvqfoStEniQ8R261oMLZAJdQ4PGSRALwD6h8anv3aFyuA74Sb7oZXBDHMSPBXDSMUXcAtr",
  "key6": "4E521CwoQ1wSFQVpoEDM36dXVjPqKcyYTW32Cs5FYFneCp9JDMDKuYZ6ccf446NB8HDYpZf36w5EeDBt9WMAHv6G",
  "key7": "ENhBuVhYdUqEzsja5DDtrnT5UPToqsUXBSzEap63DpoVbZmKDA1WEj2KiJPuFXDv1cfvYwcG7hgtr6jvRwQ8vU3",
  "key8": "JjF1W1fyk7gGAwv9MCG1Q9LWf4YEzpx2E5cWU59gr2ugvsM3H4zhChZQTzGqb21HakTN1PwfYDJ3WWPs6npuwUv",
  "key9": "hB5MGda6YjsUmUqJ6G8Xbcu84U1ApmtDvJ8mGX31x1fJatChVUNJkNv4QBLRJN3v3Qg2jyTMoTRFhEV9NU3dMdF",
  "key10": "4rCvR8p8g3Si4KFKt1K3SbEwNBbR36UZ4UoeRmAMb5N1R5HU2FUhXTEsonfe3ownjf5dTKKHLdMysx7FxdRSkN9s",
  "key11": "KctsFXxP453cpPr91tMGmrw7tm79kaJKrrfUDP49FRRU7im363R6DWf2NGjd5e14oYhfpRAR2FP8juKXXMTfsrm",
  "key12": "kj22P5dMWdjydBMgrpFDEQbxHKfehaUtnbzDzkt1SaajPRxwnUqxUPoc9RSxkMQYW1TRRvaJkmtuEjABPM8SdDa",
  "key13": "4yzcjnCcidxErxEnMVPczseJfbvqMyVKr1gicbpPkDrjGp5uy3gTJ124cVYyj7J74mkMXKT3gQ531T8JS1kV6TF2",
  "key14": "2iBRz3NmiVz762jxfz7rmnu7gXRtKFFGgASQCeBRzW9xWxL1L752mwdJXwVxhLhAsFu5dg3myYrgVQ5QN9gHo3tt",
  "key15": "2uUwwBHEuHr4Uc1RuBAZv1zHa7oukXBdcLMfftRS3aipZYp23btLjkWzVYnpqH3viJ14UmwzahBqSNt31374NyJu",
  "key16": "2nVbWDsy92EM2LqS39C4k3Q4RyEf1GfPujWGV7dyfNEwWq2YhUEeGrGkw6ezx88ahqhhHL16gzTxvAVk2JoSscQ1",
  "key17": "255wWQ1DRs9VzFC6wBMh3XvRmCmcAXdrtuqctuscAJGanWEenc9JpnfvcZjdxZPMXsNJ9Qcc5uJrfmKwaarKX7Ne",
  "key18": "49LNc3Q7YwcDqYAzJSiempniLXEybUJMNRuhoLbG7X5k1Re3SVnZ5Uynna4nnHJPrGcsWHMob9UaWiw1FXYoEieW",
  "key19": "78LZu8drrANbiQ6gnVGRoGWhojBRGp89aDhNTXfAe7QXFiCgJMA5NiwVJwx3CFN9VHXvf7hxYhgBjRo3tFVdJgq",
  "key20": "s584PC5PTntemQ8DboMGx78pJtzg3xUitEuB4PL1kEdsQgesk8HdnR2xYKDothCH2JzzKHvfzfSABJKjybiZNRE",
  "key21": "225d7naugW8jxVtm7XvTecAySQfEMYWUsE1HuzYiiFSFrEWddDd6KXxsBCsxUvXzEsKRhxbhnafxSRXh6EGGqZ6b",
  "key22": "5WRaDhjY2PiFuES27FbBRt8oreivusqmvA3rti9YRjtwxKb3fJKkgz4S91hJbzWeZ2wKrGocHq1RF6uNkmr4oGtj",
  "key23": "4DikzuZGgWpvam5Wzwzpp234YpA5G3Mdgu7SkruCKoL3S9upGkchAiUzAMoAicf5baUr9CBWPV8z59HJGpDFrVsR",
  "key24": "2tfJa7ZhEEZPMJ4Crk78xeKFTpsceMjLawkshPwtMUneJkDJey61zo8BTZdMNCWjgz7b4Pw8kahL3XYsHrQ9W2Kz",
  "key25": "63hZpBSkvacARf7tYGM5My1y6XQocFxQPJgeKyMba1SezJMzLULF7Fp6CbCiv7qZp1NyfEvq38dLghMabhFoXwma"
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
