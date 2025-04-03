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
    "4gpTuLUJYXoJAZfLriGUksxwuc5uKq8s4NgHt2GPeLJAwyJd8LPdfTUyZhqVdNwfuq1JzjXcHCCDCgCFMB7Tsqun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sNZUXhfbfkiiSCr6Lkd7dQoo5RmDRswssyDrRCB9UYoHgyq3xxWLKQ8j9PUD4hfiiqoQniVoDSaA1rVfXNf1NcU",
  "key1": "26RrxcwQGkda1K6Sa3FBGGPKgnRSoeCSFc9YMSsFdEETDEHHQewaDtZPUXrbVVWUi8WJU4kyXAJzbG4ysHwY3uGA",
  "key2": "3Bh6BGqweE6fwyUKApzcgiEMJ8az8yntGPZdYKZuww9u9QyYNTXDHnz3P9THpnpXkrYdLriH2BAgrpBr94zFDeEP",
  "key3": "3XJg2PUbFoV2rgjSMPedZ4NzCNgfBtVgtG1yAV6b5yfgLTJgREbp4XagUqeczg3HAV8p66bkyQSMvXsfAbZeSLLM",
  "key4": "5kMaSvgfrgezbU7XxeuVZPf1LrfPr2U5HBhfLfgW5HbS13ddsHJRTW2WQyPdxw33HtEKoReEmbtJgwAvXT4EE5je",
  "key5": "4t4bRboSwzdP2NQsfUtXrRaen5wymz66NHHqAc28NHyWEatc6KzLMaCq72Re3JHnewFenHv7Yfc8wN3XgGhXibm5",
  "key6": "32e7L5ffCUdtEhgciBQRJPK65Nck3DAqsCDJwL81FQnJL8pz59sn6gvjLdowWw7YY5SbwsGMeMRdgyKJ1HfPCatf",
  "key7": "3z77XAWN6rEE6o3vBfxDDkQCU44i4dDZXrCVMnwNgTnNA6mTpzPrtqcPcPJNkmcPCNFfoP3x8q2HM6eSDo9nwMwG",
  "key8": "3n2JViPrE7ew6dG4xMjaSJT3rffekCisNhPquxxcNjpeEoLVXY8yUEyrTbnDyxsH229yiru7p8WuvnXZm6KwgXE4",
  "key9": "2MfHVCanVXeXVguqLNQh8E13ckSvmVgCb8YUwm35WYc4T8TrUyZNq1fnXiXYdsigykSzdeTFAQRKL9Gna6AdjVXG",
  "key10": "41nbfb1ZEqFj8FoLGVi4yHiCdDNR1noKwyxn9woJ6sepjGbrYwyCWNH762apZTqktUqsi8F2EQA1Z2ZbvUVC2v45",
  "key11": "4apaC63yQCbfz4vZDkrbbtnExp5uqf1xVxBEScvvU5cj8EEepQ4EGWb5xwAEeE5uvrVqEa4PmZsxERmYAM447xsX",
  "key12": "kUznHQHy2p83jwPxZ424tBPA9o53GKg8MYT6ZLZ7BiPuei8muWC2kjSQoxNS2YG16Z67gcfEf5bKrxCJmFf9QCM",
  "key13": "3LMrSjjkUKpSpHNSYEyHXTmSggpausFX3iddnUR5wEa3SsuHLTnE5GU8uvR6No9UMxj8rikh77q1WNZL7zz8qcFt",
  "key14": "4FtGpqEvkkj7iDNwCiPYWCeJ5u1x4kxK6uFL4196Jzn1TiXv155jgCph5tyMjbF4nQUuzkgsM54zZ7nZDiaP644V",
  "key15": "3iqTxfejiPNNDiR2XHSo1AiQWqoUwHEDJ3YXdV1FXMTAJwLLm3RV6EakRQG2UN8KfFNkYGRFBnN3XXNFGhoZscZU",
  "key16": "nvVQFX6zNmhNidmLBDPVVAsidmSmCVz7PgZUiRCgxMGtgPW3aCk9Pa8XTva6MRCTXpKsFpR7tD3Hv93ZfRjx568",
  "key17": "2jUavN8EHpKHfwjnmyA2nSQ2Pv331VAqeYFkcZUJvber5GKLiGdLh6K98s6Wwd96FsBeAAKYuRveZsbtFCvirsEG",
  "key18": "3u2sFge5ZH9aSdxmE8rpa25eG7y6c6hZCS9VxpEmSdwyrKuxgfb5dcZHD9BZPY7XKCZd31Hi92RajsNuVWYDSZ2g",
  "key19": "2XizVnK6hhkbDJot8NsUEuAHJhagsGvtzZ4Rg2bZUpDXJ4RBpsyq1E7SUud8bHcKp7CtG3x4gnxrVNWHTa11S7zN",
  "key20": "5CnWZpyTSZ8SVVxa5eJs3pb5eTZUB6Q7FT2pWvRMXBXuxac7djcJJc912mjyJZ4wpmdVJjPtRP9YbTAxM6pQzd1f",
  "key21": "5fiudEZmGyMNjgyTtyW38DWpS6nzGmTpkaN6nhMge1SvHn3Akhd5kTdDPTjUUrS19Q7frL4yyF11Qx8Q93V7T1Hg",
  "key22": "2STC8YZVyWmQ7xoTcgYYLCNuGgRWeog1wHtUBxazVW2q96Gy4Zd58yiCAMufvKkcWZgkBc2t7TGuWf5WW41NgYd8",
  "key23": "5M4dqueofscxT6mJWpJb2Xg2S9wycEcTAECrFWb8MSbYrFFQ7WaZMobLcP68QJZa2r5JJuG8Wp6oSHnegiXonuM1",
  "key24": "XHMniGcRf3MtXxoRxFXpExTWToVLNuWSLKJGo7QNTH1hhZMEQ67uKpHLfMc8fQTdSNFpKrkwokbyz9kfTUpQaaW",
  "key25": "3oBSxN3Mk2Nxb1AMUZm9F9jnU7AioAxEjCH89455r8odVpbDYC3QAgVfZy4wqw6RqEZ6apN9eksaWwXHm26QgWRJ",
  "key26": "2VF5hy3tAZ93Pk4nAFk6Q7wP6Wc6kZyRAuhVY7jQgPbwobhDLAjA3ZWUVd2rdxhHYdXGPXKZ1jV3tMYGjcwPjNj8",
  "key27": "2puFcVB3bN2uFDu1ansPAbQiGBGBdXB72m34SggLsWcfL1fQZEJhf6aEHVSWyhtW1sn4LZqHYaKCKwX9Lr9YhNZX",
  "key28": "3dJZJWk5JFSnBYDaGehnNkLsTBTPYjryuKthWH3otKaduxNfDCVVz4esxz1wWiAoP36uXyrPBhJytZNgKqBP5azX",
  "key29": "nLzZxMF4TkHq1qBPQWVdovwnamdaskBc1ZXqKqRQkrjAaonpbejr1yPUoWsW1mnKNgetJRKSAMkuEjK4qqzQG8J",
  "key30": "5nXk3c7whNN4Xi4uUp8PuRx4hCAHyHBAzSrLLp16urtQSCwxziW9bTL7ebc58bqxXZjZZidepZb9rPT5nBBoTv2F",
  "key31": "56HxZPBt2ndXCZnmSrQwHXYyaXfsUeTW5kErmoU1cCNrp1yR5oNEf6SbsCFMriLfhna9uFewjiisSUCkBLDajekL",
  "key32": "8CbeGgoQzzHxoaRKXtPvDtuNfAcsCwYzPP9RDQVETwq7Q2ZPuN9WmzjkiiT1qtUJd9zicTGgD5hCjrZiKB1XkZQ",
  "key33": "4V7kCDxmf5GCkwPuCch529spTg2gQo31byFPbeZ35NcTaJZ8dcXvXHbDoKVqsTj1LuyDYGvCz6hxhTGBhC5vp2nq",
  "key34": "4MYC5VT3VeGpknxvwYpZm89KJXNfe5Xad4Bx3Ad9MLZUbGq6kxhv2ELpgZYEcNVWi3EBrQD4N8Tj7TJmdYL8Ho5V",
  "key35": "62ktTTTcjKBpnRRTrqF1aJfWqimRVAqKATYoQZEKDW4mKvFPHif3hiPRQjD55fjoYZ9AFfgnSreksKLaYCsNzb5A",
  "key36": "2tMtpNjsw468XzqCLceKSbB4ZtdKDBdDEP3nHUEX6q1yTmpgxPvrCxQZQUQwny4F9uL1MrKyh1Z6pkBJLDA57xYp",
  "key37": "5z6MdrqS4mJarxZSQRm2VyLY9uQf23RgcVvQKpoqy8Q746qCQA46QPrchqREGuNZnta4kLh4W8Y7aydwws8U6pn2",
  "key38": "33iGPu9Zuhzz6CMKdnheWohL9robjQoQVcT2i6UgC3bWw4dgf1GhiYDKeHnCWnzfRAZfgePkbAkxyaUbKxMJrXLi",
  "key39": "3Y21f4WGgPfM5Tyt1cab1tjGHRpjUDU5joJor4zR2JfRqHE4UidEpKttuBRnXchUXHvoMNx5biMKyPqYWHvHV6op",
  "key40": "fnRRZxK4q8XzLwCVF6xoYrVSUX1jD4XKT3v8S18qzX8uQx16HjzARa1j6L8UmbUGcg1AdZJfWMRFtDfE6GZEVwD",
  "key41": "5YRf84bbkNmZ77zt6XjA2vUYQwrKBwXDPs44zUszzcgg7CbkGBC83YUf63HoPPhvSmzcCS3gVBKpgzaVErueoyGe",
  "key42": "4AgZD2q2mWJ4okzmHhGXL9CbZvaGN8eCTtfWJ1SFcer63s4UeRgoK5dR4peSjvEf5CPAqim8n7HdaXeWcaYpHmP2",
  "key43": "5wDiXL5TVaAumkZUYKPRyWYVLL4sjdHm3EtRihwo4hsRHs9wWXsd75SY7Xj8pUnAX5ucvtUv8SFYS6xxJDuXofgb"
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
