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
    "35MoFn73srtCrnF1GSrhzQJ6FoghEQ771VL3KTaud6jQeRRDjiNkgNJqxXggy2LoV3y6ZZvqPfZEtStbq2Bu4aYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SwqbbL4CMeTsRi5viBeeRVcWT5vJKtRpsJGZyQ3RTKA6EYXbpDrCAqyZQx3VyHaXP6wM3vVet6dEMBGQxgD7izC",
  "key1": "paUXBzJxRrRVBCxx9LWu5dPJ7aEe8cVUreh1c4wcEveeF9bheo5CSgQWM8CuagwpkmCyjX65ohXAdQYFrtbXDK1",
  "key2": "3pSMcTEQREoBsLbBSgTfMZ6ac2Mpz9DGkT5wjSZPxjPr3wV9zYWbyM59nVxzKfEYgf5QwvQD5MTh8Td5MNJYS8oz",
  "key3": "3BnUnYtiDnLAZxWEaXZfyn9sJPfY4t7z8A9HqJpL5z7tQK9pVpSabsmArWJ3Sd4jjUugjzbEHPMm7pHdnMj8qCD7",
  "key4": "kKa2nrnT5ZNzwaZQ75hMdvMPv68C4eBvfdNtxmSZ2ESMR4jBLWJXW8qHxpDbU9fXmyDHv5eNkSVRffGobLQJHGg",
  "key5": "21oDKvnna22TjEsdQ5usvKLUGCT6L13kXiDAo3bB8zLeXrabwqPPtKkTWoPTnnQ1BLGM4Q4SPzGkZjrTzkxbiSu2",
  "key6": "64yLPYewmwguyzwteCbHYVNqE2SdQSxQR4qkAqgrzGgkexm8ugGxdP5nMHE2ocDD6mELuS6C8dkcrNeYsdGtgr5U",
  "key7": "HyNy3EXgyDbPBjMUu2363LLXTH7fiA1sTn3CH3hp3STDwHXg4ZUTsNT7sPLcgujZ5gut7SKZotCkt8TFhiG58to",
  "key8": "123WnjUTJ1dqiuvQiCeVBZZbRJ4wUEUoE3NCLtrQkUsRVPPcsCMtGES5caCN76whrjBgqiZZ5naWjzXoWCmZWhWE",
  "key9": "5eMddMBZwyCvmD6MCr2QMF7xqhvsXnku5ah3tnju5HH1F2hS5mT2XvAXXoAZerxQ2Xsezepzw6HPxbzrVi2bGqSD",
  "key10": "2d9t99bEcu3MRfRwiUJzW4maERyyhKtUEZedorHP1byfqc9ERuLSQ7pmbycn5Dbui31mGfAorEYjjYHknpqfYaus",
  "key11": "Wjnja19fHpsGeij39r8T3RyFEebHDvZT1Dsy2Mwozjok1n7DAG7BXsFh2Gn1iAAsjpoHrmuz1KqqcrB7EHsAFPb",
  "key12": "3EJEfQDuPpcPzVfoHFgEU7XEPS5nFsAV4hfHhxqFXH9SJ1c7fxxMCBaxHokA6zsjv9SGwtH6sy5RJZ2vFKUptmYu",
  "key13": "5P6xNfQqUEZpiJL5dVPFb6GKFsqwawedtYcX37A3y2BSiFifhEdkPfNzpLd5rWFjtfg7ZJ1b1V74UZ6uupm6D73W",
  "key14": "5GyC6GdwRiyspaSqGWDYwwzMxcgi3Jm1mtNwjWJkbijPorujnRC7R7bBXBUkZDYVVrCdPY6B7oParp89sPTyzXsn",
  "key15": "59CzoXjzzBSaGHkDQ82KbV5fMJqpHQ5BkX2BZ5UgSYoSu1mzxch6rRjTqKhcDSdJJSKztSb7bEfKtPe9nahAUEmq",
  "key16": "L89JokXxR6c56wKjrMaix1w4fY28qyTcbG2Jxzvp67mCfU4Hm7bogmdFkCLXCYBehPpmcPDbSNxuzLebZQNnD3m",
  "key17": "4Kd2QKMLJ7VQbPpLZHHCkKQ9XJvZDowKMpxVGoNbht6XCWCzAtupsPmAMLpNxzM2e3fkwHfNmUuHZEprMQP8eUeX",
  "key18": "4FPbCdd7EGvg52DgtavcgneNXA2BBu6fWYYnQNfMfTBCLRVcB7KGEmStjyVto2HGGzdPQVniMKfPrKtuiiXntkF7",
  "key19": "4GsDeSR7QNTwKsSeLrmwYU5t2PBMpKhcL81QULHa2r4oZVMAW9UCkvH4rtAUSEtFgsC5b2ZKuaTNkcSzHA3ovW2F",
  "key20": "PYrzMJj8vcQ4MMWJBww2DYiKro27pxgEJZNGMRMgUifuSQgJNxN4AC1SSsLk8hxrBbCGoobWr35g6Zm2xWGZ8Sn",
  "key21": "2tyGHw7HhfVxYCNwVek6D6v23mbPyqq8jvJYxCkk95S5CTtG7M95hZd28bgCA6any3U97tF7SGuWLKcku77EQPnm",
  "key22": "26kbf3WL3UeKeLgDvKrHzWtHXkvWNhh68LNvz1vGFu38i96Gu2Vk3m6E8UVPfSU66jSFudMYnqLFXi4x2LVy87A7",
  "key23": "4zJpMtJSeCPuj2xei8RSPJZZKxL9xp8rDKf1YABvAgxVzfGG9KBvjkExZgqmDEYsLx5nwEwQp6CSDPaxoFyndQtF",
  "key24": "2Y1Bj1VZPoF3zuZLBm9uCaTntY6ia2mKhcUWwfw6diQJKYp8RfyJvQn2MhfaSG7CiKz3uu5LKxZfjH9qTYHUnfnE",
  "key25": "28HbhB4oEWAU6iXk5sxVRfQRRPumKYPnpRdUSZuecir4YEh1osodCCqYjBBe7Xdod9DgU3JX1RTtzfCoikp2fMZ1",
  "key26": "y36YeATJkuK1bbUhMkmPwEZrSVVR5PodHj5ar5d2KktF61geQ6558wUyjwZv1tuUxTyeTUSqNqjjxqEvRrekCb6",
  "key27": "4HrSycNK8BKR5d1JsEYtH7m8fLb6MBv17DX3ptSb4kVcQJdrLn2XAcg1ZcfDPA2GCntS5G2kzrcw9vD1Z6nDYhDc",
  "key28": "5VYUcgEyXeVcJVrmGZU55LH5JVRth6jjdiqGWozoWMLPpcxPygBkmRgGuYmtfQ1BqxD7vn5YFspBdkTrgnDGnNMn",
  "key29": "2bQRm2mKLuG3WjvgH4zAsAY5NktLBeV5afyNKT9kdpfxVo4zPvpEXKa7oLr5RYYu8KaXRYP5dNmCVdCjuNWoQFP7"
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
