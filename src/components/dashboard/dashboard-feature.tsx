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
    "dzfiPmqFHTYXSeQjh3bfT5SCEPDAZQpNdmF5fCZwzAmLXs32gic7Lf28JaWuHQa6ojP82QJFtpfBGPkf3m5i6T9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A5YXWw9jzTy57qDvXmEGLU6a2AZF61pnsxVZNwbz6jcKMdwdUTiFxXXYwybHJsNZxtBRPfMGhcn58MdCQE1Exgs",
  "key1": "2ym1o2vkcoib1BvT184TkFSUecCuxyGTRwwRDbqXuLmsRzEfTwS61TotMeKGhLME1pS59TB5JRUTVgNdvwamuej9",
  "key2": "28uoZxpKHSTRG6hhcjQhvwxFGvcBi2V3o3EapaQ52XjjWMn9mMTpWaFGq1MhJN44ZNFB5mbZDyLW1Mcer5JZkvis",
  "key3": "5uqirgW3QPLEgavTcce194imsKCz9s5Y4SmaPpWGCG27rNLnEjNNWAaWg8fRBLLsXwwTSnH3QddLtqStbkRuvNRH",
  "key4": "2rFUWV89nsuATsBmBvY6SEtQRdFMDoAxMu5H4hxqFgT7U2RYAmvMr5exj7fZZtocMHXjVGtaZFMaAaKPWbuW9CrK",
  "key5": "2nS2hjaTnbzSVdBjMWY2GRm5NEYLV5LfiM65tVHcA3d6kZzXvjRqGokqmMKn8jYvwBdLKSDZyXERVYYnVrb25ku3",
  "key6": "2Ao5KTLMjnVTALJTzDbL5rAybFbxqxbLBcV4NxpwLB294F4FG1DompyqPJ3GBUuUjtjbVvbBcLtuS36TsfjwSPft",
  "key7": "378TmtbZh9Et9HrcvR1VLFVAm3cBigAMFtHG1nsavdtH1szmWYhiw5hJ3PQHY8SYunvad9G3JNUsPReu1ndasJEz",
  "key8": "64ct5qn4kr4GNUdv8C4ZqwgYLa4KKPcJWyC5pdahj11XfxRk59AdPGUnrEmHPtnYfTMUQAcgFCZFPpK76fajPLrY",
  "key9": "4a8XFHkgdALUsWGebtSTZZ77JaGtf98CYxUZAc951EuGwAmQBhNoHfmM3DBntDpsJhj6HsfaENHktnieodLGLx3",
  "key10": "3gJL2yha2QaB5hwCYyzJHanGG5yycVpJHzeeMgqakBm77GVSD8jKHqbnqtJt2qyTBxiuYRiE1o2LgMTuq4rJaVhD",
  "key11": "4qjBQd8AfcLEj4QJGhRQX4n6C7v1U6kfiCKr13XznZL1A169Xjwjd4NfKNrkBdBGqyzZWvPMPSiWjH77UPEhWziG",
  "key12": "381HGvkqaYYs1irws4w8dYmk2jwJexdrjpCSdHJKTX29Pnn7b37M3VgYX9EhYg9YCPyu4seHvRBujUdA5RyENVjR",
  "key13": "2FyPFC1mAvEAoAnRYbNyybRU3u32cTHuFqnLyTHXLs4KUdasBUzR88ZjZfiATXFtA4PvkxhkDjwE59W8Ts4xFL9u",
  "key14": "2XvGuxnqarkCzLuAsRx6rK13LjLeot4ZQvkPX4ufHMtrCxwZYbH6MWkbfEUfLkHKZodqnNk81JPCeg6U1RV5xBjy",
  "key15": "vuDyKWQGP58zdrVhTfjXqoU6SoNxAfb9MNFPyVE5THMPzLAsYHrrxzJCrByVFqsagZnR96jYuwvBjpTuaw2Mky4",
  "key16": "5BtpHsRThjXdsNs4TF7esUsRQiuX136Yb7kcv722wk1qKfHk3ffBGHbWafLoHbvDVXKUmyGHfiom6vTv2qwcznxb",
  "key17": "3hfQZ1D4uTcUhvWhF9bsrfY2Qj1uuEdWxz9KuvMXraA7xAyKaQa5UkzmBMjCAHKtPd8pUQmdueHkEqtUWeizyghS",
  "key18": "5cXpFXAWSQp7XdbEfRs799LheWPdy1dWaniGpaxPYaYScF5ysWHrY93tzGfpFMZ5DHxF97dLEGX3wXxTYxrybSki",
  "key19": "4kDz8CWte4e7d8anDcA75m1yPdcNJVuzRwxx6v9NP2oMsPDaWVnJLWz1iXkaGNMvBWAgLR8473kxs9sEaFN1qzvf",
  "key20": "5YybM9rWg4AA9EQiQoWZX242sHqds3ASDLKmCBMQAeKBF3QuA9c1h4e5cAS434ieo4DPzaXqZsfVvUfcHVaiaqat",
  "key21": "4WKDmeEDfGgxJiTHwjmJo2tChUe6DpU2WZCrxsw2BoXX8Nqh9BJHgudJrXQkzfFSSdS2xYZw5tPssJ2nEtg8biwJ",
  "key22": "2WgmZxHAjx6FmFXpV7R4AgSHKxq1hYZsq8HvHrv8xB5pF3ALq1kMZCZPKvxCSasJMXa7zoxfWAefQnpYRSu4WsZ8",
  "key23": "Y1iJtPnbVeVNWGffXQs7Luf5KWbJjHjRARfvXHEYBRhRhUvPeyts2eWZ5gWwDQhX7NxQQuknRc4wgn4piRBC66B",
  "key24": "3zkcMK2Yw5tZNfiE6Qqv6FTMxCrG9srPLAES2h6Vv9gbFdRmHbyVJ5HcSqFcDmiWfoipNgCRag2udpGb6igBNsfX",
  "key25": "4bMqoQxugSSbJ68BcUihV52XtVLq1Ai7aQS2UBmbsuWN5rRmGCzKukKWQucG94aSfH4srHqd5qYFnHamzXe9PJ3B",
  "key26": "4x7tAyMfA4nLL1f8ZT3EYpoBaTpupaepw5HGL2Wk1FG97iboGiZdBGrpiH1LKfkfZG197NcczrNYB7edz8TKeGzx",
  "key27": "2PzDRch4ek2HaAze8bNd21Bo4fKet8ZnA3QjDgSAvZfPHrBB3TLSNgJxqYrJjBhhYMfAWte8U2FvRcDibWkfZHfR",
  "key28": "2Pz37iKA7RgDDJX4oRBMVS2YFmjXMTvb7wTHeptz3vUPTMDYN1ZUbpNqQgH1cGjBeSbeKrWbK4ZmcMPpvNCWCYmy",
  "key29": "4Fuy9L5iN2Hgkhjxs5tu7Y9ChN9swPzFxfN92DBJLfGfs2HSi8SkjDeX5embiSv3ApCXAnAzgtj3z6towiVpZxoH",
  "key30": "5FgUZFbvqWzdrEEMHcGPR4uGiDz7QMaCocsof2BmbcRKCRRXxKRcUHLq5gL4FQJPJfULCTwP9TouE5qpTLdvAij3",
  "key31": "497VT13jd7WUiFToVB6RMJihHn5bS4PFdeeQE6Y6yRdJHEJnDHAfjX8ZTjcByaBwEBGmSaGJtbT24qLA338WQ5q4",
  "key32": "41m8i3YPqbhm6Gj9TwPayKBGAD7Fn3D6uPBdeXccKdeMohLvwRjEuZfyV5EzNV8hmNrK2fq2z1w5bG8riPMcNzET",
  "key33": "5MCBhPBrVNny7RzbJnNQ7zsSxn3KXnSfrguvKz4BcYjE4jShjbonVihmhJjdrDa3yvdocbvzVTvJzPc7GTLSb7HU",
  "key34": "5f324aJx72ZH7GULsgucZxqToZnvnxUwvyRg1jwMJfLpDZjW2ewrTDLAmtdxk2AW3QVZSNVe9Jk1ctEeCrY1zAMm",
  "key35": "2PQdig4MvtBtWyxLxnoiWxPXYihwM9evz84JMMhTowJqyEv8tEAK9vquHWTJH87wzdW73QkbqmHntuhnMLLtQTZr",
  "key36": "5CPqKkYygmoQdnHzccGA3be7AxX3ghwzVHvAvArg5XLbfL2Jc25Nazz8MxKFPVmVSKE78Mcj3R3tgP8PNWWrDrrJ",
  "key37": "5F537vNurS5pD5H1Dg4w5sYv6bqPRS1pfYmweBShbjGmAggTDtNhzQ1X1Hraq5Ds8sKT1nKQvJJhU6rUEtjHqKua"
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
