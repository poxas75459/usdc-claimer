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
    "qUmGJfU3ve5pfcVGJvpX596Q6Z3b2kxUcE6JLkDepTjsq1ey9k7ismJjn4mH4WfGnNbVtw7MjEvJF3HxZFsCnDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "353HoYJRrc4iuKzjMVKk1dmfByErVDM6YcjNrmVVGaLZMUxC8Dgxwd9tnd69p63YCL77SctFRRdLn1mQU2VGrQZB",
  "key1": "2qSkdpz2RukEd9NELuG5VBAoYnhgNYqcSetvyjT5pFKGwUvwUM9SuyxuHcYsMLPdteMfzq5VBYFHx9bZ2DsDSfGX",
  "key2": "4A4vgZ81siX92b1tPPdiaZpmWpWAmZe2zURYudmq8iyBJZgvpQJd1SdiQUCsKqv1ebBSnzkn3yNDU1j45GWLZUq3",
  "key3": "4tCUdvbfgZmbg2DriGkVJ3K1Qj4vJsXb44yTbM7xy7Y76H58ZsmTMzfvpJcRRgLvsmSGPn1RyiYxtqFKm6nDjVfn",
  "key4": "3TDgsyDSXAWN14htNaEeCahdoRupm2DTT4Vx3QtESheNCTAFvh5eJxTxqk1Y2qyGdHcdXmoPEx6q2P6Xa3r8KyeQ",
  "key5": "213V5cinYomPFRMSw3yowq3pv8J24KqKuYmDb6gZK7JUXGSWigHje6zTMPYWVCw2fiYgXRPyihKdLp3xFv7CXGBR",
  "key6": "2so3S6pvAPtDSv1krwzVebueJNtVyzMqbyFvqRoNaDd277Np8nLvQGkY1SJCyFb8NSDqk15RgjKQVK7BPJBWkgoR",
  "key7": "25wBXJfeAo4jseQ4UULkhBFTUn4wfaGuxtq4gogJvMcEie6G4QUDaZdNyZu944yGtctHRLs2Aj9e2jGah8kCoTyw",
  "key8": "vbV3No1uSUVr5jGLsMvX6vkwUZXJSSR8EgTNUFzdoAujcXhVsTorrrQhKHoAj2SFC2ZyZvNbHMuLVmDjEMHLo6i",
  "key9": "2uXSdwkPhRCtW1VTjrMc8UqebPz9dx8h6xw2CznVs3qyzKikFrUAA4WwuS2Cn9A3s5VSfrsVN6JSbe4LeCZMa6M8",
  "key10": "51xNx3f7F983AiDvQYr6xzet8UWJ3NdPF9T9jYiBC3vNJBvERPdzGT9UTBoE7ZfgBqzPRKpW17HhS3v45qAYWFAt",
  "key11": "hP4xfCSWpN7WceXR6Q8QCfnJJX45G4WRBWTum7zczubcMUmUJ3KSFVvRr52pL4roiJeQxi2yPQePxhpDeSKrvFq",
  "key12": "YEeSLSikTw1i6PGbHuZo1P5xFrbio4vX85jhULFUaEtxZgw2g66vJDPb45GoUnaz3uSj3RLMAJkV9BWXJMKzTjt",
  "key13": "5ue8zjk5e1S1Bfg6t6rZ5itzfXDmRvwFq3D54e92zMrC2TtKxc6TqCETabhciJKtZgEGC41fURMbZtj6uMzzs2F4",
  "key14": "4i7qMNLSLMEpNL5ZTcRva5MnUwGyshkdUFUhSc28AY4NxM8oTim23h7QFTBkYCTRhYAN4RquxmjHfZZeXEuVoFdL",
  "key15": "4FDM8BwLgqHG6EN3U4fH8Nv4PHEEqBoRDsxARzijobTNP6e9pbdWFENg6wKY8Uxv5VW4TW6NfZfevaSMVeMxdjmA",
  "key16": "2TcHnVZ2yXSzvNUAFnpJHHcDfA7uMiKfGymBfvEyZxm9Z9gziYyQGSoSVZZ5jPxRYLRqGpYQCaP8Y9AyUj2cR7fs",
  "key17": "3S6bjzbXiHdyFPbkhrvaADTAyXYCB32QGMTFGYeou9qdD1jLyhwq7DGhMKpesYaWUqx2NCyq99m6NCbSyd1751cD",
  "key18": "296Jbysx3DVCR8vwrakKc4V3YgMvjNo5n9LLryZkcjeQE742CjCuP6UYuBGdr7kjkbRJq69yriZ6sY8aDyeA621p",
  "key19": "5H6GxqPooQrsqnF84dR3bgC8UYEvTqxh7XkY3mepTYqZ7vKEzgukn5Pp83m3T5tN2h7ZMXjrT9teShU5s1dfdH4n",
  "key20": "2Hkx57eXmj91PGh2HN5Y2yyDwmZqM8n1jqZR52PzJ4cTvMijXPmhSBPYmcXJ2ucrfTZ5Qioxudwca7S1yacwPeKY",
  "key21": "2k4vKJFirdD9yCQdDTZLgFiSWSdx1X6HPJNWUaVstP8GZYXuKjgRFAvBaxp134YFx2JDEUdyCUd9ZAHF5Gef5r27",
  "key22": "mbAysprUinjVEwWvATGcSm2ssP8cFAuJDYa8Sht5xmNQGJTrugYn7cfQgtFBXpqAE7p3hmwmqeioo7fTKXn5bBr",
  "key23": "keNhXRPFJHMmwNFN7hiyS5mAHkqGAyqvhifSFQGiUhHFBYjSVMxC8wpZti84YSxcXNTj83DMeWFDSPKop94EKep",
  "key24": "2CwjoWpWub3KKMsk6x1jGKHojmeu1LMtdU3o9L7od3prBhbMXN2gLZQCxz2j86yKbBsZt4wBEhEBfLHmxY6WxJzZ",
  "key25": "4aT6BhyETsH6ogYnGuCHWwQ9UuUh598nGuPbyL3uTQrWHRqy5RpDUZ9DVBYYFJYYhUNu4Cf4VQ7764k1Wc1tT91S",
  "key26": "qKB4stAUnP8LepLKSt553Kwd3HCqZS4owEXTEadYeFRFcRtaCRRzsh4EvUn33Z3yb7AsMhxMLLLtJnjDRE31G5L"
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
