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
    "31yTTTGRHP38Ugvjnobqu9k446MSBSH3r6UfhBgunVH3aDG58EPBzSvkamqs8Vxs42Tr8ztjrXDnHJX54MFaUKJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JB5g9dfBu2wFiwjBYTR1Yw4oz67rKzHp4BCXKaCMhaPns61svmTuer4qZQrqmJCaKaFeTUdBqw7C2bwJBzG72UA",
  "key1": "3SFMfxdYSinbJdwCExm9kjyNquT9Va7dWWacQFcGSJnnd8t41ixW4ZTudtPyfc232zr636QDuez6zG2GDhBmXGd2",
  "key2": "4UvFwXxag95YFsihjKDTULpMbwZDaisaDUwaFAoR1erjACXFM7hKogNY13vfzcnjSCNhgUC7CyCn3PiTUsp69L2R",
  "key3": "2WzXAKyXyeXAMyX6Qtbzj3HE2gJgQRGmNMg5nDqwJD7aVzD59wzoT2xnhtaf6J1NTW52RBQKbWxtzeBCaPyhsx6K",
  "key4": "42A3uSzhL8FSW1i8yEyeESJSHwvBH9aLkRDHL2tJoJRD8gQCGsg3Crc3rGpad5Qbh92Ti44R78qATaeJMntLrLeF",
  "key5": "4NLCQYDTp9QmEwCnb9Rv3pJDYu1LBbuUYamqLn88QBHKcaqRqQgyjzJhDH3963EDUjhBmhr5GuFPQPcGf3u3g5hs",
  "key6": "2vmfQ5GLRGqoZhpDpS3da6RqCCy2GyC6ZnwWezyuscRsoMraFyBcrsF3jnqCzRisVqebLBVs7TE7scDGSpt3nowo",
  "key7": "tRqeupPMAZrsRC6zeWmQaZj3W37UaqrEDpJC6QPuarneChJMJeUBg2kcJuit9uiBbtk6vRqzEJLizdCQEzkRW1R",
  "key8": "5t2JMyJs589RUfZs2tt1G8PCEPFWDoyp8S1LzxLcRB4qb2BD7PqYXE4fgJqFfJFKZsRfSFJW1Km7LM7WjU9UEPSE",
  "key9": "idehZEkKSXEzJuN7bhSfBbiEQvgmGKATaTVZVAbHHokykbrhmVXPozAeog2T3brSzxUjQFGtpXa3BhbvW87EzXW",
  "key10": "bKGRbNYQxcymyHtdHEPCUKMqpw4aepuz7NeWhSDXHxqv1X9D5Muv1Zg9b1QuHc1Suehn2Dotw6d9Upzu4kmGncP",
  "key11": "5nMgfgRJ4iSE88P7y24eZ9pYSY882LqyBawYptW7kr3zLo4PUJNu86bqbM1prc1WiDNZhyviprtYmXUXwPeH59ac",
  "key12": "3sn1aQKRhLc94VTyfRdz2sQ7VWrEqU44YLxxekpZDy4kknQ1cP1s9mmdjbiwtVzakwKa96HoJeR1zRkS157E15cH",
  "key13": "5UqnmTvGsZFwAp7uzE4uXwiGW6No8emRheqNycEGdr1LhHJpBoqDKKkDYTzzyRK9vyeBty8ioiuEav78APRsNvTh",
  "key14": "i2xrNmEidtX5cFsahFyqXHiaYqycXxapsv43hyaPxTk99rsoTyYvyjc17g6Wcwwg4KYghfaPJiXiVg2HXVKUiTR",
  "key15": "3RuxbrZtgU5zhdneZ6rAyCoX8V97aSEhdfxi4UiE2C2tgq8ZYD1AWxq34wqVF27S9DeYNPLtgCXV8Ww1wpmhTnaU",
  "key16": "4PDA4cZDJ3vJJoaVy57vRjcvRWLoFGAeEMv7GRqrTn1j9hFhp9xtDazdcLs3htxqVDUxDnU6bhBCEjRsA49UWYzk",
  "key17": "5Sj1rFKKaYJN9howvML4M3EL8JskeM59yG57M3UfUhJk9zx3dGBxemR2hQCpQ9bNgVapfD9dnbeCWXBwdvsodTX9",
  "key18": "5sJLPZDjFtLEJpu4gDCiqBquFguqrhR4oGNihqhVCjptMukH6DRNyFRBJoasAvpcapDhrWui2pDSETiKyJ3pCya2",
  "key19": "YMpqDavWraPuAsnvVUoEeaQc3XXXXtJ6R2L32qN8bVmRddoujcL2zXp93V3kSuhnFNnvfELSW2GqoqzTct3F8BB",
  "key20": "HDFAxTGhwc5iZZywHsimobQSfhbWQvCyPyykzkNd9VSHpQ2mCyADvms2fYC6PXApBCXDXfFGoPcP1ooQ5VCdPXy",
  "key21": "5ny7CeQZMUNkpwewhhBfXGxXrmDt9cZpxPajt2aDYu4txgEjWsV2URwCFgvKEGMze8gbgR9D4Aji4kUELrMo8YiU",
  "key22": "4639shSXyapw4FcPW1nqwuN4RNgDYknZegti6Go9YovJWeK2FrE1fXYMno5Ws5jTYejri9mWmeVu9H6y5Dj6WWpv",
  "key23": "4RvHvuDLteRUpRNMREm1YuxQ5ABnswdQuAASdQYqPsyaVgsqkeuXph2g8Mcew6UsFFDJHGzDp6khtrUjkaYWM8aV",
  "key24": "2q3jkkHQmN94TWistsrwVuqmzymxSHMYS2W8vKWhBZ54euR5qn41Pfe2fTMxaoBu3SwF7gEciqhJjmQhdVif9HjT",
  "key25": "5wBsd31Ce8JjJunQvKcWhGehvm37D7Lenz7DwaZTCf1zxJAG6yiaQi8ydF8UJ19tw6xi8a3JCACYPsrqPdUcQs7B",
  "key26": "29xWBwZ2yk7y1KpbRe1RZ3u5SewCW3eGHw22tNFkQ6cDW4aunz5f5rCW4UVPuta8F6rYetBihdE5NqyEesWdxH1Q",
  "key27": "31Z6JYT7scaxhbtJf8dBV2oDLtEaEAzCWV34NV8zhyuE8xKpd25b72QcJRwiKuCSRJELDwi2Hbx6B4kC9cADxFWG",
  "key28": "2JZnUE7NASwzE6rWu8GpjwCjTS6r5kisNoqrLJtuQWtcM464C1ZFBDPtLTaugoeAdW6krshWTirdfr71r7aWpvNx",
  "key29": "4r77ts7f94ST7YwD884iK57aGa7k1kNK3YSk8bEnvTCSaEPRYbiUEMBavHMrMGZLawfkfSTgq4SGJWr1ei8sRVWD",
  "key30": "BD9kWjEctATkNbPdZt9AUwi1cKP9ZTBRP1brcCsxnkaRPFdk3QPQUoCkg9YYcdkCZCLNtkcb8LaRU3Ettui9JWK",
  "key31": "XfTn8PgdEyNiDJXpZ1vedAmeLoNeUySVc2VjnXPWg8PUYN3yKFrRnk22Uxu1Ava9ChBhLWMaBDBMFuqtBdVGEfY",
  "key32": "2BXHWYVTApzpZDFs6vjmk9BxFDTG3KpogxFKPBooaQofPdyaKKsDKfpUnVkmnQWKYV7V4KE6NNeGBvLmgGycqVoK",
  "key33": "2Lxy3AfA9RDVRe3qL5qhqmKgQdXmmT7FeMjTsiL7HwmGrgSLckMR7HCc8viqbWMHuAeGj9ot3j33qUzp6uHXARbD",
  "key34": "2tSm4C9m5pQ4yjc7R5d2FSXPqRcCHqLYSqoMue6QivGFagdVAM9v3weAVQpTtXs4jKBMvKd3Mb2kYg2XiPNMvcSg",
  "key35": "biY6egLiqeXCpLsX2PUmd4Unj34u2K96yzmXwoUbzNB7uAHH8RvN5Nrkah77TmHxjT7PTRLS8qvZgJhwbu9sRdj",
  "key36": "ub7t8wPyP62eGUaMoXdWY4FM154Ey76P21q9ZAAGGtcutAM6oh3thMJh8YEUakMDFMWrMU5HpUdktXqYYxdvcbK",
  "key37": "29fFR4tNrkfFFizA3usQAXCXAPRZRjs1LRifZ2Uv9xfNq7Z9WfEQJ42gXiGhtDfvD6W7XHzfNmCYLQB6WnzrRbsp",
  "key38": "4S1D8JzDKkX7E7bbcTkjZwhoU5o7dERqxCBrkobTYwnV99jD7FBHkcR17DEV9i2q8myBMnaf9SrJxAbvMgRUFpLc",
  "key39": "2JRXwvYC6ioAucWEKfZ7dLHSUJ4qkg4JwWBmGE9uDynN2PtKmPmmdGDgyaLfspVsCYHshH4QYDU91WbtLrBqHRG6",
  "key40": "2HiB8AHfDnqjm1VkMNgcNVobJ584bkXZALrRn7HxZbBk1nVrdcWp5UWQuGQ6XUbwo2H5FZgj7NAPEywoJZZDLBte",
  "key41": "5YAYJBJU1zYjfjoQKMtybRjEkPi8ac5NVmgXPBEYqmxvDUBEFxX6w2JStxqfFSFjanaufTErAjV7QjvH7eX5RqF2",
  "key42": "53di27qL3TJo3eXE5RKJyzHJzHzh9cy9VxrYBzhjJtuyY7A6whCkzbc39ht4iVCayFG3QQA4rsoTdLuQxuEb2oJX",
  "key43": "hHFrKF4Gdb1GinADycRPjJJs4kFqyrptx5dyLVackHZbPo67STYHnE9gLJa7pg4UowamCfZ2Bow5JQdbvMif7gu",
  "key44": "3CXJhag99dXc9XRQNDzBo874G1fwTzwvDyTABirdMSi8ReqjJHkDyjhWoLdnRoFxgi886PRG3RPakrRXGb8L9GpH",
  "key45": "3WmiRuCraEqBxSjcvMuiRwoMs7u4WDgbySr7Q5RwkwtdRWBadC2w3eLwtHN2UziFoScMs84Q5h4LpXAWEXHucVYH"
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
