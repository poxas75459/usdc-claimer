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
    "5vYV1BbnhxfSAjGUZjsxPdf3H3NPWnbwdqtEtDwLcEYrpUqhbQBk7vZCMern2YVQBLsNST5Z8f6YFCz9TLsen8rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cp6CpeAcbsAJ9Np6Wm44vroHxGG147PkoYEaS3XCjqaKJszQCqrbsPUFrJz42oWYQdNKsAKn8yBkDmi7M8LPAbU",
  "key1": "2HgrAMvCD7nGaRL7ziQVinb5pv7Sx4MG7EUYqZrv1q87vB7Lq4pm1Y774nkp1nsmmXZq195PuBJT4rqUPmoN4oaR",
  "key2": "4mCd7KBju7zDX5q4aJTm7PmASrBAW7P5Wxya1wSn4VTR33iCeE8YdgRh45hbTMwm9g94uVRae3NjkZMt2rSCYh2Q",
  "key3": "RxS9QojwpkFDq9Yh5f6c8eTUmrFGraugeQgcAyiYrwo8uEqnYjPJtiRLoEn8PoVik8wc3xnNWP7bhdNFCkxrTSq",
  "key4": "3wmgeqxFwWLmNztTxXSsFdMyjvRM6Wvr8wtvPVLmmqsbLYVyVyigQA3Goz5AY7XtK5bpqype1ay4SuVgRGqBrGHy",
  "key5": "2CX2kBHM49rQ7Kmt5MZ5kXaMapyZn4KiNtmNsx9Ke3sJd8zhj15Fxc5cvUD6PGqcqEdGtgGQN8iRFWXCsP4igbBf",
  "key6": "5yvPHXq2h76NU4NebDwabhE9mdUrL7BkAHLJmSt2V1uuQ8Wwwp18GCftPYTLVRVmLSJ4GaGYuv1iRJcK1TauHHFK",
  "key7": "5q1L5kSDvNPcAKuZQqxPFrXRYpy9bh1mtseeDUm5fCaPVEvzGfLFbsbZKPjd8oWUnScNiGRqv6TppiPiuoL9iTsm",
  "key8": "52EUpMrZQryNVipipS4FT3xczxBRnSMJ9cSsNWs5sxzZ6KUMMhFGYwzsqWMEHbCMs8qC7yhQPJTFLgT6qkfT4v7K",
  "key9": "qKcLU788mUJDQRsjSR9EvMoDuas739xb1pmZzhMjfVs4gUaqfcDZfxp6gTsU6RkWDVf6pbfDTdUZdjUPnggtokB",
  "key10": "4zRbxoxTmYuphmV5dyZvCHLwgH8czmhGBYHdxDq9ogrhtpSKxLjmvANdBdzYgroZZf97uEkRMthSwSPwEBFRxQ5a",
  "key11": "43yE8MCCmpWtJMYikfLbPE4C8FWAX8XhruN1QCvtkMDnP8iEXACdFrqXh8pG14D2wRJHJkE7R9UnHpGm2g5nhDFj",
  "key12": "5pDn46i41bq1ErFs586GWEPQDW6SWaY6uSLcz9kzyroauEQNyFGmrHTUyVx1ZQeexdnNpYs4fKK1tEZR963Q2QAJ",
  "key13": "3WmhGcYxvzKMeskBnxuky5SdG2dSaxPqY6AZoCcQipEfnAetpum9LbvpUKyfeogQXNJxGQxDmfbqumtnktdzPnY2",
  "key14": "4N85wosnhLmBAuRqNKYPCLJLKAHgvUisMXqEiTLpGEbD5vJVcCNi6VNfQLa9A7MB29tWaj6Lrv9dSZpBTq9Ru61g",
  "key15": "63JFdMYLMFcgcCtwqRtpqjQwMuXGw9hvFvrFhx62VC2q2Zr6aNstF4NkioFppsUTi4vozEkJ45GDjYg6PG1HjKfZ",
  "key16": "451udjfyjb6FDDcMxmieyLzJfwATwfhPwaAKid1yLWUPZNfFGXEL1QWiHAHtewzH3jU2XgQmxm3zq5BNFBBWc8Hb",
  "key17": "5UPgt8iUiR8GzSHUjc9QMLyomSv5BhjbBgBXmmG1zPcyD9mEz9Da4gE7WJwCCviyZKjH5h54E74mc3KesmrESty",
  "key18": "2iBhJRBW9bqkyL46y2LHEb9fZL7x8Dc4VuGG8uVBQV3c6T4XTGYRRkWn1GkJh6CWVuUGt5spJ4SK64jnmXhuCtmm",
  "key19": "45a437x5S5mD2P5M6HYaVY5v8F5ewtGY8yDCJLMrPto7AGTbxj85jp981R3L5Nos6DMHjwazRbkn2eFg8f8m91Qk",
  "key20": "4qUQi1MPyEYgthSdStdzxk28EPfTK4Epf2gyFYaBGrNTvi9xNhnNw3apQ5CaLUHFgD9Wna2BJo8SuaL6w6LAYqri",
  "key21": "21n96TfGnVaxPeHQ5w9s4eDWjV65kvtE3AwVgRqbSuJWVPYmmxw8GEsf4Ei719SmUFL5PcyJU5vAm4qXeBdhktJe",
  "key22": "LpYWdkeMbWEjfxprrimJFVQrwa4XZpJ66fPhCBVoo5kXLdXT9atauDxhGvUxFnHamhrP4NARXBz4sB3PkLenBzc",
  "key23": "22CjX72pC5A2dhnfgG61AmqFcyBKym9WZqR3AsXZZE2o6CvABYKDsKCpiy4788h8i4X2PQYAfBvw32LkycftsfzC",
  "key24": "2YiQoPVpWm8G2AEa1W79JXkJSqhNsEsuMrqnrZ7xBMhKFrtA36ssPPZChrkoUYqDe71gbDpX7PuvSSw4NNf4M6xi",
  "key25": "Bq6MnF9NxmiGULYZvLp933Pz46wjBVUfmxmRRpScSwFFbkTwijV6MvwDQd9sbbf7KeLEuTU8CS48TYTozzwE1xM",
  "key26": "1VkkPyUStUHC7RzfzZb2RPMSoW22Cbt3215Na4VEgTPPm4GDDrKpPGY3KqkG8nJAkpKjj27JEdLRzpWbPC7AoHU",
  "key27": "5HjoRoHWn45mornAdVTGLzMApwShUrP3uGT9dZdoVXs588LYyVpH8L9LPpHd64S5tkn3j4SXH6oyZiLdSDuM23Ti",
  "key28": "34qsbrN1ekRoUjeaojar5g1PwrZK2aHk26heWCfTjmH2REM1PL3tAYuHPLSLnpEdrkXh8NnS2WHn1o7s4srGwH9P",
  "key29": "45LfWfqYmYkby2q1y37hf5YXZLLEd6zeSWLzciU9ippVcV2622H4kJddSAmtjKqkp8sXkTo7aeDcoYeaErZHJBVe",
  "key30": "4gcnkX6PDgUcP7839DSn573DDowcb6hkukLmiJQ8SLgtggWLJkhRVjBpqrD9ncG7qmU3grVM8KTyvXrX6YdjPxKR",
  "key31": "2P1GFGz2R6fNqRGhYJkjkdUcRsBr6rwe6P3faAH2onyVBfgrrBd6y16n5UURT77Cq7yXHCuEber2ds5uipEagygT",
  "key32": "5ZDfdik7A6UgdHprgn6idEnQvyTP1tFjKf6PCjyC7v3Lyq1qbh9aeL87F6VoFjqAVchf9fTLrqTerw8FkXD9hfDr",
  "key33": "4633N7uwZcQdBtUoR7VekiBqtGsznFnm1YBujZBZAxkexnxJJ6MuNXJrTFZXocohMvvKmtenmbv4oNi85LqgeNEf",
  "key34": "5pzTa152ykRMLrEfd3BEAv97qFq9NTENiDpSBqm36hEw3sSwHFc6rx2N7oR8pjYFTygChidpZGLNi8n5V6VECyfy",
  "key35": "5Se89irvS7TERj28cjXjHP5pkNy2L85ETwP2gDj59sijzwbaxTCUJuKAHVxvopdp3T8gYZVi7NUpAkGavXALWAQy",
  "key36": "aT9JNUqEQVivYVmmVdTBjgSZA3waTJ2FxJcJzQ6caLKesbgLE27uq6FZQhfYaD3Gi15sh3TCohMwnJQM7FiBGuE",
  "key37": "CtQfi7nMdTyDuSa8Jqwf4QWKPD2LanasTytPa3EJvJSSVSVMKGYWhfAcReztg4CVLcj87qt2zqEFaEsixPkuMs1",
  "key38": "57LrX2B6Lkqjaqj12dSsSXqGgsTxrC6F5BJj2Cjj5XcaUsqExh1vjhzPstZg7FhDNCMXgjUWLfj2VZhgaqu2iorR",
  "key39": "64o3DmT9mMkWdiNVJDBYxRDvNPM2gaoQJfkipdZBN8Z46H6ViUgYFDUTWjM7xCGfJCxmYGMDZ4SaDDBL7peUHxrG",
  "key40": "uFrDHTe9tos1Rve6EJaso6bgYWyz352katgKYBaipfxB5HpWKQHuNGRToeQHb4kGpcUBZ8uaApcpCqVETuDr5rT",
  "key41": "2eLHaPZ9Q4FtCEfSwNhyGc4sN9XLqSRDxjKM5Yz2NtisFNZTAtn1mxNkLiV3uRd8cs6hZwSpavshkEN7MXx2hjd7",
  "key42": "9QQLtnfodrjzK3RJywywRctKDAmFdkXbr6ALyXAqKAiVzy4cTZV2fZHBj8TERhLCcSpGxae2iF5YWg8SS8xA9EQ",
  "key43": "64nEMEVPtiXJywqMANtxVwQQoYMpGoKhE3QYBU8m7Znk1F1HxvKQikXhYwGNQMjHopaLhoyf9viBd16rHiMnpknH",
  "key44": "YNDk61vKEEA1DXh9Z82YChNqowkDdAYkYyFTjPwEBk6pS5rXxzdQXAPHExME7CP3aUve7vnC5g5M3hnuN5BJXaN",
  "key45": "561rghmrgszUy4ByRMod1Sn6HrwK3uzbGzZpW4wLNs4TEifDd4mg1ym8MpJG2sn8pSSqQ5oLeRuoUAP8MdyXwSKp",
  "key46": "2YhAkY3BHi7N4sTnMe5znLW1mhNcKLu3465Uf3TswpyUh4Nn7W4FNb9ooLvDaaweJHm1tfGw4TXYqtRZeHvrFdXA",
  "key47": "2yyb6faudWE4nikLntTb9SLdzMyrdU6RsmFbsRGYXsr3gFat3jvFF3cpPTNe4Mq1WWXH1gc3oh3AmWGbwj3oYu9M",
  "key48": "4PRYxKd1S24zuF7hH11q6fNxDgoGjpibFWg81sTep9qzNvi7BN1SxRQhxYaTpcUVg1vLAU3UzW8iKbAXp5KAwa4C"
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
