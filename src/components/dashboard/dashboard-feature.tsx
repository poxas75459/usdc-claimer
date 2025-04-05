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
    "mNHoo5onyuaVBWXWs7zex1qomBgDXnpWHfdRmQqUbhQ2McmGYYvrv3C33pEe5djdL2PwXMfkpTDYWYP1HGKW8m4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C9qgcj26RR6mK25qfTJbaAVcQfhxLBnP6NsFrZoiFeJjhxw9Bcf6jYxnqTsf8o7LGwmwP14qtcLcKqcnEuGmMA9",
  "key1": "5PjycTnpHvabBtV2zYQWguVJ3wR7oVcQMh7SVADpQEC1Dw9TGFa5REamQKSNJ72bwD9CPjg3MksfV1gTdAmxALiW",
  "key2": "5dCaVB6rTSpyv5kk3WPXsqQp8AaBWVoErG2bJ9ymBELSVuyo6hDrfzVDc3ipdfFdxfM4C4RG5VS51mJcLunCoEyZ",
  "key3": "2QPiznxMcUmFhBqtMZDpXA76YjtQHs8DvQQQLow617U5JKrjJ9nviTyzaGuZjj9rp44Nr8i9yrB7pGnCfSzFCdEp",
  "key4": "3rKdRvQrTYCeme2mW4EYpUjU3m7JynfR2zV9ei8BZ55gMVYbmR3cNRkjzhr1hQ6LcduUnGK9gYBdS9wE3zJ96yqf",
  "key5": "5vzZzXY8qxCPGsymB5GMC1s8kQC1WqyYxLdMV1cBg4sh2r1bFUsgQgLSCTv5kPQaHVjFGRjcpuU9HGVFbEUNvWyt",
  "key6": "4WtyiJwfs4h9g42yLSqeNW3791ma6aX6YE4QPg2GMmYv2xe2B5zJXugDei3Xb7GP8fBTeFuSiU1ssCdcsQFco8NH",
  "key7": "33qzXDx1wEbtZxf1Egj3ujZvgJdRSsMKzUnhrKvuXBiHpdqcA9RjdQHqaGsnYrAHdqeqDUG6REEgUra32Kg8TJbw",
  "key8": "2GmS7KpnaB4pGPp8tB9xPNSe1Ba1veffLyHbKhms9tsAHXZZzkErCNBepszNCSFSHh8Q3b3JZ9197BM7TUmY5JEP",
  "key9": "4GtVfvBjD75W1AJYNT6h5rP49wZuEPikv5tXxE1yoUh92bbaouKB4qr4tqmpD8sZnb8aCT6B19THiZH8v1FffXFb",
  "key10": "FC6gmQTtBASaYF8oS3Dm8hdwtbyxqjchE1pkbX2kjpSrcZc22p35rEVgTzLqgS7Qu1UgAeczHsSmqv9idqtHgt2",
  "key11": "58qMKcmJLPh1kAEZFz83TQYwE5CGhyqWChkSwksPhdEULRYr1wwyqkWz1o6muw5VB49RqRDCaCQbvRBaC1d6VMhu",
  "key12": "2wLSTFeAovpnDiutQP4fMqTfqY7pkiDRezVo4wfHFx4gUPacaB3MhHnPJpaXXaYB6GH9B5asPqjHh6AkPiCxdWgP",
  "key13": "4N17s5JyNhyztsUmiWcJo6zcHV25djKTg6zG7fRyDnVTVTLaHtJNGpVQfZ2P1cqYdEnrEne4ctGGUdwiF8hURMxH",
  "key14": "52usA6t6nRkssg4PBA7rSZh4UtxoyrKyiAYNt9fK9pKQxQpDS7QTPLVgJHo7LcbWPkTMq86tu3UsgSSJhWnL3VWE",
  "key15": "QPzeQme9pb3vYuvdjzawM1434nXyA6hWF2AEDakT7B378qpmdy8Vj8GbhcbKYYW15T3Lr77wuzs1hNYmhb6z6ef",
  "key16": "2y4hntkzjgFUjRfv5nR88fnoMoM7N8oxi93qJeM4YKbpUrCpn5JAXNBYNjrCqdB6pFFyAkLAcV4eXJ7PSnWQeiA1",
  "key17": "5UDzVwn9amN2ivMfsXUFQTXxduYtzgyHhcAT6dZczpxsV7svWfhYYpuUAtQRw4d6r1MHLi3vWan9PeXjJm3HxPJx",
  "key18": "4ESZqRtDZ3xoD5U3xhiHGy5LsHRLtSaP1F4u4aAXNeRnUBgCeEvfLskv1HW2SMRJYGwPeQZkSnWuzLD1t41yn9VF",
  "key19": "2WpesSm4zvBEHQjzJfwiXkVZKhhEGpT4Pa16QoXYxnJ3kAXfKca55UW4R9FdirngqMYPCxoNE1sGdKnxHpQ1q3Xs",
  "key20": "KFXwcwUqR4CDtBgouJdonzgy3QLVzwptWbnyXULohJzabdXkU35G6uGi2RVFhaYeaBYJMGcGWUHYJMusMvyBy76",
  "key21": "2RSnSj9ZuwP75TawzkjwgKU3vSuPcQmWdMRutGgkGnMnamtvMrN7aN7KeEr3PFC6vizzoRrLMvbWoozMkaX9zigb",
  "key22": "3GyDRht4CH31dfoPqzoLgVKNnhgCU4dE3wabEdTyDknWqzRSE2QWuU713XTkJ18vv6xoiFmEot6nke8t2TGGpAVW",
  "key23": "2WGLNPmJx3CAJdLpowocoJY6s6WchsjHRNTjXDbFcNYZFv2VccpujpVHcYB4GeL4G9rMtyrPgsBkf46fufYm5GQ2",
  "key24": "2KuS3NxBTMHjNGtodp5XnwGZySutTijG4WLSC8hswVjetLxfDyTSgbEtvNPVKCAsqcgSJoymNVHE6sbYz7wkgXey",
  "key25": "5ZXeGJWPwAd5KtcsM2KE6n86FQVx4pCi62DSXZPSCM46TtgGwkATbeUnY6hdBt7hFc3zqNX5pZcGXmuEZ7nzECbY",
  "key26": "62JCBbaczeravZs2cPPyyneTCyVtGf14JQKQs9gF82TFq277GwBDjapcwk21YAoUGnRsL1CZUyirg3C6SieU5Yj4",
  "key27": "3aVBExiNKXD4VanxZcuzfsZdxV2wJWeWBzasHSXapSrM8kt1zcKU7bin8NCcZ1HRVdFge1hD7acVyqS16hWUrovz",
  "key28": "3TPbc2ADW4ax3jamoUK2HuxryZ8gsUnbg9VjYvk6oKkqALqz64mrnx3bwDt4at9mBsVJxi5G1skmd724oDxNZfBt",
  "key29": "4NBfcAWxXayXoj56C6LpknVzLUNCrdLpAifoLgxwKCgUAqBQErXhJyoWm54gz6CJkCrCL9pLeCYXoy5UwNdKXx2X",
  "key30": "4ambnt2hgt2MY3uDdzmgJJyno2CG6evLNozHJPY8aK3tcczoc3zxjgnmXQVwGr9KtjL6zGxmc5R38QaHTZQCKEJs",
  "key31": "2XV1ogLe4DL29P7pJ4hw2cw4PkrAvjNvtHXr65Rt1Ndw81F7cZZK6wb1u4911nHmEFtA1ud9dQuaNmh2H4gZqodi",
  "key32": "c8jbCLxzbVAGfb4QHKGP83Xifp1QkQfM4af391tXqHBA9W6uj5Ftd8yPJgAMfDoe7sUNwJmAtiBqyMvaoJ24X8e",
  "key33": "5oc4XA98CjVzuDpqec3C8T6pJ2dbd2HMTa7Y5HMLKa5zePYbYTU4Q7aP9tFrxaMLHxbwP8xZ6c3ggdm1GQgUN6LX",
  "key34": "2kLNJkixPc7aHKY2TptrX8TesMvpreCzKtnBn29TPYqp2aSvBSMrexui3JALEi9EopZBvgdhRwpQP28mj8FzHBNJ",
  "key35": "5ErXPGXCfuRS1JeVwKf34hYsH1j1QoRP4d5TkEQemDoheSqJP9rtBWkcPTWRdyXhfPEFWxcZcyWfE3YuPPQy9o3z",
  "key36": "2N6dcT1gvdMYL3pxK1BLL5CZ6VTcz9CVSGeebMVbaucRTCkBZUD2vh1XAwSwstu8C7Wc5JAM8fuTbK5PaZQeGFSD",
  "key37": "4gRuJSqw3R6cPk83e9z5JyxVb7PiFphYvSMQLfZNiuBTFxoUpkAS9P7wBuf13by1L9LHtvj1uXNAhrkKrkSaC5y9",
  "key38": "2NaGM8x3PRfSjFHtXaq5b13d2mRpmcji2hVd8gNFUpcH2T9ZZoSrUsMz3z4RfFV2G5dtqJQ5ei99LePiu4fGUEu3",
  "key39": "66Pxmzs5v8iwRZ2t2U7cBLQCR9Uy5mGgtVihWLUzcNpKzAYwx6LJP7xKLhUnUq9KpV7fYwwJDUwWzvNV1kfeywLU",
  "key40": "3YTMGUX9eH64NXAiaouoVgqVzRPtuVbZaSQozYy1CmBbaRcpG5f5kaNrtvNHj2LWZkXVtuudKxzy1TKjGfewVdXg",
  "key41": "5qnJ4jHYTgsKkKKLUj7A77KeHEcnmJWhNg7Zb13atrU7HPKUMpvf2chV8BV3JCN8UbbRfxqkw3UoXowpScjmTxw6",
  "key42": "4QBZFD6Cy5sqvHNEEvG6HtyvgaWoUQ8AGFAiDng7Xzd65TdpUCmCq6ZPFuvZqdDmDAn7hRek4WVGhjpAeaQLiDWw",
  "key43": "4kDfcGJS9fU2axpAv4PrttGuULiyzixLHdSSzYt8XmSkgdR9jVpjLBUHe6vkYPXx9SH7WFCYLNg8FNwxi3zFWKvB",
  "key44": "2HAiFExZgdoKtLWBGdxaVXc4S74urf6BSbWafpfw6kUgGDiaANrR4sXG7QyfJ55wTYfxMNLHTCdGrAcFUa7PZufX",
  "key45": "4wtbasMoj9zjy7nE4kY5TEgYgrUuByU798Am8Q9SxaavCpXPB5pdwAr4bhZ58aZ18rBCVnCpQm2WGsbYRAuCFH9F"
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
