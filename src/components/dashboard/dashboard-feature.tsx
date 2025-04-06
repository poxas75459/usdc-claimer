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
    "VhasGwHc4gzd4UnvG2eDaJg6E5XgArcyKnjgNs3JT4QD4enQqGMa24iUPoZmiAZWmGmGKez9MizdwZ5VqoeR5ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22fXN4MDxYAKaZavXgoyV7uu3odEjMobwmN7Ymc8X1c1zvtenW6u8jUZf4XvgGTYGh9E5Sy5Smc9YDKomVjSnU2N",
  "key1": "DF6N1P2M7nSwwrCbHqjZuZaYiHxMgh2coz4cp5km3psEtd8KXQavaYXMDsQPrjaJGSFXh76gDthx8WD9pg6qBje",
  "key2": "2SzJbhi1uHUKUzyVzPgpKTqHx1gS6RCnFRrLFSJnHNEtwnvRFDLwMv9samHkGvLtKYtYZkkuBVTNHw6mw4RzCGV4",
  "key3": "K35EWh8tqBG44Wo3iByZ4MvaaPCZo6UsDAwo2fH2f9XJ1sbv6sfYUpfEVhrhpxiAub3iL6jRYFXshT1orsC4qYM",
  "key4": "2sdxp6X4LbDvf3aAwRkUPEsWiefMZq2zZJ7a1G7hfaDZjk6EUCatVDs9gjAnJKknsC3zyqJqgKEyTTwHvwRf9XUc",
  "key5": "31tPxUPNv8aZZxuWVhKQuWydwLWKqtHyx2zqcRvgGxi2iRRFZWvvAUepnQto6BS8FWUePQ91CQ52evF3rYrCxM2N",
  "key6": "4X3zj7fKDgcigM8Ez5zUrH8xG1vVkjhfpGjWRbnqwhQ4PRHroHQfQMWj2KnMSnW8C2qKLsc9x7keQqFJT9DDbW1k",
  "key7": "4HpReifWfhK4EgFmbQz7vsAL8o17iMUBVWPRUuvDDGqKcGjVhegopRnHuHDvrxMN8Zmx2XenUtQBEqC2eNtbFFmJ",
  "key8": "5Vy7MQC1SbUnc8uJq7BCL3ohpZeY3oYPAyQzEuiE5c36FaH6U7k6gxtpjdTHzmYzoZy5YNJinKFwxiQm7sztBsAx",
  "key9": "r4uUimYdZwHJnMph7APzjks54kCdaUCVFyUTSRkmHT5o6DKts4FNJBCpwCgFdf4Jj6mEr1MHx8dsiRMbokgirnU",
  "key10": "4QueP7CG8Y3DvB1kdTfqfQPJjx5VbHLCjbeNxLLHuGmJJG1ndeUqM4jPpBtpcT6oPgCdDUiztNZ2bhETGYfNbVjx",
  "key11": "K1pvJZUSXTrRPASqcpjrFqbQpMtcawsi4PspzD37bnGGLDW9828w5WYAz5XZC8trpcMQ93aWWn7dC4sUc5gbdfg",
  "key12": "2zXgDyZUq2nBg2EGFdunCVtQU52cm3LviuqfLq1Fg43kzDqofVX4P94V3maiGuo8RVGHX5LM3HVETBK7CS7VkQHP",
  "key13": "3VDraueTALpypaQ97e5Y3ABZn1ssBiFuLThSP8DPd6M5cWTyqZorShrqPqSGWci9x84U38g5ghDPSu5snHwN1NiR",
  "key14": "3JZC7N5BAL7qhnyNsXMJ5KC5FSncqM31RN8wdxFWURTVeFkACCYj6H4vUgv9dXggJA6x3cyLEXzJbHsj1YYso8dZ",
  "key15": "5SCSfxGfJ9abqV8i1vNP8G4TcnWPx3WmpmKLuVv7iWDP7gx3cyCH9pPkoxPw5x8UtaACcKGbPWQD9cAmdi7zSvN3",
  "key16": "2CrGpnMaUmefxFhtb6rNJXzrSPnRHESo73wjwHM7u7MPCmYuGqZzabXEfbkRVAwHcqdkYbgHAAPnv9BnsVCh5a5J",
  "key17": "4ZNAZWmyUC7HfJDHmtWUieNbpC7MZgfqwZ9R9U7KE3A2XSpGgmQZ2bzvKH7RKSpiaCUsdNxuTsxvUKHKJ4d2ybZu",
  "key18": "2iFjeNWz1ivxxfUsWcYFKCcyrVcSBgUUryuwSqnoLKriHKs5FaR8E1ikTPGsEugUisiimrZYqvDVFvgZRG2YwV8Z",
  "key19": "61E8u41pAAqbj4BC36hWmPe1Q5o4g6wjiwJzpGmdnQjZhW5GcrvsPJ7nA7zLt6NqpBxynp9mkAdpYmptq94dg4xD",
  "key20": "477Yt7ZuEZnHpb7V3TkMi9fBuKYh3nqSB6jurgCmumMCfb4kjRSBF3VuZRG8P4dfz2mZaTzC5hqFqNw8RNtzcMJu",
  "key21": "28zyxbzqFSVc2Bi6Xkg27MRvQffbTbYmhZQJMzXR7o6hhYWuiAYKC4X3697UBQCb53xvcycb3MJqnmmT6M1MoGXY",
  "key22": "owKwsHLZqk7MmkHfcrmQYn8HnWrdZQa861MTTJbeJdp91ZbHWkSXrQDLHMa1FTUcqQazbdWMxBTWgZ15NpG8pgP",
  "key23": "4qohnxAwp5X3yVdEgGUCHehMGQXen5h7vNgHwdzJ695YhinasT9ksJPnn5pjVopgnjCtM2UFxsVEZthQDXWU224u",
  "key24": "5bXxhm56mcCuVSkLXKgeNokHVQ8ajyNjNyWSbT5wtn9TEyA3fh6igUNyH8e3sXUKRh4ZniecyCvXVXinSqKHjxks",
  "key25": "2ACaZkb6cRSvnfSbKXvLKJ7riBik3sBnReVXxJfhsCuE8fSw49Du9i2b6MEiMPGEquXC42G3xNGAnY3feUvZWeYE",
  "key26": "2VCuM4F8hyFouZzDRyNU6ktWD7nvLS41dG5AWgCnfSxjEd2xZnMDd1bU8b1BT8qvHWmqhcZz9mRQ1bWgi2PrsvfY"
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
