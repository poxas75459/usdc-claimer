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
    "3nskQ2XYCmHCSbcAv8sB3f9FjKUYhM6ijGJNV854Xo4coSEaddCjZcesKGii3SLvz1q4bnHqT9nFJBV6zbuZpuE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XB2uakCDWxRAzQh8FqGcjQQ7BpjrMrkvp2ThD1ph3xMgVp6bnVCPBxSpm1bXycS8gx5UhTGPpjPvKu5ZyfUfPxc",
  "key1": "2q35V3TMudtAkN8CH4sZmio7zzhgagdq4jdp44QRRvsu8WDigx5S9MarLqpisy8WEHmJZNqhkwdXaRdVE8xt1ZbP",
  "key2": "5Did4FEyQPMPYoBuZS5io14wtBQEJ4irGEU8Q3Bf9At25Muu6MQPmGWsz1LT2q1EqvGxjqfZYut4viLMAomCCbZE",
  "key3": "41v32qw8Jen1mByYLzi6w4yY8hDqaTomBLc3Jv8xWjU65Uox4eJMSckkr7FdbuukfYf5W4YP4oPyej2cBzMKfu9P",
  "key4": "59QtMWw9vWFgFVcKg8EwXHauADS4izUbAzYBVsYVTutPTVe36MeXyS7gwaUKTyC5e8LZfUnouqaQF8hjWA8Ugh5c",
  "key5": "34FvAEVQyTzSez9mmYdmCawT33esq9sSdnSiRyevGCBY42MhSgYVqLyV1LEGFuQEF6vedVqqB9uTrK7sn2LzUEaR",
  "key6": "3vYoVomwpozHo7pgWbh4JhW4k9oe5WRe1R78SijUi5h42aqB6DdJ2LFHk1bB99gkVmPB2KecTSPRgXjtp7b5vWz8",
  "key7": "22t4Dg7vvMEvaweDFnLugai24BCshQgyPDe3vH1nkEBLy2CqRqNXF4S658GtumM3EA61aAyZhH8XPpobHF4NiGgo",
  "key8": "2TpATggZUrTs6N6NT3scUtuaorUC295Me7mNV8AucAiVcKp7f7Xv7u8GjZJqtvCBoobUE99y1hhAuK2KaDNbs6sS",
  "key9": "2Z9wjzfBE2mdCT3YUe1MdMFka9xZtNWRWsD6bTgmhUHw4jNk4vgpqzsfA274kAnW21LLU2xXGX8c9CUxKrA8eFpC",
  "key10": "35bBesPKr1JxrSFkc8y2oQVX7jjNvQzeoRBAuUHVSAngxaDYSnpCosZ2BD27NEuykjd9CoNbdnf3BKRFdiPoNqHQ",
  "key11": "d37YcyQaeQqL46WKnRUD9iu1DpzGNp62XS7BN2D7oNguVQ9oygYeYwMdsXgS4eKVc4gFUPsMg1Ex4NiKFEWcXAA",
  "key12": "3Py32aMogwpHizZHUq5RVfcMLh8UHsS15Yke1TstipBjmT7tiMxdjp1xqqiLSnVn2JWqnJgmw36hktDRs5hqkm5x",
  "key13": "d6CzTNxU7gi3bffREPFvnYYWmEURD18AR6StWqertaQeiYawd5Hp9cZDFQ7TbmUP3Uy8E2wayRGhErRYyA1db54",
  "key14": "4YRsZwtHZYQCx9iKHHmAfj3eaWUqXmRt42bJ4uAooYnefGDfSUiM66gbLa5EdZ5h6uFdH91EDWboiAkci3Xq7d4c",
  "key15": "2tp9BYSNmHPvK3spAvS1NXxH2CGH9pFMNkHXrtZngGRAetsoq3VBwu2c6f8hosn1vvavwXL7489djgxrqsgmyugo",
  "key16": "4Y275pSr6ULxDyNf3jjvYSFc8h6sjRoH4eTKojhM21znqr4exnfD9wqqAzKAKoAWL5GsBTaaSidK8zDcvYQQnaCG",
  "key17": "2er1PDh4YprM5fnVqDoT6Scrbpqz9w2Q84UvqXY1FLeUgeih9m8zdTXy3AobpiMKPPxRhdWEnuP4C3RTyZgkRn6S",
  "key18": "2HoQpTgbKs1yL4QH9mKNx7ftFAxMfgjfQsWBcoQtmsLd1u2hu2ygmuDM93LeTsq1NXCbVatr2TnxSLmT7ydpE5qY",
  "key19": "TnEUJPr8Wj2rZgFHqZ6i4eqSRuzKh5NENXTTADiEyYTq7JKWfFk66uFZrNN4MxBpDbBfAh3bgTk69yUR84RtUem",
  "key20": "5i93SmC8ZnYm7VcQ5mKyhtzJAidksu47jjKHBCqXHNN2WRh3oqdrrPSbmf8GP4UzV2hAtQQAh4CeR6hrYrWAenY1",
  "key21": "3JoT2tbUL33XN15QSjVQKLYkoLkGZSHUqQR6874d6VVgca5ah3i6c5Cu84UWnZjnB1uTHitpt8Qxz7772scLYpS1",
  "key22": "4nUbWRWUh3qSzuK8K58KLxGpLnYEwaDsXgP959xE9MQ2Vvd7RmwkHBaiaG5CB9JtVeDjauuHHQpCqMyvj72aCaJh",
  "key23": "5xH2ZVuS8pc9BCHt6WueEWSpVQwWBKF6E7p9re1UzC8t4aeRANa9LXSBHq7WGcCVNGFkSDBzPrAfoDawGNe6qws8",
  "key24": "5hJEdAFZ3EAxVCMhT6Cvgciz3MHtJgG9ESvprbx6ax4m9MMtkwxGFsF6aCAn8Y64n7vqUL7eoRVfo6D2yJGGeDf1",
  "key25": "4yZLNd4snS757DaySRpxXvvgNe5nt33HMXwNcK6JZjhHWfGCmUcWDxuQw5niFr8CNqjU5mbMP5kdyh9HqwhT7vNX",
  "key26": "2dadDhBYQMAweTvHk2ocxTvx9uR1wNGJgKZ51EE7m2Use6FuKW9th2rTvdd92tEJ5MwzNezTT7CWVYUdM2Mnb3gF",
  "key27": "3MFA71KixaV8PuJZSTvg3M2JGxe496F5QvTTE8XX3ot4oLk3f4AcAr4pmqhHQhE5KkSVBJWiUWx1VQWgECmDhT5T",
  "key28": "5GiLxLCGjSedn6ZfgUKGKSRRm4fPXTNVNJMjjBQ7AtWoWiTaML5SZNvH5rs5KpvS5q3GjsQJUWBexUvtHT2c93Qz",
  "key29": "2KE7AdzonLNzyVDpr7x5weYNErrJ39DFSYjRhxR4jxYj9b3fZLK41992N58oWkiER1rh9SFwjvNNwomFdEDQonni",
  "key30": "48vQRRc2VS1yXvq9umv3BopejdPWfH3VG6LJrHTdmB2Pzhu7L6VXNNRQiTrMhWkKDxYkTD4EJMvRm33wsJjXrs5g",
  "key31": "3SMY4ZqGBWmvMTjMUQbynYcyfwGbDJoG23EVqT4prhJCWyKMSqsLCURZeh9EEKbZ3vENN3ugDgmPgabBecMdgZQo",
  "key32": "5efxTB3cSUDw3aiqAtJx2QBAXLFREtq5pHGnbVPZGbSazk6Bh5pcgRHzNEwB3Y66SHsqScndUXdLBUUZBfMeV7Yi",
  "key33": "7QouJWhdtJLuw4MLipRu6vTKAXuUaDhp5eMejeK12CH3DZGaYSBdvaKnheHLKkNqX7AqMr2Jm1DuGbgapf6TnoN",
  "key34": "SM5QTYob7Qq1VeKez7nkWnKs2zDqiQBjp5vs22XfvyMYdpVNiz9Kei6M62ZrfZYab4A2UiZzaQptCfddSuyxtuS",
  "key35": "3BVG1GhQaQAnmdqpYGMfyuGzgUij8fjFeWCEiBjRZsYiScKbGDzTxR81FEsXfHGnUNmuUibgfugJPnUrebPDUnSR",
  "key36": "3FHGNwCQqM4JQmb1Azp9TXEgPMM8dt8rFruFukJoASwsg7Vs5dXK3NPdjWEDhaDTWfPnuKSDyEvY51fSrBXazT6x",
  "key37": "7BnovXJVdtgL5U15Govrk9MG3LuJDZVRzVkSh2hiMyyHbHXuQ3UyzwfxZqapeHzUJXwPBteYLxyuJF41wzsvKHs",
  "key38": "4fzVMJUojMraCoWzcFuuB2JmrBkiU5YjxUisTpfiTzCm2EUGhpeMr14jasJhp9YARUvtS3rM54M3jxYwKDqbhXxo",
  "key39": "591nkiGrwBAHRwCfTDKUksy91n6YVjKnjSKSEhB7tejSR4p2ZBqr7bGDB9Bk6S1PNKKzwZ3dJ7xWunuapuMpBsWU",
  "key40": "5n8LamtiqBzVhaSWT8wpo1V9GwgNrikzq1kKeH4Tkjin8PmVbNYVTwuBKpyUUKV8efahsEhGfGcF3E2fD3Bqb91i",
  "key41": "3phyD8ba2fkmniko3V7oroWKf69RewWbBpePvwycSJJdsy9nQD3YzhHtf7ss6YvZpkUTv8SNemuTcx3pBWYrEyMW",
  "key42": "4W1hgn6iK9a5cdhoST4nektnfyjpNw4Tzx5czySbXoiEUzooMQBUe2DpTQ9APFoWjVokwJvwE8tgBq7eqFc1gGbx"
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
