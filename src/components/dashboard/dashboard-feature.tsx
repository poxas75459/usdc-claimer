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
    "3WQ3MFLYwaqFSA5WVyyUL8HGRDnRtgcJFcyUyd8cv9BmQVoQas4BzEfktNiD2LSMF2C8Yo53Qi3cMC9TCNivY5tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZ8uKRHiJsorCkYni1DtgBNeWbs5BQ2iNM4Qx4gXyXPHyu11zA3UNUH58jNMM7RJySQvuXtszeJroE7geWt5ktN",
  "key1": "DCdiVqRSyLVnPbNzCZAMKtiZjVFLdz1LGNpzJcMLdVJykRVqQSe6KnuKGSKSLvtUUa1c8aUqM8Kas8Wxsbv6LSY",
  "key2": "2Sz47gcBqWN48sBsqLKarybVqsP8x1n6NEfBe1gT1x41Zub9XcuUgfkjYEqN4jEfocXZUi554PSZENA7TVQYe1L2",
  "key3": "2qHixtpdc8nAyMx5wN9125XC7HVoL1NTCQp5EYFre2ZepZmucuCugBusfzYLQqg7ziF86sjJi85WridyhLHfNaJZ",
  "key4": "ZMGVkpC5V4Qjxut5Zz9dL2XhTPkSzZUHvpvX64jSiSSLB3otdgmbF7N8XjbXWR1un5gsNGtbVDYgnBNKUKA1JVu",
  "key5": "2wM2mBTcKYHuezfcnLYTjnkmpgxU6rYgmaUJNoeuQEHwXZcr8Y5n5XYC4kcvT8RcZxhxRsdQzKRz3A15nyTmaJTg",
  "key6": "3zQkdicsE7c9NUfbRFyeSgw2gfza5NWqJGDTLT1qvKneJNW14GftxRWh31dyoKoSRW6FgyAZtooP33U4cRWTuWge",
  "key7": "54Fiv8HjpuC9ECe3XAqeimAYjRBCLaG929hDPsGLqoVJg3E5wRfBL41EZ4V3hU3WnrLbUhpKTUAqBdmVHfRgKEwq",
  "key8": "2e9khCqNpY5AqDEBsPXKgkF3Pn25Lb4VqES4Yv9TQTTxbSfQM9B8WjmW8Afk6JeeK813TBqdgcETthwZzC7iDaFs",
  "key9": "2T8He5LWNEtLCqrQbc6acmgfg7AWUCegQtmhCZDyLFfaN4TWpkbxpe4DYH4KZynwh46yCWuPdW9Vk15vCWB77B87",
  "key10": "3sj6J7Tu85LZVKhxuj4xpUxDWc4oLGnmR8rVmg5Ani1YxbPiE23W5dNJeCEuC73u75VUvkmFpeaZqtdDejDLMGe6",
  "key11": "2TJDuQ1fA4Qr2AZ9RQbFiRKKneiATDWxQAqeAVN6HGmShnENH7LsjQ59oms9LNG3qf94nStcFANVdrvXJNEhBync",
  "key12": "4Rce9RtvEcydPVRJ5NDPs1bZxMso5GhpVMPnrManEZtimdbyrcssF8bGUoF8uqhQSffHDVTXmWMWP1pmQyUbhKyc",
  "key13": "49E11DHF9giq99nNQS5EcQPgTxvBPvz42vdWYymsnpbE8iDc4kp1UQmC7djpTdAQ8H1xa1WEKihM5N7ChtT7KhCi",
  "key14": "4d99K72jpEdgSTYhyBFri5CFmTjvCsqzGEp9ZJX6ZzJ5j1N58UM9N9AuNZS9b8UVsKfQqhfnVVAYyMtQPDWPTLdC",
  "key15": "Gt7RR76LQwnCwHKXWdwd8oq5RhVZ1mig8GT25gga5qqMVS7RDE6WZZphGydMU6Zyzv3tdJbcda1NiceJMmPq5Ce",
  "key16": "YvtdRQ4ubSypFkVazGrYdK1uEZLDPze3SmMibksAvvKpDMNPABpEmPgFYpwZ2SLWoJPCU4AL8C2BqC5hWoerpM4",
  "key17": "4LMknKB4rxMqk5Z3zwatJh4Za3GP1ijD5qhhk22seiBw5doNU1ydwwzjAHUkCMFVEoMEz3HmghcLVwtqZR7mTw7i",
  "key18": "PxQfWxgC6c1ZvYcxC8m2RqT6FVew3DzVbTR75csk3DsbmRXAZyYjhnHmcoa2JNBPmo9dsLx8xmqpGGoTgaT9pjA",
  "key19": "3i6noM9vRx4ZKCHtxCKnDewy456ni8L6xYBSX9qjQ5povSu7BX2Edn9JF8xuvQUvjsZ1TJF3VZSytbejsLoyXGgj",
  "key20": "4rAbPUqvpu5vAaMiXHtvnKxqNimA7dcprYW23bfabp1T4wttBoc8btCDZKLAAYaVpGatGmA4qpHEkFj7sJ4ztsJ8",
  "key21": "2u77YFPxCdd2DFvSgmtcvrry3XTLuwjCfBZ1Azys2LCKuu6eRwLuUfawJNcqskKzhmbkCEQDanqSvY69YBgGxnqd",
  "key22": "TcV45QYpgsnnZaDMhfsqA7UWAqqEaqvELwQ5Y8QCyknnwwUtvaQJ6yUfbXFMrE7udJv9zGJdAb3cbjMH96RmWPd",
  "key23": "4mp3SovXDoTr5eNPyh1fghVBjNE3dWCkbSDWQEUqqnMY5LyHgqnsyff8fonyGFS1QP2CVBaG84hvzKzCFh25Abkm",
  "key24": "37NoLZ5wjwapfWQsEqVczL548HAMLqq2XfY1P99fCPm6iyrLg29J1ibEbdU9EbnY3en3sgND2u6S16x2DDqCB2yn",
  "key25": "4jzz2KGkX3KTYvBPYr5meNB2sbYVLKF1BYcrTN7c2Tsqn7jNTHoqQPoCufQM1ngej1XpoDCBCYxtnsmSrohnARsT",
  "key26": "4K4MLmHEnju35crAiTrLgxBah8q763MzViLJkZMa77Dxkkbakn9Lqe5Y3cQHPN773hTi81hj34bbtVu4WHVLgUvC",
  "key27": "3F2RqGF9bVGinpnitEg3VqAHGyXr9nLk5d6XzXVySpU6vGsjsVSisuXToSPp1n2NGTm12nD3Rc89YcgN4z1VjrHA",
  "key28": "3REu8buHay9i6xd6A9rm6dmV9oeBpxUGbz3ed7T9WU64k9e4wcpsQBR3TtHpXJ4s4NbPmauTJW12xYzcsvs1nHkp",
  "key29": "moFZ3tTrcwvg2kLRANVZf8KA8JLDkJ25gZh2B1fZMPSri9G1sYC1chpy7Wgq57wj8MjfhgCFoEKNi5YLeNpE4LY",
  "key30": "3ABNo2zGj71iNbjYcwtDWuKhausTgjxkPEyiZ48igSfaSkdTixLEm5o964RjKKJSQ4cxYq6J1gL78TCnbppJQ2Y",
  "key31": "23JG3gM6j9gZdQpjRXybPKwBx35wYfAC6hvY1w76ptgWJ1G812uxXBUcmLbtyU3Cwt9nkan8v4jytkhhRcavE1Zw",
  "key32": "2S52MvJVGX3HG9e45t48gLsnkShsVqwVoudpSP6JhJ1EsRa6CMqKBFvDoM24DJDgBUMZN2epUzydPvnxwvXTTZjw",
  "key33": "5Yd5991cCDf5ZNucZ6pah1NJRUQPrpTKW6T5t2nVFv4eevNCaUcR9vGzseXcKnRNb91rTz44niHVWsCj2ue4W2XF",
  "key34": "NRmqjSZ4kGnXth4YX66xHWMW9uSAkNigzaGRLAahkY5hnaANhr5mFi4coJ51mj74pKaMpYyZQwZU7Z5eB2Z35Sn",
  "key35": "2BKcm6kEdfe4C7sb6jZ7F9a7x8GGcnf7C6d1WkGxCicA8TFos6eoBDdpEt58sigub3vWxGKiLXskCNVvkc8aerZX",
  "key36": "3ZQQLe3WBAckq3fsqKQD75d1nGN6zf49N6m35nyM9GNUjPnysGByD5P7TXyXh64EkvCmdE3JfWgwQct9ugkZYYWr"
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
