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
    "zufxDBFo18Lp1rDSrRpenTkG4E3rQBo1gPpmXy9sbtgiSQR3nc4ZFjssJpDzeokXdv4cg2u7DJ1DkChCExiKWpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UA2G7aJrTw9QSb8P2sXFEKdxMPNWvSJpBr8nPiJnXJ6APyja7uxBwopdvr6H3KvifLTJLM8aLzNW4jFQqEgZXfo",
  "key1": "ExSQ9bprKbVCYr3CuDUidnyYDnUnt9up4NWcohYGGRKbBtrNNbXDChURvuX7nMMkbymbDR7ebXraMW58Fm3eNoN",
  "key2": "677X7TbxbHoFkAH7bpS6KGsgPzYmzGaC2rbP17PjCXibCUDcS2njw9RJXNMacA6e4zNwYGFAjZN954m8TrwuqJaa",
  "key3": "4r6cXoFd8vkKGWByqepiMkunH1WxmKHipUP19wiuZTNnT6jLj6NZtUBk5hqjSFabCxs4th64kd8FUnudaSnUDXNx",
  "key4": "4tYTphbEXjQeGZ2swg85noWfsSbafuThZdq4g7G2EvpyPP4NepxXizzXrQs7Fay1PADJebSahpWzoGuojgubNgYg",
  "key5": "2ryKs3fSQRS3u3APaTFmRVV3RhX2LAyDQ5qzdwpHeyiMF3Zbo9teooqn5JeQwZdAV29D1TjzZ9KAt8VqtgMdBkx8",
  "key6": "4rhHcBNJhXFk1RdmwLomsD6xDeHWW3PdqgpGaQtfoGTQZHH2TwVbo2m7yFEYnStzGTq93bTbnaaQdP9QL67yBcDe",
  "key7": "5deTccDodPdggpRtSjb1XF4oskqa8S9Vky9dXUe6b7UzezQAJ8MQnPA8AzX8gRWJa21rdULhk6zTYiB1b2uL9Uvq",
  "key8": "5R42rsuVTEdgtKnVoq3Z6LGSCe2ttGTe2kFbjNvBAarWUwTtSZRgd83NsxHdqe5sq9BZD2b7pLnjQgCaonAp1rSe",
  "key9": "2ydMRqeTgquuQGwoAxBYF24ytgvAuGvGjcnHJspcyV2o3qQBQCHWtVxsrnAfVZC6X4KnHmY3j4bDPm4GzXzS8gXv",
  "key10": "3sEL5fzMJSNoERp2QcTdokp2iXNNuTWY1N2nd1KwAqyJVzdpqm54jKufcFDDyVSvcLspS5DF6fZJprdq1Tvrka5X",
  "key11": "29sJ48jxkYLwCtRfrk79LgYdL2Jra9RkK2rKmQTUS8HRWjjkeTEhFJhUsmbyFmZvA1zE8ei1QsN4p2KkHdG9gRUU",
  "key12": "2cgD2MoYoBRoZHRTx6KpJ8KTEiCY63nMk511QqLkXX3wvgmSMEz7JNWS8eECMJdteLEbnCUtqxdbmfaMoBwjnjkC",
  "key13": "5wABN7ewKA4Lw1gAqAyAjv6DL5d4S6jj91YRQ6Lh8hcUrQ5pt8r5KH1rHEUM5d5DmaXuzReyJV7X8i1Sp1w8dmV2",
  "key14": "bSoUUNei4qttXJBaDCAgsQkBgxWRn4q3V91rRTjDtjHyKnrkTeZYyb4wFqHdxRJtynUd36cNjcan6iyaMYKg834",
  "key15": "4XdmF5geEk1V5oyCSzw6kx11D75PrdjP1ko84a6bnHCqfgBsQBxDao14fN5D92CLrE8z1cdMdrkgyYALsGGjSzpR",
  "key16": "kTLKy3oCF2jGrChQC8vCs9juqPbnsfcc4JgdpbivAQtMxgXPvEHwKSY3uFgUEm2FCghaArxufwFthifmXsA1wE3",
  "key17": "5jSSD3ftFEJFBPhgS9smQxsjnFD5gWMkCSYSTs1ZJPM8vzBC5mk4NZnK1w4KdwFBX5xC8Kr9vRNauqN6MWW15cdj",
  "key18": "3kGXPntsEG1kbJomF9o2VstffyrBMekTuRjNncA5cpRFX11eJ8PDEyuqhQk8WrHEZqfE5vTrRYBbEvuAiJSuv9mU",
  "key19": "2Zq6Xm3q9gC17LxVChiqa7e9QDPYSNPRUYK72UpR7eyWKL7DdEozgtqqUTdZJFWsje9WaFe5T6iqsEHFWMXHfTaD",
  "key20": "iiJvWN48Rk9mBiPZ3ySB5BN5ShLDEBkRtZ9MxpfEBBKv5sfPetr53uDrau7QTupdQz6S5MsLb4AuFEG7SEsX9tP",
  "key21": "2QQz1jpPGHYNkrHHpmRzR1b6FhJnum4PVWc3Bjkq8i6GnfHfpmTbUkLGdzQQuAUk9pTDiSai8WFxHsvmHbKEgGpV",
  "key22": "4aiWAW5SuBfi4mxvN5D4EPpmk9k3VwUYkkctJE9e1dRmUxoQkboD7rDcJuEykxAoTCjCNfES9U27q5UoHRvjiJH3",
  "key23": "5jcTgwXQyxWjPKwhNCcbB88ELuLrKkQNdLsv82UkzT2iKhCYc7RrJrsUNrwBXnoVSgQMJv76XQMp2CRhYCdRvHsq",
  "key24": "9CMnUPs6yPdjxyX5swnpmwig7pnFzQDLMSGXmX8AsXzykgiWuVfevdVhKVPKx937vsBVpUdEh3xdHHfW3aXjrc8",
  "key25": "53N1L14uisvBQHHEuJGtqKYBLywMjBujT4WGejfcwnwmVzLnTjUNmn82BtQyVXNKPrhU5kfwvQekkmxnJ83GLCzT",
  "key26": "2keV8kqkDEQgHofryvywkHLgYGEs6BgRwWsdc8GgQunpF2YKe5a8NxcUTfFLBAjGLeYnv2C8DWMUVL5KuZQt4yGK",
  "key27": "4TYjaiCDEKwhscrWHQxtYHPbLjCirVyDxKhvvdDb1R1imPcZM8XaibxyfGqhMRBkfnyyvwpi5r6WzFpa6hWt5F6f",
  "key28": "sC4B4f1fdNhRyHwi4ndsLzwRHt1qeLfY9CkNEL9A5pTxfaDnEpH9d6EG9AfKVRKGi2YCboiH2BE25WvcU7DXcj1",
  "key29": "2EppmQXZQ3kRYUBKP9Y6YW47YXbqkUQ8bk3fs5w37SbCGeynRMBUdvzqRiuKotNxPDaUPWAypttY4XiAojxAk9ag",
  "key30": "3k3iHcQEYB1SshLmmsLSmzX7gXEjUDe5ot5wdycvzRcUM2Mpovnm1XkuZto4nHz75Bk1BT3SwV7y8VLZGZFKKxYz",
  "key31": "2Mu13hzpuBqw4jNoeFXTC4V1UdiYN5MGCH7AA3LSwrQaEQDPfStSMUHANHtBpT68SCbDZEGdfxTnWn3GJitXEDN8"
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
