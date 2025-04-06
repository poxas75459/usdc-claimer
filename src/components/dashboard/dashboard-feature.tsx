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
    "4fvH5wX4wjwNdLcd1MECC1dy5FEmcBBqWpyQyzs1xPcRGaVJv3vhPHM5yTjmd1RdWqVP9efhQx3w923CSpPbooPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dkE24bjdhCbqtf5SVske7uBUJuQr7sCnwLvzWrGdxXF5fSVx5zoB2mzkV6yXXroe7iPGViJDqdpb3K7hFr64Qe3",
  "key1": "4wzgWUE6UJNLEgpG3NyU9rGS21DCcYLMNo4MEV6R9macrhUMbhBP4VwRS4YkiRNt3ZMX6zXV17VpxvqkQKRnWRHw",
  "key2": "RBtM8tQgW1NRf7kaAy72aNfK3ZXCVEV6KjwDeXbcP4vphqGJu28Dx1x1rETUDeNBQJnemUtB9cChBXwNVFu4neE",
  "key3": "4JxpJheBaNDwCPq5hr6aUKaHoU45GcsRnnQWRXMWk3CF8TwHeMQ87h65QCfgxzcycfKC4iQynAcLHAXaSfZ1bsW7",
  "key4": "4dtQCtavHcfxBMmUVpVA4W7pbYdB3J6GSCJ49nZaqwCbUh6xEaHh6rLj1jTuhgAmiRVZEBxS7sRJ8KbS2KqoRKff",
  "key5": "7ocUGpXd1YviyaGrHzhnp6VKYsHXhno4sePgVz11yzQX2ETKzNDBFu2F4S6kYBLdtqMhcjvTFJFW7XJidZ1mboG",
  "key6": "2vJn18bVhr3fDpDk8E91q8VsQ7RcS89pZDGmwnk2ZU1iEHi2DmJ2nP8zBtX9mhqJQQ5Xqhr2RFrJZT5C19zYKmmz",
  "key7": "5bhX1RE4jSGTDDHsjXQVUUbjec3SXzKivSCC9ExNg4TvxWBFPMKufSvd83ppWRBQpKXUzAhQ8FMp5ntdrUxQa5Pp",
  "key8": "4usKfqi3Q4aKUzrzW2FxVZpHuoyPzKZGTzbLqPEZtc5zRrMWq3vbd4DJE2HTpgkPdx8bHDo3CF3jCUN19W2h8Bcf",
  "key9": "5cnzmJwkvPw525KrwH7C3xw4qaR4Z8xy3c37pcnk3eoLRxiTeGQ7W1EwQmmp3wQ7mRLCq7Q5yacHQ9gmphttQWjx",
  "key10": "aohsGqZ9eZSeTd8w2dCgPiE51YJmuxGTpXnY9Ygvc6u8TcZCvAMyNSFUd6c2HzzUSuXugXVVXXLSoewxFWs65dA",
  "key11": "4gV4hRJhjLxXiNgTnt6PQBiY4kia4ofQxpDRSUFUp7qsgQvXYLAyhgfx586JB83MXsKwkh67B84c58EKz1qU6tGN",
  "key12": "3YsokNfeyJVHNaduHsABZA7T73Sf5VX2tajsvx5nF4EPdahBc4edxNFKcjMCS7MLHNFyxEWudGRAMBqJJB1ML6qU",
  "key13": "3Z99phCXNaZiPpLbmP9VmjJQUprKvuF7rbDwgbYpZhN3rt4zZqsWaufSb8Y6NNxNgs9xth6EKoZXJbi2RukwgW9Z",
  "key14": "2Zc2K7TpUjW8RGXTpCHwszePsPa761XKgZTD9rvfZTC63FM7GxZrwuXT4tiRnX87dG52B4aXUZn3CtNmegp64ZHj",
  "key15": "dKwascDMBSYdcMn4iEkb9r32M61Nk117rb2Hy6jE47kbVsHjm2daTGNBHcs9XQevSuaECVDNqNHFqbA8tJV1BB9",
  "key16": "5KjeYiGRY9Uf3kof9RyBgE5DviK5dZeUjPeL856tnTErGapHV1FnJL1wuKuHewa8zdF2H9JNX2rL12NowZYV8tNA",
  "key17": "3SdXEWbeNuyVAavrBpMFPWXt77V2akVDjsqps7czuhoEDRdeXYnfSExyjKmTiXkM13Ep4GgXRX3Qh1PdW33MKep6",
  "key18": "2SSr623uvVMze4QqsQYoCtKpC6PbhWaQxsEPKbJej5n13wywugxPrgM7jMeEcAstQcZBWKQtzT1as2hbkgy7ZyrC",
  "key19": "3vFTbrmnYL9dysZKN7HUhqbHsPGhpnU4QWUhpdYxRQRbVkqWoXZL2CxQNRVztUGEfMTU5BqQFMNjzUHbj4ivNaEf",
  "key20": "53JT4JuRndcpx1PLosPGGKpHfJm1yRfaTGLX4yRUgkAKXpjcZDhi9xY9xNwgFV71freg7yCratvSnvLi6mgGJv9x",
  "key21": "4iVVddDABfQzHwma32qjeEn3JTsmiXHv81W7X7R84116dJ25CsJYoo4jW8yeMvgmCESGpbA6pmzUPpoKNU8gNyN5",
  "key22": "4kRToaiNHzMakE5GiHyMfKmFopKh2RFXWgatD9FJjQaFjr8JEaNA4dNADy96xvKXv1aKrjdDBArYscKuKeun1oCt",
  "key23": "52wPzHgSzSeAw75ZrwZsCQZBzFjDvX2s6egk8GXncMDzhysY55q48piL5XLpuLdiRxBhdqRkzT1fNwUGddA1eC2g",
  "key24": "52D5xRjKtaSgfG8CqWfSn69WC7iiLih36T7siHfJWXaL1t3eWw5Qv9ZXLv1kgiecCeyq5dTA6GXrCvMowJn6aNcp",
  "key25": "3SvK3e8qmstVXYJV1bxM8jvqYWFZZRrdUsQi2Xae1tHu7qXKz4BTxH4fK823V2BtqzusstUQqgPiGsakyCuhAY1p",
  "key26": "4859vG8STazNzN4tMy6gkmXJAfGKqZnyPGhhXEFtzbnSmmEjWmEc9TgFzzrMiYaJERWTMFUVY9VXAMYpkmbFJFRU",
  "key27": "xp4Fy3VwQHmc7X9PjwPAYHsoi984bJK4zXXpeUqsTk46b5swC1yJEjw9TNCJwLoxkgrpgnSGZBvZQY5c3daawNr",
  "key28": "26zZTSj6unvo2P4VsXSMjiebRs2JyvKhDWKxnHhXmkPSkJToymSNsmAS3s6wYEFtbrFRRc2epgmqx5DBz2WGd2ov",
  "key29": "2JBkB7hghAmbrAv9xpn36LHT3ttZSSv7By9Uq8yPgDJsW12h4XYV6FMm2qK13p3NrfofHG9L56Riht2RDAcqGSQr",
  "key30": "5G7cbNVuDY4rvwo2aSHJAFhpbWyKeEPkvMw8gfLLaDEBRKgjJULSShp3G5wh5DUrgt5mfiE4mpwoC3qKbaBF1ZeN",
  "key31": "3Jfm4M31yt8mbyvZc1eskFv8r98DcxGNftH3v26D8jYbQLZSvr5uYc7Lqf87iAyptcZRQYUC6w524KnEHpnJy5S2",
  "key32": "rRSxfBoaUjoixG5DWe2hmVMxjU1nH4k8V6VcpbC5TWhQYG7VCv5KEwJEjhuYnrnfdXR6K56DFQMMR3u2Mz7eAai",
  "key33": "bY32WDvJxXe4DiPSvAkPWBtGUWT1Lcr99oGurjHNHpCFAR9G59aaEKSqxh6kpbGXa3gbF4aBBPNr8PBiDKSXDEN",
  "key34": "45ke2qGbgSmUdKMDQxyfDcoLQGwGRGKkEJkzJ3SPB5pffCo4uhMZgZmz4C3j7syrWXBXFTcrkDPEtDjv72qiGz4g",
  "key35": "5yvS73PXxkZh1Krss8FvdmbRD4sQFgSYE5hUkjyouv8XbeNAWYwTzhQdAWLs3t7CpbW3TnJ7ZrWhmCpEbUVHXzCy",
  "key36": "amnJGue4v6frqPARn3doBJSUiRnfe6P1cspKo9D4wcWaTGDuWz1JWkQFdtWHhMK9gaTxSDNruoShQKvHqFhNRuy",
  "key37": "4zHFVw6FRHbkMERS5ynMe5wFoS6JiWDURGXbh2BLJmPSw6xFwALzMZiF6sAAsGNJxwLn4f7wjvEVgRbhMsw3mGW5",
  "key38": "3yC9592N5dAaA6ropRH42sA7BmMLf2sQEgkdHaDBY3zKFBaTAaurY8vW2JD3yib4vy9XahCC9nPxaJohGLexZWDR",
  "key39": "5BrdobxTPvYtHzgs9cWmJLTpDfNWtJHV7SJfX6SegLm51xRJ82bV28NR5spXRMZhZs9mP7U3oSiDQQwwr6FzCFkk",
  "key40": "6682cjVHSsv36ZvoBUfgoeyjBHUJCqmKTEcSUYveTQpBQ2cq2T54MBTpp64i7WDU1SwKkxjpXD8DzVzNopCJLuPp"
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
