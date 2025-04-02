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
    "5bybCTu63ir4qvLKS7e6QBSag97yQqGc83Bq52gUgQY5kJgV6Xktr6VmvHB4QiBtRwB1PR4sxrtzkCoa1sFQB3bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j2RRtDYHdc9HQ21ZvDfQdJ2pBAsTDDGDXK63BAEXDex3V4fqroq9MgZczSyBvpxkN9jGejeK1bKqCNUkP1JXAP3",
  "key1": "o4yMF9WDoAuetv44oGfTEbgJ98Tk6rNbaF2mMuvDtnzsBSpp1YRooHtvEFDRMLT6iCL3fx6AJTGjABLMutwihea",
  "key2": "5ne6p49SqePkvyf68UnGv36yrMHgNDSGSj4nfft7qzoaXdkkBLx1G7bnJnrYLYvQsVrBhBGBK8htoVJqSTCjuE7L",
  "key3": "4nDGvyYtFtR2ZRK7dYKh15VdaausfPoSHwfrqMQDS5M21CA4meNty1GNKieUW97Mhpv9ZimuP863uXnw234h7Ci1",
  "key4": "5wYQN1wpfRD3Ygxji2B9aK6Mp4UctpMLeXUV4Gyinx6Luu9RXfaQz2DtdCVzmN7BCnrvrWnFjykf9CHxQ3vTcUge",
  "key5": "XNiGZ8ccsBm1KaBjUsk4Yix59GWPdDXXCELQWnE9D3y6hLDd3ezBgbJyDm4VQHarmQ9C6ksD2YApBHCHhVyNce3",
  "key6": "3Cbwcsbbzp9kdcxwnhngxSx8KutpaaBtECzStEsj23h2QBWBLYiRWVmHFDBRsM5xAY3n4gRLcmChe8wBfYzShHSy",
  "key7": "3MWmnv26MTErSMwRCBxtwTxjzpE8LCBkUyWsZavbp6fcD6YZXi1fAkYHYGufxRUYdsoXMvid1c7gaLCYaWozT6zv",
  "key8": "2aqPSnuFSVa2MdHbhEbias7wwk3Y3BcWooP2Ud2PSpS2SkbgzpLwZzdnQCG3uzG3TPvag7tD3DQqSez49F9YYSBe",
  "key9": "3vhbje6nAbVszRPkT34EfaYJQVWFGW3C1piMNMpxZsWYzfbExV34gc6St87Haztzy8qPZP33vSUgNJSGYiGnGt6J",
  "key10": "PXvA8TvFjt1YrGi5ckb84pY9XZU4pwD1GCvZfYxonmWVLn4jd2NUcC5TLKyB1SiBYZHYaKt1qchqjMEy3UZvYEG",
  "key11": "4iw9mVLUZH1qQn2jSG5DypaFPbrKjqWC2Q7DCwy4PGZbqusampkuWX7rSr6ckH2kSNcAsNgeon1hqBEVPKYEkXaU",
  "key12": "5xtCDqc9tgHjz5uoSSGqDgLBetGW1oy9swDpXGhCwfvnfjxRx52YgrPTHpWJNvSYBhGQvHzaDxr9Lb2gWXUp6e4Q",
  "key13": "59UUXWwgHjWR8475pqdbQNEBb8zkGQmwXop9bB8jsf2YJu4EyvL1pyM4F56GZL2FYsJJjuRCX97e9SmE4b5AXvqt",
  "key14": "kwbnYfZKMoqkYqAsTDxBcdz4wiNvpcmdNfiYsEQwsMBYZbj5xYyU1RbgpvimzY2cqxBtWuxjPZNLatfiVwNWJDq",
  "key15": "yxwvcHHjWpxWop77KXKb4fMiPQmb7W17ZSJKbhVP8YoUCrGtGHqzSkDGf8MBvZtoDPkV9azRUfxdVrzCBRZJ6ne",
  "key16": "3uqLPDuNdSU8mnbL9e3b1kNHs7UfuLejM5XopikxgVQkgoC6JGEr39LtuZKyTt9TNox1WkuDwVfwcs12b9SMYszE",
  "key17": "23fzWT2RN8QfPupggQDeDVRa5ABPM8czkQHxJ5LV9WkVwJHRqDdCbRfnxy8sX7A5SVtByRBvhpr5Td7P3AuxyoEi",
  "key18": "2iiKeBcqQhMxuyao1catTqG25qW5cYnDCZa7coSPmb5oAq3m4KPHyVT4CmSP7eVra5uWygPeJxnNreVbzPj8nzJs",
  "key19": "H6oVZfe2RMXYGxKB9DWe9Dk9kZqUUCkyqUWY3M1fyk6UoZqbBU36ZPLMZWmz5LS7BpTHCD17qsSExWmAbBbkktL",
  "key20": "22aHXytcg6bpuWyAgY5mbCWibBVyV2cFiwAcF46Ygxss9C9gf9nUHtxMiyXEERs4cwTNgQNhNm8TXXbPJgrPW1gx",
  "key21": "2HzEdDuYpMNTk9mRr4CdshLMocbSiGN2b3CikscVCvqaPrg2TMMVUufQJRCMoYyS1eGkkZKGurcMU1gdVwT9J1Cn",
  "key22": "5RA9VZYHENJR76mbFjirSkNfQ2n9Y7dU7DwF2gpGksRVWi6FEmg6f8dd5d7PMqrFjstxeoKvpX63GNp4VL2fP52g",
  "key23": "3qYJQPpc773yJsrX31GQG29d3ncBnoTJuzrv7MTbVoFRSAAvuSg9V2KN7ZJZH6MeeFQwJe4mVkvud4YwJyMLVRih",
  "key24": "59gXFLZGXL4kDtg1TTWmud9kjVZbs59hXDH9wkUdiDA8iKTyMGfQ8585tHYHkeBJ6CVaZkQNdckBpZ8j4QUyB6Wr",
  "key25": "5Ew7QwVR1Rjvp1XDmBAobdXkEX2WxM2zsMf7QCHLgQj8kG9mUy5y4yTy73z2FXTvuH494iCrzB4uC8VtZGzEodoE",
  "key26": "4rRzHDxJXGbyaFH63bjseDmK4r8zXpmkLkmEcGLyDphHi2U1e32FPiJGsrBZ5URBRYhfVbpyTXvrHunoC6ky3NxN"
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
