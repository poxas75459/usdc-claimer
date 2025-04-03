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
    "5aNBmFS9khkdMYSaoXFczEqJp4zJrS3dmYwTvTJLf3mP36DthEt4SGswuNFEkq2jxyx7UA79UQeCbgZDyix2F6Ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "514YWxTRGXNe8MSBcxoN6tKurBEK8TxmkV9jAgWyqEe5RaahMAuf1d6EdXU789BXyECnuBgh8oCgHNyueswwvaoC",
  "key1": "3ZAK9FrfWtj2MDkXjcmpxEw6fL8iqQUfC5vT5TPpAZbuyTMnL4Bmx5vDMYF16w8ZAfk7gRMXiNNZPwpBJZHfD72Z",
  "key2": "4dLb2QXGGvCKUCrETTQ88wc1uwna45xFhk3oxZbKQPepX1obTJSTyh6TM28RU5pfMacxN2tGjmiaenMC7yQsAxfQ",
  "key3": "3eWjfwY2Erhf2odRpC3d4H2n7iwN1Asmtej8fSSwpWrncw7wkZufY7a3XWrUSQgaovMrokLN9tAis5A9xrWSTMJY",
  "key4": "36CTNJrFcBYJShn5cW9ay2CVZYq8qtpGZK9H3339VxevUr2aup8T8WkHTmYsF79mudfwbEupyshFHwC5rx4NAtqA",
  "key5": "5L5TvqkxTBUwxcHJi6m4hyy32ZdUFbpqZcffHuMGHr7ZGqLYgpx5pxKY6s9ifbEY2Pa5i3GES2wsip58pSQ3a7k6",
  "key6": "5YTJuxxV4uwz9W3TrmGtEeAmhRB176uAfmud7F8z4L3TARZwSkGhfuNzVE2DBoLNhmAcVFzcuMXPBmmY3KF6SSTd",
  "key7": "SfhDRJDvaJeNCJCPiPqhZV8fjXGowWnZmD8DJ8cVQvURmcirsFLZT2SBX28bgHjMtP2jLb5pixCZEeSeXX4A9jQ",
  "key8": "3jp8cPMDJAmZSqhPdRkwDdNLNvgjZZYCNDoAu2SFviyA1p5hCMQ2TdXqJFGxG5kzioC6vZcHWFRDr6ywjQX7YXxc",
  "key9": "eeLTqPv343iZR1uXXi1iV4qKGvvGQYe274YXP9mZBBHooShGXaKU4eLrsr6PA2bJ4RtvDEMjz3jMyqQCDdYPdcp",
  "key10": "4N7KembnD8UygTViZfpfyRZUnNbEUqtHk2RtgrVTX4n2NdTAVNNpVHejqXYGmjC4RgciiMN4UhNBUTvQrSghFjGq",
  "key11": "2SnpM3HdrjA9KFzoYF6BtyUv1JTzPWGTCYN1otEuqtJdX88RsVBfX2XbuRujFQygUcYE7DXTq5QLcfY4Zc3HeJft",
  "key12": "2aqeVBkXZbAxSwhmTioCs4uTZToHF1EuesdwDNSk8AEMfvsBbhqrN2d2FyWBWrUqUmfepqSKb7UmEkg1YKUMGyrC",
  "key13": "e8WgT26xDwwrgaUVHJ7N1RzFGSHr4gZ1QRLudN9g1fapzEAgFynGhGQ6oYs5ZPpdXmDZxRS169RwEsrAp5nT94s",
  "key14": "LP2hdvaLMa5ZDmMXr347e6JdFTtqfFWY6FDMb6t4fdgEaeoytZ1CggAVo5V6diCYTpmGemfigmJGSyvWjQX9jdr",
  "key15": "4ovYmLPnAE5jAHZHs9LgigmhAXZ2mmQDuqCfuoWQrrPVcEWVFaPzh3gnpmPmUEv2WXoJrNVVCJdEnNgpawdQAmsj",
  "key16": "5cjDy3GcqdWcZsC2CzcxfTvZeKsrPYVqfrdbPdJqSuw1URF5mh9noRmPg7sJfEY1qWda6u65eFPVaK9GowLnGHsy",
  "key17": "2yEvRcSMgwAt2FRVj9ncFV5CuGigt5896EUMAWiX89dXrCK7ZiH1Kbo4RLgxvHy274YGpmtzUpkS1wLexWKwv9pf",
  "key18": "6dpRf8utqU7NucEK8tE5soyoGGZq3qavgZ33CQSyyg9qGddYj64rcDXdCNipTZSay1XshoVq5qtyGAxe3JQkspS",
  "key19": "5oFY9tZkiDNGzpmLv5QQv1f3Xx66WLAqjMVo9ErUnHSyDY4MwR8cRhjmf8Ybhh4b5qX8J2Rmgo7jrmu6umx5q3aF",
  "key20": "2SZdTikBPf7X1itaMvYw4xqu6z9mkvPWXf9J7gx66B2m1QAtgJcovmLLQhk57YtzQym4f8RQ748Ee6XwYo8Auhcs",
  "key21": "4mggmZgrErQYiaeRRtCceyUYEJ2TV7HihBY8kmqqZDrJLEvEVfoAfzHPgqiHB3ZjWY29FuqU5QBN5qfzZUorK5Ke",
  "key22": "G6pCohAizoeHmVERSKAKwVyW4eUkmuS8ur7exM6Jw6hv2ex8Yxm2FJGWSXSaTXZCzoNTgbqwF7NJSyGePdhek1x",
  "key23": "3ekppZ6dukcP35iLa8MhF9x12WVByAGdC79Bs4X8ejZfdmPzxK3xyiW8uyYtDNgoHdsCUQtnqJVfbhbE4XrRM9Ub",
  "key24": "8fSs9MJH6VSALT6EWurihWJyCsuSdFyEZQwkdb1jtm3eZCD9WNeoNoGcQmPRkkxfx2mppzJJTrntG2jcervN7kB",
  "key25": "2UmNgqBHzAFhczMWa91WQwPEe16okjbnrWsfUmsEMWWyLrvH94uZmRFJBVB3Qp33TmiqygyGWbchFeoT8TYJCkqi",
  "key26": "5X5h29NtZMPKzSMW4ivfeipnWiMLeTSt96XRx8Y8LQ6YKWeRpnkkibruSnGceoKWZXzhbX7ibf48hASwtwf6AmRy",
  "key27": "622BrskVKBXANwCffTDx9GXD2NAtBqeSeQBraXNnKLhu7qqpYKdrW9iXpPm5Q8dtMs2QRHSpvc5ynuUqHd8v1myr",
  "key28": "27zEyRU7Mswhi5ivjRnDguDwkfAugLStLLMgUAYjRLBSDrC18m5Xse8b131sU4gQEMxhEjPgGS6Lje74mh12eA8h",
  "key29": "4mkAq69se3uh53ndfaJhf4pm2isHnqE1NTnhP2TZoy9zkt8kcHD1RQ34UgAXeyVWbjc9f7vcvm3YNymceooY8JDP",
  "key30": "25YT3wndEUDZFXi54fbo6Av1kvKrRBGKHAARzNThWSKvYs8HXov9YLbWQVTMTFYMz2nt8vCXVQs8GohsxuLSvLsm",
  "key31": "4etVakDxZerH3Q1UFeSfG4uZgwrQqKpUWkotHy6ALjCvDXQgwAfSVb1q4WXeTjJAwfF18KKRMYVL6yAToxeFRkWj",
  "key32": "2rEgwudigxUQ8STJj2jpEVhBtngyxuHshSMmV3DRX4HbU11RZDoJpKNTuyT8PybxAxtdbUfm1BoAnbUZZs1PjhAN",
  "key33": "64PaUmZsSYkG99FsNRerieHTd86ruCF1oXWr2BCGn2mdaLc2SNgKjKuQbiQ4skaogo56B3FNhj72KjSxKp23Mh57",
  "key34": "3wpFmtX6TKSssRqfzp8AMmxyDjXGxgWJwwJuJdURLP2CQrsqpwYA6VWCE5pkzmfks6kZkqDdxPKcvp4vpvooBhKz",
  "key35": "4AsvzvNE2L9YCwDCfUUsAaP9PffQs8fsNHnzKqkZLDmRUj1AbmwMjSE5dXSeLUuKJf8yQoDhar5VzAokn6Ygg5qy",
  "key36": "3sAxU1Uaop1TSJtpq6nXnveQqkKU3akWk5YKVaeMpKWqtALFedPYMvsgobQuiWMaHpxFuJv2RNsNMsFejGb4gDQT",
  "key37": "P4dK8Tzdjy1WMH9UCVLbVNp5avMD3eCpX8zisxnpt1hpM5bYBVEUQm28KUW9Chd7Ahir521T8pnsmpq9K7CQMGs",
  "key38": "4m33wGD7zEfQrwVpHd1WXNNPs6dj4CoKGBVGd3EH9PF9zL1kHqbbBNxTywxEUzKstdzY6nNd2csNLGt3ABkmEQdN",
  "key39": "23nPYR81JdCgkkmqPf2hKVk4BTia9N2m1pTLiitzoNZtmy27ZWHRAaJnJiyAXFd6bsV5uCF51BjPyJGT12SjSrdq",
  "key40": "3VMtndrwGaA3Y4rH8AmLqhMCSM2JbKWq7P54hAAKaYzhQD41mYWqEyFaA9Ki4NtRXPLEB2oirb9iWskagQXxhTZk",
  "key41": "ZaJDwG6qrdjH5C8G5XMWUBfBs91ePPLj8dUgngFkozNH213Z7BcGp3j3SUXkMgyZGfAbtboR28tXkXqp4NhjKHA"
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
