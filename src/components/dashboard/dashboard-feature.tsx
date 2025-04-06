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
    "64aJk9grV6aiBkfzGA1sAzhKsC5yTX2Rd7uEreVjE5m9sBnP7NT5TLkdDS6NKqP49pSFDG7xkXccMPVUmfEjKJqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23d8ArcwaroCLxMCXDpKkY6XFBB3yZKSGBHQ8ZZ6gz7wbhWa9YUgBFoBF9kBzANVxhS2wnYMSJWgPZB6DhdQ4zUX",
  "key1": "xaz7oiaXJCcMimhaREcV2t2FubzcwjxCr83AicSMda9JCBa5GaQHhB2PAXRakpqJLCvrN3kXhx5dpHrZAnvma52",
  "key2": "4iECoFxWBZkaRUdpiPMfMBPNRkcByNQi96c2YCaP5atbMuzUTweSu5KRvC1d6WegDmVQULRQZ8PRXgkfkFh2omgu",
  "key3": "66B1sPxAMKAPaxC3ZHjSqfm4vTqy8WHQHZfDqaGw1RTzajyXRxJcherSAc75Gg1zevnAxAxyHkB2k4RGweKCbZcw",
  "key4": "2rnkXXQFhTkozrDZS3Pta9pAjcL1bDvgofjMCw7BxCdFvHojwm3X2SEAErgDdNqrjxD4jNLAhf9tTwy8caE6rKqk",
  "key5": "2jeSfgzF3HnRrxtX87VSv88qdPA18X7qjGP6N2sPE9rQjE5G473QMdzZLfNzQ7yguRn8QSed45BPChbDGSzNBUrY",
  "key6": "5mMFpXGTb4vkH7MDdnhua4YUC84EgTWjKrmGxAK6JSQGWejYgAMcQBQA3CRaFtXYghzvaJtCk6AJaNLy8J9Pm4mq",
  "key7": "2Tc6nrGi2mdHYeHofjAwqhr1RGoLqzAMzTSMbGN1HNU89Lnug7eM58SVynaV2XKaVibRXReoYpmLUY1M7fGYb3fj",
  "key8": "3A7NWoVNNSgjbeiMNunKr9CGyYX7K6ox48WW27ML7X4ixRDGmDg8Dxp3L8PfyfJidQMgbwUQQUHvn67zPatF7hvG",
  "key9": "4jBY1NfZBYhPL6TS43kaHe9iJF8iHDcivfymXqpwRYmu6aBcBxp53evw9Giy6zmKu4csrLQ48AsGnBJ8fD2XfA4v",
  "key10": "3TGxH3quzWKq2vknQX14uULsQUJMq231bez4xbqyhGt9Pu4qYPq1pSReAq8Ndr5MtmWuPaABvbW56RyUMTpm8j2J",
  "key11": "3oLNimQj4tVSJhM5MgPaXYnfosjRSvHsRwqBLc2rcsc9bE41NAYcWr1mV7WBmWmTHJ9VLXfdgZfhbibpu68PPVpq",
  "key12": "3FfyuDra4gJGbQXLv77wdpSyTiyXGVujSXwhWJq7uH9mvVVVuAN5JUPEypNznqEhKz2YNHy1KX1DRKetqCocz2Vr",
  "key13": "2eFK3GtuewdhQihhFp7A6Ff6KxKSwNJpctNCTQbzcv9APDmrmxaeXNZnAx772Vvr75Tf6W5hD4qEpNDejF3Prz1a",
  "key14": "5WaS8ZKeRBGH1WBUyu8MBkbJswB2cVmry4dSRgHPvzBRnCtJTiz6VcP6FYZvMGj5ZxFr6a495WSBzZJ4kWSSJAyg",
  "key15": "3YtFgAFHXT8PU3BJdLZDSHzMbfi9upYfqU5TJYAtNuCFbbXUF5ZCJQEQxbqKTYhAAtJHb5Fc718dNFC9twudUuGc",
  "key16": "5hTXpShYXfh7sjRTFdimdvSwvNY3ziTMC6RgpqCkfkbmhyfPHymQeWJd3ACEPEDM8aVFjWqfUrpTQrVcJ4BskE2v",
  "key17": "563axVUj4Aa1Dj21yg8sfBksgb4jyyp4tCpfniX3gt8mrKfAk6o7ve4HJSMJw7ccSkb51yZ27Gx2hFDLet7CoUQq",
  "key18": "4QeBFJqWiAm9BjWFD8idzYo1aR9j7ag5fejH7zdXyQAgnTJT7Tp34mYibCoX8dtPVzUKBGTUXY5551mdCecYBr6m",
  "key19": "vQxnz7HSBrNNmVgmqrMdEn8LiB9ZJQhwCr3w6UwYzvZEnr855yAtpTvvyLnz3xD5WDiFJJJzofcKvavMgKD6Xsg",
  "key20": "5SiFQARRMuri9wiNC6DQJXucEPrJkWoo8fvYijMBCwFfZEoAHm7Cmt5sC7thNKhcMwb7hD6cK24eqsgAPkZp4PXg",
  "key21": "3mnSmKwjcQk5kpTdXZkmD9Su9jntDLsJXmt3cZ6mnBT94fv3hH14m7hXNvShtbHBAVSzrktaxNchX2Y2mcp6wyot",
  "key22": "2hrrcUHsU2HgdhFUJqsC9a4nbyEqUPRu8JmjvYLFPp7p7RZAUFMQrBSbdWbVcvzT58goNHeS99Lh7R2n3FgePJpP",
  "key23": "5SyQSfrFTiLjiNFFYK3vU9SiwEe4uCMdpSwXq79tWv5wyKBhrsSuUH1Nih54KGDXdohEWQsCL42YQb41c1zdEvca",
  "key24": "643gtLQ2nAJUjXaVGcnv38utWic97G7QN43TBNGpvYY5UF1PzpQFwRKTfBUaaDVXrtxjYSctqUdLhPPSZZs7iwTs",
  "key25": "WHXiUou3JWBp9cnEkBdStcnf3uDmT45tt6nK9WoDQuL26TgCYLCKkiY9cqz5GHRkQFMWhfC9XhB8397ZTYWNEtz",
  "key26": "5TwBGChCT44yLSqNdfBeXthj5soGVWLj5LinczXnaCehkeZPJsdsquS4EVA7uTnyQJansupeWhPmbZ1hjnYeqmDQ",
  "key27": "4zAJSkKNEggNzvzHtSEKjLeUnmFZZ8789o3EwyiykiSLikHcHC7K4ysx6GHGZmwuGQtsVHta3vvhAqx2c1H9aJJx",
  "key28": "p2PpMS98a2ziHz8DNJrg8jHuhpiVfLxnzkzyad2MWUGrCaTppE6BSwdmmw9sx77aWXxfMtWkffGfznFG4a57Bvk",
  "key29": "2b1BU9d3b2GwX8yEtbAqnNmqh8b16NxcDzy9YYZDLDjXbPX7AivXdfCz3ykLwMsx2xb7EYhCu6hSiKJksecxP3DM",
  "key30": "4JUoJiSzPabnNSGvNST7XDVwVwGToeic9ka6ykHCPvhucAnxkKoaSzUHWuDpwN1QCey3kHKiUmjedPoUy3UcYVsU",
  "key31": "2cHtBgnwWCKWnmQQKrsutfyQzRr815Hx2d3gQM3y5ysN1rjnof8cNp4tCgtbaTLFccPESxNZA4EkEQFdwF7u4eEb"
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
