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
    "pDwQvhkP4Xxx8B6LrjCNiSE4UTtBB7SPjFkwhjb5HDEABtzn67BnaPeR4RB4hmn89LLjsjQhaYmJUB72HNefqMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qU1JdjZs8HV3AQWJ3VCp8zcfzVQmihet9kpxa94bqzRkk58F73tdCXCKEQnExgPGxWTnawBGgRtSQ1wtW6nbtWN",
  "key1": "3sC4zmxdvKD8f3xnfpxueBm4i311xrjLP7dPETwrMJdKZbb8NKQL2tJKndSqScjpVs39UBAoPb2RJUWpaanwFXEP",
  "key2": "39G7xYBaxRaPDBdsxzSABsUxJ1WNA8kBeiLTWuv9vXeye96txBV1fzngt46bQ59t2Z4WqSpQWqRStvzGiPtevN3",
  "key3": "2gsRyYbeDz3NiFGUmL6ZAV1KxjFyYpNFyfAG5x4AKdp7cjzv551T9ZBuoX7BHNj8VsKuxCWRwZkdcXY25S845298",
  "key4": "3TjZ5vvf1hKBZkjnYBeVm7bpscTAVrgRY59EjEDrDcirVXoU2QP2VteCrSP7BN68Kh7rUFUTJVXhLKtrR85YyaXD",
  "key5": "2ysjvPPNgS7LTNSp9RPgZHBHbP3AUP3T7SUAPSojMKsfLzhV79QkMCzPoNjeGcUYkdtdrf6fDwiyVKj2gT2JT1rE",
  "key6": "4GCZTjModHjyj7RqpiwRHQ6sf8UetqYpDPeb2NPzmh7uVdL6Sgp9rBKbJGeqdFpzfoiHk3JAckn1CvTpvc85Nk65",
  "key7": "3S2sveHeKbS7D72Vg7wT5x7XS5dQHPR6fSVSnHTWWM16E8DtpcqiKxyn1zmRpboSaVZX52VqDewE5GzvYUwe74Ra",
  "key8": "4uCVNMksUfdq6PyVGqA1FjaCtDUDpj7KKo5nP4kSKmV7i41ecF4TxecEDnRpxAbpBR5Fgz496e7RQt4jUPZuNgpz",
  "key9": "5MAN5kTU22yLrPmW4APuoMFd1ToRc7uz337Aqhj1ag1XJo3iCYmHBYb2vNPjT5uxqfockwXRD95WxszjfLH9rTuM",
  "key10": "3HPrH3zw5wWD1kN8Ws8qQr5t1iuAM8Sy6EoSmy6cVq4nVhRWSenqChhALGX7CTztRagAuL1NVbnr52wYL1SUB9ov",
  "key11": "4ZicNgnaUjvhsM2HMUagkxmT4KfynKQbkKgdQoD26sCR2UnopoFEE232cYFgUaLvHYKm6cXH3jP1kEiwWqYNpwgg",
  "key12": "39gHRj6t7Mvn7jRBBBTqpxq6fZGViyFjJ1hpFYDsA6APSum9royvu2i6EiLhpQmsZmvRz5avQdU9cdD9W76XPGUa",
  "key13": "QdGviXqX16JbdZSQVkiUWwrFH3xw4YGRrngMHtH6fRxunTXNmESwtdwr5yGghf2K7bf2ep6bu8uE6Lc8sjs7p1W",
  "key14": "5oy1xodptgFwSwn8Vkx7icDBXu84BvXHZHBRt89gh4Q8pvhEFzyLjRqmBMT9Ns8r9NM9jsz9D89TXhGNnTFUrtKc",
  "key15": "5W6yNDuKpgUHoH9Eq2zX1iw6kPQh1A8t3yoGxNTrfV4cyKqX2oYfjyAC4DKrXhLbQLJF32GuA3qjmpV2XMxCm8tP",
  "key16": "65o91AyW7LGYJdKiEFYrVtsXosokkCqE3n6PSfsryMfN378scLtGeLCVhWT9G1wp1VpsbCUVjmZahFBXzurDDTvn",
  "key17": "XHtawUj7no44Stu2shn8sJc9pPzHrvtoyuwjzQSEffVFjuvJpi2FRbTTLGcptQSQoYnvCdeLVVnU3VWbxup767v",
  "key18": "5fYiu9RN61K5DhoKJ5nGJpS9mhu2fsRHGvHXKEiTzJ2xwPmd9JFwJsR1TLbQZRovmwaUMkRtSbqqCwa2SPZBu6J9",
  "key19": "5AFkWgKgvTbsioJFUpRkYEgamKWKUPRd7kgAjsTskuXtZN7TXaH8gT98zL1jbkgG1aG2K1ZHLL5ZiwAiGhYPicUt",
  "key20": "jLz7LyMfS1QYbpoEN5pF7n8F2Em5NDsTaKihDH5BihXN2KRvJxhkbqJrZaaNEF3WXaEv9PFbX2jsh7wRGZ1waJJ",
  "key21": "64wmbNW7QYipt7SsbDHw4G1SD6aXRtPr8A8Doco4rsjYSGQ1oveKZNfBjvVNZEhm4MnQ2zcdvascun4jdgBh56jd",
  "key22": "5w7aCbB14qecKE5TZUFndUTYH1am94xM1s7WdDHFQHZVx132vDyGuyM1rGyapF3PCuWEvKMqXpfayNjxETaTsGj1",
  "key23": "64ryigPGFKL163bsZWqhg2jPJUskQkT77CNWiKso4V3AKzP3QWwSMqi2qEteDcw5vAS3fjnsX6Ga15U3f3VvkEtk",
  "key24": "2FkmcdmVcjHztRqsCCAUtPsuguWkcLUMkRrBf77VLKRgf7CPM7Qy7wK3JHZS5cFL7ChxHdk61DcU7Dhjy7CGYzFp"
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
