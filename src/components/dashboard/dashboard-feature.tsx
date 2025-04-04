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
    "664kbWVQspHKjK9CmiBa2Q4ifAdRXiTJwxW1RaZwQ6TjNJ39byfhQKVj6Q9gfKEjF6LipycqMT7RGahWsUgNhphZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cKqkW7oKKWMkRt4ZsGdAdD7PUEnWgMVPYckVEA3kJ4jdsTZpWH9eV1pofa9LYEWYvtXrqPPvnhnv7UE3CrBLWXC",
  "key1": "396XYkUg2rkuENAvoTqc8LgtnkhbzeS3scPWswe2zrADWPuVrEdDz2N3BFSq4R2UuXTf9s34vub7oYaLrpex1KFE",
  "key2": "4aDhtuMmSKEC4C6VPaXK4MS3WgGQ6akcnVmTGsGX9jwNrohQXXJhARpXf1ox6bE9AcxAh19NgdsJqXp7V233AbpS",
  "key3": "5ae5RS1z916Ngvz5hiHrznEuUQtQSYjusR4Vmf4VCBjYCX11uqBqDmS3YgjSa7gpy1bfVBmcN1S4pty37zjVPKpQ",
  "key4": "2CrYcfjLmmYw3JYDoY91dkXaMrNzTyGk4Ndh7GpzKtCPBQSNPXcReXpNPSsFx1RBX4k2kaYp9LCkyJcRChPzqnzE",
  "key5": "5nKH86X9FK2GJVqmhRNNfbFaE5NhGuXwWsUpXg7XDf9hiw4v3b73Kp3mV1RzR3ct9pCrDjUYn6UdKBeAykVEd1Ed",
  "key6": "3w4zqweHyRJzdQgQBicdjg4roWK8vDLSexoBYpm4o3KonWTxChe6bErS6uBumhuERLDc9JYxJxRSRAXAP8aK4t97",
  "key7": "2cV4v4FTxUXsCRSw2GjqxsQh27q4Q6QcrUK2YaJhwZ9S9YzYpzpDNw6TMkgoc2gvYraew8iPJD4s4aT9BSjCTsYQ",
  "key8": "3Lu4tpdnAYpfTXBBv2rEWDx3v6b6Ysnh3PYcSSRoYvSXi1uWCMry9jUxrdPA8HuT6xQPvzLXs9mro9YLFauJimce",
  "key9": "3ipJTAjDrqEEu7JBkvppn5NrdQk1fyFVeJrChauxFdmP8fsa21Awo37anMg8tX7dsZNqpRPn6u9Lk7CbT2vvYRo1",
  "key10": "4FcNnQ4e96Av2f1xooLaT4PMbYdudtcK8EXVTJwJ8S86oiekw8xykWdsXrYD4tk1pUUuoedhieLpCQJK4S5WDsZ8",
  "key11": "5zVuzYcV2UgdAXdRfpsn6N5THbmdrUssRcGtUkRDspfwsugyFr6TD6Yb2GFdxkAXQRLuCjybCSK3WrwccwwM1ipM",
  "key12": "63zn9f2Jy4zbyDjNyz75yywpXuXG5yqtrv52cvanpTERqSxZqKJNrcCZPmQYEEk8dmQgTmkoQtdbkqVZ8mmNMZRd",
  "key13": "mNNXjjTmyPmmFHwftuUUXSQUzPU7ynsGAe4DGSzkZzf4KBpbu6iJNs7Sneh9UwyUD6mJ8BdMUKJ4AmJRrw94hrh",
  "key14": "2PLPjPXXPATBXStTxdDKnQ9gphnSyjgSfM8ZvTRwD9dKConh4pWBPua5Ttpsd8czuLS2cUkyyvvzw2T96C31VVUG",
  "key15": "3phQMkMScSzNxy4JySzNQV5qN76QV7Cyy1MgaJgd1jcTXBLZpiEueV3AG4Hy4hZTJARpQ8aPC9MMuTfjc7K7gpoZ",
  "key16": "4Ddw9y3yjAvwdqcUVQwFmDAfEvoUamsBaG7T4tJVNTvhhYP7ZsJtk8Rdq1wGAKvQvVwnQVbcqDVTzGrjWnDhGKXg",
  "key17": "4zqHFVnWkLG5aQhHccNRuB1KbTTyJrYSLSU4F1vcWK18JMo6eYsZsLRFHQxkcpNi3kyvD8utRYdhHjGhce8WsE2g",
  "key18": "4zxYehDQgP2Ey1n8A4jMo22Suoxvd5jBZsM4iDmrseUtuRNcmBR9p7vN4HQz7dLDyUWZ1Re3X62oyn3TZr1MFYPa",
  "key19": "JoBr5Es95VFHTrxg19gfNA87rsgG1RnBeKsLTiMY1kFHU2Wp121vp4jqhiL4boca5k59u2TMMm7V3QSd7ZuGrzS",
  "key20": "XmRk8y34RjmHb1BXXzsmGDivdZSYpxm6Vhrvw2wUTVKArU8rHQCRBBU7eutEqC7EVvUAubKAvpeStDPNHjFje5c",
  "key21": "5w5kpRBmxNJHARBJoTNKfamUYQqoKS8Qy8doBvNWHgHmAfELuJehqRJHDMC48Rb6nadh86Yp4Xws7xXuykSGCy47",
  "key22": "4nu4DM4KsHQb5wPmD7z2t8bdTY7vpmPZnTGeEqdfDZGJzjqxFXnySQWPXaPiuzj9gZsuvA3EK8GgK7evSkJsEPe6",
  "key23": "5qFHeVNm7rxghyEdysVcTDqAVsUCAP2ADj5hG9GV755TmVkhhP9vLmQqEV7kUA9xnfRQTBoyxQ66dZ74JeHZUVZP",
  "key24": "R4QrbUkYQcbnW5y7LPhN7yLLJGMqLHDot6tnWwReevCjmetuLPimFwabkL2L2sbWMTCWgS8oHRs7pJbUnvuJs5T",
  "key25": "4c2mBkprsuZ6ACHJCQD5sNcNUD2sAZSg4yftk6UM3Qxn5ceHFSEwg1WXqZzWoqXwXd4FaBpNPtGdD5EHVdeXcmoF",
  "key26": "4mv9ipoiqA9Gc3Pe2N9X43F2mJnnLmzugtYRYPkjN4djGWGPdz4wqmTKva8gitLf5SMwn9futFuJ1CjvWS3JAC1G",
  "key27": "2YSqe5PrWaGg3zSNKQNi4VePxNdR1GiheN1gg4FDT8egxLriHP15XxCpPMpP8cUVFAQJvDjwGo9rzanrJS8UQco8",
  "key28": "5gj99RggBwcUHAD2vP5B1z8RoLU7xNV6bHxXavsPGf1rBqLvP78ggaXfDQFi7tHByp35WktPUjsLgy6fYxiuw2Wa",
  "key29": "3tuis3UV9fpj1DTdzdhsSSiauA3Bq4wboSsg7zJ6m5wtuM4jjhCTRkdqCaiCQ6DAEouFeMMAnQHjCCZnQb3SEDDC",
  "key30": "5XfvArEhADHvuiVLC55HEhAQi46uokNEsnXEGRuD6gS2eHGqyzrdXwkPohhxfQpHr6bfjRaCPnhN9irYshQzoDe6",
  "key31": "3366GrA8ypcEymPcZpgBwHubZabfYnMHYvooyyJ6CWnSzTZnRxfJgfCqXZkQSbgRa42Jfv73pUvoY7VSbLc8v7XH",
  "key32": "3vvBLe29XRjvePXVsHoSngXM9inmjurw21dxngvWycJyeJ9VCu3keckYu3vRu2xvqFkpUrgZwtN1LnbGzJdkfLiY",
  "key33": "2evDe1wvFn7UASsjgUVQpfDeCALrQYYXudsFTGwmZpN7LEgnis3R2v1YUzoR6dR6UYAAvuadk8tyT5gd45dw3SkL",
  "key34": "3ADPmwfT5u126UZ1D3norVtPMgU74tZ3PS1YvdN3RLffQmuFvbieHv7W2jY6jozNkum1MiVqSn24F71C3Uxmw37Z",
  "key35": "4U2VEDX8HScVcoj4HSn9V1mbnscbwcZNudeEip4BZckV1RJpFVEquyoECdtcv8JLKe2Le4Y7qtieKG2HhFZB6ftr",
  "key36": "4BChcxT9byv7BMntK8s6Kz2hyptRg7qNBYyq3QfZKQ7mCmUzBAdSKQmY4SaZGNkP5wQnCeERrWu5rGfR6htgDpuC",
  "key37": "3Jt4Dtf5jzzsV5kGDbnZctWtDpoUZD1kiNkcjmA2S55kaV3Rbn9G2rbwhnsVChinkVhUB4h9DeW3JJ3yQR3HoQ7q",
  "key38": "3dmePzVoZkmWCDD16vRvLkDjhaFTVQAAHPq6jnsXt4wCccq82Scp753S6fE9qhj2kYT7ZjBXhGopGWLqt58t1j5N",
  "key39": "66Vh7mSjscZxscjPfRYJNK2w6XJr9r1Wqhxf49bMytHxVf7DhDkCNQvpyiLasyY77axNreb44ZWj2F6ZG4x2q22q",
  "key40": "3hVFNLavgLbSvDJ1kUkpPaqVtbdytSDjh6Bc4qPb4V86GrcpHTs9sgP1FRymerCFFM1Loic11sfLqZE4Lcd8PK7X",
  "key41": "47qzPKdHk6XqdsFWPsR596bJye9J8YR3kLZWqSUX5SUQJYB5ajRT993g2nhEwZU5T92PJurJvfZ17a3hVt17B8jE",
  "key42": "4vrvSCxiuRnKGP45kGPKC2YrwPa5TBWdm7ZRyQaHC1A6jXss8gbS8Qdw7vbTXM6FA7wGoseh7tVCKkWBeFVw4YgF",
  "key43": "4Ftyq7DAbmaS9vqqbg4YHLjjYcBwJTMeUQ68AdaRELM3aarqxTbMVh3RX4cutM5cnmghbKBhayiC8sjLPdrW7LRk",
  "key44": "49uTLvCBwJJxoj2JCdEyY98PXwkUNhukVvJ3WV8KN4P9tTLhCVijgfz5FTbHoyRG9krCR6GGXWNGNsiGwnb65Qa",
  "key45": "3n2NrurQQ4zUr1U5jqkJm3PGkpTxozi8iyn89fsSraTkhW1uuKezoePnNGZXBN9ENgVc6uNnbhrfC3XnJ4FkKr1w",
  "key46": "3RSoftviMobuE8N59MFrVvXrhdxRpUW6wea5ACsNWJMtNFVDvfxdZe6iFQ4SpMPaVFdrmoQu5u7KrWm5NqFgMGuv",
  "key47": "3iLG1djgVTuFANx7gbeyJt3Fi2qzEPAWeUAhXTyB3sjq53VPWeABiEjnMNiWff4vxiFFMaUB8wPgTxgHdhCfxCen"
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
