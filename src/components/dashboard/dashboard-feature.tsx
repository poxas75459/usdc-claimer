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
    "gJkiR22i4C9u4fC2bTaowyHrDAvMoDTnwryqGqLMKUDN8J6nkp9zUVs7gB7keyCxCt5i11NAz26xrBuFCx5A4zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C99WibBerQYu2rbw4tk3hYvSrdd7UWefLpVN4bWgFdqAXNVcDqmFrhBcAF2HvsrJbGDyJ9w9ABv7P6UFp26Ado9",
  "key1": "25t3XHTkNw6yes79dkuHt1BKWjREZRrjPkn66HXzfFXEM7MXrucFWtRGhEPYsxB5dxiuHN6rnGU4iFNimofu5V7t",
  "key2": "4uAM9B1vPb3ECcDupqxbJBS5zdmwR9M56MDTMWHyXsRTUE8xgjBVLQMFPj33DXKG38jDPfd5HBU7DzoArdJm24nS",
  "key3": "4ThLzTkSRTqRmm4BsvHjmj8YqGrbM2mft2FRY4jHp3pn5pj829MFqMihQqR1mzzBXWazVLBpMLcSZaRFEMhzhvMy",
  "key4": "2n67Rg8tfM2ATPmjxNVCosWkMzetKMKGYFQkkYvbKr4eDHiREvNgdb2oU4rAQqN8duwCQhbbY3w8UDZbeXdLkYV4",
  "key5": "SkCjX7HzD9bKbCQvCwZfN6cDM3QULyP7pXDirMyad9N3vDAH4YH1XEfoHhKmqm7XCWH9YKnubC7DhffQmWjgcsX",
  "key6": "4UDCLYBNWqb1gBRp2RTWE6N9PisfvVP7mxfGmPPew8BibQ4Wo2U6pSpxxyqJnt5KSBcA2zLdMu1DUyN8Xnyx8Wfa",
  "key7": "4oxKQzfqrAwUG2AKr8RdgSYhtszoC5X3VRR4uP9jSfZabaoF47xVjGwR7t1GvLi5ZZg8cBrWqvRrRTTPUArgHBYi",
  "key8": "2xZVeemko3njbnQrnGVCKdGWhshJov1y312fcmDfoMNbim7pNLkrQa1noj9A6hLBFtR3Xpu5LZoJEscuYwPjF6xE",
  "key9": "2yxCsRiK1jhq92LWcp6ghTRivd4uZLmgsS6gBDXnTwTeaBsN8mzusTHEUXCc8c99K7Jt4FwwxyeTVDbzkaTPyDBQ",
  "key10": "qU7JR9Jfh6gyut76ePHX6Tci6JLMAforBZixbztp5XuXSuDneJHxtQkYoSKMYWaqqzpatyL1kgQeWsuAW8JuURZ",
  "key11": "2bPSoAQ6xQEHy3hSqr9c3KsVWURePCWH5VV4vD7jEeyuWXQDuzPAKi7vzxhNxjEia6KC49h29Q1yXtHG8cYhTjHS",
  "key12": "42m5vSFhz8zEoq4J5Z9DQndjHuNjJLy75tqWXGBEnuUKyite1siuSy9z3fhqDtdSxym59Kj8iGMh3RUiHTyKdK9J",
  "key13": "2zC7ZcNpXLoTXLwsk4CtreLzyctNrgy6U7Yk6VbYQbcteM18hD6Revbbu2dcDSwC6eKCywYiWPcP9FCV3hJkUVpW",
  "key14": "2tiQouHaAiwv3k3Wtbe2tWvAFSsQkH3hqS7Q86vv8GWjoSMg2Mnm21PcRpyoBfemQ8pF9pQMoSyrqtatU3JzHoz5",
  "key15": "3YN4Hgao1XHa2HiiDCD3G1UCRrHNdJWQqEJDKkydU8z7UCzzdPhDvQeuXjbo7cLBbo31z9yRTDVAjmGxp4xhvYAr",
  "key16": "3hkhMFRUfGCXCBX8hktQx6EbZzpXAtmrzNTsZpCVNkM279ZyaXpDkNH2c8p3kspFG6AdTs4Qd1yGN97FcfDdDHus",
  "key17": "5TzriZkWQoxxt5TDCmbXzWq1b8kxmxfd9e6kGS2VCRvyTEB6u42Z7YvTUoMtbiFsejS8Aw9XQAmd4vGpqhsMb9zY",
  "key18": "BbJn6Eky2xtaUoRAmDNSzc6Smi7hYNPDYxy5wGdaXodCe5qi9zgwQg8mB5J9ZvTw4B19U82JRpvCkkfAJVQy3pL",
  "key19": "V7GSsT4GqDBf7DGvMAuro5Hp4ESFJkM7s3NjUfAoA2tCDH6b49ZDRd6H6zzrvw5JFEre7Ucjg7WzR9ZhC23gkJo",
  "key20": "2NsgZmXkGANbsvZBaLBw9iqw8KqdwiyciLsviuQaxSP7KnQs1BfgUtLnneEqkAGtzxQxsHNb5VPXjhmrdpjHre7t",
  "key21": "435djGVBr2cpnbWystSbYcStHhkARKpSNm7z6RpGarAE6dXhugp1QaJzkm6CmdHgwXzBVknC54ZgTSS6DaZ43Y4o",
  "key22": "3Ku4dqzVgCbWydfFwswS9EMDTEXEdcbP6y4LWx2DQ2TeFfUzQdrmzH8gH3WYut2CmCgd9LtpGoLrFncsJ5rdhC87",
  "key23": "4kUpEAmWJyUAksE8GjjaN4pCRF35dtFSWusgEzDRjYqSjUt24PyE6u9zCVgYiY7FRccKo6QCJsFeSsfFT5Gxdr6e",
  "key24": "5Khn3ZKW9WCWAgd5puoxAKTgRMnah61AVAZvY6tvS5CiLBAfEK4TQPvWNCim8G8k1wnuhT5gmhFNqkWKXVeriwbZ",
  "key25": "4kD3dEaZkkLvWFj3d5EBvxPmEJSXerTnkthLXo6y7rJMfpJNQryRCgV4cHAJ4NGgLPaKebvo2zphEjEoRuMYd96y",
  "key26": "4Ek2XV4ViRrejFQxwMzcXGFyqUEo8MnGtwmaC65FVkMC9LwFrZ82dvx5LfypRifu2dE89mashRmVT27wNjVCVamt",
  "key27": "4VRm4zveZeQia8b5nEo1JbHiFtdS3bM7KqS3ShJ6HXkum6NcpPAeeuq3HKjVsp6JRqYhBndqjPvycBtY4TBE9bCZ",
  "key28": "3nycQ7rh4Y2pCwH64swWFfsHSQKEMH2xo3ZiqPvsmtyFMFQDQa9t9YdqYbTh8mRQ8TsJ43HCYQRPsZBDproYJApy",
  "key29": "4jedc61NDDSgW3BFyP5LDhEddYadWp2T8rZNtLKjT7MQrBDSp1GNFhscp4BLH9bR2eWykP1x3GTkbarxtxpEbrzA",
  "key30": "38Ryu3ezo79cTuQBAwTzhknVF2PzmVvA2dyYvHMpvfLar4T14rQoPkqT5F1qghyaAhKBV3CqVUYv7EErR16PddGK",
  "key31": "oEzPzz6CVZBgWyy3qCSYnSwwBfbXcwHNeq9ju9rHSDQsV3fvzuAPDpGTP1di2rr7U8n6QCTEoFnGLez2ReKhkBG",
  "key32": "5RacdHFWrhyjaVBogTsps5i32aq8LJ8pEmhNPG8Bih5tetUee7iqFQxQY6Q7jWcQrSJmHdvGKYt3N5aUuX4UUr3P",
  "key33": "5M1Vj6Y1y8DSSpy2uRipcf4iSynzTgfDtsiNgmuvDTRyrZkjEf19wHpYh41WFHaRFEdugUXcBx6pBbf7BSMbKa4f",
  "key34": "3EW7zq7F5Y7bp496hwyY1UR8UMNLYTjJfkiWTM5KHR6Y8TxzZaA8mf9J3qvK5EQG82VFNJpkFtzaSiobCbCgQMjh",
  "key35": "4d1iNGAiVrw1D5ESoVKw5rqZWrAEjhBLLmNSHJ8xLcSZrLo5JFi53ZDuWfZKvepUN1YZgJVMZeamT2BhUK6nvW2q",
  "key36": "3u2JsBXqabez3SZFGxWxVjSJVELguqATHbScqzm2T9NikEBbP4oudy5PccbnMaCFWZ4QwobxBUunF1YqPWXi8Bpy",
  "key37": "4ZRPCpqEquchzpGAiZmPUy6jFkTaWkxLprCXt4q1VvzEDGwqbDe3QbDAMdSJ1xcsEKiFTKswnEK9v8D1LLFMwWCY",
  "key38": "299nmcEToCagAC6L4rCvdd6kyBRcSLmB82gsxF54tSxFXRPfjq3vdcRG3AUqSFCSKtZ7TfJ6DJB9ZfkiKwPx72CQ",
  "key39": "2NqQwR34zTj1AdchFQgoumKkvg6R7r3kXyXHAzX5zRkE4RsRimQcDA2Kg2tSndfMwmzWqEWLpFmfmNJf7ATYppf8",
  "key40": "4U42MU11eeB1rtWHKRt8fbr1Zcp32WiF8uJqgcXnvwtvLnFspQHM32k82Uj7SekKeM2NCjeEETtTpmsRWkk1efKN",
  "key41": "4n9YqN9hbhpTLobwbJm1VWvqxk37FEcvnNYo1fVTejovNSpwawHF5ABVKTQKcuVuTjH6y3LhdmAve69eiKSM1fVB",
  "key42": "4KBZZVch6LXAhF653nSfL3tytZnQA4cqeUAFJUCrMewPXwxdAGns5NrnLeYiQFa389PEE1sgP5cqNN56mbFZ7kGq",
  "key43": "5WU9yGzxgYLkrM1gABMh7rTZCY1MXa13xGJA5KtVhLKG8f8GA2eDMFVgUNnGx1ZWpYZkGHXHHAevbs2Y8boFmtvp",
  "key44": "2YxB8k5nejMwDbvta1zMrtuaWi1jjJt8mTpkqpGhMz5vBHxkgPxWTovchT9V2Qyo9Yi3Dr6e3tTUioqxehRWKwrR"
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
