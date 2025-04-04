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
    "2ZNPAQ4op9iQaCzxqMDe6Sxp6afLSy2jnNgkcngMtm5GDsTRLtvgzF6taiCng2Zw7iJXRnEZqSp2i6VrzqrUDDPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xwULQGMDSvgYJyQm9eEtgwfujPYdzuuUSiXMY7UGubCHwEAK1iAtG2sRVyythrz9LgteehxYB2yAWgwsQff9WCq",
  "key1": "45CcwyfMhoPqYbq5Dned5mwnRbybGAXHd7WWT4j6RmyiwACWCMjW5mr4JTa5VSQXYS154WaSFJuWSrmVixd8arqz",
  "key2": "2jj9nHcynTMy4JSe9ysjTWLscXoc6RBASxf6d8z7nuim86wiWh7N2tYUDHuiDMgQkni91Wn79NeAsB4Gw5PcDPaZ",
  "key3": "5VZEYzwG8FMoxoGEz3zsGL1VRDdiBQRPThTkUHjmoz1unKqCUeZMzn1jUazx6rSR6S2KHJkDukkcjpM4M317f8L",
  "key4": "e2Jpq6tDqYiBytYXwR4RtivGGySj7cgJkrc1Y71yZPP19NdEbKGbyAq4HYd6u86JAxKpg2iPfrUtC1dRr5AYZxY",
  "key5": "2bcfuA3c56FcwBZkKQo1LZCprvx1ZAeA4XD8i3z6HXA9GJ6NgRSaenxTipHXpQfonUzC6QSsZ3SQkR4ih8ZDbMZw",
  "key6": "2E4Pv3u119AJXntdHSdMkgrWbrpSAvTCrfJ6v1tWzcFFTjznLR4nau8og3CUQM4MobZDqDrYZQHgicXxin5Gmyr5",
  "key7": "44McHhSN629BJFb85uQnWDoMbgF7mxYu5Zz8dCKfRdZYPbcMPN6eerrsrw2yPyd31TdxEiSqegDt7mxD4yaNYULS",
  "key8": "KYcV2S1yHFgBA2szKyxd6McEWRJ3FPx4UR5jdPgD2zP2ehNfVTHmHYCcmWj1erdf2v1qM1MdybhhADbKREaELb1",
  "key9": "55LMxYNc8UKuze3sPbnSZ7qNaXjtkVAKk8A1Tz1NBhvKy6pe3jkdnMuNZAMbETEs5dAd6eHkmdA7GyGeB2awyaKN",
  "key10": "4MTMNu8MMNByDY9c8j2XBcyhMcq2DxivHqjFRYnGwwXRvfQJa7dBM4ffsm2B3AVyztoiK6F6sKpVpUW2tZuDcVvL",
  "key11": "UdxjXq8Gbas1PWQvuwfQmTaeGN928dhC92vXgKHx6pr7mcbQ1SBa98DWtBufJJ3TMMLNJa1ezrbrn1vA7UR1SQn",
  "key12": "3A2QTdgLgJxPTePThjP8k2428i5Cy7ivE2L9U6Kc6xxMj9JzKaKmbZTbBDHagAWrNEmuFoMtBnKwjwfXnrDyScz",
  "key13": "5p6Mpbc8rhvxJAvncNvXCuvSPF1JXGJ17LTCpFonYVSV1eSEERZAuYqwaptXi9K6JdDDhoij1a8vycqxV6Js7BkC",
  "key14": "2TwoiCRvyJjTryXhX1x7TggQmLofNYWKo1yz4w2rr7opGoiYT6YzTXwrVxmXiD1fEg2VfXfaft2MnCLnYCbpPjij",
  "key15": "475R2GCgXTENnjK5EEGXHmNnngcL481tKvES8RSYqwH24PrUMM4hvkDdqdBZqTsx36fJccXm92qQUKjDbAnHPQ5v",
  "key16": "iuva6xTxoP4yFVQ6CTqttC4tDoUgZcc1aqTnZRdoHetacwtK1VkeKXsmTuPfcJTyoyYjPddRpaU63rMkTEZQXm3",
  "key17": "4RrN9D9X9J2urVsuayFGj5LTFFqg4gLC8YMu7gdCRgaUqEKqpz68MiX2QfsEDZpC6E9zgpt4c5nD9LDAgcUThdQk",
  "key18": "66TeFJDMy8wgqcWMfrfp8wHsb29DwHWs4mJMPNoW3kF1fehdt45du7yxgsLyhUe3qMS4NFBpcxUhJmnLq1cDi8gJ",
  "key19": "BnVCXBFvZh9TUenSpfAWNanEHUzhm2pLH8mJ7aHrK9T4N1c1bjxE7Wej97XsZRmfphVLczmyaLLorJn6jLHYKv3",
  "key20": "HC6Pw6XX48H1FwPmYmLZ4bgdHQLpWkJuqkgkhByxDNMoY9WhJX2VoeG4TpceDPX7i5aVwmLjGk8XuZ92vYknGGB",
  "key21": "4ZCAbjs7F2L4y1aRuSGe3wZL6os8oSc4ZPoGAxXAnhYatWrkMgodkavhQneqmjvoXV1EyDXF2rAVx8jWdfy53Xkg",
  "key22": "w9bhgj6GgVKABXDcBoAobzFsVJgCkoyTvdhGpTQfQY2gv8QNC6mEjnJGDK6WApVPpuEwSGSMtjd2hV1GQUqtSbY",
  "key23": "4EdUqTpYatMRoiTfpfYnmzTTzCoGFnQt4Xjb1WUv4PH7Fet5hBZdq4f4A3dV2rQhSiRsrxUvm9DJzjZnCHKCLUpc",
  "key24": "4w9QvWM2bJiK4gsMksDxDcVsj8c5wEm7RXC6vf4VS7k5uZ3AVSBFn5z4RLmjzgmNxhRFu8x2EVnahm9CYf7x76uQ",
  "key25": "3D7BijWxL7SaY9rMu7MoxANDvJWbFXtodVkQzA3fFQgpD2Y9PArL8iHxdGHjDZUJtRRm4tZ4AtiR4qKihD95BEoA",
  "key26": "5ysVv7NBMqma2uhiTwkTqaPRMKjQ8P4dh6Bu2SxS6dc58nLsUFpkKbKURFVs4ArwzLABRyiRGgXjx8vpn3K95hDE",
  "key27": "4Zja6psCVdFohGYWfdp1F5Fkhg4rVQCt9CkqQH3aYsLptQ2wkqjR643xT3HYQerpY2ch8RjET4tWHCSdtFf8EVyi",
  "key28": "4fnRssf6Yz8ZCZhfnqTy6ChzP5dwEeJgnUJ3SBVagYThWRHuHD2JPXSUbAyC779LeYtfJgtBYPhn7gBxcjCFmUYW",
  "key29": "64sEi8hgRsSzp8dfipgrEggJJWYNifv4Ej2jEyxeuJF3wCbvef7VGpw4UkDuV1LdXHLzjfkxM8vCvYt1JAU2hZN4",
  "key30": "39djaTr6HXRCdXJiCFTy8xwho5WzM9G3dUB5VvjqYub5CR6YxksJCAxFomhEtAyJcW63CBTDKabr4LX8FFp8kvcz",
  "key31": "3FPkyENEJRtSsy4XUgSfyFtuqbbeQX8Nnnvh7tf82BDXJ3vSE77EhvnA27bFzdkwg2sEcWkprtG7b2YpLwxX4QKe",
  "key32": "2TTdpJAH9CUpqYyFKZw2GqRGtKKFRYWVE4NNc4gSZr1TJaEeiJvtMLfk56SBoQGPnpTEhFGTRCfYLZHSAuzLYrYQ",
  "key33": "h5dmYAtMrsRdehqSfbHpN1Y8EXuufECv3y7yg2PpXFxEyxKZpQHFgTdADazhxcrpmP3XV7tZ4a8cYYwYKF8PRfx",
  "key34": "pEz4mKXGWAteMCdPZcWtJLSyhn1dBBqi8KjN6ApQZv3jdbymufDHdnU7NQEPzVKHbMTeHdRazTK4mTGP37Wuigq",
  "key35": "42XBtFK9nJqotFduKTmoeR5HbGha6sFaXuG41YZiYfuMwLHQQu829K1BMeMrKPPvTyGc8de9dnN6oHcbaowJHjER",
  "key36": "2pdFCGAVRYHKTczQemgTKDw1wkHxYwh9b1wV9UeqH4g4NEp4QgMLgGas4eVa4u1SP3VEZns97oeg6hLtfrpdKZH5",
  "key37": "3CAs3qpzpczGm7GBTuG9o5dkTZFNo3imThYN6i6qV4DRRdFfNi71T6VwqhAegS3w9QFmVN9GjuUAA1udGfminpNM",
  "key38": "4YSHqu5atU5DRRDy8ULim2CzzQavHpVK4MKwuAyikpvikAjSB7rGHStNwBTFbJXR6zsz3jcjHkKJp1Zcp23PuM3g",
  "key39": "2TKckrXCw4ecm4uVvRQywxNFSSgcUzS68QxnBFXSrPdwK7jfWKgaSYRdNaYUPRSxJXm8h4ZbWrkC4EGugtPkEpnG",
  "key40": "2WpmTtszxnRdXgyFrVg6f3Lq4sHK5ADFDHCXZbZspfYvyKMcD4vDTSLKgShy4KPtw8KPRL4u5JpTea1AMBt2tyXg"
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
