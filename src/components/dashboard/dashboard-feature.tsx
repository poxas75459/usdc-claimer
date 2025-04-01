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
    "2BhBp2DHkXcS77P7jnq7ey6HMgXErQ1xTD174G87jrdzqo18zBZHu5cH4XJpTq6fZhPzDXfdZHjjC4xx2WknP4zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rXwMWX7X4KJZgcYqsQizpagQMMtBFyNEyohyooXYGpGBHKjoBwRepoohEXXG8GSFgKgeygiBvopS1KuA2V3u359",
  "key1": "631ER9Y8AMkYCyJ3e1c2aCN9yhK9s1aqY899msLjcTBbuuC229HcmUdSjCxeq9WuBGzQFssidMHbWuh6DtTh1Rfg",
  "key2": "4biT6AYqw5dQnsSucRzX1HTnouCGkB4yQWm4izvoqn95LWmnPkto7VuMRB2TFiqmddkjhmaBj4Pdb5VfZDzfaK6J",
  "key3": "2hXGcaRUbxKzmZm5psXSiHB5RsnKvdapz1kH5uzf5TrDPhgJgafGUWXtFL15TNWZaqcK66sEzVnWdFb4xP3EZdLc",
  "key4": "qArHEfU7vUvvbbYy7JUEjMicfjdwKvpW8noDWY98chDduhuoG75vncGiPR9EJfPFba7jPfM2RCSjazfEPbE3E47",
  "key5": "4LaqnFsAXoK1A6gg8nj5SHb3EW2bLxQXDmqxEPmkHe6WmhoY9wEePyGwawdJncraHbiEiHmY9oTNDD2oYgYJrGHb",
  "key6": "xBMWFuoKHqLrtYVQswwgeyWfDqH4ZJG2xFrCn8UkJ3GGBSjG4WbEYfFhffGWuaQjc6ERxu9GHtPpW5Qw2qopcGW",
  "key7": "2Vp5F3GEfHQudzKQJ8tvHjin5C3muCYZggDQRCzJtHBbuJfWu8ntyM6oJqSZsRpfzJW1bZYwRcS4Memz6gnJpKTi",
  "key8": "2WEXFhgqtbvQfuMx8bchwNw4T7dzeKQVrEUzqqtUbrcxy6cscTBfudK7r6x3ZYtY7wECKjMWHdFsL3iqRRWAato6",
  "key9": "5A6oDoHUBwnTj8wpiPp2d3mAKiLiBg5DYZSN3dzXpPmYmKukVXCpSdSd9zH3tYdxhBdmfsXvAaSvRiLrikm9S1AA",
  "key10": "2y2eLteAfuocBXfwr6oNvn1XDzPtw8AexZWjQ8VeEnum6Q2YT59JdxxEp2v2c3Z8LN43DGgZ22mrcLBQhg4EFQ7G",
  "key11": "44ACYu9WzK5XkfPdduMxrGWo5H7DdPxNarSBmojq5qW5ZYgw8J2nopJCcZrq6q1WS4eoonGc3EyQMVo8fn8yonRH",
  "key12": "2RK7oTToFobPAS6PGByZ9Yja2bHjax1a2QNdqojGwt83w7Rcun69wyJk4GgnKyffj4eH5mLoRLmVrupHCZEeJ4dZ",
  "key13": "5wjghtGdkFiMgSGx5YdxF3ZRnyjKeMRBwa9kRywiNUGk4YtYcviEbK1M49Wx2CruX8EG1EXJyvQLCAkujCjwxdrE",
  "key14": "uht7HNYmSnhBDmRFuSTtrvA7J14opybyCvTrFvZgNBS2rtWFspDTaqft3P1jR2zgp3d9Lj7WeAsdWVXwSqTX6Vj",
  "key15": "5498Mu16nvRPa9bBu3Zy69jwQE6tsMadAbPqx8FDbneU5n69TmfLns9yHasHmHUggexyLXXD65z7nzdUoN5ZidfF",
  "key16": "5FMzed4E28xor3XDprpQmK8TYaYmwMxHYstEq2FRHRvu1pfwUuzotujgzY88zLxKVthBohUPTF4Bp5446EuY9yfv",
  "key17": "4W7fnwsszsKYZ7eAHBX8jgPQ64ZBNiMr375grZ7YnGU7etVyZWQCVWNSd345dS1ebms66gzZWksJMb4UzMAJKwzz",
  "key18": "3a5147S6k2Qk1VU37ppimdALA4PZvj3dvVnynDZDr8v1mi1GGiknBdFiNowaBrnq5vbdK3FUNUJU3fzdve5acbsv",
  "key19": "65kmi9VrgJeXhhLUScDDLSv3hAoYFQKk6WyqHncfb7qaf3adeiRpPvuf7EqAJo4EtfPvuKwhaYGvmUh4pj4Ci5Gm",
  "key20": "34gVgqjPe6UehNPrcv2qnweAaAcK8Ex3yr26qZrdHY2WxPs5CmmUyDrWga7MbMqJ44o4TFfHDbFu8LBzgQ8P2LLk",
  "key21": "21Dr1wZ91peDQma5JTCFLHS9tXVkCPSqLtZVkjjG2pPxbxAhx2UVF8vgKQzar9LsV2veMAW4iwNwdeP7QqKp6nFf",
  "key22": "3YPvk3zaGa6DiqdbYH2tzxSABDiN7r2vZhfD9eMEPWVStDVgxJpeW7VFqbeLKf4GhFgP911L1DMLoFoWpPS3iFDV",
  "key23": "5L1aa2u7qhpt7Fa6PLrzTZBvvAt9dgwynkf9apzZ8XSZBdQGnW29UJduPTb4d6uZrNkfBAsTSr4eZnkHHxUVeVNs",
  "key24": "5vyTWibR5mFayEv8xugSoE8CJQQvk5AxPxbwqyAT3SjSigS5knfSuL1eR2jNr95VLjvw5n58eZKTPVaSEx6GLYX3",
  "key25": "2CHu6wJtQLj4S7K8568N6AST1fBNDasVitnktwB8vp5roMeq9speUrE4RJCrXDcUtDRpeAtaNY3u6wdXhUwgUdUx",
  "key26": "5VnvaMEA4sR8RfNQVsy7VwtNxoLTBPhfqtxBwyz8yknJyLWiA41E1bwc3vLKJCk5dE6VU9XJwGMRS9rzw8RpXBTF",
  "key27": "2rgmhGNUrdP4XAkfyeJiHwQMtT6DGocwu3uZzwm72nk5Hst8dyKegyYiA2ubKd3r93z7a5dv8FafGNUAY5TEJYJm",
  "key28": "Es7qXaeUZAxkEq1MdBM87SD3PCQaW9LiMGZGecuRDzBJLnk4DHW5iTr7zj7FZivurP31mdC5uHTbJg3DYL8b5t3",
  "key29": "2LeiFSntutni1ZB4cVoaCy2k6qu6KeGbqq6P8hQXUdnCwFLytTkoSYspf8GzR3ViLqdMnrVes8ezd5Ths7jGh2JZ",
  "key30": "4sMMyEkXgXAgmAYpsENG2kp143K6yg3nPg9EkEWts7daWm5cXphF7WgYM63TPu5PheEdMp1o4wQGUpb2fShekRrt",
  "key31": "axGQdvJSYXZsoMEFuojDSUCeaqKBzsdmwNLRbGB1oZDN6NaacWvfhrvCYPGJd6cnNh7xz4HtwKkpteiRn4hy9iB",
  "key32": "4Rgf1szYHWvCfWTbgaYpRTcjjhfSztduUjxnsVUs6fSGznEW9ifUUYBEDVMKc2cMfNCNLPBRtxYqHTkR6tNJsrqq",
  "key33": "3KtjyvDjmWQJoLhRFQczvvwjjHwXGBQnXNB5LHfGr5it9faHq8TuBKQEA43ZwBCHsgihiDPp21kEm5SHGTsyBkQy",
  "key34": "5NdanoTpxtGtGzasXaTmSG7hFfKMYzEReE5fopdNC9n1CHzwgsiH6S1ySXZG2wQqJKyZ3vuVddEWrv9xu21KYFtM"
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
