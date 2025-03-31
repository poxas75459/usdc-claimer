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
    "3jqAvvT5DyWgB8PEhShva222YEyCBGQ95zREqoKYUAhivDQTBdXDCHtK9JS9rW1qDw82zK9dSTaap3U731LRRsHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63JpPYUaP96o6sV3xXP5Lnx7aFULds6eX8B6iyTYYiiJcMVkSXLTgf4XCa54uTYTdXpyRYS7fGZ12LzQkSNAxnKQ",
  "key1": "BkXUaSY9HTbXUDwWoWBCfZ9DQN4ZqiXmRFnoYRzfsezjnqmvtxkrExic769dLK5v5nPybbR5RdTPapLRd8YWttA",
  "key2": "4Hae2G7q6pUU8d35aiuW1TZ3U1m8nHpK71h5ackGVF6CWUYNNoLX1nSdXWwCJUiX9jceaWQmjA4enPU8hEK9Zz7H",
  "key3": "42P8hQDGjfcfSv8qVNd2MmW98SnWmk1nXNgCHphimjy2wxFybtwH8BuLBf9yiuB4Rx1NCA23oCsoMtgEKSF4wZx",
  "key4": "23tMhgE4CyvbHqvSefgzGKT8pEt11NayYmYYYsDcHuXRgyPXzpuJmcWrVMLmx6bGKczkd7X2T2gnJrUqNqiwyUkm",
  "key5": "5MXyT8zw27HsimGhDxGxgyfBFGhofzYmDQkhPFSnWSw5DfkEqNLfNHPotT81av4GW33XveUk4gHoB5cP5ycqE1YC",
  "key6": "5VSHoXVdjmmTHFTp37jkHxb7Nb1wtXcpdUwywTYUa7Jc549FW4MSF4BZSLJSj8HuCeFg3iYxcerKN3gdsmymcKpm",
  "key7": "3umxbvPcN5pnqcrsSkExV96Z9kMdVrDL4ATXGRB9Uxdgzh6jRfJsBtdNtLw22b4SH6b2sKb6sGLhb5nEMGHgsARe",
  "key8": "Vc24eEYmGgQZdDTkNjT1FoyPi9HisdWYyCkvqg4XXkfHARQvUiixkJkQ9nfGLPHLh7KmRSYSxribNnzBbhzcikm",
  "key9": "itSfMknQPhxGD33x8Fv8evj9iDvA7HrdQbjpuCmGdYM2DEpgJJ46hWsjvo23zL7gHgLcosEkZsQ2xiaBDDiNngj",
  "key10": "SQeDicBVUxqGYJBpkEmA5eozZgKWJNawz47KPUCeyAZNMeLKZW417cFsiT6qUqzuNimdrxpUrFtkijt9a1wbKhK",
  "key11": "35HnTcGDRax7jHz741okzwgneFmjgtA6tfWUchydwip6NfLfZdX6oPPJs47q52wtLYqrACtANeCi2Wx1KNAMVtu5",
  "key12": "4WGUH9t5vdSNa5WgVgG7CTmncB7r5L9YPPa6houYyYJHvu9CaMLekEu1goUenokksbiHGwwokQHjktUxV5puVnmp",
  "key13": "nAxxAjtTh5HUav9DN57UreHeiiRF8dMefZntsALiXcs9yud4aU5vPeyyncJGjwYw5vJLx1zb6D6ERNYqk4gafRU",
  "key14": "2fw1Acjpuw9XukbPUDHYA6A8vgiiuH2nmHkBF4vbUwS3P42gSJsmQGqgt3GhCdWePMbMJYBNwKvETix1hEDAJGNe",
  "key15": "4SHSXRw4RVmrw8aeXMNEggyVkmcuZJY9iV1nYYfzuBFsEUKGLq6YG2c2r7oLSCKyXhrpj9kgqJvM6DP4doRWSf5L",
  "key16": "3TbpfoDojcbUNTEccASr7CyNS5P4fYUJQKAe8EStQz4vBGcXXg1VtbuVvUZ78BJLE68nehMtCEousHE9L2irugB",
  "key17": "5bbssiPtszqKVnxy1dMbJ8R8bUiGKubMdkcjW6UisD24EVfwAKhbeCVuJy44F8ot1q8uKeFDP5nkFbTHNYtA3y62",
  "key18": "5V7FBTFHmoZ8KPYRgR3U3wZmq9XzJurs4wa2CFsf7adwKqCMWoRdxNHYHRPp6WiDYKmekxcV9SfMZ415q6VfBqPj",
  "key19": "2C7TuQZstBS37kUb3Q2cmmbiMsFpy76BhUf7R5oyo55p8jLeZfHuge1WCBbCVSqQpaQs7vN98XsMNJqqdhCtnHM6",
  "key20": "8P8kLYMRhX1iHCHLJUPaFC5bwaPiK6EGoRqYCW1hQCMUkkWknHx7DiSGekUnut8iEzyumxkJohneU9qssVisCkJ",
  "key21": "42qBxNjZ14veaNSLBEhYtg1Hgk7tzwkwtiaiQD2YGi92SYbzYk2CKnoL4c5LvCC3pJPbUFVFc2eZ1PKQcPLQUjxB",
  "key22": "64AHWX7uqnm6DwmpbkqZA6o49VJ4NH4r5HctJ2oVfkR3NaxbFEnqXUZ44rjPfTV37zXtYGgpRmKkZVodcT5ADqMB",
  "key23": "VNiaxKUF8DTa9WTcHmuCa8jgYTCcwAQj8cUy4Qx5pYpRcCHSmJjVuZJ6J4KS4LnaEjrqq1tDJuUrxQHptybrKVq",
  "key24": "5NRp4u8TY2HfYFbFjB2gFB34tbZp2EX5z31tanW3QaM3kVEjEtgqUmQ5PTZCFSR8Nqg26Y21jN281gSfomtpUMzi",
  "key25": "2YmDD7pfcs4RCAL252RUCGu8oLZwzdWieHZTmyb4GhRshCzVLo9RyiYadCaczWEepzzD2pXyuVJkqDSjHUfVHqEu"
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
