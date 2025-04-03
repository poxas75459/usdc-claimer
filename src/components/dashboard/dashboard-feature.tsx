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
    "3gJmnFkVdSULBV3awNZoxPGTJ8N8WnAYs6oDFhVenwgphrwxGasbHyotkvy6iEFaDMTjtfXdJokgLV8gu3rtwrG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EkyffrFwTp2V3cZ6y7nWVs5uGDnisLcQjDRNS9cZJGERk2935RuGAcfnTDKjwXHqFok1BEgNuLSnyaWgTu4KQvf",
  "key1": "5zBi5VwTdS1MDDHFBD3bnBqQbNh5g67bqM8Zs9YrhXnCxR8SxqJxH4L73CWYRdzwT3EVqik82Gt2aWGQK6jrpciP",
  "key2": "3A98f9qa71YHs18344NRRB37ffj9NmyCkoH79ynssGRihCgeGibsR7nnAgEfSsxyjbKq3WnzpVoY9YSPptrdJsyE",
  "key3": "32Go1h3DvEUmZYEBFQYev36WDvdcSGrvSEZxGz1fcuCJ72g9QFvyAy2CFTe4pEMKYeCcJU37ofTw3VqC8BvHDLcV",
  "key4": "4LdDUwuAEifDfEVxP3pNotHnCLKQayMweQT6dVvkVvogkwDhhx25bsjyxQ6GCKPBCGixRZCcFXNMUdMmzJcbFmcC",
  "key5": "4aVeYFmckHqZD8kbQbRFRduMnWo5uVTswsmGsCacnJBKY3u7T2sYam5iLJSuC7pFgzvpfncpKHH6TzenZZpiy3Zn",
  "key6": "65ZiVfxS5ZF34Vtv8jya9dwNwoPGAGrPFWsnod2VTTxUtuHjN3YrjaFS3BFCqSeK3zn5rrqNfAi3t81RvPQbVibY",
  "key7": "67oeBPnx7FY3Ar3FiZzHa9mtgGkQDLA3H5tyMP7SB7TT34ATMuT6qqu5YfXfRUw3fXqVfSMyiKtCDnvaLogUzwuQ",
  "key8": "Tdn67Lxkc6gwCK6LaUEwi7XdmrXvZibKPBvfiGj5PGPcHfUV4Hxn3bkWqVnGFAPdztKdUa6YUznH8wYruje9KvA",
  "key9": "36SAkdpFXKHuVfsCgtoZA4RwPBeoBZP3G29RFF3ovm1U7FZth6fQpVWX6Fhr8sqdPnQbdXL3etJJKNrMuFFSFnwG",
  "key10": "321bhdevq6XFEa51vKykFyiSEkW2ATaCYpiMDsXHibnfeHCY5taStEiJn9oX3vBkuWsDnPH7ND9kz33mUZeFphSV",
  "key11": "5PLSSHEjiMuYkpm9RwLzSdr9rz2FZSCKYYxpr5GopmAxnYfNtNCtkXzYCNzYUSfJGXsTRQbgxaVK3VetrpMDEfWQ",
  "key12": "2jVVtFhnZKNa4Dmxk2u76T2WV3FY38qYLiFtdypYpCLnpuiqXwRqTBkQeik4RFF8QMSCKNXRgWoZhVUboVyHMwX1",
  "key13": "5rqG32CGDd317qPheCcwuwnaTeSBocAGjncSCTnanDoz7ssrBhJG5ogGH7zdHT2FhmP3rRiVPXMA2vvnhnnshheG",
  "key14": "xcDBScFufDw7uhuP7EQBRwj7m1MezfWVPNYKTbKoo1pVgi1jvhbULu5gtqmL655XMDkSw4XeUp7TM6GC5zKdYBa",
  "key15": "3q5jFVXfxRj7n6gag4BwLH7DpK1d5hcLMevjVrzL4Dj3kivtKc5sm6zjbSBVCP9zDVsMSagEzUt3LqvnKSywrh8Z",
  "key16": "7dHcnnq4gi8fYzo3isCRKKtJJzpcB8X6YdPZGeUmHH4k2h2mHN6bExt6sM5YSUpNLtZy6venqPr811znLiXkiCn",
  "key17": "4DwNmwDGQ3Lk3MciA8fMj35FbyCsJZQUuZZg2BDGREoZrnSA85QvbEu1DotbkPM3WWmp6AJRJedcAyBHwEsDsJ92",
  "key18": "pFgK6GcnPuEWYoKJs2g2eTD6C7VyFFvVRsL2aP8ixvS9fC8KCrXZ248jFhb6pW2PDtQF7KoDY5kPJwy7aZAo4F1",
  "key19": "3eysyM1QRUkDJYWAVqiQDnzPBe1EkkGntDNiz45MoAZW8jgGMiYbkXQnBBigSpniiTfQgQRWjdW3ZY7fFjQrH9Sn",
  "key20": "2Y9v3v38jeY6AtRp6NbVtXk2JXCMdnukUq77CE5saADC4QygjKbzqckKpgKevzYk1XSpBH7LVQJdZs4nNk4vbHLx",
  "key21": "21rtYzK2jjmdy41nkZ5C1L81XMJpPbU7MFDUFZ4LCnac4n6GwFiYHsWp9TifMqQeLMxNGsEq9DjUh6cjcZfE8P6T",
  "key22": "MfdXDxuobkVmYAXpzqtG25wUxokQAawvkyWtS3HdQ62rrMyvxRrUxYciL33GYD7HP6B4ESBBH1xkrgYkzBMZyfk",
  "key23": "2xhewAkNpU9gFXkeKFBDCFxqNAHLntKUPKBugHsWjo1t9rrZFWrdvqDUPqkDdBJJpn2JfT9WX6vRfppdzZYsamy5",
  "key24": "21d6JJmdqjoFLPVMX2Dgx2SeV3ksxbHSDQuSU7jGppJ9sh7tSVPEewVZQqBxXFGFUznbXJUggYZTzbiu4rrzhxxh",
  "key25": "63SEK58R4FoqrFDLbQVXqLrcHqBDK1dWW7bEA9g8QvVnX8LZDch4wCqWdceomLNnNM38594sjK3WZUWWYGmuxgQk",
  "key26": "2ATEda31RerLtYei2CWPbQC363UE9EnehJRjqcwqSucfQf9TLYtbkKG9AYihqNKKVuatNbCkmqs3BYTPphw2RB15",
  "key27": "5LTg8aFY15WcBMZAQTxcX8FBX8K8zhf8nptFkAihTNvapcbUq1TWEkwHM1AUVwQabDBa4Y9Zhz3CziMy1m4rYcnX",
  "key28": "3HXtcc5AarTCuBVxqSGS3RPowp4XgpQtSzvAGdzois4922Q8FZd7XDggyF8m5JkKYAvbSP6FWT527XrAGDQuwe4E",
  "key29": "3RDMx4VLN5vfc1iumcN4F1hfXjd4jRioreWP9sLmv14SpKQ7hrdsL9vUeMFdLii3jQrJTT48QZXzHordh3hpNKGT",
  "key30": "KK4xzVgKnEACjuwqW2uhFm7SwaXXP2Z7frCEgNcXjKEVGscGn2fAratpsdB4dhAp8ipQrrqoLwEjjMnA5sj5aeG",
  "key31": "5ptWxfEk6zP8GQExEDfSZsohVGAF1YhCec7WqjkhJrbBXZRzhs4z3aU28bRwwMSta8nN1BeZEx1bwH3aCz1C3wNX",
  "key32": "mS83k1F9URmxNVENCnLswjaRkQgSVY7bijahJrJQPyC5GmGtT1dqjfdLv4aC2R4oz6Rp2sb5ycgw4qYkRcfjXZd",
  "key33": "2Yef2naAXpzXZhFd3RjyuTEjcjanvUNWsYR35npfjBVRvwbvpGpnV8xvyYTvhzqdP8nMbgaazGkGzi1xjGEv1oeP",
  "key34": "4nsoEmDSzZ9cthRX1TAZrFKLSozY9qrbXUPjPtKPKxzypEuY1PSGAPEb8ZuB31xoqTo3fYgGB1Njh65C1bap8CWz",
  "key35": "QyY58fEN2KJTgScTL85ScowoK6royXhsfFczQA2ZrLjW4rD9W4yonN3DQPGvFa52GdHGp4Jgm9chHytMskz15Zg",
  "key36": "4W29HzMssiqkThEwG4zUUejPkWwungjhoEbVE9VHYvUCGCCJPKvrhXahQLiLY5q2oUbqchCSxchRH5W2UkxRWsBN",
  "key37": "3dbNQ3KGWnBd4mEzzwBVFiMUWxEjMXL7NY7zqLHM4YXBmAUMPgQDYFZ1NNvp9GP7WS211UtxYtiXUwCoinchBCeX",
  "key38": "5moEtEea3DdHQYCEvDMMfjgDBtjxJoxoRCi7P7fXXunVWJEU22kWymoHjJtqF2KX53ckK8nitiJjD8nxp3aZLe4W",
  "key39": "4nAqZkmw7Yb2KHfoHFrUtTS2mTZ7idmwQJ3ak9wy57ovyBCiC6XhA2pU6Z56RfH1FenND1s8RvbaQ6WFxcReBCbM",
  "key40": "23DwWxqNJtirkMpkLuxK51GsDojycKG22mLhAUjRtXTpyhMkjp3qGFVdQztnGH8QPcTCatiXyE3FAFDwYsiUwGvK",
  "key41": "5zxiEiJNLW4MSow19MmeFmMD1aN1dzNeHuqdjoBcoa86BVHspMxQ28DiNMGW8HJzNueB869o53DAVp6JssHsoPm7",
  "key42": "5f2pj27YC4vESXg7b8x52S6HWvD1fTMVYwB5m9EHvEhqCyvvfrgLYV67mgDTnKbUduYHtv3mnaHSBhzWUpsqaF1a",
  "key43": "2VJcxamXuAUprLvjzK8MR7Q1pBDHJrTbwwuDGmBMStSAKu7nvVSkGp9VFbn9YDCDSoATGChtsiTvCzTrH4FytNJs",
  "key44": "5jAvvt1oA7TuUSdAcVYQz3bdCRSTmAgF1gRXoCzDXLwbZDwmY6PZgdGjs83nyqKP4LLhj2RB1TfHtmTZ4afLjRrv",
  "key45": "5qZSdXtc8bTBR7fYN6xFpPfjWq7Yu3QAxF1KtaVJg7PyCD4swcWYCupZxdx2K5r4reRXjmeiazMSx9vGBUDbrCNG"
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
