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
    "32TvddpDg1Ek7gXDcaM4DbEks2XvdgZkf7zhdiXFCTwwEEJjpphkwamzpsqhiNHw2T65eALxGAFrc23TF11B6mZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aHQfX1gDuSXJeKgCP5LnCPcxBXmgvF9eoVDoKCYzQk3qDrvwLNJAYjwitqN2a1gjppMHMZfEKyguk6tpHB55VHM",
  "key1": "99oYhFMMkuszvLxzzJKeLyV8bq7sgz9AWAehNSqzHRX4AYHKSQcKUzXQrT6ynPQH2kT7j49zxLDGyJhELoEDdQr",
  "key2": "74kDeLxMo7kjhWPrhXGDATUMdKkrMKKZAG1XxxAr7iheDKMDZ3LSFpzDUj46JVqxbj8JHHEJCpoVQFxQ6CdgYnQ",
  "key3": "fKDGoXWuvS6nDgTDQfGUAzwSVeLf8brfNd9kUspRCyTsYK8Y7QsBMqZZZsZRgTuTKqt3oZJFoyykH1GZrphwyhR",
  "key4": "5w6adJgP51ZDb66VcRQfVRiqsp4zBYjfAvr8bZocBnxFqDehmuDFNF2vHr2e9fTu5o4kkLuHmZ9SkF1dK21PjmKB",
  "key5": "5mC719y7zoK5reJgZvk4qjCwRaX6Ns7DovUsrtQXQAKZWxSCi4ZY8Ho3ddK4mi84KhKcPqaMqMLqwNuXuJumRkYh",
  "key6": "3igoYqqE7MHGNuSHBkRi3UhQu8LhGGkttzBEyeMP8DfEnFjGebL7UdLPPtbQwTzoEyFbmMb4WeeuXYNCxTNS8cFV",
  "key7": "3EMrAxnLvqjrPzw6YghCLnTAnPdtozjoEBXEybjPB8KVAhVJUGZucLKvCyCha3qPEwJsUmpVDo1qUXmtcFqGs54d",
  "key8": "eoy798UcSZnjwPdfU43hqnrvtBPRzftNJgAUzSNGoK8fo5qt4Z1kPp6qi6bHTW8FFVzqHvakU3nfWUWsVJuhpVj",
  "key9": "4LbSL5ATn4kiM94mAwCRdkdCj9obgQq1jpb4q6mxdEZYJov9JYm3w6S2DzVboLhSakGYHefejXvw9GywpXCUWYKH",
  "key10": "4ft9wdWCtNAe5QszHt6GimGnKHhjk7LszcW9xDPHvciqEukqmQdTBrHFq3LZdeRMznEwLH7kMEHSp1m5iEJmAS8i",
  "key11": "3AGydRxbAn4csa1GgTrY756bUERSeGQC35T77AWrLGG4oGLCGdLrut8HSoh77TLGCMCxTyuusid1ovGGv1tdxWCm",
  "key12": "2bw6Vd9czipRMpyMArDxYJnFcCa4AXHSpokg34uMajqfoWhsLfirrkCCHVtU6FbrJu7vexR9kskGfooScgdkx7X8",
  "key13": "2o53CU79bNT1DSy6q3uKdK7Z7Lsp3jFxqqLjc5aQe4or3YZBDk6gh1C9stmhHT23U3AQDDBd54wVMVSpUinBEmx8",
  "key14": "5JCc8fzHoUZWTNPc5QcWVGetvjiwqXDUGSemgbNKmgNEgqurfzPXWsuxfCVpMrcLabefWE1RmjBarZgZmfYh8H5j",
  "key15": "5jJsDht56boCQzsn1SZ9zpNn6KPDut1SS3sMorpgLHJWTgZwYiV3WeN9JNwpJehP5gPcTFonc6NdAcY1tEASAkvS",
  "key16": "3DQu7x7ELtqDaN311NB3U3cs8T2PzCpA4mSHbs7jb43rh5PQF2KAk2ZzZ3WriDcj5mregRYis8YgTS1M7drQX1yh",
  "key17": "4uW14fmpPPvMFr4CiE7fUszN6oK4PEvB3FYBPjxScBBYBBwauRMDAPmqV7WSy4y5Gbb6p7z7YYj4GLuErGCMBks6",
  "key18": "56epKi7qee7RbEbj9RR1JYbPvs3YWGUkrw5WSr3xasupUDV5a3dGDPaQqtbrYQtehLzje7wyuSty2SG212G8Ezhv",
  "key19": "p77m2Kjfj1cGJxyhBEn5sxkXmwnPrqp8BnUkgA5V2zQsu3Xbt246ymaRSgcDZRFXdh3jvTd1xgf3Mk4wTSJ8ekp",
  "key20": "VqBg7UrRYDe7R8XQqScN458BEgjJY2JRqkWpBUACCq3iJ81AuV76Sa2ExoAZprwx4QUfxSAbDkqghsFt1iNVGVQ",
  "key21": "24Sn3PnCvRyK5V1nNPPmbeHcuuf1gYg6EKLX6fEajW12PamytctkLhrqnqi9LzaMQoxfg78QpAurLwu2YEVDPHEn",
  "key22": "Ca31Ten3HyHHcYc35pXdcLrmBmPWpCytEunSkFaQ98N2t1SyVG4TzFADDhJruC3akAdMezrcvH51QBLc6ENcq8K",
  "key23": "DSCKo41hwDvAbvANfKaBG4Cwzbn6mm1zScoQ2hwnXu27f7Uu1YP28jJvmQTjVf3Mk6rJXJjNGZAB7NMmE5QiRv6",
  "key24": "5Q7UpgS97HZhLRxbUxow6xToGF7U4p9Xw4gPXZu9cKXpTW2KBwRJWi8yq617awaS2LqHCfxiCnirueX8BiP3jMir",
  "key25": "4Jt1bCvHuQkJfEYdbedznLfmQg7tMpDKFVhYRv26tXbJgsxmY5MFoLtnWMPxjgEjiEeeAvq51BSaPwToUcD1tm22",
  "key26": "5mUL3C7frexaJdfGoPvA2mrpH83w3nCmPotz8s245y4peYbDEG5DgEzmEHDLfSzfo7JnbCCDVjc38WjhmarLd4Yx",
  "key27": "39x46v7mmWpbT9UQN39PzTYQzskcd5brnng1ZpNrunZUpiLszdqgu4y5hfrkn9iE7SghhBVuTJECt7TMCgWqJ6vh",
  "key28": "4gxqesRjuMUZRTBVyvtas6tfGnxYMhEYbbwwuEUpgDMRsRQUn5eaZF2yaMWbMde1cZFYefuxYFEjGjDipBjKC9pS",
  "key29": "3XfCPWYqkq5kvb2uECjsSqqGw8dLnpDNEMURRoYQe6bPAfGy7BiV7gNvMypg6QWDrTE9awwrdujdVSM8Dy8TBDg5",
  "key30": "3Wu6bfnjJFAUu7ytCRbMDUzMFJgqZc8i215wGmrZWfs2uuv6JZdXJzcmP23DcTw9qFNcju6FNZUTAbRyezDqdaEf",
  "key31": "2Xk8UyyDzWX1jWcjYVRQ1ybCP2YHTjanSRWFKiTYzUWAzjQPVLfncWx6KYu1Q9oSPgssZb2azGswxYE1ozwW4pV",
  "key32": "121EiK4KonHeQuAmVdMb6zda3rrx8KajzZa2mRWQX2uu1GaQX6a6iKMznH1z9hGJ4RWZc2HsixjXqvancvX1WF95",
  "key33": "2WGzXdTdBqKPAJXwxor3ex5zPcS6XZdgTRLZaT1VJhbCWy5gGQqXV7TCnxHb3kZgXbFriGPJtVcFzwb4bXqWzMLE",
  "key34": "4u9o2DqB3vMkSGtCGTUJnqKrTRyPTN2tg9bdXpsatrtw6iWBHLPesizAt6t3mNVa9MZDwLucKRBNg7XvGvUXCJLn",
  "key35": "2AukPVL1acX1y7cB8KssVqwMQEtnHdBQzfNW4hw6qs568PkkVET8679Mhp5ftt5yPkoUuhfTgYAmKruCx2hrvmZP",
  "key36": "5hZCaVrrpFBWpozfhLBt5w9XDVZPDajnpkeX4LMUxAPjUcJDVeysszVGyYWF9KjiyziXj1WMutYJ7ugwfZ8AiiPi",
  "key37": "5vf1B5xr12oaVU6CPmah1uRofBurm7QJcE68Dp4nz1vJ4UcqjK5jEkPRgcGfWb553d4Cbb7XqBvL3Xgb6kMCo5B",
  "key38": "4R6evDs6Edkq28cdVftJPTFaoCGTeMskpRFtovTcgKG4mrEuUkFoGhoKGmMqVrifs5e6tTSHM35QbDUnWfgmhUTs",
  "key39": "2TUZtGmB2n6GZhZ3kUD4xThe6v4pdPtTWfJoeYzZxLqetuoT8btcFyvtbdvHJcov9d122XhvXmhNqckzhzByUFKm",
  "key40": "295BBtSEjm4wK6uUGtsi6XmB1H9McDya5qnsHji7HEbb9cECz3jvKs6XbmTBimUpR9usWgoUdqwwMFqceHv7d85V",
  "key41": "JmneF1AwURo9Cn4ZhGCbbrdfcKnPnEehC2ciKh73EiFpxJmgcGsgfHZcAEH7eULLCEPeKZ9P8fZfGBoNMAK4XDZ",
  "key42": "4VSDmJy4GJwDeBNgS1MpdUAUrzR6EMbKtz9KwqUByQrhvnCCQ4ZZD7ygeZ4Z2JbBN7HHMvecgghmzSK3XvmHSQg9",
  "key43": "3aoysQuf89qUBhKhnEB8NMHnHHFf7JehXUMU149XSXntCnScecMn8G57SnP6hBmBvC2QEAmpSd685QcEvtt7TSaR",
  "key44": "5WEFsZYsame8c8WtDkecNwBDkdypBC853SgkxaDrXAca7MR3VjGhA1f4E9eBeNuQRVppm16bbWAjc7N85wgt4uAj",
  "key45": "5nCwKKuynBLnW4kYJncU67mUiHdduZt9LpppdWXTyFZtAa6FDYABfFzM82zgTVLLTE7pKjxg4XYbTWqwmjq9fpta",
  "key46": "52qjoEQ2AH2B4GGZMWqm4LkL5f5Rrxh29pWavydazeSCMhFYArc4TeJ8eB958B4RSKA9JkeeHx6yjXJzfpvNFPE",
  "key47": "4WdRmB8XJ52ZfmtYSJZoFqu489r6Q62ymzwPtKc78ZV6NBnrnWdTW7KcW31UPVM79Pwz7R2Wc7fAc4SfExWGXLH1"
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
