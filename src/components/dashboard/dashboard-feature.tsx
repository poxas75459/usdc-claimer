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
    "5qHda5DSwDdQNhazGsQc1LfPQaCRh4CJhpDpHUsRew8bqFmCvG6DBfcMFvyXfy8dtmpbwiGbphW6aSHs8gJjdJoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3itGwpLFmqujJ5TbyfjSZ7eFsmXnZ8xetfUJtkoYZT3t2EU5dmpybtkQKPynAFf4DUGnrBJr6FV9Eyp2XiNQHw3h",
  "key1": "2a2F6bUaBbXSiVrW18VVNuvWjw6gZA8aT1f9x71ZAfKaWeCUbdXZyLQUxU9RvQbe4TG89UComLL7ay9XVjnT4tJB",
  "key2": "4raoFadGqva9j6DcRTZaLFabLNLtwPeeJnZhT5DC2YYFZKF1EMxdYorMBk6tCH1qTdSNymCiBcGmVv2ygKcNEB8",
  "key3": "3SkY6cJQVQQE54WHunpEHEWMS7tgiavR1obVijazTBHQoNwVzRLpa1S7nn6viHCPC6Rt8ChTBrdKFmvrJ6b3q1FS",
  "key4": "4xdZbweJJUi3dc6xBA2ueiUPFPzV5wjaE43eDov67wyV7B6RjZPjqD3zbnMQeBzD86g34Ccs6rHkKtnH4HrVnjJM",
  "key5": "Ag7xmdFrouCZW3fjmyFC1TGr5c5Xw2418Tsm3woL3bXR2Ew9TAYetCLaQ9j7Xh61TKJkgASrKBbs7Yc7YnAqr1v",
  "key6": "671vUt31oBJtXYs8C9gEvqqbTYp2GMeQABcD4o7SCphb1jatRCaT3J8xNqqdzaUqxp8J6PX6GbaYGdPm53hXND8m",
  "key7": "uJw1rZ3C2GmmmcYZLpFHybTWGBopfmdWrUJd6HLJqMzijVWrTzQvQdwDM4G4pucyppJgtey94af1rQHUGYqBQw5",
  "key8": "32SdnCiJdcf9HbHBacsDUPGoLpow2Sdj6qJ4FbwrjiWZSNXU2degCQkEWk1eZCP7SMuf3Poyxx523J4pWzAAu4wq",
  "key9": "ETB4rNSmJzjNCRn6L7qGDwkiZvSyE8Y4GFuuGzMQ8r9YYKMq8CCDHYUnmd5EH5mBkLUW7PyYBuqfSXspQBDWfiw",
  "key10": "3KwPPdEeDWWw8xacasiMkudF2vakA1JwdnccHSgVmPXz9EtawjrJiDdmj4UvJKJJG6u3GnhZE53pp5Z33aqDwp8i",
  "key11": "5VhEjUEevxjYzqJrad5cBCpDpyzn5hsRcGqQKp4SmVZP5ep2g4zsWfMv3cdujnMJJVSK4ViLJLxmP232GGcnB1xy",
  "key12": "5DfEdoyNXicPKGSveYaMqd4m1NrH9GZHA8WvSfz4dr2pYHXgUZKQYnxHhSAqT3mvN2zwqfezBT35pdKwM1teigoB",
  "key13": "3cPoN7vFYjVYwVuvV5xg6jZkfZ2paysf3WBM1aVjgXKVpdAR6HfVm87FfstWctr5SfDkfppBd5JeQBmAohseG5NS",
  "key14": "48CRcW5yvHwAL6UM2EPc9WNFzEoqnTPE3syU3YDCtuez6KQboXiKbzfhdBm8jCqWur6XxxeVv5dJMiz8r4sxPvmv",
  "key15": "23ugJ4BNEPDTSDvF6Epeagz5YhRFKn2uxbiv59Gqc7Q41hDr8Vkr6cCWRhS8MEsDYmT3uZNqrcVFrmigK5mrHudF",
  "key16": "apC54HsUL6RiFV135zxvT6CzfJtWUKTnv84zreSHCptf8iM4oZEbhsNsjk5aaMZgssidMTd5bvbEoZu8hCAcjHK",
  "key17": "5gABdX1gWgEQvgRbYFD2L6NfYtSj4ooFBi2RqSXbi7Bn5527cgTHCS9vqkks4Ky9TRXbFDcJWSbSxDwomKX2jzpT",
  "key18": "3ZGFQ1z6AG4pXRAmQizddRRgbGupexFY1LoRL1LJheuXZA5rLb9DwSq8tu6GY3jQP52V1nRU3PQtVDkifm4mqFMQ",
  "key19": "2HpT5VaUSiv5H31AJpuyGE6hdZppphCW4GDzUttxaHbzBVZxGjSM891ESVtVAMw7fQFd9j9NBGfAbuS6V1a3cG2P",
  "key20": "2GF9ydYrm1ibhcjvsavzcjVSUdcYSiJN2G72p984U3ovo7M7LsTWNqfGfxVvyQMJmFWNkL5i6GE5ysPcokYVYiyw",
  "key21": "3uPskexixsxeCa5uSoNRywnBwDCYMTJ1T8oY5m3wKo1zBdNdPfhp4BSSTDcawuadSzwHnYzuYzLfdnmKCAy8Emby",
  "key22": "4YBc4fydwgUnmZRgyoQJMNad7xHWzS9JaiRJH6BwzzU5tEJiBxAzmG9wwxXUkHogRKycGHrk7vEv9uN4EiJ5wNMz",
  "key23": "LtbEhZXVwixziB32FxGeNzbq7Eq4UWV5D2HdWbW43BovWujGzwM6JZoNJUkrwDaqKHo8xeGoWXwKQiqN7Ke6sPz",
  "key24": "3U8Ujyfy4939cN1J3FAFaLc92de6JeknRwksLpRWCVv5hDL2a1ifgMeEDYfvRd7wNct6GqwMNfFCsE5E4aAHKB6Z",
  "key25": "5DDbHgJQVY8kUovPNVWP21ca7qft5RW4cKnMoeLVQqB26ix28aWvQ7LqThDDQH1YzNvtb7QAx3wfV5upfkz58T3d",
  "key26": "4iBABD4AZhDVD9tdBzWPJD1MKvyZrsewSL5DCvBpvRpKQedKUo27GngwJfU2kvRFbeCQx9aeaTLuJLH3P6tmYnKn",
  "key27": "3Pgyp7RCrbwRHtTvvXK6SzQFiFswH4SsDvWaNRCAPBovxa3pj1Acs4PmjE43vXGhb8M3x39sPARuqoSy4sTiAnBx",
  "key28": "5KcncDz5oA7YanWkgnZbfoJxqwT9NGPY9o91aKxqtYEwoDyaDsFkC74NqWrKMdpAKK3eCW3yxFdmjALg2aaLxWZo",
  "key29": "47GohsP2yKXutTuxDKraS9Bt97Lt6pJkUiHwNgWXCegzGG8vARGWMhGPGGiqax3RMrZpDxsQwGA2yEKu16SCiR9m",
  "key30": "3RVyecS972yAg4ZNfMHNzJHQFL6f9XPc183jnXJgW65h7kMonMnDWHjmJWVGkF9KUDrfoFoiEACdPNiZScRabphs",
  "key31": "3yxp7bzvj43YcDNVhtHSanCDMW9Xk11VQxt2zwuM83oiqjp9gtXqak9gw4jH2BZXPj7eSpiXxvYbQbhvCt5SwnbX",
  "key32": "2G7aNtdfdP6kfqQP2Msao5PM3hBSAT54ckHRadcNf4TgMGDH4dBSz64zRPoerup1FRemLfaHf37JBZv3J8bjsvsu",
  "key33": "5wYsqWXM8f1jJe57grdLv5t3GNYb1mHnce8cCjDmZYLVPnBfnFjpcyQpk6BNYahkBrkKFZfy18rZX5wqc8g69MKT",
  "key34": "2B5SFw4XTgGuPrPf3Qb2kxeCGLZ9E8N8XwjE7R89DN2AgBmnmbMTwSWFeBRPkWGHV8riyKbQQ2aEQ5TeQQE8b5vc",
  "key35": "3BGUYuKV1Zbb7fSdvewTe6VM2F3PxXwtm38dqzUGe9HTekX7zvRHVVviy66mua6om6zM8uZBPxaNwbjgpR8ZB66Y",
  "key36": "49vQTMpvTsnEW7VToehrwZLF4o28ZpC6xypJ7ttvRbTVbnGzQYqo6hqYwmduz7QnVvBWPxSe1mRFRKZJQYgYKrAu",
  "key37": "4mPiAX56YLYUxpM34oyxTiWBgFAfgNJSZWMLYYYfMc632u5DhzZSBj2AYtb9EXfr8Nu2JkaGoUg4WH6YWwwdaa57",
  "key38": "m4Hg7EM4mC8XdJpoggKjuW8SyWTZKTKmycTBhmCDZJqze7dRYmYtZ4L5EQpqpsDAGuLcH2ZC7Hg89knLgwqdCnx"
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
