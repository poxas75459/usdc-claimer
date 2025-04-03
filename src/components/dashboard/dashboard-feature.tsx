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
    "4vPyJrd9fCZzMbdVb8bcwvGwpaeE2weQi4sM1dSrCgx5xjPnaW6miz4vber42y6hVkMidyrgnFAJSwf9JLnPXFaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22LtHBKhBNSMYZVpQKDBp12AmcqcQKjiXKCi7NEmiM4wy6Mdy1BQ4VYZsW3HfxJVJdpRcQXfVjBGqucCSoKRvJX3",
  "key1": "3UKqeZNdGCa9FtaHDicyGEN89DmMwLSsy8j3CnTj8eKannNQZS6iMd27phKF4SP67jfBNApVSeRE8ESWnvRFh9Ts",
  "key2": "3A8rgPH3EhfX5K4LyJ5YSNCECGcv4LUBYbpy8KJdpPcBLPNmu6mAAh4ceeqsntkF3kJAiWEYjvYg576qFXWB8nQ9",
  "key3": "59QeeFk3EKfBpV8eP72EAKFrqGKhLfTjM7mCG8G7JMdipKY4yqZ95LWLgvAc8fTuTWN9kAZysC4K9yiMFun3ZnrQ",
  "key4": "5NGyVd2i1CVc9jRcpVc7bf4ZbWiF6Y8iGHsqpWRsQ776nEEfaKyKfstaXzPRxyq59RZZHTdXH1ZazxUzXd9wdtyU",
  "key5": "4nynMhTcSe2pCwEotB7rBADgjXhjd8F2Cn3fSA2u44siobwEhH3S45wKWHSHvARZuaKtcQKXpCYuRTya49ykHFyK",
  "key6": "5pfzSbCdhXSoPxJpH6NzR1JzEhW25nLRJH2acKAm4QJBRDw2yE42Zt4WFuosUZa23w1BGxcrd11r7DtU7KERhgSN",
  "key7": "5DdXb12TQVuwf3sJzNxYfstNBNrfXufzdvpLtHEY4zf9VH5fnhvoPh2hHksW765nyyeCaYx6uk6YLTJCwioRu5Nx",
  "key8": "33AQ1Q3zqnNxGa6Wmh1WVWWZL1FwntttGpig2YvDWEUGNNHGkRmAxUbj6spCGNyEx5oH4Naz3Loo1i2CMznnMxKk",
  "key9": "2rwy4E2aPs8BkuAjp7qDzXNJ4QDRwdSS4aYEZYCvA7pwvt2Nk57XD8v1kPd8Vu5ueVzhRJk4cFbgurLMAhHXzQA6",
  "key10": "2ARTW6odv1iEVoodUeRKoioxPQSizAhQdbbEUUktPT9FM1txUfX5u4tRoWRZBx6tZrFJyhQr5vUHNPB1n7ErV3mF",
  "key11": "2KdpdtVZT4dgvko2GsQU7UCswz4wP3QuXGHDDjWyp83AzuDtKpxRXZJnvToJycASgwKjLBFJMB1nVZJuzCsprfKN",
  "key12": "4eTEdW2wufnnuhmbq5yqKyTsUMZzd2YtMeFk4zUYyhZiSwh9x5L1USs5GPhupnw2KNVZpBTgnjsjmAvGJKonbw2e",
  "key13": "3ybQJwyy1JP6wkSURXZmjf8iBUXRtBM8PxosajCiG5YMYaXaKh2Fg1h3xgUhzwdHkxCFFpvrEqJU3XPr4ZB9KEoq",
  "key14": "WPGjhCfv3Zdz3b5tB6rWBf4msHSTCiywMo8LqeyuhQTY6SmvrUgBJ1KhLBfJyMxwx6HTd6vbWZFr5dPieVMyuqS",
  "key15": "3fuBMh2ZmG9Zdr7LHPsQYxXqSo6D6iR1aaeWUjjmou1hRcn1UGTU5S2bt1jzemhGHPYhqXoqewEkeC7hyZw2THEe",
  "key16": "3CVuMsxCexdzvGKChyPGDsjDKn1thj81q8wv1oJw9PkzS9W5ftURYhbyLWfgcwzsmzewzu61bGdcyM17i2VK3cUZ",
  "key17": "NYzE6CJg33uqJZQf4pwESJAvo6Qk7faUzDPrFmrzHRsTkPneV4md2n1fA2DFzRbvJP3tYxmbCaDhE8wSJXZJqmp",
  "key18": "4dkDVJQK9deLfVXMtNdhvCEp996F16VaFCKZv3PiZwn2XJCqfq1zRc3vqF9e1LX28dKPRiGJAeFdqqvM3f2VKzYV",
  "key19": "MxiKJbAZw8eWeQ8Vod7xW6VafPYjyQLTLVP6P7uBW7KWz73hCUXx7YkDmMry3gWR4YpLDtxkrPESiYezPcXQZWQ",
  "key20": "3LC52AhK58ucNBBE9KRK56swVcBu3AZevyoiaJLqVBsUTuUZdKgg8rg9t8RdQLDTuLVEajxFi4i24aEFiAkAy57B",
  "key21": "4EcHwR8LLpbhQHQnPKnKsPgS5LLLgSpBvQDVkc5vcmRUbu2ehaEJLNFmJTc9xbDZrnT2Z5oSNSi5UWzhKJQSU2uH",
  "key22": "5FKwryziy1UvgGXhPK7hJf5BuQsv6RRPMWEZdKaPhNZDn72aT46T1q7ZM9iu7EPLGfxBx6gACvoJUiGfbMjuLjJq",
  "key23": "5Skx9VYQBT9TbTSpeRt8SW7PBT9CtpRBqE691AENS13gcCRYHDpxQsXbsWPzWK2suPyh41uL9aYU4xSCxCS4DvHN",
  "key24": "47dQJLjwwAUVzUZa81yijiqrcMguKgSjyJXbiDtKVbghBvgD2m7NLinj1n9Mgb6UNGCTW9ULJF4Ruo2Hte19Z3cq",
  "key25": "1J7x9u6aLDsaQwKdFTCkaw7noXxhvUYCEqVizEtXqDrhkAitJN2bXqqtSCjR1mt98jkAgtzYfYzrocDf5Zv2kLE",
  "key26": "2DwAzrMYi8ZVTeT2Nu3MVZXJyTfjzvPVieHxNJWax9rBnpLjr9AmA4rmwWQScMshZ4KFFaoTNc9GoNGLGBex4aaL",
  "key27": "5MZpDu8dxY5cgf75BedPbRGvkNYoSn1foKkBtF5UwW28341JJbEU1XadQxoLtM7xZEm5ANGnwMF3FavzCVQ5A7C2",
  "key28": "35tcvA5HEcySGgyHJy7i7st54hA5fRpKoCrtbwYkZbaRniCFHzrUoL4g42kpimrYdrDbKY7E5PXC9nGC92mmN5s8",
  "key29": "46fk7uk161gqgR72B7pE3zKEsVRCoGAzQENGtZhBpUUADmS8vJg9gHVxYTrH8sk9VJDEnKifXNCS2rW3kBaP5Rxn",
  "key30": "5TYBGkPjcrjhNDNCbGVdA2LJEuGzbGAa3EBrccFidStWr6R723xZ3kyyekpS7MmUA3VMLCfQBMgwpK7EyaPavDBZ",
  "key31": "2pR3ekGTM8aXdNBuZp9TjeP3DJYocvQLGAnxUAAkXSYcMjFFi9mmfm2SN2qjxWcBwR1Y91stk7YMBAiMeNG4N53P"
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
