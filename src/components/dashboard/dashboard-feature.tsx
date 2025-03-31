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
    "449ATZaAdQkA7AXyFzNZ38ZtPzQHhnuMxAqYuXX7QgSJQxt1czAb4MVB9THMdRGbpP9CRcThrZUmSVgAVVaYaFGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ztbMECAabMgrpWrdagd9X8kFXUUiD7qUxDtvkwxvNpZUcvTh8ocrNvFiSEXRaWiLbBYXjYCSVQEafm7hmgaqoAb",
  "key1": "3KsjzFN7Q5jSuAdGkim4TTroo67d3bVMvkFmqCQ8Rs32M18EjzhLJxHbwG4vv3dKPm3mz76q9jaPWE6wtjXkyhtv",
  "key2": "4fAzDTnprJUka8o4UQf32KcUSauJeQsBjyeoPnXXgZaMk3AX1H2ZfKnzdFUJFzEJbvaQSQ663VPdkACUydv7kNrr",
  "key3": "WYN8sm8yCXLiLiSRxgLvzbi2SFf6z3GVmXTXs5LM2qcg7cqaXPdiJKSWMExBn5QjbtMqze3S3fRqPdmWTdxFDKS",
  "key4": "6wLZWCCBmpE4v8tZzCEaVw47rDDYfzcwMrVGBry6unWUhpZS8GMiWhWT6nEw9Z6UkdpWk3eBFasRfNuXRuR9tWD",
  "key5": "6s7EMx6d4EKXqJphJiT4Eq7Z9fidy3ck4bJQcX1pSNM2EQq1rvBeLYskon4FegwsjwRqzF9XhJuP94esWkzpUeh",
  "key6": "48338FEnAfWAU2scBtc4e8JAbP51uvr637Ubzrx6h53UeCM15SnZgY8uzzohLjn9GWiyxJW7PLVZ5fGafixbmfVt",
  "key7": "4VfzggE3DRBUR87BFdyaLZH9aNUMgNAFyaZnHdH1HrXxVCiQd3xpzdBR1R4Ga6xZ4MkJt2DFDthjzrMoCAtsjfnC",
  "key8": "35PXnpv9NqUU17fbuFWdsmTSpA1aA2ZxnyWEco7SEfDkN8LzyADsoxZVCW4eR9i7pLhhGcJqWTDWEpNPoWsR9DNd",
  "key9": "UWiMGFmXW1L28WQFUNyzjNbA8NoJsuvnYVdj9ZpUV9h6oeW9jG4YxtE5kXAYbTs3JPGBKgmHAtzywPkA4A9w6zT",
  "key10": "332wuNkKLNCSFqvaZS28oGzDaSkqL8c9dxNmoyejBCURGRYSEzCQ9dJRaoFiWCBbJjm8vnzgpWTNLnuCZJNEEET6",
  "key11": "2yVgwHbHwsJhJ6LoK9pSgLWnkNNLPuF1UNLq6VCAjxHrzH6QMyaTY9ESq5UBzAiFsYVHJbNCRdVcu4RgAVq16dAG",
  "key12": "rv65D3g8J5njJa4eEQ2aBMo8v3WhoKgzqzCChQGs9p8f8s2feVrhWihRkrKgqdEUyprT7gTyckwfiRSp8PWscxL",
  "key13": "3dFGpztWohmSKEcirLTKo1bqKcXL1fR8HTweY73UhtXYxo933dGJrk6fnTt8NQknSZibRnXLKFc8M8U4Xxgwm68b",
  "key14": "Ry8YqUa1xzZ6XfQQjZprErC246UDgAKWhuyJBc5rHheCYJiQkjiC83QErsaufuvgcuNU4hpd1zY6jutSusz93Lr",
  "key15": "4FHGi96XeVU8QLM6TjaxTxQJJKWjwFsMGwSDW4eitSN6Dz9mHAEUQB8qnwmwrZQThSick4SS5cRsTSkvJiwZt16F",
  "key16": "5gGKALdx8SD7VhLTmg286wJotjWz7wVHanou8tNfRBNK949N3zQXUgMAZoBk8za1aurJCSPCPKdCeSEB8k1gYgEK",
  "key17": "XRtdaNpf3B1pguFmHqbyDsMP5TfDuKYHkfdFp45jKNNouEqkG2mVYE7g7z2Ka48v1SdoxPTS39evXavgAYGwLV8",
  "key18": "63dnD8G31YXdAFLVdFkcZ4aMNUDXpjurN9ES2sLHzcC9nFD6tmChf6Zj8V1JuuzuopXbjQqzgCbYWEZ2S165qtRg",
  "key19": "2fiUAzWBUZTumrktKK5Sdiamp2DqotjQhxo4mD1UyQ96ioJc5S2X2mdkg2Ra9mxe3yHKXERxEFkinTd3XrNmVsjM",
  "key20": "DWARiS4KY5kp5SkctcCqXfi2aft95HdeQxvv9bNqVguxGBJoEQXJGYxqdaNcf9d4W8Pb2jJbS7DyvP8p7jBQoDe",
  "key21": "5VS5V3nBUZAaPXNT8WeKY6ktuLQSnJzyy163S2w5Cz8ZyXCyacS1sx9WwsVvgfKse7CHSdYASGb1MLKV93kxsXwy",
  "key22": "129N1zxqEBV4kyGCd6k2GcKtoB68mZnierwJ8EesSFP9y9k68BrFY6MgWfwFAXZPFf31A9kZkBQtLjzAbrq6Mdo",
  "key23": "2px8LMjckJywvCaeHyxWHbHBHc5CkyKxAaY4GQgTahrsdeEQKuGwBUX48UNrLRGZpXteKWonz4ZbUFWfX3M9GpRK",
  "key24": "5YwDqxpJjEKLppC2LtCLojdesC4vbLJ9Sw7tMRJK8vTjNU9TPZRJebDY8114FRiKJWM6ChdPpMwEu7qDNFAwihLt",
  "key25": "2wpQyK76ZwzCDM95LBEjAZ6FMhunZoroUbHgus7BKp2RWK3pc764dDmi8PZa3tmjQoNqicSQSp6Rbbo4JiwBEYia",
  "key26": "bwf1Lc9GpuuPqTLUoDwJdCxRbDs9aXtKJi5g6qbyjz2SVjZGyE1nfPiaonSUX6NhHtR8B4bzNfCcL3f5adtpAGu",
  "key27": "2zFKXP5tnLPyg4CF27MW8FrBLkjCPFEiiKvU89bVdaQxh8uUnc55Ge7RkZZndJ3ma4TnTpFMbfMzVay3bt7Gz9rk",
  "key28": "FWGAgz7oSvGvxMoM5AiWPHkpLCRssWkaTFBGhMHXWVpYFsf1VNRZ4RTLYUGLsvKmBDuRy6fKaT47XHDqALNdZnj",
  "key29": "5GQUCUFrETZ4kDUZXNkwCXjUUgaEzg8LKb7jTAZbYxnaB8WfzRPvhs8SziqiggEHrz6eV5PTyNcDaE7KT4AaAYgp",
  "key30": "3no1wp2x2jxmQZPW7YecFwYP9W2nfQoHUrKtiLqvwRw5LR6sittAgMdEahbR7cpTA4sQUn5YB6KLoPpHLvYPTSRy"
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
