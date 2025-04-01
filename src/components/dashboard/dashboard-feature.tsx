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
    "378nremC4K9VC4jzdZSDykwHgZrhv6Px9w6TrqutZxeZ65tkd6pd5jLMpwci2LJdNdXGqzG4DhyZeK6yWJgNL4ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wXsEjmDVrvh1YxdYYHocMCvBoRc6YkMfJ985wHZK5EpMFcYcg8U7GHoEAbzeVp7b6qfjvbuUcBRq9tFwms3W5WC",
  "key1": "3AuyGi4GcSNfyP7YRB4QzaGMKqkcwHT1GgKvJnsdBbNEeaCkdEgbXZDQn5pXqhVGc9iPFQ6TWJJ5dYK4eyC7Wt3w",
  "key2": "4REZW98JSE5arbpVnU8EXe24AXdyRRKrFFBSwqLkjhrwJhiWENEs1Utr4rUb8E47ricUHVX7yyp96XQnMJyDQ5px",
  "key3": "5NYtEaJv6oQjmHvt27dFdZgo84zSGhTYzg8UKkeBuR9VsLRnLExuXWqpgZSxL9VtcaP3saPsT61CJ1jh4ncEo5VV",
  "key4": "3QbtQPAzzCJAUvNfa3yvpwCqSqpRwELBozKEhx1V9uhvaFCpvXVkaF9jL1taipPjE9hSBEDibiJ5SZTkEr6BMCeY",
  "key5": "4YqWkxbr5HsZtjwDBW8LUgacomkm6QpNJJNdtJUDZknkZYe8DcFuyv3kvRTpGTPMsC99wLxhpyuCS8YWE2zJrKKm",
  "key6": "4ZPm5pw5mTs6FKYyf8tus1d4W1qehZd9JUDzUTDUPLWUnVrHJFyqEds8NuZW7s1n29cufdPNgRBf6wUZ45KWGEer",
  "key7": "5uXPJ9SXLVfimpmFkQjD6Fap4ijx4Rfonhd3q6ZM6srEdTZZUpEWT2GRZj6MtFFfW1FH34SQNeupzSWer7qUUidf",
  "key8": "nwXHBS8ismVbmp9smJwHXp8v7fNxkwJ5VBDDsyeTWWeCaRuMRnfkZ39oy1aYgjM6AFKx9cBNQg72vQgwLsXP7ue",
  "key9": "5o5LyAxs4r1hY1gNDhrKVtBJM9RxPQNMDs31i199VV26Xj9F4phC3SRBrEnYb7PqHgoSxZdcXnwC6cGiuwFLmG5b",
  "key10": "4sZ6GrpMGVmUfL2X3vxfz6pUUJFUDDBBbYWR4bACgCBHHVr9Kpyf4hdihsUDsmkdzupS61R7THBy4bhrT2AAhMc1",
  "key11": "3G2WzJrnb1uFsfa5Tvc3ZVytNZ3cTQEaSCaTVMx5oB776LAgBYeHZssF1waCp3XzqXgHppYJuhWYLQ1TjGGkJKQ3",
  "key12": "4p3fjJxL7RMrqxbzfYUyjcS7zkZucjQgZZ67J696JuBNsLFS6tjpthcsANDp5r2TMxkmFraCzA2CX2hhPQT7bY5T",
  "key13": "2uaLbf4FPL86XJRSBDynepTzvGAn7vg83Eddjv3qkb6SgjW81pqbRuumvYgFBBgu4KNxUHNtLvi1NQxnfeswYDwr",
  "key14": "251AqestFJXwN3jwvv5G1BSxV1trgMy4EpJeBQBt2BPgWTHVi3YEeF7rKovtvWTn6u6v6cKfnskvcPaKBJCb2T8B",
  "key15": "5CWdaBpfUwBQF28VvpSpW3WaXkMuavxuZEPMiqZ864KP1gDpwbLRmebM9JTPTGmkRKjLx4w82TcbaMknSkq39dfn",
  "key16": "2xcLZVryCJiB4V6CgS24Pu2KQd38Gnwj4WnQ7Gfp7NmS2Rwxeo9SCzH34Z8mngRsBVtiZi3CqeG5Q21WpT6DB1pS",
  "key17": "5Lupc5MpnNfyWgtExuBA9N8jZUfGfoqao5e6uJ5a61E4f8eLxYUaxATnkMP3hcuQcLW7wGhVf6C4RnrKbzAUEuAb",
  "key18": "4GXAxyUC6gLtzTN7tz8255NDG685E4SQthwPp3cbAZHTTAuwynieWxi5aYan7eXq1JxLeALZMRUioRVW7XRb6bws",
  "key19": "3cQgAXnpq87nLRpVTVe2JYddKYRMx2C3MyaLesD9pj1ik777NRbtqa4KSCuGpE4yDLgpc5QLGzpgaeVavch4xfBY",
  "key20": "2ezN53mCpUnkdKuP37ca2TN1C6vP28EfYx8AV6Rt3FriGH8PcngJ9g5g3Bmdsb7pyVDQkyXD3b1quLC4UiDgzB9W",
  "key21": "28TKDWo8HZxMavouNVSUYxcewvJGmLaFaZ5pQUUDN1m7Ak5qmxNhkKr373GBsNGcohnnKCHG7Pw2VtQV6Y9SbdFS",
  "key22": "zxV47d6kLAs6i4u8UwXMauxc25Tus1DuSLeraRJAhaQyrvSWL9tWrFZ6d4EAHgNQ9P5L1PCqo57dsp2febxnoDX",
  "key23": "VxzcYpmLtvq8dpKrfMQ18e7GJsq1n49UyGSZ4KN8622UiErgdG8DpABTEVaR7hJAK6VS3vvhfUmGK3mvJmzzwec",
  "key24": "4k7Q86hwvVTN11bKyogoqWR4jS3WRbyuGZ7GkmURZkxmBU9Di835reuXDtNJYW1RmZ7596jHedfBheArnL5wPsBy",
  "key25": "YkPyNrK43eyJ91cV8hcXtmFtHbuAU1eGy7MzFvL87yBEkPJ77hSPtieEQkDwXs4CTu9oyQEYLiZ3VCAL2YABTLa",
  "key26": "2G5rUh7uzVFyDU3xgKEgXwKj8wBzeAf68YD1xit5veyXHz2PbpgZeosL7HtYPGFqnv42raJSipZP3KZQUcx4so7C",
  "key27": "5oaEDa8jXBhQDjPCwdpjqG7adHm64Vq9AofFjK5E4J7pCWGrYuhmrTyksKrCmF3wr9gvCRLadnr3SxNY415nwk3x",
  "key28": "2Q22sjcEziqX3mj5gNpeZhM6E6B8HxXKWaBtkr6FMrG4uUnQWkLygiA7z76pqj6zxPpi19RL3RkyhKcujNPmyUgF",
  "key29": "3u9vkuSK1cmAbnnJDnfqKZzVQvT5zjs5LcMpnqzV6o4PJVaHQJbqqrHo2zqkTEVDQ3BHnCUSqMHcvkz8MpvPZ1L",
  "key30": "4Cjut2cmT3vy44sv6ujG9LSdU4LxBSozurE55BjxUKu2t3sLhD5hEENBpK3umEXfb7gckF7whaw27gNK3uU9xBbv",
  "key31": "5d1PwxJDEt5kSB6HAN3fSUDusRGsASocmTkKqGaYmtrV21Q4EDLzmYh2TLuu3gDDCpzqrVFaM7cmGbRP8uuAXwvw",
  "key32": "CNrHbZZtRgfTEzhDGqzipcQDFrZPUkfufXEJPL3RAzgeRFTxktvg8Yy8QQMLJTFxHGZH7cyz7aDRK3U75nv3mUG"
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
