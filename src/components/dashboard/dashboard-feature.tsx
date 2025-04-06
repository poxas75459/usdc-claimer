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
    "2Ly5A3fjBteg9p59jKok1T2EA2uRLZhFnMRHqDob1hnzKoRCv7j1xDxwvFqPd7wAY8ouK25nVg4724PVMog2WjwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38k4d6C8auFKADwgsjM1RvNEzpY9ucyh2VxqxHBeX8Ubqc4CJGyy4KV5PpVj8Z9vh3NmgZr2mrgq78x3ZRyvqR9X",
  "key1": "48q9WWa57EB81bhzAiqosnmZLdMZjZNsNcmd3cinMjxnHqH88YmCyYdeGPu4sPBaYGCk82jaojmpxHj6kstQsfjw",
  "key2": "4cvCygM2AU5QozGoWZoWMCVEKYW4Q5CTGXEXDFhZq4SKnWzywBdSa8uCabVfhGwm4SCFjvQ5ci2Ji4z4f4P9jwdj",
  "key3": "3YjpEbA9Bnn1BBeF9FSzPP3dzpEukmRccE4EtQ2iVcYonwAajTF5D6xgtysk2UV2RZVTdJgXE8J19TUbpcoAcMCn",
  "key4": "4yxzVcHM9cj4dwVZP22EBzAogfV1BVm1jjxoLqfSqkrdsHwwq7yfNTiSX1Tm71m7aK9fEwpivAaap9NvAQzRXiid",
  "key5": "1JQ26ZBF3T5zz7KZk8XtMFYAwhv5NpG9duzoG9Vb9UPUWfPxWx5qGzFLNLbAB4MXbz8pJeDqSG7EnRjUBTFYx8J",
  "key6": "2nNJx39ke21jgYDWev2FaNCHvC8A1Mx2kwVL4m3Hrtu5tD2gHZBNL7rGXx1xP4fG8icmizEHSGtSZvknnUhdoGS4",
  "key7": "4sgPTKaMTgtjRBDB7u2PAPmm5h4TekkzbapGfb1skSEg1pKNgEVB2eEyMD1uHZaDF7SvfnGFXD5voJYxRx3BixFA",
  "key8": "bjA91nRPz2aVLbK6re2MopKxZjsULVWGKHjU2UgDjLa5btUhed7cY3EwqM75Q391TB3DWKCD2qqxrpwuoVL5cM7",
  "key9": "5G89Rmr566SJhNb9Ck2NgzBTQ5h4UbQHXK6r9zy6AJKpJPgAuEez1bzeMndCmRFbiCbX8ByMpuu9aorFnQwv5htV",
  "key10": "4jvyUaMtfYZew9s9he9vnya9bcibkBGuKD2B4V7LyRphziw4NZXK7cgnihWL8ss9oTopQFnq3eYymtTaJiibnovL",
  "key11": "4mkPk3NU1pXQMJcs5aqTc1rRNXQHzQw5ntuJ9cFfUMmoFf7zjdgqqMvsT8WLfKcjFrtiwhjdGXPn1BTrQ3KLUcgd",
  "key12": "29tapgzHDBwbXwEjxp37nbv9pxqKsGZ3e3muqSjZA9RsApyibXV5Bu3nkPxR9wVQUCXbwvRSrvQi1uixjRxT2xaw",
  "key13": "4ivBkk6PwwaRTjSEeZxxxHppgUbsw5uPxULVWiSLERAqeMbd8FXjNe9EkzwHmUc8yASpLLQ9yCvqD9vUFpx1HqvN",
  "key14": "4QbAp6gsK4z7u5Pvz7LMb7LuRHLMbcxLuY55PMBu7H47yskMnbecfiQkPvWrPhiExgtQebDoVEa4MgevXmFbMEwJ",
  "key15": "TeDCzSJEg4ejXtY5gWnotwQXPp5sYN89dBa36RCtobLnk3gEyt4WHzP9WdhkUPB5kbDnHZWrEwVpa5NwxXGukab",
  "key16": "EKZKaywJRFncFe6LkmUdcUjGCJG1dmFjJgu4gmQKZLL7XTdgeSEZjGqLg9dE3TTWuxkjyMbwNbDse6EzKrVMpTu",
  "key17": "2MzcZRKfzrkGWR9GGPv15w93PJcLpdouhD6MvuErokfBX2RKEQyhDDW84AHPa4Yd3y9XYCgxrMuUenR5KnJZoRZx",
  "key18": "5fw4f4Xbc8A9hYLc2hwreiimr38zabyFzBAhPhee1sHfRw9zrYDUzNUrgUi2vfHokxxV8Dcoi9aiTWUmz9ebi1yJ",
  "key19": "3i9cTXqgzriMGQXtACGpYwpKBPzsDZmp2KsiKRPzWYobki5B7Wfb6iEgcyUE5A27qd3qasQtBxbiA517VM4Hnag7",
  "key20": "4EuF2AXqgTe64azVtUfYWQSYTZDLparXBSdDmVaKgBmfJEr66MTmfLCbXsX4dwPJdK3QSWkxUNigLD2BaD88AFWH",
  "key21": "ZEBrjEdm2hjGDC3Kaxyi4qpsdXvq89DSjw5sU5gBNWrJbv6XJrd6BWTnfyZf2fQdZXNzVsy1twLpfAptgSgeNBD",
  "key22": "2Rsd7VbB7fAi7w5YuvT6SdycoedCykLGzGxpz4EC1jf1ZxRzA82BJ68T1cvceiKWWaodUsk4inhStQUos5XQw4rJ",
  "key23": "3w9HJArZu2rvauB6k97Z8oih4LshCR9r5Y7BVehbFVhVKTgBG6Y389DcmPREBAZUJ2B9PYrVpHZgSoWGtJJvm3oT",
  "key24": "msNXiPG537N9uZsSwF3xEcFxnxNbu3wXL7ToYRvtWMipY88aYAFJVfJUgMjEyNTTDSjJm13JEWMkKxnfoPbJdRQ",
  "key25": "5mxFkJPapTU96YURndKfZp7yEdRAg1pydx34nwN6trt1vMWQmBFCuJPwFVv7BdxiN7qeDMpA28mjhJU82UbyjBHa",
  "key26": "251bubsMskTEkPayXjg3AVsue4HiwynrQqczF9xvZDeR1xBoqguXwLS24Z8ELgVVVyXBJvLfHFyr16c9AfkDaocw",
  "key27": "3AzEsSCFGhvvY8bdauj7MGXSUgcaDTE3qRRZzdtDMLnjFguCoCZ5yWqUWqjfnTqUAWsW2tbAgK5zc3PXQnsK5rcc"
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
