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
    "5X1UmBQpUuAnEtmSUK6jPN7NVZPnybXXpENz9qWhKZAAXyN3Dat2zjg631FtdgFn6DTcQcGNrWntuRQvP82D1Xif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HPweMrRmFw59Evf91YgvMe5iYfVjpCdMbgpHpUq2L2KrUJQCMNNALMfp11dWD42cgCAh6f44DG2rVByc8ce7aB4",
  "key1": "3Hg2f94FB4eAn8ZUV1q6ordiVUWWLR8qNLHpWRxnERAX2tLgpWJgm2tdHM2gb5YaUFN8yb2q8eB3kbiqt7xzBnBj",
  "key2": "4Eptzgvyt2iJfAispD5az65VbrSinkQi9iAbQCEsEnmZM37d7kZTJ6hMnNSrCBe7rDiwphqB9sCTiVZKzfoCQDfS",
  "key3": "2Vy7EJSHRnVC7yUp94WZ2fNmCPjAiiwpqzzdNBgZnyxte1YLB6cahfHxWgbfbKgM7uNpbzoh3w2HXVrCobe1vYu1",
  "key4": "RuecdCYGDDKmas7A4WUrrSzrvUY3rJNoreXDXF9MVCoyTPJFsGZb2JfJoSZoeypjVJbQuFu8RuwqrDnepZiTjVq",
  "key5": "2jdFQimhhT1q9DJVqA31edQgJY29istYyzM7rTS254PJr78WnfwvdUnruJJCjGdLU1K5iC9qSH1cdXZ4s26W98Zu",
  "key6": "2qBiFSRVLboFLG7ZVF8pbYxFuEb6xtgWY1qQ4L2u2k5d1ewjDZAh7QiENW8Vp3G8uCGSuJdLqrftbDbpmoqfzfAk",
  "key7": "25QLuZohr8ptDCEXvPF8jtMKqamxd3XqbGe7u6xymtGE72gN1WVrNxAbfDyBjG8aMHp9cCA97WwkTM1N8x5pin6z",
  "key8": "2xh4w1cU39CUSwddiFYqhCtNhCpQFq8CKC2N2WBakC4G8dddHvyH9QG9n3JqLwRcCB6WiC7ZBUFBoByFkdpkG2fx",
  "key9": "5Kw2rJ7GFeMWjwy2KQ7NCCyr9CPTzL6ou9FWMd9Jk3f181es7mRH75FAEMiNZRWuDaj2dcXM1gG3erhg2JemjXxn",
  "key10": "nb2iU2bByqAoEh12af2NK3x3FWHdk4HY6qm5Wiq3hnXt8w7U8uarVMfHUGpxU5rfAJpyr66P8x8gcraeifhnzBC",
  "key11": "3EuBQa6hBgA3yRmMNBSimqTRsKNVncwu8c3Wg5PBpyJRZKmgh2SzjDVMzK1AyL5gK5nfBQ7Qt7t7jsJdzuFn9bhb",
  "key12": "M7JpKqaVPHFqKUrmNSotidv9Mf9gMEsBw8vsZR5fvQbSiFSRhxdH4RXdsAPiLejsg85SuhJHVpuiNgny1xKciHf",
  "key13": "3EoVrfwoSnGqgUN95bFHJL8GcLsTnb3XXadxux7KrgtPr2vtFcz4ESp1pghXRgPutVtrcj4TeSYyYZ2sVVxyHgr1",
  "key14": "2T6hDwUSKMiPyPwvGUFkQ1RCaAoLJQTJ97nEDjYCYD4gA3rhwo7QFJHK2dNY8WynP1twmT7rfXdztpW3qmLLNeNj",
  "key15": "5basFdUFYo8nssjfdK6Mia4mHZT5eao6gs7JgPyqNG2M5eJTQahwC9ePAkXr2nmK2ie4GHNJWUng3AsMBXtLqemM",
  "key16": "3MTp392YZYCGt2K3CU8axwFJRXaZ6gHGbNFYE2uEq8SapfwBQ1a7r4WTkycMKDUnrXHZVf8QYcKvRkWQCdaHuFhg",
  "key17": "4HV4Ynr16GCQZhMq7hE1toGfW1cuiDCHFq31yrwageuPqEveEqudNL1PapdQ4W7k4DfGUjAtuba6wxpLq6eiRbHZ",
  "key18": "5Sv5CZYfz8sm4mqV6ftaFCxn1ga7dGvt7FBcEFscitL5ER9Ryc4gKv5fZW179oS9QnjVkWz8Yd3VdFwZDDNomri3",
  "key19": "5rXkoSQheWsnkgJXTciVU9FWupZ9dcHKZWCNcyXR6FuFmAghCZuZQeudXjukBJ8c7mVxuCaSL3md2hnSV3Bfaig",
  "key20": "3nB6mcCNTtB59qCYvpj4YPdbFVSQar8Xnuqi82733UsGmQQG9bGpWfBaVBMGzGf1AfjTdjRZ32UfA1kQJzhwq8fW",
  "key21": "24DmSsmTnUeGHGB3JACbnPpr8hRcUksWYGRg9CVsqZSUVXfpkBFXKeNYCyVdzph31mpXm4jPZpbmxhd6vk3SCU74",
  "key22": "4QjSsSuJQR8vKhJnES98DDtu3Dtz4yabphu6oM9wRxAMfZLGWioq1XHW1iSt54BdufgzUacAYFvPtjztYbeYhWxr",
  "key23": "3LeTGUTuGECM27RLQSUPzEzXUrjmrSwFFJvTC7NnXrHBABFVTjFqjkEDh94mrTY5Gp2sjNQYdp1WpHCjGLGmCAei",
  "key24": "2pmP41pFSv2sXEB3pEYSGbitQgqGaPDkgnKm1n879FpxbUtbQXMJpaafKdJ7mZeW2qQFMcGqTcSgV1nQLfUBJ7Ba",
  "key25": "4ykgHybFT8yoZBsxssatrqXJKJyzFXoPqPJB8UpBkmyfnkXxhdXCR56bbMjxYsbSbiCxh1gnEKkXq7u7c7Tmf74E",
  "key26": "HfpZqUB8Eep8edwKS51wFC1tVTRcWuyqFBaus4Bj8QWPAwVLJUYLjCxPq5RmZBm9LVy8pQMizcV89rwua7dAMps",
  "key27": "5wefR77eM73HmsLq7RZAoDWQRvrT7D2x7tAEWM8bzBVRHaqJ1z33WTZnB8nY6uFrDwh4hHWdbguiokpKNH99bpRi",
  "key28": "5gGe45HU4G6t3a9dK89MNgLbiHPBfJphaBGEsaRbDdy7CwQDQZsTnbDwi8jpSNfgWhrqZfg5zrzaPyJq8aExH9uF",
  "key29": "5cKXxyrqiHo48HJVGhbLKe7HMfB4qWhw9fERuu8MTLYzkL74ziKsetdb5TaRDieNPH1CRPP676V3qyCCrnDR4cmY",
  "key30": "49SLGAksFRTSabFVGLsGyu3FyV9CCcJDRWzoPacZAi67DVnsM3TaD4tUPPiuXAnkaYPvx21fqDsx5i5XYteCkFNd",
  "key31": "3mxbaPKZB1s8z3Tb89zirxRy2XbL73c5xq4QxUuL2py2KUuGiJvkVHLgvSNaUbEMEadTf8cNvjwAQMs7kLCBA5WR",
  "key32": "3URJTPYxM1B4mqKX2KJXqW4ep2xt22mscCE7rntCjBqoDoYuaELR6iZ9TujKuuZV2NxGHTjewU81c8STqpEQD9zy",
  "key33": "24CBWrQmYu2dq5nqQH4Q6B7S6kgL5EQ89j4ujbpLP2hpxCxEfDj1b8tkFJ7isvv4NefUZ56NyKXqCcio38a6zukU",
  "key34": "2ddoPB6u7iTi86wR7SSvwfW9Mi42X6Wwbu3wFDd62o9oX86AqeprtDLGfGKLQ6LU8PjqbWHnVzkWyWAQmhwBYkkN",
  "key35": "4Bg3imr52HaCirPQkuZ1J3XvtYxyJtLWYYf11qk92DS7uJ7RjKQvYQ8hH5K5zzjKaevbMr4mQFv58WzwhLxauDZp",
  "key36": "5PRvUvhhhf2vJrod5JdSbAiSZNZrTnHfupiZNVAyL5cWJwBGEBFtaDxgJhSTSWT91uasw2ckCJoRaizwjJZU28p6",
  "key37": "aqsrJYpZuSW3wrWKsttQrnFPDJ97WobyNgXp4Ep14Cjd9XGBpiZKFgDLK2XUVtikpahPtEzZJTq1cRqVyoNDRvL",
  "key38": "rZYPFBSRn5YA4ki7PUSXMurgCSvBHAGUDG5oSHEitWaBfVrfdTuD94zZikyAa9YFNxVki6Vm3sFEcNwbF9mBS4a",
  "key39": "4mbEfCycSepHJHKT5S7BgTxfMk9DsTVBfCaVDqfcEbwPBd7odybThRTJn3zvW3YaHwiS2GRpXTKDqG7SLMtkToKC",
  "key40": "h8QponB9Uqoc3bvnRnPifhrxz6CubozkkSrpe62fTgWR5w6Wk4RgcPr27SdkajYkcBZXfZHzxxfp71vWQwnPe8d",
  "key41": "317tQcX62uM6Vm1Nt9gjyY5mxQmqAkPHskmWbosViHkBEtJNCmuF5qzMBsdHmeqcKJZc99cV3oiDjM5dwWtAHe2E",
  "key42": "3q1qbPoq25vWoaHcDMsXQMoCJTG1Mu3meEXjSpS7mdghsNXP9AuKFKFVaJaRf4313hXe7YRaB5mQrgDQTCTGfsHW",
  "key43": "3B7dY2Qw7Z1kvb5CggLUHK64WWxkXBxGq9nK1FDxGhBqPSm8RsBf1bGvKhgNMPAiDr3PzifGk9C4ZvnLiTJ6jAwN",
  "key44": "3g2QTZspZ1Be9s2dU7exXUdZEQ31YRiamJG3g1NCUEjhjeC8Uqwg7BxHRJSVjv5aMt73eaMa2YATCY6wgjgZQWR3",
  "key45": "wex1Xm6Y6h6mz7NeAwkfYtUL1pPFa7jdWnMtViczJkoGYoAjrpRmBRwF686mVrzt1zgKqwMjWTF5X8K4EX4TYsp",
  "key46": "4GuCGuH4NEVQpBpgtKLdSy95urfcBY4Zm5nitarMhPJTCPqqfsAR3UT2HSbzJNiaH1HUue2wdMmCkonRbtiq51wm",
  "key47": "qQLDSt5hmWDnMvbN872ZbUHv3GYhk684jhm2Bt41r2ySQV9LBoXnmVA4P5D1ogSnXSfGaXFBcZ4zyjv35R3AfAy",
  "key48": "2tbA14ck7PAFfZKuto4hmrmxhHif5pEyAEGhnrugbsNHAEaVQaVkanJU94ruM91k4Jx5oBTjfcbhexhcQro94SYS",
  "key49": "4Wic3F8ajp9aMb4uv9dLiwAfWGvD1te5e87Th4unhjwnJaNLcG5NFKbxZMmCExMGiV7341kPnAKD1qFP4rrJxPHS"
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
