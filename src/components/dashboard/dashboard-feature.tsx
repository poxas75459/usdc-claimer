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
    "2iGuo9qGgi2GMhXjgvQyXp1gAGVxpGHgxnCk54zmr4XqXYMz1fZQ25k3uat8KAfA7yzgDku2ciCUrvwM2vnhne3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bPzuvo4mBXpP4tjqqQ8FZqxdWNogED6gVSwDWYei5EqMmaTCJXBqSmyEjKULPmvRVKRgqmXj4Ypw3LVoRvCvaVv",
  "key1": "UgfyEDjvQrCJKXNac4J1pSxMdmAz4J59ZwMkLQXf8rTUin8VYUPgBkTBxULFxSKauWvxs4BMSusSYhWtGns449M",
  "key2": "5RuoiKuCvW1dA6ck2s127kwfEAzESESKPiZUgezqWQR82gLGKymdFbzbMWpopWuQsxkVMzjnguPc51YH7UZVErTh",
  "key3": "2LiqJdrAJazKb227xjyfuYnyLirMKzxH5V4Ws8g75QguAVzxm37rDiYnp3qNr4r1doNvY3NyiE6eBz4iPF7wMuc7",
  "key4": "4BBTodTW1urVvJfmKQ7hfWY6zGjFTZFHLtXBqV6KD2uMbtKNzJ2DYqfW5uDuUg64cuD9U9rBn7f2x8kjbuofkioZ",
  "key5": "3N3FTn1VEhbGZ7HrR3m2jBYw4UDKZjZ4m27dcsUzKfxs3f2bGS1Wuv72CN3RMo38de7gs9HkRCunNtWzqwF1zWXc",
  "key6": "3oGqpE32axWX5srzFVQFrpkHVGx9umQ1Xz6G67jgErM3nyvMdBPEEXzcN6R5ZBQBWDhJxp2hdxHpLvHm1hvfYQBy",
  "key7": "2fhms38yEt86R4ZHQHptGrMsuW9xFDLHWjNB5RTLoWJuQxYwb6avHsAueCLPdieGcZAhVBvaqKRjeovqDeoZzTqS",
  "key8": "3zUidFAPUv15Kcvrx6Ybm8iJQQS18Ln4kSXrA79kXY2j7dExDhXRFuix8CzCtFYFZ46wJVTnBm7X85riQcntjeQJ",
  "key9": "2vy9P1WSNGM1UfXBheyFQ9b2PiKfinJgregwB6y2i2uB514Tf9VoBocAbSSUhg1u4cZ7empfXoV6Po4aLwmwiYP3",
  "key10": "2VkAydvkNCNkaHmyXJUmSw5izwr5Y3uAHA6ux6ECG89KKrcaa86BRLfv88tTTkbvNVEWg3V3jnYVvKxyhbNjmSzu",
  "key11": "X9T3UoH7bM2EkETsCBxNPYQbJG6CBijHFoNRwqyqnJ8ZSAmYs7PCSUW9apjDkDk5AQyj34knmqoMNLX9ubuSssw",
  "key12": "4YcdtHF521xULUEaM1vA3AY77d5ezkRZKJLjdxaapXoRPqLWqz5EiWCBseZbgkUFQtBT1XwUkbjfJqtZHDUNs9cv",
  "key13": "iFu6njK7MghLeucEN5q161RN3eGufYSZg7xHMfUaBmN8Gcp6itQXUM9w7GdWhWcUmyHUFjBSVbd1hSwtdnLvQ2E",
  "key14": "J5nQnhuKgAbR6x3dbvJH62DCPFeu5yR4xeKHVGqcjEdJhAhWVKvqJBZP8qQ738MmhLqXbetpzubKANjcjwPRfZf",
  "key15": "34ZSRxgyRvCUDkRSqvpzV8ijy82nfZHz8Xg8RYvU6Pr8F1g6hck8PNDToxBQo2kmCmxCS5gXRxs4gaM8MB8Bew9w",
  "key16": "5fLt1t3UZCjCkEEca2ZYWGXc597GATVghBmPfCJytHhLKwZwM2oqps1vbzDkTEf7wFsGS5JykraUTHrdzL8YRX6d",
  "key17": "4uvua6fsN95Sz9QgkdtLMgDLcmBeYerFHicD5YpHLN2kdTZ5QiWCZEUzPaaD3wtVorfRsiQNSzp5DnR8X9mMrdTx",
  "key18": "4CmniDPHB2uLuL2W631pA8sRSCDHappL3JgZkDuVgvTBZoP6CDV6zkfQziYZrDzdQVKC1C72mRXW7TUEACvYWqvN",
  "key19": "2JuXjHBGsAtCwQByf1tzpZGu9hZ8sYtRJEU4AhkdUEhnjLvMAm3igUrhqZGGLDLo7rVmZG2ZeK3RzcFK8cfYGWFR",
  "key20": "4zQw4gRFGSSbsCnq2mKXYkn1WdY1rYK6wh7Ec9nvdk1fWutNEDS4ed4jEMLiQNsSu8V3Q7BPGtcCVtcEJW5QFKYD",
  "key21": "4YYZyW7zbZtBgvPBCPfCKu4kuHr1UkGexeoJuov5aiZPwJffFvHY8NyQJRrG71zQcRkpmTZeZhBRNHmx34k27hY5",
  "key22": "2RuWQqhS5eZrr6XbtcGSQLq78b3N5CSA9zxM7KtEQe9MzRJe6MnZMnkrcDQPSS5zGxTXbeftd21PqANHcvMcD1bW",
  "key23": "43bX9NUZJn6QvioA1NZHsXMDew12e79eKKvA3K7V3E2WvRhKJqN73723y7Mudq3EbN3MjbeyB4UJsCERktsv2qAP",
  "key24": "4P7eZRRWB4FZifhWfGcarpVbMtUPD8bFosnLxCd6WfqnDXdHhBmEbVVXU8QeYnTDQdQfHUfZcVP9K1NuEnEywdBk",
  "key25": "gfsAGh6gauJiHVL97DS7HsdZVGT82Qfsg1bX5XKbmLWu3Ytcr3WmeYSK5fFdasynSG53ioPfSPsUsy2roRN9Vsw",
  "key26": "TzNusHnkkoS9t51zkg8yuSbHnB4neckMwS8Kj9s3xXGUaN45vnHBp6VKysxwrnwoNC3vyvTDwL6enhcPfGwJCKL",
  "key27": "5wSkWRyNAa2fwG8BRwamqVmfYpWEAk7MRNwm6r8YWRHVBgYa7EQ2hXhVSyjgNwHw2GBtJRhWWfTtSuEsDr3LAbVA",
  "key28": "653dgTP8yuE832voWCaKacY1gSAxBefQAqVJwm3tXrSRYrteY6Necfywt66zeMSn9dKcvEqiW67xNQjM5XMSDmVh"
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
