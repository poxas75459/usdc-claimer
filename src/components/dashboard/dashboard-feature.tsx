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
    "4wcEDU4ZECVaPx8FZ8E4cop8K7ztf9ZMJr99FZgrBSCEZfCr6j17DayaNDtKmhF8heRoNKSJmXQatoH4BwcAJhDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pTBuR6gBEbV3ASFftHnTh1MGaPKkpgmBn69NUvdSRdHC5jPTvsHNyEmU17oci6aRfe8M7dvSfPthho7r6h9mcG2",
  "key1": "3BTTBH8Jy2V9RsDikaLMUd7gnfYWjwozVQSgZ3kNL49esbYUXXxUuPXNA76mfPqGqMZLpKSdioHS5NkDGT3qSzN1",
  "key2": "5AC6m4T75WWRd5cMrqwJvotUpsXoC7bhGD9Kokb1e6u1fAE6AwQ1As8oBJPnF9zaZYLiJNLQ6sXKvKobAiCxpLfT",
  "key3": "34QWWHtpBYcDVgEgma1cxNjcULNYf8K7QMq7qRHGKRU7fXJTtDQX13NBVPgmSZ9QwSi7aUbgUmo5p4Q7rx5SpVEj",
  "key4": "4do1bL4qzDSggUNrKKsAcUw8T5MtSNs3rvATURAPFvb7kwg2FqwZ3cum8VWNW3UPCoymydx6uG93QAJ8emoBzsVj",
  "key5": "56DL3yT11aWkmkn2qgtamg3N4V2jhvGdGveCdFv7VD4Bb6biB9ndS6dEYZa19c5GHv9PV1XfB5ZAma7Jq7oVC12Q",
  "key6": "5nnZDUXojWBPPTWPRsu4tuaJxgiLfnthsCq1T7BRX6hLjJotoW8n5DaXRP7iWGps5tLCuiHuL9JQPrZ1nANGJ6dL",
  "key7": "4kxa2K4ATKVQKXJhfh4HRzuBije9SjwZbPU8fDnHBTSp17TimTTsgDZwNMiPEv7h6WZzKT6N7vKsczyKZcNoJzza",
  "key8": "659r3vJM7ddoHN4Pj5PoVfmKM2ZrbVG7SYHmnAoqHiA85ypPL9kgbouUe29C1UKVbWLfo94QYwY5GnwEtcVvBSaX",
  "key9": "2MDMEPfmk4td1QRTTBWMYjPvxorWefqj58R6kLs8KTvLbTG7qZ7FEazNRLaN17MbdgVwCzaCvGAqo8GcQLgBphMF",
  "key10": "46iaqEafpzFcvQYugv2xpgrx616KKKcArN2GZiE1U1tXMMdbsxUob21KfNyZYmJcNcDieGKB9NY9vURKk1Hgxbwf",
  "key11": "4mjZizymN1GnqiPCFgKgT2p74z4N5iBHSFY8dBpGH5PpLUrYVXk1pQmMCBqEZVvxRgikY5GCNrmZBkNvUwHfUhGc",
  "key12": "3ZFY9U6PmMA52TCWjNmgNKNdgB5TiMSWW9W2xphDL6E1mtksTKVwLwE9h7p3CyraAXrWbgsgVQZ9LuXkiHrZxh1P",
  "key13": "48U8b8VbGGNSotnSLS8JxaCu7K7rkkUhXoJeRUiu6LTrFnn6xhsETZBk3krNsWSmfw66wSEXhpYNLpGnkLbiZrJj",
  "key14": "2sPvBPMc34M1f9dgx85Vv1SxHNd4NFPVxpsfe6ew9nui6MeiYc6nDwqFfTP2WKdZZiXTyhH75tY7DQ27huDEt6ZH",
  "key15": "4LQzdoEyASfCz51k3BGiCWkspZC5ApFGkV4FJ1fMJKkWtPPGsCZuM6Xf56uU1jrM3dRBuKWjpVLFyRZXXZGv9fwc",
  "key16": "2ziFZ6V67pzMdRvjwoCh4EkukrTuqkqz1bADegQFJ42CF35858eNps5k7s4WPtanMGXZogPC6e4Pbva1eG6WrrMe",
  "key17": "46jY1soq3EKcjS2B9sQzpfN7hkRgv1fRwMpxCS329FGvYaifpPfDiTLctGJEmeqQYa9vvCSCR2H2G8nSAi5TidV3",
  "key18": "4WmBDM7caVaC7zTieyG3KgJbubhZJd2BzVjzUf2msYsMSL3Cdz3vx5Hz5jaqv9f8FqBUfSeEC4myP8dHiSWuXBZB",
  "key19": "sqMa8ZJkPafnwF99jkxQtSYbVKZdqQHBXKQauUqUDWT1MQd81wtqdTwTmSUPPTwDtNHK3Z25qUpfmP95diiqAbU",
  "key20": "65yNhX4Utsd9fFi5Htr6kkvmL4EvomwajhtzHBKzksiPRNWjkEEQNzSpk2fe2xzKYBq6Nd5JxZsc2Q1UgupKARQe",
  "key21": "2zT3cZdxVxDW9zz7WpwMzFfaeZGn2upjWruW495epQXteDa8RoyjSaPfpba743Fc9niXJymDbXqSBiGQ5348q54k",
  "key22": "5qJ18wSzeBidbkZThCR6hf6gdVWZcMTcx8McrYcV34juqBuuWVBJ7ALAADzfkQYHEoa1NGvHBmzpNk3sWeeJWaxp",
  "key23": "3iXCifdsiBCN73Z8683URspMRQmaPy5sFCy3mt57vUK96KvvNL8gAwbDNq82DeQ5pq1q9ZVXWhrFZYT8xB27D35x",
  "key24": "63oeNgxXmmvZqPHYLnu5DHXG3TsEyRwPYnX3di2xgUWUDvQAjek1FjCwM7PoxsRp2rns9AitwZSP6Q4YgAqq94FS",
  "key25": "th8HcBPGxnVCqKGfGmdirTo6n4mK9qvVgLAeEy25QcwrxGugnmmumFyh47TGX1NU8xiNzpz56BEvJKXgy8H1nYM",
  "key26": "51n3CAa1pFs3aj8tFT7fCGA8KH5tTXuPH2H6xC4YbnyQZ34ThwHXtmkhnwoYqGvyXvWFcXTyRmoX4vV5Yf4Fa2L7",
  "key27": "UPSQ2ukGX9nKqSwB8TVV46bRoKvCVxVWYgZKFTZrqU3Do7NZWqNdgRPsMRpYLubeZeaRD6QMK8DHy7Pojm38NEM",
  "key28": "2dGjWgDZfDb7rUny6FPGXzu8Q325j6HzWaw1J4LAa4ucf46PBhhpPD3c1nLPwSHRYJ3LMGJMMJfpB11pgxwzDwUv",
  "key29": "Z1yesP31bPDammiy3JgydZLU8wV5GeLoXbrvFTgwzoBiSeJAXHrZgU8TLUhWrU8hBocfXmSEowbJPAReKiPcZf1",
  "key30": "3EtqRgzVTbtQhB6BswwvgG5ruJPm8KK5268JWTMheE7K8pNVTjYj5GNTe3w16rgbgTbGYg5ZKRSKQbvvy7Z8TfDo",
  "key31": "4vk52WmzMb6CKWV5y7QsLDQ33g8rRhLhtbdWFJJCWoqzutC3HhHqsKiTjBkpV7Ma5C2Tp4UkkeZbnFuDcKXEk7g2",
  "key32": "4ZzxXsSjf3UFfmyyxLrqXFW4DnjWzfbcK9YhrLCNZof9ms7rpnmrqj8iSWntHfXJcic44DZgbENUoZMX28XRrmYA",
  "key33": "2CSV86evChaegjpyZqajRQqi5Aparf7eofnN3Fj7sGtPzrYFTnhgCBewzL6Bs6i8SyhC9jZFmNeTWza11ArAtC9R",
  "key34": "32QjEw8qNwwBB9bxav9kRbVXtqFeDzyyMxpN6xqjAKigrK6AvtwJnw25AgrYVmfmEiiAhxHcEN61mBXjvnbAtk4W",
  "key35": "36SccMa1C48bbrBLEcHXDp5JgnWAZk6E155soLWNS9K8saofbxSqrHiQncLayQw5CRaynQVnkxF5AALV6gfydwhq",
  "key36": "zDPu8Jf1vbLcqpUzJ9m43272oXroKvDEvdfAEEmZ2ewJtgzgW1jyujFQJKUZLeYq8tKHzUexZ186KNhsB65HqXe",
  "key37": "5StJhxvYw3bRPk2e7UKJYf1qUbazNH2iyF8oYzTyFqYvHAjCLuC5dDvEEp2RNP5abJqDYLmCJqcpwqdfw14cHAwR",
  "key38": "LbkMEE9CBxLsFhCXZia6PXHoQBsnr2tYZXkXmcbjooVTsT4Ro5SNpB2QYDif93QFpCGreBrAnKTCKctusvXpCgY",
  "key39": "SanaxfnrJF5w1iwSUUhe9CpeVV2CzGuM9phnXWrT4x4rtdAgfGn7qQvti9htAzu2P7yMKD4qutt3DVcimb6zoYz",
  "key40": "5Ld1Qcsfb6fhjrPxVuqjWKXzfbFmf4Decu23rwmUdCM123VufqrSHNETBG2tNQ8JytDCymt8EHbVKMzhFPY31HAN"
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
