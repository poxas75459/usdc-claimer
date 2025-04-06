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
    "4SgvCYv9MpGGhVHhu6VrtBzNF9LD2ZZyY3SChgG3xdQomP4kdRZBBnuKB2mS6Lzj47EQiiqWwCGDVXzH872bFxkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RY1FMqD6xcCLLNaPkafGzL86m9ftPDSKiwV49GvH1b3YXypxRrqM4ZtPpTQu4iv2amHzYhreWAT6nxxa3cjCc3B",
  "key1": "Jki2BmCUfj9ubkWLC8TKQvFuPhpPdK4xnsieFbXmcuzv92s2R2YcJxiLRhgCoRUJKkiLzV8aTaeEZuMRmhWGjqn",
  "key2": "4Sx2Eh88xvLQVDNgub16EEtgAR7MvuyrbnXkFaSHcDtKxmwSeNAdQq69bHra36MMn2UGBNvhAzmCg7GrHPDRjdim",
  "key3": "2yTC77mZeGTqpsEaN6MtugHtp3tzH4twSqH6LwRr6e8L2QbaJC2UeejkVhD6pvvm16tcpy6uEfAQYNYt4v2CM8Lt",
  "key4": "39BuoSQpKYpwsocJgLRm6pwj5egPFfx7AsQyY7RmtAfQkbm6qFntTibLEnhFEXSMhYNs5hQ79ARqcjPFAqrwYC79",
  "key5": "4F2WRVeCqTzY5QJiqowM8v4xZhzb6pJrLaSkRCXPt537M4Z1Y6myj1kpyvBHP3tmk76LxKNUsfpVmXzttyD4qBVg",
  "key6": "4sD1ajRAQWpLg6ihKrYfVtJWkfYybYUwuvRXECP32LsJdHnsXtZnHWU3ui3rb1C1Ko6hej1WqNoRJq2hsRAKQXRY",
  "key7": "565mJW2v9HHJZEmHQ1ViY6QQws9Bm6pPkn13sgxGhmBFRuDWq2wcVwNQTi79SwUT2b2x1UJ6th8J9ToJYeomHiX7",
  "key8": "Q3txY7k5UEcng8xoDV49UxfsMknTZbqLfZ5oxaxthduSJFgsRctS4qouL7kdxmQaFajcvTe5fC23oLwNf9ngRqf",
  "key9": "5c8DTk7QTtKcwmoxUDhUtcnq1tsVjND1P16GRGvKp62B7dzNoBJpNUFLLd59AvJfMk3wH3ToVmL4zV9wQr2pyzDS",
  "key10": "4ZZ89VCZePD172hExXedGPj5kHqTyimreAQdS985jhagzmPAEqeUaeFwtpSkKW9omBBuFqhBeYv8EU3LhD2Dd3pW",
  "key11": "52H4RdUdX4zh2w2P4dYd5zMnfgDRUC6nzCMdAkgrKGxPMuxyKafGdz81Rr3yUzpWx9wdicxixEkCLrdwAwksiVpn",
  "key12": "3Gxy9vDQx8HekSzvT9W721CN59o7NU4Yq3HMBj3zW1exNVABCJF7euRHsAjhnAntuqcc8TSpnGqPeUtTRd9XxAxV",
  "key13": "tDFiZNw5n29b8PWEx5UdqC8fYJaYZTRFtRgLtWSVuTMvGWQ15FymUd2rnuxxyUJBoBLoSa1Yz1dmEfA6KtkjLcV",
  "key14": "4U1uJ4RRo1QjbZbVodN3MWCqAeafCnmpWGLwFV9vEPp7UotR7HLgJt9gWy9zRJzSYFGqGhT3Bhvh7ypMoA2KBhem",
  "key15": "34AfJurfrvFCQKAbb5gnQ5q1qLvmzuKFB3uUTyb8QoqhtHempL55MGKHfbKuxqxZWmFjLU8ge86M9YrVpbwTd9yQ",
  "key16": "2oFW49rpyvkRF3hn46r4XvReVmuMNYLS6LEFxx4gAR6dXbcHWQTQTLaHY7RDuVAPxEHZEc7UQAtP3vPvRiAKK51o",
  "key17": "51PwfjPTYWeejEgYVbTsTtJL6NpeTK5d7y7kwWZravGwMrHjtXzB2TVjQPK7LQcacgnoDZFgmQefhHkjM6aT2xRv",
  "key18": "3UBmzFJtHfAJQkLqQiVQ4od8uwLTN17xFfJwSUksyVfwSbSu4iJ3gnr23qEEqDTLcLgqcMgpdThGErkVFnu9ef9F",
  "key19": "4pT33VCejkAGYMLrjqAgoakjYUw9aQWkxwXUNapH7caz2TFsoyVdhQb4UcGeZTeoziNzmVhy2LGLsekhfmpZPBcW",
  "key20": "3gWmSh2nmEWA2TSoKemETXVVa9B3mAjX8GLn7m3QEC7C1ZAukKg1LN4fMZSofP2agfx2f4VNDmeCB4g3ys2pXGp2",
  "key21": "2zbh4j7WwgMt57wro9NKmYgNU9ksyBTf9182WEek9L9PV99DZwDrG4ZMtx7Go7MHpZV9TBQQvArYFeuzxH95ChzT",
  "key22": "3zdvKybp4L2iCFL87HH4ihfvuL17NMMQFokX17u2moPPWCnRgtn1axqarRJeGy3Aaxfn6zaeDSYXzmeRDXmKTbuv",
  "key23": "3fqJ1qLc5mPytitCtQvQwxwcyXubKgsN3nPYwHkYvew7x5qeKe9KkW4b3mR8ms1vXiB4HxjC5PUq138dHuTeVc5R",
  "key24": "5vM1vmoqMULomaQnyyKyhJ4s1nTNLUxkcf2aT2TsTsQB9c5xw5fYK6rf71amT55qcCZ2k7pJTHuz3QfXETinqwrr",
  "key25": "St5UR9uefLGuXJA92PCGtcSBvwhtzqhhWb7CNHmzpLPMdBueYHCN9nFn9fZ8wxWFq91uh8VXzXFenBWGudSncJe",
  "key26": "2tJuD5E3BJ5n6tv3ZgMvwv9doFSiRccBZ7xdRHy5MGKCmf2BU5NtBo91wnrNderAv1magJDddp2WvVA5WRP6HmLf",
  "key27": "5NYou2BSwPgM8AL2PMpDUMuBVFXFmcG7gaLxQUii9xGyjtCz8sPSJitL7vbbXY6z1AnV7vyghKtC4AR8zkPhJgXk",
  "key28": "5u4CwoaC3MHoFVWEokP99KjGcZAP36FcrTxVDVGi7K4io6jNqAZpFkJGpvNvN7aFPgqSXzroXKYAnWHfSj8tHW2D",
  "key29": "4mhYYY1MiKU44LZcPYvT5JPcUB7E9qBz1jvpeeWN2ZpgNXC43dBE1Tz33noMR6XAnmPAvqCKzUBaL5b2VpBC1EC6",
  "key30": "4gfZ7ZooHAJMfE91wBZZenfy5tEbzFjQ1pAKxi2QsPNoU5rGfY9LYjnkqoX9ZGCaRj1zPBDdUnrVnoWCm59FmDsk",
  "key31": "4LJmnTgKKJ3ZuKbU7dMTwsnsvGW3v8Kpn8KJTwMJWxA1LaLrmmGHCaZYtBhi13PnAb4UcmodrUriSsKELSUE2uSX",
  "key32": "cwzrhpnkHg7bEpgdoCBD7K6vJwMCBHea4WRUJ23V7vevaBXHZQbpQfhdi9R45XSFVmMc43utYch7feaVmRciXKP",
  "key33": "YjScmJWvawGcEp5RZEMqvyrvdryXHr2UzWotUEcz1LXQRdnoxucVGgt55zWKVLoCvdBHE3UvC5THmoWDCVc8goL",
  "key34": "iri9X42LifjfQZ23cgwpLJLuQCnnhy6cEFtqi2iBMNWzVUtAGQBHG12Yh1JxkKyXtREPHJ7YXBGWigocjiwT9k9",
  "key35": "5J67Z72VZPryrPKc44QiToMgHP9zCGktbSUXSAuqoZrTGJuaVCSpUfaej992LnJfjTfL8k5u3BDU6J9Xu7BFvjzd",
  "key36": "3XBEKpAnFFVHHbEV881mYRpZF1giNC7CgvQTMZL9zJksSTFvKmciizZLJ2iUBy2bqMU9G3v5VYWoULLUvhM9jhk6",
  "key37": "5UPa8ZViWoLtqTPoSfe8VZb3wvKecGWWn93fgdWJBwpeZRYJ9BKH6Zbi6nx92kYykkSeDx6crRNzRi4yKZ6uWtfC",
  "key38": "5t1tNWpg3hi9MdP5pXx6agXygw37G4g8fEEdyaAqy5oYCaPtT33tpZx5xXtKjtkDTXWGfs6bRDkE9a6gfVFou9Ms",
  "key39": "VYbEFqv9jCSk9uCuMhVpq9Tswri6cLWrturFDNMUnHC9yrAde2SrGW5PwmycdKJCFDTpooU64fUzSgLSHh3M65N",
  "key40": "5H7KBdMfGUnobUmHFnAEYjsHxHC42nzJSSFtTv1KDuwxdpBBF6cBqTVu7tu4169YkTETQjTb1tjSEP57FVoSFYx4",
  "key41": "4KjiLHXfK95im5zBprAPwiMAqC2HWiAVxVazQBcAFABWsEr3ZMV1nNTYqkVEfe1xZ41zVU6fNEMFkeZznJQfyEd6"
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
