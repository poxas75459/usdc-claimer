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
    "5VtKoPPaLYSv7ss7qZEH4tz5MtvEGGDxaddERve4SQEmZwaQXsLuZhbwMjbESwSG6y8RLpsXG2p7Lhx7bGSeKjn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h6RhYB7yD3DHpH7G7yX6yX8WA3PjRuVac166hMqnJAGJGMEQBS51eDUPQKhPiwC6d7YG7QSTQFvBkauokEuKDmL",
  "key1": "3u2zTFHyuz9XWfebbYNQKAbDsjmFTyKvKcMLm5m7DmcP8ZVT4KcoHYRjqeqBcHTD7AkD4cNRL7ZsiuQxzuroSxgh",
  "key2": "4siqZnoN72Mc5HR1v7dHHDgbuMRTMqe8DssmCKqByk2Qcbe9Zucf2fP4Sy7YPiGEYiEniMcg64xiXpVKYt8cZqj9",
  "key3": "52qXyYtn2JDxD9ykqLU7U2qhSm5BphmmvQ9mPGXemvVAn1pb7kPMEMBQcDG2QX9TxLf9bbyudrn9KLCBn6C1KY3L",
  "key4": "5SsFTxCRveW5JdCLRToNd7aVb5jy9KpyqkbFbi25K8717MQY4rMJHyiDtVPHmRGjhCAXZWycuVgNshuUYQrxb9Dr",
  "key5": "3pgAmvan79yacVKAcuaQmyzgLNCrdGa1Nbzn5P19etNUuCtXuGJrdGKvXdMAgxSbsa5ByUiMBMZnUcLFsjnVVDR5",
  "key6": "5MRVy4tuqyxUQueaLuEp5DZACvr5YUvcWwL37HizBHKTxoDaLkSysqRVh836Bdm57S3HKkRaWehvvdQ2fsxoEsCW",
  "key7": "b5JwWqrx7tVUz8ASiQufVzAX6P4uvsLh4WNecSPirJnqC61Ufh99nqRfEhZfxZxQbB4hoJvtY2Zt7MHSyr6F1fn",
  "key8": "4Exiphe5k3JtjVFfhB5wCLhy58jvgA9KHTGmgL8q8WtjuhPx1FD3sdY6CYN628Yn7RSR6HUycVJpErZ73rNGNLS2",
  "key9": "655r1g72KQg33Tv6rDPtSwuvCrDs43Cymw1hxQtkDXAWNk2NyYKrL98SqRz4qCHrm5EHASkqUuu2dgd8G8zFGhxL",
  "key10": "5zGDAYThSAX83NAz1JDTZcZ4S75Mon4gq9khp4KicReTvkhRM5tbqXheTwgGyVZQK4hPh8vtny3zWAq83xBb3Xik",
  "key11": "3nb1DdLdygC5tVKmJnXC4HuZBUGorFXL6q3qPGPGPoQCEuE6rjpCQqaRKBC4pZKd9yT4f5DHhyySy91BPoBpuQtW",
  "key12": "ydYfmNeg9k1MgUotNhxLfup4pjad9qh5yogW8LpbJfzKWiNhWJsZweVYkAAoqNFRP9Kkkp1FPywKMiiKvbpY6TP",
  "key13": "3PbPQEVvdnoHtrs6kT35U4rrRpoZr6QZxj4NfwzzaUZQuJBWeKDr2PJq8QNT6FBtavSyJwyduMHwBk5c5FRXaACQ",
  "key14": "4PRzHQMjdcJ4PMKaY5NW34nmZHd7zFwdSYEn3iuHb2AdY96UP9mnWBPe6pjJN7yCqNxdYKeYJPF9DhaQkgiTkQXL",
  "key15": "2Kr6kok71HaBZ4sFEZGsfmGk5u9sGmxsBbSTREA5rcMgTgkG8swc1Cz5yTqcCZ3KfWJAdMs8WjCZZKkVW349GuJy",
  "key16": "YNXUN6Bo7nXTKHaoZ3RF9zSFJJjvquaCvYRZryc2hv9gAKBZSLN2sb2fcbxV5NU2BpTuCq59dpdrUPYRtuDz2bZ",
  "key17": "36AsM1bry7eD29eSjtiMWsmE2XmknN3uJbCSAy9pnXCAX5KBhBnadCuJkUH3KTYKosABtdPbw8xwjDDpbauBoHob",
  "key18": "2n3ipYDwvdHbRScHM4v4nwbgJ8fQrQCrtSAcsAfEnhiTm4Mk3JE8H1ZNyRVB3WhHSV91uvUAUhV5ZduaZk6U2DP",
  "key19": "2dxd9XgjW8XWrGsaesaptDGTcsHsAdrEFLPQF8TMgGZrCJX5oM7r96cpyfXTtZzbfEPY5ESRy2bTHe41fqXDgkBg",
  "key20": "3aUogMxZGM4WtkaGYARB9aywUMUcjUAb8Xcup5iSWrAvM2stUeX7KT19VdCRt1vRwDRQV5fYXyvNqUCpixQetMph",
  "key21": "2Nx1RFT4NcFV8Q7RX2kvQCnAs6Tggq8K7MF4jPnUSiLsKa5RfrMwoaQyzPRrB6yr68c38hnLBapBagrfdE8Zof2m",
  "key22": "2yuzjBfS9at8qQch89sFF3agmdevjhisDcy8jiWkFHHoGJ4UUXXoFQ9WAx4TXP1ju4peJSb5fC2TBBom9pPZU8qc",
  "key23": "5YCkWvMdKfF62NL6SDppaodojVCkvntTcvMFh1gFaZrib98HAZZHYzoJXzaitbsz4xvVyweuc2i7vGrMRuyQwMK1",
  "key24": "5w6hZngkTMJkSCvzFcnCfeL9xkwidEmCUY14wWEBCDPwNSZR997ssAp5hHQeWLAkCSznwYdeFhBtumaRYVS85kd9",
  "key25": "4x3sYQuNTp4LUs7f1wHP8JcPPuHaQNuWDRzNAvEkYTaCYzYn5ac8e4hs7orQTUMcWBzTh3nNL7M3eDMwV323x2yL",
  "key26": "4bNDB3odYuGL8Ao9mT2HTQbk5D71dwuJyeRDfEVA7fYdSPbz2dEpJqw4NCsDKGZZjyEktph2W5Nh4kbpXTqSpu2H",
  "key27": "5QnZiVd9N6ULufdqEz88TxqUpENxSTusN9acEBEvVk5tyUyTzutmeqfkae2ECDw6RhDAz2TQg7x6pXFt6AjaKvtH",
  "key28": "2D7GXvS3LhYQZHomXANLhBzyZQyjWarwPCqRi3Zb5FGKXs9FWm3MBgxVeCZQC2cGrGxA7DBYhoLUmgot3bqNgKmz",
  "key29": "3E2hu1fE1FMjxMrZruzMHiTu8wBz3ZfpmoqwRNiNgFowdrqHR8pwWuX6tmB4ro4RNU7CdrH6cxk57bhWuxu1bhZz",
  "key30": "2fBTnCzWQbpcbAE3cLCReYn24s6BkriBdZCxxdTwnB8jNHwKjECQhvrrf5BbzSwK8N6NgyD2w3kdYiWmBoCJnozJ",
  "key31": "2LXqw77PCYEx8A2j7UeoK9eQgYsfKuR6xeRycwaTWHnSGFmXkdLXHPevZs5PVRQoXDa33KTD3LjSoxFVmnwSSKpf",
  "key32": "5ayySWEAgX9j5rwL7M2Sza7MjenVMMKKJAzd6wPZ4fWJixvNmhDtYGvcNbjzenK6wLs6GGTwdkSuEVPrVjvjm5K5",
  "key33": "5VY3X5nG5cvtANdcuzuZcytWahehB56SHeoabc7kQWzfBRNyW3bPKZZJce1Fq3aXE1ptZLzzcKuN3qqDhtgnTxcL"
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
