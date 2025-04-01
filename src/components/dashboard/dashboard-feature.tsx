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
    "EBF1B5TEZbwMKVd9YAzQXsvY7Ykknqippec4zXLErcEUiJJgvsh3WCdjt7eCKYhj5PTgwk5n7jzWm6jxPrQuXQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7Vd2Eyrny8pH3VByHvZrcuhCiVnU9ypzf1Kc3p9PSAmtXAyh14dUjUxtdEHmU5wrA5UVSfWj3cNLYyZKKx5eZ2",
  "key1": "4u19YdCPiBxhMZEnHTmb4xaCwkxzDDeUThX9NAM7KLKfrTarUhfA57Mr6thPmiRhxZrNx14ZUzpMcUJHMz9BhDv7",
  "key2": "3tSXGJhtRMRvHHUm8ujHZnDD1MHQtNms5a9rxwKzXBNSmckKVZ2xQQGXwP7uvk1ZxBc4Bw6FGbtuT6CMbSnKV9ib",
  "key3": "2eqn3is6urBeqttc693PeKEptSP9RjQtTPNbk8oTaWASmETjxeECtn7QssEQs7YmRP1rQxUKv5ofhUyfeH1qyL5h",
  "key4": "5dsB1uxkaWcky3gQvdcy2tFit3xzSxPZrnFC9hBrwuodf82GRUURgfUZyEvkQQTsWs1BMJguU4jnTJKLYP4ZX5V8",
  "key5": "5uVEjNFpi26NWLrTbsgAsevsxJ6TbRhpKEiTWGYi3oUeiTgSS21TVGckd9rGbCjawd6s4iiu3VeK6xGB58Z1b2hH",
  "key6": "5Jeew3dAcRVsUYNwxm3kY5QYi6DrDuMcnrxsTh7nvB4pfWKstiHvKwRkY28HwHb1NXjkqtmnELC51jZwNUJFpaiD",
  "key7": "5SpuDGyhXCieg7eWWVo2ADiLJaGJCUqBAdXpZqXDiik82TPfAEdtGopbaQmZSrCAfpSA1geMpi93YZ4QatY3UhBH",
  "key8": "4zj18jpfqWad8N7Ma4vjfvq27PKzUSe47fP77BfjwftPH2GX9xqd4pSJJafu9V47uV7HSXzTaVpCHuzWnP2hJBUH",
  "key9": "3u34fVm5up6pU75Xvn4qajoDeQRkxXAqSUbP24vscpwUFSAirwNneWahCUZcxXztcR3rQHqFosTrco8bFrt6tiS7",
  "key10": "2SWfjMN5v3v53drEEJR83RiPX7KXs3cCKJZn5bz2Z7uEEgT8vKy2gATcgUJUBRuhoiJxLJwZn5JsfS8cW6z3TzH6",
  "key11": "4L5CJKhiQdogGeanGHPdchXiUZmP5YXJLSHzyVHDNra84VQ4xcz3U7bix54oC4cvai9AKaCFkeQq2AxxMj5hJUXo",
  "key12": "2NGycdJ96Y28TudRgTh3sGHQQhpxgrnYzW6DDaZ9ncQSetvQphXzRAM2AjX1bsTDFHH8mKNxpNrCujU7CDQFMfDs",
  "key13": "3EX9X2QoE5Vuv8WamfjBygouxUPk11nLXv5U5UGWwmuFEbiztvJPWzfKeNNrYDgpQRkfkTtow7a1HpuD1VVEgvhg",
  "key14": "2JRZHZazE6rXu4F3SszbwM7E79wGNUoHCoLJrbnyktDmnf8AtyibcxRpBKvbeT2NNtVFaNriQc9bTnMNvwFgroZ",
  "key15": "2kdiR89Tzr4brUmCTacZiSPzuEWm8mU7BQo1CAp35ATKVvovT4pvJezAn5Zy5YNu6ise4NFfBAjHxQcS7XUi6hVw",
  "key16": "27gJRA3UnnBwxwvUUsvJmwhKrXVCr1ohWkQBEWfQUYcVHBEmmevDbAa5TQSPnc3uUFuND1kPM7PCjwvJ2aJsVSdD",
  "key17": "3VeU6aHvXBFJSREhaA5YswyL9FFpygHGadFzuDPGJhatZ7dESSxozHu7sdUx5JtZotCeyQbrAYa49mtwk6ZkAzYJ",
  "key18": "4rL1hY775nLETkmMFzov9EAwU863w5BFnoC63PMttEWnwzyP6eUGVAACDorqvdHVsfWhumvKi6CjhETf3o8JcTdW",
  "key19": "57hgnSsBtU9PtKz9vuJPBPTTFGs34reVtpFGGUuwTLqiLGgEJwk3C8Ue5pU5PfF8Qo76S8tMh6uhpCWkMtXzcFVY",
  "key20": "M5gCnFgjrUnp6t61CbzjpTJAHMDPJGUYs4HPRHkVPcGnzCs79ncmEfX21n2sdRY6yqhP6Novft5PgTJ2xSnaBtg",
  "key21": "3XFbfwrXoNfwkZLCLm1zpdGSrDJZsX3pc1LRtZK7ZYdfXfhoLHjqwgnN6CttBdRiLzWdG3Vm8wmkwj9Z6Tyd1PX7",
  "key22": "2Q212y8WoaRswvqfzVcphxNKypdF69FLGWZoBZYAK2MZumm1mbG9ZLfpCDjNro87JsK42R2d3m6v8RLsG3AFp7qk",
  "key23": "5RxXzQP7sVMDCjkmkehzb4s4mJGJAqAjSawPLuSDoA2qJH3y9NefYhRTpF3yEz51cvk8BRkWhwjj3V96i77TDdfP",
  "key24": "4Y32pgvb8c9NkYYEVN2b2MsKoxmZJ7Fwdpnp4Uu2867Cuhw86HLpqT1tJvERa9zbj5LeE898m85j3sjY2ZerrtYt",
  "key25": "3ssxAjWWXjFCKtoe7G1uLcyVMjJ8h2ZQY5PxqGoDBTz8g6kdidfB3EhpZr8kneJ4eLLboG6JMDXzQrFwmegeAncg",
  "key26": "3CyXBppBzTE1zZzqY9188yxHXNMiyW7VkkzFKNYwahxo1hvBSTYuPXWTy45pUDC1yPudUqiJadTHQjnNQAnNsL9N",
  "key27": "4mNi4jR3MdEAvAAYzhLTw1fZZr1tiQvvFj46aEHiQEQAcK26qM23gbtnC4J3PnPYhJMweEmHzkytuXXFJX89obRU"
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
