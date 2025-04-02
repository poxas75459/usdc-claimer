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
    "mN4TrMG1cBrJ4YrJpqEqZ21wLGAHbGfAWaPn5ogipL7qw6FuNYgwVBP4biXxs2vbaXybbeAFFPEWwqCKVWY5s2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mJDuTZbrB4Tgo96v6WK8rWkskjXEaG3RHhT24hXAHUAemX6jqfQqCvCUEJzLv1LfiebaXUbcpMSda5HgfySem9w",
  "key1": "4SRfY6kSP7vrTNp37LiV12YZKmv2bDKuWw689JgsrpyAKc2613L6tWcgAc294s1jgEXUSTefxpSKGxXJcN5gRUJS",
  "key2": "5sJCwm5tG5zNR6G98H9i13gPbk4MEzJURbZKNp4iEVQNkc1pXhCfAr1yh9YweV2wjiHryoPaAy89bQRYnfoDASjy",
  "key3": "3TDKaJsVNWdG9qF1BjbJ5966CAk7TBvPdEUywko5dTfa1WkwJFigBYRcrME6q28z83LW9KBSpyN67fpReXVAC5i",
  "key4": "5dgUM2rktTjYkHgoNan4PLJZpxiTSX91vWF7oxgNiN25DtQQumMsKdRjy4uoPceZ6K95dDRf6Kn27TzmUA2C26MH",
  "key5": "2uvmZCzRZTCX2mteRq8dMDVFoL1QnCRrNTRfHChjKSKtHJLEeHBxEkTtpE5Fw6Db1EJxcSExKtrnQ6CsB8waScLc",
  "key6": "3JbCtdra97wWzHnR9aeFKAT2B3HUrFm5FwEXNbGc3DbzfyEFxLgaqPwqjKFsg3VNF3RYUov17PRMpYkBC6ewBWbA",
  "key7": "2sywb7VvEJ9MHFo5LvQMX4C6BnET2bKbHyc35rNQvrs7cJzNmRLwt15mucx1pHeQtEVgqEvJz1CLLHZBQLYzVaPK",
  "key8": "4oH1uRsyrcvRmYtgFfQnpAFRNoqkVBUmBLPhtWr8DwF2LrHJi7DvSPJg3HgnpkD6dUTzSP6HvVbpfEWXVesj4A4g",
  "key9": "5KZnNFMXic4f4BBKEj5SN943QXTU6fLYqCCLNnBfGtJmyr3azjfcTBENmm7ZB3pHySBx73xoqRoHbfxEC8dRo5Qi",
  "key10": "3zWKexWicXxKgi7BAYChaniyTLHvuCNJDQdMmcRBNd9D4m3ScQAdUSN6493Sx6J4F92YvAhRi3823eBytyNXH9ei",
  "key11": "2QAtqRwuLzG7ds1m6smbev6at6Dc1QU8e7xrGa5kHJqmbD2fU4Erdg1xmHCm1mQfQp8F7yAtM2aWB5pF6vaez99R",
  "key12": "4s5AbCcyfyR6F5QP2eAWVPwKD7g3ickmqDvawsVPYHMWe7Jrz9gYMrX1mNuLM5vnMtsQ27Aajvk8HDDfndrBqEXm",
  "key13": "81UxXTLVoQZhyhJLrswGNs1tQa4UEMFKBV4FdYjrSghnibrQU5m4kjpxFyWrHs8FqufTWtg1FftNtqeoHokkP3a",
  "key14": "25p6NFvL4ukSiVrF6gsibqhnQ2hhR4rSAAvjQF57VEaKZ7CANgPaSmgoV3eXVB3R65zxRWeCje3FQ6QpJGHbhgGd",
  "key15": "29pKNYEbwCSKCNitdZa6ni1tt9gmL5XNpoGVMTsG3YoWCfkroeLXVVLDCNH7BvKbg4FTinF6VMAzd5yy1C6MpFA3",
  "key16": "5XUJZPE2VDMKS1cYBkNHsoQF3xiR89B5FruWh3ADVS65ReKwZnpuiCox8FcHJdHT6mJpNoXgxLFBWrYKJk5CHLu8",
  "key17": "38pjgR2RPAodK2931gsahw2w3Qd2UYNrj9FRCPgMYt3pafFqfUHDYwim1FTL6Zc1y7WbXdigC5NMFdZu6TtHY4Mu",
  "key18": "2LFhm9zWQdmoenZ1eTEy83GnmiSUiEzv9BoNdsdD5HcYmz9Bs3oncsnYG8U9mXHL1Uz2p7cUStR5NAsfGUyAjFbD",
  "key19": "4jGyLAtf9Y4dgmH8DiRQypnMbxB7YPRwevYNFRLHWkRVEka87sGsGBPn4ALhxi4x2YkwEHLyP8yM7q59R2u6ZpNT",
  "key20": "4njG6ezSKdBanCShRCvZKC3eKYLxZemLKJNdZQo19oVnxV494CGpkpxvUWuP3HSLCktVzKVCjnbAVxL5WhtMTmXo",
  "key21": "41p2JLLxchYNbZiojwywH4vfreG19RmEJLjGcumtKELJ3pt3G7rpVusPT5UUrALxiTWarrQWkHQmza2hoMexxwNm",
  "key22": "2oYfeyk3NT32hhwMBxYvpLnpHMKXExPTE8MRYpdbdnxsjN6vjLU6cbixWTYxFGGJ3jk5Ct2rnAuEqhmpnRDFz2Pc",
  "key23": "4LE83B54k32A3paQGFiuhZw4Mv4J4CixWzTTxfTvgLmKCnn45hgZkUj3CR2MLpgtXWbc6dqpVSRjNNAoL2FVx3rs",
  "key24": "4S9G2ifERtXQMH4GvQXcsBL5k2S8o5VCLZL7PU8qRgRYDpP2HQgn79V6eKCj4w78yxdqeJmvhHzMGQ7qfzec7E43",
  "key25": "2t8TUwy1LTerJMZWEpAz8gBbveyG8N1UMXEtBYo4FKBVHL7LDBpSkGyiJsfqFvUCj77pRp1c7kADeECibr7ojZvw",
  "key26": "c1BvgwB4x5Rwg4rsdXhzA9wZDjswHWdbDUXHthsxbqrSUJHstgsuUdyEYztADVwKLfjpjSXpttxi3S6NFy9rkNG",
  "key27": "3nr7hBr42ebJSQZgZrJhqNe5KDZMweVz2wW99reY8oEtUChUSsiNbVHdRKCtgCr8ErN3KmGRcQqump75DLEPYXgb",
  "key28": "4xMST4jdgFnFjio624yx3ryQMHGcqfQqA9f9kLVZ4dQ3Xe42sWiymVkTDDnbAYE18PXVathoPKZvekcqEvsr7NQ4",
  "key29": "3tf6NUx7xFtbw56mofXzRvqUX7YZe8APY1VcS893Nc6M6eo9S48F6CJkdHrYv4y7uUQK7ERbX6pbUAtuCZDyiVZG",
  "key30": "5wFshnDmkUCEVhjWQjwYUVYZnC8py1nUwHE9qYjdD7MEvaBkbwB3H8J3F3JDGqBMxJ869NQR86L2zTEbsxkZbrcH",
  "key31": "4pE7EqM2ZYYd3os6vV9yeuWdK6xuskYoLSPN3XjG486VwjAMwtRFw3TwGH8yn9ftjPDzgu4C7V53Fw5Gzwnydfaz",
  "key32": "4eRWEvpLFWkRFKouTXFhPi55rKnwoD7eNTKBJuVuE8Tg24KeFozfBb4RtgQp98mmbFcgz8C7XNDb9tV7gqM1e7re",
  "key33": "3TkNWdJHjQ3f9fpsuC3KzV4BUS3bUbe86t2rtxXokq7jfkdN2FRhfTbEbZBLmbByKo3kTjNaHZHNuisWGqe4kp8m",
  "key34": "36w4dDVz6aCGaWRi6kCwU44Q8aurZm7Hx3RZZg1kw4Tid9r23z4pd8akNZUyR8mgNKLK97M5RVtVNQMYG4UX2sC",
  "key35": "4UuQQmnNDEnkhea9ky7z3YzkqJS7CBJGCqbht5vqN5tob6PRZq5BmRd4fLo7Qir5UtAPBpDBt1Mc6CKV5geYBbgL",
  "key36": "JwBnx7N8xTfSfBMdpQASdZhhmP3pa5yCPvnMLeH1afNpLEKKah9AjkJg9G9oRSDKztHFQP27NtsiCPWyL9ReApZ",
  "key37": "2qcM2sfEJcy6xHPam2cJYqQ9uXLr6dRjk1Hv8hi8Fny7qRWTUhLjYqxApJarFgdrRZS6FFqXB4AAdzdQhYYQDNd5",
  "key38": "t4SdAidFb5tV79QywdJDbuZUL5LqcmWGooJQSnBu3qrLavHzGVmAmRW1zBb4fZmLkQr8NNQJVvkKmPRv2YWEEdu",
  "key39": "Kmz8BK1j7PDvhSs6r1jTz356TjY8hCkHdRRWkhiUn8LkFGFNVTQ4u2mTeMTmmmP9gZsHVSvCj5eu6Zk26K7fihm",
  "key40": "66Mj1mqc3qGNhjjaWTvkGc1sBVu8qDjSFAsy954FcqdRFeMUCY9CJN83oPm4DRoKnRGup9HDqQXosaUZF55apExa",
  "key41": "5UvywNdSVK5b3nDV6JuZbYyRuvGhnmwGAiZG29EpmbikLCCsFYntNZone3C4rmRFLh6uorVd2xfAD4U83T1RbiTj",
  "key42": "2dMk7nVWtyZbGv3fwuU8U9c6Mrf5DKm2u1xYBxQFj61sC5NHMYRrYo7dnf9CxtDRaJMyNRDnycSRXUrpVBByYcua",
  "key43": "5RdZJzE4qU3SQxSZtokHRaW8ZZxqYYE7HyXJ4vs6pDMBiCXAApyuVnsosBuMye33nmx6a67ZyyXHDfN1sLFsUbDk",
  "key44": "ZZV5FE5Dn2sbQ1Jk5X1bCDSaHEVtxy43pC3Zt6AKPpjnsiecyBkEuhaxqza7wKBodLd9SK1cbhw1bB6VERgKADp",
  "key45": "5TbzybNA5jkjeG3mfn6BoRLxDp6zaDWKAP86Lvj5tRtE8ir3aAbrCAAtLoe6n31t2Es71Mh1dSBnph4EdrioBbSw",
  "key46": "TnyspPkM9GYae7PN55Txz9rNpHaLr4E8Ny7LaMuzRzQUdAce8FALyRZb4r4xFeddBzTpjhztQSK2LhR81zammsJ",
  "key47": "25NmLDHkeQ5NCRF3LmWZbP73mKX49rzrvFa1R8EaQYNc11FykTqf6fEtrgHXtY8gTXYhDgcoN4VCzaHuPFxnhKF7",
  "key48": "5A5kVMutiNzXjdftaFK3uDyqanCNDBZvHH2nPuwoSB5FTiZfCBbraacpub6Tao9DBNBdZ8GgcWSSxR5XUesjVo4z",
  "key49": "4ZN18Fskp2G3FMoSRqVW32w1jcg1Qs1YnypPT6Rryr7VPnWgC3bRQ6ja2Yri9xJXYEPcrSxFXWRQnLwk1cmCdRMj"
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
