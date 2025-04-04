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
    "5aQ5wPNLBYAigBz6q2Nsa6R5nc2eeuEDRq7LWdaZNmX35wFyTy5mcricLQMq1BPCrk9WUnWyg2Euo59qxoDvs4uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NbbggzGitshdJSSGrsCV8qPVW7A2BsYNN5cJuGHm79AEwPFoBosrayU6tXqKZYyDChb7PogfEJTdDTAGgWxGbof",
  "key1": "3g5HzSUPEViCcnwgCxSjoFzmPHWv7zcWBBZGj3pqFFy584hPA68T4ysRPGw3r2i8Rvwj9oQhwhsaHHuwWPmo5Kov",
  "key2": "3uNwWSJCCTmavoDQtyrii9m5jEogVxu2mwzZLNzoiKUvmbEpNECQEDgBDaoRaFRNGKSZYZ5KYY6HKzGQb1BGZsKP",
  "key3": "4czEzWchtJEBDecYHy5u3kAzgKbPzH25QudjNRZX6Wkmp6f3ratDdbRKqrVLzifs5j9SsbNmPbvhf8dax5cYEmsp",
  "key4": "49g6daUnTHxh6S3MVPsjbEEQ7XWj8Q9L6N9UYh7foTPnmAZZcvimz1SC4Q5D2u87NmqCx8MYrdDYiBRtPYkVEt11",
  "key5": "2oUCC37rkgCfcbNe7Kr9PdH6NfBX79bYj4MVssWt2eKSCwjWaAWkPzph8pgDKhJr2RoetsjxqiVGQKrXUDQoD7Sa",
  "key6": "4ZgePdbi3fbas6oM79m7i29WrvFjVeQUR7HuAvh3yWqwmMHp6YRcvZjXKRcPUm9jFZpwedrcgQFzjewQ5pNiTUZy",
  "key7": "67YSnH5Wo4BvP8Kw6Ff9cpeJhwwLyN4suWWBkGvCMjUTAtRXaei24SoJtzcmsekC772omFpp4AZhgTcJd2Z691oD",
  "key8": "Ykrff9imYKkRRJJYB75ckNUjA9htyLvAQJV63ETXaYW3AniN1agTKtXgYHtsgSfGeX6bZcsnY1jymeyJDznhPcC",
  "key9": "4Xp1jkWssxu8soBFi2JqPaKsvQzw68Q72jUL1WCcUZ7ZrUpm9QiLCypCDr5yyhUkyx7Wtu7x2naDXtqk4NBzdPyw",
  "key10": "TK6JkNawiw6z85B7oWdDBu7ZoMjnibTo8zPFQ5RtDYuVBqbRVWRfcH7dJSdrW9T33X5VbuSM6KqaYzWwxX8jgeK",
  "key11": "5E6Tsyujua3qTeUXdk2MELAwh4VvqHRqg8VJ2seft7CiRsMw4ez6cH87UWi1cwuAm8rbYicW1epkiTDQ8gFxvbKw",
  "key12": "3JkBxUpdyer88ygS2pugnJTaBugJ97gBYzXVdMeTQhzN7rj4X74SGqQvKYCxoHQcksekHKYdFj6Nq412ULXhcjm8",
  "key13": "4rZorUqsnZjxy37C4pqudgozuMBU9KYDJCeCTj826vH2aCkKBfZg4nAo2qiZrUnABSPbcKo2kyoGE1JYXEx7kynA",
  "key14": "5U9H9X3N68pTBSi3jFwB7JxYqwmvX6MdijKVNfyZZF9Nk7B7CuW57UbAAGy3CBT6kMXCdJTS75m8CtP5hZz6u2sb",
  "key15": "23MNFmZR4xM5Fi8M1MoSiZC5oSuwPPsz9oktHXTdjheFaG173i5nJ4FRj3zegrSqWKSj6rUqGmxmUSNtoksSUs7D",
  "key16": "2UGh5uPYY82HY7HFK7bNhvi3tPGuKHxS69eKfQ88ZxcoPFMLMxR9TmGxF45cRz49M6iX9bYHofQB3dUmvTi2sC4E",
  "key17": "31cG8q2Sm6THyr9dhY3Ks9N6DyjHkd52nR7qYksyxFsWPXFz5Uf12qLT631Lytv27QQUiUWLpc2Z7NzyRRcNrsL5",
  "key18": "2aBAMXQhG3x8Xv8xe4rPzWq8vmvxXUmKfzhEvdzK86GJ3eXeFVCPwoDUuHVshKk5bH2J1Rgkxa8UmBYiXzeEANGd",
  "key19": "5gs2Wf5viW8nZtZbYDEjMtHH6Lq48UgGv26dLSn2Kj1EMTG231M1kzTxCMPzAYNHD1Eb8cfqneQ2GpwPcam3X9KB",
  "key20": "Aoyb42JXTZVoHJgFwnm6BamVAmx3xC1L5KTEMCGHeemDa2nFeVqdapCXUtrnnuPxmasGFXbtqbyzqJoJSmtkXpF",
  "key21": "Z75ZiUbrHgYVq1uVDxtBsjC5AKKyAc6n7bdNufzWqmqezLsFdR7bKbumq1Zh2c8mStwBCTEmBi3TZQR4rFQ1jye",
  "key22": "jQLjykqcvn7YKcJ7QL4TtGFaNu7qNacR9mjQjvg6NEjWsXAvBVhmuP6hNhrNf2pQEgGWcThScdkhaRwo6wLy7LW",
  "key23": "4LHMGDPyyMr8yqF7si6ZitLcLvVJVD9uZEUg2n52772XhFG9CffDkQ7R5SLVfEhDTxLhEjfedRcR4WUXLiioHGdC",
  "key24": "3UFboERimtH9P9i4coEm1dPpvcKqWm5MtqCSWsJHCmHA3uTeuMejg2h8k5HxLkf7bhCu8U3cLj8o8o2y7U7aDndo",
  "key25": "2Wt634FpKp5GB3o6dt7McSRa1KBBsrvCXFMXi9uoNqst5dogUpqFyec38CGG8dTJYbeevtzob88QraYCGkXV7rej",
  "key26": "3L2NTQnCc6u2RS2kMsR3iDeKrDnfbx19vxMsKynVdv36yDQFnM9cWaZavDAuCz6X4hE2PHBBWMiFAk9Z9w9sDFPe",
  "key27": "4dHSbT5guRvjgbT8TKiBt4CbbtyLUsESoFeYSo7JxqkfYz5C76QYKkiLFrw2iUBRYUn5F2z11gQdHttkS5zGU7Qu",
  "key28": "5nHDKUK7dMxT6y3Dcwx5fiQGpfxxYJ694zPB8Nim2fY6jcjN4dMLKU4vmMXVeNrGeEMFZr7mit62W14Ppq1a5UPv",
  "key29": "2J1RWzN7JSGhSLraPQ3fKJTQiknoBateiY27PcVrZ3nmM8jSGEtuFatyMVbrbWFWYa7ufQH5dgswt7rFehKvwNXT",
  "key30": "hEvPtGTkS8Y7ct1T3RH2rNA3aEbWFWbLjjuFKcV9Ywdptjpe9vDx4zPu5aq1oiTaAqn752kJ4JSCgjmh7qJXAj4",
  "key31": "4LbFZCm7YopP2SBjkgUrkSedR3SWXGUeTnwVqXQ2xufyB2NcPbrM4UonGQVC5eMDFtFumcvanmNjHWv7oD91URJE",
  "key32": "2mBPPnyVH2WSkDfWuegvYqtPWkf9KWFqvvY3P6yFwaAfwowtMzYAck8Xr3cCe53RZN447CqxwXV4CcQDyQJ58God",
  "key33": "4hxoGZQ9Qk6ZLR7pwmTn1kFqyqhHCqaRdaax8eM5itKtBHeGYhqqboRwHZM6yY3xEGJH27FSmjbGwqaQFC1tuN7N",
  "key34": "4uYnaT2RkUz2zhvtyYToSNbEjp7JGCtfxmrabsUKZhnYR6EWv5S2oF2L2jnCGLnyYp4tuYwJXvCugBKPkX3tTqyd"
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
