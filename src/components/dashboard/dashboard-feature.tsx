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
    "Cs5utLwcgVhAbHnnUZaKa5Yw2D5xdG1qCXRQVxY5EsR75PcGBezxstmGQSkoY1kZXXTBdp187xJHVe22QwZRTUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21x8QUQnACdUvnYNctj6JmFKrkZ4T4EChCt8NsHhT8hFjRp7e15EhUNC8K4Xq2JtsUAskYo5kUSpuCTRixVCi4jU",
  "key1": "5qubr6Qf9t9ae1w4nwab3mST1XcABxETPCTKUTT6xN4dBQxVWRTy7DtNW3heveXCqL42bDCYF3RcfnddbNBHqKdW",
  "key2": "bVSx8K9MMy5FZSZeYYDqFhknZSnPz1VjWMBnqzJYLesXZKT3EBDrL43JmfvLYxrCibMWJmAAnAAoM2jXrWp214r",
  "key3": "Yc2dVY1Hee3dtPFgP9XFwrxiJSPcdeLniJfnKpTQd3CpYXGnAh1wWgP78WBiKgkrtc4ahYJhijj2msCSPW7iqFK",
  "key4": "3a1B8jnjMrFyRHZPFukgn4kWhuSTpFZ9YkuNjgmKj4sV2Rr5tNxWa8DxSazy19H2GeqL6TZABBGHsjstBKkFGYbD",
  "key5": "4u1ad5KLSUSpfu82bdvd3KmfbUUo5PHpreXRPGaw2fWHdd4DYMhPKmKYNUYygsdCbTThpaz5BP5mwcMMuqdU61eA",
  "key6": "33r7qnnYxjjJdqUgtjkW3RGmYvZieWZ9eJvqiY61vTJrjprJStKiSicpCorhNyt9cv94khdQ2o5TtLDHn2L4Stbi",
  "key7": "5qztBwLy7xySdJRB7qHjKAJdp3rqJvTR22ZKBK1DQv98yADq9G4x1dhLLczp9r1CnCui3VD7sDscmk62CMy2TjfE",
  "key8": "z9ZvCpgjiaRLahyaAHZv1L2yxvpPmqSbmd5GcGhg7pcgJMHYHnNwXjBEdRhhRbaUS3bejLQPHuUNNgBc7zz5PMR",
  "key9": "9GngB4YQoAbZdLwFBWX8JEe9hUabhFpeKi1AQT122Ei8q5zdPrYZ8eVxw6QqmKmCz4aGjDqzeC3Jxj7hsx1ufFZ",
  "key10": "2XZvbnwkSMDeNw3b5qfsjLeUtbwUgbMKpoWr1S68uXD8F5LGBn3G1d5ySXkx63jkxG4VpKY4V5QGrGHLurm8syBA",
  "key11": "3W7ecBFyxirSXYC5N5mx4SHw7j2yhY5aRBpF4vBob879PCABkzFonJajcLmQ72km5GGarMKB9VD683EEHHJfYdSS",
  "key12": "2SsdRY15qsZdm8hiZNA1oVyVHGXJAK6tzShZ8xFDdwSAdfTGFixYpiM1NmMHaHS8AmJToEdfxQ616RLtApumXkLr",
  "key13": "5B1cMQkQyiCFkRssCVpH3Ks6iT6U1s9xyfDPECAndmLyY5aaVJqisGJLkmETsrtDCdJVDJEc2AwZbAepfyuhhdb1",
  "key14": "5jBJN8oCksLC7LLgrF3PBSjtEK4cbqyEVsQ6Gfy5ZpTbaEBFdJGJZSad512ruETWpSDQuzTJ7XbgPoy6FRqsRvQ7",
  "key15": "41LnqeJhagBcdmH8Zicri41KC8yCxBGkRVVRyASLNeM243sQUUSWHnS1EZonk7de9DjDFWZn379Byzm75ZzrkSYe",
  "key16": "4JfG2Btm2jWWMPW2Tt37yjaWVqoihwE59cYjsH4DLokeqHThAh2vNk6GgXrz3dfSCbrGWn32QfbAJaYiLaFwAsHS",
  "key17": "4HnTmapFUdBp5eE94FW6fvzz5UMzhhtj6sjuwDS4dMpe27aK3Jiy6VfcV19mPhAsq4JEQetFiBMfAFPk1KXQhUtF",
  "key18": "WMKMZRC69uMSEqFRzyTa1L2QuU6wfAfnxpEdWLu79uZEWd9VqFQRqCTTPbU3gpNtLtK3MScTXJJrMSpravXpVY6",
  "key19": "3SfNzgHJkcfdyfdnRuba2HApuAX7DHEssrTixF2LR762Lq6SSFfoDXB7mpvtSxjiv4HrXjT7EXKhQ2AFMGSFpGTg",
  "key20": "5GXQ7KpyuawDdKDGyVv1hFgGij5gXxzVP85DuBPkfmzY6nHWxora51QUyu6t6xWKv5s9GJGmXpoV8HWLtjxKWtXW",
  "key21": "3vbSzUMK6Eckgq7ijFqq3w6uFzMDpw5WvKNRXikT8344QHSt7A19RiowDN9V7ohCedBmzJBh2YTcqxLJqeSBpTZ7",
  "key22": "46ZK3yJqaX6UXc2kHnUMHrsaBM54dcYgkpbwfQDEJ6BzZ97UfBxn6epr4qKSpjbR3xEt3zeApsXy3qBoP73aXhxV",
  "key23": "64d3ADH2npnhku3v3EHwNBURJAAd1bkcKFrdQ9ZN86kUcj65Hz7ZgFTPC7nBGTLdBY5uDkzyWkd9Eb3BzYfc9Gjo",
  "key24": "4fM9pWu9ZW9oaKPdPEq4qCepDoerQu5Zid9qh5viyQq9RMrPVR6vfqLCQxFXWShd7LsEe5TDWBAfJq1gbqv3fZ2A",
  "key25": "42AURtyUKiDuioacPeC95fW6SGxWax8Ld86QbT47qqxeoU6qD7RmdxR2QwyR5ozzD84AY1EhgjNx5UMGzS5fP8ZE",
  "key26": "3DhMhP88qNKmeioY9vh4a24LNx63EWZWD1exMFXKgoJUpQDfFkkNaFTHbTcctpgZMzB2sYoK9t1dY74aUL1Mmufr",
  "key27": "4ZTo94fKQUTNUxcsYmGSTybaCdC8H7stz6m9UBmBsWcKxcStFhSATB8mwxpaKprE9TLrwjJLrs6FhZb3VNxZgg73",
  "key28": "4ca2gqjNZitayBQWvnViZdJzxqGVGRL7uX4W4M6G5ED415TnYGb5ZedpT1YfqLhh8Mv6of4F3G47JQBynZ2bQ6fk",
  "key29": "26FPnwRF8ntcjQ2iMBJFawi39FrPaKiTaoMZiB1wHkBDhj49t4RStSNVfvqQxDwcFmMbvHvtnD4uTA4DRM7H4uDL",
  "key30": "3KE12rePRsSYfBL2eJdKEGPsbAD8xoZcdQsxFn93DcdTqiSVSvE79erpMKihvickA8g4cZnugT5aPocPwXz3ctXE",
  "key31": "3j8waynk6AfqNSd2WXuDzwPRSdb8YU1G9xqS25syBkFWbRQdSvTwFJ9eNFUez5KkZskJFxPLLRpnivKQeFYa8YrA",
  "key32": "Q5NnBMssFQLiJ7S7zQsidgMmR4EYDJ48Hsdps6BU6VzT6exZtbJJ9iwPyrEJqXziTMqtRvqNBYXVpMLWZxnxX7R",
  "key33": "41cCbuXrcNuDgC7nyMKYjtdCXVaFidkDEvix3JKDGAfaQ4skzkvwLoiz5sx6Vqrm7oh4YQwDVc5gmohfVbabqgpR",
  "key34": "3FsXhXgs81u2iRcYTNud6oGXkQTJhY9tnhX5vYZuhdrRT2smdr4XyPg1Z2Hcn3Wwq8Q13bqrRTiDzTjEPLsYcHwj",
  "key35": "5CKZSvEbUqCg9PLbu5uhjEkjL9kXeyZRBvmWxxJaebnFCaSuzJ7dM7eSf3cT36DAXhvTGb6TD9bXdbTqum66bBZx",
  "key36": "4WTxsyuhbSTMSbdBNTfNK1Lbj7GphsHDkZ5ajtSg9qAfapKCUsJoektQMLpqrLcUTBdnSoJjQBBEhSPGTysy5iZ9",
  "key37": "9S9LkAB2aLQvTPVkmfPdgjPHy8mr3Ju4q3qoaupwxL5MMSSbNuh93CU4cLE41JqLZYQyJUWEuruLPek8HTog3Lf",
  "key38": "3h7Ad8Xo5CJQQzg6qKoAkjnYwGiu5v6RkaiHNehPmdRbMhe6veSnRUwwstz2CV3xe17y1p49H2vQdvYiRHsDD672",
  "key39": "3emEHfCSABidgf4UsuLHnxEwQDxtoh74JjMTdRcoFArPN3PpJwbR8d3V595iST5W7DxRhKrJ3Z21MzKsRSbfH16y",
  "key40": "33qyAjKqnKX2E9S42DUJfdoXHLv553nAugeFphLqq51R3QA2sodUMc11L4Ei9NeDVG8voGxRdaCfbTXa87hsJbLj",
  "key41": "4JxhtvEuWvKR9Hmqfm7KrVhcXYLN2WDyQ8DK1mK9DtDXRUcPz6mo6y9eCWakvXyzGxR733k7wUctz2Ejq9JaFqBx",
  "key42": "4Mv4M633gLPdtTmCoEK2ZsRtWWfqser7cAXfSJmw1cD6b8o8bj4jJj6CJ2VCuDBydV7a85Dpa6oaic26XW62Hh7g"
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
