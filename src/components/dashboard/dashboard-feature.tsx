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
    "63WgCLFsTgbRKm4bsxsci2nE1sHwSY42RMuLLirXNXR5JHcebYHucxApPuXGyQ9XqLRnVokcfkEyEGpmV2q4qHkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vAC2Ard9BaDtCogutPbp5eNkLM7DgRCDj75BP9nHQz8WjyuDz5TsxMU4S7g9gx1bVzmtxwEwtXEhWiZuoVbNmds",
  "key1": "3RgWv4Cac7MpQpycmSaGv3QWvHaV1ciC62MPWYVgjTvkUXJZMKDYmAMjrSg6gbbWB9QQUArzx7bWtCYVjZSV7poq",
  "key2": "GedLXrKRQ2nVW7o7z656XL9zZxQv2kVcLhd4uyrPzM8znH63ipKqPUXfSJBqvDsPsL2qM7WnQ6ta8wv7Vawrk7M",
  "key3": "55N18rENNfYpzXj9UtdCSmYjgg4Ut2kejLSZTBU8JwDdkQv1SdaDs9ZaZQvgsye4adL79PQENZFRGACEfsvFVMnj",
  "key4": "3XLfZPb2hS1xdoxTpNWQ2meN42859XN4Py9r6PHRPJJoX6KHewTKCmqrq7fKLgrwEkg5dDojQ6cvkaBTPwpMBgNX",
  "key5": "u3ZQicv3vJ4fdqBRPmHEEF57V9Ju7JJBaNV2SSxa3FgHrwnkySWTmQ282j8QBB3UJ7BYhoSf2C6RjrNrXQqU7yo",
  "key6": "3c7DihnBhWu3V7i5A8gdxK6ZZ2APKurS2jFgg6emacpEQAaRSA1XMrSdCocv6mzi3Y3bxxi1psDjYRp8zCRrMmsR",
  "key7": "3CVGU9MES9qyJmviwp3Cj5QGdTgLWGnz1Brm12yh459tR7p84bsjqr4QhABSUn3vhwjoyLogteGEnfPNvC1fnUvt",
  "key8": "5Tsh2EWkd8BDrtrwa21GZNTm855dwVLWmygmJfD37gPHhg26kN4fA2SJ4ajYKASXnZNEy2rQDy47fLswuzF1Rnsw",
  "key9": "4oh9kzZmdKPnvcKVzb2PSdK6HViL9EBCgE2agTv7Hb3S1kBP3PXLVTGYQv1mUGuHE1i8NHz53zyuZ1ceQ3wZdPaG",
  "key10": "2FtmPAJoS1seP7ZZap6t1TrLq84YpfbpW6b8UkdGNyPBjizT3BGtaswzTj4cAp8vdMjdbZyLumFvq5KhZsNsYfUb",
  "key11": "21Y3ig2NuoaEsCPTH8hpJZHZ6eX68arQMRbzxpWePhGhKroUUYMGKnbHiuEjs5jzkrf265HCCTRQpLuBrhoHAWsb",
  "key12": "4iFSJeoJhUfY5ZHHq5yFecjYtuWuQZ1H56GZBrwMHHQN7ozs52ZQ5cMiedGYfGHyXSC4BchPM5mYmn7spaWZpQTn",
  "key13": "qM5B2AeME8NQLNactMPZe6nuRSs1yVA6WwQbBWGzhgBVh2n53aphNB5iBhmvQ9CL9G8uD8VQ97BXV126yC31P2c",
  "key14": "4HKm5pkYrMrGMsRoUE1i2Kminp14UpSAxsg7THZrQ6sQSav7MJHnWcPLcV5TtbQ5kjty9qtqSecx9mvHZuTwpQkG",
  "key15": "961izTa3M8vRcp8pG3sdx6uaoMJp9pchqr3hRFQr5pUi717pv1NhiTh6GBqgcjpSgscMFWH1jMk7111hFAj31sj",
  "key16": "8k1aAPp3PoHmFCigHcoLmNsTCS9objWDCLpt5AWKZ9RodyLaTrVGNJZYWkEAU5d94GoKQEdsvs9U1Zv9wRGN8wq",
  "key17": "5ELkRFr6NsKkWoDAZHVEc1X2EuemcM8xt6JJgZkeXoFGsGDYGg8MMUPH7Lw6hPbm2v2SQ9hDGPs5pQ79BkqxfJia",
  "key18": "3yrhj6n9KZfw3piD1KABXR8bzU7PX8uprPVXYNaDWbWdxWSzs4Kpz5seDk3jzKRLLr9a7bxzH3Xk9xDAt1VZMfX2",
  "key19": "pZjwGDRE4wqeDgQjwtATfHSrFX6UiiDvea7sjcTjWJMyuM7wG6ZFtDeS2t5rc3mFZYae8maWAbgP93FDhCvCP7T",
  "key20": "2Gyeii2KjFE5PNiyFSbaabzhywAtPJ8W3BuicLwf6Bv1jCuCG4hpevEv8DTrLHZSXPBHRufWsYYitDEHuBz9KTsP",
  "key21": "3r527MpVBJ7ZnpqRSvmXRGKfbqCjA1LCZo4zcpaWyEk86UyMaH8yRHo1rJK5jepX6aSGjcZkWQfm6Wgn3Hvo24aX",
  "key22": "rkKfMFf7g2vw4NfpXipaQMERRDK66uW395jf8cFS9nnNhu7s8gQrQhBQpCs6gXvKDZBVVADdVfnnuhmfhLGLNkP",
  "key23": "2XodgV9Vi8vo6zVaqTtMjf25N7RGcUG5gcK3YhRK6r4itVSFoeAjk7JMxc8efFRmP6tBdVtrg9yyYBmzqoeBhmUC",
  "key24": "Kp2RAUoNpfDEHCLqmQTTMF5q9yw8KyQde7vpp7CsCUpKbFkiP4NLncUw6FEfdPRNYDSwR1vNAJtgzc7ZtKrihq8",
  "key25": "LQjzVnNTrGD8eqJkRYKvSv6wMERQeBU6SippWcurv3YbXUwdDzsxHWG9omSxLNUMEVbPMtX1f8D513swUUjKyp2",
  "key26": "1XFCkdtDesbNbPzs5mESFJQFaPj4nVXwBYCrcdzcWVNtQk3Z1yQg4xiF58ECGsjmCLBMuB6vdCYHF72qqcARvNa",
  "key27": "k5BtXzYyJJT7RafQW77fhJ5CUNy8bgEVfTji76KNeJ5CKaHMoTVKLBtwo5DU2obHR6AD7GcP9fhxxkknWmnRvW4",
  "key28": "4RgTByC7upQa7unGJnxdjyrvJYCsXcTqtKhf8cVnde8XSwmR1f69gLsmwN4ctCAGecuoAvCmDnqxByZ1nN6noN3E",
  "key29": "2GzTkuXHQYGewimjQaa3uae9vCQXsiKnWC4NfGVFCMGVcW918epGwQuj5iU3ScQVnfsJMcSYAZYzGiwiHNrvqzMD",
  "key30": "4uZoSVvDzcaF3sbXYSUq7Px17vsUaAZJSwPMekKhXLEoyHzacEiDx7s4yTLbhijUMqbCMLqkVRTM9km3nD3TEQEz",
  "key31": "4mMUpJpgMnGB1mYY95Jvtytj6Sb788KzTBXXaWeRvsxXbG9YtWrohbfdeK2yKFSJS9WzTNu9K7PHuYbvZ3Th5rw1",
  "key32": "2fjJuRiF4Z6tXSthTJBqsmZkS5TQwCyXhfTMisQHrP5QNpsMpyousoHZxEG2259ZQzJrVbXPj6QpaUScirJqT4AF",
  "key33": "5RXysnP13LAATGMyPnXPVPRnwj4AjUSC4Z7B35enerjSKLa3FNwsf4gSnHG2CPDTqWpAPDjD88XNoMYjgvf68w14",
  "key34": "2z6wmvSVxC2eH15L6GU5e9pfqLBtFBq9YN3fFtHYQ38D3eayUVSvNYDxrcDorHYr6LbPDASGYRejANX8M7YTLhBh",
  "key35": "RWjQ2abzZ49mZQLTeoQdw19dUkMffmnNtQUnvWZ5Mj3qxnwGmjrn5HH57YTbLu6x2vaSihUQ4D9hZ3GrAj8DAxR",
  "key36": "2fWQkekAn13ewxv1Fp2hqqjrRwjJKCHhaY53LDaz6xBV9KCxZpcR9kmUpoNwu4WpMnRMYPRa1ZbZHiHcjgz3BMxr",
  "key37": "2MJoRDQ8RzY3TbfNFWTSCrw84qnMse8wefTJ8VqHECFHuq9q1Z1KDPog6V2f6GZDcwt5yic2UP4TxKvekXVkUiq7",
  "key38": "4wtD6SBkTarmP2EZzYx3ukkVwPBjTc4rFbufuJaE1a3gBLTswVWxxnHe1j2SmXicwNkemUUSfEoUGQCW7X7xs1dt",
  "key39": "4td4Ti5sx8gozmApRY8MjWFqQpAUTuuBHcadAM2v2avLx2JvEHAks9DXESmRh1UXbdSCQa9WKh8Xdpgsh5JBwDr7",
  "key40": "5fN5NWdMkZErKS2zwcKQoKW5zrnfn9vYy2EkmyzzftG8EhU7DYVTUyuspUKR73morUyujz5eFAxEE3PxwuWurvjK",
  "key41": "5EeV7cM6t2jZCP1pcHqmym4nZwAPg8kezAKFdjLbzruQDWfd8EV3JnEnZQ75vLyYLhVgrXYNMW1j9LXfVkAdk6a"
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
