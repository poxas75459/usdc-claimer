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
    "2aTqyiXwnWDrkKJMNhkwmrssPz3bjc4Ncxr277ZJFCFKaaeehWiLXcxwnm1rKoAUFDJDH2E2KEqfnbXjWRiw3YTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AnWpeyyTUnF5EcZNUPJRz1cJaz1uuMDSDwPVMQr4KM1omFgh16z7X1U5hq3GzX9Nathijb8xXBUNa7DydmNUvwD",
  "key1": "34x5gie8HkEZ58LC9eGKCU2tk5UnghKYTozhJeypVBCZPhs9Y2jiPVNg4xdiM9hzChZwXwbPoorUwTcXKcsirWT2",
  "key2": "2o4azy3MoUoQK9p7PckQCFNJUZFZDPMZ2rs6CKzF2CWQU9YMdi9PqXgawArPzp9ykdsVNiDypNhHmefJCinmApnm",
  "key3": "5BrpLCFGojF2BJH42LBcWkG96CHqH4Zz7hywDMagKQfAr71Gjnomj5mNcQK2jNhvuMAagNESVpLcZMwdPYXdUbNR",
  "key4": "3SY79khziUPjxUNKhzCmdN3ZboDRTKEgZXd9kNskfJN5qqiwWaxy3rDFgwVDf8LffdrVqJrLmb6LxJzg3jWbacos",
  "key5": "TcfNY6mmJKoejr29CwmDagUziQykrg1Y6nm3yHaqpP6oyeyPUrWsVf1XxyXGQJXjqExJVykec2JGoDVJm7PpVEA",
  "key6": "5szxpFCiwTeFR9iGmH6m61GWrCNBnQFKogpW6h7W3E6RuQgQVKFMTM67QHh3sQx4BmTEHv7z9uesBD9QmX1KDESg",
  "key7": "3pCQ2mXBaXWiWitxBVc4QBhFn1dL3yWTsNNW7pwFf6BRPEGKA8hAyooM1suozkpkk6o1nMJuvdfyVF4FrDXnScha",
  "key8": "2FLigpTfRbzQj6h4XGMSAuHxvtkrNqM8b1FastX58XExLXQp4GUvk6GJazsLnRoMGCDibf9in8B9MHNJgAtrDAaQ",
  "key9": "3bVYVzvHnoM9Ruwh5jA3gfP1mg61sfboj1Wp89vMSb6o7LJsXvhS4ZpBTVRJnChVkDAWjGT17DTaPRt7jD45jHfe",
  "key10": "2MpEYtfJk4uRWm413NtVtjpxoMHxubmXANhmZ62WQzYpEGqtPGZjDe1rts5fkNe6D9mEjQt6VEwkHWEwQooCH64Y",
  "key11": "5WoPSgt33TsSceYRykpR8xQ74p5FR3LJY815sKk8pW7JprZweY9g2UZxvPqgf4t3mJtKmgMTtdBEbs545jsk6eZd",
  "key12": "4vJBL4WDe3zh8KiakMmin8hB6MvLYhxbiTdWgjKqMaKKRKr41NVtgewHzG21uSKaiY48cu9Yte3BTEFYqRmZ325A",
  "key13": "2rcN3MViCg7FgBdvPy8p7sH8GsmwTCikMobKCWGm9C4RQ8WjGxsFFht7NWrjrRqfwmMD366RWee7tgKhZq1EaSou",
  "key14": "2XWvZVM38ZfsJ4S1TeudoEH1Z8FgxUD1zthfzSettYgySrbfgzBfxExjd1QtmboPizaFj6uBgxXLoUzdPJ7QSs2V",
  "key15": "58DKDQev2dozARBwvAoh2wzwhWqMp9eX8ZHLCVET31LuprdBZ75ZKawJKogdh5VJo5E5svZ3XL8DsJWRhJpHed4L",
  "key16": "65QTTv1r1qZoL79zyTDa3zbGHtCJFYWedXVBGW2YuUgNFh8kzvZB7oLuh6Y3vuAXzWhFbVc3Z65rmDVXaMpyysfa",
  "key17": "jiDzqqVSwkyLN3YrH4GqaLKLtYM2ny82f8Y5oFM3ZDTsw8D96s1yRvDbr2KHkYGxnMfjU6tH2CHmAgDvzAaD7go",
  "key18": "3Xtidme17XHXjNzHeAXV4cSkEs9ZkhNEkdp2teRMebWhVPp9iJBn2TBNkCVc37uRasnLYp52zLiuVq8s1tQHwmqD",
  "key19": "sJLKHznWRKCZyHSgGH67x7bXwBZNGjqoXiNRaoF4mautmBGJE3SST5edoqcJz6xc6rLML6mcsupFswmh4cxmBLA",
  "key20": "4ZkqDD3jwfRBKwFEXU1rsouLsasiKQD6UQmUE7BaAHJuu9R6g3zty6WA4SF4yG8QRhEh9CfsFDbzTG2bJ8FaL74s",
  "key21": "5jr7yjQd8SV9LNhP9TCHQoFd8VCmeBx8CyGTfXZbJerTF8XJ8KqKHGCrteuvUdTvht8puD6AXsmCak7bVDZCGxiK",
  "key22": "uMMfkBEzSQBZS5KoDVypQzWgZrSfhzdnpRdjo4TmPfM8tBiAZfj4NsMCXxqBb1FmpymEWB9X76UJi5UgXCKMQR5",
  "key23": "2ySKKwpcFitQpMfR9SShLMzagsb2dDPY3JTupejDBb2DMCTHP9oMSFrVihggcBrZo43t4sVszKrDzYbESKc3VQhL",
  "key24": "Dz8evJWQqr4B4cz3jBgb9hoa8hiKFmaaKb9BhQc2sRkPzAbM2NYQivQwn9GKmW4WnokmtAemu5CooGvBHzj3x8H",
  "key25": "LKkSXwsuEPZWdhWXwAZiXuSudBvkEuCixc85qe4i71uYBWcLSAF8o7ebGJnv3yGBsXrU7kQL4HsqzN28kwwdK82",
  "key26": "hLfdYV9ahL6wmj1uGFrTSDy8rvyzQ2Am78U6fHiemtsGrJeKkNPYGFdaa5SyAvxkBMcNgXVxqqnsQWuFtbRL4CV",
  "key27": "2sFBgBoE1BtaDxWZdq8QbvTUUXqSUBKtFyhuR7DeSU6gwEiZEHDrhsVsw8uLh6EteaPJze1bhSAfwvRtzQnhQs1e",
  "key28": "3vHJj3r4qnSSfmtWzUiv7HcZmttT6sQg6rEboRDJvZ4wb54BV2Yv6JvvLjUbotBPm61J8SStinH4fFFAAkHs1JZ4",
  "key29": "4XasRaU69d8CHtJzhXdUR5HojoX729D3ce7QTnBryYfUMipq32LQJT6NEEcw6dRmpGUihVMd7iEzir5cUi3tBPep",
  "key30": "3pWCJ2FyPGK9WUfCoit7BVZaLRhBFG5LEQcc9iNiATZEfjSvX326KcH81Qtej3eLGF356gf49yr2PBiBrvf2jnBH",
  "key31": "3zGtuPwRVVffnZcWYPmtCzJzjMsUmqEDnSf1yhJ5jcmzCz3yV6cVB6ZkfCcBFdVwDXgs9QQ4HuzjfNJ6DkPNXDnj",
  "key32": "5kWuiWUUqpCxBVWTkaXBHtSHsFNgziPKtj7CqaC2zWH1sDfQe8uLjePXYqUJPQRQujUi21Zd4LzejGmQb1ZpMRMf",
  "key33": "3VGzAuxv4FZ1n4vyDnpj412KpSi2PSSkKuK61VhwVKWrYoYs18YZEPgoVZwQKFumkW7fsgEA4i8mww2StUv8mZnX",
  "key34": "48vanmdcA5AVRDZGz7qtGtnbLFkXvQDrZDRwtEHJdmr7hWNYmt8LQg4mzZ2mJgUSdQBAxdUKpbxHZ8goGAH3N7pm",
  "key35": "57rz4urgJVoeiCzKNnyKbWhj2UvCnvJ624NPWhDVseoaeXL8A2SK2RtiM3gEmBAaQkyMEJ7DUmxK1dcvpFnj2cZY",
  "key36": "5gPHVuPYE9nKf5Ah8vZ5bHjJY7sTtmizaPpV2ctBH9CVzgF9vfTD9nEoHLXgyrLn2E7R9f7QjqGNya1cMnYzsE3z",
  "key37": "36EmbeBifNtXSJ5JtFgj8Xk6r68JgviyUKJydYYBzhgfpxRyMwsHxhdm47Ey7w7WRsPat2JXL9XMjsDfwiUrcjU6",
  "key38": "65jQk7w5FWzhBxCRt5LHtAtgTJyJKBQyxEQZBL8r6eLmZASbF4xa22Hen2UQFPKQY3USndfFuwT2LYNY2KGKs61",
  "key39": "3DTY2qR3pK33tgC1HX9Yy66G1yitWF1qoD7SJnkomntczcLQgFjKu6ncC4EKhZdgC265iD6ea4YMP54EZWhMtCs8",
  "key40": "4s3vzoyGCfUYeQpwaywqP4LtTWvgEamEXtN6ejoXqcZbQoZqsoH1p6TNFrH7azqankown6uvqBpYPjaZQ41BEdiU",
  "key41": "3XGC4NaPdn2yexJCucqH9HCUMzUA8tq4VBGAfy9mSKBW5v1pkhL33A5fqUFGHrEATShCcT829UCgd6r3RTvH9gea",
  "key42": "3R86t6X7ys4rSeqaq54PjT6iU6Gf32CiYYZ8JodyKDSZa3vmPQGSKqtbQao4zFCHz2e263wZsWoDBt5VcR1J8dEY",
  "key43": "5Z1YVCQEyxd11Yw2mHK6xQx2Uwq8urTpgkANSonESVrjmAzrp6y6Kt88svNmvo717D3Hxyy3d7jLVVse9GgfsuA2",
  "key44": "364W1eWEAHVrqHsLPoGr6DtUcfzt7us7KcdGJbgLiCW6ZwY4M4NTD4349R1Y7MJWCQ4FKdPJBYARuTWKFkTdvNT1",
  "key45": "2GW4gWconxxiBRN2zEHssiVNfQqbANoUrdHrKnzhJ81ttiSFSpRK224yRxGFBtx3iFFcNL6oMeoZosURwgZex99R",
  "key46": "5PbvteArDWdsqxiKEh3j726aMJDuEUPseiw9hHEcu5xpF8GDiQ8o9khUJKS9jgMmEis76ZhXdyNm9vd8K5pBMjMw",
  "key47": "2yDbxMKpxMPQnfeAapjsB2qHAvuxkLSxUtoWZLEhWKocMMkKTL98sPMQmBsfp5kmTZif4sXCfkfsiy9vRXYz4s4P",
  "key48": "63BfJZA89FmaQ5oxoopRzwuDfjerdcsDAo2nnUUCf1xan8qRFx2uLBf6NskGMrrr4SfJJme63Db5pvy2twaPXvX9",
  "key49": "4Fbpa6ovPNz7p8hMjuBLXSwNnG9cFPGnLLUyMm9moEpzciJmtX6bQFuHQJ4MfRXoLVZvWvgwnbEKzJLuViH4Svvk"
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
