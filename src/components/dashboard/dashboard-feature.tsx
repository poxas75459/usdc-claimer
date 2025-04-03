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
    "3Sj76xMwC8Mh5WwR1CuukqV6uXwEmNvh18Gz9WuW1T7n8vn3ZXayak1SKKdTvXkNbKBUgj51JBzBNJp5iG481bPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KvfgUaPME15ebhCvCFum8qLTy2spF3Xe5s6Jxs93U6Bvdg5bxFibyUfqemKEU9nXbZSNU2hfNKoQFPe9iPMyraP",
  "key1": "3QVDkycu8mgjKLNdppWLc4ssv9JZDigNq3sq4PbJhNVN5SXSMTqFmfy1QJwMUWeLbt66YAVFdSYSMYqKRsedWDNZ",
  "key2": "dR3co3FUQfgkhczy6HXxTuBZB1MuPdhhxB9qz1tzK41hmEoAKV5fbveB39WqgpTriNayD1H6moH5MqkGWEnL1X3",
  "key3": "5bDJEZrxK8LwNCu9ZaEMHa7DuJNe8XtMhFSET8ggekZK6CoWenwtSYWfZEVZqHYRhYrC3RoRNWxvkF48WNwfEYaD",
  "key4": "i8izovSHzbVo3Ygtm3tGEfXDu27Bb5XGZESkhZt3iZgPyuB4oTnFGtEqVjwFTzX92t7f9LQWMTG1BJcSfaJVhgq",
  "key5": "2XW8sm17SVmdAuoQxNw6bn6iBK83dzEhZa8FYWhjxDKxgiYhkW4q9pSocTuToEJNcK2Ft4Z1LFLukzaSBzzFah9m",
  "key6": "4vthu8ijFVHPVZLKoD7pRfjCbqsyGFtKf2YRQdCe5jK6FL63tn2JspWXMv4EWu6bt5Uy4BWG5Q5ti3S8CBv7Ey8n",
  "key7": "3pYMciqr2gTVFVVgWXBrLHBSNyRk5emdMieQ9yduhUE8wGiRytZBx6rPtTfbUg7qdick1VpQV2CiVmxnZkjVCChF",
  "key8": "2V6kr2Cbhymgh9vexwcL7iJYbGjUmkXmRbFtRLmFWhqSYJ1YpArw8x9qPKu6bWyrKWUWcmCxRemj82H18YPo1yj5",
  "key9": "4YDvGYfehB5C8wWMLyDh5otDEYm89LyrFM5GAmsFhDiisSsVFt9fu6o81dtXZfs3BEkcZ4yUBRpNRZm1s8LS8yuv",
  "key10": "5QvY8WiitVN3UQGvnAPpvGQYThPvvTNSTH86hmNCBvzfanN7XbYrtybTWcsJYabsuxQ75rzz95gFGKY8kddu2n72",
  "key11": "2wHhmposm4RLTaUcXt6KTst3B344Kkx1tkY2NrJeEcRaCJgBfSuRL4zq8kqrBamRJAARZGZcdsuY3DVTaLjdC9pM",
  "key12": "4taKgp8g3igXZ5pXSsg7xWE2DXTnWAUFcb4fARirWuaeFTABNcVST9KTwQZZRZfrzkz7BEFebavfSunmVUfSvQ9Z",
  "key13": "64cZEMreVvip6Z5pmEbbdNv4hEjCCpR4G8SgWPjgw8FJW3x45mPWJh3ktxbVXWLmSCjnKcBLmK7u9MGsjRjQezZY",
  "key14": "3XgtoquZNw7JHxv7hPerg9sfedKoGc67JggkF1UjPFk5uzQS4RB8Dqguxk3Sy5383zBPKZbgz6ogLf5mq17mrV7g",
  "key15": "3HspiRqaWf4pCCTYJPSUrCCLyprMminzHnEyfomGC2F41buoQ6ebxtjoAm24DAgXL2Zn1Ac6KWAg4hrHnnNwu8FU",
  "key16": "4SZUG85AK1kM2vqJTXsrsB2huyFLCZwtk1jft3kVpTVB81PuFXR6VLzK2BdtJj5tWtntiijhcyJMzc37ZetS1cY",
  "key17": "2fFWve62V4X6KjnqS4jTA9vt1MWStZXnSFPkgtG4M3h7SVgwEwMp7WAJNehH5Bh1uu6XrCuXpHba3K54tydNYWwx",
  "key18": "SGQ2iuaytJ9WL9xGt3f6XWJR5AdDqVTko6UBSR2FHE113dcV24dp16khb5QbNB5g8mV6PefYWoKA8EKdTTpccqX",
  "key19": "28HQnkeA9JC3iZz6WqtBDt5FBTW4PMvgf1XvGoSbzjwwhJypPRK2jF7kUhKuKUVdbbuSndEcGAivJGJ9c61AXqTC",
  "key20": "wH1zApiYChRLMvKsuYyFdYSwZd9J93DdBeuAt2s3LQLrQ3vg6WUerUosoquMxLHb3KbB6Ew2qK6oF6F2CdaE336",
  "key21": "8MKnrEubd3nbSjJYPRRtGDcQTMMy3ckwvo1YhhNwBMAS3JbYmT1acS6pazMgBAGZtBhZigFHJCFcNeunqm5Z9X8",
  "key22": "32uwAujhgrhg4wfnHAzk5gCAcGNyX7TXh59Bd2pYGLrbaNVfmnfMwNzKWdwUxubj28fuyB5ydsc7EbeSmwRcNqfH",
  "key23": "2wZgzcnKmT8wwLSUGkTDRVs5XocV5QZUg38qWPaDBCbQWBtGF5NNixyc281LyGCJke6pmLp3FnjW7EjzbYQ4dChX",
  "key24": "UBc2RoV9AkidcXM3Jyo4otpL43Vhr7TWFKMLtShXqqEoTfJ7pcvRJkZBofpdimnphSdC27W3e8dbGBL1VF58KVK"
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
