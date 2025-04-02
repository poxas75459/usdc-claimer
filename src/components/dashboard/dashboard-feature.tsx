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
    "56z2MEuvzNyVVExHNiSb3ahiTUEEPrUb6eSDjxY3fmd3w3yx4RPEbQbqhPufuituQsLBwx7JdpuHfW5wcUaSxhAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mkEyQ59TE1yBnzpzfQQmYSyfg5MXVwgQQxbVfZxzYbmQRfVfCGN8PaawxzMcsS3xP7xQ3NAyeM6Fe7Fy9sQNDxU",
  "key1": "3yNAvUfNfBRQKoLeLHrnu69PdSAx8BzihqNcT7TJgYaxmBpZCUD8Qqcg986eS7Fb14fNas786xjEFy7Yo9QbpyJ1",
  "key2": "5qgRYS61sgaijA4esRASizX2H9LPTC1nV7rpridnTKuTuAheU8GfhCMihKHSXUWGEA2UZo8UT6cj4f39nfFaFYoZ",
  "key3": "MukLmyS6Wfwx7DzVZ6uEyjBPsdZD4ppewuNc6bGBUa5pCJgVQJsrT4Qo5QG5DeW6XWjfwcSrnVpU22KH3RpGrns",
  "key4": "4NR61XBpZKJ5ohaC1UbL7d4e3w3juyYagFdNCWm2VJ6ryFjqE2KXGtBTZv2S1ZWwy4hJdN6NqpzWURrvDJJyt7zZ",
  "key5": "4ohRspWq9yxKbLd2S1SRCEHQGdfSbDt5EnhnitLmQAzK2pe7USqijxbXECPTinHgoWxpbFyQNanufXWjniuuA1qQ",
  "key6": "z4ZVdN3vXu4u3VLQgMgUS8XJUJXyhp9zWLatLSRfoSUzYGZ7SCc3iQ5SZBndkXRfvF1m8onZQXjJqwtSG2s3xWW",
  "key7": "2N44LCqXsoYnNALGZuwKbbW27yDqK1z2yFJcqqkhjnRekEobYRuouERjqcU6isfoJpnfYGLZYe67y78h4d3Er3CX",
  "key8": "4ikaWtvC3BPM25VTcLyWchkAW2WxdhdNQXubErq7TQPbAcPhRBFwEFMsnnZ7jcJ4Dh7WgWKAh6V3mQhf1sGAYfL7",
  "key9": "2H4Jq5MR51Fftt9L88DgCpgG6d3DnF2T4YYvz8nGtiDozEqMgPJe7EtfMwQCCoMQYwYiuyKM5Vyhder6ZDn2TrmS",
  "key10": "5yt5U9W2RfAktPZVCeTvRsLhE5XArwNEsd8tu9eB3US3qVYkXHKp9foMNrfTsExHSEEgsS6yXVJaPkmzpo2N8dT3",
  "key11": "4koVEnThivieYGEhruCzGwx2q26SFwvmqo3PG9JXgjEGDBduYA59yvinT7PCQ1iBwrxa7KcbSNbzUsSoPQzVFkQZ",
  "key12": "2yUe7mzcPpH149eksCtW1xc1YwcbLR7dWKf24R5oBYnYM2ewneHFYtyo5RmnHGX2TdEgNf6E88rNda9cjV2Np57a",
  "key13": "3EHfbDCj5bM3STFyKgeR9NZtL626qFGbtnCqhaWuV1mndzkzcibnHuZ7ZAMTLc4HZZc9YQKaEPYDyHrwUVp35Jhf",
  "key14": "unYKb15VkLB7roAZnr6CnPBPiCT6f8cqK7V1XLCghqobsgZSeoXWMKJ7PL6echPMj9dNSpB1M8gUpGDd9jd7bvw",
  "key15": "2BP6JimFZivBFZBzLHexYPg6knHGG7bDdSBn55DidwPs8PuKNp8xtRWwGsYKjFvz7BD3ZemtCCzfAsionoUfc4u2",
  "key16": "2aokkUv1t1kKij7qU9cUJ4pjLTs7jqJW7uK1pHaAfsmGv9TjC9896XBmQnSNXXxmZ4iSH669WmgZ1mqu8sYRKjQF",
  "key17": "4bLHMDQTvr4QfL98mNje7MH2RFLEvX3n1oc9Ss3rKGvqx9ii7fKeG8Ptfzeop9SFyKDLxNXRKr3inWTDDh6Am3Hk",
  "key18": "5rcukfz5XiFp7m83yxeUeKyPS4QFbtbGQkxS7s8181Rk4cfsKeT7Rvt2GSMzXUaFWAx3dQNqA7nS2gbe1Bmppfck",
  "key19": "3SRZgsKDG8tu3MddpDe3iE7DmPKSE4B4332kt6YZgipSVnuVuZasdmuUqYc85EPYyFqvmnUVR7CMiuWNtqy3DAeJ",
  "key20": "56Y9BBHvtiahiqwASWAhzZNbBYERm25GoV7f1ge1mEGrtGu9HHUX4Ej2m53TvMZYMfgeDvYw864otx9i7poNQSqf",
  "key21": "5JaRws388NHw944dMewmmDv7T1JQxcKSo5QC6ztNnNUYmyiHDpfk7zUF67ahyXF5Aez6F48EsvhfnzRcjvfeGb2G",
  "key22": "N3se3Ay6w2Re3cEbttaGu8ko17hC8o9zJLogoLS74AhRFacm5YSvLiMHn64fvomsZEwWLNprfrvwKx41s2xjUFK",
  "key23": "5aobYJcVQu8Tg63tA8zv2PuHf382BaXezFATuDQd5xKa81eCY8XDa2vbZEi3ETmmPxq6DF9Dym7gw8skKtiBQz4x",
  "key24": "36LmKSQWossMQp6ZSGJ3Q5mz7HQ1nCzTGoTPT2BRY7QDdqjgngJmsPQj9FVmpZu7WsEufVZFSMmhKnSc5N8dbnNs",
  "key25": "SjoaEAwctKv6o1xJovmojbFEnxigwagDm4cz6vBKDBnkapJkGe17rXNyZZLZZrJYhsi5cNVYL4pFaHi1J5swhkE",
  "key26": "5uWWNJgE25dApTyVSNeJ2kcNXD7CSHH4XCyfspwg4dLusDXXJitm4gAwkfJJgHPgTAEcxEHv6vbq1yHMusTjyaXx",
  "key27": "2yyGw3SCJ9qsLmCHEzP1tCV8hBbg2yU5h8r7XZYERZwmFAHN3v2iSrqgVz2TWnJMRBafDCj3a7avmjn7Ti2c4m37"
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
