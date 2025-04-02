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
    "3ALzgVDMJ8gmHY4egwX1qMs2oBtM2oNNLEaxSUbpaxgg3vHzPphhpWrRFKeHRGRCwRAY2p7JSkMwsX6u6VBsXS3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzbuvsEgqSBzzqeiNAsmvDKH4xQFnmahKsjKv16P7rzWHxqUqNbUzjBhRM4FhQ6hUL36B5ezJxEeTAvEAWXvjvd",
  "key1": "S35ABMUWC2XNH8aS9gogktSkbbsA6t6TKsrbnMidenvz74XBtyv9ULFwaUKshaNYkbWTk3xv7M8fgcEdwimvqcw",
  "key2": "2RqFecVBzM41Ud6D5yUBgjvn1ZbGypfPZJtktwAP8NvAr7FKNdpXdjL2jQCZ9Y9ntLZMt4MHvMbkehLtNMVhNPMB",
  "key3": "2wJmazNJxSeNKDU3vjUrrFvvPj3jHXMs1TxzpSKGwKKtZ6j2qi8g4EBb3fe1sxXdUutMUoHrobrP5HumXtkeBtzN",
  "key4": "4RhYvyGv93v2SeGTywyYND8DEZyUBzho266t2tEtWbkBHF9zwqoQpzqdwXKfhcHgVjV2Y7YWGzrGxLJnXBrEYBNu",
  "key5": "3jstahq1BKrPhDHgQUtp6pzRqvfHK3enk7umJypYZiwwwfnVmo5QdWbP96GDRr2nwyMKD3DHvRPCi6EXRgRrEMCe",
  "key6": "4GhCMsbPUjCbTXEqjGGWZ2VYQivZLrpaZMRQJzXDtdTxjZ1xmGHCsypjMmADpQx27gD2rMbPfxSqN7dKf3RMKsyd",
  "key7": "3rYPK3nb1MB8oekHSPYECP3oww4U6De2D6n12JwN3LTAhLkSRF7EJyazUUE8NcaAfpjVd5yiapeCa8M7M1xxQnKr",
  "key8": "4iJzwGU1RaApD64oLvaxBk2Td8pQMzt2aUP2omdzMW51tWjGbhfuTjsE5EoAveFdV8tAZTTq3KZg2hMbFmECLHYr",
  "key9": "tYAbvBfkn5UJCeRp7evZx49AWp5brzUowXyRizqL2n4zj2ZMBs2chZif4JJCEhpaxiMNdo3VVnNTmUFXAdNhgY8",
  "key10": "xYP4Yfdk7XLH3Cj3NvKaon4MRkVNw6VegxSL1NNJPWjC4LmF5XJU8XLpi6uj73guwKK5mfXw2oQXtrrvWMSqmx9",
  "key11": "3AgspV678Y8mqNcksuCse3bzx3859Q4c5X13tDaYJKACUsAGjszhoaRe9UYJzVodFYSKvcBK7ak11iuz1L9W5z8R",
  "key12": "2F9Vr7x2Hp9Zn2eL2rTjYZtvJQWzGCAryZtgdzToaFRj5xKj41va2m91L5N6TKvXrpc1HpZbkHVZAF2UGQQ1g3uq",
  "key13": "5h5A8WvwmKrkCmUVRuvC7XDaxTsLwCKSGUaHBcKFg4UALy6eYEdyn4mxeLBCYeACaDiDvhQ3z9b5PmmKVAtffxxT",
  "key14": "5JaggoRK2hcty4jVdXMU7gMMzqqN497AkwiV66gdY5mYgstAbGAJwKnXGAS26rWGFJW6waUF9KK7SDrzVN2TKmZG",
  "key15": "2ZxHQNp2S6hFGdBBssaiYCU55xDqirXCGXdAxeupZb6gYeuwPYaGpEPQ8LqqaYRtUGG6JnNHitDFBiGGZtRXWzsF",
  "key16": "3ewa8DXvHLseRr6MvW65Xssou5QXqcfvc2fDmhfytEuyC7qzyj81Trp32iboG8onZTVk8cSjwsxPMwTNsuJwvwa",
  "key17": "w1H9HJa3QQwMoEqsYEi1GUe8tvWFqvg91nJREGG7fh5k2LKTqb4ssox76vseXigui39XCXZ2mbykpztDvAzasvD",
  "key18": "2xoPnwYB9j4JRq6Vg7Em67JNHuHHqt8Gur9345WVwN6VQsg3AtoptfK6orNNPy7dvVoMzpRxYascxbsFsw6uAx5f",
  "key19": "jZNvvCxMsBVaaYeizEfPfLxnByAs9NuzNeJYcsM9wcsNsQ8ALRCaAZEfZhQ5kUBVAWudpXstZs8TgTkXQMgyxeG",
  "key20": "s2jR1JexkL4kM5QswpsBfcEB6dYJNSDUdhWU1i67HsFHNEsUZ4JTKkACezHkPb8K27YRujDBgBEZbwYjGUsAufo",
  "key21": "3Rs7p9u8tJUSo7jsmsmpyQnM9rtFBQBzx82Rgw4y8zLsJWEvoFcoUkzRrqPuwEqZvksKpziN8HrgM8GcS7AaMPYR",
  "key22": "2aZCGHeBREecSSWBqfWWgjWceFzkV3Q5AQD1knJQpWyvK1kLBW6zYK2TSALatkekEqaHaMws3kpEHvjqCGUgjqTF",
  "key23": "2FcwtekfQinTXmaDU5Gw6JpGEaYsrkQ6PQq522JWnGTqbu8mvzf9X8J29sMRPHNBdHra2W2SXKzei8D1Y945oE1S",
  "key24": "88z5YGC32hWLpHZLMd1VoFwZiSku6SYuhdkWSiVboyC8VmUvzrD7kzQM6b9gdSV7a71P1dTRVs3reZaxEeqruj2",
  "key25": "67azDwWbJBPfT6z7FEBpx5MyxN4oPA6V5BYWS7CfyYqEacjN2WAjdxodd64Hi9u7hp2qyjvWgdAtuT95uEgs6En7",
  "key26": "39VgiA1F3EiZ8EMS5Lpj9fpWsY6Qi9UVYYC36oxLHEUc9KG23ZYngFJAeet7oxSKMmtxiKnxpnmrRg4K1kYse3h7",
  "key27": "54XdK5PPZq3PJB6WiNdohzLwqZqn7bRh45GAJ9Vp9b2gY6g61hMCKhYUxUuewKPkNPziU79MJre2b9WhetkjhxKX",
  "key28": "24tS2yJ5AQtG3cGjhjfiKo3f91DGZV4exUXKRYAAuXmq1iAybV9945p5jvc5dGVhM77tH32HKsT4BQS4Gt8yurFn",
  "key29": "4Bh2DVvgbLqjsTJDsbi3nDGcn4wDjdA1W7mNN3YfSGCYcPQzQCbGDHLMUH3jM6eQ88GuxghUek96tdMBZ3614CVC",
  "key30": "4sMtbzgqVmbq2vTkdK5pZkXn6mYu7mY4qmbu3cKXzqpAQagYgZnnGXahmjGJrRdTZr4XA75uw5MToJgZbXS6pCqo",
  "key31": "4NsCA6gXmQCbyxCjPuGQLDhEzxic3G8gcMXwgzFvosmAuwhAc1vCDLLxdNvDt4ibppv2cZhZRSEdatyqwW45NBaq",
  "key32": "2iKzEyartzDFNMmbPNmDDRNNU2hJa1hMwCK5wTauWEHvucN7rBNHwnzYKSUtp8vtrJ5KF5gjhXoBnJCpgXiwEQGQ",
  "key33": "Jt5w3UMeYPVuKGhyfGg3t9wkS3JerZj61pky37kkg3QqJTR1ZQbmVeyAd7ZiPm1fXhps55Fu4dti8vfQQjLVJEJ"
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
