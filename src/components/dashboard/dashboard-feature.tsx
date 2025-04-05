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
    "4faeoHycitVptCpRPkzPML9SD48R5E9Rf6J2UpjfwAgHbfotB5V86AL8X6kzpkLgm3jpCSv5p5Tx9eQv2s25eBMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cWYANXkJm9KeW82L3DzpUWheDhrRF5hoTfLvrceoAEeStUaBzzfxKoLFmMvSLEm5s3DZiroeTUZ2bAVkwZubBT",
  "key1": "5HneJhV94F37RDCcWJSgMUjaXg9jZnUtDZha13Yg7Dvip7A3N1hK6vwD43MtG3r1M4aSissZ6cLbmdkZf2dCcmeU",
  "key2": "Hwvb2LDsCV9w3Ree8uQ7z1mmyJoHjYugR2EZTi5e8ksPzty4AuvafW96vB6AvpmJbByFe1ANMLsrjK5ftgW4vBf",
  "key3": "4XKEZgi1PWpAXPbCPZaKqWeunqBoFczixR4opnksHvHtAHpiaExQF5QTqoLW3SXC9BLqLSCKEuA7rqDQGTp7838b",
  "key4": "3DSqRWLwZ46p3zg3hhY14YbdzRLBEFmiFwp2qQBmLmbqEJxTCrfyVgGBpq9rBYvyuRbuFSMiwEG4zVe5o1AcHwEg",
  "key5": "3s1xkae2vv2JsznEitx5iv5zv2WW9Ti3y7qXVyuK9vHqse6373f4etH4skrwyAMQnvrM3N49c5GFSgQAxXcv9R6d",
  "key6": "5sHkPEo8ZpZMnFq4afXS3Ruhmi1JjbJq491ZRruJQNcCYcjmdUZy5ZcYmyzkdHSaBGMsMugsr9mA3oQmamiseZVE",
  "key7": "31BXkmqZWad8tAAs7DMddVPkrP6bR1dtDga1vyvuyVmeCnUPFATpW3rx6cxFwxk6LCeMCjeJaJqgPyhRR78K8Rty",
  "key8": "3c7RxjUKkD47daMQxXB8eM38tnBjkb9vDTvaK2xVfGcfoTUHTUvcABmgDNMf3qBEXiNiQWhLbnuCRYdZAZd7HdHn",
  "key9": "2EMf73rQ9UEhzyev3gL44Axt2gdKtwmTn4v68Ax9ySF4nHJ8Hodaha2mU5REdSjDMwvhAQpPypgiQyNn3exyMUxJ",
  "key10": "29SfkwsymfxPZKgN6rJaDyJevCWST25myxD4jEXBCAKXJPygGV4Gi28GEtgTjVp2272UyYU48RtadKizRbPgiegd",
  "key11": "5YAgfivDaR6GH65757DZsA8TxCzE95Li3dwKJXqAQTDaE3y8BYfvcEa8KCzUtSq729XVdRfNaLW3r7nM8aCV8ob",
  "key12": "4zfoG14EcNEZ8we7BisE5K5yuKDc27xee3j7w4neboCUP99iUB52dJZ2qdk5W5RHGQHMd92CUXXDkn6bCv1Zk8GB",
  "key13": "4rsNwmGpL3GDiEQByant1GB9sABge1sek7LKqFvvRvz8VyKHt5YB3R15CiagNKk5XhP3gUF3cbAsRWL8h3ViSqob",
  "key14": "4oHTbAsfPqKJg8j1V6Mpx536iwHPiuZGxVjfmGHpUvo1poLMcGfUyVSZo4mmQJE22wrEK6shkDwKbAZ9TDMZf8f7",
  "key15": "2LY6NzekLNjirKB8dy8kBhKSmek7C77kZFk3N8jVddVPr8XSaEG67FR9sKhyTwnrbELs6oedGHYfeeWcWqZT8L4n",
  "key16": "6CUxVXZCqX51jpT5PC7qMiEsL3m3q9KGRH8HprTv4Lt3v2NBGLhPTeiKDWYNnittZU18QQS4oRe9m9UQX77pqBU",
  "key17": "31vZxKYu5Qw8qr8dvjskPqpirW1Ssg2bQFy4JMVaASSXprtYbywEX8eVtmhdMzcENhRUji4txWyGHbw4NFft7tCh",
  "key18": "53bu12ieQt6rTXhSs6axBzFYLkLUhMrK9MZZWSXdLYKSSR4EdCmUfRFQYB4XD5FDh6a1qJZgNfCHj6xV38AU94db",
  "key19": "4HeGM5EmYobm7K2Kz6q1jw6nBy6GQZrbaYNGgJbqXeNTdmgZHsndjc34UG7GrMds1hjC1HqMooeyfTuDjVMHaWdM",
  "key20": "CcnpaAK4MJxJ4p1cULYjMQWaDoqheAmEY7DGZidPYyriJukhG85Mjp7Eiyfs7mRphrp9YZ7sbKprLzc5VZykjhE",
  "key21": "3ZAjGxi4KDv1efB1ig1obQvmmcMuPR3zo3ZDtKRwE3NrQzAemZScH2syk5QtNqJrYKxQNqSCiH8145rdUtpJgJBY",
  "key22": "51x9zCP4jkmciXG6xHCsQw8wdq736HHPnruBQt9yXxaY25AXkQ3zZcQ3b48AesZ8qPfMYGq1ynY3bGpYiFv7F1Nr",
  "key23": "39qgpvQpiG9h4PMe4Ewpmv3HNSDefN1Q1iCQW9cepUuHx17k5wKj1CTa8UctfyBMKgDpFPjE5UyaJZ33nM2zArAz",
  "key24": "rFNZH5L6T1HQ1cS6kKJWPgGGSmkUvoQxoJyPe6ipwbczoEN1CvSVbhxcX2192ZVEA1B5Pox262TQrKH5cfwFrTK",
  "key25": "54FcPQRqo4hVZ37PaB13AoAavxcsSnD5ZmCJw3HNC8ZWbXjMbqCp8cEeHqC5yc1THHX333dqdeSpdXP4G2iMCnnY",
  "key26": "4J2nh6rvn1Jh2kV32jrN3xGkHYsH1ASk8H4J5bHD5bi3iw4tmQZSTEesQHYXs9duP357nzVRn3SAyZguQn6o26TA",
  "key27": "5e8MKw3ugCYa7ecvicgjoRL2xHDPuyhML26aGvemp7FuLxPRTqyf4vxUevhKv9RaqAW9Vmmq21yKyej3fwB8fniW",
  "key28": "PScRX7wGVsBxMRe7umEgHee3jHEX9XihRvZoBY83Pe5kpPzam95jyqwjh39Y3JNvncaCt24hKefKtGoV1vBX2Fg",
  "key29": "5BHEgCpFhzV85kW4ouXYHkaFy4XFr3u1VE7jzuXGdWUX1CuxrXCKQp6oa1TuvE2JmKDQXuvwCiQ4pnqGNmKx35wM",
  "key30": "4U2Q1zGKHX43kG1baEN4bYRsC4JqN1NkLNXhE1uShLKx8u6hE4Bu1hq3SBfW9Hn9myqwpzDXMadiFdvdrR49RhAM",
  "key31": "3BzSf4vQiZRjktncg4sEdMzksgQkAkvKsVobAzphT3C8LrQ3oHbNf6Nh1RWDMy9K2iJGEC3KXYYMCARCgTGGsaNY",
  "key32": "67GurYG4wu1soSEZTuwojp3ixCmMX6Q7CXkaoFSDawmnCRqgtPePfWtVL8uCmrMJu7GJbiirTJvmnBrHoznpRqRD"
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
