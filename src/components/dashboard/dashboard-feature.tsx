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
    "3VdSnsRkx2TPzmDWWofoKLJEWiM6RyfwQJQxXgmxpGSXWnLaPEo1VKZG6dAwceTqj5J8537DdaQdhHYWYjQdTZL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DfEbQr9iSb6NKTRPs36jQKQUWLEkv9t7m2BrVTBcLUBD5EjPowebi81LokJFtbbEPsftrgQHA8jV58qVoxcAmGA",
  "key1": "mEoHbBvGgGLNqpZdFPLNjxQ6ePJ87iaKun8QqzVfKY2ja15neJQZeb6UqnmvUJgHgk8CSbkmyPsN6Lr1zRLZuky",
  "key2": "2zvVuDr4xvaCrh1k3rQD6C4xRXqwsCpnsYgWpuR6B6uYdbhr8NTxkYmTXXEMr21a2BDoJQW33f8ZJaxQmCQpmEvr",
  "key3": "4p9T4TH2rbqr95myN2wkwwpn6fVx9CJh9ubURCg4zF88MKDnKT9SYGPyb4FYLn4FuPBS8jhmJdc1BAGhVR9PaBoj",
  "key4": "5H3wcKnaJy4bPGvhRFKzUkLfinyL2dAebMqMTwZyrdRuNoNe3Kbm18vJPSC5MvD8tEd45jTBW6f9EzG9ZcyT4Znn",
  "key5": "Zov1W9GGa9MM57VRzBuM2ZXSfXK1RDChALujpgMMKL5hCpZMy1kQMFdHgcitVDa8J6StfGSnmdA35T99yRHzLj4",
  "key6": "2yqqh6NBzCwBK9jFzNtAh9yUdbstNLJ7CHsjPCfMgjaYE5s1P8pPCj7YMPbaqtD7TbfG13u8q1hFN9UbzxG7Dpmf",
  "key7": "26ZnBT4LjqQYPrZnkiQzv8ppA7FMQgPsf7DoudXqAbhQjRnPCpTLwNBEDGp1FEJgXoW5LVrQDe7Vai5rgfbud2Uo",
  "key8": "2EkWZ44qV32xyyFPn3oWqF5HkjLe3WxZspsizDRiVqQJHJqwurxmFx5Yb8ExHQMKT6AqiBySX2Juu1kPzGKuSTui",
  "key9": "5keqt7MPi2EGDTYtPjA4U7wTxXU1qXYNRVorMHBt6eoHHt4CumHjUqGKuat8UtwrQY6xXmjPLpi3dfXtDdkF6F3T",
  "key10": "4Lip9ZTw3zbD9CznjRJpaS3e3Pzy5uqcPDkCFSLBSoRKjHtcpjnaDJ44mg6ixqSMVqJfe1pWJmjqQo2PZ5e9iYx8",
  "key11": "3vj9myquqMfZiAYrwPMTgRvqf78mq38cCnRi2wiS5yRRpJHuwAuVWKzWArLBt965GqMyRApCg4qT9DhfsAc5yfc7",
  "key12": "3K3JfH325eFyGiXFWrU6KTUUcYo56GDq9LAfTpCV9KSXbyXTtxouQxGUZ5vpKqUzpnaYsd41njyzzXHBZEeKcXSw",
  "key13": "5LmdLnuSMVrr6z6JjuSt6iWmDqjsuqZF2V9xrG9waBZK5Zv3dpdCiay3AAB4SMeA1exv3XjKAeAFKKeXvt6fto4h",
  "key14": "qNwVow56V77kasXF2fZZLiuhQfHLUbaSbebF7MzkULNa3H7YkPKwFFy7oQgMf6pLMw5fgxyvVzKdHRLLcMLw3W6",
  "key15": "2KeWBxzXjYrxRHRY7nvZrprxgVznbTwBnfx4CZEscMZRDkWp5NGtvxgrLhXUn3948ysfGtsJYo7bCGZDMA4WE9E3",
  "key16": "3t24q3W8hv4fhNir8SutqeaWcm5ZouLSr9tJyn7xRyWyTF1K1F52C46Pn3rFPGqaGucrj9y3Yeei5HqtWWpF6EUF",
  "key17": "4fJEm3xx4TtMinGAZ9A95BqFncPZAcDrjkF1gsMHjdBMhP5BhjNeeZ8VAToiUTqYTpxNjwkFQEmnZuyqJw4cDphR",
  "key18": "4aNKuzFtxXvCHtVxotq8VeCcK57PyZUpnP6eT5pNZmhh3Lw6mpUsXzp6RXcF8npESr6V5tfnDrVjEKSt5RkxHa2i",
  "key19": "2iRnmgDqWmN3iD3RYqqUUoRwucvZqU3qCySMc3FJmba39nMJ1CQhGVAWLJVLepmtXXY9PbinUKc4J2bSFusWjgcc",
  "key20": "25rBcBM1DukXfTDt8ocHGbT1iEaLDSWhR9PUbSYGkqex9YAxcFRaPbCUK2MNZhdN49GABq4QKZCGzJmBaFxxK9UB",
  "key21": "679uhcPtRNmdrBb4sKtZHq2BGn3Rg8G2cHrhRwSAhQgfn47yfcSmgMdiSCGDFNYohxi7dJ3sdq8BUt7mZ2sQLd2H",
  "key22": "2DDiorSDdUFQrw38U244zLLREtDe1mxiLxhhpAiWMibTT1rE7SDkYThKN1YasVpoxd2E5hMgcfr8HVf2f48fe5u1",
  "key23": "5sGzA29XonPNTGZNKhdFMByNBJDXLnfGNecsPSPdEPme4Mr94WrNg9JzKEg7Zc8vRuSyB2MW6Cq3ijGzxgc6b4j9",
  "key24": "5y95chVnRXMKaFHixzcow9jMExzdHfxyUSd4UbivufSyzCp1mgsYMKiX15kWhRrJqqKGjxkriRbEyF69XdqyGrtj",
  "key25": "327n71YAfwhPn2tKAo7CAEKk2rgqGofLSAJ44jjbEBoVuKGLuTPZadtfQJJYFEZfLZf3vpcneGmndQ27nUKdEFk3",
  "key26": "4idi6t9xaGQ4hLqya4KNUE5fkpMcp9hjkLH6sD1ZyrYddEuUgEEoDH2eoX3351nczPsvY2krN94x58wnLtawiSry",
  "key27": "5B7EKN3PNjEn4z4bhBzR9zKREGZLwM2Yyu6tgFDiv555MRteTC7Tszq3wPZbsZxgspJD7NDYQ3b5oDuaFLGjXZWg",
  "key28": "3MQcdeBPmnLJcfRsa59VCJV41JFNTiXcbeVqpogpcph8uHuXRrnPncp3thj6cPvdCEkU6hfzzuSpvCwN54FfwqDT",
  "key29": "3nVJBi7y2TsRg7To8gwtpLpkKUGhTURX82q2xCbZuFNQw3pyj35fBcNveRbAKKbMkZZEJAUxkrfBMGMXrXt3R6kq",
  "key30": "5gJ9DzbRMQBJ6iPt21bZ7uxGWjpJdtKpqnrZwtc1gFD5HKwUTaq8iXYWAKGm2WXjL8HH9wMge3UFVpbzxpRkaf4S",
  "key31": "3oJQ1CmuMPoGWpRNjaqp5r7mgkKyfvZgJxnjSieD7Ux8nmyV1DzVmZ2gZSTyunDAG6dQkjMa2xBJxdDen6UtRr4H",
  "key32": "56RpnVCnqaQxwJdGRm9xKsJoJox6Qaq5mxBL8sz3Xei6gSnKXURtzdk1xEfbQ2CjXRhgjAigFc893oQVMnko9dC1",
  "key33": "3EDVimXUFKjztn8Up8xZ66KkeY6E2uQinvTP7k3z7bcRbRYZqL4WKcZYkq7fwBA4LnsbVUXdQyUjZeL36nWgTpgK",
  "key34": "33wKFAB5Tx9JXT1iKjSJixqoUYTcBtLVMaVFWwjJ56wGxoxbsXeTx8iYkTYeMjjvdFHpThWh9xpTWZGJhAkc7mRZ",
  "key35": "2UqpDvjssJUK2jxFQnx5tZEGusWWDY1mm6JZA8WXw64JVPeAk45nNNvvV2n97ER8CiSnxoZHY3AjudRZCBDEP81F",
  "key36": "2qUHDLnt9UEgqCp6b89UQ6QT8F9ZSqtBWBW227SEiLCsxkKwEJAXeJPWQhfxvRDQWPXhtCAJtmoPcHkmp8Zstj5T",
  "key37": "LBTLPX43mQoNPPkV9mEDtFuov1CaGFVGbnC5oxXiftWDgGsPcZC5VnumeHi1G58wXKme1whyLeEUm4zCEHpmV3i",
  "key38": "53nNn51G5Rk22xwJ9BC8DmuaQY2P9Dnjun54BvsWyrc4bBoFsyyHHWFfpTrTKVVzystjTd8i2t4mib6yNQoH2tNc",
  "key39": "4QZu7BMJxT2M8bg5zQYXqw4VZ5GqsJy5qKqqBFrsntFz2CRKnTVxC7EEgtpHV6CJWomhwwqfZx1yPagKnmF6S1yk",
  "key40": "3awxTsJmJj4fzV1intGrX4CMFmgLWcznDcu4A86ihKdJKMBuWodKQVQxzcdrhRPCSegqm2V5vBZC8GgkkGkmPcLa",
  "key41": "4cdNcPbA8wtHLmonn2eJcN9Rs8ka7pqqAg5aDS9ytU8Z7GJAmBMWBrrxEkvgXtWYek5ZiQhwjSeCzYAFgApEwuXf",
  "key42": "4xjFFEZkqHMxSh5ruYtcE1n2APLdh5KMVv7SGgv8u5UySy49s36nC378dJ1NYcL1eXrbCBu6gcbx9E248its4zLg",
  "key43": "7gcqg1gHKxY4HR1xNipYWu36Z7CognaY3oeBexrg3R5NBufEvsWV8Fkzd4raFNxYohUguoPsV8Ld9K6pBwZ55tr",
  "key44": "2QGED7QNJJCKjmHeoC47fjxGFRVthjJ6ZMBAiqnNUJRVgi3trNqq477dfFdkMZ2oedKnHuUna3dAYvgVcfX2CqCm",
  "key45": "3hTVDXeouHgLCRzaRUXAuNrRQCSrcSzax64nR9QrjCQRkpSFdE1UMddE25DrnnVABnyvFag4qU5HDbpD5TdHjcBv",
  "key46": "4NqqsxTf7FYW75paa7g5NUAPQcJaDD51mpHxgveeT2UdVVXtCpSEmXnGEiMi7FumUXYQsHrPJCtspNnFsA3nctm4",
  "key47": "K4bhddno29PwkxHmbTP1qX1RRHg8xTn9FtKFY5rD9EkzSumNcN9bB2ffZH4i4J4FjnuJxdkAHQVe3Sy1YJrD1a4",
  "key48": "3YijPJQY3jTHEAS8yZmVH66LGjgwSyF4ymSZKaS5zvMEUXAKsG8gktXGQBNPQ7sD86XvQwQJGx2uxVhtCfyZAZu7"
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
