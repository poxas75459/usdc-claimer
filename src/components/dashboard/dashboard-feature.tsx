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
    "3V15tYr2bY4PURcBMkzMV6555k6L123ou5wbEx3jLDjqbjcDn9gxtJQkqgtcE6BbyStPMbqpFYKPvNP3EFZbFrd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3855NB9QBJwKEfBnYosRzv88zfhNn8rJNw2VefrACDjA6jtjGLAqgKN565nxpKa5vfqnLcHb3vLdPFvq1dZEwqqy",
  "key1": "5pdkKqvjPC3AcuXvVD594j5jDmdc3LYy5ZUZUM4Ked7GB1GKzefq1g5Ux6odS9BEwKb3GSukyXNXdbDZT6jeyPJP",
  "key2": "5DMe1ayfjAfpNubjBy6W5oeQusqHKZ43MWaccPrhPRCz89H7WsZ54FixJpLKATkEevmhw1RSUaXD3p5apqfwxL16",
  "key3": "5pSC511qRQSrUNT8oXNVypFTSr4qUoYF5XjfZUehWUeoUHZJAXQcwLA8cicPYaX8CMfKZjc5FV5SZYfZYDmxv8MD",
  "key4": "2gskBoBuo3uEKPKN13CyJ8Kdd2Eyh53hMsJQoTDjrnLuufBDKitR2vtXvrqjhd8UGhdVmwxFwQUzgxNh1LhjpncQ",
  "key5": "2VTAMtva6dCTRLfQXiEjdFyijaZAK4nUbzPsmLTLX5jpk6Xk146ukjHp3b849NvVKBXzC5zxg2Z5ispNNMePRRBn",
  "key6": "22gA4vocSCFe4cYFqRHFN3Urv6RFMxBuFskikK6m5U5o24E2iefeqAYAoF28vDZ3oaFy1yW4FbPpK3E1y4mCeuHv",
  "key7": "D61jfGAs2nhBnkhAi4q9JmsfzkVLSUGZnyPkg38qo4MndWC1q5dN9DjDHekAiSFs2PTnNHrhPzdZDzQjtbu89dU",
  "key8": "2qAGNSvVq1RkDa3axNDgo9Z42MMExzeDngzTF8SSpHh3yifWxjYhAF226Hp5mawLaXw1mC1c7H4QFtSz1fkkK63K",
  "key9": "466YgKRBh35Rj3unPdGWqC1Q4u1CGicnYiJaQrFoM37WuLdanraUAwfbmY5aa3gWwrfx4GfYpkUKPNbLn8LBedYG",
  "key10": "qcyPxSFWU7sbSiSp9dZsMiC3Y9TNmtyUJxgg3NwVpSddZm2K1fUwu4z98pisgzf1YDrrHRogbd8z3M8xSvp7aUz",
  "key11": "5sg5LTpQMarUBy1kRyog92pVo9cXNegnC3NVjNuYz2mcU7DDzqxwyApVdSA275oQ8wL2BqXPXyPqwx2w6T5gJ1io",
  "key12": "2H3rCmXR4gzpBBnDmtkb3q4syq4LhByngWbbqnzYcdApoZpPZXNuRYuz1PPJ9ZS86pMAqb39maDXuoTHQmxdCXW1",
  "key13": "5SvZFAVAansaqjdtN4WBUX5HZdn6BbcvZpcUwsGvmxUcDPMeMfXzaLXTm2auNnEb6iDUZvD94BGaK8ZGWYyg89EX",
  "key14": "3WiE3W5iJPVoNz1K8EVLjXzm4CQEMdB8pVQZqHruEenbNuRnJUKBiW1Vyu5ocK9WzWxj79Qde7v8b3AXPHmdwMhF",
  "key15": "5BDU5ZH3g1RyKYf8Sgu21YcwGg6qH3RqUCS5pXiQ47L7EPuNpcQuDLGZfLBwdCmEw3FNPrqGWSAaFXAAirJ2j6XF",
  "key16": "22KavVitFzeqpcQi33XjKkSFBEEXHxmc88qXoWX6iEBwEeU5muBDqpysUv8QD5LFBo8mohMGM2Raeyt6PJNpLnbN",
  "key17": "48fHkUz2YcxuVjVVtEDYkHBbtzKATk8vrGGnc4zojhBs1MdoXPHsLBYAE8uVgbZsz2phuh4B1FB1tmSzM3ThsAr6",
  "key18": "3uk2KdaL1sJ7tpKsU7RqWCFthvVoSC7Qo63uh6LqtWgcFFW6gEudYhfRvpaGt3avgyb6WoY7owKhsccmyMExe2uX",
  "key19": "5kQLWiN752tQpYhaNmmG91cGYXibeueWqS7QqapKG4taWGTVSRbagrw8NQqhRrsXkpPob8ZGBVkwDy43Wsu8eKEZ",
  "key20": "3y3Narzo8SZRdvSDSg7GyErPxgbEGp9xBkZjoosywMRrKGHzriN9Hmma5DUuE7q4WVgcWNwg9yQz9E9fXHZc3iTs",
  "key21": "2VXgkXCBhYtY1H4wDS8RW6vtN52Ww5Pe33zHf7sMYM7TcUCbAYekq5wq4ULrqEj2k7ZvhwJeouyDYSFpuS7x9pX8",
  "key22": "32tT5wobhJuw1X8qbJVndfwe2YzkqPtTFT8jeDRAtjRCPTiFTEy3cWydudrnE89QzaJACTKcAiqM4fRFAoBPKeYG",
  "key23": "59KbQ1z3wwGNJpyjKTr47rih1Ka3ahTsxS9UY8i1mM7GQeDk31MNRGwcb2PhsbHxGqyeV7PLLXEqYGmM9q2X5jV7",
  "key24": "21x5QM4VxKkn69rrzEJ3SE7co315AKxLLzXdSBXXoWnDYWuEmdQJueep9sEB5GXQfj6V9Qa5MTz2LBBvYg6SWNgA",
  "key25": "43CvNvPY7mGePsGPDEquZnhQs2DgV7vQgapaUCh3VicVCwXj3p7aqjLrciLYvyozYCQ2zsfBJ6aS5adNDeHgZaf2",
  "key26": "3o8WChvf8YwJwpwyVbsCsSHyHkeoQKRRXLstcZHG1RJAyGLcCJ7tP2UuYudzPvyTbkiRtpsknmnKocLCo94ZoAiL",
  "key27": "5aW3J44yFYsi8L397SyD2yEkub7VRXS4PwjEoTk3LJ6qQiBK1rBLggdXGrc8AsDuwdNyhcEDxX1JTS1yYzXPrypv",
  "key28": "5c8WRB8EWNKjczHM2a4EaGim1PVTxjXc5wKmgViYd2KDraNpzdtGZprvMY1B6NSnzG8Crz77yvYAvAqrReGC26Lp",
  "key29": "2TBYDo2gY8i6oSRNfCmEkuZiJrNnsmGsvVJ4ijm3RRw4uuZ4S7dHdmhx8zp6keCuHDKrPDiZWU3utF2h9kVbikJt",
  "key30": "4AHWnkw7grK4ERGM6bYgPpw3ipcdNY5rFWJxZ1pCVFndwPz9y84CeyhE5BFrBzE2KAthGpToe4PEC8doZ486SXYB",
  "key31": "4W33q79oAtTY9EjRnTSiwMXj5EtJyPjLeNNtSfiej5tvqttUscXcPnELYbZd7nK7TbCNjtcPvZyhKCCRhCTN5MEf"
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
