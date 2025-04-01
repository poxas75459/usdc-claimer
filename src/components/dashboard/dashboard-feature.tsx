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
    "6cFXqbKsKgJ9o2i7FtaX12Kv7VwY4prFyb6y3ZNPzr3u9rPDEFV4FfopqKoiGKX9FVU72XoVFGqgnuSk9q6mw8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MzRCqXeqJHyBWoCrfABrR8AqStfzxy2uhv2cvyfqiD2hJM5xKppyYNzkJQtGPGreybvj9YrTUXcyB21NTX1rZg1",
  "key1": "DWy6BgXTWPE6Uni8R4k2qdaemJ2QUycb4v7CHhHinDDcsthwwiy4Hrbm1WJXuf15fLFH6aMmFrDVCTANCyztiCs",
  "key2": "2qoq1gUo73PzWZ6sUZCNZatsNziWbLDtowRHLYU5rmuRh38QUU1MCMmdt5miRyEjKpNXqFch98RKHakZoU1zo7Pv",
  "key3": "4z5qrkPmmhvQcBYtbEAeJpqiZJUbmDiKaUs2VeZ2m3E7wDgzH3LA5YR7LbUQrCW29zcgKWFt3okeUUqwn84K47DU",
  "key4": "4YozW2hDeApGibZip7AfmeiLABcMMVYD61F1EsNVtnAa9TQSNKRckdFTg7xQB79wqCouhQcQcqpA69YaFF9UNRgZ",
  "key5": "3ohTA6EVUEmp6R7n4cEXzMPVMkGkQ9m835Nnbpa4szxDyySUPvhf6kVvpwk3RJwhRzVjJbBgeRDd7we2n2cpw4aR",
  "key6": "r23x8NygQfs95qWnEEo769yrf363zkiGKtMG7iYAvgGuvfa1AkXarWwwy5gqbPPw1nSPPVXHph2GyLuGef3Ryf2",
  "key7": "5hZBtFHnwjqwMivsntqUpTKtvQsR58zkFo2Bbdd8is3nQP76VjJWpB6ueuLbgLoYSD9KYw8pJcLR5pBacizeceGt",
  "key8": "32cVT9GCZtnoziP47Rc47BgkXUU57119zKXW9s4vGqaHbTwNXNbyTSTsxnGh9hpZ6QppwXpxNSDmrwXRwDRkKAMt",
  "key9": "5St2gSvRxz2BUZ1MDTC1YjP1Mp8FNqLLy2RFF8qKNjYe7MAxRGUd6CTJTpUjZvMhkzBR5SR2kCmbw71YnBtjbVwf",
  "key10": "Ddf4A32MGat8c3K17HLkmV2A7mPEYSswnpNdwZhzg3ANSrA96JUka5eh4M4mYH62m1G9Z16LLnBcjqhfYrGDsWy",
  "key11": "5aq8WkoipvwMdyapF8R5JQKrctUGH8hPh9vf6Gbih96JNe2xmXgnBtqUsrGvMoPjM5EQeaNJ37x3XUvaGKQZ3A2a",
  "key12": "2yK5iVqLdxvGsRiDuCyLZuMge2dRbmTDarA6R3seRv5cM8MEK9ViCQ3t9TqdPfwHD2F5Mc6TuxLtiBh4MaV8XmAu",
  "key13": "2vt8VKKTpnLPL9nKXW6sP9CGqks1ec9Y2N7THZHp5ceBYUhPgxpisaz4yrdNdYraE6iBwhPJEKtjekUkVH7dWrgu",
  "key14": "3hZ3iT49hxhLgVpcudB6Q2yFuLfLp8X4v2NSsP29HxB42JJsryNd6ZVGqLBQqNEjs2sU8TnZDtFTyPRG9iBj1GV3",
  "key15": "3Nz81YRvE8qAeZb6tpzCvW22GznNd4p1TiYmE4FwTHaLKTdiwDamRqHFBcuHnh5icpwSzaaggAG3SpTYxkaRrULa",
  "key16": "3EoynDFFvGCuSSQWUUHTGoy3khVwnwLsqp6NjKxvgoaUPevr32SpHEWhbktvCZjzUM3S6noz5o49UrTXazNZBGBP",
  "key17": "23KS8ncm7gz3dWSyEp2ug1T9fwMHLyUwGVYdoPDC8Pw9Av6spkjzJpeiX5kNdjwLZSmpFv7sHsVMkmwyR5N1nGAj",
  "key18": "4K3Gs5N59cGKMgL4UgSBkKhwd8Re38yCmQyu5bhroQmQ7MqTaquiDGyjUGxUUocbxCFSpNCQVrLUiNTvkx6hsVWX",
  "key19": "5eXwkuyaBqmfLeB2cxawyXNZutXQ7WBM4nZWfyEifa8AHZLyva68TUmYBAV4JBvBvVFXhi21qsJZj2hJf3n3tugy",
  "key20": "5uUBixGnBjsfxqrcpcE71HkRFdKC9M153rgds5ZPiYjCZrxKUpZuTtFLinX8UL5xtUCjvK6rNjmfi85DbUHLe5fh",
  "key21": "2FzX35rNhoxyoyAYU5StEnQYzGvFGsmTLk2uSTBk8bAyY5w2XfaucEyiRS1QaTDo32CTHt1P35y57Q4Gin9Y7cN",
  "key22": "5g6mJZLs9peDtAp8X2WfRsz4JEa7tKPgmLbMkHALWu8WfqnPC9iV2UiTMDRjbcmjktyfCnys2MxB6ZjLdeFGRe5y",
  "key23": "5RaRoWpwyFGLFQojc2WdUfGdxZvTGLPHJo3bbYYsPc5tcY6B8zcqBcivo5Ppg26D46fzZx2P8uFrGV5sJA9tfXNM",
  "key24": "2rGMHvMUygepXe1sXyELkrfJN9h7wR7gWC5zTt2Q7EYqvsEFH694mYdAXANuWgJN88Kj99typBD643TxgSdcs3KW",
  "key25": "2EDuQNyMK9RmqarEnqtM4AsRNfU5ZJ4f7Ra4twQyPUY92hdZ2d3fNbrSqktBr16yYwwxq3xH6Dju19XLAgL2b6eV",
  "key26": "C22b5PSxrwjzwcSRZnvNUMeh84gzXoShuGzLHsZdRoE65XboNVJkc1wzoFXFTgK56jyBeGpJ5Ty73KZN5nH4B2A",
  "key27": "3Q7sPfgNxAdoBsEu5j2eqT1NRnbNS4uxqhZcUkHvEcmzqvh23BQT1mFzmamNUh2oKcrY7o23eD1TRNAWFYpjnBUR",
  "key28": "4vM7ZUqG5Ko8hxXFU444WCScBLTjBbZoCUiDREBnuhSUouwGuwtxaUGmA2siyR9ReXyE3nreAWkajmXhyLJVJU8N",
  "key29": "3Ux4cH2aY2FQGPbdZFsJ9PxBXNtghXcuKSWSiLEbDpCMdVYanyeSkZDsWJHuw21Pig9ATYj27BFiy4iKSxmi6iaU",
  "key30": "47SxX3Uhm9aRkFt5u2Bav2bNqvwvKXEWj9UT5G8895oHTGn1eP4PbKgkBpGMx1YHTP6b3dVANzps5fZTzHJFyrmx",
  "key31": "4aRJPXBrbq4yj827rUfQgVto6UnHP9bbnoa5toEDZjqxsdY347EPh11Ed18jkpYniKLZHFyCzT9GEgScdApBagyg",
  "key32": "5VrdShTZA4QEJYi9K1F3v6UN9r2WUYWa3xXiNxz9jghmebipVsNXY16TXixWGijS9RpLH2afuyifopEZgKmSKN4s",
  "key33": "k18fuvASQQ5SzQBubaWjQFXvqHHnGf9mHPAieECiitNx3n4L3vx1TgcXmpGj2MJUXtZw7hA7s1GjXX4dw4dTQ1G",
  "key34": "bs5oPXzUGtikyQZWH5edaLupatxgsZR7gmTBACHAhqYiE8cxpjWZBsPLUffrYaVTEQ7UpMVQWpNaz43A4fJf8ph",
  "key35": "4xSitb651QjqgYEYpeRk97cR3jA1MpsD6FgzqN86LjGtkqDNuZQeKhNtHioXHQsuxRzpZLUvCpK7QMQ5vU1CAcuc",
  "key36": "4VAXMzzecWXWr7jHzzykPakBr4sy3tMPvKZtS9hoBEXy92mSMAEfbbByioWwYdebmJTkAsCT869q1eZGxsCsK3Qi",
  "key37": "43XFjm9dNFkbChVhrpQQw9rKogyZC4dX3h5TugnDNsDiAw7FtnTv5XnNdC59uwLQyTwoT1hSKYsVFMA8MMd9Fj8i",
  "key38": "3EGCkTLWBzL6E2fbdN8uRoGNSARtukEYQriLxnsCm9iSxzrQVy353HPPxhn3NqizKQ6HtYpP2EJyjQZ1cDDfSCQ2",
  "key39": "2cy3PC5ybVE5kkWPBpyTfNwma84Y9VQk1GwzMTVfPFhCkkLtPSrUu9bSjW7Vbrp3hcFadNweYgvAGLPh5B6XnSrw",
  "key40": "4MCEubVaqdFPpv5sD6NYuHeDF11iTpExD3sqQ1jFmWbWyvtn5AMVS2Wy3uz2KYEbyxayGiGNfRqcK6aaWdTgDPAC"
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
