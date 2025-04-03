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
    "2EMqNJG2VoacQU6ARDveWv8UWZrmU9m4Eh6bmXoWXqQnJUyh2QvU9j2ELWQs3PLp7G9Zq5X1kqfwpe7Fn5qcXgRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dq6DFexcFvqktbPjdHinTHuCHbx1fD4n3fRTVfUzzMVS5r4GWXn6yhfyVfJ2SesgabJmv11uuLx8iHzB8gDrgqg",
  "key1": "4MNn97r19cVacf3yyiWLQF9EXQuJFjiAHcKagfNXMQnTBpgfZg6S9QU1gN8Hrsi3U5PeV3gwFJBtSJTbahvyUsE1",
  "key2": "jUndqdTkxyHwZnDAf9z5436dvucALSBxuwGhgdfQ7HX58x4rNKuGi8A3doJTTyZxCUxnbLxeaXkPvmJQfZ2tz8t",
  "key3": "3i2RHhFxBFQQUSFB1YqK64XfagYpstdDcpRg7EToMn7tNtxSvKgyfeCmagN17pT7D5a14rg9a1KrRUXsynRxzquX",
  "key4": "5QGnbymEHryVSQZULNLjK134T3VZWxEfHueHfpK6ZSkJyMYwYm9feibZHrzG914j2KJYyiqrJVjcPGc1tsMVXnNw",
  "key5": "23WxmDV68UJPBP7JFLCYDN7jL4dkpaENgGZ8iuYBXdy5Em92z1DjNhbQ44QkHhDUB4kcymZmsQs4Xek633VeJjgY",
  "key6": "5cQWpXniMmEMqTztf1yGXSLgD6XNk7fvcPVrqwsAUJBaJ1jdrZSrqmJQTcHVZUPr6DgohtUKn1HeuwGDLc1NEzs6",
  "key7": "37B9LqsTDRxUAMfebAsdPwDuacbSZx8Fk5rspaTxR1zyqPkQjLGdwWKtoRrLezym459qC2bVcyhfsMeDVsyJ2Zg2",
  "key8": "5cqfYsYv8LrFrnTZ83RhBpZKQREmp9jUJPfh94844ys7Rc6uoFQUrrn1kqnt41Rk3caVoRiBpDAVGNsdj26vFvFZ",
  "key9": "5dLm1PfEk5HFSn1aBoVjtGBqNWCxSDhr4JXucjYYVmp9sdFaE6Gw9qP6ibE23QEvMxfZLum7jrqrMFxbwS1aVKkX",
  "key10": "3fPqonfSnQ11ebEcqxo6qqLZRqx5xabaEx7CtMcuf3eF7PKufw2jWu7z8rKSSgggX6MgDnycMDaXq8mnVBGYwHfF",
  "key11": "4ZEuiSc7EG2RpZjhPHFxsrSxzVXSHqt4GDWiN5UwxHGz33vgQQ2cf1twyWgs4c4EKEox1oRgLny1nXPxtK1C8v14",
  "key12": "27V6bnDBaB6WCBrJkhrE9y3V57HSySVfEYEzHaey57KpwdruBqWznPCYNm6mG4wbRiAoawxoLjNoEZYsBvr6VPvq",
  "key13": "4goYASJn86Hx2AZrugoQK2KFsUxvfwWsVhWpNCkGis7CCeP5EGwnj32noS1JfnMoQnC5FzwneM658BPuUb7EQskk",
  "key14": "ctA2Wut3sD9UNN6ru6va1Pne9WV8PwkLVALP6QobsdM4kpSySaKtkVPrJAkK1p3WXFekqbp8Hr1mGJTG76Dgz9Q",
  "key15": "33ZHcaKj41sVZ5byx5PL6cNjFb9CyFrR6brQdPGKgwVmVWa4ox7W2UqJUfZD9WPc2FLZ6WwUpGbsN9ZuEBFRkrzU",
  "key16": "66f95wigh97oG6LHYsAJ1HzBWCFhsVQHLwTeJubni9yYbWz5b29dh83hyiwNX5RVAqqS92TWcA2cTBh8du5TJs6T",
  "key17": "2gRLZM3kNj5JYNCYtFSJmLrsqB8ytfiUdgTLpLHAK1JdobxfUPDTrVzdSZFongogbrE4367PwtiQYeMiumLUbtAA",
  "key18": "8T4uxuCeEWEGFDEY5oFMdBbBqXPYJwyfKSAUFaHXzyz6CiHPEYbVYjSx5fYQUueFP7pm2XJh7opHyqWwTfvc3qs",
  "key19": "3QooAE86S5kGdoWFCu2T4teqJnbpvgRyMpKR8Vu6Bpo7XYXvCvG4wRxup9UhGdAHos45qEVqHaH8Ljdiufq1ojc4",
  "key20": "aRGpMk22o2iwQGg5CzKuZgobhBpU84Go58XmrUh3PrT3cxo7txgDzFKgNtq7Fn5gZ3HTSJPidUhpgko8Ag2jy5N",
  "key21": "48RiPQLNqBYRskdZYQ3GWwUaJP5B3xxPw34PUZwVx82muAFgEV995b5Sa6Ai1SHUDrthrRiRUBntb92TdHjJNFUq",
  "key22": "4zs32A1akoSKK4drVyY2CYR9fVDPvZsW5FVTEqbNveQN3gsbzeCtqT2r8kDVVmPQULnFVjB5D5HiKoW5S6tYm8VF",
  "key23": "4EMPYczN9YFW8AUiwHVvHwMV8cpAaJzdTPZtuNLdWzDzMgJarpPqPZXy9hJ85A3CCsywmdN4cYBbL66zPdzbaNpi",
  "key24": "HEuEEQGDRY9dyLUnCW6N5gc9gEb6v7LJvKJeprbxEMX3vAWxoDixmimhuEE8wLNCYAUATKcbX4Le1XbaE3VvTzA",
  "key25": "2ENxiU4nxPU73goeQaJJ57L5nHD2DHg6K8osLJdQSpSGf9FRBhtK9tFkNULDaupwH894fKuZMGTt1v1gf2pDBy8m",
  "key26": "4Q4Hjow75KbWMxc82LH5i26Z2rPDkpBrkwemdoZkuYtSoqXv1XPuXCc2dDT9oT7mppabpE1HsmwPAxaE63Cx7RUZ",
  "key27": "42pJzF5Ch5Lucz4N9Rvr8anqWKfrpFaCAsGCu4Y6BUhR8Hyio9hjzhofPKmwn4odAubQWthUzWGNYPRrPHB7EqZW",
  "key28": "2gQvCp7hLZwUKodDjuYFzgGK62mi9adaAiQJLud4yqRYU5FkFvYw2VGDxP7hK3AdsfkdgY4i1R4upz5GwBjkG8WY",
  "key29": "2LFD35g6znictJXAMsyxTACvnJ9i8w8Co8GDQ7pcYMeiNAKwRpw3yJNWHENCCpzHu47B6ei5DnyhT2y6CgJVfHpj",
  "key30": "JvKTH8RYY2VXBXhPjZwSAmz3hT4R6VFACJbp7ugeNZyTiHRnkYG5WzjGbvzXqW9hz7pijAWCzvzqXL3JXH57YQ4",
  "key31": "5VHcwNrV2zmVvw5shkz1KB8v1vuuo7JHV23e3CEHxGewMxKTg7z1y3AiwL8Q5zek2nRb6e9vJA76F4EqospzLKfz",
  "key32": "4SVpUcpfWpSbfHtn6dFAVYomESD7e3To68Mt4fon5DN4rhRte3pYBBnaTwbxKT2ond6tY1B28tp7tEUH6T1wmNR5",
  "key33": "WiNL9QJjo8EqnjHYMiUguCH58bfiUDb1nZdHbXc6EPJeyu7DocifiGB9Lj4hWUwbXBEdRvEq8h6yaxQvatAkbaj",
  "key34": "3Dxonc9KzKWhiptShwDu9USf5zvgiVrvm6Fxp7D9U2jHopwtUynwzp2HKUyWjYMTe4bBpRuD5wYkW76DavGJiJTT",
  "key35": "6XAhHQ8ArwzdagGGrXoMc6s7Rv7CnDneRPLqNT8WRcJbSzQw67dJxSnfkhd4H3e6CfacKLpWnZ875MsQDeTCH1i",
  "key36": "3yjRiqYCmo7AqieZxh5kYGxvwVDvVekmyK73Pn18EENt9eit7k6v6sPqfde6WLejvyetJHjZyYyfkyAmiUAwwjsd",
  "key37": "44hNt5zYmTFNgUcoMULjdw7tj1HWCqLQdCVTqU1JHw1xhKR9jN9TdzgTQ3BBrhaUBKXs5dqHTR3R7V7utDKiJAnb",
  "key38": "wFYCYmbBvFHgALrVYnGjx2SSUkZyctxR77RRXtPdAeHy9bZwc7XR22tiWquoMDUBqn5Xz4CKdgdNq1G3umbzaY9",
  "key39": "2Z6F2r15kSnhRqPo8UoMD7wqiVVVAQ7ENZQbsnCdbjNG4ouuQJM6VBAtrg92qeb5V1hdh4ucEC6WfHbSVMXUcbn1",
  "key40": "2nJ4NdBeDoZNWyKpfmYh77mBm5vRTk8qysujQfqkJfmE935mFPZz3q9WfwXDdyFtpLExn8wCBpXFpR1RYRnMHREq",
  "key41": "61GBKYBaNraGGZhEzdR79CTS3zQjwyXFN9z8XZYoMgCnsEp1Aj6JK5F2XBKvLUifUV91gvjd4NZ6jLfhxuT4FHDg",
  "key42": "4uV6SAyyozj2dFy6MRBotdpqkbyFT3WbWq92yvkz7GvTUjoPDrJhALV1HrqJegLni7aYyMbBQGukxMRLXC7wc5v5",
  "key43": "4phY71jCZAoJLGATf3FWQJw8GSRXm6Epc9TdeBLFDeRG9g3nnUJy8P1nN44WY5x2yjDi3KRbbJVjkCL8CZHStYSr",
  "key44": "2LPBQJVbvDXromnuurZpAPb7eW24SwzAbPcVGTEzJpmsogE8kmF3oNhfSzr6Hm5jpSfmZi9LM5y6h2PitfenFGLB",
  "key45": "64Y8UJvWdtaeS6TDzbihF2m12uQF4qPLMy4CCWYMS2tTiF8jXoZ3xjcQPHeLFAkfRp8K3VWohgho3fDbATZGfqj",
  "key46": "5R6Z7qZcWRAkw9fgnNjhMWp1RUx9Mmc84LtuCZxV8QDLaAmX3uT58zbApFyzpYBFzophJXSykrke2PQW5NSn58m9"
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
