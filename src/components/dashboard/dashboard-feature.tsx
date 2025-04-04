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
    "2Xz2bfiq9S9LCDZEaxxF6jWPNxMKSmS5eDzFrkZG56NnPRKgfVVEJFSDHZyopVNtQ6u3WcbfiW3gjqZ8czaTBmJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22DyqGrRt5RT6XT1hp4BCkCxzgnKgmvjqQZKvrXRrMPvgRQyZ8d8JaCmaVbPMPuJz89iojD9Y8QkyTUyM2n3fdk9",
  "key1": "4zwY3Fqv6WDWT3Ktu6M5LVCTHPEPs66JJhfMw8TwFXozfqkYGcDKGpuUhxwvhzGcJjRTiKE4NkXVPLiXXGGvefPD",
  "key2": "4r1MPDiUqnY5Xr8skzR182LekqqLBSvWmwHd5za1WyKXPzUSsJbTASHDwEjZgk3ftPXPBppboZDej1a2V2cbT4Hd",
  "key3": "5VV4yAV6fuCT8Vtu6QbGWgbN58XYjEReZxgQtcjEnZYPZgyAdeGnd1DCLTX7TNk3xDfDF4qgCEo17QJ4b7kwGg5",
  "key4": "4tVaF6gQ2PoW513MB3f8rfcvuK3nuVW9YrPpvAnuVKE5widP3zS6XP6CxLaQb7TeTcoAZb85P3xc7ha2fXGQr2kF",
  "key5": "5adLLYDFjs1Nr2ABCbcbpLPRNJJFpTo4AApPw3ASzgBs6K7qGCQyUj81kmRv7RfgrU9FPs5eoNKPbSaSYPvMgdb4",
  "key6": "39HtNrRrTnqPiH4j3b7hngB6RQSeR26UW2ud1KXNYHqjJoCBhieUDFzmA7iyoCK3XJ8M9JjjHWDQEb5XvuhjRMun",
  "key7": "4pJMu2wFeCKgSaVXeBhE7q4nFjZEgBdNM3k5PjuGreV9GcqLCrzTmhPWEkGRCK5EeGuwQt8kEea6ZLYP9XLpmkJa",
  "key8": "4Q8VyYX5tsRwg23PGCncFQm7NH7ugTYLiNQNfvqULZLdLyn9EWUTtBr91rL6UpcdY6jvMkpcoJFXhU123r79Ky5a",
  "key9": "4xJep5EZkFQA4ab6f18e7ibwf8TrXJQqxR5GAw1jnHsKLzvWEFWpJFPHyDaZSzYAxEvUwpUfijpGufVkbmCS5df5",
  "key10": "4sqY86pBft4GE1z5zqMyhSvEptywFKU7UtSoZCm5gBe8PNeV7dwoj9APUfwAvkzgdm7KRedcGtvPAHnyyswnsNZh",
  "key11": "61M8H168G41TkRMYT6nMrJn4qqnqB5UZjtHYmTae9qUaALbbpEqh1MqndLcbASik73BxRTW2EmXwSrxPMGPNJ7Zc",
  "key12": "3sZnW679g4LHMUvkw1WpeC2B8pRUya882fPWAyR3staRzkyFqVAyPxTkFHaAYzvUCLnYEkP5oir8fXij2fdwTTXV",
  "key13": "57iz27h6mEqf2rm43ZKm13ewBXuW4avk4pP43KNoLBRoQ5AUTR8gDcxadz8QsF7TXNVZTH8nHETb23CJWhxsWHAo",
  "key14": "5C9MLfiShq3H9VRg52Pr9e42cM4PUqcyW46qn8vNAK9Uo9xgB9y5bZKnYkax4eYKiRcWZVnmh7MhqYnWr7tyJHLn",
  "key15": "4NCpQkrF9LyQEMYv4qvv1qztWL9VSomaDhaDWoKWBPXtPaWzoUKP7YGMz4EKLo39V1LWNbXSfPshQjRGrGeiPfGQ",
  "key16": "3P2YNcTYB7UxxhR7xKXV4zCWtJ3LCjujUdSAmTmByGs55L58yowCpFgTMhvM8gHZ9GGLqFdFhWnde7kf5PPFJJr5",
  "key17": "5EWcuvJzXCEmVnaZJYf4B7WqQuFH7bYgiPuCsSBT6aVdkwu4KLKxZgCg55dVFRSPEBqVsvAqyCJTdiEJoSqhm16R",
  "key18": "46KrQSPi11NPnFiJwJcGete8YFfaGCQf8hg6tzPr9PBHUUrV4cXUxF5QDEz15nFta2vve22JhwdV1i5VANdUjm5g",
  "key19": "5QG5iXesgbzrLBk5z3ec2RUwPaG3DiuAPykPsJCMSuvbwUgmT22GPfibDMxWkQ1szcFqrkLKKqNv2wgfbAKrpP39",
  "key20": "3LcS6g4UPMDjPJ4oAmjFrr62u5yuHZ8DXKEEq67RuXyLfECaDC6ba2wCQ87apGd2NGX3L3sYTsfU8eJ1fwuL9ky1",
  "key21": "62guykupFBR9JX3dMf3K2ULENG6GpLRVdW2v88qkZQ5UhzsnJokt41QhWKqgBmG8nG2Y5f3WD6pU4uvh5tmfdzJo",
  "key22": "4gbkZRGAiGWNeYBkCERBLEk3HweM4bxXbQoFUQPHY17AS2yqMHEQaA6R18QXcAwoG6DzGjyvMhsPYCX1WDe6YiJQ",
  "key23": "3GSZS1vEVfysrhgye7BpQbBEHnm6yp77tdjrJWE11TozLdHeVVSA8726KCbHi3DrmfgbPd5mTPUbae3ePGLD6ZY6",
  "key24": "4WxxyRjk6PaqLXHQT4DqiR5aNqJWgykFcHWsTVbB23FhFsLdrb9j54UqQjmFLWAJy2yPY6baQvYtGLXwJm7haeNU",
  "key25": "2BSUaR4LRPgKrBgjNgDbMwANMahWFsoeKsipgLWDwikatK7fYetrEXJPQvHJKE3nieFbCjc1uDLvVbiU8hbVfsKh",
  "key26": "5ndjYCvxqQscBVG7jT3TwFpPhMm2so7pSevFcXciYYZdDFN9PwRubQXskYhZWJvqoTPPEcEvNdoUmCUWtfc5zBdA",
  "key27": "5vn68Vm55XGZTUN7zsBYwijhieqjYNBaHo8rMhXyLeDGZQDpZA1wkoDqwitvvAuaBBuewdngERf7JDno84XcBGV2",
  "key28": "4D7P1KzPzBmp1nqEiHv37XGEQbb2kwaBHQ4ovjQkQYmeuJZxXRAjUGwLgdU7rDduGDQRJ5uRuHt9wLSVVeqye9bf",
  "key29": "3S5dxLa3fQukFWwaABNttfvzZbww7gFYx5BbwPEQp43KbxM49XhGB5uPbJ69TTyw4VvtjCVT5U8q6ZzZq6DvzufY",
  "key30": "24ZfwN6xaWuYVZURarUBa7k9WJLnUdqYiiobLRvARfsZpKRbhoN1T1z9RqhddFJ97HDCVHRikv2bGSt6gGMQABM8",
  "key31": "3hgJrWpcY3WtFNhFxGLW8PRCM38U3cf2aVPJLrfmhbbqNM7NXdCuwjV1iBgkKkTtXSH2PnH8ECpREern5BZGiZxW",
  "key32": "4rNEeaADvtjiSkoRsjzA1XyvsrWkZ1AzBRkxMzLg1XVN8WiyDXt4h98YxtNNSRXhViSdkZ9BZmaPrxoxBaY7y366",
  "key33": "5rTQzgQ8dFkt2BLZ3ZwAUdooVF1KWns3QMnZKcGq3RKwnZxS2KcqWoypzh5VthHiU4aPAK9JpowaZqzLVSAc1do4",
  "key34": "5qRzSUhqgYySA3ee9mZj4h7TPoDRBiSoh3L9cxdezqXrBmCWqHi1drru4upKGL9AhTF9DsvmUHJ94sXmGXQkc2j3",
  "key35": "36n5YF2VdzGQegmC9p7QMNzuK41Spb4vcxgZzMdaUbzekvcnguRsj9Fp16gS998Nak5S57Ywhc9rgQHGB27BhLJd",
  "key36": "32MQ3rh1xYQz9FHGiu9ZhjeffPHacgHvegnHN8DnsgEh5e6mk7cFzkTFk9BC3M2JujZVvdCumyuPxpqWphqwhpw4",
  "key37": "ziUrJWLSJLGAjuxvR3GkPuHCh6rooQNqz9y3HVz3T59jgU9MahdBn1n5FgftFcqWCd2Q2LcaFomUd7hmf733uuF"
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
