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
    "5bc4V3cfCnm3eGHpfcwzqHRRtBAbrArQL7x1LyqxKVJ5LZqkZbYKa5jP35pozWgiQhtcFHPXgKUD6Jgx6M1FeorR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64h3KMvH51QTodrVDvH5DTCy4f45CjjF8siKR4sNRxYa8MVm1QRYvJtnjybp6N6ZgnmBL16bXToyEtb4PwWh57w1",
  "key1": "Gp9QfaTwK5xguei8SzcGSfwqV7ABU8iNgviFzuzuPrTHwzpeqWx2ZXVYANbpNroPtW8kmBPhTcBBrNefgaj3X98",
  "key2": "2JueQ5W1KEqbLiLghRbW1E9V949LGLcE91BDAyVb2BM3VkGNqKMD443PYE1jCjjiB96Gzo2wqsxQzKVhJYEb1h59",
  "key3": "5CqE6wFD8b6W4VEscnD6tSktNvbo4YgjeyU7bwd3kZ1jMGfhu3TSxvn2fTizkaiiHgyJ9gpGVT6jpR7LfEbbRcVA",
  "key4": "2qqVFux9c2aE5BykJiUXs8VuaSocHQQnWB3tKPxcLAaTeUD6PyVhakwE7ytHz5poBzh2B2gRqjwku4psm7vtCwxp",
  "key5": "3kpzUSDCgZDPKtDjocoMEc1YtpMBaBvP1X8u25PT2yrE8MYpCHteTsP6EUKJJnw3TRjGavnV2d4TMzr5KgYu8Tyj",
  "key6": "cKQPF1TYAqAXLKRKfec9U9wexQDx1VtntnkncPo4tqPL79igkd1C944pAdWjd2bfpzTcp5zBcZfCirRsbM2daps",
  "key7": "2UW4naPTwxTRX8bf5V2nR6K3VfpVueB9M8R2qPTWZ9EifoiXEDDh39H7rQQBbpDhcUAUF7ZgZ6PHfjzZfBf9YKwE",
  "key8": "549fhGLD8USjwdfBx7eU8TYLum9EGs9TwLs77bw19Girgi3WjhHHKAjbD4f3TETExY3AKUZpynTP33J9kVRRsxZr",
  "key9": "3zwdG3URmZryW1u4i2W9pj8AP3XqBN7UAqTP5KdXP5p3MrakrLPKHQaaBPcNwxDAutc9bAZWVRQCCY1GBtvt6gwy",
  "key10": "TzrYchkSuqoJbup9erG5WNcWb5E5vfCFQBpQXrDQ8nwke29bmpB7MLZseEVsvt8mf61fDcVFcmWTaFQNSca71z8",
  "key11": "3tiJ5J3T7FCBJkNLGDXjeEeEM8LDitSptq2y7UVk43VPhvFkjiqPhvZnJkSyg9NDRt5omKcFEE74AVgj6tPi9xE1",
  "key12": "4uDqPzu1o6eLfcNwdtxZX8QYLXgVEcFpPz7jAajp5y9KMpDjveFtYLMLeEDLDP28V7LMgNogqozi4cRY8x8dD78z",
  "key13": "3sKaSL7tUuUyWpkiJF7qYbizRB7z9Pt71zcvrmDPSLCm6yJMrpYpscGAxY2YAYYDSPgQht9gr2Cc4QUtf9Af9AkS",
  "key14": "5AkMVnLEJypQkiKtnr8reBrodG3CPsRSkdw7ju6J7mrgn2dLtjd2Xzhgy3nifNtpFNMdZ12Naw9QvR1yGyeUV8Wx",
  "key15": "4yYvmmzyD4dwAAhDBsYv4QcwAQy5txBm91yiEPVq9r1FJ9gTdjeTWTXGFe3X89arGSn134rHHMiS2JQW7yrsw9sZ",
  "key16": "4PZptq8RCQG49wVX7Br7w1zKNF9Fr1wQmhwTkZEqusexF5VeBWTohxBAoX3k5EwRPAzE2Nbx6MhdXRdmeFJKNB2Z",
  "key17": "2q5eTKBtExVREzGwGoEU3M7Dwn9QnthwSKJYSuy2HApXAK9fmS7tDVfCLDpP7Ja4Pfh3zV3GrBZR2iyXGNmaZPow",
  "key18": "27DAjdCNhDWCoeyPmfJoNUfPkMaFHDvsg3bhfos4wnzVdmzuoaZwfJDh4SA46nFh7qzaBSUrsw48UJ9qkycJEtJu",
  "key19": "ajecmrP2cHG3coTd1gbYEoSYcfUZcJabmcHScwSvPFTVcWMq5cceME4UB25VwCdnP3Ank46NjHc93PWAmYH8691",
  "key20": "5edH6fwcA3QAUqBDjSkmAu3EP3Ekgb3WTQXkbDKAVC27v6AWj2JVJw4CiZ8ekTXjFXxMqFf8qN4d15Uzprz6QEeG",
  "key21": "3n1jR1hwiHC1Sb6sRYufBDwryGhzYfka3GjsxPGQe4AEVfESpitDDknbEFCZ4wHWoU38UoCVPARYpCR3dnxRGDyv",
  "key22": "3tdBhonZ5ExutNmXHUdon4KpDG1uvbF9J3KeDgqcNCVNW4DeQKK74PXvz4kDtHFbkh4S4yh7iQ7vrdfyXebk5thC",
  "key23": "5soJGha3h4bQsnMwtMpbdTutkxumj5BWPw4LLUCzizH6wV5kknJ9XKf8k2ueA3zf66gkhwYFw9n5UdbCYzyx2Js6",
  "key24": "64PM6dvtg7c65PtwYqFn7WM9vgRBKYHgbT6zQFtrnyzQfm7bJaVTbP7xHS5fFnV1CWpnPVwXdMXCgnhenQr9MCnD",
  "key25": "31axvj3aSJpzzDQbrWfsf12cgR97JNpBjXrN3QSNQ9NtkzDg3vX9VmhrvdZLsiDNp1Sgi5XdErjTQRnQR4GmNsYh",
  "key26": "4NAqUF5ExMgMgzuWHPedmxEAcY7zz6QWXNZTybZSHCErZx8BMb7j2SYmFjDHKTvtPe9WRNRdEyzkFyxtuhRNnfnN",
  "key27": "3Swg37LH7LTRTdWQ4mFEeVxuUdYkfrUhfU2KoVfk1BxQzLxveLmgufbofKGgkHBAtonyG3z8qZynQKB3Kk1vXzVt",
  "key28": "4x4MArXvigwF94H6P1mZ5FDRpEH7u3kyKLhviQzgr6SeiGeGE6myWYemKYapnpGee93pK732iHngTumDiE1b8QC5",
  "key29": "24hR7eUpDL9nzt8PwF37GZzzQZyhpNHEYXRY4bV3HzqyRMRaXYQL3Cw7DzfhUotkBvXVobM42AbbVCWguiL5G37B",
  "key30": "39JypoU3Bjza2Ss85AHBvdcrRdEZo4uYs6s8ZrLCBo8YH8ktWoauGueKdCDMMVYmzFDMzFyPTtcVUGAKgXZp7F7x",
  "key31": "5NUBjuHW99yhHJJQuWdfZmWVvQgqsWujKQ6V2gX9uenKuKb8f4YKzzJiLjtwZFoCwW3j1prqoC1aHoEh8aUcuiFe",
  "key32": "5X4NTqCW5uJnGLitCZGpwWupcxxGvtxNc2jPqNYrsRKm7cVjqvLNmSDo4fAxkJy8Sr2GHjijd4SpFbatc3dexai9",
  "key33": "k95Z2qSv59xjBuipDR4eHxkUP34YqxjmQipEA13nFRhtjsZgrsyGcGx8Hnqe6fVLeNCEPvdY98cyR2RrfdQue4a",
  "key34": "5DfDJFx4ieb9sYjAH5Ccz5r1PZZYn7idyxFE4n4co3QfxdXQoZpCgmoo7pruaX3QLAY5eqBNZteQrDy5Hb9TkhG9",
  "key35": "651AKC1YCipG9xSez7TqLBTyUZFBL6NkgeDDpmNbWq1oqg1fXK6Eao3d6wKVJv7W41bTpSangz96QCRMfsHabX6J",
  "key36": "4iiyPW9igCt8hGWR7GSwZEoFPRRDRG9c3KqFECx5ZfhAFB7AA3Z5akiTs3e7zpRBShHqR3PmbnYXRD5Vz3MoQxpu",
  "key37": "4D4mxStvgYMEZvM4f8zk6FMXrGYFMPSkRdA98sbEaTs9enjgpfFRqtDJojCEBZVFMEYGuzqpq9zhzUtXjybcD6er",
  "key38": "4TPwUeg6vcfdDUJMgNFm5ez99S7JTw9rjs4b19ugPigMyG4sEK5BruSFSLa1eq5ZGFoo3WnvXMSzi6uAThHooBpm",
  "key39": "4t84fHK9RTDb5JfMvdhiRKo2yMymNfKoKr7Bz5cxMbCw34VUbXvgptkWHkmY8hUPPHnfXbTFGX25Fs4QT9VoX6GU",
  "key40": "2D1NarH81BJ5WFhqMGs9R5BHjs64ta9qRv2ohKsv4mrp5nz2849twH9a9HiLvJp8y5WbB8yZ7atRbpPjDJCnrQ7K"
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
