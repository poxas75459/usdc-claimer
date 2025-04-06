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
    "29zTAt5vQc5FUe6dah2eT1n2oiCUib3sLL6R84hhc5z96zUfhy28thRYK3Ryf4uh2UPws1pSBzMRrZNbK4gXU7eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rs1K7zibRKy4qWcCTNqtqYc5skJmrCact58cqh4TLFxd3dUZVCKieHozew5q6Dtqc9bguuSdjPisLxYMjKut3ph",
  "key1": "2WJggCKQmWqoEGg73nxutvDvAhFrpgAqGtUwh7jUshYUUkLGAjiEzbAMATMQkaLEEYHCKSABdWnepGEZhZixdP9Y",
  "key2": "3Mpfrx7EJrDyF8FQeuCSn6qyWm7gHBbC9M7fVhqznBFBE4UDCnQwRU5cpTK5ZzXA7BBf7Gu8P1imjfWtSimDrDHC",
  "key3": "4rhZj6KwEh8KEUVHjvkjMphSZfmXL9abC1JxcPLuTu1SHxtmKhUmm2ikuB5283c8WrdSRv9qb1yxhHbYvDJfzqpx",
  "key4": "4a3cZrDrVh67RY55W5KZRjmd1cHJDBDdwTusRwKVrwD78iN4d3qKpChubDBaHudFE7psKYxvF7w83vYTZ5Mhs8ts",
  "key5": "3yFQdN59onzfSPA9B2RcQez68LGmjqDBeH7mCPVs8bFomAaMTKsz8wFan8D87VSsppneK4LxGhzYuWWxuxGGeKzf",
  "key6": "3YHRjrXrzJ1LJoKG35kxWUA4gm81Po3dee4APp2mbD7mi87rhX51RQC2WGhG3CfrXdB4tharHBEw1G3fHW8e9tSL",
  "key7": "3ezEF2CP1auiFaGzReRfJZ3K4whUAhkbczDv7aY1m5LhPsoSfHCEU8P64QM6zxkTguKum4PoqgqJ5F4Ktunz7TQZ",
  "key8": "4J2KzZ4w2dydqBC2a2nnXRG6BAdYmRGZsWRX2b7jR29CKQkpscYnVUMPowPqYHrWtCm2uJKPvNEep72b5Mhige3j",
  "key9": "2MbTWGCLV1teC7w2wzuLGXrAwBq2v7WY7Nn52kjJErcAqU4gFrdPX1GqocN1Xi8A51tkGhfGbBhQdSLDDdaPPKCT",
  "key10": "5Ti7vuRLojKjLHhUeu7KFkFppq1VuiGoUf4DRT9rZpr5kBq99U1kuYRPdFenkdwja5QxWbea6JNYKJGF6CMb3dU7",
  "key11": "4Mg85J3dR2KwCktfzBeHH2yAAUjN2dDp1rfxigCYVLMPiGTahmP9VfxqizFdFQD6E19K6hjjMY4NcRaNmqBCqTZ",
  "key12": "4s94Q5bUw7JeiuPo7aXtWEPiF6AYXg5qBm9USpXNvuV7FU22AMRYL17fY5tsmkyQ3h7iwzC9xPjfu2Z46QhtnvnA",
  "key13": "3d7SMNb7z5ai1bzLQX2zgwMqtSiViSvHroSgmqS5KbkS9fkGFKUxgDffBqHL9KaEL8ftB4E9DYVyWii6faABX3id",
  "key14": "2TXEcXXEZJweUPAxGTMtz69hH5bVhia26tXb4To2kAM45SNPUrj2A1PYr7p8MpZov7aYRb78cyh4PaQ1xrCDrwVR",
  "key15": "4SqE4McKQ9UheTX3w7JTD8kKt9ivoVMrjMp17iW7f6e3x76jg2fiPN29vBjHUevH5B8vmUZmbJiWs2URRGTeXhMh",
  "key16": "4D9ku4gCBEJWvCKpuaV3byXP8dyMnfQvbCcXAm2qxSgLZ5azGCkQez4So3dH7u5QyDsZ7fDW5evqxh97MRXd4pUj",
  "key17": "21AmHTsf2BMuL9UH7Zood7dRtt997aq7z63mvVc3YjZ2Hf6VCkHTVAxdcwsgwNqQZs4yGK2Uqcn2Bvsv49y6R43N",
  "key18": "2VrdPwPx36FHnM2CR4wcbbySWkP8BCvCNpFFwRiBZfVyFs2LtepiZnLUWfiX76aME3SnhwxyqBbNQ3tXjztQJijo",
  "key19": "gzeuzjzKq84ysfJTAEnwgAdTkvjzEH7LR8SbuAU33nv3bothGqHDypToTjzr5ZXjo2KaCJ7txkUp7W1c83ddNFN",
  "key20": "25iqRdnPzA9fJCoMiVRGAma8Bnp2JomNUkFWYNkJRjtaKYeQcruWFrrRrFFRkhuCMJKEsyCB6xbkMgrXPhmCT2X3",
  "key21": "5NjgMhdj24gGRxS86giwPhu2WfDsYn7Vafsmt4UyWcLtGYKkGz5JSTUhybfwgM7CmpBycKPJhCvA1RVkibBZDcHB",
  "key22": "3LdqcpLJ4ditqrat7NpvpJFndTiVrFvStGTXzAHkz5eui7mW9y2QPPC5y1pAryURLwdjpYXhQaBiVEjNrwMb8cQp",
  "key23": "LqhTwPXGTZhvJSvUVFToqsguvCEJSLmt9xvjRS7wiPmGY1pBwWG9mYCN8sJm7EY5SQqB8RaaEyKuqb4J35YCzKk",
  "key24": "4bXwSDBKWnqoK6s182xE4gqdKqVhPQCvzy5qeqDDNMojbBEtMB8NoRTJqb9Tb8caWmS4CmZ8CxUayB4F5KtmE2hd"
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
