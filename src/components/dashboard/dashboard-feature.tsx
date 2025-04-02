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
    "2ryt6uCCcafEwjwpiT9Gy6haibkTkf1Ud3RW8v5kN3KoP1q3pzCXuvHuEjNtnbGfXHSJS1vx1hj98BKy8tq6FZy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qKm2njw5WDCJrQfYKjWr8qUJBmhDp7FGyJLeZn4ow9hoy8Tcq7HiY8HE7Zu3cmwWSCXAh4rY1HGjrZiZn29jjAk",
  "key1": "wwR3kMVM6NDEHz4J3AbN37NgoreAQsterGBRhubTNmokiY7DiKs3C1puhBZsk1RWCc8JG8EWQtyaYwLsnZE5fmr",
  "key2": "4JrE1w2hwj9NuE38X3ynAZqaKmyJf6VbsUn9NVJg5Xk75og3ayQRiQeeUQtDW8J9EL1AqheRRC4nZ7rQZkyD7V9n",
  "key3": "3UvU2WGr3V7oWx8Gs5QLuBtRzTTUu5vcLhWUeDuCWAxBfDZNktt6w8B6hyS25G9bmFEPzkAibDib2FPzYN2cAtmZ",
  "key4": "58Mu4L1orxTNEjePmG97oQDFxMXWbULZcVqUju3NHDGzpj8NV9tz53gYFCtyZLxpLpJpiYGd4gXEcSxkUTDF9P1i",
  "key5": "5XF4oVcygXvCWicEFNYxrL7AK1FsV7MTDTxTLb8X4G6BocDmMnNMgYdBZLc7tM52SnXKcPciefPZyx3yKyVbzYdc",
  "key6": "2LE1Fi6hHKc1HcsGZBXtFTEa7hdZjPEAtQrWCNPdYBBxvb9XjM5zUwsfPVv4psTfLgxcWEsTCxE5Hxnzy3WwmJzq",
  "key7": "4KC7ZypGxtnPPb5jyYySiwT8jeWdz55c8x29sHYejo3g22F1M5H8ap4x9Qd6cfWgwPpWwyric2SeCAYcZZzQ4kVS",
  "key8": "3cYjXet4gazizr8r3wtjpmpMRtzSZd19EJtL7Y67LPppNseGozJKUT8yaAWNgWbQpT6PZtuYxmc76vnPgWeifJn9",
  "key9": "2w8FEFXodS5QBEoRdhx8GQ9kSJERVtCd2JjwBo9hBHfZunTigmX8nJTBkdjywNphHEUhnF5qnSu4YQHu1Jrytqbg",
  "key10": "4agtCqbC9Tnr1Pp4dwdY78vYrBQq9L2ZddwCukqjzhFyX8Z2ygs8KfTvSwirx63tNe3SfyfD8G4oRwSZeuprbUiE",
  "key11": "59JWQYhJU7sTN4csUWEMoYqviAQTTiDh2Krg3FMHXw2UPJVWiskyF2ttYQm817WZciqQNgqqHo746UN89htA9srE",
  "key12": "4xkyjXur85CgMp3FrPcyiqhrF3o7HMsTxRNsvgYPivKvLVej1BSmouZNjNMvqK7Y41FVoWdDoyjQS2cDkN9qaA3d",
  "key13": "43Tesg81uWKExwux63UY3KoN7Cb5H3T1kwFWz8t7sN4mnjGZ9Z6deEFfDyTTmSQ9LxAc9HmUJvQvQSUf4AecPxwb",
  "key14": "APBDJKF7FoegyMHYpFqrQpJvBh91idD9aQyE1S46eSQnR9o6pZd5ge9nWnnjC5tDnvD3U7qCa7jiphrC9nMZgYJ",
  "key15": "MwxTunjRjuE1hzNFoKw3tTvc39Z5oKps7JBNWVU7PXAK5rFPdcidrLJs2FXsCRHBGz4ewQRkJxG3LeN7dvfpm4S",
  "key16": "2JhauauXSXDTCYm2Cv7ki7AM142Eh92TDtqdef2ykaGquMEsuAjeadkZwMJqTx9op2jG4XoVxK78kJgBHzZsisuj",
  "key17": "VP3aPUKimFWanb6XnHdN4B3n3G4TD5o4x1KANXjCqZMdHCiuz6tutcAJQW3zV7Dp4yQL19frQvYtrU7jocw3H1F",
  "key18": "4vTHnWBcx1LxW6r6YntE3aVFNSHJgrkWH2Vdcyjg1h2jtqSqbRa9YJZo9MoHVrbTKnccYL2RrXg2XZGHWAWr9tu9",
  "key19": "4KQ11s26N3YgEKLN61nKTfXLkDESqk9vbFncnvgmRkY9khJnF51Vr8q7FJ1op9sLjdbfvnu1f8CbAm66GBVpVUTx",
  "key20": "458ybmJStvy6xjrPgVxEunpZsUem8P3KrbXQaUR7wawLp2v1cdMTzuNrAAi5oxMrfGsrmxBdc4dfcmC5WmA35EoA",
  "key21": "2PSV5qWatKcixx4oD5QhRFLMCn3ZmMzpDcKyzUMXLSJR6bmRwZRdBAz8tPefzws5Dva3wyeL8KNuerATkyUcX7gZ",
  "key22": "4UMFV7EacjViMJsDorgZxZ58JUpRWiqx2hghQt2KskQsAoxJnLja8CCtNmokKnRR3imRjHYC8S5FDrsZJ9fCbFKU",
  "key23": "3VAQFvj8Nee3zseRcBnAMVMSNdZQrAasUMA2EBnHP9mtMpLUdGMhEGhCvpjvZpzsY6DYwCALeM7eXXVvpQzLbd4z",
  "key24": "5vAQFoLVumHrs69iKfGDEiyfBjbCiG3tjUWzrhLqd3NsaTHgiTYKGndZPgFTmd8iV9pPfj982e2PepPjXLuGwVhA",
  "key25": "2yjxg194iB2M2sT68BZPHrEt9syKspqHHs1yF9sNvfqF179zpfjFq1x6MFWqzzmVkDNzd1kMAZwaxSMsxhxtiQW9",
  "key26": "2JXb6yzt8cV36voexJFzKvjxWgVLdVKha92ahjLhte9bqshJkuMu7dZvBa6P1SFu6ZpmFr1MbEtjHLJZqs3DyxEu",
  "key27": "4D27u9usJb644vPiVnSDaw1j2a5Tt5RAAmGhdSvKsKSwPRhp8hwapxdnSUkc4CVNQ5bGtaKfp41wdnoDjRRMzADd",
  "key28": "2r9BNqeV3kMPNxFdZiQkYocyr4BycKjGuEnRj19LVNgZbBMnRB3HddKTi9JDKGj7sGmTUf9sxH2RG29q6son2ufx",
  "key29": "4XncWr9eyKo28X9v4zJL49sbxEQTijc9ATVFTdo4ai9WMDRAivssQ8aa3BmdqqCunVBSimzBJp7HBMk4cvv34UUF",
  "key30": "3aKXHGNiW2Fx2snaiUekCovfTevQ1z7QS9K7RQCnpehpBfQ1NYe3MA9J8iYtjoEboMPbyMTjKF2FjY5UhYee6a7H",
  "key31": "2UTuaKWPNhn6u9L2QYXnsP6oJuU5Tc6RpmfZQDnXQbJXC6im6FirGcnTVnXZTUsXU6sbK4teGPC2zN5RKJZB1YAH",
  "key32": "2AGGceH46Mn4QkqFt7pCs2YB8JvFU9G2seLFVtvLfygKbgZi6b7u8LjrJbBDg7kpDvZkd6mFEiMRNmQeumsjiiWW",
  "key33": "WNg1SEByVPoR2yQZ9MLRdzZMYgdbcFhDiugkxB8Ek2hV22HhXEV7hTYErTv4UWf1wvUUf4czLbPvZWWzdqCftdy",
  "key34": "5Fgu9b1xthTpUt9p1bhk8mPCQURgwFi8f3Q7CmYEcWu2KLddPz9rjA7eVgLEC2R2xP9gPJZ3jUqG6DUbMYXsshUW",
  "key35": "5NBMHNWghadffuW5g3JjiVP7k6Xie44Lqs8UoHocfQtGBvQ2iVUrjuUE75PUzMyHE4xiNYyiK5MDYkSGdnF8Dj6",
  "key36": "54B4ruswSJNkfmZgb3pdEH3MSz4o8hPPrXX5ZTGEdDpgkCj9CfikE4dWL14ZxpZtn5E5cTShdhcgQNuA7CwT6Lfn",
  "key37": "X72aschyenXLmQk9P64yvRukrwsJNzLcQzZ6bnMLt6TtL3QqdbCzMVuAF7KCTW8xNev9skiGJgXu2jDhNPo4mvV",
  "key38": "2St5MKvE1PUQHUBpsktLqrjoCcuNkxvigtJdu9Fh5vNfy1aPU1qrJY9q71N9sy4Nzmk5CELdCJo9kJ9CYENVmJFJ"
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
