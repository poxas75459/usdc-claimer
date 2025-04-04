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
    "5NAp3C7FYym3cUCkMMKSgs2KD1bnqEj6FaGz88fcz8UGotYCAhEPKRio5L7bzZBY5XP2vW6Kn3EbVcgtJbt9Dn99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ifNLveftDmnycLqvoD4WM9uZf9xAsXq25mb1mzLvLYMR3GxofVkRjrU7yGYR8Lkyut1wa8BEFzNTRaPDFox3Fs5",
  "key1": "7EPjZ8jPZsHsaiouQ1jSJCViEjVkvnwoAsGE7ZdpEYDpLxbStvj7jDiVBEgVD7YrBRUFnWv8nkJSGm69rtkgqP6",
  "key2": "ibyPuuN34XJAmnvnav6JLAHjccsrQxMm6etJHsBsKUP8BevMr3mrC5Tz8EbCXgD8rgXVmZ6dbLWu5SUwYvFEKdF",
  "key3": "ZRAJ3pdsW4CUeHUE6hSeBMDYNmy95KcEhNNpDqeDmiY63G1zF787VZp49oy5e6HgMj67sq6qDAANjZTLtArZQJq",
  "key4": "5zej6k94UYAcRgdE9BUZowpydDH7XvcvJng7YSM5rH5Y5XEB8AVL9CW7jPE59GhkvsGMuzGqkykQToarfWZabi4Q",
  "key5": "4PGhUdZN1dahKEXNSnT8LRmJL7HQxPyth4oFunwvgTAUXm1ZcxtV4i1s4vSea2hHWHVERyHLxR498Ppf9kpwykhX",
  "key6": "3MPW4qoKLeZVUJA2fhaQqHdE3BJp7KBQGtfMczmmPLPfJFArHoh9pJCkA3a6Zupopmz8CWhjFTfYVvBBKdVXN26n",
  "key7": "2XVTSqWgwupRuzRZwRJ5yBrkqt2unsEf7PSDXMfxkYy9ot43t8ozedD5Kw7WsCEMLP8etJLkZYsi4Nmo147sW5Va",
  "key8": "qcTwYXo3JjgrDjevfr3TFHnooWUiwwiZZ7GV4yZtBBqG1QxcZxFCvPyHY6fdSYc4xNipsvBQQjMEBMagW411Vc8",
  "key9": "2XjeV6sc16YssCnrxukyPgkc4J4dBrHUnTYia6hDV83i8jNLPhhxBHCf11qCryR3EZCHFf7vpNvk6vRnsauYjrAG",
  "key10": "37dW3CEMU7t6sGcWDWAY31SznPAjFwDSPWaGvQp8Ny7vPcHMPfZksXHeCDETSKHYTtoLXTzKBsaWLx2VezrRF38",
  "key11": "2T8SdhmyMkaWyhz8oxiqN4WY5iwFjTdXE3fo98GGDwvwJBc5aG9fwpjRaHfFCL8JkdJ3q8NE8wW7RZLm2m44T8UZ",
  "key12": "59EUe4BzJpjk2tHidobxjyEtaMNeATxRhqzFZ1w4qPau3iKuNCLmbpnpkrStcVB4oMvc8SSkopK7kTyHVyga71Ls",
  "key13": "aWg7A9EwqvaHy3dEgYGZJ6xizowEu2sUVK1Aaf6h3ZkUWPUwxkL8CUPTipvhu58huDWmaRgPL3aXtSQqaoFLM5U",
  "key14": "L47xByLgziaSEk8rR8YgZZ13m6mVNtxHxkJZ7khKchuv7MfQkR7HxyRF1B7A73QuuSJZtXLLyQdgQGfRhzGRo6i",
  "key15": "3uNh3DbpAHz4B4as669ydVZhy6UzATe1QRBMndcaBZTjGm2d9gwfFUbzQEaUEMLT6pYYp3nFM7FXUVY6Xy3KKvzV",
  "key16": "6o4kf1XdZmK1Mz7eu1UmCEVac4CoXVygZfoD5WQ68tjFXPHEAf1k5k5XaseqX4LCxjkQ2jghpHyCDP7zEARHoEb",
  "key17": "4K3yaV8yoHbk3WkC9QxGZ38EXXaYAaBpxnraCiSu44roSvpf6TQGAu1JCVbG4JbwN3TpUWgNScwUw3A5euNXAdwp",
  "key18": "moipG5jxMEqi8oNY7Jk1pFiKXYuUGqc1dyeCLkhn43ajm9osRatQNY5xtFRnjBq14xmaPB7irsRqjKp6DrkjxNr",
  "key19": "3pEKVJKs6wS3fftX8JTpAFUy7QY32V7LACRooH9uNkgQtxkpteJATBvemTdggf7JfKWyvj24j5kobY4JXLyYBbv6",
  "key20": "5fkAxNqoHprUgBs1uyPgSVofbqMgXonw6nzA81bLTE77ABWy7CZDybfVXf3NJQ6DcZhLQuHkq74oPQTmyjebBpTn",
  "key21": "mipqifojK4yTaZumnUL8MFdfTNEDuNnrVPvLXxqne2Vv9PWVphwUoyTB5owqNdVpoPyqbVqTRpd727JBWJTBFrc",
  "key22": "3ohwW8VREHTiY1o1C71HqspEZDFtM8PAeUgeCXFedEnTw9vJf1LU1kMahkMicUNeyY1PCTiknParv6H4NzQmcTbB",
  "key23": "gHEzpckw4Ewqf37TcxMpdzVP4huCcZG2XHkPMGcg8msACjWBpwmJugRdBzbgZfoM56RD6z85nHhr3bhgtVCKFSX",
  "key24": "Zhq2AtrnpMtgYQhLsZo7WXRMfdUwVgMkFb6mWQwFcPZTetzLejVHvyJ7LVRuvtENiRsZRffaWBMxt1gzxnv7byo",
  "key25": "obZ2hBNgJHPhBAck1fzmSdVcL4EK21vBmWHNJmvtncJJa4RXniZUZ6YF7eNc3nqdreSknYCoTb6845d7bDxACTh",
  "key26": "43zrBWMhpGGrLaE4pFHWtdRvdnzVXm3Nbo7iWd6dZwcaztzBbY6J9gjTmDeZGenHjq5MGmmwPigGS4vvFGDUqjJ4",
  "key27": "3mBdBvKCKZQM1kSxxQ9kjX9SRnnpabgBNSEcXd5J6Y7aASzkDRYjYA5qNNDex4viGadu9GXhzT6QeFFZizq9SVCM",
  "key28": "2dkXtg5fukZhSMM7iV2QY58YDW9cfzgiD2kQW582bqGL1rXFWfRN5Yd1o9ZssX9AS491NpPzaHLc8fXnDGQR3pxw",
  "key29": "2UKofxfnMUFwFrYs7SVZARXw4c46Zdg8NmRsN7pRghKxDqERpAMdZsHaPSFayQKet2EWEgxXpdYoSYS2m2egSFBs",
  "key30": "5658CCUU1TrfXDFbPAoTjS1RtGSbikG3UqBmLHFAti8XrmxcBez2BvSWUFNwbQDFE32Dr8ZDHYSMydPy5yHfHVoC",
  "key31": "3sKLNHFVbfVzrwAXThWixgFXDLUYUzzutu1CLZqnTw4XdMwzA2BDTNCvhcaBiFJy74qvoQMp4Ku4i8Z9j9BsX1ux",
  "key32": "Pswotp3jNB2PnytszdR1kSkY3vEdFz8fFR7m2uQGNgAD29HzutcCaxWf7YPCkfMy7EZh8pMjFHKkx4nTrKw66La",
  "key33": "5gHxzNtfLryPnEmcfwLzzdu7fvh8ErTu6M29fPGiqCfyNwgcmyn6cy8mDdXhupzgbEHwu8ou2tFAgAfaw3uFRjRJ",
  "key34": "EgUWcc4qLF8NXNbZhCbsAmWyiSVQUTbyyDLyamFwYsMSDZTYu33RPfoJr1qhXx6ibhsahXFZCpqQj2we65cNEQR",
  "key35": "643pPuLn94DqYML2ZUMB4QkosA7jwvkhgLuok2NP8eHMXaaipW7vYcTBEgBFryEWBUoPU6jgLVdv7NRc2dA7CnD3",
  "key36": "3yCwAKYxviW3LThyJLUspWBsBJPbTxuwUfyAZ6iPWf13BnRqoGkwBqy4HkFHSLdmHHAC98nCg8Uq7NezCeHqpGhv"
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
