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
    "u3aKs9Nr2otbqz6ZTP2E2qv5dbDrUjEp9iqTUoTdFDF2eWd3mzKjCghwjbXKUask4p4K1HMXuR1BSoGTQXdfJGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5umgJxmduGrtuShqGj5ByQJ4mzA1AFGGVXgq2ofzNn3JMvSE4ktY2EPvzzZBVj7fpFrH3dXkE4NCBKJEEyyuZdPM",
  "key1": "2yKePqWpbBzzrs4gyv8X1uyrfH1nRahjfG8KVGwubSi41RygmqTcBDiYZVMu5T4XXEDC3bYVmGBcqQo16efpTURE",
  "key2": "2xeCfxC1qsGqkkZR2GAS2xcf3HHpec9CvUeWM6gFUWRDhK9aKbqgkLUQoz8JXtpW1ADhSzMNns2vG5Vyf3K58UiW",
  "key3": "2BmhPQ9uJdJDzTPRDEtJiWnJQDrMeAYWb9VqGP1E4m8EMR2584DLCVt3KMMis4yBCGEG8wEPBdPmuFNDKdTG61hV",
  "key4": "2FfsB4WXrAZmvhiKxQRsG8j5ZuovWck4KnwjD5T9t4dtzg7wa4Hw81DrrVkeEqr3bJt2P4eEKr1wRjfz3HMnRLCz",
  "key5": "2XQriNYeYsowRCUtbWpMavmaDKoKMm9gRXQB8eo9N711WS3mKFCLtXdEbFhwyjK9BHV9Ckh6y1aGxH7Y7vNQsrfE",
  "key6": "4sTzRtqgZPMGuWVz2xhpjMtehMUKzwDiPP76jsGgbrQAikbyxY6KHNYRnvJmHVYdx5dpwtt4EiAK3tKXAFNiktzb",
  "key7": "3yJVLexSpEw9HBjy31pHtS7rqoUhSYeDJjWYxUwp5jSRFLcpUjDxAM7ntersVWUg9A5tGpMD3RP4kpKwqqp8c3Cf",
  "key8": "4DN9ezzkfUrbGYNRXJFrCHj2YipCs6vnzDurjoqpBKY8CimMCs1nPGcp42JZTnpu6dsizHVZJZS1aGAba7sbyTg1",
  "key9": "5AuAcMMYi1AW1pddD7pXGGHa69dA3MAd3TWp9YVoFmvw5koJxk5Pe2NKUgoSMNZKo7bt8YGFntVMKqGc1z45VyrJ",
  "key10": "2q87Gt7Q3bULksnnkpK6QfDNzs1DeTkEGTyqh4TQkyM97dHL1d6sFjxxdCXDQ8ZZ5qPAEPkcGkQXqEawsb71aZy3",
  "key11": "53Qid1hcDvGpGDAMPC9XJMrVa2jSCRTt9fccqUQbBpzaNgENygwwZicz66VA51ucmZqDrbUUAX7sjA15AP8WygZH",
  "key12": "34RzCZpQGWGnuyxVmBS6oV6GCSRg5429zVhpiDkWZ8r14jiUdDJdArcy2E5MKrFhwdY3X9bQd8VEdN78wkQk1EnP",
  "key13": "4PphSwEGpHAhmM9Fs7AuD9qfQKoCYhTc72vUAZmNC2ujXUufUcPjtiGrcA1pnyzjwg5paTdUqKXTC3K5gNTzjwAD",
  "key14": "4WioYRsTrR9fqWJ1NkJ4gG443ZVBtuZQbs11F5r1x8HfDcLhCzXAaknHKms6n6Yw9QQRdgoCybywLMxKs8WkRV4h",
  "key15": "4ARvRATgu5fvhPDeoJUoD5FsVUR1sm5F8NBBqZYEdnCsLjShg8phN9XrghmEMiemRB4PdewSPYXcSEoAzuwan7oA",
  "key16": "2uz6jNCQFpVNqaEN8XRGnuZM7aKsRoD93SbbF6mPgVg1U547m8UPjtCnJ1m2HURJnZGfeQP6ghQuHz73Wa8NDM1J",
  "key17": "3se3hWdVKkdJLN5DkJrN5MwnRwmeVbThLfYbjBjuvtSewZAAVvaKCjixHobcK8g66sJHJ4Tn2JWZ3HvU3zBth82p",
  "key18": "3x7cWBoYfytrcNQKusto33LHBPEvysr3cV9SVE5qmECrvSXWxwck23FQHAuKCdCqTQDCEHSaX1ee6wSBsmCM21NK",
  "key19": "4yRQfGSrqees9w5jwHtdxHSSV7W5GJLA8dNbxn2LXPpzKMxCAKKLCdmySabL2i8jGLZSMkCwif3AxiGbQ3B8E1RU",
  "key20": "4QZXP3adrCHkeT7MpgfNsFEfcVrWU9ihexkBJCmS51CPBo3Fpgfo8oB1THw2UYFQ3JJQd9TR7hfGhXVuQXcusHwD",
  "key21": "5HCuqrW2p7TDAb6FSHcpqyWXV8PAddqKgN8mrKm8P7BgmBSaXYSvJD4LrPV3zN3h78J2ig9wRXsGUBMeW4BrkJeR",
  "key22": "3jD4GuvrzxrifxQjsHMDC8bdFVQFh7LsLEThjxHoB7aD4Jwvq4QxvDQ86jzQYx8K1t8rqBsT9MbifPgkpCnnCnhn",
  "key23": "3tFNwA9AV8WJfvHvYV3LvjxbszgNaUdtexezjzQqq6foa8XB2drkebXB2XfDMwUaJMfwkj1i9yL6unaeRhZGyd7s",
  "key24": "45ZejDtXPgPixS5xWUx3c8CnF8NyDH63H4BAZF9rMVPaa1NJHS8kidHu9Dhu9DyeGF6ezyuzAGtN8EvMv4M6mKJj",
  "key25": "5vTHQtBqf7i1fyPUrDNwJ617hvFXw3C1x99tHRDdE4nzEiejrVWk9MMw582RQtibQ7d9t8GK8oiGozPanXHsxG4b",
  "key26": "cMcMmxSM7qyUc6q2G5VjLJHd8Fc27gphCs41NsKoEJYeZU6a3Cjw1vFFdvpPzRAX2H7qdqA2DoUjVkz2kRoAmK4",
  "key27": "3Hw5TDLy7WYteScLzVJheCrLAmboh6HfRorxYWzqw6TBzXhrcJxBvyqoa9AfnSJAUr5d3eBTAM3ZaYQLV7c9b7sT",
  "key28": "f9WGgzBSeHbtchYxb2z17VSqfDhHLnuzhSH3QJFqNcap2UvdLrNGBj2Cs5xbHL3RYDS2cpn4gc3kJNivAVHp7zc",
  "key29": "52oieQYbHDg3KYBQe94muU8hE5rC7uN66U8S7FAUD8JAvz3JfQ5goSuL9sUimwE7JWaMp6WY4TKBiQbL7SRbdBsU",
  "key30": "3HSjN1v1E3BNAPo31An9fxwMiA8q17ceDaSuTwTRaFTSeUeyqmivkiuc9yoEsgRZeGsgF1zm6mjVN93fuW7y5gqm",
  "key31": "262f5sk6ANZKyYFhbULSL2zSt6WDFyUhB8ug2JV5LrqjippgbPMfNiRq3WvsNoXQZ22X7qnT9A8MLUE55aYQ6WXh",
  "key32": "67c1hpgPWNVkX5vD4XMNS4P2WKebNdWHSfLwFxuevo9DnAXnMwZxQ28mbq1Hcg8JDFUbarxciW7sdnTdjNydgkqN",
  "key33": "PXoZNGrQVhCxrmsXTN4ATV5wTS2oTn7ACY5rkT4Xcbfz4JEWrvsgHEHkzk6WyG8E1YMFVEYiJUb46Ta45G5mxqa",
  "key34": "5XtvWEJr62zzs6rRwTEAmJm1K6d5tSKquMfeQAi3r8aGhNKSJkvjmsKpwjziLbMsRMDWFRhPvh4rzkZz7ybTLGyw",
  "key35": "4Gie8pwNEMv7PTXAmJgF2z7CRkB1FkfCEEj3br2xuS4jwxgz3iSCDqy2mQRUFAgm4Qs9eEgBXyFbHtydM8fKwWyb",
  "key36": "4cmxJS4eNpqvhw2kCYkmTJ57TCZTngSKCXyKyHwSX2GMXL4w7DgCz5vAXCdWoEUqx7744nPaRLjW7kxQ7QBmFJEW",
  "key37": "2y8Kn45rQRyA9gp3MMc8Hx1pehZtgCDeJ6u7JYrFhmTfDnNk3Uzoq3BB2fpKdrRQmkgSckikkkZXYMh2cEJumNu",
  "key38": "53JdsjC5XR9ifKjoYBz4J1g48UzFrHUuBh1gjZtGDQsD511JbUN3kufwXaYE2PhscPQfzRk1kRLvqfoQrx5BCuyF",
  "key39": "2pG799BGjNf37LjbDAfxVqSbgiqo11hjQNdeynrju7XifMnngwcpy86YZg5uE8tUeMw5ojxA2zyT6J4eZTVsRHRP",
  "key40": "2TyvkbDp2Q9tkZoJ2mqb9vJk4sjUaDJ4jM2ig9EkeUq8kK98ABfCKsyK1zSFHibQmd6ZTRGp8MzWxrZXqu9N9KMz",
  "key41": "4iNXWF5Aho2ut3jSxke3EYeALPEkWSEz1952gNP7X7sUyJkYaEftu8RHJJUGuMKeR1CLDZ8rhL2i6x8mk4iuasKP",
  "key42": "64SgJ1AxbdKkG5mpeq34aT4XaWkAbhZJyp7SEqb7sWHBCnPaYjiiMFiSaMszD1L77xPFcJP1euSEmAeTAJm4GFVR",
  "key43": "5umn2oPDNhtwewF4xoY7fteMkPhQ9vMgyLkYsiqY42UDoLos7W7Z7biusdFH3TwhkMu3xew8XDCoaao1prcKB67d",
  "key44": "22a4TGMjCoGWrgBW5vgKW4RAC36aXkLY2mx4hXuBSD59A8k5gbchGaH9edSTPNA2S1HTtQtdgYsJdxdb8uxgJZ8D",
  "key45": "3iVjPut9CwisHjy7ghywHNnhh6n1h5rsVSbs8xezdURZsPpqU2JDs1Ad3Lch4nMnkmeUeDyDFVAR7EjfRFXK8qni",
  "key46": "wgUCtQxgEQ7e51hoKjRzZAFF3JgnXts6VWH9xW9oWsjvspbC1rD26Gd4iFiDYod294pN56ePu5p9s8C4keH2RUT",
  "key47": "3pm8iwHqBTjVcg3fie52Ea2VTYQDUaEXgFRn9cy7T5QDYMWxNNYmSY2J4U9aUZfpiubGxMU631Du2gu6LaMjJP2J",
  "key48": "GQGrfqqyg3TccqYvDoLJFuqjazNrDdH7tHJK4pJ4j8y8WA8AXRvAxYXEABaExe7MZqKBZngf4Me5F3gvTR6xU1J",
  "key49": "5Eiv6Re7nsSHgpvkrkCsUPQJrMFbrFJc58YpKA6Z5YUCXMyEAawDMuCvo1951vqYNEE6KgvyBWwqdXkuHmg2DjBd"
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
