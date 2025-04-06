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
    "3xoheG3ew2Tn96QiZvc4E1qyy5ugBRXNRNYCPeTHzme2go9EzpnAw9NVHUNR8VWmZF4uW9ipALdbJMZoufSxedgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GxcnC83cSAU3HJPwVG2HnvtCGMTGZG3J7QrypCc4R5zaiKh7wtBdWUcpqRBmHCdWxiKWCJ215vZG2AgnkLADAD5",
  "key1": "4EJ4QThHdSBQ7jXjrAHHJFHovQTCVX5Cbe7QspmQGBSTucevurnAuu6N9p2YVbaDVZoK7qeJBYEFJFyAVo1RP3ts",
  "key2": "3E5EjggdsKg6TCYRaJ6t5nVTi4iXMrnY7BXc68skUzvFx8WtWKAGyaqa4tr9H4tze4X7F9J54XPnMe92cm5GE4xV",
  "key3": "5QMF1GedsxjEDoLBi2deXayFuWWxf9pSQTM4U1qKFvz2i8nsDkAnZbCmN2igwTfyA6p4A5Zg94nZDyUiSEY77EMQ",
  "key4": "3gQb2bDGEaWUkZKbpPjrSdzkebbeB71ePCBAWNqXVeqTDipyABQYnwhGrtksUSNSvx6DVhXSv7LZGhpZhbjsoBhF",
  "key5": "5wJGQdxsJKKWTqnLD9N3bgUAg32fEbKZ4GabKWpidxiCMY3RpKhUQoCw92iNvDwbGQDyq31FFWSRdcEApFrfszSo",
  "key6": "5wU1yEh1pRgj6TCiC6yu7mWaD2hLgSdu6mLiZzrzfbzee75BrUC5EYZBivsqyjZsV5k9NJSHvTjcpar2MSvELrBg",
  "key7": "281iwqUkWJKRzqtqmJ9wDJ2eA7in6Ff2sC718J3D5h1UwYXiQYpP6UQFzPwT4FMtEyv5NwUCxHsFtz6n1dkCK8mB",
  "key8": "5uGMRgo8pwz5nhjzcd94MqGy7BN6CEUiWDTJcrsQ416snWPLxFDSv9t5Yve4FKwVBxnxg8QctznYSWpPX3sW651K",
  "key9": "56AihqBMj48sVjniMzDdYA4nLQ1GRG77prgBoUKC8wg1jVCgxzZ8vGKNegSoraoBgoGJER6uud73uz2uqS3BwiNN",
  "key10": "944XxA3NXCEgiFW7RY7GCYUeFfmv5DVc2yGf2zr8YdNB2v37oGvgJuZaYXQLpdrToM8bEfGEf8KEkQHkJnnFzWv",
  "key11": "vJDPYrxHeCAK9i3bRHquVs9nKyHVerE6tTY3Ls1Hjj5AiiDd1yuh5k4hyGsNWBWNAtGDVEeCZsmoQHAnonREpCA",
  "key12": "66xsCoNGzkcVihPW4FidV1cSvjEkGAsSk1QR8FMWdFQVtqQ639MKT3MpC6L9ycmc781gbrL1L7nzfgmuH78hK2Vt",
  "key13": "3svemmfoeRX4yChrGtSVnSgU2vhgqepmB7KM9eqmznASxj2kbSSC5cciYvEV9xGtrL6TfHYyLiB3bXszoifEK9KA",
  "key14": "22oQyMMPjTZ2hdbW9Uw5cghzJCEJBt7E16qipBDMMmo5Cq3ntXuH6d34empUSgphHa4ZEMb47FU1x3aNGnW2fWez",
  "key15": "4p8dTrP77VKfBwHXfoy2f2M2KZg1EvhJLMyU7nyx3nh7X4JLRJuph5xv62CokTtK8uFbby4MEXb4Hk363mYVBtXr",
  "key16": "2M2dvnjkKPHNbxEE8AAQNGaAAxiVmAABBoUsYQthcHcHSY1SccGLxXiiLS8fJ5Hq2rQVcqdsZUgvYYXco82NMY7z",
  "key17": "35qsMGWCe5FuNy77ke42xFwkTdhTNVuiBUQHeXuHhkzseGr5UmMvQbLmHQ5PRVjtFFAseQXhxkuhmdyhuRMWiWrP",
  "key18": "4z3DvWijwCxm68ABrhAG8UBkKdF5ovZsGukQK4jWa6P2Brp5kyDMh832wSowD5S74sYA92UccCmPno4bQdzJfzFf",
  "key19": "LaXXQXquyLz1z2ZAKXy3WPdCewr89LfJ8wRqwTYCgUcj2EoABrvMXyUjB2t6h41ebXv8erfoKZXeBMsJAaAaxPy",
  "key20": "2dHZ5QYR4FM9ny44A8YApJ9KfMC4khGNWpegdfmk7cKJ56qFHg2XcNPGLP996bxxWd6YvhZo9tWY48wSzXZ7rwNb",
  "key21": "477QFhw4hncLqQdNVXMuDkuJ5UJ44kHmcDkwApx5cWvcP977MwxGsPdkT6GCC1pHyFqJUexgZaC1XWwTBp531wE3",
  "key22": "2fv17fx2kjhgcFAk5sp7QmhP3UKbB1wE15f4cudCN2hWdJwtTmZs32d2frfonJRyJD7tifNsYztkNc2f2eXYgQSs",
  "key23": "5haDEav1h2aRKoHPP6mvJ4vYR95Yy88aSULJ6Vi9sVQmMH8kviWSM5qwM5R1Fb3HByrm3Vr6yDATDDFutKhXp91j",
  "key24": "3uYg3S23xPm8XHnLePdz9YtMEF1yNsGA8USjAfwqZ397u1MNcjbfam9GUxHNkWnRbEd1SYimPcTnJ3NTQd3AEPzv",
  "key25": "2fyQFtadJh14NicZsfqDBt67rMi1tSihSjVuCMmDvVq6W8cDJzjHx2V1WHEKeTD2i3FoBSLm1hCXmfbQFxhK6Nib",
  "key26": "3aSEuJVUjafipuqRVor4c38NW5oPmy5H2zRE26hxnwRc6geDNAwjXW2YKmPT7Tp9DNeMaFWpYdkxnECYCXFevWge",
  "key27": "2LyVXvzg2Z5S1ZFUFGYkXJY1S9ECBXgpZgA2KpZEGm2KoEWKxYDBrrYAcdUBuKjFGNorUQvZMTcpq9vJ2bR4kkTR",
  "key28": "4kQh5Bx3Jn9Li7sboWMiZuM5Yzm5TSCHWpzTnojvLRR3XCMSYXRDmhb1CkQYG5HTggv4jtPgVi2wH55KuX5xpZmc",
  "key29": "3tSTHXzXmwj8DdbiVT64fbPM1j84zXrAaoqQpLHv7Y5XbjiiqVTghy2pKSzqZufnthbk6KigXdPnCSS4xYxFqG6d",
  "key30": "56d9ZSrij4cTqoq16LwsxWYs432QH6eneGts4Ft5bB2F2sCeN7dcF9hMA1ExaNK68CaYWqbGfhxWHbJDfYSoTGi",
  "key31": "3BimB83axQnUZ1jHys2XmHwPNU3YjaHH8K54c4hJ1b6LWTRUYWjpPQEa1sa7mKxkjVQvM9FQuuTKuKh2fMkcDd36",
  "key32": "5UEJTkBQS8tSxT6C9Gw8SpXY1ZSKiSJdbnpvMfigWAinMSPn8otfeUYZbCsQFedP3oVHgE4E15Gt6kQUk59uqBng",
  "key33": "5vWrrQtcNpTM1xFeLtWx8tnsk5zHsVXGLUMC1gByfWpLQmWDut9sk19wS9UfSjmsJSMyQHpQS3VvioSrafq1wGi2",
  "key34": "5FctsHf9k1hBgTMs6E2jjsdsjgCW6cchWut4ebCnNCPkeyCPiwHhuZHpwxUEUsK2iFWjdREXDpNfcNnJX5ocR7aF",
  "key35": "4cHWWohNhty4kGZxg19jvijAzgtxeiztW6WWnYHkbPhfG4h7gmU2akDMX3CG1kr8d6rm7yNb7qzJt7xozh3MWzXu",
  "key36": "5WMPJ5eF7UztenUXUQPFDw1pK3u614LoocFYGWytWLSqpzZ34szoX7JXXx1tAgpVF314oKWNJhbG6Dw9aGWhmAWt",
  "key37": "XRuSo89kzTjmz6R8B5oYDJTeGNsgvSxFaytSKN3KqciUrRidwYK2gmqybvNN3ecyNMpE6fFrunkHvKUdHRjoG4j",
  "key38": "2qjX7Sd21MYJnCVQXNfrBC5YNTZ2CtxrM2738wwBn5r3NaxuTJFVVSGsdrmHSk7asGfQPhDwr99AVDx5FMqWGHF1",
  "key39": "5z3Sggj5W4ZT4LiWoQdc8nLYhxvQahztjp4PtnDuVmPExjEHcRtnLA8k7DoUXukBvLMc4fm3ZeKJs85oppA5WaSv",
  "key40": "4zRvZxL6DQ9sWnYXQeXxqQSg11asUNwg6bwthWZyMNnPwT8ccw5WuAtT5kpEt6rE6aV1WD3d9yQW4Weuj46WvPXJ",
  "key41": "2HtWgJAeSxGrHNDgWUYcYvpHzMerSFdpUBZ9M8Z4kg4LrVTKe66Rc1yFvi4NC2qNegYV6Ng9K41dtSXU3rUrg4uL",
  "key42": "3NNRHr15sWK9wSTcL7F4HeawXZgsaPDW3heSNjAkGmMs8BGLkGvFttxrHfQz85ubBrizmSNsy9ERgS6NzENo3h1L",
  "key43": "2RHc59rtN8KFpaCoSAJC4TxR13YohuVxq5bX8McpCJH4vYomNEntBBqh1oixKnjz9ENrdt1a9ohhx22FkjzvFtu7",
  "key44": "25fygrau6D67g6Te1eid2hCbzac53aytPN1Gp5r9dPbEAcNTrDp54KmJyySYoAy8n6bYgBGreyZdTNDeRSRrRtqn",
  "key45": "4pK8xfZ6MWtxm8WBhgoVgp8fFVYM5EzMTHyN1ZcPrA2YAfyUDeDpjPDsbi3C1MNiHSRe3FhgPQfdj4ByBXj6MekK",
  "key46": "RWNWNkGbKfaHuac46RR7y9hjZtVi2BwALr7PBJzPc4Po7cvLxJ2KCLUyCZjSLg37Juw7fxbLmXm13vFpi9aEpeT",
  "key47": "2Crn91m5ztByLPAT42QoyQb8eos7waHL28zuzuGENW3mJ4NntZkXrNPJb7o9osAGknnL7PsTBuX9uaqfeVQNHxNa",
  "key48": "sni316giWHxhPwM9HcMPpt6nkXWFySdg6511PbihqRyPFkQfH1MBykxBjCp7vjZstcPqTfFD6UuLCtyWSajYXN4"
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
