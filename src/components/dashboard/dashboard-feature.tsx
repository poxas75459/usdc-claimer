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
    "4Yswr6Z1f3pTkMYuqDVXELf94LBCR6C4Mnt8XP3MAn6FpKn5aPXRXyzoHt96o24ZVFXpJD6bzqmAfbAQ4ZYkq9A6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1tpDoESTz5ZDpLnqy8Pxr2gFa5ZZQCCim8yEkGoR6bNGVMSdNNTmFu4jrq6kYy4L63C1tTa875HbyG4YpNPHndz",
  "key1": "5W1DqCXTVYmvnzZXiXcTpUrQ53iM4LrojKGxn7gxPmvf41x7fdkjMATPt5YasPhxaCy3XTDUoGhtjAqoTzBcHDdQ",
  "key2": "4NLAemLqBAgt2fj1iDP8Uy2ZV73ojEg1XSatF5fUdh95a8WxPJYKyLJtGCGZnp49UKFRX9NfQA6pkZ1BZo9XS3eC",
  "key3": "LEFm292fkmATynFZ7ED2k4sSxpiawnBUjEQ84rfezGk2q2wD95n8EtxZ9QtXdVhoyBLtPetx1FvjKy6bNgGCXxm",
  "key4": "4D7JR22eBQqdvoUv5oqaXx5YQh2S8SMcUwP6xsVrr9iSE9QK4q3Tnwv8xdsrsXwhMcjQaVxKm5hk3ATjUbQtige2",
  "key5": "3AbK5NDj4GF4RYFAUB7HyjDQqGnN46yv8fohMXREe2MsD8dYuAaEk6bCGTWS4e8Ev7GXjB7tfb3HhSm3nCsd3uGj",
  "key6": "4jjxFYxHicdik385gkBjVjFvsgyytkAd7pMEDwBk1ZZFerUBFVmgqSuZZGHmh6bkbTmjwZA4uGrnywyBTkzZ97xb",
  "key7": "5RycqCgGS4Gb4cRrrQ4JEDrAgU9keU1cp891Wxs65NXw5Q4eEzKyWDC4FHzgxL3c1z7Yev4r4nNyzeFqp7rUkaid",
  "key8": "3QbAyCFY4hb6CugU4FyS3Kv6Ke8igeUEXjmSJ1UPDTMEpWtupj5qwD25fnpxQaL2EuRuaU3aUSpBZ1wcVudGX6Jc",
  "key9": "294WZ3FsaAGXFVeu9wqhnGoqBJEyb8uzjRcuawqrWsEhDqf7DEiSJ13mytTsRT5sFbCo1DbqiJpW3rYuP5vKhjZC",
  "key10": "312Kg47jfMRU1YTAPNxDMnLawfoaVbyfVVTpvUXXJbeg5m6sTxcst1U2XBbBVNAesreZ9WjCrT9rg8ivT4L9p62V",
  "key11": "3ruYGuSjM4egLeBDKZDc9tnNcePp5cqzGEUh6vzdn8WaQBaohjHCqB18pqoWkitr12rJu8vcVCPrydBVRJLFMeaj",
  "key12": "TfXGLtg3WkvpnN4BHX2YmJSfTpjBJT1QC85Dx2NdwyKhzcqufZ6TL6ujqN1GxYqH8qYyMah5fAvtzrs3GXjSBWp",
  "key13": "3CErYQTBTutGDR9btRcTiiehwRPA7HajTHtrnPzE4YKHpnZ4FRxhwJATrJ3xkcMcGeE59StPwb6btbLLV5FsqX1r",
  "key14": "4Bac2RgAY4q82Nv2ccaTsZD2V4pj54hn15LDTHqqwqc6iWoCYsg2f71FWaC6Qi3uzK2vag8sW7hddkhZfjWBANrU",
  "key15": "QAv4FSA7jyXwQm3KSdKTybhLRcBE6av82Xprw3esCpQAAcAE1myiDVVUwf2WzV6YbbtoKCZkwT1Xnh8uQSxc5Yh",
  "key16": "3SvgeQ68a5yBs6LtFzox1WuZ9y4u9tqtQA1Tu8HeRorqS5ySQQS4FxWgHkmCDmp7SFLYK4VnZLbSHnerdwKCUmRQ",
  "key17": "R69jHpQsPC684M2M95X8KZMeEGRZs5P1GrWpAVv45XnZcXgsGC6EyYh4LaG6YocesF8Psc9mABwFn9ceenauQQ9",
  "key18": "4V2sKyQ5c8FewE4ssQZ7CSwPQvZ6PUG1TyvtTKzNH67FhUi7EqrKaRMXepVFfSQw4hi9bPhSeUnGAiKVMZT9tV1J",
  "key19": "5vqYcMva7knqZ7rQpKdnKQUjnNw3VnkAEH1ZPhFXbDbynUhQ9rcw7pSAbzYw81U4GoLnnviuHRYtJvwM83TG63xz",
  "key20": "VWUpL1DEAKacYrACcMny1JTdPr2Pksg7QgdBt6LQUFsqXQtzRXKHoYintdMDSn78AEGvjPvjQ3AFqyxXbbMPW3U",
  "key21": "4iz7wy9hcgqLViwP5Cmk4Z8gq6usJ3Qe8pzsQ1QRVF9sYYDYtNw4a4S4nuRs2eejD3FnESwvpEUdhfvr5yj9TqQ2",
  "key22": "kG86814qU7xhgNWdEnJPZeFBsZ3iaPvYzpEuPJCbd1zmRvHfcQjmb9Rpiw4dLkdngndbMiCjbQfLppUoFdn8qGD",
  "key23": "46ePa4TCiJnSgbuhkoD1WzpYjd2C7fHdvsDTFL6EwDDi7hCdbP3XfENmsdBYepzuxwLuKoCam62bPAwwzr8bJ2ih",
  "key24": "4THCKjn431TfUeYEa1Q5jLYMYNrpqH4X6z138UJsdiPzRWXhUJhnmzNo89gz8uc43hqLYdTnuSaDr1zqhDwBK8A4",
  "key25": "53wVnJmubRacv7xdhDqWHcH6sAoYHK8Uzii5EFhrYKStygcE3SeeJnhKNVZv67reBE851krguaFji2oYLGPdsJVd",
  "key26": "5XA4L8rYZaN1zqMdfeTvYLaLuZ3wSroXQ52n1YLzbPDaaBrwoem7Xn7QXx6cuaWjDdxBxqLeTRhxpw8pfLUoFTic",
  "key27": "4BKGiZWSXENp56uGdJr4TP626f2XMxQZmUWBvnCMAQ1MTpz1ZzZw9jHC9D1LxgYLtZcRrSxBU2igxvXiz3tCWTLe",
  "key28": "4jX6NMcQumqJm95jbFCjXB7LaxLKq4oRVayiGis5saXQQS2cJbru7Nas5qmqehetV3MZPPfk2hE9GJ1ZhBFmnCGB",
  "key29": "2uJ5Qbaz6srrhTXwMJE6dJ8i7P7KCRcjeFSvFWQcL53w2cRzPQJPKZ67zH1F9A4GTU39jiwFP9MPu4HZTdQPLYkq",
  "key30": "2De2gDmqCjihg4uSAJbr5mPGYLgkNT6F3DRPmTSZpcGoYDMrgZgt3Lv79hqSei3N6QMdcemaAQsnyocrLVckA8sF",
  "key31": "3JpmVxRSCrRcT1zdVrhy7TEKbqLNpMGqMk5Y5BbHKWFrTxYDpa5vBFgtT8FPBtx8uZWTsffWp3rgQY8hqQFJJr5r",
  "key32": "2RKRCiqu9bf5Sgy47KrrDFqeySy31mPZQkp6npkQWBZGZh49yQVvxeFd4ErEzywWuNtse5248axN4tfMMHfj691J",
  "key33": "2jk1m8aC1CPSXH3d695NNKYv5kNjeLHwmnWnrsuMn6D2QjkNLAZLVCEfTGjLCjUGkLxBHVo3cbxWXvE3RiYujevt",
  "key34": "48R74y8Cf4ncKJpQ1Z2yAzRsZjsxrBf12dx2gHeR477K7kB33Rpwc6TMeEgkF1yKhcbgjmDHhTZ7TvX2ks1axwSq",
  "key35": "2A2uqGVHMZzE7BGiLUJu1ydrQxMkjgQK7QkSoqYk5Fadju919CBkJGkm3dv12MvcLv4sbWbUHv4UVMuakmzwEpV8",
  "key36": "4jZA4m7fRHo7MCqx84ey6r6YihrtLzue5wQhACRxWC56pJXfad8VEFpVmmWnG6SsSwttawZZTmyG6y1Yj5m1kNSn",
  "key37": "wsq7nU7WaUWrJGYo9PmTi33WNFYkaTNKoi6hw9YvgVNq5GpjKiYfFY1mdW5fEwrJmKMKtMmM4kjZbXR6ygP3ivG",
  "key38": "4dVsEhXuyWJH1G1bbYZdGoakNcJGMUemXh4zSEQsLoRiXM5NGEcy5qZe43XNGjnuH6JBPnmRzpB385e7qfiws4yR",
  "key39": "2G9G3wVt3A4KR83WKomkUEuDdWX1ZeHipa7PJXdhgCiAmMjmDyW878fHqw63PzA5onXt5j9G4LoS4CrNeYeeFnLU",
  "key40": "5MYQhD453CzQ2GhpfWdrt41Ddhg5DUq8MNS2vwBEW3c7kfMv6enfHPJXBqTXY39PXb7XAgZfYpQ3nJKtizs1v8T5",
  "key41": "5KsT3WbwZcM9WPokiRts8mNirXCDMHtKatgmwMh5u4X7d9DmnXWizQegJwB77A8DNZ5bfjFzhmUSVPWnDvhkNW4C",
  "key42": "PnxWcvGjH2LwH2VGXWVYJKkQ9ziyN6qK4vn2asvgjUmjVnKjHHn2TjNFjzVh7h4N2MLugjQKfSNunzpDs8Jwyqa",
  "key43": "zJrCjQzCzYWpLuuCwXRUDwFjy4GCABBbgrL2qkq1UoKF4ScG7gYWdXMFnmsfRnpYJLJnEovWyqc6DvHtYwxp7Vp"
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
