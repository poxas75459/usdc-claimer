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
    "5bhz12bmSsepPtf2kHEvqUy6ypqbgm1snBnwvdYb4va4W919gmqfs6UzXGS21wyt2kquaX4zJmf9YLuamVhrGWoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ndhcyKvFYmuVog4pwV4mZvBxxG2EFjMZwJYJY6DmNoKxmJfFt8hbCfKm5VrpLLWKMuypJZJ8T2kKFJE7s3rDHm",
  "key1": "4U35xEVjBLqcQ2LSUnnEWHL7oD8fN9nBRE2cQynR59kuJec5f18LXEmMPeDwqtATZFpxf2DpNCh6HYj48fAcCpuA",
  "key2": "5CzRrGVpasKm23AEDUHeJGkwQ9WCfocfYends5sP5QNShLcnJpg3G1Yi6WkMReaw1rZRrr4yZahmSB5AgFEuVQJq",
  "key3": "3Pe95C7umsqPUiPUhWmxP4SHPeMAWA4ukbUXKNmyjcnKmSfAxTQL9SZJdKCsytNgSted39jaDktqckaFXqp63VGh",
  "key4": "aa3ogyvyRv3uXm52APdUdWQrpzUvZhNwhMALrNYDzoi6g5p4xmy1gKorFUQVV9tcyA1ZbBP68apS2Ve3suaDL1L",
  "key5": "W2RWUdC5bmn6QW998RFx93dnt5UEuCijjtWHndaamQVqkRhdQxceZkWqSQGCFYohXCZyJZZvqiy3MyuzgmN5squ",
  "key6": "4p8jH3o4BRzzhjke1nPkNN9WNwh79RxSwMtcKK1z8ukNog5ZdixaDR3aKPKHoL8HZ5sUheiz916uWA9sPrRLLJFa",
  "key7": "4vSR5u2YJ46U6bVss4PhNBhiHcvjv1h9bJwxqiBwd4oug5XHgbVPYm955tsMFVrx113qW5Xo7VdunEy8yKxNWpB2",
  "key8": "5nX1YoRC3hDCLggAQtYb9gPESFyKLSga6FPZY72PNLfrbWS4pLLbybbaHRX9obUNsJJMRt4PoREdNDNErWhDeDoq",
  "key9": "2NnvpzwttZVhca4GufQ12jaq9e6dEfQN61Lh62sVdvryDB6y26u8RhtDQukJVbfGAk7F51AnbBQzYFLaeY6qbAXL",
  "key10": "ptrEDAAJBvRS62ZqHngx66rCYKB5MYhMmrZxrePAhEozMsYdhgtp3d4J5VgCep2h4k6MHpefTTWrEYqifH82Fdo",
  "key11": "3eEGpFLS15oCfcjii1HppCPrRA6sYhLXtv1AC9B2Tt5DQhpbpXsaCA4L8ErF5Jzid1SsX2pPBDczzs2Jp6Pn49B3",
  "key12": "3KHPWpJBdtZYTBirhGjQfnXs9DJxaFU7aH3LdqFfBZd6kP6tQS6a2JJXG7wftGxymZtBJfXShGL8CMqNaDzshDfJ",
  "key13": "2fUKjMstmquPUqA3wL29AoPrJA5i8pLf7z92ZiNRty9kGG9DRRg7NQp4vSP8QRYhnwt1syW3rabuzRGFLS1SZmcE",
  "key14": "4A6Bx3dfewfRGfcNWheAQYiHC66tHWmKN2SfzFyh1Ro3PfSMLCsMKH5KvLc1zbZrVAnMUbH776pd8GemwDAHDTt6",
  "key15": "mMXnqfi1st1AZ6knFafKw2tTosEPQLMnBhU8r6e6b8n9agWtVDGHNSEkas3KmdkLLNmrSzUpwSmov1DZR1yyc85",
  "key16": "5pGWV5VoQ41UY7tAYrZvpeXUrG3LxKGChjpLUXJ3mGEfuJ49711GY3tT5WYZk3ZiprWfmNgg5Z18B2C1EaDEm1FV",
  "key17": "mbTbbmMXYpvDD8o6VP3ohm1zWdYHbbNqJYXi62BB7ZPHwcLwJHeLX53QddiNmqJJZRCkA2DFMwNTtqNrP8wMPzY",
  "key18": "4qJgXHN84yyLqwabFG89MZwvZwiQXDeyix4yJAjgADHEpstSXq9URaAi8YrRtXQ4PUwLaJxTV4peyYgYcmRBjFNA",
  "key19": "hLzr2FmjeGQrbQK1amJS5b4tig9vKmUJnUwUob3dgPKk2SRdWpsf1Tpb2rvhUULcN8gs2UGVfWvjaHSTGzqZRbq",
  "key20": "WitjM4KE19bugdanLCuBJvtsXTWFKzYAX4eBEwivhvpnwfkMiaZjkWMLfqFU2EjAVJRQhxb6z6hHBrNBbEc48mk",
  "key21": "5LuxvEjY3MCQmmD1HoVN5jmZMuw4wWM6psTirW4MxtwQSG8DSrSvGdg7b3Nr6PKQDEVPErr5MXPGyUWR9XGGCbN5",
  "key22": "ENRyzYMtFnBqfJmWpQFDvsSHmZAaPgNfq37EoXPYvexy9M5snJLmoMihJYGPFa1jontyszydv7peAG9ZPqs2WEn",
  "key23": "61NP75Z4giWzkCKBgkgUs6o5UaRpfvJ3js9ZdP5kYfFNuntzPirYySQxgKYJE3pxUGUFYc3dpSQHqVZSVd7TbtSF",
  "key24": "3y9jgMeBo83q1LyxUXFTxd7hgk1eJ6JFbm6zKe6wYU58sSLvpQaaV7dZfsTajzU22JvTYLfG18xMVXXXJuVCpb9C",
  "key25": "2dSUEj5hLMtcxGm9L9edSXUSGbfXEMXQqMTACN3UFiBCSbicwMdktid8t3Uow3Lp1PQH1aFtb3TD1jBqhuAFDfUN",
  "key26": "44LpURaAgo8SN5QjyL8MupY3GgxPfZp6uRUCmnzh6WakVNMkUFaxMH6586zu9fCqcZNP45Lr48SMRSeBui89JqFT",
  "key27": "on2qAvHY4CuoXXzv2ScUqmkDoDNppC7UwmSDNTnh3YGSUPSWAZZK7sPCTEeDe5L5L4frn71nu4YvZhuKhNe8gk3",
  "key28": "3JQTXsUpwXUGX4sHnwzdCrsZkQdR9oewGEJiQWZJWqCHkAtgBmcmGE27WkfiyvmhxTih2BLti71qnm3cNHxUjeXw",
  "key29": "7LrSZaoENDjwVbU3BAQwUm7zDC9VEd9SzQBWmYiQndVjwX2U3gQuobftuxVALJtuTjwfz91B18d7vDhRpsw4h2m",
  "key30": "vKAJudMF27y2Lojj8cqsZR8koGzDBm8E3RYjebKK6eEThuNzrd8QCUDgjeSJbQgsDNnx4829WXBREvS6zfYF7e2",
  "key31": "dRXtUQGpitzwsajH4RhLcuiS4XkC2jQQk65dDVZNwM5GjcDbBg1qorKTLbouSe1kFmQXruXdq4ACi3zP8rPWroU",
  "key32": "4bRs2avMk1XcGecC8ki4oweGuZXduduMCN9qsaxoFCrA3MznJRWiu9MoUKuARRVMtqX1JGXpNQK9xEYdkDWjAEoe",
  "key33": "4VPpyHeqKTagbu2fAceJHFE6YtCVysq49gWTzL6bp2rAHJA1mnf4Jau7pULdEJu43ZndgsR7Ze6hWRVPq1H9SHzn",
  "key34": "2LXgmSFoR6gpLiuPtG1aiN2aUWfPtmSeCpfUcYFUr3ZpPJ2aJbnDyKqDoVdiZ1Ljrx2182pp9CjyWZ2PgNTevNkR",
  "key35": "4UZotnArxfqkRouUKGLgsG83ke1Aq6KqMaqCmXZh2DzyQDr4Cu9kYUCPvJ6MJAzG6HWMQ3mKoKFeKs1LnEnqBVaA",
  "key36": "2GimeAbstppMbfuqeB47nWPXnf6tu68WZ5JyKhsCoHkgAxLS8MYZL2Nm61sErpduGgkXvDCseXPFZhQCaUC7geLV",
  "key37": "5vXp45q4rzJ5Zfs6YE1vabgepnSQU21DJyt7nN8AWHkMi19P7nY5akEB3Xt9XiPU7M8a5scifoVGUwhuKHusRNqs",
  "key38": "357iw6npPcGt6tSSe1o4JvhcTz2k6cJCQkAxfgdnhSktZ34BpdC3a9FJZb91SZf7oNNQYXsoZG6YsN5kGiMiPrAk",
  "key39": "4geuGN3udVRisdAtpN3hBeU87QFTDf8RzKgB27am3cNg7wkaFsoRuo7U4BCDFqBzD3WjZJBHD7KwHwYFxTWFGxMd",
  "key40": "2LUbRySR454KqCECoXmVwRZVnRohDB2BqzYRQRvW5qPE43zEo4BdMTASC4TmDLQMUNSEsAEtsgZBKyvvH2ooW3un",
  "key41": "45VviJ8b9iV1f2mWbmMFoZ1atphyGt8Prg6WufuaMpjoLfCLXWRrpbjwnJEondPY5APL8Z8P6zMnXfvbkniQz34n",
  "key42": "9977LDCab21E8RbSHwMHF6zDPVW2yFGrTBPXKg7BHztmSNAuQErsLdsXiyYWP2VXYUy7uLwBqZhX7pVmWkKShzn",
  "key43": "5R8vqseBCo6Vddju6rTm25NFQiwQihCj6qAaiv1hfZ2z3cupzdxx6etJBAdfyGzk8evvYaYeF3UmTWzwfiL2xjXA",
  "key44": "31TjnY7dkbK7awE2oCQA99P9EW4GhJ9LyvJv97cGoF9SBFZhRCNavfqn4DPF7VftGpVZXmXh19NXqKHnbirHyAux",
  "key45": "3Y3TDyc3rXYC5rxd58eQp9WLXBdZZH2w3Y8MDso25wpPgEBfGkaFWpspGTa1WbQAm6VUv7shuVYeZinvLBAi8Tmq",
  "key46": "4Ls47NzGfz7XxWKo8CiTGPS59SHjZvBSbW2rbezfPTU4L3fWZCnbj1L6WQPnGnU1zy23SiNWCXd7cCQut7gmo5m8",
  "key47": "2WwRQ4NfbGTLp9hjqSefjy5RjuWwJ93frPqd11uk91QDpun72KdYwV8hcDadWn4LVtqqmC9eC4SD1TDeVDTTHHUo",
  "key48": "5fVJHuZWoWqo32unpXqegpAhzRFm5wCZZv4GM5uPDz2r4hQ3nzCBoaz91nkZiK7RjerRN5LV6bFt8pLz97ztJiw9",
  "key49": "5Siu93K3tztRuRifv4f8ofZUxdmnwuWE3FbfSCJiMvy9cioGpUUtMbZ3EnME296nd72PT6ke3cSYX1Ese9gNXf1M"
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
