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
    "3Wj1pikaY88ARkQHXSiKPyHHDiBs8mvQPwvu8iCYuB2KqcyLvDooXcWGE5w4pAvhHKRGHGxppdPBTccEJ1am4CBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RtMEXHYDyF1V7pvBpgPCUq8wnHiDUTF7bVxr88DXHVZyuxbcVoF6zqhAbAEtz51qvo2TauZJpL8vR7nMjeGysi2",
  "key1": "5B6wTTPdvgfBtcWaMvYyLYtRtDLaBkZYiM81KZvJC5GGJ6JuMyDog5427Piz4udRVjXszjM8LdhiTRa6sBSQK1g4",
  "key2": "61Y7VhpgcZB4Cz3g1gSPfhzk48JhZQWaL3QSqSbrHqk9ymUF8Ts1wtFrFhwuSfVC27n474Pg9a5TVeXN9VT7T7vn",
  "key3": "jTT8XsZ6CDUkwFLruvyv9V1c4LUJcHca4QL1TyMUcPpuujhWWRqApNj3wNBzZV3Np4izwf9YXrgMnDMc5wLrPWu",
  "key4": "3NgKJV8kB62LoP8KXd1BaMoWgWGXqwzR5qZb5wE3Hubd6JCK3NmmF5jxdH2oBA3d4RUVEMo6WuFdVPYaRcNhnKXk",
  "key5": "3KaPBGwrjEsHnL6YNgEwu5qfp62Ny3zeXJEXWyUYtuPuRPERdA8sTXdj817aJPUmi3R9YigASnVuHH4skYQ4pZSK",
  "key6": "5cKcyjfAbQHcbFSHeEhQbVbTfd9kfVLbVYTa77sFKCwznFiKPAeRGbsyn6xeenVc5kjHT35piDXLjmKtKXh9k81A",
  "key7": "3vWVZLSD3mgoaubKAtgAQTSbr5yq7WvWjpTh7DYqKTCVy4AqHAgTUWHXd6fAFdHNEBz1LxSREHcvAGdz8ayRVo3U",
  "key8": "221WaqrxFRcay5di2aWnUCHojxYdVWpEcYTmiZqcZW8qGcuvDFUMWkPmTLcNmKdrnh2dQbjdmMcqtfogCjAcn5RK",
  "key9": "5g2u5Y5DqhNKSXuzyrSaeQqAbePPbLzp3YWfpxBnZxWJsivUvTbXbBTtXR1FRVio6D3YWAWKQyMhZmqvsKBjrFVd",
  "key10": "3RrN6QgKEb9oojc5k9ijYgjTmd1Zoyk6MHqm6jkWaen2vuNmHgd3SL1LP8DepQ1iaqtngVh2iRRCRF79EiUh52KW",
  "key11": "1KqABksZtsK1GK8Dg71UpzybgfGcHqi5nD4EYvyofYPJmjJf17UMsEW3qW76YP3PtAoE4PAp4gS7dUhTTDnAkY3",
  "key12": "2jUNKbunHA6cmaPSuihkRuo8Nhxraqj4SJhvvYdp6mJkkZknqCC3ZxjGVSMmfcRe2X8iy1rJH99G76sY9ve8iznv",
  "key13": "5NrcN86LxfbMbF7U1LzJ5dsBYxfkjbGX5qfmKqXHvnnRWuiQy6ASGnPr9HHbCaiGtwT4T9X8sSTYEJL89Zg4maUg",
  "key14": "Lch1SNWudkAmfJ4sFYV5HauAo24x5QRFbt3DcNGWWWHSNnyh58rxqLYDAP32sGLdjz6Np7dVy9YrB8fUq58C722",
  "key15": "3jhaj9iiymJgkBRVVr1dsNrRP5r2RNfDYUQ2L6jAqDSucDiD3cs5GppUN8GueExh2JujyjYqcVV2nLD5ayNW458Y",
  "key16": "5BW2YPxnSD3YREkNEcpqRzJEV6U6fuQei5cRGpUyHn6ea41daHe4UZ8oLj4EHFxy2S5kEF7gxXqo8kT1HEcFjj9w",
  "key17": "1Z4K1Fhv6Pd1JHwoPQf6E1zaQkZBqAs4r3StvZpsYXkqks4ZyZhwLRcNJTaUpchwSCyzdcZh8nm3EC6AGGTzeqq",
  "key18": "3PLTVzWM4j6XDtTts2NPAPhWpFT1AfCMuGX1LLY79NRjqV7EnvFZwZuSY2JWMdmvQwGzeABRkPoGP7UoENnnpm4s",
  "key19": "37812mNSeCqNbnoJ2bwoLSxner5nDyPWSYQ8mGjVroMpXyxtHcHEBrujR7YJr78GTU5JdcxgkA8ZmjeYYWG5Jumj",
  "key20": "5MWwvPB5DArBEuvbVB9eUE5U8VphBagAXx1TNpMGTjTEzAovmjNHLGL2BkdHqVuBSmiFBKCMw3Lr8JGyYPWXUD4E",
  "key21": "2hBpKo1dPtRe8SccVnFxbSjEY4Nhcz9t1KJRoq3ACfgXqktUBZuJi1h4qBmwCDhdWE4S2ta22iTgi4DFHphNBJFy",
  "key22": "4FxP8sZDR8rX9bzvB5Ft2gcn6EniLmfEa3xHwspZAUR7pue4865jrAdZsTXkxZrpUSiyyVUY7zEmQT7VU6UKpJ9v",
  "key23": "27qJnDPQvobFAM4onzXcM88JUJFksqSdJbUa7qno9sb9c7f8QF62DmpxDFmV74EBTEqeAdJ9cTEqzx7MeqQg8uj9",
  "key24": "3BrQTqUwHkbk15oVDt9ktUxnJizpLJArR2rMpdfvSzkoB4irzhHFLK6o7zntwpsPfDYMwuynSZjJ88y3YeCRCUNS",
  "key25": "3n9L8tRBf8szV21iSNxoHQh7namgG2eP3hf34i76NnzHJu5qRZ5tX2Ff8XrAao3H7QwVbBgneyZ6NVszZWbARHnB"
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
