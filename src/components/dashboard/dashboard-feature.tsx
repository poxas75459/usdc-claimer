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
    "RUjTSvGdFhbbScBQi5EsePJXPD6fmWLmhHsfJCP2edZE4FTYSAA1PdtHUMxqe69s4EvRMRV9ACcPY7S6ZGMH99g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ERXm5LKB9LpHNdXdQmJsTK6n7WPCjhPymbw6ep2KYCvZb6qPuBeL73cT5zH5X1fsKoi8ao8ouvB8i1o5XqCEBP",
  "key1": "3jikGdgW1VhJsC1ytatkJ54vRvnnp2MQxNHTQi94SAGXmffTdQbxYAv9PDZgGxs8XJ4hbJzcUdVgtFrda4DWW6Gu",
  "key2": "67DvSLL82jRTuWZYMfaJRsrNnWhY923ReSQZLZ5uLxUccbR8vBDJyxRvVmUcaEzQKozTs9NGHsX9y1DH8eU9jvFM",
  "key3": "4M4Ap9RngRuQqDas7UDedXUfWFvVxjGCz6TNcqsgrKF7FuZSaGRhpHq7BmLHbPgDtDZeSSA9W87aLZCBwgBPTKDX",
  "key4": "3Low9BBZnvjVnKrJJdPevBR8natSMxnTnB4ZX14T8xJxTu3Na2V7kqvFKofMz6bgJi2J1aX3X3j3bMTcYyPDVRKZ",
  "key5": "5CDT87NmWTVYz2EHgBcWGRSHGaavg6KqU4v4GkgAebJMZhpMU2NLugJwgaP6E3j6Y9xLg5bTmhzJuVj7PdjTmyTE",
  "key6": "XnA9c4PdXK1PNH7ssPKVSGuE1rEsYyfCFBiUpJ5V6baaPuzvgzaXMdmW21d9psWsGVXz2xSkU3vMkuZoMU8Yvgv",
  "key7": "35B3i16sWREBWgKgW3pC92QzRY5QNLqVmcfFLoL978U5PPmqSXUv93gCc7QLdBUkXiWqEvbiBLzxGXywxgHgwXyJ",
  "key8": "4UtVRczGUYPWhnyWSo5AfU5C2KAfHgqt6JdWtmo8UnK3WPqXY68B6aNKcsPt5djNi9TafaHbEULyV8B8C6SR2WtC",
  "key9": "55vP3vFayDX5Nun1BS3pNZYAj5NrSynz6svV1faF9VBUvSktoRWrcYmTYuXyKKGCpjhAPsHApYhJMvHfswxQ1xRR",
  "key10": "oW8gR8JJSyASgUEV9QxpDY3XgYnvJ4phUo9CvFFuPkXeghTW7vgiND1FRJQp1UVBGCJ8kGV5FTxVtBJHQfVXA48",
  "key11": "4NYuXi8m6EijqvnFbZpoyTaxAGjRHQgGBtBvTsWTfWVzA3FaSM7sB6Biay8JnwbKuiG2ekn5vN4EK7HxN56JKxRv",
  "key12": "42B9o2Mz3rgMXix7Zi6dmk86ERACp2L72LtkQ4oo253uBKtpUpiqC5MTcTpcUExzzRfHJ1tARxbByApG5aY5YN8d",
  "key13": "4Pi1HG66VkFgLgAHGz2LKZ7d6n89bDjVvktPkNuPu3TWqHfWHA36nvYeyNAUtWhWpXnCR4kJ1fptN8QYsoJBzRoq",
  "key14": "4b6wGbWPE6s7sRBKauVnW99KvsAaCdATkGcDYKAiQMxJAUGkW9UuJJd1pUt5gH6shrXW44EfVwhu5Bz1NzEGZtiT",
  "key15": "3FwJjSaRmh7iXbbhZeewEA7viUB6w4paKfnHL842tZJzfMVd1DN6vM7upoGc7wUrTBhDrnK7FXYTpHWomdkWiM1r",
  "key16": "3qCS6N3TvUk3UF8joLAetmWfqL7gd9g9M13XL46Tkj5Mne3VHZB54MJF5X2UGKt5cWWXPkfSHN2BJDmc9dsYAFzn",
  "key17": "34AcabRWrzxY9PVjL226q5wUaPMsTHhEg8XXUDhKuA881ynjgNNYkziLuMDdMwsVMRLgxa6ignzfTbMbfXHyHYnP",
  "key18": "5rJvWGj87cjHKPPF4v14Zu3PrH3acYE8KB5ao45z472aUujUAcno3sk1htMKqPyi7E8iF3fJ71htRDSuWKbywGuS",
  "key19": "oSSDUDoDkXbYbQLZ57JWJjQkzyVKiabmJXfNGnPb9WJhHJkRnHEDB2sBaXZPjbZ7Efpm61AHZrrGvkxUcWvsi1z",
  "key20": "5jjKC678Ci1Qkf12vFexD4w5AatkuFfg39PTTugRLSK7wn3VN75xL3Bei3R64ERGssFwFSNToyEh8D5cq8VsDQDz",
  "key21": "2rtMbc7u95tuRXZXNoRRcXwyzaZxaDM32dpTzeej2pzY4YYZF9G2fQceQpLCrWLsCTwvxaTiPCoYGGf97keUQcST",
  "key22": "upZud5eiEbBimt67xKYaxTrZXFG6LqDqh6964XRres7sqvu36DEG3QSvvutei7Za17FdFPupiBpD7QtTASmT4eR",
  "key23": "5TspFv7SzbwmaZGvxi3fNjufci1m986SfihYh4AKM1csfBc2iwN3N1wiK1NdCTWzJTWvLHBjM4jJv5MgLnFedzJv",
  "key24": "4FfAtKzkkbwuP13ahBHUvbVUXiiu8PRc5myM7dBeRVzf21M9izHGg3qPwCP3cjJGpCCKAGZ9Qa5M9Ac4oB6ffH26",
  "key25": "SGqVdRQ36MgBmSNQnLoEF2tojcDH3bQ3Kap3MiAf9LoJLzKSwQCyZVVrSDsLVBmobYYhotDSt9E68b3sAec8x84",
  "key26": "2Z4Fb56AUiGe9u43wEfEyMYBdQPA2qXD7pL3ksrycQZRJ8g6KL6sAo97HrjTdqg9MNiMnMsFT9Md4kwQikyXc8a5",
  "key27": "5C4Hkdwr2PVaMK65goC1GkfTsw8VtBKBGvvJJr6YpSH66gimSVLCZeEzXR3XDD78JMJF1BaksJ7PZeF93gyJLMy9",
  "key28": "52XDUjL9F4VT5ZufBvD4xnQZ1oGV4WoPYBLfgkud5mBQMK9w2uiMnNYKfUbNqukocE6G4DjBonHxZXEqWkPziUPL",
  "key29": "Tt7n9NgPz3NDZYVupJUDS2cp4Ye7HC6qrEtNrxLwNgUwRgFr5p8wAM9DrgUSd9DLoSjQyBxrmQvJTCVvpeVia26",
  "key30": "3dEKk1U7kAAxnZZhePuBez2sUmv7UBFsiwF6ycshaa7oTQ8ajtFSoBwDVFYnApEwwePuyELMA2kMbN6M2CFkocNG",
  "key31": "3wfESnVBvmuhNLum2ZpdMccxQXYjMELF44VFXFNjUSuFi19X6X3GTJ1vu4xAsmzF6T35t8A5UVVwqTVLUYm1NFDN",
  "key32": "3oB3e3EuQveSaXetycrZNhMZmPhfxouAtJ9WY5uGBFN5uPkQPBv3jx77foQ7mZh4V457fJWv1WKoxywD4Nj5fobi",
  "key33": "2VWDCMRYNG6NuWDzXE9q4HZD2Er8rZE4nqMCqv2f36FHTRwbpxf6ozZaQcXjqwwnYDC9LyzbhdWwuaDytTw54s2U",
  "key34": "5EvaPkGac9HfY1Dfu1srDNzRtMfemUvEVXYvcD99EHJdCRvQQH3tbyj7vgcoC5m8g29LD2jPsZeJ8SuUPAYdDDw9",
  "key35": "3pUFeDXxodo7CzFYccQRZJSstD9JU8rw9pGhstbEAKnQ5UyWcHEDSRXWkubUV1W9zAuRncoWBTHJ11SyYBwKnj78",
  "key36": "5NPhhD9geJwaiBPzSMmHZyVzyfkh5UPh7kJruP8aJd9vj3Jjzxh1YabCcA6WStvTeS6FESmzVkPxYSUiQQ99idbX",
  "key37": "5nvpABm29qWVVbJTrjWVR8ZqwFcRM9n45fZREFEPVZSGtyURzGCfWf3Dt6gfgixpmtF3ogRtRNiipB2HiWcTiE7C",
  "key38": "5qFvk11k5QeMtoAapHQr5jMYby8xkUYqvjqU5meuRBg8dVyRCDbpB9g947HpwozeMiF9oZLfzfA3McYeBu2sxCyu"
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
