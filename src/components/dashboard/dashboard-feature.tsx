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
    "4VbaNT1SVbynCNvMAu91EXvnUQxoRrjJKbGf7YWPCPSkANRAeLseZyovx6yWHqC2fA5HcTGxRj6tWPMMeeEHqjPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vX5sjCNCp1D1hKgP9mg6yvbwVzMmaTqxYhKmSMS6zfbT95jbQsSHG39S8qYMSKRevRpXx8umVN3AKJhqUt2W5Nm",
  "key1": "2aiLgi5MF42euDZQ78i8p71JhPdM9K1iEWZ3VpDnftuY5jmYQTMHSJdVQ8bmjcJL8Jcr6kMCR9CMhMDKQe3M9Nmt",
  "key2": "2r2EG5BMWCVYJmFVjNXgWEsiibURGtqrLvGKLMY75WZgAxJ57Vrg43dS2x3gURfAGJ8hhLyzA9rUyhHQqgkkTRFV",
  "key3": "3tv2TczRxYJdSaGUbruikiX354JjDtS4rNVTDASgUDDsj9Ljxp6538qDUELfMq9DnVcf6zd4i4wTQdNWFTQ3NerZ",
  "key4": "4DuBNkfRq52b91qdR3ZY9wYJ4BNoscSjHmDPscWAtohURcJPRLtAy1SmwkZkeJsiwYQwRw9jUZrAGyZazk5jmEnM",
  "key5": "SJciUXvPncG8KWt9bDMRB9R1ihvQqHawfmZSpQo9eCY8CakVm1JmzhAN3cyZioERHrhEz5kMXEkDY7KMsHsts8h",
  "key6": "4JQc54T8mHQ2DFT9HvDjDTsRczY2PogzMY6GS5AC7QNALzxWyuHF3diKW28KvfasWx1J5eMx7ykXLaC2n9bBhbeV",
  "key7": "4cw7NB2gREYeEjimF7va3DBjeeB2EcSu3xhFd5WYmg1xnqcB1G23MEj8cDLCGbih4BfPkqf8SjY9jxqG32CNS54S",
  "key8": "4imcQEfdo7Nac8anspLmK4RiQF7FmayKxfuXsZzW8JefwNVe87TaDLJvgKEby3r7VnA1E5mDUyaRt9tFX5xzXuLB",
  "key9": "3UKpPjCWnjP2PSm5pQAf6CPfVAbrdgTYjGoLZRWF5HwXHMU3f9mJmS8AtAv7sRhnxmFMN6SJ1ycoys9AxyH81eF7",
  "key10": "bqjEA9PUSWcqYE1jjNuwSoCFUfp6kdNgvNQjcgpjpM6nHreTcKDKNCFnJiSZizvbvVWjg4khJ5Y6UNCg518382i",
  "key11": "5fhkUZbv9Ggkg7Tc2stkMkzkzhtK1wkZbHA1ZH4u9QKCR2yvGYG3Pyhdrw1w2Vcd5ksYj1JmG7nVRsaJQxCPMwkE",
  "key12": "4huWSDpvp1MQdRKpt1xtTGqQoN72BHfoCTiyDNcTBTZahc8qjJEBFLXDVZyzC9dc6mwPgH9k8BoD8D53dKLKbbZY",
  "key13": "32aJzYzTmBmJi8yhLNCrabkdneo1qBygTc8mgdPVry1Fi4EbRSjyLjRuKB37CqeR7bi85bAsEkDiknRH2mi7F4D2",
  "key14": "4MCL83fdxBgVbKLMCJqzRoZqiGTogTr4jEys6MMMC59g1iYwkrSBXb9ckReB21LvpYPvXpULUqbKmiBHhWCKWrUZ",
  "key15": "1fddAukTmiicE9gzTUv1xxj4oqgEDjwpVPKz3rLHDKkrzXhQfcwy7KobzcXcKbxkchcYX86WTQFVLjTFShvx8aG",
  "key16": "5JH2KhLjxiy512SRBwb6fackbewp3P5mUufkrJBndtR6Q8k4PNhcJKzk5SsanxCLEW9XaZ7AK843X4ficqVDXCiv",
  "key17": "66KkSSdr53KdaHTsKET6d1fRsuTmf7LSoJx7EEHWEDXLCqs88RvWEMtUbNaiBLRjCVMZ4LcDXxqFkoQaG1yWggex",
  "key18": "5h44hn5mEYUUmDwv1Foem3sXpj5ixX9wyjeWkp4f9bC3foNRuCvMRWyU3L2KdQZi15WpQiSdLx9shT8x7Hgp9i62",
  "key19": "28cVaXmcJhP5NBkpzy2sCR2vBuK3uKrzdnjkmV5DK5biy2C9xCxVrFapFg62rGXQvh4b32t3ZwE8RsXfTJAf2QLs",
  "key20": "2EXaPB8TfqXV62TS1ovzsix1cywBffLaAwfeTqMUD2nUFBb4vCJDjPFn5qmcpKmk8BFvpsTG1Su3Ek4K9JMjXqMV",
  "key21": "4FYNsLkQo3HBZh3LZRSYgG1vn7Zv47ngRQW1wsxVmVyV5ycDj7VYhRNUamhAU3AWRyntr2nUmBYXQ3q4scJ7FxER",
  "key22": "5FxpWKntQoujLCNzL5BYPJqgBcA8FHZXuhr9DzkmFYQ4ZamFqS3riW95rcu9qJ75R2arYgea3jLdvx6MtRKdWhxv",
  "key23": "pWgRfbHLiKJmBiY474cKZioBcKDgqksSsz3hAvwGJiuRHTFZz3Ebg5mgEwRGnGJFBNPKmDYb35Q46eT4FYs9Xh2",
  "key24": "2cLsoQJS5Jq6FqwuzUYrNkcthRwZEdawJ4d5tQQ9B2NqPmjQ9viV2tC2vmh5UZLSL2xubz8ZDkyWaGe5AikBF3JW",
  "key25": "3toP8R5E2k59wEtdNGzVZ8osPwMFGg3wmr1FRWbqPK44NDJssSFZdgB8XfLEojYEHBtYTWNe8eSwfz8WjzHR3ERh"
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
