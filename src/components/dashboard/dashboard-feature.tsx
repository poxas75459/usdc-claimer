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
    "4UcoyhtNLi4nCLhksa56ZaRMJg6MDnCHWmv7yLKxYXxLf5Kwe4ufKu64UceP6D4QBobgoEK9pWwkSABuyQSrfB6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E1CYEVxUTw4eK52i7iAaRB5X4ocfb4FfFTFHDpmvfokM6ycDVDzU6xjZUZn2vdgMWX1f1uZCDrWNFwZeYQYFSv5",
  "key1": "3P9efxTTpUK2Cu2tyLQiYHZLUCHvbfAtHTLn8XdAToyfRAhrW86MNUtBGGmEbaytx9oDC76m5JFzCuFKBP3rXttN",
  "key2": "vvdUjZxcDWncr93eJcCWzknsZ5bpRg12fKsabTrPVwG5fqg2TXbBeeiVmnTwA4HTuESqkuzRqC3asaV9miJHHYg",
  "key3": "4vDzx2FXLAzgCxfAmnwEgEfYe5YhnYCAgVLDKa4oK3xcqW5B11sRGNwciQwoUdQjPbtgJR8gDmUSpaFM3KtPQUk6",
  "key4": "k6XeRfiZTTjy92xM1nbFsLE8kJ9GGSCNpZXsCJJxgq6Wi2Wpia3QnLqGV7FkUihcgeb7UvTN8fNJ1putJDGGAQy",
  "key5": "4Hm32VryV5Se6W9McRAdqKVJEwuaGWbf5HE1UgsKKwGiZ1ZxbPKNr37xo5RSfuEuJ1d7ffHSxHD8uKpXtLA359u8",
  "key6": "4dhXXyQ8Z9KTJ49R2Yitu6CoJbgSvQQqXgRFzWgSii3NxkfQ61zGXnNg4zMYnMKHdbD5dcCMqZwTxqo6WAZVf9xp",
  "key7": "3wGmRepMQRDQAnvYYHX94Q4P8r65fGvfGQYQzQQcVZ2MscZLnvxsy6mVqk4VF5DGRLqPahkBeyjKutByReSne7fC",
  "key8": "4kEHiQ9TEohwmutgwSBRnxG1Rud3PtTfYZDidj2t62Sfj7egM19iZwXm1SiA5xein6ncxm7xzgKZide8QTQ5SSw6",
  "key9": "3yuXAgx9912cV7gQivgCcX2PUBfALhTF1vej8mXaCrrfKjVBacqD391ZQtD54uZMxoptq7YGHzVPRbWJ676JjvMK",
  "key10": "3Sy8qK2N7yxzsDT9ehM5s5RvEbnm15STcNnk2ZAA2eP6Ggst3vAb8b1VNscgWDaRD2Y8u8Hf5aoMkezCncktnEsa",
  "key11": "37AhuL2QzQ1DHH1C4F16BpsnfX715n433B9163m9XmmMfR61kGG75WCaTN4tdrDFDqoAash1nFg953wXFC3N7yHY",
  "key12": "3V3JUYJk28H8QeR136Hd5fMgg5i7arMWSqU2xa2JxiFFwK9bjfwggFoKeK9uF6uR56sYiZnfLg7abr4fi3EGHQos",
  "key13": "QJ1CsX2ESNhw2ycU3QgTiXKQF62moxYernB6X8QhhriecuLNvohy5KqXWwKPq7jiPc5ZqZw9YfEcQixvroaZvG7",
  "key14": "3fiS7JAJMRP4dgLbjoQsgHcjJsTcKUckGwR7122eyaATkte8o3Vsa5BMFDj6MGBM5tZtZMY5czW3YMf839DkMAQA",
  "key15": "23nxVb5axx4tKD2oAxvL6gndjxjPp31hRZjGLGhM988r2MivJwHpxjNG3dhwqfZukeG35tF5XqMyZoHdjMjDPWkP",
  "key16": "3qEN49KsfuWzJ45qGFW924cJsrSM4kyVT1LFJysbWwkzb6HNm7TNeJEWs8mjPXuWWMTmgbUEPmojRzAdVBjoDQtD",
  "key17": "3yRzsa8ULWe6hbt1nqCNKKbg86eqkfMNoPXHkbhscaDX9YqGwcBZ1i8FW5odf7VirwAyNx4nyPXZF6kBc2bZ7LsM",
  "key18": "3uCBtasVRhxY2scr7P6SRXKaJaSKncakZeY97FtXwPq4UHX9VN459vmSH2H7MtT72LgntKoDj6BLZVXZNKjJWnJS",
  "key19": "3pmt54mNSxy7Cy8qs8GAPvSttTwGaRmj3FhdPXA7HtXzMQXZMJHJFBjq1SM68yPBGurVUYHMYdHAXgXcAHqNRf51",
  "key20": "3diasRJaCULWiPLowYJ2qRWVQjo571go9DQkUB9tZs7QsAFX5rMQHMY9tHaQgcrjef2PJaGkwYHUta8qC5aGkUk2",
  "key21": "4s1hmZVgXUY5CiAyX8cLdX3fm7FbHroEgVvYkn8ETbBqE4Qxr8g7BAygLnJmod3EHmd4Z4eYtHE27ViHuHqEzygo",
  "key22": "2hwXcUu1t2kvhS8QmJR7aGDAdjzoZbU31xzHnQEHB2JVZwzGpcchMHRU34fYzduKdWdasZ5rhv9UcHnoptqoYDsH",
  "key23": "YNA3FudE94mw8E6zL14v9pH7dHHuB5eyzMwqcF15gpvo5Cbd1uA5B7gtHS2vLCmRAzd9LJjZPkQ45Fbyhwxjdpk",
  "key24": "4ZdSJiNjuT9Fx2TxJ67izCMfT4AXvnZYKvfdhAs2TFzPrdDFyej3LeNgtM6AeSiyvsdLtfaVkfhrdDGEtUzKAzKL",
  "key25": "3SPHhy81enhXKiuUADQfVUffywDEWqV3zoDducDufiSDBZQGskw72eaKkxZFyj7X6Be81FtLVMVPagobhykTXtbm",
  "key26": "4qVhW4m1J2TrKx4sQJAc1S9d9fmE62th1NeTYbbtHRwYQegiQQDBf8DCHcWj7S4L56C54R8icMXM4FFWS7KkbFj2",
  "key27": "65rA9JehnNUVCgB7gvkdzFWSCKDsothKsvnfFwo6zuWc7xAhga3UX28xuyhgkejZNnQTQcriboHM7d3EjrpLdQz6",
  "key28": "2mX9CT9stb16SYU4z4DTRFJcHXiBuRW11YqWGXFG3FhRh4vXB7sDEfxJ3fTfh9rbYfjMXT7LfaffV2nHz8yJBnZH",
  "key29": "23HeJuE5774g1XLmBxYDF6e5wKiUBD4so9zgjgbCXKgTb6AfjsGRALcgTXhsexN2F9RArJ5YAktYohHJ2hYe5EFk",
  "key30": "62n3u2zcYUc32YSF7AAKcDcfbvs3Ez2TjkCeHV71mFSxGbSrAwSfE7vTWfW6fc8511RcxfmyzQGk49x3KSyJRVkM",
  "key31": "rKAaVNGKZjkmudL8L8UUb9mQEqfDneeroKNDRGjwUYz4mAE898CHVnDV4XQTpuTQzVk42czif12QwwoenEPaYFU",
  "key32": "5LaHVZtdRYrXA7GJXdxX1CCSX1BQEydgiMhbHPj6AKg3939SfqBmbYmM8xLTzjckV8B1rtnwjPUZM93pwn3cZGR5",
  "key33": "4hHYZpG3DeZAespCCeW9L8ABpPUzs19Wv2FfZV9YCi7o8o4XuHbR8VZzSauFDELhm8xSArYHpaS9NY3i3BqcP8AG",
  "key34": "3XAH4pXSzDwg5mJYnQH1pZ1FywQyCgDB6cwnemETjZifYnFVLNyrVM43GSWfv84FontBG31XoghQwwAd7vvvJ6Cg",
  "key35": "3hfPZLh1pw1moM33GruyUvDC3eb3SZTS2Xmc8Jy5ErujAZvXz4RYsg9Ut5qrAif31Th74pcmT13JW4Bkz9U6Jr11"
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
