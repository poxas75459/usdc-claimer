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
    "21RbCqjL51HeMnTFEmqUTFtszoNth2Ky31HPZSTUkEHZwp7Q1QqwVRFSDbJSbUyyco4XY74LjWiD4KBqCuHezVaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j9sqsRDFBYPrXaraeRw2AKXNC3fKBWF8kHNnuvjqGZNSu2dHM3ESz7wwJ8TRiyfgazUTREZ4iA2KJVYMseB36H5",
  "key1": "GuWYTE1G1h84EwsK6grjC3yyjT4XfobubFjcfGrfBoWLeheEcYqvNizM7bbUruXBaYnxPfSMqAegNs9NC18Hckg",
  "key2": "122KCg3ETLmyzGBqP7iozUkV5DnoWkjnYuCpR2Y4fNZ1UPZSbkcJXEUpnKSyg9Gxg8JMpu3xt5HJnnqhBqEXnJVc",
  "key3": "UCWN4DRfo4qBda31aXAp6i1agCnTtDG2qjYzpaWpbNRFA8SApGakpoN7oVErfPoMiVqjUhjGb2TaQ8mQZnf7Daa",
  "key4": "26K7jb4MgoCxgnziZPBLHmnjE36aNQMT6BqcNFvwYdECrjRTUjxAF9F3imsTfFz3DDCK62sJzfr8vT7hFMMqoSsa",
  "key5": "3U2h9CNs6eePMedmrZfUZtsQrt71Vs4j492WN9dbn4modf5Ewvd13UubJ9DheNMuGuqaaXe6btA35jMNEqCmuQ91",
  "key6": "2843Q3zNZHowzX9nM85eWMiqiWjL9MmAHXxAxuJJqb1PZ3GZfYeqHtcDDsRZMcAh5qRTUidZxEPw4pMqDX6yNj4e",
  "key7": "67as3JbMxPSq7acgaYizY5NJNtEkHfThyHA6XZjomBpPhYP7zozAJXmdsXmohRMVTGri5jUovjvsovwwUvMV3Ki7",
  "key8": "2g5nYhyRvGckf1hD18LwLQ413zATujKM6Z6jKsBVzT7Mb8qn7kjmFBZW3qbNGbGCLXSrP4GX5SjWLMQPkcVXvmPX",
  "key9": "5bDtw3SxUvcAWWERTXTjFfomgRuYPisWxDgWjhPtYDXC6TYYxQCw1S2PYGDjETPwiNtEdRNE4g5BTuxvet69VJGn",
  "key10": "dgbCX1cuKMuEd8fiCem3eJkVFXQ5c7f5hytzZy87W2H96vU38578TkmzNYueaNEzAg77RbEWS5k3dvmXa3NZb8q",
  "key11": "2NoHCSeyHkj9ViYMtQhZjKGiLb8Thwd13CvBPLhtCjDbcGaL6xLGUqYyodSoJuCGAtVKQzQwahGsYTwkeTheRJWx",
  "key12": "4VpQnTSJFYFsF1QNFvrHZrjoLsfWZiYwbxgiZ22FgKqbTj8hFJC4kqB9uzXka2zsk7xwAP4KJ7qbdUCvZrut5QcR",
  "key13": "5ua1cbpNmP2v8HDFPwBoZqAineDZQR2UWKdCvtEpKh1gDSCWHab5dgifkCJoNNnSjJNNtCoptARQ5ECZCnpXyH7P",
  "key14": "5tXrHypmxLqGiPk7L5EuevDGZvHQzuzpkY4r8kfYjX3LJZwpg4J2xWKy8TBFDu8e8iYJn6E4ME1bWUJiWoyuamqp",
  "key15": "MLij47tNiFCZhPu6ynv17zY9qnqBxyELJ6bpaCV1fZLQEHQao7ACdhEgorHp3425b3qgkPMnq4RmL3e9ibBXmt1",
  "key16": "BRjp6eRqnD1Tyon2mbxn25nnPwuGTtP4dc9BgwtLLCZr269sqYgBqZpSewFxxZVZu494GBHowYVZBB2ZShXALoB",
  "key17": "2kqp1Bn3So9UfWhxvrobZpMneB6FiqWe63yPRokvbyP4i9cDqbGubx3wfRmpy8sdTYmrLDsy7vgU5Xehya9scfqg",
  "key18": "5o8tZ2CEDeDrumHtu9MU8SvsUfDBYQSZAN7re7BDPXFsNqLee78Dbwze36RiAL2sUjVZyYcM9MFcJsfY4kwQSy3R",
  "key19": "4euikkJpgYnDwtFZgSBcsKHFUB2nNRop24FPVdsNMgT83hVd7pujw4zow6DebJNEHrzxF7R6QLnCkdbgoV8aAZeq",
  "key20": "2cjNn6X54kE5zjpP9oHhDJAAGwGdWZdDzikYNmghRH8uT8hh8DN7oFTsMmvziwwEYVSyijXswKvajWD5o2DCk4Xb",
  "key21": "5tEpPyhUj3oqt8e6xMhZ4chCiXuXZbbupvoviZYmNYR3Z3wRgHPwrPos9U3mvHPtnLfzAJvetQr9NpMK3qjKykno",
  "key22": "52q9Mb6hTD6RN7csQsdoaM1MKw3P8th5AXAR2u8FRVkefuxLkHgd496JLgjfQgHwBmrGb4W8zHFxYh9rwfsNhArY",
  "key23": "3mUmknZ5eP43rYF7BqtndwDenhLjofGq8wB5TVDFJbJ3wutyqthK4SyzgLFHrTcjD6T2DozBmJAT5Fj5yHxHWuFW",
  "key24": "5rHoypfL2DDkm7perPw3kE4byB6Mjhbrw9fhEVrpvdyyEPQp4WQpNBwCE4sNUm3SuJRnNjE5bRSZRBtdCFoEteaT",
  "key25": "2zfq5obsTcRW2xx5vHDHhVFBEadvArHMgd9k6LFK5odPZMD2yG9e6vXLhmEBV844iPZD9mbus4QJdK6mXVkjCKHt",
  "key26": "3vZiNjvAUkcqQ4NXWMbSThwVLirVyY8GH2CSmcCBmpdaPECzNq4wNPQJjK57vpLmgzMMW6mk6yMj2rMW8GaWhjcn",
  "key27": "2qMm5M9A8LBsHyYhhRuZvEkbeHTJ7YuaSz1rG4dzZWWudksSW37VYwriyx3jycWWBNSJX2fd1ptjqWotzgRddqkV",
  "key28": "42jjEMB9EBMP3vkfZUxDBsvKeDxtewn13kQLxCr6fmuM58fKDzYr1wqqcCB2jFPzsvN3WSS8mijsT5YChd3NYEZd",
  "key29": "4HPwm5jTGFHJtQCccVizaNCiH6FEKxjVw3pCHfokZeFLJomCkXGADouCnK3KN71b1vechpsjjNoGuPWFdUipaHsE",
  "key30": "2nsfa9RBtSZ9ibB9CfghHtXuXWs4pG37hXdcFfiF2T7QrJEGT3waLizfcH3qGAU2oWhWVHbNCyRnoRZ4pEVxGm4C",
  "key31": "4wGpDhWtWdZdoUKX8zQVq3Wo7jhSKYs2kL6xkTBW3qN8nMvDbZBy2WtdB1r1kZtx2PTZV6waFNJ8HJMa4vkLGQkT",
  "key32": "45C8djJpT6M26Pn7PyHZchnfjpPtVH8mpxw3jm3CVRCrX54iwubmLiK11f6aiW7URkJWqKD79SSFWH1aTcSWM5xM",
  "key33": "5siokV8aMmBzJa439nFchoUohrQ62EkBSu5roC37YAozhroUQJYyueGbZrioXYmMmTiYKLGKuS3cMxebjkJ2M7xA",
  "key34": "2Gs8Z8KSmJrmnoB4gpDiWNgQhRqLCFFA3wMGasGwQ6sQwWAAqKj53et7x83u1W79FMByfKe7eD162NpSS7wExK9h"
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
