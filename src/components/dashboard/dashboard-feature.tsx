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
    "hRMxT95BjrbHHLhdA7gi1n8WKg5Ck773nDr2xXSro3FDVCiUgNyrBr8FSmgx4hx8HJMtsRocCF52qsCJoaZUFQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64J53bPmbrGL7GrUTEyLHcAGmFoghgge4ctoRRJWg1Md8e9ehJVkzA7xQqyJM6C6kcbQvgRDX28CVjSWLfmY2yr4",
  "key1": "57Uer6DDfb1FEEkb9kGRDa4ku9gW2eFDSX7wxyLAhpp87SAkTVED1Rzd3Yciwo4Cnr15vXyGUxfYFX5r3AJfq4qJ",
  "key2": "5HaqaxqibWY3hCcPUwZArjgqaKdTxUTTRp2KGgEvQmxaggCEsLncVdYFpoqi9Bx1Txa5hRnuHc8i613KE2uoZS1X",
  "key3": "JPEBvxPjy8T2pjbgFT2J1mLnS4WF9JY8U3vzQCSEAT2XaW994XiJLmPLAc4M9QAjukdsSj9oMXhGkeo7Lu5tMhy",
  "key4": "7bkhywqjXs7o7fTztQngMsf695PvQ5bmpdx4XGa4Cw7kBCWCgLRh6j594w3mDEbCpuqBxXih86HkzMFCX1UE2f5",
  "key5": "5kJnBcThMs9FpyeEma9WJM6gGhBRchevXZvegd7V4vGs7znip8Kf5FQFSJf8jHrFjW1Wam6xuU75o5ogLXbUaXQv",
  "key6": "2BzNLt3D8KZrsowteihSuSGj1QtjPiErd1oPUFsa799gmRFNx8D97e3tbPdFj6UCTmt92cafxNxpejs2KtP4K2kT",
  "key7": "5SppnVcqrpGjxKyNs8bp6y96p7eCPK2ALcvhdW326z6VfLXxjMVqwwr3a8RNhuZN53aVWJ519u2bkbMSqMTP3Q7D",
  "key8": "2RadxdpFvA17NLevygnvMxkHS2Qnu2kDMbyUGW6FycJmifBrp8gQT7F8EtESzGgGvmiRLKrixQZNVHDvZQZ4Ekt1",
  "key9": "5mZd7JUXizgYHiShESXWDQ1wfxpK7bu5GdgLaRxhxjwXfQpQAtSowfEFJgZ7XGqFuAbFLKPUYq1hPtDQpGPii7HX",
  "key10": "5gQYot8zdNQkd3jUJNTCupa1iMqwJxpoQeh6GTdeUEPwkYfEHmtaH53eVya89cAczcrXtBoeuRNTuuewnuzBuHVs",
  "key11": "2sHmQK4DuxxMpexbMF9k2xTitbbsSVwZ2ybxFBjLxf6N2JpjSWjyUbi7og49DkmHmpwmvzB5kgtEd9TeuhUm8Vyd",
  "key12": "3xtNBVPiXLX6gco1VxsdwZPhNwxTBRkKfRqq8bLnYPdCGbJiKafx6Eokstm5EL5LLyA6RxQrgJrh5YDoNzcZkdB9",
  "key13": "3FjAiH22xDYsqiyyQxqrym1Vfed3Uc3hJxMtPp49sJXFDCvWkU6PYzVhdzSkrw8m85FHY3T9Mfd5Rbat9a2b1ar5",
  "key14": "HtDEL3omUFJgFvzePo3Yr3oJFpzHGKGK558faoPxGED34e8b9qit6djkqYG5TnSgtMB3Ct19wiNqX7fBVnk46yW",
  "key15": "5b1Cisma6a2A1kdWsfw5QNGqEQToMQdkPkxwM9Qc5MGcCwPXD2jaSGJJcRHNhzAwbJYLSh6YWQj4qeuMG1VuhJGA",
  "key16": "3GZAJgBsxHFA6iuhfBznGhgXJREakGgzGUxkeyWmZpMN8J2wtkFkxX4tJzqu3UGbY8FmrX6H97vCUnXV46sFFXi9",
  "key17": "53Tkekg1xP28KwLuFZUPxkt7Ac7cpZp4dFu5Yzio1sPqzCHdcuUY81Ud56qT5aNCtFrxVAn954Ms1iLvfqEGqqAE",
  "key18": "2bY26Kd5MmieeQdnzc5BZAifdNn9Luh8oYKNJdhVCVBAvUm3aQtJSHJT3TDCuqbmUkSkkurKzffA7LrVJ3sGpBdj",
  "key19": "2MobDWw9pJquob6zVWseLduW2hz7P7bFgxdsCaksKekBkY1ZH2yHo2SYVXD5F7Af9S9CwZHnVQwoBRgd5AQn4kk1",
  "key20": "4GHEghPPkF6YQnhVLXmHQEsGwBLGd6dsaD2ADfKZM2ujCZvUskge89PdeERiFCqFoHPJ985x8K2obdCk1BdTNR8K",
  "key21": "5H8wpXJKmUMt5NbqXjfQFwbDfzr5HBtgseY8xT2KP6FU1iLzEMrE7y3XgNZB69zSYR17cgffQGnZ8BAvgvWLEhtB",
  "key22": "5P1ABapcKiuXBt2ActSTGxrJ3FgRnmNDy9hkP1fMqRrEgPcnoSoenxuhEpM8zwkNmNfHMrYtrShiXJNXSqBMZbnh",
  "key23": "J5gMG7rFS2VJ8UykNrAfekdGYpT2nguVtstT5d2AFcz8cb7Bt1qkyjauczFeDUojcz9CoeMLZTs2dExMC6bbM2e",
  "key24": "46NLuBF75a75k2RA2V9yeVh3HGPpfYKWX8VmF7KL4X4zMifGPK93rFXmWiYrZyT5KF6BbwC1AsUeC2DvpPpaH6jt",
  "key25": "4evmSrSBcgspdVoLevTz16T8KXRa6qC4fYfed44TZFzhtWkrfbFoEW9paRfycSwWd9eCE3pTbtQWVZX7c9CaSGE1",
  "key26": "61c1kU6st8i2CMBnbR3vFnWGdKMRmx2gPNiRGZF9vNfYtY9DmUBYWsNCwxcGfpekwjupLCyg1mXULmGmzavM7pxM",
  "key27": "42m5Bz3bdcgLkfWyuJjcbiFj1c324qCHEGrDkToPwbugdFqCFkNrc6gnqmciyzR6oqRPsEnuXYTVVwxqdd4ZPyY9",
  "key28": "5J44BVY8HVcwqpApPXLgMWD9VdcSXDWKRbu2t42HYUNVUMxF3KyksesCbvDmPvEFDsiUQWiZTQ1xNw7bS7uzfgpT",
  "key29": "GvGSEJSN3s24mbb9DvTos5tLUhN6uAHczYtwrRjoLRd3NTF31UkH4946qazG9GfAE6s5ZF6koCXtzTTS521V6pU",
  "key30": "4HdbrwQzhbr6LWyoQiPNqPMKGGD7bjbPzBQMtJtWjyGL6aCxcvx9mu4uxDhdFKT1RBqSdNRwk3kBAEVn1wgQjYRL",
  "key31": "4H5toBFgJtgi17JUfZw8JZB4HAFspV5gTArfVQ9SWW36x6p1deXWYgpDX4S18QWXjK3CiCfgQcCsXN4JLuigCbbC",
  "key32": "63GqUwyvhLbXCkP5Tqkw6LwqgvGX8V8D7TTFW4SkwAirobwj9MskwPaH2nCrd3sg33xwMzoch1Q87vUfTVPptrxV",
  "key33": "8eV33maubBofGEtPveDs8XCQqzmRdY1ZretTzLEPxhaxezJznqTej8XW7ijdRzjF1QJWTrb4GJktCLUQn2owmes",
  "key34": "3JPEVWXHNDXjRqTBqSCRpSGN1awAQJ9sUX1ZmLF2zKC3tstQvD98yCxxq3EoQL9j84cBD4SDVrPMgJ3zjss9zUkQ",
  "key35": "2qn5hLVE6YZsz4iXfLin9erW49fupXNQpV6Q3mrAWjBPWZ5ndnXFLKa8wcVzobWuASB1eQwqiYQMJ3PEQ4bCiEgb",
  "key36": "uaPBbqtZAHwf9c8GHcpD3FRDnD1yn5AM5iGNt93VJnAuEMVSqFd58ULSjt5HoBPq9AFWFWLcZooo2oYNhh8xCaF",
  "key37": "3S9KmLBQa2mWgHETJeneLNYHqij6xSdU31x2cesioFC7RSJfUfjPPKw8U68J1qobTZwpmzuyJ1zJAq9XBTFkRYEX",
  "key38": "4fpiwcASS9Ma3EmvHrmtXBzyvEkQPJ56JkpKBn6HNUrC5jVUoWzrKXkrfA6NnwTVBx81nCjtznaGNVrwoyLWtshQ",
  "key39": "3icbV86UxJoRw4KChkQ6DgsvkwXQdgkEWccBhs7MXVMwmFVB8jYEGDBgctcXykR9qBmq2sTsisVR3UFtE82GcYEs",
  "key40": "BReAYmwYKeM4DMk1mnNNzQQ6aWSuzMavGUdAhek5xwrXe459gVUzHdUiVsPNGTFirVsY6VoDifeD4Pj6wDA4Fhn",
  "key41": "wKmyw91ybzv6rQeBrKZ7hEYipP4yChsAxCaoeMDJ9U64V1SaA21PRrvsT7sViAEBBJQT2QxuXr2jr9DUcnB5XPZ",
  "key42": "i3AfZnuSH4ULGUjH2SPmhPapijLMgF5oVzrJtGRddrGHaKTevTfFLEP5pDxmX7os9fp1SF3io4FmwH7t5mbdQhe",
  "key43": "q6h26NikjehKFNc7JSeQV8WDyT4YQz8YQjwUZ92x6WmEAkjfYEH71dg3uEDyzNVSoU7EJLi2SEVDcTaCuLrM1ju",
  "key44": "3HPa3uL9my6LkvgaYpQSu53bdAvFm6GSuLS165FCWCJYyuaJa9Egp2D9DcK83ekRd36TGxhrTDPeEkyfxvsMXovv",
  "key45": "32nmAvtqYKgVhgzifqhMzMthkg7L3zzKfSe3ZZJLhV663ztHJSD6KLYw1z6uVCWJU6qCpCUAihLrhL1XqgWrgcSL",
  "key46": "3KvnQVkdiDxZbEFda8EjTbwa8tC42W3VBY9DCRyPt9yk3HbTumjVUFbbHvmtpX9GaWtNtbfSZBACsA8DAXRGqVqX",
  "key47": "5MCLDev8ALtAAkWnAKv38Vme7ciywiYMZ5A7VoTfeEpdCP4a9WfnaRjzx4cUZRz27kYW78vCbJt7x9oBYuSYfEti"
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
