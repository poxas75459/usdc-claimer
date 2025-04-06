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
    "4hgovz7oyEBK7bNP2ca7z3TUXtx1kRTQSdWpe2wfQkq22MDb7x7n48eW3bHFA3BNSE9f8jDFvzheeH2EbLWgT4LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vCvqecTFYhM6HmHVYqVvv1sdFPMdFCLHzgBVye7QhLZDvjs94ZWPdMeMJKMnm3w8yyTcuQPieoZM1m9mrCBR5sR",
  "key1": "2qrBjwpJkgjAA5WkbjZ5t4HLGHHdrrn1EDezHokKP3aGkgkGfvCxCUQiZYBvAULwa3fza6ayNYaosm39y6XWpaio",
  "key2": "3PuxyrMoE3B5GobWEEQdNAZqy7CXeuNb8TP8Zmrgsrkrnbi42j3WWkTrbuviKrD5SnJtg23kJdy6Af58Gge5ZotZ",
  "key3": "4b5JeSUJc6wqqJyU5tnYbmYvNZ8q8annbNpZzDBFuAyhYfmCbggMjm9WWsc7BcUpJBUCFCZF84AziB8ibrVZ735x",
  "key4": "RpD9K71kwq3Qqe1Ebicz9nmLeWCA3YhXN3V74ufmcbJ2nHbVLfFCo8VaV2D2mkrkbXGsa4JxoqvUZZtwY1yhpkb",
  "key5": "7GjyLWQ86VswvB7HymvYiL8pCDzL8jNHwBGK5a4L2iVvGdHARnkAVnFp3SU2dTJBf721WcLBydUozYiYSH3PkHg",
  "key6": "7Azjx9yMUBXcvkfCJaVYby8Ao9Dqn6K2gcDwGdWYMunczoZ4gpYKZhTpicGcgyRfwNwmdh6kqByNTYxP1yghDVW",
  "key7": "394SixGbkanrxMRXaEYM4aHKfA6AJyg5De1Ci9qWuhG287KiQUE2dSKH3XDze1dW9uQy6rqVNDJ83ApeK7ySzpLW",
  "key8": "4LRBsd8YhpjEcCa6r8S2cPLxbufYwjTjjzJgjLvoBBKocyJvjxqJnCH7HZRCpd26wibBtKjgPS9ZrTApvjGUAL96",
  "key9": "qLpVhkQTjeWQyLfChpkqaDGZUQUxUQ5HCqAWXHyahHK67rnzDEUbqdsDda4ex6Ao38Uy8XqECimutvCy8jQcBqE",
  "key10": "3XytTfRGSGZVEeyXMtzRQV97stHPBz8rHZtHnjL8m4uExJQAun98wew3eC1SfKzYQi72ex4s7BZvaMRiwVYLb1KN",
  "key11": "65k7AuqhuDWEmxhwxLLGTUPgjQppf3ptyjNKu8Yy24NDhBvwWBoTi76MUJNY7twJDeQCxjKhvdsWEYfcLVwmfsYa",
  "key12": "hGoyqmhZ42wARE96StjPSGCPj27TuRboBTnyUS9td9u8kQg92rC6yazSpFywopWGN8i7GRTT1wEb3uDpNBaX2h9",
  "key13": "5kWJvtMrkP2NuthMYEz5GCiZstTLoMTbmEaT1eMeifyJWADSMx8Lv3gSwXEFJKLEh74Gc6eYPonVKpQ1WJcE6r6e",
  "key14": "2vqQo371DfxvcrusStyov3UKJTy31Dw5bCMKZSzR8RkmCaeDFYnx8G4NBryGhDbwqJ8HWK1Hdqhywdu8Ng1H9Ega",
  "key15": "5UGfi4pMmQkD4isi39ezx6yQ372CDtevgwbx26MDFjP2WTU9PDaQ4Vj9cEUQvvNAQLRS8Rhc6ZN6KrahA6goFEhu",
  "key16": "3B5FzjBBSqExbbpvBqAxZELBJh8Tz6a7GL91YhGcszankdyfigjHTHLizMUVJQVZniA6K3NT7kRbWinbtjqPhs6B",
  "key17": "4BssAp11boxUZCUfDSqEftKEFmZpS7NLqCudEwywPsHcybQj9nnwPGEQJK4qVYKLf2P51N7WoTS5JxVoKqe1cFM9",
  "key18": "4KZkaSs9VqThyMs7WCnFtHKnt1RrSn9QMWS4fRY8nhMJMEyBpNjib8AyQUsQkjwMPmYefPBFmsM59ocPLHphsjSx",
  "key19": "5qt3wGWfz87T1eLaPFJLdkFxcZQy2CKQ2f8R5G8GcQAzRy3EXBWZ2gzQi5yTY7KPv3ZuyLx6YQTNEDVuFtoDsbUu",
  "key20": "5UcJWmZsbK9ZcMnEtjtCEsr5HS8i5nq6b8uh2uzq1N4XRNZVUfQexs4kduB5dMTejw86J5Rnybcz8SNDBmyHrTZd",
  "key21": "fpgsMBVSyJT67yb8Zk2g8P7KHbVEBAKUiL4c2BX5SnGaqopeQ64JrAZySt6BfjwNK3Fqq4YTTQCoyuCaBEf88DW",
  "key22": "3QChCGS8WjdEMwciPQvWfqoYYeA55NgHwQwxD39sZaiCtKXFeN6mwdAiBEhivwS5LoKZaegZg1gZ3XVPYUxrE6X4",
  "key23": "2XHNaqjCbJ5FXwHajnXWaYwTmwiSuz3wwPr3b1siJiRT9w462bngDeWLStXSXHSYLYnqYN2W8rViRNofvUL2pnJC",
  "key24": "2dMVJuf5s6t1erSRC2MRfjD6QQp1WcgucUaFJavxjRJjJwbiGRLwJw5p7vFJJResZT1Q7WH7qejLU5Xexw1KnQSJ",
  "key25": "5sLR5ch9dCC3AQhdL2K1ttmnVmuCWHEK879ZdrX8ZUrpLW4mpLYHBN4akQJBneT1umSXiQNgnAk91bpqqwDRNhc3",
  "key26": "38MDd1j8ZojCRo1jNydrGpZ87ePJ3ybt1weKwJ5JT8W6vzyJW58ETLodzdvEegDopcBDWjRR41AZM6nhKucyWfJ1",
  "key27": "rJ54kUceQUgnVw7B8pHptvoGiB4Qe6gfRUr3v8vSBfvXBEpGAHNJpZ7UzKJdW8XVc9MdtLtvUMeWnJFsGrCYVRU",
  "key28": "PtG89JzrFFXaxvohWB9DCXaZ8yHy8BwcgwqNQeb5x5apLniQ5PMkvzaBdBvBLeDMDce1YLEGmveDqLQQM3Rtc14",
  "key29": "4D5w2ozbu4dt9rtat3mDZieLwaiUkjH68iHz8WFURbUsT14YztNk7swF1usW9VMKufmTFC1yvQCm4o6whp5Js8tk",
  "key30": "33uBaxhSxyPYDEU4bj9984Dr6W9zTxHqBuGcDPiw7wb47E9KoecPH5b7guyyG1iwBsvHgYbU6db2gCtBaq3D6DUK",
  "key31": "5kfqZnPvutpdsBZiWABTgcx59MrtErG6WNcxcJ2JJLhMpzQhBYmhoX9xfdw5gc8xj1q1McztKMpx546GnB1W9YkC",
  "key32": "HVqcoBpCMthTQ3EXKz4iWBhfUME2teaH355RUejh6xpQxwELNGyDdiRGBXrnaFWmpnbwYnduAyuj3bZ3n67SZV1",
  "key33": "5s4Yx8RLEsokHmeGusMsr3Yg7J6GCjFdST9XC6mPGQYkb3XKuJwUrotwggyoNogqyoxYMFjSveid4PSfdn2oLs2L",
  "key34": "3xqPJ84z2GUurEtvn7KAGqSupZruucRy26QEVsTwgvhtAt37Di5qrgKftYwtsLR9ezowoErnvdgnQpCCz2qrEQNm",
  "key35": "2ayk2AmCcBcFWzCjnuiiGEtkY9HpzmmstvqfeP8wm1o2B4Nak52sqcfbuawfse2Z97ax2TLvDW8jL4h1VYpe9Pr4",
  "key36": "5cJozhVMauC2rncdijwjA47qj444i7i2Wn3qdUsLny3w5oRuoiuaZZfZoLPV5TLkotAvPpbU4Lqy11UYbj4VhHud",
  "key37": "4qy6a4T1BEZGqhaadMny8PsJVV9tuixggeYyJwfRoPwm8rXwhVspUK7Szh5QEzmaCpzb7AWRTiRrFcURTewYXqvg",
  "key38": "5gHh7x6gBwyFDmtG5AeApH9HQRy2m8zBNnbiqMbcdj7fsShJqm4JWauM6hjsHoXBbuVF89CFBx4QNNmiX1zEoAxc",
  "key39": "38tMB3cwKsVzwiDFhA6a6DhPbSJdmoupTKzdozEXoD17FBNE1Udb5a8Y3RGDCtwaruB7ajzB9ySPgDJThfHd9Hg1",
  "key40": "2VX5FCdbxvnKVKEbrpcdNZvbLKwV4gdFNEmhPX4LGp2X389SXF4zzJbywskjLC8persQKYfSQjiQBf1FqHATJ1Ce"
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
