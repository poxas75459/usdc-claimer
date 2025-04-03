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
    "Tr7PnmnDbzj28Rr83eVDS6V4vgcMv6BUYaSUBFCjqfN3Q5U2Kfgu4Dfw1CMqmVHsDGFV7VSTaFBs9ZbKprJHtCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CUhEBXCM2BcXEPQDGhkqKUPo92gCTWPmWTEhREFGUMh7i1sEqLqScB4kAsaVg4Jnb3AzehXFYanPg4U2L2XCmPL",
  "key1": "3mMR7VP8vcB16e2xLd3GvGn78dCaW1F6DHK9aa33Rpn1qCq8dNwaGqt5cQhYzxzazVSethpCZpnyFFeUqBfnK5Y1",
  "key2": "4xMmjGr7f9W8SwsDEpSVjrNyeW3uLq9ZdDaM793gM1ikHcNmkfNcMXCvfLNtuszexbu5KzAJGyvfsmepuhV5HC7A",
  "key3": "5qzjonciwT3SSZkST7UoL78ZZYe67iYNTkddM2fgWme78HWnbGYRGcUJJN3o5Ho34azL3vYoTGDCJn7bPvRUn7Ut",
  "key4": "371wxyX9ZrvL1rMpjT8GV6jrc2dia8NYmAqCYM4SSMeSjavBR6zboGcQyZipsdqSrRAZ1EyCzEDyEaYKMrQXCQG8",
  "key5": "3ctgR8PLw58veQcqhbC21XWCyarCX5veFs8cUhqcZZa3igX1P86UvxjYanYDFcCmgMPXEFJWoMqCcEXNiG4raJ5F",
  "key6": "4QRkhXRazoMSNt8YS1atCAELhoBoDb9tyF5hZVTCiAyvk9Nx3PH7rotVwiGM4aBKsGCxaWFpUdUXge6G1M3RtAfG",
  "key7": "2G9Xc1mbNX35JsSZxgmQ9d5y1kseVhZA2rZzqgrw9CPQ1qUY7zRCZuG8RfvmfgJ8sh5GPwLHedHUDNkrGTHB6pvh",
  "key8": "3RQtf8UtWgtT8svb14yBLw1HhWBoP4sJAGzeETqG3KJ6J4aAno29bJpPYrR1FqDvNDw6Q24MZR1qQhsDs3tXp6kr",
  "key9": "5jDM9Na3v6Yk2d4NE4xmdCbrQ92nYTg4DEvPtw37uQ9RA16QzYKqT8X26zXxadMMbksjBodCRN5MrdP123CPgJe9",
  "key10": "2HYYRgVj2TdVjmKaaCy1mkpQX9XLSzUnEYoH8Aj5SJbtBW7xsCAiawJVyz2JztZJULWXdMVEatcwT7ajTEwdCSAg",
  "key11": "aCEAwrtv1yAAYh2ikh811RYz6b5UUK2GbNA7Vw9C8HSAQ6eRLsVx73bQXhPeMvERoHWDK8gtgA9yEt8ZCP3pHwR",
  "key12": "84yxXM3pQXCNGZ84VzKee42EN2Dq93B6yTdaWtsJzxgKtscBC8rWFw4BQfAxpm7x7APH5keo4UqsAaacfpnjWfb",
  "key13": "3evUx6gvkeVxagJtqvCXH99kqWQeR3fgAJGU77EK3A8HL3ALqDCmFPChYR9XgAtYZXNpEV9hCgjHat8mo6QBbPL9",
  "key14": "2dfKKwYLkDTBeqfhEvMHFJAxhjirptUMUu4U3XhM63mUG4phfb2wWFpbNGHQNDNpRs2C31HNHDUUyb99HAxVFarN",
  "key15": "2GfkwrepsyW1i4JTiYtiv1QCHJd9muTrbFfXdwfCdTK4SNMcvypJGAvCPoraxxGmLjsb7gYuYgTwFtHb2Pk5DbHp",
  "key16": "5yhUfiE7xcGN3sMijm2FihLp9eofqwcTuch956gxk612VRTHfcXbZweZjSkrtV79dMyh1YLboqDzibULDKLARGGv",
  "key17": "4v9N76mjcF1fUWZXfCC6W38W5rgfBkJ3ehDBv42FvyXg5Ln1j6EEbjqyHpJ76YZxZRUahaKpWasFBCCjVa42sQrw",
  "key18": "2xXR64zqb5htTMWq79hC6DtAcocZvPEGRdUAftzkzuRmPxtaxd53ojeryPEeRbFZXmMK93s9iw1ofpKGvjCf1Jgm",
  "key19": "4cZGF1vNEnntXo5fBRiQ5pq1RSCVRQxZ6GiqqfmGSCqAi5KeyuBNUmLYrMtV2RaM2nVJood1koPEXJKmiG2y2GoR",
  "key20": "2h4DHpDac8ouWoTmqP5zFkqTX8BiTCQXkMKqNhAc2irkJYoiWR5uCymbNxNEgArFAetG14AekRBCJUfwmxnPSQfK",
  "key21": "5aP7Mwt3abnaTs6MzQaHu9X1wQowswK1aFYe5uXqFFwVVLLz2f1h5h7LehAStYD9vFATVjyd2KdM3Bi1mrjP3YHq",
  "key22": "W7a2tSHc89sDrdnckL5MwU4RBRvkwhAmkace97Ma94BQb1Tmfe4K5xM4zTXpcCujtsQNGQCtrNzb8rVCpHeW3Zu",
  "key23": "5vqJ3DnAb6ny85kp5A9wWiqidXgbGC2zZdN2ar7qAJHAyyaQGRqqNm4z6cZnFhw8VNb2e3AE4avgGQX3157hvpdJ",
  "key24": "2n2xqw9xLyDKLNt2XmRY3nTRNRMEE44kZtRC8arjfWYxf4niGxnDdFLgKeDnxB31wk2xHhmBJcsdtQXFa5cpcQbh",
  "key25": "3kvZ47Z6poZfy6r14edCBVRkpVQDuABwX3Mw4czmVANHG9awSFyAG7Ps3WUrb12eBXKtcWXgaQQ9bzttx2dGCpqM",
  "key26": "5FrY2dgeP4i6vbYVpT78xiFnGFbGjMZe3NLRfNro85g8BQ4xwg9PihCf3ao7gXwjy2v2nW86WiKhwmd96TDd3yBn",
  "key27": "2omx6LZs5qunkyJ8Rvq9qhdVZQjEBmbinnUMfxNzLWCFynT7CymyaMFB3pXq4Rub5LJtAqXGNsZ8fbusAAMhZDyM",
  "key28": "43QgsX9o7iJpWXtKAEavCrjUS2c2CJSD51qYKxppKp2f2VcVp9xKQEBhYkbw9xBtuPvh1QyshXrLzG5oZWh9MUBQ",
  "key29": "4CnUrMRuNtnU8qbSA3KwR9GbNhpP3D3AJ9FQc1GU8PYZsj2xmeoYCrpDeHiUZC7iMPpMRLzn8FA1p8U3mktF3s7y",
  "key30": "66vBocSq8maMjdNd1rZBd2LK5ENF4w68YHpR6hNwWy5poR8GzcG8teGXq1b9KZuxoTJmqEdxCNBQNYvUUVShpeTo",
  "key31": "4t5SWaTv7s5QeNKBHp5KyN6WJrBbp9BTKtEbk2vcnzySRjzBDdhrveo3ZrGwDRT4TMf1d4K3SbyXJYK4kNUyArmX",
  "key32": "4FtAzBh6dxudHWZnUHFtM5WkiHg6qwoC1uUH28wmgCwBsDasfiMUzDwywFoim5MfUBXjStLMHAXfisegG46Divnn",
  "key33": "2gXCRpiigDk3whmR3a9bfyFpgBe6G4L93JsHqWVyLJB5oaSSmr2Jj4UhiQ5zbtjkWq39dc4C4KdBswmupYaycLjN",
  "key34": "3QqMA5nSsVBjwS6PuMLgfxQxKRrWxcYpMek4G8wDKwEp56sofiRteqAybSZSp97PBTcd3ExagVMv4ov9yoKSmBvJ",
  "key35": "5UMng1cL4BQqSfJEX9HhoYF21UPSuKwYDA5DUc5k2uKF4vfrnYPHBUnrSvxeq4EFDgFTqjdFGmDg9Py3JWZEFg47",
  "key36": "5VjYGF7Kq8zHaihBPhd4xzBxud8ATRjfL6XEw3GD1ai8ppGMEkBLUgJ8L5dx98Ygu7htX7L2oSvRN4im8LBiqUnn",
  "key37": "ugaTYJ6rF2wK21Q1FjDwqxWsrs5PDxZyYMGctFSu7XMawxmRi7XWVZgSLunSA8qvKhFXorVpZfMKzSELho8UFBb",
  "key38": "5cF2SzdwXBiN3bTVuj2EPicGXvaKo12hr9JzvY9TqLUVqb6kQWoRbLkcPdgJsMsad1zaEz5CgMyScGmR9x14TyQs"
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
