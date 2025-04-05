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
    "4LnX8qZaohfJQssrps676Y6cvCmuZNXYcunheTWecu5JZ5QFwQw3ntdi65qQU2EVKMftS9nGP6ZY9U3eaej7UpRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PAXGquN41fiYowqnQRC4JB6i5HbkTCTEQG4aGCWgBkzqJsPcxh8dFfuAn1SJbeDc1kJNVGbRqMhYirNCVY2ZGjq",
  "key1": "53ciiXGSnxwxyrU3musRea9uTAamt6mZKLdkuDfx55uoHCFWPwbEiFMfDiXWSvX1WdrzfJfgKYs8tcyPYvyremvp",
  "key2": "g2EwFsGwrAd3zDd4nxbobM2DGL25SPGKr26Fcx7V7XGvQBJDf5Xq6PHMsESvUpemMzSKBKUAR1pzZS4NS8NsE1v",
  "key3": "3tZ3WXqt6rKsYZAT5WN7m7e1Lo3uM61Xz2iLFujC8CSaBy44oimM3VHGbAPXSnwvumjWaUWuQPoy8wbptDqD7paB",
  "key4": "4FANuTNMfF2jF8y7Stsu11n9LwdmZkZ6ba8PdhjnZWaiAwDdjbM4csXUJrwXPCqL7TVVsAYS5R2nY8M3vqHywGPV",
  "key5": "39qQK6bxdXjbYyNJbsbY1Tys356BYh5jS6sZchrxhR8j1t7dQbFaN8pnrqw4m7R3abwHMEeydGDV9WHdGQ22biaJ",
  "key6": "5qY5WFku16MqWk9ak8z1MMQqPkCty9qEbMTr2EC8eSF1ePTTSvgruMf9zvkqzqVcCVk4RKn9c1iLczM8YazMN8FE",
  "key7": "5K7fUbpFD4eZ5dK5v1Laq2F5VRgUeP156VVpHZnYcg77wbYmuJtX6ZsnWXJS4uSy2p6pA9LsxHAXgrL8BWfhtCc6",
  "key8": "5zCnoVoowZ9E53MRWCvqbxSefPLzRu5joaazn7roteZWRmgJXo9SCdQgC1o2LSVuavHps98vCFzR4S7dnTXBySjE",
  "key9": "2WYdAAcobHyJGfMmjC9A47CooPyjrgHCSdsiku8RourLwEiU55quSpT9f4CkudPwbVKuRw2oxxDdVSoNP8xP4FFE",
  "key10": "3RZxcqposFfa58pJUcny8UXvMTt5w6fkCTwRdH4VvhhDfGfgDfpSgwsSY9CD5jPje5m9KgcakQGQrrmyDyDcGaZ1",
  "key11": "2oqdS5KNYAE9EFwSZQ2ytUMPDLKM78QZMjLPrXPor7Y1ufVQdKyQeF8KRFrgS9GKA6Rw9LwjNMYfe8pZwoc64iCb",
  "key12": "Q9SphyhZ1mfzmKGzgYB9zryc5AxozthNhCrPXjesqHEsNbL8s6KDcWMuBoKb6jTKQdtPYFLAGLB8kToEm7LotU8",
  "key13": "4WxeKApj2sbzS7piiaGGus19e8iSnDEQDxt5zFYe5uxZxqRQ1QjBBsycMK62t1nCbxquLzVmazJU7gbVyzZE3jiD",
  "key14": "2RSawuavMts4zzsiwgjhdLWN7DuKHaWf4hwP3e2iKxkDLjm9Qdtd5ynxgBG5uUCMyz3ev6hjYj8VFew4trkTeB7p",
  "key15": "4dQ6hpw7dpg5zHTkmHjQMNXX2ousRoz2y2odRbpLaCzkHhmEFhHouqgSf1A2RXapWkZsxKQZrfAVAqhLnJ1nKyrT",
  "key16": "iQ7LQeh87wJHTjePPcnDWPnXkCiMpWDvJz3XjrFSe8YKbx3CPfYVeNPteTGfnKkYeut4byNsmEja2kJA7MK4EvJ",
  "key17": "2tCB8atqEczmAf1hzTrYwWHJsdRDYE5kMxPvJ7m1qvBcsnM9GL6hgkemRjnYND2rQqjfzhCrxZqGt4VpahdJEsdB",
  "key18": "24vBj8UKgv6ycbqjR62Dq8pUzr6UjEjzFZBV4oPKkn92ZptyRc6W36MmLV5MdnFyYdpKCQBLv29cLwpMuEtoXSzf",
  "key19": "36jR3e8ExwoEy4HRk4xALQKTHBHkx6832wib1K8QEu753tT45dL6JW9jmzPRBNJUQUSUa2nUbQE3qt5hcNebAq5B",
  "key20": "4EhD4w2u1PcVRb76WQEsTijZJRvMCCsJL9F28Zt33csoxg33AabqMtgiUKbb9FjnTEHzZWkEgPmhdrFnsfj8FP3S",
  "key21": "2Vd9G6TMgTgRPYxBd2gkn7kSX9N7YAbmQHuaLqeFRLznJLN81NWRrf9VBXsexGd1zZXJ6BuxvvZBpbFbiJydjPgc",
  "key22": "99dCyBH2JeTaQJK4mziBS8SQhdoHMuSPbwRaGnKMYzFuQKzz3ZqZjjvfbFbGQbC7teunR61yGEN3VWMgdohjccW",
  "key23": "47cspkJPhR9a2CYs6adiW1ndfKsQoJtJjifQMZbg5Fn5C1ReN4yzAzqE6pDavw4XJPEyw1z2BUTx38Kr8uDvLJJ8",
  "key24": "5ESR5jJDVW1qcAV6uUHGaWEH9Awd2Pr5vHhpRiXp7GRc16ACmbPDmNmqhfiXyrrZ2bbKPmNAZrw76CjmmLo9NpTX",
  "key25": "44ZdFo7suGn4eBELKinoGd3D4zHF6TFSB6Nfydr1xBRAc7YLYosCnAyWXoCNABNGMPDNA9TUg57MXsc7U6xTUFsx",
  "key26": "5UVcpvk9GXYj4ouafWsm1wFaYv9YaH8uryHRjSqHGSnvUuckknqbEFWWCJwWJXDdxpWYHNQoQei7oKg65SjoVi4G",
  "key27": "FxyDrnt3i9Nf8HmGsCztLPdcnN2PgzyiibeXopc6v1BdencRUEoM1XJp2U8qNxWoCy8iuSAeBuQGBB8EzmULpNH",
  "key28": "cmWzmyhG8e4v1a6Luew8ZYspptgZjcNLeKCXxQ9oAGjHyv5ah35idJLeRK34nmicLcEtqige8xamDLCJW1jrP4B",
  "key29": "4dmFLGbrjDFxtq5ohhrLrbTGcFi9FLHumKqg91sa9zs9YYEycX1A1MbnYKqPqRPz85z3iQMYacEMCGg5gsewNuVC",
  "key30": "2jBXQh1bct8ySCHD4WuXWu95LhkxSF8YYgkC3VyyoZGN8cBVVhDt4uqgEPZug7p26RLNNiiQQPJLNvu1SBYDsdt7",
  "key31": "2bmRfMtLt1oCwJUKwz8EUBTqjnf6wneu3SdeCATN9csPLbFL4bzhiqX7nKeTH3NWUKGb4zrXpgPDMCwFZhLpch6p",
  "key32": "4pvFDJGEzYDdHCk9sDBgtLyyUMMMLoi9brKGLqMmpjgJrwZ1jewSaGBgUBq1tFCDHMYf9Qv3aLQhXsgtU9nTLLZe",
  "key33": "4vdBMwzXQeugY2Jw19VRbaZL9aY1DNhjqXY2nwbdYt28YghiL4vb4yWFLXkVdms1pNdg37DbThZkpA9YMSQ3m7Mu",
  "key34": "5ndnw8qSqUNimrtab7M53wEoUgMD3nV9XQoKQgXjktRyrn1Pb87Pn6XpTHFgGGdzjpyDAy1G1weKPAA1SBsWYU8z",
  "key35": "3X8xs6jvYirKHTaFSRZMsvHNCrb9pgaELqHssv2Wr6yXikFC539YYTFi3s3jxQpCypK7BTn7MRzf8Pb4AMGs2mdw",
  "key36": "3RtPr8ftMrMtC8byc1TzxTpiCoJanAGuTWFrmAQHPEVV597zE2jo3VpkyW8xjQxZ6NCWqzHuBaa7pj7hDiq3qxbz",
  "key37": "41xp8sLjg6ZTda2eUQPH8LX9FbmXrP1xfJktFo7TdrssJDSjekUCj4Wvj81JHmbXeTGdA9K9VgLetnRPFBSZNFpF",
  "key38": "2dQfRSRkeiFAYZdLQgTCBJX3LFW2b8gh9rxuzdxtY6iAwegfK5K5roKAfNbWZttF4kzeYkdYQ4d616HKMXhiAKrU",
  "key39": "2Zp3QEC1DdhgMgMj9pNr8h9dC94QvQVwEP1Ve99JjdnSTHaXHc8jB44H3DQSk1pjHoBytaWFDnAhYqDUvefmhoir",
  "key40": "xFwZT89Fman1wnuBDM6JHHM7uCyUDAnLYLMi5CBT5dV4jQ3wbUwqy39KGbKBnTdLnD6UCX8TrJzJGQwKMCe3Xai",
  "key41": "5o1eqm26U4pcEifm82tr1vDE46UtuCCsLfNEynJsJ4Ma9kHY3g7kknvdasG9sbhuqBKNFqzVkihcyw5ybqQjyqLX",
  "key42": "5r59LGMpAyLPziciUF95J4d4L7MBVRRFmr24A6bat4LvuR7XRE6DTEggJ3MhyT8Z6rKEtXL1nsQk4vYfJMs6U6fB",
  "key43": "59eNYKpsxx9eSMCrgyGazLkkCfZeKuVbUL26DQNAxjZYvrKMt2ghMqxrSZLf7Z4D6WZnaRUp8YDvFMxvwY2qabx5"
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
