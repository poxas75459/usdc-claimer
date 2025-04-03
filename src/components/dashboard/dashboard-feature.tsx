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
    "5ebegQ4ytx5RXRWizUoxX9L9LNimq1mU4772f9JqehYvLpZfhzSDaxTytNZu3Xozx4ghbc4Ni5httHDurp1PzjHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TmubJahyXfyhwPrFSfKDvMum8TUyKBLrBThuGiKRd2GiGnqR9LasfvXVmeU4JxSe6qFNuWv3WZsw56AMSvbCk8e",
  "key1": "2dPtPJMG8ii1eRxqzh32MLBfw5oBAw7Kazvmf19D7FGjc3GtPGff8LdbwERpyrbYFT4oBGNYMtXkmN8kNgFW1GVn",
  "key2": "fG6wszPNWYsFXdTDVwVJWTEqF83JJY6wakixDKhMwxuKtkaK7ChmhGTEaxgM8anirC77rNCkhetp8zP7PoAngrv",
  "key3": "oadxPc8S8udWmA3cYkaRu97irzSkpodS9BgWWDZ6zpcjSC2q2ncTo3idBTBA35mesvGS77mcEcS327Ut8w2wbCe",
  "key4": "31xr7KS7BCbEsNE6AMso7jRBWn5RYUBbjbdWUxDNZHHmrd5bGGpy4F7LPEQ276NfpwmYWNRaaKh9AFez7AaJRpUA",
  "key5": "4mWcfxeG16MpZx6EvKqhjmyJbnFZDqGSH7Bt5GaK3Jwr8XJbh9Z4QE7jozkkhTh5ZYa3KNu5GkbKdh78kWASy9ic",
  "key6": "4UfsrALjGwhTb66i3ahXx1rcxftfgcJV2ciiDfyMvNoVD2ev1YhCbsyPnSJpuKWnUb5L6bT7GvfTmbSMyUbR69xJ",
  "key7": "k2FHBDKvhPTJ3X8zNGRNRbLkCwZwAefiG1E3FXaR9vUVNaB8uvYKEusvkPDfZGXCbVWbgkfXLjzNoj9GH8hLh58",
  "key8": "3nPoTQxMKfnUXjNSFw1iLHLCE4jSor494t42v86zQVuCja2poEPHQGZ7cX2QMmNNUqb4qKoHaGjAqvDiyyKiDnxx",
  "key9": "4PRCw1kPB2zkawM7dabJSLpyWThdoj5ZmCvxNPrPyV9UvYra9tTytoa5NcJCxwt7vmcToxc5thwbDMdXHJofnkai",
  "key10": "4dMqetsc9ZMRVL3MGDgyGodxjMJ61CBnQhEzHFs6owsW5eg5QXGJBZgrRS4CGcm9DcWNcUbM4cjRgR6VA7VGpHNu",
  "key11": "LDpaCn97m1TrFMwkZvX1z6CbGdSMKDgMrhUALnAZBVGvBzQw5zd9VS7zYMzx5Psu6joUfaz7ZUaPJ9ubEnMR83h",
  "key12": "2MFE8fTjQqm8is5oHco3yk5G6BXR2rqhdZUu5chRhmshhsnruxn6uVzugqpKEENSZK9FuXupXVJjyB1iptZxyjg9",
  "key13": "7xbHR6jcsARcs7b6xHDXZprTfWmNN9vNNQFshNNaJqi4feGEehiakdtgVhBd8GAhqp5s3JhoRF78uVxm8Txw4q9",
  "key14": "5k6v68ktcPR9B4fiX45QuqzJM3GQ5XkwdFPT9eaPgutWRuxQCjDLbS367Hx3uQmDihRzo7bU4pgLu61aWic9AewN",
  "key15": "qCVPJ3MPVkyAxR7CQAWsQEhS1e2gC8dqiyXF9acXcUmvaPUaGGp1zYCT97QiTDKFW26bMW4GdfoD7hBczRytf1E",
  "key16": "4VfhRhWg32RxnJPzuhKmDjR4jJMvmPdwHjNbfPTH3XB3MXvTzCu3pFc1ZgTVazydLNVthQ7bNS3kHY1ewEKTwUky",
  "key17": "36DCM6AJebbBovmJaJ8EGMoxvsUb9vL9G4eHYgBrbVMxkgzeTrD7LBzyVWq8H7oauVbr1LN4ak1XNUfWC6rwBdwx",
  "key18": "2CHWJ4vb4APgDkwem7S5ksr4qeUnKEoHgJFVPfZbwnRbFf9JxzpvsqafNLkJBd4cAojUAaHaxcGTjKgLY8YkEw5a",
  "key19": "5oTgwgYU3jG8oj1G3RFQsScYyQiNcbxugsaPnBVYNJG4kdXds9C2rLBQUYPJVzCqKxUtajCgP185SFukBm3URZM8",
  "key20": "66J4Q6qYSEYYW815819BdpXikVK2idcEUUxB3W6WcTLQN6ph38ivpZXwD1jtUsRVvEUN1f4Rzccvc8kC3QHc633u",
  "key21": "4ZJvyNNXJQZ49HgaNuJnCd2qt3qGpKruEHZoPR8SVnueEjBoGcXKfzaFdyxCAQ572GxihCJtn5BEamTtD9Kecv6g",
  "key22": "4BZ1wKh4CSPH2nqdR9cApyba8XPVMo7Piv6CFt295aDiQQR1uBAMWZtgWFyb4vgpFwx2vaPkAA6zvXN8LTphtRdY",
  "key23": "4CFVqfDpwmQLYTmzE9XGiVxcsir1Qbxoq4PAzzjrfTz13wh3Fi3razrNEzKDJvPfiyvvsM2K4zzgK4FbjfTcLFkT",
  "key24": "4vwa8aS6K8AHhX5BMbKDVxwbcXYisekdB2zA6YcjDPYaDYQA6mRYKcF2r5Xa7oWSPsWRT2VcRMiDa9Ywkn3kQ8vF",
  "key25": "4vMeippotMBYFjQVpNLVJWqMMpjqjgpza9huYd746XzKK1MDW6wWRUHNJ15TUdraZMCm6QnV9SuXCo7daF6Krdjd",
  "key26": "4b6Xm4wMamvJZbseuTXrrkwro3RUVDJrx76KANPJhTxvQJvhukV4c87gB3yhmTnqmppzqhGTnxTbUi5MkqKuxMfd",
  "key27": "5YoqQv6Aydh15Beo9DvREEPfMEBbCko4EcG186qvZs8H3QMAxYAYt5pDXBaRU9pQM25EXDGJUQCoef1cuKBR77Di",
  "key28": "N92vNECL6uiNWf3J3m4H2znRo8n8toNez7wYPocfoSu2zXPeMMUSM4Zwo3r8CXMuTrfHVzF27sFmpz32uaCGKZP",
  "key29": "5nQHkhxTLYurVPxzYKaFrTtSTQDht4eRmJth2ipzymkbK9yNEkfLnyqcuxMuRFY5ty3Wv3wkPTc4WSfi86XA65Ye",
  "key30": "34xmgM6vmWguU89pkKKmEvDdWpzKa68XnrqWuj1WfDAbWgpzmM3cQREQJuoDam8Ay9p9z7QYVwSYXGXBbSWXFwYG",
  "key31": "3JEBmqoUSqUS69a6rcHwSCEF3T6sq96iafuLjKGdACYrQxcFJmbQ191zTRhzZgiK5WMCGhhSFWJfzH2w6MP8UMFA",
  "key32": "35E2zE8AQPAKYxmYvdCGrwyLNx5RbYmsYyuD7wqYg2EGuUGJA1W8k5BBtxQYXp9e211pznqEv7NDsGWEDU1MeqHq",
  "key33": "3yJXjcBZ7u2QsiZdMdDJk3DYNawhSRaY7ufUYx3n986N2YR8pDnfamTgJRkrirWo6PT5PpPnwwvX1WxrZNr6HQkT",
  "key34": "enznBrjio9aaJKjM8RvCBRwp1s83G2TpnAPoQnwLfTEPCDirRMQukCzMshdMBk1CRyHkos6x9tJQpvDphSQSrbg",
  "key35": "2Mbx6WPBgaKPmnF9EW2uZjL9ZH1PakBcVHDJB1F8KR6ne3bGhtAjY5m5VZ4imJDtAi5gpQgQ3VQgxoiheH1qFsLr",
  "key36": "5B1KhsoA8bYbv18g9vfLMomMCdBeCWDeXwjMSy3bxdKag14gM5Mt6Ynd4CJgCrJN45LxMUhTfoDs9o89MbXcfoQX",
  "key37": "YcT6FFKdC7nM8YjThqV7GJ6xH3qeKr3YaZJ8JKchXzDrbn3T4tKqiKkYxYn6Ko6cJ5uRMLhwKTrTTgAa6soGQjw",
  "key38": "LZ8KQczdscvYBKt1iDskoG8KMpQb5m3rRV6Ni19hJkSi1jRsszkqkBXrCkCzbHPBL9YtoCRyDcHSeuBktybhzTr",
  "key39": "9xXn713LvuAgvExoRTx8SdaS8n659tkPgC91ixah3a6jzzEktK25WnU4TwYkLjSHHZTMed3spobswR1Ehwrmf6J",
  "key40": "3QPyCHX4tcQAd9tyHD33MLR6yrXXFMTF7ariA2J21kYiWPH4htY7Q3mSrhWrYF1UmaMCyQuWdpcBfqZzJm1nWBoG",
  "key41": "2H4md3LGkZSB28qkaNVpbeePyg57UgwfDcmdiwkZAG8wNiLfTjuNYzHLQ7fEsSaqWMrwsGdyrsW6xwErnauu9gB1",
  "key42": "4n1p8WmPe1UJNuGzARv4K9mUZuNEF2MfoDuof2KLpb6Ncht2w7Mp9pEtgtSkAR7nnWe1SLDnRxsPun3T6QA754nV",
  "key43": "2ujvTE6obRAWqeTseFyzwp4nwAiR6hA3HKft7wq2zc5k6S84gWsPhwJHqrzHE4M2xxEFzzwvje4Qss8E5JU3T3bx",
  "key44": "2JFyYHAUEgU3LKohyiNVvt2XBCDq52WoJuwahaKCpUnvtZXpu8ttB4gb9hWSuUd58woPtPBtkfpwcZi9Zojm5hVC",
  "key45": "4PDvgXXA4JLZkuU6wCAmnqN57B13jYePfpehZ953Gxp4rcXfgBh8r2pgJEePiYJHVdn4ZxbJzJbmkAtvAVHBZHJ8",
  "key46": "35LzW2SW22eX8SSMC21ssKpTKDkupjsjfdCYzXv5HMZwjaxErtLACYnkrwEkBpMGgaruzv2A4MYxRa337yeC1bPi"
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
