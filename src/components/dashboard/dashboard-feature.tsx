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
    "45p5Gi5TmyA9EukWRpFLyD5AwpkvjRZPUF5oEc71quKZPw3ZkK7WTrhNYjPJUvkbUqNJymaGBcaEK11fQxWzRb3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EoZJYocbBoyyMt9SLMEBkDoQ5wxTWdTxmEWBCAAjNggK9JXsaZ6rK77heRDA6dMic56Fmp9UnemXBxy5sbuBA7E",
  "key1": "2bfkQiTjGmutjdh2ZFoYZb91f2Aj4QNFZtBtDMZfVB49YH7sNZ4x6uVqRp7hTCJMzBwoXmzntHsKbCzXZ6ecouHe",
  "key2": "3rzDopma1sEUZKtjUcbzHJQpdC8YhqL7cNoVpDKNWH36v11jJPNShvswNnN4fWfCqTSEaSQ9uUgaDbHE5WsXKLCC",
  "key3": "2iqpf37xpN8woHjzqgbsiCpPbPJSf6kFX5pi62tbBNk5YTtw24DU1uWLtkdCaJm5zWnPoM3crmzXWRUmfBrEosL6",
  "key4": "5yuEnbjaiph3UkXRdXh1ozo8ghfpxAGheYTt6PkhpVDSXxsWQF4G5kD9rRHBWVqKZRanDqg377WG6iAYHPihuM7p",
  "key5": "5PojpAwnVhQ22zAzy2zDMR3gncV2Ln8VKFbGs9ZCNALFDxMtFmy9ZMiAou7Q4vycdwYpM8TzE6rr3UMr3KefqfYN",
  "key6": "4Bca5c6PRZBCfsR59kwBa8rLLS6kHhkBn5TLLgNfCjeQXFrsHE7CePXJfz2tXfUNwCahY5DfpUED5xhBdUeQ9aGk",
  "key7": "4UQ2QxnTpMTLvu8ZUhBJVEBdJ4pBJtXCAbDpaKP9adfH1Q9Q1vBbvxHvox8Tne6Yi1FHuEkuHxMRKT3vccd7FxZq",
  "key8": "21LFcQ5PfVcX8dSukhNPy4xDpcxXgh8SCcPzUyYL9mu2iiqzqSLKhKmWAQpN8DTEVSjtCWGykvHDhnJ6gfDLZUaE",
  "key9": "4ebep8Y9HNfx4AZbzSf4SoqYb8uYpc8whwxTmGBHxeh6LZUJeVdRafnsYHSDNHdj91hez5wrfnTjuFbr2Fqb38ZK",
  "key10": "2xjbjXgFdZ3oTVcni2ZhjhpKVR3m9c2WzPF672Nc61zFrJxu2fymZDgoxvMKgx66FGSeKiPihTHTgpEHc94wuHpq",
  "key11": "27XpQe7MmAZdF8y2Qp3HXtaHADxo9yWy1ZxRERs8VH27jJGt3wC7HZANqdKAzvu6B1prFjtomo3pXRAAW2C9mrrf",
  "key12": "3CL4c6acg8LWugX5wBFKetNKctx1mPpQXTZreqCFzp6mkHZUPrJf9L8izv57jzSoLKHKvGffDJDpQqMRfAZjFWom",
  "key13": "5ghPs2MfH9NEBGgvTGQFsjJabbq63H8tQjnW83eRXbvQVVQgH85rxPPwmQQZTKJTrrnyxiLmnqnHMRk7NiqGLt5K",
  "key14": "MEpQ66scs4kDrvqdR4SS1TEe8LcAfxRQT9Yx381E1marxrDywc6bwF3zdtjDcqbf7SUm9DTmcUd1hSukEHBrH5x",
  "key15": "2hkNUJHGVJ4Rnxxx67QN2qgspHt3Aarw8kut6wCES7R3BT2WW5GhF4XpnFqc3QFA3itQJf7nVeTcpoBDQz392Ay1",
  "key16": "2VeUYHrEFgvQCzkZXGgYPe2D5SRTyScYSZz5th2WFiLQKkuVxh5vD2BySJ7TWgUpxBe2fneV2iBoYJ7V4e9kMVcg",
  "key17": "35PPCFAXJFL6PEg49hb99VRyj6N3TAhGvRLWgL3djBNnBLAxekGwxoMnxTiAHa9McZYSvHok7S32S8AqeCigd9ZS",
  "key18": "5kErXyWWzycSWtsa5FYLaK5EskMsuXgwMP3CXCeHnXQqiuRBPxDrycunJBbHPPEdi6C53Lx6CNSabxC8KybWuL1H",
  "key19": "Ah4N2tCU3g7wo5HGxW59ckpLBHXYAy4njcpB4A52p8rj2ocavoDFJEb4nB1wqzJwvuj6SGfrVR6j4DrCS5hkFMg",
  "key20": "66a3u8UUQnKgRnBG87fFSPmM5wmaPuSEfJ9GcFgNLQwmFXFmasTAwEPbEwguYcJDZCMye5ZpNZVotvJrncjUMmF6",
  "key21": "WNkAi8QsaG8CR6mMHVFk1J1qxtRBbjxd29abbxtSFiTmb3fUEvfmXjSEpX7NwVc4f7LME2uTgjJkvSCViqTdxMz",
  "key22": "3CBm1rNBPHKVShtUYW7jrSu1PazMR4WzxbnJz9pVMGz8YF1Z7zMMYP5hLbMd5LWrMv6mCQWZ7kRexWH5tsh8oW2c",
  "key23": "4byekwA4cfoC9V7e6MLjP7s33wzdKqWHk6QNTKTtKXoWKpH3xc2HnhPozTB9TFJWSDcBvuXByjGt9f2j3F1snR2n",
  "key24": "4LSVe6hBBZvLCvTSbQ8WJ5xiF8ReroDocXbtucKKxowxxfKDvVrpFR3jmtMsqwM45LDiKXi9gBwFtD5Yov3cpxVQ",
  "key25": "QnKvi3uHRqZiK9RdoRr6uAGjcbzrrq6HrXvJE1RpdNMqXyHvYpyfy8mQapdmsDqXMKDG1Wtk9yLfGj8N4HVKG9y",
  "key26": "3oa7Sei786EgK2gCzqVkU6EB5iNGZ8K7EtswwdU7X3gx48vfTmKwxZ4hMam32jMGNxFRrRjrUVnPTkky6e4BJ1ya",
  "key27": "4QBRZnbKEB8veCWk8JsRgKi6ge5ropAZecfcmV3M9zz44HDh5a1heJJfHhftye66WKysWX48zjiCn3yFbCyR3H9M",
  "key28": "4tdDYrXYFRDjjVoATMwXh7b1JQuj51JceFnk86FXR8nzPqMpcucQg9gU3N8RuEML9yzgqBzwHeTJPVUhXS7QaBdc",
  "key29": "2c2pMTDGrx3SEq71NwWNGnBMTWmRWnAXVryBWhkBmNBWaxGRJkWUM1DHy6wuGGWDApVfzhbdpYGx4hFQ6DVD2qPb",
  "key30": "cqQSQ5UcgbUGU28XHCRvHLPuaiHRFdrqFFDsgJzZo4m8C1B8bT7hkgF66pjYFWCYtAgH2EAj6F3TLDtN7s95mYY",
  "key31": "2Wq5fLSxfJvcsDKjndc6jBnMmSWptKtgrY9V9avKhLuJsV2tFqTcz1jA5pxYNyT2xwfKHDuQnUTGUFhtLyk1E2qz",
  "key32": "4kij5vzy8FEV9ZY2B1LJJBJgxfe7kVr5by3uJt21boEqLS6n6M2ajQuHxMAe3M9CkK2RUrpfbKR7Qk7R2xkzDHxJ",
  "key33": "k9k41wWUAF9vQhKrqi44631gxkxdJZ8BbnSSsubuFLd1oFQ87gyKPYiucruLjWZWQa5VBbzimdDPF5xaKgpE9kM",
  "key34": "5Rb264PGJmEV9vGU6qV88CVoCFDk5NHJ4ti4WeoBoup6rvc92j1pKFKR8os7FqpCT76rDNRF9oZw1Bf1BJPYs9TP",
  "key35": "hNditjFMLDftp5pKxgDVY2NfP1rXvgpuChsXbywCnMSmByh3KMu3F2ahMAExGU5jSGoRya2kif6mMrESiToevvY",
  "key36": "CFVmv18zvQezr5LFgBcqb2FhJtnooDPXbbkf8LijhiKFgesx3aEbtzqij84iHk3FUtBy8HebaFWAiiwnTgTzZVk",
  "key37": "3HCAVdUKL6nMNhirrnGZAUWAhmuSvPeDtyibAPDW1RsMSzwJYsdLpdYZnKNcKsM4pHRaifXASegMWJ5iuPpSJ8bW",
  "key38": "3ZoXC5EXaLi6KJjR71mokLEfwDGKnchoWkU8MDvH1WSXVbHPzV6YzZ92D4PfT1LS9QZRQzxjw6Skn52Jhs5DFiHp",
  "key39": "nweDvb6DHktUoSfZumF2o7Y4kepnauwpRbqGXihp45oNnpG17S2kMqdwYDsfukxonnhBNSt8JZU3Q1p3Ha41xAF",
  "key40": "wcdJPiuYmRyWDyXBbtzHEbw5QzSPU9nx3JbgC1a7M4sfw721MurPLvcW5hez8cu5E3ACqRgKWFRCRXE5rr3a7yG",
  "key41": "ccyAEpRCmmC5FZcj2FzTcutoLKNTjk4spsdbKaLFdMpmwhn5S56UneG7MJ8MPqEk2n7ci6U4beUzRZAou4XVNAG",
  "key42": "2K4uscUbrBjT719HeFgzAiQ1UxjAextiPxzM8Squ2yWAhKX8j8aGHw8VH7rhTNi6qjrGRKDJh5FhRGgmVumtUZcf",
  "key43": "2Cym7RipCEf4hi2BtzBFGX2or2c74DtxfdLYYGSUgkvDdYp9rLfpUP2NfQ49weXZcorS3B6B7sL7vkVosGrqzQgv",
  "key44": "4aABR4FUB589NsZKwpKBry4kMp6PATa39MxALpZsEQ69NXqqPYMKU1CoVYDhQRvxkkn8Mz4AKYcZk1JBjqVxhtRv",
  "key45": "WPbcHRrRzJECpoLzxDmfyTYTq4zKw2fRWpB3nZPRt9WWmHE8K4zfe2fcfRhFwuLnw3BKF3uxnaiNVkuNZFKiCjP"
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
