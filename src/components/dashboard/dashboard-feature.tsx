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
    "48Tudq899mUoqRqTM7GksxVE2QJcdDNWwFZS7vRRrjZLQxxGYLH4QcCC3wtUBFiTJ68cKrZsLaFXkf8EU1ei1jbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GPfY1a1DSd7Uwt77G2z1q9vqbEFZgyWFhQiBg3MZSgyGi21YQgnpBX16sJTbGy1eC6a5i2hVTdDEn9Ff8Zd31Th",
  "key1": "3YXDVhdD5s4gm8hpYhmNqBymF7vBZQGrTSp3ocs9FZ6z94ursWYxvH3mw6UK51CDpZfEGnQY1vACcMmnabk1eE29",
  "key2": "8E9LHQSArVXK5y6E9Np6w1rMqhhPzUv9ahhXPWb3cRRxDgncvRxL9FUQi46YppCzyS3noiHYDpmV1CWYUdvJqKE",
  "key3": "5LDYxovUF45WjcXHM1q5RKA83B6rXJdpDgqZzASKK8pwiirvqWohcpi4kREF6fXEDjUdqBFnUPDHPWnT9A9pJsSt",
  "key4": "437n5XDzgU4XNPi6HNNLpy3AaLUSvsntbpqgjRu4RVYXVfrGYJ7QjdB4MFN7DbVcLVyBfnnaxGDPtFBVB8uQXixP",
  "key5": "59nkBV7V2H3DoDcitHcnHQBcuR2jDi1zqMARoNFxJSfxv3uw8yBbjiwYkQAZ7YTa5jy96GunWGbRJEuMgNmuQQwr",
  "key6": "JEQdmbA567oyoSgjiB9nrVgHxt7NLzCo8KfypV4XVhbNsnw3CfwBR39REuZqRkT7p6CTv5Mw8eWN29fsRNtSYgX",
  "key7": "38YDHf5wg5pH2ZHQaAXgoqMjP9q4bfSGXTczQchBWUAuZoNQpCuwR7qLAfT4WPrPsvmnsx9Wb8dFLgYiDue8MRP4",
  "key8": "46aEQ8s1SBJNduu7ijUpJU8sncf7ShYurPfC3FMZNxZDjXDRVFm4fgzzpzjuY3cJXmfRfjC6nJbBB5ja9Ryg2xo1",
  "key9": "52JBbTVEkdk5aM8niMqgcmc2pD8mvY5SbgDWwHuUcf6qWigKwWB77JPB3Jd9S4oZySpG9GwEG5da53WbNvePL6nB",
  "key10": "5vyysADytXEASUypnb4rXnRxdJwr1gyVhYdzoN21ZKsRcvE9GbNYi4rPLG6Xn2b4RE3xSWWovVpNYe75P7JGSxDv",
  "key11": "G1ji2FamVtxTeCojydYquAMgHJtJVCYHQEmeCrPTSQtJibDWERAH4kgGLokKhCWZAdYjBfKmpmfRawdSdjSR5je",
  "key12": "3wkXoLzmLbM8Xzf18jBPQGo3PGjzqMD1PQCHsxkH4hTeT91mPdazeRqitfRcGDqMD3h3eRWHpsvRcSeB5hJ4etwy",
  "key13": "jZHjtwLt3WqmgWi7TT1c5JS9NrjwxtcbmGDyPu5VGr18HmQHTQWeTUFFqqLmJsDM5wbg3BF9Vy2py4gTPKHAiwN",
  "key14": "31ccCnNUJ91bAcLmTtzGarwTTNCMduyJAp4zjKfkbWCcrpvz7AQ22VC8QhvJ9z8o1xBESCasF1fNRuHXD5yQFDsw",
  "key15": "enaeUBcA6tkggszdWq46njPbkPcJDjRFquEJKNCkMVZhaiwLmWnWFrcagikGN217u5ThfGp6BFR3Z9foWYjfP4C",
  "key16": "3x5wWkqa2XF6qNuA51CGCaRjRrzahGz9BiieSrQxz5fSW7pHd7MFX3NdEKCBokW9vaHLqfb4mtbg8tssXYhteuA3",
  "key17": "5TNBzViBGQUgrB2aGDNxCUWboM8TgmkTtPRAmycvE56QP2nJBh3uueHYf8f5cQtgZPd4LmZgZYHJxuYKGzwVQz7r",
  "key18": "4wwiJe2oRY5Ac9mmFbgXW7RYqjjDKAbwUscr3xaghWxiMY6qzCzQWodKff2roURBWadZ3pSn69wUQa8cqYFXSjUq",
  "key19": "5uQcnGXwqKWyDNSdKhhscPuGWq5CZZnnnmpRKPnrDa8gNsQ4JDmQD39d175SDrK1wSuYhTCDHnyXF3nrGLoSCzrU",
  "key20": "24eVX2CoY4D8wpG76FyWhkCwPL6rY6FCqXUnKjAASYmKqvzyFY1gQmdzFAnNJb17cGQakRsqibfhjGSnE4gebupG",
  "key21": "2k6Njgox1eMftoWsQH44139jYWzPKi1xGxYf2URKffFZcs68m5bQom5qnLTycKMSGSDmYwyac7R318QNoZG76QKT",
  "key22": "2dRgHApP7x7Z6U3rCUn51E8K27fQvatdqdjmA6Ge8hKpa8tJD5smAjHRN3SXfVw7fnEzchByqM3mKaMybWf1eBnN",
  "key23": "41yqRL1WJrRNRiJSLBQbXwsvMpDSSNPRCxZZv1vS2hHnD12bQW5fduYDi9icx7ChzTB2RQsXn4jicxNKV4Yo1tUz",
  "key24": "2pJT7DU3WwmwGLmqZNTxD6eQmaBCey5jysyLd1niFXYnUeHfq4zDpd95b4BojJ81K4ofV16ZwLcFxUyS2x3M9yL8",
  "key25": "1w4xm2Vb561w2CJiq2BDQ3Pmjj7By6gq65YyehFRrRfPLbu7r5KmwpKjpWJLe9qRgzjzguegk922iGAVohaQCf7"
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
