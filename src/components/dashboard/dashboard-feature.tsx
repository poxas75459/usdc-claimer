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
    "2omE9F7pJvtEUyuAR5r5kMPeoXSj5zQhkYgSZQr7SuPXMv7TMudmaKACZmk4GSVDdA7eUoeuvxYt9sVPVr3bow4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WHDsHxdQTE4Q3Xq954RSNZeMM3d1DLAPY5Kxv8HFbygo4MtUHKLczBc7HUVpbXAgHY6ZdKQmUntfGeqFPiJQabs",
  "key1": "3hKnQo7sTFDSxAunwVCMUFNY8xWUnGCBUXUMGKk4rZKE29pVPCrA9Bon1hfeRf4961PuiqqrZ8nQMEoJYrXEgTUT",
  "key2": "uRpEXrftN9YQyrgjrrv9TcSp6hSVrG3DYZ2oHvr6iRnZTWR1wxyVZ7bvPRqaqrs1kQVuLmxkM1W2F5nrjvoWySi",
  "key3": "5Nb7ECpe6aegRZPNZeAWaFvpHCUSAyxLbMQhsF6pALWAftJT4dVriiDd48DwjyLzEvAq6KwannJexvEM4vNDR243",
  "key4": "3gd3sQiSaGuaQKLRsPWJK5vz7228WwTX4CaRA8oLRWBvNDWcsUT399xxb6SCBukrwPLbcr5Zkw9uYr5G4SkLZaes",
  "key5": "4aNvEfMa5kkvGhHgobeN38YaP7ow9x4ithnQCfW7ZQidcRrnwEQ237jh4H2sDvrEvwTAWFb4AjuQzEW8AN5Wvwzz",
  "key6": "59dT7EQYLx9ErEPJGSfaPtMgXSLyHUfztovaxNXviUXgEUWjR6YXUsUPd1jiSVnAifAcpt1JefmUhAviFMhfDCVM",
  "key7": "2VsrfHgwNk1RJdVfoaVCz8X5LPjaLwf9XQkKMZdwMV7gczwzbxmaYRe4foGvVUgC3BwdkQoZByeKvX2HV4uRkpQm",
  "key8": "2VXH1x1rAu9eVjruKYGLXj7VXTKmxsQqBA6YwCsLAR5CpCh6kDARrdTwvj45hAfT9uakQGjnGanr1xQd4LGg97qQ",
  "key9": "29rRHuyto4TbiZV2E1q8Cgfw5WVf5JHf7uMxwLyg2pSWw9qrRcrzXYHfStzuUszvPkbmGva7WGU6PbhYPMYUzmo6",
  "key10": "3vzqjQecqHtApKCiYMUzEvfKkb1xhyDsHRWLDMbKU78Vi92hVTf16CibMWJUwk2sZAz5LWKn3BYNU9fv7rZ8Psrv",
  "key11": "4dCvhes2GLmTp1RkUHzjmrcjsu3UUmLfhMXFZonAQwjMgkH1dpCSMiNCQhxujnT4V8WShYwmbnivtTu1B2H2uJim",
  "key12": "3tHPavsdXgYx8yULyJXRkKTpPz7kbVRWrrCaMHCW6kRt2HFXR7NjoMGAH5U1mk87rjffycc1Ay7jbkhcZUtub5fs",
  "key13": "4KQ47vKA4KnM6CsDagrVaTcipdycpvGBFw2NLtgZzjjGVg2Z6TiFFUU3PUscNrEcSNLht4N5yBeK1988FxVVkoep",
  "key14": "DfVaZVarEVeGpwkLWV4cCF7ZasbxJf2va2xgg5hFuaanhgTPDRLfZSovMoKStpt5jiYYqxT8b3kSahp22RbaXVL",
  "key15": "WJn5iWz4QhCM3owyRNXfkwiA7gcir52rBU4BDJBBtZUVqCdEjT5pcBQhe5nShFrc5bFne4Xmr21iQpTqH7e84Hu",
  "key16": "2E2jXboQa8n1EC7ix3Y7GSQWnHUyMQx7qJVqoYK2gEXqeMB5uU26GngFxpbHb4daEJLCeG9x3kYqFYu2EZW34hfq",
  "key17": "BYne4fiwyCVXkbytpom2oqH38Srtn2LYWz8ZhqZuFn1r8SDQBZ5HKASRvqQ5NbpXfxgvkB9FazUdyt8YDkTep7p",
  "key18": "2pgmtFirhaNqw4bPUeFP2nqvi1RpStNU2VfARfgiBvNGjxSWVbkTtoBeG9Y7Ki2e5VuYd3ytYPassYS88eMA9Mjk",
  "key19": "62yQdGwCJRr2CeGtt386JC6fbRYsCccNJvPbkZfQEdSWRnY3kLjfiv3hteoXiD6D2RHpUhvMKAjs7BrPjWQePukR",
  "key20": "hRnLDK8BU8XnfSJb6Vgg1o6ny9fvxu1mPd3KMMu2Z15cVpDzzH9mY9iqWG28LM8L5UBpvcPAnsBA1k92t6U5sQU",
  "key21": "2mXoyVmoTuNnsM7mpH8oCGnzJ9URg6Y6DJRNTQvyUPYRxay9ADxZuqp48vP419fWWfwtZnUm3T1VJvy9jWsnzpwH",
  "key22": "5gVd2GEtUzc1ADBxGoa48QbKxHsT9eTTbighTtgwKGZAHcKb9Mk1q9cjQ7YCjihzGBnCLbro6kgxMHb2qpDPwN3L",
  "key23": "2TGnCwZw4R6prYP2U36mjxDD96gZJTG2dhSx5eBTQsdrLcbqodT6ukZBiA29fKQaYPmszk66PB8jgG4dvaq8zna",
  "key24": "4oKbRgdpoYE71jNiyhaCg5PfCkZEf6yQrQ3BFPA14YrdXYpJiftPuTRaQ66sY7YGcYn5Zgm4p4apqgXUrcHaijgC",
  "key25": "5yKWCK3iAgisYSZMNvppEZ9yntUTyr3ppqViU7rRpvoASQAZar2ZygzTx543onufbY4Lp8Wx8DvvohqAXAypusRe",
  "key26": "2nbv9DVo9xCFVV3RTpf8D7XMPugBrSQxX8YFMa6Dr9nRxPrEZYYF96KWiTx9VUDnZYtRYdkeZjWtFBxGU7Mw2mRZ",
  "key27": "4RvJP5MWZhAfAipuT6MaUDNLnajh5LyxY7Z5orNfndzerLD4Nj7oYN3YVUw8j1dC5UdhNshoSfp718krLvSZQNNG",
  "key28": "4sSowNtiUsM5oMKikBqod99K3SoGaRrxoHfuVC7Ez4aqzY1htVzhoWKsZSRt4zqtH73GG7yABdFYqxWoReZFvPCW",
  "key29": "XxbGgiCpLQ9HA1kwh82gzd3YgHcWCCK956EhCwkQQSh8fhHrzgYuP16VhynkvZrGj16ysaM7Rz8TQdHUPUQTWEz",
  "key30": "zA2PZw5gdA5CeuUwa4qHR54YvGYG4zFCwXH2Ls3aBowKDU1FdimqhuMqQ1Q4H4P7NspXEif7nQg63CWGxCL7AZW",
  "key31": "s1Q5w1GDYAEF4td9sgtQKrud8z6iH44ekYocwAN4FcFvRqTL9unrzZsJ6ENoswQacCSQCiDeNwyPcXqDbmaTDrN",
  "key32": "bRNxgekyRWs7dLeC8qPZaMu6dVMZcfxUb76SL6YBKRz4Zj5XeKedTYAPBDvbniad5qczM9A8EPSsLLobGkH6W1Y",
  "key33": "3dQyHQ8wcQFhVRAVdDP9q6Wf66b3y5nV1XNLpgvQYeWAiXXsSbWnhtAb2WZKhc399KtMUhEVq1G12A76wKC1wTpR",
  "key34": "3KtXofcc2g9BHqfetARuKvFMswRzwL1EyAGePTMSPG3ZRYmpWQLXVYQtnLuRoASF2kAfiZi8syxNhSrujuwzFiPr",
  "key35": "5tbN3HY48kAYB5GjeQoWHBteV39canM9GFxjZhhCei9Wrz5mfHKskcroRAi6Hu6JoZ3jKc92QqLHkGWtsPGPfyFz",
  "key36": "3hh3koNRVM28HCm6TC5RuK2DGGzZx1QNAK6cXY7c1KhkBFd3Wf4wrQqCvjr7ancv5y6uvVVoBHg3vawCdAHrSGDB",
  "key37": "49R3CGQwF9SqouEBShSrGk1DVfbekPBVLwUftFtq1EME4trUEF29r2kTZdqWcMPGxLNbvBXaMqsuAkRJxZZ4srL6",
  "key38": "26Ycrm6ivvdeivKU85yHLQXRDCp1PqVoGuoK8BBN3gkyCCqeuJCRd3qTHJiYpucKgW3gGnAdU9RfjyTiTZgJkCjF",
  "key39": "4bSxfx5Pt6cqyUYDrFTTpnfUy2L9W2bmr8x6p5UFADHtazEWoezN8uRVB4A25LeesEM47BqaYM373K2jntKHyHw6",
  "key40": "5JzAjgv5Jj5L6VNG2ABRv2kry4xZM2nK65yE3G6U87nXXPVugzopQ1RMGACytV5P4p3oMksdgxVPivMMXFfnXZFm",
  "key41": "3d2c4Ut76qtnQRTxHnLvrmVRp97mBdYNYiRXWiPZuFVMC2MXx8MoEejWtnhBrwbPG7C6n8gEzDPo3GLKtio15Aaw",
  "key42": "5HmUzGfdQUoMTiKkLPgb361H3qJ58hHA6D8su7KwCjTNw7xr7QEenDbAGjKsMUGjGNjoF2vVivezrsALayuma68W"
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
