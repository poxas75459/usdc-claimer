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
    "g89Drtg7koTiNmhkdPtfgacpom3vcKhMzzK8Xk15wRpTNDRP353R6eNF5mhonPJ3akUaFYFmaPma9jVchH5hmWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MVztFzEBY9TMNeDcVKrQFtJ3dSfAP7M6EwzbTJ1KpMHKXU7z7h9gvQiG61LRHjspRv2MNKF6BuMkqEVYkMrtRzi",
  "key1": "4Hw5z8iJDkU2aGae5QNX1rmaTZbWS6sJR6KMSg48DgXjjVmEn6iF75yETtgDyudzKdVbsKJyRgx4qNPqRnFnqtYm",
  "key2": "25Swi2jeDWDWQ3UByqtA7H9T2aY1NxQm39qoQa3nd7HYAkueHjzYeiWMB8yfQLrrE82xfSwumFkmmUHLrwBHbYWH",
  "key3": "2UMNfEuwh4gQZ3JkW6vnVsvc1wb5SuCoA8YbQnXQcvu53kuyy2HNN3uFpGys91jrmvx1kJVw4YHWSSsWxWBq4U1D",
  "key4": "SthA15gsx1qKMQnY5zWTQgmCb751bogMdHF5NPmJfBKGodJbBxAGTXjKS9dZ7kaaXwzsaMpCewEjJpc1a1BjrcR",
  "key5": "5dg9vgEwTuQmEUdHneAK55ofiZjyPaQYJAt4K47Y1Yyhw297HoK51AXirtxCtMCAH1UcwM2HSxC91DQW2MA4JxGG",
  "key6": "2SEJddbSx1MRHZXwx4aPx8trfBR1NASwGrdrrZnitxdwz1zRF3QMhRuAm6tGevinMzyewCDQTbBWKPQFBvZg47sm",
  "key7": "4ApPW6PY9rg5vW5tadS931MEfxatPsKoeiKdrghpHzPJK5sATEPEvDdp3a5HJAhWkKRhBWZwXthvMVCmGeACKgKJ",
  "key8": "2dQXNvzFpGdt1ryYz3Rim7TDuJUYCgh2Jmd5RRgj2wLrYwqKNtvzz5dva9joARwUDRs7SQo8R1YRaZPGWiTzSjpj",
  "key9": "2imY92k95pZ2QV6uUbZj2uFEB8tfTDEwNSQsyCiaP57apoCiaZcpfgvGnKhQfRG6f6TwEau9Ana31HNiZkGgLKs1",
  "key10": "5iwWt7SaeNjeDj4khQSWrApDKLbtgwj1Bc2PEPAWQ23hourH6pqnGvD4QPeK8C2FD4WCRHgCYGkQNFTfv5MsjpyD",
  "key11": "ND8AXVK5XdwdXMeQjJVssN2U7ZmCVvoTvw2JjcKA5oLpUhJjkMZc1VEW8yrBRww879RjiF6EEGn8SjBPC8vjbjr",
  "key12": "2y2cQtZA3hk8aK4yhRCDMtEP2k1pYvQVAxUQnXFhT94YBnX8yJQ6K6wMZjg3oaKzSverygL7sVNe95bJZskgEA5p",
  "key13": "46XYZhEptu6z21xje8zU9xD9KnmPVmgX2iJ9zhtqAfTgo9ug9cYbHKaSS4Abtz7tonFsrsJbaGrQsNTTPDhNqQfX",
  "key14": "3HpK4SkTYMGCfCqyPSqgEow4KqYLQpXvjLbJCLSPcn3QXh3uNP1zoZbTM9tiTz7dAervwzofEcWt4EnJ3wc3CWUf",
  "key15": "3HM4P4P2Ne9wNkTs164HWgGmkwAF11JeMRGgtpqu17i5khqPHtzYMXsjcvc5ixevLtZCkwCr7mJagkyguqdUZkNM",
  "key16": "uWy5XqPS782suPG8EHCkybUUpyGoeLfLpdLNCMSKuDLp7oXSxShG2YDnQ5653CTDv1ppFNLGiHx3QrzaDjQnGBf",
  "key17": "3B84Q2MP1AGQkSJBGjZXgT2NauJPhjRG5mSarmN28yuD5oeYoDpyq54XXVcFtWBMX5oQUV4qZ9uZpoKnAWhRsRx1",
  "key18": "5WpCZCepC7bSPVKVx4bmmvjbtAwvsnVizFkDpWwTqpu7mJ8Ajrc4VMzHBHKHF2eUpa3HMZYkqTswJtHim8VMoMQu",
  "key19": "3kQehgfVkurwQ6PvnPybJEe9nzcARDDYXoNw2oqy4o8Sb4c36BVHKqKg7UqJFZbtKsjpjMQVshKbpFyJvRJHPotv",
  "key20": "3py3FiX47u796MmZmppt4m5Bd2QiTH3N1HADLkURUnLZXNcusaQupKmCLKAnkH3xPamRbCZGrqbNPoiWHcikwV85",
  "key21": "JmteT7Qw3pMWR4ijUtXzrnwJqgh14beE9h8LWiUSdW2HcPXPqoMedPnwffbsamiLmVtPALHWN8qjXk4yVi7gWuq",
  "key22": "3eiYQsT8RGwB3aayBZJvwdq9FY39dUuhE32iKgdxeXYa3W5okNgR1od7LUsMCb3Vy63av7zEDKJm7kSUTAmJPhRq",
  "key23": "4zopWWcGZmmiVz1NfBmGFUiiX59PZZ5dWVPF8j8ADzMjeD7Ym5XTbUzCVnXajbjLqsU8nTTu7i53AiiN2SvvWuYH",
  "key24": "3autqWcAW7r4bvAeAF1L7w3mtbQpU2JZ2XR2SFPvK7xKciDhvKXnxUmyagkFAVQRvFCddeSHLU2vK6YDtfacezrN",
  "key25": "54UT4rtqpupKxmpfEgUwTEdYUZ3zv2yPFTLuSTxMZ1GZLEVT4kbLKpZvABaFLMwxvK3a9F3Mt3pRYZqGjUY8azJS",
  "key26": "FS7YtiTNNoh5FvsZgxz2JrJb7UAwVJ4ha17XNXuAbJNXCV3wMg1SqpckRAa4nycU9mZkjBqR3YuPjbnXnv3Ey3A",
  "key27": "3iKGHDb5pnuN9fq58Z6vvPaQttEBuTwrUwd7FWQYnxgE3YD7Cqf4jz762MQAjcUHQE1tkdVdxz2UJpcx9W4ciSpF",
  "key28": "3zFnh2EVetqnhbFvQpZdEcYQmy2BKs9WbCQQ2MoyUTS2mBDYER8JpYJCKiaZphZUcUb2NN7KUq8MD4CtfZWJAJ89",
  "key29": "2EtvXfG6GGsWWPYMWcVvrss8GBnZjDxrXoQ1Q4ZxGMTqYAkQJuy4LBbTsb9dLKcNGQCNL8YZeqUN91UZkAovAJXB",
  "key30": "5vWjdppT3ZJ4DAy9xViKYayYks7JceSugesuekqnBGMdXQWBNj8NoJmCiJy9jdaxkQQ5ZkHtxP6RozaReD5HwDS3",
  "key31": "2h1zdXptuRxJNtckfsHaAoCC6tkZyq1wGY2rYPYCAzDhG8CXmEhyAm4qX91JRzcuzkV6bqz58CuTZkBFqcdjqoFk",
  "key32": "46TZEGftZTHUYss59FvbBuR3KdnNqjD79xZfgXkMCchD9U56mdDYag1dmaUppsQHdyE7xDJpi5g4qLmHW3sV5QAe",
  "key33": "2viW3fKnFUxTznnWPX4Ato3cEWvFg2U9KoEAPWdFiTJGcQtyYbCEJFj8wsW8zZwuoG6ABs7Ka1mjcaCcTUxTbFJL",
  "key34": "5V7mQBAb2CFonZnCd7LLjrDXi9NjJ3DzfUYFXimmD2J2bxzHM47CPk4p9H6JnskVz6vVnJg4F1tA9CsmWaPphRou",
  "key35": "2rGzjf5fK3wyRgD1ipnb7V5oCu8uxVs4qJijhT8K4nkDLGu46DkPoNMeongRFEC81KapJpDPXpFXWWpaWVKj5XL6",
  "key36": "27j1ZKsprQTDoy7uMDxyCBBuXASf29Svwese1K3yE4QysLyD91KLZycyktBN3TnGX6spw3rTViVQkQdM1abgDYSQ",
  "key37": "4HjWR1MnU4vYfX2TQJXBGR2XQKHgapEfZsYFppdsjqjMbgjjGy6uYkMLiKGx3GrX182Wz7QcxbJneGuKK9fXfcAJ",
  "key38": "42WNniYh42CiceipUQ87DYkvnW42hqdY2kipJeUA9p2Mr7oxxnjX6TZr6Z2YmiS9kGh8MkEFphHFwT8fZnTMUD6R"
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
