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
    "52Sgt27nsmdVDte7FUWKu2Uz8YiZHC2K3oc42nWCND66gpTLwHUGJc6KvjRpF2MHzfLSNhswYnmK1P1evgmFYw7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HddGyqJeWHVaEkAocd8YQ3zxbAC318kXRwNaFza7C4x4KnCJuhUtqSizsk9WYevk2HdkXmAibkQwcUvBXjRs5ys",
  "key1": "2kFFhEve73CUgMKGWHZruutgoLXRLYm7tXcGEiDXsGAy577jcTah4T5ZmvPsCeF1iPe1p7yAzHATegunMuLjj8rp",
  "key2": "5bxWnhhuw1cdMN87Tm1BsQpB78TPDLiN4wawbLeCQRHn59euaa2ssXpcjVPERDwrRyNMyTzbbQaXp6raxstRRMm4",
  "key3": "2rAdFkcUatpT2DzBsNJUMiojJaQ7CtDNixkUoFwkZRg92iQ8qw36QDCCtLnx6tsZeF23Q8JTEyEdp4dpEF6yGUrc",
  "key4": "4fzMri8YYNtodCsHFGtXb7EH28L3yZtyLpEtidKygWPKxLiL8gwS6Xb27byJ8WtytsK7rwmeYCh5etQosE49Same",
  "key5": "2cKGMywbf9LsKzxLmbM2c8GFgMTcckcXq9CMmEZCB3C1NcBdJTTwTvuGypuNvaC7nhEKz6FYr4WCFVs2gLBGYkPt",
  "key6": "g5x53TKw1Q8XdVdoGSeuewp9yfJ8Qa7xWcJmRTiNPVgddvTqkXoEZR1ymgjHNr3gAWpUfvYwm2BxaZtPWcsu6Gg",
  "key7": "3DJvqYdJY7BRBA2bdLzSPoPkMY2p3qahnrZqyepH3sYgw5nE8CL2pZqnb88qZcv2DbMWoPDngKEeZM6ErWw1QTgC",
  "key8": "1rtC7RTZRH4gqhrK1esmBYBt9jhwMY8zeq4dpkbVqpGfyMQn2rsgyubdautKjtLNzrvU7e13wHmF1AM4RNMc6st",
  "key9": "3BCPJwyoSBKQccciBaipaKBN6uEvQJd9D5Ego4XS4sKZMXWVA7kgmTotbDbFRq7r6wfpJEahaKn9SuWNgQocNTiR",
  "key10": "3g7SBnex1PYDTBtPHFnHAZfJmAZQ57EDoBE3U1RKjbzQk2UvjirRCqdWsowvbgsFsymgdYAHKnmn2uyRxpK8j65h",
  "key11": "21kMH1BWUuCBtxDiZbCt6sY6MhUpjheBxsLYgPRvx4zgv7XQeeu3xSuFTJe9uCFEk3QVBxMd6T1DZEAAdGzSqmiH",
  "key12": "4dFxYgVp82qMx9QX2qo6rzzCZJL2uxnZmzMMejGVgqsCQqPU4oXbPTCkHiAgaHaiiNeShvbaMEK4udQtPsMuXhMb",
  "key13": "35xnxPujH4gcajWbpJZdf3EqPqiKxMBNtnKWm2SwJaYchFjaBLXUBbYmiDFY2cQfqMrZ2ZG1Y6qYNaHwvnocMfH5",
  "key14": "3YBYoCWV2kv4aiXCxF6cs5tJgWJ4Riz7iRoifqapgPaDQj98dcbe8KSe3JU9gbkzJMYj2uVU6ES2RoUCuyq64we3",
  "key15": "33EyPb36rpvfRyEsNUoQvaaCEUro9NwgbF2hUZrRt4ar4DJtuxqnBYzpjuvTREg7gjioEJ7JPcaSEtxnE5cSfP5f",
  "key16": "42SbSiYxT4ZtzfqDtVKuxA1GPqjuWZzwur67MQwZWvZu4eq8Qow7aoAtQkSoq1epEGHbRPdG3eQEw76GWF51iNUx",
  "key17": "2ioQizye3VGoNYoDYTLyYxd3rBbrfjFE4LbuQFVrg4adghXSNZu5fHetvcD8cqbURL69fFk4xTH2knEpCs9yFAi9",
  "key18": "3mkHoyCF5cPDuR7AVDVYizqk9p16yoFmJ5Nd8ybgoE9QDWGgqZKqNGf8jzQq7urqxiFkUHH8TJsZYmjVNzfhtVQM",
  "key19": "2AnTDHT8Bgh5fnjEuYFBBEQM3GLYNAAUbrDok1k6qNKHWpQeyyXXCx2s79X8ins3rkLVJkjzP66qWJi3raYguGCc",
  "key20": "4Btxm6AwhGiyk77kNPCtXv3mhCWRPR6H96qBGcxX2A6GbxLBjHbCqhXqCjsmVFxz2vtmxR1ymQbQKVQpwmQx69HF",
  "key21": "5FHn9btvwM6Pq2E5iGZaEX1HekZtDT6UfS4xyGrzspb8gzMXzJjbWAy6mh5J3NB2pLbDFEQcNnNEZb43kpVKaRrG",
  "key22": "54dEU9Cwa2zC5SF7wgBAKRRePg3bCpFWGi3FXWFvvezEM2wmUUtnBq4GVA8a9JYdBmRpTDVpcJmGCXkm2zSX1Hrr",
  "key23": "Mgos6MyeJs6oDXizH13iFnshuXpsn1Qhr2TjvPNTeieA1z5vH5pzKLs8tCWMogmk3XkpuxbvTcbUEp7eZ6NciQ3",
  "key24": "5ZsYv5rnAtS46EqDMhuA8AQHgecTxqEtSLH1BRoAY4qf99vrVq6fVxPeV3JpJDyH5sExmvCrMxTjiPdfikfoN8hK",
  "key25": "3mTDFypUWVjB8SDsS6zpNN6GobhTZWTvvjxRsd7PPrq3fhmuMbmB72kYJkYX7Nt4Q9CKqwgqedVgKvLoKwtvksQh"
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
