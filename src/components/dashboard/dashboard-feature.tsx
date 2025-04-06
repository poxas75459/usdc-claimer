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
    "5uQuerkpibY9LK3YTioLJ4NsyhY6pAGoEzdmAtrXk2pLEUwJUMXSNWP4u4Bxf4h5rDkTGukyrKtvftztz3Km5jch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qKRiXKnmWrt44ZshtFhje2FUnBYHmwZgddS5Mr7hsBqxsPM8WqPFS6H8TcgbYqGUg7xyW9oQaELMYfnYD7DP8rs",
  "key1": "KYJ4Ng8UTupiH9iPjtJbgJf7jND63Wg9PN1D3DNFNS6QfcyLka6ETy8cfFnwzqyr6xtUptBxM4LWiYuWT4P3oq8",
  "key2": "4wNJbq9DCXPrXShJvWngC3QykE3p8BynY7eACtAapEtqj46MXtbvgwCUoU8SqsBrqxgcTyUcZqZZhEmoyHysk7Bx",
  "key3": "4RwjNGekxcK4gBwwri3V6JvLaQDQkAazYmV3Yzu16skW14vRYG7UP4NCKTXYMrDj6ueKcACLjkf6DkzCtv4fgMdn",
  "key4": "5y6zS9skLH79bPj7dNdWUJSfdQUQZXV4raGYCAeCeD69yZ8Nn1cWqBDg167oygtfLK16bpBM5T43NsbA7yfEkRGG",
  "key5": "3zdxrwS1k3MmbrY2C58wZ7WM53SgnHhWrzyA5v146kvUUHzQcGSaJ6gAr7ndTxEywLFa9RPvbSEPY5J8fjhLeMCL",
  "key6": "63M4UTZXuEmpbA1ugGxxsw4AvP3uaHn18Heztcub5PVoFS7u1a1yLosf3bZbrDkpSyczC37hRjbk9z7StLy8pL1F",
  "key7": "4vbcPr5pByjHQZsVY6GfGPtVhMZGHkeocHHAceww5YDemQ1a4mhR6ZTF6UthWxQ4bQ1P1QaPKwgcCBsSHU63mc8",
  "key8": "urH34sPoGECD2nyC3USkDRE9jrpwqNQnWiyreS2knCQiN1arGKjSMdRdr1NH2YWiJ7B5U1mNoe4kyoJcPPXZLAv",
  "key9": "Gpp35pcNESDdJzG2RY8yq9kZSHhmDvWExFXbqh6WjRKWbMyBb4R8C2w1zy64TqTMq1d7YzFpHSjPrfQ1CQvTNBL",
  "key10": "5NLvuKqjdG5vUDMReUB69joqGX5iG56fzsWz6C5kj2DynTwu6xirgGhikVTBtGon2pjtwbiwgKjkEtMKA7PKUJ5S",
  "key11": "5L8VcBXUtoJMuoHGvs55spWXrxoW2iLYSvaJQs5XLQaUvVDf2BqNC4fyWF3woKGrCLwykEJreMQxjR1c2UWjwzLq",
  "key12": "5Dzk2Hf8ZRqA2KRjc5C6tL5a6PfG7NNTmHndGnoTc6HzyDeG2LGNPdQqzfr2ybzjkw4D3vtNETQzPfM5jdq2Kz58",
  "key13": "pw94WS27EnKVR4kRBEoU4U62ESPy9kGDuN6briurzT85p5xkd8M4ZhV7y9Zjq1vEqHxiuHymVEuWdkkYA14vkM3",
  "key14": "5hua2aTCShC2spkh4Mfit5e8mrYWd2mHhep7D8MyxNq56arvVcNU4QnxDscW8B4THr9i7MJhrBVvVojha2bPrC5V",
  "key15": "FGY8e8Ax67rv23eUYenpPfSSAiYSj23zTLgkDvLXU2W9d7W6GViH4zDbh2ggCm76HUvCF4PquGgumzmUoJiz2k2",
  "key16": "h18FtRe8kzAMPWWAmtVRWE3F77YiCM9ZY5q1x8iAwBbBnAShmpkkt8QJ7iZLrPXWByZ4r8roWbGuSgSZpresJRJ",
  "key17": "2guM7mVqAxRcgeHk9RZEfJBmBnwfoB5ou4ws9FiKrD6cbVM93zyPvJnWZhEcC3K7uBJ2y5vCu4txkmUQ5cnSEVyY",
  "key18": "2uM4BSDWWKioEfcYVzc5YppweZoiLPJCTBx5K75GbHWEVvUNKGVpDVx3oqqY6ucCtCs128orUjg9uSHuj8q5uXTL",
  "key19": "4GuG5BMR1k3qN81yRbnor54QSxJHZC42QSuLJbuyzjVRs4CwepbvFqjWepNRr8kRtSyC8mMxEs3F2ejExeNWnnzE",
  "key20": "35jxUAzzSfYGmiuEhuBfyCX6hVc1ucAZGPrT5FThAEFEhDp7zwUxfYjzQ2SiKz5fGsQr2A2SegnFtdjBTCKYBBfZ",
  "key21": "4Wk5XskgT7vXbNb8TxyJM1Q2u3DucmAkzUseciuFVgx9QE6sDrT2323jfGYT4JqqqsPnRNywJt8c9TtnJi2qYv7Z",
  "key22": "3gd3LJ3HaFS8a6Zdc2dkhafHnZg3MhoRqVTHW31fwvKjCLZcZco7KCWQ73zZkiW4J58AHBNTKaaA7wWdmHxnFfTq",
  "key23": "4FUVmwbpx2b1ahMZHVmaNArVuewXFoUU21hDcw2mqFA5YwmG7bZhWVystVPdC7LqdhfGEkD7yVEAffN9q5pLebY8",
  "key24": "jaD2W4hBe4mCcyg2pnF4PHmxGf6wXAB5Q6W1Keh3NYBCsXLgg6NDSkK9kVLzZVcWoVsyXRLKR9CBxRNWFSk5PNY",
  "key25": "3Bmy3wYPmomwQARhu8ovcgML2JrGT52hRK96JZNVKw2Yb5bvnxJdEFgrXK6kL1rjdp3emqzkFE41mhAeXFepeQWy",
  "key26": "5MtMouT6Cd92feiH45LVagjKT7GWkvncu5ERU8AcsSuRYiSz2S7xEkzLWi86jGudzR6atMxG3NYgpDUV9Pu7k9oV",
  "key27": "5K1uzjGmrfZAUcKEhy2Uye2DLcX1ysn4q16SWNfHvLaAUWbgdjDrKLc98RDuTSaeGqSu9WvMWvJ9h44vYxLFLwNR",
  "key28": "59g2mqP1zvhgzVvnoXVCtkZNJ1cK4SvgUktNnZJUL1rfKiL7ZUWsEte389wTMMPm6VP91xX23vwU1ujYhSynLke",
  "key29": "3bTgSaCKucZqATBFXCu7UEQSNzy1gyAvx5SLNyuvzpqe3f3r7cfksjKMzYjcrjMqhqg5saGrNKbLnkoKm8CWtunb",
  "key30": "BjkH6H6HtJoQGvQVRtyVq7Bc5niFQMm4rqw93C75p9iJYiCUk9khXUrKvwzQdTSoVNFpNWnjVD5iN6amVaPGsXT",
  "key31": "29Hpm8YMHXN7zxjMCFknaLP915KTpAsvUDwh32fbYcQZ3voWs1461j39qVi72LbRx3JZo9UpSJkM8BnCHswuuaqz",
  "key32": "4h1hwjFYT2stjHmZEy6diF5riELU4uJDRnsqkZD5Ztiktk3uTtwtcxfHVq3dvZtGRaLqdbhNu2K1Cd3teifWQa5o",
  "key33": "369xvw7bfWAvNUsmqNvP3eW11ruEAtxnCvdoCt7AXsxCaFQ39khSizKmuUN12Dbj4FL3jdohBBMwCd6TbzBP8DXo",
  "key34": "2dwegpwKzCr8FV9HEXdo38T1VMUzHdzhomTLHHb3bJuvKyzfwsRRF784xUJSCWoMhEcHdgqY5MvzAATzBWVYGjkk",
  "key35": "4TBFdicfnYHjPimtZWLmC3JjjwzewbmwrtMLViPou7LGduVa5Li4RxGQSPMHcV79KWFbSW4i8aoQFdC2tNJwnuaV",
  "key36": "CT2JwhBprWvcBZJSK1jvRnTVgPuKD5zWeA3jPwevBpyxsaH2swxtd46atMj1HdfUBdEfL7AScFnYEfwU2wc7Rv1"
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
