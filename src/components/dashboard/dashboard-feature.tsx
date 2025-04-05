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
    "4vKtokg3ouPPXkCvQUNmkmoiqq74shUv65AcUtv3VfHz3xWwv9h1uADLGTGmQkrvuZWjgSjALWBNsLQwDTsMSAhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tfFg3uYG45C4cmomzoqjsEyDyzoAz293ogEGXS2bpaDVxRRHGyUVTt9434yF6XdcQXT3XxUzQoPrby4x9x8o8Zr",
  "key1": "3X6DWChkHgCPy9rRf8JfkSmUJa1kSGoAMkN2vpbJ752GeqrD4q14L99wL2mJArz7Esm6dVqjRhioYRaGQ3cwFmUc",
  "key2": "3yuPj5QPjhTjXVzz5EHpBGD9mFUc8GXHggMEpRkRWHPmvuJrsYyK87L5hY5SEd8wiPV4r92cDzXsQb497oPiSLmQ",
  "key3": "2yJ7Vfoh5vjkhoqJaKibWJgQg1nvBMpWcbVfMSeozXSJQ2vq1JGvX3ysnk1NsB7SdECmVbkJQSRPpQYXBrNRkf82",
  "key4": "3icx2TdiXVyr4wAZ9FA3J7DBbV4aKobG59i8GmU4GdE45UH1hNaQePaqGz6BtZK1ukk6YmNfmkQCDfDGh5heuvkg",
  "key5": "2xerktwL123v78zjwBERVE5278PB4NCRoAyLqN1hx2sh4tpkyVjokroH8zFcuP6sVYn7hw7XLUUFLQrS4KosVta3",
  "key6": "38F9CnTw5DMqJ4o7wpUNZzkGTMx45aDkL1ojzgczc56tk9EG8vWp2b48XYgJYdDxbSSHmPaMo5TdUhE1yVTRtRk6",
  "key7": "2hoAyXvdtybtH3KznMGbzemrqVGa3riiYn7r7FFZs8vJS69nDHsDwnx7UKhWdGGUvyAoK974jLjLALwRSBVUmdtT",
  "key8": "28WRptfhsgVYUXoRRBfDGCjNLZizTLWCYxjJPgtJjMKfgDX7ZViaGXfRW1pE5fQeHnKeErRtvyLXUkA2pq6GgCiS",
  "key9": "3HJwGGsdBkPmqKNMobKvD4u6PAcrihj71pkTneKrMFASNhoTGEuSmbDhZXq6YwygMtE8RYvZpKeVnBhnW1cyBVef",
  "key10": "2tMn5dAYavY7FFXnB3Wx9BPLXG2Rbg9vgBg65LiaHCPCEEmjJ5ZfvTbAD4KBwq43aVH1r5f5MoPb8bPeFtaCV8h2",
  "key11": "5rzwTWTW1LrRD6kG9UydSKL8VwTgUQzaFmem3XtqD27TLXDrtBtK5UfJEktc2jaGRct3eryBRg6kvHMfpDxaGHr8",
  "key12": "36Dx9fNp5ekm52v2r3954aFVGunD3LVp7ydDeuXtQwWKwMcvStkYGrd2HXrG34r5pPam3gzKKwsFShReCQiFaXDY",
  "key13": "5tkYqiRhzXezy3pfykV2b8xPbeeGsxCjebQQeGj3ZmpVFPTuWUHmABbYi9fSew6mCD5WKNkfCCeUgDmqfyALYkqW",
  "key14": "q2zE1F2UnoPtEh1a48GCEGogrKqMrj6TBF2xz6kAi8ogPWLg96ud5KnrVy1HeH7XnovNHWtUge6Tffoi7icAWVJ",
  "key15": "62XkPnNyD5y5FLNrFi67Jy44UohiWX8r59DYB67pqZNRAumTfcrCDs6DDnTePdrDuw1DTXCP2kkSEr9yvZifiGKV",
  "key16": "2rN8fxi63cCAq2mdNa9DUjmA7ABGK9br3RVjwugsYNz1hhQy6HwcaEiapQ9qm2cBnuyS1jBd7KyFCyET4vc1YF8b",
  "key17": "2VheZyka9QrKKxhUjCvcbzhDYznF9Ws7CNF8GZPvoEqUHM5KPVZoXqGxoyCzbxGcZiyRZXiEFoYX9XNjb3nwkapY",
  "key18": "33b3zZs1qyXViu2q6G5SRckBxYmDwagSsYenwAccUCbkZybCcmz2Wnsir9R4p8wbSj9S1svv5HfCP83PjhCGrBZN",
  "key19": "3rszah1jyYiTxWTkMHf6wikMr9aMYUz1xzz2Gfk52veWWaycPggfPRgkqp7nH194k1f1YXBzog3MNFbQ15oJzYQe",
  "key20": "24KEHTDhXxdGnG7iMEhsydY48aUg4Av5sZUpxFkcoj2s1wJytHrPRpgYMqZ4no52Au3PbHHaeK9neL2sQdmsqWu8",
  "key21": "CbGRnDuSL6WU1uSADHxXnnVaX6nJgRkL3wgpzA4nDi2Uy2tmwuAysqmVeiEvFirfhdckNoGSAGUdmHMBNUNP8Pj",
  "key22": "EdCQoGAxL8fcyb89bDGrmovBmXt3HAE4ajzT8jvtgV6gKmx2S1ZGY9Pbu6LN3YUzCVEXNcBMpNZbUYdJV6KiyYy",
  "key23": "5CEo3MkxFaXCQsjyRAvFmVrhFj1eDSgBKb5UTPjf9VRAQJszwSM32eUJXfAjK7QLtGujy8XGPzFcjU7kd6E3tw4H",
  "key24": "5SDwCq49B2KMQ6mKHXr3krQk8JZVwmxiKJDkewSoEzPN9vEBG4BiQYi9uNQj5uFY3ZxKGEF8qAV2VJ371KFiJeQp",
  "key25": "1Gpjz1EQ7spAaS1hzBS92MY6UhXyFd3LDEF5FNGLhe5vdQ5KTjebqaZwMw7TdTXKpZpibvuUEnRk5YBXoHCaFzg",
  "key26": "uRvC8Sbw3pP9b2pGeL4WVXZqY9GBK3AQWDjSxmL2wKqTAYnhBfeagMqpqgeCzX5sEyxvyTAMgcrY154yuCq3STD",
  "key27": "3q1o8egJoqTgNfNXKg52wGgh8PTGvBG7S9ZhWjBSAghWVVpQ6XUHh9WyZCuEJJq2KhoeW8EuzXwFnuGNeeNagm6f",
  "key28": "TzT36TgvoQbPRHeXio7r1D3282h7y3oT11RLW99Giso7gqiqXFesPTJCw899epG6jVY2dW5qQhMWuWPrSX4n87f",
  "key29": "5bac67vbNyFTEz19cW2tQmpkkB5u2LL34KibXN4YUfgdkeST1PT4RjmUTWL6kF3KadhPBx39povoNfVLpkJdyRg2",
  "key30": "4Q3CXQzPLaTPT1Uc266oD3RdVwGZyqkHE665h8dxfY7RhMAneBfapUuH5Wan6KfaG774WZYykv2Rceg9A8evwxjY",
  "key31": "3CCNa4UbK1zbwMkJNRP6NfF2qeyiUBLokUAV7U1kPS6nPBsMZw8mofYoouJ4XUVwXmUCHfCBpg3ACCVbkUBeTSHj",
  "key32": "wbnhTsUPiVaHkpqhTEuFcXGssb2aCzRHYhfLJby3PEBSGV9B5me1uNJsgzHqCCtxaTZq5fafG7ZB3HzUMsptGeJ",
  "key33": "5WFdob6YuaaiwzuSJD6cMuRMyx7eVnhwruZZxcBxCqPpZyHBdZBihcbQur9ryF7jWdHihYX8ANfghZT717cpTfLp",
  "key34": "2UUknrMuFJbZoA6ZbYH3cwRFETipGAXVnWyWv3AQscPXNbWRNDfTgQeG71BA2YhDctL69TnpH7KjgLqi4dR7veuX",
  "key35": "5VmzpD3seJBLPAxKJhqAwPgUdYSFTsRfjBkKVJW4uN5rADuiNv1zWQghsCgt4VVe7s753LzNnx8oudYSNidv989c",
  "key36": "4asFsToanShLPF5qL5EPCKmHqEtNxBVGVuWAaWAKu4Rks5qZb3kknL8JUMPMFr9yAPZC3bVLCVDwEQPfGBk47WjC",
  "key37": "3MZ7kD4fBVccDVVbxgPsho9urT74oHqkn2GU6tbXbZNr2TMrkU5Y2AuzeVdHyLNSnydL82Nfb5SA799KioHeg5Ju",
  "key38": "58wM9m7LVDcyWEDFY7fpkand2K4iXV4g1LYF5cdzgNZcfmkZUd3SnP5tq473bX6svoou6hUbycL6R6uVZptA8xsY",
  "key39": "24SwEe86NZMVpVAwWLox87TorFkRTzUv7np7boK2WDuiH9NHmP8F5s98YMSbbrUnEzLgruLFgDj8EnH7PCe1TyBb",
  "key40": "2m8jPFyswBFpinAnYExsJoYUmL6L66TJSPiYZhMxMiERNRmUsPcYc7P1Sv2zNxAkcbb43xRQVnjMbwR2YmfDdxd8"
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
