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
    "rpMkE7aVKEzS34i3yH7Sfm8zkvzxDGUJuKztKiSFJpSirQMycXFwV5o3Bq6kmdT4dxZKdKTX41rXotBpKWrm6ge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iubYunHNguVHvhVuoKZLTVMbXdH4obgcb9dkrgbMWTznzY28tTVgPzqvZ9ZbJDe3acUCo7wSeerqYJ65sTXMsGw",
  "key1": "4BBSNiy8xuQpSgYJwgiRYpp3v8zomD7mEHmEoC5q44itfx4bccN92qBozotEBaBLHwLY2fgGD1gFqF6QHpQjnJfx",
  "key2": "2Pb6k9TNoCL3XDd1pinoi9UDvc9rZZuq6FfVmwQKwoYMitWrz9rLYRP6seDLrndPEMeV5WYuW45p9ZbBMJdxDmAn",
  "key3": "5Luu8HbiDWY1YxiXo3ELBvBWUmSJbU75ZqEFLhDQrQrSGSJLMCMA65rTjExp6iL69ivoLVMuvBKeKjv6BMq2F1CY",
  "key4": "368N7XCf725GBSAP7G8mWW9ufWxdrmhQzM4t2dvJaiC92Mj3JYar987bYWTxHYLfDe7EyCp3vRgcjcPoBgXM9ZRq",
  "key5": "2FMXgupp8fdN8FqDJGsia2NfbgEpomswuSSkCEWnsuvcDLL7z2xTeDntPXM3chKRVtR4JaGVBUWWxmvwrRybP2Qr",
  "key6": "3K8xUrooDDocyvYQ8Kmpd5U3SxZxGyXqWj6QFTfufjBaq4CCZ9j9YGvRxuoB8rxmJdX6ixPkaMUMXFKwaNedbFpd",
  "key7": "oCfzawHXzqyYWEFGAdLdxgU5MmdLWetjRLKuWrmoVae6VbftpnJYg9c7w4ZLcVr9tHzYfnmmpCHswK774LemUCv",
  "key8": "3vkwDvRc4hhFKrSJ6dUVX9G2UJVDZmLSXiF9M8puVY76Me93C36ThbcdL6ipSgA1t2cWKhX1B9qsq3v2hbS1w3Mp",
  "key9": "3dS8LpsY8ZAMiwnqU2YeUyBpSFGG6rGAGKmWsK2jPw1v7UoVLCWcKH4hRKhPQzZ3ygSiEUcm5PiHBtYrjBobu3SA",
  "key10": "5m2NGsv1R7aATs4C9sRw7towhhJUP9nBTTXu7S3L1wRqGRkj2pNDVK1LxHphihjEDkqYw4LxCSkezUeKR3ukdC2e",
  "key11": "PMyYZJFqGMHqTyzZGvSSfQcXAJbwQsshCRbmdpC7JdcpiaFSkLY79s9SzUV3wqFFqEcpcxFBia15LCi4i5rU2Bu",
  "key12": "vjmn3pdbtZ3A5XtwTNjEZeLzfcemvnf9xGdFmnePRWkeCgWkcXXvGrAB4hfCpJNMVCXwd4wTkrPvKjNzsoh4BAw",
  "key13": "3wS44xFq4ViDzVm7D2C27NX9PGay1B6cQHEmCfFNE99Vnxw6pkUKEs6cDzmSPSUCGDzzNWRzrzDEEFFdoMDLhBdT",
  "key14": "6KPCEEQAToWWacHb9hLrztPtxCzAW3mMQ3kGuzRc8vjkwzYiE4SmPiBvRymi938RrjufmPzHtNRDWHr5r7TNJSR",
  "key15": "2d9yBmcBBcJ4aDxvmwZjaGeJjD2uAnWGSDrnD1azeP9htZ7my1PqtKX81q24bKz9r1Rgf41atpTVjA8K9pLCSbhr",
  "key16": "j2kQZDRLrRDkAKU5rJvT4Aey9FwZwpZXQwBm8UyB5qzVo7f1ZTADZSibe2vEKbGBZNs58qeDhQE78NmpvA6L1Ps",
  "key17": "3BJG4xX2666GAbr3C34awLzKseS7YSeAc1MiZAGnvYf2sb6ipNWCdcDaKhxbRkAp25VVa3zBq94sdBuamspUzCj8",
  "key18": "27oSR8xTSNATKV3YEchWUtUhbyPdvTy3JLSitLX1ctjhMeMoPPPnkkxE7vF4637XS4yYnqUB2VQK7gG3trmPeN3n",
  "key19": "2t3G5EGubLPGJf5xirfMfz4ppm1SWDhKrwnt9zxQwwfkJG9JyyjJNhr2hEmjQaaQZUY4GVHk5j6TFqYSV6smuWwS",
  "key20": "2QzR4Fgyo276X3rych4dDz6wM3cKXXUcybpocp8suJUCfjyJBBMuu6rs3PfxvPrxrdBgeZMJ1PPtHFfWdHwQMPQa",
  "key21": "5SEHVwbLRbsXYvEpcMygCjn7wJPAzukA4hTUuXRDjGVyozSnaVeQL2JKBN89QXAkJAssV3RmdSF1JE86Pn9J1CPF",
  "key22": "4JMjMiEBbmXjHFdPXFwuYAx95tADArhTA6ZizvpWsocSoKszPehiLBcAKQ6wkXtkqgHXfwB31zTRTbM4xYsB1yTL",
  "key23": "65RtA6u9KNe7VQtAdugBdkZjLiyzr4V9G8uafrHT7Lddx51AcsNXmAYjej1e3Chdc1LEG9krxTwxFB4ciNgP1Bmg",
  "key24": "VhZCMnCDpCJCpXuKrFNxzF2kZQ2jPkpDEhXiu36TqQkfDSMtfQvWh8KmHgr4daoLzN7A57m3DWaHRVd5UhEaYd6",
  "key25": "4qz9NWngaKZVtgn7XQv9V7ZJsP6kpi3eskLuuNgctPE7QiN868ftQtQfqwSRKG21CrcCXxMuKWJ7aZFqU2ZmXFcQ",
  "key26": "2a2U22mYkGSCkpbSjm9sGxAuj7AJkZQ5bJqh2ji6A3o9AYb36gr6wLKcx2cy3AJpVFFNKqWPLiVjJxXjQpS2DE82",
  "key27": "5Qj1Xtn53ofJzNzQosKyuVX56L2Qqte3W7JNU9uSAUMCZb3UprJ5Q5RifE4E7FWUxg8azk7WDR5Br8iSEH93tWvZ",
  "key28": "3dMMxwkEmhrnJxQUz9nDGj4sRBUuhPVGjU5X2EVK3MhrdbwaTdviuhFjMKjTtQKjH3HqjJTEDtZVQxcnmujHCF8N"
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
