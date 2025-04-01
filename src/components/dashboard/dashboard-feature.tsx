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
    "2AbuwbWDiW8xqaeBTSrJWMADc4CriBMHJtRxHB6NoKyvhjmWhSFcdgrtvvEU4fhpUfQJ3t84wme7Hjz14Yfg6fhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cCKi9Bacgc9wieyQVyvgcpH2XU8Q5Ddei5sC8FPXFGVysFqbVkz1QLE9nkfR6UeXBmkrJLo9UNiYfccS8M6ZR4k",
  "key1": "288PmzpaQ74FZTD5JwCDqrMA5hCxdEzN3LJVYu1w8xNUApSyv16SD1E3Ay1JtX3usiay2i4z4cKbFaRXWvmacvqh",
  "key2": "24XgiVHP9yd3t5A3sTn7T8wBVoMTcjixvLQ5s2kYH1nJMozZCBHVZuL5LXR4hL6XRh8fghhDhiumRnkd6jfgMvr1",
  "key3": "2TQ3KxRPZ5N9xFLCSZAuK4HmrWmvcmuKnUCE82etV3SkJWqk5oBZ2jc6GQudj8Ji63yBcGnzpH4d2uV3ZBFuXn16",
  "key4": "5vt5iqJzuVeueQ4qPgJLhjjrKyvefbnPvSziNoK3NxZnszrFhNZqwjjMHf6M2oyffEWdWSCZpnJ4YKGaLXJUYnNX",
  "key5": "4reKnDyVidbrJb7izhKnx3ZaPGSfQj4cScGKsmVnWcrxqhqPN9TTCpaMwzsBjCJtbnDhP7PqnqYGpSAdix8EJcR5",
  "key6": "376qRB4RBxy6pUJfkes9YfBxCXoYU4PjamjGYpviYnRnsdbDykiqmmym5vMyarMLgsZJ7SNAcYuLkkLFuSMtjHtK",
  "key7": "3R2t3MHW8Vdhi8VhaykeN2Qii1ppML9BsmKFzykyvGffm5L3Q9Y7TJ3KmJCFggNiueTeFQU69JyDGegpFAMXXaXn",
  "key8": "2WkN9q7RM7LPtf4g9bLK556weZJLvVkKaZaFWxaZoWLZy9SVjkUn7hfjazh6FPXmQRKSVnmE7LoKkUaFjWm655ZJ",
  "key9": "5EBJ3vH7mXpeqJe4KfiLFV351VAenRTJd73zF2YU8NZPwxTwEocwvCJT2JnEzm5rK3JiEKxV64uXkoD1EdwhKiHW",
  "key10": "4twMAwQ83n9BS7tYCJb9NPgzVMH42ZUSvzv9vCB9uAD4FcLyH787AyEZey9GwqVECd3DWtZCMyweZmsrD2126bCg",
  "key11": "2qUaCzeuCLFyTPoBkCFEoRu62xAe8rWfMavao6miVfjzxx2Jadu7qDik8JJKxDiMbgJAysFp2q4VsiVmPeYdG1TF",
  "key12": "3DAzWZYtgC3EdwQc8vQnKG5oqoWBzyuCPShr6T5HK6o7ZMXxfDMwbJSDWxbkBB3SBTLm1ezBVxC7yNmS4vFRwFNZ",
  "key13": "4CZ7UtDDsjPHJ63gvTRfeosRgSrnKCsfbRnMQpccrtapswJBYFiGPngJuk7ae4mRi86FpotvConRENGgRNy4jQqs",
  "key14": "5pcYkvvL75ZXN4ZaoajexpRcnirAj63Zg4zTeMDwuXkg22mKvEUQm2sta6AeS1kSV7YmyN2svAPtEi3WsL12ZLMW",
  "key15": "5kkCBb85xgsbP89PzFYif3apzZgnJdCUyU4NfKgzhbbDA29zbbDFyY1fX7UwdHWVmx7vckXqjrwxrMYm2F9Vdg6M",
  "key16": "2GtiTDnvwLTMmufAbHDK2F46TPUPXHXMj1th7Nyj7kQAvRVuzds8FRg7PkcwxaZyvJQDkZ1PK2vidosehEj7aABx",
  "key17": "2pdgs2fizTLH6ueHdf1Q9STqaiHLJpZ5d83zkqah23zZMhYUzVBzmicFPot2MBw7mn2rrwMNB5eqB1XmqnuZrsz4",
  "key18": "5f2yVD57U19FKZ6Tbzx16r6sqZVCH22Lp59TS8gStQQH1Ryxv9rZr6tvxAKeKBZDdGobXSZsLUAgh58gSF7Jnqqu",
  "key19": "3GzYZz3a3S4v8etxMeEqAE2sa4kt1vtZRhdz1M5yWoBqLKeV17AHq2yxB88w7oesxc5KCFFypaPouVcwAj8eYKss",
  "key20": "2mvhCYrdZ9Eskf4vSPDmPdMTTxMXWgbKCfQHYNdUaZtPRaNjgBJohQH15zvideznaXAoAD1vcM1odXAe3y1yirs7",
  "key21": "3PpmDNQMKja8uE8bhHjfCe61m8V6z5N7PFMnwT34hoCGLfunNbT8K8u8DGiQWKRpZj7enzMXonqvZK8eeCp5Lxy5",
  "key22": "2Mw8BmXHxfBTwsbM8ZecfGmswNno2EU6LkFQwu7QAJWArDpQ6XNhUSDLb9RfAHD6Mm7dWE7MjKKeC1o8YoBArouj",
  "key23": "4AcTUcEneycYmLWpsg55T9CR1CnFeNk2j8eJZDy241dAURWSwgvJsBbkCPH3ZuxLFBdUxE2WSc5JkEvu1TEAuiHn",
  "key24": "3xbuNVmM1mm5PyVcxhp84yj2uE1f8NkUvJboYAGia2tuCakSZLNdeLjS1QxtCz7bg15psLUXW9mZnfXcnpexG8iU",
  "key25": "5i2u1f64b9EtcRZ3cgdZKcRAeDE52u5sgnQe1p8AgSPXKRLKGbSjeGjvsyfhwiqUpn2WkGLWqmNntQTeeMQTvZzH",
  "key26": "vUcyvsGmwvK7WDPLiTQMcCGwAivWaqrYSdQZWmcS61XYAnsnJfo1bj9kSnTL2QtKCZC5sdT3YH9tvNPt3qRcgYX",
  "key27": "3sHgKBmEhuWe7Uesgde4Ra7XFUxirUGPdbS4UoukN76HyLQPf1KLnq6JYFFVQzknouhGzwyGGrLwHnQDRLtCBs1n",
  "key28": "66v9gbjyfPGMGYutaiToWboU1z3kP2pW45M29KphZiA5JqsXcw3aetFB5ZcgPA2xUQxowdSkMLWbNj8U17cpojxC",
  "key29": "43LwJpEBrNrubxjY112EbFz2cjmezU5dH7jAmkZAFNoMgvggGs8uqsS95GzXZBDn5HrYCBcqRNR4mnweqmHJiV4Y",
  "key30": "3uPh5sQie5nBFTQRU3tYnzLuV1EHU5JtTTKfNNUfc9od91Eszc2ypHXR7Yie8DPp6CEZYvwkfxBheWaYQLcx9NKm",
  "key31": "2BiJQq47sNrFzzsCve2XmfHVfj6iXeSPZQBuMxanrSozbXJJij1aADJ4GcRrKca7b3C8WnG6XFkr2ZGDn2CweFZ5",
  "key32": "3mpmCTFeeQL2gV3KBqNQzG8SD1RqfN44VfD12A5BAmT64CSuW3yxevuubTSU73hodpKLVPd3MkiZXg7McpB5zjfh",
  "key33": "4NvML9gniKDHasmKmT9Gogbm9XLozQGu7eCvc7usQPPDMqxNVp3h9DjEC5dBvmp4AGZG7NtTSqMrByxZKGfyoZrW"
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
