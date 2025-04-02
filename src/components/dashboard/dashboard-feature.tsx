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
    "kdXes5wostyxyxsyDDEh687X85Pk7DWPRwv2587M97X9aZ7iF1WuTSivgooqhhHW7nWdSioaXFg2F8vgW3AKAiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z8pz5Dh7hMxowLfFBsCYwtHTJe6NASaMKjBC14ZmztWSTBKt7Z8wJTfFXcntf13NWN2FZ4TVwEwHRpBCZUVGRon",
  "key1": "4ttZL7phP4rvwkVyS9qseu4YsuwF5HWTQJD2z3ccmp1rKWmcFQFfP5ZPscdpasiu2P4jUBPwLTUKzkayjvPN93ZV",
  "key2": "2FS5AFLnZsKbEMk71KfMzi4XmV7yJSjgcFMoy9pUmqDWGMX1mHjr4EKfGkRU3FQ2XEJKrE8TRbttN4VdSSrgkVKq",
  "key3": "2aiwXQ7fMLtyz7V6pyLrJYFWsrHtCH3zkoDhVM2UpRuGkFsqUsoEVLBPxiw2QdBKgfUhbb8k8DRBZxRgD6x1KDda",
  "key4": "26TyocHYn6wzxfeeKt9P8mxGhqLXPWcX1ZXG4PBvJNmUz6hbb83XmbTaGB6gpBkLDmAmKMEVa6jUq4JuvVutKWyZ",
  "key5": "B7Xwi7wxTk4MPXZTgcMCqcBVdEjuSgCwuS9uGWaBfS6zhsJb8YrB25EYa3NvA87NCYbt3A5PQwraKsVH3XtXNAw",
  "key6": "5PcAa3JEPa2U2Mthnb3QaWDZzVpY6UhjbpFr9tKmkhVzhpJTDyrFUsMUj4oAd1kjyFLRiNRWXeTkPwPvKAHcNTZ1",
  "key7": "3nbBwsf8eWXAqoZRGw4wrWNo5pJoVpK7iJP5msvCSQqAL5CCbsrqVgHwJbKYfVQouciK1UjwSGh7hGssBMmvuuAq",
  "key8": "PH4hsPPfuBe5XdXSvKWKwd6PEd3hEbF1ZkbekXZfzwk3np8xNaP8DRGtwYLHaQbLz4aPeDBgmzQ5UXQCs7SJman",
  "key9": "uFbgPd5BPHjJ8BUBNMNyVsohLbfKLTRkLHT6do4jC8kw1zBeTJL2ZTPeVgyyaWRZcakR2jkR8AGfPEVsa5mEpd1",
  "key10": "4UTrYVWjrRFmREkKWoczJJEa5QeRbQAZWDUgTo1QPotn19uTWgDTD3h6PQ2WXx8361yvQxEGeLqR3EKkRGH6Esoc",
  "key11": "4LkdNyzDfx9kwBeR6q7TVxaBXxNKYqHBqpyzG8pFfqmBHDmwFRKAMTUK4y1zbcJ2us9R4g9FWxEi735fBo62nwae",
  "key12": "4D94D1L2Bpz4Ff7t8CChq3jCLp2zdvfA5yX12WaPRUiYfX3kPUbCCaKYjHo4hrXw97csEox8my7LArRgYzzhWeSm",
  "key13": "53VcRTNWGqgbZabH7vzvU6ahxthe9Qphx6Fx9D2DsTqmDrvqou4ghaTf5PetgkRKFg9HWFF4ZcQZ2cwU5TBzWHs8",
  "key14": "27URGP3PGAqXmLzBR2yWaocnw6DPC4kKdFotC2k73UZE1YS6Q1vPBbv1SYRT796W7kGzjih1oJAosYY1CCpZR94e",
  "key15": "fNihs8BTT8sWVXxyrDqwgTTmcckouPCZwP8Aaxn1Nt6vgpstiBkRre9kXQtKPwECXZ71mPPdD8Ctboh5NSZGDke",
  "key16": "2mGoGEdN8WwxZSNg23fA77b8isFDbti5CTJsCZrT7GjGmmByRMj4LkBhY991wqP8HySjLAXDSvXi5Ci8MQZYrSfs",
  "key17": "2gwmgzSsF4EJvL15scC9uEQ7UGPrRAuRUA8eDDjnwWJ25bcJ5rrD4XuEBLTkiadkMRKoNwuiGWg9Rn1PE9mQzkte",
  "key18": "2YSaQTCAbkDg53nXarkWWS6WVbjXQUXbrdq32xzaNLYS8U1nbRq7AfpmaHwk7XbnsHqPpRoKJovMFYZDuMBLB3so",
  "key19": "2tjwh3Cg7EtxtWZZW6A2f5iPZ5q23yyNkDufs9dQWSXZDBovPHzT9KySHSca9vgCMNrkafHCzrKfHWzur8r9Anmf",
  "key20": "5KKQ2DbxZVT3uWPztpQHrhN1EpkfiQY7Xgha1yu5oakjkqbn36TpciN7K2yW35nLWewCk1riuJDQdkui2v9CFtfh",
  "key21": "4XVr6ygTdZdAPm93uTzxF9uwcVYiRLfgVmtYDM8CiJ9RJyinYrYyGZPAJfg1HVgxEGr7ggiTYSqsg6s5vZJWsetL",
  "key22": "Len8Ro1zBatKR2XBeYmH94big5u2owbfc2vPyAMSEVFGPw1W76cNskBvfufrbfZJHfLgkJvVKo1daH3L1FPyfvX",
  "key23": "5L71nYkVLC3Y1sQ7n9Xzuh3rPdY63XdvLyZW5LLrD76J1MFx6enjTQfoDZyv6qWXZp4Yf4dVxjtDjug8Cb3fWSRh",
  "key24": "4DPqf1xHQdX89hpN39fg2NWsG373QafduEeran4r8JkB8Gy9RofFEqBiKSBRgiSbEoGfJgAX7VTViDpJJdVRo4jE",
  "key25": "5TcxSKj1EXDdEAyrGtRT7PsVw5TQZJbZKVbTj16z3wh6o7ZwBf9zULebbUyxKoEpwQHLN1VXYi7SrGdxGFxy2rq6",
  "key26": "3g9PE6PgafxCzsCheD7bM4pPUfoMdFGik2hQUq6B3zmjQsegDP4ZbNeqficsM9q3FHPXxtVBK3UwfVDUA5V5axTU",
  "key27": "QaNaHD2gMvzS2sApDoQci9s6kCGPcCN6GNWoEAwGJv7TGMJoZmMtwpF91a7FSAQo2yG9gx923G7Lsw8j7JKTqjW",
  "key28": "RC5eN3cN7wDTA9wY5bJchZH2yLGfav5LBSLw2VU3UPGM8DCjXWBNnp6m6u26PuYyNmBWFRARnt3kgvRfKbGHztS",
  "key29": "2JiLkyMjJy7er4ZCJqn2PXoRbg5BYgQ6j35tSBzYXE3F6XgbAfQFyVQJApU8tQ8pjqpx1VfvMx748rWR7Dr5zass",
  "key30": "eCJNZbe7LEJiqvjxzj7THAw4HuCjmpQ95sFYdFs57ehSJQ9tKk2orsydy2Ay4f9Pa1Mho3d7Pk2juH9VwmCasSX",
  "key31": "6765d8YepqSMmdNoXhJj5gkCNewiAfG8BmFg1BCyCGhRGMELqjzzaqs5eycKfaQ14yLbuS7cMVHeXhxsyKdvi83S",
  "key32": "4KJBJvVpSGjuagnFdHFndKo1pDatyVGCDdT31xnxFtqdcFRndBjqWgf7ZrKWFvZzyJrF6GSETaBYAVQgJ2C8uPQq",
  "key33": "4JvB7UpT2Q96hj9p7kgGn7N8JRZujJRpcLLYQxKZdoejcMiNjCtqpEzgY3y1zYFhGQBQ1ymHWuwWLmm93dgoaDh",
  "key34": "3bvkNmAEnphf7SUf1mpiXRRwUzEyzzmeb3iMUo9HQVM1d5eeGCq7X5uvtQps2bLZ9E8xQnjVWUvFV7WpNmsvhd6q",
  "key35": "41uumU3AnMSe4GXZjYmZHTixMSne6YgmpH1dV59ymYPC3jYAHSD3s1KSUJZzDTR8v6tQwDv9WT9kLY8SLK5WrH3C",
  "key36": "3gYb2S2mHxE2SMfk1AhtBVLZXM5TAkDwxBnvqHmrVWiF6C3DMyzRa9p4PtASmqKAwesis75HtBU3KqmbHbhcYKbL",
  "key37": "4P799K5y5sjRssHrf1pzUxncwthVHABNwa3C4UzmxkxzhfPqpLgpECsgmmXRN4g5d2dGEzFPWb9Bm6WzJUPTaPUS",
  "key38": "2PDT3J84Wzvr6fbmUFfiimkwjVhdoxdmyrqHw88kX8HYFiVRQYRm7AvYYRgXAZKG9SdkZGRRNnWGXh8uqowAoKiB",
  "key39": "5rX1CpByyJQvpYBC33JcYe6qayf2RRhTCtzVKm5k38Po22x2z18oZKQAKkDrHwvjQNqDyYcPWsPnR4skfw29qrLL",
  "key40": "2Q7yEPkH26iJ94dBDzRUo2BcZn1NhBshhtScUZ6vpcsozFkgtopjysvKRkmdfb5eXuZqwBzh2oSCndd5aTtS7CoC",
  "key41": "2EL38vHtQWcbT2JP8mCiMeVonBv6K3vmkTMWrEPnBnuovKACsCEmVThWbMtKmmpdoGe8pjnBxcgMM9MmK4CizgD9",
  "key42": "5MapzMasdiiywMcbu8iNbTp5VjSvN8BE9zdUzLd1bDgzbcT9UcNymPNr446cvn8zRsGVcdwQZr4Yib58Pk71mpi7",
  "key43": "5s9nvN2f7NcuPDtyNeHBMbT95uGpJcbRwm5QABCp2YzMrLv9AaQD9oLqE43cxBBPHiPVJQhrAT4fZEVKHeKcG7jU"
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
