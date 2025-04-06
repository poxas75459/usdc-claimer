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
    "5cfMkK5awJbnvkWrvMzqLkyFn3bT4trQVxHfE7c3vqBm21jfGZpR48SYLWWPBmzNSHsZFcHxeff43dr5Aw3Kqkno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XFtCiXczx8uSuQQY6EBYtyUbPp5dHPcKB51GavZGUf9mxQkWDaxSdacw9Fvghw9gCwGuhm59rfTFA3cw7Deb26N",
  "key1": "2QWwdwzK1VKsHSyuDkXUyXrJMG8J7nQSNmBseJdJoa6NhQ5gN3qQSsNcAxdzjJfJgKgfiLep4seQhR46KDwxRw51",
  "key2": "q53HmXSJ7qxGRKgEkBjnKqeW17ak2WNRHsTHZt2HmLHwpLL7tKmSvL3w1svnydSraUWCPph19WReboLV6c4nxbu",
  "key3": "2m2rSpxV3u9gtn6HzkdpuMWPEBWx7PHyRi4QCCic9TBNDq5WsY1ML2B1LuKEeb1D7RDc2ZkZBAf6VuyHEs77Z5rz",
  "key4": "2sHtgNb5TiDQNk122SBteBnyYGsfnqcgZ6LYSe18d8MweQn4rwzKjgUwSAjcEmossaN9yQG4zi1T57PtoLetrssH",
  "key5": "5jXjbZu15PZKPiekYgAyGhWZYrfVeMEMt9JXMRgzqv334agQGdGRuwJ52TnDaCsrXstbMSatwvTvLkHhZbPMrYdH",
  "key6": "5eUAQdXxMN1jyXktYdFnEjvT1XSbd6FWdwGGskRAfuvdPaNbot2gBdJDmM8RcGW3WFERpM7TKtGGsAQ18Gnrh5on",
  "key7": "5ZBPDpCTnuHmWpSMss18LMVF5nzZLdHVH4oyATkvNzbBw14yiTvq3qEjNPnC68xZmtnw1P6SHvAuQo752N4pVvhW",
  "key8": "3wvKkjQ1v612nTBMHxiJxX1LKGg1QUuyMQFtTZ9Lse3RQ21PvUwx7jfc9oNcFmXqC19pCv7ariH4BvU1L6Fc3yg7",
  "key9": "4kf7ZffEXBQ1odsNmrFqm41xjtxghW2zEiJPVVByWRypkkdM834MBfnVh9qbkhL4vpLTNyCdcWtZAM9mU5NR6bup",
  "key10": "rkELHkM2oSdQKuJLevJpnvRACs8pZUaN2Kyc7CQMSKRbrMPRqj8Lfb5VQVvZPkKuoqJvp9v3pvF9FaX3LWMWnXU",
  "key11": "stX2jyUBG9QWUuh7B77iLMedkJ4yWwurGHNhEY2HbwtHPdAyiGzQFPjWFjpn4FkfPbpcXpQJgPrjo1tWVMCDutM",
  "key12": "4o3mmA7W5WGAU6BDS9uHnmvSWnQPeM5SrshxnegTghEcv77mcyypTnC3qwqM94nTXkSvbQPwXRSE3q1aZwcp1t7q",
  "key13": "5MVn2SdJYZNGinYac27HqLPsPFhNcWCLg6C5uysoG8S4VbrPzK3cuYD1EEwP8eBiWRbDUWQfLevw1Gf4HPmq6Lbn",
  "key14": "3RB895dJ9aKuprj7ZBu2k5bx1iWBg3c2ZxonCmdRChogWxaY9WymbxfZFAUZEx2XUn6XfAXJfoa7qrvP8deuc83a",
  "key15": "5t1wSR2hPLeKLnx2NJrc9fG5ecvWo2D3hoVR1LsXXdSs7GApKrSfb3hzDU2axzgxQKGVABhSPZBu2ez6sv9GBFqX",
  "key16": "4fXt3KxgP8i7HATEaBcAefZeGpKCFCtWZNfh2pivuw8qEwvRxdw1nNryE2V5pPVbCeucvFnTWGJoMCJKpVzmtTWo",
  "key17": "nBkkVVLfGLdCqXzY1hcnUaSVvRVfqjvufmDg9gtGZQwzNknSiw9cTz3PVyiyAZ2hpEc9Zk4GJwNuBFTaXbnp4yt",
  "key18": "2tNDo9HwTVgbcxYsLSmAG782Hjkc8YYPt6oNSJyXtpVnkB7GPbPGq2xE1i7NKNVtM6ywABMBkL2JpNn7eebd9qmy",
  "key19": "63mVLYA8Rnp9njvBdWEzQVkW94EYnSsEjSditVefXQpnpMEkSZ7dFRJrBnYh7hGHkDLpkdLJxFCNy6vYgoPeJEs7",
  "key20": "3h1paFtbo4Ezx1jXcGFLESBj7SxarvfVrke2PKh9KdgYXXoXsiK9reFoyoQdczhd6e8NYzNtjPvYBBtKY3wpGmnu",
  "key21": "3LjtbbX6BcuKHC6Akg7BHhrrXGXFomMeAAzXV6Uhp5QVLmQbkMmVQKbtG9Qe6LXqTCNK7SvCShT87yQxum9uSs2V",
  "key22": "hRGaHiYU6W7YXGyRCFtHU5fpEB7diWrxqgkEBL4XppGQuaFcWcTmrUom2s2UoDdV32JcJ4Fr5PrWQvsMedDPi2h",
  "key23": "4wSB6R64DXPN9BpFTPECZJ3nHCeZTe9jWcLRip6EBq7xbUyQktSJ6VUa4Naxbv68Vn7krCC9Hq6axefzm5rgsiV6",
  "key24": "4WFDHsSNcdiq5xCJgpiXDsfmYAoWCifNJ8XkAUy8vYEXHoJmcqkqf2NuPu6YYMu8GanPhTiHwoXdB5qG1hPG3RvE",
  "key25": "5RdutttR3zujKV8uHxScTL4umSWc3eLaS2imVhwaDftctN7MrfRJ2XZ4gEoTd4E9hhmN5ZEVrFLZLzs7dtM8MXqJ",
  "key26": "KzTpPfs6rkHjnFHyDNehP4fA8cRDcWYemx9Sv6PuYsWjrfeJdjDhjfccWkyScDZ5SNkzi5wwfyDCmN7gJhoKu8R",
  "key27": "2WCPE8QgzQX8P3mkGc3CxopbhLwG6mxjkKA6PUmUGS5nc8Kg5p6SNVQFzyNefvnvcPmV27dbEHjgw6wT96CTFGSu",
  "key28": "nfHXvanauhgKjX4Ycttr68myVj1634awJ6oKvhwyhN7UvzKkvxsm2921F5PEyFwgECLp5imArvSEu1zwsdDhFPX",
  "key29": "3QUfRCnkbT7WTXZF1MYDZnRei5zMcw77GvBCwssrHQThkb1BJaheU6puCZs36KeMLj9S5FMpKAaEAaSJGLtWk7q8",
  "key30": "3chbs6Ap9deBua71p8bsxrM9JkRjhjMkUL1bQ8nxUwVrKVmMrCDLtU5xYS3cWgjrNcjfpsYLEUF8AqmjWjDGnnKf",
  "key31": "5y4jqeeBjZc6rr9SkPwrdxsBBwAXfSh9YJ4zdvzb2YP7NpduSeGZKW3fVXxnapKy8vJTtKZiE3YzGPFYcaCcmp1w",
  "key32": "4Y2KLogACnKLqgRoUCPTiQrjYs56FyyjTwLRx9bda9udjLy6LdXtqn2L5QzYoSMmoangDWTqsSqg3JbyUkCGdCC8",
  "key33": "5asV7hnAVnjLpjLPFrzBj3AudmB2wbeNjArzKySWqMuvt1Rjv4AyVasbK1DApS6uGx5feYDFwaFFgSMSbe8u2DGd",
  "key34": "4Rx3GTcpM1shQQPinZMMNQ5gAFPoMa3D4Wv3rSaK51o8BJj5dt2kThBTvU8Cys6cGSpjsiFuXUvPphgpgxgZVxhK",
  "key35": "5MRqiN39u1iTLQYrZmi684BWkYiHsDJPokmS1t8S9zUJF1xHopwqowts1ojFHy8Lc4N5mABYCXXRrnU8uZfQ4cf6",
  "key36": "KSkzj84PnsUR46LF2ikMFqH5V86YWFKeB8tUWViKk5Yoqp6dX4bPUkELCWTUeJKwn3dcs9uVdAxM1NJWQFkoPF2",
  "key37": "2Tr94vSwiH9dfC4z7u4WURNB8Qmna14vpAQTEJqjz33WyGHMHhCFXp9SF2UCrrJwEWPoyWeEaLPmKQiDyXvf9kKV",
  "key38": "3aEr9ttVneuU9e1RkiP37rJMdNvX9LFfPjkHoZctFJybLBQaqws9YdbYnqrwMzBmp9Qd1y2gkKFPRCv4kFds5oCJ",
  "key39": "3BJdhP2W4fU1Ukkuxf29RCwuG5UxkxWjZkvEpxbx5pWut6YRGNfX6yfYzUQN5CqR4ydfMWiDrjzFKHGriXKBYWmP",
  "key40": "2BLA5AfBc4VCFQhZJuJTZRqRTx8YCQBEzMNJZhJV6iHeovNCgC19MEYcQFS67S3usMorMf7Pq3bT7AraibEt4agd",
  "key41": "8FGmXoratCKF5T4Vx7pYXMgU7Ui7c2qDDZsiPnZ8MjuRjnPaYcXYnBdqWPx6tGGc2urGfaFtMFyss11TRUf9gKv",
  "key42": "7476dUcQVBuP6iuwC7C9B7s1ji97DYu68HvhQJF8Yvt4xUZy76XgCHmCz6jrCXATTxsSAh44orapuzyNkwd65r7",
  "key43": "5E3RBUCHtQM3VMCie47wGfD9BLuSjKBRKxBhB9EY89p4YvXg58qipzVMjeLCayfqdQCnFfbDzieZQAXHSrx6X6uD",
  "key44": "3hDXctc9jkzWh2JSeXqJYCifAu7dsP63EF8Ydfn4a8AhxfgkhCd3sh2E4LeDZNPa2rqB6yKrBT6G1ABg1bV2z2iC",
  "key45": "3N82EkefrhwXQWHhWb78fKqyLdZXGk8Dr6Ejt4JrknuQtFaYtiZmQMzwSfRDmirUab6Y6advt7EoVcGUZnf2bnZ7",
  "key46": "23Tyyg72ydi8UomXoYrYtEd8uraxAUdQPJmukEyN2uyvaTRUXTwRsSCj23Cick5yWdhuQtGuJEZ4nva3342NWFS2",
  "key47": "Q31vZ9hab5eyfkXUTcbt4DEb1qBrcjLz3T6HJbV5XgdfU6AWiY6H8cUjV67fWYa4sbtiSepr22dyJTPwHKovnTc",
  "key48": "2JahMVbZtEjUWBdfpFfbxGpeEmXFjutGgWzXddGposnaid7puvkQRqVSwyRRYTD14Ugw9mf81KYadQmWvZF89tnY"
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
