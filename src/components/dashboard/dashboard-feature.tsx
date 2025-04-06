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
    "2boRu6GZue6CUdRCWrpPioL9xSpDaDNAUm6NMUGZnPkKdomZzKSHGYjuGqvVWX1fJTnPPe9uWV1dc2HySefUzYU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SCT7NSskHJdp8ikXzA3y7NGfQLNB7hMDTfg6c91tcNe62CZuBSMHL3sY71FV9hdkXYbvKmdSGNRdaHTNfYSXcTX",
  "key1": "5beRXysSnJoAFYnUTcMFsLa4pf7oBHNX1x2vz7uKekEfAdeDMeohq9WJF1g4627d7FATx3Z25HNKX8fkeBSaUDpj",
  "key2": "5Vw1ofd65svJ6xT29x8ajzRUUVpVz9JUYW2ANANxn8HQRbKExnxGhDrFDgerabGKmNQyB2qTXAJ6YrwoUHHdqwxV",
  "key3": "5m4fqkUDyimB5joQjxve54ycxmWSr4zAbNtEYiQDvKHHLepYsMwwLXDUbMyrCaXLJKiJ5hSCPpXsQxiG6oY6UYhi",
  "key4": "3YQmNZ73hmZtJnGR1VAgZdRuNrN4BkLhNqdPpXi3jQPLGp2GYGtzpFgN1rJV8GweM3fRNDbqFyaiTZuZWwxi6hBM",
  "key5": "5ESkrPfgwmxeKEy3YqdzgRoKE9WorA3JcvVNmgkTcEGcBEjho65rSU5pGHjfVUSEevpwwTFYCdT8zDXv1Dpkx9N8",
  "key6": "3sg7z1dbDfS6QGvrypYU4ELXPdLLoTYKh5fnJwYLPxatBkpFA7Wt7eKENQP4yjqeMgeJjCPe3g5m1FWytDnFejyg",
  "key7": "2eL42gYwocGNfX9s791nRSJuJqVLXBx3g5jgMLzxVNvDTNgMKVCzxzPVNeiWHtzFsniGnS9Vms3NyxXpr7eS4Fha",
  "key8": "zDYaVSSi6Hn3qEXNwD7P37fv26fqaQRFHmuW5TQUEUjnwRcydfTSfNVR74kZ8Sa6y3khk87o2PPe6AzekTuYVon",
  "key9": "jtFDcQ9jQoFwZCEEJTS2T5DZYCv7FRJUg9HLDNWwBEKirQArqJqRWfeVaCA2TkmXr2hrb2ofvA4WynZ8zn3x5GP",
  "key10": "51T37cG7e8gAkPG8tciPZ3iqF2gA5sbvzYkgFFvK5jqRZmDyVo7dre4wVcZwHd3pNwmdPPPZuBCxtsAujdm91QAe",
  "key11": "31a6dP1ZoA5SQFoKSPzVFm2gDFsUaTWuvmc1XWv9tXEPgQVYzSt4MzTMQ7SDXouaN57oSmFpAGmCRM2ZYbV2UyGx",
  "key12": "RrFhC7XoPGFWb1KtNzJ1vnnspftoTP5fSj3am7nayVpWFvGZ3uV48vNnGRGrdNf7dPXi1sreYjj2EM4fszpwHhX",
  "key13": "5rHjTBK4YB3mta2G6eRz1tAvLnA4Bif5Qn56VBqmdDmazxNvfYvYMmvVdW9NeCnEeFaFuz4EodDtES6WAWmN9bSf",
  "key14": "34REBhVNMu2gVvuX48vfHDNPRDkvz2oGdkicCEQGkdA4QXViJu9PtPM7CPYeQX7Y3rF9ExGqJiz8mprU4s1xermc",
  "key15": "4EScUKd1W5ukNwET93MHhsRJhbZZmod9bV32ZFVXaBBFzaCTqcVfrDD1RX9hKBbeJ7STuriNANwCg63m7vJUamnt",
  "key16": "3RtemQ1NBUaVVExAdumhxfdiRVrtWi7z87Yh8saSbcY3SgWHojLaSr9i1s3NpuaEQCUuqXEiax2yBNTs7JvirPkc",
  "key17": "2aurEJXaYkrXMF9ENoN7QPbUHM1onTNgCupSrmd8woBJjGvK784m7FkLNTiooYDCTpvPuPm4xiBLmPPayoa8ZwtY",
  "key18": "3jDokspw1r5XSZSWCSQaDEkMWLqFyikVAFg88LewAuXy48rtKRrsR8D5Q6eg1632tE3gjrTtGVGt6CSXaMeWdWG5",
  "key19": "3YLTPwnsq6vhogdEfbFVDzvzcyXRvRPoZWDxEsYjJ5j5xHEQnFx5mzFz86UDwkmJnrNWiSsbuFpe21JTKrVSLS5x",
  "key20": "2aqorXf8jpsEeq34SFMgc4UgJTJiu5kRVyTmzt3uaym1ghCfTvFZaHCnAaMhZZxJP7NfiZpFPMzYhehA994AVKBc",
  "key21": "RVBNG2Q3xWkqMbQC3ShB2nC9BeKYQPPxc1EYyMpYsU8WJaDPN9ikGLzJRE6tkoT298jhmVutJtzGXpXs1Ye85Gy",
  "key22": "2ETzocHnTWkAQTkJLjh9jW2JcGmQNQnPPQmaKmicVQPLnhf4jjZNGUFXPnSHaEjSAk2f7Eu6gGRJP7Jgd6ifbu8R",
  "key23": "NkARfBtgZFddwbKZUP4pC1UfJjtdHwFuAkHurAc68nhHAwswAUawSqHyNRrqMSyMt1gAvnqhQmH7VF9UPFJxuYT",
  "key24": "3foU9GjtBtiKjetJJjWetjHk5K3S6FFQnRWWHkTS89cthN3hBcLPoC3ecp53o8m2cV4RnFt9q9WWny3tHUQHnd93",
  "key25": "5tzMyHUWaSrNyESSdyjZNVUnS5NgggcBJetBQrPgpt54tnijNTcW5jHfwL4roiAq9Xs4Zh8x6MgD4vQDw35ppSz3",
  "key26": "41MoWXDN58feqpkb1nHJYrSVCdd9qoJ8ttzqfKvLCJqt33uPQWkpMaoRnjWKxiMfRP2yihqbRJpgvDWMvVRUeSfd",
  "key27": "3PEnmFdug6NpVx7PYFui99Q8XvYuAxmBrGwmDC37mAn1BAcNwVtzS2GiqucTE9TRs262kByGcUewthRNfdecxia9",
  "key28": "4FaBjXLP8ZtdEyvKYiqLnqhmwNccWXs2oWMFE8cTwaeNKiQ3b9Bca8kaTQfH4THZ485bCgYeRmgmC8Q21istnyR",
  "key29": "2ceR5uaDwBhopokq1GS27ZteG5RASeiG4KuuKfUnPjP97JnMqYbgNaLMujS1J1uyxTnr5kRVdY2rg1vMvJ74Rh4V",
  "key30": "2ZGJnBjKL7BZBMvHVMVexbaaTkHeuAeypgzvziCmp9XQVqXNgtWhWhoyNGzRvkLhdqG2YVBRStZ4QMt7dBR1DuPu",
  "key31": "5iX8C15CkrPmE2VG3w9rhJekbEZC32qiQuhXvAxAD3CgAU32fkbidFjKsmErokCVik7BJemjJk3xgFDwaMiB55qw",
  "key32": "2qte8HRG7XX3uKxdMDzpiUsh5uKpbCVebUc8P3KSp2zso6HEcyihtSWRSQvKfgfgixofNa2bMZATzHQpU2sEaruQ",
  "key33": "2ST9rnCehqDtJ7Xa7XnvsrDh9BmGJKXkhZNFydRHX3nzviZFDRJEvZoRRs7CKuMRN1nidngjJQjh17gX1jc8jei3",
  "key34": "5niL96JZ7nM6BthzHa1WrYFyikE8kv9gRBqJhjUfkGbMG6VaDPoHb6VY85kXYn9Xfwx15YGQgnYg31ioKr5GwWZs",
  "key35": "3zGNBEDPwGm13WX3R6RWF8RVWENuBHhnq3DCFf1pi2iTrq2s2Q36UFVp1tn3GGf7ZTRrddKPTgm4fLNd5PpqaXDu",
  "key36": "5tZDXqkYAASBkp1ARV5pnGdFM9NApPrCWSXfVasfWQo4vdN65R8rVcadALpXu2qQYpo2qbjVcKgqUNiv9kRXj49h",
  "key37": "57oxSycT6KPrARFt5toMb26jguvYCvtd4HqzstAjB1Agixa4QRX64eNqJvCDTWajUVq6WsJLgLT9NCgxCU7Av8EZ"
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
