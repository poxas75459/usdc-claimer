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
    "3Gn3vQjco4XfXnrwZ5zwHwHbQ2YVp9uWTfwuydVZgCphE3zNQsWaNx5sP6iXScaWtjXe4kqiq8TuQxGo9nKmZvxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jMLWjiAGyYLPbLzXMgqn5sCZEvBmgmZfCvbmPvRyzhNx6cdqbmgFEXMzHTFe213rhGkNudiVHaVAtmeYk3fs4Cb",
  "key1": "3uQMwR5zyhhvuG8ENs983R8JY4YskQXQiDBfRZzfG5hLGRCu1i4x2di3ker8T66Xk7edhxZ6F8yDnRyerkgsT1Dp",
  "key2": "3Y2h22JhtuT49fpBmyaT1npMar9R1tYVykq8QNH1sygSpTMZb68fqbqxH1WHsq3Z7N4nPNgswXERHmUFj9hfCPmR",
  "key3": "KbcGGJqxy2mrXLG4xRExLRXfxvDuXkWMcxQU9XefefzHZjg7J9M6gee37LteHUZyYtxvGCNRiZ5H2w5dX5DQgVW",
  "key4": "4C9bhTjsTVFdyaWKr6htmUDQkdmbwCtVZ5hX1Wn4o26epc85RxanKAmKJRybnQWb2BujD719uRzKKraD38jnZFYc",
  "key5": "ZnHnUr4DwgiVPxVdfuJg5j7DHSrPcsdDtfG1CpezyjeRNGpTbxG2AyH1DvVjjFcZQ79ZDDwSdXpzL6WXXaJxwa9",
  "key6": "2WwtGUhKHsWV54yoFD6bbcbJxbCix5EganiyH3Ckpevqg7Nbe9Hm3hL4m9UW4pGPkpXZLb9BBYZcQGR4syRj3h4Q",
  "key7": "2cP4ReHtas57GA5EYd8UUeAatgvJSNzBxPcTnbGPCKfGvHVnpdZaXvmZL8sRiWr3kBNGqjQwJSduz8iE6KKNKdpG",
  "key8": "41haPRSn66ELjEibqkACXQEroUgQed5ebUD5dRSJjzxUJ7HjU4prPzni3VAASinm6QqYRH9dodNZwaWXDUSWD9jc",
  "key9": "3ywEjqMBKUiT1jAzwbg1KoD5bcxWGVMRkzyU5CvT1nB4mxPtErxF6dh1fGeiidjg2SyBae4tNMZaTWiSnQ5f6CE",
  "key10": "5QzCj2QzMiK6Fqyb6hviWnV26RWx8X3AQDBriBMtAYQLTEacJYPXWKa95Fcewgx13q2ayy4navzcvssAjX4TjnnF",
  "key11": "2hH3uDxpTPSzNpGjdS9sivgfc8dtkqAUCLNFALaBoCmBExKuBfWKEF57zswhjH1emoyjsQnFAzmoTBUSsZaP6spE",
  "key12": "4BJwxMHSMAENqvBt5ak56sP41VSvNCvLudqzDjaLQQbzmFrXGCXSJKfa9ydQhQJnKNnsBWs9dqTtF9kbDiuJK1Xr",
  "key13": "4NWCijaHttLKGkK5BU36EwEXDwoycWk5PRjXP6ARCAxutBzRHyRDLcX49GtnJ7UaK5vTc8jmhuV4G597VDdveayw",
  "key14": "KhCwJGCbdRpSY9KbD7QQKSdS6i14g42KrYXmHf74fXJgJLaFbsduANzgJGC3mb34y1qDhvdw7u6VyanTWZiLgGd",
  "key15": "25ySL5yNdz2pHp2YcKAm33KHJXeGuoG4fvtc6VpvBWPjM8PnahCWS86u43PZVVgdh42cEfozzYvrkQLQyRg3C62F",
  "key16": "4dNRBHKwaQ4pTjBJQEFUghKNgW3xRwtwAmS57wGGNxdCkKGvZ74cbYsKjuoJH8K1kwNgtdsmoGwf8PCsJa4qvwHX",
  "key17": "5NnfQgSAraWtUX6iCR5kssyL58NVQ4vzyiARHBDwEqQPxS1EUtMvxRRAHmUYdDDPzh5uyM5Sn5E24szN5pdRZpAy",
  "key18": "aSxwS2G8W8Cd3hgeBwJevyKi2baPfqVohjnNRpv3JA6KTK4NTKAr2sdjPhvQUDT4WiNAL96SUph5Fs2ZFT49SGn",
  "key19": "3jbQxdp3EfQoubNodcqYrfenQ18U6hHA5JUiUBBLgpSbGgfLRzmktP73wJqEpPcJWqUpMvam5wZ1AqAfDWvvF8Ac",
  "key20": "NCX8mCLfsF4ZUUrPkXE1iak1RS4gRBXJCtmaE8NzmR8cQgGVtV473YnkwAaM6D35CwEbGP8AKmXGareuUEQVsPH",
  "key21": "Frkxtf6fuiys47wPmWPK5uG8JsZ6nw2dmnDaTRTi4MUU2AvyAEsR1KPveKPyH4p3Ca2dYF41YLJiLD4eaQkoHza",
  "key22": "4woBvXhYTEXTHXFrxG8iNtnZ3oRs68b4y911cNGaf6cvGzDYmgsMxGQtehtNpFFMT15VtVcTSM6xw5w3gYgCk625",
  "key23": "2ZzP5pZjFGXbSBUyFL8tnPGwZo5VotjcwJU8UouFJYabgKNeSGHpwiuwhCk1ZtcK3Ko6U19Qva146Dwy6H7yUjsJ",
  "key24": "2U7odRhhG5n27YkidiSFtUTQ4xCavoth7ubpN7JQiowxk6XWsQhefrngXMz1Rk6Q5sQ7RnQbt5SBK5VRoBh7i3ms",
  "key25": "4WASkcRCRmwU3tx8KeRTaW1VA5K53JyojzbEgptGftAmtvj5pVjF8dBT74Zn61r6XY8VEmMCAUo33B4Mn16H9nA",
  "key26": "4GQEM1hxHLkM5r6iHXhJDqY6Uzu4L4dizkFZ2HmU4xappVxxHd8KbEnYTck17gJW7cUJJfTqqRPuP7wkRWKfB8x8",
  "key27": "5TGTshcLLyWHq2qMoQfrkQKLPABSRmbUX3sVkVd58WEtWecAf527YZkb9bEwr7nkXy6wsNCvYCpMWV49MhctY1yt",
  "key28": "5iksLwTrGwGhZ3RuYULuKMrbXevzeJQP2W9s1XnjAfFUurw45quD4uB2b1zUWWbwyW5cfXcKhCEqodm6Dc5B58Sz",
  "key29": "4Mb5fvbG3SwScDcmbFMjdTWy5sDabeDnS3XcRgzCyUnXBmxXrvQ5298bzqLma9zmN9HE9ceRdRVAVmnQEn4kP1an",
  "key30": "4SVA7V3t1TBmy6bBMPgPdSBjGt4kQSi45vMaeMKyH9UYmtvb1NfxFhQf5dVbhWiMJwPRtjJBYaSsZeELrS3gbagm",
  "key31": "hMiVt4sXU9PqS4syTRV9CGPeQCaebb6hVRpvFSyYSAauSpGhrT1BdTwvCfuHh1LSgtVkFbhKC9QchXFY3D6WDri",
  "key32": "5gWJYZtDytJ6HxueZ2bXmgqdD82TFBnVEtTLeEhE2436fm8i1pfX1vFqdkfSf2Z1H8LpU8bjMkt7wYw26xqLrAdG",
  "key33": "52M7awwLpVkCqyn9FyWhvoq1eByZNPciagevWb6Tu7XgXSf76GzuFtApUrMHsRY1VKGYMmE2H4KHzSbYJYsMNn3h"
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
