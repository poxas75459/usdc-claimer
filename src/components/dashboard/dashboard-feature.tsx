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
    "3LTDquHZaBvoxQ1oWkQ1Zr6EFp7Ms8i9UNx9HDCbuu5QGku9if6VX7zAxsy8fkpU77KmzNn6BBbg6T1qVGYiiqPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FVjJMT8sKCesiRqLzNWns44CSyYGX5qmQ7ZyPxo6MLQN2scrX34XmkMRUH6GbA27GgM1oPvx9wFdGeXHxqfy3CK",
  "key1": "5xEDYzaKHg8QEjg6q5ZaYS353Moi9vaPQjYmN1JWYCyERbs9H4YvpV58K4UaiXre4iwCYcNLXfJWcA9wxujKiMQN",
  "key2": "5UyfrDQFjLctpQjZn7oSBjAFJMdHcjEvYNRGh8w9WQmNVXyxt531WiHE4YYQWAAV8urSFAV2uL2aXnuVJtkyxCSn",
  "key3": "2po9AERtge7ofhjyFa6JQnEM2dA8jFzHyA7JBAFMBAbqhVMtmzr4DVfhRo4YWGQgtmXt7xGadYdR2AscYUx6mm3R",
  "key4": "5zSz4mBLxNG4cVX6kjdsMAkWj6diS86VKaVp4PShuSiLgZ7FUjrFnhrzRoJMWDcd9dafTdW2o9YMuGgHdbiHisd",
  "key5": "tB87E4U7XffyFFeQEyoBKy4DAjJ7SxsHju2cTaHHpwgeLNs1cQuaYgFeZHbiN5b9d69b9cEBDqxzf5ShZuV6aNZ",
  "key6": "4gBDBjUMywkYba8af5ySMabMJmAi5wHU2xH7dLF6UNmA366hJTZiHmE1zmmqR5yDjWcDpwLEFBYUsC5zKKPRS2Tg",
  "key7": "2VZ9Ce43vwufN9Zs9KRiEzpJuLp7BVTnxn1nKH7harGfVKSPAJoMmpLKGCoa3Htk53ozTi4GipNjJ6NFK7HENWBS",
  "key8": "2viyGiTKxQsCWukR2JMKXYbpa1JnubRb5xQrsjDHnDC1Us8YCt5kkqjEWipSnid2n4DvNyCDJ8QGaSEyVJYZLMp5",
  "key9": "47o8ozmpMwHFsv4dfULSzuTw63RNvUFgAKrSNueS2QssHt9c2H4asz6SqfdKcwcrZWB1k6e99FH4bfTP3jCSYNrK",
  "key10": "378qSGM5gENkAGWYwPArgRBd34GrThhWAFKpYr9P5NEy1hwCPGBedTRprxMsCjcWAPKMZb5WPhkxTmRMvWooThM6",
  "key11": "4cw1oKJcyEPzjQaE575sdZPesCKGdJzTUDqtSg5VWvZqx5Q7AetBiM8SLfgsoVCZFeTwmSm33RViTgTKHYPYEKHo",
  "key12": "4UVhqhwJZ11HWfgguDj3kbaikQh8KcPaif5tPMPofApGdmMRjJkVcCV9qPcp9G62vurSpdx77eRczB6pTbjhPTGZ",
  "key13": "43TTam4ETZU3qchqBKm2GGAPDZwvof4mPhUxsGLQsDWXaZimcRtoMfWHAWRWQo3dBuaaVTRz97ZY8bp14UooeaDQ",
  "key14": "2g88NyvQWez29kKheiJBK9Sn8zQk1Ajac9DTRDRnXiW8Njc4QksNZkKmWMiyzY1UY5KJC3z3UT5cvJETt11SFZtV",
  "key15": "32HAHAcACmsdGzvRzt2aaoqELuQ4puC3fNDXcPdcaFaJEZSUh88tzMofm8R9WF4T7PRhBiyVMgfZhSGYYDNyx7z1",
  "key16": "4puvpt2RXRXkZWucBZTCHx5QHQP9m74mnYW5TfSNhPFtsh95EDXHHCoGuz5gU43z6auja4T9Qj4716HoqXYmLSh2",
  "key17": "3fJxbye8TXDQrhcVWxV4uhEzoest8NxP72S7Y6VKZjTzhQv3ZZvkyfHWP5Vn3yrhhrTV5hMi4KrLRXGZKsKS14kt",
  "key18": "5Qx5iz5u7NKAmTBe3WT5ecR785YijXuJCfLCYMDGqhcRecpweWGbVMJNJZuACmuk3AXiudo9RRu4Tb1wHxVGgAHU",
  "key19": "21MtvifgGCXn1ZRrDKWCzaE6f1MnMLUdGujYhaaUDeSLXs9Qfi83mY9yV6wnK9CWkQZ2Fxiw8wXmk7bsm4VXCZLG",
  "key20": "58iJcZ9RKxXDmWceinXXLwtQQhXJXSxLQmW6me6u3v6giKUKmffdX5b2aawoy69FhEcg2xH6QtiJ8wUrKpXS1mxp",
  "key21": "23jDfzk3jzttU29Jdratd5DgDTX8hHUt6VWq6RjG1mJxLLBf7JbbDEnYC1qX1ms4aG8x5egfUKYTqgthrjo4w5YE",
  "key22": "5o7LGe9kvtC6sDprRmxJYv4EW58t4St5aaSGXM4G1MPg4Q49U1d3bbvm5EUDVtPKZuZanNhMC3F1ocVGSKXjQcnM",
  "key23": "36TqYrKCdYTqucmyRwCe73ygvXT3TUPZf6DfCE7UoCv3h1QqEBiWetJD6zPAJQZM1A2JvhKpKaKQWBfvxtR6DzRD",
  "key24": "2kCL7QcB7HdkekT9D9vwHBNqLSTuaeiSntF3Y5ThXLPfVBaTiepBCzzfLjSFSXWvrstdcKTTZXX7URM443e7bg1k",
  "key25": "5tS9TwsUUMoprWynPh2cF5jNjGWvJfXcQkz9n1nk27r1LRhQDiFgujkBTrgKtqeR9BUycYhU4VGRU3PhXdUsctxQ",
  "key26": "27xixXruCRtAjYgvY2sVekLJVQNEHy6tGrfvREt2Vcdxo6ko8D9FJRpw7vS8oJRG9nwvztNKoaWcREHeE8PShfA7",
  "key27": "4e6VZKyyiNsgHukxnV3KETXHimz2Mbxdz7k1WFysrBXGvRJVJeazqA2qXTC2bJXQnkPkQoHeNhAEPmBFyVtBujeY",
  "key28": "kTDpPF9douPNCe6tNwxhG8ZRWyuv58TUYGsjZzP1qNU3k6hFiCmtPbSuZe6Pt8h4he9ivj9zL4dmLcD7QLQYmBD",
  "key29": "5st4F9ftDacwQYd5Q3Z6PGUjkuSdnRzgXUMXTehhEqfwyCfiskHzbTQouHpQGHKeoH3b5o176ejaEAA5S8CxH5D8",
  "key30": "w4Up7XCKcbpHMQuZJyMiF3mDZq4kgC8fhFJm5NUZCrXLeVq9TAPhSTnh3xrf9juX82CUdoyak6CzJaH8WzBhUAZ",
  "key31": "2t5sWAhRvi969mXLqct5vHCLtakBSLvKRvMZbtAS2AQqLcQa1ERgZGNRfHfbo5AXVAtjSnjxtTrdN1TqEprNEqs4",
  "key32": "4vNarGSeHK7vArYmKUKkVtyc7entBekYZ3CkRHzB1pueXoPvKXMS6wpfhdzYfC25WbUy7AUwbKvfDg6tbKeeEw3w",
  "key33": "2Y7PPWy9FbhcjLRXgYCfbmU1iqsrzwztsdNifnrJ9NuqBgKSBcecGDdTP3kxAQuFL9K2U944jgJMXqbRG4pJ8XpY",
  "key34": "5KvGGABTv7g6cZeCiwzETKjZ1HhGzCQBp8bmWTvDC2WRVdDdXCerKNR3rdx1vprmLkairfkDSFfzWsPAY2aQJhrE",
  "key35": "4o2paeSzPGdE9Zo9XFhAd9UGoWhrgUvvzdBD9ab37Z6fVfx7BjeamSsr8T1FMQ4uNgHPvYaF6TLQ6DHfPqE4xc67",
  "key36": "3SCrxqgKh8kY1QFodSNbhSovEFVXDvbjnM9kVkjMBybY2KH3mTjLFW94JHPpmwkkqQsJanE7nur58sToGVrw3Gma",
  "key37": "5HXSnL7rGp97JpcNdQvm4mSMLQzhECtpV7zpKUSxeV2aWmrUMaRmKPA5cRPEto7cWxB4KXLvjs7MZG8iLjcrmLBy",
  "key38": "332xdmKDBPdW9ZrxeVnz1BwXPo81prLU5pgtAzsfzTyr6VXFi9fzBjK59f3mRU1W3JnJ9HjMxMuksAJoUxFqMp6B",
  "key39": "3MbJJWcS8f45vpYXmVEajEVBktSe5xAPj5J7nSaeRxMBWsmQsg94Npvv4PjX4kZyVXd5rDZgCsicYtyXa15bnwCT",
  "key40": "Q4Lm5GktSJTddqK4PfPTpue8h2ks6RQqtCKfdqY6AQgbEicdqo1CzXiwu8aztf1KjRsEZFXeiAV1nvN7rR1V1od",
  "key41": "2HqzV4c6CuWj9EF4jXeJj8GuRHLxJHMLfF8gd34CLyZzCT6TS8KKeiRceVKS5WLmpvozVDr4jytSVtGnSRzLRKfG",
  "key42": "3SeCTwcmBD3cvamSJyzKEj7rrmRWRT1F7Pyc9UmYpEimfd5pXBWAK8oFbG6uRkZkxfyXKEmAhq7Mh5P68LjyoTWU",
  "key43": "8cGF59c2JPFNeQ9rr7Chvzm6u4TUaRiu6z9SQPbnDSAqnaUE2L1oYab4UecV519mbsmgLtrPYuGg7nK3wQxzu7A",
  "key44": "S7WqDM2iAC91HguqMZjnkZej48zBR5y25gA1NNGs7odA6AuHr8HdNfw4xx17kqhrkr6Ft8Cqawvdgh3nra2rNfM",
  "key45": "oy6smKJDpRiBpjdHvmerRVYsF2GAifTq53jmUfYbaXvgP1opYPMd3cuRfVZVuNi2n3aTty5Ynywgq4Wn3tkdLVn",
  "key46": "66gBMmn7rYxfSWszeyM3h4XKXmEKpNKFx8LMXt6EDsbqzm1eoC66z9Wpyb26GuKjWayQvRdc2aEqdfr5sV5ym7L3"
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
