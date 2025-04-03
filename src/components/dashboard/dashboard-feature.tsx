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
    "249SwUXmFFfoJcbUZZtU66mCnq5TNMgbDSgwTh9tWu28UkAHhiAs2ypBTDdPr8TkKYp6RpMc7tTaGCUKsHoEZpb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "68LPku84faDLqjMgYnQzmYUo9GuoxHyWf5S6xHzninZbZK3k79EcxeLtQ9bXB5Gg2CoMy2yh1SCpHPpf7g6eo2w",
  "key1": "2ntcfQGK3E4qCifkUVxhqqhKg9eKytLqNfiGuy1TUFjv64nXpFgiywg2yRhojh4McUTVTPd6M6Pix3k3e5gWJZmZ",
  "key2": "3bZDFz7nBYdQuYX3gKVgVZivNP9tRu4aTCsAJPDQ8d1mkh7cgpVSJwx8Q3rNGU9Vvm7UWFyMhpwTHyArRkfe52Dm",
  "key3": "25NnzfjdBaUy2DM6URaEoVo9urm2PaPJe4GXJjzk79bwo5AwYQoqWRRdL2DY6wm8gqLMAHSM7sJz3wpNCvR5NqDq",
  "key4": "55frDCQoq8eyD3ZtLswuk5KGHzBHT14Sm28p79YnST2Ao7NqeaG87bvfQb5NXpYuUzyBUhvPDiwsxje9mu1jnGr6",
  "key5": "58Nrb8JF9kpX6DRSXMGMhdhQk2GnFHaQ6KhtmKXFbhk2qR28yV6J4RHy1WXeAupvb5Aw7t1FGo68HaNngijthawX",
  "key6": "5Lim6SxpbE3bJkC2DA5GekrwTprE3gMYesdSu1DgER66FMnUrxRLDmd2uTZf4K9M9WBCi9kbiM545jJVkGu9gWTf",
  "key7": "5SvbGqfU47PdzcyADBKzPbv7KPFwfs4F1n8vX7NozRJGcdfGjmfJB4suVM4dTLyQhDxPXho6Pk8jC3YygcGsq9zJ",
  "key8": "4Yx2ANDrnL54YE1FoYaTz6DzVxpMaG7p1wVeRLvYuZvy2vCLSGuPegR8vWSePaR1VPg1NsHLXidW1BZyWcb5qSDc",
  "key9": "3p3FUSzwJvSbVUcYpG6Afai2xstSDmFS6Uw8KbmsUrhXNTxmkkkPoxSDss6L77BDm4Frj2Pt8ETbFckJDcCS621f",
  "key10": "2phf6w1RTxYFYzAK4ZTMrP5gqFv1yzgkRs7mSWUVYMsVRXG1wAm5EBdNC5MXUbHE6SWiY5xj6mCytTgAwepJKFSX",
  "key11": "29GMbWJxiFGsEnRCb9VZJtAQ6kJ1RGtikRmaGLAE5LvraCPDwTVuNUZB3QXr1JK26QQ6kaQd4MpEY5yv1DnzaPfr",
  "key12": "5D39k4NCXYGWw81WLhyB238M44ZUaWYBefVi58p6Xj8b4X99zVBBp3RPLKx41sNs4ERGcFrPTFqPHgzhGHjDAVgT",
  "key13": "eLQmMcsATtLoG3SJ3Tg4ThXF9PUhvRGdBF4zKaPtf3JB9Rxsshohrtv73fgUhHmzx1Ji6YZJY6RXhEZNQB1GJ6D",
  "key14": "13muuJ6Fm27ooHxWVCuvknAQwRTh3zSKuhamoJ5VbNauu5CfHvfPtwzvTjTj2iuuXYfk5ARcaQbGmwjFd1oxwPK",
  "key15": "3MnxzJYBAGHwqgDDoMFFohuWxJUgRRe8rJSiA4U6fTSXt6J1w8Uh43NbcjA5Czkt7AttJ5TwZ3hfVDvabRdV1jr4",
  "key16": "3nD9Gf5gtfy2gyFH6CJ2Shw2CexMTnf31PMbyuJSzaokyfuag486pFHYWEjLUwqZSpspKzk81vwF6gS378EGUSsT",
  "key17": "4scuiL5J2xCDYQt1XVicYcftG6wTPu1mQjxvAq65JHWgHVV1AzHEcrGa8dkyiEPiB5pHT4dyAK8ocJmPCS387X8f",
  "key18": "36Ed6UoAV7JLx9VxoeVnykLZGvp6bPdffGbeUag3y7BuU5Dgcdj9NX9vP6cYX3oK5RzM33sYbcsw28wxoybJ1c8J",
  "key19": "33umESH5yZLPyw1ACwXPHGDK2nKLcaKgXrxYDcwRkLEDyNupA2BiHwWdWbpqmy4kfBMqsvaKxE48Ya3jU9EyG9TU",
  "key20": "3moDEJdw53cfAt8fsADTkAh29Nd1rUB3ekNp8VfePrtJDhSk1MsiHm6UrAzS3Ljwi2e2H8R6ZXJ5i9wy8Rrr447e",
  "key21": "3X1XvNgcKHMzX7DNSPvLzQoSdpfSqo57cZ5mWb3hFoHbkAvFH5zytpfeukTDs33eKSGnmhm7zgyUDwzRGZungAgB",
  "key22": "LCSUmZcUdRnEeY6si7HQgEBkdsdkZjarmdoz8dLFTVNN6RC9YA2HrUY3JMHW5ofpSY4uDpgVGBs6ycPn2YEZqAT",
  "key23": "87kQJxPqZUZYQVUkxQwyqHkhGUsdiWc2cp5tqmo9Czn9opi6SD2eAPDdbs8HdSvZ7owrbxBBPPJaVte5Ny1snzV",
  "key24": "25qMnGrb1MUdbPHt5yrXqEmVG1q3b5473MrdH873YRFStaS2dWQyRTvzWuPdj1SLuKc6j4dv9PHPqnvSiGQZpfgu",
  "key25": "4u3TVAmE7JQ2ALZENiB6f8rvGxco6fiT2i6hNa53obFcUVu7Ju275WihaDTeehSigU6ryUCqpzyxCV469iswRV3q",
  "key26": "HFREf3npseEN4VJRN972HhyDF6xZs2TjKYd3JjpHmKuynP3PTWDuG42nUDPzqvDTT4ioUWcWd8BZq8JFPUVGibR",
  "key27": "387vuoSPudvbcmVkinZLjpUGEAe85K3AHr8qp98vdwJnuFR8fnQwCiFXHgUJXdrSpMVz3xbLAYj9cXoVrav7k47L",
  "key28": "T44VFmXkv8YQ5NhSbqksDn1LZp8BVa3DSehLJDeMjk536rgnfuDQVKyA8pjyoxK1ZQywJT2qHSRGc2FKorYd4DC",
  "key29": "2c5CuXPczTGeJPXFymsBEGZJFGCoBcdeHZsNDwkBoAMX92s5NzTKMRAQs5WUQkPMQdFZ3Vi1JSgmgbGQhPkAP2wq",
  "key30": "2LHmNSsVVu1huFL6Zgk45XxdAJvdDGtMApC9ZwJp6egybLLSsfauvNbhsoCzTGvjdhHXmfjqhKu5G3RQj8CuN6AH",
  "key31": "2SQXP1S2sstJhKwNyy1KNrijNUhVXPx1gTJiw9ZpDp1PmuPdkdT1NUymwdeuzzAK5MqcorVFxywhHryrfNKEBDva",
  "key32": "3y8yuUmf7ejZvcjjqrRDwPd9SjFVrXHW6V8DZYdVLBhs2CWUjXkSdvtCFtCzWB8mP6J2MtUgSoPGbWU3DPDmSGbn"
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
