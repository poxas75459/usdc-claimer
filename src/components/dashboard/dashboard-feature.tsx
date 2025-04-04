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
    "afhEnpSHY38aEsj6A4FAjwjtitziRBm8UPdrrcCmSimodN9CkrsKthFzmYVDzyjVEuAL53tidZByP9GidTkU56T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oYgnaEZW2kddaUiDGBVK9ZCiPpyJ4r7rDnGqF3ekdmFQ2p48QNQAEc4n4vicKxRCMxtVsxmKVTvJWCUxB7vfTkm",
  "key1": "42fHCKiJGF4NT6Jv4zMp3t6LNAZU8YLELM9nVYSr9bB1SwL5CxiDcpRVkq7tjzu2KDGgKUF3BdMsp38BEDqc9Uwv",
  "key2": "4Ts1oyKFvKCnrQtcFowpZNUzbnTSUrBqTbUDx8NtxmAAnQ7qyzNYfHc3FoESt5aty3zTn7BoHUN8ZgHs1XivhLjp",
  "key3": "2Q3LC9fzBUTcRvJcjtXUKyvi2NyjfiWFFZ2qsYx8YFdG3D2ig5jrXk7JkwGVfCieNjrQSmc5g34FDKheWGpoRvZP",
  "key4": "3XAd4K3e8BUoH7YhJZqDdV3Rp2DoJ1GMkXKwh6RUgAyyvF1YJ94EPJUZFNSiEVL14TD3U7dRUGM4xM8Ma6yv5qAK",
  "key5": "3HJYN1yWcJXpAB6eZn8DtzWaK7myNMBdxFYuA2gXMLHhTpPD5MkZGqRTyFnQ98QLh1LnhzunKr49N4zPcQSxaMTw",
  "key6": "7tyuHZtPLwXb7KGCJncRm4i3pjYYUW4F5MUhBnFdzTpqv3hQb6yWcaV3VmuiAbC2XQuqvHYsrEahBCjc4JYaVZL",
  "key7": "5E2JR7Rb1YgdJDnsYds33NHoLV4fYtp9SqqRWCvxCca3PxemvFeKvR5tSL8tSwAQTazLorzp2s3cnaw4NKuRhG8J",
  "key8": "3geFJQtuCJkTvEwpuXbWMhQh19po3o5ZXhahWawCM9MrXXfufXoWCBfXgS27MNKAmCGKzHAFqAqFuPpa9iHoAVTk",
  "key9": "4GAx8MPi4WGPa4BAA2qeUHSb29vhxTK9RNNu7Nave7mVRGctij98GGatZLxpHiWXjNysAkssPkJGVMArLwQkDV6d",
  "key10": "3vcTTxEbWYWXVFFh62mNRTDAjfDB6uyCc2p5Wweec535mSGNoAsq8jm3PpzDhYu9FLhbfZxxsyVaceYQULdENw1E",
  "key11": "4m5sPXzcjVs1TU5fTTRgmVs8vQn22W9sM5UAXcdxDmhZQTqQ95r5gezBoNgGcsv198mQveSrnwEegPQeP23oRVyv",
  "key12": "2saW5S7SAwdVSLT9cydAstDWpbmyAFb4nu3LirGhCfZz77XMfQ2EapNNJtP8p6dQHqMTQzFD8SiqBhJBhs691cvi",
  "key13": "jmnMxZsSCYv6L7suALrqHWz5jrjJRmLGuEoLa6z6WGfujWFHpuiBgTjcbFidqUZERMbAgJHnZb2pRFSaAPD4dqm",
  "key14": "Zzh7njw2QsqYANxJGAcozJSsyB9EeVKfM1kA4yZLen7k7w8CPLgFrps5xhsKj2J7ng9mLPXWe5TqMA5jwgeRRGv",
  "key15": "nrHjg4J52Cfg4zb2VmwbYhV2D41DCm3RbtxVqCd6FqXXEwALuo2YuyRhQoGiyNWDThQzkQ7tvcw5ZSmuZudhLq9",
  "key16": "3Bp4xNfQNfY4zm5t9bEyqPYTAT8xrQSX2DgvTC4ZPp6G7WZqd5pBwV9Ac3vdbjHg9XQQ9nSF3emmvmZVYzsZaW9e",
  "key17": "MsfBa8mRJ6DSMk4iCAdxvzHCUNJZjQon2mAJ4EJrGMY1ea8wzrWtMBzavX1kDAfRC9Da9RcpAbtGNd5Wn1GnhWx",
  "key18": "5669nxqdDqgexhJV3oBG4MsYx2PPgxBbVRLzKVzxoGcpD9R1DLamPYxUnj6uML2YHF4ULJ6LA2RQnJmfKiWR3H4Z",
  "key19": "2qHThMXCdFAFwrQrhiTGbph8b6qz1t6VBEe2NmQM1VEqpShM4C5b28h8zCmn1dSgQKKm2XueUaLZZPTvqV4A3VxC",
  "key20": "QsEubyFX55NvDcufoPBkq5YUX6BEBnPFvkQQMB92f5ZAyQpvZQZArmWUs7ZJph9NK35XBUAnhiMiF1QTS1orEd8",
  "key21": "3JwV4RqDSnWwhNtuJznG4D8DUMffDGQjv38FpFa5BeokUX3eypb8iZWsCN7y7hdDDfoDZ8z2EaECJvqwwqXCm13i",
  "key22": "5ucJaymVqxhUWBYENmyCRcyYidGZbKi3fLfQsmvfzL8vqYBsuu4FStcRPXuyg1JejDqMQAuMcW5F3RX3EEEjDUgf",
  "key23": "5pHTXBfwPrWcveJpH75BgbNrkyYiHew4PTDsbh7tV8wmiPh4ZRVdNpEyQv4J2KYJh4pQ4yGrigaX8TfvgfYqyfjf",
  "key24": "2ywoj6bCX9QAEMnG7NDbJwUiDQtb1Fi2PZvRyYZodWP8rgDXWSB2eC3vfNvFebpX1oKPq8FC3GPGfpq9Aqf2jPsD",
  "key25": "42Xjp7uSDrZowNJiEoJV31YvnSrBZG6aMXbX82mEQe8qeUWJPsB5oQg336p9o1LNCaBiqkTr6Jt3451v9zUtRM4",
  "key26": "5ATt9adUF265DuuyBXABbq1TAcqesQMWhAq3R8AdPPdmxzehQ7jmyNhqes4QL4GKtCmbxdob4EgmrWZBrD4imy9X",
  "key27": "4s5nMxvYkCUvcpfH4NXt31xUQN5ffx1y3gcGcayK1YTB3NLymCSh8E1fztSAhD7vGEPjA6Wi25kn2dnbWRe72f6S",
  "key28": "4C9svvnFi5NhaUySnyhGppDaMD4CrfiKNxRCxk6JGZLFSbai3BijoiJtTWUQfDhGGr69brpjJ9e8eBi9gDHjPAsx",
  "key29": "4XqGGKDt5ZfK5GrLACbh2vhvwiZSdNUdHtsv4TQPrHcETwtAhfQpKNWVfKoJjzVF18nBmHX36BmU1XMosDddwwie",
  "key30": "2Jcn4qVutActJkQYp5vLrMdoLa4eJBefxp885USqzoDwJWWJcYHCG8ftzkipRZmgtZtNVCfUAuDhoasd6N7dveSH"
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
