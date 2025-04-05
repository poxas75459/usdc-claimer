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
    "3kJvTdtxSWtY5RfPgA4HVCy59fJAgdcUkPGjud6wD5PWZPK5GyoL3MReoXFvhpKw6JPeWYE6pTnV2RAXeWksycvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NNMGkRWkfuHk1BgBeCnGWJn8cP5RyyPsdSdPoRUbhoUsnWBxsyNDzG6AhSkpihkQjksB5ypZz4JmcjKDFvpdZd4",
  "key1": "DPDiEVuNJFAD1NEoCZGmj16D3dn1Nmh9g2uHVCjzNfhQBaXND6pVc3kCrhng1RhDg1Gj6J7j3XCQzpL95G1zvPv",
  "key2": "2mDb8Z2cE2MDPqEewv7GYqCt8vJsKjE4W1RiPPRdCC9yeNaEoEwb3aNW1PahuM9t1EWDyu4nUYZ4CqYaHCea9WNc",
  "key3": "wACTWSpp6WuktyL1WkneuiUdR4MVLqiJcPytgdkHRKYhdFzu9Vh28hNXnh1kbQ6cxp8Cjvmxw3kHJqvrouqecR7",
  "key4": "2FNcvFFWpMTXMYxysPgULLXvcwKqCVA1spRCc6QXnuVv6trcPPkm1DsDCbPeRNGhenU3zt8hmxqstswveXqLoHA2",
  "key5": "4mhpLHRZAQa88kQEUru51WRK331bT8Uj1FszT2YNaj8qvnqjEHKJHbBQTTRjLSGhHiPNQxnktgjUFAnDiuGRvXJU",
  "key6": "3LSno9V1hhGKDTiskJ3s7T4vfxsoMyB3dvSSwLfRoHnbVCYoCBiCQY9j6oMHJWrt4LH57dyzWLAyp4nm42QcuEWV",
  "key7": "5xVMzkQenmQUixjN6RqTEpNjmA2mZCgLjA2gPUd5xJW2Lm2aPUo1L9T4jG1Mz2y1BbZchBrzDRArpyaASMQgSM28",
  "key8": "29vpf5qAyeTtGtmv7oZ78jTeHXKdT1hsZsaeALKb2favwCeMdatDCy9kvoVvfvY6vCBfTwBXhXXRzwDq92AvF2i6",
  "key9": "4w6QvdfgFbyDks4rb28EryLBiz1unomAWs7MU3VvJoEFwp4rmeoNGUBPY4ETqYtchhcWbySa4ALKLh55zZkiET1C",
  "key10": "52gXPGk9pmBfpbbABmMARoSN8Tr8kVVTPAgXfaD2jnYcqRTPRvf3m4uPdJ3g6b7dtUqj3Nv8AiALroxkLYigkEEu",
  "key11": "mkd5GTUED62VsPUrniqHbfHPYf4SsMBB1j98h46nnFAWtAJaqVU74AbKLhDJVknJzoUkh5iSnZNge8UiRMYWPTg",
  "key12": "45sFJ1qCe3bPNwMtgG9Dkjfxdwe1bbtsargBMbXwysbx9Js1JKA5zaiwhTGUzDahcLPfxCKr3Z9JQ5x1Sj5KhM5h",
  "key13": "3JpjLUmYvXRWc6A3wCXTmGZ3megNcDF6sZjg7gZf14MGBZ7yyrHC3ysrEyicuqtPEjzS7khwBW3DijCSo5w288uh",
  "key14": "2qGe9qsXaLwxiXi6Kda5iZv7aDdT6KjTpaGJDDpVmQ4vfjrXM54Kxk48L1GYYoA6oP4Z4h8GwvQyi92yyyetfDK5",
  "key15": "2viiZKGkJKV8FDnVsoZFkcJNiqtt3nmPHKXTsWLfPZMJ9nMR8YRe4vYSz2ABBeDuxkUN5eUkKBP7wcohtvhHea5p",
  "key16": "somY11Q3aebr4JXmZDteWwp8eEHeKH1Y2oD7x4YrmeYKZNKrTugHwQ711QsirNsZDKJXdELodWuAbCzvwgou3Jt",
  "key17": "4FwAqA2ugjsTiZz7pxWq9n6ESuxo4sEt8SLwzu61psRYvBQ7cp5zdwpS5NyCNs7wL8YsMtuE8MfpuRRne2L29UiB",
  "key18": "2vf7t3KMRX4hVq5a3w2rgXEU8VL8k3nFdfLyedtxH6orsyriQUZin4CD8DTUPPjLfkYpsJYYHQHbEVNUdD8wJjja",
  "key19": "44BjmZcPf1G2gxeRnD2pH9pqyud89Nw1agmUDTYooGtnJXytNx3CvyTqAKgFF7SQmZndkstDZtiZb5q7jjYSZgCG",
  "key20": "oykdcvdjMeZiyuPZnozmMJNvuL29K1K8QreEahK61TkYgVW6FteJqt2SPumtSGAgxk9nFryvxuCYShFiYYadxu1",
  "key21": "5CBGPomjoX142pvLNG97XaGAZ54tVDuZm4WUhvzNSfD4HiNXaUZwxqyaSpdZRNesg4iaHsHznqZ8on6pBTEPRaR6",
  "key22": "3epqJSZgHH74WomY1jiJFZJKgTUsJBuRVMSJM9LTYALeAxY2dUuZLBPxC7BDHEyF3Er9f9kdQ8cbXtLHy5cG41wQ",
  "key23": "3QsSAkBZxMLgNwUrsQhjKPYUEmJ19n4MXLYjVTwPrMAsDcTQXx2ot3wdisjPPJkxKn5gB2XVdg6MSXefCU1mHgKq",
  "key24": "54jV2C8J3A4xSRPPnTA3YB2tB472XZCoEXtyP2Gt3BamSvfQJDzYgWToZCg64iRWDexEb6MiERG4pKHXRHuUc5nS",
  "key25": "3Qc277mCtS7sCJ7h1qrdFE55rTT3GeLB36UneShjkeJ6TYJK2jBMN2wpKMF43XkTCBbVGYLzSgSHxH7JQ4eRTRz9"
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
