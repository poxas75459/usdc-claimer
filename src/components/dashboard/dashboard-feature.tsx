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
    "3pBk2kXZ9JNqFjc4uvZyRS2oGbAijzj4iWHgZnQX72ejAXzefX1oAF4edtz5ZZQeNcsf3aVGxqw5sV63BpDb9DuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21CvnK1ez4kUfiE2gUieMaReev66rpv8yF7sU5XKvt5uAEEjiwk8VxXCMCiuNKF5d8C2ex2S8jK9H3MKvqkspjtN",
  "key1": "25bqj4DEyCz3Kton2KLGbbfu8nqh79w2EdxY6i7UZsnRXSrbM8K4wpfU7iP8rrHSV93QkwZjCWa7xBcbyc2WsJtf",
  "key2": "2tufqk5oUvjKWwJGKVQAZE4PhAB5Q55WoNmz68ZqtieecQ4wFa2FYfYVVSaNrPyZ7vHxCDhymJVDEEx8izfkaMi7",
  "key3": "4BrridV8apuLvDZGgek3GQ3nbBkZuao2uKDbx5w4aDapo3R2tKmtRA7b7PEEVzG9pcxyisaCCVXFoTtvgQvxDhr7",
  "key4": "2GD5zXiQBi4CihxRzsYBnt87id31BgiRuqoVuqsVkHfoT2JH1MKjkUBgDHCoHQS7addeTuFEr1MbA25LnBpuM1if",
  "key5": "22PFqYurQFb8gLRG8kY2NEsiArnPwZdiDSr3DHhTH3uJEMPqiSY2FhcJLFnoDuYsJhDx1gf54hU2BCWS84e1w3x8",
  "key6": "5bgUMK4DaA1iWiJJyZH2LFDE2KdKpyPydsHkTbd897zPp3AgtcHUaJVGXBskzxh8VyRzK4swBmFJk25ZMeqEtENV",
  "key7": "62BJB7Au4oEu2G2w9D45qBGrNXMCSFxxgFa4ibBHkR31gauE61pBEPRJDBQD3m4uerKtpoBxNTXHDYzmvrU8gHMD",
  "key8": "4r8oY4A1EfUmgnUAiYBmG4KMbrSyL1C5ScfbRPvCayavktzNLdRdT83UG39LNGz7DkmcXhpTzc3f5o1H4HwZKiZu",
  "key9": "2K487Tc36FPkoXRJ5WNAJMygAAPAFGyB2hD9n3ZVN7dWMRNVaa95vHZ5iNT62hH9dRTt4rVprCNPWGC7DeMFz6vi",
  "key10": "4hEiUnAeJ9TuwHopy11t7C41T7oNjxQmJd88q88MUGa4WajEtjk7psMK6g6ogCmbTugv8cwU31TQCn5W5hJWv1Ur",
  "key11": "4ykCYZWgfgSPdQn83njetggSE6kyX25AfUJ9ecbw1qrBvj3EL1Qnc9XQghgv6iX5yo4UtnLF79NobR6KVheD2qxY",
  "key12": "4Z5zGevQFYkCxBNqMTt3oPR7K1PqUmkpfQLcY9TJxuJ7vphC9U9N4XJAuCD5QsG2wxcacjyhnM7xDsHZ8dBmyHWw",
  "key13": "2iuzDAGmuV6aFYBYzgD6Pdn4UTxp7QstPjAxfkDkaYknyp3kofAMqu6jfLQ6E9CyM2euvquhWdJz8qV6xdGEEsCq",
  "key14": "2oVABNF4njSrauLqrvAQb5HPq7HJnDXzr6MQiNWBXetPoRdvY1ttHBPAMG9KPzfQQ6TYUhriPZdAc7iGAoejBWFU",
  "key15": "2rFqfdPQwgcM9h26AQkpZA5dkGwd5X48h5cTVMR6DmpzBvFJQzLznd4tWwdC69UrddGQKqbEwDiU58skMqHYroVj",
  "key16": "g78m96FWykERgieTQ9zYDBn78M8wnHBHSwV44KZhbWMW6QXbR3wxZsMoEtfFnxpG3L7CqTDSRw2SrPSc4h6btaL",
  "key17": "4jQrp9ah1BXDgqje1Ujjd4tLYUH9u4pVbNBAMg9rzuJP6ECKkvSZWSdeyrFH1Hsfwnd2uPFrnQFiHSJj4arsUKWo",
  "key18": "3Xpm3PT8JUV679bmzrb4uHMryrVwUGC3ZC1AGEfhxk5q1yShebWMfg1SZ625jLynd35r6rTFtQsPdRkai4F2CZ9s",
  "key19": "256BPdCuyAoeGrkR8jStdQ6WfkzY77j2YpfJTTuTNKhfbSvAZdBHtoK9iUBC8zjUtttB5BNy7F2DXPE1yooxT1op",
  "key20": "4T15PSaQDhcTA9peeL7aMyCF84f5FwzjLu7U5SnVzGB7gd4Pbvopu94xF5pZTAnxhyBUPJpH9SAdHWkngEkBML4J",
  "key21": "2j5DzuUTFmpHwvhSow8BHtNPBN8GpHBE2Dfgj4336ut4iyuRDugKvs4VmVJeXSxNRJtvbqP4ogE5niLKJxHe9fLe",
  "key22": "4fTW1HaAUUGxwCH2fv991wup4GyRaSgnCbSNRknWUndrE7tdECWzUefpFeTmEqS1pWQGmxLzZQLD19BYYUj52X1y",
  "key23": "4ooUPxYJRx2TxZGs6wniZmfYnRExBs4YYn6mVXZx4GfasKTkesKDuto34SmpCzd6TwaqYhj12Rjsm3NfFihePFAk",
  "key24": "8Dk21XLMmf51g8cdhpchfNoKGm7xuNEwqywuwFzAuPSjAjGUeqTCtAFHdEHahrejrvfqvHyyfLZjsnSruh3rdzN",
  "key25": "2VPHoL3mADmxxksbCUYRdTix1S4p9ur969FqyKRnpYTY8ffepciZpTfjmX2mfdayAWU3dtweeGkT8wGTD8dTj5RD",
  "key26": "5cdBZC8NoWRtM7FNtEfn4sD1prw79jMAG6iAmvsPmy4Pqo7THS565jbCav5UJ2te2hXTADLwXRPMeZ1zbHHYMF3X",
  "key27": "3kEMjQbTZfVZJk8S9bze1pem6L411aMrpBC4qgPXNs65UEUwoJdGbxPjiga1Ay8XjJ5SiGDwsmZcK9dNmPn5Kvf8",
  "key28": "2312btWRJpgyUtnigxQ6XhoGGpFgcmQn5ok5aeBWULfWy8rfBiLb7gjk1WqcRVjEAR2EQpLX57MJAuTZ6L7pgLPo",
  "key29": "4vd1TCvmutZHpsa34ceRmCsPkVLE13GqpTnZWnPqZHyKaRmTEo7itESTzioA9ofVX9UdXTSr8jx8iJocp7QX9Qyo",
  "key30": "4gqed2x9qXZT7hApHNKe42h2e4QdpiG2vDEtnfo5YQMh7q7vvhsU7vfU1E7yEjRm731gV6euGY6Ha8ZHf96ihS6A",
  "key31": "5dLinyvi7DH2mazmBfx2RZ9XZK9abQN1Ci3B6XUrGrdeBxPh6LVobewRm8a1kjtvrChx4CR2cuJ3f6dEr2QSh99z",
  "key32": "3zhzWELWBx3zqWmuxxoHfgnZji312sdJJTCaTpVwiVrtdMMbJ1BDBzYfHTjpkuRcBBpR9cHRepLu7RQsLtYsTadj",
  "key33": "5DwVG7dgKAo7a2Km7dAqDKLnmdTw8GumjhJ95BAHvyFYqrZYd7noy3PQ1n7ZzaAh4XVBLFW1MvCBRBXtnJoL3C2t",
  "key34": "3SC3rqv8oB3zr6k1VQsRnDng5D6QSNsMRbUDABgnSkAvKUbz9AAAa8GZ6WiWVP1T51gTphbkP37XqVvsLHmAcc22",
  "key35": "5r45DezRRYfaLZi4wGMqqgHNmefUDGaJYGXsps2X5LhuTd1DEoufhjbYjhYv1pZXd78uggKzN65TekkbFHS71HLC",
  "key36": "5LgDpzFkWzAaw7mAum8nrW5ZWDszmkJDR66jMit3dkoojHJYb5zLvcaLddzJMEs6oe3uQXoV9UdTWZv6uGjDWYWj",
  "key37": "2iVXNe7ic5LQJsu3PsKPe7mz6e1nU79rCmkhC2dmUqZitCn1YFiXEM64P9dhb15cZ42VSXX1NdYDeQe2Ng1L8MvC",
  "key38": "4BepTDWy29AnL6gfXi1UVA4w835swFjexkg4VfKcxv9DzdJGdoCnjDb33cKxY9VQrQopfe8x8vYKWXmPHSzjqM4Z",
  "key39": "5kfb62Xk7g2gTBM2eguUUXCbE5dBAohz2Z8nZCJe6kSddKeLFnfsR5b4KhP17pbVpMqfKaBwXPg5vztHcz3EBhiS",
  "key40": "5LGfWATyJR3Ld4sJsAdmjaqaPDRVZNRK689fY26SoYf2V3v16o74PAk3b3eJq188eexQXaAQ6wZofTQTJ6puSM8Z",
  "key41": "dcAo2UsR1pCW4pCDFiVe1DMKZcDXWY3M7cK228tjPzGnqj9uAeJgVPhguQnVmZYaye8vnZQGcQnqiUzhzc7TXY6",
  "key42": "3vBkFLCn1xseerdxW9DWPLx3hRuFeD4CEbMFDxvtPXoZTdMEpuCDzAHoySqUPYp1ydAdFYBkHCiv7KJ7dxuzvusN",
  "key43": "4qFQDYTfVbj8rX5uwumExSCSbfcic5DQB89DfPna6tjugrByezTseME1sof4f6no76FguqumjoxexpBw8DrAGJi3",
  "key44": "pEZZrejxPeDKKCKUFnhoDQhtQMqVsp9cY6cMGJK1wAdQ1HXJWtqqKTgQL5t5xSyh4pRRxtHZTH8umBUq5FgCzw6",
  "key45": "5zxSTWuMwpbp8NqVLrn3cBEvisjLJKQk5vEitvkVmRRuHVbbdoiYmtZhXMAoBYogKta652fgrVZFNNx2yHT8mwUN",
  "key46": "2JTMANUt6zbNAadu4LhuioUYuX6h9LDMveTbdwDd8MwE1YDjw4ZJ2KAwmb7enbue1rBVgSJnEe1AnZkNLdU386EU"
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
