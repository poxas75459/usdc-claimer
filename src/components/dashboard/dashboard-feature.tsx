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
    "5gmE1erm1PFQDpdo6ATk9tG4Hx1rd9fidyx3p1FV37kvkBCVhWyiFophkxzPcSM9W6cwktR3Hf4isEXsFkSC52tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QrB83bf6VyER6vrZ4Ebjtsk7LpzFGpX3BFrzscmERN7spWwgSkd64XfYqjHRWMF3gDYCFRNTetxvSkVX1MuFGSo",
  "key1": "3pkGvo8QVvyj2CeMZ5NweJFpBsPE7C7oFBeqGwQh5q61GNno2MuQysgArw3jD6Np7GkkpoCVyAwZauDcGd3KCgGb",
  "key2": "1H4M3xvJw8orJgDdswTUWzxhzo69LBHQgA25kkq1grXGd1gEttjxc6hi8fBd2J8wbFG8pFhKauYCWQUPqnHh5yb",
  "key3": "3UrEgXXGBSH7uZFMPkKp1i24NLs2D2w12n98Zi1WdTtXvPN9R3efXTwqBwYBMkNEBBFDr3hnL9x465dVR4LzqLYY",
  "key4": "3wyUAJDvP1nALCxg79P3RrQEUM6KX8F89mPQvw9iZ9jkqtTShah5oFET9g9ztsSGSL8esYJE2Mg1fmvY9yd1GTPR",
  "key5": "4q6Dsh5ySjzHbtbkMhU41V4T6MM6AGt9BKn3eeziTaVP9Rx6zcfoeLBfmyERPv8ikDebaB3GTEnbSoHuWZgsB65",
  "key6": "2tHMYEMLeoeDq3nMBsabxEVZnrgMUs5AsGFRoLg3TJZ5acjGgmknxbSRRWvCFiXUud7ECkH7P1SrGFP5hKLQkCyH",
  "key7": "2rPeJKyxYg4kDRykURi1W9Pm1e1HC4tS4b95ukF8jUGjAqboaVbpt15EC8WnaHyvfGGvKQ8p1zqW5YwvybUbRm7z",
  "key8": "3tDo1AzzMXvW44C5CwLLcsuBWfbxUYBDbxp4E8VFgH6Q2TpU2A9F8uhzJ2EJ3dPbx4H3RRThbWGshpaGMdFUHjx4",
  "key9": "26iWUZnyLDL33VE7wZVAXEwJYPiucY4W76prKpBKcpfUBEBLzQrCuDS8vXMM9vFKJtjLxMiNiYt4Kx6h2GpJHKEa",
  "key10": "25dXJb5iMyPjFUo8QhNuV6GPyD5HboSMyjo3rTfHs66ijQ4a6ZompBuqtJdmC8yBTZrG8JmkEuYV2G3AM3xvcikN",
  "key11": "4MQsGC8XZ2di27Dx6edusJ7Qn1vNWJB9Leur8rnLMuSyxTUXTxUNZYEgjQ8YjdcDhgeo9EocvwmJBxEJ8vSjbo1U",
  "key12": "643Jj7qG8rxP7GJPATEAn92tVtt8pdxK22XQDR5S74S6cN1A9QsbFLt73WpSzmiXStcGBRzTzamojjv6PR9CrsBf",
  "key13": "Zfddpr7wAdiavNe1zcKW9YZMmEhoMjNZcEGT3bjLZTE3K8NB3aqYzcGJXSVFTxzt9QPEANM29ZLhgQHHBvW74hE",
  "key14": "55AgHGAXeeAxFVG5dnG6A6bE7mqKenuhTfttuGZxkBJcDYmb8Vi231kq7p7z3WVwjoNmL5unPrSYmRzMcV8G5zgV",
  "key15": "3s4A88rKysiFdg62mKzuuGfCJeUahKGSJekM9zzzBooBBAqoaTaiKBK3GSpu2a6C6VvwG6adwmHvc15ZZ1iB6RaE",
  "key16": "3fWLNiPEFG18SL3aeL6F3wH5iWQx8orEuMWowNGadyYN7HgGQXmsUArWfq2gZrwCTzeBNTKavDcqYhJ1iNb2Yo3k",
  "key17": "3todbStwRzXKwLSQ38ibijExreSbBdNVTEKPKtJomZnMhYKwMA5MfAseA6NruMyGMV6MEtQCZfEwEwg1qh2HbnN4",
  "key18": "5iEXWduPTAJWZM8FgneJkX68WE1ap3PU9FNWmW7JxgD5XknbqwSjHqAq2uaG3YmpfdXrg1SzoHQqCNdP3nTbByWj",
  "key19": "3Fpe2X5ft5o5aLU57TeJa7FxxvHYHJ45YCm8sLD1vptT7swrsx258CK4Hh9PgBW3fBjzTqiDFFnbdBsXbzR6zcdz",
  "key20": "3jYF7K2KzCrTJcx4vVUdcPWnvZ3VDgGyLqrMQQGbGekQ7k3JtP3nssL1ckM1PYHHwFGGB5PrKHUwbUiopi9WF9dd",
  "key21": "4gMPL8uXYcWFCbX7gisqrLDNQjxETaoVUsm5hA7AQDX1gRQrXxEnmXwz5ZmrxxzeNRRcnRfDEMyNTm8T2mNwSt3K",
  "key22": "2gLg2qhTRWYuDnZVbSuxHMzBJ9raVtS8qpQt6BorGCx5WaCepd5gL552RX4EU24EinmFDqtGBCZGuhYATafx8ZJf",
  "key23": "4MH5dchcx128zSuxCMRQ4u7yaNYBsQowuHW5nn9dL6K4sDn5fYbHWFJh3VZiCLoHTzXGnmnnwYtoKd7WURM1aew8",
  "key24": "44YAxDSU1eWUFFUXhgSGhfFwD6qfVMj2fG6Sh1R4QRjomG4ba7eQho26751EXpkoeqC57AH6ihzEcKTbdPV65Ezd",
  "key25": "52vZSkf81eL9bWQGPC4KR4u8aTLWJfd1L2x9ReSErTkJ8RDsrZiwhfNd8grBP2XfctJ8FtsmkGjQSR1DpsLH2mkX",
  "key26": "Ecm3bbCvAewXTJ5koxL1U1H9JQGWMH9qgvoRkVzevoWrFr4WDnfgzQu8jsCzfhjqek3E9jCWp8BXTL8fsG4mWBa",
  "key27": "5d9mGA98DtTkGiJVnMSPgm964Wxr7CmSh1bZaCqvPqGwHJZQUNpwyAv49QX8saDRB2jxSx9bdq5UdnV2QrZwKNpk",
  "key28": "4Am7DfM9u93wwTT8dsYGWSAHncw2YPy1eRuTGHHvqLWgrrxo7hiTtg2LZQDfuYafjY13wwEMFsYte5ZbsLLQ1EJF",
  "key29": "3Mc3rVwBLaTPsWTNTWU36TFi3DSiDisC3yxdtFPg9YvLEC7mvmhmZnv6fKUGtYLRTrHE7y195vDcU2uZ7WebT9Ht",
  "key30": "54kmV1wS5mdweVEiVosyEarsSeDdLWNLCcbRSX1bBM7RGbUFTLrmcmq9cLhr18uVAoATWxDAZKryFCFZx1gyhUia",
  "key31": "47EDRCViL11Qn7Dict4jcEhGuz3DpzgcRoBGknzhSJT1CsJ7EWAydLboU66giP6durW65hCo8YNLa5RXZ4PSXCWF",
  "key32": "2rQrzgPYVUB4WifmWZSK61m9nBJiccgWPwQjEKgw3SMXcpZshHmwrsz9o3u5EaUPvrABSE9yBBK8xFS25rwL3ZbT",
  "key33": "4NcLsqtYUktPvavTW87P158hvrdCoJZdu2QCxVMorC4nMmjhTDDaXhM7S2E8jdzC6hPNimdrcVRRseAwYXZCQwVe",
  "key34": "37z4Nri1V56PFiWRGm2j5wXEVt2b4G5dztGaJUVzCY1iCquryKBd38VkhvZBZzp2uCD3imEXLQg6LbBovsbZp82J",
  "key35": "vE123q3hsSoSvznsG1KwauGwqd62sXqYm4eun6VKKKhQogtWPJzugHFnvh3qF5e6XZ2453ePuPj9c7e3tX6G85H",
  "key36": "2aQ8FwVRvfzcc46WdgCLiaYwu96kfMG7MyaLMc15KxGKQkiasCAUExuV6XXwUuoxxab6QpfyttVePhseL6kStBxV"
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
