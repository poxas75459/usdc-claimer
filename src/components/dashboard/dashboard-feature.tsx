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
    "5SeE8Swr7ghTeTMcjWUmSxJXEhKop1iFQzYD3yhLoqJB6E3hy1HMfr9GEFLUSydvFouhDuAYWWL17ZyZSgrpVJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YpmLiuein4cYs5f2et3b8ydajCRjt6XpdDcsk6uGT17Mv4NsLrFVQEimtYxCssACwnbvzP4Y4vrDcf1inxHiaU",
  "key1": "2Uw6JCSCF3cFK5uJAcoHzmehuJeyMfTwbhgSrAuuJPxfUowr3e1kEzfQMDrJVH8LMUPisGSBt1SJMWNU1uMFScLE",
  "key2": "koA22ANTEgfAMaCDEJwkadEkv67hE3AgUBmANzfXspviTJL84g4a2FU2hLeRNA5hRUGfHwikxeTHRTYQtuagZfB",
  "key3": "2NP4x67k2tzsUHdB3g5K7DXNZVrR3wfshU8RqVRDhGn7mAXWq7KAzJzh4dxcQGCShSBHE5YyvGY2ii2hWCHq2Jbx",
  "key4": "5kJicU96FLBnCwbDW8h8y626K3rCXwRVv8nNTevZC4ro3JZKCFbT7UgpDiXDmuBVQkDV677DLtNUM7CT57wBEqxS",
  "key5": "hcJPsF7xNLtafmBPRU3DyKHZ3PZfY97kAUvS2RXcqZ3XhS4X1cDYNSyzX71g5EuSK1rFDgAe8rGApfJvdju2BMv",
  "key6": "2GzuRadiJktJVoRvEoeaw4DKGyLqQXkTycRmex9aMTRWNYg2tjGTd2y9SVLnCK3jHVYPA6RkzfM52h4Rfn4XDniU",
  "key7": "4Tgy6WH3TXN5YFrKzrQEc6HxUgXUMwDtPfXeuHyQo9asTyhGFKqsqbZycej5PjgoRNv1nbB17ozy6SFKYMT1os5o",
  "key8": "4a6atPB8HSQHX7dpdtbDVfSfwXg7YKHTYnU6pxcgxTkoJxV4vaGWTFcSv8BbpkokRQpsbTpGEWuGRYYDmohwRqCv",
  "key9": "cXe1SYDwRGmFm2ZjKxGkm9Xseui33K4cT6EeJGdjWMc3FUPkq3XCg7srbmmcYyxnnA87TVckdUY6oUQvyyN5uE8",
  "key10": "2PQzkrG8dSNERBNEaur2DdgFbHvxmpXXVXNXbAtkD7ypc5CTtRUYmLxotSUXWbxoADtAwF5xRqLnQXcqHDGnxsE4",
  "key11": "2TJC28GyMF2GjCzyFU9dXLwM9yAdPUqpde5Ji3gh6xtZ6difTJc4rvUp7aUYniZaKJFeVhuijTK8oRVoBwjx8DrT",
  "key12": "47RYCZ3xHPXuL4G3y73c8j6N9sFCWe1D3BZGfbrep2ZX45wtEGgPbfbYDUDyasioGNW3EsR4X3sKJ8CwXPBJ7q5R",
  "key13": "322fVQzPfCXxBznvysT5U6onuxuCYHCa2sEZjLSJ5magVz5xQMzAx5wNxJgdWfc4BPoMUXxgtaomPMSkgVoj83F4",
  "key14": "5y8724NQjTHNqakFMw4zK2X4nfyN7J1jxNAcnqxhTypTWBCS3NWm3VNjUJpMzz5cMStiCa2ZXBDJS7c15pB1cUkz",
  "key15": "4wMHvM9tYwrsZ4UZxr62nzwK747ffNabduUcJFh8NY5s9BsxG6u58UPQ5GJuHF7wrUfqbQAwnJSormpbYyEAKzfh",
  "key16": "2aZq2xbZ9AGFwYWPUnLCcWXKuNefvNyoWmuEEXy2fGKxMC8Y7MLgZcuNbBvuVy5yFhFxxYVpqqyxS31whAjXhpEv",
  "key17": "5uYdRCwN3s2vvEPEauZ9Fc7bcfP9ko3ThRguwGcrHcuw8qTMfBArw2emD6Qd3p2RyHVzFiWfojMeQeu6dAQcXLNp",
  "key18": "287jBMVT5gvTPGRkcAqYcDFbJRmVHHDaSzJQjBxduXMGFDD4uuFgLJjMZJsWKW8QqN9DwW9JKqpUimUeNZNDFBAB",
  "key19": "2YRQTaEbxjxT48cvjL4PqRqQxbDCPbHao5dQH89fGpUFHRyovaiXKXoBwjs96n8bADTZJz58EsxstyF91Ro8xRNL",
  "key20": "2MTNMzbhoH9PsApCmUeVxgcgmqyzRQjSN2mwAT8gnB9AMnhBcxj8RB5gDNyyqLrN95xbDW6vdDr2cRBGArhLkgWb",
  "key21": "3jmiEJZH3WFRoT4cqpfp6QiRqSJdsN9UxjrQsm1C8k6vEwkDu8hoFhneXcV5m2HRwxHo2Rf8pD4pDGBioUKpPy2R",
  "key22": "3JL4D4ZFhKYKHMFPNeYYe6twtX6u2DgYtSygwQr1AeT1ExRsrhXh1s6R2AUn5ZnXofodUPU7Rh4PQ1jsu8Hg1WvP",
  "key23": "p62hM32aWoPMKjum5EBjprXBNCTMpeHgxFq7KjbNgJc8ZWvgJaH5jPoz5azYw2T3Nh1J1rV7xFgCwp9kK48fTNm",
  "key24": "5NvMTtZLjDcfC1JT1qtocWYHiDo4VaEDr2xk5dTY6RF193QDzYcE6dK8FuRF1Kx8g3vJR8ZcpGAFHyrKtoTSXbCf",
  "key25": "5XiQGncuR74ek8TtXUqFjjYu2RnR6rUWNRwKHytepzp2KWwyzwBmXp8sx1Na9Z43S3yEt1DSDhoDyRuCGrs4oh6y",
  "key26": "Fe3jQXwnhP1DHx9mMLb1VsECpkAzzDPxL5JEwda2h4JynmXd2pS4f3VXofQz6XtVKuFo2UgjkqbUB8y4c3urorg",
  "key27": "5UTdLoWdzECXs7AFx5acTVWYVtg5Ru2FFFxsCDCKiccvoSnZuWXAQberytKASqKnKm4tMjeGMHfbhFCZ4zjL3n9U",
  "key28": "t2H7iAzMSkPKGLowfbCJpxuvHybR8BVeDkWk27UCZRcpnXC9Xr1M1KxTC85TbFGHzioH27z69DuvBZSsGQpNzYN",
  "key29": "3rH6qk3bxs5vmaFfxjNCn8GpMGuuPEAnNsaDAXYKcTqJBS4WgCsZpoqvQJpyrATxHqWb7FuJvcGX4J6ewqpBw4d4",
  "key30": "5wc5XQifucgADERh7LAZWDvdF9voH5QUeQkQ3MDRsx8ndKJ7kbQJx6U1Xc5UY6QsjNvhsYpJd5JFLtGGvfmbFPXr",
  "key31": "jwyQS99FQ4goYECzRQ6MoaVQ7HUGErvJ4ESZ6yUZSrJ4rtZxVkyviK9Q9M3nhufi5QFZqRSYUMGA8ZmoUBcCA8Y",
  "key32": "2f7gmwv7r6damBwKFaHhvnxHsg1xNZtbhQzgwsCSD5cTEUWz33NDLJJJ7JAvJfAnmTsmDWDmgFjDU7zsyXBoh52e",
  "key33": "3avNPbLBiGGfY2Pe485eAr6qrKQFnad4jfkn9BGKPSHkU6boJ1XD9w42vaxhW6KfXBpgoitkx6GUUqFUVhDbSiJb",
  "key34": "2HyFDU5P8dMLh3HVXXCuUqwDpTbPxPTAN6rptbmmW512C8Dn38VosVHMt8DWGaDSFXnW49niYEs3XPxgAUDSVCC",
  "key35": "2u5JeQbWqS1tqyWWymKSqtLxASXgCdxVpsWAr9gTL6odJbmgpKavWPoSty71Ef65J61pMkbabASUTXQA3tjhegBF",
  "key36": "zdnMJYSsTksAeM5hiGbKbBEKQNU3PZUGJDoZdx7Zby4s9rQDwj3bW76NZkV4oeU2WMNJFAx2onYbC1A4QrH1Ry7",
  "key37": "2SE93ASzUAGumGFJHNJygjwTJnqMX478zRozELYcsbD4pC5F3Af6BfhPcQrmC9UQmh2Fs17M1B1fepRvyF7caZXf",
  "key38": "DJCAudBYYtaUQqFWanM6V2TTfGhw81sVDhScnxAHxiyB6KD3vAYfQz2uR2uQEJvyXpyVQVDs2ts8HuTSDsVDSPb",
  "key39": "R7XHxffPkWB5ihoWiEkfdgATTnhZfSZXzSpdtZyEL3ycifoFts43kQgXUc2L2t96JdWQCc9oY3uYqkzDEz49edD",
  "key40": "4xA6SnWhUv29zGiq2tXkGLay6jNAZrLCVGjq8Hk4eb2v3X3HoFPSRucuizKfsK2ZPdg7GGPRTEr7VZ9WZ8tSMDwh",
  "key41": "3xTzNae2GpTMdjwn3uzmw9PZQY2yw6uFdfV7BmuQnFCc8rPDVCVpdH7cvcLXB77HAwtDVtHNzvf6DYN6FXeHTTaE",
  "key42": "33dvbBojSartJx1Vze1fWwKgcvgo6FGqGmAz6fpE6d2HrAQATvGG7CtMJ4DjnA26pxyN9BeJAvBASbHuMc914vNf",
  "key43": "5rFDfrvhFERte2uQfzSjH4GpcJMECWQKiBUSAv6WtnfKWZ9rtbEfCSC9u56pCH3eyzE3jA4utEftvrgCiHtfGjPf",
  "key44": "4nVt6kFnfme8hThaGHUHpCx3cMtHarsj44LKfiJ7n7gSoQe5oNzTaux6iAjpsDsKoJXRzEfdvA4UWouiZhrPJQwS",
  "key45": "4wnbJYvvmVwft6xL1VVezQN6ZfSsbswCJUFkarqzdNghVeih8kUgdoUDS29PoqczPaEHSnDEt2PAK3a2nfHxoqpA",
  "key46": "2Mmw6QQrUhBDfF2jRyU3eeSzRJspyZx6sS58NBZsarTFcftTDUDd8UyYYknNCFM6x8eCVH5T3WcwQKCgXYZYfrmC",
  "key47": "2ocD4XamfQhwV7bRq3heHbpDcaMAXFDQ4AGVVwuVtaaP2yBTzn46XmSVrYCZ5WbDDA4ovASbQNnUuc8aX4jUbtd1",
  "key48": "2xdRxh6VuzVmHsHyBpTT2WH2kL81uasuVxxWKjLP1Mz41PmDM5Epyezv5Mg6zUKTxTZeLWnV2StwD3dSirxK1Yht"
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
