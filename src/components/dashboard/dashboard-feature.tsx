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
    "2toWx8AXYY6ge8YNuc9Bh8QrR7cDm3MuZSWow8xZjrgh9q6EziaCT11EXsKpSubdQkB8xJw2Tc3bG8sRgi39NFaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oLRYSwy21p18aUf6uxEhAm5pjktDVum6hJ7ysw5e3zpmUiX4GDxijhQutpbtMDuYFYJmSookCDZatRSBccZBSEP",
  "key1": "31Ly7LhcGPa1qguCP6NXP5GnsbEtskixqnjncHMsBcZn4GCN87qyPM1QZFxeQWcnwoi7CWEBgmVrMngmhkGq3mmW",
  "key2": "52aUhjawXcZKfewgRvyC5VD4AQhmP2ii2WxACz6yM25i6b8a3rGJuEiafrEPkBQzdZW4FXu9dw7kLcgQeF5Z3XPB",
  "key3": "46nKFUCcRhsSnk8tiuCDzAkRY1bwRhRF2Y5MDLdX2cBWQigR8B6RRjictQLwHgdko7edDTWsJhKCkDHLYumDmBrA",
  "key4": "4ra74P3LAgYnQbayzdXnWTSdNueBScjT9K3w9W7Pav2qvSqdt1ZpkCytY1fGiYixW6eAmw4CHmbuZirt4X1VzgZJ",
  "key5": "nVrngpHUgAtSBcVhgLDtkzmTn1x97k97uipYtUAmFVKFbcoQoVj1sqx2wHXT3BoVS2y2TTjv7XmVND47uihFAeT",
  "key6": "4gWQwKXvF8kyPQk1EbDYdZMFbD9G3N4qQzSAP4j1XscPvmPNwpP5oqEdoMyggEvALaKHfVjMnFnYTrbQMeUKg41v",
  "key7": "4UES1dLFrutwTM9CdQwkfSrgXQU2UWkszwL9imbYqw32QDFxdLiB5oHGw5uFokD3MUtL64QWnmwn5DfEY3Fr9AMP",
  "key8": "3bpqDaYtGjC546fhx9iePTVZ1dp3qn3eeHxem6mCAjd26ER9aPVNkpQ8foVgVYiwnGqE6ZTaKPWcVXFzYYY7uoAm",
  "key9": "5eAMC5o1pYJGaRVh964pim8tvedYogeNru1VxntgQJ1YGmVe2zY13wXd9j57AR38CAG7ufiWKjYjwfrgY9DzAPbe",
  "key10": "45GcqRQXU49ySpUuyui4Wr5o7JtQqzuesycP1ShpwTpGRWNVck8Yw9cDE7m6ZxosbbA7Q34f8jDyMTvkL41AUhLM",
  "key11": "5cpcMfXwsqd1UtMFjYRbUdaKnySVoJSMVwg15GzPpAd1HnS85vMA86wRpKxGMaoAaRqhg5RPBdriBdWLKguBKZdR",
  "key12": "5gWzmY7cM5xbqGTLC5CmRNNaUH2scuGmVJi5c54UKBymmi8Tb8zXNS93Pa8Dsuiib3qBWGLQ2HxMApWbDkD1xJsX",
  "key13": "5XVgLhXd6Gqx3bLfZFQXNboJRxz6k1G1RJQd1jxtecucM2NHbedpXkoBQMmufYwdAhVZCByqbpKAc1jv65wNfV6M",
  "key14": "2E48Zr16x79pqvgtGkq7MiDUQwNL76BzmnZjM2M8icJWgcNxbJzbcZzohvz6mcpfAkFL36CpJMZv5Fi5UbLTDYPH",
  "key15": "577wxJa8jJ5TLLNgv1jzvMgA9Q7NRE9SsM41AgvqG7tKFsaC1vc3jHLPQzTVDfH6L2siKJ9emmZhQEdwgMPu2Wdm",
  "key16": "4Au4E4Xsb8ACb68K3bMgSVBVNG7bNbCoyggq7WuwNixMjoLXuJubqa1626Me8ZGLuuBTmAcQubxDgbr5mhYAxzJv",
  "key17": "2mtGV5pruJ7Ss3uVUSTvfaF6eRFo7xRxVZovSo6kPUr7m4QxNdB7B3g2gPz1JTkJrqRXP8wXhQUhEsFWQ2nMuu4p",
  "key18": "3Ecgssfg1x71wfXSaLdkVcgJSGLumYUbNEjz6iTNgLaVm7yMFUT5MUmK5nV2YyQLvKK3TJDL3RfjWeKJYFouKA9K",
  "key19": "4QDHe5XrJqwSSCHhmx1MLGAnpV9442EYT5B1Vi67kitKNzofSkcwSPBmiSJDhZRieLQQWGtWonFRghbQr7j5uvNP",
  "key20": "33sMiwHsYUyBJ933RcCn4qGurEQq8ZXg1o3ZXHjPumxbg6bgfLxCM5WkLiMMDXDxmruMuFHBeFeaLqc68d339k23",
  "key21": "4t2Fg876YDZjPJ6UVbyhDKGm7C9AYe78nAYDotaZ3rTdTtvfsZyzcbGS4T23PRDpwsRdggcDj4A89Z4KtNpLigor",
  "key22": "5BbKqH2ok8Cwzn8SshauwcEaw75oSdyNqRLqRUKeXfbRE8q4fZLNtsd1d1gKjTq6HbuRQMiBjz5Zft6aRq4frDwt",
  "key23": "4vA349ujf4m3g1Wvw9ySBDVgynKg3ZvDDKH9iUG91kEzEoCjeFMFw6cHujW7Kfh79S1U5ZMNw6dgwCxjTtBhvroe",
  "key24": "4GrMVcJ7zpJUAmT5CmCimxRPkRdUg9EihS3okPSUkTZUih1TK441u2e1jtDdVZxcQDxvYL83RtXdx5mjMee5RfN7",
  "key25": "2q6Qvj99PgRpthB3mZ1Pen6sL4oHyzM1V1SjZSKZiaJ4SEkeoUnDa6KToSj3NuyXsrJsDyDBjkppATKfLMXdPZLX",
  "key26": "5Hs4HcXDgVTNGAtyJ9M6VAPwTwkQUUtmKAAL8BVywAxE7nJaBBK7NHoqjahHbi3kbwFcPbeNqf6pz3gfD2KhmXnj"
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
