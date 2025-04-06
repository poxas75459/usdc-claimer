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
    "pLXaB7LxiQiCZ5mzP1m1bwnUG6TusXUBtUKBC3XGCFtdtgQa8MBQfAkVjCk2JE4JKgCdqLV26rYYBvMQnSiWp5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "455yQSXRutAwieffNKsKh9E7DQwPq6M8578SNRd89VRWNRng5T62mvxeBVKJ2RqLTorkUsCpUSnu26hbYEKCVxtR",
  "key1": "2vNnFoy9HWapwvKsApiDNU4ymhtKjDfTNcHPzg5znamkoAhqFGFtppeDJdm1J8CsW1HhaT3R4o724G7ZUWn8ov5M",
  "key2": "4VmFfT6PHWufYMfXLVrYXn7fH3sdLcjkNmMX3ro8XF7nyAyMLh5gnVaMTEsKzft5ss1sDajbqaY9wuS9mpajKQha",
  "key3": "T7VfezbxYGxctVoJBKGkSQzBDcFP6jBfWxooV9yp3NmgyC8gXqEe4EmYn6mRDQMTsRcNAf9jHHWuRXMsQSh5QGF",
  "key4": "4W9LCdt5sd2mW4KTqv5F6dRVzfoA135WsGsMjGkTRbTSkFrXzC3LKPGhL6TDXffD8niCiuPJBYRZc4oZwncpMaZU",
  "key5": "3Rmjnfm4t7Q5k8c2b2cY37DsyXKScQNzkQZrmqmif9AE34SycPPhZATKNawnKnL8LutxpeztBQoDZCSpDUwosB3B",
  "key6": "66ATGm3Uyg5chwwHhwWL5pfRQFw8Ed4RJMpWg1LKKxvA3CHLdyw8hyeXMndqa4Js8vrDzdig4cATprjq9FNrsU6E",
  "key7": "d9XtWrDVUH3EA4vb4fx7ZLogAfgMjLqrWf3BR89QNq5Gz5J4nnz5P3oHN2xBAiAsxDijbRvrEZQyqHKZjZ8T67b",
  "key8": "2jhAPsj1aDKPMjnEGshmYaHpJ1p5mWdiZJYcvUenfyVk3gzju4sucuU9nm49sVTiH1h8UYcMZkjSULJwU5pw1r4s",
  "key9": "51bhde6rYnEF12gMN4357FotpDzqmaZogSb5SxpX8svCc6zFQVzzknhkCsBCrXuoecZf3KAGUFbVBvjyhT8zjY39",
  "key10": "2NiC5eAZsydbKrGYSu92R3fE3ACBgpjJ4Wh49VBT1MKCB12ZdDEL2kWBKqbXoq3hgQwbz1UxRTe2k1f11eVfSKZJ",
  "key11": "3cvsk1gDwLJrGxNPuwtWiFzSVijyovjJgJka1darwzpSBUhWiDpdw9RykVR315dptDYCm6TppqDDYzjKyA2y1zaY",
  "key12": "4BtjjEmureqdgWJLpqraiEvwTRSqV7dwqTjF4ehV47xywf4NSN9CdLynMM2dTe96nDEfq64NvEWFE3CJutnRp3EQ",
  "key13": "3ViXNHTHySR6oz7tHZAgLfaRSANrD6LmAD8JkhReVCdmN94xs69juVN5dYGZvDsTDuifoU8aKK3PwSmUfQHDqMFJ",
  "key14": "5nB1oK4UGUuRw4o7GxmzNYsbV3gyKFwDLGqmVpmjVmCCFbvRPYJ1XN6v46XbJbard9JcLs4EUJvxwBWzu6Ca4DTg",
  "key15": "fMqwGkVRpjiP6Z6hTaJAcU2cZmFJWoKTkeW6BV55V2kZk1jxXb13ZTkeBkFRmivF3DA6gaTkAi7kTC9ESuhazbo",
  "key16": "5voYYaVGMYZLbY5BEVMnuDKrmtppH2f7RyXe2NwNvFQJALpT9hLEMkYe8eETVmcdnU5Hy6b9r3rSN1KWBmQBdEcb",
  "key17": "22rNfhfw5idosiancp9Xv4TZtq5v9q7eDEaM19GThw3wwC8wyrfvx65jdYncXf4PApAcSyoT1Lro3w5LdxCmhKn1",
  "key18": "QuqmPAyHcVG1ZP82z3H4izk3t8nD13TPqLCxg4H97bvVMsRx9wE5X1sxzh3KfLP9xQJp9WjginfR9f4GtEZpzvD",
  "key19": "3XEdGke3awpV6QX1LqgM9opE2K2r5iYjKcABvgqexGocqPy7v6g5socmxszdNLbEKdPMf7kL5dezhrFmeQ2DUQBG",
  "key20": "3ZqzDFiFC3T84QcHJ6BM3dHBcFLqwou49fi7pKysNJvj88pRnH9ZVs7wobeCSi9ZhJNJ5NVWFr5Q3HVuVTaWH8gP",
  "key21": "31kWVT6ms1Ny6rY5Bkv2jBzL4cpuYNn6SFD5zkZUEGCTBw4YF7DpZ69ADsWGFibtwhyxrbf6Dg2FaSGvSFNa7Zs1",
  "key22": "3sKztAjtxZgR133LzdrXMVcdbdq7f6uC2geTgPqBa4kz9kKTBooGPXfVKMEtxy73gzpYWdvZTcF2QgLxdJhtCFDi",
  "key23": "eHqYr6VtjP18LFvqvC2QLTTHsVgfhYpoC75ZGEUmygTkHU4TrqFMiULG3m5QCqQoj16zynYo5Jky8PwpH5mgHVP",
  "key24": "5cvFvEUp8desm4vyEczdtyjeHcab33FuSYLPxaa1sYdDT1KTPDUMohwrDdMXKeoL3pd2qgKYbssuiJPRaqDDvefc",
  "key25": "2MjTAbNab76QU3VaPMQssskVWeTRUz3UX21WpxEiespndzepvwWW4aJsqA7exLeaLiJ6uD2daNsxiWBA6gzS6xSH",
  "key26": "4P8vzxGLSNxhfUZh9oxZ9DhebUbSt33M12iJkKafxW54Y1ZyXkhbnoSuAdJ9SgxphhG7vKeTu8EN42Drie9vJQ9g",
  "key27": "4ngq6rSHiVAkjqpPk4J8zTKHPjjPLhgMTaL36WQtWeMsueeLC5eFZ5vD3PjBwCZ8Rs7KYnU55b1mW5iaBuCdrez7",
  "key28": "3ZHTF3PMTj3vsSDft6vRPSKU7WZNCRXB6cUd6kMbRZvtyYNzsRdLKojE2Hy6abCFi8Kh6pBhpYU7hopDH5C8Tzxk",
  "key29": "5Et9XSCpogrRVLU1uo1joHSRsana7NiTvQoFSHwCoZSTBfPPeoQNugQrgzd2jVq42qzeUBfEVDpFcFK6jwSFQreM",
  "key30": "4Y9JfhkDM6gqbsodvDLcB37qpUFRhNadTTje41aWYteiuZA5bTQPV9y5YjjZX4AtXasKhAKLT4iSfdGZ4PzuUzbw",
  "key31": "65nucsFzVo2eW6La69qdgp3zR7BdSk7jTceXk1Z45hjkqCnFvJJH4RreZaGe7E16QJvjnUGrAU6Rh8CL59vhne4P",
  "key32": "VuvD5cGVHyXywMX87hvJSDruCbrSEn8Dtpr8bwvDwdapcjiy6MUscecDpjrhRUpJJV4RBxk6Ke9JXzPeqpp7giL",
  "key33": "kytg373oo7Ac5v1R5HXXuB5khXNmWdBvRPxSuebGbfgVeUoiSfiipdgKzAL2S6wyqGsiNJu7DUFZ6wWEEc7SXzA",
  "key34": "3f7ZZFv3G1fgJQ3sTPsJjyqqvFxoDJnEY8BMwgC5vqYZHZve1gWceQHER8yD5AApFZSePegwQp6fPvBsgjSvQaRv",
  "key35": "Kg12ZYSc4dPd3Z73fToDG5b5Hi54v5bvEvQ6AR88g9dQDstCwPg5bsqfqi4qc46ELnRFh2Xt3E5PnB7umHuXonb",
  "key36": "65EPpK1NUVXKu4Z5j7egFP5NJFBiHq66vkaMkmKU58gjBa6e9ccQVs3xkWFnhHjwSqnJiD4C3UDJ13tGZ1uH5fkq",
  "key37": "29QZh8mNEKeJgXZVfBnEhfqdKcB6FUJFvwj2cAqV2nVMi915GKD33nuGBLHfGPyD8hyLC57Y6j4qDKnn2FXH8MYf",
  "key38": "ZxxYWo8iSpEWzVWPnDW7cnTqV9oVW8iFF9qvoLCNyePy8WS1dZ1mu22yzai9gvjdamMqh8M6y5s7aK3KoooYg2E",
  "key39": "3QcCjkkhdDLzasd6uTVQ8dN2hS1D6MfTqPW5BKNhZtNLLwGiDVeXkoRHXeLMqdbjog6zrbTosQxMVN8eqSvNM6Dz",
  "key40": "3pyKVsC7KE3aap3BRioPmpdmyFS64uWM3cXCu6frScWMv9t2bnuyPDvc23DPpvZttqQ8CUrF1XHZNR9JvkpxPFp3",
  "key41": "3jcyrLGm1TpRKhGTrdYQYwCBaTJDXcgWJpnbAYT8Rj4E2zyfuYCxTrMo55JQvY2poBrU1As3PXm5wXNDMjadFcgi",
  "key42": "5GH7on9JMH1qg6oDbA9S99YE9GuNKXDmVhWyqzad86HHpKyrpHcTHFhdnYrqHLFPos5HPyhgPE9fRrPhj6ALagnd",
  "key43": "42niqpEpHA7DqCtat9CTHaRqvkN4orBQGaRBZenam7ZtY6VPDQQYjjE6zJiDiV8iFZppLdkAv1BNgFQVtu2qQUSd",
  "key44": "46SLqqZq461YEL4XjiniY4znopYZZS2TG3Lz9smgJZc38GVuyXgJJr9VkDvFetMnJri8JpJF6EF2rs8YfhTUfjY",
  "key45": "49HzvwZfh3YhQXqZzwopU7BGCgrPoeCu4otSUEUTUTf4N4MLnYFtt94saFAvFgxQ4zc6XRJtCApHbATh6tEdbFM5",
  "key46": "3QLdnqdtusEn5M2tNAiMbfQQJvraCJQWgEnoz4FQc7xwQxjDZWbAfeXCLsHTbTA4eurcLEtHzZT9JycRDJoZTY61",
  "key47": "3z4hmmqSwsRsfzgEVyujXovf3kaEBntoqXeT7ky4pxnSh97xnpzaoJZB1MxsQEyBejn5nPqsaxR17DGgtxMTwp7T",
  "key48": "2rUf5vzLATRKop7NK9AmVG6uFSd6N9shoEdN9jFdi2zPRdoCjA27c7LXdTvuC6btHSXhr6MPezci3gHSYFXGiCQX",
  "key49": "5gZ6LwAccVoisKdZGoL3k7bidUwULVJTS2AA3rASoNFHtk7RyKpwFSPbiahS3juoPgvBmUjz4AGPKPi6BCp7nPZJ"
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
