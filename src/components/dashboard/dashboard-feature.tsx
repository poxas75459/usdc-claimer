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
    "4g7HNf6tvDHjVaVr2D694hfAbmdpRnuCsNzv7iv23Hco2X7QzJk5MwSTDjayUUGMJ8Gg9qv4t7MxL1ah6zjPzANq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J1S4ZozQ1b9dh4fbQNNEt2yYgeSroFdr15QQjWpuHoLa2CzYEKrpEbwvk7zErqUWYBR4mNi1bKb4HTtjxG32u16",
  "key1": "5NXJ5es3V45XA3wuTK7KM8ucurCPnxd6BirSbKTPzFWtBgxFSzQnhwuoGRwpTeQBxKorSCCaHs6Rg1xFkK2vvAm3",
  "key2": "Ld2v2hK29FYEcENcZHnnxvjpiTL9kgpnX59p9c5k9oMh2B8UH1jjmWfB9B1TPDe4mS1bferLiPdwRWyoXekxLuw",
  "key3": "59Qw6cjSsBMMQGgs2WTZbVGzxiQyCsWP2Hzapqda1ifABV3hn3UETXABZ63ut2YGrhzwf4QZQJ6FyER8dKqH8mJv",
  "key4": "AsY6ULoPQFju8FDdZ3PxXRYh8Qh4ndtDXaRxUoEu4NPXticbzXQ5Yc6Sopa1aao3tWqdjV9W7S2yd9Qaf6aiyCa",
  "key5": "5Le9P8xTC15Fmvpo4JqApMHPjX34CD2UxBNcXQNHmKbHCp6LJ5oTtt6r6k1ppLixg88jLHkWshdj6rjmjebosaWJ",
  "key6": "2PHHgL2dD4KNcFNAu3GTspGzhAiuAcc6CZFpvW15oPjv27QqL8TQkLyqiYaK39c8LFG78PKiDE6A7WZWWX7aKuFq",
  "key7": "25EGG7yVrhkuq98P2j5MMvzogY444rxCX21Mm8JVkAwcLmoN32ivvg4y1gZt3yJWVpvgqB7YP1eTyJumSjaK7cXb",
  "key8": "2bCxWCJLbD6YjBdUoPUwcFUPAnbwR71Je6H5tJ2Qjd4JV96XZi7GuXdByfXoNRb3adnqW5cc2PbTf3xRqxpHAZ7w",
  "key9": "3oY8uJQh5CproczNdVxZ6hFthCik3zTEc2yRR4oWqoPwopg7RoxaLXxRTMeTyabbMTWDbwtMnSr6cttxqY3tcE7Q",
  "key10": "5vFRc6PDkKe7Uy6EMos5ZuSDVnVVfYiesRsmCmxmqURrEJBWUtNsJodM5bP1UGhq1KpG75RzDXmMnn552uq3rJtT",
  "key11": "6XKQmmRz4Ky5bWp9Tnxn5idAiXQg6x1zdknbAZ8QM1HnRpk2WWT8MxGwBdXNDVdLA9efevdERM6gPopXXeeVR2a",
  "key12": "WWxW4SfBCi5g8eriH7kouMUfUQj8s8y3cHDCuBixB78npnxCCNxcQBKriRDzzMvKqZ7WS8LVvLQAx5W6hbCZjYk",
  "key13": "3jbs8u9pt4RAAt4vohr4hprBL1fXzf5ZEmgkiLMLEw23LGXi5ScgHFwaKgJGwa82t1xvhZ7kxaVgzS2wEDNbKidZ",
  "key14": "28SHZ6RiPgtLoUUTqvepLQFS1H39eBurGQxbQvLdhZGeNWW2qeD35ouSSXMNwKKvyRz7qDwc8kzrrUZjATbPiGcH",
  "key15": "8fwsgTCDcWEY4VRaTb7pYBp3ZxcFSuzsCiKC6iQaUpT8AwGkNkDE4UQ6dqTo9A45EYy3dnBLQTTgDSABzwWpn6a",
  "key16": "2o5h9VRcYvhD4wsNHNo1Uov7C9Zi7SB9YcgySN7yZps1YmvMKZGv1BwBiEsVxwvP35CqU17yhgx34ophyNkErA3B",
  "key17": "4QL4MpUQKJiP1yj2yksJCczNCpcPR2PE5hmXShyX7YRoRcxWMm4GDox4vgk5LCvgmvaunRU54d2sqZpvEnrowBXt",
  "key18": "2xeDGMEBTe5JD2bv1p53wWwHH7aKiZ35NXpj2PpfKFcVtpkhdhmfNXUBcRyVDmkXZFgmU1r1BNk5ZqAZiEZiqYo9",
  "key19": "KEDuzZQacz4HgCHt4js5iBrcf9tBDjBcUthCYDusd7M6RajJcdmSNYFj8p85yNfbsYNB1bSw3hAcYgoTmcvMbrD",
  "key20": "4AC6ytH22Lf7cqx2YJtcswNgsNme94HxhQSQz1CAMiLE93yQqzMkPrQgmbHiY6uvaHi5675SqxmuqSddaNXTMi2U",
  "key21": "55LYf2VY41Lfcw8jRQ7N9qMYmz6jnwLox2y4w4weveU1RSbMLP681jDj7x8yAq5SrVSq7qYR2HTF45tqtxZqUdKZ",
  "key22": "58wKNX5jCywdwdXmeQMZLJVdrg1EL9DNkSdjKUpXE5TKSx6q9HnWCZapBDySh5WWBcuZGNnkqeSNoxAVFrNn36gR",
  "key23": "22ogtt7JorbXNwTXd8dVUvD24iUmqNMP5Yhw8GfA1Zq5QkQ3Z4WJwVCqiuGWxFEXmwr9r8xTmYu4BCkgxmj6xBHn",
  "key24": "2v86yQR2JSq9JJir9NYX8zChQCemBHjK9ncKXdeuhJXS5YCmnYv4UU6RTy3agwUCQTk2twQfuu2psxZsMr4xWa4x",
  "key25": "313QBs2oy2fHo1bXcSSm6AYbQ7yL12fujun3RLnL3219mxLdHqKNqkzuK7ieNZm2mWmNAST5nfrbwanu14mRu4yN",
  "key26": "36szPP9AY8aD5EaNLhv2nR3qj1EqBm6W7jWKpkd9K29B2UmPWiM5QTiq3rVDBzQwV9yj6jkLvTch6a5JXfkEFcVF",
  "key27": "5hreiyzVETpnnX6rDHB1CpLuSA4B4E9p6NjkQV6GHxFG4U6JiXvmVfnsWmJge6EzgwgJLATUAw13oq8kd6WYLZx1"
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
