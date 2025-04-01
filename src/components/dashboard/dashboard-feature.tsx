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
    "45QhEHyPDfLknf8UAsJ5KRZyaZRSXcpu1Ao1po7N6r2tMmfRQBJ3yrisPteoc5zSvhQjGFNG7eh35T2pFg7sNG2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z8QAdac1GRxQw2BnVEYY8uLHvx5y4AxxrgdhmjDXuEjkznpPkqYaFJvvCHLC23YdZDoTgyYoMmDDVZGiDqTx3Ju",
  "key1": "5TF6Y5Vb7xKJqWzEcGVtN9qGBoM5s2NNi75K9JcMkuqkeYYxgQEccAfiyFqhrqcsoauWkkDRJeiBnyMPo7wQJL8V",
  "key2": "3U4Pe3PJ7Ja2y2PkRyzmshSDn27JtKSYCHRcWEkVZbQMJoeyQGBtvF97ML9GEdLyGEJKDRpaMP2bxcjDi451TYX7",
  "key3": "2CSewKfGrhvAHVKicRMcUmFmKnTKiAHJaGFrJyofhVmFP92at3hBZkoT9dfBknR655fQzaXuEqopnYFSY8mk1cMR",
  "key4": "Zgnm3yaosZ4pJg1N3X3XVuLLdqzcKteScy4J8vuYocq3kVdLwvJkG2HZFJhGKdrajt2ZTMuEyhMxUwAAgZHZGbk",
  "key5": "2n39SorBDkFGPwrnB5ytvfQisHQq7DZq9tCRaH5AUE13X25v4KDKHYJHxCdjw2HEwuoQCqcm5HD4i5P96ze13D2A",
  "key6": "3QRQ1ui34Vj24oKESwope2yBiUaN7xazji1XtkLv3sVrxGBXBdxvcwqkVFnsQckRsYxi1JNZVCsg4JiSPoDTnw1n",
  "key7": "5hn5Q3uxVBnnh8t6QcuQrUiJ3Z2V9Y1KQjx1bMywZ7AZACH1uiKZivCYCiT4GnxpKb7JoDDvatG1vu2ihLf1VLRa",
  "key8": "2wj5Fp7hf1eBKGEuPvV9Tnhrc1dmeLeJZndqhPw7vfM4yQpA96R2bBdQzJ5JyG1hFzJUxEr5JNrHT9Wwu15MX9HC",
  "key9": "29yGwiWDF3KVod8wn1VV78GSMnsDZJ5cDheZUKJTrTwwighvxjEqEWc31MaRTfdn7XhPVGjJRT71JDGZXjWaGLuP",
  "key10": "rjHuxip51wd4x6xpHTLAfSArvNrdS3f2MvVgLDxfZw6yCkxCpn75fmBdpN4ScXENvuBxVUotTyUz7sJ56BtdKwB",
  "key11": "5LKnjjg2FUKgDDTQb9mFQdkAmrYZCacPkY4buFKKJu3k2zc4iSY7E5teAQjHTKDahXz9kuRmWva9Cqs6FQzHZWQS",
  "key12": "44Mzqt2mHhUxF3Z77HAbC6Tp9EAAHPgPJVZQ22PPi6KvFHJcgJZbKoPKsKP3XPbfpMMiW3MsysMNBLT8vCFLg5eh",
  "key13": "5W91bkaYNkY8FzVoNQvkFg4cG8PqgLv92xzTiDt5eTVDsFG4wB5tjfeVg51VBoGBVZbsycunttHtLzWRccwBREzH",
  "key14": "2qcDv5jRf8i4Xt8DjckpNCtNjQBAmYaXoUam71TFra36FhhKcyWdX5mHm1LMzn5qHpodXUXDeHvmFMVcVmQRPSdZ",
  "key15": "2N9Aa41PYYXhT95c2tUZiSrmvypK8LTVwsZFkpUxA2z3Dfu1CyqNnfNypNZtxgDbnMenui8hTAEXLCjC55mUNWb",
  "key16": "43GRZ925fR9TV5oqYw6EC7JEZapsxywZPKpfa92g5SzhrGxzxvbFVJ3kc2jmcF8PhKFHo3WF61S2y8Hj1Hw94mbH",
  "key17": "4CPv2xxsF9Wk2cmbFbApyz5G5HmMErcbgXoSqLFC2v7Cxxe222L1hDansFQ9bjxTWJYPozMi3sEK6ifAeqE5eTcH",
  "key18": "4fnULBofw7kzLKtvd7FKSpJGqAzUp7sRCR8SgrDbdRhVd4zoaBJGGAHEKT9k7MRyvoHGJwjtoPDn3pMd9CxXtEFR",
  "key19": "mHD1SwzhvqZ5kuhZRMk2jeRMrpWEr3gdJXDqPrSGuU5hWmhRPxkRKy9JHWeW7Bn7Gc1PmaUCF3MmxtCjCUC6gaz",
  "key20": "2TsSyXDgW2G3v3MWbuuBmvL1e8BpBP2T7Tym737tbfZhsf6WqCLEhFkryJCogpG6Dx8tHfzD8cifU7wwaPbZJRBV",
  "key21": "hEDjYeHjmUv8yHGg8aJd24kPrj7fJSSUAddecfTQHEMHjFseGBaSrR8HiWAx7e3VDzetvgiXKyTs4NiD1XWCN4a",
  "key22": "N7x8SZQUohxTffzZCTwdiV2rDVzoJYpSRsSgWaiVFASJBcBN6TxjuJmNkZjWQLnnPSQMkoctcsVDP3t4sbEtE4G",
  "key23": "2yYf8323ChLkZrjb3KfroSm2Y8eRUe5MEV51KQoNb7LZETv8R5W5o7Bx6R6VdQcatvfL8QHjBoDUS7oWhqifBHk6",
  "key24": "KhSbiCeWuhtT5yAQsP7saUNfpgR33iHebMxDiiW6j9htTMQk7mo4qtEEUqxaGWb72hQjwGYKwf2yCi5s6BbypSa",
  "key25": "55LMS53q4YgQGJ69MGNozUQ98cyi9CU5FELTA6dnbMEtQahDE99LyozxjbCeJKHKWKEzXgbFNqZV8WqQzAQgYvZK",
  "key26": "2zwtJeWe498TfU7o9hSrfWDiXfuZEUZBri5Wob4y9pZXzzWwng2tVwuUwDmAH6SKZpvEY1JtpWPRFz4RY81SX2N6",
  "key27": "CLLanG1Y2QjzKHr8ekBAzqEV5iTjyTn5xJmpJY6PeYS9T79MVuUMmPky6VKrfkWME4hkt3HMFDKMTivz12EU5xT",
  "key28": "52bK6Exq1WMYpxTtQv2TSNKH7ofieoUAW4QaSXgpAm7Y7iQ8X3dnDX6dzScDKgyW4g4piU7PsAtCfFm7YFkX45D",
  "key29": "43EZBymgFumJoC3f8fxpaaJPARxvfr7XdZXD9CzPyi38LfWygKLUM6ZKTAXwFWenAccYrQ1hATW8kWCpSkovY5LM",
  "key30": "3xtvKrWRYSJDWyTUebEq7r1dtsBzzuVJtq2xt3Rz6XeB7VU2k9SxgCxCZ1g4gM5Jgx9SuswM7cfdTjxjVxzManQ7",
  "key31": "9U1AqZ1eaBpARS7WdLzy1c6ca83Cv87Hfy9uaHwmdiPJka6NqWwjpp9kykjfZqfk89ZPTqUrjL116MHBb25ne6i",
  "key32": "54VHy1w7pjNghFqFhSVchm2i1gVwmLQU3qnpkixJMeCbicEPFbtfvjwgjt9HoBqiCsrPRe2VbLWYFb5QXtruJcB9",
  "key33": "2jyKowxq3ZQ3u5vj1jURdF5nKf14HexFYS2aJ4AcbSDeSb1GmnXdHBYRybc8DDk2e4XW1DpPXAV2EF1xp72Vp7Vh",
  "key34": "5DEZjnepsuEat77fAKnNbz3sjhjAzTAtgXeWHNb727C6aeN8Qtwb4TDtyfj7TJ4AzrmPJvoL5YKxKFrr4AVo97AL",
  "key35": "2jX2kBQRuttx3NuU8kuRWxpQdetTNVeVnB461ASHnTaVyeq8Fu947EGvnwpKGrci12UU9733mu3JQGMcvdeW2Lnq",
  "key36": "5hFnPoEVXArCcPVCpnh82E5hS8JeK1pxhEMnjrF39KfZiHLyb7gCiUWcXVmHbuUxGbihywURkSAk56bhMkQEhcu7"
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
