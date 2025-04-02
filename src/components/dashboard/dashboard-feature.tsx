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
    "45Fr8JjTtDjtie4Xwj18MaoRx5vna8kDj7Ky4PPEMRony77D4jRvucqvmkERQyMH39HinYaY5sd8mbgTntyq2Gke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zXLBkq75uegWD83Ro8V3dSQiCqzQULF4eEtRPkZT98HSokvoPDBRy1nJzMrctbcm7brEfFKkBXQ1C85ZzVXzdjD",
  "key1": "dPZ6PqFNvTbwXhfiWyRBqeZMTntnDr7PrZtBzCVrb75TieRp1iR4PyUom7qkeK1TYmuLcg3momn1EhQMKP5hCsH",
  "key2": "5GoPX1YxHkvpNZnCreLuA9JLL4NgJbm796v5ehpbk1GtJoQ3DG32ygNmMNzD3WWkbGgGeTVVjTaCaXvPewzYz5FZ",
  "key3": "46FWyRrHezRAhq6yxoigGYHwDFwe4AswwTB7Di4iCWjCC7Bp2UaPKWpbZFfNYMNjLjKwP8Zs5J1zoWckj6kE1w1z",
  "key4": "5vf7bmbjBpLwAtDrxSJdy8cQeMQCMdamkKyE8c3QyMFNqALv1KbR6YkcqRspicspj84k4owgmjceDuTq4BSYjgqG",
  "key5": "HcKaZaPh9N2oMxurGv6qTvESDFGHdiDfXoC3LfHPjym2LQ5PS9QVstbCxj85MyKNNXoNL7ad74t7JHY3tzQzn1b",
  "key6": "VAZfwvjoSQez2qXf9nFCeLRfMFxokh36M4m9afyGbHuXVGN6yrh8Ug648w9LnVJeyfP5xTh6Kn98r5rfE6BJ2vJ",
  "key7": "4ZKMmv6dP1CUDdY6Bdg7kmuBE3G16FobT1JQDz6a9PD4c3Rrkqt8s6NgoXSrY8TMaKHFntYBFdWVjexRai1Xwhm1",
  "key8": "4g3owmLWszdsixFMMo43rhCKL5rbBygSAdQw8v55psvXcfc6Md3RDnYRNa4BiHMyhBMTYtBnE5UwdFwUmtMN3oLf",
  "key9": "2QiUbjbhe3c7vi8xDzjsLaxQHrDtWyJvg9XvGAEf5MUhvAsUuyNNqcyo7ghj1n8xyEZWK6s53ChRw6PS7fW6wdKb",
  "key10": "2d9fN3q6disDK77jA7HNKFwbN3kLQJnydn2i457BNw8PDvvE8537jFsmFq21A1pZHC4qSjkjrHboZw7kiv3YdQEM",
  "key11": "2HvH14TJbaa2V91Zaf8S5H41bBP6uGUByEnwSvoTXKue34zUZMSoMVzJdTcXoCgHWcADd6rNeJDZbpBU8wWBpST1",
  "key12": "2tNvq5sD3sr2aDa4JstHYY1imEZwweSDUFg1EAkQUJk6BEzvL9wsyWZNqgjKJxkM9UB1GYxnRTXh42FVEvdFcK9h",
  "key13": "4YNixSxxhFUkEuVbRYLbxgb6DHEEX9BULTMSjgP4wqEmt8b6vrCQ3W14HYpm5kwjs5xYkqUXZxDx1s2WfcGfKywy",
  "key14": "5zarSTYexcjcx8rM5C3VsJn1xN46taGcNiiKdQ2fCBjiAuWMSnUWGkbhWEuN6AD9CvqFgrTwH8VhUseZTF95gqWU",
  "key15": "3V8Qr59VbCeDVPB8kuqTcUGtMbXsGDqQ2BDAiwhAhVa2uC74YM45KtU5VFqdwhR47JimyZQdXEahBE9Y2UCaGF2c",
  "key16": "oBU9nDnYmWWrnjg9m6LbNPujcWmMfuUhbKPm6j3oJdsRjSuSjAfjKEAHe8c6CWLTAnCtuWJyLE8Q7Qc2pAE3fCa",
  "key17": "Xngj7zzrQxKDBthLq34UdGRiHFZoN1yYTdeHe7gnufb7GhT6nQan2Vn4HP9DYGXbjDfZoKU4qK4Xm2AmPyLFDpw",
  "key18": "63sHoeZRX3DAghsPRpeXohaEmEi6QfUCgYHTLK6d53uF8dT4TpvSrQR8ge4sBps2dzkek4ZmSENpzrMdeyfVBcTy",
  "key19": "3kYoky8HSyNgvGx82EwDu51JKo4dEKdqtN8pt9kz2Y5HviZidotFbTdMpcsg44UekaAnho6n9EncEL8DuuNwk6Zz",
  "key20": "5jPmCH8uNwBGvrc4D8i5P6eX339EyUPUbp7Ar73GCgtuhv1Sskrejdv6R5VCpk9CQMkEGz3eZMy61hmbCa3jV3VN",
  "key21": "4tzYehFAP9vBTrDdewGG1iakML7vr6Dm3w7JSMU6mseYuqeZft6jSp35oxDucNNLzGm6CjRLn8TuAnzhqBpHv3a3",
  "key22": "4TnucJpnNpfnD694AXw1oDWzj2yNuGCNfMcW4rSBgrYkVZYW4Db4TwzjAYiQjGHh7PdbG6pihPCEfqpDfxwURyBe",
  "key23": "43fqeW2JZ3prNe9U9Y6xsWqKtrkJ3Ct2Twu6g3HYo6tqMthBhP3uqsT6uJx4TAhbTWQj7B8x4J7uiwQ4VdW29HrZ",
  "key24": "2LKoapPGDkKR8KHkqWn2Vjp4djuidZaXqb6kBnJjD9NnwcTEt6QjaTwhoa59Ybpsg5prMLbazsTjpJB5gmeuknJR",
  "key25": "5EirrXRwWYQYaRRrEtncFopMVgj3hzYcF8ngx5M1euBdm8nY5VK2EBxozW3Zq3REqnYfgHkSkxoEFqu7oHRyVbiy",
  "key26": "4E9jFVJVm5DDPzFiN6coggkP1tbbEgaQCWx9hzHNT8CxSrcJuuLG7zkM6m8oA1bR1TCxBoe3sTM953E6pA4zvD3n",
  "key27": "3iPGEesp4ZNzStqmeU3hfRYgr1s86UF8hHbZRYHdoa1mBYVqkEW1TdRyJBYuHHik2FgAj2MvLDgLDjRHYrH86thP",
  "key28": "4zNMZKduTy2XSRpx8sE6gncG5CinfniiyzbEqL95LtkR1TYaYJrDWz7XAh6riUDKNmpBG9S2TSd5UQKkGS2amLa7",
  "key29": "518zGc7eBkbE7MXgbCrfWhaoSZM2zb9v3L4ftXTNc5nRUCDu4XZmKgwtmhdTs1MH98JAT2QrgM2ew3XHL2BvuBE3",
  "key30": "3SNYiZ3714BqiudVa7ZVAJhuUkS6WxcFF1qRkP5N9UFyZvwRsbBBrGE5juru9sWHhZp7cPKKn3D5kxF2DbbaUz3Y",
  "key31": "jmX1f3CVJJBuo6wEAAvPDQr4kcda8Qx5j5DuVnNf2Etx5aAsieoiSGtAtpLWieVbdAp9mhdKwqj8dAgUjU1rNfT",
  "key32": "3VwYvf9HW1Dpr8ScNY1MgDPxUhbPF6Tu5vecQj3mRkXb25QJqKKqW2bauN3sP3xzCR4eHZnvc6BvhZcwqR49qMRd",
  "key33": "3cNFE38MfRdtwJ7duEUcyEntGmhmGrM8efZfVA1GNNTvfwNRhZYkim1vGHAbK5DHX8fwWD8NdC6RGRRjpqfPzk7T",
  "key34": "4AjRWLBM89DCcegMVXP3pQ9RvZq1f7SvrayRBZ8DH5rSatMwcfcjPKM6hvKTckeJhamLq3LLQSWggSv9ZtnzjFLS",
  "key35": "2K8RZZa63eVswJaoNhHbHeCRz64hD7Q7ddpCyVPt2omg8Bv6gRS9JRgZWAqNUKt146zNL78MhKdyD5CXWnMKGCYJ",
  "key36": "a2XrSRhUDZARLGdNuMN9gFfXGC6WdT12pzjBUg8g349TpwXz1xV1pEbv8H2Ui6bUewTE39QneLbRtHV2c8aRS6F",
  "key37": "3vKndFpwKVUqngUcEPAoruTn1wxUoQAcphyQQysmxviV9DKjnidKMS4jBHHn24t9ofPBfPLBSwAphujRNqpboL5u",
  "key38": "5wE7DNHJGjPABkvDWCxFGauL9NYjev8Ctt38bF87wtPtdWA8ceBpdFtJaHZc5X8eiLSVtoT8j1LUPnkcJsJ2xtS5",
  "key39": "sAa4d8orMDt5A8ttZ9eYUZM4PcuFFiiR8vHLyPm1JZqtgHKTBdbJstodk4J5E4Y56GLGmdPniS27EzCQFL7DHvM",
  "key40": "2qD1GuUyX3V9FfCTXG1dTR8frBS4kZHkQNtTNvhmvSr7fx5xazA7ShwvkrutQhLEz1ADD5TxYQZbCgSu1hKFQitE",
  "key41": "5ztTzhmpVdQkXif9yX2EHP8LhxfbqUdQd8v4LpwC51UFYT2bu5zM6tNUX7y9dvbV69CUSgJXoXLnUrF7QFaKXJKU"
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
