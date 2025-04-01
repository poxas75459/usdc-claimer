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
    "559Cc4h92jjz1qaSFG3eUARwjxrmHNy445Logi7H3dBamZVEb3ZBt25VhH3edNSFJjRMm7u4TgpfkkUiSVB5f35G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53xHrzc9XmGd7qnTxT8XDQgwEn9NfUpRgY19FfteP4EXcD8iVNTpwvMpQfL3qJH3V5zLRCVSrtYShSsCRWRxjuPN",
  "key1": "3rZXtemKpFwFjawYuzkAYET1dK7qWrG9R3ifPf4XNtkNghZ2vok3yAfet8FLLHdfLsyXZVDN4oot9NZvaktg7WDZ",
  "key2": "VPWq2SyHVVMgVHBenKTkUZmL4jcioEuxCSQcPQj5M5tVFnfE8pgitsdDCHeMwASVBx1GQAtzMm6pMNfh3kRK3aQ",
  "key3": "3xm45aVFtK32LDVBjHYcPWDNq7cmRbewL11Eo8Yz3jyf8w6HRDmoTXk9gMkQx5eQF5mHUdyjgf6wC51g9eFLww92",
  "key4": "4Vjxu5zM9ShVi6yjrVMaV9GaRged59w1N8ApQL76gZ52i2gT3CY6dbAE13gfLvif4z6B48oGaS34ne7DVaYoSAYx",
  "key5": "2zps3Udp58hZWGSsa7qYBxDJbSRik7joJm5VSQLt4A3q6DeuG6JhP6nZzBxetGN71nWdatCoYHjsUJ72DAsW1VFZ",
  "key6": "LdGtCvTzQiriSmoWJWiwWUL5y572zeezfjkxsrPxGmNmGfaQktJWA7RqNLBp5f8kDMiRjdBuMVsaQhFCX1BvvHH",
  "key7": "2qEUG4ftr4GzHzJMgbCE6T6EppS9s9os4o5hLR7qHWE3JpNjFwGAsqeuzuMKg2wjp7kH8xfSnxjP31MyRrCPhfgi",
  "key8": "5EqqTmGYzKNVtwXgMxpAytoLdaFxaHtHnka9Pd4mRWhVDDsbxhcfnhmezcYagAenJLwPQf1swgMch2jF6PkGfavM",
  "key9": "3AJBKCAkL1oVPdFzVaWRZsdyRpsh5khT1pZCRuefxQ3Anb2WGYoWdKuZns91e9i6g3KFFxdZCay4JsZUjuFgG763",
  "key10": "3ijHkZiM4D7NXZTANUzd4X1kJ9tL1y9J8uiGSwPtfpGD5JEkhhjrPDjtDmXzPihENt7riN9dQvCgTFKL2dUCqKuD",
  "key11": "3stBeuYyMsQY6iTyw7jPjMg6xDYMNEvkMGXKP7Uk6RKG2GjqjKkSLc5VWYTKQqsECZ2BCtTDk22hHPMk3DK5ZWts",
  "key12": "4JKsrg4mXaHU4urAxgxD4v7cA9LuhJWMpikC8PdGZRMHwpaBxUhgeiWmDvpJbzN7A4a49AsZ28TwtLnRGDy85hjr",
  "key13": "5bu1oduBUezMPA8za6NnEnuwd5At7jySUcZWDXrjaJ8vYUHFgCbfKCpsyXpCFr2CfxQW5aYRcwBgNYWxjBiPV2zQ",
  "key14": "62X3s1eHWToXDgRCjuXFpCQ3oaZViFHzUq9mPxnJBhxoxGYiv8kCUijpbyU6WgJAt5wUoAcn9WXP8oAXezNHp4KU",
  "key15": "2YRU7wzp5KMt9mXnXDkPTGNLABh8f7M5193JFSGosSffeLiTk27JVfHbsnjYUBzCA8jiSzYnLuXAPXLP7WhFxmC5",
  "key16": "2yQAkNzrsjYcQwjaF7KYWLoCCQvauDAnCZdkXNABqMAEweFPYxVgnVqUPXQ92gYxYysefYRzZuwfzt586ukH4mtM",
  "key17": "3BnHJpjPHdZMsZT2NSHoJUz8VaD6LdTnHLdMhxYyoh7qGJw9AKJLVBHgGoQKfcZJ4MBtiZPAMigDyhhECjRAMqmk",
  "key18": "3cEYspePL1VdhHDPgtFvt8RehPjbP4j5b4TE1CvXdn72nry4a9ttBKSaj34mr3TgsSkCMwBJNQrU1fr2WjyRDGqJ",
  "key19": "3fL2HDRHDkffiyvWT7X6Q4sndA5xJzCohMPqVRGxa8hdrZdKxsG8WBcT7vWDbKzFT4vbvzW65ARhn2ZLFmQ9PC5b",
  "key20": "5vpfjohcxiRSXfF95KrkqRs1UG8mFULYDLwXMa8Xdyph8cmqnkhHF25CNNYZoX3ndvdFVhzz47APf5JA86nkigLb",
  "key21": "4KoGbJfw1gT3RCjSH5jTNUwQNtTSTNjamcVs4QNe9vqFTq8ZjS3E8a2RWUut9tS4NmxLmP3EpjEedcXY7QirpeJt",
  "key22": "4QzuRPHbrW2RWtwP1cZ2CNCsqbNgvbXQ1twtzFoe4eBbrmoLKAdmyv91gHanZWFDNHHLALZGvM4ypWNaevRzXE73",
  "key23": "4YKVnVuht5YySSEcBjDzYAjK2jacSo8FBT7DvcwnLMqqJtJhJ3Ctx3dHqa3TNwudvJBbDMkC69oczT7KUm1T5BRz",
  "key24": "5MXVecyBcpo7NtnbZbyZg3PFt3u1HYqSw3hhEe1KoEDNjFiYut3ErvMqc56prnqksX3NYRas3sTkYKvEPfS536vu",
  "key25": "4JgrAZkrsqQgQxtL8nWRizLWfFASNx3H7XBDjDuzVEVfykNPXpzybsvFjm6euquPR8CkK312Y595T93EAkbnKMXx",
  "key26": "5d6uFyoC3f4sy7FAQrD3TBxfxZTJyEZc3TKjCk4txJDQc7zpukXKHRkrKiwSaXFgxvfo81ypYjTm3SidS1Lk5tSk"
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
