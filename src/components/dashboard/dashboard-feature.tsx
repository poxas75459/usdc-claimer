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
    "XCaLXDd1xohLSKCAG4PSZB3jrDWy1fyaDVkYG1NEGNoak8E5MHvLmcovfX9cBHBAoag6ZoBZVvm8aeWk1ZUbLo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uns4gT9tafAMrsDVhRJeU7bQHBjcd3cyRVysb5zXFd9oqSkmJ4XPj9t8hp3CrNd8Kxq4s6qcGuRfE1k9FAzKSuC",
  "key1": "21bjo9tfSJCaGEuTPZSKuuZevNJazBUDTpJHFw79qXh9DCeZhxhvVfcYRYnpfRDipng5ebRKXomBi36dfRVvdPSE",
  "key2": "5vAZ3q38ocvrbdZRS7qy5myQsjWKrx6M8sGbmRzkN6qfPgj3WznxXkJBZXHmjuLdWsvrbrUy8UTazjcuDj1JBUcb",
  "key3": "5uCTL4d8ubnMDV3L6eeNJwLt7u76qFQLWyDFkzbW1XBDwgTwj1rthDetyyTwX11oL4qXNHZQvaqRoZBHqsrjDot5",
  "key4": "35bo61Uj2sSgAcrdiiasunQA46URVaFsEvbtNfm7PiVP1tQK8KDS1k3GJynjpQ1tsmfZu11YPLVN8grPX5XEXurC",
  "key5": "4woMSH6a8cgdE563wMysXpFZKXEvV3CE6qzKsBXzfZ4isAAhcoMJBerLae6rDfVRQqGYjxVcKjJKhHe5XD3fx9F5",
  "key6": "4kwNtDwyaTMQtJaJf66oUfW8jNHCyptUwQWZFhCNZtKnsChgNJUFWoTR5RAX6RoLKDykvAwKEiegpLqTEmHNdjqX",
  "key7": "VRA2EjSCevbiLVNxkVNzW51LwZ4oSeiQkLzES1XrcXkqBKkYqfzC1BMFhQ2XWrqUzZUz5ajsp3bXQRZUzAFnk5A",
  "key8": "4n4aGkAf3TWP55xs9dRwcqyNtkVMh5GkRKrJZ9xKSjzgEY69Txis8Mf1bRRyFcnmshXnNBMJUMBoLYMnfufNPxWX",
  "key9": "29YrPk47ikNuiYmtGC8E2GHKLbiaj6B38XF7xpb1NJfHRtVNeeLYgD3DCc6GFxETpixX1NJYSEDUPMpWNtqiRNe1",
  "key10": "2y12nWhRavQ1NodgdMqZaHKAjvrnkjUG9YuDwy6nKFKUXpPQqVVfVPps8jxhNaxUw53dWoowVmWRw9g9UGm4YqDs",
  "key11": "2NHKEVWuEdRX4eLwcSPV6LABd7ZhyuAh6TzPwVZLoA4bA5Pj93JrSLQj41otz1MHLGuS8xi2YbJCyGcwjzTDiuA3",
  "key12": "3cVNXMLHE11MoktT277frYsGBUAFLwKRk76VAg6qhb4hq3oiSwiPnknPNYPqTNpZpDgkUYhpgv6TCJxwRqfcb19H",
  "key13": "d9JHkixSpKjozDUVMQEjXUKBckgTMSamd1pE1WFmtHLDFsBJ26x7Yr17qxNzmX2RYLoToyM63kW2xAAiNvTU8tW",
  "key14": "WuprgVG6oNREVbFTAMnAsMJBbHHNJTtwsbSuMGEnzn389rEraUU4nzRLW4jjNyqEpMLK8fjDGHsTkuKxbk6zagp",
  "key15": "2XanEHPaEfp6BYQGhd7Ph9f16q51LGfJ4nMb91NJNzd8ZPnno6nK6nqNTdqfrYc322FJoDr7veMZEiNsfdThKqPA",
  "key16": "4HeYms8xpboSvc7Ywd9tFBtUP5gdEVgsWbKzTqb9ZkceSZa3uGpNVhitowtHoZbZFyYtxpnqTvPcmcnWtPv5bGjb",
  "key17": "63nmRDH3UrZUDu5LMza4e5k7SGd8xBYugFte3xjB1DmD4qCXMmncZn2UHADp22SaXa8R2WVP4RiLHiUSYfqewGAy",
  "key18": "5L9jeYaX9pKXAjVKSequjfMd4fuj88kLKazSLJDe9EnQU5CFd1BHkNdh5gsUxw9JPsaYKrLiXA1W8b8iroGkfsQA",
  "key19": "foTfatxBKx3fRTYz6Tw2rpWwBeJ7zgshzfXKp5NvFje4qHuuGNcmbdYMhvRVjrATAsyU3Qf7uaT22ChwhLXKhqf",
  "key20": "2yUaL5cJ6nTUsyFGQgyAtJVNM3oAa6EiUqsossVQnhKMzuixSRP8QU5BFvR4dzrwq6g9DUHJYYNj5ETRyYydBxzp",
  "key21": "GskAdtunfvjUtyZ3wuohmG6GD1hqGb9ubQxKWwes1E7N4w87eybsGoFNAu39dZpRUQTMuUuPb4u7zz4RNAH9TRm",
  "key22": "4cuVCCKW1sCVzNFFAyG8QzPGuWsKPY9Raq94sqHgeNcxh2M2PQ4zGnmYiFvSDyRRgFxNDHwgxe2uBN2BaCYT53Sk",
  "key23": "5rFxDpg3TKUmW8R14q1q37SQAB84QiujfGg9Vru7c8KMesfu17rckAgXgvdgRyM55Fn7daukfUZghQMnLRwwgppm",
  "key24": "5br5DYawQAciiEsZoFykEnTAyctSYWc6QGtcwQMuUFqb127tmhpudF3b87b62HzagVB2kmVCtsX7616juv18jT7v",
  "key25": "vfhuicuV9GYBH4MFgTrs2JwmXR14uTQqscabrgmLjJcynLFv7bXhbrRikupBu8VdDALTuXmhraPhRq8DRXMiEcx",
  "key26": "3BzjZ8ZrrLxxCQTir5ns1tf74md7DegN4z6Ef9tA7Au3HCyQZo9J3C8FfgMzRoEk1ZmLrqzJMeQSz1zXzUahNt2T",
  "key27": "4EjyCVEbpxhDS6FzwK4nbfKsuSyqucCbaiaxikFikfU8D89zPPbXF4ydRg21WDoyw4LhQWdnxCVGoHwJsxPJswnK",
  "key28": "54hxC1pgKaJNtKvk3D4TyMTCRvVh3nFr7xsZPhqaT5szs7MihVPXms9YroBSjXLkJXoJwVNGhtoDiGfa3MvLZeWu",
  "key29": "4t43EqJUtxfiZ7ffhYTaEfiWoFLTaJqjCxZ7NMrWEWESpbnrc7j2ujpiExJsCzn3k9w95jig4RX8nFBQz2gnG9hP",
  "key30": "4BPTvp6eUgBfCCQFkGDjo4EZTgEQytYoe37gh48yaVyaUYTv73ApjzuGMbKN4xeYhicNcKkbpNvZt81Ssp3mDzQp",
  "key31": "456NBcqqJ7kPg8BPJd7Amz7vAouNUoBZwAepzZHQt6WECDy3ah1zNZ3G2trn7kw21sMu445GPyfeZjvWPEgfkrUM",
  "key32": "Wa7weJm3XVwoYfvKzo5KKHizN3UJMc6ZdHF5xCHhwWzndG4KigUstUEMSd9Hqjewk51RytUQ4jRLTTpvbrGy8Ma",
  "key33": "2n4QovydwTg7pK7ShfSHcNrjkjPgS1Aoz1DsUrrLCZurfFkPo6VJH8vbg7gCeucLgKGySAvjLDm9bTLfJhwrsGDT",
  "key34": "58UGg3UEFNu2uBPbxPVh1mUTFcyLnjSDJTVBNvRfjpYuJ9wN2AHXkkxMkf1RnUCKDs7eJR3a79RBPkJfDMrqS1uw",
  "key35": "n4GruV4tAZ5oRWdDpHS4BjuWkMtU44KEqk4vgAXKxxaijqpiw7PnHZUQwPSdgGCSCaYBrySWgdc5gqvS6kDKbpX",
  "key36": "PdTMZg2ju2y6Q1eK6HXYFRLmoaEKKvAizMdq4pT7xBDZ1bLB5LNx5QBbqGXzuoFrkX6TjEBRS4vKyZGPfuJehDb"
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
