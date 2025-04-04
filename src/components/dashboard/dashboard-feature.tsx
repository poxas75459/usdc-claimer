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
    "3ayFmG66gz2VkXSyrggnrwYRgB1hforAzPo3hu6qzThpwpJRHb2hLq8VCtvbk9Jtxgr3heB35rNDNvY82rxWnKXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27NAu6KNGKEfaKhT8bZpo7ZQQnhQPx7mPCSCAFLoBndzJTXyQ7LYsEt9F6hWM5WpEK9V74hwe3Fz6aLe9J7eCtRh",
  "key1": "piSiBjVvGJKtFg6NeZ8FMh8BUeU8Rh1tHioY1yPE31nJakqXc4ADfferxawFiBGTJrCb6S2v9mkrtH5UiN5uiF2",
  "key2": "4S2pBe9EUiHP344Y1skkjd9wDUtrRmdEpiStGY9CUACvUsTE7Rv9BxPviW8SBizuPG6wPjZGigrBkp1BCKRnbEUn",
  "key3": "67oAEi5JS35ps96AaWc3UaAxK87WHPB7S5wCas1eG2bLdVZBYAGFdb2LX8vZrZsrQ5G65CKnh5cVhpKFwA1GVuLg",
  "key4": "3ZiJSBHBQbEbnNuiPsWmtg5YvUuV4CaAgcV26ekohbV8KLfr6UsPafnmiEKfSs5z4wqcc2o3GReFbMDFyUJ3xoro",
  "key5": "oADiKapeekdGUU2mrmFTUYv8Voy5ixHY9f6iWpD7y9hZQPkuikHK5mabCjPJw6rCDb6AhXHYLJeY44Z8Rc1Vpko",
  "key6": "4tf1ofgxbobG5scCQj3t3spHmsUs33q74Eb2v9xSQYgW1Uk52csqGbzhrcwpwVstDABVwzxR6LpBQ6VHFVZUXLkA",
  "key7": "5qTgZshK15c8Ju3f8gi1CFd91SSVoK9NQ8ZR2ZTyb7Q5C6PgSsndGVEkemsgTDLoyxyNbHNMvRMwG1CHGhGcWT1B",
  "key8": "3CHeVq9gcJhqt45N1yagj1HveDEWwsRFb1BGpBo6XpNAEXXgAhGrsw5a3tADtnteEEb2s4hPWzPLkmqyK7UFrSaJ",
  "key9": "5Ty7YCHhDeGATA7DVLXz2hsJzkGU7bVgZAGPGZ9WfXGeEXeDGXYk8ECrA6jcXzEaq83XE448AtVnAVYB46n9Jqgt",
  "key10": "3rWWia7MQDMiXMBNFiGctNwUXVRDZmyR8PnsMLfcKJm1rhYHjXzEVP8zqsJ32ZG48EpVrB74oRd8BXDEed1HR41i",
  "key11": "ReLzkCT3rDm1LMT2fpmy74UjzzQRooGcvAhyjqPtQ9HrqedH8S7eK78intFygaiExVWMix5iivmUDF4iX7S7cWw",
  "key12": "2ZS94AivQ2oMBcFiSo6BQotszkfRtgdS9NBKQHrpER3CkGNFLX8yKXwtgK7WAYx2RrAs4xz29SHCYeqa9NCwd7eG",
  "key13": "N8yXQSJonXH3Asm7bFfPJADq71J4Vex41ydwNZ7ZsAqVuzMQCX44CMghiKMHjviubvoBELZgZdqMgQyaTVYtF9w",
  "key14": "k8stt1av9ndby5RQ1CWj6Pk3FS55QbieYrdpP74mbGrWp62sFDmWbUZ3YCVEYhrBs5wQ4xbwhKFqYFxHC2qyTKs",
  "key15": "49yCrTwVUxeaF53Tgd24HFZSyTmnWXLZpLYUgXkkvfxJUe8ZDX62W3A8Xc5Ge712HjX6tevXg9xpCe52y81V2iTm",
  "key16": "iEdW89q5jcrDXZk6tTrWUSmn4YchBctVbg75sEUTLmx3uJTa4i76W2XGbKQLixDypg5abXJKyJJrFm9pPAvGDTh",
  "key17": "3sgCgbNf7HE6Aif25QS3GXAimFqiPkayVBvzzGnXyUsdHHn47QdGjHXpbQUXPwxc7V8FUjHBC7Br3FfTJAtUp69X",
  "key18": "4xXat8L9VjbcxrQRqLaQWMsLtnhQPTsDNQfkvRDVjjXZGhrhSiA2Re71evuLYvjmtFNhKvwxSVFmsgJ5kYS6cLSc",
  "key19": "2zXKYHSWVZoAnhnFDAEpvVG1U1mp5HFafBcnmTvFvCtzvU9ZUgxjPQDhtoD1bMgbaYwmzB19KrqY8pVGgTikPmrn",
  "key20": "pd7oabhLseEHKbvU7DxY2qtSbSC2emnnSchHhUzxRrE2Y7wSMMbceMthkHmWuTZPxtiZEoZuPzeQ9jCUhF2VQ9e",
  "key21": "3AySdtKnm69sdX5x1kAQGVYSEQSDNKuUy6n8RxorCLnf3zokGQ2YB7bprBdWDSSBooE6EMKQp7eJNEBERxyMdtmZ",
  "key22": "4UrnNZ4tbX6VB18DKyB5y1Tt9k9wKEiA3Bnp5gY6Z2ryHDD1Rrr68SeMcdGVuTGPEuKvMBRzzunkJvyCkjHSxqNQ",
  "key23": "2aao8cL1mtpUVKqnkMAWxhHeV8VDYhhSbD6yjdzhwR95V5FLgyTSKr5NQ556RMsnwsZMQJiPQv6TLbQbc169Vid2",
  "key24": "24mbNyJWxp6XCerbm8gdFyZE7Yx7TWtxMc75ppmYred5o37mxwYyEYFi2JA8SS6hN6npqFStusQmsjRzJeV7LgZG",
  "key25": "3nvoqjPgX1wvDEX87a3jt7fPhejQJhz4Tv2bC4erVQQNZ8BGK88zEjfS4Q3FfVdfydDFrXdWc2uLK9b2YuFadSd2",
  "key26": "4fbEXd1PSoeHq7w3GYC67ETteVvjDf6Kyhz66x8Z2JcURHADYoYBJx2UEsCTxqUgFtAiWsqzBz8SzvDK3JFFGnxD",
  "key27": "4kpHhnXiMgu6imLUMtX4awRC1yt1bPvwJ6uyFvQiSThfDCoiSwuHS173a1iGRKkADcaXKTSQ4vtTcF9WBcXd317J",
  "key28": "3h8DGUi6wkrWJMvFV9pPSCACTnVEQVJPMCn8DtCRvrBSEFfE3yVjUv4zz2ZmGwqEi4nBH7uXeZLzz3oDc4Trx7Gy",
  "key29": "2PyA4YFBFBb93auhaw2XEH51ftxgBXsmHGAjXfoiUMHtgbBgS549xtdpwAwM4sfTyVwje9HBYCpb4SV4eP1RGo3n",
  "key30": "3C7SJ2jH3fYDvZ7FS529J157Gp1PDErj7rETAnETJVeuz3vmE61VfT3KyKK7fivezd63vjhVGVSMGqbTBYYJqeUa",
  "key31": "S57ityeomMeUiB9nfXEkLr6xv2TwPEPWBrJpw4mFdiFsQCyCnt93bbqc6JdqnJwMQtgixeTmzfuxz23KCUJqSFy",
  "key32": "2XFD9gCAqW53ZA4suWXaFnw9KWisYsTDw84b44BMFLxZsJVP2D4TuzM67EZynTdyXDVNrMskJgZQpwGFQTLWh4Cj",
  "key33": "5bXSN9jG3drzXie9ECF8xBb2Jzv75SJjdyiia4Qsb9uFvztTY24U4cebn1p7Cpua3vVAYyfDHHKgedXsoKFZybQb",
  "key34": "2nGjoHgk4brDaa9QsRPHfxbqLHJHoqsUc1w8m2WiTk2D6naSmpbEHC6LhDkfWHHstYUYmGb3HedAWFdBK4SYqvpt",
  "key35": "4B52VUVoKzaQbij8ZCtAKPwvZ8jLyepVSKZ6KdSjN3qZoyXk4pCjaUG1TbenUejmiPcpeBps6dvwoUe1UWzwVkja",
  "key36": "piAUvNRsjbrHoZZcQ136w2f33j3pxRQ7uG5FdmnWGkMXjLyJ4B3FHxcf9tqtnHQVPfqDBR8YZ5cqb1HWw9XHTnQ",
  "key37": "3aZaUr6KJGW6ijNuS9dQLxSpdjP3SM4gxDAKtbCtfJURNaMKzgKBUqhMEKXYBg3rwKD3PFq2qniJffD77bQNM3QY",
  "key38": "2eZmaAynjSMq8SMoa2XkZTeqzWGGQj7eJvgjnJT8QnojhqCRogDZmTQaFddjy8pUhFCQJixozQoWTopiCHKbwMu8",
  "key39": "3DJTd6gakyVxWtbwSDP6wdCfjMRfhn8wWy4HPJ2S59mRwxm2JLqs3nyn5fshfiWydUgAMRhW6vP9AFHN56D7fzsT",
  "key40": "58Wm6so6RfGkT3a7eYpnaFeT8gzBoFPqxNxC1JhCAioPtCG7cDfxdrp2HuweoaTH9DiBqnCJdDfvdEHkwzUAzsut",
  "key41": "3DtLNPQG8BvTeRK6PkMZ6r3BrPYsDwiGd2Aemy5VAE3PeHL6t9oyksTkMMZEbTyGMfttjgZg67khZnswJmwoWkbw",
  "key42": "3HPX9BMsjSAxZYziJfNZHjiPWVuo318H964F25UuRUWPANiw6kBYSDExRZPsWNnwmSbDMhJLERV2kJPy8Nv65xQq",
  "key43": "3GC5GSPfJSm6yUZ4DFsQnfyT4goevdXqf2c7KGr5EipWzNCJ5ivmTJ814QBLpU21MHXqwbbCzwftew5P8yGmXByD",
  "key44": "ZSUccrZLo2kJm38xsdPNyGZdqisqadJegvzV2RrSiM2AADfAw5z9Dh3zcdGoLMw6X43FaJGLSm1UTTD4PMsPGFY",
  "key45": "218tRNMWgAWucH9rJC7qdhcqRsuu5CfJ6DAU9qHVMxwbauJRqzRpisooR8qUrh1UhzJFYH3tSgxfkQDVuRHThEdi",
  "key46": "4dAUow6acFZQNMVtePuTCudFhdGVJEfDUcQ8SsujQRHMZk3kf47A7spt58fZ4s2gKx8THXhRdSD5ohrxt7ymmBTJ",
  "key47": "5jJwJ5ipboKj2azpS6tgWnmaUemYfWT5tsREsqD7icRgit52jDsmPCpas8ykhbjVa7zXfQGYwzhsJNfxFd6CVenK",
  "key48": "24kmy8A9PK2fS5RVHwarL8jCYaGNtpXbVYTszpMoEtA6JxokifpabktMK9eTXmX2VpWHB5Tw4gkVhCyfoFfUJjbj",
  "key49": "T8pU4RYbEuzjGrPezqD4HX2k3rBrsZqieBACw9bNmKt7c4iqecq3iJUniveHfod1Cc7t8uxwVdHnAJTsRhnhY5N"
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
