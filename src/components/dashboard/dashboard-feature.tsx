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
    "5qkSEdHDMr5onV9EwVLC16UsFHiA8z28z6LtA54BsL4EYJ1UYEk84nzUWB6Vf4bEM7PpAApPMGJ3MuVCLLqp3SWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22kWuKTKt1hXYAWCNeBqWhrHwk5gTdPFoyAT69TBCee42GxKN9WrqzPG6KjppCYXydw2ypXHQgQ9RWSRF1QD4j6y",
  "key1": "X1vPjyFK5fCg1udJLVU4cjbuFuujHswECJigrcvULKVpqxDdym7XPKig92idndseXXEdiTeNKBG5xbHB3BbTSV1",
  "key2": "4yR6G86T3y7bCMmBdVUPwxnUFEWYbow3TaL53TgyUgWyp6SrRubMPV6oXjDiQRAg3WKLFVVWsuCSo5q3LjCz5dej",
  "key3": "65hxrL4GZwoyCHEusARu5T9ajpSb366QPPDWfoqux2RFvwjEHYxohiLhELc9fPVJhJEwAzgPgKeiR61ULnSYNwDa",
  "key4": "2jjEy5cHf6X22DPbCJqtV8rhbzeKwX31JNLdk8mCJGLPQxpU9upyaszwHy7g6fNVCBmBYasaqjZxyXvVsi6AZ8AS",
  "key5": "5n3vAukm5jjo87gkTkGVecQ7ZMxFSMNXbYRK8H9HPoGy5C7VCsVRMzJDLC6dNKU15MjZivfDe8ahhCmV6Vb6XXHS",
  "key6": "2Ejk1g9iKPssnk57UYtaFUFvAKmYBzjNNVgR4idPNNxPRKzhC1rMGyFRN5qod734M7BgzNm4a2e18AbF4hwQw8au",
  "key7": "5Qo93nX3Pp41fycJLo9ZsvDvu9jNjtbRwzQhbTALuVaxBaeCkFTLMc1TjEb2H1YTRpjVWmi63x6cYZrqwvb3NJtR",
  "key8": "3DHD4yN6p4K3TvWAFjN9jD5XfL93dwj6XAXrtXC9JaRYicpaZ1gMpmASeJVMkQzTEYPxgZwugUNyBoDJPpi2xGYG",
  "key9": "2K6DZEUsCNt5rVC5uzXGcQSNQN2fojzbuYmBJvpgvFWEYfne1GbgY1kKRsy1zBMjyNBpVDtAJit77HdyKQztUYbo",
  "key10": "51rnkqxVetMgQPcmoADPfH2Ju2TZBhYNFZhUf7JXxfADJCxjHtQRfcdBFkavXqtSpLRqxU8bmtmeymqRDfCXQBSE",
  "key11": "58pLPnUqxUN3xfYkyyM76mK5CrLWCtYdeBTqYGUvPDjnV1kt7UDonZ4JFPzL77ycSS2JyrmFv1Z8RD8Pyd6kHMik",
  "key12": "28UabbQDPAvm3wMg5JB3B1yi2BC9C81H5ArfCTWXMsXnxPiefjSYUEeeN5rMM97PemYwT8Udr917P9DqJLYzEGEM",
  "key13": "4HNSVXaQLq6t3oees4ANyY4u8A7nQGCEWtiZkpykxwBx5uAcxCJJw3iG7G9DUWLdBUM78KU1XjY1UvctYanSwUoA",
  "key14": "41SuFmC37hXoe4CyQqEzqVQmrebNRDmLQH52NAKMNHDRkiTK5DcFhwSSGeCF81oFXrAcVtbFEV2UkUXSXhUCRTzb",
  "key15": "21NEQtQdBEB1QU2qxUct18YbQTEY6eQkytHyF22H5JMUuA7wJq83JUbeg5kWSMCYQPC9MmCu5fb5y39Na4a87tfw",
  "key16": "4ka5jARvgK67E8iDXZSr9jo4owGrRLCmegBskWyvM9dhzc1Pmzh8QgjBzPESiqnejXehXvDrEQuQSCyVGD7sHAs6",
  "key17": "3rDm9aJXDswtmyoEc27LN2A92hbQGHV9HSLGWitHgkugydc3aCyXiUKNWshvH2RWNAEHKixM5EYY82eM3VS7u6xK",
  "key18": "3DBCS7J354MEd82jb2XWW5ri4hzEx5i2hzEopijb7Y7hAk3MCs4NhoD8UJnzJsD6MZxjfoGME5pV9pdj7teCyTVg",
  "key19": "5bgXZsJdQoq7hgJJJ5ufZ3MXBtF88snPFoNrS6yFXjeJmUGze7En6KJpmjqTJtpeXgC3kjkyxrAcShUBZwHLjwqK",
  "key20": "4PWxfiXPVoRHpwjMZ4LWokRQo3r8GWcbVftEbQxM1eUApE82VxTxfLSsyxVpoVTEecmw7yUT8dvqNvAfUbQZkkYs",
  "key21": "5UHT1gYVoinJ5dn8PubNru5gGkKWYrfC8rPPUnx7xJFMSX8b7PkbYFirFm37gTUqxPqQVpVVcfDX3xMvLCDKxoXt",
  "key22": "4LPsTmSBL6saDZHLKwsSdYJ3vDuH6FUiwCu4gML2b4A2siFmiJ7VbEjwamCdEjFJ35XR7RAQZUyppuS558vSfMxo",
  "key23": "3dvZAQzr1VnBfZi2r229T9B9BioxB45gbBRZYZ4J82ij4YDpbkVkhZCBbSGDHh4U5D9B5VHZNHdsBbd1dFZcv5Eu",
  "key24": "5qgMkuUX9GabRegTGBjWbytHyLig63x48Dt3mmVWrheZ9kFcCjRu62kp1A34wpciuT7zYf7ZwshDLFfXJjdwGgD6",
  "key25": "5ucjgP1EQT3NPSw9KHfHqC5AMfiKkdWaHMrZbxKAmTSh7nUCDbwVEG6GbvUZiEma17pD5XLXNhzeri2xWvnYn8wC",
  "key26": "JSShySsSUhaRcEHsstNs76EsHPTfnGxfRiCh3yzH3mUay52NBW9uk6G8r7cuZ1SuAqVpAFr22LTJtfGZD35XWr3",
  "key27": "ZuEv9EyMPjGXk9bPTyyxYLRWaKoQRxFb3FxnqZ1WgwmQFSP7gmG224asANubnfwvnqKnhjKj2DhpdGjbrEgyvPq",
  "key28": "2MtDyDgXQQ5MvJFDkyng3mNwb2cPSzgkSXG4WTwPWKk9tfKHRhJBb4pUiidnsqedNwubHsXnXeg1bYtkmFmdk7Hh",
  "key29": "KNNM1ABShS4o7B3dAp6NP3ht16aehYZsXgWV8zFyTC2MMZGS8N1gZHTKyBFDXxvxUzNywVoNBj6Pr2R5mmL3o4B",
  "key30": "4LkGDztUMQ3BS2orUbnF8cWDabZgRSbvEmfrBxgGQo6McrArKR4Ka79UG1xjSqwzBQk59jTqyCSYy8yvQDmybc9y"
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
