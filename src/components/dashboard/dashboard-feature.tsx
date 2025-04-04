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
    "3rU1mPgYf2Z8GvFU5rJhZqKAoUqitkNaDNTAFBC6Xsa4NH3Y4GWMaaPcMjdwCpPRNKFg7PtRJH1mM5wf46SCebBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46gqMh189DLs1SobX51MnxWPTGkLtpxg2GpStta2KPcokaWJCpDs1eYTr7v6yE9kmKGGfBQ1yrszZLzFPQzUAcX8",
  "key1": "2BrKUR8HNnM3xGFvWkLopzjw59fCzCdDNK1SesDAZmrn4MC9ddEvwW3TTBzUhwhBheYCu3onPNKSoV6QjXEQzN59",
  "key2": "4Szk5ZL2uNAyXe2bXufE8BxTVGGbDxBsuaHpfcXZrr5XkSZzeqajAyz1zaeAs1e9Fek7ick9TT3oY9Bs3FhTvQ95",
  "key3": "4AZWgJSe7Nmbp5icNhwfaWggV5QBiXUBEvoabyn4SNjk6Q4bgJvdGhJFk1y6rs6b5Y4JEEZhpK1DTFmnCbUXiVGs",
  "key4": "37AxZERokbCBLKUXAfPVFb7w5rKqR9CoXeN2VRxXgCAa8F6w8VmZQwn8n6RF5WPZUSoNQo79h4t1q67h971dyn8m",
  "key5": "2oxm31J8vXNQdbbxs8xn3CAW8oXsy7gyWTjZZHDSCkrKEnNCRpKhkfHNTrVjkxaXBTq3kCafbwFEJ6wRWvV5LemX",
  "key6": "5UDUFZmn7LwdLxgiPkiasDd3vWBfcVhWVL4B7cuvV4Yd3AoRFFkSCiztcMzhUsNYZH4XbojDaxFYb9qnQGo4XJWP",
  "key7": "5xkTqZ9qt2haBjckUHTGebMKKFXQ4SUimWq5ND7u8GF5gm7FnpdBsYWjpWpi5pav5Nn1H1MEDNHGiizbydcuuQ4A",
  "key8": "34ftRorNAJrvsuzXmhtbUf7TcqkbfwRf7ZBHmWBmb6mUgg5uYNL9EhwfHbtCBW62BZqE2FRJbvoMXo2Uwcw6LK2d",
  "key9": "2BCscgrBbLRJgjQdKeWuFQds2cqEVJixFXfuGgGUvEC1MdjZx4Hz5SdFPhMwRH1yJ2jPM1kdGNa1npQLAZtVD3BF",
  "key10": "41jXh4VisSD74nvDa8YUB9pDE5iJkaRZvCS224mRKPNEZmu4aAfDXQBRpWuPg73EVkxDyLUo4MHw6TnrkRwviWhm",
  "key11": "rRCF6jsjPpXLLWSBoJNMwxkj1aUUiM4AoGFCk6hDhEP5spq18iFCTo8omW4LKxRJW7cEeAjgYRb1PqCc6hsXnG6",
  "key12": "4M3yT84SEssBP8bKLoUjjv342zAhRAhFaW8wqMhzBPkJVzhHqd5FAf3pE56eFffEBHuB5ezvS2D51zqnbQgJqZys",
  "key13": "25NJrin6S5qdftoKwSpeYzwd7CP76dQqf1zpmToqCUGn7Bhc8YzGhqMbU3mpHBMvrjYqGtUAVtnsyGBYyCffK74m",
  "key14": "2ANHJdkLHAQoPfBpNcTm1ka1CqB71kECK2hxrZKgTnLArGziCecPbgUoQy9YoDh4sAxJfjszLzYNesgKUw2Bro1b",
  "key15": "4oZxQfB8VBPgTK3J52KMLKXLoHirRJEXqrgWNhRLBsmrXZJ3oG6XzbLZeQ51LyWUThpWGCeuz2KHRfqsF4Rqi9Q3",
  "key16": "6554GWf197VBuiZ89gYkeneWRno4M5S6ovLMme5ZQdi8qMYu5SHk6UXbDXjJjz6TtBpgQNLtJDsn11W2msynMfPd",
  "key17": "34CZtaPNnfSmFoy71eEjUMjxDFe7eP1Q5r2cNF7TmUpcmtC4ZQhCUWwAPAEZUh3WggWVPLcMN7hunP5dmUDtddfZ",
  "key18": "5H9JQ8nUoeLB9ULy6MEiGskN7jacMdmj1EsEFAYS2DQkfErC3fiB71kTzbA9ztQKnhY6QXA6vzS53JmXGwMJpEJN",
  "key19": "5rNSBxp6mfYjmqEDJMjd13Lcmt8mp7EjUjMcqGBc1V5sSzgEp9JnqaFUs6fjBbbDVbZiTGKySMatowFKeGi8tAjZ",
  "key20": "MF21AFdpnKyfXSYHnNUx6Qmdn8qtiHT6YtJmxW1gk9SkrZo29z9ohAcAMNkDTt3uaqcJjgezEkzN1VS1he9KZ5V",
  "key21": "GiHnJPa4W3qtNEUQyB9NyYd7jP2JLVLvgEorVzLC9WfDgsAkqaxqpYPrhnpLc2zhRw2sys2f3Q6MCREpNUCwy5L",
  "key22": "5hSDGrCBD9AK2cp3BMdG48LX8xR9sJthcH3CPAD8tA6X5YDGzKqhvWCki8AZ5sbaE7CJ8QcfYvMyDJZ27UsWoDQr",
  "key23": "5XmdWRgsaVs3vgcc4tfY3LVHuBBfBfCVWaCBxawzeTC5VQxNdPfbs9Q5LFXGhnBQiugjh43o7LquhHVtKHxcPat5",
  "key24": "4KiZ6Fs3t2sBuSho83GrpXxKdjhKmwBckdbNZoUXM7V8JrdnFUCARiEXGjxMaiQ1hAseU4QaU6dN7RDgS8w17EJr",
  "key25": "3gR1ABTZAMYRbP2Np4tnSRdVpTBoqXBgHCTf5FUtHRchyDsNyxS3CC6i72vthbNn9WbcWknJmtEQJFyfM85QUXjh",
  "key26": "5QyFEW7HDtYw9LivtHo2XxMhyDdjG3eztFHXEdfX27mCr6d6zWUJAngo5QVg85BY7LZoiZ4BdZRFdwMnpLdb51C7",
  "key27": "t5sdJT41iJ3dptzPRrptLYSGpQwq2QA72ZQKb1vFdavpkiFGDtBhqnuNocKfRDgG25qLEw9i4orbxqeS8ef9WET",
  "key28": "5pi8SYvSq6MJ8wdfj4MUBQZFGSipYh5Rn7mAuQwfeg54VYWYT6Bgy3c6Ebx3HBJ2zBSXiyfEiz7ypWQjhoE4WApV",
  "key29": "4hQGLmB95CpKMXzYXTSo7ZqwzA442ETkRtCpGUc7pqjFPrPKJapg6UUCqKA8eSAbWjd6QwaVsiBQ7Y3GpNJFCJcL",
  "key30": "5oq8KmQJi9wXfnKN6RYq9QPwYVtEi6WA6MDjhWN84nLrMnZ8Hrv6dewYydV9ke7tCgHYBxhyYRDgsYbRvurYgjYo",
  "key31": "3GY1rEnJpk6N2nrBag9RHiFEGaAQrWnq9ZLfDwrPVwYhrvwPRDNrmv14RWpcLgyJbAXXYjv3RXxsbgccNo3DxZe9",
  "key32": "4sfy1zrQeAnynxVAZyrriCPrWWf51d4ic7pXMK9QbfHSbUAGd9Xb7sMX3vpvGi14SDjdED6BhSbBE2q7gzY9vWJA",
  "key33": "52jv2eb5P4AHnvjjG57Ay83SuPjc9xkAiRNKAeWRHYcGq3SAMgZj57qr3jfg7i7idQJuU8ws2KoQXvXrRomj9bv9",
  "key34": "4ojqVdQZ4VVYeibPxnfbvPnMaPNKv6wZ2kGovPWJYcgVuKKs7X5ex78BTCbhpMk8SEJrkesTkYyksjapPkeUYBEb",
  "key35": "4Ri9ZkTshphwAKQj2GsYqmesh9yx61uAUFZogLwQnMy9LNAxocdsn4cPrCPVmytRFhrUAxdV2ZwXVC3V72jdVH63",
  "key36": "5rcq6mRZXCMDyfNF4chnb76zNLFZmL7RQeb7cMxKinexxu7ySohh6N5P3wtupKjwoCDTbNVoFDD9NeCMA4rXnB76",
  "key37": "37nCXPQUR3nt14Se3fMLff2ikMT4RmbTvgxm9iwdaHEhjdRcrCPaBKfShioVRfByyf8tkYjpF2dvSP3dN5PBxKD2",
  "key38": "24fAYs29QEp4y5oTdnrH8ZYZedvKNybUhMquwjZksN6w9hfjwgT55eBweBn5iPBd6j97y6wJBjEGPSoLipsBSf7k"
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
