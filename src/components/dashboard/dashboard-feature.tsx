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
    "2swuCiRigfNdoL7PHm6fx4JahGeqxpZnDM8See12vowVTGGJiXdD5sGpn3Kq9XACBTCVgAYXnaTNhY9U7sXWxmuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m2BDdBwrzoAp1j8mMuCsTN5YuD3GPThedzyvFBzd7D81gM27BkXaT6yNDvJrcr1hWXwpDcS94FzEyvwzcodeGd3",
  "key1": "3BhynnsyCi83kYwBtjaxxQGvniTyfj12qBep94rgb5vx9NMwAyMKicqcWfgzyWCdrs5sDjS2KVo9Fh4vXucnRxpd",
  "key2": "2oUb8NW8mPLA4qQ1jtqQP2XfvPsJwzVtQHmMZDfiBph1GVaTBDPtESBgia5yqQR5S2mWzd33xw8dN1CwFPRRQtKn",
  "key3": "3GQvr8b9hHfEarNMDyvxg3EWAinTnSV12b9EgB9yg5KF4JLEL13bs8dckhqMESbxuonzDXMSvz9nKzTPDakq2GeU",
  "key4": "3w39kAqi8uzWPDyiAQXRA6TzY1ZH8nUt6DrfHjXgnZhdxNKaadMJ9kx1zSAhjpGqrrcUgGj6u8pAuDtWTVSmzca1",
  "key5": "58BcTS8BVrpL6un3CNgzYqsyrbeJjV7LGDebAqNzt98Wj6Kx7DPvEfHujxnS9evyyfmSSH5zEckjycbRRmTtMtTe",
  "key6": "5W2C9zG3BgsCp5x65Hj4JjuNQaJLWoPGfDsjhKJNCe3j9rKCrGDwTz8SXjfqTC8Z6pAhwFMEcdF4v6KRmwJAXrRn",
  "key7": "3SygYK149WzfN8Mk7Wjv7i9Zq63BbhW3wryRRHZ6nUAW2LnPr4bfp6hUpsQw3faDCZDC373CZggcWxoqnjQcgPw8",
  "key8": "3YtKXVXpXbTDxPkfGBfLqA38s3QpfkJwF9hQrCu3CZvYgZhkMXFvBaW2FoVBqA3TbrqaG5mhW9bfNbJHTnFyKRFq",
  "key9": "2nDz3Y4Q1h1M1rDMYH3UPEF8LANwfRWxJGSgCTZwLdZwwZH61yhJ35ypkXMtg6BpWL6P3HhwVoeZgAeizRRbjgp2",
  "key10": "5juLfo3VHNwQUhoxEBwhaAnJUebbXS1ZRwgUT7zLSQ5xpynG5ymac4Tsy8yeBNBA1SzdYFkxwJnQFk7wiowdsKPL",
  "key11": "39gyWJuULNvJ4YajcRpDbk9hvEbzMo73PHHWyX6dRySmCZSRfVDtunKG2Pf61tWxr57RpwdF4S9bKEyJjSMhqp7g",
  "key12": "5WuLVRdy3qqFErirfMMEpPbG4Bu6bKPSTTJhoACbY4u1wiY1Hx29whFX9RDGhCvvdEBTwN7y1MofR8SNbVX15eC5",
  "key13": "4xTvJrQSoLBC3NC1L9e2U4tPBL5UWpVSX7wFU6sPtQ4Grrtv1nF89PUapMX1zzDY643oCfxKdd6QVN8XWzzgGGTr",
  "key14": "4EKKPPDCEwmGZLwQ2LNSjXp3m32mVGTaWomXzCZDXDnmWRzLM6Ve1ffRKEBXhBU2uxpfjE4mxVRqvxTjrujuLxLc",
  "key15": "3h3waaW3gCgqKMqnEsos7kifDv3AtXiM85xDsGz1jbu9aCy52Qo91yCFRiejheAZgNMjXGYz4VWfCEa79WYmv16f",
  "key16": "26oeufGu3GSEguJHhynPsRXLhDgxpKAWkuwKyQF2tgDgxFtyduXji4Aqm1ob2xoimdc7H2WZ2vePtXUqvPNwDkyv",
  "key17": "b2wvXQPdJqcvdbpzGazNzrdZXXiydmvK3aC2drkxootfKt92VUXQCeFgxZjsm5NK642dp7THsCBzt8JwyNhGhva",
  "key18": "GtmMfVTfBg6Pr2z2PbxJ45Ueo4pZFgUNfyCmXeh1EHsQHitPNPXp5PYh2WAUfg2tZfSvpg5fLHAoSTiuvBe8Z8E",
  "key19": "ancGghJmxivXjjmV8QYvTjyfJpgRNbJGhdx4jhLdQdppxVnncVVtJAGQHgq6AuW1uvENUYzVmqLrwa6gdCWbbDh",
  "key20": "3HtyzqFWjzNARSpxcCjjMWQjL6yC7k5X5PJeBZYpDR9WD8d7egHX2XqoMCqDZXc4oqwAGTCYi65mst8SkX7y7FTT",
  "key21": "s8c3cKAMg59He5sWyASHJFhUF5dJfhUm5BaPGXXz9bzbN14tt2eHnwLWeyDgwcr1puL5EUG5AN14QJ2TMKwEXQJ",
  "key22": "21wWBFkM4JKx85d2LekZcZFANRjA1NAHnVQjJWEb5JUDZhSocujkCJUvRktEZ5ME6JpRcou6U2dimf2jNi4rUvnV",
  "key23": "yqRmmodpjnxNNTy9Luy7ribiKtpFJ9PxrAA16dS3d4TzqU3SPaA88qtxFSCvSAiuk8McZykZwN6qSto4zZZTiF5",
  "key24": "23SZcnxdhjSat1cNde3EFnPjdJWoGhMSoAkdz92LbrmRZenC9TqrRvYE54xQmJ44Tx44fYKjA3zrcfRdoY61Dqga",
  "key25": "2ftmgWxsm6jiBvMgxY7xmj2PLCiDBdy13Kos1demQ1Hq3ZYXhAg1aH5Xwb5me9ZcYhnRh9Qo6tm4oPe4grGjfkTB",
  "key26": "4HkMseNiXeY6ioggDC8aWrvq2hXYFJEAybaCB5VirXRLX97jqHWpxricENTHJEghtvWvtjcFgP3edbUJQDrnFw1J",
  "key27": "dUQ9zi5jZnd1b4dQoAgiqq9uwwScKPxzmhQz3CTNKcJVyQnEHbcMzCCrUgtdwZ7iw3g6kGsk2tm39xhYqZ7Y65Y"
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
