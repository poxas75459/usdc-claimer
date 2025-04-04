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
    "5ZzqpJcexdjGuHdKyYzyLnWkP6T7TKzCSF3Ux4k1XSdYX66xqn8BbCV81FayGoXqszVMsX8BGMoNHDaGrndbECtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28SWCjE959oXHUeqs33sxFBSmNETYb7ZLAKv2FcF6W95u58r2MrEMoi9oxvKGKd2TjsUsnidzripnCU8YQoCk56X",
  "key1": "64j7mQ86miX8Sdghqg7LiZ7peiujZQ5xhVykFfAy7o2PuLxmy2U3vVX4C4RnDLfPoQxmAosRNk9MvccCz4iUbuSz",
  "key2": "3ChrHschf4GaF45xBf73Q8JKz6GFXeJkNwb2MBQmBe6pxp6nnyFHkrfqXxP7iPRMYtGd1gPJmH6QxogfoJ78PQUF",
  "key3": "A4MDpmTuJf4pecddPgD3tJnyBxi9EJrsXMD8C9cNYnCWgrBCJ8nbKbRoRN3khd34PDnGByY337kWsccDXud4vnu",
  "key4": "9huEnacfnXGGsor7RWMCkcGTbb7E7jcvTfRaBdPPrrj5hABUAopx9E2tgNGDyTpwvLhGPmeHLYS8xBsSckZD1bE",
  "key5": "2bDSb9Qzog7m8GwyGNJCVWdyjceUiycATBhwymncZzSh8DFbvydjN3neBzemkpqZ4WL8z5uh1tpRoYm5GUn3sFPw",
  "key6": "2trUenG16AWHViYt4R3dz9SC4EqAjKBkDn2JRLAZKFXavyak4fhnvsLaquERrQ2Q2iDYM8bV826kX23NEcBD1NbK",
  "key7": "3Ho62docD22uJi8GSUoXK1D6wEytNNZJ2oLdZLhEr7Pj92WGGk8d2cpqYWvqz52Xy9RMpRtoALF5ioStPWXP1J9h",
  "key8": "5bmP8umSykTLiG2u3CNqNSmeJUPQfTfWUHkcXtTLcMTqK97WrzUHS3fsN5cb37zo34yCSR3R19D8B9gaj76eiXCN",
  "key9": "57vGEsQF8idr7M7gZUrtYXVX6wx9x5rNEnYghyYD4W2rpBnHAfjoD5Ytxqh5pUUm8RRrqNYPM9JGXCNMsQQktcDs",
  "key10": "5UJG77JYEqTCQGAWaFxDVCQNH6hxgyqxQWZAAta56wz2rCEpZAhKgQfWeRPD1vuMSHLRTLxxEZW5Sp1HxEmjugJ1",
  "key11": "23k3Bkah5niSpBLekWBUY9zQS9FM8V7MggpCUM28wtCH1WtY3VGu6nqMRrkzkwJ5yoZucpPNXZnJTP5ETmN2F6W5",
  "key12": "42T7tquPNe1ghXN24D6M5THwQPFxAFDKqZ79p73Sjiv5jTgs1ZnbMGSN24VyxTWPa2D2GqA9m6iPMunzsx78kNLV",
  "key13": "2NyVHFKKhxB8XF8j1F5G8YLjimNhn3kynMnGqW3ERAiYnfnqrdGfq9k6a42LmVY6kF9xuwNoxRX7QxsMPTdTFf4W",
  "key14": "4dPaX9nqL8Qn6bcAm4MXGWePfvFZgteFNTGQy5ZvhgAAoFYE3JZbRSKdAMyUV4NKCCvSdCcNB7zGsRXtEfdn1AXP",
  "key15": "1o1QXTSJ6iej6ozf5bKE21E82CbSAR1GVkDSLDjJjpuT6C9mGDtK1gNhQf8NB6dXSzb4dn8orXSunqQJCDU9Yf3",
  "key16": "CJgmUZW8FHbnU9cNLaRnzTMrbLFETWG3b7VxvV6Q4TxVeiJ8CYYcYjZ8sXmYxJhyPhND5BYCpdMDbbfhhnAwYBT",
  "key17": "s2Vdyo2QLRTepJjkgAAAdK8UW8AQWVq94czdS9ypwg5M17LfyXdt7s1n3TAWNCsmuvTAjPgZXZV2tzuxRkV3RX1",
  "key18": "5Xqof8Z25WGdL5JT2by63E4GoM1xbDEZk7Mhkx3MqDtxoSkM6WehDKoDvZHcQTfQn7Ugsi6DBVei9DB7swrpZnLb",
  "key19": "5nngj3NmZv6hQ2qLGZdZ7ozkGpBarHEEkGK9ApUcngRqvY77gRgkHgR7AeTNVaMDq61FTGPeUvC2wfiHjJZGatwx",
  "key20": "5Muvkg1GmXV8KTkBpbGh3NZYbU4HfgtGP2zXsmU3r4iDX7EvLfH72ikWQjUtVpLo7k8yivxreeRFD6k2epGD54pA",
  "key21": "4qHYAt7MhuGcChnup4RS3bcesjuvWV2hbH1hrenkRrN9YTaw3MAEzzrATywY9GaXJ9B1swEQTZuoAgCDGKCFTwSX",
  "key22": "2UumuKPJUYgsmArSFHkvxsuauuSvBsY4r5W1uvPm1aisFQ8yzPScvCkFRDFYSeybJbt3ZzpZsoz5j5bKeCAEMaNp",
  "key23": "3kBHxc3muw4ZmdxhRmUpaxPibUcZsn9jKkH7VjDDBtAXsK5QrdrGD4NYyHwhewsFN3GaoTtx9HWMNRtRSELF1ZrE",
  "key24": "Hc55YsvnSuN85JHpTX9Mk3r71xDRnRrEJmvWNuDskfQ2fBUaZWoXUuxWnqq7ziHCKdn72oyQwTNxGMJTzovxEtr",
  "key25": "2geAeYM4FMGDvZbfwZZZcX7xeKBiEgcumm7YqGUudtnvwB6tsw3hEsa95kRE7DgERjfwzwCTtPo3mEJNwXgSTJni",
  "key26": "yUJt8pxDa5s6ypne5jq8zmZSP4X9poDeCVTPdAzRHL46botL1q14Ktxjzp2xsjMKGC6R2wStt8vkJ9HfLX32jmw",
  "key27": "4JNEFGMR1vbrdhiZNJLKR8BF2CxjWLiXCs1ej5EW8kByd2JRhLqzd1P28amUjRuDfX17dU3V7yvR7wmky9Uy3Gje",
  "key28": "2v1MTe5boJ7uYZBo4hzkrUXcaqzmdhsLYBszEVm9LbMN7aDjKZAwN937yDireoX9Pymp4D2fePeUGRQhuzm1GG9o",
  "key29": "525QTq1qebooiPb3G7a2YiShHsEaaPPyHQfSjee2jfUEBaU17HzCAihWnhyTW2Bi1XKus6Bz9BZUvQpJi3xKPKik",
  "key30": "5XxEkbzD7tynZPN4MFS414x5kFSy8Yoz8EjpRYoiiykzgc4nKirFXv7nxJybKBJx9YTiNJ9uP4pndZGnetK1FthL",
  "key31": "4wmDWQRQ4Xx1uWyGi23Tru8WFyfkM4vkKatxuD1iSWH6Shcqw3p6w4p7nNz871RDuuccrtT2P3hDn5aJ5a7vXZue",
  "key32": "3Zov5UBaniQdaXxTRSsrXkUbtyyxRQ23bNUmFsdbXPMnRFBNh5krEvuCNKVzZck3TZYudywvMKBMB8Bv249Jvs57",
  "key33": "2ygkRRJSFmGHAb6gVjJGVe1abEqW58qBeNPQ9pa7UicS5xwMs5L7XYB2hmSVPrMZhrGGon5CHgWkppRhQjyWqPZr",
  "key34": "4am6MbD6PEBiTHdEw47tqGotM5K8CR7HgX8zWg8GsptoJGQqSUdgTXL6pAS9HETogHVHBF2c9jJNsKxMzEpViuMH",
  "key35": "2c12sJjf8E4AfafPJXWngLwwPKczxbeZxVbip2nZp4jXcu4Ndx3At1QYrRCpaYYb7sMEouwgtuWaQikEz9ugYwaa",
  "key36": "bnYATbZPpTttGMAKM6y5wyeztGkb7ZqRG51QsaUkznysz75URAGU6Lc4p7xxexfKsVw9KErD5W6XDfUAkcrGRkQ",
  "key37": "3EZnqJHf924s5aHNcWuD5w6G7cYJTtNyPAzbkNvENoYcCUKy9ZB2Sz1DAoKpsBLfA4Yx9hvBVdCEi7kJjoTx7bzu",
  "key38": "q4iKtaH81zv1g8hXd3obDgf1BVvenMjr9MNTYkF4Rj3KYvYYycNLsqXdw5zb6CGhLriPeWyFrHTNugnEYDXKSXL",
  "key39": "2z1aRgxKZVsojqKsCNTNyKkiWF9qngJzcokWQrtFPe94wfTimZ4wopn3JdYc3WBGE3rYiyNXAy4fSnn5AYvsdRFc",
  "key40": "7F1rWonP8yMpCiRpVHBqX3JL169cLvrRMpRbz4aEdMuihHXhksrh45FLWNvbvMY9ge9iReXbXBj5JodYg9mQK2U",
  "key41": "5XkHQMqizBdPRqjLp8qBJ2eHkXLkcCdDbgSLTiAgaKJp4VN8NGCjeNAx24kRf6bZtKAMCaz61eHxWfD4i4MohBHo",
  "key42": "5wgbNgQAwaWPE5bcDJP5sxL1QY7ssQgATNEaaLcPKuHSxjSggsb1wxZpx8WNNG11NfNFUsPK6qj2iJR1SA46dayh"
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
