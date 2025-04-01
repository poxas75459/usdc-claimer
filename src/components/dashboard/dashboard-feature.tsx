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
    "4YuHGAByNB7GBktxbQQzpZK1M4VdEqnmY9PYRYH3N9dZvmVDuB5jMMi99tKUgUffuT75mqrwEcvQrUFepBucfaJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ioNKthU2Jy6dVnR1qu5WCBkQVWnqxvSH92WbfpHEqiYgBtYvU6YmgzrEHTU6iiWDDdA6JJYUJCL6JMEnM9hz55U",
  "key1": "22RVQw8vuo3fdcSK9HJu3uqY4QTTMEsHKotoshqtFojipNq3jN38WY9H1put6G5YsLiycgr4A4UfUZrSw2p8rvXy",
  "key2": "2FeAYiMKZ9uJdyEuvvuhdU7gtNWfLb5byd1XBPrEcHJXGai34aEsrVmGBvaFyTbiepxTFBkKQ8a9cR571LKwwszp",
  "key3": "iexX55CXtE6bgefqPv8BqFNo74KxfV4sKtoUxNFLgxn365k34Hc74KtJAcmHfsK8nwycFanqhvrBrjJydEXyGBQ",
  "key4": "AcTz199e5VZUTGfMSmsN3CuGmLySPEL9KpGPYcXv3f6oje5qACRAJargD7qzew3G8mKRtsoFVHTrRYSFKApUHZQ",
  "key5": "2LgotW75ypxmTz1SCin443ZrkkvRjXgikR7GScc9XuvNWKxbMVrKEF3HG2qdXkg8eeCy73N8WMp6BMCpDAy6gAmW",
  "key6": "3PmJtJ3dMbeNCxJRYRzt77sPhtuw8ofCktpbt5DXFVtUUJCezvF34Ej3gxcNxMX3VwyF5CYTvFo9g75Ycxgh1ipC",
  "key7": "23eVz7dEG2rvT5rxKBpMCcpG9MjDTEwugog2iNekmRi4C3LvoMkTq1ga7X3jNgCudGmwgppJW4eG1Kg62zhwuHei",
  "key8": "5XpJYwst11zUWH9ZenhvxQsU5jgTohMWNgkcgwaEJ8M5p74bZymtrQFJnC98Z4phi2mWwfHi4Wy3kgUQKVpcUHih",
  "key9": "3rCK1PRiKPeEBWGgrhGQVrPRQkVDnmxQCuMuS1QD3jHc9Et274mQVidazoUjupnzK2Eag6Zz8ithtow6oykKErBJ",
  "key10": "PpmHqyN3NTMMzWEZnJ8XtDrbDsFUJPP8e2zXVaE3jnfkqUyjmAALHaxcT4qtKixWDShwRrwfudwPQvN5f2T276G",
  "key11": "PwH7UHc6vFQfEoG8xC2ujJGZort8BLR1dAG5fWKSaXqaBRQQqQahysCHXZdF528FjnMa8KP3Rgn7DJS7XLhmKbc",
  "key12": "2re8TEW3gnPpQ8qXRTbk1LBhfGb7h3aJ4H1qmvupyoe5fqQ5bYfWyp63C62cLpKMVAtrdE438WPQ1n6RAqZQuqPQ",
  "key13": "4jn5ZNbjti5FNNzTW4gukTkr5drYVh5Jgg5hFrrnvdTuUUpaXvqmN54CQ2KkQunJGJAHrrm74zRmAps7E8QoVAtm",
  "key14": "3tYYSwG2ULgfDfxuPRNsbpGQMLZNPVPej1zYu11XjdAxtBcA5VAdTHmJCAQbSJwJWYmhPw2JiokKpnwW7izqgkya",
  "key15": "4N1T9vZGznofC9yr94PHszBG62FXnMDtQCczLxNf7zaLcgre8WPaemue8uWcxE5SnNQQvZuUPkcgQ2FTEVh2sXzj",
  "key16": "5yQMaL4Jkc64jcHsdGcG8Dm49KzHW5xabiFfN2GD97M6VwAeN92eVGitEeCGvpZTsQa9p8XQ4jL4d8ZbgDxTWyaY",
  "key17": "3uRhdgnnPMZknaWkRGD7FgeorBM7Aiyb4h6L2C6LcSvnbdkex5oboPRDjTcqNZxVou2Ax6xNCpcsEEZHm1CkobQB",
  "key18": "2amZ5eRJv1cgfV7yDjgSTcE8Usz4oHRVeoQbFKKzXYeNbKvToi7v5cryhs7ET3Upsj7oLhtFx4kgpDBWqAqnZo4n",
  "key19": "3kkeMFJtGacThkbxNxkHYQaUJ5cCv9MUcfZEGa8cw7MsnknfQM23KVWK6wZSWXwSKvEG58XkZ8RHb5otPaB5YrnP",
  "key20": "y7AMaP2exn5ZABMDkNetEiEqDGrCyrQkUW7HUhYmVF8eQrriv8pJcS2e5pkN3S1Rp5quRiqosBvaLd2qNgzp8vM",
  "key21": "5PPTCyjAuNc6dcRsqeiskuhMJUACJW2gQ9dBmnEq4UsUsBamgYYhAQgcZXvC4TNiMsZ6RW52BMK8mnevyeKP6jQV",
  "key22": "4b5KCdSkmqNm5Ej8CtDb2Ras7wJCTsJudHtYFVyWVURKr57f72kESc5Qq8irHpZrnzJxaUGgKzEKvotzwG6HRRXW",
  "key23": "2hmJ9d7k3jgcchAac9pBjhEhtZZwkjQWXBd2w31cynJaPeBbzqjmgnVf7SHt8TNr7MiEpibruktVhQpuHyrxUXsy",
  "key24": "4v3kzEMTDm4uz1qTR5C3XS8bUb1BJWGnX8PbUWy9i5zcJmVb8jpvp6aqPMpWsMTVHrPowEQW537bijZNhDq9TT71",
  "key25": "VYBv5prQZPpfZt4rSidcXEi3EbCcEZuFHMLZxND4B6tcm1Yn7m7YwwPnwGbmaeeEkWnHxzQ5firDLVavoAP8xdi",
  "key26": "486pKVpnbGjJuqEvTZsN8N8tEGYWvYTV44aVmRPvsWoVyqvqQjaCCEE8HHuq3JyfX2v1wxHRaqAmzjsAwjXYHdos",
  "key27": "4nnP8eMSe7kBvB5ohLh7cgX6ZyHhmkNbEGtf7WiLQ7cQ4S61bnkusfBxMrxhfPA6M8hfM8cXP1mwZWZ4QQuVVihL",
  "key28": "3eGiTdQwayVV1vQN4ymcoENHKnpSjxL4eZRp1ZK6QqmBtoP9r4FRRPgw4eaHttGSVFrJsF8QxJmTN2YL1DYXreEL",
  "key29": "3eBskcRAPFcMGXrZpCtKRjwffqVG6jiLTffqKZCtehapQQjZiUQCkivqfTjzegr5znmrJYXJqW16FkBBFcAqU3fE",
  "key30": "5orNvCCbDVh8UGqso6GkMD4XDzVFnqkbMGjaXVGgmfwPyMJX5zzzaB5RwpsY99J2bgxdxnYhRp3qT5A39gjQrUFr",
  "key31": "r9PD6ZbEjTEwJCx93GvUDvueamuNssjMt4yKVpDdmaqMQ6Mt7kTd5BLyZdm1naRVGWXkjcKY8fVtSsSgJQYeYJw",
  "key32": "2fkgx1HqzY1cyGoum9C1XKsX15h8LhSBXj8hXCuBBYL5YPruMkJriQk1bQc2Y8ih1ar2FctEGDrhLnqQBftdfCz9",
  "key33": "3hkHDJGoLST2PRYPtJBmD9RcYb1cTyYBhjuzpvYQENnMjCFRmaJuxXiw2J2yfseN28Sc1bKo2RyXNhJ8nz6L4HoH",
  "key34": "2anDAfpjnKpzrNGaPaYX2WAqoz1PEhkpRv8EGdHAPVt6t4buSKCWwcmLmvsiB7kcFpdsL9vdaVm42Uo6bCCLyc3q",
  "key35": "57uJqUTEXr7WTX5ogceFWbBJwkt4iFYB3zGz5hDCmVjm9VG3cvzDFmWLPzGLwTc45w2FGdTphjfQufwv3DTQcvEs",
  "key36": "2gZjoNsWXYQc1mtQZbp8XucYJePWx3s8ZSwWukAYGV2arqAsSDybDbkaquuBja1yoRMdcHQuAtedjzBZxMJ8TiGw",
  "key37": "3eHGfS7Hrwyv1eE9GH4tu4qEu3uV5qzJRYAVs1CMZZTBvd8k8j7Gsw5BmLs7EnjAdF2YpCCSC2fPUqCy6W4eauCa",
  "key38": "5qPi7bF86vmCLeNQST4mpTGETQdNWcbMJuA9sFb8qqD4i5qdLx48esr6gr8Kjw1etxtoW1PYwwVXFHQhGWNQPhsK",
  "key39": "2JmpJKds3RozyNU614fk83PrmPcRXo6spNw2JUGgT9vrtQJCrQCFrghVUN8FX8sVXTX6p8rAMSDczJU6Xowqe2gK"
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
