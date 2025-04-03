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
    "4vYHuCm8wJMN8MeHXH9YMxBdJNKAtLAxknGRmffCY7Fb1N9D9UGh95tnpbSEcWUwHHP6JgmyznnpKAxQYiRC7reC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aUxLG78vNW1syCXWGjEtprtQa6PDY8WkuS9qn55EAxmW9VW97d43PHKpM1mQF1nexVQidUv9Qiuvn2DnEENE4Ds",
  "key1": "3T4cugmZq8ss21DYpA12tUVcmkDz7jXTBq8xZKVJ8GAzu9xZLJSkD4tg7L3FKR8JSykSZG7mX8utVMZ2QkJWhvwL",
  "key2": "4h4cA5h8YhHnRJUXDEBzpGfzo9WMEVmihw1r7YkyhM1iBFLR5CFKaVLAeohVAc1Lv3sWzSnDpgixUtSYBhSiuzFQ",
  "key3": "5nueUqJs4yWvhwopQChsZSXcPfUZoKf4vBi8AFhZEyMnQ3zA5p46RsSU2rqAdHmnKCknbD9qUR1LvdwX9zifchqk",
  "key4": "5U2Jh1JuZFS1mQQBdtm8VTWxM2VbtnBCqhbnnn9DCFBQ4ravmHoCsZufQqxJqZvmMdXgFRYdg86MQ5UojxvdwxLC",
  "key5": "4SfP9K3bWHJMhd5knLCuLTxQmTn5HFhCXFKEPAqLkNyqj8HSYFyXZ5vwppu4sMoXaxbm7v9Kh4iV2Bf6qDXBdYvw",
  "key6": "2Jx1S4hzfgKXDsxUz5eghfw3Aax8NKwRJXCHc537ogyofXHio5zWxNNq8mJRb9sqwZnsJDxiBh1L7MFQzHo9fVdU",
  "key7": "51nE9CLtpkgJPgLetNNThDNLgDF3UVy71cZ9WV2A6jzA72qYbVAmUGAzos2VozWscsLnSHqQRzDoQ9pDC43ByLQE",
  "key8": "23oh7kow8sh87FobL3UF588hknf83Dgy4LKa14SuHsQbJo5tEgGGsPvpa3zqKnLQpznYP3RYPk9JrbSGHrwqazCW",
  "key9": "25bTFnR8ob5VvTf7dTDqMrt3xk21SHqFaGG226rSsCTu5jUKwBUCdwbcffzTMBxQNQEnqYFYJu1nuqQdq3c5AduH",
  "key10": "2pFLCrBehyYwfX1JW4NdWdi8ffE3AxS1KgVhDJoWneW8AZtWB2urtJZnt39fAhesHc5uyuRx2rtsvyWU3rMn8bDo",
  "key11": "5cMfq8r3fokmX5JcnbXpLyfDyrS5aNDH9TAWLKCgfwXde7ksCRGyzjMeXYhhkKBvfS7Zj2Uvb4N4DJg6CCBWT8st",
  "key12": "2vi3Cfxv12ZLiKNgn1rVRdrushyLG9PAbCAmVVtqTaoub4e8efSHK9jg7RieaTdEfYzZ3YtnGozYuaHhATqn5b9i",
  "key13": "3uiyfyNEreT37wWbTw1mzH7ity6PMDCnNoKWTqBGVd5kz7sL7Ds9SRJHtzoJVFsVcCexfKMovoMsLVM1V5piwhMZ",
  "key14": "4xMuXFsNVsSAt8vXju8nDbEpAEwwxm15eNReuiRj33idgjK5nf5DcjZgMmuhAnCu99B9WyrSaBxoEQPcQ5Wi42pP",
  "key15": "2w1Qv9mp6HKHZTLm58NuoQG63PeXe6hhpCpEhvn7BrUwPmg6Q3uwtxPAFhUy4d5ZuJe2B3Xga1W3eLh9CWLCKMym",
  "key16": "4W8GAT7gKbU55ubBmKWxwVJGBSzYaEfCtxL5BARcww3AC19L4iSkjhGMWcGzGu9qqxruGsnD4E1wioBSJjMwMFY4",
  "key17": "8VxyQAXMXvb3tfWHL7YVMw1dmfShYBZkpvGWFripZhRe7ZoUSzn6bPwjHswRcQEoWEh7iwHmVktiAaKSfYRwz2i",
  "key18": "5rzEQFoAa8a5L9N3XEqK4Rur79abEUrYuUcPhBdXkprc3TubffBFa5eB4r1soHh9ndyE6gWpQDHc82ft6jTY8QLX",
  "key19": "k79Hop4sGMrzjcATLZHJ9a8VKwTaspXrL6g7ZCW7BKFss6S2rxvzA7QRhza5DBkH4P1TUEvcoDS6zHGGsCjrKLC",
  "key20": "XrCHEXX2UuAjXosqGCJGGHAcPbAVxTkEdzqrMVdntWQFZz1yCYsZebFMhyf4F2NWLmJEZydT2rDct62KkQZzRi8",
  "key21": "ztRUzvJH5pHamWgtQU89uijJMtNvGK4667JQpkFri6ahkQA9EtGu3mEGxrY7zEkKR4uMYYKRBFqEwvqSBXhbjZb",
  "key22": "5q4RB1SB1f3VrqU45G9xEPapvqfJpa4xVg1oCr72qDKtCosjCjrpTFuwwnXPTfVYqoEFPa5d52N3srJ3nkkPfaMu",
  "key23": "4rgPzVzPBoWQ2aEccTYLrgXoGeiVcfpQUECjZcDtJik47vVxEFoYqNy9P4ddirdBYLeSudYYUf7zHGNnLH6GBkJC",
  "key24": "3VESFVwZRbdtpYjbnMo6U2WsZyNeEQYX9MoeKDn8y8VkiKCyE58RFjbQ3zDS74wyaSY4qtrJhMFgwQLyZD8s71pN"
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
