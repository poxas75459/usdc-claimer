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
    "GomKdbc54zEDZdrD8VXkH8ByCbnmnbufR7Hboa3BGsCxT5pNRxVvKbn8qE5jrvHPnFXcwtbWmL69iYBLKSB9Loq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qHpAzFwVsnndEhjSgH1hUsCReJM5cFTW48y2rbKP7g4S9FtDMNyRJ3pyHdEannhEw8k6uTYysAzQJ2gyaHSV7wR",
  "key1": "2siGfMN9GUXGA7gQv73Q3zUqmRXpcmiWfwjqaApHbC7bFCjMq3LMwg4Q5A5we4aBXbWCVxZgUuzMZakX1jGEzSqJ",
  "key2": "4CN53z54PnvnBTPLifcsRvoAY2JpXGPczyDeEyyhhVbYmcGWpBtwnJT6icd5SRsnrXCaoyFLvPghSuYnbg8Az1LH",
  "key3": "3bxLgC2KkhkxZsein6tKrYtvcvRK3vm5L2eNs9QtFg7FHTx8yw1Cspp1GA2oKbxebpnBaFFGAt43qk5Q7dkzAJUo",
  "key4": "29hPKwEejDM4GgvfgALL8ZmLy983Qcs8PJ1ujzFdtDZmY8m7GvyLDU9BQxHpaKsGZVSqvLEtah91rtBR4niJMV4D",
  "key5": "y4PLcqni91gEVPBdwY6X28T8gD4LkonZYQDDcjYUii1RFLyuXUR4MtfjmZ3dmHNJa5fCi8JZaYWcRhbFAXCxsQF",
  "key6": "YT6bxjK9th91W65wdsSqH4jPLb8aj3iqj6xoU3trmYEp8tKVtq72hPFnLMhyZwctqSo3WcyFREJ35Wz7LtZBRHE",
  "key7": "2XaMPVkf6CpoDbY4oCQjk4e5NqLiaQH3XR3N5Ud6pvPDPwgxyh6R2SWnv1EGszVsJfUwkgh8REkqHL19iLiPAhS2",
  "key8": "2ysSoJHupM11tHYnyYkCy3ZFqAMYSGGdYmTu91QPooRQtBBm3oD6wMAr4TaBwVHpcfvmDNbCUeCYNgXSCDjj3bpL",
  "key9": "5ktP6gCAchPC9CSsvMX5SED68PAjwUrYSrbM2uJAEp7yGXnyz131Nwc1EznYmremwwsdQR7o1yXijqbAjkqo5rEZ",
  "key10": "5spUujAkfabYpPZVWX33ZPJZQiseh3qUuLdxDai9BqCcCdQWhFLnWecMqvkTZAJm8azjpENvy8o8wepXe754kCkG",
  "key11": "5ah4FSEGakkTdbZpnW6eicc6RsowqLPBp8XpgnagUpS9TUjwgba75haSCfffeJWgVTozv7Df69A49qCApwwcxNxQ",
  "key12": "4oFLV6zeRK23eY4bvAPFUzq4Tdcux496VaCvySmXhrtntVK29MGZQkVYagH7itqEodfdx71iLeGD1HPqvMPadYHh",
  "key13": "2vPskRPF8ztrqQqSxxTjHfiB5MUBJWtEuJGRzqfke57htZF8NNuAnAijsfzJuFH1xBbzZdcGNRQwEpfu11RsXDee",
  "key14": "2QzuNBPYu2QrRNbZmmJiXESewfy9acohLHQjFuzCTXT7PnCvfwz5g9UQRsH3g3UUwLpxp9EgnSESALwr1Kxweq3B",
  "key15": "2sPSMLZXPr9jEvu56ATTNWdYeKR1mikz4LZKmdw2syLz5AJjah8KYtXKi6aZcvorUy25coedRBdKEEBY41Q1J3Ct",
  "key16": "3URoN2LNGQABEHWWB8meSFxSv62R3u4aXapADUXrHoCP8AHerRKkQaRFQiiNBHSXSU1RdQsbmkvHdGMrKp7BuMb3",
  "key17": "4n6zyR26NCBQxaL9zmrk9qrs6iC8QWsRjK4YGC8xeLf4GAkxqrY89YTSMcCg9WzMQcZdXKNyNo8cReZnGp2CM2Q",
  "key18": "5XTxR9nXMH6EHbky8vLiY3o6vzsY68pvEURgtPvK6ckEvFn76RDd41VyDeHLgrGJJuvqcWJCStebdnpNkwMah7f7",
  "key19": "2fUq1viPCvJgapH8s9zdqzYd8Z4jcmX2AZstU1tm3og3D55S3TmhZPBSWPSwuERquyde7YDuMAbx4DCoJEM3LXzy",
  "key20": "dXrJzKfVmeoC4tQkkdXoQTBHtpNPovbySFQXtBfuWz8nLihaZDj4WNrfZZdFAKLjrV8XQJas5pDYCpzf625Dc1N",
  "key21": "5YRYj3g19KEMBXeY981GeBdNDDDquh2ZoBAP9HhosW8aP6aG9YaAPmhsvLUSwz7FKtJoaEEmLfAcx1rExCgpUX1q",
  "key22": "5PPZ3rwYXsMNjcvwTAm1PBedEWW82XAcCKNLaVtPAZSY1NwEAFE81TEsVacS1RAfQ9hpJiChP4Yze8b971NJRcAy",
  "key23": "2r57cdYrayAPA9jS2hZbws1tQkC2nLxTi3NEZXtDBaWKU6UkDJLuFv5MBsJzEpeeVBaKAspB9qghAudSwR4NBfpW",
  "key24": "2vXdQFwnuPMWGVJeahmxHkdBP5fidcDynM9QDvDs2Q5ScD8BeS5KqVxErYDfAJd4hH52amGHHnqWjZXrBWGD37EB",
  "key25": "5YMKUVMycyPvEQ8CPhkookYeqjD9NeyvvmUqx9TkoQxtev4SvYAz8ujLqcXkUXMvX8Dh4jR7EjywDN3E4eMJ2oeW",
  "key26": "5d54d3dvUmDgezQA5P2eYjFEFRA4yX3JziKDHBKkmFAw8WYHKPDjoyP5C2EQWkHkothL1sPBAoj5u3ku48hQN9FR",
  "key27": "3zTK4MQFSA9zadYUeC7nwRWJmn44tyUuGBhud2rN2gqb1VPfaCG4hGJN1GKoT8UNvYNsKuAJGGidyRJFixQmPkTc",
  "key28": "4MeYS1CwoxLqnZqd6FmRUYPxJ5K6DgVpGRurUeg4DjrKbf3S1ZWEuEsFXGrNdTKk6HfCjpnPnGJcRhzLXFmorW9P",
  "key29": "jM4RYoKrKRYX8trGEqqGxgv4zhfoB7tzQhbfbrjETUyKDgDn3equxLnnJSk9CfUmBodoV4A1oGwhjVTbR5K5jeT",
  "key30": "3iNrnhTPkab7LT4Gc8aXJdpfgquTNwtutgu6c8dQsnDiw8kg8HRbU1Q2thnZsz24oZV47Ua5nfWBsnK14Ux234sR",
  "key31": "3zxzhUL7kUAWpYjrv2Le3xSXgqfPkaN5WaM1fzDDhvCstJTV4wAyZP1ts3Qkn4fRCMP5SrdykKaWNTbn51EgNi36",
  "key32": "2W2iVUqqTKCZrJYECDC1qwgXtzMxygo3QMZ86utLBX9FXZDMoZ1giFQ7oL85SXcfc3Z5syGLDsJf2TVVoFXtJBat",
  "key33": "4WcpFaH7bpMvuZYwbdEVR1nBodMNUFWwj1y3WCPfWa61zs3EoUPUHHAXSyBJLNpjRTKRBZo74mhFHmDhVE58TwnB",
  "key34": "9xoEsr5LGnZNSSmDeUFTX162dtTTwYCwm1DX1DUHSNwCuB5sP1TCrrwnwR7pvPDurbBqottSfsekUc6stskkZZ4",
  "key35": "5Ung9KXwaNWV6hfAMJHWB2tegMCQbHXpbLCfMossAER9GkmJZwg8Yu65pa3CLGpyTrqMLZcR7eDbvSxnD9erKtCZ",
  "key36": "3MngUmTGrS7qcCLGyL5YfQFfmmtNEeScWLdFTkyoy1DZP5uo7Q3QWF6zrQauxaTUHXfw7f9iXv6P4dV5BPPtvUZW",
  "key37": "2Ww471YRoPouzaSXzFB8ShQhVtxPvLpi9sT4T2oUNJPiwB4zrcVL7vB61G5fK3PJpaeVKccYUKC3rYCKJ1uss6Kv",
  "key38": "2VihnPKCFC1f7WG6YnEXJrwrepwc4JN1Kt5qc66ye4MnALDcGuRyMKxXxBSVT7PAP35KmUkhaEfeV6RLqhBuW79e",
  "key39": "2Hb8Gc9kXHyKN6EkXECNMbbGHxQ9aCQAq1mJW5R2Y1c9wHbc9BVt9mdkaLSzE8kP12n1n81FaqrQiw7WxkJBUYGK",
  "key40": "5KTGs5SxFBurP5o9TqxyVqyt6Xng4eoA9jXyJV19XaNUNMWXh96YRaWLC2XKiJ8SgF7nZ44TxqhgRDopSqtG6UDq",
  "key41": "4XyCjgDWAoP4gBMeeUu3wJEt3z8tL7QtfgQHB9wpwQ3k2kpbmnWRiioZ5qDmFXGEJzT52bvZsGNg8b2YbyvixZc",
  "key42": "LUGgLmZmRmjagdbH8Kyx7FGnhc4xMs2cUcu8YNexLyEMKdukm9GtdE9gFxeyVeeNMNDqLTW7N9Xid7SHHfLZ2QE"
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
