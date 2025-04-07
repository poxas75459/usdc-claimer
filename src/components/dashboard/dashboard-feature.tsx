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
    "51G6uAEA2ZFWucqgapoAUpooqbfYzzXaXa4LGySapTycoKH6sGU8gaBBxSwWitmWqZ8ibNGsFdhZuX1QKZNmHFmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Wjx2YJXEeyTmKV3j1rqJiHMrH4ctwmBCXcTyqBZ7NpP3ShX7vu9CzKB6UCRANmrYyMM31AVw6rM7zr96gAcifQ",
  "key1": "3Gf4HxZSoMpc2N5psSnM1z6rQyNsqX5pQMABZsYJcV5LqbiEERjndYg27WAhe2eqeLvS6ccnhTNN6HmJECZAqBSw",
  "key2": "2JgyGCfnkx4vLxobeEnRVCQpawC9ABBmEMEawvkk989GcbmnaWcmJGhLUytNKAGwaxXJiEvewDTLYQvRjCrc2vM4",
  "key3": "65ULUmqENwX1cq76kjVHnsJWp43PikBxhS2r1NuSVpPZgbatYKRqwFEfz24CQ5ksfAnAQTxqywBoXEobTnyJ2xww",
  "key4": "2Dd9GihojmNvyWYNw4bBFNA1kmntdfsQ7KQRn4onb9bT76rDDrs1oDS2RReoq99M5WqZvW7U6i4gLYT7TpjB1jhc",
  "key5": "53eSgKPMBPqQ8pdRXoe1PvhoVWwZCGQdYJ2UFH7mBGFjRkb6WWgJFt5yfX7CBwk5FQxVbuAS4o15hesVwbAtekr2",
  "key6": "23YPwR1vjebEfjNCtkM6eRYbmzbLxUcPsM1YQecY2rWNKu3wXMXfhK2UNtfpfCdQ3YLUPaV9hhkEwFJEHMrZnkWA",
  "key7": "45ioTi5SuFGsx37ksHit1FMZCApXhYmCtFxVJvMu9o7oQ4uZAhvuBuBNq985cPy449zGFDMCe4Q19PYnAffbwAaj",
  "key8": "4JTLbY8UoDTggEAD6zJLHfz5mgN2km7zLBEoLbGTNTKRdY9Ff4f8mVyCH9qJnaUcUNSX29N83rtwHmUjSihhkJ2z",
  "key9": "3JUqEVvNvypJZJK5d6Xece6VAanaEzno1ms5t7c2nsC6fnZdFVsprNBG82kac2hvAQKNMi9NoYZZkjnCgvKbrdpb",
  "key10": "Pr4nyXyeYEezGgLSfCtvXHSH8ZKu8dG4aUUWqo2VL17iRXrpuGe1nn8949onKdjqCDRpSKBMhbpJRJjXm2oYu1s",
  "key11": "morWSKtJkihxPbfYsn8uwvhuAMK5oLTX55UpedHCWrKwA4i3SPF7xQRhkX8utTXzTdiiPb4fU23dLR5amJpiRKr",
  "key12": "46JdQJ5c1itvnQjsFXzSpsdzR6WvPZVM3LJiyeQRh25YtyJ91iUsRHhuDncPEopPpWm9eZkRETytpnEyYdSTgq42",
  "key13": "4vwnpyUwbU9fN3zEFcqTdxM9SFCHdXM7wk61myA8eK68MMyG83im2h6dHDdXvn39g7j68ofXztCNRtYz3kr1E7fm",
  "key14": "4Fbhrpmap7p6j4iYW78ook3NgC9gXtRySS6sePezbjMQsdi5xU6Qgie1r65rnStacbqVim4KaEkb3tn7HHq8YqoH",
  "key15": "5dbawTCcQTjY6Rt93sRxRJgixMnqxDohXGSZoQySfQ64o5RZQuVcjDbUPKvgC75DVzaieqVzJ6nvuKJ8SdW85mij",
  "key16": "5rVU3sCkuyvujtagB1CLQm6VJMyBAJ7b8ZhDgBK2EfdJ41iYJx7CF3gzdwBybbZmz4fgZNq55yvGzaceyYxdzk3J",
  "key17": "3HJtV2xGfxEhiXNzFj6HYuExKhQmpZFKWU5swhkD2nae2Zh6HLEfiAo6TSVQ9UzYiKfXdTvTD96dpsm2BfUwEAEC",
  "key18": "5zbN1i7Qr2rifdDPBr8Y6VbF1HoXzJcSFm5DidFTvpD1UsdTqEyEe7PxVdvkqPt6L38pMH2CewAmze5NyB5cQ8U1",
  "key19": "3YYWX2265WzXgx2pTexaXoxzjHbsx6euzBdDtqRCwL77Qs2bixfzRVgTRUNQaUHsJ1EHNKCHxbmHDCgEp8rLrmDh",
  "key20": "5twudKH3JD9iAW4ZfN6J2MkX5KGq7xZF7APMU3XGPFaMPU1wSvMUhhVxX1sjPmneqWZRdsk8ntPbkUxCajYcMKDZ",
  "key21": "2ZaewdJhMbRUWszZFnydbWUAcUGy77cabVHQCCa1YUvivyrN5V12BCux3XL4rTyf7Lx7FCXAhpXQqFebCTL1vn39",
  "key22": "25F4tE9S6GFQevbhcDFLXn1PZSgigGqoVwQARHFDLcje5aqtCeRQMGjYzrqrpiw8bc5eAKxDzsAcPLJj4ML9SRZF",
  "key23": "2gzGuEzinBeporuf6jsnrb489TrUZaVZ1iokBmx5kZV5Fbstvd6hGoEeMVAybXifuDZN2qBShAunxRqw7MCZdDX4",
  "key24": "4j7DxQTroXKQvULcva6M3E2SBAkJUqFojDXJjFQxqfoaVVhKhqHd6CwFpcTDAvhPmXnHBjFGqTA4JtT5gw48icmq",
  "key25": "3kkR1zom6HSaKsEHWxCGxEWjFyNC7DPewHuBZpubGNsyVd5hMsc9cycW8oBQJftKXY1V8g88KdUSyGXdmdnJnjdy",
  "key26": "oe885kVgNxX1TBMrGeDfiEDfYSjQiYpnHyswuySozaumavYThTAWKuYTJmSBv728FE95mX5UE7rpTtpko398rv8",
  "key27": "2eDNJ9vjFp78FWWK5FoeaCqpLRN7m5XcVNVZG6VvRGAAxRu7ureM8d6iT5dx4wpyFkYBLdk51tSRy3sShMJZKckH",
  "key28": "21snvJ816GYC193wWE7ivU8UnU39fcVsY2zPnpmtVSiz1GoSsPvNrCNA6JuKycLHv7ZSVqdXMrBNNykjMhSwTBzf",
  "key29": "2zofUGiV12iEhChxXzy2V1B6NJCd4zvQbngSfbDJ3T5XAMunsfJuroJ7WvxkFb5TEWt85xXLsjiDpwGrhk7B26JF",
  "key30": "5G5jrYLibsgF8TqvtzghxW7qPpKLNBbiZEooDoZZH6vXkMyQoAwv5JJUxYxgwyEqbJXbDc26fF4efBM7fHRNA2La",
  "key31": "3BrgjJUCdeQUUgYmQckUAQULSEvTB68uuuvsQDVYtfsXBJjDRPyBXsuKF8J3BaYuyJ5cUXRFbjZC2sYzAjeZCYCH",
  "key32": "5m5BFVzjkifxQdVMdduF9RbDX6k3ARBW5hE999WwAeQ346EFCP99XQCHkaaDnifBBodVJKf3cvtNNTEGbmLXzG5P",
  "key33": "3wUxncqXsxWz43FKjPN3XLY7MqtfANWwozLLg5VEJFPkKu6GFKiJPAFdAvtfXTT8ggbJp4dZSJ8xvXpwwxWff8Q8",
  "key34": "2Kp6tHBqPYksYPALp1vnhKsGeKLjcMD6xVpy6QKDxP44CrytEQw8dy4FAKHnoUZjreHjLj7qMVE8Qu72gffMyutP",
  "key35": "3mLAAA3hufUpG1Fz1pXZAfaSijV1wgNvhSxdNUiLvd5uJz9rqkiCTXrHz2EuepFXc8v2sVUBNMHmJrkFLEYoz4GN",
  "key36": "231Gts8BvWbu9WEzMH7xnfzE8RVwPVBqXp7u2mUQpHC5Zfck8hrUp98yaohyr16wMmPqbuFL3nru1wpPaqZ3spWJ",
  "key37": "sDTMBuTZpS64i2tCJMH9pMfzLWsoTiMF72aDLTnHz34o3wJNv4EtiCAXV9tgog6ECdQXQMmFihk336BTd6813ZZ",
  "key38": "CKBVhHKiKQwVzN8dXwXDp56X3WBD6JUZcrXfaGjrHy9HTXNWuKKo8PRBBnr3EvxAc4kqRuqgCGmCHGJmaBCi7u4",
  "key39": "3vNdcZY3TmQ5PLY6CyrKpeM7eNVqf6JyeNiFciztSgWTAYRrt1Rpvdm8QBCrMThE2e8CdutVBLdBf4Jd1mHd6ERA",
  "key40": "3Kv4cbyzNXvMJagQSw7JWkt7Upm2qcjM6CzcstMAD6atKg2vvZdubiBumgd15jwmhfFWuiXbWQ3oVUQDQeSkXMsv",
  "key41": "4QkHkxDAHM5LqR4bmF8V5GPw4U6o7oM14kbBTwheNBF3mVq1SE3sEk5RZVBVo3icSTNPxKS2t6c7KV2cy4aS2HZK",
  "key42": "3LmB5XiHN7gN46womc9fqgT9MAjRLsLU55WWDXjsqagkLN6JDucegnivcze1dcyXYS8yZoB76Pn8BegchnEUQ76X",
  "key43": "45XQyrk5ioFoh9bEBPywHVJt3S3qr8JJiohBWv8GcaWdDbivSwE3DWNnmscB6bry5Wkt6nxLRdEsrgGZGyftV73u",
  "key44": "Fha6y6qiSzewq79VMcM8HXjhXuEiQwLc3Zc63Bz6uCNETA19ajErCxQLGEiKGqWVEamKJ9dUyS154UeLmhZtwZk",
  "key45": "3gKnKMcmyTpU7cZeGT1jCvuqKPydN1GMm2wh3XS9Gs7Q596tqw9VauLpCmfDK5Db6MW855e3P6oihumcy66etA57"
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
