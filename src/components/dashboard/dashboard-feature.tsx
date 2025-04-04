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
    "C7f25p11WCEHVsVYneWJkKuMjdDqR4YQ54pgZipoDCLgaZKZx4BcRKsJSg3Z5FopskpnENnv5e5mqXdwqRu6AyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jyWVhiHxgP2sgDGPc2Xom3CGXgSMFAzZdhoZrzMg91bfXorF6nRdFr3KrnnpNrijWD5AvhpgN3pFF58xG7QHAyX",
  "key1": "4xjhbTjYXHyEeugqyfgLJTG2PpPxuZYoN7EVge6ifdRvJZypBZvGrzDmLHtzvMDJqLnH8YWAshZ23Kb9c2P9uEsh",
  "key2": "ZDZQ3TgmFgcDxGA5m6dVAgjo1uh6YjWuFMNfjt4JpC2aU7uM87WiVkK71JCBnFgfCYnw3Zrey1HadHfHBaAUaCH",
  "key3": "5CuDc7iyGvCV5znKbZ7ngUggnRpA8WmdSeS7FTDhTq9WvycgwZC4RHmgZnamX913SCBUw8NyxqShBG6XyqFTaxjY",
  "key4": "cksagNQXmpdBgVxUnQZaktJ1pqCVRJ31EMQsFfTVfD47Qa2CHezCtt3LzzvZYXWuGKiHvnv4kpBvkKZy7f3VW1r",
  "key5": "4z2pz9FW7xYMmq3B7Z4cp8aGusktNsxoaSaeWCPwu8EtoJMHWA4BMAZbxyjDvAu6dWK9f6qyEoJKvpJWbu1yyeCw",
  "key6": "K8TeF57PhDL3oWxd4MBExNuz9LSyEKGMzm62sx4W3HbdbJp8SZx1JbUfT3XsTvxgJH1Lt951NCnC5vEMjkP6oEv",
  "key7": "f18CkUjfC1fr4kLZt61jfVULx3cmqcVLf2Uq7AoY6Z7spt5dJhN9AtxoSjApTxYhMGQCEZJDVwxoaXk62LyeTko",
  "key8": "4sxkDtq3yS5axmnQvycovuSZFwkSrvPAzxHd14D1YsLeVNojhP1NS1jgS5RNoQpJDssCGbrBJELacFAS6fMCJgTn",
  "key9": "VTz7U6gGd2bHYSEeNYZ1xdYNhkwi1yrViCBLNRiZUb5KfQ6H4KQv1bMCceiDVhYFTBXdBYVcnqgW1KB6NjoRpsc",
  "key10": "42bXSKKJgtZUfohcz5sEY5JJ5wdrZQUdsLcSgGvkpJD6tVDfZ6p66wsaHiKPYVaxRrp6giFsChYPygUjrY454Phb",
  "key11": "2xX5FGiq7N9hmsaiBHLP7wMGViCYVY4ghAk7Q5JvzehzS5RGqKSWvMfjd88es3WB4iNi1t2jXpG3GW7md9d9otpB",
  "key12": "4GjaJp8hanjxDEH6oTkRabWGSR4yqiLAwqZqXAJSxz44zd8q1CL5reY6dczf72UhRsxVG5XtRG2uPYHTKEqw9pW9",
  "key13": "4r36y7BfaNFDmpQ22P8exNq3EkuAC1mQb5JqGSu3LCZuekbh1sbX4cCGhZLFfM2GEEryiRdb4HWVkJ2sSETXVZR3",
  "key14": "4oeM4FvbwnvLpSmv21hZTwiHkJqnrqiJTk7s1UETXW6LqKaFwGMguDXhtzuCjPN6Nf5fppXuKAa3GQPH7fAn9Pui",
  "key15": "zxQqMiuyLF47ann1pRy8p547unj6NW5jGdLoMpBYjuCUWX352d8aSajangbcM7RYoLP6FzahJkvKpHFjjsj7QMP",
  "key16": "5xcYBG5UrDKwN27LvWaz9r5JRUn1n7nQJDf47J31k8B6sbPCGTJFWXuFNYbEkAHWMsiWhiSjJ3haSydKLipWsjjd",
  "key17": "3zEyNLfQPCxUp93evk7X5y9zFyLPfK997wMRciBqmB1UoMpMBCA6ZkWLqXpMPWSrkH3NUNvpv59BAyBVgaT7Sd4J",
  "key18": "4DUcCN98EdrpP7T7A4hXMfXoFLZr1DJ4TcpvwJDBg1hvTLVSkrEFgevFRnQEyw5R91RZcgsggvoqY7nbBtSD63Lq",
  "key19": "4Zp8XmBZXRgzbohXsZdTEyThoXGztJAUdB6VERLoXwWmYje5RM7LV1ZSBK7s6P4K7zyifP8424Guw8nam2AYoCej",
  "key20": "5o7XpYSzVNLviQpzMTxtHGFWLodz9LxapdByWsYjtu8hitgUhmLJZFNTGjtAN5xPHgjajSbnXobMQopiF89osBRx",
  "key21": "5hcdMVUxd9zWPb6CiPBXuM5gh1houJGAH7w2fzYuNakwgGGkhzQWGuqKuHVnA2UmLrWgJvAyMczfmsRTjX922c11",
  "key22": "4mBpyx45XCeU6TwyeivTWbCpMLDscozMpb8wk9yFhR3U43mHj7CSfxmBgN5jungmJqUJn3ahE7tnWGTmt3bCoNrZ",
  "key23": "5MMaj7PcsLNk6cXYobKjqvWEBsvd5H4buTvECuVeqXBt8UYUmQNwEFx5cadLUhMBpuinGENNh2TdsrsND9kKLmy1",
  "key24": "5G6ndPKgbaVrvyNbREumnNBKFBfUNvRLYGVqioUhMR4anDE4LueTP4dxZG7b5RP5erYmSmJ6FSC7yxSedNyjqucP",
  "key25": "4EXFjdzmcs63wiPPNAAzNBPxuwwmgvGYQ4R5qXqGH7PqQH1j9iQLz2VTCx7f6Smm5vomwsyjrAg4aXHqW5EH1nDc",
  "key26": "2vzZLghvN9r4Qcjp6o3P8gQJKjri4uAmTAFqYFudPf3hkbAou5MNGYc6vKgkiu1djsumoTXpyKfkyVPyTXwKtis1",
  "key27": "esADvGNaPWqgZDv55jS6SvcMzKTqR4EjPW3fHTLF3eAjTvCXbXFGZ4VfuCihYYbWob5q3scVaY99pfGhghFc4Z1",
  "key28": "55kdhYo9utLy7CgiGbS26qeKs1vverT9gVpmH9r1sU2eNQLZeV5AcG3FPbQhbzQ3L3YSuk4WUXgyfnVKqhH39StT",
  "key29": "3AeD3tpeCYDzS9aHieERQwK5JZkjrxZwBdGbux8NDUfTjdnV5YfgyKTuVEpCngDMksyGF1ZMth2wKdoKGKu9aDK",
  "key30": "4DRfKGEPxnizL6s5jAUpHsi9rR5EcwkcRPkAFSsA5VZwVNj8SGMyrTynwCJFhB6TNRYHAYjbRWMajXNDVXSS7nYv",
  "key31": "35YkqEQsCS3HS3pEJ1NNHM7v8bv8Kcw58p569ANqre8ShsQrqCF6g3CnamCku9uF7jt9BfU6vHr5zekvKQvsJQtp",
  "key32": "4UKPGQw6ric1NQ8oV3svXhV3GLYV6JNspKVwsGi24QFx7ha3wNyQJ7oyD9ZKkQAsvR8NXsdwPByXYdGtuMjLa6KV",
  "key33": "52m8ANAfhXQaSgeFT55iu3noR43Li4bvGW25PpYkmMXcdhR4vYW98nxptsPUkFcgcao7fYVnZ4ggfpwizEAqHpDD",
  "key34": "Fr5PMJ3jWkc3HLgjpWYpHtpQBrsNUxdz8iHWwswydbo6C31FdhKGrhCzrNHuFqhpT9mjQXkoKjzJikFmTAiMQLy"
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
