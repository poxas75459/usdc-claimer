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
    "4ULJApdWqcWMP89QjFBrokrqt3e5ohB4qUxzWXUDR4nBiHRzz8kBcZETRMSTwYatsUPfCjW8uqFisDgEqDyqfqNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aFCXYKheBYoy1A38SJqKSxk1UFKVaA4L69gSSXzm4Ahv56pizNXFebAUCYEDZjzx3mwjQxgFbjd8BuxJBgrkGvG",
  "key1": "2NfQqFa4E8XkjEqjbBbrCfXgJw6TnsbnYAUC9nX3p6r8baKf3CtcajZZyBQ4hYYnoyRmVjJwVnomRTdnBPuq2zUR",
  "key2": "5AQWUmqc1n3gWJ1DQ1MN2TmzXgu4jX7H7jSpgbozMsavZsRSc4uZgAsEY3R9CMVUqMuHvW8FkcQzT7Pf4YNYZgYY",
  "key3": "4XoQLFsJYEbpVg7rEdQWUeR7KSgUzDEEiTNfLBKGsLxLJHceSWJZrA6bAwcwMYwi32M9vtYfvyjNjc4KmSnFvdLn",
  "key4": "2YNeP1pNziDfWyvd3gJVrsY6DjaAPC36miEMa1HafKYBwFjgFxsK5jM8wRF43Qaf78DNHegxaLj82aHBeL7weLLs",
  "key5": "5c8hZigH3nWq4TvogxLj183UJsQ7oVSRRUsXBBXGUVv13iV2xYGQzHRcRehy9RBkM99pNdTtH9CtGnPNWnGDsenC",
  "key6": "d2svGLfi1EFAKVAfveXZMsVsupQh3x3a765cYDzMgrgL5K6yWiohf27sG9TRCu3W6JMnWvnBU7ona3LsFfhJLbG",
  "key7": "2e8E3m7Bmce7G7ZxbdVgTtEnVrgKKKUo5cwdjWg75xLh7yPp7Rp69o7PmXhDc8BPp3VuwZvT25PDjSCyQD6sVrru",
  "key8": "5rZXRQiQoK2SF54JLHe73EqMEbz5UbHE3wkUVrBLkReh3M6YcsY4fiWRw71uJBuogh47Sq5R7a9Nv1jnx174XogE",
  "key9": "Ue2etnLDMVBKtVLDhScbNyifKfrAK8E942C3hGEkJm4JpQiLLDCjuNeAEFbtcQ7X8EneH3sALQn7YjMs2rFNAEe",
  "key10": "3NPPE6RgmuwSkqohYZHDRU8R8LW9sJi1Kp2zqEeDUZtZLpZCfs8REAww6f2kzWzhotBuRpUek599QbrLwhhD8orj",
  "key11": "8cyQgc6dkdmwbNMKubY1yNbNfnfEfku186PXGw8iXW2WpoF9b6hzPfahK3TfLH8JzetqVM7YucQXoWoBgGkhGkR",
  "key12": "EX2MxpnkEsBnsXTAkbR2tk6AENjdaE98enPoJnJAThcdTb2vKiy5bAbvHWPeHwSkEKMtS5iwwivLomdgTpQKbVy",
  "key13": "5QQPY4eydpcEtfprVdjKBGAtG7eipGyhq7F2LDTdEiT9ACBf3N5KkCN3WGNYu9mfhzgECYkU83qoA1e67gZng2hs",
  "key14": "5mGekCGAtCf7Gy7CyjUoJuSKeU4XGaHnTDyQwEbcZj6W6TrHQgHbk6aXReRcHfDLG4UbpApQucao3cgBqotfcLU4",
  "key15": "JBu2HwndCBYfAE19Tnik7BFj1qcJKywgua5KLojz85iz61NiLxR2BNQQTVvY57ihSUgP1CEPHCb6M7ky8d3tcBa",
  "key16": "oU7seSDx2Nrpx65bWcRyqVzHm1cEmZxMVueV9cLHMEMShpguFvuvBG39uBsx3mjNsgkm9eymE8mcRfnho9pYWoQ",
  "key17": "4Q3Svskm1RBUwdEZ1bEmQDBAnXZnrSyiPWxSw8Ge6ghFDuGJBZdSXWLf3vXhaVBJeFdFeZG9FTttTk3nXoiUUrGo",
  "key18": "5DTxyDKRYoSyLFyXUwwpRSvHxrRuzpzahv8fGfU1LkosTyES9XF7hCHm1xbSY3ZBj878TfCwKR7QY48tdwaieonR",
  "key19": "4L2Rrxqt47mKZpfv6AeZZApSEstugnyATgqi51QMaYWuiFZu7xjnh3FEQvemRw5ViCHSThHpNZGWj8UtVAQCH5Es",
  "key20": "2BNDwfvUaEMrDAgmPU4CM4HRd7359LytMPfZK62NqJPTgwtuwpta2EZ5TrMi88TxEut98qGPCy4nS6wtDwxoE5Vk",
  "key21": "4WEjwyrTghqRHcNwS6nfydjfiXLwaUWdh43fgSC5Z1qqS4zFZcMGWf9Yy3m4RdDZSjtten7SJMaoNshN8wccU48w",
  "key22": "jjxNLVt6SMEXM6J5bbki55nFWzQEu9viWcCt5538ZXwFYpBFn4YiZMPwW7m1HvopL4P5RfkCrAvTqFfmzhoULmB",
  "key23": "2nMuwYQ762pEqyo42LSdqUAFvDtWE9nEQc99zim6fU9UDc1hXJPSiay3nRfrbZotGnqEFakESUCAeXgav3UMsLus",
  "key24": "r9kX2kakyPPNqzwhbV6HxFLnyzP3EkYEbLR6BVWMamRQth1LgW4h2eB9XbxYAKaa9or4RTaK6G8Rxd4ALc2BvwB",
  "key25": "2nYubPY6jZLmgvTtrQmgbMrk2v2o54uJ48E9BJvob6D2UfLBSfLBRmdqopGDK9anDF3Rxedx9rKWbHCjE1jUgu15",
  "key26": "2H4DEXREhJrg6V3WsQ3EF2pouxajvTuE9J5Ay6gVs5fcCPdEmz2m5GodeYLmR8okgj9PNxF6mrijLRDnYS8srY9s",
  "key27": "2argUHJnzS3Kn1VTrW9Ug6EYCJUnVJZYMihL7Lj7b3mB1iYkFnLAHEzm3RFzm8TsJ9TkBXKckb5M17YKjJhmUSna",
  "key28": "2th1jquRSaYe7sjmsamDehFYxterhtHba8BfDdY8xGYGNvEh8iiYXoAi4wFJfeDA1nRuCBBJvZ9cy1pY6Rg266XV",
  "key29": "2p1cmubVAyFRr2WkH3DwXzbY1QNrEsncNnnma2jYfxzAUHK5HVkWRdNb3YhcEEQX8WFAGtoLN2Xwi4cRVrAzBPAx",
  "key30": "4RgPJGhVGnvACGmwpBEYMWTr9ZmJ5RzqqRsXt1j7snwkCuNCTGdXw6QuW4x2QMAMVuyo48Tbj87wGPG377C83jUK",
  "key31": "5XALtGmpBkGtNEoLewiL6CDoysuFZ2youWGZYzCozwtTeLgRRRVmurbacDvwHeA5MnBq9uCSC3TgqgALGzNE8PMA",
  "key32": "2vEkQ1qoWbttQXvDZLCAQAYT6h6g69qZMhkzFo22o5RZhZVKse19DvgMVpHZz3nwm8pBFYFkSwc28JuoLqfAkdQj",
  "key33": "hxqMpEMdRsyizEK2sw5P5byUreBWbBMD2eKbD1Ta6Nb8xz147pwo3hH1cSCcsxTA4bCqMSAjuy2kXQJLnyLUkom",
  "key34": "2JVL8PY3U3M1hV6ffnzPv2R6vJ3FJwpwWMhqk4NRBJRnYgVGFfaWGZXgZUMrxyF3kUSM3ivByVqwjTeNHdkv6tyw",
  "key35": "2sk7KgswoGyi2qrio1e7M9NvNQM4okKsjvJp8LmhurjsYk8vheUoLKf1GksbDKzuiL61fxzCeyxbhnoh1LZFNM1E",
  "key36": "2wWu834CFffC43W1NyyT7N1TbieeNvQrHvv6YCE4uqg22PRYmovEpRHxgN8kw7io65xjMkTJwdMvyjrNE54oTmGW",
  "key37": "3PujmsxtoMdicv5xTsLzBXzYr7eP83affxisrkxPamVQDcKxbSrhorUV621PCPkjAUwxrRfLe9LeAu7QeEYoEWUZ",
  "key38": "2TZTfHzorE9ZUn3ejvTL51J55Z8eFGHiPXfmjN3WbZKWcpom9tF2Zd2Kq7V54SZrvpcxYVT2v9uQegQGT8kT6RiA",
  "key39": "57ywEqjTJK4zmyA17rdqzTrpEMnYq4LsJZmw6Qkv2TqGEmK3WmEvrXNu4pE5RLR3agVc7R2v818zWq7Ms4TKrd9J",
  "key40": "4h5qLmtKqdn3PLw6MJvRuy2ZSaoBpqnkEsYyGzcL5Pci2H72KzFEKdRfResw1gEziPWvQXE14HLrtXiRu9kdkSF9",
  "key41": "XzNY7KEkKatbkSATa1fBtYUi3CvLPt1gyPur2g7sg9pdoZXBb6gfLFU9MBPvHQxAS4dAqBGEE93surRqjPbqg2P",
  "key42": "ZLV7YC12kYenoswdvysZyNRG7CRmG3TZXREAtZywHg4kxcsBHh9m4vQ9w5qfpdAVUhe3iwdDK6h23BQNr5prsgR",
  "key43": "crocmsJvzkazuaEMxGJ6MNRQBjkEFVyxpp6mzcpdQGhPBZ8hPxrXPYif2etJ2YyXJxAVDkKPD9WChPPRvETTP9K",
  "key44": "4uhCwmg45UdrUc93SwKJ58ScDu3X618Mwv6HtCMf6B6bH7ZsYAL2PJSrnf6EBXxw4dFTbBKnsoccTjVcSwhuoJQY",
  "key45": "2HoWRe7srptdCC3N5rqrdZutZa5bQGdnyeq7eh8YyYfAA4sdkcFYBKaXHdecs3YB2sRmbBp9QqD9LkRhEM1hg5KX",
  "key46": "5uYDrvnLcGiqPVtFzNUZ35WrKEjNVgd53wDztdcT698dkvg69nmFxfv9jqMdSodUBgY5C5ZzTqDQXmWaQHwfet46",
  "key47": "2fmRWTVsEpYnSLWnESW4a6H4wa3fsA4SYkqjuBpJhdwVvf6v4y1VuS8m3H4AXa5BdfpRNe2cUiTNgiaz1iytSbky",
  "key48": "5PVJMkgaFeH6XWKiqKtPMHWxTfhGmhTCNsZLpb55QwHopqBPRfyfBwNvqdYJFnaWWrre5m4ULVnp6rNHGLCThhWX"
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
