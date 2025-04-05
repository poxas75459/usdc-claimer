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
    "34eD7WYpgPs1TBLZtNx1HTozWws3E3sgxKpgii4hmjrzsyDXMXbXHtYivjX6rjJFGPLrA8buaP47Q4LmL4vvHviS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67kdwECjyy978xv7Eq6tNsKfxzb6JTpHd5rf3zxXsYYRUFkHWfeiUxLM8kajS6BjZCxfd8XoYgV2iW27LWe7AJpN",
  "key1": "64onE7MkJ1Ne2hFhAeYRVbL3GzcJ52tf2gDX649kwJU2KyGdF3VaK9g57mYNkk2CYbb3BRNQ1pxfdEpYRe7XyDkP",
  "key2": "kAew99otihXyMtucU5vhAoMsMzCWhEwbLsNQFDVNVTLMhNEXB4xsMnPD97Y4L4aHrb9xg7L5xm6RCimGSn3Y2Cc",
  "key3": "2aWaXHSwuz1fi81zv56qrUnBhuyoH1bgUEwKqDZA9KtuxbGpWUoGvs81kfHXiZzFTdgdtJUdQDdacukhbG2zKmfm",
  "key4": "2mSxLaRBg3QcR7wd7mKmepwaLv1qwYT7EC2k4hFTNzToZCx7wKhjHychwbJhrvWQUALAYkrebauZGpS8NnCBZvkZ",
  "key5": "2Ny8KWX58Yp5ZJYX5pVQKjpejcRRMzbwdGqUFeHLGKCD1qAA2rUywCeaoDCAQ8iW6PHXi9ynjVSVCnpQHhXKtjHu",
  "key6": "3EUowzjvwYPcDKb8QeL8PfEz5fSgjvv22myycDxogpNctBcfHWeancJhjfAxuNTswFWmCH4CqqwfTKy6rD1bAz6e",
  "key7": "5R6PQREuKnW7ok7CaM2j84dit1bRKKkh5ctdSPNdw5AKmFXKgDV8caV3TJbfiQ3KsBWd3LN4ttihzr5zEmTVhsws",
  "key8": "52mPzAvi34R3fotE6ReFbskUTDHhXQdxjuQRWBfSQb8JKugfkiUTQKn9w9NGAw7Fn4gGtRWfSihCNVqc8T2xjBgq",
  "key9": "64QJH2tFRk2Vx1gS3iZVRAqrNoWmReKQHoe4F5BcgX267cnhFVMqv4xjPnofTcsZHNaL27ybD6jeA1rFpgw5NjZE",
  "key10": "35nQeWvWc2GSDV2JzrCGd5eqhLNzB29NfA1rWeHNJiL38sumNxUvVbvGLcoAarKrryZbEpoJPEWaj1wemJRsdQ5i",
  "key11": "2FLuaj1SAh8MSJzPz6JefEZswxvBcuXg4yDYkfzuyphUXDHVGed2VHwPT2yAybCwv8KCqPdSAAyHVFfDDgDfvi7Z",
  "key12": "58Vs6nvMrsxJANdVKK8y2hVcBA5aj7BFWEdVUi4NpAULB7iPUNCdURnCE4m8UWDbZw3Rty5g1t68Uhryzor6yQPc",
  "key13": "5xTD3aeet4YKdWHdbM8f9bJLn3q7UkLuatU8XgtrLpdSd18weXdRwhJDHMUzZ72oPKLAJNWQVVT8SQTqRwfk1dAf",
  "key14": "38Myajs65tXSN5x2qfjWtjFjpXWAh4uCRccmhoqde7kEUCypg5Mahw81TCX5RsjZsXe14yhaQLjoAp1eJX3gPNWB",
  "key15": "2KhSTdX5tNBdyn5zepZ9Etu99gy6SvFYB844kCDVsG6J3TFkRWxpkUTC5ocAJzD7B4EtF4oc9ghYota13bPcNZaN",
  "key16": "XXA61XZpVGQA1S1UwvuJh7bBExpLMn16pyDfj7Cii555gKMtdmtLRT2HdzCknCejQGXgeYEAGbG8H56GWDYFCV6",
  "key17": "31tPdEvuhS7YDALhdo78SzU7EJDmzgJQxmofK9CkByCvVxnFxsvwEYPjPpqj3yYuuX1wP6pffJHqg4hyHyHWiAK6",
  "key18": "4Qx5n5rPzFYaMCR7bq6LSA9hgTBafxY1XBc2S3Uv2ZnwGfhZxsnwH6Dw1xpEcqo1vUyxp5QhBxR2m75oTvSmiJzP",
  "key19": "4Ynv7BgjSdQKRnB4ffZ9Wgqb4627sn7zHwu3wuA7HDeu9injKgfp38PNrVeJwUHHf8RypJKxQU2jggufLX9FCDjL",
  "key20": "4eD2aZA6XCLFiyyxNguxMkAYxh5xH2sXnbqnoRFB9zV9yqHPRpTgu6J61EaJhBqfsNWdevD2cLogZr5K4H6f7DvB",
  "key21": "5H62ra7HH8N5HbTBKs2L6k4dsxHyPSSiLZW5kkXPQRZZBYqBrw9r6zGyPErcmrWufXz9HwYioMbmN8JXZgV5jPcM",
  "key22": "328FakMLy66Y9CDdZarZ9JtR5YV8sPoN7Nv4x1uizrwmyToMku4UDjFcaLJF8H21p9jYt2fRnkfmuKkzBJLg3Guo",
  "key23": "2j7KbyLxu8S5DudNznzXQiejT9v65rxQz4FnAbyLHBdAdTTGx7uKjpUKNFbra1wfkNTydmhrGGq4em2cicw8AdaW",
  "key24": "5si1ZAqdhq5apSheWhPTATE4uj8V9GKF6bMbL33LEEabMSpU4DZNzfrMnXKmnLebe8LiQQJeAc9ssLcGqkpNcxpE",
  "key25": "3vh7WR4USwJkZCvhmkPSKcPxaM5f5831zEnQpEe6QSBbYpVpLc1zVBsDYUfzzoG6HD37Zh1LgGTHBFnfaYbbSntV",
  "key26": "48A5uo4iuHuKWutCph8wynpMLaMRnNLqtKi76i4R9pvRAzQwaYUNRVBa4gf6XsqSaTMP29ZzB213CVuaQtCdMa5S",
  "key27": "54v48hc5ARe9S7zvvfpnUvox6BZNgyXxvdivyZQnWVNgQ99w7iQdsLzPbeSBvhHAwnJgbXYd3Xmut2FLdQUYRR6Q",
  "key28": "3d2HPw6rcANCdQfAcNj924FsRjmWdRft69sQi1riZ26nXUeK2zDNGSidSUb3Rn34e117PQF3mCQzBG3ZSz7St8W",
  "key29": "1aCKrdzh5PYPP6hzhXGUefaN1YKdbrNCGCrLDtR3AMx7n12HUETWG1SLqZYi7e2prRvmHvXd1wPb4R7TnCsMb5d",
  "key30": "2rKUsq8ZR9tSooTBYyMcAtJkK44Vg15i93XX1T4CtPJBpdv6dPHEEeCs7ssNqSrTKxwArygjNdP9UrdzQG9G8ptp",
  "key31": "YbeeG9JD5Dd8Ywvejidrpv6KJV94sTBCvLyCmzK6Kdgc2xsKTz29hhzdjNAtWS9T2piuRW3m9vEe142fHWRcZG3",
  "key32": "2vnDj7Hr8tadtA7NBxABuyZdPtMrAnmrBH32nAf7JmaPFtYqactSbECtocynxmwS8Up6r3kdbFqiN9AoSo1t2ME5"
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
