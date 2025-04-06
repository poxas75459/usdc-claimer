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
    "4nntuikkKCknc7te2YmAwqBUnQ662eNS5xi1n1kxYSe1M6xynUkG7cHLyY5u3D3o5ixAigKyD8a1d8Xk48sTKh6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x6qFiMwMZKQwuiJBnHwQrWD8xS9Mct9NaW8YhoAatMdycjxq74oKKMG5dWwwyPbRQ64HmeNn99Rn6nLMX1EQ96Q",
  "key1": "3dHK9j6cGFtNLmDKeNKJoiHDHiFB81WaL43UR4actrd6RZvS9xzAVMUj486QyYSabzdddScj9AcexrrvngKN4FdX",
  "key2": "ReCdSXNfUidGBCuE9QVmSTd9MJJX2TaXjqxMqEmDruspNLi2FXMUuhYtcEeyVyFV27RQzYSTvUReVGu7cGM9xp1",
  "key3": "4pJLqBig2ucCQBXLDrxVQZr34vAfYgAjUTePXY5E3hCioHqy2YAFSCFE5FqgY7JVisHUQ3aFF7K8YYB6HoXKqgwE",
  "key4": "4nAEMa8XFF5AtakAh5Nnifu1E1z5vBCvAu9LW2BaGnKSF6tBi3WNjf4WCFnBqD8exzjD4uuPrDqmHM5Ngmeq9D6R",
  "key5": "5tbMC5QyaYmHk7oxQzXt2UZVkuGMGzmc5AJKqcdKX3LgC3iuRTG431tnwLHNgBjzhTMiCazmEAzaDzYXRGMDZsDW",
  "key6": "Zf52HHQHE28dzgrVuftgzEuuV3nUwPCDEv6C8jw2dBNh2ajoYvvAxXwxBzjnY2dvZV3G7uGmWK6conkyaWo264b",
  "key7": "65r2AuYE2FEME6c65mRB8EE4ZREkEtWKiZLPMq6DMGsTgDmnJVGuhaLHvkb1XFJHvizbywXeVCvrZC7HJfiZ7tr7",
  "key8": "sEqLN1kNjWvnGFXabnoRnrche2xoWU2KuJvyWxvWZPACBcSf6YDyYp2K27oEd2EsAF9D3mHAPjEyHkHQqSPAyQ8",
  "key9": "2qhdB7vjFrcnK6iLeZhzyewyZN3uR6NjEXdjiekJFqeGJ3EbFfHjvsRBcD4KMchGnv9LZHbCk5zhD5dijmzmZeT1",
  "key10": "66SkfBheQqc5BpFXALAfXoydwnYDxh99jtYr4isMXYwNWQLYUpeSmE3TgTKthRiHzUnTebkDkMRnc1VqqvNkpzF3",
  "key11": "y95FmLc8xLt5GpiGkQmoXrPwuSaWFTb2NMMLn288s2jHoYjmLL3wGJxKgnKd7GCn2BzZi6gsYc5CJywexrS2rTG",
  "key12": "4LkUX2McRk3oWeiVyzfXkfhkMhV2LCdpXo5MTeNVU2BPQ418LktENaXspuJVZYwCpS2d9BnTiRCqsfP7R3HhSxAR",
  "key13": "61gMEH2QouAgRk6y9RWg6Ys1GepPGheKrdrayRLSyAzsBSXYt8rDSEo7KEpYq395cJR2ZXadAmrNVdw2vbUL5Hxj",
  "key14": "3ANt9jyprWLTVjT6QKBbRw5wuhuBEsmHu2Df7Z1rg8XkbZsw6QX8Y88eAUwYWFdAkLK6xW7Fz3QoigkdH4yJ89rq",
  "key15": "2aYpCaAFNjZLDFqM9dXJNEtYEgWn5UwdZhJhzn8BYTTfmgkJY9cSKzSfXQN2pLyQt3GEAC9Wg9KdGfZdhdVy6Yjw",
  "key16": "d8xmUh1bW5pDy7aRe7cqcbJwJm5zTjqhUxkz1M27LYPRfMPAJrcuhcRTHbrm8U7MCNs8rmKujRxRfxVWrJfG1U7",
  "key17": "B555pshp24iNB9HXiHhnUkTesCEk3n4wGLHJNBGJGGDDvXCCMzgK5ENmnLyTDVvgvWSiL6oyNG8BVvg6FzCPWDY",
  "key18": "4BBe49SznSJbbKW6Xbb6mGPNWDicdz2ZYmzCPyCo2bQjSEzHVCsRLAwqJyy4XTLHfUPhrfU3jiJNypZfBqfVAuCq",
  "key19": "RmYyfB33CsdC8arAFUiDvzKBpLTCtogXvC6nCVn2dADuy2EWxL2RfAUbUvRKVuW7LDBg9Xg3YmcaSJL1BJ4VUY6",
  "key20": "5u4m7PKHSMSkcSy1eyfopAwhDQX3L3WuzbZprJgGRem93EPe8npAymbRMxn4xVxDxs8uVjr6tiyz8JkEMSDpgF5z",
  "key21": "4C56EaPgN9gs1JM9Ze2Y9ALWjZgBLj1RYcoMv7HB39NMKioyh192Wss4RBWNFEbzy9UHJJJQKuLt9QwPt7Sxa8eW",
  "key22": "2fJuPd7dx4M8Gs4oqsHLNHMy19yXgDdCWsbNgdVUHKmBLg1zVQjX5MHTFXvvQmbkei9yunaCm6kS7ocShX5bvsv2",
  "key23": "2aWkep7aGCqYE2HCwUGda8L1feyaGJk1zuC1sC2khgHggppnp1cLSFQiuNHUcfg6XPsfvjLzCytT6dN3JrUGNaFB",
  "key24": "4MUG5h2ha2uMWt2rYF5HvufNrWAegNxkxKw9vbee8gp18s55JnfFpvD1u1G93RBYmXPiKmSBgjSUdnrhDK5gqtrq",
  "key25": "47yTrYfCX5eKGVhi36Y3JivPx8d3sQDPBx5sDu1HRBhMQVNAN7iF2MK1TM51npWffGaPXeevE486Err33yFPuKhZ",
  "key26": "67D9uHyo6dGRQch8Ui2qrkk4tVxvCF1BsFDvNkLbUB3EW85shsWiV2rSpMYKX7Ez4JpiXjurdiKRjMkhMq6Wou6A",
  "key27": "3aNuUB7prGG8hMXLLXgk3aCXztmUHcHSXaFzbJyoHoHWLEt6bb7987GQjae5G7SJG2Y2xxgSk8aT8G376uzMVFtR",
  "key28": "4TRbwmY4qF3NDUwkpz4puLKabP3iaq6exU2HVamxr695gLRMj8fFDQXkFArE9qHEzU4uYnxrDWFvuko3V6KbQkRe",
  "key29": "4YVBrKHaLTqvbHG7t7w2uENJ1sqwhUJejzVsovVMfbmnoEuGuxM3hkTHqK6py4xJZzJ28ZGH8siBzWfynbTwkix",
  "key30": "5dW94XXo3koqQ42N4EWA73sTSdnp5X6QEfSUE3G6YHfDL6r2dBwPbMVMQJEo6WvTZmkswHoCY8jbYwQFuTqGtLnE",
  "key31": "3gTqvC1115rncVzGmJA6CRC2KTbgG92q5WU1fGykztQfZAifMAy6TQxp68w1oS5umeLSHnp28sLzUQqdiMNf42iV",
  "key32": "3PDAbjo7xhu4t53gca96NHm8oamcNScfBAji6QfCMR3Ahk97ei2L7Guqej1Bn955GbDJ6Ui8bCvSG72nQJUPEk5r",
  "key33": "5ZcDUyLYq9GApBPXkLyMCZCqFd5Rf7ahYYWdfzryoe8JgrCXHEqugBcq2zupKkBhmYk6oe3e85VtstFxvJJw8K7b",
  "key34": "iY64yv4eBGnYL89tKM6Lmg2NrVdUgLerfjshxbCd7J2JC5iLa2KQvnXwTCWscvoULJDsZMHNV65FoQXBmSPiwhw"
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
