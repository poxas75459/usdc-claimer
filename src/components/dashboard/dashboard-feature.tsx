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
    "4zXxpa12SvucwigiRmSZLoFdzwJJ4AYDqBW13rpDwh2nkDaPPs1uW2xDXHBynW3e23DDEhre5NCU6YMNaFNopLvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wZbYdGJArxLLpswewfQ75TMhfXptTqE789QcmcdsQJuYNsrodkHWZz93iG3AJ7N6vnwfbFJgwPkQEtSAS6DT7hY",
  "key1": "rFbA8mHjyjvuGuoup6UKVfnk6eH7FaRJN9onVhkREzgBDJDY2iv4vNfNZxaSskXsh7aA19WY3RCqur9Uny3ZMd3",
  "key2": "3DY6RwvhbGCuC6PXxm23Fmx7PZM43yX5LQALYBj6rLZpG1xJB9d5QuXevNjwjQwLDMUYj51qs6eoVCmhbB5tKZDQ",
  "key3": "4MnSfbKDADLjtHYWbhvZqEaVDkG9MBHCgq74K9vZbsTzXnGeG1r38g9ZU5kwxrWmjPNdDRkWfRsUFnS94u85M6zS",
  "key4": "4gkVvWeQTumE93vCFWQCvEUrAtYErUzFhweuXu8jysXDYkrSCyQiuSoH5BFmsSTu7C9GN4Sx2DFLph6NvTFfqk8K",
  "key5": "37fqtMfvCkg9qBsB4894haCpbk85vbsYh2ouBdKiPNHTEAB7QGrc2UoMpnAnf5QcV1gnRJhBHa8utBZdSiz1iX4Y",
  "key6": "4g8UwKffZsUtfqpeSuzf69dx7eqLPfpNRQtGCMT65bFwfy9XJLuygbe2WQuqBrZxExVEfzAZ7mW3JFughYLCAy4e",
  "key7": "2p1uqtJjmtMfYZZaEEXQwnm9XfkEXirNduyptBaV5huBKw3FL6QX73HjGj5GfQkaorm2JdGYogdcFcgBjC1qErQg",
  "key8": "2AW7RResxdQBCT2TBjVcKDtjGXewuvfq9TPas24mcBm1oT2YgBUxckSgaRzdmBNkZbS2YHQx9GPMQYWM44jsYoUg",
  "key9": "2SyDoBsDzYh3SEYDTQpJ4AccyCa6sjJAv8Psc7HzC7oZmaUjp4QkTxTmY8naTT4Amy1TLRb2pPAVXQvtEZBDvgFT",
  "key10": "5NWqHQHiVvZP12ZWyCa1w59C4ajpDHHq5X2mQbJFZuD3XYgADk3UdRFAigPLq6gJ3KWMPiP4KbAVF5k5smiRajLH",
  "key11": "3rskD3vdEo7wkkcwb2R9Dv9W8hKqAVLda7wpuwWGad9QB8A8yYZEtRHGFp7WPquwdFxY3mn26sF9TuEqhJx9gXrG",
  "key12": "YgcKMecw8WyWB13BjZhDG7yizeqQovGiiv4iVrYSjEEHN6HEfR61XrtWN5Q47WaSXW9QuNid797ngdLE6ZRATRs",
  "key13": "5mM8d2B6G3KbcEyBWeFJ8K4RKqEmN4hZfNFmiHgfyysVnyZVCRouXaKxQnDNVAUN8TFBtduhuqMVd19MbXo4kZ25",
  "key14": "5oiA3VLraKQT2auWtK8Q9znJQeJsLnBQmggxBKGTGgvVTXs5tvAtcdvy36fRwrBk2cuyBARoK8d5CUpJd3Q2fopr",
  "key15": "2bDPZrQZD4e5VuMMP9WxEv4n4Atyh6TijssRDdwUB2wkQBVAXjxNmDpqGRWragFh1up7Y3n1zAQSxQ6cwFHVq2kT",
  "key16": "Yb7x2ubVPyeHLz8F2wdb5u9LsvjFtaSZahR3NzK2gNtNZZ3ttUQHbp6faxuj4yCGaModY4YdDfKLyGQUMCVty2W",
  "key17": "2QA76BzUCMQDnNV8GPJwtFecQdgBV2Mush38oNdke21c4qvKtSNgVqDwu13YFvDmb1RpFtqS3pm8FeFMeAuNNxQL",
  "key18": "48oBhWtdQr5hZauJGz7URf1bpchAHxFp1cejKJ7rJ3ED71VZCAgNkt25cjRv3mK1qcUKtkU5zwZwafrQ18VYnbrK",
  "key19": "YjQp5aqJJQVQfE6Yjhrp9qSa8wAjnDcK9FHrmeFAbvxvAdvQvXUjcF59tkCBt9Gupa3r1YNfobhs4drG2uvKeQd",
  "key20": "U1aSz2ZXTqrRdc6auo4dL5A3TPHH5bUSvdKZsrVrFEGrstna3GxtrtvmB1RnWmMTp5dtAzm6eVnHHEfu9Tqtf56",
  "key21": "21DXD9dYWUsTTeQsYVgNKFH8cDfyVdoFd55umiDuHTheTb3XLuJfFDijiXLrUM5qwTUr1VBFP2eDawWjXRT9d7hd",
  "key22": "4SSxtETGuUC535iLcqpA9QXoc7zjDkb8sSHJBTQ7VZZLiFYgnGafh6Q34AU75vuMTZcwRYLgUsf5AY5XuxrSgK2k",
  "key23": "5Bk4ok9MsQzhnAoLNqKJARhnSVGk9fA2TUTrFUv36JfDUrseT4EG4wBpwbwGgBzfaDJwBmHMTuRBGtnK8N8SUsRK",
  "key24": "2AUF2e3urjpm9AyytJRkSaLqKqVBemXPpPfFHXTXncgQ1nprecyLyycwJraX35azW3GEc5VRuFPHdB6ntUjcNZDQ",
  "key25": "2fJfnXjdaUXR6btQXHEMtAi99mkZzzLGnZHhnsR6qm38d6MLAdpJqmwbwvyW3SUM7zBWEGcfhFAH7EVqQRdtZGm1",
  "key26": "57kSQRFdPAuzahXrdMDPVsDG2pVWUHGkZDwUv7mRrgBxWwepzfWGySLBtVuvaEqL4HNFqRd55kFwZTiEVmE48GZ6",
  "key27": "3AsdkfyWJAkvoP94vPsmAhTcmDs3TNRg52tadbVSwdCzYYSKSoaMveZ5AfGEq8SKzDArtpfYXGhdwuigawXHUrZW",
  "key28": "3dSXC35Fd2Q5DfVZbojHhbZ1s5VvoQAEoGCyjQbQfPADtHdUBoC8Cgx8efrJQuEgrsPAFzaVbnU5UxieHxkxZQ2s",
  "key29": "3Xh9dFtWQjMEy7qTUr9S41iEbvNrcbu6foBQ8hyx9J1fbqGWkcxdbn4nKHxMPrKUsoBVvr8pwuazUxVsiWRtoxcP",
  "key30": "8ZnbP4fbxHeijJNXmegeKYJmocvKYYjY2m1vBha9g7x7JNLe9BeTEV2fHhvtq1pdfJgNFQ4yy51gwBSybxyVpwc",
  "key31": "5fJGNWWxnG37XupFRTFiYuTrvQpHbZjYzfxducJhZHpY6G92tMQKw14g1bF1JEMHm5sN2ae6Pdw99e9LDXCh9edh",
  "key32": "5wh358PxkKZgEuRY3Zcf7dt7Kkhp31iP96QQzNa7fhL6KT6vkDktkacWwAYo8kHXcJ1fUmFZQxS166dAZLDZftFW",
  "key33": "58W26xYUMGxGSpGM6mBCdUgJ25WAzLiseBo3dpC967JSin5qtkxyE9Cb4rSJGSruRnM4E6sKYTmdUfLT6xjKbPgL",
  "key34": "4KXM6wC5P2uzHS9MuoPwMUDQYk3uAY3xEzM2rpL1yUUYuWGtPVtGTde6cuPDKp9yaQdcQV8Ecd21WaSXZUPqCsKa",
  "key35": "7cna9CLzEANyWnuLW5aiNqiV3za28DnNoucfjLATpAHTGJyPAfFjUpEQo62uecfovuPJKwcEVvh9DB6bKgud3yt",
  "key36": "5Hfa9tJzt5eCLnr7qxC5cjRkXfHcPJWjL4GievvSYBV4DXQJDnUBB3SyPJCM2zJ8WweQyGPwaztpkCuLAkHFb9v1",
  "key37": "2QJK9XYFdwzDJ1J4oiZ7YN37a83XDZMZMCn2J1pYWDm2m5kQchGNCXHyGSvPataaZLUzbot3VGTde88sFGS8tzka",
  "key38": "2ggKpWji6nUCWzdtvXRcacMpfKRtpcWjKhtrxshynn16Ktd3TggF4yEQqcvR7QvhKKx72iJGu2qxLg7Qw5KSNdcG",
  "key39": "GypnHcd2egqXZUdAPrfvP2fWuxUuzEQm6VcHX4zojv15RApC7ATbVkgU7Snthr32MWb9yJUeUfYuBufbN9PxJY8"
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
