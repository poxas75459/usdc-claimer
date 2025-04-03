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
    "c4QpWaHkvdrfzdZD3nEAtUqPe9CnMi5yhqkf2KhzaKYvxTPykhv3uWyHyduhd8rWFSNzhtoaGvnADmpXuNJ1Zdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HWeorWvbSK9VgcmyJdb35a4bdsDp8XDjWa852KJQwHxxCvE1AnxVhWTRGzheNLPC3WZGtMoW5bXWvRcy19kepW4",
  "key1": "myFLgDRWP76EcV6zKBUPFVjVNw1iTG5s5V83CGqaa7WMazp696w2WzEg2QjCY2VormJbfqUUPybWdGeLQzvwMki",
  "key2": "2Dj1yyh35znKiDcudxXrBW8vdGyz6QmGsUzduKtmQmv4VJrv7B6h4rNNXMt3PUNzPxybDfN1AxpqbLBv6BuY1ckD",
  "key3": "5CVLHbsyiS94mKyT2yAqmPJFSw8StJttsFRU4gyBkGYaCnW1qecXs6fthhixYjumqb5gLnVeVjzWkhZYC4UpSRYq",
  "key4": "3YAgPdSm4XWXbKRv4UQz5yGTojydxuZnbqGBSgYhgSdjenPkKuutgBhUi9QxAFAJBhqhdGedXoEcnxsR6ohJAhV1",
  "key5": "4zY5oJFvrV6EDVciehfJ4q8vzwgm7JVSRwKtuimw3RLw2utVZi8tjkY1U89jxvnhmLLCGnvpi5cnS3QPtumTxcVB",
  "key6": "6119fX3yrduQV2JDTi3qAfjuuWD8ue1Tnfxs869pVNswcFw3CT5DzVVdq4RS847nFRmCfMsmxpVtsSaNATrnxtUt",
  "key7": "2QCFC3GzKxcv34hbNS8JMCg1w4ZQUuF1J4xwPHFBPvh6GyooNRRJey6oVbG9Upqe3PZvhMwZw4AXVNstziWuK5Ur",
  "key8": "5XVXMMJkQc6EHG6hNqGbkgxE5oy64Me9gNvfkpNCMhy2dY2ZkAHqaqwfiGJLN98GwfmTgomaEc2hw4LBDa6Kpbjj",
  "key9": "2hEhwR7SUnKbiCkkvjkzj5uW4dkRQZpD4eeXvmfi9kxB5WXNnkCgYreGfutXfw6f6ESLi6qsQK57Zh4GM6MmPk9x",
  "key10": "91HKUksuS5oUerdMkUuvfGPefYGc92rSZibsXaAfKGcaVR9sm2b6baccPzCcv9DkW8CsgD4GoJGMGaGijDVTTKa",
  "key11": "RTXTB2EKeW9KRknoHSWvjicZhwCToA2D1LWEoVMovCeEm5GZhjERS195zG4Zcm7LLuoi9bUWTs7RgHcF3KEbYLM",
  "key12": "4eTd7bG2eHkAh8rezb2zh7Y5nwaMTEK7wJpFFS8VyoerXXHwpBcqUVuPJtFjLaQKfBZSbwdUZn4Nav3ZioN9Z3wu",
  "key13": "4KmJvSp4qWMPUHZZkATWJDFauR6NggJPuNKSDB2N32CM2XY6FCWE1X5n1GyZFNYR9fR32hzRQUe2CBXggP7WWtJQ",
  "key14": "Ji9hX74WTrTJAYok8dSyQozoKivTVPj3De14JteMwfim9pmsYK8rcL6tnmAxd3M9hm6vUHY5QauGNufyZn11kWo",
  "key15": "3vYvkWhQPaXJhTfExZTsSba55Y5VYQVm69Dxt7YSoch3yAC4yhmSgqBEEP5UgCfeJugXqcV7R3Sqp31pBL1wv9rG",
  "key16": "5ydDxzBSNko7VK9idNrXoZtcN4U1cCuxmhxX5A762Kk3Ueh1FpMdzhoz5QWxBijMWdqkBJtpnAc6KgL5rozJtHQ5",
  "key17": "3e5rnjyLXQVwG3AeynciuK5wkGJqQ7961iJEsTG3EkkQDz9rp7jxtC9tGbXLZ35Ed3v1oeREaNeQDZxdLWc2L2J2",
  "key18": "3CC3eMyeNTtLJYrt3fTwcZFdD8PfescS1CyVXekCyopSj6nYDiJwAXUyihiak1u2mnRGunSW22gHGgtkLjQnNNbF",
  "key19": "5SRDFARDwBiuazavE8ipRJo3KuvjXi3CNr26AXBAAk5u87Vd125JEGp2aB193RN2WSuRdEq9tidUYbXF765SWRGK",
  "key20": "4QunZZBsiR41q1Kuj2T1rMAGe94nLHda5VPcejMEA9dSgkyB79d6w8NHsGZsiYA874fiuVJm2Fix3HEVGceNk6xv",
  "key21": "YNX3cgJZDNmm6sSXZJoztsaDER8t4kbyU9uZoNbKf8SBdhJRXDF7p1hLzx9piNgaDFv1YJ18w7gPvEfGsawKSbX",
  "key22": "3EueMaXjovZ9ig4iK3vTSxbhcBXrkEDgkpqVMkY5sBy8qh3yyKTa4e7qD1UzsMatqgsVcNpDb5eHXDvEpZzxQ38o",
  "key23": "5k2kYFWkGwWfvPV5TgyrkP27nvQdSF8SETcrMWshctCQu4XV3kaifCqT7v3oHbBKvfDBbqK6ASXAeSbdpzw1VkkV",
  "key24": "4vVrE16BXuPBdmvq5JNKJ3wwsdNkRhXjahMpCZy9oepJMQf7yuFQbxcwKqG7MYmEoJB6GANSKMQhMG6SzMKZ4Fxu",
  "key25": "35uoPz1cNCk7JyxBr9AoEWt9z5WaMdYEF6WopbQSTQMQNn8gpfiQtxDhfv3R9HZAVhgUGy9MQYTJTDcXNE6cAVy7",
  "key26": "2dLG1bVMF7o4YjJBe8TTpY2LSY6fRUPfwXcQEPsaDpFwRHGaPWiT8yQcKoLy1uKsDrKaPzRrya3R5SgMXQb37oeg",
  "key27": "JcTGqZGtCFwBTBNwky8H7HNHejz4tU7Lkfp39SGJp68KDzVkq7u9SYuTq67733bFDnBbQK4EnqJE6UCeEWfdHGJ",
  "key28": "458nAAaLuZ5FGwpyTqcGR4tpX3zjupioBjVFhwYkmGz66T23jQ7AsBg8HGyx8MbpaWYKH3mp6V4b6dtWdvhWHzrV",
  "key29": "3yNoQrsjkpJRHy6UuDg29y41XD1eVeEbUDEBExpXxZYNjkehauydjfxKJnUSUmvTTNbKJ9itn2PXKgyFQbR7XJCZ"
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
