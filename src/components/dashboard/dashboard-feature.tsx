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
    "TP6PKtysB1KzhXysnzy9Ge8Mdx7V5NfSpMdrx6wXLaiTnDPa8wFJrVd9LYDF8siaaXTFYGGVppoe44XeVvhZqpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u9QfScz7dqvxrabwyGAFnqgJeaayaZYVVrAnEwXv3k6szboUEZpSsD7KErV6fKpdZkHHX2VKeaAzZyxSL2W95vk",
  "key1": "3o1gGvE11dfzBrS5WYZJqUSgv9SEaHkkkBrFwnciEfztXSWnXRAZppmJiSpfof6h6Ri9aimS5g4zuCzPGVyxkPbB",
  "key2": "4TzGgV5h9yq8jnea2azArbgQeTiQhgqxAEuVCBjbVmsGgm9HeMxJnoCQL6WDj6DcBt9LtZCSgPhtS6Hew1S9hFKo",
  "key3": "5o6ScBEEmhNKShrFfJECQzwZBtpzUgPib3VnKzGkR5gmLgrrJ5bpEtBs224jgXHEMy884hqfpVohHf5ftHkwsLq",
  "key4": "JNgNWaL4Janq1V8A4jDTZkN1X7BLX8LvmvDMxEghdDY4bBhTP466CTVbM2uicj8Wb2jfgR6K639bsrirZT5Zc3B",
  "key5": "49Jy21HTgmAfnJ9fDx7ecX6rrg4c8cbS17XDENwC7LpJtF4UANcRreXB9yDCJzySt5tiSPE9R2RkG7K4GxLaDZyP",
  "key6": "86EA3vLUUVDejiprQV9B1fmHnZrYU9p7yXdcEbC1mTgohnzMqnzH3fkRaPaxTVC5k5RnrVZPNbJqLmFoL6hSwaG",
  "key7": "3UFAkRzHMpDAyL7rFeF8Qt2j96J9zLjgGEi8BSnaWn3U2U5kHiEq95Gqto9kKAKwcUBfQEP4hL3D5CmsGmGbunL1",
  "key8": "2myQJWNJTyKLe6zqQv5u5vXYN5snd5WVtosajWtM8ujuoADzi8e7ibyh3AAQLHCGKgsDeU2jSub7VvZq1jYXpKvr",
  "key9": "ReyHHKT5BgirTSg49Muat1JbbTaKs32sE9rGfKj4h4XddqPuPJWpSqAA3zjZNdZchF4Y6HCyUc8ANcDb9RJNumi",
  "key10": "bMcSdSYu1V3PnBev82CUTrs5vMvmSdrkdiFjTfeqtk7fv9FzURbte7HVBBr6TnEfzwRQdDRAdAidd3Ngn8nMcqq",
  "key11": "mpKe2PpD1169v8B5ibV2Seg2b8Fqfz8QcepMTRW7jzDhmrEzVDrQFdtCWFxmqEfEEGob3cZFhsPpBZdzDh8bzTq",
  "key12": "5PLX8uH24DymrjcHN3k3ZcMtwhP3dNyRbL2iogKjrGBK5AvvCexJYW2bJs5FPuyphQkVE1hZQBZaARwiNwUfkM4y",
  "key13": "8JmxjTRhgkHardEoWZGi3iFSiMaJ7DrRaMABFPv1oenK9v2atChnutpszXRvkQgpX1NuxakK9gHbZWeY3kTrpGG",
  "key14": "Uh6uricSQsTsYnBHanqs1iivsaUv87qTSKwoP9x255S7UQJ7P2KJCbroARoJUxJW3BmFg93e6CaETRzFCWGyy5a",
  "key15": "YRp7uJJz3i2ceA7h6DhCDau6Huntw5HkG3VwTUUCH1eMFKkDb7ffoCPkZ2gLhjxjFUadt1dYSzYwuav173kd7Ye",
  "key16": "fhSmXKkDTZrdZdFWjDy3ZX3trqGGHEng6ReNYfQaQc7PrQi4EDHvnrmLtr7TKbw1rbFgYd2jVPR39VP7SvZotyz",
  "key17": "64kFkRpXdnhRfZuEJ79gdEaamgA81TaVaG8Xzw3znfuQ7JsYJn7t9A8rr4yPpmsF1B9ZoDaY5arR6uzVFa4jjyRY",
  "key18": "4oBTRfa5RY8V2UGn8ooc3REVjJoFnatuN7aFxdx86BVTBFSHcb4jqA3DZpJtmYoGT18XTQkoRvKT7k2VT4XC8J1q",
  "key19": "2JrZUM5bsnNuD9Gwd2wdYuqgAruerjNJsttmsUMchF5YchjJc5a1Va6wFN3AuGVBMVHrvrwGM6B9JkggS1aFiCMN",
  "key20": "3rgw2J29rsVdMn3cNfDH3tY7RMrXENpFerzbLDqiFW5crqaRxxVEnBt7T77r5hA662NsFGW6CtNo1HEwZ7AEb8nr",
  "key21": "3H8sdKtYkRm22eehrSumshuV95tYkzxiUnxjKTepb9Z2NtQPMzosdAcWRULRUdfAstcdBYZGL5onMPEQB7RBWM8g",
  "key22": "21D2S5V5TYZK78gQ3DU2yEz2p58V25gjfNJ76ZXwnDXXubCKLF2f29ToCzXDP1qvD7SXB1pz5Kg9578qbujZdeHq",
  "key23": "CvkbamUrzqGT6GckQyFx9BHTur7Nk9tvQnDeKn9rAW1WtiFvqaTmTXvsAxW8VAJx9CCkNdodf1L9QxtNQLfC2Ns",
  "key24": "3rM4F3AgNvG9md7nX8iZbGREErqvaxpu6fe1eopqGpzU6Ja5eRqMBUXmD1h3hntT9oL34Z3k6FGkYpaekLNL1UGg",
  "key25": "5MAiBMbBTE4KPMVSSLskGYi2Lpd2Ss53qo8UgnHn7oQud2GmeRPbS4hMhvcRXvBf1LtNqjUL7jzZsioUwFpLzNRs",
  "key26": "5qNxGFwYsEmRQj5XugdHivVUrNDJMPXaofkL948eSvfJxpxiCLK2MbExcPCeYKgn8gnnNqSWsEJq6YfKcj8XJ5qN",
  "key27": "41iZzjsSsFih4eKXDitKiCyt8xbrNPv2TJUQWm7Vk8tHsAF3SJsg4q7TkMoTqU6LS1t3A85YtmG42diK6pU1PMRv",
  "key28": "5qVY9R51iBnVf72YCArJ4XEgqedjiavVKvv8ob7ZzCaqHYXBfKcvTEVJjV7W6FK8yb4BiUCuZjTjGv82f2VYARyU",
  "key29": "4wuZ7sxoDCK9SYZBEikxYpejcq3jAywuzpiZbW9NreKwxJSYRDfuUr1okzNtwyWEXRLv7hmGAGFfe1Pjc6yVH2MV",
  "key30": "2ZjNNNXn8TcR4rp2a3DsWWMdFurzt8mb2wtWiPjFQ21XbasLELw7Rvxr4htK1fFPnSHDEsgMDkh1NcKPPUrhLXYH",
  "key31": "266YEAVjomA8QSNANpPk9pKRPnHxtMYPMkskkhwWp2rnbnYUkLMX2ubSzzpmgamjBzaBEHtNJkMDVeeKPheZ2549",
  "key32": "5bKnYhiDbb2BmMY4amULeEfksAKyQbT21FsxTQE5U59aSTMsa59ygedwEHYDupCMWnWMwbxFbJ142ULMCB71jKHQ",
  "key33": "GwWtRFMWAn9EoABFcWaRL944PJmdtdwHz2T3v1SQTwXAKgpTReNsKGZzZGgga7CSFMy7aitC8EMvgDuqPsAz3CW",
  "key34": "55Z9k2aqqzDez7U8g4atWvuHmiFN7P8A4SviwXnQb42VNPxwDS826MmNtLP8DfotK8MuKUTo9FASjC8gUjfyLyw7",
  "key35": "3h6MoX2FvZ7V6Vx9QtyUHuDs1jm321jvGHFMUYdAcJo1RdeQLLNZNz9k9JEZGhnTbDnqbC92f1qD2J6vnZuhpX3k",
  "key36": "5YLnf7evbYrFYQEidGrqFVeSzWxm8kJ7F8RhscFeszWxgXXUwFyxFf5yZQtofKYkoJZkC2Aym6rUgkTJvw1QhGbU",
  "key37": "4BNk1fg5Pnt9mysJCSgUDAbcFLdKx9avRWgUJESnd4w12BGr7iPLXFfCafXkHimooz3T6ENCdjCpuMAkbMRRcTDe",
  "key38": "2kbRiAaAVBnBRx6a7Zu6hUvTTzY2b9jVjJpJ2VUaZRcza5Eq4cjuLJtnLXSnsTgD6z3XmoJcAuL1EPF8QMSifLmt",
  "key39": "4kyT7sBcR1kGhKydcYYJBsb66e739oXHMN2g8u2gFKrv1Vzdqba5bMbsAt9DEccW6Bo3VfVQ93qpEvoRmtQjWq8c",
  "key40": "4ge8E826qq1w6517Dz693MsUYWo9xQxLKTX7TNp1PtDMSzuM8oHbsj6w8aR721SBUUf4dBz66XuaVmxsYmm8GRT4",
  "key41": "5T41ETSxgRNngB2DJMkgsCoddDJD1ixdno6BuPqCjNiDKLw6fJ5EU3EZRQBC1RHAykpV91xVLgLR9ih546L3eH9t",
  "key42": "wkB8QAa7uLJ2N3GdZjDuN8SW3MfLyp5BXaYw85APEebKSvg75rTtkRCVtkeZuSejZsKHTkgJ4uZhCqNTsrark2R",
  "key43": "s8m3uH4gyUeVB5puA7AEtpSkch18bcpJYVgZiGpncpJ2AVCqQBA4EDPa3RhpjmbWB5bbVL1DuQq3KEEd3otAtxa",
  "key44": "4fMpR2hNX9HWpke6sYghSU7xVJDBc6mxF4a2n5bMHNyjwVUcSYFj8tus1fB7jWiuDaETiejRYnJLJzR9NWd32Uvc",
  "key45": "5MnX6qh1aJ1WZ8JyP6U2eAwkZrCU7JLkfrhbHdU7JRTJLJQx8XqD977KdyYG6LExh5YAu9wVGTdZGey91DQQbqi7",
  "key46": "35mnRMFKRypFb3RF2KhWdqgZ3mbBiivE6A2XKke1vQAEYFhPSpVih2tCPgGEKUjvRjPhMaFF3B6PLghyShxV9Kpn",
  "key47": "5sYgk5LZetwDenuhZp27vrMKWSPW4ALR5XWfZQB6AprFjGYFMv4G4VrrbJXUVQUrsPnWudvFZsP66wi2wC3eq1Cj",
  "key48": "FQYq6j15nnXKYB19veGysinUoEMxzJHSri6KDabw7Qjm1wKbRq6PC5cGQudutbTLNnaMEZSSvdjHCLjTB8eEM36"
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
