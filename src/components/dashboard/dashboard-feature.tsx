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
    "5kdK1nrZYi1Xhzj4FU2jQUnkiv7vYcKxWnVBsgqeEkSigu9wH4bG9PsMAhaFhmyXFVHmR9vx76KUZetHWpeBTyPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sm12qGaY597qxSdL6scj8H1udghVzVh24wBsEPWnwPoF4gi6a7FeRhisDQFw6HHwR37rPiBq9wf2ensG42T5z56",
  "key1": "5RPEtQVZLZbWLR2dVZFjBbuEAvVcyjCFenNfyG9g8mJoP358ayrxLJLiaEyE2gjSM3dxukj499RMjgpfcVmDhGRU",
  "key2": "4XPq99wZVMxoLSQQexoRtTjcVmRjnwCT1PMiQv6VyE9Vp4vY6XznYnbZ94mQaK1czbGT875vs5SPWQWf9dqbFq9A",
  "key3": "2g6C5x3RkjQin3ZY1yjbyU3c83h3wZ9qr1QvXUASrV2ibW4efzpJ8ug5YPc1CQf28esUyPFsPwaE31S49tmZ6HGE",
  "key4": "4xZAhdsyd8L3im8dbwyTtqho7MoFmroXcNSZT8YdKttPpcP8aLLjARrWjEYmm9zL91PDyavh2sgCgbdmrHi5dXWt",
  "key5": "5YWAsPCXSP6T3RU7zzuxSR89iBdtuwZHXBVq8CHWc76NLPLLoL348gWet1LtpB2xLvVuTiFiTupwhvcmk1CFsniR",
  "key6": "5q5eTMPvZzdTtmCRkpbhoGQJFRuLiAkUsDp3GgSDJmfWsLmbnR1u3VwUxXXq96jrknBsrbEW1M4yx77UPbcy6iok",
  "key7": "3kUYCSkAKge55QDvuiu4E6VPqixPU5CcDo2Fcj4pQYruX69raBauWCFrBoFrFw3wFnnsZUHGXr9A6UPxLvdEBPbB",
  "key8": "JCrepWfwaF4iAwQUvuT7tXv18zecsKDrUeLZ7E944zMpMTSd8bfRBNviK4gfrJ3ExWeizMeZXtNG5ffQ7fYK9po",
  "key9": "4ZSrzb61JUvm3qZmNXeELkVU1gn1ie47WgP5uBR8RhrRiZJPorbmAERbKb7aprsmd8V8xSg3QAViQ761MMDkpqq1",
  "key10": "Z6b6AV7KyVWq9MyHBKW2iPoEv4RFnPo4Hb6CvEndBRxSjTj4jZnDcvEnyv6Koceqa1YrUUARnnjUJauagP8nLh3",
  "key11": "57ZVjn1xnThVsAzdfpLjW4PuDDrACRktUYHnGVVUgQDy93JAXxfCQrn9F1kt2QChvLNoEUDh4niZok1xG8f9ZQqG",
  "key12": "riNjDWF1JHaxkX6kghCjN4GVYxaAnaK6kt8ya4ZJ5UMko833BMLqkTfjwBVuX6WuqgeyLoPMvsfMXXWWTETWKFf",
  "key13": "2oGEkJyUVQkeeptkgNgmgfo1paB5tT7mswkfEPArZTduL5S1c8DY3EtnYVnuEbVc7JPTYeFfbqF5enS36rvuYEnf",
  "key14": "4pWN4LyTiHUWSgxtcKs7mqLZdNgsJHnmUKnLrtRYNnSWNZQ1kv6xccjt4CVv7KCbpnQYDyYnJ2H5Xhxh2vujRqvz",
  "key15": "2K49FmjPtGTNUAtTsVGF4VBGbLtV8Enx8xXubQvHgg6nzCnb6xLG5WADvVVXt5VkhQRLk9h6AAb8snBKB7mxysiu",
  "key16": "5kJDqJknYX5b8uBNvMQuvuEFghy321GMK9E2DmDZBjccMuycjNw1wrEQAypzgv7qGFsQAGT1G1djBqzYGVvuZdwP",
  "key17": "SvqTHtD4V8HWfFPiJSqD611MMwAikcYDiAUa6Nh1LMYZSKBaZBSehjpB4c2PE6rQa9QzVgk4rSaXSozLxVU2HBZ",
  "key18": "4tkzQnsqDVQymRo36MfKKLDeeVYqtW9omZpydjCdZGLjsRaus3wj7pvT1QoLR19ucm5QHGRFmbS4Ua3ngxuk5dZh",
  "key19": "5uLXyXpYHCCf6d44pFoDu4xZ5USXpwqWMkFt16zoc5pBYrKgtkY6RTkfq5ej1rhiTVN4v4SQKCSQp9QcbSWPnowh",
  "key20": "2tveHWpgNpKnJ8jJqxpwypKAyQRbLmuZfNiW9NA6WvDnoRTQLae7qTk1f8AmgdG3ujyMfwJug5YWSb74pUKzQyeG",
  "key21": "2gDnh2aCr32tRszNESpXHxmB7JqJKhWvsgJ5kMVXB8fAaLpUxAcUPk7VMDTMiY14op2AfQZz1CzV21SdCsbuf39s",
  "key22": "2xdc8ox7p9EM69GKUAh33VoCLoBsargg6GACPbai43cGA4dtb8pjhW1To6R53KEK96dj4dVxFLoSxERvmYVm4Wr7",
  "key23": "5ppvxEtHWkPVjHT4GVyfUJiSH4Lp9xZcXEV1qLtELnpcKrmZ1skdH6sG1dkQsxiqE6SNUhZKZxSau6zJcjFK3NbT",
  "key24": "4YujGYhH2LY5XwpmMy9Q74SuXRc41URzr86eGnshTKxFjVqzPc647aNV4hL5vhdH5sfBiruVCp198vyf9GN3r2oZ",
  "key25": "pzZAxvzq5aMTxctu2XUqyRhPCUjNzNEkijme9FJ982WepwfJfJJtuhnRJvtvmX5HWtUnF4X2CHHVtT7LHu5sMhW",
  "key26": "sFUxLHgHr7CLx9VE6RxiNiyWwv9iXL4agweN9TnBwBbS85Rvm6qQSRknpVbRxRRpodcapM4AGT5dwihUXnvW8kU",
  "key27": "4eRv8SWRXnsdoQhaK73e6rsFMp1HEsVJ4WEx4vKEgaGXnXbJGomQT8SssHvkP2t45jwY3pbXhX4AM6tY9LHkgPou",
  "key28": "3sRQN6W3172JXgk3L6xbyHoGJrPuy1sz6vfvJcWRXqpQcqqWSdxwjCM6GJ1zaRZvLWzZJfd2psEBmpHTTnrF5mhE",
  "key29": "2hCLoS2HToB65jjGGbwAwMBCQgGpn6EW8cLtfoGC5RUDPv3uzTjRQWFtkvxiVudsmm1oUrXRSiT37nSrW4X5qJF",
  "key30": "5fW5zmuNFBxFj8NEaUoJouvTUvKHv9B3t8HmSRjb6z855NqHHFE23dKA6VboPQBNsiznLQNeCXoLngG6TrmfByop",
  "key31": "378FAfUnvrWqvUvMTQYfwuKk3BNZdyryG7YNEbhptLFV5GtiZPxew7iYmPU8ayn4qssBZ4cPbgCgTZb1eiNTiPin",
  "key32": "3oAU4K5oUEsEyV6DQD5UUZAfPKXibVbDoPjfsKGa8ELHcYyxWk4kL4D5826YtxhuJBMP6CicZ9ewMFPQN82FkuGd",
  "key33": "3ydmGntHBYHvYaBd5zkgWTQj5jWqUaGrD185EV9xN2tTXXQ3FgXB19uopAmNLnTQgKKHYUzeGqKEZFWnzmry5Sr9",
  "key34": "9kYyN9cGUmtgmxbkSJDXAbBjoTyy5hzvjZe28P74zahRTNzWAbe7s1XzwaH2KDmWpBsJGzr5tZ7D7dL6BTkN86q",
  "key35": "AGcJECvA6HuxFkR51xAAqAkRvaVgVyHTeYKshmgEafpdiLj7J332Pnc58rpPJdyAmVGbeLDW86SDXEWGT2iTmS1",
  "key36": "4JzAZkgZrJeCD1Jo3cJwAbYjRPAnnpAiZ68CzaU959XvLAfRvFqMWiNBs5quoGxXQQERhfj8z4y6yz4qR728FuJN",
  "key37": "E5UGBR4A9TujedSe8Boj9vnokinhEwLc2zZ3Xxsc87VTfRFsm8abYXeDo5PWGGyvzCm7FxcnsZkSagexCYA2tGk",
  "key38": "oxg4f3vZ1DeMphwuN1PPofmKgADKrZMPxhMEqiYo3JnTj9cqxSRVqxvoU6wdnFthgq4m5dtt79jfoNnf14wKvy2",
  "key39": "4rrEShU4yiRJEFkpPxjoWfGYsV7e7tjdCNmLfJ3ua5nKFGc5BwbrTwjDb52xjhNjhyDHADxps7SxsPSW37r1z8e4"
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
