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
    "2HcLi73UL4qrsCBzxktWQzXjiziNhTgr679yxyNNccsBwTEz5FtAr6FqDZDnjkA5JNyHDa4U3WS7b9xwft7xLeVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gSYt7zKD1B6QzPsmu3PkPgwaBLSEyXMrJEjkAnG1KvzTBkY8Cc7J4h4asWQdQEzbmEXDoNZV1xZb48Vdt75ejoL",
  "key1": "3rgh6Wj6JmBQhLZ1G57doM3vtdW16JdAAMi5NbNK7ziQddB8TofekETRYWPPMK6NLj18yDEHB8W4oevfUhTr1aBf",
  "key2": "2myUEwWrw6p5WYLhXD54xHohB5L8ehbXkmixhaxQtp3js6krWc5iYzTccL7rHTNcwAC3z6hZUqVkxYqTZnxvQwk4",
  "key3": "392fVp3RHCLqHs4TkEXh7Nv1YReY6HzsWjSfLcRqVjVv6bBhY7uAnbmzsN7sKguBowdUFw1rQmBHNgQrdt9qhonw",
  "key4": "5RGffuLWvmfKxtdshv7HSe2nEgSnaYKsj5ShyDT7UgFvLFF662YKKrNZoMurRYBYMfAPdmCMg7tpAgtW9AeMU3Pm",
  "key5": "2SKgXjvHnc44bXx5yfA63JaXa9xonP9M75xqQmgQ6voZtM2yKJ3oP7FUEJjuAg82m1QwJmRX4fnKcZsVbUoMTEtR",
  "key6": "3rsr85476yT1KVetmssJaVucGfRmxavzrdDJY1jDrjGBJ5KVwPGqNxsL1DZwFQjCp1iZGz73uDHRNgMLbnHKK6aC",
  "key7": "5WwsYrFSSGoxTnzFpTeLMWbNcef43zizetArmcTfF5Go2joDTYVZeUNiEkSA2zH3QCKtShkzS3Sp4cH7ZXDhdouo",
  "key8": "3NkkkLmRxzASniBmHbPusfzvUVyNCSknW7HtHsQtVfStsNXtK32rDeUxhwZXMJEaYzATXbNkgXAPuiyYGwcfem7n",
  "key9": "8TGCbjmnbo95UtU1jVi6L6QDKZqiLLgiNsRSsQjRhUMr3xaHyqqop4Xnkw6sMXT2mzSN9Vh88L6GhDvXiERNZx9",
  "key10": "3UZwPjzZepsAEj9cjXoQkDqXzcreHaGrY6RWYaLnDhh9VNnaW2dMp8NvCRspSkKTWcFJL4EFU3jTetVe8Bhr8yqu",
  "key11": "Sb6Lbi5uxe97HvxUXrzkmXtQGxpgFCs7F8Jxjr7aD7YHY2JG8cp7BVnTb7mW1rsiJ4tQMEdaPrhY4P7b1VLcgnq",
  "key12": "7yUi1pHZeNYYmQ3TrmHLuobfdAWsWPnQ4X9ULxLzc8JCafqaTvvtV5LnCKM3AKx29zJKSpBPjmhHtNVEh1JRPBz",
  "key13": "2mgHaR3BHza9HvoovCxYrBWqTSipkkhqdXqyxZaVjikhn1hScUK58y5oNNPvfFTvw6ZdcDBLBFJHxMEWbtAijEtL",
  "key14": "58Lk4pBWvmBjWc8WmdAPLrpapPwvw81WBL8Ac1UZ8n8p1PzyDJDkRGwV8iwhi1QVoXv4vNFepbxn33UdktpSaAof",
  "key15": "3bcX4tanAxB1rzsEXkHZMK17Tt2WecNXDAjeqnj4AxLDHkc78rKkGhVhxK2UdDp9vRXHk8WkYoWyqTBZwTbthioD",
  "key16": "JVokyxp8YxPEqNf4v2qnusuGC75xTNwU2ogNbitjehjXPHRQbjYi6NqmNmaT5dSL7XG34MAfA9rRyNkCR9mwsR6",
  "key17": "5KqTxjHYJc1tESbUCCqmK4duxXdLezoi6ofChEj8K7GY79MbkY8h1jm9d6tx7cXcZs4RSFns5rEkqXvAbt2x9Bn6",
  "key18": "5qWLShrrkd3rxjF1uBrjKdzq7SqVi4Cv2dDBAvEUfVQuq3iQBQxp7wtGJZ351gyvrkv9fc3Jauu3AoM2NNnKqXS6",
  "key19": "4MKcWFBirSLptGYKmy97o18bQ3pvdnf2b8JMNCpEUmDuN56JVNcQZAQFFBguBmymCVK1CfrdJeE9Rf3MiTV3Sm14",
  "key20": "2YtRGH2VrWZiRvWjXXUUVrvtp3utsEmL9DmesSHZwSSinS15F4NnATUuhzubwHSiz5B8NfgfWuJtHjj9JjDMEo7Y",
  "key21": "4c3iiSNtJCdXUA1CV5r4GP3RmtA8hartouWjRequR2JjyHjJsCUpE6jQVYe4GU7Ye9v4Wn1kmYFPWAHUZ3hKuaX2",
  "key22": "5bhLF1LdvgESkiZZYbpmu7wn4ZuQjxyUmr15XKBHBVuYuYrV21SH3FsV8oVqSv49geMTeevmy2fiubpu922qFgre",
  "key23": "2WBx92RiDYZCXiN9PfqUHneFfX1o6uziSNyS5GXHWkzVNL5Njmk7MRc3j16eSCtGRBfxqhkyscKkRz5qvS89V4Gt",
  "key24": "2GHwFiK37TVcZD633RoCwthTTwnFu17bzqNr7tCS4BJjT3tfuERougetAn54czSS2Z9Lyu2Tpzu63Dt8j7TornPi",
  "key25": "3Ejq3eYFsG5C8dMVAjsjcW3JYnUqMvYE3KWFf1GYDsVPijUWKA8xgasv4XDPfBnB7eb5e3vDPocaYauGXFYUt9r9",
  "key26": "2y3x3FF756BhvoBV8rxByUHc858RMx5UWCqLMFpZFrM64UVSjQUd2WhSMHkqpeHrjsfTrjMdbu7i8rCcq8WyqKuG",
  "key27": "5remWytiufaphwXxAmzdvkFceGTeg5DBYTvLWi5W8c9DjheFa4UnPigWSs5J1hzf6AxdVpXVairDtSXnmZQCqSoe",
  "key28": "4zCQ5UeD4pBaLyDMFLhwHgciqmAReStMxGAdhAFW6n4HH9n5iJgXpEpCV28LFSrb6BeahjkNUFgEFPWWQcF1VNgT",
  "key29": "3Ptk4HPUNtSEXq34JZX6a4TVf8AggdQrLL6nrmfaWD9ecuTArCrHtzkC8grTAspma6dnWMuB6Kf5HgCFx6rEE7zr",
  "key30": "2s7R54eha1bKc9asG2XKqUnNLe4KScSajbvshsWobkeVv1q49VpSfc8yPbQiGqhP1BErYat7vM8gDEA5JTWpSmZs",
  "key31": "3W4NBNuNfCpTGiMz42UsqDLSTQvFyr2QdDLpYJQm18RH3fvBUSDgvT5k62yr5VznQ1rK7JE8KTH9fVkiiGvN4okF",
  "key32": "2qdxkG7p5gQb9hBd9jB7iaNEjHmRCoRiQEvhPuSvuLTapTky4Ne82gesaEEZGn5C8xEaYZwK5pFZdJ3cq9y5kWwK",
  "key33": "65YwYEqRvE7iPPCovnnrP2mk3RTqW1DNKdtpB5TCpFDnSnhcDBeXxZQEHCHPpYH7n82Uns9NAwb8dYX4kzTr9Fnt",
  "key34": "2JzcrrGq26J5NEejTZBxw5LdEzXTS8sgrTLwWwUxoaa8ri7NbmzQomMBt3nk5UiC1WbK7hCrFqhWPTvhF9r4KxDw",
  "key35": "2sp7HoPHWxNWozamoURvK1xaZ1eRRkSSbdspLFdSUBoZy6b1Xz3SbfmJKkVCcMbKxnJgJ9mWaWJbq9bQdbwVwS3s",
  "key36": "3zpgLpyiXPwBsd9aNxPbGofwk7b3TLwsQhnBSJNVmpsEh6TZmSnxfiZbqt3onqe4vUvB2n8TePsHqm1sWbWoPWkm",
  "key37": "4tc9qmR9mP6WwPD8QvmC1hgwBXVJPKLkyFubhGgR6rwj69rzbNDseGQ8L3UAR7AUpvNbtmmPPiTY8ht6bRCdQEHZ",
  "key38": "3KRmoc7KoSgwZKKTEt2VV7B61sFJr6PcCf5kzAVocPrAZsHKMYrSf4oLBef2dnb8913sVgnc6gQjn3xDjT8jGRrX",
  "key39": "5ZjCCUAjdDRPk6ZcUfjtSU5aSfw5c4aqyMhz5MFy9Hxxwhn9zhyvHvsjDwN19Q2bpXh7pd27pcqCeqRDSirUHdXM",
  "key40": "3bdjnMTeqonxs57akYGGzJamzX8ZRaSREmv5GWSCmPfnhZckP6CcjNeRsV75XqTekvcLfJR6YeC9VepZBnHZquK1",
  "key41": "3foB2am8R9JMtg2tJByqMj5uFQAAuN5dE7p75uxmJSKMrRQQCyLxHsos2o98mMtQ9kYXnyfTbYHB5HzsZXM71zS3",
  "key42": "52MtfZ2rTXmfc9GMWhFKmXUcwz9UL1JRRjmy6ro6kRWgM3S5fg5TBVHPrEoGi5C6S5kFovdnwGT3buoSMSb9edeY",
  "key43": "5giJgszQ8tAyNvoKidvrBz33xXNNye1F2r4PEex5b2QJZwEecpLHLYh5eVHnRhYt7WoVgatdpCr5ehPBhuiTdtic",
  "key44": "5nTyjTHAPXJDKWSmESZkNLNJ2GMv1kLLp4JGC6rdz4sYriWBxtLARXwbRYqy5bo7C58dprqh9U6BjuSAtdTy4SKz"
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
