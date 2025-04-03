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
    "5eHcDqNnU6eFpqPtPR6zk8TZykQj6HdaqJfySMinENP6PFF55qFNqZqgMUnq1exM3AxMbJ66RjcEjr5ezwZ4wPmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h9jRaLgqBFRLkqxC5yrpxBUKVhVzzgDgT9Vfy6QCd3fUGFCNS68XWi5pC4mqvjeg6VSEBSZuMtd4fi8L3Q7rWKa",
  "key1": "4XFHBhFs48815NwtZt58rtPk3M34w7VJ5txvjw8kPP4oW29SN4Rb98tsFa9MrkLjZwKjCiWwKNm9Dcy6d37P5gFR",
  "key2": "5EvWrHakzqaXAHfs4oeDqNsXYY1XSwrZt4Lo9o5grH3V1WzGKw4frkZCanzrjpGhiobkcpSFYCgTrJebzfQyo1mN",
  "key3": "2z35PH2BuTddZxXq2ABZgdnKFvg9nWQvjuqzxkWPzptpFtgWEgpNF1nDcXecedR7ThVZ65myMbdzmsuaiCLpKmUb",
  "key4": "8zuVzBayVk6ccqBGAXKAhRWguhWuepJUeBBdbsHvmWP8PwrudXJFmdu7d9QJoXj4gFoadj89zx2ui3dQmTPwfD1",
  "key5": "qPGKzF51GA2bvYkNWQhAgFQdV3Dvwp4QspBcXvP2Ga94D18rGva57HQiQJSvJ56b6WUCpAsvt37WT2cCFWPfXzo",
  "key6": "36PBUDsnCT4Vc3WHc6C36QWHYATzhFd1MXpozaLnAuuvEgzDxLx9DwtkA4QpY6eZ7ymBJqpTY9hpgxyvQCBHF1u5",
  "key7": "21uTG6EgYKJ6iXS62PgQihchrzYUrNna3z7Y38U54XvYUrXNSavTV5zRYrKtFgzdpauvAjLLSCWaXAbpAXaVhSnT",
  "key8": "5qA7vWybQC1QeZFbzrogei3TahK9rhvVqanWpbEbRQXrJ5fPJoYFoaL1GajJAQkW1NTt7Xw9hFaWardFcvwJK8jZ",
  "key9": "ibBDfn4xbxN7QT663wFmCgCnv7te69jH4J22HJJyHJ8y1GjqHu4XgUvtMZzxWyXBn385ik4UDehtYYEgXMKnEvL",
  "key10": "38DK3x56MrMx6uDmMxmKuE63VhMjGgDfw4qERdJ19ZLNZpwXaZXZWGnEC1dZh8wQ89dZAc7JPs9v55bopNgYC8Vt",
  "key11": "4nT25kMTY7y4zSc8TosZbqnNdNQeqt7mge9sjp9hSs1rX2csBKLCb1JkKN8mKwYvto1DGR51PzP79XvKgehzutFm",
  "key12": "28xbQp6pLnARfU8VBb9Z2rBfTJoDr8TRmTWZvscfLDfCMCwwfgi3nv5whkvEdSMkqUuQpqpouM4EKAcx2ZTFyxig",
  "key13": "4hykfU4SGwEgC8KnbRxAZLhUNxrv8so4hsQR8Qvk1G3uZFZ15WEiRcqeobZ2E3mVfSmFtY9d3qXgy2TYyUyKc3aN",
  "key14": "2M7GC4g3p8nsG1AvWPBhJY6Mpps61XZLpukqvbt6GdqwZQGNo57w1gS2n735Exx3KEkonBBhKxXPzt2aArp8UhHe",
  "key15": "5cCM38d8L9ofqhfRc8QT3yW181pvEkWGFzDER6cMC7kgrCLFtnTZGVEsYUGefCaoi3pVxdGdti4dhE62z9SwPT45",
  "key16": "243LxXfab2e3RBvDE2QmG8vspEPxQQpZbfVuoNaG2PdhT9R9QuzUuBGmxqtPe11pWaWBLbCxAthkxHYT1uae2KVQ",
  "key17": "3LujtTd8dDGryPugKykVoF3e8PqCfJGA6eeAi6VdBAhzAGJPVqCwXqH6FyP5emmcPjF6TL7E97qcqZGQBwwc5e35",
  "key18": "ADjuT765TKCt9hZCUG63CNB4DLGBWpH5EGuvcgg9PUG79Y21ZVjHPLPLdAPGwYXXqWP5W7cQ7Jtzcgu9c7Kf693",
  "key19": "2WCGZpnkxYsJJDAQQno5S4Z19DfmiCB4ejXKmRdo5tjysZduVjdYPauyhHtmiPpL3FJotRQvg3TJXPJsGwH77TsR",
  "key20": "5wJfFs2mBUwpWDFCLcoCoqnUwna9cpfrWNr7M6t1hid315qDTuWMwC94RgxXdDmygay1iEYtsZZNT62dvUqNYZts",
  "key21": "VSXC3xyrNNU5v2fA6BWsUhd6cesQ9SuoNaVKEsXXshnnkiFcURs3yRaoqLu7ewb5WWmSjEoQ6V6s4MwaomYK13s",
  "key22": "37NVxMHDmWxAjecfiWS5uBCuHUtcPScRYg4RAWVByY3mNF6PBjXy1u9GWSMqTBVhwL4dp1EnBoHNaNPyX6AoJnMY",
  "key23": "66F8YC742KWwDe692bZd1UENmmJgujuNHnvQKTMoTaUT1TZydpwLPZEuv8QWyHAmGzAV34gCJEtYYR3JywyxxvBZ",
  "key24": "5ozRw7gYkwSAqGVHc1L21bWjiBRht2U43khaHjhrLERGUfPjqdPx14BsJ99nTFMtrFyg7BTh54aNReyhFPDCbxch",
  "key25": "4LUSUmfUG9XU67tKTvpa9gyLfSaCaFd7479XCkpitofZY7Vx8jgbPZthSsWrk4E5YFHDL1Qzpg2A5XFnH2CatYZd",
  "key26": "3kpspUHe9mM2pSTYQdpN8cfUjRUAWEawvHZbU2w4sSMFRPtui8Jqjcmj1ENPDxQjaHY3Tj4T8csZYRL86VJgvvy5",
  "key27": "5vgyGfDMo7YtgN2vLV53kBHPhRx7uD4RxJPb1PLCNsEqezoq4P5Dz933xhVnskjKsqNhZ85uixvNAFGuRxNFjJDw",
  "key28": "2h1tADAZQiQbczb5nTWc5jsw5fjd49wVCfwnG8GExKNELi7B7PDRvkNhsiHbS8n9Lx32HnNFwxKjZAcRZqWiSKEb",
  "key29": "5Gs5HCkTdrYWTgqodFCmwfrYHb2BbfTr5RtoQ8vesB9jZvkw8UQw8KEnTeuFC18JzBEC84eBPL9xsF52W5RhDGY2",
  "key30": "2jRuU9Wn2JGCKghHAfrVmuNfd6eovxDimwZmsQEqYNpbnjmq5HzmV1eKQa7MAb4dyygGqCwLHS5Ngujkj4zDwVBD",
  "key31": "38sYEkiXYKjpkxNBYMydwwwhRskP4R1SGExfWAMprmMpr3xATguKB8utENNXQcyj5rrFNU8cqAEgbS1G2z6EESYP",
  "key32": "7xUocLCsTPfEqZpbJcuicAePZwLXMqJvEpRV2aBkwEx8HxaJVj8QzW5uWsvvFD9F4JRXzBJf9ntjkvq9WyL8QD5",
  "key33": "5Z7w8C5iTXFW4RNU5v6VTVmx1oT4Bpk5PUYF57KxiHRC4YFPaGhmvKSv7kmeRB23htPb1GbGLwL7T6QzfgWGPt5Y",
  "key34": "2vPoz8ETgcB8KAnn3TRxnMMY1WoSy7ExXz4Rivbfma4grMApH4J74jpMb4QAWXPQzR52D4aSsLNr8XfkBTW54NRA",
  "key35": "4dzja8BSdgNcc8xvmX1M5x14PwiseEXXyhdMuYyvqCudcwhqSXo66cCFsJkNaHoMg2Hbs99zABEjEC141QSTXL61",
  "key36": "mgiYJrMvCiogS4QcjVuFoVFx4KJCfhLiaiidEqZzKkZxs4UD5rb4QggDAtWfzxAP6E8gfWJ4sWNvjMp841txy3x",
  "key37": "5aYNNLqnZWyc9wpkbAWffg6yzthXZKLNp6rW5UCnCnBzaoTDA16G25Pm9Kv4QtvxsCxbLi65E62shV6kiC9YESfE",
  "key38": "3PnaeupHNfgKuGoUn8fSvxf2YPkr9RHm3xW1ykmYBajRDRDe8jYFXXpnLaKA9S2sZeeC1mcLW6CKuYiJBZ9y4FFU",
  "key39": "NfH8pcmbERC8gbSxywKuqiUP9o7Z1hTNLs6RyaEStkZ1SH3oBJRwrxYqAupmQiegGbTs5h8wqvtes6qK2pQ5YQx",
  "key40": "JUGuu1DqeNTsoBjqWn6KLMKQ5zaGvtanrwU3pYu7yBuJNVjr1U8jKRtc5BwEmjVHnYgXGziTyP3wRCRzQf6gBZL"
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
