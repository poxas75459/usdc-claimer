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
    "2P91RuSyX3XRQoUyBCzBAD1GHdPPE7TBjYEkYS7LwNEqD2b8HinEzGapyetEz5BALGboHaSH6rN911krTw91KyqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kgKUAVcq9PYPv4WA16VfFWNJ3Y1Pnwyp8xaYKdeAHWbq8KAKXNJcXmuSYSVpZZb8AoiuhJnWJTRokVSvM7x3K2H",
  "key1": "2FimjaKUJyF9YWMUJSG1RLvR8CTap3yrWU8RuNdWNPum7t4aTWMjv61CMTuAjB5M8hvw3Aj9Bj5duDkzsfRKD17N",
  "key2": "xgYSLmuhvWZTdvVXWjS9acTmvVi2qh2xbUhm7bDYeiQBTFzcNiDHGbe3Ho24nMPYn6ZkF73QN8x8JvXU5XgTV4z",
  "key3": "5egptNfYhAQCvfNwDh6YPVLv6iuwhVgrNYhx6KmcGr4v7Qbxo7UmcVy9qN1NHXHVhkpj1JsWw3mEXfELAk3RLMaT",
  "key4": "Widr62GC4gXjuXzyfNvtRsEt1QJafLCnRYAf3S2qAKLEYet23PKDScfUcmw1JxTW8oZNmuesxUx22Mq7opCyAMs",
  "key5": "XEgLm6qqS1j6YG3KUCb2Y3ZWQn8sYgtzUKKwDzXdTwijx295Dfz6GZkyzfoWvHpkfNhVXVne7FWCCqtiKmSrcVX",
  "key6": "5bc2HqAhwrhDoLYfdnEvEGUxdo2iGqzZgxdJCx4FRc2zpgsJkFLrfxAupTaz3wLWSSRDg4ejHqxapAvVYCs3uWX9",
  "key7": "41Wk8wCUH8LGFcUwKksXx5cAvpUtskrqV6Vuap3FzwpXt973ySnfTFaTGKg6acirkEQEjansn8PQS1PVQiBBQ64q",
  "key8": "3GfAoudoTrAWZYvLA7WH8Muw7y3ixJs3jgaLAm8J7ZEHDi87MREyb314rUG6Uzh1Txsus66bBYGs7wXUWozBFr1u",
  "key9": "39S8HoLaCpgGM5xumphFxQbqtgq4CtnM9FjcuJ1iSp5Pns4sz3wdj1riWso8hdLhQdsr9idkXrpSc9jGUqmBLRFh",
  "key10": "R5gbK9tPJ4auV5f8azcrgEiFQFBbz8tyzycKbCVJT5tMVdF5jriA9EmzE2EM9NjG6UQbt2AE688mLzq5m7eVmWe",
  "key11": "3NH8id6FMD9hCxhWGuqpBCMBJZbi7Fz8MHfoY6AYP4Dh87qpB9JcxsgkxRmHBeT8u5KsuhLKJVK1UDKfCPjrisoQ",
  "key12": "uhLDVe6NtXkSMh4Xruuh9CRVk1B2FKgsRnDUJt66bkt6489vkyeTThm5sLb4rF2Ji42kxFyM432Qad13rtfujpw",
  "key13": "1299kkKmKTH4ciVKVwG85u8VMJhDUPJK7wepBZpYXTL9CGeHQzn2QHn9sqwSk5kBFJrNaeYiiVqXkkMEsJdr7M28",
  "key14": "4AeNZjoTG51TCTaFJwdGT183JQXiwFLPYQ8WUGsVocW1VL7wC5hzShAjGadY31AoqkE5kPgueG9YWPiuofNGq6UK",
  "key15": "2BMjxzd3yphWG5gEpTaqpKtUWPikzYamwTevE8tg7CT1PTMLPBi7riQjHbahXtfMMDpBH5ZqtF1UU74Mzxy5uFe3",
  "key16": "2cBvsYYqULb4GdHU5wAo7CBWmQGpubGmrYNc44jvv2oW6gM8mWNAW39ipniQfS7P7qjw13jhDMsoftrfRfmLD9eP",
  "key17": "4Naa4Fvc9QR8kTLPiDSkYhsQJNb3aXgCWAGskCM49Ermvhbph9uskwQwbs5XSRHUiptMr365fk4WwDC8UGUuVv3r",
  "key18": "33ZFDNQAVRduRqCBdAQfykuGeP4jyPHrrDNmXTbmuKGnmQp5XwwxgujV3Cef4tXQeBUP68XNCUKTUcrrhPMChiDp",
  "key19": "3qJeMnS1Rz3GcLjeqNtWfFarbPDrMjasfmn5FBvuY5TiSs7A2fMW2Ydd6gHtgNUMfhBUYHBPgvxGhQjurHaL7YZd",
  "key20": "CPUcTc5yCL6z3mc4vxKF6xaGuwHU7WUjtpiPzWSBDnDa4t6Rq5qBHV5QSjmCTnprcTAm9rjy3jctowtYH6FG5yp",
  "key21": "5GDa8AxAZok3UV7UbgLkyf9SPWtiM11rhjtoWHsPLtMZY9HHC6LoUwAXhr2mUJbs9AZR1sLYk9atpg3LCsk1hwy4",
  "key22": "o3YRassjtsF36VKLfpnDFtiNSRyUH9HfyF6Y3UFEoaukGrvn5uAYgUdZ6yhcatoBTJbkM6qrRY3W5Ri2fMni8Jv",
  "key23": "cBqZE4sXsmhtkDaTejtEpDeYG4ke91xMi2rs2KoZnCdgQ8hacTJAotWH3wyVcNG5orWgfAZKQF6AXpuxb4A27ot",
  "key24": "QZHpG9iTtPMGSXYnJMVmiahvqtBxAQcuvpTWzVjV4agA1iRREB4Y8FtLvHejfd5kfzdgMdzEafsM2NTjBEVJrpg",
  "key25": "63JedwBAab1TAtJmyrGqCCSDpGdY2nkpetkuzZLdJWq12wZGKQfWSSWUKCMtqvE9tMV517ECwXEENSecEgcATzFf",
  "key26": "4RnzHJ8Meq56uGSTnC4GAPgZeucgFruqvHgV4puMPMGcGLohfPunPn6TW3KZvkZT9ChQUM2XS92PrQwccVBwR23X",
  "key27": "5ttMPBLwqd4H1fDQFbovoPD8oAUxddMc1AvnUFkjgd8MYD8j5hjSeBj6GuBCJdKUPiY5ntFPiwak5fdVPnfeiPdi",
  "key28": "3vYQwwhbxR84iVAEGDvxyEzvP6QGBMiXNzd7KHvN99Xs1sz2QiihBrW1xs5TKV1D8iFXW5tzzF21uScbptg8bY3",
  "key29": "eDDHB9DBXZrGzBfJ3FXDHB8oWY9nt8RUhFmsybmFhaJkmJWgwHAvPZosdeUy6gL5qmdggWXdwLgNJMD3YCjCtts",
  "key30": "3nRvK4XZcHQxyrUS9oLkQ3HqpK4Y8QhyTMZuTBLdVw2pgRp3hFR79fhhiM8dkDg7fnFF6VJfeY2cV8RVMZ29k46A",
  "key31": "5wTYdzMSqmCfsJz5rvmDQsbxTYX8wJZCSVgH83GagGdwdPCTboe9ExeHZXjxtvLnP8pqech3QGxayjjuQQxdWrb2",
  "key32": "3aM7HZnMUA5PkihSUxpeBySf4VcmJihCwoX8XSW3Q2k8QgydmrrJ7U16ZAd7ModWwr42qMfNLS2X2BAQtAtjLh14",
  "key33": "32AvRkFk7bw3GxNaKMyzd2rYWXzkRM9akijSghvEstuax36Pg6D9KWX89gqjUKB9KPPkC4JfRJ2khFzn1USbs3aq",
  "key34": "32nUvw2n8CLXDZAYtemgJqHuTxknddQ5fLEVfjJz5HTp9EyagHUJchU8sK3tSvF1JpqV6hFz3vF9yVoXrq9dnWGK",
  "key35": "5Vj2rb7iZsGPcPU2eny5n9omwprCdtnuEmnRDaKWJtPRoHVFzvhi4Ns2fHALBxiYYQ2m3b46yM8orgb2tLRjMr3j",
  "key36": "2HK6LmyD5qMT7dJfsziApTZNwR6AAcKE4z6uZcfJBMr7A8B1zHY1YQCNbsSJ7mpX3wD3JQMrDqw48mBKDgMcLbUx",
  "key37": "3mkqVb7ZVn41n7FFaKBY7qaF8GowdLEj3hYpsnfK7gthKuqmsxbk1Nc61uVS9dvRykPj2pFaoVWW328pDwroArih"
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
