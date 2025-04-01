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
    "TT9fXgp5WFQBXUHdt6sLnboUj8cZKYJqYDdB4qun5ip8KtG1K8z32dwewb9tgAo7KLdcnhgmxkcgUZabdafsq8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y4ZxAAmTUJWJmyVfQaUftAJXV2AAUx3Phb9hPcSMQpHmDtr515euuqkxF7C3gLvoi31BqZuJGVoyWgcmvK9XWTC",
  "key1": "4B2hPKzegRBqHNnUQRg8goZb4TAdzSK1JWSESRNQrhjSf9hRd7QtQnaeCBSJ5dJPaXgQwQaFZMncaZZhQF4g8HBK",
  "key2": "2tVzfLzuYNpb7aUPE8KW8QQWSHSHDESv3yHoFHAsk5FtZxgHb3JhduZv1VEbKRS7Nfpi7hfzH4rRh2Kwrs5brzo9",
  "key3": "3Wn96NjSCBBfxCHGTJB7tDkTeDVU3JnqT3FsdqLRDqmPyC1mtbzDkQe4UUEhzRkiei7qvrT51ZB3D9J47mTWHxgq",
  "key4": "2CeM56EXDUcozBYju1P3ihUhnkMhuYYzibrF1CSZwhr3YbbNeAdMJDw5jubQ5RADXWToY5A8ftijbMEvWT9sm1H4",
  "key5": "2W4B89nVNWJGp3kKmX8M3Bo2bmSDPRjEf3MaBYd9Az2khRU78m7QRBE6BrCzYp82V2uLVvewC4DmosjgaaVfHBb8",
  "key6": "3mJnEH77Y78MiDhi1BYEb11hRDwjHxe3pdnY3szd8aupCtEDdTFF9nwKRgGYKqJvu5RWSrHWSFf7XXZkkw6GMRHL",
  "key7": "s3cMyyZAXBFXeL7YSU4rhH5neXFCZUHZBZ9haWUDMrm6dvK18TTbv5kTyVpGTyDkvL24cjNdZQ5kdjWfb9hjpti",
  "key8": "5Xp6HfgBdFtftgkBgACzQkbe4BYNX5vw3wpiUFsC17T41P5Z5PbW73Ddd6ZYVroFPYKqCeEfKDjKt14dP9zkrhuK",
  "key9": "5T1kxKUGXgTFCZp61r2KkyXuhMjgU579RVDfdAfEQRsJkypUPnWkpUR9WmwqZ8LWiTY9AbLyGis8rhdGTR3CzPxW",
  "key10": "2rU1x8ZPg1v7byf3r9timEJC2JTRpPFWZk451uj8gNQUQzcvgdGfjioVK5MM4EiW7e3P26Ax5FTAJABv9x2DRWV8",
  "key11": "5iXy9n8VDh7rExbs4ndh4FkeLC4LgEahU3pKeCQx1hJcKV7v7UTYNNYRGVQrpHunRAFCf9syw7mpRVN3EgqNeu6N",
  "key12": "5nDM5a3Yp4pQTaNmdNE11smXuxjhZJUGuKxZxjALfic1byRHQMXMgvgB62jHN3ekNDhbQzz8TP6K3NFMisi3kpS3",
  "key13": "2tyYAYgS7b8Lv8QGyjgdfem3E9pcAwbqiX3L5HiQVexH98AUdgvkjvN5EWQdE3YuDkjgajoUW7AsmpeUtfRjekY3",
  "key14": "4YSLKTLKjdLnnTabx4cYCaoZXFryVDsa7fbGxVpnyZeyMbAvvTaNehEkMeofEMmwqr23xiVNFAY7UBeCfzjPLEbK",
  "key15": "42TciGpiQ7J9XBxFDrfqNieQXnjNjkYDFdazgWqRoGL2qiaW7aMep8qU7zq9nSafGekLVTpadoDjoW8XDdGQc6gW",
  "key16": "jRoUAHz1MNEcriuRv1sAPW48XwSLiMadRqRcrQRQ6TY1gj1Vv4c5T6WfKKMNML7vBEND9Qus7Jryq9UcG3gPuiG",
  "key17": "iNeq4EF1dLRdkkNA9g8GiyaZk5aGdxqbvXThzKXhLVSedi627YGwTSxFd5rzCugJ47cL3Jc8ZD5R1mLuxXcZKFu",
  "key18": "1fnEbeWNq4M6wCrVmHiYQdhGsVoygu2mygKtHzvUkKCExand8Wu34HRobzrscoXCeXigVsfmzu9RdyjmXjVoS86",
  "key19": "4CoZ8vTHrzjVitbitY2isHJtvYAon56JyNH3ar9UXiiMW72srbBQDNdBDmG9AuyPi95hULpm6oTWr7nQeqwWWpAX",
  "key20": "2gw5E2BbeDmb8TZg1R1pACimjd3B9YUAAFLuQJV4bokpsMbSGS5iwhF3ggvV9JdQbbrAs8cKLmEZnB9KUCNaMrVK",
  "key21": "29NBPiPmzms3ZcjBzffba5bsu3kEajujMgbZtFxrjSAusAPgzVRKuz4aErkDx1gWQBaU2KZUNKEypqEdFbYgJsvR",
  "key22": "5v5nRS4MUEj6RV5qWPBCYxv36F5DBiXURW3jic61BBftvmJyphLTwrB9fhzyFSYRV3Hv3fdQ6Sgw89coKUfgNct4",
  "key23": "5H83u1nMuXpRNqRTnictqThG4KrTDZsdAq3E3cHLEE4etEiYPkU2JYTKhy3SyZrK9gnh65XzdHe5RKhXdTixJL9b",
  "key24": "5yj48kXrrFGb2TBNxGzyZwayXEroH37HfQHTBYhYCopUZwijZfvZHu7xg7ae26Bqos2H9B6rwLRUjfrtkYqkQNmC",
  "key25": "3sRtmaApqSyryzYWiABd1YCHWf1ijPJDqEkd873UF12WZf7zMBaGse1fxSLxJgjLXLkp3DGqJL3xQxFy4dMFYczc",
  "key26": "3ZpQS8eFGSotCTUydShPKgAoEerxCyJH7CVndooPaZUmGS4YDs7KuY3kTryXERKykgZKg7aZJrCbFr74AkXxbL3F",
  "key27": "3kmV4FfSczRJwp23xL5eQL9YCSHzWnWZgH3VQLj6AeobEJru8BSMxwoZRQtiyQGkZ7UcWGfWrsBjeDmi71MkLzG",
  "key28": "qHLYWmZ4pX7sXGhRHSp3qMHhzG95UfApq8W6mb8nu3GtqGUjgT5XXg9z4RTsaBzSNnrFBkNXYTDN3iw4SVbHEC2",
  "key29": "xSeP3HjExN9WeCdVzo5ea49PeZHTrykjPKwCgo7uKEijzLP8oFjZsRVXRAq4DWR1NRXjXdYvN5PrEja4VHsby5Z",
  "key30": "LCGmxiwcpPo5piEn4tVbStg2SYp19m9TKxiDgEZfKwxK7CGa9dXyokyUzt8cMs4368FCfzeZNgUsE2FiKzyDQjR",
  "key31": "5NrRySTs9RXzd2mdcVxGv9rxwkVgzjy7netKCjt2HHqjwMvhxdHWDt8qMoHAJWCdqR4wHqU5KoJhQPHfA47keFGC",
  "key32": "vXTmFWDydkmG6Utnow8wgp3mdJF8SpVgMnQcrGyf8zKM8vwdAQJ3BnUTYkRawdJkJQ4FKKBwYK2ckcZDPLZvrNR",
  "key33": "4MsoWuoL3iyR6nfBVNfZo99vnEyF3EoGGJW2fzuYqGzP4XTqh5sH1v4x1p3WQzgPCoHRyphPguJwaN7QTj1JtNRa",
  "key34": "3MY6bSwWhcCVZDgr9PWiTJtiVc3kRYWPVGvgawHYkanAUCkYdkLtN7Ae8o8SH2GVRnyWyKZ5gNGdrvVd35H9543z",
  "key35": "3P1fffodhNWax3VNPvQabiQyFa1jfpmo6UeVKM3GhkPqCvWLCErXgTbUmrCgfa54JXk48XRttYk24Jxw8TGYnsGj"
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
