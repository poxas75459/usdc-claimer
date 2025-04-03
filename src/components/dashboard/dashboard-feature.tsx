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
    "4eGjKE34pCzo3nj4nwfAwjDpGe3JkHdTSYvwZAQZPC2oXFW7idxpRjveHnuZQRVCyUxM8Pfwi4u6vzttBzeW4PzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UfhdHiRULsJR8uggu7Q49xKik2AJPxgiZKmMC1atpPDkC5MPZa2Svgf9f8cwmm9yuyktYkmHGSK1MNNFPYXTRe4",
  "key1": "22yyCkU1v66tDRHoWkCERjZBB8VbXdPJjKUUhSxrjZLjizcd27GKWP1CJd7PsjdDmwKrNxeDFU6fHD7kjub1LJki",
  "key2": "5rotuQjHnb4VToBc96DxsPtTt2ui1LVNhNq1Wg6cd8CrrXDS9W7HXtgmwqnnL19Gzm9TR1Mmv6YpyYNekZ9TDPrd",
  "key3": "2E3yFAP5hkz4pZNyviVVGUKHkT86FzMbFZxsauTdw9S54bBcrvGhKAGfTRJ1hXrgcjgeGFVWtvYY67fNoD2uWzVM",
  "key4": "3TsER7Yd4yXWmpnRR5pAsFSQXj2pesVrkztHk6A7w8G3Yxo5iwiJu8AAd4gcGoqEEfpk9z6NjSkHwjc88Hwsctp1",
  "key5": "gTywRp24d1SmTAUrMxaWTqKeQwTDsGKVfGMmnERZXeEYRtvoJAZrRZcXH77UiJwy7dn3uyzb8KMpA5F2Q4pWyJ2",
  "key6": "2mrFYXAj9SnhXeiCr8KTDTJh5eD8PaXjb3D4a5QWHUXgDNmvsirGPKDPwrXuG8RhTALGePmoKLbfzyUZqUsaiiX5",
  "key7": "3nZRmuxywuxs6GfBZu6KNaiAULWymHPT7W2qqQF5wSz5C1ss3tW2tbR4yWbn8xsQ4rALbfD2QwgKThArRiDbm4y2",
  "key8": "4FrZkLk3tr8WjYgjtvL9FTsc1dPJPfMggwbHt734YvnRXexog5D2Tzi6rPZGYbsCBqb3hoHoPw6GWmGR4HtXAaai",
  "key9": "4emcfnmw3ctYAoK1Z6a4TZP8Jty4jVtb9HWSjhGv7tYqDZcPnQ18ggGidPGtVEfemr8T84Z3vDB7Dp1SHi67vojH",
  "key10": "mad1njuTw3kiLoNxhpN578Xb7tgv5z29CcXkPi6rVaFgHMFnibUrWWVuYGSNNduW59yNgR6YRVoTC9S4S29n3Yj",
  "key11": "4PJra16ak93ZQqVvrj9Vw3aeokKVqWkZAmaCQaeFFqpPLsRtdk6rFSTQqZ67rohRDqWyMMsDuGpjTeT2Wq2fYAu2",
  "key12": "4h3sH3YHovkriAyzinPXz7uoWC91ArKrNi4r83rJeDtPpmADFwrA4RbmKnTMXciWNicHj7jxeVnRjFqp2WagfbEC",
  "key13": "3aJ2kQYP6jJ9qG4S4ffVDHVVrwep32n9mrNNrZjrWuMg3uiBBfaNBZGDZPN1bNRNWz4p3y5416dsxBY8Er4vGAXs",
  "key14": "4KjKwoWnpKZvzzF3QYd19AAzjugv3dmCscAdf18xcUjFxf5VvDn83RDBmPd2DAot3sbxDPwnjxecmBsaFRh6P9by",
  "key15": "w6FqnVTTsRCRbg6oqJK7nYJ6TzEXncuafDqtMfnnB9b2FgjWdHr2k43oJerqFNpTnpaACQd7mvaHwhgtBcKMXdk",
  "key16": "3AHXM2EGeqZqSBzjmXPhG7WdzQ45wQEBc68q3Qu5DA5px1h1on6TUK726f2rBj2nbf1HdQyvYA2r372YrQD1DiMV",
  "key17": "4EmrZY8PN784eQozdMSqrxNA59AEuD5RvTy21tdJ5Ssn8CdzrH1af7XhfMDmAG2nvtgGPEFbzQ6snbQsivTafPiH",
  "key18": "tztFfbbBHJsjcrtRy6fSgwLk2APYZiDwVRxmjvVwU3FaZJgjmY7xamBaWvNzv8v5zoxGf7xoCAnfJQdn4S4XAU6",
  "key19": "4nHEEQbFhpYvPPaZJFbtfesrSFhyJT3Wk5Z9QnpkpNtdLXUixpdfVKHx1ztsEQfFS3CMtG8jbZ8KesRvsPJP1HSh",
  "key20": "3NZiEoZFQALudCuXZBzMaaYryxsW8YBxBkXYRVTHGpBxMKRJcexErqxeZLRLuPQ5AvUyawwUfS7tzrSdMhLD46ti",
  "key21": "KkDUYkQ1tvfqLMLKrHVqywEEZ5FiSgSywUeUyDswzHoKC1f5Nz7JN1q3t8McrSCBWE3afE58ipaeKXME1CzcP71",
  "key22": "4bpGkKUCCU8CEp71TX6VCSyR1sVtp1yzrdYtkpmYUF3QM4WQCLeDWoaFWUpngcJM5Ed2sAZ8cwu2qeazLd8PkLgw",
  "key23": "eaLJkV1UyzaaJkWwMnkj3yg3nK6uQRyz7CKD7NNqpPAERd8Vs6GwwTYaqUfRZyProjbkEXtH1M8YM4mCqRW2WUa",
  "key24": "3EZPC73NTv2Utyb4LuMRHcweAeimX6cNDWGic49NiozmpKbfWeJk3CCwHU2Ahvw2sJBLptvLCSDuDj4mEEfmZBW6",
  "key25": "672rphawHAyhpyZG592Pk1N3M5CoLbyKkLdJWyegLbbS47Fb99GppH6eCUivpA9W7ic6nXp4Ze29WT39XtWsFvsV",
  "key26": "YgW6cxASnnXYAaUbgBBZm9onfTduuVQsKwXXpKPmT9vxuLp8QJKHn3SARd1C5HKsV5zHhM1JbWpkGyPzWvBxJst",
  "key27": "5xVKbVuWwmpvH5JPSJxFF2PA51gNZUz1hzJtcUYXrt3swNj9pxXYuNjBPdTq5tUdZzewvgMi9Q6gcZ3YqyzFVkYv",
  "key28": "2EAr7wch3ccm5SYdVXZCVJ1zV47AKeiykjBaHWEcbqUhJaiVFheoeSUGFJfGkaa9BNqhKvyyuvhnKAbgyfwN3p3b",
  "key29": "5T3iz6axechgHc5Hjecu3VYt8LSpbxwmzdpUfmh6hBoWhtfciFQpvP23p9Br7t1tpNZtxMF8UMosmpbWxp39Hu6R"
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
