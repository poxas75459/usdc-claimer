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
    "2NotZ72c7CGRGa8wzEuek5zN4ehwGeiNhqY3NrQS4qU3Koy2u15McfTn3HaRmxP65YxNP8tEupoo1QCmURd2ELJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w4UkaNRNTLcNngPyzZGSJRkujBhBdUTf2wGtQsAxe7sdnrvD5TCNPwQs1R1D49Pnda6FYSccMsxddkGGmqsM4Gw",
  "key1": "B5yvg33qPchioMfBvtNGVk5F8VYjVYGUzGfirrUB3CeTgvbkSGr6AsxNor9dgVXZ1JeY9nHkdq28qcgd9n7QjjQ",
  "key2": "3TgSAKJAfnUnVdk3qR2Nqz7HTMmqQJiBQMVjJmiW2ZL5j8LGxZzRzXguopJ6aW8LkBqQ66b8srehFfAAkjNt6b8w",
  "key3": "21Bg7VFnHzpoq4Nog7gytqyBhxsUyX2i5sRmjHjGSbN8DFbr9KHsqhpQwUoDYfxRxamWix85eUhw4bm2ZTjvWe8H",
  "key4": "42zADDMW2BBj2vqZiaxiPwKZuQ4yqa6Lqtt2SKuc9JyC8wWUt1SWK9EjQ7EtGZt4thmCA3NoECt7BLnzrdNoWN1H",
  "key5": "39rrUbTm24bkcRGhysVkKiJJEDfGz7cnkNzyRxjcd1JcwVtJvYgihMvvG26t3XSQkvkhVyp3WH8egdcD32CWoRQ4",
  "key6": "2W5yxw374PQWiEfkPxKrMvpgNfJLP4m9NpH4sAUCN56KrJ9sGYWjJe4xHhUPDXxvtFmWWCMPM9Zarmssc8sA8NqU",
  "key7": "3cnZC1StFmRpaXkVP7zrbHDzhGtnaPfxkEnzjXc3hdmUKQXMpEHLC6NZ9zn2axDN5DHk7BEMLX9UFavVCaSiWB8L",
  "key8": "2LPbGmZAmLQ5RLcxh9c2wECtRuY2awTRuHxSmFmnGWh47CoEJPKHtEohPRu1T76PnXXzjh62xh6RsznmnFPr2Npb",
  "key9": "4GGACcPGGt56NXTDPo6Uh5EfGrSDZ2L6noLCG2D31bUJiDUhjqTLi7uL4pzEUfGUJcJFH338wXfiermQi9MeLnFU",
  "key10": "5QaNkW4Lz8vKs4HjsSTzRdgsXB1E6gSJo5xt6enn3bmEEFUjFf2UsFAJaKoH8Wztv75F3zam3cUNAwFRQKiue21J",
  "key11": "3NMhbrY81d6AeBAbG7CgcBMYpkdZDC7KM5EhK1v7Z1cMDB97yxtqbLcyoizZoZJ8uSsCurYumZ69JLgGhDyKJNF7",
  "key12": "5VE1sGqS5qh5phh6fzFEHvzSsqHidbZsJ4KitQSUjbde3Kuxgjg3mWfWyTQdYZf5GY7JDrWzKFQ2dDKD1uvEesFn",
  "key13": "4VyB2M4VKuHSRgnVouKVLu8x9gieoxRkoeLZgLKZRpVo7e5ZhZy3hzxgLWppXQ2YoE6AXXQwA8E1UzN77SHcX1Zb",
  "key14": "5P6nkqNsnoHfBdyuKwohyUFtMvSjgYe57BqkbxNZDYQDoiLjKJRmpCmxs2ESpgsqqxMVvDNN6SrkeJnDCe31P1xN",
  "key15": "hAkWqH7aFtQjDYfckeM78aJcAcGGq9jZEqRnfqdovNyqDaPKH9DPqALPsN8GiH1zAhpeLcLmhd66LUKuNNfB3iy",
  "key16": "5a3yHsczKiNygVuzDaMxa67EZwZs7Zzdgq7HjmrFnHiYk7xCWPx46XwxphVgEXfsscBec4ARSHhFXTxNGRZ236DW",
  "key17": "5VrHFUDGNKFm7BZuesKpo8bBPu4t3q18R6scq4dRqEai4vma8gaGbXviMgndv3VCCG8AyR7kWwZx9YKsfCeAAvWP",
  "key18": "2ka3nT94sUXzM1fmNmBEWSk3U3uqS8TayWP4e4trkLdwDMGfW5sUovSpethSgJ7ZrNiDNrX8QBMJqRyYwc58FiGN",
  "key19": "2VnZWDLjs5QzsfnFGcucryW19uri4Hdx4UGEmDhaRyVUBHyycDrszYHZraZHqV3BJq1FAz8kwqkSbSNe1Ru5bWki",
  "key20": "35DFYXTSS5MDzajr63r7WrwLkjsM6BLXoGhJ3Rp4Ps6uZ4Yp3PH83yeDBrTF8PB1pWbUCLys1Rk3n8uXcUbqgSXQ",
  "key21": "4KKbnPGSGamf19da36HE4QTZPPTn8apt6RkQjZzVbLSj9LHNGD9U2NUCycLJ9Lh19DZyn3ByPVnudWBtTaQLwHdm",
  "key22": "3siFQ8BAmSwGfLoqLdZ1ritCBFaZWnGcDrJZqskWJEDJ2HhgC9bSH7GLTJsVLZJQAX8VjhLMXMdZW8CXCGWKtbmC",
  "key23": "3mx3aJYaTH6iNkzdd3H8BWXbAPBCQWx2gV4dGb7hi1LhA2Pg4vWcMnFGoSiQ5eNPN44n27LuuQaKzUycPBoEXJk4",
  "key24": "33hiL8yHRdyg8gBCfKrcDeFXZKHHXPGhDceVgk6CozgKBYmH63NPNMAtevrtwijWXYTwVEdcQA9P7wNkWa7ZTVr6",
  "key25": "4R6nm7Rn4biidBN8o2AJByWmoz9bzXryT4uVbaoEijmuwvCos5BUR4FZkLoBMVJn8aG9XiSLbSgZHwU8VqNwiD6t",
  "key26": "2z2vFb5gWLKgi2NsKU2NgRYAjnEezc5xaKoMgfKQY8S7UznR7ttupGR7GUVa3A1551myL7Y8QSc4cATUV1A8cqVT",
  "key27": "3W5Vi3fuNRr9aEYkWuNTnox7LPNzbwKKMNz6532fYzTkaTV9csHFd5HTzizMsusSc4yKBuy1je1iSrYLTvgt1rJQ",
  "key28": "37KgggqQk8EuC5Z4ocH1pkoApdZKvaYjuDDwmKThr7gX7eb6FfDJMXppmBP9N5L7B3zUrxWUww3JvfqLCszKjPhU",
  "key29": "3BJRtn2iqhR7NMxntAH3BWW7EchzHxP87TEBE4EURUi4Lih1impBnELMBpnFh31hk99HKekr8qP2NEvBVns35rvj",
  "key30": "43kbDwuWfdgRgAFvJxJJLy4mG9mTkzwt9HwgBDW9HPazK6L7p5GTYf6Mct3JEKZC8SYcjxowYSqkRNjPTtfiU4uN",
  "key31": "2zCEPg3jbKzuF24K8YJyqMjPCzSd5Px4tpTXcb9EN2Q1FV2UvG6fLVuPntG9HCz8WLUWusY4GXXCLhvrbRB6DP4c"
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
