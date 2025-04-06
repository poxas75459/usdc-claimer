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
    "2qjyEqyfHUXmbFyFhgDLqVpPC33ksHaM5RobQQec2Tqygj8G83vkVL52ThRT6s7tgC89CWvCAYwX8EcCAWHRGwep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kSWTqahuUf4Lyim1ANvpbYGh4jmpkP4HgPFRU5qnUfoqYCescu7TQZtdgVnbw9vLwGbkJ8p9nDwa926n9Bbims8",
  "key1": "4wVswHCm8NqHw3HQxug2WXwN3tRs9AXWXrkdwzz679JUatHE8dvPFDg34iFv7fgrzTNRUyEXYNHjKGn7BEfRjSst",
  "key2": "Chu3epQpat4WEW3PR82NFpACDNxDfQy2TWtJDiGSa7e6UdTkJcZNA27R1EPHr9uA2TsTUumvEo4avY1tL1j6AyW",
  "key3": "dVxcSMhNSnJkNbzsEteXMNJ4UJkuRnw7zQ5fkJtEZB7xUftt5iBBo1BdkZ4LC7TueWa7yvdkX3NnAueFcikXgR6",
  "key4": "5giuBkQHJr6zr1QgFf9jNzD2rEQitW9QTvmLfJUQ1epRP9w3dV2TnQxsaEatoJzBh5mpnB5p6z7g2bGjvmVQV4CX",
  "key5": "3xA86RknV9CD2kGgmaLDDbmmgyLiqTngMFLXhbF46EvDvYY67NmvXmtxKZWnHs2RBvQq6gn2PNB6fvraXwBrXnij",
  "key6": "5oEX4AvhuEW4XgAKpoKgHkRrL4w8z1oJ3qnLRKToQgxfGsXnQtAxzLxm3CcZxnM1Khm4tye5Y89tcZooJrNgzcd4",
  "key7": "4BCcEJsXhdSKCPEhQsJcPLF4jMHxotb4YatECsf5e8ug5nV9EDyL88i74zLp63cxVzVp1WXZTnyuudh4QKQt8ZjU",
  "key8": "38Q9qjMbhzd6uFSgLt816DoMjeoGeQ2nkDi32Hqxoncpr3uanod5sy7pzaFTzS8aKvfmdVTD9PjCn9YQS3bpbvq2",
  "key9": "4q3HVPiciJ8U4vgjtW1CJ4SJuAaeirFVDfZtm2m85QP53N5h9n9Ac3QouspPW78TiE3RfKg6ugUJ6pJLXGvyJBQM",
  "key10": "56AvxNNq4vNagxTmsSnoyrqsNfwYVQaphYBabUZpgbY8qrFhiLFopx9MUR3yUUSdeE24whwQa63toMjg5NJqqhk9",
  "key11": "4ZeSWrPXghdXUzxC35gttJctMetFhp1JHwM1Pjk4jXnR7UGGZVThUxJ6bjS5eMx8VayHE5p8NaLefHT8ygsWXTNN",
  "key12": "Jn5vGoA1eaEDmGcbt8nBVCb79gDU2BQfXsgi1DsKjD3RC4pjPomg6vRxcgD27DPCeBgG49gFQUCjJvksh5o9QKd",
  "key13": "6b8xiqmz3xfbdoMLA6wexek61jgBXj29eVHqe75WKzRmRzb36WntV6QEWb7NufUC7f3KZ3ysRkG2LbJ3PV3xMFb",
  "key14": "3uhPLivAzFTN7EzCuxZd7WRLhyQGvZzAwjou75mVhELFZMyLHJprJiZXRddGHCJWydze9Lijs6CZgvNJ4NBjX2mY",
  "key15": "BvaJm37j6iEu3EWoFCuoVcpgik4mhsxqY2D1aWZrMgSNvkGr5fj7fAhpDsCNamHgaGBqeUvWhshcJPe995oF2jf",
  "key16": "2uiT86AMcHUKvKTwdT7MbiUAgf5j273n3KHbVn4NPaaZPBDV5Qfc6b9stXZkftmBtv8bgQDqM2S5hTzvireqNvZF",
  "key17": "PKUMrmNMSxANdTxh9gGgxJqWkoDngXkrdRdZ4JwMdAyfJhF6x25QCjVaCUj2JzwPW1A6Y9XJPuQAG7q6sdiMAci",
  "key18": "2pjaJ8d3KsSxxF1PPTtuMhQqYSo7Xd9a8QoTD9qdYVSmmP84nJR42YC93ip9akTBEHNiAwrXeBKsJsC6jUAtxhDh",
  "key19": "61jLLUt5kwdSrmNWsaNw8SNpaA6a79pZT7KbTgc3pFRvgBrGCP4M1ZiKt67Y2hQ7U8hACYteLzgufo5baCgbeQHe",
  "key20": "2UjdZVuAhWodesDiY3Y9htHYdfTXZzDjHCmBuaxcPo1Zp2ZFigmo4mHEzCTeuRqrbbkqRSpaErh6vNzWjRYMM52W",
  "key21": "YsUTihTJV4krxmzUzw3h9LTd4z7muafojvrNNuvwnYkAwmVmuiQCfcyauHWj1uvpMzFryryqUN4DC4r9YEtfYPc",
  "key22": "2HixQzenUDyTJjEPZ4yPMsme1KDqUR5igu5xbURpaKh9bPB17U2omg9eREozNvL5cBBo4NuGDCPpKiDuHVxaGZbt",
  "key23": "2XsCJKSFCs6UcgCTtj5hDduFhG9P9roFV3SbJtKZfktzt66qcXEvRXcRPrm3tJHDHirJAUTyNDGvfd8fCof5h1nE",
  "key24": "3iBE5JxcBtCK5wq9hR79mXxXSnoLomudDyaeuGXosCi26GEnftn7o8haf98PDHw1UvFe5dJnJ1wX3wSNe9HKZjMR",
  "key25": "4vYVFwyaFGdJVGt1p66sebXXqcT6FkXpVXAtf7KHMpFKAju4WNds6pZh1dD51ipDL5cFg44CVocnPWVBi6SqYTzG",
  "key26": "AVdLsx7ngLzwd2Bb64U7PjL5MVqc4chEV2b3Z2WDDvRD8fDRSVkjoCoGiKY2pMjGJCNseoiZC1FcTX9LDDnCfEh",
  "key27": "aCYJMDK7LJRCzEBaSvMejAHoboJJ1eqSBriNDbbRc1E35rxdPRPa6HEfZMSpDcpmyua7AMX7E1A1P5Gd5tdbsKw",
  "key28": "4Z7Wod41Ljibd45hsTpV7bavhhZppXUaESweEgqgWLF1WANtWarBEt8BvCdwbhZZd9aW2XFztVL97SkGhEYTThmz",
  "key29": "5pdBZ4V1YZyRqeCnDJgVEwQtWUGrHxJkeM7upRNH2tb9WKmLQG3uayZwwnUqzV8nBJQpoEqjcmrrMm661WhT2Ntf",
  "key30": "MchAUa4qqmQgRvbd8iCpr39ifr6P4e4RjJFvfsXXZdZj2Tu9tYXjBfEa5AeDwanDG6LFfKy6T1XA2YkwxrHLSUD",
  "key31": "4pGekiPqe6ZaRjH5MWEEcnuDbokWh9SRPeVmGFxRB7QgSuFupHSaNHsxcQKARm9UbjUgwDoEVKNi3BbCUj7AMWQ2",
  "key32": "3m45g2Sjet4ujubAank8odMKXSi1uRA8sKujy4TtYuKGFdoVNStCGQLRA5B3Y1QYva45oHXFPCUtj2GGMf1Nj9NN",
  "key33": "3ckzTwXrc5QuNp14BYPXvnd1tvPbcZLvPnaJQinrVixw6cYzjS4Hxi1Bdv3D4njz9kpS5dw1LfFRJZbh2kzvSgJV",
  "key34": "29spPVrW5k1eaAULtdQxyTvukzaWskCVcZedyAmiY2XbAtNUXwQ3oT4CUWpU2bm8AHWLrUX8jWGM8wnR56iBv7Vx",
  "key35": "3RW9Hz6JkTanY4yumKc7c623kkwrvq45MK17ajjBwWGEc7QX46Weph9hFzBXj9YRRK9GbMWyyU2G2Mv5cGyCNLDH",
  "key36": "XKafUjEXH9EQj2UjM6F4Jx8PUUmD4FJRd3erErqsxaQnfuFFjMq54DoWjKhJvdm5H1HpvoXiqdhyEn575fAsCAV",
  "key37": "25mwNeRjTkEt4w1uQ5g6GoAxy7LbnRKtF19ShTd5qXnL6QtuwpWdfkfKUcHVyD1KemBmZPmDrwfuttcaazvLRbN6",
  "key38": "2KbQHN2zcRuRpF2z7wem5P8aFZsQHVU4zMJvZqfvEAZWxZuiZbEHxsicEbBPggHWDxK85ExeToWcYV8Hhr55YCmP",
  "key39": "4NdG4QPJbFFThsSk3Bb2AmAmETqoZWs2kvv71diejqRBAG45RksLfcVfGhV7mXB6THQ3DXHYKSo3dnBqbc8fv56T",
  "key40": "66vRjf73M8iQmSSEsh9oZUc3mRUPoe9XbN1Laxsu31H87v91QvEMKy2aqHcg3tjSaj4ab6MkmVYfKJU44V8Cucq4"
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
