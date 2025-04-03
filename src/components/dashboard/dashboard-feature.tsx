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
    "QdsD3zm8xBc9uWbnL9za5dPYWTG328u1B4NVduRmLjx3tuBztKyL92JZatQnkcVmrNVG5u591Lhbb6pmsBntERR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xw4CbQg48gXrqCEpWrMsKu5sKCUAWEXg3p1TJruJXhsRmpKwVTjkbL7nxvhLgkScTB3ocU3JrY9nc3CYEUbtauJ",
  "key1": "63m1d6vJ6PwL4YFz7Gz2uG62tkBPA7ufUsopFQAsbW9BJbJ13L1KG9qkQ1PAbBa1wLbXinEkSk6aXELp6fZdtbdj",
  "key2": "2nWeU1YYWzwL1v8ribTw63ibzd4DwPqhzyeLNEX9Z1oEBunUwizQsoeHrAPLPvpY4m5Wwc96JeExc8QFs7c5MXYc",
  "key3": "3cPMFh1qUjiRuGFvv13QuySG1My1HDPL2s2ftj9d1d8245FNnBmrUgRABVseDSVePEWpjnMinjiKm7XwQn3QwQ7z",
  "key4": "3KaREsKFmAUuVEWE4eRoATsAjkUydQahN2aBe36ovRhm25GdmAvHZHdkQpVDeYaqGBrbgNWcW7NVWdP2Fd3ztsDW",
  "key5": "48kuXvc9QrAUrqKXaG8mN4Q7D7KQzMp5u34HaNnr46QqHtVrxPdnURZZZDxPhCa7Nr4ihxodUFhikzp4aQTwNkd7",
  "key6": "2SEUWTcxBDUcQfSqNDPNFr9NpC85QAJdwSyNh7ySejFtNDUPHVdEnKL4C6KZrtrjAU6eoF1f5Lf8L3BYTJvmFxdG",
  "key7": "FoYY18EmqC4LL7zKJJa6t4GQwkz1A28vwCcz1haLVnvHDwv4JHwWvzY1jXXebjvu2SSGbGCG7j56HCF3x2dobwH",
  "key8": "2kz7HgQY6QwMt2MwZZHR2fP7P8nETv29yYXChCy8XJWMaqQz2WU7ETVLvM17fg9KyNq7PyS1UP5U5ABKuQN715hJ",
  "key9": "5pmhucBcn8L47WoaaWrRDNfkVGRkXHkDdRSyqboye9XjjAM5c7fMA51WPzb7T8TncCjDu2yLpv8ynSB2q2Khjukj",
  "key10": "AQmyD77FmwgtVgNjsy88rnXJGxXn8zyFuuRguLKA7hRuKWwbLDiukX2mB86CDoZoRe1mz6TTeeCCs5oRpq28y9q",
  "key11": "AipCCpgNNudBJX5j4m8sthqkqwyhaiUqpHry9XqYCikUBnRPd3sCSW8NfwKJFDf7cvYMeHjEnaEc3LzvKZt2hGX",
  "key12": "3MmWEu7w7fgFcX87u1CYrSqceGBZTcEBzHEKyA9RDZifhc5JZiek2iAJ7T8fxDGu2uwDVWLu5cm9JDw1L3Jh5RB7",
  "key13": "5SU6LiM7pv17nvTi22BtQzekLmHXP4sYwecFFqYfW2854wpjEaWmg5syXUK53g1UTNxw3kbJVaaUDfuSYdGEHvfW",
  "key14": "5W6Mc9xzRnLJBkhnEhnzpqt8zcZJatMMYY661tzhq2WNm47XUk9CvL3LwdjsMHh8XGJDDoegFPgYsDP83wzzjDNi",
  "key15": "3T6FKj3gXDCnrzKD28o7dvPWcevYqZ7MkZj46MKexZpBFjtTFW77qXPHcEhok27GDjT4UZidyfYmGJ8KBcn6q1Ej",
  "key16": "55DXmDX7azvQanLKSPi3Vqob1kmG6qKzTimBYh2GyJojwVBJ4HRTCvxMYwagfFnEzXz5MMFkTSdGFae5xWMzTe5o",
  "key17": "n84NhZQkQREcKxZzPVXcFfdsepmbQc2p4e2Mofpzgz2SP8MHhTCDMWvKFJYHUTCrVEx5UYAjrvoYKHBzKrJierP",
  "key18": "4xhKxm9EPxUZFhe4ChAYfJndXw9Z2sUjqcmTySrbxPxhN76d51ZSPt4joZKvTFECC4y5TDmo1uniHxmKGxApTWTY",
  "key19": "4qayTjoak77mQbujTcwC52An3oX161uuHTmbueZpZe9W3TcaYn6N9nnwecW9TcuGHdzjU3CFnPnbaQWDY5LvufuX",
  "key20": "9NbUSn7bKBiLMQGVg3HsP765yh2nNS3maAPEjSi4mY9hTGHidqqpMuVgLxk6iu8kDniBsJ3ruC6D5Q9X94HQtGA",
  "key21": "3VyC9pZq5f3pmW8YkDdQMpszdVK2ywPHiVeWm5GwewBo8SRys1MxcZyteBEheeYr52nSKc4BjnHbpt2QbDg66EnR",
  "key22": "hrqggkYiwFPdQPmW2Ax7XLutdLkBygS4sn8cACsfGAJQKDRss7MGWUurBLuUt6gtp9kYEGu5ExKL3kMU8YBgK5K",
  "key23": "49s4yLNshQMQETwkWpUHetLdi1UjJQSTtDrSJWGJTe66JAM8sAmSkzPdY2Fvhj98nwotpW1QUg3p8BfrBo9pyxB8",
  "key24": "37kAU352vae3JJUJfksgSH6XytK1AhzgqKAD8UVGCTbhnWRzhcbkLR6XNCsijTfTmKQ96t3qFKAGxk7GuPhdmkyA",
  "key25": "41APYkDCZU5CKVdfzHFQCRKsigqxnxhwag1PCBuzQPBGeSBcEj2DY4Aq2XdEsSePdScH3ouuSssmskFjLRdFU6f9",
  "key26": "3FJiEid5FUV9CApA9v2hiZLKCHyWW366D1tBepSa9SwNbMK4styTPqD9nLQFGCrPto5apukan2TJ4k7SpNJW8vKP",
  "key27": "594mXkype8RQmtzDpKuwTsKGmTtyfmuKKdD61LHELeX7DEJDTfefm1qLHd7huSgpy7CzTeXud866WKsAmTNHs1SB",
  "key28": "4LBexwVYkMzRrYy7R6oFm2H4FAkZAHKjVT6wNrYWKfTwuut7HyuTyfGqPjx6ZU3tv8rfCxxKu5pqx4qokaZdG5Q9",
  "key29": "2LgAUF4EavEc2pkmj5WfTnZDeJBCvCW4Pn4L63ebUvow5gLzg2wW9zbCT67XaJDR4C51CFM73e8eCzzSQJSijjAf",
  "key30": "2h5fDnRCo8aXmhbTvrZ6K9Hj6Fd8JyxGFRexndgmxACFsY28jqM47AKvj6GA3wsVtUh1wGpL8sgwkBfktLXZi255",
  "key31": "5DJBz2H3YoUYG2MZyTtTWH98YD8aKxci3aHbfEYc7JU7Czrk1adAjiXgmo7sccFfsBcchZ4Cg2V26PeDupVFcXJ5",
  "key32": "2YYeQWEas7uX6XyhwFwUhS4U56v1i8C6hAddypghLpA7ZoRym2xafoZkqxafuMd4akWScKgGfycrxkg6CoT67xv5",
  "key33": "3EH5HjU9ifRraPqP71Rkd2UGn7m4Jn44KA3GsugkDQWsnDmCU3W7rN5UWfJp4jkEoFzyd156rPNfn4XNS8XGzsVV",
  "key34": "4JdW8zaYDaa83yec2kiSZ6b65q4QQJSHA3B5GKeex7CPqYZESZcL7iBttUDeVxZJEQwXSN2J592VBSgpsJ4LBgZ8",
  "key35": "2oYJw3pAN4FbpoWz1C7xziviYYfsb2Bshk2o8VbahyHJKNitNFUwL719WBmJFinhfavqryhLYFuu5X5MBcAU6quA",
  "key36": "5mNMiAaXM9LKKBi1qEnJGnceUWQ9eSN4qu7CwD1xhKgp59ypLJLKrq3Zee2Unfo53zni8iLR8eCkBHF5ABQEN1vu"
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
