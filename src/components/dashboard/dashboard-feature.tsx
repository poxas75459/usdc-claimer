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
    "giiD5jTNzYBbshiweou1kLikYkZKW23AAkf1v2vWDuuuJhD5mK2iLeBwTVazkiDzVJquH1cwJCVkjZFHS75BqHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HELjSZvpwKHp4kLJnhZQj959DDfLxdpg2fcsZwPRvFvNgTZdft8a9KBzrazNEmue76JGSKeygpA9AfHTykv98eB",
  "key1": "3wTj5cjjUBGUdU1KT4ZThiZtVTNRa5TAMLCms8KuAstzqwHzvTutQeQnsVhUrc2jVeC9Ywz5m4FED8W3V5KB7uhy",
  "key2": "5SWdJar86ac1BkdVfixrbsCdf2rxkLEzfKdqNCc8Lb5AT4ZHUUK2R4sNRk3E9449yoHR9P6Vnm14tqu9Aji8L7QM",
  "key3": "59DgSiWP2WMKX2kU7z5adLMXah11F5Dey8BwCZbGvwpfcZP37EeUEzYMqw1GT6e6BPQM4pagKPDxZ1ZvzExD9n2D",
  "key4": "5UDNfhhy3DtLLhPfwzGxVkZvaPbLoPMz4D5hBfQPno64FQdk8uDTxaxdGVTRQd3kTQVQ2Tv2CBY4Ft6qtJnxnBLV",
  "key5": "kgVNDKhujAkZ3sBtNgiTqKgj3V8EtR8VHRtbj2K37aQdYs8wLLqXS6wWzAa3XFCb7dnia1rYHU2ZUKZMVsyR4sK",
  "key6": "4Z5yMXidraiQaYgvMmztWiVM4iZBtrniVMBfyChTqTZasqJdHZFsrDzM9HT322qfiMzRTxHCXo1rFtWujVGNVbGq",
  "key7": "iexa5yC1MZpF6um484ifWk5kQceHuX9dzgjEyKd4PHo7LBjG54yMaoXThfrJ7H6L2LjqWQZisWjmnN3PQn88aDf",
  "key8": "3N9p6gcfm3AP6BBFXWoWqjpbRJWz3hofpaiXG71MFtJfi3PNkVDy4BZeesiDBDJwSuANJJDcewwbeYpy6WLsb77q",
  "key9": "58TRhqSfs67F2pqFVQbvKpgQ6TK47iCyGzr3aNZvZXTMhfYJL3TMbhE1sfV1X4BkvSBiGaTbBkwADxfB7ggu6epV",
  "key10": "4w5mTniMWN2BBWXb5kHnk7MHNnynSa54DjJmR8hihMEzjns3NZgiKaeH5eipt9MeGdBQrgXZZF35i3cGU1gZy1yk",
  "key11": "5NasfSvaPu4sDnY5jLhgp8Td8iZDX5wqj2VG6Yn9phrX5Xjskh9NRiQ6Ukivo1p6PsTBVwS9Lf8py7uvY1BScBPr",
  "key12": "3rD2g4DZT8jkcWERaZUb6seU5A4G5U9MiENmPABXYBQWXXvKJEWbNMkkfpQSEfW1afuGiG2HvhreNwAtE4cCM1ia",
  "key13": "LTbWWXJQApvasZzGit2aYF65yYM7AdgnmjCit2Yt4hR8v8tH3n4xniZmh694PwjR5kPDpqYGJPCixiu6amVVdRk",
  "key14": "3SwquxGFM41qFQnQTKji21FywAHF2DacLS9SrogG3n6wSW4NS7FnESb1JKXc6c4jiMt1AV4dYh5vC1rBmscGAddg",
  "key15": "5BjhJbZQZsfJw8q8DGkzT4YdJei4n8rraDUpWkgnNBtwsj652ZesXjURd2BXzigwUueMvqk52Nsy32aZszGv5VFd",
  "key16": "22ejBsAUxYf7UYpft1UkLtdP5rNK3w737ZY6DC9pNMniHtxCKKU1oWRLho9hJQ18XSw5nrtpEBmEW4CLZHdQ3T7e",
  "key17": "4toxU9GAJb5qudfnR3FbAHvWFazVEngrBqzQcTtayVjdBrLEX6eZxf8CgLy26kRUxsCrzgvYZAwuBozPaCof9UWM",
  "key18": "5DLCAKoi3PgsVhHsyVzsKg3UHQng3YVxGzJNG5eDk5MXxwgxUeuVimvoGk5KshYrgLpVPsGXQsYjP7xrohK9XBj6",
  "key19": "4u6Tu9JUTNcis4dCc737YKqBvC2skEBe28cM6xf2fjMMY8a3MtbP51VwDN6tHDADkTBb5iLALcugwRYSF3FKm8TC",
  "key20": "TEHRys8KzgwjgSzDYxtMqoamUuqmBuYYmKkjUtuxwjiRQRKBx3mNDUua3THctAh2rZq8YQ31yVqsmxdTkEnsFTN",
  "key21": "4oLxDDNocwzUMkGU6TTKNawo9ZUpGk6fL3FFBX3mwT7b4JCfj4PHwii7ay8bwaxtwEPYC6A3GZiheSzNDY5hiDik",
  "key22": "24CPL5UYYKC2ey6VXYqAmhzMj4kj25vZMZSJZQAdSAuEKUCqTV2oKoAXhNedVuW8iHbgbUr9MMchCTftBPDTzSAp",
  "key23": "61KEYb8GrZcQbbFpxaBS536zWctzEXkynWJALGsetmx9pALrhcH5MmELJDcvMaAi6G4RXfsEqPki8de3tjM6NJRw",
  "key24": "2hKGU3ZLhZ686is2hFi88yaZDy4qGg2X7did7bSkPiFZh6EM73xzE9F7FyftRZx9nGYP5UgxDkwmgC6gybXhgaU9",
  "key25": "5YC43dby2LxbALPjWR3ARwkir2qS7ERZxtBjj3JRv3M8YwskJrKvnfq8aA37FgioUZY4MtjGsC7o5diZRjktVS64",
  "key26": "4CGCTJ9PFXku4dfhmARUDkGvdF8x11fDDrW2i1Me1HUqxKVjGR1jh7bXReqWE3sNFUz1rT5N4baR5xvgXFkYnLgU",
  "key27": "iJbutSE9eiFmWqx8C1zCLBBw3iFc9XEHcYYhe2uCAxe7T7TezXGR6ZeVgU7gm6oNaiaTNNBRaoiJC8GNHa7pJqV",
  "key28": "4ZxURWEXuGrTQ2cBtrpnPDTmBt4BvoFtTmudRkEJPAem9gF8NHmk98J6vSZsbX3WGReSTdFo5NQrFU1wwSfVMGSz",
  "key29": "eQ1nJmsKHiP6BfvndwSxpNUtyBFagB2mJuS63TwQgpkZirE4qBUrRH1skChtMZ7d9pxjPAk1NUXcKdh1jkjZUFw",
  "key30": "3xhB7dWDYPYhUHJzZMPZcXsWtXtwqLu9Kr8DsKUgNkDzmLakUpu7Xo4WkewJN8xNuGH27KLkPQUjByC449Dm2cnB",
  "key31": "4E1HR89iDeAA1kpgzG5cefvYWupS65WRpn4kMu6KGPqo4m4K8wwLihuEP82Qrpe2GzWruANuc5sRaU1qn9zTcBnY",
  "key32": "5HxU433KnczDjiDigdVtkPVDuNrBzDASMoXrXScVhP4VZQ6kkQstBQt9ay3d9wccMccQY4Q5Xv87yTr1zeoXB2bh",
  "key33": "3jvdNjGSLrJQWDHYkLCVFwRKiq52J21xyvVZDt2RHhbciLrfB159ZARCA8KKfN7k4DQZVb8CrYqWhWficSjsiFit",
  "key34": "95QpUcQHCamc1oZConYrVTFu4Lz5CZdziJcuAH3myQBA9JRavuuK9ca5uaCHswUS6QzcjTZz73FatMkjixAy4oA",
  "key35": "3tjrzBoeUNzyiJkkx5mcBCbSSW8iGeuwPWqy2KyzLjerrKnRHxrTFu5w5HU3wQ5R4URYCG4vD5hBfUQhyuhPZBsx",
  "key36": "2ySgbmoJbeu3QxDPfwYYz15mpjMXbL7j9ZimgmWV4FaQbrYW5Z1jeaE21Uw8jL67b74LTzM61Nn8artV3Ca4wsKf",
  "key37": "3PMxvEBL3mxjeXoy84ABU47TaVkFGuCEimpq44wiZ5cpUf5HXqwX29b5EUVcNjDCVhwW86kvaL1PCARfKRetEcTh",
  "key38": "5HorJx8pjXqVpfks317Zktpe6xQi7Lhoq3VwDdVRJFT91MoQ5bzxmJTYPFJpq6y9XbJRF3d6TnZ1rtrYsWt4rkuL",
  "key39": "zJQKEearprdU7ohuHfLNpT1bhxWtCNLe5vmNp3xZ2NV9mvQD4WZW8997N38zmi64raPZhHx6CbZHiU4HPJvzPok",
  "key40": "4Gjsg34hUX7RCYJdWLbZFSAf8nAT4HPnZnhx8krZvaZtKo7HAoSWo6ua9CcNKjSk59NsKoVXYpzaTTjJndEgsK6Y",
  "key41": "2srr6DSykG345jteX8RSvBARJULqtZVhqpx71TEEcPKK3G4FAGQNq1AWERBGCpD18rKgiqUzP8RWQXgh96vgwp9p",
  "key42": "65jiqbccz46sb3Pmn9yNRq37ragroH5t3qtMNsAg5QhoRgAM9GyMXpiDGbTYErNHjKWk1mkJAi92vyp9CJibmvJS",
  "key43": "3otW7CrPHBXWTw3RbKP6vpunZwjBuutk7pkLjXY4xe2tqqQsaPuHb61JMnn6iTvv5NNB38MauqTijSmv3i2h6sQF",
  "key44": "2bg1oU3URPDmzLMRs9LmCBksoMRUr2YN6Bi4Q4LrmmvVXwGm2PNeCt2u7EXkUUQmSoNZwiWgk9rzccWjSDReHupi",
  "key45": "2MMYteV8CuBzpnJFL5PmPYvi5e4KXKgpkpAqNyMjqVHoB9Jyc2jdW2pN5G4pyVLTmdzc3LafFR4n7Jpdr9HZ8fZb",
  "key46": "xMvX23bTnZ5LSF7dtoxrjjAHpCzjwSvXEE67QgNphEstTUJKW9vpMGptwN61Y4Z5PQALo3WSRB2tudjS5viWNC8",
  "key47": "3Dam7zZgn4gAp6yXYZLyddMnf6BJ2ihoeN5XfC8Pyf7s9vKvT6ngv6hbbpvJMNRJFUba4EBxWWfeFyR7S5worN5H",
  "key48": "2ZXiotd66DMnMu9dMzx1tce7GgTfsAoH2VoCcPPkZc4dUoLAPYGt1ZRbFzMHpXAazFNQaNuSiyjHdewgMhMzEgsE",
  "key49": "3LEPE141j3stoPjmkbdhXQLWaHcLfKpXQ9gd8DhNoHserCTW7K6TY6u1RToNNDBfHBEFaGMgCzitcgSNyAVdKxDR"
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
