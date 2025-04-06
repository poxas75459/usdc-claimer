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
    "3wnpStWuAcy8GGi6orAXJNR8KkTwekSWC2LV3qnp3UnBXovJmehHE4jwugEM8X2obLeRUXGraLGBRon2kVPmtQU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KcQuPXoeFoa7J6T3UkpyV7qp7GKrXXuP6aMFFn1QDH9KqnFE8Xhr4f44prg5D8pCWxxkKZZWPLUW1JWv9BnBVP4",
  "key1": "45FsqEf29VXAzxZKRtYJ86FTu3THHbtPy8BC5gkcHLHud8ow6xnN2rZ41fFzYAqqdQKJTp98Y5xYV5dSPfyjSw8G",
  "key2": "2Hw75WubjdVyNxaAVzAMyuj7u2YJvqPk2PmTcCsd94eLEchWV33ZFCkkxq77SNpsyQxG9HA1xjWmTFnXMT1EsFuX",
  "key3": "4DPrmML8pPgaZyMPE4B9sR5UE1N7L6okvjCfGgb54vpusuuuty5tFNBriCURsWrvms9ssdY1spSCXL3hzPwxGsUv",
  "key4": "D6QMJJtrTLJBJj7Bvbk2hhVddEN5A66zddoSh9dRUJp2355JFQa7kuNzkBVux1bw1mTwZa7z3sawBC6Upgn9sh8",
  "key5": "66YpLuxZjsh58v4DyeteyCdnPGLnu5ZFR29699FHc7n2UB8553pn3P5HsGUpcGd8pn1bB7VD4E3yFvn67DkQU6z9",
  "key6": "4CmXZ2Fno2BM5YPCSoet736b47GVtAvgLZTwDK3dDF7ou4SEdsqitXxJAfSGYjNw5XpZNpMk2CpgmGfuFoVfyFd1",
  "key7": "4ZhCKqHRv536MsoG3uNTBbPsLMr1uhkvYg7pkLjCLN7rFk7wkcZsyva1VXhidzxVg7uRT3fB4pYkqYiok6PJX45r",
  "key8": "2Giht1Ry6tmmJgjBjkLjcEYhwwBqfsaJkv9VD4or7o5C4AHwcLSkvc5v9hZYFczLqQaNwbZVumSRUbTtWie5zZPc",
  "key9": "3iejrqP39ixRAJdcWA9sJaoZusGgGQXbvfXC69NZ46oxgswn2rDxfismJaHKpNQp6GGyNR15pn7LMiS9xyoXuZqi",
  "key10": "43ZVx5vwKhg873bFvafYYa91tbxRZXoPpWp9QA5PYi3g29jhg9xYPYXSsq2XjHLYspK1Mh5vQNsqRNWUiqu1iAc9",
  "key11": "m9F1zJndYdwF7TbePnhYz8JdJCSsuooqCSyDTmchcmTtm5vuiokZPP7D8wiN7Frq4BN43AVQQj6SBNmtq9CRbex",
  "key12": "2Ne2Uf934dLAVdWGaHKHHdnXEr4Lp632QMRA4NzWARaHtcwbspYKsnAgX8wGVA8DcdFqUfZo42BWucQkmswbvHrU",
  "key13": "5Th8un7zMVxSBYZ7HvnbxzM6RusWp5CeZLUu3J4Mu4WCN2paChDEH3z1eAHR2Fw8n8PLAtKcwfyNz4CukWdrqjyw",
  "key14": "KUzuA4vZi9B6ewUYoekDFT3LAq7Ra9Rov8RWG2zigXvNX3CbAHnkDpGbZLfP7CfJigQ6wNeujDh16kUb5qrnLs4",
  "key15": "4herDzhKQu5Gxd5axP4twNUQ4tAwK8GdwDEH6H6ppMXcGPqN7PZYU2HWrLv3RkBR9UmUXJ8xkvWRpDKS1B163WVv",
  "key16": "44tLuZXV7LWP53Eh59wiDKJwZDU4MNnXtqTHZLgSKC6zScpzUBLpVsogVcBhEWffuUtNsf2hbB8Mpyx1xg3tR2Rr",
  "key17": "3L1taa1n5URTbWemCtYfbekiSchb7NiwMECqyaBxPQrQMYzzBvQtDQ4RvyCRahLDJDnC3ewzmAoGga2ZA2xfRLEf",
  "key18": "AMndvrgwNJMVsxw1VKewpqFfiJc1vVcEEJrJA6j9suYMQYnyQ1enDiCckAFXrRkfxtaRrwyg7RAKN4oCq4KJaDJ",
  "key19": "482wsfNgKGYwUbRVVicNCooTQmYtLBdVF88UZRq6WWAEu5hZF2p4kNo8xdxy1qNVpRxY8cCQ1XchGY98KziToXaE",
  "key20": "3tyfF9ArXbuymb1zDUexeQ2WyWs4Q7wygdtBSJs4YRUHvViwjeVRzTenUJgPg5LTgyDs1jbbDcu4kQ5ALuP7NTqL",
  "key21": "5cw38M7oDJmMMnoJK1RidNqJ7uKLQCKDUuHgsbjP6BVuohQXwjBoFEWsUrbbGNHftbWGhnfW3Xnqf4kdSRtdGP5W",
  "key22": "4AFCBTUKiXqwLa6xswVMN2TAnbWfMDLzhVSxC2Ya1BoVhJsYrfWuj2DqANEGxy76yiLwvykLo7dFswNkRwNZmY1n",
  "key23": "5EEGnqD78kCpkiWuwdqLHGy7ACpwpDJEiYdyrDcRj9qhTvgc81NWjL6HvCiK1NsnHkNZHD38wMe9x2qpjsXEAz5C",
  "key24": "4NMsrCdDQfqGapkDw7mAy79Jm4PZfzUx4V59MxfhMbB24KhCrh8iAzA3xuLHL3iaCF9C7Vv8fsyiHQ8wRq8cr5KR",
  "key25": "yCJoawSGu6BxTnQHTiCBPGNNVK7orpfBuysVY4K6Yd21bnQd7rLoZPFfTuMg9Zn815MBG3hP3AdZr8rMWqqMSbM",
  "key26": "2Pqhnqt3acWLzS13EJ2C3dnrRFLsuHrs6ijskpnMXaSPYQKBF11UEP9F2V6jtgJHGhFexmmaENjrfhhMpveU7Ab3",
  "key27": "5m83dVMZaKmxBVh1wghSkV7NkrregTQPER7umFPqVihbhr1GtGQyVc4p5JJVijT2vm52e4ioRZhPxP1Y85rS14PV",
  "key28": "4cfcBLFUR2UpzTX8AcUDaxDiCurX4MPV7dXf9vyFktyiN6GPkh27X2djLAeLxjqYYGvb5VrsJKntx24AAmSz8fUF",
  "key29": "3uDKvi81ZcW8XXuYfFvexmWJCzPDx1EucKvKKTJaTthwDjNVnsWZXU8xpBttDAaywQwNZiMQNqADNvv4FPTUjjyh",
  "key30": "3ZzU3Z8ZyghCbkhwpPLZkXqPHUJXsHfiEQYjaeG7zVC5RQx6CjspuE9AbwASPZSYmnji4Yx2CPLFMU4yk8kyuXFL",
  "key31": "4dK6Mv7vvW55JdZF79AgzkQAv6pKVSq7Cc2ec9BfadAUDqpAV1mYvJDpfnH8wez5DYmarA1U1gb58zwJiT4tu2ck",
  "key32": "3yG5Ap51rCgLUboZPZEgZn1gEAeLPHHL3AcXZ1zbCpyWbxxa85yfEgGRJzDQka4J1o4tMQ9VQ8N3Lpqa8HzqykrF",
  "key33": "2GAamuY6PmCG8mvjiSd1dW7iSrfmMfqey7B4VTSz4ZsqqBaXh9hpV4XPKDQe7d4RfdRmu3zXm4WW9JjdmBeLj7zK",
  "key34": "zwNUaMZd84RhapkKhVjJBJHULUENsvLZg95oyZVAbYYGC3rJNJ7bGvJFEHLWEhSVFVvN1v5s6mp5FjwNrqDaZ5k",
  "key35": "3FsVZqPDPXk3YkZ3bmKBcontWTLTu9vopbND16VK5C1ymuxQXMH4cXLvELBjktrtXDAePE2oAJvAYbYS1A9z8SLg",
  "key36": "4LtymfnZUtJWyYQy6x8vwHjSLjNUZdb8LwdVC9S53Xh1oqBz1gxbT6fhyhwC5FgRhqhbZog6taQgY1yojHKGEJJQ",
  "key37": "58fxvs4B1TZiw5QLQxv9MN8NuNWcir8QmKvyQcjyk4iosWzg3z19pANFevT4sPLUkJBGAE29xdutQ9G6ejtheL8Y",
  "key38": "5Kr7s41UweXkDQV3ZfaxXu3SLUts2nUEKUrFV5JyyU9ftWqtKjke2iW7yFHfidvQSbLqsCqzWCqaSXAPLvKyedn8",
  "key39": "5FvzFpM4mSxz174byWakN7tTE7Zjxz4WpKuBPsEyzCZUVa7MVRMKjJJjRvXr68i4WD2nodPFMJryG3nLpgPR4pXd",
  "key40": "45djsKo9N6en3agX2Uit2bmrKU1p7ctXDFtpKE3ZKEkcd4PZ2ZBX5GB9SPy22UZkW7ABmBvLcjArHYdit573MhNL",
  "key41": "5NMfiFqtYm4pGaC6pU7kYkjR8E9VvwHyEzspsAHABAbqV1ix58KpRnpqWmqVFnuGedh2qVorLpYbv8pEeGoeu27h"
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
