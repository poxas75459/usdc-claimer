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
    "59gRBWENFYPT1F8FjGV3hbkiBnZjBfzxJpevCox3V2DeCrfykdo4N9ZTxzAVDfANzB1aPfwQbpw5RzbNSNsJqko4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zn65yDsJk2HxSqqPgAQjsqdXrtmwb3ZKFrNFMHZz6ttekhSxH5jjUf6uEziqzooVeJsNHesQy8C7rghCiHeHTZE",
  "key1": "3NwJhUo9fsHxiUdxk94t3RhUuZzVDGeDAbsk4x2Bg4WHAfuw8Tr8RKiXxTFTUrVM5ebxmhFK4qtZxdWG7i4RRThS",
  "key2": "sizkSef1futq2gisQ3n2mQC6M2mBiRSEgSBMtz8aNC18f7e6YJFBggy6K5qWD9k7PJNWssHYCVku2QsbHt65p7R",
  "key3": "RBrTSxRQ7uPYcoSfFHKbbA9rjHKySopZEuxViafxgLS4EVMV63TojmfRNTxVTKU7PaC4NYtE6Gmer5HGd1h96TW",
  "key4": "5nFikG5sMeaLR7MLwv3n2oEvZcBEx8y3UD67NCtfi3qMt1y4DK3PoGFv3PfnE18Y5CeYgaujABDAdukGoHxSemHD",
  "key5": "5imyZQWW7zB5G8izJLSaWgZmDrH8tLvsTsAxvD1J55LNbH8BRrZ5EWsPP943NuJBuy16aSUPTaWdH14kwkvwbCVy",
  "key6": "4dwh5ShBqTCwuEbxrVSNAmXY74khaKubEgSbZPb3yM9Xvk349NdSpmgqzpGnWRgfNLU1M1dFGPzGg5Q5fLMPM3ik",
  "key7": "2yXbVgdDSQq2zLWJHGpwmNJHKXzRfvVLEkWsrqqoirqtq6oQZ3hi8XwRmrucmLZ65yLRu9jn1NnXsEfyyAZcZMDB",
  "key8": "5paKix1dmvM4NZTQom1X3nGjZXmWw8exXEYNy3Z53N4sQd3sCYcTifSSLpi62ZXs4CDLTgirNASu1HMUSrGu3wJC",
  "key9": "4nDJ7vjm615Q2aba8iDttqP74xEKnGwkVJDujFY7qJtj2jmVKFrJYb4EWTxpA1bZd39e23Z3XY9MDVyzqsBho2om",
  "key10": "4sF7ztAGXvy8LbcXZvA4FfWsDKiWToi99nXXmzu1fFcmPdnja8w7zdSjXYvoLP2dKKGZyHihPJGs9D1uFyXUxJZu",
  "key11": "3XfLfyf4Y4drjpQ6UvyuP2BPqV9utjpwnTQ6jbzdUVFExs7dazsC81HE5gkDqdeRVkXtEqkXKKKuaxVWWYrvgS7m",
  "key12": "5F5REDVvebaoc9rqFddmosBoWDSnCZEet5dPG5uJT3oMZmmGoy7yE119wHHfn6HKL7XUGEAs231VF7rYskuPsgCW",
  "key13": "2S2vvRWGmDQgxX3Dmd7qxBRFQFXDH16k5kVqNLou2mRtUW1WM6a3jM4tRksMFQ77BXWRhEgFf2QNpwmyVhNXUgkt",
  "key14": "5v3xFktVfBu1DM4NvHiUg2wRSkQCCY3CEfuQGSwg7R96UpMEE8GimALVoCJFz8QC4gvTMGT22df2ToP2dEt5rKd6",
  "key15": "5aJATspZ5fA9t3t4a9nSBQNxgWQzn3cTX6R6zjbkY8mUqiNB3LKKTJ4JX8pfoVErQryKUH1YFh1q8APzQycciiPH",
  "key16": "297M3jRjZwtr8JQ6wS4wtMmkrfELP6shaHBZTqvVusXDQqCw5k9v7wDRJM1QKpntrxEUKEad8tf3kU4RwPYpRQMs",
  "key17": "3BQCLCwHFLskvDtCnKy9XEkj7eUYcD51Y4Tn78nuLJeLQfMrRbu8nx5garC2Jq8w92SYZ3XtoDyc7BT2pBmoDceG",
  "key18": "2dXwktxyXfCPESZABqZDo9cTiBN5MhgXskRu6qHiLk5hvMgrytmzxCmC5PzZBbVepXbDk3YVUdyraHwT856cpSJt",
  "key19": "49eVV5GNNmg61ZAMTajFcRrLUtmTNXLC8D5LQMsuvRZAc6sYJEY7JxcipNMHnJ9vfGQT47Awd48bLuP4WC2CNXqv",
  "key20": "WfkvpfvLSFc4JrLcLQMWFtWJzre7kBQPaUPmHqZMSqBEMZ4dAvvbqP1948xo9VQpDgedvSaMrbNzA2Kw66XAibF",
  "key21": "5jrMgVMFqQinZhFn2Zhd7UHxsfvTwGYbATQb59Rg16wSg124yEwkGd85FjgEPrcALinfg4ZsUrXX3oDwYHtYVA3y",
  "key22": "2fJr29E8hJ4hAtpamniPcFw9ezh9mEmzch3fbWjq5WxeyHZo7SouYJ9SurR1vGb5kjLpymoSAANbGQvirpPcoGBD",
  "key23": "5vUdX2GXC9N5jijQT8Lx82MHsGg8YXL4AmFy7ijavjzL9iTGSf6C4ZaXnNSR21Za4m46zzwWGgtzuSWwmBpC6g6w",
  "key24": "3YAtWNKqXG7bakwfsy9ZkZWbk5jZEniB71q32gjrZEAHr8QFjQrQkQvos1hJKoVviXFDLRQLs7LvS251KMJDCMnA",
  "key25": "5aX4WZ11RWjvGvEUWhLv3sPdvwR9PURoqm8DVv3pQMaRUe1vF2rYetHZZ9c6SBuzRHBe7shc3RkimKbuo9zP4env",
  "key26": "bwAYBX5Lgvi8fXnyEVAp7o7YHPhgq6z8kwDG6xujMoQVmcTyXRbdiAtLmFDLrTf7kL2GXJ1JE3JkJdUBF4C9RW6",
  "key27": "2g4snk3LAo5nD3cCsbFCsM7PHgDYx8ebBWbu2arr32F7sYN9NVU7sjThL4HGYsDmZkZvXNYL6BeMAvkqD9a7EFVH",
  "key28": "2iQS3hfCerSN5KRNvH61XNX3DUyHnKwQAUvohhRXZabREJ8oPxPvqbkh1vpJY2zm7srNYgqjqJVoQD5WNTzBE9WG",
  "key29": "66NGbHpVYRw1qepJCyRfeMUEPnNW9mdvZ57BLJwCQiBDmmib6RQzMPGieVsjhGqgSRbZGgKcf1VE3NH9gf1K8AMj",
  "key30": "5zFjcjnhtafPUY5riKEkKponRoQ3N7CsuevUoEANynbKEg2wXHAm85TGS25Q5G7azMML7UDkNSPw9NkPKW6TCCNc",
  "key31": "3tzWTf4dCDiP5MZC3ESnh7ZqhjXTNBSCPiJ19VEoGSt4DNFjR7hzink9zjLN4HFJVPorUQLRFnGY3wHrt7Sshk1K",
  "key32": "3BAhichH3mYGougXTWdDfUEkBUijDf8bwrBeG1KdLrMLxkWxjTAqWsF5fJxRmrcub3qxGFynoGUFgonSusQxc8bv",
  "key33": "3HqPG6Pz2nqKpgyaU3mRLcjbqabx48TxTRx1PjYFGhVYiNaA23zQsKesh6iiuwzKszPwQz4egJUiPaBviBaUtATn",
  "key34": "5VZqqyTApdFjKcWKKZNKKijC29yH8gp69zie99x4crRy8BBd4yUrdiArHmjxx4NnBb16oEcgE1tYCX96GepRe6Jd",
  "key35": "5EMRkXXZHEKNHszF7orBRhpPkjXu9AxeHtUTvkUTcifFhFTG7hY7Wbem1zfGxuiFr4TqoPMgoD8BTbXaNfHX5HjM",
  "key36": "24jSDhBquER1WQ5KVgDnXtfSkX5Aupk2vApmqg3bPpVh576qnBqB1WusL4fFUabTmu86HPr4UztegdKiMJxYhtd2"
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
