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
    "5D3CNN8Vj9Qjzmk67e8j5oPeiezy4Vrw6irCwAK6bdBoGHv3o9jL5tkLVX7EyV2VFEgE9M2WkfUN2gWKFWXfwgTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "425UWeir8ge3DWroEiKQTNLvjPbpV7hDHzELP8tGf5EpiZvGmGTz32WMewQKpjeCKhXC6MdzQzaoxU5soD5vwYLc",
  "key1": "3mYdjhwEhYbV7eSZHstvqGxigC5bLVVHrVKg511wpZBQDWih9PSoYNzqYxPbZ66LfHCZ6tqPDxMoRTxEPfEA14Gs",
  "key2": "4wUMDne1u4caKPXKBXSujLxjDFAsX8v1FswGw4oJghG89GmzxwAZ54soKieTjXg9kxGtWsM41tpCKRLpmK9ToHDB",
  "key3": "5wSysqqybHHkyu1scUAZ7iySoMwZ4D6xu2pieQCgQoFmqm9sn5kP368ZCLZX1AKhdWDAo8JK5x5kyFfgdyNDpXPp",
  "key4": "38eDP2gtme2uMing9Lg89JhjsydNPxDAJ42x9PajXR8PiqKptPCqfiwMDsH6Y8NKLmyHvfqq9pDX83s6GZQKJ4rd",
  "key5": "2mNwbrZadVw3CGRfTh2ycY4jX5YPxMcN5S7AumXa3oQfYJJ3AEx7aEGuCjcBFFWjqhZKVCTcRGymN2wZ9KevnvQj",
  "key6": "3Z1ZqauxNhN28jfXyWKme8jV1XWieYjqqvR5NeSWheczLpu2nSuP4rVox5urw1JBwhFDKvYQFBfBqKmPWimqvpXG",
  "key7": "5mouknzd1n6QDnjFaMqUfsMjL78Tpt834qHL4RQ5v6FsajrGN5NXMmsbRKp8QBGmWDWDSPTUaGEJiBiepSQcnTZu",
  "key8": "3H1RxQhXdAqjqqBKTFbLgrHGp9esUv7ufeiK2VnZyMEE3rV1m5ReU4inogFvmi4kFPxQJt6Lzebinr3451CKoNHp",
  "key9": "UKtSWvQAdFBVQa9rhyqtVtZe33kPFP1694fXhwUb7nTrFbUjvGsSsec9UMVqzNrCoG4jiVXzTiUMjHAmyiyDMN2",
  "key10": "3Tcr1uzzetfda1KPiCXhfdFVt3SpMVtAoYkBJRZxnWiXP5putUDWoVZdvaktfXqyBFu3JVWCW6o8Se5B2wwXMKXy",
  "key11": "29BKbKenJ8dKdHaQNR1pNeKTbdzRznxR38R7egWibGrc79XMv6MNVJgzp4qnYh38dAPRKt3Q6hxYTq6SPDB8i1vp",
  "key12": "2zkQfFVjsYeyPxZa4s6NYa2VjCRXLSz6SNnRa6Zpc7rQB5AJqJ6K2ejkFVjwLibfT3BeJEbrMumxuMzXuVo3ERWi",
  "key13": "szPmza9K9PP4K8RwQfS52WFw8AVTqTNVHuXipD2b7VHbSvzHBeMFNpdXQYjUriWgDuxiJPhip5v8PNw2PrUJSAu",
  "key14": "4gpx6z4jkUDbFJnJuP2hbDGRM7FxKFug9RbpbqSwSJCqREorBUShiduhSX4gMCARZnyxT7SJAbaqbsJ6XxMHJWcd",
  "key15": "5yV6mvdW9rcV3pr8afABTpqJEqQ22HiTGQe4jpjF7jBSbX2dJfHg4p17s9cyMBuHH2hJXJeSiTcwyFAUfmtd9fgE",
  "key16": "5b52QwYzUydg222Vcgowwac14hYr1HgY1tEsgAjckbYWLn7dSWF7mZ2MjtxXFSTq1D6L66TZDQfP4wctnKpjN5Cd",
  "key17": "qAfboqv9rqutfJUwdw2qUDgUoVKukB1G5VqtmoFJjh4dXccZ28f2W6gF1aEmuf9JH82ShMgSBiaR52RtTGdMp3h",
  "key18": "4ZRujx7HALdLzjUpFw7vs9Fsdj1CwqVhYHerQ3vSX5daA6UgSs9oHeXcxG6Ua78WG3AEYEtE9Zytet2zmtDzVhj5",
  "key19": "4hJvUu6fCaRiK7PqyHDhysfjjVvtdJLcRZjaBQBiTwi6BdS1sNbsaVCzvLEy3R8Kk1PQeAsXVQ7b4CM9j8MyHqoM",
  "key20": "2AdbJdJG3pen4nNPQX6dDzAqUd8eMZowo8DffYbxsDt81bzknmykyUcQ5jvJkfCg1TcRPZBpQtCq45t1XiWkUgGb",
  "key21": "5zDK5hdJRizKr6drb6rwQ9a4L6Hmz5FunbxskeeZb5NqEAUijNwSi4XojmFXdAT2njgNifUDYQKTB3DfVUbCEuD9",
  "key22": "3GsxnRAdMSdXPkYnzgYkCZpMaYAwRwt2494F9ZL6KcpRnS4ga2QDBeHcNaExxmuFVxPCmLke89RMeCGHAyv2GpJe",
  "key23": "3LapRBYHFSavpPeVsFzsCFdLGkiw2fe3B9Byb4QcmUowtUxCeC9KDZT4XB4S7N5cHcuhw5SwErrKRFXCSPU7wb9E",
  "key24": "48nF8AD6jEPx1Yf6BpWDZ75KhEDuBR8W16LvezTJ3UKhZxXonWq2CvUXsRfg2Nz2PDHDGgACfJ86Twb9KQtDRwLJ",
  "key25": "d1VsPVXvPBn6Wk6B5X1qe4DHQw7mW67dRi1c2TKT3goExLTXyDKrpKEnNoCf1zet6S9tKf5MTm99P3Xwxr7HkoZ",
  "key26": "2xdSXcKbzcHYog56rNnibSnFoAoXMttfqJ7HnRreuMVxf76ZTbxfZL65E3rZMSXtivY1HCZxe5bKq5BzWbHCTWx9",
  "key27": "49kbXcbstDvKURLyZ2thkQpc8gs4g4MV9jm3Frx5Sg8bt1kVa8ksvMz1LFubV2ysh84g6Gfu1nyTDuU6Z7pk7RvB",
  "key28": "5uSeawhYxxDrmWJmG77cZyTgziCRKRigpJp4kFHzm8ET1qmdpKhwSck5qJAmcUwhdQDBiSFWwzyHC3Ktq8bYakqL",
  "key29": "24KogBKHvqEjgKFBZVp27f9XykQsZNmFSmN6ZZwfEdXiv7wHwg4rC3ETyWKf9pr9YyARi4VodARBKK8t8i7KbjfJ",
  "key30": "3BVoj65EWpHdx7Vc5axCW2NHb5erVjR6gk46YLpJbYzdP4BAeoKiumnPEKMo1BNUJFWJnm15z1cwiA8ni2oruEx7",
  "key31": "2ULmLAzLPvMPoA6gagi4CD5HxXJKQScE7gc7BPQsnPhxXLG5J9AZnw2YbUxdWREB53XxzSe1W1mqZ3eQcQhf1wfh",
  "key32": "43YhwuvXonWgHWJUdfMggxha47tGqrSnPgwScQ9m5c6AbZw86Qipom17EDiFRijovNF8Ps56z8n4JqmaTiZq1HaY",
  "key33": "4SKYycP2VSwYxUAB8Fa61GJ5gpwJcisDn7Brn2vVLayQ3BKBTJ3DrgxRbnEnfQkUCNP6pAdQdpyHH1vYi9Cynbm7",
  "key34": "5d2bbGUGymESur2MHuDHAgynG8erbzTBdc2XvmstnK7eexopjDEaXsTb4m6iVqjeiYdB6gRVdeinSVWYYFPwGjbE",
  "key35": "37AL3Dcdzq1Tt32D1At8rkeoymq4bFixAhH92xwGF5JNo1rh7D3Jns9TfMyeSMHBxRDqnq3tuouvxC7EnscvQew4",
  "key36": "2BNn1wwxkmxkDCu1JjMHMy5aY2QkyqDTTsQmY9AegFC1wQug4TC8j1e3EoZHktmhftJgDLY19AmumqXRGvj5pWnu",
  "key37": "3xSeQfDfPWKmxcdCvszGNYtZrBqU2JKSPVqZ8a8HxWtdGoYfQBoca58csUivSnYLmt2RUztT2furhZb8nRqD2Jz2",
  "key38": "5uHEzpBHUWs6ne8VZ6mnHYgtsa5n3ta948cKK3hNU7MiARRKMDGkWJJJjygjCNiZBENc7Bn1G3GWpZe2iQXveDwS",
  "key39": "4HpNwiaJ76hsK7bU1qEETyok3BBhcDuQJMFuNztrEVgoMz7BAVjtaf4PQjfehuzQ67c85f8uBVBeieNkNTxmR2nf",
  "key40": "LKeAtva3UUTcoNLaBp7Tstt9y8HF7QuEtR3NmjGjZAAyG1Ev1i7yxyxw9y3eX9AaCYwoDuRoU3GQekXp9aHwVfp",
  "key41": "4E7V3Ds8wff8gsv3jmYBBVf3YvinSghaRFrDMrcQcXkFUzf1UmmfyswB7o9UqaNBW6VACewhbukxy61NKgy4Vheu",
  "key42": "4Vmw1xu9NP5kWWJPc8HQE9vBpd8aP3aywDwskqjSmnvGKTZWqfzazjqzZHct4voiaMmLxg14TcRvuVLjRAwmfXPw",
  "key43": "3MgCVNCBBFj91HTFjM5J8uB25QPEpoj1XSV7YrTN6CXKdGMwL41DVNbVbrok8KhaoUTfTErbKqNDVuiJPsco3RoZ",
  "key44": "4mVrCHehrMWTC8LS7ngNW3xY1gGgEsSShsUUjNd9SHY8v1WnRqRkY352upaEdTTtgwdEnFiGjmHXNRkFLP3g9fVv",
  "key45": "c1Y1Lc5ysgwLDrP4rr4pEP248xRtjHAreQv6fMwTjqftKw8SQRGz4Z1tgTwTQCsR64NpqA9iK3q3iPzK1MAq15s",
  "key46": "42vZVb1z11cGjeyRJNVUWyAX87kse6XvTaBtLDHZpdRnziAb72QLUybmGBi6YAEJH7ZDSmKCCtb8LRG6gF7BoQQB"
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
