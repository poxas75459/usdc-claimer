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
    "1Tu7Hnug8ypvRyrSyu6Yaaim5iQ5GEqac9QWLQHM3kqR8qN5APRRGyZPFJcg7torg2Jfm28SeXTPTkK6cJ1BdUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nkYsmy75H8QQq3EyJTTpqqJSiXjw5gq9TuRXYvGrndbaxiCGqMVZp5kc39yA2bFDsxARqoxR87DanSEkjyL8LQs",
  "key1": "3aekgryw6T5nPM1YVQyZ8ar2oLnEi4Toopf9LPgB8E3bU6khQRD8pYTddcU79eNE9VJucbUj1eWK7tfW4ei6ZDUe",
  "key2": "RuBTGKJRSkda5DT3Kjo3fohzZD8bt6kXMnUFF1HochDiTVqTux9kmPexXEcx6J97No2uDz5zDXHgdFa2y2EXVGT",
  "key3": "54Gc9u23Q6vS4Ssca9G7iCC2bSeYbKopmuS9Hmm3pzF6W2iUuFYM9teSc7mahKQkUaKbMDANmeTLyA2NpjMjiVV4",
  "key4": "VGpa3zoGXpLUSEdF1NMdnSpsw39n5tgTQATAtcrif2TZWaNgqqQa9um24XizRYgr5x8KUhVM4Yah7CGirLLKNHG",
  "key5": "3u2B1AKwKGibwohT8GdPHkwJTBcHwLERKcT2uC52EfagBRX84oDKDjBhEvM4RePvMpcT17zjCRyrMfwiKRUhe5rW",
  "key6": "3DbRrXpQ2dd33H1qYMjsfGxyeNg4fK8aE26rhYvKrjt35BZExJVdwexTLzocbQBBif7uyyanEaRuvTbQmfrbQyCa",
  "key7": "4TpRtXKdx3tLzYug1YC8WXvJQapKSGCXoX7bA5KXK3Zi7WdXtJgmFh9H3G5SAorCKQ5rminse7nV2Pcha35q3S1M",
  "key8": "2Fp8a1ycTw4M6KEkdgHLjSnjw4T64RK7GZNApmKdnCcZnwsPa3s5rvNMyDhjvShmTfnVqXb1QzimEDEYGzM9G6rH",
  "key9": "5a8qcLKEWS9vq57ZRhhR6BdUZVNDMCUDZzrhQnfWsbRueveE36tbZfJPreFsdTbpeGz1sZZDBhn65r5BG5AAkYJ4",
  "key10": "3ucEAHJTkXyWTWjRgrTAPrMzB2mTx9eJokoZCG82ZKcxmsNGUpmnnGWHAqQXYZaBq5AbCiAbsEGEhn4xxP9nJLaC",
  "key11": "2cvh975LARgqFSLZSbZH2izN31rmh84KbWQi2oQSRtqmgPU222Hhp9VxbfczpxWoEfwTZpVEXnXujtrzev2tvRd2",
  "key12": "3awQFXbcZxrpSegDgSZguAyMQbEvb9udDTQidEWm1ub2nxS1Xxeth7YtnEsY4z4YvLh5cX2o95TKdUY1cE8aKCTe",
  "key13": "4qYD3JFsjJBRZTewzv52PZsR4YbT2eTdbxM9aaK5zrNf3mSEHg9ErZMLKgugpaTZFRsSAX7hm2CqhsgUj4viiD9Y",
  "key14": "4kNzhKZw6mm7NU3HkSXu64TpxsnYLRmKxxxp7zua72K9e7qjmwABHrmukNJXNkWq4W3CxSia4wJ7sMGFqFrpk5Ui",
  "key15": "3WBi1zdiRdFSzVmMo9MNqvqQWqT8qXZrM5x86y9JUgxKn6MRRs2Bj7aF7ECACACoL4MU2WvVDp4DYQofEha9D1vh",
  "key16": "4yNgj75RmJNeRRqGdHcH9UiBJtDqtBLLjtRmtnoF77Y5SJn8XAyKNTLCGXtbcS3WRgeUdaBUBiw3qS389V1Je6UB",
  "key17": "4HpR9zbfmcQNMqXCBNSpuwrqut66aBZKxu56qurrxgJPC3qZCDAGrExUPnfU5AkAakBVGdNc7k2SzFN4YCuBJ6jx",
  "key18": "5BEMrQJiPey3vUqWXxVQaUNz9f7pqTRUodzicYyq2BFUxHyMvT7J25iVZVDYUbn8PzyeKkF5vSoiz7rFGrstpaJ2",
  "key19": "3Xxp6r2XLmt2YRvLgqdmVh2GfRJiBEFFbANQ9Uzt3KXLPVS7HxwCstgHvjgg9QkAnunf4H7GUtC5JuWgYVCgmiWV",
  "key20": "oXWKLHKVcyJUgqYSNyN9ERz2Yp7QwrXUQRTQfY6m2q7HcNd281kshLQoL7akQB1s7dgRP6UhhrVYGwZwG9bckrs",
  "key21": "4kaZpNWBLYkzBSh9HRe1ZzUnneVicezY66VGbt6GQWKu9zft1vkz49ZRpojTYzYoFWxAgoxooitfyj1dyR5AKeZt",
  "key22": "5peyP5uYMfxi8QrXbAsCbxE9doXAv7WLNQZt5oS3kqFCLET3gg6giBqMKk6o1t4YR7JKhYXyEu6hbN5xSYEWTZVy",
  "key23": "2LuzdfZeJTNuHWd3y9awNQ2QfccgE2fe89PPHD64iXRx4ekrEKe529Nk5cdTXXhZVVvHjTLLvpUKwcNkdJKUs921",
  "key24": "2cjar3kx1gSixe4yVCShkP5txH23558pvmSGmJr3ji35aTpfMczUsgj3H84tisN9qH9NgYiECVxGfAE7c3NF4Srt",
  "key25": "4LRizeaRkh7wMi5X8anLH9hX4EWb75tP8L5kXm19abbpznsmswqhtz45s4HTUm7VCu9Kq4HJRyhAfNrje78Lku1k",
  "key26": "3drWhLWHHRPsoRdbTPkqj4P8XTLCG1qrq6Lw45tXmAhSs15dzKy35M31zxzgXdeZPRiuUgF4VYo7bGxabpw6ripy",
  "key27": "4xMpoQh1psmWtEgE9fDSmSEKNvCji85aeaWWt3w7m4KaG68YGAqQMQJS27hy8TJxcLLido4y7u1wA13ZofuS4ppH",
  "key28": "vX61HouwFk54pbDfK3BxTudwr4oqJUmEgU9pXDCnnaTz4XrEjeo2tEqQapZzijFouXd4zoosi7AaLzxcc4JDpRc",
  "key29": "VHdoHgvRoHPFZ8WUK8xVPwsx6SCjJZuk2SR1727rWGP7ZaMYH2acoptM7fzy8w3CkKyqUgHtPhJLHBEs7eSpypT",
  "key30": "iKSsp8yztRk14rEzpo9svueQUzeX7sfYaNBBUWzuu7YBLGbSeNZXaxo5mWYPcg8c9RTgs6swWKpNrv51cAo7z5s",
  "key31": "5VR2vBG5mUFbpq5ofbvKkwubDrGHVE6pBiDbg3Vr9hav3jVCzan1LrFb4injKhCHuP7Xtjdt4zPVz31fjsBu6vEG",
  "key32": "5REecJDeKPe776JNXsMEaVLAJf6DG1yFGK6jTWkYSpB2eJUa4mKPRP3wZfe5YgEFe3qspFckchg14nUd3H46kSPf",
  "key33": "2mQ4DDNuahJYkmSnXrgajEHFFZxoen3KSRCuDPMqkJvLYRcD94yqsipcwL4eL4seRDd3ZpuMemJhGXEabfh2aZ73",
  "key34": "3MKwyT7yLsrVue8sDcDmebwNkGEwr6vGqjoFS76RLLg4m8dWFDQf3oxP3UcfXwH1dW9eEaykSTtEYkjZwt9hgeec",
  "key35": "3dBcEjJdmnwvX1zbAWjHAi2CRhce9nZjAePcdcy7u3J4MnQYtZBNehLF7CRwWDbDb8qe78dMMNvoWKfw7YobE7EC",
  "key36": "5dFuZGydzWZV8wJM5y2P4tSEsx1bK7mvBnBdTKXH3VSxayphnTrgy6dXoiK7XuQvpQ2EGsp91tcKF9LDWLdGfwtC",
  "key37": "34QtpF4vsLy3v3zbgGk6ooCoyNki4aEHzoekykNNxwMurtcA8mt3Sc4csUKCmjeiJ9CWZG2aUiuuu3dwQ15JajTZ",
  "key38": "3LEvMg9dtXDYpF5yxt8TqPmL4cNnHSVjqxE8qFkaZqiWHSFH3MTcPvjcS7sR1tS8xovmJfNF77VtKemf1CkX3HSM",
  "key39": "5MiMQdX9me1DimFZmopccVDfCnFfNV2a6Eo83Nnqfgm7i9Aw2pCk9AXfzpErkTZiUtToV8UESLSdP8t1hhZHKkN4",
  "key40": "5KBf1KXzGCTHZjQp8PRdycZfFeerjZVC5H3Nb4NftAifvXJ2S66qE1EbL5QdpGLG9u3trn3uA6o8uMGJn9jbPSQq",
  "key41": "2KrmaY3gSLqVJt7MSQi1E9oJgF51pTvPpLGYUBeYSb98mMfb76MkCHci3rUA6yFAwcFu6VczRMk3CgE1ZSxwiJ9f",
  "key42": "5H3mt8oobGvg5P7cxrmV9GxEWojrn1NvsUHZq5UKBfrzsD286stLvu7EgYVJaekcoZr6g5Tkh7N1gamcYuUa8fb5"
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
