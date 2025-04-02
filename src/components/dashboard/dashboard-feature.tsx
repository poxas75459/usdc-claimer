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
    "4uNyMw2S14MT6YABaUDyYbgL2XBkXXajXbx298wsuYiWMhE37g8uDpaXCZpHTaHQ4NKERqYTGDcmv1TePz81R22G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SyPc7ZKzB3QxY7MPZVSwUdKfC8GUwcFDEKAXJ89vmNVoh3ZoGLqJdDPDzpNg5RMjXmHNDRq4jHkivxH7uC3Qd52",
  "key1": "6cgGNPr5mgeMBdzVMziS65k1swQy6Re8mzTPwCvGDgJaNXT6XJ6rSfGP9gN1hmsAF33gSYgarodNobfc9N6857Q",
  "key2": "49xoBDHC2Rg625hPGwT9rbya46SJx2H7bfoo4g8H6C7fhNjypLFgi8Gd8b6ETxLTYEpkCQvxVWf8wZP8b89Lc7Yb",
  "key3": "5PHtfoAaCax3WGvF2mrd31VCrTiwb97NbSbNVBoo36ReL6Dw3vg8MYHiujC5YMnf2APVLSzj18HyhscXKqCarF7L",
  "key4": "3AUHxitF6tnt8mRwE4ZBVvfaH9QnnxBETDBb5txKLPStQE3a8koitNv2dm7cgsGRHYwt5eTgzMshv5Ht8DQFN5Gm",
  "key5": "7UatqdRrnR7ZLVLpPhFRGPbVNcm64b4fa2EWtR2crvLg8kfZsv93gtGf3zFw4mhAWLYKQeFoEwKQ8NRr4onth6M",
  "key6": "2KAHBpiTVGGtewrnK2cuT3x9qHwpLMfkTjmAT3Bzfd7ri8hwHJB9He6MBeNBdKC5bu3QfbTXMxPnrkirbUqnbpcT",
  "key7": "3n32hVnHBJ8DYLiA5j3mk5BD2kNjKzeVtHqmfVqKoq5qDMzCbjBrDZVm9drN2ZWS4iP5B4YRGyGJUXUChppMPa8E",
  "key8": "2WhPWk1j3f8JzTyRPCRk8hyYYzMvpq6wAjdQfXrD3Baq7XFLDqfSheBkkCTEee4SFw12i578PAgh1QAPUTdFD5bc",
  "key9": "3XFLVT8PsJHWXYh5UiDLjW1B6bzJCP4zX9KKgHros7LxuL4d4WX3XmSbv79oFxNpi3vmzuwKbFFdGzqRbA52Y1Pt",
  "key10": "3qLLPc2aLp2Xr1DWdxtbXb8p156zvQHUZxNDdNfwdWXdNYqXqo365B5CKbB2uj63o8CEpNqwZYRoA1eLxFjYBQ3i",
  "key11": "5oFRZdiD4XXjPQQw4bw4X4zbNSMRNAbpkQxFgy8eHZnwF13D28Q8WwPu9tKckq5k9htg8qMVqDeo4UCoRzeKPQcL",
  "key12": "3pqHERYBFFu13zEriGQDp79ss6oXAeTtesjXUMBcf8KV2mLhW2mbedVeUCMKmsMWduLEzDzed5Nmc7YqAg5i5wWs",
  "key13": "6HwrRFhiyKC4hJrqSnprtPiwyPwYgx5K2Z6XKHaDzj2jnZno53bajGKk1bvFmy2BZHpDQ77uuckqfRAgV2qCdeL",
  "key14": "39x6PARnvFiii5G78A8YdFTduT33X9TkC7rbK1G5cNX9BzDJmzZaFFbxxh1uc4z6GKMJCQUb3gFgS9tSU6jMx2de",
  "key15": "TqwaVJQKTHWDncwoWJ4ZbPToAM9MEWCRnPjgsVRpabQPyLTsXpM3rURVajTTcJjNromamBhGnwkeNmzXZARzkfi",
  "key16": "3An5vFBEqGjoQWzhYkmik6FUHSxRzvceWYH3VqyGc7yf51JH3UqqPH8G7LtdsLS2QMdLccJLtrWHyGoefuvWVLn3",
  "key17": "LuW6gDszu4Xe3EFFJxGMrduWpStuwRXygzPcBVAtMiSfEG6YieNwS9N5EXE4yeUH6WtQryvzVj3sU21yDNVhqZA",
  "key18": "3pUHE6fV8kVF8WFCqmkGA1xeSwPunei5KAvvEkPfy9Saa1FcXcKSAEC8fqhFRedwYwhvoJPaudpmUFvB25FhmLtB",
  "key19": "38dzkcfzokcFuSHvBrfV54bV9iqisa2xAMTnvFyEYrg7DM2XA3dez2Q4dCwfWRqMmGSciyJ7gjnAHqh3SKi31dbG",
  "key20": "GcBMwbS7NyiyDgRFNqMFkZtcYUZ3MQZJ3mLaBsFUxpDGe7CfLam4RJXHNMAzD1iyp6wWwdSfe1bBQDCtD9xUVwG",
  "key21": "37YvL75tCJUExgnu6kMBpxYv54VY9TqRkgGhMyR5quipgX6S38N48cba5GwHs266grb5QnsNC4LQSx4QksmCRsS6",
  "key22": "29NzmzTkPusrGa6WazPe5C4H3ZLfoQnpQJ5dB3ffnaZAVDircuXX8t7MXrofMHxhnRngUg8cA5Etq5NZmsFcQgDt",
  "key23": "3FpXno1C7hbFAKXDoeQ3tGC2TvBPucyudNBH5P9Wy45iLXtZkKQqiJ9yUdBM73cj5uaMghEHfbnCPUw5NLGFB9oz",
  "key24": "pQDtsfKM8HNs3MoJ6c7B98qc8CD6XSLGTJrpPcvEBeHA551cBfazUfYUp9hjT7Wp3PPTBr8H1S9J6UZan9WnJJ4",
  "key25": "3has7ufe6MrtkYy9suArqq9zu56FVWU8h4SUCNBzf8cZpWZfL7e6AyhEaC3ND1Vh8x25zvrcHjzy8SjFhdNxAEnN",
  "key26": "44h8j361iiJuPAesLBSabaA72s8XFKXiCUriU6HXdwVytQM6PKV2H6NNFhaPN9yqgaFHyKFgeqdw5frNUzD2Xdtb",
  "key27": "2sbEPAYrqwjwDNm1BTq4kwUifQwbkbKEup5qnGCND1Yh9eL1TbwoTjpWXsYJRCQviSU5CYCH86mizoMMjK3YvTrU",
  "key28": "jbwfHAEwUuKzKAb36QJcHBw8RzF8EiYX4xVk8aaEfdAs7fshirY95NoWQe7xr1FoMqcKH8kaFisKLyegnkzUYsk",
  "key29": "3qkXAh3wqy1RVyhZ6EgHcnggFBwnoLVJtJyhjib9Vw73f9J6W9LPJ5VC1ss4FygkwJau4JvTYvE5KDPx9ndNSb3a",
  "key30": "3tJsZjW7SNhHHVHve4wjpD7VYNoXFp5bF3g7VSvAUufepwtDbAobMkasqaHKHjDBRt6NdDZi59raipFKpe7bwvBi",
  "key31": "3Bzd4RDbx131ckJfRtEzYk4zh8yH8ztfZ4U3na1UFByTGhuhJd7Wc3siUr3VVZMWchKf7Q89amVhqJR4V8mMGqtS",
  "key32": "5S5eEgfciZjmrMQL6AUBYAHgmRmm1ZpkBZimohEmodf2eFj9emrF3UQiBLTsEXPNuTob7hMbperuJqEbTt6E56cs",
  "key33": "4DxAeckxmUmB2oK5CYcC3FeUbZfgADQTM1USgrjZyU5BdM8cSiLGNLrkUHhDj8jW65AAxXMas4NqYqbGsyxnwT5p",
  "key34": "4zJEUhtTk6zNMhLuqhN6X2vkZLsWYviExM7JjwSPKmNG9UuTdNxPtFdxCeQrK6HNU5ipEzMj9mxAcE95knKyMANT",
  "key35": "4b6pX3ZA5ydjHqiydkabVtsSFBBVWsqSuxdtHQQwAL3kBzUJezQ5ryLEnCraMT9B9NZZeAYs1uHY6tYc8sFxow6H",
  "key36": "2tAUfxcuQKD9m5dQwxVwVBoSWwwGoaibH5ifzq1xb9Z5Fj4u9AEYRiamf8xDpv9qP6wVa6VyY1xnGhiyeAx4JiXK",
  "key37": "WM71yq7gdydfwCPgxzmqXw7g9bQ4Lqf8Qm1y4xTTh3ro5ZJV3hsJ6GHHM17nX5sShj53kWFQGBxyy5fHF6KTjZ3",
  "key38": "JgVjRbVsf3KxSSvkPaZZbf4Y1G9QbQJfiYrYDhDWPdbBbdxCdauH8V2WE2H51pqJhwQmfFWNu2fXDdmNCe1Mjuu",
  "key39": "5Evo38UqSimuqoYzm9iFHFwxM5JKYbujLcqNKbmKc6QzdKFtiMzeaub37cFV6uJf1tctFNSBycg3DE9bzttMdsZm",
  "key40": "4iVaVZ8tNWjZF4vUHfnnwgzLjxYpRRYEJJsXcTQqzow1LqdApd3hGMx7Ga6Z6vfnGDtsyTcP7VXFUtqUFVQ9o4G8",
  "key41": "2Zw76Xpf8beLQCihFoKu53X63yk6jt4YnNcqq5i6YSzw5BKGSSfuCKyGd6Tf1ZS6VPASCR6WF1zL34qhdsPUgkc9",
  "key42": "3PmD93PkS1vBLxJmYoWi6WBWpoHVbv8xiHcPi8JFuXs4bKnUhhJ9XsHcg9vgdAF6cjm4hz9vVpCdWuW3tU4SVWcX",
  "key43": "57YqGdJn3dKm2k9pdpoeWkcTHVCVbokrvzdfH8d9bJAmnaxNU2ZgZBmzdVS4CGqkmAg7QC6GQ2ytQo3N64mASa4t",
  "key44": "3CLHxnryxKZMarYQnneBdrVStYikVp5FQ9BAb3XCMUE1y36mqUSudY2rmc4BKGJC3MAW1JjMgovb13QqSEi754G",
  "key45": "4XhzDx1E6xHiKMiM1vFKsdBW13a8rQ4pBU8NufuDLwNE9HV3s7ZCm2bPRCxZZBujHYuvGpus43qpavJEoXbNn7ZQ",
  "key46": "2JrnM2KySw6ftiik1zdCdnFxYc5YyrWoRoFZrsCCmF3W2Tjgqtu8nkkw3UjThxc1MRVv41NB7btxGsxzrstTEv3L",
  "key47": "5eGpcJeEXCEGkkUyNeqQKDjUUFfwU6sYvGWJaSZWfa8krhB9bNoLhAE3DNcvk3MRHXHZZVwTxFr3GgYB7uEiENQw",
  "key48": "47aHz52WJwccqwyKctnsHhCdPhYfkum9vrxVpiRJ9pfUMvR9AUfY3hKWAWRacrmS7u5LSSbDVyWrG9JLPsVzGVJW",
  "key49": "4vK4joauY8fPBGechLJEs6R1gLQqxgqBf1iUcGNnjrvYoHnPpgubN5d6dX5Xfwezt8qm7d9oD6WeWGyBTrpEupZH"
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
