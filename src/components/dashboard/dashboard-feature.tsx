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
    "2HrWEJ8KFXKRvywkuPCRjgjLabwdbZETjLRvcVowTLEBCqKQzy8qAnhMacK1T3jN4F5qiqda23AuaGz7msnKJU1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CMW8kb3NxjUYvZf3uJqLFCYkqiJ6wmDh3tR6abVytYvc9tmdhHw3amW9aiYMwdj2CunzQAC8KZ8HxRBic49ESZW",
  "key1": "58EGswgA3mcGXyH5yNRYMbaN4g1XFa9McRhbxpcFSP4c21N16d8KqN8LkAjipkTp5Gx9DT3Pq3jFZDZnmSKd91BZ",
  "key2": "a3nLohTXAp8xTjTrN4vadJ7HuEekQvAFufJDcYr5t5roMjwYVEMs3vhgr8YQyVZD8ujt1GYjumfMxfAQqeW1Vx3",
  "key3": "2LBsAiYRLJgfWeiU3NQ3QdpUNtJ6anf3BBe5mcMJfb2EViBKGCrRYRJmxsA6ouzZ3uzH4U56gojtrpbTEiQ5H3TK",
  "key4": "CaUgoZRHGvzPAHvPQwzJTnoS8bR3Pzkz9rS1nMFCWkKgkUU8KSYsBKyUKAc683ZvDFKrKbGoixz8Qrznov3JLDw",
  "key5": "3GjNqCFCp8s5yqCBiiWzhdCaWVMMMyp1BGMbMvuLNid6R65CKVLrJvNrkV9PKEPQCQJ38iurmKsrws6a4pyw41F9",
  "key6": "4aa8tE6Cb4opihpxecX2sZEpHZTndbzRtFi4FpYLWVNzRE3LM5AMo6EZVk14BvdMvzJaVo3qqv3eWuhmEzqkc7jn",
  "key7": "2CsktgUfniTDZ97Fqiv3ygbySp6XBCKkHLygATVMZJ5k18dT4nBae9qwYGFpiQxAt9AqWc7DGLHZwXTKZhoqeRuc",
  "key8": "58FqVJzuu33JTnPU2FZypDcVvM68rFVMKdXinG4xrQGXfjaQwCuT4KPVz2nERFdZHDNaVvxCjiTVthN8YFJUuTHc",
  "key9": "2ekQHcTAvi2W3N6PrSUW8r41yaVij3ekN2ooUzi4Zr8hmbyK6upNhMtTALHZUxtUJTiYZwcw2poG5fS1ViFusWKK",
  "key10": "3TosaJRKJVCP7x1nBNKj5TSghbcdbiN8fbyPE29tb6iWKw3TGDgt4izjYuuGApnJBh9L9ag465yuZLrTtdYQ1Cdc",
  "key11": "52sgp8WGkq3ne6e4x4S17RTgnTUL5gq42gAVQi2H3aMiHv8NdeGUJFSDe82ccYjWd7Di3tDc7hiCyHid1DhS2kyd",
  "key12": "5YNi3STRZDgbJVXrxUjgKwm5jyL3c87ArgY3o7tmmiEoMBgTBphm1unrrvy3Z7rkDPfaS6biSqegxggPit4U8Bkp",
  "key13": "2pvtj9h43dFjtDhG8ZkH2o6qQWr37TfJQLFCLYxvJy2fSn2quDjK8Lbk6toETTKmjKeFbMXLUKeqFRyiEP3ekur5",
  "key14": "4bDgtCi9viUkx5r7JubrdXf2XcyRtrVkpoNqbgaDB3P6YiNfNCP7c1nw4paJXsANuYFyQVknHu6fo2fQhMrjyTbF",
  "key15": "2Z1MS3aNaEbves1jwPWup2tNBnTXAZLs1LDc4jhvGUhWHedoMF9Hc4UA4rXJANWWzRJsjekggVymXBsSWB6NKKcK",
  "key16": "5j5VKM4DJuTKFHWKhxC7Je6isnCfLMA7uU1oWgrzgsFeCcftqC53VPjeUfzToUTL3i7gTM8SXT2LYuN9chSF2hEQ",
  "key17": "4FVP9svuqUDJrUtWopXDcLgGeC5vYZJPhPyeELdm4euEFaWExwb2ftLajRhjodUnK5Y5UqenC16VvEhSJgz2a6ef",
  "key18": "23ySLHLTspfJumeLiybffm9kmGPvTU8erC4egJbAhcYCG8CuMDFQTYwujyEuWodFSd6Z5fWjJAACfEZgef2Yn3EJ",
  "key19": "QagV9Gk5HqcTupCDNvFRqBzVFUqu4bG8cAqrq5jNvpWXqD9mFgsReDFoKyd6BLouhia5ib5q87Erd5NWhDUwzJv",
  "key20": "515k9FnnbFoGQiiG7JrNvCPT71U8xjwg4bZWY8PccdSS1P3aMBMjs7NDEALXMtFn3RCwtkzANn7S3bz3aEv6HyEZ",
  "key21": "Ja5jAFCR6aoGT3HH6c7R5XqoJpv2RoWuXgXUjquQgPPwvEq6ieBmqCu5ae4sV7LX5Fx94pLHveaWNnrFA3y58Eu",
  "key22": "5bfPGdYijJGtCQ8S8g7a1mPQmQu435LeCGWUhEpykrScENaq5TXVYzD7g8kVzWk1vUySGfKnMqt7RoUQStnN28no",
  "key23": "2AaLGwDQwhsxK4UVExaNoFd5iQ9ZCjTe6rapYZohZHMzaFVWUHZ6GKoomyVBWEFUNsNtMCJ6xUd46MTesXZTywzG",
  "key24": "34GvmViy1Kp79thWFHAbBjP9mZMSd6FUT9shsrTr7CasL1jXH7rUzrZc99F2vpje9E23zjHxuoi2mY1Jg471cYES"
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
