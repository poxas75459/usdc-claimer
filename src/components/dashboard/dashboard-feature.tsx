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
    "2wg9mMJsC8NEEZv5utbT6VF4qe4z1ag2TVtd4RoXDbcWJxsPAMbgsqD5KvopgmYGy2cdpVL2ANW6kNp1G6pydLdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GiPeuUg4ZeDsoiiHqQDWuuKjkBC2HZMChtdPHM1bWgo7g6jTQFFqqzNmf4F1oMWn79kZQB6jBXtVEaF5y1cPgih",
  "key1": "rd6wFRzFppE3FVRVucG9G9G63cZ2NKyG47mQHkn4oDMDvt24prqPFyqhbtW68TqJosw9tf2S1xUPPoR5BsEc7UR",
  "key2": "XrLaJWEzGiBteAfCYzTvk33m7bQeouiEepdukB2VcDiSTxhnGPKPqyBXsucmFQpup5EDZWKWRryHYrojrFBBWj2",
  "key3": "6316i1xFJxbr5YaQ4kc8zxYm9ZVxq6EiUKdLF7X6ysJHNaX8JGrhSzWwTPpKkA2B6jEYkUvCT23MJMcxTZZZSwDM",
  "key4": "4Aw7cDiiFMRYFGp2iY2286ZrbngwqPEjwMCqMCELxHHkyd6TZF1FtC56DFdNfFE4vHrXoJ5h6D3ixQgJK94faAXL",
  "key5": "46NZmTyWsyKfFeVy3KbmxdZnRrX1d4FwA2hBUp8q1YoVTtJCAWPsp7P4N1hTnHkfrbkSSMvxbehHaMNoaQKGzC3M",
  "key6": "58jgj425ASj3V8jqXDupTvLm4wGBRKReobtU9uYxWGwVVTffpMf6UaTM9Du6DvkwHtdbWiadUBZUgQzzYsX924bM",
  "key7": "5rBT6mp1ipgGBhipyYJdzpDBZ2wdoLueXQ4RC5wq6RLJbkT7PPvfSEWheFPXrZoLseztCyQWSMBgUDpC6eKrPayi",
  "key8": "3ZCW5Mgq9ZJAs8ywUeAnoxPXRK31ig5xYurbuAtFbDGGb6MFDDvkZsVZjd3ywBzhe4E89TVzgnBfubAS3eruNDyD",
  "key9": "5nVe32dhXMPoAjWefGV9ab4kFSQkMaXE1tk4pe6H9YVz8GDbJjZSjcjyMSQ1TXW2uspv92NovSWTr217mnq3ZhGB",
  "key10": "3fUKDxXJHuo2tVhbDwkjgX6j4o27fZWnGaTwPTKBDKEyYAor32ZpVgtpbfx8MZjCiSTHQM8kyGQHSnHeXGeA1UtU",
  "key11": "2sjoSSqDXMtJMqvUFp8rNFee4G2NioJzQR1ce3Ww6DL7MvqPqAgvzbRUBGRcwnmZiwkp1yRohPbv7d9W5c5rNPcd",
  "key12": "3VzAiXY6uajfRWJUFUpugwDL7WrZ9jqZq9eDMu2ZVFgnk4fESYcvEnB2VkKA42m1D6GLmGMtSX2u6PY4jZsFFvvW",
  "key13": "jZ8KUGxT41aJ7ki1RMnhZLMYrjUtLoD7KW3ioLLKmoAgZJ5yXbQMdnLRXYLCmfnwD8RhGa42ipeuGuaiUM31Rt4",
  "key14": "34m49V3WpaytfFfdWUd4RXHzMmacxa8zT6Q8FHduHspMYNXQzSTajQYjPHBvDfSM7waPg1x27ohRVE2R1ixPNyJJ",
  "key15": "2ycHHCznyjTKAUXzmt3qrWrKzvDa8Bg1WSCgQ2jSENZmkpJm1L8Lrn1kb2RDDKuS4kgqdmSuBmEx47kRLJ8FT5wG",
  "key16": "4zGkn8qYKEZXSJMTzgS77bZKKGA5yxKSYyPT16zCwEYta86c8n1kJAEXpMpwkXxUQ5m1nEavsQKvtAayQAX42dgB",
  "key17": "2pc3n3qnwL3JoBd2Ysb7H2ddJQv3mktt3aMPgDGUsz4n16jdYdLegiHd64ShRXontXBUupkGy94AtwYAfqSD5Nhj",
  "key18": "g2TzbAoFpL9xp3PWuSu9P1hB4VbNkZejfGYEkxkNDhr8mbAE4jCgv48FHnHDvie2cyMu788Ei1QGmFt9RZPuakf",
  "key19": "3RmqCfy6Yv1fg3xPFpQyr9RDakZqUeLvXaPyNhVqzmTvQRXFZd1dC6EvDue2j8nanPicqq3cV9VuRUCfK9dV5FTF",
  "key20": "wsS7B1ujJeYSFznyD4pyg1gjM1q45eiH6RTVYj9uNpu3F7LtHU4REqP46j6C5nETpgjxKdME7jtAJQGGNm5TjWD",
  "key21": "5zYKa3FuR1kUn3gv7TB3xYrUPuqEaRjQiWAx5a8AoCniDCSCdSBENfkCfzQbxjkxLGzEsh3u6wnztFUByKzttfTi",
  "key22": "ecEV4sXV5jqMWVjrdyKwqznHax17shSKxmHJrxwNmqdN7Dd5GoPPCEiR33X2L1d9GGnhz9yVYXt2mnSp8ongWvr",
  "key23": "5uCRP6wG7wcWZNZeveNv6o82sQYQANoj2dx7tJ7ou6puQQAv4zuJudz5XYN2bHrWzQRqVHzj9bsdDnHpRhrHv7BM",
  "key24": "4j2dbfiuHXLmYEUSZMDAa9Jh5ZhduFM7qh7ApfaCmVe5hmxBzrSYrVGL9GJAbgEdGdFosEFAVx7pUsRaDxWD4XYG",
  "key25": "4U76WtZRgkPEXNrEeVCQM73X4iHMPFZ5LND4ACVFohEpoqxNBR7sKRtqdiEvB2t3HAyZ1MGHxri3P28pPuX4jSyY",
  "key26": "4KkGZv8amzdSyGDDTmN2cXBkAvtXDQrQfhdAWCaT4MkrGo4PYhoWeVCEsrwrx8dzcHZn9t2FawvAn2tUAxZsZdxe",
  "key27": "33sJHKa1zpmN8ECLAsTCRZ3ykpkTEmYvgcf4Bu4E9N26yTptuHkef2vpCweTEvGEw6FaNMDYT8CubQZUbQsmjChk",
  "key28": "WEF52qCvTswEjGbXM6b7QdCYGH3DDdtCbwviAehv9G7t2BddY5wjCLrqV4HSPsaydV1yywLoVLag87wAwx4Zf3y",
  "key29": "2NsT26wKxZcAZcza7Zm9DXRwgHS8jvj5GpRYX5Bh71FJK6Kz893wV22aC7F9pPJUesDAHvzgTifnMnpZxS4x3fgv",
  "key30": "29sEjdUmNggPRx8hVkBr9nWRTmoauy8J4kxwshRbs46wBGPboUvYHYQEYrmzGA5nFDL6RdrmHhGsyTRNwfnaEhuC",
  "key31": "3hNa1kU6FMWunkcW7ZDUgKHBn3n8LD6buXvqWPCd8CaV416h6uZmK26tkBrxLmne3qMhoB6dakbSZdeGPfsZ6WJ7",
  "key32": "277441T9jUhVkXYCrYaEL12p4hCiGT4U6zaHQRCxjZg9h1MqyhGFyjhFivkHmAEfymTixooXK3AQnrYykzMByBRu",
  "key33": "VjN7FdXwSveHnxkEKCvXqGcB1BFmwKsDPX1X5sXBjyjb8XybfRQX9QbMcXSJhoagqzUPVoCgKA3CVx5FdsvwyJK",
  "key34": "3xwA4LbY8FyJdVo7fCDz2Ce9sLHxoM87hiese6AukQsiDJobzBcGrBCLwePk8AaarHZkxwe7fQfZRKrhwSTKKtar",
  "key35": "5gGqG3v9LCPLj8M5EXGfwzVkwBC8Tmm7VDrQQycd3rfdtvY5PGmRvvr876TGQEynpu2BHoNgSoAGTYmGqk5jsr9Z"
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
