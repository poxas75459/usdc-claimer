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
    "5ejAnnw6f9egTuh8UpokGknWAowwYrVLuCVYyEmx8EgJPpHPXgNu4zBAu754VdGd7b5QhNozQaiTSbg9b6vRZw4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hitKT98QEF8nVqJoganHY2h4YadsMDUeWVn3FL2hY2kpSe5QKEHFz5uzxiXun2JbHdoABWFUiohiPjmMW8X7Ajw",
  "key1": "3bjYzURGVjmWzm3zeCfgUEQ9ed7zUT82G1RjTYGtKXY4G9ZyeCx8EdtJJRthvw6UTvJTMdhkLhrvWNDzn8eS3Qt2",
  "key2": "5GESXxebkceC6CX6KwfCB1AeMdGFAwBbwqeLSx3qydmr41LQQAsSUVTUQ4Vi9WnaiD1T14RU6zMjfFMowtwecfUX",
  "key3": "4xqn1ZLtFEM3f9SyGbwAWxAxUGV87kUPxj9d8cKdZqnKjwjzRm3kgM4bMYBAVk7xXwx6cMPryRbsNCarLQ6RwLDB",
  "key4": "642RCKU3hGCBkj4eeFULwy1HBZAR9fvYVKVTjVoWHvB4EJ9kX93MgPDbAPZjdqxtsh4aH2mnoXa2Wffw91eeNw1i",
  "key5": "4a387didnA5JyJtiWYkoqLdY6GqYwrJkGi4agRMa8C9YowgvKECndLmpj7JMHRqiRyBwBHq5wo2yWVhrd8HGwigh",
  "key6": "2uhXhKeK5HAKtW8hn8B9btkxLiFgCCvjXWkofftaRHeVLqNwCNhCVmEvjVnjo1aU2NSWFEAsBVhQAiiT8QKsetbA",
  "key7": "4C8yrp95JCUmdEMrKPNQnq77ujcHmwEoZK8uUBEvVr1BmwzNinKKuQRHsUoe35Kfunh9HYruAAKjdamxBEa7ATHw",
  "key8": "2nNhc9DQ9z4bJAdg1AhDg4sNgBivPCTP6MKyyroNaVLmcssqVsHEkwMuVkEFzPZWxLUEBArCWR2VG4CPdXPaCn4Q",
  "key9": "31os3EYqkni2hH94u1nkdqaZy6ugAtuqucUZ7tEVfySUxVcdivxkqSkcTjREPV4jjq9EsHKtLyk7E6a7othLxkKW",
  "key10": "5hsusHUpvcuZ3sPiDUxqPjAgjs5QEURfUqLoLPtMgtwTgU22tNdE8JSo8Lfk5tfRLmMpp865aLZSfPg6kikByp62",
  "key11": "29MzMcd31MAGDLhPgP45i2m9StWWM2y9w2wedFn9m3vgAKNANbo696wvV7a73q9iLWZ1T2JmKMY3GqMVBWnW4ezi",
  "key12": "4dtKtzq3MvznNQ3qxy4GvqNLtTyWfA3FnL2eTDhWpnet439NPJJMceJKNF2jijzE85jDowRSh7vepeJiPnmBvnh1",
  "key13": "42gKRFgD8dYNVmYugD6iRvzqRufXuyCjQs3dfRyXMsWNC4dxi8C7pjfVFLtJmoFu9eeQtBJ3H8A85tTY4QNXF4yK",
  "key14": "35KpUYr1qTPkA4xqJzgD42VSLgtjG6rQSCyZSimX5gnjbaaw3vqQp8pJELvnUtYPzAknuyfgyWRpGznK3P6iUo9n",
  "key15": "kiZykQb3DVaW3GW6kmjSxgS8GcTA43yfQsKqj5LjhuW2PodiMaFZMaatqsDzex6h3Zksfoy6L6B91KEwLYwJoxL",
  "key16": "yv1WbkwNx9BhcQZmF1F96U61Q2c5sxLSsoLVVdpC2bm8B4hY8NME2fmFX2uz4eCBgmGheSMMMu3PLAcNL2RWqCv",
  "key17": "37eM34YkMktcDZ3dBm53QHYbz9GfoS3Qe237Au9Aagz4Pd418tXtdwcTDiTi2y7argxmvGoYpY5ui1dDC8X4wGsP",
  "key18": "5NxJNYjTyup1Qg1sGhMJtaPCNdeoDQ6EC2u4TqTPfWhW1VXR5ZKREQyfpTuYv5jBjbnsy7EPbNNANh8BqM9YmP9U",
  "key19": "rH8f1fY6yqzxkqgQAnHFpwbt6B7kUC31Xvh9axJucGvJS4ri1EPEfbiZqGzwJRtDiwvji84u41yEXWZZgFRsZWh",
  "key20": "5aYkepEaomh7nSCCN2YoHp3AJQyZLM3QqgJC4uq4axYrU1o1etzPmqHnL2dBb9bPS6DCVZYayTPoxXrTMLqsF2wn",
  "key21": "4VrCNwyoZtAryXNKeqH6UU2a8JapxTPhftgqbov3qRDgzrsbodCaE9z8VPRuEEQCjML8AajM4ybaHmd2c6Bf8tzz",
  "key22": "5q83hXrnshB6kkPzdNDcpvMN2eYj7TXhtXgEPxpzJjQvNr3ofL3fA726qMvTHusSfEeT2Z4Fywfx43BJUZdyhM1A",
  "key23": "1iY3b9oaiZeM6ASss25Zu13GSZVUfj8X98fgTUvox7FcK9Hax3oFAcwAFD7sVNbcpNxkF5tiVZtEZLGTRf1TxTN",
  "key24": "211f5UWge4hhcDueoMghQ6iHpgGhz5xRazeFT8cMde7GyL9ENXGGRN65UxQdGUpsHDpnDqXbKRRkUchSZWWbhste",
  "key25": "4sgJ6zCnpmpPhEwdYN4rN9wgacS1uZr7S8nLDvwK1PKbjeu5WC5StpyBGkNC9LV9jhJQP9kE679jPrp5dnKNS3SL",
  "key26": "5pY1RSJ2Nd1LNcpr1Gv3hXFvnTiTPr9BVNWeSyheKtMTYF2kLsUHRWwAvPbNJqx63ABcck9CozXUNK6Tnm1fiPHL",
  "key27": "4DzUnyvbjvKUG66h9M9vHiLV96Rdv1ViRJiqospZza3pQqP8auUhynspQ6iZvyycuafeVfu1ivBz4dwXaTtu6PDv",
  "key28": "3MeumUCw1D94R5Tfyx2b8xQb4nnG7BYeis7LF2tHgYELEugERSmDYacwwsDsjsBHyJ1iqxFHwjpT7pzCkuRfoNiX",
  "key29": "4zad1iwt6Cd8F8pjxSCuz21i8VSkcdxVuC6y8nsFmNSCkrJsbqDSnE5CKJMJazucRPZ9vNs67ayZ2KqYawc3zogn",
  "key30": "5KG5Q7UqWTRMmWTMa9XB71XFUBtxb7Tym8UeRCfxKKSPZJP8iMfeKarJRR2eHHv85f8hPuoD4b7PMgMtfPseERAR",
  "key31": "5aBq4VxdwCNcXR9hgUBdGoawWbgSCP28n8qMqCLWiFuyedd2ARkGhD1wWXoqCAjwFnMGQxKn9Ds51CAMDKmaCF5P",
  "key32": "EADrdc5yCoaE1AJFKL4dV5cSb4WEkkDs2z3BJ2Y3sp7hyn7Y1aCEzR8faD7rrumjaowHSRnNRdBAX2Y6viU7c7b",
  "key33": "667r2uvcBcWnpzgw6eFFXZYAjbsZRQCnARnFUvdF9CEd9fru8EAypbVaZTWM8qME3yM5Fjd5GfjieEycS5KHBZRL",
  "key34": "5wEwtQoy4MrgUTA5vLkR5gcy84RynV8EJt9PwmtFBMhp5TXFPY6kN3Zo8u7TfiMcdjFP9w6pbsXFXhEUrFnDsnmS"
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
