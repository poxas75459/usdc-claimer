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
    "362xB9LM3g3dKEgTy61vshP6cVUwQBHe3zy1tzpeVJ1abDNaj9hRWWFXHoCsmoUw6fBSHkFvwwQjZyTaL4YRjdxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cecSdDiGfcAEmr4u3QiVhxkAgebpgDBDASmoXsz84xVcryfsR9LJEo3AV29KntD656ui7GKz5XyRkZLLyXUijui",
  "key1": "2wJtiHXfQHuomMHRihwp1cNsuomgvVPZBeuHbU5DcxNi8tKf8GHgY2vS1bGvBPJnrfirjurnHYPGQPs5PrvQW364",
  "key2": "4aot4aMEEf9NUnXrPfJmUszTfwyzU9aQrMSzfoYkPCawkUqVoNztWSJKQgFWMvQS6fyV5QN9bRTBgNNNLbLrb1VF",
  "key3": "3bevw8RF2bruDBxM88F2ApbPSWCdTJBn1LhYoJ83UEz7tQ1N2BoDh4oDcRyKVg38fCtpuz4GniKAPHUS2n1XjrY1",
  "key4": "6EESe9xLjbAszbSCBdQT42W15ML4sUkxvmXqZqR1QQygmJGiPR2Cy3LqiDAhW63hSf1wazPWVStmioCWUzPgAwa",
  "key5": "5zTdmD9ip9Dkgyd2qMK5FV6rbeSaTeTpWtH7hhShu5SpCZcAchmXe7GEwnn1jXKDBPJorTXqH3foLhLqHoiNNRB5",
  "key6": "53bfAJQPPXg3o6c2kwYCYS71P2bkgF4sqM7idVUMRpgyzwBZqtMWKyqzy6hcejFcZaNxsnTvgSByrUmXLjkd6XcA",
  "key7": "33SfNPZgUe8WNxqgTxc4WXhV7gNzciTt3PW6BrZNG1B9H9F5vvoKk4SEP4ihia3FwNT37aFePWTe4siA3wBjc6n8",
  "key8": "3q5rMd1EzwBSSXjzYPDF3ozx6sb2ExFM6qejqesD4YJDLo9R7DetqTRcHHQzJizd31QfVQ4yVyFtkvoPmB82NCm1",
  "key9": "2uYehxD8fdWifCrrM94QbxGDDiU23vo4YWmSKyeGrQmbjCpn9qLpdxxGpe61iTz3YDjwbeyYdZL66xtRTUYH9keD",
  "key10": "5tavvSYk8Wet2MeB6EMnZWoQPBn56mus3QVRea2RgTkiRs2KMK1geJutZy8UNekRzQn6i9pVjRGgYDrVBQybKdPB",
  "key11": "347jKW34r5pwK5UTVYSkM9qopt91XHrZQ2bB41AP6cd3afm24oUos4ErH2G8989orRSUF9CvzxAbh8Y991EfuMTP",
  "key12": "39weiv1Ww32S4ucn5UqkgPtfidMkE91czXot8XbD3aubLRPj9WPH8hzSGFcFKa55afASDFYjwMWZSw9KVgSoirzZ",
  "key13": "2NqBakuBziyGimgFdksbk9tzKStaSF8rqaumi4uL6BCCfHVzmr4VdEQDA1vTf1BwGxKwaJBvKPf2FNwJpGrKLeox",
  "key14": "4jsz1BM4Mbep39dwE6sp4794H3AmSVXbBcxdB9Y6AAXFPKUKMRTviP6JADNaD2eSLvx6H2jWXiUVGk8Knitytkfa",
  "key15": "3tYukDNxEzfrT4FvuWKrdhQcH7cGzdRARVAHhkT26LkvUkARifwT4as7MYVesjzzB7FTNZnikJ5qjUH3BDgWEh8W",
  "key16": "4dysWGUqRaFJv3m9k8SMP24sJipAC394rtPHufxWhiGqC7ZZEHKgysjmUyVQRhnwuBoo7FtbnmWGZ5w8VCXQwAZ7",
  "key17": "eQG9Rr9uLnG532SxdeYGPT31pXX5jEoJqSqqpaw8XChL2tTyR2nvQewWvFzrucXqZC2MiA1Zxw3ZcxgPqN78HXX",
  "key18": "4NnE7kAE3NkEn22NZ9VsGHvKRrJEMkCQ3gtHL2Z7K4hpY79gb9u88LVioNbzhDinE38WNB3PmRCW2WbFTX8tUyNP",
  "key19": "e2f5FVtrx8vUdPwcJfrv6M6kdD7JM8S8MVgABNVcREP6REWJPc7tu7Z2cR5pzkPRL6rsLJrds9Fd8kWQQtv7iiY",
  "key20": "3hQmxTHBUyeXwBnBHHUGrBYiVKX47ay6hs3HsVpcv2KCAVYEXWXdFtf4mqLekE71RaJmrYeE1GsfcZeMnM47d4gU",
  "key21": "t6KJ4KKo8MVGmMJ31MVrtMaPpWgRJDnk4Uzxyx4z9b2EabN6ERnFMLUFhFqy3MjR4vZYZ52o251Qyp4iTvjmCjy",
  "key22": "2XYx9gMN32DkQUKfEXoDK7WKuAVvvNf7L4zTzthsYeuuHWVNd9YY3LZ1EeevMqeP8S3DxPmvoPXt2MGvT9QWHqWp",
  "key23": "4XMBxtaLvQaGXfEHrbbWVJc5tiSBzEtdyWcU6Uw3kuMoFs6NNFHTQwayHd98VBoozEr8MEbqdXpVgwWAE6P2rJNK",
  "key24": "5RRmb6wohZH33SkNEMLB55X3TDDokdStprRPDmbubLbSPV6YTExN3bjpx4qBopZHE3sqaLzNmBLdu9MSrHAKLy7K",
  "key25": "5jHLmzUigLvGy31hLY5Fe242QTYXyrkBybHmCa8c3B2bLy33isT36ozuwvo27FTS1N4eYdLwMP6Vx2DrNeq3vagQ",
  "key26": "tTSHZazZdryztfvkBywtLCHTstCBB66bh4iqX9V1gQP5DTBFZfBBK8tUQtXzKQuukj5L52ALiBVier2ZddeYsPx",
  "key27": "4jd4k86c8DghwMY1FUXZM7VMB6phd8bom8rwgA9FDL24i3wAWTteYDZE8oow1LM3Xbpoqaoo5h8UYJ1C7Tsvyf3t",
  "key28": "4RusYy1FijoTPKC7eBK2w4ZkzbMUzBFYCh5Drb68U8wdVNBvhveJGEEnmjyq3Q7TnyngqbbTqf697ciTxNhWmgEz",
  "key29": "3kMpDCxSEPWuQCPVfPkeqUd5fJweXt1d9GDpCiWERhTUhoVTZxhcQ1SWbrM3g4r5yMjqVRHVkZWgPqQ9DFHmLU5d",
  "key30": "4E77LUAxBoaSaUV61bUdHMp7g2caccqGzxKVGtGeN7poX7fnpmqUs7UzazoTZ1MhzqdL5R6qBrNDrcnVEf5F7Yyt",
  "key31": "333hn69YQWDjzaHynESwBumWumwsLBdRoMddWQCAHGrWPbj9rve13uWKKDcftExVMq4vuMfTuATDrrj4gGyXXUKj",
  "key32": "2WLHSTjBERfwMN8e8P7wqnsEN3gSsWkf18eNgLsgR7uHJDsaHvigwFwsfXRmgeDQ8icawNa1gSCyXxRTTtc3sApo",
  "key33": "51DUw3k3DhfDNJHkDPXPCGHZtSiKkxsMXNCDhZCzeQbrbQbVUDmQZHov5geQj1gfU1jtaBvMUv4MXGUpZBr5G5Yt",
  "key34": "2St9DdVQmpF6XLg8yd3DTxXgAggXjLbKboNxTup9sBATcsBPg2ERwjM2vkhXq2BKG82tfze11NqzgNRvEoa8kEsx",
  "key35": "24vBbVcbtcQUboca66GFtAd7hqijnrfq5XdVdHywdjc6mG3vvUNTfEA5yYxadH6VJTYDzjMzn42ZeB3RLx9ZPF5c",
  "key36": "5pPm3rCQ6rUgR2ef2jaqHgYLrzn8kLoYMoSfPy4JS6u39gRvtBGLyW6nb8QHn6vJ4R6X4VLHCedvCb9UYbAAuwBQ",
  "key37": "59Gi95Q2L5KZMjqSahCtvCHGuc4SHJUH9jJKrGiEt8rrRfSNpXXvGZVuva5R2RDGFUE2qXfPC3aoghKg56upey7m",
  "key38": "2AwPDpX3GwJH7y9bTUzMpifZW3NJqbnhsehHTceNY5iRbbZtJpPDtQAvEBiwZ5rv1uQZYDbuxJJ4XQffiAempDeP",
  "key39": "2tAhtrJmCrZ4fY7QaGknKfjTKocWAeuCUwKfPrP4WZ19xnGmJpkXn3hD3QKfNAMvxtaqbPaooqvMfHDKHeRMfaYo",
  "key40": "3HmberTToUrLoFBCQovCmnQveQ5H6fi9nAJt7cJ2J6Pho5weqnUGfcHbjnGdyoHwFrjpMteN7qZdzhPNuALsRywY",
  "key41": "3RiDprQCAPnkfgGeEvXiCL9iGHmj9wKyQgMtqL6aVGsrFasvPxPZk4wXvR19rs3QCuhYmPQUfvpkvnSCZBSnnird",
  "key42": "2oKUrL6qxeTxYXuSC9VhMwgSy78tYp1iwt597b2dmtcTTXbXZn9Tkvaho1vyqvxyNmYmQMviiQkxzu5rni5iGYVa",
  "key43": "4qHNHUNqF2VFDqyKzbkQRGU4Qz9LiTngEzqTRMWZa59miZSrKRBXHrMtYi1s1cLgoceRFSyeYuzCKsYHjBrqtBZy",
  "key44": "47cxJe91647TW2oaSiHrVwEw2EA8fWzSH6qJfecWFVoNAz8Rmbo7J31HysEgHXR5yjNLC6hpP4wQ3UcB7vwmHjkB",
  "key45": "nGyvkeabQEcuuycuQzJ4eBTuei9TSkoknHSVWioGXVzDaEZU7JdehSMtwcYst2j74hDrW1eNoS6JcNMpoGQ7pJ6",
  "key46": "67TR528z7LSr3g5jEKe657xuKd5vcamosFTvCCaMoJM8kJKek9ziwqpgC1LsKqRfAiky6mQmrsztw6PbbM6EbMA1",
  "key47": "2pK3gUoAPkY1pfg78kN193JaufqhcegK317LxtG67UfrTSgv86uqQiKqXFzWYfAvpBXtSuxTr2dUEtoLqgs4qUC2",
  "key48": "oyXterhhmEZXpVT3tUif8E9UYiaDSmgfJsKA3bYKojd7TDqVkKbzumHERCbErLpWRvMiFB44Shesvkay3xhyqPY"
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
