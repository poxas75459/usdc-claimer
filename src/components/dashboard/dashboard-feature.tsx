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
    "27fADFdXi95UWvfLYJxRTWn64uCmCRnZow3MRAN4kgfXujtJyLMuAPV7rCXVvX4ifmvihdf1aZRK8SWNZicf3AYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66toFUsj3DXJSgSyiPP9V7x9SuC8NTf8MApuzXoQXMyqNCfeACHJYaRn71oWb3kX7nVGHnWVkp7Gtodn9HXvwyfY",
  "key1": "4GKc6UsQWHBDuvs1TMmDRPk4MJHXbWVz1De8Y95d6JPvmwWvmKznPLzxqWRJUh8PkWHwdCi2LVSLeHZYY74fLBne",
  "key2": "2mvax3RPJQTyYHW5N2p1YXXtJ6E3GgR1VJPW6s13FD78yQm6zHrAtMdPHsqnKcLBEtQjygTHyeHoj5F2ZN7qAsLw",
  "key3": "3AsnDqmp3CRSabGoDP1ynnznjvcB7o3yB7Q9o3XmpHfeg9V4JsuUBTe7iin2UmU4D53GAipHZkeddBB5dCbysUVg",
  "key4": "3s6Bgtyib3shw4tuF9uAU2AFUeDVU3BysjUxo476pmM9FHNWRPCXkBwkkUYhhRZpBsnFAjLuB8wZiu7EfRfUSb6Y",
  "key5": "Frwr53Rk6Nytke5SHNDpvhJc26P1HWhvh3c93GksgUGLmxUk1xSxHv3fwxAEKxf1aPSCZaXY5YJumNnHf1KRs91",
  "key6": "41TvF1F61Ttur5xZtbD9vY4PcDyzwxYhkyXa3oxxLQk8C8yF69sKdfLGMGeFBVV6P8XMmR7jha89m7Fn8JVK4nsH",
  "key7": "4pCAEZvYfPS39EtngHkLpRmqknd5acWnBAEytonq7kzS1pJtc58Fpz33SwGMCNPjgRm2CQaXZS7EgXFz3Nhx7Nqm",
  "key8": "2mZDJ8631CBC26WgeaFM1RKF2avEBZgfSAXUHD9mgGV5zWeDfXy1F6ZE19YhqZL9Xm6qQqStKuXG3qzYaJ3aPEL2",
  "key9": "47Y917RgDYCLFhicHYe3wSknhPwjMq5r14E99xxR8r9Lfvsge59BtXkJyeffT49ZZcMkFAB2gkpGtPMe89qeVwES",
  "key10": "3VXfHDHe2ZcoDzzZ3rc36A67YReHqbBugGuzZk2ek5Ah4NVAyKa4u1akofqa3w31ryL1CkmHpDB3dExGgd71Ugsn",
  "key11": "4u7DCh9drdJeittU9vAejZjhdziW4zmxP1vAgBwDrVykr7qGRDsjkKsTQyWVDLS5c2wkiFtdrGKEP3qUWBNbcLRW",
  "key12": "YLMCwUYtSqaXKFES9cp95mkLxu6WF8Dtk8jjLezV3NU1fYBYrkc5rkGLDY4TWVAVYNZp4LZY9ZwPrSzEhNLqpts",
  "key13": "3gDYAf3ASnCEqK33PTEVr2N362aXNNSFJAMJH4GqvyMuFH4yZSc7Qc5zuoN1h11AFgWz7jyvLgfoJaDJsE5517zh",
  "key14": "21SowNAnB7AncAc714LKBB1MfYtg18pRvWYN8jhJUdgFHisdcZFnAVZzBTqJxapjHJm7D4ypNmU2GuudCEozHGNC",
  "key15": "4Z2CTYV6rmkJKJXTKYSNG4qxBnZBYZRguLmXHXcm6ZceuBJRJAPuHqtdA4u4aJGAQFkmmE7enq6kcbvWFfDLAkyS",
  "key16": "3XZh746QZVgwEJ2mVK1NFDCcQDz2GYmuHcCcoAsWtERoLfQu1JqUFo29PonpwuygXbv5KqWTKeJPqwfXjkZdypoi",
  "key17": "hFPbm22Q8Ggvy12H51Vf5gjq7FFEx4xcA5teUkL5efgg6gEHRcnhJtiyEkCYxs448TeoEKEWEirewu5iWtsi9Ey",
  "key18": "5k2PJy59NLF9QZw6AyRzeTZ71KJ9KAiiR9T8x9vjPkuftC5jcnNwRsGDJR2YkJVWxEB6pe8rxFX9xHyf8qqfNtUm",
  "key19": "2HNSQ2S8Kk5GXCB2dGNU5vyqATRdNi2SWG3XreEDKvtBY3jB9q7jK9aHcwJn4dPnr9Uy13YTkFXjAWde8N4tRQez",
  "key20": "5SiB8dpz62qNSp6ournq8WZcvt6tUiBB7uiBhna8aeqW96crNkMGcjq7U3EBft58uuJmkjJ3pUs7rvJe3HMeu4V3",
  "key21": "4eBz1b4kgjGjedPvS92TFFoCW4Y9XzgdTaJDg562pNKKkYH1HUJeWrq4LuZW98vf14eNB8yG6UYT9DXFZgxRHHvd",
  "key22": "2HRPgVSxZZ4Zx9nohM4SzJgUv5MBZdzkMNBufLwy13ks4Sftgzwd8aE1WzQ1bbLAWmPt5EaEBjfpDxjJ3YqBbYti",
  "key23": "5P6hexwXQ8uknHfeszgHBEi1MRmnQ3XHx9H5368Q8jfjENfxZ47DNDupqZwoK7KTucNaNnS64zexxMwCxuFUBUXX",
  "key24": "Ac6rpEqZhSenKTqBnUeu7jyw4yuvGYREVfY29YKi3oX9HEwGZAYYPkysbjQNzwsKNh7ez7XqRaSLeR1gRzMsFR4",
  "key25": "42ji51RGFoSBmFYjHMiBB11dUXt3UummjnssHfAFab5ytMgtkcTDGP9frSV4RPTmi9tgQ6m4cjDHhyiaqqgQsAM4",
  "key26": "38Nx4TxUuVe2skCbFLod8VFxyXkfdUzkgeiajG8QB2WiG1GAsEcBvRutZVrfEbDeAm1AffVHpuq1s7NV23jN3pZZ",
  "key27": "3vFoicNtZBLggJ7Q1WQu5fK6oNNfHVFh5kZLJehfvUm4Fbf9uyKqd4WUkx2grquUa1FvcQ3scQpwjfWA1BVzANLJ",
  "key28": "Xxjy6RfaCtiZxe5gMLiSfxmvp8K8csevxSoTjfvgMWExp1jz4hbWpHcMsiPMT7M7pSqM4dKmgHPxAvKRM5RXArT",
  "key29": "U2YcYyUX4hQZwyoDRnycPtiDsFKDiH5Ljqy7m4rF996xzUeEd6yXHPy4rDS6N394mdhATA2ephqocz93sKRMcrq",
  "key30": "2xH8yGtJKZgwWaHpSvm1nbhAQa1VabbgADPHAAWRHiUCxiBBPqzgwLMUJCndRga4LLz2LdGzpozZVADCr4WH4688",
  "key31": "2Z9wM2fV6bmbteajZKZwjAhVmd45fYx8NTzDgUiuAi1YBJ3UofQBVpQXK1YAn5Erk7n2kZ2GUhai6nBGzqu69Zu1",
  "key32": "3v6mCnMfPTwpB1GSvQoLnF4MwXnaKkdpDXgp6F5VGtbFCgEsuZonu3LENHvodYbPF2B3TJ6qHfWvcbcpocKsJn56",
  "key33": "2fzUNi6wtA4xxehREeeotbAQgAvjajym3wKrAQDUARDEQonhaPnhEYt5xqJ6NwrhAKtquVRkACWAdh2fBRc7YtFp"
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
