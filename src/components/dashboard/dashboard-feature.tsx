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
    "5NqfbVRCGCDbgVib2PjD7Ex711YpFTMQJ7whpPYUeRQ15Yy9bUeiqFfWaPSEUvTGEioT1WxniCshM1WQsFGa7ZZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VjPPzS1d7DXRNx45jswzSv1G6TUfgqmMVS1zNDqSX6216PpiNqTbGFsG2UDY6dv9VC9r2d3q57DRR2qsB9Ezqc3",
  "key1": "hNhXygTN9uK2N49TEUg2hKncmGT3ahiZndKjywvht3LCqnZaEpvndWky81z5UCtUNDUehZy3jZaQ16dtGjuBfbB",
  "key2": "2naGBfeemQimTevPtCSeRhHMTfqGiCx91uKEh1Dvbwe54zAEXnQyemuFLmv8AEQN41t7LqvHkW6Lp8j9Hw5yEV4J",
  "key3": "QpTwjLwrYXs8yrtC4mWJUgi3jaLv7WRqmYQ5RSnj6uiEaax4ZYmSZ4kQJcmv7JydhjhnSZqGkZf5t23xLw1J822",
  "key4": "hwXi7MNhfeYoJzWTb18zuXLCkDnwNC8fb53YN6E86osXxqrSdTWyJU9RkJKmsDmXgWSpH8v6RT9uog8jY2gaWaQ",
  "key5": "wrwPKBCiT8bJexqPgGrB8cXzJnZvnYFfhXmTBiRcmkhcgJf98HFmyBWzEyTmpb6sVbjx4kSsF2abCj4sxHm8Y16",
  "key6": "4ABRFko25xi6752XJkhhwgNzYMdYgycRJrfzqsBqYs95ReatSscqpSoKEHT9G7b417M5bBTznN6i3ZD8sdi6qXqM",
  "key7": "3613qCJPRxNQpiSvg8gJhKaGHvJxaggnP9UDbmjMzyXayGN3qgodrvegeE35MoSFKwgnj8C8WiTYpChytsA8Cpqu",
  "key8": "57sup6QFqy3cGAma29xaWbCqoNTT4hLHkxDejoifaV9dbF7Gnqg85TMS2jdCprxYrhsafeif5asB54hE93edNqbk",
  "key9": "5XqpnVuvKEcymhBmTzk6RWLoDrtGd75TW2ptGyaQZEuoefY91yeL8fZN4XFMJy2ZvEdFxfu49hMU2cCfUPAi5V3c",
  "key10": "kKCBZ79Udvgm9bVFyDvmUX4jJxEt78vPdNZb5K1sU33P3bg83T8QXR5a65M7jePxJA1nqMu6TXFro1uLp9wUaQm",
  "key11": "2bYp55Rri8BZ76Xx54r8WHPLXwZKezFYyzvZqcj8uFUGhnDCyJK7XWHsHLcenqqULQaBSDzT69iaAi1zRBUyz9No",
  "key12": "4dr2WiMDGYVSyfVGZdsDipHBTBep6FyU6mLywJZzQWpa32gEq3i6KPZ9sS7coJUMv5RbfVWRgUB1z9m3nHRBpbyb",
  "key13": "jCHPvWPfsiBEugQ8tMMj2Da6PnHShmPqiQPM28EZoMvHfX7Vwv89KbGvg2ojHhU2thUSn2JWaaPuxpZGbrzH353",
  "key14": "2rBQRar8mTcH1KRSviqV19HXSo4VY85Za6J6sQ1qQ73ZtCC6PTTEKZymCQitiLStMi5YYveVrWwSHfZJLXUFmmqr",
  "key15": "22zBPdUnoqA8yczvkWFLVEa4FBvHRYKkt9udXJGLxpo5VrNr2SvEL8w5MiKfstwa8zYAjsUEEu2xBRUK6mg86qbR",
  "key16": "3w5U9Ty2s4o6jjB2JikcQEf2qkBcX76FoHmMCArV7kZs1knzf9SVUE7UbVaE2gX6UKVHrQge2SYgmHVALC3kpDfa",
  "key17": "WHNSwAJFcoiwqJXLX6nZM5p1hc4XiGZSQLyAHi3M65rNJBmBeAe5nJMNAFfkid6YXHFsu1z4ezdKr9r9geeczgx",
  "key18": "5vzMq1LTgr8S527pc1tyZ8bVFst2PkizCPwSJEgwoiZL5bDe45a1VbHRTMkdfHuoQiiEsSWLTQUS9xnqSV4zAhYj",
  "key19": "2K1ajHqjaoC3J9er6MNBqMSs5TuETnKxaU1fHPPAczPzxyDSuNvC3dm6NSdHhHJdr1XwWGPwAT19X3fMN3XsCeUD",
  "key20": "44nx8uUiSozJdBVKARGHUN4Sxr8DpNoj4WRL3ciX6ZmJwuDQ4QPHWmgSMNbqhP8n4ua4eZGCeF9JR1addJ6unki",
  "key21": "4K9nd62hGNQcoqdG7UUuWPURTgYDq3YhV4CbYnjYEUoFDugaYGR1QXdJAGrdjnNuKUFwaqfMoVdiRHDkcz7h2kQP",
  "key22": "4KdBpCL8qZ63EDM6mkSY1yo7w8EQ1RMyGT3faE6ytc3ab1AbgqZrDrF4ozt1C1yx9QAx68qX4w4qAqz4y1REEQ3y",
  "key23": "4KmGYJsgKfAmbjheVcwiFrdGLE7JU2ye1HMTP3vsZgCVeS6APMSStb46xiyDmyhxxmdR1Vb1WaDMizt6YshHPwi1",
  "key24": "3ZSzis3QmqDftx3yMMweysgKq6GgXU5Q3fUYDar3CAr1vY6RKL7DkJJUWMM1ZnzWNZiF61kh8qVHBd1DfAMsQEEx",
  "key25": "62M2ErZbfjY3SyxwLZEbvGLPCyk9U5EpbT7Xc4Mg1eircozMTiVCKiJKTNWvxEiBn9czytfU8wPPicQeDK2FJC4B",
  "key26": "36ehN7LThTfGUNuwrEJtiA2ETAwyPTpbgEbKkCfRc63CEyAhUeuuqNfPiMNZcrUeWxynnSnNw4f4FSUXuwo1n4Hm",
  "key27": "2nYAtLfUaBuhxfPR1JtBEKW6d7fCJaQoNQQb7nFFKzFgVBFuL2CaRdQWazuqkpJHqaUrAaPisY41329pmRQ8wWji",
  "key28": "3aF3631g2RL7hWRRDBYzvZa8gYo6CptRkYVzrwbnX2CFHH5Cx9SM2sse8WuH2NZFe2kZmAYFoFPR43K4pMGka4UA",
  "key29": "2TrSZc5t7J4VwBdvKVpfaFsXCWyazwMkUw64rrcGDd4yrWtNqaKPWDgibfawN1F8HgykjqEsovRAtMEGg5PsYFnp",
  "key30": "43kJZPiKijYbUgY6cC2eJzQQ2cfDCuAu2V6DE7BCpV1P7U9RkXXAA3Q4gCegsG8zopH8AqYs2dfLccFosfEMXLy7",
  "key31": "3yqhGGkFVWxyQNKbGmoh6pEBqK1Y6LNMd4AWiVWPzaCvJcdZiZqMQH1Cq9NJTi7R5ENbmycCB3Sr15enChFttpAR",
  "key32": "4RooFKvp9NAan2ApkFhaJQ54Ai6eacH2dwEjCWgQ6UqtAKckYVkHBmZ347wpD5heTHh2jjV1BJWXoh1bNsKuo6SC",
  "key33": "4JbCzGSx45hhfAKBURiwQ9Wi4UCPJTEWvMN8mb3mVjqcEEdpkZzVWykpaz8Xs3QmoTFFgsT7jkNWxqeHbRkkU4YN",
  "key34": "NabVJgWe2aaryrDL1U7wGpMHkCcKgiecJK67778twBL5by5UwazzxswW3pZfXfLEP8gRqTNs1zqiR4H4UXbotTT",
  "key35": "2XBFMFmg5JnQjbsy8zzVbn9VVDxNmsxCMbFdW4zint15HsBAyzSqs71ztV8GQLfrWWGbXxQ8XTTCqcgpytUfx89J",
  "key36": "5QQZNZQ2UJTN2kMKuKQm4gLu3ZdfKEgLWck3bySP9xu2DKJKHTbXHEq2F96UxNV7syNCuvd7TCje3GSiXbgiJHB3",
  "key37": "4JL37p6YFCe17awrQAF7HDzjDQoRBoewZcheZdTHQvCe5JUmtdvGU2wShi7DtuWEGcwYMZWpa3b7TJVTtVi15cLH",
  "key38": "5BuaFfnF7vqV9iKH5d1S3RVbQH4PvT87EP5BG7vyo18NjB6Bnevx7aQHXakNTzvaUj8EgxzeYNuBZ9qzYgVP8qrJ",
  "key39": "a6ysiGrpqmoRwD6Hosae3p1gZEag2E4te4qD4G6VEZuVubw1zfHyKzgRrA8eWktehd5FVcZVBppcnkFDDdsSBZx"
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
