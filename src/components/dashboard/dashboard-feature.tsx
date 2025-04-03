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
    "4CS2m8pZPefeNt8vYkHukAMfxZt3Z366k6KzSUCEWYuWvpr7F8ds49qzcGDhR9QcZ1CrW9Bwnw7AUXU4ctRi46D1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WEUmPBaCseUwhVJXnm5ZFPcjvPuQhqLVg7Um7BgDj4W4SwS1KLfwFt9tipb4bApBL22TvtdHj6g7jFw9NbgFjMb",
  "key1": "4kVB4KN5D7c7QKVTv2bWK1FUs3UjsqhDzc4xvde1TT13bWFmqhatwGUGVZFDKTJwFK8iLPkrLWvTQkoNuta77zLf",
  "key2": "2M7EXkPRCmeiwfgx5KnHEJthPoNtf3SWHYxuh87ywTKyMr4bWZuyU9xVkHGuvRpqT49d2UoUKruHiGJAq4KWoXqJ",
  "key3": "2eBd7E8SoHf8Z3cc94zpnWZikGpWwHXJtggmXHVvHn73a4L4acgwZ3ZHNfBejLFRNL6xYcWgsCbJGs1Gwy4V4uN4",
  "key4": "Fgaa8p4B8KdM8sfd57sVFq6K6xghamEjMSXqEYXoppKQCP7HxirXfybwnCRBHhjwnsZnjno3VL7LL1otc6Mnysg",
  "key5": "Zdg3khoJV3gy4CnzpW3TPZoxFvfMPnoLNktSwUdhpZjsYUFNxcoDBc8m2RkfCGxvvX7zSBJu2W36qNB9jiWzHKU",
  "key6": "vW9MX5txteAjVSue3SbzE5hYj9tMRrB2i9iqbGTsJPjtv1NdoFhP1NrgpjsKoFHzthFWZdeNLgT1o2dPwgdEque",
  "key7": "2rgiD4WenhKumM2Sc8D4YNMVSfD9EGrEVqCksQDV344kH1Wvu4fvDD3117bXEnFdZSC1JwVE8uBrePhB7pNpFBcY",
  "key8": "3fsJ2yqQciXZpTtDtg1cdnGgeLTBPcoqpnht6mBAKjJa7eJ9by8rfqp3G3PtW4Q6YQW46hc5dCw1uXkga2v7XVS3",
  "key9": "4HYzGBdECtqF8M6mKVbx3VjFcbUh4Bdq7i3EKc5e9LzX62m1fTRPAE1DEJoCiqKhu39d5sV4gz8bd3cgTfYnhfrB",
  "key10": "5VSnMGxTVT7yHn6pY7qVds7zkziRPKAEjhzuq5px81jBe6dTjEHMTxiuSj9wyz6PqvLMxRcMPCwvpu4UyzfU1t2c",
  "key11": "ZC3WFJgtL3r7d8evRLQQ6UEKng23fs6UkDn7JWDUsWzbKw2fcYdKYCZxkEhaxAAjpY2M148YJL2V62xFQ7PAV9b",
  "key12": "3GFQ5oEXG5wauEQtzhUQBATDAU4n9M3oqbMnazWSbtSBkxgC1DBqyDPCJjTT9qeeHn57R4TMWJcCcUmNnoWbgRAT",
  "key13": "2QMn84JTEvLtDc78DmWzSApV8yEnW1hx6aP75LHiseCEaWgbnn6BMSAxfjMdv3gS4ySA7ewnsrF4qF91YUkrStaX",
  "key14": "4cxzmTrpMShft38FGQSKuWWjsKXbLk5ecnVmM7gKieuHzGgGkssBMPVEgdHFCDssCLvZufucRPwF54Zdm6ehn1j2",
  "key15": "2NPhhsGh4d76yAFc7LjGBUwfmXF7yn3C9eECYqNXFxeiZcsXmVE7BxZZ9Eu4PqvwsfM3o6L84xWm5bvubsV7pzYe",
  "key16": "EP5KhtM5FUwi3BvZXfA1i6XHwuVAi5uH2rUf4y6LMdz3Ephw37jjDXEvz2CwMNRwCsWTCECv95mRFvVBh1Wm94Q",
  "key17": "2WaLDgNdbdHSdkEFP5fnxQqPp4bDUtanf3CpG4Ksif5UdeWpgJQB6wjyumJoxp5DAhGtwtsDz8ggCNsyy89QBdKW",
  "key18": "5JbdFG356ZfLwAJRZsS9TvSX8vRTiFTiYMnXcjo3LQBfTDuMZjVsmhZpvPpAMvFAQF7SBWr43HVctUSpg3iKoaz2",
  "key19": "5ifUZRQMyfSBQ1DBjitSsouMgbgYD3MVmkQUxcnxihxVtHSReT8TMBGf3mX2z6C7bGkAr737P1NiJw61rzzFo1Nf",
  "key20": "2UJifrj6hvs3iZZCvd3s2YCG7gTkFx8AmY73XHhrEkgb1BJKx2GwGfChGLzZGGV1eLDigCGmLm83GJE73TZeS9bQ",
  "key21": "3K77GLgPH6UX7wdpgFS8CJMasDCwqfZcJGBna1mGBci4ZotqSWfqWfZsEnFy9C8yrRMK2BzJBi3rWfdeXD3VwHGn",
  "key22": "XW2fnu1sPPDGUac5QKUXXcscJCtnLB1tDWyCBKXYpvWAuhVjqyV5k6LJDXdRg9dwepAMoGPRXVxbvpXFMm6PsMR",
  "key23": "5ofG7Uba53Fx7eM2kqnHGPTNEEqLf8qH8q1uTHLonxRtD4DhahbHx2pFfJgSdT8CB9AePuZbsvucEnMnu2etQVRa",
  "key24": "2c2rcuWGiNaYaQHJUuASmB9UCdTgL4YfjxZnBFpZMbbFjhDKvMLYxifpx1SzMpSQZPHvQBNAQckkLFQNoLunYvct",
  "key25": "5tzdgcBKdAC7sCdmgxDNwhgCAu6vywJphcL1jV2SgEaFbXaxUUtzcRGjrA7ZyQjyDiqB7x81kWAFR3Pdkt4toLCb",
  "key26": "4qb6nR87ZEkSrsePTqfVXzuTdaa7eeVEDGqVkByxQkfodunbxE3bsRYL4ZmLoWWStUKVQMohJHon61UxraSDvdpY",
  "key27": "2Ugqr4faJNuRfgATcCySffi3DRJ4qnTFG2dfLndAEFBb2XAv7Moqa8N4MRFRdW5jybLR3RXG85w3iwNpd16F7ckn",
  "key28": "5kgyoNpWwuU1rh4byknkSGMz659zN3bsZ1p71uwsGJLxPgQcvjMNEk3gqcVESUy9j5MYPzXgVRqixdEB8gqfp8nX",
  "key29": "3pJZCNcvC1FD7LWPUk85srb5CCn7CNFA1Zx16tFqzW4dd6YpXq9iMDSroXV9b6upFGevv2Ypo2dtR22MTWKMsUah",
  "key30": "3xNDpvmhrykPQWZLCEgxK3fmMSLwGu2SsBafZh2GGZHvB5eGeP7rkLcDW1J6LpCJXVD4AzeCKxsxNoPmaNYP5Yn8",
  "key31": "4KHKbfSmmPdCyThorhXRPvLaTpNv4Ve6pVqpjKSWjfywEUeyVaCwPt4ponRzZhGh3zVfWJUX7gbzjHC6YjHF57Qq",
  "key32": "2QG7hk3HJfURnWo1Kz1qba2boUGJZbFBaNC3g5fbUZKUxNaKmTjKVwrqfH7vCQ33dMpj94fMQj4Sp4SRrni1VLjX",
  "key33": "3AsiW6LDQSbYKRjxP98Bcioidj5ULhrnrdPY3znbQwi44r7WP5mw2KuNDuSmimX7u59ht8aLNBtq7Z3jkNMGt31k",
  "key34": "4gS3vVCxTtnMUyFoUusPNqjGZm8g6qEQXV3BNh7KuepZxjMJ6tUXufKkZBRinsp6FoJKp5wmJ8TNXpEfwg3ajv2y",
  "key35": "2mVD66M8nXLd49CYRuiEgvfG4ywpHEJczAEyTeZMgc5yXCD8kCEvn4TC8tQVL5jJ7ZBwGBjNUZ54WrRHzKmnfUHz",
  "key36": "59H348K7tXbuy3hypwpNUocqXdgz59hQ59uMTLoJ69K9yANfcYz1FFGErBNNJNnG5P2xHudoZsSjrt8PNwx9hBzC",
  "key37": "3a8seE8A9nz83rpJDNEXwZMUyVKHHmiP6EkwL8CCJRF2Fsd7FoxDmk3hTdxXRThs841Bskqhqjpkfk9KkpddDUFq",
  "key38": "55sb5XmrPJxWZ6M8UNkVj9Vms2hDuBhK3Ftj4zzSFKWqQ2Nh51gCKS65XraK9s5v2tebRj2KvCvSkg6GXuTkKVaR"
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
