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
    "4qMRVBGuU6AUsm2zSqERQgY5Z3CHpx3XgGAUvRNtTmPRXmu19Fe8nMWfgcuqZ65SVym5cRG6LCkR2JC6fTqa9SKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56S3Limgp9xT6v6i2Pa129WjpCzLsztkE3gDDpdWqEMEpTTWq9wXPdVpnD4Fn9mT4D7Nya28TNvxaoPutFY9NXht",
  "key1": "5o48oE3hCLF9YaUfAXQKc8q2NQJcm6LeKXva9w69LeFYdTrQoA4kADWEGtSpAMmMjZMvQYXzStcCoU3m1sWQpjGH",
  "key2": "5uagX9egfjj9ZceVJ5xCe3xG9cQXmuzBqz1pVYdTxobRBecbJr8UkajPpnBoPaBvCvShG6pQBx4tGQ46jp6S8MHb",
  "key3": "4Stovg7HvAw7Sm1hLAuRpURmecY9D6AHFzNMS8pCiFD8uYkVW6KQTWz4Da3bmo97GmxUTiSLBkE5EzGA63mGsFZJ",
  "key4": "3qnV7fmxyFsgU2znafGHST4UM2u69nrBoU3BiHsN7SvDdYnXSHEn4A7ctyqywxTs5CBUEVmtXC8mnjDptc3oJ72B",
  "key5": "4hJJk1gs9sEBiLihCZMRgAiMFpCvrY3MRvyCiAcqSfPFwf6EGDL7NKurWCfDW8jZxEkWaEeksmWCe9jK7scYSzRB",
  "key6": "giv7w1VoxxozhQWsnVAoMYYmieyCXT7h2Zt4RPYzXfaBQ5WLGymN8BZfgAFxRhcEzsCcvpXK2zN9ftn1c8wuRCR",
  "key7": "3Xg5fFKjnMVpoofuXhHWGVf17SQVUtRMoQb8eukmMpqGRgYNuJnH7Ww31bdgshU7m9CmsTfWhQs2zJtRqNa9T3r2",
  "key8": "3JjYqmefnFpwJoex1VXwJx9gQaFMDNQdG3PYALFy2gNDytQuVJXtFBw99SKrA9fQSdmjZjtqAwSvoidPzDjbCFix",
  "key9": "5VhaX6PFBTa25aoZ6RXZKWzbWG5Whm3AvK3aLYSoNnfM1t8m6G3btqZ3RSFt1jCvUzh1Sthh3bPv5aW4Xe79nHho",
  "key10": "3bdpb4Pdnu9msSka2NJ4kWPDCRAdwizg2w4DEhx2eBTZNVoWhY3tB9UVrNkHqntPzAdGshhUk184jvGGjQbDotR1",
  "key11": "3Vb13fBKh8pdA87xnfrHFE5cDp4chCJHT2cMGwcEZmryLdrM6cJ6o9mqn8oEqmL5EDkhqTaAZr5CPLGVBbUL4cJb",
  "key12": "2R1eTdDD5qeMJQ16jUivo7h3qPacy1aLo5LBFYRLWoiKNNGUHNn7tNdP9neAxYcracfJEbkMxKuX77SDoLfFu43U",
  "key13": "4ShNbpeicEw66mETwVfdzAtRexohfZf3Qg1ide8gETSYbjvWVNesGN2S6gbZefaXUUm7RLXtveyEXM1tBaSTibyt",
  "key14": "2zvDB9xeGTRPoi7fE21yYwgHKNn4EWJ9EJChKXeG96bmbNhHVWvn6ty7KoqXsgYhVsRHJFXdZ1tNDaVmt2pxm5Ti",
  "key15": "56WQ7Sd7CpzcpkffNY7cp4T2HFF7n2DUvYgLpvhq9fzCGhaF7PkXcBUhZ6KV54scH89uyAdLpfBqVCH9QZaK5ewX",
  "key16": "3QTkUyAVwZe9ZL9Tfq6EqMk3NaUtuhJXhjiYaT7NJDwfUcdVxjaWsS8Ln6YZDs32tYM7DrZmV8N5P81kazW3UwF5",
  "key17": "3218jGUgduPeVqbi1hfAjidyqm7sULU5TUvnmqG2FUbKwWRyV1CnypUiDaCciQGbcN7w4cMFaY4jdGwGNAP52ZR3",
  "key18": "4wf1Gi73wwmwWTVm6HWtuF7rr3FKDfbQc6Fs1BGRLj5W6knyaK1hvtu32u8eWTNvnTo8PQn3RYYucPqb8SftC7D7",
  "key19": "429EAXHwraqi55exubQUKabx7pTss1je7csHU1EBgnqow6Bu9XzcZVTm5swXymTCe7y2zQvBVYvpzyk1JeDGNsf9",
  "key20": "2F81iVFW2Usm9YuYXbSNBB9Xy3js3dCs1fkPVX6rAVnMVUgWp7kLxKBgrxtkkD73uoAfi1kmjwZqiBxRSjLdcDrC",
  "key21": "3Uy9MVeFwVSc9kip16TYKV1tyMcc9UFbCTpYWCmF1LcJYaWF5yKkTJYYe37f5G4oFLYY6PvhpcrNPT8prrDmNzam",
  "key22": "5WwHoZJrJPDTQfHcWx4XC71kAiC2Cbs62jV3A9eVBLnnURjrGmSCR1gxKr58JJAihuDLfSRypt2m4N538vFAc49j",
  "key23": "4xMcWiJSRUiBfC8vkBT8fUvjGHrNyneGaHJ2AmJbmwEYAYQyktyMqjJ9iwWw8GW1PRNCrtrGz1Rkqe7H3bFCcZjf",
  "key24": "4w1ceJuHfKxuc97w8J1B5XXrCKXJxTduGzU4FBtdukXvv49WXacnXYiMByZCs6ZCYVoasqr1sVN4kLBpJDnYbWRh",
  "key25": "4G73m4GsZVe6jkUtip7cBZcN4GVY9h9qLmo45hGM7PAEETrXQG76YsSZHQDbNRpXMai7XH7ypF6bYmVo9D6kEebB",
  "key26": "C9FXHum12cgpj6KKvBzm9jfWC4Vx7XQ3GQCpQLQmSA2dx3N7J5agXSPQqPSKUfxfdAMjvEFB5rj5SfzdRTb194m",
  "key27": "mHRhY4joJmppsyHzZEbB27L6ZgbhdqhmRDsbC7qKaZcuE7NHpr9TorUW786zXsdb7KyaRdm6YJCV5Y1B7h3CnRz",
  "key28": "3so2E6BouD6J6LHhTvHSDkkNxyVxjgArUSSeqHYAXuENFFcUBPN3meFi8wVksY6YMjUM3q6XuSYadHtgKmczw6YX",
  "key29": "2mpMa9fPS2hdSt72PXFXuW56TEa2Kc4dxayNj5kiw9GDfBg6Qp9MDW3rsWDtwicxadq36G65ewxQ9df1NLA57PVk",
  "key30": "25bJZBwT29NiZtse8itZcXtvHSkATW1JXFMY6cPs7hrLFVHDBP6NwpWBXW7WG3fZV3Gv9Wq5BgpJZKQv9JspKGc2",
  "key31": "3HpKQez3i55ts6Y1pcFRWz4jEuGpaLf5BB5EjgJYhALBE3kEJXT5DqJJMGKUkvMCQenuzLjCwYKKrQKUUYe1tTcD",
  "key32": "3RjCmyTnQxYJDxKehp2wLqz2Tp8tqBTgyMJAeCiqzZZ23CKMtZqVhi2BSgGTbMswGioHkGF86XFXCKFdzezGLBmX",
  "key33": "2mW8TkRaZqCEMeFscirajNMauahhPk4PjJJEqsiph6wNr1SCywHVTeRU1FLrYXDWHNwcz95jf96oDvbSkbG5q3rm",
  "key34": "5TtZYzY8SSivm6Vs3NjDCbbRzShApiFRRPSYx2qDWbmQPEMpF6nG5V9ucK6Fa9onojH9pg3Zp5Ygev7YEfd9yzkr",
  "key35": "CT5Miv7PG8QkmeUcdK5Se5umVjk5yVeFLkD2V2cgsUTjsK6pHNeT4GcpsNk9MfKawePxvEHdFiAauw3VMtd9wgv",
  "key36": "43VwNWJuYbvJDrpPusU4DuKBEZimtJPQ2PfJvBfKk5eVkDKG1dwND2gssCGWEBCJfsbW7XLBc1M8Kq472tdAi729",
  "key37": "3K2cmUDHdpfh2B7uEpFuXmSCrq4uNjvSndGjNjEFEJnXp6doD2oiaadR9nkquZvYWFtrkiiFtRv4p4pbrsCSQPb6",
  "key38": "4BJ6apxzK3ehwkXGtio2nEG3GHUWVymXx3C9iSV29NWRWPB5nsYZQ9b4Xqn7dG9LNpm5SXHkF2RyM5zdSDeb94eb",
  "key39": "2hU6TkgjvdwEzG1LWxwawNPK5AjqX4Cevw4Uq8XezURzqZRyB3GPBxN8wiK7aPh7mPzP5d2ndsBzvhnedPdztkho",
  "key40": "5ERW3rMVZGj353n3WwNEzyFBmwH1nE5dCgw5ESyakNtN98QhGrMpJ1JKvonAF3bCMTcdUBqe8MKZkagTRg8apHfM",
  "key41": "4q1Lz1vWmLdCXz1wuthb8LpP3idCfeJ1LMMu6M9YrgDhd6Gja2YoepgLCnVaZkW81TC7u3LQKDbudtiQ5cpJLBrT"
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
