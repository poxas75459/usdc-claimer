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
    "2Qizx9koJcwUf5uLsvbcx4ksfd4Evu6fnDATCDPbfw1HbEF6FZuuRZev4DVmHnxMKYoYHeR15SRCmSrpNsPN5tFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rCSRJETNH5z6T1GHYcY8viJU5xRsFmiJPgaYCDqYMCBLRKeJfJpo4C4HVpy1CWgcehi3mTw1U1cZcauyLGNLgYr",
  "key1": "2MXB372tf6WE55qofnyDGCyDnKeU1kQHgopeW3WGey6f5Ybk7vNXnZXRZCri36ba4tqTFTNKBLibZpigEAz8qjNa",
  "key2": "3vieBAwgtYwhtS3FCZuCUTba3E3LtqJyFVt1ZPYdVCd1JyP65HUV9ckJUCfJLzxbT6Wttvg2xRn5NPmZnrmwtuQN",
  "key3": "3v1rLh7jjUD13xguqGjrWoWxuYa7q35eAikQ358MUBVfcBupfytyWfJBxepFijaoF85oKRqHBZELyb4E8pUV58QR",
  "key4": "33zbjT8FKjyeBs3KReW6zpzqvVPu2ChHdgWwgreUWPjfNHufk2bsUhbsYCcyYNBNAZcuP248ugdteXCCgVcbNVyM",
  "key5": "3CcDSuqEydzhTUJs51vXEoaN3FP6kJr9kdeAbqWGWGjsStfa4FxAnmZSQeUcWdUjUCv6Qqp8X5dqTfgoXKEZpPLs",
  "key6": "4nNkzwS1KevkdiP2NyNQLj8Ag18QC88EmMHrf5CdWxTatFceP1JttGwPLC3fXyPTbaC9jggtubXjtTKrMg3qyGpL",
  "key7": "XQ7Qade3sjq6DBBkfNeBwAnd8LD1f19ox6fNrGqeTopZ5KhRAKYhjSkceYFLAW86xPsoRbSRsVDscYDVPH29cGw",
  "key8": "56vWME4nxGmdmBcAUMPXccikbWSJYCeT3f3kqT4aRQU8hurkUteNzWSYAjaPEM753rshBEEAWffMdjEBVVKwYWPg",
  "key9": "3G6Kcb6Yta7pFa2m9AVdosHcFm7bV5KZn7GGWWfw8uMEC6jJxEZ3aZ53cWMRXeuBppscAYtNEzk7fuYkt6UCaxJa",
  "key10": "5fqAARMNLnRBRSuRB9L8QfS2h9tMLSsF8bakhowMEeE8gfxeE3ZFELwo9kUYDAVLNX22YfqMcLhiYctTsAToDjmY",
  "key11": "2hzrHUd2wFHgZ1K1oLeTjW6gxqjbUP4o2df9BCGtvZVzwewRLgqRZmUm8FCaXyQ5HKm13emRqPadFbYUXszWgeDM",
  "key12": "3dB81o2aby8P91WYvjgzgtfsVA6NbiqJjCPqyoKsxP8oes6So9dRjFhgRNcTsCzXd22fLmyHEWSox2s11k6CgkFW",
  "key13": "nCUDUD1r5trjWd5Fggqv4khJBMeKiZEAWbDpwUVuPJPyKz7FTzTnfPHSsmVRLXmyWiXb3NAuE5zgeTt8MmA3mDo",
  "key14": "2ZRnfq121RBKoNdgA3gK9etrp7iF7r2bL14iZmdGNuZQfGnnSCtDafRByrVsa1EPu49AM5z9QDZEXyFcC5miUUdW",
  "key15": "3nBbRzP5SHy29Vdmci2DMtDn2FXuCJ3SqxurLrq2jtrcJv1kLLEP7wLxPYbhyeEnhXC2EvtQzQwmsWXF5zA3TCQz",
  "key16": "Y7sTsR2uK5W1QVcTtPqsbQVvHPTmzuRcZj7z9SPEdEQT7w8VnLNsxxZRAPfJ1JsUhpgKKQYTVDkVqCD1UWmN4tZ",
  "key17": "2fe2AWCV9bzwWfBdztVRjGH9cM7BzZo9PdpVJHdy2qb6myBnGuWbt2ECDrDLLHnwg98LLNkCGs9CDi92Sibinpor",
  "key18": "3PSRtyGpBn1F4DKiy6TzqgMma7LggzwnoTgT2ShCMvdfuNVcTzTnsZ3vdjUSBAZ3sWfPoqHq5YHJHVJmU4NWHWw",
  "key19": "jGJRJKuoJDG1hmc8CGmaN6dWUw6ngAFbTYkoidQPAExj8EXnTyjrDJkkm4LjvRS2ReLHtR2QCbUxS3BME7B9uQM",
  "key20": "mj3UWxeQDwa8Y8SCY45KWusQWxdFKrfvudTsqtH7rkPVzmAoNVK8dK9DXxxGRrusZ68RjYzLrpmcTnpLEi6aAxR",
  "key21": "4gnZRE4utuSEcqwEWYzenCkAQe2VihcGGABvse6TdZiNdHjrgthfqNr6SYaFWzEhtM58NgfJhzAhUo7Df3idtHgU",
  "key22": "62LQ33ctBCymLmBXWKavaWTTbLzS3ZzSFeZNNAZS3LpMGFYgCnmSMzjKC6wbNaHuGkHVPkDijnKJhLic3yH8TLLN",
  "key23": "3CmJcxbiebRCy7MRFucUCBRU4yEmJuuEkbQhzxVoVbh3SMQdcCdTUdcAiw4hCsh1bSQnNPrp1fdjQDZKS4Y99jku",
  "key24": "2n2ZPbbWNLBf2JHYmQr6QYodDDeYc9Hfp5yLwiGy4NrB4cqJsZHx2AmNtcN3RGmoK3dpcKrhHcTo6y5irLAizWoK",
  "key25": "5mRzTzLZUnCR4cesfJfNsfbJRPGVkXkgjnA1mDWXQm3TUzW4pBchDhTJxB2iCk7cd9VDMKRvYVL1PKrq7kiqEa1v",
  "key26": "2TuE5f8DHYnRdgWexxK1RTDGjzqGhh9wzeogPJQ6xe6c8T8B6j2MBqaqoSuUSQpj3v9923Tvr2n3WKnSQsy3Z12e",
  "key27": "2ibTMCoL3M2vofqFq1HwjctyYdC2dcHHYWPBTBadgqpWu4goggynhHQHoXum6cSjY7RM12CrxGzKEU2FZ8W3bvHD",
  "key28": "23zUjZ2arSwNn3bJVbvZRkiD3g3C95S9SEqbaMBNV45rXf4gLoxurbVTobrLu2TYTbNgLKD6byJFR5GLrcc6ruJ3",
  "key29": "2amXfFxiCWHc8wE3gZgLtq8Dm8AywMFY5a2egpei35AUH9BwYx6o78V3grFvyd75vGfZ49sJKkccdrS22S5q8sJf",
  "key30": "65oGssPLXzhEeVsQV67yLHzNbjHGDqxsD6aYJnNKYFjf4syYDuife6cYKQDPgTSbqZJDoCcCcr4g8wJEGR8mjUY3",
  "key31": "56tWpF8hRmhxcBdsbCAsEa9VP5K35F1y5xok6ELyCZ1skYErVL3kHo3TPJ468BzCSqmApCwJyKquQQdibbZrWfB8",
  "key32": "55eH5Mw6N11uVwYM48ogUCdVnfgnWvHpywxbBRMnAmw2Kukyb4ypj3jce3CiiiouXtMNjBDfAuzWHwaWcqbE7b4n",
  "key33": "49yXEetj7iMYt54WWDpNUw6TQvF49JvQQWaZ1oF4mJLjbG1jG9MLfHVqfArmfqjzAkmK8fVesYrHfu6NHmVB3iP6",
  "key34": "5X8dyX9uyB368nkxXCY7eK1bnF9awfnZjyUuZ7cKddMKDuQNvHVqnYhAvbRXCGkEKV2Not1wB7X9huX15AAM3CJc",
  "key35": "4cABViNVQ2zggUNCNvcdjAjT4a284bRRUfCzMfxtB5Aq6XccSi9AnNvqCqWTNmgWxrevRJSMd8u5Kcz29fexmox6",
  "key36": "5nq6qYujShSLZvsC4JxAw7Zo1oeRWgNuqeHe8d41gWJNNt8eECYecPhFG8VAikUfeyi5H84jVxmZxUisyPH3FVwG"
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
