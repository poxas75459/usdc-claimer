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
    "3khsKVuFyDpviD4HD4NPCgvRyAQ7sD1A4a8uVh7cK5Kx4rcGftaBMyc9aHMXdcJgCCcx4fogfaRacxVohhYtu6nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ECcsrYcom87jYzjHydLRNkUGHkkz8GrM7nSr9yhEZp7brRrwaMWrxMTmJRPUv11bsiAg6w4S791r9ovcxbVZjbZ",
  "key1": "3T1yuZmmNsLEajuKmWX5n4n1T37ZBCUtwY2dTqyq6PSqpwzvA3aXNj1X9M1NsEtQKw6tGd6HQ5oehwVdMkX4i7NX",
  "key2": "jzJ26sBDFb9Jw4jpUt7iMbwkf4VTrPhk1UYi1NGq5LY92NmRLZ7BdnFZiUdd5mwpmZ5AqvbJm7jH3rXjphEa12z",
  "key3": "2QUV7osEnnCH7tbjGG8PXDjsHgJju6pN4aGobka9iYGKzGNuEVc4kiDH3sC9mLEerVqD892tKTkNid1Z2Qd5wxeC",
  "key4": "5NCuBVSTWeGM3k91RKTts5o2HfX9mxK9eogCNhQK5ZDaA1Ki823aAZH5qgyRUU8fiXEbu6HejjNdiK1jQ3ZqipmV",
  "key5": "4ybDnniSdDpUamcRP5959UPHhemRphSwYa9UJGoPxuKZin7fcBr13c1BK96FNjuFHLDGYmjtD1ivVvRj56QmQbiC",
  "key6": "3X7EUqWWEDsHNwTttt9rkw9LMTuXhjRYjdDtGF435EHBHaKpWULZXSLWL1np71LNrjGUpJowsov2K7iF2d2CFqU6",
  "key7": "3pYR1q2jHj9PRSUBqL9foeFmtevTTMwNTbYPXnyKFbrcZkDXXLS98WAndZkXVdMtrK3nZQB5MCSv5xJinNGeEwme",
  "key8": "4PuBTWBteWWGq76oS9Vs1uFyXWviGcdjV333njCv76vRjbrPySWCcLcyDKxUnnRFqVW5v8GsMnM3dCXEmdtL6ob6",
  "key9": "2KqFsBDr7KKEGBGGgASsfMnJitsb31Ewjaxw8GAQ4DRtVPateENTcCVjbFZVeAhMgT8nTYbBCW6TiDL379oN69x9",
  "key10": "2jJaNS9ocxqUTrkx6NhqnZDtagMAN4dgUCett9X9YyMvJzpT4XtJAzHPmbemPKtu5FggniKK1xmuyfiLR5cHpFLQ",
  "key11": "3UVkLemBU97qGYVj6LLW7Xsxe2UBBFX1DBfdjzg5NbLXtD2wxaLVCp5NZHL9AMzyBSui4DsAXvKvFtYvaK72EoMx",
  "key12": "3s6zySAxzpRuc5AEY3jPzBY8zTyBiLvNR9bBBUkiiRb1w2zEL2cKGCgoZiDLYNBzrQMmw4voQEbeSbMc8v7JGe5P",
  "key13": "5UH2Bg2SViAZEaoUKUJuZw6JeyYMWESCGJmpTuAz19j88xizZ9WyJs1V6R1SBUyFBy1hSou9F5TfLHUMtPeMTDCk",
  "key14": "32qDQqjURiuXzkhpNBXKDRBSiuA1E8P3ydufRixCBCQAvCweHbJ7MhXRnvZXdby7QPemHqYAEg6Pqtp2yS1Dpvfm",
  "key15": "VsKkDZ2nLnWcRopqzr2HXuk18yhRUv8g7RV9FrtLPUbJGZEtf8S83KzReQMfbgqaS5b7eebCSfZ3Yr8s6gmadnm",
  "key16": "25vzBPCxTWesgy1nkrYLMov4BrzCckVaTqBECcQzAyhNUnSFtUtCPSsB6kZe3pfuawQBWTPGfV8iG8XvWFHsm5bk",
  "key17": "2Y5oiR8xHpgy9ho9GUPz3ASzacEsGpRs9BS42xN6YXi7e9XEieup4P9Aei6WsXXUggQiq5Hy21E7hr7ETPPUkCE4",
  "key18": "5VFhrip6vrM8kTkaVSkycRa2RNS1cuuvxbyENw9VNGZonmASwUt2XGAP787kPEgfZvzYzKEda9FC7g6ikj2s7XVX",
  "key19": "5RATNjbTLQjGQTsxhKaC3nJMCz7XVg67yvE51TQytN3qNv8QoqoXzmPxaj4qeFb9AeiorgAvmKcaQpx3rtqVyQSf",
  "key20": "2TnjfPjduHrgNT7ofpRehheZQxSXgwux7nE3hT3MYF35Y48QGtiX7PTZENkJv58dKBdcPXw7FmBdDtmQaPAsPpTK",
  "key21": "4zsG2TosQrWHjxc4LLeT23QpF7Dmi6SgnprwX9KyeaTKChefYDyKEhRXFFhxg5FJ5WZ8aVSBfRMo1ZTAavV1Zzks",
  "key22": "5iRAsmZDPGNMyHzo7paDvqRHtxBqCBqEAX8woYpYXAUscTXP6VjsbUNcXJHPCDK3VfkJVnssyBHnLb6uW6MqvR6s",
  "key23": "A82qT4zarv7abEjXPxBfdnVj1A8SrNRWYLH6xBW5ryKPD8AMb7SVKtMrxfMgWeSXuRuQRNEzWtZEaKQDCewU97p",
  "key24": "TuRnXCaDk9RoedN9XMB6ondh9AcQpEZsj3DzakwFaqvZSYqu8TwrXnVxp3s1EzyyC3YqDn1g1z5gEP2Fv4bzCpE"
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
