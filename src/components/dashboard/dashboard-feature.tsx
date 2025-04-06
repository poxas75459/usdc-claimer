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
    "4Rbm9ot7LXYJxvNpejwa45d6V3Bk3s1RJuoSqRiyDPcBrojS9yE9iLG78Z87MFw5LzBdByLAeSkR9QJKkum4xArC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w9bXa5GTpU3o4Bg7AvVvGrjYLx1FmikEDpJzHZHUiZrfK3hsn5h6KTry1sfBH8853cSa8CH9tcmkE6qzEKKht46",
  "key1": "47KA1Vs4xGeomjpgKNL2X1DvRMxp9iGQbGrNXbsJB2NemHdiMiM3J9J7vXXbgSoJuYeDipVT8HajjLsHyKW6czQC",
  "key2": "5v7ZUHYTgm9HQX495FYArFR5oKT5X6HvseXycy3CpYSq8QbTimLzYLnJ3uyTKLDJTQaRH4SABzCoWTbwZnmZw5kP",
  "key3": "66676ZqjYov4y8NrhhDf4971Zwvp8nWevMYRtR9nEyPx7C691XLAH32ED8ZBXaHzFfdGLPbd7q7AasmbcFyM9QeR",
  "key4": "23v1zDUtpAdnst7Zpsep7fq6QsSgKP3Df7BAnsdPgbN2z9o5N1FyGtrVeKFEhDG9PS6TwWTMSMPAUqXzveaF1ctL",
  "key5": "9daNZW78JcYHTmW4NP6xqxUQsVoXCxBQfyHVehRcqEtgZor1CT61n3YUb9Uc23VYgq4b6tAyVxDoz2daGrSdgFw",
  "key6": "5aghLim34kXtf9BJbFXjXTfdPR3bB11uBNBptkHpGsGuca3uGVgYjX4wyG14bM6pNJvLpWyDbHekeF5vQivUUwud",
  "key7": "27fxyqWUT6YdKUQhnJ7nk1pciJEzBZ8vbPo3uJtUyHSSSpkBzZL8swNLajWaLurf8CT5ZZPgDpGRLamFC7DNex3V",
  "key8": "52mqjRG352WvCvSFSGHyNm3ppWraM9cjs9UTeb4sm8rtvg7upQPEBKv81iW89DC7eacuLtWGe4y1SZeJJGLHmVL1",
  "key9": "27P2JqRRQA7AXXthitbQJ4HyU97si8NkRZMbmoFQ6YWUqkAVEk7Byikq8NpLY7R5Cu7SRWMWHwb3WKCWxuVobfjT",
  "key10": "3c2DkWie55c7jtajzMfsrfUkqJVt3ZC4DamzDoVX4tFKwe4N6ZxvaoAX6MMZwwG4oJTYrGAXAruB2UGzU4DZXQnd",
  "key11": "tMTbh56hrBGaejQPBb9PM5NKUmShHVAckfQ9TBvx2YGndqQUZJWeXM5BP5727pUsSeQeHL1RgQw3of5AFtftGfc",
  "key12": "y65nAnvuoayvUF4kRS7LjxZB7RWo8PitN7vCfxcC6ky6vQQmohGKgD61kaPymP2mzGZAXvtnNxSHprpxycdHS8z",
  "key13": "3kP58iFHEtTuHCqKjQM6K3duQrz6FbZfiX3KVPGjUGy74uWhGvTcZ8kHtBkv6niAmk3qtER3MmG7JR9QrfbU2jq1",
  "key14": "4JkysG8uzj79GgRck8EA6AEBzWufpXvMS6NwnGGutvoCK3GXSTkC6WsHcNVgvxNdJP6ypBJpiHfbERBB3xhgaK4L",
  "key15": "5bnqdvDy1qP3Ebon1UPe4U2V8R1zXZmpSP83Cfmq226uT9CmCssFcar1XComkPnG6RhnaBLUtTMvVQe1k3vssUF5",
  "key16": "2FgfHJ9VBqgT9R2owBHm23LireAR5hSAobLQD9JXA6GW2YJZA1uiU5Ko9QRyZdrHCx67hZph2KdgsfpVzfcSi4G3",
  "key17": "2pbB9fZ6mNdMfEvkxYmLt6NUGEyxG7xGnU7i3TLLfdXojT39kT4PaNJvS3W428A4baoGbEmjAZhqT5t2Z6pKUvLs",
  "key18": "39K6Jmp2AdU4HgMvmQMYj5T3YrzC2KGZzm6orb1DCMBvNLGhoaJubnLiRKBG21M8okrgWtjYVPhM4YLPq7MkQ4W1",
  "key19": "2Kn4cj5CtToPBDhEtrQnyzhtfRYxiNwqPxwfQE3bexHtLXJ9MeA7LCSX9jciYB5zrANKznPLPLQQM8Lrjxs3VD9Y",
  "key20": "2qSDqgPVpNmXGcmMXM4hbvTz9JE8uSnfMatD7iSB11od2wshSMBvgYP457Zp2orW9mboCgmb35PSDKAvgbdy1ovK",
  "key21": "3kQ3uoQJygGUaXNCzC6irnF46TZGLiuDKNJkiz1UTwzH9M2FQhTwPrRpypTBx3mLnEsR7uH7auZvC5YR45FhYyms",
  "key22": "2WTz1bGsPBRizkgh8cGvLtJ4aE4LKjFcqUoq9F9sLCL6Pq4DqmZcb3bTfApRLuBXHMTmwtt9g5YZAwbDBdAoH1tg",
  "key23": "554SRcpZ8JExSqQvpNLxec48H3T3a3AeuYdmns6hxvv2gfRmdPSmNrpS2WyD1ZYZA3knbZWZAsbS8JsPGGSfcbNs",
  "key24": "5SzZaRCKaoZkqAXfGcLj2dJSznKxZQUpJefezer71G5T3mR9z3sfEo84gBKyxZoHdQaoP9JFJJ2zDjVjqANhgdvr",
  "key25": "2NQiMcL5hQTadDUUBer5EMzudL3Ybvvkfu9bTPQtgWm1ANpd9hfd5FikRoZtTUtzM9WJY1sr9snKpcQyjtVKeqP7",
  "key26": "447RsaKo7nWfC92jHYJFZXz52jtJoUKR7VbDgxsdZk4g6Gx28HJt5vPLnEmFt6ve4r2yacv5815nJQNP737R1H2r",
  "key27": "DB45F11VUB7sxj2RPhxaFZKaBqvmRUYZdtZXyvVFMbTA1rQN7xDBUsfqGgMv4AFX9HmJ2B9tc54cmxNQEoxxueL",
  "key28": "3ecnjj23gfLqCYiHCC3pnuisCspRE2JNhbktGkrXCDiv3q1z6y4UGyguKfTkLGPL1jF3DEtHc1zbB74eshJfA1Zo",
  "key29": "2JknzQf4TrVDwWnKSLKPQ6nzDTd4rPUWuwDTguzJyFJusgyLrhfPt3AgtvfFZSG4PZX82ozke4GVZbLBGRwKRqGA",
  "key30": "4MSbPxpWZAufWa4iSzMxXCnFJVdnRP65mGTu4tw4y2kPDsQY6TAcfa25mZhCRNgEGn5F7Ec6bV1SBgpzP7QQTvKf",
  "key31": "2T3EX3zpydSpnoXMHsJvJzGxrSbZg14b4JeZX6tBrPDCxkbemEW6weQaaGrjJTvuGdNkwHtxbtEvzLU3HDuXFbEJ",
  "key32": "4WS59ZWgaeNokfqyK8y5iDPiHJm3BdneXnbPPxeJXJFLQm6GHLNXmmNATxo3n9HXSDyyxtf7hkJx8yCuQDujZ9Mc",
  "key33": "53hEMmv1Y1RD8J2Gy5uN1pYpBjcJhGbjGMjhPoJxAzQfFQF7rmPYEyooTDMUmaT1zybYHbjfNcNsSUZUxmx7mQKY",
  "key34": "4Nz6eY2BE41g93WhWTLNhDdh19cuBbeVg3gDj7GaCDVM8mFTvFFygYzTomkcuQgL4AHwkcg3supecAAhuuJSxkPy",
  "key35": "5ix9UDGUgsNUeFLmKo1WnACR6PbzK9viuV4kCc2m33u73qKfecH2eCjR2B4QsSB8RCY5LbNJGGVjbhBr5ZsTKJQZ",
  "key36": "2yKBuaS7rHmuBaYKksnrtFNTap9AzZ9dYR5uAEx4LHvx2ixDMKsVUeAbXJ53Sh2knfhiYAJCk6pxym9T43Zf6i9X",
  "key37": "2G6uPtj4bNFM9mAm5eUkwxMVn6PccwvNjbLwcwXFXUi8XBcQULMGaiAcghdipAQSgmEetoeESB4nmW3tp3MVQZjv",
  "key38": "62jv1zpxMKokxLZkrCd6VkcRkvW31jfTF4s16PED5664JVt5eCePfzwxpwhhYpNhSv8WxzfhBKboj2BrEqeWYMm1",
  "key39": "5AZuYrDN3XzHb7DEiUFuvADQvoqFncGuPp5KKfP7e59VUedLZK7jiLFEmTx3C47NQZd2UJBh7BwqanDRFj1wTuSp",
  "key40": "3AhmuStZEe8DqmHtrTGXWFwt8fYdR4RjHcKxP7YACrFNwgm3MaHEbLgGqwgs8xNUdv4aZY54XAAVECKaniM4fedu"
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
