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
    "5qeGUpAcL821FZrrgmejffycWgQ74tEgdv8Sf5mDDpvjcj4Hj9oFzzgJPoJaQKXCfJfZ42ZPk11Z3sXpkx8kzngd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25YREhM52YZCNhuYkcQeAQq47yB95UnC9Cz3AbNekXLG2VNc5cztLxvgzhoiJBtiVx6MixPZ94EEASToCfzqHzjJ",
  "key1": "3VTFCppLrkrKGP3RAKZRrPw2kEPFrerk6vwhpra9FKYKyopXpR5NeyZYFgCAVhuTY12KekLXWzxtpXtVRbu3Pyqi",
  "key2": "31DRedc2UfbGrU6yAKd3MztS7bp9JzSJaaKx8y2wddzxhnVo4hb6tovTpri5a9yfAy2siVynYye59TDrbbZ8VFLV",
  "key3": "53PjQbYB8jjebbuioGmLfjmxLubyeYasssdEh2V4DA3imdmeGYmFBhqKUdAX9om494AvbEoAn9gm53wKsRUqtKKC",
  "key4": "hUxYQSneVMYB2mwEsUggxMzTzxcmGSv7PrHtuP2NUGA2CMqLSPCiA8G76v3zxYvevP2KiWbnyP2DJ3CJjW5TChf",
  "key5": "p77HLnXdXwNiLgJS6sFT2qKjM3qNRTPMEAkrA9c4itEeWfLMvKkMNd7GLBR5p8De7ucrYz7XDuyJevBb16Z4ZRu",
  "key6": "2rFhcb5SpXzaFMtESrgvf14XVEp7kUwpJBg1qQBXMiVRSzBepHstt7jjw4raXXu5Nb4PzeygfZEVYrcjeYHYKS1z",
  "key7": "4sB1CRsQ5asPs4y8TYGsqJ493onhMgNwQbtn9VLyDEvEkvCB76Z9B86WSzkLwdhPoi5fXbusCJ5paMLDacEQsLS1",
  "key8": "59ZfypthzJ6kpgx5Q7JfWL6Bg5rThiwkacZF8xKPY3oCU53pTMQvEqvCgZ11G4DraCyXzt25TD9fNHMyB5PCH1bH",
  "key9": "3wgAvmJVCgxDDd9aGhBYwLtCvvD1acXAxBSCi72gvhPegzPWNDm8SjnLkgYrjAqVozM46aRefKMEnMFymR8s5soG",
  "key10": "3sFQFrpuupQSLrJJaMzcmXvTBzHR7Bv8V9DgzGLeusDmQRkC1p4cfyjf18SB1NyanAA7ajuP3AFKc2ckon7MzsBa",
  "key11": "4dokqmZpH5sYuCBioCWWnCk7v5P8aLChWqknAtSKSaEzz72iF4g2Yr1GK2rxUVuSzYU16jAcNuXLh82RTeVb8rPu",
  "key12": "26TPE5NKguLSkMscQSNJNzCY61SqkGaZ1wLkjyvqvNnPDqKBJWJgMY5JmCE6NJ94kHSKnJHXkDd5pDcu4LCMA7gJ",
  "key13": "3r7GLqPLeS11bVZx1Nua8ojEFb4s7XGKt8WUb9g6FbbFxRX4deAerZoVtSUWNej2qmHN7ACdZan84m15FcQjf6MT",
  "key14": "5TrAaYJFESoUXKYB7EanYabatanZLnQQ9zWMzXVU5Q6neHGukr5MJjNAMqs4fS5VbY8yXZL4D8UVBxCD6JQSihYQ",
  "key15": "2fMFCB22QpBNP9SEhhk9vL9BYiSqH2bS2e4Gcw4Sdvzofa4Q6bVoAyQXdWv4875NVaaFfJYZuEFDEJFy7TVpBLqF",
  "key16": "3UKGNUdVraNChZdkTS2dyhMqJFnWy21nrmHkVatMvU2GfxWeHWbAv5TnP3NRs3yt86gie2dB2WWRFtJ5r4TYh3Jh",
  "key17": "28JvxFrRGMbYnQs4bTHDucYScQ8az8RFQijxiD8FJXSqUPyBQGytJ6ZKRhLjSiWJb7ht7eNF8PMLcaNvHLibX2ox",
  "key18": "5mM3DCxViWTymyK1pbBqq4SLgy5QQzSsA7ca46yRas4Ho4M3gT7YyrmfQT38sb9Txw8DzYcYvcDu2Hvn3XFHfaGw",
  "key19": "FyVLaXByt13HotpPcng82mq4mDYhRDpBM3J5SyZg1R4u9Xduw3dHdRezqLFAHQmTPJszuwHtLuFhgErJ7XBZJd5",
  "key20": "4Znn7yTfuD9xhDb8V3VEv2Emaw9ymXm37tMSPGGyLd8CYiYTuUZHXr8o8RtxYjJsdtJVNLoRsJRDjjiMsJrqGu2z",
  "key21": "2idW15KaQDfExe3xSFM3sn6kiJev2urHnuD8Q7b3HMzXEQyuwYhCytC1pTX6ACd9i4zhagv1aE6rbt1yxF6JCg2r",
  "key22": "2gAmepz6rv8tALyYu5dywbnTqdxxG8UectoNHbgnG2xcE7UVDgzveJgEPR4gYxgksvKuaMf3T3dRc6oMfNJbJNZi",
  "key23": "4BLx7nqvXQN9kJJ442r13gT16Ce4ddrWthomWrVHLYjYgs1HsJRn96fKEgsk1QTak7sYakGost6KFchtnLttcbSH",
  "key24": "5odY11dQfMfsZYWcKXRxVoVkw1jLHuRrY21BgMgu5XAMYuSi8aEaLrYNTWfXMKMGJAKiyp9zgH6oRBngzELsh3Dy",
  "key25": "3GuR4igEJuFKrehckMaMphwgfAJ8d8FcwGEpgDqRCC8HTyKyDajj7eFkCa7TPXpNZ1jS6TQj4b83dz5uAoWXZ8AA",
  "key26": "3HmWwTzS5RiRsjvQuE9RaLqbdeibur2r8EGyFppA1dKLYZvxCwJPXG93X3u2891jgA2aXXrknMhV7XAaYntUGKzX",
  "key27": "3d1R4db9WxwRxi7qX3mXLBa6MCyEWCGZEgkkDHTm9TVZoLqAmGPLXbnHgR234JHyUhS3Pqy83r1emg6ygPkrMKtc",
  "key28": "5eoBcPBopkNrZwG67p6RYdRNsEfjhLMLrcn5wzyii85EZiC1WzHyCBGXMWjBmNKx7bvj7rSuUhwqRedFZ34nU7AU",
  "key29": "2pyWyeNrt5ZVdgtpFcoD9zPP1Djt4pExDVpQcE5YGtiyhhVQ6nR91bKYWccZUkVmNyZfHXgcd2RCLxpuMhVBQk79",
  "key30": "2XpxRyueKh6riqxCHaeKJJMeNjksXaBnya8yZ6rBT782grNNpogow18QVRWfAN32dWw7hm2UoHEzN9tDwRXkGSLB",
  "key31": "3N2rD35oKggQ2PKxZ8QjDBbm51mU5VWSws2VUUmiYFHvjm8SVSvSB3e1879hvQactbPzpKLSQyNBtksoEWrGH5ac",
  "key32": "hzf8dm4NRtgAJJUJzLKVAczPyPKrbVc8dwB6Q7iZ5keeYKX7L2ErpuHMpuRzwnSfVfrJgZoG7DYzhJUoufpxEvE",
  "key33": "3UnZK2dyv6ekB2wJYeE6VVfdMbz4wxzB5CtoSjm7FM3tJhpTdV8fxVdi2fyKLQgmXTXh2jyATitHpTnYbtS2Sc6p",
  "key34": "QZXGcYZAqrKKsc79pw9LShs1f8n6Y81Z8shahGDvWGMssvu4g7uobvy7dLhSo6UF32ijhWh41TwakWxAMrgafxh",
  "key35": "3JrHLq4VFBEfptV8gXNdY6XoEAPPnfA3vmP1PSNUSqxyRkDtYqdU928BCYGSsU7FS8rHT5Bt4sA55yfR2Xg1mbqS",
  "key36": "4HkC3QXxpF9V6vfav3VwTSuoeWVsJnAhEaH752r93pCMBuLoK1m193GjpNrGVhB8HH5JPFVQcypZ3mpjBNU6b3xr",
  "key37": "9fvG6fLaVGJANw1zb4zjoGncqSgECwzWW3GW7vrXgp2tCoCuK2RM7YJYo6nEmLR6vprdNayZRqH9m7n5zA5ZAyN"
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
