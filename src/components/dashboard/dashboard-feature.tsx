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
    "2mcQsCEUBcdFycMSLpLAS15xoyNLHmGnmPmQ2Ldz9dYvhiT4vdjNgVMDXvEbttxwj9DKWGKPsrULwgAXENThHegz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WTS7uToj36a4xBnd7VVAEcVy6KFPrsDcfZH3F4viHimCa4eukRvrV2fDD7F17Qf2wTDL4J9Ba2TvX4Q1iArdrR1",
  "key1": "5YYTaLrhUG9ZEb82B5eb6iHQScwv6Js5LdCnoqoMGEBVfiAxtQ8oW7GqRZobEx4hicQ7z5H6RJfpMJQgZDMi3XMQ",
  "key2": "1QsDs5jwQxNYj6UsaxQ6o86SViEbWRVaiop9bckiY9cC7YJx394Nf98SnLM9MveChkmDQBwh98zrAhfXmW7rgMH",
  "key3": "43ZFUTnUT4CBnv4vmjvU8mG3eQ7oaGwtPgGPEHtEiLdKuwan6u1vCQQ34TnFho1AbhXrwxvBPbnLtz2zBte5pery",
  "key4": "QvDn38wfMgUSbxmPRdBtvkgR1ACgWLHkBgKjjqDg9Ekm5LC8Q8SmxQjYHrwgdVjFDwPXmG9qQMYwc8FXV5PSAXW",
  "key5": "LoZa5NkFzdYyoJqs95eCnfM4e52bCr75aE4LGPcBrdtY2vAToYML3UmcWvy42QZV8Uou8gUg6T5J9skxDtcpwnC",
  "key6": "3ctcEovAfrpPyVb2msiacqdpVnhXAUyemBT2V3yiW7uYZcBWurKJP1VSs2AKMDLRBrjYs2ssfzZiMCUereDLbXN3",
  "key7": "SoWoy4j1sCpkdWYUXJ29ynMjXDg6pfhYQDUxBiMKcqahTB8CZ4xLJiuGVjAz3WcoUJifNYemCS3w1dAhpnxXZu9",
  "key8": "DeGfhAHHUvx1LnwYLLhPFtEeWcbSuVhcpzBqqYB9451GTQRVzDhdMDE5SBny9TTne6RJKd7GnoQi3Gh1R3hYF27",
  "key9": "4wXP4yrExbwkWR8GG3eqcXXGJ4kZ1gy8D4TKjS2CywRiyfvJenxPtxWF9TBW1qYGgUb5bAwSWUBzwwM1KMxgMpGj",
  "key10": "tHKFQpgaK8fkyoTqToCsUE8S7wuuCL4FvQua1GS9tGLBXRAU8FwUb5JD4b76xzbx2jNoTyg6dV6ZWcGtbqNXrGz",
  "key11": "22z8cqKj8iDGGDKsTJYBfXYoRoRKSC7rgSyYxyapVSSXV9ayNC3vhabANUHquUcLjgHavVNkvfHykMYWvSSrVahp",
  "key12": "2yGkQD2Pin9rcXVWrnzWDSDkkCKZiwmEe7ksVtzLzKx1Nxkuu5Qdm5YuqnfF3Yd9KpjJJ1WDwJwjfZDCpqvRXGC9",
  "key13": "EUfiaa9Fziy9f8JUEX5M14YYEUDoLSRYXje3cdskeNq9XgcQfDQkoVj3yCBCTp3nZTeuqMGWHKeZneZz4Yv5z95",
  "key14": "5oTMAGPVwLucUAJBQgEzHe7qVC9UwaURyq1TExpw3sP2Nhos8PVYodaND7uvLLZiiRRj66uz9Q73FE8Qk1kUjku5",
  "key15": "9eWwVcu6po85DVYoujGyvQLdX85YEVaRZu54WZYASoy2GJYzdN2DaBnJ3MuTnMQb3uPWrZbnXmf83w6QtZQSZM3",
  "key16": "482v4V5YnJEYq13YySCnL1mtNzDA2wgXCqry3zaVUYfUwsRr9oCUYgtKMMicWLHeAe6LtkD3CPMgWkXLYc8d62LE",
  "key17": "2x9jAcH8P85QjpkFwhVPQSacxeaaozaf571spSYg9NeXx94UeekHFLaJcvVYoxzFY7VigUXwVqjPshDNgFybD3eG",
  "key18": "5L3vbmXBZcjCba5nGTQ5CTF3QtNkkUcGaYjEQSFgYMwKm5j2hUVfUMcDVD2MdSYPn4AjtJWbUb8xr6FPehWFnPKD",
  "key19": "57gMQFn2YtiHsDxLFwF2723FfpGUyN2bw3H6DoxjaHsuEz5cmTUxiBLUARW8PuqXuExT99Ddjya1pwGJ5C84E6ti",
  "key20": "3wwheQ2myomFc4KAiNQ2bgpoJk3TXcS5AdKuh9jheUCRL5RWcikTgEwjCuqgue11jQ2gmFt5AoFz3nhHKDquTvku",
  "key21": "2cxtCjbT31iR1aGkXsQT3EkpkYyNHPePe943cvKcUbuVZAhR5iw1MeZ1CCXnFmT1fzHh1amtHSorHySfNbqJHZVJ",
  "key22": "2FguGpu73AqQ29ST3mUdDV6XDeeFPykS1yeUA89yFMYbHZsCdQADF4PwA31DHwxLJNaFVUYaHCG7RSg3DMrvtUzy",
  "key23": "4jJ4DxaApKmLhQEFhrGPrGsCW62TTZnCwx2pTGnAfccgeeQqbbGkRR1wRBKMSaHPni2hivamMM1kD2GEAf2Y92Zt",
  "key24": "3cq3B3fFvCosANUkkp5fksfLNbkma12pC3nGxB8fKBAi1XdiwiAtgEovQ3Hhz3EtZdkT3ejQpJHmo8azFAHDvJKz",
  "key25": "2trJ9pAi2Xa9oJfctxeewRAmD556RU4c7LW2GzBwfZs3NibVnNcCja5Zmssxs6eneQ86yewcFSc9szvCnsFs7GM6",
  "key26": "5Cyrbc1xnHnaWHr7FMHonDXdzCjRtbGBZKmuNve5kadYcww2G8w8USFMiNgZ18ro3gwkekfAyceHXgtPQwDTgRR3",
  "key27": "uy3dmoFya2f2C9ur7nbYfq3NEePMMQbfyoVXRmkAnFDgeUjPL2gNUVurPuSwFjAZijpsum8DZpVLjFGB8MB2ViA",
  "key28": "FDDeE2qgHPQzJJx5ZzqzjCZKJJpDtbwDvgkB97aDxKXq3g8CD4UMEaFL6VFKurPppvoe3d91dj5jhyA5cy2YkUk",
  "key29": "2YaTvW2raRxeC532vUL1E7WQZE42AyFXPcdweR7WPN8yyKMfusJCLZgyJfzbdNxmrsCa7YPj982Hax4VbEjNfjpJ",
  "key30": "4vKsoMeNNtJGDu1Wyh8wcn57p5tSNnqwGXWqiixfdGWtHGugZnLjFfemsjcsFG9Rnse4VeQ2x2T2LeyPwt5VLAdu",
  "key31": "4yuJt2Lunv5W2SqXz1Cf6pmiw2DYpTr2yY7b7146TJH2qxnodtLD3dUxYo2ZN3BvyxaBvRjJz4KqWkSXF1XMLarE",
  "key32": "4eGjQ1NhhGVo9Jo4Xppz8mEAiYRLhQqr21vExahuTTkuhqeUuk82b6E3DFGBhqftNTRSvPrW7m7bbxy7NNXky5RC",
  "key33": "5m9JmPEDZnkh4E8RhioFMic9dsvvhS6fYvt9TRJBZLjHv33n7PPbVBKGA72PdHbknAoXwUyt5KAQnqxZHou82XCS",
  "key34": "2sJrrSZL4yEokPvgQmF45Q1EbYA5ngb52tfd9GywMA31wfMqYBLDUUnVgqpfDbFw8PtFqvefyrjJn1CbwvrptT2c",
  "key35": "5ASLLKpDmRzMLJApsfJcxAytHe8QVQX69d1bCLEUF1fqpCKRc5sQbNyfe8P1uU9iobwkvVQCVqSpqFjG2nXayYY9",
  "key36": "4CVXSPFK1wNvV6Vb9FoyTM4tXuiexwVefbMCsRRoE4X96TBsMWnfNaJEWpkKvTP6aUStXAQH6FNUXgLfRJ5CWpWU",
  "key37": "3zvzRNqnhy2sGdeA9oVDg3iH5XMBaPhbjUGt4dhRaBXZwYRwei2k6YgQRiQ9Rznh8nF613bJaufPzvpUBb897wvB",
  "key38": "5LC3vfyyWYt9YTAKnMQiXXW9teSkBFvHYanaCJzMHMNDB63uZJYyTccAmkBhDvBaAVPkib8eucMcqhev52cDbbXo",
  "key39": "3rACjrEcVK96SJyebqv4mpqT8YBnZy8pEuC4W2BvKnCMijWESrnZgAK4edvcpU7VP8iyqkmc1fvmKrSamPkra6VC",
  "key40": "4yYQ5GBZqUnKTv8zhCjVA6W1so7RshP3krgfs6MfwEMWyik8ZGZzj1BKuP3tjTdUJJUH5Ywpmby67FG7UL8zScWo",
  "key41": "2ozyPXmYTUPe3QpeYujX2dwpVQeEGCcKPpit7E6HqZgukSSWkg8HEpQCkf5xke5dWb1rUrLRmnGLLTmgw8tQtMND",
  "key42": "xXTcGhaqeC6NKPqpPEEdqb4EPVEdrNAXtYi4KoQtXgLc4YvJxqqSHAswm6Yai6JCujNa7Yaea5F4cP3Dn8ozKch"
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
