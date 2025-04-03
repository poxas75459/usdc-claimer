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
    "45nQH4tzqqt5BgMKVZmBEahuh9WnsqvQBGxfuh4Wo7kFv4EkvmXbhMiU6FFK9yww3WmzekH2qKtpbsXPEraz4Nno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qtKpqCTgcQK9kkysN5hzzRqQVyHEK2x7DT2cDprC4Cm6HmNAH7wnD2Aj7jEsEpCjnoorLBGZ2vB6n8J9r9Rymn",
  "key1": "cdwKbBNgCX9Dnz1sJLQct3zqtqSYGMH7BUpBcECzA4i6vCmAJL4vsHnAdEJiYTdhK6SMebT97bYrLCSvXxtTntz",
  "key2": "54fUDuqeHuhSQQ6gZyAhXUgX7LpjdaTXpoDh3c9GJyUSNMs719XmubEpNWUNkoAw4LqeYR4D4sBQkyHbe5gjvwSx",
  "key3": "wNk8pYxwEHhCbUjAJgGFMMHFJqmzZb5zbVeR145QYhgTJgLmgQUFCe75paQxucqeZGW78HaQ8JgbjFBVgW1qYMY",
  "key4": "5SseWLqS2vERxDGwps3PQayzxmuQUs68FQ1uEyUfCAkhRS6kFSQaM5JUqmETUrSws3bSuUeoTyKxVX7G73eVpYtB",
  "key5": "3piNQttnqVYDU8QxbQDSRrpcEhrVSdZXKGs2m2THdy8tzGP1FimsbUQe1aq2Y179kc1onBPKu8epHfPKF85gWTPY",
  "key6": "4Ya5ujLw2gncvyzAYURfveWAgB4Y3FKruwSbJ2boZUEjsSJYWDs7ZftHpcR8jp7jbiowFmdWvJ26cNfcr6HpdP1N",
  "key7": "5LQ8sYQL1qA6yujQo6ASjitQ5kJ5Jo1fqb9fefuuPv916fGg91e257h51CcoBiTtVA1JAQdgTFgUVJ3eVLtrhbsB",
  "key8": "4TjmcbTzM8sdTZnd36Fj1M6h99SwfXDQBu8RehpvN1dwYwGm8jAtnTfwrPUio1RioD27Nyb9WoQCtF1nL8sRimdh",
  "key9": "dq5CuhKQeAJNLhDcBf4E3QhUukREiwQR8cMR5qH2U1gwSzqNrmXz9SaVyFSVdS7b4QuTCVdChYPgup86AXyhxp6",
  "key10": "4zhw4jqb6u9wu7A2aBJ2MdStcuruepKZsa5eW3GhVpo5KhUUNj4qe6gv24XyWTh41kEYSR911eDWJ1deAsjq3VXD",
  "key11": "5WykUE3gMx3LGniVhggUvDKJmF34KhCwvVjurNNTfEUKoreNE6NKpkN8U7EyUR2f1qrML8Z7KvkcVg15davdqkVG",
  "key12": "2NuNFTNy8Tn54YEk8uLX1yHp2ybaKJ4mPnJhrzD47WyMvNABxc7Nnx43w1utU8RpKQrrmkDDmdwBJZBmGyapf62k",
  "key13": "5NnYDpXsKHRTqbGsQfiCmXd6fctpG8xg48uqD7HnRmmbHyLQH4kzmKKDGTzdnBtiQMb8YRCmKxWMPA2Q8uVf7cPe",
  "key14": "2eV4xPCPKAzT3kvLmX2zT6BcX42F2AHjLLFahufcebwYpQWJQxi5cHxLLs9Ka471zFxK9pzXL84uZQTsPK5e7CZV",
  "key15": "3E7mLgNAfgg5U4ACEefeHY39s7M5Dz3ipLHNrpWJgSGam8dtzKypKzSQmcFc6uMAD96g3KaisZ89PKQbsxq1odiJ",
  "key16": "2UDYAsa6UHJ5Pxa3VaMCXdgx41NTcBQfHVkDi9xEWDVXVsYq5j4XA2Xfyux29wBrRcwQ4x4s1JK2oAZXRUJ2qpNw",
  "key17": "2KkTDzD1PC8WyVWKYwLsJmcz1sMT5oYzuLWDzQC8tdyDE9yP4NgZK2Z4T7ZNJsY3j99YcJ9W9RZFphuUpp5Jjzyk",
  "key18": "4nN3kmPeAs8sPUmdBc2XfWrWauBKRvczj3z1P7ATfstU5FaRZrDNXLtMRW8Hd56Mr2zWFLyqJsUbXfVEiKXvU2fo",
  "key19": "3AcDPZZp1LnQHs1Vu4GndctRXd6fT7fbfow1WWwqe8yH9AN811hMXtt9pmobJqENM2AoaDy5aZbR69cADKmJr9CQ",
  "key20": "GmxMJTxLiaPykGN2kD68P8WFEtsx5LNmf6HPR2ygtg7JvSjkectf9VxKG7Gcj2TSA9yxuhucWxZFXZtXg2zF1gv",
  "key21": "77qhrprZ2XkWYj9V3iwooX8ND3C2MQHeTUNmitPCAfUVNS6NsbnaZZZPTBuKfJrXft3EbhKbSTiY5gZLzAUzn5b",
  "key22": "3RjoYc9DdDoj6T7m33rQwBYHrQzGP2E7HbzWXWTZKFULnmUKit21vPdfwZDMMpwWtoBosv2KA8y8v37ixQb3QLmG",
  "key23": "5MCqJo7my2LgW8YwdCGzt35WsKGyAav8DTghKnbXqgSFZMfq6KE6EyDVfG7ZMuFmZf5MD5Kc2zNm8Txmb74ULW7A",
  "key24": "wi4Duk1MggoQchvbrUpmVYBn5eRjTtTjURygYu19EobZnheQEhYUvSGpsVi1mjBrzhmZbwYTH1A58M1f7KJr7qP",
  "key25": "5a3T8MK6hXiRJcfQm6N5HqjPzurQMM7cgEe6CfYab89giYyPrERY6hUrVrVJmQwhecCEdYNJKcd32ETmQSUjadpb",
  "key26": "24AwL585QiaBmb6Zc7PwB5XGbeZUCq6MGZp3J7V24k5mLMGva86LxfrWM4vmzYKY12D3rrV3Cmrktn8J4KDCVw6H",
  "key27": "mAd4HbjVeVaaLGLErTZUDswBg4Ek2Lqvh3krdHvdLJ2iNnLoZDDQjyPMpx9Hit34BvhqAEnK8mUFyu9ULARRvrq",
  "key28": "5S3UaFXt98ePvNgYByXkgRChNJQ2saU57piYTtJMdbuRpju11CRzk1T27JYj4boQtBeTKaCEzxujFzS8GjvuDLGN",
  "key29": "4cvysjhehwyxLUWYxyKoWowhJ2n3nZfs4hkVWYdcsuNkmkEgtLdUQu9BEr1kS4LuCXoquRjWkoEwFqXoRinjRLQS",
  "key30": "3eZMmbWPHFb4K9i5uGM2ewEwh1U4jrg24PTCUrn4roz37rBEJVH1jTsg4YC7q1mvJxJAhAJF7UA1GtjjRGzSehHL",
  "key31": "2EAfRdQgTsbNYaU6kFCfKomrvd4DMwoYSK9aUjiUDq8z7XwZRTQ3gz78z1jb1gPY3G2jeRk12CT5Csgs92mX2LFG",
  "key32": "5RKgU4PYoApkEqJYWLd3xmjkSjChcoZdBnJZnhTabQnDQ4L28JaPTEyTSjwQKignYnnmLW1gnLg8sHsEEv29WsHS",
  "key33": "3DbQLhSxq74fwBKYnHRZbPHX6Ppw1QVfgQ44rTZeujP8MZe6a2qspxsnLTM7v6RDAx1jPnMn6r3j7MLGwmBQEC7U",
  "key34": "2Boj3Wk8mZxyaPZw4e7Me71PdaohHH9YMSxJJcuHvtUDRtfn7nvChCMRAj6iL3eLH5U24bZ3WpcSy5ZLCpzNyUAt",
  "key35": "595LH4RXoEoy9NMxnge4UKq9UL6y9XA2uvQfVUebiMsGMB5cYYQNfoHXxVjbPk2Tv7MaxT39Cn9adPhxoYawiA42",
  "key36": "5eyGgG7i6yEEvQWw8PmvFNBGwbjj9ArGRcb4ZaSPe4AGVKJsrZKBYsx7XqTrKAs4Aoavo8y9ssVJLQP7MWnSpw6o",
  "key37": "JyiF4tcY6etBqB7wuLpkMFqyFtwBq48Vav1reN5FC5Y8JMGDr59XwNGmHUwcGxDyr6GLvsN5z8hTDJWWKSbjJ2n",
  "key38": "5dCkhiuPngU3N9BBSx3ZMgJNGQr7j93p49J5CgvycjNMo6Ao1iGL9uctdwt17CCKq65EsNq6wvqTCR6Sy6mcaEov",
  "key39": "YVqH1BK57yxUZo4iN4859ESadnUnV9As6SXb1JE4ncoqbUvUZQbpJxhZXpen2coq9Dq6fdtbZnEXFHDLrdp8xt7",
  "key40": "2Yz2yTTwgYrbo3Pcyeewg3vQWeQ1W2dYzVGjqjTAT3iTWDS9rSg7KWK67HCc88urWg56tRH8LPBPyw13rEezRLWX",
  "key41": "Ahyr74EmE2ZYXkXGicHt8vy89u2fW3AqXYNn5YZxfuKhw1GuBvEQWcQriuw5aAi2xNf6uggVHDqXtQ8qNoEKLKW",
  "key42": "vAk16dC3gYBCyE3tZozMqPehsQAA8Q4eDc9SdP1at1QqF84FZex9WJ8tFPksEtDtqE4pe5HDBCdsmLHsmgpUtVk",
  "key43": "4ES61nmea4ZEb9ZoHmHZA3aeYbEde75GQMtmrXyHSpi2pXZEABkS7R4cy2E7a4LZvJBdC8xX3REVjnnkRdADWfZC",
  "key44": "qedeEmNGgKeoPywz628A9Nc7XMTChz85L4bsJsk3gB3HpRACWLabAzqihNPqhEFdKriy1YFis7saeiZktXo6ex5",
  "key45": "ukHH5f4UTuAD9kFDcYh5C8SgM5TUVNd1qsFYtjryqTZ41NHce6gVAYdVnQGCgNG8kPC4Qe7ms8P6MDxbvAJPKpy",
  "key46": "5u3LtWg4qsXjSmzeWew448QGRDYpmyYE7MRXf74N39yDwjxXhwJCNKJ8i3hXMgcy2LAbZ4RdwknPmPsnHHhPoBH6",
  "key47": "1xnxxmTVeE5L74bMBDZh3JMsN1HjonL1N8HbuHv4rvjVxJ1vdNkhLacHX4vpwLt2VC6z7WMytr2tYUNeo1HPb4Z",
  "key48": "obsvhQ8SmCWwStj1VqfMZAgcipk2FUFrTPrxhLjgGP9B7d5zs6jyrHtbHhfH4UQEvCsJ8FEbTRXthLuGY3JPiTr"
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
