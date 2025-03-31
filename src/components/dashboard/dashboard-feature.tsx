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
    "3m5y1dxnVi47hyvDo23qC5xGWH4oAQGQBGntkhAJr11u3XwQWBQu5iaCn9hhZVBXPpT163pcD4VNX241twRNwcCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yt6LeKsECbcULNxumBbDCS7HMnN5AKiHBPuoVRNTLhaPvcAanSbrCZztYeKCQZ3XP5mNGMyMvJmQCREMngK4iqF",
  "key1": "2nKt9BfQi9WNonPYtfGGgfpJVtUWAgVDYJvHUS6nrBLVeaG1KjdofsmcbyiTVbi7HjdkHiSuxZ3EYMSAVroXrG7G",
  "key2": "83QjBPxjtjWuwMGKWnuWFAcqJZfEbb5uuWqeMvZ4LCSK1rMXTt2UqGe8cUBQm8NqveAs25Zt9uarYNu9CGhTFb1",
  "key3": "4ZtgZsRsxE5ahfzPV9LZZbqzPzJGR1Ay6Hzr94yZZ5Znik5daXA7jh1ChEwSqStJ5bntR5VXyzqPJ8q2z6YqJUYR",
  "key4": "5JgnDFWKvV9wzzSRfcbgX3Nn13b3vSNGaz3xuJbRiLTQ4N8dkdkH2WVGT69CQock5wg5M3H3LSSQiVY35VN7iYLp",
  "key5": "Sm6MGHXtVBHYhqzYSLCoo4D4JBgXXU2EWdfFW59fJaxoCLhPKKwiKf92LzaxNucBdQE5WDgLBF3pCeiQSKL1eGF",
  "key6": "64CxgP464mpYXH1xajpiBZmsvFbAbXQR22kGZtcNtYtWeToVv6KVLhUbohhiykaKE6RAX6BiRSZS7tAG1Z5DzWT9",
  "key7": "4Ae7N9dhFvmXARwijVwyiJff79qdyhBstQY7HQ8QLGDAQgrhcWJiLA5vPLFAGuXTSUYVrxxnDHoNeDvrFVKg3CYC",
  "key8": "4HPynMNejdGFs5rkHn9pqtgSzSJuMvRy9SKqW8ZnBNa7MpFkVKDJ4F3Z4a6B2ESff9ivsGtuGeiV8yB1RFhseW91",
  "key9": "4JnJXTrLxjUd9ZnupBwWnWM2k3FVRq8fHzUQ4wY9tHRq4eFNYSkxDiNzH2ejf8Af2zWYhmeBrtVipPfJyuHWUKx7",
  "key10": "3842HsXy4jGbCh71RYGJyTMsHVdWSbwJKPM17WFvvpDNKvMPbLPHc6xdDVXF8KykwpJHmLyefsuNi9GmtpCX1rGD",
  "key11": "mVmaoxcwbc1SvC38Jn2hT72afcFW5VHkzMyQ6iKAQkudanp4qjbcF746quFRysFrfszzvu9wNFvJNTfrLWuZz4w",
  "key12": "36fwM9sp29jfAGHdi6qNxnqvdJuVehPA7EnpxNf8pTwULuzE2DRdUjjMsNbRo5FxWSoUcunuyvUrHKEDCogTEC4v",
  "key13": "V5t7K76cQsU17RsJJCh8kFxWUjqG6dBFM6VUxDukPAbKyjU3X1pnizqH1nNqzBrv4NsyVvFeSuFCEejBtKo7v91",
  "key14": "4CcJZCYCrNYLgKaBMA9GJUr8G6Q2QKy2JdHnjGtKuivRggtpiY7qSwHHUoPRMRUtfkTQjCHMTw36vNF92eCtadbF",
  "key15": "55m7PHMxg8xWqG9A8qNFGLaUTquuDaBktrNy1LBWh2xix5mkDGcVCFAnmGGrhEiVBKiN5XhWzy5HtT6FKLhB7Zgu",
  "key16": "2qMjnvpDjvqhVX7iGwTS7m7ZmU5cUf6swyNRic5tZMBm56jLmLESjzjGezdy2nYuxSPL7TKTPyQqiZ4KCuqi7DXB",
  "key17": "aXpHi6pbSp7k6SkEr9ds3avPtVEKe9t4tSTpyGAk1ULeN36MAGi56hkzut4H8JvC54Nn9YbbsgviAmsfJce7e4V",
  "key18": "2MWsm3PKPQqMEt8WdJQYH95M7ax7B3nfctPSGsEKD5QaeQUsfKt38A19RSJisn62oqCdMvxMGVCEGCbfP8xHseKw",
  "key19": "5nemXwXTiMPw1j2kwXfX36UCRt4fNjSL8jVmVYFiDQemgMauphbsXA2dyKyaJFu9N9sdY8PGnyJrmz2fhMxCETAh",
  "key20": "Adt2DfDXPq1qrqS3qV2y3PD5qN69HqXeEDuTBted4HRkG2RoR6rHJgmtp3LhmvjVeZLShkPvvgAEiucZFhr6hV3",
  "key21": "5mGDFdLcvZmnQ6uFDDvrUyugRKeNww7aJSpypFqGWggqLugxGt2KQsVkfGvY27kvpeKaJVZvotm7Afjm1n1LcQ74",
  "key22": "2uMhHR8uHiwqgaWLsCacrAvv5TCAXKwopQC2oNExHGJXqWpT8QytJQfLdmdpGc9Yxg4jScfXPXdjoT1gdmFEFrVp",
  "key23": "5FQcoQX7MrvcLXZtbGWM8mc1epVvh7HDDWjGXvUe7jLxakbBfEbgaecjonUASpTyQvivxLjT9k1mNBvb65MNX6A8",
  "key24": "22gHDtjXgpNTeH33uUbs2GbZq6cUgaqR3jt1ACyxAuNDDCDocYhVWwMKCfNHjn2qjPPDfy5Y71f7xVs9j9mHpUz6",
  "key25": "3ttcgzoPmxh9W5jSrt2ar1YVX2j5j4nnfMngiKWL3vht7RzbzriJ2z2nQSgmiU8sPyXMNPUCGej6DTuCrGZttk4h",
  "key26": "CJPtHGihRxGCb38TtggBGhp5ELknr3PDP38LgAh1fLzyNpZXfafyEob3QANfH87jR4ZDhDHifKbAm7GyRj8KEME",
  "key27": "5vG4mPxEAFdUiLebriPVPkD2FyvUWFraosReSjSNCU6uiNG9ziozyoubbvz3T23gkWZxd9snJj41AS3qwWJVTj7q",
  "key28": "4hMUazpvUyMvSCmtvdPVQurMLTnQEE1wc6Gc5ap3Di7ggoW7TUxhCXy1434dxLcZxhpDJFoLhVwsccDfKSDZRodA",
  "key29": "565dDjz3bbhPXHtuDBsCLqPagpSSg2hHuSYiRsxsnwMh7nhkyi4GHt98qRvworoYA88WG8UCpeWG6MY1eva7jxAj",
  "key30": "XcBSU5jZXynpD3G7SeZjr5hB62g7qurBuzbV3NAHxqdBDczrHQeU1KJXdcq89zf8Q7CKMaT4BmArJkGKZcYWXZG",
  "key31": "41TEriXHC9fAPegrcYwhc8GZKfFgFwsWXTLs8etmQDWQ3HuEsRiVaJaDHqnHAM5HJZvwLpg1MiLpN5QZnBEjSDzf",
  "key32": "2pUYkXCX2PU5koWuvCRb1ETF1UwCZapJN9xBYkUFT6jWiywwQTTpcGLmEUxvsUksUnZKdfcK5iobE3Kw4nxJg3EA",
  "key33": "7NBiZBZwuwMvLqu3CcgzBoXjKbc8qoyzB7bHjcAn7fQhzaq2NCwLtDGasYY7xVddnyGd1ZpwiSrFWAfDXvBqTSZ",
  "key34": "2Js6dm7CB4hdF1QZhxU2NWm9QQieuzfLYDki1GzrwMoHzwMPNtXKBsnaBuwZn3fPYzrqECk7zXY5EiAETMBtL4HM",
  "key35": "4ih71ujqYy7J7kujZxyvG9TC9WACy88TCuUEm8aF9XGzzhxM5nGpfCv7nG5KseTBNWzcyVMRU9RKegCXobEyrUbQ",
  "key36": "2yLixDKuSTRgtctqdVYk6YXTcPHT6Amt6rgVSgzhnkq68eHmhtpsXcXmib8ACnAC41n8S7u49ZdhRpZRt2m5bXfL",
  "key37": "2Zv9dsS1FPmdvjqLaFvuFNAPPjYtoi1mExYY5ibMAwGL2DD7kcoNYia941ek1M99uE46dPQXuDR9p7phM3rN667i",
  "key38": "4Jr5M5HU2ahmuw5KqLJZUKxkfNsE984p4NbkKmHhBgjr7WnRj8sX4EYe7aTt2BRtBmHegUpd3PdQ5QbmuQJp4547",
  "key39": "4sDZKJxpHbUHQVFMr8PJUcwtBHF3BpCzdtRhMLcKJAtVV4qu7KNx1wztr5MQpuTKHG2ZerGXmdj1eEsFxiToLRPT",
  "key40": "36ZsWfZa1CBJshQvU3uvMfEr3USyLsZKmhdAkFmJMEeT6QsNV3Mq2fJtGaTrgLrwkXmMkjTQuzidpj9khrGRyRQv",
  "key41": "zTNfi67wU9JoFT4UkxjDhF6CySSH5Xv2Jf1Ng1tMtReECcvjuJdZdu6cZAPRvdCSqdb6SdYcwjVJ7Uk1a56TnEU",
  "key42": "asoxkcwEsqvjygN84nAwohMykUFPMPFyiLrpnChdaTjeEHkLd3r8cKZvJJvKHcjb9r8JkfmiPTBSamAsbBZbavb",
  "key43": "5mdcCBXPU2Rv1wZH9zy18gZ3fLfaNQT2ZRYHEKLx5HxFnLqQ4LXd64gHurdXykaUFuGirvVE7DVDirb2VPWZjdXQ",
  "key44": "3WjbRQ9C31Zgu4anrMkV61vEqx6ATqtom9JAx9jMc9UXePDe1dtz5N4PoKz5S7JWhpL6y8PdkgcofNVpdDA9FyG7",
  "key45": "2EhFFNnVFiMgtMSmmNpPoW8ZRNW1PBJDWp9YqbHgCzCdW13bacFiijf9sr6eBM1xLBR9b7AQ6DzQqwcM6TeVz4RM",
  "key46": "1XhsMfshkWr4qoP2jCjRxVGfCVikEuFpMPJxoyBqp5HRrxCELXtbGUd7J1T2NBBdNQfnWRCsEZmt3aytvgsCb8d"
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
