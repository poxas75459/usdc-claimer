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
    "61XqdsKv1D6rXqpbtCnEJVv5GL2nZvgUWL3Zj57zffpvNkrD28mJfr7gNWJmhs6QV7QaEpwsaYc84beWo93DTtki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26gRd7vGipZhcA2qm7AuPzuk8VQMdBPK3YZhiP7y6qD9UudGo1K14ciQuBUeSHeMi5J5bbJw7c1hYsZuQre53qbA",
  "key1": "5KAFZrQrDg6DxckyUNBy67Mdxv9umKSAdLFaWj9DsHBEasCR7sm9C7LRHCdFLntuy7pJ8wjsdCFmSwbDvmZcWAeb",
  "key2": "24LXVMvajWcYwPntbins3BopXQH7VuniNaLvcNysMehirJx4yoT5BTGRUMFMq2DsPEzeFpybVWaLVoHSgsTmuvSn",
  "key3": "5xforUXijaGHKvu95uKxY5s2DaW8LQgHHBoww8Pe8GevGcPQLdCDqprfPNBnoLtJWqGk4XZ4hTWzqK82ge8QX6He",
  "key4": "58jnYQRtsRx7whWYJdSx6wsTaBhfaafuNGd29s8cUXqgjzsm2LnCCTkVuGVXttcVzuVYHFPzEn7un6DPZtYDWLMw",
  "key5": "5FFs1yCQmBYUFGfJMKKqZ2G4v5cXrX7vdHgBfNTot28Uwjjd6WwjDf8JE3FTAXcN42rx6K1tRSxDzsVqdR1jYg4E",
  "key6": "3c5hSunrcyekLPkJ75yUymi5vDsgermQNvXgGxAG6XKf8ZtSciUpSKnDrZ7fuyHBvviKZiENTMSLKAFsF4LB5yf4",
  "key7": "2m65YWwyz4JkuBN12fDMbNHj9gS7MAkkprB3j7hyGqyuvgtiDEzEBXKXc1122734jNoQmknxuhDNKncVn8M5qA8J",
  "key8": "5uirbMjdqA9EctFPPPLqsmZwKUn4rtXkg8YN1i4V2Lsog2XhhEa9VVDm2kyD6Mqkhum2NaMYKUngvicWqrgD59B9",
  "key9": "3d2Lc1K68tWcnaPE1zB2VFxP69Zp9MJ4d1x6ipvqrDoPit4x3T4eHqm3AQkHm7yGNuocJqNppvNvfSaMt2JKTgi4",
  "key10": "3jvbGegB4PMmvAK2HLzmVFXywuHDnwEDZmjHqTjdGAmGZZfey8EsZY5VDtFHtTWrLgCGJRXR4CpuVuUrfcJdYq8G",
  "key11": "2P5uAd3ZE6VGXjRNYtQNsD8QLhp9GkWQGq8HQaSEdc9SCgEcBHG8HXHf8oiofxYxqFoDoiYtZUaHmaJ3g1L1PmA1",
  "key12": "3PVPpfLZhShHYq45xwMGkywUeyCfVPpBUejrhqyVfmxSoRP9J6NtuK9nFDg4q2ujCGBXx5DywNTL3Yxh1n8ecbVK",
  "key13": "2ubsS4GxVNkMdpvBxaTX5qLRz7SKzbgFux6o5bueqxHqAkNP8sE8kMjzribJKMXnMaf9kXLY45dcX98xYMWdEd8s",
  "key14": "h6EAR84Zuon8UgpDoRkKadzBqmDtq6uecwHrXSWUBL7f2Cvjyke6zicVdmDLpudtdWRSvzywqHYQ7srppR43FVK",
  "key15": "42SuwHhinARKDud3hGiRASxdGdZg5kaiJReV1vzCg6zaGtAgr1PgcpmmyHeGrLZGLeDD9c8SdqUbWpZfr2UPfgHi",
  "key16": "5pTqnhPQS81LYUBhayXUddWTNEbMr4m1rZA5K4k9sC47g5TwDF1N8Q6j4Be9bBCdWpSqJYoyErtNhYEkn1WzgQ7n",
  "key17": "23doh2ZYdyQuxRiyxLgkBPWYJCHAsD57kc15EGezSjZcTNFKaqAbkQbaLkwRqXLDjQwdAQztszVGagxKt3mPMJk2",
  "key18": "PNHDm2HSP3nnethexd8jQXs5skTQLwFVoV62kxkiHQCE2ukgz9ysTHAU74tc8HgtjwCQ3agXSBgMCALcvjNEtov",
  "key19": "tgPq3n9MKdzjEcG45392Xr6PT2cwpuSoiUWGfmyrDtD25kkvB26RzZecLKsmP5pZbMuqyjkJGpyKhM9utn8TNgM",
  "key20": "53W5R5EQ2UgBJP9Ae135ZELN6ucmozgcHg2yY1epSVS2K4B3BuCGFQW84xBTcXrmVbNroht5BRWLhJV9AoDVQGLD",
  "key21": "2LCsUjPYvLv5Xc1XHu2aLBU4aVgB3WrPorkmhB5xScWv4kH47WizZ4B7eaYZXo6qnRuGMQbR1eS6kNVqjT3E3qzw",
  "key22": "cg3PrQqcTDHmYgUPfQz19Ur5ihunqMomLb2AiG6fcqu92BxoXhcNNH3G7SuJkamXTKANB8PLNAuLGRGEvzTJnz4",
  "key23": "4wtQE7UQvyvnCkZgURj6XudNXxNPCY9APoWAd2GLzZg1efNhc6JfaKVZWYH7QGKT7f8jsgUeMZVCzCGsrZYQMZAn",
  "key24": "bFS4xs4oU2b4A9NyPMd97LZevokPGbmfFShGFWu3vHyLA4ExhScbkYFLpG5wcrVhtnchQLBmAEYT5PEqSMvqfn5",
  "key25": "3DpJzKa2zh2ChquC9Wvxrk5Z9GDLXvqQVP6XaChW2jGfLM5tEixFxnhw2tdC5qX6aPfDrB5juvxcC6bRBc3KF938",
  "key26": "2o99XHuXks6L5VJSUzRiPyg1YcSTxSMwRLt6Apb4EpHZWV4ezEMcPNePb1zdtgj5EUowMKggHdeYmNKbH9iesCzS",
  "key27": "59rfjjs3Bs4Uxphn4G6ojKMqvtPcHrQTFiw7qbFgVfmLQuYPWEv6h8teYAvW8remaEoSsS1C4WVTs3jp3cg1oAuN",
  "key28": "BAS9txY24AktAG5PF86ANF1hj94kE8PkX8B1rFc6CFA2xSYMuNP5Dxv7PJfsCm8hksCz1uZjKyUARoWUFhgDm6q",
  "key29": "4W374HjFXdwpp6A7gSemi8aM3BB3YcqWByhdBukAFJw7nw3GFLXuw5esCN74dS8VW7apAmuEmkSDz6sq9U2GyTTT",
  "key30": "5Nrd5waniPu8trCBZxenkE85TZ9L87G7YwKCi7Rmc16TKJNmYCM8MUfD6Z1oq5941bNGcnKmxq7dxSVFt5tT7Tqk",
  "key31": "38okiZPoeYX4iSGxEp7EA6MDjVKDHP3tH9Fk5LVFWZfxE7Hit2NCWN5TSbuYtZmd2Hj9zrxhwr7qxUdtey6sdSCX",
  "key32": "3dhgccqdkiD5qBfZ9jGQ7w1oaJ5GhXxztESDUAXzrTT6afaGubCYH5U59MYCTFvcmATSVGPUNKTDtsJNFdw31QTw",
  "key33": "ZHUJ5uPSVzBn8FhbmtyydM778R1n2i229MNk33uCTMxbPEuYdtvTrDWepHqNrG3gTvU48SF5VgqB41TC1Wto7dq",
  "key34": "3EYHawpcfENAvWg4PHXAcwf47sfFfYPpGr8YCaHvCxncCc9ikkdAxu2RHuKheJ41LSn2DdUT8cpAscMakrWjkvJL",
  "key35": "261S5MT4NX6F5QNtv2CxCEuuXDBgaata8vevcLPCepMiYvToNFfYf2XjeRnMC5UxGmRa21fjUiN1GwEZacHGR9i1",
  "key36": "2D3LqRyBLW1dk9sfEkieSrMC6LUbHrG99GEAFQjW4684MDhZSCh2hE3N7Qsmz5P7aJyvWAgWhyN21NkZ6cWybYjb",
  "key37": "5RceuYA3VuwVwfEdBxpjCDLtoLD5LunvrVqKFUXCiCfEHdgu1XZUuKAcW2ZKXRh7U8RyuXtB8dPE8e78FeLJdso6"
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
