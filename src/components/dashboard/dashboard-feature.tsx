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
    "3e93Q5iMt4kzdfkCqNTqJQzoYn2XaiT3HAbaHG7Q8XniKvZpGQE52PLPv4J7QCADDhjE8XN6UP3TvDuSWbw3EHZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RdthmmW4yvFGaoQqQUzQjzR8HzHbGKTv4KkvzYnViaBdkdb1XhmT9PDKKRbRdnzg8rLZv8pZDcubbA5ZLYEQHVu",
  "key1": "LAeTK99xRPYPCZPAhK57cnbZay5JxZ6HCLiKVqYguEnYoLdvSRCdtwjnKrbrKV1KD64Cw7r4zJwfDEvDTid2UZt",
  "key2": "2sVjv8PJatBdBB2rvo9BiPjLNpBNBxvSGbe4aUoSCXKZsBN3QsQiyGu5bHA5TkCYKxJiGbX17HRxEm2DNV479B6d",
  "key3": "LgNBogcHbzCTANbUpK3zCKHqAhmsZu1EnNyUZrQ1sL4YZpMBt1roeGppovXViDZ4pFBoPnjdJUo2Zx3AZeJfBBA",
  "key4": "24Ybqp2gnURZSzzDCdcd5Nju4E9rZcSEAFqVaD41C27mgPZqWT6vTvptyZFzxqqdgytz5mc4zRn2KWiuMoAsRpHc",
  "key5": "5rAY8K9zE38wRv1oyrwPhvbnVDXSTt3r6cvPDRLn5YFxuAWAMqERLBFNHn9WjHbUx9H3ss44QDtCX9GiiCDtRXg6",
  "key6": "2bjW7jnykofXgJRUP8X3jGdYMd1kv37tUft77F5Df3TYxf8FAU33YTQ7fYCoRFyNpvtXEVEvvXp4j39KXmqMBR4D",
  "key7": "66nyD1V9EjECvE6nKmqdH9n3r3J7AaBTK2AjppuuNGVTtvmd216PnQByra76HsNrDhyuHYMYNgwtsfSSfLv4PkLc",
  "key8": "4jbmKWz7jpc4JMMW8hMWhX3yDepEHF9ESvccbF19zJEaxJsGY1ucbR8KkLMLtz155muxgTE1kZGvz4ipmUGECPAb",
  "key9": "5yoDMgiNiwKmJ14xwu9uRLfCZ88yxTqsCcaf79jDsJbBDDtHcKwxQuVqumN9QBuhLxcyJFftwroXe1y5ihsPUzEZ",
  "key10": "49JWoKCJKxpkRAGZPjH1tyhxx5zPbvytCbLwRtdPy6zbmQ89wQ2kvVcb5jL1oevNfXkkmmknz5pUCcKoMnS4WoRX",
  "key11": "4wmZeMDFpLjqJ4R7vLdSrgFpv9bMetmhm95NPSTs7WdPEDtwvQ8v57aAScyt2u9BcUj3MLitTuQDDCCVPor5oMKr",
  "key12": "4MznuUFNTY2CugV7U2dpoc5EoRjTKQrb95rGmnp5hKhqtjNohnmWnJbCW5LKxMNQawoXz7K2gBSVBuhDv8YVMncB",
  "key13": "5rcASEr9g1MAQDJfhdrmMVRri36znzT4NxhARsCEXAbqkMWx3cFSWkN42aX93kZrL6hQxFTCWW4cVQHkr6dWZKwz",
  "key14": "v4Ez2YNK4BiSr4imziKPU9PSyofiMGLCBtA5B5TEPTcbDN9Sdu7XNKJgkfwuvzDUw3t1jauRnZLgWT2ejh4asR3",
  "key15": "3A8rZMArmqqdimDY3SFaVdqjFqb3LX51BNXRacV8m9T1j2Q93e3AsQx2tYp9fGyyNPQgjgAYRL7sPKQmfUPMUrMS",
  "key16": "3q26dVr7C1x31uBLTj1aUZk6DsvCCUxnF9nZPhumDzgNUpne3VFNDrzEB9nstqdcMQFCbpzcU2EH7EJ4AuUo4zUt",
  "key17": "3M8qHzYSuVd6R9wME47yAXNWRBwD4TPRLr4ggmQ9SLZ7hZZ8FPBp6yYMvEZDdWQqvb1YTs52ap9kG3Bs64r7Hnqk",
  "key18": "5KW6QAg2hbunmwfHgNLR9QxN8PW2jGaS9X3RK86Xz7e8iiJST7Jf8Apo8K5fRS3HGFy348fFuxNfds5vukZiwNXh",
  "key19": "5wFH4bwy28vBdFsoBNRKuGVzMYQX9G9V4XgnoPEuTYvGSwdYHWDRMQ4G6DFGna6NXEL768svoXVpTLgxCzVMyYCE",
  "key20": "5upyR1Zj83dSyJSZh5cakRWgfGuhtWpTGjtSmkUxgMiBrU6aSvy3YiWHhuSSLATizkmanjMfk3Q1MPUkSvhUMCkC",
  "key21": "2WkumjJCMZ3Kb5aiobMbBrXTD1RcJjqegbyiAT3t772ajmePc4Ep7qf8HAQVQ13qpJstZNA37vvMk2Vbc95RZPog",
  "key22": "454tjNGxVECRoiu7cgLFacRDEC3bWjFz985oaSbRG4iBNANprt9V2qap3yQ3ycKY1UtBDeeXTF6xufUyCc86fJd2",
  "key23": "3gDFs28GK9419hHVQWenE1Y4bRM8NE2bTsi6MCGPojVrjQeQfYt52mjmDFq4vv716cKoYq8faPR8ZQuYpzWcyhmX",
  "key24": "9tVR4L1vHCtHzFYbrAs1iPSTxhpsWV8b1yrXMXNY4jkHr6dH72txGw1DNrQkGZLzASUvTHdYbCTrNXiYsu9phmp",
  "key25": "4DRtSvE1j1j62XvQcGycDLcCEn9pcr88WWX8CywkAwhoW4U3GrLf6R9MLGddJFAV5W57Pw5KHpoVge1mtmjQ4ZpL",
  "key26": "5eCNRrWeoxCTyaWVPAQ3YUjpE1T99uJ9ABAJsbDkbpX3RfM7Ba1EYpfhuZTQCNpgXAdhsV8rrFbnHQd94MuY9h8",
  "key27": "2Har93b5QTQPrkNaWfV1xKRjJcRqi6DDk5tkeyQyaaHzwScHZXMToFtMZr7TWDYYXZW2fKwvN1z3vNscneQZnZWu",
  "key28": "2ve5jtpehzvNW4UPcJ212cm4CsyXN2mDhsZphzEHUssotjaVJG1mtiqxXMr3rnRWUqRYy1L63zAhL7scvXQ5PQMo",
  "key29": "3YHpoRxp8rkjH7tiYqqqEnfRwUEwxkwhR4JyzQ7BJs7C9gL4E8rjuqPfZgyKdvtNwgfrpRo1oHQapHdquUz6o9mJ",
  "key30": "5zFbyQdsdVckqs8sNxMJhpPa1pCYn5wHsxGi8PLoegWJs1K4DQrhRSn5rS27dJsTirvZus99HATPanAfHRK55W6X"
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
