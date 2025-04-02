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
    "2TKSCA7h2FVFhGyFkVvDjFM5SHPTwspnxRgEpNoEkF4eTJ28jUqNb2Kg4DXrrjzKteECjrLUxsnzhP6uyYjahktd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VJsWf82BeiFydJw2rH2s36LdKAJbHAaz6j7hULezpNwT52HAchTdYxi8LBHNT9dCR4daDbwdTnCFoVMWVd3bwLY",
  "key1": "4TddNP8SdbnczVYcu62jgQrjdVPK3PKNxTzcutEjoPgzo5SJgSSsUCgLNNrgrZid6dx41n2JEdNjLreeAnzAcPkk",
  "key2": "5y5xQCxvAWqW3dmU6SvvVbinyiPhy3tA3CRuv2XVuPw3DDzc3jGqY1PjmXSiHT3aWcUz1Xn49kuGvtEvppWUiHKf",
  "key3": "qppGjaZx4ft1nqAFjj1of2XPDuDZrpMTcDSwnkdG6byKPhgV1nT4khUCEWbG7eSAAfpZVB98cinc4jUTHACaQrh",
  "key4": "2DiVcvXB2QwK2pYWViAs5E3qe7uYo4ZT2mA12EygaSd4qyZbyE44LYXLfWn2gqaZ4jXKAmZ8CYpYX7f3GhimBTfQ",
  "key5": "5EPhhVBFAPCRtQypNnx5cZbJ1tdjx2Miod8Xu9yvP22pijeyiB1FTwhZM3Qxn92Usz7n8vWVpffFnF4pK8D8Va6U",
  "key6": "pB43k34m5QzEF2TXBL9d6TianKfjePaB49nNWUQWruBE7NDyp5PKQVVBR1c6rNmVSpR2L35y4pAFCvEjJBQob4S",
  "key7": "2PZdmDLqLGZzYvXoobzmBzy6m6dnQ4r1BJBg1VgpQH8a4S8uRuXN4t2eNM98ypa9Y8JSuWnzhBkpS2B2zhRzfaEU",
  "key8": "4LQ8C5PTfV6UmmkAuWPnC7XbrbEUKHMue83qiL7yetGroSVHF8kUe3KVjg88qBuxZSp1xjKEG83kEFxF4ufUz7mC",
  "key9": "2rSq8tqgs1Usppf7CQww6YNuJADgGHSCRjmbb6Z44bXG8JkefzyHCNq6y1yPzdUhBetC1bZX87AvgYoAK6u2MoAR",
  "key10": "5CWxCJ6fDQzN7ijZnpDEKEWmSoaCSxQBiYY4qGPt1pavi4KJu8k7j9SqdcxEkRTsW9LcpfaBmFJ181XLSkY6NfU2",
  "key11": "41B5VZXh6uKv6zKyHzY6DEVzX8KVDk2anmaXCkG1hWHfU9bHpKCD8mRubfBHorAkAJ8cDPLvdZypWHfmPR5AEfBS",
  "key12": "3E5qiyQQnnp9VRfgawWkxzwfB7b5ec6N2p4MQZjq5Z5SAzDYVzPBwYBWt7akj7xKRXjUhoEFFG7jDp7mHoDtdnP4",
  "key13": "2n2ZfGyELR5oHe8EoQhd8mfNKjBFyGVwXcT9wgVUFn5ibQdLUhjwRrxargd4XUammvxN2q2BBY9FAANfJgg4ykNa",
  "key14": "28vCCcbrVeWo4Zt45rqyFTWDzpMcyLqxdztAaJQPCjFpQAxqp5WRyJzy1znnDKxrXY4AAuLffaTjEtHwZAjBfLV2",
  "key15": "38ZCKKf44wmK22EePwbaQjyjtKH9583qQimmxkBLHNZ1JtM7EYP5Y8ZD17zZXsx9H3YQZvGBXKmA3v7k8qkFsAfh",
  "key16": "ya9xvWsE71RuhFwW5XmEzUER5dxfDrUeXczBSJ1LMtJAYGSJzapf8pFZaUD6iWHMAEPwEeE52jY3BEwXnxtUWEb",
  "key17": "5QJhgcPQdNQ1bCx1mvomjfHJarxipS31jMPUqJFVq7pCbMNk3cBkXssnPudNUQ3WmJo4NAocjrAVvxVTeXS46z5H",
  "key18": "5pFVdBpWYvCfUk8mjXLSJrCjoSrMTKSJ4di6qDZ2oWJsLNNWVfbnQxRfa2RL12nXfhaWAvE82bttmP87yZzotQQR",
  "key19": "tay2zqqfENPJtmd6fnr1si4v5Uhm9S7zxNEsadDJosj8TPVJ7CyTHeHthxawxySCZYSR85npY6KEttx5SZ7hxND",
  "key20": "Duqq4W6unqeLzMwfK8qk2sDghNnDAQqT6ELe9irhUKW1dV5gcYtMsjow1Zpob4tAAZzfoJ5p6mKtX3KGRpVEFfP",
  "key21": "4Nwvos1sFULRnZoCFCe4MLs56ntGTKk4RYEvK8gZjk2WV6cd593bbj59gm3gtAqebUHmci74811XLtuQHQeTLbZQ",
  "key22": "6t4qPqdRYnYhr721xHzm4a8ovJoYGo25itMiYT3meHm1TuXgbU766XCRKB6ha7u3Pm1hGrPvZzkXW3jRL3Fn4Bn",
  "key23": "3uX16jHPrF5xMNfwSJiKLs8Ja3TkroFMzvpMAqS9thF63akzFxWRMYLRweiQmGJuiuRNsNDVSADs3H74ghH7SevZ",
  "key24": "5uL4y6h6taiwFWTGHUZaAxAdgpFyiJXmrFqs51doomnQXyXGPHtirg89cG3ggnMMVUprqnFGMGzmRBxvc5j9iVYz",
  "key25": "2qNgv8tHwn4kcCjx9Ut8Q3ZXaKPiEUyEPj7LfhULqdU5pCoYgz1zbQ14yfmP43hDCDt9ZUN6DaBdyypSfVvNLCtf",
  "key26": "2oBgwjHHc5z6fSbD2bADayrgkXaVZWmZGhAKARjFhG2328BnH4ReRM4wsUjzx6krr92u5gP1RRrVsjPej3W3fXHm",
  "key27": "3Zn8riirzuh46CC9gz5CiGyw6VitnxuYBndR4oyXGskYbpHu8orYSm6CjyEMhXxC3iLVzcAq62TJyrWM9bMgMvL8",
  "key28": "5e3LDD4XpmNTDqKJwnyEhf8Njm5nsA9onzMXViAyXBzKiG6owJYnKK8hQNPgoTZwqNbiehXUXeVGdEYhviQU7mZk",
  "key29": "2rLYJsrmZCaxUrcad1mSvoRz5wyRyHCjCE1XfyfvxaDy6YcQDyqew69vEVXFuarcCiS3gQkqSvrpBAZGe4RhGJUB",
  "key30": "AzbBR74JGcwrcUFg9o9XyXY1PjoaHJTvBudjqCwgJkyx9HptmAaGUUtnXJ4vzXdh67KMcu5FJHowUbQRgh4UsXJ",
  "key31": "brgMF9eV4QZMbeFsazSLgroGfZb5mWZwFHML3qKidFQmd87efuiUps13asp6WLQ4fPgtrTbRzhwHTzpsXp7wxd2",
  "key32": "SimxEgTh7MfZeqwLfGG4tnuxzk5y62Ecza3nPqVD35jrma4r51ve3TCDigZak4CoW4uQZH1vz8hS4Bs8BT3iKuN",
  "key33": "w142rEDzK3wmKZ7569QghyPoCyXkxT4cozuSrXnmwavVsqNCZg7bFTKhm4HK1qhaUXzvyR2Efn7SARB74rmL1st",
  "key34": "5kDrZnDrFs9ZYtzf8cysQ453nQXEzq53y5cLSxjAiTEgSMUMKvDyhvdzeKprLsAU3sfakftpguSSEH41vfZ3puRu",
  "key35": "2PcnvbZYCNfoyhQAoQVy42oGTZ3ozwpVJWqkAfrTmumMN5y2K2K9Q2JnyqZEJzTmMUxLwou89ZKpvYfci6sFynZk",
  "key36": "2ERd8uw6imS2LFGjrjWWX8zppmq5dBnu9UTSGBygUwhJJJj7yhkfCBrmz7DpshUgFn5Z8tRwsgRK2JnTpJ9KAC91",
  "key37": "44h8an2j7bjPGXvp5wCrpsuZ3CSs9LpsSjYZc7XiAyw5sWEkt2GAzX66i6Fm9diUwELdnQUnNauwRnLqL8GYboLe",
  "key38": "3Poyh9rqvRj3qmCMRcDMugfskqtGCCN818rX53qviDpHmiSkex9MbkWxgaXsCkVXN3rcmr4V5PjfxEa49gjjsASW",
  "key39": "29WWZwTowrwYPQGz4BeQaaPF4sjPgJN4NRTVobLsQ4UbEhcJ9DEZA6ysn3woeXScEYGw1MjQRuP3XceUo4Rcv7ej",
  "key40": "q9uJPnvoASXXnhtgJRpmBJSTtjB4e3bpehHFnLjfyjVPuL9S1gNno6E29WDMnePT8wDpuJmjPzZnbqURMJNw8uT",
  "key41": "36cRAXTnhmFKv6yz5zQMva7FCnap548wPZt8zJB8QuqsoWKEHuuDPPPVHKd1K4tFAbhGXEL2v58EYaPpvmPi6cu",
  "key42": "4R41papqpRGKgd1rGesN8HA3fTNDufzFpLfFjSfHTfuVcymByd3nfFNtrcQkbVudf9TdRT6RwiH3PPiXYVt8WMvm",
  "key43": "YotkuhF98KFzGLtdMrfPLGSkwbhSPT92hAbJqQv8Xpiz8ZRR7j8jCc7hHi2hy7RyW6GyPxHWiWTF97EgcLtFdBi",
  "key44": "3S3dUUmUCY6ZUJhvYejJCNYraVwr4UFCPixSXyKAFFeDpVNqEt2z2dL9NzhW8XJ47J2KZis4uwxQxTMcggPmNr8s",
  "key45": "2gdv5A8ufuyREiHNxBpRfPXqHF1j4iEZ5FdD6ddhXSZ2ZK6JdWTiyhwH2JFKvRST2kLXEFu3HrZdwjU9gTUc6Krd",
  "key46": "27mLVrUbxNuM7qhc9DskRC1Zwxk95pcmcZxFkzGfvCEhzYvi5ESE87Coy9YEocnmbzX6CDNUdKgWDq3btpFWdRa3",
  "key47": "42TpyyStzpcG54AbjWcs65QLHhn3x4PH7Jd8XB4vC31ygg4sYuNveAU4yqEV7dQXGfX5U2GcjHqpcxXPLArTtvAJ",
  "key48": "3RsLY2aAyHQDxg7a4Ex8ZkU9hcRVoAG3VpATb2Kq8TykBAUZ8k6yqg6r2rWbSPnRdnaP6RwJpkvECSNsAns2kRGj",
  "key49": "2Z1heQQJJCVFGatX2sZWncKm9HPa7jT9eHx2Gp3WvHxGNnT7WXcdvdbYKrdGadwNGiWBmnC3XJMRmcq7kCqzei8i"
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
