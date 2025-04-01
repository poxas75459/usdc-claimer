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
    "dLX1B6a7fZsqKHNaHvVSgQDqX1Z4HZXMm3WKWuuCXMvYh2FN4dw388hmfgVWDzpwJkspbs2bV7gRwNmXaak9Z1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PN1FBR6MfjdNLAS2zacYx7nHghjaPR2zZJTGkxuGYbjNBMpvm7DmUP9xAgc6Mfn3DG8LXft6stcpCTmdBLnUtXE",
  "key1": "3pJMkV3Kw1NGE6PyBqSS34RDzvANKnWfKuruqtgcXj99UmRaWpy2ZBbvnbEDMxP51umEXGePKMyvSu6o768Gs1wj",
  "key2": "3WHWQ5HAL9KUhcZngfeHP1LwpLRTkzM9fsCuz4SYR2NX9PcbddWrhEWwad5wvXYU3EKfC7UFn8ApAGSr8WtnFGs6",
  "key3": "34RXP6Bpc4oWpij5SquSEga2Lm1pzURvYzgbkxRQfEarpEijfKnYT3cGEdhhtyvthCtk1q3K8PGvtbYcwFNdfvGV",
  "key4": "3e4UD8y68MmGZV8Pej5HeZFVqWo5L61nhoWAzZtRt5tjPo45nXzWkr273BapdiAKrX9BA297XFuBFrg3FSsWCUp2",
  "key5": "56XbU6gznRb5Vp3uGzz7LgfmGEpw23rU1NJLmVFBY8hQ8qpZDhSjiUVrf5J9z4s6W25Jxw5BLJFFEnCvbowtQFnX",
  "key6": "3WWFhJpELwpJ2v14577b4wa9CrDHq5iSVfXAMSbkRWSjY8HkQcFkxJYve8JrfcyZ96rx7zX76Yw5yrwiH4WGJbqK",
  "key7": "3wVRXwwbVDxtV3mp6ZZrQVaPxWHgzcrFjg5q9jg5nd2p7Rk88FCtJ2bk2v3g1ech3TtvaEfqh6SoyiTAnSBuvbut",
  "key8": "2iEfJ8UwWvUuwaNoMtc48tnAr7PmWYgVJ3fgfq2F48SnG2dWw3XkqjJmkBXcxZw2ybPxwqgUyYYsCLVpT6cN4Fh7",
  "key9": "gZ9AoJByc1Y5KNVFJKUXZy3tXYSsQUf6JRShdmNP5MA7zaZ5FDYRThLkjw97S7upQkwmgoZuykM3adzUh3QERjE",
  "key10": "RbZq6z6jb9sMRTcVsmtE6oGE1S5bNSzjGxRFa6n1z7YFQNWm8QzhoR2F7vRfPYvoV8niLvwcjNXWKagwkgjUqNG",
  "key11": "4VU6c9MnX8KncJVNMoECkEUH1FZSEJSAkdQvQJQ8iFkRXkFT4j1DbBP3ZtZjYjL8YqokHHVzKXe3iQxoNZQ3TFVX",
  "key12": "3uZXNBQTzUrPhF6u691FxaY5CkYvHUeQJugGYoAB8nKpd9kQqVVPKMyUd29VSUkkExzRh46rVG764feVEj9XUBhy",
  "key13": "3dyuV2Qx18yKcyvbQ1d8RqKzLNXdykDEgPfi8anQSKdc92UtdUjbF7fTRv9SFzf9JiUeop1NGtW8FXPkWvefTmVr",
  "key14": "47X9FMN4ntp4iyksVq3njpyVSUGdG7HL5BdKTsmW47UEuNvg4WcgGUdoyYitv9QeoqE7JMVK4hjE7G3sLYnXAJEa",
  "key15": "5zPMNQAnTFsn1yfM3tPACifyqV7B4u55SyuMmVuGdXPkpQtomGY2KABpgH7kMTPr3urHrezXijmWhFRcG5vkBRam",
  "key16": "ponigarkMS38oxLYtDy1kohn4Bq3U4SswmRxFkSdj1rDUnrR2x8AzK395NZiXkSyRpUKW4571hBrcGm2d4vDqQH",
  "key17": "61xpxqpeMknimixqJomcNEA4YHj6HVbbXm4LS9zgepJPkX8D48URfuUJnbPFk4yMWpikLjQhbK6AA54ZL8qGw3vA",
  "key18": "37W79xS2SSAyvtmFWxWXzyPEnWeNomBwCNc4RsjFKxnY7ZMJcFe2HZ9xPzEiBHvKcuNSYC6AngUDgnudGBiLoy5Z",
  "key19": "3QkAcRhhkGij3kN2W5ubUkGKJqBmTxgj777o6QH87EzxxoLakFDBsbQNmFoCR1Cjae3rqMhq9z7DiayhMtGZ3SuH",
  "key20": "XSQLektXCGuB2koSVGeuDntncUgocSXNtamPuwfpT9MsSWpGmMWZkaN4Pxu8B1As3wD6uGWgh2Y4LUSVau5j2fE",
  "key21": "S2Vd5Gy7oWests23XPMfG8jUU4M1kYLBKx1e7NmMRznEuqXACSrD36R47BseXK191Tbg3zaAtPA6KcmkJ6LtcwE",
  "key22": "4RTwGm59ghcdb96vd9ANzuy2YRAAnrGS4rKzySzbirgHDww2Dkbbvz1EeQabP6t53k6Lpvdo7drCUtwGW1ticxf9",
  "key23": "5Z75esX5fmWdXnJXLhHcPWiDWRoFoZbykM6NyEEuopBvskKXXJ6NB3qmVr2VTTZGDQKdDbkGjNe23eUp4RNFwEpA",
  "key24": "4M9ARmt6S5ksz6DUdkSXV7FhXjKuz7tSAqF7mdAdH1XmDEBzVv56nCgeXZh1WiPwEFbiRYy2NpZvhg58TKkETm8U"
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
