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
    "3XBhSZVGBFU18mXhKcf995UF7KBo9dzkAKSBG2U7M5NYjMWP6nQLaJT115k8EvjWvd4hve3iLfpU7U5TsQqHXSxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aA2VzFWHL24U3Ts9UCKaRAjwijws8muHborzEDHFMTnmeR79a6sj1S3SzpodZDPLAiBy4kq7ks4Kt5uX7ZRr2zt",
  "key1": "2wij5k6x7UCkvGvaFZwM4sAsvfJAXDQw8znWavMejpJPLUsakZnKW9ekF2KAEPwsckVsCz3XPZs7mJ8ZZyYT197z",
  "key2": "5NUBcCYvfiix8HvYyBogXkgiEj14Sk9TnQCYNmr4wGrKiLUWZZujq7mC8soYLzHRq6ULSmzEespUvt5wrG2jyavw",
  "key3": "4BxNnizEgExe735YrizihPuiwCs3QNRhPQ9QJ1zthjAE2ZfCToanc2WNxw4i4XAfyYjSqexfgawbEYqkpQPxQseA",
  "key4": "5xCbP7n3dJTAijhq2t44MwmFqkCkLoFzKQZHkQxudN4v5RXWsB9Zpsh572NR1p6X5qvdXs8rRmYfbXpZGqAt1azy",
  "key5": "2EUYoptgncB1GKSPiGZ9YYyV3kHFcH9EZ6hZ5Mi2Z7g5TxRk9KGgtFpf8MaHjU33yfE4jabX4Lz8AYbbSRfAJz4B",
  "key6": "5sQoc9mkfPhm3qHjhN4rj6BDfyyUR8qfiQm47HiQ75ET9ECtV4bEirNZxjr4cahdwgZyFpPCby1tPTxHw79dwU3",
  "key7": "41pdCZrpq59oZKGsYHQJNnWw7KgeBEKSXTpL7AhaNL8KHmZ4V6CnN5wi8EA9czmgyGjNGQ5VbAMf9GPHqEm5f4xi",
  "key8": "EmCLprX4i5WYtBymZPvCSvQgGsyJqKfPzkV6eAnJ3yZTDhqY2bSUMTncWkfBvUFrKw35jVu2VaGY6wA1JiigvWL",
  "key9": "EkjmSUHi62cd6htGwgAFPfAoiSG8fzMfg5QRAezqNN1DBQ9CMLJAvZKA8DeK7eGkS1JvUynx2sQW7NkN9vSz6pv",
  "key10": "4yH5cK6xqC9Lh4ywGwv39S8PPiJbB9SP1PiXQje91wrVAppdxhuSpZTSFCVfyVU46dgxnbFoWosgsSzEoea7fs7b",
  "key11": "2Y3skTbPfWWfT7Jax9i7H8CYFBm6ReFg1Q2azutnAFmWLBsFxTVRC64Hix9Td12p5sBZrWySnnk9PN4Tg7DAVgMk",
  "key12": "4TCPXrtZGMU6CFUNd8mtqUX42FYBoVYMnW1m8tuo6qLdEE5B8mR7PnEQzqnSfayWErRrvGnnJSPMCFNmFC9cwoC1",
  "key13": "22JDfCUkt9owgzjPHUaYCFA86V3Q6WqKwV1XS3cWpbW5jh11jDhoqcfJLLzx1G8jqXCScQ9RTgaJhBJGUMmtvAqf",
  "key14": "5P9khCzfjgE4PbcHpDMJ8BBi64tk7BXLz6ydViWRUkzuvkecQkU3wazWxP2e28s36g5KjegAR1bDLbgKvGgXnLEh",
  "key15": "3uso7rneQe7gUcmDiSdZ7QQN9yKWM1jmqt3xWpxHeWBN8hLDkRJPrp3qEtpDWjhp2CPw7mFVnGKjraugHTxnsBzA",
  "key16": "DC9PDLYiw9DfUxxaSfUbpWiLGjfrKS7gzt1qJrHwBrwF5snrFxgzaAU9aUMfyce5wobrqgkrnZpNBBjhF3Upmr3",
  "key17": "4gjkShf9Aki1QL46RaB4d9WUde8rayi6h4E2qmTEkwvyyLNcT1EUj1xcHK28cUFzvumXSm4ShiBRtZFx1AQsboqt",
  "key18": "38amgwbfsWb9g3XVJJy95AfNmPJjQZSnfCFUdxsoRNaSp2FWCCUVLkMs8kKaG15KW82eUQMpzssod7HuCiRPybLX",
  "key19": "2H3rrt8iS6uAYu1Thsu2ax4MsfyWNu75DnRCjbGUtNd6PUn8Pe132gM3GJg6FhTLnzhQF2pS8JEGKiLNJYkSiVMy",
  "key20": "3v8m6XERnwzHXg3gfYaH4v6hPzUchKezNVGZcZnZLFvbnBP6jkdwejFnenAEoiG8ejiBAjT4fTf4SAhPLyNR3WKy",
  "key21": "2ahQ6kQHwwndqNDCBZaV1gMBK941i346NfVyFgzYk1EkkC8HZ1s3CxcvCVPGn6DtdfYe2aksCGDxNi5iT3vf6xu2",
  "key22": "GwyKaGC4h5bCLbT3FVxxUEUwTFgg4oE4ehAZkaWajND2zNN8KahoWsS7VEHVkvCr5RmxjnnvcTYeF6fn5vJpyCH",
  "key23": "5xeQjWNJBKP9vzzodEG8bbCRk5g8kKWySLHs6v1zc6zK2HDV12XFxXGw9sze2NRqaN2JmfWnLS1enNmhvNX16fdR",
  "key24": "5a3wcCMoCEtwwDnwJ6fStc3vCzdeCDZau8TJXwfcHQ1H4hY6XGw7fsML1Sg6YdSjwLfnJCVCeHaLVVDgLHbQsVX7",
  "key25": "4SUZ49tu9CG1XL6ykcPZdJVb1Kn9xnJYBRo6QiV4MNkLHDvzpoaqCLSa6PiTL9QbXUob3C5fdc2X6t5c4QSkLPBb",
  "key26": "576295kLGfbitF1bQswCaf5vAecru4sZYHLxWm8fUZtVGFbLUKYtAAQiuRPrQ4Rorn8BbtU9H28c7PN7T7MMJhzo",
  "key27": "2Ake61jw6KMz93962EDEJW2pAzQ3PitU332LLn1Bg1bP2UHDWxVBEXGAZnp9MUnQMh8Jc69MBNEZhw37BhhECCMg",
  "key28": "5FJPTUoG1uc21SKyk7b4u8JFAqFQfuf1Tj5F3HVEBCEmw7oZFDp4gLMDi7XTNjA5J9XKArxqRNJveFc54gBYokYU",
  "key29": "4vHhnwqj4vWHVVBGTuBZruYThEKn5XCVEa1j8XMSK2tQqy3QSevGsTjawRTZ766Dqi6Bc2VqZT71RB66NE4HdyfP",
  "key30": "33uCEfWNv4peTHcS32LzeK1rNsT1Joj2zWgapxcfXMhZW5EESaHsH9eSuufr3DMbf7kPAyVv3mR2kTKtxLsuNkwE",
  "key31": "2daeWnc8nypiPLg21kzFtUsFygD58sakDnzGiDqniZ9YnPzUxLj3wCCDPjs6TLYt1QM1d5NA6a47xFEFsTHRyoCc",
  "key32": "54YztudkMTairZAA6tYMdjAa82f6LjW68fW6N1L7eNSQwX7f9HuCnxpy5CeDRZKi4zBgGdNaeoUMwo2DrWzjFxJs",
  "key33": "2RTBxTa5xpMuAW8hEJnu4R66mWsgxA23TDxLdjBxGshBQDUK5DsPY9B92sGDeZyWWjhP9843db4pmwvMbQu5JU7K",
  "key34": "2yQjjjyqx1z1orR57vcV5yFiTWAKr78vU35v2owqFvDDXRKzxLC1jStsM2ygWit7T3LJEcZkzztagRugBNGjhvPj",
  "key35": "57Y5P2ctBJYoqmtot5vVJpL5JdLs4GicJ8Kob6v9HeGGtKsSgASfCCqXuyj2gUtspG6nkjg8AgUi5jhm8HuEabeF",
  "key36": "48bzmgiCnjnFxBmAzTJNkBKFwCaieCxCVpgeWKdZvjT4ytAHqpEZErVi4JzWCtPcprnxKAz2ve5XvAExPQtoN7wn",
  "key37": "4cfrBr2sQey2CmwPU9RseZarHaTqUjAF9XHLK32xAitumAp3LkqzJwfpi8voY4FFHBXK8vndfDPww4G7JNwrfcfG"
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
