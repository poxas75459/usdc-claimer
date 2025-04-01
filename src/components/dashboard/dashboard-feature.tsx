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
    "5hZ7zHCfxUXGqsBVfDdtEaxE2AXcjcL1bXFCQJdNcSTkXfRwXg1iJ3Qoz1hMdGQDHAHE6KNPYSmYomCSpo8Certi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dBC8wjfP5iFndzyLYgjqhbgepaPjXRKGdv96veFdP1e3dXwL1ErWqhNwxSZC4Toc4UifKn4gpHtbRF5HhP4rYeY",
  "key1": "hnqHqLcF6e3sJD7Xd7PHbZHVMK5zm6wSbJhdaSn84AapydNky8jZTX5Gzyrk1hqDkhGjNK6YBsS2tJSAaDpWK13",
  "key2": "3Hrsd3UqogsY9bDVeFz7dak8FZRjQRzTURfSxED1g3bKmE4ykhpi3JN116fFxWJvg4MhFTsbNVbtxaEgR9dsPwkN",
  "key3": "2XsbnYdQcoA2cmyRQkevp3BTRdfX5rDMFk4uXQrKNhQEfDCZCZKt15w8EsuT6CxzEvzbrgRnWCc1rbxrJAnFZWMQ",
  "key4": "mopYqmrBgHP7sxD9PMXdhVDkUQcm18icVkVJME1VA2VLaGceVEPN9dt6JGKT9DYfmVmVkXsc1euN2QGjjCyUW2o",
  "key5": "DVnJCvUHmMvVDjFetvyL3WjC5vceA6HZXyvNkA7syDzyfCDg3tochr8V1opijQPTugqD54eppXekT7mfDjQo7mu",
  "key6": "3U5TwmjRgedQKdN32eca2pPbMYYeaLXq1xfJhEttiKNgRnRNBAeCApYBjvn26q8U46wgRtXsEig2RV44u1Xxgoi2",
  "key7": "2c3taQRowPLChQXdZtfUFgfqcpnerxgWAD1C9MpfZBUytBrpndBfTE2LqK32Hmpaf3x3en6mxxTydYAD7LiLt2eg",
  "key8": "3M5EomRz8tDp8F1QS4WFkmhbtuC9qApFYNfoRPa2LqNXEWAMAc2bMxpTiN1mVyzrhu3GtV1Z3buTEC9aux5qFcLB",
  "key9": "2bnkhy5cBGxsPynGyAHNzmaGwvNq5kQcCbLDCDSuBg6FarZSpqaqEiRUSedfoy7bEdpszSTGeyiz4hfAzj3Yrtiq",
  "key10": "2sA95AaQmK4FaViNMhk6geUb1E8gJ3hRjV9UpK3wtJ585y4iPqubNQvbCB5UUuksmLPeDDGHbG32bEEJ5CPV8GTQ",
  "key11": "QvpeGmCku3BwKBzHJLgER6RNKz9HLHswGjTb27Q7HJ2VrE4gdXQKAhYt3jyVzZJUcjTC5MTe5hirmRkYBgvcseB",
  "key12": "3YyaR2SLBDJ8rpYZM8AxC3AUSsmnJ8ipexuVEgyZAQV5yAiGfmqPxuhftnR5Gic53ATr3CmbuYWkPD7ZhvokUWAj",
  "key13": "5QVAT7CRpwrAaG5Ykyirqu7Zy7a4K1guEZdjx5MFxroGMhQLveyGReKWRtE8M22Vp7adYPzyG22yDtyfToau3DkN",
  "key14": "4qN1m5W4jpwVkoSD2v6LUFAfp34RZhDG5r8AQ2RDW8bRJXySp2TFQyrxCNsqH2XE8JEBoFEghPRbPvCXxLeyJnwG",
  "key15": "55bUTkFP2LQwXfq5cpBxcxGWP4TXEaHnXWRPbeP3cmZN6cPpNEJi7r2L5naVjchuFmeV8Du9tcPmjxWxpf6N1MVE",
  "key16": "4H137cqXvQ6wtjYeDYJViHFKnscJtw43MK7hRwYP293w9sYoEz4EruLyNgAscbZsLx28v6E6qpb4W5Nmyrd7aHE",
  "key17": "GNrjL51mgH6i9dZYYJT8dNtVFhNfVH2tmwHGETwt9QFSajpoiSftX5hkv8PBQxFopEcuex6fDyw7d5xmCjYgwVo",
  "key18": "4DoCCneLz7uVZCurZhbrg94ny4zJvkvrc5KufWvHP8SgiBYKwSwFYG1CZmKcX6JUpUQYNRs52D29njB6fCYMA1ws",
  "key19": "5XizUsyznhHghdGPbfqLomng78B5hnZXMkC5fxeeQVCB6bYLx3aFoUSEk67jqAw44iMpqx6xtBHipgnbraNZfNY1",
  "key20": "4YGPWwbTV89nNo4WqZoci8cSEMXXVhnWoCNYMQVQPaGfEnPkWbqQQ4jvZfZssLbHwnQbktMrFZy83LofRcvejuDd",
  "key21": "wqiZi2tJXrfeD4Bv3UKLnWZtXSx1EEpSg2Gz82gMzM2FSKUEuj6TysKvXDnYzM8P6u9ga5G4bv2marHK283ynRw",
  "key22": "4f13mMdxL3UCxDsc4HjY6CwkAwa146i39arPWByGv4Kg1YvxGgCjYdx7rMRgzcnJ6vESUjeHnyN4NYoXHv5mW665",
  "key23": "ABYsuajeJn7hecUDG63smdQ91Np7CRDjDxzCrF4NMbXFV3HAYEVv5MS6gcX6XhSdntTs9RdQZnSWEu7ScnMycK2",
  "key24": "3poUhhg76RaS79Fo4eEWc18UybzKB1fYFswDh6oKxZWR4BN3pnQoWQTvKYGYSckrfRMTL4kLGCUwEdxc7FCqbqtc",
  "key25": "3jA3yjQS6uqwq8smDs1twKBoATNXXkHK2eeSYHGmwrbPjFzb1KGCrwmppsziihZpC25HWiRcqqtLAAVLdKWcEeQw",
  "key26": "3T8z8HMEYZ36pvJuM8Ky7v7rafK36Et8Wy8eAB5bN2EY5gSjmaMhHnft2ywUF1Ms8KJ2aFVDeknjQP7xn7ofSPHq",
  "key27": "4Wd6uXGg9fjXHtWEhgPYKgfn1zteYAtRQB5MBSg6spAZqxhK48dJZoJFNAJg8yaPWyGm5zHUXjrLjDvtdcZet9jt",
  "key28": "2hiNaWnNWRT3tFLwT5g6FKC4fgcZGSCKpLVidPhtcxjLrgwQeZndm5cjKYxYvww5sGshdxYXVgJiGDv8RC4BCgNQ",
  "key29": "5vWEPxmVsxdqt2pQHZgPf8Jumkx8sxyC67JmCmeUSjQydseSS8XpJiDZHXHhjEpvT49qWf6X1FGdH3uJsHWYLvkP",
  "key30": "4EHHuJv5nvvoGLHgLHkYEDSXQ2kSbr45QYVJhTwm2SAf3W9xHoMqtrPByH9RoW5AoXLTSv3vbvEqV1tqGHnk9zzF",
  "key31": "4M65RmmzJbhfered6pLdFKs77Mb7BHGxV6VoNCA1NriDhaR28cF9xVArrXLqRRQqxZAaEP2Xuo1G2NcfrE8eW8QD",
  "key32": "pvWmYaHCJppUZxA3gwm6vLSBaf9xRDxCofyBjSLgUpPKh8PA4x18PEk39GsB1o8Cm1PHp1AdX4RP4pdqgUBv8La",
  "key33": "38JwCcu7xsvvQ8iVCVbtyje7aHmV6zgpJkk7VweLgN6cGfasrbcLKS26asZv82NuLTSCTydc5qd4JCoypERPzRXq",
  "key34": "4S1fUoXGxknaKHKtovrZwaTYHku45jkGDd7itUVx1R9AYkptoHo321DNG8XEHTTs9bP9QvKqj25TxopD8g6DJw3G",
  "key35": "2Bu5m7oTHxdaBAFwR1y2onURKq7JYkVqz7sz79HChJkEgNWrLqu4SC47QVZ1Wq6hqUSE936kLvLdnk8fDdSACTV2",
  "key36": "98hYS7M6QCTkTGWto8FwKEyzGcYv9kq4B9WL9GtP7HNQkBmiEaxWY2PHrQBKNw3JjckrbupTw9sFG3P3qYLzVGx"
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
