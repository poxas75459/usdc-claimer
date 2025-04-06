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
    "3GLtbDZUGdqiNKvNBcGFfAKCDwV4rsECYuhC5FDs38JTYHeD1mLB5ZdxM3Z1pSaL6phb8CB2ctthBGwydSSaAdsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ARjAvhWgJk1LatHR3xDRYY96uBQYBfTSMBfRtg4rMPkqacqTvpvYqZhrJmfaF8v3XDsgcs9LcNQzm6a5CcFvwa9",
  "key1": "65K9b18mSFmqUBY8eURu6Fs6CZedTpnpWuSNPShLM6FA7SaQFAT2S24pAjYskcVeH8wdc9byemqrdNm7zKaCt5Vf",
  "key2": "4antmC8PFNUCxG19xfkPKoYxk8xSNvmjvUCMX9hcSKeyvRNY4AjWxhGQEFD8qgwi96M5EJhxqPuwjXwz3WvfyaCh",
  "key3": "3FDXC2NkfRBHvJ1zAxx14C4Vutv5gdavktsGgVRcVFzWWTU2GbGsMqzHn2Qn4mCdPKSDWTZvKiqFf4M9w4VFfK72",
  "key4": "67BcPnqJ88Uhp6Nto5x622pw5i4yrUhNw5HekNuXGwLcGi6r2wirr2ZhzTkPzhaxksNKJ4Xh9KqQgM3u3VQ9sn6G",
  "key5": "5q6ygtbFAdoUL7wmWd7WqzscwSAsGyEFFRy6gspr5wsdrpN4eFrj7UPyvP9KQYPwQhSLjT7wNUDjXH2XMNJDTVU6",
  "key6": "3TBju4A7YNLGhaWaJAkKPAxWUxKVHjY6me7qsF3GaCFxdKBFYjCvvc6QWyfQ3QEZUXBnssgiJMi7TEAr6AA1JduR",
  "key7": "4MeuS4SpspsfMw8zqTqX1Uwvuz2BNDs26B1v1nK3cLSWqmxTPRxqo2e14an6DSgNstxgg9FajKwoNYfaQwh4WzQW",
  "key8": "2iMKQPVgn3ELdvoAGb6TygXgbZrVyYfvm9NGihP57GSE9Dy8DYjnyrQkLTiU7R6TPpcWSfiRMwfU3awYwSou1t1k",
  "key9": "53UrSJtN6Wyx3LfdiZC1UQ9t4zMB1HkQ88tskGanpL6xoCXVxTHVzCUhspvZsyNnSpHPDx2mNQaJy1aM5kND1X1i",
  "key10": "5nDe8o6inxCr6T9RFDvL1jiLq78BeYSmKA8qyKSbdaQRjEcRCFWikvaWP1Cu1TxAuxmm3vkJ2MgbTc3bMnJKBV6Z",
  "key11": "qyzyEqgYLCb3QCADfvXoXU4mpWAvBrdG2Tuqc1c7aTGbWovDvAMshnUXUh9v2nYeHf56DegRV1kFPgLpCE2YT1J",
  "key12": "3eLzdBApDdCPpaoNstQxYvZUjdg1mRoMZctuJ2BxGuVmZKBLYVi8Z1m2ke4b7QMmgv9epcb3EeZEiYLkBvT2jWWD",
  "key13": "5RQDke8bKEbcJpXgwRRji7XaHWLPiN6PoSpxqoVcAcNrCtyFGJRbQGwvS3rFH9AfezRFJDQVd8B6B65WLwqaBgEb",
  "key14": "Gako2GdabKHsmp45FYbqPaHS2yBN3yHFJMLtcS5eg8hQxxAMcS79BrFEGQ818XiVU2yXMRP8ENZabvhxFAR4ouk",
  "key15": "2ggDRjQLjErFxD2r7cfAbu4gfeaeE4sNS7m3u1ewBX2ZauYfVsngY8LVrQTrdbA7TkYCgxtozpSGi49KLjCSAjgb",
  "key16": "2WKCSHJivN31wqrqLoJT42Vn4aRwUjAqQBLdHn6czLkDBYsTDPwhHMoS3XsTdMb9MLFa9syWwwgG4zDRyqNdqdpf",
  "key17": "9xqthhEwua6gCHHj9u9TuYvHKKgvsUdTmSrCpFVMEzXD8DiEGR2N3R8tJcaLUxrCHKULhVk3iDUC3n2Px7N9tny",
  "key18": "xBjVPVwFeQijLRbJgjqPV1ar8gR3XXjwDF4G8Q4gjxv81i6uoAaf5i7SpfDzoTBxfgNepip3MkRsz2DNqwz9hr1",
  "key19": "4M6R9iRKBjAyksatAdSq71FvUFqhQCrfHXaK2DAbSF1Jd5E5eBVpbbukrjpVV4YDvedYcGN4C3eL9aqNjwQ6pmck",
  "key20": "39GxihY49PK35zeiK92p4pxqjxBLcaqRN3W3oi2VxwWKa8yytmKQmTtKkb1r5PMGVTh49XzGtA2EDfRXXRMjuvNg",
  "key21": "4fQ49nLSevdRgM22g4J4FhZqaWNqa5fKkmfmYcqzfYY1fzUUWUZ7jEBz4DqYMpuvW6MeNAK7LFd5SFWgm1qZBxrT",
  "key22": "7e2X34W9B5n9vN4qqLJUxaTnJE2c14k4UqBuTqwUkgtMR6grW6LWF43EeUVcQQgoKhRQk9tuzkqqVsRhR4zSESJ",
  "key23": "ftwkWbwVGqGoaCY95fP1RS5m9mAEQLRKMnEaMpfDMf1jVrANucz7TeQc2cpqDU5B7X2NkMFky4Nv1i8CJvAYMZA",
  "key24": "4aYNLwr6URGSLEMVVTxNxuMaL5cdMhBoeQumqqytBLkChrDziNWq13mJJ6xhzKW4c9hnga8hqTRJmCah515Sexa3",
  "key25": "33vDmk5zmJ4p2uq3HPv5aMQorBmk77EMyLjvrtD7iQXLMExf3NdgxqBzKabh76qrZUP22ziHecFw3p2X6cEnTfDb",
  "key26": "2nNYoDxnKymVui2GsRzWmJyJoJmmKcUZRR58tjdxCtVmc3qHcogQbJdvgZbL7mPzDg5thjiQPPus3MMfkrCHAdFh",
  "key27": "5EBP32T1c6VhQ7cL6sBSCp2qWivM7FxuiBUqWovSe7vzg6dyMpFcYpHF7xv4WdvQjjzS2Vu2QB3askRawN6SkzZG",
  "key28": "YXfVYMnPtEGRH8eWoeV8uzgCs1GEJeoN6thcZuP6Vj88ToRRXgNTBADRpicK5pigYj2Z1L5qSctEWTtKUS5cWtG",
  "key29": "44BN5a8hZcxMaXTnzsLczsHXFoYK4eGAG2N6qFQeBsXs8WG7cKVQFcji6CuD2eJuk9miCMcpzorZCQjy7uoLPafu",
  "key30": "5oXdi8WDPDohyLKJnySKyfbDPMBrh7FDimWpk39qC2fejQuneETtDNvjh8vJ58B226uxJ1AdfknWcgo6rtnaWuFV",
  "key31": "48LweATR869NuUsiZuHCgBHjQY3Q3z25xPrpEQhkKGZPoeuLWom6PXJik5teif37NsEdQfx92asMxuVkfgcXhoPL",
  "key32": "3N3Zomunz1cHCQhDL7m9m1zhhgYwwobR1FQdQk9zRkA6BoCjcFVBrnCLrdBgRaPn5ZU88LSPrc2gVRwCNfTNKC8c",
  "key33": "19MMupi2XuT7LHrNj3V2bnwoJruDqSeVcrVTGsuEptHqYYh8cUhPcwXEpaXZSz1rdc3Q5MeBzUccsCEPk46HNXW",
  "key34": "41SmZNA2wjBDCPpDB4X7miqusQ6PCPABkmWMMf7g7U2SwN9ALBaKHHhYeMAUyeYypQNQg84kFTLfE8dRa1yKq9kx",
  "key35": "5ujX6wPK2VdMZb7NUV2vhbjcgiQkGApEVkQbUZ11vm6WCgXXRV8MQA69WYQxmmyCDpusVNpeRbGdhbSthCLTkfMZ",
  "key36": "2geDreC3EjP2Ckks5CoSMqfAX81zCM2HEUi18nMW3EjdjFyjcerFW3o7t8ZAaucDUvHGFBDa4emBqDRda2e2vRni",
  "key37": "44K28unkXekj7TbNJF9QrqK2cBkSaho7sG8LGZK25qt9AaUcVFtr7mXoZHydDGXWPDs8PHpqzLYyt5HTgGULd2Ub",
  "key38": "4XUJbKRaS2fhQSr7QiP3KLtvjs7pYbWqKQfXDQ84TF22552RgrVjhNVoYyLetV1Yw35XhhyQD8nyRtaf1RQffWNE",
  "key39": "3dt4NNsTHV7mkey3iYnntUeVGCVE2ktCW1FeiQPcUcnULsobGBccYeqPZru7u89HY492ryJqmP3caWiqzfjEguXa",
  "key40": "3Fx1pxq3YMnwEHGk8Lwu5CB6hTD29aEoFkubeFrKwibtbHJo1dfB4pdhTsuK3Vy9vjZzdCjyfigsP5b92aHYzaAo",
  "key41": "5Mjrx9Ro5eNitu2NRjgKawQRiLA4W5NhUKACwLEf2vL9Fwv8qMJ1UuiTrvohJ4vXrsT4LstnhgWhThTYjmjzhbqg",
  "key42": "YdENbnErat1CweCSPYtyUmeoHuVFAT7Uap5pGUtJ1cjNKdcPtVMM1ApWHUtnr7ea8FWrw3V6rwC6aXAynmFmPDN",
  "key43": "64vVWLDsJaon9Bty1dtgsuvCAVSz56gdbNj5bS2ynVmoFPpboUmW5PrpHWN7f323CkfM3yxefErdJUJGXqLCZyo9",
  "key44": "3o2fMrjeeJCcwPbijA8ZZRuHLd4fZG4ceNR1DSB7cX1H7wE98pMnKXTmubi8uuDWFwmULJoGb4hcD3EJfgnctSnx"
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
