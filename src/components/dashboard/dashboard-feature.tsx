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
    "BLKSaRXh2Ta5zP8knNMU2SCsP4NENzf751vCx1HibE1dAEnobNJbZEW6r2gitiouV3cSG27TJttX5sP72czmvSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jaTMa1Dx7gQhineTQgzT6bwzQYhPPGkaigzUw6UoivLx377nJmcN1tDSTg1bEZgFqZsmFJxLuGxqkk2bwBJSkta",
  "key1": "5Z9GzRxDu68FFBgDAJ1eE93E5dYXCZ87Ysygo4U9i9SM2SxWPsrjCu5SSnp85tbfH9ejWbkbj3XGgEbMuHrL1bND",
  "key2": "2GAJKLMUEJjqqTz7ZassxLgv8aFwaWNUeTaDw4kXegor1PkgNwsAuwiFsKT4b2mMx5jDjcKa7xxc9MKaxvMnZ3HR",
  "key3": "eTk8qsor5VXi38HneY5J9vzJgGdfXiNHAyRbfK8ZP5yA1PPdgrjh4PAoh6F7jsErai1zkUVkoz6axmywgLttz5g",
  "key4": "2jQhAPEjnPYDPWGtZKfrAevrmGfrmUhMyxvywjw8xrRrRD2BTN3XooJViTY3m8NDKF6RTSkkWhowdvbBJLcP2wQP",
  "key5": "3aT7PY78hKJ1aGGyU2Hvij2otYzbN82fKKscE9S9yWDojjUGNhGpSSV76odxEmQXQVkq9PyKv1aKxbvBeaa3o4GG",
  "key6": "2WfhTxi9mc8xKqiRJXyTyzkQT2U96cYYf1PUnB2rEpyicFyiUnPvLyZuH3YcaJT9RGn79RQ7juqTnf1NuSW7xysj",
  "key7": "2vc9cU1qP569A4CRB3HwGjBEsDYigiiMr3reZKWF9hjCcPoXrDEGBEDA6QWTtJsjQFrniLJEjjkbXEvhLsVMgRx2",
  "key8": "5rj7hxCxXS94kjb1txPxRdEMAHUZNaBu7SwxAueN7Zqq1tkWqgcBncEbNpMebQL3ZbCkGfVE82RK7EAcCozCWxnW",
  "key9": "sdXwgMS4d5EvCr2w9UihoSp327doGWmXF5KbwrcB2vWqSEyyGctUcogJNkjAMw296R4mhmSfMHqhkkiURJTeL2c",
  "key10": "4MgQbfKphSUHoumddgKxVBoRDbBx3bcDMaK4sZQTnrMszq3gvZBgACvASpWDLMXrv4Yurh2DFu3UxmdgyN3Uomsg",
  "key11": "2JTrBjGnoUegFF1rtWYkC4r75xFNWm5zmm84dGefp9SrhrNbdmacPFFzAL7H8eNZbfya6pEC7DQUm27p5K7Yw3Kt",
  "key12": "3YvQQZPPauuX25aKue9g6PwpnnP4DdxPsmWUo3s8b2DwKdPD8vYjjH896VnEMAFKPPHSFc8ps7Tv9F61KopdSUhx",
  "key13": "3KgTKv9Std31E3Gk8Cb8bV2gyYP6wjBo3km799JQTewUEdE6siyEs7J6zbtTkM581UVL73jvcYmugQtPZK6oKFTk",
  "key14": "3tne5wPDLjKPHx3sfu525YkEuSYWZiJf2XFfGGt5b5ubdvN6keWEGPpe13RvVU5YzrTpiVNhhTyLN8rFheBh1EyQ",
  "key15": "wHKtcJvj5C19NWEkFjgXpgZLDbtGsLhdgxMRzdPXHV6EBY5RwQhdwL4AGLe78VW9aBWt3iTDevikZQVpzdGKm9m",
  "key16": "f4dTj4uQQr5PGVUTawVvQw4yjyjfp6C2hZ7dQUMfqxnyKqmi3qCWjHnWYbKpyRBY3yc3q7D1az2G9U7mK7mRxJz",
  "key17": "4iqRtjK1BmPk5cDnyJCxrLyTWCYRjomb9rpHJPLdpAtB9Hj2wHSkmANGbsvFzqL8jpe6ZgWwGPKGDSJjtFFmHr6h",
  "key18": "4hpPzxCdUGoNayUG1GyByQYYxNvtFZeCNjXUiVXBaUWbiiQv76evkXPFefrkkgogCjtsecURe4o1NWgLZ8jXS1Tj",
  "key19": "4NU191NKTGZbSuR2S3W6BTSPfWyJsmtJAziimJQvo8Ay1p1BdzdLDqijExEaQJLFJzErvxzY56ZC22mnpwVva64r",
  "key20": "4M56wDvRpS3ERpNjR7zU8V2mDHaKjesAGEEb4evg5fDTGfLKDE9c9E6Q1k2qjMqX1jojPzeknX2YZcMVV6YE2ai9",
  "key21": "3RgfYsPomWS1PXfGfS1AbcnSrn9F4oegv3uaSndmfjV8PB35A2HcayG3u3E1c1eC61yzNcSvGCPkTckMG7cQxBq8",
  "key22": "2V2qsaCB5caw5RmZZWBZfjAftFkNBc6UYj5dBp3RU2v7onJVa98BphucmsH85GXBsac6gCp37zqT6Gqbmd9baoGF",
  "key23": "5YB3R6iuUSj7KbtUTympXRpzvHPx7v83xDHRPGsUwHF133teCpbh4Bcsy5EnxN8XSnbS36V4P7nBenBDADA4qCQc",
  "key24": "2JMvEE3uRyuYRnZmjtkBTU3JsZbghH2m56y5R2ZqtoyCCH5a13BFnxyKeoWAncwSm5qLrgrkqzFFcMoTaxrPGyna",
  "key25": "5mATyxXrr9GE2KkA75GBqri6o1ktz4FvXMMgY8eYcEr1K6StRyno1nDEBRkvk3pYMef6ygF3xQDAVuzKqPoWRKH1",
  "key26": "4cRdUPr6hjKcGienaK1MeF7Utt9zyQavBCHAbtsW1hsJqbGAM5aREusTzWo7y6kEZXx6asLtYGo1dXANx1mrU5cW",
  "key27": "4g1wGWYF35ZEKyvL8z8SPxuvF7SPYv4X9SsiuuzqfxtEvDfnETUheL8SosJuKKHywuWjDs5WDGktnQvvN5KcLreF",
  "key28": "EdkaUVoee1waUw4Jm7752Xo9RPDgZyspFERPGWDvyzxT1h5HhyHruQPf551WSdhLMfxZiqDM9b6Ggwv7Bdipfze",
  "key29": "4YU9s7TSeffb37V9pKd3nLomuxVgrGLBTaAYiY9e6zKfSwigjdJMHJkLND3cGVYETphKZrSnaGM8PNXVFvHBMSH5",
  "key30": "4NR1q8bGV2mebE3BATj9Z2tTZcF4Jbq9a54eHbhgxgfidT2KyZxBENvupdQD89QNRdNBMJWXDbGV7hjZBs5H95Jy",
  "key31": "3a2MmDygaozqV56fSkT4AUojY2vrEeLaC7X5v4KfkHCxZFFj6sjhGVjdsFqJeJyMt8P6hgtgbUJwqhS24oXizC7x",
  "key32": "4AeMEGSZqajDh53LBHm4KFiZdeNnQyjviCE68bHRStHjkW3DT9bANMT79vfXFY8HoH6ZKZFxh31CJMkZHvXa2bAN",
  "key33": "28v5Z4JJdNESr12Sum7bT5C5U3koE8MDzymB5kyrJ2i8Ktgo2f4iaioZrPJ4FwA7UUzYgbjAV6kTDBEFnxHsZgJC",
  "key34": "5om2tefX2MCbyrbRRVNwek2ccCZy8cbNFuwEA9c29ZCsQjgwCXFW1tukW8u9iXsPp9HeRbZ46DmTpNkVPseJ9uR5",
  "key35": "GkpZNJsSgiqE1SYycFdTva62rJ1XSHQu752dz8Ahzgm9CBD4ircFecLQqtzmUSafXwtEGt5997Gohk3jXnumaDP",
  "key36": "3YYH4kR8iyQbgPLKpNaGCAjnUusBYQeDo1bvvBz8iov1eULp2FNkrgD8pAnWCVfUPVGRtXeRSds1vwGdW4H9zUCX",
  "key37": "5Jfi6wq61XS9dia1rRjjJa1aQLDFzcaSh5gDfLMLwQzSdSrweYVgh6D2gp5woNMLyyyuWC8mhCAJp2vX2ZGLy2mb",
  "key38": "4QXfihrJygNyN1ZXcyUeiwgovXGgqyrmNSjcqBXq9DmrARHX9k3SV4uZHChVReM2gMVDi8nZm3HnuCRqKbXt4y1E",
  "key39": "2KfnvUxWgZo7YK47Jjm5BnpbgWGYLeVqUtwUh9LvGjTC7pnhN1rTrAZD18VatDgsuXYAJJCPrBFaEnFv8DFFtEvy",
  "key40": "3LY8By5dahwPSw7jkmV28PFFQjFMVzBzA2bwzVr48eeJVwmyY11DQwZMUggfGdj4iREm7eqKyaUWjFbSzTHpt2Wx",
  "key41": "2LJApV2VAwAC4cWm4sS6GvoeRppBgV4XUeEiEP2UX9NC1ijTA7sAWjSQSfVnqGgXc1kymzifN2LGBQaUvUs4Z883"
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
