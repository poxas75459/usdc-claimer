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
    "5mEju2d5YbC2u81rjzJoQF3dcj2NBfDuDjXMwJUVNNyE85toY3tvR4iRrxaZQJTLayYkCUr7CtNKuyE6NeZqHEXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P9gkNp5du2jtivnrtQrADf6PPA9z38KhnxVmduTSivhq2YqPZsgkiR2BREY45rDkeFwU2BjKKHidFnxh5sryeTb",
  "key1": "34gQAreeou4rJqjQPfM2KPhy4oHwu9W9xi29M9ajAWiDWJxX754vMKJrkJad3EfR7CxNR32P8vH5qP9t9h6RXADG",
  "key2": "4qsHwwe9Sybhy9vtEFF9vd1YkvQU8f96RJQZQW8cd7gCdwGQAd4cPLmJtnJRiSepmTzFGjndJR2FNymnYuPVy6s2",
  "key3": "4uRbPfVVKjALMTkKjcLaWpVPBFJ6Ykxj5b1qErBKm8ZS2gdmzMEv4svMK66hadzbtPcVG4cJmLm2zsfdNtuLdPko",
  "key4": "4kUiyX8pyiGfMNM16vtTc4mRxuSvvoswY2ddDkTArXKppHik7P9Ey8THHZXYxXa7dqbdbVsidZ9qRKgbxoitKbxG",
  "key5": "4R7SFeEUzV8E6WR8kddWJm1QpuzrfCkpGncJkg8vVc2Jc23tuY8Axq7tHEy2hJZsjyxBjokpPFMrQrx5xztANLZS",
  "key6": "4pjRHBkYnbFaqY1YKYc33cDDTwNqver779UQPevqTWYae5cvp7hmtEHRbKLZrXcdhzntZqaA5zxRibKagdiktWZW",
  "key7": "29YuP6gwvP7jxie8schwd4GAwwd1DJwt7WHxJL28Jqd5ahmXzWgVxFX55gDGm1GBgZMH4szmdVMT7yJxZgnFpx3a",
  "key8": "4FvC5UuMpmxZxXLJ4cveRrVhr4NG5GiMeZ657X9FijsXdyNEJxRus28i1PbCo3V7A1fHmUWr9B6KNLyA75zdSbUG",
  "key9": "5vaydyhZ7Kk61HifivyofoT1PkHBfJR6K5WvWJhj7Z26RTWzJdHotvKn9Qyc6rpXgPpebqbam86nw1w1a3GgvTAu",
  "key10": "SmWweifAU9TcGjaC4ad5BVoY7mrdapkuP81MvHztRZTMKiGMqmnaTgihh3pAje7WayfPC3ZTSYbvZaSBrWZjm4V",
  "key11": "28fSJMAco638LUqCaNyZ2YLuCJQ7V6Xtx77Cx4CN7HD1SBU9FrKgkssCvRDYv7qMkVVsYR1YcRuVzyGnpT64DUnz",
  "key12": "3QhoYUhkg8bQaVsD2B9wZBZBzEPwQ99EKcvspbiT735PCKJ7SgAEcddFM2PwA966gDeBhbsM5PrAbL3W1pvjcw1k",
  "key13": "3D4sdyn4Xt2VyiQmpxbL4Rnn5fAXEM1oRx6auMmg2qUCzZb3jbVMw5FvggvDMgvAkWgqJT4C1EyXmh8Wu4QyDVAv",
  "key14": "2WZbzGX3ThibRAzg6t4eFwrHxfYtZxkNHirTGW2UuF6YdwEBmWP3TCuqg1B6uV5pxL59h87gGqpbUEDCffEbaBp7",
  "key15": "5sru4ovuFpCVo75TcYzu6L7XAy4cNUQd8DpzC7kPQJ5EDWntXYRHHdNL5ihpBHsjs2TKy8GiyCzfAB7hNns2R3gr",
  "key16": "JUQcVBUkj7reSqATxKf9AShRdaWoxH5vNwmUNZgFfzpiaoAenFLihk2GqoQSNnB4KRZ5ZPUx5k8XyCbiiegMpUG",
  "key17": "4GaKnDhYRbMBQrHaLmwKxMaU9W37MfhCK8B4HGM8oX7bt5qS44zbaH3mNan9Tcaw5Pz2BpdavQX1rC1H67LihDbz",
  "key18": "2YJv6JkfA7HMU8HKRiwy4Zr7U4zcrzAZ2cLtB6NPNi8KAoWnvQfVtc6pC4jko7h5B7PsJQJYwZAmTJvDGuKyDBHe",
  "key19": "57ya1tu1bckjFRuX4DZTMqzgh5gCJ2eunY7DEaHKBVExyJCevThopWh4rAFFvkbXASFhj29DmFLz2ksc26TCzbJY",
  "key20": "5vCbwyZXESrHwksEVgzC7GDifH4MKP94L4fYZN9eVFxNRxSJtg9VuG7GKfqUETgMNHYJWiyYmFLbmDb8pYpa3Wpz",
  "key21": "4mEaXtfY2Faf6w4b81Ug8Mt7Gzq59UpmAhfhEUBuRex5Nv3kR5ziddzFSkHGbAxfmR6RvgjGtS7mpE5GtUW7ZU9o",
  "key22": "3FvANzeSLVkpUqqRQoeAvnZeuvrjzhvY8TwEY78QqABUEn83hJnPibspT7vrr5nnKPWscdieDbibYP8tDB5hbShr",
  "key23": "53Mby2KxpN2hqSX5oBpqS9TnMDVd28jq1VkB581zSdqE6eoXqEH7CiDE2jKAR4E5TM4dXDDyfTPbPiv21E46wqeR",
  "key24": "2Z62fa9JiGk9d4S6Goy2rYMhemeGfEv7F1iU3Ext2Qv7BeyqprPAiJ79jtjRCUtN4bK5BD8Dq4kYdeVQKwEJWKuJ",
  "key25": "knUciZFRZUu27r96WDp2zdRgTzUnCjjzQZh891W1NHMguAm5wWEJakAzkag3kX3JLnoFWg2LSddAk8B2161ZDTx",
  "key26": "2vqj5Re26nSiGWgySFuDWoxAigbqjiEnceU1UHgc4xhUKxmVYj7oEyZbduLWusc6tTvchJirkZGF7JSypQt2i6bn",
  "key27": "5jWt8pSArGPamRK69nZ3gzCKN9p4ACVC5Pq8PntQt4hKoAaxtRWcLnrs3SpWmqFsW3C82uU69aC3bFTz9Yd4Fvwf",
  "key28": "2FofHrUBYFMU8bzBroF96ik1qNU9HewogkUrP5w9RnDvgJMatUL6jRQuWCxM35kjFTCcbVHgNPn2v6iX5pU7HG8y",
  "key29": "fTdkhXdQrVNA1AuCZVVc1Ba3LQtsWpAdzrcGcFhVPCBePidxjki4jACm7hWNJZNrN8vSwg3WWSiFdD27Gw6mrmB",
  "key30": "5wbYQofYWAyoKtsqkPjE4v8aLoYR1hTBwkJruZAdJNXZR8HQRQBndarkb8HZgreFbfw5WjCqqkz3VVH56BxQgvuK",
  "key31": "4WDKFmEWXmAVRMNZUxfgvjm7aKbjLkugJVyZiS44GyWbStyAsxbsABXJVKofdZKsbAbyGxiAMzWqP5P2BbGmEx4g",
  "key32": "64v4znx7d4dEJAqAQmn78joUkxpuEtDmSz65yy6mpA4ALfNARcvE5UF12vvvNEVTHswkso3S6gc5H2Woxf5JZT5u",
  "key33": "2CLmBvRV72YoY7hYeWKU1f9erswq6wQaMLkS9QXVxicFRgC954baXyevrfw7ktUEYJg4y4bS8njrYyVigEB54pZR",
  "key34": "2C857dvn1Rb9k2GKq24ATTByGkgP2QYeYatzB2LGxFdvtRJfMKqz4HGb66NTabsxG8otYhTHdPrCpkzA9cRqioiT",
  "key35": "2ZUEQFojSqm6YmigJvSSZrjLTJUm6W2HQgZFZqNcDwNkgMroUNGrBtT1Zk3VYcBrasfQUzqT1oWVSFu5FYXyBazb",
  "key36": "3Y2ZsLmhHZfXmdvbZ8cNr5asMg5oGhoPusENSkJhPx2B1DNJA4AzYs3MPHnLRQmgX66NMznY134zHBHUq1n6TxN6"
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
