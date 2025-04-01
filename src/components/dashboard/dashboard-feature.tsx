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
    "3TZe3NMEiJBbj5d3Arz2RtZCGmTmix5nykxxy6zYoQZdgy18B9X9rPeKg7KEGyAkFRwgZDpxCEaKRLCG2r517M6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54rLStipkwZD4eVhQJ7Udn7cmE5pWzyMFFHK426t3YS8vQb2tFQwzSbV1PQUsLwMggyrXStJBuYGu6X2xvfa2N5M",
  "key1": "4YMZX2XgQrUNuq2Fc7SvdHK57qLwWpggtQpngsPaMbCRpkyfFWngdYd4cP18LxWUc5rZvjKcTiiWV8K3dNVS24zb",
  "key2": "2UCnKp8zVW7yi5nYbmDUDAsqqiqYenMw7Nxi7yBfrU9JB6V6sba22vuft5iUigb8VSjX2WN658jZnaDPwDkn5EZS",
  "key3": "4PM8V7J83xY7gs4rdL1x37md2BZKBMsEsh3XqzzKNh7ya6DiJDCaHrFHSEnmvup4ND12ApNoa349MmMhgJ3wJ43E",
  "key4": "4NvMULA2AHSjwGBz7vjx2VQUrVEHcopUpFPb6ozkJuKEhBeppB87cYF7D1ZJoKi6aQQm2B8Br68jSamawPP4d9vR",
  "key5": "3XfftncjdcbuCmrWHx4LfFNsZGWm8oLHQQmdLrMxcCUkkbqAwsgC67bNHUFcxeXvkBpVU1Fu9EuroALJZRwtjcd8",
  "key6": "4kazB8SEqRJ1oGsbJQhJMWmsAw1MDwsdKJPhqx4f9Sp82ByzgZNaKSpFbY53LWC6jiH7iDFkmcH8paisDPFwEZ2G",
  "key7": "27vxsFhP6qEyxrKarzSSKERkgTTMhMotv3ktgJPVeoSqrmmVEyYTeBsD5Syd4xKbaDj66NU4ZzqFNqjvWEmP95eA",
  "key8": "5tRkmc1YJZ46uFBpZtGxRVoAivvGM84aW9esES4hvarZkLsQDVt61fKhs5vDpr3hD9kuWfRrdkhqwnbQTnJu9YqL",
  "key9": "2Hdhbmjv9XqtkJ7gFtVc6edKePZ9CcDVMJPovv17eP35Rgk52FacrpkoiRvtexRWENcoTRn1R3DAGxGNr8LDed5t",
  "key10": "2AoWCA86wcBiG2PFRXTSyMTuckNbBDUiC8gzpLx8fwiK2V5jbyCrdvdFriP17ffsbFye2zKPbFj1cw5mSiuAJhyz",
  "key11": "5QuxSZ4e4BgUQYPxfycnfDWVUCD6BxwwY4SiweGg3FyHoHTabZZoDUAoVbhjAQEPwX6gGxyXtzuFd58nx9iYwQrL",
  "key12": "45YpvQNNjHVe8qQDY77NZNa6nQqnmVKm8W3kyZBxRApiWcKrVMLf7HHY5eDW3s6n5vXdAVYvZXAtMw5So1ez8cB4",
  "key13": "32Sq9aUEMKqCa4TS94TLxS7JBRK9bBYTLcfsvSnk5T9brtRAEKE2VrFwMHUhqL8M1ifeEwKMczdgGGrjHegqPh9F",
  "key14": "2QZFsmXrYY43Q42GLZZpXen8FpVrgqBwQzxib8iVSa8iQNvjM4DRUGAYQZ4bR6TeYobHyhRzDgWNZJHDKwMcXUpc",
  "key15": "37yzimeMpnvaT8CTstVYPExddLw6Wy24qN7YQfetVyiRSKou6LHDBrg3tf8YpSQ7uDgskk9wV8FteTPRaZ2BFsM3",
  "key16": "5aTzr4F4r8NB5WUpsZXvgzrHRPGQWcQvcypxPpVHDD3GFA6bGpGpp52rt1b9KxSGUtbT2V3SMWpUcz1PEAUW8Mek",
  "key17": "4uzVKRD9HMTw3yEYmAyLW1BqqoKGQjCCoKKhmRF4GCZoLZ85xuo19jYFficP3Wn1QcGo34pJntNY12ttRgjzMFoQ",
  "key18": "55YBKpPaBoHYJ3f7v4T7swvaPHa9Ez7ZhYU4yGv3XYJrJ7AtoDfW9JnNq5YZ3her8ebU2bcc7rKWCbpo4eNbzfvW",
  "key19": "vp6K9q6CFyN2AEnH6PnFYd95aqQtgRgZ35TAgMfAchmuEB47Xc4DqpZ9PnJPo68ejJWCbd8eQr2KDpWPeLWbc1Z",
  "key20": "64DeYSMgBxeY6viBEmCnVS3quArQ2yfqju5pcBkk47UHgEfcuf6MQk5Rfiobkpj4VZvorRtk75CjSzRvnaBoHBVM",
  "key21": "3dfx9bQLuYD5zBYTuhyLhUnT2tJZszaWsVMLnMMj4CqiUn2n8bktAn3RWfb1W8AP5SMJypgGjMzRtf5CsnmAWTAg",
  "key22": "2DJaFQ7Fs6nDmyHawaZqXnkV8AbkPbTYuf2WuRkThp1WM9Gu7Tc12smKo9usZEjEGeQha1csmRviZuxxMnuoGBCM",
  "key23": "ro2BAt3JZNuppCyyyQd1yQN5JiVEsJGYSNGw8CdwXt6kdGKSSe5vgqZXTBZLK6CsRLiwzP4JgqtVF5PvKfp5ECn",
  "key24": "4Pmcz3P1GeM6Z8m7ijxvFJdYbKhaFmJ59aZYCdFiL1rtqtpugiMAcQuk8e1UdY8GvDWCrMfMtCeFMtF6tgjGKVQT",
  "key25": "2yZaz4qM3ee4YLDkoxwpFZPR7nj76heJkdsKjJgBCN5FvZdJ7MiGw9b21LjRYPC2atxuYrp7UEGZB9Bazh1RCj63",
  "key26": "DJ38gKfRsG1LzvCBserooWDp2vXEQf86fZnDSajUvj8ow5c2bj58Vqx61Fgs12S9iqVwLYFDHjutPVyKC7471ni",
  "key27": "3ZgWBskMBURQvhU4eiweZ1evtEHEoPzQRsuwB7A4SaJmVEZJN7fmyVjGx2JrHULS1jHoK13CFXo13xHwJ57YTs3Q",
  "key28": "5Ujr44CnPEbHx3vRwgR4rsJoufx8VVTeckbVrJ31ZwZrP2BbH45ifG7mpzjaMoLjLnDjmwRHHTpF2zdTD9v4SQXM",
  "key29": "4vMVbC1Z8fn9ryshtrXRNUqumBEg6KxMKfukwg7SPqajLnwrUUFuvLTqhd62fGdDne22dcGorwXYGsMKdFGwzuxD",
  "key30": "Z6JVAnVtZ8sKkxr4wMkcE36793TG9z61o6uqktHN7tSuUM3EsPnP5qWwNDvk3NyKfoTgoE5MeoxXHWdnTVdHP5f",
  "key31": "2wmFb5Azcvpvetv2Q4ddX5zhTe7Guwm535pTj2XNg7NDpG9Wsg4KLXf7YwrkdJc7CfjY7PHumhLkXgQcumJFTjnr",
  "key32": "2QnUNX7pdop1eHYzYgsR6oCHhB3KQgoUf2nfejAhqdNZ9knRH4ycW232Kw8UktCRV4teVa1BFtFXx7FPdiHB8T1K",
  "key33": "3vHQha7b1APB4B5jSwEWumCuvQjAGevgx6o9PziCstex53xWaGVj4wq9ykN4Y7EtyC17sPGFfcCiDGXc5vdLAJN4",
  "key34": "5eWZ59oCnaaPP6v5fHV3NSfKQAW3AP3mKkkh9CiGSgbvsTR3cn4A5QuKMUjGYbZUV7unibXBzFzM7BhquRkCfgpv",
  "key35": "XBsBdq2nBEpsbhm6tPA5vKhD16tkHbKQTTh6SHtCxLbrpyojZc7KkVeqzW3udtj2PSSqC4uZ9kafTkjqKsm9GAd",
  "key36": "49khibAHxr8KNTNu2grSA4BCHVz5T5sdmjSmjdS3ZpEFyWnqN7vez6k1ByywDLm6xvEfpw3TX8VWPmYZUKyRqBjC",
  "key37": "4fPnYAMKUd46bQsqFpTpKED2ahNuw63chi6dqBVfCusc1H1yy3LZtbA4rmzyzaeESAdz5r4q872MQd9Z2GFdYVJd",
  "key38": "47BBtYUZzKiCD5XGdPXmkRLLskbVcz7dkmvVJYD6yBb1bbkhFSncqpgsUZ5QXprh5EsUCKH87j2MWx5a7r5iVKeF",
  "key39": "9ZoJLfX9vMWMzN2Ca3hFRzvkCNPzKgXSSGwLbJShipBqmmdtXsQm33TJwTAF11j6tCfw8GaqBFuev6ixay5tGAp",
  "key40": "cLx9DMgoFa1raiFA4eWEyjVJThcYMJ4RLmJ85hzjgSuq8u1eABCRMvjjuwtkfX1Ty3Bs7WhFCh5VTMehh84vTmg"
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
