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
    "47yCdp8bt5kjH4ae9dhu1XX76pG9SipsFW54FRbqzFWFdgDbVhZo2dWu9DsXnzLNyZpSBPt8Wgyh1VQNNCD2MKLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pMMDNsnmYxPv7zter5WS2wAoY5eMMxtVHKq7CjoxSM4BVLcBUnP99gr5pBSYNUp1t5rJShhiiNHWF95yDY2ZFKs",
  "key1": "2wzZph98gBc2ynVLT6CG2jwBhkJtMevkKR2wStwRHMEM8mZJ3CMqqiR2hY7ehCrcMdRzEmMZBuipW7M3qZVdYpPA",
  "key2": "3uLFx84PMDrZEHre3DAJfaAXNS7nFVfpaEQdS4yFGSZCsfftnZMehgG1Wnt8uTBgqr3LZcyjA4L6xVwjcFhfE6ie",
  "key3": "5vHwDQXmE8HzEBWAWQSwAkUjJ2jgzKRbLLNVCrWY5uHBbG7bZU8d7YPpWYjKgbfxS9jqA5k8ccmHJgoMSo2aUiDs",
  "key4": "4zbPmhwKLz3EUmpzzrcQ3h5uAC2YhTPXrXbPYANfCP5WGTbwLNV3mE5cj3dGFKVjVuK5fBcf8AJULusUxVB7eZcn",
  "key5": "5DYwrcGFppwiQ5TTieK9yx2HpTVE9WeWvYtZbPjCUruMK8tXr7XYWNikKprChhhAaxAXYDTG3aJQ4AgeCtwM8yVm",
  "key6": "3EqLkcgrx1PkPgCwxwt3EMsKa864Xnt5L8mH5mZkGexQnTzuXcRJ1qYYERJb8f5QzFsQjwxmBzB9q6bBe61LbrVL",
  "key7": "Yu7p15z3N7B8BcENPAMHtbc1VQ7ncZrgTJvhvLG8W8cu1wCGywG2PVfsxVxcBTSizghBjs2NgiJwbJBse42ohpo",
  "key8": "G4w74vpphSE11g2CNxEUm9c9HznWUPwsh46SbuN3wX96JpW3c1RdjYkKL7ZVPNR1qsRvmP2REVgLEJj9id5Y3hX",
  "key9": "FwkxmANVyXTJ4B4rcC1XBwU5fi9rBzRmsnyf8jnrkzzkv9zqodxspmNrrT4zTB7Fnk3svSfFixaoeZ62AtYxvDM",
  "key10": "48yD3FMnLnqmAnt3i8BbVrBs2AWQtYLEWm1VN6vkUjGFgnWEKsm2JAhwMp67WxcrVHjTc55gyX18X2SK4z7Co5PU",
  "key11": "28miMKc1xqkDRQyYvcQcyU2CkimxL56sVvygwz2hogZqdCx2Je4JhyrLDFyW74DvKZDQa2Em9BXnAwrXQdusWugz",
  "key12": "5KWCWWNyJWsi5wrKRYsgkA6AHUyzygza71Gv1hB49skQQrw7ShSd2rKimEKd3JZ2cibGaiCurNZpjrwN1y5h6Y61",
  "key13": "245dyaGHvQEmBAf1jimiKGHHzYcyFRXWmts888QwshJjD4aBDAbkeuRx1rBm6Drj6BmVrAtek9evmgQerrLPwCpS",
  "key14": "2fXa68XqFFiqQi12SwzHPFJDq1if1GP6eXN6GqL3MStnNQgzZMKzjRxSZH7gadU9BKDPHfejC3NPTDPu7cqtqYFz",
  "key15": "4t4UxnZHZtSQ5ksdCCKUmuJHCZNoWCTkQtYpw74ArS4cAZ1ekMLnRLubqcjC6q7oajLt6m5ZTYRVwyY1VnuJn8Fe",
  "key16": "3n6yo1P1zKkzgmj5nLrHFUjbvzH8vgiav5YRRvABJpsFZpfEuMMnz1RjFvi2YsihCpBN1ptXHSqzoByFW2ZAg2Q2",
  "key17": "65yzD9akuvR9XeTz53YzgmHYCwhjERYCvPp6dZMvRaYUfimdcnbvv5SUz2xxWVo1ibGTVaDBJcQozb5BebC17vCv",
  "key18": "2CL68uSeD1YqpGnMqMyX34cuLZowZS7Kh96HbnJ31jxBR2W9fsgzJQ7k55ppCsUB5qrzpEFsrU7YKopZ5CFYaFd3",
  "key19": "3gzNRodMiaJWqvBBBaDZKAdqqaxLVCC9uzKYdeZDmksWz7E9gnJ22L7Xbef9EbW4qruoeQkB9GhgfhCtXMEyzzfk",
  "key20": "3yTSZxG6xoeeyWxZXHBnQWeDxQNSK9Dw86Gp61G19YGn5q4iWLHprm5oBbC86E1BWg3gHeunZrLXppvrd9CopzSQ",
  "key21": "3RPymu6WwapgcYz8bWkEuUTJkypPPevRhgFmBdkVjFwUR8NyEanVdGGiJsndTCMiFEJSeM3KjiV3bBbaKAZiGvP9",
  "key22": "2qYQCeoeyFGHEsVqtmT8wYdDopPtTodELvyxh7t8V6qdGyMYHrtEb6LShjUaG6xX4c1cSHJ3WnY9SwsCpvtaHKuH",
  "key23": "5Zb5MLqdwWL6snuUT71dLoiV2g2DHpsEkNvJFrBBo34HVd7RWszmC37Fj2RLLMJh16BDMcDFnvFW6UVueFCVsZve",
  "key24": "VTDPPsT3NkHTECWHNd4mexpTCWLsBdDAbFF4KE6hu6jYQ7P56MSYha8SKycFeK6W8uvwBmRdEoHqxmTscisVK2x",
  "key25": "V2XLjKPRa8uGFp9xjZxYG8eEdkhFxrZ5nWyUMu6UYTBwT73C733mQmJcZ2sgevDqZhLm6GF2oFDMZ6wNNwv11HG",
  "key26": "4PAJ6Tp2RZJkQrbJm8kE8UoMA1wGW1CpD29sQPBpq52nvEoQuSqZ2R4UeM82MdfvWvxSJi6GghZiBvFqCzGwAR7k",
  "key27": "2LxPimcW7vRzxMsdVGDWUhp49zfFBDZNwwu6GtnCzbGfVjn8e3yEishuXBz1o6Mi2aDz5iYnZxPS7MRbRCXqYFCk",
  "key28": "54LtuhaKjXtRf7qi6aYhhU8wuYxvZdNxwGnwrPwjZeX6343ZMyHKJsjYpHDnB9pgKTzCVYEeAAxFF3ZcVWB5ojrw",
  "key29": "5QDy7hsgNXXbEw3ZyoGnMNDk29w3nNSqVc4nvc8LHMvdgVSyzvUQtZEpHFasdTZ2yYQNQEW1u4qD5Vu4NEbwqY3t",
  "key30": "3fFh2pdEPz3G9Ju9AHTTsrUDZG49Wq3F5qSQHF9PueK2XhTRULEoFkJdnVkjs1Zxxn3ZhDRCA5wwttGfwnJKVHsD",
  "key31": "5SXYNnvLJZCRKfNWiYtHT41wxAhPM3bQQDtgjjKLmit3P9U8b1giApyRtreCBEQiP9BBQTSGQtFeNMmJNKnRe2on",
  "key32": "oCcvBc51HkCC8kHvjT5AEavBNV4aJMtroo3eY19x9vuKrwcbPzdPijGjUrbrshACrqj3mieDiSB7szSsjM5Z6Dw",
  "key33": "29nV9W3rfcEA1xMJSCnNKo5V4akhnhxajvAMHwDk4aSEHECiYg156HCN5KsWpFiBBkFVkonLk9L8U4s6aevGBjKP",
  "key34": "qd8szi3zNHim6h7V1gHfndpdrbuD9Hq8kWfYoTovFVanzZqDauLJ4CbG7u5iBz9oQy3c2ZDy1SAae3KesvcnTLq",
  "key35": "2rANbs1NHXYSfg98HY6dQ9QCtbLxjhBdGVWR1vxcBjUMPJqk4R9QQuDkcASiua95CnfVKFAhHQKr7boLxqCXhpst",
  "key36": "3VGSBzMKRDZkBcVQRvoFDieLguuFbV9ef2w6vqL6N5Xka9m12AVBWWnHM9hfpRxuFZmRd322DJsNEappkcmcbHdg",
  "key37": "5aXmkGGcmqjjyoVLPsVdCxK85Mp1sxsn2fWpaZvSgbNjpGb417kWn3uyFgCdFhZtRKm3NwiJRz7eDjV2TkDVFjTb",
  "key38": "39Yj57UyqDaqmRm3MgGhSSDWwWeefyRNB6LdvxQQTGaBN2ybp4K3CfG7s9rv8nS5o8RpTLHn8qUekH37Q5NcpDj7",
  "key39": "3nyacrYMRFEwHtMV1Uydqv2Mqs4cffxDk5Y1UNRC6hgkXUS1Db2o8JFmNjq1EW4kQ8AUPoHjCZEgeV6N6A8bXSHP",
  "key40": "3VFjAei1Cv4g8gQnhaEQJtnWDyeFk9wp3DCc4zRbfnRWkk8ViB7jumwNrjxNvhXmMLQnayfKqPXnVdVVjEKFrwXm",
  "key41": "3jsLBQcMFphYfA3erRPpqXWLnq9PK8trdRQ8dit2QmLHNaxr7rQZTUJAaM9bB989LRhX5sJRAS3Zewc6MSe14qwf",
  "key42": "4LmK5FkBpJXkuwgPro2BMoj4qV5KuU4piTqfVgbuh4LqxmsobikYqaqtYCbmU784wwZHyVm6VcTkSqvnJKQy5DPt",
  "key43": "2MtC3Z24djypBLW2tJRYaY7mq7ytNpREuGxPMQkKCGZur2cLro2c42p8RBRAtfhPCkCSNAJuePE8fTij2RRYePPb",
  "key44": "25AvFbsmXbxWxPJWGSK8efWBAnHMyzfFkF3chXBQQHPnkqaQtVEXLjw55SWB14Akh428X87bpsvSQYCBbWtcdw61",
  "key45": "2LKnrGyQgWVynDbihY6CGSt6zs1gt4fBCAghmfDzFwHXTT7rQvgQDcaBdWGd19XA9BfSpvK8NWwsHqUVu2fg5tcU",
  "key46": "7ptBs6D1vTVFGSGFkpUXJEejReZ1Up4Ax2oxRMfmQ45A5NQLHSYBM4JTnw6auMRyEFVRryCZ2ZSuUsF5EGsxv23",
  "key47": "2NTvivxj9tg22BiJPKxjAz7FBudgX2cQxZSpigDpHUB3y4q6sVDRKdpsorbdTTpujWe2GJyNLV3CQCgG1b6gUu52",
  "key48": "4RwBsNLWeYKF1G8Deh8oyb4mJwUsHMXre8MgbADiNkn5BHtMwMyXHchYUgn8nAH1oT617LY7oWdkgeZizPMhgdJD"
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
