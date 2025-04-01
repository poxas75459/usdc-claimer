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
    "64GYaP354y8HsfQsa1Dm27MFxo3CgE65jfxNcTjrX6pxkMpNRwLtFFyL3rFTGhwcHwLrvMdfcSpazL26DMbgjo3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RSfG5mkuCjnRFNePNp7gY7KHdDVZqyNzLC3P2RuSGa9E1wVZmdu6MWWYo4x1wtVPoBLvAJxt8MJFS2D7Y86CyHa",
  "key1": "4gQbPPm5gekddo7A1cx1QmmBuMtyM2yv43B2voACeye3nhsqj1u4yniRX7WUsr8ttfSbp6muEgpzdteont4D9Av6",
  "key2": "3xhHhwkUqXaBm8S18YHyBgvdom3ATyi2vciQ5djYQbufq7RmwARMf7oJoPKMZ2iD28NyP8kBqTsanZ6ZYpdBwKjv",
  "key3": "4iCArENipQwHbAPrL1fyHsaQ4o7d9MhRx1myo4LwBp17ma9ym3esr17SE7YmYUWLPYC5Sr2FttdRrrY6rehaPBFb",
  "key4": "48YbtMeni7eqzAAnkwZ1XzPguhFZzQkHYP5ecKk4kwyr36yBkGeabMLDyTeDYaozJjdrHMa4rLMkBiqnXKshUGUy",
  "key5": "4s45VTAHSL5WFxrcd9Dfdb36g3C3RWYD74cifzodFXmXUnkR7EPFYbcoirtuwA9bWXUBxg8nbr17HfL3JRrnGTBK",
  "key6": "2W6pUX7kGc8XXibc42L9y9G7FhLVFJT9BDeesxn838zfpn27wFkPEMpM3LCRR1z6TsMHeKNvzgKJv174wGApjoP7",
  "key7": "5waG3CrExJ8samiarcV4McjvrrYXPfHA4TF83jbfovDXVgmjvZ9cbPMQtpLqJP5dHRsNF1mVAHQrKKowPHpF3MPE",
  "key8": "47nRqngtGVDV1JUrMj9UpHqJ66Bo2acSHZ3y9yHCp1P6heLYkqLmnp7voi5XZ3RWDtdhiaj5gy2Et6Ge2TNka9M1",
  "key9": "BqP1qaCkinAcgpNhroc14bGhekdv43wJ9zBrhadKdJQy3ztLVffrjDT7XDLyd5YU9nRKe4iveqWoFPqQ4ZSbpBV",
  "key10": "3Ni5gERoQ9KohHgAydLBxiPzyQQAL3FMgjty55jKnVySXEGYg5ngn8vY6nPRwi4NEJHhJrsH7AHEMJ8CGhD1zYmE",
  "key11": "4axWCx3kpqNSkMU9ZTWeXrBJiodHerran9sKsckzqK5fnhQmfdUKECYiqH6MYf9b7jzVFCcLZ1foUKgynZb5gyYf",
  "key12": "62PHgRGkNHzr8N13243g6361KAVqSSZK4BVNwivSUbBHRyXrHgA1zj199h4LqkNTH5uLaULhEFr7poPQBQqBYQZS",
  "key13": "55c8VtuvPJJCUUTn7aV7hsQwJzqhR2iirZBFa9c8iRfW8xC4YfLKA7FbFfqrfKFo48ovTZv8SmNLUU6faJAZut3m",
  "key14": "5Rjvm1gquq53h7kF8QLD3DacsoPE68GamvmNdE8mrXGhX8SpKSbCfhNesNHH8XbzNC914sM6AWmH5KhDkxgyaHsR",
  "key15": "2RpmZ5LXahcrj7wyvp4NzL4AS3zkbGmjcEK7zQTugh7NYpPJe2WGeeyN4Xk8r26aNVyNMPtEiU14dYAKx82zWSzn",
  "key16": "3WnXPrkh8MkM5b8qSEWweRTAv7kdFR5Hc4E3WNMmYWzf6kkNHcbRre1FvxQwoRY9FK4RXc9Z7cvb1fCgT4UYWsxj",
  "key17": "9UumivpP2fqizHwopAf5gqKD9e5HkhejcrqvjFn6EL7L3zX3ufuFAWeCNps8txoNEitp67pWGHvNzY8qXouj86x",
  "key18": "4bCBXZv7D4tLLVje2vFPPAuodidWdA6EAqYJS8JkHDPZx7Ve3DcndhqjnhdPgQFAZnY3jiimb32cTW2M7dS4skEK",
  "key19": "3qbGvAtHPjsQwmTi2niB9Y93Qi449SPiaoBGR5za6XUXP9JmRsh5J5w7CtLpfDQox4rBCXU72a4ZKnpUy1Lwmp3p",
  "key20": "5wW3FXT6nP7wGNTpGuMDMF5zE9NnTZxKm3b5HUCAozKsgiBB9anRQAcyGFbDsSJ1YY8DKZ5soPWv5wE9UtGsBaZE",
  "key21": "1D7RyWP4GAyL1LbRR4MbSvnM5CVFL3g9CdZTodPCjKhsUAzv4koiNargVobf8gxBaLe7VoWZ8GeF3Eur5MYA5sw",
  "key22": "4n4Ab16xbymukgD75hRjK7htXwtMAfrmthAqUT2USBzeHSAARnRTZDKjBeMdrKhFHe4TgAD1xcJdTT6sPYT4QbaK",
  "key23": "3CgVQpR2dKR9WVyKmMXn9XbYpTPE3D7SZoZsTztXjGjuS1q5eGjs2sjLj6DiunrHZToGT3VHPoU6nVE7Atmbcgg8",
  "key24": "4tx6yJX1839xbCjyTdXjqcuAUXdDN4s6E5x2XKT9Zpuqk8heBputZTArvTNmfNjGfBnfaRQSe9Svtim4UCaEJMp",
  "key25": "2PCTeqWbpWqhVuNeVmKSKAGF4Ek1r8kq82TTSvnGoFxKGMtu5TLuF3t24hxtVqt8TLF5PbbuT63q5vuLeWQSStqU",
  "key26": "5e4U1eZLhUc1HbvXvpnKt55q43rPeJh8hmEBu2bP8BajW4BEjHRmJ7RNosiSS8RWb5VJvcXJ8NAASVsWFGTmv4nM",
  "key27": "cN52oG5hvm6XvTJwf65prYgy51eTiQ1WAdtUpn8GkY1E9YFmiWTsXpjD26x9noA6CuMUEM3ktYejrfQb5PUq22g",
  "key28": "4Ec8H5AFM61wv8tpLyqs4gwg9rY7Xxqo3Rmus1mHoWonRJR9MqVAWJNq8HXfMDr4K9qhQDiNN3CUAWPvymxUrP6M",
  "key29": "4q61gw16oiNvkB1jHWyEEatj97KbuphAdNdZKe8ggPY5y85PUjjjDcsNiPheTztDd4jtvNuRSEMMNKqhFeJMmifz",
  "key30": "GuPStUJyKcBVKHnZ9jfrfcrtQWXkQZtKn6C93y5ERH1i86Bs7gPXFLY7vJasAVpdbe3qf1kCHHiyvYBvikHNa9m",
  "key31": "5QLexSBtSjtfhKtysDMngcufiagroiRJSS8zwPcKaTzFPZKG6S9xaXjL3qteNkaS1o3ex14FnhZieiQaLevW1NiL",
  "key32": "4PZUqCrWN7auYbs24KqDFT4PWqkJQMns7rRbHtqXNZkuyLg4LFmJP9tq7hrLU5iQsKxdyboN5EyStZpzat15xWN5",
  "key33": "5sb6XrNdFYeFQny5JPpopPe5A2RLiMuhG1Adkygb9Kn1PqbNjTHrmvUY48cez3GDcsEA11GMaKm55ytAS7EE9hNQ",
  "key34": "5mYCNwhMMgSnKmPMhzWsC2tVEfzto4SEGpu8VWKwPRFfVRfPASHQCEuSqXW3Yxv4LdjNUbxQ27BwsR9Ww5zCBTW3",
  "key35": "5HG3dSbvbERqXJN1iN8kyawR3STAknDuzpHJAf3FnT1nd31GHzfeCczKfB76JqenNDQwFrhdjyJSMZEnCLzCZMfS",
  "key36": "3SQWnGGb6Tc9XhkhhAXzqWYqTo7LTX8WpCzCGTA9T5C2SntNpJh3ccCKHSKt2SAVMcRF6HaeAYG8xidu8tA1raBR",
  "key37": "4BpLgRuwbfwEZg5aRXAZK72H9WqcxcoiLNbe6AJig8Aey6nAmg3rAU7gUe4MX3pwLrb7YCWVXf5n9W1jmmvzAgny",
  "key38": "56zCWcHV5LnubDfFM9XmDUnVzX2iwLU85mDgjcvHcrtC6nrqwgV6xL5zBNaziEvwZ7BFKYL7vBHHp4Sbm6mUPDRN",
  "key39": "34Gn4byWBKTzL98ufYUtTmMcNiNEDW46AdCsuAbh5hTE8LNaMRxP2DFKciV4dWZ8G4DJZYgEfMMBZbq46j3Aitiv",
  "key40": "nsRf6LUE3VAadtquLTK2rp2WNxbd7k2s9mVmo3FS4TAXoSnQ3tBsBgwUP3whw56ArLE7MKzSgabePkyitPSH7pN",
  "key41": "G2yfDtKNVXJFT2QuM5XR2DycXvawdDVDGLvJgrqC6jZnuEjZjudNASRb4EnLVc6piVm4cs88d3HEbGiiG5ajdgP",
  "key42": "36VdF9WdbE7kpoudnaCcfcbSHXPJ2Wutc7X5wQGaeC5NkNsKbvHj1v4aBjnbsCGLEZqkuiaWXCpGdCLk2FdS2XNj",
  "key43": "LQRD1V3QrSSo1yJUYUtd7uiBs6p3HiGwXtt1wZJ8KGyqL9TgzyuqvCgQQHCpYBm8DSU9or41nk5MJtGo1tRB9uE"
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
