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
    "xFRm28nXgcqooYiFpdkoDNK2P2f7hZDtkR57k86GJxSs3nE5QgMkAGxLSHadqham8ppvruCoWPJJhogwx9rx5Gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZzLQNc1bWfiEJ7UsEJCbuV5mVTPquAuaQPLSBQ6GVfitf3ivNR5AnMxfBw5QA3nPi9NY8sX3Mx1kYoToDgwLyDB",
  "key1": "3qbJhSi6WzxR8qY13UeDCCyjfcLLpR6XmNXeAQVXK4HsTNByszLkNXUt2deejLoRUjAhAdjQsJA7ugRhFkXU8F42",
  "key2": "5NHYMyBKpr4rSE8RWTh5hMDifTbKGNMjD5mm8WQXqdorzgeJYAy3vqCJqCLmsxV2oDAizPspGdi3CC7SCWMmXizY",
  "key3": "2XKfqHvjYgBhTCw1ibSgAxAuDfkUg9WazbUzVBJ9FiMUumr8gx6cDwN9dfBPtLZTrMSt6vEdFVUiNGhQ4mv2Fpxp",
  "key4": "5xsDdHbupzhti8MeLeEiP4aN6pVVS5w4nc3wBLbtKeSmqiF8QT7GYK8pp8kUeY1po3i7mdFVkMqd7jpRowgPUXs1",
  "key5": "EtD8TWbUVN5K7EuoYhPdKVJpn87LBwfi5ZfsN9N6d4uUWHbneCU8fBioZ76iK6kvXpB7xdKzbK91EiqpaHZNafu",
  "key6": "4hCiypybHtFRDarGsvaZ1ocCGHr1fnxhhVZWa4RsAcmJiu4psorZnRKM9NBhN91qsKvZA9PnYyRccDRfXQzzmM3B",
  "key7": "4zkw76ifeayXmHTP8P4BxgexWLQgQpyEcX3KKfYdNwCy8ZuRVYqQvd18pis6tE6J3YK8Pv9kQQQKCLN4TJppY8dP",
  "key8": "5zhWqmyG6JQb9ZGqQLwbVMzFnmMvMseSysuQgchGZN7dNTfxT2p9ARMQkV8pxxfsMQm3jhPFobpPRffUmwE1rbv1",
  "key9": "5HErTHas9owV965JrkPKYdK5Syx8bKkks6F9FBbzhgWhWVjQUW12c2nqcEKPwRC8Du7jbcurkxzfzp65MHYqsyFZ",
  "key10": "53xMZX3jD1CmsqZTPbWn7a4swXhFTnsUzMzJe9TiHpEdwbWJJHSfgRmCUb5qn8R7iAsbZNPiqSFxGuN4DnZBpHwL",
  "key11": "DxZnVaZRmuskMNhzS23YmDTmCPyq6YGPyU8Y2vo893FqPawJYJPmbpPPUAtiFo2GM44KUCinMt8yHW1DiNRTPDa",
  "key12": "2mzgHeTCMsHWcYtdbB5x4beRaC29w5ygedE3z2p8p6tUHj8YWnUCD9QPffkig6JXqMf8qisJEozAGms6f8LNWsJP",
  "key13": "3ULydSmZqqKNQrHMCNe4K6nzVGPfKH13ZSGsNL8JioXSbxHcZJkYoZfpDf7H8NJwnrq12ZxtaRESgoqqwzDvGYK",
  "key14": "5RGhcsSrbHbCCQjLuNSqL1Tfa7HoAcpHDgczHDF2Q2D4DmdPitw8ooyurMmSzdV3DTLmQTwroSqmZLmCyutfzyKe",
  "key15": "45h8ykmY7Q3idbDszzXUwykKJejxxgwAFN8YL411nVCUxhNqybdsoP5gkVwPNtVyrpRJihvwqihkjhDhQdPDaGZq",
  "key16": "32T1pEtGmVESE3FEAtKtBRtYuKmXFtU7GnN4xQ1AuvPYC4x9kiMAcfBYxg66mJe8bXS57w4eKzMY7KizWyJNHvG6",
  "key17": "R1vRAmCQLtRP8WnLJr7yhTgwThMxwNYZSDfsv88Kb38yQ3fXawnhW3rVDRUV3BrZqNwpcV7dyT8GSJ8uakwksGa",
  "key18": "3S3UQUWpMcs1z4JyKTo5VjJv5fSC11tuTXFWNCuonYkRBpyFPNTAuwjGi1Gb8sQUj8sXNYrNNaVVUhjNuHXNaBTR",
  "key19": "47pABqnreJf8KkWZKtWUSA9bn1bLeLUra6M9626C4uFSDL3g6nLgxuz3Gy3BaWZM7yqK4pVd8oFYmfhWxnEsqD12",
  "key20": "3aMy2hoC6KLeLgpDXjBMA4jXoan2YAv9rsxamfUdUpWaMBCCik7yJAaRTp2udhHbVSQnnnr6JgJbAak2nceq4Sn8",
  "key21": "JgwELNHRcZEATvPhK3y8WasnQfK7NNozrGGUF67kJvSCrhpFr67myn3cuHRnCZ9H6LC1pDXFMBuUbyLZYhcJPVG",
  "key22": "ffEnSospkLN9pVErBDMJZoaEMWF3kJ4p8D4uCxrdQps95to3yngUR3T3cZ157mAS3tDZEjmQACSRtBDjfB6umk9",
  "key23": "4P7GejWpjKKEYvtWd3CLVW5fEhxHHXjGc4NHYDT1RqTYPQN3w9eRnFSNesj3ogjXcWKGhnW8pp76R66MM9AAx8b4",
  "key24": "35uqaki8hVqvYxa3XJ5bhqMTVXkQfYoGrjtF4VEKeyHSms8P2uuSxUTamUzT2NBY3mKnjpLMsNo36hy9Yh4hCPz7"
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
