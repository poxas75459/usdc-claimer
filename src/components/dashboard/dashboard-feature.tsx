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
    "3rS4VvDVsnfscQgQ6CJQKiixN4PpPDuiKRiTn8r9TzwcYFLCJnRWPnEsaEzvkuDf1ywLGwQgbicSWUqcYxN8zsz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GsaeNKsQLBLFrm9WL794hMDyHXiPjCD18WN7dNjUcqp9QKwuvb7LLRXmwA2X35qGSrLkxUhzgMfbdw3bZAWa3kH",
  "key1": "4PqwEVU2AUJwgEke1Cce3Mms6C7t9NHm1JopKErFWMwXdLiUSwe4W3MTdMzMUJ8y6XZaTQq4rmLPBoN7Kbrr22Sz",
  "key2": "5CYjWU9EQfbQYMvykmKR8bax1UtAtdCapohaEEmB4Lj1dxXWiSDc5xLHAuLkuy1Wdbn8ybEJihPE77CREUnh7kpj",
  "key3": "2iCd2XwbsDtrVzxBbSd4TMoN6uSzo5Sryu4WvxkqepMg4mxUh895kH9JyLY6ZYhniNgzgDE7VAmDeoAqZYFFqxy2",
  "key4": "bCuSh27AfgqTZC8GRD3sfU5XmEdTQ5mXTjZmn3L1J791gyjucDdQaUvopXP2zNg8FKv6gbZ7BJLCYChoKauiRsR",
  "key5": "65wzV3Kxp4riRdU1gvjzMFXQ22h3qXc9UgNcikVnqCgkmFCaTAZ9aUDR7uzkMDCHdnHvTUJBMyjVmWVMT8m3bx8J",
  "key6": "3fEFqqY1uCFM2xX3AFu9H93oJXcKye1eK5dmgeGue3U77BUQ6YcgcvfMVgfzLfC4JNJ3F6A9f7ubaS2BVSWMBMY3",
  "key7": "4mH52sXhgZcXAaJkWMgwfXxAorxh5MyXnkfUzNUom41dsM7aivKodXc338AUGxWJ26EnTwGM7LVheFP7JuDt3DjJ",
  "key8": "TgRkKNwUbWSmmuvmMoBh9ULcEYeWiD92h1NYF7XYGZTmiFG7BXeJt5BB3qG1h8BQPKYb49Er7dUJxymvQwDpxKQ",
  "key9": "nagso18nynwHUgGkzTUow6nFxqpMKGZVYdcWzbxQA6B7MHFqXcCeurJ6NuXPsp8UnqMTZtQvPmeY6B29QFRUTQp",
  "key10": "5oWGKkwcbBoHHyE6YrfV2MRwQJ3tRoSXytARgHWcVhrrMcnbDDT1x2dk3HmgJsERVeW7KYTSGwWFZcB8cGoEupep",
  "key11": "55gq6vE48nWbZg9rtgFt8ktbsyAReBEQ1ijS9mXbG36BSECJmN2d2yKgRSfwWRGiSTBp6Yxx96hHXUXuPQzaQdjK",
  "key12": "5PunhGB2mPVx1kfZ99PwgdEnAsW9XwG3TPcfpo9Kuvzo6AJixiuv9eGr42cP7JVghx7MbcWW8YY5s2jgU5AnkyPK",
  "key13": "sEryspVPPPff64tvDiNvzGRgjGLxu3TyMX1Huoz9y56ZbxA8Q6BN89PK7u44H9pqHqir6s5AhaytDf4C4WV4mAG",
  "key14": "57AajS8svArvNn1dgQBru6qQ4hLFqFUCFGadH6zq6D3QHwPDak3b41SavLQKifZrK4XBvM8CTYrk5QovZMWc4a6W",
  "key15": "2mHvqPmb4WGMP7JGqMDFyqihHamFnMnjUiBcP1gh39XkwTtbLwjQwPjnufuExvXAezXaKEo6PR6gEY6BWVuozBB8",
  "key16": "4APP2Mo9oDZLEMHxGGnCH9pvLDL83LgmyhGj4aUGxJ3AvFkoLcNhxz5YZKkdKTXveebYnYm6Er9dC2Xv94b4nFBJ",
  "key17": "4C8Uxy5663xyDPKqJtneksCPHH4kMqpntLhVuJqKdyWdg32E5AK2fmqEunbNWzHsUGN8PgakP7yrPSGxAqA9vh33",
  "key18": "2qvUwqoR9sa8UcvFMnBQYZSgUQwjrfrGrmpkmMtoWS3hFAinEuN1YeQ9sZd1er23uMU9e65yPp5CKckw6SUgs73j",
  "key19": "4jjujcuP76TKfWWxN8GGvuJPywcUzN9G6QpjbnDah8Gy9n21sraAd5kYXqNf9zhGSE6CUZLcSFyARcKF3VjEdoD3",
  "key20": "3bwwUtD7FQFGRAm7LpaDpdsjihTfHfWsSNVC7x4pBxCqBhujjhhiGpQwTGwJrdgL4hHXPnAmb5weG5sbkMg2YSd9",
  "key21": "2dYFfdqPZuvwpXrU7XCHLzrXGwuzDq9q3TVE5PngwgFz4Q9tgQsQdfx1ZtW5rvJTrDf7UCHFiaX2W5NgVxpRYRpw",
  "key22": "3pQhLjEFRu4yPURT57DUdTwgk3R3sAmtCvhNEnki1B22T5jHJjXMEf5TrXyj9aB2gQAX5f7dj1j7q3UNNGTpPhRd",
  "key23": "45BB2U7vRMqwkEkVavjuuDMF67aabLLcciR9GhkDp5Hz48DhA1XCU66TG6UHny6rYAmNfK8SFJup21ZEyc52z9ZA",
  "key24": "51JQrXGrUoPAV63i3Db6LXJsEcsjEGZBPuemTCzcuP2q7ShcGphobqbPwyjujWGv2v4Z5PVFVJpNtHqbYpg9PpRm",
  "key25": "2iEKsGsfMdpURhsjZHyGbuTZzmuM3CdvWApk3QN3ZKuUWgCAFBfJr23opY3CjFwpW2nnyvCfL71sKDsFC1VyYt9q",
  "key26": "3h6kDsA3EkZJ1XATQcTHrVjdMgP96HAn9NgRRmyVoY1HwtUHcv3zBW1MzssFhS4zHzoU6T82Hvev8ZcKtwr2JvM3",
  "key27": "djEvoi63UkAp4Uok5eA1ox6XDBJRBKWQVBVFgrCaDPtQLoGtrKzDZX9Wu9Y4xS3Fgfe1T5RP5XF1CZmYah5wFcU",
  "key28": "3U16x3LdhZgDcyBny2V4xPTbmdLSYiG8Xr1izHqhwAPNo5SNuFcVcysSFDEYJ7C6fRVXrHGMofu8zJajvPAXuXFU"
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
