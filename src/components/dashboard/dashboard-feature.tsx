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
    "3e9HddftL2pAVRom7TpNQNrvkL3Xyp64PXv6LzRpgsBu36sET3o89YMFNbA9RzrZ4Nhm3Bj7cKLBSBW5gnGyUiAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7YFHVFX34ur4ywymDG8KskkR4ZvJSMHNFybCqx877oeZuPaJpZHttEMXqx8DhRhj132e35A8umtWtoPY9RoAueM",
  "key1": "XT7XToJWTMBKpFMeg8kbWYc4SRyRG54tk5jri7VDnMUXJH4iH8p2Wtba4kam72sELn3Zt2JZrAJBCZFVxQZWNRR",
  "key2": "2Q6rYmamvwn4tW18AHF4gCSKDcZotS4Z9SEEiecRY8n2mokQdLdkUBVYLmuUGqKchES8bqoUUKPqrzzqouUBPFAv",
  "key3": "86pVdzcGohNxKRBzJndw3GZSvQU7gg5gUxuoFkt27awyP5gD7MFdVjwZ9Fkw86Axvy6WCXZ8Ys8XojhDZHiJrxJ",
  "key4": "4A76rz1YBwbEVqu1nnXskcKB1ez2W2nsxhDVBp1h11NETWGdnmGnQaEX9PTSqsgc9ZQHNWgcSp5JaEf4WHfTWbNa",
  "key5": "CGk4ngu3nnXRCDJjWLX8KtrHuZVwbZ8R1qHKmnhwATBbcurL6oMVmS2jWEnqMb8RCYRBL2t8WKEPZUw3bhDgBi5",
  "key6": "AuAnFqkfGwLQ7Da9ySzEZ84CRiKS3b9trBrzTCoJ8V74f61qAqedEpmqwNqWuM8a3zcgzbqp8ctvvHSWu359kSH",
  "key7": "3udcii6Tjjyjgvcs2qLcv7VAcPjn69ow5yn3cU3om7deXxwKaC3FGRTPAJNjg1kNxTUDtXp4NjXdTCXG9kusdK6E",
  "key8": "5Lw1JBiTi8ZuCQbvE4skwMsZGFkYLRzDrKg4r2H2ub74RtPvCQ73g7PaMmeyQKrHtuQ7v8vM8ERG8Mf75xbpE6Df",
  "key9": "2oYo4NP9HYX7vseE4n42bDPnSGNxhun2K5BHwQe9gerWKrGerhRqU99ubsghDHpwZsfxZTYtpk83v3ZTLiTbXGtn",
  "key10": "58uraBeWY2tNtNsxNfoMeZaS5ejYVQBH1q8rjubaYDziiSChrWHaKF6jYdWZwLGj487DM5VKHtaFkpKuafG5h1Ya",
  "key11": "4UMnQY1iD99LtmSsFj38DfPNKN1L5ZxX3f11QDj1exKmu3KGPqoH2saQNSMUeHWHjC7jmCdFfGw4YaQSMoWEhV7v",
  "key12": "67d4Y5YWBxU5HUiYXeWDDPGDm5ANyQ6vbaJMeLAV9QXtKPQ1rRPJp6QVBeATpC38fYMfxfLDY5nixqQHYJTCLPYD",
  "key13": "3ibsHm6YeR68AsgFaGEjJxpWQqeBWs3iob8ashZEX95DRUcehiujpNoWtTgNxbRcPRvxtZbfMXpT9WWDEjj5yJ3i",
  "key14": "5jtbqL8RmDXr3wTtgAvaYQE4ENZjUSSMjYy1Wxdcdv8bs5dX8ipFUjAfuDifE14XQjnNgpXefSTokymyHUp9GeoQ",
  "key15": "4w9RVGvCmkwcZTduY8rVuF6VGcmKGYzU9gbKvWoXLWX9Tg58eowV5HLcFPaLkWAYwznhWBhuBPkQzAPM8PKbx6y8",
  "key16": "W5Si47HfH5SFDoGTbVskNj95LzWeTVvQe3xZ9Pdo6pp1NPC1pS59ijsLu21oU4vKj8ZwhN7YPF3CAhGZFsE8g7q",
  "key17": "5caky9zfo8ZJSFr4eGSiKsDopq7mcj5nZmag2ByaCk1BihqiVALRtnqszSdcVRF9p8zXEMkWWr1HUzgCHHcZk6fs",
  "key18": "4MSt36FA7s4wwDuKWAHT17g19Ab44EJEZbHYn2ky5nQ95qGQTQTBWFz9ZxnYAvj1QXvvZusb5iGYmKQeX21DiEe8",
  "key19": "tGUeQWZv8zqWVpAhsVKpptSBxtcC96LQhWnUKV7sXUA9TH9iyv9x6h35j3jAAE558BDp662fgYVgJVTrGNjTFum",
  "key20": "62y5tuZdpKPM1ubhqyWqvDBJ1U2XKQngeAaATHqoo7srpiyh1a8xCbdg3igCdi4fDkFkWMY9d5pubj8sKHVg5rjL",
  "key21": "2hZj5S3SZfX87CV9UvQ3iDuZowc4x1x1LULkZ4g68WpgVVs4Y3A6U6Z3wJff6r8EiC3FNN3dY9LHvTEWDvNdUfV3",
  "key22": "653MiGNzAgQ2QsRf28AEjo6C4B3UFyXkQuih8SSQQX8LBDbedDvLpf5zoTVV1Q4tQH9oiUc3wwTF1jBwW2T5YbvH",
  "key23": "4wymk7KGUhDtkSvdovpZ7FdACfM8KuZcKwaEteYmdp4MfqzKa3YydvBfQ6iBuMricRzr8eVLvXiN4RE9WB9hjXck",
  "key24": "5qDNoj1RGTjVRbXx8ewbnWTdtsVMnM9uQ2CPSbDquLSdyxYFFkCLm5BG3jStLbbu8sv5EdDKtRpdn9hkEZ99Q6oT",
  "key25": "4Qdhk7S8o6EcwWk8CMQBvYxUkuecLMu8ZAhLXcWPeJ8sDkWb28Qmde3QAUpmrQkwecdrRbkrJHvMzNL4aJUDFz2n",
  "key26": "W7eZ6uPyQ9sUkyKxYKmWJvnTErTVgCgbWcqL68YGMWv2Jq3TeE96FPgUTdGK2UZ4UcfMpFobekG9C5g2rSSx7Lv",
  "key27": "vh1ogNSbMifxqPnowVAk41RscyoA1xUEL7B5Y4LnPs5f8oisbwELxKGTb9478r3fDhdXnTYQQEqXXDJMZQZ8crA"
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
