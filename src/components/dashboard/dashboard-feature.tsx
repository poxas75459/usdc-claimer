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
    "5Adz5DeonDAD8vKjR5QrTFJp7uuRTzueY7ksBw1gPEaZRNkioHxRFTJr81sMxp1ksTjHKG5fUbQiEH4WXJTP2iSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHJLcr314mde6Zzfw1DQfZtzJxtgpu13NbShTzKKH7KLKQEAfapz4NKtNoVhhASuJQAZM87NysRbm13xTWYWR2Y",
  "key1": "2k12c45PCujGqyRGM4reJRbCE3Ejyqsrs7EHdCMP1CLrqGVD4bwjPpuig6KMD6yUNr2tCoSgsQS5397SeXTewhFr",
  "key2": "4BqLqq2FgnJffBdfsEKBbAJxYkcYAkHLBvgw5chfeUwKU4jDLMHSvbSueSL6Pd8SBUqDCqMcizPK2zyCWW6QYjfP",
  "key3": "JrtmGWChTa4GV2P8HQzxj5EdjDFTp4Yn6RYF7zLnpVTugwSsvqjkbvJKAVgShUc7kK4LiVjqX1LEvKY8mzvpyMC",
  "key4": "2D8eNMKG2TMpsy2ageNerjV8htDLaNxXrNf1w1vi89iyQLEr2Zh4pNqVtnj6Eh82BKajuHv2hgpz9yNY5tiR9kLJ",
  "key5": "2YWGkqF1R3ciSwm3u8s3f8aeS72bFdATLK3vuxRpGWLP6UiVndnh2r6Uu7nJtHy1XtY8EfqXHJSWdvM295Gw4zcx",
  "key6": "5QsfiaSyg6j2Koq4dyYWwGD6zHsJ7gETEwmLFczvxAMKWgPsP3xqNWwSZGmXxTdWx5BW6XP94tH6eZ6rjR3aVvE7",
  "key7": "23CXA831MCXiZeNEZ9p41KfCVJtLwME9YCtXDiJRWiqiPuZHpWWC1a18ZKAGCLzaGnuDBweXFjb3hDpqdibwa6N5",
  "key8": "2ZrQAUD1TQ2dr6yrjd84RTie8d8ubYneHHncw87sz6eR3iu35RoC4fbiFcJMX89QmrvUzwTFWiS3fRbnQyVUSYY8",
  "key9": "4v88aRcB8ewExVYKoaNRa7q1xzTDqL3LDks9BNNhuoMmX1w8fMQBLYHwd74SJFZwMa4Khu9SpYLqwtnnMPjy1u87",
  "key10": "5QWtLro1XHDF3TH8KWFFbLFVQkTpRkncFtufaFpeCUCjLTXwmKWmJvPYMN7ShiotbzyMTJw1NdpRkxAjAoG8FdHN",
  "key11": "3KQdQe6hJmRsXdpNQDjfhXx5TMsAc5puzz9QYXdjfJz884cHKuddKe3WoixZarNwoned8jHf1xsievAyBt7jNHuF",
  "key12": "39CffRZAPaf7LQRn8qmG9p76NhtaFNWDAruSL1rpDbxZAsAdiSWpj9oBtbVnmzsz3UyLNM9WQWHRtCNHQLyTLZFB",
  "key13": "5mSMkqLP6viuf6md2HLdPgwgJ9ggakK8VTokkv7uM5GVFCxSuv4UEQF8FB9rkjth5kQLicJmeod4bJmrt7cyGdgG",
  "key14": "53Yv96jnCGurg6QHpeAy4XrHVnr22EXjHrp6GY3XUfm92hY9BtgSy1qAMyzVFfs597A5uyh2F5Nh9rCURhn1r5zx",
  "key15": "29sDL4RbMrcB83j3cK6yyDELxNBNTVnY1MLkEg7FrVkaHQvq6i4DhMdat8cmBvzBpL7c57wqY4JJAr4nFNYi4D5t",
  "key16": "3GVXZhndML7HhYkLcGco29HmPK5LDMmCz3MysXyVF4cWjdzPDhMHDxDm84ZpccuHKAkgYQ7VCxSqVxVYuzcps35G",
  "key17": "Jud4Tnqid2Px87mNMuXzAXVGrNsGBuT8M6NSuRnJzkZbzNDakS6T8GzvfzqmbKBgDhPtAWYk3vGHnp6WdDMz1LJ",
  "key18": "2A8zawRfiGZRRuLc3NXLFQ1PtYHRtfducteg9v3sfk7i9bYi3fMnjBtXjkfZacU5PHQ7YJk8RZwNCgeEQtsv4Pwi",
  "key19": "2HQXQFXHt6DezT95nGUbZVHpu74DHKNAUX4PaGWBnhPcJGpB7mz7pWF2h1YUvsCxt2WHfTyMkkXCsTFNDkUPvUfQ",
  "key20": "2dHp9ZEpcJSMezPt5bDS9EbX8mdfkyeuP8fgvACzvarwCc8WEU4Tb6kmnjYaUF6NR5igd2HLJ4uK1TwMMuwss9L3",
  "key21": "57rYzCGZCKPb7ztk7mnTE6Efoix7SrNgux6nBYKZw4QQxxHrfN3UA7Rq67NAknem2UCB7AMWKgEkFND7FGDKAaMu",
  "key22": "5HR2pYLeYXZAkZLn8dE1qajzo5EGQ6GD8DYtu4gXeK1trXshda2tH3bAAAXhfEFrQTCe8c3m1w5vDyd5wWxgapUN",
  "key23": "Hm2suP99qFbpfdmS88E2mk3LMTwQen9a4jPspQYt99KaAbmfDsBbXdPCgxqtRsyCTqjyH6uzVEga811XG4TYy37",
  "key24": "2jfGBhBGq9FTDFs7S6ijGPXyU6EMdyaA58vRgRz9EWK4B3AsC4VLj6aLHNfpdjMBccmehsALAG5DveFwxrrCnTri",
  "key25": "5yTFj58idyuZmcCeoPvWZgCbDvZGgzUbmvP3BcdYiBFr1zYceFFY6z23kd6j124upwGFSpiH2s3FioxFs7HkZJsh",
  "key26": "o46Yagij5bks5khBeeKT7wvjBLfgvCZBG8zV2f4gpqF2JNmDHTeT95yghB2Ci9fyk5jfECwMtuk81z14RoCGuq5",
  "key27": "5BuddkcnJSXx8UjC1iGuBbXrNwzoUkpASqbAjTRfxNfB5oahLYexvyv4n8TU9m5bBF4dmopnwZsAVLVcg9U7pg9C",
  "key28": "5CSCTTJYDxiY77hge5jbuXWeVDDur4123sfYoFX9vjpYACmk1UCEiJSuWhq4uBAQHk5NJ6veq6RPBmPeExawLpXs",
  "key29": "5A77oj6swKgfDzH7ftCb77iWZdst85f3zgje7bVgoR4ikpH4whbxmjm9QeUnLU38GyicL46a3kxV474266ESaqQ2",
  "key30": "XBcjFrYqNuyZwoe2BzWuPeysnhVoPMz2VQjr8t9VU5gREFCGYBcRVowwoQtC4iEek15MeWteAfeFUNPyKPAFQf7",
  "key31": "3MC4NHbvXaji2VataCSmN4QYFpfPsXzNcEb4n2MjT5syvkigyFwqebUB2reZoveJFd1nFLhyaYz7rwmYd51GaWd6",
  "key32": "2Fi3cGBfwvV7y3QeibDdsi9y1xRedT17edspSmfBQLUP6rAMWikFvhN3c7ofvkMW8co28Bqgo4PzxPUqTG1snPes",
  "key33": "3crNBf4kVUFszcvbuJDoCGsa7ehJMNs5ygWzXrzk2U8UF6xP9yZFcBH5AUtcxCcovaa5pqEgGf37DS4QFPvXfK5s"
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
