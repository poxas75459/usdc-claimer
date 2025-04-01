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
    "5fcEfbNHsYdTFT22PCj25u7oh6Qjhu5zE4dLEE3wbU5wDycdGQAa8obwWubv5fkDsp8sLGMzxtxFEDVsvRR5VzbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ayeczkZUBFLBKxxC9iE65fKDHaEJqiGs5dxNKMehXatxTSQjLuZyQBjKjrkU5uo7g7hZPPDPH6RDkH4JMFdkpqb",
  "key1": "3S98BmyhUPRwU9TcvyQVgz6DpHn5quJMoQmeEkjbEijYpvD9qj9GUyBvr7GxVxrXoWo1AkBDJtzpYn6Ld5WPex8R",
  "key2": "2E6t2HhwU279i87hgLqYhWiuhaf7B5p5239DBfpr1Dk1wLZC2vhFDdbVb9X2vLF1hyvceEdrgkDwwbB6V3CwTMtU",
  "key3": "71TthuLUkodnayhULZ73GwyH7u4EJcFP7yMwbNsLr8UE7QpYATb4gUeAJHvyMww4dgcVK9EUQMgo22EmRnLLLiR",
  "key4": "5PVP76uUVmD7ytVWZQjWJeSTGmmKQT4erAoqRmtgeprcLuNViCktZ9XkcyCRKiZnjKLJAkCwX9YnVmpMcSbaBKmy",
  "key5": "5ajc1zyj58ohsHrLHUK3PeU3FaG8zzyz6mA1qBBkioGP8vnyxTsxSLRySWyUSHqckVx8xtrxhUxkgkNF8hzAsseF",
  "key6": "67NZpALapAUzEVH74wJU3xupQtURc2xRmHae9zqGMr24uL1xsbFnLy1Qh4LZ5AMaXCk6DFUoAQdis7Y4J88Nw7mP",
  "key7": "5PYBeGYEGmUSaYuCRyBYnJa7wyqArpC9ipJV5ZinpCFPEsexSQR8WBBU32cBvH78CPSkFVdMx8yZCBmv5rmCUz6i",
  "key8": "4JCSatPewF86qXKurn7opCtrQywfhTNXBA1K5EC54GiK3LWpFZ68zRcFtWGMHiP9kWhwrzEmrxuJZk2zHfDozu7E",
  "key9": "3zsRHD4UwhDspYBzMdo9XkSYnA5fGrzwXdYZ2EDLdWXsPxBpka6XDJYhWnZDrBrnpNniCPqwqgXpYE1wXZn8mz1b",
  "key10": "4Cu6Jx7i3LpxLwmQnCR9EmvdfFTfw47nnrtfGVyxiGULSo1AQAubecUHbfXY9nf8KjEprNrMPgc69QofGmsmZrea",
  "key11": "5mWprvMQcD7AXef9y391hecTu8EFtv2KFL1PDVbq2ZowS745ju8FNhStnaEXGmXEqC968M9dewK5vDNWzSNiFugD",
  "key12": "3NNuQx5rfCbZKUcqoqHdYys7coa4zQW1YGSzcF52AN2T2WyhAfYgw4Dqni2eC33jtyUdNEL7GKgbW4saNLfRLHod",
  "key13": "55GUEWmoygJfKDzR2ZhMLyTQkKXPUotQzi5Qarsj7TkBn1Jo85FQo2L4hPpad56ypKz6R2x13tSzvNg8niEz87RQ",
  "key14": "4sZDHmKNYS9yFiCQ5bjWKENXnK4ZM962QYo9ebqpLUFERetoJBiEESqXC9qonc8DgkTdzMkSEEvctJqnBVnZH6cv",
  "key15": "5K56X7RaggmUCW7AhMvEk2Nf1qfJy6xViuGUDLoSW7GtmNUbtAYiqDy4xW3Ka6GRe2o1XvTsTBCtaMd4To3EWDWn",
  "key16": "55A8Zf2UKNQh6AoFYXLFcMupRfXQcTQQHhCobN9fLPBeimeXHGcwgVnr13ebtmXmuTfMbYoQinLtnW8oo8cjNz7c",
  "key17": "3aUtbjYNLkMpAc92fzYoLCBPKy75ptoQ4o1Tg7Fxc2Dwj1E9nBsTCg1TWPjJEURtc9j6HToTbz5jJGyZCGP5YSV1",
  "key18": "4p8rXQiZojaXWLPxzZjxnRN5RZhzsHLs5dGxSRr39VqeeN8KMZvxFpAJAf5vYoiWbL36zKjJEEJiis1qDwKmaXdX",
  "key19": "3wLeZPoSyR8sAc53PLK4g26AxVpXeqbu79r8Nxuuot4j9gye1mcJwDrTHoT9g8UKbTSiXWS3tqnqAEb2ivGCxMB4",
  "key20": "5m3aoAZMDJCX7g99zboBNaamQBfrVvDhynNA6n4SAPFPYUbEuhv8aHM8CXMZCCLqkAciW3x7mVTvRWmMATvAvzTQ",
  "key21": "29AiWMyTpUWieqsfgdGBibysVPw5EGdgEgW7sH2cnEzPUKZwoyJhTF1FJADBnYYAgNphdADAedvZCvdsd56ULmDh",
  "key22": "3UPEVUY49mupC68gGXQdQzmmapjhEaMCw6FAWxXhwzLviq1XgWy687BSitLjtrZUWkLdPrZQwZsfQ4K5tBV14kCW",
  "key23": "4hVEsivrCzyUDh4taAqhdrgmC8HtciRfpZo9FyYdbj1NMyvNvXHXawpj4poSorbNmHyTmLYe2PW2bAhKvjnrWnDe",
  "key24": "3pjZCUTQsCLvvsMKFPscPZhXNqYeAYwZMGQE8Uzjm1ozWt5JxmDavf112MZP4wh4bra2R5iHcuvyu4zYAEwrNaTZ",
  "key25": "2YyrAPuBBqemfXu3voGPxp1QjwbvU3BYFnTbZLo5n8eiY6Vppm3AJZefziZv9ttNCQQeWu4Nz18u3xFGmyq8DdkK",
  "key26": "56GY6i4yXCMAW2Aoj6PSuwKB3ycK8rGkoc9h3KuFH8GMYbR1Db6qkBsCsTkd2Y2927Yv3J597DvxR2gHmg34eRFK",
  "key27": "4mNZapLTiYrMBh17okQroWF4HRZ8PcN5EZ4Qfdd54LzQeTUftG7BrCRHzihX9NZ9ZpUywnsgUPr6WWKnRDQ9BRcS",
  "key28": "3XrkbjaCcJc1ZcwNoxkJrivu1ZnPJSDEzScbdRHA9CZf8iVT5DV8i71YrxnpSqT9R8Q8XCnk1sZpRHjF8jYKzaNM",
  "key29": "2yw5KELwm8VhxreaUdyfJJiNHQWkeiH3FRqyxbTphmGQ9xWvE1s4nvtfjVvJqhPMQ2hf2E8FX1zYuNDtuf2B55y5",
  "key30": "4gyhiTBfD5S1MAuPTLpSpavdjAkqovgBj459QaYsUXRvE2E5xP5n2Jsnx2nsVdTTfoNAD2orWxZfZ5fgHhWCoxuc",
  "key31": "ZdB2dpwfenq5hCeNUNGegrPu6vbyucrxdoNgtdwLuWohDC39v1heHCVEEapStwJxryHkkWbsndXKn2F4FK8hnRu",
  "key32": "2wHrFD1tYCEpQ33qYo1BXTuucPASL3u9HAvJNrzxrCErJ1VX5Y1VAZMMwdnePxgDEQLGjsLP9ZC1wES7EHuTbSbV",
  "key33": "4JvxmJAnq8EBnrMwQbbuDvywAGGHkoh22iauqUSxV6QdymbJH63hwUXvwP23uuJrtz3csguH8kGSDQptAXvHm4W7",
  "key34": "378u1adtTjzZzShD6GGhPBaECL1qZubLCC4Ltyh6m7nxZMdVrQ5FyKjmZHxexmTAhX68cXvz3kJnkZdUSi3k3X6Q",
  "key35": "3RgAgypkYePiccHPfbCnY3FsanfxoyRLYAJ4kW3D4aKk9cuYiQPp7k7eEwMpMTCNpWhgvkkHCQ2usFNSL6RBxN9p",
  "key36": "5NrRedBL4wysPPUQfC8ryu7EYocBMvDWF5TEE6op9quY12Zmm4e9Z1fFhZuEuHsu9PQVazZxktgrN6yBbe1HdFbw",
  "key37": "5qcDGtfgD15qVdxq97zf1NkU3N3UKWYxt7jmsirv55GHtCb5FinEZYnjnYRQKzVQPj25prL98GBu5sFrVSSqQiDo",
  "key38": "5CEZDPAn6CW61i22Mbv7aaWKfHPn4dYFP4hwxocb372szwF4kupQLd853aBqA6BYSLN3tQxUBycUPCqi8oQE8cij",
  "key39": "3R21YV9MTiAxZbNqiotnxrPTJsZKcq39kVxPxaehczQMSjfs8HJSune2C1XaA8ojF68hGkfrMbjr37hqywuGKQQd",
  "key40": "4p1MCboecUsxCcH27xgHoQihWVfSTWfABx2DuDNuLpwX9btEk5f5R5Qr5yPoJUby4Rap9P6UgjbAjVQDLi47Tz73",
  "key41": "4Q4NYPb2aEqKMcvrzCyp66TaQaPFujKn4yW2qeU4HT8rjuuC2GCZzk4xMnFB1NSWM1EAhS667jaQXPeeNw4iiqbU"
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
