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
    "2GxuDiLgLrtbrwEFoG82DMKi8A2LA9eT3unpcWN96TStVt5EppQgYuhxMagEQAueXAiwKnvcsZoikfTndHgGQy8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BsLsNJnyrYnJhSStKTVPsBSsxAhVtUicdrSrMTnuH1NzirnUNJSvuKmpM4hPBY5BpiLBFUeK4YbSfMZargmMY9x",
  "key1": "3RRwjpebZtMZe6e7Y4QJj2Zzjkm9gXtjpc8bQchukRMEDNKM4b88zhYwp6xa8g6UsjS23t7n7XqBKbqZbM4xEezw",
  "key2": "291iDfn4a4b2RcwKMPLZaoBxDf8RsCgtwxUjZvYucinw2dgasPJeVQ5HVsYxu4o6NHkoT76Uydns4HthHCH4JUiM",
  "key3": "5NaYkTkExR68yoY9J4XiEKif8sebWZeUwB2dgoXGvuhGW3FDy8EFTckxLNo9vXJAZRwh7k8Fx6gzhfiAdAFQ4dR2",
  "key4": "2zSUzWHFeq33bNoxf7cVRjpuBnsQPmV5LpLzrXPkf8pXPDgs4bwF6v4JMgih6wd4YnR28cu9bQmsdN1tkCL9e7U4",
  "key5": "4LwtH36jmAyzWEeSpCFYLVWJttt8coH5HwGGqpDHzpmDdgsiTC4Uwt7txzYVZut3T84r9PgkrRSaCERrfmFVvHSn",
  "key6": "4LjUwmon3fvpp9bFYoQmjx5hWz3UitB4qwm5ry3CMqvxfn594ejLhFnc6msa3aL7hhFzbxr7CobaAwA2oM8PW1BV",
  "key7": "2ZZfAD7xHxCRTDgRqMRX8waA8KNU9z6ZHKgFVkAoxXHGasbDF5ozdWKM4bLDyKTH9azjUshAQeWvqjAB9c86gsFR",
  "key8": "58pYi6UNNcybwJGYdiQHhk2EoVo5CAhXoZpPFQBu1MRZRFfq8URs7PxsRXvbqkgNPVK9Zx61eGGNvQV939jGjtJr",
  "key9": "5ZpcaDXRZk8hgjsHQzgtEuRz8TgnveUC2F1DpHAic1ZQUXJsBEDjbYwgD2pCwNfnrL2m2mWgFPcUkz2WoP9LQrjp",
  "key10": "4QS5rcWuT43nAyUurP867iRnBgamM6Af7Q1gyaYaKUvvhNPHV6VsNGCJYSvzDDxyfFTEMDLd8ybkKLEKc8fk3bf4",
  "key11": "4GDtJ2n6ieahmf3ysVc3gi8xuDZTu7RNYpKMGAttCwdypkgyfXjUdcBcJ2hzTsjdtUJQa69eyd1rqKi2Tpsj2Yo7",
  "key12": "8MucFv3ia9SWkeeww78XuEjdoXn4mbhYjdt5qRweZQorCvxw7bjynBxybnJY7zsr1uUkWVLreAy5s15xyE1zJ1f",
  "key13": "rBDhohZyGD8fbfFLbM9CPmuFz2jUgyXP5q9PYqPREKVtqGezhYdrZiPAzdCZsQuhNTrPttKhDQRi9ufm4y9gE1g",
  "key14": "5VnWsz3YhDCA2zYqwvsCDoRCcQ71GUxhKS5fC2VdyzX4UFMLMFt5PTYV13FgMBH7mH8KnfAHJP7A3TPPaerum8iG",
  "key15": "5ryYV9P3vb9iLN7tPuSje5AnhTfMSk6mmyxFPEgT2CUmmBrMubrGiNkux8uAGBiMySyXhK1dVFcTHR6EN7fXNeE5",
  "key16": "2rLHd8u6Si4YnqndEtCh1ibB4T2BrwrLjGURLpbL4WcsdppqYPYKQqh4K9WgsPfbyH2LWLgTiU51h82iGjP1rZBa",
  "key17": "4cRdocurXX8AJ2MDbVc4gPRDnpPDLkNDvqf2YnN8UuWqoe7c6Bmd1Yayh7vCDMLcMmm31eezAsdVHhJTVv1dCWGU",
  "key18": "CLMFQKDViC1yqNQhkAWAB1Q8pj1peNHhVnSzWRps9jNbYhDjRxSEV8uQMQTqcNyuAqx3rtgdQgipjJQCopofDPq",
  "key19": "23r7hugnUeychjrFDW6qJtUqVRigBQL6HDCffbx6ARUBeZi4Ubrj4ZM31yFwqzTz3Egngvm73ky5ZfCgtPcuwKrx",
  "key20": "3X8zETJ8TWgAp6faHpWSzwMoN6toUnLof7MRpXvoVn11jjsJDz1pi2UdT6NnCJveGopCDTKrA9s9q14EaD9LyR94",
  "key21": "gHua9cUXvwbqZ6UXdLSpAVn2pAtUrNKKm3ZkJqMdDNRSNdhALVMKH9iz7xqm1KgKd4mxTLj4UKmC5Cuxo6gkVQT",
  "key22": "4AAAK5vynAM9jvdqcQ7uE8RFjcU7KRfbEtfdqqaYw3wjewgoExs6ceqnExVFrCgVj5V1vAR9N6CQVUBxjUrykwRL",
  "key23": "GfTXQ4BCzuo2pvg1N8TeFU2fYrKKQRvRdJLWfjWPkw5uCUpFVcEenguKBhumzN1u9HZSjtzL8q4pg4yyCfeMRL9",
  "key24": "GYC2qjmNepd8hgXTXJPWitWt8YL6cbijZzxdBWTkXULT4yBQbdKyHenfAEyZ9aNik2rzfeB4SLNKezLvHzXVebG",
  "key25": "5V8sudmSp8D4pMyKjn34jSC8egQrvv6anDaJwWPHzXzuu3QEvMBXxyqiiJ6QobffWaUPhFh4WaFzLQ4GfadzgSEd",
  "key26": "jwYKF3Uu4o13yR8LVnVR6J347VF3fHrvwqXoK3E1vpDnBGKSbAQ2G2M2oqiFuLDgsTJX71oUPx7CLjyQGUAHLYJ",
  "key27": "4fLU9kqwGe4WkoC9HtM3gpj4zPDP6LxYugGGwz8tzkndYeaWVKKps3EhJZbYCdqunNXTe7jACKu7KECT3r8bZzZ5",
  "key28": "4ay7fih4TD8d5WtpBvXBeXNCaBQ8cPA31PwpvPQHKz8NRBg9ekesqP65AfeosTN5tyF64kJGW9uPCQab9JyJNYCS",
  "key29": "2TM9Lgk7uYPzvJkBot5cHaNq3ayRP5yujwCvG66EkKtyWHdw2nz9YdsQA6V4SUJqXQnFqwTSq7ySnyYKjE3af7Bg"
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
