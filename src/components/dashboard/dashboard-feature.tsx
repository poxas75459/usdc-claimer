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
    "49omg9kdevTEA8BB3WsCEXeMuKC3VCbdC3tL7RtVfmWEQu4bjjR7RLBh7XgTq4rHn4oXaTzBNriL5zGQxzBN4eor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5owYFuoTNA9UtfzejkqY5BPNwLRhCeqeQa9nHLtLjTrL6BjCW1THKSA99c5xaFYD2J4tkxwVpCsSz7mo4nutHAxN",
  "key1": "3CqCCgxALU55p7ABTwAML4WT8sWe7EF4YnPjPJAfXXpzUNKofuyePQYxZebGsEdzJ4TbuPBTV2tR6FcxXijnZfcW",
  "key2": "5uu6f4A8bU1CjYhVEArfDBX32CejEXUM72SGhrvAbDvWkcv6FMTEwWHX5XjQ5bvwEtFfZkQ7Nd3rtDXLoKuJHEqs",
  "key3": "5vBEdQ9pF4XEh8hyFbQFje8mH8rUerEkgjmaSD2p3gemxxqfNU9zZwKUGhdG5JeVWsFa64oSqwr6Q2ANiDgocSuX",
  "key4": "5mvvJewrQSY2AJZLquWxypYedgaGhN9DLab3oXxamcUoarQ4tFeAcJXMj4oJDMHovy6RivAKfYvMGLgRRTEQnxwv",
  "key5": "5Jro6HXxFV7PVXfpB9M8UiCtent2Fc55yErPoUxpSmN7wLtpBvrmRNoY1kmut3F4K2GFPXh1vQuAg5m9QVRK9ABf",
  "key6": "2zbvnvDQP8HgAZQ7LqUFMhVnusZTKchs1bPReshtdMQq8FNT6YKeWUe66v7SyRScFdzcsRUuTto7wFSHE3JnRWXy",
  "key7": "2LgJtTwo4VuYFyC9bHKxunKPS3GEFKo9DavkfpViB7DqqLQwVQWL5sbYWfQXDizicsTpkYipoHfFcR4ii1AWPqqN",
  "key8": "DQLFfSG12oawStvzx7YEJAyHtpuVTmUkpSD6S8MPGxGhZtErRSGuSmS81tQd3j9GjDgExzgVgYW9c8Hcii2cfeS",
  "key9": "5wU3Z5f9JQci7zQTuPME4sJTBZ8UosgpP71UQTGcUGsgfSkHkK3nj78MHS9Kf9zdphcmLYQR5Kgd4sJzVgtEtz2K",
  "key10": "mJvCuCKS2hNbj2oWRFJztjqPUZTjLXyYh8X7VLW1R3AJ7ZbV8NWE5wqxEoMeNkH1YFNv26nGqN8ubB8xK36Xdvr",
  "key11": "4gM2XKj2mCeh9vX86C2EuHzVnaMGbYiW72QgNLag5yEZ3qoiNU2aENT4HKmbMAwnZt61PKcYnhFk44CsgMRr8C4a",
  "key12": "5W7uuhdT5zzigjxArrBTk6SoxLMycVipLTQKTLLNFxPaNnDdTDK41gWN16bDhVU8HxzeYWPqwWevzCmN4Efen5ne",
  "key13": "5SwFjRNd3aRrKrdYVncTNCpBPktbxnPTwfVW4eksbMDtmCnR44FzDn5SkiM2ZjysEEZCWedeKpgvkDd6R4Ap6PBH",
  "key14": "62WAkUtWqoyRgMSfo5B7cTRaRkjTh5GaV8X5wLe4CkSviTDaEDjQSM1DUSNQRsLo9E9i7VBkDPV2N6zfTnyh4qnV",
  "key15": "51HyLGabrHjkuoy5ojtAcGop67fxJMkYyYHN5p7s9o5qzLPh5JTDrZ3FmzLUBrZj27gjMus3PRCtztVRq6ddthyy",
  "key16": "5L4HX2JMTYu9hmMPoTZPgC8DBYP1NNonYiH8UajmRvVs871eQgdsYBqn2dAUmyxrjJa7Zcbv8bTPyXibsBbe9bY6",
  "key17": "5KeMju9FC5U4iMnBGMeVxfmfECiCFDkioTPRbBKnp84j9McPXsS7Lw1nDTAxWho5X2HkK1xfkyrUnNqYPY6nGLNA",
  "key18": "64wrRAbENvdFYtu5SLYZeg2geQ8fchARStq8nEK82kHNW1iHwEgpDq39DhhZfCGvnC1shFBxK7fHmNG2TCM2z5NQ",
  "key19": "wHQuYkZAq1paVJTZHpFDFmEzsmqgMbVAMe9m5spvDK9ip4cwuURG3W3Ado9eSJXnoPpzaAtGsZAJzxhMjG6V4wi",
  "key20": "2o3vkw5KwpFMTTbZw42ih3yfYLNo4oLoWwsnu3z5fEkxJw5EE3oJG266GQbycH8VsXxFAXWNEkt2DEe5hZrRrniY",
  "key21": "4rPTeTEBWLcLPiv3dBLwsJkM6GrcmNXQaU4BHadW3nwLDy3CJBWnPxFAg79CcKxZoEkHwbBVo9opS8EE9WnVU3N6",
  "key22": "5WS4e77EpdMRan3w1Wy8jVYqx8uXWmUELpzHnotr5YCZSC8fofBFHsDX45HzT1By6HbbvNArTjCFPAjR7xVF7iGd",
  "key23": "dig5twB6D9aAgAo2yYg5JvDgieWm5bFyB6fELStCBvRY2DANp9kbp5x66NE6VG8HMcNWBPmK4TbV95NaQ5X2rAq",
  "key24": "2SgBfzs4ALLP1d3AG95MM3mWMXEUbAmMfJvLT2rKEMxQCQtTgpff64ecBgVvbZYbRZPpdVmHUDoteyS2TTvDoAD4",
  "key25": "2UVwTUwwaEkFDWbgJoPmFDHh1BakKBUVmU8kMqggRQk2kV6v9jqEQmWJzopS4Nrvz3Xfz3vCv3GA1KuXfUFc6G7X",
  "key26": "3XaGiM4TukMYGcQmWXuvQGiNXomuRNB9CHJrE2oD8us5yYCgzq8LZoM4byedU2HiYKniqag2J13EwjsutmyzmN1r",
  "key27": "5FGsJE6wgibtzxRVegZjs1JJdWTtzg9hisogV3znzBmXCa6XThP3czot1tJZZQx6mdC7oDhskfHgztxa8E2okvf6",
  "key28": "b5QHjMR6o5bcPnVcQPgwGLF4yEhYSztrpXMwTkzZGLWpr4UUMR9GjxpK8MQF21t9MvFokvVndvX2Nmwv6Ajmqfz",
  "key29": "4RjMJJ54xyMgjJ9fV2hsrhtLmAWVgFva9SPsDsj5wA7SSuivhVMLp6ienVuwLcVCLKgpQobtWcBya371EMNu39cN",
  "key30": "637cCuUqLzVdFJuWUt2CTDTVc7wcDcXL1AppV5cUkkmynhfN4CasAE5arQgcvjEUmBqQitLG8W7MemCDS1DZXymS",
  "key31": "2wKmpxLSRz7HbRMSie89EfZvDry879q7PCXg6RDTFxwrS4izX8KqtP4tfzR9Sokyi922WTWErorg8DSFnTeWHYe4",
  "key32": "3QzRfyt7r5B385EpXCDSuVDYHPHaruX275FKEgTak2dWWXayvjkDy7rAji1AC2ZwuoCvb42ZCHhPGFgWdGqR9RVs",
  "key33": "2KZ2bBBaEG18kgwPk95umoFujVTfrkZqy7swyd542uSCdJc3rStaD7LU3L1kkwmRmbGuvNGfeyt4g1MgenaxgVMg",
  "key34": "2whWdtzGCVqgntUeA8Efzk4EhSEjAsQtrSJKEPGyzJiZvTARrs5GMaFtQi7s5Hn55reACyEXq75jjSAsRcfQfGEa",
  "key35": "2fFc76k5wECXwUx3Fq6LQ4bh7DDfueeuqKS1WbAkYoPzwUi3PXvibzj4rN5v8dRYAcSbepqYQ8NUXddx4FTZe7xf",
  "key36": "5pfryTB2i4W7XLWjPjiutsbVLiNE2eEzkrK7Y6kUXvQuAiGyWFwxQzFHx7XsvMcQscmGDkajU2jRsMzT6fU487hB",
  "key37": "4vDEcSAHoco6owinf39RAc5D5VUP3pBYrMBvtqAU5wGSzHQcjHsWjPrSoLWkqjqqrGfEebMk78JmpreUSXjUQq1h",
  "key38": "3YzedDhJ4pzxapXSsLHUBYdvqFcsMsKmpZqBA9YcoJbkaN2c39vUNJVPvXWpprFaLqzKtGJMmymopYozVRASSHxf"
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
