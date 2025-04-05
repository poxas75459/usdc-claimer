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
    "3aLFFsoXvfg5awGjCvALwoTqLN9Q8W7e7N7fc7h1BYwxoNXmF7ZkW9b7377f2v6ijSmWdBjhVGpQapKhASgXLWTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wUB6gyvpfqLaeppV3HVEh8Cnqdev7DwUcbwLJ2GYp6UY5ywADpvXRy9dtk8F7fKMBzhfDV2sRw81MDyqT1kcYt6",
  "key1": "1fBeWk2BvCHjGphnBLVi2wPXuQU1QziLg4qxkv8pr6NEsCiTcnYCwsHWeLuxizYTYC2HmFz78te7H79VLZwdh6a",
  "key2": "2EV63qo6yLJojMMxg5CtHnex1KnrXskot9aM9JynfyVd9Vh4XowxXzZfrmQczKysB77TuUqtshQNbGmEg61MuaDx",
  "key3": "58D98d42NVy6yajQmk67zEzREy5VqwQpxQ75Tu1NJqpgX1ZeGi7zTwii8tnKbnLvPdytf2GLwQw3HTvTLZRobKv2",
  "key4": "SUg7bvXMMtzub5GtqQPJVmr55756j8X1vujmK7EvJUeRyYQwa7tzrDRJ9ChD6fD9BZgLyhXGQYauPWKEA2cb7wC",
  "key5": "5AsGwbPYVi44Ya8rBSXYVkTeE6AQxVgGkLhAxpFbKSsL4BvfUm7f6mKo1zkao71Mi1GZWUE2uZieotJVJLjkErzZ",
  "key6": "28KWxvg9Rpp7P6bWgSM8zTHrzd46sw4Vf1SmMmT5MidfgipcAT38LneyEePnnsyVCUbbfDhS1pnBnPL3xUrVJhZq",
  "key7": "4HdXRzRPf2BB9kAy9Z6nkyd1iW7fKxKBZq4qKYzmNNJW8iRZ9VpWCRcmbYCQzxGXpJPasBV5UUp69ydQLYCstU5Z",
  "key8": "2BosEqPEx8VB7GSJxfow7UYWycCoaZn1adJQgXQZzQ9Px8DM5mMpGev5FGu23XX3vHV8Dt72Zo69bEQ16fRGg7cG",
  "key9": "2GzDy1AYeSs5jhcetoENViqHCz4EUWGdTbXZWMNwi9HYAEyTScQsDJjPzimJj4zNqMJWu9C3v2cb5zwDFkapVJSQ",
  "key10": "46vG6w8AC8jKhZfJbRi9X1z5oPa4rC3F2ca2hqbpBoudGEQ5uCSosbB5eHpsDHQdtSXe8zyZf2sEPBTPzxCCRJK7",
  "key11": "3KdaeNqF2g9pVRDeDKJA4YWrP3DVuhB4m2QD7JfeJ9n1E2UW84ebQWXXA6AffVhheCj8Q1mNCsFcBiswJyouUP4x",
  "key12": "63b71vWpbCaSdkWbU4ZfxteKWAaLf2JXeKNe2439a3FMYraijQGKsWkXHDXEuSYzWChvgQLkATAvBTj5Tko1ECrD",
  "key13": "5Ao8bJ2p9r8irNEvbkRdMuC1LENog4bKJufaUnQU8utD1Enx77s24zvjQXmGoHEATTdPqBd5iy9dgETMwm7Wstii",
  "key14": "4ETWL9u6GwwudXb1D2dAnTLZY7EG4c8vTFs2yXjTrc9rH3XqBf1WYgYXXAXgjKF8GYfshy5E6R9BEnk2aguUY9ui",
  "key15": "M6od4RMgPWW5v8knp7dNSJyjqTcm9UCcizbzGCyP5W8FwqB1V4WPXUhzMAkfZ1GQLJn5zrCY18MfDbh2ujj29rR",
  "key16": "45qbyJbXgqR6epHDxn1p5ctUkRL3uPhMJwQzDafa1r55WsrVXnV6u3jdWahoSiUTjj3NBXe6XURJAwb7sgJdFmt2",
  "key17": "5kDptFxHESfSPjhr2Bj2dQo4uhogbr2tZKBdure9F4rrs4dDQ7rseZMvmEd3gKjpwRdJjRkisXpvgnfb9xd1TLMJ",
  "key18": "EwAjVSvLBrndCTKrnwcPfCiYD1By1MzHPa6iBGRbVbQBirmutgwMGeLNpnoQafcCHdPu7X8xQRQJbvyjoSEksK6",
  "key19": "27UpSTVwcXqWoerw8WZiEA82KMJLt6RpABP6pX2D3byTztyuwdDjWLLyPVJyKGRPW3ocMC4FXHtkVCzyHkuJzSp4",
  "key20": "39Qu8cuv86powLTEwugdPpzu3CYYX3nLmT4X4AfyfsQuPLW65KnF2tUo7pK5ahpa5mybXMhCaXNUmf7AUgm8jrxK",
  "key21": "3uVFjgx5yZpeKCEP43kKA5d2Rhm6raRq4RVoBXqu3hqpkZyqpU8PN6EzRUdwT7yVWy5WUgsqivgTR3WTR2zRfBdN",
  "key22": "3k73Pg4z2JUYRe2xvRcTNeK8Rm5Xeo86paV86bmJfAua5Jo8iW82cxcg5Etjg99NZ1wmb2P7j9Fwf3RNeDZpaHjp",
  "key23": "5oeCCHbAHaswdtCfR25Zzsbp21bufYbqY61Txhhx3Bwz9MCQCvW3JbDWKaES6MBVtDJsLtPYokY5kSNrMekjELbb",
  "key24": "6qE4ybRL7c4bKaqhSTnGNxdA8xsDBN4HG8haspEBH8y6krGhARjkPog92QSYc7aWvHZAMFgDTHKkTNaWSvcZ2nh",
  "key25": "rhUYyhU1MnGmQi5RuB3PMb3DQmzidu1jsNW79SExLwXFzo7ThARJSrrYtLquw6GtCDMceb55vMoGxgRCaBhjBnB",
  "key26": "64mpRM9L6aGYLUbReUQfGfuJjx9cnzbFkbhbCtru23nExJHVHjjv1FScbE5fxt7AT6cwHKg5jw1DUHohjqjdq3M7",
  "key27": "2cqS46Z57MsHizNLriDd1cg9sagUCyaqtWUuRfcafEUzEfudVq3XUcxJZVhAXq83AMYHbepzVNGgcMgKEwnnWGye",
  "key28": "XhTdhJKAvyuGcaGdneA6jEWVBzUTHxhwehD4RqjjWNCmaScuPWEfsukpnCcox3aZSqGhB5Zf2YHwDkr77AHovFQ",
  "key29": "2Yh5e262mJLDbDfrS3qqnE2y3bCj6ZjNNxqMf5PutxQFg2i81HXKSKjnGXwcwSVSXN3MqsybwBStVHC5sPLzLHyq",
  "key30": "4RPUR92MoDQt7DWAMydRPN7sw5i7K5DmvEJgtfvFFjXS3toyKb5EBXtTinU5EcfKkgVB2fryyCAXxVWUmmc5yBQH",
  "key31": "fwzES4WLE2gjXsyPkwKBy79Uumj1s8JVET5NtN6w8SN1BUEfqx6sgiHYwkUW9xFkbBxF8wwuBiUZC5FSpnFb4Tg",
  "key32": "58fwNqo8HupbTorVutqbXf7KV38Xo13V9HkJJcMSvPZkLds6y2v89wRDZxejBeUXJc79Eej318r6HyhQBcoUpNQU",
  "key33": "2sepovkupFXc3WuDqd9ihr4Nz1eWkrTDs9KPQLECMAR43v3htuNMAvWEPFqBjXo9Zwwgu9sUzXrFVsgshiUCtndc",
  "key34": "5Yss4JnUDYJoxfmQZScMS1gUvo8LmJ8RFQjGw7MathaewuEejSouK6cD5oTZmg7fYNSQPCMVtqNf5jXMufukUYq8",
  "key35": "5feZavqDp9mqxiVQwBa8zdUeVso29spusyzhXyppMFeQMq16gBXCVUJaQTurG7kPXmTne4hAddLB3jMy9MJmvj75",
  "key36": "2Xkk12hYE2DcLpTrPQEdV8jCCvnMMVx6EvqCodKVcK1AEivn6UozFRWjizDe9c2ri8WMs6PzSTDzDxGGLPLKS1Fq",
  "key37": "UH72ezXmRRHbJduNE2mRRa6zb9Qr8wDqg98MS6VdnFVqR2N8w77j2Rhwqr2FMuBMaaM9pRfXhAnPB8oVaNuqKVm",
  "key38": "UNzGEHpaBqY5re2k9WRs2UCgJVLzGv37a5LAcPffoEqjKjYsg7Bvkb6zHWRj4GrG3LSeacduXkYKzSBwAQG33AZ",
  "key39": "5TQjgFXeveegJWXaSWFQpdpBBeCA4HfhDR27Yuctw4KaSVyXHirJEVDJJnXRHCAa2QYFudotstc9JAr6ZfTcE5Fy",
  "key40": "3worCPJkJ4otzQfEmbzEcfCYa2qFhmRkjGwCDVm64CaHhbKu1YUNj9TjM622pcGruD2kaphhKRBFwJgu9x9yTp1C",
  "key41": "2qYvPzeAxdakXokygnEmETwbLpso6az8yc6bZhP3RFvAXMmibiy7uV4jwoCQwy58BbKc7nRzpbRRgmdiYvQDNLDd",
  "key42": "4eF7HWmaAGrKPTpG1VJKUFvtGS558QXyZe8vPq4vqW4EeV5SqABker8pVBepBXPUL1DYjX1qWmUNtChu5M5se1W"
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
