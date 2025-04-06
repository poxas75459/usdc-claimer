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
    "53MTCxP8D9pA4oUVevXc1rWdM4qYoQhdS9hWPjBFw1E6KBjSCZ15gL6tEqQTw6rqk7ftSWtePkJiXnDhvvCqaWUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uy7g2Kzp9AR7Yk2cVqvUySXhFjPfYKV8r3ePepomH9MTKw1QmfUZEEtufgEy5h1mMiRuR4fGBuHXFKdBWjH4Zf6",
  "key1": "3qd19yk8shfzjPV8w1e38widGc7yrjMcoc9954W67wDunA2UEmQUPE5X9PZcBu8C5ZoUYWBxQcBcWGeo8QLGXE1o",
  "key2": "5sfm8t8HF6wb3GMEQYEuk51Gu6jHSELmmpNmPnoD4H1vkLBCdr4Q8GxH9uuNyH4ibuH3wVcfrYtvXk3KUQxDvCKA",
  "key3": "2Swbix1y1fTnB7ASsi1NYZAq27kpv95uEDHXSVF7CBdtDZeiLTGsBtKmuEE4N4krTPGgsPiYc7TUizrpCTr4jFkM",
  "key4": "5kEYHwuCMqZWKD2PJ3mBvjADAuDHRFnYmjdtHQBMndYDZZN4r9LWSvACcRiC1iwEMjZeCCmQinKuhHHWRwJjizqG",
  "key5": "4BoyP9RuKiN6XRbi4CHPNvTBMgMD45YkdsLMZ74X8xQVGzwEzpUbcQaaTTZPDoUN7eNJogJmxCbTkxNMCnMChm2b",
  "key6": "4z3WxdjpHgCk882aiE2G4oGY6JBT86gGP8wh6zGdh7TZrc1cPMeLRFASE4YTw7UozCmN61pjwCDYxS1UfX6D37CV",
  "key7": "4p9yx16dYVPNyCPQ5RzjBEjpypCTaAniRb6JsP6gev1Xt6uCyrpiS8PBZZNnuUg55YVScLmuWkb2vsFw1oHN8BS6",
  "key8": "4RRmCG4xb5cFkDfDVK2F3BUtZS4qbxT5JeUNyk1tNGfmykBpzkhiDeAhftHaruhog7bFMCA9iimbGY3ABWQhPTZo",
  "key9": "2mMC22ZVjbPCoCAhVeNNvZ2PiJAf195Xc7UvZrggmydjtn7rpuU3yJ2maKoQRaBtJrQtg2QGDNufx32bzogpCBr3",
  "key10": "4RU8Lg5fLzCwr695x3p791eMPyDdQVa9LwzQBKYqoUFMYE6URAvNYNYd8GVqUSKjmKsaKo76Cjo25FBxAHhXfnXX",
  "key11": "2gXgyhUKNzUTYiuaoPsAVMPNVj6e5myWeXMhoUJ3k6uEWqy7Ez6sB9q6JeD8DMBa5GR2ysK5PzZocb5q1Zcong8y",
  "key12": "2Z3uLNThm7S7EqnGYzPcK9ZbkCFUaqYA7D5NvacfXBkfjH4Cqis3ULCxN7WJQTVqHG7bttWSxhtgjC7Ssm4DvoKA",
  "key13": "4MPyGnxpH9ewwkeBjtShy6VZFFtvNqd41FyVCg25Sz6K7j5CcqraLVETthjbRJrHUM7JdvG5eFG7fHRoYtLF4BDy",
  "key14": "3h5JmRiyar2gSqJvEh5MSqd8p2WzxiZzMwVvkj6Vs6PfLTRXK8HNFG7CZtsacMoPg62rhBDjE4L1MgtJwXw6kJu4",
  "key15": "4yv3fHESkR8ggPnrVeYLHygP2Q5ggCM3CDbaCnb6DMyuaha24Bpj2um2TSr59eeXaU7ca8QckUdFX52uJUWqnr2V",
  "key16": "3jXGwhqjKX4n8FevyHDWSGn4RqAPPiRSDhsnk7tUcfLcPmFyLLm6dpC3yLf2QzHiqUaf9167Xi7uhA6MqxkK6yc2",
  "key17": "31bswXGjiFvKJj5knP2wnz7dtekpWHsAb52MC7rm2bKwod794e5XbpR9u4nxKhWpnu3DVeZg9JwRF9Te6PfaELPZ",
  "key18": "49btHj7L98BsxLWM6pHYs9qnjckzvkpncdS2ibTfPCwcDnKUk76mNS7ATfHjekskw76ZPGn4BVCgfDQ5UPY3CAue",
  "key19": "2dj4CsKUxXQNQkgbXWydSt1Nf9pQizBcmmeQUrod3TnCkW8PqYfxHCAgi15W8Rumxb3YEErM43i3B7Guq1A6JU5n",
  "key20": "3Piyoa7e2K1Wh3oAEJuN4aEwTxAxKZEYj6tviA6f72qAg4Wy5xy7P3b3fnzktGqhPkoJwPMK8ivGh9HbPFQZZQpw",
  "key21": "4PkzBY2B7WxcEygRumttcKToQQjUeK9SfjZDAirYz1B4ApiVw4HksrLSaaXZ93uJ1avzLNyzEnDJZq56uLhvqnEC",
  "key22": "svLGy1WDXxaVyfroBuFv4cgvu2XMVknLajD2MAktxrfnGjZdEhWKtXZqA9RUyQXHY86MJp7AYF1xbUBfX1PvZoZ",
  "key23": "qFdm5GCjpW2pKQm63aiFUbDSvZUQQSEKkRuVShvY7oMGPg4256TFkw1Prqpk3ahUcwvNvrsAtFdk8J5piep87En",
  "key24": "5sqkw8NevAqrG7i3UsgbyLBwrubHGEL9S2uoMtJNwkZmS9MUUWwRm2vNQM9UseGqHHRkBQhoEwviW9Sr8skZqER5",
  "key25": "4JA1dK2oYPY8UQ62xg7hgKMvg8AjqF8RdAxBUhoYPsS8CbZSQwEuqRpyMpLo8CFA5kkasdVCNmW4r8cndWNRJktF",
  "key26": "2CnWXTuYniQJ7VXuWEdZgs9pnALNEwb5McSH5f91uTwXogq7KqADSWPfbtd8V5XfFWzuwV5GpdAC5JhPwxTr1GHq",
  "key27": "5j3m7GKhZ9RV8quWzvMRvhoMLXPPUABDog3xiFzJj8vhy6faxznafVCH7stvcSXvawG36PYiqCkkG4uswXxJ8WLq",
  "key28": "V7zghRd23ngK6b66nDYem4ZnchpU6fUTDv7uC1qSNP61ahfHn15DZKCQKgtBbPPeZAFUdQuCdsK8ohVVFZo3DfT",
  "key29": "4U2vDiicYiQ4jwpvrKbMyRU69Ai4V9xA77XoBv6riRfYmBFXf66uyUofMS4bm3y7Ay8HA5n6MiCDTtXcoktkDqc1",
  "key30": "3r73s25zBt5Zio64apbZ9ed3kiJSnZh8guuUWvrXbXmi8apgx9xiUg7vYxVZ9ZivFci3yzd1gv4cF6AgdZ7nNWdX",
  "key31": "57r1jA5gy4mfmWq5o2QKrSeZbTQZQchRiCkCv3xmoQ595x65wPhhzmhRzBwSajtMerCwUHQroA5vSdtRuAvY8snB",
  "key32": "4TGESJ6LrzqJMzCs66bBrMGvs84bd9By2uyvmwefZM18RkWiLLN1deiicmYg4727CKDx94t7rcajkHZaPhGTG5JA",
  "key33": "4WLoWrimBsysACSx1TNwMGNc3LB2WWvkPBBZeKRkJP3ckQEDdw4bwa6YoJRDwLwtpH7sdfP5rdRcKrhnDxuEpEmH",
  "key34": "h3DjHs6PMWdJ7hrSEwXw1xqYopJVBmC8wm9VobrTMvz9EaJqUW9rndF3gbEPv7dJs617Q4Nk4mbpMiFHPLKwQQ3",
  "key35": "4z7sMc4BCYJSHamCTmhApZgMrkkPHzucoK1UJ9gmUbvs2uijGcAUh6o7EQkTiwvdzvhNMZsFFL18sRHkynMZMSnX",
  "key36": "APBV5x3NEAwUMUkf3Q2eEczpRSCrivy9wph4UZjNeX4KwJGMYYPvD1sjPhnKLNXdb31nmuavzg6edfxiAugtdKc",
  "key37": "ExZ8WoESv56gDoX9hHhDWrv33QGnZDhSn6tQUJiXKHu8tKuH7VymYFhj3n1a7eYJGedYpZN14sbj3UdAgX8Uir8",
  "key38": "3fq8R3QgZSuiYZvt7EBv8MSqEo9v48wGLtmL1oxtsMyBhpRvGcjvkv72HqbjJjN9CBqysJhQHSHLBJLxsDeJEsFo",
  "key39": "5gTrD8Hx6L9PidkmhdUSiM4qUipJ83xvvqVpkfFbeB5ApfjQpzrrmTV9gY8giucukNxqNAsHEtSTdP8zVMuC7VTt",
  "key40": "4H6MG46brTTJgFhD5Vbp58st3k6vQcYCJf88wmuhr4a1kqYromT67N9nHMfjSWyiWm5NMMumpBXMnNTbrmPTS2jy",
  "key41": "2Y7B8pqyKmhJo4StYXAMioi3VV8b5dnDkX6cABNQ1KQzNjNJ6Cmb4LgqKN1z9gQxL6YDVDshKJUGfcmbfa3yYEPY",
  "key42": "rBMJqi6VDGjWAaD3vqAjBgF1rYfjJKU4FbjjaGnUHsXm9GBPNp22vcXkV2GDoWvPb5JGkRUagw9YimAPRwW9AWN",
  "key43": "5XWGS1puqPyYHABJPf11LzRWM1JkUDx1N1uxHQwPXp4NAEhx7KJkLRnTrNKCJJhG5mCfL6bsL8abPNGyD97rN4QK",
  "key44": "ZW8hn8MzaSiuaHR3JtFoHTHLcAEz2QABhfAZh4MHgwz6An1fijra78jrtMgiCdNwweTr4YwprKiCf9kma14RB6C",
  "key45": "3N3v8k89jyvzD9GHNn2Y7xD7Kbh7txzKBCn2MiZaG8kw6NH8dr28ejbFeLVtavrfrSr9HkpUu4XusEy5PfN9Zo8r"
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
