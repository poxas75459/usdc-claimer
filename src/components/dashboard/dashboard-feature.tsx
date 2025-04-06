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
    "4pNSuuXztQPwwTmP3U9hrTMYcEZWjDjL4HdY5mpjJ4HqNHrQtP5hbH6Ld3g2UwuHPNkzGnSdHMaaYcsXkK4ezdVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R4XUCtk81bAmSpC4GoEPCXZfWMEsXmNJNw3ZHTVp1Bgt4AcW5LoTLVTDUqXdiMnNpwTKXEESWCKZSoQ2pePXKXf",
  "key1": "5minfdx57HF1KmEoz5zP7ccY8i1Q4BcQHZX1zja9565QkgCwpQ9fnf4YNVvXG6fzU5zuk3NGbLgENYtG1DTu8VYb",
  "key2": "Xz7t6LEKBCeMp3UFw5cf4UdHGbzdRkiXP7JJ9ZfRNhsjk3cRZfbHdSRzd2H2EiVfjvoYXVfP4q8JjpJ3GXf9owx",
  "key3": "5JWMAD6hdLMgXC5XX8xEkyhPpr9T8EXtVgTSq9YCfD63Jc4DBqQSXzFkCJZShxygr23Cie8ANGQtNHhVxsiqMN46",
  "key4": "JwY66g5Xbn46vphs8LDyTrfxUvmvyMBED23xcfTt7E5TQng7zz7b8LNCEZ6mJWXtbQhz4zWaCFk2wM6giDub4kU",
  "key5": "3t3r3Q8JQ1cCZ7U66NMhxD94UG1DL8SCcU4caEQqbghKT7da7X2ESBC9HdW1zQ1wT6VDdMbRrP9yoaPRoGs7N2Se",
  "key6": "4rZ3ar8vUghht8SLU49mwbHpETGQ4vihKrqq6DsHdxf8Tc1LJStFd3XD6NxcVSvgowgAWPVehvwXt9ogAHoXiEny",
  "key7": "5Cuurz91s9wY9xorWiJv5YPkgdQ8n99MgPQsS69rEMkquf27jn1VJsQM8ChvVf5o73rgGcxsyKm5vWL2ooYKvgcE",
  "key8": "4ZQnzaHmG92FdX7TtN8JGV3FSYkyaW5jQNwDqqt58adJMjm2aEYjcXxkGdFseEiwQ4qKRYmS2NjSkcaEp6jTfXHn",
  "key9": "4WLaL7djg1h6US6qdXt4RPtB5d5umAHUV5zK7KQ83zsLJj1Y9fmdQ8ExTHQr4BVorDbKCHDc238h2gGtWb4FdHcF",
  "key10": "22qxv97hwBAPg59ze49o7yrqKb9bURS1S4uc2mGtf9oMj4cjDgRajx8BPt7JwPdevQ1o6psgw8bcwajEUik8rrtL",
  "key11": "3kN7njuygCw3feAFjXmwTgoHDHVCp9PQmucZLp8wwVLjccCdkiGdcWSvqR5S3Y154k9r6mNh7YFK6xUXEMmqYTp2",
  "key12": "3bTBQ8pNEBsuHYEbpQNP9J1XoXCH4Spq4fp2ptu1hko61uR8KxiyK6jjRy3YF2ALnmdfp8YG5xRfy9MyNDDyp3Kh",
  "key13": "2f8FKoYMh8fcgAQMgSe5BEPHCyf7xXhqvGvXLxacr2A9fjc1mA3Qh1sHDR3bp7iJhPrBCh579tUBU1pfGnvw3GP8",
  "key14": "4VVeEw8ELEjdXGponAyfjHZZCTSDdBhHUTTXyi891YroFKMmTvk92PQycpSonJyFgutfGKvBM2vHNqTj7ctSy3sX",
  "key15": "63P9BR86rGsSZAmzB5rHJ4zsXjXXvdxdQSeTaFc3CMCHg3QVboVz5PG4eumYfPemoWw6ft9u6Pj8U4teNLBsqLcL",
  "key16": "4B628gzu8NDwmp3aSmMs8QjUT4yv8zBpiH67rdqMqugVcgEQT4YbzH4DxVH3nhiHpjvYDZwyHGMxzb4refKz9B6z",
  "key17": "5HC33Xa79Sh6yhRwWcfd6Py5oF9vFYwue9svnxt2ssKMswZ5nSKwquXXyjq56ie2bfXnxTGbVEruXDirV6Gp6DR3",
  "key18": "4LprXBb3LxVwZXTU18JZW2APLL7Y655RhRRogjaW2R2HhpGhCKXv9unp1ukWoLp9FgzksST6kc43B6Be6eZGZQ8S",
  "key19": "2g2K2me5qH2NWHhQGC8tKTrYFNrL5tBwqTgUyiCRVzc7hNUSCyitP9h4dERPxY65HhKuFGLdaGbrpSF2T4r5ofi2",
  "key20": "5kTgU3kNgrTqTUDYv4AaD9zVhBYfCD2svQoAqu8pV8X1rAzL44fmVGUci4yFaj6evZha67p6E5kc6QnmnMss5jkH",
  "key21": "jijuYS7ksneDUPERqZkJadB3Qfiepvm9zZPh2y2hQR4Kt7Uc2quFmFgbzKvsBzFEB9jrp8Aoqy2kc1gKjLfFnCK",
  "key22": "57Xptyq7Ch9vZAp6CTdng4kGVsRMd2eZxDuKWgrkj6CCPNGQydZJXhZ67Auhe79FrnPsWMSFh82c1Hn7PZ6RTNXp",
  "key23": "9jQcgRxttDo1gXm7DEoVNW47Cbeq5SCwFgCqbGZkFyis2rA47aqwqGw4bMPZBAE7wZCtmz1Pw68FcEYYdkMqFPY",
  "key24": "2R725yGoQ2519aQLdbcbWq4hJh7a2kLF1iTC15SnG7sTCZoLomFzgAu99j2N1YJ1gKdU7YEnWDsa661eegimYcbF",
  "key25": "4fxgQ4rABMJXcd8AXEHzq6ZsmZZEWn3kPSQyELmuy6XEqfkthTyPn1CGmG2JrZj5UB5vB9apL8Y5Z37n2s3PxTeR",
  "key26": "oadBsw3AZu1yzBjTxMigKMqQMdPygseqc5n9RGnyZyRzodaMxgNbCB7djuJBb8E5WfyfCWvQ4uNXjaWQaG1ynV5",
  "key27": "2ER4roffFJcfGHdU6S9anKY6cSwudRWuLYhUFMEMP6ydCDrimZQyqLYgqRC73F4euP2vLddbTatqZ4UY4PNPBqwv",
  "key28": "5u7mrwJox5xaxAMy4GgqJtisjRS33kzb1iyXfFkRFsPZy9Bn7qWegFUNp1TNcSYGrFQswQAWGxyzyp38Pwt5iyD3",
  "key29": "4bFJwFSJPSdz3pvT1jRPoZtkNKLXoUbtzncBKbYZWpj6buJVPxnqjDK4LngarTtM59yinfBL4tX4JPavr5H1brsQ",
  "key30": "5VkRVQbdaypBGG35YrUpUNi6kNEeDpVg3rHwesssSwC48WUksyquyzwRxpZ3abPu3nA6EutSsyyUwVQWkaLAzH49",
  "key31": "2kpSoUv3ioSAPwswFRFKwqLMNGDubhD5wjtuufEoeSSEaHu3as1AoLXsu2CTRNUsdWSvvKoTjRDfQkdQeeTk2dp9",
  "key32": "dPS3831aSLF82cxdotirzefsZRqCSoZuRtTAVV37By7n5BQK1SaLc5pPj4sNwD1BRCAecJgqaotK3izduvQYbKu",
  "key33": "5bM4d1kcZo4EVSqQ3ARUyvpX6BwATSbg8qGgdNfWoWRZEzh4i3MuPwJiRMLAYhdoBmZDA1mW5jgHuPyNQ46H9yFT",
  "key34": "2TE2cg8UKhs4KPiXNe1yLG4SZpbCpFq5EZiuWMLioFHgUD6e1vLu8JxF6sVXvVs9QwJPCRrphVTkHyLqVt2esfpf",
  "key35": "5DyUzeTgdKJdVPD7mwVqiMNyziFYZZy2RSGWxsdv1MKPzZQK3DgfV3TEJBCDF4SMxxE63gScayd2YRfCUFBA39P2",
  "key36": "5UfgE6WNTKDnxJe3hTDYxu5BwoSNVbuzB2ts4NNDCe2iMXisuppfdVMDtRW61sgm5LcEgeCLDoZ16wSSWWKYiGmT",
  "key37": "5TCdbipozgPzj39m6iFwsbj7WRFEX47YoTxsBjQwiXfPMSUvs3Xmqje6tjUQEjtAa7KUA52VQEQT17Rhvng8kZ8F",
  "key38": "4U3hexuhBZ5EgUxHEqg7BKmf1p5fcSYo5iorRLWXq9NVJFLBWxstrQ28H5nmyZGhykF15Q6ZYTX56beS5g3J1cfm",
  "key39": "5eHHKc5vwrGo6TixoghxTLTKLGBSEqGQhDHzogdBbJhkZwAxxH5TEuE9JU8FCJDMZFnkUSRKNgF2eXB7gBCmrFze",
  "key40": "3QsJPjXMAN1JLvCo9kL7kJsVFdF1JQsKM1Mtzj4ji7G9pvvJAd9fPyNJEuhHcL2o7g9n3QZscawNEGYR56WHj2Qw",
  "key41": "5o53rxnoSfri1QEzgqT85v13M6p9zx6PWLp6ZcKT9KbpxaBqmhBJUgvN5xK83CoVcrCrYH3fSfqCLSZ3cAQd5AU1",
  "key42": "56cBDvdemrBRkshueVYqGcJygXvowjfKe6i4viPqzqb8NHQ8Gq51hEVzk7sprnbnkhmZD77W8UeiUsrAyDDpRdZd"
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
