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
    "5z6PHLfjRC3JJwqvrFVmb5uYEZKEV8D8Pw4LVX22hM8bXeMyE9NWCT3bLCeykfC26Fu2XoA5hF6Gy484Hh5WMrqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22xGuKM5FLunnpZZnPUTWEPnr2Luon7JzkczkqvecJmzu18y8SbtUCxaekiUZbQF9v7s3ajxuZAL4eQivRacE6d8",
  "key1": "5NvwuDYu43yrYKbUX4Sn4atcHDUo7Y5EgrZvPMJjGtXyw5C3gDyQG84tVPTWgCXdrBWkKD1639VMfwRkDoddudj5",
  "key2": "2av7uW1H359yPX5Y8mLN4m3YzwyZmEQbrGXA3uoZjRj3Zv9vabNN8wVJ2zBJNycYSSJCcbaNFRMyw7BGXRzfiadY",
  "key3": "3WjEnYg8QBPUNE79MFPWfSAktVUwuHU37vUMHe9AY6itkDFzTELpj3j2aJh95cSid5aFhhFgkmZSBu9vshJiiKR8",
  "key4": "4k274g9g35qRRMJ87ubVrQpULoxLSiVSaoakA6BKVj47pFjhRKiTrnHZVXKXZgag7uwK1ww8wPfV8aco1SxjCjS",
  "key5": "3MLAhK8p8F81KGDuuTTsNyXqs1GAMLSMGsKsGaz9XrpgNJsGdWWkWKkgayLYEpWgGm7cWvb84kkjefM5Xg4AhuFd",
  "key6": "Shw8dTNfnwA49jvACiFykyBu3sETwhshChsUDzqhy3qD4ktuhKXjNLmQ4hjZPDCqMy5EFK9uYRdr85mvue72pAS",
  "key7": "Yp6RHvJoo7CSgFpS2vpeQDdEcF6AVoAbndFGrvZx2siASfkqb6GGoabzjGaxo3Azid69RXfBHYTRced8stitG58",
  "key8": "4MmdxHh9RXbQ4dq9P3J4MoxbRCYYHKU2MByCQUr3NvqkLMpWKFZFzCqDyqdUh1WqV3CuuEZ6jvtmUoa5oEpf1UzG",
  "key9": "35kgvpVStinfHf58ab6bPb5shKKqxcUpoohpiiobz6ad3R1zcciNSv4SYPwveJJ1pwXWH5R4M6iW4C4Wj8Hir89L",
  "key10": "2G9cxbLB35e7VSDWLhSEdNYQRA7WSpcmPghapbnfDC9YJM28xTCsnAEP5YqJdFAF4kkZXoyJKHB2hNUhRKCsCo8r",
  "key11": "HbcJyM98v8rJrh1Da4oV8Ez7rxsiceBcNrUvZSdCNy3W3ciFAqZqgxRkPCeiqnSwV7KSneYrZncfSPDVb5msHQd",
  "key12": "2CTFvUQCnHjzKz6ft66Mz94gbVhkfxwy5eEDnrEtj6L3Lx1feY7KgjyPhBwg1JG7fS1xCwAuKx5mCu4qvCxRopzw",
  "key13": "5Jau3gm7G4SRn59ficfUnPwVngTX2c8KZKGZAYX419GHs3gxyaLniaWpnaZBU9oSfnBAV5jwUnrRHJnp8gZnu9rn",
  "key14": "65xEP8XyaGT9VsRyU2XsbCeCHai9uiQNhU7aG19XUKbj4apG559thBKvVNfQfj6RWxkweKenXLYBcQUHuSkfHDf3",
  "key15": "3x8UoLyEKwRXaNDhhQA5E2anRmi7LYpYudowkPyVbSZxofoRKjC2RxRjJyDPks9P3ZeHFShpstf8F1fwAYYsYtNP",
  "key16": "PkgmjcQX6h84gnMMNdJHsdkN6hsnHUJzhCAeep3WPwuHoCNV5sxbMKfXMkAwXyF2FMWzCzwC5YnLsWhqm5NVMRE",
  "key17": "F726H51gfEcUzHFo4bvxYXqeH4NC8GshjvzRJfNzPJR5NDRC8sUNbpJZzrUH94Us6pAESczNEw7gq6RxJhi9vee",
  "key18": "3e4EjVNshkLryTQBrT6adHKWQydfaSFr4peDQisFpmiDNnLcChdqT18D4rkEzBLKSHuZDrMkrVJ6UCPGe6eLXR4S",
  "key19": "4Eb8R5ztNC4HQPJxvkKzXVnidodRhd8RLqfWHuesjgAnKbMqjtKdKtBfbnviTUrWUMHA7uWqTP6U3hjGrSvn1YiE",
  "key20": "2u9SaLaBgeCzeKXzXvrQdc7yrTNYCJJND21qDba9Gv6S11B4eVW52tYoJoBWTG14phHeuG7U9mcjm1rKuaZdY8jj",
  "key21": "3FGMWGstt3mYK3Z55nieNbBBwmKzHPajnEfHrNdmvh3D1CjM1FpnWUfDPbDd1qR89e6n7N2cikSCAsufSVfxH2Zh",
  "key22": "359DeiW9LS9gCucozU6s38xkdHrZea6rYpuUgrFDz969PYWL2nrZ95qrT2VmnWtAQjZFGpVNkAg6PC6b8ztznLgP",
  "key23": "5F9apWaqW2KvP6P6Hg7wzj39j4gj7bF651pq5dYqGNraKCGWBvt9mkmR4xkrMP5K7TagEeiCHuVQGJ2zZnWL9Pjw",
  "key24": "3xRrF43EJ7vSEBBANH744Dm4VFa2cEeiyNgqdznNZhhDj9irsrM4KZ4a5Cn7PPzdrWcEpKghjtownk41jSLPPtLr",
  "key25": "2HwwvUKnjHW3KbT8twVjj6rdXUQnHF5zWS5ZU5hfV5FzfBRFG14ucxAnWNPhzkctaSe2PkJvCZE8j6GRCmxyPaPp",
  "key26": "2tEw6UxAm8qYmSh9jiQtTfwry8CVAsQ7yrEhngoFJAVXt21MqC6hNovJRwh1QGWRg3vhTVg9f7d9cC3KGSdoEYFb",
  "key27": "5JPe3tiHM1JcX4Yn4akFp9bbgEgycRPG1kKUjZULSDi4GsSdnvQmRw1afWQ9VL73JYkr9tfb4fdgHpJeEZs1zNER",
  "key28": "5A4RS96WHL2DswQytX4GXqUBfa9uzxoYBYzCc2jRTEqg1Lu4QL4aXvEzyDUCfYYu66TfhjoEBBs5V56mPHwVJ2z1",
  "key29": "54PLNaCKrSoByDhRuN5XBSxUp8aNsmZASM5tPt8nYnVRzc6Y7CjLkyXMgbXK6SpMDVkHYt2FY2Ndpm8Z9vAHyLaM",
  "key30": "TXGXxe4md8mazSGVdeng1jLPe2ZzGHbBGtTGkDLW9XP9jEEKXXMitiaxLQocBb82L68X7EHQ1y97xTLVyJGUiMW",
  "key31": "3hvb1WGXbPtkzLUh28oTW7Pb8toDWP7LSfKpUbJmyKnfVZ5gCbYy6h7fAZ2xzB6V9raF2dur398QH3YTyVTyjJih",
  "key32": "55TLTRdoFp3m79Wb5AFct3wpDX2ZPMLQbQZ1ts7jtoVMjgz5qNrawneGbVXehqvURY2kE1TYJWnK9iEgDwe6y4gW",
  "key33": "4CcUtQqym3yugJxhwfWNZioQsG632yE1wS6LoSQeP3XEcQYMKprZdWnD16Zwm3nNWw7W7SSwVPDhpw5kf3ULzN4r",
  "key34": "gQFTFxg48Tf8ceuMHVh8bnV4sEtfCDCc2e5EjdcaJ8Q25g3TT7WtSmbDEpzHg66HtV1g2B74pSeBN6gKjxrMtdL",
  "key35": "hqAPTZ9JwvvfTbTQjdQJLN85aXmoc2sY9fi5FjJgvtJVy7zKKqAu1BhHszQqgV3Zx1o1oPSvgFsViG4Nd9U5oNG",
  "key36": "2bkG63gEd9xN6jG5FUKgAA5SrW2oZNtTRQs1xLWgN1gcvmLRJQ7w7aNXc7JHnpjBpFR7iTfhSJjWrGu5MSjzuTUY",
  "key37": "2KeSjJjJjuPvWWbbvCESEncEYxUDNBJF6fbasAggr1hbX3aC8SG9SXN1gKs5Q8UXHHBhFrBy3z5LK4ekbsk7V7Jb",
  "key38": "4Y9ZpaXoPpFcJmvTbjh2gF8C34fff7MrSLdT5vmEcqKSgxK8Kk9sYDKBf5kpaWQLMJtecNCfxCoUA7D9Sca74ED7",
  "key39": "eCjsUzsKJ7AtU887EwLbSVU4y7wBz62NyWQY4Yo94cdg9bopM75BX8L2bMwRjMJQY44HNqxjDeQ6FwkxN3RRfH4",
  "key40": "4bCwgX2dmqXotwVXtsZ2j6QbrdM3qVXLxRb99PSfzXwKB1FQatgz6RXXjkqFmSXGzhgrwfQcG1AFZLCt5T6VbSXQ",
  "key41": "AvVY1XnUikHhMs2EMXCsJcCMjR4XmispnQXwXu8wtPWTogr7buAoDvJXESP4S6LTu8qk5p81VrcWaSB1G7k3xu5",
  "key42": "id6gJpaA9DPYWpax71E4iEDbrn7ahP9tWciXuEPWSLJsiyxKttXqdVzaZh3MnersQ4pFMDEJCVNZrntkmkj8mRa",
  "key43": "39gR5k4ycXMDZYjgdmfk3tu4SMKPryxquPD8dZp1oQPTDxok4V2zUPU9M76ZgS6PKmuiWYGGNqVionxkESscYe7H"
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
