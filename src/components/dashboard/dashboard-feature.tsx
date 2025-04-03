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
    "L1otEn2BkWhW5QRVnxbYgmxpX4VwrcZieF8UyGFJdCexJxuKEWx6kUM4k1Y6deMSSgN7xxAqJwrLw2y18xPYCzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LpyheDvdsoDzzz16bpWFn1JpwqXNUuLVhS5Rom2Atr2S3DcW9dRc9dc1Cn2X55zF7etSCP3oxEE6MVb3v2vGMK7",
  "key1": "2Wo9uV2yWbKY1AG9F2aV4ysWMrSWw5zHzUF2uMyiiEpmRQ7DWfZfRpdhsds38kxePVNS5MUJGfVbiXCd8hjmjwPn",
  "key2": "Nu4Hc2t46jZTUfGTT2ndGR4sZKFeGUbLKnhGB9VDN7wCTfsXz2yvEd9xU8JrLX7vgSEnwZhzCuXsPKSsij63LLd",
  "key3": "2ygZqCJ48NyGU5guB5u8sfEqHhxzBaz7x1gcJKfX64vJ2p3kvMYnYPZhvgKoFpU7ddeJd12u3wnc1AGvfe8bgqze",
  "key4": "Wo5TUWfKY9gKvNPBjPxY4WNL4wLEVvwrqbZ4j897HceXzuWW9RTZjKVKT4qxsvUVqLcCoWJrERYu4AWKq5m9r86",
  "key5": "3ydheFsoS4fNTHSCjP7jGXCBxiG9yoBTTREgJj3aWgTuexZewioqwJdrtoBtsmb4zuiD9ZEHkJwkBqNAPjWysj61",
  "key6": "5Fb9D66PoRtZtxkap3zR5zmx6vsgPuE9kQvRcgheRSF4po68wzfjpZhYNDr9GS34XT7LpNYQfWk43WWcibN2Xjjc",
  "key7": "oR6XSLb814jCARSP3UmcTMRb8nNdJZkd1BoGNDXMn7tKH8HJHie491iN5Fjzcuw1BThF6KYUJMjHo6SwaJmJdEq",
  "key8": "2KZm4rsDpgjzoubQ5CZf7sMh9CR1CBb4axiLQgLvXV9DqPnMMzpnkob33MnVCpxcvPBR5DoGCw6yXcsvx7ucKWqd",
  "key9": "323WDDaMB1Cm78Tu3fVxyKRRmMFHMmWxAcmqe6zGsRJhW3aU27hTXNjmemeReFSabiyx6zisSujQsWRjXV37MMXS",
  "key10": "ditmN9oSLkKZiJDb722M3LU4v1X1CDzdTyv3bpSrNMxqr9rz26wKyASxg9h5j378uB2G1cvpB6EwVv3gjdsGSh2",
  "key11": "4bwU4bogbWNnxr81jzTJtsBCvWbNt9gxpxPCCNB7DQpe2QgxZLw9r3aJ6xPjJPhQsm8btQ9m5eg5pZyeB4odtJp6",
  "key12": "3KEHYUfNXfeugDcefrj8qkMnovP4ZQLD8B31y66KZCZZBbiaszsECbc8TYUmYoUKcyXyLfvpQ35fmvAeDFHFS49M",
  "key13": "2GYtrZcixvwxFCzTgvU6S9c1egeim2NZtVVShAqbUumjYJsHyEZ75BUznnaQ8ouakgHRxfZ7zS62rYLjM3NUBxWx",
  "key14": "24PhmHPoaypRbxMWHXddDGaggUV7Xb1cRWvnEdMkCFBc5MkJa1hMAnQUy2A1x3jngk7pLuSujWyysqgkvxg6GuaB",
  "key15": "3JdZEXTTM2CHMD3jScpL58gHHBQ2Kvc1LYw1vN8w9wDfe7SBCeKh2M54dfKk5gEyH9UyHfZFehVvnJ1XMSyiCdzE",
  "key16": "2gfbXvLKQWf7txReN6vQdcJcaWUhgAVejGC32QXzzyJdRrUnV48WujQt18hxZWcZu9WWejtNLTua3m3Up5fNYrw3",
  "key17": "ReR8unVcgEsBaGnRQ2Z1VhJL97n3WToEPpAjo2atuM9K7LsQLcUMNFYpEPVpcaRq2XFxmp1vZhD15cTDt8Sx32P",
  "key18": "3JVfw3S1znXWrySVojCKjTVyByFpJwqpsncghbJGDVbM7Yj4FECRStHLQijEdYJn7eufizRNXkj2XB6wnKqAg2fu",
  "key19": "66ddN5SeMRWDHPfK4UpRdNbJzfdsvxq459pXHK3hSbv5Vj3gCnaeUVUAc3WrWrUisZPgvzNaJ79vXJSkbmTE3pBo",
  "key20": "2tZgX1hinsE1XpZWaSVvxqKGN5jBXzHtSbKbwMMXxHvXKvu4BLRYwbQjTY5X5XX4AWgq1K5iAGRWqZxfgELvNqE1",
  "key21": "5Tz9ZjcZtZLvacKFKTEzpMFN1fa3t97CJXhpAPdj35tVYRNiPxADU8ANYhrDLdYBuXPZNEPVFvz8G2TJNB2vJdoR",
  "key22": "2QNWkr2fu7i6h6ZdySNufHSCa5cBjLW3mc17Yr8mzogVXQfH52uNqEgL3Qw675Yqbemd7DMumcFEXxje6VT5qUEH",
  "key23": "cd7s2giQadPGhqBHGW3QSknDDmhQq8M361wps14EtJ47esRJAEXdnwqhKYrQLiUQy6RQpLFEYhQYx8XdrU4wd7T",
  "key24": "4z5iovLA9CVi7aapzSSgCBCLP3J9u5tpivBHEDr5Qbzy4s7U8i6ueNDvta4ncaSLxXyg1v8iTE16k7G5cYaK8Tru",
  "key25": "4GVAmRr7YkEXwoXqeeALcjza6aZBn5KybVetNUpox6QARbmo9EXcqecX7XaqDF169eosPPt4XWJom4NeBr4PNFSA",
  "key26": "5omYxzWxZmbicEw4qYFqwPkLmaHzx4vRiCytucdumnHtDJK3N6iZRDpXbh2b8dUZTQfRDhX4Wk6PTFxQeXMK21zG",
  "key27": "4fzb2gmBydxcrn1FsMJwphWsxBjiHhdepgBH3bpi8iefBAmAVHuVhHtc3oGmeVqroxkeRLC6xQtCzYqVFbUjGJTx",
  "key28": "2Q2nq1RnEbnhZfr6apR5eRDdtA4qrC196jZmA3VXiZDuJ5JdvHMEec184Na5XcSzq3ihPSVen7FkX5GNTe1WKyEk",
  "key29": "5WKdTCG2UTy3wY6kMv9a2Bkw6YMXPEUP6WbztyG2VCG8CXGAttZZ2R5oNyhJYByp1ZaPmvdevHfA3ATjcF3Kmggx",
  "key30": "3rNmwFvPEXCKMErKfXa8PDGKwNCYykFN383XK4c2FyskkH5X767JEwm4nxY6d2GjzbBGGJzcmtLwEFBYWiWjgBYb",
  "key31": "63zPBykkXrK85BUUqxgR3mYVkWnYq9pJn7CGwM6SotwBA4bUeLSCWk8FXReNx38JkxMe75cgTnCpsEGMJ8wbs8Hb",
  "key32": "5RkBY9cyZ6koduQAch5Ag4jMmmSzcWQmZv49Bq7jkQAgzxvzxbLKapbSJh2jCYe5ixGoGaYrtwSaDFDCWHQSczMv",
  "key33": "4tnioprSw5yydLWLPGNnn43iC72YzNut877wLB5yrC5XbW4tYRiqkugcgB3wE359a4AwFSAJwp9g3K4VTMLRiA2H",
  "key34": "5dzdGwsYJknEHi6d9EYyyiiU9SqnKvifretE6Antah13C95CpMNktoG1euysqGKEngMsKyM3zmD4pW8k1zn2cE7y",
  "key35": "3vs7vbrQTkCsETFt8MUQER1b6PXoba2oJe4USP3GmpCz8S1zef5vZXpfafnFcjwR1Q5WXRCEBHLBzojM12sAT5bn",
  "key36": "5FaEzZ8yPPrAMks8KUDTmHMDDNRUduQP8CENe4tGSvhhgYVd1WvCwgBMmsN4BhvAyTPuEkiPodotf5hVpDVJStJb",
  "key37": "3HPC3U99vATcQw8WtWDF6DH6DbJVrbxhUwKQw416WjcaicaYQPdeqDNm3gzPuyHcYitM5LauQV2Gpih7jioa7xnD",
  "key38": "2wJdXMtgifL7UUAEdX6CDcAjrZkwBLqmWSQz2kSoybUoiCtqpPkFRXU4rEvKnDiP8FB5yj4BuK3TQa8z1YDkHpZH",
  "key39": "2bopciDdvvBrFvhiMrkT2eoZ2kjfx8ANpX79GaaY9vyVc1VrLTJgHteHCkyPDpfH6jg9tmaxhM5YZkTD5ceoggRE",
  "key40": "2xhmbLksfALarTbhdHPM5HPYN3YdZipLyzSGPKyC9Zfh4bV3TwS8mZbugfrpV2nVyM3vYE8k8pAK9dgEKkdQjqdX",
  "key41": "3JD4ED1HyvP1yJdC8HtXbpwA96B3d8eDirLQmD8NprGWPTGwryYKBn8efGKq5ie1M9M91R4DqMhqUKSzFcMZrxpg",
  "key42": "33H6ibu2aVNdcxexUNDB5NWSN2RUM5hsguVNL3RubT5JX6X9zX9j14H3REyF8SJRSnZHrALXmKpRpbaiJK3tGBWW",
  "key43": "3SGXEyvwJniLoQsDzZPWj7z9WkncjcpfPoRDS2CArdmPwUbm6cAY6F1jjPQSH1zXMEUG7H1giuGLujoCGfsyGSXH",
  "key44": "2aR3LvfjHJ4Q8WsMCV7EPMkuvCFDVBYGcCLQKqjownPSJz3j25cRK4Zg5uTPDPEQ8p36J3ZhDhqaCRhphz6mYhrX",
  "key45": "5GdGP4QHUjMxy6q3NDVNho3yS6hPL9zgo6qRxk3nU3gqeSMse78wE7WFTyLW1xGvG8pbzxEAKULiqpbnFza6jHy6",
  "key46": "52Nqg3ZPxtM6YfGCvAeh11SHsinsRLnTbc6okHJV2MT2FDHcUaBfVh7U7ArHzrqv1K667jcdFm6tscthnkjV4rhc"
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
