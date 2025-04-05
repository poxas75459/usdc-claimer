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
    "38QHBE7jpa5PAo1Lkgqvcr9gcXvsELhgskCP4cNj8rWxusfAfzP8fAfK6nuMvTrGL4LHqCj4j3RsWkPpw6hqDGpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i7CwCzeAwuZkEted12roH14ofgMTKGUxGBZ1rEk1vhX3HTyZsqW5cHJGC6BKJCcSLChebTu4HWZtr5CkHMoxHm1",
  "key1": "4UDtaQXmCF2ovqtNoRhGMsbVxPYC3vL1VqctWDD8ewFiHuYbKfY2Yj24ZUg7Qq74MGHH9AP496P9tYS5qPyTAbaR",
  "key2": "4QYh2csbZgLGu9L8fUscdirXKdmJDvSUVUGrWspWxXcumGMZpdBrLAgQcAejeSkPgnsAVJQeXjDUZZmQrsih4pkS",
  "key3": "4bq3Y6mFksufwj5pmsv9G3NyEj7iHoEn2ugcLSWVSsAFNZuW6gaPXBNAD7uhUTgDqRYMwxpwjJ7kEgpY6aTUo6Fj",
  "key4": "5MNRksMU7bfYK1S64p9aUAG6AfogiH2MMXsc8AyFYCR71pxmuS7swyDmgNWfSZXWLT9weeed4Mg3yVD6bTVcBYMw",
  "key5": "37DSLNBJPehjtMdXhHmHKQhQY6xZ4y34Kfz3PRZgAiiCAMtuXWRdCLJwhj7okvesf7of8ULXqzqX3fkXnvEEzUw6",
  "key6": "36bzu3gh7CE79BQR5mJE6TjPQKsymayGt7tmggQ1iFzZptDgEw22TYqbWsT3WHb561G8zpizMjLD6YSJcsYgYY7t",
  "key7": "2eLYY7r58bFpZnn6EGKdpX4PK1tjFLUvAhdr23QL9DJC2tymTyhLLP8QVivm25mGLqdjQE93FcTRtfeLtHBaXD7w",
  "key8": "4ecjBcJy7JabJL3AufvQXabaKs92yqeqCPHkyU9HUDpiB7cPLUpk3djJxFxFH1YWmE11iSj5gu5SxhBhrhdm7rPy",
  "key9": "5yfKrVuosTjxupkto8FaDb8LfG4T8kr3VTnrBWn4D83xY3Mv4NKBmDxHwhpj61X8wVJeunwujodu5spU2sDsiskS",
  "key10": "4wLaxZgChqRCxERfr1JEnHY681TJgqrec7ybYz797AFAFcRf7MwPPxJFYZ9QK6Sk1nJLwkpALyu8sshqiUwT1dNf",
  "key11": "4eq9wBErbLf6zTYZVaM1nMkVWHaYs9Kp7t6yzW26jz3FfUJXY734uFqp5qezEkzapCgKEc4gFVmhGkxZ6REc1DqL",
  "key12": "zvaii3yUCHND2YQbxjWrigxJFfujabYuFdizJKU5CdaiNQGKRYE2QgwTstc4kgjdBpSfYHzSy24tmyKc4AZvbZy",
  "key13": "2C39WzoWK83iBQCa4YwdfiY31tYbwgabsHjNAqhKrx317Gxxh8J6pEQGwELhfrYKM4T5AHL6HtSeUvxE6Ars8zzb",
  "key14": "3fbNxK9HqtooJ6uVMwpMCjTKGYHjhYywKwoVnSgEeFqirdVWfBRs5vt3mCYqb8YLfeuinv3Ktpny4GHYQKQQpJ84",
  "key15": "4xXDWGmfHFjhpbSVQtqYL3XRbpEfZJZvYMZbdykjaCn84SzN7YPcpbt32LxqbbmEFmnZ4DHfiQQ8mNbXfmDpkfZD",
  "key16": "4oAV6YrNRH1TctkMsFLQ768nygtvtCfVkcQnMcAP8DnYXjAhLDVXAt9gyE1Ztfe6GCgMytBQim1innKLgVzGwefT",
  "key17": "2JLSigyiqaz4E2eoTHW5N84BVSqfDKPAdjtY4sZEABWZkym5JV74pN1E51gGGVM1V45MHfFkZKy8vtAomCDzWmHv",
  "key18": "4DYPsa43pTYpaTdvVeazWqfuzzkkw2rnSos3yFBhSJRrukd3rwnLx91sfRW5Rz6khf7jB96CqkT1RnpZLmAQ2Wkz",
  "key19": "5LtYntpuqeiWbhC2ugZgHVwDrJsqAoZAeYQzsd3Rg3ThJXRiyuVdxXt1KQmN9TbCjppG61A1uEr3nXGpNcWqg68J",
  "key20": "5adY5i64Xeocf2PjEBEgwpB1P8UdYSP5UEnCZMmD4tGJHEp4wX2a2He7zGgkxDLDhAnvWFGUByiTKrMDJuEE3Vbr",
  "key21": "3hPdagua7FEtyRHz8MkYxPGeTVmJQ21UH5cHTv5445TTGWQgTbwgZMA9RmQ68nXRc1N9Y4uxhu2M5hCTxqz5RpSg",
  "key22": "5KwfWw2w4gPCk5Cq6SQs9emtv9qBtj7HghtLYzNBy47VBXR76cDH6wYkPcmQk8cNkXX8i1f1AD17cztRRbaihKV1",
  "key23": "4RgsBFrUc9Y7owHGf4qEignuBY6ZRBJVeemYvbhYG6uaxEaWzu28qB1zqy5Ws1LwFxmzBuZXVCPN9f8JGAowsf4N",
  "key24": "621uEP15VBmoHB6AmbZ1kwBKRaditUXEUiCmvw7j7L6zxNxdcwF5akcHHTHWcBiYuBtSErPGhZVNuzW6GZCcz7XH"
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
