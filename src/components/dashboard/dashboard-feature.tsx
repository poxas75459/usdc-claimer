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
    "4yHdQq7q6yDsQ7sUtkKY8M2M7dCFwKps1sivMRGwDrJKczeZygDCKj6SfJEo6bA32MKovPxv4U9fiYgXk5yDePUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g6mdCTMK9rzQP2aK8RZ9x6UTRPFvFkUL3TyegCMTzdfUERZM9PgoV8VBKANGi3yUA7VgRn1sypvVZFJLUxi99TP",
  "key1": "3ZjWQgthz4RyJp2hLVRSbLdiYLNH7qRnZyYBvfpPtC5WeAUCdhpaWSLTkX5m3mYpnAcE8r38K36cCk7Ho71Kvtpq",
  "key2": "3aU8UiLwpJ9YFirjpSNmkYXx56yvXf2E8XuEEBA4wDm3NAsRr5N61HpcqgHJHoiwqszQzmCVFcoNYJeXtvvnWBRm",
  "key3": "2Qrt13YtGK7e8AafcneDCYj25UmdbP8ejcjCxPUTHh7fRqvkYUm6idsNirNPTSpToPkxw6AzgYiaRFaqGYoqkzx",
  "key4": "egAB3pxT1XetL4uXzMesWBdDWipYkckuPhNjaUgsyBb71GsX5rms8DvPMxHXvWJKW1ybzMu8St2tXSP9W4pQRe2",
  "key5": "5haztcVq5GXsj9veKAarkPyX3kheGYS82urYNkWW3EAb5Zc3c8TDqzapehq1HNxmY1X1Yu8guhorWb6P1Uz5GtFn",
  "key6": "31jTHbqZTjy8KXS9Hy8RQvGc82XHLpr61uYEQLUQfv8rofAG4Yesc1MYkf8TwEwq8U6ivwTrb1VsouNLUnPRVt8i",
  "key7": "PCCNy3Vv2oBTHnR3JCdNkufgFUsNyVgJNir8hXnsSs9SNKB7cpgnc2aeSexQWBVFQGmdiD2Z2Vd14S2ogFc4Q3Q",
  "key8": "3nSHnLijiTdnddXU52D7B2ccFoHjwBgdznWeaf3u1ExgdNZEYph8xMwHCxHGNzu8tFjNSd3gJa47SX6Tg3jvRxNT",
  "key9": "47MHbKMt4dYc43cYfy8FXKqtj7xFs7NFN5gefJx4i87hzXid9rZ4TV1GNG4LuxY2yDYMNFvKeHQioA7bDuHzGg5r",
  "key10": "38jpi5JkxFnAUsLkfgb68fnW5XyJsVXJjNksbDvhYbAnqrd8NZtcYiRYa84H1zotzQSrqKSre1WjTVvwhzY43tAL",
  "key11": "4FmjQj4TCkfgdZGm9u112vAUyg3syaPcBtxhhXdEFZWaUWdWyTx3Rso2FKSXASySB6HytpfhLa3tsxgyJH41PZY6",
  "key12": "5HX7R3uPY4szQVicC62uafFmcT8Gug2f16p2yvsA98xzpqtjFcaS7qFwWXEqVzv1Faz7vqcbzd5PQFnDuB5EaAPZ",
  "key13": "yNvM6VQ8rVKma9Cpsaz1SrgSYe65vQ9UkwChmm6LHpF72UX5AhXBB769JBbCDyTHHB5PMb9bUvbnVCRrnvs9wRP",
  "key14": "2vt5nZASTXcnAY15PPhtmM3p4L5pZu4gsWc9QApp7u6eDCFHq1oVS9rwfSRp8jJqRAYMgjGhmkkjwTEMTjxZCrpr",
  "key15": "25Cezupo76xsXMnfypkEHTnztDogRJwUatwoeBWFq1ZFCQXTpkJ2T5tk7oFf23KrKoGZneyXogEerNWWX2BhE5Pv",
  "key16": "5cQ9Py6eAX857LdJ86Z9yRzuNdBX9fmERe6SHp9VpzWmGrhnB96TnLexowXmLE8igUfrRQeTY9mmqX8VF4q2iq8p",
  "key17": "4TVkKhyam98tP7LKggiA9Y9ArAqDEQsR7rwwTVYvmno4avXoRBV7Gg8WuAbDqht7YfsEPXpPPonQARR8S7j77eZy",
  "key18": "55rjZzGzesQyJuCieyQhdTZzWX6CFoyzjcSvDWNt9LsCkE9bj7YWr5JcBRuvT46DWmyNynpt77fdGVDdR1qvV6ua",
  "key19": "2PajBVHkUxJxkgdVeSHqjVxX51z6hrY2pA7sAobAg6YcG2gZrvF3LuQ2uayRkqPXrMJP9UbiPPL2ybHkMdibt9fW",
  "key20": "uMLpZb2SbsqoYqEhfBnk3NKafQfhwh33R2dBbKiybJdSv7GaZAvfbcTi3hgdNrYTKPS32vkw59vkRGGxHBR9QyN",
  "key21": "5pRm2wmXcKy96vCEHe3eaJEG1iA8bigUMyLCMCY5omcwmPXkxwmhFgoTRtRUok5qSMmKHxwVXF9zQYNbQzJhZWVT",
  "key22": "3CHMZ1CcsHe6wXVF2DV6ih4ykRsrHT2nAMNbC4wBs8rjMZAG5GdvKjfx5YMZ5irgFsarxqpLdNsLm6ADCcZRi5Dp",
  "key23": "98v2CRSme1s4G6M7SkDzfEeGYQCtLfyyKHUP5r6kDUktVJwhMmJYWunvrMkB8wfmo67XijNCSy1YYX66ppYsrdT",
  "key24": "YKcpLe9yhPP4gCq8XCcWPfpL1EUEzL6SyGGNoA2qqqCJQ9ea68qyWXdKae5rvW9Dr956Zs2ESqf71SmXa7Fi4Sm",
  "key25": "5HnpNLFQcrgZh3rSaazMAKk25KeUHPFoLQFv3JgGD9Uv8vP39nBNGtfTvx4dkmzTGdBeiPEZ89SeCQVBRLQuEXK1",
  "key26": "3Gfw5g1f9Vx659pcdkV7UQfqapeguNKmKuxrHeig93xbL5hRbjtnvdKBChxVgxX1atVZ1g5MGLPjY7eWPhVwckBn",
  "key27": "4GNKinD2JVSfnn3m2vJs9goUkbnxVQLV1fDdkveiWXWrgavbh8qYJHW2PVkpj2zsLesKm2f8KYBbcN6weJvSkz9J",
  "key28": "4LjUoySYmjEGt4S8m86179wx4XJEvWudbPFWgafzjxNAatmdWoQphPi4Fk6q3RmRG4a5pNx4od4CRSMUrCQXmEDG",
  "key29": "2ARmcHjmuvgNoyyZVsdgbRngTExWmTiFJfwLTXMfYxCn39KffAd2w4AKhFGLz48MJnLB7FkEEdGrqGXmPkewUEof",
  "key30": "eGTJVHKjQ4LX3nBeBKQxNZh2xUvTkmA1iPqSFMsukLKdfvLuEtcK5TAJsVb1kHUytu4Kkvp39WgehhgfB1TmAdD",
  "key31": "45TNP8FDsvVMsCHJG9kd1p7QWNhBoXHcG11jtpKD9k2MxJ6tMyKbJCjKT21f4jrQ4yktRTeULHLEwkfpC6r9wo1",
  "key32": "5AZQzmgLwbUEacysTQwcXnGe4rLn18a8mCNJy66rEeyFz1RqMeoxTk1of69q6yzXXj415K2uELBNaPxE7ePBZAqB",
  "key33": "fs4wFFHQMYoTmDmqaN1AunzUvYCfb87sndDE2hoeBGmJiKEUfkoLJTtYLiKm2cFUQMY5zvd2XP5bRyMFQSYbfs9",
  "key34": "2BQ3LYYpb2st8s3goiZBuJS2Qt68Uu2t1H2vYqJsiETFqYAJSSqnmFrAhByLC7GoeifnRvdyzH3vjzos1DgvQwZW",
  "key35": "4bzB2FXwnnQ5q1JFKpaqqzQ6nj9TKqFG1ZToydZu2EKcab9cjta1ZKtYb9wkZdUmH1KnE12NSexa3FH23qzq5rL5",
  "key36": "2XTkibeBKCZ3qVdpzCJD4wyoNDeEDstYFcqg3N5BHSXKpKtEro3Ur28J9STQSPyPgHJfcHnYcpUYTdJ3u2YZy8pC",
  "key37": "aVytSfxo3sC6GPHsHSSJZ6Az5QL197aGotRsjeVMuJAkfvcwRpueFoNZNnxxjgra2t3iQr2qbuK8CFrxr8r7BPx",
  "key38": "zYm2Lu9Q9mYNoV5Lk7qNcHq3ZJ5EUeeH6VM83jk69BCk7BGGo1K2yrEhpcbtZmpgMxXsMR9mVJ2t4eH4HkJo4Lw",
  "key39": "4uFEeZs5QhCQ68GiRYgK44gyBMJFKWbPt5ZzoUtC6EuADFt1rkSZQp44TWPMWFxd8LQurPzgJnaZXn1HRfiMS5JQ",
  "key40": "3m2G5RgGWNQYNTTxb6SMAW4cLfJLGkPBmjMzBEPS8s2qrPvnU54BPsjCaz86axqVSeFXurrkRU8Zh878BU3wzGXR",
  "key41": "2tgde9KTLRSYuDVAKz1ySyv3oScrRkxjsr8oX83pxptybmsW2AWfZm74frQDnmpiG1jcio48sJ6B82BhxwGUnwWv",
  "key42": "f9cnZEfFpuyVw3WKpmfmyNw7Ey9ATuYChbnNm7RVxiS62vLywRpcje4nGguVJS6TFEWZgZzYU1X48PddjJud87A",
  "key43": "5QhmM2TgDfcUCuSDZj62zjBSzo5LVTZJJVzfay9Bnsn5EJY8JQiFUNSQK6z6ju4H8B6oTJowAai8dzYU8CErp4yE",
  "key44": "5iNofX6gBSmo1d16r6z18Ku3eNLx34QfUs51yRaiaZcVT3izUcVbRGP3yUf7pstae5pnDxpVSMuHXn1UoAyeLTvC",
  "key45": "2zRGcBChs1AY7cumCjMfEU9wEDZdEkL913SBZpWYqywX59hyvr3x5GDUhW5nQJkDz8tipSRpecqNwZVfK4tCMNgN",
  "key46": "pyCu39HwAha5b1PjfCUkn2dnjrvT1gbt8N8WHeT6KVHF9ckinQLnbVoq8Vbbhc6kQL6VMThhfqNMcgE9pKyJfjn",
  "key47": "npH3VqdSB3pcbQfDtNvJtkPQC5G6Zbi1vw1bVNJDgiSp8EMxADVGx7s1tPPkUxe3bGbBxdBCoCMmaVabsa6MprT",
  "key48": "4KucmcFVm7XCvN9DGwURUr6nJoiPmmxUrYpHpBWPfgaVAQnqHovuDLnuHMp7i2SDUsCuSpC2LbtXkb6cDEq31GCU"
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
