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
    "48g1mzeWAF1mZzNSdQaEjeXwbmLJgaH4wh9LBjmDeTT5wWHySGPTFkEySFrrpaciaS8aHEqTtxTRRKqMCot4TPbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dBStWQLMSSJK6Azpsk8QUhxMomvpWVMvSvw3cWkMGrShGz6CGFUNQERAJPRPP2i5ZTU2GREtJuxe9dipS8pPxq",
  "key1": "Z8ybHqBiRmqfhWkmqBHZfvf1iqjNAZhmGWKHGfSeE9MRwnyNNsHBFdQy2C6iKZHoQPTkeUBMJDS2i2mmzed2869",
  "key2": "U1w4NmpYPT54tHgBaHBR79AZRg2bi9pFkWp1TRDz2y2K3hE5j1P9cyngsXq38R72J8QFqSbsxVegxeYkWrJZNtb",
  "key3": "Jr83yNF3B8DSZhfEFmy9UpCWwqscvRnVDtkiGddadxTqrhb5vQRgW97JkGpD3moFyAvnVSL5ahs8Gwy2W4T1xfs",
  "key4": "6M5ogB6iaLZWvD3XwGE2wrc5BmYLBKgzHPbnqGt3hgKjGGXSe3CZpdwhMrGGm1ZFEM18FNSih8i8wnbpHv8MYoP",
  "key5": "2zKMJbVyu5TiwreUMqxHpyxmZ4jwmFvst2Z18TpJKEZTEkFAdF5w937Pac5H2oAmqdkzjt8y23c2JQdNv5g3uAPV",
  "key6": "2JyPRi76GgKQTBEDmtmBtZkanQqAbZVzvrJeF6WzpmKKQV1oEthisyGYGdER1B8saPvnvWeki593Wa2GzFHwyXBn",
  "key7": "4XtVL8KLoB4bHwm6hyEyVmmgyc4mehUaNeT4J8AwHFrpPjz7rrwgJfvvLg7FDFfLhMAD5jXaYZJLLy1qZPVGqw77",
  "key8": "1xzxRzM98rpFDn3N5kA967uJxUarvcCxoBfbcWperZzciSk92d6VSkDE1SbCv5cG8i2m5dMkniJygTczxhtyAB5",
  "key9": "4K7YH1FJGPaLMjzREApHKmuBT4RG1S2uMLpByXVe1zgQ5SWjDXv3nXBVLdM3nZYFmvdmnv2KNUxX8HbckjA1kwpV",
  "key10": "5DmAp3R4oKRvgUq4dnjefaY6Z6erfxCcgPwdbqPyZ2mTiKtDwjGQM9XR7nJm5ayDmxECmfbhnh9GnWQYHWk6FAGc",
  "key11": "Syn1yQSZdAxAfQDo5phJKwafMHZ9FAgXvAewdAPvxhkFwdiBZS7gUzZrs7bbaZvPGLTSRNcT58Q6QNqv2Jptxo2",
  "key12": "4VJkFfPyDeLKvFQEwo5ouUmgtNNhoGUsc5gK9exGnjYVoTXg32KJZuu97mbsS3rFo6J9jX5Kf8BKj1uPzw6WECo1",
  "key13": "2CkwfDMb5qGbq2u6RaJtbuixRSQpGzRX3HF8CYYNq97jP1xzSqv7DZaymJbjRdUuEQg88qveKT8wwwKJoVqnsx8a",
  "key14": "5kSM9oLf9fZgyHMQVZRU1MKJuPwapYGyegqo8pHe3fKUwe3Upw2JPt7kCGPB4x11mBEzpE6TgBF62zC3xFYwX6zf",
  "key15": "3QjFG2DDZAdPFxCdamZtWAKTQVDzwhtQ9RpfhEeRDCcQk8wEVwh42anFzCj7gwrPrrHiretpGnt1DYANTnz5vydF",
  "key16": "5ueAbCUyu5svFrMqqtRGFRyhgHruxGnaa5SoJdGXYWKStG6Ekso1bVv5RFELiJEaU88w1JCnxKSrFEHNouZWiwHL",
  "key17": "2dB3kgPNaVAsEnD8FPxQBfPX8fWeqQUqavvnBnda3MkYk8XJAXQnsh1zEu1aniPTFoaSwugqo8bJXiYaYLbBGfR9",
  "key18": "5wqxZ915FqLw4nyqdaxu4ma5WMkiDW9swc2sa89yQy25LBcYWKgSjMiDqXAYoBihKpCM8bQdgNgarMj5vjMrk6SF",
  "key19": "5Z3UuU85KAVrDxbchV2XTwhffaadwYErz8RzV3TVcaVJv1T1rDiJTQ2gvSz6BNMR2VY8d6D223t4nguBw6SfHTU3",
  "key20": "2uTRcpki9DpCBzk2ym4JSSE17nLY3BxKv4nR7xmKxoJTh9V7Xzc5ohXkF6hzsQRfo13zaeYRghYbjXcHYZjFfKj8",
  "key21": "5ukSKRnG2uupp3WnHbp7NkdZtmSbsByTwPhGxoBMvEsxgWxmn1XZUbM5pPo63ftDtZ9uYjs6AnTgtH4rd4vwS6Y6",
  "key22": "hHNg5XM4BHK6pvJAmBt9C7MoGk1jh7A6ZkNKkUbHWwHYJbro9kZHqM2CsLVQDvgjjagLCVmUBqij3NcptTqFrKd",
  "key23": "46zNCRuCJUFfNKAkhwva16pHnHGA2UofMLimNdDUCLw5wuqipgXen3PJtSrLyoa4oTGv4N15sbBNdbKqNUth6MsX",
  "key24": "42aj8YXDXaMkU7QemTnoA1NfsBKhpfxx9vsYtcb42koy6ecsKF7qsS4Bq8feoDpSTM6yReUTxpxsgURhae7ahXQ8",
  "key25": "kMp9woTeSJkGXHBkAByRQwFJrgPVKtcdyDjdX9F9FBTSZSxbE7e4nSLyLoARH1HT5M4GwXk9UAwCnAMoNXQjv9m",
  "key26": "3LuP4fty19ih1PyA8XzT1HT8inMHb1VwApEkoPiCNdJvjnWEqxUVdmGL74iKxD2ytM7dS7JevGeSvRtxgwWaTnJM",
  "key27": "44J8dby4o9wCpCanSgGAv5xbDsw9i7TbwAz8k5aHDtyNmvkKD311cN1aox8a8Xu8tvECp6vFAVAMWqvs9tPj8qZ3",
  "key28": "5JRAD6tzFzbbHVMEpCzNndexsNHKAXmxAXx5CG3Zk7N6h6nKySJcDXW1pQXuPtxUZuTCa14y3v4mX4L861KnDvX7",
  "key29": "47NFqjnHDTGvoTvugrVFovTw4LxnSKjAeYienWHmSKPvMGFmD6grkxTNtL6s8YWhQp8DWJ2LPxFvDZnbKZyxAZ9s",
  "key30": "RJfNfCUFsdi4B17HB5goXKHRbiTAk1JrXD7AEQWfbwdMqkrZPNW71Lo1Wq9jJbJBwv2RqtB1m43eKv92Hamjj8s",
  "key31": "NMQcZQCrCFTmapJSwbMmSExbbgfdQctBJyf1Lo87WjLbaJDNVbsXthttSpzhSziFQ8GpRezBT155zhfZmgu8YUe",
  "key32": "5cyRgVua5zE6HUdheFc7Z1sXg2vgXTgzUQi9BjQG4ebtD2Yn7NqQnSL45t8XmY3cXAeZjH2nfggAsMyR2UhdMo3H",
  "key33": "3gqFeYSyAaRfqxYEyia5NqbxawRiW14dcMw6aE3CFu9StZuVQggKH5pfcBfRGcuQg5m7xqQq4NJPNsoqoLsCTtKy",
  "key34": "4sWfEFUehGGNWqWPmyEj7UFvoJ6Bs7vk87tuvPSji2rcxA4JQpzdVD3mQjthaGjza9Skg7daJWmLPrP1BYLowzQK",
  "key35": "454JTJQM7XTtgJkexXkUDBHFuJy2bD9hav2AamLU1LzRRJNM4v3iBsEVpWs58bQBDLb47N9PvcuNavThuqiGQJh1",
  "key36": "2FNwJAbgmcr3k3RkAHxojeiBjdNNUBzqe8TPjrvGdkeDcvZMoMoi8Ey3hBB5tvQvf4EqQP3PYz3X8bvjEC8DqmJp",
  "key37": "48CKKHbAPaQFNbD55W1M9Dr9yygdaT74FUDGPvDBB1wUvc8QBw49pxPHtw6qaHY1NARJD2Q156Vp31qmdZkZh4SJ",
  "key38": "yPyGyhZNkCAsMUNQ8HgLdv5V6Ng2sqgWmF68n5vt7Ho7gYD4L7tcP2cjmAhSZ3abaWW9JEy763PiayS56YzrPP3",
  "key39": "dNAwGgP4Y9ojSfoT3ZDE3j1A1JcxYhmHmBKospmhAD1W32tmebLhYHjPemHLni8kiFJmaxZc9wmYAzdwV1ZB9G9",
  "key40": "2bPooy1tCqUMsDDdcS9atU8ZbEePUw2Bc8ZPUStBHXqGfDxvQhS26V6gyUG3JFmAfLNqMWbSpZdwjxJdKfLbdnNi",
  "key41": "3LKVk17fs6eyqoBuuJu7RzyhrZui6ZU3WVkvCpWdHpCWEAS5qHbgivDF9t6wZpPdKf8mhg1LXEY2hLT63XPeu2bC",
  "key42": "5u79mH5yKx76HRb9mAdWsNX21SjbK3xqYsMJvXzEra9CkaecUKSButf6QMPZqBQsG16JrEmVYc3Gj7F4njKHSXkH",
  "key43": "4v3pVyUaJ5Bsdw87mqRnCC3rQBGy8Sbgx438CqLKe2dzRnZLrAf7cdnCtbeB98RVUzfMygjfsMVcdRdsx65QxU6Z",
  "key44": "3ehDpByNVvgT2zejX983n2eRRTxPQZbrP3Cx49M5BsPmSmLYwpkGyvm1ze5UqjXtw6KAdiuJjTs715pfgQPBDqLZ",
  "key45": "4QjRAyuN3hHisbbeQV9UkTcsk9htAutw1Cftj65JGmZ9s7aAcX4A5TwW4TbDRMbjEcLijd7nMYPja4PW2DwxUaps",
  "key46": "e3z8bDuXLnaMEuptPXgWRo45ByU5cXedGpdjsHGA5X8V7eEjGUEreof3dSuC2RUrcqUNyhGHTzELXWGu7hutZG4",
  "key47": "5LZu5jBxaVGAe4eCW8JLUVxC4DfasWPrtqUNPoZGeDyvPcqdax9z96QipQDHbSDRvQnkTezu6xM36jUcFhBCUWAM",
  "key48": "5YR5pkHe1A1Y4hGDaE8c94id8auXazqD6JWS7kn1aGSpDfhicyftSWrZ9KYHiz1HiGHTowdGS9rmjXko2igqdvVS"
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
