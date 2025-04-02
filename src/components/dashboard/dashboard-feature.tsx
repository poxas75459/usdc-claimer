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
    "5JYhVppBTzX3qoEFtSwDPtGgzNHB1hXSLiSpATMH6HeJhQxXJGExbBkZeihk87uZhDFsmyKNAT3p8RYn9yrZys9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTEEFFV31xLX2c5wAS86HgHH3VQTma4aguccM1zKMgfhVoxp5oxHKaLe68BBmh6KaJizc9pZvtZNQ7zQPna9iLF",
  "key1": "2gez32R3JJS7ZpLvhC5UvFT4EJbgtzvZKw9jjh5LdJsHgGKq9As7j86CyUnxuuVXNVj4xV451iFjr5XaY7RRyuLX",
  "key2": "62mnFQFyEFXPyBGVaX5qeumry4xQ7j4wvh5CWt9UF2ZynLa6ytvQTZ7BCZeLDtkR8Tt6S967EftmciFBe8Np94d2",
  "key3": "UYoFtfdrhMpaJwUgg63PRb3ozdneB6J2zNkTGo7GFTVFuwSukH54mkJGVgq88671gXSxhpi996hVLoUizJbyM98",
  "key4": "37QqwtjdYXnibABuBHUistXCczmgbz89gxC42P2KbS2LPWhdt3FE8D3nY6K3iqjrB2FSk9kLgM3kweQNQXy6jQpx",
  "key5": "668wvh5zXjw6rTaQXozVnhvcxpfsNX2qixLE2RWpTxq9ZjcF38ShLDcC3gXvQFWbh9JArTJLw4vE3xPtZJB44ed",
  "key6": "2K8G69Va4TXccrKeUK2QUdmnw8YTumxJ8pFq13VWRfUF8V6D8wr13gqWtEoefn9sLTdJHDDduEcNBJvXoK89qUXe",
  "key7": "4ACAsFj7DEUCcpN2zKbMdfKo8mY7roDWLGGea9BQiJtkP8fZbQubUJxrMLafgP1AXDtcmKmeZKiJxCWCXPxK6ij9",
  "key8": "7r6jLG82X4tAH3pkZxbMxc5PHPZEXVGtLqBLDAZzB8x2yRrSDDT4oPB8z7iiV7N7uV3w3svG7Sb8CBPRFxnHtXB",
  "key9": "51Mtb6HeCpkiZ7Vgxa4LwXpymC9Y9kActEDggxEnN5JXoACysBaVRTQftboL2ADVqrBTWQvmramNqbgaK9SKhs31",
  "key10": "38G29SL9JkycB8S8jRNax26wphk5NeaMmy82pCBZTMWFMeVJUXZZcSpzNhyTt6acWpY8TeUYF3WhPpgKZAs2mNsd",
  "key11": "4vnKcFSDCYPAtnpF5cdwaaSeZHMz79LS8Lkk67jjFUpQRdXCV9muBcR1iikq2GeUqwmW87Sg3AkQHrLB3QJgpe2D",
  "key12": "hdXt4wCaEcRnSgUajUXfjxAx5sAEokt1MerQex7UpbebNiHjobRBb11fCrUQkkmbgFUXcHUHAUDGjGVRa6HVLTk",
  "key13": "4RSDtdDki6ZnSn37tLPkgdj1zEqkdAbEtwadgmiqiLMXWs1tsrVRkwuULBxQ1941qUzL7My5ZFhzjJx32nWQozaP",
  "key14": "2VbBEtc9fSJXj3WyoVF3hzSQThsEzMz4S1x3bhVJ3kqutNtqyAQSxmz2GsoqkEjzFf8Hrxs8ME9bob7d2BVCfJo5",
  "key15": "4oStdkF2DLpQgwGPQ4yNbxu5firrti9qFsabSDMg78wsS6pNUvvfU8LHDkZyVRBheHLpeNLbEfySzAGcqxboW4dY",
  "key16": "5FVZe3Lx5NaZvMuADkbCgBjRNuH7wi6bqHqprwEcufJFQvxZes2RJ5QSEANpmJTVwmWF32NdeLnWis94evEsaaq8",
  "key17": "3zVinVor5bonyjbzUDJniseG3XiVdHbV7kvE6WPrawz5EvRZbbuHTL6Xj2hwSJ8AStNixrkQ31ib68EWf6PvZLcu",
  "key18": "5KZMSEDMUhVbexxaYW1cVGqyomp2iBLHGfjzH3iPkKpApSC8wZcGTSEPUTV5kAiL8WccJWh2NjYdTzXpoDc8YdX2",
  "key19": "3HHKLovZLA7wsoUP4UjC2e9wkqQeNy5nuFgmBb3aJy4LxGqBsT1bSmbrob5J5YYq4N9kjz69eujNU7i8ZfuG3uEF",
  "key20": "5DB99dBNzdgrqgodd86cc9w2wE9EuZbvtwkFxqvq6HDPbPXPQ3Pzyu2T4Uv7LDzp5nxpm9zEzXbcAAMT6Ys4ERYQ",
  "key21": "qnixLZvBQBfbHRHkcnWkji2FQ8rxYnqnVes1WpTYiLpfjmAyiobUtSD7RNuCxkEKVSiM2kn627j55b5VQiZ9khf",
  "key22": "5dpaDj3YGCPWAK9g2qW98nqAm1JJDp2SMzv8A3MaFoZELffJiWFLBwToVAGyjmByktSrGFWk2wC2xnMxPT1eUyYf",
  "key23": "62HLAtUNkARSVNcTfcWf5MvFmNvfQYPZX5xtCR9CGUN73rBjz8MfqNNDTU4abug4wrQCwjVCwrBZV1eENa7xyx4n",
  "key24": "558MRJbZdMuAZoBPMWFTKTaHiYmkXFqELTEXVzgH5dXRGVVfaStL9miYt4bexkLGjnUSJSPe7FCpMQrRuYk8dpNK",
  "key25": "J2ZL3ZCbDQr3kXFkRLvgy4rUpCjCHGxF8Q99gvxdfmqCgTUisZxPcKsmer9W5GMZzcvTNpQ8Ht5citcLuPEFg2r",
  "key26": "3NgxF1ZaQnqiLMDwuSvCiJtN2XDiFa3VYW65LeSHiPwAgqkYGdML8jrWRM1tEbAQKaWWoxCcimzmj26pWLSVhqmx",
  "key27": "2rbr9iuga6hnCtm2aezebrxziwwjgHVpq1TVERDgMqtM7CKzUjtHBd7Lj7Vh2GNhDbrVDtJjgG1iXNAfUfG8fWRy",
  "key28": "616dAucVW6g9L1Nn4mF4RG5aUPv3gBVeQDDKKxP6EidNywkxDe1du7ZrLKvCHN87KC1cchaQDuJ6AeAPTeeUb1Qe",
  "key29": "9wVWxS7KmaiqDsgyZCb8rGLCisDzWgc5xC9gn56uYpMXdzv6KNHwEEakvD9kRbvWmvqe1aXBAaugX86h6tGCUMT",
  "key30": "4bgtd2opbNk7vvc69V5qsHSc1QJGRAxEB5BHnBuYbsunG73NyLQhL99uoqMa14vvggrKCvT13DJPiDmYG6kR1Zwc",
  "key31": "UKDKJs7xUhfJ7u6vRdnnuVoWesxb9Hu4WLiY7KnCq7arLgiCPbWsaFpZP5BtvjTXqBW5YLz3e3p2pwoGzRspRP2",
  "key32": "2KXkkyvnGZ7q4fKgzZUchfRA6RNxTfJsUETECp77MoEtGqr9c3b6crj8byUFHAVjWQiJnTaAUmMxHazeZudrTmXy"
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
