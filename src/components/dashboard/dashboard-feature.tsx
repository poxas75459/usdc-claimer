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
    "66SZsFEPL7PNpwL5wuZRdE7NN2iMPPofxDhufGvAeYW8GXXKSmgtN6DHXeHA9LNdVYe6CUf33JP9PNeJsMz8XLrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gjH7kNao3igHo6vd9KzPBa3ruTmDUzMM4EFXQiHTtfxpTMN82C2zxQtiA4aHU6XLJPSGCSSXwUYffe3rBf4b9nK",
  "key1": "4zKnPJCAz31RVdefADXvzfxhVEtkqAqPqS4M66aNeL6QUu7XDYiYFWjYLWj1pwB89vmWigvsyt4PLGzEVbGZYTUD",
  "key2": "3H3Sv29BmtVpiMuePVGGh3oLZgTy3jvzet3B2PDvcEAB2R3XNVrYsvpqwpSMMkRVgyZxGtYKd1eLXhXd15NFAa16",
  "key3": "2Uwrm6qh4gYuMtk2Wk6fYEjaGYB8PSBpFYAiyfqNspZtER9kdqbuhAukbLd4ozHYUcg8naosDsT3TALiYBvUfNWv",
  "key4": "2iqQSEWLuvJ8Bhn8Q6Qvv1pBECz4uMkEbUM1QkwDkqQo4VgotLskWtTNYfBaegoPrrR5DgpLQCEQwu6dqH3tE6fM",
  "key5": "4xTxyvGrKHJCRoViU9HaDQkhvrKU2gGDw7qTm5h9w5coQRSfq737oQUZv94WyatRu2Kis4rfXpWrJDMG8pV3pwTn",
  "key6": "2veHWRNCTwTA89W78o8Zt6VHsJVdDqw522ebAvfynsGZuqVsPkRT2Kjr7si5AnNUVdBRdD2cy8FnrVoJie8L4V4Q",
  "key7": "37BkwtpQWdQuPKqZnTsMzrAADFGP9ifxHWEmEcjw6oGL8DfNHev7iXs8noNPZowxAqFmbTtfGsoXAry3gzzd99SQ",
  "key8": "2GcKV89kH3wKwbuXiY5bwDaSAHbbffXsgNsRXSEyggzGYBDDTmLpFssqyH2zTNYquQG5dZktp6yZyWUvmSdDfoSK",
  "key9": "5jQBnS9VQXUdopTk1EkJBk2JxZK17BnKHbosemrZzRYjRL9CmGgBVzSeZzMsiws3DYFnUCLe7V6pDebKyMdq22jB",
  "key10": "3WLMVtdqv1Ph1SYV9S4eU4J5D7Ekc3FUEf8ajE1nSc43Q1mivteMdEaXZFjxrFJWnpeKVCweGm1fETn2qkBaiKJn",
  "key11": "5XebBbAzAuzyjMnAQvYNViTwZf1TtNPLTua38zqEaofshjPJX97LAKz7aSy33XVwi3oUheiG5Le6zJMFGECaKyAo",
  "key12": "c4mqj1o9vAARUuHx3dLg9q8FShWHYnR64QEAYr5ZzUtuW2jV5oFKed9AE8MyNsZkTfB7BT1CKf7Hgoou6rHbXwL",
  "key13": "4Ruef3c6b3BH62EiLjxxVshEhq4vcehAY6ocSMzE1GdYLmgRLC7cFn97i6E6CUAvmXZkPDAs9cAR6vFeKCmqumtm",
  "key14": "5LAQxnmxM4cBEJsC65J7NXpSfVJFunM1FKU6JAGoLYaEbXSb4NLZWF9P5jUFvEFBttV87wLCUMygTsuu5m7fbEjt",
  "key15": "3yJbXsQXfswodjYwEmmnEAzUhBrUpoGQLWXtTXwyLJ2h67q6BAYPGYbJk6nDFpQTyDLrp8q2SyLdhnWy7mTs6fL1",
  "key16": "2qxQDAR57fLQYRAKmm5mNQqWmwDL8nixzxgWTckk4wYzeFC3KozA5wHFK5Jv3UdRa5wYsJ4wuqvsRNS6QJwRU28e",
  "key17": "5FaJGMNFK82uvyPLhU8WUsNBd8eiVo5VoLpmsWBcxHCavF1Fuyp6szTrqbG5ZFnrpymNs4GvxA3DpTSkZoTD5d8C",
  "key18": "4RoBR2yeTph7UAG4CaCzjiFX5hoSYUxqMHBsNxCuLKszcsXRiPjbLZ9KKf9By7hFxf4rpX8x13MFkqLRnthpzbiT",
  "key19": "z8ingD84L1asuH2PK81R9qLADZiYDx99o5fBE9CSb9a3afQ7fR7fRuVSoLM1SNsni7SXtWBKnicVVrRx88JP74S",
  "key20": "2eK662GZe81pwL5CMsxk3FXSp4fQyab1Hm8vm3d3g2CcJJrE84MUQGtisPgV6u25F6SF8qh91bwzRKnJnztsZ3KB",
  "key21": "4CCDiH5c3RnCUhkaCrScLcY93vBatWEXqsCgZarMyMeuTwESAXrMfnYd9uN8J1ntQtcY5AvUoRaY2ZZQ5XKESzmK",
  "key22": "5vGfMwCBf6MpWkWxYZCZ9Ev8f6jFRToDRbh75nHVzRC9HUkDqAtTgPzVm1hK53DqqsZMyiP4xRtkpkSDjfw42zRn",
  "key23": "3gvDjHxEWdhaPaE4dNUu89C1Lefa1jawirRBGc95gBH12v54iKfyEsqirnQXv5smqQeBDGPpJdSRx4GzfPayhkBA",
  "key24": "3N1yzZfjxw9bJPC5oKEEed2PcrJNMhS7TNRKxXSTWiU5tBjz7JWTyWg4gBWyU6616KtW26nzNm92zntSBWB52UzG",
  "key25": "5wAzooBXTGU7FF4VTUB1x73Rsw79WGydCUiYup2RQes2oyE3XrUfdZH4r4JQ8VaSaLR911j5N9ahEJmUfLiBmLhV",
  "key26": "2h3tetE7XGZbWv2HW9jKCxNvGKArBL3dxS2QLYyRLmmK2x1JNnWbzK769howgWS6hrFk5hvoTiKdEzrhc7idKqAi",
  "key27": "3zjUnc3YYABeLZD9ykdHFVfeGXkCXuXYr8eN8WN86XR3NC1vmyWQD8CWsuPraaF3MuE7g2BkTYUuRurz67s1bFgL",
  "key28": "5otWxYwpFQKMijB3qTZF7jeb6Ygnz6FDFHXGwsXysq85swaFP9r9fZ9ypfpHCKqhzc1vcM6qutYWXq5kXXmcgXWd",
  "key29": "5vMwFeWy66xMmqUZViBczXcTEdtxCkjRR8sQxHbvLLTcpqrncztRQFjCoAgMmDozWBaJLpEbvCkHct44sUsjrMks",
  "key30": "3eQzxqN8YqxiGjFThSjsWynd2Fw95b58EkiavcbcaLHfQvZWARHaCfe2WWkK5a7HTRSTidLHNtgEbF4wwE8UG3Nv",
  "key31": "2G5aQx1tATVVy6N2ytFA4MyGT9emnY1jxtLZyPdW552ozFydT4gK3TDnCDYLGvGxYvWZvzCwiLn4JBK4BnWvVyHA",
  "key32": "4qRoyf14nRYAKNrNnDXoCKU6RRqkLfR2P5Pj3n8ZE6gZJAdSrtYfGMbBnUE9NoVFd1CfEXAJUpxYkiHLq4WjCDc4",
  "key33": "2V29XecULUHXuDnGFwy65YwpvtJZEHHb6hNnDwuoxabQpsUj6zXTSzp9PWAnWFXjijjt92eoZuT2CZRzDU2KpBey",
  "key34": "37HWTyWCpCbCHLfpNrcfBxQ9BKX1bSvdcPKPjGnxFgqivjQPfp9NnPrhZv4xbfBYXvUGdwAjKH7TcNo41e5GfYVr",
  "key35": "3KT6zZS6rj2K4qkPBGccu5VcGc4hcWHZU11C9qKV7uBQ9dzA91hzAz2PJp6gBqc8Sh9MZtngUEZMDjSw9e5A4iMG",
  "key36": "3Ey829WoekX8ag1xHCWVNhyJhntrcHVbBFp1w5sLcjh1yMnM8MvaHJKmw7Ss8Vz8QoynnSHQ4CekcgCxfQrT5Mi3",
  "key37": "2xfMvKKVBey1VUnfGcEKRoC9C1S2ghd1VmmDkKoC4c9xKCnm48xTC37hh56WypjfFhiiQ78pKrpiev4My5nRFyLr",
  "key38": "31VVxco2CrFaVnt5qG14omzjTmgnxSmBkTBLTQW7niwAiR3fjc4aJZTqGDXBBEaMVecAgQxVYvB8NdB6cAs5tVX4",
  "key39": "4pVPfzDhWf6Tfb6WPpDdVbbw6QZSTNjQn6UgvdzkPZS3DFebURFg9FTHC7LoKRa6BszDMntJwrU9G6GYvnd63DmJ",
  "key40": "5KpMbErXiATW3gEiar9vZfeXC28dKZMoaSGFnxGXvaNS8sbABqRuFuAt7fJ5GjA3TYCWoHSSoWFW457sVoxpgULw",
  "key41": "4pfmxfndzaZb3nqcLtjt1AieEAHgbQT5CQbJ4H31mBKeuLUDLhi6YzEAsGmMoBhp76ZHDCrNRBxyfPDFFZYQRneL",
  "key42": "5inYiSiDj1EuMvZFZ1xzFAnkcSoNihZNC1u1Twk6JmQx7ACkqEmBf1bA6PdhfqXkXTGYFgr2mhSt5kUrZMLmF18y",
  "key43": "4nrC19ydec1xPihLdft1KNGsMFtvEnF3Pc6eD4cRYL2uxd8UJ3ft7a8s3RhAZkPd3wvUJw1KNnoujUMa49mjF87u",
  "key44": "58n4CfTKCiM5B3yFZFPekD7GTPLHuUbyvg21LEFBuUHqf36yyhmYvjoKs7KDEDrVHRQPQNvuhn7dHZspkyW88LvM"
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
