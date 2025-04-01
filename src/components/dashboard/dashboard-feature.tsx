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
    "63c1AVCemK3WoyWH17i5CubqNy1Yre6GEEF4W6CFCzeo6m7iP2FAzTbvogwvn47i76ZdLorpGWBYCJYMvkrYhfd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UALq5b9CeQfjpo74ArZbde6BKCgxcvtM3DdJEv7LJt3phM2mb8ZGLFdYBR7XxTpaw9HhKhY6hTNgewSNL16rrqb",
  "key1": "2M6Kii6qQygaw9k5oLWcPA2rg2PcCh3a3sdxd2pSmFncr2vKCspg3U1wefBvTmuf6tUJfb2uMjgqPRtDiy8iN19z",
  "key2": "65VaERxuLDgUPi52gc8qk4UBA48e5FgBNKrpaKMgEMdvmMJLgbotLBDEsEYG5xCmghDUzZe1a7LsChmsUiUzWyan",
  "key3": "56ZLRTxGenjeQFGXjNyRcQiNeKMmSWcYb3B9PwartJy4DAksF1P6dtxQ2CPxmPYoYQWPV1YrfDDzERQvoq2CXVZN",
  "key4": "8HNXLFK9vZ6dZHKK6PUFiCx5mUVyPrPuvxK9fX6MQ15RAAuVj7kxARHwJsqq8qksDkDfHT182B6w8byDjyLb5vf",
  "key5": "4ywyZTPgQM6hAHxAxbbhLCKpEJZ5b9QNS1cCrJCDUgsjDvANYkMpLPSxorVK1jnZEAbf3vWQxvR4REit1heaqvdf",
  "key6": "2Gh2urMsiDMU2fQrvb9LFcKutphAo4jwBXdKdPMU6Yr7QCk3rFDhYzc4sSoDkNY1SLhDype4TVe2oW5ozc3exkm4",
  "key7": "PXkGMyZDpatMH91WZEAhZrV8FwxTRchPogZFpc4nzFCju3T71ghKvhB9MRHDd3vmTqCLrB7Rv72FDU3xJYbqKHc",
  "key8": "3HeZy5Y4EeX2kMN6a8PZYXPMmsiAuc4TPFavAzuyb2S2Qkc5Hr13K6MayN7wi9M2b5wkmrouiSXv3VhVcyxvKmqF",
  "key9": "GvR3f4J7oHCA3LgtNTKy1T3ACBBWVs7y9i8yyW8JCobCz7ixW3eTD2ykgm5mKGjHgMw1TJmn3Dc7DmX8CYP31hH",
  "key10": "5n47HESmiXCR2rPjHhSM2KQiK9qK7hSxCBSFsPyZW9tGQA4EfdLaq8W7uJFgDRd4puAFHxmWPkEdYvP7PTUh3gUy",
  "key11": "4H9j2sdzawmostjmaswTbQCrMx4W2s1e7ZXfsxnC5NmGQVzz9XbRdW5akNASXaheAQKgo3a6cRPNeBy41waGzeHp",
  "key12": "22dwBpdUUPAeemipFWkGMaL3EEV8pyzEpcWb78MMm7HwS99V2MMKDQrWNaGYQRrd6Qv3CPWv2Lr2tyYVdrJLkELN",
  "key13": "3jT3deFAxQhD71ewiR6nKDYzynzpxKtPw8MxrtvzAgvFjXyqdzuTkD7j6W8wRbod8GaoP4ksfcDgC3jByxDbKqHW",
  "key14": "3foM4Gw5VhmvDEmiHvh5GqFA7s4egdUrpfAJoV7yMBz8zrz8AE7B39TQ8K6PaRbUvGTMU9QZC7dKp6cxH6Ey9j8R",
  "key15": "5KoBbUNKPgPcC8ATSG1AFfXEK9n2vR8cYLY8LsxAofJmryoQeYPoc5MPWCzXSPqtsesDRTkh4mpmAcPktjanEThS",
  "key16": "4pUcZJYYTTgsAP7YrVuWnid9tR7U6KLKm2pTRfkn9bWrJ8VKh4RBC3tJJBBd1iotRtDjKTwV4zvk3BqXkDytRVjv",
  "key17": "4ak2XjtSpf3RHixSaBf4ziwBh2qE8EapBSRoDJWDpgdaVpupNJyeRqxuRr5dAvVzyt46eCqJDRPrPyf2WaKYeVM5",
  "key18": "4dQpy9yjBbaKRW8UoeKRfRuHFq8NP7pgr6Wm4KT3mxkt1rLQg2pvKfa4u47irhRtPDResvYmhQ9vHbFBvvsKRdPm",
  "key19": "56uKGQhsAvmiCaJK646F9SFkLxiHKJh8vauiCJRvioBwda5rQkkMxWRBN6HC6ZWywLqroJsz7EDJB2q7PNyrMjWE",
  "key20": "1g7MyjZKYeCwLfromkqeNSEB2Ma6iAMEbMg7Hw4jNwCyeszG8cykT19vWV28XZdnRCmgkSfQrQjjA2HNoZSvnFZ",
  "key21": "4p63s2MiGe1tWwucpSD6FrbbabeA7DmpJYJD9deXpXJbyWDgjNMiL3Bnv7M7qZkGoVqcrF6XBz5PcFR1HiswnyvZ",
  "key22": "5m7wzCQ7MCmK684JnWqVRdCByLJTGNnXuCAfSxr4t12zUNbbSrPvtSFyS5mCoiireR8SbXCrSNBmNkFBbdgkKmed",
  "key23": "5JWkixGoru81n1fbriNvvkze4R6ZgHWw55u3HXx7FVtvVtNaRd8C96SgckEKZzSEsLXGJUi6CYiPFwuUyCgdhEdR",
  "key24": "47FbE7c4c8H63Ujwgm1QPfekQJj7u43d92SYTYDVpdd6deRHEZqYBxYLPbYPsVos5KJA9KJLDMXdKjN8B5xHfpQc",
  "key25": "3AyRgqQDugmdXT3PJGeaKJ1mPBS8YqinnzkrtSa86w1f2bLMwF2wDGcmRi1i121JaR1N4LZiqJRhAtEngwueYoeJ",
  "key26": "5MBriN8JGKeVqP2B8qXSP4q2UMTG775ZJ2Tq8bwn4NQXAqRJpK3y4exXVm3VMdNVhpZ9m8cMjNMtiUfZRG3Fuqj5",
  "key27": "2st8itPCG8AzBdvVRFG1axoaAT6UMNDanhm8w6GM6fiUwSiDkH9b8B5SxHA451Xr2PKYn82UMJBme5r41iD1Gb9z",
  "key28": "5SNcjVjAqeeiMNZSb45yDGCAq28TUBVmZ7nh3EhnhMkh88QeadVp9Tyx3p3n9SPa3YwDf5Lk8PaW4ydXbwWxTSj6",
  "key29": "5rAqigpuUUj6uWwPa94NHtiPmF6cRLvzRLrV841VSzBvrp6HEYZKhmw8JRYgEt2Xn16UaoVzmxYMd9YoyP87VRks",
  "key30": "23L3Bo1qZX8DWWEFYZJ24iTZaUdpadMXMcgumXHUejVeHpWpnBVVGGv5wdg2EzKwAcygfwbCwvrcpHaQzEd2wi8D",
  "key31": "3dp94ZdMb2fvZjFU8YcGoxY8XQ8NduoT7e7d1yTyhNGK1G1buB3cyyU674VDRMCd5sg2EyHaya9L4wi542x3YPs6",
  "key32": "4RvLRSPR2V6QJ6xCrPsi33UaQ44Nuz2kLSQBAZPiPGRi9xmoqiguz93Kaad9syx4vgCm1E7FsFvTnxAMbV9vFnQu",
  "key33": "4WS5J2NMb8cBUdmTGLHxT9r5erUfo46tc4pYJ2xtjp9gRsynLcBW8ttRUWA7tTdbeCKbBh98VN9h3scCqZ6Q7RJd",
  "key34": "3Ghwk724Qudwifvgw1WFsBwJfYwEuD8HCKBrHKvb2zWFGqymmDuhC97RLS84gUurkdP1YDpChpbtKon31FyF3L43",
  "key35": "32iDnUfrbrLpybhpo64C8fVThZ86uzqE4krCrfZDPGkbVE1x7SFJjLvAycCTFv3UHbiAFRwNVp4H2JNV4R2TaLDt",
  "key36": "28KueXRcwrfPTEKVUREJoXCMVgKUqntHFHw5NwpBEKfmrgXpfXPvFnh4bCQe9CCC63GQ9zgBeRv8ZuJBmc623ePL",
  "key37": "eNhXxGSH558vR7zSq7dsGnN9fb3QGdifStfF36xpwp7dMneyM75vuLQWprU5fv8EQpcivEV6Bw1NNXDc74PYRBy",
  "key38": "5ktyRyy9TL5Rhn3RxW6h6sy9zDkynpMrsgzgNLoQKEtU3tEBiF9ZcJVtLgQddhxbLBsFkbnZ2VUinpA2SRm4vtJi"
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
