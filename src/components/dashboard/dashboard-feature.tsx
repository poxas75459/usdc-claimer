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
    "458wxVsRR5kzmKFEf8X1uNwqfYHXwZ3qW3fG75Vdcmy61NBrpSkkJuj2MmBZRBsFrFF2yPXZWAe5a8ShWvcBSjSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uL86hL6RXrvsCpEaB4n7uirTqcBasihing5BgxfN1fb52fHxLcDs5wdd2qgygfsDmB7qvf1oZmwMSPRujD3Tgko",
  "key1": "3efrEv74J6KBbF3G1znSmqyR7yCyqDaLNWcPpGQbFSsk8BmxdiXBpgLGqxL2Xqur17FcGZKoUkaZjNUuZNCYtgFf",
  "key2": "yh8i34oj8vXWixSe5dEMdin7ZNTFaEJJmShqaQEh1zVjJXzTTBcBLjZkKFA4fZBaEy5ChS7pPemEYLzANgkW9cb",
  "key3": "5b1t7CoiKQuQ3m2TGzEzEkQ5NgTFqznLyhW3KbRdEC4bvj2nRZ9nggShWMC54LfLu18LwfyQsdtXRG3Ju7nAhTz1",
  "key4": "5LSEbnwcQY2QEg9tR8cML7mevPgP4PsTEJuHjoqC5VH2Qb7qUTFPMQTVr8GwGVWpxhB4ttARDLstLjDAYqmHibdz",
  "key5": "57K7JibAXTwzAQpqfQoqKHhWtb6xuQQTWkPJrBRorWrgCB3SQ7EH963HHT4T5BopjNgw4WH4ipaqpeZCPZqxvjoN",
  "key6": "3Tc2TaWcgYR29HAP6iobfjmsX4gk5deQadVxzsJK8wKgbJeyJXkSz3V32fUFSBENcExfE9z3XjsDJN4PM2CF4ez8",
  "key7": "2ScLPCejgRSsCYxhUjczc28t2RDRPGQbL3fRJGVDWV5G8PtWUZfGB5QMF24ovhD4Ep25UheRWGEtVNnR4uaynz9d",
  "key8": "32o8Yjy8tnW35sM91Zx1vbYAVkmZLCxzmHFXae4vy6dPwT6AzpfVLn5dfZ5NKE5aZf5r7qCg2uddRoEGpqJpFJxU",
  "key9": "5NffqEhVMLTJ2tJ64tDJr8ZyDT9XGiRakh3zcoGvdyUWMv9BpYWdYR7gqHWBGAgZehwDC7yeybwkmsSSYt77LSKh",
  "key10": "4hZVnhFLRxEZVkk4HvYfzDNLeYYJ5DjSkzsUKC9ABEPbqTy16a3V7ohWU7dGYuCNMbdZn9GLV1pKYPR9YwjuByfb",
  "key11": "4no1QjexXTzYHqmddDA4nSi7ZoPUmF9JhMGwPvAiRkdgxKjdWvgmpx8MPQQ8MwdG9jhfjFWEp5FrA944BcoNBWEw",
  "key12": "5oLZEQTZanHyLgdg32AMdkY7BBk5Q8RbTKSwjrictvW6xFBEorPS22XXyio7pPEWh6vuehabAMHeXwUnARUPXnnD",
  "key13": "5Mtfmx4jnuSiQds2oUqwhWgPoWjxcy2eAvLeF5q7kwEuQd3udJCUfEToJ8CrqCx1quYU5873zRXF9L6E9hhpXG31",
  "key14": "2KJoYWVqMyybXC9LutrwkKD3pKUd2RFKh648PJrnnF2Ld15TnkZT8GqEvxpWW4rwhqoqEVHXspiwFjHuttrB5at3",
  "key15": "2P3UDqcXiquZiUZcPThusScS8QboEoegBEnoEA2GYKedWXqmfEg1dKrW3RbCQ9wMZjCWpoAjMyH7dSZqUoWjF1km",
  "key16": "2gXzAGqg1b76NcoCjvvoU8rY7VL68oDRQagvwmdrScRqRYheiRWZetQe2JNaA6MGrq7Nu1ykD3VickHvjKqk525w",
  "key17": "5dddtfRFwi1bRhGb61aAd385UUGhzzyiWovq29zo67QSnRCHm8PgHhpHavB5i2LusW7E7ucojtNgiLhTf5ri9E2k",
  "key18": "2u5pX4AQUnFtJa21kfYtNJefUDzB8F8JJxBbDux8fPLS23xC6qHrz7e1szWAyrcqtgWrNotn8MFPuepWdefe72zp",
  "key19": "4aLw9UK1jtZydBsybcvNnrxtgVUJBWPrnHieKbyibT81rvEqTLrH9wDR6b9jd56bTLfcYs3u2mYoiKiLaBNJuvUw",
  "key20": "2WSpA9Bz3sik1irSiZQYGsk1EXpe9NcZfirPGmr9HXGhmv9zt2SVsWHvwEoYFPugiWfQzkpgaZQXMSvx7ZDqdU4R",
  "key21": "2LSvmGcd9TecSsUFB3bt81MqExQsXAz1mKkiS8ohyJ93DcqiPxbwU4NNkV2P4RsUMU4z9PnBFMeKLCFZR2r7H7C5",
  "key22": "3yo4a6jTkVomSXoqDPQ4B1zAAY1NYEvihK3mizMCYuQ3xfTyjnjcxYFZzsGaWTe8N86tAk2aCi7BYwBT2VbATn15",
  "key23": "mXtpr8eqF9yYuFQZbCFAB8NGwGVrYfo4vbahrXPjcEcVuuCCdF3BXFboo8rU2gbjrVtzBDGetnjv4izoZUiAuKL",
  "key24": "pGpazE5wkb39VvFW7HjHvmAcNGLZevw6eyYMaJ7Tg5LdoR76ipL4W6ZnjeybDU8reH74L1qsLKemnQvEU6zpLUf",
  "key25": "5mJvuXicSAsi2CbkatBd9zrXgtGh1eCHXP58raoCqXG4XaDNzEDviaBkwtxxCiqppMeGY2fUjQ32ba73f88R7GZM"
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
