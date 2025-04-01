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
    "GifS7Ugx3wTc46CrehMCREXagfCTnyUFJxjHFpTDTk6qHy4iJkt4GhY2bThcHn1fS33zGEUyGjaDshxJsrMGHeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qiy5UteWyiQczstehZFukrexanW65txMYCpKYEMLgZ3vbsBLeY8tDQcVYdhk6xNonWf4UvjcXDy4sjm8Vc3zfLj",
  "key1": "4fyroCbUUV6NMZzTitcYPBnB4UdCYeM7ZyhjiNrHJcWoD5MWL5SwVWU44XJfvHsCJVjaZHHPEqeGwo3Z1miv8N48",
  "key2": "5vMsi8KRBXed8R1MxsRNcZ941dT4MM5ufoKe91Txdqnv8YLY7Gphhg8GG4o8AH1qy7wKhDMQwwKbUANp9HqvMrbC",
  "key3": "21XiPeqEpuS8FBi11ucJ4pKk3EdyZEMrnZu2Ra3WYSPKpKMK2idA3kuMY4x3YUYB1o8mxiRzFG1fcMLhJUGqfZLh",
  "key4": "4svW432N1NLb6GR8VaHZNxbpBPsuBVJdJVGpMQsKdQTLjqK14NdXgx9be5uaC9EApvotbayqWbp8v5Yr8QfS1XcV",
  "key5": "eFyVExz4FfE1kxxxTsn8tt9BMAXg9aZXJVKg3sLUA1KHBXrBKPtJRauoHc9rrruLhtwe9PoEoM3ZFX76Aesxox5",
  "key6": "2JFxBJiJf9gooZjVGWLW6yMGuF2zghSM5BmdouzCXKHcKYqzTWWFCXpPsPTbXA6zydhFoT5YptcqNQEBFKDbfFvC",
  "key7": "62fMPQwPboHSnSvP5YTaFTBPyaAnQ3EqdJ2t4VTdv6BzRqhVa57pUaQS9secEdGDmqD6WMAZnK16Cfv4aNiYRCjv",
  "key8": "5srHGQmYjcZDXB2T61hSdCQMMrycCzAtzh1W3fGBzTHdk8BKdzk35jSkc8kwbPgwJrmDomTXTRFuxsM14scfcAXx",
  "key9": "5gJMZwKe94ZoGjd6C1C8K7phtHj4qY5W2mYKpqTPBmoBYS1mw559RStWanTiLRnf2dCCK7w3fphe4ZsMH5jD7WF4",
  "key10": "2aYLjsDcb6rDR6xNDn9NvZEoe445aZMQJyMEfsoPEvkjtjHcdnja1P3ioYMKPmDAGprfxLj4weKaJhmBhHDqPSDY",
  "key11": "Z6zSRd8LAGTwJ8LHsDTBWPiHPJjxVSfYV6LR3chhrnxgoCgGag1nMruJSXdHpcHSgttyY6nJ3MTSYqZAfLWP9Bq",
  "key12": "4BmtYL3DXjKYqktYtANib76BqPXfHj824jqNNPAJgt7qEwDC9hNmwfsrwNRPipKDCtbpi5YMDRMNs1uMmEmkv1xS",
  "key13": "3VyT6wxPjgGN5htJpnth9sY6dJ1L8LcPU81rwbyqeNeat82dd17SDA6rDmiNtFJnmxvLnWvazWyhemCWBxb534Zz",
  "key14": "5hS8RomrzvAQzbDauoX56Z3oUPob9PZCXsWV75Qhm3WFwDDcrEhHxg7habc3WATWCcVQaQKK5tRPyFWrDLkVaoU6",
  "key15": "4cm3nQvdB5kxsqKuN2fuBncueppVVKj1m72z57vto6zGMvoWBnuCT8Q8GXd8rsMPHg8LUsEXVc384jVCcis3ddxb",
  "key16": "2w4ZW1hoc5jftwaKWPNME7NyUAqF4aZNLm7b5RKXFWsa2dSKZ9GTCJaxRezSvjwHhrYHs9s6aaagfXpbDdbirRaN",
  "key17": "3BpHzaAYnB33qUqCCa4474C2iUmguYBSUng7f2YvG6JF9VU8PPuYBdEas9MrEjaTPKHGbKSDdQWBTfyZRYjgaYnV",
  "key18": "4Z8oTCaZQrb15X7PfmZFjNdMNFUrqAkZ98hQ9eG6JVBWCKavKMTaNkV2PEo1dVLGha8BbvyfHNppvTKTDyqtUrTP",
  "key19": "BXqm9NZuMgvr91ksXzFZPpUrz8SDXBoC3jJmy3JpWi4MaPhQadMtk46cxTQPXg7MgqP8XHQXrptASTZYvTSZaA8",
  "key20": "58C8oMaTYTkSbfKPaXeH15LHfxf3DH9E2qsF1Q2iefw8Pf3cjfW68bLWGsiDMaRZvE3ov9GRSgg4ffUKKE6grCyK",
  "key21": "5qfttvCgzgSJ1Bc9sG8BAarnuJYnmNCFwzB7tJE91bhJzB39MBHihrzofJfoPA72zuoGMB8Y4MwJrHJZvg7Z7VEc",
  "key22": "3QLAf93JERDfLRFawUXWsFDEjJfztwnLH1YQwNCJpDHdgshLhUVta7x4Qd6MRPyfqKS8Wwb8chUn3BcZzd8baMNE",
  "key23": "4ntDBmvhkYGazqcxv8zmWLJkxLeHaAMzTBUPEgiAY45sDeEjpmMA5yzC581QkUWuCSdZTuDPDrVEyWgp5EPEnM1j",
  "key24": "2T6rVVAcW46KUjVtXphX2qGZBsmNQyEstEyiKLenVgVy5rU4yCzudtXMEuEWJCBBrpCJRd7NL7akGkaSbweknPig",
  "key25": "2XtCx1Nhnny9k7eYNYmcvUVTWtzjbFpaqKEc97LxMYapZkKAy5oXFULaoZvWRk75uoCfGg4vx72hZZGpDH59WwTn",
  "key26": "4z1nzTDZCw3hX5rc993ripnwekmYtWP49NFHXxB34dP5mzMzYyBez8495z57vt6FWfBHT7Khmv3bLCkj2PmHhgz4",
  "key27": "3JEp1eFeD5JKGu3M4o36AVMkGNiDK7VZuMbU8JC8UWepy1mbCNZyNbjMdeZVVHC3qbhMeA2x97vUWQUrYzjsSBsA",
  "key28": "5WbdLFEsKaV9DWBXtCbDthVorPfjDSJsnLguBQjycknQnQYSCiiYVQoXGvrNJJbFjbmCSq25EUrXTrW5etRM3qau",
  "key29": "2nKXrNBUBcZWjGg3u4U3mzAacYnNxYRFwEyvQAy2XDaqNNHmNKetBTQMnhVwKk1SGczo8W5C7MNyBsDyonw2Uahs",
  "key30": "FKyeYB9QdBAsqE7dCQ6UMPNM9dsVN8hWDgFJAocTLYD66aJV5XnahUyoafTx4qYPXVn8FXT3KioWPxY3ZZUvxrG",
  "key31": "2BQccc3RAruqCX39h9gRkzn1RRdG9cX4srLf6XcPKWW4bRbaD8R9VCA5K37QtWSheodLvQc8UoxYcGnpzaPZs7hu",
  "key32": "5dZhbjZGSL9Q3AQvLDZMRrPoSCjEKpbaEtZkwq792pzYUNW4AXppWVtDanYsfgCR9DdmoaUrefVq3UZdwg4c9gZT",
  "key33": "2m4NSuHWnWvWRh4YuHPFQ1fpu5rRxNPjaah84yswEkVccco8LwEEFb7tp88jEXSaKUPtHjfj5mYVtbBaGFazyecV",
  "key34": "59xY4jrbYYnLV5cywmp6iW1Qxyhi2cgFquNukBdaGY6dkK3aLSvdtXDxgA7aYAy9cr7Xupdoj56JdeR6iHfgby3D",
  "key35": "3Kt2PgBNAnoYdRM7v49YYccjeoYezzyvjf8m4nKqgNqpSSwd6Ci6kQgu3wv2s6wfZRNGx1Qj3JCJ8FHmGsqk9iMH",
  "key36": "4VaPfAM7L3uCvyvqXbPCscP8r92usVYwr896XHnyi5nYBRDFQSfypxkJGCRX3sAuctn17WPtWf6PnaQXTPnJyKvx",
  "key37": "3dWyqyVwHGJVBfZPo3o6qVtmGQxDbUxta8BjREi61gtSEMetCdDeYfioiY7coB7ooHfwiQXg63KvP8PtjQ5zpUQ6",
  "key38": "5Ya8tUX1md4fWUGmqFAq1taZ8fhTMsFjTayaN7pSQA2J2j95R27zpdqePk6eMpQEXRWdEbarsD67MW8ofFxUYKX8",
  "key39": "41f9fkD9N1LRf81TUdDijfaBBhRvtngTmZJZA1ZZUe2sXLXGry5SDhcNrVvuhg4Hh5RHz5Gy1oM6Juyf5vheoQjZ",
  "key40": "SeVo1TCkgNtHwh9JjmsRfktYwsPeYXiST1VN23VMLuqSUn8cXGu5ChaH2WcvL2UGk4oFGLgmMj4r8ECmoyKbunq",
  "key41": "sHwrsh1dPZH1jAmxVagARpNjuSpk2kY1mb4ko4nc1J54vs24MKjWYLmJMMARgxnAES8fbEeNHY4qXET8YsDHNhc",
  "key42": "5hpiRDZaUWh1Jox456ZgE7maZvp2wgQVYW31rqQwZuKGkdHbm3nquFgyv9KynpNqMjdivm2cazeGy8tyNh7eq55j",
  "key43": "xtH9h6tGAd9JZUrUuEeG6GfF3A6wUsUjEGRPEjvzSo8FdQpCYQnE3mFLAaXHZEFw3ReMFLTZS8t7fMNEdMifth5",
  "key44": "2rZsMmbjN8m8WQ8ewsuzWpYECiv42Eb8THJ5KCdTqUx5ZJ4wup3ADfdaB4PZYLVpnZHjDHcR9nMwm1pv3BPXW1Xx",
  "key45": "4VmqmEL4Kz9CWjxYhuKdWtdkrwmErZRtrQ6UeDXJu6zvWU5mdSxAWWU2hVFotYx5dCdUuCtA4Dn1WzJsyzmPSx4V"
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
