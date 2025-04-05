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
    "42VZKdRgKTCUdvHG1FKwCnDvxCUvEFfTcVVFX13W3nizBjCkNju1TRzkDJvfmxK3bmVoG46bGCYC1p7GBXsRu2dq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FFjEgNC5xguSygzmJw9opjGn5NMcSVZNaAaTwMkA8nTJPRVxj1sGhk5HsFjmJA5EEwtTjefjn4tBBeCoz5iEMas",
  "key1": "HWmmTLLX51B9xZDpxrXiGYYwWUks5Qtw5h79Zv131MVDKKD6MHbqBGBFkwmxuCSrQ7bFEvJaSQ4fYmXfvCBF97C",
  "key2": "5KMNE9UC8gPXbQ2fqS7TH9B4UsKDNbs6uRBeyxbeCPuFQPKeB47BwTwopEJTNuSVoA4zyTByg8xZYefCpogpe1yA",
  "key3": "2U8UUDvD4K2E8XjQvxBqRjzjakVaW7PWsMaQVSyp7R7dbSnpRcEbZA2ndKv2eS4zE4WCWTcjJKzW9o8io4tJYdtG",
  "key4": "3ySxuJAPEtgmtf2PL6hLEE2Ede2jyAZE9BdGapHLa8JuyWaavp91TbZYAFZZpaDXgeJhWuzXKbFB4vEHN7HQDL2M",
  "key5": "4ExztDVHQ5AdPJYksXfeFhcLbdZtUNEDZVaDxMnZeh31ofsiW1iasWpEUDVC6wmSPEnhgZhSSZirAZcGSoBERhhu",
  "key6": "222hQ2fWo2NpKcxD5nCxdspJoFx3RUxGT5UKqgdSdWetqudkrqrQxBB9hsoJgPNLuA1EUTtqf1XQtibS8xcuD4h5",
  "key7": "44ZfKSy8VPEYRvBhuZoXXfaaqnMcLvT3RN1x642v1SeRwGZvq5dWFzgZ41qMSpunLcmLdVdPGR37hnWE9gTMhazu",
  "key8": "TNm8g1o6rLEN6wFtm9pFkJFc7pWGAvYLGVwpFn7W81dDC5boLjHiGF1AwPdbDwCeU1d2Y1XPo2BQWf58FtPKyJc",
  "key9": "4r34RFWqASvS7VnqJWRyMxWeumZtF66Q8aS4o76AeWGAKne71N4H8cH1WEwCpPkn7MSiTjdY5AUuYB6uuHx4Ji3z",
  "key10": "4d4bQ5No4JxQD9f4j7SLixdsGVLH5earQSbe5mngD6cZY1XnjyU48GB5y73zSWFy8MUTHKX4aqUJxCxaP7TjBWX1",
  "key11": "46kjsTbVMvaAA183Nbo6FNyB6ahwB1jefMHrWrK54ehcXC6NXVeZgfc17L7Gus4N3qdzdSpnXfhxDfciH5E9NR19",
  "key12": "2CrdrewgLeAsuAgb7gT3JDGeArBUQchReMPCpVtQx5T6GKNqB6PqsUwg7G5hBTgjtTxbrLoooSVWfDuD9Uk8rZhR",
  "key13": "125pjT5RB5S6jYYG6ibVaiRa6qgNnZF76BmoNVx9wyAyD2c3agnxxddGVeoQrwPFx36h1qVAgXuCwfiN87Ts1Gew",
  "key14": "Dmwchfmn1JyMwk4VQxC4q88Qd2K6ZyCKhtLSsPQ8tEFWpCTUkVS2F298r6sL7c5trGrM6bfPpgA5wdr1my3MBcd",
  "key15": "62Rv1NcuLgQfB6B3n1or8p8BoYxo7Pv2zrjyY7JprR7mQknruygvYKuiiv1SyDsTNjyD1NnwgGbFLKLmio5f8ci5",
  "key16": "xQpmoNU21PpZvDYuXfJ5QgQ7i3nB3RcD3rzPq3kr3RcYBRg2cM6KY5cG2HVjxfdCergSFBmtacRZyHTxvq2jTpR",
  "key17": "2soTEn1wB1MiA3ydCi3uu9qhjpALyXkgqNuDpTyPQkE7T4B6WhHjkzhw6MSxgxiLYUGEsAgmis23sx83Q1Djs6Z5",
  "key18": "5BhFD22sFrhMrgJzSckz54rjSEqgUbahVDr88VCaeZf57vXJB1eWYQFqZXAhamtpRqMfQThgLjwBbRXMk6A8bemW",
  "key19": "4L4mZXCXapuvbTkLktX2nJ5S6QbqtEeNW6GL31sggSp2FcfRHoGvYMX1qNLsVR54ZmZy5mTcopriYL57xK2UePae",
  "key20": "4pE5c2KkSqV65S5D7nE2ndSnKk2oUzqxbqhPAtcdL1WYXFztEQ7TDsUNVLpypfZiFNg53A2skBD9K53Vuf32vkBs",
  "key21": "43CdPrEJ69NvRBsumfoCHWtdYYLCm9YZEsqcnEYZj4c7MRCEoQfdzktMPtCC2xnz3AskSFh8Qo5T8RkQHBah2yac",
  "key22": "4HngoCwLWvHt3qiBX3LyRESaG2mqtvefuM6yCqibWamZEdBB5jvuyJTnKeWMKcHfY559UoLC2tZ925hFnmq8KEe6",
  "key23": "3GG45y8QSkQAGX5ciLa1Y63d9o4xbxzEAMWAimnNYs3yx8Knm464GjvRS6kbUpkbJYS4fdvVXNiAhBCw99mRHZrS",
  "key24": "4HKNUxNJNbtXZPFA8f6D38n4Uj1mBsPbZnuK5R7vZf4JirVVdLutxWSMdptzzRGGKpxDKJJKKbcGadVyQTtCuyvJ",
  "key25": "dzWV9QMENfjw7hJSqHjegnYnfpVHC9GNKLnybauaVSaZ4egMaDnVoyfMD3wp2Rx37ZdfRnM3oxd7xTQLPfZnpND",
  "key26": "47S3wksukpAD8L7suYimzDcM6rnZiFg4sCsBF6BaAbcea5uuc7kgRzXZ2Ei2SpN5aYeP941e48Y9Ui7gyX7YvsqH",
  "key27": "5qqpVXiDPDMiPKoEJ6kPuLpXevTi7wtWrw1G3MWkzbH3fGxrD3GNxdDfeUy8kRcG79YixKCHkKckzPc6dvVzwMsh",
  "key28": "269aHBcewjAmd8K4TvbaAAKdG6FDQXhtYWFK2JY1KiWRBRzoD7W81sW7X1eSP4AM2cqQcChnkspzmHC919jPJDYd",
  "key29": "8sUJUku3xK9Px6VzkkUYDfnx6qeEgH9YrCbRaHJdvAVikgt1WejnypMbdRVJogUtpaecdUeoX5B4QKgrjP2Raad",
  "key30": "5DGE6361x9JuS4SwnaabYg6aCF1J9u6j1MZoSaU1djevmA47mypQMiRLryGExpte9r5PAZq9MSHYD7N1HdB5WB8",
  "key31": "2vpMCXn28E3DqJSiunb6FArd3yW5jE3LKh3vnKSnFM1H7x3SmSTCAxs45eZZXfkRVjq1GVL7G4BWTM1kAuyoaGvH",
  "key32": "344UwhxMBoUPx59CYsfPDbZAJcNY2gDzvN2Jp8BM1HgYtFRKZvmHV7shG3VqZ53cioyYGWTvzqzMtpX8JuXk42k",
  "key33": "3J2XcSGu3uZMAJN7cLYPybz879ii8DhJFC9YHyNkWdeCwbTKhv5e4CfKjRLi92dekpTJU9RWkfwWeiTU4wczoAwr",
  "key34": "3RGdHsKaDLmBm4HKMC7x112iTefYmEkAxGWvGTCq3cRxFjYfwMNC1gBwWCgqkFPa3zWmgPqiHsKzkmDNMx8vGgUG",
  "key35": "5urK2FLSe4HAhdvWzGsw77Tp6wr2LLmiAFj9eSG2RjcZrJc8UHcu4Kdps3PBZrgnFZemFDn31EAKmNhJFUdYSACi",
  "key36": "3mQvHP6C3L4HCfoA7QM5nf1acz12ECAtes77QkLXW9UvZzCM17JyKsMxh2a8kuVr1fHsN9nbVFirgJgQfTF7ddqB",
  "key37": "34y5tpmyszw82F8oRjmfN1kkjaAAqhjAHmDy5CZeppbDcV8yHvVg65nXqB1d8L4r92agoDdoaYSNzGQy51NtFeG9",
  "key38": "4AaZcw8tQrfBnZJTi3gejePAKLbzZyfdRRhW3dto5J5pJtr33G2sRDn22iwSC3ebFSTQ7Ps8wDYiYas6eufsjhka",
  "key39": "4waqiysANxebJhFNnWBar1i4AcU4nHSajxJZo2Ce1ufkaeekKjL7Fn1AQZZcbB3Tg2mW24aKJgURR6yeNvdNffCe",
  "key40": "5FqdQW9SUsG8kHN23UNuizM8hM3vRp6bBiFJHBFgKmAuo3WfmhDNTF77cECr24NzAmoXyF7pHhkuQXTjd4fcCdCZ",
  "key41": "2VJLPop8KufBbmceHiNR943TraCNgftkQyMCskUmvcMkksYSqBUCAgNiemthMpA7YSYVHZhxKN212xtZAJ5XFSTx",
  "key42": "3kGnUmWvjDkQC7GhgLiYPxz1TVTjKQa2aG43GfQRKAc3mTiwBjWCNr2TyGGCKnhJcaXVov9r1A822G3RD4QUaV8b"
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
