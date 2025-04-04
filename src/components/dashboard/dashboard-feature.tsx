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
    "3h5Nky8MWQDMViAzneFudiJhy3phASY2Jk9XvyvGhb29iX4tJC4RbgW2mEzFrfzWPeWBTj2Be4E9Mok2ZrTPu5e8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tfAfS6vkh93Nowc7yW9aRhCeXgvz54kG7iei1vLVBwPHFMU9MgMpCw2WWn6AWGhZHG4UmVXHNbcczk71EuTtFox",
  "key1": "4oJrnuJR65vN1MZJFwwpv6oZ8LMXN1TRGG32YzC9dPFuXmzLrV3FPiqfUK4bf4KG8SoWve886GASYbrZ6VYAaVmU",
  "key2": "25AMaEAM5xH315SGMZ6am2MMp2ZyiemgMUimoJQqdJuEmzqdYqBBAeR13uxR6rarEtMxKBe8tt77apcGshuZBnpq",
  "key3": "3QcyazquAKWbgvX22pBv4ci7YS1cAc989qfxgkYopxiuPg4EnpJLXMnLsDXtSWJ5GbQPwAEMJZampW8XrjoT8wmA",
  "key4": "2i6JVyrpv7iFFtywX9wG6ynKJ86Uey64ZKwQzRYMj3pdJLZpGwTX9rjTeuek3FGUWP1KDzHSCLGh2DhLAHjmTZmM",
  "key5": "1XaRhnZNvmTYHxSuL8FNDtYUvtpBeXAACbfJ7g2nZfn9gA3jy37FtvtpcNkCvNqBdxSvtSEznbDJ31BTcPDSZrk",
  "key6": "wRGiR433squkzAUH2rQxhj4SEYLCBW7jf3SwQXd14Lr7BLuYWuwTw774KFaFyP9N27r6eAhxWsGcfr13T6tNTa6",
  "key7": "324PsWs8uYjEH5mXDnu7hKVjEkPXVi9eNkmMyffMafqym7LrozEbT81dUe83vC6nzzc5D2nyjYvk8y1MnfWS81Dg",
  "key8": "4bWUS3xcNKiQYd7rNdMvVqKRNB4NNcxsXC5tkbhMvZcCXwCynHfqAC5SWD9p3Pjceuu4ebDDxUedx1MP71qAjFT3",
  "key9": "438M7B9qjhkQs1xtdmneJLDUwJ8x2BhgqX4sSAsvhXM1UddcEgnrBomPF3AdfFnesmw6WnCoxNescmAB7navP13y",
  "key10": "4BsBiZbwPRDCD8JEv2R3kayqd3WxcKikP5dogHMAf4BXsAQpJQTong1vUrorT1wfuhqSRZT9pq2ddDzGSBAbqHqj",
  "key11": "5iMsDMUmdC2pNz8jafLmcU4DtskYjJNK5NQh69NxYP2qbCV1CBBzttBzydstYzUTk2ZsGav2XReAHfrF7cRMNf5E",
  "key12": "xv53TGbrTdnaU96uWDucE5ACzbyAbxzS6Q5cpJgoGUAnrEcaExQ1U31YzvRKyfQF6JtTVD9xVUVJvvBzvTFLjvk",
  "key13": "3NghEgc2tCJ8D3mhbMiMZSdcooSmHJ29yXyw6Vy9BrmNYpaVLSXzdjrZFZ6aTv95zGfTcfnnQ6iA8zaV9LD58wE7",
  "key14": "3ouBDtg15BuTfgHZqxvzSdNzaa1DRxD2n2c6Rrk7W5p1s6B1Kesu7xk1jKbnqk9e1G15ZsLv9PQKVka53uKvp7vp",
  "key15": "4oqzuwaPyuiaqFFZuLsjj1QZtRnGXYZCyDbH6biRu1JBFBARU2WP2FBs7y3hBLEcEVwEK3iS3crxBQN45ZP8JnRS",
  "key16": "614ZYCwQXarrdA7cbF2ob2EoF6TV6Tvd61uSDiCWuEPa46HB2R5EWs1JDbqiZvAHLTFgENFKTZokd1kN8iZLVQ6S",
  "key17": "5ctzaaAKQegEau7xSUf5RsgKEEtGrEgwq5f5t2yitgsHXWHDFK9iWvZo2mLstfz5ReG8LoaqHY96ZjKSKywYDtLx",
  "key18": "TNtaxyFceNUtsGUeDQmmWioLbnBaUtvH88RNFN7EY2xQiT29rJXTgGe7P7DfyhEf492Qjq8PGBSicgW1UpC7LwH",
  "key19": "2RXoQJYgbDWp526MoQgFiVS2J7FcdbZUFhnb3KRFcs3j1bh7AnGnNJzbEiW4heE57ZbjEM85mjjsjdPTeGm89QJb",
  "key20": "3XWXLGqsjU4BAgcmCaSERpnCw7Npz5F9XMSk4aJUtxexujAwwUYQVM9vTejKWGkeUVwwkhJrwrby5v1qAg3ryGYV",
  "key21": "GDcyycqVzbg9a41M66fF5QgMGWC6QvR7EJY89Sa2vCvxbdLAz9BKDdGwY5fwMiZUh37bnhCmC3f97vP93DgNGFe",
  "key22": "5JrxiDYqYVWf34jZmPxqwnV8UReSfXfscjusCeGkU2fLuQJaWyhZ5vFg7ECnvqB5LJAYXnC4cCD1eZSsHkJkdpky",
  "key23": "5SNSKPW5t6dTJgD4sNAJe7TSMvKaWxEKJW9ngeW4vHJi7YqtYk3HkCpGThnP4Pku51w6cvizTMLyRN26bcgmHuer",
  "key24": "3KBtTWQ3JML3UNxg4XCT6taHuseiHEvLfEisavcUGGjEN9LY2DQSuHaeMNDYntPYXBzErURcKWvXWSGkWMVRAxZJ",
  "key25": "U6iWdMAqiuJW5tEAw2LoJfVqJSzkTQCar6nWuAhwMVD6B6mc3PkrXTVjV8UNcH4RsE4k6Ax7fRY6NWQo5ZwEx17",
  "key26": "3rFHvSJa7eciEr17v8kHRgtNaaDGmcKvCKW6AzduirwGMjp2Tb6FYSYpYxDcBhhAyCRD3UC7K1wnt66Cq5oEraZ1",
  "key27": "3aSaUMSDapAo4TtcGuxrP3NkbceYHB7mhf2RQztBKkhnp9zsjBEVRkHbkJZUiApGNfQS7iHw3AtUsyqcSENSTH5Y",
  "key28": "2wBqp9F6QX2fYLNuLw1QLQv8fnEQCQJcn64QxmA8zMakk2gMpfFbXqWqkLN48aGhJzvBAyuZE12Km3GBRoVqyp4p",
  "key29": "5foLKyRweHeQujY7s4dvxEeoUxDsRcumWtGJ5giwuyYBjqWbAcmLRc6xBw5SPXiCMFnVjoUZxGyQZURbyqsfMf71",
  "key30": "3aTcr6yo9YUCCL4P6JqRFXyJGmDVmfqm82QUHP24LmcgSiaoeQ6dNMQxx6DC8HTrHjvFYNnWNkfbTaFgadHxyVrU",
  "key31": "4kx8F5GyHubsG6jApVHwsNuSctvhCX5y4JF8GcDcrmGCu8Lm9G3AiA2b5pGfKB7CQWQWdsXfULQbdcjSuC8UZ1wM",
  "key32": "38cW7v6QZmEnKCjZQRH22qi46fKy81Dxi3vUUEaYH8Abp45xh3nvMHtBKcqxJ63kRt1b7aWpbtzxtFvMiR1PmyzB",
  "key33": "kLmVmH8CexKdL46FG3qEPxQmTVXcfTKC69z3oEqbgHt1C3omZDCWKPLDo2kSYaeTpD8MmAiGGycpTgi3BXLzpwq",
  "key34": "2QAi32SpChMKdV8EjX6njNpoYBbQF5oAeUNxrm6nrJMq6cDC8epmFuTRKvZp32UtChKyifB2ySC3stun16fVj5WC",
  "key35": "5ygi33FZ5FcRqhjKVVenB2kekFn6pRBhZhPiR2yK4mRqoZbcps4j5qQXn8tJqjU6REuvphkEK1RBhmK15eASVKKt",
  "key36": "5D2LKnqEWgk1gBS71pqUh5KboB6z1gEBvxQt4CL5qByAZhLQnq5CKUaaYWD669YmEiYm5WVh5ATHWmqMceXBL9bf",
  "key37": "64EQFjUopgn4kZCBi3W1g9YWjNiP7X7wiSeiArJBmJ5fqowHwQSB8DjdfJ1YC8kcr4q4j2Zi9m4qSeD8BgaLj2iV",
  "key38": "3AyTcjx9Cb7gQwoGQ8KxN6m8ioLh1R6CeUMDo3FR4NJgn785WX7Lhq5woYxNAX89JAsDGXyoBj2gQfc4JYTWahDi",
  "key39": "5VzB1Sh9YT5RCHBttepu7dcRxcHCy95bZuJV9pJMMvkCu1Qj91vxMqfjrcujZfD4mfzsRuWzBkyHKN6gJcE5gHr5",
  "key40": "SX6B9kgKXdSmAErRAH4WQVRGeV6osvnXEF7NjHAH8TYcmhfEFJy3Vbw6rpLSQQHmniUt3tw2MEvzGdtD4C24ZTC",
  "key41": "f73ez4SkUweqP8RKjqcCicECd3pjbe4Jm5iG99QqFw1btxwimAuXeZuWjgMLvMtC53yeeBWGQja4tG9ZytLK7YM",
  "key42": "ar2UoycEB2RnDJBYnXjDuReFULg7TKPJkbDYHpz6E6pi83c7nS548VYgaDp6DjJaMrpqjnzgp8evafgXvZh4eBw",
  "key43": "2VxaHNTQ6MKHQXWDgRuqJLtu8obGmFhcNSaaJxToCAdFTAkyWUxWB2a5fcVYvuPaaHMgncFC1qBc23KH2m2DE3pB",
  "key44": "5B2mjJHLvKWDbRhhBgRQL2SVMvJQdUKG3JkfUpfxc3uZYKVfBbFjzAr2caZpbVpoUTtQYFyLw21MTg5cNG6fpeDX"
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
