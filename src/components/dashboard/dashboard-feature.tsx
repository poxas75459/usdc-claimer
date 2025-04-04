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
    "mLEXM8nb7F4hj6i6ajok3e1uFBECWsstw2wPqSaZTCW99uJ5YwTfPMoQnNXm6ArEput3BYeQawUFXSjjfLeDXru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23aN2paHjinyfeJbQ2XZ2JZ4YFwJvripgbAWkBNgx1uHwzRBY77SetTsnjmTA7p3sy2PgdwKbfhykEqLX87RVYN3",
  "key1": "ceXjPKtMrsh7iysdJCFZUWWPrFvDPhZwcVKoMBh1NkpsMLfDJxnsguPR4ZS2ruWm1CqKD1XBzVKnBe1JYHeMxmr",
  "key2": "4pRavBb6XmtGnpt1YsWA5BGNTLaaUZ3UhuMuERr1f9Ha1dW4QBsMfe3thMja1cFJw2JKzMCmsixRhdk8fsDZisbm",
  "key3": "5xbKEtpUttL7CWHHycKsSM8ESwR3MDf1Ks2wMTSfNpnHxgAgJNo1VhY3TQmvoYohH3QGpfDWFdLgLj8HCC25Pdrv",
  "key4": "5yk6jX4MrQkfx9rJjHu46RegePeMhGeArFBtyo4zJCjPn2Z3ceGEd992MoXiqtrvEdNZunBFstgLUjsJ5MSvRsup",
  "key5": "5fxwLpXWngaCyR5fxZYCej5UA5ydnR7PeZyVftFzLF65qMN7wEHisHjv13zVWTCdBaSYtwJB265Vx9Er43XFmCUh",
  "key6": "31zVusZ5Cj21MALKR7WkfzuQVsUcfwSrNXCtjApWjJwrVnsfpDZzotJ9oavi6oBHV2VTEbDQCAThgff1Zd426xQ7",
  "key7": "2ypHYzfF7TLBzDboVB8ppnNAjRJmDTysJ3Jbg3gM33EHb2cEmfuNtMF3kiAzCuHCJhDvK3V3jGCShrmySM7nLmqt",
  "key8": "G4EZQRnbvmeJ2i197x86zfijV2JPTe2gx5tCZKYyAGWAYyf6je3emdRyr8TMQTAmvjSvyS4za3tNTKUdisdQv4i",
  "key9": "3i2hRGTGbDDhFB7AmuZyL5Mwm9DJsMpwwtgngEzAbwaBxNhJHqqKWyqDViFxUK5kG7ttbMhaTGSL76cPScmrkhJL",
  "key10": "4jXUWi6rfXvDQQa62fY76yfmkRk9GXUcm4AsZnRxR1s9m8hFnC2cEeNaUS5nWtrgKCYGtSDmkXcrUgk5vEKhvHzX",
  "key11": "3CVm14V1YLxmTr1gTdmQn6F3FkGvuEgzr6cvnDYY8ruaBmEZLfj7xMyaqRoeEfr5rjroHjU1GwyvieyYA7qmK2Mu",
  "key12": "3r6MVuy6WdNLDtiqNQPzm1UADAMBZTuT9oh1biGQSLqsCxtMaExEPowk4HcV8ebgKu1EB8UkzfTGREknTwGshH9r",
  "key13": "2t8LDMx2jWfyGukPkMGSrWgVfb4NyS8UcyejpJ6bUcN1LTCoA1mEeKkQ6ruutsEcrNdsorT6r4Zjr4WqvsB35d21",
  "key14": "2cRmNNL5HSMU8GfBPjhmMJytn8eo2CC4GsLsDHgCbB3234K8uqs3nw33i9Cge5VPNE7PXrzNt8uUW2BMd8zb8wy9",
  "key15": "4k1FaW5a3x2eWi5z3uc69xaTJqsLwWrBLZy2qEDabFEjmKk6JUCZyLpRsRQLGYejyM6B7spDdCZWJatm6hekGmNo",
  "key16": "7wwNzMYX1pmG3R443v6iv8AH4FiBRdAAntP3D1Sv2jU25i5E8KHx5CPCYFy6QKFCtX7bNrjdTcpshDfnPLa5X3z",
  "key17": "2SL5D8CKiQtaDM74vrTVh5zGoDcAB755H6DgGmojUXP7AyYQWcTR5aTEXzz3CSHfhoacxNkxZWxQafMpwdsNG2w3",
  "key18": "VzW6anJLDdCtwE7NnyCvTNQUSpnM4QwgqUzN5GwMywvYNBtqhyK7nhqZA6Fg14dMrLMUsqbHHkYjSbWqrdatULE",
  "key19": "wU2s29qL4g9DQYLMoNkedjEUyBjUYhPzYQVJbCPqP4CbGkSRp7mPwp7MxP84Z94Dqc1aG8j3gXhQZHhDEmzwVRj",
  "key20": "BxUpQ4GnQuvFxyiXei2RXcb5xKfpvaQvd9kkQLLkBdPppkxDub7NBtjdrHFPTDzgZhDZ71npfRaUkZCzzHuWgFj",
  "key21": "3bBA9aEDXn55YuaC3pcWcQjWauZVavfZbNxHZyL4K3K6Jo1rJ9udY1zr2sDwSUFpaWSHd6Vdgoa83dMx2j3CuL4A",
  "key22": "2aMxgneJx6iikvHBoBYfx9bKpuauBc5qouxUhRpvQzQME4sXAtKiSHjeiQRuczSN3NCFaTm77rD1KgUAwuwTrMZC",
  "key23": "5pM3SzooR7mmqao1PyGJxe7rQPu91VT9bTrCcemBGmSXdWUJWiviMtyZKehoRwoMLninqfYQnvxPxM9j6sJX2qyQ",
  "key24": "5vjbZaLCYozb7aHef2UEZtb1xQCQLsp1UnRvFV6WEoxTf7op4Qpy5nRtKbYVX5qioxD5puGv47t42aerH7K4qWVR",
  "key25": "4bxyStvr4vqmLaBTyQE2rBnBJHJzYq1RBN6Tyu5S25dpoyBHJokWJQk1QDjsdzE9gV3w3QyxZrMtR2Mwn3o5K1jY",
  "key26": "GawNgNzAScvwSyftjPXP9z9k4k4DBB8JU7vX4a4PAa5GNhYCQ8Vj3CKWD7jiwLNwk4fSD9jvcVko6xWMPs8Sw4V",
  "key27": "4dVbhPnPfDzxCzsXFn5rs3NC37txorrdGPNmbwt1zcibpRNNJ2SVoZ7pGrc8QNcdUKxVsdwQKnJeQgSMzLGe2cyU",
  "key28": "qHissajGbxv6PZ1VyMZkCT5sHjwFGo5D8zAY3bkBCJk8aNVBFs6q9wzh5DjwEzV1YpijSmJJ6Gq2JnPg3CtZM19",
  "key29": "9U1EuBKsxh9QQhHzKq36RNS9rvhYketjkXdz6FpqDdjUdzN97Cpan6HTFvtfSG1st1ymXHbh8NtQSPvQ5tQxA1T",
  "key30": "58wWsKZVNLZpc4xNRqjbBXxepH39cBmtPA7kfrjxmrgNungCPaww1LSUcVQo33V4hX3Z7Ckrh3zPcDtndrhAE6Sc",
  "key31": "441B618Lo9DoxT25xCcwRcUf1cGVdHTfnWHPRTZyE6fxSF72e3NbEJtVL9jtxuApaaUUYDfvFsPC3DzCusYrdc2L",
  "key32": "3T2JcKh1oRe6g3tmdPsUNfaTUCuoe7yRLvzemBGthiNUjtw6gsURHn4AVSexwA3GKxHMibRTb5wQFp25P85Hi7Cb",
  "key33": "3EPwyzxBzDP55cWiTXgK8B5Vjf16NMihEWz9yfj1VDDBRwm2S17XwiXXYGwG7cVChcJ6JUVYLHdgSAkdmYZfS6Hz",
  "key34": "3G8tegR15DNNt71nVj3NWmGnPdekeuZtgVDibnNWJhg1pe4pdEiRcHiR6F3m6XrPfanMD1Ugxjew2CMHFbLUoTMZ",
  "key35": "dre7p5QjRwo51ETpMt6qXPEmDpcy4Zb7hGQQng1fE2zYfhD86ipUxC5SGgt5rFoinwJ8qZqg94CKYPKUZDyFmHD",
  "key36": "UnHv2pVQv2Yhksf3c7UvRhcT4mUyxVsqPCG2mA2AQLo1ycu7Fg2yL6eCg4isAhsv1DiMKGiaUjpYm1ADfGzVaEM",
  "key37": "2AbQs7nBfKN8ak5FJgM4Cryiy5ZEndjyqTCwxCaeHu7enRS9B7ZKWFiUioancuFviV2tsamuhs1vSe9wQRfRr5x3",
  "key38": "5RYFetYSCUhQEZRAc6tCzLYfpka8E8ZEBSGd77YDLUoFqE1zUkaWVw2W6Ak1TTCvAsModch7LuGzBTzhBQZTWgQb",
  "key39": "2GiB9XoJ7EkFE78gpHwPyJ3cc9AtLvfRLCPQhuo8wzgHx5qGtXapmyXdGgs6Aydb8iRhPDkKTSTWLX3Da5MY16Xw",
  "key40": "4P4KNcBTHYUgogYj6R6q7EB8X9vWrRvdfnRPWNcadfnv6EB6ijAHoCNL74xK6KnMRrZyzBTACK8X6rPviDkfqbBc",
  "key41": "4J3Swcc9tGk2vcK15sbidxgniXmy5tYR7Mw4XB5XeaNKdzMgx7NBsqaGXw9Uc2JajUPfXgKfYXC972m2itqJGAFs"
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
