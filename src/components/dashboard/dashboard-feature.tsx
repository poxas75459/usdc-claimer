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
    "3PkiG3nD6tPYwXEyrBGhxe79dko6XwMmQiSNtBpURCQW7gDehByaH8hupazwARe3LfVS8oqmscaWBzb9e4uuewDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59tKLFAtpWK7H8REmuFgaVzvfhmRVCdZzta2FHqxamprLqatXxxtfWRsYqYLcXVfD4zRuKqPxvLuL68csCWieiMH",
  "key1": "kFVkmzqDvhztBzjkH2rBxaDTSkR7fkCe3FKYpffa3AhSKXARVzbSwmabuUzMAMSHHRoeAehPjGP6XWc97trRM4n",
  "key2": "5uULDuXsQatHAtB7EyhrMHGJdjnDE13dbdYZcMNrd2SSZhv4H1BgYqrSMyMpeDGpZAhyFPLutDN3ZzrvR9uKMXjS",
  "key3": "4DSADN2M4vpuCnmvC4Z3m4YjwbxwZpViZgD11U6foYz9JMz8xGEsREgakZGgxLHt4WfP8F58wmNd2v8kbMNhqoGc",
  "key4": "38CbBySQbAH78qZkWXXjd3cBgwTZDLXrd4tSre4hSVvAbbgRpWe184GRqXy6XMpRcgz7DrEZb2qoS2XhxYuyShgK",
  "key5": "2XwBYn3JFTW4f46TXKcLqa7qp8eT8Su36kuYMGxTfpgg2GNTdEkrNsW8hZmEKj7DK5YUWBp6ocJnoH6kh5Wu5tcV",
  "key6": "5HV2XqCwRezpzky5AtZwgAcuioYYLN4uxJgDMDkmydcnwwtqsFgxvVppruFKRa3ty6AKXYme7JMXvZ2j1ySaF1Lj",
  "key7": "4XLKLgZ2yZuKeZjm981tbD5RrqVSLYNhPAe2jN6eRaTR8uhEzBAJwPSvWcNa4qe5zDPP52oz8MvQqmyxtrecs2TX",
  "key8": "3zMBPZnm67i2rCd9TgFA38MEKsSuXq4PjrwpB4ggDsEbeixioRRhUBxkBNfTTQ4RvmxGfN1k4eB4odYvcDh5GtcN",
  "key9": "5RaDFYzc68dy21hHPCVwfeFLAa7c7saT1cSzXkr1z463YtMUxfc79Z8obdfqkfbQktEub34QQ7WpDoNrkpuy9bSL",
  "key10": "mNY4oLNr4uxDbaW399NDJqQgpY7bzML29E1Cejubyqeo1nZDbCJcVfzBSoePxM6AHaEjDKGj1qzQSkJUTgE3Nmg",
  "key11": "2WhRKntWQscN3dNueVfjmDVPbZjbBKRRsk6D6EB2uEM8m4Sf7SAWM45feZhkkq4f67rBugNXJAL2AWhix8t387mo",
  "key12": "5EK4vBeuzBwruo7Vr1EZ9SiRYAEnt4v4UftU93NYRWewCXZpB3zxXcDDJaxSfDahxTVqZsJtmuCxjueBvVhjeYAG",
  "key13": "4UgEMDm6LZD9DMm2zuCuDjeNCXrNhW4rSJeES5mW4HGKZVEidGhsMbw6Smjs1T8Mu9rtSdzeginqnCithSibqKNM",
  "key14": "2drQ4RiqsMWMwQqGvbBTsNhjHr8GVKkocQW7PRaTKoEdRZwwKPWL9WNpZsmZ1EMSHDCL6zSA71MzAe272nxCgyJy",
  "key15": "5Sy13LMemF5yFrTQdFY5MmkrFPKityLHpyKu45ki2eEz65SP4eH7p6s9JRhk1vhwS83s4dEd3vbUZt9e9XfrQweC",
  "key16": "4diYwnJR3fzcL9Uy9Bh2PrkG8sG94mLVzcpJf8p1t2zKgaZkABRFyEJGhtWTTnZMhJPkGfPDY3NJYKQepq4bNE42",
  "key17": "JdNgjmunrXvk2HuVvhXALdzjCqbJvQfoEyVtXJnBxJx5TuaCWBeTojUipn8shrmfhbtEqgxDLhBgyqUuT5xg5xV",
  "key18": "5mHgedAshZRhuoHQRXKGwQXEiwiDUwzeLauFNSwBTRjo2PZp3f14aGyDBsG9b5dMH9CvsSG5CvZ35rZPEY5FhKNc",
  "key19": "66ee57AXYC7wN2q4a549uY6BTB1pXHzNEifWYYfUsH14S4yHySrPWdBCc26WLBYXPfV3fYyTqZ2uUW2yAKr9fyVe",
  "key20": "4PyP7EGmF7h5pBKkywqBukgQzwaNhuavWqFii2JeFzgzp7sFq4dUk294hRzieZ9HXTH9kre8eLx7nna2VHPoEnwu",
  "key21": "54qp4ZwPQoNM9q8FsgB3CwHWYf1DxYaBtbz5fN5DgKDdkNBxMg5YJAcmEbZ6551Vi1AdMrywXBeKrZdsFwnEbVjx",
  "key22": "47jWEE5TLirwBjQRES53oQeP1Sm38h2pqhJxfCkvRaMALZtakXPdV7jvpQNeyWoaSosToZLSkrwvybS4121eAMHf",
  "key23": "2pJsZEnd6NRx7XVfXQsMJ4JUDXaAZNyMWj3fu5MJMfy6MrnUz6APWNmwkdutrC4usm9QrLodYwnzYrd5ND4Pe1fV",
  "key24": "3Mbfb8ZmJbKSboyp5Kkr2ZugK7NEZiRVpxpyAPD4dq9rB2ZVFnsaQytPabiwVg5KjYvzG2Y5hzTzPMRpyh2Ju5T6",
  "key25": "5FkFrUhbvnAn6gy2xj5caYeNfkyt4S3qZjPpet4AR47LMbpBdimxGGGktbcHatfHUVTtBKaAd5hPSPqRLwyt3Dto",
  "key26": "3s1uHZp8uxGWRMUUFcWA5Yv7w2yu4LUXP39wFuBbz9qGro32YS76WPR2FwQkZ8kphKcJ4GA8qnwo6qsyCtxGVYsQ",
  "key27": "45W8ekSzjnEsDXD1qQ1MAsWEjf62rVSdM16EQwKSduv5p1maW8GRXFjFDhxjjZp6mJjqQgiRDMXvoAPtkfnZExXP",
  "key28": "2rmKiEi6HPMCmK4ihZ3hYcBvgkY5nbvf82svkuPRfaxcYtGKWmwxk8noMFrSg6ciyFgrzqQchLhh4LjNbzNtrrmD",
  "key29": "4iob7YaHPJyRiDa118SSVxZ3mgHB2FgbyYrGHcUEsrUHC7PwMZi2DAudqU4TfEbYNNpgRW7FmjMFt51tqrEG3pXc",
  "key30": "5LzRYPnXUro87LcYiQyrLFTwZtwGGPhNmowd2VYm8zuzuEW71xdW2LNE7Yr7KqkqUD6chRp8Qb44Z3NukrpTahPi",
  "key31": "36z8M3kY8L9L5JXsGnaoRW51R3xSsev5dBFLELy6jwVymgcnFpi21WoVjVjT2jw6apBLJdpXVWS7c9QDd9eDDGwa",
  "key32": "2nZWQqu1a56LuXxCbQRYJubP8pqr1L7fbyCp8gzmGS2wqzPXqZGUM9nBSMdU86vRnjGsWzohobkszSSLDZyJsdnM",
  "key33": "3b4h4Tgj8sSomVJbLEE5dNqLQu5RzbQk1RY6K1FpYJCMbu6CwK39qyPeMcCqk9U7JsAkFCiZNJauR2gi4mN4biuj"
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
