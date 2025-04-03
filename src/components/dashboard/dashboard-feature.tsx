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
    "5PdBY7bFXTXhh7iYdACR5M9zEe2L7N3dUbCZRLBw6rd4tcdyBGuGspdk7U8hskuVpgKKRLSzy8DZJ4krM8eJLZ4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wkwg5taxjisr4UwDyfb4RKPuGTeEDbcLbGVra8z848AXEFnweTnGyfz3fGtcDYFpKX7qvNwem8C4BfTVJw1AY37",
  "key1": "4W5Hr1oPSc7DppeoR4icLAqp3WdhTJt1AtPASMrhs9ETS2WVyr5qQZbWwv2UEXcRi2kTWBX2oJJovzPUm2Y9iLsX",
  "key2": "2uhQWCXXzAdbisWVKWSVj5eJdHjTuZbxdTt8JWMbjzNnnHDTZWESJHm4MCErUqwjUXokxELZd9R9tsk4iciAgUQK",
  "key3": "37D8wwMPksvH6A7YgCjNc1ZPDHMHz7T1jpcXW6PwNUaNLdTmyHrETuTcJD4AzbWvqg2aVDPLkNekCCHt6hm4bgPG",
  "key4": "2r2bEMYExEsCv5fDkyuVpgGyTkVSyNe4azQyWsjWLvR5mQhPLxp4adkfqCAgWSWNAtzGCLoHK4MxtxAqUjk1TWmQ",
  "key5": "AqrcocZrUNS6cvkZ7fnzkg6ACvbUffw9r3dE7Udj724U5Yh54NgK2h6Eg8jNwe7e9eTQBA2h7uu9c2oTSamvRaV",
  "key6": "5EaGDN4pEqaSWwTsGrESJyJ1mcvSsAoon7JpoEuFAmsXi6Viao7RV3pRtoBqGyY1xvg92jMRsNgBZEbnVDFzFUrE",
  "key7": "4DDJnX7i2ZUcuf1uBCjrkkEkan34QhSBo3vC1jmACcazEj9cVGQHimudDta9rXTcBLfYBW1LHCBMGH394iTD4q5e",
  "key8": "5sdDYjTKfdKx7YEdiJAQE5ZJptY4N7iy1zZFnBKhrgVaQaSLhBF1nTnHe1bEJNaFRLZBfwD8ejBnCQFyYfqqyFnx",
  "key9": "3FZdx1PWEDEtvEMExZvrH3NNKFJ8cFqqrcUA2fBbuV5pSxk7oTQXm499oQezjeZvAuxUX6BGCaHfKCrc6jwTLCCN",
  "key10": "5hXiGbU1WYzp8CkjE839m2xnZ4oFLWLGbVJ8gHBSzUfvRWPBjjeJsvNRFHLofxw4yJ8dsfRN66XXX658CKyDC9c4",
  "key11": "3wBaunFgnJjSqYkB5z4McT1uCRwMwavNpKi2Y6ZbcVkAfvanXEqgd1vRbnLp3sGMn8BvRxZf4HY6LQVZLwr5cCtB",
  "key12": "5jXZZxk4dvfnpn1RnzZG2pX2qBZm7GBW61mrfvJ5QdHytXn4aKFaH6oPLSsd1DNWxSeijkUUgWyGEcSUA42WXUck",
  "key13": "5hUVjSyaPrbmydZ611W1EBDakZ8SEVm2XnU68nUnkVRG6sBogzsr9dHGEP1DbJxdm7DHbbkWy1H4nmPfSBFb8rz6",
  "key14": "4ZwUEJWFUNutTK1EpVKdWERWW9FDtxxZCiTawSLnN1wCYFEcfGdu4wfECja2c314nFV3EDLPVic5cfLcefqZj2fg",
  "key15": "2ibManPavSqjT42aJPjha1HwwATHEDpfAHWE8maoDHbPUfEgruGzmzrpmUj2VdTR262ohuKtffPEDJjpGA4wgMEk",
  "key16": "snxbduR4GTf48y6bfhrZMW5rpUWH1jtutVxJX4szdbR4VG9FBnSBCscJ3jEZqo42ECLNitGUcPypusrPeiskBss",
  "key17": "4sqwLmTKKLcbMyjAvmiDvb7x7ZYzp7MHu5wdpJWKnZGrTL9SMPAbZYUXfKujSA323VyGt2fFQT1dxbLuRtz74bwp",
  "key18": "3kP9Gj8gB3bR2k2hQxyoSqxL6soXynnbcb2VVWK5kvYeig51hoXBwz6eEdgGgZvUCVe6unZhJoCQRnXJCb2aSki",
  "key19": "5kZhj4kFQsGFq48h275PArQWU5WmqgCo4goxJbrwN3jZ6rPKC8Fcy2o91tVtBMuTxkNERGV9vPyo5KSLCtUp5UZR",
  "key20": "m5mkGD5AF5xtsgmjG4anu4BsyXihhBZoZPsPpkUbGeeAUoLBWJguhsTjNHTXQhHCDEikbT9K7whhEH1Kr6qynZD",
  "key21": "2Cne1uP7JM6NewDGk3cwRXLjnaALWbbmYdF4xfACBg8QyypyA9LNjJBiCWvRsWdRLLVStca9kzG3fSFKuXc1UpRc",
  "key22": "2yNHGXALuMpBCi4PLH1gwvHPANzEandGFwMLeMhA41EEG9n4fb14WAoC4zYreVzBWVstRPbTLEDgVy3LJGHCkfNL",
  "key23": "3ea1EMWtk5ZJ51pkjf7YyTkqe4Si6aKaQx7gVsy28iUDVcCeh6kndHESwjiDDVf8jKvK6zrj8omYc3fbeu7gojqK",
  "key24": "3JDJuPSpg7KqnboXthLc3qp8rcSysU8vkLzY3sNa6ug8rshy19i1VgasYP6mbbvg7RKTcM1m3HCDZtsUtFDM5T98",
  "key25": "3BnehKBF5NDYPgsGc5tZaDmWUywnM1iLmfMBCZCeGLQLywagMoCKwj695pkCYCWWAS5kdzDHCtzEphb6tMWhBH4L",
  "key26": "oJRjmJNwUchNkRCHnnx2HvKLqdVDbTi3yaEDPZfs6ZSGYgtGxkjFD5o7j95zeVMDPqiT7BRmBByH9DtVYThJQGh",
  "key27": "4WbKw9GZUnpcCuvSNKS15dGjFs1tMK1ZHMZkbpdGf3QQgPMu9WNMrCWd8ZFx5FeXx1fDCc97L2ReRjSENqdxaXas",
  "key28": "3vkUNvj1HbuWeAx1ZfcQh3Mror8wk27cdjKL8KcQddK5Zv4LdnCtZNyWZAc6uEMSvXFjCqoWduqrr23rp2643JYo",
  "key29": "5XuQ3eT4Uk3UFzk7qPKG2rSbysDrYtrJA6KopfWMc4KpMwmbXW8uWZgNFoCuhYPnn55B16eRPYd7W5Po5aXDPLSk",
  "key30": "2P8pk2fVCfRv4TWhZFqHhG83SYiJpFrGq8jXCFe15H7nVT8Ncze1HSQN63ogxiNpFCyCRZANV3ZPxF4WBjfziSRh",
  "key31": "56SEzXMCdUGJmeQ88urNhMEBKA3JK7RHwdbigZbRe8RkcDKRKFtjunbjvKuQtubcKAV2bxjMq6NwNfT92RqvohwG",
  "key32": "3cJXP9NhvYusyLnVq42RzrVsThsFXvBMMTxBSU77FkYwy5ySuhiE9XMDVfSxEfzo66bU4EzVSbktZtagMFUWTZoH",
  "key33": "KkL7CC7Jfx51xYNh4JqZTK9bXxFmzTGjmgdVYuavoydLjJgK67P4tzx14etuFNsht8VHJoMNGL7uKZLJ9tBb69M",
  "key34": "3PFQuQyBinrbG9bCUozrYXk5Q17TDXPwhRGGBWRTM6kMVb3kfJ9kibmBXcpkJtFAZ9vBA52EX2K7ZCwm9q4hC9yX",
  "key35": "43uUYB5wuuS7WKdhW2QPjVk7wr3QRPeDhiHkwVHFtkQDQ5cYKPDfiLpEgBojC28uLX2qUphSy484m4hJSN77DWvH",
  "key36": "2DbdKEQvHH5WzF742GqqWqHE6hPB8eq4y5dZay7rHmXWwdrYQiheMsh6mdmnnNzJ7EzwxmN5cWzvuFJoEKzBcYqx",
  "key37": "5yHYVTNsd8x97puic55u4uoetgXmSqXXx8fG3cniwY3xziBrsjfpJvrJFVDbupEEaB3qME3vRoor1qC8kcfkgE7i",
  "key38": "5A811Zu9KBxQ5c4LE3tMZ3qz5bFg5pBmGM14W34fv1Ky4YKgjmMyBTL1Y2AGwtfnrpMHKNgrHM6BGB6YjYRJT1TW",
  "key39": "5PWp3M2ZdkKWm3JjVsv4PmMSf2HGULz1JxAuW2ERdgGXdFjpsiZJK9ba39PtM6uMW6UDQzzQTjfpY4zRA4aRbzDb",
  "key40": "HduxPr3SRnGGcueSKkypwCQF7DAkTj3RDy6C2NVUDGjjsjAFs7d2YLJ4xNWK2yvJQDNhszZu7Mpd5bNfSi8D46s",
  "key41": "4SYYpo6TLz5LcUPv7fNHwUzhRQ2eqkq55t8aswcbdHQfzCuyVDbTaYNdrnxrdxC2gu2Nyo1mRS9DkGScsfkvqHSJ",
  "key42": "3jGLQziYiWY9rWPA9yv15eXsXrAAZcuvyWYL78MM9tsdM78AvZBG77hzqWY7XKbQ8MGhdZSDt1TMBATJj3wYZ1eZ",
  "key43": "skNJHYnf3uQpcTp7ikSP6qspAfGrJmGtTcviTbxDSEhXeKbnuhrxkFtRrvNEzFA7biPaca4kHnCqHwPDvFvd9yq"
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
