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
    "5jME1zHN8WiTM37kas5KEBoGWQn6UTeAEUBpMgQ367eXugZZrb8cYc3wJcq3QEkxAGnB77XJZvAy9Ae9dLc4twvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mer5DebkGXZSEJgemzkbWnw35yRM8g5g2D3WBFVD4TjSiBQeBaPnAzWypkPfNkUFLks5mdzdhEoYDHGH4Ja6ucg",
  "key1": "tQjUyrHi2J17Ao5MaWe2YQjydDPrxhuuxHX1fXHXubAjiHvX5aQa6g73fa2PGyFpB75CgNGn1pgXCqTAiTp7LYm",
  "key2": "2kvyrqXUmFyt4s54Tm58bBEjA2yZBYtZaZbsaFkuGT4cLcBCbiM7Mq9WDDE3j25tVaJPKUYGJ7Hs9DmBg1idMruB",
  "key3": "3oMN75yUw5AVeb2BetZLohqKLoXoKQ74nufo3V15seZnvFV3g6MF4b9LK1HVvG4UiedKVA8dzP2tR4RK9nYawAHN",
  "key4": "5vagwwRZxToUB5WjB3zDekHa5RKr455dD4y7m4zSsx831SYE7U58RsVd4kVVYwKop8x7zEwsvFGMHujq9nxM36VP",
  "key5": "X8ZEwgjQUgawEdih5XqpDFKVgCjg8yv3yyoND9fPraYjaH8Tqz7vZZURYstNXtfFSmDyc7c4RJeCtLRRFfSrW9J",
  "key6": "66EfCMXLRyvkPyjn9E5ag7DGNWw6yJ2g89FcLZs7eHBnQYWBMzm5HfFLErtz25XDEiEAVgLuuscqsRUM3mqs8y1S",
  "key7": "3rPPJzxNzUEh8Lh9o4mzZg27bbg8zKdWt8W6eRSSHrW5MBZFFktStZeG2d82H8qcnVC5BhCNpVeC4kFnzYpqds7K",
  "key8": "5a8kfYiPE1QL2iYACqimUczxra5nXaLCmZ3M6Hf28NEzZRbgLFndHtBhnN6cFNopGZyujeqf5ii66H1ZjCcGmaFM",
  "key9": "2uC623kRMwYsWwgL3KLBrDNjksuUaUvxBaTJMK6EkFWGbf5bnJtS6Ui37DYtjhpYZV9hhdg68N2idUSg3eYCuAyp",
  "key10": "2C5nnAyK7vvMRqed29JuvkdYPiZjB2yVUFmf8wo179V5VJuWZQUo71rktwYTYyzWgDDwRLCSHYqJFtzGEYWeSrqh",
  "key11": "4zAbQEJUurHNB6yrhvTMbJFEzbgpUSsv5nzE1GJjnvvbaNApUj8aSMvWKcioRi6B4ZomnMy9UmWJtYdCSEj5tRV9",
  "key12": "cg78LzW8ZkmwUjKE57WXJoeRLCJrtH9RumboZzyM9qbR1TRRfDTmZDVcqBfvvQsUk2G9iL85oDTvQEPoJh7eC9J",
  "key13": "5RiZuW6bAvmEhmcC25ZhnJzZhqqAqMYQuHZ7fgXEz4Wcg4rM6TWeN17igy6qDrWfLd84ReTrM2YeNSLMZHNiz479",
  "key14": "2kGx7a3kFPniLuAfsPfrieUvUEjjViHgmWL2puY2quRd1EUv1QkFFCUDvMbChynTKQ6HGmKhzzSomFTW1PwGSyLf",
  "key15": "4APoTR6kcLHeJECBqQJ1R5tRsEQzoLNRM3UQ12kMqfRsETUsn5srMGxAWGrm9324fReGQw4KuDnqEqTvaTS6K49d",
  "key16": "4YNwn2XLxXP74hHaSryYgGGvUrrNR5BThpmrAZdbGQjdMYNPuBhQfhVC7UbNuTCgXd5UYqvMSMTynvSHeBYbEJSs",
  "key17": "3yJ1cgXuSJrCRgaxk21qcjJWMdtnPaWyBT981vtvPR45jjaXJBTXbVV2p3ma8ko9Y131HPWNVbfENHQ6XkBsWJQ1",
  "key18": "49ftqcHEfVXQtMvFrD2kPzBzZEpbVGny3TEqVm3my1EeVDDLCKHHjHWN6mMjg5JGwtndL1QCBxW5BZhZent1mUHp",
  "key19": "UQBFzrDR5L6L9EA2Ew8hhHWWwHpgih3k4WBkuA2rfL5PvWFYEg1DrsyhVzXGKkFc47Vs9DjweAMv8qZJNxNVmo5",
  "key20": "VqfJkGjsPmT14xZ3deE1hHEcw4MpPgRvQKWdehxAPTSYUnuoDnHJnjB1y55xZpkGTZJ43pkKLPTkMGewJYdjdXP",
  "key21": "4neJs3v5hipXEdDNTE24SBg87HavkDR2G3ryXiSQQaTmqSHDjrm36AAFwrst2BScvWusA9E419Cn4PebQx56uLLq",
  "key22": "4XLE1n8guhizJC7omfoVskjp1TLYBExa5aoeNSoDpdj757FQDAxrHhaK2vpLkBtaqTZkasJ1z2DZJi4TfqViLQNg",
  "key23": "3ScuEaRH6vL4mjvjau1XvPptZ3tJNZBL2PNWoCd46KYhPK9mujF8pgRSvUdBzGepE83z1FQuKmFS7TxKs7ULu2ch",
  "key24": "3vQUhaXyuxciaxjWbGH8hiryD3DGbWLMkqHVo9cS3jXS3o4N3fjTdFjUSiH1UtzH5WDqKi36pS7f5dBJuAZ2ZQgB",
  "key25": "3nsQqbmNKAYdMKt7d7U59QVnodUMUPwCUQgRbchTEJKzVGDaSf9nr5EdEnyzjQUKgW3p4A1yhcJjTT8WaoFzWsfv",
  "key26": "2fC2cJx52u2svYrF2A5wzKSYbAEveKCnuqyrGNt6jmd1xyXiZMmQ8dXYpFqviQYdrVc7u1pnmoXQLoeRbfaR3E82",
  "key27": "3TXL83RYySqwYNnfGMjsfwerqbz6F6X8uc8bnfQLohiPe9Y3Za4dYnnq3tmq5RHZtNwsELKu5ea5sVLaoFKgKWL7",
  "key28": "25jaA5YR79U5FoX7gGsyAfBRjqDiW85dTfdqPZ5pnpwafeqY15YKPKYwxTdKbHCdHrBzCT3pLT9Tbx1EXuicAbxN",
  "key29": "5ESAVreeZjKH2xe6jWFaDzkD2TsHLtXzA99295zM2xVudTD1LcoTCkUXyWowsdNWHECFPZ6d2hJTt349snzFuEsU",
  "key30": "BbgH7c7ykPfkmbwbXS4rH3dHPQPeT9Ww2Dp8uHDzzpzrr9FQqwR2n4PW5A8nrJEq7EsgBmsNkVBC9uzkAMAtvpL",
  "key31": "5y4uLTmDuRKASsiqoLkYwwCemkgYWPLnqKVRBepUewt2WhguyhsU31Qe9aN3HZPv5r7ZeLjhBmtwHZYVi6FkYom7",
  "key32": "42FngePtt6EGFXsdbG2JMUVbUCbTMhpSN7TegfFU7Bnj6Cs1Hgzae1Cx87acN9CWKg576of5Pcq7eHCZGuQmGyPS",
  "key33": "43dptVHsHcLsUmz9TTgdUhyuw74v5KqsTYARY47XoTgcZRqcfoXBcyNRstx7ZyjSHjCptRJeYaYii22iHFPsRqPy",
  "key34": "5k5emLCGJjbcR7cN3U6gx8kAJxrH95qSFySmCdEhuY4SnKBbCu4vu4RFMx7GgTkfsbKi5Msi1gACztr93gHnLcBw",
  "key35": "XPf5wKZcfT25TEJ79JCyWST4tgT1mjmwZsn3yinCDkNZFGdv2WyBPtQ143HPCH3pnvfmsr5PStKnrbfnVokK5aH",
  "key36": "645NVJdUcpgVqTD2bjE2Ld6gWf2cVGcpPcQfyhRPWcW2z4EwsuNVCr5X6CsU5UxfAFu2MMLtGCgVXHjtU14TDUW2",
  "key37": "2wda3ERFmjRSMDgkKatv7kkW2MPzFkVsfQYTQ4ny98xt5W8qBkwoQLPmdC2LMgpK7dneKAkpcGcXQhMuShdrwCVP",
  "key38": "5xUs6JuCDjDd84e9dGa1MoQqcoKfmNo4cgkUpqYERa7Eb8B5w4AFKh7qDfgdmKgi3xPrTBVXAouvZxKfrWyWgq6P",
  "key39": "3NhWpAzuoqyGuHp5xjFrVm8sHEtVvdyEgxsQsYAAFeXsSa9fBRXkQUqzRQQSbNUXeE1bFktyyUtFRqFRtfcbbNyn",
  "key40": "5xY3QyRDbo58Grm3iexik84VTqRvQQ4e7AGbMcsBCenm8xJ6StHK9u1tY2ozn4gF9uEqSAjmijQndkqvKy3KSgqA",
  "key41": "585fnkxCkTeNvyitbGzRC7L89xdeJigeesnZ118sFzEitNan67bNbS1opG8kWwh16WXTibVdTqR4itoQicbK7yEr",
  "key42": "oEdgCDHc25nAEb2CN6eCqyam18ubZprmyvsF2C6n1fxAvpUyPv6rQ3dSrhrMLHs5orxEomEPaxEeQwP8Jb7iLtq",
  "key43": "413xmGFCTDysjWKBTzcAqVYwPGm58CP3jd4iDJ9LYsPbmGPXcN4db2PziAzeUdEs7zMUjaANyBBeQHGKpBzVVUfd",
  "key44": "LHKKoHvX1TFM2v6f6jvtvjBD3Z1AvkWiTX8J75Sk2i7gZZr5Ua7NECjdXMsTUxsa3NC7ogAGnqwiKbcL6ufxPEX",
  "key45": "2SsgWQwBDpRJ2R5AVY6PifPumD5MkBCGjwjEePokgqiCqAGwuNMZWGr9g1YyJkXVCfoi9byqgJxSk7Q4VJaXdeiM",
  "key46": "3hr8RpEhKoczBmn7fokPkqnVW2V4uEZ786VRP3YFRxxHa8hU4MKaBaATWEyFN7x8i6XDP5VxNED8y3tSppoJtBE7",
  "key47": "2PHRPkRxxa69HG3x1X2cKzcz4cgSzC467sSFYGTyyXu1Vz1BQK6adFgjStvDqTzi9ZFDh2NfVaoMvQcn2eqqjDSX",
  "key48": "5EoKRc3wFsh1yfsojC5dFX6VNMrA76rCLb1i1JWTQ6NA49QB4BMxpaaRbz8qyuA6mS555PNgrBGnPTaQGhw13yDC",
  "key49": "2yKTGYgJ8RtNiQPSVFX6c5nt8BGjcPoAn3MeuZnW8AADJuyHbYsTce9CbLP7Wxs5iRWxTv2kNqQFSQUohKo3SWvK"
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
