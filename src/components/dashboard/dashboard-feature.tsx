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
    "52rKXCommPZQANodG43jNqdeHTjU5B68XX7pHS9BHfTP8tddsTDGh5hawSWm2pee7ECj3LGicN47oUx3Y8D8Ymde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CAbC5hYyvzkLfvM3CoHX5kb4ppqpNuW6uh39yCdM62dHuSQRFpuHM9MzSyiNvvZUvHEqBvtCiuVY64F5sps31mn",
  "key1": "3FV7gmthb1mHeYZnMWbrrSbQTRQBJth561WoJmnFQN5SqPKQnJVYYdfr5h5DVq3rchKWLFyN8L9SoGMRsbZVi3aq",
  "key2": "4LgE3rt3ZNnwaY1CrQXAC33FApamV6UsaDJSTg32rqNsVSF4eUkM5yypKHdzQtmqzSWvoqp1irC3UJ2DeV2rjoj5",
  "key3": "238gi5mvFeVYzCLtkfc2GWf9CjCp5UPTjB2qg1hfqKCJYbShGvGoxtzCV4ygvqAM34FoztuVkpqCQKAwmrXhG71Z",
  "key4": "2FdYApRsqp6AbEtLHDFXRxuJtBoT7zBycoUsGM8z4qxpJSodWcL6WW7GAFp9uHwyxcomMqE16DwWDBTaR8wD15X2",
  "key5": "3R4nJQDnyrLnurrQrw7guk1EtkBoNRkcA336wJjoz6q21uUSPx6NEqQSaF2atKDWnqPwrsvAZNzVyZQLKE16HVa9",
  "key6": "2yCU66TVz5xVGPz3gHkdw3E67syqrvxXfprs6EDg7c6ajaSAFZCzPhJsCztPBww2ngkGgb6FbgbbYmntuT8LwS4T",
  "key7": "2RzY8mGPxQuSwg3kHVC3qjKYC4AcotJ23vZYLYkFAJXYmdzjEQNVphHnjUf1DVnVhp1Lta4Hy3toeW6VJVstonZG",
  "key8": "9YkcMjKevxaLU1chGCPbajVVqj4jMJXaez9wdx5WucH2Dv7T94LZno9eTYnqbLfdQEKxwXcanhxraQrGdyswpQr",
  "key9": "2ZY3BUTUK6PYAzc3mNLEUzz8DqnKgZTe2UU3bAB9CzPjesHXZoV8oXy3bx9kwwNWNqzr7LWQt8ejGTZycs7YfhY3",
  "key10": "4kWhMWG3sRr8kXrJ3vibLmfZ2nsyTDD23VTd3r4e9LV4NMTqRohs1kaQFEmVexx6F8Qg35mzTCZWpPt2XTJ2Kipy",
  "key11": "3ewc2oLJWvba6KBAP3EmjWC6gvx6SY6SrJzNiX5YnjyCeaTpytoGYdtWLgxLERPdbXfHUSbKRSLG59KFxXgPXqWi",
  "key12": "4b8ySHHAaTZYhZQkN8GEexebmUnctLoswRdqRGvgtDjicAuiEKZNoDwrsBX66ma9Yy4EWGVmxpkbEkfVDGuNo3PC",
  "key13": "4ErnwEEP34tUjJdjeCvRuMTkvfzyDgjVhhev1f5T1vCzyS2YkD5iJFLKSehPMRME44mL84wFgqjapCprERDoD5JJ",
  "key14": "64J7etb6AL6AVRB4djhoQFBQDuDmxFFmiNzD9ECZbYV9fwHYbQZj3wfhrZW4YMu8JFTKsoPpEC2x811SNgjqPCbf",
  "key15": "4VUbLrWESohV1TLaBrcVie3GHPTWU4qh5sNq35C2xmDAELJHPhxNMwNC5MgLwRqvxh1rkZRCsZoJHrUS7hVhxiPj",
  "key16": "4URjmJLnQCqj2zWEj75QtMLQcGYrGAYdgfgmsLaCSjVgDQ6wNp9k4xwcSWRgThA2LnpvV5EAV3x5WqaWphnuCwDy",
  "key17": "4wWrFABRx5SfGJhwr3BJQ1CPQwU9KvmdUiexgGDkghyBJxfW336MsbrcFqy9dpqUb55yHUCdhT55VpbJm8S1TsWo",
  "key18": "5Vfzn4SFbGerMBP9ouR4Y6cE4k2zQEVYc8L7YduquaxWhAN7hxrB2ZJt8xovreSQnakqThmbHHkTjWcsHsUtSUjg",
  "key19": "3v5P7DhXNV3T2ENE3HCR5tk6SxgDP5VPqsSqFFMEEvp51SNfn9jFnfwgDc1D1CEQSukshrcH8GvcKRsX1bdhvNcn",
  "key20": "UbLh254vSfoKsKKudsMhuwSQVZF1G4oWgeGqvZXmzjatbkQbdfq1V6umjzTuAWY5B45cqDcTbBTDLWdCLWkAhvE",
  "key21": "xba8Go9AH2QiJpy4RcYHt4tUHQ4PjL1saxT9wDmGXTVibEo5aXwgG7hMAyM9x87pra4phaBWNSfucLVZd4XBeBV",
  "key22": "GTxPLhZHgULSFkoUPyjUEs1w1VpieYUFCr4HFSdSeGn5X4HT3pU9Mqc18yPKbENSF2XabqyWMRwtTDMWXpjN3yK",
  "key23": "3KXGSpvNkgm3qhLBuad7ykoQcNCzNPJejHvuLNAMY6ek959W86LYhKvVf7yEoF5JC9dQTT91o6cBM4hkjrVZzKKX",
  "key24": "3QDV8K4YiDFZT73JjUpnKyJELyPCTnGqkddAmmxZicJz4G9Rue74A9zCBz8zn6F5cA2FdFCd2CoB341dx16if6Su",
  "key25": "4bXpRb7utU5ErviroFDkJnJ4RANRRRSFvtHyVibGv4KN6d4ZHSsR79mXcJK4UgksFVrdhV3S8kZMn1LTDhA6ZRqr",
  "key26": "4kn5uSXAUewdtAjaNLcjSRuaJiEXA8KbRu2c6p7zPjw2ZKiCrcyzwxAqpkQ183nwRioaURNLxLxkRBLLNmcY9md3",
  "key27": "q2JYmrykkJxVfBofgAeoip8eE4JithznzY7pYAU56aJsG7sgnwSUy3qi6GgzkeC6TgXVaVN4JQaa2gAaCroNKt7",
  "key28": "abkBP5WUyCuSD7JiEPgXcDwNc8VaGZmd9boq21zDDY4KJRDRSQ2CJF6dRXYXJYCdJr1op3hLkogCccGLBaP7yzF",
  "key29": "4VxVThKh8QoRQkm9vRuAooUusEujoaCLtAVM6nTAG8RkfxqWL8NT7vcGaZ6mMGHKU1pyKGf8FvTQZGNfCxHqu4Gi"
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
