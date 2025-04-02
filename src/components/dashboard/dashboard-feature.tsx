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
    "3W2ex4i7cgpJGWs6R8tiaNjnJHM19ouL5aAPySrCAMqW4LnrmTnMKCTpg7buSSQtHdn5ygFwetjsggFXhbxcFq4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uR7NF3hecD7UDEw3ymnfrcJW1jKukgcRE7b5BuWGPvx9Ba38u6USBoZzoaYXA9868DaP4W6kH3XC3kz9TgjrTLJ",
  "key1": "2SEZMfkmMwaXFVnLpf7TeX6JdZQB1x5LUaT1Syws1UNNiTo4kZGtsuycUBvmakULD9XU4HdHYAXPiME93x51rKAs",
  "key2": "4c3w2XpiFakSEQk6gML1LRBtEzeFLvaidWu9o5QWGRu5Lnua9pSRR7m9vrQQecmm7XwPYQwU2GCdBFqL1PQiuqAv",
  "key3": "3wvitwHmqeiEH7oPGRCoafg98MGcJApXwng5Hbib5mHGqj8sJ9chAWaqaSQkx15hZgKHqffcafT7H2WqPJf3Zz8J",
  "key4": "yLwudKR3TsS15K9Sik1urbtou34TgxGhKuqqj2m8Lrt5qnYYmgCJFaAGCDEqvYWK26RUmPM3es3QpyN1uKeNAJX",
  "key5": "TrdQ7UbuDK8CtFUJb38GCLtPtBH56UgtqA23MsAy1iysydXP4undxEnJXdUCnQ7Z27qwjdz6J94sx1vepzBeyNv",
  "key6": "sQZrEFCSPUpHZubXfJtRUW64mN2pD7fxVmkYpn75LYHDQKJ7yaYdcrsz7bbgFMsnGeqDXojhRFdqi1uS8qkeDAo",
  "key7": "4STfMuRgTPvs5qcwL4UvhD1s7n5bEnF5NzGXpjy77TwDC4dUu6bgYYKUpEXgjDBETMC51S2gcPDWfb4nk8RrZ5GN",
  "key8": "3cYkUCAP3SvvWz1BP3LnQo2bHSegPYxRev1gW8ZK9TvKDD99p3BgKaV6CD8TwpBLo6DwR1u621QcZ3AnL5TX46Gi",
  "key9": "5WHN72pnHffZv4Zwig1Siy3zvRLvp9kddCv8Y4t4myy1NWcRtyC63QpkkS8fdJ9WFcSQWhxpnPQGY3jaV8ygmess",
  "key10": "2HR59GLNXtEzPHXa64oUGg8rQA8YNN8d96W4mTRCScTVoaqpvHPyAHMhA8gGT9CfWgd4zkopiNPTNoHrQhkKoABS",
  "key11": "2GWTQH1pg2PMQd1TTCnxkeyFGFjY9FbsMSAXsFvK5ipYQRNRenim3UwXzmomzB9f8rkcBR4K9USWp1LuUopG41y3",
  "key12": "HQ6vC7n6QCu6mhYq5UxAC2qfbWg6s1KxqS4uhi4Sax1CFGEWwfTamHxg59pTLd1wD7w9P7EnXG4rGw4CfJ2Xggn",
  "key13": "5F11w9pRMWpWMNYK72g4TR35idHL4aQqieavv5njYPcYQcWZA8bhRV1UWTN2YwSPycRhCsLyxzwXZXx3p4eCXoHA",
  "key14": "3aFzprgbC8hkbzk3vW5dDr27jkPBqqaPTMhutS5FsbwRMr5HYM6Q4weXUjHU3Qe8Y7AQEjaXXX7mpc7XPPgadnHX",
  "key15": "4MXEQkbxdbcJksAX5nVGwZ9KPx2yxRgLuzxEkQqNnZTFPmDkc3kFZduUhLPuyaS6BXWt68yvERjRRno9Wrv37Xr3",
  "key16": "5beN81HMUsdfZwQTRaQ16N3mkkNkKjWTgZYUehVB1Ag7AAktV1KbTb3iYBDNn3n8q7tu7kJtnDZ4osbPGsMprkJp",
  "key17": "3JuxM54fSV2kT5nwTgqBaAAq9K8nybDCXxJq8ZSqjZ81a2Tn81VM5XEgB4MWAUUvqmVquBiA8FVcvJf98XDam9t2",
  "key18": "2N33XWduyUJu7GLKqa8GbzcbLAtmXR3EsTXimE22ezXVN9Kbx8TEGyQaEc1G69AsR9rvagogShpLdYp4MyHnbCp9",
  "key19": "4iotro5YaJS1ahQcswfUFXKbAmkAZbv34bNAvVPzD87ZwJLzG7ikC26y6N9VWemE7Yrp4FdRxsNAqgj3trx6JLgp",
  "key20": "4e2or1tthUgY7Kvhqt6Ltw5RfwWBQCFGXZWKUEydRcUy97CxrNRCFH2pzwwSJTkvMAuxWVk6QEPWTEgHPZQhLQTg",
  "key21": "5XXo9J4sgg28gV67REL7BvZ5AHW8dSpPNZaekeJUWuud2hyCwzz5CPy2sYmVs4AVSwCGe14hy2TzsBAMUikjsLAw",
  "key22": "2RUEztwhxjMH6juNHNYhSkV5GY5hT6PVs4bgNomjXouc4jMCPQAJBbn76x2HwV3hPxx83xFAu7XTW1NVaxXGQf3h",
  "key23": "66q2VNWgLn4qbE5BP3R8Kkp61yKcoEVFiPCNrQF7w3R9PBYchdR8RrkkuGcySMBV4Ji5VRcNtNPHPiaStngh9nja",
  "key24": "2eX9CSst2bMDeSkNx4s4xecaCT3UVxo4RQdrmRMcu9PUHFiyjuzsxddqpUzh21PP2yT15PrXAoCSMqjknWL8hGMa",
  "key25": "2xw24EHth5fACs785QhPBjeWfuHaBv8RAFBu6QZT8HtNUveYQouBVgv4Ngw1DhSg4YPechVEDm8NQgzhfy2szjWm",
  "key26": "35GvzhbbNP4XuqFsXErcpytrK5engqd3bSKRPsGTvCQpa3uw4DAdSXDzwLjKF9RzQwpL2ovpqoXm5NrB55NVFd3J",
  "key27": "67aD5wVETyYW46hPoYM1ciJ5bN2VwnJUMiELzsNkNgBzXonZHS3CXYw8A2Niv3W7wQqEM3YuZ6HSSt4DCpghjPwk",
  "key28": "2ynhHzMBoYdTCSLMGqGLgbSFshPPAwKAmequMjbpKatzVtbkNYtFR6zBqM9KgduxDLtZjbBAx4kXLBX6i1r3dD5E",
  "key29": "2U53V9GsqYoMBegJ8SLsTyhYACaoyf3DF8yq5RSzWLkennMKtrnKFx1Vr6Wxkq2RkXUM9epSPbLWr6J2BYAcDuCq",
  "key30": "3kNTzpCqiWEdxcfh6WjX4X5cD5zyVgakrPzUenfd9dSSxy9jXUPsDoAa3txboqDRQwynVqXVf2jKE3Tt4TZb9CU5",
  "key31": "5dd2Q7njz4xH4JbYnB17yxVVozykdy4WwJC7vs6oGkNSQt66d9SgJD9Trk8TXbMvE1UBMYwvmsmntRiiuWiAy2z8",
  "key32": "gPdwiMsno1fKJamgaA78GXkZSXr6PJUHuFCdWupkuufxBVyw6WRkSxweL12JN9J6H2G7C35yJNq3fijtuQG1jSc",
  "key33": "8kjK1MRwaAA5ye2Pou9EpM9nnGNyw4mijuYBmq8XNk58w622ycGbuhXdDmbz1d29NwSm6o8pfDzJpdkDPFZoJMi",
  "key34": "328HVdfFGkZHB6L4hLaQXyZF8tHsUFaXUvMz88bGhAziGaT2gxe9JVLC3q8tBmkjcbY8XArvd7Ep7VdMsF6vRPWt",
  "key35": "bC6U3tHgL7Njr8wkz3odGEhkASJEbkivJaFtHQTYqRyZQanRSuM9ED89jWZN1ZtNPwW68UsH2tkHWiMnERBDBjA",
  "key36": "3NoHLuPxMSgiMeya93HQxCgcgMhW3SBdvpupaT3aqittCNpq1R3TWBBXjwSKUsxUYa2n32FurHnkvywoqSNJpAuc",
  "key37": "4HxfidygxovCnprbBZ8UGQqWZztuSW2eSC8Qp2NKcTeXQhMRNTy3QKGiDiwy2h7bxiaJr4yewxFrThTbzpyCtEhi",
  "key38": "2W51CZkKwPXtey58RPUTxhLA83xDiTcyA4NgqDkwVSFJs58daW6CaJsaEGWAiKMMmaX4onJrqCDUTPZgHt8VTjja",
  "key39": "28vzT75saNpTJj6Q2JDvqNyWFoJ33Gnqbqhxf8DTLdkY8GPNH1CoDiTyg5nQr3jUtRYS9AUsYsuo8Cozu5njxxvF",
  "key40": "2nwTi5Z14syqzwLm7VE3vrLZi8rmoooi7WrzJAEPxJZ27TZ8MCJcDstxFUgemxgmxiK5JSmq5KdxuDfDdMeriUmw",
  "key41": "37N8jgwPXBb1LiExGNHRfNVHRzii4ZkZt9kEGPc47A2m5xoKmVPVhvYoSFyRP5QatV4PeAyxKTB7A73hd4hcDqV3",
  "key42": "3gA9mYymydu6qiZVfgy8snqgVPzg7nKG3nx1qcuwWVbyqKckAVNyu2dMzNuHKQorLcudT1XZKWv5o6QBs3C7vEDk",
  "key43": "4qWkNneXnzhMwZYgwoKDBfwT6t7hiCPLCYypERFjCUjz2vHmJ8v5Zu8PkPt5hdwDWxmDUacqJVB2AU7enTV1xLFG",
  "key44": "4UwBRbrLQRoQ7HcF7Z8BLJUQvrAZkjnz9xJ5bSmLAWQLp1B6z7WvmHLkf6tcV7VnstGuPKCf9dwscZkZRA5wgTc2",
  "key45": "29i1xWNbtps2DTZBxEWjcawShutFvgHqKJTBWd4QQxmztgMhSEL5xPjARSJ3LiwZxnw8DK9nxK9W5AbTzrrNvDvi",
  "key46": "2DysnFyTxr9Rnqyf92yAEaYtgwxhKgTzyVRfmbx4aXLkgzZyEYMEMtPWEeiv4TdRKXFZm563skPUN11aozUK3MtQ"
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
