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
    "2AodzeCLkFCggynkcuaVc7rs8XA3z9B27GioFTexdZHesBAn6KKWT22KAq7vjBBSk3XhCQ2Z1CvZuXpHi8sYv1Ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7YY3eQjxNQFiBGoFnEM7JWFRoFHfQifg9DHNiAy3RecLhbPVLkNYpJUsPFvjSz5Sq4r4Qk2k7wfyJ9XSwDLBZB",
  "key1": "3WQT3EfSDmm1HE5yKAgfrgv57sW4YWA2by3bwexLSXWPaMRnBzWbsERxtuD7eT7JyQ2JTqGd83edYNdjMw9WALST",
  "key2": "2LBhR5v8zXvyi9hCx1oxpYYsDMmfyiuWsjzQBDNnkLNWfngPjSmZTefuSUMMqZSyihxunzkFgiVBnWYdApYfasEK",
  "key3": "KoeYPHjhVufBFuhkjvkiPyY1pnMLmxnr8mTL93A2GnTarcuSbyk1uJQaYQxMDXUVnK8PJXZyMbccXSkaNSA1yKg",
  "key4": "54Yrq7qcLuzysBhXvnBsyJZLJ379nTs1yokduvuJWjTwUxzmKMYPdsafm71EmixDqMzzZ5Xcp7XB1kV7QtFt2MwK",
  "key5": "5uTg9GYhqCAKVA1Hc4jvtBTcECQtRsSZaXET6mWopfkVJHTvrsybqqs6DX9LezZkixdqMrqn9gsN8WWZo9JrqPuw",
  "key6": "26ZSceEg5zgxd8WF5zYNYWvoNpkPNWti26itCE7Yfvj19jRzsRtpBnesRj8FtmcpGxvLbwUjxgsvJVtJCuKatTcR",
  "key7": "4HpQKvGwey2PfduVnvCrgwiSZKLokBgdLYHg79M2VJpu7A3r56G62zG3nKFLhjnNMQymbabPcW69U6Ct7E1T8CjF",
  "key8": "4RJaghNXxtQ45J9jSfRQBvcPM41e2w3CymfYWY8ouvbYL4Zx4sonroQwetZjKtMB9LKwV4PQx1z7vYNU6dJT4qjB",
  "key9": "TyTHAi6HZn4ZjNPnzuTUSPLzKckr4RQb4MLsnaJ9AyG9rNutev8J8JevUiAXnZs1bM8s13spASAceDF5umnzSHY",
  "key10": "yUcKPvnrxd5dW4kFFsZv7ynGmdKyqnTAP8oCcpDdg11hTyLofLnV8PYTKGtLuQfkc2DBJxijgwtxCm6UzA1sesP",
  "key11": "3FTDX2t1ncTpvWN9ZHMwbvKq6kfQ1eWmVcyBDYFLmUdfWxnoWWKfXCMgfmfqthkCwGdpwANYbjihRT2Q2w5Gcvro",
  "key12": "37wCicUeDoXNxUXCJy6Y5UrMaHVkbKECHQRuMZsnPBhiR7SsWtunGVGmRNvFFkpZ3LZgpvNUcBUibaNQuuhTXYF3",
  "key13": "62fFkHfepkdQhm65BhosjyW8sBzZz6mKCAqt9nYKFVAZFvEt23giAmFMGyCy9GdBowm7SCg4QEb3YqkgryKSpVLg",
  "key14": "Ts9bdzCJzJXut7iUTaBKU36A3fPe3gBXYhgfRYaYjvA1QhfGAzrergFSh7PnhdNumMPiAaQBawLX7ukxf8ZKchu",
  "key15": "4eurLkDS4cJsH6yP7ypMExUnofEAUndgnFwToUJAquy4dsiZXbF5cquEeJE6k8SRQaDfyPM9y2Gs9i1SckTNbXFH",
  "key16": "3RXWhx9mVkpRNurx5nyA6F5HedafahjsyRKRitadujahhmkzCCPNSK4zUWo2cZDLU1LedZBTcJsGenyebfSEB7Ga",
  "key17": "CSW3iHEdq1GNLkrv7mwoxq7tDaguzwq1K9q1ofqjiJ2JVeVwpXa3hn5y73i2XMd2BvBMzNMVTzg3GhErAW9njN4",
  "key18": "4UJqY3PMy9U7YnFLbB2SZi9Bs1G3AA3ipW2uJcZSs6FNgWoHN6VG9JVjKF7oU3M5UNKpLdSRhJ4ysTLR8iDSs87g",
  "key19": "BfsPwdajLH6SjE1ymtBqzZV3WhxTWpWaFqGxBCvFLSoq9Ac3jcnJKUN8n1NTrLzbjUEsdZMyKQVTqyqPpx1UeRL",
  "key20": "JtwyeVfEC3tXRBPcFV9WumdqfVjjuQ8vGYhGiAQbgXEaan3FYkkLWBXzMvKroEfr3mBkr3m28h4cSegk8QVXEM2",
  "key21": "24uzMPjgjiv9vWi4uw4PR6apyyBXuuazCvebgH6vg35hRpGq7z8wL4evAtmc5NwcWK58qLZmYLpmC3Z6WZHxUfez",
  "key22": "4uvUrtGzsQiAkUvmExEYfgEtw3R7a54MxGYPgR4hpc3zNHVhoFPrEP3gH83Puk138ywERDbr2iA3buMERypNJSeK",
  "key23": "9zNpKiacPzV9GU9CvQSR54vWCfA8yNx1MpNTxxVAMbccDZgYmZcF544arenSwzuT92RuJBZXeaTmSNWqtKsG1Rr",
  "key24": "33Bi6e6gH9YhBoXLzQLRKaCW8qirXoyaKsYVQF8Z5HVcRR3ZZoMbiPuyFWQDq7cTZPgWsDqR8bZSS6GS6W1Gj52s",
  "key25": "2kd97h82v9HawMctusPA4Jb6VxowMVsbUqaLBaCXmGMS3JTEVe47yaUb2YtwvuiAyrJycmXJ9mZEARUFf44o72a7",
  "key26": "4ExTGtNTmpieFqCfrDEvmAVw8TndSi99V1KQGPtTGhdSyiuU7Y6MS5gSgq6etc5xmWpGVhn8QFjHJ6VsCrAgvZqj",
  "key27": "5Q3aHi2xZUZNxzaDQDnfo2NAQ6SHKqrqa5ozRtTbzCfvWrJfwt4aiH1Hs3A9QwzgYQVAbu3tPsgnRxvRNckG8ozg",
  "key28": "H1amNGM1EC8BmsY8g1rnRE8kginci1sxmDJ7bdUSTQEDttq8PjnsXwRYioWM5t6qMAV9dDtd2csR8E5JS1aCRNv"
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
