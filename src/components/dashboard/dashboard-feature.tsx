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
    "5CzH18qPUYGbq1D1i175pUwWmFkLKGMP5Bweo26JdydnSMsLdDhUNU4xtqFCQmj54bbf9tsaQybN1dnbfNGiPgkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LHg1uaP3dufp4k4WHPuaJmEJFMsHEfdVNgcVZc5Y8yXdKnXHMzXafVUHvUhV8sFkdxE2JvzUZvSZ8RFU8ovT4yq",
  "key1": "5xYsttGbF96nK83DrjLjqRz4qNLDYYyJD3HLWqawxEtYJdCij6Dc7FdA9F8iMddRghZCh74qT2jEPZ3EqoQbFfr7",
  "key2": "3JwxuNWsP9HV9WrRgQnCLnkrKqfXS9hiXnjBAsQ8UYvkY4RWafHapDAp4KNsTTp6MriWHotabfhsnbjVooU3pLnH",
  "key3": "5Q7RaSMkNa8S7YF9337xQvuJELRJNCDUmNeeo1dp7iNEexZkqHPr59qKW4qAHzrhxWpQ84y4y1rhsH1FteaNxmqv",
  "key4": "4z5G3msgyo64XUi7egt7AB7D5dARqV3Wk4FnhpAiaYBJNFq4MV7dGQq6Su68Dhqo6duuqNEKjt2upHQnt4TmPXVH",
  "key5": "5HnivHPBd3tLwyuPni3eU9JYKpN82SqzUxkCfAN5ebzmnP4dN8F9UmYfk8e4hD8tP4ymUPk6yUbP6ZRpk5dRfL13",
  "key6": "2EKLBQZ4KUgRnTM6eaexkhsAPFgmTXYKk1ErnTUo46HeMBvfpVZRwQaw4UYWCM42GTNGisEAaDKLHvrpv9tW8EQs",
  "key7": "vQAi27GKPqHyqNmTH3SGdoBYesB3wWT4HZNq3AKo1cYMPoDuegRVUoDFFpXTz9TNamEdAxyUCJurqVNMT1kwtdN",
  "key8": "2CbhKrkfiXL5moaix3pDciDYbU4N6ScLrZDH6gi8Ak7HWt9TfEJFrZEGgmkPtpYzvM3Q9JtKmgkU92c4RZR86cpt",
  "key9": "XmXmAosv7HDJiCH69YTPn6a7xEjAu4XEZ1yV9VzseQsH4g34bUaDQZZPXpfxdsEJxjnHEuoWuXj7sP4vVR5znUS",
  "key10": "4r7vLwJCfnU5nGCGb2bRrGsKaaSf6z9qLnAReJoYEyLKSmefLomsjKaE3R6xh4GZX9hj9ur6Yy8GSFR8PtAPY4ZU",
  "key11": "2tPNKGpdDqG8JdXaEMkxtDuSjgdiyCSDa7Ph8u9SsLeDz6hRCr65xmrV3jM6JDzMfFnXxCQnjAo66sSVetYXGYg7",
  "key12": "3SwGPaqd74sGzNZjALYrwBGYrL4aecwzViiU2VjmnL6GCMV1TpvSUhrmg1yEKgSFsL2zZGMoarbvYUci7CpXA8AK",
  "key13": "61fpmkwqnDA68Zyxi5PTntTQYHFbVEaC53xx6neJk1rx5gfWsWfnBs1521bekDXjFh5WCxdUavFJ9LMFbzg4udNT",
  "key14": "4TSEf2ZFM69gbnTMS4hLaKTyoVT9dPtDTyCnoRkvFgRL7wxPr9syu13aUMTDeAL85Zoj2hhAgkL2218w7LLKSjvB",
  "key15": "5uQuots9sGdU5UpSMCpDvhCoRt6J6owVJ8oXvz1uHLDsfSHL6Cv45AYvtMAf8XfBXWbrmHecZf2rT6jsnHzCWm7W",
  "key16": "d5F4mwXCmxDrCk64Hgmd39UFwyPEY5MZ4HgndBaUbjUwzB6YyCsCEnKL1UbnW587vkqPvz8JP19xt5dk82SS8ip",
  "key17": "57CDXa7iVHxPf2YX29qBUkGQ8uVuBF5UH3NLCoRj86CpkWUqxZW1RWx9PAV5mkhunqyogFMZ6HjpWYx3mpTvj8aD",
  "key18": "26RtwefXi5iiSidRbEv9f7q7ybGemsNroeRvAbXjR8dFDfcJTuj5DBw6YhmAzefQiaZUqHDP26a2PKHXXcpTDpn5",
  "key19": "S1TBD37RCPe8odMeDsu8XzmXLSV5VkMGzswBePyS9bEyWZPkJGwYwG3ejyrR22D8gAL8MiMLUS41Fq8CgRbMKZ3",
  "key20": "3pmGV4whDxHpvrqiY1cURQFUqutAAPy23MxiXAFvVMPWKaMsszC8KXr9ZB9xED7haHxgG781rvQ55xSVYPXb5AYx",
  "key21": "2CUppMFSMGYDUTMoPq19ktBLj7q6WpeSiCWz319riaws5HggXdY9EhU4cW7tdUaNLJcyV6dNuQ8v9RUhAcavmzHg",
  "key22": "5VryhL7qeLXhTtSt26feiD94vuavY8iQgZzneiGNNQGnjEYCW4es6pe1QzcLdfPdb4Z9shWnzdVVs5FggMxUMLAg",
  "key23": "3n1xeJNDVPzGKpfQsfYsXBCqXvVC6iVfZUrkiPEwGoxtmAuMnqteZYzvxuth5BBP6DdS1TpjaYtRAg3qrcK9KzVL",
  "key24": "3hZHStfAdoKz6G8gkDSP4JV8BeCDgn43ufk9poHdXjjsWk1Chs8nyH9mqpQoCH7Z9kUXotC7AS9PaaZYwR5WFCTQ",
  "key25": "4hXMafMxwyWQALjsY5ZWKe1ZWfVYJYWD5kFoTVDZjbbbLsgFZhv8r5d3EuR2rKXTzv9qRMq77cwDw9MYhdmnR3Y6",
  "key26": "2LZFAusmyifoSFQGWPXuDU6dAGx18iyqAy4iU55SstrfeaAaf3Q3Ks1xnJVUfgg4DU4V47gJyLoeSEkMfyAsU5mW",
  "key27": "2jDJqvuzgagNsYq9pRE1nh8zGGDBfvUdDm8HrewjcvTaw1K2SK4cKKENn8WTHTu5i11fB3TL1CAnxxkwp8WnzHLc",
  "key28": "4pemuDUwK9SfGEQrXdAa7h9AtvanjRU3CkMfhJALCTTWXEoeUURQjseYjZ1YpSZoTci3Uu3mQLkwqXA7Sm567qHP",
  "key29": "4FC68ar7Ph32pKbux4gY2UskLMNpyZCy3Yg8QN7yUw1c79vgPpSwE29oYzduB3SwbDcfPaU2FNpnr3tPeUZT2v51",
  "key30": "4Rx2nFWF7vHjQcFURxkYsEUBznF4F6u87MpfSRSxa4EWEq2wcy7rWHbuxy8mSoC9ShpsQ3LbjjKTNS5noDxpe7oQ",
  "key31": "5wckCGZWv9ngm7ZTgocAAtS1RwRAAWUMVQ6Nj86BWKyxqQNkTyanu5wwuYDTSwGrNeTW4yWUm8VSRu5iaG3uf8jV",
  "key32": "2NWc5qbYBAYkBQo3FzdMiqF4oL3KP9XSdgZutsoxbiqwXAijRHxyYpLFoRr5WwE24ZxfpZn84ZauvE61h2XkLyXn",
  "key33": "22ipKh6CRp3KKBNqQ8B1dzkyrnAMx3kbVXCLmFCujyxihRXsPGhiVMVbhWvDTXHNo6svYWAn9JbBwAYE1P5XD2Nb",
  "key34": "3TGkqwXKbK3Vovy8QwFc1MUCgWt94MbQyKKiC9kd5RUnfTpq7npjZUgi7if4TPjiHz1ksybiucqVmDbe7Jmo6fbA",
  "key35": "5KukmBCicCDMcbf7udFJJfdUf2mJDEucgf5cfve9UefaY5RQ64okZaPYnqi5fKR5WnE6pJunjFicKPiUfast1xGk",
  "key36": "68kqURh3c4fmGh2mYWxs1NEq52pesK63nReomzweSYgn1shwRZNy7KHHWoJC2BuwzCPMsxAhE5SQtjsuKxAu2rG",
  "key37": "3Bv4bh1CX91vDAKG3tPNcF6yYyxERrmD4GzAtKetFEahNzVQfHwEC4dsasz8jjFA9ZYifUi46RPwfLJnKQci9Mjt",
  "key38": "2BApbSgdk6kohFsQzZhMPzkHKneKTy4R9riZnt6aGuH1t77NYSEP63YEXuyb9r4bq865hsa13RGzRrMNH1u1Sywo",
  "key39": "QHwBQE98sdQxRZ1wQoihNwGS7iuW2QKx7KekvWx6YgiHD9oEfNJEtG7GyGiEFV33TpkM3HHnj2ZdPMSVJ4KowLa"
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
