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
    "5eafs7NhNaJuB3aTy5wUNT4RufhyCiEA8qLEHiQFDSzZuj39pNQtKLnyV3FjMq9m6F9VHNeymwv4NAwCYvkTbbxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43NJSjEujWYUBvZ8DjZ78Z7F7nnVa3i9KTkAtV9k2oJTdmffog2zc2YSDfkZuknmzQMtFaogk9R3TgENnJzjXBnq",
  "key1": "2x2iGgZLKFJgtUCibHmvQt46JKGhyvT37c8CVhx2APLxbNjq1wGAJMMfcaaicemLEryPr7DDu56PaAcnwVZtU71y",
  "key2": "2cWztBx6com1SUvBWrRRCSP8YqyRcb1hDVngRZiZATPoiUbaEzjgACCUDaLudC9Rt64KShWnauZ3pjBU6WYpDLFs",
  "key3": "5ZgZEtWpULoFLFwfGWrFB3wXuPDtxLWUZj3jHwSLuPuasmQF7fkYTyWNkkgJEeU9AqbWaEF61CPS3M53WCNrDnWN",
  "key4": "4JBuUuabCGyjDnfX635he6SAZJ7N2MUEYdJXKHo8DvmySJc9HZ1toyEWzdwM2Xpxj7iESgMFArbP5NkKpgFi6QUS",
  "key5": "4mLveHyFFsr3vxBAroVv3Gv7fucKj7WSXCgGbT8ubRnFMeNT6h3Ksvquco1Q1fQLR2E2hvrjoHfXmWkSUZBcgvCJ",
  "key6": "4u1QmeZ2b9aSLoiGKq5qFLBtM8jEy9vkxJmjgim61kWx8fLAsKcBD6x5pBfKP5EDJKweMd2rEudx6wduBwxerC6r",
  "key7": "4AtZNYPrkVNvc7YfkX4r7c4eP8XGsaJAfGe81TZSDTQQpy68LZa99XVVVPqEhEmXdoeo1DoaRDHwJBXgmUtzC9CU",
  "key8": "2WLffHQXWGpk2yemcq9bdNHuT32a4Li2A1rYQX68VkuKDgkerrgsJ5r966hqotN21sTK38EgczhMacdkJe6deNbm",
  "key9": "65PkjhADgYXgHsVJnUadngLV4yWqchGFvxwY23tq7Di1KvDeyiv3agRnmf2kir6CBjGPvvRo3R4c99T7NS6Xf2uR",
  "key10": "FCr9Z3bUGU8bDgP6PVWXFrVw3QStVy25M93MgWEqv6kSTm7nEFoe4EzRethLCVP4iJ1Bw5f2uMDt1q9sAwYFuZx",
  "key11": "2J1kxYhn5sFAtwdwWfMPysR98RpnGh3KaSpqwoZhsH78RCSYtCSmBqPbKG62rwqrYRqqhE5f6gaGMgDggkVMBvMM",
  "key12": "BB7XVt59GEdykPF2rwrDmUf83bfPXfthyJsFkvDQ6VMbhQrMJnefQssN1aEYXct7AXHw3Q1hsoQNSbNesxejUtF",
  "key13": "DreaSN4mAabtvnqzZiYtxm3MChmTzkYXjSjaZ1hLc5X8hpGCuVVoQ8X24yWnt383a2ZLcRdVLr39mVHfteBZgK1",
  "key14": "BLRfBF6fzkVzgeBoKfCo8DwsdMUiQEChfCpPEqdqNFbAs8nxyYmfk7LPxz3XxmBgWB8gkK1PW78Pio1HcLxyMon",
  "key15": "4TQ1ddP7NJYqzMwbrvjpW4YHf27rv2cKybKxgdwK9au4vMV14FyKcyu66xADE8CsL99k8K9FkUrcKbcWaPKUc8vh",
  "key16": "3P1qU8JmRoaBRTnGBc91KtZ4X4ydS2MBtcybcUcxUyaSB4QLXYEHfMB7eofHZkW55PcWjNdhRaQ5kpN9HPpZpKNK",
  "key17": "RrAmGtQRJ1KpzP9gTBAoqLguJNsTqgCeUdwPL5N4WEppcW6NGoRXstA5zGQoc1LAandn2y7APLPeX8HcswU1Sax",
  "key18": "3UZVbnoBhfWWD5fD7LXC7UETjz6oTqacBJedyw8LGbwznqk9ax7dkgGrz7WYegMk2W5PynLmwdBgXy2gar55ab9N",
  "key19": "2i3Yyb1KBubtgEbRDbQ4f6dwe5bRG3KnvX7abW7CMhzVFo2qfAqMAUbKDQMv8eCbXCz3NMJWEjHGFJKmsJVtBvzF",
  "key20": "3eqLoSkw6BnWXA76DtqythoQaH6nBpJpPRCPCY3s3F4vPjKBc7Fyq4cqfUsS3taqYuABSE9jR2tpqNGfjx7bHzkk",
  "key21": "MRyjdM7a9NMycyD6kEizZZr3ba9uSGiqyJU2MRKmitSFhKsyXMewpC9zLBXMw5YkkZKLvbZr1BxaeCT8AMKuHYw",
  "key22": "7U7Z7MaH4jrEA4kJ16UUTCBPjUZWWwiswureK39hMzazBo1Kr1942mcx9hw4WVN43UPddMRdacuaSYhTTnN4UAR",
  "key23": "4kLwqejoBHsav7ku2qmctdin1UFkzZ5bEqZw52AvcrzvYZJdGYbdBxDG6GMD59gXh2UoCTuEsxYiQW5Wz8Hpsae",
  "key24": "4v2fkKsSWADpEikQCFbHWpoEw8ZoMrVGBWssnkSUtrHLtPcQP2HiYYNg37GAk1n2NKekLpUjRCmm6YnfUjvoT49z",
  "key25": "4CFZ5ma5qpWLJvFg44zHqE1Enwj5tfzrvJS5SXQ7RA8gBNsBUjnne72uHLgYsP53fCArQ3wRuFcapMFKrMJD7nUK",
  "key26": "4HXsLyNSrZxKNMCVVYBYYQ1UWgCx6xaGEcYcuM8avaotS6ckmrvk9gSRMWKUFfjGxey9UhST2mpRpdEyCSzVh44Z",
  "key27": "5cvQd9gM6iabu5jfMgfTawzmAairYNCTdS7V6DevbEhVHScuRKzSo43YEMy8QNUGP8JNVnH9RYb6mp3v4hRjuSJW",
  "key28": "3WhjbKSQ99Vw9q6nMsYbcrDRa5XqAVPqDXPNa5zyeM4LkGdUKRnJaa1NZqfXTgY5GFKG93vvHPwMGDfMbLmVVcQK",
  "key29": "3bkrEJhXfdGCP6bMi2rYivMVe32mmjhLirGrzrquDrDQXvCFy6L4U58HGCNKYETAcJMM2KqWaCCWTedLNzUdAqzE",
  "key30": "5ArSAiYCE9SEcY9pBceQDuePsoiaPcsdMPcpMw5Bqo9XAEi6zUw9D7Z563GABAk77rCTAgMKsSEEPtSbscgnTeyN",
  "key31": "3aXFeVVB9XyGTpMBg7nrDfSwUZWbXbYsw5YGV9LXsERDbKWBtdZRAEsudvJ8cfvMrCfnNAcqRvwdBbimb3oN3cCK",
  "key32": "9tkLcBprLEtDiMKcbzZQXHjCZSkB7FBUheCkTsCMj2drrDiD83RZjZ9FwRVzEtAPKrcW5FewAGDzTK1tuUwCmqi",
  "key33": "3d5CntqrZdi397JQn65SmrZjyhUgAZ6Hw8eUQXLguTX85bBxoHXptQtDnNgjhmSSsCRxRCbDUzYxbrwrHFVuW7XZ",
  "key34": "4wZz92N3AKRExhRZEzYRWyemybwGp6o16LN34KNB73ZX9YyFHMqGGZT1fZgJ7JFvsGdicBgxfXJYDGXo2aq8k3Ly",
  "key35": "5ysL7W7tWfsbCiLcJb6feCTFwrRsGHF6kAuR5CoFFZeMF7oioLvLTCuWiSh1CaRP8iU9j4gRsr6rgiSe9bfthgdD",
  "key36": "31aGSaCFCYthnvfW2g7LNtk82P1e7mpMVfAbRebzkeAG6c93bpz7o9hCKktVbigMCdCYFw2UtJk2TspafbzLYNWo",
  "key37": "2cApe7u2tLeKrmzyZpAsqD1noEzSCeiFrhB8d6d2d9zrLfzY4sPHtyP8taZPNwN1f4sHKUtzMYT9DD13EnEC7MBQ",
  "key38": "2caj32tq8BZAHkUpW8TCo627qGi6YVbHRFoVbgoBhdfMANAhQ6XCwE2iYH4nK3FAb9vwipi4vwiyCGqwkTMdoEa1",
  "key39": "5Q7dtsyEb5xfPArjg6LB3pKsvhymfm18nhq1rAconP3qyE3WoTixe77jGsw6RNMvAh3oxWsC5bnEV9EyxXn23zzf",
  "key40": "54NGuK6Wr4orHxhkE9VYai39xVcVDhbVPRZAwu9iNL2TgyqF8CxjN4zKinBi6tvXapjXkt8LrxDnBJSooJpdpVyA",
  "key41": "5knqjFBNyFXemqHQFeq8iRCUFCLZYoYBwKEvDF1pez6ryDcbFwyZebvFBisDz57y2VeLG2JUmyoMjBcw3fwMPbvW",
  "key42": "2yNYJ1osDftXNNLBqJsTAxGySSTK2qsE6cCnkBLucSw49MzHSujMZrQEpUcUU4Cbp66ApBnhAZurEd1xWVUHzNJu",
  "key43": "5Rv25cyK3xKEtDMptQ58uHXQLwqtm92AXXC5qgARSKy9Tsw5MVxwnHxcTFMC8Zv4tPvAyJ3sSqwTgFTon127Xy94",
  "key44": "4Fzxt1vgj68qQYGM34CCx45KGmiU2X9EZ6d2sZ2iJThh6sTz2HQF937wvr2VvbBHNv3pHfut6tnD6DmEeHH1qv9J",
  "key45": "3brxZL9Cu5PnSck6mriGxrhGtHSLrf3nxHWCp3ed3g7rtTjJo6Xyk9NUXPrKTwTDTCjRLjAL3TTfR7WT8ZaPrbxi",
  "key46": "kMeb5wLeBN4CqmW4ZE7cnMbMPvPayi4QqtspAXqN7fcZjnG2VVdwxt5qKatqSUAEUAf1rRJ6cikPuZboVrzSdYq"
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
