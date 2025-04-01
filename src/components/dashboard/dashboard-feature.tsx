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
    "4d7LyzZGbdUt9c2vcSTpBsj6Repkrnevor4bfk7SbH4kggtKgkx74FWjx574tLHteQz9dTP53dUDzAtD4qL5n5Ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C3P53r65NQmCQsjkm32BFdWYiVbBqPXPMVp98qZjMAHFjvvGafuo7AdC8aaDQ5ndWqa9TfrBhvSoPDhXX6z1HAV",
  "key1": "4mZPo2QEZk6tSi9EKsAwUfwD4tYH9VzCUMFNJBop82K6ctX1vpC3dFsyMSQbTHDbdREMoDceSu7mepWdcWvY9LiS",
  "key2": "4U68LGaZkbSKnP5CuUp9F9FcdwDTvmakDHisDepF2WfCaJaKgVdixNzbeHArsuvwpThBErmMW9YUqBJhgNu4XnZx",
  "key3": "3HdLfc4GJAnWGcjYtK48uCnv6d6QQATzdyPknBCRDA1e5y5ZoXHCAgei3Z6M8rnKEAbVF9ENtngEBLWt9a5v8vmy",
  "key4": "5gwMCCwrMPY5eDUZ8dCzuLfF9vpQW984s1oXs2qUdgaP752rx54X7UfKAufhLKVgpzfYzyqUuXts2Crf5azwnn5e",
  "key5": "3cDHyz23orkPsaTWJZqZ8kKQCLduMzvLrvzAT21u3YCf6N9kiQYmAGFpAH9YeddyW1QYfYR6V9gePkqdiBs6je76",
  "key6": "5mj6pRKA6BGxBvaovp4GqFBP5Pcj29gPjoHTqnPMUnntiWM8aSigNbh1ySRHZUJWp29coo42xEbzMK4KPwowX9H1",
  "key7": "2KnkcSg8g87nc4L9acpmMnyozjheu6MYd4bjx1h41s8cBYaML7QJ8XY5zPqHhXZtLnRCWNs2z6qa2MHQtstwaUXh",
  "key8": "59DnCNJHbYCsf5bz8SdEqMPP4n7K5BPTSExodjYAzA3v67QjMHaomHg4TFrT8zGTUncr3GeadSe5uZmwvyVaHiRJ",
  "key9": "66YkcoMgtbzVxzqnoLXVADtQfjKWQVSkg3rgKTPuaC2NKtn17gnNeZeHcY5dgQ7t9hifqyD2dbCuWQQmngU6M9SN",
  "key10": "2JWNUdmFioEWXKEi8R618aVWad16XqjuoRVVLmWx9Us4wuV2JjDMtzRSxLDiz7Y4un72sVwHvmUKSDtwoTHkw4he",
  "key11": "Qsxhb6PEUpYhmxH3dAmy7SNJYgu8XmE5HfgZ5APP2EV68xYYAxcrykf5aoLmLdWdZnqeBnt77gDBaj6HxyGRnvE",
  "key12": "5wLpZNsdJ8NPvQ1x55gLK8WDTWqqoVnEBKCEZQe8vtP4oiwTGvHck4megVo9UV6JzxKczJKEaD93Tmunx4uUApga",
  "key13": "2tf2iajAXGVmZqAwH2QFT49yYNuz34KnZZDNJLaRLCADq7Gss3RYermoUWE7pHuVR8TpaJvEFQhiPg8uAFXqew3d",
  "key14": "2aKCs17MnSvCgkX9mGiKVr284RnL8UCARsfz9vPzntz5PnQnVeq7AeZh6iTkLtv3fAXAjZRhSudTtDTYkV1L9Tj3",
  "key15": "GTGXW3XkVHRWcPsL2h63pD6cXDA6aVfeqHazVpM9UZUhJ2APfnJrFrPxma2cVa3QePom9XT4GymGdJbBmbGQsuN",
  "key16": "3iG4ZZaBYwN1zP9bcm4MPf9W2xoYgx6JvAbuPtusvBreQNQARay2oGiHcyzVy41QAJUP4r4cJMzmqtjxbjG9Jk3",
  "key17": "2FBxLiYWpcvxC4Cw1tca5aEs6Y9PTsUPzxs46NYpqBaQJxprEtT5BvsLhQiBReiECsFcVWwa672kfoi9HMaUvZdx",
  "key18": "4SFdM9UHLe9y2d2xbJcvvwF7raGR9BpPDjobjjnxFC2Ky8U4tipG2TmJskJhUvUcttuBYXnm51icK7oPtvTLc46U",
  "key19": "4jjMHSY3Zdtbq6AHREuY3aYsT3WQfHbcByu5TnnXFFDLhopCq6Aizgpk3v8LVsCsBrTtesbg4QMBdK1rmUC49JkQ",
  "key20": "xdv5zEPPAM51W4sCybx7EJAf163p5LqidJdzb3sc8JSy2wNz1EuNKu58x1zUQqGaZAYSSUh5MJCL7RY4hXprgNq",
  "key21": "3ofABq5qoHWSzvaADQc4AE6EwruqGo4s6PVknSWttSwYoFfCH6X668dFi9bsfpbYsgGyrmXDK479kxJz1v24ee7y",
  "key22": "2qYaxzUFaofzXQh1qNWk8f6DAUzAaRwAAcYAwDUsqZDytFWuqrTtwoh1QyBM1X6WfaMQL428j1NsFCEjBgEj7xno",
  "key23": "4Z9g2J3kD4hMrs7qcJqCtkSGvZz69JVp73dBQVbvWhaP6KXnNnfzQCRX6CzZbaCaCtFppZecBoPPePar3MvmQE38",
  "key24": "oFYZQvgRDHbGphZqXwtv8CN7Wos4p9Dy6fFSAZgFtHAq5YrnU8CquTTSz9sZPD5FE4uUbaRotoSxHUtB9KKEDus",
  "key25": "5PiQs9Fc2yqVDgitVqdURe9a8vP5XnCxcjRvPfFoXjhKy22GrHNeF9oT2Wa9N6JnqL3quNHjQSnZcB45swRi7ziH",
  "key26": "5gUmxiVYzwzgsyzQTAXeohqsoHvkutsMSmmekJby8tr9moe19cY47nURBgG8qbAB7aAf2euCVTiTnFUbwCdwR1xx",
  "key27": "35dhL3Ld1PUAdXMApdEYsTR3RmMbVVnUdyf4wGaqgTxLPYTmvdU19oCkKUw1jg6PkoiZZ34HZjicJkaaxidqffPM",
  "key28": "524r7HfXBrbRLfZXEtEQqzTrpqmv6x2qaJk59R2fokQK3rbRpbJJRpL2CbpNA64RByDmq3Whih1PheQ5wcfEDNMo",
  "key29": "43H7AxBpc7P9pU28NTk83SN41Nx94EeczWX886GnC4xz3xgHSWXXYGtXUb2xCE4ptsQs9ahYBbkuATjFP8YMCFYG",
  "key30": "47eMn2CXtagLB2fcvqYBwvqmLMHhWJLpP2gki2BpBDTmyPAa4MpYhCVpYDU4DoqyHCecqwAx8FFfAskVgEfuiTDP",
  "key31": "4FZe9MGjbK3FaTsRp21FBP2pm757mQHYQh6yztB3r7EpYoko1oK1YsyGuSYJWxVXBLRLXgw6RTMhKfg1KZ8iBN1j",
  "key32": "2zpw5NFfjhpv6e4njsRkErTEk6tfyaxj3NQHS6CuGZmvhvNpcvZ33mqpJSAoetVuFsMKqYmEaxzx8wyUWqf8WyuC",
  "key33": "2MYkdbgawn7fRQnApjUrE1WVf3vMQAmxdtfrsRYejSzmakPfZCYrnLL8sEVDeKmJma83iu1SwvsFrpc5DaZPraJV",
  "key34": "WkJCYgnPEDDMLLmbRVs1APGvfsRZ4z9s3gcg6mEC6NoscnEmqFFcQCEUMTZnvKksACVjF93AW1ZCqUuerBHUyhX"
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
