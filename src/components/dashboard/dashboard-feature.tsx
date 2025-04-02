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
    "2baj3DSSsfw2HAdyhqkx8JCfCv9fojDXcp9oqpB7JuhbhNk63d6bPrymWrFTndE9Yc4HyALShNEvurwK3Dvt1BJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DWrKdSHuPHcDBNcPGmfW27fFPB1u4akHTiEa8RfNKd4UjQ1TkvrkreEH2CFm1YJtvCeZqgfNA3RonJFsoEtE2Xp",
  "key1": "45n8gQQtY6GrtTtPsKeAY6uYaC3q5HQq8dAHyAZ4JEekUTd2FkiCtXoCaewGPpJTGorXpLPEk6qbjdYNwfQjr8cY",
  "key2": "5CaKcaEz58GUDSSfx2Qn5YUeBWiWuDn8wp54HYDhaoH3znmW9eJzB4NMMeyNQA9mhhPqLXDDnz4gyneJkigG2wjY",
  "key3": "5chUea9fkdMoSTXBzLG1jbKamJqHUMAbRz62QUZgy56mbHVGBvsGpbxsPJ1wkDon867XJzjRG2ZNLd1zzkLxGbDC",
  "key4": "vGDKwBkT98GE42aHwjuW6wQhezzzkCyJJR92mnBpfLwXUxofDoWG1LEzc7Qk9V1Svk3f5WRns2UoyMURVVdwHrt",
  "key5": "359nzNfeAvj4e6K5BDtTqwNG2FUQr8h13suJ2C1HpkdaP6TyVFLJD7pHeLktSBx1KNyhxMKT1yjDPGLvKiJ2npY7",
  "key6": "aeQmaKGu3xSopUG7o8BzM56c91FtaM79SXPaTxpF8er4GmHtvwbdRtEeAv7qJYrtqNZFadithBgyHKbmYpDTsju",
  "key7": "4WUbjm6S2g3NHNCPDj7zh1qr97MWx6aUjqhhCfYUhdbFgXPv7772tMAwRAtFVcFYQhx9jxiH9QQFqSNr3fKBXue7",
  "key8": "2rABf8ZMS6pzwUvxKTXogwzhn1kG27JKQZ7zUGWdDxCvCa48NSjjc2vLH2mvt5RsSA9DxrtxKmmUiYEKDzhNS3bW",
  "key9": "3sBJD5RDJKCL1vxfrYBPoTVC5XhVPnTgt8zNMqnwHoi3FjLpC4gt9Q9D1BVdhg8xz9Jx37Tv1vrPRhFftfXGvwij",
  "key10": "522srcNz2xFWWpuEHpFjgyVVJq5fcVEx5tUEY8MQBAvzvDBSaZ43Xhv54y18z59hU8yuLmiFDupajEr5B3u38PoJ",
  "key11": "2jMDGYzVmVUMcDzB36yZgQum37L3kXfCRKM4CJXoY6pzcRaqgnPdVfa3rZQNja6jnSK8d1ys5cV8U86qMgebQ6vw",
  "key12": "XNgZVr6LsvwxK4TD2HERvPZPYAUytvfyKf4xLm7C3DS5iFu2suXXn61Cvc5vmEfi1GKzEyXAv5EkfPMwQLo2bY4",
  "key13": "3R6TBx1kx6rxYSbSvYbVDcdsKQhP8CnrQ1qcThUpdmdfuBoS2hoXffmrr7L3VYnEKESh3SkVLi4CGiTMqCKUwzUB",
  "key14": "3NTgnc2HF95AJsBHqpYzfc7o4HbGoAJzj3huHM2QSe51CKJyELmriQAbipnQjPq4ukZVbeX9YRk956fXMLjpz5Hy",
  "key15": "5ouzyLUBKpwZK8D5xZ9PPSAZLT86dxrB8x83niJjzmbBEwEMvnKHVCcpYdVB6z6eBrEgRZr9AKDN9JQTCdwkCJjE",
  "key16": "5eoU7gxGbuCNcjnQvCVorE1Axf7xMPgMZ9hTvrBXB1HqztynbceKQyVZNUPuUnbRXT34uXcruyadXEZjm4wPX4p",
  "key17": "4vpQyVXPuDYNYVxqCcwRNXf6pLJXN8oYWWf5wArj9d3wtM8Q3374CMN2C2wHDH1ns8564kTTDecoX3Udzz287PAi",
  "key18": "5HQwe3XjxR7ko2bcfrhUkhj4o3gZFuPP1XhFGbLZGSRPo3bz5oyQasGrQLrAYUCWQtJvBnez47V3sorpqUwSC3qn",
  "key19": "YrhzDywvkEg8Mb3QCbkMAexsXWWGqiKL5D1QwajVWXt2HJM3nWDqbT2LyATMB8owbumiDjd5XrFP2AtwBRbfyNz",
  "key20": "vMuN8RCFfWkgbu1zKcsauMQFKzHeFeiguXn3ED8cMqFxr5FMMn3wSYSK77h3n78ZMf2XbhFBLRqrML25pTjSJeX",
  "key21": "2kDtyXpBVKBMRvgbEEoL4C8YPbrR7hnidvXZmy3Vm8Fc3v2WJBUaYK4o9CV7ztFZGigjsaC2TXzKUL1LwCUZAw2Y",
  "key22": "iLnzHEx8F9pXN9oWJAJv7C5Kone9twTQ5vLaruzGDvf4BBY8PzhFZFpfSynUa9dJR2QLyYPhWB7w8sjEQtWV88R",
  "key23": "4NRMpKEahvEvsUL22HgxSRCZWvcKTD9ZGZMUbNkGRtkgUWCzXBaPpqnQ9MkZZu95czF2YvLdeXSBaFu3mmyQvPNd",
  "key24": "5xhDJBC6w6nQXZaPbciLdLn7BiNuLPYR8cr7CWPKshkAfbgUUJSCG3GyDSvjW6XGm3jsooG4br4RCsL6w4dEjWUK",
  "key25": "3yKv3BXZTNNSg5ZwVUR43ZZRaWF77C45HPJRjCcCipQiS9mZXfPbMmG2heeYB6ybpesvfYRyGPLeXnRbYj9TyFzN",
  "key26": "5G6NeRs6uP4BPV1UShFF5TbTEWPd8tKDtdXa65it1bKc9UePf83FnTn8kHqYCqo8XNEKWSrrcgfnoTg6ECvacZuA",
  "key27": "2fEwxf4Aepy7JQMpDp2VKTPda6RVZ6SCMKGdqNvsatdyy9U93UruZn2EZxKjrCarThqyk9y14uSo9R1aAWivmuHU",
  "key28": "3aXY3tHQGh3HP8eUdfhcjTbfRPZ8LoNW4mh782GxAVoQzL23vPf994N8iaTuGbQ5GAEdpqhYkSioiJGgCaDzDZUq"
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
