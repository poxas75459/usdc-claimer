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
    "2rh6BSk3h5Dpei3J84tBEaY12ZZ8GS53cd6eqxQxScK5mSySL19MvFidNGaCa4vhXdxe3uGWuunaUhyZokXLzEo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z7DdBXZ3ZGZiMMbyVa6UQHhKEYnLEDiTdRS1mPkxnnRKvxE419U8WV3n9oudKnFrfYP6e2PEi7n4sESjA3Rc1wK",
  "key1": "5g4WANwg2yiJDfruCqomoE3aKX76VkxsYRX93H775QVLyuFZEZJ7UQsprwSNQo5PAACK8gzdm2wz7b6bpRo8xJj3",
  "key2": "3n8qRGmMm6CJR6NZQjVVD2JKPryYMz7iXp6H5A686eAz29WPEaPi4oneezW3pBrxBBzgFXmcqk3C26Gid8wYiCaS",
  "key3": "4Nhkqm1WbCXWyCWu84Kig2aJcpct61uwiHaoumBuwUKPaQpdVL3EuT1oRTwcyexmTENpYPZM4kJHchUABJDBMXEf",
  "key4": "28mhTQK3iyS9EDhcFkyKsSF3kxEhpa6K48aJfnDaXc4Y3DwEPMPgSK3igJ9F5nxcndZ3J7yQG3paa3Gww67MjtKF",
  "key5": "2oPnWjdcrMnsFYAi6FwQVYPXmZeMd75SRxiUfVkxvM3RPFpFBrL8i1kTwmJyUfkmHigior8PiL7Gu2hcsxsuzVeL",
  "key6": "4Kz3RB14EbHqmtcEpVLnk8Kn3zMYEziRdrURXfPPiWUgPRuaUTR4ACSBMUr7vuieiscpMo8Ef9EXn5fDYxmBPbgS",
  "key7": "2WciSxHf89H28UCN47hkuuzd4m2ztiirp4HfWpFehh98JYp4a1GNMCTDKhv2vKMdaJxx4wjbVn47ggDsQpmXuLGj",
  "key8": "3kQDx8CdXBz33DKZfB42nVMmurZyDd7em9nNDdJDQj1caRDNhWedRGEEGqKYVh9rGBJoNA347wh1EWmEaS7cvSw6",
  "key9": "afCV5JEEJTqpKJgfLAFNMP8BZiS65JKKDZBkjUzXJndYAwTh75wGa7wcNytnZxuPMbDkDgJqacWoChA2GmC1YpA",
  "key10": "4CEPNjwWB1dU5NrJF1FjG3k4ZyLZ93zDaGyt5QghaeCQgaLuNbhkhBNFDoF2AxcRfQoY7qXVDSVG5THq2j4KXDvA",
  "key11": "4ggD2BxnTrpMRUkrZwFMGSQvXKjgqDAzqz3K188vGaGwo4KdxhucSfthBrRb7u5sVPDzPcjbpPgjFvXMGbC6B6Rh",
  "key12": "3dHHMTqRB3t5fwmWUvpFUYTEtfTkVG1vUU8fwBSwRQDSq92q9VQCQbX6WRKUWd5Z9oMdVUSd5A46Hi7b6zpKNaop",
  "key13": "3vM8UdLfSVg79crs8USSJ1mK7uKjjVMqF45jgPHV31Ec2vBw5NmGpzqcHZvQH8RCLWHQesbFTyKEVkzieFX1Rq6c",
  "key14": "46tPxrDjeTyHZD92tEbKpBPgsMg68g1wTv4mvYmvmJ3Fev1A1RgCMwHpr5oieTZ8jJt4BLx1xW2VJoeZJd1iT5Br",
  "key15": "4fmaCtGekwqbCuvrgXbL69YTAJDxjxwdgdd8o4xZfDjErTtqBR6MjBMeWNk2MnY844qM6RjbjiXWFkdHBeWSgHqy",
  "key16": "2LwVtmwGyrLGJCsebn329mnnxXPDf6nGD84nPxyRTdPZUvFdw4Qh4TF88uFS7PK3HSbVfJp3HFt9v4jnjxe6cz8T",
  "key17": "2q9X4apm6K4apQprknzfXjhhZd11zdRHMixz5o3ysLSbpFwNJkrJ2RxzQincypSoponjMYouw1E1x19bi96BLH5B",
  "key18": "5jMn18RkUurGpzwA1V91FNEtaPVrMTKqtbVmZjKJKuvFyaY8N4ZfJxcZGdseDVi565htWmTLZX3X2U5cuGmLnyid",
  "key19": "XCygHfoNhvE9V93vNftSyR426oPT9PjQ6udeq5kcu7VHDVcQ7MMmVo7ohSyqr4LojUELzzZKNfZ5fT5gYAZ5xcH",
  "key20": "2BAJuS19UXaBxECUoJxkKsb9vJSGjaxDyUvmfVvq333FfUL56Q6nUB2dUuVp8SirpjQsGmpkiBH1s4LGMht2mf8z",
  "key21": "LA91j5tAYXGHGtVqK4GqHGo3D529VRBSHFoggHK3vnRvWk2Uew2tvosKihgk6zvjWLYQqEYUm9eS1HhaiK8YWqj",
  "key22": "499MachyYNvPZmi3XC9CpiXyn6uzp4D4DNFXxpV4Hr7ELtPPc52fwwZpFBpAU1MM8Ym8DGDhGjVWsiQVdB55qYsG",
  "key23": "3mMnbCaAN4sKNeXRZDCiFpjyymvFikqjPSGfFiP7fnUiQTpX2Px3wEewvYYuwn8j3x9P3jma5dQsARr8idt8k1s6",
  "key24": "2EvYvh4uEFpksD4JVkWS1ZsDzDueiTcLkmpxYtAt1NTUXBNyCtsPrRv785jFsKJiFvQfkpoNTuT1Fzj3dxLZgXcz",
  "key25": "igqhryj9WpkwQyArgr6WE3QsUDW8yLHYS15xXF26UEu2YkeP7ufeCJ1RMQtTKyQtrNYYwaYA7cfeZ1wjSc2KcVg",
  "key26": "2j9qC1pGzL2LugdVtZHSJSYeBuPPKUci5sfZTAVhPXtyePG6cUVF3bUzh1DpxUL4ZFu3CCjJHvgrYfMJEC1PXveW",
  "key27": "3dFTKE4DMfAjsQkPejTG55F21SUnBtiGsTHwD5HAaEQ2FLgsvNLBzAqdYcq56MvspardT1pTS89RJggBRB46PTvC",
  "key28": "476tRZLn2qNFAwBMjPLnzoLWGe5GMd1eZpnonicSGCT3nTcQ7vBSdAPY2Z2iKSocoYXthBbKCQ99dMmTP24pxgpR",
  "key29": "61ZjWPdDQnMdqi41SPWdHVbh4GFodEyZHnehVtCWAr9UPvtNto7XA1pxK3WBChuv2wUuo6uaqTAQkpANqts515T2",
  "key30": "2aPU7kSNJBJ3dZn5MMqc2G9bbPktE73HWTfXjHXs1q98doCdjyXV9XJPJNqyH6cbGN7pAPPRHbqBi8krcfDgugfe",
  "key31": "4j5dH9aYkQxYvtvVJYVCu3jHsN1GjbkbaWv7bJQzYykBBR7N7fPZTT9aHaWLzn2n4xtE4MHNQ42xfzsJoSDwoaH7",
  "key32": "3QZxBKjcqPFjc8G3oCSEEEudx9KqH8ysKZ18GjetsJaSk39twVJhttRwCnnWExbqe1Dmvh1fsysDb3PqoEt7VuXJ",
  "key33": "3ZHT77U3bTUQu7Ajnkmf8keV3txgpb8wgdm7zHynZhFkdCHqN7rpu4kscjrUxF8fscgTo7Q81V8f8VoJxvr7gcTC",
  "key34": "2sh4acEeTa2NfwZp9jr9t5DSLLEs9ZydSNhhPaxju8FJ56Ynm4KdEEhC11Hzqxfy3umaGoSQawvGrUoEkudhazji",
  "key35": "3CYeLp5FqW2DgkCVPfhqYkQtKfLCz6nMmJNV3SPr7gwmWFQ4ArYP4WntNd78gWEQ9WuuULYFBbe3g3MWAyDqnyTU",
  "key36": "3WPSj5Jvoi2AnSQ4HAwPGAm8Czjvhamiv317bTmgK2zVtrk6GksBoukvm9CvvyQGxdLHGR5dJace9QaSrYnRc8xT",
  "key37": "3fQ6FLCp9sKV1LzTTyZ1AKdaLqCZ4dTc97pijbXYN4vhpySce1y6dTunCqn6quP7nEqkDrQusuGTDYFXHh3FsGGG",
  "key38": "2DpkTRxhRFR6M7uLzXw4k3a1nJkr4FH1u24ph35SLm9QyN7xT5qKRQQEddVCYc4wRNXJhq7y4vadaxTaqAvKeV8c",
  "key39": "4ZuK16TCzBKgKtqzk3sySkMoDJzuivo2Z8FFPscFoengf8YkZnWdWDNLYqHJRzwKDjabCx9dLEVvZQCQneakRRyw",
  "key40": "3QFYU9m4Db8EHvWB72Z5JryPzy579Ww5SPHgQz44mjdNA8qSm3mV8f4ZKFuJ2ZHt6qhL7eixFQnAJe7ZHgBEBFcP",
  "key41": "2g37DagJe8yQfDvrrM2MztsyvbhayAns8Y7kC9n87RvLsNxfwE99dUtbbeLSNqgFgF562CLmAuWWJVxsZCcKsdeU",
  "key42": "6iAzBpGCieFAQmntYKGShNC4fUtXbdftXW9wHPX6QkoCVPvpoDQMXiKq9J9PtdEeGVSegnW9JvBWfgGWZoFcpiq",
  "key43": "2jDfwWRiMX8rvj66hvLW8ZS73X1fiLt4r4Lf3AbjQsFfTkPGP4C4VhztkrzLR6Jb7Eg9QQ5pXi6rkhzBJfEC6KWG",
  "key44": "47WnpGRVQsRZGqiHEPxGzvMdTjHLn5eQxKcUom6QxKysqmANnEWU1TTGHuF5m5Dt2oC1dP87bULAZFvrTAXx8D1K",
  "key45": "2ZaoAQsNmgUY3oMv9v2sy79HSbRUA8Rhnh6bUwERmzZsUxSjK4JjB4eXgqwtn6smK1M3MihUvxM6QBB6VZMtB9F3",
  "key46": "91cjLbRXESqVe9r7MTi7yA7feaDPcXW6nyuarJmDf1DXoBb8SuXnYvEiJcpKN23HkXNqbu1UJM8FzV4ZXfBPeX9"
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
