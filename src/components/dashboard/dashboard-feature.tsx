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
    "587L3DXEgnKtjwSvgYs85t9YpXVAXSv4WK3fppvZfnCgVAQEmmxPGsFiebn5ds2RnwMcNfoyGS4dSYiR5kh8rbFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EZKA3A42byeb5BGxABnMBaBjxbhgAhv27eTPJk7XHJxauehcvcW1khuQxuGkU4tu2GjwdYmQtuTaPLPqLGU48e1",
  "key1": "3mt6VjQ6MQrQABwBz13W1SEtDDKUrgFhdvCGuTn5p5VzG5uZEgjDBKQJxhEiR4YGuzD9PEB35tumSCHfdcK9fb1H",
  "key2": "5qaHBu2YEdimRxX7CgDM7bLZk6gGAXwxaNTSysLAcL3ghQFerYpQ4GFLfxtWFR9k9ZttMo3a5AbcPMG4nR9sAwbE",
  "key3": "3yLCP3ZR3meY1B72Pp7r57SzY7r3g6k7RtxRm7Co4sePbzTpjJLoJRBRxGTxyfA2wsrUKvMH67gRXkbgDVhhuNPT",
  "key4": "3W1wpcWminvNbzv3Mk13E1uE4yHNtQUW7ecmhkiWLES8WoE24fvSRMVmGgqx4rxrHPLvhDDE8ZAVgkDc2fVbQQTU",
  "key5": "4HgKHFDZDKWJJVQA2FU1c5SiHxTRxXnt7QcB4g4eU34QjVhmGR1Qhh9iGnjXUJXiemV6ZTTnZc8D3y658nX9znRy",
  "key6": "zBHhcn9S2JUFPD7H6Kk45x9b1FRc7wVEsUqPAY7cApofD2dBvCmaVasfhRPPrkTjE53bQTt7sN2DtCa4VyYKJ4B",
  "key7": "3ZKQsAjiqr5PBi1zZJ784onP6ajXuiFnqaZp5PniCCpkeJ95iXBLEiBNAX92jUTDanwhdM6DcYL2z5DPqquitQg8",
  "key8": "Xapr8CtnZQemyd2GQbB2zX9eHTbkE95wgMNLhZ9kUeWPwygbXdhgRzGaHYDcuCxcmJ6Th3AHvGz8Vk5eT9MT4de",
  "key9": "5FQeWuFJC6vQebUchSV2PyzVGNAdE6za978TwmE6HKr5qwXRqL1zdiHmFiHugdqHhNA48C2HghLGgjdraUa8BnHn",
  "key10": "2Tbt7YHtCjngR8ELXUfmdALPAWoELfET96qweAUxE7Nwe3VbLUoSWEJ5tUEcYBzxwZEeqDq7KDHTneUmK5mFgPb8",
  "key11": "2cLumGEs2VNgBDeznGBwoTZhJbzXCgAhXBN36gyGx3w79cfQpYCtvfov3NjKFzT7M9CXSTyudpGngYhYYo7w3kQG",
  "key12": "2iYrohxEo9kuXMz49AdbjpuCbct7CbLVo2XaWEKGVt32M8Qvr7z4EApuYvHUomFWMq2NoLGYp7YaZAEYyaqaH6iq",
  "key13": "21WpouwaxJMhs5PJR2r3WwLrwuwKTmh4uFoGeFS8gzmzsZdx4DDwVRvPvRCnRBH6cwmxdDGgdJTQrZcUJm5434Ec",
  "key14": "33SY5fymLFZEUF4fsP4GeGXqmz2aEiqU9pzKLggWFpJy53Qk83KhutqYbi9u5G6mMLvu64SL1vZc9egVSaQ9GUQq",
  "key15": "42gYQW7BWqACDrPKdbRFZ2nJ18MFtPk9ay5vgdLEHPHUBjHy5u3HspctLLsujDwCfomwvBDk9Pe1goqR3TeMrsjB",
  "key16": "3R3PeqdnprFMipSdv2e8wHPTFjC5EGjkS7M6E4CBQeAchvryB3rcLKmA6UT9ZHai4FH8K4L8Xuo6EpWsPiLfgpZt",
  "key17": "2PzXmNEfJQgXMcEqpaSGZdyrAGoNn4UQ9W9bJs94cCabuu2Q1ceCBcdKhADypHHQWALBwTJqbVazqXTYgjAE9fKx",
  "key18": "jgQBxuvFwS4FF9A9aVHDtuySy5s3k3yi4PaREMoCqaYq36uvSJrwN7eEGcXVECrpm3LAtCNuvrNswsjvd5bptNi",
  "key19": "4rm76uDhdJWNd8m9YgW65mWPSRQLvkZpKBrmSksnHMMn2Bu52GJvSX82bRe9HXUKgN9iQ76RLsUhT4JsFh8E3FX2",
  "key20": "37p4xKcvB9Ceg9V99VnVsjo3yQzvmjRqE1YdCN6DtXJZwkFW6FKG9ffyUZ2ABuAt1ncHPrEdGdgMXg5e1exZF4K3",
  "key21": "3Eq23xuC1TCZt8axd1JdaHeRXPYWQJJbYUbXRjna1SUu3NmDzYu9GwqNaaVX1tFT858oYYjMALXtWVEEMq3yMSB8",
  "key22": "3dZbM7QDdDXPzKJGgUWfrVHXs8FTrpVr2MonomUPhZ2RGZ3L58h5bBuv79MSSyTnY4uwgrYDoqcfCWFiWK4Jn2MG",
  "key23": "2poqeDFD729e8E4WufEMkHmvv1Drm5TapuA13cKF6X1eJrWHuLHB9PLDNSZ5mp86ZV9b8L5TzSqQ1715fgpz9XfF",
  "key24": "3JzwrctiKWDzucgK5H3Z2JJGgmxQcShopyBPiGiTQ53V7Yd68RfWaYjHwFzLQPMcaiLDT3c2wqMSKRMWqSGDw2qk",
  "key25": "4ZKxDCJFfwD26VorSgwjAJfA4hDeiKkbuqXhk8GR5cadjs3g8rsWHBemQS4M6YJzvzDyoWC96VTyaRwLxXJvcbHr",
  "key26": "4QB7LtJR14jepUBXD1x6MaZibgydha4YnJgDXBKfM68MaAZi6sDydbeE3kAQUw45zdgsfuwdJT13jvjH4AhJ6AYJ",
  "key27": "DevaUt55xEAacBsm74XE6atTzpBDx4415C46XWhMje4g61ZUs9AMCnQoxjjVVNk1QEGhACFKxufJmhi26fuCbjU",
  "key28": "52mF88o9pBFPk2zkEQJyeSmFfaAPUzMCiYA246VPsMcnXWg79jshWau1BNZzSxtSjCzNBdwYxKrrWoGZczsD8gkc",
  "key29": "52XKJ1NhW4CoeLhWC7tjL3SgesoKXYKMFa72t1JTVstz1acpyFDt461PHaS2h2b3wEeixKaRN1nQJDnYrCsX98hy",
  "key30": "57ATTmPYbgdnakzvDub4sg5qiVi8GjQx21THRvjygiB8MUK4cy7MFidiuScknagkMhHyizB5D9Rjdc4giN7rkski",
  "key31": "utJS357aYsbJRDMYQJdB1F2xQajpP2wF3udRTZXPb2ng8YWLJDErbDno8Lf5jLj9Mq6xck8WQbK9zU1mLq56gUm"
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
