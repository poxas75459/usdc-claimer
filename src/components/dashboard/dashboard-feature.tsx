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
    "3AyfLUcf2qafpqCyUe9eiHyCtg6ZETUp98y1kPcTS6skVkSCu57nURYFxPGa3jkfUi5U8bFR4qBYn9q7pB4ht74Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G2Td2p6ri7e6JxhEJZ1TkiPguMiKx2Eja3iTSg7mXdCKq1nLtfHt9f4Ms1P7hydkjpV4xsgdUgfSkfr8AAWdg4A",
  "key1": "HZRwdMCuAwbHRcXkGgTyXm4FzXtwhr9kz6h47L4iTn6WWcwuucuBLV9zAtv1J3g8TirbAuYPTdAiUqvuFzZqozK",
  "key2": "58dWvzW8BD7ojdv9UD8ATDF9Js5k5dqa2tyNq7mb9jduWQAuDJZirLysNmypy7fvPw6zLYrbvFddu5KzGBWqz8PG",
  "key3": "3K9ixReZ1KecUN1gtosc4o9q1vjBafbfY8XU15YHxNiPLxzdfZq5D6NrRpXJU2VzoKDsYBjyhjviJ33pbyXKDETd",
  "key4": "5Z65cofBHWV4dbfp3sKUr8WTf2ek6hzk3xFFwoMZPAhnMWKoHgtB3B5JB7jHkng7JnrmVpwceeeq8rAzyuD3Recq",
  "key5": "ANAf6ikPd5Kevt4rj59q1VZbTabivwfsefxHgmZYXiE2NUt4ij3WYHWHvNvtUyY5FvDkQfutP3SyQcQvw62e8Xk",
  "key6": "2K4pWDSxr6GA6XkvH6sXwHFpZD255VWrPK4AGEYbRGUARaNrrg1N1Rz2ChTVWYBRFYkePe6EJvssuTNpND1PQ4cb",
  "key7": "3WYLMaD6Re4PaNpd5KfbDSBnnZMoqp5wwoZAg8jF8AnAKiQiNhefTpW6Y4FKn62ZdYYvC3XroZzssXaVZi9mzqj3",
  "key8": "48bzhEV74KpTmCF7sXi7urM21r3cundtfM96cz9MmQfEyM7UF1Cp8ZzbqM8DgVUDetPPB6woVKbVDLeEKAfzU9fB",
  "key9": "4GP8bBR2v6tT4bp6eaLTmh6h9Bw7tA6PKWZnyG3Wxz4mYbCSJVDakCL9PgkRGpuHvPEzdDT9foVrh2Fjn2R5zLVV",
  "key10": "4diwZFMKSGcroywkCabaaLzNcC8rc3N6YCU3xYCz6z7EhUqMKZFcCDxNRaqnHsTcFaeVPB85uxH7KxePeaUSQgF7",
  "key11": "3owcT3H6fBbqq62iDAxisZmjirqNtNCpj5nH3ebku5i8EDyinRxdVjPWKn8ZKVa65LFsNgUk59skp1XcgEC4CsGt",
  "key12": "5pRCm2QRQFARShmNdQX68UEw9AxjQrXHsrBgRU3kxQM4TdZS5fgaTW5YUEXejEiyodCW668q3gW61gDqHNp7u4YE",
  "key13": "3aPuXuG7ChBrg6RGEYsXwr2nRzCntTNU4QUWWhSQVB9gXQMrFUpJmtqNn16r9PUFN3wLkbZz9ytNrNGNiX3AC4R",
  "key14": "3hQbX6APyKkKg4YJHzhw9KpBJLtY4srV6scXUKhX7ELAov81qEspaaoZsEScKTzrWGyCAW83kRsHGVxSiZVPbJgF",
  "key15": "2HmXkxVVgxz44UauuQ5zaPcsEAWgmqjB6zjDfBaksQhPgxkU6nfqd2YKk9XfLGorPSW5kvq1W5S6LtQqX5rZTWCR",
  "key16": "2VGe494ABi7whKXqefsDQ1fdo5utUkiJqKJwzrEAipNhPNadm6tDCdnQkBvVkUKeYBvaVxS4XQHMkQWgzRMXgMp6",
  "key17": "56pm1k7HuiKCTXru4oNvGy7xrXvvCScje5LEG8RDN3dJGMUYkdVPCGLVyXfikNvFKnkVuizj7E9aeo99arw9oUoA",
  "key18": "FH73TLT8537axdEq5Uhs43QRwuRh2oy4Grg6XbyFa4uaznLgTpAvbthzjgPMM2JA1EsHnQe8MmqZTPoTQqHZhSr",
  "key19": "3EhhiLe1QZtRZHgC5QyZs8rUMUCJmpBXWeA4RR4jqG4qyHkcw7NZGxQsySWkVfV5cq9b9YSYMSdsijJ3se4mh682",
  "key20": "2J2KbnA7Q1d6Tqie6eHQR78XgkV7KzQtPpyoGqh4YuAEHimzqDTgxRr4GWC8uNsG5Ra7WoehWfoNza6jTkbnLX9M",
  "key21": "3gKyM9U8ujgsBgQ6x6b9QeEZAW5bGRd1gr4gAP3hRvvTjkjjnWDDnHMzXiyBK16sVTdYMmQJJvuEB55kddGRidG8",
  "key22": "2jnHCEkdUDr8kbCpEqaea38C1Gv5qKYt7CBxybPBZz8ENiSEQ5hMS5PhajuL79ssMLsBA2uceM31ZqqNuPf212Qw",
  "key23": "Na9ws7fiETGVrxCZb5GMTv2axHt7U66zpW81qfKWBGpYuQnHqJEHMWK2KaoHqTdiG1zJeffqDWtMthv47TRofdo",
  "key24": "Ne6q9ytEbjiHC5CvMx9eRxhuKtksYiByjYmg9iP3QGE4XGnciHXLAwXarpFQ4v17XtZ74CarcpEFgap2B5UTDDD",
  "key25": "4PDaF8cQEFNcfxE4YSMkt9n5WazM3PciWeWvhoRmEYpkSTHZLjpAs6HP1MptseBCAdLaoAqvPrqD4KejZDmMhafV",
  "key26": "4ik9VSts9Us6cUQGNMVpboSDYbNeTsfK947mxxjw7vG9UHUkNeajyrzyNcYCqMtafw9YuA5kaNTRfh3kAKgYWquw",
  "key27": "5mCBhNkC65jrqCGtPL2VAXoJ1wvUJJGohbvQ5EYfZ9u5FGj9zzcDJEtQ8jKFXFPhZTDKEu5mTKtePpdaxPykSfni",
  "key28": "2ndHBmD5SctE9ua6cKHvvWobVhgrjXEnHaHpWXx1Z9nHFjoe5vkHufUpPxNwfpYudAaqbc8CoEvHsu7BMgHe1y5D",
  "key29": "2WmrhcCmwqqfYVtdyeKozZJSB85qYM6v3GomcYj7fEgUXoEyq6xoFEPTTsGUc3mWwxTBjkCXQAF2i6cp73LKf7gZ",
  "key30": "4E3ustk87xzub3Q7ZzP82zSUjjqW4XDnfKSACHeZqyRgX1EUn1D63SUcbvi1tqfUC17cGiiN52GU5rckQQLCAUnm",
  "key31": "3djug62QF324GCUMe6S6x4EwfJrNn41KXgopUbyP6MiQKSnGp1dk64giBW5EBosMbd9DjERX4rrfQVfUTRmLK5EQ"
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
