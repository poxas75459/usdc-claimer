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
    "hbXwx78ag3dPpsyUQtoFUcwSxk1XGGu7QrrvD5ZuJ1u97TVe8DL5D5vHZgbArntRfhZYPZxqELbQkKav6JyHdoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QZh6EBRmeWtqnoc8MUJhAzexwvyWWirr4FB1BEi464um2BVtqnMzicFU4SVW1t5uX8oH5rZFcKBbynwwoGf53fM",
  "key1": "26jJ568smdtQXyZcySn3bH6zD6VJihDkE6ZFAApG5y6dzui5m46rKvmhC6Ya9b9Q2xysK1HqbAPk2bm45rgAYBj3",
  "key2": "3SHAYusueryUdy3SvDogVnqJDcT1xYXHLUm6djkFXgmjr2omfYTjS7bcVdmKXPWePhMmA9wfs91AaLrKzNy6Zn52",
  "key3": "3Bgo48M1L9eN4LNZrXSwk7Tcas8ghwvsLy8yXEYTeUW9XzNDMH9ELT1Pj1q8vkzw67aMdAar6Wg4DhZyVEX4VWGH",
  "key4": "3mcxDrcdNESW3JbmpVsza816pwd2XMd4jAaWSihhaZBXA7jw7jDzNuZs4xtK61sEzejiKdMoYGrg5JHTSpCiPbff",
  "key5": "5hzcftS2eU97QCkJ6jj4WoxkToDVrTDsWfMbpF4iV4a7xZ1dDur5zkYxvcRzFMD1ZTXErDQVZ4ZjbsRwHH6vWsKk",
  "key6": "2Ms74nF4zXUDosszBA1E9ZCVBR1fDxqXC5knD6MfRdXXfsoNtb15ErbCFuYb9pa8G2NcrypNHdizqYd8mTxKPHqc",
  "key7": "32zD6XvYQ5gLNxQeAQdsatZNHo8ZQszPhPbuiqnHAfohZCbNjgqQJinzyXpsQvCjSiroAEsd94cxUGhiGUhZ9Pc5",
  "key8": "beF7KL8UkFF7iKR7s4yDMTr2rZeW9rCmVPCtsCQNEXm9vCpphSvD1U1zpkqpFJetwTBba8KSPpQtUseZuYKWrZY",
  "key9": "2iewRRR3RPGhXGuFYPzKa6WpHdHjFwFshdatzz4AP8QATSuu1suJTXDZkhMGoFwiw7N98X2CMjW9rkwaeeB8WFHb",
  "key10": "1N8FwhnALqoaXLuWTa3pJsugZTDr5vFzmxAih1QnadPAAmDgY5EyDcoSSZmSuxmCueYXHCnh3L5zTqAKBNQ3j6z",
  "key11": "2RtZNQWar4RDLuJB3NwpW72hrZdR57JgWKEvgzLWRgo2FhGnbGrTrjxgQqDB5xFcyvCAzMHipqtJEKiXwiZWr438",
  "key12": "fhREkjyN17ujRN3dNEJqvrXG7fkSxkDzGeThZBp9g4P5aPAJ2g2gBPxLr86vCnh56ZBRtD3dysMvossEzYJXZKe",
  "key13": "43sxgGeVhE48EDrTTwuQ7Ku75fVFzcZHDoMaNXinbn25mDAd8Na74sBqGYXwFWijuxrnjGBPujYJmMMyyAoTvzYh",
  "key14": "4uRRUP5Zpv1FeRSjbiWwTfDGiYTG9K1HqFgQ6N7gve3g24fZRcfXMZURpUCgCSkbwdGZ6jCJHoby8av8RDA9vfQ4",
  "key15": "udkYhoe1887q7sHAdeSAbuVtDh2ZswW8wNZwAN6fKKYaS2YwDKXSxP2LeoENJK1gpPiu66MU2aFRm3gcbmHyfvt",
  "key16": "5rCviixVAQ2xuJCJ72eLVFgmJrnFzHndHRncoYQwLojnN1uN1of59QfsbKcr2WK8CQiZCCWBRqmKV8jbcqLQm3em",
  "key17": "jkG7tAanjReKhUBNaSEKJAw6eDDsmE7PTVtjn3JiQocwiAkhbrZrQuXAB6Zkdw2WLEd7VqLdpepyNS8ej9GzmUh",
  "key18": "4mqJ8zQLfSmMkXYe7AapbQrckP4bqtS94UUpWupZCRCVc7mUphDNfgNawGKfy2XRL5dzDX3MMFMAsCwMH6ePqtkQ",
  "key19": "3y4Fz2QrRT8ARxSb1Dz6XRJgZ5SRj1FiAsbXNLrvfcMnP8qhaQrASmFuWou8SDN4bGQ4wecspvpnjjRf6PEPbx6D",
  "key20": "kyM3ycqSjhYV7hSg7cBNTzF1JJGs9oxczgmGahNMvepZJq4wsTfxTdoqByixMASjBruJztXWLjABwMLEZZdhowX",
  "key21": "2dSfr3JTgDkkCMU4cttkoRMz7e6GgyhX1yUcCPGMztwMbUafy33HYDdURD99wRLdw2VMsLTSTVSU1mpqctycUVEr",
  "key22": "2vD53XNq9zZ4PtgkLykXLnaicaR4QnhBaEFkkL4qLN117S8gSdiVEw8URRwwPuLn25FnwzngfmSFXjmj6MzJ6Ztv",
  "key23": "2r9fper9QFhM3XzDpRTgT4e2cecEWSuEWWTiqeFw3e8WbeyghESuhozbfqw2mJJxkn2ZCu6HX99GJZV6xNg7vN3H",
  "key24": "34aTNF6oLXpRBQFxVAWuHTh5GLqbHghV4XLFNTJA8tzFK1fhfsYRpcAJZB4WJ7Fq3h6hELPGSv24fbfMkFSo6uTj",
  "key25": "4KY3wvmedGNcWBbZbfFmb3zc7vf8NhT6GR3S6PmbxYkQX2iaoH4YRPqFJifp8oQVyD3EkjiYPeh3KtPSp8VUbKD7",
  "key26": "2PtpJ4mCY49639aWHsTYLjLCrRK3SnGoC3wkJ3iHwipdvYAfXhyudj4XcAxpq2Afcn6uXj5Ug4pEM5ZfxaM4UdHK",
  "key27": "2pGbn3UN71Xef4sWNxcKmMN9dqMC2MDP11sBD35yN1AG6ASBicNgR8panxxBsJt5nMo3yVK7TF9Zs7iQoWD7rJJ9",
  "key28": "2B2yf9AucCqibGF6uzZyBSHNRViWtBmzBxx8X5C62fnaXfAFh3BTnokmLKbGStnGCuh5Q8twsabqhTYX3eNAddfv",
  "key29": "euEAFcTobW5ntkHAfguzPdCY5C2stYMCt2JePbVdAK7ptpfza96YNQbfH38x9iTn37mxJhqhSV3y6uc1s5VUi8D",
  "key30": "5ko2Y29Qa92wMwJ4hEDcqNVHWM7NsTGytPT6CamK6bVCSnVzLqCHk3LzZ1c4F55Gww3L632rq5A5dzNRzXdfESeD",
  "key31": "2gBPsfMvAPi5xxzToN2X6rQ3iDRmnRXFBrWVYSvYYNvkVLZYyU7refDkJqG1ad1mCNbggLzAbUMBpLNqnTbSW6QV"
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
