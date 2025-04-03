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
    "22u1m2PQnNKEk5kghhn7cEfALAdSQ5PxAEK8sPDGP3g5Syw5desh9ZNW4Py4QiBMaQLHEyWe2vtA3pGYTqURCz4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bw3L97VbGYsD2aQt4wH5E6JbhEyqtT3QQCgXELdTcS8BNc3u1yGEKNRHmdNiyi6MMAUGkihuRBvjmjcLeSYzEpf",
  "key1": "3R2CnZGvqA77d6huTBdq9KtTCvedThEnSwPDftpkWUa3F23EC4pXmdkU5hZERFF35EBsPkRGaktCWiA9qh67KLiD",
  "key2": "3kX29bcqQoVGkeFAB78Y1LzxsEfCQJN1poZV72rJXkVDF55Jz4rqLDyZxBNeAQLLfHZSzaUYuMtuCX4PtXrth5Ft",
  "key3": "4ouy4empH4sKdn6orHUtUTasFKpRFtKsnS3tXDEyNnh11HojtBBFeJSvyhhX2dp2fjsJJ5xawr6dNTw6kyo6Efwv",
  "key4": "4VUFXBE74XTLu7GrdRrhWoZcuPXCFE7xn1B2BjVE1NRJoDMarvDSg2HXaLwdMHgVo3pWn9YSD8vPwbGfChUZcwg2",
  "key5": "2joVEw2id4pqG6BS5dwcTm854pd1n3qLcuZLfb5iZxy5S2ABofsMAfxzS6HZgoWwy3qYb5aeyxpqENEQ5J8uu653",
  "key6": "TAVu4upvGQLj5bTGsoJSYVKr4kCRs17peyR3fMmUsTYVWEKgbD3c3CbPnysY2NxtwJpQajmKLgQ2aUSRknFedJK",
  "key7": "Kg8hyaFjK478ZDvvPU9H8ykgK8cxmiESjbht1iHvpLNfLmjbKsR6D1yw4QjfeB5K35VCkRgjPbA63ameg91eVRa",
  "key8": "3PpGgohyJoxip3svwV5Xcu4DE3CGhiNsuUQZn5qrQbaqY5dquewiMGNQsR83PRrpFN78LvJc8H8Gk1jwbtmjy6nP",
  "key9": "2HdSC7eervQYYw6QGrTWoGCpq9bEUSZKtGbXMYMUwmcBxbJFEzvLuWsayHL9JDiwaFHA4sxgS6HNWqjZU8fHtNKd",
  "key10": "4iW4suPvovjwJprDMoFMG6PkxjDYUMtGbQbyqkvCdJUZr4tLQRVbZBXxxKwLA5RAMUvxZhuh3RDvz8XpzWybiwdu",
  "key11": "5CTuU3ELk6LQqJ1r3qm9vXVZ9MY3oLp6AxoArfwz98GkxiqiFgt8QPAeBedeAZT72JDE7rXoZmohSRahTasBgteb",
  "key12": "2F94Ba3p1t5oucBBMzFGxwaEp5wFwwUAARbQkquBQ62vztcRCy6riHisWBtpcfGk2ZBHctv2NhiJYgXm41cvt7jw",
  "key13": "44DxamSs8F5NUzd3uFD24DBMU4PH1wJYEEuAYmsf9hiAgHD2qAm5SnWMbiGMA7U2HVksrM7tX4hWkzspGUGckWmE",
  "key14": "5oM878HX6sUcnHZBbsBTN5coALZPrAwUuyTTPT3MGafp2j6N9cwx4QkN7omgCSPrwKCZ8mnwDB7gygCSAwaQAf1B",
  "key15": "4V5LoSmWRYHgL1EXud977kNTnnQfEiJiBKhE4VCmJjSDdi8jFw7MBMtr5JkwUzryQ37now3ecF3X9BoMoMUDCiAA",
  "key16": "4dw1KHWWyrwPASVSZEnKmGw9RQBhGQqnzv4ZcLwFBBsgUuevML94RSkT5BsmPL8BpwFExTFxRdWFE6KgDGp6DKPn",
  "key17": "4ziGaFZZzjESvgNSNZKF4tTrhAccjiWELVD1TDbohSLQyUzKSRsdYR1YwyfCf4fPFevW4fjJ6KSPoyM7ExCRUib5",
  "key18": "4GkfDgEq9M6VsyNTyx8n8BYdymE7FesR9UfXW99aFcE8pfva3PLV4yYERSytAuk3PdgRSrVYhcSXaSBABL2P8feg",
  "key19": "5SDbkfPpuVp7qcPz9Xx588e8ERnbAHbD7fZYjRNEafs63Sre6VSFKiZ1wKMFpDLu2MsS5m3C7YTeabU9frm2QMfm",
  "key20": "4oFYvBQb7bt3JXzo4guoZi43rntTBkANx4WjZ7Cvg3LxMLYWzVUYoYk2MEyq4QGKosdp9ZRBLspXyR94tPh8CUUi",
  "key21": "4HwGMANvGgJvLuQQ7YNpwvNjtGRN3v8st7sHVJh2KikYyKF8cJKQabij9DofqtS4ke22k2gv6ygF8G3cEDm9Ftwg",
  "key22": "2mxS3mTY8U2y9BWKGMh8M7fyD3PyoWSaT82PBD2efKowof7Wrm167XMK4QU7nCdNko5gZR1Pu4YvAcE2zfJkan6C",
  "key23": "9VyPvNNgKzXfi5gxPYFYQ1gE5qTLy7jKeu1hqKpueudh3BreXiF4cyPcM2ajG5MusLGWSKr5afKFBd9fd3TYkJT",
  "key24": "3uQyyBXRaP9SdoK2PLp38gPmKY9mSwnQbwMeNaEgUk3ThSecdHqQ5bJMBcvDjRPdgLt9jERG883ZJiVqdgQ4RJwn",
  "key25": "2b2M7fctQLJ9ainNcLeYu9xBJ9bbvFtipn5iYRf2VM8vMiFg3gbqezhJn9kZB3NyLFyAeSbgVrfNRjBXKgsfCy3X",
  "key26": "3rwKFAcxKnYtvbzwVr2t3PTN4sVAxbcXpF4YVqNqnKWiY1otBFmekup3JigCcBYUF1ykyTDLVd9gjU33pWPEwuQD",
  "key27": "4nMZyzXT33RBC4LuzJL9QNttiThss4jaYKAcLCPqDFbW7FRRrf9MA4ogBouPwFFTXLM7NnXCUfBNiv2JSfLHHe7a",
  "key28": "uHx7Xtd8DTyeX4B5xa1c3JhtM5TTcMm8qjig7nFxd5MyFyrcjTLp9zUStvSdDbBo4n2gwQWDnEADDktJS1f1CwX",
  "key29": "3HvgckhzMGrirTohRx371etDnexUXhNMLt5qNa1jc9HdC2e6GxQRSjEN1y335ojgE6x7SSTCjaubVTYrR6viHjTB",
  "key30": "3PoBWSeM3Co5BD3Nz5cKt9ks4bq2F5jFGsHmAnLN6ojanPFaPoKiHbspeuoEwMSAubZALx4viPipknPGAdBDy5MD",
  "key31": "5mkHzijiVeFPEBnKoWGH1gMtAGPrgpiRRhMtFa2pSf7MATGhD1NuvQKLuKVozvqSkr2A2fJ8ot914mgZWGjjau3",
  "key32": "5mfU6D2MiM2eijxrCREgMXkTnyDn2ydQGkXdugJpU3E1aJL3iMBQCMuow3LtpqJuE1QhEDNKzyU3qFHAd8vSeF6f",
  "key33": "5FA4224NmQ2X6nav55mV2tMQE7nXkk3RT73Ji3ocgLRFQxYKD6zHkTUEqw9zRZPHL2Aanae3wp5QbgzjQ7JbjXSP",
  "key34": "3EwXE96cGmYPydewDdtLGCd4xpkQ4Wbm8TGh9Kz3E2YB1NabQZkE9dBDYb467r6nPAQthHqp2dEKJ3t2gJ59Pzg1",
  "key35": "48i1W5W5BTdj14fRKwrbxgpMiSwzAZ5S1oVA7z6JDdr5UJjeo9Ymas87b6LcBGtbixXC6JLYtXRwHw62LYfgVYpp",
  "key36": "6DRU6phZ1sLZHxnMbKNXttaWHTADzi47iLdtbwBiJKiZpqHXjqshbsCBjmqEgrfuhk4djdeN3s4JDeGNPqWjGph",
  "key37": "373n68wGR8TiYPr6BycrC5MgT7qj1MeTshhiy259cFBKGz2FM7WwG4viLiHDV5iYkVF6omZoBQAxN5R19cktkuDu"
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
