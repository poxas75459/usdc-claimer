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
    "59BtDveSyZbNWDE3FopFbwermuuE5rs9d2LX7owSKET44bQQGZPKHPDd8YYZjf86UA4cvSo1SDPXnf71mkAnBywM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NgBDpqjgYL3K9fqZMGrznpDwCtppSWJMFSWrdtogzJtBxyxZVU5QypnwVwzmXomwBYq69QDJBe4kt4GiSPLPv2C",
  "key1": "4gHWXQL47HApAriyK7xTLZSw5GSxT854gsRobHnorUKj3eUnQJiyRzaZbjVoiMequQC5D91oNau3KSSMWsiEGgAN",
  "key2": "3BnYkaMFSmBYnnF6emo53WheN9wvJdVSq9XAvEYQbtksbrnvTnfTN2bYLpBDtXwcGpLmprg4NP2cSJyZEKq9e9FD",
  "key3": "566DMsSBbifg2XXCZDJD2nAtNryjiVUmYG3uLNW2FTrWYAuPgCj9uWcgCqANdtkT8MZE3fYHmo8Vtt9waj3d9eWN",
  "key4": "4kYAa1g69cxZ6eCy3AtvHSEsJggRvm8LRaG68Zv2HhL2bxmGJiWMAPSnDz2RaSDYhfMgqkpAmbdz5iZg8uEUkPJt",
  "key5": "vx3DhPjfhfPsmkGAh1GQA98ugrcRwznEZSDnjeuqDaEeQUhiNrEZHfN8r9ugwvw3kSfgnzwpbQENFwQ7AmiXp6D",
  "key6": "5GfBPxXHPgRqmWtyGJdazjMX9Zc4vFWmiYgz3oDS2rAeKvJ8DMSNrrHvmMjgGxahoTKvvXoW5Qk5GrMfHdwtekm6",
  "key7": "61m5Pr8Yy1DJfj9wxNiNpQoQLT3tqwN2gyyBEsZ8kTeqEHqh8tKkc1rRsC32sqiEEz6CX1oALxp5mus6QMqVATSy",
  "key8": "4UWqk6b7oaQ1FxF3TyZydPzP9hXmfE2W9oZq2Z2ZWerC1qx89ywK9W14sKH7T8xejZEMy9SigihsGszzxdwRPVc",
  "key9": "4PaBk6W6MuTmxNouDFrdec5SjxZVE4u1qGNxxcAZxftKeegr2574SVP1ZEehpoiyHcxbLF76pM1pkg17jtEtLJCy",
  "key10": "3bYx1nuG4tiDHV6v1LJqANj7uQq393D4AUutPMHMbRh1DgKt4k2yV8xgCLAA6BK1QQiwts9MioMLUTyGJo3Ah75T",
  "key11": "5Cs7C8u1ZRvZMcysAGieqU1nxmEq8BmAWJK5P1wqBDoETGBm97aD13KzRjs5NtGcggwhZNbQNLfqjtCfZ8fpYenx",
  "key12": "3JspVZe6vKw3LJHkjnaKVUVwdHBUMufNsC8au6mG48RmRNU8YSvjKeQa6N26ShJupSTsSHPZCMVb2Q8eeW2atGW4",
  "key13": "fbuqn9obSUoFsWiC4HB95YLipPVgoYHTniYQrkRbqqaHtV5qFMhYUigwBoKvx5LgkKdXy3WykUSCmG7v5Ng76ag",
  "key14": "41LTjQ58Ly87DS6wS4JUtNStMW7wPriD4PHSdPX9vjSW839qGdnNfteWiB83YWA5VcK72h3FgtGJSvDaeZ5J6q11",
  "key15": "3g1VZCZCcFKnnd5f1tHTRqWCuJDA8CGTcfptjAWKFqUFEzNWtQoKfZj4uvQ92AqskGstUE8R1hMdxPnaznBzD1HM",
  "key16": "2TNxuDpNQK2LcMz3gSBGjBu9h2KdQ8ZLh1sQAtweCAuZAd8w6zvDfbFRHLN9SNCPednWmbrej1okcst3Zt3YgHq5",
  "key17": "3f11sc3qDNobEvTkzovQGPJXDEpQCcYvdpjNF9V1Q9AesWQ96P7iawLKNm4LgHZJFpkqfeVE27uF3ePgejTd6Hcu",
  "key18": "5ST28EdjtFtiFgzNaW2BBXuzJ7fVA6NuRNFyKe6KpE4GLzixYnpLCPwtgbur861wbK9qJEP3MCwEXHJERZCQcL2g",
  "key19": "28c5nYXc1rQaPqHsG2dcZmGrVfKEseFG28maC1b2Rgai7zqZoA2NtmAzb8MiWwGWqA71MvQY7tqubYhUwfeS8rF2",
  "key20": "5y3SiprhickP9FgT6ajDGPpwGYA3R2M4cLZqKM5VshPXLFpdc3a5aXCT9USVgXXyufe1u7RwUYDj8t7pPwppfdWp",
  "key21": "vHyrWGrsMRBGEyN6rwqSbXWJwRiRhHVbQNK9KnskGcCZdWheKDZ78t3RavR2kmkZqppNCii6Y1b6BwuM33SKmWw",
  "key22": "2ZFjF2qM9qBNdwg9Gr6Affaz5K3KaH9CMi9Numry3Cu8c8ZzFQQc8ofKRe2oATgNJQwZZ2dmBHhyzcLn3aFHGCV9",
  "key23": "4fzWoApgi18X3V9DLX2q2na1VmmUS2guokTr77pn8KSVDtz1rhs95Yi274VvzCkKgkMruqum2TenJz9LsGNSpj9f",
  "key24": "5h828VLXGyJd5Bg9bqKyg2YLUrMsUTe9AtbiQcijxSGAM1Tprkdwc2x26HND7u9FsdkmmVJLSvx5xZ2uhpDoaha6",
  "key25": "b6NxbddNauc8wCb8BtgzsqEtWVYjnLAaxPwmGshrcdErK75nCaEBYk2yP5jDE5RbPK2pnj4YLUoUuet7PPFUDi5",
  "key26": "677o2cuaWrjUTbMjQ5TGACkmaRgKEY8Zd5Lcf5pGkbaJBTaqi1nGJbso8UBtX5xVeD7ZHNT1o9gpvzgPvgAehtTe",
  "key27": "5YDHkCFSmjMYqGjbLGT2foqbgqmEB7XpAYyrMJYppJwjhv2UZDgdUwUB73E7Qi81nXsM5S1Q4Qr9YstpKEBkgagc",
  "key28": "4cQTVoWfDwmDh71j5sfTwwB8d2pKwcKoiHYik8NL3FJ4kJuPn35CwZT2SRhPh7S9UXDpfBwvWLyeNX4RxVsYLgWW",
  "key29": "4wGiLKP7bdpcRjBjFJnFr2qjckJdKb15QEyzBguAMrogJwrqJfNLk7FFF1oHFNjixSDFRac3m4odH2CVit8FsP3p",
  "key30": "8W8keknHHmiWzxfuAEMSv8ygRD2TZcpYEr2FqxFaQ2fdQuq9cMxr8nbJ8vMgE3xyzcJVtdxUDVBUYx4QL9jF4cT",
  "key31": "aqAENxvG9oxcUqhX1j4rcqjuki9nrzuqyGPVDZKzNnDkf1WzdFpAnrKtHtmGDSDrDq4bmyAkWJT9QVeLF3JWEoM"
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
