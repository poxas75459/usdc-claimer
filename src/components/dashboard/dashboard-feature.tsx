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
    "uM9UBdGaNV4n9royXBBQPUSHieLkDKxNU15KNG5RgA4AUThYpi4zkCgwePsLAfiBMNLE3zPP4J48NUEF6d8dQaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yyBXbTPgKtVR4qJ9eMxb6iB16UeVvrTQmpJRtDF3nwBnYTPVxzBHKjKm8xe93kQ5xdccvYCkfWagakKhDA6UAzC",
  "key1": "3keK4sbEz8Dgyn2SedPWCA1wt1731BQmBE5gqCWHJTwMzcgp8S9WTMY7h7CJWigbT5qbdzPpkk7aYJXoWr2WSG8N",
  "key2": "4PiaPWuwLSiqhQkwfvCdf6cF8WfzBVrPMVyL2nLcXrATF3LWvo1zVN1RspotKNyTLNcDKYwMs3irDNgRSR8urmBY",
  "key3": "4fj8ZE7bm1QgHi5wyrFWWuoWchgswk6q85NadLH8zHTeapk2qZFZWkRxSkR2CmcT9w2rXbLpHEQHnaRmxKKPdesa",
  "key4": "66SoXkXkipBfycsFZP2pf3GqvRMx6DherSnfbLdrYnmcWj1kedj99vdfvxnkR6fsaNGRqQPH1LUnvi1QiVsEWiiC",
  "key5": "28uSB76M613HQwQXBrP46QtXbrWmpb8LaVHij6g2zPidgRdrVPT2qsa11rBW6njNB4PVRjVtVStLaYzt1RQvugER",
  "key6": "5asdXGDXXmpoosEgq5iETEJQNZ7dGbAcSzkhHQEsG4tiFv7Tf6HnqaRQkGYL1SyS4yVzmokTRLeicXfD9Q4vJdjS",
  "key7": "4ud26bXyhrfhR4fMpkqBtQWN7e2ccCyrnkBjTh9wqA9qrjEnudZu38MUi4AQu3DDfzdG7JUttvwBuYC6SWZhjsme",
  "key8": "49hVoMvTSGrJLhR2CvHFcRPqTdrT6C17Udj5v6WBZhzSc6W4ZroKR5xU4f5n81735eY8tiSY5iUryoyU4VY7uEge",
  "key9": "ovdsrPd5QQqf2SQsj82VbuQfcT3iHfJWPiRwVJxWav35dfZrNL3HvHA8TDkxxwvSZ4zTDURAPgUnouHTmUL11hD",
  "key10": "vntbChvmN7DBoKxNHN3NzYBD56priFundgCpRWfjTNiuHVap7scNrwrqj4LVbemM6JW1Z8N75xsFM1Sog1Ksfm2",
  "key11": "g85ay9MRuh44wMUPr2eAGbBadkL51S27D4rbsDv49HSk57NYPHta47YBTxVdwmtU6Q5CxxjuAEU2PbCRkfH7W3J",
  "key12": "5aswm1u6ociuLfRq5jRSnVd3qXjSKN6MAbAGqEMzQUnq2yahSJCytbveoforNUqhd2RcwMaspCEjWwzdXVgN22Q2",
  "key13": "2HQ1Kexh6RvQau5dXnnZKAHPcyYV4pE7kVSoTr3tXCpFsESnx21b2diNgBPRz2BTyzaXMQN6qGeXhGnRBJXtH8Pe",
  "key14": "5bHvLPbceRuKS4wuuRttKAygj2tcfpBK5RhYAxVJz42FT1q8ufr5HY5RATbGmRTn3f4xViHuyx6GUeQUqTZHbaLy",
  "key15": "55LS4vGYJZB9RfHGi5Z65nQ6otWYCriP8qWqB4WZB4pJxNEj8RXtmuw31Wtm3yDgBUFigWrkKH2SxZ1dsQxjLLT1",
  "key16": "TZeUoLKpDhPzrrXC4CSBBhjwb4yNCgE6VgfY1gAz8Lx1qdvLimX5cxjGG4DHZnVZFFqNDYiYnMf1JKwqWaV9C2e",
  "key17": "57GAEm7g5JyHzBpdDdS4kGKaosdvwqzHyRUVqmYnG7ZLYZWkrbX4bkavBSdwcJdBRBUtWqhMcCSbvuh3cUbiaqZG",
  "key18": "3CKwH7bgXcXaNL2o4mv52oUg71FonNQsdFZ3im5U68FYhDqq9v3gdaj66cZXy7Ku5kn7RhQ81qHdLQk6uEfB8RLj",
  "key19": "5AyDnjq325quAGia1NN3rux9r1aY5qqHPw6xPXxXUJAb7YEQ2uxEnHtch38VGDFguGNzdRTwN5JjoiVQ3yYupDvX",
  "key20": "4oJvgaD9ZJqH8cvUy4FmExHaqiHkvS55ZMXz7yxDzXo1gyzdfh7jydYAttFq5vUChRD6kKwM8fxcPWfZVhz2HxNo",
  "key21": "5QeF7Q8mkLenZ1DpnQ5B4amJu3C5XdwFGkGfon6dpGCX2ZiwnXXCrDk5B1udkxcyxEjdTShk5QGp6ChzURnqQjir",
  "key22": "3ii1YqW5dEHah7mBFPCPPrb9A8Dj9sW9HxF6kZiTDWxRyv2NL2Qd913fK5svtx1C9dzUsz5oGDGtKQF7sNz74ryf",
  "key23": "29v4rdbKVH6vQt2NAyL3udGGjmnMThTPi5CqnSDHYXt3jYnf35wnZS8Meh83DQJ6XFshjZu6WCimcwFME1KuwPKL",
  "key24": "5Wbk1tNto4G3yZQJEuScGUjHB1TXYcFSfyR2gENGG5LB7nH1EWK7cPRecZ6wtxj6WLLqxLk1vetaNHU1fyUEEckD",
  "key25": "mu5Z7FyXZaP7Jpm129Q3m4XSCBRZkEyqBg9Ge9rBEHUGCDxAJMCfvcM958aHPS6cdWLuYPSeAfW54YyoHB3gKyn",
  "key26": "2a7b2dPp8tKtV6UqYRkoZjUuvjtaMCzyRzm9AN6A4mcb8UPJV6F2kqRGWxJv4f8eHwHn2ka1WXQcutnpyxUWhybM",
  "key27": "5GndVtHUGFoNsaT8dqPkzzr3egZE2XxnykRsfTyRuKFfaWZfFmVmiUiQgXmq3ScCgafv33jTrJVKyhNh4r4Q3aqD",
  "key28": "2htGFj5vNTMQp9N49EpFd9LtWY2R8vGT3Ws91HYuJsktFw7K5feEFdAHRVsw9QPGFBUzGc7sHpn3iw8e2dpwzJ8Z",
  "key29": "2NSZetgTnrMayvcY8YzEeZ3n7LrBSWH5PxF24Ln2g5NyqJZujT4sFkTzV1QneersrB2XspPdiXAaEeVNvD56THiM",
  "key30": "4chgnXmr12GwVegJozNYgNHeURJP9EGnHzWcqgENfmWZbci6TL6s868oxcgGjfSUEqmsNWmjJYXfJw2ypA7kTU7E",
  "key31": "4RRz6VGAYsiuJk9nJNZBvAwtVyZHqzd9ry8s5bmCdwxe2tCbzXCxRkDfwp3DrzGaRxd67MWeyhUQipkpJSG3Kvnm",
  "key32": "vAXfH1iRYwV4y6jxkGdRhb66o5ddhG8TdeA6qis1998LaJujUbmwmtU441kn4UZJWTwm3Pn3JkwyKQqkGd7jhBw",
  "key33": "5UemH4cjRic8pLJijWQr3Tn7nZM1Cp44J1Ajx5NK2uygx5ZTUA7pfWJmu5zG9pb4V1wzPw4RNxcNrmUS93zqQ1Je",
  "key34": "3gBaSghKear8TFSqgSNHnRV6mZa7RJzF8cRJ7SS4v8XWimF1GLvvRPLG8qxZ2aTbbRMkxmnBrXiiWpJ4nAk3s6iz",
  "key35": "4rsaEuWBYRUyB5W4Zw1NKpvgJMtEob3F3aAwKrtmArXxaZPckTTkZXAexdJGEjwN6eg9gGCQzC35LDNfEC6fg3gw",
  "key36": "3eerGKUAozaQ1v8qVqaGziTtGbWb1P6PdqVbaDCDD3DPi2Wug2yUShjZQVdWV825K5R6Wrq5HoUS6oj3zvdAEFjv",
  "key37": "GrXdcJxRsvTDzmZsuRSXLVUFHNjRcenhM1dSuW5wD1ZyoERDaTwMtrgEmaxVyHLAZnn7kn8JBz8erN7HBTMpuYV",
  "key38": "jFjH4LdFh8zvMn8oEXLJBdh5GZzEJAGYajaCCutq3iLQxEs2KVsRdK9VJfde9XQoCE3SwuWTacngDTqmGkrk6UY",
  "key39": "2UmzxzVCDCUvBTgJJSoFZA2jnH4FwTtvs3YV63PGtyvTc4Bz6aPmjgRQi79Dbv9SmCr1tvAebBxMcFMHNHF2RJUe",
  "key40": "2nNdvgvmjVmt3fq8pEqsfzfrQ5UNfwXft5tDEYrymjaxX4qXHZDMyNsiE9R35x4XNJRu8UgkY6u4g74n7bvv2vaH",
  "key41": "FdgbRFnCd3enDm5k3GE6jpHZ3fT9nm9geCjNjtn2TAYGPyo6isN4bU99YxEX1JYztYRMpRBpnpqPkAoqE6qTpfe",
  "key42": "3n1qVkAuDEMTwimYQqGRctVjkRh6ov2aEmBNxgjTUBPpRaQNAHTc8xvbQxTJBLq3eGyewxMNtivHCNuCP8eWz6eh",
  "key43": "VmGuLymmPJuamg2tonwwZC9fchFAbgJkpZyRZcK3yTSDG6Z5Lc6rwDqaL1dvaxce2SQiPer63KesKU6MDRX2GJi",
  "key44": "5aBSQ49CS2G3F1nk1g9VQB5oCGdvi9tCXPs1P7dM8focQn2LA1U3KPrr57gWrjwVaxNnTHtfTXKgTuZhxiSQFqTP",
  "key45": "UwowG6EHJzRQMgvFkhxKiJf7Pw2pfvvmmSnwuUpuS7eTwMEd7iSfMjc7twLCR7fYapXmjkh1WEKx2KCioD4GLSm"
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
