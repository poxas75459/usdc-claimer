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
    "2u7ViBxLnmPkGDMGRWKVc4wT3h8S1st57XuVskE5dwKg8LwFdsd1pPXh9EtKDADd3YpGWAsyY4TV3waroL3EDErv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CtBzQju1U4T81TSAQceAaU7AzLMduMj7ZwqFPM4VSLEQ6Fw6jLDDa6o8jH3ZUZfGtVVnEPqHSFqxy7UqYg6neaL",
  "key1": "3yhF45kRMsdgFFoWK5jCEFaK29ybxSod93uMjgw6xq2Qe9S3U8KTxjziDphVkUzF6mxmkThEaD1UjoowazWy3QEF",
  "key2": "4zeGN5bKZnry1GV1H541Tnu9n62Xvw6wzpahhR3UoFZjF4GCKfBYboXsNa6D7xtd1F3fJP7UqBFTE85e5PYFoTCm",
  "key3": "ZjciwYQeuXT7qBw9DakZWm8oBVafGPKczteEHirWupswiKbvHXS3MmLPZZa8iBLLBYNsEDeudhaU9m4mpPAJh76",
  "key4": "5K4AyTJhCBx2BgrSPU6vUquteELCjJwuXuFHkwKHoXP8RKMRv9veiyVeskyxDfWktftyyhzyTd8Mc9n2zcHwCLWZ",
  "key5": "2oWEdTLeX7ZiQ51FKjQFnyGM8zh9HTSsMRqYJ54peppmRzMxUp82uPWttxNTRjqhabxukw8ir9AChVc6JmPV2xkR",
  "key6": "26vZ5XfKPkaATa4qqLo7Mhf1yJLjeb8F5cHbb4ZWZmeKHHRB1qUyot3t4DBTUCt9s1Ma7LhXvde7KgW7Pe1eqQSk",
  "key7": "4V9L7gEXUyGgtMkFhYGoR8estBg5VKPSgt5whrMrfr1MuCAmfVtneubGW51WnX8nHEXF3RMppuP835Ra94Z3LRvN",
  "key8": "2FQt5EKwhpkeneJbmCyP6E38a16JKtPLKAR9QTYX3gVhZreYJw2yGKPDzVtGkkXHZpnh5c2L5nASfaCo6FmF4ckE",
  "key9": "2RarE7qKHS6sxWxC5zR2oCK4Fk9FKFBLB8VWnQdRYdM8PpdGua4gZiRkgjUN9vgyVQgv5th5U6JLAh6SDRV2ogWY",
  "key10": "6mW52Zz5GQxzYVVUbdrqXoKnD8F7ddGLpi4FbbCJcx4yaeCxCux4YTqUXQdBF8Zo4QmMSK6RjsuvKBu27mACKBz",
  "key11": "5RS4o5shcKBZ6ExuFtvzGagwcbp8ZxMDtHNmjcGjedmWLWfFxatQNJhgQ2RVEcarZYjpKXpc2U8T6ov2XNMmimKH",
  "key12": "2gBayLUXUeZAo9Ed2PeTCJVrinbVK5N4zFySdwZ74zUsXqbnUxNUabQ3EWqtviQbKZG4PiVbAFAbmJfFdapq4Zdg",
  "key13": "61Hx8NxG73ZwfbLuXikEbpeag3zNj9VVdJMkwbz3JXw7AHwRuoShXntXJKxpxFUa4cJuHPT4FjXxydBuHELBgFXC",
  "key14": "28BqjyGc3mp3opDx5U6zJux1ZhC9pZKzzrAfPzoKa8JCKSSA5coq8aNLiA8awNRfxWb3JUecuXgRubQTqdVa77mi",
  "key15": "4hrq58sXAwJ72hzuYky5SQ7PYE3FczkazgtfNxSRaae3Pgy2wmgkF22DLAyTyV5dYLcLvoqDzoUtq1qgVt7Et1Cy",
  "key16": "3KMm2a3kyo4LLMGsreStPurdywqoV5BAMuxwF5UatatmwEsxsnWD2ExHKunaCHeGLjgNCzXEHJP99bVNrdBhfjpV",
  "key17": "5xBGjpc1UgRZuQaoeY3Qs1EuNP8uCUgw2bmsNqnugrKeThsTDhvCrJZ4R7j5RvYZQ7K8p3Swc16Z4rdjZdMUbp6i",
  "key18": "r9cwtPpJtFVbufCkTwDNoNtgdhiwsqivUZHVvTnyjjQALroXmHKCo8ZWG5hhABBrDEnoW2zngowURSWDBaHPnXT",
  "key19": "ZToYYbqSuGDdrA8gdai9buF6D7UHQboUcmgCkJADx4guAadyBicJnUm44keRbdoGmtzQCbGJeXLxUSmRgymu6u4",
  "key20": "1NtFsjSXrRPFdvRaz3nXRijAkYPmviFKKxHA3hQng5yB3m9SLSwB7pbrXM3G52UBLxeQTXMmvtdPmQnprAagc57",
  "key21": "dfcAvVJWFXgvQuSMAeHK4ZeLL5PG3AiYYQm8qYatxnLi1MMawdVx3Kq55JzwoYjADpdNyxBxoro1mpEsxNTcQrV",
  "key22": "2tJh6uC2MH3izZ7f7hvz6NbgUEhs9hxiNYRckmkPJuMjFNfho1fvnWoMPyEfJy7UiFCjTxibPUgD7w3dv89zh32A",
  "key23": "H75A7Jhs6Ga7HTurXrSm7AUAuuVDL4XxzB76Cb8EUKjMfG1MLk5a29mnefADbYZeDAjqz18HoM6ARW55Lhqhnzw",
  "key24": "5erL16MnrY2SJSgNuGEuXrAXUbUboydUmmxXb4EBHN1WFezAFKYPyZr4LdRxzYbQXfkpRSb8mFcwsHsEwpsVaLf9",
  "key25": "4SJKNzB3TTNmr2Gt3cACqmSZxKUqaAq9dzNKzqV64ne2JYsi4z7YpXtAYMvU9vCYhw7sYw2RHczGgnWm7kcv42du",
  "key26": "wkedCLtz8Jikaxh8z69Ba9ZfM2edLdkLCXf9t5R6vKCvL9vdzPf9QH7wNcqk1qXTBWC5U77bW6jrvpnxh8VWhGP",
  "key27": "JMTNwbcdKtyRtbeoAExxkJt7GqxN7MvmsYVVh1We3oypfdaZNTnDUc9zj6RdF3LfWZuKQgj64Wd4RoZ2NA1WRAe",
  "key28": "53NueKvQtP34EF8zYPapJgKoFxeKNUk6Dsh9BRg7uJpZoGu2BCaCx9dh6GmVaE8rSzkhUfNCbM2VaxUDvi4EmzqC",
  "key29": "AvjoEjdQ6ZxD7jQYXca3STxfe6TvigsDKk6XBtQ4roXKcNxXH9RUpc6GtgENoGt7hR4b3DNuW6QKwTV6RggRyLf"
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
