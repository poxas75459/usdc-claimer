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
    "4cwXrfZPNLYaGBHKHCZxhaWbnRUpawZNCRUb8UfdoxNM1H7cwo6g8htqScJyC5Xmerx8zeX3G4Dos2mRRTRA3Kv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VFSVjqVm8joju5hW3b4vaoiZvWzUg7w6Bys7WfPEV7WCYt73TGmxKzKQ1uHQsEQwh8jHPD5NptVZocMF7Tq8pqp",
  "key1": "66rX4Stf3s8X21tjbDCMMCDfiaJYJkxVi74vkqwZgdm7bpzH2y7JsTs7LTWxMC3b77bgzj7zENUoKcbuq2XnYRQ3",
  "key2": "3mDSY21ahcMMnYwWFiHg1cgN7fMBwKRT8VmPCjBoQbtEpaoFgTER8gjUECZBAmBwDXSr7vur31YXppAmB1qC31re",
  "key3": "4zjMstDwNUL3tc6p339rhAKFDAuzLykGTMUmyP9mNF7bcyVPG9jt1JFefmorgA7aaKXsFYm3rUBkeqwW1v4EbSed",
  "key4": "3vWy5ss2i2AFGoczB4oPGiy9SuraH6gcz7U9FpFYsXh2UzqFp4D75WwJg23PvHhZjYujkP7oJ6ptgVTTrTQuDTs9",
  "key5": "AZ7X11TsAWyjViNkLZUUJ4WbefG1rr7yMdaMS5jp7BgKWevDCvkCXxepHEq9Kw2wqD28jdpNWokSD1zHdRpHExU",
  "key6": "Q7GYEAXRfAN7nYgP4Nikz3CCkCCx5fp86rKrK5B2DKayX64MEAFVduazLWgEc15dRiWeDTYh7mvV5s1TzuTVjxi",
  "key7": "5XwWFa2VkTzGTfGTjiqwHfvXBV2JdDEzvYHSrjUmAShfrF4Z8wBU7HQ5PdcNC63bRMnUCV3SW1aw8tV2sPcTjZsg",
  "key8": "2CTgUiuCeR8o3VzZJwJfoiomZmqS5mgikJsTC45kTFuL46xB3ZRsCjYpVPtpYDS9YSF7Pq9Z5iiERWpkgiv1PT8M",
  "key9": "3RTqg989hiJcsKAvhKM279BTFovADyCnPcrGj7zvHnATvngFuAkwmzhADugaJHhXfVyHRx2SMQzCFbcyfUCfK6tf",
  "key10": "4G8UwnvgFqPf4epyNpUEphFmSs7XKronENfP6qj3SuDrHT7eVcPSZBoHKZWqqTVv8ejdMgXrHuSqVLN7Zx3DjCm",
  "key11": "3YgcGM1yr2QZv9e8X3GCQmGXdUUoeDjf2T5nrxjkTaAgkcPJn5k25BHVAdfR7xYVFHGNAmBGA32q12KU2ip83fs2",
  "key12": "L1vyasrD2dVNMSnS6uJwQPSjhUSiwBpVmmcg6i8bKWtxpNM7JUhRyhGRLWQhDd56USBcnsQZ89ArdeXDjVcJ65w",
  "key13": "3T7nkbCcLtGEX8vsusKqN5yqb7ZSaBWr4xZVkipxSeHX9QWM8bqr8M1ZLyREG3CYBPtbsaMSrevgdetVTrfFWK4q",
  "key14": "62qWZqD6yY34ToGboaoKmAVNXfivo4X4mLqGgzVKtn8D5RGvAERfAPctYtXMFbPu5Jvdpz8k7WA57jh3stKnxnyj",
  "key15": "5crDRMxFXsFuGQSqYL53S2cWkxzxYY2zdEenGS7Dem7hcPZmNXhQnSDcPuE1yTa5qvVphQCAy326BL4QWkNNc8iD",
  "key16": "5mX1a7MgdwZkm5Fh2F9xKobTVjEA3q8eBw5XYS771RfakrJX1ZwRKVwEm6HuJc6NgLv28peJcxCzUVrSGAj8q5BX",
  "key17": "2Ff72AV2T3hVEk5shaxRMYbFaMmM5d3opWSQSYG7AJqjgDJx6oQkGooo8CmwbK8SzELBSXHsqix5FZ1FvzYUNjhJ",
  "key18": "5a4c9MaAhjuLtQBVygxdFRakD2auy3Ggh8uDkgrRAC6fSLnk3BXMng96ztA7hsuJWiUArqUHEd6tk6QJ4tiRimhC",
  "key19": "3Uawp4c2na89YGhvqyMiJyCFKxhMzAkCCBJLdBAxx9UPx2yXgj4HPsVreAKmjnVoL18wAekaMgqbaCSHikdxvdgg",
  "key20": "t75XWTdspKDj9YGtyYR9kzoW2LKceo9EJdQf1SyeRm8gCRXL9HhKEwajXFqEWKW48Nej9NLSG8RSYF1nBpriYJp",
  "key21": "4CnhkYdHV4DEdBYCRD42hgcra9TNxr8MD5FriyPbLrRhtEfkfiF9nEgqBKHfTo74DGyPaRbhapg6Ds4n8Rx8ib2r",
  "key22": "3qRJLtnfjwhCANEj9VFU3cpU8prF6tEvcJvyGH9pQ7Ae7jU6d7JRJsYLBF5pTEkqtcgTJ2VrS6iqtZvsr46E7Zdm",
  "key23": "5uUNzKX2rKJsv2DmPKMUW7jRiGVEzgtGqr6A7ofr3WdEv1En26hf3RRycAUoBFrh8KuRCSeKPQdT6vFwLALk3ZS5",
  "key24": "NbpNATfgtmZ82J7Z6kezshGwUizXc531P18XCqEB6yLtv18Y7HA1PztwDodiHQPmvoKaET1dMtZPHMV4SZVkFdx",
  "key25": "5Tbndj7hoWuYgiegT8VUaTKFVniqC7KErkP5MG9a2LLRhGoHKcwU3wKzHMtTaX9aKRkEhDpMHYNABgJSbzfCso7L",
  "key26": "5uFPUVnEeEopSjosvsWGnvfNRiNp1f8eV6PUVTcieXVUfbsiAwdh3rpyTspPnqo5cSq7nyfq9NhbMadhf4mYFN5j",
  "key27": "5rjzMefxDzzFrgDe3KugfaPjYw3N8Wx6vNVBaoTGiwVBcfg3LVrRbEevWR1d1XNn4yNKgWiLtAe8mdT8Dzeqzypm",
  "key28": "3jhVzfF58tQWKrgkBAXTKiEbu5VcViXoHkiekUzXt6U2cF9GewHc7zcewBaYuGnJiqi8s2EGmRW7qDCugkj3jen",
  "key29": "CbfhjHVrJ6W6Hk5k1QUDY3Exf6KBbxge8SaXKFT8goXn865bXhiWvD2zWMMmt48RfHbDkeVCRGBTy6jHsXnqYtm",
  "key30": "fcs1eDKs14SDM2ovLWKmWpmC7KnCgq3ckEpZ8Cj1TxJatWWFEwn2BW9utDAWMnM6Hv26J8esvhSj5zcBgZbJj5v",
  "key31": "bVWMEDDM52LnST6bDvMqSvJw2XeKwddnJ5RWvAu3ppgttyMtrY8pkSwuwyKBy63BPx8b6nnpM72DyLBrPQgxtG9",
  "key32": "3zwjGjxBZXRjoUUofDtPxxmrQFWp1xDobp1B4wVSoko7n15RHe9KAkNytws2nNfik6wmBmjVtV5eo9RMc4LdVaE3",
  "key33": "2KG1ydgYaRTUHy7DCoYJn7FaS3anEoNqfgbRinXoTRLfNWDvUG48XFdBYZ4vEecZpNFQQrYUiPBjWfBYhL1vamu8",
  "key34": "3fVAKRcYhs6ChbHVrpqcbVooJqA8i11Gf7vS3w4cfrsiD7ip2dLpKNpZL5vFCjiiJW6nDDhsDeeSUbiYNpDZsh4G",
  "key35": "3Nn3SCTDLKmXJygTHWurj66LgeJ6pw7gi7m2pBFQwme8YpEwQXx7rSvKvYZPcaasd5c4JGB7zmcLb363MfsoLRWg",
  "key36": "5yWGHimo6Wwhia4dqnJk8zmz7DS6j36sujsGKWafCQuUTo4DLiLNuWeW8g2nmc7W5Fu9EiRZhzE35uksMymwe2EA",
  "key37": "3BCyHW4V7MpFdLCLwbcgwHuvYDd82UWEjwizKpaApNQ8xs86PiRPxmJXwLMnowrTpq9kYq1L9ApJG4GYz9p2CBAA",
  "key38": "4LhYen58NnNvfKLjqSeexBCuZmca22JBUqRbFadqPYNSw5yyKVqPejaCB6zf1WC5iSH31LFyEb3qsEaZY5hGXPqV",
  "key39": "5Lu7ce95cW6zdTohiaTsSaRkoc1JKBSLZC5Fiu8BSV6UtHc4VbVVQyxAJmp99VXdg8ge8o8gm7Bm8mxwazRe7bme",
  "key40": "D1dod4WHbg9oCaJ6QpKTsZCKKXGntXg8735t4meE4BQpxhTgi7jAA4X9baefwNBinFJNp39GJ8Xio4mgdfod8A3",
  "key41": "2ohQTP882Kv81hu2TxREeXVhmhDpGKmRo2o1nytUXoLwEgpjRPz2XHQxsFDHKdXy4WpbqKrubLsReMbFucpGADR5",
  "key42": "384n9otYPyuCkw1ZuDwKxydhHE1KTQ86Y2B5GymGGwtAb8AMFTPy7Ge2cpfsZQKx9kpbAqxXqvTR5Ry1XxAxguzT"
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
