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
    "24atr5mEt5WC5ybTiaLzBq2MwgA31zND6TAaZiUTqW5zw6dMTWKQswrS8kmjMa6GQf3owhsyCSprNXMwqEJuZkzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UpyTNmWHTTthpgiaywPAzKqt9GuiXxwhfqdhzjZD8DkaSA7Tk4SJ4mP3YcZh9vgFM7bHuzD1hQ4CSU32LQPWHyz",
  "key1": "4gkf792Z2mMquih6PceUBtA9mZ9GAwVwkGhqfs1NBqymUUiL4xdRTjNqU4QA9q5y38P7JiA89X262F1SgHJ3c8HX",
  "key2": "4SNqERKYzQtyt1bECTMGSEzSg6rWxSom1KJZxnLjKCDreghZXCEKwp4FThYGJXr7Xu6jLHJQeY4Hw1ELN6r46mDS",
  "key3": "3yjWDYwrEZpPkaici1aweSwqvWJdne5G5dEJab7Q1cNrDr1nyTpNKfgW8tmsj2YtSki129bbob7mquVACgZPXDkt",
  "key4": "44KwW84xy31SQ8M6e7Lc8RWDemmCKDqNswTmL7rrwNUdXb3DxVAxVf1dDxzbKRzH5vC6zUYyMLU7GXav3U2onpMS",
  "key5": "3SjhFoFof7oCZKuziAKQuGtURi9jyNM6bAAArvVS8iz3nxHNC9umvnbZJeHv3Zfcn6onTcQ4MQ6qA2UwUycXwjdR",
  "key6": "4sfNRPxvDVomBozceYysusDRxAhMMg5QCZFVWr1e5m7hYVuYvqP6nPhxqd6y5hKjUUKhGD8cU6naM17jR9VaHiyM",
  "key7": "4CeHnctvGocY8gynqBMvjg7oGWSi2NiaUadDAmdUa1gEEqsbDtAHq7CkzhLdk9AhqnMewkmrF4KQYskXBFqNhFCu",
  "key8": "4MG2tu7Lx5sh8jZGvP9b9vFrAGJvEpYSL3HiwJbiN4WYemKWF14Nz5pBNR16nuPuWGM8pGqUby5Xw8iEqSRSvyHy",
  "key9": "3pGPJ58zjJdE286APcoRmBtwFPF7tiGG5NjqiMwPrTiv2KUoEXh538BEEAv827DXeZsb5AGdyoQ5ih5U5Dod9Bkp",
  "key10": "23fbfgRtJwpuTQCbmdtHSqq5WttZB7oj3aY2ChXhazZDQRxkCVFrP4FdpMcuVNPXHtCwTm9ZSbH9SyuU7qeFofYN",
  "key11": "8TRPgt3AG6aCeLMn8FrMfSDqweFRBoWSDKsDsXFB8AV2PPKsERDsegNLQyHAJuHcRLQi43exZ3mMoi2ChRVJuA5",
  "key12": "5qtmDW9t5c1TwTY39gQt3XkYAk4MpwzAV5k6TJzjyGRuPdMVyvZnernfX6SNNUuRFQRH9yMXuhb8HAnHkSaJJvEs",
  "key13": "4fGuoXsVb4hg1xphG5qBptRMpr5YyUX7gA6T38eRDVzBu4uz15rtwhNaCuAD6Sks6CqrAruLtfVW6FS5GaedRvCx",
  "key14": "5XvZrMQwMhfefUfK13uaCYd93fMp8WsVpCxPuYFTopwhp17bHhuVrttj9W3itLzztWUx2vZp43aEfdwGLi5tSYDu",
  "key15": "vR9Aqaxi45zxij5xL5gNkmHa4mKAqWnuhRN2cESneJQQfWDfDckHv2qpABRvnSukPjfAmaaJZ3iTQRnDGGZZCo9",
  "key16": "46S8WFnyfgsfu9x8R7gXPX7hMqXLA2mnsW6bzrz8CxndBVM8u3JDHd9tPLsy72srQDyMHycrv9JNJXqAHKcgtcC5",
  "key17": "4jEqCPuajSmgp3ZhazPBcfDbb8FV2JdKmFGCDwvM1jhtnbAGi5UyRfttNirsEnSmFnYfXgLHi3dmMEBcBXMTV6tA",
  "key18": "4cQbBstZ5n9J5djZzzKkLSP7LXZzUxvTXVdkFYxA82uGB2VWM7RkXsE7hFHoQAfCVcmjzKa52ugSHaGXnXdMp9eh",
  "key19": "5Y5vCsW81DwhGMeYiDYtnmCqHEJRPDB6JKk2a86D7z3E1JBNELUM6ZWLX2iexi3MZbDMFdgrCKyyWbKn6Gtusjm3",
  "key20": "2H2sH8EVdYkQUvKWRygut1bmf1JMSqPg7JcWxoxRR82UwpVw7k47bSgcEjx2bxeekkjqUVN7V2Ku3YaiBGEryhe3",
  "key21": "3pLqDozbiaLbGvHE8nrkigUJSwdCUxHouAML27DqTqPzDzaGiF2Rf6xzqtdN41CVVQu1EcV7oiGcRJam9GtV1Cdu",
  "key22": "2iHKc87yLAPVcQYzr8ZweDsyug4EKQMiEbA2nswQZxdM5QskMpn8vNPkdrVvMNagKYjfGpCZYBvzAsudh4oiihHJ",
  "key23": "28FpPz6xGkKWGdvCEvEBiqEStu39MNLCRDzrPqn8LUsR3A2yHS5Bq19auVHu3jJoswSHC78pSjjXUZ9N9NnTGGuR",
  "key24": "5G3MMTvzVHVXgWjY5Kn3B5Q6B2MRe4isxksfQQ31BPHZtcgEdpCYG7oJk8tqzSeCsaLjUxAA36MKpYHjG1iTMbk1",
  "key25": "5yd471yxRryWifK7P68DAc8duV648gnYR3jKHgt3Vx2WihPVVPYS9TkjJ88i5yPJpwp8zmQ78muaY3dBJiFLMPUJ",
  "key26": "5FqzGHvbYdGGV1ZyRUx7yMQmqoLNYZM4gheaLHx9KsbH2Ymo4EE7Kz56HJQADq5kjGHDhDgPdRt3JU7bdiK1GbVA",
  "key27": "5CofkFhyPmMTRZ4DLTw8ffXecnbRmvwbvntecbsNuBauQsqsxZqTRy7sGU3xmPXKMqkTzH392a1p7HL6bgKY3st4",
  "key28": "2i94QP83EmPAUJ8JDmEzogtidEmBXV7mkLgPpgjNLufy6yoa4HEHBxfrPcoypHLZ3etiqpm7nwHqYBLy4FeSuCok",
  "key29": "5vc9YNkxSX73gZeEtc3eaiDwuVmjryxsPxCJVREpmd6HvwRcFYV8UQikk5HBZZwJ9yYVdvpGUyZMRWQPo63pP5PU",
  "key30": "3QMystbeQ3zoGrRPNy5U8qHjLQMudZrax38tZFman8FCzacGW8kgLGt5M8Ficgf3vonCZQJCDYkWYRjYJjpZqBAd",
  "key31": "7WXEt1v5Psxip2U4QhbTp9KR8GUPgkjDQ3rUVyxx3AAGXLsWmhsH31HNMUiSxqswURJT3CyG898Ahyw4H98tNdg",
  "key32": "45z7pd5JNHFaTe8hJerPumXa44713TSLbHCmkLGmixpufh81PWLMqoQeXKruzJSPZLb2P6UoA5Sj1gwYZcovQjeu",
  "key33": "3fWyfoqZcQ9jStj9AkFPRwQaagQMDGeYLNV1pCt3U3Eb2M51QN56jY3MqnfegD9sjozNmhiijn19zQwkAbKZ5n94",
  "key34": "4gYAHT99QtCmjouQesQsDLWbQQMdABgBZcK8t6xBMosSJc4q4Ln39o8EWcfQQQ3G5hJyjGWWumtPdAqUzXXnNPHT",
  "key35": "4Ds8WWgFCsNn8i6H9E2tKqjsdsr2Hp4S1VQtjcCSqnparoAhF7K9g64DXJAhMtS6Atmyk51fUjBAHvb28ARiom8V",
  "key36": "29phH6VT5cyygLMYSYvZbHTa1rELaHuXtzJxkTNZHwaqYYxmYSs4Umw1dwQZmcheV4ZhUWuGa1uHSoDYu6bCQZKA",
  "key37": "4ybsUxdqtg4sJkFMSGi5qh1bu5ec4Zc7y3LNVSChQ4JMAPhBeFjb9fcuvJVhTBv9SNm9ccEiDo3fZPhAXGbq1SBJ",
  "key38": "4rD53tZMs26ecxoaPsMEXWbppufhBWfHiffwhGQqnRuNy8rWRGxaT88aW6ogd3U8Q3R47owT2QeSsddDkQoKyGUt",
  "key39": "2pGVqjXqgCMoiXcvX4BgMynaFTBwaFEqxLyVUvzJMjbFsoHFq8zRUg1GBQkyfQM1qgS2GHyAJmnoGLC3XfMJBgBX",
  "key40": "2x66eFFPLiXpQtMQeEvauvB2miJh3ivzyWVTqeeBkhHYPe19TgzZ3nUcZoVGTmB8Pu1RxS4TLvnrLwTHRkFJpPDB"
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
