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
    "2RstTtZfxzW2LRWcohzwv5wEz3NEtttaWTQwsduQ8tWd7nLVryacAQws6gkNqUtwPBehuf1VNan6KgCtu5eaY8xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "apBDxQZenv9J5hWDt4HT5juHePCe154QWk6hiAqRM54igP3E1DwdHPKvZiHqYgpzFwhovg29PEEnGXWGeL2GMsB",
  "key1": "YjqzmMUvfTJsssqvNraaHqTyA83L6ZiycAraoXgNhEjuRc1hEgQZDSQ8JjaxDVeXkBxsWNc1vLKpw189byciokL",
  "key2": "RiGMCyHUU3MKw3uwDusg7H1FJMqdXBhDRJoGgGJG1NsLNF7UrXxzSoLRvr2aKzFHQx6zKUvi5SHkKLWA353hJNe",
  "key3": "zccDGfXvdn13uSwrfdCbaUMynu4gUayFNdqmytXUGQ3RjcDWMGDzAyLJuRPj5tbYbyRmxywjDBP6RW4sC1Ez4Qe",
  "key4": "5CGHSiRmAkSfAZynxsnN9gvA2atiGwoeAqvXzyrmK7meFyXMKGRJhP7dZv8x4kTTW7BnVmJvGq9c17i1Zc4CDmP2",
  "key5": "4sNV6LvPPi2roNj41dHmnZpQgHy9k4XdJ69dWafhSY22cdBatDf2vabJ4jDKiedsdCN1HLpL42PbSh9iMLat4KKZ",
  "key6": "213ToWZhyFhVVpZ54R6DodzWpcvmoR6mZKF3B9pisejKgDf4DytaQqdyEbDWua6TpTCCZgx26zbZUDZES5D2ooZS",
  "key7": "5tMM4aNpSTuhq4qgXjo9PWPFyyi85dsJ5keDiKrdLxHUGQcn6jYVr8XVpCg1f1mpvDWuE4hGwMrN9WrZM2fMQmWq",
  "key8": "5aEdsTiZD1S5gWhUayDQFZy5wamGdBhNWvSS4osmTYJTLxbj6Z75FVJjY1NZDHQYU7UoY6E3ZKJmbbEsmcJPWyxU",
  "key9": "mpKUpeQgkDpemupYGZswgeFxUY9SKp1CbGeUajTezXUsq2YRjxEkwG4gjhDBZJkhPZEsp4fcYL3J74ktfV1TiUx",
  "key10": "5J7rQE8Vgh53cfLviZVCrjNvA4hwgDCm7uhTCJVJ1mLySGnHiQGUeCBafGJ7AAvSfeAVmvt2cwK1xmVG7RjdzEv",
  "key11": "23SoMeaUaZtxERiNF5p2g26e6J5sUjYvcWzG73RmCYPUMNTVAXz9QemjjNJNb7BDvJT4kXos7ZowJShpkSW1LtQJ",
  "key12": "5CDYBBhpom2s3aDPcEnhFkuhcFRN4Xeu4dvdWbwb4M5kXFS8h4UU8JCNRbZh5X6Ua1nE2vkPsBJYcqCJEvRzyr3p",
  "key13": "2AYmyyYCRLV71LMdhMuQhYP3pSnSdhArXoBJtKxJKDBTitFebBxYRs15Fx9cpMDvD18yDuVf4XBJnJ6jbGzQb9dd",
  "key14": "4vzmv8gfogw5ZhGaaFqrcxR4t4FJaxuGPaqsefuEEPy8g5o1kqPokEGeHPpiRUHB4JxbwGzhAxHAacKayCRg2ZV8",
  "key15": "aEu6FXvkNQCyUqiEcjsrGWFg3gy8WHUFyJc78TzZdceYfhbW9tshbdGvvnQSLjySZedRgsLBBaobnWGwxj7BGZp",
  "key16": "3km4Zqpkj2Xur2Er2gusNCNRYiFseT3yakkQ8cQy4F92xwtveTUpTP4VWjv7yErry6tgaXxA8CSZP8FfJbWHfx7y",
  "key17": "26AuxHcbjHkLG5pPkFLiPQkNTH7Fhh386xhgC5KGX71qnnDo4Mdh9DENaH7WLpv8dqiKPNYxu8jjoeGtWyFFvaDp",
  "key18": "58PhHbgHauDa3RuJoZj4nfZqWkWck9hs7FcBQB85sA8MezjVoX5HzVf6EH8v4sqYRGVFYcRiuoSHB8VnjNEg9jLP",
  "key19": "5NwHnG4ZtozdRuXTqcUyU887bhipPYBTbjD1XMtYMuwjR4LhxyjdzqSjuft8TjJCYcDHYsoSfdRu3He7xjsiN4XE",
  "key20": "4sq1tdVaMhXux3Q2qxnibucJKPfd5hgteqfRtauDiQrL46sbKe6uxbFEQJmaaYiypr7ajWPhSaJaT7Tcfj8ABFnv",
  "key21": "9Kp3cUrwy3iMsKKFQ2tvsuY6AZmNdwnQx274tHbKgqFafrsBiYiqpNb2wqHJccCjJCrpAAumT1fbuBisNw6GUPz",
  "key22": "jHUzz1TZajTjTsShEe1LnvKY9RJKua3sJcYUpW5DasvwN5SuBe4yoAz6ETDVMqWfUAJSN83aFGzBZYsE9gpTDqr",
  "key23": "3oarEZoW9kWCo6noa6Ru7U1vyHuTraenE7cmJGMoR3bLH5dgupobMnp4d9vB5cE4ZKt73z5RDcJz4KoazsLbojHj",
  "key24": "4pvkgJQhhsMJoQX7gNC6APBvcvxmY4s7qoaVtKiiAe2SyRdHRZ86EpBmV3s37mPVdjJroQxeGVPZHRaHMGcb8qvL",
  "key25": "5oMpzaP8zsuZEVeBLdoqriiZMNyYP7UGYpojtEQsXyrWvFRR1rfstW2CSZeTqquux1LHUCgmGKVSs2A3kcTN1gz1",
  "key26": "3rvhawM6NbdAWjEeMhTEsjJtBmYi62mPqnpiAGhUEAS5uauGHvLq4Bz6TjraDdnJLqQssq8CKb5T1XqCyKxwzVFV",
  "key27": "3QqAGmsypCG99RHdkneiv4GuvBVRdZscQ7eftdTQRrsSWNNYtNGMTs6HHqPT7AUiQymkM4Ea2C58pSo3ZWT3RcJM",
  "key28": "4N9qKQPKag1DcMu1peovYCH4kc9LDpzxhvhcjocyqc4m7hZVfRj997n1fna7PCFETfuoGDrYgAVrpPSsDA5uTA8C",
  "key29": "2WuSqNFdsyzKmZxpcbsr9xwJ3tyk5C2NghVTFg1BK8MgdbPzJ5yYvxkFgLgYdZrjPwFzjoczuMZx4XBAWJYw3Q1S",
  "key30": "4nCRoTcVTXncXpkSvuPssUtwtCUFz82EwhLtRr7PKm3ZfwDmYop6g8R66rJG8LazjKtqpPV3mv5ZqxK21FGkNgAf",
  "key31": "51kN7BWPT4QKK3eq6d4sbCfcQNzcq9Zx4jYNRXSuCJPEF2NxKV3q2oxVULULLRrTkMe4Aacc52qixYUioA5yMpsd",
  "key32": "jNo42jWDgCWRchjG6CkwZJD53u6X4VnSac6fwzgQAHXFWbj7tSSxdSQDeZKEQnzdNr4qCUS3p1wtMGmxJ7ANoPE",
  "key33": "37u4synD9GvGY3tbvoxcCxBik6x6trtQMA4cY29FBm7nceBS1ENcZuYvhoGA9Q1cZVV7v3NcBkVcjxpwjHueg1xm",
  "key34": "5DzxftPJkvH5xQwcsPyNZC4HCFC1HkfBG5WWZWVu7nM2XTUX4DaoWH38YJ4BwY4s2wmA8uMfSVQWf9LAH352tuER",
  "key35": "3fogBYga6eUWicALAH5ycMcRHLs2znS69u1UCXmvJCNLbAuJt8AF6Xqeg3e5tTQQoSmVeNFJjnsrdDonqDKwVbvj",
  "key36": "5hndyB2FfH8NcjWUJnE8YVHa2MyFd2NdSvbSqMwmkktsyDh9osmvQHP1dUuGFEYC3LDgnuohyZHLxHkF1CXM8TRR",
  "key37": "43GTpZAPqKziNakJvbSp8N87oHDNiUJqcg9sTJUZVLMjFvCLWJqfpsLGvLzbtFLwacA5V6xjdeaExmn7LSk27E1j"
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
