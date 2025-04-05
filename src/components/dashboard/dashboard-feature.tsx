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
    "4tjKxSL9PaaDLwbAwnhr81jccEQLMicHiREaZ3M9TLjZQVRuDjCWjsvZmquDtqKKWtaG7D1CovwTwVj3HGDQQgQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pKXpM1dKuBTYcktKnoPMeRA3ZkPfmDVyG4NnFBVTG3NFsdPMsEovKxc3gTy8zQVVBBCHr9yvvykpVSMN5cagC2P",
  "key1": "46cnGWtvbbjozjf3yChokWTaGme7s2YdsRJK6nsnkDL68De6PCy5TQMMjHEbgFRTGeSTQfCLJGdxGVrLeDmAiRDx",
  "key2": "51FYbMjFe7kPkcaxAjRPV3GWnHGkjq8wt3tVr9DLLEbWjFj7dKp4XkiYLFfk7TJ4ZZuLeqXmYMHDpJpPkpXaan28",
  "key3": "gLfBxZzNexDgHxRDstTa9eGoFwsPZkiSTVNR3a9EqjPNtgHpvS1ABfGzzsxv82qHkDPZUzg4eXBG9cMM3Qqh29T",
  "key4": "5o8TorkckETwq2dL47umZBYuvquZtZFCNmXVUBd14aE1wKThEukvwRVrSACkvfs182hUoKr31iBNnGAW7EVq5ovX",
  "key5": "4TXkZADdjs3HmFJkzKAyzR6Gw6VrNX3f9i2HDrGQHYovBu3pxSZuDYRN5yrXiB1wjaW1NGysfnHzaYUwyGiT1m59",
  "key6": "4uv4FAB3VmW2hg4PUNXm9AS7q8mZkk4XqWcHsPC1Xny3L2VvQRofGQox3bv2WS2rFUzN8NWBUCmYSQDxrSRTGFPS",
  "key7": "4amwZsobQg2yXvcm39zeZtvVsZeXnf8rKvCsXjijZRbnZ3QkFUU4bxvMGjyD8awQx7mG5SXPGucFjnqfSo4qHHRh",
  "key8": "54fi1W1N3erT9Pv7XMLk2cCQt33RmpTqTqVB76bFpQD6NuCiBavApuLLSHD8jfbhaAYg2axDQ4puhioiXmNgQQk1",
  "key9": "5s6Z24Qhp9ooh63vmqar2KMtoeSpNPZfTxXpQds4QwZyZjdbfmR9FUAgiDZ2Vxs1TCqnDKhZBSNraw3Zto8vt22E",
  "key10": "5STE6EVeRyvg8pFBNeCyw12Uo2WfRoj16kkgLxUyuZG3ohEYY7WBwCjMXYrTCkPPjxk8j14EEbY1oRmtqGRSnMkR",
  "key11": "GybcKYasKtZEtb2FhwqJMHvaNFHSsUkvdEKa2PYsNx1YLvMMe1GRRACHbHBWsxaqA549N3Xga5uyRNTGWAopgbB",
  "key12": "3YjS5sB59Ltyqh2XpAnYeBMhcDXSarSU48LuXSDhPpJG7Ei2tt8uthx3SgCZCTgmfWiZcBgVTJYLE3qHf1YNngGw",
  "key13": "5Ftu8TnSwifVGgM3mCdHiHYyHQ3xyJRJo5uHbLgQDuJv1xRNbszpmGWgG255kLCJ6Ra8YxLc3f7Dy559sZeEfrzd",
  "key14": "2YjrsxSCJdTfP33syM58omjnxYmBmCB2Gz1FWD9qS7SQtskDydwgiUM6NusRrDYjrJtsuX8JFTG3Ask5qmUN8bk3",
  "key15": "ds7FrzTjk3mAVe4jLzUGTuZETgeESFqEKESWXPpxp246d2UGz4jPcVpWmNELTR4SYHz1n5fuQSBdRG8YiSFs2TC",
  "key16": "4JAN6r2riQzLdCubGdnC18eg8ZenB8Pc2ioFoFV1cL9xHUFxzg25pbrDTBJGSjiyd6df6EYfsUCJ2HCpUc332LN3",
  "key17": "22jC3GdhoTDCryfKoc3aBQpk1euMPNmS1vuX6jg2umKS44i9DtBAJqnFAHBefsNZSos3hgztqvGiUj24LngVWeQn",
  "key18": "2baU7ETsFCzLRjcLSqtdEbbGiw25Rt2DLZh1sKSbsJ6K8tM2Yj5Y3Hcfe5v9iCKzvn33nBvkzJ4ReTXaAMGmeFzf",
  "key19": "4s2VX1FK8RcZFxzuLQnnCS7McsmXh6VPu1Usqvdz3VzqKA57bw8uXthV3iEYGyamRSjZbtQ8qA16Gvz8gPKN5CkZ",
  "key20": "4THQ4BMfro9kD8NNq5RQpa1tWGGUbNJnVwKBkifqGt1GnnHuqv4f7uNiRKpgkVPa4Ag26LcQYjunxkmyHySH5em5",
  "key21": "5kEJhkzzv3pJnaCFV53tiZgWhP2DLduyTCC8QjjALWtFGoPNKWhjaxZAXEoWkiCtdNViBFCfrnsZcM4gK7aLknfx",
  "key22": "5oV5Q7ZZkzj1qLLszuPA7GdJfisrbSF5r5TJ5S3sWmD5BcvYuaxeWSKSWAd3Bi2hF7yerPEBouxWSaKStKM8Zo8Q",
  "key23": "DrrpxqJsMJGEQwBpKHftntQvkuQzFkAU6pnU8yXq1ZmaYfD1HQy3KLcvc71yYrk3XyiavucxsytmtPHQjazhUzt",
  "key24": "64ibiz1354rwi65GQQrzxVHwsaD1ifQKoAeTzoP17waiWdbsihLPD2nhoYD7VNpbGJaC14VaUogAQrECPU9P5HTb",
  "key25": "65pwU3bNa8Smb6FnfDnvR5Yk73NT3jPM78CYmJ3RWdhK3RJFkfmB8Ecumu32VoUFwVbyjiCydAe3mP6qarcRSN7d",
  "key26": "3m4WANxdmecjSGcsGNNUshTbucppwQq6udwCFhcz6EFELganZfFRfHAwfXM12vT51GPDrbhCKjrvWRaz5poXsMZK",
  "key27": "3mqfE2XDpoS1dgKC1rm9sqcQnwajQZM1d2A9SPbbKLpBPRsetBZpro2XeePCoD7DEnPELV7mZLG18ZRDqG6y5HLD",
  "key28": "KmGGN7Br2QQ4JEbjTBrBFh9RsECKa6ww1G77idnMM82WohE1xP5Cv8XyNevVdxnbWPU4THNViy2pS8Tr2HVauPM",
  "key29": "2VVGiKX516fLHnh6DD7w98zjYhmjoYZNtUwqtnmRKGAyMi1U7v9qx4jLbWrt1E757TRvXekBSp8qvbVNs3osrFeP",
  "key30": "2WwuuDMTzpnaMvv739JqCxVMmiJRbtcvYdTdYAQBMp2rgKwFemetRa1CFwFazswVQrPEQmpKygSYeUiMxRkxEJFK",
  "key31": "3A6ej6ZMrdmxevtxFQ2Br6zFdX4aWmRVYLjuE7YoJ8a1iNseVZxDE4aoxZ1dayK6G7VnCT3seGYSZ6dtaNJEBYvQ",
  "key32": "3ziTDz9yNxpgSaA5maA2J6Trrn5Ms6dB3TqQkAUzn2qoyvmGEoHj7nXnrQPfRZFzMwoY1GMTq4cz2tx6TDWBUwFK",
  "key33": "tWdBf87GSCkfSkLuYrQWzkv69NtTcSzDHX9i4s4wfWF7P2vaN1utvFAZQnwv61qDjQzKAbWTYVdcZD4TwUtBaoK",
  "key34": "3HMi4wMm8tLm99VWwpq2gvGMnJPRp5arD1bvgaghNML5M3GTAZ7PKF69nk7ppWCyK21E1nuxJy4PHg5vJ1N2Yye9",
  "key35": "3Sg9C2W5AWxzDwUvcoefHWyZppPXqqBmCLRCtsE6TCBYKmkbY4ZChCZJ1A8JS1ZqkRcwZDuDF48hNdW7X6c9Kg6j",
  "key36": "JGHNrAUgz58UpTmduF1YvmadN75oVjgEz1HZk7Gs2ArYixUms3JPAnzsuR3mgGKc6nyWZxTzAGtooNzWjuGrSX7",
  "key37": "62o1a2JyLS1tafWDcxTGVtXG2c9SgBm5Lr7jA6D43YgvTVJqFA2mqegQk2MUbDgj8Ug8VBRBEb9LtD1Ng8LjRhta",
  "key38": "37ZjftBa1Md2LeBFPyd1UJ1mByBdJDfEeDAtAwPs5tXx5mMNXy6pdxrZqytL7hrm4HuwFVVQ41Fv5XctzJbuom3c",
  "key39": "JSi2pg4h8Rw1Z3GDnGSB4vgT5TLvu1Yu7rCKLocHjGwNu2DKnqj4gsM8qP26eYtDzr7akRHR95KRukZdwRFyNCs",
  "key40": "5GVsbVxyCpKCNwaeyvGnku8DE9VAHyiy6jR42rAoMW8iCrdvfhKNyBoNK1gFewSPNMj9D4eDf6GfMbBe6aSWeSaY",
  "key41": "4zyBmDxhqevJZpFtnd6KgnqkPpZy2Bok2UmenhT5xucYBbzQVFpBYra2wA5S6tbVfhic3iSMedMcriSDXmwqq3b6",
  "key42": "58mdhKBr68rn8kES8WGEo5uWccvjt4ewHQPoa7QfTpcQJ7DV2cuDLi3BvLmdA3CknpVLpZGDKjpX1dzSsX3yU5ML",
  "key43": "2L94n7qoXxsLAyS8Vof43GonmQCoRiFUuDXHnRoLwbhHy9sETmNgosSYE26Tba2Zaq81BNxRVKzDnTFx1KUvtz8d",
  "key44": "424cTUKCBUeiYsB9KYLSZ1fKGXtu2Jfzwhpagd6mkvJQKmaYHsZvDyp8icHbgweKevdkRnhhXu8NNxUYfDFx4cSe"
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
