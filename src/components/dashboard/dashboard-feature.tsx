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
    "4sK8qHwnH1eon5q2vnsM96iGLVkBRkueHDV4YjA2N8SV2cC7JEqvJeVMM8aVnjgKP351nct1dKngY9iMsVRLAddU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "592JPrGefJf18oDC4oVhcLQaB4Les7DnmoQtSXDQ7j5NBm9e7YXVYHRuymDh4vijvePR5zs3ydvgoaRtdfrx9rQX",
  "key1": "61P22gMptUFkF5WpJgquKnFy5MarGn4s4KYAtWmQjyiNRSYyaV4zhd8HEAxEq13onQEyUT4oNGGiUpkdGVKmGYGJ",
  "key2": "oPxFSARCQgyomY68513PPyaP88hjMXx6onAzLRUPXqJ8rBeyQJVj9Jm1mo8SuykkZXJDEEKwos6nMwW1sCmmWm2",
  "key3": "4ZwH3tGmzLpp523FTMHUyj2Gywr9Pq8T7RfVzZ5TJxtrGBzcpgyPxrWDuwHL84RFLPrarAqRUJ6oDfU6mqqHBZ6e",
  "key4": "3xAEZg5S4QrgzjC8o4ARJPVCUZqWnK9Yy7eJpP6uSDttPMbLZUWogaok2fvwfvAzEzBJRRREcfhyUshwtH1wuTKs",
  "key5": "5vXrqhvTfVgBdQYozQuFtBmvMm78Xsb7R4WhvRaqyNZAdMsqfpw4unaH9cGm58cYEm8rgcNHdPGPEa7E1Wdpaogr",
  "key6": "4hDkpyhK6322Ay7HBkp3djeBufvtNCHGrhUJqRzW1C1gDxogfdmNNBjEdynTU1d3r7rTbn64xqA31MJ2rWqietNn",
  "key7": "3bGLGyAoy1QBtsZ1VeTn9CreUeSmA6Krg3Yp9oXuoWnEHZr8dm4U1tF5KYKbtHC2oWJpY3QwcZSXZdwoqyEHbu8M",
  "key8": "D5m3hhTppMwRABzFDJUPhzu5y8h6r73dALwQKpEMtkZWXBDjobt9u5SkUgoyq7bHLVhYnxhscJXu2XfkfqVvUMy",
  "key9": "3FnXano6nQxfJxMtLHREjMifrkaP6LQXSKtGqAYpJZBCkmwPrQjqLTrh6QTdooy5kDUPo2bvH2ABhkELuRAqtZ9B",
  "key10": "URcwZa2gkNct35o7or8ifttQjBtERZmpRVAxCg9BWv7GHxVNQppKzZzQmx2acxkvDzGrTo7zAm8HfN5n43okeMF",
  "key11": "49umdFjFgzm9ooYdyQDNyGFYbnzR7vhdDHCdt85qtWT7F5njTxr5yuiMnPYPkLVNos5EenhWrNVxYbc6cutRmsTd",
  "key12": "5RCYEBjnbX1FQC7ENXvaq75hbjz7aENQ6UXTAFFCVsdZkcuQTRCKW85J71DjdqJFQ4F4rfXmbX6beQciCEbxUwNA",
  "key13": "GaxppggquTMgf3YPZyaKsPaANhHaYwQKsDTEF68oeuraU2QJgTmB4XxsqtfX3nsbJ44kF85EnVn1CNFv8bDa53n",
  "key14": "5dfwaMUEqCVmKKMXr69jjnhy7bfNfonaiu8mFCdzgbJfJ7iJVmf6NCrokgtLLEwXgQRffh4QPGAgjsiA3kfwYjtj",
  "key15": "RKRNPA3sqM8TcbdiDJk2EaGZiWr9ruKiVmcwpTXfdqujQW5JF278iJQUJx1FwPxzG6UVrTjXnN1Mxzvf1qUYHHB",
  "key16": "2aFqCFZaJuX5eQYnTtXpXgindWihjrdUAQzsdWNRun262Y7jesn6qx9GkihhH2SG27bGsLw6xZSjx5w8ZqzH7y5y",
  "key17": "NmL6JwQ7i1A3HVyBYZ95Uw31EDjrUwkLj8PtBV5KnoJfYTYAAajPrmm42yd86AttWUAGY8nCUGELBASPub5Uv3F",
  "key18": "PAkPi1PgHo4NfGPcsRLN4yEt3Ef9qtSYhB7PQF3GtgK55Yefo7iRQfCgjAtCwqqCTmUZQRvCu5k8BNf9TqYxXHs",
  "key19": "t9fqBLsL4qd7zaC6Qgw3jAWdc3vGAYn7HayyBqEUWyMkNNvT2CMyfEnYerc94G87jf1AdYw6EL57NYpRZKoQgDo",
  "key20": "5YvLk2QafUsB3GRLBNg5WqaqrJVvXANVPunrXfMh4WpS7AjFgs4zrBLU45YK4BiKso3uhqG9NEN7ZuzUnvhdCM7d",
  "key21": "oyUrew8vaeySe32JD9qjgFquH6YctXsZknim96QYXSW3LdRmFC1yUbikSeHE7ZCgayz8QhtmM66cepzVT2kSaUX",
  "key22": "2VrtJVpenMqWwdYDjiJqo8AquyssFwqdut6mw7C3KJrfyRuypV7L56pzT38soSV3mPQvj1wkUu3gGWKZzGvmescs",
  "key23": "2d8nqXWZD9TKPBVhdU8dt7LhXvfiiLqeQwYxX8Kdyf7Tm3xTukBUTv5f78C8YJnuQhMwzdm6iiAfQpVmSE9AXXkF",
  "key24": "2VzUQLWKs5fyFJgNwgEgFksoWzrhSrgjDM4Acp5ad3bPc3DN8nGs6jEijeBshJeMUh644pctwqnF2BUxWFo1NRt4",
  "key25": "5biZhEfjAaZgkPRAbLF1XQ96TxkZvY1Q8SjqqZgHXvV5qvR1KDFJbqCobcDx1qkRdcEpSDv1tfqBU6m8TWjAN1P2",
  "key26": "5u2S4yKRQudY7AWMajL3D9cYdTYP5Ro6mYKpcnNEyRMD1KcDckgKxY4bB6UzTtJufCLiSCRbRiJNk9g42dhQMb2q",
  "key27": "7xmq4nZHkTgM6Wn27FN6KhYg7dgc24gY32cFZBLMYdTgzvWoUEavzMEZQbkxeXU7VM9Aix6SgTc677rW6yoxAhQ",
  "key28": "5Gh5vQi3MUGNAzsekhjTXw3PKnZcGJRczVNZm4YHp5RMtFiFFA99wPPVjhxWr49tpUEUfUjfWNpYmQGj6EpqTXgx",
  "key29": "4Tm4DzaasYmWGhZPLMcrSRSkwBJaNwvK8JdBhK2VRmWPrHHqKQ2g8fDfsPXyBbzVA1bVFybAP2taQTqW5tVgWrnX",
  "key30": "9SvqeH3Jy9rTVqA8ts5V3Vq4nuVQx1NK6SSTCNDn48d4QZB1eGPf9zrfQjxAVJUofroXz24xoMPZpFqXtjrub13"
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
