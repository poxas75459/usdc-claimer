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
    "5CpekaZunpkQpzYEFJ8d4UK9ZTZDqTwCH4zPNiZYuH7tS5oYmaX5YcPvBjX9PAPGNPC1NuG5LcqLj74zeebWLS6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SCJ2vqWcgbqnntdAB7zYuyJsVH2q2CxViJWg3TvA2C8XyFj7vt3qB3t3yFt7y1B2UDEC7UhKKhd8kmFkcsAs6T1",
  "key1": "39t7uQuVzZKKuMFUzZcdUWo1dPnKycDVnE5o75JuBqFyNGhLpjmuEqKiGQzHsAtKdzVKPZrNUJXgrtCZJSVsE4mL",
  "key2": "seMewNw7bxGGCnu9mX8AoHUrYiFVt22adxkEztnWHCwBMs2W5CHwctPh9cWPn3UhXJjL3UZgmLkzEe5ucbMeWTS",
  "key3": "SejeJMDWvU66N4BgLmQEdaEmBEAhSz7yj2wHi3NfDRWDw3wyjXfuFnmvxtaXCZcnm1FoCyuvcFxZP2iLpoWVpzt",
  "key4": "64H7TwVmv3z2YTddMboDmW7Dxjhehy6K8p17XkrrJdm7Cx1qWE6zrMZ2PFL3Krp2hT12sU9X6hKKcfZRSPV5qRwo",
  "key5": "2USgyBfFSTtymhnwRfpzHmnSYf9CgJSKpxbq9oRpjDfvaVgSqwConXHtPoxBy2fqzAu7LP4xGqBbXShJ1zKJrszS",
  "key6": "39QV4cZMqyiP8RRMVk9krDxz4KZorobGv4U3aeW6Mxf4WmpPtjfoE6Y16Xqe94SHa6q9XaajKoWPCPN2qKx3K5t7",
  "key7": "3LcwUWFaBnZKBNCNFLMVaBAH56UxTQfWqcpv3DRGT3h1LWuoaPxyng7hMjcT1snHJPsSxgPqBnFY947DuiphaaZH",
  "key8": "5fd4oTBFH7GJnch8shU9uffiGkjGn7WzhfMx6NVS9QeZH47ZnWhPvh1esWxMoToZQcaKkwV316TEmNCe2w9BQhxf",
  "key9": "4PK8njrHu4akLQgsrgZoZ9RmHb6VPs8TNwNrxzCYkYqgpf2aTcUoBEYtToUS6Ek39v8nVANeBaLQEje4qjpg9BXE",
  "key10": "3zzBheCVCwPNv1zYqrjPAGcUpNrH1UjbdqwZk5sLUTvPvvLr7dsgC93PpZC63B6ESYwVFwUJ8w1FXmFBRhftVnCB",
  "key11": "3m2FPVAg5diY3fCdPqrHVJrndanSuZcSZyFtLJB7NdjEHEj1YMK7fchYTcturujUpjnZ2zrk3tsSdMDHHgoR5trF",
  "key12": "2cQtGVE3HpRNtwzH4NMb5qr5re2DqbnZSXcc87oSkZPYpESzq5EG2cfKCQXDALiivRFkCApYQdnQCZ6M96c3VGU",
  "key13": "LTSHYQpEazbUmMzV4HHfvAP9YcMb9Y1yFDVLqteSLrtKYoQg2fcbBTnWwUrX7UiHur4KUaCDU4CtwxcFvY2UFnB",
  "key14": "4nY1PrMHdQQsxZkesnEThpVSbvufBy6qzvqXQaWndq1fPNcgUoxsD2ghhyPFiwjdsKT56ADMxRJWdcJihV6v81kb",
  "key15": "4kPmySYHMuwLEfnPYjb1LAujMg8bym1o4KGYQJvZSua7mpc7WLuV72EXHg9yUPniLsDNUoX4eK1KPcahMFwVyniX",
  "key16": "29YPcdh6MvCqSkkiVXTxQBK2RgsLJixScioG2bqV4d6r7DxhzVeTtUw6PJ8aAsjfzu5KJkZSuQv6FDYct6d2T7C7",
  "key17": "3hJRYfMzrUHzrYfUyw5YCcrAU3gBUCsqPnMVB3ZPAcn1gL7kxgYkpJez5nkms25nmLwna9cCG8ZCP2iQK17AL9iA",
  "key18": "3pE97jc73CDxrADptP48PaVzZV1ZC7rRKmqdRYgzigD3gk4DKx1zWQGr5qbRfEDHpt1TuuYv9LG44guXVA3A1ZoS",
  "key19": "3mfNdgj3GNQ8tNVFrHQzfcxbX79enmPHuDZcAz1ZPwuHgxKEDfygTRAetTGZYmugzfuPWjzjMpEwavwYbZdGWKNW",
  "key20": "3f8pEeh5Q3jE28HQ31ZMMAYKXNMsAwgMQYD5w75V6ekP4BN7BNHobbjvu5WXaZ9K8yggkDuzRJ4GZYHbh1TWisfM",
  "key21": "4NomoQFDecsy9HPnQme5u4hQYwjdtANgJyYQ9tEc17a6EoVNXJLWw3BKXXjFVttR7o3pwpEJ79dwMVccQvRTg2e6",
  "key22": "49AxNdY59PpWAJiEdXYGc6sFJWsnTpnVUyayegjbrHE6a32FnevdVBjNC1YcarpW8YPxjgeyeDyCFeH8SrEo7uw4",
  "key23": "4xVTgCAuQPgWCLDjjez8EEujTeyywpPi2AJ6si1pgZW8knn5kdAECFurBpeMFuQusd84vNuwKy6YaBhxHZ6o1TrV",
  "key24": "2yTQ3gEgBErrEy8yjdBFpQzy5n4xUJn6b43UVVGX2JtMByx96haoxnKAvye4VxfmdZNo3XeR8dG7KRb5Euyz1f8K",
  "key25": "2xRa6o1vti7PiELSoG8VEdrEeYNcvtakUcaTAKVcmJKjmgAP5YstC8AWtECgWn2UUpCWGb61QcnvoPeSEkgNgnU3",
  "key26": "67rh4AJ1af8c7Fbi7YNDf5Hgwuvmats2uHpZnbSDzrJFNXizVEXRBkAJp3Pz6UtWkVxKgPTqhwqKdXioQnhGSnVB",
  "key27": "trQxPFXRLZ9GeaM4Xi2HmMuLBxKWLCvZNyQZg6JtFDVApXGcHpY9Nams7kEWWzMnR3S6gzPwAdDPmbBohrErvf1",
  "key28": "3kWisP2MFDDqWvTYBzhWq5UhEagCEEVtfoFAy96H5z1wijvGAVKXySZ82hpazhp7BZSMJoMVGz5ZBmhr8z1S1F86",
  "key29": "4Z4mnhRi7znn4JAYx5q9ZJ8UrdqxVieG6dWSyFGhjqyTbABFLG5J7cpzT6u3Dd6mXUP9VeLmVeMBAe9QLP9AQZLx",
  "key30": "1mWknnDRfPgQbJrsPXnuLSyTjX3wRzQKEdSNviN4uP7FcFCxRd6T27Wg2HhD5DX2KAd8Lwgu7qJMEkvJ6uYUStG",
  "key31": "4Jvqv3bwyfbrpcEvJxZtqXv1fkmfRFQWqCdAxpNGe2trvqby3ZpvRv1Doj5URNTRgNM1wNot3qPL6vUuSRKJnHEa"
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
