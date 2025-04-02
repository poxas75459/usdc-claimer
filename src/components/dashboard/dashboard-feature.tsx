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
    "2xwzupeQ5zwbzwMuuRPZfgMqiL2cx4JqRis6jtbhe9uwYfR6eaNX746eDsyRpAuDEQaXZ8YKP2CtCYztUJTaDzfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S7pFbuJTeZQYGoNpchbKtTD2KXJ7ekeDeeXpj6xydHcEzD2XVp451TYicD9v79819b8wARdnBEyw6H3sWiYVt2q",
  "key1": "3Yqf3sUCTWZ3Y31dDJdims7obenwcEuUWFS69Qv9jJ9q4ATafYhbuS6JSoR6spdsK4Li2yT85jGZCAySWCi6S16P",
  "key2": "4vsbaNBVFKHr5LYa8K12qXfR6AZ2384HYTGAELdF7z6HWfu4ZhJ21UbX7vHq1sdXhEmnL14eWnnk2Qm6smfh1EQ3",
  "key3": "2rcmV7xaQKWwuR9BR1hvA9WxM11jbA45H7rZ7BQbktUjWV9VZ22NiMzB8tKPYkKhAFXEfo8bUB4zH6J7S9BkFfx1",
  "key4": "2K98uwcfAPiUVpRnb41shz7nx1GGtHTx5YSSgTYyLGnXAhXZt9TcNiDH5J4GSpLQB7Q23YLcCg4iEuUHjegUo5MQ",
  "key5": "496eXhWbT9iLSCkKaCDXWTbSRfZks4L39NYHqn7HCc7AGoXvXTgKvYutrJQZPkxNaHYpGQfHHUkDqiVGhPkNZAkE",
  "key6": "3XkV8uEtZbm6nqcGEtEmTbufta6uwwtUydLETzQpXAp6pJtjd6yfQF9BXtE12xxuocttYFYWAETwsgTJAHjUPSE5",
  "key7": "2YNSXJgYe5ywAuNVgJdFyAmZ3k8o4V8YyXwHskK9cuejL1cBSzWZ6ZXUqE2MYP7thxBEQruSuk3dmdG3mN1jQXfY",
  "key8": "3jxZNUGfRE2DhkR4qYEN2HYgDA2jM4zCHxvfJhQRAAuHo6nkjg12d3mAhu8Uu8JqKNH3aPWNQfoCdCD7yrGvkU56",
  "key9": "3RPz9TxWy7ZVxdTeirVdB2dLimYGjqPCd3EBYQsVxcobJX7ZTGVx2EmmSR1M55dSMcYiAqELjkw2Wsegqo15FPDv",
  "key10": "m7tfXB6U8zKH5fzu1ryek52iBEaAPj6rqFBjPidQJ8Za66qsi9to5n6dstD75eexaCaVMS6PZfbsXrxW8tLPiPN",
  "key11": "44w6JqE5L1JvxbZge2No3HjFmKuCzZ8HqGFkgPVQWtbFjvpaMx3vGqWDzd4EekmyY5UKGPhCmjVFbCLF28tNQj9D",
  "key12": "KgWQJHarwmyDnSDgjY37LgwJe7RWevtgvG8DBV4zChqkogff8xZ5cuD2cnwXNmQcqFLkNKgpsLwQm9LdXn4csL3",
  "key13": "iZFzjUahxiAMEGxqZsSUNqRBvAR9estY2RQ4AQMU6yE2sKHhZMMfdUv5yiwCSLb5oxy6RVQCZ5Am5vJH8mgRBBu",
  "key14": "7oFPXkr8F2JCYHHmxdxQfEkcaWwEQSS1XQCMHHQCN4xRVxPwn3Sv5ivho8QwcTfqY5owjAKzSrVjzGAd9Jz853h",
  "key15": "23uNix7N1odWUwsyM1ZWUiJXT2MCMteMoh4B7mxwxu5zFXyyXWs7tiF96GBLBURShbaMcBYvKutK3UBmkkiHZZzT",
  "key16": "5u16Hebq3rb6p52o9m4ZQeDpZziAYRYQE9TjYvwj7eKZH242t2Ksk3BJBd9ayaGpJv27Kxow2wnXoiSRv7wsPhRM",
  "key17": "2knpK6hap7uoi9BkLgMf4TpGAzjkLUK5NsNmBsCUPBZWz9kBfWt255WsbfThScZHbqu2837XfCJJ1wcFUXtt2u3K",
  "key18": "4ZYT7nLEyYC34jQtD2mcJbyL1Fa3BvZ6tQdmV3D3JyPNBLaAaj2MgqHta1Z3a2TiPti7QmPdsUwEeWEbMyWFTNPU",
  "key19": "2XrWmmeX7xbGd7uzyAe4qAbF4zvsQD154WbcWBTnwDWTa9euZyEVrqqQqV7DJJrEFFdwJCL6ha9gbLap2uL9hy4T",
  "key20": "5r3kghz2xoH6XN1eEoh5JJLApzt8ndgFxJ9x1D8FeNJZWvBswArUfNeL5JfRMUrqcbju2sP6gSjDEQQcEWzYshdg",
  "key21": "2BBkZir1SVFNKdtPZxB6reuhashRXY27xM4ZFrVb4aYy2q45jX7JtTxvJQAX1izCuG28v4uKtfFwaG6CwFPZCu2Q",
  "key22": "2cGS298sMyKHhh78ZEhPGscGEWbeKLRYAAkurpWh8AwVDENzUMZxJ3xkYsg84Ju8sFbcSAaNKCHJQpASwBu62UMq",
  "key23": "55ZXAq69ybEG1PjMrKKHLgxF6mMCiGfjwAKnpez5hwa1CV79oEH3AXXrpAJ2Eci8UE16x2GA65pK1cBpJC76Uf3D",
  "key24": "3j7r4wJJvZLDnvJdV1krYpwntwYnZkKWmqrdvU3gfViSSyRM9ui9FMiFjNMPHK9mq2L231mXchtoB1PVunks7cVy",
  "key25": "3dgmjyiVUY4QoDeUa8R1PgtnwyJtqbpHr5fruPEMmFs1fdRxAPAtpJ9PhYtVvk38r6fiTNboP3s3LQQ1JJwvadAP",
  "key26": "2wuyktRqk4Mjkh9K8LXqftHBY5Tqs9Q8LPUajAgGuFew4mU86MYfGT7STedh73aa8Ucfo7TkeVfY3WaaYgnH3KdQ",
  "key27": "5wdwNvZqcqQoRyq5oHFciBcFEmNpiE4j8CEVip4qsHgbUyUAhoxAkVDZ5VRFsL7H8Xu2pBCrRZa7TpucbWZnZ432",
  "key28": "2259BRY3TXcek49UnMHUCoTX2grYLNeYk54Y4tELBa74s5uJLAFpCBDBNExcwWvp7wC7DihK3UcEEzdQuwycLVBe",
  "key29": "2c3xJ58zNoEG3KExnXfpHAmNoXaDayAjfoTVUKp3Ph9u11K3CdyTwFJHoWuQfjJd39Zswq51mD7DMCM2LpDXK1FT",
  "key30": "4QWMLCxi1GAg214rmT8CJPDdHPC3jgUwWPnBLXUCCtP6qcPkf5jgYF7CjTg4xWiSxPTkQoXgoqgFiGQ1zBNv8WrV",
  "key31": "5U8WvMq4V9gxFdfXaSzvePfCdeEMGmbrBTtvg4FZtCggJGjYny6VxZs5Gz8foKSbai8GLjjAftKXLRZY3mc9RaMz",
  "key32": "5PHtmcw4CkkqTgDwDQ3jzESMKBV7exLbgGzTx9HCYmKnWrJrKqHji6G7CF8KyUNmEejsPBcTEdeNXxK6eoRPf1ZR",
  "key33": "224gwG8zYoihpn6HDrdcT5DVFRMoWmfD6WomD4xwBaNk3xXsFD2mogLGRhKE5auu8RYbd4p1Qpqe3xXAoy7NLGEr",
  "key34": "yeRz5jAb9EYq83pL43LAEyDbBgq8xdsdZAgnp7cXaJvjtG7u3z7D7bT2JRHMdKy4AywtjLURnQwkuLfimoNEsU6",
  "key35": "DGYx5Py7tEi5CCXENv22PpmZ7EYdzhSTyFBsMDa8pimfer5PtPoPSBi1QD7iU4CjcHXSKZH3DB2xfARhq9dN7N9",
  "key36": "281cWdHAB84fBJQrPCFFMPjWH8HmtHXznztyR3iqnm77DfDKcz1RUK9xeFHzohQNhTRNEWi38LhZvNrmPVziMwRf",
  "key37": "5kCMFeZTYnvsRnAcqZSBmer3kLpcJJmGx6uEdLA9XkRvVGExQp2oB39UZcUGErKWhNWj4e25xac2iqYrhoDyYf42",
  "key38": "4xHjcxtfkTFwY4hujdFvYoaWnDZFFsusqoAn7stVgrkkuV7sZcutfdeLtUXvBZp3Wm1aWw4QoHfLBnDVuwEH9MvG",
  "key39": "PSamd6S5iswhHhByhC7nsLzG6zw93ryjra4oJi2DJmobHhMwkmRd7ho5E4MVPNcTtEuv6Wsf5GZtV3jG3iDUbdm",
  "key40": "3aP9A3HcuhpEbVrz24Z3DAeqgZnw6FkwFUDyUK1pKMKJouvHa4BUg2EyK1bXBS4y4unW35iWyUbc1QnyCox35wBu",
  "key41": "39262euzWvXsp7fw9d5jEyDN6VmkkGzKG8XycgUTnsdPnfcZ9bEvLNmbNZuvBxtYMtpULZfkeCGp6DBFf3gVhPQZ",
  "key42": "mLe3RqncvvxBy7FLyx4jE87kgcm9wkU3DugegnWknJVqpeeaxpagALbLBMYubTprU2EQbpjxNm333YvDgoxyZ8W",
  "key43": "4NVhvQLo5hHuX1YZirzrCWsUUx3GjGUXFov5YbQk4x3JzPKpCEFTVr4GbbXsqq9gRn7AR9pwt2hWszVggzPuDY2o",
  "key44": "3ntVimCLHfbNjkDDjctbR7Fjjv6NWALGskd4rSwNMeRAT2uc6adBhnosQdM7E1S3L7XRqrLvfKepRMFmLpfh1Vvq",
  "key45": "2XDjpPcUujipgmDqX4cLLVu1QGUa3paVHqTCmDGsiEkS4NyJBPq7hDLSzfdizQtqYEerZrNiFNimQv8uUuj1j2e1",
  "key46": "5jmndP1QwQf4QRTUo8P6e2qPXuCkk5e6UdK1fTNEGptebNiffc64WFAR1ELFtdNCzRuHKjWGiHDxNz2FZosLvTJy",
  "key47": "tDuPawi22LS4f5W2SuGTvhxqg7e8cHS8tMv29henoj7rQgZKdoqDMh7JvFodtpWZ2JaJh51v5Hg8FQH73VQsH7T",
  "key48": "2hNDAu4c2jS2wVtC75uFoH8aUfg9iEViXzZo6CzhqprD8GPAvfEthDBZTUi15wbBTLGiK58kT5dmhVMGpDujVbKW"
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
