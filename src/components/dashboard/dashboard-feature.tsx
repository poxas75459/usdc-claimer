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
    "34Hwig8T7ja1bJpgLrLcgGgL4orPPaAw1QWVdv5VaZd6X6TCSBJ33jJ12ZSVqrVWLggC2aWmRGv4gwjjPi81iFw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eEN6cPoCsmmjXR1ZfGXCFc6WsVAFzJrEssfi9eov3vCmBcHtPSQWCcokYhLS9fMTj4ZUW9MsThnQRuGHm54eGQT",
  "key1": "25gWV2s7R3LKiqf67fKcuoQS7MwoPAdoRUpqQtb3kwXTWmMgAJzAtWHF8JaZPq4ZEmkex1gyA7iiurUS3ZVKMXG5",
  "key2": "4vvg1jnwVvuMzF6mgqVqG6wW9qHbF3owHvXVrUEbyeidqvgu8QNm6mQkuU4EXGaHyvrUnZMMSAbGFXUKtKtvA6Vu",
  "key3": "x6GPaAHA6LwzsYryf4a8WWyf1GXp5mfeJAFAWTgx73YP6Qnc3dw3QbN2n3mNPVmf7CSDq7Fd1un4ebhrnzEiuFY",
  "key4": "5v7Bvxoo5wSgRxRLxCBrtx8SWe4HnxKugf1gtomDs9awLySvxC72XRtvumExZCJvPLsK28LzV6HCyfoLuQ3sRJtY",
  "key5": "4QkoLFRd32MT2yYsWzxKWS3FXnxu3LzCka414PJGrB3wU8TLB7Mb8bhcE18UsCxBMkAJWDWQSwRJD6dszvUdzrm2",
  "key6": "3w7q6opX7rRYPZX8okHvrXkwraFStCEST8J56dvzhdtBws4g91haWsmvDTvLCvxTw31DANPQxVnQYF5L2wuL8Jnf",
  "key7": "2VF89f66zzjz3mGWPVwkpmWEzAi5fRShGQ9454y523pRLbASU8zCVxBCMct2QU6XFuUKm7SjUX69H2wSur7hrmLg",
  "key8": "61HDxEussr9AfAmVoCeXJwoRJ4SkFm2VYBBidhaD3p9nUkmjw53TY5d3EmoadhuvrjcYHRV3un8a5yBVmZqLykX3",
  "key9": "2YfSdYSk4Y9eYwHn3eFWFYeKccPgmHJgTUg6HJgeM8GW6rt891rndEmTii9jyEYaLuHjftEBQjiRMEYGKcKxcakJ",
  "key10": "4GZXEMMcxCtBe1fVb2Jb1a5rgabDQ219MgrQitgeCoNqTT5jpiGc9P1DGByVTBAGzSZafitpPZNsuvUYDGps4upP",
  "key11": "4wCvqhXDm7md3VdZkVjqEg6JQ7rSafCnCBMc7b4wFkNA47a35dVJyS5Yepe4jLgJykbXJSGKqnuFnVLVpfGEdxLS",
  "key12": "6ADLSAEc9XeMe6ULgNaw391bak9DSbeu1QVDMmQtRSRFrutKBFqH2U2Nu6ReqNsRzD4g57ssiibTmwHpzckuTx7",
  "key13": "5p76R4nKAS7ieFDdqqQrnS72LDMo8umSd28mwGKa7qSnJ3o5MLJLWpiWHwe86hif31mJt8CtETSNgsTvmsvbe7F1",
  "key14": "bNi2ueuE4zf4mG85EBSaQGmw8GyhYCLB1HM5oSwPZHP851usBUC1z8qbpLTG8gqgbyd1xBj6Jr8xgeLaLH5jQ1S",
  "key15": "5MvEynCPEQupxZfxzpvfi7bVJVUFfAJ7NtGiGjsDRHBPvp3tCAXRBzCU9KK9Dba6rzKnq1YfMuvLwiRKNBv3c5Lo",
  "key16": "36WbrrKkbA6ArXCrWMhrVVdnSaBXPBLBUGxQQTjxYbsr4pfBV27ZqUbgCLZdYn7iNh5UBs1SmE6cr69zxDsqWLWh",
  "key17": "2hiEp7pHcMcAuBh4frnMUf68pCv4RwZmUMq5EyRJntwinqcVJ9SvZyCs3C1kK2KvE8pAADV9w5HA9iFQ7qZZinzZ",
  "key18": "cSTzXV9HFaSm34BcGGX7VDtowBFVTaSSmYEZHE3SszBmanLckJz4ssKEX8YwqK7nfFnYX3FvGPrXXrWx4BEfas7",
  "key19": "5i4EyDRcegPxHDLnU3q9M75knnBvPyv9Ufu2646JN8c5Aw4tiS55kpfEX3wmqavBzeFu5sXfZerXBPRYBPGbchLP",
  "key20": "a8ZLGqaQnUNHkv1n5ufSYdc9e3dvbUwP278USDXkQxH6srPrkC1bsdJa4b47i6XBEMhLCyMuJv3ywUjXi6EhvGE",
  "key21": "ygGDkicu8YqrDuR7QYibMVwcCY6FCD5RLALLHpDHUW4HkV4V8WYQDj7mynjJFVpzb48EqysEDLx6QeZyBWr39hv",
  "key22": "5EFojMuJggL9UfiTJh8UcrFpSHNNcY3GViNorhkm6VNJX8Pq5jUAS6wUEUwVXXxzXnrDeo2v98v4hPEAAxfvHpZB",
  "key23": "2a9xBrACrvR71LMCyAk6TkWs8A6GGu3Lw539CSh5hX1DWCrZkfZDhZ8QFZNzZv66iJJjyaYNAY4YKRyqt2mzpw7Q",
  "key24": "4ibPcbTu3ubZez6SgEEbGiLnZdnQBAPYBUytz3mndoJBsfgEgHvpyiVe465KD3J8twHhutxKSFrxtLxjLZ9gTysy",
  "key25": "424JxRUzy2vNuMqmuzShnb61F35fehYGeVBcg35hqEd3V5iuKLBj3EH1fSBJozBZm9DFM3mJYSLVr7RQCMCpb3cg",
  "key26": "4np2qwFCvrVEoJcELdXwhhUHgBEQSkjvi8EPjTCrT5KcipD2vBxbqkkmMRyXNZmeRWQwV5XoLV8LPYx2YVP8Q18i",
  "key27": "4H85VphtjBSyMmoXH8tL8soKwD85bGS9Rzmo7jwwxzz4nmBxa78ZJLJufeSwnkvvn2ikaQ4BxZKB4vE2F5Bp4qrC",
  "key28": "cyR8QWmx9RLBUREnfZNbBrmmjxEWxwennN5jvnZpFEt1NJZCeDMxPzHWqCGqAcVLbprDxoc21ZX48UtfY6LdWYC",
  "key29": "2BurNHEyaSNpPo5DuKJxzG2nE3VuSmZcQ2WCUZB3mh4ZVzGh3kBmjK4cn5mbLFHiMxwmaLkSpDVRxqqawV7wMxAV",
  "key30": "3wtie3BYvnRCxxjgQNT529ALm1VbhoFbbXNJj7iJLsBER9TmtiQpBjV7UPWPN4qWwzyRzdMbf62L77oXaHHvZ7Gy",
  "key31": "VSpepvmqSJpVpCprRAEnRY6ECrMj17YoXsLJhN4MPkR6TQSZQ8DHD5HPyLEMfHcHWKUZ17XwZYf114oR93j1xxz",
  "key32": "4j5LYJpvV5YUyNt2bCfxhaTveqsRbG96xKdHLDBa1EEndwjwBQbNcV6RJ38J9dFSnq8mtRytNkGcdG4i8CTm6Uqs",
  "key33": "3Tp6gM6xwHCK7CqcePz8APgxnNZ9KL9TyRMw7xYxzyqKkrDh4qW1pCyc5tx6iWoWJgVvGC4MqWbvbji1fKeHZwRu",
  "key34": "2fohf8L6KMCDSxLDYkV84TfrwKYjeS75YM4ySGp9PCCWWQCJYpaWfwcMV9F2TnWY9XH5yrPdqQShk1U1xpDk2sPQ",
  "key35": "3w8gZyqjQJ4BiPZotPouPp6TfwGPyjHK3HTKDxexcw8Mt7t6zbJ9iTVjyS6YnNSBBfMaoB6qrX8trtcdpKcx6Erg",
  "key36": "4dJVJv23JF9onvXHWPWsMFQxxhAHH3kzu6jZJ3uzsXeu37V3Lha7F2LiU4wXZ7Gb6dyL3uJBainQj9M3ZriYcsoG",
  "key37": "2aM7WiKwYZzGGkxoT2AXFafX7KEMdXYsSNUy2aSBs7nixyixoDB5UKJQW9CTkJ2qQsWojNe44UYNr52mhwNBqHPe",
  "key38": "38SK5tHjHTbs31B2RZnd1hkn3XJmx517Had6cgzTsJt97ractDspeEtixvnu9MZ2R74bC53tuCEVeS2kwDdPFM5Z",
  "key39": "3XErWJkpwdypCGXK2PaYV5umq2rmBgqgF4biQdEYb5KVjy2MAGQjqZGNbtQZmyb5kwUnBpmHZm1VE98fkRo5on1",
  "key40": "4qEQcK6P87CVi3Jm4ycfrYzwBZNBkwVuZVTfiVkpqH4hoAzGSptgPJwLQuisWL7eCiYHD7ARGf1xFMoq7G3PPr8L",
  "key41": "9NHNR6UVKFrQ4DSodHvQfeR1Nu9N91y5GKZwwuDj5W3HtemEFs1gwb4y8qDuyr4zL1aFHkB8Vj56wHVTuxgstjP",
  "key42": "UPJsTCEpRJKH1DvgxJNxNs7MKCPNK8ca4LsGbutGFuKwKuSGvJZA8aLe1EkSA4pTKvbfThqAMmqssfKp6MuqDnp"
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
