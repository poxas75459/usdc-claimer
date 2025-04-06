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
    "xTD2YhuvJWgttcBLGy5zCs2MNrgKDQcPD1szjeCb8LDvvtV95bsuhrxChCdaUD6Vc6U7MLTUv8fo12uBpWEchfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G3v5AM76RBdXfbPNe74pqr2w6FasGTaTnjtvFw3vpbp8A21Q1VbXVdiDHAdGRij8MUZWvUxW9Ycr1wf9ThL6zHm",
  "key1": "3F2GGbcuWDaMrHMwsuFP2oB3ajnxPG3zpHLeTpUJCAuAme18TNyVVQcVDKP6CHmjkVZ5apTx8EARtGrzVJeZawum",
  "key2": "2J7GewzkCh88GwuNEhxpGqS8LaEY3gY496S5rbUnq2Gmyq9R3Mots3tZVdvkCo6YLbwC9YL3tiNNikeAfKtTM2Mg",
  "key3": "35ue85VSKZk1ibGfkZLYhgyysVWpLnDqTpJUtp1UML3ZcuBGgMcvsf56q3y1ocxUAX5raSYugu9sLteRzd26doGM",
  "key4": "28fNg7gyrWFCaSC7o2Dep5bwfHzVnbzXQjG9FSntbQTTvKmbbk1CkKccJC5e9SchoDriXE73kaU9LNRcFgPLtaKR",
  "key5": "67QHJw1AkAajx45MhiFYetzet8y6A7U9Y3d6txNicwG7kUTPt7EzbmYJ2dJ2fNaG5XMJn72xvx5VZ27riXCtAmBG",
  "key6": "5YQhqBKBTrVyQcxUEenm5wq4yn96EV5zJgNYPaENPYgAbBf78xhfpyHqTSCBuS9r3vEzu4GxvJVbFTDf3xWpeFZ9",
  "key7": "59ieoLEgrWxQjS5S2utA8ifJCA4sfr2yEHrgunsbq8vYugfENUJ2dwg44Rh7ZnYqLikDtpKfNUMy1CCrn5vPLPqk",
  "key8": "36y7LVKzE67rtpMvvWYMztEBPzdDx3qWkMSEwAgB1p9KB93sVktBcuHBNug9Ua4gHrp3RhbKqzfVsL2b2YxZ9un1",
  "key9": "UcRiSXbLfHqm9yJRBhA5rYMq4M19mX6dQopEUJR1gLtdStuX9A4PLAmxE7EDA8EvViacajD7KafVhig8VRWij4X",
  "key10": "o9nsFwngyPETusvmCHDBUZr3aTm6AwjLLE84Qu9euvWxeN2uCWhYJFApnfCTPTS1p13NGW7N6M6XwVdPRa7eBGP",
  "key11": "2ePa1NBhi6rTzVo1UBeh7FKrj8tx9MkyQNPcCHDRt6zqLRbQXGubesWjmH3d69YFdAWM6Mstvz3yGjkQpmjkjAfm",
  "key12": "2BnjUNxhYEpwgKG9QfsKUrQhgaNatkMLs3boiCTZ51H9aqcPBiBEj7pgN5SwE2mfBSktm9RbfyKLRMHT912Kqqtu",
  "key13": "5NcCgrAFE9io4eRVZcW4zSpZpT9P2ao4duFM8HnBtLYwxCwsi6CDWdNJ7XE2b3Lca5VT1a3jHev3YSmLLd6jzbDK",
  "key14": "5SxLHeG1PDXTAQjgAT2R11r1h5RZVBAaFBAhBME7WgMRzGm69WCCa8Upei6nqNY97Ar12ZF4o77acfu22wYjh2Cy",
  "key15": "5vfPrL2s8bSAPLqn8dfeUdm1fYqjctk5WnJqL2zAuWw8jVQQ8gDPwBASXWQUK7UzqFni4uNgVYWgNnwoAY5PdLP9",
  "key16": "3rrMkkpAZPzSSjJAvC19aaGtLehByGDb3JfnvwXHr3SH15gi6nPZzNUoRMpGgHZEpnfuBZdrefE8EQQaJLzTkMR1",
  "key17": "JAC3kvRrV9c6SyfiR3dKsGFjd5TG8HgzoL12RPeAhp6eopMp2bBZMi4DJqydPHTG3w4NRXEwzXCF26uBACLZc2Q",
  "key18": "54pFgeSUqk5FSJFTZhvfYmek2xyp4KVYzTsRa7toupvYQosTzbjTzCziiMCpnyuGJsPn6bMibAnzgxohJCtitn53",
  "key19": "2RZqjfbJEmjb4y65CZ51hocz2cmT5qdP2sWtVesyeFksJzQ3hQZLsu3ST4pLMJyhAa4wipKSNRdRURCfBiv642ey",
  "key20": "AzVWe9GmH9suL426weLzNaYnVpkTnsTDiEwNoqEGMhCtZqfvkwVZJ9tN3TPbZ3YTH5acdAr6ReUToEzWk65KRg9",
  "key21": "ywWEQ55DmKE35495GRaBESn73pxKANSsKQ2fdmmgndo374nJv3dNh4tc7hZVEHU1NoQy4HyQZTxhXbQxSfh9A8r",
  "key22": "4ou2Lo6Lorzzj22PBaDkoabJtXcG4Ezb81N597AGAZDopyuzfBV4qSRAsRRAnWg33BNKTkLxaVU8FfqAQQLfkV1D",
  "key23": "42U4KWUBR2RN66CNqMJ12BiiYXUpfY2SippyJVMYQK2YNaP1PyxAurjdEkBMLhHnLkQzfk6gh8b6kuW4Tm7Upxc4",
  "key24": "5dKCjuhth6mzBvdmRYYmGPZBffwADygDNp6FM3zCfQgzDoqsDKYiKEGGca7HatBQifyg3Hi9rrynNJxXPp3KYrZL",
  "key25": "2k4d2CE1Fizb4coBVzsUTFYdyzJsCbSiJXQm3TTMiqjGHUY6fkcgxoywbHJhLcs7vX5Qk5vVN26cPwmXzNmV6dod",
  "key26": "3vPB8EUur5A25MEiibTBcpKTZUdva1WwBDo8PKaj5Y3NmAGtbpaYuSkpCnj5EJhVjRFnmu5D4KyqcNZLb4mn9yMe",
  "key27": "2WzQzUmZjtzKWY8DHVwD5dr1mWioAbds2d7JX3ePGBX3Tp8KFGhoEi4vpJ8EaVoSZWW3s4wH6zpxkowXcFa144tS",
  "key28": "5NVymjDNRwjfzEeZknNXS2irjMRh7SbqxV9Nb8vf1YVmgiiAYd5H4yp2hKPWpznu7nFrmsYRfwhs5FQHrJGz5NF2",
  "key29": "8Q88ym12Kvo9S4s24tECcasKdhQjtCgdifH8WMrXnBQdnZCABfYLY8US5U86QANEXiSL4de6Q9LQqGq7GFNDE5C",
  "key30": "4hEfTWhAwbKhsHid5CxVBBKun8ku39h1opUpDjv5NHNGnCw1JceCLf4ZK3E77NrejXc1m11hTTPmBAZVsiPwBPcG",
  "key31": "4wRMXixdd4G4XTxa3sXF6HAXuiKefKv3aj6sbBTUbcHyTiyAFTct5HSxx6PatCvR9fhUENU5ufnD88vsHr7kDeNy",
  "key32": "666NtwUJKQxYFQMFo5Jb6YCdACPHQvWb957Ta5fPYYvJGfjmLtz79XJMchDf5zJkHNH8u8T5hiuDqi4SUxAjTQeA",
  "key33": "5u7jZDstYQ1qhoRHpjdLnZyGvyRekPveqHuxKsy1TgMkThHxyZK3EQ5VdkB1tA6F798ELvySTErYXG4UhCDvjAHv",
  "key34": "pdLCj3MEnseHe7kiBZ9dLEvbmxPugmR3MLdP4MUrnsyEFvgqxHL4em2ubhtyKgNr4AxUEKmJ611pDmiZav4t2ze",
  "key35": "2LntQQG1WCpUHxhKtXnWf2Noj9XdN3EmwaLtrEzeZ2dY6GqCT2P45m7fTjw39sDNYtL9TkYuE67CcePAeSuTrnDU",
  "key36": "59szurdanppRkgaXo5NakNLvdTZeCFaY4PcB3j1omWd2SoJT1wJC7czrVdqApEeXyxz2kVPcCNjnBEQTuBQtK9KX",
  "key37": "5TXs7QWd8CMaZZfEDATtbrq7wiFiFkeJB74Ej1L6g7CiRUYbgRBcf6VsRttByWjhMooB6EjBvjWAaZ2gvUQRJK86",
  "key38": "5QQsVNzxDkXQQkagVhU4gCGY4d6RcLSwWT6e5sqhXBemhDk9az9Ps71osbkiYFzZaXrS9UanjvqMfUkeQvgudpFG",
  "key39": "5d6jJN3Dvq7F3VSPJAZS4J2hv8xmrtDDpxoGfqgnzRzUBkQrygLCoTsFXJUu2wSSJG7GkY1qFa7kM8JQiw5i1F1z",
  "key40": "4XVXxyraZSJprb13Dq7UPf83yd843K9irm88Gg3JgEh2firCByFJ716PtRksMTFvqujHy5A2DpCaQbuG6qJ7bYPf"
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
