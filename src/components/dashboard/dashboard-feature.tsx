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
    "4Fbh2v5vKjMth4jdw2CBRbdcqg8Dt9fpLHoL25bktnwEaYC8Jm42BWHd12CY37ZER94uWXCXUX2QmfV6LB9kSyEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KSi7divZNZ5wy7EpE9svyreMQtiY5M9SdwgwopNRpbYP7YvY2rzFvMBFXCng2y24Bws1gQTJS8hsPC8qWb4G3oV",
  "key1": "63nrtP656zvp98nKnPiyqF8vZLRYTMiPAVym5T7GF5RucBKGbMbkogRhQD2xkLaktiwuSC9KnFaUpfF5mYeSK4w5",
  "key2": "cRT2xS99pkcEixTKbykCShn3a1aYASJ8ALnwSKWQVaDhy3VAEzJQC5y2z1yYgVcWBL6DqGXj6Fepd2SHLvVaJ6Y",
  "key3": "5ME6zopQFxQXTaB1w8KEAQxXQSMdE7FZRYJHBrJtMNitJggkkd8XxBTi4pcfip18xwiLx2BeSFRVgRiARBRRB5cz",
  "key4": "3dkh4iz9TzsyKhU7Xgu8UJQxfZV4cL35nmHVpPAfzmJvDhodx6ouws8QtsAumV3PnCk5fnSoQSt4AMU46ZBckxur",
  "key5": "3DUChrmUcM2HRCHBQUyrczp3DYjV2sZGv67PKpZyHjmpZyJYBhchn2qj74pHCJpHiyp1FdLU8p7LkVQonjpcKjEu",
  "key6": "jSv4sfA2FZMM94Poh3pxbS9UYTqH4B4dXbS7NMWonksp8SYUVuUuEQixfb1t4THFvu5rLaAJzG7jnJTSPnTAHXn",
  "key7": "5QbQFHhT4TUbFnWdHV1WUhHUKq6xNFKB85kiWKTXtjKYL592f4QJgqCp1MJ7huzwgvHuYYbFjfMniUfiBTzgkoum",
  "key8": "4nAoiRaEBApyvvEShk1bewBEVvEcakU7jcKb49WGVDxZJDtp27U8ZDa5ooR7oQwRN5SKhHSXzAzsx989kuoxQZtS",
  "key9": "34wKnwryPUHU2wnFs898X9YwXqgh6UD7Qugf65wcTGifRAbXpJZpTY3h3H8AL2CKH6EmHZYGexhqqpZZ5CVeHLjm",
  "key10": "56r8avgfUmMx7kgknRtDEb9p1kEqtBRK4YoHX88fYuUjBTHeMQPAfs1YvVoXjC5FJKBJd727D3WsFw5rE1hmkGG6",
  "key11": "55VTr7G7NppDZyAuodhbTjMVDjMSHCPecNiGtwb4nGggJKcrX1GJHyoeuaEXjUqdoBUSUC4B6SYaKWG5YLnNfo9H",
  "key12": "5JX7G8xPvj4vDZ57pR97Xsv7gWPQm1YZxdRDTcfQC3wuUX1KRfYM4dAXQRciReL2r6p9udD7Q1JVswK5yWUgQcac",
  "key13": "4hJykt593TNrXkiDS9pW8CrpEwxfsdJ53FSRaE32BFNz1GmnuvuxskD4wBDA5zN98LGXWuLp6A5dKcU6VovTDZ2o",
  "key14": "4hXUPSC3bjJvMqwvx4WnkULMSDtwn9xDkQ8kEfoNQ8fHStXqcGzTMZQEHwu3HSKAUtmL9g22FV7cnxpHtdMe9GFn",
  "key15": "2DCT3SKtuebwVwiacrjKmHctroAo5AAMwomzHWmjnsV2QndRRRq5ieB5Bw2dm3w8rprUbjnjBSGqmYZRFWQs36i5",
  "key16": "2SQ17RvBMoUozBMtiLmsUcsVvLCUYbhcMufgfoGPYZ9cbLRGABFiDStqzkv1NL9xDn5iqAy64Ns2JJ2SknmSLN4Q",
  "key17": "5YdT64zZ5qLhk9GazCMcW7hEg64uzVEmgDZdszBMtDqxiMaYjq8QCLSEPGcuvR2gTwHsscfgHF6fWj1a15suJcEk",
  "key18": "q4ynaCHP1X8rzSc6uE9UbS6vrSxM7KZEmUZAzjN5LNtPJE3bphHVpXkEibHWDFQh9zyFbxgm2BxicHiRCnMTY9Q",
  "key19": "3r969WP5e97XfEfzEzY4TC3csAsonzo5m3WKWWsfounCtq4ppEg7uMe6p8QbcijwGFUS6RBqadnJHDSCY5KZj7NY",
  "key20": "5SRyCz9Yn6QCqhAZfVsCNRFRW95cAn4wzVe1CyVub1PUU5vxTxB6f3oBsFQyyPQmWgdwSYtPsurPLAs3UkYVK7Rj",
  "key21": "4BbAMqZHjoqsHAZsEXUL5JYW4yhb924USZQYqbQfvejmvMHpLA3Bnh2ujNv1TyAvF6cVYC3ZJNwLhChR4wwgD7Lb",
  "key22": "4pjQ9iwvRr7c2ahYkMtVpD7yc3Pr6T1SsvpeXstswvvy9v6jbqikEYSR2ZKfCuPzZpX67WYdqChx6JPNumZnagY1",
  "key23": "2ehXhiHemv3PqPXXe35FpHtYmDyyV9EvbccBcJ3BnbGhLwKU5WjPdmqpGVKpk8h8B8p974UN2GMMWLudoEuKWX3g",
  "key24": "3x55ru6Denzm9PfJXA5YadBsLtVZq6M5iE58LVcFk5kfEwxTJEdiPWXPmJH5GZUsQKvpfFQMY2eptPqYe3j42Zm5",
  "key25": "Ne4gHUukXShRe36faaZMSFCXoxKRSu7618bgsPrM1iCVqM4ySRBgP6gE7maZLpKYvuP5pg3by8cX4krZiiKfc52",
  "key26": "4S3ihacriRLDWuyn4YdvMYuCDfry7Ej2eVEcBmivD6mZ1mkvA22QUdZnykc4PPLTHasVgKXrRnNUs3cjLXNibUBo",
  "key27": "55NEikckeVGFGoVcwmjPDnNtV2JRByMhM1skq6nf3RqATs5xPc16Xj3TBZ1EWhu6R4tYWzzd1e8jXrsvLhtSshwG",
  "key28": "3Nsxy2DEAJg96NR9JWZYbvRotm7ByB89G37Jm9ZnoHWr9fFRHacU3Trb2LPcU7B9TDSFdsbAB9ieVVUcgn7upT98",
  "key29": "XaDyw6Xgks2VMQPBKpBjGyqxeyd7LGEKEUYb5yGXCrK4nfb9yZtvDHp4ChFkvwbL9hNjAF6DZEBKEXkXZdzGV4A",
  "key30": "5eMTDiASsGzfST2HbC9N3BxcxkECzumkbzWzTkc6LKWq5EvnwRAjE1E2EmRaiHL79HbW7abYAYcgoD7aaufVKZoG",
  "key31": "E4MatQPfxQamEkkfdMyERAt3BcChcV8d2E9fd8dUZGvTDryFgQsXShqnCSevDeWNeFD2CsF2jNfCuZ32SJVN8LU",
  "key32": "4sG17jTE92uNJ4AVqNXwMcvkftFJ6GD8qp54ELRjnrQhuZ4HQCKfxFmhA35iUxbijEZTNavKZsTeMaAnGk5HYEyV",
  "key33": "P5rTRGWxAjG6rmY8QxHUWh566r5WJvYcsE5ddzWRQ6uCfY8jdVnErP7tw2pGrVrGFZFTyzcVw5NjS8C7EF5KkEg",
  "key34": "4u8EevC8LUZseFYhrtQveyTigjXsWbseQpKKJRJ8GtqCgjYpArUdQ65GxHZNc9uek9LiBEVhmqAfbMHs1nUEXhPq",
  "key35": "c3bD8SpGyuTMis3Cwht5xNsR62d7ZztFmg7A1sesJ5kJRhUM2jFV1RvaPe9D7cstbyw85hGnqXNctozeVNLLAPs",
  "key36": "49FLrFE9GBM6pWbjfZu9ymmQ94Ea9PERCbkTWEYMxjW8oqhWqEC1osYG3QNYUqAjx673v7y6SAYiPjdez8WNVZLt",
  "key37": "4LR3GJzsU9RLztxuBZJwWDRArbjaoAu2BEak54KCJ2AtxXL7PVDM8GeEgAUba5xS9pmE4J5XHC1Rf4RgQiDjncML",
  "key38": "4zrkXgz2YABvg4b8FSsAMJ7i5SHtzBLrBZBTC34cfjcFaK9PPMQw6YMhXcHc2gcga227fUAJRXzWsYnFwALtQ8CW",
  "key39": "31Zu39Xke66hKQXZU8wSNaoFVNLEmpCKk7tebiGCAJFFMD1hChpnTEQG2kq53suvF9rhbGJk2wbxFNhCRSioH26t",
  "key40": "4H4XDvLn33fZPMUVTaxuG3JDWhTr8xJAaoNdQz7Qa5uSzswzXmU5y267oTx2wWkbBKUHg8DBx3YeiNcEAv6i4QL1",
  "key41": "5cTEuiPqg3XVXXpC8vAHQd2QYVRJGvj8HkRfhoJaomncfbEVRv5Pt4NqbqdsQWczSjihVTkBxV3zVUii34CWbPUk",
  "key42": "63ec3u37Rrf6GBo9kx8dQBLkHwtPQHkz3GwEto8Mpq6gWn2qSzQFQrjQbvP6tq22dCFpcxhF525g3GPooKbfpgJZ",
  "key43": "3StAozFQs9ZMGSA13GspQv52aFfExghBCtGZh6Yhyf4pYwkoS3oUNj5y4NsrbLwnhvTmhnBf97NQZArrE8QpW5Da",
  "key44": "3cbfmARqsiRVL8UK2mtMw4EVkFTjdUnrThtT6QaAAPptoC8xNUohiQvLC6mUN7LQvYWZjkfMfceM42YUKaYEhuSr"
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
