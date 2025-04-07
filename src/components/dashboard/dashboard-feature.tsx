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
    "52jr1dh6LYnLvrKZkxj5bmr9ZaEffA7NSrUUhQjkbmy3X33TiD3qTAEgqv6oj1SnyuevGV2TEyyE2zWcHNmS8Ynf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uxmm2Vv8QYpV24U18zwPDSq4yciFXGdbCXXqfxCR6tQGnq68tP9dfziPesvoybyQ72Qhte8UvSqnP6VKy8pa5Qb",
  "key1": "TwFaNsL5B4nT2KwaKeqPKZKNkDt3gBLppDHXC2pTrMSMMGMbYBA25noZuXnNWFHV8WB9zgfZKs6KYQDioCbBMfT",
  "key2": "bRzxoJBqSJHBaFZei5ssqdBRfJnmUv7GA2FTXppX8eBXL1TRyFqVhDze8DvwLwTYD6dk2HBap8KV1RrzsE1UGVG",
  "key3": "2cpfHfYq7R6iB4e4JhzT1KiGs9eL4m67EfEN1o7Ks2DqTckfnSRgEpdKFevYcgBimt3c7rbtw2rWCG6xjiK9mdSg",
  "key4": "4yGL4PSoNDBvHszfWd13BDjA2fhctAYtWonZABb1MyGS3UWgKZJvuNLmxk5jCtu9r33jSw1EEdS8huBee2rxa3Pv",
  "key5": "TFM7UFnKshcJCqiKKaCaXGdRqKo9rF5rp76anPbvGGTTuDpqXAA7U46qFxLhg63C1fHws4sheQCVWm12xCmMdro",
  "key6": "4Uua1PLNFbouFYR17q6QDhj4V5bZZy1rM6wgX5ycU7AC6rgYN7rR8MGJCzM1hBw1nWQ971TcWDdZAuftG4ZzDqNX",
  "key7": "rsS13xnFuENtuPGGzKvwTrsNnvwk5KAc2HgvGFpUoJhCNLBWrCXjY3JdbX29RjfQPer2NBFzUQ8x7gSnSSaApgb",
  "key8": "4zfFQ6eZnRQFGDGGMqJzAz2m1fEdYueoWfTQHhVLcifRM2rFWYckKciSpMhvy1fdMoBrBAd5eqPRF5hSbBvGqd5z",
  "key9": "26epiA2uYqohLJagmRGCL9Rw8pryGMayEtd3PTM3Wvhjp9AByCKsgKSZ54wpMXV7K6QSShJWtDE9A3GTr1iibXQs",
  "key10": "K7q3XwjRM5U1QRq4H1VkXPh9Rm9dLhhSoTyURpnieogiwuTChcGxjqGQJ3ZuCW3pgSoQgoHLjK4Y7t8hpMWNX3G",
  "key11": "3R6FDeKmsPNkaB95jwusPhx6Di4jrgnybapjMJL31AJWwzsgGTD4F7c4NkQbjg3aU8D5rgjY1DU4JmY3vEEDa6Ga",
  "key12": "2ahiAZrMvtsS87yGg6ZG2hxe1b5Pg3GBCefdonxaoRwrGtXsRvjMkQb3ax1Ep5j4t2Ar5sbpmM1WYmmcP6EPz4rf",
  "key13": "4unNXuzzkKZkiFrTHGu14JS3F9bAW9GCdyQjUaHhi8qCmzzi6tBXXKTjsjq3m72Y3GU8kExQvWGx441SY7Jtmf1e",
  "key14": "2m1pw1dvPxc9A5Uw6yXq7Ki3iLynvPM9gHrx2Pcfdnsgf51zU3gP7rgw7jpd9AZkT6cgAmUwbucim5LFfbucpqhi",
  "key15": "4rfRHrT3S7v72XH8Lr6KBjR8Ary2AM8u7nXcBpVQhxrTzVRdM3pbgZJ4Hij8Mm2VmEZnWsvvbS2oa9Kxat38Bo1C",
  "key16": "4GMVeAsM7gZ7gWTPXbh7M1HJFNPUH5cj8jx9UXaofn3myRbXTNqLQU61ruQMyqhVsHLpCGPBDChBcdoMpEgFyFzg",
  "key17": "4S8iEMzx9WoCjeRQvbnCjybULdpEfzSSxjkkB7KrcpaMWAh7NfFaVk4NNSA3yPpxeUUwipD6VCXXUXiA2WSd5SLW",
  "key18": "2ayyh8azLPRrqoDkSZsdUvGLP3GRMY2jLVQuSBtBWkJwmkjGsQExWhPMD84fktzMsvfYpjkHDdjs7C15nmMwSCi5",
  "key19": "3uHZJepdWFA3wanSzpawNnT8kAR4HXHqek7sHKxrUze1VFdUGhP8LDjtSunZUPserfZep71rzZZQy55AhshQUACR",
  "key20": "VMYNorDg3bSQaE1mgmTeyihiUGmZfJrjv2UggyFG5mU2umT6WubgAdtWSL9gX7DBc6UqJmeY8QV75tissUgwcPX",
  "key21": "3cQV8FkQxf7vEmkDhrKmFxB4bES5uRCzSXJZwxvA66vs3EKQsCiwXBSAcPV4VKzADAFePhfcwvneiKkasCGEffkw",
  "key22": "Bfrg46WUyyYDZyCRy3diPZ4RagZx3YbzyDXgEhHMYwq37YDfgBKeC7dckf2nQDik8UM1T3obAWEs5wVgVaCPamS",
  "key23": "2xDjgmi25iJMNssHfz1q6zh1HNQDLGiGdTxH39ohgYmHZv7FNtdPxvMe79hzfo69CgAcswTZPkuJgDjAjGPporR4",
  "key24": "o31tmfEgPxT7zHz4B5Rdctd8wEPN7uT23Y36ASZdLPn8QFyktxLwKyzESV7KW2MUtFhQLKUoLjtXNjib1bFF6Zc",
  "key25": "5KB9CLXHYAX1LTcDcs31BEcbaXCojMiKqBQh8RX7jCX3kBXx21uQRSziK4TpAPZgPvEa8SMAkxaVyUvRR2dvPqjj",
  "key26": "3eUjFuMUacip6n34hDiPRATZUBvk8RcHpusnanCFbw3XG3cP5yGmEhREqN4eusGpgC2VLKij7TeF2oVNSM9qCxb2",
  "key27": "3xvt6hAcn1y4Y4C81cZ67TWiaU4Gqy5UGd9kg9bCdHFWvZ5yq16HgGX4u3Xb1LvWpuAkvx7AgaMbbtqKPqGMqzvB",
  "key28": "5H3JUeB9btMMfz3qLmN6AgWPvkNnhaFLhNJG146NBJPoA5KjvU1QS3YP8SgFyrawcUnHirEb5CfKb5v79rrcezGL",
  "key29": "53HaBT9e3Rhj9ymYx4oP4xtQLZjFSkde1ZMBKvAA3XcBdcJpyL1FCkGEKmqd9zKi4QQpLRQgThBCY1F5Jq7ALLHr",
  "key30": "2YQoYQjjxHFXgPr8ctn2ijzLc15Ue6VvZWADfC4J3Po2eb7oXjxmZSbPiWEStTC2eUHajp8zF6opcU2EbWA1azoW",
  "key31": "2dcL12ac3RdCT1DjTyLtc5aqfrXtxcJedg6UKABJWCQpDx1gExniCFTGbwN3bftMVaJT4iYu5w7MLWVxvqQvbxMb",
  "key32": "2g5dLdSmgNCp5YeLnqSPi6XFeETPmubwGsHr8te3oVhLgvBrt3ZULFubDE743hyuzm6wycKmBkcSuKoPfMum3io7",
  "key33": "5XtXSUjseeXiesJQeWn3R4iMKELbRtMaP3VE8Zdz2C5DTFeG3DXghQyWvaDa4g1exjUMLoTVEx6ZzQEmLePm6v2p",
  "key34": "3TiC37ymWSGDV9YkdhQLHqNxeekFJ2LD5jBYubWrmGLUR7UMi3fPnw2y8tgcaE3TYa2xxu34ErvL8Mzy3W9FA52j",
  "key35": "36HBT3yxi5FNDHWjTfzWr5U7ErRJdKMJGibtk6vdJqwRRgwzQfk9pPjAJscMQUHaLwdtkZKz6e9dtJRZc7aKW455",
  "key36": "2t1pxGEAcWR2PFA1iVMQ3MWf3B1rjNuBBUoiumZiBhgxghijCXHvQQ6wEGCVzKLkqS1juUoB1p3XqRdHRGvW1Ukb",
  "key37": "HHMAwcypQh5yUTAAQgxKzxccT4C4NQrnXpx7m8TyQFLZQusXTnASd4siWbJ7yjB3KBwzP3cRorPug6F1XdpHMEC",
  "key38": "qAQacLmZ1QEBLfcXoovnCradiNnQ9jm9pnkhUhWAyyec9MHkJjo5ejCkNkLmPBdaCWYegi5eNk1eknt2n8skFxX",
  "key39": "4fjJERacA4sVjkQT9u6jb844tMHzbiRvxfEyVAw1EHN4iNt9JdCUeqzt4jWC2WvjxRuZZLYEXriRu5fyKDLAjjux",
  "key40": "5HhfneUnHwcneDR1CvdEbrURQMiKG9jQCtwn6Gg64ST7kKbMm8QduMJ4esnfhsbRZzdZf1rJ59zEzRMZYuEAiKtW",
  "key41": "2czVrfsFeJm6ghRBUyQdj9wGVt1gmb8KYThpocBSpxJJ6Bz3c5i41sExnc9SEo6c8Zj44knQyghdiq3CYVjDtJSE",
  "key42": "4YYS9sjXFE3SR2gVtQ2Qbz4N6M3EbsoNDTRR1eDNZ6mbqsmFPpbi94PYJT8zv97vBnHmRWCd9UaiHGUsc1ETbaBy",
  "key43": "Hw4zkQDVQ62QwpQACFP888STBaPGQX42twzayTWbCz4Nm9N7fxkm2PSYTv4uj8CPfQvbtVokgooQc6LyvDmdAG2",
  "key44": "3dijBhRJgk4X8CM4AtMeNwncJEJTGsX3mBkdo2gNEdDNkXuWA3EMRSxEXirAY97Np24pvxwRCS338LLoJZ8Xhnny",
  "key45": "3dWT7P6Ue9rhhMD2nnzTNonTC2ZW3SygrTXxZfwrhAFKqJAXUAqN6wzywwZrmitVdQ3sxsMuauhJyTdgQudC8xEG",
  "key46": "53nyGUrh7p6NJdTaRbq8wgC8shNwXCDNbp6MP3S2dToMecpXq4aByjvJ6i1aRDKwjJkNA9ewEcNVJpHwo2P2qFLB",
  "key47": "7GdsLHbBzTNMABH5YwEHE7wMvKdY2NPax8ZUj4A85M8ocVUGJUUAxj6t8wSW3wATtHejz8eynQhhmctVaTx1gyu",
  "key48": "4XWjDbpPWwFnhWKLewyCbiLF28ozmfxast5oQxuDFncHcpxpM95cVejZzMtMeZetniA6VEybZQdJ3LstFmG7FMXH"
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
