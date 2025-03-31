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
    "3KhtUTbg8YrvrPo9yjHSfE2vXDGYUgVpNid2yHBBnPpgWjUeR15gHefNGM4L8DS8E7rxE3NANwp8UiY41YG5sQXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hVJ3HmzzMcb1VAiiuU73TvQX1PG9E9PQTZzrcKxfixLfVybTrjxR3Rt3NvbmxpizEsHbwbrB8gYeXizFmCHx9uy",
  "key1": "gPUaRb59w9DkBuYRGXWijPfd67WZPcwKKGHJDH2pSXLjx8WEhZrgV1DTLusXQ7LTDRLvQmL8CoCXpm6HswCDieH",
  "key2": "5k6pZC4BVFQL98UGrtZ98NkRxdp1kq4Su84ftAr9yyDT9hvakmTLyzqUMg3FBAy25iePdpHwecsUNsmQmCt1vpEz",
  "key3": "3PTBsknxAjt3wDTZu7qfu5BexdftcQJe9Zu36aSYLZUnLTdBRFDkEtFL59iWzQ1afPBiMcPaEzMzz5r1CyiNFnuG",
  "key4": "5DyfjHddxicJrqrfFc9xbgXwaDsLn1X2kbjAwcgg4uycuATZpFhrUdgyYL4UqzaoYCS3xaEkH3w9XxZ3PxRsBB71",
  "key5": "3aicKnexz8HQ5v13ShTgh5TjoH9rk7TSad8JoMqVUiXToXSWFzPTfUB2E1W7AYvZY1ivoUqhWYicVRcEq8BUk463",
  "key6": "4R6MmmoFT8CjWSJHPzNAqVLKgCYM2JUPZWRN2ktWgovTtaxGHMkSLG47QWHpbndBJ4bZt6KQPp2JyGgtrdJM9WN",
  "key7": "4NdhGh3piCtsuUfbYYifagrzEBwXG9eDYASwwn55v7y4o2WB5A1ckYivc8YMPLezm19Qu4dDRUbMjxgnoCHPSRff",
  "key8": "2coWDvFER7fmAgb4sRaBgwCBmz7vvWjeSbAt5dkxpDuQQnUAh9kJ38Pe5egq14YqqYvNkfoa4y2Cs6VzYPGUaZrk",
  "key9": "3GJNskxDQm8FusgvB4x2zpBuniMUkskqxe4SQPWE9x6qQQPqTJN9J282TsWJjhvWCFS64DhNebwtEtYkrwesysK",
  "key10": "RLNmojVR3jkm8YZxMkAV4Dt8h3HFKK5ww9246u7bnsK6MfDbPTaaAkZwNQmePxVnuMFsnML1yyFpz419A8cRY6h",
  "key11": "3SarbCntU7ByPRue5DtXTQqhopwQWrAiagHn2xbZQgQt9XG9Pir6iy5RrCfAEk8bZq8UShdiTzmagTCvXZnjXs4T",
  "key12": "hzbBu3U1HRdu8pXdWzuejXEEDesq5EtAZp69xnDhxNGhmXTsfTcMtXGGdt5S4QUfArkQub6wBZosBLb7ZDaXVf7",
  "key13": "2TWY1wPgT3VyPNjn2UDoiHLmbq77udrRGHsyx1YLAsEABNoWws2XaF3FaKGa8yCtaPyTSKse2T8dXLhivj939bX7",
  "key14": "5weTsXrB73xCzu2zzBEFF11xymbnEJPXbu5bqLYY62MXBo2tM59fFDgPWrnFtUt3s3zTzwLUgjPP6sUnG5hob6a2",
  "key15": "2yxfMQr9xpjqtgEigH2URVBVitvCXJw3key75VvFeHJ4H7uqW8WgpniZmXMsqgnXvEAnkQUWZCr3isBCWdYPt94c",
  "key16": "3V4sTdJa8PMvCCxm7czZouQ1KJqD4aK4QMg4Hwjj5ybgTspQ9RMvdgvejG44fAqNh55g8Chx3mFKarYCi2zzaEKd",
  "key17": "3meBnjF1gfR1Hs8CK73HKYXAz7FX5QZf53moCoj1KBERWGvCGe5bkyBtvfPgeBBTvyQuiHfrycYM8UwVqCAf1K6G",
  "key18": "21Re9goGZ9zmj8XdrijSWJ86criJPT4SmTRp99G2MZCT9uyRnP7vZrMamEek3asuvQTVc23dSRS1E7aUnsxaRxV5",
  "key19": "2uwqaEHMDLKivPw3Sadhif81UE3rc1T45J7JhBWHzY9zmzxxpMQ6UB9sG1CjXKNF4BmPWadWtRrFJewP2HypF5HX",
  "key20": "2BoXBcJLf1e6hWRwUTwFUbSDkADyHksQfXLvGjWm4VfjXMYWqbH3oHa2D4n1mWHnpm87jtCB8jGS6Ec7S7njmqKQ",
  "key21": "5UJpH3qBu8yk4a7N9RtdxhkBoRSB7JWkT6GghgBfrHv1uxLCMRx19aJnGuVFbqsaf8b2YWeARTvGx8g3wRGctpe2",
  "key22": "4G7mztQXvZxK71YCUyY3WdPhFTm2nme8X7Q7SVYTek7P6LreUU2FYT21ZCHDtqeyYfM5cRUQY9ofjYNrWU4Gag4h",
  "key23": "7Tv18pdS9WAyibKse6WVqQsxtmPtNiKkxriWX4Mbz3vMVhktcqgAdSH2dUptiRJJSVSea29NSJuyxth5nrauAyF",
  "key24": "4c6o3S8UwKhVT5KQZXtPsua8wSVX9kNrWTctKMC6c2NiKNp78D3nPbf1AcKHKF7xbpxkETtb3XSj9vxaHsm7a7vt",
  "key25": "32gADZp9QCAqoJReP8TfKyVhnHqAvPWMrvDHpY9xx9bAUsuS7PJMSEofAdUhtDHvLHmq61cYLKcttD4Hq8F33E6W",
  "key26": "rKyjcV5NYW8LxgpPgcpNo9vDKB8e2bRbk6zgksT9fnCrXesHRsUyL9rVDomfoEgdJmPxVjTYb1rejTNyQ1PXtUe",
  "key27": "4PcTvt3HyDsuukENZGrBzYb5AqvJ5uJfsCPtnPQ48YMFe7reZw7TqhK5THkVuqv7wriXGTKEvRQcp7nTSyRmvP2a",
  "key28": "23tUkjNnthMuPzLPJaNnY6LM98fvBQ8cFyMhtoHuWw5fKkd8mFcFLi5RzejsuybPzvNi1pgnwJyiX9UtN4guNpfC",
  "key29": "41UB9MCPiQ2ZxHCFvgWM9sgD3qmziFnTdV35BDBCJRwYfV65tkuLPiJTYFyoWQJnZE7gvRrXxoqi6g7Bo1SEpkYs",
  "key30": "21hQLmqgWeQPwmxB28gAcdvekf9F6vkqYi1AnejfCDBiVGNT1nK9srENxTr8yxU85gepiGcbYfXkyomUD3mRb7QK",
  "key31": "Ggn7cdh5Ct6xHURnxJsgnxcTbdvFkV18xvn1ubLigTyXYjFaZC2sHwR9xmpQrjyMtpk1iPm1Kov9CEH3bz1GXSo",
  "key32": "486BmANoAGju919gJDrqfjWsc2Rgqq1nX4DJ9Wa1uoNURfyumCCjM12y7mZkC26tKaKwcV2Vbf2vWu4i3iCRqEMM",
  "key33": "5XWEXnqQ4b5V6tShL91XKNk2nSuVSNjapU6adPWc6xYxHs1xccm31EHQwpiNqCN1yGUp8R18mfrc4ho61As5chhS",
  "key34": "gyFR1fYuHkdh6rv5nESwTKhVC8riL83L2U7zh7Ga7JDZMdQcSqUhuq2gvUAPaQuvJAzGe8z8XGjpANpYzNpKzGq",
  "key35": "3PqHKcgA9fJnc8igaSo2YxEq2ajxeD7pPaKkXAH3Tod54z4kmLE3i6upz425K1P9VDCeFTLdQQ1J4F5pHaG6CVZb",
  "key36": "ERrH5xakzJ4u4FoFqa2xStpbToiT51ixTYLtEPd6dbnJiMsryzY7c58LtxDRjmtRzhXSpoJvR9cEXkGRXYEnKtD",
  "key37": "nHgXSpj3e78E2MNhfyJn83sePmiCKr4AW2V9eXxsmfopTK6d2RTfrB7PPpHwtnZD9dMJrj4PxaB2BHo2yU1yuqZ",
  "key38": "31xupPgNuQxon4BNuzT5WLxrd5BDYsQMaJyH8yMpysH3xbgihdzPxghaXrmd4vTdHePzGoWLhcRzqgP8BPe8TvMZ",
  "key39": "5mnjZ5yusRsujxRTWSpvDATtnh7BDCN22Tnbpi8LJyHftQJSHsgUKbLJArUBrZXQPFUcVgfRAKLmTQgWwJLzsLxG",
  "key40": "517Eu33DMgv7oBpv5USfBWKAjZ5Z7qiV4LscViutcQvCySKho3rb87p38bFLL8qSQX8VzPyKqooyWXa22yUWr9fe"
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
