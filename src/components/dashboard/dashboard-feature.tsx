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
    "3griib1CXAgssXE5JNoakeA9a2ony668dyiRJ6PB8Yce4iozAFDC47wrzFo6fSZggeBZJqXus5fUYFi6VTFmYjru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "azx6kteGPo5FaR14Ap4f79mHDuc5PBYpZt8cU8Uz3GRYh2iD5YfkpTVTqRXXCnQ4aRLYt7GrjRZ8PU9kph9zntx",
  "key1": "5jiD9U2chn7GFryb3ydtR1TUqABWcaMZfCdfb1v74SN3FW4ko24btr8Ya2H7kgk1LM2ZUsfF5azpDySnmqWoMrje",
  "key2": "21FmhpY9jdvBVzgdNrhJPxUNC7k7SWWnzhqfuydRj1xnKhnwvxPkDEfV6iCXaYrcdKzu4hvcag23YUxaY2iymeHB",
  "key3": "35CXcsh35mbczKeEyErHyWsLjGSkYTy8Abt8Jybb7YqGkDxEZ9oAmBQKk4vB7N3XVT1r5BiZ7K9mVMVMG5puN7kb",
  "key4": "3xZwyRWvzUiCFxpt7PP6vj5Khaq4yJkHvHtKg7UBBAGNtAXgrnrvAnbidNLLJtXrAuZxaAraPPLmrM56JpbtYYp2",
  "key5": "25umv1eLEDdmi723VNy1aACaQPbWcb4qp4Vu851L3iEjTAmRqAK77Z45UTK6uXYDQ5eq5rcAsyjmZy5zdqar12gx",
  "key6": "4pSeYgbamXHjtD7vMaQJGzh11aGqnX2PyeQKhqE68j1Fr3F4Vpj4F2a2W3kNnc54CZXp7skHszgWmaoeYLW3fE6v",
  "key7": "2WFDxacV3hXni66AMmvRCnQTSScNQDbibvy6adBmjwEhvo3viH8Nkxo9km7ezmcqbfa2uLMZqmxy9pmPYESEtyUD",
  "key8": "H8UCvPwci2kgUj9r1BuRgKMEJs8wQXcLfYtyR7pEoWwFTq9gLkbfQCZHM78rdaMPdGk3JZMZqGxSU1SG3VXjqhA",
  "key9": "2YLDr3ZQWfGArN7E5MvHTyGGyBMNg9T72ZrQL6JY7nzWo3XhDZ2wfnVsGQxQ9nDu8PtYzCdGsb59UYfnNYFYdACK",
  "key10": "3AZXpcvkswHx52p3MiBAVJZmKU2VJ9ETRvJwYh5kQUWAPyYzHu8fEYVMYEMgxWiMbqPmmTjshLPoDRgwhzZn9EHL",
  "key11": "3ddBUAY4YndkxJfhA9ADvsXCnk2Jyi3geUh3G6BouUBszSZPhuCTQC5XGm3g2hMU9fo39Y9TaygphcMkFVg1yCKX",
  "key12": "3TV3zD93t49knWscZFTEK1GUd1FKVc96XAhHFhahLy9zcAqYM7rMiCDA1rVeeFTFFYAmTmWheFcpVvE5xd7CDtuX",
  "key13": "5j2tHQGeTPG2AubGzHJRKiCEthHHyH7eYUsPRib8MyftMYXerMsoZwYABtA9YMSuT7hNcvecEcz9C9eMKi7mXjRx",
  "key14": "5C5SYo46iWDGeMwuk2Q6RnmRYif71F8mjKqEGTX7BHKYj9cGm4BABgcWwfLdR7xsNwrViMb63MBnnro3BhDnNaWz",
  "key15": "5EUbKb41aHQexaUBgT9Zb9txXSQHdCUE6Y9Dv66sA4btD2TwYQZbwZrUH2zaKJf9DMfeWJANuMhZc1ZqPFfcfNsA",
  "key16": "52wZU73taS3zPDsBuH3MK1CaBA3weDpFZ31TpGB5nt3P6aPhs65KUEwvdASDezhNoujtLU2vjFEyaCBYNT4dMtAJ",
  "key17": "5nT9hb9A8Efxj9kMyrWcn9wcYFnpUBQPkqWyur5Y87vHGtrBha2xBpgMui3zNVkmDQ3DibkXf5amTKi2shMGXS7c",
  "key18": "4da4N3JmrDJN6PsSooy3N3rHTX5yfm3u9CVFf8oGkML66H66KUAxhebkrtHfFAVfVX4Eq4csiCEZqk7WLby6DeQS",
  "key19": "k1aw28kMRFD81J2xuLwncHBrPQT64pFcsc2qas3S1dNrY5tdhhTZKTgRH62ZGye3nGTc1r171NHm8JD74tsmtv4",
  "key20": "67PN4t3SzUKW9wGs3fmyhN4DQQ12VVF5u35BReeNxZrhi2Au4hMY5ZCZXzk1WKep5tmu7AibkzCxEuaQsggSNQUr",
  "key21": "4EXjMQLa4sMTkUXVaYtWEjJUiTkDX2XeihUGgbGuF3bgYGLiFC7Wi11KodbacMDkTDRm2NT46GQr1Ex9VP1QdjpB",
  "key22": "4VmPCZkYwUCPbgojBqctB6QbJZxkq78AtVPPCxqJ2SHHJZfSTG9TNcqCfRueUEG4HbLU931RkGjTdH6g8w4JzmQZ",
  "key23": "ueponSP5hLsfn8w2xayfNHwvv3YW26FqanxjfCPxshZusy5cKuYMTacQfJ5BnDBH5vjKDP6P8SL5QpxPoQ9iTkN",
  "key24": "65tvBhGdPwfUW98tafqhBezxXmzJ6nzxEE54865JnBELyXBTyuhrLrb1pAGjfH5VbEseSUJFkFZthDhF7yggWU4v",
  "key25": "4SpTGeY7R6CFueYg3kbn5xC6TAheDpKv1RDLioykf7MV7CnpTdjjEekTYLaoSTPCS5dxUyc8AAcvsTR6dhcMmAX7",
  "key26": "3vXhAi5Zx4u4PfzW1rebGccAbNrTiNn6Rtc1y31Wp4knKHXLTKUXU87ZepGsxAHVDKnfC97HUNUF2z1Rq7naUNp2",
  "key27": "CLSARPGU3SzBmRGHaVUma5xpcEm8c8JZT2nHQTCcS5dM5uz4cJ9iJ498s2Tkaux8d75gfTM9yeAgTZ4snmiJ2T4",
  "key28": "3dN7UhaTxqrKS796sPWSpwuQ44xLzFFMGhvRrvzUG8eL5GVBzRzYfCjmhMfHhWRu9X9PCLHF3myvngNvr3XGbjFg",
  "key29": "3CW1uHforfYash4AvHBgohKKJdEn4odE4HHN5hXQaZ3wM7WQonoMCTSdNc9ya5zMByxGyxABt86mnW8TzbhW4Q8E",
  "key30": "2TpPf2ceo4t7Nid721bLX6pUaVehDHP9R6AE1zkSD64CkjuKaVMzw1i8DxVobVfZnLWUwyhZ1V8Jkj1mMoHiUCQW",
  "key31": "2hCBeEg9ND6SsjpSjtd1p8VgjfQuvFdLjUroTXTXfpXe1Amg95s6V5vx5KpVEigS8SKwmGPD8UkdqbcTDpRfkgF4",
  "key32": "2ZyyMfmZMtXFQDa5Ax3nyMMnjJRpbq1LCm1Z3in2DDPq3wib19er6juEjqPhJ79UdPfK5r6dAku4nY7M3TAa1Z2H",
  "key33": "5dBh4UoQDsvNRmPKAi6CnfTgUnxQzEXKRKmdYdwZtigx53zhakwPf279Xz4g3NtjdoyjAv2QwCvfsmjr6sfCBqqz",
  "key34": "3VWbtpnzeH9bK8nxghZnYeRq74RD3w2fBRWziTgm7FYWSxN3jaHj6QgB3qx2Nk4BkNfJ8HEdKaUiUwczHEApi9MK",
  "key35": "2wWvVZ56wEctWJR1eji8aG966m8hqnm6zJuC3GPaE3niLFDp2XP1vZPQDn4JJCR1ffkgNqfWNqKCV9Ga7J2Hu73u",
  "key36": "2omMe5Afq1kA2uV9dSDGr5UmUgTou7yBMtmj8gxJX7N3x7txmFXR9QCFMoHgAihJ584N8XA5t43sZ9EQ1k8VCLFV",
  "key37": "3x8d8CJ8Fx7zkbfBM5rg6ZzysqA9AYW3pv9ikWcDHvm7BdHLbL1EhrCvLuen2xJp4SjXNuCN1d5UwyLcj2sx4ws",
  "key38": "a9qifyTxGc8uaQfwf9C87MsLcqXHCYJ9EqY8bSQnF3kW5TGrNYx3pLjtz1auiaoA44xjYFPCz3V8BkdXQhF3T19",
  "key39": "B1fzu4zjndWyLYNGv2xPYa1RasYkDr38fc5w2LC6cHMmbi2v95akxrnNabAh5Twa6cFJJ996kxc7sPmbNZbzgzj",
  "key40": "3c8QJ1QP7qp9dFB6eBVSBUJnVBJQtKE9ZXpkCmR2xibtJ1niqNH2uZo2789vDamo6LwVWWBmVeZ8qiMobnwD9bV4",
  "key41": "3vk2hMfMvrQ95CuTmhXEM4V9mQPn5EQWpqwRaQQakPyQWkUTYcYeHYJkDznJPQER4obDHCXU7RTjjNtpS4oQvJjE",
  "key42": "bRt5C5gnNxEixqSErdNC8X6PYS3HhZxTWqirD28UUgHbDx7vGdJWkwZyWRGgedNgQoW5yeBkENi3vgH4kDxUHK2",
  "key43": "3jWk3mvfo8ZHJhYHVHvZLTDm1vdATHdVpbrmvcvoHffHeL8qcPUrCMnaBGcH2SmwEif2M2zMqvdEyE3kHMKeSoWM"
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
