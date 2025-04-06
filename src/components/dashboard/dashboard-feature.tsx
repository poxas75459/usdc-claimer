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
    "3XoZGALnJ9TgdmfHsU4J9aFdxxWL922TynbE8opA4ioNMRjj49Bs8rJgZuUDqUwUXJKqBCmTDaapAssfuwmRs294"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KJsvSMgBcuG8cCGQFvW376fDS69mxKHafUMJ84wUzVzehALHZ3hrkt2NFw2e1NrkQBYevDb584Rhqru48xWCDj7",
  "key1": "KxQV6ac3cypk4hjNJhFGkGZTeafcXtcYvUfBtzVZnVYrGfcpGsWPdap7C7nVmaCxnpfJts7mUHj2mSa2NKBLxXJ",
  "key2": "3wF91j51iVtpxypG6TiGJQp1xw37q423tiJhq2bFjfB8R2saVdi3oo2vMpiM6mwVftksNToX4hEArSCzpxu1LesA",
  "key3": "43wJRSVt1ioDYMYshq8LHxDjcnrpuVsUoWDWksPoRu5GwV5RjYt1BHEDWYakKhsUcrcze6HQxqt4NsYd92Qz4Fj5",
  "key4": "61q8WapLV71BnqBuPEKixFXaujs1HbJLERPf4qE3CUrF3e2dmL8158wPpufkjsAnTskzVw4zPSBZiwKkmd2o9MgF",
  "key5": "3DsBxGUvbV5UBAat9igdt5VePUvo13zNZvUNHPp4EtxVA45yRcBJG8hCAzZihMi2F693cpurP6NUGTWeoLtYfif",
  "key6": "4iZBSPmHKg9dYtScJNksqDx3Aio3E3aH8m5xNsVbXr7dGA1vdw6in6kLXXihAc19PEfMkHte2WqnHu18kTo4Kgk7",
  "key7": "5ZmotQQDkuYttZYRtrFMndieEmms1bVXhm3VQ7jVuL5RtZgPjo4FAzXfbMcmHsev267qL4tntaZwbJURzzcunVVv",
  "key8": "3yxqyU5p1A2kFXJ2tDwzCKphUsyHYThnJGHkYkha8KGD9Pc2DwXYuaf5ouTHB6A1ibJPfe4n8Wda1qTqKDf65URr",
  "key9": "5jeuRyHVeCt1xDGFWngQZWoVEmRydstHDmfcQq6zUWUquwD3wRbiwjasQEYcsrpXg1g5zQ539pLJGMNLjYmsrJ7v",
  "key10": "5TVN2NaRuXViGAGdbepTZF2Yu5t5gQwv8ApgS7wybEnPxuNB32qGh3d54eK9g7LhatqdFxxX4CC292tCYqfhS98Q",
  "key11": "5DPYEPHDRBLyM22YSkW3K8rPAY4TecCa5za7QH7MtJRYNbVoQfYUsu7WBaLDenTDUFPfFfSDUNpKTx6WadQC26xk",
  "key12": "3FNT5DioVctFhKSTQeD2jvgmq5Axs6QN4TQeNMNyMqya7s4r924HT1w4kJCmK3w2jvwCQj7xreZ9Ekjssv5xpJYU",
  "key13": "5ynM98X8zaRhwSrjX2EEE72TEC8NF23bkgDBrTB5Ao4ZGgzjuHoB1Wiaob3G9Gfj1d8PkRBaqeW4i8JcbFUg9puk",
  "key14": "5UXHMyZ4HPpcZFb298vyDZKktrqPWSqcZtpET4sNACJ31fgkE89SV4XggXKZN4HXaYFMdEh3e4PDUNYCabAudV1D",
  "key15": "2DbvYD3Jmh5gvjuykWvvzrnSxXHMjNs7fqCte2ffumMc7YWhSTbYvYkAaWckMiJe4JbdMx6V6VzHttVxnWkCm3LD",
  "key16": "2oWtY7KmSkXAa5Udcs7qcrpzMhUTBDJUWfpExBcumhyypECTKj7XMrxZgEVRTeG16ziuv53yYQqQaHyhxXGdZXkz",
  "key17": "aCC2P2ZyGVdT84QuedFGtcroqUMj2YVefaZ7Ys1N55EmhTBfDmhQuJD3eKTBb7nV5LXy8EB8M7RW6p2HRuejMEy",
  "key18": "41W1EDQ3rZAKWreyYjembx2XjemJ6HCncfgpjk3UBSPdLRYbW8Uhdg4jHKzCjb4vjUQiwK7nWiYd4DRcWivb2Cph",
  "key19": "5ivJTwc6ax2HC5gEoWHUxmZurdQzcoB1aAQmnYkpdfwXzn2ZHyNAHWq6kxnXw1MH5f5WK7T5VdAxPRuVq7VMxm9o",
  "key20": "4npY3dUyHrbEgD9P2JBBCS922m3fybx2jdABroncTWs4888XYmea7LpQF74HXsMKZLZnyjAGJ7vfrk51hxmgnX12",
  "key21": "4g3eUo4aKHTEUJmXxcPRoa9hGzGPyEPZejZ4SkC5uZ6sVasd5mt4G8GAQJTAiT4kjqnKX1JjbdZB9hvJ4P7UaYM9",
  "key22": "8o6pq4goMwZY1vfyenu9s78sZbUc2XNFHX998MgycdD7cQjCiZDeKL181Jag8MK5sFR7EuYM2A3ctRen8cMF6Df",
  "key23": "4GVqhYp3E8AsFZ1V4Hr37Mv91dU7BS5naribNAutkpP4azLMPHT37Xe8kGnQaB2Y5FfiUAeAMB13RfNW1QhBkHj2",
  "key24": "5ADSWS7TemM7Bs2S6pdptHLuK1nuhoJPdzLdDsN8X2gZVYBJFAyuXqEH8c9qmYQPu5oSv69UUmvxxWpKYg8tSFBk",
  "key25": "36H4YrSMorkLMdfnCnnCdDy19gXzveh17MvgJmtaFhMLexHow5mXSansPy7ArGEbB7NCYTBUYmT93gnN6caTqJLx",
  "key26": "2h8FKro8YJJ5TTcTmFC5FjQ59W8oGdwdPZd8Zb8qSexHkHCymP1B2UYbjBnjDFUyd47jgVYEDqUhBwt33nFRcakK",
  "key27": "5u9Z2cJU8bruq1tKmsr83hRDT7w61ZsCkDwxFLQkbS2eyAUkkypCfPE7fZQD3CGHG7v7VAShoZcCZTfdtFDAtvHL",
  "key28": "t6whZggL6fLv4j4xeDK9FLV7MZt8iw8SFCPUSgv7TJdqdw4qeZ1DtwDa3cB5CVEi5tYvFk2ZBSQ8qZQMrYnLiJN",
  "key29": "2rU824MaK7ot4Muzdn2KVsmq26RsQ1PKNXGjdxQFdttUzgLqmhxfX77jpApaLUNDKr8j6Y5EpQ9U9eB2FXHtuHRG",
  "key30": "3unoTpqw1Rq8NgSUJiMRmdH24CzCCD7BLHKFzjyMzpVZdLsufktT5zJB1ESruSKX162AQgi9nHaBBHaqQp7d6dBa",
  "key31": "sLPhRnmshqU8BbYzG4T8ZD6AuZJbacXUd7axHncjkkxmj2NmsPQ9CC7qen2Q8e6nHCpeKXt5B9qvxoTqJoY4Lf6",
  "key32": "2ssS3hgHsJdaYgqvK2TDYV9CNopzHont2oTdHESvHxexTk7odiszPgxWAbtWJzhwuUTSMpScbBDVydi5zMFmoWif",
  "key33": "2ZuszhjApMxXwnzyoycjZpvghHqfn5scK7CgzxAwqb5MKhfgPV8Qz3xFLr4yvShhqDtpk1UQK6sDahoCfUvqW2zn",
  "key34": "4YjNbGDtvsJyupy8LLk4YwEBMaPLvwbWtBJ4vtfNGXAYJJtMoeVz2oDGxJXapb3duyf6mww4fUeYsNrSPgLms5iS",
  "key35": "613Y93t83FDz7jqrc59CtRp7wxrxm9ehgNzDfHTuDyEG6EqcvQV3D5rvhBvTivMHCZo3Z5eH9FGFEt1QZT3fZPun"
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
