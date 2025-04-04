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
    "23dNKHhSZUdm6yLDQKEu6S3XXN2aMJqAAitdbbQhkWjkCDWS1SZKYbcNktFkaXPWJ2dgo1k4qNK6L2LF3ZJxvf4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jVnUMET9gAQuMiD5PWADszaLkApZWTo8fxMZjy2SieM5judMUqcSeH8h6k1FRYibhgNgS4diP7oQfT15uk8kfqe",
  "key1": "35UuJZ5G5sRiNfRDjzixx268Lq2QRYyBuLN95uU1KkwXEcZ5xXuJwHMbqbd2gqAWkdvBSwNn34Hp1wt6qWCYKr4N",
  "key2": "66sfp7R2iWyiRdoLCPAFhZXXfSrQG8EDMts25eE7KEdAtypTbpngv5aTQBzip3yh1zxB7WZAYEb5SLsFQ9oZBBhz",
  "key3": "3BqDXjqaHqAgX5rTz4grEzwhmKjieXC1w4n9ZDoD1DLQQmeLsmUzk7CVMssV98JQCK1qxHeVhVVCKsdoUg72mxP7",
  "key4": "3XJQcqyMADSGDD8nXuDcdH7M9aJH3ZEcssyto2NPmPGmAxkJusPvteUy4VKX7QyXDfj7fUq7E96L85C3YDQyKqhe",
  "key5": "5DpHKDquGgxZhVzmhSYS9c4d4z3EP4h3ioToEEEhy6j3DxsHUT6ojL6XU8wpjN3uEw9xmC41PARq6v6FHjaXm55s",
  "key6": "2FbDwHEKsq1AHu8dbsYFhHt1DYrTPPy7zLue3M9rqW7vXrNtYVoN3T2Ba9dow2T8fHimPR1SxXjsumU2o669ui4Q",
  "key7": "4gq4yHSsjw2BDtMM77qfAHfKAHdbM937iVfCyjW7HMjuGK1VLAG28nRAeFtXzErvH31siUgCYv66pKNRhhjNegD2",
  "key8": "PZ8rNkd9mMU2fvQK4CeU4ZHUYTNcz99WGVVzmSYkFcxdctFTFy9engRsYWhjCugoPhXmkQC7myRULAQvzN8V4qq",
  "key9": "GMUQMWxqbCfQyKryKM2mUxtiaAjMGFeMcyGki3yEVuaX1rfP4MNpNtWQ9mwinovc8wkBhxwT9nobmQvg392L4Aq",
  "key10": "2L1A9PrUfVb9o8KRENBXoPYjU5p72d2FxaWjpv3qcCL7qwfqzVvYVRrNx4Q9qgjgD5PAHtXnecdouU55ZRu1U1Jr",
  "key11": "24BomwrDqwrmizFzH98AWiZ7wHBZ7sRK9Uut8fznKZJEHKQAPk7VQZNqkx3gWx4MkBDYJSLi6wcKPUHEd7djze97",
  "key12": "3Fm3GT1Dx8dAKjXWKJcnge3ioyoyL7qaRLgYcmLHM44Jje5BdBtrvkWpNWrcEsex3oPX1r68R2oMRW3jKfNY836w",
  "key13": "579QakzKYCudDnbPZu6GRA7aEKE4tiToLy8Athrsbr6NQW8jQzw5GrSM58aoXNKXBWWcbLx9npE5wYerjzUiijcJ",
  "key14": "2HZ1CKSfbFkLXc5pGMzTki18Jnp9T51TskT7UC217suu66ZrBb1DadDxdWUvqduGsQ9qmRZiqGo2aEUq1z9uNZwt",
  "key15": "YKU8pHoMdrp4d1YJNS3VofLVySuVKTFqgseKv7dsYbCjSNrtyrum52axNYNvFynGJDVKHYvH4ZerVsHeRujJevq",
  "key16": "2Bgrrqn7Jgu6DTjJHAqx7yTdPN9vHfLpQkPHKcjz1u6hhHvUWS4fh1hJzDyJrUyFBKGP4R7iv8pQmnKCVQS5CiTh",
  "key17": "4K4FhcvfMzry6ixWmbyJEZ2LPwCmQTc7vjeMoeUyZ577dYQJZsJwv1Mf987iKNeUcXED2vMJqN8hsRBy3EU9bjLn",
  "key18": "jor9xcrVyC5sLgWx3m8RUeR1p7GjP7ZNVnhXWEJccLK1r8GgWfBgG6sehu6hnXqi2QcTahkdodyvtFUiQDLcnA3",
  "key19": "37GnwNWvXQr8njSmMTHuFc7wbUe5KNcB4d15AJRXpxbydQWWPX6FgKn3p6fZCYEy6ELZKZQHyUVXRvcsj4DLSeY7",
  "key20": "5fyZS5cyNSFiqK6w6eazura76QJevBzTshjwCUkFdaHKHkDTE74eHfZuKH8eN5Nqh4yUu6XtkXPVaUKvDDeusZge",
  "key21": "3SMtCsJ33q725wqzkt6pYHDAARA1eawyPziPAL79X66FYtrQu5NXTEPPYvyH3DpdPq4vUv67xGpbdkQGDEdRwdUQ",
  "key22": "5Pna6ymHwmcpcYsiaLVQrckoeZyfYc5VQLkCiGgwnSNxK6u9zD5d7Ub1zaoznvr4f8EHuupdAGiYffAoUrYVFU6J",
  "key23": "iEJV3wp9uYjfBbNMnYEzqjW3SwrxpoL5rGFzHf2w1bzDV5nZii5GrJq9k7UBYZYue9AKnMoP93ogAyttSmwDDsV",
  "key24": "3a2mq77CtHUwUxgxxrfYNj4vQmDwWmFmfnTyQ2njKpBoTyN2RtaTN138Ps2BaKRzuSfRE2skvnyejifRCorSEmds",
  "key25": "3sFvySYcaR7HCWwTuqNfWAJJnGXiGobQAJ62thEXciAxdbmAcKnieawcFvGX1iiPG95wuwbXr6pnCFiwAgWkDGfn",
  "key26": "58zr6XqV1a2Awu9MuvXdYBmaHjwV8oQwkaxHJK72NopDA3HAtBn3vwTiLXagLAFEohkX79qzFmnuL5QQi1zb11Rj",
  "key27": "2UCXXDHNgcyQs3rTrZ45s67a19bCp3zWBJgvwJ8fcmPDUPW8EYjthz8yJkchapMHNvVc7z3Ce5rD6ozhwsrdgCev",
  "key28": "41yBDWr4WBWzWSA28aaMWYMTjZk96hzV6KGCqLfHu5PNX14srZ5ikfzXBXy3AJ1ktjx6aSQCenstwcxVM2WofYxx",
  "key29": "3nYqAQrk3mTrJBy3be6bRuF8wqnjnk2szEpknYyhLMPU1NRPSArZhn2iRZDJoaBnFzE12D8zLeb3meqmPFtzu5x8",
  "key30": "5z139AeP9VnCx3bhwvCWDLnK2pFa43deGySFCgKRrFTRoaEokcHS8Sb3pbuykhnwAPM6dX3jNNo7UEokiZjTx87k",
  "key31": "3tfzqC62AMyeFLrkkgsf8aACGLPFJUC4rUQnJKU3Vi1Drk3y7hj6NYXp1dCb87D6ufE8R23WoyppPzBVaoFfBVQj"
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
