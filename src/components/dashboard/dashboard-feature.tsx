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
    "Pef5BrGQdJDfBmWxVxQ8ueLp3nupqj6TCgPntVWSsDZ47Ruyc1qjRzNXiEbAxFVX51q6oWrNhAz6q1xQooaGyeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53MFuJHMR4TRpMWTLSQN17QLCF9yNJFRiuayhv7cDHUCkAjyEpZQSgjpFkC3PhKiGdRtuPpyi17ZPjM5EzkeZqDD",
  "key1": "31dGGgFdAscR5RtSjLYNCE3sX47HfiqChCBgg1DpsvfFYrGf2nEEsNAWy8kHcirAcf9z5rwsCNuzJTtyZYhBQ7aq",
  "key2": "5vkJ69ozD44cczj9hrixrfXxPVvEmSng6HtRa7nY9AmF3RQkSejB4ZEKLajYGz6C4F96RVuEuq8U7ikcQeyD7EEp",
  "key3": "rjwjSi3MTzfwuyJWs9CD5v95FogjXSY7ZSt91rZPKUfadjyWmc6cW4VZYEhA1yEiNwoXQSB693XspgyhXZoGnzR",
  "key4": "4m33sxGtEh4R2sbYFma1XX4ckSP6vrfwxcYhqp5edtj1zwVuZEYeVjb5sNKSrPLUnK4tQMzdC5SgTwsjMaByDXbk",
  "key5": "53hXNnjn5YGCTHEUxftodWZNgcFpisNVF2Jd2zz8xtNRwPWpZqJeMvuHGJma19wdxmvPGGaxUCPjUy81q1aSnpBu",
  "key6": "5kB3nFU2yKS34EpN7RKXY9jWgD3gLgAp94P6ZFf7kmqTd8a6h685zTPaPj8RwrFk7s6dP9kPYSykuj493qvgHEcz",
  "key7": "fudGj1CpNVdXs6xpKMnTDm8g5dzuVfXGjZ1CPMaYtKMLGGoW9FNE8xiGYPB1TvJMEdVfxVbqKsdPGjidsppSZFy",
  "key8": "58Si5d3bGGfdnUkriRdt24SM8EgfcCSENoFyB47ofWTYyrRQ725PuJvaNhi35PBWeFcKYQP667w415hmNjk4Stbk",
  "key9": "2vwr4wPekPKfFKhz4n5tbxjGrG29TzAfpH59HXMp31ChSzqe6movp75fYDHc6GhYStBtgBDVQ1yd32XwpTvgEGAb",
  "key10": "3wFCgeGmCw14jjP23atRc14CxCPzpXK9VESXWAerwUs5gS6mP4XLB5vDDZh6rpPT9ECbviPrkqjqMhaUB9zDcFeG",
  "key11": "V4Z1z2XfXy38LHLnuV9RFzePKU7GUoFEBVZZ3Jr8QmFdDSKnRbxj75m3me9cUxL8hqqdRc55uzWq72Tm1nWXNoW",
  "key12": "61n3L62ayDLbMVGJRNZaHkqPnEPTnZVGFRttcFPe95xuJWdYxChmtYeZdPRURJuVfxBbnK1t3jFmHviLnp4e91PN",
  "key13": "3XpsgkUrzDabx6BK2mWowRExmE4vSSv6YYExyvqdkvz6DmF6ATp74SRNLzW6YkiYMQRAa14qQ53XtRmo6uH4eUur",
  "key14": "66Z7FM32JZ4WUYiKFq8cAAhdkHAx34UdRy2tcTxNnjXtL93mGC8m9awNxDkJmfHa2DExrh37WEn8BQDSGWDQVUth",
  "key15": "2jqaqWpKVMfEanAyVQsWtc9hT4gdxrdDCD6iyJMTQ4YVPQFLA3oF7mdJ5UpSFo9fkhZek75sapf1bjV1xUXitdKe",
  "key16": "5gUTLpDCHTLa81XseMojWHzZqSA13p59xMHVz4VNLbhjrLmGMJeqvdpqHWNzZTWmhmUGBt4c7om5mU4GQHo7YNNY",
  "key17": "2SUM7Cm7A9svxxus5MmFtFGRvM4aiqpqXWbDnpMvJbGAEtnojzi4zMsPPViKCfhAcPSvKmBMjUCeHBjc1v4aHj1d",
  "key18": "4XR7RPBjQBRcWGb8cg6PBeX9fRHvxXSfez9LR3iCecm58KMeGf8bWsN6nVRMwbsmg9MLgmdzyJSbBwX6sXn9Tru7",
  "key19": "2aH5FwpCUjiG4jaEwKR2a9Zk9jAe4asjhuyeCeThBie8s8AatW9WXj2Sm2JCiXjcgGFfiMeujT5uhhaQXLT5GXpD",
  "key20": "dFpb7rQrBaCaL9TrxWmJLatis3JcnmFbCXCW6Z9aPWgxVVabqNBLbUVYyd8htwiZ8JcGBkN6wm76MHFsWmu44YX",
  "key21": "5HF52XxPtLp3Kv1z8VbjsUbdUx6pgzi5LkHBJdh6Mv6X5V4iDaqzKAnTkaPwj7wsp3GzCZrjH6tQFDspEoZobUSQ",
  "key22": "4DFYWYErNVhgZ232reU7zgsZbchLYQjkJHEsNgrrDNq8U9VXuB5qTBEMdD7nrZP46NiR6MtRk2u7SytgLkWC7eAr",
  "key23": "5XtsNUP3dgNKMgnr6jun82SDFt7iYiDWonipAiizCgKs6o7gTLVwVCtzRnAnv5Y61NSH5KoRBxtWxGpJGnUg59wK",
  "key24": "3s3kDMejPSzkn4xmnRpb53f8mJ5o3KwifZca8oZuxa5oKqdfpQwpFnfLzunaxvYgnPmLzchGCoMGKtZc62h6PekR",
  "key25": "y5RAmxCk69kgpj6iWfHjyNfYrS55fyXSN97nDLJBET3c9JrFoAUGD9sJTL9X94FwqZrrv2JHKnhcpCpa7WWEDFZ",
  "key26": "43j3axa9VuvxQXvq9gkDxC5AZy41pmPsJhhwPkDs8o2mKikWnMwnw8H1rvbtXuDfsB9WHuWquYCZTJd9ejkpHnWN",
  "key27": "5eKMnXYtFTzXXkgmbHJJgq6kzndsg167H1gpw7UNFcmfmamtMm2WudEQdNW94Vi4B9ujkewUabho7i95XU7GFkBv",
  "key28": "4NschubckdPjUH53xY6JtsPqaZH5ktehKdteStKmUTPYetbHjFYCxZvuyVFMUqpuqeWL83PAGMY2kcZ9oLKWk8Ew",
  "key29": "2N4AFFgq6binfyzSzBbBE43GYHFvN4tGu7f3D2y7uuE4gAFUExeFN7aFsBmbxE3SfkwrwFaYSHL52DeoLWTTVrf6",
  "key30": "4gLX485Lai3a6GUNY83QpZKrc37GhYdXnr2Eb4D9JNF14JC8u3E6L36xN5JSywbJmvcpdWzEtmGpMPUZoUqvuQkz",
  "key31": "MMSKT1LNUny31o8fbDpY5u8UAUcTYoeNcuKeG5Kq5ATip5reXK3zBoe3DGwAgTEGHTfX9ER69ggj7HhC2XP5GWP",
  "key32": "3rEpWKe6exHTvVmMsvQGFvqPHxLk7m5UDaHwnGL8HmfiZXkVNEpAswFdDVDHW3ZwgNVgW5V2Pys2RpXNw5ZPTfAV",
  "key33": "3DwB9Cfie4votWrwGx7Kh2RCBn1GfAv7Dk81NsZYW3PHHnznzCq4GYagSyYYqkJnAJhM8AxnyB4mYLJ4fCfcMv3M",
  "key34": "2SaHLuN9tEiRnA5YY21U1fwP56Pp4fvPG7rriZiTGSci5UWzqH4rmAZYjitQsv5YhvvThEVYSikJv6VyWcLSNjeV",
  "key35": "bGaNtfLghJTZbvkaPoAiknZfQ4LsFfy7gJq9uFZunknuH1sbL3PT2A8QgLDbp1LoxiWTGL5T2eKHgBimku8HBhF",
  "key36": "waisrTYYxTdyNhFeRvjPKmc72TDqjFAh2Jk1RPKR6JbvdfCRbWTV2viGWwvBFQR9EqHYjTnXSFzY6hBNGWVFPhM",
  "key37": "WTTG2ueCc1irHmUMXB9w8Eux1duvZ9cJLcbM8gfuzx555n2tRGSqjBjRa2qGHk5kzpTQLnsjXu8mZSeJ4mZvXrh"
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
