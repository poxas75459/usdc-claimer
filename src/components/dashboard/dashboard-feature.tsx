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
    "4c3aMpe6avrAAqva41C4shzSbWezLb9Dsb6mK3yktWpNf69xQHmUwDvTXv8my7ans1i3U8CgPNABKMmywFNRj1Dw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qo7FFMn3t2JpmFqpRnLwj6KCVZ42MFtPQBtXKFvcQSWqmazqrGrj1sDgMFE1asJSYJd5uhUud4K1PrLeYDAypMd",
  "key1": "6513PoUd8hPts7PggCd9frK4vdJRLfKuyD6TKtcYu8fnjvug9oyX1ffFaYrNSrJsnzaVsPifuxHHn3wyGxfvmBJa",
  "key2": "35KaPrMw3m7mxh4XUQu5N3mRoipt8xshH7zUKSbKMmBDcrpzivN57M8NFbcb6fXoYQLnMkebNPKv4M1kwoJiF5wM",
  "key3": "hQhDWg1pDgvFoQUZiUnxSP7UDxXQZ3BnF1iVtFeV2tgFeMjmKu53kKznF5REWVrwVW8ZnSGJTmMiLfvNggGbcos",
  "key4": "hLKJ2UTNRjiLarRb5xY8tEsUKHuCFUzezCSJrH6XFZ3Px11boGKjJmxLY67pwsdYqH3o85JbB1Yp9jw2euW2dda",
  "key5": "2LjyzKSy6YDqvrdD62Up9qqFX2xWntBvjGYft4H7bMEfHo82QZ31WTGEYQxu9erJAGfHWHZpMmzZBwT3ngGvKUWP",
  "key6": "Rjw1ZPVbSyrAGmZJ4tDtLxWemb4FYxTeR8BjM85b6nTqLGHtVrAoVsvqAM4c5jtLhd9MjDxJ8Un29ucL4dmx648",
  "key7": "3X6GsRBxkkpxYmxpCy9P4dz1oJLafxMgNYj7tN1wLyPSi5aUA2xbDJ8q1AAT4PTVrqsjhmSqpK7t1gAkUvjdLZ3b",
  "key8": "4BJKiGEyafzTZE8UYDBNsBDcG9jMDja94zCQJaiQSGBWedVLSSDMUkpShRzUxWUAQy1BdvrtCjnaRtMqQc59jhhA",
  "key9": "3anD3BspDtmJ4BQmGgLrE2Sjg9yjX15gCNyC79HsYMmB1e1KDdrqwrDj8f2jWgcMMXwQnNCSWmr29BzHhni2izNX",
  "key10": "4tBitbFPoHcx63X74PPZgehfPdmpAaxCWaKsnr9RRkebuo1iSVZt3wkw5cCU2XqgcJYovD6Enca6eXGVTdHMTAUk",
  "key11": "34Ke9H8hEsdFN52pTJ4kRgQzESEt1T2yPcSQ7y7ofefBsAjApesUe67vWVrBpnKjz9nJYav9LZDXYUZQQNqbduMR",
  "key12": "5PFhkbrtH28CaueY7Gk7Yo3CccSSyQKq4B8hg3RCecds47tczsFi3rtHne2J6VKBdmaVZN5Y9Bvuix3Cye1esgGF",
  "key13": "3q3ASzjzqrvfLc8cBZFSzsfUwk8QsHBCGhrkyoSnyQMtPCrbFYQayNoSTj84u3xmhCefPazXqvYE8rYiMkeNu2cW",
  "key14": "3gKR2S8bnD8wqh468Ug3Whdh3kSfz78dvgg1VCzi9Ku9WK5orrAfVP1G9VjmqKLHhuNVWa34Kdc6zzGXAyYYvteR",
  "key15": "3k2sK2cSq6SEkHK4MA11f4BhxH93ZURCn7XdWk2vTKEMzBoYNKdv5xroVWRmauMbz6qdyZSu62Aw9iLJsaXd95ha",
  "key16": "3YgNFsDYTyiyWEFmQiJ5VTPFKqY8AtNL83cpsYLV9eGftdHo4nQAUZnxKXR7WF7nmH28ZJvb6tMmwqJdkcQFBYBT",
  "key17": "2MMhpz4ivhem7YqsvyWbB1yszpJ46Q8k4vn9sTyCqRf8GLyd6XinoGRwt2Zj2Hnhjv53xoY28gaHfXrxUrDr25AH",
  "key18": "3gFizquBPrF3JcCH785xxVJzEcKTqQATquH69wLZRiZvbjdKP1hpAKmGeHENfLYm3aVtzurwAFC9rqKWXCwxURUo",
  "key19": "2sGdaZRuYJ2CAU7MCmoSy3Xrpy434vZ8gTs6cYSW9aDLx5mRSjdDhiKm5e1oRQx91aYEGtc8PAa6G9kCLkP4VTJB",
  "key20": "42kwPh8CUzifxnnqXrfHaBa27T1i5dBiF7PAKfCdWRbUvx1HUMapzw5qmMNm42uv5ewDu8pmgw8Sqbo9pzNUWWPw",
  "key21": "4Ufbx8Bntqe7D4nwU1L5jJjRigvRXAzwrLJQ6SVZQXBEhZS4T6WXMAqyQpiLkbUNqoUB2SnnLE2T81ooukgy6EL6",
  "key22": "tFHo8vHPoPtPtjYrrQT7KKfZ1rwUpmBRucTBeL99HnYetjFmozh2ZPhFwHmwKEUcX24oaskfVUF6mFaZ2FhzbmF",
  "key23": "3aw4KPdzKxLQfQQGsefPSMVadGyx7rTDcombdNxk864JngjyVpuE2Zgww5XRoaH4o9snneTTzjy7CvcaSk23jNwX",
  "key24": "21yCLAiYQ6qJuwSCy8PVU2o5NcMgL6TaQMK7Ci9AVcnf4WT7Kv4xgW2BK6WeBvZJoVrnybJhAwhnphYv5SeGgUWU",
  "key25": "3FHf7AgWiZEVNwnuijhKnxYF9qwFd3sNzwH4WLB9h63kRAR47u1zdt4PSWKfcBDKrT1JanyCjar7HLQU4Hf2pAcP",
  "key26": "64hbem5c7jYh1HEgNnASfigPsCXbcUgLgCWE7LUSZ6vD8cHB9tw9guePjzyGXdzb1rXstHJZb1qFFCGoSyTYFexv",
  "key27": "gwjNMZZnJGEZ7L1EL6oNQW1ikvoo3EpZjUtcYHopptitEzvUqRqidsFGUvBq25bsXVamNnZQTDPczvFWBu9zDUv",
  "key28": "5VXJ1DXp9F8AyVw1J5zshFngS7TbdJKtXksPqCzWhC7UpuApoucTxwQx8QhPhmN52RY5v7b7kHah26K2cfbWLA3r",
  "key29": "4Lavuk2ozraeSRh2NwjqNeUHo1xtyN3wpKFV1yky3oK71ZFRoT918nDnL3jhzL4M5p8C9KkBs5TYBpp5mMqDLdE6",
  "key30": "VEYFbfLW1YhgnArCLhPwjcFYzdStUfHS5QBYzBh3E2UryhhvhB3mUsUtYr8G4UAEjgbcwtR1g7vyoogAMgXfA2u",
  "key31": "5ZLYWqi4Dg3wB69BGs3SY63mR1S8U6QTmZvWvenxeDv4cf6TWsUE7NzJ3g5e4915v4ZuikHqsNnSgG2U4iFs3BAA",
  "key32": "35hjeJLb9iphTp98Fr6NP3tNcT6fjtETwttv79auprxMXhjF5bVvttt26e1XHkCREbG6QWEx3aByTuYC4SD6uqfY",
  "key33": "5hmNNMQ87ZkamaJswoaN6VPM4tpSfGQ1HBwHctWHApahBVGCssg6G4vHKWkSVAmuHpC2FwWmCYTnuYHUxBfjBDQj",
  "key34": "zX9N4hjA1oeEGH9eyJj3Xb2oXxycFXAJaojXNyY7RWAkrojrYNywtLub3UEXdNghdYwMwKFCseZzY4L9mcFkkxL",
  "key35": "2WJ4wBeG9yXuLVPNU1qyVKX7Q6wbCfADsMVq8gHb5CBypp669nzQR8bMKQ7ZvLArp7w9VrXLyJ2fZv2WzVWcqg6r"
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
