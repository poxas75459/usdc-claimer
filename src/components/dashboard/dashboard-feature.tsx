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
    "5VBpGdceCNkX1i73SoYYnv2QQiJ5fc4bgNi1mJrz9ezUSSbYypEXdukaEX4d7MzX6hEHVgC5q4YYYEC2XYwDqjEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FA1mQ8wqwbUQxj6jdmPSjDj2SZNcPUJmJkZHw7KjEAuv8ZMy9XydjTGm8zR8wXu1TnFDymjzsiJA18twsWyaKTo",
  "key1": "RWR9MkbhNSciGFJit23qrL5k2bmHa4NHXA5SrdiVBHVYLjRZsJP2En9sSorA6sunqZWvnqPMH3Qq6FQxYgv7drQ",
  "key2": "4oAhL7QbPeyF3FoNt7aPwf82qLt6peRqHEYYYHfVrXsZBcViHyJJHLkCVSM85V1w7iyw749qz7ErvamgUZiXxoe4",
  "key3": "4v1gE6NAjn2wLXRT83xmF3GdF9jTEfkQMB5LxLkSSiJuT1RY4vPymJuUNFYQU9QtgneikerThtwYD1FDyVmExpYd",
  "key4": "2B8SRcVaJqZo8DbFqjasabpXoBK4bQ7pxDXQAPunQza7Y6GiBoypNmpAqPp99E3jyeBp6peeBU9SS2vH5Y3tRmy6",
  "key5": "gfzNDXiUNo3ohNHnxJRkToinM2GY4BMtsHXx3FYw1HVWNcN4bbhgKwZoSBFNkaJFCf61uxwhjT9hVRm7pjf9Gm3",
  "key6": "2YpSqzMeKRnjPWnHhfE5NphJfMrnuzjv5pA7LxtJ78nTdmUch7TjQtKVBcrzfSE7V2x7ABngwANmJ7CWJCkMrhAa",
  "key7": "21FSc9hr6Sc5W5gJWqjRat7USk8L3wpyggr6viVqR91mfTPiayJSKXbLGxmZdFTgwqeigpuCByNsE7R4oaHVia6i",
  "key8": "5c1Uwq1x1VP1wasowAVpCAG9MwFckPa8DzvducVFbdHu3EvKULDZ5vgsvQCy3CxJRuykyxdTd8SttYJF584Zsvfv",
  "key9": "526WxEwQq1oKJMe1rMZmS5bzwkzi1JhhcDGwb5xmwgbJvuwPqYp9FJkE1GbtCvkTjCvK8BmhnWKQKAyDLGRM1LiV",
  "key10": "2SMdP2DLCrvVMM7yh4Cbdx68G6T4ot3qTjUz5JsfCYJXCKrDtp5tY15h1BJhKrLgmERSximJVo5Zm9QWfcukRHih",
  "key11": "5zdDf82VhLaTYCNoP7xWZEMzL6C1jByG4bjSiuVtN1rZ7AmHTEJzPCVzZ9bkoyLPyXgcukg4bG8i7aGakEqs6Gq",
  "key12": "4pDp8mj9MzWx3EgEcGpFhaUJMNx6hdWPGWhmnAYWyCFtPskCrVZwAer7i3n69zkZYJ4Reow3Tv6mEPsQbULUg8Cg",
  "key13": "YnkL4jJ2f4yVNn5uZkrgrLqeLhGrTdZBpu4mUPVCjWkEKYxh9io2R3GukiLYG8utRnCYgkjvpxaH1CvXTJeAaVF",
  "key14": "3Z5ZVLGYUJjLkQ3RWwLhY6Dn5qEn6bGiaoyzA6jUtnyt57FRSQAUAfR1SGHfQZech7Hy1o5LbbiFENoDQ151K83S",
  "key15": "TSuh928w7fzDrXr6AWqJArPCg5M6c2oJdqfvaJYcTXGfNFqHNvjsuSc9Gfh3ahspcxz3Ji3ABkQyMJEcFAm8EJB",
  "key16": "5xKUmMbiA6E9oqivboHgo7cZBtf98JhfyYgXmrdTnZ1cyfNaP5CCWBykHXy5a4BJhNoxxNCiWQ5211xGo7vx3Ah5",
  "key17": "5PzEXoQqPhL5EpoWKxYfMPzQu7EjfK7L91pkLR2J3PDEwZUFzKdNK5SkVi6Tan9sB7KuApbfYeXPyfTo8tzWix6D",
  "key18": "66VMvx2Kcfi95SqLCJgi9SAy5TydhcZcvXmFofJegyi1SSYWtX3ypqjJNWdzf6Cqz4i96wdoLRkx1wARLUNqkEk3",
  "key19": "3wbNCZKGq5SyYY9hcBQpbKudjQ1pDYN68SevTbPcUWtmwG11RGdSWuVmTxYYfPryDXCWb3ixZmwodzBqNzdtt7Y9",
  "key20": "2iRnk9AwRMT5UMdosarRtN2kLjSNTg5HFpLDpRjr5Dsj4285hkcnzDqUwG8dxaPfDJGL1BvoZnjwha8pVFPgsgrr",
  "key21": "5Rcn1zCQrytcgugJNabjzjFLh6WJDP2wDKtw7naGta3CQTpYFM9JxnQoDQ25sM5bAj7jbzFPLbRhKyEoUiqu8eZ9",
  "key22": "3dTWHggrvH4m5yzRuVxCXtudX3rCqHmAW5NxrC8BpryeQpfdBvZzHwHqKybbJmy6Mb3s946M2P3RPH1z6gGch8Xp",
  "key23": "V5gaG7cq5tM5qvGZJ11Uk7nCeyem11h8qWMaGXFN37v4TTH2GPDfk1XJX8VrAYLbXJpfbbWaXRYkKrJRmQZVerK",
  "key24": "4b4x7rCMjoH8jop3w3XFrp3ebnjSNy2foBKU5nVXVzZdvt5knEBZLBd47LFCWx2UpJLis8wH227rfZ52Jwofvqy1",
  "key25": "guKK3s7i8HKNZTxDSf6Va6kVCKzCFYbN3Gbcn9aM7duXj9p6mHqy5jZLZMfXJyjaZePCbvWsS5k26UQGnt7d6uF",
  "key26": "RH2vB9xQcwCUi3h5kkjr3Vyuv7E9p8b8rcAmhuxX45Mu6aCG7JxJn6C1X2zpow4ghAjDGFpjm6U4sojRbvvHwKF",
  "key27": "3oZXarh94SKBgc53VZcqJ8onEEh3hnUEnLXqPTUvTzXdjwpuCrgpuKgWqhwxdjJYmS34E3nbtSweo1NQe7VP1SK3",
  "key28": "4WVuzcCnmxSaK9GSa5juyvLJhWR3dR7mBWNeDufGTvFoAvp1qpnU3TMjKCifbTDP5NWDzco4733WTQnw42nntv17",
  "key29": "K34hTWR6Dz2TRzypd1w5GbFBBzfACAiKrN4CovGcaShWkJs85n6FKyKErCR7AtkHqMa8E4pdLUD8sG1ifb1wkZ2",
  "key30": "4EzFUaFhSgF6FDaAgKXTLg2RjSJa2wMK93H3Lv2C3CPu9fr9yPTcf5XLw3JWYRfKcAJS4a8W88z4qLXxfdP9DaAS",
  "key31": "3kx1KfXjdh7ryjf77KcAE5tdHtZvKKpYRCRN85pVxSXJRFRXwA16XyFRMu3HNvEVYT2bQk8pqP4BxMkrEoPgd9ao",
  "key32": "3gxpWnAEAdgGDSyTS76L4mtwRTekTKYGnB7fHRhuLtYGm3Sg7VPh8yX4cLJAcr3n6cyNDymyNFwvMupeheSJ5YS6",
  "key33": "4RqL8NK2uYXEJkowniTGmV3qmHCSeePJbS5W2ZW6Be7wnS1Tq55xNMB6JfuYLKDMxE5cBC4W1kmbW6Lbh7UL85a8",
  "key34": "5wfSqWjmunZUbeDRtAGFLFPQWavRzR3TLDpmdy91iNvG16mfUpVV7SaWq4xSoVpPyPyy7GgJyX3AEDzL6wWZ9J3c",
  "key35": "5Go69tPQJnCLAJ2zNDH3o1w2gJaobKmLeBG2Z2btbztix9o14RU25zwgVNypCwypuaSSUXdehrKMWfFdB4Ns41L3",
  "key36": "291GUupK9N1opZUTmGdFEh4fnkzVcN73Z8xScMtxTqHBpV3C8Xm3DLBegmzihZMMz39ZMxjaWowPhGmtEvLrcGCR",
  "key37": "2yPDibe55FmCbMbW9rXxduq6NpeGCCMRydpjW8RRHfkPcrfucES45dbmoW1NtWsMRHNiPRm3GkUinuirRP34Er6Y",
  "key38": "2MrzpucBTW3ZzvucwixEwSy3itvN4oPWmi3pxB37wSRFsJmALT81y1CdASEofAGRGhWgaXvBvQB7b7QaK9bAL9Qh",
  "key39": "PkMp5wsk62pqNuskqpDvgrCgkuyXJZKEu26QQx1kxCDDDbTkFB3PQ7jeZx3LFe5XuLomFjhNwCsw1WcAPYhKM4Z",
  "key40": "2rDRNBo94rcsDd4JyGpiaNGpdaaaikemS5SHdtMH5Nu7DYtUAMUPDuykZbu8wXM4GNrSf71CKVsYPMfyQDvBKpFk",
  "key41": "QBXF1rjHTW1jLx2s8dj6hBEiC2fbtTAQpkYF6CjkbWuUKT47ytG8pxr1QeXowQECmxhQKwUB24Bvh5EfVVYbJze",
  "key42": "3a4CCc8BGjYRxcLUp21BigMaBQ23aoZbRhSznezrVFvhotdYijMfbcC9Bqc8jJXpEjZZkBcCxL3My7dqx15Q5pvU",
  "key43": "3U8Q6scCXntJ5HRViv6rqJJWXrvxyN937PGJekRUN7uJguZrXCUmrrFkxxoYheEoYngSXpRU4sovwNuui9T5q2js"
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
