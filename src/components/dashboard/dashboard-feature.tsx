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
    "5gc2SarJr8qAm5UNBugL6HxEBYwQL6F4aScqqyHSzQvKu7iP6P6w4222FFCLqTLBRMotyDNW19ab9z2D5tEa5B6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dcUg3PGvRrCbCmgTTztUFAbuRq6KsirrsgnKw5ZKMKMJmCn5gwrgscxBx5fXM6iGurtZLXnbUmZfokoaJ4jwz6u",
  "key1": "3FT7E2PdMpMNJX98YijednJhC91vJWkMJFG8Ch4m8zDa7iDMSxAzcXzSAdZKJT3ygUuuenToWgth6QPbLE7KvCKp",
  "key2": "DpRFN9KX7VeUtYcZiBSS5KTqBt3ZoetRXxrz18N4bjbQxEcQLs3fpiPninWBGaNE1DaM6rwZ7i2gGoLWq2Ju6Ga",
  "key3": "eXdBvbnPGMaZQkjGUDxzVXSVZXbgwRXUZzHrLs5Y2QH1hgW4sUV7qar2MMV1MCBhr7FHJG3912kKQ9N1rHKPsHw",
  "key4": "5dZHqBjaM3CxYumZrXyPfhgE9ivraYhTCsvbgWVuwDZ3TBPqyvgWiEQkN5nxxTLFkRcejbHUTwMbRToXV8eYBqKa",
  "key5": "2V6dARGiaoZA1RNU6Pdvt3SqNLv4och4ZLN4fGeDbKnqtqNUQCwPms8nNu2YqKbsEwQsWQwXRFUEKFPNfsm7y8yQ",
  "key6": "5nLPJnku1Q61k4dEtHXi1nEPVgNVV3uTnJhGCTTCQDpTVBuotgK5XiXNnDjF7UHAYfHpAfPDC334CcV99PF6nt9y",
  "key7": "oWTifEBHRrMWxaX2nko8e5KZB4oAduTT2eWA55M9ZbhbngKySRrRarey4Rv516xH66BqreiheHBhYXHjQqS5VPK",
  "key8": "57Jd8Aviv5j4HKDyWBTD4UPyDMwNCBKQZgNNcsaqkB6Gom54oo3wnVeJ6ZnrW8G6dvpmGCZeUi6CPMTcf2GemZBF",
  "key9": "3eJBAfSmGyF3iJk1kpccenfqCwSX8fRtKMwuQmbr8tkzfpWGBC34C9W4b1bmHQcRWnNFycmpVZT7PZppLRK9Yi9S",
  "key10": "662X9Thmishq7BeTyzBEuhkBgwAvrtthCmKHaJAKHSUpjvcRq6qboHhPxZF29UGnMw1P9HPnxFiS4imoSUThFb5Y",
  "key11": "3wWrDgRbdFcr2HP4Sr4VP6LY6Z11XRLenDohSdVQ6qoXfyUXSfzKsPDWWNdJ5TRGjdEno6nSBwg6vBKASnWjANH2",
  "key12": "3w6VRMynFii8HWF73G3g7Bv5pr5BrkC48doxxAWQLfg2SweJDAvc8GpKiHk2UWkiSq7BrETA24hHM7fhMZUB4g7x",
  "key13": "2RUqAdrtByiuP8fwUCGa3qFwsfAJgUpAx9HcN7mE2qCWPwuQNU51sUhcTVzLxK1W4D3ur1m1gY1aeqjHrgqmgpqC",
  "key14": "hV3CV7k3ij8bKQR6ePRYZFV72eFVy6UPexZtH4mwYAGxzT5VsBdRfVyZdiioXD2k6YqAyGo5MpeCKvoBxgXHF16",
  "key15": "pAaqH3sBoMwUTsDTectxu8n2LLmRvrjGknhHM1YesXzJP8NApT5eMe6ERiPxZZ1izhz5movftx1zQ26Kr5XpmxK",
  "key16": "5V7GThkFPaCyLMB6XBwLoE5fSf9y27kUojipinvfNhnTp93EiGPuMTy1ieusZ5Hq4Yzrd3phbxXCL3as2BZhjd8c",
  "key17": "Lj8sKh2D59BRu972q3TjMyzB3MHqz7yEfrNAdhkmx8biKfic6wfA7Hb6K4eeUPHqqu4PdoGrqXZkvEdB8YUqxYT",
  "key18": "XpQURsFA54En26QKYj56T6JAV3dDgQbawbWk3DpVFfGFSSRJS4BZ7iXwgaqxS4oumzBcQaKLpoWkGA4RcFty8GU",
  "key19": "5g9Y5JhiUBQ4hGDEgwdGEQ6QYsqFHH2hQrYrnQ3nn3WSqtX2T2hoQvxrgiviVio89csvriM2CpKAyp6EVgY1YSNK",
  "key20": "4JjysRQ4TvDaPqSRKTje49cViPxsyLVC1M9AfkNgYos8Aae8Z2GqfYLRAnEbMU5tWwiHjnDMDo4tyt8nGHKA24XM",
  "key21": "2mcN7qutgpmGM1kaCwg8L2JjZpmcVKxDAyhRDpHMnbzz3sXrZ1KeH2fEZMkMxCPQBqXXz4wQ2hVbXSmFC1QbeJee",
  "key22": "62bPaoWeNuMxMnLfYzbK8KQmh4oE4gao5xd6LTGj6NH5Qg61WuchS8FvKues2AasFk2Yo7LVT7K2G2do3FpZewXC",
  "key23": "2M9VsHnbna5qTLtXxWGzm8gv8nnf66EnTLGGrErq65wm1Rg2LMtc55A9ko9qWqVXBzrdKaBakG3giJaEEfccTYn1",
  "key24": "2znQprZwDAqJnCsNz6nwYy7ADnbSxECyxdedu34VgdYjJPtCLpBaDvVP3omZNeAm3CrsiWUH2JqDXjTRSdooLsp5",
  "key25": "3kW2DdvUmYekUPtRp8fLLhj1NgvTsy1eYtRTqScHJMpo92cQM5Jeq5Ly8x3URD95q7PFN8g8ieFTyMvUDnFavoAe",
  "key26": "msJVhQDzxrxNrN5Nrrp5UDq8kZFLou6NqRv9UJfE6Y2SpNd9KPpqiE5qyRngeLwtLJNHBSGkU4MekcvVUWuwnZb",
  "key27": "cS1hgVxrMJgdWomKjCmH6hn3nr9DpzUmNKKNsjA6MnJnraTHurWpaZ2KRfRAHCUThucmJaN7oFLavLjVSUovQnu",
  "key28": "2WhQunSiGDbRahp88CjcEST4wfTW5Vzdxn2Vo9DGyXirnW4XFWkmKkfuhmtyFEZ8fZBkGDMmfLCH4h4fGRgNzVe9",
  "key29": "NQpPwY8FQ2jeHB3PJSAdkhVUvNG6oV3DRaY4KMNpdic6Z5Pq6kSqShKuxKj3Jk997z9tvfbuYxWSrPyNfFGHDGW",
  "key30": "5ctYRewfaPX3MYPHhZzqwAH1Ba3ESBeCEApnNybxQ8DbjgjdzSbB2yAXBxbtXSu8nrsfUABeCbriVCbc37LVwE28",
  "key31": "aMN5tQ6QczEpiHF9yfnbCA619p3N6EVjmTfC38HJgdDVvEckLTtQQV1i9fggB6eL2U1g7mbK71VXgWCsw5Mqz7c",
  "key32": "4Ktn7THbV8fcAymeMmBPDMUp9Lg9wAoWSTVPDSDRx8y3mweZufhAWohXeSjWPYTHfPnWSdNwWXTLi8FHi9QLesYB",
  "key33": "65kpzDMW4EwURU77cj5QHjb5m6Aj3QjVd4gTCDDw4VE6CDAzvMWzvewpZXyvaCRAdojuqE3BaVAmwFWyYJKQ9aTL",
  "key34": "2aCgTgGWsNp9mgaZPfeTjbQVR1tgxMmyvFfz8Wb4c1iugsCMxz1MJgAtH4RPrVhxLv4qPi4MaJuwukLPGTmsfVAB",
  "key35": "5V4K2Fe7fJL1QJGYwu1b5QQoXNQArvueNoT8cqA6QFiwF35e3UQSAzN2AQKWYLgx53w1aYSsJ1XLFFLLnP8aiYBS",
  "key36": "5jkzk8RAxRjwX7fRHhKbeicbNajGKem89dooCAPx5nL6YqrpzYT5zvK2uWx6jmpGDtYUbk3JP9f5ukwNDmoTjedo",
  "key37": "6iyxApFsr3AofyAHXTtqzPoN7admdZJsweQdBfeSP2L4VeqEAVntSdUNHP9m2QjXtXbZAcVTgrNEB4xB3QvF5xo",
  "key38": "2Z7tuVP93y48xh4HNcMyx1tv1WprVLA9qYjNi2EXWcTv1ZJumH8ESFDM3CFyURY5YMJP4vA4jRZV1DkY5TC2PAWJ"
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
