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
    "4Z37qmwLchrtCoPvLQ4FowdEQnZswc7dGrcKEP5j4VfHxReatDi7A4ExZ3N1t2dVm9WhtsQ7KZ2JgTGLnSVo63QN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3reLdgH9imZAQCxW9RVC7eJixeRGyJjpTu2HgndoV7AgwtnLNrssgvLHcH7YCMi5CAQWdQUskWEsF52qKxqfQ6zR",
  "key1": "2PZQS35ocMRbVVeWZcSQgtCK68ZoYd529uUAczvVQw7xhZaGpbczDpzwNSam3jgwLGat58tp2QJyRMMVVy9V6STZ",
  "key2": "5ZGbYXniE2BmR8bQUwvhA17kK6dS6ykjJHR1jfpMPF8d7MMDN2jvT8o8VwD44Ux9s9G2LChjiz74DrK2pNRtAHBT",
  "key3": "4G3yuTe3nNJZrSBZmVd76L8i8kRfXgL7KPXfysZuA4DAitT9g5dHJiugPwMRjTXfcyShCMKH8SDQy4Z4JFG9R1Fk",
  "key4": "PfZtnx2DriBXruoC9YKMaSLv3JBvbfjXJHh4sd5fiKYZxEX1Gzdkt9innqURQ7tDHUPv84CbmX1uaMggmKEH4RE",
  "key5": "QbQcqgg82fzmMt2kQguR1DU8gD3oVecdWiyXSMMyGvTfuHfPW96daN6BeGCtJr73nfFZ9ohb1C9KZQNeEefSMH7",
  "key6": "5YUcb7oC5ad6mtFDFMso9tgNknLLLYqtsfNB9gMiBkaVxvg18tvjPPj3XGyo11Eaoab4c384Uea8rPZfSE5xRWEy",
  "key7": "3psfakLmHhv8WRUQ6GFA3bydrmLphPa7k99yEjQetZCYLpJbgCBFm1UBUzWpQzNdWGJgeQnhwQrt2tSpy5EKZKwV",
  "key8": "4xmzppidjvGasRTZCbSXfzdywFoDxQRQKgSsWCe6rZysTnehP3MASXhLKpyjRk2BekdaFFiG5j49UbUJ9XqyYexx",
  "key9": "22rwX5gE7FXtBykgVDmoZFUdgzgbhkQ1jf3MKuq4WXPaFDV11ZVjmtNk6Mvt2Fuz8Y5BK51anxKAeVjG5ZnGA4uL",
  "key10": "32BZYhiadAApE2CXyCv4BBNcSPvNGmRz5x72gV82NXDDaLhkEXNL96WKFgQbiDcmzJsKgyZqL5RzELYCCWRnfEL6",
  "key11": "2atkbkYQfd9qt6Y8EyawXQq73D6PxZgXJf19tHmmuj1qGwr2mkMTgVtSQHTc6wPPo5WFF6JwGaS2wPD8rNVQSkwA",
  "key12": "eH5TDaTxprEPB8Ep7zcNfciEoP14tUzH5n1otunHCgJqeBc3Kj8WTAUwWz9aPPax5p9a3HNEA3vqzHwqN4BqsPG",
  "key13": "3TTZk5CJriqkUoz1Fadvee6V1Yf3UhHoMJjhuo5eb2Y5FBDtYa6DjcZtNNuSR4he3qbSyWCrtMtqptAeaos81YQo",
  "key14": "5jb6FdZDZD6AmLFuJSiy1PspvXY3kVx9GkWFGrgX3abs8sMQMc3Eu1A8REKtNvjDFp6BWvsjrHGFhj3REcGB9Gm6",
  "key15": "2YwfyJ9JXN8F5zEfTmZH3DNroXQpqttd2txkv2nZvvENrcsTbw519Wj2GZfpAi3AQy7unj9aFc2iCQL6dZ5pGACV",
  "key16": "3XYugXb4Pt5qzjxXqVFuRwNMZu1pubjEuaDoRTy7THgUGHv9KAUS14x1wmQp8h6e5P3cuVsGsrJhEHuyYPgihNwM",
  "key17": "4CyRCZDxfDPBpLq3uedVW3WQ2mTf64chhZeJTWmyWbS7f5eEPRPLnFsFYGE6cKcJyVyEhWbWjr2RmEGqcp3xZ4LW",
  "key18": "4myJjWbME7SJK94vofwGs3WXDpBtqiAbNKdYxFrLf5VivCJu1yaSFxkfGvxxQuZ7H2Q3Fb1e2MmAZFtVdHs5gvn3",
  "key19": "5esKHwjjf2W9cRrQpydJRsLkEQZs5mKu4LKtQrrdh5iizweEi51Yd365WdZ2xCYGCs4rEJZFQroF9YCv9xEWew3t",
  "key20": "5Xa2Lf5cLhSjTTT2JrAJj3HQCZxnHteSfDSg2G5BmeSntPEehH94mNzwUFEL797CnYUEtUBRKyTQC2hEWLVPJddU",
  "key21": "5Z8xmv8x4SYYJJhSLyuRKJKYVAbHJ3jvXxoibPfqwnNz7fguRKmMJmHQVhpz4VHgYPjnz4xt1HyTbDkeG4P15wJe",
  "key22": "43RTYU84V9pHu6baGPpKKHCXvJaePhhLzqHugGGN8zfZ1XqoXuRCcDyuUf5vhTAvRAAcn5a1idNoXGkCxpCWiU4c",
  "key23": "54GwZ2mKxFucLSRwawajCn6ETRFLj8WVBFkLEHvy2WMnwULT2Nr1iNjDYYWD4C8qnaVZ6oKjgp7Ss3gjuhgum1t",
  "key24": "4eQ9nELjvum9zetH2m9PHGePApLgvgffbymvAPyfcE8zVQrPywMtRkHznTKuPB3EmJGCcRrXzvNjSjw5JpQFb3G4",
  "key25": "2kZVu58SB8fVe8SYwBiDBMdA3fps724QEYsKE2MSyYWBYMX78RGU3bLUa6KK611ucwSqGWd7GkZ18tEVBWhKTgdr",
  "key26": "4NMSTPvF8GZHK1kwXmYnzVpkkFDyX5WBU6BESNZZ1Ss1vitQ5DM367pPMJbhtBBqgsY13H1BZM5QNoMmsjxdEwe",
  "key27": "5TLAB1GiQZ4ib4xPfJahVaW8Uv1R1GWNdnc5HmcojVGGUNnzGcGRCsV3F5AY8aDL6KWAyeMvJKfXXgtwfkGvCtoS",
  "key28": "2PhjUdzTjsb93WeYUhkjgedXyrneke6h3ud6qxAX2dX9LzjerbQquQuP4So49jjmCXk6gm8uevRrMXtEkAT3n1Ef",
  "key29": "4TZ9ZZGUJhYhC2RSNJhUWdHTZFwSfQFoFB7HjYDB6Z6unta2y7LqkjYY6ZR7mCfhCqVNP64hrhobtDdD78emrBdm",
  "key30": "4z9USooMHXmpetD4io4gbJY577NCYfmcGR6mm8SGL4PhXspurLb1D5VAsT7AZDaGBJjZKDWFug6ztn4iWxJT9SrV",
  "key31": "4b74UgYzxzfBLLLZjVcAvDcdPucRUUnKhkvQoPcbyFf2u8D2VniSeZDLAnsxhHabuD14DGjUM6dt1VXkYfowN7Y1",
  "key32": "4diFVVudR9uCdJWyF8pnTbqPrZdLXTpvvxopW1iFdEoY4rGybifHpGDxPPgd61iAU4NMhRhZSZuuyAjD88CPgskm",
  "key33": "4Dk6Cjpivts7iBWQkoZj3pVjyivp7K2hES6MVomUHhPHUHtpXd8ihxF3ognQDUUYmfsVQ7WcSvHB1VB9P8AyQ2U4",
  "key34": "7idqjgLyq1AsTNGg9aJaZXpx1dA14kEtBNvhbPZqD6Y9FekkZcuErqPfb5Xknsi4prjG7scuypa1h822ERiQbg7",
  "key35": "3RVd9GzFFs7MStQQxNjxgMJiRbfJAnfyM5QzE7Re7f1jdUQg9jJfhxSx9SQq4ejmJ2N7NUKkJp2oJVEG2LmpfejP",
  "key36": "VFi4r662pGTq6QggazgyRrVLgbiP3NTySAmjRzEpV8nNwDkwYStE7m49HzFYviDeYca7jxxG6bsELS6jsg48kPx",
  "key37": "33eWxF8dUxCaYRnTv2vneyAZq3CmSVyYvfdWCtMbt9yxGEBop2gj3UCG5Kss3hdgegrgwVVtAUSUcLfKffwUFwLK",
  "key38": "244S5xJvh9VCALDjisGZGYH2pJvE14jy4RBZ4kb1xjMkuC9gQzRQKLczjpQ98idyBSGU36eBYgZi4UhuGzn7ryso",
  "key39": "2aX1tFnzzpfGz4GFzHBHzi1qiecv7yMApDjiEt8T114yvt5gdDNaaxaDiFPQuZTZGWBhAJfXHAbBzu7Th3pEs3X2",
  "key40": "5xhLtgkNZ1Rb8JrFA5nB8Pr1HPwpgFudwvas3qnE2rn8kkT5MSyWjiAD6F7rAkKtCL7tn8p1U3rjoxhUNy86qqhv",
  "key41": "4kaCUmffLTwsoegqerehsrtMHNAguT8i26PeyqEE2N66xxMiUvH9nsaRjiFxNCBShXSUeow7hSjirK5usR7nr8oJ",
  "key42": "AjzUB7vZxxUs98iWYqeJLVLzydVnszZ1ruD8fU3fR4YFoMDvpjLQFpmiVRvLkkYtL14PWKawUQXJW9UA5CEkTkH",
  "key43": "ZhgoZ4brG5FEEqQJ3hRuH4QE9qa8Tt5jZCi86j2HMLtzJSjtiZu5aTAiqKKkWA9wvTWwHfh21Wb2t48ayJJZ2Sd",
  "key44": "5Y6DMnLcqDjuQRNWwTwkRqEP35gyN6oLdspWJNtbvKQaMS6UqfPydDE2RQRcu68yeQLA3BVdMMZZcErz6mEi8YDA",
  "key45": "2n5BfTKMNJ6gqrSTjdALfwUbNDYj4HXNTVG5E52Q5hXFL6yooTZoMbnKrjK2a8G43YeTs4EwPpG5FwfP9BNcZoo5",
  "key46": "2AJoJntra7msZJB1WBNytD9mvRWvy4FjgrgCiFez2p6oFasFZrPsdSZFcmTJWbgpWchrizNwdR5AFv6gaWopNEdj"
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
