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
    "4datw4EvGDdENLcNoviNzXVyPphsDBBS3hHmRe3KpKSxANNN9JCJ8G85icpBvrqUuhg7MFPKDHkBPYF8EHWiJwJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pRCTYFh9Vxq5azD4bS5Wk3dUASE1gW4tveZTTCUiFQEDguKpwnxMeHZVUvAVK6HpizbAx27YBxC5WV7R5PhgTx3",
  "key1": "2tpwxUDGsmCbdBT9WfbzVbApLN9xz58e2gfM6XhDcbeFVgkiE6ZsBnTZqMyDaUQQpncjqPKeqj2SdrjT2K9wQMuA",
  "key2": "5pZo5o8GJBoTytKMBHkMzhr5CVPJ6m6rpgLWhuiNamjjEqsccuUcggKeaANU15KvbT38fRmkJYTE3ZRNKsc42T3F",
  "key3": "kAqPJ83qTU6TTJxhEWz5RP2wwEi8Bpu7CxyXxLEz3FfBjghVKK9Wga9G6hv7gMZnV2En7cvUC1b22a9Lnb7HMDz",
  "key4": "52W1zJGHV7m8qsEFSZDAG13321seRn1HsVecYECdwWkqkGBJTD6ZXQsJtFZ3b2cXYQ7JkRsPS67xuGFsAA3xdVBR",
  "key5": "2LeC8HWrN3yE6e4cPE7x3hDcDaJaT75dowFQvoHr8AXY46HMGBb543EJ5VE4LEfeuT3Kxo65T7kMdQj35bWM7sU6",
  "key6": "nYPRzdDMZ8tCQvaqDReVf3qtVH5BJfZ6DZuTvNfFQHSLfRrLMiN88pHmDcuMvMWkuiHZXohJhZddtH8KDmRh7NR",
  "key7": "2C5ZkohQiuFx1tKmd59qPd3bFj73kDhfQvg6RsX76DhSjFTCGwjoqrU3Fw9frzCF51XbNznp4wNXEL64BafM5gDn",
  "key8": "35sxFUmMssCXs4wmc2eTmNTyV5j2KMkrbhvN1zrGrEiM6BPa1nFBPGTA68joEoMxwtE5zwHy85VXCGrKvR87JZmn",
  "key9": "3ZkYMHLPKcDTTiUrvaGkbZvd6XXwWceTihzTqH9tExCrhFroPqW8SXyPXqUXiJABz7k9YGD2HZPG3BvrXzNewdsz",
  "key10": "2TW9Xs6in2VPK3BW4tzHCQvv2xVaV7MiuetwyiwgmCDCTUgjDPL13bDtdNz96NFV6ujJAWEFCX3zn89YYXLFbaUc",
  "key11": "eTbjRCW1BJXDTETJ1xXBTBWvzM2bGbsGfoAsfePBUQT2AVJCrmfdSfhGMVtGzLNRnirnRiU2mRnnWhQnd7hTuwy",
  "key12": "2c7jG5qJQ8AKJizWrkt67Lard1ad2tRpynWfA6LxnYUou3QUiux5XByM3MW4YvupktW2fTBRCf8NBDGZzL3Vaxo7",
  "key13": "2YbY18jS5cYqTUzJAEyXSJSowYjGz9SpWYBptrb47pHUiSCM6ypEBAU7YnhKE23NY1QZ252jNvAddGCfiQNgYkB3",
  "key14": "4nKVEi7zAajw452M3rV2Xn1rH9ei44QX6xpqCHhGR9nq4J15RT4Y9d33eu8FsHzR4pQUsTG6C768kTY4eFaBWNYV",
  "key15": "2LBZDeVtfRGKQGkAh6xxQLhQ5Lm7zkMeJUkfZf1JeRUG2mSChm1TYyLVpjHqFFVTDThLFDsvDqxW8mFFdqQEd7HY",
  "key16": "2Ep99sPrzoEsKJr43t1dqNy2ynzJtMUWRXUd7PnToLY6r4byUwAGgqCpfyvZLi36oEeteKt7NXjkQeE9N1Biu3Xb",
  "key17": "2okb8AAhQX3tXmXniPgDgYJzi1htU2bcEJLyszx1tXQN7Gc8uBoESKXruAMm8MF9zgSzJijiy9mAsf5mg7zmLstx",
  "key18": "3gLmZzUyF6QzVivxbrCwnqRmwvJP2e1F6S4d7YUNJM9SpoiBo83eanvg6AbrXU1L78Uw48FfEuNXkTz4dMSo23Lq",
  "key19": "erwFB6hZTiDPThiY96CCXoeT32hmQfkCjD7nKF35kK9A5uGjPKKed8wSsKT5Mf2Uuz7xK1GCdyu3qZzZDk6ikeL",
  "key20": "4MgX4gErYfhouEz3GQyLjBZqkxLQZFuQLuKpYLVfCk2gpew7jm8aPZYN5TV5gJrY99oEWPSRBqu5DqcVABrTK3NZ",
  "key21": "3XeKNFxdnqbT9dBztqBFcpVzcizKt7cxHym5VgL8wybBTreVKvVFfnWy715x8VaP42vALpZAJ3vdpEGemUrmX7KV",
  "key22": "1uHuJa9XwMCxRx1NR2DfQ3g9UqJWqeZRVaUYYjL5qBuURpqkVtjrZAxh1fDeeXz2Lh6HaWAWxipH6wxZJ3Q1iwx",
  "key23": "4BFwVnBU16UCc1FjPRJXwtzTiotNESbQaBU1Dw3aRPh6A2Dvt4QxpTTRACHyKtpRHdVGr9RgttKyXUQW2YotcNVw",
  "key24": "5fDvchsvccqXKkZ7kVReHWJRDcwvj5zqwa6yB9smAN2rN77DL53LUZSf4rr3L1fW4sMj9wfSpv1yryiM1Z3963sA",
  "key25": "2sJwPLnZckdHgdLACebNMmtmGwbZUMJv2NnFB6ExQix92rKom5M1XVvxRCREwQ273wtK3ebsomG376SgNswxdR1e",
  "key26": "5APFtVmxVqGRRzoL2iKyNxRXM4MKwuBb7CbiW2C1tuRpUXXjjUm4cVZc6hLWYXGoEMSNpBL8T9Tq9HdGa9RF2etV",
  "key27": "3MsDR2rShm1YqrPwy4fkoX6QJ82rQ22rMBGjxcsPF8fRiTN6dhV5MMj2Nz4kSG9h2DTJLtnbQ6bMB6nSaqnEzVPC",
  "key28": "485GpaAFpXWAyGzCAS6ufhGyxQmihE4M3M1ibqcq1Fo54tPxtHnd3ACkDMBudNaj24pdwqoy24MZbM62Qy2pBwFW",
  "key29": "4XoUJiGb41ShnAEkw3DE9eSc7woe9Z4HVvrCkQtkANjDMYWSoFTnbJWBaXC21TawQxCVXNUiULcLoSZ2wv9dpHRV",
  "key30": "5XPZacCygSbaEdY33MkMxYK1aCf1PYKZQn1jChv3FJ1BU9ZfakMNxisqFphyzih9BYCWRRnjdFFH3GLsBoGY5FPQ",
  "key31": "47Yp36SwTt8AeKhoH5zYFdeLVPtEYRfNWb3zk7o4wv8DGkisdjTz6K2mehEEkk5DJgRF9o1FfXA8jZDsRnmzKSvE",
  "key32": "5HAAPY3Y8Rxnq5pzqzw5H1gN6VeLSVSrFPeWKPmrsXgx4hurUnnb7v7CAGMfg8WPAEjvJaAUp4jS9TBsywJQ1crB",
  "key33": "3jzzS1gC1mxFMs8uYUkrkt9WwEFH74PXdNtAF5NPJTYshURiPDHn2rSJYemBioMzKSZe2dZ7DwtfAAT1mQCWzibS",
  "key34": "2tKN1rhTydHi42yUAQEJr8Eg8g5EvDqon6UfXinnBD9jB5SjRnRhoifW6qWeZMBE2w4Gp6WJHRwFUA2mxYkR9U5Q",
  "key35": "1fad6Z2vgaFQpdwt5KtZLGJXmHxSSxWG1KZsLT3TKgnFcKx686FRkmZPzhWYymp7vqrZvhja9GdTrXpBdq6Y2zP",
  "key36": "3h23WapoTfiSYXXwS4jNtaQspC4gDqYiBnRNqJkoBZEyXF6VZAhCzFu87Fpb4FTnV2eNL5EQVW7pmYs8m6sndFuQ",
  "key37": "2m26ws6YcaoRFNhV2UG4rxzmjLVZuhMvwW57jxyTeVFP82pZscMiARaaMgSpbGTSw4i8dc8BZZWbp4Fcy4vmj5oC",
  "key38": "4xARBVR2Sr7RJoTuobNYBUdFf1sQgJZwPYjaj5nkcNNpZ8zk8trXru7oR62wN2cQkfUS9mo9oS6hEeLoJ6Zqo75n",
  "key39": "n9xitZMNcT2TbyjTiGqidqS479vvBMmsXjVgvr4dXt5dkV5qveiVPgvrmGc5PfyLC6DMa4rPMmXdsRabGEauy1w",
  "key40": "5p8wCcuTbK71nPyD3HhFZmAZhgujofC6AuhetNNAC19JaxsBJNHw9CjDYQd9TgvYdyUybLHS6cCuv43MUdvA2vea",
  "key41": "2HqnBervrmVdwyqBCdKC9DnoskYMY2gUGzVKDVrZgzhvAZMdaeNXHnipsHWscnAZFf6JmRhSF6Wat9fTTXPgprqE",
  "key42": "3z7hrBytbSxTQE78dAsWv4jZQWBLLDP2n8NA4qAQ3wWDTUU3aKpncQiUs2vPfmTpa6FWSqyYeDkoosciTJTYsMJM",
  "key43": "5PSb7Nwas1d4JAWoD9CMRcqPdPFrJHnAhoQDVTV27Fj2cms4twoHxDoceLcUXwa5SYv5KXUGRaDwrQ7FNMePA158",
  "key44": "4ezk96NBbv2U3P73qqBAHKzdSJR69zf8T3quzXHnU8AKF6ZPQZUtwgYx8p6jUmakWtxyik2CryzXXjvBGRuEEQrk"
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
