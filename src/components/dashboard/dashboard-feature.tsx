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
    "45G6Aoag8uUqGbDjvm7hheb8tGZ6itbfYfPJP2p1g2sy5gm3XZk9xRamnuQoTZLQczTwFJV4Vj6vXxtgAUspHh7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bk4YpSDUFNjMC9DxsSrWUFgQFFzqSqg3ivcGZoypMU9uWLmW9FPaBmx5mBf8fKb7bUfnQukvt32Q6KW2JeHFswe",
  "key1": "3gb8MA2MmWqc1PDgfFgjTWyeUTaZpnpsHwRVcS4rzkGsaN8PuntjSiddZUWJhFG14RBbK9GkRR5RHF9bKCuzvwG4",
  "key2": "25kvUznvXCikZmRUHXFPQ7n25WRn8U5C6XPeuX74BsNah7Dk5QGigyJ5F7LryiUCjWuK8jztEzu7WsK2piHnQ4Vh",
  "key3": "2RRdUedwdAEjKWvgiV2XQXmKgrAyS7uBPMVvxZBz4W93ZmJvEwLqwPNJ477eWpo4gZRnZxdpQKktCzi4dN2a2HEZ",
  "key4": "4KVQLYGd42wwiZorFGEaNPmNaWn4qhZQYbkkQRcx8hoKHsxgo3K7oXssrS71e2HzH9XqGdp9aNnuBYMyyiPbubXj",
  "key5": "3GNJjjUChPqoPzLdYUTxprM4jPjSxaLGMWGqieu2sPfFaPaHoWbA7s6pjuuG4K3NwhQxpG78sKrSaDgXLvwxstcZ",
  "key6": "3FzDkvCwBTDTBETRW1wg1jFsX2ebkY3EFx5z4HcNfnZrhSrqb5hZB4XEkaGnDYkaxg9S8Tj1fMfdFhK4JrJxLB6L",
  "key7": "4HcRzq8qjmohUm9WsjXQDdEq4EuAAZo2bxCzvYNZRQMmqVvaa3yKUMmnCH6hZdTq4FpFHyvYpaWoB7owapEp8B1",
  "key8": "58o35sePuVggXgcvRrjEcMAxeuN52ewyREDDeoE65wxHzE8AJWHNuy2euqNV1cjE9GVBspLv5EAMkedJfDyF5Fjo",
  "key9": "5biHtifLm12inTEAitBszx17ysW68zaD4odqGZrnbNxxJ43PKuzyemcxV9Kpq4njsa1g29c8iwLC24k1CQQDHs29",
  "key10": "yaUL5XdEergPyLQBraBSekCwPNJWVrMzCZ3GNdUW3sMHXPK4LYGNeHCaB2bB4sanmGVTfQnfTQtwGuSAeF8y26M",
  "key11": "2ZyJiYqzBtcCzyFpr8oPcYYvJQ3zLmea1QcrU1VN8q1kNzLNVX7wnKy7CHqojMYSDBjJPKtPJCZrUsMfkunCX1jJ",
  "key12": "4tCPXG8CYXTKub5zr97u8hkmLcq2cyhGCDpVMdZSBPVHJgW37mDeBtfKSBfqaxJZ9xW3mc33uYNmiQ1hGKq9YFV5",
  "key13": "44vVZfDxXbZYJPCtgr8P8dcE2XTBV9YTV8sNdAoqERW2AzuZ3jBjQYWq6ziuBCf8bQuyWHqEbgSfGDtZrR9ihqxM",
  "key14": "2T4pG4wyRke9m6hx8hu6PY9xcDf18RXXRGKwQThdtiPrZ54AjuTQouGD2rcCwiNuN58bAxGVJDWqhJyxUJBBstg5",
  "key15": "n8KuxPmEr6sCAn1Tomi34YfPWNFGdB4dcdW2yqd8Tj9sMWJXPyoy7Drkz6Zy3BPWC5NRUeBat7a765RajCpeb6e",
  "key16": "32Cw3WHdJae9Aq8ukUMGh2A2qQ57EUKeX6zC3XyuSRDUBnZDfzubuCNmcqcDkz1nCX5TQySJM8baXDnzDjNn7seE",
  "key17": "3dBH3LQZy6mAVEkScz4879Y4LFzKSGFootKZnYPapN8jJofBpBNzMyZ3KrikuQdd5yLRUHnGGZFBrtSfhKVTUgHU",
  "key18": "RUWreAEFRKuzmtQ7B88DHGExRQdT7WiZSqMs88yuoVHJSiZyNbL4VTP1jcFpZwsqfLU3m2PJ1DfMhjXq93g33sv",
  "key19": "5YD15d7Ya2RnhpqNTPUkibVGsVuc8p4EaJzBjWtNHTzciFaPTuo5xkQHz72AV2sgsc2du2aWEyFizt2hJFtVCG5i",
  "key20": "2335c5UikWecCqHUrcJJ6RkwC15CJKvdYAv7GyQy9iwGNYT1Ais9BEJ76NobHXucG8fetFbR9bSA3Lq4fbv5jskk",
  "key21": "2AoCm3cxwuGfT5fW5SB6ihF991cudhpsHLVuP9HwMDVgaNVajDiMifsXUK7kH8BNPzWRuP7qd6f3zABNQQ46j8an",
  "key22": "t5WUUpBMPLXYoYAaCP7RvJcKnXmDpeBs6PUYpuifrZEaZXGD5FrKeWjCfudkEkyueC6emDqKdjNrU9ym3kP5XkD",
  "key23": "dA4JTr3HuyftNRWpn9rWPQQsiLwAL2NW6VXT5TFuHd4CjnWM4m4cKB9Nj2BNc353sgt6sWH9EvEYu6BmYcDD8Cs",
  "key24": "5YD6M28vGPugP9Hxuyh1yRVqz5c3GgXuZmrHKcsUiSeARi8ugXpB8i3RhmFznxBV9p9GC26R3sBLEV3AcHUtAtVP",
  "key25": "5zFWgA6Pm9UGsA4qQuQju9imQ12vksttCMuMeATeroqWQ2wfMd2E6xd2ufcA8cXEfrPAq2733UUhPpmPJaJCPnCw",
  "key26": "3rbgP8dGyopbKNuSDSY4NK7oRHedDdgV4ijW3pitopfaV3td31X7KTjd8nTDkLHPnfsdHKK9YX3EHd3MQv2nJfWi",
  "key27": "4cpRTKuCG5HnHe1SF3goivBaDRXxUty3Dq6pPQkkwL6WQjRNopiRvP9up7MNmdsFL3m2HfpkStEapW76byzUTGyo",
  "key28": "4ULbcsViBZMXP7winiN8zMRgnnQBGRXRy8s6f2iCtnQhZePkaAmtZh8fpS6o8Uiz16paXiwqNgfM867cGZCsrZfr",
  "key29": "UajdPQMALgrQ3UyZ6yiMA9KhbPcqn5z4NSgC8ZhFyHNgyy3jeJe5RAtFfzRJtQriJmk4hmKYdw5vM99TZzV6gFM",
  "key30": "jMF5keyKKoc1H9vubdh333uC719TB2wKVLAUnrzC8FMPqZwaJUfsjxGGRQDeo9ah5FnCGxJjD7GvBbh997xe5Xf",
  "key31": "4XxR5BCpsxGW3gsyhPMPdyCTcx7BNCM6iP5JW1y931FwKmEDcNVLPpHYaK7Q6yfHtDeyoaABwUs7RTpQEYs9JEDn",
  "key32": "3jkY1dmHJcrEmaqrfZ78CAc8zt3eRRqaNDc65ifGGBLiwBjzJ8yajdE5RASNvZzjmxSpj8j9edKATgbAJmnMEctE",
  "key33": "H4jykvrTRdeBgWhZLwL11WLtJDuYBFWguUaYQVfCB8fHLhAdqkLEwo8Kov7F2VgWQYsgm5CK7RbvTnsT4J7tKXb",
  "key34": "3KDSXS1sDsC6oSg4VXpmsF2hG4q8h9hrqSpG4mkQhMseU9jb4nuWj22aBtY56BLG1GTyAmurgq87zhcW3tgXQbp4",
  "key35": "58nFrTvQCZ74qPndvMGnCYA6cd7tQwsEiVSwuT1ZZvxVYPPx2gQo2SuzT5TcWHn5t2FNa9gEYMWTahKLMtM6zt7A",
  "key36": "3eyN2f8QQahcp5WhL8ciSsjjr68Fqco8GMwWvJR9pR4Qmf2ovX5CXNmxoE6C3XhzF8Jt6jmQGSXLrzPirX7PH6XR",
  "key37": "3yKYmhTSCmRRP6DS3TztjMLCUQb6wUDLcT5Du2BBhZK1RGAts7Zksv2FSkFDE7tWBK4ZsV7QNvybeeFzfKKwg4tZ",
  "key38": "5CEgxKCT1bRmQqyxK2r88eXihD9XZiECS6TRYWnFELZGgWwVc3NKZKoyygBYTHcHXY5dWHqidi8RmA73bWabpCaC",
  "key39": "5KcfdCYaBqQqXUxpFnzjkSwffY85Dhig2iFA2Gywyffjuu73YxxE4KY9o2PdtxRgVg3vm4Hp43nVMipwqWMsa4D1",
  "key40": "cB5GE9S9Efvv2VM9j58x7rkWwrzVvdTCYjXT1pqZmHDPrNZ3DsBeagN2XUR4XvKNyNz81VBqZDz3YVPFqMExVWP",
  "key41": "53HeX4u9EJZTXjvYYhVkD1YUmQxXrmDzY2ZyvcTN6bbNce61SdKxUAmvdgbyt49e4xsgky76PdB6Tgyuh2ByWWnS",
  "key42": "VCdw28gTu1hqhYe8Eg49fsGM8GVhVz9vTC6BnYwiscCzQsRxNuPXEy11o9Ay66ou5A52fvzG9CXSBoRsx6i9zZR",
  "key43": "4jqEiaB5uGQUtTgEHQKorU6UzpkvFmC9F8kfgpoTySWZgX8W6mFYVZ2k1dFDcbQxrFCvp1YQyNGqA5ewhkYy6ZC2",
  "key44": "3UU7GmN3d2JLKwamUi5whfip9uxhygP7XHieYaFnC7LDiCRza9FKeUJWcFPTXvKtcr33jhAqAf8dDv5y9CGk2E7d",
  "key45": "tDawsA6FFffsJbnTQUjwXXDRYcu8PiU7zqQTsyB9iZkYMgGibgGKnV9hZZWJUhEYMfYsyU54xKGhpfU2w1MH46T"
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
