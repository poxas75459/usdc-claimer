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
    "2MGw31itsi83PLv4v2io97nCSey7TogyEBtBXv84QajzQPKX3qjZaXM4w5SbkJmTzAiULZVXoHFMJtHbsrwKdQcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RjDgn5vFRcQRBmWc1cvQB6Ho67hiK5Ks5pExb9wxR3vVm2F9kpMe1q1LNVWQxSoGG9svMeu4rSkAE3H7Q4pc3F6",
  "key1": "2HBo7nfGMqNqGB3MScoCPpubg1pYRxSKDynFq1gYURnUc2Koyd1MtXRZ7wr2J5EVZxVDkipL1ykH2iGrYBpJ4SWR",
  "key2": "JgQmM6QGT7watbWFzo9jAmk8pBFb4wCBrKB5ZtCkEBSq1UZ8Uc42jtqFkczEvsToWC33LSYHz2AEHRqXa8UPZtj",
  "key3": "4WyvzFefmwDsrzZiddArMrb8SSyb9oJ8Qn9cAoewXHLfyEHEJN5GkeRjWSosp5TCKnc63DAaZws1LKq8AX3qCBXd",
  "key4": "5gYt34Bm43wWU1UvyKfzjx7AiNR54L88sAbknQxJuv6SeKnhz2Ya51PTA6PdVToQy9xNdrseYwbca4izH1uD4Gjs",
  "key5": "B1Sm17QkCvEtoNMiUTmfYF6jUYzWfDQBKTS2F5S4vyGu9PFd9fn1Y6UzQjHLKRvLv4RMDFwBj9spUZEzSmWvTSe",
  "key6": "57yetfNfNf8kGG1qVGWFoUqb8pac3gPKVua7vjXhcSbvcuGbZmsaK178ytAzsnAQ3Xse19WeXdZyTiRyrWLZ37ej",
  "key7": "2ZA1V5TBCjT3av4dUsr1tZv7vPsVn2aEaGaWjdi56SjcqbPf7ESGJ8kNL7ULrXXKXYXuu2FGtYL2a7vshfGc375X",
  "key8": "5kbz8vPHh8GVfZS66KfwnYJBu4Jj55Qpbn8X354LDM6Kr91eYsphEV8QwwD1vWL2yN8hogTpFxyy3pq1iyj8ypWW",
  "key9": "piGENg7FuD3k8uRKbExwJC7iXx9YiA73ckRWECPMPCDfJUZJtm9M83NoP7t8Qj2YX2L49r8gbSGLTaQNhc9HEtQ",
  "key10": "CvN3z1CLszLBYA8217tLQNUcjJP9bwLXrfq1x96ShdkRU93ZBv336vRRN7EnPuvSyfo3SXLuYjXdfK3sz7AuECy",
  "key11": "3WGmyG4sWRiDp5i56iiEpDyqnujPY39DULi8VbryhBceXtPE5VCWtdKzWqBWFwr5G4Mzv2bmkayk4e8rowmczit9",
  "key12": "35PbhJ4A2Cwk76x2kJGjGQCdZj3Th8byZ5MN86QZLJ7oC8jjFu5y4q2eTyi4dvTDcv6AkkjByx2C8MEKbTzyD95c",
  "key13": "3Unh6rAGwRyVEknnCjMLPgsNa5ZAWb1ZPH8AK2JnLcZMZwN6Whsvx8YVs1orKkkZS2Liw7kUadCpiGDrjcrVoeRv",
  "key14": "3wDyXaVbGkYduy4JkBQN1vkM2faMtrswyyK3Y33nwbdmYBFoRGhYcr2tr5s9aW8DoqDemxLj2wJCp5DtZwW2ZXSD",
  "key15": "3oToL8NHV192RVN7DkBbA6ZtNGP5QJvnE1ATMXCEhYQaJLBeNQxxpAGiU7nJFc34PcVYoZ8EfqhwqEKYp9tjPu63",
  "key16": "3WpA4bxyhsRKXWNeUgJRHYSTTUn8w5n6XFYeGvceimZhHFeCUGp7ZTQCgPZeCerKfPevrYaUyrqLwtu7WPw1SzaW",
  "key17": "4tmBxapeJqsLW7u56Y3t1SDf6uCuWkjiwFYdzmtxa5wiZ9s7FqztQAoCZxhgabM5RG1s8CKNxKg3Ec7dqMKp4Z6i",
  "key18": "3NUhGhCCWRm9LGcUwtJ9rJbFmx4tbkZnmNYkGLrEXBLu8UCfxujUsN816u6SZcZUSRBGvsLHH7HCsfXMRVut8dMb",
  "key19": "5exefsjYkmj2JAZGrkgRM1255Ekh36qykoK12tpJ27bkAHGCP4MwybZdEcbiyUKfmWuEkJbRhRrCL7pct4XjKyK",
  "key20": "3rmZkQx1eXW59Fk7H377AjysoCLWZfo7KDq8vdk5emos64sPo4esampRq4pGWH32k4TvQoyfe5vwFB1noXBMSigs",
  "key21": "3teWiTxtngrRomTJmG9pKwAkpKELgEoBKWUvXr1JXmw67DNEpMSPeCXrjtrM3LibygAm8C4tugqaoGh2iMisRwky",
  "key22": "rtJvcvXk8UTYv8Js9hvWFGvDRE7KM2bn1krV3ktYW11LjA2MQ1xx7Qf3c8wDkSMKobtSgbTmwRC2iMoYtxynjkB",
  "key23": "4FetoovsGR6pkaer4hXC5r6PU1asioGgWpFnMTu3MERmFkEy4N4tAc2uG17fn6JeePy3z5J2JaHusvoZhLqL71Tc",
  "key24": "AtnhdtkqExcMZaYmyyNe2jKrK4QR76nDTGGRRYQBHhDpAx43rVKbGarcc15D1g3NpVDGMT76e2SnXqEycjUcd8y",
  "key25": "2ui8qbg6XN87EGC15bfq4kpBwn5bG2d24t7t5dzGfzqRvum4M4MvNom91Euy7hNror4m849cMzhHWQEFPgYSrKam",
  "key26": "4xJwdjod9MZLzqtwkwfK9dgnEgYkAHT2UZmfPueubBAsjra7U4YsGamnsfRhkAwxvwmRqX2WP2yzQKA6rhp1iguQ",
  "key27": "2X3DKsi49Wp4TjpbCdpYSpJy7JGMhun61VB5fffm1Mk6bgfCkmacqsBzLm1eqQsbiCcxzYvaRfM165yH8Wj9xWhG",
  "key28": "37o4dKD3FcggVbDr8tZaXYku9erddm6WGCSaUUabnNVmgGLDpvTqsbDmMuw4miCVXZ7M9HWpkn4vT2joXZaSFsbF",
  "key29": "4iAWFTDGu6RaAUvyZGoLKyz1sNyj8bVjRkzjpBhT7oeofQSxwqvRYMQA84zDQmtC4P3oP3g3D814oPyj6w9YKJXw",
  "key30": "5gqvwtSu8YvzZR5ZHNXdqhR3zt14WXEHgXqCoT7Cnd96k2gBdDrPGcK2RAvgpVyaEvFJ8str1S1UUBvMEuPSki6q",
  "key31": "4KnmPMpKRi1xLXyTfvvdGbAyChrzwm2wzjNXzBRQr4Awt3PCt7gpCUMZLVcaAbUiV1BjNcfacq6SX6dsYzLcd3Mz",
  "key32": "3YtVE4T7VGk8Gr6145972VD67uzk6Fn2H8a9ZYCTBeVozc2oCcXR1YGy75MgxmoCGaR7sgKnXjUTuKr7MFVDcX9g",
  "key33": "3NDwMaimk6HtATjsANcXqpR7faBDxF4sHiua7DzspnXM3r8nySQCAjrwT8N68iDU8LAKELxeCDsJN3DGrcbB36Le",
  "key34": "b3en91hRTbexSvvtbwqhTMQHsxvpgoKrcFg5aCE2B6dqoyDJzyjSqJ4wrBJ5xFeYzms7MHE7eEEBhTg9AsLLXcx",
  "key35": "4bmsq3Mdq8XEFyTsq3vU5KNVDpwCz6Z7h7PiFrD4BZkYfGtDacVtG2NRoBq9uiXz98HtHb14whB8wqZeJT1sBLPw",
  "key36": "TLvwNkrYt3HyrdA3LnKNjtYgfnPp3FntExVJs3UL6hxQQxtqTWx1CbhYsWXgTsd5qdxrcKvkP2ov7c6A7PogbsH",
  "key37": "5WYdhs9ahPfnf2cssdXFDPGdedEYkjZTrHqCH4MYNpRphHxSYvmpc3N7KTWWs9KLSLd4Quiw9NYsHy4qRuuNAvxk",
  "key38": "3jeEZmaqhmmUZ85i1EQNXprbQj5pKZUqCFRf6YKHiF3ffBSCYUH1K3PwJU5Zm9yL1dr8BSCo9Fm4gDs6Jdomitw4",
  "key39": "4SQzuME4JSA1wd3DX1NdNsEmk7LSnaJWMzt4g9GbPG1kKyJoC3jNoTzocEJT7nRxBagAc8qWJpkNG1PrH2SoL94K",
  "key40": "3sFNNFXnbyLEQDoxBVQULxtekp4U9YS3iBQX8T61AxZxAarMsQpMA3YCRjMuPCJy8BTHrKnzogkZwVo1WLje4Qof",
  "key41": "gyocMNoHK44pZYVrm69foGCrqRheTUkGLqXzvMuRhQc6eHf8kQpDwgpJnQWijsykAijm86A3WAgDr1dKwYuPxtH",
  "key42": "2Xs1q9sKeoxT2tWNEQWa8dpBzzZb9rtdZSBeGDKUuBYLCVvjvfLzEcziXLKRE3rwpib6F9H3ASfC9Ri5XoRKZfaS",
  "key43": "3TNXXyf6CgZbvaywMVNYPzjRUsHPNFfAjGwT8KsaLanvDjneqtu1PTskN5aqTvRa4PjanWxVqJtZ8L6ehH4yiRyo",
  "key44": "5KEWGUwuiSFhF6SuBE2SZb65vAF6mKSdjgkHh2EMDNrMqhCa6qqM9DT4QgM9fypAn6ZVgjP3p2p32LNHUUbtgwbP",
  "key45": "2xMAeZWHKidovEzWfNnX3s3Qact6yvUVLd63hoiQ6vqKtobvHUgdtG4i8Kosisrvr34ryyX1FfNmQaWvSfLmuVVH",
  "key46": "44bPeK4KyrjYedn9We3x92SKBJBRWGZUyQJhiSpLwAVjZBju5cYQWbSgv7tPyWfNwVZ9qwst6mLbfWdAGLDfieA4"
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
