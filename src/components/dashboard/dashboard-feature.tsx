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
    "3y9YBEN7YjbBC9c2P4zmPGD4cyNRS2rcBWaRukLeLTrCiRmTr7ZddRG6Wu3tybP21oRpBKSxPLHYvsz5pv4ajqpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tCbX1U8d51UP1CD9yjXX66H63BUPfsd58aqV5eUPkvXUrVrx8858ByBMqWTmEVTF9jBEhEG8Qjy8LnpFKU8GPoF",
  "key1": "3WNTVvUkpq3nqotPXTuHFfGVPYrnWPSKpiULhBjLegcgsEeax1svP6S4JrLxZ3kVhytMtdPaZAqEPxJzPgNNZLCF",
  "key2": "3eHWcEQrSTDuMS1tXwui31N3QnRLu8UF1DHjx5j5ivQadYoRXNePsTJbgv61yk8RJ8ywufsnK22NuHExUCdW4mPX",
  "key3": "3shD7FAH5FXs4dqE8oTREyNkKkw2rtZnEcFcnZUSEiC5z3w5MFAxvkJBYcBoM4A9nNGpYHgVGrq5n9MdGry3hUEY",
  "key4": "393K6bMt7iapwFHxTGTzj2rip5YWALGdEParabgcNEPHj6zRWWUa6DS7rtSoxxi4fFTC3t3DqeNmhKC3nP1M6Jrk",
  "key5": "3VpqoN4J7iwLwt6wXASWwcosoSeuC9Nwfb2MK7WHpxTHcMYnsFnbmpEn4tDdRdh8UuioKd8wYfmjjQbCK8isa1cV",
  "key6": "55Sm2ziiLPZNQ4Xs434Bc9Cia9ARHKeAXonAvtA4pVyyQXQYNPEZvjvaHWt4oqCS12K6qbNnsxmhhYj83Jx2jMFj",
  "key7": "5YcshwQzB2AgcBC7zqujG8tZrBjFUHE24hLvB5jPb49rZRcwwXVGceBZGRA9BBwnWxzPFUFD71nJ7D7Zbr1DxCPt",
  "key8": "3ewdTTA6do1WKZfhWGZBachvb9AxvD4vA8tsSTguqL8WEmRiswAehqQhgwKT2pprthNutv6PZmU2hX86UgxoYRsH",
  "key9": "2Pt1RvLF3mEY4DYvGZKT7r3hqzjRUFRpBbNu9CXy3kkqioesMqGdeAnUS7uTi75pz2qpZKWy7Nm3mwv5FiGz5hQX",
  "key10": "53PJHH8iQZKsxj4eUMZ3Ta4WhYBaQ5dxx8k1DbddnrbvTifauXExYWzaF9xXoPU9Lp68V1w6bgYQbJqPTGjom7yL",
  "key11": "4t5hXjhGrJpkKvaGpCNyVtSHP64DNL3jQWQLeMumdi5KqdA88aRqBrMFQMzujJ8iGEDAdGZtQtKdgWCKRrArTu62",
  "key12": "5BmAzZXXnpYAPWe6xKo2aHcFTR7wnoFjpgnybqUpSRYp8mXwKsnEHZQHCJ1T6jqVSDjKXCQHbYX9punY3ffPuPbj",
  "key13": "5UVqpr6RuwxppsmKzbWdJC3QhqfKsJK1ezwtAF5fS88JqBbd6KaVuMpHmtGZqDWSrgpwPUy7rL3bLccEeTCJn17S",
  "key14": "5i1agQJf3xpeniGmQueA6bsLp2inSjscT9RjPVrAV2UfD6UDsGFa8oVsFHiBjVg8PCKuhWc8SNqLUUHkYEbAUaGq",
  "key15": "54soSqQE6GWHJtKMQzshB2Q5z6kMFeguiDv6j2HLqEYwj9YzqMRNb164eifR7nmp4qxP3UJJQE9kh1odr5m2gQJn",
  "key16": "66Tp5KiSAjekZxZbmw7CK5bBwgRuEUrsoutqhGs9DSqswnNSQefNzWwq8XJ3vBiovPKqgcmYbxHj9U7JpLnj8wdG",
  "key17": "3oTewamyA5K4TaGuSKHuDJSGMZh3RAGbi9Gwbb1iV4ZZt4yT6n8wAsVpKDz7SK4EFkfNcN2FwPdfbJDtQBCwFtJ1",
  "key18": "3WRhdFWj2Gpf5N6rpJz9w82DRyrzDvbUfx6Qc9NwoEE7fhxwZFpf147o2VfDtLdeXkfPAs6tBZhgeg8nApaYwWc9",
  "key19": "5W4An8orpvzj81AFih1eAXup9QtxWMPijCMzRmDtwf9dXZFsMtMR2ukGMFxKvwT6o3zF6hbgaYwmWf3AJqtX9pAi",
  "key20": "4UvjiY5xPtgZMdiJzAEssxbmtJDsHUsUmHW2hVu2vuMRroAFg6fNwnVMiq31FTgQEKm7qtE8w157oZmhjYPfKQ9t",
  "key21": "2EBobkXPNss6x5teQvtAd7z719E54tbfTSetdcAF8fMGVaMZuZE8bdxA8ZXd9ZajGittCWerXbQqscRNAW1iRZu2",
  "key22": "Su3gij2fF1jRQra4DM2kpDtDYa1hrUuGgUhJ5HCnStLQEXqokzSjBvDfiQjeMpnepGFfUfbNC1GteK9k126Jg2P",
  "key23": "57QjTeyWRGCkFQSv6vKpcktCXVGRpq3zWo5GeRFbBAngWcf1Y9QQS3hX2AauerJr3YFRi9N8D8rAXtbzX7xUbRGk",
  "key24": "36w4XNKBFHnDb3oCmXnpun3fX9te9qsrv6VrBo4e3HmcZfzmk4s2XugB5eVtEhjDHjka9U9abQ248cg9RvDdMCVc"
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
