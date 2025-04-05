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
    "4Lq6ujdbfRG9uBe4WPdPTg1PgFaY5oit2YWLANLX691qGpg9W8zUwhQ3jjEXmt1RTij5Ke6JKfGtqVjm6GNdwwop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22qT8PWhUgGvgNgfCf44kDfx2jSBuuqbJy9gHDm8TTmBURXj8WkPriMAHahh12Jv2KghCcJtodRdH1pC8TSCcMYU",
  "key1": "51qamfrrzfyqjSfLXdwUVscEEzmvy2DMTDajWrKttWun2TDJUMhvQEgg3TpRFnc48RZduHaMwBc5G5jGYpDFihHs",
  "key2": "4FxXeEjFXWNVKXyijzLxkcGeRPrBkr2WF1cxhDPa6HEuUXmXGr7qNvfEsSzcGccv8ADrF6vw49KEZuRXmReo575o",
  "key3": "3DW4GsA4GCNMe4bfC7AjYRWb4zpnnA9DPX4WawJMDLKNfVrumQD7McLZuqr5WA3i6zAd8VnJsUDKVTzVUfsCVoaq",
  "key4": "2P9WzhKdrYPi3W7VrvEKb52TFncGUxN674hi9H4d5aNHfmHrM9CeuddUmwmbXrouWwKeBvMfaXWkeQkKZ1P8JwRd",
  "key5": "5LKxUt42gtw16PmkPc2XjixZ8SLVn2QLkG7Meom4d3DETcGU2uh2aGDaGca5gEuiCdbZjgLTNzoDaLjvhiTmBMVX",
  "key6": "4kEXPiDQNU91c9HzZYTFKSp5nje7foaK8M3Bba5GTaRSNRErpTJfv8o1mMorvrJvmLUj1WGfJNpevLahz8VRkvMs",
  "key7": "5oanQwMWT4Emm3FqK2q7wd3BMQ1LhKWo1okyi7GRiecegdX33WtBZL13FAyKxXNmbrsFajdB5vbi3ZYL1bbZAQjN",
  "key8": "5ms7PpUyrmfbc5LX7p4kephEBTxrcQGKGDuvUWxFkybjxsTzc1JSaTwkw66396VWvapmDqCVkHAwQRiNoYUiB4Ch",
  "key9": "s964WfMfQgo2pL7357oaGE6inGEXHdWh5utuQTU4toBsWoutzcxG1vJ4wTTDPAp4eDPuYKe1gLz9fngLedYixEf",
  "key10": "2bhEPZtkcupXioEt33Evi2D2pr3JEeWbFPbDwJnnj8JyXvZrGMB5wbEi7P7iftozcS4Tv1XLbA7tWHEiTDuppTuN",
  "key11": "5D4ZKxEnaHd1BbKmJXtUJ4YwNcTSFiV9BHrxLv5vmdTCZTZkzF6W2FhBzTLqaFEZeQRuMtvSm8SqAkAQtNYCyspP",
  "key12": "3cMjHWCmJxzfFH3YtSjQ69RduBpG9LV57qsH6RiGTUgYR1x3TWygiL7ZrRkzMN8TrnYuTZ7aW1psPAbcJVTe2B3o",
  "key13": "2LgLsY9KmbVEFPRdDuixfWRneAPK4g4xzdXB18ZPJ4GomiSCBcAAKY11d8M3MefTLBSAfBFotidGppB7hp3ysFKV",
  "key14": "3dYy9sCDr4mtLXwyjFzNRh4yS23BXxBGapynW3SGi6ebFK6XEZrXbT2CNLheSm1K5KytqYyNZReUSJ2ZHVuNMatk",
  "key15": "468uY2Ac4jsUMhNRxpKrk3JVza1VDsKi2P42w8DWekZgtJaW2tsRXTcavudJveyPLFgipTbnwiYXCEVkfeCBoqys",
  "key16": "63wuXVW5Kuxd1shvdgYdzFtaucPT6BBBi1YZ9N9MtaoDM8vAgF6WmHdhBmUPPVVRsRLiBX3Pr2Z6JS2FGHrbdKbY",
  "key17": "2xyRbJrSYSSkUuJncHJAYrYnLfTPKDjkh5Jje6TsGtLNsb1YuALQ21PZnRksVVxHE9AidMvaUVyYVuZoMU48LnGP",
  "key18": "2xD1HTmRKUijmRYzjdznkRXSaMaMKzCoM9jrqCVYDYodZNgdPSizd5ZsLaEpbjFz2EdNbVf8L5od14wkLtnuvH8n",
  "key19": "23WxmGJ2oAHZbRB2XS9q5y8HMN9KZKTMdDewfihW5HfDfhd5k31qPPzshrYcfpnLxHicHGNgHTBJyxqoihbmSU8B",
  "key20": "3wsx67uicdM5MXUouQL5VFbLwkFmXmxifLdyBao1Le1vkMZhXFUSv5QC6G3Gur8JWi4qu7fbFGKMFYcAbEd64jxd",
  "key21": "23ihrorCi3k6PGd8vcQq2sFpGcNfW4SNAicuG7FZBVJCGG45EmNfieRcpsgo2md2d7MMNrYiChxBvB6rX1otuRZG",
  "key22": "J2wDSCxZVp2hvxG4ZLmBX98T5bFQz1KVQQqqEtPhVsVpeAhq55QrVCgBuV9oMxeKTYZq18tSozE3zzHBC8E61G9",
  "key23": "5ebirxVdvyDUt2d8nY3eBEDA63FswUB4HjS1q9TQYcNuH8E8rNnLoDuzQgyYEhWVeWE3sWtT9jzkka6BXMS68Rm7",
  "key24": "3yisFsN13s88UpWz19v4hegBsSjC7daR6LWuHv3tSNtSvkCwsNPcSBAjSNr6zv3PuAkafnk2kU1DT9mkccy2Nz49",
  "key25": "3C39gwjTxUd8R9UyFU2jPKcPWnabZHi26pRYcwHeJeToyiHrwtaCAikVWHxRvtgf6HGHMrqedS3qoNuxbYi5YqU1"
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
