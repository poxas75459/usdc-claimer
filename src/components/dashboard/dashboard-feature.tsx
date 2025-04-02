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
    "5xn2sN84RJykRm7QNtdpkAiPPzcdMXEeWeWsMLdtVsccyLjFtc5XTuRHETySJU3xxKoPjkPPFbYuUSW9yEQhC75n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gi42XFXDHiYGrMsPGUHGZpHZmnVPbtKxraeu9VKGP7qrhRFUTd82HneQqXsFZ4DHnPovLTQYQVavXvEoZedWZgJ",
  "key1": "5AEPrKTexjPtzegCidZpdHRWkNU9r6jR2WpfdqfmzK45AS2kdFoGBhjYcPoWSeGJgoetQ6CZcKDc3kheL4n5yWBW",
  "key2": "5qGX997sZLmUs6QH4wsroD4RTnmZmZM3nrkzJbp5bamQ2j1i269eh7ZaNhLo5rLSm65c9ma1ijnmyuVa1i617Xue",
  "key3": "3Zf1k9Wr7XLKbhmTbuuGHeCrmJ3awP3LN7q9yoeLCPr51FJcLwahpcfwzSzG8vUzcEenqaYT5qLFYcxRNJXgNorM",
  "key4": "5D3kEbBiXD8U67mXtBLEJALb1kDM9PxsQLbxCTwWprgfB1W11VXnxUYtdXY95wQnxAubFyxxm3iAcG5YiDNL7ELH",
  "key5": "4jYJ5bz3RwxzQarYQUx2uJvNmsnjgrVeTLeZiNhfv5fQa16RBy1R4KUv6jaFyQyUhMe54UyY2q3a2RBJbgb4NKrD",
  "key6": "4LovcKjZfbKD8dUxXFVxVPKawL2GEWGkCKGdReiwkuMdQ38jEEmSpmfqKsB4D6SuCpTsvKnaUBkVkDvD87c3pyde",
  "key7": "PnqW1o8zFEUMN78XKTaFvVqonReLX2AuZE3SXTBzPADphACNSHWj5JdbXHAGkrrFuccUpGBTLtxD8Uw3aRQsu5p",
  "key8": "4bvGwofJM34fJ5v3JwtUgU8THrhRvMLgdNE6xmiF55Nvh6PfNevczeeUfm9H8qzEpiqJDb37pgNYui1tPCL1QtjB",
  "key9": "5WH5bFehctdkvYfsjWya2H4NsWRYdgJyLHRdDGrbzH2yEXYSUkRatRscdx8CPz1o51H1guTkgsqLG5qMSbvGbZnc",
  "key10": "4heMs9mf2a6yBRP6p9XkdbWdwZYPpba68R5V7g6RoJU3R8H27aGQoLF22Y1PkswtA67gY82YwUmUayHajbdSLyJR",
  "key11": "24qBvz2BZmnrn74BNgNbtWFJoaaUnY2rsgQeFgxABr486S5waWpNwjWLHs3QBN9rwd2HjaKm2rLw8xenJEX1NC1w",
  "key12": "5sr49ptRcwSdNMBK8n8zmvGyi3z3jJ1NxRYK9ouVHEFUR2KmiuFv8RBzZJLBVibMmJYMTA748K83zNF61mW53rph",
  "key13": "5XmXe5o8UhJEUwWpQv7MxDpUxvAgE2pi75Q4LhVeRwretBxZN2doBzSMowy9aadEmDv3sByvpCaL72E3z2hYPZHj",
  "key14": "25QfR2479tVoZGpLU7na1MRqfDMqB6jnSQeUXhwa7o1Utb79Wypw28j3s4niVLnS3GaJbthjzbyfVowVdrUYND4K",
  "key15": "5HAjrswjNSNi7ZGzboLWjJNSuuTx12wNbZFgZgnrghaA24zuGPsAbZC7meMuUPXJdpotFuuVaYapM2v3BSWCHy9b",
  "key16": "2yPSxTbXJDJRcmGPvoURK9VSfqp8V1bo935zsXWMV6ue5bSWCDEefZkzYKjEimYHxp71XNAthk7ucvGjBJs8ZMja",
  "key17": "nqTxqqfajdukvE3Rokd5LJRpNtJp4R9uKw9ekHZEVDhRSDvMB1bGwLNphXtWFqVAgauMtdMSyHMrWHQuZ4jrNn7",
  "key18": "31sBzRiJSSLmJGRDFCTX72k9dyAjDFm1Niw9gt3ZTSR4McvpZmuTPyuQDUpPN1Mw2fdQU8YtjiNsWdf3M8K9ysf3",
  "key19": "365a2yXjr8nx2xfxf5FFDwQ6eGEuQKt6F6rRjcrU6hj6KhduqvkU3EoSSYWEmpMLaQWcLjqrbo2UDReobUU8CyKJ",
  "key20": "2B1fhC2Pdb7yYtFbrtWHypWPijRrH3iPYR5iqJPzakR1Nnej6FqpfAh9TMb2ZwC13rKyEv3BKSaqhUyHLKurxf59",
  "key21": "GWPG9njpbgmxEZtJt8ZKSUp7Vz2xBhgo1EEzs6wKfnGFhaZRdXdVPZNd2JTnZ9jygBVZKhEGm14X66jmVu2YNwT",
  "key22": "4LHbgLK5QwfC2AkVBwtmnpmt8xyaQnrMEw6UqRawSgMphaCkiWp7oAiZgnfrHETjnqrGPELmcUEKCMJy6Hk5E3th",
  "key23": "4sSdxDzY8b6bYhxtQjL2Pyt36BRZA959sJBf9onFviQM4Yjp9FjUXXAYh8uKoiGMtEda7aeHKCg7EmxEm3kYrKGT",
  "key24": "5abcRRorUmA1pmChyGheit5UNzvfYBuNbtE7WFhqfBC6VQXpXoqSsaMoz51y8qRcJiNRNSjRimgzyNWT2CxNGCMA",
  "key25": "5fZiVvmqAeuvEYiUNQ6qp2LZ5CEQV4DSC6EfXhDpzRbWhtg65g4b7WmTNoL2CY2n5ymgmneT5gMqnShV43KwWTJj",
  "key26": "5QGxzrAwwWCs1eeBj6WiwM7kuKNUZhd1Zsip2emQKGmgByroVUfSAPBAStiqjhDLUMVeyLQKpuF6fYapbDQKjyrw",
  "key27": "4am8GLnyF2suDRB1jccTtD7pTP8LJun1CJf3LLL2Rq6826HRWbUHZ7krXBXQ4PcdaA7pqSH2j4mTffjHrC1my9ng",
  "key28": "ev8u51DYuLNeUwzB1rtDUBoLvUAcYi4sbFyjkRS4WzC38N6gjdWY2QBDSQY1fRsksxibCXafWFxcurxKr7terqX",
  "key29": "fjSCwYjzbMVG9eJEHRWsAUkkNg9bJdcNqsTZUWDwUTp1cTEyv5r8pB8iS58rFtbp5dG1jsgqvuhgcJnyZZS9So4",
  "key30": "33pybKJCwBFGayxJRrsaawhe5RTKezrNmUT7bFVnXStAZJCvswNU7YbiytjpNNRSVLGyANGMDAG9ZVgCxu4u9Fhg",
  "key31": "45QvSMut2jwfbijJKEcVWcjp9HZwAKtQeGXzBUeDs8isvAp1P69fA4jszsdTdPnmgmFcNQe6r1GGBwcYaztGEfns",
  "key32": "4hJ7NoxTAoU6sHZU7aDY2h1mN6iNVBueShvryxctZr5LbKy83J3CuuiiFmy7Uob2Gw6gRLSFUAAVDsC5UruftpSi",
  "key33": "32dyjbHnkwmzWPnF5fEw9UCw8YJedTmjr1BHncWec2CWRY9CtoaFJtugN1ro3hYk27MBSHPgWL45YXKPAR4FbLnV",
  "key34": "228N7yCoQYA6mxbzXNiSxtKYEq2QDNFYAm2LXU2cQBHE2AM6HiMGkFRmoybsqcd99NGwKonHAQFZMdKdjGsanxSE",
  "key35": "4eDT4mLGnor8ZB8YVKNhBiRHnQ5fCUF5HwHJjGBWPDXk5cMq1Vdj6xxdrXthjP6Evb5b61PXuFrmgmPWAevFfhE9",
  "key36": "29fcjmpYx6QEVBbpPPQEQ7YqoVBvRZdPgHokVGiDZ8mDf1acFc8o43mRfkBUhuCrj7bXHER6i5CCk9dLweXd5tN6",
  "key37": "3G38k9QoaKnAHyYEBCBHrjkvYo5es9T1mqdTz4iBTEydqtkbCKAZWNBDG8sA5CywM43Xt6FjJhTKGJGs65bPJEc3",
  "key38": "23PWA24v4XDZ1bfPTdBEjNPCaRtgxyyx4KMYw1DJqjYeLBjnSaybjkcLvSax96UqwrCQb7H2HmDUUBsEedW4ny46",
  "key39": "47oQdJ6jLP8oJnfWCdwxV5hUzgxjynJ4GrVwM7LHLL6x1VBF9JPULo6EHEDumP3ZrXYfFpgc8r6bxwJ52JiXtXeZ",
  "key40": "2pS6SWabm6WhNppCzKUKi92PGUd3YmdfqZaRfd47jADS3UY7Rapjij3NqGsJge7x8xdxQ2W6dxo8W3q9BsUW5ptp",
  "key41": "5uGX16pR5edZznixutayfGppTrdZY4J6okJJgmSesTot19ALsJPxWEweD5c6gba7YTyy47MNz2FE9rGzERR46aPp",
  "key42": "2TEui7XLkqvrVfWSbuqD2dCVQ68cjuM4pbx43TxYVwmXeANSRwU9KQFFZhk1JQaezWQkVmnXygW4xN9i22ybwNAA",
  "key43": "2SeUDZQVca9ipcVdyekwErHEPqj2GG35qgS4Vh1oRxQrDcuWHDUJTYua8M53BMS1SqgpVeE6JY3ECj33ioK7n5gD",
  "key44": "DkRvhLvdiEw23VevAKpZM3yE6bEZkvZ7giZE1rgoCTwYBCwCqUVH7NQTYG2Axeja1e66fwwCR9aznpkFjLzzwsE"
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
