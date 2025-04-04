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
    "4NpHn1Q7gx5irsnNgq5HEPqPT58GL2eWS6yUHcYSmGqQAare469kWJ4dPMxAiihZbqj8TzoqPjYtyrTV144GWtzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "egPXstHUbpebXJKEqcfCtTqgRsUFy1Dty5Mi8MxDrNQD9ySGK8d7ySBbEgupcxRhsjieVbpfK5Vyj4w5eDMzENY",
  "key1": "VH4C13R4XgiRLTNVT7wg2ycMD4kwtYKkQySoos9oeDpdaCu1Jt1XZY8CqNFWFudsWpAtoTymEiRYGoWzyJphgwv",
  "key2": "3Lkv32MPVvJqyahb5vAxRxfd2QS1LkXTzJH31koRtF1C6AQ4K9pq4JMHg1nmN3eKzDTEzJg9o7hA1tLfdDaL33Ri",
  "key3": "2GfKdAJ4wNf8TvERUMZXsHVsGnLvd7Fmqq34Xmgt4ZRP5TxEv2q5qFBvmWuDQGz6KpeUWcHEMsaW4mGUMnhFcWU6",
  "key4": "3GYQjhmbrUA3FhfgXqgC3Z4m8K4o3GjaSwjnkZYaKkmea7uAFktgEshu3NNtFgnTstq6G1QFjGPxbziBSUa8uKKx",
  "key5": "4LNKEpbDAVNfZBExCzQX7t4FFU9YeD1FessjTqGdnRt3Pr1DR44PF4rCRyMZ5DRHduWBfaNhST16uoEMuDTGCa4U",
  "key6": "5zjXLs5bbrVjewWw33SnitPJqAHLZxC41qXcoM6qa53nC231daaeLqbrVXjXvGCh95W4KEF6Ds1RU1yHP9tDUuuz",
  "key7": "WHqTDp9P1bANLqqFhDhB5EvXLGg5WL2MjM1vd67XP3RMi3heGpnH5K3ceAfrK7wp55SKVRbJMhB4CjNcR45d1qY",
  "key8": "5gBczJZ5md81pMfWhYT45RjgyLM9a7EwAFN1UsHvBh4UBk8GZzohdVHwyf8ecYLFTmW38LdC1gr2tUPRHnyWB49G",
  "key9": "3Wxb989aAQHidokTjsNe6kdmthmKMQnG69vdPZYQB6ooWBMMLHihShzgPeERUGQqyxhixf4oGfWg5RZmFtChLuyi",
  "key10": "2KteekLck6qudGkcHENBnBYSwkXgmVrYp9UL1CDSMYFD1WLEob5hybA4RkRUN3h8eR6fHvys5rgEkcqgeoMeTGqR",
  "key11": "2U8jn4m5QSpZ2aNzDCCNuXJ1pCGR7guTkMnUjeVA5mwt3fUxTTBWp65ctxWCELWouHKjLhHKMebqyze8jTqC2U1g",
  "key12": "29LNBYaveNeZmZuEiypWyr3WF3B9sVDPytsieswr4LPag3mheyr818YpTcKvSbsgqZQNn1j6q6qPj9nGwpMBnE5Q",
  "key13": "CHNHZdsoAA1zAypGdM9gfBXBssvwSD7mawoQM3e1kke1KN5jUXA4HHs6EFmucW47CCvFXeoJ3AubMGnX12W66Cw",
  "key14": "3aBHMwNduV1F6P9Fftum2VnWCsdCGAoEUf9q4R2fPFzGfdtWd8q6LfcbGjYxYKwBtT1CQFGhThdaBQdBSbSL5R4G",
  "key15": "5D9tgK9CrqXBKA92vkQZyL67HzRXSpwffncgb7cQCrVv8jWmqKc7NH36Ud9kCKebdGRXW3bC6y27niB8fxnxms7k",
  "key16": "39CbCnnCTEVT3W7uGyGM2eTpsZW8PPdJmnUu7NXWxQ4yoFrGHQyNAxPAefn4sEANFDoZuDTsthC7GDGUd9kqR5Jj",
  "key17": "4mWSBWVus1UNTjeMEmdnuXFz62aUCyqqSqbTDHvHzmyhE6kc5zM6CWzRe9PL9mqX8aZ4PUcquWZQnNSnG9vmSR2K",
  "key18": "5HfpVg3iGv9gXD7iBdkHEj9477zNeaW6ea64EeEHHvyMuwRC2X5CRia4Av937Lu9USexNL78QeiqbvJycnD899gH",
  "key19": "TL5nFHzjNeQ7cLKd1KeEk7MfnqWaA45FNAjPwBQ36qqQ3hSgq6FSBtV3GHKfy8XMXoBsaJV6GKTzu29p3KVpkrm",
  "key20": "5mkvRUe3Wr7SQ8ZkwKt7DDBn3NSeuukDsAEop81vYkY76SXXeVENAYPWPZMFVPq6Znz4QV24633j3wPYST3B9iGe",
  "key21": "tLug5v4TAyxUKjzVZSFsheyUZjP7tDV279ERNfHf1ViodQSzELbk4v1Q3rngbYKTn1UFrBhVN7YvE8hmkWE8t7k",
  "key22": "5tELVmApXVAKFS4SSXhMiP6ZcbSUaE5p8hhuvAcuJofSpAbTXu2TnoWEtwq6HL9oYMivSVxXbgriZ3mXdUT3BrbV",
  "key23": "4UynfSNAJNj2SEyDsAV5NenrYk2Q3kikeKLwcJSdWAwNYHYfKTU21i4C2HWaYnbJSWqCedK5A2artP9SkP6D7Qyu",
  "key24": "5GDzepASo5kZYxjEW1AiT8xxmn38vGa6PbgbUb9m4jVdw3GpcC7a6RXM7CVddXkqnoArLu4rXH9YaRz5xxvQ4nqd",
  "key25": "Qa1Pb5NuHL6TTSDHpTfQVFNTE6yx49w2DzgCqTfjCPKugkPZRYjHzYuexVTLKMDTdcUxshx8xmynpNpsYEXikR1",
  "key26": "5kGCiPpBD8FYcGeaGkUg2dxuKnYA8iHcft6B6bBYqmqioYpQp8yBVz1KycVAo1uQRMmMc1ZN4LVMMFMCFuFRGpYy",
  "key27": "2BJxxVFE4MG9tR1KCG2GyGZ5TddQvBa2Mi93bW1KJwV7r1UPe496j7wJfbCDFkvoFF8GhBDKqQAogAobggy9TezU",
  "key28": "3q9Na4k6hAHdb69dc2WCkRoqCX63RQhTSkMR5n5ZXGFyE3Cyyokbs3ZtUwd9wnprieGBQadvmvr21igao5W3QGLT",
  "key29": "5YEXDpM1DLbv2gAqWynoiJf7nn7wYJQmiscdh5vb9iY1TX56CwmYJFZuGbwuJXhAGM3wud43YNjR5roSj7Ny2Phu",
  "key30": "4Nh3KNG5QiNvy73aopEiWyYrGSNLeBpWzizXuDvN2L3rZAvBJNgLNGazZyDt6vZ7qALwkvKs3oExYeWxNSzPFaYE",
  "key31": "5XnvaQHwuxRQvCwAwBtk1qgU4YUHiAGFJ6N2ddr5UWDmGNbMwihVg5MBaytZRKDqWubSgsVxU6MkvgZJY3MVHTLG",
  "key32": "64nDPq6Nouc5Jrnn5HxcNiXsDv2zLsvxDnivpfCNnc9ZhgwrNeh64vM1B6Kc8emed2rHhvSGSaoDLVPBbPdVAn5U",
  "key33": "4Wyf6hAf2Tc78qhamg8U2DV2Q8NoybvQRzrXCNQHhs4BqZrkQDDjc29bGwnATWYK3YHr6Qe6nr1D4F8vK2AvXBkd",
  "key34": "5WDzL9rAgLGS75uX3NEFGY1GWjMEQucs874PrAj9Tet2YKLrXc5Qq4ptZJXS6x6hFUP7wLiRjZoS1KaKEGWNzxmq",
  "key35": "XxrKjgtN93LtdRuPDpfnwz5H3e3GZkkbA4YqyTxUvx9Duu3RpczhT59TqHwmgRtSMrc39ZrT6rD3EYQz9aMgLGY",
  "key36": "58bYCfH7PysorqJeC44mTtNvtdskm49ncAfiUhKaKwMfiyziZsnbkuLB5QMeBxX8fmV8qYdYqP8jeZx2pzqDeCxb",
  "key37": "2hAqCMmQ1rW9fNR5tYkFJQPUo2jVAPxevvSGZPF5L6isi3Td2X3dgunMFxMtK85u2tGnzYoBAqgh4rynjJVStYds",
  "key38": "4kjnJyBwGNfjKSvBb5rukwFBfVujqMCcLNvTDPUz3seBBNXKYppmGsWecTWSNXxFxFeBjHXsQ1dYkPiEcE41ebPx",
  "key39": "4N1c2qx8aGrXfYA8CnSGV5idqBbxJzK2HB8QSseTNBLFY5s8yHFsTqoVadX5vZvj8m7e4GDBtAJMkV4uhjwGbUr1",
  "key40": "5i9efsDJEQ9yGVtXeNPnuXTTwNw9SUEuJ6j9xVBVg3KAg5vfr6WY66x3sHdV7yFuAC82gPpMPX2f9ak25sYf3qi9",
  "key41": "4vGHbP5qCPZD9EqwStiiYifHsCLAXiQrWFo4cKyHZWUekxnBiuJh5kj6TU8sx3Y5Eov1qxCNrzcDhHBCJLNU8Dge",
  "key42": "gwHMXk4YhbHkhyMFeyF4oE4CU9o3HJ6Aok2LJMeebcvJ84PYgVwn5s8rexfmapgC8kV2MFg8dyWszz2D93eYikm",
  "key43": "25ciFDVM92y4dbWLWeVm9h2iF8dmr32uoYXqo1MrFEdYo5riVZhwi1JAeV4DuQdRmcgrSVF5XFCLQxKp2TH6ZD6f",
  "key44": "4uWvpPi3FqGp5nDMs4meQN4jCZXYEFcapmA1hLPsbtahAdrpizXicuERhf3AQSsgnkppctp7eHJmmSGVpqgJcTU4",
  "key45": "2fttmS71bY4E3K3jA5nVBMCgBeP5zJrtWXQzqHJcq2wzF6ymQNicoB2GSXD796ft4buxffGXqBnbcgXDPa14cJWo",
  "key46": "25zsAqrBXEnCJaesGYhddas9wjrspnT5uwqNygxnFvaPvBebLnZP3YDv3v6iM8zyPXzVCPtE9WXuV3LFwUKUtWVg",
  "key47": "29UFjocmxtxts1nvZAKGF4YGe3XFgPoKgFCeThqU8DiCLkYsZF9njHHsACMatcze59hYg7DE8fXLWjb51nvLTpKi"
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
