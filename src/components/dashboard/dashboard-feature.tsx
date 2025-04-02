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
    "2u61hfRN8RC3MM9udCmb2wBCZzJycF4x9Sakh2Uj7qkLbML6dpuAiYk25i6WhDc2cXEWCauGnQK7ZjsuhWjzTztL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pzHKLrh9VNTzhpRt5mQHdA4e5Nc4R3Mej8az9bk5YDUVLkQaoHvxMe8vA1qHEsBioa3AJ8UBBNZRP64zNcUoiQN",
  "key1": "2jrHJo8y8mDPpdpiNQVzWeLXNRpDyk6heVdZwMX2vNM9TqU5WabhERgrevxvrTr1vm2z3ssC7s1yk2ADa8i7zNFt",
  "key2": "5FKARvJpZAwm4wfdMKSAk6dgckcB6nfZUSzYHrfaMsE5N9A4CGPVEzvjyddYmvSH6G6SJvPhutf33wZj81UGgWne",
  "key3": "4KwMRZHd3Yqi5U9EyNdA4NVjPmMzNeXMrFdjiHrT5fj5eHeM6AqoQceKrKaRyZ1Xf3CaK4guEY75sS4XvfnGLVvR",
  "key4": "57dYiw8mzmtM4CpT3EaEjYQubVdKCQvc9NHuVgVurHUsE55mkxtJgysSpsiiicy3gpuYttkQuUjxrnnACb2HJyAU",
  "key5": "2Na9KvEPYQGVTzHdzBAKsYodg9J2LKaEsCHSYJ3TJvNgukoqRYbn2ft774hnU5WBUpTc4Br8x719CPUDnRBmBh7z",
  "key6": "5E1g7qewuupfwieZoUykJKveM4rMLFjH1T5SMXiXjGdwC5NyU8jbWuMFP4Ro5Adb6iQy8n8N5sw6onZc6eiQfnQn",
  "key7": "2UTMSm4t7CJgSezJvoGKYHSAJaMjiuwpqNDSzAaq2R35W1p5hoXjzw3HH1oHavKR1kmKdoK6jusJHvG7WN1w5iSd",
  "key8": "46jEBA2F4gGnA1Vy3x8FJZRA3BtC78vH8cr7BJg3k2tTsaoj7NSPijCPzXYVTCxjmtqXxtehBR6baBmB39jT9JnT",
  "key9": "3wgYFxixEFkSt5jZewgpBqDhBqSacUEKJHmj1efReMpwMWVzayKFWfgZBpFhuCawcMups5cd9ZihBjWQRzz9xJQh",
  "key10": "4aKPQCwj6Wh6tzgkfSCqWc1n5oMcecHRpLNbfJggFjLSTFuhnnq3DYsWAuGh2t6nLT8ibCRDDGbMkTheZWLVAR3g",
  "key11": "5agtVMFZnXvNZxtyNvYYGK9RuLtWiQHFCytFKXAn6AmzF5LQXkvCAY4PXRXp9tzBLG3bsqngHGS3A9eWvC9iVFB7",
  "key12": "2uRRwxdztstbQYoVQ7Pmqj2R94XUr64i6e4zHQ5AkLufbbz1ZJw7ztJAYxefAe6qbX7tEhpBJL5W1eeA7eHjUXHr",
  "key13": "2MgydF2DaMQHY84rEXqmfTYTLSkF12RGZe4j2RTLDoeRBxQBjRvGbhJBQ9BBm5wkFDHigofKUiZXfwumvVRPFsNd",
  "key14": "5pXN6ERyExJJtVMrmW4H2BRUNmRaCNzx5FS44ACm6u6ZYUGjoc46YbBUesnHHPSsSBpcyQEy6BcQqcqykY4XPAPE",
  "key15": "5DfqYWWT7f7M2PfxW2hLUTKWUgHFUvo4KJHus57Z54ADWifYLJJRnvznqnR7ej1iixLHQnvVyxsHz77AxXEoBTYy",
  "key16": "2ZdKCgBXC76tWz1kzhfiqCjLcZ3qmQCxw7dtbz96NUE9rLFPYqzcETQZZsfycJjAeXxSy3GABdX7E1zL3jERp89s",
  "key17": "4EwHuYD99cTPnBgx8RTt9gxjRxPTXMhLeEv2Ey9TpjRuKdF6CmFmLcScm6dNGbKvyBHm3j1HA5yUQFSd3CcrCu6h",
  "key18": "2T4rm8pEUD3wrYapmKPD8iN4KWFKi2cFiQrgouPY5jEdMYHxq9XSaMeCvKsJNMzDHPU8hs2EvV4NCUiwBhgu1oMN",
  "key19": "5WrdJ3mJDhhDfgh3oYCab6pj6FZJKFbhLfs1pYv5z2uuHEWDDq5xPbDGgYzPX72uFhB28tZPcDhhut6qQ75rbbhT",
  "key20": "2AaxmEKjU4PLrjCJTP6Z2io8T7Gjn4SnnTu33GTfuB3wuVCfiyJHX6R8tX5CswHTejPe3GuirMAWSSDLgmGWKDd8",
  "key21": "58v233TkFGWszuawHZGxckfn8b9ZNvTzrBdunCGKm8ddLwn3F37PqABJ7kdhDf4wyp11gz48aUhxWfCpN2hzwHVx",
  "key22": "Y1WUaD8mW2w7KfRtVLNA5rYcLA3fSQ4RrWDZrPVkkxJu54aWDxAA9ULUHXEupJebyYLoUiLT1APKYv2SbDUR3SB",
  "key23": "3Nj4oh1DxgKYrkbMxiWFpJPzAGRCVY3WmRbf2QpXpAwtyZHCHqSQ1b38Q6iNyMceBX9xp5fsurb7tUK56itEYqdy",
  "key24": "5tzsQsJZgtU4mXF1ENwqsupEeurHtMA2CjrpL9KQWNTjgdSiysWiQCHA8TU1h91kjn5DHQXHsVfN6tXtxpGRdhQu",
  "key25": "4NJFWaKBuGGWXW5zFf15L4mTTa7E7BxewCkZECN8iZwiVRFWZGuMth5zF3Kh6hELZAzpZd2mv3rV53x4aeXJ6B7k",
  "key26": "441jpvFqPvAiMa5gJ7usdUrBjiqVWXnz7ucbRKSrkchgMYRM7qdMhtaXitmsetLYk92dkC1vpGFh85koCFo8kLzv",
  "key27": "2TRph8zHxXLijqNFGgu1Ri1vBXP1EGfWhMKiyUJWaFzAYedjwuSqQwRMZHz5jjxCUq45QbLsvpHubBNYGdXwUuX3",
  "key28": "3kDQZWsScChCxNLsHYuJNSNTUjETu8Sgfb2iRepsGvtqaevJKjQr3NyFDa3WexdXvdofUbYcFwrA3JN3KCSLkjiG",
  "key29": "3yFxkJTm3xLBdt6nMsExSKrru3VXFoBZ9mMxs23UvyaVdSJ2BDofoT6x1SVsSuRFMrrkifnaNp5uvq8sT72rU4i3",
  "key30": "DwKjsjpV6Vi32Ro5T4Z5a67YjbddfCBp4XXJVmm9ANTH81Ja6SaSaug2uTFVg9GCjU9UwyuHC8SCCLscgXFBQ2G",
  "key31": "5XC9yY4boQvK4KyfVySPenWNcojAPdx3zEKX8QusHkr7ATBET4KR86GQ7Mtb9CZuNegFqmYEzN8u7JQ2e5coDENG",
  "key32": "JWUEdUBKtzT7WDpEzEVxj9MyBprNPCj9pAo77SXU9A7vJqkAy8yEgWTrD1q6jUpfKRSLDrAfM4RPC4a6UY5ZHMU"
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
