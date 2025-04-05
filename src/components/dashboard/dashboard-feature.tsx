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
    "3zLQp1ZX9cRyGHeiZfo8Zsck42hPdunAT8KvnBDRog534zd7GLC6ntSLtnRgWcALcD1votH2CxnKKYpMZoygxiKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j832KKNF4Csy9Su3gqVThg51wseYzcRDTb5awdvKq2xrvLTFjVqkLDi9vVXJmqs3pLH5qQrYbogWRf6cg6LmBvF",
  "key1": "3MDw9Dm594gMPYo6gqD6rAjXcJvn2AWX8PHM3pEcKmpzscxUHGFuZhpWuCJ9GPxjzNpoLmnFRzQMM8oDVpwEyWoP",
  "key2": "59xU9gLr1rrL5y6DXEWeUhMyVvAF6aHeFQfDzRogFmusEyKKg2dWLQQgi1DnNtJW6JuxhEU8sNtrgPzSQen3FZ88",
  "key3": "2E2TZmDHfvKrm6ENGw5PrafJ6m1rRd8Vw3YBY2heUsZRMk61GtXw5jsRzbrzXMjqC7mk6329T5bNJaA6s9V2k4gi",
  "key4": "4i2e37QGCzM81NKubJgP81HebvqDPKwBkAuQFUnTuvJ6NMdaWzzCZQkDBxSvSUDY3r9ZXVm18vgX4HiUMBh3vf7R",
  "key5": "5qiKWSJA6kNCm4uKVVZniZ6F3LC1bjLX18Zh5ozM5MrLDXTX6PsQcuXZwyNeZLdhTVZG37cpAWssmGs4ddFBqfH2",
  "key6": "2GR74Wz8murU7Kp8u7iFKowqsSzJpJc5adUUrywkmGLYkj818gxxWu2tj52634rV8yXomEpwsP89f6FsFs9LewjE",
  "key7": "3BHBRVPHknKz2PSHi5MxNb9Dk4mtVynykPu4qYdLGd3pcFvUJDY19hwoCz9T2HRwdUf56dMddK3YgsJbMbq1M533",
  "key8": "28m2Rgra2mD1ib3md3W3AjrWpnYUUoNciQ7PaBzV7r7f7H8k1zNxPXtSUgGyfGK1DQF1vmeDii7ZG8CwdixkqwhJ",
  "key9": "Y5UuuNTyWkeFN8dzFtV3jqST22k4AYayksqHb68M2pNm8LrpprxyGziqC1dacxwYhLvN5hpkc6etFwQ1QMUkwe3",
  "key10": "27QekfGaRpjcy9XWMZnNWQ3ypqpRbhFJTcxoJ8ZMbthFDtMzDXeTP1osa7YtWo63jCNkmCfLoqnrwWmkSm7ckuzV",
  "key11": "3ERNZDAA2kh8nir9HJdf9F5YW1SjJqmw3umoMWpbUK5d4DtVyMEQ9mKZXDKnt1uWue3RtwcsW7zkwNDFBTARkDTw",
  "key12": "21fQGVzgvF2ZhZfwZJartKan8LKe6SNCDizh7xssbLRj61uM95Vr4xYKwQDNvY6EQErFiV8skqXAwPMRo6npzivn",
  "key13": "5h6YiT1bAfw5KszrLJCX5zACZNJXnUDw5Dg8pcdybBFkE4hLsMBw6KXwUTXZjg7TCPqoEZ4BQtY9krAxx1uq1AMy",
  "key14": "428qBuJ5spqZpSKNNuPuLQZruAuTjm55e9B6M1LW47SfRMRXNRTGwQNxFwwYifyAEzWpQgTC75xhbnVnDPXXqsvB",
  "key15": "2AjJXUyqP5N1bwEJYj7Z7nCumBJTmCzhJTadYTEm33jQGxpX1HnogPJuTttUCPpnb18k9bkrA2stk1FqFM2cbULA",
  "key16": "2hXPgJqw6a5TZPQUKqHxDCExXfAsza6XqYWQLBYggDzR3RWTuWgpQ2mnt1jJwiEzNgm9xM9pqQWGLJNphWajj5vW",
  "key17": "5V3WdWv45cSNjirYpSivMwqeGwEHvueXyjRsq3M3k5z1WBSi9r8ngr5UkvcmcCngxvHKRroMp2oA3kwFzDNFNUYW",
  "key18": "4AwbaFuyedjYFe3QL5gxvXsMyG8zQq83DMXsDJm4cheGqmCZuutkvnCLmN3CyuqVHywNhAQnFPjPrcACZ7o1o6jH",
  "key19": "66WfDUihY2yhtwcVqNjyJJELG6EGpJ74EUNFgf2Xy3ahzHDnpG1zG4PqQ9N33d6GQ6bavc4LqKHpSG4wSDEAt2qp",
  "key20": "2E6GXjCkuMc1nboYdTFshDFByuDYHk3t2Fw3kftotEAyw5uRUUUHkHHpGxZxcPovi7phtuJiBVWL67DCbWV2u1ri",
  "key21": "66B1qCkTbV7znQEtGSyEAefGypG3MMr9MqtdPndHUGcpjwqfqG1YYGfkxp1TCoUDFTvQxQnMTj3ZkctvxuW9itMM",
  "key22": "5sVFv6JCBm1ajQTHGmwNmDgLNrRGKw9twYWHSkW1bJbaPBNC9e3WoEFhAyK2sdyrWX7XSsoWQ5r34x4MRqHifE4N",
  "key23": "Qy5pXawshLnbcUzW9seyc9E3AtFTJBSiy6CgGxi4xpgfJZFAMFhsoXQK1AxLHSWCyEQF8s6un2xwfMQDhtPPXBy",
  "key24": "4BJHRUmuJbgp5oj7GStXc6GJhptmTqfDjZ2bc3wn3DbRD217vXpT9cgbzzyGw6fhfo52cqfAccPKJjTqi3bg3R4p",
  "key25": "5R7cxv3QECqh2BrBpqPguTCgZ2p4ugS13BDoBdND1o19wEb2RoTuK1gkoCZciExg1mMNKr8GaZzqUVdF3CAwvstM",
  "key26": "5tCE2ASmyhkM4QYJVUPMsoqVspKiBoiVaK4BLDwBNCLSUqahCs6cDrUU15VgdPsHVHZ2H7mP3Znbd8Gt74o7kQwD",
  "key27": "2XKNMmwT7vWQY8nrZ2gq1pKVzgjCtPzmEXcJ28BoGViALfvtTy9vvvNH5aquQpQDAX8YK8EJ7c53nLQm7PDmTS8k",
  "key28": "5rwtg81H4viX1tBcsb4f2JCn2hvrV468Z7P9QWa2kRXJHMSuShggrLTxV36oWKMtc4V9knoAcs4gzo9kddgSgCRy",
  "key29": "58guGdG8ewpTdxynV4nqRKKnHQZA5X55JUb2Q1BEiSnVdYSyN3FhNrcgug83Xg8T5DfFaRHetaqSySGZqSMQG8fL",
  "key30": "219XMuheN8PuQGEcWUQ1LoM5jtHKKr8ubE7LvUM62oiYtADs6FCw7VRLaFiKEqhjyTLtC1vnM58LijceaszcXB1c",
  "key31": "2PGygunETskP6f8TXaTiW8nNG1SXLabEn8HWrgYYc9BpS4c3ZKpJx4knZutALEkfVZG9XhPDp7pwHuQYDEfwCodC",
  "key32": "5MhgnUsTuUbtbaF26qrrF9xiifrjUw1AGZwxnSKw9FanSwShf3VH6EhyScWM8CViHMNqW6Sa4kjFv25g4z2SbVzW",
  "key33": "2wBqEwZTM4MRLmzZaH3383TUJGrDp7kzdXZj7TQS6TdEJA9dQbAGm7afkZsxBCy3FiV44p5L1GQd29HWaN6sX9xV",
  "key34": "4ZkW7w5R9ngSKB4odKQ5AjpckuC4LsVHG9xkQ6qbdghg8FREUE2CogF9dj1HtfzVjBxMHyL6Wn74BJXhRXYb91Dm",
  "key35": "59PoiAqaLmT4dWjmWSS8199NLUas1J3CdBzmPjxqEMzWHKMyLVRRpR7LAhBT8GPQP7a7rnpfpmJ5AXKGTnWPEMTr",
  "key36": "rBSWhAbDnrf4gCNVzqgNvFEDXGZ988xQt9E3fG2zvNoFEKxP35jkT3Yih7NRvukfeE7mFoyLDmJFDEp4jQ5joV6",
  "key37": "4GDfjTo21YiJ9M8RF6jDEjsucN29zZ6PJPgYDktw9EhB3JGJ5DMhF19Ec93aPUGyFdt2kF2bjewS6uA9mvV2p1Ky"
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
