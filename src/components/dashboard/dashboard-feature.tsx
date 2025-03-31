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
    "2T5TJsVcE3sBJBzYSjBhTS6Z89ndWuUgw79d9GLtunZvWM7W3WkPAy1QT56kSxcGUseES6DyBHcQtJhEeaoyjBLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDZ2Y8jqEYQ7Txu8RZhEPwsq4cf6kU5F3R7ME5AswajgbPScrhwaNahF6np9S8w2fMxJB1QKbEwEbb41cRAK3Us",
  "key1": "3xJ4CVR9t7sBN1x7BKLvZNQmRM4BwS8iFwmGrcQDiUmvmReKCHfQjTGjau2Ur7DNEHmbouXiLnmRf8Fm29JmfzdD",
  "key2": "2DSh9y4rT5EiKakcJTkXuiu2EaV5xCMkCNRKPPWCwe9HMPCUqkuRN3NzQQGSdzN9NoGEEJMd7kYNXsvrZQyVeNtd",
  "key3": "4CLUCuprxCjGcawYm3sw4wF7gdsBy4YHPxR6zVuKTM9RHGb5615RjES8GzztozTwBa8EPLFW7eFKPpQwD7n4tpku",
  "key4": "5VPHYcaCCcMwVJnzcqf1NQSYvNmCiyjiXcDWkAyU1kWEqoA824dJRaeAQPbERTGMsQRaWs1ZHRxKp24JezgoTXH",
  "key5": "YYiDAjsv9znijW1USb41bdR3ZW8Yj9GaKiwnUXuTpVtotNdDAenYeKWwvANKUn7MGQd6c7BDFz81HVf7WkjVbzB",
  "key6": "5fSyL9Q7RF7WUunnsKaPj1axtJten7JMNbmgBq4Gvas2Myd29ht8jY7mhkPdBmTxJCKBUD5pnoQhgwehHWmF45Mx",
  "key7": "3c5X7CguACw5Z5X5GJC3VipFp9e6ztypwxpBJm3WxorEEtZAc9BVMM2M2gvE1SqD4snmUh2sXyQeNAW9dn7gNZa2",
  "key8": "4KrxLFwG99VVY1cE226LDsykxQ9Q9jAnQv7aYiNrL8fgHMzgEk8Nr6NVUrKY3zZ2FBJp5tnSkv1uWV9sA1NAQPn2",
  "key9": "32uvAWd8LutS9ESyMtzqGrNYerTrLFhoTJhhpLnL69Wt9JPrJgkcWd3XrP4jEaitY9w6zsnLpgL1o3NUuw2XmQZh",
  "key10": "5RtXAz9PTxPgpFWG74f4URsbRSXEXhTXmxjGaUv9pfowsDEnLxZ3C9b9TrbFwmb4a1bSp24LFu4TZFxctvycrmHU",
  "key11": "2pwnWBtLyG4a6iXwNKDBgShz9VTfzypyh8Ga9mVTKzspnpMpJxtu31q4fpTDcSjmKCH8o1aNsPY6XBNggRafVjbP",
  "key12": "2C49j9MiYtvBYWraJNJXmZJPY6aunDEthnAqhUHNjn8FfhCyydqRcb45pQe1BEA49NwVDXBEWs7ccBF3qbjepbnc",
  "key13": "48QEp5Q63MD1t5hh1ABUa3fM6q7iNvVzmTdMu5o2RezVXASvSvdVjNs572SVzfFutUoZCnEgj9UpweSV3TgcggSv",
  "key14": "3KBwnYmyzEE4Eri5iUhX1ihnoKTczKxqfyTpdV4KRmAYuwxRCXpPWm8quLKuzaixNU23AA1BqSHKkdog5swFtCgV",
  "key15": "4w3KXt7oqfGmouPfr8afHhTPWUHQyswvp4GWZ3QpxqYyp6Q22WWnWrNSABh1eAVz3J3yR2HS3kykVCnD9ThDt23v",
  "key16": "YSacmn2zmu8sAmHTMkCMV8htUb8Di6zsFcRe1GpDsZKqdd7rWjAgxiFNtDTerNSKNHcwAYwqKHw9sX6uBSfhsDD",
  "key17": "55697Yoc5t7RNCoj437No5wEjvfJsSuMVF2TqkwzSxehBbDTT68kBhCN8cv1hjW23ZfvYfpRPAMMrAK4Nv65pKQn",
  "key18": "57KBbrgxbKM7WTzP2PYi98FCC5H9rd7fJKnjbC5vesZvETGJknQh2iqkhJAr6joRS6Xz2EgSMKqeATCSh7dkuYTU",
  "key19": "2GzVMiW2VP9wmFcNWV8XFQKq2t7kRqnMLpP2YFGBtwbLwkSojnm7mZ94iDjnAQhTJKkoncaGqQxLyWbVpJ8hDyCN",
  "key20": "2H1bgwFJNrPjN4gJQhSYzGtuGYTF3Mf1hfNMUFe5F2bo7EprqinKna3LGPGQUSmWH4GJ6FPCJwCsciqK3oc9K8yy",
  "key21": "5L81Tdk92AixaTna19a2wSJGxxE3bWriK474KswtAZRnAGnykEed4NmcLExKxeAwMF5c44oziARum8vpPyWqVWXZ",
  "key22": "636TvqzhXNuZVWgGcWTWfRCCWnAKaEGAcsg5VNrp51JKFNQg4dspfN1uZaL7nQfJUe52zm6QWoi8NDZAH5dSwGBx",
  "key23": "3tCDSYNDtPBB9sBrBJ1kFyt5ENRGXx1KVLPRpzZ5kzFvE5e8YqFMEapjpfrvNfLWN6gTgouLdcqvzMrd45wxLepV",
  "key24": "2yDwmdkNY5oSzyDFYDRm8guatDtnoRSjEBzacvJfVRmYewAE76Bv7uUruegi1o1Vq8yt9bXde8JkJg99fpZu4Poj",
  "key25": "27d5VqqvBgAf1J8d2RbVJN4xavN2R154fqqdC49yE7h99uyCgp7VD1VNjgWmqs5C6XaVj6UgjAdoX5GBSst7PTiU",
  "key26": "3XkZYtvae3jfZz2iTrkyW7wuZiorBw37sJXX7s6sq955HCpnMmeXhXzdLrE9e5Y9bt91JAMGU41B3xQzxz9m9b6U",
  "key27": "3war1TGzNSgPn6e5ioXLSL9hfbMyKc29Q8iRoViagGk36KQgA8dwuGTQMgxTdbTy3QUuAqw8tcRJaDWiQWnbcnCZ",
  "key28": "2XyEEtuptjL3kJ4x9eaZPpfykoH2MQwvDfTTaJBzifgzh7CBpPAhARYcU1mjBf7zNQX26T5HvYkRmVt4kSSLmzTB"
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
