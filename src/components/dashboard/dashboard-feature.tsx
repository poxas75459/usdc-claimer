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
    "653LgSpDWdzhYnJy3D3ekrn2YJaSo3GRAgT5vvgQ4ZVcCaCBPmC7NdGkk3wwLfBnsk6G8xaqZPu7aK2VgdU5hz9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PCdqLpeTdmLyYUTPdTTFidfe4YceM4GSPj5CPWn79K6dqzE5rWrrS1S1fYdSqGMMA6TfgNRxNmJJavbjXvKoFJu",
  "key1": "2yTNqewEgoSHaqjYPAH7VczZyHuzUoXE76EHjDZL8Sfs6MTpBEjN7Jdqkq8jzQgyVYYeMZkcNZNM4C1Ss4zABYFA",
  "key2": "4XfWdnGR43yBkBBvidKEBnszNKfPyVK9zygLDGoWePvYXghisvY5UBLxrU65kd6ebf76VQBqMyvk1LsJ7YF9hyiS",
  "key3": "4kaayzFg6ePk3w2DFMBBVUkjRDvJcYwqBcr8bEhZXwA3dbwTfo5HEVkwKrRDzoFXbBLK3s1MvgEBaHmrfweMcsLz",
  "key4": "4PK3k7NY9ap2WPoSaEnDeRqoWQeuFuLWjofeNvfvosESoEzh4YHRfFuywibhmgRXg2vswFpqWH1gjYTgQtm8Q9xv",
  "key5": "47cFjXFCsDximekCiZVm4qFLrk3duAEQc9LWAs8ikEnbsbqNj1EG4YGbioPQYCNKAHNzohZmYunCu2eg9Z5izPDo",
  "key6": "3enw8NXBWdktLBacQQjKzXtuV7zQv6EEWf9Fxc8JjY9vwobZ7p1Us38Q6GeJtST5M5CUg7A99xdjU4wvvqpCwj9r",
  "key7": "875NjXkJSuNGwy6BSonNVsjzMKyCy3QDziogpaWbEQZhiDFaEEXYmTTtDH7vAVXgqNft2tJ55ZhRsyXDYccAFQo",
  "key8": "5wAicVVVQKhDnyQPgWddRmqjxuvSDtX9H67QpGFp7xQZdnfzAxoMHSSBTWN81mhaSDN6uh3asETockL7H3PeEpRN",
  "key9": "ZFsE49jYYfRR5Jb1vdncpgomNeFZDjuwXWeKMujwiCGYS9S2keNZ39qPfbvnbXH7uCDupjqhJTurhmqSimNA4bY",
  "key10": "2KvQuQHyYm1z5PS21LGNWKXsoQUHB9smTEtBewyT34xNpaGozkYKDMuHKNmUBaNVH646K96EYCJRYXMfmSh2dtwa",
  "key11": "3r1g1aDjPXBXgYJFa3MC7V8bnaj9s6dhrGsqFMnPChhSFrP4y5RQ7368goSrGge67ZLeQEmgR5gSMYW8J6uJW49P",
  "key12": "ysGz42re57v9fsTmdsaTj3hErxzL3qyEPzatXwsKMzYKHbTxU8MTQFAKAXaTHjpVoJo8A2opiodAJWAP2kpTRby",
  "key13": "E5rEdt8N23dK4NhR1cBTp8oBs4xffBV1NDj57pfKuXubmVVsEzfugD89jC3ftDDbu7VFGWtxmabCUSzn74mvbv3",
  "key14": "3y4R4dU6b4u8z6AW2x7qzfovitFohh94hgMb4cPGSF3W7hwiQRjp3wiYQcmMvQfLyJ3C5NkVLFamiasy2Q3N1FEg",
  "key15": "5Zu2UK6eLTBe34yKiq7mcxtEG1n8JjVLdQZHVN8sz5FgYoJ6CLnZMQtso3NtqnqAah5ZxU9AEZCnHFhwckYL3ebX",
  "key16": "643KaqT11awurVjv3E79pVHRq4wg7RER8aB9WpcYBgiMuGdXb8XXSwp2z1bfDEee9QBwAzepB8EJ2YLD82bP3wjW",
  "key17": "SvMiv4NQsfJLUDihFd1yKQbQAwZgjAWbPtKwFmPtUp3ZQAimu6siScTMAUJUxiCxkxga39oPam32XL8712fJu7H",
  "key18": "5onGMnvoYudCbpxP1kzonEfmrL55fX7gvrot8Cd8Qt1ZSKT5sssYskxCHCtGxXfMcJfy34mg8kBMgrmdCFzvYJxz",
  "key19": "3nk8NUbvwdP2sEAnBwScHGXTNHGRdwt737tnQRBpbEVpWN2k2rqwJnPjELuG6pBCRYDkdZhSywtVJTnjELdpsHgT",
  "key20": "8hJJDZGFSq7Vhwjf7Hsr5iRCypKRAeKKtaXExe69X6kMucfYxrU3iwLhNFyoy5ifkHfEVvDxH6EqobxrMvVKZxS",
  "key21": "2nYchiP64AMJvvepaaTWC1rTCVazmGvPq4Dj3U2ZTH928RzbkXk1JHMh4k3iyiy38oQNF9NRQhgm31NKbAScvgcV",
  "key22": "31spJgujJCcuoqdYFS4FSRosESAXwqwaEKHfPQQTLSZYGHEd8RJZpmzA8iwEZ1zJSAiaaK4G7obhsCnTqT43Tnu8",
  "key23": "2M8ngad92iPYcXTkVhqpnpctLtv9UnuuH99j66uwqvJqH66irHS82CG9GK1XzSdf9nmnmGDZoVjRoVhpMAhLsJ3T",
  "key24": "RV19QyHcgukaRYoBTBT6BUNfHGKRhzyWRgbHdp7Dn9C2TAMZXiPLQ3dXpYjRccNQHydJT6fJU7eAAAWn668QRKZ",
  "key25": "2nZkZ2t73jj2DLjmNwGUGE2RzCyqLVqEJK2zj8GdBox58U8pGmCFWpFGuYGfMTQjTxwGpA2fP2oGkm2XCwHQP1CG",
  "key26": "6645DAXJXbeoxvrDjJ4Cb9GbHiGoKMnnzru7uBkXZeqrcLVrtNkxPFzUPMnh1hTun9n9U3LtcKr3ipQmFdHzaKVw",
  "key27": "LEBy7rQbsFCDorKVAa5f6KSXTvAotBBtKNNc1GsNrKTfFc6yoKQgEuZg7cEp3PtxUqPsQkW61fFpEizNyxEdutb",
  "key28": "3SnbiEjuTC2DXmHGAzEmrRT76ei5p1sgN5jEhWWcLUZ91mEwEPx8kq3WVD39ZS98ewHc6vkqhFNc1DibpRaY8krU",
  "key29": "5Xgi71jjH87Knm2tXurhzJZ8PqxY8LrChnEbbobQpF8vDPrbis4jpqngygFEbqQ9MHyS7yz6xCKQjwEa8P9mkPMX",
  "key30": "3nRDssXK9uRoLZ54kHv7cAkd4niGS7yAxAZr7pszpbkRdG3n9m5irM8P4E1j8wZ3P7cQiNNxRZ89rzidMfST4Zu6",
  "key31": "4dAYYaCdi7ZwQ8fDp8cWkyCRWvpU9CGdkHVPm72yiebQxMRDYXeXzE13NHXM1NBB88NB6EVYCSrigGZcNxq2x2jN",
  "key32": "4T9jPmfH8RUVv82HMPSq9D2bL65QV3q7sLGwUTv16SjQUSmNTtrpUfz5mDxMQKqDj1RvBQn689DbwtBz9dndPsyy",
  "key33": "5udtpcZaK1qGLJzifBovd58Am34mUFRQTHs4mCDh1TvAqF7b3aBJ9AFvctqsfpNW7sCmPCoKKf6vHLo4dG5DHGxe",
  "key34": "2F7FjESBVBBwbpweD3CXAG5Yjg2PK5gVfF2vVfiFyGf6KkMt1R119H2ZehsR9zvh4gEHtytcYVNGxvkEEgQefmnU",
  "key35": "23bfTVABSVhEUg9Ypi7jatkU5J6iRGrpWjytEtgW4odxdrfnZa3LKwQFFZvtmKqN4CWbNiS4m8w7SwJUviUxKdD7",
  "key36": "45wym38MaENbvkbnxRZ7nLZFzknUxipmpmA9Lj4XzSWoHaavGXujRKNhFkiLewFKpRcvcmc3Q5sJPeVTq6T5FeiQ",
  "key37": "299Wbism4iNaXGeDAGNJLABQhRgohUCxm7De5oRhQBkj6JwRWdc8ZGf7Lyuu22vL5u7Wp1wuK6ckiZsvkdopHKZv",
  "key38": "21keMjNhE9zC7yTCweP3Lx7g862Z3pnimZfZ6zmzY7mCvug8Q3BHDJ7cNcNtoqg6y3DbcJ7rS4tSEk9W1PwzaHKn",
  "key39": "QQ1aYAbvVq58MaDtUJJAGDHPvoto96i2653LS98zgAcXCELaeTdrcN4Xh9VcxNrU56ppuTe9Vvbj6amekALtqZZ",
  "key40": "4bXPJ4njwG6aNRiML7PFR4TcsGPCtTN6fmKcU6rTH8x8dffJFmU8xHxWde9k9oWReMKYApqQghXJZJYdeyLmSeWr",
  "key41": "NWeaHyqB2dXemQSk7ye2GsDJGL1Nyu5MQKSywcvnrmTksM2JRqfvrmt844dGwMswyCP4FCTJmdxjbD9ZMQfbB5h",
  "key42": "C21oN6SPvupCVixiCTReUre2Cc2WwU7yfRhfm8EzcmePRZMJRNXma7LiySoEesEeFF7nxm6f25z1LnojxS5sMzm",
  "key43": "2QAaojWgxZJtwJk7BARaYTYY8SqAwHhwLsCH3tGNLBwhGpzWVMq9oiYsyos61rTTPgvZbcDYn2DLoYuK6ivPaEFP",
  "key44": "mrofPAvXhMQYuKCM3vg8ofSokHycrTueR9WgcS28u5kj5FbDqV8vdnhmEuRRr782pGLRpodHyBWat3xqzJWMBUr",
  "key45": "Uyt7hZoYZiByUmppztouDnmFj6D3s1uacAKNTWt5C6BXDZC5z5faenkKgeL5xZrWTUejYDE63TyF86Auxd2ti3w",
  "key46": "32yoTsry13QFAshq1qrwYMvLkdw2wWr6K4q6H8TGxEGGoumxQg1zrKAfdp5tApzAFJA4Jn9D9zXdd6WjyMaRdu5X"
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
