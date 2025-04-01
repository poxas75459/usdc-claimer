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
    "5hTxUxaZhkA9pZUTiniS76TD1DgPjWBLYHpzFVoPB8wUKJphm9jbdWbtagsPSd3e3xwMzb3Fco82P4Uc6xdMdxTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DieiXs8g76TpT4GvtPVYXHvup9hSw1eRLywH79cuz4HWHfNZ5cj46TWooTde1w4E2zvtD8eoytDegNKDFL8JP6u",
  "key1": "2LQcrtwEBNKwcuXjVQPdqDonkm2eJNPgJyqXaEbBVKfe4hirsWok1yBsMsiZ9fMgYRt5HVVwgcWxng3sN3qZxLQp",
  "key2": "417CBD4ipA2d1cTfWzE9GhZc9SRz4XPYWbyYLYzY4A2McVFaqRx7jVkjnSGTddDVVV2eoUu6jQ2k21WNXPoHSYsT",
  "key3": "57kSKHbASWFN42vGnSShWh99pJMqhEk9tpJnuPc87aFfspRGM8qM225qSYRFD7TP8QnF8nTL4qzWUFAfje4PHuML",
  "key4": "3NQLCbs8ENGaceKSy7uEZ9JsazrZnNu8qZczi9ynPuZAEmQtHxtxPkNGYQemtCJKgNx2xk3qXw6aBrNve4hHxxfw",
  "key5": "2bfnTwP2FRAWVud6m4HxzoKkG5sjAp7xcFWzB6PsYb9RojkCqoXfeYniHmLPf86PGbvLg4D13DkPXxZBZDhfLuEJ",
  "key6": "2vWmHc8wwtSG61TNDVNyQF9Gr9JqM6hVJ2BKRy3Mzq6RXi7ECo89cKCw935P218XppDbta5nAfpvVXyHCE2KY41k",
  "key7": "2JjLKwTRySW5BaFgwMz4W8a57NMtYcu45n17m2w4snn1LQvVuA3yio7Kc51xD1Mte2agZ8r86ZanuCNgjfR3Rm3A",
  "key8": "3vJPhRxGyYuTL5qbQeHnBJF4CKxTkFdD6M8LDeVZSUpLFRefgaJjESAp8uUWnyTGASGRTddZ5FTPrHZ9Y2a1xmFX",
  "key9": "5bbCx4ABNTFNDe4D5ngbF1hzyHy1b3gHEHAbMrGce9frvYrmZ4oezZrZHPxw9KutuND7P6MjmgvnQbsFZEKW4T6t",
  "key10": "2gNzEmZz64VtkGxgB1hxtjLQZLf4MRbjx5Gww3G8FDtydFdFtcbpvQ7pcWZ9JnLaH9HcBcuSE9JAEvXgxhEoH8v5",
  "key11": "2646XtRnhHDNSVc8JZsWPYCJTyiRFPZSiVZgFzHsqo9iMqidmjtzhGJgZdHvLABgQTRNymiFeb13sctdtGmwA9gx",
  "key12": "mfoYxWgb8yju2Mp6E1DMmuNGqYtpcWcouuZJTaEhEUeAfe8MKvzqMJfVGLMcy5XGCuMgEwxFxJwwes7f1KTmoJd",
  "key13": "4YmpRL1ZWA1TDCtxRChAJhop8fEhTDNAdfviduABCiisthBHErAfrZ15iWLrxTb6QzdCjkaUZcAkVKzViumNkPaM",
  "key14": "57uCYwpoLB7jZsW81o7XF3Nhaeb5emJPU3dXDKjQAQUMf5S1BXcGn7naBFmbudVMH46EDDZqQQJ8hKC5cKZsiRua",
  "key15": "65RBeg64iuUjZpwMZZU2pNMuNSCJGWKBJ2NJNsEjPoCov2s2CZckpo5ZL2YgMYxJwejkTaSzuNBvwV85KtpH61jq",
  "key16": "3xA1iPv5EH72qu3BMkNuh8WVhj1GffnmPorJ4iGejrNEm6hCFscmUvQveJtEowEKE5Nz9DjVmMgLyEvSooPtxHi7",
  "key17": "t9Lrp2WDuif5FF5Vh2CUWLQpXTcUbhfT2t9MA9eK2vwAvyAFNXGdX2cCBMyvq2GfmMP8gc22CwYmPnkbMxQwoRJ",
  "key18": "Jvjrm63cKbqeh9af78QF2QdjkQggmiC5iXKg6ACQcP7ohk1yA6JnjXB8dsTsuxpkEYX5P7rcEdjj7hXcjporozu",
  "key19": "2KH5yszQLtnEaueeQqQmfX7K2F6T66XfEEVP66TSUnbu8WZZxPW31ZJbX7TE2jVJudQKumURudb14SzpLkgyHLcn",
  "key20": "5HvZ5NWAhnbxXMc5GHBE6TG3BYk7gZR2yPj3D9Md4okm9eSarUQ3SvLNkBdAbTfRjpKtLnpqYqJH9kKWH6DE2Qmo",
  "key21": "3wpEkBkYKjqwcrnz5gc1zh3VGyrMx34sBeMAdZqTfNjqcegxKRg52KGvUheLebKx6CHwc3sf7HE4Arq2VT31hSsX",
  "key22": "4QSphy2yiVrFFBv7rVDDqwKwDso6THqe7axyRTt4DY4A7753dTy8Tea6njEd8nF1EFeSAtMFbwKTAyKQBDB7nHAr",
  "key23": "3gvJfaGbEmErxxKojqeazs2nBEVpaptML8TbxJi6snYxCUbRtNGQgr7Fe6L8vYrNp3DYXwHqCCHHpb6EyWTKCQUd",
  "key24": "3p8uthUNF4psaQZBiAHRbsdq3HZUwTnjRqj4WTEe2mS94XKRWbYc9c6BjUqiTC2ubVgKrDAVzWTQsxYAVKBvpVjb",
  "key25": "4WN2xs24qQDpWxynn22irNtnYGLuTzw98t63m5pMpiGNtG82wTsDrvZs9AmcMLvKzz1hVFmwrjajoE4Jgy8M9vNt",
  "key26": "4QGgYSmyKPYKan6Bt3PWbPjEQpGG2S8e5amwq1aNGpvPtpQEhRV9mtQNh52ZeYWiXLxVpHRpVjy5tf8gqCuFg5X",
  "key27": "62GN5x6kJrawsUCXnLHz6Gu8h86F52PjGkY9T8r3khanJigG9MHvY2g1bRJ53urTCreW8MeRU2NQcKDL8pzTFdDK",
  "key28": "4D9fK4A4Xfn1VNKU565N5vKLuFT8bqLkRfpiGL49aprEv3MHouapfSWptHGKaP6QmGU9zKtvtZvjMCyu5nX7BkMW",
  "key29": "4op7KWFjhN5vjM4jpRKUTADjbyV6cpwmtcAFiZoRrz3zPyE6nZqXEZqJVHnrcn9FiLMCDTnT7K1xgEB1TRUp7j1f",
  "key30": "5ahDN4aotEWcrs4vP68CKhKrev417TZ1N8YH6R32FYzTyiAWiGcGrP9esavwwXEcCsgfhzgjAjJga2KoU5b14u7S",
  "key31": "3THbdfaFm5DwabVxgqPhxqshvkpwkhpzwsRdNpSJjp4Z5xuoDXqzABNA4JWKGjm3gK5mker5hUGsG9miX94W8ies",
  "key32": "5PXskQyH5S8XuY4zyoXW5sqvWRvMQFiMiVDEdNVoJgpac3bg36A4wBLgoxcJMoDBQGCCo66DyzVoHC2NSdHzR5ta",
  "key33": "3aNwLKsnWdfKvP89S89Kx1WtACjpWhaviYbvJCKCtCxKf4emEL1KH2UJRsgds4kEGNtgHRNYT3ikXQcEv56Zs1qd",
  "key34": "2QPnUAg5PyTyQvUyx3oJhokDwCTFkHSdRABUGoKAcwNB3RJu8XCxi1EhJY6kztnvH89YbvCf7wEgjD5D3DdRt4Wf",
  "key35": "3bJzeMYZx8wt7frGQhu1CCKPaxRHZvaTzKkMbQ9Pny5mbnzvWZVdB7pqwfX1qyQVg9kiBGXEHh4pr185cUoimJhV",
  "key36": "35kBiFbPhdgxMCgxT1gEkt7nLnUt5iETbyJxwG9mhFp2iW2HMin2hhCG7UToFScUjcdDp9Q3YGC7qkxehYix8sZx",
  "key37": "3GdjAsNJiedntx5Pf7hZ3e2yuBoA4ENTXY9oQqupgq7C3mVdv9fX1CgkwjS35HDC98vmhfB8UW8hoQxShww1QUrQ",
  "key38": "2wvGipC4SVBuekSA4EJvMKqJaCuG9Yr7D4W3T34UWgeM8zcTztGGo7kwwaCSAi5r9SRJ6SxcqJoxfrYzdEsYoowB",
  "key39": "5K4XW33WK4d8A5ALgRsVktqhcnugYTaqT49unsrhKu8akH8iFP5xFCoFQ2fRLZ3hdMqJTmm4gH8k6kqVxYEgHjWt",
  "key40": "3WGXjuKbzg9kHQTY5dySWtGyeAa3p9qwJXTb72vftG4Dq1Kj744iCiwFUdP2r7w9xypB6PhLFarKGT2wFptTUqxk",
  "key41": "2nnFuWt969T38EKmkTPWhMqvreLc5B49pMmepe8k6tcYxoDrCEUiLypBVvqJUrWdYLbv7pDpTjrGPEP7WoNz2nVz",
  "key42": "2D3BV2g94b3Ynh1DwTBaBu4io9U7KJDakqAEw7wksHWmiMg9yEbuBRYASxwW4xdAjufsDz7MMj3aCoKc7UxCqjhs",
  "key43": "2E2qZWBTKVU3FJJeMDgvZmv4TfE6Dg6UyJRkFXAgpF1fCpPmn1YsDwehtNLWbB1y8SSoyJvapNhrHnZG7rpTpq5h",
  "key44": "2XW9dme5cASsWrz2xHeNcoAMXxS3WkkTkvzwHV2Jubyt1qWniNDtxRTyMiDpPNYa9E6nMYQuyWBu5szaSKPCQfSD",
  "key45": "28jJixwceiRJmfJGUhHQe7JWuJZehzUDWWKxTa71Dc7AEcGxfMEohmrdfqk6bNpiKPRRDkLK9eDNKc2F7rnFZggi",
  "key46": "SzpigCHP6m4Tohw2R5Br2QTU5UrtL7dntwd4zF2hR4h883SqB2nBzm1hARNDf2X9ebmfYBUhCfHZJ62qMMvZbRT",
  "key47": "2sdnscr4zsfBdw23YtBvJsj6PSNkf6F4a36UJem57JDPAFAidghsSP3djWkGdsHY3P2yxjyNhotpNmPu4LkKXZkN",
  "key48": "3tJsyMd62BCeYYF13jaCDYr7UCmJfJEFjP6YiejzdcofnauHtjNY1Pmm5fqAMKKuqoY4P41iKnQUTj1GMa6Sd5fn"
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
