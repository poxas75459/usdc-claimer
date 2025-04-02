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
    "m6rtPsoVGNtkaCZ6ZEPgV2HdWAb3ierNgaoKFP8z73ssimP9NkiQJLnE1TDVffeUdu915FdiSiyDSP8WQsRLu4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aX3kumFQaJFkSACDyjbysJRNeE9Him4W44PPrYjwEP9eZAw3xT1ybYQxkvZ9LPoTP1XjZNfRBehYdTHp5M2KJmP",
  "key1": "5woTSTLQxqKRXpS2axFAofVc6reHhLJX9LJazczXeefpod3nhAFvprcYxrsa7AmGAWFbhixoms7Yr1skPiukiF3E",
  "key2": "2donspAMmXwwfTYVazMX4U9ctUMX6jQk2f7uLaWAQ7fPB1d1N8kmh3NsDy12ndPfiRiiuiFTQF7bWzCDTkz4ZJwM",
  "key3": "3K8e3zEChvfFatJvAk8US9my5REk4RXGXL9CrMjGyHAHCZ3xMfXt49YPXKKMa52RJoeCrhfqdRrwp7f6Qx2e1mje",
  "key4": "5Vx8zGpRmSHawtUQUujdLUJcbdkLnkVUJ8Q64doKN8kXBQ3X2bh9d8rHGAxLSYmG32THQ5MCC481bpxvE4g4ozdE",
  "key5": "3NjkRBgBmytz6yFMdedQrpxdqwBUcBMeKfNd4neywx5ziP5UfHvHBH3R5fXUY432xsDLv7JdEKR8XmhV8wAXXXdQ",
  "key6": "trYgyKmt3MeCYZz54grjBPdPpxNcFLSpw3BzahbUSHr9ougSZNwW5Jm8xxEyNi9sXa2m1ch3WwWHN1FXbLFTDEL",
  "key7": "4dekfzz7GvQQydwpX54Rf3Akj3PpTmYp13fMsyCboUVDuBDprVyKUw999T9NMHrKECd5fcfvAT6VnUvvAA1WqXec",
  "key8": "2Q7Yn3w4mQbxvnAjcunJ7rC5Uo4ofNtV8aBuLFuDxEL3BPii5DW3ArAqH9nKZtWVNx5cXWBjnHztfmUVxSvWwoPc",
  "key9": "26vdse8gMXoUwwFXG3XDwbntQQd4iAKQ2CgmYjrxa1LxqeXqEuxDVebHrtogeH5hN45VPXN74bKktuj6V4UeMy5x",
  "key10": "4PhquMQNmYBxUYCY2uyuH8CXJWKCTSLUWAF1iGyeVKAzaieB2eBX9qc3ZwmVGCmQVnN5Ju6KsaVvvy2QgmBUfASY",
  "key11": "4nP3DgtQQy3u4MUkgNfLpCJssHrHWmsqPkX44wpZvjbdcfBTx7qwtzPbdZWhvVDBpshrQ6v6FrEgdhUKsebJ4AVD",
  "key12": "3F64Diei5ZjU9iZDB93ERsK116sv4w866eCHxhoaucMDUzukPw1HauPJyY7wqsSVSdWwig4dJovYsLt28S2hKNpr",
  "key13": "2U6zVtnpVtryb57PvGQYeRkq8Q2jAVQfAU6zxtScfrWrcPMHqdMNvuL27CUUhSUtzH6kDFt9AnPCZqpts2Navp8t",
  "key14": "5EjGcR6pytCQ3wUT8kjG1DBonywK5J1D3SNyeGFEVrSXScTMpBpmRZC74zTDJPgVBDiFL7Qs7khTenfFEJqkKMJi",
  "key15": "gsasWmjfrTY18A6Wx8HxaPooStaKcQFFxeuFd4J5FwDTN6cdpqMW4nh7yGjoLmNGVBASRMxvUE26ZChA25qJhBR",
  "key16": "2ZADABAto3nYjXpKvyd9ipZrswKrLbufMH8jyyyD54L7WbZrK93RRZDc4C6McKrrJc2xh3SuSHqHiqdaNnncnan8",
  "key17": "hoRtEZDcXnnbGMsJtXSoZgJ2oatNLLHPSKQfeAnSpihqVrguoeuJL6Headup76f3RUEhsgWY6fcZGdcVcghHLEQ",
  "key18": "daR9jsYSNMytHWA6HMYLKWZgsa9ALvv6d5LGTUYb6X7CZ7qZ28TjP17y6re5WRvfbaCXDz1AMH7RiDoBSQm4rqT",
  "key19": "3zm9ymnr7qo8VxrVB6Qqk8G52otKUo5VMUVadwhNARuN3kKpKRq2E34AHiXL4J4MaBEE4rG3Dk4dtiMqSmBnD1Qt",
  "key20": "4BjxQi99aLNHo9yPpqdtTddxthSxaJFRsswQyShWXuzoCKCuNK8s6epNWM5NzsxnRgu7f78V7rPH3jGMqqvsxYas",
  "key21": "2xiGqV1fLwDBiMGXTupWGqZapmi8N8muuhmnhgWFUQmmA1SLLtFTw5T4y8sRBU799TjyFwJcQ1J7vLnLNEtHA6Vh",
  "key22": "3DG9t3ZaKNizkmFs9S3BiTpNCRk1PZ9WZTNddW4CM85DpbznmmvJnuCbeKaWGT4sDuwcgxRE8xJW1u7wRGRyxw7B",
  "key23": "T6qgve7jVpTiY5u3DhVYfbukxXA3AowwnzS5GWA9qkA65jHywKiYAAmHWifGxJKffZQHJV1fSrWeLeQBedV8PKZ",
  "key24": "5ZJ9bLCCjABCzaHcWRJRJ7v64JrdU9zqWFeZjqUnUwYf8PPMTWKY9MAYrCk57e7D8B7mS3bVVCA7U7hQzwUZVJVn",
  "key25": "2WY4jkz3uKVsDh2ybYTUdmupyQ8pHi3QKJiRGq8xBUEmWMNvMUyKj1LWoxrNUEjFpv9rABkTs8VFsLD9LBE8PE7b",
  "key26": "6y7WbDFXX7wxUXXvN7qgFmfpXKcr1tgJzs4sUfQvVeA1Y4Qh79GAFrfW4H1YkYvpCMoAD7zUoKsqoc4N2NFkE49",
  "key27": "2ZHwgVyU52nhPKDat6hmunFY6rNsLAg3TgdANTwFWK2B7CCTg7kBJMe7DrkYJfizEs2vkzb9LvLD6Q3gQzMcyyLy",
  "key28": "3fcZ9EgDeuamuwmnnBHcKDTXUNDDvnhhBTe5KwY277zPCBZgF9ynNPo9qUby3meeQcLLzsRLF1B85xt5rt3Wrz4",
  "key29": "2QmcJymzJ5FcpRtQiU1F1ajmq7wfBDjVVTqiXo2GZXGM4Kv2eSL8zSrjNwbEvbL5t6ganxaod5zwFEGfiuPdpMqo",
  "key30": "3dLkoaHakxW98HZ4UV5W2R2SUgnyBPTHiGkXXDNpMewyMn6jbR69ij36TZE56DFavD9sDMDBsLu9Fb41oEHViJMP",
  "key31": "2pLfWTfTdZNRKaza793ETWbUTWGAk4ZNE6uCRBbuAiFzGQnwrPSEitqvvSJY6aaJoUWigKciNZTir69CD9UBA7EG",
  "key32": "2wjs29AGg18erLZqiEpJzU1E5Wt63KTGjS6CriaQp3XkitUGrgtnA3LGuGSNq9NoHBm9VAXS4UoMCsErET68xWiu",
  "key33": "5hqvAwBye3Q2Wvb1ENpq5k2ZH5a2QzdpsiCZ7FAFsEAqRWezammSYukwDnukwCWP6vMtxwDFjLMoMFcRSqv51Xvt",
  "key34": "4aHxiARsg8AoPwNXedFqtUy6wMqrHSxZ6gmfms8WpvnAJWLctSRQejiNDVHG5P9VS6QR4MJZGUamqxkm5jwhyrcm",
  "key35": "475DTfFcxh6CFneC3bwdAHyvV8r8hF8QN4mXjyqp3sufiGrUEK9Rcw8DHKRZbrbnzKm8tg838dqRTDJ1JRhbf1pM",
  "key36": "Dgd5DoJeqPt4WktBV3bEjxrC93YY6nVWTSP8y2aFYF81yR5HGiEUXRokgMdyvyTWHFzLV8AGEbt8ynYCdrcmP2b",
  "key37": "55UyDdAohrg3r9EEBdYxzPTMN6zfEmsJGwikUY8q7f6LBACZKmymLzKVaXUQ68xMpeU2kx8odt9f51KWeCN8MaWz",
  "key38": "4w4jPWGmjkF6Gsyrq2Z7NPKZWZK5tVr469hV7GfuzDY4jUDGWv48j7MVFhhZkhx2FLZV2mMLDSEiH4ZW8bU4Fz1t",
  "key39": "2Q8uPT1AkK7F7jcw9RUzdqkGbveGcWFCsF9cLG5nvaRuMWBcfQzqXxcBGT37wSJTU6NyJgGCRp7Korx9qx1CR4zj",
  "key40": "2TgshS8QzRTQseGGWb5LDVrHdLgwoqF5sRAbAarWWHyHZTFJgv658TrLxzn4Btvsw14i2Y6SkFuZwvMy64TicAqu",
  "key41": "2WjASP9pxRwRPqFvAYsN45BS8bV3MzJKHtTBhsXxzbV6JZQuhhVhHMvj98Bk8nPY2CUFLA4L9udz5SDaVFm8rdge",
  "key42": "NNZmvdNzpesnm3ucwKfxEkeWid6RMzXaJ7ir9pbmyXdGuCv6qrWMQVK38BszYzBFBfSKkpc7AfRgJjWTbitKbRD",
  "key43": "4TuYZe2cjX3TBd6VwPYF7K3RmTGNF8sgCYvkUMLoPutGsZjk5cShkjDsyrDcx6GXS4GdZ6nkDajrMETTby1iDbb3",
  "key44": "28TNVkzwPbSiTkUAXWxDnmNY3uTbmUbKgQf7mrULRDCepRTPY8JQHc42EymyzxoiydgPxoupHU3JTAh8fH6Jz1K6"
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
