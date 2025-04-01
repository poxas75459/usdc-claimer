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
    "2YSECtFmdDx9qw14o4E4zKubXVMihDn22ZdLGR7zbqGjhQdNtwUH3VUBwn5k4Gq5sFFq4JyN1wi1kNUy5KGXg8H7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X5ur2auJLzphvJGmRU47jyqBaBpaZ4tGgeqTpFP9RjiDpMY1iA1iYPoA79vZHGdWeGz2ySCEFdL6FzGwu9zk4Qw",
  "key1": "A8sTPxcznf6aus1n7AR4S1Nxh6qkwcjgndjhJ6q9fJzBZknjvsH7MjkncRTn2VdtJViC3WfUuNuUqqxwsQdp2zA",
  "key2": "3ZEK82zoZg87ovHtLMrM3hDtqenQ1cGQVPuYP6G9YCqf47CYf9YMSJ46A7gsAXy2DTfdogXEdb2Y4d6HYtvbVskV",
  "key3": "4YcPhWdGU8Gz76Y65cznNKTTq9CAdb6b62rgvxMgHrUGLVFE91ufJQrXmgmcz9dbzpnpscCEvAMJBWHfBbq9BFc7",
  "key4": "VoXk9aKk46BkaKyZadz2Tgyx1ebAiciMSty7kANzXpBazAvLNuUW3b2mswptgagiWSwApwpaEb27xenFJXHgrMq",
  "key5": "4MuKgFPLrVDdPjDWikoqXAziDs8VncY1t4H3n18HnSc5kkFQZ4UrYpS4up3ZqwZNwyfDMYaMcSjRmFBf3HwqHNd3",
  "key6": "2qfZZxWUQcDvMEbJYPRbgpeTmDfbtc3YM43N1MVr6qGAJFPgv3aTArH6QbmUsaSEMoZPPQcEVcmqhNQCSyUvbFZB",
  "key7": "32PPiPSU1CCGd7sXP1UmvWm9zzc14ZWnkikyF9yax14Q3cqLhKCdKeK7Fgj1v5qmLw5TfzzuiU4fQjeka8QAnTKm",
  "key8": "49itzvnYyvX4vtjQWFFmnTT5BzUBfgE9tSS85n1p4e6WX7bgQs85jrCn4eYCX7JkZaj3WgaNRhjEerV2GTv3VLZ",
  "key9": "5qH2mVNABcn2rEsZ132RCDTo844YbasCiWB8EEfvXFD9mcuC3brUBmNCG8Dt8teM7E85nmCd748gE5mM2LMPHBqt",
  "key10": "2qw8BoVDefWTCGTsCa6uD9oGqv77r32fGCcdzASb7jFcyz1mtuvguQCsaoZy7GSj4t87pM6KtEwfH7JVKAzj5fsZ",
  "key11": "3ygR71wdH3xMW1LLMq84o5WoDZdaQxYXuR1ZG3kcn1NAB6tfriGGHUUncQY2viUVtbKHQqTeKP6jWA6xBzSc8cZa",
  "key12": "4KBZYCVfqj3Lcri19re51UK2hC9nVAEexG1SY5dan4Aa1wqo3Mhr5YGQBddMt35PFnVbTe9LojpE2uiRC1WgGezV",
  "key13": "4izAziVSdBnd5GbTAkodNearQscsvHsb4Z3oufv1v7DJPthzniBK16WuZ1LkEHaS1xXMrXCkrNeuKNUxA2WiiAvL",
  "key14": "42iEZm85Y48VqMjwimtCP2YDYaDRRtRVT6dUgZCuEERjQtjnDqexLmcA4mmKp8QsfrumBFUbmZG21rQqRWELaCMQ",
  "key15": "QDTx6XLsrYokdo8RBnYnozBJDui4287LwnSzEV7WbYj2iUa6SiPdi28UhrVqMUMg4qTy1gBtYxsEZhAmWhm4wHa",
  "key16": "2fuvLexMbUpn9Ev3yeA4yRRo15Wo9ETn61y8sJfesTitR89PFiChk7TpbkU7m4jmMhWD4t4FUJ4WJ67z6Er1oKGQ",
  "key17": "4t562YcpmEpZ13sqTJvaH85DRxv5ZTq2ebLZExaxhAUpzpEVDesc7kDprr1JMsEB5M1Xr3cYxZtVcTLtr8kvggD1",
  "key18": "5oQ4d1FexH6Wop5JtPSBVTCJEFcYPVru2y3RnVX6Aw6BFhriDEr1tsZyuTZnvVpQTXps9UKJWEK7jjo6Eo86JTYV",
  "key19": "4LMsu3M3WuYAZHEsv889EM5u6NHzDtYn3fo7Qt88omx2WQWoKXcmjwuoZyygZEuM5ynMGoLBLEfSnsGBpdWAf84a",
  "key20": "3f1dtxr4DnDgY5o1crZ6aALPTXVfRdZSHYCUrJkco3iWAxFU4uZieEJ84ShzjVvx5mVwNyF43AhsHBYj3bwuxo15",
  "key21": "3wdDNKpTBwaawZ1Uccu9VjNxg1ZC9GBjbxc2LATF2yizx1Ax3aoeQhJ3QaZDzqJqFx5xpVcZSRo2ZJiayEVzSr3S",
  "key22": "MZK7AfD7pnRW4g8tpZzaDt4kVFKCnhoKuetqemzENjfErpiKc9JjaqnkCqNVgpnVoSMZLqiTUckyXCoPR6FyNo8",
  "key23": "4Aa1cgPoBdtg9TY1NnuWp2u7z1TfiRpjQnMdaZ3KKkMmScwHkip4BADCEo73pfDkh9j2xGSWX1kfvwXvKkKr8ccD",
  "key24": "kqwvWVtaXejZJHoTvNWWCqpqr1A72QNGBErD7J4htNiL62HDkSqZUfoqxtyDMPC3bneMAm9yyDdeEREyNRR8LKZ",
  "key25": "5MymrN8x8WBZgwWfVUZsjyhzgE5zRetbYwBK7CC5r8rSpduS8aFjP8DooGfQi6o7MHquQapgGucE4fhcni1VyS2f",
  "key26": "4tBnwxVe39n4LYGwuD2biRnGbpZVqZ6RkybvrkfZSYzG9Spw4JnvD9xXCctoMkQnUjGTjuLMiHTdXDZdqgyvA1rh",
  "key27": "3TpF9CPqtVU79KmTnayu7MaRcL22zuyjVkEPzCHdvAzM2NFKSu1HLYSXU3HuVbRY3Gs36CMkgQd7b8a2zG83V9ea",
  "key28": "A5aiR2SAV87ApeM6jxD2gj2TwLTA9fgXNdmkzULT9wE49fMDBqpbfuFyej3zkGJEUB6fr1xngjL7E5YRUDWvovd",
  "key29": "2hww9MkrZ7J4bufQWD9ohN4TSjkQ75qKQ3ErfVyX1ErpF944WMH8rgGdzGEFgscDahctt6Ke8K1vqnVDg6HRd543",
  "key30": "637rzEKWKXS4Jr1sUopdFRBqff6DKGPdEAgVMWh7usf2nvNGWtYCvR5o5nPeLi7Y3y1jPkaaunPvbEfPmGiFm75N",
  "key31": "5CnjBNGKt1HLwo9Uyh5oQnLtzqT8mrRzxyDgLjFf9hhHn3LiQDnmpYtEGaNGBMyrprTGWWwvgbbc9hpZzsVpaxZM",
  "key32": "4sEUVJr8benh3BbcE2JooWjtY2HBs778t2GPjXjr98EUQcg3z1bpgWmNwk3JcpCU5rz5ZkM7Dm5x7ymB5hhAfswp",
  "key33": "4shUj4KDC88UyL5BwEPCPbjTCSEvWLVLTSGjxDBJwdKmdBBrXPvee3YxkRYozV1X2VG32ifv6QH6PPtF4mKYZZDs",
  "key34": "53nsMvXbsLgMu4Jio38Dr8q8swLuCWmMK2Y8gBH3LKaYZWxmmqEPP1423ZM1fECW72KwX6RjZXoYEbSh3ka37jU9",
  "key35": "2PaiBx4DicTSsx5WXRdjVLJC1MoCSjFmHtcqbJ5XJdKDm7ZNr4k9TVBrh3NJXNHSWnx5Ga4UGqVJmftxzwGanSQ",
  "key36": "2mRJZ9SLNQZM8HGJNWLE9U9hFAFZEESMwG6BWTS2eydHoiDFwkMkyDQ7b1KpoyUYmTFb5MRswKvw9QEgJixzvUPd"
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
