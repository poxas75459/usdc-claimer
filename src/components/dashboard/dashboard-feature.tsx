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
    "2LzM4eTWHwmkzvD5Aq3e4AKnUi5T95DRFGziJmf2T7Q73yjM1scZPYupfck5mJBG6iUoXry5xUk6U2bT5yc3mnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22weNgcDX8JNtKQVVwmwCN9KEq9ZXswc3smpyfAGPS8nyHAmM54Srw3AEZDwpAhXXY5efpLn3zGEtYZbLn4TsGUo",
  "key1": "2f8qU46phWBUje63QqZ4Yg6sPn73stNFmT7WvnD9b2W63yVDXLa6mfgpMoyGUThNmEw2xsYYew56gajuZoxqYbUm",
  "key2": "H6GYzqHCfrYKfYU6FZcKMmf6AMDFqpnFHbJAbnnxvNnffpKe7qEvx27vufBmEoTPG7yKKkurLWBcjRyHGiiHh3R",
  "key3": "3NDiBCNTGrTxkHLjhtYkcHKahKpRJCcppikEpfrWV8omjvyKXq1vhxcchNsimpM8w6U5CqKx3K8sUnUoFn3y6Hfe",
  "key4": "2P2SFFH3EC58oFUNHBvGbmYn8HCezinRCgPxVjbMjsuKmALRj4fT3qH6fTXc8gnUuzU3FwRsT9z1v6koKHN8bbPU",
  "key5": "5Zi1xkU928JKr7tGLhwQ84ToMTVP9FkqscHaQVrVd7YrUctMdut9Yk1ktUe3e6Nkraqu9cpicddk3DaTFGkpYHJU",
  "key6": "392jhnUSKJ5gvU3QqmQSPC8ABHqs7NYRJbhtUQJtEz4giyy2fzaMW1o2ME4CcjYZjhmHHzv6tZUpDZsU1hXb8fXQ",
  "key7": "hEo6VqXw4YbTLDh1vZcLhJpxr6syhSLS2zjuz56gZK8CPFpRmrfQMsp6j4FCPHkZgH3WdSMgZYVMHVmwxQh88k6",
  "key8": "2kq2h5sbk1rfd2gLsTJJX8it2QwHXzByYs4ex2VRcfpATEVmcntyyWzFLQzfHf7MHHPHRKv6YVxTiPmHbxGjFspV",
  "key9": "4foqY7TFTVo8SC3TJQzYmctnQDhX2zGRqMcrs6kZkFDfvT1TQcAfM5dY8FcPpUi7NKFE2bvueBr9XAET5CWgDLyb",
  "key10": "2DiHzhygnhTDDtpXMprpfuctG4Dc2ZipE9Naz2wnmYFypqfuDEUTm2QSnZr975b4TQyYM8rx8Q9fNKvfkzSQxhJA",
  "key11": "5UomYaKii3tq3g982SzxfNLTDcjKXTLQYgHtCHYAgWWrmCzCGMYEFNXkrRg55bd5rTJKPLgvyfFpK3iZzhHYnvFw",
  "key12": "4krJ8Zk3rzYQMLFrp5hY6fTu23UpGmoC1YqnxvCwDvpwjBFdMDVL4f4wojWd3Ffa2h6B2pio8RMoV8KWanHSq1vf",
  "key13": "5ZD9vwT59qHKLi98yAwyumWKHCgtjnTqZQxLn94rQbzDznkphE4z1Bt5fDsYCtA1B2EpbE7uPjxPoDaZ1CVxYbZ7",
  "key14": "5sUMK5ZQtwCG7doNNXHDeWc5Affymte4asDSNfTF8gdC4o29yhpw6LBCkc46M96EzSJmFTPZS4KFTHbp3m5sZuUM",
  "key15": "3wfDyp4tdRueKedtuQap415itK4KDBn2j7p1Zc47Y1ZbPsnFyDBV2gbZFYEHWjWV4i69GEpjG5SU963omsuZnBpJ",
  "key16": "p7j1eXcvhKDiG1GXL2ocXKtcpXzMGAgM5XUcx3MDmyMeVvgEBzYW5zSgmvvhtkzXkpY1jMNioxnUmNQ22FQCywf",
  "key17": "4Uj381VMTjtyonASMTgrXFd8Msg1fjSDBzu3zZJK6buWYJLq36aFu7hJgZH4CKEFQQwZBGmyJtarDPZbWXo3Xg6C",
  "key18": "5YFcVDf1QDjjGmbiwo6z9t5i5txxpNFg6zQEyfRTTK3iCGBHau83dNF3wPzmD9f5tEBHxN5sHETsz7nSWTLCgLb3",
  "key19": "57tkXNGJoyDcm6o3BEQCjSN9775RkuaLXqzCmzaxo21sdBzNmyd4i4j6WMk55dxziWdQdqAssFWYnyrgVhbGLQtX",
  "key20": "qbhNg4Hwkdf9bYb14zjZB36uahp6XhvfmbXgVubWK8h5JW5o1qm1ng69uLDcrDdcgpsTXCJGBXf99fXktHj7WCh",
  "key21": "5qbaDQNTXpDyWvMnmLmdsm4K4s17n5Si26T1g9zF4UptBNk3LQyLE3iGEbSApf9TFHqMzVZe1ccxc8hw4vSLDS6q",
  "key22": "2k1f7w4mEziymTCi5tNrGWp1mFtxn6bgWv9ZnvKYbPAVwrA4444XfVYMeq3EktJySg7qFkMvVW9HndPJ7vHPQKfR",
  "key23": "5TgXTty6wkRzjWHhmuEsgKhd2hXnpQdV5Tp9MC1Hp3uz6MHq7tpDGyx4ca9PiaUWxbe8uFJxujL6KEJwGZR82uG2",
  "key24": "4GuyhZMTCv3j5duUAtN1dVJhm5tSdFGNEZn3tbTN7MjSwt4yR1UYmncS5JcDxPWriKV5Coj4kD4fu2dpM9m4S6TB",
  "key25": "3Rogd47UJeGRWV8DnGsXbLJCjJi2ijbSiofLbFCNTKXceEcqLZeqdTavF1mNNGje72J3yTya3mmkZ79vVCknZmF6",
  "key26": "DheTcVrnvMw8J5xbicDZrkvYDQir8raPubPC9QipZgXs5m7w6XFLtmjCTWJZ8ENhxEKXoDoWCCiyXWt3cbd5pvH",
  "key27": "4USuU1vemRMwrrV1fWFBZbCH8cGAt5o7jQ62Uvp7uoDoTko5aDQsb6a1dgjjnWw1yefUJz6j8E2wWbZ2SaGypXwL",
  "key28": "8wTK3YzLUV4BSuq7ASEJmw8emg4tzZpbeHB8THjGU8Ls7ENdprLYsPsLinERfYUdSkMSJLFWoHHET67nnN8Tmdw",
  "key29": "2jfMZgFKn6NsBjhb1N12LgzZAAXsKeZd2KGUPREPSZMCcmhbwuqxEw7diXA9nXJkUg7kCpBrbztrXWJL9WNGNuRi",
  "key30": "jgKtPdDEfwZDVkGf124Y8knT8aWx4a7SVa6e7c5tJe9vbGC287RVaUjwE2qiERDSre4qcDHGsTgyu5dc1DVfxEe",
  "key31": "QVanZAcTf4CCAgaz5MKSwzVvoLidh4czAEGjNn4M7YGbUP3HeDYpHWnYoL8MnUm773ZUN6FYtRyGjBqfvSRkeus",
  "key32": "3LsS4CQbqaWPzDKUcz1r1UhybhAKNME6zGqsVakoMqzdrEKNrLyP7yZmszQrG41HffnVvBgd5x1AtQetK6BG2c8i",
  "key33": "3Gm1E5aXxHxeJDySraKU8iNC9TVX8kGNaor9U6PPJWc8DvnfV581NhLXdXKT69D8Ne9eEdQbj2MJxgFMHr7GafqZ",
  "key34": "4uLiToUaM1xxcFt8p3wG39e2nfghEBAJmoQbgEzz7M9ZL2nocgHGNP4CRi5rwD4P8PVPL5B9QoQcVPhEuNrbDB4U",
  "key35": "Tj92Tyk5CsRJZZvrvt4SzKzGaBmswUohutZ6rZfeRGwh12o4EbW5cSZ8idugQojE6QyGSYEWUN4zofMfCeA2epY",
  "key36": "3UMiPE14fxw1aVyUR4JRfmnrfR2N35qc1S7FfJijstw8p8Fyca55d15mD41MRJypHiMypypQ7K17cVkEEfJzwVx1",
  "key37": "4VPcGfmVLt3JaAf9ghUX7i5mfD6ukNsfw39NzdPtreDUdeHNsFZ1rrHbA1i8kNbwRQEYnpig5Z7MtvmwEyBid3My",
  "key38": "3umuZzQPRrPzH45QehJJbJrHbfpDxfXCyos9kRvNAAFLbNUXbddVs64w3QpR22ADABrzXUva7adLpPUYsk1We6wq",
  "key39": "4kiCCkLQNXbzCBCxaEGmRkhf56Jp1pJCsj8bebXoSjX9Go28sTTcrSykMsTqdakcHnTrSsRxBZe2XQYNLkXRS3Qj",
  "key40": "d8N3Y966uydpKdE4ySFQ2Hxf2TCyb4YsBThvQoCiWNhaDB2yziqG5dGbW9TDBnRb9EwQrL3mqpzCWsN9TMYWzhi",
  "key41": "3ojALTwmZHorVRTEL2L7WazLXkVh8YUPheNKvVeszHfH2gYorqMTLpnw3kUVjbvhdKZKemkf6q4qwFvwEpGUjRt6",
  "key42": "eYN5nKuKV26h4Z5wvRANLjPbgQ656fekT3nZU2i4AQmTHTTe9YF541LmPvsotxcoBZcpazfqmBWJ9MRGCRkf7Nf",
  "key43": "4U3zSi531umKTephJXM1AYYiE9bHSYT1LvVV9Pyi2RwEd219AeXEuGH3UjABcq64F6cGScmXVp8kEoWdbJNRJ7Jh",
  "key44": "yjKjZt2ywXQhjYsvu2CBrHZnvvSHQhnwQFekD6vJQA1N8syZYuheD1SGNKgqgKn1Cmry3CcvWpShynHR6VzCtmA",
  "key45": "4xCmsGwJWGeTo5KBFBXmxQi176Cwuuns9GNSym4Jxx3Xg1U61GCjQ6HoDkkB6CJSCtcpdZcqo7dnktT1emuw3bzw"
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
