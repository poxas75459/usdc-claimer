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
    "4n3Gr43ZukycYRG9RmhTq77Z2oJhrWqCFXkUDhYW7DDuuiF5o1aCSVZyu1Eiw94oUs8mMR8pAf76qsxELFp8YDEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pi5eFxumPY2bseY6CCVgBEWdFQA2YXu5Xtt92FMVL8EDRAuQ5B71hRapYHnCJVbSB97pkBkmY43YaASQd9Hxwfw",
  "key1": "4NPDFBa157GFcwy2PXhV2wh7nqNuEs4ySQCs76dB1KkphqYJnRDAKMnQjNRgHLGTQKUVnauKrFNpoSRKyPTWiXSf",
  "key2": "4oVcAXh4dZhghnSdGj8ZK6Za3MTGF9edbLToUmo7VdBoSnGn7w2C6Xx6hqLzoUrBaxMLqX1A2tNNW2TmA6DXrRS5",
  "key3": "njSJ3fR7h5RC2kdr92ffmVh6JMpQ7m75XUEPoz6qrhBqjnyG53Hb3edCYjDGdr7sj3t7ZVDzMABDscsjuGkQK1K",
  "key4": "3KV18YiNTA5Js29XFdy3ZC5bDs6GTPi2QFeccrY6JjZQb15ypf1VwwdW47vMhRMktzKw5vaCRgiWkKyqke3AimG6",
  "key5": "Qtj4UXNMo5PLbtePT4RMG2qoPw1qChmMJX8GAjg6aDRck83J6dwm8XBwZEocap95XdwvrEypQa2sB2ajck1vEZb",
  "key6": "3L27BBmEUfNju2GjQm5BcnccxLUcwo3EwEMbWCnpHpV4sB7Tvf9sxdVqa2uwKppUKMHuNw4eCkcpo1oePHNVdS6u",
  "key7": "5HiF7AFvnXpRkyjDBCmrUgkwAhJ6eFGXyF8JgWEjwrbRPAKMFnroQh9fUCAhXSRmzQABXHDx91UKsJ4a36dXDRT8",
  "key8": "5APjeqBq3MkuNvBpZh7AefBrVn4fU5TX7VCdr4WTQjCUH5CbBCz7A4dgoecwfk4XrRuKnQDaV5akfDxYuyeF83KF",
  "key9": "2Qp24Fi4mFq1WqLXL54zG1gnG2JLJbR1U54mN4TvY8mJcFr2mNeuPB3n21Uy7rpLA8FKiWj61i3oSoM5pSLE9NX",
  "key10": "5aB6vphfR481iysEHMJ4yzUMtsWRMvWyGY72ExQL7PLdWfr1LZ8Dqt9msDdbaiwizyA8JMUFrwwqy6eZckK4QCr8",
  "key11": "5vMXSJFyyQS9vhFPaQdgnquwapEw88QYnQdpty6KvQoXtsNz1Q7R7REawMj8MU9WL2F6icpxg5eXzKFgCZb7s117",
  "key12": "2DbF8XcCd59smSiKtMaizpdBJ7XzbUbYFULBecRWng1UWjm1Xs1z881aLGd3J4EdLEXBB5nHxWGTtyLDpBk5oW5L",
  "key13": "41hbxs8QLEtSxcXKyyt5xFTeze2SvTWK7SfRk5jZAXFMmTvXCqLZ4GNe9K1G2NssJrcsAcz5wasYmi7rZAiqhzFK",
  "key14": "27FeF5sKKXDJwWGN3JQDtWG6f3VhkZWXBLUT87fjPaetSHitsPBb3ryvwSFrY99JnkivojoDWryxB72m52NCRoHD",
  "key15": "8w8BQMUCd3Zu5f32f6g9p7cLhFhscEWx84j7xhKytvc3Vpw5bvYXySJSfqx6MuXdhoqiatZqs65N4T12H89MhBF",
  "key16": "2c8yU6WSNa8xgjF4EtPDXVirtbGnPcmG7pLcyqfpLvuLAhCNCBJMqAhZWJ1Di7AjwKQVznLSNUvqzU6PEtRX2dF6",
  "key17": "3AaDBiuVrTXQ2Lk8KidTHssrpLWgxWW5Ve2tV3rjro1h4rZb7oieinLE2M16HQsQxwoDXKzWGTW5vHZ7JbEvb7HM",
  "key18": "2K6BtMu2VY57maMuBTMbjBdvATMEyPKJvkpuezAUtTSYqxtT7Q8Rfhv2FApK75AtcJJ6gUXv7VUL3pBXK9Gi5Zf",
  "key19": "2eDkUCmWHGqAFtsfQZadEchya5LL8qJdXDfHX7nwxTnS1i3adbQ3kNBMQCbmGQjJXhU5BdtnXrqDaumVyx1cTxAA",
  "key20": "4wUKdEtQUDB59US1Sc9aED5j4fxxKJBEJWfBZGsi2hPFoGXrPnnyFqedLyJyVHDfttjjMvXaeYgMusbqk6hDjdrJ",
  "key21": "5mFfJvXo5HHzDSDP8prWJdEFMXE6nXccZJjT1LVvAYpJDv44BGt7PgEUfY7GDZTRVuZC8JRMmEah6L7i9BZnsPfe",
  "key22": "2EKDG3JCYM2BQdTDeDYq7fhKDGQ9uwE5y2B545EPV82tzd7oRquHnpFFWw1ewz1XJFZR8zyTeXzsfASC96ZXYaDU",
  "key23": "2MQuu1L3F45mhmt3XhwiYLvs72p2nk8d8SiUaxLsBThYroogYEwTayihHfvzUxNr96gYeqEjKM1B5KdBHXPbvkKW",
  "key24": "4bNfMB8vy1Y71JiAJTRaQi58UZBVP1FDvhZK7jEvPXkVRsYxWyRZnX8JkcstzTuNvQ5sk3aWiudv9MXAfRrdQ9w3",
  "key25": "4cowH8PJz5KdbmF5NFcxhFvnGz1MrJozM31ByaBjkXfxAWYfAo3tgutM2ek6UXcoq6QjF2dyYHcFFuE3eJSAruwQ",
  "key26": "2WnmXHVNMNRmrQdV7E7eFLzMi2gXezhZg8suzLBZzUSTZKPHB5U4dX3nv4PA3MHVvDby2dMFHkRAMrKyJb7R7sKQ",
  "key27": "3jsHwm124irE49TqeQWfa9FD7hQwAsHEycZAUZBHWKbSuDoor6rBYz979RjKA2GsQw34k4X8Fjuw11EdnoC6vShp",
  "key28": "2nUKVzJWEtMzh4fWkDCMP9pMyEcvRDta8DvR8c9RgZMRcn2fJADJZpg1jotAJMKkrydjP6Lc7rNQjuUS7MQXC5WU",
  "key29": "3nN97mp1r3n7HdUumW5W16ySFiRuzZ1QPLbXsAcbACu1Ekbi1yf9SXSVJs1inEHEtKmeNZJ9VVhN4VQ3TLp8prgr",
  "key30": "53PGE9EBkpemsr9ZqcCiWaoTibD3U7h9Tnsh8WgknTZHgQ2VpsABNtRhUqVs96nHkuUw55nAHh8WUhpy3FqGNHEP",
  "key31": "62wX8zkYLL3bwkgS65TKLdXXHZc21iyGbVdRZWsGTrfPcJsWUEo4Eegci8VgTxdRPNxjPka7NyVKgKsUKKNp2qVt",
  "key32": "5mNbZruxQdFSY2ee5Hmf7uuWyf9LXhWQWnhFddH11XfthJBfeFLxbvkRRizkDPQv4yCQN4tp1hQBM8PmwU1z1zrW",
  "key33": "3KX3dgkPwduGo2vStVF1qHrF7EnjWGahGMAzdhcFeVdFV6JKpfHJ4vta88k5L4vHPe3nH4M2ssy6APsyiwsGyvG5",
  "key34": "3pVe8G1xLcgLcsSMCBUaTh882286LRbJQgrh6dLNZvY8aCUMXtZZvSc71GxSSJ1nSgrozWCx2uwkesHTvyVq2b1k",
  "key35": "4hkyMu4L9phWwgJc7ssBzbwJ6tcUARqQ5epBA9zxY7K6fayWUEpadJGfaiRw19ehM9ZEVS3kYNw3QQgqBB4JhPNP",
  "key36": "55aP2z9VK2nXJLZEvh6RsMPXaNfP1LYYZVzcgD39JNC4RP4U533wzFt5tnCiANTeYtu2pH7F2JDZvThR1beMNEt6",
  "key37": "4qZ8dC8jc4v8VaEYiNE5qX3DP234RfcceLTgyQDXNijujw4EqAxpmNUEY1CoYUno5C5fzN9ArWa2YTc6eVqnyjXj",
  "key38": "3EitMWFG7bVLL6L7a7dvtR5a8eNVe38sWgk7qWjuQQ9WFtTdBGdnqF2ZyuuMghyjueRekjxDSXzj2j2QpwTTk9dR",
  "key39": "Wt1gSgeYsNUfPGfFY5drq58gbPt8HdpTutwv1UDcbQmLAka8kiyQdJMtXNxt79xL379Drk4GQvAWrmKwUBDQxui",
  "key40": "2JteswymByVk88kwJLo2ieP4qwFxFMvJcyYFXNnwb8zxhcR4pvAjEHSfWjCVBu9g6QZhguRnFNHKYXh9wntK3m4e",
  "key41": "3apzr4qewEyr2DN5SjytVJnhazMzUbyh3U98k1Tj9uWam42EXWCFbWjiD5PRzjS9YEK6xWbxEXpN7jA94kS7ZS5X",
  "key42": "AxNPV7tbQ6FZDAvagpYVQ9MNNV1PA8WFjp87KqQnxLGyWEjCGi1yjH1tDLUbmQP98c2WmDHYTdH1KPKdbZcUEnr",
  "key43": "4hNfAmQ97zrXspgei2MaSww91aajsLghzCbvD1eV5Wub4hkJsvUkBU3ictV8Smb6Y6ym6kqJugpQRNWhHjstnYCU",
  "key44": "uThXGBh68ep89H32o5rJTkXyDPy7kQGt81XFXrPDPyDm8oz71484ACmmFyEvXgpgdqvtRyCgRiHg3Rn5P9fVfxa",
  "key45": "3ddK3NHkTHBrnYFztdJTjSxfT3GLhXXuogD7knnuQYpTu83dd1jtR4zP6DxRw1KbmAgYN1c2nPbTatpuDVTm4M5m"
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
