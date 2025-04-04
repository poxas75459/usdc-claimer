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
    "1CpQjtLMxE12AeuZX4wEypyoHMykXCoybGF4tHPXCVu7fjQ4NzVs6FxWgbwX8HuCW2FZUFP64mUBuomCJNwigu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fsHMyYinw13jJp4NRkNoepBuMsGLYSw1YoKtZWLNBid1apmyDxjjZJVPxpEVNMNXrk45t5VodR1oX9Yd8kSKqQ4",
  "key1": "4h6dxDQpYpUBWH2rkv4yVxpxoXx3uo5icC6WMkUUvxumha7iTdmicgiLdGM7xT4iM7uuBfaWHMWgM4hSPkmZfkuz",
  "key2": "47P5da5gKz7xXEK45BnPc7A3v2svhoHmf1dyHoCZgntvJzYaq7tL8EBTbYMa1wHHxfxYFqQ2ifsDHWBsgnciWwxj",
  "key3": "4LBzUVcZh4eB16kyo9Vpp3ahLSyB2ACxHgrAWZxSX4y6vCEesjTKNaCrU665hzWjJa9byRVwA5bj5adHnqrjHLEL",
  "key4": "5HedzjpDvrCc7kaSgAQ3g4QrjnLhDV2XqmdKkyCTwZNBKhXuHQRejtnvhNmcwTp6APQRj4D7FdbMDY7tPiNjAK2p",
  "key5": "3wLUPqjjY85NSQAZ5of1uyrvrkGDDaKQhepS8qSpauhPxH9CnM74G7UoSN94nZczwQ9Cgo3W8aJqx8EZvUXSgHpn",
  "key6": "2Y4LexQAxnsn5qBtBcUZonxFsdC4fULEx99vvePt881wRrWZZANpi35XbWouiaggejvKnNbNUb1JPxSpi7vDSKGH",
  "key7": "5MiYjjdyLqVWybCjGvst4uJRsm6NWE2L3e4LcWjuwzcoSEuBUeV5kEBv6yqHk5YM157kQ93oLki827AnLhcgurmM",
  "key8": "41CcuSDMvhBLdnEBddYeL9naX1xQ1EKeuQJNxkgAqag4fLVubZ6SYWiRMjQWuavozdiDwdhU9UJtk7j2xbRJx3y3",
  "key9": "5oUk1xVJv7Cs8FisnjwCjgzdXCfWwJXmeaJLjBjUrxxqS7JVZY77Lrbeh7vrnKTMGxqbALjqTai1A7PER52Ca37y",
  "key10": "5oHRjRfPfGT6enqAgYAVWF3joqfiSghue2xRba83Xvd6fGdpwWM477MPuriWtru9MfeNUJxhPJ95ymKYgZfa3J3i",
  "key11": "1TLxSSadQYNrMRSntw6UNoC99Qt5CZrBQhCCWxsUphrD54najpLPcnYjSRPNK6CfpHgwZrF2sSjM1LLKfQAwbzJ",
  "key12": "5C1MufnJ4WACdA4FueTFDye2socCqN6QCBejxsajqajFfE6bRbBFgs1PpvHe6TGd2gpweEswzmucFj9pA2wycPrP",
  "key13": "3YHWZwdhAPu2DzA4ryzVdEmo3tCC8qXBMmqfmp9B9VcgAjqfw9aZH2APPJpjuEWkspgkKfo9rjLXiWseqJyu8m6w",
  "key14": "4utCjvQRLFt58ckL4iihz7qpHzaQ6ioBgYiL2J9cuQ7JVNqTCcv4Ss9TGtvsoQwJZEcnfkG2U4UcMG2svAubWdNy",
  "key15": "591iSJW6P9ySkG1PbGQDJ7xivjVR64twkc5znWLz32c4PNFLBqdZFpCnqMjMMgkRR8YWQAsV8JR6ncAYN99b3ipx",
  "key16": "37Hqq48o6eEyhzXzmeAH4WDq4y16FKoDvL9Rw96x8RuTEXV8ywJ2VMRikaJ44XNTeYq4CFqKMGCurzERVLTmgV78",
  "key17": "5NmzQTxvFKQiFJutTvGSd4hGMKqqCFB8rM35g24TjuSiuJyRkmCn9YKrDt5gQBhpVsqUuyboK19xretvbdGp8JQ2",
  "key18": "KXTtsc7JDHeBxM4yJdfaEmZDz5Af4FdbQh9kJ2dXpRXa5n8sPvqZ2P111Lmx6bq4iiNwEDRzQt6ffFiQkEYmYty",
  "key19": "52NyLACpc5S6bgRLbeAeQ4GiNDzBFCWXT42L9mA4uFCpFZEScLD6kmWD6yUjgLQQQEyW4dg4N2YTur8J1ZdgQsJ",
  "key20": "2szX4jhU9YUkk5smNB2ZwxjafppeypzPCextYPGUWFvAfSHnJUVjHxGPc8jpfX1PwoJyGhiM2LDBMTZLHursNe5J",
  "key21": "4EQJmHn373qsc8yK4EgT5uxNUBZsBV72qnUmm2Y1KuRbdgZSvxtSZNF3kmi989JZB7MRUZK6NLWBZb2FgGrJpJH8",
  "key22": "2cAXbywo5ydj3xC3SxyqdqJdafWW16sJ3WX5rTZjQduFq3SA52jrf8hxSVPqmhumHSo31aEoYgSKjdo482vRbaRN",
  "key23": "2y7eQVNucVbdFjfjVC15CAYmJj9UcytS3rHbbTZzCJ4eJ8rUpjaiVbR5fNKemikFYkHurw43Lk8DBbBK7XaN3MgU",
  "key24": "2c3cHNAy4uXAjRFukP4otD2KtwHVAyRmL44XkhoTgqy6mTpfBzE57dpyPLuSXr7cUTCkb1uy6eRL1835pzcJNCWe",
  "key25": "4nDfqTDaF9ffZ9UjnUXfHUKZUN3PRgeQ8r4HCkNP4pgB7Cyj7Dkqi3hr39CgDfnfkF85Msoy5U3j89rhL6ooSqDR",
  "key26": "3ZyFT8picqFGjsd931twvc61kp3DGM9jrMdZnEpqcMfQtFmeLwAUqXU4B9f15392JW9LA3vYxtVkFKLmwEu7BQt3",
  "key27": "5qWofhz4UpRDCndyZ2dZJ2ZNZktMfmgQUvo6JvGQWpbCvKN38bue17vc41hoPL45HDawS5mVEWTFHzF1BWwsoVge",
  "key28": "57XbLGYMyyZ6cTPg6HhcnAZdk5uXN8kdoYdghAKuGUHoeWNvVjUb8eqCN2n2tVC68PYWmfHZg7fPxqYE9FCjbfBa",
  "key29": "7ZH3dAE5nsVDbqYxSaRdFBXC4QYah7zRi3iSQw9vGFEjeVdCu1n6sB9VaWvnrReWVnp4RGprHY19gSKNtSyUzNw",
  "key30": "57ZCsiCpyzHn2cCuNBZ6NAoT1mM3koQ23Yp8GZFNbr5A6qkaJBYeMLth9RFhXLvJQ5Z1izjWQZwcb33SmVNSgYRw",
  "key31": "3dhh7V61tNgRfXoaCVKt6Y6QbEjARXbAS2S2jKLXUEmPCotUsT99W4P9F8ZbAAyvzixGWAyKe8bh6YbqM141jLU8",
  "key32": "5st6r6hke9NBN1c9pc7Np9iX43sbj1k4wY3eQ36uLH2t787cNQ8RxFSkaPjUqZXAxGCUoh7qHFX8kbgASAvXLdmC",
  "key33": "3vAayxxZkd9j9Tr3o5ZM5rD9UHTYbyDageVXGTZXJsYHK7cBBQasjyktqss8L8ZP8Y6N5hCRwtRR7uLvKyqChg8T",
  "key34": "4YkovATiQ9ppNbPZ48zUWhtb7pv9KGjrqDDzoypb8ypw2VRWPU5yxFAHKFRtpYSDr99eNxiRNhQNpQ7uf5hHHhKp",
  "key35": "2138dNeAv4L9KpjKZLTnvrkk6QCc7jN9GyM7RST2y5dTneYwnBPv32FrXbpe6tHvJaHgBn2hCJYi4vAfu8A1wcL5"
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
