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
    "5PaS6CaLEZ5F8YhBY4pMjGPE94HeFrneeaEzcksm7K3WFkYxaz5RZuaNn6SJ1xZyvj2BzBJtLXNwR416Sej7zgY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cQsdWFPrJDqbth2vzSkwk6vpvfhMY2WwLW1Lh3F5vgdSeEzdGgnfbGgVHNjoyduRGRworHJkEVoSvpRApPhWnVC",
  "key1": "5UYrFmUSRsgT17r8g4RaDWCdJgSxQzmL8SdRhgdBz2fUdgHGKqFkbNYn2493yhjrN45rPHrBTDxYY9kQDV1jnyM7",
  "key2": "5xqr6AGmTcSz7PhQPw8T2zGDSXRSc2yxa4W8mF5MmWGR3EgDj8MotRSzzA5iMMNVUi4WpgHBFyZdtwMRA9qmacu9",
  "key3": "4eNavP2McjDJwwgK1DrviB7sSoaecWx9KvmdEBQZeXaydFCRYxfR3wFgpWRhp41JzKWAG4bwjRRnDn8Ej6ipSjzd",
  "key4": "4v18Dn8Cuyv1o97FtptCFCfihKXfVe2Wbe4jkedpBXFedjhj5mE3ZaazzicMVeqAq9FrtTmrSPpXi48udAaKspUh",
  "key5": "4yg48faQ56MKsAYzeLCdbbU4r5mcMv2YpTAptZQKFBLxN6PKaMYntbARbFg17WdAJhAjvJ69gYE6cwG7y6Dms2hX",
  "key6": "4VeeJWDE3QQFCpxeQRDtPbVtbRdHpXMDN8sT2qUEzz9Xhdb7mEwhWWgy4nzRddTitpEBd3FkpL2QvUVoRmPXSVgN",
  "key7": "3SXYRovQbDJPUQLqDh2WS6NrbdqfSCsSpgCPeZYLrw3BZGNmNAycaDoiaJAax5XrmBg1Lii3LaUgYM24ocSvDT3w",
  "key8": "3gQLoYoLaFL5wMq6i54ERTkQwENsjt9DYYi3JcTgLHqV3B6cBh366VdFq4fKgxChct5aV75psceWAiyZdM6Zbq4y",
  "key9": "jiEpSAh2zjkiUeoPMiGxNXRGDqc4CBVM37V2vVdeTEwQcMZNAk7CbnYUfHo95vdndeChpmRvMMwfzdk2FCmQAEW",
  "key10": "2hmEbCVgBWaDXTGeYcKpZbBRGhEhQJWPH8jwQ6J1hwr6rQ614g6W4ojXjAEVhkF8rEhcCzVZUseKMdRV6m2VT2Tg",
  "key11": "3wFNjW4k137LNHGDCNRrFbEpkuZdSoMHchzMxerKXLCyLQ97iH3BQL2sKefUx7KVNj7ABJYVYM12nKAg7touRegK",
  "key12": "4VzMnGNVXRkRv8ZxqS8RSLG4vgZxjPStjZCVZgAoQtFnLUdbSK8dEcK7rNgwHcyEyACBwwTBn8ov3wi3csgVmR1J",
  "key13": "4WqcoS3NXvioADw77mRqZQA8zLHbDjiCJk2MwUej4vMEk6uGaBWqCxv3rJbFYiBzUnN5we93twV2UCwpM3ZP6EX5",
  "key14": "3GnAendyx2YjwfQKmZ4RPoTHA37mVipyAAhcu4qqAznNZ2FcKy1Z1n1GYtiRTKVpfGTMCB7y9ZZMEf5QqBqd9h3M",
  "key15": "3gsDbTcVYVgCQYFMw3ScBojquBbE4bEL45Miwc1MFyJJ5EFP4wuvmVsBt5aJLbDM6Fcz8zSZkLmwuqqjtYiLUJ2K",
  "key16": "3SCsRf93YSWFPGQgi2zegmz1kSra6TicNdYuhKw7bUK7Jcw1HC3jWzng5E89r6ZP7ZidaAzKn8AXthj1okzSWyZw",
  "key17": "2AhUYiBcpRQ6cCudCbXyCdHJSJePEiKYXuxMhVQrmLnjJ9jQsZwXKyqjtrSCM1AJTsC4ebW7xF8UN4S2Q95Ch9Cn",
  "key18": "4GQLLmHmi8Wv8tmdDiGGQyMz67CFPQkkBDGLmGYcFvW3UhyCEBsLDBxHL81QTza6gjqi2AU5bfLsGDf42BFARkLD",
  "key19": "yzvvnbBddJV9tAp76RtdZX9Li7Mmj5LfCR11Yjfv7AeCftAxDun3o9X6qyNq8m33QgGAJ8rwXoJgdzcS9gK71u5",
  "key20": "5msNTKwmyTK6vXzUhWBk1UzZtPEzwCSrCH3Qv44qWsyrb5eRNi6uosAGaxLqqruF48y9ynCwuHoSfRXt4JBqS9h5",
  "key21": "svTdbdn6oQAUyq4enXCsWvhjL3vrDuapyvbAynUw3fUpVUCx8AyLWnLCa17mPiFqELiTsYmME9bakcY4uLUcmos",
  "key22": "36uf86DSQbRS3HPkfARCpNZZZWWvQpXF65VoLde5D1jsaRJwP5huZzPbNUHrTVums22J4ZfgkwQeFDTjhjYMQVWv",
  "key23": "uQVk1et8iNUdRuhc7Pk1R5RBF5Q45844MiDuNMTVrhKnKVpZU49TjNqRuupqoHDwx6rL1Qtfe9MKp2mCkZxn3hM",
  "key24": "3oX6uaWfLHT5PcvdQ93oxCYf6diA1nnWvv5gddKBsuunNJYJcVKbzRMj7GhTvWy7gEuhQ3361bvbUVB6FPBXvgwb",
  "key25": "4A4q37Kq74KZEDeUVtVNMPmS6PZ643PDwwQBV9XYvHiMqUcxwrubug3J8HV3E7gz4UKdfp4xbzsjcNcfAqbmp1Jm",
  "key26": "PQCNWtGx8YJqHzHX2477DdY6Q9F2EBkHN4aFurFsJfyQM1tY1vU648wQcPWYF7LwBxpjUoGMN5YgATVMHUmL2LA",
  "key27": "4bEas1rWuXENWdEu3EaaqfRjVcmxx1NVYtuXqk4mzp6Co2tbbmEyDVAQNjCwFDyMtbmfj5HNL8vqNPZ2eMVncBCX",
  "key28": "26rYVXEaYtis2MFtCETvS1JkWBfahXxKekadBGcmuDLeSGEk53E6RTNeUGEPtHAijsx7Qnt8cWY7A3MgCaF9Qhrh",
  "key29": "3RJH8uW4itHUGDZjDeJMiQfAfMm3wyzccjM8LAoodgATgVZ62awX65fkD7WvKC9Gqu8KAtSmBjaWeCrRX7AHNrLD",
  "key30": "5UQEYMQg3zq14zxQtev76qDuHoU6NMEVZUQztyN85CEYSbxqMq9bQspFXkyJ3tFVhcAHb5NhYXT5SdosQwfKBwDL",
  "key31": "15Qh2d5bW7aWBE8kv16APXXRcx6NyLX72vvEqwxYPwSov3oAizMRmfoQct6p5783u1tdNEkugiBkswGvvPusTUr",
  "key32": "2yqWBtMxfVXqntzCR3aUG7NQgEY8Fg7sTEEf3Sqmhm7p9ZbiS7RZSotJCcye1DuoxT6zm9yY21QnL2wFSg2e4ggG",
  "key33": "3mgc1uLtiqhTFrm3BauzNMEes3XCoa2VEuXmYcNZNGxqiWWr6jhuN5uHChStNyMi2CDpsZmuf6b8Tp29qBPCn28G",
  "key34": "62WfDgYWqNDu7nxqEYeLtMyYGpccP9LAT8D35kk7Ffen4q5hvuRqh4HtZEgkesjz3o78gngvdmdzAm9Umxq8UjT5",
  "key35": "2YNshEfuB2n9LdWsgiDHpCxYVMgx61zMVsEwLVWtJrvejxWMuUc7o5KhwxQdkhaoEAh54VcyD3kwp2ezm3eQrhqc",
  "key36": "4Kn2UGJW6YDZfq3QU65EphSKBZdAaPjTy3tnz8XHsDia4an9RgBCTzmHYD52CTMCZt7QfK9YxZQCVGJTBu591D8E",
  "key37": "6fHh8b4PwoDDA97vo64gnbMR58GKHEFwyfJzKVwir1HyEaivR7UPrVRfNK46iXB2sA8CrdTErV4dJaFQNoUVbiH",
  "key38": "DkPMDXWV1ngRHSY6y5nhprd86ubvyRELAnLBeLM83tXFaFipUPrPXCqBP6BAduuqZ4wb7VGQfiqnjrKrb3JRHqH",
  "key39": "2bkeAmGPp9zvB9C8KgGjoE8bz81mTtDGPSqfXNYaqtd8Lt3gB1YzyA5MWQYkL3JuVUfxYFGMUcsaMRTBhE5idvgb",
  "key40": "di1vS2KKqHSkDtfFHe5QYrp3WaWh1xv6XBneRACdHMVyNaHaMBePzBTxgktnTvzVcx67Pzny3esxEkiejRv8Q3D",
  "key41": "5mJQhKCPu9XY7L4EAFQZS6nbJHQNuQin8TsyrCWYV6fuM3TVZr7n65fJpbBxS4qzA1EpPMcWn57jxWddDHNUhirg",
  "key42": "dTMToMjSBBcFMGkCz7WQKp5RY4mhzcUYGAaPwPqXyRSkFeWDZ4ghMLRdHnjNzadfa8jVhzGRMjB4fSGNtszVt17",
  "key43": "3CyVqY5Rrc6nccGt4TLTsJN1Sg5F9Lygg83QzN18jbB4Sa3uL7nov6HcEq4fRhRhGm9EoanUiyX7wE717BEkSXPb",
  "key44": "2XeWk8t6r2TkmKEPPxGgks3WG4CdyiabKfBhLucQaQ58PxQN47A9iH1C7LfH8rkCyHizrCT2nbCWogxgg7Z725EQ"
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
