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
    "3UwZEf9gTPP1v1RrH3mBcor4mnNqWdQqiCyDbyfvsbyh4y91rEW2cmiiRhbNNuHRAxVVUJuRBv3jnDtXCQNQFXYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ATghtkCRbvvYYkWhhWGFt8VuBVzXaQ6DXPTxWiDSH2qki46jbr3npyipxw1wFfgSML56L6tsfihBn7BuakYjQc",
  "key1": "4k6iNUfo7y6AXe4PqSDbnV9hm3vUgmThdQG1gRrTb4tZAZUYhoYzAY8PAkJVxk6q2a6yxiVSbHQ9zCtCPMLCUasq",
  "key2": "5EbP1HtcVue9NdvhMJwNQNCpPcwgpZHuNKKs6QY1gVc7v4GexwaPFc5njZggtXvF69YvKPZTg4hKu7B62XPVEwZg",
  "key3": "2pCYpS57tYQmeaVVjLF6PyiY6t4Xm5MGq4XiwYiQ9FfZaQe86qQNJP6fZ2efyGFHtWZivZMoR3vWAgFWvcBHJtxp",
  "key4": "57cHNmqj1teRSAKoDkyTC6PRhXqSKm4nbUGAdecWKWRTR2bv62rtn8DiCxwCb3UBonQW9TDA8FV8owkQRCDsyUWn",
  "key5": "5GoXvtRJa2bhvPTxDUsvUF1Sp3CKcVuB79S8taGkAWv81KfmZJPaitwSAWs7C2KpSL1Jzkfye6PKSeszJWvCMTrh",
  "key6": "4VKEs5MV5RbeZ8pxrjbZTabRM7qUzMpGDWBVnYX9V1dYMPDuwQ7Dkv9imJHqPgpVwrmyhj8MeV63sj4gAQdDkrpW",
  "key7": "3i5TAkvjq8rf7HUbzwYh6oQNq5b8cUAYrzqCx7Efd6AujeUx2GZPbRdveiFshz98PKduXT2zbhCkGRX64rRzgnQQ",
  "key8": "4PQm9zUmPovUB4KF8ooQQVonX7RQN72tLTweyY2bCRX5M4QPidoKdARtRzKb4eLAMb8f95qEoegrRKGmgziFkvUu",
  "key9": "3CT1Jtj8y7thHpwRfvnpT4H8fG1Q5kLCtxahAgBoHxSok2GzRbNNgaXqwNbv7uqSnZ2GAAbSm6pc5Z6STi3ZKAnS",
  "key10": "2TAFniSKS2jcqV2b9ModbLWgWtAnntHannPZbYFLQNMm1fioQdgL8Nvv9Y6T16iYuxXW4dmhTPAg5ZBBa7JzHUB7",
  "key11": "3f9gruS1BVR5ySaEfRXqpmE8R7fibJDweMshrRZsKkPVintbETWpfzKSkjiiPTaVEHgMdcvjzKktLcgRRNvDiC2C",
  "key12": "4LbkamU3hZXKv2mHFKJQ7Kv8S1GgWb3sbR7uuxXaUy6uGQbR3EV5uh5ZyXuHNPYmUVKesT7dATPrAXNdh4EKm5SL",
  "key13": "4Dsp5oMTGyCZ8G9JftkUafoLPTV669iNUdDXRFpbPRExu2MnQ1FBRyv2VrShkF2mFy4Zm9mHMp42C2ZTtUDjbZ2j",
  "key14": "2zM7EWXFM54f4DbeLY6ybrqiyUZCrzJ8hTpAFRojWgTLaPazczVsGRJpkpXgeeBeKtqSzJ1phUV4cDrpXu99XUAb",
  "key15": "4E1G1w1hfRvSvg2ic9pzGmfekZrXy5ZbRW9iJdv6VK7K9wMiZgS4k8PxeYSAPRaZb3itpzfEXXqthrtPDqrNeURu",
  "key16": "53akmi6PJbBBoujiFkTJYvggqChksrHuqiCFXdynSRpVM8DEDyRGwYsU9MHSCeoj7tFY41WGBse9KWPgHN21cYDP",
  "key17": "2ajdKwK7x9w2wCrfZVgoJVSiS6SkF98DDY83wNoK6bPKzNJ9o22PGvXAN5DRDeCVNM11xfdXko3Ptb9FFNLSZhJZ",
  "key18": "BNsn4RruDGwXwyttoj7EEkPjtniZfTZB28mTvHAUc3VgoBxcwqn13HhgDPadkL3K69PHR2j1Nxg6X1WkeL3oJ2Q",
  "key19": "2AkGtp9LPtkAegyZBUogeqEykFsJEBG5AzUQXKvpZHkQzNiHFTSxEcShKDgiAa79vEUi6Dub6jMtdPyUPvwNg4Wa",
  "key20": "2N3tgbJU7MUHdJitZBb5yH7c3t3HpA7hguBfuYLMrBkDKy716P82hV6nJefYCjoTYRpTWGTXv2eXyr8SCEN1przA",
  "key21": "3qxc6nW7fNayJsXsgYK2hp3WtYPN2Re3SFvV6QBz1iCtRTcKQ2uoxC3Cbsh4ATtWNzEkUYdG2hmiZdYmyqR9e8tr",
  "key22": "2hA9iXytVx5nYSnNEbBzo56NvNRHLcqBNCdFidJvahaL7jxRaM9DGnWFMyCNtZQ9KGAHmKYRXTpXvoLNNcN5amxC",
  "key23": "9yPqLgTLjZaSDnCSnh12sPLYen4CVAMGAkNXYuikrZMpeVWPk13uiYu6YuxDy21hd8Lv87xRpzNzMRQiwvbFNoF",
  "key24": "6XE4g6yZCBkHvhh1Lr7JDyg8J1oPCjRX4CvNy9SaX29SonNKyJDxQhxkrY3PAvcNf5EPgrZ5WoeQgXPyneEyHWo",
  "key25": "4qePqhW7aFx67PLqgnN2z3J9MDQj4pvZWRaeASzXRtvAwQoMGR2jcyqu2qXgVvbpR7akyR21LGnA2qskcKeKU2N3",
  "key26": "2ARF2z2Yssrzfp41hY6YyqdGcsHVRxf55feK4L7Rb1FqRRBRbTL6SvxJjav1b4XUouhtEJsj2mjNESJDBBjfDdRa",
  "key27": "46pVFq2TZZPTYVc6zdf6eFPQfsNrpUHQCLh1TyNvfsXxUJKhzBsfNxatcEUGY7NSvSAUp4oNgokWgaksjdienDaV",
  "key28": "uH6SZjX6P3BCju2b254D1yWmoxbaWWTakApEwTSoXZaZKtk63jPMr6VvzTNLDQs4XC981Fa4DXKHxizR7KryHWZ",
  "key29": "5JtcDEWcoSPLRAc3jGpZsCFkQgam7oW7ZwyRCDdYDxLzY9kQqFrwf8zBL8PDAK18C7kgjHZg48VnBsh7qWqRYbLB",
  "key30": "3QgWM4mNZDYpXGVFAUxMnGQ2JNrjJBD6eYfPokokPVXgcoP22cBUQ1gfwJdf7VmKREiWDz33xroKDTPbraSxtN2q",
  "key31": "5UFWuCY9CPU5XFBoumFaHNmwMxo6X1mH7anELn2pj9512G4aQmtPG9frJA985GMmSidjQ1WXDSsWEQ6MsTvo7iqJ",
  "key32": "r92eYhve3SGJCLKaNxgfC2ZCqK9Eg2QQbvjSkbb4sStCJ3V9ENaVBcQrAtpTMhibxJSUknZZXQNxrMKqq8f1TBm",
  "key33": "2dGz4BEDnu58Zre9LoP6QuEyakY9tmk58DmDCwfQq3Hb8apeK1p6hi6PjkM3bGxzFEGt45cjBMvDCDMZnpJYVT9D",
  "key34": "52cnTwERTUr9wZDg8jCT1QdRPJaKSiCqWi3rCDwc14mScHaa2ZnhFPzdFHDV5FvAqs2m5YsFAiL6FyC36iZUweZ7",
  "key35": "3EQ9AovMjywfFBHEoPgCfRe3x8wASbFmXBG1R2KaAs4aqRgNamBX2rMuDUedejysQamsSqB1p8hZCD13CF4r6F7b",
  "key36": "2fT8QbVm8ekgnJva6DR7V1TPgWfgu5iBkCGxK3Pa7Qx4A4tPVsRPrBc7xx48PGzUar4ugFLn11jR5STK61AdRRn8",
  "key37": "3qUKjyUXKZCobu8QicHuLFjn14CjjpHQJ9SqpR9WNhpVhP51Tb7kkxvAJzTrLRCWmmhtfvcxh7qqQkN3yk4YVf13",
  "key38": "4vsQURQMYUg1xPfDzbxzP52mLMQJGGChZtW2edizf9GaKDLPgTo6adpFHcGfbrgodLUbcoy6qstTn4zJiD2SSfJg",
  "key39": "ME6HYmPy7rJ4pU5TqPW92WH69KE1GjKtufh3Q26emcRMWrrhPB7W7xfUE1pQsCYnnrTs5oAexWidToTk1gsU1bi",
  "key40": "2LZsjFXhESgVxpaQ36vWLNp7Fb2uazTaFbURXumQSU9i49Jz35AZR8QnNkrqieFsf71dvnxgnHZxVpnRViLmWUv",
  "key41": "4q6HNso3CTzoXsoedi9wwJuR8DUWNn2osnn37DNNzZhBhdtTRZGbSRyP1qoNqjruBLajJQSM5Dk4emEFsKjp9Xiu",
  "key42": "37GfjTdZuP1BBcAMn9HBfdmQyVUkZzSfYYrTK9KbrbtGKo8wcNohW6tvG97ujkXAMrBBfvtXnvmUszHQ6XfTBtAD",
  "key43": "2naCdMm8aXUHiurM2wnYWr4HwZgbqUt1ZzZ7oor1stvMUsN8bM1CyWPvur469xZGMeLsGPkZxFo96vUwXoyUe3Dj"
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
