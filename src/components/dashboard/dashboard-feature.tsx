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
    "3Gg5j38aMgMrJHghPfEgcwSdFfHi7BsPvLD1QPfnrbecj8bPwBc5HkqLpQpw8sQpcwu3iTiG596eDzNCkCYqem4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e1DfGMdC7MxZvo1ZZMR7pn8R9HMpyrfNFVdnHhLQhQYLgFyyBY11qDRYqN4fNjZd9kdxwy9d4RLiXfQfcEB94gi",
  "key1": "38kSwsTQMq81J2SkYdidiwQ4oLg1CbtCRHSNkeZcj25k5WYWeWwcamvQx97rHxR4bPKAWTr3QBEvpqYXfjnAvxFU",
  "key2": "3Ua82Xk1tr9EQCiNyCjMzgHALF48JurGsjaHXwCppRFfrFtns1ZLSUakGiMgaHgYnhYcWbo7caQ2QeuzGLaKx2zX",
  "key3": "52Y8TQVyF5zL1RUjEou1DBGja4wgiLzR6U2DT4keFZ8E5g9SwzYRZNqSJdFGpetBpWVFH3ushXnDrZS5xMFkxmmg",
  "key4": "5oxhGJFi1NixHo2y4dmdvondKUAdHcm9tLyvBeT8vDtbeTeHfKUoece2En7vbo6Lg7tZMVepUBRZfPQmVkC4GJyW",
  "key5": "5eLWr7LtbgJrWeXxH83atWBfffWUffnTwL7XeVnSZXhLKhLkdczhmApAAkDipPHwzqx8wZe4Gf2KZVsH3Q2rky5e",
  "key6": "4wPMSQu2adq2CKDod37PyHbf8vr4YMuxGBR2uSQMUaisEcRKY3XFuxTujkxUdHJVb97b14Bakgka8cKeWbZNP6Lj",
  "key7": "4je8AhpMpMALbx4gdp2evEjt4EdsDXqMHsuVw7pPzodZKyMbmu6xTyyghxSyeLoseGcKZd9BWWcSwFDHsBHDCRHc",
  "key8": "2GoHY3U3hEHaot57krXNNDpLWXJjbkSgVMtAYYzLwg43eQeJbFueiYwkeABD44rDLQYu4PuUqe4LWEb92GSZU2Qb",
  "key9": "3gv6wXdRKD8p9u1eM9s6fRTv5yZKGXWFMUSFHdj9GqLQJdUWRbHp3XAXNnSf9YF5JmdDfuZvXKStu3pHzPSRb5GJ",
  "key10": "RN1hqNcGKEUQsLhDNyqUnLLC8BKtami42z138y5cadqMaG34ZxaR1JcwuExWT8jz8bn4B8Hj2ZRk3rQFV74hpSQ",
  "key11": "2vS4AhwDHaTkEAQU18FLczF8b4ACoHh9TKS1qonSY9AeSeUkQUJL6t6jLGEynpBnuDfrLWApEsakXGinh636CrfH",
  "key12": "28to3NKfwuj5P33uqmMndwawHyMMDqNx2ghxSSDFQ68CUaRueCs2dP1sgxpiC9ErV5WnTjrGXQwt4CsFHDZbGmij",
  "key13": "43nCb65GXUnsbUgYVhADt3AZZKh9NVc7otEKvTaUB6iuVGN66BeThN1rakujT5Sen3nqTCohMxqUTP4cn5J1AJFR",
  "key14": "2xY2SXnyLnCH4GwcNF53Q5S3FpwGGZ6tGCLhaSL6vMZVixBonScaj3hkSnYM6ncnWsuSjMtACHCGcrGyEfRGoBAs",
  "key15": "4aRUnDP57FGgZiZVfJq1nkbpaJsTBLgURmXf1uUb9oHZ3crXRzsALifCxDrQzpEsBGX9WT6Q4XAEZDKqFKD3uCiH",
  "key16": "3FkXQFagTHCW3Ck7jRkKjb38oT7LKepGx58qK38V1MpCprS4aGasAkd2RrcPFvUii4UdRgnxiki2RGAHsVenqLMT",
  "key17": "3bF9tn5PxDY8dE7mMToTQVLdXUBX8odZBjhmGTTPDEJ1UzBqwPn8gAHQSNKJRu3FKC3S6PhRwicgbQgPDDMx3XmD",
  "key18": "wFEp6bkaPAd1Bhknqb6Tf5oRRseJrsVp6XSWnqxauwWywsKFgNmFzficVAyB2c1dZdoxGBzSQPW8Ry1r7y6hRaY",
  "key19": "4RLjAa9WYeZCC1L7j3PCBwc4Stq7TywMBjCZbM7fEaxZb3sbAuPHyYX83MjemPF9rT1DESh7M9RRAhcEpinSv8sT",
  "key20": "qS61UhU5pt1RKvTFC3KDr7cJLqi5vtHgQpQeQ3HH3GvShfxroFzDDuVxEF8QZnzJ6YjzaE3qbDAJ5PPgVZ1CS4H",
  "key21": "iUXZEQtvQY2KTBxRwbeDM5DzqLxa4mXj1jhV3fCL6m7Aqt53cZr1Bg3WQ3Ccwudv6fi3RtArQdvwavyfi4EDU2h",
  "key22": "2THJHwyQWoZQVyDLErf5RA8s4gDukqJeg59SHKNTv7H7KcJzD4qYsD8GKqVSfTxytttkBxYtbyNyx8jPRVrR5fZU",
  "key23": "39tSb4vkUirz7WLrWFMXekLnm18vTueqGmZuGRrRT236oGXZCuPSnLc4n9cfvwAcR8TJuqsvj9F17CppwhXgrFnb",
  "key24": "UV49C95DHGQ6zsxpZ8iZUCvrxMqzhD7EpxNkoA66byDxttYNhkVZHEWuCetXvdbx4oHg81AM5J4oTz9X4zUoGD7",
  "key25": "58kZUhGYsAz6rAgjhhuRC1MmTkPpGLZXbauQKFimL9ErFynu5ueeKHuB8wsrM58uHRrWX4WAkaUC6U68VwPCUmRr",
  "key26": "3NK4vufttkwxAG6Grigq2eq5ecf5vebCYcSF3PF44kB3W4ghSKuaRWEqSwqSuFxmAwr7CCB1WWwaMQApK1ecew12",
  "key27": "5kAYvbU6pstWaWpjoxr6z5kMbTGEbhV97azpGaZwVMAChXyk89HAfuU3DN3byWdirtEymdDrh7nU7Hvw2j3U8T61",
  "key28": "PqFasqDD3RfXjf3ThWrFmj1SvrSX8cCGj5pjD2uPhgjCLUNEHxM1XCSmgjg9Yw39GQ5SDx9Ht92U9FvqFfAK7Re",
  "key29": "3imToTVDHE6zjJqT5EynGKi8ETCF9To6wvseyjA7cYPXvhYPkQghhCGjrdWtB4VGwoKcE8FZVfhCQWG5vp6EESp",
  "key30": "3gt32aHWHA6nQHgjuJmqEVri2HRfCTf5gGWCAVnikd27gNRtdo7Zsd66fwmdnbK2zN5wTcx1SGYiUg1YciaMLnxX",
  "key31": "4BFp1nwYoHUxVZXCYjeCTDZYVXEC7YZQjz9M4W3LApucQMsrSYahVNZTjR6KfnirKDQhmtu5sNGhsgY4R7qrTpWB",
  "key32": "3z2bBmjRgaoSDBKyqrA4ko5cfCb9ZptrYsC4kiHqWzWgs7S8xYn3z1CMgdFq3QgFcHsvT5csYD3fAJwZNFnapmzL",
  "key33": "xujmXZSpVmzyXoY9bxE8Ns56ZpZAo3dsLhbHARQZfx6UftuvnQwGExn1iVUjzp46TP5vRk3MGFXPEXykqkWZa8n",
  "key34": "4ogwZV9UAeBd9w7Bth74pFYbcpS9NLKXWBYCkS21RMcMd6CdrYqR9uBtjmuKvqDk11cA8dj4xURt6tk61NZVrs4C",
  "key35": "5piDnd59Nk1yuWHh2EGfML28JRtypzdAJwwLuqkUEhHNcKSVoKec7ET6AhDsC2r7J1tjsSRRfKdyqBvqzRoxrJGW",
  "key36": "2kFytevnDZKovH8DpLUAEGryhRqbEjsZYXdsmiRxpsftXU5PDW5HJ5xZgZaspoy2JgD52VYS8tViUkYqAKKxwSoW",
  "key37": "2s6d73q9XXz8vj6mPEw3HjGTXz6YJi69FMzZzBFK23nvgivzgngV7ompw7Tr954Y3VCwAvfFsjCcu19PBGoUKevh",
  "key38": "2XxYb62G9Bq8gamRk2LnSDtREzYUEEBvEEYAeFeMYtLgtk8AZYVuyEjYHKWsne22GfjBK4NUqkGeef7YW1cBCURv",
  "key39": "4uzafGWeirJxFvR3AgyTJYkFDNzbfRG88jUmh8VxaqDS1gGRNKfR8EX1DGHFM3WUpxYAcD2uAtu5fmf9KoSN6Ltw",
  "key40": "4B69kwbMhhGDFzemHGupLg77yqh1YSiQFcGuSZ41AYKvqNNjiU1iSBrPZM4Fv6VE8gkK2CDg9SUDLCW4KSr121mH"
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
