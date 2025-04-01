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
    "38o48AoWCnrJubJdtKEegNUVn4uTYNHkthfHxTaQMpVz2BvG167AFaZdZcodxzvGLobzNYfWgCZEBPqZQ71Ww9wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wGCqd1TgQxY4Aap6wdMGwwpzzSC5icErCbz1SkEnxM9PvSQnk5h7z7XsXVHQemFCWqM5MJDJyzbuWfJg792EFmM",
  "key1": "H8hNGLhNx5oCBiGE18j4AeQgRtbyZZkfyNUP5m34EEryRMPvjPf4wG9F4jMytyusynnynEoCdDGhNDT5qR1wWWc",
  "key2": "4sCvKpzzeL6XNq7PNz3c7mic2FADFDa3kxN4vaKCEAGPyfZv9E1G6iAtknvQJ4sQwqGGDuPnpzef7VrQPbTQN6Je",
  "key3": "cLLZB3hgZcC3R5c4146AofEePxiWVR3oWQeTxyRjqNuvrR3Q5xeFsDmvYZtSzRHRMKFeyYQHThAX9s2LqPAivzg",
  "key4": "4CUCrTqPjyg6iWjLGLi9LafC5hWtvhMceYuaWr6xbqcbXYtiyCyx2DHNkp662WcWrt7iSHtMx63VFTmsh6JX95qX",
  "key5": "4ka8y1Ff9g3EFXLBtdM5RuQt5QL7SrQLVdNPH45inM5EqPmZZAKrdWKWAxJn2KcAxSGtuJGwimhyvpcVaiQgjQqc",
  "key6": "5CSt4jrWioYvTNNSEcoV5ekEEhLdKYtrnrMKSRqRhnz4KQ3CKje6niqR1izbx8wZASQ57gLMTP96L1nPTKtJ5zxf",
  "key7": "2T1agw2DLiivRPHySFeiFEsfNFr53PvmbENXL5uoFvjm9avzKNCMPg1X1i4jYtAyiSkVRgjx5jdpxesEiv7Kti1L",
  "key8": "2NB9MukyAhBXGM2F9h9rRd2fRqxB1McJpTu1YE6bvBmcwxe6sGmzFmHDoj2T4d2QtuVdYrGyTM8CyRb5BRfKF2J1",
  "key9": "4JLi5qWJnzz44cuG2g3qH7iS4TFAD1bbHSsHdYM1AXsBcgWvXpDwwuUV3j9scUzzJCJrUmQrGmZf77wzHftQMNJ8",
  "key10": "5FTAr5zvSrkkaa5MMpRwEQb3py766Uq6b7rmwQzTNHe3CcdLGfiRjDeWXUcG5xqkQYxNpwqzTxZGyPuati8DrWcg",
  "key11": "6bdxNH25vCxAZ47gxAsdbHnFFhFwNfqqpwhV8hJWBgTnJCvGmedCbYWkU61LLyPxabrW7WwMtSE5AtEBczrAGSn",
  "key12": "5TfQ8TEzTk41jXBDoxi8WKqrTSMsyzFZv9yjN1Nsi7mjZ2q18i7JQungqo5PP56Danbyp6paAbcEd4hk7z91Yk54",
  "key13": "cKLPRS7cFXM713yvqTHbuNVE8nWAzaw24S7EVdRBk9QQSWCDR2s4PuBdehCc36a3jnMCtHo8ApTLG7SKR5UDa5X",
  "key14": "3Sdh35MduFCNBVMwd8aavjhx3gXbw9VZ8Gs5iQZGm6mnECybRHqFsWCmzvfjRU7h1SeX4NxMwqTQ2XMmekHFAjoN",
  "key15": "2VNBsd8CdGNLxL4W8VgndCQy169xkYXs1Ubw1draPFA2qp3rwxWaD3xjvpZXgiwhDePGZpvcZpNznMVp4n5Zocqp",
  "key16": "25qy2ARiQxkTXyAsq9DmBjTyCgiddKQi2F1fPbqiUWFLPyh3PS1vYn6vVqjbiJAYaEVdRnCjbT7DmeUsAG5zqd3o",
  "key17": "6DCDoXmLD7dMDNCCvCwhsETB7iUDkvXXqmPH2p5C88543wRDN9aRuEtiHNgNrTRh5TQhC1DM2nRJDJTxoYuXNtH",
  "key18": "5SuXd17gZpFMQQRAjnZtSRD5zkqiuYKK1VVCwBpkrt6rPrVLgnYsLW7gZmE3Vvw7udxHgXRQpncvLMNg7hsmzY8Q",
  "key19": "4zakDY2rjCqHMnKCP4D3JPnCETQg9EJ1zLKWEDHE1EYKdFB3zR136uo9YFBbUn85usW6GDVje1oXskRD8JHPEGwq",
  "key20": "2a8VwYPhGo4dRWfM6JdPZ3py5vRbD2n9QFqAGhxSb88SgL74Yyy2hkZHsThg4KJWo5oy57Mpgbhg8HvBakoXFjL8",
  "key21": "a3N1pi3CUQoBv6yDHFEpxTcLR4tkg7mC1GPFHYCpAb5saj2MUwnnaFpFPU7LatUcLKCTMyw9QG57brKZJEK1TKy",
  "key22": "44HHe3fLagi7bpryEbJF4Q6K3yvtcunU7xUzHDwijFxGFM95WhtDzYrmNn9A4Qz9CUpo8npm2ZPAtpFWRUJ6XNDP",
  "key23": "44U8GgphfCbCqUj83mm46yPaU22PZZR7CjSHCobvL1rn2eumb9sPte8Xx9ofauYqFpxFQM2FC6BnC686yUUf1U7y",
  "key24": "tDRo6aVjHDE4MKv6bX511h9Wnb7xB4mn3NdCmMxJtd2b16iPJmeVpq1GpHnKQQ7t8rjFeYwfR8GAsBCywUc4Xt6",
  "key25": "5rEsFgVuW6YDQUT2hPgnx1V4nPWjBGypcCNtJQr5p8rUHhYBcA2gMfuenPxb79rbmUZR7Q9e77a5aDtXRm7fT5Pf",
  "key26": "4gVzMzVoahZAXdD4BUaYkGs7tVDjrCkJYGW7dWdhFgzNWsqD3AuHyMxnvrT2RNtPQpa9A1oNBHqaovRPqt2CNssK",
  "key27": "2aG7biydNRYgnTYGeux6dfEeB75joScm5NppWELkWC3fpJ4WCKj8y3auBSrLTMowudpJwBJ6BhjywAiefZmigHN2",
  "key28": "otpNBU1kgdQXwH6c7QE96Pc7bLZu9hkfXk8G4RgJ3ZzajjC7f7RL7ETu8xpUGocwVwdkgLPDMTXJJi1yG1aaQTZ",
  "key29": "55pMbzNiZY7AT8dYHS1foCncQoECRVCtgfhwLHUWuqGj27m1RrANa7tK29ZQgfXM2boHnoV4aNJmRPf5a4CjKrPP",
  "key30": "G9C2UUR6UW1SU3ne5hqB3qUniSUx1TntoE4LhsfbwDRDUsHfmZ1hYYXM858XkvcFRn1RiXLoSxd6ocx6RjeNrsb",
  "key31": "2ohxk91tEgkmQojAxbMJGM2jDL3PcqcuRNjvmgY2wyz5Re9eDmmnEuKkT1nsHPvrEsbyJAqWTWtYg29p82UVst1e",
  "key32": "7Xp5UUe22XXUNYP7BzQwz6nQJLfuqvhpPtf8z9oYAn48Y8w9BLQVRMgwNTecN47xDLMujwpxYhWwgGn4oy3bsK6",
  "key33": "L1eDFeusz7aaNLSbvu2MyU5hBFvdtNB8fgHLj42i3RsGDwW8T82ocBDNec9JKN46p3X8NyA4gKLbxpRozPURksK",
  "key34": "42xR3tuMKPQF4y8UHyVxqFroNK5pEmTzN5o1b2ACrggtpuDuGV9Z2qiX8XnqmgAUYcBGnbYYWSN9GUJx2Etf3Lym",
  "key35": "4KKAGsdqggjZcxnqiBQiwTzLcLtiYSiK62gtiaDi9xVGxhifbBXqLgkcAvWyotFhyN1ijUHjhtARoyD4WPjTsSkf",
  "key36": "4hu51DmCnEp8YxXMJYUscFxpeTXm2F7R517E8qw7dTSTuu6EM4xHJMbGyA1XS5MELY12GbsNSi7HHpd2YUtytzf",
  "key37": "2VfM3ZKchXzVrQ1vmMRAJhfRFccV4dJNPuzGNvWYzJcRjybHurApmAA7LAujTUau3Z8cC6tPjXknMCEJmFBTPc9s",
  "key38": "2ki38zGv8453Fgh2cJiZVCQcrcFjVwF3XEbmfYTuT5f1bKG4PYpW7MECwkmpeXm1g5KkTf1UesmgGCBYN3J5sK2L",
  "key39": "2B5RVUNkjG9iKJBG5GFW56R3QUJUymkyvc2F5ZrMpFhuYTg1E8reC1MijJwyo5FnWdzWkdvLZkRH9FPsKQjj96Rm",
  "key40": "57WqpJrDgqWUa4MHHbFj69SAM1kimm1tpKdetQ89Nrm4P4KQ9kGqbKxTcV3tECMrq4v5DY3eEYfRP5C35gcPgPF3",
  "key41": "d71yvxYTXQpa1hEP6tF72BE79gNTk52Dso2UXfsPyeem21m3FbvhxTngpzBNw61ZbTobubPCA6BgL79eczUyNm4",
  "key42": "2y7DvfaMX8psPsSp6E63Uws1edReT5Gv6TNxkWKbaUCpW92UJWPXAGw4SRrTLkmpuJGaqYf6u9qoptmMSx5VFSzX",
  "key43": "4yr4uiZKkpqpvUagmUiQz7n2VzePR5LFSV4C2UzD5EKywZtQYuy6Veq6cXPWi9woQYgEsVAbTyEEqP2M88iwKYtk",
  "key44": "2mRM495RSw4p6dLseJQQMyvRgonpXHehRcuychXW53dp5QA8F7mHmZmsw45QRx5zjQfEciN67b22kWrQsyx5aAWG",
  "key45": "2qdgtnrwnwTRrFv4XPe4F7fUWi64vrfzNQ9sgQZC6DZ5WMReFGBofczj6x8YtSbVu9UuiVF8e5G964gCXqhXEsCS"
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
