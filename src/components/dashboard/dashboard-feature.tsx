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
    "2CCmF71mU4o3VFkR1GrQimCsoQAt9FojqocyDbL5S5Xa6eTvWveyMiQ7LLkPcgLpYktjtsNUM1Pcxa8gPHMo7m5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j2P5LcdizkwfERrj9dGAw8DSbLDEPFH39bZKPEBsNKfKairfxrep9rQQdYExC584q2zqJuca3JkchWtXmaUAjuA",
  "key1": "47SyreDJmCdzZiyCuioDKVTCdg5j5wPZNDXvobrUL3Mh3bfKpv7n37dDwXpB4susyn7bCBTLhCNPnUu7L8sNBbiW",
  "key2": "YbZZdJrKkaTNDngZZiiUArDdkpetqg3LDGBFsrKYQbguvhCzeLoW9LUg5Ddd33QNNYv8ezeJfNsGvFhE5Uq7rRw",
  "key3": "2ZSHRg8X9kKqUTuvi7RLQexcYFiTf9PYoiDyJRaRUvYTuXvwixMLRksmdhvBo4xq4XoWyJLMTySQP7foSzQhZL61",
  "key4": "2YJLvoVXf8Yne3cBhb8aEGkmgRhE4ex8jHLBARHYicXe9JjboBBsvcfKsWJrg3U9Njt9yS2J42FQqnwAYk7ChEev",
  "key5": "4h8bgQ2tHaygG4VY3Nx2u5M5bnupVAHiDebhiuPgmPyZjQnAv8mhA6c6VkPG8WLyn8yURS8ZBRik95DbYGttvcd6",
  "key6": "36CDSgqKxJ5uGpSqpegABBYQATtiaK32jC8ykJ2Kt67YcGjYP9JLL6t4PAcVWs2ohWzi8eX2Ljh8V6uJiFhNCsSF",
  "key7": "4WTipa2Q4zPm6FfKDD3ShT5HjTtKy73Nd6vg8uphpupwzfq8gG1ijyC8vcficSKwpLWwuvYoQieXy2bFeX5qfUs2",
  "key8": "3uBtKC6NRCitec3koeUiRAQc3Uca1K7V9RRqrSEHU3uV8w2Ubgg3JWxFWbQL4A2S8cmDNAcCv2pvMqPxYtUky6kH",
  "key9": "3jbpv9BCEDUyQ5GR7va2c7LDuCTz9eim2SMB9fkz4svjkqix35fXms3om5woBCFRGQgfdHozcGSz64H9ZQHgjUkd",
  "key10": "4UmjqTTYVhzyKNa1ptsy94g9Z5UHv2yc7m6P5CYrq2N6pMMg4JUHnztxrpnpr5FGBtnoTzvA2urJFBduQ2r8WtEo",
  "key11": "YGiWWjhN8fdp2AgyvQcXyy6X9kFHL8fH4ptKR1yku4bNRjYQP2P5YqV8HfiCBwmjzaXGF3pxGgbxJjWFs2kpu9n",
  "key12": "3q6vvQyrqaPebn33gpsqYAvEJvsZwhGGuAH9ai4Pnqh5gJ6t62856k5QgA5FAfrus1pXXVJHeaD2t9ABvuuBqCAP",
  "key13": "2B6nHCCkKgBxh5ioKEhRR5WgnREX99jFDqEUP6Jed6JszWBydJsMCfMWLkwFy3fGzBkU3ELSrL6uEoRtNjKrDWx5",
  "key14": "2c36DXe2DZdduYd1oB2j9TRxBKN2SvwhFpJjDiTzwJeYCCuAC6XRthFxvvHz3i2mgWWDmbKQySVGHfnoRuSigubS",
  "key15": "RM7VnipXGXj82XUyXzECsuhp9Qayg6eye73VHRvZMmaJ6wmXLRGw8zypmzZyWJhmT1JZn6rJoF9VzJVKnT7Zar5",
  "key16": "3DSnN5Xp1GqFGhmigkRmeTN52sCFHBayU41Dkc3EGQ4jt26eBeCHa2PpYdDL17KFfuVVYTWUzuvii62PZZZsK7Qk",
  "key17": "3GqnVEgdCG7NJaxDhLVGUZrYu67TK2oN3HPZ5fpgQAAwDXPRTtDbDX7DizPPmxKizmeGYQv8CM779Azgs5vNdvnD",
  "key18": "5spJmEFbUMaYFNNTpSddY3cXoZusRp1tzGwgApEto67NHxu9BdUrmbpHZjrCPYxSEdsC6JdXKE76idx3rZPJ1upV",
  "key19": "5YsuzGgbkjedHwQMTbzBjyXkmDRJhS2QtYdExpacn8Qt2GotHK5sSiM2SmGzUbuoRZSgvGcCdMhc1khjimNssfuT",
  "key20": "2nJbwvUBcgcDDAXrDYGNPZa191nFUgbe8S1svJV9xSf4sWQcTVfGnfh4Jp1LPF6wdDb1dhpgXEQjHvCGqJfLUDpr",
  "key21": "3cKWswCZbQzdjvpSvgBStNuPKT5B74gbPs4ohy8vLPizQakFwm5vpRuQ5FY5XBpb6EFSMLx6hnhfm4GapYspsp2",
  "key22": "212PXjinf9NFRqiB9ooai74AMKfL2KJqPsFffVceU1Q42TqEkzSxm8AmHP4Qbho4QpeoUHJFBnfkfgPWHjjFP6ns",
  "key23": "2GAejb7h2rgPWUUxQBufyirKWsTGkZZHg2xme73d2qoFXNRwsVHz8eJw9QkNts8yYWCmETCpxrR8woYRnLg45GkZ",
  "key24": "3drTuDR7kYdm2Bri7FMyCfXb3N8PX8whRdKDgmUHywEm3xxNXwZZ1SWbVuemRTFxFr5DhHLbL4TGCfVhfAQL3qtn",
  "key25": "3ph5d36xtSfqvWjpiVq6QzVVPepj2ndG5h8xjDAFPAq9FCf2MEQvnm5ai8tn4yj7ojS6UUnjCdPryNeetAuRb87s",
  "key26": "5SdghWHiTxHsjQm1n8G594WgiACF7gqM8rb1EGAe92y98tAS5f4oVuNu654pAUD9bbakUE7sdYtLWqJgWhGxuTdx",
  "key27": "5Ham2n5V5DPV4EorUBsBnxo9X9kyueGkbS1iwMAxjgMmasdFWMQU92q7BbTzh24RE1Y2UJpwcGfEWZL54XtmQ6zR",
  "key28": "58ctjPmU4ANb9A9ukWfdR4geuscvxHQnZNgUemhHH5ygYjJuyXtqNG7UEcP2JV7hegMQr5NduWbEPJtTeYU3mfya",
  "key29": "5GCKUv9TG1fjS7MdGLnkeX5DpxALVE7UYhVyB95jrsLiqSN2eMhNaVYvbSHwEiKrv25FqfDtgzam1p6Z8MyMX3eJ",
  "key30": "3grgydJrPR66vT1mNeKmbCXi9z7hJ62Me6ZGtRXcm3cUB6YJrQ2AcskZk8hCmCHihhckkNKmSapNBB5X6MEb2m5h",
  "key31": "3raYey3NYYH8YsXjKWGuiS1buninfY6gLcYbG6aP9jGpcFP6Qh9jhqZUUMLdbGR1EferLxpoFG5gPQjGSmxckiBo",
  "key32": "4bsLxWqghbBq55XgpKR9botCRnxGnp9aEH75VjoYH3yru3Qr3bSpLNgPkKqsJkztiNJgUKJ76RKeL34ACUm2xg3y",
  "key33": "4RsHyLRRtzijZ4HxDkC1Uq43ggdM8BEtYeM13BrFyvKXabTSHLSQH6hB8bzGtNo9P6iavRqC28p8knfWgWzkcWeu",
  "key34": "5M5C6DJ4vuvuBKBzRt5eivMUxUt833GLXMtdpyqoHFPyukczySwhMVgFmrPGi35a9Q1DwAsgFRAeT6a2BZN55DuX",
  "key35": "23XR4ig1qMTL991GojmbcVi1Er1BHV4idM51NCnP4W2rmTf8ZoCrVZu8Q5wqvjieRsBwDtfeXGAfbccJ3dhGYQXv",
  "key36": "3KNMCJAaUJM6WQMqWbhVUyWXLevpoLfxfFgyjJNUsjuXTUuo954jkggRS97ipss4bZRmkudW55zTcvZbWLj1jZwF",
  "key37": "5VaaKY7QUvnURSg64E4U7ZmsxpUdMWizhCoAiYkWwGMu4wReYv6yXCY8AGr3ykZcBiX1jQ4ZnmN2ycVGNuyX4B2V",
  "key38": "zmjZ8U5KQ8zMquzQMCa1kbw3ZskZPXh19Hk5BxhVLQLvK4ALAsqgqgTRqERaompWcgyXVKAm3kXtAzvg9XVR4fw",
  "key39": "6rH9128dhKNxVibufkX5cJFJC1Zmhpx3t1YRfa4KJeEzX66F4zJbCq7FCjAwYsTHFRqdaZ5Ypj5trHGASPiEBwA",
  "key40": "3BoY8sSwhxtRXW7FRrXxfD2VbTiUEJSyDneku9dZ1DrhpWnNZjEKCgT1XEy2SVVE1UAfCczeatb7QXnr6KKdmnbe"
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
