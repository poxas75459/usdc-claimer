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
    "F6XDZDdcSwTjozKT4NTNosZE7GEuUir7GfrHSwem8P2pDGPhakLz1NaQGtip2RgpGNuocSWMETe6GSJ6m6AA2aw"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2Y69Fm8uak4tHqBEx4bEef7G38b6DWHDZQJ9rPEdqs675gjbtyxHr4Mss6DHHqhNvWDKUpod69MG5k3yveXrawWX",
  "decoyKey1": "2VzGo7WwMNjFxWJ2b6dvrJLjfCcP4Yh961WJKeuhSmp42Yynxc925EyJnQeGfE1BeHbzBpdkMyaf7wqufWS8SgxL",
  "decoyKey2": "2iuAMqVhHm49fBAVuwSauJjGdjhHaHN6pqyCestYz9EZHP94i9FmBxeR8VwcQjqDdwqPv4MnAiztH5jkbq3jsScy",
  "decoyKey3": "4CtkM17pJxCZBJVo3i3jjHChwR2Aj72puT1woJVTcz3S2mFN5tBUBCiq31aZ4cnHhQWDcp8AKhgvJ4upWmkUL2W7",
  "decoyKey4": "LcCGeSJwog2Mv4nMrsJViFpfJ6iYYqVv1smgUeKdM3w29CV9x1ZH5vzU6TWbax9su6SqDwiUgxcbT4RWNfwQTWs",
  "decoyKey5": "2rheDinRKEXk12WUBFfALLZPKYJ9TisUcKn6nCyZUYJ81KtNiAbwGR6ruV5XzLefP9w6hmyE8eTkSmJypaPsXGKd",
  "decoyKey6": "22XaQPxgMMKNHPM8wfdxvS5a93BC9MgnFv2wsRhFSkJJ9PrtuRVdbDb3z3KbwvBX1h5DbG7Tx33bCeLXDSkgnG97",
  "decoyKey7": "9eT194jYNc45MVoWh2KxbUt9kZUwQgxoU1AxHyMbS3y16jiQUzicvK5J9kPMrf17eDEk8w1BzDjteYQgzaEhVMU",
  "decoyKey8": "3eh9LDTGiz9WPcg4FxNbxGJCQVAmFh2byAf9xPbuLBMhwb1jkS2hP5CrW5t4RStB35RjWAXWspyzHecea9osvGZS",
  "decoyKey9": "2mJZhMuzakgy3qjKEKimqWAY5cn2jgsWpeWXu1XVYqsXa3uS7vMHratafmRS4ctZ1dK8LGMbUZ4ytwgZj8onu6re",
  "decoyKey10": "5waDBeDjAd9JQQXoutCNoCmszfJzfjgWxy1y7S5mA4WeTBMjMouYbKjxqpFMnYFJRejS8GhPjdjmGs4qqbZc1pz8",
  "decoyKey11": "2VsarSueJx9r2RTUFvtirqUwr7vxdZWXSBP5Dd2M25xrKo49TMB6BhA92gvceVSjR6r6mhCWtrt32Y4ujYL4JHXv",
  "decoyKey12": "3FybhAe7oSwrh5PQxaUBkKjEeg1ur3zCvgzr4rUAGB25d5dWgn6AAhrL8z2vAX5HposM4kaxkRCbaBTnFHoAQqSk",
  "decoyKey13": "5XKMP1NgVdzVV95aohU4MefNcWxZo4P6D4mdL3zBTvThgBLdykGXj59KJxsTicsLhbVEaTojd1oMnW2zerymfmQS",
  "decoyKey14": "4N7ety29nStgBYbM2bLJcb3akq3GANbYFz34GGaCTaN2uFXcrq7A51sbhyi7XQbGkJa2jQbnBAxgtNy6CevVoytE",
  "decoyKey15": "4s7y6hoP4fLsUzrReaH3iuwmXiGQcjc3uXLwj3BosJSo3u8onVWuyWeAgCrMsqDoecew9V5RtqXxiDDCoZkmPouW",
  "decoyKey16": "2LKi5ZY8cHNAa4yj7ywbtGnjbrxptjozhx9VDQMFwHfE24uvTeYbusfWG4nknXz4wbZezhBaVqdu6qroSRggXT2H",
  "decoyKey17": "oZRpmFonVvBN9WyPpzhRiu8UmEGcRvdUnKThQqkYCzCTTSFit7BHVRXjyPdTfApZaYriDeLF1PLTUq9QVhnUZhD",
  "decoyKey18": "KmnTQ2C9oPRGnvGHVuvo8SsJM1DqdNdcr3fH4HkkELDFqVWEFtNdhEn2jSiycTeiKjpCrF1rePrp6hJpCjYPu75",
  "decoyKey19": "2gQ6Lk2EPUGfe9pFKHX97oLvnRtd4k3PtWH1FeG32VrcDZACkFRTY5ovhhoEGr6wCBuiDpXMzEEtRjLBCvsR2hTB",
  "decoyKey20": "3Ftc1aqRzpJ3byAzfhqDwbZggWJxEeeZQRALPUTQoLj98WMYar586qv12FVBusVoaRRtb5C2vLh2dtpfobwv5MRH",
  "decoyKey21": "U8GCbztMtgR2Wsnb1Hyf1Q52tE83aq6HP4QH61aNam1f31QqiToKScQ2KxvWjFyuHrx6Df1V6T4qWpTy5dNZ3vc",
  "decoyKey22": "566CabK9aXWBKUTNntHPNiBZErwdjR1YGv29QRt7ByNFeWxCr9rxhgGWUsgPGerbUu8urQtkwhiNEDnemhNiuhrv",
  "decoyKey23": "2mFec8NgFjmHW55XqGwEfvN2yStrqAzHorauuRgegVttg2SzUGEaBuedkXojWPEEAztyFssGoFwJK8UCzF2rhrKT",
  "decoyKey24": "2QR17HZpvKB3tcAcqDHnhqZf9QZqSVETQFrgLBFniGVHLgDgDyanqbAwu1Mj7MLe7DuKKgyNgTxRgsrwmTFwq3Pv",
  "decoyKey25": "dyGxNywVihTAf99rQixrGQu85Ezz5qbat7b1sFg4RhLEtCHVB2FpggZbAoUemjo5KwFYi5d43YmF2vu1ERmz7WQ",
  "decoyKey26": "2kZKXi5xkXHXk5M5BxRHNuNQHpAPq5zpgsfDcYjVR25X53a5SdZRmchd1zH8w7CYxqfxr58RDdcQHZ7pRK3Wpxa7",
  "decoyKey27": "3kg8aRtXgdqEVsD3EEYAZaNyDtgui1SaAkWK56nLHsDTrhbTSHiYL7unHDb52Chd57KjgmTywNrpTZxLvAuNcprL",
  "decoyKey28": "5bmSasEQiKAMN7YxqUdab8wHr7QxRBuh2wXPoXWmcLjzGgGHnDSbvEXc815vMy7SeteQa37joaukMSCoVy4k2PZr",
  "decoyKey29": "5sSCB7rVyZ5LS2oqGhWMNb4sTJGLsjeUNW8CeCApfrSWsmFhVoZhPjCFFdPD1tvgTWUWgkCx9oLCs6QumvRFRKs2",
  "decoyKey30": "3ZM47kd51gnj7jKVZzkP4VuoKnPcrdfcDLdafKw4iLdjT6U8niBkCbrjvG3QCT6feWS54vMg7ZyULHQKhTrTF5Ps",
  "decoyKey31": "4MHTj6NKbhTPD8nytsWQ3MUEHTTms2JWNLp9TRQqZGhiNfWWukUYYgv6RW284QtyMR1JVMJi5fCFPzHD1CjjQGyU",
  "decoyKey32": "45cxSmRZg5d9ZS2U3d1R5shAWPacLwbYCus88LQ11GovsrcFQrcRbmtRgsTRmFP3uFAh4d3ZdxRKkhUicVc4ppwd",
  "decoyKey33": "4ngn1VZtebVjdbGKMu3QJRfeU7krx8jxnGh6G98ndLUPQcnEJYy4BgdYpmAhCxF7YMNVa3xjgxCNRQU1VLpkxhqQ",
  "decoyKey34": "4RcwpqAYiqBoaZu8Ld3UveMDVGkvMTrAnjZNesjDpkAdsrtyFSKMxxbP22JNFh6pZMvx3rz3NUfwSTmrBMRPGxsQ",
  "decoyKey35": "5vZRvoYSGc3fD1r54XkXZsPiDzHLsLcG2nnax3UAiFwxisTSGTENrF549e2Za9mmHVurLQKGP1zBAjvPRbJVKTpF",
  "decoyKey36": "3sU7AHTCNZaJziKeBEdUqZRuFdNRCqMYgH1Cj5GFMPcX4YgzVziL5oRTuvRdA1sNPdLQ1kU5uT4M2eAzLRRTGPZp",
  "decoyKey37": "phtQG8h6SYNLkCstvMWVvuZ9sRLXecrAdhnsizGzveaT6W2DQ9mft8LSH9YAwP5rKojmmq4GBNdGzXUhhE8CXCU",
  "decoyKey38": "4gXCGSLMEKWY1xok1PMBPtvjbnmZ43WYZ5NjV3tzveVq5U2os7WLkXQmencCCy8XV7Tw5JkDTjj1K9ZAvXptQw28",
  "decoyKey39": "5BA3b2knsUmDXUs1386FwSix6M2wgSHR1ZxpAfnjjsmsxBs4qdMxNEBnBmEuEGu1yWhg5VH8t3MCuVuMRHe6n1pH"
};
// DECOY_KEYS_END
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