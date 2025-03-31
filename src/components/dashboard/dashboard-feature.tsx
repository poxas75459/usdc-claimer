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
    "w1wRezwRZFQ5jY6xk2JbMiHRWi5JHDwwrTVUyBpMcSTKT58PzGinthBTyQgwvjABvsfyxcGboUBkeqrFkPZGZYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3haNQV1EdtgDHdQRRKTLxaMjYYqQiFu5uErzs5BF34YaqVSkXQN54bCF7TiBeMZnnZZKu1Ne58YbBB6Wsiv93CQH",
  "key1": "2Y1bhfBuvbRrQrjNjb8n7jCvzMKSjvdRvucCRPKM1YRfwaAaW4Z1rGMBnNMuSrxd5bmkSABbsT2a4YgJxqAWek5v",
  "key2": "5bs88xsVGU1SQGofdZ8vZ5mN9YRNE5cdtUUrWyXMt1V7Fz9owDWXuiQLeAKAzgg8p9zeQN3njAsFppd2Unzvvr4L",
  "key3": "2PZN9Xjo31g3NBkCutk7RjcURw7nU9dPoT3JCLKysGVgHAEBCmgXcERd9YzA2v3mQt2xVcgBsLjFBRd4CqjU8kd3",
  "key4": "2oToArcQyzoo3Rvu36b74FYndqumrF3wvy8XRYz475RMNBe1mx4mPcw18ZY16CDpcngD9cCvKL6fG8NwYSRz4FRG",
  "key5": "3xBgE98b14B5ape3FnuNTYa9o76H9QR5snKLpyi5NLrEiDxAMu2diZ2LuYaKfdUV3mG4JcxjhAPwMTHBgbBfdQ5J",
  "key6": "2Xh43ZKJ8oppekmp4GzhghXPH6ddNgwxix2sxJpxgpbpbyNGkPWvwtdkfzCtMbwpnBbVJjoDCE6Gc3L61EDcSCPh",
  "key7": "5UErGbP1D3dTTxr7NrRxcsLEYFXqkn2V3iSEzywiJWRp8s7rph62RJWT5SpgtsPnDDzHzEN9h7AheYoiUhdambUM",
  "key8": "2P8N7FZRPKdM59pry2x7yCBJWCpQEbUT1Wf7x1a5TXAW775VbrwJSdxdyQ5ox3tKKhuDPa1BgtnPGQNzBmqLTcCw",
  "key9": "4Bq6HYvScAP8gn49gh159qoCGj3QZQML4LuWcfnsxEVdPjZcRPPCcoabC1Uu6dnpZyudixHox4fAN6rJKiUrAixq",
  "key10": "3VcXNJSoeeejVdCY54V2tn8Lcqzz6aARsirHAT7rnawpEbdpn8pqk8sjBQRRaiFrWGCa4RngRu6tAWuKyWbjz4Bm",
  "key11": "5nhtBYDfumrjTR6Q2zLncvmUykK8rzMwUecb7kF57x61fUPDgEoc2cCGuCb6dJvN6F71vT4iMxBom2TBZmDRozV2",
  "key12": "BN1tKotJB98qxhiK6vtqJPm3mXy9neAA5RX3bWB4NXEkaskf4XPRPTaR4D8YUx1pUtdd4QKuB7o4UjvqG7kpT4f",
  "key13": "5FQmUcRb2EztyDiAhfb15HynPVTZuDrE94rJMaGPAuKTcgTbMQzsaLgBpZeErX9Zq5m1NJaDPUvvnmxB6ZxTucUF",
  "key14": "2vysgtWBvUaPeMtq3HexuHCxPKdZ2Ut47r77eUTNEytp8sraYFpyuMxoUX2MkS9K63RTgquxks5g8xsViSrJxCtb",
  "key15": "5HzvtGHm4Fne2tm5GjBDoMCHehYjJLM6YuJX3iUB1K7dsKRQmxfB93xGCRKWAHYJvKc9KnNL3d69nnzp4376i6p7",
  "key16": "5J6po3JawrCjzao5bkzhAUW4wJ9gbax9HYXV6HcdJBJqdTThpgCfJvD4jwxFqbTa2FzQDMiU84Qm4JA528tXYN3",
  "key17": "3Xdu4m3wnjvKJ19LhLuyGYuZS3ocErZwUM2Wxczq7VNGY9jM88wdxDLbXhjRNcg5Rz98EKs2sgs5AjSJjAGZ4vPJ",
  "key18": "5ctS6stFSmBuyUtH2eSyQdx2D9M7SKAWr9nYaE9SnmQCo5hQkhN3ZNmK1bZp4ymbukRyczbyuNRQdihfQvrojUj5",
  "key19": "293pbKfsutJeE6EFkUE2EUBCUJF6EdyfhR4sxz3a6wLhaYtW1R4JKtY3keEcpKRJpKEH96w1YSnou8Qh81num7Kp",
  "key20": "3Dj77bV4zMg1QPjw6bPwSjn26Eio4BpxSRPgQi3yAYxmR25B86hgzN6qhAeHRk6JyFRvygj1wH9okHdAXjBRCeVb",
  "key21": "2YmSPBgnE1qACytr4wGrDj5tuMT9XuWYUoSf1cm1huWAZNWMTUPhig2yYqNuKn2T7zeuqkqbmsMeV6TgLzhsBdP4",
  "key22": "KCgob8qysW66syjEnw4QXGDqmKtssbHhcNidMtBqq7DuSEMc5rN7nFG2eqRJSFgZXkGrzQASNQ71cibSuyrTpX2",
  "key23": "iZ2Kau3gvUAty5CGMEDZbvHBAhrr2oEyvoED8XcMLUHcT9MBudrYciL8kvr48MMjAq8grdmwXNDBb1fS86NJUE4",
  "key24": "5yVeYtxoqrvetf8wm49bbQRVqPXNHtygt5KjYdX6mAquG6gZ1APzCX2BBSn3d1ha4Eza1Mfr3mhGw1GLftfZbq8T",
  "key25": "LCiEpNMttvbAoo1jGwkWzF4buBUy9Kyb4UxFUPUW2jCzeGjwkmMAE5bDZMDnK9XDR9LZgZSwpHyz7ZPN9TztN5S",
  "key26": "5Rd2uMJEvvufeYjiE1ftN8NgjYYMSHKz3xnJLUYyAbNKkCuYPwWNoh9vHEFQviuCX6eJMBUof3FnshWMSgTW6FYu",
  "key27": "3oefvhvaEDHLBTWrHhwTjE9PFZMsV2v2se8m8gh6o3GYALDUjfoqGTKj1itogPkpayFCYRLUSgp1ncEi36ouDgoX",
  "key28": "2gHRzy5Ua86QvGd6Ln6Un3LHQPyqLuoAZHiVQSFL7ZsTPAjkNWKMkgvoPLuyjBR8DwFxFm5aGawTq14j2hC1FGAh",
  "key29": "5Z1hxtJ68bFYSeRXc9Wuha4vu1xn7AAZ3H3WgWujWdv7K5FCFzj8NUwgjEG5qFWvoaKJWfHw1ZNXMU73dNEoXwBb",
  "key30": "4cMc9yLBwthcCSv2iQPCGXymdcDni8kQTENHkHuDoyydwDMX4k5C3XghMjcuvWZizTYHrKn6SeMTgkMB843mPoVg",
  "key31": "3KoRDrZjEow16uRGkSqxH9wiBCKqNkC5A7AhWqcddX6RqnhvnzLpaBNgAFvwyaNSsJ9H9dvsb3BSbjng7jUhx4Ym",
  "key32": "63aZRDM5QXXngDdY1wdqaDCdMoMoUpXwNbLU6zjiQxeE476uqYhy4povK3rF1E29HVMEXQp7dSGsweunW82msonb",
  "key33": "3SbQguv27CeJHK1Ahs7jgRWgFHeQ9Xe8J73E2U6bZ3kD1jjcJQTEgMmktqBPxL5tvFpHfcVSoFFhvgsnUYeySnso",
  "key34": "BmdHtxDnX1MBkBk6wB73Mnhd1Syo94DESdUgdN1NW2s7nTnEnD3KHxE4dUTaVjmyjWAv3nhLD3G9x1JgXM1sKNz",
  "key35": "3HXmV7MokU4V9axYbB98FFY67yh3m76GTeqEFmPfxHj2eYjDXpcso1DXLmBPk1Fy4Jt3DRbco2EkjTHZFbvGXwEA",
  "key36": "4cPYW41KGWZqbeJ2CvfBYUmrPieYVfEfHJPV77pnooq5uttTk3VE2S1HbRjwWVsZkk7ZGLfUVbPFR2hpthocAvGM",
  "key37": "2WM4aT9kzvPG6jHGgY1UQX68s2bfe3qXqy9Tv4we8Fv4wDE1KcYU7VDhoo21VqAJcqkYYqjRupSnRyumTzfaepAZ",
  "key38": "3UeByNmj6ukVjziGn7Rce2S2FT4gSVjsLKL5PD3y9h5VR8ADQo44gNrTdGrsh46Awc62QwH2gKgEKNbxceSDVxyB",
  "key39": "2AFrJ18rttaUEEDMW46yFHtg5gYBJgwtV2fEzbB2v1wuuf2ViBTKHC83bKD651N9H4ab2yNVNN3Ju63yAFztgA1u"
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
