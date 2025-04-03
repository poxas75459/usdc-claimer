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
    "2WtQJ3EwHUhZDCE8p2Uyq2dxLRAzjPJdzbG3Mfg7YYHRFp7WdVGHidHSTf1sFEUu1UivtZRNuoocxmF2dC3NmU9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GCkXnM49cqeQyQg8KCyyWr8MwM3Hr72CeixfCSxx1vzfwvJnR4qy1YrAaCesH8aFXoUxqXTt32gLtxopqaM8nWD",
  "key1": "3t2DKRnSNpgLMoh5raapyYUHgPN3XJhdvrbFZ9tdpYSsfKQ8rFLzjm1TPvjmYYcrysE7QJ6TQ9ee3up1gj5Hbo5o",
  "key2": "3evFTWm2Rj8nAT2DvVcD9iqh3qU2zbP4iPZr5Eyj6UpZhNd8t4AmZBiVRVcvg6fGgKSqGFDEXNBtTpUVoyFEwMaW",
  "key3": "XYMjXmyAmBiFT2GjaUFZoMuBn6grC5LSR33ocZmcfyie2f9T8XJ97n5zLsEsgrxSBviq8dgG5bs33Y7LaUguvuz",
  "key4": "2WSdNgE1JkWaH5hqxHozRKFMzTuubkLsoqvCG89w2HqPjzcAr66DYRfHrXaAY2uhDFSfQavpmz2mCRK67hNDeRgh",
  "key5": "4fdJFyrDEKinpEJz11sANhVgYU8MwPxrjmcVCoGLjaDiqeR27E8wuQmdmk7mU86rwShLkENStask3CP64y3PTevd",
  "key6": "gtov1pB7fEjhjxq6zp1Djqi1s2xw2AmnfX4Y5cSne1QbznEzs7859JSyCntyweRgEhwJaGJA1h4YpkuHKyH4Bip",
  "key7": "E8wDk4yumbMHJukJve6sfazF9TTGD79zw9zDtwLoNKJbDa2EeTFrg13F9j9LT9YRDFWfMCQWYH5y4ps1NpK8rQt",
  "key8": "4soCr4qAXxFULAzsK1JGv3vo7mmnKM8iDgEtGsR35J4Fp9LLvreUUqu3B7WndM31XypoyWDnFgUeH2L1yAKH3ufU",
  "key9": "619TNyT4eKf1hFSSDgGJu3VWxMjeppso8Rp63Xt9JN2wQBRhZNmVoBY2fU9HB8km9zzQfKuKiLUFXvhkvdwMAJvM",
  "key10": "4KwDCXAL67wbAdAeSsNchS9dhxAgH7eTnLdDD2nq3kcsBAXnK86K2qH9kqaXnwGsaysRdR8jCyjADMEK1kahJdD8",
  "key11": "X5JjBSNKDF6eSV9UyUEdfV4XrXVVFsMnnASviJoiWfvLf1m24ApjWXHiJ63mYinjm9LgfQrVsoVXkU6jvUcqfVR",
  "key12": "4t2MzD86f5zi5sCzGxVpz7qrDVZUtM5xVAQ1fE9DSCr1zB6Y58Bm3rfGuhVM4RYyQ28oiUUYtrCGPu19MawuDcU2",
  "key13": "5vvHmShrNseLJE23CKhd8692wgMWi7zboDhZi2P1qiLurHkmFfmrh8t6AechcmyKcxDruD3M6WwMhF1EyUM9YJxY",
  "key14": "2xjRtj1yc5igEC8D62J2zeqmcGCBdrGT8fZDygoBxTLKWfWcrMSKKdMyM7FkMejY4t5SAzLWNoLscGCXsuR6aoEG",
  "key15": "2agNdxRa4JsDnCr6ocRXfcjWaaLpt32bA24RMHgcydp5rTjU3zSHp8mpEDZyCbD72aMuKKS47ucwoxsuk8vR7wWz",
  "key16": "5HjxAjKWEHakVVSRHSiSyiUo88jCMp2wK1b87GmvwaL7J4Vp8BGSdmYTwq2oRBayvHYboKCogRvtCf911irCecYB",
  "key17": "2Rj6cY8FQPyPfChymMoQTjtztoTJ5FWSG1pGKfBNJU4FWQk7f67hRXwr1z44cbYL2rgCykzWd4X5fJjzX2WyMD6x",
  "key18": "uXsSzoaacinegahtKR3Xgmt5MBdPp1fqcCw8F6CsMLPjYDPDGMHdtD4CvwWcajaTAJYsvXeFBb2ejjoJY8Pqyx1",
  "key19": "4j9Jm5mgqT6qQN4KynE3fVTk8FurPNyhwD6q3ooFhhTV7yTEt1kfR7ddjNiD7jKVqYVZhYn4V2CSmmNeAMhk4puM",
  "key20": "ustxfAWezjCn8Ff7AoWVv4Q4mwNPfTHWZ7ent6fiApmXexew4S5QhT6mz8CHvcaZLtfgxTW7LgMD2KXEsPYKYok",
  "key21": "PK9PoMRktY3i6T5PPiygWaVbYGpjn8XwJEcqpJ2wwXK5DvqyVRN2czdeCLEg8BXyRaRT4C54w9eEqDYN9rJXjFP",
  "key22": "4S7ceDXyxhBYmDUa9bBTksX24nHF15gzxYGfWscaXZkRoBi5qq6YG42SGNU5S8jUubh1LVapFuArSjyKhRqZRcEp",
  "key23": "5zTGG6Rj1dmW3oMsa6yU2Jfnd4YfiUAmxyAHLxVg11y3PYwN4dfFvBdXF3VFDGzsKScRYUtwbf3nhyCgQoKkwp8R",
  "key24": "jqrdRfhdrVeEgrzWAgiYZ6SuQiS9cxPJqVFmwYV4uA4G4afDHjpmvWBkYQzaED87o6FZ4SWcGA5b9cEQ7hcmnQb",
  "key25": "4nAKS9x9cooAAjbBPV59pwT1pu7MHcn75nqxyZzE6bngz5e3YreQpuKa3yTV4YeJMeRbCFLr1n42M65XA4thWL3V",
  "key26": "454DnHyUmpnt2DenUafHQ3ngzFV3ghsdLBCJP7vEST9feNNjWaFzvt796gfGs3nX9XPpN9rKNWHqJwejBKFGAgkn",
  "key27": "RXVHAAyBZP5ukMVf4iKS7UTVY5X4zSe38qrkBMzuYKJK8De39ikwKxa3LhBoUNG6JxTXKbfxo7ubehcb6dBiKxn",
  "key28": "5KutqEqwoxFxAiWTwx4RqMQXW8NNTyCnQDeTsKJv4BQd4snZi7BLbtufxZvPLwvzKkZXDuCVV4FAgFawa9DCCMJX",
  "key29": "5Hp8tE83udUaxW2mD2nwXUunEmYo6ahf38EzsfmHfmSmyAcvN3pbwYtUdYXTdT9MoiNQkD1NgiEq7Bmih23CYTeW",
  "key30": "4GNxgKFQ8Gxu4ZfAr6rUaHhkoxuBsjHJ8ocgwM5LpN3L6aEJfZcxhcTm5fVF2TySjPDuWx7MPqKBiETxDwCeZtXm",
  "key31": "4DNztM86ezs6ktTL9Pq2CzFsDfjkMfQQq8WLJdNrfVwoqwa5VufbdmssiyNUcnGygfwuYZ4wABgi265kEioFQz6B",
  "key32": "2jH8kRH3Nii3TLrCSXaizV1E4L5mpQt6unrr44hnnBHsvNUYSmm1LKNzDFTTbU3VKhTEQKEKDGbrmtofqYUxXE9Q",
  "key33": "4nX3uhrAug3A3eQCDbXFZn78aBUzULCJBcMMaxqSkga8Vdwxv3PWRxmhWh5QcB1neSGhsW4WvGLSM918TcAPcQcM",
  "key34": "3q8G5jsR5fuZdNiz13DjZWkUFiA5typKb5xBHjuVf1iH8ZmicpfzbLtRP2zJCycoMq5nCGu7Nuprs2iqLrtMPixC",
  "key35": "52dqEcoBbJSMPjqiWPNyWGJeQi6H6Ytqj4bx2CDkxWa8mj1Nqi6vrw531Lz4ZWt6nyEPSjb2VeF9R7RDAPahN8Q1",
  "key36": "2wUKmLHSnooSH7bAZQeGVM2jgUwyaKd7nKpffJvJjsi163ZgHegvqrQRERcGHYbxiKAAvqG6egY7dYGKWkHSTW3w",
  "key37": "5htM1ghye17aKYznTU2NFYUY4ykF8QUyJmtMNKDZzWHfbxwQ4Xve49dUR3q6YoReEm1wuCLKW3bue2bS7KkSrgQ7",
  "key38": "NzaJbn6r3SYfVXxi2sbnkXwgzY9CRmXSuYgcb5nN9ahDGA5eiMEqJGjERVnD6fj3NGMFPywn9Arpgz6DQSk8aQ9",
  "key39": "52jnzXhXEBwBEjZ8RvNveHMvvUUL1snuw8YiYchSXpjwRZQE43DXSEcZtDuiTeWCNj8ZfgkcMyBwJupB359fkK3g",
  "key40": "2xp2DJHhBCJJv7EnY87GPKSV1V8unnLPxUS8USzpmXMToFUezPZnxcfcN1B4uxYFnqn4j4GxBp3xYR2M4QWMYBZ3",
  "key41": "36NvgCcFFPe4g6YKocFVe83HbG8SULHFTpqxVWBPeUU9h912VbiQ6ZBtE6MtHwVPKGNbfit3E36LxiG85jwH7DNe",
  "key42": "5eXePvU6yZCXLacvtB1Do4uBymFRGxLpmzPwCRnCV5a3P5QmLL4vPapTPK8GQUQUP2tTjXmjvbfRzY4CD2djMhhd"
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
