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
    "5HwQKFUfsvf7tPAifzLCwiSQWYUWuJbPPn85Dpdv5XCXMsCj34iRvVigA7Z5wcyQ5gxDV9EMcBQvjJvzPrViKmhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YNmR8SbVmYtR9oAu4zfCWM5JsQ6eqECpLFMWYaGzF6r2BKddLgYKo2RxFdWJoH8mnGAYVGpekfofyrmdf87PoZf",
  "key1": "67jJWiuNJgqZMNnLtKrDRY5HqUmhrCfeV1vxdqFZxsKmajVhDTTAhRq5xZ7Hth8gJeUF6awb4qawFToJqmJCLwm1",
  "key2": "3GUcqWfTkXkw3BS8YDD4JDUKDUejMqi5Yu4o6ikq63iDGjZQVAhG3JgCjhHyAVFQuCffAPQKk9uJjqxPAbqq8keB",
  "key3": "mqjwgvNXYjfchnz4XbFPzZNXBy9yMdiKoPM7Ko7x35HaKyzHLMy48Jt98zrFD6rQSzWnqXXPVFF8NUXW9df3nNR",
  "key4": "5wE1e44EsdBmRcWou9Cb7UBotnAFDh4HNF3icTXK8FkmSHqsrp7sS1zZwwwM4mupWeW7Sj99724efgx8MUBqtCpr",
  "key5": "63b4LwAzakgh9pFqoFyb7tTLf8tiM1JCQSwiANiCG55pVYcZYZVzfeUFsu4WBWydmQ8xvNyHY3wrN1onWTEQNNGa",
  "key6": "GJA74pcyu28243LpLo2M8DGk9qiMp3egwAo7oyCPRfqtTYa2WimvVpxmZmgVPBPN67w1WDCRs1NCmXr3Umn8hbc",
  "key7": "3nDDLocVnzcRLjELkTnDbJjttT9b1abT5ikSuhSHdSDtpJzLFabKmAczHbXk3vNVuh9BVQ8eCK8k9A2S7hMV9wE9",
  "key8": "5ZktL6HA1Pzm7nPUzweP4KDkiPP5f4XRkGG8pdx2E7Bs6n5h7WKvzJKDRkEjyEskvs8L11fF9n4q1dVyyzqPqa9E",
  "key9": "2ZoV8USe1HKLpeut2acSPzmexbUpNjTva13cQCwzULDfxeVJbTqXN4d5QSEKW8mVQev8NJsr7idgSujgGFtnpRzz",
  "key10": "2mSJvGNJZje9BXXF75rmK25jpcWF6jiM52geeZRF9oJ1Cd1Jfv5hqqxZrnD5KPftAzpHzSL56zGd9igpfD9if5dN",
  "key11": "54tYYNcJndcyj1DxJEU1fPD78C3kuZajRmkYAK9FRBTTiUK1HBZtwm41vGDDpSHQpgBS6oEFmZSJiZUzPtGPDcek",
  "key12": "4bTsth9y89Kpt6o79Xf2Hg1c8sn1MxHU8zc39FFfoihAhEXPUqwFa8DNzjaCmg2XHECH9dvTHfd3neBDH9heNXg5",
  "key13": "3Q8QYDVDrziHF2gEjRjJ1vkDywUsihCJGqTc6W1kFvU56LL4EZCMhtavYNqJmudZJ888R43tKxqDtaV3hrsPh77C",
  "key14": "5W9cyuzkbu56dDrBS6cJqjfWdZSUXkipf5AtYYG8G1mQvUdzhXAHzNsqcSiVJhQBYTodmZDNvPecttNnfcMLV8EE",
  "key15": "2LDvto1SXfq4Pbr3vRy9bSQh7uY6zAPhpf4X3qtYpDhmaYpnbFVcixBJ5nPgwAD6z8LPrNLXWfNP5nGvwTnJ2L9T",
  "key16": "3WgJMPCsBxSdifgJnqa8aVBLckmsy7ondQUpg8WHEnTPNGVTTUUMbrmFYpPKJqjjm3q9gmMr1CD4ATWwdD1woY71",
  "key17": "2ZzHbqkQEPBBFGsev3RHWzoiMy1mYVdgL1eMg51R9kaSxqBfNeu2srPznEppK995vPazaLDz695Lhkfx715NGLcB",
  "key18": "oWJCVdA1uRX3XtN6udCojFLxMpdyaZyQFdQfYCeV87RbM3bULUFWtg7s3FfAGFgZQ39yktHJkxUgieDni7TCBTp",
  "key19": "2FUBn7ffKWpxNvSEkWnpGjuQok3ey76g8xmd3d4qAuu6kRMWbXz2AAQFRAncmf48k3hFwNx8j9BCrfKQB8kERMP8",
  "key20": "5kxCTo2uimmKQTwFqWFETEf9SrjPGtG5bcTskVorHwTJ8isi6rdcEL3vHxMNa5nD6wDoCgUXSbdZwCWerXJ5FgXS",
  "key21": "5PZMZVDPon578HDQy4WyBBQB3KJEXy79pVXbsmkfY94dy5Sfo2t2vqVMUXJ8cHfnzXgt7kMJCh9w8PaEoA54ArM6",
  "key22": "4sSMY5XAHYdkFqQ5kxFH4rVGT2187sSis1mhLEyb1wSTgp8LEZBsjnszhEM7Lr3PJKALS6uwxvogxBiNkPjLvH3E",
  "key23": "47yPySrgQvmSNfTjjp94X5qi5p6xSzLPTuVEVEBgdst1T2sVfyVTxu9PrULEYVzAkTMaiT7a2LuAMsd8SZLF9Poi",
  "key24": "kREYLxUURJCsbH6EAp9DRTkxQ8xn6ozDouM8v6PUq2oNrLPgfUBhd5PWc9TGBhEhXpm4Gu5cUiSQ5Z6r5cCshxE",
  "key25": "48UG43myDp3DYfdWs4PQNx4KVA1B3s9GqYZUFe6LoC6fknpk4XGsgQdvuyyZN8R3uDk26BTePYE6YT6c2nfXwTeJ",
  "key26": "3dJ6AnZYKYY5j4hGbaniEdjn4MnczmVstK7NRxb226ppLieZJwjdDtGV5bFRo97Txi1AcgkgL1jCn3a28DN2RXuz",
  "key27": "5c6FN736t8YBfV19wiPvDQV6iiRD76naTNpDsnSrevUj3mZMuDQygACK7njuorAu8ceAQugtDbWdwDdZ1QkzUWZT",
  "key28": "RKmN3sW1WswLKBDANariGcxth8LczUJiHoFQAAQ3nh21VV5faAKMD6BD82pLVWZEtq3fygtDZrD1QutAxGUWWeL",
  "key29": "5zJsyjQhRKN4JuNCj24JZ7fzYAoPk5KbYeUEQXUYG7XXu8BwRwH94fARRLgDgveExjy92UKtdptGPayxoVRU9xkA",
  "key30": "5yJnWXrFGcY3CqTs3GtToMQAnz3Kk6Wi8pcfcNm8zDmaawP53hgtjpVJpaJ9xbFK4SXyVUu3RYBkDD4g9qydKDxQ",
  "key31": "5cDQXZUWmTEAzHLdoba4XANc66ZTrYqTPFnFsC8TzpXsZ83f7eEu9JbT3gDEGBgknCW6Vm5MBMrUjLyLEsRBzipu",
  "key32": "3CEFM5TgLyrD76ZXPZxYF9FX33cr9p9JKZWwAQ5UU4UKzhVjR8WgPREbyJvh4JyRepM7iZiWL9ofXNVGr1PoxLvH",
  "key33": "2j4hB4kmUrUYT4bWZB1pBX77bqmKD3XuZByUATJpiXieVwhCNrWC6MteqkL33ZGjSc4FcRidAe41HPeDxAvpRQj3",
  "key34": "5amdkxDGEz1PEw1uNZD3uFnaeMw2mBhB99YrNsbXopWiz3GoCpL5YEKnzim5SRpTmWrPpfcauVMFg4xHBsE1JqrM",
  "key35": "3R6WnUjVcApi9VwjmsuqRspZaMiWDXRDMG5gtKiWZfHwNiuCEN8gHuYTi97U2chDDy7tSm2Q5KEVpE2x31Maiy4g",
  "key36": "3dPguzhScrmnBDiSqkndFeuHoSJBHZre26NzMPU9RSfoRAp9EEx2PR871EkYqSXXrXwibM9hviz5V6ypDrLnyXMY",
  "key37": "byK3PnigjWBtdj5iwXWuEk3Roef8BdX8CwsVgAmC57FtHhZ2DjD7zRf38jvfraQbo9sY8R14CB2J4Nfx6GvopYF",
  "key38": "4fXbQcnurJrTRaTCagYk93BNiRVwbGoP4hbW4QwHszxz8m4hL2WAY3QNYuXg4XYmXqNRdwohsCyw3Wy4F9MqCtrU",
  "key39": "2QoYAdLuCw8jDQwVHXwQZ2feSanV4fwXQYRLkDcnCyBAJSxcprd5ReyhM8wVaFZF2DxdX2nNtUaxyo9mT3eRbC8R",
  "key40": "3PPutkd1PJYNVMvWGHu5aqLHZVn6HbHhWA2rjaDEBehft3kXR5ewnUMTyTyLxpEMkAKZUnpLPhzGrFwXWrN9qr4Y",
  "key41": "5daUQmdfA8bxtFSUNeyJvemaksPujCeDteUeiw92BbDSoCQgxjFe7BcX5Ma65PS9mRcgWnwnRnCztsAnmyG4FaCq",
  "key42": "ztBAdAmjKCYduxHcEUzWFKmfBrjyqiBvKEuEg145KedK4ifpYpqB5bFixgDL9ksNWeRZqUb1ET6woeGam7a5mb8"
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
