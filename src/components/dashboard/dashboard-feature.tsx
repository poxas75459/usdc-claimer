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
    "4tcr1MENsvvBi5Y4aaLjKDhwAPMYpjdH4VmNpWErr2JHwU2e1ZJfJPvajHWjkHG2L7CjgEXKGbhZYfJyA6Lg8nrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M14YPz9whLnNTkUx5qw2uENAuWr27G2ytpGVjv6y8o6EcTtMv1SGHZkj2eViW3wG67ehUrYeeQvrRdGS4ym1iyf",
  "key1": "65XKtMx5kxTViiRKj23y4TKm2jsYDbgfrmekTwnNY6mHMSmDcM7AjiYHpTtFCYkuhr32zYGmnvTVKMk32dSqzPTs",
  "key2": "2tuuxLfm6GPNZ9YAHzJJyT1CrkzbMc8XF7cWKQ3v76a9Y6nNjpn41juz3nQTz3HWmR8gnFKnJgNtBcyknDqGZmDg",
  "key3": "5uZCeVqo9c9w579VnAYu3kuQ6LsNtykWFnNT1yCWjHGtVS6QqtHaPp8JogivqC6ZyPUAsRCJtp8Xb9RmsLKJNTwq",
  "key4": "4wrMqdSurzhkTk2iNtZysdZaDergsuLGNFWnz6nv6qYnLRCQqjUvWkx7XEeBytp4UGkXprkDq6h13nRxPoe1aruV",
  "key5": "2e9jvcUT4RrfQD88uYX2wcXSWnEKNFpJSb8Y6GkVLwocJbBicR1fsHEZXb5tzGBfzjK36Fu7QxwZ7x3mzngotgaB",
  "key6": "3JxknP216uB4K7a7etNadhcBEudGbqdQNEaNLyyvLqTsnPiKuWxnNNYr6LtQSz5Bq6rabsBWxEER59SRaLsfyTHY",
  "key7": "2RvkAn8X26P4bSHd7GV9LMpuCKbyooFTPvaNQk2ddysHPUXASqp7nZSvnRB8Hpyw1vedt1R34dQrJDH5carLqLpJ",
  "key8": "5NgpU5ZJ6jFDPdCb8twZ2gqYbpJQSbtgMHinm3mq25D8yvWNmt98D3j1XRsepyVaKxs8ZPk97Cuvy2zP1B1c1SoD",
  "key9": "BMedV1TU9VCwFbBgqd89HN3AN5BzkZsUS8NpyEE5yJwVBei3SP2kUYRA7EmD7mr6r1SJDVf3ptbWSQ3Xc8qoUoD",
  "key10": "4NhsiWZmQLGgbJXDQufTHVGd6GjtZqq25shqa1erQWobmG5j1q94X349dYqjWNB7TSwox3QaKMSUL6LqvyNEBvh",
  "key11": "2uAinqaQ4gMpQHY6nbc5nRZ5qRr1ZKNcgF6RTbrFZ3ApG3gEQpiGRuaLVFgGpjEU73J6CahoY1bbHp8SXcNYhmNx",
  "key12": "afKFTYbgCdZkpfqaKsk9vJSnNFN4MFn8q6a72NA33SLub9LLgCjew3kU3uCiaQfL2eNWRZVPomPeLYQXE6xBjTE",
  "key13": "42w6GBT4Nb6XdsCfnaJTNZxA5n2KsTgp7DzqyvgioMg89uVwa5QFzPB1ycDsL2bU2hr31tVttZ48EchZHgUamAfD",
  "key14": "Bdbr6iiafDN3miVYdsPMS79kzJEGzCWJwLjdY4e8ZS2A4uhexZJpJRMkTzbukqWUBi66h9dT8ksEJifHjGkSNhj",
  "key15": "46ui1ZYXvoK7UeqLQxYcV19PkyL92GvC6Gri1CcWgoqPQSRnKbEuFvkdvS881qTAdH2RZ5xqgwT41of2YmKgTbBP",
  "key16": "2kiwrY4XhsUHiLVk5yGQ84zZWJW7bRq4Hsb2rTnQT1j5jGfet8CiTU8oWfq63RqyJ1cEtwWBBLEUzcXj5EG9NfkF",
  "key17": "2UxTYwHU7XVHdLQQsT2DxPiW3n6FVtoAMTG9ExGdnaM2H9t8op8F6wnqa5kb6veEwe6fk2oV6KskxqkTSi8r8GB2",
  "key18": "54P69ELKi2cR6KhmFUgnjrWuZzbxMePdTJwY9SNuzh17mN4KEpQQAzuJf57zDeoPxxKrJXqENxnPfJZ3YkqGq28c",
  "key19": "uX4yH76WbkJ7UoDSxMpBuzg11APD7ZmdCRvp9RPHwZKEWxackufVr2VbBvmM9yYTXWiyc52shyWSjwpC2SDGd23",
  "key20": "FTVBiPgG7Qz6c3SJRr9tSyEVDy2FCGEL6nDtuhCoKzdGScNqqRcyVzeYzGg8n1pRjYqTKpiepfNj7VTEPYqMNLQ",
  "key21": "3QKa5NnfrmH352ovdc3GvdXsnno6EY18nU88XumfqTgPpdq5Jk8asphFfTTuLFVzKWoCQrEAa7AbRa9Egjf33NiQ",
  "key22": "5RznX7mVqBTYH42fRzCHEPo8Z8kv7ycM4jz7Zdq6o8i5KHr75B4wHTmKavwZPoHZknKR9tbcRRVnzD3MF2EfQnkg",
  "key23": "dBBmEP7bKiAXFA5JyeSENp1kNCasqfseQq8EnuYnQagQchs7k5zj1qCTHgEBc9cpVCs5eU19G3XB5tertgpExfe",
  "key24": "3SLg5ePndyu45jfhEy65oRSLPoQ3SEjU4uPDYPVWebYsRXUDZfeCAeo9kxLgYaQYkTs3BNRiBAjQKEWhxdk6Gxzc",
  "key25": "p662hvZJWUAjLdxqBoncQ9ddDka6f5SpYejsbBh7jCaJ2F2axZChaTrMQSQ84fea7sV3tJuHHLrCxTvJLTXZkyx",
  "key26": "5pCiUfeRvUxdorS5VVPDrz5teKF5yFz4cxpBDgBcEa7KtUCSma4tJ129JCXFVs4m5kVSakZeyHC4kTGEmLWF3qoS",
  "key27": "3ZFEkGBJ3R6TLHRWsbNqBpELoqkXn75JCdm44Dy8xjfdTx1ei23SPFMtgbBZw53tX3Zo4YS4tBtMm8eqhm5yXPHB",
  "key28": "4yPyf8vNSccxwB4d4jqMXj7XTQxpuTp8HAtepcFmxnhDYQJLiFTqde9E9Q4cGnK5Q4vSARpufBX8xnmamu1q1T5t",
  "key29": "4VSvYbx62zVzoHWqDvgCgRDV5t9cm1vV5uWejfWm8vLswt4hhMjMJjgrfpzSxpLDxHaJCRpJJR9KheZDAkPARaXo",
  "key30": "4t84jxHCzEiPT4hBWaKytLq4MKgkTT9NAfQzjyD1DwKAbd7sQb1j9KuRgoHSBcQvxbJysvAgBJZM7EW11AEx3um1",
  "key31": "3ytwY11eVEou8r9zQBy4dYeRFowagCJAXpLSQXSLiJnMaSV7faeGLrRNqPjEiFebD3w2iHwJVgkJnmUZwbPkurBK"
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
