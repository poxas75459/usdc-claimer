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
    "3xeCLeVDx4Dt5oyiyw6FH7aXQFAr4SpctjdkwVUAkANagpihq6UDqUq8N9PvyVSVPmRxP594LDxECm3uoN4W1tEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WBHGwWkm6EQYTtvmXznJHPV2ZfPjrgE3Zir2PbULXzn7y3skkSLfRa8KYjkathromCNCHBPYnJNieQUgt3MjPfw",
  "key1": "3RvnNehsedr6DEVijujjaoVuieYxQKB6v3spVDL9v34wjwrxZMJP8m5krL4B1PyqmmeKLeJ6V2GrxttsumLxxTxF",
  "key2": "yb9FWH3B7u6Y67UaxMkanCy2v1uXXLhHv2Ng7fAs7RpDjmFQgyLwDKNj7F2K4smcSrR8GoBsFnfsLQzbtQN2z8M",
  "key3": "5Xd5GKbqAfXRJ8PAtC82dJ2QS6gCaz93ViYwD26az6qGhFMbuXF3An8nmXU5RzNZRBCkb1nuVoNSNF9fBJUAQ1FP",
  "key4": "47BhxpX4mGbiFkWrfB4cUDxUndWS4s8K9vjVtmG7c5T1BTidaUTA1HSPsnKzaZHYmJbtKqPDjuiFqjSMUsXwTBFT",
  "key5": "4fekrNvZbSetd4pRADSUKkXJ7nCwSh5e9M8m3Xs53E9AasZByLyAoxBYgNqjkg2Pu32SuKuesVWRpZK3YMGepfyr",
  "key6": "2GqkEZpZibEShf7ejSfoZsGwhbKuwLDyuetiKxNsZnqQMNxCLJ712AGVRaSkGke7eNGhpzb79JjQMX9JV1xKsEGt",
  "key7": "AMw5R5rj7AE9Uc6Ab97vqAj2nkpLzfHxEuFTRqKiqZ5GDVvQaEmNj8A5pczQ6Uj11xv7ADZcWjCgno93dTAipw2",
  "key8": "2EiCoSCj86WtSQKzmcRvoCFsQneuYCU1kbJCcFkta18tWzWHm5JxCqPZjzoK2Y86a9moDwf9Fuut3fqRKo23GSvW",
  "key9": "5BiKgHQZRZqc8osspwDosbS6ck6rN9hmSbnYZqa88W2HuQCmMWsEGo8JpTceR2tbExPdBGZn6367Z8boYxrsAnRo",
  "key10": "5nhwBkrwAF3zybQcjWckaoD9iP3iQ97ePdkQvBMSWcL6q2dFYp8yQtdXG6z4HdYzALJPhKFbkqxKWdwGSjkWjYPR",
  "key11": "MPWEzXHab9oJ2qtWSDziE217SywUib4w6fZ7rk8xKCt1RUNYpuSaFJVftxxDKpM15b1LZvinWQm4nA4jacPNmj7",
  "key12": "3mjodJKvQh9CvHYGJT1UszmTWcfPGG53JrzQ1SBt62CTSzUpJybMMjoHvRfRJGkRuDujeum5TbXrJ7YfbmnFEjNQ",
  "key13": "ybN1uYdC82VdEJBx1iv97ubWfjEAqBwxxKgvGJUhJEEyZL2fWw2nVFy6BpG6nW1ae7mjrcAvayFpr8DZaq6CtaS",
  "key14": "3DGtQi4iFkc1dAueXL2K1LmSkdmne4p1YfP2GPjB7HkRLygN39T1mcJcBuSPTGAbFbSwww1stE4AHEb7ovmhozjq",
  "key15": "MJyXm6JdeyUfcMjHLZyZxWkKStWwRjXwQpeEnvtLwZfanEhQzGhdpeZRfiTRti5nxBwRW4K2UDbVivhwtyhRWfb",
  "key16": "21GkRMXfjkjujZDqSWZakn3i87rEr42v3SUNetRyWEP1cMFTEkoBofjsb2e8yHieDY7qtiCvvS8i7qAvFKunpTiA",
  "key17": "5D2hz34sPcerEmyEd8toY1nwPitLcqL4GrBMSNYV99aU16V5jgvYFdfM4paSTGNwtSvStP5M2EzZ5nbu3uaGQBek",
  "key18": "5dVyDwbEtwADFrUyoehNnjU376hSxZSmhPtKU4vS6AMcZUHAKTaHJ1MGZVq4ZGNfYAoHK87CnpcnShYbwdYeF9ZF",
  "key19": "nTpNGW6BJ2ktFP3SUQpwdpsAvHZbQFose8m1Jq9AwDghLiVcuwiinWvVvxXfprxXRQXX13V8avzoaAALs2GadtD",
  "key20": "4qPndSVmWKiptgVDWW2M3HU753Q3tcM9mS8dFhHVb1LbSSU9sNUAqLMQdXaY85DxMg51gWPT2JaXDXs9vJfZdUWq",
  "key21": "5fWeNEwZDLfoLNSB34nz2dzjmp8UwQ9k2bSVEiu9ZebFXPNgUn3gB2Uhvgv3pmwAMxacsgrWYhCCUBw8H7fMuVML",
  "key22": "5279HiQESxZeHeuMsbgTiNAjmrvtuiyb6XP687Y2cnx5dWrhsCuHV1RdaRSog7dGMpLkjzziz3xxBJospscmwR18",
  "key23": "2q1ewWhs4ubkwwBaoin63LcdqocwVfWpQp9VTh5XvU8tomnZx2XgXj9KdRwipb1yU3R9LHUbwRRYfiBnTv4NRBXA",
  "key24": "3y6VsP8hTD7ViNhSVLkgv2gEsuRMTWFLm6c2mZSjmp9b22d732vxTSsqbv1Fe7RkVwEBZqHMBpXqF3oFBpRdnaan",
  "key25": "3tkYewxkPVb5TwJNzVqsUU6emyyb5m2tWhWVVYetkqyQDb8rpS9hnMD57gyuT7WEVp1vPEpdJ3U1xMJ755WEQto4"
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
