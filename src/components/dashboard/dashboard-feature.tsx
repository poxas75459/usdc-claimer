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
    "3xLP1K6p61AMqifXx8RkvYrv2w65HL7EbtNpX7ywNCfZaRdWiZWxH3Vhft54hWVgNWSCX1KQbwXzKA8ZHHVwG6tV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gL4yQGfcc5BPzKojuMYKF9qfd3e9Bw8pJ8waFiD7x25QRkkwJYWAqva1VJzUBEXxwEoMsrjM44v28jhbrthW9yH",
  "key1": "2ohMhgDPDMmzU9CtzEpJhP9ybvkcy3PdoVx6umZ9uea1FuRzGRo3jCiojZxJCoVhSEMhmfKfiko1GU54Pas3pyvK",
  "key2": "4knXWwyhkvXYErv5gx1aG4zJs6ePCnF8BSVuBdP9YdsMTqo4brabgKPZWt8mDxJ5d8XQ2PG5biLQKXKsUgf9Pp3D",
  "key3": "3RFi23HJ3UyWySqAqcUwKPAVnc5RdmH3yiQD16ESTpuFPJ77hK8TcLQkVDcJTgt5pP6FV5HowjnEUPfaLoJTQ7ti",
  "key4": "2NoHVDxZNkMZAgUayYbgdNSQBVhzFu6RTd9iDBT5HAMwKdKH5dA2gZog7TaU7Gx7sJRDw5kdsJUyeFRRWPWbC1ea",
  "key5": "29GtTkHkzTLvLatR9yC1uzA1fFSqeSWErFBuanHubF1mzcpETyth1zEBB5EwxKUGVocykZtViuxbWkroghr5bFRM",
  "key6": "39ipMntXL67u6QBmfeEh3RH88ka1SQ7FkTvyhCtXKCAZM9tqhrWT2hVBynSrkQ3Rj3yiUzebjpqnWJnh7oqizjBf",
  "key7": "3KDPx4ePWXYAPVYEjguRTQ9UNttPb8AaufX4fioEWt8pcwnjYGJWQgSPzJXUGZ9P5VuB68wAoTanXZf5GAiy6tnS",
  "key8": "3JSW85QtbhbeuXGD8oDu5zKoZnkw8sYGJJfwLqxPcQffqBEZ42NWJ2qewqo6fjvDhHEPtGym7Fz1cTWHdm3gN8Hm",
  "key9": "37XC8EhzJiAJq2HUrw4XMr7U6QW6hiL9FJXaiNdkQCopKqB5PZZWhxsC3dAduXgM6PXPqD7zpA5tYMCDJS2QcQFq",
  "key10": "5dQoknamUhm1wKXwwLbs9sV7T5VDvgVovrzJBGLS6d4gZ2P8hjBS9n9QhMiuJEf3JPiCp4T4FzZiGczW3AXC7Q5u",
  "key11": "vbaZd1SzXGn8k3tN7JMHheLJQ6kjYKuuUioyVkwXjZpSdWTeU5fWMKtJbhWCibyM5VJBne2qXzk8FkxY5CuLaUp",
  "key12": "3P6mBnMv2o6xy6CZpZfuThb8Q7cECofa7YEQBzEhKHniJoZMXCJVZ5FVzXNqSqpqgMjXoNVMSUeK6kx7Bk78v8zh",
  "key13": "1mLHQxU9xcMmho5qjT9nUJxqz2fmtbCEGgr89QpkSgQEotS9rL3QcWxp4YGAoEaUGcLTGUgouf94yVNHQa5rCsa",
  "key14": "eQA6sFdBj7JesHxUv7zaxo33M6BwSxGp2wVNz9Vf8U9bZULNodT4nzD5KayZ52edWmJ3emkWhEuAj5JfDmiirTv",
  "key15": "5JcWRvxqmwD36gFgU1uXF4UTAME3tJntDRAHaxjPkGM23TGAbPBvXhZaApWqYpsdPfRnAYiQot9SjQHbPQBeARtc",
  "key16": "2SzK8buP1yKj4Adj2HrkgiSfwiDpbLNBJ31MJDHjofGX6Fqx6z9fvU41vDbA6jf3irT2q9hheJ5otVqzsy8H2CQK",
  "key17": "4PkCTqzBuPsu2eLrHWEktvkSrMrffkQbRy11L7ztLxs3FvGKLBJRsmXKxha5WS7B6B8LPTES8FUa31mfjvKkbETb",
  "key18": "5EySvNXU8chYNfmtAVjge17CARdDKEB3KVKKpqrQFFfMmMtuHdpP5ab7xUL51NWLwGxaqw4s1wHNrX3ePAyaCUtA",
  "key19": "5E8Na1wSK5MkkHRTuE9ZFyPJBryLFaiyYuJ5gJCgFYF1uxiV1qYd7oNP41iTvFMpyrthhrEzz45MwayN7aPYrJ6W",
  "key20": "WV5ype9WvDgz6xwjGzvZxgisnRtc6Gt9Mt59X54D4s5bJcMHuREWTim6fLWcL5D71cf39hy1Z98kR59XjUY4WYM",
  "key21": "5xn345XofcAZVsijWE9k5QQuRPZFfPoERzuez6SHAHeiXBWQjDt3Cd4XCYVup51ZxcghCv539spHQBFcmHyjrvRx",
  "key22": "3Jdxr9r2yBiqSX6jXboMRnfVCPtwLwqZbXN8cGLzqneDtJ1U46cAeF2698fAFQHp9uGXYYQ4P3W1Eyfqx4sj6mXz",
  "key23": "3kiheQMgwWeiWATQxC4kwxDzfMe3imFBoNLvkjdDkJfiswJCJA3Fkw2wfKHHmAK32p9Mr28kMcviV8sc36MJAw9c",
  "key24": "3aDrC6torgKowvGw29JvRXNqe3z3jNRb98fcDeVgVCCs76zzP8wDEsmE8XVB81yC5DdiYB2FyLjtXvkbPswW4YJA",
  "key25": "5v5yoLeSGUScP3xTHj1Dmh5WNXdsRFo8UgTXYEtbxqfgm7Crw3dBDSxybZ4E2vPRBNNJ3RiQeSbuAiZqgEVHoiEH",
  "key26": "2EbaMFbJCq4AvhWWZea4bdfMHzWCgiHfQ1XQniLrX8AYNmHykm1Hh1jGQnHqwD3cqzn343TpBqZ7De9w3MVmsQvT",
  "key27": "4QgNyxnVRghxuR1WAmuJLmvVkKPwVjAgnV43D1nhY1mJETtBKMMLuZQiGu8SFPLodrFbHafC4FuSfhKVm7P4f4Vo",
  "key28": "3cZtQ3fYV5dtLyuSEv7mHFNqoU2JrMTrqcFTsPegMteFg2YPU1qhR88AzWakjEoY6xHrQr4ZH4r5TeeJcYh3JVvi",
  "key29": "4YQVrfLeer7KQs6RAqQKyEGeLmAc69JrSEfLyLVY6upYN37MC9pGorGpdc3SRtcuhQQSAcRF6AzrVxYYFetYuMuY",
  "key30": "5wZ8gYj1USZ4mrLm8rtAf981udbZ1dZ8s1r1njm2GGEQPDfyd6s37f4bMkRTUuShbm7aiHWdZwWatfkPPERAAkxU",
  "key31": "3TWVtwQFeXbPcnnxNuVfQP3pzsbcwNujtzbaB6TFThaN5JzX3CqivJVRffLJoaiLnaP8mMA7NJnYJfJKAZeBkvuN",
  "key32": "5DfunzxjHPjJdxZxYbaPawA4DbQX4mPLPrVS6y3amLvYHa6RWyD8FxycwfBmb6GpeTo3vSvtTAbEtPXP9nLwY6cP",
  "key33": "jsX12ZeraP1xZNqrpZ2zgqkrDnjA9w3kiA2Cs8vhfg9Be9GKPu6oQD1M3wSnjv2dAWDaQCmtfQwpRjaLY3CFCEE",
  "key34": "4pfk66ssGkctM74q789eStjt1kgVERicMwiGKL91JBuQycqA3YGycrGQ2yNrFoExDRpDzfhjuLWY5SPCY1YcUA6e",
  "key35": "5ePVcR39QnFEMYjtDgVK5xoBo2jJWw7BANBv5CfkMopXmPkydaZULwkvg36CzAND4Ez7WVC2wbDBnQ35KkX4TEN6",
  "key36": "3jnoYGWcHWcr3siRvt9uXSNmGnbaPjCpyfuU3fVwYXMWuhgAFt214QjBJasZzvow9wM6TaSK2gUMn2eFY6to2b5t",
  "key37": "54SJ2YdBwiLmqEMGvJXLUnHJsaK3tarycpLYkjnieHYo11FuojThc3i2CJybLoudgNQuXfhG8PXUoJjR2VbGQPm4",
  "key38": "335vbUFSYaQFBQkKkN9xxRkvJbMubj4nnQCvgCtMuCyjywFZ5o4KEjybUmvExa3Xeq2SixcEpLp1ik5QoEmE2uZY",
  "key39": "3Cz1NRgtGcGEwng1h6ynPGFrp6U1kjo3HGaCJ3ysiVQnaTNykTdBGqSKdpqKM6D2482QPVmmd9Kgacu1hQDszsS7",
  "key40": "3rDXXJq3rcNep8FWQiTwJdPvNdA5mnxWYc6R99p6xak3mdkN3H21119HwGLwqcLgQFgSD9QC7J2ASrExfJYnzh9m"
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
