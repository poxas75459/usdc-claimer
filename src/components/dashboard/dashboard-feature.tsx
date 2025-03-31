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
    "5YW2xwyiPnt2hYPwiSDUkhmVs59gB6h27tNviD3ALUx8L7pBjLNnbaWzQiKahv7c2UZmTbp6Rcootv9c7Qia4PTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62CQChBsyRGsUFPJVCqXpKSsS8xHRS8AqhSx4hHkieWY7bHnjLqmP1fhvLci48zhwm4Ti2rFVe6e97ua7ci5xWSq",
  "key1": "3gc8yLoC7CJXfmEHVRBLmUD2TRn72pPM4LD1j515sEcq81vDmJib3CLzqWRAL9XDifKK7YJLLjgSpz5ZvRwMreQ7",
  "key2": "3Ety2cnad6ByyBtFmotwcc6cQF6iDiJT6Xn2sxMWMvfTxxzZDGZRo78yfCYmDA46oxMimr31wuTuxv2yRNf2UnRE",
  "key3": "29yvF5j8xoZfq73dS8oaHsGgFnp2PQWaM61vhDCgmE19CL4GDj6nHuPzd2y2xSHf2tPsK7vghvbTsuYuU61iHDbB",
  "key4": "3uDVM1gSe8mnAooDAA33S3SPkU2UEx3EZWLtA5TbXR5NXqx1XAhwuPe1nicRmY19AVCim9NfmSVWwA4D3cB28udy",
  "key5": "2AtGDWPjw2kUHoka9PdWCLUN2jSm27KB21WDuQSVbP4pbz3aFUokiV4eiPeYbhy2WNQhWh92gcFNrXCVycRXGKE",
  "key6": "2FfrrdfbKpLMqFCxNSUTDUfwa7BE143HLesK3L9q1Zyq21d2vcENfjXpn9jZTqXoUJSEfyd61rfwBgzaUTxafqWa",
  "key7": "2vFTuosiBfFSNMC9kSYvfPxzhzCdS3wyAwQaVYZqQ6Ttyxq2rksNeafDZNYDukkUbsoJdbiNAjpKm8x3tS2fDtsk",
  "key8": "28NJyXHxGNnZxURQZ9dz6JQabwJcinCLVADdg7ojXfGNNKh9hwbkAP9tU48XGeERcZPoPc5b6Jj1T8gLLcNVzXsJ",
  "key9": "2DCJXJ636J1bcrhFc9m5VXmgxrx5x3HPMezAKEmqiuDsFpSVowQKUih8LNphDqqjyLdDQBZ88zQdknDJ65A6gkH3",
  "key10": "nLgRDMAuGqL7uh1TThBYMfLCUZitEToBqq3y3Bwr5DFc6X8soejMnH7jqRNuDhgXKvWfQgLDFGkx24jGH8JGJbn",
  "key11": "ADoqpWFYTmH6Bt11qjy7QaqR1552jaSXjt96PofXNchAyWNVC7msRsJF998et7GvnocGLW6QZiniFMZQDAhkSeN",
  "key12": "5TQfzAEiyKSae5eS6j5Mzp1KeXMr4rsQwbQxRVe19fLhnmQ5CGHiz72KfNdKnZpQTqgyF8G7VWEpMEdNktheiJWn",
  "key13": "49wpneEfQ6u7QFdWFsFF5D3cwNsCiDBN4APHvmANT6W29isA2ZMHMhZhohkjoJQuoRmvNTdBpQSQy4VQb9hdjqpj",
  "key14": "5j1MATnox1gDxEWhrFhdGxXjiaL5ScyUoUiZHnd6bW4xGwsbKkUekuC897ya9mtyKzVxWaBX2PgnYQ9afFUuaC3u",
  "key15": "4KUwem74nNxqp7jxSemDPN3L575AXGqzh7pHr9h25L9SyV9hcc7d1oAhuJ14irHL9SpQLDuQ8vhRzyZngLc68KmA",
  "key16": "4p6rqXXdNxP4jXRwgdywso419UyWGJ5cX3x3BieyBc1jWD4fvvZpge1SFNnV8tJFt6TiGkXShjiMmybJ3eacXH4m",
  "key17": "5FdkxRsYusnop8XLx8S3dKXeppHXaAvkUqeQ5WD4PJA6ySZAC6KussZhkTQAqdjJdLsmWXwim4qQhcGfKADN4UKk",
  "key18": "5yzdmLTTvAdGfca6ypyfVJNwTDg11iDgzNbNkpe44jLv1jErT4hwr42SxG2D1sUvm4nZ82oVCWrCySaTTQzCCXui",
  "key19": "5EgCEVz9gFHYydJEMRn1RMeXuv7tL8JqS2AeFBNd8xnf6wCNAZDWnCTcxsVH66F9zJxt7P3piQjFzjtwA4PNZD91",
  "key20": "4S9zSi1siSvc8ALzuFT79YSXDEKDvJneXSVVuRaxZexyDG9vvkkQuQUTUmtDxKJci1QABHgCGVvu9bgMABEKpNco",
  "key21": "2KuVHzPwDxYnVJHXHC2avX3PATvwqAKgKe29jSb4jrRx3FCnKZqwZLZpFP3jDTAxUZp6pyDpgTQTVBd6DEU2dNUK",
  "key22": "54baxDnNN5zZ9Ui2msaKJ892tVEZ6TVC5nmiyWXfDj6GJbWXnVK92Cfs39KcFGuQeqQPzPNYfk3DEPS1rzJveNGH",
  "key23": "yHKcBEsiVW32k37Mx2NpekGmjA4HRwTDwqR4S67PYATu45De1oBPvdS34r1t3KhK8WuqRattbEsCV8x88EkUYjG",
  "key24": "3RkRG7SkQD1r1vBSGv5Ti1ebZWsYzrvuM7cZu5Psfn7rjjDuHaMNtivu7kHFRJpwePiLK8PeJvHo6SeMC19LdyZk"
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
