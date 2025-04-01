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
    "3HTQZQSy3DnTbhN88DFW4chzAazQcTCQENcayofx4pj4mYji5zJtvGYMW7J1mCtBkdLeHhFNV7829GFSqzuo9bWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j89xRVs6NfePudCatqbjf8kU8FR8XgK8nsVCLDBrkRVL5BbvHNvQq41gnn9GtXpZjKSuowc77NbG3tnHDQ6HCjy",
  "key1": "3DYmuiXuSNE7n32JSTDToEjLekadmetJGsijDScyTKtSaQa2hAnNrXZGKvsiwTZMsMXVdz2oJe1JPBrfGsGap7TF",
  "key2": "4ofnUtcXd6mBBMC6y4thkAkX42YGfTqttzRAUaZtCXp1iKmdy5MSXZdBGZSa8Jfw1iDgS4EKBjaSfibe5nxK6rtX",
  "key3": "43vXvFR4JPZ6voCvqoeQvPVGdirvwYM9erukCVzgMaS7xcFAXskgVoufAQWaJe9WGeBpt5CbijfE8c3ARGNE1u2x",
  "key4": "3woDF2A5XEyMVKWEokJyuXa51phyJM3p53k5yHoE71EMtRT8ovVJS3er8CUt3HpQEAcdLZRHuCMF8HJmi4iJ7xUB",
  "key5": "2KheGP6JpyzAKXzGkzqsJExz8GqhKdKrKCWz8JgpZQ9jjqU5gC9W4mm7jJGo3uTotJJLe8RBxxfpVxHnhE9DGPAR",
  "key6": "2cvq1dS4ueSJ4yEehMqznRBPv9nrURfcJ7kGVC6hKDVxgRyCVsCLiPGsknn2mvDRCA1kGud42E5rS9V4CHEN9bkD",
  "key7": "LEyiQ85WkQ4pW3Z1S441Vwb944psDtsrTHrJYDkrUiGbuKJkmyc5ERjmcSv8ESRLBPnfFJ4jLkd6CN384bQuk5W",
  "key8": "3xa56ADLtjgFfMyjiCPuPqX4b82ekXxgjdDB99WQ92S2W3G9BHjo49ryimGxiyJSVfRugMGhUgBDritZKUNuHAsX",
  "key9": "2BqouhbmjMbpXNr4FZxHHXjRWHfyyUnc2zv92tk29rr9m4A2WuHVf2wt162Bwqn2M2ng3qAvEnr1rPft6TSoQn7y",
  "key10": "529CwGyoiX5CNNGm5bXYUSQoauTLhbD8UiSQz466RgWhE7nQMPb8626dsPhWZK5fdBbPNLLzPuGarARpRp5BZhq3",
  "key11": "vvymYZTTcfiQ2grZigZ2GExVmeJhiJSmSyMABVAhZYfyzX1PJzJVrm1cvaDZHH7m7KvFmqgZGfrTmRftPGAhun5",
  "key12": "3LnNCJHUdpUn1rqUDdBZq3ZqZ4VDQHotKwR8rW6Y9QuvFqVSpfbF6qW6Z5CxnJb6ApeuaqTXgrNyqneQZzsD1T6n",
  "key13": "4NG9fNicPnjjkQADXmttSsNf9G2KnrLggHBhS97W4TaA9hhHTYWgDLw69TLeEn2duLGE9hjZsxBqsrGDFhQS9FYg",
  "key14": "3UAA69EsGV4XSh2V4GTfzpphJDpZDFwBYJAjEiuzpKUVqn6n4FYytX37npTF2drF6bu1zSr6rJVVzemcYxMeCegc",
  "key15": "3aWoawK2YwZ4n2MxdLg5nb8HZA2RZjg7WnRkuqHyAxKJwrsr5ktxU2hfL6VrhxRGrpfqQRYWaZmTt294JHmjvHfx",
  "key16": "2sPDHc3XCqFgT8Y6oZEz1Ak5nTfBCzqqpwVcT5VfPTFMRiT641kZGZGH6EjKPRncAdrGR1rh3HqMKjkunGHcUWbF",
  "key17": "4gAGFvp3NmoYuYxiKfJS85bxf9LZ2ycAyGjzX8UjA2uStMU2UC5zkWYzQhhZhrhs34jB6D38fUagdzeXkiEQX7jZ",
  "key18": "3W4iw3A9koN7Si8VyE1R2ApV6YdxzGh8jdAbWtDFS5NfcnHkskvfGiuRLJSSMuGQxq4Jeqy7ueMuSbRD977hzjvL",
  "key19": "2LJ8vohAK76JCp7B6iv9KfnzCPYxn5tZYuqgcfD7R28UXFLPS6jrQCP5HD4WCZV7J2yk1pgMaPKcYkddYUcGM6jr",
  "key20": "3HqRcXojc4PSfpRdD6mjtg71jzLt1Kfc5hSkm9wHvqowuRRXSiCrr9sfvAqYD1TKWvJvPH1NFBEm4s7q2AwCfnuj",
  "key21": "4zVNTADcneFmKQkVKtpquz2Ryc8AZt8NPAGSQ6mdi3xhLr8QnNE6nazRWB1cpRQDpia1J9CGjQQdZeX2KcYktwVP",
  "key22": "4uu7oMRJacLVP3nx5PL8J9G2AwDivPPCvA1aAZQYei2j7aFzoz1qcHZ1EoWQHp8EjskaKPF9u5qnMg3MRpk4UrmG",
  "key23": "hqPbvcMFFDKy9ans1hFaw8Qdq8qhcBwM7S5i83VGudUoQa2PDv5ckD5QoFauic3zvqbXqkQ715pxUgi8m2S7zdF",
  "key24": "27xq4vzddnUgGkqBL879RXNPPo5whGu8f2JB5Fg1GLubVEdCaY49VojQSny8a4HKc6XDv3NbYmhE4cryZXJKM2Jj",
  "key25": "2jFS59w9ozDxR7XdssjAqT5iVXWoKsr8qwzioByeiTCqJrZ4Wt2AX7tFCBRMBCdwGdsFUPPf97grKFwc8zuFs9Y4",
  "key26": "3ENFPa9Q6MPrmsjiZeG1rNiepR5iJExB6zjnABjkasAy8HedNYoE9UeNYjaHqR1zHw76upekWMEfiG3VGSXTTRkE"
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
