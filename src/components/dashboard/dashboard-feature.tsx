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
    "Pmg9H3gNQmdjAy64jH25WDKMpctk7m4NEMGT2cya7tX7j352sHuZQQbJNKepwQnLWGHWPx7WoHbySBbxJ4SkGNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tTzm9H14i5oZ28hGy57zsCs7S3iWmQVc82VPcjFdLtfY4T8vTHGMAMMLSjfLpYLS58n1bDWtmTYVmgEM6tUiqDS",
  "key1": "4defd7bmMyzGuLictmj42L3Du3shvhvheooVE7Uj2qVm2vgrhHRXErbuSpo64TJmZtm6HoYyoAi8TowQ2SyzZXtQ",
  "key2": "2zNAXcEwBmEo7tZpiWT4hjdqtqAWieTbvsq5GGdwNKVxSA3mkru4PDvqrzE59PW7NU355RNuXzak56VdrcYDPSmX",
  "key3": "5B1sNS6S32NjsWE3j9QBbCvfFVuaCp3vNxAjsus2DqF3n8bPfHw5XBh5yDaJyrPDM1KaUJmHJMGh1wWn2RwCSGgL",
  "key4": "3ZgwDHqDhjfNk8pmCo363hFLsAJDgp6EzkD4KxeSJVxo8n1fmVpToLRCmf5swMsb4Zwb7CM4QfFD9gb6ZmfzhQXJ",
  "key5": "bSeRviMZ2UiUCeu7DjF2F7dCqpdtsaTJhLrup8B9kiPSYYoNLkp9yQ5k7QJNEt5ipPksjHkhwE5xayL5mGuawGX",
  "key6": "2Cjo9Zpj5BaD7LrETy3NMBZbQQu1mK6Pm638Yty4vkihubo9amrxtHmrYxRBbbdwANf2UDKcmtQgDTdDeEqDARF9",
  "key7": "4jhLXoEk5C8jezTQveAMH3kmMeqMx5CFSQu3F3hbWbvX9NPJKhWixHvNXGegseS9ypqU9hxh6mphHstWXER8P3Xu",
  "key8": "2ywyeADe1GPMDJ1YxZvPboLqEXsvD94kThwbJBAP2UvbpHV3F6eo39dPPzjiciEiRUrZwnp6Qw6LgZxmtjPpaKYY",
  "key9": "8bKP7WZqtbAKxJGPzRDGbQNqgSfbSyJGXjrkWFgdCFLfeMThPMf93RQWe27pegPjXsVcYKzh8ad2vmFtckrQkDq",
  "key10": "3QRmR9S9Xqsao6hgxLioQWsPAA6yMDhWgeQXeAAymq2fT6r5o5Vdtqix6xxTroCbiDFZAz49L3xfwFiDzbeXBB9Z",
  "key11": "35XAAX1sX2aaw3SiPChuZfrznfxNreCotLrB5gFsRUjdgpnKbAptqdEstLuaJAXVpXgpoqyJxhhjbMzbvR2vc9n3",
  "key12": "5q911XCXvKDmpiu4yAMovJvromncdQ2g5AJKapco9BSX1oUKDYFqVFEvzgPQMTD42dsbmYqp8KNxZW4FEbNz7DdR",
  "key13": "5TgCszbdoRSWFWmru9aXN1C9SqTBYMbofK4mpBdtxXs7mLDDhLXP9cgaDhsc5djQ7vcZ6H9U4bB567cKs1nTJNhL",
  "key14": "5v1ZR2sUW54UHwBgZs7mRXP2jdFJNErADQLacbrLN4pE3Xg91khQAWjvBsVTArZVAHUsUahrRgJZBZMaDJPG2Gq5",
  "key15": "eaL9WVAC9siL7NWqzvtZpkme3miUtqGiEHZyp3n7UUJc12qG65k93XBfLN1QukrfxFr85ucAucN48YjYu4DQeoF",
  "key16": "3buAhXHyXiNku7vukDrGSyAw5Mb2yh1aZdmwTYxB52qCcv3wJAig7rJhnctp1DUxeb68bVXtTzYndFiK3UCa8haJ",
  "key17": "61kpWR58CRrPgTvP2StM6Au2KGDHbvQxkYVCe2QMS9t8ihk2kcSQWeS3WrDvj7G6AB8p2TwrRpGMb3RsaCyWDwFR",
  "key18": "4DwHS4qM53x1WAh3F1MqzpfPVXLqwxFG6nQwfu5tjWxo4QsiGzuxfCJTvth1Sx6ULZTVpnXoByL5zLj8R5ynDQGk",
  "key19": "5whPZkD4juuwztZvr8FTcxQrXCA6C1nZMKGorm5A6c5moEa7DYojj5FXE3UCnbodtAHFFaQpPvve14DSgK8NbeAf",
  "key20": "3N1RyA3LKhKnFiAyeybmj9TYAvQct6bEVZyakC6avaMABe6jM1RCJP7WbmLERpp2nRS9chGgvMKrYJKSBmR9Po1j",
  "key21": "63h8LJ8BCNnmcqzGzVdG3zJjAameGbkgzAt5AAte2V2gQpHvA4T2mM26uMKyhj7UF36b52JH2ADgfpy6HcR74exo",
  "key22": "59Bar37tEmM38JssNaeVdDZbccFQLQDMVwjijtkJxprsueCcMesALxHmXkahTqNitBXEDFqzfUDfByzHDAK5ebq4",
  "key23": "63gKxoE9H2wAaqq8UPMUM7nwu7MjPvW48cyXtRknMizn48H6kGNp6ZRPhbqNAFKRep62CajW759ps3dAATa2N123",
  "key24": "3cymjFhzxEApn4TupheZA82t4uZZvUnEX64j684WgE2wZy5HYtPsJNJejejfsrV6nxEkhsqMuWhWqcPGsknUoDje",
  "key25": "gZQybEnbnJUCh91PfJKh8kHAaJAugRoAJ2jSwBdECbPHWZMAiGRgFX8aL9DcySKgLgPozMfE3x5JyxzPzHH7iWJ",
  "key26": "2fnkZSWayWRBggPzbNQn5cFXW5Du23ZQFUekt7mKSwG5wb8pJjKcxmBcifMcg4UNfWp1VByL7UJ5DRybu1UUrqo3",
  "key27": "5ARSZmJKps6DMeoDzTPGS3sp4s8WgsJS9RxUe78Kj7TtdkvPYnUwdV6YNTpumQPoswGa9kE39y2mrje9wDtVunZd",
  "key28": "2V91Fq6oqsGugXYSbpxuxB3fax4kQxXvTxdU3p8DkU567LJQanHGetF3esTjv42t24uSpEp9hLeRNTTD9Cm1ApRd",
  "key29": "45ALpuDAs7umWEMi1W1mHiaWAm6hLA2vTpi3Hmig1Zybj2Urw6SehD8vEY4sYu55DfgT1t7iLycrPTnSAUjDcxUM",
  "key30": "5uXUkTcVkqW7dYwcx8hxB1ohaqMgfiQxyKth6NEBBLM1PXVMMmMw3bsYmuBP3HS3HTbC8iQ85FVLxQoMQMYmEhuc",
  "key31": "46NG1N4mUtVfB2s5joe32GVfKfurKQD7gxHnKc56auWiruy1pqJmMe2Ahtt5SRxWcUkhpjQL3AxM2e6JBtMWFmn",
  "key32": "5K1bq3ECa2bDdEz3PqNbkqYs87EcKvYPv3ujwfrcTZ4LukB5tYnhtN1H48ewe1Wb7o6GvrNrJbv8cqoafqVW3EfT",
  "key33": "4tMZdNnpcERdhwf19ZhEmsHUMYtF1Ptr35ja7am4sXLphLkA3kpDR9AmSZAh7L4L8jdBX1DMZyXQLvwEwe6YdM5u",
  "key34": "4ng74JcjrCo6gzpEDCcn4SDScobYyyXZRaNznCcXyYatdCKsANEiL51cBbMmp2VaVAdfBDBTP8A3gyurKDg1GsGd",
  "key35": "4Ys78iSvcQFwL8JEixr8hv7ZNZGASWTV3ybayqoQXDCU9nNQ4z5WJ23d7LyKciuJpwrTVr9XREDpCL7JZdQcNB2W",
  "key36": "3DYRUYskDnbJQbmhLA79hWU5zxn56ETA8RXNb8GBbPFrbcmcLvwoGyvkuS2c7q5tBrjghh9pPcJgzKh4D4MutJWo",
  "key37": "3LB5zaMWnRxu6LkDasP9JBHKK7L73gLT51rkociHHFZbJ8zBNSDyk6y6JrQxHzguB6vZLy64ifRnyr74aaKcf9oX",
  "key38": "5wULRvLRKnWdLU1tBzgEimbKHhHTJrGamWJ2bx51Tht1nhCkzRD8PcmTaPxJrW2oWc4UuczeshFgfFoDJtjx3Sxd",
  "key39": "3vuJSUnxaJeiYyeZmJPSivH9GrgthjBNcsgcg2Xf6PABct2jEh26JDtJ7TTky9ZnxJLFaqdcZ5QCbdu3svDnKUb5",
  "key40": "4J12n8mKLfqYeP37Eb8GcdgPMnwpqWU8RM2jp8BbXQu75dPMRjNj7wgz9761nqg5GyNzSe3rxVeTR3Fvw9DZcK4x",
  "key41": "vccABEooVafQhNG9k9Z8zAz1iB7oK56Ls91NbNLurN9zto8S6Ziz5cysXDkBgfSG56xAbFpFALdFdZWcWUoeJtS",
  "key42": "2PE2b9oVnQtYdyG3itEZGurVNkxCuQ7TK4QrHSDn5Qw1tyJdbkQcnLUoWBLCzRoWSKwq4Lby1igJEYirhE6tb8a6",
  "key43": "47cUG72KfuNSFCUhXTWmQTW5kmUrkwKsjsesYirMPHHB3gcBTwXBT5FWwfMLZcm1EECieX5RHejjytEsPeqURtuA",
  "key44": "3TkKUaA6Cd6DVfsXhRMGd47sRttPyELq37RLkzq48cF7KyiPwEQ8cnMaYdS8narMpTVWVipFD21TBimavcaXtUbs",
  "key45": "2nctgpLsjYnzz4GFDMu98nzvy3NEt5mhqKLMDPEefEvp5FFJLUZyxMPPktZ28G4AgmYUW1rWzPUsceAhEFSNSVG5",
  "key46": "3w1BQ91noi63Yqr1qij5iZ3bPPAgZtZCKfaWuJHFtxPoJEqLVbJxSE273go4sMpUkmht9j6sviVCkoeFSuuUFr7R",
  "key47": "5ruP6sJHG8TmH55zA5Mz77L8kapQRCSRUwF2Me6adzck2JVpfK4hdC7Ubf8Zw6mhwbQGXAAgWgLoM1dd9u7z1ytu",
  "key48": "66qNR5iQS7wnwzXzfxN2No7YeBbnGRsBPVCDruPSfxJbFAXUCH13GZ1cDYTGJb9xnDuUTGNXgGPF1PGMqRQPe4zF",
  "key49": "4bnrSqn7HQ4adQLeTWQBPzxdqKKFej3aNM1HcRJ1Nve6vM4j9GSRrkxJBqtwfGnkLAn3bihmb1UQdnw1BfgHddE7"
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
