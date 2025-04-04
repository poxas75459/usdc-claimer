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
    "31geKjqEafhTqNGrFr8pZJk5g97ftiCVVbLTKXGsqDzNrbMv3Zvg6zBL3PzD1do1utbmvHXnUDmxTJin5hXT7X4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iM7BAkEspaGe7hBzQd4Bbx8TEYXHdP5o5r5rw56TZzk1CnY6r54ex8R8iQPEpdXDETz9tyBdyFNAa5AjCiYQkq4",
  "key1": "AdUX1ZeVuMweyUR4hDoPpnBk8xrjJtrZbG2zfna89roHpbfSamoZxU8pm1zYktEjmstWk3624p7BpdKxTJqbtSK",
  "key2": "5LMoWqDh6UaiSVRheR9v7kQgLskRBAe5eudHQTjKPNptG1K68KtD8pNLhVTdEyxPiLR6dJov6WQ2WTckfCuRR4wH",
  "key3": "2VQv8rwYUXZtXpDNLwWSeD5wZrUnRzLe8bXXpHmwFBFXAsaJQxVvYKMXePntwoigM4hYm9b5kMkQQ9fUDUocQsBN",
  "key4": "3DnqBaM88cVwfrXQVzHMrSjF82cwa9AmtNunCx8WHh4RJ6SLPJ8XccPSR9YUYk7pRXg6qeu2ythmJ31cNw6ugYFw",
  "key5": "3AMQLkpezJ7qmdiV8VnHsXVcFWQGpDme2yKu1WYeB6h3H1DzSfB6Y7gZHacpDntHNYqcvfMk9XAHz1RzNpHasqx2",
  "key6": "5mLJQYPwr6F5TL5on9Pp2BMqybfNtEAPPkyY5h978oEkHNM2FJwh5CvhPjmJC6XjK9QU2Q4AppVWJia8FwWeDwZ9",
  "key7": "4MzyRV61iv3nEFk8rq1MFvua7f2V31b94rgdDKXabVkYuFEzWZVD7gd2bWaSFiS6oEskfmaAvh48vuehiLUi6odZ",
  "key8": "2gjeSYFn8bpQx5BEhGA95HDZGzk2Dt5zsctGtBF4yuWt8CN63ZC4MRoqzkmPSPQenb5aLS38rTbhHeowMYndGaE7",
  "key9": "53fhZDNULY3NTAkFXeN6MXc2MimorebeTPW6V31fL367sEMux2awAP3nvafWNVrBsHSZZeQE6fZzNvpTnYUBUkAc",
  "key10": "4zVdStyUXiXmEy596MwRFFvCuZKZnE11ekw1qFdMCXVRZjzMHa4yk1vzVhC6zmhd3X8YjcTnLsSSyQvH1AkF34bX",
  "key11": "24h98uVLHRjpFAv7Qr6EVs6yUWaaoaQ9SJng9u66WxnkSURyUUqQTRpo55ApZ766MSyTx5afJLjZfp9mULyzmCsB",
  "key12": "hp1xVyWLyfpzWPaTqkDs9VBArF5p1xUozy4gnZudadDZE7SKWwyM85xsqENLVw9S1iMMBUseJcNFW3ZFwH7mrVL",
  "key13": "5QS22cq1SvxHPVFZrTjpqG3nbqJTiaJMBpBXN2WBYvQdWJpCHv2CQH7YZxqpUUFjf8pfGmWUKhqfWhovbkhjH5qw",
  "key14": "5nafTXbDdLMwoNEmPNwSe3uu6LSroJ8ZfxF5UnyPk8L4PfpRVNnEYw6jK4c2yRMX7r5wikDnurJWKMcbyLqNSWK4",
  "key15": "2cfsVFqmLxHx8hLKS3XosDdVXPxpDDRR1awJj5Pddx89fDHo6YmVhnhc7kMzfP5UYFSGi4YCA8RLCTFyyRe4Htnn",
  "key16": "3EN3zEGuYR5pPgp5XDXWosuz1CP7Efae48r7GHQKGdJ4kdygvWboBExSMbdVz1U8MdG476ttLw1omQKc5K9x2TkD",
  "key17": "2Sayq1tFumuZ3sakLR7oUMgLpPu8Lk4VYsEAkzz5jdAtA3CFwD7VQjFsRuvSpkAzaYeTuwcRkQGFAYRPQzCqgeBZ",
  "key18": "4DeiagwD8LHWB4ikybnMz98XGPBBsVgrRccSaLrQcHNpsKgThFVLnxNB8VAC6wQS4Vqqviv4gnVMt6J7QvzrpY3k",
  "key19": "32AyoVvpAVj4wTFqgHVkex8XKHAaZknXfg5U2WfFttZ8deNEwZ5WiCYmJezhBsKGSyYuXES8YuAPgoLMVNikUZtA",
  "key20": "2JAdtASKuvwttUBx7mFb41AUidaf7G3bNmFadaC2bj5RvU3wbAwcRyy12VpwGo9JmevBgnTyzuR4cYJDiQGyPhzS",
  "key21": "5dk5qEdTPMXBWeRDEm3WQWWYgvkFWZpWhnLg6JNP8dHpzBhWRyBRKk8YBNvaQXy31jGygtankSA9oyZ9stun8gng",
  "key22": "4kf7HpEQqsKXEV9e6Yzjfn9paQso4uCUW2djH7AN9fLfPjtVDo1v5pJgVkkLk8jmtjd3pWQomuQGhjvMSgeauPqY",
  "key23": "2tuSQsvitgKJDQuVzu8jxa5k3vUiLZsGmpy7rrVa3vu3SsRr481HH3zQc7cXjsENyRtWryF3BEzuNYCY6ppymaM2",
  "key24": "ETejxxrT8RL54Qmf19ZJVbsA4onBVaRQUZjmChhTcZjy56EfaBrQf5MdfJU7FERKtkn7MeEGh5xmpgK4ExtshJh"
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
