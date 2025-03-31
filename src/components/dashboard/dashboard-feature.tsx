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
    "4WHB5UPDQucv75ZvmfWuqQY96usypr9HzF3STQVHS2oUsipRf7NFx4WxcNQjJFfBPyix1738uf4VShz8Jam46so"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21APThYG15nUMswijvVz7MsrpoEBcmfV2EoGGfyANkN1vBVbjJVqsZCJb3Haai4fwy5DSVRw3Gt2w67MZpnLchCQ",
  "key1": "4nqeBsgeZmeCzYUoqmPLxuXjiENBFYZz175CMQdVUthWq2jHo1JgFXCuTcEsC8kcbycYzCVwQXt6nekBZfKQe3br",
  "key2": "U7J95vPsWwUf7mcJYGf2mBB1Ko4FFb4fuuh8Dzdi48Hsz5XLaVi6TGcXt2RwC8w2KcgxZfjj6mBX2xz7jAwgTxQ",
  "key3": "Vf8FzqPncH696hB7jdXhEFskVtLKhPHV7mCqtu4iJXsRhrwtLkALnqAGjSER9AzG81oLCtUQPdHv34YQj9DRayG",
  "key4": "4Dydt2yRvASMQUzpKEqWNhzaCc2KQ8ejHriKrv1v8kHgKTsKut2ND5FUXaoVXa6fosuVq8GBhXDdZ9HfGUjssnvP",
  "key5": "5CP4GehVWPiyFXD46Xf9dBfy53HVSWj7ZehL56btHpUHAmP5vXtyvT6GKDayh4hGCmsdaq4JNXCoxAkLFhSgfkyG",
  "key6": "3LS5rZU7iz3dSSDWGXpzvBPgjhjfDpZWtYz5knpvVEN9j3iCF3okN9nNoT7ZR34Rr6FEUGACETLF8s9BQ2SpUNuD",
  "key7": "vuVw179dwUFXFqXT9JXozQU2hxRAbGX6k6JnmQDMcmhEBcGu4K9Y9s538JXaCn7q3jM8KFpMNPdDnVoUJvDA6Jf",
  "key8": "43UyatR8HTF5ymUzK97uumFwpEtddCMMkVjENXDV9SriUo9qnxCifi8iivFDWqQ1Qx48Cj1QcTsQLjKjuU4tJFk1",
  "key9": "3pJEZZo7ngGSQbgGHLda7EasPu2DKwZR15yyD7EEtjTVkwt5XQTc996EMMyjuCRpXhhqRaqkqtEt6BFF7wfLCUvd",
  "key10": "3CLznL7G7myNFKgT3jY5LF6Q4zAcmkmfFb5TihvGTp7uFGCcYXvGURs1Ufyu5udhqbamNe2j23YKzTQ2yKWwrBgv",
  "key11": "5QuNp8JM9c8VaZy3LgmPZ8z1gDDtQFPRqixJC8oaxB6EnraEG1rK5ADFSZkADMocAt7ybPAhUAKQpcpwFugc7upf",
  "key12": "BVFzH46aPnwLfAkFHCVFX1unyZcxc4JeimtmFGgJ1zhTY1bWTDytDd3XZzCrp3CsmnxiABG3kwEAuHD7yK4AY2p",
  "key13": "2TDUT3zCRmAaqPhgQ6taxf3Lr8kRouoXsh2o5gHrjDkfHXPhAPrEB2zptd8f7xvC6Eev6xnGMxTBf5YCxXgaNYJX",
  "key14": "2QMeUFtY4mUoAycw5ZAy3bkJqnSpdKpEtLJHEdFd8q3UZAvJPoGaLDfNjrEXT8yfVTSLcp7PL9jngVmMFqVKeFzu",
  "key15": "31oMbyQBTKTAoBBYE5LWXjiuWfKk3rMDrZZZ7vxH1yons7j5faXhU6FrMjEJp876gGExVSbaKPXwebDe3SdWYWc1",
  "key16": "2gZj3wMtKbQps547BTwejwUYmLYcBZcJY13qFTmGbX43D8C9LeNnHiVbxdEUsVoVkBwGZ4tQ5L6Qi1F1iduJhRkJ",
  "key17": "2bP7Jgi19wUzWaUdrorx25JtQBJG7LQZ9Az4dnNs7NZBRj4ddhNayctjZkdjZMMTrv1Dkgf262nHadBd4aYHQehk",
  "key18": "2Vq5K5uTH2fHFt1ghc1Ehk21BVbVRiv2no215dDiNjUZNZgYFVbjZh5x6MGkWUsj3fdLcLmVfG3kgBnJRapHforP",
  "key19": "4BiXRakPHxwJcBDGAzbFKT91cr8eCpXNNLpmPaiwE63RwJhCx61ufpbxtRPY75tn26GH2jPnFzXAHcWFogeFPppN",
  "key20": "4ZzNDTV9i7tt44hMf2h73udP5WxBG6RE38CpxqSEd1m9NrFkoKA2Faq9YW1HgvpcEJPwQSNARTw88LWczrTaThd9",
  "key21": "4pHmNWtMBrKUGdt9p3fRrfcjaU3VnrKwjg7LcqKzY3fJb9Z5bqk1KzaxCWNYPpHisS3TQWZ5eUvovHH2434RLVdr",
  "key22": "3k47hCuXGFx91TifRY9uVEH2yVbLrikSjJ27Uo63KwgZ4dNUFJjjDkmKghYifcELdRKu13HzRUZRFDmRGcbhTUoL",
  "key23": "37if7FWYhPZBNzKfDTExqLVpZEPQG7pnFGMaCUkbPXi6LaLvyr1XQamBy9zqzsd8aGSXw4RFDruvssyXypBXxA8B",
  "key24": "2ymG3cmNo8UXBdwgbZNrYgsgsE3rP12kzr3LsifUcdj3VPx4EmpS17uAZSDYPE8wYdrUeRXSHyzBxj1bbvJNoH1j",
  "key25": "5TWeUCozrw7WA2i4t87G8Mmigic7RxAHPTUsYXt9SRqUVGKr1CB47xnDsHZ2baTKmAEGMVAW3TjAbdkqXHBZ3ZM2",
  "key26": "4QvNZ3kXYoH3mG7sKGLoZjiXE28NVWM8UaEvjvo2d74bJmWpDNeRdRskb8vTjbBKDDdiUsSwnrz1SYgQdc2jHjbs",
  "key27": "2NDWGd9PrRuMGfm1uw92aw7BwoQfocwePVQQj8xBKRR2SEvcZp7p4anWiJd9AXQt7he5jDL7rzi3m4BHJZ1LZL1r",
  "key28": "2nPt5bTfMyJEE2H9GQtMdHRZv7Tx8D8M6gDPB6hRx6FtpFa5EXRMU1G2bT6WH4NDFiJHubB6JhgUojBnugwuDG2K",
  "key29": "5Ugoz89183nMczPznLsEawWUxRiGbPqNxHEH33r8AzxkkaXyvYSkfdanQAUpq45BzkhzwsJ7Le69rcdsJQwSQ23h",
  "key30": "4wkXjJJBtuEja1vk14QfcGgY93VuRpjqBsKZnDRMtDYebUGMSS6KepS4uXfAskYZp6Ugg3pYtTbos29EE2qVQm6J",
  "key31": "3yQSr4qnRT6thKL7aCLK5E7uJDcNX7HNFuegSmzCCS8gi6KSs328x5aYoUNviNZsvNvz7vXa4A2DPLtgYchUPf42",
  "key32": "5Bbw8TDRUSCpY2ncV5UTCvFTgAiHbAf4G6Wx8qdXDbPDridLVptHvJaVS5QjNXkAQEU7R2EPdWgT6MV6HGCS3Vr",
  "key33": "aThxPhmXzCqxAaynVy88x6LxLTPNqQnWei9B6T8gt5GXGWtxtL2KfqHQbkJXC3QU2exZTdo4kD49dzdLjfzsLSi",
  "key34": "3BDyQgHKLtj9BJkRPwC658MevMP4TZfQHciLZZ4fQaygEW6ms3M6DXNccvwwF7kw129oHHbPrp9GU8JaKQy8qtoR",
  "key35": "22t7pQu2aeWpoPEPn2VFXng2Hj4PCd7iAyL63hB9dMUWPd2ZqMHSEPxDDsqyiLUcRuoZc3SeroCta36uaNZ7ETRX",
  "key36": "ALSvkyJzanJvNMvLoV8eTk4qa5taB7pkYBECs1MvUKrxn413KkJ2mUkE5heKDabzPfU8dSWFjZmfeWNe9Mnc7cT",
  "key37": "397s2B9Whs2VaepPkim9SFj2XDdDbbJbyRWsPryhQVnGxqfa4wGPKMsqShzZKud9Q85A92sdRCUmc2At97bMWLRJ",
  "key38": "JfkcETi26AjobX9rP2GvaGq6zuwbLhG7YVPCaWKSruqDDfzWveVEbTg5SAZVMssU4ZBjPpFVoKKJDLesQ1YD66D",
  "key39": "2aMt2vXLHtg7aSw8Z1UpR343NHCKq1rDjiKApE2EQ48Nr291KCHs3iqkjTsZCczavxwaVMdUuMhKnZ4G7ZCs5CKB",
  "key40": "5aQFvGVwn62YsstvuoDNnWk7Tjry9MSLsyTvNDuQUuTrZbvVH5hUbDAaJP419rpzm344wDR9XHU5TGmNuZRzZ2Ha",
  "key41": "5nG4tbQtJppoReyzutGUHqiTrd7zmwYDenXMgCW8RjXaWRWoLpp4tMWiJsbj4ibidZKQ248VbKFsUGMqagEd9NjL",
  "key42": "5ddKTxuGtW6JFxvbsN7TpXQhJET1J3R2Zq3XmZeT7fhq4WuMKu8aE44xpF6Wr6bZNPNXF1DC3zRvHsqyVrJupWzF",
  "key43": "wm4upMmm5AbAngnpwhXZiXHXMpt21sx5yvUKS6QSi8u77nnACn9wG244taS8Nr4EB4bBzWKCSwKUW9oC3aNVSXB",
  "key44": "ek1GtgrCgC8dtFr4cpEqJ8yPbyaAzyFJTJj5uT18z4DruZzRUJDifAfRihAChGHiLLH2KNAvSaYZ8Kmu8K6dgkU",
  "key45": "3MFmRtWV4BJaEPFBo7EhY1w3fw1GErwaQr9J2kfH5KDZLs8Mkoukffyu9zx84J6rbb6hHBuY34tLjSyL2Skc7MVo"
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
