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
    "9hDwZeumXMKHk1BAgMaXiwL1yR294tGoptCvctXd8vLSWaw69xJwVeko1eCGVgVENExp77y4eEb2ewyFVdsvEuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B7j5GQUMBRD8xyQ4ZNk2WgY8HHazTcgXFdVvgnABvHZHVNN3GFZRjkVREywjnUq9b7oJjWiTrwPzNiYWhoPQ7HJ",
  "key1": "62xNFW3ebr7c9vpPuQaKRcLPfYLiC3HVihi8C7b3sqJjjCqDTUiAgdLdC7TzyJKjLawQzGu3dZeac5Ng2uahQyaY",
  "key2": "3JkXhu62pBxFULdhuxFyvJcYyU9c6LFXpoX1RKqqWCFvrzzSqkjtsixYpJXqnRbEdcFFX3tZWHrQU9p8YDoaj22g",
  "key3": "5o9fTKHAEN3nnN7wD85CzA5QJXnxqQGstS94EXGCEb55NTbxxe1Wox747DBbVXJSv2SxUioGnz5g2rQrvQBPVWnS",
  "key4": "2vm8sUjFcgtqXpXCM8ZkerDDFCXf2CGopGN2hAs9STvMVveBFNAzZAbM4Pqovn13NwmKjwKUpKiNojuWztaoP3Ai",
  "key5": "2a5aSs7suxjRhGtURLC6kceq9Q9oAypuc9udYbKA1PMyz6NGw8V1KJBydPY27tfhaxaV9kKtFjuqPz2fjXFvPKNm",
  "key6": "KJSkMSpumQeANwTVJTV5XMNWiho5Nr2d2v8YPj3YgiCL9suJnaUfAoTqvgxpWN1iC3NSEwqEKBgK3sK3aumM1hi",
  "key7": "65gp9VGYDMqVVmJBpM5oPYtaDNiYZLbAmiZx4g4LZnV4QTCbp5AYhwcwXDjLrGkD6Ph3xFTSnbRwriFfTZ7J5ms4",
  "key8": "3QH2F87mS8XTb7xBZKQCr3NWwUBDVQ9zkeTSpuRZyGZwzUmzjT79k1mSLdruACLTgT7EtwEBCzHmDo3D2rNXWRX4",
  "key9": "rzj8M2VMyQz8j2tXfkQUSD5c8Z5sVDtfKnCEzsJeYmkp7JbjMKRTSY8ZxkqJXBz1XS6BwKAuRWTyJPQUdGhSKY9",
  "key10": "tAi3LMMFUJ6R4kvosdQiivvgcHGAdYT3Y9KgpkbtdH3HeXBkArjFFsZa9ED1XueAojkUEAsGmJgvKqJSe4VyTfn",
  "key11": "34xsPBzcPewbMxRJE9Rfkr8qZsp8ghUJTx2JSYfKrr6n1pGZBQ8gfPmKdiLmpGrjLVg1VGYGvJGDGEjDc2zqSALY",
  "key12": "5s4GfcQ4nsTmj44Pn1EjPwvnKV73XMFeLd4vuk7e4DgVgFDCw4EecsqoP2SZML2cK6j4AUVNX5bSs1MRr874eRnt",
  "key13": "k2Y3jeLrxxfRUWprDJPhHine9MhinJtg5rdePXAaMjrqGw3c9VU96zntj4RfEoEH6yuPGSs6gxDx1ZReSFSCbN7",
  "key14": "5VqvZyxzsd8zHAufXHbaNuGg9Ub9ZH3feRhgrdmFTmkdVs9noJjjxwGFpJiNgj92uGwJqwsYJJmXGdG2dspwY7rR",
  "key15": "26WXjLPaRfu63VFtUycp94iBoYgWcBAfvXG38Co6UioRUMLm4CKfJcuvwtR3f1Q1wvJbGCcyH9foqagc7pmszMjY",
  "key16": "5U9ezstkVr2LYXB7vEZmAPMtxtgKZSKfz7RfevEgQ7XkgS6aZSTn1SAmBSn2AuBPfPgeu7H1r9SGtnB56B2BHvZJ",
  "key17": "2QPHA8pAWhy1u4cziCNfexo6SBHYVKhZX4tbwhemtDKW4forYsU7gYvJmXJtuJCCT9D74rV52mX2mkMy7rao5HDz",
  "key18": "5DvJoEMh7Jc6zu9Cza9G7sHC2UsAdj8sfsDkhTQbCKNgZmBZLYsqCnAHWJhiXZfXMjKzYofyYVAYBp6N2WYwj1p7",
  "key19": "4VqJNVp51kBbYLv7tkvtR8VVNoHr9yPPAjTqSbq5mvz4dxJDWue3RatuX3NSw6jP6N5V38Yr8fu9iz2bgny4ouF",
  "key20": "T2UALT77PEXFCYxecLyJqa8ohnDDMwub24fqKHbPnYkJJVoxqHGio6fj68t3EqtNnmwUuyHwxWNtz3qfAmkqXbd",
  "key21": "2mrv5o9bqf1oHt455iK9hrrrBT63RABPmQeysprwbC7m7DiVncv41HSeXz5VTAFYGCaSkhigCzHDNtBkdLjQfDME",
  "key22": "3WxmUVPZBFuLwgvoSbyFHpt8uXMRVDc7JnnR8qpNRa85gnsuHDA35ACwvdS5RaPgQqEbLCGzat5oEnJ1ehKTd4Rv",
  "key23": "4299MktpH6oJr7u8diSdH11VTNCbVrw4rhE67Gtv22k2CvrJQP5sTRtHpYcjM52TXBKCshiU9CCUo2obevm2tPfn",
  "key24": "4WdyaQ9CUAT7a4ouGFGymKU2tLb7tEDiw5KunL7mjZq6gidwHojxuk7cY7TBqn3o5Aodrx8GQWM8D2g1XsFfoBYo",
  "key25": "5kYQhDUKjaiRNbvtconrTPgrSXSdeX3ELH9nDvnKqzu4kY7qegZ4mwWxQSQNFTx8x2a9XifeqXnvGAoUjd975j1X",
  "key26": "G8J3skuqMCGEMKZbnuu4nbhPErkyCL3D3m4H7xRye6TqRrZxhHh5HPSQakX5xw5RBvDh7tXkyAtrpDq6XPdUTxF",
  "key27": "LLqpL4GdAwivLLEghBWMwhbAiHAiPEbjCm4CYYdtH2bnMhbmjibh1dKoWKkiLSe1WD3sawn6j14dndCqLq9g27i",
  "key28": "2rqx7CSY9aHFHBXeeQ6m712YoAVCaq65GRkeSGGJ6Fhq8aJweBahbe9LMr6JA9jecbHXmsqG1nSx2XwjuJVTTzYA",
  "key29": "5ozwhyxJuRveBX1PNgRozo5bnfgWU7Uy3abW5QVzWRswQ4TdywATs7PHF5sKqWDnis5HdQt9W7PLyUEFaoc7iT3h",
  "key30": "2uTNe7X6NjfabNidGvDW1jehW4Lfk8BWwtpcUWx4DhGXoymTvn79zy9MuPefczDuM8kc221E6QCGm5kKk8WXiJMw",
  "key31": "mUz4YZfNLPkh7vsT45jDSoLnKajjWeEgqPoL1fP2dvhkyvg77cY1NsYrALFwdafBeJArqx8NxfAHdi3NJ11RCE1",
  "key32": "5pJEmjiADUopvpevtkU89FmjpQLZjT1Y7bMeyvCA6WpNEiErXUiy66Y7o7MJeBtMgKfnvR8fwPDNL8irEYqhBsDh",
  "key33": "4kpbwh7AUxWwBHTfir4nFJiSJj4m2YCz3Wohe1emtZDR97RZRM7JvPbPbppR8GbSvdPNsZZ47Lf6NDsTqRPr2zWx",
  "key34": "Ymwme3k1RfaAnKXSGMuy6WuoEuVvPTPz26TApkWeFMgzkPPXmKrTe6YS4SGLzUhwzpKLG9z2HATahXto9faKQth",
  "key35": "Adtty7yieBakg8jT7tFqh4PczQU2zcVTs3NHdiMEhTi1A92bLdiraZq9YZacuRqZtYvPg4aoDMQawgeZuzcQ7R2",
  "key36": "5MrezBs2BjANNi6oLCRuL9V7gtWPzjELiDVd9fTHwBJarK3WLtNEWYWgzagYpq1RkSgo3E76abzdQhKai8Vi7mvj",
  "key37": "5HG4hThrjnCDDDpKU6pNRYtYQsZc8Ypm7iEbHBoVUSgHh6u7ziRAphPwrCcNu5R3Cc9PiM27VGxvBqyv5smJYz1W",
  "key38": "2bBfQTHzWNYAzJc11S8MRva51pko4g7dZbSDvPykZ3bkBSEpFThFwy1KWh8PE8dZ9jo7LipN5aptii2LXUpxx1uG",
  "key39": "yJpEzFR3smjDhjkYbuqEUFRpbGq4SoEyBWxLFadPAqxWdhrdB5K9F5MdSahAhcARupsXKhKXNF9bUCLqEsDoSfE",
  "key40": "2ZJ5F7EvWRRSk7Cp39XotvkqPKXSLYy9kCuV8zBTMCrVvUPXarSzn7m3S19uEpcJHjeL1c6b521RVNm92UsgKRZN",
  "key41": "uBN2YgRGTKwaVH7RxAF3cS4gsb4MjY5t8TMxrfZGaFFhp8DA4wJxN7ruA6SVfWuUhTBYPKWz4rkWsWLSeCXyzsS",
  "key42": "2HfFC6SLQu1dmM3tFushkkFpnim5S381kJW7qctXHJ43Js5xv5RwszAMcunvQe21zhdw1rviVgS5aXuBDhx6HGCc",
  "key43": "43jgX3juk2uZ8AUFKq61GZMqYePrN6ue7r4A4WgEmjSu7HbbEzNMzjT7ufhC53BcJnMVbQDnhMBaw39qPUDshmsA",
  "key44": "2Ywda4UFeag19tGsqDCjwQ1P8T2JyyQQGJ8hyHaqmWisGSsXgcrwWJNZdAtnM5Vgr8nWsXbmSWvU7TLtfojAtky6",
  "key45": "4k39krnFT1h8TFC4ZDjmmw3XPqR7pi7YJbYoCPuNWd6s8bMfxq24vJciWMz47ekEPBLPVu9bodEGR1aNfSZG5r2j",
  "key46": "f6JVgJfzNTKxCziXpNkRSQBM3jHoQfnSXjWZ2Lmz8C1EjWoFjuczN1treAsgycr9Mb5Mt7Cy691S9Jfmir8XwxR",
  "key47": "5a2WM9MAUxVKTAz5uF1bKTKkcGakJSfLvLmwQUQsUMx1FtHtNGk2yZwhyZFLBaBWQz7bjDMNQGS33xMpSvyiNkEx",
  "key48": "3C4rLrAQrpWrKshfk6NnQGUD3yKuaCFpZusGdi5WZ9pRT3vKEFj897v9RBRfUaKuFJyavkZS8tjKq7J4pWvM5vkP"
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
