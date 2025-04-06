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
    "dmDFjZ2PotKjqzM5GUC6evRFtepownn5wxzNmKAYQTBmKdA8DjZ1uNtn56RaSVqKYnrvCZzVpfAzwyvkraP1Eae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tRnMnTXfxSsMok6AE3r8yWRCc71mVSnBj4CBGjBDJzcHErdfPHX5kmj7PV6iSfZJ16L947g1mdfz4sGqYk3qA2n",
  "key1": "5gqbRBG4KW4LFH2CiZ6Tag6Qy4Lgibpybk8XLJFLxz7Vf9nneGhftoNCqDDqCF8eHQgfKucBHgpmi5dauu29MFag",
  "key2": "5GMfTAyGDHZnqPCtvfRPrcinYzUYA9oCiqu9JyxLiXfjtTtZdvWmKTaZ917FhzxWYKwRPm4zaRG55vWnMPsGzGiP",
  "key3": "3iSrqNRivCPfNT8ekqZVbH5zxnMJBPoxYV9vUJds9NjKEGBafhgT7YEztpJvG7kZVkoEiWALaVkrichJc23TLkRS",
  "key4": "Y8mwZt4isboLT4iSvg2eHA9KzbjNVKLyePCnUDMNs6uSNsP2rcuXk3cF3kDEd5FuPGTNoETBX4cVDYMfBa7eVDD",
  "key5": "5atSZJUcndKURB7jEobds7snX1Qxpzqxp8a5534vu8CSoxNrsBjhoEU2tvv58EBGZwv4tiiX95zRBuSTmY55iE8U",
  "key6": "Drb8ohDfbbQHiCX9btSA2RgwnLwJEKSezcQxpYegsYWpv5chqiUTPrVwgdDUNSgAZwUMWL1dUF4RBbNN45LB4id",
  "key7": "kfXS6cH5m7S5Uh6bJtFdCnNYvf3fsnEnsqZRsbbywvL8h5jurHPnsViKADA1Xdc3sEwBQfJGuU8fBCGVFbdwzei",
  "key8": "4D9spAUZ4EfcndGJN44VBoUMMgEkVCqBvnurBRGPyK5EZzKmzfhcfxUmyyMV5wydV98fb9iMAhtxhjPyuKdkgCum",
  "key9": "41H29ni7xs7CziAp19VyReMHkeEPq47zANxRgABhV9euebSWmW8rgQjHphABLfaDsHSX5WvPM5rJtpJHNWbdp6MS",
  "key10": "5bDkcWyV5N8T7Pq57SpT5uY3hZpZoRfHhooXrMDSwvEfZQ54WRqsfTHXm77SCm2mxrJhi3fEbxwVpsbvazqpHmAu",
  "key11": "2J5C92KJPECTxtSDSHQ8aQ9aPDofRVewsYBMWWEkv7h3vNpwbvXQWsKfDDn87SkmcEyvAsvPotF3jaYQqtbAcRHp",
  "key12": "2rEPFgToihep7w7tZ9vDf3kpTSDqLJqbV4cdKyE7baMDoNbHGk54wTwPz2GyXSVh23NggXtiXfDrinyKZ51bjpPt",
  "key13": "5xzD3T9pQVbT9pQEK6Wunjvs9GgryRZjYLecgKFyipitSENiyZpG4gqG4o3c5bNbhqvZo8V1JN8KkXKD3vLyAzdZ",
  "key14": "4jaVfsbWpN34YJdUojttkyBdE93tABHpXVxzB1RHbfwAcpJomCvizaU1pVYm4cTV7ZsNfQMCBFtRG7fKPYHQQSGp",
  "key15": "5drZKjvV1xJif6R811beXYvMsxB4McDpycTqWmaGXdokRiNsdk8tUf2a9UduoiVtqm18ACx2EjVcjzFWxc2WjaPg",
  "key16": "aUS5aWYRKTCMWQUWYQ1W87m2NMR9eef2fYm7iNraCMviUZwEXjRdywNqLmchnsmLqyTZjLnkURLtdybwkWmVoSh",
  "key17": "55zxXx6VsSLRu4oV8GbAwY5oLzUEW8SaLuaov1fG2JKLcYsHz7doDC9m5FG1sDKzKKrnP7rc66aZFkRYtvqbE1Nj",
  "key18": "41zCEBSgC9DiCbWGNNyr28D7bBSstcGQtmbMwQfBMsHv184u8VnivDhWN5baa7U2Gd3RVt7wSPryR17a15yVWYhh",
  "key19": "2CWPyjLSvLxt8skcQgK1S8i17VmfVS7P8YcX94mJYjcy4haWjFyj72vTKr9gxasZ8yngMqAXDKwNMM8JZziv9H1y",
  "key20": "3CeifpgEwmkXomuJHn8zRtLSvnj6t5rHzuo9foj8LF5S1RW9BAeyWHyiJrngkfZUiQJ7SC8oHA2pqqyJxKyduwVZ",
  "key21": "LdhapERi1Bp3QVVc84YX2JfgyfAChVBzLMdse1Dy1csaEtZFA8ez5xxbLQ1bTGFEmKjHNydmTwy74qSfcaErGjr",
  "key22": "33g6kUTXKmcNnXKnK5qM6v8D1DuThpwrV7aBuM8Hsgzqdu4USyM23Q8AaezvFQKWRuzoo2ihbbZF4uxVxiyhJssD",
  "key23": "nHUWNYX8DTCXdw1a9ccu4N2NPbHootNXasFCx82byMxwu6voAmSRSGqEmFaaduVmFTifvxHNdoZ2eNVDXRmL6TC",
  "key24": "3DZaJxWeKNG8wD72ipeM6bRtnWMc86YceUNYnkcuyTkeqfozQLmepFvxE1RQbxehRrEL1f4EqCysEJeepFKFHV4t",
  "key25": "2YFXh4C978McAJsjGqko2YgHp1ZdfSpMRWduAUVXiTU11F3UEEmpFXyTLQjbxyA87FtnMy9cokBQR23Aadv5ZLqJ",
  "key26": "4NDB73E5YVxqiYaRqiswVQVRzUPGaevz8sgBybY1ZqvrDty9hwZt7MYyB92AQotqgw5s1jEmtoQG5SgtMntJbNoi",
  "key27": "4hKz6wG7Ae6cwvL29K3JGiAkrZdPUTXs7FdkiFsrGCMVSPYPSKrEYrLZaKLUxSCLen9BLWowcrCzajFyxTa7g79q",
  "key28": "29Bk8ixiA4oZoZhnfBRYERnaipJBNaxq28wk5PNiZjKdrMva2VovtYMLALznEKLUvAo9Dw5gE9FbDS7H7HKNixBc",
  "key29": "YykfMqpgCoP67iHkPbq3Q9BvAjAQhmRJ3ka6LyCGETqezoDpcht6tkDTSVct9MF8gxNND3rpU8y8rHKUU9NQnE1",
  "key30": "GLhKvnG3Bo4JNNZJQXpf4hX9U9jq95kngiFYbfCARcHrqAMByUkbCHWfynAsGT7fFJNPcKh6jFKLMqtFKP5HjBP",
  "key31": "55PKssGaUuerr1qemJG2B4qAApKDF7cbv2bUZqLyHpiGNrLY3T6aJ4xFFJuFDNSEbD8jm8KwmjasvmmP3tbSv2rx",
  "key32": "WeBRYrYY1j4p2XynhZu381Vs4GpqUF7DUajdmu4uWtGaPB2GQyW5LxH1GdgnoNNHd8PxhdVL6kF9JJrnTJH7VZ5",
  "key33": "4JAA7t9fxiwRvd5iijVgcVp4wYZ4dRqKKRrHifwYxJixGWfhLUdSvjeEhgri7Qbmx1qZ2MMmffFef8ooCrMFuty7",
  "key34": "5uNTxFNGFS346Fbq11jxq8rhzfevKnUU2DVwBWdAYmRwDmrK7qVL7ay88o1tvEWu5ET87o1WXyMkK58SvDraQyk2",
  "key35": "5irBfGdaidGLp7vkYAKZy7a6LqFU2NQgorXgeXDSQKoKbwG2EjhustJzKcTTPLS3rv28T33APMmMuUFmpYHXepfP",
  "key36": "4xvTpQcBkGxTts8ZUAstHZcYLKM56Dej5qFjPzRswdXq3ioWcRuzkeb1LcoXibBb4moXdcxBw8vtUk3RxxEFFiTX",
  "key37": "2npkfr2izgfoVgK3XzM1mJmt71RdZXqGA2FG8nDXeWXqHdHy3DsfZVgXkX3DTFLBx7QKmx8mYVuXPj2YZFs1BQnK",
  "key38": "4Xe6qACBaxLKhkmaG8PHv5HMohVdhXqDzPRZ5BivUXBiuskCcSiVrKJMYwXPgnc8ZH1e2Vjafcu4DrE8pMRb3yjK",
  "key39": "47zMYuDoCqM7GTgPZoDwyKbv7hCZSK2XY4h317DgCEw91h71VRAkdijaCAdqeQmeYMAhWxTfByXWMzsWGGKokF2U",
  "key40": "1YjjpCdSVrmJXAXoW9DpGxtGD6HeZpHA83M1PMWPPiGsgvwurXxS9QWWNmC6DCRvPkt6HWBfv7RHsYbQdg81N48",
  "key41": "3hVci1hRW31r2JdEVdxrJehLctNYAV7QR5D63AgEHDsiy5j8ZC2C6ZeVfuezjrHf5od4URYmKB3mnatWUVwhBcpS",
  "key42": "5Cncro5GHXBGyn5kd5MatGXidW4KCK4UKmhAfxyWaeLc6EaPxweLeFoQvDQ518LzMEnnSQYCBXfndzT3pF9Vdhqu",
  "key43": "3Kk7yeGvAGJ1zbFaEd69dHtFmFGZ8iX8awNSsrTNVKzry6uGHiw9NXzM4aPKni3PPUGKN39bUkdG4PE6A76g9TUZ"
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
