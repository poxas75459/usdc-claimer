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
    "48GfetxP6dXAigaEaHrw5swr6gfng5ckFqroon1wo8HvXJKvRVG6iv1Xsq24PAnmi9TCV71TG6T8KkqPtMgdKkya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bp1mHh6PDUHbErpEuXssVRq8z3B9nwcxwocu4XpXQRSTzs2xgwu9Pd9oTbUGcVERRVT8MeJhSn7o7qfAvMHFn5e",
  "key1": "53ccGoAEehjbp5pFqk179pqqKXEkZoxjYZAsda3B9s7ry9i2sqUtqSgBdQrtYVf4afCfPcz7Jbsa6vXUm8658MYq",
  "key2": "34VJis7xJkpy6cC1jSzp3bh7uRCVLqdznJ5KS3ej2tsa1G9GBzdfytq4gbzvjFTPKZDzB5MRWcx1Enz3fQTUuWB8",
  "key3": "4o18Fm8MJeEWjmBNT5JGQZmqmUtUKKy9ytGa6JGPmL6orkUzt5n3QBNwqSe7Ln5rzzfKqrnHW6TswmZic6JDc6Aa",
  "key4": "4w36pYMkBoktetAmcraYxBGjXacLuT55eG7XjKJKpikYsMPV31TbEng8UMuyaHZcpZ8DS1Vd72WafQNT8vBDzfyV",
  "key5": "3586iJ8LbqcXeddwXDixgmorFFDPu6j4XH2p2Qzw6is5BkybHZkopvy4fcGEMCJiL2UfZtnuDYQmzJrdU1csSAod",
  "key6": "2pRcHQ1Hfegs3VabVJsGFwPtGbYFQPqAkEp19JypHeiubTToUUgbEjpEEuBLJBQyEvdFDWy2UrWZ9oT5sCxjpnhT",
  "key7": "44jA1FfBp9Hy8bg2mynmH8iBXLJ5mHVpwPB5msC3r6xSZ6TyjknBxRC5ztGtRWeMxE5jrEdU5MmBbrY3D7rzoqZA",
  "key8": "EoR6snWzXAKUESaQMCEcdRzFJ7a2LnzLwpTyBRe8T3xnLWhkXQfa5uqTZgJgmUZ1kCYge6ihVjiTnCydicnEHzh",
  "key9": "4JT4cEh39tp9rLYeEuNLorBXrKkxXDaLQh91WKt2go7jF6fYh6cgJ7X6akTLfA8UQ43Pt2LhbzcLZg9gsxFCoPwR",
  "key10": "3qTCAUkRWmUbLFN7wqAiSTtgZUq3qR422uWg9TqSPHWiCBi9yzpH7wqV1wL6PW5tiQfQVVcW4fRd1L4qXSAJHqAX",
  "key11": "3WiwkDxc2T4iPvuPUtZRdft7nfnrCjN3gTq8agnMSeLKTfZpstugjSNdq9hpxwsVXz6oB2Zb6gUHiBMaiEjRWio1",
  "key12": "2qCq2ZotqPCd5iM9h6tfDV53sDynpN7SbpQqSoVbsLsrCRMoxxXVKPSQrhcJtSvMHavYG5CFXjFM6KiH9cW7ozUK",
  "key13": "4bZ2G2XC88QTHk9swEwVmbu4iaF7cFTvtE3cW6XmRgHDqDQLmWRFDeFCvZuxesTfibwDeuBYjj8Zs1tfJc7LcaJ4",
  "key14": "3iUxiacCY7ZD8PuzrtXv7eGfyggZqq8j32m83nKX6c1PBRxJqF4WX8nvVRHBNxh8a33iKFuHHWEBrEcMjm1TtZBp",
  "key15": "vmFCdG9RaQMuZZwkANKvsKeN5RwS7csFiEwzzPJxGv7cELSHCDQr6pmtq16to1UGEs6HJ1g6CH1W9YXb1H4DEhu",
  "key16": "2rV9zkurzmAXuQdGPSYkY4NbRQJGHnHnXCr7TnrcB8URM5se1LxGwcBk6JsLepwv9vu8ZhfFMpGiWJ8nJiERetp5",
  "key17": "RNQQDNX7jgw1vt4sHY2wc5cdxuWnRzx3D6H8c9fE9Hrk3FTy6RNxNu6kEQvKnxxvzNovFpWwEqarW7N6VQ3LqWt",
  "key18": "3RLFxVfWZPAgtGCaF6fDniXtBZs12KQFRjXKXGkrunGYjMSmZhSkQTsoGg2xQigwyo2BcQ4zyshSGjafi4Feom83",
  "key19": "eizm8WpyvFQYWJMXLTENGatxSNSqgoGeVv3D7ykforbsrV8hC1Xem4XLkyZrjUERRavVb6BChhFozh9XJe8KrSN",
  "key20": "hChYTn7BjM84eNpVFwMnfdE2yFzBirbM2dSb2jXohpYUtHyeSerJxNNeDgRKJGTDiCTjaE2BNstu3pGaNHYFEQt",
  "key21": "4gzRiW8pDEa22b5KRm4xPmiVPf1xy1GHYCjwBqFdQECo96BFvWG1KUHf98DEVQsGvXtsKPdaxMkhn2zXddCGyrQ1",
  "key22": "PXGz9RQzQdspcarGzEJDJxgRXZT57SPuXDYznsRs3GJwx72Qbk4HyqDu6182iXdWUdh8T1wfiTzE8PAeiw5GFDg",
  "key23": "5ATzyQWanyfP2MfBzH17gkXupFXGPbtNa5xfFDzsQQFFGV3zW74i3eaiK5ucvcVocxmDoaGiN4UgPwgq3EJM1nHt",
  "key24": "BLiKdhiCD6vEXKXMJdJq1LTu3ktHwdqJmUeRndcbLTXsAHLertm4vpJJqxDrioQPxscFLnzxSNFLvfAAFUv57Zf",
  "key25": "nb44AGC3cEoxJenn3ak5spvzeLieGW9pUZEEyyGwZxXqepsfxShz7BeH8T1zyxoj1ZahPz93zXPoDetcjx3tv3g",
  "key26": "5XfrjYKMhCnm9rWrWHFGNjURbfXK9wHwSSwd2jRk3uKyK2enqVBXNFZBYoup4tMJichturFJowzrMujRC19ugnxW",
  "key27": "NNSqvQMSYRSVtcaSy31BA7ousRm1bG84ZhMGg42wucicNJQ8yECgHWKfpzAHMsdmxdSXEdg8nHJsr6E9vbbDA2y",
  "key28": "5aqUuv782EB2pGw6ZKVSxSqSnJ2mPV9NKj4sfSgxfJg9qKJJHccPVeUL21hiV38NEH2Vozces2q1N1rPwm3hoDNZ",
  "key29": "2xi8EDZXNLAg9WWEoRKxTVshsJwcRbmquEPgH3yDkYMPhx5XGSGdx7MXBkoxLg94Vdm8Ad4YkSf5DvmN1X634rVi",
  "key30": "3PjctgKT22JWoh5y1XShVtBW1JXuvuw4DLM1gZEFUAGBviqCBQ9T1T7aPULMz3a2T3wS89qPp3q8XJxt9AYyXy9N",
  "key31": "2t989KAuLUYBLmeC3P8ebdAVCTHgRhaQk8QXcQ7pKspXbm9fiQRCaU7gB9Yndq1eUkV8pMzyWrVCHuCQaetoRnjk",
  "key32": "2m2mdWMoDaVCj9wCbFRUWS8A8AsxuFnaQf8mgcUQhakRuyRterN5YNAGnijeVc1eMX8ME5dBgfqeJyUonhoPxRSV",
  "key33": "3LBhTz7fvkBV64j3Gidt8NSXYL4bUwp5rDNkgE8P4rk5MX1uqr3AVS199EC5eZM34Yz5jNK1GEuWJMkLr943JKAC",
  "key34": "5VZhTY9KW2sUYr6nPv6u7WJAapuUy5aJiB4oeTaytPYrzKaby7Q3PCsMAGh8tFrzrbyGwX466dSRbrzpCqL1C4zP",
  "key35": "3pFLAFBGbQnAFgoMzBsCt3V5WrxjCskWahmWsjU8CyGh1GffGmxgajDyxY6WbZyLQUj29bc1DxDFx57pyyc6LeFC",
  "key36": "YsRVoZtKpg2dReD9KDjbinzCUJ7NjujHVR2kTrHCSnvQs5gjeG3qV21Boxwsc1sQZLyiHuJrS98J6fPj7X9bSQn",
  "key37": "4HghKXTF1zWWqMupcLVBkV51v1gZtZx2LDNx5gnG3rwq1VwWzc7FsCE2fs6dge6siYLgAKAGRrPsYEpJpfGz58qS",
  "key38": "31h8XuGc1jnRgD4xrHTS9FaUiAatynmE2pGXkqiEnaCGaber5mvzXtiCMbfn65YxGtqd7nAmPdxbEcouuQFJspw7",
  "key39": "2N7BjroLmJTMyZRhoyAdXatxNVLZBVDiiLsFp533S4Z6yT4MxHU67WjbbuWFLpoBYooug6mV9VcsFpyYwxJDn4ej",
  "key40": "4EgEwk9dLjBoKoBGsvfQyozYao9ZU4mYStshC8rsv4V2qH4LKMeVNLPENDZsjRh1RaLCHdiqPP2iEHcRvFakUt2T",
  "key41": "5wNtc5Jso2iSvb2iktnnWiuXr8L4Vbfguh2MVibegnYRJXspGvRLWVRpYf7YZWCGCtHtf9F3JBup123jYupYpt5F",
  "key42": "5AvaQjjsmXuSPmAs6VTxmiWmxGVjLiYFstVpJr4cVuenUFs7qAbsm4Boots1EhBaSei4iP3oY9zps74Uqbo6MHdx"
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
