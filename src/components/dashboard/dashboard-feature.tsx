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
    "3npFpwQdikswo2DYqeFjXqRHTjaN2VdmerJFJSowY7zj6j79vZTkTmWRgD8UAd3tAftqRB7m9WyQxov1rieoYV16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EmP7CAYqD6U6vyRyJF689qTT2jSAW3QPdcj3AEUxrcBKeQ4GnCeVC8w2HzbU3Kqpn25P5h3yoHgNq1mj71nGd3C",
  "key1": "3o1nyV9jtzkED76REpPXz8wVZVZd19da9x7CY2QmyDH2NgcVbJN8tkjY3ZF5GBq9WMsvwFPpQ78oYcJTfvGzmue9",
  "key2": "2rU528BRgRAPDSKMvjW2SA5zkK7rE3GM22QiBb1TgADp6dN2sEGJBJ9wwAdzKgWE7yssisJRHSYrF64SPPkZb7i1",
  "key3": "5pp4P3TCnKG3xiehT2riLV2xyTrP9bqmGhmAt1n6LPncg6zDDpqBDiA4VeWgZ3y4AZQLcQcurJBaFwDmWZenJjua",
  "key4": "58vQr8Anb7iSYJYK3TQGmDg3K8JevcJnYmEfBPq9q3aSFaawWAR83YHERcKWcf5VKSdrv62wsT9VWKbGaFtyYwr6",
  "key5": "5df6Xm9YfbUhvUUSo6MiTGcbC6Y4dTDrzKWtTdHVBHomQUeHwFi5d2RDC4qhDnAfmsD9yTHQBcWsxH69gUf4XNrG",
  "key6": "57xsc5mP3nNGURtFcvMkEJFxhPGfiRnbqkmLqHZWw5DEkCkXMHut9T5J8f1CmYF2Z8JbyjdCCEh3xkZcX7KX2thf",
  "key7": "3fCc6dpgmKNms3XM3oeTKDw4XsdM1PFot9RQp2gCRYP6oKSzGwLSSoDVfiWrNvSo9k5hG8e2SJ4f6jDHNkPACvSi",
  "key8": "5ycywnp6CK4L56wq2u4E5bMvCprizsQusv9bSyyiBLozuMmbRgNHgCVk84p8ab8pkCDpafkw97u99zrRG4qYdCgV",
  "key9": "2L6i71z9anKgdM27WNHhGmNydKvxQ7S1rzGwVppWgydraZXDLz3sW37ku6EmAXTstLByV8vhQX9bhzF1ftSNaoWz",
  "key10": "5cjZoffc8tseKzghczZ4obTyxnd2oRr67scGfoFbRZiGdiuuTUrPi8psTKuWhLrdHXEKMAKrVsDSRUHiF1e75EUH",
  "key11": "5HZXLja5XdaconAZGbgbzdw5p59nvf4h2ZDSMCRc4pejWGjwPtAdPsVa7Y1E947JXqosnnBt6dnriNtErrFphQHN",
  "key12": "37XhvbfmxzRB64pKCbywsvpaXicjYMgNe9DD1VYumtLSLDTyvFBZ1uBpWfCvy9CcTa6akJp8jrVL82bA27eh7eHG",
  "key13": "4xHPyyNoBiopbvGxJYhFDWr842cyX5Fr3YQ66Pte4cjCuFzd7raA2fHUB6YQcZD8CDYbKi6d5S4rKe6JGmzgM88m",
  "key14": "2pGA6P5PWN21dUH8MBgLMkXsBEwEHEyogeteYuLgWT8FQsR3wzUY21BFoeMCSDCDnnsb1GPWq7psRRzvAQW26w9Z",
  "key15": "46m9a1jhMR3mJZRq323yQewhxJFZX88fa3WCQtaJT2wG3dBko27pFyB7YYzFTCGhUVhLXYJt4GdwdHQUsfQk4MVJ",
  "key16": "4MtEVQt8WxgefdzYMWVJNRcQyjU1PnmG2sniV5gTQp6BDpunvSztrcp3GweatHoqoXP7nUAjHmgKwFP91keGWy5e",
  "key17": "2sFfdqh1CRXevESS2EN2Na4ZPzZ1YfXKPUzQNdFnbMEjau3QRitJe5mfSsdLoBJaoJrrrTFt63tN3knksE4Xh992",
  "key18": "48gau2Fb55z6UrPzd8YCCSyDQFh3j1FxE1YrTQeCg9Mcou2cyGixWVXnyDn3WyaVSov2YsTVm8tnKvzAojq3n3Cq",
  "key19": "3kzaaQerwyvcM8C75n8muwBXNAo6i5E4XMVJvBLCYQtjG2EQMMYJxKoijnA8B5Axcv9K9QWjXo7DSPvHNddECDtE",
  "key20": "3E5WTtRFg5db3TaHhKCTT22YBZgKrGeq6AKd2j7srFPq3haJ8PsN9sqB2ZF7mbTX4uu1hf5WYyC4WAuj3BwzndCz",
  "key21": "pt8UyDA42rZLow2pXXQKPXu3mcEzwP63SzL259xMMS8iwWFzUB22ECtDtr1N9QCQ4aPbnSkpmfy9T9ZWisuzQsS",
  "key22": "35da6K5WeUNDqwtuEEiN5abua7mpnsHV7Q73F4khdjUip2NtLhf6DHsmCFArV2qEqwNToyXjUdhND47CUkZQgyWE",
  "key23": "3BTwhAT2a2FAiLBZuSfjCMCRkNjf3oH2dsSZXrP9kvepEDy3yNpG4ttze4U13jJwJDcfCkgQKvzd1b8qm9ePAZEw",
  "key24": "8vwFnNHFNDacohwGpT5s4bnM49XagqWseMvx2Dxs8NYqKxtTqEzTY3p9QgUy5NDn1BAanDcW2Wz5CmieMBHHgv9",
  "key25": "4A96FgbKzSHSrXGKFpwhtqF4UNqvkamfemKqdHZvxHYn7od8i2u56wANjqKQuF9AUqDrKFqoysugH2ZmXprCqzPr",
  "key26": "5Jh6CMQD6kPcXzNyQWZYqf7nwPDWX4PdxjJ7dUX1DStygw6gNELkLmpx3CxKSwtb5tpMoLqCxwbRgnhmFcq4jB9d",
  "key27": "4GCYLWwydwLpPcFvX61eAZ4CJQmU1cpFYxAT3vKEEAdwZPAZDuMpB5kXZ8zg2jHJrsw1ES51PHEi9qANaAipVuQV",
  "key28": "3YAXi7i1JaN1t948Fp3P2EstarkhusEdVrsmBfNE7YEBfCQgKYTraK24yeQvb2cm6ZWocwDsmpi4LB4efXyTxkV",
  "key29": "NvXFyKdPYW6kUNGjtGUC2oUiXRiCo75bkVGAeQXt4H3DZJjaHN7nVpuwXb5t5TQfAu99xTaZDWgekGssjEL5Baf",
  "key30": "5x1Z1mb6Wc2vVHKUmwSBqtjH19zMKPvr71UV7WfEVtWQ7FXx6cJNuPF9HtLL3mjmiz55YULXuKx9BL9FQD5z7ccP",
  "key31": "57witVyPRSQ3kjYnvtL3ahy5uFGa8V1PWksUFAZ4muPrbyYNyRfizzqs8ag1VaA3ZYZE2jXF6EiYFEwbRJTfeCCs",
  "key32": "5drkuRToLoGYQkgGhYt12jRCd338wvHRgiPgbTFMSR4xzVqDMr4JfVwqU89EVZQLPtiLguxyE8qFyiTrfte1JMja",
  "key33": "4s6ErMSBufrmbmxNv54cDc3j26C8M4wfdgE6WRfvjYrPBKxntuYzq4XgBe5S5EaVDRcPGmCwMngzu6eGRUTfMxK9",
  "key34": "411grvss1qqB5Qps1BoY2akXRHWGAYqEitDesVRhoFUGde2NjcNnNTVU4eg8DE8Sw6zSRQ2hoegqw9DvjsXvHc8H",
  "key35": "33baunz97FPGmuK5ctHMfXrpDnTEowRYBk7ZFMYC2uLyPUEB5MtpUNbBSgaxvbG4HzLxfDb8L5Epr7NSgHMSBPcV",
  "key36": "3gLfbqixwksrHeBNj4kjUYWcFDaw7hNfwLyQfnXeSaKcT2DkkusSd3ciQHJTTKhCw6W28vdjLtfFz14wtQS2BKHR",
  "key37": "22L82t4hWn41zEV6NXe7CTm1AQfcfXgjodWhdhZhSAZLmYigPh5FpbxAs23A92s1HuRUgw9w98TC5LJhdiDPzdX1",
  "key38": "5qL8SwUFXxMdEYvVBxseVTZRStymd7iyGGBmyGiQYfv9BkDxQLwQjJXneo7FoYVurNzfW1o8TQM7wiSy6UnT437n",
  "key39": "4yAvZ5hRRbV6qFbEU4MBiknF6bjCygQibg3vsG8TbMBRytNbD5VeP2Zvt9SDvAS97LPotP44Mp83cPX3m4CRBw1",
  "key40": "dGXVtKop4SGhcxaHVHAf1cwWQhC56pxuyijKQFdjwy3WpRWJJEf7nW9EKPZhjdExyGUQBmyxq91WWDcQ1zp1VXm",
  "key41": "616R8Y8uQZw8qxkuHsEFnyHVvi3EzbNovie6CH7JpWENPPxsKPMKxkpdgd7v6FtuDpYaHNaUH6W39Z1722nU1zNk"
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
