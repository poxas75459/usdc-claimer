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
    "5N1cp9VDF6ZDBSZiPxVDAhMEuTCYV7JQmgjH6DGh9LS6t4DSWpLSUZ1oU6eZCYF8yu3RfKT37u25PUxJrS5ZECZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33nnqrg3tvgGdGSXqVV9PKXZ5a6U4bMYHfxM8xkpL8MMAWH9o1d8yoezgEhNWXtguJfL2zwc3FUaz3FiohfxfTLm",
  "key1": "41WEZddAkdxfkft2WmrW7twcSbX6xJZ2bimNVwqpZEecZcfGuECp52jJsj3sXeEP41nTQXBkfgLf3BdKEbHv925X",
  "key2": "iJSFzLr1khK7P5mnuaF3wob1YhPQFNTFEYniXkb9PNjWiD8fVx2VuTcQtcbNt57UdBe7KqC3dcKtBMSgyx4rLGS",
  "key3": "2ChQsnwrJ4rhSVjvg8edEeqvQoDb12rewRbDLk5xwx7oPnum1nSrZieyTp9YgXRVqRtCV7oAybc1ZZ2gGoGED5E5",
  "key4": "2xhstzC9UVhFmTbXaZUPcn4KwGK1pep6t6ndXc49kdTFNamXqqJdSs1K1XZgrM7RWyv8LPTUxAFBGYUaJPKNJvcb",
  "key5": "pgryzgoT1xYrUSHBRKmycFWBVQHCHatX27TDJzhQiE94JEroc9K91GNnksCFx98Zk5yb18npvUUm21NYk75Fwo1",
  "key6": "21UBsbqRokqMunwVGvYhYercUDT5ASRX8hEQ3gLT6uoAfkmaCn7jcpoKgF6a8HXWMx5GqtyP3RqJGXPcA5oo8PBa",
  "key7": "3YBNtCwpghZV4s3u8aay1tfyh1FNqZewc3nSZLxbxAYJcgxu89gr8me9Mjvj6omo9ec5BMpQfKoJXVxpgyvQEXzD",
  "key8": "3WXL3HpZTLuQbgV4ar6r4FVJqXakFNTB8t35DoKUkfhagxKJATQRT1FNRWdtnxbH5hFfUcZdzGMgEw9SiyXG9sVg",
  "key9": "4JDxgBpJPc4Awr9Qp6oWew6vkcpZTdzAaQwnhLBiYYYzmcyEic191s4NrZjmgErAoCYgrFjTFpqiZF2VWFhpbcCe",
  "key10": "3Qrz67eiz5oDTVdU3XztAngannmSeFvdixouMzPE764Q8HLdumV8TGT3H3dK2Bsr9boDHyHoQisnMKK5CqBFGDJZ",
  "key11": "61XVKS225QhQ41i15FKocQrh29rciTjUuJ7ox3gEuoqf56Kxoe7tDZKWhEKqJUsLf39Mx6CTiBDWurGRs3tvfpST",
  "key12": "4gwHzCr1VFNbe9W7Ai4UTHnA6MVGca5WyRSn91cxMMCqws1pWNUUVdZ6YX7HAqZKcZiWknUdHdyZN4uBp1ni8x2s",
  "key13": "4PHs6m3FVPS7bEGPMpoYtr9inBDpiTNvBKKCyBftHc3jhszGHivxcnucuBLHtyLZ7PR12dCmVN19H8dMrVYZb8pe",
  "key14": "63xYP6t95ktj92rEj9AuEU6epQaTGBgGnDLPzPpxyCUqFhvQRvSx4xLsAQm6jHYRUiVa1KLWhReqUnLcij3TdsT8",
  "key15": "37GqfW3TwA7DSdRmeppjQgdUXRCcXcma7kFeJkrijiCVa9dXXAkWRTkYqrptwgfadaf1VgtLfUY2bGvX3QCNgqxd",
  "key16": "p21nwcSA8EvsTJ8eGSkGvgH7Ym7pggLg37bgnqFqpkFhuueSqiC3nJCmJNwZWjkVs7LGJpV8gEj32HMoKhtPsLA",
  "key17": "2dUCExXemcZrRAH8NQKXPbZQn4NRsp2Q3vAyTmy9CTEr6mXEdNUL8Q319HftyrApxdbae3Qu4VfiKP5x4omTVxpA",
  "key18": "rcXfMTZMXS3KxGjvKbzKTmDZchqHfNT7ZYudo7ynQQnNLSbUXLtwLmKoeCye2NRCsBUkdDr6sHJiSZ6GQeDj4wa",
  "key19": "3rgGDQiihRBXxBx4fh1wJ6kNrqi7qtrDCxykyn6s7iRyqrHjour65DfxPznpmf6LcopD1XCQ58HpMtYwUBqEAcur",
  "key20": "3Jq7SyQkRopcrLkdkW4rAUvUpNqyy5Eaq1Yf6Z6XrhPt3gkRADbzo74GzCG1THBHyv2JS5yeXzdqxknMhjmepVot",
  "key21": "5p5npDyFD9NMNgfNyRNdV98z6PtvFB3dh1L39Spfg6Nr7UoYTcUdoSWjdZiBMWtP6MN2GPpKn3pwHj6ke9yDPBsh",
  "key22": "3d8b5psUkk6qtgFVj9bpKh5CosfTEPZ9NRBgqHiU9hTTR5Bhi4DJkZP92Levsq9mj5vWWtCcRwBHG1EDtrE8WVsj",
  "key23": "2ZMPptCZeri44f4cbFvfnmJG82B6iLomDVtKGtdAJaGo3WZPCghefc1x3hTU6e97nYb4vZobLefof64yDktpETXu",
  "key24": "2DjgHpjeQ21xioDssAPFTafYhk9A89rRdXGuWj3axTMExA1zDDu5sz45ehQTqVguXZtxHT8hiaQ3f6fSGuTcfxuj",
  "key25": "4uY2vgnTAQcYY4KCG6UngKprJdFSEwf4f2e8QH2jfPdrAXygb8mpkMVxWEEC9AVpF5kLGaMKGLjnNVEnvx6ZWmuh",
  "key26": "2MRQZ7tvEWUDnarAEbqCwV99ba7YtdHcNrfYi5wqdpyWScrRUY5HavyLZGE3L669G9Dxp6CGLbGZZRThtyjjKgb2",
  "key27": "KQH1MG8kRBhajBDVbszdLqNczTogVCyA1MpnZzhMhSRaeSV9FXYDe2AbViPbQ9wBmLnjHkma4QJJpaKDJgqoU9x",
  "key28": "4nPiDwQ5bRNcgCKzLxJ4yrHrT7Dr3jyybr4NyvZH1VpLE9bT8hme5ZVxVcC5e82JWpSfrmLGKRwEsdC1ZUEVyCtZ",
  "key29": "5n88AV7wzPLXDZBHAkAvZv1SNMYdyNzXtX7JDaqDaStuzXDdqvfvgak9VCayPKWZeEksTweJRnUhWeYS4CWeNksJ",
  "key30": "4yFtJAr9JBZ7N1x5hnPDKWDoLp3CB7j2zZJsugJaiyjZv6uGSBBYZXcFdjXwRBcxBif727cf7ZQvWjCh5bfoKx6L",
  "key31": "5sGgDFvidZmSw2QFWcxjzptTbm1XzaWy4ow67pgMvVarBbDYabyKyKMzQcpE1PXm9TFmxqaXJ2i9BGsUFiqYoorN",
  "key32": "5UyQp24j1mnuB41ssDCbz5wcR5JVjg1FXAyvMsG5N7QF5dp1KNVSbAZZv8MdaPoGw1cXrGVVmcqP21mU6m2qvR7P",
  "key33": "3KiEQjN9TfqxfYU2bjw9HAh9QRseq4vriuXCyVaw2utcBrG9RPd45VtYTvKeRrSRXfQkqMVNCNESF7Q14wiDCHSx",
  "key34": "4RbdrbAPi9sNbpVnUDz6Q6DV8aLSkSQXLLboKTkr2bJvGPvLehCsSe1QFCT6o74ZHKdkiss6VCNDp3nbDxuSwRkr",
  "key35": "2kyJsvUHwb7zJwNqZ8a7bXcxw1wiqpB7szDg28quNjLUU5XYHZuL3AvLiaeNXuR45UWRbonLbnf42LyYP2PDd3Mv",
  "key36": "3xKC7JQkZmX9n3XyD81tPQaojQHeCKxxFGyY7k3vtWqq8Q7Psmyi48zGRHiEKPkkcF5BYDcumwpZrEkfgqqELKiT",
  "key37": "jcvMP5rRAEfB98x3CwKQP1PyN31KcBjgf9sMxbeaBdd1B7MT9Yijzac47odEdmGnFwKbScMVDtGYUUpmNpSEDnt",
  "key38": "5wtZtv6m8XhMEWZq1AjcpRu2X2JJMw8NwHeGQ57ZHo8nFhy3pnyDmmYgANMzj7BftKV34rVjEThRW1sP98jhcpZ3",
  "key39": "4BWAuZkgU9CiZfcgtsh4QWv4qitoDji9R499zers3bmXdPbRr9hNSTHJgiXVGcvjEofzJWxUTaT1wsV7HzUXhj7E",
  "key40": "5NaFjDdT6C8eMkBfuDZwgDLYXdQr3EYeiTtPfquB76nvSeDruBvSXi2px7RHxx6LCS11G14c5Y8SS5q4D2i4iTtw",
  "key41": "59kZ3CD2s4m7CFQBLHyYQQVusuvhGL1ikCriJ96jehLwjRM3iLv6ath9Wk2N4DEMZqK3nnGURM8aiVH4qj6WTL37",
  "key42": "65r2ysx86J4qAujQiyDPothHP8mG5v9JhoL5ssMnksrDzozDkHt5pGgKV6YhxcjNDHfVUySdaB7R7m11oBicXJer",
  "key43": "53qWz6yeHtwi2Jv96ngeGkGk63vktuXeQUag8yBMy6Qiaw39FkDf19Na4NxmxL8ss3nyqxzGuqLyzCwYCCY6M3hB"
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
