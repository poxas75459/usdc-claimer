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
    "5EDJmcNpVgd9pyf4LpkMeUQUyiYc7aMEHBSFw5ud3X8ShjnfkzYDhLv6jCVYcsgoRktzTDdJnWiU1wjb3VWYxrB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J8UtN1qE2WxSVHG6RDVyzxfgmwMZYuaXjCpmbdPjnjzjWMsz89eG93zj41mVNdz6tc9a9AjTt3By6SQGA2WcCVK",
  "key1": "VsPVGcF2hAGV8BaAiAwEJToumgY77XzATR6Ku96SMpSgVwGa3wkeLndRxhwyR5WpW6YtSRoeUFrAYcy77Q6d6XR",
  "key2": "3aZxDWRtRU3HUP3uBLj3As3nmLk6xt4jSnmtvCpnHpALHRHH3AfweoSufYw8ADZHTdQegGSNzPBVgNzYSHhep4To",
  "key3": "4m2i4DDFx9FN1QX12BMvRCBCgcnKBsaFAzR5XQ4kQaUgDSgXL9GUgFSA6AumXVRqNg3eN1xYZj9ViQ8p6S7akXLQ",
  "key4": "SPmds5j8BSuYiQw3jVTJQs2mw334THrZ58YvCYnVTfjf5LTY3gvhktjoDB2MYKM7QzhCLDLm9NqXDSVvWjkwRRb",
  "key5": "5coMDxuiCMqMCo1HmBPdtoDaDfBQGKMFpKwmrJQi9hyWtfLdQMgJMn15L9ftAfYPitG3CKdXo18iXeAqn88yoBAa",
  "key6": "5XUVZ61tGRZymMnKrvGD9tFbzJf78n1kdrxTEZVGqk1Ko1z71vZNXSMYeERNoRePV6oRnJ3KMCTyEsJ9dhLG3rYK",
  "key7": "45PWawj1TCF7KTyL8TfPdCEE7xACRkAJkH7sttobUehXRVXSNKM7AvK3e9Tb69Uzgh533zea9VcEuHutWZy8dF7x",
  "key8": "5uqKV3vmnG9pSQDjZe9x4ZWSPCsGfUaK4Zy62ABNfNpZTDhbjzAyL3ZUhWMM4p28hdML7sZKFwikmaNShrrRVTyU",
  "key9": "wppbe5jAjtwB8xsMVYMTwJsAKYfqSryLQp1GvbcfP52CTyBxgbQ5sXVnNg2ud5ffm6PUGMSXCCzuhCYv8ncD3Uu",
  "key10": "5xR2r8ermXQ3fyEg9nW5mSpH5XJGNYwZwqKJqBMyMZCD2hgMw1goYuaf4nkNtgkK8PQU7wZBVWm9xeoENf8mCHgU",
  "key11": "4VDw6a74R8xwYuqFRaNhXDgpPkBHWRZB71AhrfhVrxGZmTk16Qe7FL4vAF3JKZkjry6FGmuonqEyEMdqrRLxSqYS",
  "key12": "4NWCNDjTGxGsRFNGE2coCvvMzmVF7uDAudyYsyK1UicMkyGfUZbefjfVNnyca3jybiaLAUgXeFLCsYbJGFyYSgGa",
  "key13": "4UJADsb8aKXqXnPr8UAjtrbbbz5DCZ1hJ8Cz11VrPsmYjWKuBspENQvbXooatmisGgfahFRusw4FKCNewNid4UR7",
  "key14": "XsqeHF6REVqUPT3GythqFhoic9dgrFoMMpQQDzC7M1vuJWBFxD7gc8xud3x7fzmRrTC3R4ceqVP7Uy6uYbbGLCV",
  "key15": "5wjXEatTQZprhsqCEj5FyP83P8NHbvz2WLg1u8KwiUmJf3heX4hrLxCxUToeXoRTQv9NU4aSVu9ByH2Sc43Grxhk",
  "key16": "opPqkRsEUGUeUSE9su9geSysAZrWsxVWFQmAALFK6DMsvBj9GuJ6ve71TKFLQ7GdJXYCihLKQARE6DR8ScLpddN",
  "key17": "2LirjWrMURGkqrNdov9tE1Sjepqv8FHyEa7fS1zw18FcDiYxQJUiRjx6HVSGkx8Rs2eLmHdGcjh7adepRFq5WLv7",
  "key18": "3ykC4TTqtwbpRC4N2QUg41aGtwqnZoVBw34kBbs4im7dhFmqvPF7RGJUC3cwmC7ps3Lf8w6HKq4RnKAsa1ujGmBU",
  "key19": "5tczJWJm1YSPT9ZMet1gVyFGnzFSz634LZ44UXThKkfhBCNM6nMEH4BdYy3FiVWkRhC8LGbTVCz2Fo1BihiYC2Co",
  "key20": "42P49844zzTkhR4neJT1Q6E27QeRRRfhKfEULXxTW9DFSqotVs8xz82RzvpyC6grgjCyyuqPvxX5KFVZ1eT1XSBc",
  "key21": "3VoP3WMw7yQccRKiyyxn3ieRwzbWYZdtfFiuuuWs9ujNc6dYTuspApPFx1oKztNZHWJ4agXDQbTz3ks6VXQvcXN9",
  "key22": "5rJLmLtNC2WMiu1Wk8GsiduPXKn6iHcE4PU5bQUc7VVQaezAeL5g5Bnen2JwWUsSroknYcf1zQwGzBYmnLEWtJSQ",
  "key23": "4KNfukYiwMg6cHLDvkEczR1Q7FUq78aH3KVQ5TmWMWRfXEh9RyfAbJJsNb1MVjhuUExKH8n2gA8YN7S5AYfydZr9",
  "key24": "45UQ4raF8g8gDtYhsKGmt7jGUnXVxJ8bBhcaMZ5xgHLV3EhKGYTYVC8ZpGWGGG6chS827CnSwMgyVxCPYm2QVv3f",
  "key25": "4jUEiS6dEV4exxV85CTBwondj4icsPrNEVVUGY77nAb2jbQ1GErJks3fJcvfMFj41UHpaLM7U9hZpUyUhmRXyxr7",
  "key26": "BbuPstixsRX92m7QqdAyoYPDGPkqWLBa8tfcFffRcSD8nfWifwVWZgb2uWBVxuoJNWDBYQpL3x8ppYQL28YfMCX",
  "key27": "4js9hqLsrnoZRFeiuNVrkwfH1nzEJcrfFAFvn1dPMYjMU7GuYMmgDUowxC5hUrR9AXzSSd9jQKGAZPVLWRU5Lt52",
  "key28": "8VE9MeSqs8PxdeGnDVXntfYkZsjhzVTEobxM7L4bHdneNAsFfqZiZTw6wdAjyRAV7YmXwt527LVnbGz9W7mXZWh",
  "key29": "44vnzRm9Zb8X6Hc49WEHXxHpLTj68H1qPCtj4ahNrnC7B1qAoCa5rDK8eMAbAUkduWjbzMRiDCSjomQ3vCPR6k1",
  "key30": "4xsB9HUL9pCEW8nscZPhmkS6SZho4qgTjS3RNvPwtSCcmoXsbbhroatz3tA4UCYMq4VJtsHrfgu4Aq32FpALdnJn",
  "key31": "3razodphSkjYrjDRg264ft2hcGTfhraWsGiYU9BY1dVn2FF9sVKtyGr5fugwrQtypD1KoEtcejcQ8YioRUMgSFv7",
  "key32": "eqdXpbhu44aUrXe39cKv6AH4HCcdYjpLKypxy9eTNfhig7GUnXVuADrFN3UEakUPrkSzgAdW4Nc39nkRqhUQAVf",
  "key33": "8AEPUhrbNa8suRhXLMA2noLHth3P5XbYTHygbmcGv2VbdUZUpcLS6MFmHSqVVVCNcK7mtTq1Se4JPYHX2MV3yzX",
  "key34": "58xZbP8ahaGG8YKoak8By3DxABbWNyQvZ7ZqrALjQYvWe5iThu2YS3w6XPF9xRZxNuvKNFPoCjnnVhpG6uW6VVSV"
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
