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
    "3CiEUE1c3V2xjUpNHQCVroKEmKW4PpPkZBjsac5Hq29w4h8YuaJHoCTZHtS98m7aw4F8xVAn5ynAt14vLxGmxzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nADyeQKQWf6ybFhU5teMwQa3qPCFuXoYeDVGxHKdJntx7a4PKMtdfBESVPAeZdiCrEDmS9mWhJ1Hs74LkTV3rag",
  "key1": "36t1xnm24RFzhQSdsYmEnpGqpomPx1edgzFg4LqyQQ1B2iMMGwLDTdsZTxPPpQR8NEBNYXSg72zeeH6Bdq1SXnYt",
  "key2": "63eEzJ846Ni5mRREY6HpM165tSBL5g4Gk6Q7Hc1mzJM5Xcj5S32UeSp3NmTQD9m3TiGSfodN3CcD18wXzUu7TVZi",
  "key3": "2YeJarXdHUxbuZ7Mcedftsu8gKJJkXekmiYpahV3TZDj3LFFenFuq44wWmxvgKDNoB5RmDZ46T6h74n9KwqoTtp",
  "key4": "GUfJ2jY9YpxMSQPdnannn3zFYzSdFpSXeUx2acsPWFNpWM2biotGuBnqkynE4AtzQdBxCyCuQs1pnW7mBc2VjPz",
  "key5": "22b3XgngeooLUYdoqfuDaM1SNWwQHtgmAijecy6QwaPVV22JpNhFQa4us1GgUgHJQNBspwtWwv9sCbNmCC43bR7n",
  "key6": "3uuzhf2zorxoAhmVxRXzjtiZhDKJ3dqXippjJyZ2dYcXaUwih3ujce2yBHL1hikRszzw6FbsWgFacGV5zEWpvJFj",
  "key7": "3vyKcMfjTJQ6cXyMbLV5GgUgc1NS8CHV71TAwHHZgmb816zkjT9tJBTyk4EuGbBWxqFouk6dXzqUJ4M94e6cNFZg",
  "key8": "4DcCsTnw82LBH4GRkYxLCPmDKYMtaMwRhHjQ2NYSA7heuWy8y9AR14Dbnafa31hehE88EzRaau25UdCSqo9kJyHf",
  "key9": "4TnJjrKUnSpphWQpFgdYZpbxnCFCiLLxeA61kznoK4xNNq6vkfMds7qUiCQc3PGBMSog9trwHb9vtGMWGM1atowy",
  "key10": "28ULG6g5r3M7jXpZxo5U5nMzVYLmhovuUJnmtKFCoS2EPTNp448ZfecZ7SpP6wwhCs8vdvZiS3wGYD56cn5Yk81b",
  "key11": "3FducwUVFPSxfSbaP2Jtg2fgFm417CPorW5eHtSWjoLBJeWB4F7c6Tbdb4fe4eEw1wKLKXrbcDarNVRqJLq73uFD",
  "key12": "2YSoT3mB5W3eQBW24rnrT3GKUFbcP2K9oa2wG9YopKakYrAbF9uDtBH28FbXLJ6kYEzfBvu74e9pXpUwDEnsGVxq",
  "key13": "XmCQzbg2xFeTgaipR95P47F51MjtMRa1XuEDyMGgBfVGkMrtRJRnbTwDhe7jmuqGDHf7PA1XEjc1bK6rC8hBaaR",
  "key14": "5JzzVbm3orcFM2AXVyu5m9bcdAB4MtkYAPHZUgxWbHb1zfsdtCnW1S2SEaTeZtgp1eLmoKAARYQAxQkCRpHAmZUf",
  "key15": "4GETgEsvTurNSWbZwhkCdKkfPpQG7gZumuYqaFm3qTMvxDrg8PynhGBaDKwo1Zf3imCvNpKbhjsd8QS1dqgYzMQg",
  "key16": "2aK95M9gHiwR1B4haqrhoEz8Aikm2xYp2JN6ip9t7KC98YDfYGjwXN9GoCpQ8qdXpwySsBBTCVESy8cMWkLbEEaB",
  "key17": "2KG86ieFGHu4oeLUWv2BpDaMWqDTVkBKDTyRVrMbMsUXrv9EfzMFypvHnS5fMN52a1FYBfnDc98qAxPhNkwUKmft",
  "key18": "36pdh3hM3tSprcWxVMHbaBboTRrTDbr7Svk7HdCN3sZioJ5bSd3TXztZHYafnQKgHZQGgYdDai1bBG4FfWQKuyzD",
  "key19": "3G9zshQzv97dmQTnc3RBLz9GCz9ejxFrnQtyHhmXrNo2Hwi2f1EnJWT9xbwDPfLqRA5NNejgNsSAHggdkQcig4Fn",
  "key20": "2rfPegq7Rs8hhSVgJtDin1fhcpMapwSxke8Y4ppAWw1x5qQhQ3djJLYd35MVw3ueYVYysYEBy5dAmZ9yipi7mTsn",
  "key21": "xNABvfsV8qxLcjXL4nJdaTUAAa1kpH2HDoVWyMtASPHioA4zK7V6qa4Ngicdd6DnA7GbSp2HfgZER5CCHqXw8CX",
  "key22": "UdizPgXdcmfWguAwETCmmWF64xY5RqcHhxr2cYmcAB5Ue1nLwhApK6adM4o9xQrfRo51ayXwB43xacpCRZUc8TZ",
  "key23": "U64rSGEqoQ42fHsS1pQ3EYMPXdLAhfGayHeTmuhLHYh8fkjmBBDmPxSfBdYtqsqNxo2uEpWUhTYEmDiFopqFHcB",
  "key24": "4jPFtRmSkLB1T3cnjm5EBR2R63XJzJA96u4Qs6Bqk1xkXhzPkGA56kBVMHHmDNYk6JwRaLihUr3xqfQvb7Rhprrr",
  "key25": "2YyP9Jhop34zuAqKVkroHdyE5BNSRumSisGnacspDBLX5GayaeRNH2pazQkZGTgayWVd68BE3iw9TgWZaV88FZUj",
  "key26": "3hg5LbSgpASSFUM3TrDecRNdpaM9fV2aQcR9BxSPtbVYLGGrRe43xxjF2TQ7d6KaSj3R1ej5KbC2ayCMDwpyhrrQ"
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
