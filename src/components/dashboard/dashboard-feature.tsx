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
    "5amUmwjhvUeDN6da7u9Yrq7oH1LaxwGx6V2xMv7B8ZUMRmL9GCZS935hGTu2NAYVi1Pbkbv7JNCN1wHBQSxmMz4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gEURQU9XDpqudqbS3gShNmtdytHzLceX1umFw6pJkProHfbha4bur25HTqV2ZDjw1GgpV1EkQr4vxYpRDkZkCwk",
  "key1": "Mu6zXG2LxMrNN1kQBaFJYbUfoCjGYoNYhqAh9tWiphGYPMHZbC5KnDGpBLcT7yAWsMSUVTarhkgSAvutnVRZq34",
  "key2": "3ZrXQ3d5DwGBQrJjr9rstsS5AoTmZUZaLouB9jPoyTHYv2RaTn48TeYdeScd5JWn5q9ijf8iFH72jpqBfWyUcupu",
  "key3": "3VH51qwaFQwQUSd4MFs9tX4KTtNXm44YnCz9cYtCMqCVYjUcnnFY425PrUy7uYwmZshr1BrAVNJpoie8T2hBJFY2",
  "key4": "2zTjkpqbauBD1LsRfw2jaqpnnYWAGd4As1udJqXpPf9XTxD9mFbWxyYvvjbtT3srZ7Vscx34DhYSLS8Pa4MD8jMU",
  "key5": "2uRfjiicN4D2qbSgPeN3SZuzJC8V2xh8zbQGtX4Xp1N4hC5PcX8HfpwMjAypYiUVFJ1uFg9zfQxcvXgvw8HmcXG3",
  "key6": "58BpAnXLM9ch4cykf74W8K7mG6dVyLJyRVFMocbm1yPTauVJWejYkw5QgNBbf4Zf9XMKTRaQMm8JSC6beNBKT2AT",
  "key7": "5L4QcmWi3B85RPsYKN1YjMuaazT7rQMa7rx3b2SmQLAssPMqCg5k1josgmXufZe7mvCPFeXPjsteixmVaDVN3DVY",
  "key8": "56E1hGEPzAKLRVuDuNyHN9CV8w7UUfAjVUNAqZKSPxPLwejigyVhrBhzuK6KwBtCrySAkrYXLNCQiMXcdCspKQoZ",
  "key9": "2XpykMweBDXdBaaq41QYHTJvaT76TXQ8ZhdVYjtA6Fd41WcrR1URfT7TijjDmXyaz2TEN8RuVBWs27oLrFN3835X",
  "key10": "2fLrAtzHbfyHTtHjEGLJrvzSrYznCq8oWNR6eNwRqTDM2ZEKW7fG6XXVLMtjeixY5eLjZr1iZttUnpZ7zAtHwtQo",
  "key11": "omxs4qjmK25zsM3KFgokDzbfwrdpfZT3WBpWiBBsN8MvgXoBxyqWCBAizrjXdZtBcyDtKmpCndQgcgmYKQpHoBQ",
  "key12": "5UAr3WPAJq7tS6w3wf6DBFDx66YRntUGU9pkUzPhgwGaUVdQMPNRafHC4RJHBjVS4o4WdEsthg5FLoXhYGwVtto",
  "key13": "4NKy1czhmEvwTqMHj3hhFmc2EoFi9aAEDdeCimttwpJFVUYCKt35wtRoDcU7KaLgXt3rxfrxAohieU6wEvUNrvEX",
  "key14": "3tLymaByVTeu1AGBnV92eh4UmVAL2YdCV525gRX4RZNyHZxWWVycRUbKGaTj2eefPxpGg2MvnXcJG4dgyntrAAbN",
  "key15": "piv1xFEt9WCToH4LYxTXwYRT3krnyLRK2MrvKzwTC9GSvLzdHziJxrCKSgFpo7rjP1QhtiVHSms9cW7na6YQwuS",
  "key16": "tLsSBnSahZkxpv56swg1LP5sSrQ4tbrw1UcgZqNsqJsU2nATBwTt8uaQXdXaCSTrNJdtoqZQJMehzafxrUtPnjZ",
  "key17": "n4F7Hs53JVdefTp3PDspzQgBcDxcnStAc3tFhafZfkFc3YkRs9EKDBpnWHT5AgdDLAGfjTe9JVRsf34pqfoihr7",
  "key18": "xDJ63w23PTJ72XqrAj9mCeyiggoNaQFVhTudyG7mGnoMpqMCALoTucb6mV761QPWCfH6u73syZEQVv4BhMdyrV5",
  "key19": "5sKAXJ1Cvn8Y4LaxJDV5iJtbnoe1bYrpmtqcxFKYjvG6mLGHevJjgz9YoP2texRBfGnZLcS3Eie7JKPgFQuzNqXJ",
  "key20": "HLwiu4iP9iVzW4ykbGBeJsuGNQwu8xXN5ebvTBiqdPWigbLxnHec47aY1mkxmYJ4yuS1rHpbp5aPyYDBsPo9PA7",
  "key21": "5NQz83adejRhUMsZhz2BXTEriLUWaPUkSVAoywkGFXE19R4TJKdB7rXaetsCdw7XrSG2vHBdH3WC6FWM6AA3FCda",
  "key22": "3V4FkCm14FjLTMdwC8HwnXjBobmnA6hfBfdhUFTHyqKCMvoX6LPzgL6Y6KZ2Fchv8QRQzHNv7YRugjE9sjCGwweS",
  "key23": "3A4hCk1U5i58TdqBum7pRkGKHGA7jz5fmLXanq9j4xwdheKTAXwV5GUsXzjbVWoaeCqcjeaAxQFJhrhqDHsjGeTh",
  "key24": "3xdxShz1cUstdHkB7jf2v9g1PcSsnBRLV2oBxseLWSVigsifXGakxtqLVwusb3KboP3ra1h2FPVRiBKx5va3Rh2L",
  "key25": "4YcT4EntWPMBrECdR9Tdicks11PY9TQG9BJbVB2GP9qkTjTfcWVv3nJssPntyq1nrr7sxK4PW1XA2A9Vpo2MyQDW",
  "key26": "4vVDAGsZuQXwwXvUSgdCrY8MNKH7GoUYTyH5FwsH2rEMJ37sQCwBxrvUmcnc2bQ5kfrisw2gCEBD9a8gC2aVYA28",
  "key27": "3g2Qmy31xDVvqPCKMUykMreBNcPrANZk3hGUPASeeuUqexGGLFaXe6utq3n1RipAbtcvx8WvrRCDdVwJpwh2sgRV",
  "key28": "42wtd3UbFQtwCTVLoEJeU4CUUjmjr8cXsFtdLAcfTJBCGA8YwbPuoKEBRCsvCEGe9w4gAYRDCpTviBW13yDx8ao6",
  "key29": "5DSMH1cevDNt8cCd2iUSDNz4CY5n4uPqXsA8BBRe8AR2yNN3YWqufFnb5dvDbwtGhho3Ewa29d5jhT4Coc2fkTLZ",
  "key30": "2yJqxQvix2GEEjCKw32hdmoHwQVMdCTAu4wNvyvcM2PnKevmusgrkUTJyhc43ufT1a1LWrqranti13GfgfAvKj6y",
  "key31": "4X5jd9BLX2mDW2Qcw6zVjfxvmw2x5wzY2Daf5QDi5S81Y9LzQaXuaaHTohk772BofBLubCbTKSR8v9zKdD9deeHa",
  "key32": "3vatP4N5vG2ococULHwnFcafG1YFj4gQHBCRiuiT3NQysUpjp3JfQNseaxEYpBYi2md5YM7HxjqhzXw26MxiyU1b",
  "key33": "49zbEXRsQZitvoaZuWUpvrTV8nHC7piVRgZqKDkMWsEFBi6qLGER8vMKmNYJtUP1oG5JEFQY6dQbBSi9XPEgsvE1"
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
