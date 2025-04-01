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
    "2CWAqTQ3Lh37AA3Rzbgx2oTBVCfVKFH6BTSNmc7gTA5wuGqB3TGFh46xi4KjFRQmEFooRNKoGAKjnvVU3pxaoRRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u9Cd3E2yi1cSuYRxx3dBnF9CkfRu7r7yMwQezb67hXpFpSmat8MGHYjVtwzcRz3hKxPYX9W13R9hCWrHJoxtpGQ",
  "key1": "5kog6dg5gDcvnbJUgL9Xh3txLxyWvvV3TKmreditqkCxRERcz8mn46G21PByQGsYxYnvUfqxWT3F6dJhZhk4FXqy",
  "key2": "5Q2URh7nNJY4UyxntzMLn36KE5Mp3YvBe94Q9QwcQQ71mMfDFj3q7E6mYxXLp6Vfk9ZyiztAKbVMnEZouNnun5w1",
  "key3": "2MCXzn2H74RvvYezKny4MkjT9v6XiM9bavbEJx4SCrjJ7iy2DqZWybF1icHY52ueAviuAgk1BptKeS3mGNpGgbrB",
  "key4": "4T8hp2zeYJUwb9X6aUXoCMxH6KPw5CpYt77nsoYTafG96bjvRpqbZr91DSN8iA6u3HPipp3MZi8S6rMK5Phr77zP",
  "key5": "d8eYXdCGywtqNpu6MZxQVWL2R7fXAsGCiCGgahV7qoHTfp7MMtj2zkvLUxiNXB9YE12m61UGBb9wbpWv8nh1feK",
  "key6": "3RztsfC9xY7G7Hzs8WHM1bB1FMESqK6SgtN88eY4xGppWRjrZ46aqEpLW2FD3ZnPLJaJZkrMovpJ91akbeTs6vWa",
  "key7": "53RtyBVzAVGMxJJ5AkJqnovyjzamewVfYBxwtY5y35DMYHxr4iXHk9z3aB4fn3jAw1QpEBmMHKi5FnvxySrMehzS",
  "key8": "2eBKjJTvPtjf9LeqCvJsyS4QNrfGjnDN7asPg8C2LMiWt3bJYBpqkDxV7uT9YDXYrAsLVxLdcerpyyVMrqGNSmgA",
  "key9": "5bUrRMR3ma2joh2jdxQt4VzWytKNH9ttvCv6VHsUvuFWLfHmp2zCx88KHV3uspe92KJ3KiHTTCtpanEajK2ybvmA",
  "key10": "jd7pbWd3a1DAre2HACrowEqnpwRCyVgPqFjV3hpCo2xUWEaCxp6PcoQs4KYYwT6gqytVR6eYsLXKJ5qnNQbFjCR",
  "key11": "2xAAinvyuzfFDnvjFb937yMxPmMfhDVeMxfjL2wYp8j6qTFKGQ5KpV97ymDk51YERkUN2rq2cmwjeP7X5vU1RnEX",
  "key12": "47cWekL31jH5nqSMJS8iWfZVxfBRsCjRmVGgidvKkq9jd1cKHynuo4zwr3SQAw7f8DcWGeMHYanzxt91iNvm5hBq",
  "key13": "3zqzRkJGmr24XMgWAmC9JGqWvYeZZvtRt5pGqeHXjAyg462W472AgEFddpzPiyaM2SGfAdbGdNQnDHo4p7i4DHVZ",
  "key14": "3tnr9gjvj25AavN2aG5GjTcGHjqNQpNKq3wThX5WHcnuWUEykMPa89eSvYqcgkDV2pYJPb7uyq85k1J5qFgejyVv",
  "key15": "hCVtjahq3dtJdvBWy5GPkzfT1GNKuHDvL3jWdSpiztqU9rdwThYejiiQaUm13ohoCd9a6DbD8nm4LmZtotcBNjX",
  "key16": "4sk3Nz9vHvaWbMxsEQx7R6nNYr1xNW8WUSpKhrtMVhoPtYubDiwvdPRS8bByNp8j2KpqnR49GfPRe1oZejXogKgs",
  "key17": "579xLuxVBtNUYrPqkXWtWyKcZg6Wbp1iaMk2m6hBw6xqgDSZzxUx624WRKh3PzjTZkASDME58sJUUTjNZ7mFVQ6D",
  "key18": "suPhy692JwSfRLUwbGoSDUYMCbpddJ8NvmJQafn8iCi1XyViKCc8xxiNxPQTNRFp55jnz9ytubi2bwrRnZJvCv5",
  "key19": "2o1nqYp86VQXxvTUhKnzF64g4CciroTUzKvvat6EL26jfi9ErDZMJnGs26d8gW9nmreBFmzf5J6n5ntLfc3K8sm4",
  "key20": "5EgvQNbCL5bCEhdES6GFcXDGz52ck9JDbtWdJGstHBDiKo9xcAKJ8W4WjS3WouyWnYhyvmQtvWg2RnJ4T1NKjJbY",
  "key21": "2GJg82KonCHxDDfWNdcmj3uJTgMrXoczBeaeYJGkguEzGADGuoW2aWfgAL7vB35ChGt59hWoHZ4dnmrJ3XVmqpj4",
  "key22": "4T1sWTkZ82urQKC12CjiAZfUF9zsrfeopAcXYR29pws1Ndj4C9hG1cKrRYRP2mMFawGFLyaggovM683hFz3KSWzN",
  "key23": "4PQyxa2K5dsiGZrG1TGefeqnor9NG39vKoJJYSAS7fZXmihZGmsooGiCPe9fhrGPWizoMjRvy2gYDa1NpZ5ZnVw8",
  "key24": "4Fc5Zm5xcqS5MUqiqBJySdYHGp66L7a2Ht2ihy8YinxJeunwiF9gSR7GPeFUXyKiF2swuGehdNa1zZvUiEW7iBQ8",
  "key25": "4RyyuzebgzN6NTuBgVf8kSehrMmDt63NW2oZrXqTvrKon1QaixwiVSMekped2iCfA33NEp7D8QCBdNSAnuRnztm5"
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
