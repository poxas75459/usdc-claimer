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
    "49oFzvq7uVZru6wjw1di7Fqd3sQKcyA5Uctcr4ZFZ6GQiSyaQ5nHtD1zJsya5gigKM53P7TnXFmtodxoYKP5nsnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jfmAUv2iymzC9kC4SbHzdKfExinZZctuQD6SjuMUxX66M2a3xvJo42SR2U8MKYVJzBu39WJHAMpzCqwk1k7hxbQ",
  "key1": "38r43wpdhT9Bbq7Kro7dnDaPioBA5W8hDZc6oxQaLbtyMABQAUwtARA7z8HebEf5e2HVpdQ3yk3BYXGG8F6A4SQj",
  "key2": "5X5dUthezRMNA4nJBcvmWqa37Yebdueh3y5wZ6Feu9ZYkrbgywdDNR5AX5hLLFBhLX9zKB3JuoLGKXJq5pqcfDYX",
  "key3": "5Hfres25n9H3C5FQeUMNrp8Sv9bfQhzjuSYqsNeuFGFhsWxQuxTzCJG94tFxS1Hs15iUeZ85g4D34cDndga8rNuq",
  "key4": "25KhXwy8Z77eXUbb2Wpmz6X4yQLxfvF6dkne2Wakmo9vwHfTvgduGAJPr9zikrxL2At5bmQhqg5xS18ujQ6FHxQH",
  "key5": "4JbLSFDxdbsT2L1URoxaX77zHA2XJh9PqqiSDCW6icWaneNjBQ9sjfC7cChvktLyvS3wYNUn9AfWkbjaRnRmReA5",
  "key6": "3X3UY74KDAwAHJ8NRJt69BqXJgA8KFwGJqcp3zRQwodhewwSWXzHHFC2XXpUX5UVpudPWMHhUkgxwYVrjWDQwZek",
  "key7": "21ADL6cPrdgSXhjKYZs2n8GfkLHc9rideJwm1Ckzj6zqoJTw1QzRP6W3fxTb5nfhwGrLfuzecfcCtkYdCG1kAqxb",
  "key8": "43iZ9drPaJw6xtYEvShUPmCjorFG8hfCDz6FLQs82Z8eetjnzsTuPGo9KuVEMYeKHigbFvMG37tHrsS7MgzeHTYB",
  "key9": "4jGCUuhkyyDDEq52p2KCC9g99J1bo6s4vmNBufDJJhsDG9PBNojuRmM3uEZyG8PGFGXvhGaWvzv7FcyKMebC9gwm",
  "key10": "66eWZQmKjE8e736QhTuLT2x8Er44JdnxwofJcnn9TvgkZJCNgkePiZQpwhCH4FrqFtYeP81tx5yqoStPT5yKA2TH",
  "key11": "3tujrVqQD2sFbdiTdMsDxgVYkgXbJXCwUrgm5hDnptyWayntomNoEnie2udaNeSb1PKsY7RfEJufP7FPBm8EWseF",
  "key12": "4cQfdwg6CmZjoHFZXuEGSDzSJ1XHypXzsVHy2T6thCT3jWaz6wSHMf4w27WvbBY9gU9aXr3meo48CXgM4Jpvwi9e",
  "key13": "qbRx7tYBUfHvTrgHNWqJi8sdv5dpY2DfM36o8pZgxascyePR7YZkrASq7dnhWwkM1XgMMSp4n2eAqQ2HVNgroer",
  "key14": "26UjwbjvFsmy2Zgjb13HL2rnXm4nvxZqEyjrkSKhuw7NFWM2UL8tmqZ1nxxNmU6xeqKt46Z68wL7FYeGdi5aJiha",
  "key15": "2P7YwfWXWGjgquX7TZkMzFcfNXnMR5QmN33JERYuRYnP4oV9xRnxvaxDSZTupQ1Bv3ePEzPPsgLjv3jNvnKRA4mj",
  "key16": "4smTkHVXL4n8WL8jWHfiTJDoMaErLB1rtkaiUq2QPeS3f1Yk2ET6DcmAyvtBvj6ki35sCVGJxkUg4tBiSGSzr586",
  "key17": "3DinFG4Nx9x4Q5NURKRSsXDnChpH5mSA8HhtTHjcAn7kCToUZM7A5xPE8Tw6JYbULFyjLB58vcgpUEQYzCoNgYsF",
  "key18": "2bY1XjE1pygWDs9ghjavaqQr5KQiSfcANYcVQdswSrpCxrRnCEK4guebFtiYcw37DSzDzJfXV8LipmsF45Lb31zk",
  "key19": "5acSTeP31dfRE6UeabKFmorMn6WJF2YqUAMTzQeVpJhDyRMAXGYUNA73u6L5EuZonwTFWvHbBaZW3t4ifnGPeJ42",
  "key20": "P4s1bvQcWt9vcAtTp5N5ESTcQwPiN2RUyba2jJHjoaehibw3Mzfm94ghua5NnW6QoUhuZkWbTHzAHemMtJcZK3S",
  "key21": "4gTKMygUnd63QpNRYh5hFk5vdqGZSof3kanGxHsd6f9cn5y2Sjch6XNKDh4Lc5PdRKqawKR49ocTnzp9ZBsuBV21",
  "key22": "3SpTbZ3U8fWopHsqrhZbaLMoRHVpM8HufSmkr3TdoCp6xVtMfGDR6AN6yHCaVqKNpCpiva3JveWvFopwxZbPMYB7",
  "key23": "391S2ZbA2jPYAzZUfZxp9NXbVbpnmXLX4ueCV2HVdKS1wdjoZ23Yu4iixR9pmAMZAWbrxiL8huVszCEa4yM7BMTF",
  "key24": "4sjH6BPaVy9vkQXF8EkGuiQqDp19VxmbuLZ3FoRbNuQrKLaATuJRd3DPbLgXNYFNqKsZcJb18LU2qqhqWWZM4fLS",
  "key25": "Y6mbZNHMeyDrE9pbFE6w3fMEjod75CqBFozu7FmZgQboDGYgNkW3on7N5RG8fUh6K1STo4tv6ydAcvcsz6mNGBH",
  "key26": "2UWxCGPVVbQYT97nnqVrvkwYg8y8uQMJbcp1u72TMge675Z5Q3dRxDmbU6aG2kB8a73wuaPmfyHtpXfzWoSKazB1",
  "key27": "3NSHQ2k78ZbonfC5NzsgL8RUanuShT38XdpJ9Mi6c2umtTNDC3KGQnadGphDTEnrEVyiujaF8g2Fm73dqo6KJfD1",
  "key28": "31b4PqFPhDmA6hVkpSagddSFDSuEmGQEQBRLYUZcgF3FEpceyqyPHomsCkvGxaZUx76fhmJbCxNZ4t8yMoZuo3Qf",
  "key29": "31X8wrvHb8XkR7P5bW7pmYtJhZhVh7tY6mueo3ni76vPdB5dUYNXiATqjPgGjVdvzRFHykjJhmkZN8xhjjuUa6ot",
  "key30": "5FQEz5sHdVTA7YBdcvdM2nwHmPuNratNVV6KiXnzoGK5RuXBPb27tbo7mYVxkVcTzbwh6cqMZV4nC5MnEDdGZkgQ",
  "key31": "4sP2ab3nSWH9QxvZZxcq5zBgTdsttaVekxUZmUBXxD64Rmp28ynjSfb4yNn6GQapHS6hASwtcvsGgPpkPMRVaHJJ",
  "key32": "2oSeKQjSLCankb1W1LkCDvhuUChspCiCJ9CfptwEJiMhCN5MA5LEgPyZhZ1h4ecxaxmbq1skFJWfqDjGJNKt23tQ",
  "key33": "4tYUEVMCx9bRk427Y9NjCuXbyqHsRb3HkLHfhto5GzE69KPy93Rc76wBVcM9x2gYSFmpWMW4tHNpoporvVATRrV",
  "key34": "2jqHf9wTLnx75AXNjWyqvdUji3UzuGMgYBxvcQx9jt5qwzr5oWNHxRp3ga3CeCm6mdHPD4MUZmw9ePqoyBRGBEdJ",
  "key35": "5WTihdVKFJUK4TLQ8Fkxk48hMWqYWKHcZ2Kz429jCvE31qQDTr9PnsrNMY7jaQFUVPNMVoweUe6EviDitbBW65iz",
  "key36": "ZFWTTqHWcwr7zgS3dCaWwaJmf8d7vDGtoXpJkHSayWgVJrzdc3kfzG9QdoMikMZveNoGhWEFFYz85RdpL6A2ZQ7",
  "key37": "3hCVFDikpSX2pbw4MQLbT92ko88aXTRXbRSKpqqrzbSLhLtYbmmJWPcneFHJTMu3pMw2RoqMWedSgp34f3ezd52E",
  "key38": "bJ2BuQrW5PCafKTnwA6cTES7hPHHuirVqEx5NH3F9GZXLyPPUYopttpZXxyh5z5CTpj4kawoKUxt6irDGsErEGN",
  "key39": "3VcfBomeJ46apRxbDfhDuC7ys62a4Tjf1E9sy37mmwRT26eSPyGbZSLgV4FctpTX5LjMECFbRkhr3HQGovKU4peJ",
  "key40": "2xg5DaexA6JjLh6jBfmZq5ZWGFaWXxw4C7Y5ewAETAWPf3tB5nwxhVLUHXKzGU8FPJfFpcHQw8gdna3EPKDf9Y6Z",
  "key41": "4BLEBUXD3sVabZo31fpN2SJtS3BQeBop3Ljs8wygDmwKx7EWsoY9fnhEDgxb7wW9aShbga2LAPdjqaSEbNjGaPna",
  "key42": "5pwcpmJ9vLsSe3vDP5ng34L64ty7nLZ95jo7WCcvBJybFG6HZ5b94gD6FbXwnTKpCXk8vQZzKPuLbhNpVJwn65NT",
  "key43": "uptVgogzV63LzP2eyEFo5nnqvquHCsAGJew14cerSesEfwuRuhfPXroVNggTUoaTBP8rTKV2QEWMDinTxDHvhfE",
  "key44": "4S3ut6eiDbkqMrjMa7hjLVLCzyD9jkQhN4yDJMSeADjhiRKajJ6YvWoUSMjrxBviAjhvUzWuQ1NUg5sbcR8UEjr7",
  "key45": "3h8w2wY983NMA19CResk2L8jbMp4URsx8MJcfDyh9UtBpDpV1SyBw8rDLW3uJ79nzpMrMUZq64zJQsUdsvra56Pq",
  "key46": "24g6dwWzvSMj1mQz6uXY5BMp1TqxUGKAJky8cmw9rSSazTPcwHUQDp2zgoYsFbaMz4tfJ84ACQRhQbcN5N3HCSRu"
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
