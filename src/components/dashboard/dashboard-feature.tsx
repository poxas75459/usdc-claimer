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
    "4Goj79ht5UVahW6pBsw77zcPV5JfpCysEWyLRVmpeMgUTEsJPMh1sdtQnVEyFVXLzNjjh56JBokfsJrnHEzfT4bM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pa15jJa6caJHNZNocrHj9xzqPFhqkEaNuPN2tvkNWKi8suTqx8hSLT1NSUyR7QySuwcDwg23TETnL8eUe5QgRR5",
  "key1": "59vQj4cT7uHTnr8Vg6iDiPwWnXDN5hWBhUWwdhzLhm3Rz44WzgomXM9mALtrewdCzrpsuWudLcSbBNshWqPz5TaE",
  "key2": "eCPgQMUSbG1p7nzzCaVHaLbzt2iqnJxzMFES8MGe6b29dnfkpxXZhwH1ttWDizGs3mos96w9Xw4ohMv58jnqyvQ",
  "key3": "3Ca4cJ9MpmnTsikL5DestXFiVkPJuxZL7n9KbyoQbQ32zDm94Dtr9PugqA2VRNUmKtN7XfXU4BeWvSsFTYJoW7UK",
  "key4": "5wqXwB3Zb8RJQg7up1uc565FKLtj6odpxtSpaZiP1DVutWXh7XUy2Kkqn1BMdrxuQFFJf6mDTD8BcwBigF2uB2cX",
  "key5": "4LjiENCqCkfb2WzbMnZo54YNsmNdXv7817KEtaVAaneUqpt6nb4oZgknK382A17Ugd2YHYreEFKpPxwZniAukyYe",
  "key6": "2v6eRxn8FVQ7dmEpUGYQ8kTyrinPhuibrpQp81nzfk2ex59CkCi4DPto7hcXbTSpoCtWaGYtrPNuvHgNPzAacwrx",
  "key7": "44AtzkLtzobhuxA5KwFbMmAkMxqENiwGYLJ5e28sjQp3EyNzreWqi7xtJZ2dcGZEAvivEwn6racZYguS5aJVE1qe",
  "key8": "2HuaB5rg4xepFu2BNQm4ascyuZoAUgp9xmZjLVjavBy19sdKrMfkqzWhDoHAgKZBm797hPVUy4PVddhCzr5hwxcb",
  "key9": "55FGby33i5MPkrPA2R5dzjyq8Bh97TbzBW3FS5y6t94br2RENoST5Gd5snH4iBRqJ9PRHi7iuaU6sLLwofwRTqfu",
  "key10": "64pHuRZiam7n2XazZUsB4WPxoanPs7Va5bzBxFxfsf9emTnag7EKPwiXSb1AoDH2auXfcyg95rMBGtvbtgyB6Bp2",
  "key11": "H8WiWf84BzfHRaVEchbve6f18XDtsZA8Xps5qgtCgUHo7UxULcdJAoF6XQQmpJfRPBmjvpZzai5Z3g8WtMoJGCX",
  "key12": "3fZKtjVbY6di9z7YNzEqcqdyimUQxYJH3ari7J7Uk9Va1dRshGxD3bbxtkK3rspXaxS4QwsbSnCu1zzhrr6tTjVF",
  "key13": "38bbLCVS3vTgZiGLYVN7SU4EVBDRVgp9e6VhJWvfxKCNoCtcPXEFWM2mmmJ9bvteK9MNsRf5ByMibMBVdwY2Bxdp",
  "key14": "4X1FiFUf6wCztu57f3GNqCkAWJHeRLVqaagZ8YC5NdCCgo7852PLEeN9zRHPsPQde2uwSPyBhBFHGviNqbZEydHY",
  "key15": "5ctjHetpYQmj5ksWttdan8fzUoVqa7taiZZGqLwXiXVLGfHYT21VdSs6kiVbq8MQ2KqEQ9uLStbSMxcDcrkgYEJ2",
  "key16": "4yCtnAfPzeTjmMxvHRn1uud58HmrTLNfCX5ZktPsTf2TmWsWTVGA94QNZcdBkELiYuc6rkeLiyM5pEBEGSugk11o",
  "key17": "1vLkMqs58NbFoCBA8LuciJjjsWyi9NT2o6KLDiz2XYCig9J9GxhqurXwKMu1Np9YwGEoe7D74M5XbgHRF7dcDBY",
  "key18": "CVQpFteufv1VCVJBAZa29FsVyb9PDLGfhC3US1FoJbgYTf97B3oNhxUiRkv5JdcHdjDf5Jj22EtzpnKjnkoTjtu",
  "key19": "5yZ3iN1EW4P5YRPZpdJz5945vDDs11gJXthKwYVKR2hH1T6wBU3hNcn5VR31Bi2iTqLisDbypWRB2QAg56SKhMc4",
  "key20": "5b6Cs4Td3ZAeoRVhz4CcNspmLj4Lmk168cNVJNtZjuF2QbNdLagsMwrRYv7hbpumXHuPkYMN3DC4EyEu9vmXCMe7",
  "key21": "2iy8tLrAGgCtcRvb3ppGiDpsutTJSWVdcJAJmUKpcmLk8WkCUZwBeK5EiScA8X9L5goUBAFYTrPEeHKP48jp51CF",
  "key22": "5Keyn2Z679JTu9fcHRvVrki6JnwFK6ouHu6bivdwNp2wtHwMTE2v71rVKogDGpf6StWrkux2fmXbFA5JCp58wky",
  "key23": "4op8fTdWRiXQGT7z8R6ztS4QHni9RjmED12LqwVL83RSHv1PqEgxBV19hAK6GBBGEkFdQfkTNJBmw3XCQMvM1iHx",
  "key24": "bbVYN7uNJmqCGxoKVjBf6Jea72nykPRdhpz5gGqQLZdKHwEY8NqxkUzj78toFKRLwgrgwcMrJqPZTwBCzmJf62v",
  "key25": "aDT466GteByeQBBqdhaA5SLnrS5Wn9M5QPumVJTtYSCAa3hm1Voepoyr77BmPNp2Vz53K8cBCfx8GFnfV9Q1FS4",
  "key26": "3LEnZbmn57Vf5ZMPSPvTjgACcjnrwvbPS2LD4crAW2tU9aDPEhJWSLqdHAxQwJDo9YjfFWMFZyfpijoztiMEwM65",
  "key27": "3P1FkpYivM1Enz8LVySqreTRr8tbpVneqvEnveKActe6pVCuEf2u3SYmBsMF4B9HEMunypzoyHwtvUaqyxHs2xY6",
  "key28": "5K97fhp9dPPpBaCZSXnFnFSLx7B6oiq76u7GsWGr8X2FCBYhvv6nDXrL77R7rP1JJ3Xb9TMYgjapTpDLpCqMRs1n",
  "key29": "2hcsNC95BrTPxS5FKo9AiNfCU4Mxksg9zvfamy5Tg9iDWZfZTSo2XZfKNF5oYx6DpASZKdjHXUK13D7wDptsaq6P",
  "key30": "4NG79GhndzKV1iSPYtuuu8tTqQnc7NpVjFMhPxnh91WEwFsXWkmqqUzNxH6QXZ1CwTcESteyLY23uTFa179zXPWj",
  "key31": "5q3Tspr69B2jygK1eeuTNG8YzfFcAhV1GcXnpcJWghoz5p34Zv3csXH7hmrXcZEGpX6K1c1XgQeUGB6iMwSrgHQU"
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
