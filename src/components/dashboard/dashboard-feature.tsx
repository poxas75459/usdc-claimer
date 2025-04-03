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
    "33zLvBFTyEJzrpNQoGNPmP8dW8gQvW6UvneS7sT5nrf2L1PkkTG8TgRaShZH71Y22Auc9mJotLux97AUn69U3CPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66KHE3RnUibqAebPriesB6byWAqgWfKWHQMQjqSiZzVyWYYCPCxSH9ejuQiLL4UBUs5DRXcV8zTLT9aebZYpW4ST",
  "key1": "3fuHs4wrCADKc4CtudyJ9o1kmxkSeGVZoR2iaCnncEj5YdnVqTRYoDcnjzUq7r1H8Xj1wumtYuf63iABqLStHFVL",
  "key2": "3HFN4dPQrjgxPz2XkQffqJi7FxoxCaXCs8skSDoeD9h87pJxTCvgMrQFeT2rxT5jxrx9X5EgVZ9n2ZhEiwNGbSNg",
  "key3": "67Dg4h1ZGVemfusQV4cCbwWRGyaXC5qS1HMVswwqidYgTZgJYkEGFNvwtrMJKVmyoU5RVQd88XuXSQyAPjv3P4rC",
  "key4": "3HaWkFnhrVzqVe5YgUGtQqGybUR1BYNKLXTMWLPSFg9uaGTUNNDuXQ2EfeRo3HHnRt2rWUMv1rSU33Tu1yed3ARn",
  "key5": "td5gDMPnnHcKQkmqJiYYXqt15hspiZFo9pbvbYbmPRxqCHVbnbRUpBmZouTp1iJFFEvUkaj9DSTY1Jk8N5RhRsB",
  "key6": "3fQAfDii56sDANaEE7Lk28GLCqJfUQWRdM6YwLtdzb8ZZovmbWidT37TxBdFQhWVNzYEESrPC4T6vRjmuBcZNDEe",
  "key7": "2TD5aRNgruwCJqPu9Xeau616Ao7SEAhXt1qmhKRHedXnyrhUD47aQPQC2niHtdSPReCeBpkBgDWLVYqym16NSxZ4",
  "key8": "4pJWoxGmq1x3RMhQkhg7Di1S6tohkqKtF8NkwVZxvrbxzDrpWeb9qpaS4DTbSPoNbz7BYYLyN66taePs86ZYJFEL",
  "key9": "47UW3SKkYyKN79fS42TSg5LefQ5wid8Mb3RF8wVpaJz8grfEMZV7fcabTNySQHMUUSrocyiQbRqnzxvwKeL6EipE",
  "key10": "5L2aF9Zy3mdWvgJP83Wq7RYPgpSAUJv3vhZGmmmFfHLSE3rAYWBtbMsH3JC7cikZfPpKSTE3ScTaMzDF8FpRDvgJ",
  "key11": "KKzHRANnGGkrJM5GUCWRuUkuogP6fdDG1eXQMtyxq1Er2JBV64zwD5PGv2nKWF2rCDo5MTiWq6Wvq595qm8nj3B",
  "key12": "SvGfNziFXKU83EPcqXSzySwWKg4CnpNYAvQYyUfbKkAafRA33wRm96hM1c5f2B6roMUnYeqRNxnV47M7JV6h7Du",
  "key13": "5GKi6SLJk5AZ2ETfmQBefQXLSgPPMjJaYR9DaE3z54o9mn3WecGGvv9QKWkowrmuhPVnayq5agPHuAcDPmdm7dr6",
  "key14": "3ecMaPHduYj49zGZzec8gd7TK2mWsBJTsaWPioPofufzG3nsYHqF7V6DYgXHZKs4AKrXPt2VoW5mrpUU7L8gSwTf",
  "key15": "2DGsQa8PkYj9cN42KoiW8yp2KiBTLkwxDW5g7v1wDE4zDEnwQGsYudAiGwhfjYWZRLLUjzaf4T8HGGVCrorxwqAJ",
  "key16": "pPwygi8GXTfXNWhK9aJvy5ndWrZuNwkU17PpYwoduMv3HwM9GTpjZ1cYzPNjhnxj9dbqVt7MgU1w876JKf3vYhT",
  "key17": "4jv31ZS1gkFjEsQyMDb1juqR3Xnw2agDzjYJTZGzzQuw9wNUEAkS4tyQzMiXBNSuRzK1Vivgs89guixQpAtkxR9g",
  "key18": "4ymozvLGT9UfAyzoUBh5T115qDibLVJy8JStq5vaJqLykuViewA19YZoeyUemiui2osAjidS8WmDy12b2DcMKFqb",
  "key19": "3gTg2zMVyi9SB9arJZdi6Kuu9kg8QuUQhowwTGH7nmUbHAzxHgXR5Z8HCdwhEdmJaLXaVEBagmkNVKGoMxAfT7Q8",
  "key20": "3S1wLfpe89MA9PYWmkgYsnvmpX1nSQBTt88k85Q5wTg9jxdaZHPEthb3k5tj8UXcXcPVm2TWzAWZeDYhGYqaMgkG",
  "key21": "Be6s5N2WGZMxmbFAjzV46N4f1ze8SHFmoeWmNT2KCKJKH9pKhpaqzH6rhQbHjL32mGDzPGD3svAbFzCKMg6CvZ1",
  "key22": "5fn6JFXEgDcHQRdAqPvAh1fbJBoiunC81Zea3t3KHhGGN9qp7AhQBGT5VTC7gDjQHFHTdTuV4jtV76C9L45PeCrq",
  "key23": "2oqmA2eN1McAdoFVjrdF2aK69pPdFxXj8BbHeBunUER9mEGwS5CcNum8VRnEA7kBeQZSa58cygmdwZ94jwrR7Fyq",
  "key24": "XyPoMLKdZGUCWBeqr6SVqwmF6z2nY2JC61zzaGDt5GMo4cfPQxjbwg1Qd4rr8RmWCCjgL5LJwwgShzqqRS4jWnu",
  "key25": "2NSnLD9pP4Qyi3VHjNYmeXyM69G5pkvX7NtBY9HLhgAcLve1USCGquggfmwJVe1V9PS3qw8c97WBrdzWEnz9V7EH",
  "key26": "3DPNjyi9V8DTUjdKwq3aAgKSgVZkRWJYDkMQXxBYqpP6TQNzfpoBePnBEH281woqyvMajRs1euqx1BDzPTJPa3zH",
  "key27": "3LMEnjcB43DGzLuAAACc2JDoYsGuZnkCREWMFujuXR4zd4Lup2iJaM2xMZw5mNkEyTT9bZYiJ8xH6ZUwqg9dy9ud",
  "key28": "3VpRQV5x2STwb9Urob2PjWt78FSH6EbrwuG7G7Tqm5XqwmFCNXzFETEFSTGnDfyowtFvqaSrJXziz7LJQPw67nsX",
  "key29": "3KzT4cK6vQAiWXk6BX7DXHXm9dGuS4XLSDz8KcLeW1KSQusS9fTxQXEdTm1KccTyFfU5A4KExMsoyyiFkDZ6VuQy",
  "key30": "4fWVdiZJCGJPKP44DyPov3YVgS7ZJsJdqtmxxMHLrvgFA4BS5xJr32VQqSTxAhwmtDo9u6qqWgwENs22kmPfr6im",
  "key31": "5BWu7RfStzWRvAZtSh8joVe7afcQ7FAULgRuphLktGeSrudLxF7YL7frJJwRXcXHnu3Bmjvj86ALRf5vhryVzYDt",
  "key32": "22j5hdYZ9P9dFdtv4jAjHt4J36zzD71HPhTXv9GBhxHcZRsGG1imn7dYdGFkjShticY2GxkZQiY4hnMPNSTkuby2",
  "key33": "5UqrLSSn28dsVZbZqTaVov3EDqcpRuUNoLDgZwdtySAPLWFzbEfAPbiUK244EKjzqRB5GiJAYmxzhxcJKxe9XJp6",
  "key34": "3aFtAtuUK6WVa6Du4iqYfwXPs9sdxksBYGe5uPvz48kRPJMMLNKgvi7txm5ge66XgJsKLHnP2Yp1hszSWiHWPfS6",
  "key35": "5mHcrSE6jdmzDTifCgcgC2FxqzBziKhX7Lefh2NrdS2dW3vPY6QxnosHbZaCh7cy71zs1iYSdkujUmjrzd9ZZNsr",
  "key36": "jBMSi4738G3MdN9gvypLGVfbgfSH9not5Dhpg49EsY9cYyKYHbPjJk2Pc6wDiqSVAHBR9tQr9kRtqdbQqcCmUFV",
  "key37": "4VxqvRbjuGARWyn6zPbR4sNrJ8h9wGKLCyhHwZBtAxuiWFCLmFLKSVAFhEchGykbRAZZTxqv8HhisDsT8oJy2kx1",
  "key38": "FeqDEbXCeJ7YZrC9y41J9rE1NeU2yVAnhy7x7ycPVHW1Mu1ENssPAYkatfffz7iNw3PGQjbDDadFf4DLMc3pUo4",
  "key39": "5UFLNHJiLfNQyV5w3naSXAZpGMuTWtmraeRoQnfYWYodkQisW1Cq51ziBUV57W4DZvqGux46zmM1rtbMCSqXemFn",
  "key40": "4PadgVoF11EH5A3EFFEUtyhYxFGntAQ7EJ3wFequE3uwsDtkXdfT4tFDbcya6rVAn9pJxhVggre7qPCiSha8cDXT",
  "key41": "TXvdhWna7u25PeJdRV1vsX2KPZt51Sny3pDXSN5rwTMDt8ymseZNUpJHdbqsMHu9hTWU7SCLarpB4Dn4e2GHV17",
  "key42": "sxSHhtWa93Lq38wXKTRcHDj8DQPeWHL4JQQjk7MLdqEQRPiswFFha39mHBmEFukGTr8xRxviW7m1gYZtYKoFDpz",
  "key43": "46zEX9vzufsz8PHbYaV9Q2m7V6f8K1REnFp4C9LFbUwcJtkinhWdJb7oGY9AkiK7WAje3oMEQ4t8KLwfwTrdTrZy",
  "key44": "uZhhVihWNjUEDTbkWycX6SbbKPfFQN7zYnAxA5y83yRfBFK3BV2dXoU36awdeABjL4babGmi3EwPzD1eKrJTT1B",
  "key45": "zXN1iWDnNBcnVJYdQ5n5NgKkGuowshqGViH7yr8okNBNmAEpjtUbDSSG1DKQx9R7XTYzfQzAdiu3bgPhqFLa8iD",
  "key46": "Vq6BL9DwsqVaSwsx6yLc1zHSFqssyeoJNvL8XcNRDfsnzrjW84VkThTNRLp8XffYerEDAaPAv6Uqinex75Fstsp",
  "key47": "2bdwjK6ciPq8QAYSt1sdb19PBP69YzbwuiSi3hytGgNQDZXyNwQBNCDZhAMBfAqaQ2tib72EGVas5ntafqGPgiaJ",
  "key48": "4v1n3NTVjNvyffTBJodbTSQSY2Nkkai3FY5FnrtL8U7WxfboZBGjpDmagaaAcyeMeY1Ud2D7erPSnt87P8cpEpV6"
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
