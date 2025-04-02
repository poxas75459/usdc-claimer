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
    "4xixGicAR1xiY9Yaqw6paCcZcKtK3fm9q1i6ZZxd7hL4Jz9rePteiHVY2wQY9PMoL2PAf9RUDPsERegrtCLvWES8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sdxRMZZk3XcFNEr5n8UDE47ffQjZsQfV9KtRtgdrpFGgbwyfNnJkaqbdZShXPXSsEiH5vPapowzPNww1qHkABHy",
  "key1": "2pJcPKXMVZmpXVXmasF3m7BDpv6etKnqofzMPNwmxAdgZA77d94njgmiLkDURx41gUjbQToWSFCa4HuZQUAVU4rw",
  "key2": "5CjGcy6SuVoEiybfR1pm7VPmY8RYG96nARHmrUz5MhzShzrLW5MWecVJyfDScV7Au8tySkecoCpcmePwf5X3ZLYw",
  "key3": "4SS6N9JVBorLyUA2t1eKsVDegEAeEB15h3bd19i9spVTP2qcPD1WtyQrELns8AA5X1PuQR93mYaiZYUtayVSvzFf",
  "key4": "3mcpX41TxsTKcgvBBkaEDqBpBp9SmMMwiSw2CUqruqnSG4oHj3rF1cgKnr7tqkAsRigx6XAbzLdWtRpmvzvkt5jK",
  "key5": "4bfXWoz38WfThFZgwzwJPhede8Q44YAdg2Mf8RDmNFAQrrVWezSq5QFc2y1rkh5YQYfZ49uiGWWmgMfU3AuwLkED",
  "key6": "5No5h2ERVujgBQsJRtDkB8zWKk9AGv4uLBGDiJuJp3oMJAbzUcWLZmWzy34zA9dAbQzK71CasLeLUX7Ak6zsfHwp",
  "key7": "2EpQ8w5t9B7Wop52eJdRLNsP3gPfV6ULwLuyCi8a94qmM1kjUKSmnfeyTA6cyJ3nEJ11WRH29UJ6h8E7WLmEmuB1",
  "key8": "2DkL8XQkJAQYBKwJsY1HsADbFQvgvR8phNdqP1Cqurhbxvx2RRZGYJU59neKt2LMPpx6HFZWuc7jeAjhXZmkuLZy",
  "key9": "5gPkCJrTJwHov1QJ1hAh5Ho5Xm5hd78ybHmthUMH48jJbwUHJWuJh2mxnjSEh5jzsx3CD3WwSDzLdPfJNbqLcY2z",
  "key10": "2WaZKnqMFkcz7Pfq9NmjixcdXPbMDeXBunBPhShj1zJuKNmKDk1vCiUpLzNLyw4magf5WyNF4aTVpUcPgG6JNzxw",
  "key11": "646gebEWE81uurHiiFTmF6xsrEVjPKRseTrvA7eSn8UwksPy2XZYX845r3kM8ETyofYJSQqne7MjX2aKnUeLkGfN",
  "key12": "5XNsRjHANcMCBgxKdawNebuwXwNAKziyoYApfgg8LuHxwCCuec3GBwuT2yPgTC6rVdNLpiRYeUWGus1ka2PbQQXh",
  "key13": "GPCkwzG2TyoLcs7xXL5MzGLwdxcxnP38MZvvwP2JwKWcz5kbASnDnDoKfPMyevC82csXcTvNsQ9dcZXXiLN8UfD",
  "key14": "4bL7C4xwVtYWTYefzjjsPa1MXEoLEF8tqesrGVfJYPESfztZ39WNUm62zBGg4vEFE3vkay3vLZGSdbwrbkYsQtc",
  "key15": "4Vy6ku4pCiwLEUyQydpSnJDytafD3J2QyQ4b3Gh6psdQ7da8b3Y1KdvKeVcFNsefQcPPC5WN8Kn3avrgHknMDv9T",
  "key16": "5URjuc3WiB6gxBwUbcZp37bR3cj7N4S4VSET98VfGB9XntD2tr9sRFBZckuPXdusZRYYubMbxpd2GvqkXdYP4Bpq",
  "key17": "2fMTQp3TXCGq2aQHqHG81PJjK2HQ7jYFHR2ET7wF6WNmLAxBGhZVPZs4kioMoLqK98XLbHpQcWb28DduLruiT9p5",
  "key18": "4FyGA6yVLrKrHNPj5cPonGqT1VS2fiPAWJVxPkgQmZKW3SXJCfecMo4NQuBFFB1tVu3t8ZPbnSnSHJvBppCj3vVK",
  "key19": "JtDmkniWMY8jExPqaA6QXbDvXMJ4Wh9FUajmNFVm17R28NDjBL5wSU3F1pHf6Xk3ay6upbHhBpWnZwTiojAp18X",
  "key20": "5Jokb5xi41t3fYk4aGfE2gFTquk9ygtW4B3uGgroQmgwDyv2ArscEfGueVfuSQXoLezNUrXYixzqK7pzp3PdwtpL",
  "key21": "2ehtW2GRfmvMDNN3kjnhn6MWQ1TJ35YqdgRke3xPNqQouwrP1bcPdgEWesAisjx7rJt79xaFnpmG43FXwMAFJqfi",
  "key22": "5dBFiW4F4qncW4hLK1iFDBcgWS2EVMv27gFU6XhGUfB3NPfUfWPEyrf6iy8FJ1WKeYDXEBT8jCTaC8bdXdhCqbRT",
  "key23": "3pWaKx5pagLQUxoEd1KL8orkWfNn61dq8gBw2DDZz6p5FzhbhWYnwGT3nNDu5RipGNnQ7VhTdjw1HVDuZku7jxbh",
  "key24": "4fqwcT6QkfhYLKJox6uAnStxusznPq1GhzSz6rrT7K5LLNQbbJN51jf2QASY3dugQzcaz2C7HQtLSZa4xpqVGKtZ",
  "key25": "3vukCwQiVWdpTNnj3Un96tZEcpqKMMwgNSxtbWWQxNVAZddbrNfh3AL5UdqyxqyN3FrB7T4RWfPJibKtgjzbqkBL",
  "key26": "Yn5C6EHCg1XA1bDKMYZRd9AFB6L1h1Y3TpCeVxBunUJzicSuWf5bUgMMAGJHRQUfFP1fn7yqM9jMpHTWHzSoeBb",
  "key27": "4ZJM2T3qLaqeKFQP4kyoh3drK4oBqhFMxvhpjC7d24ueNLiutDZtLM3QLqVqzgMD6MqeQ3Y1vPGyiRK4f9sDJCsb"
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
