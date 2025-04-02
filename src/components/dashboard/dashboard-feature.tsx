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
    "2732RY4dFbDrmLxQvtviF9yN1KDUowZFRUhv1dGBYP9Eeh15u6EDeuNsrDYfzm8GF4AaNZBHYEDdTBwN6St6m3UK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaVETYxE3JxCYKkkjmuYiALfLDFPaHYbNJz5xH42ZgX6QmVJsdX5ZMwmh31MV1QnRT2ivh3FaTcRZ8fqsaUWPDg",
  "key1": "5zJprHd6moP5kMxYDMhEhZeUMudUTd6tPnjAV6N575Euu6ce9eBxm4QFxgEkKiCUZaT961JEyZbr1HmeFX6SUM72",
  "key2": "2kwbuxkYdQgopNTQA1gQkFqwTaTvUfjC8Lg3rrZPnZ7bbnBJHFoZgL8uLwAfFjzNZe116hZWUj5oA1qHxTs3YKeg",
  "key3": "3SZYWfiS4PzJ7DJYMtiqB6PH5s2W78aFtNU57MdkzdEXCjG6AF3diaefpFQ5eWJgoPyJRa8J8XJPT1nmcZWUYVi5",
  "key4": "v117FdDFcHdEKrR9k56QE2aT5rKhdY4YFzfp958yiwEaBuG9My4qUqznfGofTMGUyvmX8zPzLaHk1tpWQnhChRc",
  "key5": "2GcW2N4RYncN2CVTHi2rJnq3yyBuQx38FCPgNP5FZHYZiBRdxzcGyGSgJGVNwCNfG3HaUqyjgL28z2i11rTFyWfS",
  "key6": "4vCDezuQr41UdJptwnju15s5RB9vaVBFv48Zn8tHQonkQ3ZrfzPAqv6utCyHib5FnaQc9RR7jWWE7BXCPncwnMf5",
  "key7": "2PFg7NNDV3D7CnVWqCsRS73DYgisFWUqKD5tivVg4MCVr1z3DtS1ULZNTTQWZ1nsBN9D17nabB1YGyDQJEfc1MMH",
  "key8": "3BdJfaCYZ5BbwVM2Kc9ygqXSV7R5VkgonXSjBophx8stQciGQdrqoDYMJM8WC6gZ1WqCo2HTrKQs9HgxoAG74zRL",
  "key9": "3buwSdHErcukZioXxX5FYau53ehQGkZep9LQddQhKCX9ty4vDJWbWuzm7rBEHZo5zmzycUq3a9N8jbMcaPheUSua",
  "key10": "5tr2E8GaY45BqZwLiki8Shk4bQVzdtib713YyhZpgSGD2NqgYs2qo1mPcsycScKmbVbK2oCQRPCZbTQw3EL2nnyP",
  "key11": "JzW4dFKDeqn9NcnV7RtYqeBXawKE8w7G3ApMcvSKtfnt8NwVrAZjxt8Z1YSMf4GhZBM6uiBNEM4W1tfkNMqShpF",
  "key12": "2ySdarpoJ9cdoykZQ4Dp6H7MTjBM78uxRcZEDbSj6VKJEMmYEvGRtTX5D9n5Fu1mxykjcULYzpUZ8UD7icXSAWob",
  "key13": "34crjJ1Yt81pwxiHQxr8UDMyAUYvZDaKhNcKQs9jc6Uhn5L5iBVztaarZRJ8HBpWnEgWTAFsqwuFS8RvnbXveCXy",
  "key14": "VpndF35mfBGM4exJAmJsgXiAu2McK5fT5ikUUKqJvSMPZgkrYCHVEx4d8uVeHx1K27zsAtta48D8aEjgFZpuviV",
  "key15": "5nX6ScT6JJGGajYx6vm5u5Y8XA9nEscjpy3EQgGnbpb41pjx72GBiQm5p2dT59ZVaMFYGgMDzY2nFknxbccQjtz",
  "key16": "3DeAhzHKaeRXkYN6uA1BdVr4MbmxdCpp6MJ8utHvVX7G4aQpqwEtzEfisSf5uNfPBpDue4rhhs4We2GEmgXAA8Mf",
  "key17": "2diJSfrJTSdiUiLP3vT8Vu24HuPkkqLhR5voSYokesaHiv1y5dAtCCHFaUxkn8ozS1dvpACYoTaT43z8aD3xg5sd",
  "key18": "4iA7Ua4rnFHDRnYMtLUn3WXx68H8EBaoqUeFBQZNxRNcqyodd1wnowkKo3sx1TWVkTeL7pGwpHgdWbQyeG1XNiF8",
  "key19": "5qcRUJhRp4gpBnmSbYJjJf9eCfmXauPwDtTiYFvvvU5KjRoeoBgq1PkvrMYwfD3XjG97YGvRzitXxE7tWyLdA6ap",
  "key20": "5KXHSiNrc55CcoQswwZf8Dd1xVAQ7s6AgTCUsbxzckufQch7hJXpGhttWUYkdMyf1nr76GV8wrTZS3hgmTWdmsjA",
  "key21": "2WTeW7EJrJ8KiThao9DRckYcJmjHbCZUxvvPN9KqjQm4iQQhuY4DdKFjXb37udw2sFt7AKjSHrmRCUKafPNoEekj",
  "key22": "5DfowW5wJQGo19Y28RbW5CpLqLQ3Yre2bwxuFqYJrGve3emx1ZhYNRTN4rPAF96LkRybPJcccJoDKTeWCv2yQfy8",
  "key23": "2wBfxBfhRwJy7r5HqLKjRoRropKNykafRH1jX9W2XgyjrZtpXXu36oUEMn7RsitjqfWBEvRAr6LATHUb3HpPVdTm",
  "key24": "DowmZ6UpESFDp9ytRnoTgoDKN5E3EeNtQEguuretdedATUPcw2zDA87LdPwEcXFqarT67pwGm7xSYZKKPzanVeN",
  "key25": "2gmrDJM6zxFPABN6oCUvyYsHiV85ogFuZ5QszYzvwbtzPCywcZ2F5Q3PDNBuggHFxqyhYUzdtwAVfWBf27z4J1Ph",
  "key26": "5oh2TSNCRDMkrBTTEYJCoobVxNRkCaSHCQnTZGVAFw3EDzMncVZvzwr3ZV9CrUJnbTkqgzttYQP48UeE46eKS9sV",
  "key27": "36KrQsgz8YrYjAt5BKcVWZxgPAwQhucL6Lon9rXJuGBdDbSsv6Y5LyVJUZByo9r4jniQ3HtnQwAwpza7FX7CsXha",
  "key28": "4R37E9SQg2wxcB5q7piA5dSpqM4f8mja45iN1b44TZFJusheGBSnE5JJGW7BPoGsYg1yge3X7srvzyGfudpMmtWR",
  "key29": "5nMt3MKxiidXBMVrXzxD2CJPBVaoJaNgHozxsAg8BvDdzbec516fVwSAqr3TZvXH65yPw6AHsWGHhDS6H1qMk9qi",
  "key30": "5aubUM1Wk5xkzFHWK9HcqozeCAmdewjjx2KTUKhAotUbZLX9rATtg1SjakD7XiwFJyhdbBQoqnWZfy3bC47ML8ho",
  "key31": "8NS5PxriSSYboEXtbeyy2jtvCF8MpTNvF27NTzpANJgbPgt1UyE1gmVSGfpEW3MLYTtL2eXgkh7BE5TrAYEmBpt",
  "key32": "FGea4oWiQP2gtq36arosq7pF5QVXTpY6LDVTLAtBtWqcpF3rbv9QFG83yMBXT6BXVmjjkBwUttDL9VejJZisoaf",
  "key33": "5MPsc7bG3yRzoSG7C3tMfXAvA9pWhgTQ8P7BHUTKZjV3Jn98NsLebJBigUzBS6BsohVHVnRyHfdxF2MYitCFhY1o",
  "key34": "34iG6hybkLT4MTiCc9tP7dMqR3BXstqDB5fuyh4NNCdWr2JJq6izUkVQqEgYLnqmWfxSnFrDufWhm7ji7vrVqcxv",
  "key35": "zZ41eR4ULf7p6m8EuXWZGrDaKrLQPkihsBbMVPugNunbkZe61RZMtdJ7bpRcrkZpp81Crc7cWDqWBYwAxD7ZA1k",
  "key36": "5fdg9TErTRiiyXJztKjBWS2qZ3NVsjAwLvEVXVAtz1ZDUtkFLDYd7jmjWeUgfSx7VXyeadsgbZmhyD4MhHkuGdVT",
  "key37": "5AuPivWPw2DjG6BVjpmiVpkL8k1o8VE4QdJv7n1wET9z9qhyUk4rVFrUVA16WjgmpDffZZTPFpLdpztMpKB5TEcn",
  "key38": "3RfDy3zD2XRoQUA27X68gpfmAXqpD7tSnbiMgnvZmgeAEdMGVJ6CCcDTviQL92fVzamM9GbK4LY8J8gvcpn5C9oj",
  "key39": "EBuPiUSuETVFJAxvAz5QQEi81FkKogxNnNWDqn9CLr784UZSTmEiES26p8E7FkJAYRKuo7MDFChs81EJC9UeVPq",
  "key40": "5X5PtHiXUf2gRGCoKQyx4eqntBifi1mGHixXQFmEsEsrfjZXQaJLbMNyUS9VG58uNKND3VxfR9wZ2Xq5RcU9VA5"
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
