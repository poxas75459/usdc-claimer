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
    "23XAqc5NdNhLcMBwANJKN2gubKEgeoKHJbFkeXaphhhLHXehe5yxJApXYKTwnFwtCuqZ8zzUGJmvGWLUYhupBJfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QpMysLyiDwqu7pyEUHdMrnK39G36j9vNgJRUqwPthU6qrjJzpmxmnECSzd6XqgBEGRAzfDqCqZ89H8zCn9VTdG6",
  "key1": "2Uku32vVwquiLDjhtqbCc3xgmtkD62HRdT5VpoLFWR3KSkXp75gyVCX7CWjihuUpjSs3hDDqzzN7raHYofEoTENU",
  "key2": "oux4w2ihXrqG16UFrdbtHSKoY5BcSGBJUQam3bpQWdnkZhZqGwVH74gwmyHfcn73Xneb6woGRAMiiYMWeRFsFBY",
  "key3": "ZxwaqbWpQV8TejuDmiLdi94Wwk64B37wHiLsYiqXrYr4auMbEzryZw1m6wEBrUQxe9ybCSNukAfcR1kEyQ7mQYh",
  "key4": "jeHfVbaYYoMinG72z2yuxEUPbJJKXhZ7uJdB9rSu7mBELqza68XWj749nDwkG9V2qpGrFssXEqcbS1GYayFrodG",
  "key5": "6AKmVDUatVupZ9tvKyZPR3JobpDDCh3VTUykwyvzjZRxj9QdTzn37CVFBaSUmg46XobEgaweaNJRR95cnNjYpev",
  "key6": "5iecUt579YHzkwzdLH3kYgZLT1Z7tgsr35spnoEcB8zFsbmgsQMTGY2Wm4RbUrntRYScjpTZNLHzKAaS3jUouirj",
  "key7": "2fmW8Z1NRCWY3ZGFNKHZjV5v7LSHir4XHaG9FA2NdKmFBu4xoieGmS2UtYjq4DAu4Vh9FZtSB1ELSrx8kgtdvsSZ",
  "key8": "67WAd113twKXMRpW7TGDeq2YC4YYMGL88pnvvmKKebXBeMJEZ3taf6UuBukAdHhUAShUM4rsnZWBGpsGexDq1hg6",
  "key9": "5MvB7B8KuupkSnpQrkVXbmwPxcgiQjUBtJncApBziQcXETDsCvDzU8hTsowi9mKF5HFYVS6XJaesRPKScgs4k2Ym",
  "key10": "2pEayoGZujcKNycfS1AFjtZP54C5Sngw9bJTPZqeNbvEiwbPmS2LgMjjEgi8qnEUZVWxNCy4a5oYKAhqZNqccQmA",
  "key11": "54oXw9cczBZKrsrfJzoGPXvPxkott4hCQ6a8KNEM7ra2sR8t1tmJx3fu7M4292k89hBpeCUePzkZVcsLqe3vUJwM",
  "key12": "5YkpQcNpLZXd9875KeUQkQqsLcsc1vVRWqMg5zsE1wJ1vpSFi6U789ncoDJjEMJpG4mcVbrCnAbgcBShjxvwSQqp",
  "key13": "3aiHkTreCs8DEvXQbknV7QewGaWHbWWvACvEWViwWddwBZR7VZNjN4oeA2feat5kw8UqyUgC2KhGZ7fJX7oUob3k",
  "key14": "2mQGhaAzku6KdH2kTgQCXdKpm8x7mzoMMsABPduqeWBdLsWCTojMtCzecbq5RYhrtv1yTrN2kanq1xDvRPmnKdqx",
  "key15": "39M6p73arLoHp14WeXwuV8WWFXb5wmWDFdGyLvQNGrKSJ6Nf1nez7NKJHHR3RMQEgB2d6foQiAqdn8yALQzS1WPt",
  "key16": "5QQZgBCALwoJCf1GwyCL4gYxS52R3DAyNuR21xnZ8dpRCRAx1t1cNy3yHg4EDqNhkAgsZxvSKtbXD9G1K72tRYH7",
  "key17": "4W1XBMNjGpw774gxPSM2drrssSGHAEDSH7uEmwbSSrMtNps2UPnXQgo1Fmarq5bYW16vACaUnSacg8NhQc3rgDmz",
  "key18": "3ECbyYdEsN1HkbWa87bXBf9uAdRAmXc5ZmRC2g5EoZC3c3mvMYxu5Vr3nGbdAbukbLvByzktpYML5XbBuo5nqCtD",
  "key19": "JWUrFbhCgewiEiEGzeks9fTo1akS5DuiVF7nBaKwSXgx6NNR5Zet7fNHE1nfYZwHZmE6YTyjFPiZEZJEvAMvyVJ",
  "key20": "3XKXF1PL3yA8ihS6gkprjtHfBNiW1dM9ss2npjft3cfGm2gxENNA79bnMLQsP1sAzU1NhUyEcQPUnciPE8uUEziZ",
  "key21": "2YrtxRr6KpSBsUJLEQE5P4ibmG7bYikWqe9gqEGaM5XPcia2SyfTbqWNPomNdHuxyoHPbj6z6xn1N6iMzZ8ep7gW",
  "key22": "2fbheVKZ1ZWrLYTnM6vEpeKjeaff98VTBiyBSxUcX9zmqzPLQ2oZS67f2d5ovhxMyESXDXhtXosD62SR9dZRJac6",
  "key23": "oai26qhc1u5yoc2rNuiG5N7NvHWQGU7PTSDrN5LBHs8wGB2hUDChPuVyjyEvzhj1tUATjYZxy2KvBhhjPHzZ8Zb",
  "key24": "4J7DWEuwfShWwY6Aoov5Vh6AFc7pFLi4w9qCsakQCepggcjZBohUsAXanExBNLoxhyo2FCCGEJxaqdCkjFAa6pSC",
  "key25": "4yqxCb3Wxp3yb7uu3DyP9qeqnwQ7qxjezsWrkBSrVUn9YMFtCyNVRRfMRLHZjK7dhpVpoftjgWPwojFtBW4bTu8Y",
  "key26": "Mc3inxVH4BS1CMb836ainuJNE387cCnP6p8iFi41QStr2CB29bZ7NUnidUBFb3jiaj17gSYs235ffkiqk6pMKC9",
  "key27": "2JwgqVaz5FaTwbYznyYZ89TLefWHBy5ommr5fWcuvy4kqck6gvRp268EAqqRk12hmJQgTV8qskxmrkZJLP6PSf5S",
  "key28": "59ncCbR4kjgVRmLPDfdfpoyFQyEKb2EM2puyq2nv3KJMp9E2PxKUYC1nc5NUkinij9WxmzXynkqxkFbnLG88abtT",
  "key29": "4pgQbyt3vb8v2hFV7uCMFfJtcbtqyPNt25EbKHYeR1GCizngYbGRtYfnypVD9hXdtstetNmTC7mBTAwCTNuSeiYD",
  "key30": "52aJinGGxdX3QFkDzf276eJtUnJ8tsnxnbFzxoE5cxioAWXnhcCuD1J4xBz2L53rh3yQ7ZevibDGbXr9LPdBHtFK",
  "key31": "43g9YTj7kxKaNGvVBxpNFjC6NqNsdbGiXWqMsFF2KZaeDhv29XgSmaCL6T64HaVdF9zWvbVcSqaUsHBrcwL3USVi",
  "key32": "4UoaqzDGyLLj2cifojGvsyf87EUsDQcqhgCGm2Ny2w2xgvaHY5FNNkdHNEqmbfTdjbC81zrYqtJFSZH57ESDAasE",
  "key33": "4GC9SucwrqgiJZoJdRxR9kUGtYjVtpYf85rBi9rPEVMWnvQ35HN6izX6vZLr6DmkyGkNeVCXhtNG5r7fSKbNz2WH",
  "key34": "27ESzsbHkBqHibe8BSUb9KAcd9AkU57vdNgy8UMafbSSrCP9YGi4RUbMscCyeUUNMwfpbQh2jBZyB3CzQ8vHx593",
  "key35": "36P5ibqZtBSzZRfb9Pg6hGvmJeABLkhSv4BNx7rvDXQKocVWTuGHxFJQtrD6MYKXuK5C9LftvKZiXcrjTVzXFWxL",
  "key36": "5qzagrgREzvvsT5s87PxqWxEvxDDKLAUPe51dq3LWuvfv1Gr6f9M6gh2qpSE26j8i41rdBAFp1K2YmcR4qn53MgC",
  "key37": "5XJj1kczvukA6TxbYAFGq2UZRvgkzY5RtsUeJKpi6bTP7LMF8yeMQ26putnEJPRuXDxEu3kECgntESPaeusChGL7",
  "key38": "3rLJVLXrY561GqAhZtSoeRgSVnC2bDRHDQto5yK14ToyFj2d8UqCFxqw1BYtk4dq6tzKWXnP4tf7CCb2GwGzVknx",
  "key39": "2aJfCq7qA5QB7VGatMKRExw48ALSZ8sfhpme69oeX5TcW7xcvoAXnoopod5aCm73rCjZZAksFTYLe8StJMhGTReZ",
  "key40": "5VTn3nDYmBXhv2vx9ZfDjDfACva9Av7WjmBEHNii7S9gRsZ7YRZAdZnCrzGJtoKgnkVBEjiNYKBzgvAd6EXBBB5P",
  "key41": "47DAaKjvEBce4cbX6KCyMGNf8ZEcZ6UPGAukngQ7GQXeoD6HF8KH9uM5cg2Ug2kGNXERTtV4WB8pUCaPiGLAWC8q",
  "key42": "jFuxbfYqCMoDb4aSXobHUmwH4iPux13ioXZoSLxudXxrP3HQJAwDyC2WGTComBVbe4ikAbPyoEapXzsTGTVccYG",
  "key43": "uhRo9caUCXiArusRmwVqtqS6SRceKi7UUouSBvirQidDYDRjY71rWPq4rrZ4qy6VrCqNTWYbBHAjbCWjYxkTSfy",
  "key44": "4kDYjEbtB12vaiq1pHZnszfmzu7vMYwitmvCWE273BmfW8iDAFM4h6XTSGxxZMuj4NLWfbArr39XqYykGRn4w2sD",
  "key45": "5iaRDbb7Se81GkLRHnPUKBmzyXBknwdXkcCbTfbEQVEbJAzpZhpUf8RSvrs8fwLbH98zGxSGSjRQm7gLtEs5srPR",
  "key46": "4pLNDcLPAJg2Pi8xQzFE761efvWwg84RvRZU2TxFbpFNFoVeu1AG8HUSnMsUgJjj7D6VkxWNsxePLVccN7JDgGtf",
  "key47": "33i85chCfXYQS2sje3G2AwQCxL8m9TDTp1Z1DCo8sLqGLvWtAXNwihnegfVhu2g4kimhRYa6FJGyJ35kR42fXD3W",
  "key48": "3RsYmjesXAKk97CgPX1bFbCFPRd2gmroLpQssk9fQC73pDcdow5V6KNeiXuCruPEeVTfJxpe7CYsoGnXwar2t21C"
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
