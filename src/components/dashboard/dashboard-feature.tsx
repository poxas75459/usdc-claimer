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
    "5746rayhXE9yuHLmKcUzeWTqfzeGMkWK8J7bi5vHaPNTPCvUL8f1LTiSD1WpWmWYpaUKA6o6VZkFn9kiFx3cBmeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x4RLCPLryKw4tQC52w3ZvzRp6fzUibZSEesuNQ8pfbmMzyNb678HKrQ8ahpx5wE5NE5hxrihMSaooJZhf6jXBM2",
  "key1": "UAqxXEz4HG9ZpNtSKteMBtsNrUaPUwfv9WwfizKYPP8GPiMZ97DYrByAXovezbLXcYnUqjetLVkhmXgQyCyjAVw",
  "key2": "36Qje6pyfZHwB6tLRjyaQhybWxP5EicyjRpJfmotS21nCZd11c16TH7Eg8g6DnVJVPiD9f7fWTUa85afx4gNBsVh",
  "key3": "G79MWWAdjVPkZU8CKixMcSRG4sCKD4q4t8vdRdSU98iXxAbHrpDELyLn11CYC5iQQPevGRDxChcg8sUmPDJDcfV",
  "key4": "3gFC9a772HEtNQ4DNmq73fEeVUoWxzzowi6TxJSEY53PCk7YhVoqJgJ4SgQ9Pfo76dkaKvjKfrYkmoQ5LSTBZyDj",
  "key5": "54kGuHpRJ85iPNjk3JyU9cq9nusc7YCMvJqvTNSoVuhUTmYxfgfrCPcZREUHEHsHLLBTRvqs6iTnRHnRA9scktjo",
  "key6": "3pCs1cPoYmmVaZPDe4GKjJqdu7rYbPDjdRtBKAEpRS7mYV5VFGbAp8KXKiKTgvSaKkvaKnzU9Fvt5ujF1vKm7sPP",
  "key7": "E39BGcoh8CL28guamsCywuvAuB9PX6argTams63GZ1hqkdjCWExo42PFTaLEZTG3gxsdu4JtM4D6RhmuassTsRq",
  "key8": "53JkYKbKho1RR6HnGYEGGkDSoJHTKjgh1Dg33CcVuN4WdwH5wuxeJZKyiZSJEWJ6et9q7BC9Mwn4yNZJMRzxEDbY",
  "key9": "2gyH1eKMKV6ZFJMu2zHzTiCG9ogjbYSp4NqdejE5A2V4tyWkZF2vTTuG14UCA3mATYa62fLHpKUeuLgTbMeV67ab",
  "key10": "5bFidfPibGx5pNRkE5wqw6XzLe69QajoYu7MACGjKVsFaK9ieHuP6EymQzcbjan9rS92kA77pZKENScHErnwcoaV",
  "key11": "26iTsonmEWxY29MFyiCjFwkmaZVhq9pbaxe8ZVzG2E42cdpiQK4cRXqw3xSojCFqYcXMqTEGhb5TUWk4V9fvmvJ6",
  "key12": "5QHeT7D8xXbVkXwYnEsrqPYRFqcFmwnPeQTHZMmTYJmhBs8uZyCPjD4Q6esX8wf4fVyWwjNf9dZq6JYDrWZNGgUd",
  "key13": "4ovSbKeq4yYDTWVWScLkkGMrN7wdj74mc1mB5HfxuXfdZ3MW4V1kUyTdh34K2AQ2Znyb8TAXBQe8oN94ZZEnVF4U",
  "key14": "LsLQPjYNuca8DycUNdV61mzVhsmWxz2DnNf1rYmC1EKfXaKB8a3H9drUEU2hmgKcYP19u9eCWxuv6oKkDqwwrmo",
  "key15": "3z6Z6xwSYsUcqCR3CN1inDY4tqoam7KvYqb6YJinVNksTbPMT7zQkb9sbzyBHGPXNsyy6hPtadYnrvHc5zs277NX",
  "key16": "3z7UsYUsQEyPshQACzcoHDzQh1TAx5u15neCKSEZnunKjxGZfHTnRTDQwXDYgz9rNKeTSUCwLovm58iiUKUL2pfw",
  "key17": "KGWU3njhA7WtUgM3baR3CGwxqzFN4Yh8nhLYT24GgiKZp7JXGcxHbDDVZLwhncEeL5ZKbNBceYBfvT6YjyNjVbv",
  "key18": "3d4p5YKixJPLeWjcy8uAFy7QFBigG4EBLQN8wXvAmSMzmrKVkfZmZjR2zYf7YT6JsKfsuros3f6jbQWJZyFuP5vN",
  "key19": "4S56JHkNdjxGW25QEmVaQGBQRGhFQwwqiD76BzxvNUb4M6es7USD1KixvH7kB5vnwP9NgRz2Pja49vACdnjhGGuA",
  "key20": "2xvbo4fS5o9kQSMJ1JW4k7WBC6YEcBiYJM1z7BWYL2xGv3bfMxkwu1PU5AbwPj8mExzmRb7EsJu1eRKwivkaVwmw",
  "key21": "2jcojsAT1xj2bRaASAMQoHSwiSLUKQFYVdZF2jZhwGpZvFuA2Rx5Un4u4YrxEd4kyKf4NFDJkpDg9XUaARxzMc2z",
  "key22": "2zzqPAbFnTQ2eYdeGoHHBKKXSzEJgtXQGTvH7a7s7B1FReU71K8hJ5EYZCodutocb7KPSCVWChK7c2TxP1f8YQtz",
  "key23": "2Q8wLGvScG3w6Xp1hZJ2NCxFRweKwwb1hSEggaJ7g6qTHJCxq4gR7Y1Cg3eyU9GDibtqFYzMbuXFetkBJtXhv2Ap",
  "key24": "bFBB2nHpaKu3zv74ac5rd8HaoHiRTiUT16coobkmw7LdBtyE7c5ZjpGWM9BmPmSpc7kmpGEZbKZ2wST6BQdV28Q",
  "key25": "4PAduHZKShHyEDFah9xUmREwHpe7ans1RZUwsEYHj4T3pypij6oiM5SXgbrk7UdEz8662dsRXxKRqEKTLy3tCvPb",
  "key26": "5ZW5mcs33AtMMzxgMYtevcUecdEHyqKk654PGtzCCRnii48NjXp271WQEa2ktoUTf2oM5beDwLaVTpHVpuF8F58x",
  "key27": "2wyp3WUYiBEHKPL5zER82SP2EzBkhWc2CBf5exqR8wFJ7dtxgoSGUC4ea5ThDaL3dg3LQKbzUMc6owEf9Gsci5J5",
  "key28": "2b2vx8z37fH86w1hZqPNgL4Qb8V2kuR2Uxq2YJCa8ceRw49wq35NCN5rHFkGjNTY4hiYGyG9JNbfmTTUMgvSo9Qw",
  "key29": "4rXFZPi11hycmsU7G17WbrtUdU6xF4Pfbw1mp5a1G3xvHRERvYDipzVqK3tg9sw4JTMbsLJP9wXL3Eot4JaM1P7L",
  "key30": "4YXhDgSQrJDK9Hf2gDdaaxzWfW9Aax3KGMTxyg8VcGXUhP1gQ7M2YHdShwy2NxK4Y4KodXEuznC75SzsvM9TPyTL",
  "key31": "3gXfiSaj7sBXNchV59u8BmdzQVYyZ4Krq5CCwbZkg1jghm3Xq4XKFZ6VfedW5dgrHFZeB63sgDwqE1voPE62sXG2",
  "key32": "4qjShHYdfkwiNnbW8mJzcXjeC5hVKLb3bwPEYJPRpoJvcBYbsgxp93NviMhwV9CFiq4bvtcuRSGbdit5vLfozgYQ",
  "key33": "5HCYTsJmnmLe6w1canoSM93miTdh6wm3VGZHrivVPkDYArTAwBEARM9X8p2ArQLaepo8HCG6UsrYYyxoD9172XDs",
  "key34": "vka91UwB4t6QjjwkN2WowNxyG41UtUhWvqC44NKTgD4jr2iRY7r7SVSeVNdQ1DcCPP33xj6VtnQrNNSUEjjXfkV",
  "key35": "XrUDxAZGDcDztsapm48hvWjst2gSddMcM9zoMu3pp8MQuGqVmMUNoFhThK4G8rTYdXLmUj4wDJMN79Q8b5XQaRs",
  "key36": "3RhffHaGP5NvQLxZskw5zPdkeJgQ1PTxZPnbnYNw14GhM7L8MuF7H2odY2oQNN74jstBfUEYvVjQCRoSBzTcZQGE",
  "key37": "2YJLY5TrrJrfDvx6Z8MuQKCn7h2sMFZyvt5zDqHvH89fEHSZpvRj93B3fuiWtWWiQFCH6tSsSZsxFrLt1XNe7ceo",
  "key38": "476oDqp1cCo5rRUZ2yjHXP9mAKtoJC9yjTXjEdrcDq61nKg4anWS4qUSpRgg7HKG7AxY7DhLqS1Vdmv63jFMRu2e",
  "key39": "4D7r5Ba6PdUeywbiK4kGa5esk57tTCEuZ9zhVyHW8g2wKtALtWA6K9RQdSBV6qN99t6myh24HQMcGHAxbLBRk7KP",
  "key40": "LsxmgegPfcJbhtQxbf9eR3Ruh4iYKwBXvAMFbPAMN4R1DUbJkm7kh6HGNyYbuQ4Uqz8KMk9grQrNa9GLE5SGX82",
  "key41": "5g5uBgymQiLhQS3XWBLQHc7VioNocoyvN3iP3ZZKPo4nV7UQYxmqUsUt7M4VURecHC9Z8Z1uug1Ycp31EY2d6kiv",
  "key42": "2aVG67qaQFS3thAsiawjBRMtRRGRCSCbmggei328hwxPv3fJcGAscoYt4NEinUxAN3MbSbvMFcEwfm18YrQHbK3y"
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
