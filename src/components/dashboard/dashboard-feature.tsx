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
    "5H3Qovcn5Ud4m4qU4JKgMTQpVL22AwChRkMXXFgEQXCzroMNFQMhyvC2Ggk1hC9aGKE7fycS1zHWFdENJG6UWzMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LtPDkysze23So6XDadM6DpViL5PVeBup1XctL3dJJBHgZqfKMrYDGvqUnL5yLqkVZLXUvsoEvVKuE6jHdk9tXNg",
  "key1": "41eAgiU39YN26jS792Hx5EqhdpiLU1JZodgC8ysJTzkiG2UW2bBwNFzRRjexWtfdQH8TxPEGTP6joBhXCEdTHFh7",
  "key2": "4rebmoqu6HS7PAkcyG82No3GrfXujrJBrpBXFnjTFUuNYs1DfeEs1HnnFxYqJ4cTCjD5Z7v7JWQtXkAgeRH4PLhz",
  "key3": "56BAwJG4augpaDjGJhuDAQWd2pbrHNMyo3g7BqLi278tddYhivF3uPaJz62D7Ehuuex996777tK7jodRccc3WG9",
  "key4": "HCANwNUKW8kTwCwi9odsJnqSkZAh4MXn2w1JV9MS6z2bLpxAY2pg7XSHUwhKG8L5Kua3XmitDb87Lte2kKjcKAX",
  "key5": "3r4T26KxZ5wUX6WepynqjtqVcWXEy2H4LwfjkrGQnReHCJ3ZVQDpLCuh8NWkv5Gea43eyFctWKsrrm7kX5ZUnXPq",
  "key6": "5eK1BydWJfJgPqM6JLg17q1wF13UZz6Vz2BDeExTyKQSVepd3fGXVDfeNsRQeD5W1crJBcyM8H8QjaXtUqQDtjot",
  "key7": "viUAndWWM8gjY5JoSw1j4CstQy4CgtqXaomP4jJ5dPjQMYbRA8uDajpnPds82tJTGNiDM6R7TAmCQVxUpkAkmr8",
  "key8": "2Yvt9k5q6ynkCYgHgui6mKnJ9TXXaNr5TF9kCp5nWhUvhBHDRsHUQx1M9rFmyUx88gGA1MM5nD7j2CxyR1FkdqXc",
  "key9": "4f4asTWakkgRAPGirneAHiXcoPub6bcn4fpTvJpSZaxZJs11FtaoC2RVTiD22HuHEvtZswnDP1wevzis3PwQqyFS",
  "key10": "FPSdv8oWBbCqtkPbr83pgSMoy3hPDBUEnn46xuJoUJJWTiwb5C9bMUvCaiwPNEb9KAvtkmA9mNwKe3uwLEExrzM",
  "key11": "5Z9Y5SBEo9wPdMNwU4KQSXbFyBgr251cmmYxvdeyMRSgEMYmNU9eD3DuPmUdLjRdGrC8998FzKxJvsh7scSExEs9",
  "key12": "3atQUCZdHhS7gz9j8P9Waubm8LcFsyz39r1i8cs6umxV6oMvPUoZXDKuzctiAV7xq8rWdFRWPQB2PdGzaUPcoqra",
  "key13": "5FeftdGQTQJbvNruxwBXaPo4FeKuPZp19og7kGMxR57NbgZFnXSCqkcXkU7BHr3FxgAqKZUFcr9MMi6SRuqeYcEa",
  "key14": "4pqt3DGLeBZJf55KSmyYsZNAHcFMpyJoTuBMEj4XeCRABBFcvFsRXBrMA1223dDtCHRYv2o2YFdkcV9Z5pevaQGi",
  "key15": "QDkGdKxgNRfw1hPSFTqxpsgn8mUBF16cKM8BgBUXZ9h5oyS3vCMTHRYUqGXWBJ3y7qqSPaLeX619uhDzy59116v",
  "key16": "4dWDWpB8ftiKdQ6n4uzDQjuUb9z7ATUWsEVU4Tpx49bqAjLbf5Ggt88r8Qj5rQ1EVH1VX7qdWoZr37Z4vUfmXtsT",
  "key17": "5W4Q2LLfsREijHgeKL4LdGuQNoAoPpi5SuCP9rQfSuRXMvCtHgKZZTidBDBZiQz6Zxzabu4b4sYz89pXSrj43Uuh",
  "key18": "3RdxbUuZDTT9feTGDuSepRBYzCN7GDkxpUQFmLBMdBunBn5RBgde1RigJSMXMJpXqGTES5SRDFeG6VqHEwvQDEMk",
  "key19": "39NTLe9m2R886AxH9Z4dZWaS6hhXBvSc2tK2KpK8mBYV24FeY4191Bxz1SSveg4HbJhux4fSkwzvgphScPpCLb6G",
  "key20": "4MPTiCcHCrGKcPBQCT7nTgfhaCEFPAkrgy3JkKLSEBYmC4wDinGf1Pb1zZsiNCNxrxqjfmtTriAcNXdKsAdHBQQP",
  "key21": "2RDWX9X5qrexaZoUbmrdXywidbgsS6YxGHLU3qWtqVPxAHY5cTs6HmYgjgVxJNb9sAQR8FNwP12mE9cAEP7FSSqY",
  "key22": "3KVfc3HZ63Fvmstpu5ajbWswx9HQZNy9goBQ8Y6PHZdgz2M8FpyQkNzrYuSgSQcz6uERvRmj3aUNKC6UaonzQu5D",
  "key23": "4Vk6ECzKwjxfJn5GnP3rH9zMqRWjdbMDTUS9cK54VWedjwTEFDeGWFrvepjNt32btKu9PjibVdZcirFdjCigfuWL",
  "key24": "5juq6g7wpr81W36msBpPFkrSRjeaPXaBst7E3HkQ1qct4LyMKwe48CqDwQhDFhFS8SsUiaGBB9fioUdwXC4jw9Q3",
  "key25": "5jQFRuUACM6nhozcSvhBpZS12m2uSMxzwWAHDdyusje7FQKZgCiMhW4zZunZNVhU1JLXj9rcXzKnK9D8CxeQmiU6",
  "key26": "22Xim6819owxuBJ5jfynzoFMfRuHpnagq5Qo9QfYCLz2FdsFTqeYvqS66CmE9y4a2PEpUnSYcxW4p4aVAYtJgSaY",
  "key27": "3NvgFkCfYuGGL7MHi2uwrE6F1mkzD5QEuamhFs32QJX7M7nnFSJe2AumrYT2eVo5CS5qbSjWyjFXE6uQ8P16frdT",
  "key28": "3Y6jcQBw25wBynnNWFbBLQRXE1xCHT3TjZtArdonsg6MUoXBjtfSgoU95JcQnAKmeRdYezrsrVwzHtwYa8bkTnyZ",
  "key29": "5Yf8UxPnZbyorxep49vRchKt2kBP56Z72JSfMPQMHL3PKvkpJbsYCAb1793VtwtRRkWztxc7dhJw185ZVVpdwdFK",
  "key30": "3XJx2b2Nyw56MJadDnqm7Xc8NekBLAhaS5GSfpP3vABZYbTGrk2K8X8uzTXRGcPJ6RAoPdMbefdW8YwWh3uJ7KUQ",
  "key31": "mbXeH3FbFhTxM6PgAKYfvWXeL8GVqKfsR9b82xRHY1Tad3ePURP89enJ4gzabrwrV4GN1vEBfQf5NoNsgyLgzGZ",
  "key32": "3Zkp2LoCKsGQhPk2tnUUagvq23Zg21g32rMtvWbVi3ziUKcTnWMVp4PiR2hNzNtiEBCk1oaqZgTAwmbVFfb5KED2",
  "key33": "3NezkV67kPHtDhKqXVoN1tgYJtTGFqyteJPoRLPMmgg1YeYrg1rQTGGZfPPdTPEQEiANJbFWqHPx8bRFyCAMy2WC",
  "key34": "48ZQsikb66LTafQrLNmepRiL86avcN32V8GNTxeNUDeHA66vadeUFuS86XMjYqmjeKQnSjMgvegm1TZURg83MXgR",
  "key35": "3nBd4AHCUS9wL6fSFMCiid29jQuT8YuEtGPLoWKwLeiyLAQA89BYC6hZe9MRYFU1JQmy4L63fJ572PVSXhZ4VeVx",
  "key36": "4XsA7R8riZr1x3GeAZFBDUaQFrZXqHzS6cKswVYJ8g5vTVG247BB8Xk38s3o8Genm4Vjp97UtfPAcuETayNXbSM9",
  "key37": "3nHiCV5Xj5uAnJ7QDjn14FSJPKQoAKT1Vcwvwm9TvQX3Ax52i6TyrtLvHCeN21YQsR6TtjHwbzX59okHLmY4StnV",
  "key38": "2jRcDcBAjex4Sxzn6XmAFzzL5wKWWaPMSGHwbkbeivu5J4Ku5v1qPHPDD9iTLHFrSpdEGJVMS3HRLKpHtJuSEz4K",
  "key39": "66v2rZYNwnJkgjZFQ6ZnjtrjYTH2CBZsxMGgMJRQvBDVvRpu1BGqA7hohQB2adfdbDNULEFpqGB9Wsv8vnvxYB7z",
  "key40": "5KwwNVmpLkHR1ihDVUQDtv2ApqvSeMfQRU2edCaSB3wJpgJwkpk8JHa1JJ9Z2svHK8rZjXyGd2aDJCKeqe79p2E5",
  "key41": "iJg1uJaRs3cnfi9628PtnoJCKZNTSFXXhMYTbbH7fKM4sptgjANCnsnEVKJdLf2zagUTaXTjtG3Xn6kzjDgQ81A",
  "key42": "2Ju74AodzAXKAgURSBBTNQgA3UXhMMtKsEQBT1RkatUqAAXaDocmfwW4jYnhitos6N3Y1gRN98L26hffZcBpAQ7k",
  "key43": "5wU1vH6peHTJKWve6e96HzCbiirhFWQYe59VXVhrnaz5JD6f95MEs8eXLHNwXxcnVhsRcfL6Zj7njyvSqjZ1cyGh",
  "key44": "4CoWvDgdgRb7NUN7LoHhsKcXrG3KBnQLvpTZMHH3uLsLR1uAzxvVPmTxgSAJxouxRvmHMWeBWU9HsHDGbytf9qzA",
  "key45": "4EzaN781dJi5kUcGdPZRoQwY9rtP9WUDmK71TgPwj5ZDQ4PsBuXoT9ebgG9yNiZpJmKFxyhX2qQphxfouJLhREYj",
  "key46": "v8Axrx5Jam15U4e7epxhcgVjRFFj4c6WMctxxr1oMaXobSXE9jxG4PzXtwap9bh7fZmey8nFeGCKZv7EtFfJDm1",
  "key47": "gtaVoeehgeSqJczjvoGCgawN6BroMcDGiE8VaZqzpEkom2RAyeS92mP76P8dK7w9s5aiFtLR4F532VsG1ChD4u7",
  "key48": "hT7iGnij345t5kNj9XtU1fwrTQQibDZk8BGNMbcqe6Uk1xz82omzymqTmW7BpfgCSVESJfFUbcPZwYvfPpTbe2i"
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
