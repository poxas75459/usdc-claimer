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
    "5vs5wrh1xUEmi1SVHhxmom5c5ufNQT9eDHak4rpTEykyCFTrS5LMLSrSV2UTaDf1qmoMeSt572f3zsJ1NbyswWVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BBp7F53zw3EjQWxAbe3YFsHWCu6XDFeWne4VwEt1sTxWdFHbW6dAy3WFdK6zEKSQJXvwoeKWvSfvnrWW4MNCHHY",
  "key1": "2uDdaNAj7ZWGtdidS2JAXje51FTnY332QTMwHbnGtJMUPKyCRoGNZyF99WRkxBRkjfzatMPRjmpvku1jdcTWTRmv",
  "key2": "GnYDSm9qxfEwefnoNMN43pjVeX1Fp3QH7tjrhky1utWW9EbUeAiTC3wRRtXEMFDwdKDPjiWqvuDLbtKNnLDVgtP",
  "key3": "27HF3cXJiCvcgGtqjiL6HsithXoon6pdNo9ey1NQ6atkzArPyR3PQBu6w4c2dMj4PFooHS1jpKzXfFfVgQqFqKAp",
  "key4": "3QgqQGbFfc31niV4xrt4QjrTFiPg1Ut7uJ7EEk4ycfbc1o1sYMdTNy3k316vxn1oAMEQfyDZR4Bpjm8jchZFCEF9",
  "key5": "3AZoB5C7UPHz4RcBoikvrAjJtQL63av1YQvAeujDXGuiCFb7qJ5Dpvg6jTYZCy3KwYQ5UUpcTYwamrPBDGowZ29N",
  "key6": "3mKzMQpNE84pBi75e4JwUQo2UMmyJJWPeKwrstcd6sjaAchmGNSwH1hRG6DzJAH1rrfU3srQxXzy6eTnt5nzwUhs",
  "key7": "3M4f8YdGLMzndcXBmxyKyGFEZLxQQKrgMFVcjeJp3L4fqGLC6NLjTeuqAVjuGBNTXKUqYBoW8D6WHMAqaJwt3PZe",
  "key8": "5njmEc7zRFp99zyde9pzYSHXdCZFaFCTzPqnfW2bmATGtCWXxNNKbsPQmAKGKk8hq7DyZiV476vBgmvfCDYeEkLD",
  "key9": "4WeHqfqb9np4AdqZMGVNKjn76Bjw7mDNeKhXnZSvB9K8seM2Rn3sF29eTj63aXya7SFmfo8mX9gtLZoVxg5Qvbm7",
  "key10": "4z2VUQNXCttByEgXdbBXQJuf4v17cXTCrCEk7Sw9Y57EcaeGucyrXvRi5g995FJzRq6LU3u8jiVCynkaXiJQodZS",
  "key11": "4ECMz8R5iLnpJ39zY7AjTaSa5DVTCqjmgrx649QzmvLaVNy2AWEqsV3gprk2Gcfh3e57qQSWqZgMifMDJQffCtAV",
  "key12": "3wTAxswjgiXEKWS7oNbVUjgw44Q8D1bKrjbhTzVajHb9ykx4SfHkYhG5qiGayiV7ixYRoyFmxry74WiTFLe8vRwJ",
  "key13": "4rQ75VqT5tRzPx288cLpBNAN1DFwGeubZg7hSC8cunWeFWDSXmLdwC8ehDCd6sg5eCr3DR7jWPfcnBTrEnMwsqgT",
  "key14": "4fzckFNrP7eHFtp5BhsHbt12n3sPkaqeiYF1tpm6fZ5jSncYBWNpz7D5V9sRHMCNuHs4EpFcPd72HGVKgYh6sWja",
  "key15": "KCKQ76ahENmZPbMZZK7f4DBRF1JCVCQPUDYGzVcVTCuPMw8YaHcNUXR6ybGPJa7bCSUqU8Zsjbt17XQktp2kQQn",
  "key16": "phRYPEgXGeGNUTnppdkuLxkcheXr6grVuDLjtCdP5M7wzhbX4UidCLyL2kxwCHgdsrXg4DztBWCGisd5fovKrrB",
  "key17": "3QnMHs6LR18GExRD8bYe3LGU4cqXTwLAYnY3w6jnfGgdNSQ3aHCVtLJFYovDPf5KWEQXS3wWnuw6eP34F3yNAaBm",
  "key18": "2s61yr5W1ubwzstsdZntgyMA56jvmiK9iueYDQn6NjuqN6EbVdqt38UEKf9jAh7nyP9N16g9guUQa4L7xexsNkL9",
  "key19": "5xmcreHBY7g75CRCpX8wc4DzfPH2WmBjNPJ9q7dTL1piCT7GQAotZ3JxfXyk74RveJZgPMYb4MqzmQ4ZeXBKCDv6",
  "key20": "r8Pi8PTZGSQhN54wpV1iKj6R44zEvrN7GF2WDsmHQqkqz5cQSwuqGg9uFA5DygzWVfEw1CRCRFrvVU6Zbogs2ky",
  "key21": "33ogbJ7v6DXvjDcqCE7q4WFFCoFFwW6T4qi3xhwVUViMfM337ihJzpD9ZGnGeW1NAtMNmMzadCn8HYj7BxWWmxbE",
  "key22": "4AwCj1H1oAL9XdSSw4KhtKfj7zEmHaR6XseUHocURYXbubmA144TKf8RyjTzRsm8vvUmRwEaymj62eYhoHLFL1zh",
  "key23": "4YYzsbnhK3xnu5pUPQXrEGco4fHdGC4TB3Xsi4YiDKBmn1YX2qNYhjYG4Ruq4A62u3bMrmT3UjV3vFXU3yUC26Rb",
  "key24": "Da1e89B7AYkx6wvadPU1iT7bcfKttthnvnN4rMAr46TjHoEuLYvjuSzJDdTu9pvk32Y815QcpVLZHJsuu6h9Jbf",
  "key25": "587Ksg1oVXUdhyMgBJnG9z9CD4dzh4WeQQ2DtAPPZCthKqLVN47dE3x5V54JQqBmG3QQpxJcSBBThHtqTzeUicih",
  "key26": "5YV3Kh4DRzJiwi2f1q5bczVEDr1Auah5Xvg7VXBrGtSz9H75X3roQk8nQv27qiwyBmDxD3St6zzrGBio4odx4Tss",
  "key27": "2pkyS9W4WpLkbzLRESM9AYJDo6258Ps38XbwHB8Ej2giyUSVWURt65su8cT268AUFgNMns66oguVa7n4gqnGD81m",
  "key28": "55JDnUjXU3Hx63eN1KCxuDD5BabSjwDLR7yY8Tvb9UFyHdUvPnAjKty1BtswSwJdYXiFGNqoMZXKJnMfmdNTPYS7",
  "key29": "2FjpiDXcz7SnNXAkADtGYpbn5TASJcnFLEfcVD1Cmy5zcXJidcU8BL55qN1VcqziKGfFz9ue3Jgsw5FD84LB5s5n",
  "key30": "55CQvMwA7FWC6Y9sok2XAwAsrj1DpYnCEjW2BtcrAaUczhTyu3AfmJabvZvEhnEHgGeDfyLifbjPnJMoLPeBP1rE",
  "key31": "3gd4bbmbvYSHUn3DBv5KZUC9iV6Z6UNThjAmUu6WKDkHimzFuUZ27wgiH7b67emdTNDFNzScxDLYaoGBCMHR9dkn",
  "key32": "f8a1rbnF6n4jKWbUafSxDxGJbTMFk4TJEwWU5u27eJbxGmsfPi2xSfs2Reh3m2mtJyFxWbcMyzNNXiQoXV2JwcA",
  "key33": "5y1CdudCEbFrbbV84kh4CiHJ6jg5aX84Dqpnw21tLNM82qJEucQqH2SGDqYFLyVvwVJoMBCuugwX5WsaFVjVTvZ6",
  "key34": "49Kd9e7eqRNQQ5phTb4MEcKxQiDvRiysomaogSQaBmpyjncMd25HJVZ8kxae2fFv7pnM2vvHyt3SYHiFg5QiguTQ",
  "key35": "2HtNd4FQ3LNS2E36WDJzXzUWxufRC7dL49Zd8bLwsSmjde9iC4UtGNiWCuq29iG23F3uvvrFo75yN2Er4vQSzZeA"
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
