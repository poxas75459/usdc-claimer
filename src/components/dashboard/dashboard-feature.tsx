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
    "2sDKqfwiPrGLPJ3EnCT5ViCgMPpjhfCkTTtD5WqLfQdHVEW9D48xnEcLfXxDDJDkUn83yXDxzGMQFVRQYLaTMdHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ww1XcSaH5NXFyxaT4Lm8pphpoy29oyTuPkoCkL9SnWfczQnJmoJUGCmtBmdecsaQzLHKupwWtZEVHjSnaeWDbyy",
  "key1": "3p5hw38wRGhpxt2kQc7Qrs2Tii3EdvoGutSrFpm5uDhKa9ZoV8drchT7xLXQASCySh5pbD5W5oJc5XabMp92XsYh",
  "key2": "2f29chS1haJVDsXq9DsbVWQXgggUjE1jrKkgTpopBK9g6CzscDqwEVLW4fqXUPzpFZc9UnVta8Smm6V4Xx4LVv4a",
  "key3": "3FyHxjx3Z4s9Z2brehqLg82SiiW4C7FwAprDGKHxgJQGb2zdMHsZ2YK8az56f6n8Ff7jxaRHg849VSK91wUN7ecG",
  "key4": "63oAXG734cQHn4Vkz2LprDAcvpVBbv6bLxcZf5Worpj4Mzzs9nkCzooUVHiNr6PK5Y9vzYAFftqEyaWGz845Tcej",
  "key5": "41qJh9L5vdZAgbPLMRpd8cxtFjjUVc2Cwb9agdsHxSmuRMZh31LgWE1XFZbpYk6GspSFEntdMLPha98Ycubr7Tbp",
  "key6": "3FWAE11Mg6rd81mktJrnbEBSyQkrNAkLyupP32o2MhZpEv7JH5LpQ7JNi868tHGGQ5daqEvzNa1utAVdPJ6L9pE6",
  "key7": "5j6TnA9sBNb8wEHsoDBaVspa3qXya7nTxEt17oZJfPDTtFSghLP9C5Mz75d5Z6ziPezRJye1FeMUSRP7YKAZngKt",
  "key8": "4YZgEcUciT4GZ9RqiifVKpwAvoMxiJN2Y9DhZXwUhaL7JgnBkj6p1MH4EwthW4ZYEKXnG4g1XQKknuXXxzivbWDE",
  "key9": "54GEKmPnTcJ5U2HzDFLo5nATaqPcK9GsFK3EXQN3v1ty6uXQExaahF3fmaVfSrUejWXb4tCJBJEXqKLLL9dR4LiC",
  "key10": "31Xau42auy8EL9RkhmZK5FbUQFUQv7U6fV8mGw8jxhKP6LcvAZ8xx93KDxcFPCgjK6mjix232raebkMy3Uarapfx",
  "key11": "aVbtH4VngrXyE9As2GJLBo9rW76fb3u4iD4q3VYADPTLUzJXWj3SRrVWPDrdqY8zhCo5uUcHvpT36wmeFh1qfix",
  "key12": "u7hGeRP3hfByFh5juv6NHNoUmqemuChdvKiSxk5khijawFwzGwvG4V9qD98XP7GNizU6dofjQSkgJrFicJc9NPx",
  "key13": "2QhAn4JT8wCvoFR9rpYkSEmqmrucDeHXEhjWjtWrfLYrWecg3mXxEdKChoDcQEDttjS9VcK3EcXwqwUd3VffcPtJ",
  "key14": "a1ZiQh1jPfF4Li3VBuBfvHRs9acoJN6JoitHDjnYppViEPS8yovaymyfCRMyiMoohGp5j3rmPLXJxAABggAyFDN",
  "key15": "f32spqVTaZ4Cf2cm2HYUbPdZsQV1vq9oeEL7P3xkVqQWTmkMT131oUoVCngym9tK3oRGQC3Y58vLnWA8sJ8usjR",
  "key16": "39L9ZhRdisNyBfb8DAmGK5sUSeXLSNjPwMJnhu837wunyJVWMCRoqEFmutTfyr9aTtrnmPXtzvLakrpeqMAEeMQh",
  "key17": "3j3hqLtQMbBcqSKUDeViV7BLLoq1g2CwLEiMw4Ue4e2WzNbFrxgAH4wZMkW1ZSn6o8QZoWKcxAwKtKgpvmV3fE8z",
  "key18": "2PHCvFWPtXbn31wfPeJdtDd7h7LDrCHmSYcmj86xpd4Wfd5kfgrvFNK87aB8HzMYKxy237bfR37WALfqL7yb3ouZ",
  "key19": "4x9RzB4Fekw3PXrKxw1178LWFKEJ1Xfbgg261kiJ1A2rdi6FMc9yfLQRnse6eh7WCoL21d5o7MUZgKM5CHqjqwvQ",
  "key20": "3jB1TYjMRZAvVGwr3VR5qvJGatPNNQkeTbDr2EQKScNfE6QWPwG1iw97adGbxvmV7wFybxhb61LhF9dNeQeBKhUQ",
  "key21": "3ASVDoTB4g2FAWoqQFDaZVQrnwYfqfSPAt1JvUYuHRoBqNv3ZkQovmYJaZ9GiGxT72BB296wXi4UV8e7AS4dy8Jr",
  "key22": "2P5vJ7DQBLDErR3u6NYmdYy2HXURN2c8tq5kAp7abvLzgsmepL2QFFgTwHhwdY3LQiyxYaRfM66fk8cfzu8PT4Vy",
  "key23": "3vis3Y9G3BaHQRJAAM1y1DqPqYCGzvX4hArDFVuTGSYrJ3kS88baKNnwxHRwfyd2UnndEa2pRziFPMAzDMspT8Xx",
  "key24": "27TAPvVUi36cCzxFMmXMUmfp525Wjv5yYHg7kZ6sTx7epruS3vRNvN2XSSB93B2F5roghsp3Js6HLpPZLymFpX5G",
  "key25": "4QmcpUoVU4CfkqUnSriLjXQZTJmfFyUUyqG1npXYepobLTJ96uAkNEFD1d6h5gyMqqiVH3PzgfAasEJKooVjyQHw",
  "key26": "XGZRsJswmgaPyZDGieJoBxWEe59CgxhQS3EzXSmJuNrgivM3gA4fchsNb1xxZ9e6KvJAt2GMgZajpmSrprUn3eE",
  "key27": "4Rp9NXaq6zJyTvL5TyoPxCZtx1yijUCjaFxwhVBmKQ5fxZ1DQTvUXYXntGu77YRkKce7VwSKHz5AffaKTRReZdKw",
  "key28": "4FFEpkrUpqfRu9bLB51JEzdVQNbo4GDRamBjNh56LsG5sPk9n5ErfCqqHBRXLyQesB4TZhxfFPtX2UZhf6EfehaG",
  "key29": "547KEuvnDKeEVfqGZEaZJFyD1UmyuJcHWUqBkBdKiNqHahtXvtJMD5PQ9Y6Bu4xpHPmiwj9x45aYGCMB9SSMgimJ",
  "key30": "35cVLDnjaZpEpuawJXeJW445A2ZHhsAPrLRZoV4MfCFBeKBAMefaFKUEG8aorYSTavjaXvwybkVLMxMPPy1gsq9S",
  "key31": "NPXMyW29DmCuMMbEXVjYxp8JQhgXtdbEyXmtPjsXSBwEYzP1X7opQmkV5j81UzM5g7P76b6Q2QCouQvutgzuaSh",
  "key32": "2Trn6vUDrdzdWTpWzWqgKfcmVBERxbH3hgX2aaZXd6ygacsDSfSccnufwLRGyfm8twqhTqh8HZKJhJZiawGzepxC",
  "key33": "3sREyDo25WS66ppoCrCAVjwfs9ycEAjdb5nXtqVYfUZha4f6MpKr6VLP9mLfwaNnghoFXV7pvB1t8GZQtNyArW5a",
  "key34": "3MnMZv8M3ca1ATBaxeA5hnpdvURCsAPP6NDpxtR8TGVS3Kif8ZoPTUShp69ZbftkgGLUkWMNptHsnGQtR7jJ7626"
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
