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
    "4bKePMaTQqksmHnZAmTqbWVhkSDumB4eUUbrY63N8bwErARRxFSuQVc51eo6H1sfyxb7oTokggsDCyk3bDCzoxez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v6Bo8EaKHDQbqozg1FgSUZVai6MfK2SP5QivVvHxJmVgcmp1B1vdTJnHC1MqxciWboZz4G3rV7kacohQX3A2Arx",
  "key1": "4UYLyW1nkyz4xAgypEzsub6krjPaedt8nkWBrrmsi7W2T1PFuFaRioWG1ZNFqwqRnppLHruZYVgczBKe57aDMXN1",
  "key2": "v1UGaXUJepdbtbzpPWEQgSSXcNdLrYXzd1wMC598WjMaJmDTYEcigeWuvnzjiE7hWvkkUjbdTGqRxZz4izicZQR",
  "key3": "4353vhjB9hJ9p5o8RAtiF1ZCHBJZsp2QYxBwXhrjBVHu1hRrYVXy8rk16e8YZ8mtXJE3fb9E1PoALzZda4UiRa1b",
  "key4": "4YZWF2e14T8gAFpG5AT3kf8DJprpDZQYUJiviGbjk9SFsMwsX6PHoJxKDFNFxKTXsBzouUJPGA9oXw7tKJt2Juav",
  "key5": "YquqZLSjfKR81ngACk5QobyRsV7NAC1ozncSVcbu3wUdQLSDGyFmqRd6EnZx4g2VETStYU3RamuTn22F2QdJNkB",
  "key6": "2HQaHdQSW4w9dvRZpVuKeNu4bCUSwqfgYxCv3Fo2z1WhpK2B3GtmX2jBo8VqmD5TWxMKBAkXU3Eb3fEtZ2KCvccr",
  "key7": "3QwVrxPqFf6Spt2tFi4Ev2gZ6pjpdyxFcCD9aTx7WXprq6KQWkae1FQ59orkRr7f5mw58bzHSPZFCtzkPc6QwuzF",
  "key8": "4xhsa8LZEv4BAqXaTnXSHj5y6UGxEuP9XKbraYwhwF4KH56uAUJvfwKsDPkH9iRKdKE2yeT8kphRbAYw9m8jGZer",
  "key9": "3bzvXeDTez3cR1NAXzsi3rt7AN9PHkHk28bxYdbmEkN6mtgccTSsrDDic97UdgyecyoZkVSGto47H4yjRBK8wipo",
  "key10": "uAJDtKNmWWgCGH2KAXp71wcgcbgczdzTg7QSyc3rq1oNQujwStEkfR8kmF7hPTZnCoqgLz2BHB2ErasbLbhUbSq",
  "key11": "E8MoepUsd9Vwv5LwhKbYv3uqbi54FaZGEtnHdnJVausdUFbUzZageN5vv33zfBrd7rkuqUV4ND7BsDZeXzrCNde",
  "key12": "5DHvBuvyeLMefJbto2hizcTHXrCKh3DwRHdVbHmBXfNk1VMuWYxbaZBd1wuFjgnQZK7m9thmKxHpYJU1zUqzJU5W",
  "key13": "rM56Kmze6zWGaYrJUEoDbArd9DFpwQUPKJZqFjVANMSpirtBnf66by11bL5My6KsDh699JmX6ZfTSnQ12bZBarf",
  "key14": "2PV3ub12FWPcH8qWUXER7jYDwL7z97mJufXEhtCgpyvrPfNRaeJu3DcdyssJQstG9EQg4WuTabrVmWmz2xo88QcE",
  "key15": "5mnwgQpnyyBsVQBXPG1FphbFDYtjMVZLpj1iawD1s1up9tWsanuUagUe5Rg9SFY7oJxos16ngVo52iUw7CJf43HY",
  "key16": "2P15nLFtYM28Aipee2tUEKi4NC9Eu5qfERBRYUtPYNfpzLmk9aMmeSTXLwQHXqb3Gc8PWKm3dnyNinJYAaL5sYT9",
  "key17": "2d22LNeMXp1GHopVU8ssgS8n2BZo2JYuRJ79fcXPM5oYDdU6x28fsMW3W8VHNaksgLKrWd8yQfyKreT3RJJTmyVP",
  "key18": "4yhCNuVSuMv1VNKuPkBMtNpfnndxEBDceZVijSPR1BiB6PMLiD41A8pUA1kKnbPftjRCfEmtUTut1aUg8CG4h5Vz",
  "key19": "4rTM7XB6HxVvUsfjs344Qm5Fizt9L45qeGo2zNH7sxH9Xy5ZzgYNH8ncwMTSMk9ubv8C4VjkiXZXq9Qhiios9wq4",
  "key20": "dXdpgBKxJRfgFwWueMAGQ6SRWx7WDp9Wk37b7tvafs5CxnWAZ4p7poN8B9j4e5NNAxux7wox6tKHukcQz8ueYde",
  "key21": "4QsDivjYF96GDM3ykTnLqe4PRUfRgXHjzJzqrP8x84FRY1McvVdcfmFNsS1BzswDftR1TEuUjkVZ2nAu2ZdPgGr8",
  "key22": "5nPiwGQBnXoqbDNpFuVWjx5QwppBPFBTw61FiimyaZHaQ1RTAXyjhX3cPZpAG6FcmPEsvz93X8GGzsspZda3Bqxo",
  "key23": "rvmdebMuszaL3n76W2vBF7XV8chZCybTdxWtuih7iZT6c3yPicPkVbGzVPrEcaqVTeR52RTmrwMEsuBdeUD2zfo",
  "key24": "517HS6AGgmn6gBw2M5L1krg9D55sFU66jtLxHN2iBzjUurtLpdyM4DbdVHpH1pH7eTF7whQ36D3d7rCUqZZsGdoT",
  "key25": "4XSx5rdxwcot8kuSRb3prrRyWnvzJDYFREw4CuuFxiAuULm9NJ3znCqyy7LRwh5UTRowuWqCvSXDTFwpDGxKiM4n",
  "key26": "igYtt7x9riawgQQ2TNcJTbNrLQLAkprnpuGJcU96fjk44q65mrRxuwUiHeRCWytmdBbSSrP4rXW1DVZRX9wf1hh",
  "key27": "A3oF31AYLZ3AsB9tgtHNQKcys81pcFcbGqqwNe9ewbHPQzcydUmKkZZakXEyxgDdENBSvMrmYhWyPHABSj3khSD",
  "key28": "2MAWs4ZkvTSMRurHV7wvU9YVeUzU3e26Gx6uqqXpuCxDhxWM1AE1MruR1ZcCqYkkHA8r4D5BvrCN6QV623uJMnpp",
  "key29": "5eii8WKWXmtKJWYEo6dni942ksECYuGT3FDZWmNmTGVkf9H4z7o9GvacX5HzFBSuJnoKqyMS7JT4PU2AFkNLcTwz",
  "key30": "Y5JZkwdceMkUDfQ3A2CYWFTxr6txiPBbabNkg9Hki8Adh4mmpec8DWKtJ23GpQQNdT3WqkWZT4A42yxgikgQrL8",
  "key31": "kC5tfUdij6PcDD1Ft9pmHFTZGFNq7wN9DZMMPMGdSUBxWhudpcQyy5LBCuiVdyt3ntQpjZ3e1oiEbT562tStWCG",
  "key32": "6aDjcGTYf8pM9wqogG9LjmsCHw4xL2v2rhU4ojSjdofeaEWNLnm1ZTZ4zcJ3tiXpSwbktG74zD6YN6NZEVs9oRD",
  "key33": "3FwW6TkN6p3EqncADuynidqrKuqrTLrqV8y3WsLcFDfG7wBtM4U1p4Q4U94Wq6vWg92o3Jzh9FWqeMZQzw4bevh2",
  "key34": "3GrYvcddBT4kJFGVrQtbnZ4jjzaG9mZoCmoxqhLPikEjXdyyxjLJKN8dM1ZK8UmWaNmGJrAmh4PVPuSz7BJdqPbs",
  "key35": "cDR9kwYToyopMTRaMDE4yifTQ3uuuEUNYkHUzdhj5o7Bj1aYwzYWrEsZ9kBkowXTqz1dcQ6U6RoGsRV2Y1vNwVL",
  "key36": "4mq6kSFDw3ZVC2VvCU6CphrtFRgSEuhRniLn8RH7hbJneJc4awrRk9MYvyJUDVA6yMWGDdRu8p3ixpiamEBjgGY2",
  "key37": "3QXsGJd9GxvMjnJGsz5gFWd1RoRYgV9FwQv3jXv3CBuiD7GWEctJQCb9HEmo9duCbJmvK3HEnRMytz1dp9nqYxYZ",
  "key38": "2QNWwL4qDLWyHKKYp4ZsnZsfZ7f2H1jpjti1WQ38aS6fxuVCHSfpDkF3ZkTs2fcakpzQj3pHKj1U1ZH3b4J8q4yE",
  "key39": "51PwVpTTEtdrR9YDdBgQHAPZRx4WrVA6wSobickBWdgPcMUgREdxF4VTWPHPMfMVsQJnQrJjSB5zEbZugumicCYc",
  "key40": "47uesmBuwUkNJx1gt2iAxCdfew5GzNQA4iqcQXkQ8s9m95frEBWRqMc8dsoymnKKsRdTjFiu8cPv1TN2ALhbLAGj",
  "key41": "3jhRHsd9tjkbFMupSnNQFsEfnJcKmDsTmisAp2hZB7pcpj4Xn8GwjqG4fiXYjS6BDCFjMgxm7invyhyiheUEiERe",
  "key42": "5FAm48KPdo6cKyXbsD6sRbUuVvnSKQTLYLqRHfyhNLqHVUNBLi6BzKiJ4iWfbS7ho9kVQcRhvmX64GHUW2BFbxkq",
  "key43": "2FSu48RjpFsbUJ329QUMWrwpoV5UmCi4UebhYf3bwegPmnu6F9dSSLeS2P9ZmpfNrFVCRJa4Z8wjjm4h3G8Fk5Xm"
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
