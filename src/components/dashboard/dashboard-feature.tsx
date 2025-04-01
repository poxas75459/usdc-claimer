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
    "5iLSzqpm7AuLEzSBDQMaQbN6bZm42LjjWKH3eWMAf4iyxBTJ32Dpd7PcH5TNjQ3mg3J18DLp239PwhrA4Vwrrhty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KtDckbXvMb9QKmK7pAoUkK9WfCTVhVzDhDq4nLFKHiKm5VxauKCujG38qhR4LSsRAp2hptrEqYLhHg1gJN9UD1A",
  "key1": "5ecpZMJJYpKLeyLVc9XikR3vbTNT28Zzt3wKsW5J5tVKyQU7Y9jY1SiEhRjWeDZuL3X55U9J3zcNTUXMfztftsJC",
  "key2": "3imiasqiq3gWjV2kXKTWJ3A6AyVrUHqqfgVM9iXHGT9NYYXGRLHaPLcyKaYBoSnt1qVQp3jorcJuxbfkn5saGwRr",
  "key3": "GjGYHCxmo8d3cVT4TVcxySaeApEBpDHiFFhUa5VAVrWKM2zFB6oJLF6gBkq7uRCBH1u1HuDfGkFmS2qucd1zaUT",
  "key4": "57FnTvnV4XzAq2b5W1vq2gLnvKWTJhaVrsr2VL8LpyfyLxKUuZ8YVZRRzW2bsubUTe4WTmXKqATn4cixT1azugA8",
  "key5": "35iUAkW2ABWJwMoP13E6NqpxbCcgorWRWeyxkNkpdvUdMWw6iFsw1Grxu5HNqsTPXuq9zFP1EEhkCR7UPNPskvEk",
  "key6": "4X7QUW9sTDckvs5QKURmYREyewT6De6fQxy5sW2gbJQRCXUcH4oqdkZst9HS7WpcmTsefa3As1WdYBNL9zT24kev",
  "key7": "1Qv9Pt3XqfbZYGPUBQdJMonCy2JncWq1mphtDNegC4DP8Uqy16HqT7q6WBwy7A14kcUs8EFNtZ3SvgW7XTvpDyA",
  "key8": "4BSbei4oCgHWva89cwsoZRCLCBgcDmhWXZwv5eFsAXpRgExVvexaVbFpRamrd4DhAj3pyHdFFb1VebMk5savzB6E",
  "key9": "4qGxQ7StVg7zxYExRkGjszcxaY4eF8X5kPsVgUccaXeKwo4xKhX6CDj5o84vDdNuDnT58bAo6ffhPWe3xidnFwhq",
  "key10": "2cjjAkb377woQvhvoSLJw3XRdwfu3vgRzGR2L5HyNT8R42FmA1pAju2GCYN2Gog4zCkPzPDjFqFGogKDVnGccn8",
  "key11": "3RgeMqepxoUZWn5UxvxkmDzERTMhPgdkQ3YyM9jCJeoaxAEhhsz6mjY8wdpukBvb6jzSxFKZr3SkYaDTB736Ks16",
  "key12": "315bwe1VwHmAys7KanjqHQcX6WRRLKTyetX13XApB5C1aJi8NCo4dBhRYj7xvspy5GWraoCNE3iRypxdrHxUaxPB",
  "key13": "4sDUPBRX43RELF5V6fGDruKTdgcMFZtXDvraT4GEknSH5unsuFAty85MrLHWPem53cUNt6GCk6SiaMydVEAQujF3",
  "key14": "2RGJJEDeoWPrK4f99kmftHNdxVYctPXrAek5BuPjtXSSPkArtb6c4kinrLhua1dsSnaRkiBxbXzcJAXxj6CgrfTy",
  "key15": "5HDqnwN5CZqZTSLidueXzzYEusRJNJZLynriZ2mxxCHuSgeEq8FWkjbb4xoXnkkQwt8WCDGcTyqGdoQ73jjdBqaT",
  "key16": "2saQEfLAEy63C3z61114CkRP77ozzVnxBu3PmZsczSMLjNUsn3BCUqM9eBstpYCTfjWqGqgPs2gf4HkKjJwJCqqx",
  "key17": "353R7bZ1jcsVjX6TZeDXScjJLnfgdd6NH2aVq7DfJ4H6AKgeYQSYCYqomSqKemkQgWRUHx5LUHPKRoPe6igg2pY1",
  "key18": "3fij8n64FgLhmyUDwghfSUzVzMrsHJVvGk5ZrMH6LWyJm3HTAmvWr89X99rJT3euLcmWie28MMViy1faLeYGB5j5",
  "key19": "4yPF9fDe2QuxqzGGtdn9poQwkU1mMcVFYjiuPhcR9zrueGpktjr1ZRh8QJAGBXrPbxW8FWJXEe2AK9ywcr3oYJyN",
  "key20": "5kkaGaDqwnBYbkbQCDxmuNZ6cQhJbEsHinh9AuYdKE9V5zNJugYrJTg5ro1KhKov9nnBUAk4G2sXX6utQdmYWPA1",
  "key21": "3uCE9HCcpgGCL17tQ8dpnrQi1LwLbpcRHQFnSkf5S2hebc16ajZtdYXzBFAgTSQ4oxjdFGceRPVD3fTidKSAKcek",
  "key22": "2TpkUW9Ypy5pTCwQosXi96H1jSVr93hVtbcHDf1SUAH3uzKkGQFMWzHmEgCTJRtsUFK25QmaQMxni9aFcpuvyuTJ",
  "key23": "4FVfri87cUfRWUaBCjHdLwdjH5MB3vDuneP7RMkSFYkvVco1qw7EqPvZzyYsFHuaCGtmB6c3dVzPMDR4cEvGG2Rh",
  "key24": "4D2pcKXRJ5WTWRfG7Nog74VSzTapCAcdAJuc496Bi8yBaahTJdDNYq1DP8Aij7NyX1Aw9E96wtKt6vSVWFkYswnV",
  "key25": "5h3NFbgvs72j72ysVekjLopXVznZDMKm1UqvY2QBsJ1hMqvrpKv9fMDoBcdvsQFYbdhkffWLU7SDFmY7ZtZcU2zk",
  "key26": "2s7xGALMDDECMowr5FQ4uTknfb6ixAdqBi6qHmUeiTs8MqCM1o6k1j97Vu7jvaoDPwZmQCtK1GqgP438kgbrPD1E",
  "key27": "46SGq1NW6TFkts3usmuj9KBcEAZiusNAGWRVHFh59v2YbWyM9d3KVKjVYfkvwJga5Lf8zM4jDCyo1YYyg2C575FZ",
  "key28": "3GERLjdZriao7irvpuhKpTNw35cgRbfj9m8NcV1ymrhtagBxp8TWPUnZcjF8z4N8PP5AB9SnAwho2NrQ95fGy25L",
  "key29": "5GGs3X7jU1Jev4NCWbv1mgT81XA4mb4UrRpDhChrTcLP8b6tR64ZBnmA2iZFGR7cBVJqyVhHNSseuuLTrua6ndxm",
  "key30": "ewNPDKV3uSv3NDrqXsq6qj8NtK9oWwT3if4MzJXcjQYcUFg1EWC3QnaeyPN4Cv9WfxBksLvUBGdt57A9ESSo9E1",
  "key31": "43M1hdnhMENX7pnTvPEGECsg9GsGQhuQnr3uP52fhxuEcT6ATCaGNzQcv1q952WtcdPcUKct3DRwTCCnzPPYvFNL",
  "key32": "3xDxu2SLCTCEetTUVCCFa5W2yrsVWH6jB8mW9Kwa4mcBgZezvvq3RGoq443nFAzQFCsKSWSv8L9eM7U3hQQggeK7",
  "key33": "2u1jmAhm3nGrzxM8ytYDsgQDjaHtjsk1hs8mqqg2XeRG1KgCLxZxpxpXaZ5AJD9gC38zAqmhqyUJassokBhqc9m9",
  "key34": "2U2Vho3F9Pr1hpdfwrjPDWCrUySXsvtyVGsL9RxZcXMDnh4oWaFtbjxQmK9xkJhBWSecZKEsVs6n6x9Eg3LNHDXs",
  "key35": "4fcj3d6pcajAj7KR5vLz7UM45CPbWab2wYT5AVEQ1fbAg9a8MeC1YH7aibuC6UNoqGz3rwGg7ZmM3mgXKqxJjsq5",
  "key36": "MYWvfAMjAske6vCxDdnDGanm2Q3z5LLWDERV2Vc8rTVNZGgWJHHQFWaG1PA8S8ryMGAmLa7bnneHBCqxARHqtgh",
  "key37": "hrMoRc9UoHgBzAkAHG6EEjGCnugCJd86S81qbA1vUa1gzz2iQf729kpyZwkigipTBxJZbGYcq5W4PNuMGNCvTQQ",
  "key38": "USwYAC2iZnJMisXNkRTx3Dcjqam6kpgd3tKRgXWW7qLV3ahEfKB6ezwtFxzDqu6WrrUQ2bcvRLRM263BwoiVxRS",
  "key39": "2EgUntYPBWRqVAxEKnS7ehMMjZywTL5yMjfEFsz91pb9uaY7X4KSCWDWkBxqLM6FJnifBPMBPZe1r1WpMMnJjdiU",
  "key40": "5magnzPMwQnHEVVE2trkN368kUkPAGaCS1AhUFMaZ7PMh3ffeVXKv5ux5QVswGzmiTJNYfhqnzbmX4CEdW2LbsfW",
  "key41": "3LrvoGQsVLrLTF6jNtALqWScbzq7qGZHTfi5gy8UQ4goLZn777kaG7yryPGTBgBhmJjjWJzKT7GC2DHUFetgs1KK",
  "key42": "uW33FCwb1saP7pZm9zWokLEuEy6ZaBtVZ4vQ2hKo3duHuGGoNvjAQfJL39HFbxbQwU6MciBJePJufcgmnsxKsqY"
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
