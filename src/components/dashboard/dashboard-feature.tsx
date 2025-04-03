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
    "3r7Tsa2vrZhW6CmTtCMw5M5sViaLdzfgMvuK4agkiBSWqxfdgvJ8YZCbzmqauMzxEgNNKBBp3wecuPdgc5f9cnRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vgTxNpSVVTRpWabPD9TtuRW9WvVNozCa9pAoRh7KibQ9QVpRMv1fSsu8vKJ4FrFHdJDJKQqQjcuaCP86matN5ct",
  "key1": "5fqeGFmBgn5GtcZuYvkUe8kBibiZd774oMPdoqy8yJAXvefqNDafW3cLmmky5Jjwo3ReNoGeMjbi1P9ypkwpXhar",
  "key2": "5yyAJJMU4jL5C1hjZ3rVHqvAZ27ZJ7b5G2xkq8gQUorJsMp6r1Ytqvri84L3PHWLjejieDTnzHxjCha3E5Vqop7Q",
  "key3": "54BLZR7rYUmSrUc2Mh8FJ2j8qCvF1fzq4QnP7irF5vbNTp31XqhdxCEsadU9Z4Cr92sDkc2QsxttM3ouaa7RbNmj",
  "key4": "2LL6ziujUG4csC4uc79chvcLUryAwuXjugXFXfBY1qXt5dVaQo7MtJapNW1iT1R2rMsyzgMxikwgKrSrMdDS8yZv",
  "key5": "HH5chTpSz661Pag6axwMgpbDMhA9s61r8mUpnKYNxWCv1ePXLUSNuQA64JyRt4NAqBK46tiZXFFRRe15yaxtGTw",
  "key6": "pEhqcbUgR2QRZVcGTz8zZn1DWhsYJfiiHa64aQFVxbsq53f1KfJ8f43FcTxeLyfSZtr6BEXnP8YeQkmMGtqXkv4",
  "key7": "4mZmudiDPQpbZekNykNSkR74mqPzGPWKPuvYayGJi2QPVjigHM6nvu36GneaRY2vFn1s1ESZxposeLNouV4nSJxo",
  "key8": "kJgWGeTcnn1bsDhWjU1RNT2pfUmxkmJXfzApzxqXV8GPwSBEqA55188231jtP342F6j5TYDgFYYvNxyXEXPFvww",
  "key9": "P6Gvdv1vcTj9boMTCYKoUdb6rF19nGyBPZ2t9wVnHeWk3aMrVgp2xoCCTvhNaMBoFYvNGcxaaeKC7rtUHC9kJLA",
  "key10": "385bjoHe4ckYdcmN2NcHi8hSS4XjHnucBgb1xRKNwWf4C6tsCwM8ZDfZbY2TUojeifuLM4Psjty9eN3CurpHBvue",
  "key11": "5PnyTxKKZYS7rppQwrf2ZTZiNnCoyBRnM8i8azdjGq746okU9P4zQBGPzuJptrXxc6ouAtJdB5LVW8dwfHYXbUVR",
  "key12": "3qUkHiW7gwbfj1UF4JJ8cibNuMLAxXnAJLgQrrwWUDhnqEAzBVff6xHorQ52SWqMHrKUfCZTDmUL3S1eMdL21dj8",
  "key13": "23A84tjad7GUH6gXoZi1gqSbCGvmFZywE41DJXANiLv1qjCriKfXpb6i3LjAtsC2X1hEP7qjjqXFKjNNrUfZTCxM",
  "key14": "5MzLi8MBh8tGnsoud61Asng18SwKvn1jQiVpsqcptqLkdtRWgMyaLULEZG1LmazsmP5aofvKYbkYTfMtJVhZSabm",
  "key15": "3FpKKkwJaDJtz1sW1j8yFqVRrZHoKs8Vfpyv7eydJKjWtL3KUjbBhKpHgmob1nQ62N8CWJc37iZNRVCWabmnbhcd",
  "key16": "3baDVdzzAtP4zWamH6HK7EJ2un25zrAdVSdR9dJE2GYLUoJrgJRsTsqt9rTumz8BLUKPAJ2RvZtG9aRag3gtsLLL",
  "key17": "5U27QbGMrUeiu9DKz7pBRGYEwwTbc7rvjwrbHWkXef3inMesmcn9BhzVWqzv3Te4RwstuE11X1GYY6ocNgaYEhyy",
  "key18": "5pBjTwCwws5VTAWWyyLksCT7ci1iFw3YNHigx28HeRpn74gWVJeRyLpU1qHVYs4H2bfTVn41dYKq7Kre8vy93AWE",
  "key19": "5Cuknwx4LL6fMLr9d9L38YKnSGnTj1Gj3vKrn5smp54bmLjAo8JNRZCPY34xnktTBKWcEUF1xoLwxKeVrttBB6P5",
  "key20": "3PvNwZcZ7hsFTn4KmG4Lx61coWRgNEQYM6oe3YHegewA2Abv6Cf9S5SYxwP23KpERAhEoHyrb4GJJdTNkfhNcgo",
  "key21": "4ooFLoJ1ob3STzijtqfVcmBE31fPcnyZp3dC64nLshJVfuY766Ec4kAVwjW1CuoD2vet13Npg7CcYuPj8Wx7S18s",
  "key22": "2PseQdK4ATDwkT7SwUbFivg9QqGCE69Cq9DWSvcRSrGEe2EGjMYK2MFK4dS47GVCHJ1uvLu3NT35YgpmX1L5KJ4",
  "key23": "2EFXkVhtRR5tvC9VEBDLYASj2aRekJButyHAbJWrR8hGxKF8jiyFjParADP4Z6RS5WPDdd9vygK2b6t5sc7Nn2t5",
  "key24": "4YVCrTKW8LdySnEspA4rpFjbY5nmva16XYCyagFsV95n6x9XUsim2KDWB19dM67Dtsh8m77u9XqaMz9ewH7NL9Jf",
  "key25": "63rgmxMyHhjy2awQXihNBgoAQReJAbcwAgSHkwGJqdpASPDMKQxBPgnG7Ei57XDKdTn5jqRSspwSXEA72s6vHM5T",
  "key26": "4JxJ2BA8rge9hWirm6c7QDXaZzxbA74NvqyGwccMvfLQ5EYcnksLnNK18Kz33CWudkE4otdpWCt8ctBZjbK3KsBG",
  "key27": "tCgHnwz3kHo7eMnyN5vYX7wZyrs5x9zXQaDJMowPEYe8acFDbZwKhCMgfos6g9ZFLWfZMWLBzwW2FtodQjg81ME",
  "key28": "Rj4ZGuvnMwsfx26UjqXYLei7gtxdWcEdLyBgn9CtJijsby7vMXfgnH3YuAPrKdLgMA4VQcTHFZz8hvWPe4GT6w8",
  "key29": "VxL68ry5zeQ8pzMfKvrXgzpNJyu5iz9XdDNKgz8K3EPBjj98yHzZK9RGuhXSCNnT4chrvoNCteZufAfWK26bCd5",
  "key30": "2a5eGipRRSGwYWcu6HKT2ynMAN2wM3YrBZqCmukam4V66VdWWGy1oSVrMbzg71jpiqF4UWb8g554RHb6xdz2dzje",
  "key31": "3qLRtnVrzNGKQH5xRScBdBm99HMuPoqxFf2p6qoRQ3JtfDVSrXhYgTnL1MCBJHA7SSxLyZuNQ3pbypyksGMLmtwE",
  "key32": "2cZJXNBDP4hcLYxtQFrXyroAZCok4nGGAAMQafVArW8473QdtABkoo9fjZdYfCbpTEid26Xuek9tjfW2Y22iBkmW",
  "key33": "5XXFNBA3sTAEaw3YQkuDRvrkSh3qUiv5sXnfAcW1CrtmvbxkUJS9okmDjq58mMmPRFUAeQW2VWVVB4TKzzoSCtJL",
  "key34": "3Efj8nbwu8WfX32ArmmZVmQrPqhCUw9FfrNdC6hrVEktcgGENPZUZMMnPH81bsZuCYoHsCb6UcsxGSwDSPZ97KH6",
  "key35": "5HptKp9cvfvFmNi4vZbZkEWYAgz9fdhJAMub9yMtN2zXe9KKbPSAUYSmufHNiFKBbUEQdDqU64DgMgkuVNwk1JGM"
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
