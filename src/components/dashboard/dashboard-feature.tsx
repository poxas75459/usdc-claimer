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
    "5eGJ9UZW91kC8ihpDCS2KBiVtRmXFuNUkZqUUChXutsqjBaf1CzJghyxy52ZtKJdPw6T8ouLKtyvgGQt1UQfBiBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pyhb99G7ahsayYTSsKmCwgzoNTesmYvizoRHXh2Fwh8cVq8Ueki9qSQpwG7bmYQmtL7JHxBmUfR5yBL9d2XPqtG",
  "key1": "5kLnQJTd87TqwfwYdRZ1DQTLipGaBUVH6QjV3QrzC6fQYzca1Y68H5tpGeHLY2sjs2Mhc3FbatNrUkCnS6SU2VoS",
  "key2": "4D4uqZCnKz8d9wfarC2rQeVFqpvNYBHcz56vRFUkN12T3T4LXC38ZMziPuGoM1qiRxa3xszC3mUjYhcMtykyaHAK",
  "key3": "4GvLtVRueY1Jo4Y4uKxwCk4Y32EogQouQASKRhopgLLShTxN1rHU3vWQt2ZVjatSyiycDtAWaTkqdtbxtP8aXs8b",
  "key4": "3gXxR3V4c618jqP3byp8uiprLAr53UvHf2RMxU1DKUiYAKxs2V2NrJoEYmKWK7s2VmHJ3YUcnoNxiTdRby69SeXY",
  "key5": "57qHCdNBPjMSNVTWttEPH7jtJ9TuJ9RCv7TLViuCepqHShQ6zdUeTZGrGBL9tuPRvYTwDxesteMmNa38yZjVxtQS",
  "key6": "63tyyKAGqPvjyiVDevc1q2DnuRcDA3C3AFBfMyahbFPoDeeYuFmRPU8dRRZ4VHaVW2ofwfqQNBoDvLar8fWqCgG2",
  "key7": "3CUUWFHF45MmtukHRoL5xaijG8aL33pD4cNrCKTYc8Gzj8dBmsAEHWrdHYkKS7d6NfM49FrUhnwkFCKdwNqoRkis",
  "key8": "4nfZPbpGDjvwQVVGk1HdJHUodgenQfVsYjBKU4aLPsjevdBdgaTxJMcKneeh2RMHzUk4Y6CowxUnmJwcLGaFMrwo",
  "key9": "2gxsiVv3njv4iArCpQHpsK2cfdZqG4pKbovp1j2mMHTBvwKT9JF6pq85bJ9YPbjKW63NhcrkyEXtCwjLEvN2nhvL",
  "key10": "4yKags9or9Z2KgPCZD8xUyXRjKZDeUMPW5w1VscuqveqNpp1ZCmGdxeDD3xCwFkaQUjw9rbgEFCbWh6jPGosaeNx",
  "key11": "2bEicpJUvDDZW3u3o3Mt1YCsTKYUzXfxgPvCjhXFtdLK5G92rG315hJYG2KCeDLqNpxd7bynuAxAWEmvXmNBV8mE",
  "key12": "cqvMwQokLiAi8RFJZXdCYWj2AqDq6vKPQpdas6yaq3LDBkfzGzuBFhgHukiQHB7EoiRrQaa58MiKyyhAMrA7PWs",
  "key13": "np3Wr9TGkZrFHTfSRKJo4H6EonVMNpQmcLgsCaiSTgY9TTyQLuUW5DNStgAuyDsaGBXrX3kot7NMBPWpzvTtfW9",
  "key14": "3Jo2VCtr4733QfHNK4BrN3CqguAEWETK1jEXbTPSrceYniXAwewkovNota9dNrDoywxNwHFbCznggXRAC8p6GuiW",
  "key15": "5FrHm34fZ51kT7kJCNt8wY33vtPYBrMXPE1wriQtsimgQL8hrAHJqNd4rhF5cusDjbDHntxGw9NamiXJvChLpa82",
  "key16": "3QQHYLQ9btWvL8WRLKKqNvhywrbWQKSaK6U6GyAwMmGuBUAE2o4cKKfsS6QXKwpYoAE4htu4myrMLnxzZdU5yDQr",
  "key17": "Ydgsmn5arDs2T3piFr7kNHwB1XtUojetMJL9GciXyC1WGEtcPr1AtRYZPswxhEj1MCrtDD33RALG1NTNNxkf2W5",
  "key18": "29nNdNx18e1SRvnewxaQQGuDCMZtWxu8ZHZArKaZmuDkDt94bncT7quQbkgbHgzVa7Q5w62nYJZfDCL4waMxgAFg",
  "key19": "5oraAx6AGBzzRThS3xUYwkTPaBBa1GEoMCi9dbmp8rhkReTw9bLia1cDXybkuz78x1f2fMe4tr4qy9Cp4MkN3Z2C",
  "key20": "2muKcUd2pkB3fB7LEidw5ZajqBG2wAUSjoMTt6zGkLmZudP5Sw6j7uWNtPc9Aj63XNVKaFSy2FAawjeZfEkm1HBu",
  "key21": "35ZtzaWpQPUurDiXqz2dTwLRXjcfP1MGTarTw3oux9hf1ExYyr8YjeLSD1H5X1yKERfG3duFBi7hXLMsDseJshXC",
  "key22": "3LJgc3idK3PPgma4mXs6u3q8B9HW2TK6jHyD74HAkZBebEtjSDfwKpWHpjeKB2T4RM8umArtko91qEhepjNhTWyq",
  "key23": "2DSoKcd4yvXLKuJXzqiafFUJ8fuS6T7qrAMrAcJjbenAujaGrCXz8emQdpuN2ceTS1AGRiSX6FKJkSS6arbZMrnW",
  "key24": "4Xi13CbWT486NHVQEdp1TUss7RxZt6fYQkmvbQKvcxw3np38g1BtR6y1crq5g5q5Vj4Bi7eECvbKB7LXPxBC11Ga",
  "key25": "4hJ2cYq8EP6bp5azmhzYHa8eRQCHyu1f97Ehh2QStJgYAtQT8cVw8V535p7LZob78NafMpuEQdaDA7svtWi88DJZ",
  "key26": "5e82fmnchnSh1ZgahBqRESR7LP2U7TUZmNfPWGxE9H6PDpmte127J9S8eekwuL64CrFQ1TFbviHvpc328RxZgF6r",
  "key27": "28Udn6VSrdEJbMNv5RJZCDqmtU5SchkPs9QEkfM2p27EpRZvwrCkNgsD2U5G2wb9mdaqtDMoTGE848EFGQ55AoNL",
  "key28": "4k8La53qgYFmNZFeboGLQzKJPZre216t4ybS7n4ZPRzsVdajdipmwBmjXoiFAQ42EV41YxcoDpqQatnSpGm8L3pn",
  "key29": "3adyCneRsBGcYGFxXpoVtXxBNn1KonwZC2sPxuPtBnYagaoEyBst7Agz9tqzcQM7Uhdsa8vUsZQuzqKxVX4f3NzM",
  "key30": "36vq3x5Mz2uj9Dj51R99TKNnEiT2kXrtH2L57fn2Wqn7Nj4g1oeynZ962rqn5KWzHpYQZqdV4bDQF1JwBSEJuf24",
  "key31": "4utuZCD1RLQmwwRKsK3XFAcskHNt2sHQCnkQ5AjtdDcn5JzTXmMPsQuZ84SXKX73quYkQw7YrX9NFJ6UZ7EcHmEz"
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
