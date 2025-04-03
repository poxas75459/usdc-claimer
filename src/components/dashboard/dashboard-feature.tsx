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
    "2VnK3AVgHjaBeJZb1US3TivXvZ7uQ2C8XEeDcVRPU7Us5e7ZR5S7FwRptkDbSC1ahkJjDo9ymKTzA7aauobxjuWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dpUgsE3wTYRGvCwiVcSRTochsvHGNV25WTzrB2RZuZSMWHXeVwFk3pZg5Zyc8HrsCs1DjUrF9jFjf9GCZ1Qy27N",
  "key1": "4a52ZthqL6GivT32sWG8s2XrVunHVPLWhcSxnHAGvFBaVrjm7Ymv83nCPSqTwPgyofhihZ8Xa9ZGY2mAnxvbWxhT",
  "key2": "5p35zQHb5ZHbBsb6xzGzd6vR7ncQLCjqZWEbeQ6AB71CwoNoRR64fVzzJPBbk961qnYdbi3knEUdRPXiLABLfc3A",
  "key3": "2t4MSXqywxypvm1n49NcCGDdDnSQRoh8zYjdxHnjQ2mAWSqSZExdyXzsukdCWcEbYKXycEhxEkQG2d8NbaCPWGKA",
  "key4": "MxdRhHb1mEChApPZDFMLcVTpgCrLHRSkYbKz42Qk4DWof3MUh6txkjgDVBSK1KbPtUzYAL5Ns4KVL9QtbAcbvuZ",
  "key5": "EVwvdnSrnZdD9gkZSqw5YbtvjFwNLoQxPL3aDgC6jrg9UWBFwZVp8hW6B9GVPM4A7UAsmEGHfv69ZdrPzZF6o5R",
  "key6": "5ChYADzdFRDv2WnAzpm6UaAnSiNVtLH2LDKMWCvCA3SYsZeCHYJzGgcDhs7fZ8RmwaXiENUbdD7VuaC45hAbYZK",
  "key7": "4XUMZW2tLH6mBAVsFQtoWkCrEXAhQJozPWq3cWeQtbbJkWwqXJULmjyFUFSB1z3ZNn6e6jUNwHTsxRi3NapZYTFY",
  "key8": "5DYAGi66LUe6E66pUwJN2uomx63ESCfaSompuYh6PFWuyzBuuTcneNHzttSinuGrLHeDKdXd4kHMskrAG9FTSt3Z",
  "key9": "4d1zrinV1XgAy1kFNyN1qb9koqD9JD9DhqTKC6KHMr8CXkW9hti9oxf7nniejpGhVoycHA2qyXFUGtKRkMRZNuzP",
  "key10": "3Ua6EuQhvwAhCFw8zQMYmSmpRVQgRvWKcMgDkuyDDDo8ERmKzu6AVFFjjJKc1YBLGjatTsorvkj5i9NZxoU7qAZY",
  "key11": "62ojNEsGnFFjBahHNwETw2V47Av2iRJJUeWtmyW34EYodm9y5YxxmZ23UaYiC8stUVp8brRTWdvWqYNPLpvXkxLX",
  "key12": "5voYECgYpvZTdXUarzjxmDyJpC1GZBnNw6xeJR7D1f8xpt2d7766NqsvwMnCSFH2y1sUAWhATNMZsi6ngfepAkWZ",
  "key13": "54BHLiCiWgNd3ubn18AimHzw282fCovfDi4Jps5cNdoVr98ppc6zAH28hTQTP3UFDwMmeHhFWPBYvVM7R2SmJKcT",
  "key14": "YRuttVhF7kDoB8JBy4DJMHmauXtJbuErKXQvu13QSRaBNnomEjGJiMcUf6bnB3dgH3boZAoEX97qATWHHuNaZq7",
  "key15": "ZNQpiz7zDhypqM5rZcp9y66scpvbL5Ac6AXMdmAHJZzzPL7wTwCfGndjNR8nhVbrn38EErRqvCUSdmos144PN5L",
  "key16": "XJ9sKy4aGfCbQSFC3zPdLRLBeVR6V2LqZJGYS2y1rBfH2YMjDGaC22vrvoHc2eCDViPamJjavQHwQcfX3dm5puq",
  "key17": "4b9C56TMQJXeX3LBKkUrtQofKFUxLu3ovZWSHjAHdQ4fBu3GNCt9vvHZ4Qgcj3fDnNiiqfrtUDQkrsFWGidWy9fS",
  "key18": "3HUhEnocK6fqbfthkjggsCRr87iqzUpQTnKMpsDpxAi1nhtkHDn8KLAkVfkDT9t37oJsTEtbT2PXsNbj1ucBdZmU",
  "key19": "4gFTuvwer5KLoSWWpyvnjphNDxikLbD27uj6HmGVX7k1uKhQEQDSSTgevttaLmrdCnnYU5vJ5cv8RY3XbhymAMQ6",
  "key20": "46s67s3cB6d7nsZ8hrME8EXmE8oLgLCN44UE2MdQcKET47oD593JURUGAL9Xa89WoEjbXceCnGFAXxBsQQNBBoZV",
  "key21": "569J46umPA6DkPYi8fHQqtkMJJ1kP8zZvRRF6cMqAAWdaiNzDsLWyghELTqsU3TaXK7PWSNCggwToTXU6SdsrYN9",
  "key22": "3jj1ZtKTqwyqp5UWS1erMKEtdqvE2Bc6y7HKGtja7NH8fS1XwtNuWBZNSpnAkPLsAmm39ecwb62LyBDt83drd7j2",
  "key23": "3TfBMfmQhBSx4DdCD4e4ikJB5TuBeBN5RW4aWUehkcBa1DcgcQ4YoPVsV8TTqHKtuvkfg9vFAttVKJgxocEjgq5A",
  "key24": "3fTmKz3J7XFd6mCuMugeEfwmXJQwKP1K7NWyPvCDEWm6vmfKnSqsvN8gMQsmMEirz7ZiVLEzgmXECiU3AHHSsoAx",
  "key25": "j7Dcceh9nqRsjFcHZrDRMHde995iAgpitME44tPQF2uZ1TZEwyxf77Xypy5Qs9FYZ6qgKS8qvtxEzAfiakkGQVG",
  "key26": "5SehZRbQmsBwLWD1r19iknz8bhjpL6QJPJJWYBULmGEEGR5mxyscdrcQspVptVQYkZTZe933abGvzLoo3AWXNBko",
  "key27": "4ey2vaqkmueR6bd4wzM4Po5NXyEPDqfErPcMrYS3JeZfjVtteL1HzwtYuqufS47CPv9fm7iwcMd951VtGjZ1vUht",
  "key28": "2MDxjbcqrJRkjjwK2f7xUF5RMyNXLokZ9wy5J7STB4i6LQQDyeyrrjwJC1VmtSCQWC3WdtQ4MEvVQqi182d8Q496",
  "key29": "331bKvZenxeG25qxx41tMa4tUfw57QuvQYoACykth6FcAQXFMmrdS89SnqsCafVNZ66CcXy2Ai3aQVFDv3G8qVNi",
  "key30": "23g24uWRBaSL13eRzyPLSvD22ftuUNCqLgAqDKg4qmuuJuyrUb9yG2qQBhvjQND9DEdHZKTDJYtBi9LeB64So8tX",
  "key31": "q7xBZSGaLFc6DefR6Pmd8Ydin1exMdLVShuneSAYvKF5t28bkB6aspFBZTEVtAZ9i7J1d62NNKz6rY94chsv9sB",
  "key32": "53LSAeresSCWBxdCiwSsZcjadSM9Fvnda84h9gUH7eQA7WZPnLo7S3yWg2u9KnpgGg3QNC6xpoQTNzSdMzSW82Pz",
  "key33": "4vf3gsRipiGVXk8PzPBM8JJmzrxkaozHF8DS77wLs9qPMuzJMdEvRGTxSmSeZnghD3RpcCAZdLCGp5W2y2mKzjqk",
  "key34": "2tsye1U1gvCMsYBCuC7hmX828a9doEGQQivRS6xFwC3svAY7RirjLJVCTaQdJkjsPqkYyMKmXWtidf9gaNJrYQ6T",
  "key35": "39xtG5uzr7fr4e2te1gyNrwGkmyqLC3U7UVhyzVg4GiErnf7gUia43zEc8rocXJGC9UU6kDo6ZgSXnpyxiy8VgZ9",
  "key36": "5TRvzwy1bwBv2YpzQngZrAcJW2oBA3AafsvTD2eq2ky4UX2vdkMAkQJuchXj5En4vfok6sQh3dq17jgWQSsL6mKo",
  "key37": "4DfcdUmEMLh1gxrNq9zmumQdbssTrkKpJaefYH1TFNC7v5wKAogA7krvrF2Vk8tGdhcuVa3zF5rtw1Yj7Aepxm3r",
  "key38": "YyZEAeamW3ejA9zqobcmKDs3hnxr2r67ffCZr67QCvBhPCiGuAPgEqYYmjr8a1Yu1wCCTny3DEsAV867rTku6rC"
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
