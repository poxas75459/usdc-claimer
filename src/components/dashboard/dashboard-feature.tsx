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
    "9dnmZTeFCCF7bLRk3uv4VhvYZVx5JchhYwQbutNzBJz1UB2NR8mUbrs6q3xHt3fAEbJ2ioyqZrj1t1Gcyf7HPTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wCuiBFXkJVKmrP6RWsQCFoaD1ttbruhGDSQ6fcf6tf4oxQUEHudCyhUCKVU1tYGiTmBX7hjZec2e6UDkvgrgo43",
  "key1": "4pcQh8vC1dX2SbCHTEwpzyMmY1Z8fbk1QyWBa7w5N1WrhxXZYbv9goqQW6x4AHxvzDm1UMVorZHE8K3Rap6RqbgB",
  "key2": "3zLEPtDdknMG9W8fEnqUUXWpgW5CM8z9n22wQpNoMtFBL71XKcce9VLq5EGwJvPyMro7ZWm3i4yZQVTu1DHm7oc3",
  "key3": "5uiAYt5f8hApzhnuQJLpqrGyTnnhE3PBxqWcKKwrZY2XaNFKFDMhtc1hMkcmb9a9A6SN8oGJoP2qsrSuhneir3CN",
  "key4": "2JGwNKoiDSH4NDSYgXTz2JTfhDctd6BdyBtinRdmwrFZELCKE6gsbypvxFGcJNChDgUBGuzDAdxdSDRCobzjCpPj",
  "key5": "5ekF2XFkyaK6qsmNEuemhStS9bnYmSQELPFYWz8Km2rn6g8h3aiqJHjF8vvJCTr7hEztkRaSoxvm23xr3VsTcZNx",
  "key6": "49J5zUzEcQJuvFXeV3wq4BDMhQuABKN2e5xtviAYaEj3F1MB7j9vinwKkgwjAsopFp1GnYr5Z5XSotwGx6yV8ep3",
  "key7": "3C9pkf5BkvVg2JcGBa9jQzGhdnuzDSipozKJEk8Mk4WQvQJULYAmg8mrqfh4wtu2N5UbSQTUbbak2HWbGrcdMaXy",
  "key8": "3Up3iSiXQ5LQPy2ywrWsmd6B8t9qZryn6YUS4adn7FxGAWcbDtWBgzPBrW8UbfSataf2vSSgoZU52sgQJzYgYZZH",
  "key9": "5EjjzpGKGoKT4q19VWDu1uRV65mwr1esTX6fZEw3wRsywdSynbwLY1PNU8TndVCTcVYSoNEtHwGXmRbDstF9dqZM",
  "key10": "FSSVzmgBAq8kxKbg8P4NAboiYx28u8uRkpThe4qHq65fPvyt5CAuR1TC13s8V1JigxLU3zmkJiHxkCfJKXJn8qF",
  "key11": "QWaUggQU5NoZMHThrzRTiKRqbepqkiGKgjbUCS7Jv6Roytrp53vJnp3csSuxJXfaRDLp7s1ZCCsfrE1PtD1NgzE",
  "key12": "23LfcarizMtuRQkNuqedUsJKeh5GCEq2QyfV4E4ZmzWqJtn9Y4TVubbix4ejLtfxyjAa4Y2ipMZmjbitkMroocRu",
  "key13": "2cbmMm3Ke8JPeXd6W4QzRHmWdG3VF5cGL63ZBNX1vajqnAvdrLPG4vMS85iUazkdBvXUrFHHwfgke7C9ZWiYouzL",
  "key14": "2A4LwDuKzuM634R53DMp9oET8Af31E4moZzhWFvcK4GfyF9UdKi5Uukg1e6NwVKe8MMJSNjQ4FQaipz1mYqKHXob",
  "key15": "5zgRY1o2CHBDXZWsGZtkNfyZVx9jwZxDxY9a87joXaWXqKEYdYxw1RYAv5daJPFqh1HQkT1q9mRFwvX3mD26KoQU",
  "key16": "4cPUHHNp1Zn2X7BonQdAKCHcjv44H1RAWCSprg5sFrbtxd1YwMqGEjsexQwiP8LSkosdC6K7Uhpqg583NPQ4U17M",
  "key17": "5VzjWifa8se6j6eZzsug1Pic2dgcTgur1CtLjTqhhy1o8ZnRBXyG1qtPbwgUL934VVd9RmFK4i5bHrHwnz9bU3R1",
  "key18": "3eK9o6kW8emSK6fRGrsdagGmHxsRtZ5L7FxpWgZyg85pRXdFGM9Mq9CExZ6Eu8s8gt8LHsxY5VEn8EiLCZehmfJW",
  "key19": "5pf45PggLfKVbkdeVPZsr9CrVEUioYBxZuBZvGEoMc3iU32GxR91APqTQpsguW6ssYviVeaSV5zcb5DVxhYZsU8L",
  "key20": "5nDXcwcvj6qAxRED2XW9cajkHPv8GBUGZUJTCML7JfhZCL93MCJx2ZTXhDANvtEFtZswcfq5HAQ5JVvs7zMUovNT",
  "key21": "26vQyYuRveNGa4MhSheYWznUztXsNufXYTMBsiDer1mgLajW8hdFF93rUgAL49SfKqAbVZMUF2h85drtdAHmSb8x",
  "key22": "62srP1f3SHknncsrmCdu9A2Pc6iDRhuYjScrqVKUgFS6nTQhHM8xxthj2ebtcisfexzqwvJV4NqUGHhRP4ZugpEn",
  "key23": "5yVrkKLQ6TTr21xEZik5reX9qz8hugvAR51AwuqJFUbN977MeLsgiGpLZDwxp3LLB2bTNHnFB8V2UAvp6jNzepZG",
  "key24": "29DZFzRhEeVgm2GhFxtFfeV38BNDVMDmWxUzqhZEdPHRQi8dZD18FrSK67kijsFEWE4CP5Supxsg4nySmFEDfB2R",
  "key25": "3t2v643nuwNtUiXqZVsXborYRCoWWJse7fs9xof3PVmyhF2ufkes5jRpBKXXYBdaVEpBhRAaDbchrJ6GVVgPTyhW",
  "key26": "uAK8hf1x786Z9iW4icmYwKaWVN1Lz6xgUXgUWaJiyp2VWQHigb7Xcyc6ifRCfNgg7nwqxDPh6N14sJb3Tw7zvYY",
  "key27": "2PKQJcW9pksVk1wNSzhb1AVrCi9miD3sMfQYGW3oDmH9CsWt1TB49eqWoScL8Ydz1EAtmcSjpJKD4WUpX7ZMCLDu",
  "key28": "3CEuNchQFG57QvPshsSjsnZamP9zL7AVS9zWnmXcj7HQgmxymGdnx1YPBCmRL75U38v2JM1KQLHt5ToHvjsjWvNV",
  "key29": "2Jw2V9kdzzvEdVQ1A5UvD745MHnqbttYJuyze15VLYzFPteigHo5LhFP5drp9UziJV7bKktAvhppF53vjqLjqkH2",
  "key30": "91NdGnMdKbSjQKgKj1zyWM87WBfucruTzsDZ72s4KAraHxqbxD5S3RoKcRy2CCvu8DMKQzkZqCnZqMz84psfdJu",
  "key31": "35PjFFRkEwkKfhVWVtWZgKvQrZse8Rz5oUart26vpJkmVTu6ivUvLsACZJyRNnrgwc9AbF9PVJgGHwWA9Bz1VVsw",
  "key32": "3Xud3AoNJ8Zn3VDJHxYCjbvcNRz6N7LTjDYch6JT8oGiGBZLwdsS5Sdu5VPPy8nPpLcRgFYvkvxz2mrXDHhMvLDB",
  "key33": "4ZAmJdGj9YekGHwdZsrf7N4arLWxcnqanvnzaK9KoBMrcwmyC1ko4zZ3u5fAuBVkNmZ5hhi4NPdHgKqXNLBAFXE2",
  "key34": "YTxuQtVKYAuBWew4T1tBuU4SEUZaPmPuini23rKLdPQNiKBV3NX4F7gTXYbnSez8vSurMFQ5WKHqYg3QjqVDdZV",
  "key35": "4h1M26SnbqK4nr2eShzwBUJAxrv2DKMTk1p1u991cBeAeudv1zpt1iWB1V1wy4bbUEViHP8wWLbs8eSS9pjBAsV1",
  "key36": "2nkwDQtQyqyg7Kponvcuq6zNCAnqVHgxq4ZGz9q3jLRVxqSGGaEGC52YHq3sZgq2WHAAarsspufXHLDv7HLfjNSF",
  "key37": "2t39pPPZCfDsqir11mrJWbsf4oseXcgMHDucWrba8nXEHFFhP6RuBnMmdizTP9sDNPSW8iBYV9nQZ5HofdtZorpv",
  "key38": "4wXVUavUDVbuBzAGPMBgtuTkDgtATr7vLNSQL7C1fhnPkmsnxrrqj4GcH4bJz9JEpDZ9vVD4EttRhURLXsH2nnVS",
  "key39": "2k3QsX5W28zv7Prtksc4eLKEnHgKFTAy89rRGjR7ZmJeR3vTn8Hx3APg6WUG42TmGR4UMGFeFo3kVaJaCVd8aknC",
  "key40": "QyC7xbUzZeVQBRS67XUUcDP15sJRDmadB14TAKfzsCDhRFKJnREcN51fe9CA9BUkozmdFYRmGesmV6kZv3eikdX",
  "key41": "3W7ZHh8u5v2kckQgGDky9AN45Xi8F3FTB665m9b5mKVspGV3T3kEgkdcGVwKHVDhw3dCro6yyC36TDPBsEboreYR",
  "key42": "2Uq4hMpAqfFtBCKY8dxjUKDeUWcQXz55FkczKYz44HZknWj2bnYnNkS6tcNELpzeQXSRKsejvpj77Fb5qb7bZszb",
  "key43": "4pPk9MGT3f8tVtgiZZa2czsrd8ytMXxWvqPrqBRVk5BLpCmU9GPCqJbqaziRmyMCLsv8cynz2dwzPMvRRmFu6LdP",
  "key44": "f9dUQKwrTtuFGmLdTXZkX7LQtTDQzvFoE5EfgLCSZNL9GFB5w4oWh5PXJqvPLSReChbTEVNNJhwNxnJzb9yGpzM",
  "key45": "3Thq5VtAFuuqnREC9FYay7zM71PciYr8aHgTf3Gi26TBQX4PhLDYj2bRCJC6T2dsnekS55S7yBRZDSs8jnngD5k4"
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
