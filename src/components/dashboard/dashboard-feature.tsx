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
    "3UeZb6yu1UFXZ84R9eDACC7BLyY2vdRStqFRvzD4LEGhY3WWYNG5j7ipr4JfXWgMkr5JNXmMik92KWeMRUTX2uzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dLM8i5GiuSfeHUUxgFnkzKxKNjRiVareWB1J4sdoXScqxGt4qnoGewc89ERQVhrsJSHnHD5ckM5y1FokX1GL7SN",
  "key1": "4kAd7LUi7rvbvn7gZXicudAR1TwZ9QMtvRYHijRQQwRgVU8GSUMMcCPDXAN9K633QucEcvtxXHHcEGrP1KN32Yug",
  "key2": "47nstpWbv59SB4kr4mEQh36TczJ4iCbzURGQMUUnqdnbpkDg6ecndCCcEEzkQYAsSAPTMRSyGynYfSvnjHsDyDYD",
  "key3": "5nNnpbZ6uq37Nakx1W9reQJ2Nnm9GqZL2x6RG4H6SvmPjiH1e7Sx2wzk2kfNaq9Gkhzb96J4HNihpSpKpiicjmLe",
  "key4": "3p7ogu3UWHorUZHvNpNpyyGqEBv27tkWLmZWLktAqnYRUcQQavi1gf8LFW5v5JpoftnBGrfPhUKfa6D6tTQaPUUk",
  "key5": "29G19Zv8nSrvnqEiKP9UANSdx5VVPeazgt3e3nLV6MrQYQB7QWPJgwzUg2g9YNz8vw1FDx6s16TN5n3F3GodyAr8",
  "key6": "2rAjp7iVdsAgtxJA4HVkJWmv4qm4jSf5YJPZXEAAiHCWjQQm3dRRfB1WinvFRTnQCRihCcL74QQgPsvz357KAm7M",
  "key7": "3G2M7v3FRommEW1GDvaPcatoe1nznPaDneSUFWsdrvDr8zmJfHYne485oEQSgpMzobCCUgf2SXQAcWd45wKQepDG",
  "key8": "2EugaL5Xg4Xd2RHaBAuxrkRraodPTtPKZVdQirKGR6sTUc6TYMxsCaFDNMujdTwvJ97ngKJM8qVXui4t1Hh6VJMm",
  "key9": "AFB7EN5oXq8SQMXw4ZGiNP2mAyRCezqDf8YW12yncrtHx7osbgSVjcDj3kgLxc68aHxWE63k3HcysdU3XTY8Unk",
  "key10": "3XwYV2Vqf4W9p2Ewry4LbN644yDWLYS9rqJVvEVgAYSEJECmcfFR5USZyFKRp4NJgFYRt73udY9q36gQeD9648sU",
  "key11": "4dMnb7VrEvqRSxTjiEV3rnwbRKGMTzrgmpjQdZ1Kmf5N4GrddEXcEfexjPcYkU3ZnqMBMLrxUPyih8H3R7ZsjsHr",
  "key12": "49uWzE5T6cDiXj8RwKqpjCKVRLMacv3Wwz4MLZUUtawhWQ8Luas7hneN2CsYrp3cfaacQ8jdqx3nrcxfLp9tB1La",
  "key13": "5wpHaAy6EJfz7S8YRCu27F5P9raTNyfpBngQDwJ1Hx2NXHyLqWn8oWvURG9gJ2Bv2y36c6gnnRqL5qwEiYiHjaE9",
  "key14": "2F6sJUwwKtgLGsgnPKrisCN6mQ4ba8PQQkAKmkKsSnjWthhts5LWNLLbqeSfnrsKBPFZkgrq3Z2n4pALx8Ltus7V",
  "key15": "3roohr5cfJSkz4zK4nsY5dKu1bWNqBzFDeVUjbXtasfcZNsz8TTBrhmJCjVqfXHm2HHbjeLEqwQ5UMP31W9baJSF",
  "key16": "4rdsqGYyamVKc5NqyoVPbxvRedy56fvkxanmMDK1k5hRnBHnryzogPwGGXqWZ91GXaq1r4X6qbP5FecNJoQGyM5Z",
  "key17": "2k7pSmdNAjvPpmmDpughLJNNakuBbKMct5ebzUV17oyf3grMius63cM8mAHDT8SjGPqoChnyyDkta5nvKKCirpKw",
  "key18": "5Tonvtf1DmcbP9pBNWKCrNnSZLA4UCY8anigUg97hhih2vAGHADbVFq6mKEDyTfm1XE2NBvDBHnT9suWZ5cafqY4",
  "key19": "2TsBveQF6Xd2nxdkY2MKQCWJmCu3qwUJeBx9SNWK374ZqyDM2QEUd3ywCnkRUytMQPs3GRDDUJWyMM88TnVF9iSZ",
  "key20": "66fvNH1cCVpqBZvmkqrZgXvrr1ujrGZBtkPmTFnyucPRVPi84DNZpJ6t1LyP7aPtzJmZPbkxrzLqZhv1cbgGykmz",
  "key21": "395muuC9Nf1wB81WZSKqKzU84N4ovpNPRByvvWDZnCE4TrQyWTy66y1BTz6durCbs9h3HAsNFdB9rbMDt6bsrPF6",
  "key22": "iqKstA5epNQz4trpLkL2QrMH5RdGmpjfiDeJYNnu4f51qYZBcpTrawJAtBV7uQkfsmJVNEuzvYGbVvi55SpcC1j",
  "key23": "3WsMr5fBswGaDTJf9CyoiVRWsKb5ZTco9BRWD6fx1MtdXSLUHUHpXnzZ7QTb78JcWqrxcMGnwrHwmMxNAEdWAhrY",
  "key24": "4jS19KRcxmaJrTLq4zV64itU1HP8pBqBjMKHkudk4d1YYv4AHZJEkxjHXCMVtgNAKrZVj2DF8n3BMJ1dDnL7B9d6"
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
