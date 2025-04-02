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
    "g3xYGG4oSzj1uTfrX5f2dQ3BTVm5xZzcEJYqcxzGvaeC9TzVtcKjDAkKBEyaz32Wks8EkKMVMUR7dV4qnTV7VwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GJf1WGgCfYZVUvyUx9gsrwpfxK422PDK8LBhZJxusCDLoQVSJfSUebVc2eX1ZrgDGfKAVyQUUigjQnUjfMVHp2i",
  "key1": "3X6RFeS947gB3dNHV2wPoB5bX5JvP7MGiYBQux9MFveKLGTdgsVGaWygkj8VNMjZYrxeXHn7jLQ5oLxbgU7QrjZA",
  "key2": "2RGL1Vfa8Ta3GozHWJADLNVGBye5ZSB7wrUbD1ekLgNE256N8zGFjiNcpLBqpzFMWnWkzwXuYS4dnuHeEUzPQHij",
  "key3": "2sXKm3VNJgj9qw1HgZ3HV5eSBLxNAP1jfo6JEYn1LW4eXbQhDN38Y1S9MeSdF3AVzpNwpF97m5Ld13hsy3AgdNbz",
  "key4": "cMUs2iHsyQqU7ugP4pZuj87zHVLSmtYG7smZjPkXjY25QXyNgncJ2M7SsWeFF4cpsL16u6Tp4DAyr8qNnSJuxCZ",
  "key5": "2dAcHAUzNeVfPfnMvfeXUJ9FQGqdsDHoJeFnMxyFGW6QgRVStUv2D8z8FD9v5mdAQYMcBstMEAFkZALVrorpUPjs",
  "key6": "4yaWpCQQtW6MyRxc69BReKQcrBtMgRVacxvR6231JaUPMYtYNVn7E7ZYDyrMGY2ZW5fBNEUBqrpdGZVFwGmns83C",
  "key7": "3WqHoUF4hLdzFAnqo71qwpnY3DKH9J5hkNoBLRdFVkwnAj2UzEDq2h7XF76XKVXyurTEtoQ1CdwtAZLCJvG1VB4y",
  "key8": "5Ed8RSPmqHRwG3DnVY1Lna3kDVLiK5oNtghxCCTDBHCZPPzYYaVA8m8wcALPFenbMDevRXf5abJbAofDzZNxp6hy",
  "key9": "3e9DgZ6iS9JUiiR6KkeGUMWaad4RZmQQ69t4rJrYnjWGR94ecX7bDpUhPYU2gwWyxDCd6R1dS9iSGKwkiUG5jcHB",
  "key10": "4XDiqjUsNGWPLbVdAJMzR5Am8hNKmS8qug9UGG9GbVY52NwD1BN6TkDbQ6X4NcL1wxGXeeWWbJrUgb8GcqgivSs5",
  "key11": "4uBH9viTkGnqd6MuxtieXz1HtdKMLdw1JGF9ZNHPEuC9NT5cki6HVoQDyWXiKL9EbLBxZTqUSh1Fg1fQ2jEvEL18",
  "key12": "2xPfEWeKKwjULAVtCAPWojMgaAH7EjztTHiLfDwv7YLS3FWiWT2p4UbMBZuFPF8GPTpFr5ReyUd3khLbHraoGwEP",
  "key13": "4oo2HKsDMwaCWwz1SXHEsYV3PHr3N5faapU9JmeM13fAtKDqqb69QozX5qK5uoShTDyciwBmwMk84UaXgp2Vn6R4",
  "key14": "32mTv18SNGQMnBKEFvHHQ4bpgEEuKdKGVCkZHMHXDTo3FKeeeVKXxfL7U6i1tp876Hiw6RKgHnAh2hHiWpzh5iww",
  "key15": "3FQGX1dNcTEznYrQMJEX1Zb77QmFSM9TaeYWAr2aKv77s4QnsJoxhqKF2oqN1THJKuPivc9M85KAmfyGtAgVRFXY",
  "key16": "7d4dbQsA6CzvEP1pqPhgJUBUabY2sqkJMdFMKoPNgx68YxtHYmdmHr9Qc3Qe3jfXXevP7pTSHUx2xpdGP7cTCpM",
  "key17": "4WkH5dGbgLimrF17bAFyYuUF4odYKde9vQruJu3gey5LeuEUkQtcJUkyvEntvsP8vVHQ26gQv5x9QHnu9FpAFs1N",
  "key18": "28EHtTp4SAuuq5Xd5fuRoEvXzQ92mktaShNBgYobBTWEGjeEgfQQzVFbzHrhgrdKNwRTcQEyBcCuUMZn15weBgD1",
  "key19": "dikZhYTq1uijwKXuZJw8hJrdZWi6ZNkqaVcsL1mS2DzLEnjJSobtjC3k1SuegHQyed6bi8mQniW6aXbxcDeFArW",
  "key20": "4dG6sMhAe85rJp9yPomvJFFLxKMa7UCPTCFGzusLacWQU7DookCDWvVSK9JxEeUR3DTzVAnKHXNMqNHaXVXEX6P5",
  "key21": "5j3ZutC1h7xVvPWLhuLuE1LRgUekhbg9npsQ6mtS7qPiAXLpoAc14iHNUt8z2Z4S9V4E53LyRiz2aFwcZ4B6X3Uo",
  "key22": "2CBU1wBFvkGqZttWG93kdckeAA4DcVZa1ktsaEa2N26wWiKzSKiHVhJFf4WJSfcmELQn936pDLEkKphXxA31qxY2",
  "key23": "5R78KPz8Ljsb4CK1AyJ5zB7D4L21su5LqXizJhSkW1RMuX9aBSPPNMc88W61WsMtjBasojFxuzaF6fKcPhfz8rp",
  "key24": "3k5PkwvNE5Eh2nBpuCqRuW1VXkyih1qRPKnvuiUkPNr6GmuyM1G6BsLgyyL6UzBf4CGoEN9gF644ZyMjviRdPJ9p",
  "key25": "4dhSGt7fRMNsmZx1skbkTSDoWHtaZ8wJV9TLKCPU15C9b7thGwRVGNsXAZwhRZprB8cuqMJSvS63aAFkvkp2Yqir",
  "key26": "5zDLQ2usgAgnBtS1Uiei1jdDodK71ZKZ5KeuSCFKg8F3X5JXaZKfVNPK6fFF3w49HdQNytDi2w3My9yUERJyMFt7",
  "key27": "4aGE1pVFbgXmLHZsggLsqjRjwiP34VCsDYHnBQfxtdsmDRUXmF4T2VGcEhEPt4BNfSA2TpWhAX6QG3aMoGXCjm82",
  "key28": "3fvkDkrVGFthFbi3LHTj1TWHQTjbPCuhxqwFTsNZDRv3tJnTenQLHxn6k1ehP5JKUKuaUXLPizQ7tCwRFN7Hx9RQ",
  "key29": "47ZF3XcFw8ZgJYtDPaKmXqWQs1TQcjr6mazAkfNpQDB7WHaTaCRLs3wHTGzqrScctYdhAW2RUB4ciKBqGmgP69q7",
  "key30": "2JzgrDuaNAvPWj9rpNbE7Ldtw6TJcvnD2ohWe6jLYgvLtKcQyXYDDFXeLzVTY7m8Dno3jANiYC4h5dX37g1kYLR",
  "key31": "3bxjcuGv7Gxs6fvKSW9RQrunSZee7Z9ad4riaCtCDUoQNM9WsefZiEugM5H4URp22Y439vFZUJVSL5B8hVTVik9T",
  "key32": "61vJUDnoh8dQocreNAwcGD2eakkuJ1BAczyNm7DJx3m3aAz6q2QurtbWgv4881w3pUVXyut8D82ae9Yi979Q5YD3",
  "key33": "3p1AW9wzNeEqk8AUDEu4oZzQYMZA3E5UpMoGb83mJn1WfBVmGWA6AFyFM8eYYn8PWPpVHaD8HPLZHRCQZ4MrqMti",
  "key34": "52D2j54unqnSxUHb2LVG1ujFX32ymXpHuDRb2LwYtkrZ8X6Rk5pyi9QrGg1TqjpQ7X1Cop4uar1YtHgPw3tmEWsL",
  "key35": "RgF5D84MQiLDPpuhUTKYTgRGikAc4GGVLE6WJHStZNXFExRZxj1z82Ti7BZ9gQdv2H1ASd5fJ2XxvsmGH4g1SNY",
  "key36": "2wMbK975WnfAxtgf8XGNuiAQXCRmT7oPssjNYWiMYPzs16oDca57Jw2FGYZ3ZaQBt2T4MvGyz6E6qYZKrfTBEQVH",
  "key37": "2ng9xPyiywigrVJmFLcNNyTjZEGJe1N9QgjKSY7arYmeuC1Du6W6r2tipr37RDnVTTMt18uAnUPeCQJkuA78gFnD",
  "key38": "4Tz3tqFuaq46Xu7HhxbaAsom1JhX2NrHAJjzQAscbRaswWfoLkA8CGEVjSYzMKCJ7PMJbB9wzruEWysU5sThoh3t",
  "key39": "3DoncKwUiNQ9xhQanisHNydeafWFBi37KMEyUmNKtBzALznc2U6HzL6GExSx6gLTaVYTD1CACZZ8aF6hH63gkuj7",
  "key40": "2dTTLBEr3sqAvT3XvgHiYndkzYdZ2599m6dpw5z7gpFD55bukpaasNpnNtie6nZxFdjYQEjXCAR3AonUpdjKkBQu",
  "key41": "5uugbY9hKWvgshuGJoNbh8yELRrtL3J5f2mVD8QLvQqcsPG31LjNW1qmZ3EKzFCNNEpcYBmot6HbgZx2D97mD5FG",
  "key42": "5RjXi3RxBFA7bdnvQC1RxfC8TYVCB47U1zV5RwHBbHtf8Z16BVSVKqptPM8TF7PNd1RC2TLJeT4cZH99yhYCCjHC",
  "key43": "4Rz3i3VUZKhQBSAjBTGpzip8HWamPY9jEBBM37SMZaRGr63hLXbZTYUKCnWczeg3iyQXFhCKqPSXRGy39m2ysBZF",
  "key44": "21bULNpMar1wMFkMuegsFutgkR85Ngi5HurhFAa97Xsw6XxfcfSeWrAdZdK2tDMidQxHgsRib5mSUefVW6STAhAX",
  "key45": "4Mr6Qb5LToMNDMPfqqA97WKbsbqeEtgEPnAdZGgzWwvBzWhMnPFqPJjnfFGvMYmJ1DVAKS2m28Y12E3kk42BLBaY",
  "key46": "eGchrUPk8XAove82b4htXFZnUuUQMFmnQsw5vsiJN5ddGYMWnshBM6ACVrEVWsBQAKKgdwyj8bfhB3VpD5Cog49",
  "key47": "3jm7LESHrwUhExzAJsAsrwYyegchM6rZakYMD1jmfLsf7KPHPEvGWD8FUpi1TPjVXAxn9H8FB81noPHt3kga7Uos"
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
