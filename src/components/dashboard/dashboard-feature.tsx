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
    "rcaRCi74XEeeUH6iCKPQQdyeAQKPAGDCGGXd48CeNkd2fferR2uc2WvoSQcw24YimYwZ5dF2pWtqXZGNdDX3RfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vSVhjvpGUVRMBXF4ZRJTZqqBAwziqRQo31KDQkKtkWQKbkVYbZ2mZC9nrfZJiXq42bWLDuFSm68KkYEaoDd39PH",
  "key1": "5zdzVJrQK3CTCEqovhi1nXzNbpiMWnawTscXzQ23ddyDnvgFwDAcw2SAoxbDpVdP6SBPqU4F8Jpz6t3Z24w8pEAF",
  "key2": "2XG2qHiTpsz3Ta7ZrQY1auQ3Ctz88KLWP2eqWt8CzTMRLZ6p8jZtvP6L8fEeniRo2jNgT6Cj58vLCRfoxDpyuU7e",
  "key3": "39kDo1wTTsKrTizYLh3p9mdWg6BEQ7YfWYAYqVT6w1SWDrARp3jSz4ExpQkrvXcpViH7N2hPhFeSEGYsJkLW9pNY",
  "key4": "CYVgbi5oRSobKv6UwWKfJFkeGbmBp23gCSzE8SvGhB4Pb7VHNTtFbqaUBE24rmDM2y35HKkXNdHynXzPUyMd4Cf",
  "key5": "dPz5EbQmwEt8JmaKtNarbJdxFmubCnMQfLG2PCkgnS4N6rErn199V7MLq1ctBPTmtnHnBRgwBJKHpS4DDzL7MZq",
  "key6": "2BvDmucxEx92n1iVxphXDhX1vPVYpMDUqMJdmhLzqK51FaKDzpj71pZEgAyJ7RqfyR7E6rywzdXq8Wi9Lf8ZBFJZ",
  "key7": "2zdfYK3MBGfq69rpF94uFMTR5iR2ivMthBCont6vJ8ADNxjBQMom8k4nEanM9j3WYYDUKrCdfusYzEd8o6c1mToC",
  "key8": "igJ4NKMezCZiY5kgpj9c1KVvtkJqsLRGd7cuQoHZsMkGBqkwVQiUQ25iYxCXQHTWPzGK2yjwkrDMzJUQSaTbKkr",
  "key9": "4LJTRJNPEgaPkcG5kgiNJuAF2p8NngwRzAPeLBoPczsnbWBBhWvnvNGr4nY5Z4777AyueG1QqHeKRc99f3QoYyce",
  "key10": "4ohPGbAKUUSTXHDL7RWsu6vNeJqKbFavq11mXhEXnFRDtFZpo6cbB1CT7X6WDqNHmPh3vKoJ1sJtZqf3G2WS95o2",
  "key11": "28XWVALRbE3JDSZJVj63r68WCETjawxSVUAkDxycWEn3SUhpYXG4z5QCopEPaVeVfFVViEraKRuN1zdDphB1r5t6",
  "key12": "4CM4T3HE6hef9xS1yLmoKotrgQvXNypFSPcZWwjdzYzr3mCm1jPnTxwe55WivrGCJEgojHAkuRirGGxLyTwi88tg",
  "key13": "3mdLaL5BdmYPuAka9i2CK8BHsvVXmRJL5r9PWL4XXgEydZw6c5LBcsnjWmbtqdiC74UVbTAa5bs2vTXknmCWZ9nt",
  "key14": "2qZkZTsjQ77Te4K2uUG5Zdnfywnpbec62FEKAtJrmn4g39fjuKk1Rvfuj2wP23mvZF29s9Dda1aGT9odBrUHN2Zs",
  "key15": "EhAy4YWv6y2Upm9qYjWz39KpfxYRMagoXxDGPiMZf5nP2eASD3LbRSiRZA52E1qByQ4C9s6NtR4ypbpEGHgKC83",
  "key16": "4ie7xGhXD7idXQ26kHxE6oHSjQK2dVyeJhSBX9DvQXnos1yEQXd8vRQ9PZNfeSaBTN4ptoo5qdQymoKv9TTJVuro",
  "key17": "5bTt4LcozWQKhoepwfVsGpA8GBz9NDHcW18BqPS4ZGpDFfJDbjr9Da9gV4Mw54TuXRm3HcB8VhAhDuR1U9esxvHz",
  "key18": "57pdSQr6S29UoSPR9PyoELAnqquhC43Tv5fur3y8n8AoLqKYgz3xJ43WRXzhDKEfnAwSug7xoMj7JxPpqi4vccJL",
  "key19": "4Fk2kk3LG7gCwchAtGSLVBXrCpm2H5eoTjnwDAvfQJKjRmZNhhADY5wFcgrvaeJ1G4mEP1hN4CEUNkemHa6d2J6k",
  "key20": "2orS3dHBuhgdSXY3AZcBUiFyRZLX7vCJFhYSPyQHVMNkEx7YbMn12m95vKRn535vjsUPvzuLGD38Dof3FNAcupqJ",
  "key21": "43eThgvxMiKjxhZcgkXbmzgo4p4ChF6MDAp2DKKsMZhM8MmsefnGCTZTx9tE77E1zAMghid9QG7BhaJzRpZbAPTw",
  "key22": "5JcTmXfZQiayShTqUMCQM9WTHzmjFf7VzgqDpjxUxVoagiqNES3FociDEcgw6Cb3KHHfCh6zNQqV5ddhF4noYft1",
  "key23": "3KwFtjzebf9NrqaSaSFsRTpuSCAZUzfDfSZDsyrW9nKfxvqiV37wSr18aQAHg4ZBiWK1ibqNMtXwQWt2XDgjHZLC",
  "key24": "3XMQeCQSH5Txhd9g3gf9WfpaJHPL3uwpkzFWf4dJkHkvzz7LPB8ktUS4bwpTogGh2eCw2mySAh3apQLdRYajLS5S",
  "key25": "4wLknNHDGCsV6LAyXJ43sWt4spjor5KD7kzLHrHqx6oyJtosAgnhv729x6Skhf6t5xtzvRAvjZD8rNa6gc3A6xJm",
  "key26": "5Ym7uAAyKBcVnTfJjFiSzdsQG7NZsBY48sGYzFuFvj7QiJoNHP9pLG659D3ZWCswHftVSA73rZQtuRvMFmdbCNN4",
  "key27": "3ijxdWzgnRRtT7JiRWnwBsCH4J4S3xqBoRL8VXzBo7sUeaA1pFriQWNLWUMSF73a1jfCDb2kij4LDgrhFf242BTd",
  "key28": "4nBfZRnUWvoUA5qzx5WgxSDeAGhr4zBrJmYard8ZoCZWoSZ2k7Lbx5t9rahCgcDSjyeRx2UEPvL1y63ZGNsZsmUf",
  "key29": "5P4ZsdhJzvaAMuWDrE891qzcovM6LvJWo9tUvdECmxdVUfqfbPh5fqBwM45ot2KSekWkBt92KMitb5eYq6A7JjF4",
  "key30": "5eWEFNkM9Phb4BXY7mUgUwXVFRCeudiXFKNybhMecELhKAgjgZP4QgjR9pjfhj4Bu8AhmM7c4GtABiUngfAqpSBV",
  "key31": "oDtkhURUzPgkj5cPAYwW68ocpCG88WN3uQkWEA9hSSStX3uscLqM3NZ32HfUaKRjjNGsus7KBBmJ9PXFExzcV76",
  "key32": "5n4fZ526Nw9TrsnzSjzrHyLQ9QfJWxGQfWpChxSr8xhXNN6WGChx4VFdufM6RJ6zpj3paazePF5YaHmGQouL6yHk",
  "key33": "HG4V7w8rQtpsR9aKRsatpGQ8KqWHjPwmXbvdvmJBkV7LU9EELKvn7MRBgXStCfGzJWYojwiiiWYAV8FJ14PNYZa",
  "key34": "3k5a7kS5EUKs6JNmK4XcjEcqqXtM1qKLQJiSx9rZ5qzM8SXNabEv5mDy6BDqhYp8LKvFniGLqzp3NPV1GB9My62Y",
  "key35": "5dwe8N2zvP24jnthKBLp1HsC34yNuvMRBVp2jSjMpoYKCn53hbctt3vjNky3F5FrmmagsvyWCHNRu4cPUMcosbQr",
  "key36": "2PoQ4ZHU5HZiKp5R8VFb3nyga5oxKmYHqeS87x4ANryoLTTs4LUNVXwfNnCrnP46z81HEyuXvZNyTCDGWVHKRZRX",
  "key37": "J1WoobZ1DnDE2PNqq469uL2z3noNgfqa9brUitpKkFPQjrKxiEup1fSpSShEjLdxAJLGqt1LrUfCnr338Pf5PAV",
  "key38": "5PfoMuoCGBTPgdEFkpb18dDQTtbGUGJfyoLsDrWWZdbsvY8VpLMAhpHknHorqYVN2gSvukKBQfEf176P68ReVznM",
  "key39": "eQwmsXFjzmRUsUyasWd2KMKtmyWi8XT5sfdNfyAQPdDQVa3yrguhxj5UeszSJfswojo2UfVgkR8cK5CgGe7ZEuR",
  "key40": "3GupfjFt9AFbhPpuxQHubULF3uGfm5Ex3yFodYJ2J9eJuCk2c9j3xqi2yqzkvJzmJCfdLvzft1LxZAacDLqPEkVH",
  "key41": "57Cig2fSCz6tmSacr19XtyWMnYR1JY96hMCSeRpHJh5WAehgcEFoQy8ntt61jPExSJvjesxe2Gtt1HENdLLQQ1re",
  "key42": "wv8E51d5jWgUu8JMxme74A98C5McwjDUXUok9tXpGjMcUjmKgrt2XNRrG7K8zaarhLvMoJBb67U8h5ceWUTNL31",
  "key43": "5uWT18hNsnwdc8Fa4XViZSSDafEq8BwT1XwaHUFrrwLSPft7th4FehGqaL2xCzDorty7zQXNG8KjCHXpEc2sgZV5",
  "key44": "3yHL8TfqGJAxR92aM4UCqPXJLF6M3BtPDNbvzZS2RiytSxpyBJkFoVEukyXrC2PrnExVBk6f878UCzjjhyZHaZRQ"
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
