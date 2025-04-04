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
    "aC36iJvucVgHBpUeD8F2RqCNojpKodRFWCxJ13orYdqYpr6tbFJ3KryAi3A2mCX3ZFcx2QqQQUKcfLxnyXbDYqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mq9kkNLUDGdr7xWmdEeSzmq23WhBF4pH7nFyUdCavGWMmpJ3UXLV5HeM5NoC3REEHwzhkUEaK8FNHEi8fk9MUXb",
  "key1": "2zGV8oPFJPUW4y7Q4padv3nQSrarjjcfMThzBkwyCXkjitWW9pjLmVeQKbgznizq5Amv1Km343oHGGfia3zyNXz4",
  "key2": "5smjHuBKYLLKjXChwvfiWgC5HcNn1xX5mNXYwD5bPc1eqAHJbtkuPTNaojyeMx8UiAzr1U5ZZbuPz3SRjsRBNDyb",
  "key3": "ZcxRmyBS4WWFesiMLxhuAu7TyGtEfTnmpNSdFmRGc5pnVy6nAtwTDzHaiLi4vBnVqJ4ApQgt4A9vWQHP8bp1FNU",
  "key4": "4iczTw14GweHZEHyknoaD25Jurv8qt66tsVXnp4NwGx5QD6ED4ePwu8e29ZbeQTLfLTNTnZaVmMx6yjLGMG4uZM9",
  "key5": "3b4EZLiV1AYHBvxpz9ZizpyeKs42UfxqYE1phYv985qACXoK6UWNC8i648FSw892tvoUUaJSRQ7QmGATeYi9qdYX",
  "key6": "5krTAQ226XczTFskEZ62wwZpdVuEjNcBZmg2NBqwCUQKcszZH5QCWZFbdLdgJns9hwgRnxVTPbcWi3VDzkTxfBrJ",
  "key7": "5YK35u1nNv79cYogiDghrBMD2joddfTbYoUYF45s7oQiL5UJnYcrsZxM466HQMCFxSyEJ6VSychD5j14TaT8SDmx",
  "key8": "51cEW1A1B1ABz7kgARc4eRum3UgY7y4gxF2ELWEctTDRVQQUk4DNBG7j9Y5UWGu1z8ig8M81wKDtmJJf9z3XUQGX",
  "key9": "2jp31nHBAughLLsWU44ZTV1zGy1bqijLoYxaGV43FS91K9hyUcaQYSLRuQdqoYD17NYXEGjJuiftZLy56iUP3gap",
  "key10": "3d7oWrhQA9VfpwsucBKpnmbsBne7Wk2RSwjGUAyPzzgs2kduzDsxrnkeDJYZxHHKpeqqCptSSFNS5KVKexoMsrp5",
  "key11": "4osYSgYWVpgQixDPnw4MfHMHeuhDu5enbEQM4LdwZB7MFj3FSuDziGfVQCBKmtEHhcTPcpZMpx3Fv5c2KARE8hGr",
  "key12": "3vhXgziG1BUeTDtAXRBaJyNZh2nDNrDzCBWf3zc1prD3T4R6zMzqtpG6FhRWkCuqzErq7KoSLz9ujnFUsEXoeVHD",
  "key13": "62FREYzr2DSkWoBY2pbEwpLR22PJ4vGgYYGTvLKzUeVN3VM7bLWbQzhhBV1WUpjctFr2eqKoeLLLciSZWNVr2Wff",
  "key14": "5voH2mRt1otdXpkHeS6kb4HbPB2x28jXMNN9rrfdvEWhRTKzAu5bZ3J2PSrTf5qxN5xM2HeknpxyCHsjstRYwehR",
  "key15": "5ycYkUrhmHpzRkT9fPvikZDVexStFvTcmqycWPuu2znvx7iS3kj7SgtYpryEyaXax3QVkGzsM6MGJpgQzmgyK49E",
  "key16": "3emhFWsN3brfnBr9xqsy7spUkSbusE2QPjRkuuGYXqSKhBasvP7viDTdVQ2rRGoHzkydJGN5iiup62YByAtVkjKu",
  "key17": "2tUXtViJipNQFcddF7gTDvEYRw5u24MK2shY25fQWRYgTqWxhzt7EEKS6bLzd6PE7hvsmbU5nFsHtsdEHBjvpFwF",
  "key18": "XGb9hJsWzN6mk6ppKGE7AtKZkMPAJgfxT2vUDs2npw1JEHXoVypTFavpkjXF8icGWEDvhVhJL7HTyDhHDNAL4Az",
  "key19": "5h6BHc6zF2YZFAnsQ4De7rF5xp96aog4n4UkASoh4A2jt1GXNgiaTUmC79mxcsy1ARPEVtnUiS1kJhL739xfiHf4",
  "key20": "3ukar3VCxauwSUmbyFCejznP1FY1xFQ1vJcA2hnEHCUoQ4YePUJA7NWC6fBtDKCSVjReU3DhZThPsWrEyeMHsF5g",
  "key21": "4qyD1CSzgSWFjYo15YWvYu1LAhUkX7exDKYA7gNpYecb2KiZpiii3uZteMa1FzJiLQfo1rWTvB8hZZUzWVWFt9Px",
  "key22": "3mFts4TA85ZDD6keKVdot8VevMnXsKNWBzKsGy6u9dx9arUeJqLP7goicemgcRaZBSdKnXuUbMiR9AAX41vtqMEt",
  "key23": "Xt3H9fPmK32CUXV28FuY7ftUStvnHPizaoAaeqsDt6dbhpBMGNf5KxXFkrfX1hDvDs1aujwmDuznux2Pimo4NT4",
  "key24": "54P5mKFZ4qcBPDSdot76jumeGdnfDuykrKqAkFgQmwysFrafPC5Hq5a4UxiwwxSCYP7jiD7EsfBDL6cSddwU3DXA",
  "key25": "3oBGcctB9Zk9QwTyNAhCapgGRPPUTpydEcAd9SzMi63hdcgAdbzzWiSsma6Baz2PFE8ybXLsGJAZc47E29qBNDkV",
  "key26": "47SmJpD9vfVFA3QvSi41xvzcy1FGAuHiskDpfD4Cytv6jbhZoUmEGfmz8TsmKLMpZeJdA6DV6NmeGcwoBxcVba6j",
  "key27": "n4rdRW87XKmZhPDJznCt5FVdvPPZjnePNT2zywRKWvCvdhNXS4uraQdLqkgMNVaAxK2BVqTNB1z5fQ337jNnZpk",
  "key28": "5xxbU4QDRfoBefo1PaCekwvHX1DZvcEiwCA9hTJf6GWKffm4QVrk4jm4Wv9P9uexKtYt4SnUgzTvzFMKqBqL9Gxn",
  "key29": "3UpCoqeRPK7mZsQowRh4D1EtcGEyQqer3sey2d5Toz3j5z3kypuKwpsD8fC2rpKGUM83NqSFMSkpZBhVpMFQkQwk",
  "key30": "2j5CcWPhRRKAcnCYqGi4etiYe5QCikqhxCjKuEwzzDhC6BPUeqMKiDzSD3vVvBY5eatHJa4pHS6fTQHUpRVy9d6T",
  "key31": "5wF3xhrhbm86BpG1FoyddkKARXz2Cvn3kC2vPmVDpQsLpMbYhL6DzUq3Eb1PrswRWfxqrD43mAj87ijtapivgBPZ",
  "key32": "YVUDuZWEMfN51uqyZ612bHwsuUm8VbsABfsfm2TzESMxEu2XTxzE2o82qR6emdvgaHarbUqrGUWoCLaUvvBDXk1",
  "key33": "32XUuzn7waPJinKZ8kvPRPiHuXP9JYf61i8X8SEvobjE7Xcckaxffs1eGhZ7dpyms3kLXtaMurvcPMw968bYzAqU",
  "key34": "367sNcjY6eJRXyzurdQnDFLnobM5hujuz35rpk1vmFQntttwHUU985xXLQCRPCURXGKiySH33aPnanLHnnZgbrsb",
  "key35": "4UoScHePP8BbwqXvgkeMPkkmAzkoQ1HtxCy1xYo4uK6Ly3o8jo2yLEVbTXMYLi6S1x6BtLiQET8WnzMoaaBtxbdZ",
  "key36": "3xVcw9F87LraRifxNrHx6qQG8siuKnbr8Q6Ua1rUKSMWSUjbCAEQotzXJmMHpxoeiMH9z3UewTyh6Lhc8CRorNtH"
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
