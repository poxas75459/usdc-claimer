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
    "7VpT7nWiymkVq5kee2knfs2hAwYvSNWYyJtzxAgzhcNaqapeKehM3ye1jRyvBjfVP5qZeRQZwaGK2M97CB9VTk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHjgf9F3cNmFCt2fD97UHacbcDdhGeebCv2fL6cZaF9GNSL9ketP2aPLnMSM8fhLt5Ec4ua6vdRZ1CPAa9pSN5e",
  "key1": "394kwaxPjt7snb8iE6D7D4G9SwZKudZcRsaF9rE92gf5aKiNVEnbP568VG6rifQRLpNQexjVomJTnBT4BCC2yL5h",
  "key2": "2nT5cXNEwTAGE6RQacobHQVMu2gVBiMr2tdZfAA1NoXH85pMwnJMd8B5hphX4fGMAhguLT9QAAQvzAyK6RD1jbfA",
  "key3": "3iHB1Wj59UpjHP2sCBXo3YAun6ZDADqDsVXZDAofZk9EQ8ubgWLm5mt5CFNpGrjJNusMdRav1m3RDsf9nTm31Wcm",
  "key4": "2aXiFHmVHLy1LuRPVZc28GkH3kkrYfb5HnHyWXhqpZwSQEDvwDDRAEKGafaq7jnEXioPsRKqBqzPyCtSZ1DKf1qY",
  "key5": "3jT7eELgDHmZc9c6gUA3WZi7U12pFvh1vZNGLChw3NJXfLTnE47ynvmLwZzirC8FmhfG8bdq9vhvYQJkra4gpGWT",
  "key6": "2Pm1sGMeRG62MJXJphnewWoApqGELjSdni8pCpTSRdjWRDbbfdXScdR1UATSBTVYDiE5Cw2zwZjWrtrcQjEqYUhY",
  "key7": "weYK4t1eeNhqccobmq8pCfBn9QJpuqak5AzcXnLCNqWjAmgSqgpQso98Uku8VmrT1xxxX3f9NZVskkooyLF2DZL",
  "key8": "4YirhG1u22houyK7az6Mxr6yoZeWQCUpEKUZhuyChBHtcUXW18LZQJzb9q3GRDXfxxuv9nuLVCpMqF5x988TwDFG",
  "key9": "4aUJgZ8sCKvzd6eJur1yxagzkwU423ghJm5vjo7dBP15SKq6xKDaHcMnXH52HY3aXSFwpCmJCRjTBHfdSfBEbofq",
  "key10": "2JKHtmqdGdDKrzFfza1AY98bLKsMwotNRR2uEXdjw5CKq7sUKJCCenEGnJVetC6hZXocAouCovqhe14evXsRoJWU",
  "key11": "4iwpPHJUGG9RY26GZFutxzH2i7eHvwfCSaLh9NTzmLCeY7S9hArJD1nZSoyERdn3e5G3wXcqrbw4XYZRyy6qwfjo",
  "key12": "4PEFUXSBAEN9rd3JCmHyCJKdNqdWyDRmnvnUmLgNs2oocBCTev7R2XEn9sS9SjRm3W9coGfmsTRrfsaNGzpUpD4q",
  "key13": "67SiC5djsmYN4pXDfokYY2qKcAB56pXsfRhFJXhytGdHU6DntUgnfYksgjEegcCQrnWYLjA2YtVCNYoFLJ7iu1RG",
  "key14": "5MfqzdTCwojTP7aFAKoGijzXfpjb6BMZFjrRPXPyDeKiwF3oCsvLnHxtutDQBYPiBJNkoWf4AWFwR7xUrLKssoX7",
  "key15": "5FPhdLL5maiftSZVtgxsvWPK5yNuqJKYLpjv6gH6sNHFKJvqTiPJog6wP9MyVYTHbYuq68w6KgUojiqbGQ1qNwXW",
  "key16": "4Qh7oRtBHBXpcDFjPYigSB6eq8yAM8uNggPSSZNv14tXsfrDAapXuRTSq6je9G2jqAtmDTSx8ASY1HiDSRL8uAQp",
  "key17": "31bpVYpiEQecakDTx8LDznRiUaA2ndscvWvc8pGkpXSR8dp1KaBw7zrMrJYQwUNfaVkYNvx6ibscP3Rs82ZZ4nQ",
  "key18": "42FqLPt2ScEfvpTe5rv6yyBKDGAnYJWjdoBPMzME6U5JgVAx3vk3mJs5KMG9SZzVp1gkEUmcZywNFpZZRsBgJ4Ge",
  "key19": "MQUUG1JwtPnWSJ3ENB9T1UbVyxCHF3WGsQi33FHFvJvogBHCzFBz1NTvY8jjHudxyjF1xmQdMrYgJaowsLWzpkz",
  "key20": "31d84kycGyed6zBe2SVBviQfoP44i8R1sCbYQ6gVo8s2dcddCpG6C8Y6jDrXJjKJY3rqMePaqB1LnrRGotTyqMMZ",
  "key21": "5KuJvqoZk1GvSs96mNKZsmx2JVrThXG4vPS9nhjJ97zqPEmBs6dVpxBPrKB6pnU4qJZv9FMQxQaLexiqTM1is8u",
  "key22": "4EgJmqZvcz7Aqrh1kYQGmvy54XFWNKd6GDhuSSs2aZ1MEMPpj8Z54W7b8ekPpf4M7yHSdNBGzkh3vBLoh9bdUHkR",
  "key23": "4Kwu95YkWM9Jt49uonZE14EeHPYMb7aC2uJuvZWqv4pZS3cXx4Bi5cYR2N8VeAzutRz45YXSyxmWtUwpmhmvNnAA",
  "key24": "dQiw2R6e3q7WWfB6pQoWtyDxcyr499jhz2d87D4Ucsrds2TJ6qzpmP5WCZEdmTA5uVJe3B6oYWnYsrWfHT3Qog8",
  "key25": "3nZgTQhRHFjCVNzyBhMTzsH3B2GFZNyqxwWUpk9xSVWmYyu35VD7GvjXa3xoAHytmma7ky2MLGm2XBHKryxiXF6d",
  "key26": "4S7RFN5i4evi8BS8ue96YMhHhNcRuytP4UbssYNow22QxkyqYD3ha89um56KTXuaHEkqgjzcCDC99SKmnyWG4sLY",
  "key27": "5gQ7WKtC83KsFUFciWfkrudk3cLQ6THNnzsDkdDcXdkkeEd1sai4fg74khuyHFfyAezuJg6BBDr41uimudRS4gLf",
  "key28": "2Ek1pwhCcskU6qRVFcZyjw3mFNJT987UoT7JxCtjXTP5U8tnKSmV9Kv2cekVzMNQVGfjxKyGk2vvhBbzhss4G5yA",
  "key29": "5D8vHU9TsrL2QEiQPrdi8YVENhb4xHkSYLnFchNdRXJWtJ54fqgeNBQVNYFVVnkBC6tY9gBJd2kmk5BzyPhPemBV",
  "key30": "4eXRE2NaSS1RWY3H3XyGEusTzrCtgRZw7ki2pM2XfEGaSHBxRvZiQuiQBMXT8uGwRHGbAfMuwAMF6A72gakmHMv3",
  "key31": "o4v7Bfof8YTuiH4dPKi6VRS6k5uvKXYEH4dW3gLdeSQAphpyyEN8VQ1hFkz3eoNFpQ89v5fkVYRWhWQcg7Rsii9",
  "key32": "4H877ctCWED5sTzi2aPKxWRgPNTW2AkDn41ECmCsG4RW1cESjvcUpvLm719YDoaXrRvyr1TRgJ2cYyAWyh66iAXk",
  "key33": "32wzaQ2zoVCDhenjKq7exEZb2y66daSELiAYAsLmzGEMwo6xkUAgKERHstiBQ93bLdH3XhD7qb41AYSMN8qLUeeQ",
  "key34": "6WgAVSJeb5FWjydkUzjzzANpJt3H1V6jwpHJmZ3bkRv1FeLRXQi8otWnN5EGafPsbYqnUkjmv1DxYXLXoVihpBs",
  "key35": "4svTsgkw5q9FhbGM8gzPnPWFqV9mk18fL9mv3M4HfT3oRk1nFaq9u3oMJc2gAQg4wRAdo1cYhz118E3KVGWhuHPJ",
  "key36": "BekzskUbzqviak6cq4MYZywt4TGBwhdC5DNJQMga1Wh16ASVomrqvPnmKAf3hEyTP8CqdrvrgfgnLyWeGtRSYMg",
  "key37": "44icuYtMsVM3qejF8BRpggz2KvxCBVTSL2BpUMDpTbk5dopZ6NKMXqgbbYAFcs3ArkNSb1bhYLCD25XjFYguPZB8",
  "key38": "3UqpErsZQaGCtugNG9tKr4RHi6wMmqCAdvBggzXXC8S9w19xTSU78Xn8rxmWPAxVvFLXBwNTkpCUFbP7ZFpzkH2",
  "key39": "4dUBXWMU6jiQYqg1LqG2S9S8itcWgYLUPGAaiR7C5dWDAv4KBBR3g4aFQFJ7hm7BXqM4EPaYb9U2JtkKFvkXPP6b",
  "key40": "3iHZAxoNkfcQiSsxE4iNPgGKsPdpAggRHUdW9KENDwSNbYw9Vwgbtz9JzhkkybJaB6j8tFNcLPiZWteoCHTPShh5",
  "key41": "3N3SNHQZo29AhwazUUKjGFxdR1REBnLpVe1hDKzQNVXo6f9JC9eUwRY4nHDXARCX27PGrWU9t547JEsnPYsYPMcx",
  "key42": "4ATZYmjJRwf1b8rt63QCqem1fMoC8yUGy967Zdp968yLQydcfhSb7W7nJiv55hym7RzHLAznQMnS4eEiT7LV4EDB",
  "key43": "3M1Xay4qbB1UUVL2XY9YwctjN3Sw87uo5AVE2N74YUww6NHf5FEZXYjtB1U48wMj2kRTPSC8nCCesknb5P5mJw4Z",
  "key44": "4bEVxdadcUonZx2kzKZEmCXAzXC7hLLDpHy2hHUtTjuQp7t2AKBwTeu6qcugjDRFkTLZ4uFZPRgxBdN7FBe8Fdf5",
  "key45": "66BSdN4SceA6bjJQ8njW8U3tZ4HZAmd2ZAdyWZf4Qs55839iL1HJBWkEQPUkZMagynUw8YXnM8fM66AMqjL5oPgJ",
  "key46": "4rfaaAwG7EKScxEw5tCgJgyiHSMEVvzf9NWQaaYUvKkKfMfvqabKNTtGA2YYBknFVTBMiHnGF1B5ekRidduDn5G8",
  "key47": "5zDHMGmBQNXgGobYGfpYcLmZvwYTGBpgwqfCvXLgJ7oyhg9KCWwuPJwiHdHdtLaT9D4H7P4Cj9uTWAVQK63djDd2",
  "key48": "3eyBS8yNZvPn2CZoMeUWNirxs8Hve92NGfHboor6KBu5gVVQbJ11gMw51UiJCgM4X7bdCExMUay2BFCPdUZkw1ZG"
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
