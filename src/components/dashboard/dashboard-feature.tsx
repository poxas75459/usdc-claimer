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
    "3CNuopkGAMipbJbyqdejgErgAUhgp2FaBq92tempVRqSaKRDJGpueyiWZQskCWB7fHH1nsCHBQku9GYD8AdGCGG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tdXDzdvahUXNsMnNcneQmfJdFawTMJSUs2SzpmdXw5aPnovBkPk6PkPffkJ5oHxMfMmvf7PHsKxCAPeVxWXmcuz",
  "key1": "5NUfd6jg1B3GXtfPmYddWm2qimNNSugKH8fssFjkH5X3GSPxaBc8b54jb8tADS7Fhu2eynysGLQ6cJLrBRCn1PBJ",
  "key2": "Apba6ZQpQWPRv6WR1JPH69zq7xeeQBc6Pryd4v48uBvKebvtF2SdroPXscAxfYWRCX66gDanrLrUtLi2RdNQdCU",
  "key3": "397SRbgaA8c9VkbfMQurcDxmevpoTcXL3Fm7cpzvhmhQy29QoUAfxFkHPj6K6SgGbMuYoZqLz2Av39dWAsNx3sQ6",
  "key4": "3i5A81MGTpSvesoNTxtdVJhJ8uetfBqLSTX2cBPcrE7w83z24EjNa3tqWnv92tgWpMqxgX6WfvBwANsqc9CpFzAL",
  "key5": "2ncaufwf2DKcucMkThTuSCw1zB4SH3HeHckvJhNKJKswD4GjejDw5dRzUGGqcjCmj2WToyUtsVL7WjiJ8hUMoaoR",
  "key6": "3S3bfXVwHiBHzU6R7fynwGqVokgfjtuCgfLQzzn7FcZYPzNNAdBTwdPni9BbNScMqdN3taeFQNGTfLaFeDTubynk",
  "key7": "5mDwEH1LRg1PTudmqF43FeUKkjN12fWn6Nw23LnQzQM1dQKoEnSQWLi29TYytdqKF8D88h6CNNLRfjqWM6M8Ce9H",
  "key8": "3ihAn6Vn2XMzUYPqLLPiEyarShdqwJYccnzuFyCnsAUdSW8BaiMgg7fxSKqpwheyMoUz51y6uLMJQnPmXyJqnDEW",
  "key9": "433LYpyvoECMg11ybQ5CyuwQgocrGGMrNbsEfnsQQkqsDAm1Kdy2XtPWBogrt46WBX7ASRSQXmeM3qZjZLZ8nfsG",
  "key10": "5raWoLjKac5sYSrMDHdT2ok8qYQnn9xEv8hWwVYVZtv6vYYpSYYCBEmJ8Uaj2nFMVSQj747JaQs8S65nQb1YKDK4",
  "key11": "5Ehk4mVcMyFZ8PETzixNPUfXkok8BjLxAT6NekmFhBMxCTS3sSejiueZqKMCvZUmP7Q8GQGEpZGFFm5F1fGQMGD7",
  "key12": "5hQ5WWppdJkthUbLd9Yud2tcg24AkznoPFKzK8Y1asJKxEmWqbAqw8JG8aqxddF5LUyvr6SQRXtcpUtAvSi6aje2",
  "key13": "5j2vBJ1neYGrUTp75be13Bht5JbecXFbwHzywV2hE3cc1reFaUL3LCzuRjmxg3EFez85aKS2Aifwvws5wRxeLt2L",
  "key14": "3XyZyGmV3EhYRtuLprmJvTT59KNgqnRFngQfmGo329cA34MEM87GRPt3LoXUgi6G7ivSKg71BA1v24SDCHDoFniW",
  "key15": "4nBqEdRUvA4K1Rek1raguUkX48VC5sHFGM92xnHzSiiogB1cMxygnTYnX2TXrJ8C7RLB2qSaPgwyQ6TjwSoyKUjN",
  "key16": "2wiZd1Z24CBJDk1N6wDWjpjUEh6Zuaaq9KVWeWiVRVoxvGbpQsyE38KFLfsagwaVajRLg5YuzdxgPsJK7xE3oaZ2",
  "key17": "2fvAZheb2ckFQE6QXmGa6KvAXHhwgwkn9TH8SaybmNrzNUhYbZ9AphQp2WtpsH2W1rdLgcrU7U3FM3bKcpddhhy2",
  "key18": "2yMWkBvLP38qgzF9J8SMi8NYqMReHzJ1SKFsgSsNHoAScM6LR6xEJSx1TCSPFrgeBfAtAmcLeL6xTsrDFyrXbXBJ",
  "key19": "5Wo33Yi5ARZJwfpKh7NwHoMb2QaH7s5Rzayh1Y5Aj7JT27tit4EZRQ7ybzNhhmsEjXMkKETbheuGPkhoaRZiheih",
  "key20": "2JtDoE7N51ZmGe98T7jyAfqHmrnQ33bHiYsfN1EhpwWDo9SvmPUzSCBQ91S28PCuEN3m2cd3Gnmm4P4SvutBFjB9",
  "key21": "39kZ4CAtEA7DXKn5U8LUN43mjrWjtJ6m4jjY2EiGZr3jtDdjLUASsGZWQWusLqgqJUGzknMsQfR9RYL7uq6MPqS3",
  "key22": "272RyeeBCFx7hBffwSv66d4cLtwnnR6B5jn8Bcj71dV6BQYVoTTrP9auqgJY3NuPK63wY1yPzFU3wwFXEvAnHSFh",
  "key23": "4i2uC6aWZUhfV5zH1HAEtpFhHpVKicT9gQcAofQtFJDqYYYV3TeQ5NaDSTh5V9EkvJwEpfa1bZu8oa8GcDEftHgD",
  "key24": "38VZPADBAxTE6ytmHb8MKNCrTDZ1D4e5XRANZUVoU1ioq8YMkTw5ULRdFLugRhm4nh1Vi1S1hduvQoSmT9kH3dA8",
  "key25": "fF1mARTUo9BZYfGtc9rzDJEgUXiJsd4UXEvgwy7V4XtzV3NqoTKQHFAwoTRXLpZEkZn2WWoBUVmTznYA8eNV9G7",
  "key26": "3GBLx7EueQRz9Cwgp8ZzDrFpGMUezee5w5hcPScYWH2ceBbEHBBvtHdhYM1qDJWavcSXxq6TS19GGbF2uJKEbA2z",
  "key27": "4wXxQVw72CWK9wzWfE5cEt8CRT5sMbx3MBF228knfg2VQJwo7fpEYJoWwo2jHZDgc7aoE1cvtNpY9tXwcgYVcYfh",
  "key28": "4XZLrNUFTF21wrikRn9TjGuEntDTWLscBSt8FHucGKJy3Zv4Kqeaj4UMKbS2MT53Qan7ELAaTV4fNzjMKjbWx9dV",
  "key29": "5puEerg7NGBdXe7jMW8hncnz9kENBJG327R2WAfC3gDBvD1CSpLdg36ar5vpgTeZjYoyvy5hsdN9krG3xPJuS9sH",
  "key30": "5RZJLi2dyCkdCkQkmpMTt6t8Wp5tcbB7xirDuS5AbsZU9hTdLctiNR9xqsrRnXmpAkzATGU7eKdUBctx5a6dJb9w",
  "key31": "3xYNpTEXYcmskrCa1XrboNkGdZJ1Qhzzyb9DwZp42aBaPAhawoB15222m7rXSbVEVokKckJoteQEQ32HfcQ84YfE",
  "key32": "Zx6eN5VPMcM1PCLbwKUpYM2AootxMa92Ro3MTLcQMb4sr3i9uqudzKrvTz8hEzCbpqf32BDrEDHsYMjkFbRNbE3",
  "key33": "2X2xD2RJcGhYFcgeGxTBoAe1G5nULXRDmXnoJTgvaRjkcCQ6XFgFQXa7fSWaxYfigyjLZzvsKqHShArbd3cBuW9P",
  "key34": "2EL7Et6LiQD6bLmQQLaURxoY7AeBg4LRphcVESHNC5d1v9sfzzya9tzubF9SBKpXVKD9NDKkw9idLY7rJP8iyHqW",
  "key35": "2Wj6QkfLq8CU31zjYCenKWLfPrZJwLvMA4wxtwM8nZB6RJKUTnNzaSYNty632JUTg7JFi1t5U2YREgbZ7CxUcVfu",
  "key36": "5esmsfgCH7zb9WZjmz31mmotF7pg2Wgwg89ZvNqow2FZszGmNjxq2Kz8e5PRLZwdzmiMdHbTmn8unPL87jCaQKrY",
  "key37": "5NxzxFD3gKaotNL6YFDfHv5gwqi76cGK5v9qWGLzgHZf1FvcZKGEuxtBxvkuAHhKsx5PqY9cGakyzLtndk9idzXX",
  "key38": "2dg5Wmb3QiVPuQakKAaCDfmFEj5LsbK8yaaUkUNpEyRYL8agctzUjZ9kdFNeo2jjFr1yNhc1j2h98Q8qs76NV99X",
  "key39": "2Cs28YYD1GE1tYdGBLV9DN4andkXstH8UDfeRVraYUda6dmXmhdWFc6F6RbZfLbQ9D51x4MbgZ4pj1q9ahR4Rw4b",
  "key40": "2d68rtWtuzehd6TMEoGJgisLfE6i6xPwTYUCyyvKVVPX7sFjBZgDXNjrPsqroYLgJhomuwmBNyhJQAFBLNykhu7y",
  "key41": "34uiZWdkg6qJGr4WHfeVgXdbqQjspk1z9zGFh1kafagaQ6Jq2LVnTLwFz3JX71Ud7U9nMmKrFxNAB8wSpixv2AYa",
  "key42": "2iGcWn9ttpSMSVK1jVd54jNpn9KHLv1MdoU2FX1HTG51rNgHciDzby5aVfzDocFWzitHnrJFaXfJQ5k8QTP6bZ2K",
  "key43": "3aSvR9Lf7VRPFG1n2f9tUu7qcPmRS1UpjehLzR3Arp4HMpGA7ZWukyGWXB7EaDDNAYH5Ark7iyF83fAZHP5xMMPK",
  "key44": "4ZKU2bRZaLPCNeHWzuTn9pXkqsMS5dB4va2cT1FMt4xT9T4LQnVDG5KHWZMYaCr2JcQXHieYsdGHUPwrrdgfKq92",
  "key45": "2yYXJeGJBJhNdZr5QCTy2aDiZzhsbtA61n2AvhzV8ruPqanNDtxrQi6ue3BbYLYUCw3wEaKsrz3oyXwAzyRasmPJ",
  "key46": "59ef5HyamzSurT97WToQYjgrMPnN5xgZFd3AmG385H1zXND8q26ZLZkAwXj8j95r9B3jVP1p6dVHBdDuFCyVMAY8",
  "key47": "49r5cQnAk3QXxJVqdyRY9XC9yWpenyMmq33FBk46bM36XmMnJrrDaBS7xT5uymVCUvz8KVZWc9dSDgBRS3WXnkzb",
  "key48": "5BoUbtoF5QBSLErxUwJwNCiTT73bXXitCoM3X9cZaqWZJwDsFt2n41VkWRXRUqYhCRoNZsWGDBckYF1UVaH6b77v"
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
