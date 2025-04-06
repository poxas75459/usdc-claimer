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
    "5PcUPQgZ3fJu6ccghAPchgPRsPXBNHYf52NZyoSWjzzA7pkA7VH2snpk2h7tLCLrHPM1X6oAaxsry2etDd2iFikb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zAmCeqs9v6FzpGpc4hwhJpoLMDtzJDXrqRxHZQ1jfJudxEv8PwUuVDF96cf91NdBFS4bnVpeA8nMTN4ra9TTzBZ",
  "key1": "5Kg7QDyG425Ue7gdKxBo2fJsuKjGcKvHnPQc4ZXpKzudhTpqzpnnMm7PKTj8KySbdmwkT23HJiEcfBQ3o5vL7HZH",
  "key2": "5XXVQypYQhJrx94qaXTPVqGcyiDbuNxnysc22bnJwUXZ7sH5yVqAXELw6KC1Jid4WgcqRfENEVWryiUvwZGPVP2n",
  "key3": "3ubUoa972oC6vyEB9x2g2RDxdLWFtcaJSyXQ1VDjYWWsBuW82UPVRT8u1kTLj1h5xhnk2LtVrLEUZmWFfSHyg1aM",
  "key4": "2skgsF17uQ153dLBWBkynFbsV6HLF42G9erjzLKyw9XATXffoYwf9tcv57MUxvkjT6RMc4zUKMjV5KPGCbgmxgvB",
  "key5": "3aCCrJHSvFY5uXM7Cd7gUttC9fWMoQWqNjNzdpmznx79xUGGNcXFpV44PWEKwG1fK3iHez8iWynSYLbzRKKfesRZ",
  "key6": "5NcJWAk6SneLLdcUX7FGDg6XBJYiHUFRvUs1A8qPFzQSS23Dsat7f9KL6v2tQSqaxd9KZWcVYCktMJVRwYMbWZo1",
  "key7": "5km5hT4RswsH2ftYNFStdow2MaVZ3tLRVyvVNkznMeJ2CnWb4b7RPChvcxEDhSSoZQHTBpN3iEuM7pGNirVBkGKR",
  "key8": "2CgN6NEkLZgKzoNGJGz3E8pWZjXW5CCBLUQjMykMLJJaNFFtHYLPQRFpbPEN1QxtdHMYUnJDVSP79avnNJFMB9D9",
  "key9": "5gmzXv4pwizLRbsgYKW7gUsdC1cw1QxTR1mdQAzmKcP47cJxgY2n52MaTXsqftSZrevxPpnGpQY6dStsdV2mtXkC",
  "key10": "32TSnrfTyPpGpA5w6mxHep9rhg2WfCXUTGwRoktomotWH96kd9J7Ez99YfzpBgbquxtzQR6zHsyL5rggYFcaFzfD",
  "key11": "BMu5qKb8SnCSSF2CgcmK4B6mQswPprF7U7yvDeAewizR78THpV2j3C2TgnuQHag6XjJQS6qBTiUiJLD6LBqU9UY",
  "key12": "BBNecf9r1xR6yM5CtCBNweA37Jyzm2U9sLKiJgXWzj3wpf2YZJKTsqTrNVU2sqTDAwhaoS9azDvBCYuDrYeat3N",
  "key13": "2VtDs82M19gWASAk9YLvRmTVdYffTnTr7LSPxPjAdC4yztVYPHs1NNrjsCuzdeVaUE6HiYDNMWFRpHJ4HkxzYKPf",
  "key14": "BWv4B9H7SR825y9axkHorWgFKAxNeMXqX63YW7n1EfUo1Lob5p4Y9YkbiBLAUTtXYZTrdXdnkyHngCe1a5C7xoa",
  "key15": "vCXPK7WQ38dQF18X4Pjhh7EP42eFx3QYYd7Uyf6DuAQj7712vC5j3geBYhKEBXQnbCAn1hsKa82QH1yhN6ZfmYt",
  "key16": "xGvbXzzcnwEDZtAy265LELt7iVSGR8GVGjuF4TEj2cee4j2st85MATwKdxzvbFs7wdQxzexg6Cy1Z42qsKVBqC3",
  "key17": "3pT4tKqMYcSVQ2NrziEH2LvDyZguQVEEfG97t861jUVWZZxB37thHEtr1oggbAVYKK4RsdfVWB7QvsvxnxB15AJ",
  "key18": "pRRmfm9wwjyM78KJAeUCP7tx8eimFNcadp5KZC4q7ZgL3ydrHusBYyq18r1NKW9CqAKJcmuwJLc9Z2rtKRP4thq",
  "key19": "4KpRJAoiZeKCKKne3WstgSdK8FFHAaiAaqb5BXsC9F4chReF3TdKDE768C7D9e9xJ5mWQ7gAdvANPBbzdMahshXu",
  "key20": "3KsHwZscSmSCidGWR2y1gNZkGtzWJRbuhnjJ9iugMXgGuk2ZkU1xGR94xAKS21v64T9Pohw3fRzJ2u7qYACcGJ8K",
  "key21": "adpPnjoTAf4uBicVGSVLWHt4phJ5aMCfzXEmwK7xx5bZG2anEPPsSrN2eAU67ZMKVktJ2oh9UxhehpRCWM8sZhs",
  "key22": "2jfgCUjWqEUbmgxbKNSjdFKsiAFVGeAdu42sGX1BhHNLzo37WSaQWsriinKDUYHDp4r4onPMcU2V5kF8gAcLyRTZ",
  "key23": "cNDxyHCEXE7jR9qjJ6KMUmKN6HdvJVmTgmRp8dTffZnamYArFURW5kXyoRUQuMJbUD6gLaR9X12KXa9yiaAzpfU",
  "key24": "5kowqrCAUrQHm34gudQ4Qa7nnRriNPEokfjdPiAR7hh54GrhD65XKfTnSx3iQwGW9sBtuyDYq5oat4BxgQG6jBys",
  "key25": "sSfoB2EKBjjFK32Mbv7jmi7tdYY2v2c6FJ5h2hw9hNPkRJmJag4njiJwoFUWXKKRXhZ3VZZRcx5tHYN6jahwYvm",
  "key26": "MGCef5eahaVVcvZEHfmWKEUNProqJEygT5fKKzCkzxaxc4dfTNFW2SMtCgQA8rXGfHEXx2b4kh9jW356H7L4Jbe",
  "key27": "4hANF3Se13Yk56tkcmdC4rTEbsLVfyvryfZ8XiZk3auUmjrmgZCGSqPtazpRN1K9BW28oQ2rQ3coi68K8cq2yb4P",
  "key28": "oDR5X2ENnJic5fsgryoQwTJk2o9RQTZW4hfniwaJNbLiDrt8cAvwvBEXEQnou8RxjrUGe9GCRVhLCMvWBxyJTCE",
  "key29": "5dCneSynE3rqAfvRdNv99HwgXWqeyrbES7XEz319mJo2zACJBWHxH2yiBBnwWjw7oSWwVM4zrF6sk8iYpCFf3kNd",
  "key30": "43rrMyK3y11d5nRZipEHSvfYpqRHwTjZ6cjqR1NhBBu8yTvsB3HAnqopqH9VRPXPcAfqoH1F4cw1k7SyehME6VqZ",
  "key31": "3bY9iPiApCk7BciXcnoC8BR2ndqzcsMYTi4zhvxZkFTmwmgA4uftbC2V6CGkj1hA5CNyKY8EgNTRWGfem23KQjTA",
  "key32": "ANWzhR2rjPKiCrgJBSnmxwrddsNPY6zj6vFX8DoFHuHTbuXFtcdtBsBGbtpUzfGBXF33qHhSsT9p5NPaSDoc9Dv",
  "key33": "4DpWb45Pw4dsouWXgWEFB4GNgZbuW6EaELVW54wGNs65q5mAT6BA7gK9o4PuNPcK4jUFeSvTgs3B4GjmWJGyfYni",
  "key34": "3z72nW3TdmZHCaqHwrAeT9NWe2jC7AWBJ96oxdy8AF5dPQbyayG3Ej9u9Ndca9wsp97CgUVD1bP76dVrfD9xnhjw",
  "key35": "4GTGoTu2H2z4m2Ss5vraLn4GwRZ4eWXp3epgYTwdNjEDrkmrUWKjVg2sxkoDEbF412TwJ5XTm4rtchktpixWiBYb",
  "key36": "qMpSd3m94yVQTRQPPW6Aj9hiVvKsVLMFwUKsJyqEjby1rmQgYfNQyzwGzmWgpxFTryPun1YTXJgQN8fviqsGkhw",
  "key37": "4JBh4HxZPwU9gcxp7WWScpK3hHgQwdDM1QEZ26HcJHAWM87mHXibjv8JEK7grtT9BmsjSfbxMV9rVgyMzTCNjbfC"
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
