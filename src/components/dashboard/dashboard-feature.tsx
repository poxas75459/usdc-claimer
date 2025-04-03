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
    "53kyHuJPJZeVnioY16a1RbZLdo4nmvxErELBMb6TZyeMfFi1YpmsHaevWwAYLiGqDE6WJN1cVnPFXydpYQUQCKr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v7kfkXEmDPCsNourLsahjnGjR7P9XdbKKYUZsa8wwid4tcywiYtibDBhoZH3D6zpsYzpUCxCr6E4EiCHFFkqkZp",
  "key1": "MrRcjG5N1fWfRDrQ2tzPsEKB7E9B8aJ5AhzpCibU39CcnLiopfjmbgaGqX6g86Xo3cGNMpzMJFvY3UqP49QeUsE",
  "key2": "3RunYa69De1ESD1du8BYk3BD7qxZ9eAP4Lo4uDL33yh43L3o1Bdd7yvsmpvkkYDyTnvh3deMaXzmxcMtkU7eiEqR",
  "key3": "5fTc9SzN61E1oNG9EaRzgLnZuwpoo8v6Wxj2Nj1R5tuVA1EnYn9yiggSjdLg8EHWFULGjnhHWNiuZp8BqFuSGsyi",
  "key4": "3LGSffUvuamgNh378LX26RVgPN1141g3LDkZyY65eEq9BzTyZqJYoNQe2mjcVzXiKbbhmYfDrYpeJEStQAiJTbgf",
  "key5": "YhcUhkNxjAth3M8JhBMYakhG2qMqeaxZhR2Dj6jVvpnep274mpoNz9N9yYxt7y7SWBEJETaGxTDzVoXgX4qnVpZ",
  "key6": "ZuDPXMR6WkvdeTvQgLPJJmT2syB8Qis8zYfoynio79qT76K4w3xcCccu7Q9fHwdgRkev2HZGX6S6HyNQzZ52ahF",
  "key7": "5k7yh1BhW2hYMdhGoEVye2Pp82xyV2qxsnwaY9UJJJCcvTYGyCugQaLzoWzzDME6jZF6kyytoWGS4nncRm7PFvKy",
  "key8": "3PpTKjq26A4rWa6CVu34XtwPqaQZML9P9ByLCsn29gaQFiccoPX5Ym4YEw5gSmFVLK7YkjtyYkdipNvcAiaM5QpV",
  "key9": "5vkKHkUeJwKWuwNoZS4k1f9rtwW5jEYYZ3GnyYbYDg3k2248joHak6egnb2okeRnRBhQgEz3cJEH71tuQNvGGMyP",
  "key10": "4ka1oYnMJ22aVN8NCX9U298skvB1rBbnR31eMB3s1Eyum3UVCuVkBVxVFKo7rxC2d3EqSA2qM4hK7fPcEupg3Nso",
  "key11": "3QjNnpEQbpmWxFp2YVJHBxhSHnaWWTj9iZ7HVNmA7kEXn6kexW9VqDsZ5vwnr2NYdfEZcNxcQEc91D1QyvLVCPbZ",
  "key12": "2xT2G7RSLBoPDGwssgA5CJ3CC2HP6jUEc3YqrJpzhmGGEG8PyuhC7PnDMoiWwiNYvgec4cmtxychMMvkvW2sJRmG",
  "key13": "3Fn5f5m3N1qRFLyXfx9Rq67dasyUHjpyfgp3W3gqV1ee3uVsUizGrtSmPYLTrZPdGimCpy3ajyQcnSgwe1y8tepi",
  "key14": "2RWD5gZ4wp1KtT9XNet94EFJDGJ5bYMBj5J9TkpsdJzrEBY7PNNVJ5W8daY55Z1jCJi7ZpEwp1gLNoYHVANa39Hz",
  "key15": "2uXQDDheKSi9C83ihyiTFkiANUHF4DFkyYGJdmTsT9Vu453sAzVZy6kYs7Tq48xH3nDQZR6qwvF5k5ETQB8mEVvx",
  "key16": "3fUkU1XwNJFi5RiobAJB8QA8o5s1oqdmQDzy4H1LtmFZjEe1j33eEGq2YhN3Nz6G8WopZs7WARBsYNPadSpdu8H7",
  "key17": "AxzYt2VDTKyahhaXL2h6aB9zChfcdFNTJs8y3XJ4wfaVUWDbVrjCrtroPcC5QdV23wVyU9ukm7nAYT2WsP9fYeX",
  "key18": "4uyqDhz9way12dooctJPQbKajy9wG83gFbZh13vGXEoWU1XnA37UShoRM7AAjN9GbDeFMu75e8eugfjKF59ZSCGv",
  "key19": "3AciN3nQAxJ7YNgGQ6m6ARLmDi7RZHDDknftJZLBZwtgURLuedriAHJcJ8a3FnxP9QYz6D8W8UjSu7F2PQWBRdPQ",
  "key20": "3nerLpf6h7tczEHHhoWGdA3Af4hUcFB25mAHbLJVtynt2mcHW4e87JtTXCnj8xVqwn8FYzje2pky7WkTCpahfyVW",
  "key21": "3G31ztLJsAS5iKbb5q17Ef4iwWKpC6D98NJd5aXj7WT4cYPpiPNTkGtpjRM7npYDXJ5UheRPZB3G8v4sNyKBLzyC",
  "key22": "4KTmi4LFkd4bee4o7xdfPFtpR5LapMyy7nxDv9M9Ei4QWKLGhAq29LqDUDTBWvwQ1rpHcw2jZSvxQ6YsT1YTLBws",
  "key23": "5ffgU3fkwHg9jXaXoxhY3JZjzEWxJqRnjLmiqBbegkK5JzPV6W5NfEZwfDCa2LJ28B4w8L8H7QugEL23sxaX7bY4",
  "key24": "4bJ5vUYNf8WmCexoxRCdyKv9PmZT4ukZrioG8TcdbRtunHWBPT6biBr5UJgQDaNp3kvLsesLvKUm68WXBfpqmKGF",
  "key25": "2FrgJZte7GnbNpAUvjUQg5HjDcyQQtZso8kkf2GzWxwwGqwgy6CEMcVZmedG1AuDeTaPXUFYsA3CQYJCPtNE43DN",
  "key26": "2dDzDyJMe5jKz8ugDafgEPANApUfv14frKXyk3DtmnCzD9VGgbbXeNx2UbsgcwpNtNTxZZyZ1Bvcgpc6D489CnYq",
  "key27": "5mfAk9hYhXubkGBDaN1KxfAtStbFxTbFaN3jYhW6TgWZ8Bu38U2tHQAYQAJVZ78ZcsL1a67xx7q4YrSoApnBZhAS",
  "key28": "K84Vn3YJNPzNtLQh2SAoxJ4aQ3cHyxe8hoHH9G24PdCuziq6Z65kor63KbpUGKTRdHZUCd4MtNuPzqp4RLpsS3G",
  "key29": "WELJqYo6tGFgrF7kHCV8tYSB3bukenWr2WCPjPcYL1JhPbMfEnmmiVQSAJuu23cm8nmf6wCieb4nDcEc2ca2gkU",
  "key30": "2iBXzW49RZ4DDikRdpoZwQzk4FEF1cRa7hjCUMpjqvUZu1GMCdigkosiMgKwGVbKoRwUwYhudgCthuaWtU912iha",
  "key31": "5V68eXr66QTEeZ1NrSG8sBKde38ksgA17b8Ujp76BfNn9zQgqHjFmC1xxmLVuUEDGfxsPx4C89wBCu7PyyafWtzy",
  "key32": "2dojnG39y4GdYC53h3qypquxkqywyR1Ni7T9CK7A5EawJ9xqqdGre1UiD4qYxqVCxkkBrg2r2dGfs34NAXCcPmTF",
  "key33": "59uvxmyS8Sc5WfkEKFBrPCbvHKiVC2hFQjPY1mgpKNjiDzAUuC6qAXvzsHPWtE9iwXsVGQnYgGZpiiaUKMDwMPu6",
  "key34": "5ynDxtwFaaxq9vmZYjVs7fvyyvMHgCpFbDrn71XJbx3jxXzhCNCkLftpR7NKRFcMnMqryZDr5xmZPUN84LhrVt1n",
  "key35": "5PzfLNMBvc3YPoWF9MYGSQQ5at7BrKYf3n1eCoaaLNYzgaspCgsGWMuLsXpmenV1jj8hng4KFiq9DvFmiMrpc2R4",
  "key36": "2g7mfVT7wWCe2C7DzXFDf914a5pkqLBABybryuxguByjci9VCbdL5uSAxkSpT16qBhFKqwzrVrGGkrJxv1ThgxhA",
  "key37": "3XcLZ3QY6bBAQVcsTNLSJXiNciTMt1YEChQKrrEnfuV5tfrnyqkrvx5FapP5r9sDBNuDpcR5amP8Qf5RN7NZVDbq",
  "key38": "2Yb6Trms62ihEaxVbCJLD9Ekh1F5NKdQ7Te5oCkhpmLZ8szP1qfAjtRq5PAroisRwJbSd3wM1VsGs2WX6uhdq3Mt",
  "key39": "35xR4KuJYyBoH479mHVkZGtnxnDbyYCxnYYcDuNSa6wTTBdgCsZ3HJRjA4PAFeAWsQPwU8KEuqfMZn7gEGZ4Ewe5",
  "key40": "2uBEo3ErhPAjq4jRLznciQCoS52EUq4mFJDtoamy3sSzTeeHH41LgGaxiREYE8mjQ2hjv9ktaeZqf5TmueJQDiPW",
  "key41": "4Q8sDLuPiq8RrfcyT8vKo3mJY4fxa4oiZuwzSsLxPukz7ft2ox9cNxSbSFtdJPbu47JQZSHhnCftpGVNgdA3UZL2",
  "key42": "9S4hfdxQwYxSjo7o8N2Hva5fLRomvQiE4kGdotY1tdKXZBijwQYiuGhyhpeEbLonMfxASeH31ymhCNNaRb7cSaU",
  "key43": "wQKX1eC7Gv1pYA8XmR3R75UKoeoczeTRiRnzrvBuGsL8FTRRXG4jfXsz8ju6ygWMQ5yYwvFXsB85YXdVK6PBKfh",
  "key44": "5aUknraWwWduP3skRDzVj9xycPhrw64HxBY6vASeD7oRNRVqKq5WrscG4pSMAoxYE2Hps81zDjKoDnSvFqzjqf4r",
  "key45": "4MekYQkHZN2uRhZEvwK5TUeNqgY75ooDXCQwYcrdXd3R12LLqKtKsxVo2WbSb8jjZuAXkBA2ehcGomu7i8Z52UH4"
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
