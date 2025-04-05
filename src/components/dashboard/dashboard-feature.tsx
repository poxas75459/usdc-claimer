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
    "3YTnxHDADBfLcwdhRjrUsmuDvE1GgQGMfnQxHYPDKYMkeeSmVYCfWftP8xqVesjdZ3gH6P4GERYhxsWStBPh5Nr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3EvTGh5eN4jshhe48AYvCHZEohxHAVjWRQZxgXFJnp94W8hJYBd1Hrrwt8XmboGDZ4bDj5WCBgEM63Ed5ezmLo",
  "key1": "5k9cFY5MaBqAexAVp6PfjiyGu4mV3SSg4edTLGK46AYA6yjuFeaaE3P82bp9YX37X4Ti8Z8ge8GZ5YvHQiH65eja",
  "key2": "4JVNSG81tmzhvQGZ67cBFwTvUfVKcsBwvZuZhxVpdwDTrqmPkwYtwp3kkHYmfZ4hHwa3oCRGhwVaQLmHzZ9C9pP2",
  "key3": "4bEyA6ShWJZQBWUiZmkU6mSVZVEPQYn6DLk6bbfQF5NQgqxWYCZZaHK3sWXQPyp3tbsguvgqUpX5P4S36RuZjnNE",
  "key4": "35GE8VxMF7nJXtGEaXsHRbgCHmwSq7tyGkkT3NLPXYrjd11zgnsxq4qgQaUQH3sShNE6TChTLAs2reTaE4hFPpdm",
  "key5": "WWxxNs2K2Dcba5fHqAbqwzfsozRnaTmDZA9bu21e1Zns3bgEyXTzkiHQgH3Yc3MxKjKWxPgGqJ2DrqrKZYSrEFS",
  "key6": "Yc7C9YPgEJyzFuU95Wb9EGk9T1pG2CZviWe3paZ7rsBVozAZ9cuu6APjQQQiseD6rYZH9VnfjhrdueyvSVSCbLZ",
  "key7": "58MhDmcLRuy57G97nPSKzuH8JKyez67cUVWw4R54gM6tyRCL85AXX2KjbMtfYD5yDZR3oUUK446cQyMqrovxzLME",
  "key8": "3ahCNXPrjZjFAjv9EnHohHrq96guWBXQT7xLTiVF9Cwh22JrqJjCM93P6HNYeJjJSCNQynfDwcXgwaHpGwzjWNeP",
  "key9": "5zon3xSbyYNmMZ3hhGUmYFkGuYMXsuPu3gXAUVgMhRFsViNmpdqRKrYpTu1RPhLCccp3nYTxv1abQCJLEcraZv94",
  "key10": "2zQGsH67adLE5ARbpsosvLS8JeroCBjt94NfrwwMMhER8GQMMfgDzAgcvk9dHg9x139QYUo82q8Z9qyNh1MJqSsD",
  "key11": "44yQeRUwV1wwCrt1xFongaPTk8CYePc6y4johbgW2hx9MTvDy4gCuM7k9Wjc9CaAGoLju4KGid7dWcgfUUmiGFCP",
  "key12": "5zQbPzLkoiePEYP3EPZK1MHe2PCqJ6LSGq7zaqdp2SsiPq1WyZ4jzFsjpzFi1qW2NpPsFAXdA66E5ginj9umSJZm",
  "key13": "4iEEMZg5ti8mJ9GAjfr7vMNeTiPvFkqxXrBydoxWWNi3YaGY9NeqSgbYRsBt2V85gkCEkFF4fMQFkdxYsfqz4BXp",
  "key14": "2LB9fqoo2ozyJckpnmY5dfb3bWAyZEN3vMRiaWd3xWbH1w2JhDhNDkL2wpmaCDEMYEamFNSfjjUYSfTDz5qJ7E4j",
  "key15": "22eigMNyGaPHBwKjormQoLWgSmsPaYsgnV2CnPjFGX8xX5z9PyuerRy97tVhR4GtJndagnpVzMskjCvPssM6qjoB",
  "key16": "5NA9ywLLRMif3GKxctSL61zi6qd9AUn6nZpyqyMjGujH4dxjMRDCxxV1qf9ZKaM61EMMUMrGebYXbfVCSPjLCN5k",
  "key17": "4LbzyZMAKBHXGw3nD7Jwh26ZEaiYA2XeRcxwooetD4FvoAeEZwYtrTcdTAJxKjqnbzuThKrCLtUKFwcVBNNLwWSa",
  "key18": "vG3rwVFDgpKKs6C2EF4BZLsZjCifVZ5ooyFXyM8FjoFw9S2bjGwXCGsKxtXPKVsHqacZpmYNWvcxoUjC5mdCNDp",
  "key19": "2d1MwcFfrdbiAroc7NAxruwvQz3uVyfpaFujsjMQNUXJqErqUam9ntpgagt4WBaQrinuRuoWQFdBc6BSzVZozCWA",
  "key20": "H9TNgwkrDTim7ZadGuEMuu3MZMi9wFiFVyJPmEia5o9PfhCFGgBRSGPo1iTjALSN8KCXyFxDvtxDPDCfxN3vFeS",
  "key21": "5uDzam6EsqyVM2Bed9m5Wwkk5LTiDLnrNscWG5ELKrBtFNj7qsR92s22ACBurExXjmZSBpXxj6hBLDPL4EidML9p",
  "key22": "53nV3rXjGFFMQUCKVoMMZcnTTx8MRPh1DvcDYhZPuBPzFWCw2rNWLZp65kb4KG4EHiBRRTriby4S3YpbFZEzCY1b",
  "key23": "3N1QcDNz1EBEjLbRCWDzpvUpTzFtczjdnHRzhWGEQ18AAJYiUGjq7tTknKsMFDqg5U3g99R7Lqjq9Nn4TXwxAn9n",
  "key24": "ri3gepGogECCUAkFaLhnadfpkt9XJxHas43HejQVCdcJ5hq9SbiZXHh8mPtAMCf3gMvYB3N6fEtb8u9RU8pQekg",
  "key25": "126r4hZYbxUGCeKdk2LgAfjHALDwUcAuuksZ9UbPfyArsucvfaJuA3ETjAUdiAAg6oz85kwuJJJUxrqupwsrAoKS",
  "key26": "3qSRLuXFAbUdWuwWdCmL1rgrHUXksnnNTsUSoazTCMvXkd6WNpVZkrBAcor8v6Zji9XbBW22AWyvz4Ue4CMU1oDu",
  "key27": "XRJHBMfnS1Amwkn1Gnqg7HSesDuqrSkiXo2wb9FniZgNNqeBzzQDZrc8CskV1WZvXuZEQUnq2dfPu7XvjP59gve",
  "key28": "4NotxcuR4H6P9kr2Xkq6CeJihdj118DnFXLAnXf8h11QLRWi6qPBi9KrGSjLNZGRN9hwZBVLnPa5m5SJjZBmCTzb"
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
