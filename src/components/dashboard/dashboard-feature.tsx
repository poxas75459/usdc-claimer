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
    "36kvsE3yixzBRVmZW4REmg3rV7GUM2sCnXBS4dEvkN4xyQWeFSGx6H6aRo1niagXKqcLby7cHP9GMnwEAN5uLGnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D9B5fg9SyEdTGdKJGez5yn3djMvyntw6objseDNVVYAMi4L873tiXNkXWs8qZLcuefJe5RqXWmLUGzVDGN88gM3",
  "key1": "2TkYLHMfMgSgiPgiSz7FkZp5c4SP1f4iFuNTxuK2XhfMEc7aGDjD2YcQcoAvUiReQmQeuGqaRqSPWZVic8D9VSSx",
  "key2": "3b8ccyshh72R3qEHFz1iXn5j7QXPq2nCjijLvsYVJjZRXeqURb1TPnBL7RYQ3gyZmzmQv7jLomZUGCTB3oNaghif",
  "key3": "51TRmrFNpdvFJ6o27r7gbY82wQ2mCTg4i7VjbQntLSMq9C9K9bn8h3pJKhtfojar7RF9edKMMdyPA37rDHwdqvzq",
  "key4": "5BbA3fNyhRqj9DEP4ScM2vZnQtKyvS5QQSd8gqVCYqMXi3nZJvAAHwJ8kZd4hBX6kDKQbP3ZjnxVpKZtUzGWGzGH",
  "key5": "4tkf8z6haizw8GwuJ2xJYsgcpNQcxFmLEqweYkUd5g6smpE11VDmMHyPhpSNLnF6sa9uJG2pKRtXAZ98YRHkz2K1",
  "key6": "N72oq18gXArbeyiXSR754fct2vTeNy3XRK9XqqxBcnuuojcLQgFGuNTuDcUhb2yrLczCRN9wrryYvtHHtSi51BF",
  "key7": "3FG5qKVcETn9RaDuouGpE5C6BftQG8sjLhx8Vguz3XuoBYgFFKAFfFwibdtSSJMoF662wz22QdLMU6ksuk7JAoAb",
  "key8": "88LAnuNEw4tvFJF1d2mahPUg8kyTQRq6zKHiczdPkDLik77eeomYcz2RfrMSf2ZJs2RHo7ZsqYGixTtwQXfErzU",
  "key9": "361Ds2QqqAX35nC6Ax45xX5bp74moqB3X3oNn5MA6pr2vL2JCSdUV3A9KqYKurG6945LUcp5EnRXgZucGuJJU7qj",
  "key10": "4qMnAPooUQTJvxBAS5CBpWCsSPvfuxxrkoxBbDjeE3RUsUmgL98MXrkXSQiVTagkRt7rsshugw96S4umfoZKZgmF",
  "key11": "3BK6dQAkX629zrEB7xqacqoDpUL91Y5Tq9WNxEK4Hmw1MpeFeru4WT3VzGy1r254d5r8ZnSyJtxqVewypzg4pNRs",
  "key12": "EL4vqP87fNXyHXT7uwJNZmS2ivAN8RF11swYCdMc1gvqtqcU8bAQz9UPdrm46kVKRei1eQTz9ZE3PoTUEavEs1e",
  "key13": "5upFtL9nynsXPyVhdEx5E7iyA4ezvdVXWbnMxUt86VqE12aMSUnWpQsNBK92U45fjMiHy95t6rGFPXPbRGgCnLK2",
  "key14": "53PWMqGGxewsNmMj1i8f9Bafk3n8WGj2wj74fPwTYfVCCxN2KGb99fDJxv6TtmDhJNqzAgLrnXWQc4AWkdFg8pnh",
  "key15": "FbjFmygyyw3jBTrRsswcdApBo3wsaXMgLALPFRCuSbVWrsSA69W5e3AXN1MqzdSn9wavqJsp6cPcpEZ1gCWmSqM",
  "key16": "2xgBXGGTB6XvHuEBoMgekvE8C9gurgAG8KusKhXTpGkrrAAQxGpH9FN7xhkqtyh1STr9pYzt4JS6Gi1gmsc1PSqF",
  "key17": "S56xxwvzFTv5btCqgUyQzi8GsShGYmXVveGsyhZD3WdYmj7MsCikZ7nexxc1LuY7TB3UpvsVboEZo3E38votZYZ",
  "key18": "zx8gGNqhqEZrkkgqi6w3Mt2M1MAsWckymaxEjKZTbLD9bVbgGaTxWP3D66Xb6HrsrDAbGj3yedQqfSoxmwn81Kf",
  "key19": "5mxfvrppWbgkqyEw5dUPNq7sS7zQhj1jMbLmjHmTRiPRoNn7Wz8cbnnGNNPFZp4GaQwsQdCBvQUKD99TtY5wwJqT",
  "key20": "55eoUWpwiPwjpbPRX2Wou8wrdQfZ5w2zWYyx1XLzMqdY1tDYydUZYJvd7vKRUsQW12zVbaLCyPaqHAAtNGfBkmVD",
  "key21": "2g3nXA1Q8Jy2r5rqvY13SfUMGjo5qUok9jeSzxtqrZPFWRNvc9GXPHeNZ4KprAfATPzjiEPQeuQWGATz6EezNzwt",
  "key22": "2G6UySiBgRrX5qqrX4QtaXrrp9CDdxHoFSv3uchG4UHqb7jmNKG3xgj7hUywx4F9tErsTTJeZbeFZZEcv45fV3zq",
  "key23": "2UVYtwY98yAECPsqio8mwbo1PHk45aZS38x23Mr8UAW5S1M79LurRuefD24xWvyFhVR34Wmbc9x3qrd8SQdqV2ai",
  "key24": "pWajA2mgoZT6UJXjcmN42X9XXNs6938QMCYNx6j1Z9sz3xMVSSK6bm7XM1rEYPbZt3tFgTjs5YSgAnxqz74NaJf",
  "key25": "3n2Efgy7fBRD3hZsVkvjdpnpc9GQgLHzqmzYkotYKmwAXwJJrGUFpKNsZhX2UoXbqvhMyoSbYxFxpDLCq7xAipzR",
  "key26": "21nZzyjXPyx9XT4UMDjBADuCQSJ2xGiLo4ScFBALBE1NEUP5HmwjrCtS7Vb6Wda9Vp51dKb8HugVpGDcmtM3qQTR",
  "key27": "49GHsJgK8RqrJLiPRY5aZLgwqebvA3PD6sMqLkCbtSvdTEGhFavqEmjDAMrWMnztQWYWVCt4bNf9x6LiKeK8Rs6g",
  "key28": "4uNBGxygSV5xgCZT99hnhKneffFWJvie7FPnfvqGn1qsX3fxjo3zwQShZMHHmomYdcd3ekJxuTrNXQAHkdUZeuwz",
  "key29": "3H6jAvu9bogV3uJD6J6uER7kdgaqZpcJWbecCQD6dnQAj5efxiVoZ2xnnpPFvWiaguRLCoVgHG1LD68VaaheVseq",
  "key30": "2LAhZjzpuAkmDs8E6cEV4fTw3JsmpUz4PjSoNeamVxtwaLJFFSLMJe9PKZds1gaACjnTUssuNC9JSTZ2KA41oka3",
  "key31": "3LQd5sfjZjKHCqxsqL24azG4jXcBg1B5DT7Z7o7DhGRQU9e5WWLVwiEScj79q4LMRA49WEwj4aqrHVfqLjyyRivS",
  "key32": "TRDBQEj36ePCoJ2qHd6DKbKoXZcL4uNwsS8RCtdqJ5EjbtFwq6KrmzC3CH9ccDUHAoRJCQNx3pyZ4oBC7Qw1Muk",
  "key33": "2Sre24FxvXf1vgACF2t9pZqWXi8EpNx1A8Zjwrk3NycngQjSqJLwLPHTp41MAWUVSvMhiNEpWEptgmqomHDFyYYu",
  "key34": "3dMeMK2WsJaZjyneRjxKR8rsphfU4FdabCJdLzcPB95onp8HMmLMdijTseLXaAxCHMhwy6Ew2v23PTTEqtabfA2m",
  "key35": "UBu8QMGyJDBUkf4btXk4XyrAozMkUjitvkr8VxKc67ZouS4nipptwrrTLCdfn82n4GZ7GwccdcX3JhNoqUMT1oC",
  "key36": "5cUtU4p7z8FVgMfZVLHRLHLbAn2mGJJcF6LYUuB4BdTruQ5c3z6RrY6JfwAYJ4TddMAJBiLdtSNrukVmBt31aZTq",
  "key37": "2mnkkVAUiPR3iqsDLFRPhR4fiuF2A3hmTS5oreAzsd7chVMuv6EgYA3S3z6vwCDPoNq6sjmWbWKCWLWueGKSye9c",
  "key38": "XHk7fNhZ5FtSKp1h4scefvhCknphh3GvXquSWshhyakCNrriyeXWC6gznUgFHdEAvPuqtxfmv15HVVySVH6SGs8",
  "key39": "3HKjXSPNa8ogeD8mnFJtPHEawNqsdHzoeTgEJcPRoTkQcDrmmVm3njiGnCHXSdJPv6GHfzrAhTken75kWq9LBnJd",
  "key40": "856SMvu1Za8ASNDsDHcuxUyyTEXUyRjhqQsojcHoudrsEEYz6ebRXAxHRi8Qg3aLzYxRnTZNngHuQoaF6fSqNsE",
  "key41": "599Cbcc9i5eTpUX4JRtswBtNHxP7trM4LinFHNTB6CcfZkRhFgLY1LMxG5d8h6Jr5wzeVPu8FRaLVeaG4yjkFXu7",
  "key42": "4SB97Bw4bvvQPowMnbq3PgnExJyjYfEweFAnpHuGjARwBYXoBZGvLXgB43zxZopevXiD5LEf3JxMJfHURkcpJDtU",
  "key43": "F1S2TJftaZhU2VsTTTGVUsvXiDfSeEfdunVLxrBRz8NBt1dHQ7Bep4EokLwLwzpHuHpS4pxH5fk9DiAH7CVV1on",
  "key44": "3KEcrW6oZjW6G1DVdzeWBDFahEasoKjTizbpVXxwh3c9J9Mi5vaUhWMnhutQPhrtnYCxpAedBL8qSceAnNym9F9N"
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
