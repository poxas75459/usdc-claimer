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
    "2VQvHtLgtXq5zgGemT6L8LmEpCR34XMPUwBHn2sxjrGejNkf3sDabhbXmLv8QG7Q6MR8pdHufJBV3zqXR9bobtgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iWByUapGfsJqb2LCLJrnBc3KyzNST8hpXkP1p1eB28Ui3SahKMXfyba8mU8WEvRXLGWi3vBagLigShsrNq4TyP1",
  "key1": "kU4ppMmQfQeaa1hadi4tErgzXYyRYG6cws2pq18FgBs513TT6gA4Je79QUf5huSH1Png5GeBCEQr4Qbt8YwSXCt",
  "key2": "3vGdpuFEjdGDiRtCk4dsJMaC5g9JqNk4fWkCEovjk6vxd4AJBH2NSBoiPvhVWSan37HTnm4qYEi4J3hsN9xDeZSh",
  "key3": "53yQ6nRiN8JzEjzo7b3a2bS9fuQMUX8dNUsLQjJgXmGLe48vaB91JpTAQcufCuzd5unki2QCbzUDBkWC6EnPXJgv",
  "key4": "2Rk6abW1jxeWYjX5ef5M1TJRgLuaZdiDa1dhHoyfobUxThfeqS1NQsrrFDjt6j3Sb75qK32Xf5nbMtL7bsX6P6SM",
  "key5": "4RNKEUFx9zXxy9swXA2fZxKAzL5SxeWYFoDmPLP679QzhBJh6cDa7Yt8yQAAiLMkynvxzcXuxe7c2VgoMoJec5oM",
  "key6": "2MSugp811EPaJj7M48ubwASQhYRL2kiCYt8G3FYuWPbsBWMyCxbi8HteYVGWzLkTbrVCw8w6rYATngYg21QKjYKN",
  "key7": "5BFbfApQkKwSbnYQG2uJgQWXATKbAVvrG7JeMiDD8gGFKjcesnKy5hiax7SPEEE2HDrpKkNQSxx2nMg1v1cG1ssg",
  "key8": "46io2pTk9kqcVMMpTgY1FLpGQZumgaXaUE9suCWgJwVyyPfB7nZkkgAfLaP4kKPVmaJu6uZzPv79asrKXRaTBRbz",
  "key9": "5MJJvpZYh4EHaVc5h1qBve44aCXWErUp3hZnBcTRtvW3Eb1J31jrMbCK7bmbXUD1psADojbGZVf6iBRCtFdpnjnW",
  "key10": "3zNeN45wzkHNw5CDXcdsPnN1RbN8Fici5RSaFdUvjyf94bRyb18avMiVmrFYCb3wCzWaQazRm4qyAUufgm8rit87",
  "key11": "5ZWRti2chcZYYu2X7Bc3dgSPMZGt68mbqZxNMD2jDZ8a58v6QiAen8MjkmuYvB6wMD3fZZ1FMrW3r1KJ289VYpKL",
  "key12": "5kiCdp2Pp2GGgYX7WMQdSo5Fje5thciwj6mZvLduzDpm7ZSh71VnCm5nNNBANetciyet8vFLdekcxqrbLZ54o7mX",
  "key13": "tPbzFzvWpwUD9qAGp2Sk2C48NMLfxAsYEZgRABUt3JRu8qxvNywJ8PBRauqdxiSK6onT2VpNJzdxLDGiLfCGk6c",
  "key14": "3mtH2UryZNVmznk7iAwjoqXcpHiHu7dVD52wj82bYcpoJVw7hrdZSu9XoPzhqtsHZRpTwU74ksUkU6B44zTreS2G",
  "key15": "4AWiPmUyZJiSuRfkuWurAFSsVFfNfZKCtDvDtuY9VXsuLjEPCFPUUFvJkmNRMKBF3Lc2Tk9GkWnRTgSh7D9dgNvr",
  "key16": "5nMzhWYPEBqLqkbjYbQQ6tRc4bntXuMffecMXxRcvZL7VqRACUiRdFwFceUq8nTCguesi3mc1wUaazJyPjxZ5heB",
  "key17": "uF3mWBjCPBWi9mGvuUoWgTJSzsRvJzdnNqqAssPNostc7yn9GXsjSbr4EYN97UvFmiCbNzWAxqoSXsFs64zoQHA",
  "key18": "4GUv74AjRRF4WffdFUfcPNrpvEzb6nD4diJf2o3EBcG98RZgXzD9WwCEthSuyctqQb7hH9uDJPfnAygnSVH3jhw4",
  "key19": "52dakTBdvd2uS6k9HkxDMjeGsGwKTpbCVEbN4i4Jug6r7hJijU9KP7PMUhKUCSA7bRUrHETFiit8mAroYjCCuCah",
  "key20": "3Gw5efVy2wBRqNRBBpNx8h6U4Sw5ZTTAd2EYyK3Le5GEBy4eTLgsyB8vuAoKVVQTadqPwhxMyiEGxHAEPgRiuHa",
  "key21": "qS9NabJPn4j5QGtg2TU6o8NsTeQanjgUG9357J7iBCfzwrYoDt51tAB72PRrSXytF3h5gZ7Di6X7e7F4VXtaCFN",
  "key22": "2W6zrEMEwtebyCqm7CBF7wZnQz3URHmLaK4xDtzeEmbuS6wruaUZZpsSSKVGqwJL6L2pDnNVevo5ZDNkYczPyeSF",
  "key23": "F67V7oHqkqThUFKG6CAP4qUqJKEXYBpQDGdhQYYchv33DAXKDPEmhy2DeQFPFDsBSWRd8zUevaHpF7Ru7xLrvaT",
  "key24": "4kdyvmxwJqpvCt5bEix6y4ftDP2o6M3rqEgma2mZuaTiSdbWsWQQQDR93zFmzVYsMWHDiiAZZt3YQGRgyvkoWYPA",
  "key25": "2gHyZpfHCJhBhSwaRdz78e5mTHmTg4GuCA4byu2LePzmwVoniNf9wqASGo8Tttr14GAcon3VjABewoUPJTj2Uj2X",
  "key26": "3kKk89TunCNLK2gVdvb5K2WUkYu81DAth5JLaSjfwXMDncorLQYjZ2Qpyz6CiPwwa6yxNcuifY9APiSJWMPGXq1W",
  "key27": "3jogpw5cY1yRHxss6P8oAg5CkTfN7sFxRVpYXXMDpnk2839PGFMcwAs4xkPQ4mnoPBiRpjFJQ2CzdRqJQ4aeFGyD",
  "key28": "5bvGvu8vhnPgAhuxUeD5oZFzHajiBuk7wqy9Z6cG3hhKYoUA9pCb6PHujf4QbmFqbkiofSddUJXevyqCaXxMb5mj",
  "key29": "2j7zKvkkHLQvjSzLTCDK1FCh5ecJNeiBoGBr9nw6Jdq5KZZGhaG9MdU4b4BUAjVwQxrzqHHQYYTMuTR989dp57gT",
  "key30": "5Fn3mtx3RSy7UZ1sr4sHNKZMvEs1f9bFcj22on1mEierAayHFrQgaDoLHYPkECkjVHG22LRf4SwzX47mnxXbiUBU",
  "key31": "26fTPFcx2AVad1yGKTiTqGLRZAZ3uN5va6YBFkcXH4V4KeGpA7uEizUbDv99XCrCkPTQkghr99KVqzmfo8rqPzC7",
  "key32": "2j9xx68XcdqQhzwsPLRbPt6Xz3yokdcTZv5n1bWU8J7fbXfJhTCpsXDYUyhWTxEGKSWoRNHgNkVm6jwu7cRF1FTL",
  "key33": "2afqUxHrbrHtH2WDtG9JsAdwHqZXGtMMGKYHk2AGWyn7iFU9kxhULRH9s3YHzVvFfkmdM2jTCCJwpmVTtPYA1SML",
  "key34": "51hEfksqsnN98D3XDunJTpPNb8Mm7s3Vc2Jvcm5z3StAY2KVTp6BfF6AAGdWBiePsCDmP9SmmnBRm1rywS2EpRb2",
  "key35": "3bq732GJZFA8yuhVoPs6kByr4AKXuZNWrZkHKsd1E22n9FoGtCC47THGK6LQE2dXoC1itiXxCyJrjwu73pviWxED",
  "key36": "4RJ3MUS72KVqMMJw9ZcyhXuWHxzDftmsaoTzWo26xi2ksrPDLVRctZeHMJ1Fb2Ej6ij8FQY3RcXwZxZsqsTHhtew",
  "key37": "23DTGGh76QGj5pnXRrGQ3ZzR3cGdUGsdRXBiYMVWyc2aLNh9WpFsRDmSLSXFzcy6SEYjd8jXJsyKnxttgeeDxsaE",
  "key38": "47bU4m3C7oUARte85vv7U38M3AGugeFvyi9uRY9jPULpScJhjiXQVKnhY8NGmupTvuKUQ3SrgfCJgwDBke3UBa2r",
  "key39": "65CeurpWmwKyHTPYDTfgyT4yu4eekE8mKwwFN6MoSY9RUHZXYP31zdu7d5fkq8cpKWUB1M542oNd3KW9VVj8jTwp",
  "key40": "3jvLRe1tjpKdtfpwzfmJpjos2Pw3wg1Mx6gbceKRW1h2qZZ98aizbePTnNPrsSuGNAeeVEYFxmUXtEsLhFgL1cM5",
  "key41": "4HMMjXygVyihXMzSH1bef93vN6CAAJk9c49x9fY2gn7GiJLUJhUQUzVUUNXhrT9fUyZWnZ7skNis1PWCGeEDvkHZ",
  "key42": "iL7W6LuXsdMu9jHBnS3vgsoUcBCav5n5HV8UXZwFNwMYUmABDLWaTur2mhp5jsynLWPFkbydgxCbUDyGCdDNJ2k",
  "key43": "2kmCJjnv5Shq7W5yoRvynuPBL9NeihgbPeocxWvpeP534YD3oF8HQ4CGrpuTJfDzjbPX7RfZtUft4gzcCz2Eugd5",
  "key44": "3N4X2JvCX5rxuftVPMNbstbZAPtT3UJHdJ8YF6hhctXja5kHVPsjQHcD6UfAWXjn3XfZSEwW3qvpRjifypLJM8dA",
  "key45": "2Ypv2xwDxNBffFqF9p2acg9b5bm99mQpQNa2ebjZbkFqu9cC9kUtEYj2VXBn2jTLF2Ppp879QdL5mLPmSckwvQdi",
  "key46": "pdadEBjBrMQ5VGVAZQwiJH1XnGY25qoXXYPZ668oVqWnBGS6CbmQU71KTsm6b6zpFuvYuHsNouY2tumY7kTBdmb",
  "key47": "4y5kREcNsroPXHwMxQJWC2uG7QMqZEPiKt9fCXDzXjNVcdmZk2GnDNBEH8j5pM28o4xEc4ENqUAcht8pFtDmyWEn",
  "key48": "31ttJkrrj1UJQ7bGFt28EU6WWEwPMTRajK6p3ojLH1Ys3pdMtJ9WC2Zys99eEAsY8YU2ydvv1vrSp35JeBUMntLw"
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
