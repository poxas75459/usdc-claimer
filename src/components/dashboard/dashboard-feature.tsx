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
    "94UuwM3q66ZXv4zkNgiqnHRb9QCALsuyuiRFL4pXKNSrm92wirPjtYDkcWDqtAavaF4CrioA7VaTtjQnmNZ1sgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fY2stSWKeCHsPYzTEhJwYRFbFQkqng1NatWcj6daw6mHbZzZDBvnN6A4uXun9iQcAFV6tHC2eikzm2MDqEV8FGS",
  "key1": "5SvCQUJVAwCUDMjUXR7cmenTR69xjFawiVwNUmP3c9wETgJULajoSGaNTNi358ygcTEkfVUMVDhcWgqx1jYz1rcd",
  "key2": "MCaxTEQzMTB2vj98LxuW7VUqgRoqcUn2N5Uy9U95pKUMFyQcr2z6WDU5etmto7DZKitfpFzWawsPDJkyJA4cKAw",
  "key3": "3a9oqADyrjKRNeBpLLdHuTN41nXXWA7cgrGqUStCans449Wvij46DA4M97RmvRomFYPbQWfj9KwhQurSiSqfC7df",
  "key4": "67Py2cHbN5qqs4a8kjMiRagRrtPgsAfVXqSw7bBkbhR9GDTmoZ7Fc7VcmFJ8RyW1Wj4v7gC9Pf2SWUS8KMRBkf5D",
  "key5": "2xo6gesDGbcGFx3i3E9Z3qk6QyPUbTVuAXtLiDpNi4y4F6gpZ7ncvV5TYrpeNEQMeC1vXCjmWwdhxYBWJwx22FY7",
  "key6": "mwiwkgrmo8GfxUJ7XtPRYHNoPfn7v82XmrvEBCfKzdc9VfySCP6JXUZUWXwSg8KhqDvLMFMYDNK7QCisCX5gsyY",
  "key7": "mN4a6mgFT5QSoLZMp2C6tTj5Z2s4FYRWeT6S4eEorSmevpK2Wyb4n3MFUmQPhvC7bVXu2kFHtyNd2Jd9DwEQJq9",
  "key8": "4xesFuTnvKxsuztday7diCjmGTbcaeKKpKgiBfXLBFswmnvW9hdtVFnUps9bXJPAEorKgtsntzxKbW2ChpfMsHgV",
  "key9": "2TMPy7v6xjDMrrbinmn7Nk9wU3si3Kr3dqt44aaztk5W4Zf2iWGpTTshVJpErZbvT5FMNATUujGGmR3xHWZuMEf4",
  "key10": "3WFJDHNJzc1DXgU5WwbPJo53UP2rFWdkmfWT62AWu6sRvx8FC6uBaUw8hH9JRh3Nrz8EYeqyrRatQAfhjVY8sWwS",
  "key11": "4TTuMJiiz1LKrdjdibjjnoC4Vxz76KdvxBQi4uNQm9h7iaFKePzqJCjqgif6HepXHVuSJ1LMsuwucZtz4WsNERUr",
  "key12": "4Snr1Q95tiaCd291CAEyu67uss3DHHYBytrE6ir5vEQkMTFYB4GcDsayDjf8wNFJHNJDHMEUR7J2p7ocmkmakxc1",
  "key13": "rVfPPhFj4QCcQL7p5hZiug8j75Eg1bJTTq5giELC8N3uTHWQhZP5WTScroi9TBCm6mM6g1LouydDbfpVdihteCm",
  "key14": "2K5TFtRF3G6fuhKoVJdfDTkw3FWZpbs4iXHX1zoxTYdMgkZo5VB9os1hB7vPHCxsxxWu5uzxwe3UYWHRdakHngQU",
  "key15": "4S1N8951yrmNYb4ABxSvSfdVz1YM5o17qZg8SQjgSmmuxCZK5iuLVdPDBmprxKYZrSCXEWrreQWHSbXyLf2ANbGp",
  "key16": "KfYnCoTR93KthLBEY777d9ZY9vSXEFzsdEqgc3DobGStwV3KkA11xyRPXMWarKujnpB4D8wjog1qoezVdjCnY4p",
  "key17": "3qnwYusxgP2PZyAhHRfyF5MH1yt1qzhFyUpVycnme6WPSjz2CtTKgXdTW4tuceHePTSE8sZ2y2Aeo5oRZdwSDdZf",
  "key18": "5cxopG17mcdpNdUuSFPMcbDA1iD5bsqeWy3C6rG3VnznB847mbdYSCrVKVTLPwbkX6S63PMWKmxYh5SPumVp8Uyh",
  "key19": "4wGHfZJEJb7E4uZGhWQe2d8toTRiRTSLe7DRkk7UVW6KhYfEL8qZVwfKzyYyr9BK1DrJW5HTreYoBWRiETgfw9er",
  "key20": "2nW37ptfNuNzCE2dBwfcgtFATwAHvXqNHuhw58kV2Bt3Q6sWozjU5Qpb8TPTjarGU1CBfCwVcGDs3zQaoc6wJxea",
  "key21": "bVXmmHvsocvUQH7y77zvShteCMeTnJGk2kAkEZzpPdmakBYsdz3fpcKheJGMnTJy3s71xvpC3K8wEvMKStepK8k",
  "key22": "5xzbmrb5EKmGbp22g1RCKuW8PWZWQTJkWCiFL1rh4E1LqUny3mHHD2eg2d4HGPLgVDcWZUJproXYtMBFkDFyg1SZ",
  "key23": "4BAFawLmYBYhMEnB3RUkzHS2MoDXMJo5L88W37sCRQaTb5isLdHfFhmjc1DWX9oTj95tuYtzUXSrqWZiDyEWUqhb",
  "key24": "3V15U2KcdDfg6msUT7sZR3ukSMqVZtuWaLDF3u1YbJWzqV1o7mo2X3icWH4YNYvXaUGVASzmWghHNw7V7oSQFvST",
  "key25": "5jZsrpb3wXFftPmT2ZjnHYkpybcaxRRZUbk6iPE5Xbcgf8bdm3oPP2XoXkwaCxTFJ8uEefKmoU4A4xthNRnmtYCK",
  "key26": "4rAdXvKz6zrH1bw2EGkWV35cfPAwAxBg9NdWBxoQcKErNaevtGoxXxUSshwnMEjzrDkmyJ6FsnbjTMyzy3ewG3My",
  "key27": "4H2qaq4JUTdLZXw5hapZ9tJFjL6tDxcmXnx3tgYi1xhALTCtdxeks6RRV2kGrpbMuP6us1B1z8wVX3auqzxQb41Z",
  "key28": "5CiFakR1C6Li4Pv4YuS97KmSToMGKAyv93CSeKnQiT45LvMEE9Gzmib8imUbgKN316t8cpaaFdNoF18wXUprhUJQ",
  "key29": "3nFGJ911pFeSnRt5mHPj3nr4Fp33chb2KpqQmLY8XntKw8RLiNtEpAJPjVFMsNj8zBcETdDLJLWmf4ggUEQPR2Tj",
  "key30": "2nqg2ucB4LqsPE4h2G4HPrYhTXvWan8RDanPoxdgnByYTUiMZvPSdWz8Dg6n93zgG194sjMMroyce5j2JLkyFJEk",
  "key31": "4QXJbY3wABjeqXtDcQMLBZnYxz6CfUEcS8tmVoRnVJh462Ly9BJNRaiPQ4gTir5fq2PnQaAeiQRWP5dwCosS6XXg",
  "key32": "2o6SRTKgnKkeU71B4qiroGj5miVXofkcZQynNEyWn7ri94RPQiBw1KFB1Gh9i2aKnXV7G3rZRKwqZYCuoYGCE3QP",
  "key33": "5WLVvm7t7gtwgHJFh7njGPyeR1LK4vrjJUGa4c9Fyd4CD5qiYBSA4e9Zj48in4cUKvpZQ1XH2J71KzyUYbLFRoiu",
  "key34": "vU4PsFXCjoqu1TttZPdia4V6Nsw8be8KNyk8H2dmysBnfTVsgacFvLminknqusUN3SEfWfuYzBLsmbDPyS22tTA",
  "key35": "3tqvftMSxMCpQwJRga9amAF6dwBuognVpjkypqZB8ADcWTcGx6exp8PjhDDYZqfkmMTfVPS6Jk5wEmuSLx5WxGW7",
  "key36": "2831PwLZJ13pkoGDgjK698TM1Y49wJUKL5XgqS4MQCrork1TVD4VXEdyB7ZNMnY6mrhuYYpZohyw2oKaZCx7DLjh",
  "key37": "2E56QYA9pRGCaNDSs4FnF7VCEo2xHD9gxKdBeLYHqH7MRRw5JbDccoHXx8JUmn6SwdFPV9wkz52NiV9jzVgt4PmZ",
  "key38": "3RtG2o6tncoCUzP4wc42soHKu37jVBcq3VnbCUxoRVLeRedZuWKDnZHcMzwF4xhC7Tt6RRD2HpqCL48YQ3bnVWmr",
  "key39": "u48PV9orRuqsXAocxyrWUzo5z4CipHhQDWPomQSJAYKT9YmPYPG6LzBXepj3vBX2nAuVYUSwfsLdyLFtUZxLb7t",
  "key40": "9o9dKaSCWPUppSsPewUo5TV8p2fdvfo746eJ3GPGwFyHFSfFiDKhkBWar5XDSd1jBzQ8p8uqEtXkjPvUQD4cfk4",
  "key41": "62WHUVsiZJHjapN1oipKU2JQxneyV2dBvUF1BSAkdVjbtyexZYFYsgeBfMBhqegooHoryzbsTnT5VvaRLdcJATyX",
  "key42": "55ThgXXzPeA3aLGjMaK2jjmDXrntjgMqSXcSg7zteRpincDVvuHfXv4WekJvfdCdGQKn56ayR2EenGsS5Ntvy24Q",
  "key43": "4mAoYiTexiBuS7iBGuebbzdBw8sSCyXk9gcRQk23oGScNWfxCXLWEjSGcqAvKVqZcSTaR6spSXUQhYTsBs9Jgyza"
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
