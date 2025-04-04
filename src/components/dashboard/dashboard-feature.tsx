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
    "f7Sc3sERZLS4XEytsSEnqy8f5vSDFT1MBqXwGFNAuquoU8P3yhoFbE4BHKPHS21shXgUyHdEDjeXaAm3NzCK7Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DnaU9uyNtFTd8iFE5jUWu3VV8bS6MkXY3CNJAZWQnS3WZWUJqUoc19BFfrU6HexMri2i9sJ1Wf4fQY1ouwYmysV",
  "key1": "4aGmFexqJJBu6rxeD1UQybk2nMkyBDmrCwJjFcpNyPzxzXURfRijcgbj1PukcvNSwqSKntiSzMDbvcbmfr93vRub",
  "key2": "ZfU2TWYiLzhfvQXfNfESymDJQnUDVCRPfC1x9kzozHuzridEGPUZdmGhCidpb2m3x9CHMypBa18DwD8Exq818Jp",
  "key3": "2phG5noNdbMbSxvMugouno3SiTF9gZh5w2uLtacR4TXPxHSV7bCLe9SNoyKFKq71PvMHZ4s6DavaEqy6tRdkV7GJ",
  "key4": "31n5x9Y31VZmUQ3ofNQpzL97tDbJCJutw8fhedJ87Tipfi7SLffuCN7mQvo4WJACnTuV5JcU6tNpw5JrUKHrLFMJ",
  "key5": "53xTurKJvREC733c2BaAPfPfZrjuf8TVCkbgrjAoZk2XNwWP4TRVTbekAPFdt7N38QojanW2VmS34SDkFNvMmRmB",
  "key6": "4Mbn9U84ELs1iMcAXEVb8Fai9qDqNvskdxzn19rWBwweykzUm9zqSukUkQ6GDncTwrREkEGYEwSmgSoxqSowas6H",
  "key7": "2xdBMD2rweZVhMmAQmupe1ZZByQkCq6WGF455FWykusNmm1HqtJL3ngAK2MNMYe37L5a7UUDnzxHedaG8EUGKM7y",
  "key8": "3tG1x8scUVv7CVNTbYwpp4wdH86hG8twJC9GK2eJ71MzAxhXgoS2d9wbLXFNR6diDiKGcUYQHfc8H2Xt5B6YYzne",
  "key9": "3kwjnes1BKK2esWoix1v8D8HmA5dgtooQJv1abMEm5gmURAWVVQczoGosBbM1MyXokr6eSaJnM2YGGEQQQ133RAU",
  "key10": "25mrUQHrxw6bRyzFR8aHgXsVNrKyNMDYZahkxhsm5j3UYwAqdQ32FvbYnSt4hf7BnNo6LpsDMwR6jA34fngz5CR2",
  "key11": "5tbn9Ndtv4Thz1jsJ5eiB1zsRtrRvN2YkvTqWt3bY2A5QrHee54iBcvawuc1CGurHtCoG7Lg7S7u8X9DwrQxzNeW",
  "key12": "5dcRKcHmxz9PUwriJSqLQ5qzVg7fzMZRqGnFvXVRNTDNYshqFoHmBBHq652SE3xgPXbkYkpUWBKewZzqvjBRoU5K",
  "key13": "2hEFZSXKxpWfMh5PLvafY3k5NKbYgMrM2etEPu2AppCo3EoJxcE3rFTnLA7Zdd8zdkzP4CNrxSjfYN6kkWWq5PNT",
  "key14": "3ggbFGmbb6HZzbN3mpuP6mG4ubHtPEKMz9UGqVt95Lh3P6r6nw3JzfYhgfcudFUQETqcHiXmX3RG3hMTAaUnwTzq",
  "key15": "BmWpf749NHTMFBvG6TvdnwzkeAwmrLQF2YXGHuqJqS6oMqxpHbTddJZyXydoi2ThzXSkq5oxMBkpBRz1qdCsCZ2",
  "key16": "2u8djnX7GqGp3a6d8UUppnk4CMFnpBMr69E14q75rdnX4qm6upEYUxUyJDpkWrKknWLZsSyeBhP3tXKH8feQAo1f",
  "key17": "3EwPK2DeQtfucSQz3WXpPyvCuNrU5ZP9gBbKLH8Asnj4HS9FpjXziBNqdVURZ3zApYWphkTYRMdWQTivY4bLwAbA",
  "key18": "32JEzkxL5N6AX4WosckKzKEkTT89MeSTrvKF4pqxE1TiuZR7RuMY8417ThdHbYtoLyhHkKR2ptP4apbrJjXJVNbc",
  "key19": "4FkBnk8moh59XnyqTGcKSQoAuAvHqyBcsMikrufQSn4Q64d53jnthT6qTZ6e1NjYsekfnjLxzcrdjXNMesVFBVan",
  "key20": "4j8XmbbqqvvjzA55hc8eW131fg4EygKjkkUMSb7A5EVG8YQ2xJgrx8TfVKJAYFM51EnaKBriSrDM1YaVTsZ8G9dz",
  "key21": "9Dejnvwc4smPqN6Y7MX1d7RShbjqhmYoF7qFfvzzfL6bs3mmmEiya9nxWDaHjAY2mYF24WheHVpG1H5QiUx9vhm",
  "key22": "5YFqEV6MTHWSJci9Y2r5rLeJjPwPFANJGN2fSf1hVwVLtJGvfasMY9CiBLvSnNvXdwR6bbb97oF5cyVBNjXJhhxG",
  "key23": "5aSAnn6ghmKrLHsGhq3dC8qHXfXQwiVcBPh6XyT6BQ4owgkvoqabncJPZTRHUfXN9uu26KVo9ckjNqVu8ifgQ4ZB",
  "key24": "5wTXNrXSwUtG5SThScN9Wctx2PKW4Jv85D4SBRCFHuyevMjgjLg4mTNMgAN7BpXbchNLePdX8fZAugRWyJwDCbMU",
  "key25": "5KELeZbC7FPURnF7Xr7bNF9twQW8p5z8EjavfKUvoffkRrcHRuFYmBUPP7sNLQ5ProtRiDSiFqDLqx6RTu51t4Uz"
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
