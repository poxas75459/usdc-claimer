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
    "2EAYVuyei5JA5C7Rk5wW6tmrB4jQdrGP8z4f2zSUhmwUpD6ZsGCh8Dk52qL334qCV1LFFMtGTfJFf4WvrgtvLLBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DXgmHuimAk9fmMcsfZ1V4YtBk98G8T7Ki5FFLavHL3A6pkGG97scvdALMbdto4NiReLeLu6GLryVGDxvCeohJDc",
  "key1": "51comUQ72RWSDxoEwuTkKVncf9Q23ETphfufFw92WDREWj9QDosh88qmBLyLKTHGjraaK41apRqEVkvH4Cm3hgCv",
  "key2": "3qBkAL4LmkGD7KVTGoSQpEG2bLKm4ssmBJZGsnfsc3Wqg9NR9Wd68GUx9xcJrfwsRqo8BWCZt5kVj7x7RyCy6zGa",
  "key3": "34D14wKFRDzSLwgQz14gSX99NEuWN7eYfEmgrGHQZTd7BpHjKGeMniYxsdJA2xXuTHrd53chz6owM8ad6xc46cdJ",
  "key4": "3varbkMy98ia3HHmrjz21zU8pouprPG8FDoqEVE36QknkuVigd2P84poXoKGUP57SVmEY4VPPpCUPGtRi4atCrFR",
  "key5": "3ezD9YFDRSUjTUa1Wn18D11h7tmgfpzgxrnBaMRwrRcBb6YA4UvTh2P97xWgKbadSRk5SBwGR2kB1TeLrxS7DT98",
  "key6": "5oPWjUAgppPJKCd1KdhCREDGCTUGEYmNfrX9BCeanWLy1sgBbVGtF7DPUXN7sVHRJPsKAi3x2wSQ9nzq2MgYKMnP",
  "key7": "4ccBeEg4SMaitLMc4NSYkPGy7XuqdHnFdAEcp3JPacYQ67PfZHYaDd5qJc72Jh8skGtG1mJ21xBUbzJ3HBnsXXL6",
  "key8": "2mjZiJ8pQWnhjMFaVAdKJ2PpqTXgARSWk2pSKXWGtm7uaEepRunxfYKrqCVKvTwSqmiVsE7hrCT62aTaD6vpfmYA",
  "key9": "zwvit8oXYUrYUN8FrkQM3LsEE5Pxd1kNvZQ5HX8zXM5LZa1Gb35e95LRdjd4Mq646ZSpw3aVq6ERntE9erodkRr",
  "key10": "2eoiWd2KqXMviCshzF58VMremJT2rLtEqrYu8kKkRvhd9fyjrT42wJzzfwQrdKvweFNBGoNkKivCmh8gQmAM6LRc",
  "key11": "4nqheASdoBRvnohDHX1PL8RJ6TUsncGpe271rhVbm5ncQnG86NaQ3B2aBb1MBja4GTaBhdQwjwsvyagENa3EqVcw",
  "key12": "3X6TX4hzQjX36kh5AVJh7SLXWijoDpVG11MBe3NCbFmso6b4mX3Vjp49XxC8esRee6xFDr9BpwXK7Z2MTAAiZxzg",
  "key13": "3Smt4FyJspnWmrK6meqN73TFLxnutz9H8tVD4Gt9UxjpNMKYFKhAfBDHrNPQYq3ScCurn9Cg1iAj3vc1yRQX8pDu",
  "key14": "4avaq5v982fGLgMFtgz3Wd2fiYeKDJww7d6YMDrCAVPjcoDt5shn9M4tMaZUB7EuJrdJToiT8oVn58LU4Me4ega2",
  "key15": "PQYskf1JurcNhJGkg76e761f43Ty6N9fpEEnqbGL2X6izfUSkxaVVK1XfNjdfLQw6kL6ngmmp6eJEviNsyLexxt",
  "key16": "4pPcuH6bzePjQo8wbVpxX8NeY8k36zLjbELKgdKVmbowoatVnPeYUQoHujg7UjTtjjzrvnH7MC9rztbrPe47hyq3",
  "key17": "4GKFQZnBCUiwUXL5RMiQArVDj8FTHXc46Pam8wdP3fYD3QTLZ66Uo4PqxTnoM8oc819dchNGoukxqiG7c7rQiaQM",
  "key18": "3pPw8LWRASN6gurqhdh8mGFf7PLBKQpwX5oM2FTzeLdCuNejZZEfTUeGQ2dCP2Jn63StukyUmyAGR8HtHBVcdLyz",
  "key19": "4V7v5ubCQ9satvN7EpZVpJDKYBKyS9XwEs8TNGNcisdmrmSHLv1WsaQgNasroaNzPEr43BEWbhTVPgqpQYUqBTws",
  "key20": "obU3qE959i93Q2eTc3TmTJveyWjAcnss8FKWbvt8zCRjE1AcC7tdpGKT3DugyeJJiZKpyDsbkzsPzWjeJBSZa6p",
  "key21": "8BKncWd9fSSorUi4DjJZXSjVh1jAZNeESjnbaXi4tX3pBnMhWU9ngP8DjyAb3YaWrpzZnVW1PJXZdKHcjZnTGWR",
  "key22": "9CAP76gZDbNgC5BQUjcsM2ZcC4S5FjKwRyV87Havy7WgEmMS1dYa2UB6jwgNniUC5yTMjBhRhBRWRCJBRmUGat8",
  "key23": "3vPGLJRPVsMJY4fvD6mGLZpKuLR7JNz2Y2m2MPgGPMr9xrRzE9f1RpwrfZ3DvtqQQbrVTe7NZB8wGWnsudmUP4iz",
  "key24": "4WQfyFvgq3xvwFFq5LDvzsgUFPzN7nBgXRDsU1hGLxm1GqXmqQisDwNbNVpcUfXjcEtFFsvLNY3R57Tj1DpMvZGu",
  "key25": "5FBh9gEEsjM9piDsA5K2c6GtV67TLNi2hRVd4gFDGjApiqgJ7XwqtgkG8CA6WoyuGgPiRvkv556BQUxyT3SfuGpV",
  "key26": "ney5xjGMxaVwswvuzCZwZkjsCyteKb2pLguz8MNQf1hPD5XQyM4XX4qUx54GfSUVChZCFAsd2XUBfp3yPaURAs2",
  "key27": "2979giqxEaVUvPPLV3y37TCJtwSmcr47FJ5FJ9rFnKAqLa4DPfzUfr3RdXTSSxzf1PkonAURXr1Uq4pYt6MFuvh6",
  "key28": "5BBefUz1BdVcQbQDdanQRAanWJi83b9uD7YoTEsn6gbRRDcbd7jw6ZvSfdewi7qv4aRUMWG9zh4riejXtw7Xo84f",
  "key29": "36tQXKfvELfW2zpjCKSUDXVdFP9QPQHNFW3YGUZiYdpJfDTRLHo4BzX2iESJu8ih7oV8U61ahMHSvG3XTpqUzQyz",
  "key30": "3U5wcNcUPT1ByEkL53AbKy8aok2NE1i9oDosRoqJiZPuSvk15akQ4p8AAeCsVaAzqWfJbDDKpcg5dTBhBKZd44cn",
  "key31": "5BNSaZBqRwyfw5uDJhB4ZggwmSW4UmUFUY9okGHvD9V9VprjZKDPueosuZESbQ9t1zrrebzMiSxvRyfkTpLuxjGe",
  "key32": "5j19BnSaAs6DGuXcKguyYssYxhXQLPfXLgEfaa6G3Xp4HdZysVXwaffKfM9x8i39fwzRT7vX6nUUcyrdfzzLKPT4",
  "key33": "2pqKCHAj1oUkfLBpkwxq69uA3NtdjJrNEpYzeppqN2w2zM4vwdh4T95XmmAZ7FukbwTeaCJ5PtmrMk7LyBqPbeh9",
  "key34": "45jaLsE4C2V3ck6GnWLynrtdVWQcPp9GhcV64DXZGJU289aAb5JJTeeb95HrdLJ2HSjjXnzHGVuZ6gQh61uCdXGp",
  "key35": "2Us69tnHQaQiq1iEGzMnYPUXMv2eBahQMNwTyBv9qrLfk3AtgSBoJDS7nBZAeXVJTK8toXorHRQfX924wenBU4bi",
  "key36": "5tijsxBVNQ7pDcgxogjMqV2dxXkm2QrxqvamEKJpokEc2mxHzvVnkX2o1SmnHuW3UYw8hCAn9TPdUG9tumm8K1da",
  "key37": "2oGBMG8rFvAPdjZ3KcHxmB7ZpNjh8UeyNuzGLumL2AAvX169sKPCvd2joFRKoJFsaA9EFDnjUJaY54WKbqrmvjiw"
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
