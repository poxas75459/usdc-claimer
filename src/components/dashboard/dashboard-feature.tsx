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
    "5Mk16pjAvbfuT8zkyBWscNUpfVHAktRzLNwLr6QtXT9vzQJGkTJWrHFjKqvqjsS6MqLhiSJUgc7HqKureQyB69Cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ooGUjVx2VydrLdX44Kpwbhx19yitdWNwpBJys7YLhnfWr3Y1PMJdPMiXCegTBC9rqH8ePLshBGXciC21Vv3yzcz",
  "key1": "2tUktuKwGW3mmAGbZfan59SfXcYQBJyKYnrBSCbTmhkQv3FCZFBatJ3Mh4dv9GQddFdj9uSNtZUJYXtMmPC6caHE",
  "key2": "4CbxgmCvNt3WnDkHJiYV3s6pcJBZpVxoc2bKjbdmsGejCikLLmznhExfUfpNm2dr8FNJ4V8Fh7SbE6pYT15BamEr",
  "key3": "GVB8bupQKKwZXm3MAsWMAaFq5QJaFHZDXQFBnUxdceCUWP7wssDarSJKb3P7orazQ4HwD2oQRYrjHPvCLfYTnHg",
  "key4": "27SSMfDQH532ALYG5XKNfhn3haqn7ZkdaqZfiiWfA2HbdvaEBoxvrreJPjkB5pBKP2N8wbESpRfdLnLfaYcfZVXW",
  "key5": "5qLNFd8wC8WLehUhtJThrWKH1sVCTpsBUENVWEgQcYoi7Gte3L3t8Hy35BproTPsvgxBgiGeM6tr2wUR8rvGDj9t",
  "key6": "4YCTPpCRygsABF1hzKf7yGaZAj2J9o6qkNDswuusnZffKkGs9axmWcJqbG6jGh76dPFAC7SVcADEGk8tgSf1dJph",
  "key7": "CXnuZYRHjBACi83Yqj8QEKUrX6pY8vDwgUD2wXMThTGth8Vt16F9651CBtG6G9T84pa1Nd3rfh5so7Wpf8c9E4s",
  "key8": "58ffHUcNH4b6FBYr2MXHXNuBWxXbsFKQzC5BHaXsVjdPsRaK2AawYBGgyEQYbmufd4PdneZ7XpLZFEtjKmkekdGM",
  "key9": "x4BkXAjvQLz7ZrJvZBzXiQaUxy9EUMTPpEGQaxffsniDCqmNRDWhwoWZ8B4tLw7XfjXbaeDGZSVNK48sZ3BZxKH",
  "key10": "5xEG3AbvYCMniqBWVxHgGDAGPJVLTY8YXMNq1CQAgP3MPWy84sp9Fozeqbwm8XqcSNDDfxURSt19KuhQJVbAe6FH",
  "key11": "4uYwuhGBpmuT6W55oBRno3SuDMgt5hEWYj5H821aRXQhMZfu8AkyjuJYvMWBS7WqeXArxxccyNCPptuiqxKCP5j5",
  "key12": "4FMyMMpKTo61PTmNpPjTSdv3A2oxqm5j5XmRD8jccr6qSFHae92WSBXidtYcX9FXgzEarNeNzwuuJDQMt6eLvsLt",
  "key13": "3khJEMDpXno3kcfs8DBMxu46LmyQBMkHUJyWi3uE1LH5oaUafAezrxm6EygXLk9XqNWHu4cb4xdTPfYA1d5A3E13",
  "key14": "71biFiALwLYB9XZG3HfPC8QH1Uk3hGijU72RTkkxbG3wpjKTt6oG2kwjuiDpkGEBN8HGwYqChsqk2EpBjxrjmyC",
  "key15": "4ohxP8KxCabokLaHcP8zVJNWmfMQDHAH6F5EcCyRRxd32fo5xFk6tJMg6jciKX3aaXtABSwzbSYBGDg2cBPiVpzR",
  "key16": "4nKdPimcoJGjAE1a8nouiDx4zfRHYGG3V2MNPFC8JBwqsavmx95BG8RNds2RdRHKtAfZ4xbHxHmJFoHCjgg16ycG",
  "key17": "3YHZyyBN4xxb3YKnjFCXTryKwL6WLpziEfBZiVKR6FkhWNH2oo4cji6FzSeU8fJJ2LeKpTaGTPAg2jvPoDLCT2Yv",
  "key18": "5NSz2WRXijbRSH4HzA4WQUCu75pF9fcwa56dEccAoWUHoGTZHt4cDir7zMFBiQGbGVRNJvVccyJax2jVMJDakpeq",
  "key19": "3JjBEi5eAhYXoBHKHbpjR3bd57GSs7XrSLnaZz58qUBgNhz3oUySi7ZeEYRDzX33h3ew3PDyQLxBk83cs2ym8T5j",
  "key20": "5fhkz8NzgfQbGgijcwp4y7CPJ8p6wLFnDFPcAhRWkbcTk4hXR22YR7mwZXmj1igoj8cdiM2XgDLUT37avjG8ZyuY",
  "key21": "RyHJZMZS8XvVrD165d8v2bZVYbAWgzw5MqQkEV3J1eNSausegtPCXoibCQSFZuMtNQWjm2TBfg8VJWXD2o4Ayvf",
  "key22": "5j3sCZneZrQY7LtKnbcSEQiA8TZjHYdwxYJGvDNdr5aHazA2AxMLp4PRuHrMWD2HnXa2vMej1qBS2DGYTdGtzbg9",
  "key23": "55sTgYPKJjMY6EdbgpA4HCxPZHpTnXXDdcfTRGJkpC38DcEVZtRie8WG2tKBnvYtxtcYWS7mRMGWek97RHCBdTLD",
  "key24": "2rYZg7zpwMUNZWqYXSfCwr8qo7aHQb6KWo71BP6j4YNM8Zsu7665z2LVyGP6C1rLv1VnHnSYEe4DGM4WjYrVCJr4",
  "key25": "3SzCGkAF5VbpCBWmitWc9tFZSKD1NHmSZHXBKqMpj5PkJsiZtBsGebuGrj81YuC8ofEZfViDRF9Ltkv1N5Gf2P55",
  "key26": "57WkibVPwn9Xj54AMkXFFxfPVwGXBrYfPbWSRnSA2Pb6pvJktmZfGjBwa4mpxnkGLe8vmzdEEq15MWBPWmNRAZ3s",
  "key27": "4dzz3EFrmnZytW5GBgtq7Lh71cUNjbLFEgGoWHrJidH5Zj3DDYjauhz1LdMEKdP37GL1SHrY2infiBGJnyu1RU5u",
  "key28": "5mGcYa3yAYPeWFqAkYT9U7aq4BV3JDtSctCvo1UkzHEMNFfvLTgzPPu18DmtmrbsUJXN1fU1cUC3X5v3kAPms6UF",
  "key29": "5xCrqzzTMA9cY5UQyqWfNtNaVtZXM7EzXtEuZeSuSjqg2N3WeogCSpkAoneD2Q6YBsTKRXntf92ZbX5nx3iapdHc",
  "key30": "41qqBH4k5649mhK6DEhKzfHmva5pkhvzr2baAojh9cMonbWe1rPEianxwUbZBP46W3hwLW3kBv4Xp5spjKpqpQxa"
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
