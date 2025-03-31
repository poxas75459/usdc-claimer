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
    "3pgigLMjfAftc8hpwdQo3mjBJHk4qp6XHrtm9rnEQ48ikrHirSTQyyAcDz6GevwcTuLzRKSE9LsqAon4SmQ1KUdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F8ivUiWPT4HAkJAadowY9ddAugy79tm4Dy6rXXCrLRRaPWjMBNi242EFeEcE5siHrdALBz3QiXpSV8p2upCuFPW",
  "key1": "2kGmWwYbFL3pd5GMFBAMXajWtNy6NZDCxwtvweNTKnjCBZkfTdDCbHzqa7n2jgZuezTTYUzsHLcmfqeM8LyyE9mF",
  "key2": "3Qi9NZ7Pr5Drn6h6TdTEGt53232QuL1L3CRixwEFQCtCy2RHG9c8YQTDXwh4L6uR1CQVyfNacRkRuWFkVUGGssQN",
  "key3": "2vSjmBXyawij5GDbjMjczULgXbSh6Zp7MSSKVP9CeqY9a69AUVXsVZk1kP7uvGvadmFon3N8wqVzwgahP767BrnN",
  "key4": "2dwHJXEZiXqBjys4wDJiGF4d4DhSoe6ysDmeVNLPPE3Y6P7knskqrUBkjv1dJpqghf9qoHMDcYySbkmgBGgVB7Tc",
  "key5": "4CcKNNZGvmDNJzR1JNxSo2rsY5R58NjNNiDduEJunbuj2qGMXSKS19ep4xHGT1HjoRzErin7i7DiJsjXoSzxbApt",
  "key6": "RJZB3DWDEef1Y6CXq1ScfZ12pHecLZeZsYTWDnHBmdJUkBf4KjhTV5HQu5PbXn2tEitVbTKsor2Fj13u3WnQYMZ",
  "key7": "4RwQJvJAMcBAsNspbyo7npgNGp8jdhREiQveXvkgmK989YWarWyAd19zPgirkcvGodWiXwPrgxaLPcWrsXNMxv7X",
  "key8": "3YZGu1M7iX5DpW2ZoH8XHW1bMYuyQt872ENEWaeoJnbByPjmhCzS7xTuJMwbJPSGZicxmQQVtECsyVigRuhvJC4N",
  "key9": "3yxdzdYhrwRXHqosv1y4zm9fbmfDfmbJFbfNuh81TtXkH87MQU9MKeU2DnpFKxUzzpoD5FHpj1ADXzHvpEVbpD8k",
  "key10": "7egWzxxHuQya58ZizrkHZLW4rx6niE7Pshj7imtgene49K7NZ5KpMHFerS19osRE2YBqZMwLZMyBgcC4Jb2Bryy",
  "key11": "2gQAFpW31qt2ZgNkhW3KusjyE6PCvocLTyTgaNbXv8GqckhddknBGgh1UKWBbAo5gwYhF8RoXrXjKvXiqBRhx1m1",
  "key12": "J7cqVo2EdHAPkpqb6sBH4RRBoVHMjSPqPHz9AMZdxZiCqBjQezYNKSsicivBXiWXY6EiXmVMqpcyfYsSvwaFc7H",
  "key13": "5WGzkDQLM1nrXPhLWbJSLHWv79WvxSq67mzSRvVnJE4teCeJxRHQvX3eWAHVPcwAPzHEK12MtvvDGNA5bWN3dQ4g",
  "key14": "WhHxvpzJ9PG5d9wsjaUoxbhL5w1xvSWsuDWx3FS64L8yCL3pkmMWd7h5gBbSX9XLjRUsD2tWFWLohVH4dgqJ2pS",
  "key15": "2wwxChXUN3xEu4aJoZgSr7zxaiU3GbBBfJw4t3qYyQwz72qQKFtE8YDrdYXk2R5wRZADfJYHjAKiCRBaspdEgHCw",
  "key16": "4wRJC5UXVAx7dcQtsc7EKCwGZ2nu4e2svvRg7m7REfZBcZmiBLL7tMCybu9Fda5mojz3LPcuwUwMmHPoZgYfxSxn",
  "key17": "4BVcWP29DstDCA7yJBgXjAjPFRfXLhDdunhy7N3KcJtJVjAgNznnaGGikv3CLph5rsn1x2a8EB6QG1LBkkBVNWnC",
  "key18": "3uJbgmm7WeVXCqjjFtJ1Jku5chPwn8NPeHu9shpsx4HJwsqRUgjYhtAv7xgWTpV5DSYuo1VFzVZn81aB8gWBtfb5",
  "key19": "5bqpGKJa18TofWBpSmzvvmQiUCFaMBTdUF6RpRksV3hWQv28mTpU5H6BTVM1tNuPTmn86NqFabqorZjfNSp2Na2b",
  "key20": "3WVwAGzvwq3T9bpdJeWWFgxYeHL8db5YTCKgF6YuJev3938joN1MMJPq8MukHdjtyFRxTYCmw2x4AXVkuSQbtHnd",
  "key21": "4VsJkAVj4obPtwk2SEPyX6DaJuRez3FCaVeQRqDzjCBRig2rgW6iTBXjRS7zY3PsVGxL2s51NhqruNDENGK4Cewt",
  "key22": "5RkdBnEckWrLKCDiywTB6rfnJXaHS8oapwYAn6cNkErZfikoC6mUmRaDbbATJfK2oK9diGQbPSn8cpSKZVppdxKb",
  "key23": "3uCGrj4QzkgAtGP87wrgdshESGbAR5KJRXDbnE2cCqKgndA2twfa3qFZyYfPtNJzaVmbnCwFEcKMWKaxqnK9vAin",
  "key24": "ZfFjy1NDE2hjc1DYf6aCpSoKXUNh2vgzAuN7xVKGZ4VonSpMboT4inTf3h8tMfms3N62Eqze6eakitq82ArF4gE",
  "key25": "3HKTbRLuiezuMymaARVRMDu6dapDZgWKAAggmYAoEktJQ33uagkM9jCwT9JSBvns95MfHnHKdv6Tfdby544CpEgg",
  "key26": "4MmeULSeAse3NLLHcutkB4u74isCDhPVrwkU7QBMzgeKFsGngwNKLtGeqSE96ST8o1RDoQTu8GqyeAK6NJouB79b",
  "key27": "4SR8a1yWVy6T3HCMFvhJ8rZ5evzTNY4PUuQ52dPG2mqCW14hqR8kvBmD8aC5kt7kdk3w5kNrQ2wgNzYyWUAn3m5B",
  "key28": "5dBGB6NxiANfXkYGu6DdRqyks9gY71aey4DJxARqTZ8cmLcpbKpZpB4wNFnUWEZLpbxvpxZBhrRytXguyhwnFo8z",
  "key29": "XCLSvgvudtabmU7nXHprVkRLTHw76oeWQSzhokyCbkWwRYkH1DgcgmZn7FkFyvdgU1Xd5ZWXhMhg49H8SKPdLqy",
  "key30": "2agx8WYCuc5BuQaL7PM4e5s7GUa1Rk5TvvZ2dV3s2c4gBj8a95g96T6iRzjNbmou715kaQKeHGFz7xqoCmmWkEs2",
  "key31": "4y3LumfPAuywpXJYN5xNWcZt58iNHvqy9qUXCPFfiK6vySkZpDegvCoSdMDhRC7V4skUeo7XfCZUaURxa7CgCQMt",
  "key32": "2UCpUtzRSjZm3K58rEg9ewbCK92psC6xtrWMFS4tiPqKjTB3Q39j7Jerke8RyQNQ25f9EMas6HF7X4V94KiJEePS",
  "key33": "5mtNBgW8LMvZyja26XZ4eYbNqanvSaA29GGwy8jDnDQgZ5vrDrx8jpd5pcxWLrdJWpDiKSW4FDHQfMTeJffZnTDU",
  "key34": "3CR8CGCsPRbVGiw4mzjBBZh1mrzzAob8ZPBhLUh5WUx8bJ8Y72v6Y52nJ5vT3msiXvVf5YutYW2WFCA11SDQLTMm",
  "key35": "3CpDKnUaTfthBJ3n56wMrdUHWxUiYbWKSxkHwQuKcPpAoEjPRFWcPqxjYLbtDqS5MNFyxKBUtkr2H4ARZmpsePFS",
  "key36": "3gsFFLhgyiQbdd94BcmJkjcoitCU5jaaw4oputLGSGh9N2hRneWvN4K2pHiYX18Vrz5GQv2RnuNDZQg6PrawpvEZ",
  "key37": "5tN6xkakqbb7AcpFVmx3HR4BLuvSJuwffPPxbY6btrGwQoKZHJLx3ymTPxXVBPJE9kJmADXqbLwfyLQ9z4MPgVHS",
  "key38": "4mmpsCRPpDRcSrgYs8Gy5FwAo8axUa4ehMmuVrPxXEDjS4P8BUsZkFF9pntsZKvR4ne1bJF4pdZFqFEAuvVjnSCH",
  "key39": "quWUrgEagDhALESKin1fzipFVyv1h8dLwKD2Y3Uj1PXVHScxQCnEp2PbYTqhHD21KJTAcyGdog5f37JbK9xCFJa"
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
