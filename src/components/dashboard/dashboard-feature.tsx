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
    "2UHonNWB2HZoCHD3EUGkAPTkfZp5rUJL2UEXJkK5BtRWbDFkvoL4sEzj14wUgavXVjV1PJnAHsnnWRs1T5vZL2iE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FML4JDtQNgsUKRMagiXmgNNsRdfto6yystPVFZcXzFWVpR1QKKXTBGhPaBuhJrDa78w79NM94zgP898TQ2dnetn",
  "key1": "3RZmjk7PMJ2DvmKTRFsEVHPfNPLfq33682A7ed4xdEC31Zucvf1hbsog7d1t55rAD6YU5PK75Z8sF7SRFJVp7vC1",
  "key2": "CF4Erx9HCSLkaLpRjuZuNhd3czF5zyRkuTaewbA71LJnMwGhjYixGXzovTFL7cQ4nVDGwNz4sjS6eAKh521SbvX",
  "key3": "2hqnGwtnfJKVCTC6hxUAgmhbDZj2HuqgnT7Q6LfxAiV3b6nu9coT4MqKHJuAJVEDgaZe3LwWzZZWfw5rNUA8vTjj",
  "key4": "4b8e5KH4DFiy5ZvY998Uth1mdJmwXQNAbfjhofQRm6RHfP8AcUrPvuCXF25LvU8MctVPp58cmPajdu8AZC2ReKB1",
  "key5": "55cGsLWTmrvHKfDGnbkwJU1D8RPHykTtpiZF3AptJge1uStaZQBjCFEwdmZzdLunMHWBH3QakNT4g5GeRdqBgxeK",
  "key6": "G1wsALh4dL9VSs1tBUssk9tGiKs8SP1ABmXCAyLbr7isL14PttMCa62bWtJh7hfYEDvJMH3znZJLHgN2TUtewcC",
  "key7": "3aZMbqRZE3CWnSYemnqe2NurCpgMixVUfqS9CWSHzErqYjVTcjHgWrCcv5BbBW6z5rgBpckfRVwwke3AXTfAeFcc",
  "key8": "3nKvLLcy9BxDVQFTPnVBzPFc25ocgz2fHxY77TRz7YUTjQ8f6fCmkFB7Pd2L1ux4KcaB26dZ6ShVnZYqkmgXWz5m",
  "key9": "5AGTiekBa7ewkifHQ4vBxv7BJtv8r6U5mSasnija7e9JyqP89NfLfiZHdT7J5Adjv2KG1NW3p7e8jFLD6S62r1v",
  "key10": "fuPjN8WCz83q1ZZ2UUA3AMXXUz71z7xABeg15oF2afHhDKZDKqwTW7uoRFJXh9DWuX81W1y2P6rjJiAam59UwLw",
  "key11": "5puYHVr5Xnmi6Y9dHhvPZK95ebzA7qVi33RHVLpcKWun14ywid5EtE2SRVuK9oJrhrVQ3m9zbsVsncEriL5UgUjK",
  "key12": "fUFJmcgFm5WrzkMSdjWgChVhynNtg5Q3BVA2w67Z2BUSPwjeKri4yj3sw1F7MSRP2LkmBQhEMktwYw6DaxuZiRJ",
  "key13": "2TTKhoX9bu7AKrSvjBGM6bxkuyiAnQjpgSh29jynYdQA9DfGRSspt7LejR6u9zNH7CbeMfo7VjDDR1ei1UaVyyig",
  "key14": "4GwpRuPZSmimeY8G4HQhwEQoDJ8U8u1V1fdy5dEfhtnMz1N9y31Phq4i4BGzu8ZoDahpqFjcg7oHvQhABVoDCGYH",
  "key15": "3859JuPzHC9j2eBtS4eibCsUHP3W4FhTdNRPhTtdwJAspE572r2W6VhHUJymHGAWQZk4N7C83DK7XJQ7oAjYn29W",
  "key16": "2fXykrDDYFywo5kojNydHe2UZSys4o3Q1ixNRsRXkgjzNS3SUmQ3dyCG6V4MvZ4Lb7Goo86e3ieoa5wCDR1pGbLU",
  "key17": "3GyNCdXa3qMSN94g3ZtMWa3D8P5pAKn155MsaptmNF5EdTehuD8aB1sotmjraq2nDoN3ZpSt1kVLT6LoPvbptz9y",
  "key18": "3zDqAiAFf4FskkHdoGqXKekWtA7M65rooFSMoVCWsuNqtQfhayzkeYR4LtWFbKR3f9v7YL8DKoaLQwAp9mARst17",
  "key19": "2PJabXLcJS3iWpRExpqonsE848AKMvA4ePzX9LEyXM14JWrxUJUEA6xRWY7kmsFpJnv9RxsXKoknYJBDf3VRsyqY",
  "key20": "57HqHpQVXq777Z6CKrVST2Gpi6zSigjL7iFzU63kD1fTxgXMq9EPgfJ6xXbTPxNCj77SF7zCrBJEmWeBxksgy34Q",
  "key21": "2nHJGtFRdGUV4PVyVBetvMePeK9wYyTB95TvWZ5LYw1cdpHnHMT2JryACk3LN9YfSRFEKpqoepsykoN7qF3xN6Xf",
  "key22": "3csWTHaTB3hdc8VpV7TQk52H3kwh7M8pZhJeVu54sEQU5aPCcptvNZBmHGsSN5BG873FA5QVm7zXNAjn1YFHLSt8",
  "key23": "2QLPcScUB28JvSbnYDfk6V4XX64CQp7atFmANTwSxnYxPdZikQuHt1dQkZ61yzjHxPjbJmEg3LcbT1ZSTmk4QQTP",
  "key24": "5yZFgaaww2amN13i7YGZgEXhG6GoUZ5uw1k7pUdpo29mvj7vM7ykmBmzooqxKjZsLgSVdQCck6EjWwe5x4qayWq9",
  "key25": "4JTtNKm1DZritEpgeba2d7hVYFCDRDGyDWrx4HnegYfTCUXAwMT8AYn75BbMCN6AhNfYFNzd5TEUg8DNLQTpPNLv",
  "key26": "3SgF2kzLBSca2Nzc83XN2n4uEPVEWCApMc8JCKNP4PqZoGmp6MfDPR2AGCzQAir1DuBUHvFbMcfxCy3DjHggN6id",
  "key27": "d6a83qgNYfm2bhHuqzXNj8EkhAkeKQJjaVkNTxFA5Mo1ec9GnpGD8ii7D5yXnxPWULCMiQG1YSjHfGMqsVS9S7g",
  "key28": "3fGyuBmAs2sFfENJL5Aa4aN5upbHCtAT25SEkGEFov7TWpk3CL5ifpM2vQsGSJe1Voat3tsNhuqgojaYzxaa4N1a",
  "key29": "4W81WKbt8ovQheCX5VbnMAUWWKSwKFGQDPhK2HrUfcnDJF8HPmshRyMrY8UCDwESFEWj9MR7b3xVZekibbE3HC4d",
  "key30": "5kckUjbkCkqKCPhbMZkEtFQbeCusFHoBhGanNXQciByhfZnDf5DaPG5N6BufQPZR3nctDuE3CjtcW9HtskF3CZKQ",
  "key31": "5YbKG9BWzzQxFEmZdQcwYEZmfSBsHGdtmqi5LBsEN5i2bkfPgiX1UuaohvaXriatZwFSNNPBZvbfUbiGqHZN1qx6",
  "key32": "4GvCUoBnrWfuKq7GaJMMcyzLGDbhmheYLk3dxSW1rzT17QG8TDXJvcYDUnGEipFBvKpgyMBUxuzEELHWF9s8HzFZ",
  "key33": "3e68uzq8UUbfxRSVzBzXq51NnfjyJgtsQ8NcvKhrNe7Fj6X6NuUpmdqxPpYv7XMVqP4BDiEnFCGPoEmFCeqzjVVm",
  "key34": "512KKbJcBXPT9VeSnNBdTUMzVPeMLjpeLRYNPWcV8B6D6FcMJKuCPcAhmbUtBdAPFvbNc919KBDTU5Mw1RBLxUbu",
  "key35": "4TtXwCDnpuRet3CkBMrUQn5ynRQDETtMmfwpX4tiJwAV5dzGAFPgDwL9AVhMsT1jLiErqWzWot1Zq4Gzxq8NXopW",
  "key36": "J9SXibG2Shk6kGJ2Q6mP28UX5JycwoddiN6kbpLLv78dVE5En5HrrqqgaW9BrS8CxvGce3WRG18LHnEkudV3Jvn",
  "key37": "4regHRZ4GEe39fQ53tCTMs1tnv5KbxMrbVcGRnKLa5Fw6RaVeTdLC93fTRtMcoetkzHqt2FYYQKdA1VMReaUjyBH",
  "key38": "56Q5Nhv7nH8xiC16ga11JMzSdp3pTdL3iP6GSiZeHQiHo7qyyAZuGAxMbpxFUjVM7LkoeJvTW7USkazJvdvjHhNX",
  "key39": "52WezQ4zsnScT7aJJHErij3drGrtPuRaAzX9bamTGupQrYzjnLv7MaTbfYzYg7vpXM1YbarLYWQao5gvFVbLuAyL",
  "key40": "2nPg231uvz3Vn2QFicq3TaCHvufJPgCGwAjnrhgvjfivCsVv2uiyAysC8avkQDFq761ykX96pyyGG1s5Li6xiNb4",
  "key41": "DHUDmopXXQEHdpgiWVJXWLuF2cSKjmNH1gC9HNX8BFg6Ls9SgnnhjaZ4xnuTDxge6yewET9RELjdJmQ96wPHbry",
  "key42": "66tDaZgh32Gk3cmL4QCsf7YHEJ918QyLwCctgL1gKeaGvFKnLbvV3PJLwaqrqsDEGN6JVQzU6YNYPsNHoazxC7PK",
  "key43": "3UcCFj1jbzTqzUJ9CXKYzBYrB2QZder6oFnjsRBXmyPL4cgv1eVVNm3XqTBoH8CbUKk8P7d1jNmnX635Dwi76toz",
  "key44": "2Wcuo26Suo5bbS8euJ7hNskC1NfGyKrjuK5ovq9UafhBRcQeRQ77i4GMDRVKYRdppkKdnhGRMyXhBasFhjAZzzje",
  "key45": "4k9krLhPF8fXNdWsNiQ7xgr2ZaygBsNFvAME9hnQppw3K2r9ffD3AXPdcQWTC19d9EHyiwrPBff3EQJUYTcVibe5",
  "key46": "5REpTPShaVSX5quLd5gKBu3NKJBv9E5qujW7GktVoFFQbLNqiPWsqwA3dduDxPMbtgiFqpZF2MBJWTZZ2AH2jVsW",
  "key47": "4hwZ338jpqPZPPF2AuTb88rYbDkLRr45xRvNwcMkWqzoUfre1Pkdt9op9je47hoSx72qGVEXAqsQXMJ2WfhwtDxr",
  "key48": "2MMDipNcmsR6L1PefV2pPQb7uAaMTkk96EkhqbwAcEZ8rJ8Avcukntq113Dur77v4oKDAYZ2U8sKnr86CDX42sKG",
  "key49": "2h7tFwyQJ4m8u8Br4MNo3JesxLnh7tt27is8pCwU482vs8BTK2NE6Q5vKW8T2H3RV6J921xgJNJ8XtEj5j3eb5Gq"
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
