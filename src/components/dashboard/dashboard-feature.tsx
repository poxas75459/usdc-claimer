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
    "2ZEW1s46JRNEfw4bERpH4ZYvD3XXbjfWQuWfpQm97qJ1aeZNtuR7fHQ6ZsGx7v2TxLsfdcu1ShLxGQxmRKN72Hmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FhzsTFZaNFx5fTh4FQ7DiauH4u81cQXQRc61sQzyEetNTQfVQcJzFjdeDjz8BWPDenYKX2ENDZcEkUmkPX9ftT2",
  "key1": "5EAxMDgGRp1SfM1AvWFqXQq2iR5KCSa48BCmsveHqT9Kt16dfJA24eNgH3jTH7pScqExN8L7LsswrGNzQow7vd9P",
  "key2": "34sWZk7hfWK8bgQhwEWorgdtgpsGK7M2F4a8EW9PRiXD3iPTG6QY4viurMe8rfTgcaSP1wsWHR4sRwA1FSfQVMdk",
  "key3": "5VPhFifJWKAYsyfLBaziuHUsfSAnVDFGB16Wq9bjSVS5qRrPzM68jfs2yDRXsPBMjFyZJWZZmhBcbNyPwbZJftWX",
  "key4": "3a9qPd6ogqjpywihzawiFqdiiSbEZmm6ttuieyFKX48TQW78TTwj8f1HPWGo2jsjPtpKyPWpf5xuTFcHxp44Mmf7",
  "key5": "5EfA3fNB9RhhLXvd2tG2tqvhBw36CXPwQBdUnjhRbBCG437PN5bSMnXLFie1JgkEdfL87tzzckqTay7RTsQq7QK4",
  "key6": "37EHR7hZbCDUStLDaSpnKXfKXXHguU8JpGyq3hKMdHE2fUoUZtrgGvEXGU92sAVZM2b1njAj6KQZM39BmV3bHhN2",
  "key7": "42B2YBAs1nGnVvK34SnrQd9wumVuZJvF4nrfoztAptBk971CFvKUifEeXn6swywR7yg1e3zC4tNUgyqYnxG79rLx",
  "key8": "5oUuiSSMcFNf4MqJApnYwBZkzuxhiKX3jtp8Pa3T9pEPbU7HZmSJqhg6kKPAaLCyD8XbN9b6EsKq9MbmVo7kXoUX",
  "key9": "5H2HPGV5drnzivJfYptJSEydoQaUvTVENuTMayL7qdMwYjT6SR1djjXnSMZ3wXxQEoQNvTGwuWqprm4LrhNihgMN",
  "key10": "4Cvjkwf8fQTdvQnVxteBv9ahwjX3Gdw4g5LcpRtNXBshBGX2bpqo3ZSio3wVNgDwTb87Az6ZLDw7X6MRz1T3Atp9",
  "key11": "3GuhywR6eCdxT3sBv2wUKuZjFf75edgrm64QdTj6FAnpKvESTvTHRmyvZMBXYszvRP8p6dd24dRwJEu3fyXovHQP",
  "key12": "EiEQWoE92pEUYrQdN3ieTde6aHfs7Z72fyegQjCniJUtqLHf7yG5PsB8snWa43w2P1onjThfHBYRQtfJQH624FX",
  "key13": "J3gbr6Xc2sxvGzn71LxNdDpRLtEv5ZBDETsfVaA6KRZksWnLcSwbVxDf5hM8qUYhWvLBDduoBStTCbzsdE339m5",
  "key14": "3fqWoVydGb9AowNetmXKpG1U3bhPxELoaQLvjtDbm2nfWop69oJ6gFRJoPGJ5YGRMgXUMdih1QzsiVctEHBEArw3",
  "key15": "48gLfzmY9LZfASsJ6kkgn2qXWWnJM1hxEZCzP14VwubnztpJ97jzK76qCn9pEHbUURfjodyN4AFiou1fz41FEDMm",
  "key16": "4sWkha66AzSBxh4fYGp3gsukkKQnhecHu9tu69CxP8T4vYScKwfbMcfUoEwM9qeswh6cAbkTw4cnUYrCCuSNvJkU",
  "key17": "4QXjWNMc9An5x3MnMnLnoUKGruR4G72QXKA7Ck4cXzPs6733cFmwPvxdrJoqu8yzAtqSSvkRMsYZqkV2hTSoGfe9",
  "key18": "3SZttFRqB9EG7tXGfZTUFnB5rwTMHsjeAaaxov4gbPHxhFjhcTnNBMQavg6fpGn8qRwkXAoXFfgWYEojo2jVZFvr",
  "key19": "2nPsLJJGjzsbUAT3pF1htHJuxkEoj4iTc2fHYE7w1DBGTWyMQ7dWHjvmqjyvD2uUVAtKfskcEiSvWDMsV3dgW3ci",
  "key20": "2ztConjgdumJ92iLsrMGhQE5V9QBJdoRzrDnxmtnxXmbmKCtPFB8eZLnzmKiWJNeSx4Y3Ryj8Nf9fz2NrtYMzFuC",
  "key21": "3Du8na2gaYWV2KAPv2f8YYGmATDWL53gMB5FsAu3Povv6q6DuPTkytk9Aznj4tnR9dsT5quTz7pdh9s954EMQwPG",
  "key22": "455N62QdnnniuQy8CdBLgo5eLJGT1phkHjzQL1BZLiprBxZrWgDgcm5wEDxcyC93iGLVh62R484ESM3m2y29gWHL",
  "key23": "H1D6AnwbD4fPgMNYnz948U4ixew8iMih3RW9b8TCnSxeb9wD32u553t9osTtrTqDyYK7T7w9zzKuaT2QhHwQDtz",
  "key24": "2zNi332HuvDZUvYdF8dCfo4nAk8xnVLqpLqdikrkRc3E8nZkyjkQsXmeuRBtkH79EwKmrtTpAhpvgNEzxvKFEPjq",
  "key25": "4puticfjqVvj2Wq6KUM6owHdHUwsSGr4hMQvjqXMW9Y4Pf4VE6AkMgwKYeTSopNimXknNiFLRhQfwJd8dE4fnzFd",
  "key26": "5w6ARPy9FNta5pbESie8RA6Mu3XehEbEDnhsm7HPAofqZy4aoaHnkmc7RiLRRUJnVPu6YQv12LCTZ1mAVnp3J8RW",
  "key27": "4oP94XRVuwwffzS4fTMNRnkh3xhrhoXvgDn4Z7U1nR5fuhy1UbusUDofQdHwoyEv8MaCz7Y2YbeUsxRKymengcsD",
  "key28": "3DXEJVgqjqmAWTJ4ezHJvsh2856JvP4qum2zgCP3ZcJoi2uhgGdtoVqHTzq2ywpf3daQz7u7wE6HQvAWNJ3G4k38",
  "key29": "5mUxrMuVFrKQSXvk3rvvA9mj3R9GEQp2vadSjNoNU5kFLrMrjrhNxSgPbAUHmWthiLCsxotrhXE1rf38twQoV3zG",
  "key30": "25fYZk2kxZkkj3ced1rPFttiU1qb2dC14piWCUQEs6ek3MmG4xYqXZ2ZFvZuL7nTryq3C1QMJ43aGF32GiPkmK1U",
  "key31": "4rhcuCtEehdz9RQ58Q2hfGns8KUfTdHgW6qCeMtn8t1xkHrRErKJPiHvqg35L4v1q9ufDxQDrPeaCgH5BCQ9iYG6",
  "key32": "3crTvvydmYDwQ9UtbdZoYFNaobzg9pnpqnjaLmXPLnyjfG3AdiPDFStKfmpVmHSiKQ3i53iM8vnFUDcQ661zTKS2",
  "key33": "4QJQNm1yjC5q6g3XmdSVGynn9z8vbNNjwAtyR3x2xYDjeEsU6CTQBt1cs7PvDDRocGYvy7dT67hQwvAM7VEQP1WC",
  "key34": "5Zk4Y2tvc3uZce1ooXnEtRuk3QdKSRbkdyMWS246gQAqA5z4hbUtcjU2Bm1M8czWAX2MxBxaRR7ykxvwGbSz868H",
  "key35": "3JigsLoFSyz7oZxAopuqMBo2UeB5yS7HUbmSsXk16Lh4S2G9Dz1Ppc5EYqxMoFwanm4VVk59x1yvcUbTvfhjFWVe",
  "key36": "31QrBNh85ULUEpTyqqqvjrCKAJ6SnHT6m29AjAQaVkgKj7Hv3VEpMaXb3ayrHr3CtVbp2o36pBo8x1Jn4DtaNLaM",
  "key37": "4yb9XnLwUKfwyLGCeCTwe7m1CSyhu3Axa17vprp77UVNiEFt1L3SDHqoimhp7W8UJhjG2RexWVATijYdQdqtehc",
  "key38": "3ztwobqhQAFYQDYBH2rMx4kVXkrbdtnWp5PfcQ8eJix6KPQniuVguwMjn9AuUYXA37F7pfQUbVX5bCp9jT77bJpi",
  "key39": "2e5vCh4EEsRm16KHM38GKp8q1ZuYTi2kjcpCaomB4honMk1s65mnwhncfEEyhVJABf4SSgZz4yz1nRG7JCxkCYTy",
  "key40": "2qQhyC7j7Y1SizJejmdrmjs1QPoBQpHoTTattH4h2Tqszvj3zV1dCAhB4TqqgkJB8oGSU3NuemPE3m7bnHfEkn3s",
  "key41": "4Dr4kgoW93e2pkwT8FaLEABiUc1YN9UjB64zCvMjkhA1s14FRgciJMcYfXXrFXw7S43ucxyV2ZyAmm5SBjsYXQbY",
  "key42": "5k8ssyZDzNR6TCp4vweYoCKfmgd1FCS7PpC1ibN1VtxNgqwoQCuFPRT8qckrGJnRrgzCeHMAb5pip56LSV59T5Me",
  "key43": "3ihc8s5tkiHVcyD4P9v3QMG92dB2BMZgyRjVc9ueTL8BQM75BYSr4DmJDRRbPUZN9EkEnPas5P4cmQU9gohQ2h4N"
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
