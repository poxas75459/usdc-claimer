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
    "5chjX97aFxnU8nAiB5DGBN3QXT98g2aRm5eeY1AihPtbnPZTMdunHGQ2Q1GCyEJi2R1xYujj37c3k24B6UQeQKMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JaNzpE1XjD7mbF3zirypGLA3m9ugdt4SvvMymWF44jWypU6eqqc3XJMZyrpeEmKzvgoFhocgRY2W2LaXrnmReCm",
  "key1": "5ZRPp7amD59Svv8T32kGLFPK5LGixrbkAkYgkQ2WDFh1oA3JUj83GbsKVoRbXv4RqaNWZisYNGi2FBEi62eBc7ak",
  "key2": "3CkYzeBDqq3qCSXADazHVGUty3nsMdoBWbX46ywnt4TKqeobDLsKrTXgZMCJGRGkhDtM8MmtXph7MEMv7NRbiVf4",
  "key3": "3ij15ACtcXiMqcopmwBx7beHh9g9RBgmQQKndTqWD3C6w4SWBLji5oScdjHH99wEFMmCXv4XTWLmLnAmvdGdyfDp",
  "key4": "hZ6Dh3oCyJyisKKHPWLznHA9yTdquDtDBbjDJaguMtj24BTv3Kkx713b8yX1CgRcxyb2G3Bn7poBoDuQYPxGbS3",
  "key5": "4uynfweLf2M1pfGKDiJY87xYT6iLx7SXFzN1XKeDJaybCgEDKHL5yC9pG3yZqZ6y7SaNk1WynxsBXDy8gdcUchNJ",
  "key6": "56j6Wg36ZpCbQ9xE4mvfUT8bu6vXDcuUVz2onawqBfKXgSUmKMUXE9K1oQDjXzMSLGoGe168gr1iFgWXqibh51QU",
  "key7": "36Tyk5W6QWZTBn2iVye4FtyeUsvzCT67kLPJBJ6vRw8MzsAyeKvuBAuUxs6zXZjUiTi5mNU8NWKvMF13f3zyB68",
  "key8": "2L6AccfP737X1UGsmwpiSmLy1yLqDQJEvJC7TqQwKmcGZKGoQQevoyPTSZpH3GxExY2j3Fc2SBPC5APmPmUrWe5C",
  "key9": "3os2U4hbq8gcjgb86fp7syVJkgc4ScG3c9YidTKPvBv3HE86ihp8RHigBVpRdGnUH9ZgqfAQ3EpRHqssTE4biJWo",
  "key10": "2bd7kjveazwhAn25uHCbJtvcwEB8FA8E9rBMp5gzf6Hmk1bCVTcxYZZMLEX1Hx49DXxq3Z12BhgWDqW89QHjjS6Z",
  "key11": "3J5VWUwGDLScsvmgrRDwxQJhjM3bejefWVYqbwKiKokwLw1FoRhU8DoybFwDmaVP9xGMZpTnZUkpZCYkfpSjhXKa",
  "key12": "5ULLtyFc1N5zmKGhgkc6hfmyDT6mE37QnrASZhZLu4WfBehPDBK7tvpXp6gMa1MYuSotDBjgeSfVuvmmsXrcHzuE",
  "key13": "jjgZvxsu7unCRTNPw13t7XxYgm5urhJrnxWTyHu6qwHfgNQK3jo1Ktp7jYKz4hUjRCMoiMANYTLAGhxJa19kHEG",
  "key14": "2WHSjmyeEja98vUiQzVWVcefQT8Zxn9u7S1niCXGDT4JDzXFfuYAKxJudDmG8Ttyc7xoRjSnBbFGUZjbB13dykAJ",
  "key15": "4yyB9xH7cywrk9RZwzG3BdmuY7ezMTay6CQbNzMebkWBRkZwcyV1kqwMbparBE4B2U6yoaCSnpA7KvDbb9SfGL1d",
  "key16": "NeEi4tCrqvzVBfTzS7yHiHDBFUqF1uTyPZLTYgEPmZaHBYgsAVpn2FDDNkPC1AHt2xB2hFXhU4v3oBt1rYw2Aw2",
  "key17": "9HAwmVmx2NKtpCmc6HX6qcTbqE1jc7f9QfFjuskZTdjnsALx5TTC89nitiFPbd7PYV7NKBpWBJmzAMLyiNSDFUF",
  "key18": "2fLbgsFHAadxRNCnXN5Qdykwa5FeCqnAChpa3hPgPa5918GsC1UYjHa31Jy3RCu329hEqAdCVnfoPJvvb2KgHB4F",
  "key19": "65Wi1Dp2B5Whrg3CjHhCgNPVi3n8PmXALsBkVScVXKGspUN91UeE2MFrCvZFp7YKLBk6Zo9pZwtnb5LhPjEx6MTn",
  "key20": "PR6jjMWZstYA9q32UXjpv9rD3Ci5eDqRSuNXdBs7ycToU41E2fTkkmegE2KehrSEyzCreGUWHBKQdGmEfawyvkf",
  "key21": "4bhzjGgVKMynNuen2oH2wX44oJKrnKJTJiA3o6YfQKnbKErFpTatPQvo5doL4NyBiQ1Zstks4i8z2sqmfpCSs3pK",
  "key22": "5qmwXjjT1B7h1kD7ZoNXdJ9tL3j9NdBk9zEZSN16xsSuVKUGAhkcrLCd6X7j5MM2W4avM6q5ZS5c4gmo7fuspJAv",
  "key23": "UvxYEduECn3vYSgBCBAK6rsriuGbQcvB8v4U1LKSe6Yf4g2NFvFRSMT5WLcFxyLtJAL3iHNT24xTvEWsgTUSZyj",
  "key24": "2gN3vgeTJ1GRotJQy1S57QrdoLofvqPMwiZ2RqTwwiWm8QoY9T8oz8wLPSeazgNPY9pj11GKntRRSKVFekE9Kse4",
  "key25": "2PGYjCtqSNQCruGPHyeGQ217wwYYVbjPDVqXjCeyG6DxrChwb88M12MJiZK2UTqZboRtQTnAwaaxMCcHfeZkNfaP",
  "key26": "5m2aPBpp96WoPPpBmE6V6tJo5PV2TKayM4AEx7Vf63GkTM33g8KL34cN3jsB2jwSitnZKHPFHvaPQ1Ze6pnZ61yg",
  "key27": "3fAQMVUSQpAGuhLVk5oXxKa5HSMXjJtJkhoyBfwp6ihrtMaiQ63Y3SMpX8Dr99grEkJNokFgB41mBEbDRsqWwju6",
  "key28": "5rnkTFGrULhJAkhihjVGfpsqYm9jC5wStKhkVFbMaSenmmrMW3jNsfLg9rFffLdB23uFnDdNN5QT4s4iFfjyMxoc",
  "key29": "4Ah1LmNjQ1W5ERC5gkJDsNpTMVnfdKkkwc1J4xrU8yKfx5PU6q7gzLmiQCkCuUBfQfGyZLEMJuhNPxhjb6C7GzXZ",
  "key30": "4ndy38tPaLTS8vnP7kE62o5Qz6kd7K9wbTL6rnj9fapFpZxQqVr931crWmJMd5ADoAEK5AW9YXWwvmoxE139bEz7",
  "key31": "26fA5WJjG93VLWJheh2BS1NsKn8Xr5gPFtvhizS8ruezD5NVMjeBHUzAos6gJw8aCGnjtTcSxenaakPMvAN8Z2nc",
  "key32": "NwN94gQ48m1AUYeKXNLmGCkRjDcZTBBXStvsodPgDqC3roPaewp59bQH94TK9YwRvJPPy8PtEBdMco6cFP5MXM6",
  "key33": "41PH5o2Sjcp1gGsnPC3W6vhuszJhbtEheyHseXAi2jNH78frdvmmXvuYCzZeVgRXGRxdxwBErPciHemBBY9Zeyb9",
  "key34": "5F2yKq8ZNFiRoyek5wSTxAtVDfKvvx9mAULVA5ZuUyNNiVVsGJPsWWEE9JyDT6GMcaNtg1SjXjUKeVXbcKPQFTKo",
  "key35": "4VsjBufyJiYSqa1ezFU5t29YQzUbtqJoePNDNL4iyFMpiuYHdScs8XMmB5tpxVB6BWc43vQ9Xm8Np8TQ7MwApvQx",
  "key36": "2Tbe4cAP45cvPqiykFmc6UFWykgrBEsbtLSf3jjEdghGNVJYegV94sxkt71U34g1KW7SV4c5WTneF6zP1wmrp8Li",
  "key37": "4em2zQ7tJa7Di9AqBeMPJQcQD2nyiEzrhN5A3azEm3jerk6tfni8o2C9KbK4eJ1aCSbTsFrgCYs4in7UGTZkYZzM",
  "key38": "51ZzhL6SiEL63W6AAjuMPVAnZqXmAyE7Sq3xkwLTSmipt4kLmMZXTtms1HNV6N2wR3WUMyYXXoiaMkihKzKhTjXU",
  "key39": "26v2XAczvvLWV5pYC9j97wWbDtYszyqsauzR6EWbQdiArPKbhYWo3kHRQwRDfdH8A68Ch1Sgy7uFAyvjWB23vxwA",
  "key40": "5KUchJqi5ezDmd7SkswErv2fmdFQ6rsZib29YBsEZYQ4cfqN2G68W686to9UvZ31dqV7izuPBXxRnnpdw2Mzyixe",
  "key41": "5ixYfmBmzsRCE6fjPMLgHH3Rkfo9Fwgvu8hi2d4SbxgqXiciPff1Xu51FPJ43TSYKe7ypwmLhf2xZ76sGygn1mFo",
  "key42": "MMetLod7TZUjrqvnsDf9KJ6Y9D9quPX3GBtGuGCuz18BD1YexQ8X41cn28Dyq2fUMqq3oqHixBLdCZvSMgbQKUv",
  "key43": "3ZcjXWKpuXURNDEZdgDkBwnzPTRBxHZYZJTWM4vheYRUXPH2eoJuMWwTWez95vFT8KA5hbwKaq3d8zxVpoFGyFqQ"
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
