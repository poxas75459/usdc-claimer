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
    "5D2iHfkiiqFuiHw1zAbG6k6tDFcnHsvzfvQqo8Ekb8xbYr8VH23bWVWdkttsF979xjjan7ze91ULwYsgBEASwsTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wTZjD2YfbwznXJGGRTZvGq4N1roNb2umcUNo64NRh9Egkp9RGThWJQyXU7DmBaeVUyd81oJvPLPyQdjpS9wz1BC",
  "key1": "2yCytgdbrDx9T7hSwG5ydXjGQYWtpT5f2XUyZKcfe5CgJ7NJRHFXqbayjEm79rngJTmGokpbD3Gr28PjJqZpRJ4t",
  "key2": "dUL9u4DAFH5eEroWvTVZjBvn2YEgXQc11wMQAoYhzkc2ck9FdwzNj76k3EwUR66PmSSHoMuxcNnq9tTBqcCoCkb",
  "key3": "3nnn8YLCjwdaBX77fjRWs6gqUu3USHrm7gNqhxKgVdUocCUdz3vv9b47d9PUkWT3PE1omvL7qwDMv13kvpwMdkRq",
  "key4": "62ztHEbAiT1B2EEbxwoy7AXgQk5sn3D6bQEio9sNWjS8vXWBz2FzGAYNmdsL8sydUaNvL5j4Kjg1RMPqjeec785C",
  "key5": "4h1JJhKZG915sRx4RDWj3TebVqrG5Gb8oBqn8QpkvjNmPMahLEpstAJtvHXU98sRkrDCDv4cUbTEJkBiVtNEyD5j",
  "key6": "3owwuwhFZXnNbW8Zdzto1oibyRgLZFnYYX3oprN8W7Mr18E1LkArVkYirzF6MtVDbSkXWVbUEBKhy5rSji4eMfVn",
  "key7": "3uTmtD62gsLy1vSu9Rp5Skrxo9nWbVZvEB2nftGgQhD9o5x8tpi45UQxPBZBkSXoqmvciDbmLwxHJb2Tk5jQYiYr",
  "key8": "55yoTY9AUSs4mCWMfeph5sdpkArLe3Mp5vXESJcD4gjLVpaNoh5Zgsrbya6nPSQymxWRw1Ff9GqNmyyjJsgxvJmc",
  "key9": "4bBFUR84eiQDAKxeUfVKEEpeWGA5hj12MvaiTZvVnPsPCbs9p8CosMuPz3iGSbqBSSfngo6DfcjNvC6eZRwUNNBA",
  "key10": "3iCVrin2wsJps7zUvCATiWShgEDEz8GNmtpaGpoZBHZTaqgPpHmLyBxkPephXmh4S9SvW2uRUxxBBMaaYJQoWn5N",
  "key11": "3cswCCsBfq5kHg88MqyhMH4Mxxq28HbHzQCJHou4jkppeSvDJ6tQYGvFv19TfJTKJAMW6PYNa5KCVpBfn4hswwRB",
  "key12": "37ZVB1knVEiW5cGAgZAiTWiwcANfcTrmSxJPSP3RKygzDvUoHgGayBqKBBPgN4uXGEx8YHxqxwL9dpfmZ43C2FmJ",
  "key13": "64DnuwHzJi9Nkkc7ES9JWrBekNgGbKTkbpPft9u8NjDjMdJcqhoQdAEWMrQzHxt1nLpEHnHNzeqDpr2XVwdWGgEu",
  "key14": "5atdr3KvhUu9oKGQvQUn3J9RrLwXW2UcFX5TQkqS5KNzkebFjWbqPW1jVdk9Nmm5JK9fqG5uoYuKSt61eAtYiPBr",
  "key15": "57HaxxUR8M5LkUTi6jS74VbmXM5U16pyC1KSw4asC7kuMhv8ZK2Qpwg2cVN2kpQvS4BpvLE1jAZddWKoq9is2oPn",
  "key16": "4dN2RrmYvwevrd35P3nz4Qf6HjqZrFkdK5yS2Z7d2d7S24PAcVcufk9bwMRC9312GfP4xvta9WbnbdNvSkrca6UG",
  "key17": "42t8dyUe15EqmpiSsLa1WQD7vuJAZcBjZuYdkPPk32i9ESmkDwxm9VQQXyxHi2dYH26Ukrdw1AoEispRkdcaWEFi",
  "key18": "2FscabadZtRiRJQUued2sLGVKghfwjJ2hDefviB8bsecEMQops1rLfxTh7vkMfbXQ2zHUdCXsuhH68w5XbDj2uK5",
  "key19": "3JuKAiLdis38HYbzK5EnKMeivTWxDTSckPnFpn94MLZekHivoJQGcHRtVvcCz2Ly4PTKtmFeuv1HmM3RuhpZc2PF",
  "key20": "2VzAjjumM4rjTouLFuAZkxGbxQ18rgCcmzWEXjtascaTiXLE7Crub3ptSATaVeFTCCiFfwfVbc6EGLGUn3JdhRvs",
  "key21": "3FF6Q37Jou6QAKw2eiyLxLbSdr2yKwb9vhoi8TQyWYRcFfkeQcfiC9eSy8h1Exb78T4g6vDTdNhBLXGnJJkYWZfV",
  "key22": "3hHNgQX43bYk1EDEiGFCxjaXVZ23gkPj3CiTyhiA2dGWN8kgpi8iYEr9caTYRFCMchCVRb6n17hEm523cEJa6AD1",
  "key23": "uPFNGFWHGctrpjfJSJscid792duDBAg5neve7EPgoWhh1tix6Xabj8P4dqFuw8MEetxKcKfhdJwcu3BCrW4nNvD",
  "key24": "2vvvd4BNU6uDHBfhKfv7ECR3HGKeMVo1VpKAJrjAcaLfxRUAF4JnDDeR6du3SojL5fbYCbJdprRVcwTgUJNtLoXb",
  "key25": "2EGo1s1RWyQ5dFcMD5msZ1e4pb5rbA7FLp2WJK2UHBjQvDvyRBrenLP6wJV2ULz47EZGNDDGKw7MWGtD3HNSvXVR",
  "key26": "3PEpGYKxFeX5Qr616hpdNDaDjPmPepY1MBzX5H69nURbQ6aBo5dy1BcecoKkXbQZCQAUnwgYJyhDYhicm7PGsHtr",
  "key27": "32mmSn6STKZTAAP78CxLofPAL3wUeP1LspYpei9rk7n2UCycLCKmdgkhz6b49rC1hj9bRh3Gr51rve66JVhRCys4",
  "key28": "3ByU5GVWNCtuxsbP124QTZMNCd42WSFCGtxHCgzqrAxod2QzfpHEmYPPXiWnWFUsv8rQ6AbdGsHsKu9gGMuxSv5M",
  "key29": "2Vczm9KMt5h6d1T2ve5EZwVYrMwFoRRJWy6r5cCm1VjpDorcx37XnjhDrFkDum5kTxjqDwTZUKfUPdCcx8xFcgVZ",
  "key30": "3AcBpuCWfkAVgog1WoK1PBRDHyA4Y6DL5AM8TTCpGzngYXDa4DMaqn7tZCU3GhCYqpBDqsw7bKAGrBhQGhKtjMZV",
  "key31": "TsByy87AaKSsnz79JRtx1G33F79gUAv2GHBQYBtJoWt4utoXeMkgDSrcJCETf1hBkhk4WKFQ8LZogM3UJ6h96F8",
  "key32": "2iUL51Rt4MtipZPyLgRBmPJ1LbFwVAeWWZmbXtpCNZXpEa5pCUNwwced1fSGhBeoG3jj1wUEgNPzKFDmkmPv3WLG",
  "key33": "2JcD6yRUkQB53zh4QsXA4eVBdoLACcEjNxUuAxyxWfqez6vTMtiZ1AmdFWyd2SknS279nzrNE94DbGXj9hnonYA1",
  "key34": "2EkaEGUNxsHUC5ozCsyuvf3oMdLLXH7zwWesLD3StUasUgEHYzzqrcwp2R27PX77ztnm2rCEkCKRFcdeArX1T9jZ",
  "key35": "2QKscs3dKYjQMptMRWCiTE29QipSW23hPF3VPcvXVUGYrb7UAkAFzKM7apRewDLj27gxTemNzZsqY5qaL1LsKsFL",
  "key36": "WDZZ1uGrmtecgJ2SCBWPdv9iYLnURMaC6snDYYcZNhhxbDNJ4EX8792cY14gKMf2nnB2eo9wLb7PgLXwvpAn7FH",
  "key37": "PNSiq9YoxLCXXnGYKKcPhk2qy4TxXxoiydN7gy1KMLaE1hKqSYrVAB9MBK1dWet5edPibVirjECsFWNBrRc5KsQ",
  "key38": "usFikzLke521Qoqa5aSNAh9SoVikCfuEzYuyfArW5FMzxDBTze4m9qK5vTZdrfpmhtyjQmk4Qnj2hFCXYKP9Uza",
  "key39": "seyBFvzXYXXHtMaboxP5K96cqQXYXhtKVfHya5oaVULxVsEVEQpwszKbKoMbAHN3Cu51JYd3zuqFtSrvaR6hCEq",
  "key40": "RUcQsD7eSZkSyDeQNGiSePhfPx7EaEoDNR1ibk4TxgpXxW3gyNY1grYFRnhtRSH7wxqWVdPxAzko8hdWFoksMwv",
  "key41": "2ChkTNkvYWkkp3d4eGZemtA2ZZMBMW9qL6x8Zpg34ifJb8gp3TbKxnnwPaLMpUhFbEpVuFifnrtoY8xripkefvnB",
  "key42": "2iPSF4PG9FtL9krwdRM6tQEVfKzmUAx1FsSavqSvYJ5EQ2349Qbgcw44KzW1DmdsaDktyVwfv8mYfWfPHcTpMFxH",
  "key43": "4pWBSvtFxL1WaHjrFEHTmiGpBoCZXihKnXVSEPayKjWRcYquRrKSgvGNZDYTBozgivsiZn6Xzgrne2tyNv9buKGR"
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
