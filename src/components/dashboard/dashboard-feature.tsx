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
    "44vffsPrX5mxYMCeQkijhod2dNqgT1wnX52fZH3wDdV6F1jHCj85Hbkr1KRs9S6bdptLkDH1APnzGGMT76uPaMPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ozkAkztZqAAV9Du8X3v3fokpbcLHUFJ7UPBcUrWmf983AiUZDBKw9yWzeXRXtvuZhd9tuP1NP5i3cAkTG1oXMzs",
  "key1": "48xBe5rPCGZmBMohFr4rzE6qnjNCyi6r6DLGr93uqFbsG623ZBSDVWR9PEyr65mbHgTrJbbDh7pTxe9QruzGSxvx",
  "key2": "4y66qM3hPGh2QRqmUm5wRscbdBq6Y7j9qFgdx3mA97ksKDV8NaCiow2Wq6oMcE6pN9mZSY2k9P8gmsmjcwUGNGkw",
  "key3": "Vo2g1EDseaPS3hZYUFZYaQqnPQsk4fh2Czqurwq6ywL9HhSuiDZJopZAVY4oXcfjSPKJayM3ogE7sMVkrJ7X4fX",
  "key4": "3qvXnq5iC9Q3jarzFNZtie8ihp7tCwvW9Q5b9MzrEyNkovrZJvmJnPdzSAHjfkgHWFvXeYdntawkEuVPxT44r71b",
  "key5": "2vjnjPKaZDNZtAkWnEM6Xxu71Cctezs7MsPR8wFLySpNMKYCFW61dAjHUPw8ukeBvggxwVtQKHtSP5WpMP1FmXPk",
  "key6": "3R1ZLGb3sGtf6Gm2hgDz114PF4sk28fPasuDbF7KKSv2q7i5VBRtxAE4UuAXG7BoWfE1fUfLJJ32XXL1PVBDnbBu",
  "key7": "akGk28cxDivjReCFxCYG9j695z7Bo9TVPKYxYGNVXj1SNGssi6RzJeV1beBvy3kN1Q3b7Xod45FYxD1mrBfBkZ2",
  "key8": "2ShRpytviMbnyp72VCQq7KqiZM9RX111djsYauYVoRBERSKgLKCtAvqVgetBUZW2TGTBsz6J9Cqa9ukNi1cxxWJY",
  "key9": "4ru3SzSA8YcgnuG2Q6p2xydhJKyKU9ECen9crQrVJ62FniqLoWRn9UC6yY2ydWKrRwCZK8t8AHABYVCrMzVhP22h",
  "key10": "25PoCzWyEcpP7nyQnWeUmZKDLXH2REjt4eQMWcA5m7ykpB3Dtt9KN6PdN6GdSzo8jLJMw164oW7CVhoCkRWxDea7",
  "key11": "5cYUkn5uLHUUH9gPZc1kYcquc6TTqXLT89Lj8QLSDcc7UV9LUDGhrLzcwjU98njmStEQZhTYotvkrvHRneZ5LF7Y",
  "key12": "535c3oSdLGk8ZT7fTtK7TMfLR7cRYu22VDzJCopwumhqF7NDhxbCU1YUdN9n7R49w9SpCjxbCdYK3V6yNAV58BM7",
  "key13": "8szLhJ3TcoVWNTfMiAL8U25hmsTn9R7ngFueJxAZ4PkKS2n43fxuFMT4AmqdLo8dDg3P7cGAZiMALeJsR9FRobA",
  "key14": "2b1knP6XFnmhDMDjbMvYq24LwaeTvYXaTPPRoT275aYaviifBjRG55fka13qXFUQjjUxofRUqwUbQ7BMR7V7iXHA",
  "key15": "3aAuyY1K5h6tHHbc6dbw2hypocqxju3rj3sBU3oR73eDPE42mBpGaZrUub9sXWb8ohEgJi5dyycdZiECwdm4ANwi",
  "key16": "5fu2FSZQXNfJ7eANLZgEQuC9uwAugYZ5FywEf7M2EqzfqLpQ6pUsm7U6inziv6NLQANnfdt9NsqwV4dunG9u6Dog",
  "key17": "31S33dDe5E8UMJ9qjcexKZgSRwcbu8R9u7MutAPij72e6tDnU7XmXuXSRWkrN3KR7g5iddwYffDJySQFPEyPxKgX",
  "key18": "43fHv9JXxE1QomssqaoGST7pdEKyzGGEuF8cyXLj5fXDdiANdGUSP9CvzKyGWM11d5Uyq2D3BjuiB1dK6d4wsjYF",
  "key19": "5astNvtSyDcez64rTfjXyuRTwuPNV9RbsYDNs3GSEqFP6AahtmP8soLZ34ai9eqtoDW5DRgrdKa3xUrT5Zx2RNzd",
  "key20": "5AwVJs22uGCwWoFYnJ8BLfbHYHBh6aqp4nqANPAU95gTpu5Hrgzx7eNAf8Uc1XPRdquw8neTQ8eD9kGkK2hDj3RG",
  "key21": "2Rs6f8Z7s3csQLLxADM9f2fRgegkJ6Ry3WuTxY4AsjqLUDsAsfd7vkTUxxaMbML8XXYL9GZ2VxmVUrKhJL4pGr15",
  "key22": "4wQEKSErTtDJL6MRi6P9LDWNzMDpmTqwW9f1MHasvcWDkfPynvTKjBHPTDbEEWGgTLavmaaBYc9CApMfawninR66",
  "key23": "67g98CKBJjkjufyLqKQovMvrkL3wARAF4iH5zNP2PCVdfCmH9YqXg2NasbC8ULuGXQCUHviDYRsCTySk93yHv39U",
  "key24": "4quVivCP1p9U4evo8uCtbGjKcg5KbGMxUJNqDRjv3TDoRLAwAx6GTMgNK5QvePwZJmzZ5ziPDR5M2ah3TWLHC4LW",
  "key25": "5Mj32umW5b4sxLpfZt2LAFTdPyG2SsQnvzSgUD9F6su26NvGbQwZUcQqAfYkZN1Z7U4sYffumhFBakoq91yHdZZS",
  "key26": "omigUH2bmyEmEtefj2rAmUSmQqNyUDBU8yVZtMZy5LphZy4TUv9ZN1mErmhG77MUgogTWR7uftomLh3FsgGBXMx",
  "key27": "53H1NG4KrQKiY8i4qTCR2rti36UzS2vXHz4YJY9bmvq1eRTdiKZAaRC8n2hXXyidzM7LC7775MDKb8851AdCPi6d",
  "key28": "wEXJkMovEpC7pDgFVWmRuRSmPaEhsVpuaaL3S5Yps9bgDYzUuaQBckysn9phCC2hn3qnd6Jo1CVDWzHknQDCUYc",
  "key29": "4eAp1r1ikj9cHf6VrPbPcDmxNYR1J5AnkBp7kw5Jnpgo3XUwAeRT14feCJn2BU3ZS7uVFm3gzXR4Xk8iAAhoRa4G",
  "key30": "335CeAgc2nq8y8hqoiAmGiGoibuvYyKStV3DztxXg5NiySUxqg4b4GQRCEowmm1TrQqrsjGZ5BLZm9MWTE1zGJqe",
  "key31": "2HP2Fm4HkLiRG4aj1XyLGygkXqBFPVQPnuAxBKpfsozv4mJpT4swZeXze6VCZ9HVCVfw8L1UK9wZJxgP1j346BM3",
  "key32": "36q7MqrsCtHeBNAXQ7765H9RqcH6toALCkFpBYUxyyENnkg4o5ZRuHr6Km1UXPHi7NrracQfTPXUEjK2BiaWTiVv"
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
