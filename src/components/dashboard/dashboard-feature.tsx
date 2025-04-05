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
    "4soQEhQaKYN55Zy2AyfNjmsiGcsaLBD2UmTNEH9qtc1urCYBMDzbP8pJcufpx2CrQ3rAKqEKPkXPQiocga1wWdvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MeHBQgTGdnpHNFDDdSrRs79bgGVpXm7E1swp4RLxNeTsYddVetz77vokKmSXsrsjMJzZh2X3m42y4EybMS64GVX",
  "key1": "4FQd83eSVE3uc95EoFt1M8jhwNhTXuZtVcxUsWxQDayL4zx8Wkqkqdh5vLsJXn79mwYvmrd6GCVzXZwVFqAUHBMz",
  "key2": "5RNPeQEbUXQFnDDpTAA6P1Jh51ogrbsevkQEZcnaBsKCcjX6eRRxtDSWuSrDm8GqrukWSwetbreVGudLJ6SCzR5W",
  "key3": "2TriY2NvfG3nYmzozq4qH9Rn2WhrEATagvqKyDaRLJvp1U5DytuFzZRPp6soznhCKvNaaSWqPnaMjNUeGeMwUJEz",
  "key4": "2jM6FntmvQGHCuaeDm9G2jQSC8q9FYHpxfVaHSmBJBitCNJcp1p5RGm7P2zNFWMnCDa5R2qY8f95Pf59b5ViWFm5",
  "key5": "FymxpCv9rK2fQ3w6WGRQint7BHyFpMfQqQmDAXLPTaqeNQrCBZGb1PTcVAj5M11r4SDVBWzMwxHsUn7AoRhQycX",
  "key6": "354Bxd9XybUB6FaremMRRu5jFB3JU8vFYMGbr9xiG8PDmZaq3fG7Q6v5LkMYLCYCHpUUHAKnkMYkrZSmstQ1mftW",
  "key7": "4Nr2FczC12cfvKaMZEx5NQNdNzMFAtPbY8JqmWnDtSA4mAQE6iB74AZm18Mhe28Y8eM6PYMVsRMX5EDsGtKci8GR",
  "key8": "g5yyfzHkL2mpBo36L9Qhup21KpHgixzCVx2cxdfiakMEedN7xrZfw5FpTxhdMNwu5bKD4QuhxPQbTUCox6kgd13",
  "key9": "cbVxdtRPnokryFiv5YWGFjbzr5bpfHEZHMqhTg7HpyyqjXHcWkLAYFJRSETmeHhkWybfP3PKcmNb9CWQfXNJiui",
  "key10": "2XrTAs7kZaki3gQ6Fu3fGgN6uDx6VJaFzHBoS9Ku9SAqYiyxAki2LNo1PJsg2ghrjvGqSuU2vL2a34LLKBtq6D2d",
  "key11": "3xMfReVEi5pGHqcyk8z7vCjdvZYMRfALqyXjamCih7cBjt8DzKJPPQqeczT94JECTVAbfX3gmAtCThppUDfsqdLj",
  "key12": "5fjfaAsxEwdVZzgkjZZKfUP1T8zPkqvAmnpPtzh8EmhEick5Syz4yDDHmdQJ9sfdc9Q9BhZBHBGhBcvJsha6SbhQ",
  "key13": "5fwH9SMtfiPBwsp74cyuDQ5jfMXD9SDUYsT5ygSLXeqNgMB5swBR6KWeFm3tR5zm6sKsZGW5Wech66SLhWf7J9mc",
  "key14": "4DSLWRX96DGkuK1K5EFXWQAToPAmWndFfoPwngEXyL6eWh1G2zFCQmMfr1PjeoC7LGDhbgV5YcKEuBBu1SwfqMTK",
  "key15": "56mYp4ET4hwnKD1SdhuinE5nWrv1Eb2LvaVwt9XhNaQGheqTr3Q4JCH34X6e4A1J8Bhi2oeF2k896zkUficTyyre",
  "key16": "4vHmGCKd8HVx7KkXNG6abYpviLFjXTuyLuGPnznugwafn2HAd9fKyjv7ydCK7zfarFJrExHwAUyLCpiKNyGGv6wQ",
  "key17": "4ZkjqKSyvzYpz4DLLR772c7xXimQsGQDgRgooR5tt5Bzo7WhVGAmDP8MNBCtvyokJ2QnZyoL3HNnsRwSeDiQUgLA",
  "key18": "2CaLe4BawB2myGhqBxFXBC1GdVHfC5deTKLDYYrz9uz8ijA2x6cTv7X84vJkFfGWohGEe9AkTh6zXkjJA99rq3Z3",
  "key19": "4EtPesLsTT5hAehfn4cb1TXnmzwg4Tf2xvfQ1MsFTh1Y2XDEixAVfNMUYYw9aCLxPHTav6UGJb6zhj5x4fUuEAzi",
  "key20": "2kLR36nqbYtf3VshR9UaJcz3jxr9k3KBWqVTbPYaXQKUGEJ4ZeNchCY13zPaCm374uD8XSSafSDMjAVV1Ds1BtbF",
  "key21": "2BmcavHuReLnMq7nV7YDEpCEXZKAny5M8Q51DoGG6o1PrDDiLDmqjNtm5ZPY3x9E3c2hNojNrBh5VMFxZEH3VH84",
  "key22": "3saceMQ9CXLxAZfoRWHwXX6kWkrfygMS7vQT9qPSormECKTPhkVmDRrWcUKUHqoC4j9ncrBYtVzmKh4BmV6UGyv7",
  "key23": "xMY8e9jPTF6JVzaEeKSDKEEea8GAf3Hzqmwz2Xjb7XGVBRqugtpYhbu2JeEoFa24pycCoh1xRudMEyeqX8sBXXP",
  "key24": "2SJxnQ5zLKdoX2sE2GRDe7GcwvaPrURfq29mvGfacKpeUL3iiia5xFFzHAy8A6VxbKu7ijqqy9YtjBTJRHGJmWug",
  "key25": "3xGPx5shihE84XLev1wg4q3EN4k2riAhDTPHv8SXe7B6QyiPagjkL8VHNEiJ8sbcKwAbRhwrkECSb4ujcSEpgnxP",
  "key26": "utUbvuNAVcQtAq1VVxNiCg3tBooLLLdKSQ3uuJA57aYpFhYdha4rdMMEQGco1wu4cDXXYpxpvPDhEzwUkVpBNxs",
  "key27": "34FrrSpRSXBKt6W7JKNhh9Aqa9s8SFJDiwK2WMb8HG5UWe8RjZoKgis5roBMwDeo833EyskPbRhTzrN2C3ge2r2d",
  "key28": "61tyjqgdbCMenStY7TkUXPXWUhmRj5C2ntbh5oiVErt4JwbfYzkaWaEKZFAzNHsrRJrZVx4CdiSFHmrs7uSzNNH8",
  "key29": "ht2NLtjaeozdwR2aEoaKACNoNfx7njc1dkzPKAauA4ecJRKqtgg8CtsRx4JsX9W3NLiU4eaMQQbrfTqvFgQ7Kow",
  "key30": "2qRpmSt21kX6tjQaHoDYwCVSbzjLV6YEEJZYNbEBvMg3MFz43bdgmTXsj1D5cutJAYR3h2DEck9HiJNakXNzikg6",
  "key31": "h71rFwV8SMDBMkFc49VA1Qa9SgbTazD8AnR1us7eTHcguyJaw2n5yBtwZEvnz8fcQQDbMjJnuucWsj3PvWQYarZ",
  "key32": "AwcwcdNEc6YxecSffiJrKga2LbhqP54gsjVXUKW92YJrSh1k4SmJGt7SiuTS7ECzcZfcRo1dcn4ZGY4XscmZiPd",
  "key33": "5sqcv673NuSDpk4KPrzzKQsVbF6ffsT61sANqpAcDuAiQ65mxSiWayiAvfqFAtcjVBCydyadcui3D6Q5N9yGwbJC",
  "key34": "2ZaJEfkjhYwPbGuuoUtVCbEZoeNKy4qY35T74wPthScKG3ho8HbbhvP9i1zE7cidSLY8JW6koFwJmWJ2FH5YU77Y",
  "key35": "4dzSYDqX5R9JEt5ZK12g2JNX3kiwUK2EfZArHof9B8ibbogcvRGH7p9GmMqk4Fc42SKJ4rmLCqBCeAiJqfhfSmWm",
  "key36": "3icmX8Uy2B5Qg8cbUgmdDVfvCqg2efxkJ9LMoTDusgBA4GLAACvRFDDtLJGQUUreZTierp1UqKJZM8YMvYvSwyZH",
  "key37": "58R1Le79Qd389UxRLTWPjZF5PNsJ2LEXLNmiRf2x9EoUZQfpWceP4HasZYmoRfTtpZyr1kZ8wujNwCxZX6xc3Fig",
  "key38": "5AFiyND3KdC2rR8eVWGUsF56A2f27QCnaJeeBtGg84CtXbCDundHDt13RErfuXFfnkojL1esjYQU5SRLexwh1yXb",
  "key39": "MZvpszDZdAdxMGCP1a8rYF5m12cJycw8jRQjT7DotLt7inNiThvCeiy2rTs32MR2f9jmMjPhGLQAk5js2zTzuyQ",
  "key40": "2joJ8jkh16rD7LaH3fjrHgtTQ4Rpj3qfbkNCjm2DoC7nFMMmyPp65AoUXA6qrv1n5KJafB9uf83Xqi8CsQLf7AyL",
  "key41": "2xuULL7cYHGnC4EnzK3ptiDFTAwZHw9mEG1LysFhYBRRoy9eXhXjpC84t1rWMUnUxdzRB8bGNLRtyCzrJrgHDFmT",
  "key42": "5b66rV44hdDyTZDxxGRXN2E8L8oow39QbS7NzGDznQLAizCkaJVAbDTJuA8dsANaDxTroMezvueLrvE38nyrafbq",
  "key43": "G3ughNg8rTyJVALmekP4AU2T1PnKXmZbsymsC1XN2C9pZz1MTKmVaeU8C5vZ28EEjLmokmpu9fFb54uX4epwc1f",
  "key44": "2msQ25mSbiqMqvCHLQ7MSdtusE6fU9uMEAjx6W1h2qbdYvdX8Na6fvSbu1yF3hFLCU1QVHGr8wJXZeNsw2HuSCoQ",
  "key45": "5ZszriksvtuUJqADUdpx7bnYD6mLmeqwZv1h2E8FW3E3WcWDLG8vYiqS9AhjALBLgd95dDSmPwxrhANshvqGyAqy"
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
