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
    "yt5EAEdSsYeQMkhhcAbapb8gRVCfLas1C7TnbeuZGZ1nmwW8isxKe9V36XjcWWoU8zqqdpHg6fgmB6x5URXuJ7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oiQ58x4EHv2R8Z5EBtyjeRu8qEyHGRn6CbaDu2KDcKRXBpEMiayp2AEsTmSvRf8T2N5cWX6MtiX6zXQ9zaJ4NzQ",
  "key1": "2XF8NyhdMmvXXHbTWWRCjfUefWP56ZddPopmbaAG16hRTi99GqXgrizBczrwPa53UsfNWXz39VVnCTFPRCR8TYk4",
  "key2": "2BGe7AtG5C2zZnabgXLbkvQUXVEQZXteUxMzUfK5CCVqQAMVkJkTbWRQwUSbSYEshdAkM1BxFKrTM3ZBWamwyjfb",
  "key3": "Qx4gWYtFaaFTJ77HjuSiiQsADYFynaRE9syUMwznjhu1w6L1M8S91L6hzMnAr8D7SfLeb5dJsMki6yXDRsXANBF",
  "key4": "4qpYFT9wQLYgsL686Yff8gN8kYHwyRTd9Xon2gXfsvE9ZZZvm1dwfPPVgwLT5TbU1rXkpW2XgsbRWezKNbcKumPj",
  "key5": "3pgrNU8LJEsvSyfP5qhc2PC8vrjAekxiF6uWJwHDdPikhYCHgJNjySPy9EgoKWARGezsWEUgLjB78Y7Liqk8SHRM",
  "key6": "2kG61H6r8vRSpvQHYdfvbX13vW91eqD9CZP6UZ32BV8dMmFEVpkPWfCNzQUdCrmx5iTaG1fCiAXv1pLN46xEaYiQ",
  "key7": "2d4hjF5brnnyLtjJa7evyqeCfqH7vnJHhubWD3VKqM8cbduHW93ENoc1yKhYAFH96xYhnQgQgM97WYDFt3owVD5b",
  "key8": "3Y7E4uUGn6VTSfJH1o7MGvw4dTFAwSny4PGS9SXT5ee1XfRDwJstNd1wNNdej9EMsz2we9dGWDsMTMHb7u6JRsFA",
  "key9": "3uDS8WB2jCUzbNZgqdDN1w7Ax8tXjKwS96Z8r3hN2HypuiZrbEGTu8KxtxgW9ydfZvtSf3gNJuXLCv9RTmeS9afe",
  "key10": "37iBtNKc74wGttYTPNh9MsmEn7eGB6QjMLjBU6kywmdUGmEDU4nUotrLLpeakUp5oqtuCkpYiR4audXkMqqP1FDk",
  "key11": "36SQCtLrZdy2UzBp7MtZNyZASNxhCpaAmNb41NHjkkENGKGDwMA65ah1jq2Xxh87QerFuLEiTtR2585xqkvyzLhE",
  "key12": "32DyCg1BRTea5YgpBBiz5cncAbA4Dr5WDbTqL8GPpEjQg2da6FgL6mas2zmwh9sBnMUHRMQcBHkX1qrNMqdGj2pa",
  "key13": "2BNqHvaWmmQboGYiJCnriNZq4nmDKbLJrPCUdtsFpwMB6RMwzuTd6cGR1YPSvcnCNLGpVuAT9ri2UnyVjUATtNHV",
  "key14": "jHC7i1NgoS37gSciUtTZBtb4pm6daFoWvtRmijwJRSTGPQGWFFdvoh5mFsRKeJFL93uwZecvAhCCQv4GzJzHH7V",
  "key15": "4y3kUVgwMENkjVuqFBWWgJobbDWN4nME664oyc9wKAwFy82qj7gjKUinwEMqyGMa4S59VijQHCjiuo1Ki7eitfjD",
  "key16": "47cFTHwGTXn9QXfUZEz8GsxRHtk9Vkg5jsjjZWwn6r3sXvgBknPdYLumHjP1U6G3TkrTbAXUTv7zaXCPva52TxNX",
  "key17": "5SJJDXLK7tW1gRbU1ZifosKE6DSzhkUX3JJSM5nsYPSiVmkMa85huCyp3EXhR4XRCNRemVcVhsiDiJEVdtYvuTTL",
  "key18": "5fbP2V2uR3tCDcspCpZb3uMBC7FXZLnDeFZjCseAFkyt643t3umCNWCdFB9TYh1gdwz9zfjaKfQD5rDNFkYDUzSm",
  "key19": "2rpfDHMJZo8TT2GjasrfrD87S5xD8FyMvhwXuhvYBZD3v2wGjLaQ7AsE5V1118HbNu2m5gtDCFrD9FBC9h4LjBdj",
  "key20": "3Ke4tZmiqZ9yZz3A9HwbQMJStkz5Pb2qNxBREwL4eWmUJBefzheqMeJHf6hQfCg9Vix3Wiz5pEf5mfofdjqZJ72W",
  "key21": "3pYUuezfN1AfHgbhch87x6SA2cwndv67854SgQQ9iEYiQ1thuzKANGphrLbXSo1umH5omchD5PM8T53BAvz1iBRS",
  "key22": "4cYq6uVjxMzLSjsBfvGZn1HazN7E2fgaWJaeCA5u68R4HazMQP93tVtQa64A9EmN8NMCTgoDfqzrJauLAAZjEWxd",
  "key23": "5gMNunUh7LB4Y38onXp1dhpuLTuxbnNLuabYzKXymGB889twkDdEVeJXnZoZ7iXGXhzfasDHuyRVXwXvXDKBiyTa",
  "key24": "3bkapLgGqRZ7TFWcuJUJXmC4N3WjKSkRiRdRqssHo3hFZvi7pyZ35v5joJg9TgtZrqfVkxX8uwtJaCRUECddYJwi",
  "key25": "3139vCwnWDop6BP2mEvQKLrDKSDaSNFMvP9EjgiQtEENj67hn1T3H1QZFQWQfYh6gQtfpZAYTSdhk6Yo7yVCrSoh",
  "key26": "pJYsi2SoEFRwCRQpbZYKZPTQ8GvVVwNQHUWN9WgdrMfeBYKpnsy9U1sCDxoifPoNPTNFA6PHAARSVumcmwG5i9E",
  "key27": "BMV2J7vBVQQ4tU8CGjCYC9fN7u67ojr2nt4aQ9Xwp5JBgDxSMLaPE7xnpo5LKxLshc4uLYegWbv7krn43FPdhid",
  "key28": "3PjTYnbhNFBmG3GJzmtDgduHWNYMNQGrsCDN7MM8rmTRfxFBQ9EoGye7oeCVguquRtf9KMK1oNBX8XfRTVr4zeCC",
  "key29": "kvutqg5YWxNnXxAkjwdHpB2QWDKmNryU8cqNr4u2xd7LpeFUmgzRc1Y2QE1V91ZvEHtpyAWRvK2AfSy1q5r8PrU",
  "key30": "3R139Bewh41Pm3X9Y2oFWCGf9HeRa7WU7wcPThhjpa3YnVzi6178uK3MWfT3ZtAHfxtpBXXkxfKXGBiwBcQpCeLj",
  "key31": "4ifjrqhw8TUhiKRUrU8nYqeG9QTV4hEqDMa3X5uYXBZRTj8F72Cno1L3qgMnXJ2sWRgkDDSU3HK8vF9ymy5vijw7",
  "key32": "3VgeDqdd1NRurnUkHNj6kykJ6xGgt3BbGMZtPxAMj8JxGtaVyvhHAUps52BdU3viorP6HpbogzroHn9KgQR88iA",
  "key33": "17LMbLpwcgGBjqhRwN7MPmSfVQRLadFdKcaVBpqTwmX4FgsufirGqqrJ2mN7iarZuYT13bKgEU8Cosv4LUU9BMr",
  "key34": "24YeiiDt1i72t8MUvKznzAG2RJna16nJADjFJqEDLY3XpjGGzE8evHmawVw7VWftFZAwQDUoQSStSbi6YnThryCf",
  "key35": "YM4MhppKAMdZA1jZ7okpJTSUDVFX8X1i73YrvYg3utPhpnc9RPqKRRX4UgSQWf4mcw3xCwsyKbKKsy8zxmdDL7D",
  "key36": "3hJB4kQyHMYvxqvssXit5tavG547u8Zxus7CbdmbPeERgJ6q4NJgnRELXnJH85kJ1N6rkjQWZDxxog8ropNQuSo7",
  "key37": "3jo7FMHB7B3wmywfR25joCGhHphZ7U2hEkqTwQJL98y9DrRxPTDRVgKdpD6QwH5YVzUrwGFSG6QUJYhtTqwkwzPe",
  "key38": "4X3mWBSgYwyDh2rMWC72cuKKQj6d7CJ4xBryx6bEoU4xCu3PNwqs5pbSbgvJ35XUh95uLe95ZZLdUC4w1twHsX7P"
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
