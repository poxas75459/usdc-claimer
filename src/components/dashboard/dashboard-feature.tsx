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
    "buivoL7zY9Zgd8BPpdCZC2WuFztM4SK3UPXyPinKuD3vrAAnijgf829M1cTDQwt89XLuu2Z9mLdKQqEAz1Jtg7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zeGBN8Rt5dCr8ChBDwbcBmuFWAcdmxbwWhWrDZL6FtPWGUYzcYD93BmwK87tTu2mpEG5ssGaGEn4e1WZQnDZYo",
  "key1": "5BQXx8TBgaDV4SjeS1fTc4RiF2xH8yMZGSoL3JyDXaD7d6NBffLjcyjP1zRH2TwVuCbMQutttjfWRtpTr8RgLqsv",
  "key2": "5RpKqHJsuhqtYrLVfprTVgZknGaPaaVPe3boWSsUSzjKbizzbCjFLYL2d4QfPPYnZRR32zgv4m8vpsZwSgeNgyrF",
  "key3": "2P6XkeBXVZzoWmyRDyxXLu7xwLKPzFun5JMXAGdf8FAntR1DMYvkwf8GhgcSzzMp2ZUFSVSEfPAhpxqqw8tfFeK9",
  "key4": "2jLdNFFikNVCJz5w7qLiJEMkB7bRjDdkzBVrNuUYPQPvxg3FsJCzzifyRn3waQRhDdSwUo97DdmkqWUs3FmjqrXy",
  "key5": "R4wM5AM27EogeFJ8F24xcv4DrUuBb9xdCTBWWxG4Jc5BndwMSdib43DvGRcC8HC4oh8FBDBqgPTXKJr1D7eU8Pr",
  "key6": "2KkPE2nyr4pGMgSLgtTMzDJHta2BfPSVr5hXuRYbSCLVrdFrNwdtqVHvEZzjQ5fngWSyq9mHHV5HBJYwu4bUVQcF",
  "key7": "5u9WyX7Nxw9EZeKQPWmphRLbu6h94Jawk5sa7zbLeqBmpEFBcXuM2JXrTYuJ43Dqz51pREptSbbiMzKB2SF2yFGF",
  "key8": "5vRALLtVo64171oLQW8vTBj9MedUxf5Ddunb3ZCtQJKPfeggEAUSCzRbGWrvFsGnyZyaMy5swFnT44jAhMTsmCUE",
  "key9": "37JYVqCfZ8akhwXriXEsiCdgRtuLP658tdrb5hn2jUzXPJNB4psxfno9Gp4dBy7KyyFDc3kcmxqDRZmrKNEdZsZo",
  "key10": "39GFBP7dEcPCRTZKJL1i4KQNa5wnbA3qxEeWhDQySLhajfMukLCEcHySd6agtQoNWwJbfAyC1mwPxtgeeSC4wu3i",
  "key11": "3tBXoBpXs4ktiknQUKntT1ppJAFuqyNwJE9U7CPmFbTXwkmRUGFQ5T8nGjir4oFqBG4ZNUVBqLZxVbjJG7pptZKf",
  "key12": "2ABC7mVwE6LtqD8iQ3fvyiW8FmvFisemHK9rA8fW8AkBMFsmx2BL3MVJA5QwHJxtKWijCPcL4XDdbrVGZokvWqdG",
  "key13": "3suwAEmbkyfuy4asdmwZS7BJMAfsB38Ldoed72bGC8wVCvJH8Nq8cudZWwYB8pAwebgRaeBpzk6cJBzMy9CK7aPp",
  "key14": "T5abW3V5sf4PBYiPsZwtA7wb2DqEgQ1SNuQDmWxyrXDXTu6CReiJ2tMCfxE1YVnXk7dDyAajAiNMjhodvaS8rqR",
  "key15": "3TTZMgRSqzzYagrFHyFUVLqLtcpw9388cu2YMCgMyaN93ZNTSoz2dj33KkNkkQis5nrUd7T7W9gjRKjs78afu7ZE",
  "key16": "2SERYao31rHu33GdhFH5deYSPE5aTZY4NqdDHyjWUGKfcmV2cDUCFvyaPiPQbmKkjEKMgWM7f1QVZN2JAG5JwG4P",
  "key17": "XdEvsGoo2vQ6MRSPwz9ZCbjVyKpXMMFcb1wFo9boDUhPSDJvRcCiXfY6jUC3ioJTQpJwbXNiKtqAqYvtoGfbMGF",
  "key18": "4uPonqaQR2rSWgi6szHgUiUW3w1y6u3StqNwq2aGHf8wyvfPwbtsiYNSDFZWQHzHGW69k9YNsvjxeDrGCLEgSVpt",
  "key19": "672bSwPSbNZ93g3fCRCjDddzxMJhFHS9rk7M4yQiY5yDwyCCAJQQdmSZ53CV1dWttxC8zF54eGhZkcBBWem86vEt",
  "key20": "3YKNcdQCTh2SbM7LzVqFDz6DrC28mBxqAoB2NPGnMth18yzV5aqpMX7hXGRk3fMkTc49Gp7u7jhNtedCxuG5wQzE",
  "key21": "21KH6qQGKGWzsb1re4SvKEK7ixdtti544E9d5Y8TYr9TLsjTxEKfhgWN4eAwky8rfepaRfiZrhtvSqJWoNDTsKBx",
  "key22": "59TgR9FpEuVJRhktUnqjo8GsgoTW1vS8j1C7GgPTeEX25ninitdBrHFmv55Z1aWC9tPp6gDS1zLm5ANHWsiHF34",
  "key23": "4riGTaG6TPfTDNWXTNo2QYesHmAnUZJpm7APAZG4LBWLmuCezHkeZ6TsSCCajJW59q4SqxaMNmdamxnsGA3UseUY",
  "key24": "2UGdhZckGde8gh6xXByWRDFuXdz3N2bTqyvmLhjCp5Liw6hQB4mwHJZGzcwHJCVV2ve5vRYQxNUPfntvTLe1MbaX",
  "key25": "2FcZWeh68VhNwDpUEMNMvND7baDcVLWuB1LPBxvUP4yK7WeagWLFe2cRAvTvHPpokvHvWUhPqxUHdapBdw1TuCi6",
  "key26": "37Ybv3xLZx53P1ZUBSSDGPnoMFvpH5znKLcUxrQ1bvk78Z92vme8j6MHp57FTm18eKEjmN1doAEoYVceBz3yAVaY",
  "key27": "2eAV1nc8UDBL8vdmME3SjePFM8PhbqEPSksu2e9cyHTjb7DLsWJUMijZmLgmBWyJPHAiVRYojTv5UJSzox63tPSk",
  "key28": "3tR5M9Stx8NrZx9uxuzvBpMTx3HMQdrMLSra88HH5aHsCL2a7re5WUBoHhMzc98MWLd4kzRYhYFLGb1n91B6u5xE",
  "key29": "3v2oyRHAPDVDDkoxwkNRmaTFqarAdsk5FKqqeWq57jCJeVwQt1eQze41RKB34uRyLfkUxkR3FQCirZNswB2xgc8s",
  "key30": "5aUmdYJn7Qf8TH49ajVsdvBfkU5rBrbzefWVapAdqqH1XQXZuKFFNJtZhEmZuMM1jcCH65fRcc52uUw4s543yVDE",
  "key31": "2vH44EWnVVw1eqD6P8DTmuzyMYcfMVrAeMPgtezZXaeErP9zyWM4398QDJPFmYnemJc4i5vP5z5pbgnZPBsHnSjB",
  "key32": "GCAatk3cfjP5ceeHbTDxbLe83Tr3Z5tdFzsnYB5RMjGuL1giaD8vH7Q1dwmaf7Wz3zAtjRzx6YQnhveHX5Zm9iD",
  "key33": "4ETdwFJHBUDnExCraYeWyXzi1RQTd5CocGNQZSonz95D1ZXsC5yPrRXFxNWdi1qPzvDctBiaHRjv8QMHuMT4HSKN",
  "key34": "ZTS1jJ6GfFQ9RtiuxR3ryy3MWYiFXUpgsBS3npQEwmncd8vkX3pmvNtPjHidVGTtC7wYQSfSAcf6e9GV36aSiMe",
  "key35": "JLrJnGGTdVtBp9bRiLtYecYWjVFGk9BEPA89GnZQ97VpoUgrZiJvS6Wh75DGiJ8DDcBpyzgnecgyn3ALu93MeBt",
  "key36": "4vdPUABrZpJJhszt1jf9XVy2eKGNb3oAquZQ4Hz2LwH4VMx3AmqXmTk5qLEMUMNHEZoBwwSKQ4yYQDsRKrhFFtw",
  "key37": "3YuMaHwfF3xRgfZpwULwA17DZbJ9Y5hEkToaN4Hgt5kXbaDkdvSKS8DpADaQWivGsyGwRo4ZojTWLUDR8fiTB4yt",
  "key38": "4LzCibgfpURx5b3yVeqZB7Ev1YfBu4toeN9TxPW1qGJVX4drRLDCLZNFmVZ7P9RSVQ3RHHpoyCE9ReSFd86BigEb"
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
