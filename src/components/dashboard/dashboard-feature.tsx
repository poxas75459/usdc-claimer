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
    "5kCHKTtkzMcNczYJsPwqbfpJsmGTQrVzw8p3KAtARiwE4Jq6ywkYzy1t2xryMH33DGikhhoxPuwj8A2jyY3QxTUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j5Acq4VakJbBZktD7DBQpfkD2A9Y5HYWQqFAKcdKMiGLvmnFofwqRsyyRuWDk8DwFUy8GJkjx4FGERiGAeFXTAi",
  "key1": "2QXRQUSnabrzWHtKVZ4C1oYyWHfYdC27JvKfhDRwDZsraR7Aj35nEeE25RgQNziVLMgaUbMCG8FbB6Kr5h5s45LM",
  "key2": "31CVqFtbKCHA93JY5u8VVbE9qBURr4hde4UoLe7Vt1JCFhzurk3gB2rjMRN8yRfgm6KrjTeZTinjxFdt9ZoLNeX8",
  "key3": "3GHPDgPEiW9zHgpEfY9nkjmZMjPScnLsKCLeDiFmKkkDm1mEHAyzgw2UrZCTa8iUoEzMiKPrGRCUk4HarAjzLM7L",
  "key4": "2aBa4Gcv6FmR23YbeuwjF4M8SNVB88Z76WW8ELhFowVQ5edvMroUBB6ZEawNYcUUptjqnJd3B6bS2Bbq423dTxxq",
  "key5": "2hqYs4MQygzKCvy2GS991mj9YwojWZANZzeEHjNk8qEv2mv24M3YDNGGJEUEWXHUoTraJJvk8zvFTpHXURNECt46",
  "key6": "2KJjQfbKrbfFR2vQKkju7UP5dhb3hLwM6un2HaE2Lnc8bn1JpgTFebsVZPfWXnaGsJjY2g7yuGQ3h8TBit1G9D8p",
  "key7": "F9qAiPMPviDKHxY1qRBgCLdvvL6DGazWTFC9rbyT8YtYnGFxbba4AyieHYJdghYRtyPqjrkDqqAqDpVw65YW5XT",
  "key8": "5CGT43sH4f9w82YHRodks7J19SGpHCHruQetyTrCN4v1iqVyMsD6ZmSLnBXFT4hfgaPPttK3wLRBioYFkB5hDkem",
  "key9": "T9bWPoNCj2eHhbWFTMAYKvSpBdTf8RvrkoxChFHFF2N8bJnqyYcWKhASsxf1ovntPPgSiW9MdjnjXCMS7CUSVcz",
  "key10": "2ZAgzLxqY59Q6EYbEBsMTJqSr6fAkA5FhrPWuktWPBJ8CkhbZsCt6VWUwKrFYF3DPB1nK9fWz19Wqy45Bx1Vb6Li",
  "key11": "2bgDB9ZLXKaUZPmp83H6nRJh7z9gpMcYstboNgxKj4rpWyrcq45WdGE3LrbPxAYXcwjqSyKUCyRsqJKWzbjsMLRW",
  "key12": "5cUFhspcELkdG1mEpmd4ybCP1fqjDynrpzkfz87XRpJotxQ7UYvjHpUgULP6bsQSN6T1i4VkfLSFognFU4NEmChT",
  "key13": "4uP9EKY47XSQu3wD1hCWW4Pj36oTx2XuqyAea6SnALdu3RmuHyyH9UMD5N5wJaYdqAE8LyM989tpLV8EkaPXMfb4",
  "key14": "5U58tVCk1TUgY9LfVzPcgqi9Wrf62RnwMF8NEMeVNbcdhVDgsZULopp4zrxNTufngSgKi1z3YS2FRoGVdnGipK4R",
  "key15": "4N8NLTZt5kpit2ynfER1A9bqsb7EGreR9V6TYqztyJzQu9xdXcwMWMooubEcsyPqVuuywMNJn1117mRs9cmBiGQp",
  "key16": "53pwYFxAoXCNbJvwQARnUvbyjt7NQep3YLnLadj4aRtc1zJEFNuLidnao8xxucZ3GZRaP5Qgv3HXZVoHawWcVSMP",
  "key17": "2XX2cWQXdTdGnTt9oRckCdmcHc7nSMF8cZBUcbgB72TTFNd9LFpMyWQ1Nv3RhMoYW8JrjFkaAm1BTQYg5rf79d5G",
  "key18": "JaKBmpfeEay12qzoYj5ECWuQGTdePeTMJxQsJayLX7udB98A2g9T3QfN71xUhBsjkqdsZco4rWNkSP1KqfsoW5F",
  "key19": "5sKmC35GWv85xxWMxYFqYGMGJNj2ZbtV2CuR26dD6bCdJo27E7WpgYGPsNRzVK9mrnSU2XRdPFJdPfzRrBNvpL4g",
  "key20": "3f21GaqadexnyvhbHSdscefKaE1ZJnjURqCrz6bgz6TFm1CFPyrJkgggMRFp84hVFa2C8ukycMSXk46ArMa3GUJr",
  "key21": "61ApEA1ejMYYWwMGMCJGNUPGj67smrU3xXXVdRSbRNVAPUDDfsJVzACgHGJanuFMoxE35GnRJUB7hQAVTHE94fiZ",
  "key22": "PzQCywkCCmwCZhQB6EMH3jTYJKYkmkLp7TMmFM5me5ex3qAc8cCkxU5AS4mavkurbhsHEj9Jy4QteJS2zrGhKSp",
  "key23": "4kadwUGuFtuD5iF1yZBSMPmwfDC6ezadstjUXcwxxycyD3PUq2JGHaV5qbJjDBRcs9k9S8fwPAF6jh4t1gmEFNHQ",
  "key24": "4JoJjNa3wFSMufrVzF9SheD9FnApaSocKWYRUwA8MbeDMoitUsXehyg7r5si91L6XTTgFknDtb1jyWazDgGkodc6",
  "key25": "2GmU3QyGxwMtR5u5ovrK3U2BF9oGEFdH2foQX2QzqG3zLZt1PcbDrVUMiwBonHrYoh3L8rvTtveB1czsbpP5S33",
  "key26": "3gUBsXjTxzfZqRf4f6EMzRpq7jrT3JbN1X6DBLPixPxoM42qyKVwwyCSeWhjwC2N6Rvc9kZJXGGYPsY3rBw6CPi3"
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
