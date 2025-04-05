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
    "5K7HkG9hU4UDBWgggjXfNcpf5Fsb44vZstUub4yq4DTjMtFYjDLh1HhegK5z5z85GezDQ1DGg5uQxCrkfRGLnTHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2digSDzeD9Uf5QFcoSUJVk9x6ghAq9aRDABzQTkfGnqAELunhAiyJYKAdCAFsT6X9kph3z8Do6rnaJ6ceyFn7dfR",
  "key1": "4VFCJM4x3kTjXrPu6TF9LtEQ9TizNfw35zdXDB241V8jo4kUBggTRY63yJkST3fh5oNohqxZGMghjQqBKesXSbUK",
  "key2": "5EJ1NnxnTJR3Ciwhds1fgDsRkK7tHZ6ZaK43qyewmcUnyAvUyzsPx5k6Qa7h7mMUZ9PdRfUGEXXENtbJSCfYtJxN",
  "key3": "2soADmsKSbafUTMNmuTBjQWMG6k4bhgG9Nb2KUdHnC4zQDQYtAMfWTghT5pAQYAsWwbGyWCnhYgdyYz6rcer2doR",
  "key4": "2F9Qf2SuQqUbbKNpoTPi2xTSWoCmactJypmXmuMZ32xjcNnB766CJedemJUZQNW62sjZjKMpyf5mgdjGkPG3KqFc",
  "key5": "4xhmJv9Adqh6DTMBRrPALefrqH88VjqTRBJSuQq3wy8KHX1Pca1hCBGVmxqsiZi5ZhyfAq3vnJmTyU7QUXhQLUPe",
  "key6": "25LNMqQdxntvPhTm3jsa56scQj33akSiyBgeYoy9AQKhyp6Xi7LUSXaVN5DW3M5J1pXVwtetF3tiXaEMZubZaRuw",
  "key7": "4WAhWKQdoMCm9i7H8JkXHs3xqZegbPxr3MMdsJjCCbkmQZjVbZ1pzYkbZXhfW7fENLjjEM1jVAcxGNXBJPfr1dwg",
  "key8": "2Bm9t4Lm4uQsNn7ea4aUXX5bvM1Yx1wYY1j9mEPAaDNvwfqRkSULwKJ48aSFMgVKnKJxYpByatAMvq5BEVBEwyPD",
  "key9": "3JtffiJe9QBoyLNxrncvpdQ8pWrTGURRiFZ5zR1AUw5DFbeWi9eDTLt63TKcRQ8rhrPozCf9ictSiumz3PUfLorv",
  "key10": "2sJ6FcfbC4mW8vsFxo5xsDswi3ajkbspygcSHSVUXX7fU81f48WcPo1nAie2hhg7db8Winoxr8jeFVtJNLc1SeBJ",
  "key11": "xYGiZzDYxXsicSbQvLRPxKvATYdWm2R664iHKQfwH7L7TxX4Mm9JUgP4Swj7mmscRTYq8pBjx3UDeeNCGV7Xsqt",
  "key12": "3s4DXdg7vM7in5JwZnPVZtecujvfVWSdjASvQwyD5XucJfLAEC35EX3neXgNKHsxqRtfLZ6fF4zUkXaJFBVXpY1B",
  "key13": "5NGT6otHutTxKB3CxvL6E8sHs5Ef3CQ5DHuXqY6SXEeCpvdcyZTtua7yKKHyZSLTXaqmRNVPa4w2JN8yDZrgF6GS",
  "key14": "4nJmbN8APuPtzATj5j1eHoFJkTvZ6cRpqpkSbzTA6FAUqdFpgXyr2EAR5WzJmByBdQd5YujEG5sUzSFzM3rXwaRY",
  "key15": "AntuxUV1QnugDg8qKWrE2PQFotSUpsVTYz5wpHLVEfiRUiLvvXKyHWkfzMWmWWWfH1VaEcPTj1YaEuQNfpY9nv5",
  "key16": "3C35r8LthTy57xcfdCVaFuRdSm8LW1E4836AVkzhF6AVNqonAMj2MpN4H8i3xsCVZPSvDfki9cvb169QWYkHL1nt",
  "key17": "2h5FTrDPr4ra54uz8sMAJQ4Q8CSfk35ZT817CuTSkkxiZmp3nnEFwG4MzX3ZMbsGVj3UHWLHBYePFYXqRJKcF2vg",
  "key18": "4nFYHFgfE1vQMukVrSwE8N7CMW2EauukHHr84SX8PYeZWsxaesf4EKH9bmXdB4RXnDGQ8avCRpsBJDNNPxJkRuu5",
  "key19": "4L2TAcHNyDG8BP4HD5ajYwpmtZssWixJ7LtGZYZMM98i5YheY8ZdWdAC2onMFie7JmWUpKKXmMwd3tCWQx7P2keK",
  "key20": "V9QEhbpKvbgQ7kHXuWvNFFxh6b8mEAHWguHJuKeBUQDvcifXTqZtLPdBpofZkwzsCMMCDL3yxUtqsV1gkwuKaJU",
  "key21": "KKb8EbJ34FVtqmc2Gn3fNoP2fK8JcfAiSrpujro6wqe5jVSo1hAZyKMYgPaaQF2TW29ncztUoPA7U22KVdC2nqx",
  "key22": "2AMMUtE78a179NJ9wT7u68w2RfkedL6E3uV9jyhrgVDfwA6gq2maJdH78FBbyzixEYakRJhK4ntmjRpTAZm74Kat",
  "key23": "5sYMgfXuDMkPG5nmLBekXgYemLZ7wUswPWL3VKT47TbtB1gaVSAgkpE2JhWk9PExsps61g1afaRREJrqXqme6zxZ",
  "key24": "5spHJdo8HaZFtufJLQEMZAjAkt1VwU8bgzQyU5pLAe2WFCD4Ac2f4F5UiMaTpfPkw7qfJbri3peJ3KjETVRm7C7R",
  "key25": "5pgMTtSfsMpPFWioktCRUpBny3KokRaNcVAwp1TDR2DTZrXsiXt8pqPe8apirTPgxJ6oazsVPhxc4c9d81JYeCRs",
  "key26": "5oDwkezvyRJ7hSEfaGVe82jCSsQ6XbjngNecddyvmj2cVbngSnWh3aqzQvg87yKW3cProaH9QjGAvsNmk5Xpbk9D",
  "key27": "cbznUKhEjajWqc8XQTt1zPTRDNZF52dRZQWHLGUppiVy5LwaBbdHj23NVpZBKAJA72rwgUyHPiMAgGXyfiDrz6u",
  "key28": "BfSp4XyxRazXWZohGX7d4huR6Br1FxEM9bHeJcJgD5PefvXUYAbm9XiFZDDfKMHgQvVarazp6ACXzzrdh5KsRMU",
  "key29": "5r7dqtpZgU3m5GNfx3sk1ZxjeBPkcXpZHP2nSVN3MbakQfZpkj5cxR7rk2KeWTvEBXqBNRCcGP3CPTjPsAK1EM79",
  "key30": "59mDvtKAHPkePMKR1KhXJsHWHtLdsDEZ98s3ZrLptFwHCoMcQT4Nn2hB2u2G2AQEXSoqAC484jDMYUZKcWHVtQzp",
  "key31": "5p1VCNdUC3BrEtLNeRWi7capQMVbdbd4rtskeco5AQLDQMyqz2DBtFxWB6z472DFVTKE3ABPKihBv466617cWuDd",
  "key32": "2GR7bQzH57vLAqgFUUucttpPU487PNL3j71nSST8vrts9NCzCnv4ooggL38ti2Kjjb7hXCyjLrpN8u2qDUMT6ykP",
  "key33": "5rbBFCBmxKUMsuNUMhvFuqRixKSSbKVvyLVMCoTAKF78maooMh2jtzBdB3du8bhcJdzFztyGx331z9Si4161LByk",
  "key34": "x3Ct16MA6cDLLhFtSfR4ifNfnwwGyrsAFi44Lun6yyYjDmGbostpE7V3T5BVUnR1pGRKpFRSAdoiWmV2Gj379Qd",
  "key35": "5kLnpfhFDXq1R1tvqsGf2Wr7EeuSuoa5Qt9WTgwb7SJpUkZ1c8VdH1sdYQyn7QQV1HDthGoc65BXzCQU6BxbENmq",
  "key36": "22PPojChcjQBh1wc2W5Lo5Wi6TwDBqVwbAnbzkRQwtskcHjAAZYCXonj73pKhk6sF1tChaDGQKrKy7DZM6tmjvDY",
  "key37": "5Tb45hbuAJiXfoFojih6nCWWjfyg5TTyFJZ5VcmJyofaNozKs8XW82jffqr8GpN8ozHdigwZFbpdMboWkKr22Spq",
  "key38": "4ZSyKCcHSNDLwxTSBDQKsnhXKaMcoKbhGucWGUDzKH964vASb3SArsFwQWyXFrS8wRV3VDSyXycoyMJr4oERwGkB",
  "key39": "4cVZEsy1w5T7MGub6jkYCrQERyZDJm7RMseqrBbZ3ZHKYBKLugPF7sA9apbTERvDciforqoDajMkynEz1wfopsNr",
  "key40": "41MZt2Cn674i3rk75kpGFwGzuAQFsbeyxxEzbgrJg12phKrez1jvNLQiJANJr5gZGg5ht85K2VoU9C6QtvthyPww",
  "key41": "HTQ313ieuChPUK8UbxB8VzQYCKgvPHhe3M3wTQoRzjDfT3aL3Lgw3gsMWpBKXhiWUjWnvF52FyFW3ePhKv5m9LK",
  "key42": "5bP9nRqoYjZqk8eyGZEgJzqKK5dkuEyhNzSyhUKcaXKxQ1fPFyXBhzEjCB4o9rbsJ2yFhfxfDuCza1sEWH2ARdHg",
  "key43": "2aUv3fSaaHnQ1N3dYTzgx4H19aMTum7sdvVtg2swHiEvWpNjRtP7yFATgDBkABgWx2qW1xFbWXJxoYdATTrVVKfC"
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
