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
    "3pGmiyrysTx6qvvJ3t8a7tZ22aRmKvVaLh56EgfFFFP5R6tLNYW7Jfr54Kvm39rT4L4DBtVYAYd2FD18AHxmsQ64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gxtJgemMtxa71EtYGxBatJfYcVm8ZasodhqWMyhDVv8khXkpvkrX7L44KgZ4vnhuVE9PXmjoB4FMFdSfrFf5S6s",
  "key1": "2mhEGdAswvZBa5YjxGzUUcvjqbzABBxYxbAdYWT53YoD6aV8pqQsSX3pT8o4Qmp6nTMbQtMqmSa7LdRgXYrigyz1",
  "key2": "45pZJPucBBkvzLTaYrYuPTgCTwUSAvvcxvMQCVNinHgFRPYzTpwg8nEaKzVxwKEVyDv49uqWTAxsyiCHsxGTLy2r",
  "key3": "3JjmNA164G62mTkMuJVksjxS9FspDKePqZpShH1VY2ygAooCwp15GuuLpmKE279yZAuojiMSdzC35J9GmwwCkzW",
  "key4": "3TirqRx4qqQsXanBgZAE9bjVy8aZZq9GVuytCZJBasuCJZAMc9xjjJhThzQgNoytAHQfLCbcVmP5Fdgsz4cSk2C2",
  "key5": "51SL8JM9aFzgpBHhd1Cr1V7j9Twsfb5JEXQZL7L51Se9eEyexmv5e4GPA9uU3RPcafMRZMR6VdqEQyDtrdCjdiGy",
  "key6": "4adyQzd9oZEAmxBKBUbL1XZBAnScaSP1ckxx6XBrVt64BsnnDQhhT7BLjMcQKTdXmWjmxmd1Yvwu8FPHJtsSDDzm",
  "key7": "4Nda1YwPPXXvCsRLXR5ha24cZV2JoaDjW8zHMZE9siEHfSLf3tSPHwCuqKeUtAD1mAuZQas7SMC2sY26i8uqHAmL",
  "key8": "CfNPxwfVFyQqGTfLgvBcFyT9SAJ5ezsbasysZfvN1dFT6JtCwwFdnC7JCSpnYRcTWdnUpByvWBAKH8C2g6X5s6f",
  "key9": "5QqZwWTGAtvRN2peNK1nZ6vHEvHcFtGGHVnw9HJj1cAvbvRo1c6eFkQeCGiHNqp1drGzStkk1wnvKSgZvizmyruV",
  "key10": "66eoQKcmBrDRJYps9ooYkugWCoTS3a6v71NGJZryivLakqjjS7bd82q72jMTEPDsbVDkLWcqDrKnEed4ZTM3jhed",
  "key11": "25yyVT5uVoep2BiYYDiBfyvvHP5rjHnJwj797y7Pm12ncMnkNiLx7aqFe5WMF3LeGRx8u2r8FoEm2xvD676H1MLn",
  "key12": "2DEvycBULrWSt7Y3pWJpJMcotg5PNzCnNsLZjkb7pxLyvzp4DPv7Q6Qij58qkUGUvJjTYDPhZ5czs1uRGT5PdYza",
  "key13": "4w5HRp5VUgUUG83wtWPP5EbUuHYaW9BnYeA9GuGX91YsLrVpcDjWQEuNcPa54zEoGGBUM8oL5p6VPZPQU3n52bGN",
  "key14": "TvYuQwSb5FGq6BzUeEsxHJHph1su2NCnoKj9xU6jSTwYZzPiT5oNc93JgybxUFaMeTXxEwK6cLhPr8DdCmBefvU",
  "key15": "53h89PTVVgGia2QJV2AFsM74feGJcSn66rDpfjJXqgrxiAfzRaBj7uZwuiCk9WgMmXvcSCfXBWDJ5QAvZjGHS3cy",
  "key16": "3GFzUeEcptaeudJVyM1EgR4R3tegAmuqzLUcMhqpntHLVFVatbq9kBjRvVxGrWboUvGYsvmWxWy4fSjG6rwTkFZh",
  "key17": "3qrop1KQdrp4aVdoJBE8sTDaybrpxGhQgVvq8XDgZD1N8aSM8N2UgPqwNmdYPnafUZjhpzmaDd7BSQVUien5DW4e",
  "key18": "TVWZYyTPP5URH5YQpLgUayjEz7uuntiuGWve2a2o1pEGZwbBHddHbypux5PESGDVg6VdgiNLAm3sc8YmASyaEcP",
  "key19": "359N2R5GobSk63Lq7qatorQeCBNCSgA3bnyhZJRBkwk1EE7S6ecsURhGQdY9oKXcruacXV5kZ6ggGDSTHdAwdJEd",
  "key20": "4VUp8wXvivUrX1Yoy1kyJJtGhkouawuqDNkAW55zqvMDVQxJ6ZK8yWvSo3GFpd2b3udgWgm2FeuHjjqm5TBgDd3h",
  "key21": "Us4MT6CynuCbQrRSuNgGZ52aP8DnLs4oCNSiG9uCS6RLoMjLdbwT1H52YsfJnD6YfgBZe2MDGrTNAW7Miuh9Kqz",
  "key22": "55SxA6TVeBHMFEVNQkr7Jymkoy1vSKoYQvazJAb6K9m4n6vwcQFX6UaihhToB6D5yF32Tyh5C1LaasA3gUVD5Smh",
  "key23": "3y9YcmiRnQwN53Un5JjuFcamNkVoL4PnFJi9WjtNExKzQUc2V6ui8wtEkbxgxe768wgARV8DDUQnVJvJKUMacyYb",
  "key24": "tKHBj7ecVGrMaHuAgJxeBTtSAFgbpy7PZHk4yFKMmGTXcFyx5MYFLy2GmKrhF9V1YSH2AHcZyQUxZH6est8RcPd",
  "key25": "5Ei1zdnN1eL57vpA8Gq1DD6dJ6SGBvPHdn8w3ZTweTGMDTA3qLUvSJQTesJBtFrQw344L8tzic4S9z9ePuC1kYro",
  "key26": "4k2DbpW9gMDYgfaw4cxSD88hXkSU7ND1EUXLFHRtmtwanQ3epBA84KeXfK4tDP4Mkf1bBXADN7f1NGakUqWTYyyC",
  "key27": "324YVNtcz9ndiUCCRrn2mspS78Qvc4AEfTQ79CeH4n9PoiXQKtxRnbopSRrqU1NpRxZ7sf9BeqYerJXpb4SZGuVX",
  "key28": "x4dfa5WZos4hJs7iUPGUZxjTB55VyLjUzqoxRtxHpTWxRLiAaibk6ESEJMY5GH8ZK6BGav8AjgbLYPmyduQBDok",
  "key29": "3uY4Uz7GDbPvcLD9vGMNsENk8ZcDFvVU8rPMVNJt5XLdhSFyoRyxoJuALW9ktArE8hNzv9QfoxtxQKT83PuB85AD",
  "key30": "2YtN375SBmDktmkR5GWT9QKvvZ66T25hXMuwbuVvarcacHHiDEUBc9chFPzyiqzANwxsHgEUkjczEibskGfBkYhq",
  "key31": "VUgWYFD8UJr4QUHHjMUSLwhVgantQv8RiyzGDBoCiPoQWyBZ5zXoY3RRtgY3hTvQiNFE7YG7fXkhGyrjmvHH4D3",
  "key32": "4C4tFQMPLPWtLX681bZyGLgRtYvPjp7joh6tDF6ddBwpo6SZZNDoTt11zGm5caKJgZYX1ZC8UDtAHMjCYawtnRUo",
  "key33": "6JaJnL3uNJGYRKBGdCnLVhrXUQvafEVLgcrdjBDqdKHNa9aXB9LEKd17BJezQWnweVDE8DvYDLnayD8Ma5XtE7h",
  "key34": "4LWMWQDHwtgJAkfZ3RBs16q6Jex87dK7JwamsW36bK6a8AnZypJ8yUBiC1JVTYmady2uvDp4sMuv6jX5MsaJWsB8",
  "key35": "muc38s9AhyKifq2mfhoKg375ZPJuky8p1TJStRnGGvXpjYK4D28ov1mEkhjKs6YsVKmQDLagfPxkdkenbaSgrbR",
  "key36": "AaSGtYiVr424rmnU3TuGd8WMEBSM7is6gHUMYSUecL3v2mG1qs8bkS3N4Mq8fh5F7UuCqTWPAb3HvUydGJsc43o",
  "key37": "iB6oZCpQQjtCHhWTvBbcDRH3rKF1MfqviKTJa77shoRzHyFbCerEGu64Azzy1UdftPEWjSwezNxJuaWN8vwD7PH",
  "key38": "5VDg7LuwLxrC6pBhSr3Eg6URCpPF2Hqw3b1QiCKdd75fbmevhpsMhaHE4opZS7FPzSYWJHiBanJwMkPToM8wRhcr",
  "key39": "s7QxxddfUYfhV7x5hFh9knRcY5u8AEzWCVK4s8c5npkur3soPgqVJhHVBoP3q34SrqStKwWvtVdD4ffpAc6Saaq",
  "key40": "4cu9PLcs71aV8FtQiB8SoHCys5BjGPmB9ju1ZzUaBhGhLdKp1Z9MzYxnHkgbgiPixRV3MuRcQTiDoqGP2DRQ6Nym",
  "key41": "2vUNRuujdCnyVyqCyNkCirxR49CnwgL75voNLKRJP6S4QaPWUguCuNjSLSveRh2S1GM1L8vRcjMr5VdAaHCatn3v",
  "key42": "3GLS7Z5bgfdtMCzgXpMaRqQsmX2DQAV5GBmrZmYZkEm4enT3qw6xupucFmbQUzrGSTcPi4pQ7gMbQzrZaMHzLyZQ",
  "key43": "MnKcX8AeYL1C6TgKJJafQTc2zDm5XuxwGcZ4fD7wkZFxMp4JMSEQaNbX9nap6AsXS9MK5aLwsF9AShSsKyXRSEA",
  "key44": "4jfDhHWASNzjjm3fvgtbukg3CCH55V2uQcksYJeL7TdDBJQ6YTGMpMkmvFtSeYwDSi7Y4cp9dRrfR44KYEZHB5bJ",
  "key45": "5ARNBKM7D7g39jJaUBu4NSMuD8LbuR1wa3VYsDShhkfNM5JnbB4iF8eCUaKSfnZmyfYiwJm5u7HXwFP1hnBJy5qR",
  "key46": "V2bk95mKFAqyvWKDkdki5Z9H5G8KSNcLa2Cgh2p71xh89poEzmWfm1VNEKYA51Uyd1EcndMxC96MMK6BjBn9kr9",
  "key47": "2uBac8CGVy6hZnjVPGmzCcA85CDT9Rdvg68mn7VDyVVM9KHc7smMPSrtK2qqkXJ853jQyDvwm1vLxjTF6utocHEE",
  "key48": "33xV7BjhcRkudPrxb1ux9mQNaQ48G3d8KVNjW5bjXzYTM5ktxu2NsGX75pHou8cTAFnjmfsUh1PiCPcb7M5XF4HD",
  "key49": "34oSkVycHQ1AthhK5U5XkNTqQEMm812CyWsbXDhi9s81Yi6o5F35KXf6PyxRptw3T7mowd1aAmuwNRS5N4Wgt45o"
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
