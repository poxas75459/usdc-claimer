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
    "3WeiXPRpeTVewRpgc8kmpsYz9TFirKERA4fEK1ZzisJkA9uGughAtds9BQcNMLqW5RNJiivJcoyp7HzTceWgQKRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E66ZZHtVmDU4dVMHAEFbZUVCiZjM5Vamc4VAQQo8afZz2b4rYF8yLSTxnrqwtRs4gpT3Fngycm9gpZLRHmkykGi",
  "key1": "4nZP5kNFAkePj5CgfU4W878S6nQkFu3fUinErDTbnYYCAy6SLdYJHzwfeZ7EHmBDvFpMAL7bEBeu8g3JL1U6uZXb",
  "key2": "4zWVXvsr64Xz6A14yueHzqKbDG1pQ65d5GUnQDRAMuFYV5pUkDsF6J6UVNf5K1k4vuWQ8u3LZeX3nSDwDrQJDusV",
  "key3": "5L7aunjPR1HgqNtJVd3yRZWZd1kGesvnWYVmuU1yrab5DTtRVrT6sTvYnW1JRHa6NY4JHSiQLAFtWaoDBnWZaoZF",
  "key4": "3kXzUceViTBGeB29bbky5HXQXEHz2HyJZsyXt3ZnDuaEfCVCTZieypdLAEZ3SZKByfHgjqwwHXGEoa1QTM8uVTfS",
  "key5": "5W4F23pFJg4MzgYjRvtcr9HZ9BmJADJpnZ5342P6VQDQw3hmMdc6XvU1sgoHX4xRA7jq68o8ffND2PZKQFN8Tu8L",
  "key6": "EgKVJewQsHLZs7TrGuagC2zx5yEQUohQH4iXiMWtr8Mww7UjEYx32QLdTB23c6ikzwGMJ8yjJ9tyEAgNLnK4XTB",
  "key7": "2C86RWRvdrYToyk2bQju2uEzbRv6madFaXZtgUXSGK6at9JduKFnxU2pCMBcPAFDTzUBgMEw3DspNM2asAynF84D",
  "key8": "Tm1zT7kZvtGKMJyYxAnQsYtFRJDAPFc4HftDwG1moBkoznzH8TzbCBYqFJxUnqeJqLert69htj7Gp2qDqjXC214",
  "key9": "JiBJXek4GQHwpVhXjHrd1AioA84E67wJVkLa3qKj5HKxhJ8T36ZqS4sTWDDvvJ8aUwwJGkKhuUuGqXYQ51Z4vo7",
  "key10": "5Ctz1NxUc3Bh1cpzWCM8BBYzXePoohvAPLnSbjqZW6eRRdjFnMrhyEFnVdMy8nfBrZfhcD4tUJUGgWEu6zrCopY9",
  "key11": "28Ngusemk7ubgnPAEh8LjGK9Tyi5s8rgXhtRZbDuG8QYt6TRWpZhaNoSSDeToxrB7fixf68P4xFyWro21Ta8wkpQ",
  "key12": "32b1XiovHUZi9uxR1JFuiowzeJewdaHrFsW8HYFepes6wQZdefPDBiEJHcy1wru68trdUw53z7AhMz36PZAhBKGu",
  "key13": "2Eg9nikJ3ZCYwhHEAhYm7kyqyvNfpyRLTuYMWHsaze5j61wsY9Hd7foPZ4hiCvzzy5XQ6Qcaqu7Gk5FkFdoXj6G",
  "key14": "4WWvb4KMtrZfdjWGW983LQ1t4fQKGKc977ASHnUj3nxWDxJi7UQaAXicycpwEEJ89iCaGtT3QopBNYPMiBzKZpZK",
  "key15": "26TALcvCkHnLqA5b2yPyA8EkEUgEj6ibQ1Er7SzAdENb7YyhWNNngWwKnkNrhACevjmx9oroqAS6879BnJHQKEPM",
  "key16": "2o6g4ZLiKnr2hK4egvzsCfjzqKwrsvbHrSZV65nDQYo4k1G2GrxGyo6civ2eJGjXsRpyj6tvVuXMB3mPf399knQt",
  "key17": "3GzG6M8iRbxh16hbnGG4VdGPH4MSzhDQqnbQ48cU1HyKNs7D5YQkpwJpieizqXCmvAAuDcxABJCpPTtcH5ryUyD",
  "key18": "6KXxkEHBtbPwwVTyKqbkw3fcnnJuia8U68cHS7Hh2EcRf8qYpF6m81aBDeyx64VKsoxBTLiv9DA1Z9hmb6sJffa",
  "key19": "2WvD11TSvUpNQqu4gPMApeVUBAtZaoEXj8vYsnAaEDRHQe1L2EvUfqURofHzzQHTWNsUHnbVhH5w42WGPpZoevfo",
  "key20": "27P1siPVzkncLbKjFAqV6vuv5iDxogD5usgwzvuJmiC1SUisSVWfSgrRovEvgHdFT1ZTf5ZC86yXyHfs5qiaEJxZ",
  "key21": "65hsY2ZocHEjEoEfjk26fbwuCikXeo9LGTsMJDt9guq1rMkuVsxDXxFbw2T3rjLRRHqEmHXKSh5y6FAePasB1hR9",
  "key22": "5J1cSEdASApnp2hFNFGbKj33Xqt8XzqHfz1KMeUWrJaAtorwvQowZ2Yx1S9WWXnjNUp3AQLyCGPNvBwDAKbthnAR",
  "key23": "4WpsRyTUoHAE4tnF3ea1fSArLEahwWr977xPDCr5huUbGcfraD6oP9S5VFnaK3TTNAzWuTdc5Sq3YLGHjfBjHsTL",
  "key24": "jHVMD72qmifuNb7wr22QCga7rC1KoHXyRES7AeVcw31ttQGaTfUgfGrPGEXPyDokeHsBxk2WKmuF74McTg2uBFk"
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
