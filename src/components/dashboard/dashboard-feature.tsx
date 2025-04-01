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
    "5REVE4VbFXf193oeTTGm46FToJ9DxmfckN15T9qySvZKTThaoru18cEK9YeCCUwpWQoRdjTmvJD75RANDpEFQuCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S8o9ThrdJcTvwid7CKm4JaWEfqbfF64nceLRtFSxJgkHz3JFzRLm9cciRyQRJCqWXJFVCAJpTkC1G4tQ42dc3MS",
  "key1": "3HDaVmVTn21GXQGjgzj1QGa642pMJUhgCwm8UCvD1ZuqbtEnFbhcQBBgXiFxWeASawCokDqfpewyVt6dEqj9gArR",
  "key2": "ux3Jo6iVQ2qNDiExr1Y7iRWFdVc6meDQXUxvhhHYzaEUPUaAQNZHyV2j5NL8eU63E9heX9JE5nTSgzeYM925UaW",
  "key3": "51jDbR5uVxrwXAhSYCCKHzKdBiNwhD2wExsmjQWhsae6rmBqNmQM5DqhyPM6r237JZYzrQ9Q8tCy2ctDSQ6XUPwZ",
  "key4": "kgf2wfg868FQSfeX74okBRqp5ycKUbvBZu8uCcdcoJaHsTjVAVa8pWWKpnM5RcQ74uTFv7xs8WQamyPPGzCoLBG",
  "key5": "4HzeFz8FyL51hJXLyUMuCW7SuJunQ6civMKsNeZccWEJFLiLt1wxYXGJu3YMRgJvMjxVnkJAJHXjEzeeCVdBSJXU",
  "key6": "2K1byhFadxJnD1EZCJjnMJtjYr2XmhiQ5cdf5YLjFqKc5Mmx1Qq3sX81vXtMMA6UwTMKqZ5Xpfg8JMz6tzqhJSCD",
  "key7": "4fLxzDMYE16N2SwLLugXfKFckFQSCembA4XnvLsQjkT5unSeFDNk3oxXbWnuSBRJSHYb9HwMkNH5NVxuRom8weD3",
  "key8": "37ULhsLcvZMcsKPpSFNLET1Hcnbto5FtQjL2WQX2fBUSGXujdJYdBgJ9hWe7WgXdYY4MqbyWwyQPxabAGeGUHWxX",
  "key9": "5kf3AqqaM7r6wxtmFUVhMPFfmRUBWFSQnV9HNmV5PibMEzKdeYcXq1WrswwMiGAjoEUJsT6cPhBXJeSaqrWYTxua",
  "key10": "5vYCduw53Pvj4zK5mQjtkVrPbWGfKmRjieAENvm8GMMMshuznUFqL8yqt2wwRED56gQmDYb9XN982CnsVcVSXDTV",
  "key11": "7dE3vBMsqghddQ8c9jbxspTjy6BeEA74YiRjNxBXhWiqX2QhMda5ZjpciFAP9nAJxLXnAHk7VyjpZUmairxaaNU",
  "key12": "3qq6zdRcz464SfibC5dJYMLJiuNFUgVKa92EMBdkoaRzXMMZb9ZjzaWQrHhxvVvmjfDRboYvhXakGks6H4Cbmaxy",
  "key13": "4oMeQR7s4BX3ZFwvGmWCZ8AYqNBBg7nLnNyrZDEmK1xSEkrqAgdxrMwcZg8Cd9d4y7hBmgAqtk7GUzXk3hyyzZRa",
  "key14": "5Mf7cwWbaA6eP3F4HcHTYw5fVAFNoxQP6wbNQ3gVaDtdHyCkaheAgAncEKwEVhgJ3HWAwCjcTP1fPdYeSAddmnyB",
  "key15": "2Z1dTNi6iyMSoZXZFZ7ntpmNona8UB1QKzN2p44mxeECQmV8HKsqzFZqToqDKVnAB6Qs5hZmPZ6FVATFLXj7SrSz",
  "key16": "okHAyMKTTKwHED7UKifSmesPk1yfVuXZyuXXBrmoUaA4tpNU5HHTVnhwhhLweEXTxqD2evTmfQEaiJjCY1mqtMS",
  "key17": "3QpHsyiCb3XHMhRE6uwZGibM97RFoucFLncrNKnaqzCEF4KcaVQpwsqMWo7b8zETM22xafmAb6LrC1s8e4Hj4mX4",
  "key18": "61sJ8W8HGxvHtQihcwo7uDgSZHksHSVeRUQXVXVQdrDRUXLnZXjiULtffPRMzohqHju1TXgcbb6qPCqn7DjgGLab",
  "key19": "4yYroS7WDdwr9P5nm6MBNm2Jb8fmUeSoybvUE9AW8NzyReu8zKxNpm6BwusTE7VJMpzSWEnNoQKwsNDYc3F3TioT",
  "key20": "3UxSLEJYWvTaLP98V27xeF8BQQprEbqrAkGr2mGivECtYVVdvugQVJSAcZDkXMsb7g6F8iiQiYFfsGPucEHHaS5M",
  "key21": "3a89sX7njBEZKZQmmrcYVdySH1LZ5cEPi6LUth7X99TKREcKVkoEHhVn3oCeQaX91JsMHNW3vNrLKzxQ22bPkZVz",
  "key22": "YV6fgWprt7y8tYnDPpKTBN86R2CKQqWVWAeq4U6NurgPYrJaULsPRQN8tu3FQmj9HkZhLGxR7X4cw2KYK3A6RPF",
  "key23": "2VDZQHUAyMBexoaWLWcFaoXcT6BaLePMgxkHhYEjCTGCRi19nyKRurnKc6vUHxLWjgDD36ZmNYS8ns1ad3Wz94nx",
  "key24": "471NpChDaKXejoAQwR7kFLWnidu65iucZyHfNtUdseb9eacSEWXTtYv1BircVhKDiC2Aegd4eTjbPJbSkwfXU4z8",
  "key25": "3d9NDdYBSa1TjG3zSVbW8oZmjmXPC2jty7ot132T51dxUM3kKZRoqYXzFVYBX3UxXdro32E14hQqQYasfbRWhEiv",
  "key26": "4cm9ZJ7PL4bXMU4TUUabxMXmsisohhbNPsLZboey21omtGxJaWywht5a1VKw6fvhpWppPn2JRVScWSk6zVR17wnD",
  "key27": "37PBxY7K8sRMuB2uRZfihQHXHcD9VY1xdnWKjKpJdz5z6rJywmeUdeyJBsZ3cNw5o2hCk2LSDrRabCcbbmMSZa3j",
  "key28": "2JbAD5iQmZZZyiRngEBWUiGoju6e1khXQbZyVUUyUvXUATePTf5yX1YZvafToHdegNEC9Ff9ThVYyc6W89QuZ5zJ",
  "key29": "2wzMEbCfrh2fxr3fnkkA5EjMuTw5CGu6p1oGCgNjC3DdY8vhDxCkLeggThGKefTHw6D5FJsj7tgE3nMvgLNwxeTF",
  "key30": "5P2p4PKevM8kzad3co6rj89Rwg5jd12tXquEtJEGUTyNkw8xGuVkTnqvnfP5E7XYheBtHK6nsebeQKw8JBFyMSqi",
  "key31": "3p4QKGzJuuYK9LyNXCqEoTjDjPZNxpZkcZ5o9aF6SuTGL2CJBUpnD8WW7VFhMmArxv79W3jjbygni1zFXqR3135T",
  "key32": "5qq1bANG6t11BeBhkLUFUvEHuHuy3cEBZPV6PoC7vEnLWKx2byKdSNTDw9y7PuNYURyt5JXt93zMwNhdi94JU5Kc",
  "key33": "5xC6CppRR5Wjsj8GqkEGRGndMXNobcrLVT1EyJw38kWe8j921dqRvTqeZrUdsr8xdqYfTaRyTyWAqUtyxFFgiQy1",
  "key34": "22zZCvLAhV5c594yewADFqYoovbZ2szvg4dKo5K341mMSkpmeXNfW5Wf6R6DqLX3vcswDmqpXMUn9bedwX5hwbgC",
  "key35": "29jqFtoY6Dmdh4tfCkTAk9ugMGX5yQuhtMN2RQF9eCBVpge5vpprKPwiJbhN2q1DtY7EwBzfx2dQLnmYs6gX8Z2K",
  "key36": "33jjXRzgERfSZuHp6F2h5fDQ4BAAEqkie6KoED5mpr4o2ANX39bCragaJgA9UAYx4qy64td5cRLHAGKKRZukbMvh"
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
