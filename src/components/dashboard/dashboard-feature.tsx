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
    "46DnfBdtxpbYuxZUgRXmqB2VtiYqiqpJibMz9BTVX9WqjHLf8Yxg7iWz2KQA244CKrL9ARdAbqGqq92kcs13KkCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58eAVAdWTKjM8AtEkZpMmcqU1Zw41s3oX9vw5dBKFpimaaycyvGFLMT32wFiLjqpc2zJB2QthswXhDi9CymiHGAi",
  "key1": "4DSWrUiMJcA5FgeFx2X2DnrX4TJkxRegRTwxkyJuCLZQY1MebkmyzEQ6tKACvnt3TexwpsnxNxtu5TBP1zAH2obC",
  "key2": "1ioV4QWfGxzsHk1YYZzbp4o2b1kgsRH6d27xFSZYHKHH1VdmNBuDALmvpCrVGT2sBhJ4HwvBSiVJQUhVXyTBYsr",
  "key3": "3Vg1CAbz5QeFupBd4r4Maj8TiEfTFvn1utVw6BgCXXWuCxkc6TNHLyZ56RMTNmviAGd5FsphN3q9FLaT7yvu7MDM",
  "key4": "5fbix68Fidt5n1fWuXgRrWZxrtXkfRcGUSit2uc8kvMyxqVd4WDcG1C6LiWx96DAFXTCptGq6GKwwbCkAudsvJZP",
  "key5": "2zvns8EaoaUFH63Zef2STLcaFSpk92Vfg5AamLJ8sQadbTcKY1oc9yFE1SPHStJDy3fpwLR7sxDMzVh8pVNKtLrZ",
  "key6": "2yGwygqSwgAhJYqe31B4mzDKkKEx9Cfc27enb8Vbb8bCf7ZVeMB4iA2a3BN9HTBwCyLwLjxaroFT8dsgcmB4ETvP",
  "key7": "3BbewvRSQh1neBxAjeStxSS6D5oJ9EJJULcGdgf9CsJzCArzmEd4uuPjHzqoZJSTd6BX2WvRyXdQdsfn3yAvJppV",
  "key8": "5WEuo2dvysZgNgUSaoF9va951Gdt25WD4NEMn24n7JBi3DZWjUbRwfdpoGnghNDSsbvAZsWPmH6APBxtie4H7hop",
  "key9": "3LvHBVDqBZB8p44GsodJeRePwA9YghhfjEHnmuivNQ1m7mYUpG9EYzJr1eJJABNw7Nkq7U4dowAAnBU4RuXP7fsg",
  "key10": "4pnsoNQ7QXZ8jZY3AzBNfLgSGJPnxHmSpuyxrvJJtdNLrKKF2NSC6TAc6YC6gpboP5deTyPkzd5CAWi7hueSEBpF",
  "key11": "3acq2e46W2XgM5BH7iH5tTZ2U5xM21MrnVrgCkuBTPaLKn2y74tkULgGPT8CKTuN91CGQhqJfXyQ3M6jiig3SN4j",
  "key12": "5wLh23kxabpgdjF7uGCG5qL5vPxjhxFKYzti9z44NfHD4WJYMDaJNu5RmfHb5h9kXgt99Knq6B5st2AvNRhHJD5D",
  "key13": "2xYcTXygQAjJGoy4nhdtJTJhnfos3TLH3RJBE5ZsDbvLxAY5eEcMw9YRDn3eHrnAoDqZLHciCSbL8oUs8qkuc1Wn",
  "key14": "5iYjwPT9ss7NsSakMShXdiuM56DX9VHQFQ48wJ2urBgwyUEyBcWAuCNMmCDHBvVws1QBXYAV1xRMeHGCos6d44Wh",
  "key15": "4nDd4SyZsfWzLSKeWnuLNXHKN65HHCs4tVmj3qfGNuhKM8jHoevByyXJZv7CgU8XtjXHcXrLqi6UpC5nFeLd2dmR",
  "key16": "2aQfuRcM4zLmdaDFDkXnkmmtGisDYmaqHy5CU6CCAcd6KNqiaptXxkbuvzQfW29PXdALkDkiUWAF48CmENcnoFtD",
  "key17": "2J5HkCijMiBFbuuiN9b6hwJZaFeLGi5kFbWC1z6judCqkrBs2wzRNk1v1S8Tbpvn4jUcAUCN7bzFcbpPk49wCje6",
  "key18": "53VMbNugQG37j9R3vxoTLkpfXxfW34zS7KeA2wQU4dhyRLtTLzbPG4Saxpb7FRtGBRm7NGxkXUgY5CE6xrWFXJj5",
  "key19": "jQpSChyoTj5CzWgrR8gWyuCXKmXxkMoQs5418EatbKUQW18kHiRStYMqZJJBpVp73ZF4CUkQ71m1F69QaePNQLK",
  "key20": "2cntCdZn6LvLiVyJH8TfAgMc8RWNv3mBjNXiUp6okR7vdo19czZN36aMZh4NonVyARYnK8j9rEoqcRFV7791oraK",
  "key21": "3cfi6UyivxBjMyAR6kh4T6YVE2MzxjVRAYy7tQHURbokjKmMXgVxPEWSj5Tu9kCE76wcRQVyeohQZg1PHa88XgX3",
  "key22": "5W51BwVdqh3Sema6dvaxbdcfDiwRfgH63uekFY9fw6GzsFomUtbbMqJDewthZDmMrqCbEg7p4wCKpqCZDoBkBh1j",
  "key23": "5hkvF1BugDjPnZX1LexHMEm6xVu81L9SfwPs7W7RErB9uDyfnoYeBox13ZiZmc7nVjrdGHiVKZbzCDg48SgBoSuS",
  "key24": "2R3eTomHQZ6VD4V4KThWNjfacdEvwsBF1gSb9LpsjJWwaj5ejaMZ9syBAW4t1cXiRxP7C7wTA95kmVXy6ZNdycDd",
  "key25": "4cCcNaNQiWQ5Wojs1SfCrpEBu8NWBkK487vE3SBapJ2NWfBkZXUawBaGbB6riwK5WTM4LQsHBFq34gbKX2M4tRSA",
  "key26": "4SSiwBhE9hUspJPnZ1wXCgm8qbxWLFcFdjp6NBsSk1RofvxiTeJ4p3naSjPokNc7z1u4X9NmUoMeKLcgHYAsyxS3",
  "key27": "4vDzGehtDyYVBRRZ1uCw7Yz7A53AGfhvmqfb5PP9tjwJ7rpynjceSC22TjBrXrjUz4fTg7Gp4Ex2eHToMkdsSmY7",
  "key28": "5eCmYZrU7VU3MjLbLzq6XzK1k8vSwHFU7GnJ95ePZECiRJsqdsXqUc81vUpWUoufdbN1wnZ2k63RZycVdzjuqqLZ",
  "key29": "3zX3CbRW1ijQnzK7Y2QTWrTkUqxXzmPaNXXbmiXD7KzbqCKJC2i1dmFpVDG9vpZA4KEscxQ1PWiQzrRWM6QfiVBg"
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
