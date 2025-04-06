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
    "PVYGuLfLchNvXwUkTHV9hGbNHHsFyjVGwcFsK5Pf2q1UgAEXXpHr59Nmu5mWuYbYJRb9xZkxiA4jdDPYgXDsKy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YHiUmcctpWdsmFkVUdWqxhuj6PBYK93B1ddX6zrmKLLfuPS93GsB4ruA5kiNp3gXbv1pqwkDW9trfZTgsQ33fkw",
  "key1": "5WAk2FRkVeboZuEZgVBXHDwKjHcrUdsRFYiPNvQDrcq4DVijHkF4VHeopG16HrWpi7tZnsrzce69KwKgyDQ9Q17D",
  "key2": "3AQnjxS1KtDoMy1xhRTd7GmxQQRGSxHPbzwt59okWhR4bXmDYnnMsWm4ZLWxhT7ENzPTSny6ryi56bwUbz7T2B4p",
  "key3": "26Bd6h7AmRmn5EhnSEq7DYqNep1cMW27qSRBfPAHr6oT5AUSS4qXfQd9UvhuQkhb4HY5kv6fC8Nq5vsYJL9uUXKo",
  "key4": "23VywdJT9G4PdHnJn8x1vwU187DrmP6NBx1vzw3vQSqTt6Vyw7tRQx6Ly5UuEquPhMthoG1CMCZrbbQhJU42GRyH",
  "key5": "3DbtqhY8rE8JNjnZhUexHXMwvGaddB8TX1Yi83NG17qPa2radCAau5UL9TFX1y8fjdgU61XrtYWdLg5sfhLDeXTE",
  "key6": "4h2KGvxmQrFSxY1NGJnG6qktP5nyVsKpqxdcq2pFYmfKXkqhAFpPb9bMgW4AZM5Fyd4UFHW4pF1D94tdfcP6fwoi",
  "key7": "4WcMsADhREtmB4HW2QvTUotVX2RFwkrjXqef4kBPUNrkY88HX5rsjRdJaBbcXg9sEr2Gaw3sEtbU1njW1DVXCsm9",
  "key8": "4ojwePfLEH8qtfW3M42i5PoQpqCiFXoHppLhEQHt5EQKjRJ7JNX5UPEsLfExg9eTrKAZMsqZH3EQGKVNb6mZQe2T",
  "key9": "3bLbbEjvDPnUTUotDKuKvhcksECwZBKjSSVLh69KZj9YADLWiQsJ3y17Fh5EHZZfx3MRK1T1yBtvjoHdd2VNqN3V",
  "key10": "dxwP8WFRFDu3caD4LVqb2qrxVDXQnJSy7LVLskewHz38XHgLSSqu7V5kTPQeoN3HBLxTxrw3w73egJ59izKTQSk",
  "key11": "C55KDHRh9WuxAg4DJhfEs45g754KajLWvBemH57mgCRF1bsnM2JzddMcsjUTctqn9u1pDVJEUQWAC1jnYYMo83r",
  "key12": "1x5Y8XAVVDxUxaNUvoqvFtaSjiJkh9MDeb1zXJbbH9dUk3rFuZ49xrZSA4DuTmgKCMtKRZZW5Rm1ohQdZa3dAA2",
  "key13": "2x5UyUFECtdytdWZvXb6exfRNSEicQSRxijYtvn9WfrpAPjfgsiVCtK5t3b6ExwtqCS6pvQ5FgBKs5rbSt4EY1fE",
  "key14": "4Q1D7nVThYbVrrvZQBQQqWaBdjnyHTjWQPnGd1U7Fgw3pigZQFDS7yGxEJvTiPjEERHLoMCiTwiwt9SoArrZfMyf",
  "key15": "4MkeCg73fMpBJnszyXgPMvP8DYHePAV2smK1Y6vWysdjZJsM22niPjU966TjmRh2q3sjM2ZfsBZieDFxUnDrbmCb",
  "key16": "2Bp9wE4THzyRuddK2y1dtNVguZzjYkzSPgRDmvpzzhi3yrxAUd2sSPMZrqJvL8LToW9TuBM3aVTobAWWM5XT6ueU",
  "key17": "tsNeNUoiWi7r2Myv1GdvxQVDEfMtMxHurf8AGvRiC7fFrbgSuteazQjWBkD6bpV4SF959d4qWJJmphBpWaoNJQx",
  "key18": "5XrkKpk3DeUYdsrpwchEHZz6zXgYnqcaPX99jDKmCCb9BNmLy3bpgk4WqMriHEXdstdpy6fX3XxFuVJPZkEsgNcb",
  "key19": "2K4XMyu59VZcuz64ZC3SgWLiaxAwQtWyaqABW8ngkJXgqQu3wdzjfw8AwoSH53Ne6wkhQiiCGsMdcBqiqdVu4t4u",
  "key20": "2Gdhwcz2tTsYTEVZPaZYim1RSVpbxoasCBCLEArkz37uBj4qxe1Yxwk3nvPqp5GtYWDi6kNtwvo67mtAt1LmvWUm",
  "key21": "5aaCsfeXDA2zynLbjtyLEsC2cVhaJMmnvjpPdbAgjtDiYDsuczHTH8mwSTh8bnsD6yCnRPu9sUjy9qnEmv1sPjX5",
  "key22": "3dK8SSiuWdQH9KUhWZbomr9sneGG3xyYzhGLJWUCWmM3xuEri71TCJSK6CCd41GBTTECvsQtPsVevAPQ9ALLWXrn",
  "key23": "2kcHzUMScEhJv2Kfj2V5sirxUEoPMmZ6qTLpAUFAXyRzVfKfywAKzxV3V4yTxNLcM89qzBZQKsbf9Jq55ef8a3RG",
  "key24": "5edEzkuJ8MwxC1xHzvQpJfTc41Ar53wACSg3Hbt4gUCPkX9BskTWswk2xvKYbJJVE6sPJNhuSz4ie33pMWahYkex",
  "key25": "3tc2AzHYro1kNJqARw8JEb5EhABJZBeAMyUwTG9VrCE5jJJgqPvg5w13osV4dRnnF7N7CjzYEsXq8pGgxFrTVFdP"
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
