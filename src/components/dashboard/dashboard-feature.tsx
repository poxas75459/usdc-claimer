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
    "Tie8sr4L33VwXpB53RNjD6cSVeARokR8VGnByBikfwc6kQoSMdRVEwUmmTv1QKdgBqXDCqaSM4YNDbdnrcYeJSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TiK9kcUy7w6e5UKzrP9GMWKXbrfkj5qDQacp8j9r57ZrSSATV9W7uuZ6N96P72umCCEi2mWobNRySn6Rh7E4usf",
  "key1": "43UMB4ytrJ6k8JCTzE9KmC76ukR7ZyPRpyhXUkX9D4EXVWQysQ7QUQ3vLUPvNsneXfD14fYsvdXWN5aAsVK5JFa4",
  "key2": "2QdVNZu28hhdrKxJvbgdQak5ehDz69cZjwQRSHLdDmsrY28LNR5MAMv9HWqa5mqYdQM53QSQpuaPp6DQaieUdm4f",
  "key3": "4J5KxsBY46qEq5FXgB83WWxVUoanGcqPu5NAjwatnHMFkkFn3EiFt8Lffk2HiAZ3fgt2KbzDz855CMvANHW4G8f1",
  "key4": "4nzTW3t29BvW7WZLQni6GgwV63GPiGKdAQE9m8TpS8qYtP5kKyQx4xBuei6UAQpHhKpskq8dJ1Kkt6u5ribTNXbt",
  "key5": "2Ec6QVDJSk1RerMvEC1CyWJLXiWAgHKezbRPrqfUeRMrLGytqRfu2sKGY6e5PH13uW7BLPkoaT4PJB3FouWpXWaQ",
  "key6": "QdHVVNCuxizfgzVZfnoZhs1Z24xvHQzX4fcMDmcPr1wvhqw6NrzPkn5FF2t4jHxDNeVsKjPDQJD6iC5agYSgFch",
  "key7": "4iLbgjoj7DmssxHkdz31qci5mVR2JbpfJNCEwGFjsNSxbePfVAaEJebm1oLbzqUdwL2PRizeiXdzLpQTuwtAr8zx",
  "key8": "2rx9MfyuZzUgWU1hXavLK5PwN7NNXRKdS8VGWY8qk2E659jE2xhNF2G7SrxobY9vM3TY8xgSsvvaYF6WK3vcnZqg",
  "key9": "4y6j1BvhiSr9unFpJ1Fnt46FN74BGAbFrPrYbgvKNZ8qKwcKvnrvKACmKhWuvC4vGhArGfM1M7qJwww35AKusMcB",
  "key10": "5TvivVz1jX1y2gFxqQif3CpDexuwBqVBdDafW6mkSGsuJCWAXqWFowTAd9FvgJD15hvBCYYjH4LC8vCo5EpgRdw3",
  "key11": "2MqzZDWRqYr3Rnn4nfcNhgHWgiLqwv8G85hHfCgbGokkqWYRtit4QGexD5cai4MRfdqnDN3mg8MDF6Dpn77yMdzH",
  "key12": "3vvPs6BavBc7DFHUiDAsyytcBdZosAFfcreYjAMwNR9PTxKgge6G39dzEavbfZQ5MZev6rVjAM4E464e2rbur7QR",
  "key13": "4mcAnEgALC5KweZHjUZrf3ADRdqPwsb7easr8R2Uh1FeYBJgWNhmnir7vuUP21d9PTQCfup1iW8HJehXNS2sgqHC",
  "key14": "3w5QB237Nmu7SR7SAo9WXxATJoWjtSpMmkTGJTzz34XdvJYtkZTdTNL5LSiaZ2wE4UwBWuWM9asNu3d5FoiGFyGJ",
  "key15": "ZpY1vAncZWeiRcty4nWpgJzXiFvZhe1j3knTGNWSfDB3JeR2pt6DjjZE2toh8wsyCPyeatymCKGJNrsCG8RzcvN",
  "key16": "23uGgwoEs5iAGB8Ye7M8v6e3BDaHZP5H15ujRLxy47ziuViJG69S5sX7WoXKLt7JPJmmDTqD51LBjW4YbxoBX5gE",
  "key17": "5zQGeQRCaNuSevFGZWM3ePFzf62Lnw7rNqjhFdriYzFZbszvS8LunTXaKv2u5UTQrYrhjTBkx69SeXgLrUUmrQ5B",
  "key18": "2qdpNzuYpo5g7hrDewBCrwEkYot84XzZqD73Kry8dC9GuuNUGtDZCWyQhZA4zsmFHxDhcao1FSegz4u3RZ7ProsV",
  "key19": "BSCuQiPz971WLmX9thVP9iBNqG1tUao1TmwrB7m1v6ANgouvRFyviJNcHFSLqjzxa7c1ZuKuYXmERGQA3tYBcbK",
  "key20": "mbQkCkUrDZhLaWcjQcajf6nqBpqxd6gt8VijNFUxVkanNw8MpatvazRNEsxy4NETGJSEMX5EcijuReYY4SbP6mZ",
  "key21": "5wnuS457isdFnxpiveNyRu5p4hPbLiD3CWfbtqvY8dbPT7Et1XJb4A1e9CLbeR55GnQ5oj8ao7GqKVJtEBxjN4WC",
  "key22": "4Vw83V5yDkg6NjXNJn6PHMwFwLSUkQ1CyrvnkXCUYM9hUv4mzgMZcMjGEYDDRefUdZycZ95J9JyNx74qJUaHcmkL",
  "key23": "4NbXJk5wvDzePrKj4tcExV9y5Qp3QiyPwZNnc35t88AyV4t9EYXPwQXE6s9P352p5y9SpqZAmne56GVHFDLmQCoG",
  "key24": "4dbUEbh865KiyFKrXX2obcRghBuB8rzvhYVGrgEqLtGwf36sAopTfo157vqb4GqpKtZgd41GNjcSxCX9h4BubLTZ",
  "key25": "2XMPpoMC34fSUKfbcYy3VtEa41NMQDmiB4wuKLEAqpSCNaPoq7ZeiGfFjtbQm66HsveFNYbqciS3DgHZD26W5EJD",
  "key26": "2WPUNXZYWayn55irtzX2droAV4E8AGcfm8fjcXb5ZJhyiDoonU8RQvoSacgci1xNULCV4BMG6fnoQ1LmMUFvp4zu",
  "key27": "2LSa2XaN3ffvYvrMNqirS8ftMkY71ETzWK2AU9m9xobcR33UStG1ZFGYhCjWzEKDfaMTLYaqzsg4weiNJQjw6JpR",
  "key28": "2hgfJAve3Q8Yn6hxWqo5mp9JgaNzPhFMwZzN3zKMTvh796PSnJpx4Kd9iJQssyj6Ly7RNByKjRgTT58ed27BSq1f",
  "key29": "cLWStwQRHK2ht5rxKqnxexZRdU6A7T2YkuVeMcUaBSA41UApPwxqaWEzWVcJ5cVs2dA8crDHoA77rWMUuUuyAyB",
  "key30": "Beh7NguXjnVdFKbAqPiHxRPw57DWfRSxwfdcoXSBnvuecW1LQopNMPPegH4DCLabbdqvR2JqZDN9RP6wiiJH2zP",
  "key31": "2rJxVnin3KbqcPFNyXE3WvX2SCVRfDtGodpgEvUBHi86qtzk1WGhDDsuSVftHjr59T2BqzUQQy38i41w6LvjrnTj",
  "key32": "2MtVAtSmRSyFt2PPpUERuoQT7hS277wLXjw4Mf8kxcv2jjCm2b6MBdShReNrUuhP6VgWpf1eYbMFmdwULF6HeH71",
  "key33": "3tiFHYvxTcByb9e5wqF7pdiv5daoDQrLLJMR3yuobmLBRL1Z4HCuvDYmV3amWP6Xo173Fcm8Jb6ZisztxXeuB2Xc",
  "key34": "3DPgXqmLta3yi4D3PiR2ryqLFc8KrnVxTmboY48QMk9W6DSLAwo6o8pmA4AJEmYjB4BSaPC2uwZZkwfDoKVYJRFk",
  "key35": "3PDNyXDCm9iUZTacJ1niCnqvC8rUXsG3893yoc7k7N3V6zqf5Zhxu87ewSCThT5r5xrTXv5tZRtb2JJjk3Zw6FWz",
  "key36": "C4dPa7stuwEVq2WU7C7uL1DbfDUV3DcfygwkYfjaNXPmTeU891jHx6DncRNpQM9UhN9j3DG8g2b8mGvAmoqhJH2",
  "key37": "4xgW2Q717S2BXmgBfyUPPvDKLmLu9DtiP8fk4WvBWnKYVW5en3zRvGEeRx2rdmTtrWmtEuUpFh9j7j6y8jYMMd32",
  "key38": "4H6u2pQkzLrmWYcZ3hv8H6KuqvUpSiPiH3UbQRVm4V3FgNzyqAY3FTLgFRuCSgH7ycne5YzuAA1wrUQpSwfr133a",
  "key39": "5PmBmfueRhbBbxGGFwYWiBxDnbcCUbRhiuqP6eCVcJ6cGUakWAHNaHgvjc8EW7ZGZeBVoeXM7raktKW8G1vdL8B6",
  "key40": "3844g49wmdYkW51sufjWubhS1xyfoo9fodJ3HbZa9KW813twk2G8CNKQPeEDvv65Rdya8ai2UXDTvQuTd2QUxvyZ",
  "key41": "gsRNUkg7nwCCJPsNjBTYgtGp5ASdQKqduvdKneMW38uV1ubR26LUaKQkyRkAaabADcBHJSsvNiU5FwqSGeMZuk4",
  "key42": "5wX4wWCdCiA7418KrohSHbc8Jm8ySFkv8A8ycSrTvbubcyyHsEowGV3J3usgYbevLAkwopKQVRSyoamWzM3g3m4w",
  "key43": "61ktpzBUNbrxhJJk7xnUK9G4DGWHYANd6EppA2NLVseEe47fTUMtSRTcKKzKksFXCUhZ5mvzC3FAdZ5eNSjCMCMV",
  "key44": "54ATrMoWSq7Yo2KGeQYJop9XEScjbowdaVccrngTCHBsLSeADJFcYqcRFstxmRt2kj5gZxJjA9YHnAWo9E1Wwy17",
  "key45": "8NGiGEugQDX89xM9XXG7pmHWJjkerL38MPMgUc7MkF7mHjvXCYvs1cwkBhQ8F77GEzakQ5nV7hvakd2ejnJa26j",
  "key46": "38x7SNdSxGs7WybwBbk8GpFthxe9L7ZEyVMsPpGBcWYhugKTtfjiQgxPHuPNyXrTHhhkTCWZu9G7bg1XX9Bz5Ca3",
  "key47": "3CcfqthewjKjTgXq4Q38YDMchuD2YdQ5ySohxZxrKnNCh2SXFDA6G9Kz2Cmyn49ayuT8cj2bm8v7v7sQ9i8iofQA"
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
