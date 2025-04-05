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
    "3g2Ys1AKQqfVBZTaU6ey4nzJruCDJpeDRjLP7vt8EUBjsVsTEZmqVzJvzBTRXJDuqeyYYWZDg1QnamVpXCyQyVL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B2H3atjTL1soNEYCCMNkfhnsoBvxjjBnzWxijpniMk4RohWRy69BVqKxmcxL8rHZYWg2SAyZSnixJZcAeiAUTAD",
  "key1": "3sZCFxgUfji6RrJB62AuL9uMS1U8RgXnjq7r7W4a7TbyKBGHXbLiJfUPjuYBxpxS2vNBMqdukQK2w34hozGGZaYm",
  "key2": "3ZgevkUaztD48Q5aoRKfH82pUEesX3tBsYYizWuo5vk8Q29AcVKRq64nD3CzzsG2AX67kKogbxA9dZpXc2FvdTcQ",
  "key3": "2pSt6BViMqLpYE1tn3LJvusWcDCihYQ88u6qZpLKAo9drjDc9EYKsa2uf7dbKhup3Y8h2E3W3T3bkppHavSXudrE",
  "key4": "2EZqZFH5DJpeZfFYMcQedWaoaUYALDH1AqSVixtGQ5hEAyPNF5y6RXMLS6e4oZjECtCAakH6pz5T5KvCjA5uUg9d",
  "key5": "4Ymn1JwnzuVCsrtUSsspCQdAc9zLXnkRnpcy3B5zNCq36jkNo8ZCgztY9GMNuS8z3bUCXk8ck66Dzzu1nqKUqEdu",
  "key6": "38FrCxkCJCirpndsb9CeMn3Kms7p7s6r18hb7UePBmS9NYiwAGVsCkgySHztLppGRwYuCvdeMQCjzCZRqGuREtas",
  "key7": "qV9MED9TXedcbqML9RHFWaWjmysJmBHUpgWTFEnxg5Zu3h1C3V5dXfDktj2Mdk2Cu7ZQqSZEmDiGJPEDjPe496d",
  "key8": "4i3hADe6ZB9tAnXirBAL35bZ8W959fiYNu1q2bbWJcarRxebWrmWFwajmbEpHqAe7RRPkzsm8pN1aA8pSMxTZX6e",
  "key9": "zsTi4vJ5z6LyniHHmXmBQpSRC3usazPVMDFR4Sm35wyWPXvhfhrSVWSt165YyiyKN11oHRzL5uFJ4rF6RUkwK64",
  "key10": "5CdGrrPSThJ5ji5KMWzSHaKbwVFweGbxTjT7HyEMpJSUzbHzJhb8BJ4ixjuwVx4ECt5JzZSMVMCUZFVzDjc1duzn",
  "key11": "63ZjLYxQMDKWojLqUHUkL81rYtFAjfJnFta8w9vQDJkfJHXjeDTzRd2edZwN46CSuA3dDdLmUhgTUf84dU4tQzVJ",
  "key12": "tv69KpyF8UMFrGwfV4jQVxMAnroweizryctHXbbUNLxDZnQSuuHvd6NTEC54J7S97UtquPu4S79M3DxJ6n61bdR",
  "key13": "2eB23KkfskuigeiycdfKLcsgUVGAmjJNG8Eu4o74oib8cPbchZ3wUoZvPG98EvzTwLJLoaF6JYgQvTCPe26GgNLo",
  "key14": "zLzJ4C2BB8X3xRMQL3kxMgHkZvnsxYy3R6wstg43AiqbgdyYa8wnyFbGAdbhUNEiijkSG67Kh94mduBu3kXjgH6",
  "key15": "43xXhTab18nP2x1k2buxDzZFkTKLvzFRb5j8HcZRUjw7jcdfAcyoAoLt7wWHsbuLP73MyNVS3L9zVdEvNCeEv2Cw",
  "key16": "3NJuwi7Rp1wfkUsQzivgah59Sc5NhK4TYScwXN2KnDR73Z7vLagNj5MYBzLJVhBN6Atc1ApcG6jJm6WMBCrVgCnc",
  "key17": "28G5EU1S7Hx83oL2T288FCjZf3SCSJASH2VcjFvjuWCwag7nXdfSXDQAG8uZmtcTvu7A1ykzT7Sp6bDobGhx9QV9",
  "key18": "2VDJitHE1kiS76S8jZAfEsXfrGqLpdBAb2oD5SiBRYV4AwzQNzuxNqcEp5bgXBnvmp4P1SiMK5YCrkc3As9QMGc",
  "key19": "4WgiBk2MJCWX6L2e5sLQ7PWY3rk8pKvNMdKZMd6FbD9j52LgeovUg5WHCcdTv9UYj8nxuSqa3WR19kfLL3cvsaZu",
  "key20": "Zj1kbMhR95F7wDFgHhWVnQkoDmgAAnTQLGRa24pR1BEP8ByE15G31GY664qr27nsUUfCnxa4Nf6tLVaFoxzxfFF",
  "key21": "2GmN7VoTAPudY2ZvTSrp6BQwHxgboZ4Gfzec5rRKr72wWmD4DDvQkFXgEXZZ4WqZSTEcH9Zpq6qcGjHY1sU18cVw",
  "key22": "3yGwWhqZSLnuPiKZNDTtqYxHbE1Vpo4ZMQNkyRY4ijXVvQ9HCFdWF4XX779yXm7PYL9WURECKgy8APzc2wxTskW2",
  "key23": "2KwF2mKsN86soicEXNxX4xuDB2FPPyEM1s6q6Steez8UuJed1pD64JXC6sCTPpDCjHkxmBmo4bRvqBZvfst8dZpR",
  "key24": "51BS2kpUxQuXvMWAgzHNtk8zQmgmhDFv9Jy9j6rX5Mmi4buGpZ3vZLbiu9HAE2MLcCjpnZ7zCqvj5n41J19TaXCV",
  "key25": "5KemB4VBJjoWKtMB7DXKMm56xhTTnk12hfpGfCycRtXAMDbaJueaQ3wyn2LywEBSoUTcTbu1uuzxbGTHYcWPngrx",
  "key26": "4LB7k1V1wdMcUzMeUFTkgjMR1Ps6UaRCrnSMBykPuUqKdbDKMQNxDRbXWkas5UrooHZhN1SdKoHejuDUAg4ngyPN",
  "key27": "54z29DktAxpZfPfkMwUgybbPvE2ht3xygb1Q6bcnoi1PPDeMeTTYUVewEPaogc6ufuGgwkWYVFtyZ7z1buWksEUw",
  "key28": "EpcR1u3KscJjBcYqs6dMVEcuYb7Bvjr7S39Pr5fjyvvsFDK8nCqC7FSVYDUbC4BTbhiA2dQiXYkUpyQ6T3iq7Bu",
  "key29": "zGNz7D1CEtqhA6PLaYiUYvHytbchZzoEzggztUWt9vQriRnk5nkfpujMaAfAraGLVv9TmrKycX5ongo3Di6X5Un",
  "key30": "Xzamg32b7ZPVN9smM6b8QPnZxY6VGeKbnwM8GULC9fBWZDVqAvfyxBExTtP73q77STMoUBDi3q1hF258sSMHs8w",
  "key31": "4M6GmYDybYt5CPcUMoK6kis2RqSdLDfKtyEjQ4SUfD5s3arz9oHvpp3peBfXL6vJLAbMja3ej6VFLySjb2C3tTPS",
  "key32": "3QUeEDGBUsDhDNv8GFKYgBHKsHss11buUDnbWdUfVZ2VU95FeH5TUWd7EBsWLod4aVLznCdDU57SmH5zgJmrx83J",
  "key33": "3e4h3vKf3FNUEcfKa4ftiuv87GE4iskJYzvPjuF1nLR11tBF6nUxh8joHkcxzJ3Ej6ry4ugDG8zD83DpJQw3PMQ4",
  "key34": "29XCVgWw1p1vPUX29AdwKDBtCFcEgXuxkGC2uqGv9WDfadgZHnBBPcyzD9H2NrtCgfyV8oxYHkFwVb8uvmHuJUNd",
  "key35": "5chXfMTrzq6CcgmjHLZ8yU7v5cQx8aHNtwDtSZEn3mvkbxAh9rsdAQoRJ3N1Mwxu4gJwHEcTUTpBVDdYFKtP1Y9S",
  "key36": "3jk9LNTmEqMEwYW4fnhmbyKMBNxUMSuDdW44vDt2D2qNE614pozGU8LHNMFHJSK7FXhFfQZo8FNxwS763uk9BAzm",
  "key37": "YNvA5LJNprPeW6kiMcdciDvGnCbyA45bW2XA2ApYed7SL8mS35MEKp2PwCjJoVrHDoFuJfLea33zXDNnnPT1vPU",
  "key38": "3AUnvhqLwAoDt7PFRt1G8uoYq38FPNVtXT83KPym6oDQ6Q5v1s9ss2pasrxeDbiMT8EYht7HyZqQnBHobuPA5nbr",
  "key39": "5FVVc2aQoFojbUPPtmjw9tug2Zuf7RLjM4AtM5rheGTry9M4bBJ6mY3VYpoJZg7pRANwDacokhymAhF5ZgqxCLjy",
  "key40": "4miy2YvWxc5XCXzPziYmEF5sTsgoVfHCU6qtpLUiGL1ixMzNYctMp628fSeo7vTtbZ7KKdg2RDmXgwZ5cXgvJaSk",
  "key41": "4wXawAg2MmAhezhnGhviTgboJEQyE6hgEKvGYKvJiPioHkUB73Qgf86qYvvxhbcYM8ua4hcFS1KujECqydn5ukeW",
  "key42": "2f8rXabjwgufJKURvHyQDLJGSd2S5FbDsPjqFZnprVBVt8sF3YdW9x7xj19buP8qV51xPUoByi4XT8T4jKYcSxJF",
  "key43": "2U9rSwFhLZaJtxDHNXLC3n5jCq5wy42smdy2wGcF4yr9qPuh5ePfQPsRobFyZ99CwRivbW6acGX2pb81KGMWUFwM",
  "key44": "2wFqEA7M7XTexHwom6DuPgx86i2GwbPq593h2FyG61az9N86412xjseCyK8jvZQL2m9pQgmdhMTW2ioUfzj3kn2s"
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
