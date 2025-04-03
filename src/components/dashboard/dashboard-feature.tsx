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
    "5Boetb8ahkquBV91pnCFfskh9ygy7EF3s6mL7zUF76dGWwHi7sdikDMvKCqJnLKG2JzcscnHqQnFjwSfT9iCDeRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YUYm5KWDkbczCAPfnnEdxQUPCPUGCSMskf5dFPPCJxQKCVN3cGD4Zbdq6wxGMgeseoy7Mhd7DpKvZvAKd1Gw1U2",
  "key1": "doCFw887yWJcj8DkCJJ4DrNdF1em6tYKsFpbiiA4jbBmQgXTrM5rC2VAog7TwWyWXy9MdatSjexvL9kMp5EQgw1",
  "key2": "64jE6XAdnmFioCVMp9Hv7pdKdCMfBHttp1fgtgmYUpHHmHTvbPHDdCjcYcSb1zVuSy9wKatjKgcQ2Wb64BGTxWKb",
  "key3": "3hu3AfY4sugABf1UVE73FakCxwGMiK3bX1KZKSygtzxMWh7hgDu4w7QrFnemKSTTrm4gDJNpAJb39b4yoru5q5yV",
  "key4": "66LuiQ6uDoWrmPV6SZRtQhYG3gAxMQ6EbRGsYVjhCcYmqB5Rn4oWjBgZCPApX6iJZC5ZVos79dTkPVpCNjDYAeBM",
  "key5": "oCVxjfNKutXktPUqogriAPZ4RjBqFnw77GaafvNmXvewYqEEHJGRQhGpP5SKE1UPGkGcG655fMLCh4S33aZZ2te",
  "key6": "3Ff5Nt1y96ABLBmSS7g4NxPuhHgJcWSrqjn9yRcctj1fLLZAjmVBhNUPzdmvyGkkMR3rxXhzmuk2kfTxeRJGPvw4",
  "key7": "sHUGGMaZ3gThDFZ5Eegq9yB3AS15jjPTK11CyAzFMzR8ZKGp48ZopCAExqT8nnzzQ7PagXZyVUbMz3d6CqGXaJ1",
  "key8": "2ngezPws8vjAZe1RGjMFYgCw9ahiaeAhG5AfJPath9gibDs7LDE5yKJXGgP35MarKychWEWeEkPddiL6CV2eLuKk",
  "key9": "4PHgcT4jwmwVfVqQMikLF2Wj636X6P3B2u2R1himKFdkxXfkbrmTqGHn678Xq6ucp4gw2EZ21NKGqy123zrerZdb",
  "key10": "3GDSHSZN5XSTYH6Bn492AR1Aaybv3iEyU7CYRHWMDubW4USJDk8UaoXzMgFTNLhLSchVaGLULcRuYhg2NoUrkH4k",
  "key11": "3KadwGwfHanTYm1zrF8CTRnAQLPu54nofmE4gh8fhNL8s7cWfFrs79Uyu3Nf53QrC7KjFJZdh1iMEfh2eL7EmCjq",
  "key12": "66SmyU7f2jQZhfa6ATRURi9VT8DQfRsHZCxSfmtft1NXYWRCZvKfCjsFT3jPPMFNQ5VwqkD4GLQBqaC5v3wpzZQe",
  "key13": "66BBFEPu52mK4aid6HSnEMbQwcAgumF1BtBaSa4ykBuhjqV1RpRfS3fYCSiweittrK1Zjf2tZSKTNKWsqCX6TJ1J",
  "key14": "62b5U9NaYSyZLUgQQe3CmfewBu878Tm9KMp6NZjAGsQBLR4u931RVuGE2DCKq5RQ3gHng2dE9PTuBdJm9TVHoZDM",
  "key15": "2ee6nNwUwvVeYBT6L8yUmho8gYTzyZtB9W4fBksV3dqy1Y1B75xRBJF9YWWVbTAZNWz7VHH4gukFW5VeQv6nmcyV",
  "key16": "5T4DUqKD9qZ52ugRrsw9Vm3VFjGgkzPCJDV7qJ6dftC5uRCoSsJZ2v2gTNs33F6Nyag1XAsffzRG37DiDdEaCVgA",
  "key17": "46pHMQ3RAnUnzS2Jo6qETjBvzTp1SZRV5rTGprfrrpC6UrcgoQU6mJ6DwdXgdch1EFRaCAVxqHB7GPaLtqfu8JHU",
  "key18": "4H3S8LKusSoZD8w2ggt7XxPJKKHa4fJ6SZ1yxcR1zu6FZLNEB8sDVwU7FSAz3Sp9u3kCvXMeqR3agTPxqPmSpGGi",
  "key19": "5mXpKtbFsR2q39ShAfSaYG7mzbwoRjNVKRUW46uF8cCjqybyci6n3ZnYE6mJeZPy9VXxGvcpgpdmtupzJAk75SvM",
  "key20": "4Bz6QKM6Dwf4dhnLVWKTJxvYyC2qVAKSr6ADef9t3jFWmVm1h6gH9azrDmxzcsbCmkxHHnRZrorwji4SzVy6Tyfy",
  "key21": "4YsArjcZJhM9LNAQkB2xaVY2rxw3SPz38R2SD94ZVTiEDUUzyhB8mM8egyn9ffa3PtJEe3aR7fBVTTULp55JoYes",
  "key22": "2XNrXxkeJrHbMXPdd3A1CsyetaM69j2pxg6ANgfig7XkSjiAPEXy2KR8j2vLgKkcyXTzrZjvzTysKNopaeBjg9qG",
  "key23": "4tfbFG3jGs6SFY91AMiuWU6qyR5d41Mrhe4GJGzovfqB2BuwSF1DUVSvtMevcRy49V8xRofwGnRyipaYJmdxk6gg",
  "key24": "5E2hYBu52Vi7Y2QoHeTV7XsfjonLxd2ATdmEBqUiZj6VAXovMDj5JShm4sjs5dyCqqtLUd8cYxZGy6eqrhxsK2dH",
  "key25": "2TWyYybx8ACscDQP3anke4Bs4A5cNxqYY6fMAbhmgYWnAjkCCu2zzGQkuuYfy4QdQt714Q7VmA9BfeFCfxsZXYK9",
  "key26": "3s3XE51f2SATeEJt1y8utbR2eLyUULodi4aQkjtHYY95scEMpMuk72wRFUsDC5E6pXA7bfYPvZUG4R4DRMdjs5uy",
  "key27": "1SfJX9PrJpV5UCyssYbagWf7CMTbohp3eZzvUokj1dkTXRpRzGDve63vXGsPijPhcZcGzn58b45QyB53183oHJv",
  "key28": "2aTamDyHEbUFBzTVWpws3EVvewZHqKJcJeCPvwFQkSUPhnk3ocmfNRftPGiWMwrcXbM3a7FtYKpuvMTeKu5P2i9T",
  "key29": "5Q94TdTbY2DqP8VQr9GXKjz8fcTx2uqpXaCXa1eBorBPxpeXU9g8M6miKq2fzNFBRsM1ssfiTXqE8zXB6Yazr85L",
  "key30": "4m4mjUmWd9sTSHwAoMy6sSJcAVzjsEj3gFmvgPXpTup5M2QA6RxAMTEcnj24QDLoAg6e4u2pBoVivBnCtHnQ9XTn",
  "key31": "2u6PPSgNMLYmEhrFimUYnA8SAzhn6BmnGe4g96XEAWR1m57rKAuhDuXopxawuG5AG99gAopJ6JpVbpmwPMWLZ3VW",
  "key32": "22deXjS9VT68BGWz58De6fdfKGikZPB5A9gxk9Khc6PGaEo3sAKP2h9vbkEM84S7paseKcpQpkHXwMYycTaqUmko",
  "key33": "452ZyCTdM1BWePk69jJanTVjn8u5i8uA5BKK7ZoNHnkaB5enJwCKdHUjBRr4pyq6EZho95zhbLWRKJyhhPLkanLy",
  "key34": "2ReaKyFNwmTGbaCvdwTbGbTTy7TubWHFievH1F7HPSYRW5ivLuywEwuQfhTnR912wBT48PQmCjBrLtdEp9eCyvb",
  "key35": "5Dbsu7vVk4qV3sb7dcgTwZvNii6NjjPPJxQoNF4iuWQT4eAbSRVycFaKV2v37VNTHYHiKhJq4RQyamFCNG7pxZR2",
  "key36": "3QDUH2nYRwMUYP3TyFe9sF22QRQAuryy6hoHgG5pgvtxtvpLH4SZpXvb852safc4MYnM2GqSLHgwtX4oxKGBnKTo",
  "key37": "5KasVBr7xywHQRmAxVgrk1cjDRKtifkF468wJd9yKb32iCqKPTFsCppBfA1JooRmXXeFZMwJnfBUm5LmURCfxo8X",
  "key38": "46j9i8gHYAcTWbfXjfRYSV8vHkZmbXwUkkv6wv76H3Tbv74vgGD34Td1tDncLgUv3MHo2mPe1PMFjLGevqt63Q2y",
  "key39": "3yLdgoeFCwGz74b2kTMrkLc1NCaf3KtTb7SWvA2zpmHJ6fGDAnRai4Y9DH5Yp57yyycavReBQCVWsYN9mRCbQ8hY"
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
