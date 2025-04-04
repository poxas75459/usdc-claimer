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
    "2KxyWj2jvy7M6YsTQmEJWyKtZuKi3anx7LUQuu8q8kwNvaL21ro8U8LnxHKiaRfF5rv3WH1yfkjrMeUUqPk2Wh5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2145PtFFGfVvwsTy9mPGodYuZGKHwVLBrZa6WzXk91ceYdxb6BvPeHxwh6CZbSBD4E5pPxpfg6qzA6PM8cP7SbL8",
  "key1": "63Bw2SmYtsqVStdkPc82gNP1PBqPR3LQDHDtRxSLUt9i1yv7xuRk5hTNR2V4gPdeLPoTvakJbqRSwurQ8LrRQB1A",
  "key2": "2YDVdQAMVEbwW7LCYdPeUr47qjGLT8WcNiCCoDtqPXGS9Q6NfQiezvQSjceBgF68bHfE8M1khmzNjVqgW1veYMR1",
  "key3": "5S882yZKGbjVD51pLZvdG4w3NaFd7xgGBuPoLVD5WVQAFao7BiLdVpHtFH2Yk6zEri3brPxBks784FEz9APtnBXF",
  "key4": "Fnd9naGcDdhgQ8fFdNvaouv8BrkT3oYtV325Ty2azwwk5NSuNBTweXTi14hemf96dh3cNdkAG5dMenzpamk3GGS",
  "key5": "4Ma2pD2hK1FemndJSCPaWrJJaAqQxiJVSY3C6zipriQmTV9ckwFXMG6H1B73WsTJVPkUWgsPyfPuRNYfuntxNoKo",
  "key6": "5qMKcJv4pAt8v3mpfPegt2dKHoqrGD7pVz1yAK5tzF7oaKa8BpNpNV9LcAgyHvsHet4jvnfJ6W3eWKP6e9LB6s4f",
  "key7": "344xZLS1KSgSMTU8EQKFXYnHzMm9YRLoEumbrpMnKMvuFSn6nGnzkNcNP7pm1FuDWtACzMHey7PhsnYRGFQUZQay",
  "key8": "41a7DTqhypGE7BKfeuMwUfm1SQbKZr6jo2TVgcahPX1KtKti5fEtuR9JMbwLPJxigVv63wjg8vjkznUEvGb3oU5o",
  "key9": "5iM4hTcug1caUNDbjyHkndvEFrC8bWP1XwHFS1iSGSNFGiAAi6SmXiS5aGZT9tuU7k3dr6FuSWtBVs8Exgp3Lvbc",
  "key10": "X9K2VrAxKm7F9HzUa31h47Km4U35yXLJwZK2qaroaWN37SiMN2QJJqGJ95k5Z6KzrDQnJtApFLFqeodQ8DULAyx",
  "key11": "q7A7vmRYGwHFC8fG8vXeqcqm3CHUQXNDeoG7LqRU1TJf8MB2HDSL7bXarBdXTgrPyhc5zk8hBYT7idiPdS8Yc52",
  "key12": "3LjswrMAWfRYo8hqKnSLb1EtnzWQmgzCzoguMdP4jHNHUfSj6JAfnxjDJFwDhoEAL8Sp6PNFuHYpC9NuAfEERrMQ",
  "key13": "34vGUFXoGLr9F3Vzdnpph2WyHyfXhQVBjJVW5ScwYACiPqw2VbcB61HSvcNoRuRfaqY8HXhoKzoCdLDuvFc8UR5m",
  "key14": "5N13d1zVziFrHHbjGzL25ryctZppNmd3wXLGZ8RxpbzGVj8dRJhTYbPiuk9LeNpsveFBQ8dRoJzke6Mggy71Cp2d",
  "key15": "43CZKqsTtbXXKT61zbw8wJuAZHarT3wkpykmjhQ8Pc9dZPJEWTgJBqXPVRKboXhqENX7FYDbTzWtHsDZpHwnKqEW",
  "key16": "4WUHdZjKzzbkzBHoQFfruhLfV3qTgEmwTdUfmBgSpDfgoruJCgkPT8aFUyZ1YK9kcxffHN357b2HXCwXSAgfUeFF",
  "key17": "kpfmTJZWMQYb2K3rB4fDcTPfdFknuyYu8xsuBZ8uBuGnp3fKm6DGpRCtYG8UJEmjKbGN17CJxUB15BrQtg2Q1xa",
  "key18": "2nG9EyjnM3NxejSKnmi3jePbsw77w3DJWb6pJ9hQmkqXxyM5Yt2NAq4HgoRNwk6iyLYUjWN7vzVVfa8D6Fofofpf",
  "key19": "4pse3TjLurJrEF3hrK8P9fvwVpinsdY99q85H27xajv3PtB8PKtitDQFeGqBHFnZM6adRXD7HUEAMbzdCaQ37sh9",
  "key20": "4vEsuYGhFek6UaPhM4eoz3yWKPqhmJVoni3MNrT1PWTariPtFUX6exA5epqqxjfAJfczpfPeiyeaU4UT2yyCfPPn",
  "key21": "62UFWgLqK8WmLvohdSnFGntwMprbYCw6ZyAT6hsSu67WLyZhifkuvffB9HfMw76xcHAVLPbuniNWtsrUmkNntZop",
  "key22": "2sYeFbwRKari5XcdMg3D2ZtDAFzaXoGyTKJZzYPrAW84FW9B8m5xBQpVFXZQArGSAoZa2YH9YCwHzHefhq355zxg",
  "key23": "3d9Lejauky5t6UEiMdCS3C4zd68F5SY3Csi4ZQNfN5Z2qpRbxU5zYkdtFPhxr9ehmj5gqYHyFEEPxpzRapQqSdSU",
  "key24": "53su8uDwCnaBvtqpZ1wjoYu6oveeWdJXoyyBZ15BFLHD3LyYob4DbW4PybC79HmPBYbxmjRWBt8kxXs4ux8jFpAZ",
  "key25": "epH69r8fQmhz1mEvNp9tBpLFNYvrnZGNskwJYbUVrGAXhQ1vDepgjejLrsap7FsRqp2Vj7Jhz1SHWNEDuSPVo99",
  "key26": "4YTWMCmgofXbLqjNRbCWnL9ibkjqaCJ8gLCc69w9YHT9X3GXBipUPuYHmoSUcunY8GpQyjUL1wYSE3s32jdP1A77",
  "key27": "7CfdGtukxkpy6wpf4DpykZGzwGvhUEXVRvjYavTqpab9PZCEm7uPoFzFJTPX1nvfzxkUupJFJSe8or1ESo9moJN",
  "key28": "4T9MHgKG5pkQSuV9b89asC5xehsygcDYVbYgGeSsna2PQmTHAZegZ3NC3oQJCD9eyvMXAVbchEfpyWZzUknbbsBE",
  "key29": "3Di3JGx6ar4hFe3NNBPu9PKc486VFVqYiz87jXHBNKE9gwGG5oURFixYdrjfZrFEhJPjAt7y11kmkYevLre4cHcQ"
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
