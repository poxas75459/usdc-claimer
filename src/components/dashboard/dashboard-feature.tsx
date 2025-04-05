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
    "4LdxSofWAznYdbcAvJfscWK4H4QcopXnhSXTX9m1NqMXRTFeKpK1GoMgwKGXUnNYtV7QChEMYCESPfDkKnvU1Q7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PnDYaRHBKqMZyFNGhbtNADUSFaSrLznbyc4TcUFBZH8NxAWFbpHoKM4rj7nKeWZ81PuYix9G2jnccSn52Ccc2NP",
  "key1": "R7Q9HxCdsd8HmAzpKNtc4nu1kFtLBrwAuToZBoGb2jVvGi48UvYzDtJ3CiRiyFAc7n7ia7fLPox7hsNUvXUtbV5",
  "key2": "UGMCyzAd81CoJTPE9BJi8qTuRtSWDT5BtbFLQ1gvofaDAoWpdTeLknhfS9eztotyhTVfSYQ1NTYPmfCfY3anBBA",
  "key3": "9HkQeAq9GqZCZCP5vsT3mRR2xZXNGzEq39Nht1iNCY7pXLBacVFzXXVNNCy2Mjm8g1evjWTPuG3dKBuV29cLS5A",
  "key4": "4t43AwdDCffU1XFVwBGSNi3bq1CLeDKxATqXANx9oSHX7fUrrazENruZEvrvQeCSypSjpdRdAyYzoWDL2QiBpbba",
  "key5": "4CsFaRnxiWepf6ixhjEVQjqMUm5k3Vszf1KMvpV1zQMMt3DF9pCMGnVioWxHv75BRHmuTNCJeMtJGZ9gUiiPDkQn",
  "key6": "5edyTu7pH715xwY2V37Vu6Z227N9wwjeQ6y1WSdTWitjrkN6x9adgWABybJKLHY9RVxAL8Uff1EUmftpeJshctLv",
  "key7": "4svF8kGtaBkzJfnUUHatSwiqDNmEcYYMDPvRePFXQeh5kSdoxGFAHjMu5E4TG1ZjsU1Ubepx1iboVNZM7oz3ayH1",
  "key8": "H86mcZX2JcqMFaCtrmeZuT6LkpCaJSmvNnFCa9ma4cwKWG4T2jVmXkkmkY1CJMssRvAzwuMuEgyMcYb65WbjFXR",
  "key9": "5x5BKPRCDWKRXPj4QjeAzB11yXiA6j589FaKix8EQjXD3nJJAoUagyVoy8GGiuXdgN46VR72gMJ2dy9xWDGh5anZ",
  "key10": "XPzQmsUFTHCQ4UjStZrV1afqb9mi3LEuydnJZ8ziNxfN3zRd9tMoweAZBp2CwvXUZheBHk7mcY7pThpN4yhHtFa",
  "key11": "34AXGYkKBXSrx2JPMxFuNyyYM8RaiJSy3pTEEwsby1hhFGJWke7nXEwrwpFtnvPwGEPmXsvutJfrwEjWQ6zPcrts",
  "key12": "qHKTsEkYKsgjrHqpiSr8mX13gPW7Qq5cnaHLdwoif2Y6K4f586XC48fT89tDDovZn6mH7LMGK7HUYFm23oSF7fm",
  "key13": "KXgEPRqP7izvagcj7DayH4QBruZsAQLaRkNAGNxdsK9DnoD6wxY2FQ6QTcqX1DQW228QVrcnbv35K8m6qpMC8XW",
  "key14": "28QV4UQy474yi3jXTJ7k4qXDXbYrSBPsg7snCRMsVtkWe4WWTLFboNDDoJ1HPXjg3kppqNeMG7hyxY1WqzF9CktT",
  "key15": "Dc8Dp2F97g7eCKcsEfxkgHoQoU7AZnr2nCSMBFXEgyRnHXk7q2aU8d4iTGFJxW2oncNZsDtRGVhJwbTm9fv2qYs",
  "key16": "4d2ji98BCnSEKeEhFHy9BTM5ES1emvJvB7CxybxDGRavQtbetKXV2Fe6bSjTx3eVJ32mf5NwYgSs4oMyvtsHUJXi",
  "key17": "aPEo88MUP13HHjcFTtGyYt8APA2YigAzotiajJqk1aGe1n3ESSoA3MWLz3K8ym4zNroG4v8rgbRqbbxM3Zph9ER",
  "key18": "5uUQTdQ7bjQj7LjWDzLCcn5kZo9Kzaue5eQL3tKkvMAUdYnoh77xyDfNoQ1gNxTTtgfoVX1miprunS7KWbP7bPrb",
  "key19": "5icmMqJmv9mQcfX2wxkNhonNCqdLKjpiEjdJyAV3MUDqGgFsGav8hfM1EwuYAfvbUWLi2K3ittg6z24K85HSZPgN",
  "key20": "64shehZFx7Y4prbXrwNUHCTXp1UEpHiUeQRT6KbhzPqWXrJBpsjYFYpy5WjnZiZvH6GNFESZ1Jb3kVL4d41gPdiy",
  "key21": "5iUXZkCidgJefBeuG7xY8dBMNC4qyWekZUGDKjtPRmPtnnJPoYx3pE7dyzKLBPRnMTj9Fhrb4RQr9x2PfELLF9iR",
  "key22": "TB81CyQHPM1agPjmS7t55MvrAA47vUzKkgph13dRLXVDtQsTLfUf1aMq2GCRWfiedswUrqVpRBUy3yBk8QFzQ2G",
  "key23": "2bcSw5PdMXMwUuYLvwnYb9UDqFAAbaucspSMKTPRdSAyi4QjFUxuxUSubCvkE9zm3C3JdZ4dFry2RgxDcY4uX4Yb",
  "key24": "HbC7rFhNQzmy9V6fDCn1kXCok5NpRnxMpm8YESQWrhsQ7aETiEpMX3rvEiMjKFnCacqwFfrp2bdVmc1PKWyq2hA",
  "key25": "GGkmaTPKj2XZd5hy1AVrDrX4c4Cy7uZiyXLDFzLsLceqBcbiegGtN8915BHnMbzgKLEzfrTdtiE9q1KVfaiaMTg",
  "key26": "24NTxS1d1d8HBm8ybyzgNKxxVLvV2hTVeciYEZmntWx9DywDLN9f68ZDLpr2diGrP5U3zdkrZuqeF4bTZPBssbsh",
  "key27": "5mti757mUhM3b1snEYYFFa7qYJFz4FdJht6idMbPT5CZi1dvBitJkJGc8wmNu9XMRmpFJQSAsph6fs2mgDKWPder",
  "key28": "2kR9pdi3bn59vekX6tJCRTx7p18jjjFApbnPbfwBYBdqJTAEE5aoR1RxMvbBvRGjzJVR9P2XVptipCMch4UvXDAF",
  "key29": "45zrDnbMb1k9ArBWqnL9U5K2LnuF9uvuhiztsFRUSQTQqowSgY8xgicNteKNkYBwU33KMeEAGwMeYf3UdFNsZxUf",
  "key30": "3K9QBFm6KSvYhFvGkLWpKAkLK26HyWE34zL3asZvGS5RMEGZZX1mwbQcXgFJcxVezc6rCDn5pmxn3FL41Adagwby",
  "key31": "xRKKibhP37nnu4JsY2mALCriXt4YxyNqDDmv17NNEmh2Cx6cxsUZyB1kdT9dZqw3iEQKYAtczAh7kog1c2M6jwo",
  "key32": "668T3UPVBCGEnXaL2YDLTgBy9PD1uduA22fLALpNGdq4zArDZMDjDSyK5qfjR39omardUSx4rjMdfSG3KBp8D3WJ",
  "key33": "5hd6fS8Yn1aSHnmmcQn3gjA76g2KgHeeo52Y3zgM9ReNW3E96EjxFJx2qk1Ya657HMC6fVzCaQamCkevf3YjtF8W"
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
