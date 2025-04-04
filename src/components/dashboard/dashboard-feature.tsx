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
    "3igqqLxNJaZtJaDJg21CFwkJH1PscdgusqxXdYXX1CpxAn5zZyQ9YZWbozN61pqA3sj4cGSmPrR7HCgtLDweBTrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZW1zGc55TSn5fWZdfCQMeTusb3wn5qKFjeqDPonRWhYaf4xWF7a6b38B9NYWjWh9E3pTmDVhZtZHvW4CUZxd7aF",
  "key1": "41irRdJZdu9io147zYksjdxZmnHdMx7xguoDhh85TSPhq2CGd61DUF97Z61whsh2RD3aprvLEpy7BEMsQHTvpwuR",
  "key2": "3sQYkgfKReosK22zi9YuGGnWG5DpSepqbM1wX9swhZN619VB7P1THMmerpPbY8wBNKN4n91zzMxHa5fHGkth8ecb",
  "key3": "4B7o1DvhSsHCzse3mrSMqPXULSye852uMY2cxbCMo4Jhb1sRRJgvpBTZzA4UsVS9X6gxiFx4FmLaiTvowgHioNe8",
  "key4": "3YibBSWPfpvFaLKjAACyocHzZSN3cYVQgWitaWcKHThUwrYG64QMDsQQX35MrurR4TBXuEaJKYYLsaHTofJiLM5R",
  "key5": "3m7cxK4rJgYo1BukRizimcN8syndfTLQXbBS3p3qYzjhU77f2vuKaKCfF9HM1WA4Uspa2LJN6vGQwEv9hdbrzJPs",
  "key6": "3Njg5Z3UC3rvfd8Gzw5kSyMpMHJ3Yu8GsvTWvwcszCYBu3hP7CfosyxJyTHJ14ZaQRggcUFKbtpiyPXUhA1ZCKfX",
  "key7": "tTuzLrpVJu6Q5bpzntJCguHYrApnRPibxw4YHXrmN5KyzKiRA3Z8Sy54Z9yskWqB4gZCU694jk4xPqXY1gz9rSM",
  "key8": "4JFbWGDGNxjvDzi2V6vkcPbt91WadXxKqaiEn85c1U4wEyJst3cU6gkBc2xc3HKZ1K5j8LhamY3LJEdZ7gTUdKxs",
  "key9": "4GwLdmiqEuRM3BVnWg2eXYoXco63ERj9M5ZXnxaKJEPWtWXwXjfZXS6f2bUBmb6NFU4nNxN3eJuRxJQEVJUwfLdF",
  "key10": "2PmCJuaY2hJdwj5MU21iM59Vq1Nras9fb6nhkBXDS2jfibToLANTPB4DdQ1ktkYC38nzWpXd2UqGkqUVMXvgMRg8",
  "key11": "491cfdza353rQka53oyedSse8NoVhWoPDy6HcELdHmgLzTiaye9VmieheKgAckYWVZJLt6rpvRDNyroCoBz9VEDy",
  "key12": "4JjXmkon18HgAGmPW7SGicbTF7vsc6ztN4bzC7BAyUqeVhDudDCMDVaegdzgwru4xJL6LDwZXQbm4p5MhwdAFCqp",
  "key13": "BYNiGnqEdVeiNC44BVhXdPpF5oaTr3JLkqbA5FooPhLnEf6VN6GVAH3aYFMTzRKutuFn12v4gF8jTVWKbYV5XoK",
  "key14": "5prgCyiL1odg3sjHtsmKQj8ahpUmHoYFxfqCwJrQMwuCadFSb9fHguzvrpR3ChMa3amHZBdDm44oxFAA3nF9WR9w",
  "key15": "4HBejQDVz1ymt99q5Qf5P8ooJwaeKgsXH9ntqBHE1wVjxy7DPksyDuCrdiCiLBqNSXaKim1VfsdAc66o5N5EuFen",
  "key16": "3ENeHS8q9iAnQ6iV1MPERonK4UBQZ5T9N5uoAxYPHwo3otG5iQG18cfwSW9j2pCwxprDKLkLjbYbawr4dnXNu1PF",
  "key17": "5qrgkTNrjjPCSJtvhAfZW68bTYsm4udPSCzMNrwnUW46vddv1ajYReJ5UTz6xrD1LzK1wSTn1bhfjbLWa7xY4RcF",
  "key18": "5BUg76dvU86zoRCXEAHyG9uSvc6CAzADQZqo3tpDLrNAwo7EELHPsS5yVn2LnFvAmj87RyiTiWdzcjWST7arf7Lz",
  "key19": "4ryWzGnZCyFH1h2t7ZdSkdeh5nqEw4vmFsdciFwK7iXBrjMX3v4e1gD7CThQPPpm77WnZmmzcjxrSFziNJex47jc",
  "key20": "2SBEGF4doepCYpToj17XkaXqeyUQMBhURcNtLU8EYzALt4b6aqHjd3ghMyj7Ynukh6zxTSZDQDreabAShxUR279K",
  "key21": "48RpMkYKfS5MitvodirdZuNq4pM5xsQWkVdA6Vmm6Yuszmo4XzpnNZ9tTTiXMkkm5C6A54gqE7H8rusJoJLZc1dH",
  "key22": "2RXgcgzGZZ9XTXoyrhCBQvZKTNTfSWEB3cmgMWdYXSUwNFbBnxsogh7eiAhFS6u7KGDXmiXLKuN6ajURevV1Tb2c",
  "key23": "oXuB7MQ8ZTTS8pMfpbXEbhDF9UKhCed6vi4LpZpmhtf5An1MUJfoCPVLtYRjjHvpCFq24GwKfrgHPaSv238H15n",
  "key24": "5WHKsfSLFULCxcv6nmrWZBWkeSanPksZK9tno8En98VbdETsvQumprPguKuWmSkaPeqXWP1RyCbQYKgRdkMWm3xo",
  "key25": "EWKcbxP7sjyPKQNhHz61nRzSsUGnb7bCCn7drykcrKcQaqXxDp2sAkxY5YWgTJqDwTkn82XVqYd5bMS1jX3L2qX",
  "key26": "5P5q2EAnfijHVuMM1jSfLpRTTodzpqgkQ9PNebovgBrQT8EVE1QiowcqV396iqJ87pdPJBXvwKT3shyBi5YDCeHe",
  "key27": "4XF3GFJhned7c2jeQrbnBKb8LsFhVe5Ryj34JDEE2cEmmaeu7A9DFvCZfCn3mcvdUj6QcudX5WWpdci3m6LNY7dX",
  "key28": "5CfCBCFouwKcoDuUk8VbCJYfmVxZeyNfcXJAP1V6iPmax2EJ26HkDMfZ1rNTK2JT9Ezuht8Bvw1aLrLVbgcNzi9u",
  "key29": "5xCsezXf3MWEtZpP1sFp2h3KYDM51z6BwPaYgzJDNAys5ALxJybfNbZ2ctP8cDuK5BYaxfD1mixnYtkaDVba972G",
  "key30": "4gyJ7mEJVXVC4BPY7PuwpaJVD6iRUYtq75DPZtw6oiUiDyXdFkLKq3vnDVEbBCqDYFdJVWjSS2MaMxq5tbojhcp4",
  "key31": "LjPkbNd67GNgH8F3vxme9jjB8vdALEhCr6EqvUd6fDy3X8oTSi3GM5idbCm6YdrRhDt4sqMLFU4pzdb8JK7WjDX",
  "key32": "31AYaZ8srCyXfTNnwpbJPD6Yxni7UfKMQbcWBCn41pUEdsttS7XqhXcsKDyZNBb7629jhJfRC5ZRGa1hX4DUJq2M",
  "key33": "Ygsivdb2YwTwmZeeSUeMJH4zrPCiYVHoQdpW8s8zkV3zjPpaKPazkAYcwhYdV3AkoxCjmfhsytnhCmHiabXUaqp",
  "key34": "5LZ6XjrKpGRydhRVZshBkKHni2o19zy4jVVB8ZNLeu5QQ8JqcETtqdd6o6mG8zJQ7G3X3eNPEMk2Pm4LYvN8FrmR",
  "key35": "48fV65XP9bvhuvGU7RZk5LRbWQZ67J9T1DTNu7HC7BsztqinfeLhQbdCYUV4wa88tHRyW7F2Srj7EwzEjByWJfDy"
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
