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
    "2uMuF5aXGLRUTDuZEd8cfTDpq34Z8DSjNim7X1ZzHR51kJXabuyMUxwsokU228kLzjFMCbSxNAvJ4KJVgXtwG46x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oNHi4Gf1rZMjxTMG3ej9PEusYfByggrBZwK2Jz8XCpXSt1V88uUV5dts4SjGCWosgtb4Lo14Q5McsEUd391P4hn",
  "key1": "4pRTk4nyy8LxcqUfmwuRzMoDFkkMWZwmNKztT8A9viqL7L3DLEeLWR1W24d61aGfT4g8kwZwj6PYUvqYJWGvvhkK",
  "key2": "gMe6LoES85dVpjMfjAb2dpcEtGRLho42JW8Pb7YMbztQK2zsfrVVo8rZF7y1XHUEb5iDfHM15GLW8nzPTUAgpdX",
  "key3": "5dRvWLPsi5Q53PVbz9E6UWuvy2AujyeRtQotCPzngG9RK3KTEQVsJyFKUrZKdWabKhBGXmptp7R6Kxwz84vFABe8",
  "key4": "3Y8ctdmg4qFgXcMtjocrKAbsZ6pZiA2niPkEiH5DU8MtUhwbPcxmi65cLYzAyq583H2Enkqpo24qvzT3gVnM69m2",
  "key5": "5mgfMqnPCNDVPKFE1J3X6BfM4Lb4C699hA95y1KdnPn5pvuH1q9VNkrePex8bDhMqrwBRHinCknnqasNNy6ZdAYM",
  "key6": "WanJQFJHeVB34LYGbacmtnnxF3Pdfhomoak4crtRDrwKwQekV3jnpAgQUcoFYqNcnRmCv5Pxjztj2AbxT5UF9iB",
  "key7": "5peanYVNXsfi4m22sof2hZGgcaKfJ1NxEb1KrPkBVfsmdufcwmXB5chWEtGXN1awW6ZKZSn6xo3R2ZyqAb8LE5pp",
  "key8": "nnjDJuk79yoVxinSfRJeobmznNaK2V3DTrGztVJW6vqsiqCPy3xxGrLTBnoZuA4QcznUhxs2cymCts9Q2kNLi7W",
  "key9": "59crzLL1PVXGEzcDipEiXKoCL9X47tKvX4SPhLztU2qHLTmav7qa6vVbyYTUW2cUwKSiSw2WsSujgc8PjqAPPX6v",
  "key10": "2NErgD5UpZCbEfbCALtzoykECeLJmifJhAbzAWsTVFGV1WRvVPpGocwnqtCJVVEhYbv6yCtN3yJYq6noqgXoGUsm",
  "key11": "EuHS8LzVv76YhJ6eQgSDm3NN81YCjrifi5MceQu7RKo2ErV3TD3NTtESffaqjgz89gVKB8cGis7q6kYH51UD4KP",
  "key12": "itaMx7qDrXXzmJd2Wi4Wn6Gt1AoDJttiacmxVNECPQGvHz6SJ9JKLCFR7s9gu79fpL4Cu3fwS1fCdpHKh7617um",
  "key13": "HeGWsochkkTh3GPA6fEtx2PpthCXyeZyQ8y395rE4QSu9TTsRVquhYp7TxiEb74zBCVJfXSh22rTU7N69wcEtGo",
  "key14": "5VfEsUxi5GJCwWQhCvLdKRzxAN5LzNBkb8tcpprdZzczZ4oKo9faJnyzBGzicFApierKYAZWEMZmm216oGdhAufF",
  "key15": "TwoZJujCtBj7uK7soFz69dMEL9ZtP7u9of58S59hgYDq7CynJBXJSbLRF6Fnvd8XjR9hDsNpY2CrLmYawtKJH1F",
  "key16": "UkcwxxXxciRkdkzCWoZziSMwgoUMte4NrCmQS3W4r68i4EBxe6uqNzij9dwLeqyyGwtLZte6cPaqsaHxywxnjNB",
  "key17": "5cnPFggGxG6zaz6Srj8vDXT3LWGtyjW8tidrR5JwQU7KWDYGZGuWhTkVNybvdcZvotJfJidZpDsNRTnkwUFxFdpT",
  "key18": "3T6gyZo5k47bU7dxxFfj2xkQqNxi4KVvA1NqbxsunmtmKuPxCGgU4CM3JSNdKhXxnuFXwJfX5jt8fmWzTdqgM17S",
  "key19": "3XLLfMZeEPYRWJLeD6EmvgR4txnczaVtFA1bd7We5U9jJ4cdjsrM9g7qvcA7e4ZV62zfAeWXttM7icnCRbzRCHbN",
  "key20": "4Hcgx5GZeKNsxYMbHwrmGdiMSMfxfMyRYCfnfh4o9VucKAb9PXKMFF1bxgBnMx6cUZVk7ZeSGbn5mfxAXsurewzR",
  "key21": "5PnrEosnrZA4imYpPdSmBoSLP3a5e7ZJL7p3tT7BS1ozx7SBJX4RcnH5iqLCkUYZWYQfCyrRTffAzQJovGNPstSX",
  "key22": "486AMT6mMr2Xck331CgR96sRKsoJUnr1A6xvZsyz3YPYCWv8H8Cz3w3xhZNvU8vUwdQxpzQCzZuUvqbMKyUrmGo3",
  "key23": "3Q4yuDAdmzbc3TKBe7CV4rQ6C7wkALXCyUKkqRvvdpk4huQhmMGHwJYemYmHrkuLr2tdeTCZjtTm4D3j8T9wnbuq",
  "key24": "53HJtPRq76XszNZUJrxtcRsaGZsK12rXabQv5PYjFn6N3yPNAKobgSCt993k4BjSmohqcmsjh1Ug7KMp8FEhg4qn",
  "key25": "4BrxmLPNxWz2ubqyjD2bJHAhomkz63zUh9ECNkhecScaw3VbcaaMcKnKv7DmhwDUfVTQgH6o3T7CGFFFTiZhe8Fr",
  "key26": "d9XggbyqUVzQQjMZWUSYLEow8dxDnTQgRNmjVeLXRiKXZp3RrLUeVnkRd9H9pUkB2DgUZTgANDcPJYZCEWtYVxk",
  "key27": "2ShHTQ4Ms7zh8WApxr1kgZDJ1PbdUquJjVy3msQx5qztpaT5p24XguLvXqorDuwKBzpnDAdDQKw6QAWmkdpWZ1Qb",
  "key28": "5YNGnp2yEDBjj26KdUCvLR4w5gFYWnHy4ijCY5Sfa8KwFyZTkQqKswYvr5NMTAtJHdBAo5NTh5nPGHv4siJ8wo8T",
  "key29": "28GdwQq8F86GmP8Sr5J7EmfTS82JX9vm5skRYYPQkaxXH9vXwDfTq5swFefRLZJAv1yBokBehaZmDwkkS5dPgYor",
  "key30": "5JCoEKWWDKRB36AnBXwcZ3CfmyZEXEm3gFv4Ux4iG8ZR6zKMrwepy8YyajhWFUXZbf592rP5BZqPkkconNArvEo8",
  "key31": "2AupGnKUgS3E4pGgurEafqJghcY1PoBRH6NrnwZ5LhWUD1D8TAc9jukuje4xdBJkQ7HjeSx7hVwLpVqekuUwxV7J",
  "key32": "4TZMvwNazhJtC5RxG3jJsQi4pBtU3FLCeC4PmqWMYV3rdiben1Zff5gM8N8qGg3AZgPZMf3LJKLYfGU3d5x44vms",
  "key33": "x7Dcxd83V8mL6kdBnbRe3EHtPW24svkiFE2suEGwJScN2yiBBYLnsLscLbsz3bMmDgvKB2zeZwUvgw45DPdePFV",
  "key34": "PTyXJw8LY98dTY8oHLjhs27zsAHLWSjXbfXErtxkyjHvMV8Qsm8WXQvs2f8MNJSNkWKZNx3s2z5GAzZCwseckDR",
  "key35": "2to4FmoZGkDyCHxQjgoWH5gg94btwqcG2LtHt5XrBqx7F97ovFNNCd7GNEceuHQfBMt2fFnKeexRvFUzG55BKum6",
  "key36": "8mQQQ4dqhqTgyRuszionDfzhH3dX2Wv9Z3QDXKZSr84cY76vfpccLbRfhMAjy4MX41oMxQQgRsxruXCGVwS4WSL",
  "key37": "3Y9V5c26goTCkq3p2m9jXN4bqaE9hj4kLbFXgwnrqdKgLdEvc5Qch34wEVwHNfShiuhceZCnS8koy8Atc7et4max",
  "key38": "5GGeFkEYB7nNwGn3M8FThDyzkPpK8R2pyvG5yGgBJW1VBeXUm4VGRiLMqBZFwjCVmrkzz3mY5QqyrjrWfQBRRrjx",
  "key39": "PwNNJYTrHCMS2ESR2nHVFtirDhbxQo8nqjzatvkB5RXJg9EvcUBozitsQ6XSQZ9j93niVhjS7THP3pRYxoX5p2P",
  "key40": "3ovUGytWaC56rcmkmic8pdHsDiDBGoKC6xhGXUXzwh8EgBP6hDFJRMWZXZCbCVvHS2ME8aVozas5Q747erYNdt1S",
  "key41": "2GxKpUxDRX55YudA41ycwt2MQXn9d9xU645d9uFzQZGAvDdE5YwjxTP27CBy1qpZsf9GQF8pvpdzwrBgLCG5xX94",
  "key42": "ioRHGjSMfgvybxHt5obtuzvsen4ADsmgJaCt9fi137dwefMdtgRfKBJv9Wtb6ipERDJziimHtFeuijH7E6V5pKP"
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
