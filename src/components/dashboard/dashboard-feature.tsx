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
    "5zzS8xcaKQGqRX6ifr8d7wb9KFvARMJWcFPp2QFGL93CHVMj5hGiDvtMy7YkhmqExhNJegytEaiV1Vy5shdZWv76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tr2nE8n6FmM2iqbFEMSyR4j1c4HsA3m1x96DWmz3JGoskbPg9XM4jwbA3rieQ9f3TvM3i4okFqKsZRDC7jFo4Ld",
  "key1": "65eeRau6YkPZ9vm7JKicwiHoVGavQpvoznPdVSET4eev2ya9hQmovdciM3V2uY69agiP6ScivQEej1wVjq2JJE1b",
  "key2": "3NWFMxgVr4NuCEtEiwgyMAooanCqGW4bxcn8LkoKd2qcqAcCNdL5os6mSJ7pmjXhXVc1vzdUWjXrS5A9VBBoncHE",
  "key3": "4gThbmvCVQb3kAMiLKPnAWuY4jd4fCZSHcewH3o7Nz1EWhKxS1B7YsvHE5MtmWEFcqkCRt8FoXjefvzFeZNjn7Du",
  "key4": "BXK43vZMATECo7ZtVePFdCMPQHyCoazCTTsKtVUgg4vgGyyemBhQZhL9HmHP18sfwV27vcgGdgNe9SCEK9bycod",
  "key5": "4DgrDfjimVVD7MxUeRbJ4dkC99NKB8dZw5Funbd2raLSnZsEmCAkxxvXwLHwYEEhtrdZsMZuFnx6LNfbZAgrMwfC",
  "key6": "37icdmVDYNr1korC8RyLAu5YmCeskdELmTzmojtAhiPc8y3cQ12WeHEECEroKwDCgHN5dNkYwkB67XhG3NpxRm6g",
  "key7": "5zAsn8QFsfDPE5wvcsQEqeP8SwHYscYN2Jz6cRHZw99P9BGC4zXaF8QnqfRgXjkWW4kjSZRX8ei1mJk4VHmMvmq3",
  "key8": "5a6pffU9hTenGoraEyasGv6hPERp83iCRy4EXW8Wur3ZQu1z6q31TyqzDJFjJ5qEPf6yEG3vyLqq4TG2qV9aLdtS",
  "key9": "3EMrxzQzW8o69ZwinAVEJSMCLGouMj4bQ51X6aqZPt8WbqkQ1dhh4fGHd2Ktr1KcV4pGF27eAkpSdqvtTGwobHK3",
  "key10": "64YiJaYriuQ8yo7kjnKtNjozE1qNfYguj4bDcPSCnxgtUeMRDSXuKdxXy6Upew5R3U2eZos3y2NeznCYbn7TZvbY",
  "key11": "2QKR4Es3wBPHitVqLzvoqRfmHSdwiAHngMyDJGFqeiQJJ47xo9u5XQQep2DnqnD9EzdH4nXYZ9Tpw8zwZ5hjiJQ4",
  "key12": "3eLPDgqVyhmb9RGJFQm8itsrBmK3undgYwiApXvg4pyMsbUCbHeUNaB3fSvbrNUTt4VXFUmKscnVMEJd2BkcCtdJ",
  "key13": "5NRV4cVa1kPP4bPQRRxFLpwJxABnVMRRxSzXuZoTwvgZZcL97MuMiCyCDUFYQcqjQ3V8j2u8RS2Bns6Ww9grpchG",
  "key14": "HHmXKe6hcoYNGjWLju3q1RPTsoT8VCHpqB4jdx6hSffCYBYvx5zcBvZoahdmmLYjnXwEjYM3a9TVMKGigtu8467",
  "key15": "38GJznPTEwz5nGpAqaFN74SJ3TPYpfu99crLcn4uusH9d53ZWuRus7etVxxPARoExygzMdue3MEPEZ6F3VmY2jKN",
  "key16": "3UQbF8qo9zhFCY8NATcNWWihfuGin7yHue9VNhNmPmxxSy529b8iJSsR1wGgtqa9gs2ZjLPAf3mB7AEA8yiZzSb6",
  "key17": "2uXHoSLp1inJHEAZELTRAPfzdAU2tM2h6Qb99R2nLSr8XqaHexXbVX4cb85PYKL3ExMHwsirmPmN44c4gGudwWdF",
  "key18": "3TTqNN4u1vGyfCWoriC96znkMUDNgTNFpxQdH7a8rhpY81Gc1rGzJ8jwyxLceFnhoVizx4meG3WsarTEKUfhnAaC",
  "key19": "2yYUM6F9sxuujpYKhNDqxuuLtiWXvuqZpgtw9KaJmDNfguvSLkw3jCdCxZmYZWVFbuqgzUa111qvVqRsw5qznkSJ",
  "key20": "2k56vJ4kzYyf142NPzfxNXp64V4W29tXbeGyqeCC9mBi1nYPnD8cyffdQPGxTzdQvfp7qn2cRmLBjmkG9rkFq6tN",
  "key21": "5aEQoU3wHodohbXgesFe4dHDy5aT3een5iG5LiGurUYajZsgZryFMDsxHj9N1krF7cXhDUMfTgtp6nVh9wVj3D36",
  "key22": "46hShXKSVhmTDS8iFmSCEbzq2EKTm37gYQqEXxQZzCUPzvy6YQPF3Xxj3Qo9Zzk2MVeNGLBjG9y4TvCFDxUWTfpH",
  "key23": "4nWrn7pNobhVC2RLRTDR9DQGmD94T1WhHDrgJCUe3u5ecmHWyY5h6vhs9FsHZsZ29EVfWRfzmqoxyUksh9svvmji",
  "key24": "5czGM8HU5LN6obEJdMHAYNAJ64DTndG6GkAm5mBp4WdPpEHCVErNCXjNbbT3wBdaLTa5m7sYAN7av669xexA9Jpu",
  "key25": "SMxXu7WiwUJHMDBpFk3F9PdXvbpeSg4VTDUq3Z2gGYES9JU58je7Ypu6TMxNCo6hv7WjvW3hU7JYfzhmEt6ywCP",
  "key26": "knCbAUc7scis2QdjZBa9TLCMSePMit5KCSqBHtGMg23PUTTcHvz5H84fRspRYLpm8ZALxLnwsbqLgHxVsDpbSVC",
  "key27": "4B6fQaZuWip3Wp8V1trn1pYL9EJenXhHNSYvmWkMCW6uUoEwGeYVEw884734kYyKjAhi8mu7JU7hoQxjeVbhJuTh",
  "key28": "4VySvMtKUZyqLz3jxYudxCcKsFSbfeP64T8dQA7p4EPBzFT5URjasU1tQrwvJwaGwbFg91RiXLyReYyNaf9ZHxG8"
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
