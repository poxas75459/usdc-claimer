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
    "3LfGRadKMfAD8Ynhek1Lu1PUALPvga6vgE7z8NVb5ByiHnAfC54R1rCekdU4BxcqKRtEvCiL49kNZk5LtCotT5cG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S1zHQnXvUkjNP87LHc1t9tbZhup9KPjdTq8rBcNyqFwkYDP9iwDi1LsSJNipS3CUKg56wcQ4m1LtgNb9ZHbfdNd",
  "key1": "f7UHHCaYpdCNswBFyty756EJbcnQiJ88KsFou87kxpDgZmYJo3favYqLjwreCZhTC4ng6z43v1keDqjScHzvoF8",
  "key2": "324CNzNRDUtEmnN45RTeGE72AnwNxCWmTkvnmJn9RwS3umPACXKEPBWvEdpwyhjKZxUMZCXQL2TP5m6h7w3Yrsq1",
  "key3": "76KPvyLHosPzsMofpWvV5xiK2RgsUkucH7gtvX5hPH7NGcHwji8jKkno5TKEXTBk8JEHUWqGuFc4cB4Fr5aRDEz",
  "key4": "pATG5AzBWxmGZsAWWWe9HdFTtTTwPb5ZGYLD6nnTWP4f5TuARKmWfWQUqzCBwNMGJLjY4soVTo3KdwGRTcH9USP",
  "key5": "P7qm2uGRQdKnnAkHVc4wEWLahF7jS66c89s7eCN4kACzvJzw3Z6QnRjcihaxYujEHuiHbHHEUcXSPByLK6hUoVP",
  "key6": "4vj2ZFrnM6wLp7hRaC3oMKhE3Hb4KDbr9kDD3taV8gpXTEwbjjfVphcHARwkHyHq9PKNxh9yxZpMX31y9tfrrz48",
  "key7": "4HJPGtdNu6GvTpuoXssnQqzuGvgU9EbxbJWexMNSEgLUNcZjp94saYvwgq6jqpm9VLNaF83cUeR9CSJt49Zq4u6X",
  "key8": "4LfoioKobiSA145yTxzYcuV6JeuBkpZov4RL77CPSmam3kbcTLg2LdPB4EiEK516Ek8NTFQ9PwVUfVZzPYmpYUez",
  "key9": "2T6TMYCNd8zjqew5D9RonAyzx2LmTUkxdMoxGSm9y9KGZXUKjrhJjxuS1yqUkx4KynwELm2TkVaWbyLoVhevHAHU",
  "key10": "2i3RuY153fdXzzCXyqAQDvGDdgYRk9YCVoCMpFcK7dxkBoG9bkg1h1bKddsqRU48zsM4tPmWZ9PuFa5387hXzcTb",
  "key11": "C4YnebVaraLAomVbfzYL2PAZG6NPecVkDtAS8u3Uor3pNsjMEjsQMS2H5JupWbFZAJ2Nd2yhZBQQnvS2HR456nT",
  "key12": "61k7wWa5Ba32P9UHA7hjXomJoD6EgjZATNiFQT54QV77oHSDpHxnQkF4gpTY1AqgM8JvHf17uqYMdULEHRjUmjCA",
  "key13": "2zKW72Ptmwr6euLJyzLfysLX5LJTBBzc3Ty8To872CHku2kjegK13bH9rJb1u8FbK7cPLL8sa3382TNoXsm3ivqE",
  "key14": "51NqMUH4QE9UMW9Yn5c55s2dDaZaTkPSiBcW6UFXDthNRCbGMSoFApRtih9UFedCuVEvaFvLXk1LoFMyiPbzvALV",
  "key15": "mtN2EK2yXyjmsFjqsUi92SQz648RmjPiRAMApRDvWMuQr5V7Qz2TBXDpADnVNFE8WW4jGzc5W6oTJ1ZHnvPtTsP",
  "key16": "4oStPvtEE2J6N1iCr8QpfAMyJsdTAS1vzCaXQQrZFtM2CYXeMxHoR4mbDBYhwoDgyHQAbVDbaxTaHN4Vv3oxgRFd",
  "key17": "4VwGrE5L3Z4vbX3ZMxN43nXb8rzEPAyeUp7ndbCgbuqRhd8rvBiN3i2GZ637oGkoucVL52G6pHBY112uceN71EdK",
  "key18": "42cVdXJuq6P9dKbaerLVRVDmaQciGyp1Tk4MYVVfAwYFhZFUunoKSvB4LWA5a3nepUCGJ2BTz6FDGZ21GVWP7e39",
  "key19": "qVHTf7FRvFi4AHtaLf9xKvBuUDXyksUrTuR6ngYTxLyKyLQnX9NnXpmKNf9ddfAxo7eQf7FBN8Zym8q3QBDuWyN",
  "key20": "3MdfvvFz8AtWjwoqwuFM8fhHLoKREYRLnfqp8iXhHbyMNRv5yDj4GYqEtgCiAxFSVfSnxGWrRUL7tiB2jbbT9eoz",
  "key21": "33inYb68KETkjXG3C9iz3hU9QdQGXdbfyK4vUWRe5kemCtz1baKL2afGtbidySA9BpErSdV8kq24dUNYT7M4oKRd",
  "key22": "53LZdZ5SBoZkdczh7KczWifxMTycdiLJX45ybUu6eFwoiQZHJCYsYfxcTomnbEVqJh4usBwmj82wSA1GchaWNfMD",
  "key23": "3M3Qx8bRVjwLZx6VJHH8ZhJWTS3omt1nthmbse1QJyWkAf8QujjNYjP3xG7tGSWzRDvKGCkxNbU9a3899QvKTwmi",
  "key24": "5GUBp1U1etZzAENgEKYyZ88pZwqEKoLDd8uWaEEdJ6bnr2AhoYrTQvokeeoUATRZUPou5ee2G7fiZhXc8KigV688",
  "key25": "5QZ6Xpa1Nkqk7JF3AxgcsKgV9w1rF7uf1xJCVDbAJk6LQ179bf6eMQpK8QuZhKDxtGQQcLmojgwnS2CP5Vpbtk7R",
  "key26": "c9doJ4CErBenkF1NCKQgoZM3c48MJdASCMz8s17rNejgRzoQjgfjVYvERUyfv5mPE8BeFGXgvWHniFp64Haq96c",
  "key27": "3xR6uQQoSExzc3nD7mBRYuVF7e9niV3LRygFSc2vyvugJUXavJggBKfigSMcDbX3gPjXmZnanmo2TjgYqGijRogb",
  "key28": "23JCoyS7yvZzXJ2wYWfJGSpo8SekTUZjZDBYjreToS46ENA6bxjaCZmhsDZLcjVmkD9vUw1dF2bNmFQgmUgFDAGg",
  "key29": "2sW35Vwged8nDTetbNJJ4BeYVS3i1ikwg7qVRTAGZHx3thmRPY5NzbAbXEagkmy5rXGP7if9rmMGvcMx78RKKkkf",
  "key30": "3tU2saKp9CuXiVu6nHrnYipC84agg92asQb1W3tSDerDBuM3mKnNNC2uZpCdgZaDf3Rd7PzrmsH17sPZDfpDXu42",
  "key31": "53Eu6Eg9MJF8bmo52dhCe71E46TFgEBAN6Jk5CdHgUWDdWjykdmGvV8xvBq8u3WFVcpvxERXi9dcLPucCnKvtwo1",
  "key32": "3HeoWxnnGp9aPFyfknWFXZTqqrmnkMnjanbMXp9a8U6tpxjti7jKgFXA7tFLfWVM5ggMseJ3JpZfD7NEyFpjk75J",
  "key33": "37pVhzR6mhXmZfMXPDEdGhmFbL1mh8esQy9NrBP9nxRACL87N4MDkZCqj2hxmtDP77WJdTZ1FLcBREXwZLDS3UP5",
  "key34": "BA9BBJVa9AySJkd8q7nQoKvEctu5SxTczWD6D4bZcZAbSJw17hjYPAi29MhE2Sph6nLzNcmeZVxdDZmQwAfEQVd",
  "key35": "5URkaxQ5xvJcTHXVF8piBqMnViiM1oT3fNpGg7zaFswoz1AF37J9CASc1opeqrBJGUqLRQLJUWd9VSMtGpmumx8N",
  "key36": "4TNsJozPZyRVKNKA8mDt6W5jTh2NgpuXcuq3K3D9CNVcKARswDPe6qrVuFyW7iDnWQHtHK3FJ3ivv31wKB3GToyW",
  "key37": "3nxE1MnJuAnHxzu4Ss2Y3EtxJ77BHjbmxZjKMr6AnGi6X5voFGUwt9z2a5rmaMB57VQtXxHGDYPX5Koc2HHCKrt2",
  "key38": "23QUUH483qUoUS31vVPNVsbfF6ruAfDRNtp2X8cfdHLrucT3U8PPUGqBNv36kRveit68VaXek97M7Ro5M4JyD6pJ",
  "key39": "2YBd6hQTXvwgtPfUEWsp8gVQoYtoHfPBJg74ajWwg5pyUZ84d7hz32cdGqpnHbwVx1vuecoiHoqhNEt8SkHiad7s",
  "key40": "3Us7pFcr7EeigbBREU1tvdLdQfnSkQyUWR7jTHAMWmpGyrhNpDJmW8rG2ta9ZFdFniT5yRrZb3JsoYpQmdW2tKsg",
  "key41": "5unmLnaooxZ2jbYvtMoUFVqSnGCzzjhbbKxgh5vGU5pbACGtU4F3DBfPK4D41jr1p9BcJQ5ur4YjtaEE2e9MWQ1v",
  "key42": "5chT3VmX9CGECoP8Q3WVVc7uXBqg6Aha8rs8dbWrWssiSy6WuJjSQPwsAfyJV73UHgtRytV6GKXJAFpX6WN5ygH3",
  "key43": "4hdF9p4mAsLUotCyvZtSmQvvPKrGnMnmjMr4As7znJ9XDDrpjkT5Gi2LLQck2ct3vn3XfnDxtPYcXLFKYMySbhBE",
  "key44": "H2kSrwExpqEzXH3G7vk6CfagCHVxcBV6CvpzPonKgvUP9rWJjrixf8dUesEWDA7QfnLC1vjbkdTgT2sY1KHUrEn",
  "key45": "28ktxyZtUjYgMwjStfie89egFyJLR11AbUYPmQ8gVLFdenpVsuAfN4wCLZ5TzJH6FZ136RzNpFLuaGo2BjnaK4va",
  "key46": "4oUrH3xVkyH9UGGGupvdCaHmVN6Q1ayk2AsZq4iyG6urmqkoQwxih2AHe3gmBHcAgDTrup3NuGYqZkLKRp6QXXAJ"
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
