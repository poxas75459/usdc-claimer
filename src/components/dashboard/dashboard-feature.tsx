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
    "341dneCsn9bt39nVnDKhixhNifYJkEdseg6dQf4sfL16DiytvwHwuUqhGQ8hjXg45qUBLJd7aUyHcanZFHv8wdkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4brBkVN1KQkaRDjCNjHipHQezDHGHMPXpycpsRgyyRk6fHHepMh13zX7UpKDgBoB5EzY7KeqBwaEBczBxLFd4Tjg",
  "key1": "4s9qUR4cEYLwHfYoMP5UUgzPFmU13y7KwzLFhy1TnuDoApGN8ENbynixn9RoPzbF11a16nqnBRsSF8hAM8caknR3",
  "key2": "3gRmcYG1ZJYpjfgCjrgh2F6UyTrv8Xz1Ezk8CNTAVbuJhkEjRe1QQLXcbpeR8uKQZSmGouRZSKVLYniebqRGrRTC",
  "key3": "341jK3v6kqQUuDQQAHFypb4LffHmojagGLXztuqVVyXiieQsfDWNgydLPDAkKRBChfdkH5q9VHhPWdwRm36zFw8t",
  "key4": "B3GsbpMNpTAdrLnGic6aQk1brWdY1WtVM2LkNzHEosKmMvwJ2bSqUDxdeCw6yZwLJq7Rr3qoYyqNGsBzxNtcSSP",
  "key5": "5R5vn2KbB9xTvRVV3CqpJohiXmMGXBre46VG5TAvbvptfUM4SURnNrD61hPydi4vghQjUKXwQwNug8TFB1HnKUtE",
  "key6": "3rXfgtysEdaj1f3s5QRJynoFFcZLK2q1c8sJpXWjxDFNjvLaoFzUajHLnTLjNN3qCfEcvB8QFANT2pdKTxn6Vmdf",
  "key7": "66yJe6Zmd7NG8huA7FZ783GCTAEmD5Q26G1ZXJPYpstgc486HoGqi7jFpwfm3t6NUtFPw7vVYRUKRgunrTUGoAcg",
  "key8": "38jSBdENQBN6MdyQdv5m3fv6NyFVwLEVwjY8QKp5R717Gft95cAyzTKQrPPQgF6iRXN9JkBMDv3bPuvA1irQCt3M",
  "key9": "2c7zb5ew2wNBPy9T4cDKvikE5q2T1b5xsCSMbWSfwu6jXnE44zvoMgzdgMFBVZSgG7WwDUUZWGj1Vp5V8EWHfpHE",
  "key10": "47FeYdV97qmxvhvbcMdU9uPCLQ5iRAKEpGCUe2FQ7PrcxY4pAGVWB9ToxSTwHBpjgfQPyqxDtG9KinqTo4B6j2nr",
  "key11": "5LXqwk7vYtRukujPvoAhkF6Ct96UAB9Bgcpk35cHJ6EmeueFwCgK7kf9GPd84r3QzVTRv4R3XoEyXsgnFH1f2bH1",
  "key12": "2uKX7GrzzwGAmhdaH19PPCmpFydq2Hahwwi4XPdsLCcLC7zQPF7QPSEU7wEBZtufyfqotiDsZMMQ9wjtDXfdzSFZ",
  "key13": "xQum5wZJUhxYEPswXSdCBuCitQc5XodJeuEwdDTbdwhweynQWdXW36pUWxTh5ZSkPXUHSLUmPw5b16fmM6FGRpG",
  "key14": "5xRscPYefx44rKQtLMBVTfB2HPtecZ1d9E2VuQYw5URZLgMHc4CbLbhSubqKrQ5fgK56NX5wY6G8HDxXMByejXbz",
  "key15": "2L1t7P8uNZFkmQUotEmm927dPEhL9cGbVDQWLCDixSGxMy2PsPWynrjJYzeXHaoaEokjoGFWwP1Exe6esuujAMdT",
  "key16": "24YQagmMMTmdKG6bRygoCQ7TivcaXXacC7X2pBwrLox58iDTeAioLka3jcMWwkmPJmkwbaLxC68moXjcysj5zQwC",
  "key17": "5fd5GhwqWHJkzuM3r8zBf1tMYYqUJXyX35ZtnNwdJ2oDqJCF9a5PVgdP3162Gnj6GtBB9qfuKUN3qYSRvWSGu3KG",
  "key18": "5LjTPzYgqXVke3EqgDGZKJvuTSoexSG5BJeF6EqDfJk8V78L2TW987xKqWCrx4PbT2ponpDeSVmfb8Ynfu9yfMkr",
  "key19": "35apQ54MiEbJzjGpJQc6xSAp1xG6eHVTY7wf5eTMwBbERTnBFfQG7TSeA7BZu89nN71MBiLzxK9Et9QbB5Rh7wGt",
  "key20": "2RJTsqhJFWDxPDnpSsdkxSoFwGWZgjiVjkfFyVk5VeTcrMBtosAaVoJzqxGPyqi3Eqe6CS1bgbfTmLf4bnVn3vRe",
  "key21": "65eWra5W6RSn5cd9jmjHsdzToQQFTcaLhF6ybPdFJAH7JtbVB3hJzyVnjNowbCrghRRh1ypFAZLMg7ppncZ8YjXx",
  "key22": "6k6FuQLpE7NDTULnJEyiG41yt3pebQ53uwd5mzPSH1zMxMJthSWR9atpEynNKBhnsuq7fXsKFcgxSqYzg2GytVc",
  "key23": "4nnfzgzcq7uZzFGgtnEZccupiqQWYoC3tFT6gk473R94Gedsstby8cQutL9GpYxmkuV5XNVmJKfKfnC5YB11Hz3H",
  "key24": "4rfTYssvBU37AZWoSbtortTwkXd82AREuMsJBvRUzxBJnU9tiQ4DWpPXQuNmoDqndvae6948fR9NAjb9J3UGLDJd",
  "key25": "42fprpNRrpgUmhfk5MNcYPhMrYXntDBHQEbanw8chAMiQLd3stq9fgpwQGhE94FXEsAUQ1iCrppd1oaDvSyQ8GBQ",
  "key26": "2MUWwvGGXoscKRGnuwKioX5Mz1g3qPB3fbJ5D7eojm94kYvPzq21Lnvav3HtA9iBznEQS8r4zJZbQkiKU7o2u259",
  "key27": "58KwzL6aCoP93BxgfMfkMBu8LfWzKQF4ZLCwUrtxyWQU9ppG5cr95RnLTxxNfMDgZNUqZh1wF52YjyoADdnFdtL5",
  "key28": "61LMahBymWa7GU6MrBNAzC7avtqqbSJ1FeiU6iZNnzrDsZAKaHAUmo986q4d5Bv5s6aDrREPcBGcGHzW8MpYFhZP",
  "key29": "5fBZq4n8m5aQFPArGdcHMxkrnMkvJfDZmUYUNX47SkQyDPjoqSAxWnM8ApPZYnZd8RXas1wRZdpv6VKVszUmm4jk",
  "key30": "2pzdnxe1kGmWUm39Ds1zDYEmnBdvHy6LULnBFzmC7kedfHtveeXxV7H5KBn5Ts8qYESfXHJLPmNhHnvTgP4uJHJj",
  "key31": "5KqV5rPeEkzn3AvwELT3jFxpgKmmL2v7dVAfkMydDATuLsVo5YtGQnVdYFGozS92UJfFxWwM1B9Y9LWZXQY1G2KN",
  "key32": "65dWFTgj2c6VFV89dyFGPEdeBXgqT4X7v1EVwNHJRo25C8zy1q5dMoQp4Pjvnhh52U1zyNtHasWs4Kq6na11PAw5",
  "key33": "3RSpdXPbj8MnwWY6M4Gy8YZsMR9uiaqxdSz2iG274bv7dPigvwgWmXSmnGDEzR1dAgwHYzSSXXSB44QbR4DVFsJc",
  "key34": "296BHMmeTrEr7EvNxVMnw3azEAbgNnriBwZF6b151FTKyrMPwB2isbvAr2gCLpLJCTwKkyVpn35ph4iJvX8Ba51C"
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
