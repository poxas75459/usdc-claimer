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
    "4bG2nx2Gzyc1w14FzqvEwskZdLzEk21eM3sq6Xo26YykTmVBdWtpjdi7WQ1Ypsr6e3tBU9JZA5wSPCtThvZRAKEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QxrRmn4NaieS6sxtmabNdoprXUS9Y73vzYaKGkSBq8NsNDrVttWH4T4F1exxEkjm94dguMHcWLnvKsG38jB7WPM",
  "key1": "3N8uPsY66dBKAWhMVn667pH7kHBsS3BRVtDUe8p7Aocrg4yDfFS8fd7XNiQwuCL9TsSvFVxe9Qpi8Mco7T2xQYuL",
  "key2": "4PDsgTuzp51MTSj9wiMd9tyR7GjUyTGeARUYKaRMkQnYREP3DKqxmEM5C7JCmovSh5TgsC1VthH8j6rcwXBMYjJM",
  "key3": "4bL8JHdi28fJg7Kb7qC13cq9D3Bu8oGva1xHLryZJZwdo7sWUTdBXvuyrNLXRoaP5H9Xdmbhp8vhk5ApWa1czMg3",
  "key4": "3fUrBvMSJJ9L3epPyXWYP5Fmvbj7W6dckh6CNmTM2b6RtogxCuWFde5MQkAkdi2FauScNtH2gjiLjmgLbbTDBNJt",
  "key5": "3P7JBgWJ1P9jDWEEwLC1aUCVjcK9bmUGAYdSYQMhEmuTGbAMQRHVFUxhnbHZqEQMjM5wYjvZPY9nMQmL9yLWRFRy",
  "key6": "3tZi2sj6WZZ8sfNMz8vrb272FDJAEwDRHKMPVu4XjKL8t2vsiqGhPJqmQR1sVGSnJVh9n8ttnvT4U9i2iEHsnKzS",
  "key7": "475E84TjjrM9CaAEc1hRtLowpSJshnmRKWwNnSBZ5ZSpUZ2fZaoTUgV3VFkaMyBcXku39S4auqeSWSVJLJbnGVfz",
  "key8": "4NpN2CdXPeqaJnF5qEqq48uhGfPHgyh39kJm1gYDZxeHs9n6Vquw4k4b42zWLtytoCKxgx1qxLMazhewUDN7W8hC",
  "key9": "5E7cgWvcEaNK55QKd8qGveraSxyuMCvGkkGWCD3rvcBVk5hYG8BaUfLB6XvwRoWWfhmzc1QfNbaTazKfEXo8VUMY",
  "key10": "2wY4fywQdAXEFcPFxf8TQH4eYVtmz4CXQoQbeVuTGnttjwVCSN9qduS53DJxj7etu8y256xLWmJzR4v2Fhi5Bwpg",
  "key11": "5EKKN6HUAZ9Bdo3RMpFiUXRwi9mySTFRterKV4EiixucUMUVsfd1ZXxRioPq26U5S41D19yHA1oS9423SKpws7wU",
  "key12": "AXeKeBJCFaQXj8k4cVpXqtULAtQYYKjxwQgKoebFauaHPF7uXaCz98kXbezyNMcdBYD36SfrbjfXCTGqNUnVag7",
  "key13": "4hKQLa3aEde2Sh55DfAubA5oU6q1QNeKSAxX7ntyWqPyCis5U2mYX2KZGo1oHJ3DgN7ZTainEeow4Z3m5HVopD8Y",
  "key14": "SAi2dGoJy7xVEbBN11bo2MSLxrFDzM718V7KamkR3An3XhzgrArgmBGncxRBt5v525VcKbzXnV7ZxjkNzHH8T3t",
  "key15": "476bh17i3czj194DDxTpsDK3hEJPuxofVV34LCuoYjCJitgFTU8Bpcqi99rFdUBiMdz1VKgr4SXBSoiHLiW5L8ts",
  "key16": "3ktKS2x5dE34zFTUivH8cLGzyYF8MLkq7VrxToW3YpVVKsyqbujxvibGSt2Yrhvj5BYbaF5G6rAaaJ3pccFtMxZg",
  "key17": "4P2Ar34FUKmpJtL4ShiuGAzAjiSreekEhmW8odaLyTsE9473KinfHduS42AJ2zr5SsP3DCPZUe8WvpgvZRAaWMoE",
  "key18": "55MjifJ4aTx5daVoNx2DXXpgG7YedZRMW6DShJeEFZPR5kZBRgfyvusApGn4264mL2fKFThQXC2fywKEyV4MdBf6",
  "key19": "3jPUc49NzbGtJyWdGHJDr26Wj4cqvhG1864Z3DZyziortV63NJqztUytsKqeCfyb3CPRyxt8fJM6omrQcKLqhaDn",
  "key20": "3xtfV2gKbMV6W5gKio19sKndzHhUsKo6TuXWgza2wQbt4t3sooiJ9QF7fuyJYyDSXoxTT1wxPzLMVVoz73yYYfdD",
  "key21": "42kcYTsMHyV8xCnJgqwGGkqDDxndiWER9nh33pJTs3CD7YBpHSDBqL35TcJst4XMVzD2vfp39Q3hRc1qPSa6R8WS",
  "key22": "4Rn1ZZUcxFwY2pqUZe7H4PVcQxvkP8nnTbbX2173qdW9sgh3zkRQ3syMajgXKz6pxpsAqs27LuQZue26jbfwrVNE",
  "key23": "fuMLzbadJeNys1Min5FanjyBJUkPsteoPi1ezdHM469EL7t7Ths1zC8tRXNNEojnUNJCzbQUwHyk5ZhSeYpDqTe",
  "key24": "2p9n8R7a7zEuQPJWwDnsiQYtFx2uwnodXueoqkodG9onbdZ5Zz7SuGDoi1LMhgJgMcmExQjQoRT4aLnn3L9Cj6H6"
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
