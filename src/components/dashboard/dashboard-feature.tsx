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
    "51J3WdfaiHKMjJ34SE7e7sy2ZSCUaBtMvw6YEXHS6UiVuFfjyRRsXFT9dhpjmSCXgxDnxXjXKsDexQZH4bru9Aqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D8T4P8cmMXiRLCQbtn8iqQZRdGtvjxw2jrtxQAzJLWa1ojPadqxySAg3rsSLryXCMviDge4VA75bL1WsAN3AUTg",
  "key1": "vq6H1ovqLdVCMZz7iGWuCEp4vE6bSxe4poxLr3bQwj16ATJUoFgM8stJS2hGG8dgGV5hAFubZrRUDii8yueVSR7",
  "key2": "8AQSG62jH1fsbSXuZAJxz64ixnr88rwDn6Wz2faryaozWGqakasjh4nATHH1kR899Snu7yaXPaKSUu7Jomrj256",
  "key3": "3j7s2bxU2YD6ctJ8kMey6TNbyHBVbC7BsAzoU7FcEJPac6P63DszuuiyfHm5yLH7GRjtBPkMhznCf3cA1FCyKtLv",
  "key4": "2P5YfqL4TVnGuZLCfiMx8qADPsYDpPSmUQiBq4d1iAnjvSBV6cUCMCNSKrvHMACguzQts4ezpXajtDrnt92qbfQP",
  "key5": "5Egq6yGBSwJdZWAUEva5gciG1GMB5WDMutarSqNEoK8GAFxY24oZZJPFi2sNDxu7nwQqa7xduGtbxtnNeGDj2spc",
  "key6": "5jYPL6QhzUUepnGDRr8Q36zoa117oAD2mZvihgdoELDKVDRmCtnUFbTq8JRPsa78rZKJK25QxGEuhixqWvdDkYQH",
  "key7": "3apWt8kgp2h4MnLA3qcfiKtGZugAqFyj8CPFDCcCCbyNt7BCNRoC5AMjrvyjLkyPGrWvy5VJ6wVbauWj9zEaPPsq",
  "key8": "jjpbXQ8j8c4ryHZLuGnYVf4VLrpPCxGu3hQd8tXSQjvEkyrmjFHu1LAhVmHk8xTGXfQkEjoqBLWNXwdRMcAPVDW",
  "key9": "5vD6mTY8qUpzDTfTqfKLDDjmCdwfLCkYbnc954AF3jWbazTFqL6J85fCpZvRZe4WFJmLeGrrEY8jr229vcX2LFEb",
  "key10": "4F8vAEy9tuzuN6aCYXChUiMLEmRNQQnKQJNi9VFsuPx12mjMcWYo8Evf1N5Hpuc7wGJcLEsM7angdM2UYfaQsxbY",
  "key11": "4hJri6xQHqMPebu94cNpR1eyEzT1AMmSWu4SCmSrjMBSXPdSW2T96ZkZ3jvGKLTYLn3FdNFmfEnKZBjELgGho5Pn",
  "key12": "3YevjZo3YjZwMtEpVDgk3dUVn2gz5moT7oTpEusBT3Ls32fs3QwdZiNw28KiNwQUWCn888CcqbS1CgBEsiqRLLf7",
  "key13": "58vZHsTAbPKGnvXQkEXpkfRfRtXu9uUeL5isJAjhUb4QGWQ5kkDH6bvKPTjE4WCucF3AbT7JbN3J7fP1ZmM9DYNP",
  "key14": "3e2teAE1QBMpmpZzNQHNd9Zj4cYoBTSvBYDLnyFuwok6PvizTQ9wJo5XPErbcEKm3iZBSkTTXYDkGZqCxykd5BHz",
  "key15": "5AmT38TPSrZguyUiPQtNjhcaBv4dptcSF4gXoohPbhnGDE7932RdG93P3Hh9hiHQMaxm9ETE7JdW7bqjTHGv2XKm",
  "key16": "2uiw7ZiEKwuD1SipedaKLq2wB3EqXrMzRyTbVvNtEBRhuHBfJLcRQApvsrgFys3SUZoQs99drC3PtUSn6AixX8nb",
  "key17": "4hWCdtHfu812SMavwojyjXubYUNx1zDKtDUrBifc2TwS89j9N35kiVkzpapfBLVQ1QgVmjJCiQGnFEbFnffnPnkc",
  "key18": "3Qav5qYDDUqCS6dWwf236X5Lr3yj2NjFo4MhmxGbK4uTwyCdXwJmxSZLfZK7ZeM5chKnzEZcvdVbwGw67KXjd38c",
  "key19": "2DZHq7sBfQUzbS1P2JqRXoFTsKYRoELbTWDsKY4nt5VFu7HcfgeKspCunBFQW71gWrDBkeg5DuikKDr8cbposbTZ",
  "key20": "2ut1nUo83K68hPxvDAXGmbsbVc6Fb8ebgfMGdCn4kHPuzSnyDD3hTukBcs4DSZBy84sS5zatq8LJ9ApN7KZHThh1",
  "key21": "Zx8m7NexpvqZqk8ZoqobtdhrpWt8zGvyZZGX6Qrvjebc7cBjv5pEVmRWmCiBKgKgj7m7g74vJMaAmtsyAnSRRtq",
  "key22": "LqsgwmWXz7jJ6pRamGnpeSZ9s55gEscUgb5jhk7cJYBgpkmiyepocQNmysZWjgVruQHFznsUuwK7Xr9ueeZAfJU",
  "key23": "4ARrrL7rtp1XBiUH8oJW5gnmahdFzerN41KCA9eVGrbZRHE7yHoU7rebm7FozebBLrYUrmrxp6F68sirHCQUBfXd",
  "key24": "AWBdDmbju6i5ttBKjzYudTjzyYfMZx1JYQHRcBAGpWzRmVc9vXvJHS5F1GQWfQTTeQJWmu1qjqFXWGpFx9Lsuc4",
  "key25": "2QPw3U6TJeKVpsdWPRYhMtiRBTFBmJZxeRo4NCzPY2zqozhUgDTpvYUNd6ZtcAoN49kmRXJpUKqJUN77nqQgxH2d",
  "key26": "3SuNbaqcxzXjAzqBFQAcFP51jJ4gy3arCStcKARGMyCELgKgzrX62EVqVngefvapTaLzCERhztKWG33vtuEPJi96",
  "key27": "3ELajzjLtFk2fVmb5rpBpet8QYWU2Ye9asydPBE7mzPfS3WhRCGzGCA3nNj2it77qfBGHiBMmwSaPNtUCGqq6A4D",
  "key28": "5orBviQhRAj7v1quK7rxKf8vKFuC2sdHmMgZYE1QrzTwarX7FZ6JVWPUuh6xtpTHrM3HiPRaojT3h7jm6aecKHbW",
  "key29": "4SgC9HNiqx48W6NhXDBQDBvGLMcEtUAZ7NkaaoFBUCZjbEvFp3DSc5DiH1Ybwb4p3dh8NNafbjsLRdVsj2obDx9J",
  "key30": "4sAnqHTwiSinr1UYdoPPn4MeKJY9CuUCv2FVLE7eiWS4kmyDsfJt5vUnxqf4aySRaXVqXGEcWiGukGHz2iW2WQ8S",
  "key31": "5MX9TzNPmdnbUR75LZrTdV7ZDQjxhowtp2amXjk1VjgEmAJGWMMAjCgpkCkUZRr6v6c97qCrBgPAEcWJRA63aN3A",
  "key32": "xqvKZWywPKTT885SSz8p3qMEvpfqg9WqsMkqCUvQWRzT7jVWSAd9sPnokfJU7JasxANpde5jvckbUuT8jtskuSr",
  "key33": "5RMpMVB1EPRAmwz6nhzJoAx6SBvDMxKTJRCWcwBCphj5ha5jnzLj8r5v7UkHvzpcyknBNbsf7DePQGTMb5Eg7nXN",
  "key34": "7uddCzJiyjZkCBdrvowzU3oyBov2ahwfQVwUUPbvbf75aLwGZ3HuT54GCy3LyNw8RT9ngCFRE7eURtTb2rsFvPx",
  "key35": "51GsLWs4Fkyd9vFEGiMXaaRxLVw1ZQhwyU29sueHPYLAk7kByRDsTziD2ReK75Fgr4aqKqZHZpUZNX7cMWaQVfHc",
  "key36": "4UWDSmjHTrBXJ4TfihNpnWY4MVZaijbddjHmrCyXgBkoDfnXB9vMJXvnAfVtCnp67PvayuR9F9EHwpZBnn9HkSMY",
  "key37": "3N6GbYGxYuUc4Qv8n6egwYU7Uub5mS2mkYETSFvssfdzB7mEva6yrxFPcPvFvkBEyD7x2TgaWaBJBdFVen1n1kD8",
  "key38": "2fXLxcmqF4GqTJ9624XU1Cjo3cdzKLCUyV6mT5zRB14k1ZoRTxriWzbgr4i7qQXVmeRVww5V6dgruCcVZRoaJo1y",
  "key39": "2mhHd9eJnNW52sy9JsXNweU2tJydcYXUp5ifKCmhVTrV4TnZrePRCWoRsNrELGamhtcfJNm9552vMPcUG5hJChkG",
  "key40": "C9c3qBi3KA57twW8Z6nCdaSKouTFdCFoCeWNUDjrCqtpPbfGXweDojfRyJyN1mXc35qEWHRcZBWzq8G4NJqAs9X"
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
