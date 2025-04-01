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
    "J7EXifMn46Md5V1ZS8vDxqt5y25dvbrZXjyzgK8U4xMGEygt7S1yPMJpw66WpernGryoryga79QX7VighVtCrEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wJ2FHHuPdVkpxPXDZNV5HAXAmVtALrx45U2DaKYURqXftCgmLNKonSNUq7biPXgJrW9UYgEFGY2ZM5SYZdgtDJn",
  "key1": "5hqtG5WyDcGKGSchFj1k6kvsaceGgRvU5dW9ErzgaaqsNeWjEUZxZkfFiWNHBWQcF4PuP97pqqfiCDJyK9DW4YXP",
  "key2": "3hnk9v65H3TZjRcVpA2panY4ytSQL3b6kXXXvNnsrvcbxsPD9reWw995NumviTsGkkLUPKpgoNN4NahCmdVDf5ua",
  "key3": "4VKnxZs2Nor4TXUQ51CyNDy8kwW9mHpJtWFQhL77yTGV1QaEEhw8RbBUEiCuNZNkRunhYAA4widq6JhHuSANyoaK",
  "key4": "4fetJHeCvpZDS2de8F9ReVXFB6SpfLr9YR6AX2giyZmWKiBXgMEKy2LpfAnP97NTyGY8zzbnA1XdnoyEt4jxsX9c",
  "key5": "47CVJR4TB6iWmmGvKXLaTpmiq2wqQFY4eHQQ7o43cRDrxxrZb8adCSN1SKxXKNc6CUbSqD9tPvHRHNm3ZxMJFs9G",
  "key6": "3nZmkH6oEgS749oJv9TXmZ15xi6FNSfZ1mLYhGRLAyoLRZ6v9GiH5FXjHn2LVxUFbzKyX53MT54fRPFMxPvvZHDE",
  "key7": "5Szem8NWzvngZ4W6vT2UjAZhHKFMy6swFY4jUu5M3TihqXQLNXjchZcHbmnsBWSB2LuZX64EnkXRmLY9QPaDTHYm",
  "key8": "4gz66mKqpkwhESiUFvVqtJpM9w9dbBG11zrPp5E6SZ49djZbvsZikJ58CNiEjpyxkUhwY62DZxB837DwqhjDFVGA",
  "key9": "3LqKqjzfn53tjTMEbm4en6KPtJhJrB7eY9UvBVrysCmZvZKCmKVUFQSkgQb2ao3Xgep4K6c8DMVv6xQhqcTe8ohF",
  "key10": "5pvHGdXHxKKsZKb8j1riw6FXkQKLQVVVYKDvisbb5bg5XPzKrtXH7bxGfS8HZSQ8hPH8j2WoyV7bFUXGBT5EYpV7",
  "key11": "FW2qF5mcgdK1f84NNeLV1G43qFcqVB7Jav91UkhgdWg2vfiCixDCb4zzuQcyxAyWsJQ1GEUu8c4EjNja6As1jar",
  "key12": "5Pynyngumo4B55VEYxyAJrcYDvkULNEn7pUBjEGB2MwMg2R7UGHLrG8yfrUTLp41HQKKJoBv1kigPCF5KBRibW6f",
  "key13": "TARJ4hVDqdHdZr8Vwgh9cDQgFhfWZ7TwDTHGDE1ePM3zR3fdk1x1sqNuhWzEG87RSCji7p3JX8hKUnPUmVPPJzc",
  "key14": "4as9foEPY4xernKMcdgotCxCTgaXVy3eBMQ6H1DrgwHmCDzAHBKXVn3YoCBrMXv2RBVb8dum4raFyJpsfVGShpsz",
  "key15": "31y2odTYGB8QgUEv2qL7cSwxWBS4euKXuZSnSjoEgqnDGogQDbc8fgtho224HpomAQhQKn2MkXWHYpVhoFZPqtvb",
  "key16": "6fYhPph5fMV3q9oD5CVQR1mxeZHHfHZ2YhrgFcHNT1tezZics3Z5xqbG5n1uvsVpkZPhw8yw9pM1CmK5ot7PavX",
  "key17": "3TNeVfYRL7goJXFqKd9astDeRdg64NTrtDo5avAUWz7mTKnkwzzDEvtGYdqY8gDGdLkaGprKvsREQKvujs7iPB75",
  "key18": "5En6Lpmqd4CJjiFDTuzrvfsNP8cB3riMK6vk1NydRpgDBq6PEgTKMmotxz6jkGQvHqnnA4qrWtFRerKbNyJFLJ2k",
  "key19": "U6af2uTRHbcRBrvaeyb8XAvZUMTXX1D4HHsi8jP1fV8ZPiLjTnH5ydNcU9zNkehGK8eYyTMcPefzNrfYRWPPmDF",
  "key20": "HEbkmMc24NJb8LFUY3i8ZC3GQQoYiA6qfPcnhwCTWYmnBjKMekLXAQphUV3CLQGqyDs99Rhb6xdrzP8ZwQDyY3Y",
  "key21": "2WSkGfd8J9JV2cdoqFzhLXaJCmwq3zZ7zV4d7xT8EvpYx4CPSzmPFDLE7Z6yRYpPHjBFpECzW8c9f4ywGYMMHv4M",
  "key22": "4iW8mVhSX4KXCEfEXC71id54VwHqLARCC257UbT6z4L1ebpe9WBBe7HRAsE7jYwBmN5xiZ8b8ZRnfPfLYekAyenG",
  "key23": "5ucGckfhuQ7MxoUqfQ6n4ff8NtA1EQne2YDSupRbAAMomfeNSx7ULM1HxFikmT78cm7rYGao31PqWV5EZqEuKwFz",
  "key24": "R9Y9Lx8RWfRrciVfKXqPuC5ri3sKSVLoUKiZkh3ZLjsXugduSAK3WAmR4aKcvtNwHCsvcaqAmCGtbcGZzbFWbHv",
  "key25": "2C1u1EdUP23NHdymatYpPrGrzU3apKHvKAknq3bxvCrygUuJxVE7pYiFyNKFzBNm1NvMh1XZD5D6jXLNTWWvXGRy",
  "key26": "3mU6wvHA4LwhU6WssVn1pw81ZbUZFB9DWAE5Uy1gnsSaR5erFVWqb38ritDvvnGyoTn24Uk3wA5oAWyfazUAeN1j",
  "key27": "5HTKMPL7NVsHvcNXXXGehjJHmBKRqoTqebotpz8kMSaZJoEHUPpmW8b6kNXzzBbaweHeemkxZZtZxBkXK8xNH3RW",
  "key28": "4s2AovPcqqhQrmiE4bneZWydLXM2kkcbZfEuW2WVTVNAD1V8C1DmATmgjwyzST14yMJTHCrsq5AA7gu237my6N61",
  "key29": "2xGwa1TsV6DVAwQ6fujTGbR4iWVoymBFU3aa7BZX6AqD4gr1cmDmLj5TSde7FWXvQqSm4nieecdVRnP7pMHai7gz",
  "key30": "3jGi85qRGoqceocWNXg82AjZ4tUcC3ALo8KLEPJTY15D3B9yZ4PzV7mUeXP1EXJnBXm5f7o81gcy1GiuQ8oznYuT",
  "key31": "2onTYVdoeyh8TrMmMqn1uywpfBXTZ1D3wGDBFCGFbDfZWbPvBfPwcm5zsYakDVzML5T96WS8Juzy3Lt8vFrbwtbg",
  "key32": "58m9SSsVW4T1BxDf91uVUS5t9LN6TeWsK181zbw2Bv4hghYB2ji23XQeavw22hBnY3rBrG7mZh3JuzETy6dywScn",
  "key33": "3JSdcBVi6qYu3SEpq3QyxkWoXWPDgJ6iZCKYcyYAMXhdc4SyhKZwxAwDsZL4s9e9Ps3KNx7JUysyetZmEn837tTU",
  "key34": "35nvgcvPogC1FWTJCtgJtvwcJAxAv4rXwYAuuBiECPRMCzX5BMgzULnQLgWekdwq6XabXCuPXKNiHXKQEfQYG8Hw",
  "key35": "3Y5k1bRtNVSk5Wz3FqxEttiT3cJVEKTGkR8PsRCVnbdg32ZjLbK7EdZyz12hK2HQeJGCFz1TR5PR31YE7sutaHnu",
  "key36": "5RY3fcFgArExxYnyqQ347RBcqbVjQ28WSG6Xo3263C7GZ6SNwd1bLafPZcaaWDnmx8QThgs9J5n7NP5raAGPKrwp",
  "key37": "48EEb7jFthJDxefaNwJiws6MbzQwYei6rXy8qkAA5h1o1KKsP5d2QhF6hsvmSLKJ8NAbrfCgWtGQgPpPgRFeuLXq",
  "key38": "2hT6HpqDgdQwguYLFp2bsbbzJDGPg5v7NvTcKv6T1dYwhd8XYMkhKD6cm1wEeVGcHRfRZ3juKB2PJbRe2aPnod6p",
  "key39": "4STMJHPfY3Zb5Z9odmAnFSbvigcL4Y2eQDdFyjR7pPAyzGpGiNmDUBvDLgaVQXBXSc2M5AoeJdHijY64g2aKZeHf",
  "key40": "2pd5VZTvXVJEyro2crHYyMTAE5RSmckyw3QxzbgMQgzdQcQKpAeZgQchgT1WMP4UVKnFuyT2kKwGaHfcsZ2UFR63"
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
